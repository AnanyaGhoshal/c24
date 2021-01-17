class Stone{

    constructor(x,y){

        var options={
            'restitution':0.1,
            'friction':1.0,
            'density':1
        }

        this.body = Bodies.rectangle(x,y,70,70,options);
        this.width = 70;
        this.height = 70;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        strokeWeight(4);
        stroke("blue");
        rect(0,0,this.width,this.height);
        pop();

    }



}