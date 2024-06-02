let num = Math.floor(Math.random() * 10) + 1;
console.log("🚀 ~ num:", num);

if (num >= 6) {
  console.log(num + " è maggiore o uguale a 6");
} else {
  console.log(num + " è minore di 6");
}

if (num > 6) {
  console.log("Il num è maggiore di 6");
} else if (num == 6) {
  console.log("Il num è 6");
} else {
  console.log("Il num è minore di 6");
}
