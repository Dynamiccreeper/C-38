//var ball;
var database;
//var position;
var form,player,game;
var gameState=0;
var playerCount;
var canvas;
var allPlayers;

var car1,car2,car3,car4,cars;

function setup(){
   canvas= createCanvas(600,600);
  
    database=firebase.database();
    console.log(database);

    game=new Game();
    game.getState();
    game.start();




}


function draw(){
if(playerCount===4){
    game.update(1);
}
if(gameState===1){
    clear();
    game.play();
}

drawSprites();


}

/*function writePosition(x,y){

database.ref('ball/position').set(
{
    'x':  position.x + x,
    'y': position.y + y
})
}

function readPosition(data){
position=data.val();
console.log(position.x);
console.log(position.y);
ball.x=position.x;
ball.y=position.y;

}*/

function showError(){
console.log("error reading/writing to the database");



}