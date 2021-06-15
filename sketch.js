
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObject;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new paper(100, 100, PI/2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");


  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70, y:-120});
	}
}

