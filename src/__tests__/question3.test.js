import { getDiscountPercentage, formatDecimalSpaces, convertKrone, calculateTax } from "../question3/question3.js";

test("Calculate the discount from normal price", function () {
  expect(getDiscountPercentage(100, 75)).toBe(25);
});

test("Convert value to have 2 decimals", function () {
  expect(formatDecimalSpaces(15.5555555)).toBe(15.56);
});

test("converts a value to krone", function () {
  expect(convertKrone(10)).toBe(101.8);
});
test("converts a value from krone", function () {
  expect(convertKrone(10, false)).toBe(0.98);
});

test("Calculate tax for amount given", () => {
  expect(calculateTax(100)).toBe(125);
});
