console.log("%c=== ChineseMorra ===", "font-size: 20px; color: #9c0;");

const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
const youChoose = document.querySelector(".card#you p");
const fooChoose = document.querySelector(".card#foo p span");
const result = document.querySelector(".result p");

const youCounter = document.querySelector("#you .counter");
const fooCounter = document.querySelector("#foo .counter");

btnStart.addEventListener("click", () => {
  youChoose.style.display = "block";
  fooChoose.textContent = "VS. Foo";
  btnStart.style.display = "none";
  btnStop.style.display = "block";
});

btnStop.addEventListener("click", () => {
  window.location.reload();
});

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// 1. rock
rock.addEventListener("click", () => {
  const fooRandomChoose = Math.floor(Math.random() * 3) + 1;

  if (fooRandomChoose === 1) {
    fooChoose.textContent = "✊";
    result.textContent = "😌 You Equalized...";
  } else if (fooRandomChoose === 2) {
    fooChoose.textContent = "🤚";
    result.textContent = "🙃 You Lose!";
    fCount = fooCounter.innerHTML;
    fCount++;
    fooCounter.innerHTML = fCount;
  } else {
    fooChoose.textContent = "✌️";
    result.textContent = "🙂 You Won!";
    yCount = youCounter.innerHTML;
    yCount++;
    youCounter.innerHTML = yCount;
  }
});

// 2. paper
paper.addEventListener("click", () => {
  const fooRandomChoose = Math.floor(Math.random() * 3) + 1;

  if (fooRandomChoose === 1) {
    fooChoose.textContent = "✊";
    result.textContent = "🙂 You Won!";
    yCount = youCounter.innerHTML;
    yCount++;
    youCounter.innerHTML = yCount;
  } else if (fooRandomChoose === 2) {
    fooChoose.textContent = "🤚";
    result.textContent = "😌 You Equalized...";
  } else {
    fooChoose.textContent = "✌️";
    result.textContent = "🙃 You Lose!";
    fCount = fooCounter.innerHTML;
    fCount++;
    fooCounter.innerHTML = fCount;
  }
});

// 3. scissors
scissors.addEventListener("click", () => {
  const fooRandomChoose = Math.floor(Math.random() * 3) + 1;

  if (fooRandomChoose === 1) {
    fooChoose.textContent = "✊";
    result.textContent = "🙃 You Lose!";
    fCount = fooCounter.innerHTML;
    fCount++;
    fooCounter.innerHTML = fCount;
  } else if (fooRandomChoose === 2) {
    fooChoose.textContent = "🤚";
    result.textContent = "🙂 You Won!";
    yCount = youCounter.innerHTML;
    yCount++;
    youCounter.innerHTML = yCount;
  } else {
    fooChoose.textContent = "✌️";
    result.textContent = "😌 You Equalized...";
  }
});
