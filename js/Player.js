class Player{
constructor(){
this.index=null;
this.name=null;
this.distance=0;



}

getCount(){

    var pCRef=database.ref("playerCount");
    pCRef.on("value",function(data){
    playerCount=data.val();
    console.log(playerCount);
})

}
updateCount(count){

    database.ref("/").update({
        playerCount:count
    });
}

update(){
    
    var playerIndex="players/player"+ playerCount;
    console.log(playerIndex);
    database.ref(playerIndex).set({
        name:this.name,distance:this.distance
    });
    }
static getPlayerInfo(){
var pIRef=database.ref("players"); 
pIRef.on('value',function(data){

allPlayers=data.val();



})



}

}

