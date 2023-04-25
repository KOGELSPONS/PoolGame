class Table{
  constructor(x, y, w, h, holeSize) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.size = holeSize;
  }
  table(){
    image(pooltafel,this.x,this.y,this.w,this.h);
  }
  walls(){
    
  }
  holes(){
    
  }
}