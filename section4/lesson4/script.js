console.log("The Shining!");

let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.onclick = function () {
  console.log("Il mattino ha l'oro in bocca...");
  // text.innerHTML = text.innerHTML + "<p>Il mattino ha l'oro in bocca...</p>";
  text.innerHTML += "<p>Il mattino ha l'oro in bocca...</p>";
};
