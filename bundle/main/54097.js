require("82526");
require("41817");
require("41539");
require("26699");
require("32023");
require("66992");
require("70189");
require("78783");
require("33948");
require("91038");
require("2707");
require("32165");
require("47042");
require("68309");
require("74916");
import * as F from "67219";
import * as Z from "6868";
function X(Ee, ke) {
  return function G(Ee) {
    if (Array.isArray(Ee)) {
      return Ee;
    }
  }(Ee) || function j(Ee, ke) {
    var Be = Ee == null ? null : typeof Symbol !== "undefined" && Ee[Symbol.iterator] || Ee["@@iterator"];
    if (Be != null) {
      var Yt;
      var Dn;
      var De = [];
      var Qe = true;
      var It = false;
      try {
        for (Be = Be.call(Ee); !(Qe = (Yt = Be.next()).done) && (De.push(Yt.value), !ke || De.length !== ke); Qe = true);
      } catch (Et) {
        It = true;
        Dn = Et;
      } finally {
        try {
          if (!Qe && Be.return != null) {
            Be.return();
          }
        } finally {
          if (It) {
            throw Dn;
          }
        }
      }
      return De;
    }
  }(Ee, ke) || function fe(Ee, ke) {
    if (Ee) {
      if (typeof Ee == "string") {
        return q(Ee, ke);
      }
      var Be = Object.prototype.toString.call(Ee).slice(8, -1);
      if (Be === "Object" && Ee.constructor) {
        Be = Ee.constructor.name;
      }
      if (Be === "Map" || Be === "Set") {
        return Array.from(Ee);
      }
      if (Be === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Be)) {
        return q(Ee, ke);
      }
    }
  }(Ee, ke) || function le() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function q(Ee, ke) {
  if (ke == null || ke > Ee.length) {
    ke = Ee.length;
  }
  for (var Be = 0, De = new Array(ke); Be < ke; Be++) {
    De[Be] = Ee[Be];
  }
  return De;
}
function se(Ee) {
  return (se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (ke) {
    return typeof ke;
  } : function (ke) {
    if (ke && typeof Symbol == "function" && ke.constructor === Symbol && ke !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof ke;
    }
  })(Ee);
}
export var Kk = 0;
export var gk = 1;
var pe = [3, 2];
var re = [["number"], ["number", "string"], ["number", "undefined"], ["number", "string", "undefined"]];
var Re = Symbol("root");
var Ge = Symbol("child");
export function AV(Ee) {
  var ke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Re;
  if (ke !== Re && ke !== Ge) {
    throw new Error("The second argument is used internally only and cannot be overwritten.");
  }
  var Be = Array.isArray(Ee);
  var De = ke === Re;
  var Qe = Kk;
  if (Be) {
    var It = Ee[0];
    if (Ee.length === 0) {
      Qe = gk;
    } else if (De && It instanceof B.Z) {
      Qe = 3;
    } else if (De && Array.isArray(It)) {
      Qe = AV(It, Ge);
    } else if (Ee.length >= 2 && Ee.length <= 4) {
      var Yt = !Ee.some(function (Dn, Et) {
        return !re[Et].includes(se(Dn));
      });
      if (Yt) {
        Qe = 2;
      }
    }
  }
  return Qe;
}
export function S5(Ee) {
  var ke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var Be = ke.keepDirection;
  var De = Be !== undefined && Be;
  var Qe = ke.propToCol;
  if (!pe.includes(Ee)) {
    throw new Error("Unsupported selection ranges schema type was provided.");
  }
  return function (It) {
    var Yt = Ee === 3;
    var Dn = Yt ? It.from.row : It[0];
    var Et = Yt ? It.from.col : It[1];
    var lt = Yt ? It.to.row : It[2];
    var et = Yt ? It.to.col : It[3];
    if (typeof Qe == "function") {
      if (typeof Et == "string") {
        Et = Qe(Et);
      }
      if (typeof et == "string") {
        et = Qe(et);
      }
    }
    if ((0, Z.o8)(lt)) {
      lt = Dn;
    }
    if ((0, Z.o8)(et)) {
      et = Et;
    }
    if (!De) {
      var St = Dn;
      var ve = Et;
      var Lt = lt;
      var ft = et;
      Dn = Math.min(St, Lt);
      Et = Math.min(ve, ft);
      lt = Math.max(St, Lt);
      et = Math.max(ve, ft);
    }
    return [Dn, Et, lt, et];
  };
}
export function X8(Ee) {
  var ke = AV(Ee);
  if (ke === Kk || ke === gk) {
    return [];
  }
  var Be = S5(ke);
  var De = new Set();
  (0, F.Bk)(Ee, function (Yt) {
    var Et = X(Be(Yt), 4);
    var et = Et[3];
    var St = Math.max(Et[1], 0);
    (0, F.Bk)(Array.from(new Array(et - St + 1), function (Lt, ft) {
      return St + ft;
    }), function (Lt) {
      if (!De.has(Lt)) {
        De.add(Lt);
      }
    });
  });
  var Qe = Array.from(De).sort(function (Yt, Dn) {
    return Yt - Dn;
  });
  return (0, F.k$)(Qe, function (Yt, Dn, Et, lt) {
    if (Et !== 0 && Dn === lt[Et - 1] + 1) {
      Yt[Yt.length - 1][1] += 1;
    } else {
      Yt.push([Dn, 1]);
    }
    return Yt;
  }, []);
}
export function I8(Ee) {
  var ke = AV(Ee);
  if (ke === Kk || ke === gk) {
    return [];
  }
  var Be = S5(ke);
  var De = new Set();
  (0, F.Bk)(Ee, function (Yt) {
    var Et = X(Be(Yt), 3);
    var et = Et[2];
    var St = Math.max(Et[0], 0);
    (0, F.Bk)(Array.from(new Array(et - St + 1), function (Lt, ft) {
      return St + ft;
    }), function (Lt) {
      if (!De.has(Lt)) {
        De.add(Lt);
      }
    });
  });
  var Qe = Array.from(De).sort(function (Yt, Dn) {
    return Yt - Dn;
  });
  return (0, F.k$)(Qe, function (Yt, Dn, Et, lt) {
    if (Et !== 0 && Dn === lt[Et - 1] + 1) {
      Yt[Yt.length - 1][1] += 1;
    } else {
      Yt.push([Dn, 1]);
    }
    return Yt;
  }, []);
}
export function AO(Ee) {
  var ke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return typeof Ee == "number" && Ee >= 0 && Ee < ke;
}