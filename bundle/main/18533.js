var i = require("42092").forEach;
var b = require("9341")("forEach");
__webpack_module__.exports = b ? [].forEach : function (M) {
  return i(this, M, arguments.length > 1 ? arguments[1] : undefined);
};