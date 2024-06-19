console.log("Bomb, Not Bomb!");

const box = document.querySelectorAll(".box span");
let bomb = Math.floor(Math.random() * 16);
console.log("Bomb in: " + bomb);
const result = document.querySelector(".result h2");
const btn = document.querySelector(".result button");
const xxx = document.querySelector(".boxxx");

let count = 0;

for (let i = 0; i < box.length; i++) {
  box[i].textContent = "🥹";
  box[bomb].textContent = "💥";

  box[i].addEventListener("click", playGame, { once: true });

  function playGame() {
    console.log("### GO ###");
    box[i].classList.add("visible");

    if (box[i] === box[bomb]) {
      console.log("%cBooom!!!", "color: red; font-size: 16px;");
      result.textContent = "Booom!!!";
      xxx.style.display = "block";
      btn.classList.add("visible");
    } else {
      count++;
      console.log("try: " + count);
      result.textContent = `Try N: ${count}`;
      if (count === 15) {
        console.log("* You're safe, you win! *");
        result.textContent = "You're safe, you Win!";
        btn.classList.add("visible");
        box[bomb].classList.add("visible");
      }
    }
  }

  btn.addEventListener("click", () => {
    location.reload();
  });
}
