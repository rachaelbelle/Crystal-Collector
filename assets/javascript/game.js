
var targetNumber = Math.floor((Math.random() * (120 - 19 +1)) + 19);
//var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19  --- Meguels solution
//selecting random # between 19 and 120
//BTWs.  THIS IS NOT WORKING PROPERLY!!
$("#number-to-guess").text("Number to Guess: " + targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;

var blue = Math.floor(Math.random() * 12 + 1);
var red = Math.floor(Math.random() * 12 + 1);
var yellow = Math.floor(Math.random() * 12 + 1);
var green = Math.floor(Math.random() * 12 + 1);

$("#numberWins").text("Wins: " + wins);
$("#numberLosses").text("Losses: " + losses);
//$("#totalScore").text("Your total score is: " + counter);

function reset(){
  targetNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
  $("#number-to-guess").text("Number to Guess: " + targetNumber);
  blue = Math.floor(Math.random() * 12 + 1);
  red = Math.floor(Math.random() * 12 + 1);
  yellow = Math.floor(Math.random() * 12 + 1);
  green = Math.floor(Math.random() * 12 + 1);
  counter = 0;
  $("#totalScore").text("Your total score is: " + counter);
  console.log("reset worked")
}

function great(){
  alert("You Won!");
  wins++;
  $("#numberWins").text("Wins: " + wins);
  reset();
}

function sorry(){
  alert("You Lose!");
  losses++;
  $("#numberLosses").text("Losses: " + losses);
  reset();
}

$("#blue").on("click", function(){
  counter = counter + blue;
  $("#totalScore").text("Your total score is: " + counter);
  if (counter === targetNumber){
    great();
  }  else if  (counter > targetNumber){
    sorry();
  }
});

$("#red").on("click", function(){
  counter = counter + red;
  $("#totalScore").text("Your total score is: " + counter);
  if (counter === targetNumber){
    great();
  } else if (counter > targetNumber) {
    sorry ();
  }
});

$("#green").on("click", function(){
  counter = counter + green;
  $("#totalScore").text("Your total score is: " + counter);
  if (counter === targetNumber){
    great();
  } else if (counter > targetNumber) {
    sorry ();
  }
});

$("#yellow").on("click", function(){
  counter = counter + yellow;
  $("#totalScore").text("Your total score is: " + counter);
  if (counter === targetNumber){
    great();
  } else if (counter > targetNumber) {
    sorry ();
  }
});
