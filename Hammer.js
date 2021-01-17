class Hammer{

    constructor(x,y,angle){

        var options={
            'restitution':0.5,
            'friction':0.4,
            'density':1
        }

        this.body = Bodies.rectangle(x,y,150,20,options);
        this.width = 150;
        this.height = 20;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(4);
        stroke("orange");
        rect(0,0,this.width,this.height);
        pop();

    }



}