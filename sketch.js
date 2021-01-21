const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var division = [];
var divisionHeight = 300;
var plinko = [];
var particles;
var count=0,score =0;
var gameState = "start";
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  for(var k=0;k <= width;k = k + 80){
    division.push(new Division(k,height - divisionHeight/2 - 10,10,divisionHeight));
  }
  for(var k=40;k <= width;k=k+50){
    plinko.push(new Plinko(k,75));
  }
  for(var k=20;k <=width;k=k+50){
    plinko.push(new Plinko(k,150));
  }
  for(var k=40;k <=width;k=k+50){
    plinko.push(new Plinko(k,225));
  }
  for(var k=20;k <=width;k=k+50){
    plinko.push(new Plinko(k,300));
  }
  for(var k=40;k <=width;k=k+50){
    plinko.push(new Plinko(k,375));
  }
  ground = new Ground(240, 790, 480, 10);
}

function draw() {
  background("black");  
  Engine.update(engine);
  for(var k =0;k < division.length;k = k + 1){
    division[k].display();
  }
  for(var k =0;k < plinko.length;k = k + 1){
    plinko[k].display();
  }
  if(particles != null){
    particles.display();
    if(particles.body.position.y > 450){
      if(particles.body.position.x < 300){
        score = score + 500
        particles = null;
        if(count >= 5){
          gameState = "end";
        }
      }
      else if(particles.body.position.x > 301 && particles.body.position.x < 600){
        score = score + 100;
        particles = null;
        if(count >= 5){
          gameState = "end";
        }
      }
      else if(particles.body.position.x > 601 && particles.body.position.x < 900){
        score = score + 200;
        particles = null;
        if(count >= 5){
          gameState = "end";
        }
      }
    }
  }
  if(gameState === "end"){
    fill("blue")
    textSize(24)
    text("GAMEOVER",200,450);
  }
  ground.display();
  textSize(24);
  text("score:"+ score,50,50);
}
function mousePressed(){
  if(gameState !== "end"){
    count = count + 1
    particles = new Particle(mouseX,10);
    console.log("mousePressed")
  }

}