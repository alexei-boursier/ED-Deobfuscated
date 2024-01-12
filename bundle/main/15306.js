import * as t from "46916";
import * as b from "1702";
import * as I from "41340";
var Z = require("5112")("replace");
var X = Math.max;
var le = Math.min;
var fe = b([].concat);
var q = b([].push);
var j = b("".indexOf);
var G = b("".slice);
function se(he) {
  if (he === undefined) {
    return he;
  } else {
    return String(he);
  }
}
var W = "a".replace(/./, "$0") === "$0";
var Pe = !!/./[Z] && /./[Z]("a", "$0") === "";
k("replace", function (he, pe, re) {
  var Re = Pe ? "$" : "$0";
  return [function (Ue, ot) {
    var st = E(this);
    var rt = w(Ue) ? undefined : x(Ue, Z);
    if (rt) {
      return t(rt, Ue, st, ot);
    } else {
      return t(pe, I(st), Ue, ot);
    }
  }, function (Ge, Ue) {
    var ot = v(this);
    var st = I(Ge);
    if (typeof Ue == "string" && j(Ue, Re) === -1 && j(Ue, "$<") === -1) {
      var rt = re(pe, ot, st, Ue);
      if (rt.done) {
        return rt.value;
      }
    }
    var Oe = C(Ue);
    if (!Oe) {
      Ue = I(Ue);
    }
    var Ee = ot.global;
    if (Ee) {
      var ke = ot.unicode;
      ot.lastIndex = 0;
    }
    for (var Be = [];;) {
      var De = B(ot, st);
      if (De === null || (q(Be, De), !Ee)) {
        break;
      }
      if (I(De[0]) === "") {
        ot.lastIndex = O(st, L(ot.lastIndex), ke);
      }
    }
    for (var It = "", Yt = 0, Dn = 0; Dn < Be.length; Dn++) {
      for (var Et = I((De = Be[Dn])[0]), lt = X(le(S(De.index), st.length), 0), et = [], St = 1; St < De.length; St++) {
        q(et, se(De[St]));
      }
      var ve = De.groups;
      if (Oe) {
        var Lt = fe([Et], et, lt, st);
        if (ve !== undefined) {
          q(Lt, ve);
        }
        var ft = I(i(Ue, undefined, Lt));
      } else {
        ft = U(Et, st, lt, et, ve, Ue);
      }
      if (lt >= Yt) {
        It += G(st, Yt, lt) + ft;
        Yt = lt + Et.length;
      }
    }
    return It + G(st, Yt);
  }];
}, !!M(function () {
  var he = /./;
  he.exec = function () {
    var pe = [];
    pe.groups = {
      a: "7"
    };
    return pe;
  };
  return "".replace(he, "$<a>") !== "7";
}) || !W || Pe);