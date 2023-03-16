const removeSpecialChars = (str = "") => {
  return str.replace(/[^\w\s]/gi, "");
};

module.exports = {
  removeSpecialChars,
};
