
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops=[];
var tubes=[]
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bird= new Bird(300,350,32,32)
	//ground = new Ground(400,699,800,20)


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  //bird.display();
 // if(frameCount%20===0){
	  for(var i=0;i<drops.length;i++){
		drops.push(new Drop(random(0,400),random(0,400),30,30))
		drops[i].display()
	  }
  
//	}
  //bird.downForce()
  //ground.display()
  
  drawSprites();
 
}
//function keyPressed(){
//	if(keyCode===32){
//		bird.upForce()
//	}
//}


