import { addition } from "./addition";

it("adds two numbers together", () => {
  const result = addition(5, 3);

  expect(result).toBe(8);
});
