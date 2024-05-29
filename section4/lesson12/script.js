console.log("===");

let inputText = document.querySelector(".input-text");

inputText.addEventListener("change", inputHandler);

function inputHandler() {
  console.log("Event Fired!"); // ...
}
