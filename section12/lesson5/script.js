console.log("foo");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // break;
    continue;
  }
  console.log(i);
}

console.log("=== while ===");

// Infinite Loop
// let i = 1;

// while (i <= 10) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

let i = 0;

while (i < 10) {
  i++;
  if (i === 5) {
    continue;
  }
  console.log(i);
}
