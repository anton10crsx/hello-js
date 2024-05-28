console.log("%cHappy Coding!", "color: red; font-size: 24px;");

let box = document.querySelector("#box");
// console.log(box);

/*
// e - event
box.onclick = function (event) {
  // console.log(event);
  console.log(event.target);
  box.innerHTML = +box.innerHTML + 1; // + Number
};
*/

box.onclick = counter;

function counter(e) {
  console.log(e.target);
  box.innerHTML = +box.innerHTML + 1;
}

// turbo-console
let xxx = 9;
console.log("🚀 ~ xxx:", xxx);
