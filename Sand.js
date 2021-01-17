class Sand{

    constructor(x,y){

        var options={
            'restitution':0.5,
            'friction':1.5,
            'density':1
        }

        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("orange");
        stroke("black");
        circle(pos.x,pos.y,this.radius);
       

    }



}