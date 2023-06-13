import array from "../../src/utils/array";

describe("isValid", () => {
  test("should return true for a non-empty array", () => {
    const list = [1, 2, 3];

    const result = array.isValid(list);

    expect(result).toBe(true);
  });

  test("should return false for an empty array", () => {
    const list = [];

    const result = array.isValid(list);

    expect(result).toBe(false);
  });

  test("should return false for a non-array value", () => {
    const list = "not an array";

    const result = array.isValid(list as any);

    expect(result).toBe(false);
  });

  test("should return false for null or undefined", () => {
    const list1 = null;
    const list2 = undefined;

    const result1 = array.isValid(list1 as any);
    const result2 = array.isValid(list2 as any);

    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });
});
