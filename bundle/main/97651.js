import * as i from "46916";
var v = TypeError;
__webpack_module__.exports = function (C, w) {
  var S = C.exec;
  if (b(S)) {
    var L = i(S, C, w);
    if (L !== null) {
      t(L);
    }
    return L;
  }
  if (k(C) === "RegExp") {
    return i(M, C, w);
  }
  throw v("RegExp#exec called on incompatible receiver");
};