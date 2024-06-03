console.log("Hi!");

let mainHeader = document.querySelector(".header");
let topBtn = document.querySelector("#top-btn");

document.addEventListener("scroll", () => {
  let pxScroll = window.scrollY;
  console.log(Math.floor(pxScroll));

  if (pxScroll > 128) {
    mainHeader.style.padding = "20px 0";
    topBtn.style.opacity = "1";
  } else {
    mainHeader.style.padding = "40px 0";
    topBtn.style.opacity = "0";
  }
});
