import * as w from "86135";
var I = Array;
__webpack_module__.exports = function (O) {
  var x = b(O);
  var U = v(this);
  var B = arguments.length;
  var F = B > 1 ? arguments[1] : undefined;
  var Z = F !== undefined;
  if (Z) {
    F = i(F, B > 2 ? arguments[2] : undefined);
  }
  var fe;
  var q;
  var j;
  var G;
  var se;
  var W;
  var X = L(x);
  var le = 0;
  if (!X || this === I && M(X)) {
    fe = C(x);
    q = U ? new this(fe) : I(fe);
    fe = C(x);
    q = U ? new this(fe) : I(fe);
    for (; fe > le; le++) {
      W = Z ? F(x[le], le) : x[le];
      w(q, le, W);
    }
  } else {
    se = (G = S(x, X)).next;
    q = U ? new this() : [];
    se = (G = S(x, X)).next;
    q = U ? new this() : [];
    for (; !(j = t(se, G)).done; le++) {
      W = Z ? k(G, F, [j.value, le], true) : j.value;
      w(q, le, W);
    }
  }
  q.length = le;
  return q;
};