
var fr,mr;
var obj1, obj2;

function setup() 
{
    createCanvas(800,400);
   fr = createSprite(400, 200, 50, 80);
   mr = createSprite(600,200,80,30); 
   fr.shapeColor = "blue"; 
   mr.shapeColor = "blue"; 

   obj1 = createSprite(200, 200, 30, 30);
   obj1.velocityX = 2;
   obj2 = createSprite(700, 200, 40, 20)
   obj2.velocityX = -2
  }
    
function draw() 
{ 
  background(0); 
  mr.x = World.mouseX;
   mr.y = World.mouseY; 

   console.log(mr.x-fr.x) 

   bouncingOff(obj1, obj2)

   if (isTouch(mr, obj2))
   {
     mr.shapeColor = "yellow"
     fr.shapeColor = "yellow"
   }
   else
   {
    mr.shapeColor = "blue"
    fr.shapeColor = "blue"
   }
       
    drawSprites(); 
}

