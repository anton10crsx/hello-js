console.log("Hi!");

let box = document.getElementById("box");

// box.ondblclick = function () {
//   box.style.backgroundColor = "gold";
// };

box.ondblclick = changeBgColor;

function changeBgColor() {
  box.style.backgroundColor = "gold";
}
