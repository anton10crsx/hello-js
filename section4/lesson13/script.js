let football = document.getElementById("football");
let volleyball = document.getElementById("volleyball");
let imgFootball = document.getElementById("img-football");
let imgVolleyball = document.getElementById("img-volleyball");

football.addEventListener("change", radioFootballHandler);
volleyball.addEventListener("change", radioVolleyballHandler);

function radioFootballHandler() {
  imgFootball.style.display = "block";
  imgVolleyball.style.display = "none";
}

function radioVolleyballHandler() {
  imgVolleyball.style.display = "block";
  imgFootball.style.display = "none";
}
