class Game{
    constructor(){

    }
    getState(){
        var gamestateref=database.ref('gamestate');
        gamestateref.on("value",function(data){
            gamestate=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        });
    }
    async start(){
        if(gamestate === 0){
          player = new Player();
          var playerCountref = await database.ref('playercount').once("value");
          if(playerCountref.exists()){
            playercount = playerCountref.val();
            player.getcount();
          }
          form = new Form()
          form.display();
        }
    
        var runner1 = createSprite(100,200);
        var runner2 = createSprite(300,200);
        var runner3 = createSprite(500,200);
        var runner4 = createSprite(700,200);
        runners = [runner1, runner2, runner3, runner4];
        //hurdles=[hurdle1,hurdle2,hurdle3,hurdle4,hurdle5,hurdle6,hurdle7,hurdle8];
      }
    
      play(){
        form.hide();
    
        Player.getPlayerInfo();
        
        if(allplayers !== undefined){
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 0;
          var y;
    
          for(var plr in allplayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            //use data form the database to display the cars in y direction
            y = displayHeight - allplayers[plr].distance;
            runners[index-1].x = x;
            runners[index-1].y = y;
    
            if (index === player.index){
              runners[index - 1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = runners[index-1].y
            }
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=10
          player.update();
        }
    
        drawSprites();
      }
    }
    
