var b = require("3070").f;
var k = i("unscopables");
var M = Array.prototype;
if (M[k] == null) {
  b(M, k, {
    configurable: true,
    value: t(null)
  });
}
__webpack_module__.exports = function (v) {
  M[k][v] = true;
};