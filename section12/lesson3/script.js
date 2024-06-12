console.log("Happy, Coding!");

showHideBox();

addEventListener("scroll", showHideBox);
addEventListener("resize", showHideBox);

function showHideBox() {
  let distanceBoxFromViewportBorderTop;
  const viewportHeight = (document.documentElement.clientHeight / 8) * 7;
  console.log(viewportHeight);

  const box = document.querySelectorAll(".box");

  for (let i = 0; i < box.length; i++) {
    distanceBoxFromViewportBorderTop = box[i].getBoundingClientRect().top;
    console.log(distanceBoxFromViewportBorderTop);
    if (distanceBoxFromViewportBorderTop <= viewportHeight) {
      box[i].classList.add("show");
    } else {
      box[i].classList.remove("show");
    }
  }
}

// 162...
