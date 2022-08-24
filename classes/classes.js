class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");

mary.getsMarried("Thompson");

console.log(mary);

console.log(Person.addNumbers(1, 2));

// * CLASSES AND SUBCLASSES

// Task 1: Code a Person class

class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class

class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  sleep() {
    super.sleep();
  }
  doSomethingFun() {
    super.doSomethingFun();
  }
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  var intern = new Worker(0, 10, "Bob", 21, 110);
  console.log("Internee Data ", intern);
  intern.goToWork();
  console.log("Internee Data After goToWork", intern);
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker(100, 30, "Alice", 30, 120);
  console.log("Manger data", manager);
  manager.doSomethingFun();
  console.log("Manger Data after doSomeThingFun", manager);
  return manager;
}

intern();
console.log("--------------");
manager();
