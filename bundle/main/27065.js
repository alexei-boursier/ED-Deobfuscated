import * as i from "1702";
import * as M from "50206";
var C = Function;
var w = i([].concat);
var S = i([].join);
var L = {};
function I(E, O, x) {
  if (!k(L, O)) {
    for (var U = [], B = 0; B < O; B++) {
      U[B] = "a[" + B + "]";
    }
    L[O] = C("C,a", "return new C(" + S(U, ",") + ")");
  }
  return L[O](E, x);
}
__webpack_module__.exports = v ? C.bind : function (O) {
  var x = t(this);
  var U = x.prototype;
  var B = M(arguments, 1);
  function F() {
    var X = w(B, M(arguments));
    if (this instanceof F) {
      return I(x, X.length, X);
    } else {
      return x.apply(O, X);
    }
  }
  if (b(U)) {
    F.prototype = U;
  }
  return F;
};