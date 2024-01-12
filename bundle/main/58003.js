var i = require("3070").f;
var k = require("5112")("toStringTag");
__webpack_module__.exports = function (M, v, C) {
  if (M && !C) {
    M = M.prototype;
  }
  if (M && !t(M, k)) {
    i(M, k, {
      configurable: true,
      value: v
    });
  }
};