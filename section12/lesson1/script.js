console.log("For Foo!");

// for (let i = 0; i < 10; i++) {
//   console.log("Hello, World!");
// }

// console.log("Ok!");

// 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// add n 10
// let addN = 0;
// for (let n = 1; n <= 10; n++) {
//   addN += n;
// }
// console.log(addN);

// console.log("=== Print Array ===");

// const myArray = [2, 4, 8, 10];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// console.log("=== Print Array Random! ===");

// const arrayRandom = Array.from({ length: 100 }, function () {
//   return Math.floor(Math.random() * 100) + 1;
// });

// for (let i = 0; i < arrayRandom.length; i++) {
//   console.log(arrayRandom[i]);
// }

// - - -
// const myArray2 = [2, 4, 8, 10, 12];

// for (let i = 0; i < myArray2.length; i++) {
//   console.log(myArray2[i] + 1);
// }

// - - -

console.log("=== === ===");

// const mySuperArray = [1, 11, 3, 4, 8, 0, 12, 33, 24, 69, 0, 1];

// for (let i = 0; i < mySuperArray.length; i++) {
//   if (i % 2 === 0) {
//     console.log(mySuperArray[i]);
//   }
// }

const xArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = xArray.length - 1; i >= 0; i--) {
  console.log(xArray[i]);
}
