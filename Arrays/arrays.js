//* you can loop throguh arrays like this :
const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color);
}
//-----------------------------------------------------------------------

// ?map()
// *Sometimes you will want to do the same thing to each item in an array, leaving you with an array containing the changed items. You can do this using map(). The code below takes an array of numbers and doubles each number:

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

//!-----------------------------------------------------------------------
// ?filter()
// *Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter(). The code below takes an array of strings and returns an array containing just the strings that are greater than 8 characters long:

function isLong(city) {
  return city.length > 8;
}
// const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
// const longer = cities.filter(isLong);
// console.log(longer); // [ "Liverpool", "Edinburgh" ]

//!-----------------------SPLIT METHOD------------------------------------------------

//* Converting between strings and arrays
// *Often you'll be presented with some raw data contained in a big long string, and you might want to separate the useful items out into a more useful form and then do things to them, like display them in a data table. To do this, we can use the split() method. In its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",");

const commaSeparated = cities.join(",");

console.log(cities);
console.log(commaSeparated);
console.log(cities[0]);

// !--------------------SET METHOD---------------------------------------------------
//  *How to remove duplicates from an array using the SET METHOD
//  *the set method allows you to set a new object

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

const set = new Set(arr);

console.log(typeof set);

const noDuplicates = [...set];

console.log(noDuplicates);

// !---------------------FILTER METHOD--------------------------------------------------

const users = [
  {
    id: 1,
    name: "Trevor",
    sex: "male",
  },
  {
    id: 2,
    name: "Ysabel",
    sex: "female",
  },
  {
    id: 3,
    name: "John",
    sex: "male",
  },
  {
    id: 4,
    name: "Albert",
    sex: "male",
  },
];

const result = users.filter((user) => user.sex === "male");

// TO get id 1 & 2
const id = users.filter((user) => user.id <= 2);
// TO get id 1 ,2 and 3
const id = users.filter((user) => user.id != 4);

console.log(result);
console.log(id);

// !-----------------------------SORT METHOD---------------

let array = [5, 6, 10, 1, 2, 3, 4, 7, 8, 9];

const result2 = array.sort((a, b) => a - b);

console.log(result2);

//  !-------------------------FOR OF -----------------------------------

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let dairys of dairy) {
    console.log(dairys);
  }
}

//-----------------------------------FOR LOOP

const students = ["Maria", "John", "Albert", "Felix"];

function greetStudents(student) {
  console.log(`Hi, ${student}`);
}

for (let i = 0; i < students.length; i++) {
  greetStudents(students[i]);
}

// ! ---------- FOR EACH------------------

const fruits = ["Kiwi", "mango", "apple", "pear"];

function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex);

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

// !---------------FILTER--------

const nums = [0, 10, 20, 30, 40, 50];

const greaterTWenty = nums.filter((num) => num > 20);

console.log(greaterTWenty);

// ! -----MAP---------

const arrayFifty = [0, 10, 20, 30, 40, 50];

const result50 = arrayFifty.map((num) => num / 10);

console.log(result50);

// !Spred  operator ---------------------

let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];

function showItenerary(place1, place2, place3) {
  console.log("Visit " + place1);
  console.log("Then Visit " + place2);
  console.log("Finish with a visit to " + place3);
}

showItenerary(...top3);

//!   wHILE

const estudiantes = ["Jose", "Felix", "Theon", "Juan"];

function saludarEstu(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  const estudiante = estudiantes.shift();
  saludarEstu(estudiante);
}

// ------------ REDUCE METHOD-----------

const reduceArray = [5, 5, 5, 10, 2];

console.log(reduceArray.reduce((pv, num) => pv + num, 0));

// output :  27

//////////////////////////////////////!

// *SORT METHOD AND REDUCE METHOD

const orderNumbers = [5, 10, 7, 3, 2, 1];

const ordenar = orderNumbers.sort((a, b) => a - b);

const multiplyAll = ordenar.reduce((pv, cv) => pv * cv, 1);

console.log(multiplyAll);

//?-----------------------------------------

let i = 0;
let result = input;
while (i < fs.length) {
  result = fs[i](result);
  i++;
}

return result;

//?------------------------

return fs.reduce(function (pv, cv) {
  return cv(pv);
}, input);

//? ------------------------------------
return fs.reduce((pv, cv) => cv(pv), input);

//!---------------------------------------------------------------------------------
//!---------------------------------------------------------------------------------
// !-----------mirar tb el spread or el rest operator en su folder --------
//!---------------------------------------------------------------------------------
//!---------------------------------------------------------------------------------

//! -------- METHOD PUSH () PERO A TRAVES DEL SPREAD OPERATOR ----------
let vegetables = ["onion", "parsley"];
vegetables = [...veggies, "carrot", "beetroot"];

console.log(vegetables);

//  CONVERT A STRING USING THE SPREAD OPERATOR

const greeting = "Hello";

const arrayOfChars = [...greeting];

console.log(arrayOfChars);

// ARRAY METHODS

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.
// concat() – concatenates the items in the array without removing them
