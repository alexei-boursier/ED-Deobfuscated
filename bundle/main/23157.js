var U;
import * as t from "21470";
var b = require("31236").f;
import * as M from "41340";
var L = t("".startsWith);
var I = t("".slice);
var E = Math.min;
var O = w("startsWith");
i({
  target: "String",
  proto: true,
  forced: (!!S || !!O || !(U = b(String.prototype, "startsWith"), U && !U.writable)) && !O
}, {
  startsWith: function (B) {
    var F = M(C(this));
    v(B);
    var Z = k(E(arguments.length > 1 ? arguments[1] : undefined, F.length));
    var X = M(B);
    if (L) {
      return L(F, X, Z);
    } else {
      return I(F, Z, Z + X.length) === X;
    }
  }
});