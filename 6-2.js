class Rectangle {
  constructor(topleftxpos,topleftypos,width,lenght){
    this.topleftxpos=topleftxpos;
    this.topleftypos=topleftypos;
    this.width=width;
    this.lenght=lenght;
  }
  collides(){
    if (rect.topleftxpos < otherRectangle.topleftxpos + otherRectangle.width &&
        rect.topleftxpos + rect.width > otherRectangle.topleftxpos &&
        rect.topleftypos < otherRectangle.topleftypos + otherRectangle.lenght &&
        rect.lenght + rect.topleftypos > otherRectangle.topleftypos ){
      return true;
    }
  }
}
let rect = new Rectangle(2,12,14,12);
let otherRectangle= new Rectangle(3,14,15,16);
console.log(otherRectangle.collides());
