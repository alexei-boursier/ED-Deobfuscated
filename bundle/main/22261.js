var q;
var j;
import * as i from "46916";
import * as t from "1702";
var w = require("29909").get;
var I = v("native-string-replace", String.prototype.replace);
var E = RegExp.prototype.exec;
var O = E;
var x = t("".charAt);
var U = t("".indexOf);
var B = t("".replace);
var F = t("".slice);
j = /b*/g;
i(E, q = /a/, "a");
i(E, j, "a");
var Z = q.lastIndex !== 0 || j.lastIndex !== 0;
var X = M.BROKEN_CARET;
var le = /()??/.exec("")[1] !== undefined;
if (Z || le || X || S || L) {
  O = function (j) {
    var Le;
    var he;
    var pe;
    var re;
    var Re;
    var Ge;
    var Ue;
    var G = this;
    var se = w(G);
    var W = b(j);
    var Pe = se.raw;
    if (Pe) {
      Pe.lastIndex = G.lastIndex;
      Le = i(O, Pe, W);
      G.lastIndex = Pe.lastIndex;
      return Le;
    }
    var ot = se.groups;
    var st = X && G.sticky;
    var rt = i(k, G);
    var Oe = G.source;
    var Ee = 0;
    var ke = W;
    if (st) {
      rt = B(rt, "y", "");
      if (U(rt, "g") === -1) {
        rt += "g";
      }
      ke = F(W, G.lastIndex);
      if (G.lastIndex > 0 && (!G.multiline || G.multiline && x(W, G.lastIndex - 1) !== "\n")) {
        Oe = "(?: " + Oe + ")";
        ke = " " + ke;
        Ee++;
      }
      he = new RegExp("^(?:" + Oe + ")", rt);
    }
    if (le) {
      he = new RegExp("^" + Oe + "$(?!\\s)", rt);
    }
    if (Z) {
      pe = G.lastIndex;
    }
    re = i(E, st ? he : G, ke);
    if (st) {
      if (re) {
        re.input = F(re.input, Ee);
        re[0] = F(re[0], Ee);
        re.index = G.lastIndex;
        G.lastIndex += re[0].length;
      } else {
        G.lastIndex = 0;
      }
    } else if (Z && re) {
      G.lastIndex = G.global ? re.index + re[0].length : pe;
    }
    if (le && re && re.length > 1) {
      i(I, re[0], he, function () {
        for (Re = 1; Re < arguments.length - 2; Re++) {
          if (arguments[Re] === undefined) {
            re[Re] = undefined;
          }
        }
      });
    }
    if (re && ot) {
      re.groups = Ge = C(null);
      Re = 0;
      re.groups = Ge = C(null);
      Re = 0;
      for (; Re < ot.length; Re++) {
        Ge[(Ue = ot[Re])[0]] = re[Ue[1]];
      }
    }
    return re;
  };
}
__webpack_module__.exports = O;