class Particle{
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,10,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.radius = 10;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }