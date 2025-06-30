import { caesarCipher } from "../src/caesarCipher.js";

test("shifts lowercase letters", () => {
  expect(caesarCipher("bjjx txqplk", 3)).toBe("emma watson");
});

test("wraps from z to a", () => {
  expect(caesarCipher("zhhv rvonji", 5)).toBe("emma watson");
});

test("preserves uppercase letters", () => {
  expect(caesarCipher("Xfft Ptmlhg", 7)).toBe("Emma Watson");
});

test("preserves punctuation", () => {
  expect(caesarCipher("Uccq Mqjied!", 10)).toBe("Emma Watson!");
});

test("handles negative shifts", () => {
  expect(caesarCipher("Hppd Zdwvrq", -3)).toBe("Emma Watson");
});

test("preserves mixed content", () => {
  expect(caesarCipher("Aiiw Swpokj 15!", 4)).toBe("Emma Watson 15!");
});
