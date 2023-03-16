const SpecialChars = require("./specialChars");

//Feito por Jhonatan:
describe("functions SpecialChars", () => {
  test("should remove special chars", () => {
    const name = SpecialChars.removeSpecialChars("Jh?natan 4m@ra1");
    expect (name).toBe("Jhnatan 4mra1");
  });

  test("Should return the same word because it does not have any special char", () => {
    const name = SpecialChars.removeSpecialChars("Jhonatan Amaral");
    expect (name).toBe("Jhonatan Amaral");
  });
});
