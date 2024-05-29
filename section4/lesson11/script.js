console.log("Happy, Coding!");

let box = document.querySelector(".box");

/*
box.addEventListener("click", function () {
  box.style.backgroundColor = "#930";
});
*/

box.addEventListener("click", fClick);

function fClick() {
  box.style.backgroundColor = "gold";
}
