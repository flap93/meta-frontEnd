function addTwoNumbers(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument its not an argument");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}

addTwoNumbers(5, "5");
console.log("It still works");
