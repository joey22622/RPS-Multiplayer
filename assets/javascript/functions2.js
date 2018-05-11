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


// document.onkeyup = function(event){   
//     if (event.keyCode == 13 && $(".player-name").is(":focus") && $(".player-name").val()) {
//         var playerName = $(".player-name").val();
//         connectedRef.on("value", function(snapshot){
//             console.log (localActive + "!!!!");
//             playerCount.on("value", function(snap) {
//                 if(snapshot.numChildren() == 0){
//                     localActive = playerCount.push("Player1");
//                     var player = "player1";
//                 console.log(player);
//                 } else if (snapshot.numChildren()== 1){
//                     var player = "player2";
//                     localActive = playerCount.push("Player2");
//                     console.log(player);   
//                 } else {
//                     alert("Sorry");
//                 }
            
//             });
               
//        },function(errorObject){
//            console.log("The read failed: " + errorObject.code);
//        });


        
//     }
// }



// connectedRef.on("value", function(snapshot){
//      if(localActive){

//         // Remove user from the connection list when they disconnect.
//         localActive.onDisconnect().remove();
//         console.log("hello");
//      }
        
// },function(errorObject){
//     console.log("The read failed: " + errorObject.code);
// });

// playerCount.on("value", function(snapshot){
//     var current
// } , function(errorObject){
//     console.log("The read failed: " + errorObject.code);
// }
// );








// function choosePlay(){
//     var play = $(this).attr("data-play");
//     $(".play-img").css({ "opacity" : "0"});
//     $("." + play +", ." + play +":hover").css({"transform" : "scale(2)" , "opacity" : "1", "background" : "none", "border" : "none"});
//     waitingToggle();
// }

// function waitingToggle(){

// }

// $("body").on("click", ".play-img", choosePlay);


/*

VARIABLES  

SLOT 1
SLOT 2

WINS 1
WINS 2

LOSSES 1
LOSSES 2

PLAYER 1 MOVES AVAILABLE [ROCK, PAPER, SCISSORS]
PLAYER 2 MOVES AVAILABLE [ROCK, PAPER, SCISSORS]

BOOLEANS
PLAYER 1 ACTIVE
PLAYER 2 ACTIVE

PLAYER 1 LOCKED
PLAYER 2 LOCKED

ON SCREEN LOAD
    GAME ACTIVE = FALSE

ON KEYPRESS ENTER
    IF NAME FIELD !== 0 {
        IF(!SLOT-1){
            DATABASE.PUSH SLOT : 1
            PLAYER 1 = TRUE
            MY PLAYER = PLAYER 1
        } ELSE IF(SLOT-2)
            DATABASE.PUSH SLOT : 2
            PLAYER 2 = TRUE
            MY PLAYER = PLAYER 2
        } ELSE
            ALERT: GAME IS FULL, SORRY
        }
        (LOAD MOVES)
    }

(LOAD MOVES)
    PLAY IMG. CSS = VISIBLE
    DATA MOVE = AVAILALBE

(LOCK MOVE)
    ON PLAY-IMG CLICK
        IF(DATA MOVE === AVAILABLE)
            PLAY IMG . DATA MOVE : UNAVAIALBLE
            VAR PLAY  = THIS.DATA PLAY
            DATABASE.MY PLAYER.PUSH (PLAY : PLAY, READY : TRUE);
            IF(PLAYER.READY === TRUE && OPPONENT.READY === TRUE){
                (RUN GAME)
            }

(RUN GAME)
    OPPONENT = DATABASE.OPPONENT 2.

*/





