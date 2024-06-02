console.log("%cHappy, Coding!", "background: #9c0;");

let age = document.getElementById("age");
let btn1 = document.getElementById("btn1");
let result = document.querySelector(".result");

btn1.addEventListener("click", fCheckAge);

function fCheckAge() {
  let ageIns = age.value;
  console.log(ageIns);

  if (ageIns >= 18) {
    console.log("Vai Niki Lauda!");
    result.textContent = "Vai Niki Lauda!";
  } else if (ageIns == "") {
    console.log("Ins Età");
    result.textContent = "Inserisci l'età, grazie...";
  } else {
    console.log("Solvitur ambulando...");
    result.textContent = "Solvitur ambulando...";
  }
}
