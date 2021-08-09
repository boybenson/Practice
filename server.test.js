const { sumNumbers } = require("./server");

test("should sum of numbers", () => {
  let actual = sumNumbers(3, 5);
  let expected = 8;
  expect(actual).toBe(expected);
});
