console.log("Happy, Coding!");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  console.log(red, green, blue);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
