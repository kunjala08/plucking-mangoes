
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var sling
var tree1,ground,stone;
var boyImage,boy1;
var mango1
function preload()
{
	boyImage=loadImage("Plucking+mangoes/Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;

	//Create the Bodies Here.
    boy1 = Bodies.rectangle(150,605,20,20)
    tree1 = new Tree(600,340,205,700)
    ground = new Ground(20,670,2000,20)
    stone = new Stone(400,20,50,50)
    sling = new slingshot(stone.body,{x:90,y:554})

    
    mango1 = new Mango(570,105,25,50,20)
    mango2 = new Mango(630,105,25,50,20)
    mango3 = new Mango(550,250,25,50,20)
    mango4 = new Mango(610,240,25,50,20)
    mango5 = new Mango(650,225,25,50,20)
    mango6 = new Mango(610,160,25,50,20)
	Engine.run(engine);
  
}


function draw() {
  
    
 
  background(255);
  Engine.update(engine); 

  imageMode(CENTER);
  image(boyImage,boy1.position.x,boy1.position.y,200,200);

  tree1.display();
  ground.display();
  stone.display();
  sling.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.stone.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}

