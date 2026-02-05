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
  //textSize(72)
  text("My First Project", 50, 75);
  textSize(72);
  //text("My First Project",75,150);
  getNumber();
}

function getNumber() {
  theirNumber = myInput.value()
  console.log(theirNumber)
} //end getNumber

