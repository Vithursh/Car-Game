var Wall,Zenia,Speed,Weight


function setup() {createCanvas(800,800); 
  Wall = createSprite(260,400,100,20); 
  Zenia = createSprite(260,100,20,30);
  Speed=random(55,90);
  Weight=random(400,1500);
  Zenia.velocityY = Speed;
Zenia.shapeColor = "White";
}

function draw() {
  background(0);  
  console.log(Zenia.y);
   
  

  if(Wall.y - Zenia.y < Wall.height/2+Zenia.height/2){
    Zenia.velocityY = 0;
    var Deformation = 0.5 * Weight * Speed * Speed/22500;

    if(Deformation > 180){
      Zenia.shapeColor = "red";
    }

    if(Deformation < 180 && Deformation > 80){
      Zenia.shapeColor = "Yellow";
    }

    if(Deformation < 80 ){
      Zenia.shapeColor = "Green";
    }
  }





    
  
  drawSprites();

}