import * as b from "22104";
import * as M from "39483";
import * as C from "70111";
import * as S from "47293";
var L = t("Reflect", "construct");
var I = Object.prototype;
var E = [].push;
var O = S(function () {
  function B() {}
  return !(L(function () {}, [], B) instanceof B);
});
var x = !S(function () {
  L(function () {});
});
var U = O || x;
i({
  target: "Reflect",
  stat: true,
  forced: U,
  sham: U
}, {
  construct: function (F, Z) {
    M(F);
    v(Z);
    var X = arguments.length < 3 ? F : M(arguments[2]);
    if (x && !O) {
      return L(F, Z, X);
    }
    if (F == X) {
      switch (Z.length) {
        case 0:
          return new F();
        case 1:
          return new F(Z[0]);
        case 2:
          return new F(Z[0], Z[1]);
        case 3:
          return new F(Z[0], Z[1], Z[2]);
        case 4:
          return new F(Z[0], Z[1], Z[2], Z[3]);
      }
      var le = [null];
      b(E, le, Z);
      return new (b(k, F, le))();
    }
    var fe = X.prototype;
    var q = w(C(fe) ? fe : I);
    var j = b(F, q, Z);
    if (C(j)) {
      return j;
    } else {
      return q;
    }
  }
});