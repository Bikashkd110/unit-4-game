//*********************GLOBAL  VARIABLES ***************//
$(document).ready(function() {
    var targetNumber;
    var counterTotal = 0;
    var wins = 0;
    var losses = 0;
    var crystalRed = $("#crystal-red");
    var crystalWhite = $("#crystal-white");
    var crystalBlue = $("#crystal-blue");
    var crystalGreen = $("#crystal-green");
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var ranNums = [];
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19; // setting inbetween numbers//
    $("#current-random-num").empty();
    $("#current-random-num").text(targetNumber);


    function restart() {
    counterTotal = 0;
    $("#counter-total").text(counterTotal);
    $("#counter-total").empty();
    $("#current-random-num").empty();
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#current-random-num").text(targetNumber);
    ranNums = [];
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    randomCrystalValues();
    }

  function randomCrystalValues() {
    (i = nums.length), (j = 0);

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }

    
  }
  randomCrystalValues();

  $(".crystal-image").on("click", function() {
    $(crystalRed).attr("data-crystalvalue", ranNums[0]);
    $(crystalWhite).attr("data-crystalvalue", ranNums[1]);
    $(crystalBlue).attr("data-crystalvalue", ranNums[2]);
    $(crystalGreen).attr("data-crystalvalue", ranNums[3]);

    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    
    counterTotal += crystalValue;
    $("#counter-total").text(counterTotal);

    if (counterTotal === targetNumber) {
      alert("You win!");
      wins++;
      $("#wins").text(wins);
      restart();
    } else if (counterTotal >= targetNumber) {
      alert("You lose!!");
      losses++;
      $("#losses").text(losses);
      restart();
    }
  });
});
