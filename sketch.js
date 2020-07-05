var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bobObject1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(200,100,100,20);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("pink");
  bobObject1.display();
  drawSprites();
 
}