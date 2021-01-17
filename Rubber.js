class Rubber{

    constructor(x,y){

        var options={
            'restitution':0.9,
            'friction':0.4,
            'density':1
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        strokeWeight(4);
        stroke("black");
        circle(pos.x,pos.y,this.radius);
       

    }



}