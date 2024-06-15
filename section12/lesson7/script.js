console.log("=== === ===");

const header = document.querySelector("header");
const ulTag = document.querySelector("ul");
const liTag = document.querySelector("li:first-child");

console.log(header);
console.log(liTag);

header.addEventListener("click", handleHeader, { capture: true });
ulTag.addEventListener("click", handleUlTag);
liTag.addEventListener("click", handleLiTag);

function handleHeader(e) {
  console.log("Click on HEADER!");
  // e.stopPropagation();
  console.log(e.eventPhase);
}

function handleUlTag() {
  console.log("Click on UL!");
}

function handleLiTag(e) {
  console.log("Click on LI!");
  console.log(e.target);
}
