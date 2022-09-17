const guess = Math.floor(Math.random() * 100) + 1;

let number = Number(prompt("Enter a number"));

while (number != guess) {
  if (number < guess) {
    number = Number(prompt("muy pequeño"));
  }
  if (number > guess) {
    number = Number(prompt("Muy grande"));
  }
}

console.log("Muy bien !");
