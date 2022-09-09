const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

console.log(myCar.make);

//! antoher wat to access objects-----------------------------------
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

// !Build in methods for objects to access the keys of the object--------------------

const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

// !Build in methods for objects to access the values of the object---------------------

const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [ 300, 'yellow' ]

// !Another useful method  is the OBJECT.ENTRIES()------------------------------
//  *retuns an array of the keys and values of the object

const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

// HOW loop through an object :--------------------------------------------

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

function testBracketsDynamicAccess() {
  var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

//! DESTRUCTURING OBJECTS----------------------------------------

// const employee = {
//   name: 'felix',
//   email: 'flxpalcios@hotmail.com',
//   password: 12450
// }

// const { name, email, password } = employee;

// console.log(name);

// COPY OBJECTS TO ANOTHER OBJECTs-------------------------------------------
//  this is a way of pushing one object to another , like the push method in the array

let container1 = { model: "bmw", color: "red", year: 2000 };
// let container2 = { model: "lexus", color: "green", year: 2008 };
let container2 = { car: "lexus", make: "green", number: 2008 };

// const container3 = Object.assign(container1, container2);

// console.log(container3);

console.log(Object.assign(container1, container2));

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

//*Task: Iterate Over an Array
//*In this exercise, you'll use the for....of loop to iterate over an array and to iterate over an ob*ect's own properties.

//*Step 1. You are given an array of dairy products:

//*var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
//*Create a function called logDairy. Within it, console log each of the items in the dairy array, us*ng the for...of loop.
//*The expected output should be:

//*cheese
//*sour cream
//*milk
//*yogurt
//*ice cream
//*milkshake

//*Step 2. You are given the following starter code:
//*const animal = {

//*canJump: true

//*};

//*const bird = Object.create(animal);

//*bird.canFly = true;

//*bird.hasFeathers = true;
//*Create a function called birdCan, within it, loop over the bird object's properties and console lo* each one, using the for...of loop. Remember, you need to console log both the key and the va*ue of each of the bird object's properties.

//*Step 3. Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop.

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Task 1

// Task 1

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

logDairy();

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (let birds of Object.keys(bird)) {
    console.log(birds, ": ", bird[birds]);
  }
}

birdCan();

// Task 3

function animalCan() {
  for (let birds in bird) {
    console.log(birds, ": ", bird[birds]);
  }
}

animalCan();

//!---------------FOR EACH---------------------------

const result = [];

const drone = {
  speed: 100,
  color: "yellow",
};

const droneKeys = Object.keys(drone);

droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});

console.log(result);

// !---------------MAP-------------

new Map();

let bestBoxers = new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//? output :

//* Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1); // 'The Champion'

// --------SET-----------

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

function stantonMeasure(array, value) {
  let countOne = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      countOne++;
    }
  }

  const x = array.filter((e) => e === countOne);
  const xLength = x.length;

  return xLength;
  let xTimes = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === countOne) {
      xTimes++;
    }
  }
  return xTimes;
}

function stantonMeasure(n, out) {
  const times = n.filter((one) => one === 1);
  const number = times.length;
  const x = n.filter((e) => e === number);
  const xLength = x.length;
  return xLength;
}
