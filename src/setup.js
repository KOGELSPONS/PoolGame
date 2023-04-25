const [WIDTH, W, HEIGHT, H] = [1600, 1600, 900, 900]; //16:9 ratio
var balls = [];
var mouseClick = false;

function setup() {
  //Makes the canvas and adds it to the canvis-wrapper as its child
  myCanvas = createCanvas(W, H);
  myCanvas.parent("canvas-wrapper");
  //Framerate
  frameRate(60);
  //Making the table
  poolTable = new Table(0,0,W,H,30);
  newBalls();
  
  //Makes the screen resize canvis, without changing the actual game render size
  //So settings the style.height to 100% almost everybody has a screen that has less height that witdth
  //And than removing the width so the CSS aspect-ratio takes over the width
  document.getElementById("defaultCanvas0").style.height = "100%";
  document.getElementById("defaultCanvas0").style.removeProperty("width");
}
function preload() {
  pooltafel = loadImage('data/image/Pooltafel.png');
  ballskin = loadImage('data/image/ballskin.png');
}