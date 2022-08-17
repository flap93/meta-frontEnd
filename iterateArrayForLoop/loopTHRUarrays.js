const animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// !output :
// *Grizzly Bear
// *Sloth
// *Sea Lion

const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

//!Loop over the people array with a for loop, printing out each name in uppercase letters.  Your result should look so!ething like:

//!SCOOBY
//!VELMA
//!DAPHNE
//!SHAGGY
//!FRED

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
