/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
 - The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// document.querySelector("#current-" + activePlayer).textContent = dice;

//document.querySelector("#current-" + activePlayer).  innerHTML = "<em>" + dice + "</em>";

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  // 0.1 Random number
  dice = Math.floor(Math.random() * 6) + 1;

  // 0.2 Display the result
  document.querySelector(".dice").style.display = "block";
  document.querySelector(".dice").src = "dice-" + dice + ".png";

  // 0.3 Update the round score if the rolled number was NOT a 1

  if (dice !== 1) {
    //add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }
});
