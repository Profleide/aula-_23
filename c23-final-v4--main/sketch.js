
const Engine = Matter.Engine; //e é usado para criar o mecanismo de física
const World = Matter.World;//é usado para criar o mundo físico e adicionar objetos a ele.
const Bodies = Matter.Bodies; //é usado para criar os objetos físicos que habitam o mundo,
const Body = Matter.Body;

function setup() {
  createCanvas(400,400);
//Adicione create canvas (adicionar tela), engine (mecanismo), e world (mundo)
//dentro da função setup() no arquivo sketch.js.

  engine = Engine.create();
  world = engine.world;
  // Criando um corpo redondo
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

