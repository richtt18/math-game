alert("Hi, Welcome to Rich Schmitt Production Land. This is the Crystal Collector Game! Have fun playing...I Love You<3");

var targetNumber= 50;

$("#numberToGuess").text(targetNumber);

//var totalScore=;

//var wins=;

//var loses=;

//var crystal_1= 17;
//var crystal_2= 10;
//var crystal_3= 5;
//var crystal_4= 13;

var counter = 0;
$("#c1").on("click", function()  {
  console.log(counter);

  counter += 17;

  alert("Your new crystal score count is:" + counter);

  if(counter === targetNumber) {

    alert("You won!");
  }

  else if(counter >= targetNumber) {
    alert("You loose...");
  }

});

$("#c2").on("click", function()  {
  console.log(counter);

  counter += 10;

  alert("Your new crystal score count is:" + counter);

  if(counter === targetNumber) {

    alert("You won!");
  }

  else if(counter >= targetNumber) {
    alert("You loose...");
  }

});

$("#c3").on("click", function()  {
  console.log(counter);

  counter += 5;

  alert("Your new crystal score count is:" + counter);

  if(counter === targetNumber) {

    alert("You won!");
  }

  else if(counter >= targetNumber) {
    alert("You loose...");
  }

});

$("#c4").on("click", function()  {
  console.log(counter);

  counter += 13;

  alert("Your new crystal score count is:" + counter);

  if(counter === targetNumber) {

    alert("You won!");
  }

  else if(counter >= targetNumber) {
    alert("You loose...");
  }

});
