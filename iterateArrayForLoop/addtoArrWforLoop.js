// *Declare variable total = 0 to add the value of each element of the array to the total

const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total); // is equal to 20

//  !WHY?
// !When it iterates through the array it will start
// !in 0 like this :

// *0 , 2
// *2, 3  = 5
// *5 , 4 = 9
// *9 , 5 = 14
// *14 , 6 = 20 is the total
