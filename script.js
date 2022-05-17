/////////////// GET ELEMENTS ///////////////////////
const throwButton = document.getElementById("throwButton")
const resetButton = document.getElementById("resetButton")
const p1ScoreField = document.getElementById("player1-score-display")
const p2ScoreField = document.getElementById("player2-score-display")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")

function showDisplayButton() {
  throwButton.style.display = "none"
  resetButton.style.display = "block"
  
}

///////////////// DATA ///////////////////////////
let player1Turn = true
let player2Turn = false

let player1Score = 0
let player2Score = 0
let winningScore = 100

/////////////// LISTENERS //////////////////////////
throwButton.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 20) + 1


  //update score for each player
  //display scores in boxes
  if (player1Turn) {
  player1Score += randomNumber
  player1Scoreboard.textContent = player1Score
  p1ScoreField.textContent = String(randomNumber)
  p1ScoreField.classList.remove("active")
  p2ScoreField.classList.add("active")
  message.textContent = "Player Two's Turn"
    
  } else {
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    p2ScoreField.textContent = String(randomNumber)
    p2ScoreField.classList.remove("active")
    p1ScoreField.classList.add("active")
    message.textContent = "Player One's Turn"
  }

  if (player1Score >= winningScore) {
    message.textContent = "Vicory for Player One!"
    showDisplayButton()
  } else if (player2Score >= winningScore)
      message.textContent = "Vicory for Player Two!"
      showDisplayButton()
  player1Turn = !player1Turn
  
})


resetButton.addEventListener("click", function() {
  reset()
})

function reset() {
  message.textContent = "Player ones turn"
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  p1ScoreField.textContent = "-"
  p2ScoreField.textContent = "-"
  player1Score = 0
  player2Score = 0
  player1Turn = true
  resetButton.style.display = "none"
  throwButton.style.display = "block"
  p2ScoreField.classList.remove("active")
  p1ScoreField.classList.add("active")

}












/////////////// LISTENERS //////////////////////////
// throwButton.addEventListener("click", function(){
//   console.log("Player 1 Score= " + player1Score)
//   console.log("Player 2 Score= " + player2Score)
//   console.log("Player 1 Turn? " + player1Turn)
//   console.log("Player 2 Turn? " + player2Turn)
  
//   // Player 1
//   if (player1Turn === true && player2Turn === false) {
//     let randomNumber1 = Math.floor(Math.random()* 20) + 1
//     p1ScoreField.textContent = randomNumber1
//     player1Turn = false
//     player2Turn = true
//   }
//   // Player 2
//   else if (player1Turn === false && player2Turn === true) {
//     let randomNumber2 = Math.floor(Math.random()* 20) + 1
//     p2ScoreField.textContent = randomNumber2
//     player1Turn = true 
//     player2Turn = false
//   }                      
// })



