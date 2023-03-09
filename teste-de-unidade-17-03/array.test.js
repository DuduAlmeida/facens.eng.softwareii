const array = require("./array");

describe("functions array", () => {
  //Feito por Daniel:
  test("should get property by value", () => {
    expect(
      array.toArrayOfProperty(
        [{ name: "testemunhas de turing", semester: "9" }],
        "semester"
      )
    ).toStrictEqual(["9"]);
    expect(
      array.toArrayOfProperty([{ king: "julian" }], "not defined key")
    ).toEqual([undefined]);
  });

  //Feito por Enrico:
  test("should transform array in list of string", () => {
    expect(array.toStringList([1, 2, 3, 4, 5])).toBe("1,2,3,4,5");
  });
});
