var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,player,edges;
var jewel;
var thief,police,diamond;
var bgm;
var win;

function preload() {
  thief = loadImage("car.png");
  police = loadImage("policeman.png");
  diamond = loadImage("diamond.png");
  bgm = loadSound("bgm.wav");
  win = loadSound("win.wav");
}

function setup(){
  createCanvas(400, 400);
 wall1 = createSprite(100, 20,200,10);
 wall2 = createSprite(300, 60,150,10);
 wall3 = createSprite(100, 80,100,10);
 wall4 = createSprite(50, 140,10,130);
 wall5 = createSprite(370, 155,10,200);
 wall6 = createSprite(25, 175,60,10);
 wall7 = createSprite(305, 120,80,10);
 wall8 = createSprite(265, 170,80,10);
 wall9 = createSprite(170, 200,10,80);
 wall10 = createSprite(220, 235,100,10);
 wall11 = createSprite(200, 350,300,10);
 wall12 = createSprite(80, 300,10,100);
 wall13 = createSprite(80, 250,100,10);
 wall14 = createSprite(175, 120,80,10);
  
 enemy1 = createSprite(250, 340,10,10);
 enemy2 = createSprite(190, 240,10,10);
 enemy3 = createSprite(110, 170,10,10);
 enemy4 = createSprite(170,110,10,10)
 enemy5 =createSprite(170,200,10,10)
 enemy6 =createSprite(280,160,10,10)
  
  enemy1.addImage(police);
  enemy2.addImage(police);
  enemy3.addImage(police);
  enemy4.addImage(police);
  enemy5.addImage(police);
  enemy6.addImage(police);

  enemy1.scale = 0.07;
  enemy2.scale = 0.07;
  enemy3.scale = 0.07;
  enemy4.scale = 0.07;
  enemy5.scale = 0.08;
  enemy6.scale = 0.04;  
  
  player = createSprite(375,375,10,10);
  player.addImage(thief);
  player.scale = 0.05;
  
  jewel = createSprite(20,50,20,20);
  jewel.addImage(diamond);
  jewel.scale = 0.05;
  
  enemy1.velocityY=-2;
  enemy2.velocityY=2;
  enemy3.velocityX=2;
  enemy4.velocityY=-2;
  enemy5.velocityX=2;
  enemy6.velocityY=2;
  
  bgm.play();
}

function draw() {
  background("white");
  edges = createEdgeSprites();
  player.collide(edges);
  
  enemy1.shapeColor = "red";
  enemy2.shapeColor = "red";
  enemy3.shapeColor = "red";
  enemy4.shapeColor = "red";
  enemy5.shapeColor = "red";
  enemy6.shapeColor = "red";
  
  player.shapeColor = "green";
  
  enemy1.bounceOff(wall11);
  enemy1.bounceOff(wall10);
  
  enemy2.bounceOff(wall11);
  enemy2.bounceOff(wall10);
  
  enemy3.bounceOff(wall4);
  enemy3.bounceOff(wall9);
  
  enemy4.bounceOff(wall14);
  enemy4.bounceOff(wall1);
  
  enemy5.bounceOff(wall9);
  enemy5.bounceOff(wall5);
  
  enemy6.bounceOff(wall7);
  enemy6.bounceOff(wall8);
  
  //control the player
  if (keyDown("left")) {
    player.x = player.x-2;
  }
  if (keyDown("right")) {
    player.x = player.x+2;
  }
  if (keyDown("up")) {
    player.y = player.y-2;
  }
  if (keyDown("down")) {
    player.y = player.y+2;
  }
  
      drawSprites();
  
  if (player.isTouching(wall1)||player.isTouching(wall2)||player.isTouching(wall3)||player.isTouching(wall4)||player.isTouching(wall5)||player.isTouching(wall6)||player.isTouching(wall7)||player.isTouching(wall8)||player.isTouching(wall9)||player.isTouching(wall10)||player.isTouching(wall11)||player.isTouching(wall12)||player.isTouching(wall13)||player.isTouching(wall14)||player.isTouching(enemy1)||player.isTouching(enemy2)||player.isTouching(enemy3)||player.isTouching(enemy4)||player.isTouching(enemy5)||player.isTouching(enemy6)){
    player.velocityX = 0;
    player.velocityY = 0;
    
    enemy1.velocityY = 0;
    enemy2.velocityY = 0;
    enemy3.velocityX = 0;
    enemy4.velocityY = 0;
    enemy5.velocityX = 0;
    enemy6.velocityY = 0;
    
    bgm.stop();
    
    background("red");
    fill("yellow");
    textSize(40);
    text("YOU LOST!",100,200);
  }
  
  if (player.isTouching(jewel)) {
    win.play();
    background("green");
    fill("white");
    text("THE JEWEL IS YOUR NOW!!");
    win.stop();
  }
  

}
  