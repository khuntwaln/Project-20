var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1600);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = ("Blue");
  wall = createSprite(1500,200,60,height/2);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < wall.width/2+car.width/2 && car.y - wall.y < car.height/2+wall.height/2 && wall.y - car.y < wall.height/2+car.height/2){
    deformation = (0.5 * weight * speed * speed) / 22500;
    car.velocityX = 0;
    if(deformation<=80){
    car.shapeColor = ("Green");
    }
    else if(deformation>80 && deformation<=180){
    car.shapeColor = ("yellow");
    }
    else if(deformation>180){
      car.shapeColor = ("red");
      }
    }
}