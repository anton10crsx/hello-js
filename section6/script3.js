let num = Math.floor(Math.random() * 10) + 1;
console.log("🚀 ~ num:", num);

// num fra 3 & 6;

if (num > 3 && num < 6) {
  console.log(num + " è compreso fra 3 & 6.");
} else if (num < 3) {
  console.log(num + " è minore di 3");
} else if (num > 6) {
  console.log(num + " è maggiore di 6");
} else if (num == 3 || num == 6) {
  console.log(num + " è " + num + "!");
} else {
  console.log("Bye!");
}
