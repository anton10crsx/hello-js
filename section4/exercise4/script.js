console.log("=== === ===");

let redColor = document.getElementById("red-color");
let greenColor = document.getElementById("green-color");
let blueColor = document.getElementById("blue-color");

redColor.addEventListener("change", changeColor);
greenColor.addEventListener("change", changeColor);
blueColor.addEventListener("change", changeColor);

function changeColor(e) {
  console.log(e.target);
  let element = e.target;
  document.body.style.backgroundColor = element.value;
}

// function changeColorGreen() {
//   document.body.style.backgroundColor = "green";
// }
// function changeColorBlue() {
//   document.body.style.backgroundColor = "blue";
// }
