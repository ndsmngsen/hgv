
//variables
var canvas;
var database
var gameState;
var form
var player
var playerCount;
var allPlayers;
var background_image
var striker_image
var puck_image
var paddle_image;
var bkground
var puck
var puckY=200

var paddle1;
var paddle2;
var paddles = [];





function preload(){
  background_image=loadImage("table.png")
  paddle_image=loadImage("paddle.png")
  puck_image=loadImage("puck.png")
  //blackCoin_image=loadImage("blackCoin.png")
  //whiteCoin_image=loadImage("whiteCoin.png")
}



function setup() {
  canvas=createCanvas(200,400);


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw() 
{

//gameState
  if (playerCount === 2) {
    game.update(1);
    
  }

  if (gameState === 1) {
    game.play();
  }

  //if (gameState === 2) {
 //   game.end();
 // }

}


