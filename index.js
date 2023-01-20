//Get user choice
let numberChoice = prompt("Pick a number between 1 and 10: ");

//Validate User Choice
while(numberChoice < 0 || numberChoice >= 10){
numberChoice = prompt("That number isn't in the range, pick another number between 1 and 10: ");
}

//Get random num and set bool for while loop
let randomNum = Math.floor(Math.random() * 10) + 1;
let truth = false;

//Loop until bool changes to true on user win
while(truth == false){
  if(numberChoice == randomNum){
    console.log("Congrats you win!");
    truth = true;
  } else{
    console.log(`That number is ${numberChoice - randomNum} off the actual num`)
    numberChoice = prompt("Pick another number between 1 and 10: ");
  }
}


