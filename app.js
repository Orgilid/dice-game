// Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡, Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð³ 0, Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð³ 1 Ð³ÑÐ¶ Ñ‚ÑÐ¼Ð´ÑÐ³Ð»ÑÐµ.
var activePlayer = 1;

// Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð´Ñ‹Ð½ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»ÑÐ°Ð½ Ð¾Ð½Ð¾Ð¾Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡
var scores = [0, 0];

// Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð½Ð´ÑÑ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»Ð¶ Ð±Ð°Ð¹Ð³Ð°Ð° Ð¾Ð½Ð¾Ð¾Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡
var roundScore = 0;

// Ð¨Ð¾Ð¾Ð½Ñ‹ Ð°Ð»ÑŒ Ñ‚Ð°Ð»Ð°Ð°Ñ€Ð°Ð° Ð±ÑƒÑƒÑÐ½Ñ‹Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡ Ñ…ÑÑ€ÑÐ³Ñ‚ÑÐ¹, 1-6 Ð³ÑÑÑÐ½ ÑƒÑ‚Ð³Ñ‹Ð³ ÑÐ½Ñ Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡Ð¸Ð´ ÑÐ°Ð½Ð°Ð¼ÑÐ°Ñ€Ð³Ò¯Ð¹Ð³ÑÑÑ€ Ò¯Ò¯ÑÐ³ÑÐ¶ Ó©Ð³Ð½Ó©.
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼ ÑÑ…Ð»ÑÑ…ÑÐ´ Ð±ÑÐ»Ñ‚Ð³ÑÐµ
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Ð¨Ð¾Ð¾ :" + dice);