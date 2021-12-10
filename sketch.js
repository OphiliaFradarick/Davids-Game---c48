const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world;
var gamestate="start";
var button,buttonImage,bg,bgImage,basket1Image,basket2Image,chestImage,enemyImage,goldImage,playerImage,swordImage,sword2Image;
var howToButton,howToButtonImage,storyButton
var ocean,ocean2;
var backButton;
var enemy,enemyGroup;
var sword,swordGroup;
var gold,goldGroup;
var whooshSound;
var splashSound;
var goldSound;
var score=0;
var goldCount=0;
var cooldown=3;
var food=30;
var motherShip;
var motherHealth;
var health1,health2,health3,health4,health5,health6, player, playerImage;
var motherHealthCount=6;


function preload(){
buttonImage=loadImage("images/play.gif");
bgImage=loadImage("images/Blue Background 2.jpg");
basket1Image=loadImage("images/Basket.png");
basket2Image=loadImage("images/Basket2.png");
chestImage=loadImage("images/chest.png");
enemyImage=loadImage("images/Enemy.png");
goldImage=loadImage("images/gold.png");
playerImage=loadImage("images/Player.png");
swordImage=loadImage("images/sword.png");
sword2Image=loadImage("images/sword2.png");
howToButtonImage=loadImage("images/button.png");
whooshSound=loadSound("sounds/whoosh sound.flac")
splashSound=loadSound("sounds/splashSound.wav")
goldSound=loadSound("sounds/goldCollectSound.wav");
health1=loadImage("images/health1.PNG");
health2=loadImage("images/health2.PNG");
health3=loadImage("images/health3.PNG");
health4=loadImage("images/health4.PNG");
health5=loadImage("images/health5.PNG");
health6=loadImage("images/health6.PNG");

}

function setup(){
  createCanvas(displayWidth,displayHeight);

  swordGroup= new Group();
  enemyGroup=new Group();
  goldGroup=new Group();

  start = new Start();
  game = new GameState();

}

function draw(){
  background(180);
  //Engine.update(engine);
  drawSprites();

  if(gamestate==="start"){
    start.display();  
  }

  if(gamestate==="play"){
    game.createObjects();
    game.play();
  }
}