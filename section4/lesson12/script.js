console.log("===");

let inputText = document.querySelector(".input-text");
let pickerText = document.querySelector(".picker-text");
let selectCity = document.querySelector("#select-city");

// e_change
// inputText.addEventListener("change", inputHandler);

// function inputHandler() {
//   console.log("Event Fired!"); // ...
//   pickerText.textContent = inputText.value;
// }

// e_input
inputText.addEventListener("input", inputHandler);

function inputHandler() {
  console.log("Event Fired!"); // ...
  pickerText.textContent = inputText.value;
}

selectCity.addEventListener("change", selectHandler);

function selectHandler() {
  console.log(selectCity.value);
}
