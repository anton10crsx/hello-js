console.log("=== === ===");

let inputName = document.querySelector("#inputName");
let btn = document.querySelector("#btn");
let result = document.querySelector(".result");
// let rSpan = document.querySelector(".result span");

btn.addEventListener("click", () => {
  let uName = inputName.value;
  console.log(uName);
  // result.textContent += uName + "!";
  // result.innerHTML += `<span>${uName}</span>!`;
  // rSpan.innerHTML = uName;
  // result.style.display = "block";
  result.innerHTML = `Hello, <span>${uName}</span>!`;
});

// 86-87
