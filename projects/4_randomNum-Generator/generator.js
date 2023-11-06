let randomNumber = parseInt(Math.random()*20+1);  
console.log(randomNumber);

const submit = document.querySelector('#submit');
const guess = document.querySelector('#guess');
const prevGuess = document.querySelector('#prevGuess');
const remainingGuess = document.querySelector('#remainingGuess');
const low0rhigh = document.querySelector('.low0rhigh');
const startOver = document.querySelector('.results')


const p = document.createElement('p')

let prevGuessList = []
let no_OfGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(elm){
        elm.preventDefault()
        const input= parseInt(guess.value)
        validateGuess(input)
        console.log(input)
    })
}
function validateGuess(input){
    if(isNaN(input)){
        alert('enter a valid number');
    } else if(input<1){
        alert('enter a number greater than 1');
    } else if(input>100){
        alert('enter a number less than 100');
    } else{
        prevGuessList.push(input);
        if (no_OfGuess===3){
            displayGuess(input);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(input);
            checkGuess(input);
        }
    }
}

function checkGuess(input){
    if(input===randomNumber){
        displayMessage('Congrats You guessed it right');
        endGame();
    }else if (input< randomNumber){
        displayMessage('number is tooo low');

    }else if (input> randomNumber){
        displayMessage('number is tooo high');

    }
}

function displayGuess(input){
    guess.value = ''
    prevGuess.innerHTML += `${input}, `;
    no_OfGuess++;
    remainingGuess.innerHTML=`${4-no_OfGuess}`;
}

function displayMessage(message){
    low0rhigh.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    guess.value = ''
    guess.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">start new game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
   const newGameButton= document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*20+1);
    prevGuessList = [];
    no_OfGuess= 1
    prevGuess.innerHTML = '';
    remainingGuess.innerHTML = `${4-no_OfGuess}`;
    guess.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

   })
}