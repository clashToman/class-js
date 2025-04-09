var box;

function setup() {
  createCanvas(400,500);
  box = createSprite(100,20,0,0);
  box.shapeColor= color("blue");
  

}

function draw() 
{
   background("red");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.shapeColor= color("blue");
    box.position.x = box.position.x +5;
    background("yellow");
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.shapeColor= color("white");
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.shapeColor= color("white");
    background("#0723f5");
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.shapeColor= color("#f5ae07");
    box.position.y = box.position.y + 5;
    background("#f5079a");

  }

  drawSprites();
}




