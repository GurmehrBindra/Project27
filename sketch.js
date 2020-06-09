const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  bob1= new Bob(400,400);
	bob2= new Bob(350,400);
  bob3= new Bob(300,400);
  bob4= new Bob(450,400);
  bob5= new Bob(500,400);
  roof= new Roof(400,200,220,20);
  rope1= new Rope(bob1,roof);
}


function draw() {
  background(255,255,255);
  Engine.update(engine);
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  
}

function keyPressed(){
  if (keyDown(UP_ARROW)) {
    bob3.velocityX=-2;
  }
}


