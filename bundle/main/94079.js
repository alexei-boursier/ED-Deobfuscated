require("26699");
require("32023");
require("41539");
require("54747");
require("82526");
require("41817");
require("32165");
require("66992");
require("78783");
require("33948");
function E(pe, re, Re) {
  if (re in pe) {
    Object.defineProperty(pe, re, {
      value: Re,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    pe[re] = Re;
  }
  return pe;
}
function O(pe) {
  return (O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (re) {
    return typeof re;
  } : function (re) {
    if (re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof re;
    }
  })(pe);
}
export function ie(pe) {
  var re;
  if (Array.isArray(pe)) {
    re = [];
  } else {
    re = {};
    _l(pe, function (Re, Ge) {
      if (Ge !== "__children") {
        re[Ge] = Re && O(Re) === "object" && !Array.isArray(Re) ? ie(Re) : Array.isArray(Re) ? Re.length && O(Re[0]) === "object" && !Array.isArray(Re[0]) ? [ie(Re[0])] : [] : null;
      }
    });
  }
  return re;
}
export function ED(pe, re) {
  re.prototype.constructor = re;
  pe.prototype = new re();
  pe.prototype.constructor = pe;
  return pe;
}
export function l7(pe, re, Re) {
  var Ge = Array.isArray(Re);
  _l(re, function (Ue, ot) {
    if (Ge === false || Re.includes(ot)) {
      pe[ot] = Ue;
    }
  });
  return pe;
}
export function ZB(pe, re) {
  _l(re, function (Re, Ge) {
    if (re[Ge] && O(re[Ge]) === "object") {
      pe[Ge] ||= Array.isArray(re[Ge]) ? [] : Object.prototype.toString.call(re[Ge]) === "[object Date]" ? re[Ge] : {};
      ZB(pe[Ge], re[Ge]);
    } else {
      pe[Ge] = re[Ge];
    }
  });
}
export function I8(pe) {
  if (O(pe) === "object") {
    return JSON.parse(JSON.stringify(pe));
  } else {
    return pe;
  }
}
export function jB(pe) {
  pe.MIXINS ||= [];
  for (var re = arguments.length, Re = new Array(re > 1 ? re - 1 : 0), Ge = 1; Ge < re; Ge++) {
    Re[Ge - 1] = arguments[Ge];
  }
  (0, I.Bk)(Re, function (Ue) {
    pe.MIXINS.push(Ue.MIXIN_NAME);
    _l(Ue, function (ot, st) {
      if (pe.prototype[st] !== undefined) {
        throw new Error(`Mixin conflict. Property '${st}' already exist and cannot be overwritten.`);
      }
      var ke;
      var Be;
      var De;
      if (typeof ot == "function") {
        pe.prototype[st] = ot;
      } else {
        Object.defineProperty(pe.prototype, st, {
          get: (ke = st, Be = ot, De = `_${ke}`, function () {
            if (this[De] === undefined) {
              this[De] = (Dn = Be, (Array.isArray(Dn) || Kn(Dn)) && (Dn = I8(Dn)), Dn);
            }
            return this[De];
            var Dn;
          }),
          set: function (ke) {
            var Be = `_${ke}`;
            return function (De) {
              this[Be] = De;
            };
          }(st),
          configurable: true
        });
      }
    });
  });
  return pe;
}
export function Z1(pe, re) {
  return JSON.stringify(pe) === JSON.stringify(re);
}
export function Kn(pe) {
  return Object.prototype.toString.call(pe) === "[object Object]";
}
export function jW(pe, re, Re, Ge) {
  Ge.value = Re;
  Ge.writable = Ge.writable !== false;
  Ge.enumerable = Ge.enumerable !== false;
  Ge.configurable = Ge.configurable !== false;
  Object.defineProperty(pe, re, Ge);
}
export function _l(pe, re) {
  for (var Re in pe) {
    if ((!pe.hasOwnProperty || pe.hasOwnProperty && Object.prototype.hasOwnProperty.call(pe, Re)) && re(pe[Re], Re, pe) === false) {
      break;
    }
  }
  return pe;
}
export function $s(pe, re) {
  var Re = re.split(".");
  var Ge = pe;
  _l(Re, function (Ue) {
    if ((Ge = Ge[Ue]) === undefined) {
      Ge = undefined;
      return false;
    }
  });
  return Ge;
}
export function Hn(pe, re, Re) {
  var Ge = re.split(".");
  var Ue = pe;
  Ge.forEach(function (ot, st) {
    if (st !== Ge.length - 1) {
      if (!nr(Ue, ot)) {
        Ue[ot] = {};
      }
      Ue = Ue[ot];
    } else {
      Ue[ot] = Re;
    }
  });
}
export function Q8(pe) {
  if (Kn(pe)) {
    return function Re(Ge) {
      var Ue = 0;
      if (Kn(Ge)) {
        _l(Ge, function (ot, st) {
          if (st !== "__children") {
            Ue += Re(ot);
          }
        });
      } else {
        Ue += 1;
      }
      return Ue;
    }(pe);
  } else {
    return 0;
  }
}
export function sm(pe) {
  var re;
  var Re = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "value";
  var Ge = `_${Re}`;
  E(re = {
    _touched: false
  }, Ge, pe);
  E(re, "isTouched", function () {
    return this._touched;
  });
  var Ue = re;
  Object.defineProperty(Ue, Re, {
    get: function () {
      return this[Ge];
    },
    set: function (st) {
      this._touched = true;
      this[Ge] = st;
    },
    enumerable: true,
    configurable: true
  });
  return Ue;
}
export function nr(pe, re) {
  return Object.prototype.hasOwnProperty.call(pe, re);
}