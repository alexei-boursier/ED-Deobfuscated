function le(Re) {
  return function G(Re) {
    if (Array.isArray(Re)) {
      return se(Re);
    }
  }(Re) || function j(Re) {
    if (typeof Symbol !== "undefined" && Re[Symbol.iterator] != null || Re["@@iterator"] != null) {
      return Array.from(Re);
    }
  }(Re) || function q(Re, Ge) {
    if (Re) {
      if (typeof Re == "string") {
        return se(Re, Ge);
      }
      var Ue = Object.prototype.toString.call(Re).slice(8, -1);
      if (Ue === "Object" && Re.constructor) {
        Ue = Re.constructor.name;
      }
      if (Ue === "Map" || Ue === "Set") {
        return Array.from(Re);
      }
      if (Ue === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ue)) {
        return se(Re, Ge);
      }
    }
  }(Re) || function fe() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function se(Re, Ge) {
  if (Ge == null || Ge > Re.length) {
    Ge = Re.length;
  }
  for (var Ue = 0, ot = new Array(Ge); Ue < Ge; Ue++) {
    ot[Ue] = Re[Ue];
  }
  return ot;
}
function W(Re) {
  return (W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (Ge) {
    return typeof Ge;
  } : function (Ge) {
    if (Ge && typeof Symbol == "function" && Ge.constructor === Symbol && Ge !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof Ge;
    }
  })(Re);
}
export function kE(Re) {
  var Ge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var Ue = W(Re);
  if (Ue === "number") {
    return !isNaN(Re) && isFinite(Re);
  }
  if (Ue === "string") {
    if (Re.length === 0) {
      return false;
    }
    if (Re.length === 1) {
      return /\d/.test(Re);
    }
    var ot = Array.from(new Set(["."].concat(le(Ge)))).map(function (st) {
      return `\\${st}`;
    }).join("|");
    return new RegExp(`^[+-]?\\s*(((${ot})?\\d+((${ot})\\d+)?(e[+-]?\\d+)?)|(0x[a-f\\d]+))\$`, "i").test(Re.trim());
  }
  return Ue === "object" && !!Re && typeof Re.valueOf() == "number" && !(Re instanceof Date);
}
export function TR(Re) {
  return kE(Re, [","]);
}
export function q4(Re, Ge, Ue) {
  var ot = -1;
  for (typeof Ge == "function" ? (Ue = Ge, Ge = Re) : ot = Re - 1; ++ot <= Ge && Ue(ot) !== false;);
}
export function yh(Re, Ge, Ue) {
  var ot = Re + 1;
  for (typeof Ge == "function" && (Ue = Ge, Ge = 0); --ot >= Ge && Ue(ot) !== false;);
}
export function N1(Re, Ge) {
  Ge = parseInt(Ge.toString().replace("%", ""), 10);
  Ge = isNaN(Ge) ? 0 : Ge;
  return parseInt(Re * Ge / 100, 10);
}
require("74916");
require("69600");
require("21249");
require("91038");
require("78783");
require("66992");
require("41539");
require("70189");
require("33948");
require("92222");
require("24603");
require("39714");
require("73210");
require("15306");
require("82526");
require("41817");
require("32165");
require("47042");
require("68309");