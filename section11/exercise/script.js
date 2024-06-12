console.log("%cGood Luck!", "color: #1962a0; font-size: 16px");

const btn = document.querySelector(".btn");
const inputNum = document.querySelector("#num");
const slot = document.querySelectorAll("li.slot");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const numU = +inputNum.value;

  const numSlot0 = Math.floor(Math.random() * 10);
  const numSlot1 = Math.floor(Math.random() * 10);
  const numSlot2 = Math.floor(Math.random() * 10);
  const numSlot3 = Math.floor(Math.random() * 10);

  slot[0].innerHTML = numSlot0;
  slot[1].innerHTML = numSlot1;
  slot[2].innerHTML = numSlot2;
  slot[3].innerHTML = numSlot3;

  const slotMachineNum = [numSlot0, numSlot1, numSlot2, numSlot3];
  console.log(slotMachineNum);

  if (slotMachineNum.indexOf(numU) === -1) {
    console.log("U Loose!");
    result.textContent = "U Lose!!!";
  } else {
    console.log("U Won!");
    result.textContent = "U Won!!!";
    result.classList.toggle("won");
  }
});
