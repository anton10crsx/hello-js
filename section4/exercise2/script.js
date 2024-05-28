console.log("=== === ===");

let ptRoma;
let ptNapoli;
let ptBologna;
let ptTot;

ptRoma = document.querySelector("#roma td:nth-of-type(2)");
ptNapoli = document.querySelector("#napoli td:nth-of-type(2)");
ptBologna = document.querySelector("#bologna td:nth-of-type(2)");
ptTot = document.querySelector("#tot th:nth-of-type(2");

// Roma
ptRoma.onclick = function () {
  let oldPtRoma;
  let newPtRandom;
  let newPtTot;
  let otherClubs;

  oldPtRoma = +ptRoma.innerHTML; // Number
  newPtRandom = Math.floor(Math.random() * 100) + 1;

  // ptRoma.innerHTML = newPtRandom;

  newPtTot = +ptTot.innerHTML;
  otherClubs = newPtTot - oldPtRoma;

  ptRoma.innerHTML = newPtRandom;
  ptTot.innerHTML = otherClubs + newPtRandom;
};

// Napoli
ptNapoli.onclick = function () {
  let oldPtNapoli;
  let newPtRandom;
  let newPtTot;
  let otherClubs;

  oldPtNapoli = +ptNapoli.innerHTML; // Number
  newPtRandom = Math.floor(Math.random() * 100) + 1;

  newPtTot = +ptTot.innerHTML;
  otherClubs = newPtTot - oldPtNapoli;

  ptNapoli.innerHTML = newPtRandom;
  ptTot.innerHTML = otherClubs + newPtRandom;
};

// Bologna
ptBologna.onclick = function () {
  let oldPtBologna;
  let newPtRandom;
  let newPtTot;
  let otherClubs;

  oldPtBologna = +ptBologna.innerHTML; // Number
  newPtRandom = Math.floor(Math.random() * 100) + 1;

  newPtTot = +ptTot.innerHTML;
  otherClubs = newPtTot - oldPtBologna;

  ptBologna.innerHTML = newPtRandom;
  ptTot.innerHTML = otherClubs + newPtRandom;
};
