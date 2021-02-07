var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  
  // make sprites
  fixedRect = createSprite(200, 300, 60, 30);
  movingRect = createSprite(600, 300, 70,10);
  
  // give initial colour
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "blue";

  // see collider radius
  movingRect.debug = true;
  fixedRect.debug = true;

  // give initial velocity
  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
}

function draw() {
  background("black");  

  // see difference in x positions
  console.log(movingRect.x - fixedRect.x);

  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  
  // if rectangles are touching, then change colour and bounce
  if(abs(movingRect.x - fixedRect.x) <= movingRect.width/2 + fixedRect.width/2 && abs(movingRect.y - fixedRect.y) <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "pink";
    movingRect.bounce(fixedRect);
    fixedRect.bounce(movingRect);
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }



  drawSprites();

}