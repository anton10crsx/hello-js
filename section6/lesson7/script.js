console.log("Hi!");

let aaa = document.querySelector("a");

aaa.addEventListener("click", handlerClick);

function handlerClick(e) {
  e.preventDefault();
  console.log("Click Ok");
}
