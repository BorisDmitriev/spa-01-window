function randomNum() {
  // generate a random number between 1 and 10
  return Math.floor( Math.random() * 10 + 1 );
}

function guessingGame() {
  // your code here
  const randNum = randomNum();
  const counter = 2;

  // console.log(userNum + "  userNum");
  // console.log(randNum + "  randNum");
  // console.log(counter + "  counter");

   for (let i = 0; i <= counter; i++) {

      let userNum = prompt( `Guess a number between 1 - 10`) ; 

      if( Number(userNum) !== randNum ){
        alert(`Wrong. Try again!`);
      }else {
        alert(`Success, the number was ${randNum}. Attempts: ${i}`);
        return;
      }
   }

   alert(`Sorry, you failed to guess the number in three attempts.The number was ${randNum}`);
}

guessingGame();
