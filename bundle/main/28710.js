import * as i from "1702";
var M = i("".charAt);
var v = i("".charCodeAt);
var C = i("".slice);
function w(S) {
  return function (L, I) {
    var U;
    var B;
    var E = b(k(L));
    var O = t(I);
    var x = E.length;
    if (O < 0 || O >= x) {
      if (S) {
        return "";
      } else {
        return undefined;
      }
    } else if ((U = v(E, O)) < 55296 || U > 56319 || O + 1 === x || (B = v(E, O + 1)) < 56320 || B > 57343) {
      if (S) {
        return M(E, O);
      } else {
        return U;
      }
    } else if (S) {
      return C(E, O, O + 2);
    } else {
      return B - 56320 + (U - 55296 << 10) + 65536;
    }
  };
}
__webpack_module__.exports = {
  codeAt: w(false),
  charAt: w(true)
};