var t = Math.max;
var b = Math.min;
__webpack_module__.exports = function (k, M) {
  var v = i(k);
  if (v < 0) {
    return t(v + M, 0);
  } else {
    return b(v, M);
  }
};