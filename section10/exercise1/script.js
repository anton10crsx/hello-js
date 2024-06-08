console.log("Hello, World!");

const h1Hello = document.querySelector("h1");
const h2Timer = document.querySelector("#timer");

// changeTheTxt();

function changeTheTxt() {
  h1Hello.innerHTML = `Hello, Foo:)`;
}

setTimeout(changeTheTxt, 4000); // 1000ms = 1s;

h2Timer.addEventListener("click", incrementTimer);
h2Timer.addEventListener("mouseover", stopTimer);
h2Timer.addEventListener("mouseout", startTimer);

function incrementTimer() {
  h2Timer.innerHTML++;
}

let timer1;
timer1 = setInterval(incrementTimer, 1000);
console.log(setInterval);

function stopTimer() {
  clearInterval(timer1);
}

function startTimer() {
  timer1 = setInterval(incrementTimer, 1000);
}
