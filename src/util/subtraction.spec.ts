import { subtraction } from "./subtraction";

it("should subtract the second number from the first", () => {
  const result = subtraction(8, 3);

  expect(result).toBe(5);
});
