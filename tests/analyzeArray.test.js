import { analyzeArray } from "../src/analyzeArray.js";

test("returns correct average, min, max, and length", () => {
  const result = analyzeArray([69, 420, 666, 911, 8008]);
  expect(result).toEqual({
    average: 2014.8,
    min: 69,
    max: 8008,
    length: 5,
  });
});

test("works with negative numbers", () => {
  const result = analyzeArray([-69, -420, -911, -666]);
  expect(result).toEqual({
    average: -516.5,
    min: -911,
    max: -69,
    length: 4,
  });
});

test("works with a single number", () => {
  const result = analyzeArray([8008]);
  expect(result).toEqual({
    average: 8008,
    min: 8008,
    max: 8008,
    length: 1,
  });
});

test("throws on empty array", () => {
  expect(() => analyzeArray([])).toThrow("Input must be a non-empty array");
});