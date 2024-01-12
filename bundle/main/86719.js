require("92222");
require("82526");
require("41817");
require("41539");
require("32165");
require("66992");
require("78783");
require("33948");
require("91038");
require("47042");
require("68309");
require("74916");
import * as O from "36701";
require("51532");
require("21249");
require("2707");
import * as Z from "75588";
function X(on) {
  return function q(on) {
    if (Array.isArray(on)) {
      return W(on);
    }
  }(on) || function fe(on) {
    if (typeof Symbol !== "undefined" && on[Symbol.iterator] != null || on["@@iterator"] != null) {
      return Array.from(on);
    }
  }(on) || se(on) || function le() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function j(on, Rn) {
  return function Le(on) {
    if (Array.isArray(on)) {
      return on;
    }
  }(on) || function Pe(on, Rn) {
    var In = on == null ? null : typeof Symbol !== "undefined" && on[Symbol.iterator] || on["@@iterator"];
    if (In != null) {
      var $i;
      var Qi;
      var di = [];
      var Si = true;
      var Zi = false;
      try {
        for (In = In.call(on); !(Si = ($i = In.next()).done) && (di.push($i.value), !Rn || di.length !== Rn); Si = true);
      } catch (br) {
        Zi = true;
        Qi = br;
      } finally {
        try {
          if (!Si && In.return != null) {
            In.return();
          }
        } finally {
          if (Zi) {
            throw Qi;
          }
        }
      }
      return di;
    }
  }(on, Rn) || se(on, Rn) || function G() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function se(on, Rn) {
  if (on) {
    if (typeof on == "string") {
      return W(on, Rn);
    }
    var In = Object.prototype.toString.call(on).slice(8, -1);
    if (In === "Object" && on.constructor) {
      In = on.constructor.name;
    }
    if (In === "Map" || In === "Set") {
      return Array.from(on);
    }
    if (In === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(In)) {
      return W(on, Rn);
    }
  }
}
function W(on, Rn) {
  if (Rn == null || Rn > on.length) {
    Rn = on.length;
  }
  for (var In = 0, di = new Array(Rn); In < Rn; In++) {
    di[In] = on[In];
  }
  return di;
}
var he = "asc";
var re = new Map([[he, [-1, 1]], ["desc", [1, -1]]]);
function Re(Rn) {
  return `The priority '${Rn}' is already declared in a map.`;
}
function Ge(Rn) {
  return `The priority '${Rn}' is not a number.`;
}
function rt(on) {
  return function Be(on) {
    if (Array.isArray(on)) {
      return De(on);
    }
  }(on) || function ke(on) {
    if (typeof Symbol !== "undefined" && on[Symbol.iterator] != null || on["@@iterator"] != null) {
      return Array.from(on);
    }
  }(on) || function Ee(on, Rn) {
    if (on) {
      if (typeof on == "string") {
        return De(on, Rn);
      }
      var In = Object.prototype.toString.call(on).slice(8, -1);
      if (In === "Object" && on.constructor) {
        In = on.constructor.name;
      }
      if (In === "Map" || In === "Set") {
        return Array.from(on);
      }
      if (In === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(In)) {
        return De(on, Rn);
      }
    }
  }(on) || function Oe() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function De(on, Rn) {
  if (Rn == null || Rn > on.length) {
    Rn = on.length;
  }
  for (var In = 0, di = new Array(Rn); In < Rn; In++) {
    di[In] = on[In];
  }
  return di;
}
require("70189");
function Qe(Rn) {
  return `'${Rn}' value is already declared in a unique set.`;
}
function et(on) {
  return function ft(on) {
    if (Array.isArray(on)) {
      return qe(on);
    }
  }(on) || function Lt(on) {
    if (typeof Symbol !== "undefined" && on[Symbol.iterator] != null || on["@@iterator"] != null) {
      return Array.from(on);
    }
  }(on) || ve(on) || function St() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function ve(on, Rn) {
  if (on) {
    if (typeof on == "string") {
      return qe(on, Rn);
    }
    var In = Object.prototype.toString.call(on).slice(8, -1);
    if (In === "Object" && on.constructor) {
      In = on.constructor.name;
    }
    if (In === "Map" || In === "Set") {
      return Array.from(on);
    }
    if (In === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(In)) {
      return qe(on, Rn);
    }
  }
}
function qe(on, Rn) {
  if (Rn == null || Rn > on.length) {
    Rn = on.length;
  }
  for (var In = 0, di = new Array(Rn); In < Rn; In++) {
    di[In] = on[In];
  }
  return di;
}
function Me(Rn) {
  return `There is already registered "${Rn}" plugin.`;
}
var it = function Ue() {
  var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Rn = on.errorPriorityExists;
  var In = on.errorPriorityNaN;
  var di = new Map();
  function Si($i, Qi) {
    if (!(0, F.kE)($i)) {
      throw new Error(In($i));
    }
    if (di.has($i)) {
      throw new Error(Rn($i));
    }
    di.set($i, Qi);
  }
  function Zi() {
    var $i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : he;
    var Qi = re.get($i) || re.get(he);
    var br = j(Qi, 2);
    var Ar = br[0];
    var vr = br[1];
    return X(di).sort(function (Ur, Br) {
      if (Ur[0] < Br[0]) {
        return Ar;
      } else {
        return vr;
      }
    }).map(function (Ur) {
      return Ur[1];
    });
  }
  Rn = (0, Z.mf)(Rn) ? Rn : Re;
  In = (0, Z.mf)(In) ? In : Ge;
  return {
    addItem: Si,
    getItems: Zi
  };
}({
  errorPriorityExists: function (Rn) {
    return `There is already registered plugin on priority "${Rn}".`;
  },
  errorPriorityNaN: function (Rn) {
    return `The priority "${Rn}" is not a number.`;
  }
});
var bt = function It() {
  var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Rn = on.errorItemExists;
  var In = new Set();
  function di($i) {
    if (In.has($i)) {
      throw new Error(Rn($i));
    }
    In.add($i);
  }
  function Si() {
    return rt(In);
  }
  function Zi() {
    In.clear();
  }
  Rn = (0, Z.mf)(Rn) ? Rn : Qe;
  return {
    addItem: di,
    clear: Zi,
    getItems: Si
  };
}({
  errorItemExists: Me
});
var Ut = (0, ot.I)({
  errorIdExists: Me
});
export function a9() {
  return [].concat(et(it.getItems()), et(bt.getItems()));
}
export function s3(on) {
  var Rn = (0, O.ct)(on);
  return Ut.getItem(Rn);
}
export function _j(on) {
  return !!s3(on);
}
export function fo(on, Rn, In) {
  var di = function Kt(on, Rn, In) {
    if (typeof on == "function") {
      on = (Rn = on).PLUGIN_KEY;
      In = Rn.PLUGIN_PRIORITY;
    }
    return [on, Rn, In];
  }(on, Rn, In);
  var Si = function Yt(on, Rn) {
    return function lt(on) {
      if (Array.isArray(on)) {
        return on;
      }
    }(on) || function Et(on, Rn) {
      var In = on == null ? null : typeof Symbol !== "undefined" && on[Symbol.iterator] || on["@@iterator"];
      if (In != null) {
        var $i;
        var Qi;
        var di = [];
        var Si = true;
        var Zi = false;
        try {
          for (In = In.call(on); !(Si = ($i = In.next()).done) && (di.push($i.value), !Rn || di.length !== Rn); Si = true);
        } catch (br) {
          Zi = true;
          Qi = br;
        } finally {
          try {
            if (!Si && In.return != null) {
              In.return();
            }
          } finally {
            if (Zi) {
              throw Qi;
            }
          }
        }
        return di;
      }
    }(on, Rn) || ve(on, Rn) || function Dn() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }(di, 3);
  Rn = Si[1];
  In = Si[2];
  if (s3(on = Si[0]) === undefined) {
    (function hn(on, Rn, In) {
      var di = (0, O.ct)(on);
      if (Ut.hasItem(di)) {
        throw new Error(Me(di));
      }
      if (In === undefined) {
        bt.addItem(di);
      } else {
        it.addItem(In, di);
      }
      Ut.addItem(di, Rn);
    })(on, Rn, In);
  }
}