console.log("Hi!");

let box = document.getElementById("box");

// let tmp = 1;

// box.onclick = function () {
//   console.log("counter");
//   box.innerHTML = tmp++;
// };

box.onclick = function () {
  //   let boxContent = Number(box.innerHTML);
  //   box.innerHTML = boxContent + 1;
  box.innerHTML = Number(box.innerHTML) + 1;
};

box.onmouseover = function () {
  box.style.backgroundColor = "#930";
};

box.onmouseout = function () {
  box.style.backgroundColor = "#9c0";
};
