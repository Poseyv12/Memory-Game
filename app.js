// Define the numbers to display on the card
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get the HTML elements we need to interact with
const card = document.getElementById('card');
const input = document.getElementById('input');
const answer = document.getElementById('answer');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const playAgain = document.getElementById('play-again');
// Define the initial game state
let gameState = {
          numbers: [],
          wins: 0,
          losses: 0,
        };
        
        // Define a function to start a new game
        function startGame() {
          // Reset the game state
          gameState.numbers = [];
          result.innerText = '';
          answer.value = '';
          
          // Generate a new set of numbers to display
          for (let i = 0; i < 5; i++) {
            const index = Math.floor(Math.random() * numbers.length);
            gameState.numbers.push(numbers[index]);
          }
        
          // Display the numbers on the card for 10 seconds
          card.innerText = gameState.numbers.join(' ');
          card.style.display = 'block';
          setTimeout(function() {
            card.style.display = 'none';
            input.style.display = 'block';
            answer.focus();
          }, 10000);
        }
        
        // Define a function to check the user's answer
        function checkAnswer() {
          // Get the user's answer and convert it to an array of numbers
          const userAnswer = answer.value.trim();
          const userNumbers = userAnswer.split('').map(Number);
        
          // Check if the user's answer is correct
          if (userNumbers.length !== gameState.numbers.length) {
            result.innerText = 'Incorrect';
            gameState.losses++;
          } else if (userNumbers.every((n, i) => n === gameState.numbers[i])) {
            result.innerText = 'Correct';
            gameState.wins++;
          } else {
            result.innerText = 'Incorrect';
            gameState.losses++;
          }
        
          // Update the score display and show the play again button
          winsDisplay.innerText = gameState.wins;
          lossesDisplay.innerText = gameState.losses;
          input.style.display = 'none';
          result.style.display = 'block';
          playAgain.style.display = 'block';
        }
        
        // Add event listeners for the submit and play again buttons
        submit.addEventListener('click', checkAnswer);
        playAgain.addEventListener('click', startGame);
        
        // Start the first game
        startGame();
        