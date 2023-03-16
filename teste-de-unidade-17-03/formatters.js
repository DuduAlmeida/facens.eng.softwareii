const toCpf = (value) =>
  value?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") ||
  "000.000.000-00";

const toCnpj = (value) =>
  value?.replace(
    /^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/,
    "$1.$2.$3/$4-$5"
  ) || "00.000.000/0000-00";

module.exports = { toCpf, toCnpj };
