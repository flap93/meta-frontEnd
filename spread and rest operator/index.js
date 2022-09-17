// --------------THE REST OPERATOR ---------------
//  es igual que el spread operator ,  para concatenar arrays
//  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let c = [...a, ...b];
// console.log(c);

// function agrupar(...names) {
//   console.log(names);
// }

// agrupar("carlos", "felix", "jose", "", "");

const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];

const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);
