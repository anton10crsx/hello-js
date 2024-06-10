console.log("Foo");

// const box = document.querySelector(".box");
// console.log(box.getBoundingClientRect());

const section = document.querySelector("section");
const ball = document.querySelector(".ball");
const btn = document.querySelector(".btn");

const increment = 4;
let ballMoveDirection = "RIGHT";

btn.addEventListener("click", ballAnimation);

function ballAnimation() {
  console.log("8");
  ball.style.left = parseInt(ball.style.left || 0) + increment + "px";
  setTimeout(ballAnimation, 24);
}
