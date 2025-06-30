import { calculator } from "../src/calculator.js";

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(69, 420)).toBe(489);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(420, 351)).toBe(69);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(69, 6.086956521739131)).toBe(420);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(9, 11)).toBe(0.8181818181818182);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(69, 0)).toThrow("Cannot divide by zero");
  });
});
