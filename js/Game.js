class Game{
constructor(){

}

getState(){
var gSRef=database.ref("gameState");
gSRef.on("value",function(data){
    gameState=data.val();
})
}

update(state){;
database.ref("/").update({

gameState:state

})

}

 async start(){

if(gameState===0){
    player=new Player();
    var playerCountRef= await database.ref("playerCount").once("value");
    if(playerCountRef.exists()){
            playerCount=playerCountRef.val();
            player.getCount();
    }


    form=new Form();
    form.display();
}
    car1=createSprite(50,500,30,30);
    car2=createSprite(100,500,30,30);
    car3=createSprite(150,500,30,30);
    car4=createSprite(200,500,30,30);
    cars=[car1,car2,car3,car4];

}



play(){
    var x=0;
    var y=0;
    var index=0;
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerInfo();
    
    if(allPlayers!==undefined){
//console.log(allPlayers);

               // var dp=130

        for(var plr in allPlayers){
            console.log(plr);
            index=index + 1;
          
            x=x+200;
            //y=displayHeight-allPlayers[plr].distance;

            cars[index-1].x=x;
            cars[index-1].y=allPlayers[plr].distance;
            console.log(cars[index-1].y);
            console.log(plr);
            if(index === plr){
                
                console.log("i am Here");
                cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2.5;
                camera.position.y=cars[index-1].y;

            }    
//if(plr === "player " + player.index){
// fill("red");
//}else{
//fill("black");
//}
           // dp=dp +20;

//            text(allPlayers[plr].name,120,dp);
  //          text(allPlayers[plr].distance,220,dp);
            
        }
    }

    if(keyIsDown(UP_ARROW) && player.index!==null){
        player.distance=player.distance + 5;
        console.log(" distance updated ");
        player.update();
    }



    }



}