var xe = TypeError;
__webpack_module__.exports = function (i) {
  if (i > 9007199254740991) {
    throw xe("Maximum allowed index exceeded");
  }
  return i;
};