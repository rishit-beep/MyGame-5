class CannonBall {
    constructor(x, y) {
    var options={
        'restitution':0.8,
        'density':1.0,
        'isStatic':true,
        'friction':1.0

     
    }
    this.r=40;
this.body= Bodies.circle(x,y,this.r,options);
this.image=loadImage("assets/cannonball.png");
World.add(world,this.body);



    }



    display() {
      var angle = this.body.angle;
      var pause= this.body.position;

                  
      
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this,r);
      pop();
      //arc(this.x - 10, this.y + 170, 70,130, PI, TWO_PI);
     noFill();
    
    }
  }
