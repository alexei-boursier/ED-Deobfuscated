import * as i from "1702";
import * as b from "41340";
var v = i(k);
var C = i("".slice);
var w = Math.ceil;
function S(L) {
  return function (I, E, O) {
    var Z;
    var X;
    var x = b(M(I));
    var U = t(E);
    var B = x.length;
    var F = O === undefined ? " " : b(O);
    if (U <= B || F == "") {
      return x;
    } else {
      if ((X = v(F, w((Z = U - B) / F.length))).length > Z) {
        X = C(X, 0, Z);
      }
      if (L) {
        return x + X;
      } else {
        return X + x;
      }
    }
  };
}
__webpack_module__.exports = {
  start: S(false),
  end: S(true)
};