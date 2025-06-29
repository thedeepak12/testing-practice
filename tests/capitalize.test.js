import { capitalize } from "../src/capitalize";

test("capitalizes the first character of the string", () => {
  expect(capitalize("emma")).toBe("Emma");
});

test("returns already capitalized word unchanged", () => {
  expect(capitalize("Emma")).toBe("Emma");
});

test("works with a single character", () => {
  expect(capitalize("e")).toBe("E");
});

test("returns empty string if input is empty", () => {
  expect(capitalize("")).toBe("");
});

test("does not change the rest of the string", () => {
  expect(capitalize("emma Watson")).toBe("Emma Watson");
});

test("handles non-letter first character", () => {
  expect(capitalize("15emma")).toBe("15emma");
});
