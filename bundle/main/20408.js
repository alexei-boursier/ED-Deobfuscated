import * as C from "47976";
import * as L from "99212";
var I = TypeError;
function E(x, U) {
  this.stopped = x;
  this.result = U;
}
var O = E.prototype;
__webpack_module__.exports = function (x, U, B) {
  var j;
  var G;
  var se;
  var W;
  var Pe;
  var Le;
  var he;
  var Z = !!B && !!B.AS_ENTRIES;
  var X = !!B && !!B.IS_RECORD;
  var le = !!B && !!B.IS_ITERATOR;
  var fe = !!B && !!B.INTERRUPTED;
  var q = i(U, B && B.that);
  function pe(Re) {
    if (j) {
      L(j, "normal", Re);
    }
    return new E(true, Re);
  }
  function re(Re) {
    if (Z) {
      b(Re);
      if (fe) {
        return q(Re[0], Re[1], pe);
      } else {
        return q(Re[0], Re[1]);
      }
    } else if (fe) {
      return q(Re, pe);
    } else {
      return q(Re);
    }
  }
  if (X) {
    j = x.iterator;
  } else if (le) {
    j = x;
  } else {
    if (!(G = S(x))) {
      throw I(k(x) + " is not iterable");
    }
    if (M(G)) {
      se = 0;
      W = v(x);
      for (; W > se; se++) {
        if ((Pe = re(x[se])) && C(O, Pe)) {
          return Pe;
        }
      }
      return new E(false);
    }
    j = w(x, G);
  }
  for (Le = X ? x.next : j.next; !(he = t(Le, j)).done;) {
    try {
      Pe = re(he.value);
    } catch (Re) {
      L(j, "throw", Re);
    }
    if (typeof Pe == "object" && Pe && C(O, Pe)) {
      return Pe;
    }
  }
  return new E(false);
};