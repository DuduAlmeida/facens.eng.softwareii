const formatters = require("./formatters");

//Feito por Enrico:
describe("functions formatters", () => {
  test("should transform into cnpj format", () => {
    const cnpj  = formatters.toCnpj("12345678901234")
    expect(cnpj).toBe("12.345.678/9012-34")
  });

  test("should transform into cpf format", () => {
    const cpf  = formatters.toCpf("69200094789")
    expect(cpf).toBe("692.000.947-89")

  });
});
