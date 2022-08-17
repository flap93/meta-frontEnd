//*en los nested loop tenemos el :
//*outer loop
//*inner loop

// !display the summer months over 2 years

for (let year = 2023; year < 2025; year++) {
  console.log(year);
  for (let month = 6; month < 9; month++) {
    console.log("------", month);
  }
}

//  !Create  division tabl ,
for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}

//! output :
// 100 divided by 10 equals 10
// 100 divided by 5 equals 20
// 90 divided by 10 equals 9
// 90 divided by 5 equals 18
// 80 divided by 10 equals 8
// 80 divided by 5 equals 16
// 70 divided by 10 equals 7
// 70 divided by 5 equals 14
// 60 divided by 10 equals 6
// 60 divided by 5 equals 12
// 50 divided by 10 equals 5
// 50 divided by 5 equals 10
// 40 divided by 10 equals 4
// 40 divided by 5 equals 8
// 30 divided by 10 equals 3
// 30 divided by 5 equals 6
// 20 divided by 10 equals 2
// 20 divided by 5 equals 4

// -------------------------------

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);

// ------------------------------------

//!Imagine you’re a big-wig programmer for a social me!ia platform! You have been tasked with building a pr!totype for a mutual followers program. You’ll need tw! arrays of “friends” from two mock users so that yo! can extract the names of the followers who exist in!both lists. Make a variable called bobsFollowers an! set it equal to an array with four strings re!resenting the names of Bob’s friends.

//!Checkpoint 2 Passed
//!2.
//!Make a variable called tinasFollowers and set it eq!al to an array with three strings representing the na!es of Tina’s friends. Make exactly two of these the sa!e as two of the friends in the bobsFollowers array.

//!Checkpoint 3 Passed
//!3.
//!Create a third variable named mutualFollowers and se! it to an empty array.

//!Checkpoint 4 Passed
//!4.
//!Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);
