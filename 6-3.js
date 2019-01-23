class Rectangle {
  constructor(topleftxpos,topleftypos,width,lenght){
    this.topleftxpos=topleftxpos;
    this.topleftypos=topleftypos;
    this.width=width;
    this.lenght=lenght;
  }
  collides(){
    for (let i = 0; i < 1000; i++) {
      rect.topleftxpos=Math.floor((Math.random() * 10) + 1);
      rect.topleftypos=Math.floor((Math.random() * 10) + 1);
      rect.width=Math.floor((Math.random() * 10) + 1);
      rect.lenght=Math.floor((Math.random() * 10) + 1);
      otherRectangle.topleftxpos=Math.floor((Math.random() * 10) + 1);
      otherRectangle.topleftypos=Math.floor((Math.random() * 10) + 1);
      otherRectangle.width=Math.floor((Math.random() * 10) + 1);
      otherRectangle.lenght=Math.floor((Math.random() * 10) + 1);

    if (rect.topleftxpos < otherRectangle.topleftxpos + otherRectangle.width &&
        rect.topleftxpos + rect.width > otherRectangle.topleftxpos &&
        rect.topleftypos < otherRectangle.topleftypos + otherRectangle.lenght &&
        rect.lenght + rect.topleftypos > otherRectangle.topleftypos ){
      console.log("true");
    }else{
      console.log("false");
    }
    }
  }
}
let rect = new Rectangle;
let otherRectangle= new Rectangle;
otherRectangle.collides();
