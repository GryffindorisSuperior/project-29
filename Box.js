class Box{
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

  block1 = new Box(500,700,40,40);
  block2 = new Box(550,700,40,40);
};
