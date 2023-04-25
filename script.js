function draw() {
  background(0);
  poolTable.table();
  poolTable.walls();
  poolTable.holes();
  
  balls.forEach(b => {
    if (b.active){
      b.move();
      b.update();
      b.show();
      b.collision();
    }
  });
  if (balls[0].vx == 0 && balls[0].vy == 0){
    var mover = createVector(mouseX - balls[0].mx, mouseY - balls[0].my);
    var mag = constrain(mover.mag()/8 ,-40,40);
    strokeWeight(4);
    stroke(0, (255 / (mag / 5)), 0);
    if (mag > 30){
      stroke((8.5 * mag), 0, 0);
    }
    line(balls[0].mx, balls[0].my, mouseX, mouseY);
    strokeWeight(0);
    if (mouseClick){
      mover.normalize();
      balls[0].vx -= mover.x * mag;
      balls[0].vy -= mover.y * mag;
    }
 }
  if (mouseClick){
    mouseClick = false;
  }
}

function mouseClicked() {
  mouseClick = true;
  console.log(mouseX);
  console.log(mouseY);
  // prevent default
  
  return false;
}

function newBalls(){
  balls = [];
  balls[0] = new Ball(1215, 450, 30, "", "shoot", "white", true);
  balls[1] = new Ball(480, 450, 30, 1, "full", "yellow", true);
  balls[2] = new Ball(452, 435, 30, 2, "full", "blue", true);
  balls[3] = new Ball(452, 465, 30, 3, "full", "orangered", true);
  balls[4] = new Ball(422, 420, 30, 4, "full", "purple", true);
  balls[5] = new Ball(422, 450, 30, 5, "full", "orange", true);
  balls[6] = new Ball(422, 480, 30, 6, "full", "green", true);
  balls[7] = new Ball(394, 405, 30, 7, "full", "darkred", true);
  balls[8] = new Ball(394, 435, 30, 8, "full", "black", true);
  balls[9] = new Ball(394, 465, 30, 9, "stripe", "yellow", true);
  balls[10] = new Ball(394, 495, 30, 10, "stripe", "blue", true);
  balls[11] = new Ball(366, 390, 30, 11, "stripe", "orangered", true);
  balls[12] = new Ball(366, 420, 30, 12, "stripe", "purple", true);
  balls[13] = new Ball(366, 450, 30, 13, "stripe", "orange", true);
  balls[14] = new Ball(366, 480, 30, 14, "stripe", "green", true);
  balls[15] = new Ball(366, 510, 30, 15, "stripe", "darkred", true);
}