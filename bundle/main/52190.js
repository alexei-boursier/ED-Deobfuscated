var M = Object;
__webpack_module__.exports = k ? function (v) {
  return typeof v == "symbol";
} : function (v) {
  var C = i("Symbol");
  return t(C) && b(C.prototype, M(v));
};