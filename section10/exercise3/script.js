console.log("Happy, Coding!");

const section = document.querySelector(".alarm");
const countDown = document.querySelector(".countdown");
const btn = document.querySelector(".btn");
const audio = document.querySelector("audio");

let timer;

btn.addEventListener("click", () => {
  timer = setInterval(wakeUp, 1000);
});

function wakeUp() {
  console.log("...");
  let num = countDown.innerHTML;
  if (num > 0) {
    countDown.innerHTML--;
    btn.style.opacity = "0";
  } else {
    countDown.textContent = "Weee!";
    section.classList.add("visible");
    audio.play();
    clearInterval(timer);
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
}
