alert("Hi, Welcome to Rich Schmitt Production Land. This is the Crystal Collector Game! Have fun playing...I Love You<3");

var targetNumber= Math.floor(Math.random() * 70) + 50;

$("#numberToGuess").text(targetNumber);

//var totalScore=;

//var wins=;

//var loses=;

//var crystal_1= 17;
//var crystal_2= 10;
//var crystal_3= 5;
//var crystal_4= 13;
var reset = function() {
      targetNumber = Math.floor(Math.random() * 70) + 50;
      $("#numberToGuess").text(targetNumber);
      counter = 0;

    }


var wins = 0;
var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

var counter = 0;
$("#c1").on("click", function()  {
  console.log(counter);

  counter += 19;

  alert("Your new crystal score count is:" + counter);


  if(counter === targetNumber) {
    wins++;
    document.querySelector('#wins').innerHTML = wins;
    alert("You won!");
    reset();

  }

  else if(counter >= targetNumber) {
    losses++;
    document.querySelector('#losses').innerHTML = losses;
    alert("You loose...");
    reset();

  }


});

$("#c2").on("click", function()  {
  console.log(counter);

  counter += 7;

  alert("Your new crystal score count is:" + counter);

  if(counter === targetNumber) {
    wins++;
    document.querySelector('#wins').innerHTML = wins;
    alert("You won!");
    reset();

  }

  else if(counter >= targetNumber) {
    losses++;
    document.querySelector('#losses').innerHTML = losses;
    alert("You loose...");
    reset();

  }

});

$("#c3").on("click", function()  {
  console.log(counter);

  counter += 6;

  alert("Your new crystal score count is:" + counter);

  if(counter === targetNumber) {
    wins++;
    document.querySelector('#wins').innerHTML = wins;
    alert("You won!");
    reset();

  }

  else if(counter >= targetNumber) {
    losses++;
    document.querySelector('#losses').innerHTML = losses;
    alert("You loose...");
    reset();

  }

});

$("#c4").on("click", function()  {
  console.log(counter);

  counter += 11;

  alert("Your new crystal score count is:" + counter);

  if(counter === targetNumber) {
    wins++;
    document.querySelector('#wins').innerHTML = wins;
    alert("You won!");
    reset();

  }

  else if(counter >= targetNumber) {
    losses++;
    document.querySelector('#losses').innerHTML =  losses;
    alert("You loose...");
    reset();

  }

});
