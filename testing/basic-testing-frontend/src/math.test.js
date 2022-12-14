// testing with vitest

import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((pv, cv) => +pv + +cv, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least ne invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values i provided ", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce((pv, cv) => +pv + +cv, 0);
  expect(result).toBe(expectedResult);
});
