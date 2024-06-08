console.log("Test!");

window.addEventListener("load", imgLoaded);

function imgLoaded() {
  console.log("Load");

  const sliderContainer = document.querySelector(".slider");
  sliderContainer.addEventListener("click", slider);
  setInterval(slider, 4000);
}

function slider() {
  // document.querySelector(".visible").style.left = "-100%";
  // document.querySelector(".next").style.left = "0";

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
