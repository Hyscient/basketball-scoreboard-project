let homeScore = document.getElementById("home-score");

let home = 0;
let away = 0;
function plus1() {
  home += 1;
  homeScore.textContent = home;
}

function plus2() {
  home += 2;
  homeScore.textContent = home;
}

function plus3() {
  home += 3;
  homeScore.textContent = home;
}

let awayScore = document.getElementById("away-score");
function add1() {
  away += 1;
  awayScore.textContent = away;
}
function add2() {
  away += 2;
  awayScore.textContent = away;
}
function add3() {
  away += 3;
  awayScore.textContent = away;
}
