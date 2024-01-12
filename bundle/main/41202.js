var q;
import * as t from "17854";
import * as b from "1702";
import * as k from "89190";
import * as C from "29320";
import * as w from "70111";
var S = require("29909").enforce;
var E = Object;
var O = Array.isArray;
var x = E.isExtensible;
var U = E.isFrozen;
var B = E.isSealed;
var F = E.freeze;
var Z = E.seal;
var X = {};
var le = {};
var fe = !t.ActiveXObject && "ActiveXObject" in t;
function j(re) {
  return function () {
    return re(this, arguments.length ? arguments[0] : undefined);
  };
}
var G = v("WeakMap", j, C);
var se = G.prototype;
var W = b(se.set);
if (I) {
  if (fe) {
    q = C.getConstructor(j, "WeakMap", true);
    M.enable();
    var Le = b(se.delete);
    var he = b(se.has);
    var pe = b(se.get);
    k(se, {
      delete: function (re) {
        if (w(re) && !x(re)) {
          var Re = S(this);
          Re.frozen ||= new q();
          return Le(this, re) || Re.frozen.delete(re);
        }
        return Le(this, re);
      },
      has: function (Re) {
        if (w(Re) && !x(Re)) {
          var Ge = S(this);
          Ge.frozen ||= new q();
          return he(this, Re) || Ge.frozen.has(Re);
        }
        return he(this, Re);
      },
      get: function (Re) {
        if (w(Re) && !x(Re)) {
          var Ge = S(this);
          Ge.frozen ||= new q();
          if (he(this, Re)) {
            return pe(this, Re);
          } else {
            return Ge.frozen.get(Re);
          }
        }
        return pe(this, Re);
      },
      set: function (Re, Ge) {
        if (w(Re) && !x(Re)) {
          var Ue = S(this);
          Ue.frozen ||= new q();
          if (he(this, Re)) {
            W(this, Re, Ge);
          } else {
            Ue.frozen.set(Re, Ge);
          }
        } else {
          W(this, Re, Ge);
        }
        return this;
      }
    });
  } else if (i && L(function () {
    var re = F([]);
    W(new G(), re, 1);
    return !U(re);
  })) {
    k(se, {
      set: function (Re, Ge) {
        var Ue;
        if (O(Re)) {
          if (U(Re)) {
            Ue = X;
          } else if (B(Re)) {
            Ue = le;
          }
        }
        W(this, Re, Ge);
        if (Ue == X) {
          F(Re);
        }
        if (Ue == le) {
          Z(Re);
        }
        return this;
      }
    });
  }
}