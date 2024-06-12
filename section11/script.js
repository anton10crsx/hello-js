console.log("Foo...");

// Array
let names;

names = ["Anton", "Chiara", "Sophia", "Pippo"];
console.log("🚀 ~ names:", names);

console.log(names[2]);

// - - -

console.log(names.length);

let myArray = [];
console.log("🚀 ~ myArray:", myArray.length);

let num = [1, 3, 5, 7, -9, 0];

// In Js - frittoMisto
let frittoMisto = ["Pippo", 3, -4, 1.6, true];
console.log("🚀 ~ frittoMisto:", frittoMisto);

// - - -

frittoMisto[0] = "Pippa";
console.log(frittoMisto);

num[0] = num[0] + 1;
console.log(num);

frittoMisto[11] = "Anton";
console.log(frittoMisto);

// - ? -

let myArray2 = new Array(4);
console.log("🚀 ~ myArray2:", myArray2);
let myArray3 = new Array(4, 5);
console.log("🚀 ~ myArray3:", myArray3);

// Nested Array
let nArray = [1, 2, 3, [4, 5, 6], 7, 8, 9];
console.log("🚀 ~ nArray:", nArray);
console.log(nArray[3][1]);

// Ex
const n3c = ["Dante", "Giovanni", "Francesco"];
const c3c = ["Alighieri", "Boccaccio", "Petrarca"];

const treCorone = [n3c[0] + " " + c3c[0], n3c[1] + c3c[1], n3c[2] + c3c[2]];
console.log("🚀 ~ treCorone:", treCorone);

// const treCorone = [];
// treCorone[0] = n3c[0] + " " + c3c[0];
// console.log(treCorone);

const arrTest = [1, 2, 3];
console.log(Boolean(arrTest));
console.log(typeof arrTest);
console.log(Array.isArray(arrTest));

let aaa1 = [1, 2, 3];
let aaa2 = [1, 2, 3];

if (aaa1 === [aaa2]) {
  // [1, 2, 3]
  console.log("Sono uguali...");
} else {
  console.log("Non sono uguali...");
}

let v1 = 1;
let v2 = 1;

if (v1 === v2) {
  console.log("Sono uguali...");
} else {
  console.log("Non sono uguali...");
}

// slice()

const ax1 = [2, 4, 6, 8, 0];
const ax1copy = ax1.slice();
console.log("🚀 ~ ax1copy:", ax1copy);

// toString/join

// const superArray = [1, 2, 3, 4, 5, 6, undefined, null];
const superArray = [1, 2, 3, 4, 5, 6];

superArray.toString();

console.log(superArray.toString());

console.log(superArray.join(" - "));

// - indexOf - lastIndexOf -
const fiboArray = [0, 1, 1, 2, 3, 5, 8, 13];

console.log(fiboArray.indexOf(17));
console.log(fiboArray.includes(13));

// - push - pop -

const colors = ["red", "green", "blue"];

colors[3] = "pink";
colors.push("black");
colors.push("yellow", "brown", "purple");
colors.pop();

// - shift - unshift -
colors.unshift("gold");

console.log("🚀 ~ colors:", colors);

// - splice! -

const colors2 = ["red", "green", "blue"];

// colors2.splice(0, 2);
// colors2.splice(1, 0, "gold");

colors2.splice(1, 1, "yellow!");

console.log("🚀 ~ colors2:", colors2);

// - concat -

const colors01 = ["red", "green", "blue"];
const colors02 = ["black", "white"];

colors01.concat(colors02);

const colors03 = colors01.concat(colors02);

console.log("🚀 ~ colors01:", colors01);
console.log("🚀 ~ colors03:", colors03);

// 155!!!
