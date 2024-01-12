import * as t from "89190";
var b = require("62423").getWeakData;
import * as C from "70111";
import * as S from "42092";
import * as L from "92597";
import * as I from "29909";
var E = I.set;
var O = I.getterFor;
var x = S.find;
var U = S.findIndex;
var B = i([].splice);
var F = 0;
function Z(fe) {
  return fe.frozen ||= new X();
}
function X() {
  this.entries = [];
}
function le(fe, q) {
  return x(fe.entries, function (j) {
    return j[0] === q;
  });
}
X.prototype = {
  get: function (fe) {
    var q = le(this, fe);
    if (q) {
      return q[1];
    }
  },
  has: function (fe) {
    return !!le(this, fe);
  },
  set: function (fe, q) {
    var j = le(this, fe);
    if (j) {
      j[1] = q;
    } else {
      this.entries.push([fe, q]);
    }
  },
  delete: function (fe) {
    var q = U(this.entries, function (j) {
      return j[0] === fe;
    });
    if (~q) {
      B(this.entries, q, 1);
    }
    return !!~q;
  }
};
__webpack_module__.exports = {
  getConstructor: function (fe, q, j, G) {
    var se = fe(function (he, pe) {
      k(he, W);
      E(he, {
        type: q,
        id: F++,
        frozen: undefined
      });
      if (!v(pe)) {
        w(pe, he[G], {
          that: he,
          AS_ENTRIES: j
        });
      }
    });
    var W = se.prototype;
    var Pe = O(q);
    function Le(he, pe, re) {
      var Re = Pe(he);
      var Ge = b(M(pe), true);
      if (Ge === true) {
        Z(Re).set(pe, re);
      } else {
        Ge[Re.id] = re;
      }
      return he;
    }
    t(W, {
      delete: function (he) {
        var pe = Pe(this);
        if (!C(he)) {
          return false;
        }
        var re = b(he);
        if (re === true) {
          return Z(pe).delete(he);
        } else {
          return re && L(re, pe.id) && delete re[pe.id];
        }
      },
      has: function (pe) {
        var re = Pe(this);
        if (!C(pe)) {
          return false;
        }
        var Re = b(pe);
        if (Re === true) {
          return Z(re).has(pe);
        } else {
          return Re && L(Re, re.id);
        }
      }
    });
    t(W, j ? {
      get: function (pe) {
        var re = Pe(this);
        if (C(pe)) {
          var Re = b(pe);
          if (Re === true) {
            return Z(re).get(pe);
          } else if (Re) {
            return Re[re.id];
          } else {
            return undefined;
          }
        }
      },
      set: function (pe, re) {
        return Le(this, pe, re);
      }
    } : {
      add: function (pe) {
        return Le(this, pe, true);
      }
    });
    return se;
  }
};