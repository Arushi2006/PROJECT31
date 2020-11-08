var ground,division,plinko,particle;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground=new Ground(480,780,20,5);
  division=new Division(340,500,5,200);
  plinko=new Plinko(300,40,78);
  particle=new particle(56,80,90,70);
}

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function draw() {
  background(255,255,255);  
  drawSprites();

  ground.display();
  division.display();
  plinko.display();
  particle.display();
}