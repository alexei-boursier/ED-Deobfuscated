import * as L from "85117";
var E = require("81194")("splice");
var O = Math.max;
var x = Math.min;
i({
  target: "Array",
  proto: true,
  forced: !E
}, {
  splice: function (B, F) {
    var q;
    var j;
    var G;
    var se;
    var W;
    var Pe;
    var Z = t(this);
    var X = M(Z);
    var le = b(B, X);
    var fe = arguments.length;
    if (fe === 0) {
      q = j = 0;
    } else if (fe === 1) {
      q = 0;
      j = X - le;
    } else {
      q = fe - 2;
      j = x(O(k(F), 0), X - le);
    }
    C(X + q - j);
    G = w(Z, j);
    se = 0;
    for (; se < j; se++) {
      if ((W = le + se) in Z) {
        S(G, se, Z[W]);
      }
    }
    G.length = j;
    if (q < j) {
      for (se = le; se < X - j; se++) {
        Pe = se + q;
        if ((W = se + j) in Z) {
          Z[Pe] = Z[W];
        } else {
          L(Z, Pe);
        }
      }
      for (se = X; se > X - j + q; se--) {
        L(Z, se - 1);
      }
    } else if (q > j) {
      for (se = X - j; se > le; se--) {
        Pe = se + q - 1;
        if ((W = se + j - 1) in Z) {
          Z[Pe] = Z[W];
        } else {
          L(Z, Pe);
        }
      }
    }
    for (se = 0; se < q; se++) {
      Z[se + le] = arguments[se + 2];
    }
    v(Z, X - j + q);
    return G;
  }
});