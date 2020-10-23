
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy
var groundobject

var treeObj

function preload()
{

	boy=loadImage("images/boy.png"); 

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobject=new ground(width/2,600,width,20);
	treeObj=new tree(900,400)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  image(boy, 200,340,200,300)

  groundobject.display();
  treeObj.display();
  
  drawSprites();
 
}



