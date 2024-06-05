console.log("Hello!");

let superDiv = document.querySelector("div");
let bestImg = document.querySelector("img");

console.log(superDiv.title);

superDiv.title = "Hello, I'm The Best Div N.1";

// getAttribute | setAttribute

console.log(bestImg.src);
console.log(bestImg.getAttribute("src"));

bestImg.setAttribute("src", "./img/picsum02.jpg");

// removeAttribute

// superDiv.removeAttribute("title");
