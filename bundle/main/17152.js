var L;
import * as i from "17854";
var w = i.Function;
var S = /MSIE .\./.test(M) || k && ((L = i.Bun.version.split(".")).length < 3 || L[0] == 0 && (L[1] < 3 || L[1] == 3 && L[2] == 0));
__webpack_module__.exports = function (L, I) {
  var E = I ? 2 : 1;
  if (S) {
    return function (O, x) {
      var U = C(arguments.length, 1) > E;
      var B = b(O) ? O : w(O);
      var F = U ? v(arguments, E) : [];
      var Z = U ? function () {
        t(B, this, F);
      } : B;
      if (I) {
        return L(Z, x);
      } else {
        return L(Z);
      }
    };
  } else {
    return L;
  }
};