var bow, arrow,bg, redballoon,greenballoon,blueballoon;

var bowImage,arrowImage, backgroundImage,redballoonImage,greenballoonImage,
blueballoonImage,redB,blueB,greenB,arrowGroup;
 var score = 0;

function preload(){
 //load your images here 
 arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  backgroundImage = loadImage("background0.png");
  redballoonImage = loadImage("red_balloon0.png");
  greenballoonImage=loadImage("green_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
sound =loadSound("Arrow+Swoosh+1.mp3");

}

function setup() {
  createCanvas(600, 600);
  
  bg = createSprite(0,0,600,600);
  bg.addImage(backgroundImage);
  bg.scale = 5;
  
  bow =createSprite(500,200,200,200) ;
  bow.addImage(bowImage);
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  arrowGroup = new Group();
  
}

function draw() {
background("blue");
bg.velocityX = -3
if (bg.x < 0){
bg.x=bg.width/2;
  }
   
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
  if(World.frameCount % 80 ==0){
    if(select_balloon ==1){
      redballoon();
    }
    else if(select_balloon ==2){
      greenballoon();
    }
    else if(select_balloon ==3){
      blueballoon();
    }
  }
  
  camera.position.y=World.mouseY
  
 if (keyDown("space")) {
    var temp_arrow=createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y=bow.y;
  }
  bow.y = World.mouseY;
  
  var selectballoon = Math.round(random(1,4));
  console.log(select_balloon);
  if(World.frameCount % 80 ==0){
  }
  
  
  if(keyDown("space")){
    createArrow();
  }
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();    
    arrowGroup.destroyEach();
    score = score+1; 
    sound.play();
  }
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();    
    arrowGroup.destroyEach();
    score = score+2;
    sound.play();
  }
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();    
    arrowGroup.destroyEach();
    score = score+3; 
    sound.play();
  }
  
  drawSprites();
  textSize(20)
  text("score:"+score,270,30);
  
}
function redballoon (){
var red=createSprite(0,Math.round(random(50,390)),10,10);
    red.addImage(redballoonImage);
    red.velocityX = 3;
    red.lifetimie = 150;
    red.scale = 0.1;
  redB.add(red);
  }
function greenballoon (){
var green=createSprite(0,Math.round(random(50,390)),10,10);
    green.addImage(greenballoonImage);
    green.velocityX = 3;
    green.lifetimie = 150;
    green.scale = 0.1;
  greenB.add(green);
  }
function blueballoon (){
var blue=createSprite(0,Math.round(random(50,390)),10,10);
    blue.addImage(blueballoonImage);
    blue.velocityX = 3;
    blue.lifetimie = 150;
    blue.scale = 0.1;
  blueB.add(blue);
  }
function createArrow(){
  arrow=createSprite(360, 100, 5, 10);
  arrow.velocityX=-6;
  arrow.scale=0.3;
  arrow.lifetime = 60;
  arrowGroup.add(arrow);
  return arrow;
}