$(document).ready(function(){

var points = 0;
  
$("img").click(function() {
    $(this).css("background", "red");
    
    setTimeout(function(){
  $("img").css("background", "0")
}, 1000);
  });
  
  $("#diglett1").click(function() {
    points+=2; //means points = points + 2;
    $('#points').html(points);
  });
  
  $("#diglett2").click(function() {
    points+=7;
    $('#points').html(points);
  });
  
    $("#diglett3").click(function() {
    points+=3;
    $('#points').html(points);
  });
  
   $("#diglett4").click(function() {
    points+=5;
     $('#points').html(points);
  });
  
   $("#sandshrew").click(function() {
    points++;
     $('#points').html(points);
  });
  
   $("#diglett5").click(function() {
    points+=4;
     $('#points').html(points);
  });
 

var timeLeft= 30;

  function Countdown(){
  var gameEnd = setInterval(function(){
    $("#timeLeft").html(timeLeft);
    if (timeLeft == 0){
      clearInterval(gameEnd);
      alert("Time is up! You scored " + points + " points.");
    }
    
    else {
      timeLeft--;
    }
  },1000);
  
  }
  
  Countdown();

 });