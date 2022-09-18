// testing with vitest

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

export function addFive(val) {
  return val + 5;
}
