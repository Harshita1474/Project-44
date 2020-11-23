var player,playerImage;
var backgroundImg;

function preload()
{
	playerImageRight=loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png",
	"images/player5.png","images/player6.png","images/player7.png","images/player8.png");

	playerImageLeft=loadAnimation("images/player15.png","images/player14.png","images/player13.png","images/player12.png","images/player12.png",
	"images/player11.png","images/player10.png","images/player9.png","images/player.png");

	backgroundImg=loadImage("images/background.jpg");
}

function setup() {
	createCanvas(800, 700);

	player=createSprite(400,450,50,50);
	player.addAnimation("running",playerImageRight);
	player.x=400;
  
}


function draw() {
  background(backgroundImg);
  
	if(keyDown(LEFT)){
		player.x=player.x-10;
		player.addAnimation("running",playerImageLeft);
	}

	if(keyDown(RIGHT)){
		player.x=player.x+10;
		player.addAnimation("running",playerImageRight);
	}

  drawSprites();
 
}



