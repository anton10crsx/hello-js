console.log("=== Color Picker ===");

const colorPickerA = document.querySelectorAll(".color-picker a");
const colorPickerH4 = document.querySelectorAll(".color-picker h4");
console.log("🚀 ~ colorPickerA:", colorPickerA);
const iPhone = document.querySelector(".box");
let colorClass;

for (let i = 0; i < colorPickerA.length; i++) {
  let colorH4 = getComputedStyle(colorPickerA[i]).backgroundColor;
  colorPickerH4[i].innerHTML = `C: ${colorH4}`;
  colorPickerA[i].addEventListener("mouseover", handleColorPicker);
  colorPickerA[i].addEventListener("mouseleave", handleColorPickerR);
}

function handleColorPicker(e) {
  e.preventDefault();
  let colorClicked = e.target;
  colorClass = colorClicked.className;
  // console.log(colorClass);
  iPhone.classList.add(colorClass);
}

function handleColorPickerR() {
  iPhone.classList.remove(colorClass);
}
