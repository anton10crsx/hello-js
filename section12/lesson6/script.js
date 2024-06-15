console.log("Exercise");

// 1 1 1
// 2 2 2
// 3 3 3

const section = document.querySelector("section");

let markup = "";

for (let i = 1; i <= 3; i++) {
  markup += `<div>`;
  for (let j = 1; j <= 3; j++) {
    markup += `<span> ${i} </span>`;
  }
  markup += `</div>`;
}

// console.log(markup);
section.innerHTML = markup;
