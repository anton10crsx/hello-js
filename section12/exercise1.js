console.log("=== Exercise ===");

// Print in console array e equal & > 20.

let arrayNum = Array.from({ length: 5 }, function () {
  return Math.floor(Math.random() * 50) + 1;
});

// console.log("Numbers: " + arrayNum + "\n");

// for (let i = 0; i < arrayNum.length; i++) {
//   if (arrayNum[i] % 2 === 0 && arrayNum[i] > 20) {
//     console.log(arrayNum[i].toString());
//   }
// }

console.log("\nArray Num: " + arrayNum + "\n");
let newArrayNum = [];
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] % 2 === 0 && arrayNum[i] > 20) {
    newArrayNum.push(arrayNum[i]);
  }
}

console.log("New Array Num: " + newArrayNum);
