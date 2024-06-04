console.log("Hello!");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#dom").innerHTML = "DOM Ok!";
});

window.addEventListener("load", () => {
  document.querySelector("#load").innerHTML = "Load Ok!";
});
