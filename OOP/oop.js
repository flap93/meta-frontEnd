var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase2.shoes * purchase2.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase2.totalPrice(); // 60

// *CONSTRUCTOR METHODS ----------------------

// *Person constructor , always constructor the first letter has to be capital letter for the function

function Person(name, lastName, dob) {
  this.name = name;
  // this.age = age;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// const brad = new Person('Brad');
// const john = new Person('John', 30);

// console.log(john.age);

// * built in constructor----------------------------------

// new Function();
// new String();
// new Object();
// new Boolean();
// new Array();
// new RegExp();
// new Number();

// *Prototypes method -----------------------------
// *en este caso de Person constructor es claro que cada perosna debe tener su propio nombre , apellido y fecha de cumpleaños , pero Calculate age functions va a ser el mismo para todos por lo tanto no deberia ir dentro del object properties

// ?------por lo tanto lo declaramos  de la siguiente forma :

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const brad = new Person("Brad", "Palacios", "10-09-1981");
const john = new Person("John", "Doe", "08-12-90");
const mary = new Person("Mary", "Johnson", "03-20-1978");

console.log(mary);

console.log(john.calculateAge());

console.log(brad.calculateAge());

// !Prototypal inheritance -------

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.getName = function () {
  return `Hello ${this.name} you are a ${this.breed}`;
};

const theon = new Dog("theon", "belgian malinois");

console.log(theon.getName());

// !------------------------ Customer constructor --------------------------------

// *herencia de prototipo le paseremos el metodo call con el prototipo de Dog
// *lo llamaremos con el metodo this

function Customer(firstName, lastName, phone, membership) {
  Dog.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// *Inherit the Person prototype methods

Customer.prototype = Object.create(Dog.prototype);

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1);
console.log(customer1.getName());

// !OBJECT CREATE ------------------------------
// ! its an alternative way to create objects

const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 },
});

console.log(brad);

console.log(brad.greeting());
