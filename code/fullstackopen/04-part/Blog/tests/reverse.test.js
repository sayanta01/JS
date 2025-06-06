import { test, describe } from "node:test";
import assert from "node:assert";
import utils from "./utils/for_testing.js";
const { reverse, average } = utils;

// description
test("reverse of react", () => {
  // function that defines the functionality for the test case (input)
  const result = reverse("react");
  // verify the results using the assert library (expectation)
  assert.strictEqual(result, "tcaer");
});

test("reverse of saippuakauppias", () => {
  const result = reverse("saippuakauppias");
  assert.strictEqual(result, "saippuakauppias");
});

test("finds the average", () => {
  const result = average([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.strictEqual(result, 5);
});

// Test suite: grouping tests
describe("average", () => {
  test("of one value is the value itself", () => {
    assert.strictEqual(average([1]), 1);
  });

  test("of many is calculated right", () => {
    assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5);
  });

  test("of empty array is zero", () => {
    assert.strictEqual(average([]), 0);
  });
});
