let numberChoice = prompt("Pick a number between 1 and 10: ");

while(numberChoice < 0 || numberChoice >= 10){
numberChoice = prompt("That number isn't in the range, pick another number between 1 and 10: ");
}

let randomNum = Math.floor(Math.random() * 10) + 1;
let truth = false;

while(truth == false){
  if(numberChoice == randomNum){
    console.log("Congrats you win!");
    truth = true;
  } else{
    console.log(`That number is ${numberChoice - randomNum} off the actual num`)
    numberChoice = prompt("Pick another number between 1 and 10: ");
  }
}


