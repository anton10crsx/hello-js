console.log("=== Chess ===");

const chessboard = document.querySelector(".chessboard");

let markup = "";
let class1, class2;

for (let i = 0; i < 8; i++) {
  console.log(i);
  if (i % 2 === 0) {
    class1 = "white";
    class2 = "black";
  } else {
    class1 = "black";
    class2 = "white";
  }
  for (let j = 0; j < 8; j++) {
    console.log(j);
    if (j % 2 === 0) {
      markup += `<div class=${class1}></div>`;
    } else {
      markup += `<div class=${class2}></div>`;
    }
  }
}

console.log(markup);
chessboard.innerHTML = markup;
