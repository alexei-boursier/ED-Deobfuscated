import * as i from "17854";
var t = require("31236").f;
__webpack_module__.exports = function (w, S) {
  var x;
  var U;
  var B;
  var F;
  var Z;
  var L = w.target;
  var I = w.global;
  var E = w.stat;
  if (x = I ? i : E ? i[L] || M(L, {}) : (i[L] || {}).prototype) {
    for (U in S) {
      F = S[U];
      B = w.dontCallGetSet ? (Z = t(x, U)) && Z.value : x[U];
      if (!C(I ? U : L + (E ? "." : "#") + U, w.forced) && B !== undefined) {
        if (typeof F == typeof B) {
          continue;
        }
        v(F, B);
      }
      if (w.sham || B && B.sham) {
        b(F, "sham", true);
      }
      k(x, U, F, w);
    }
  }
};