import * as t from "43157";
import * as M from "51400";
var E = L("slice");
var O = S("species");
var x = Array;
var U = Math.max;
i({
  target: "Array",
  proto: true,
  forced: !E
}, {
  slice: function (F, Z) {
    var j;
    var G;
    var se;
    var X = C(this);
    var le = v(X);
    var fe = M(F, le);
    var q = M(Z === undefined ? le : Z, le);
    if (t(X) && ((b(j = X.constructor) && (j === x || t(j.prototype)) || k(j) && (j = j[O]) === null) && (j = undefined), j === x || j === undefined)) {
      return I(X, fe, q);
    }
    G = new (j === undefined ? x : j)(U(q - fe, 0));
    se = 0;
    for (; fe < q; fe++, se++) {
      if (fe in X) {
        w(G, se, X[fe]);
      }
    }
    G.length = se;
    return G;
  }
});