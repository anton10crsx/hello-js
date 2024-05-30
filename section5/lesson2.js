console.log("=== === ===");

let n1 = 11;
let n2 = 3.14;
let n3 = -6;

console.log(n1, n2, n3);
console.log(typeof n1);

// hexadecimal
let n4 = 0xa;

console.log(n4);

// binary
let n5 = 0b1010;
console.log(n5);

console.log(Number.MAX_VALUE); // > Infinity

let n6 = 3e10;
console.log(n6);

console.log(6 / 0);

console.log(0 / 0);
console.log("Pippo" * 3);

console.log(isNaN("A"));

// Number
console.log(Number(true));
console.log(Number(false));

console.log(Number(""));
console.log(Number("qwerty"));
console.log(Number("11"));

// parseInt/Float
console.log(parseInt(55.5));
console.log(parseInt("66.6"));
console.log(parseInt("66sei"));
console.log(parseInt("066sei"));

console.log(parseFloat("11.1"));

console.log(Number.isInteger(11.1));
