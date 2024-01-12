__webpack_module__.exports = function () {
  var M = t("Symbol");
  var v = M && M.prototype;
  var C = v && v.valueOf;
  var w = b("toPrimitive");
  if (v && !v[w]) {
    k(v, w, function (S) {
      return i(C, this);
    }, {
      arity: 1
    });
  }
};