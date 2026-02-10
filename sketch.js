let myInput;
let howManyDigit;
let theirNumber;
let myFont;

function setup() {
  createCanvas(800, 400);
  
  //create an input to get the original number
  myInput = createInput();
  myInput.position(225, 100);
   myInput.size(100, 25);
  
  //this input will be for how many digits the user wants to keep
  howManyDigit = createInput()
  howManyDigit.position(375,155)
  howManyDigit.size(25,25)
  
  //load a custum font
  myFont = loadFont("PlaywriteCUGuides-Regular.ttf")  
}
function draw() {
  background("#3A86FF");
  textFont(myFont)
  text("Playing with Numbers", 50, 75);
  text("Enter a number:", 50, 125);
  text("How many digits do you want:", 50, 175);
  
  textSize(24);
  text("Your number is: " + getNumber(myInput.value(),howManyDigit.value()), 100, 220);
}

function getNumber(thisNum,howManyDigits) {
  thisNum = thisNum % (Math.pow(10,howManyDigits))
  return(thisNum)
} //end getNumber
