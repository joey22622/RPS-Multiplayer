  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhaeR59q9CV7JnUcR5tb26MJLIKS4YzHE",
    authDomain: "rps-multiplayer-828a9.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-828a9.firebaseio.com",
    projectId: "rps-multiplayer-828a9",
    storageBucket: "",
    messagingSenderId: "600441216404"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  var viewerCount = database.ref("/viewerCount");
  var connectedRef = database.ref(".info/connected");
  var playerCount = database.ref("/playerCount");
  var playerStats = database.ref("/playerStats");
  var player1 = false;
  var player2 = false;
  var localActive;



connectedRef.on("value" , function(snap){
    
    if(snap.val()){
    var viewers = viewerCount.push(true);
    pickPlayer();
    setTimeout(function(){
        if(player1 === true){
            player = "player1"
        } else if(player2 == true){
            player = "player2"
        }
        viewers.child("/player").set(player);
        console.log(viewers.child("/player").val());
    }, 1000);

        playerStats.child("/player 1/active").onDisconnect().set(false);
        playerStats.child("/player 2/active").onDisconnect().set(false);
        
    viewers.onDisconnect().remove();

}

} , function(error){

});
$(".your-player").click(function(){
    console.log("player2: " + player2);
    console.log("player1: " + player1);


});
function pickPlayer() {
    viewerCount.on("value" , function(snapshot){
        if(snapshot.val()){
        var players = snapshot.numChildren();

        if(players === 1 && player2 === false){
            player1 = true;
            playerStats.child("/player 1/active").set(true);
            console.log("player 1 registered");
        } else if (players === 2 && player2 === true){
            player1 = true;
            playerStats.child("/player 1/active").set(true);
            console.log("player 1 registered");
        } else if (players === 2 && player1 === false) {
            player2 = true;
            playerStats.child("/player 2/active").set(true);
            console.log("player 2 registered");

        } else if(player1 === false && player2 === false) {
            alert("No more space, please leave.");


        }


    }

    } , function(error){

    });
}

