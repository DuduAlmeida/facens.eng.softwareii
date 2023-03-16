const string = require("./string");

//Feito por Daniel:
describe("functions String", () => {
  test("should get the first name", () => {
    const name = string.getFirstName("Daniel Ferreira");
    expect (name).toBe("Daniel");
  });

  test("Should return the entire word because don't have space", () => {
    const name = string.getFirstName("DanielFerreira");
    expect (name).toBe("DanielFerreira");
  });
});
