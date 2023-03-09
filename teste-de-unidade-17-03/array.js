const toArrayOfProperty = (array, property) =>
  array.map((element) => element[property]);

const toStringList = (array = []) => {
  return array.join(",");
};

module.exports = {
  toStringList,
  toArrayOfProperty,
};
