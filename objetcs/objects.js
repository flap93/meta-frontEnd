const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

console.log(myCar.make);

//! antoher wat to access objects
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

// !Build in methods for objects to access the keys of the object

const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

// !Build in methods for objects to access the values of the object

const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [ 300, 'yellow' ]

// !Another useful method  is the OBJECT.ENTRIES()
//  *retuns an array of the keys and values of the object

const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

// HOW loop through an object :

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  console.log(keys, ":", clothingItem[key]);
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

// DESTRUCTURING OBJECTS

const { name, email, password } = employee;

console.log(employee);
