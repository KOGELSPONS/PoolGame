class Ball{
  constructor(mx, my, size, number, type, color, active) {
    this.mx = mx;
    this.my = my;
    this.size = size;
    this.number = number;
    this.type = type;
    this.color = color;
    this.active = active;
    
    this.vx = 0;
    this.vy = 0;
    this.friction = random(0.985, 0.995);
    this.bounce = random(0.920, 0.980);
    this.halfWidth = this.size / 2;
    this.halfHeight = this.size / 2;
    this.x = this.mx - this.halfWidth;
    this.y = this.my - this.halfHeight;
  }
  move(){
    this.friction = random(0.985, 0.995);
    if ((this.vx < 0 && this.vx > -0.03) || (this.vx > 0 && this.vx < 0.03)){
      this.vx = 0;
    }
    if ((this.vy < 0 && this.vy > -0.03) || (this.vy > 0 && this.vy < 0.03)){
      this.vy = 0;
    }
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.mx = constrain((this.mx + this.vx), 105,1500);
    this.my = constrain((this.my + this.vy), 110,780);
    
  }
  update(){
    this.x = this.mx - this.halfWidth;
    this.y = this.my - this.halfHeight;
  }
  show() {
    fill(this.color);
    circle(this.mx, this.my, this.size);
    fill("white");
    circle(this.mx, this.my, this.size/2);
    textAlign(CENTER, CENTER);
    textSize(10);
    strokeWeight(1);
    stroke("black");
    fill("black");
    text(this.number, this.mx, this.my+1);
    noStroke();
    if (this.type == "stripe"){
      image(ballskin, this.x, this.y, this.size, this.size)
    }
  }
  collision() {
    
    for (let i = 0; i < balls.length; i++) {
      if (i != this.number){
        //console.log(balls[i]);
        let dx = balls[i].x - this.x;
        let dy = balls[i].y - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = balls[i].size / 2 + this.size / 2;
        //console.log(distance);
        //console.log(minDist);
        if (distance < minDist) {
          this.bounce = random(0.920, 0.980);
          let angle = atan2(dy, dx);
          let targetX = this.x + cos(angle) * minDist;
          let targetY = this.y + sin(angle) * minDist;
          let ax = (targetX - balls[i].x) * this.bounce;
          let ay = (targetY - balls[i].y) * this.bounce;
          this.vx -= ax;
          this.vy -= ay;
          balls[i].vx += ax;
          balls[i].vy += ay;
        }
      }
    }
  }
}