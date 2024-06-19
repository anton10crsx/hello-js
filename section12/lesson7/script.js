console.log("=== === ===");

const header = document.querySelector("header");
const ulTag = document.querySelector("ul");
const oneliTag = document.querySelector("li:first-child");
const twoliTag = document.querySelector("li:nth-child(2)");
const threeliTag = document.querySelector("li:nth-child(3)");
const fourliTag = document.querySelector("li:last-child");

header.addEventListener("click", handleHeader, { capture: false });
ulTag.addEventListener("click", handleUlTag);
// oneliTag.addEventListener("click", handleLiTag);
// twoliTag.addEventListener("click", handleLiTag);
// threeliTag.addEventListener("click", handleLiTag);
// fourliTag.addEventListener("click", handleLiTag);

function handleHeader(e) {
  // console.log("Click on HEADER!");
  // e.stopPropagation();
  // console.log(e.eventPhase);
  // console.log(e.target);
  const aClicked = e.target;
  console.log(aClicked.tagName.toLowerCase());
  if (aClicked.tagName.toLowerCase() === "a") {
    aClicked.classList.add("clicked");
  }
}

function handleUlTag() {
  // console.log("Click on UL!");
}

function handleLiTag(e) {
  // console.log("Click on LI!");
  console.log(e.target);
  console.log(e.currentTarget);
  const liClicked = e.currentTarget;
  liClicked.classList.add("clicked");
}
