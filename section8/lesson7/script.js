console.log("Happy, Coding!");

const nGiocatore = document.querySelector("#nome");
const cGiocatore = document.querySelector("#cognome");
const sGiocatore = document.querySelector("#squadra");

const btnAdd = document.querySelector("#add");

btnAdd.addEventListener("click", addGiocatore);

function addGiocatore() {
  document.body.innerHTML += `<table>
  <thead>
  <tr>
  <th>Nome</th>
  <th>Cognome</th>
  <th>Squadra</th>
  </tr>
  </thead>
  <tbody>
  <td>${nGiocatore.value}</td>
  <td>${cGiocatore.value}</td>
  <td>${sGiocatore.value}</td>
  </tbody>
  </table>`;
}

// - - -
const myDiv = document.querySelector("div");
const pTag = document.createElement("p");

myDiv.appendChild(pTag);
pTag.textContent = "Lorem ipsum color sit amen...";
const pTag2 = pTag.cloneNode(true);
myDiv.appendChild(pTag2);
pTag2.append(" bla txt...");

// rivedere da 111 a 116
