console.log("Happy, Coding!");

const btnCdClose = document.querySelector(".countdown-close");

let timer = setInterval(countDown, 1000);

function countDown() {
  let num = btnCdClose.innerHTML;

  if (num > 1) {
    btnCdClose.innerHTML--;
  } else {
    btnCdClose.innerHTML = "&times;";
    btnCdClose.classList.add("close-click");
    clearInterval(timer);
    btnCdClose.addEventListener("click", closeModal);
  }
}

function closeModal() {
  console.log("close");
  const modal = document.querySelector(".modal");
  modal.classList.add("close-modal");
}
