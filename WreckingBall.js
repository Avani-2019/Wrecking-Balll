class WreckingBall{
    constructor(x, y,r) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,r/2, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var wbangle = this.body.angle;
        var wbpos =  this.body.position
        wbpos.x = mouseX;
        wbpos.y = mouseY;
        push();
        translate(wbpos.x, wbpos.y);
        rotate(wbangle);
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r);
        pop();
      }
}