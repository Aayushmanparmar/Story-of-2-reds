var moving_obj,fixed_obj;

function setup() 
{
  createCanvas(1200,800);
  moving_obj = createSprite(500,700,50,70);
  fixed_obj = createSprite(600,400,50,70);
  moving_obj.shapeColor ="red";
  fixed_obj.shapeColor = "red";
}

function draw() 
{
  background("black"); 

  moving_obj.x = World.mouseX;
  moving_obj.y = World.mouseY;

  if(fixed_obj.x - moving_obj.x <moving_obj.width/2+fixed_obj.width/2 && moving_obj.x - fixed_obj.x <moving_obj.width/2+fixed_obj.width/2&& moving_obj.y - fixed_obj.y <moving_obj.height/2+fixed_obj.height/2&&fixed_obj.y - moving_obj.y <moving_obj.height/2+fixed_obj.height/2)
{
  moving_obj.shapeColor = "purple";
  fixed_obj.shapeColor = "purple";

}
else
{
  moving_obj.shapeColor = "red";
  fixed_obj.shapeColor = "red";
}
  drawSprites();
}