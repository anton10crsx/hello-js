console.log("Happy Coding!!!");

const ulOne = document.querySelector("ul");
const liSpecial = document.querySelector("ul li:nth-of-type(2)");
// console.log("🚀 ~ liSpecial:", liSpecial);

// const elToInject = document.createElement("li");
// elToInject.textContent = "I'm a new li!";

// ulOne.insertBefore(elToInject, liSpecial);
// ulOne.insertBefore(elToInject, null);

const lastLi = document.querySelector("ul li:last-of-type");
ulOne.insertBefore(lastLi, liSpecial);

const spanTag = document.createElement("span");
spanTag.textContent = "Hello, I'm a span!";

ulOne.replaceChild(spanTag, liSpecial);

// - - -
const li3 = document.querySelector("ul li:nth-of-type(3)");
ulOne.removeChild(li3);

// - - -
const pFoo = document.querySelector("p");
pFoo.insertAdjacentElement("beforeend", spanTag);
