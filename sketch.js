const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg;
var snow;
var engine, world;
var ice = []
var maxSnow = 100;

function preload(){

bg = loadImage("snow3.jpg")


}




function setup() {
  createCanvas(1600,1300);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }
}

function draw() {
  background(bg);
  Engine.update(engine);  
  drawSprites();

  //snow.display();

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
  }
}