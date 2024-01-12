import * as C from "7207";
import * as w from "86135";
var O = I("isConcatSpreadable");
var x = E >= 51 || !t(function () {
  var F = [];
  F[O] = false;
  return F.concat()[0] !== F;
});
function U(F) {
  if (!k(F)) {
    return false;
  }
  var Z = F[O];
  if (Z !== undefined) {
    return !!Z;
  } else {
    return b(F);
  }
}
i({
  target: "Array",
  proto: true,
  arity: 1,
  forced: !x || !L("concat")
}, {
  concat: function (Z) {
    var q;
    var j;
    var G;
    var se;
    var W;
    var X = M(this);
    var le = S(X, 0);
    var fe = 0;
    q = -1;
    G = arguments.length;
    for (; q < G; q++) {
      if (U(W = q === -1 ? X : arguments[q])) {
        se = v(W);
        C(fe + se);
        j = 0;
        se = v(W);
        C(fe + se);
        j = 0;
        for (; j < se; j++, fe++) {
          if (j in W) {
            w(le, fe, W[j]);
          }
        }
      } else {
        C(fe + 1);
        w(le, fe++, W);
      }
    }
    le.length = fe;
    return le;
  }
});