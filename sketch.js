var canvas,playercount,allplayers,database,form,player,game,runners;
var gamestate=0;
var i=0;
function setup() {
  canvas=createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playercount==4){
    game.update(1);
  }
  if(gamestate==1){
    clear();
    game.play();
  }
  if(gamestate==2){
    console.log("Game Over");
  }
}