import * as t from "92597";
var k = require("41318").indexOf;
var v = i([].push);
__webpack_module__.exports = function (C, w) {
  var E;
  var S = b(C);
  var L = 0;
  var I = [];
  for (E in S) {
    if (!t(M, E) && t(S, E)) {
      v(I, E);
    }
  }
  for (; w.length > L;) {
    if (t(S, E = w[L++])) {
      if (!~k(I, E)) {
        v(I, E);
      }
    }
  }
  return I;
};