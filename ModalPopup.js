
$(document).ready(function(){
    $("#card1").click(function(){
        $("#modal1").modal('show');
        console.log("clicked");
    });
    $("#card2").click(function(){
        $("#modal2").modal('show');
    });
    $("#card3").click(function(){
        $("#modal3").modal('show');
    });
    $("#card4").click(function(){
        $("#modal4").modal('show');
    });
});