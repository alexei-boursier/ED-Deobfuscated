import * as t from "46916";
import * as b from "1702";
import * as w from "84488";
import * as E from "41340";
import * as x from "41589";
import * as U from "97651";
var X = F.UNSUPPORTED_Y;
var le = 4294967295;
var fe = Math.min;
var q = [].push;
var j = b(/./.exec);
var G = b(q);
var se = b("".slice);
k("split", function (Pe, Le, he) {
  var pe;
  pe = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (re, Re) {
    var Ge = E(w(this));
    var Ue = Re === undefined ? le : Re >>> 0;
    if (Ue === 0) {
      return [];
    }
    if (re === undefined) {
      return [Ge];
    }
    if (!C(re)) {
      return t(Le, Ge, re, Ue);
    }
    for (var Ee, ke, Be, ot = [], rt = 0, Oe = new RegExp(re.source, (re.ignoreCase ? "i" : "") + (re.multiline ? "m" : "") + (re.unicode ? "u" : "") + (re.sticky ? "y" : "") + "g"); (Ee = t(B, Oe, Ge)) && ((ke = Oe.lastIndex) <= rt || !(G(ot, se(Ge, rt, Ee.index)), Ee.length > 1 && Ee.index < Ge.length && i(q, ot, x(Ee, 1)), Be = Ee[0].length, rt = ke, ot.length >= Ue));) {
      if (Oe.lastIndex === Ee.index) {
        Oe.lastIndex++;
      }
    }
    if (rt === Ge.length) {
      if (Be || !j(Oe, "")) {
        G(ot, "");
      }
    } else {
      G(ot, se(Ge, rt));
    }
    if (ot.length > Ue) {
      return x(ot, 0, Ue);
    } else {
      return ot;
    }
  } : "0".split(undefined, 0).length ? function (re, Re) {
    if (re === undefined && Re === 0) {
      return [];
    } else {
      return t(Le, this, re, Re);
    }
  } : Le;
  return [function (Re, Ge) {
    var Ue = w(this);
    var ot = v(Re) ? undefined : O(Re, Pe);
    if (ot) {
      return t(ot, Re, Ue, Ge);
    } else {
      return t(pe, E(Ue), Re, Ge);
    }
  }, function (re, Re) {
    var Ge = M(this);
    var Ue = E(re);
    var ot = he(pe, Ge, Ue, Re, pe !== Le);
    if (ot.done) {
      return ot.value;
    }
    var st = S(Ge, RegExp);
    var rt = Ge.unicode;
    var Ee = new st(X ? "^(?:" + Ge.source + ")" : Ge, (Ge.ignoreCase ? "i" : "") + (Ge.multiline ? "m" : "") + (Ge.unicode ? "u" : "") + (X ? "g" : "y"));
    var ke = Re === undefined ? le : Re >>> 0;
    if (ke === 0) {
      return [];
    }
    if (Ue.length === 0) {
      if (U(Ee, Ue) === null) {
        return [Ue];
      } else {
        return [];
      }
    }
    for (var Be = 0, De = 0, Qe = []; De < Ue.length;) {
      Ee.lastIndex = X ? 0 : De;
      var Yt;
      var It = U(Ee, X ? se(Ue, De) : Ue);
      if (It === null || (Yt = fe(I(Ee.lastIndex + (X ? De : 0)), Ue.length)) === Be) {
        De = L(Ue, De, rt);
      } else {
        G(Qe, se(Ue, Be, De));
        if (Qe.length === ke) {
          return Qe;
        }
        for (var Dn = 1; Dn <= It.length - 1; Dn++) {
          G(Qe, It[Dn]);
          if (Qe.length === ke) {
            return Qe;
          }
        }
        De = Be = Yt;
      }
    }
    G(Qe, se(Ue, Be));
    return Qe;
  }];
}, !!Z(function () {
  var Pe = /(?:)/;
  var Le = Pe.exec;
  Pe.exec = function () {
    return Le.apply(this, arguments);
  };
  var he = "ab".split(Pe);
  return he.length !== 2 || he[0] !== "a" || he[1] !== "b";
}), X);