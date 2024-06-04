console.log("Hi!");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

let div1 = document.querySelector(".div-one");

btn1.addEventListener("click", () => {
  div1.classList.add("class1", "class2");
});

btn2.addEventListener("click", () => {
  div1.classList.remove("class2");
});

btn3.addEventListener("click", () => {
  div1.classList.toggle("class3");
});
