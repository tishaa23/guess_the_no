const random=parseInt(Math.random()*100+1);


const submit=document.querySelector('#submitbtn');
const guessslot=document.querySelector('.preguess');
let remaining=document.querySelector('.remguess');
const lowOrhigh=document.querySelector('.lowOrhigh');
const input=document.querySelector('#guessinput')

const startover=document.querySelector('.result');
const p=document.createElement('p')

let prevguess=[];
let guessno=1;
let playgame=true;

if(playgame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(input.value)
        validateguess(guess)
    });
}

function validateguess(guess)
{
    if(isNaN(guess))
    {
        displaymsg('Not a number')
    }
    else if(guess<1)
    {
        displaymsg('Enter valid number')
    }
    else if(guess>100)
    {
        displaymsg('Enter number less than 100')
    }
    else
    {
        prevguess.push(guess)
        if(guessno===11)
        {
            displayguess(guess)
            displaymsg('Game Over. Your number was ${random}')   
            endgame()
        }
        else
        {
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess)
{
    if(guess===random)
    {
        displaymsg('You guessed it right')
        endgame()
    }
    else if(guess<random)
    {
        displaymsg('Number is too low ')
    }
    else if(guess>random)
    {
        displaymsg('Number is too high ')
    }
}

function displaymsg(message){
    // lowOrhigh.innerText="hi"
    lowOrhigh.innerText=`${message}`;
}

function displayguess(guess)
{
    input.value=' '
    guessslot.innerHTML += `${guess}  ` ; 
    guessno++
    remaining.innerHTML=` ${11 - guessno}`;
    if(guessno===11)
    {
        endgame()
    }
}

function endgame()
{
    input.value=' '
    input.setAttribute('disabled',' ')
    p.classList.add('button')
    p.innerHTML=`<h2 id="Newgame">Start new Game</h2>`
    startover.appendChild(p)
    playgame=false
    newgame()

}

function newgame(){
    const newGame=document.querySelector('#Newgame')
    newGame.addEventListener('click',function(e){
        const random=parseInt(Math.random()*100+1);
        prevguess=[]
        guessno=1
        guessslot.innerHTML=' '
        remaining.innerHTML=` ${11 - guessno}`;
        input.removeAttribute('disabled')
        startover.removeChild(p)
        playgame=true
    })
}

