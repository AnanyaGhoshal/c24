class Iron{

    constructor(x,y){

        var options={
            'restitution':0.2,
            'friction':0.9,
            'density':2
        }

        this.body = Bodies.rectangle(x,y,50,20,options);
        this.width = 50;
        this.height = 20;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(3);
        stroke("brown");
        rect(0,0,this.width,this.height);
        pop();

    }



}