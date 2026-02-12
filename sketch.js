let myInput;
let howManyDigit;
let theirNumber;
let myFont;
let myPicture;

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
  myPicture = loadImage("numberPicForCompSci.png")
}
function draw() {
  background("#3A86FF");
  designStuff();
  textStuff();
  textSize(24);
  text("Your number is: " + getNumber(myInput.value(),howManyDigit.value()), 100, 220);
  myPicture.resize(20,20)
  image(myPicture, 25,25)
}
function textStuff(){
  text("Playing with Numbers", 50, 75);
  text("Enter a number:", 50, 125);
  text("How many digits do you want:", 50, 175);
}//textStuff

function designStuff(){
  push()
  fill("#03045E")
  stroke(255)
  strokeWeight(50)
  rect(50,50,700,400)
  pop()
  fill(255)
  textFont(myFont)
}//end designStuff

function getNumber(thisNum,howManyDigits) {
  thisNum = thisNum % (Math.pow(10,howManyDigits))
  return(thisNum)
} //end getNumber
