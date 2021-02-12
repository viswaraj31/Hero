const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var super1;

function preload() {
  backgroundImage=loadImage("bg.png")

}

function setup() {
  createCanvas(1000, 800);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  super1 = new Hero(200,100);
}

function draw() {
  background(backgroundImage);

  Engine.update(engine);

  super1.display();

}

