const object = require("./object");

describe("functions object", () => {
  //Feito por Jhonatan:
  test("should have an empty object", () => {
    expect(object.isEmpty({})).toBeTruthy();
    expect(object.isEmpty({ key: "value" })).toBeFalsy();
  });

  //Feito por Eduardo:
  test("should return key when find by value", () => {
    expect(
      object.getKeyByValue(
        {
          king: "julian",
          queen: "gambit",
        },
        "julian"
      )
    ).toBe("king");
    expect(
      object.getKeyByValue(
        {
          king: "julian",
          queen: "gambit",
        },
        "not a valid value"
      )
    ).toBe(undefined);
  });
});
