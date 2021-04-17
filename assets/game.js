//create an array of letters pool +
//input from player
//show letters that have been used up
//compare results
//update scores
var possibleCompChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var win = 0;
    var lose = 0;
    var guessLeft = 9;
    playerGuessPool = [];
    // This function is run whenever the user presses a key.
    document.onkeypress = function(event) {
      guessLeft--;
      // Determines which key was pressed.
      var playerGuess = event.key;
      playerGuess = playerGuess.toLocaleLowerCase();
      
      playerGuessPool.push(playerGuess);

      
      var compChoice = possibleCompChoices[Math.floor(Math.random() * possibleCompChoices.length)];
      
      /* Problem: doesn't work properly! 
      if("abcdefghijklmnopqrstuvwxyz".indexOf(playerGuessPool) === -1){
        alert("Attention pls: only letters are accepted");
        return; 
      }
      */
    
      if(playerGuess == compChoice){
        win++;
        resetGame();
      } 

      if(guessLeft == 0){
        lose++;
        resetGame();
      }
      
      
      function resetGame(){
        guessLeft = 9;
        playerGuessPool = [];
    }
    
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/guesses.
        var html = 
          "<br>" +
          "<p><h2>Psychic Game</h2></p>" +
          "<p>Guess what letter I'm thinking of...</p>" +
          "<p>Wins: " + win + "</p>" +
          "<p>Losses: " + lose + "</p>" +
          "<p>Guesses Left: " + guessLeft + "</p>" +
          "<p>Your guesses so far: " + playerGuessPool + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector(".psychic-game").innerHTML = html;
      }

    