import * as k from "54705";
import * as I from "70111";
import * as E from "47293";
__webpack_module__.exports = function (B, F, Z) {
  var X = B.indexOf("Map") !== -1;
  var le = B.indexOf("Weak") !== -1;
  var fe = X ? "set" : "add";
  var q = t[B];
  var j = q && q.prototype;
  var G = q;
  var se = {};
  function W(Ge) {
    var Ue = b(j[Ge]);
    M(j, Ge, Ge == "add" ? function (st) {
      Ue(this, st === 0 ? 0 : st);
      return this;
    } : Ge == "delete" ? function (ot) {
      return (!le || !!I(ot)) && Ue(this, ot === 0 ? 0 : ot);
    } : Ge == "get" ? function (st) {
      if (le && !I(st)) {
        return undefined;
      } else {
        return Ue(this, st === 0 ? 0 : st);
      }
    } : Ge == "has" ? function (st) {
      return (!le || !!I(st)) && Ue(this, st === 0 ? 0 : st);
    } : function (st, rt) {
      Ue(this, st === 0 ? 0 : st, rt);
      return this;
    });
  }
  if (k(B, !S(q) || !le && (!j.forEach || !!E(function () {
    new q().entries().next();
  })))) {
    G = Z.getConstructor(F, B, X, fe);
    v.enable();
  } else if (k(B, true)) {
    var Le = new G();
    var he = Le[fe](le ? {} : -0, 1) != Le;
    var pe = E(function () {
      Le.has(1);
    });
    var re = O(function (Ge) {
      new q(Ge);
    });
    var Re = !le && E(function () {
      for (var Ge = new q(), Ue = 5; Ue--;) {
        Ge[fe](Ue, Ue);
      }
      return !Ge.has(-0);
    });
    if (!re) {
      (G = F(function (Ge, Ue) {
        w(Ge, j);
        var ot = U(new q(), Ge, G);
        if (!L(Ue)) {
          C(Ue, ot[fe], {
            that: ot,
            AS_ENTRIES: X
          });
        }
        return ot;
      })).prototype = j;
      j.constructor = G;
    }
    if (pe || Re) {
      W("delete");
      W("has");
      if (X) {
        W("get");
      }
    }
    if (Re || he) {
      W(fe);
    }
    if (le && j.clear) {
      delete j.clear;
    }
  }
  se[B] = G;
  i({
    global: true,
    constructor: true,
    forced: G != q
  }, se);
  x(G, B);
  if (!le) {
    Z.setStrong(G, B, X);
  }
  return G;
};