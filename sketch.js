var ball,chao,destilado,doutrolado;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	chao=Bodies.rectangle(400,400,850,10,{
		isStatic:true,
	})
	World.add(world,chao)

	destilado = Bodies.rectangle(500,370,10,100,{
		isStatic:true,
	})
	World.add(world,destilado);

	doutrolado = Bodies.rectangle(600,370,10,100,{
		isStatic:true,
	})
	World.add(world,doutrolado);


	ball = Bodies.circle(200,10,20,{
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	})
	World.add(world,ball)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
	rect(chao.position.x,chao.position.y,850,20)

	rect(destilado.position.x,destilado.position.y,10,100)
	rect(doutrolado.position.x,doutrolado.position.y,10,100)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)

   text(mouseX+","+mouseY,mouseX,mouseY)

}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5} )

	}
}



