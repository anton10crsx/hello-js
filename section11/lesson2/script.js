console.log("Foo...");
/*
const ulTag = document.querySelector("ul.first-ul");
// ulTag.children("li");
console.log(ulTag.children);
const liSpecial = ulTag.children[1];
console.log(liSpecial);
// - - -
const allLi = document.querySelectorAll("li");
console.log(allLi);
console.log(ulTag.querySelectorAll("li"));
console.log(document.querySelectorAll("p")); // []
*/

// - - -

const liItem = document.querySelectorAll("li.item");
console.log(liItem);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const firstItem = document.querySelector("li.item");
  if (firstItem !== null) {
    firstItem.remove();
  } else {
    alert("End Item");
  }
});
