var t = String;
__webpack_module__.exports = function (b) {
  if (i(b) === "Symbol") {
    throw TypeError("Cannot convert a Symbol value to a string");
  }
  return t(b);
};