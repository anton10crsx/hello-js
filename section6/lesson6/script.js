console.log("Hi!");

let mainHeader = document.querySelector(".header");

document.addEventListener("scroll", () => {
  let pxScroll = window.scrollY;
  console.log(Math.floor(pxScroll));

  if (pxScroll > 128) {
    mainHeader.style.padding = "20px 0";
  } else {
    mainHeader.style.padding = "40px 0";
  }
});
