console.log("Oooh!");

let div1 = document.querySelector("div");
let btn1 = document.querySelector("#add-c");
let btn2 = document.querySelector("#remove-c");

// div1.className = "ccc";
btn1.addEventListener("click", () => {
  div1.className = "ccc";
});

btn2.addEventListener("click", () => {
  div1.className = "";
});
