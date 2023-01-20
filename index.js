console.log("Hello, world!");

let numberChoice = prompt("Pick a number between 1 and 10: ");
let randomNum = Math.floor(Math.random() * 10) + 1;
let truth = false;

console.log(randomNum);
while(truth = false){
if(numberChoice > 0 && numberChoice <= 10){
  if(numberChoice == randomNum){
    console.log("Congrats you win!");
    truth = true;
  } else{    
    numberChoice = prompt("Pick another number between 1 and 10: ");
  }
} else{
  console.log("Please choose a number in the given range");
}
}