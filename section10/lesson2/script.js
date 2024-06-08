console.log("Ready!");

const twoLi = document.querySelector(".two");
console.log("🚀 ~ twoLi:", twoLi);

const threeLi = twoLi.nextElementSibling;
console.log("🚀 ~ threeLi:", threeLi);

const oneLi = twoLi.previousElementSibling;
console.log("🚀 ~ oneLi:", oneLi);

const ulTag = twoLi.parentElement;
console.log("🚀 ~ ulTag:", ulTag);

const allLi = ulTag.children;
console.log("🚀 ~ allLi:", allLi);
