import * as b from "89190";
import * as S from "76178";
import * as I from "19781";
var E = require("62423").fastKey;
import * as O from "29909";
var x = O.set;
var U = O.getterFor;
__webpack_module__.exports = {
  getConstructor: function (B, F, Z, X) {
    var le = B(function (se, W) {
      M(se, fe);
      x(se, {
        type: F,
        index: i(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!I) {
        se.size = 0;
      }
      if (!v(W)) {
        C(W, se[X], {
          that: se,
          AS_ENTRIES: Z
        });
      }
    });
    var fe = le.prototype;
    var q = U(F);
    function j(se, W, Pe) {
      var pe;
      var re;
      var Le = q(se);
      var he = G(se, W);
      if (he) {
        he.value = Pe;
      } else {
        Le.last = he = {
          index: re = E(W, true),
          key: W,
          value: Pe,
          previous: pe = Le.last,
          next: undefined,
          removed: false
        };
        Le.first ||= he;
        if (pe) {
          pe.next = he;
        }
        if (I) {
          Le.size++;
        } else {
          se.size++;
        }
        if (re !== "F") {
          Le.index[re] = he;
        }
      }
      return se;
    }
    function G(se, W) {
      var he;
      var Pe = q(se);
      var Le = E(W);
      if (Le !== "F") {
        return Pe.index[Le];
      }
      for (he = Pe.first; he; he = he.next) {
        if (he.key == W) {
          return he;
        }
      }
    }
    b(fe, {
      clear: function () {
        for (var Pe = q(this), Le = Pe.index, he = Pe.first; he;) {
          he.removed = true;
          he.previous &&= he.previous.next = undefined;
          delete Le[he.index];
          he = he.next;
        }
        Pe.first = Pe.last = undefined;
        if (I) {
          Pe.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (se) {
        var W = this;
        var Pe = q(W);
        var Le = G(W, se);
        if (Le) {
          var he = Le.next;
          var pe = Le.previous;
          delete Pe.index[Le.index];
          Le.removed = true;
          if (pe) {
            pe.next = he;
          }
          if (he) {
            he.previous = pe;
          }
          if (Pe.first == Le) {
            Pe.first = he;
          }
          if (Pe.last == Le) {
            Pe.last = pe;
          }
          if (I) {
            Pe.size--;
          } else {
            W.size--;
          }
        }
        return !!Le;
      },
      forEach: function (W) {
        for (var he, Pe = q(this), Le = k(W, arguments.length > 1 ? arguments[1] : undefined); he = he ? he.next : Pe.first;) {
          for (Le(he.value, he.key, this); he && he.removed;) {
            he = he.previous;
          }
        }
      },
      has: function (W) {
        return !!G(this, W);
      }
    });
    b(fe, Z ? {
      get: function (W) {
        var Pe = G(this, W);
        return Pe && Pe.value;
      },
      set: function (W, Pe) {
        return j(this, W === 0 ? 0 : W, Pe);
      }
    } : {
      add: function (W) {
        return j(this, W = W === 0 ? 0 : W, W);
      }
    });
    if (I) {
      t(fe, "size", {
        configurable: true,
        get: function () {
          return q(this).size;
        }
      });
    }
    return le;
  },
  setStrong: function (B, F, Z) {
    var X = F + " Iterator";
    var le = U(F);
    var fe = U(X);
    w(B, F, function (q, j) {
      x(this, {
        type: X,
        target: q,
        state: le(q),
        kind: j,
        last: undefined
      });
    }, function () {
      for (var q = fe(this), j = q.kind, G = q.last; G && G.removed;) {
        G = G.previous;
      }
      if (q.target && (q.last = G = G ? G.next : q.state.first)) {
        return S(j == "keys" ? G.key : j == "values" ? G.value : [G.key, G.value], false);
      } else {
        q.target = undefined;
        return S(undefined, true);
      }
    }, Z ? "entries" : "values", !Z, true);
    L(F);
  }
};