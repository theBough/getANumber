let myInput;
let theirNumber;

function setup() {
  createCanvas(800, 400);
  //frameRate(1)
  myInput = createInput();
  myInput.position(100, 100);
  myInput.size(200, 50);
  theirNumber = 0;
}
function draw() {
  background("#3A86FF");
  text("My First Project", 50, 75);
  textSize(72);
  text("Your number is: " + getNumber(myInput.value(),3), 100, 220);
}

function getNumber(thisNum,howManyDigits) {
  thisNum = thisNum % (Math.pow(10,howManyDigits))
  return(thisNum)
} //end getNumber
