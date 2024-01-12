import * as b from "31913";
import * as k from "76530";
import * as C from "79518";
import * as w from "27674";
import * as I from "98052";
import * as O from "97497";
import * as x from "13383";
var U = k.PROPER;
var B = k.CONFIGURABLE;
var F = x.IteratorPrototype;
var Z = x.BUGGY_SAFARI_ITERATORS;
var X = E("iterator");
var fe = "values";
var q = "entries";
function j() {
  return this;
}
__webpack_module__.exports = function (G, se, W, Pe, Le, he, pe) {
  v(W, se, Pe);
  var Oe;
  var Ee;
  var ke;
  function re(Be) {
    if (Be === Le && st) {
      return st;
    }
    if (!Z && Be in Ue) {
      return Ue[Be];
    }
    switch (Be) {
      case "keys":
      case fe:
      case q:
        return function () {
          return new W(this, Be);
        };
    }
    return function () {
      return new W(this);
    };
  }
  var Re = se + " Iterator";
  var Ge = false;
  var Ue = G.prototype;
  var ot = Ue[X] || Ue["@@iterator"] || Le && Ue[Le];
  var st = !Z && ot || re(Le);
  var rt = se == "Array" && Ue.entries || ot;
  if (rt && (Oe = C(rt.call(new G()))) !== Object.prototype && Oe.next) {
    if (!b && C(Oe) !== F) {
      if (w) {
        w(Oe, F);
      } else if (!M(Oe[X])) {
        I(Oe, X, j);
      }
    }
    S(Oe, Re, true, true);
    if (b) {
      O[Re] = j;
    }
  }
  if (U && Le == fe && ot && ot.name !== fe) {
    if (!b && B) {
      L(Ue, "name", fe);
    } else {
      Ge = true;
      st = function () {
        return t(ot, this);
      };
    }
  }
  if (Le) {
    Ee = {
      values: re(fe),
      keys: he ? st : re("keys"),
      entries: re(q)
    };
    if (pe) {
      for (ke in Ee) {
        if (Z || Ge || !(ke in Ue)) {
          I(Ue, ke, Ee[ke]);
        }
      }
    } else {
      i({
        target: se,
        proto: true,
        forced: Z || Ge
      }, Ee);
    }
  }
  if ((!b || pe) && Ue[X] !== st) {
    I(Ue, X, st, {
      name: Le
    });
  }
  O[se] = st;
  return Ee;
};