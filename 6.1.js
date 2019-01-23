class Circle{
  constructor (xPos,yPos,radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius= radius;
  }
  move(xOffset, yOffset){
    this.xPos= xOffset;
    this.yPos= yOffset;
  }
  get surface(){
    return this.surface;
  }
  surface(){
    return (this.radius*this.radius)*Math.PI;

  }
}
let circ1 = new Circle(3,5,7);
console.log(circ1.xPos,circ1.yPos,circ1.radius);
console.log(circ1.surface());
circ1.move(9,8);
console.log(circ1.xPos,circ1.yPos,circ1.radius);
