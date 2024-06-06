console.log("Foo!");

const myDiv = document.querySelector("div");

// f.
myDiv.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "./dynamic-script.js";
  document.body.appendChild(script);
});
