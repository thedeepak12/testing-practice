import { reverseString } from "../src/reverseString";

test("reverses a normal string", () => {
  expect(reverseString("Emma")).toBe("ammE");
});

test("reverses a string with spaces", () => {
  expect(reverseString("Emma Watson")).toBe("nostaW ammE");
});

test("returns empty string when input is empty", () => {
  expect(reverseString("")).toBe("");
});

test("reverses a single character", () => {
  expect(reverseString("e")).toBe("e");
});

test("reverses a string with punctuation", () => {
  expect(reverseString("Em!")).toBe("!mE");
});
