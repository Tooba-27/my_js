let randomNum = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#submit')
const userinput = document.querySelector('#guessfield')
const previousGuessSlot = document.querySelector('#previous')
const remainingGuess = document.querySelector('#remaining')
const loworhigh = document.querySelector('#loworhigh')
const startover = document.querySelector('.result')
const p = document.createElement("p")
let prevguess =[]
let guesscount = 1
let playgame = true;
if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    });
}

function validateGuess(guessnum){
   //it will validate  if a user input is not an empty numbber or between 1 and 100
   if(isNaN(guessnum)){
    alert('Please enter a valid number')
    return;
   }if(guessnum<1){
    alert('Please enter a number greater than 1')
    return;
   } if(guessnum>100){
    alert('Please enter a number less than 100')
    return
   }
   else{
    prevguess.push(guessnum)
    if(guesscount === 11){
        displayPreviousGuess(guessnum)
        displayMessage(`Game Over. Random number was ${randomNum}`)
        endGame()

    }
     else{
        displayPreviousGuess(guessnum)
        CheckGuess(guessnum) 
     }   

   }
}

function CheckGuess(guessnum){
    //guess is equal to random number or not
 if(guessnum===randomNum){
    displayMessage(`you guessed it right`)
    endGame()
 }
 if(guessnum<randomNum){
    displayMessage(`your number is TOOO low`)
 }
 if(guessnum>randomNum){
    displayMessage(`your number is Tooo high`)
 }
}

function displayPreviousGuess(guess){
   //display which guesses were made 
   userinput.value = ``
   previousGuessSlot.innerHTML += `${guess} `
   guesscount++
   remainingGuess.innerHTML = `${11-guesscount}`
}
function displayMessage(message){
    //display wether the number guessed is low orhigh
    loworhigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
 userinput.value = ''
 userinput.setAttribute('disabled' , '')
 p.classList.add('button') 
 p.innerHTML = '<h2 id="newgame">END GAME</h2>'
 startover.appendChild(p)
 playgame = false
newGame()
 
}
function newGame(){
const newgame = document.querySelector('#newgame')
newgame.addEventListener('click', function(e){
   randomNum = parseInt(Math.random()*100 + 1)
   prevguess = []
   guesscount = 1
   previousGuessSlot.innerHTML=''
   loworhigh.innerHTML=''
   remainingGuess.innerHTML=`${11-guesscount}`
   userinput.removeAttribute('disabled')
   startover.removeChild(p)
   playgame = true
})
}