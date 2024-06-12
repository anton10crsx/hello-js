console.log("=== === ===");

const myLi = document.querySelectorAll("li");
//
for (let i = 0; i < myLi.length; i++) {
  myLi[i].textContent = `Item ${i + 1}`;
}
