console.log("Test!");

window.addEventListener("load", imgLoaded);
let timerId;
const sliderContainer = document.querySelector(".slider");

function handleClicks() {
  clearInterval(timerId);
  slider();
  timerId = setInterval(slider, 4000);
}

function imgLoaded() {
  console.log("Load");

  sliderContainer.addEventListener("click", handleClicks);
  timerId = setInterval(slider, 4000);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(timerId);
    } else {
      timerId = setInterval(slider, 4000);
    }
  });
}

function restartClicks() {
  sliderContainer.addEventListener("click", handleClicks);
}

function slider() {
  // document.querySelector(".visible").style.left = "-100%";
  // document.querySelector(".next").style.left = "0";
  sliderContainer.removeEventListener("click", handleClicks);
  setTimeout(restartClicks, 2000);
  // 1)
  let imgVisible = document.querySelector(".visible");
  imgVisible.classList.remove("visible");
  // 2)
  let imgNext = document.querySelector(".next");
  imgNext.classList.replace("next", "visible");
  // 3)
  let imgNextVisible = document.querySelector(".visible + img");

  if (imgNextVisible !== null) {
    imgNextVisible.classList.add("next");
  } else {
    let firstImg = document.querySelector(".slider img:first-of-type");
    firstImg.classList.add("next");
  }
}
