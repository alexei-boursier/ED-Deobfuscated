import * as k from "81361";
var M = i("".replace);
var v = RegExp("^[" + k + "]+");
var C = RegExp("(^|[^" + k + "])[" + k + "]+$");
function w(S) {
  return function (L) {
    var I = b(t(L));
    if (S & 1) {
      I = M(I, v, "");
    }
    if (S & 2) {
      I = M(I, C, "$1");
    }
    return I;
  };
}
__webpack_module__.exports = {
  start: w(1),
  end: w(2),
  trim: w(3)
};