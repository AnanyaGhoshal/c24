
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, ground, rubber, iron;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

hammer = new Hammer(400,350,PI/1);
stone = new Stone(550,630);
iron = new Iron(380,690);
ground = new Ground(400,height,800,20);
rubber = new Rubber(150,680);
sand1 = new Sand(200,680);
sand2 = new Sand(220,680);
sand3 = new Sand(240,680);
sand4 = new Sand(260,680);
sand5 = new Sand(280,680);
sand6 = new Sand(300,680);
sand7 = new Sand(320,680);
sand8 = new Sand(340,680);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("skyblue");
  Engine.update(engine);
  
  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  
  drawSprites();
 
}



