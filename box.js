class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':10,
        'density':0.74
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    console.log(this.body)
    var pos =this.body.position;
    var angle=this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    pop();
  }
};
