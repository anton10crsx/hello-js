console.log("=== === ===");

let divLeft = document.querySelector(".hero--left");
let divRight = document.querySelector(".hero--right");

let black = "#333";
let white = "#f5f5f5";

divLeft.style.backgroundColor = black;
divRight.style.backgroundColor = white;

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let tmpColor;
  tmpColor = black;
  black = white;
  white = tmpColor;

  divLeft.style.backgroundColor = black;
  divRight.style.backgroundColor = white;
});
