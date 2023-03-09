const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const isEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

const getNotNullData = (obj) => {
  let response = {};
  const keys = Object.keys(obj);

  Object.values(obj).forEach((value, index) => {
    if (value) response = { ...response, [keys[index]]: value };
  });

  return response;
};

const generateUuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

module.exports = {
  getNotNullData,
  getKeyByValue,
  generateUuid,
  isEmpty,
};
