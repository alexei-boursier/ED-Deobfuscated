import * as t from "43157";
import * as k from "84326";
var v = i([].push);
__webpack_module__.exports = function (C) {
  if (b(C)) {
    return C;
  }
  if (t(C)) {
    for (var w = C.length, S = [], L = 0; L < w; L++) {
      var I = C[L];
      if (typeof I == "string") {
        v(S, I);
      } else if (typeof I == "number" || k(I) == "Number" || k(I) == "String") {
        v(S, M(I));
      }
    }
    var E = S.length;
    var O = true;
    return function (x, U) {
      if (O) {
        O = false;
        return U;
      }
      if (t(this)) {
        return U;
      }
      for (var B = 0; B < E; B++) {
        if (S[B] === x) {
          return U;
        }
      }
    };
  }
};