import * as t from "31913";
import * as k from "17854";
import * as M from "40857";
import * as v from "1702";
import * as w from "92597";
import * as E from "57593";
var x = require("8006").f;
var U = require("31236").f;
var B = require("3070").f;
var Z = require("53111").trim;
var X = "Number";
var le = k[X];
var fe = M[X];
var q = le.prototype;
var j = k.TypeError;
var G = v("".slice);
var se = v("".charCodeAt);
function W(Re) {
  var Ge = E(Re, "number");
  if (typeof Ge == "bigint") {
    return Ge;
  } else {
    return Pe(Ge);
  }
}
function Pe(Re) {
  var Ue;
  var ot;
  var st;
  var rt;
  var Oe;
  var Ee;
  var ke;
  var Be;
  var Ge = E(Re, "number");
  if (I(Ge)) {
    throw j("Cannot convert a Symbol value to a number");
  }
  if (typeof Ge == "string" && Ge.length > 2) {
    Ge = Z(Ge);
    if ((Ue = se(Ge, 0)) === 43 || Ue === 45) {
      if ((ot = se(Ge, 2)) === 88 || ot === 120) {
        return NaN;
      }
    } else if (Ue === 48) {
      switch (se(Ge, 1)) {
        case 66:
        case 98:
          st = 2;
          rt = 49;
          break;
        case 79:
        case 111:
          st = 8;
          rt = 55;
          break;
        default:
          return +Ge;
      }
      Ee = (Oe = G(Ge, 2)).length;
      ke = 0;
      for (; ke < Ee; ke++) {
        if ((Be = se(Oe, ke)) < 48 || Be > rt) {
          return NaN;
        }
      }
      return parseInt(Oe, st);
    }
  }
  return +Ge;
}
var Le = C(X, !le(" 0o1") || !le("0b1") || le("+0x1"));
function he(Re) {
  return L(q, Re) && O(function () {
    F(Re);
  });
}
function pe(Ge) {
  var Ue = arguments.length < 1 ? 0 : le(W(Ge));
  if (he(this)) {
    return S(Object(Ue), this, pe);
  } else {
    return Ue;
  }
}
pe.prototype = q;
if (Le && !t) {
  q.constructor = pe;
}
i({
  global: true,
  constructor: true,
  wrap: true,
  forced: Le
}, {
  Number: pe
});
function re(Re, Ge) {
  for (var st, Ue = b ? x(Ge) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), ot = 0; Ue.length > ot; ot++) {
    if (w(Ge, st = Ue[ot]) && !w(Re, st)) {
      B(Re, st, U(Ge, st));
    }
  }
}
if (t && fe) {
  re(M[X], fe);
}
if (Le || t) {
  re(M[X], le);
}