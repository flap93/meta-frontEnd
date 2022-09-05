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

//!-----------------------------------------------------------------------

//* Converting between strings and arrays
// *Often you'll be presented with some raw data contained in a big long string, and you might want to separate the useful items out into a more useful form and then do things to them, like display them in a data table. To do this, we can use the split() method. In its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",");

console.log(cities);

// !-----------------------------------------------------------------------
//  *How to remove duplicates from an array using the SET METHOD
//  *the set method allows you to set a new object

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

const set = new Set(arr);

const noDuplicates = [...set];

console.log(noDuplicates);

// !-----------------------------------------------------------------------

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
const id = users.filter((user) => user.id === 1);

console.log(result);
console.log(id);

// !----

let array = [5, 6, 10, 1, 2, 3, 4, 7, 8, 9];

const result2 = array.sort((a, b) => a - b);

console.log(result2);
