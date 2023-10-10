# The Guessing Game
## Create a guessing game for players. 

* Create a function named `randomNum()` without parameters.
* The function `randomNum()` should return a random number between __1__ and __10__.
* Create another function `guessingGame()` and Make the player guess the number in a *prompt*, then write a code that compares the *prompt* value the user inserted with the random number returned by the function `randomNum()`.
* The player has 3 guessing attempts. Store the number of remaining attempts in a variable named `counter`


![alt text](./images/start-game.png "Starting Game") 

* If the number chosen by the player matches the random number returned by the function `randomNum()`, a message that says __"Success!"__ should be displayed in the prompt dialog in addition to the number of attempts the player used. 

![alt text](./images/game-win.png "Won Game") 

* If the player's guess is incorrect, the message, __"Wrong. Try again!"__ should be displayed to the player in the prompt dialog. 

![alt text](./images/wrong-answer.png "Wrong Answer") 

* If the player fails to guess the number after three attempts, the message __"Sorry, you failed to guess the number in three attempts."__ in addition to the correct random number returned by the function `randomNum()` should be displayed in the prompt dialog.

![alt text](./images/game-lost.png "Lost Game") 


**See the images for reference**