function choosePlay(){
    var play = $(this).attr("data-play");
    $(".play-img").css({ "opacity" : "0"});
    $("." + play +", ." + play +":hover").css({"transform" : "scale(2)" , "opacity" : "1", "background" : "none", "border" : "none"});

}

$("body").on("click", ".play-img", choosePlay);