console.log("Wikipedia!");

const links = document.querySelectorAll("a");
console.log(links);
console.log(links.length);
const popup = document.querySelector(".notice");
const btns = document.querySelectorAll(".notice section button");

const wikipedia = "https://it.wikipedia.org";
let urlRel;

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     links[i].style.color = "#930";
//   });
// }

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", handleClicks);
}

function handleClicks(e) {
  e.preventDefault();
  // console.log(e.target);
  let linkClicked = e.target;
  urlRel = linkClicked.getAttribute("href");
  linkClicked.classList.add("link-clicked");
  popup.classList.add("popup-visible");
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClickBtns);
}

function handleClickBtns(e) {
  let btnsClicked = e.target;
  if (btnsClicked.innerHTML === "Y") {
    console.log("Y");
    popup.classList.remove("popup-visible");
    let urlOk = wikipedia + urlRel;
    window.location.href = urlOk;
  } else {
    console.log("N");
    popup.classList.remove("popup-visible");
  }
}

// event.delegation...
