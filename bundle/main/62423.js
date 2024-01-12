import * as M from "92597";
var v = require("3070").f;
import * as C from "8006";
import * as S from "52050";
var E = false;
var O = L("meta");
var x = 0;
function U(fe) {
  v(fe, O, {
    value: {
      objectID: "O" + x++,
      weakData: {}
    }
  });
}
var le = __webpack_module__.exports = {
  enable: function () {
    le.enable = function () {};
    E = true;
    var fe = C.f;
    var q = t([].splice);
    var j = {
      [O]: 1
    };
    if (fe(j).length) {
      C.f = function (G) {
        for (var se = fe(G), W = 0, Pe = se.length; W < Pe; W++) {
          if (se[W] === O) {
            q(se, W, 1);
            break;
          }
        }
        return se;
      };
      i({
        target: "Object",
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: w.f
      });
    }
  },
  fastKey: function (fe, q) {
    if (!k(fe)) {
      if (typeof fe == "symbol") {
        return fe;
      } else {
        return (typeof fe == "string" ? "S" : "P") + fe;
      }
    }
    if (!M(fe, O)) {
      if (!S(fe)) {
        return "F";
      }
      if (!q) {
        return "E";
      }
      U(fe);
    }
    return fe[O].objectID;
  },
  getWeakData: function (fe, q) {
    if (!M(fe, O)) {
      if (!S(fe)) {
        return true;
      }
      if (!q) {
        return false;
      }
      U(fe);
    }
    return fe[O].weakData;
  },
  onFreeze: function (fe) {
    if (I && E && S(fe) && !M(fe, O)) {
      U(fe);
    }
    return fe;
  }
};
b[O] = true;