"use strict";

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
