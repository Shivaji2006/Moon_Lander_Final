let ground;
let lander;
var lander_img;
var bg_img;
var fuel = 20;


var vy = 0;
var vx = 0;
var g = 0.02;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  upward_thrusting = loadAnimation("b_thrust_2.png","b_thrust_3.png");
  right_thrusting = loadAnimation("right_thruster_1.png","right_thruster_2.png");
  left_thrusting = loadAnimation("left_thruster_1.png","left_thruster_2.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,400,300);
  lander.addAnimation("upward_thrust",upward_thrusting);
  lander.addAnimation("right_thrust",right_thrusting);
  lander.addAnimation("left_thrust",left_thrusting);
  

  ground = createSprite(500,570,2000,10);
  ground.shapeColor= ("black");
  ground.visible = false;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  text("Fuel:"+fuel,50,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx;

  if(fuel===0)
  {
    
    g = 0;
    vx = 0;
    vy = 0;
    alert("Fuel Is Over");
  }
  
  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('upward_thrust');
    fuel = fuel - 1;
    
  }

  if(keyCode==RIGHT_ARROW)
  {
   //right_thrust();
   lander.changeAnimation('right_thrust');
   vx = vx + 0.8;
   fuel = fuel - 1;


  }

  if(keyCode==LEFT_ARROW)
  {
    left_thrust();
    lander.changeAnimation('left_thrust');
    fuel = fuel - 1;

  }
  
}

function upward_thrust()
{
  vy = -1;
}

function right_thrust()
{
  vx = vx + 0.8;
  console.log(vx);
}

function left_thrust()
{
  vx = vx - 0.8;
}

