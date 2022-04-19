class Game{

  constructor(){
     
      
  }
  getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
      //add more and change values later
     bkground=createSprite(100,200,50,50)
     bkground.addImage(background_image);
     bkground.scale=0.8;
     
      //striker and red coin
     
      puck=createSprite(100,puckY);
      puck.addImage(puck_image)
      puck.scale=0.07
      paddle1 = createSprite(100,300,15,15);
      paddle1.addImage(paddle_image);
      paddle1.scale= 0.07
      paddle2 = createSprite(100,100,15,15);
      paddle2.addImage(paddle_image);
      paddle2.scale= 0.07

      paddles = [paddle1,paddle2];
  
     
    }
  handleElements(){
  form.hide();
  // might add more
  }
  play(){
    this.handleElements();
    
  
      Player.getPlayersInfo();
      if (allPlayers !== undefined) {
         
      //index of the array
     var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the paddles in x and y direction
        var paddleX = allPlayers[plr].positionX;
        var paddleY = allPlayers[plr].positionY;

        paddles[index - 1].position.x = paddleX;
        paddles[index - 1].position.y = paddleY;
      }
     if(keyDown("space")){
       PuckY=30;
     }
   
     //properties(add edge sprites later)
      puck.bounce(paddle1)
      puck.bounce(paddle2)

     this.handlePlayerControls
     if(puck.y<20||puck.y>380){
       this.win();
     }
     if(player.positionX>300||player.positionX<100);
     // this.powerHit
     
      
  
     drawSprites();
    }
  }

    
     
     handlePlayerControls(){
      if (keyIsDown(RIGHT_ARROW)//&&player.positionX<190
      ) {
        player.positionX += 10
        player.update();
    }
    if (keyIsDown(LEFT_ARROW)//&&player.positionX>10
    ) {
        player.positionX -= 10
        player.update();
    }
    }
    win(){
      text("you win", 100,200)
    }
  /*  powerHit(){
      if (keyIsDown(UP_ARROW)&&player.positionY===200) {
        player.velocityY=20;
        player.updateDistance();
      }
      if (keyIsDown(UP_ARROW)&&player.positionY===600) {
        player.velocityY=-20;
        player.updateDistance();
      }
      
    }*/
     
    restart(){
    //restarts the entire game
  
   }
  }