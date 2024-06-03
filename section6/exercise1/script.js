console.log("=== === ===");

let cardYou = document.querySelector("#you span");
let cardCPU = document.querySelector("#cpu span");
let btnPlay = document.querySelector(".btn");
let msg = document.querySelector(".msg");
// console.log(cardYou);

btnPlay.addEventListener("click", () => {
  let numRandom1 = Math.floor(Math.random() * 10) + 1;
  let numRandom2 = Math.floor(Math.random() * 10) + 1;
  console.log(numRandom1, numRandom2);

  cardYou.innerHTML = numRandom1;
  cardCPU.innerHTML = numRandom2;

  if (numRandom1 > numRandom2) {
    console.log("You Win!");
    msg.innerHTML = "You Win!";
  } else if (numRandom1 == numRandom2) {
    msg.innerHTML = "Equalized!";
  } else {
    console.log("You Lose!");
    msg.innerHTML = "You Lose!";
  }
});

// implementa ex con img cards!
