console.log("Happy, Coding!");

const inputXnum = document.querySelector("#xnum");
const btn = document.querySelector("#btn");

const result = document.querySelector(".result p");

btn.addEventListener("click", () => {
  const xxxnum = Number(inputXnum.value);
  console.log(xxxnum);
  // console.log(xxxnum % 2 !== 0);

  if ((xxxnum < 16 && xxxnum % 2 === 0) || (xxxnum > 60 && xxxnum % 2 === 0)) {
    result.textContent = "Ok! The Safe Is Open!";
  } else if (xxxnum % 2 !== 0 && xxxnum >= 70 && xxxnum <= 90) {
    result.textContent = "Ok! The Safe Is Open!";
  } else {
    result.textContent = "Niet!";
  }
});
