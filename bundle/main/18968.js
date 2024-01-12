var Z;
import * as t from "60515";
import * as b from "39646";
import * as k from "45007";
import * as M from "18505";
import * as v from "70262";
import * as C from "28746";
import * as w from "63900";
import * as I from "11302";
import * as O from "94650";
var U_version = "0.20.1";
var B = 1200;
var X = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 10000];
var le = {
  0: 1252,
  1: 65001,
  2: 65001,
  77: 10000,
  128: 932,
  129: 949,
  130: 1361,
  134: 936,
  136: 950,
  161: 1253,
  162: 1254,
  163: 1258,
  177: 1255,
  178: 1256,
  186: 1257,
  204: 1251,
  222: 874,
  238: 1250,
  255: 1252,
  69: 6969
};
function fe(r) {
  if (X.indexOf(r) != -1) {
    le[0] = r;
  }
}
function j(r) {
  B = r;
  fe(r);
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
function G() {
  j(1200);
  (function q() {
    fe(1252);
  })();
}
function se(r) {
  for (var c = [], o = 0, p = r.length; o < p; ++o) {
    c[o] = r.charCodeAt(o);
  }
  return c;
}
function W(r) {
  for (var c = [], o = 0; o < r.length >> 1; ++o) {
    c[o] = String.fromCharCode(r.charCodeAt(o * 2) + (r.charCodeAt(o * 2 + 1) << 8));
  }
  return c.join("");
}
function Le(r) {
  for (var c = [], o = 0; o < r.length >> 1; ++o) {
    c[o] = String.fromCharCode(r.charCodeAt(o * 2 + 1) + (r.charCodeAt(o * 2) << 8));
  }
  return c.join("");
}
function he(r) {
  var c = r.charCodeAt(0);
  var o = r.charCodeAt(1);
  if (c == 255 && o == 254) {
    return W(r.slice(2));
  } else if (c == 254 && o == 255) {
    return Le(r.slice(2));
  } else if (c == 65279) {
    return r.slice(1);
  } else {
    return r;
  }
}
function pe(c) {
  return String.fromCharCode(c);
}
function re(c) {
  return String.fromCharCode(c);
}
var ot = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function st(r) {
  for (var c = "", o = 0, p = 0, _ = 0, V = 0, Y = 0, ee = 0, Te = 0, Ne = 0; Ne < r.length;) {
    V = (o = r.charCodeAt(Ne++)) >> 2;
    Y = (o & 3) << 4 | (p = r.charCodeAt(Ne++)) >> 4;
    ee = (p & 15) << 2 | (_ = r.charCodeAt(Ne++)) >> 6;
    Te = _ & 63;
    if (isNaN(p)) {
      ee = Te = 64;
    } else if (isNaN(_)) {
      Te = 64;
    }
    c += ot.charAt(V) + ot.charAt(Y) + ot.charAt(ee) + ot.charAt(Te);
  }
  return c;
}
function Ee(r) {
  var c = "";
  var V = 0;
  var Y = 0;
  var ee = 0;
  var Te = 0;
  r = r.replace(/^data:([^\/]+\/[^\/]+)?;base64\,/, "").replace(/[^\w\+\/\=]/g, "");
  for (var Ne = 0; Ne < r.length;) {
    V = ot.indexOf(r.charAt(Ne++));
    Y = ot.indexOf(r.charAt(Ne++));
    c += String.fromCharCode(V << 2 | Y >> 4);
    if ((ee = ot.indexOf(r.charAt(Ne++))) !== 64) {
      c += String.fromCharCode((Y & 15) << 4 | ee >> 2);
    }
    if ((Te = ot.indexOf(r.charAt(Ne++))) !== 64) {
      c += String.fromCharCode((ee & 3) << 6 | Te);
    }
  }
  return c;
}
var ke = function () {
  return typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && !!process.versions.node;
}();
var Be = function () {
  if (typeof Buffer !== "undefined") {
    var r = !Buffer.from;
    if (!r) {
      try {
        Buffer.from("foo", "utf8");
      } catch {
        r = true;
      }
    }
    if (r) {
      return function (c, o) {
        if (o) {
          return new Buffer(c, o);
        } else {
          return new Buffer(c);
        }
      };
    } else {
      return Buffer.from.bind(Buffer);
    }
  }
  return function () {};
}();
var De = function () {
  if (typeof Buffer === "undefined") {
    return false;
  }
  var r = Be([65, 0]);
  return !!r && r.toString("utf16le").length == 1;
}();
function Qe(r) {
  if (ke) {
    if (Buffer.alloc) {
      return Buffer.alloc(r);
    } else {
      return new Buffer(r);
    }
  } else if (typeof Uint8Array !== "undefined") {
    return new Uint8Array(r);
  } else {
    return new Array(r);
  }
}
function It(r) {
  if (ke) {
    if (Buffer.allocUnsafe) {
      return Buffer.allocUnsafe(r);
    } else {
      return new Buffer(r);
    }
  } else if (typeof Uint8Array !== "undefined") {
    return new Uint8Array(r);
  } else {
    return new Array(r);
  }
}
function Yt(c) {
  if (ke) {
    return Be(c, "binary");
  } else {
    return c.split("").map(function (o) {
      return o.charCodeAt(0) & 255;
    });
  }
}
function Dn(r) {
  if (typeof ArrayBuffer === "undefined") {
    return Yt(r);
  }
  for (var c = new ArrayBuffer(r.length), o = new Uint8Array(c), p = 0; p != r.length; ++p) {
    o[p] = r.charCodeAt(p) & 255;
  }
  return c;
}
function Et(r) {
  if (Array.isArray(r)) {
    return r.map(function (p) {
      return String.fromCharCode(p);
    }).join("");
  }
  for (var c = [], o = 0; o < r.length; ++o) {
    c[o] = String.fromCharCode(r[o]);
  }
  return c.join("");
}
function et(r) {
  if (typeof ArrayBuffer === "undefined") {
    throw new Error("Unsupported");
  }
  if (r instanceof ArrayBuffer) {
    return et(new Uint8Array(r));
  }
  for (var c = new Array(r.length), o = 0; o < r.length; ++o) {
    c[o] = r[o];
  }
  return c;
}
var St = ke ? function (r) {
  return Buffer.concat(r.map(function (c) {
    if (Buffer.isBuffer(c)) {
      return c;
    } else {
      return Be(c);
    }
  }));
} : function (r) {
  if (typeof Uint8Array !== "undefined") {
    var c = 0;
    var o = 0;
    for (c = 0; c < r.length; ++c) {
      o += r[c].length;
    }
    var p = new Uint8Array(o);
    var _ = 0;
    c = 0;
    o = 0;
    for (; c < r.length; o += _, ++c) {
      _ = r[c].length;
      if (r[c] instanceof Uint8Array) {
        p.set(r[c], o);
      } else {
        p.set(typeof r[c] == "string" ? new Uint8Array(Yt(r[c])) : new Uint8Array(r[c]), o);
      }
    }
    return p;
  }
  return [].concat.apply([], r.map(function (V) {
    if (Array.isArray(V)) {
      return V;
    } else {
      return [].slice.call(V);
    }
  }));
};
var Lt = /\u0000/g;
var ft = /[\u0001-\u0006]/g;
function qe(r) {
  for (var c = "", o = r.length - 1; o >= 0;) {
    c += r.charAt(o--);
  }
  return c;
}
function Me(r, c) {
  var o = "" + r;
  if (o.length >= c) {
    return o;
  } else {
    return Qs("0", c - o.length) + o;
  }
}
function ne(r, c) {
  var o = "" + r;
  if (o.length >= c) {
    return o;
  } else {
    return Qs(" ", c - o.length) + o;
  }
}
function me(r, c) {
  var o = "" + r;
  if (o.length >= c) {
    return o;
  } else {
    return o + Qs(" ", c - o.length);
  }
}
var Ut = Math.pow(2, 32);
function Ze(r, c) {
  if (r > Ut || r < -Ut) {
    return function it(r, c) {
      var o = "" + Math.round(r);
      if (o.length >= c) {
        return o;
      } else {
        return Qs("0", c - o.length) + o;
      }
    }(r, c);
  } else {
    return function bt(r, c) {
      var o = "" + r;
      if (o.length >= c) {
        return o;
      } else {
        return Qs("0", c - o.length) + o;
      }
    }(Math.round(r), c);
  }
}
function pt(r, c) {
  return r.length >= 7 + (c = c || 0) && (r.charCodeAt(c) | 32) == 103 && (r.charCodeAt(c + 1) | 32) == 101 && (r.charCodeAt(c + 2) | 32) == 110 && (r.charCodeAt(c + 3) | 32) == 101 && (r.charCodeAt(c + 4) | 32) == 114 && (r.charCodeAt(c + 5) | 32) == 97 && (r.charCodeAt(c + 6) | 32) == 108;
}
var yt = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]];
var Wt = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
var Kt = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \""
};
var on = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  67: 9,
  68: 10,
  69: 12,
  70: 13,
  71: 14,
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  76: 20,
  77: 21,
  78: 22,
  79: 45,
  80: 46,
  81: 47,
  82: 0
};
var Rn = {
  5: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
  63: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
  6: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
  64: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
  7: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
  65: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
  8: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
  66: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
  41: "_(* #,##0_);_(* \\(#,##0\\);_(* \"-\"_);_(@_)",
  42: "_(\"$\"* #,##0_);_(\"$\"* \\(#,##0\\);_(\"$\"* \"-\"_);_(@_)",
  43: "_(* #,##0.00_);_(* \\(#,##0.00\\);_(* \"-\"??_);_(@_)",
  44: "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)"
};
function In(r, c, o) {
  for (var p = r < 0 ? -1 : 1, _ = r * p, V = 0, Y = 1, ee = 0, Te = 1, Ne = 0, ze = 0, Ft = Math.floor(_); Ne < c && (ee = (Ft = Math.floor(_)) * Y + V, ze = Ft * Ne + Te, _ - Ft >= 5e-8);) {
    _ = 1 / (_ - Ft);
    V = Y;
    Y = ee;
    Te = Ne;
    Ne = ze;
  }
  if (ze > c) {
    if (Ne > c) {
      ze = Te;
      ee = V;
    } else {
      ze = Ne;
      ee = Y;
    }
  }
  if (!o) {
    return [0, p * ee, ze];
  }
  var _t = Math.floor(p * ee / ze);
  return [_t, p * ee - _t * ze, ze];
}
function Si(r, c, o) {
  if (r > 2958465 || r < 0) {
    return null;
  }
  r = function di(r) {
    var c = r.toPrecision(16);
    if (c.indexOf("e") > -1) {
      var o = c.slice(0, c.indexOf("e"));
      return (o = o.indexOf(".") > -1 ? o.slice(0, o.slice(0, 2) == "0." ? 17 : 16) : o.slice(0, 15) + Qs("0", o.length - 15)) + c.slice(c.indexOf("e"));
    }
    var p = c.indexOf(".") > -1 ? c.slice(0, c.slice(0, 2) == "0." ? 17 : 16) : c.slice(0, 15) + Qs("0", c.length - 15);
    return Number(p);
  }(r);
  var p = r | 0;
  var _ = Math.floor((r - p) * 86400);
  var V = 0;
  var Y = [];
  var ee = {
    D: p,
    T: _,
    u: (r - p) * 86400 - _,
    y: 0,
    m: 0,
    d: 0,
    H: 0,
    M: 0,
    S: 0,
    q: 0
  };
  if (Math.abs(ee.u) < 0.000001) {
    ee.u = 0;
  }
  if (c && c.date1904) {
    p += 1462;
  }
  if (ee.u > 0.9999) {
    ee.u = 0;
    if (++_ == 86400) {
      ee.T = _ = 0;
      ++p;
      ++ee.D;
    }
  }
  if (p === 60) {
    Y = o ? [1317, 10, 29] : [1900, 2, 29];
    V = 3;
  } else if (p === 0) {
    Y = o ? [1317, 8, 29] : [1900, 1, 0];
    V = 6;
  } else {
    if (p > 60) {
      --p;
    }
    var Te = new Date(1900, 0, 1);
    Te.setDate(Te.getDate() + p - 1);
    Y = [Te.getFullYear(), Te.getMonth() + 1, Te.getDate()];
    V = Te.getDay();
    if (p < 60) {
      V = (V + 6) % 7;
    }
    if (o) {
      V = function Ur(r, c) {
        c[0] -= 581;
        var o = r.getDay();
        if (r < 60) {
          o = (o + 6) % 7;
        }
        return o;
      }(Te, Y);
    }
  }
  ee.y = Y[0];
  ee.m = Y[1];
  ee.d = Y[2];
  ee.S = _ % 60;
  _ = Math.floor(_ / 60);
  ee.M = _ % 60;
  _ = Math.floor(_ / 60);
  ee.H = _;
  ee.q = V;
  return ee;
}
function Zi(r) {
  if (r.indexOf(".") == -1) {
    return r;
  } else {
    return r.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
  }
}
function Ar(r) {
  var o;
  var c = Math.floor(Math.log(Math.abs(r)) * Math.LOG10E);
  o = c >= -4 && c <= -1 ? r.toPrecision(10 + c) : Math.abs(c) <= 9 ? function Qi(r) {
    var c = r < 0 ? 12 : 11;
    var o = Zi(r.toFixed(12));
    if (o.length <= c || (o = r.toPrecision(10)).length <= c) {
      return o;
    } else {
      return r.toExponential(5);
    }
  }(r) : c === 10 ? r.toFixed(10).substr(0, 12) : function br(r) {
    var c = Zi(r.toFixed(11));
    if (c.length > (r < 0 ? 12 : 11) || c === "0" || c === "-0") {
      return r.toPrecision(6);
    } else {
      return c;
    }
  }(r);
  return Zi(function $i(r) {
    if (r.indexOf("E") == -1) {
      return r;
    } else {
      return r.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
    }
  }(o.toUpperCase()));
}
function vr(r, c) {
  switch (typeof r) {
    case "string":
      return r;
    case "boolean":
      if (r) {
        return "TRUE";
      } else {
        return "FALSE";
      }
    case "number":
      if ((r | 0) === r) {
        return r.toString(10);
      } else {
        return Ar(r);
      }
    case "undefined":
      return "";
    case "object":
      if (r == null) {
        return "";
      }
      if (r instanceof Date) {
        return Zr(14, So(r, c && c.date1904), c);
      }
  }
  throw new Error("unsupported value in General format: " + r);
}
function Br(r, c, o, p) {
  var Te;
  var _ = "";
  var V = 0;
  var Y = 0;
  var ee = o.y;
  var Ne = 0;
  switch (r) {
    case 98:
      ee = o.y + 543;
    case 121:
      switch (c.length) {
        case 1:
        case 2:
          Te = ee % 100;
          Ne = 2;
          break;
        default:
          Te = ee % 10000;
          Ne = 4;
      }
      break;
    case 109:
      switch (c.length) {
        case 1:
        case 2:
          Te = o.m;
          Ne = c.length;
          break;
        case 3:
          return Wt[o.m - 1][1];
        case 5:
          return Wt[o.m - 1][0];
        default:
          return Wt[o.m - 1][2];
      }
      break;
    case 100:
      switch (c.length) {
        case 1:
        case 2:
          Te = o.d;
          Ne = c.length;
          break;
        case 3:
          return yt[o.q][0];
        default:
          return yt[o.q][1];
      }
      break;
    case 104:
      switch (c.length) {
        case 1:
        case 2:
          Te = 1 + (o.H + 11) % 12;
          Ne = c.length;
          break;
        default:
          throw "bad hour format: " + c;
      }
      break;
    case 72:
      switch (c.length) {
        case 1:
        case 2:
          Te = o.H;
          Ne = c.length;
          break;
        default:
          throw "bad hour format: " + c;
      }
      break;
    case 77:
      switch (c.length) {
        case 1:
        case 2:
          Te = o.M;
          Ne = c.length;
          break;
        default:
          throw "bad minute format: " + c;
      }
      break;
    case 115:
      if (c != "s" && c != "ss" && c != ".0" && c != ".00" && c != ".000") {
        throw "bad second format: " + c;
      }
      if (o.u !== 0 || c != "s" && c != "ss") {
        Y = p >= 2 ? p === 3 ? 1000 : 100 : p === 1 ? 10 : 1;
        if ((V = Math.round(Y * (o.S + o.u))) >= Y * 60) {
          V = 0;
        }
        if (c === "s") {
          if (V === 0) {
            return "0";
          } else {
            return "" + V / Y;
          }
        } else {
          _ = Me(V, 2 + p);
          if (c === "ss") {
            return _.substr(0, 2);
          } else {
            return "." + _.substr(2, c.length - 1);
          }
        }
      } else {
        return Me(o.S, c.length);
      }
    case 90:
      switch (c) {
        case "[h]":
        case "[hh]":
          Te = o.D * 24 + o.H;
          break;
        case "[m]":
        case "[mm]":
          Te = (o.D * 24 + o.H) * 60 + o.M;
          break;
        case "[s]":
        case "[ss]":
          Te = ((o.D * 24 + o.H) * 60 + o.M) * 60 + (p == 0 ? Math.round(o.S + o.u) : o.S);
          break;
        default:
          throw "bad abstime format: " + c;
      }
      Ne = c.length === 3 ? 1 : 2;
      break;
    case 101:
      Te = ee;
      Ne = 1;
  }
  if (Ne > 0) {
    return Me(Te, Ne);
  } else {
    return "";
  }
}
function rs(r) {
  if (r.length <= 3) {
    return r;
  }
  for (var o = r.length % 3, p = r.substr(0, o); o != r.length; o += 3) {
    p += (p.length > 0 ? "," : "") + r.substr(o, 3);
  }
  return p;
}
var vs = /%/g;
function sa(r, c) {
  var o;
  var p = r.indexOf("E") - r.indexOf(".") - 1;
  if (r.match(/^#+0.0E\+0$/)) {
    if (c == 0) {
      return "0.0E+0";
    }
    if (c < 0) {
      return "-" + sa(r, -c);
    }
    var _ = r.indexOf(".");
    if (_ === -1) {
      _ = r.indexOf("E");
    }
    var V = Math.floor(Math.log(c) * Math.LOG10E) % _;
    if (V < 0) {
      V += _;
    }
    if ((o = (c / Math.pow(10, V)).toPrecision(p + 1 + (_ + V) % _)).indexOf("e") === -1) {
      var Y = Math.floor(Math.log(c) * Math.LOG10E);
      for (o.indexOf(".") === -1 ? o = o.charAt(0) + "." + o.substr(1) + "E+" + (Y - o.length + V) : o += "E+" + (Y - V); o.substr(0, 2) === "0.";) {
        o = (o = o.charAt(0) + o.substr(2, _) + "." + o.substr(2 + _)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      }
      o = o.replace(/\+-/, "-");
    }
    o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (ee, Te, Ne, ze) {
      return Te + Ne + ze.substr(0, (_ + V) % _) + "." + ze.substr(V) + "E";
    });
  } else {
    o = c.toExponential(p);
  }
  if (r.match(/E\+00$/) && o.match(/e[+-]\d$/)) {
    o = o.substr(0, o.length - 1) + "0" + o.charAt(o.length - 1);
  }
  if (r.match(/E\-/) && o.match(/e\+/)) {
    o = o.replace(/e\+/, "e");
  }
  return o.replace("e", "E");
}
var js = /# (\?+)( ?)\/( ?)(\d+)/;
var pr = /^#*0*\.([0#]+)/;
var Bn = /\).*[0#]/;
var oi = /\(###\) ###\\?-####/;
function fi(r) {
  for (var o, c = "", p = 0; p != r.length; ++p) {
    switch (o = r.charCodeAt(p)) {
      case 35:
        break;
      case 63:
        c += " ";
        break;
      case 48:
        c += "0";
        break;
      default:
        c += String.fromCharCode(o);
    }
  }
  return c;
}
function bn(r, c) {
  var o = Math.pow(10, c);
  return "" + Math.round(r * o) / o;
}
function pn(r, c) {
  var o = r - Math.floor(r);
  var p = Math.pow(10, c);
  if (c < ("" + Math.round(o * p)).length) {
    return 0;
  } else {
    return Math.round(o * p);
  }
}
function Di(r, c, o) {
  if (r.charCodeAt(0) === 40 && !c.match(Bn)) {
    var p = c.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (o >= 0) {
      return Di("n", p, o);
    } else {
      return "(" + Di("n", p, -o) + ")";
    }
  }
  if (c.charCodeAt(c.length - 1) === 44) {
    return function so(r, c, o) {
      for (var p = c.length - 1; c.charCodeAt(p - 1) === 44;) {
        --p;
      }
      return _o(r, c.substr(0, p), o / Math.pow(10, (c.length - p) * 3));
    }(r, c, o);
  }
  if (c.indexOf("%") !== -1) {
    return function wo(r, c, o) {
      var p = c.replace(vs, "");
      var _ = c.length - p.length;
      return _o(r, p, o * Math.pow(10, _ * 2)) + Qs("%", _);
    }(r, c, o);
  }
  if (c.indexOf("E") !== -1) {
    return sa(c, o);
  }
  if (c.charCodeAt(0) === 36) {
    return "$" + Di(r, c.substr(c.charAt(1) == " " ? 2 : 1), o);
  }
  var _;
  var V;
  var Y;
  var ee;
  var Te = Math.abs(o);
  var Ne = o < 0 ? "-" : "";
  if (c.match(/^00+$/)) {
    return Ne + Ze(Te, c.length);
  }
  if (c.match(/^[#?]+$/)) {
    if ((_ = Ze(o, 0)) === "0") {
      _ = "";
    }
    if (_.length > c.length) {
      return _;
    } else {
      return fi(c.substr(0, c.length - _.length)) + _;
    }
  }
  if (V = c.match(js)) {
    return function Tr(r, c, o) {
      var p = parseInt(r[4], 10);
      var _ = Math.round(c * p);
      var V = Math.floor(_ / p);
      var Y = _ - V * p;
      var ee = p;
      return o + (V === 0 ? "" : "" + V) + " " + (Y === 0 ? Qs(" ", r[1].length + 1 + r[4].length) : ne(Y, r[1].length) + r[2] + "/" + r[3] + Me(ee, r[4].length));
    }(V, Te, Ne);
  }
  if (c.match(/^#+0+$/)) {
    return Ne + Ze(Te, c.length - c.indexOf("0"));
  }
  if (V = c.match(pr)) {
    _ = bn(o, V[1].length).replace(/^([^\.]+)$/, "$1." + fi(V[1])).replace(/\.$/, "." + fi(V[1])).replace(/\.(\d*)$/, function (zt, nn) {
      return "." + nn + Qs("0", fi(V[1]).length - nn.length);
    });
    if (c.indexOf("0.") !== -1) {
      return _;
    } else {
      return _.replace(/^0\./, ".");
    }
  }
  c = c.replace(/^#+([0.])/, "$1");
  if (V = c.match(/^(0*)\.(#*)$/)) {
    return Ne + bn(Te, V[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, V[1].length ? "0." : ".");
  }
  if (V = c.match(/^#{1,3},##0(\.?)$/)) {
    return Ne + rs(Ze(Te, 0));
  }
  if (V = c.match(/^#,##0\.([#0]*0)$/)) {
    if (o < 0) {
      return "-" + Di(r, c, -o);
    } else {
      return rs("" + (Math.floor(o) + function An(r, c) {
        if (c < ("" + Math.round((r - Math.floor(r)) * Math.pow(10, c))).length) {
          return 1;
        } else {
          return 0;
        }
      }(o, V[1].length))) + "." + Me(pn(o, V[1].length), V[1].length);
    }
  }
  if (V = c.match(/^#,#*,#0/)) {
    return Di(r, c.replace(/^#,#*,/, ""), o);
  }
  if (V = c.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    _ = qe(Di(r, c.replace(/[\\-]/g, ""), o));
    Y = 0;
    return qe(qe(c.replace(/\\/g, "")).replace(/[0#]/g, function (zt) {
      if (Y < _.length) {
        return _.charAt(Y++);
      } else if (zt === "0") {
        return "0";
      } else {
        return "";
      }
    }));
  }
  if (c.match(oi)) {
    return "(" + (_ = Di(r, "##########", o)).substr(0, 3) + ") " + _.substr(3, 3) + "-" + _.substr(6);
  }
  var ze = "";
  if (V = c.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    Y = Math.min(V[4].length, 7);
    ee = In(Te, Math.pow(10, Y) - 1, false);
    _ = "" + Ne;
    if ((ze = _o("n", V[1], ee[1])).charAt(ze.length - 1) == " ") {
      ze = ze.substr(0, ze.length - 1) + "0";
    }
    _ += ze + V[2] + "/" + V[3];
    if ((ze = me(ee[2], Y)).length < V[4].length) {
      ze = fi(V[4].substr(V[4].length - ze.length)) + ze;
    }
    return _ += ze;
  }
  if (V = c.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    Y = Math.min(Math.max(V[1].length, V[4].length), 7);
    return Ne + ((ee = In(Te, Math.pow(10, Y) - 1, true))[0] || (ee[1] ? "" : "0")) + " " + (ee[1] ? ne(ee[1], Y) + V[2] + "/" + V[3] + me(ee[2], Y) : Qs(" ", Y * 2 + 1 + V[2].length + V[3].length));
  }
  if (V = c.match(/^[#0?]+$/)) {
    _ = Ze(o, 0);
    if (c.length <= _.length) {
      return _;
    } else {
      return fi(c.substr(0, c.length - _.length)) + _;
    }
  }
  if (V = c.match(/^([#0?]+)\.([#0]+)$/)) {
    _ = "" + o.toFixed(Math.min(V[2].length, 10)).replace(/([^0])0+$/, "$1");
    Y = _.indexOf(".");
    var Ft = c.indexOf(".") - Y;
    var _t = c.length - _.length - Ft;
    return fi(c.substr(0, Ft) + _ + c.substr(c.length - _t));
  }
  if (V = c.match(/^00,000\.([#0]*0)$/)) {
    Y = pn(o, V[1].length);
    if (o < 0) {
      return "-" + Di(r, c, -o);
    } else {
      return rs(function si(r) {
        if (r < 2147483647 && r > -2147483648) {
          return "" + (r >= 0 ? r | 0 : r - 1 | 0);
        } else {
          return "" + Math.floor(r);
        }
      }(o)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (zt) {
        return "00," + (zt.length < 3 ? Me(0, 3 - zt.length) : "") + zt;
      }) + "." + Me(Y, V[1].length);
    }
  }
  switch (c) {
    case "###,##0.00":
      return Di(r, "#,##0.00", o);
    case "###,###":
    case "##,###":
    case "#,###":
      var Ot = rs(Ze(Te, 0));
      if (Ot !== "0") {
        return Ne + Ot;
      } else {
        return "";
      }
    case "###,###.00":
      return Di(r, "###,##0.00", o).replace(/^0\./, ".");
    case "#,###.00":
      return Di(r, "#,##0.00", o).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + c + "|");
}
function Or(r, c) {
  var o;
  var p = r.indexOf("E") - r.indexOf(".") - 1;
  if (r.match(/^#+0.0E\+0$/)) {
    if (c == 0) {
      return "0.0E+0";
    }
    if (c < 0) {
      return "-" + Or(r, -c);
    }
    var _ = r.indexOf(".");
    if (_ === -1) {
      _ = r.indexOf("E");
    }
    var V = Math.floor(Math.log(c) * Math.LOG10E) % _;
    if (V < 0) {
      V += _;
    }
    if (!(o = (c / Math.pow(10, V)).toPrecision(p + 1 + (_ + V) % _)).match(/[Ee]/)) {
      var Y = Math.floor(Math.log(c) * Math.LOG10E);
      if (o.indexOf(".") === -1) {
        o = o.charAt(0) + "." + o.substr(1) + "E+" + (Y - o.length + V);
      } else {
        o += "E+" + (Y - V);
      }
      o = o.replace(/\+-/, "-");
    }
    o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (ee, Te, Ne, ze) {
      return Te + Ne + ze.substr(0, (_ + V) % _) + "." + ze.substr(V) + "E";
    });
  } else {
    o = c.toExponential(p);
  }
  if (r.match(/E\+00$/) && o.match(/e[+-]\d$/)) {
    o = o.substr(0, o.length - 1) + "0" + o.charAt(o.length - 1);
  }
  if (r.match(/E\-/) && o.match(/e\+/)) {
    o = o.replace(/e\+/, "e");
  }
  return o.replace("e", "E");
}
function is(r, c, o) {
  if (r.charCodeAt(0) === 40 && !c.match(Bn)) {
    var p = c.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (o >= 0) {
      return is("n", p, o);
    } else {
      return "(" + is("n", p, -o) + ")";
    }
  }
  if (c.charCodeAt(c.length - 1) === 44) {
    return function dr(r, c, o) {
      for (var p = c.length - 1; c.charCodeAt(p - 1) === 44;) {
        --p;
      }
      return _o(r, c.substr(0, p), o / Math.pow(10, (c.length - p) * 3));
    }(r, c, o);
  }
  if (c.indexOf("%") !== -1) {
    return function Vr(r, c, o) {
      var p = c.replace(vs, "");
      var _ = c.length - p.length;
      return _o(r, p, o * Math.pow(10, _ * 2)) + Qs("%", _);
    }(r, c, o);
  }
  if (c.indexOf("E") !== -1) {
    return Or(c, o);
  }
  if (c.charCodeAt(0) === 36) {
    return "$" + is(r, c.substr(c.charAt(1) == " " ? 2 : 1), o);
  }
  var _;
  var V;
  var Y;
  var ee;
  var Te = Math.abs(o);
  var Ne = o < 0 ? "-" : "";
  if (c.match(/^00+$/)) {
    return Ne + Me(Te, c.length);
  }
  if (c.match(/^[#?]+$/)) {
    _ = "" + o;
    if (o === 0) {
      _ = "";
    }
    if (_.length > c.length) {
      return _;
    } else {
      return fi(c.substr(0, c.length - _.length)) + _;
    }
  }
  if (V = c.match(js)) {
    return function ns(r, c, o) {
      return o + (c === 0 ? "" : "" + c) + Qs(" ", r[1].length + 2 + r[4].length);
    }(V, Te, Ne);
  }
  if (c.match(/^#+0+$/)) {
    return Ne + Me(Te, c.length - c.indexOf("0"));
  }
  if (V = c.match(pr)) {
    _ = (_ = ("" + o).replace(/^([^\.]+)$/, "$1." + fi(V[1])).replace(/\.$/, "." + fi(V[1]))).replace(/\.(\d*)$/, function (zt, nn) {
      return "." + nn + Qs("0", fi(V[1]).length - nn.length);
    });
    if (c.indexOf("0.") !== -1) {
      return _;
    } else {
      return _.replace(/^0\./, ".");
    }
  }
  c = c.replace(/^#+([0.])/, "$1");
  if (V = c.match(/^(0*)\.(#*)$/)) {
    return Ne + ("" + Te).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, V[1].length ? "0." : ".");
  }
  if (V = c.match(/^#{1,3},##0(\.?)$/)) {
    return Ne + rs("" + Te);
  }
  if (V = c.match(/^#,##0\.([#0]*0)$/)) {
    if (o < 0) {
      return "-" + is(r, c, -o);
    } else {
      return rs("" + o) + "." + Qs("0", V[1].length);
    }
  }
  if (V = c.match(/^#,#*,#0/)) {
    return is(r, c.replace(/^#,#*,/, ""), o);
  }
  if (V = c.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    _ = qe(is(r, c.replace(/[\\-]/g, ""), o));
    Y = 0;
    return qe(qe(c.replace(/\\/g, "")).replace(/[0#]/g, function (zt) {
      if (Y < _.length) {
        return _.charAt(Y++);
      } else if (zt === "0") {
        return "0";
      } else {
        return "";
      }
    }));
  }
  if (c.match(oi)) {
    return "(" + (_ = is(r, "##########", o)).substr(0, 3) + ") " + _.substr(3, 3) + "-" + _.substr(6);
  }
  var ze = "";
  if (V = c.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    Y = Math.min(V[4].length, 7);
    ee = In(Te, Math.pow(10, Y) - 1, false);
    _ = "" + Ne;
    if ((ze = _o("n", V[1], ee[1])).charAt(ze.length - 1) == " ") {
      ze = ze.substr(0, ze.length - 1) + "0";
    }
    _ += ze + V[2] + "/" + V[3];
    if ((ze = me(ee[2], Y)).length < V[4].length) {
      ze = fi(V[4].substr(V[4].length - ze.length)) + ze;
    }
    return _ += ze;
  }
  if (V = c.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    Y = Math.min(Math.max(V[1].length, V[4].length), 7);
    return Ne + ((ee = In(Te, Math.pow(10, Y) - 1, true))[0] || (ee[1] ? "" : "0")) + " " + (ee[1] ? ne(ee[1], Y) + V[2] + "/" + V[3] + me(ee[2], Y) : Qs(" ", Y * 2 + 1 + V[2].length + V[3].length));
  }
  if (V = c.match(/^[#0?]+$/)) {
    if (c.length <= (_ = "" + o).length) {
      return _;
    } else {
      return fi(c.substr(0, c.length - _.length)) + _;
    }
  }
  if (V = c.match(/^([#0]+)\.([#0]+)$/)) {
    _ = "" + o.toFixed(Math.min(V[2].length, 10)).replace(/([^0])0+$/, "$1");
    Y = _.indexOf(".");
    var Ft = c.indexOf(".") - Y;
    var _t = c.length - _.length - Ft;
    return fi(c.substr(0, Ft) + _ + c.substr(c.length - _t));
  }
  if (V = c.match(/^00,000\.([#0]*0)$/)) {
    if (o < 0) {
      return "-" + is(r, c, -o);
    } else {
      return rs("" + o).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (zt) {
        return "00," + (zt.length < 3 ? Me(0, 3 - zt.length) : "") + zt;
      }) + "." + Me(0, V[1].length);
    }
  }
  switch (c) {
    case "###,###":
    case "##,###":
    case "#,###":
      var Ot = rs("" + Te);
      if (Ot !== "0") {
        return Ne + Ot;
      } else {
        return "";
      }
    default:
      if (c.match(/\.[0#?]*$/)) {
        return is(r, c.slice(0, c.lastIndexOf(".")), o) + fi(c.slice(c.lastIndexOf(".")));
      }
  }
  throw new Error("unsupported format |" + c + "|");
}
function _o(r, c, o) {
  if ((o | 0) === o) {
    return is(r, c, o);
  } else {
    return Di(r, c, o);
  }
}
var Zs = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function No(r) {
  for (var c = 0, o = "", p = ""; c < r.length;) {
    switch (o = r.charAt(c)) {
      case "G":
        if (pt(r, c)) {
          c += 6;
        }
        c++;
        break;
      case "\"":
        for (; r.charCodeAt(++c) !== 34 && c < r.length;);
        ++c;
        break;
      case "\\":
      case "_":
        c += 2;
        break;
      case "@":
        ++c;
        break;
      case "B":
      case "b":
        if (r.charAt(c + 1) === "1" || r.charAt(c + 1) === "2") {
          return true;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return true;
      case "A":
      case "a":
      case "上":
        if (r.substr(c, 3).toUpperCase() === "A/P" || r.substr(c, 5).toUpperCase() === "AM/PM" || r.substr(c, 5).toUpperCase() === "上午/下午") {
          return true;
        }
        ++c;
        break;
      case "[":
        for (p = o; r.charAt(c++) !== "]" && c < r.length;) {
          p += r.charAt(c);
        }
        if (p.match(Zs)) {
          return true;
        }
        break;
      case ".":
      case "0":
      case "#":
        for (; c < r.length && ("0#?.,E+-%".indexOf(o = r.charAt(++c)) > -1 || o == "\\" && r.charAt(c + 1) == "-" && "0#".indexOf(r.charAt(c + 2)) > -1););
        break;
      case "?":
        for (; r.charAt(++c) === o;);
        break;
      case "*":
        ++c;
        if (r.charAt(c) == " " || r.charAt(c) == "*") {
          ++c;
        }
        break;
      case "(":
      case ")":
        ++c;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; c < r.length && "0123456789".indexOf(r.charAt(++c)) > -1;);
        break;
      default:
        ++c;
    }
  }
  return false;
}
var bo = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function ks(r, c) {
  if (c == null) {
    return false;
  }
  var o = parseFloat(c[2]);
  switch (c[1]) {
    case "=":
      if (r == o) {
        return true;
      }
      break;
    case ">":
      if (r > o) {
        return true;
      }
      break;
    case "<":
      if (r < o) {
        return true;
      }
      break;
    case "<>":
      if (r != o) {
        return true;
      }
      break;
    case ">=":
      if (r >= o) {
        return true;
      }
      break;
    case "<=":
      if (r <= o) {
        return true;
      }
  }
  return false;
}
function Zr(r, c, o) {
  if (o == null) {
    o = {};
  }
  var p = "";
  switch (typeof r) {
    case "string":
      p = r == "m/d/yy" && o.dateNF ? o.dateNF : r;
      break;
    case "number":
      if ((p = r == 14 && o.dateNF ? o.dateNF : (o.table ?? Kt)[r]) == null) {
        p = o.table && o.table[on[r]] || Kt[on[r]];
      }
      if (p == null) {
        p = Rn[r] || "General";
      }
  }
  if (pt(p, 0)) {
    return vr(c, o);
  }
  if (c instanceof Date) {
    c = So(c, o.date1904);
  }
  var _ = function Gs(r, c) {
    var o = function kr(r) {
      for (var c = [], o = false, p = 0, _ = 0; p < r.length; ++p) {
        switch (r.charCodeAt(p)) {
          case 34:
            o = !o;
            break;
          case 95:
          case 42:
          case 92:
            ++p;
            break;
          case 59:
            c[c.length] = r.substr(_, p - _);
            _ = p + 1;
        }
      }
      c[c.length] = r.substr(_);
      if (o === true) {
        throw new Error("Format |" + r + "| unterminated string ");
      }
      return c;
    }(r);
    var p = o.length;
    var _ = o[p - 1].indexOf("@");
    if (p < 4 && _ > -1) {
      --p;
    }
    if (o.length > 4) {
      throw new Error("cannot find right format for |" + o.join("|") + "|");
    }
    if (typeof c != "number") {
      return [4, o.length === 4 || _ > -1 ? o[o.length - 1] : "@"];
    }
    switch (o.length) {
      case 1:
        o = _ > -1 ? ["General", "General", "General", o[0]] : [o[0], o[0], o[0], "@"];
        break;
      case 2:
        o = _ > -1 ? [o[0], o[0], o[0], o[1]] : [o[0], o[1], o[0], "@"];
        break;
      case 3:
        o = _ > -1 ? [o[0], o[1], o[0], o[2]] : [o[0], o[1], o[2], "@"];
    }
    var V = c > 0 ? o[0] : c < 0 ? o[1] : o[2];
    if (o[0].indexOf("[") === -1 && o[1].indexOf("[") === -1) {
      return [p, V];
    }
    if (o[0].match(/\[[=<>]/) != null || o[1].match(/\[[=<>]/) != null) {
      var Y = o[0].match(bo);
      var ee = o[1].match(bo);
      if (ks(c, Y)) {
        return [p, o[0]];
      } else if (ks(c, ee)) {
        return [p, o[1]];
      } else {
        return [p, o[Y != null && ee != null ? 2 : 1]];
      }
    }
    return [p, V];
  }(p, c);
  if (pt(_[1])) {
    return vr(c, o);
  }
  if (c === true) {
    c = "TRUE";
  } else if (c === false) {
    c = "FALSE";
  } else if (c === "" || c == null) {
    return "";
  }
  return function fa(r, c, o, p) {
    for (var Ne, ze, Ft, _ = [], V = "", Y = 0, ee = "", Te = "t", _t = "H"; Y < r.length;) {
      switch (ee = r.charAt(Y)) {
        case "G":
          if (!pt(r, Y)) {
            throw new Error("unrecognized character " + ee + " in " + r);
          }
          _[_.length] = {
            t: "G",
            v: "General"
          };
          Y += 7;
          break;
        case "\"":
          for (V = ""; (Ft = r.charCodeAt(++Y)) !== 34 && Y < r.length;) {
            V += String.fromCharCode(Ft);
          }
          _[_.length] = {
            t: "t",
            v: V
          };
          ++Y;
          break;
        case "\\":
          var Ot = r.charAt(++Y);
          _[_.length] = {
            t: Ot === "(" || Ot === ")" ? Ot : "t",
            v: Ot
          };
          ++Y;
          break;
        case "_":
          _[_.length] = {
            t: "t",
            v: " "
          };
          Y += 2;
          break;
        case "@":
          _[_.length] = {
            t: "T",
            v: c
          };
          ++Y;
          break;
        case "B":
        case "b":
          if (r.charAt(Y + 1) === "1" || r.charAt(Y + 1) === "2") {
            if (Ne == null && (Ne = Si(c, o, r.charAt(Y + 1) === "2")) == null) {
              return "";
            }
            _[_.length] = {
              t: "X",
              v: r.substr(Y, 2)
            };
            Te = ee;
            Y += 2;
            break;
          }
        case "M":
        case "D":
        case "Y":
        case "H":
        case "S":
        case "E":
          ee = ee.toLowerCase();
        case "m":
        case "d":
        case "y":
        case "h":
        case "s":
        case "e":
        case "g":
          if (c < 0 || Ne == null && (Ne = Si(c, o)) == null) {
            return "";
          }
          for (V = ee; ++Y < r.length && r.charAt(Y).toLowerCase() === ee;) {
            V += ee;
          }
          if (ee === "m" && Te.toLowerCase() === "h") {
            ee = "M";
          }
          if (ee === "h") {
            ee = _t;
          }
          _[_.length] = {
            t: ee,
            v: V
          };
          Te = ee;
          break;
        case "A":
        case "a":
        case "上":
          var nn = {
            t: ee,
            v: ee
          };
          if (Ne == null) {
            Ne = Si(c, o);
          }
          if (r.substr(Y, 3).toUpperCase() === "A/P") {
            if (Ne != null) {
              nn.v = Ne.H >= 12 ? r.charAt(Y + 2) : ee;
            }
            nn.t = "T";
            _t = "h";
            Y += 3;
          } else if (r.substr(Y, 5).toUpperCase() === "AM/PM") {
            if (Ne != null) {
              nn.v = Ne.H >= 12 ? "PM" : "AM";
            }
            nn.t = "T";
            Y += 5;
            _t = "h";
          } else if (r.substr(Y, 5).toUpperCase() === "上午/下午") {
            if (Ne != null) {
              nn.v = Ne.H >= 12 ? "下午" : "上午";
            }
            nn.t = "T";
            Y += 5;
            _t = "h";
          } else {
            nn.t = "t";
            ++Y;
          }
          if (Ne == null && nn.t === "T") {
            return "";
          }
          _[_.length] = nn;
          Te = ee;
          break;
        case "[":
          for (V = ee; r.charAt(Y++) !== "]" && Y < r.length;) {
            V += r.charAt(Y);
          }
          if (V.slice(-1) !== "]") {
            throw "unterminated \"[\" block: |" + V + "|";
          }
          if (V.match(Zs)) {
            if (Ne == null && (Ne = Si(c, o)) == null) {
              return "";
            }
            _[_.length] = {
              t: "Z",
              v: V.toLowerCase()
            };
            Te = V.charAt(1);
          } else if (V.indexOf("$") > -1) {
            V = (V.match(/\$([^-\[\]]*)/) || [])[1] || "$";
            if (!No(r)) {
              _[_.length] = {
                t: "t",
                v: V
              };
            }
          }
          break;
        case ".":
          if (Ne != null) {
            for (V = ee; ++Y < r.length && (ee = r.charAt(Y)) === "0";) {
              V += ee;
            }
            _[_.length] = {
              t: "s",
              v: V
            };
            break;
          }
        case "0":
        case "#":
          for (V = ee; ++Y < r.length && "0#?.,E+-%".indexOf(ee = r.charAt(Y)) > -1;) {
            V += ee;
          }
          _[_.length] = {
            t: "n",
            v: V
          };
          break;
        case "?":
          for (V = ee; r.charAt(++Y) === ee;) {
            V += ee;
          }
          _[_.length] = {
            t: ee,
            v: V
          };
          Te = ee;
          break;
        case "*":
          ++Y;
          if (r.charAt(Y) == " " || r.charAt(Y) == "*") {
            ++Y;
          }
          break;
        case "(":
        case ")":
          _[_.length] = {
            t: p === 1 ? "t" : ee,
            v: ee
          };
          ++Y;
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          for (V = ee; Y < r.length && "0123456789".indexOf(r.charAt(++Y)) > -1;) {
            V += r.charAt(Y);
          }
          _[_.length] = {
            t: "D",
            v: V
          };
          break;
        case " ":
          _[_.length] = {
            t: ee,
            v: ee
          };
          ++Y;
          break;
        case "$":
          _[_.length] = {
            t: "t",
            v: "$"
          };
          ++Y;
          break;
        default:
          if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(ee) === -1) {
            throw new Error("unrecognized character " + ee + " in " + r);
          }
          _[_.length] = {
            t: "t",
            v: ee
          };
          ++Y;
      }
    }
    var yn;
    var un;
    var Pt = 0;
    var rn = 0;
    Y = _.length - 1;
    Te = "t";
    for (; Y >= 0; --Y) {
      switch (_[Y].t) {
        case "h":
        case "H":
          _[Y].t = _t;
          Te = "h";
          if (Pt < 1) {
            Pt = 1;
          }
          break;
        case "s":
          if (yn = _[Y].v.match(/\.0+$/)) {
            rn = Math.max(rn, yn[0].length - 1);
            Pt = 4;
          }
          if (Pt < 3) {
            Pt = 3;
          }
        case "d":
        case "y":
        case "e":
          Te = _[Y].t;
          break;
        case "M":
          Te = _[Y].t;
          if (Pt < 2) {
            Pt = 2;
          }
          break;
        case "m":
          if (Te === "s") {
            _[Y].t = "M";
            if (Pt < 2) {
              Pt = 2;
            }
          }
          break;
        case "X":
          break;
        case "Z":
          if (Pt < 1 && _[Y].v.match(/[Hh]/)) {
            Pt = 1;
          }
          if (Pt < 2 && _[Y].v.match(/[Mm]/)) {
            Pt = 2;
          }
          if (Pt < 3 && _[Y].v.match(/[Ss]/)) {
            Pt = 3;
          }
      }
    }
    switch (Pt) {
      case 0:
        break;
      case 1:
      case 2:
      case 3:
        if (Ne.u >= 0.5) {
          Ne.u = 0;
          ++Ne.S;
        }
        if (Ne.S >= 60) {
          Ne.S = 0;
          ++Ne.M;
        }
        if (Ne.M >= 60) {
          Ne.M = 0;
          ++Ne.H;
        }
        if (Ne.H >= 24) {
          Ne.H = 0;
          ++Ne.D;
          (un = Si(Ne.D)).u = Ne.u;
          un.S = Ne.S;
          un.M = Ne.M;
          un.H = Ne.H;
          Ne = un;
        }
        break;
      case 4:
        switch (rn) {
          case 1:
            Ne.u = Math.round(Ne.u * 10) / 10;
            break;
          case 2:
            Ne.u = Math.round(Ne.u * 100) / 100;
            break;
          case 3:
            Ne.u = Math.round(Ne.u * 1000) / 1000;
        }
        if (Ne.u >= 1) {
          Ne.u = 0;
          ++Ne.S;
        }
        if (Ne.S >= 60) {
          Ne.S = 0;
          ++Ne.M;
        }
        if (Ne.M >= 60) {
          Ne.M = 0;
          ++Ne.H;
        }
        if (Ne.H >= 24) {
          Ne.H = 0;
          ++Ne.D;
          (un = Si(Ne.D)).u = Ne.u;
          un.S = Ne.S;
          un.M = Ne.M;
          un.H = Ne.H;
          Ne = un;
        }
    }
    var Ni;
    var ai = "";
    for (Y = 0; Y < _.length; ++Y) {
      switch (_[Y].t) {
        case "t":
        case "T":
        case " ":
        case "D":
          break;
        case "X":
          _[Y].v = "";
          _[Y].t = ";";
          break;
        case "d":
        case "m":
        case "y":
        case "h":
        case "H":
        case "M":
        case "s":
        case "e":
        case "b":
        case "Z":
          _[Y].v = Br(_[Y].t.charCodeAt(0), _[Y].v, Ne, rn);
          _[Y].t = "t";
          break;
        case "n":
        case "?":
          for (Ni = Y + 1; _[Ni] != null && ((ee = _[Ni].t) === "?" || ee === "D" || (ee === " " || ee === "t") && _[Ni + 1] != null && (_[Ni + 1].t === "?" || _[Ni + 1].t === "t" && _[Ni + 1].v === "/") || _[Y].t === "(" && (ee === " " || ee === "n" || ee === ")") || ee === "t" && (_[Ni].v === "/" || _[Ni].v === " " && _[Ni + 1] != null && _[Ni + 1].t == "?"));) {
            _[Y].v += _[Ni].v;
            _[Ni] = {
              v: "",
              t: ";"
            };
            ++Ni;
          }
          ai += _[Y].v;
          Y = Ni - 1;
          break;
        case "G":
          _[Y].t = "t";
          _[Y].v = vr(c, o);
      }
    }
    var Ln;
    var Jn;
    var or = "";
    if (ai.length > 0) {
      if (ai.charCodeAt(0) == 40) {
        Ln = c < 0 && ai.charCodeAt(0) === 45 ? -c : c;
        Jn = _o("n", ai, Ln);
      } else {
        Jn = _o("n", ai, Ln = c < 0 && p > 1 ? -c : c);
        if (Ln < 0 && _[0] && _[0].t == "t") {
          Jn = Jn.substr(1);
          _[0].v = "-" + _[0].v;
        }
      }
      Ni = Jn.length - 1;
      var yi = _.length;
      for (Y = 0; Y < _.length; ++Y) {
        if (_[Y] != null && _[Y].t != "t" && _[Y].v.indexOf(".") > -1) {
          yi = Y;
          break;
        }
      }
      var mi = _.length;
      if (yi === _.length && Jn.indexOf("E") === -1) {
        for (Y = _.length - 1; Y >= 0; --Y) {
          if (_[Y] != null && "n?".indexOf(_[Y].t) !== -1) {
            if (Ni >= _[Y].v.length - 1) {
              _[Y].v = Jn.substr(1 + (Ni -= _[Y].v.length), _[Y].v.length);
            } else if (Ni < 0) {
              _[Y].v = "";
            } else {
              _[Y].v = Jn.substr(0, Ni + 1);
              Ni = -1;
            }
            _[Y].t = "t";
            mi = Y;
          }
        }
        if (Ni >= 0 && mi < _.length) {
          _[mi].v = Jn.substr(0, Ni + 1) + _[mi].v;
        }
      } else if (yi !== _.length && Jn.indexOf("E") === -1) {
        Ni = Jn.indexOf(".") - 1;
        Y = yi;
        for (; Y >= 0; --Y) {
          if (_[Y] != null && "n?".indexOf(_[Y].t) !== -1) {
            ze = _[Y].v.indexOf(".") > -1 && Y === yi ? _[Y].v.indexOf(".") - 1 : _[Y].v.length - 1;
            or = _[Y].v.substr(ze + 1);
            for (; ze >= 0; --ze) {
              if (Ni >= 0 && (_[Y].v.charAt(ze) === "0" || _[Y].v.charAt(ze) === "#")) {
                or = Jn.charAt(Ni--) + or;
              }
            }
            _[Y].v = or;
            _[Y].t = "t";
            mi = Y;
          }
        }
        if (Ni >= 0 && mi < _.length) {
          _[mi].v = Jn.substr(0, Ni + 1) + _[mi].v;
        }
        Ni = Jn.indexOf(".") + 1;
        Y = yi;
        for (; Y < _.length; ++Y) {
          if (_[Y] != null && ("n?(".indexOf(_[Y].t) !== -1 || Y === yi)) {
            ze = _[Y].v.indexOf(".") > -1 && Y === yi ? _[Y].v.indexOf(".") + 1 : 0;
            or = _[Y].v.substr(0, ze);
            for (; ze < _[Y].v.length; ++ze) {
              if (Ni < Jn.length) {
                or += Jn.charAt(Ni++);
              }
            }
            _[Y].v = or;
            _[Y].t = "t";
            mi = Y;
          }
        }
      }
    }
    for (Y = 0; Y < _.length; ++Y) {
      if (_[Y] != null && "n?".indexOf(_[Y].t) > -1) {
        _[Y].v = _o(_[Y].t, _[Y].v, Ln = p > 1 && c < 0 && Y > 0 && _[Y - 1].v === "-" ? -c : c);
        _[Y].t = "t";
      }
    }
    var Fi = "";
    for (Y = 0; Y !== _.length; ++Y) {
      if (_[Y] != null) {
        Fi += _[Y].v;
      }
    }
    return Fi;
  }(_[1], c, o, _[0]);
}
function ho(r, c) {
  if (typeof c != "number") {
    c = +c || -1;
    for (var o = 0; o < 392; ++o) {
      if (Kt[o] != null) {
        if (Kt[o] == r) {
          c = o;
          break;
        }
      } else if (c < 0) {
        c = o;
      }
    }
    if (c < 0) {
      c = 391;
    }
  }
  Kt[c] = r;
  return c;
}
function ya(r) {
  for (var c = 0; c != 392; ++c) {
    if (r[c] !== undefined) {
      ho(r[c], c);
    }
  }
}
function Ko() {
  Kt = function hn(r) {
    r ||= {};
    r[0] = "General";
    r[1] = "0";
    r[2] = "0.00";
    r[3] = "#,##0";
    r[4] = "#,##0.00";
    r[9] = "0%";
    r[10] = "0.00%";
    r[11] = "0.00E+00";
    r[12] = "# ?/?";
    r[13] = "# ??/??";
    r[14] = "m/d/yy";
    r[15] = "d-mmm-yy";
    r[16] = "d-mmm";
    r[17] = "mmm-yy";
    r[18] = "h:mm AM/PM";
    r[19] = "h:mm:ss AM/PM";
    r[20] = "h:mm";
    r[21] = "h:mm:ss";
    r[22] = "m/d/yy h:mm";
    r[37] = "#,##0 ;(#,##0)";
    r[38] = "#,##0 ;[Red](#,##0)";
    r[39] = "#,##0.00;(#,##0.00)";
    r[40] = "#,##0.00;[Red](#,##0.00)";
    r[45] = "mm:ss";
    r[46] = "[h]:mm:ss";
    r[47] = "mmss.0";
    r[48] = "##0.0E+0";
    r[49] = "@";
    r[56] = "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \"";
    return r;
  }();
}
var qo = {
  5: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
  6: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
  7: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
  8: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: "_(* #,##0_);_(* (#,##0);_(* \"-\"_);_(@_)",
  42: "_(\"$\"* #,##0_);_(\"$\"* (#,##0);_(\"$\"* \"-\"_);_(@_)",
  43: "_(* #,##0.00_);_(* (#,##0.00);_(* \"-\"??_);_(@_)",
  44: "_(\"$\"* #,##0.00_);_(\"$\"* (#,##0.00);_(\"$\"* \"-\"??_);_(@_)",
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
  64: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
  65: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
  66: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
};
var ea = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
var ja = {
  "d.m": "d\\.m"
};
function la(r, c) {
  return ho(ja[r] || r, c);
}
var Es;
var ta = function () {
  var r = {
    version: "1.2.0"
  };
  var o = function c() {
    for (var Ln = 0, Jn = new Array(256), yi = 0; yi != 256; ++yi) {
      Jn[yi] = Ln = (Ln = (Ln = (Ln = (Ln = (Ln = (Ln = (Ln = (Ln = yi) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1) & 1 ? Ln >>> 1 ^ -306674912 : Ln >>> 1;
    }
    if (typeof Int32Array !== "undefined") {
      return new Int32Array(Jn);
    } else {
      return Jn;
    }
  }();
  var _ = function p(Ln) {
    var Jn = 0;
    var yi = 0;
    var mi = 0;
    var Fi = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
    for (mi = 0; mi != 256; ++mi) {
      Fi[mi] = Ln[mi];
    }
    for (mi = 0; mi != 256; ++mi) {
      yi = Ln[mi];
      Jn = 256 + mi;
      yi = Ln[mi];
      Jn = 256 + mi;
      for (; Jn < 4096; Jn += 256) {
        yi = Fi[Jn] = yi >>> 8 ^ Ln[yi & 255];
      }
    }
    var ji = [];
    for (mi = 1; mi != 16; ++mi) {
      ji[mi - 1] = typeof Int32Array !== "undefined" && typeof Fi.subarray == "function" ? Fi.subarray(mi * 256, mi * 256 + 256) : Fi.slice(mi * 256, mi * 256 + 256);
    }
    return ji;
  }(o);
  var V = _[0];
  var Y = _[1];
  var ee = _[2];
  var Te = _[3];
  var Ne = _[4];
  var ze = _[5];
  var Ft = _[6];
  var _t = _[7];
  var Ot = _[8];
  var zt = _[9];
  var nn = _[10];
  var Pt = _[11];
  var rn = _[12];
  var yn = _[13];
  var un = _[14];
  r.table = o;
  r.bstr = function ai(Ln, Jn) {
    for (var yi = Jn ^ -1, mi = 0, Fi = Ln.length; mi < Fi;) {
      yi = yi >>> 8 ^ o[(yi ^ Ln.charCodeAt(mi++)) & 255];
    }
    return ~yi;
  };
  r.buf = function Ni(Ln, Jn) {
    for (var yi = Jn ^ -1, mi = Ln.length - 15, Fi = 0; Fi < mi;) {
      yi = un[Ln[Fi++] ^ yi & 255] ^ yn[Ln[Fi++] ^ yi >> 8 & 255] ^ rn[Ln[Fi++] ^ yi >> 16 & 255] ^ Pt[Ln[Fi++] ^ yi >>> 24] ^ nn[Ln[Fi++]] ^ zt[Ln[Fi++]] ^ Ot[Ln[Fi++]] ^ _t[Ln[Fi++]] ^ Ft[Ln[Fi++]] ^ ze[Ln[Fi++]] ^ Ne[Ln[Fi++]] ^ Te[Ln[Fi++]] ^ ee[Ln[Fi++]] ^ Y[Ln[Fi++]] ^ V[Ln[Fi++]] ^ o[Ln[Fi++]];
    }
    for (mi += 15; Fi < mi;) {
      yi = yi >>> 8 ^ o[(yi ^ Ln[Fi++]) & 255];
    }
    return ~yi;
  };
  r.str = function or(Ln, Jn) {
    for (var yi = Jn ^ -1, mi = 0, Fi = Ln.length, ji = 0, Dr = 0; mi < Fi;) {
      if ((ji = Ln.charCodeAt(mi++)) < 128) {
        yi = yi >>> 8 ^ o[(yi ^ ji) & 255];
      } else if (ji < 2048) {
        yi = (yi = yi >>> 8 ^ o[(yi ^ (ji >> 6 & 31 | 192)) & 255]) >>> 8 ^ o[(yi ^ (ji & 63 | 128)) & 255];
      } else if (ji >= 55296 && ji < 57344) {
        ji = 64 + (ji & 1023);
        Dr = Ln.charCodeAt(mi++) & 1023;
        yi = (yi = (yi = (yi = yi >>> 8 ^ o[(yi ^ (ji >> 8 & 7 | 240)) & 255]) >>> 8 ^ o[(yi ^ (ji >> 2 & 63 | 128)) & 255]) >>> 8 ^ o[(yi ^ (Dr >> 6 & 15 | 128 | (ji & 3) << 4)) & 255]) >>> 8 ^ o[(yi ^ (Dr & 63 | 128)) & 255];
      } else {
        yi = (yi = (yi = yi >>> 8 ^ o[(yi ^ (ji >> 12 & 15 | 224)) & 255]) >>> 8 ^ o[(yi ^ (ji >> 6 & 63 | 128)) & 255]) >>> 8 ^ o[(yi ^ (ji & 63 | 128)) & 255];
      }
    }
    return ~yi;
  };
  return r;
}();
var Fr = function () {
  var Te;
  var c = {};
  function p(Mn) {
    if (Mn.charAt(Mn.length - 1) == "/") {
      if (Mn.slice(0, -1).indexOf("/") === -1) {
        return Mn;
      } else {
        return p(Mn.slice(0, -1));
      }
    }
    var ei = Mn.lastIndexOf("/");
    if (ei === -1) {
      return Mn;
    } else {
      return Mn.slice(0, ei + 1);
    }
  }
  function _(Mn) {
    if (Mn.charAt(Mn.length - 1) == "/") {
      return _(Mn.slice(0, -1));
    }
    var ei = Mn.lastIndexOf("/");
    if (ei === -1) {
      return Mn;
    } else {
      return Mn.slice(ei + 1);
    }
  }
  function V(Mn, ei) {
    if (typeof ei == "string") {
      ei = new Date(ei);
    }
    var Wn = ei.getHours();
    Wn = (Wn = Wn << 6 | ei.getMinutes()) << 5 | ei.getSeconds() >>> 1;
    Mn.write_shift(2, Wn);
    var Kn = ei.getFullYear() - 1980;
    Kn = (Kn = Kn << 4 | ei.getMonth() + 1) << 5 | ei.getDate();
    Mn.write_shift(2, Kn);
  }
  function ee(Mn) {
    Vl(Mn, 0);
    for (var ei = {}, Wn = 0; Mn.l <= Mn.length - 4;) {
      var Kn = Mn.read_shift(2);
      var qn = Mn.read_shift(2);
      var ti = Mn.l + qn;
      var cr = {};
      switch (Kn) {
        case 21589:
          if ((Wn = Mn.read_shift(1)) & 1) {
            cr.mtime = Mn.read_shift(4);
          }
          if (qn > 5) {
            if (Wn & 2) {
              cr.atime = Mn.read_shift(4);
            }
            if (Wn & 4) {
              cr.ctime = Mn.read_shift(4);
            }
          }
          if (cr.mtime) {
            cr.mt = new Date(cr.mtime * 1000);
          }
          break;
        case 1:
          var Er = Mn.read_shift(4);
          var ar = Mn.read_shift(4);
          cr.usz = ar * Math.pow(2, 32) + Er;
          Er = Mn.read_shift(4);
          ar = Mn.read_shift(4);
          cr.csz = ar * Math.pow(2, 32) + Er;
      }
      Mn.l = ti;
      ei[Kn] = cr;
    }
    return ei;
  }
  function Ne() {
    return Te ||= Es;
  }
  function ze(Mn, ei) {
    if (Mn[0] == 80 && Mn[1] == 75) {
      return EE(Mn, ei);
    }
    if ((Mn[0] | 32) == 109 && (Mn[1] | 32) == 105) {
      return function lx(Mn, ei) {
        if (Ul(Mn.slice(0, 13)).toLowerCase() != "mime-version:") {
          throw new Error("Unsupported MAD header");
        }
        var Wn = ei && ei.root || "";
        var Kn = (ke && Buffer.isBuffer(Mn) ? Mn.toString("binary") : Ul(Mn)).split("\r\n");
        var qn = 0;
        var ti = "";
        for (qn = 0; qn < Kn.length; ++qn) {
          if (/^Content-Location:/i.test(ti = Kn[qn]) && (ti = ti.slice(ti.indexOf("file")), Wn ||= ti.slice(0, ti.lastIndexOf("/") + 1), ti.slice(0, Wn.length) != Wn)) {
            for (; Wn.length > 0 && (Wn = (Wn = Wn.slice(0, Wn.length - 1)).slice(0, Wn.lastIndexOf("/") + 1), ti.slice(0, Wn.length) != Wn););
          }
        }
        var cr = (Kn[1] || "").match(/boundary="(.*?)"/);
        if (!cr) {
          throw new Error("MAD cannot find boundary");
        }
        var Er = "--" + (cr[1] || "");
        var ur = {
          FileIndex: [],
          FullPaths: []
        };
        Ln(ur);
        var gs;
        var Ds = 0;
        for (qn = 0; qn < Kn.length; ++qn) {
          var zo = Kn[qn];
          if (zo === Er || zo === Er + "--") {
            if (Ds++) {
              VA(ur, Kn.slice(gs, qn), Wn);
            }
            gs = qn;
          }
        }
        return ur;
      }(Mn, ei);
    }
    if (Mn.length < 512) {
      throw new Error("CFB file size " + Mn.length + " < 512");
    }
    var Wn;
    var qn;
    var ti;
    var cr;
    var Er;
    var ar;
    var Kn = 512;
    var rr = [];
    var ur = Mn.slice(0, 512);
    Vl(ur, 0);
    var gs = function Ft(Mn) {
      if (Mn[Mn.l] == 80 && Mn[Mn.l + 1] == 75) {
        return [0, 0];
      }
      Mn.chk(yo, "Header Signature: ");
      Mn.l += 16;
      var ei = Mn.read_shift(2, "u");
      return [Mn.read_shift(2, "u"), ei];
    }(ur);
    switch (Wn = gs[0]) {
      case 3:
        Kn = 512;
        break;
      case 4:
        Kn = 4096;
        break;
      case 0:
        if (gs[1] == 0) {
          return EE(Mn, ei);
        }
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + Wn);
    }
    if (Kn !== 512) {
      Vl(ur = Mn.slice(0, Kn), 28);
    }
    var Ds = Mn.slice(0, Kn);
    (function _t(Mn, ei) {
      var Wn;
      Mn.l += 2;
      switch (Wn = Mn.read_shift(2)) {
        case 9:
          if (ei != 3) {
            throw new Error("Sector Shift: Expected 9 saw " + Wn);
          }
          break;
        case 12:
          if (ei != 4) {
            throw new Error("Sector Shift: Expected 12 saw " + Wn);
          }
          break;
        default:
          throw new Error("Sector Shift: Expected 9 or 12 saw " + Wn);
      }
      Mn.chk("0600", "Mini Sector Shift: ");
      Mn.chk("000000000000", "Reserved: ");
    })(ur, Wn);
    var zo = ur.read_shift(4, "i");
    if (Wn === 3 && zo !== 0) {
      throw new Error("# Directory Sectors: Expected 0 saw " + zo);
    }
    ur.l += 4;
    cr = ur.read_shift(4, "i");
    ur.l += 4;
    ur.chk("00100000", "Mini Stream Cutoff Size: ");
    Er = ur.read_shift(4, "i");
    qn = ur.read_shift(4, "i");
    ar = ur.read_shift(4, "i");
    ti = ur.read_shift(4, "i");
    for (var Is = -1, fs = 0; fs < 109 && (Is = ur.read_shift(4, "i")) >= 0; ++fs) {
      rr[fs] = Is;
    }
    var al = function Ot(Mn, ei) {
      for (var Wn = Math.ceil(Mn.length / ei) - 1, Kn = [], qn = 1; qn < Wn; ++qn) {
        Kn[qn - 1] = Mn.slice(qn * ei, (qn + 1) * ei);
      }
      Kn[Wn - 1] = Mn.slice(Wn * ei);
      return Kn;
    }(Mn, Kn);
    Pt(ar, ti, al, Kn, rr);
    var gu = function yn(Mn, ei, Wn, Kn) {
      var qn = Mn.length;
      var ti = [];
      var cr = [];
      var Er = [];
      var ar = [];
      var rr = Kn - 1;
      var ur = 0;
      var gs = 0;
      var Ds = 0;
      var zo = 0;
      for (ur = 0; ur < qn; ++ur) {
        Er = [];
        if ((Ds = ur + ei) >= qn) {
          Ds -= qn;
        }
        if (!cr[Ds]) {
          ar = [];
          var Is = [];
          for (gs = Ds; gs >= 0;) {
            Is[gs] = true;
            cr[gs] = true;
            Er[Er.length] = gs;
            ar.push(Mn[gs]);
            var fs = Wn[Math.floor(gs * 4 / Kn)];
            if (Kn < 4 + (zo = gs * 4 & rr)) {
              throw new Error("FAT boundary crossed: " + gs + " 4 " + Kn);
            }
            if (!Mn[fs] || Is[gs = As(Mn[fs], zo)]) {
              break;
            }
          }
          ti[Ds] = {
            nodes: Er,
            data: Kl([ar])
          };
        }
      }
      return ti;
    }(al, cr, rr, Kn);
    if (cr < gu.length) {
      gu[cr].name = "!Directory";
    }
    if (qn > 0 && Er !== Dr) {
      gu[Er].name = "!MiniFAT";
    }
    gu[rr[0]].name = "!FAT";
    gu.fat_addrs = rr;
    gu.ssz = Kn;
    var Ud = [];
    var Yp = [];
    var A_ = [];
    (function un(Mn, ei, Wn, Kn, qn, ti, cr, Er) {
      for (var zo, ar = 0, rr = Kn.length ? 2 : 0, ur = ei[Mn].data, gs = 0, Ds = 0; gs < ur.length; gs += 128) {
        var Is = ur.slice(gs, gs + 128);
        Vl(Is, 64);
        Ds = Is.read_shift(2);
        zo = iu(Is, 0, Ds - rr);
        Kn.push(zo);
        var fs = {
          name: zo,
          type: Is.read_shift(1),
          color: Is.read_shift(1),
          L: Is.read_shift(4, "i"),
          R: Is.read_shift(4, "i"),
          C: Is.read_shift(4, "i"),
          clsid: Is.read_shift(16),
          state: Is.read_shift(4, "i"),
          start: 0,
          size: 0
        };
        if (Is.read_shift(2) + Is.read_shift(2) + Is.read_shift(2) + Is.read_shift(2) !== 0) {
          fs.ct = ai(Is, Is.l - 8);
        }
        if (Is.read_shift(2) + Is.read_shift(2) + Is.read_shift(2) + Is.read_shift(2) !== 0) {
          fs.mt = ai(Is, Is.l - 8);
        }
        fs.start = Is.read_shift(4, "i");
        fs.size = Is.read_shift(4, "i");
        if (fs.size < 0 && fs.start < 0) {
          fs.size = fs.type = 0;
          fs.start = Dr;
          fs.name = "";
        }
        if (fs.type === 5) {
          ar = fs.start;
          if (qn > 0 && ar !== Dr) {
            ei[ar].name = "!StreamData";
          }
        } else if (fs.size >= 4096) {
          fs.storage = "fat";
          if (ei[fs.start] === undefined) {
            ei[fs.start] = rn(Wn, fs.start, ei.fat_addrs, ei.ssz);
          }
          ei[fs.start].name = fs.name;
          fs.content = ei[fs.start].data.slice(0, fs.size);
        } else {
          fs.storage = "minifat";
          if (fs.size < 0) {
            fs.size = 0;
          } else if (ar !== Dr && fs.start !== Dr && ei[ar]) {
            fs.content = nn(fs, ei[ar].data, (ei[Er] || {}).data);
          }
        }
        if (fs.content) {
          Vl(fs.content, 0);
        }
        ti[zo] = fs;
        cr.push(fs);
      }
    })(cr, gu, al, Ud, qn, {}, Yp, Er);
    (function zt(Mn, ei, Wn) {
      for (var Kn = 0, qn = 0, ti = 0, cr = 0, Er = 0, ar = Wn.length, rr = [], ur = []; Kn < ar; ++Kn) {
        rr[Kn] = ur[Kn] = Kn;
        ei[Kn] = Wn[Kn];
      }
      for (; Er < ur.length; ++Er) {
        qn = Mn[Kn = ur[Er]].L;
        ti = Mn[Kn].R;
        cr = Mn[Kn].C;
        if (rr[Kn] === Kn) {
          if (qn !== -1 && rr[qn] !== qn) {
            rr[Kn] = rr[qn];
          }
          if (ti !== -1 && rr[ti] !== ti) {
            rr[Kn] = rr[ti];
          }
        }
        if (cr !== -1) {
          rr[cr] = Kn;
        }
        if (qn !== -1 && Kn != rr[Kn]) {
          rr[qn] = rr[Kn];
          if (ur.lastIndexOf(qn) < Er) {
            ur.push(qn);
          }
        }
        if (ti !== -1 && Kn != rr[Kn]) {
          rr[ti] = rr[Kn];
          if (ur.lastIndexOf(ti) < Er) {
            ur.push(ti);
          }
        }
      }
      for (Kn = 1; Kn < ar; ++Kn) {
        if (rr[Kn] === Kn) {
          if (ti !== -1 && rr[ti] !== ti) {
            rr[Kn] = rr[ti];
          } else if (qn !== -1 && rr[qn] !== qn) {
            rr[Kn] = rr[qn];
          }
        }
      }
      for (Kn = 1; Kn < ar; ++Kn) {
        if (Mn[Kn].type !== 0) {
          if ((Er = Kn) != rr[Er]) {
            do {
              ei[Kn] = ei[Er = rr[Er]] + "/" + ei[Kn];
            } while (Er !== 0 && rr[Er] !== -1 && Er != rr[Er]);
          }
          rr[Kn] = -1;
        }
      }
      ei[0] += "/";
      Kn = 1;
      for (; Kn < ar; ++Kn) {
        if (Mn[Kn].type !== 2) {
          ei[Kn] += "/";
        }
      }
    })(Yp, A_, Ud);
    Ud.shift();
    var n1 = {
      FileIndex: Yp,
      FullPaths: A_
    };
    if (ei && ei.raw) {
      n1.raw = {
        header: Ds,
        sectors: al
      };
    }
    return n1;
  }
  function nn(Mn, ei, Wn) {
    for (var qn = Mn.size, ti = [], cr = Mn.start; Wn && qn > 0 && cr >= 0;) {
      ti.push(ei.slice(cr * ji, cr * ji + ji));
      qn -= ji;
      cr = As(Wn, cr * 4);
    }
    if (ti.length === 0) {
      return Gi(0);
    } else {
      return St(ti).slice(0, Mn.size);
    }
  }
  function Pt(Mn, ei, Wn, Kn, qn) {
    var ti = Dr;
    if (Mn === Dr) {
      if (ei !== 0) {
        throw new Error("DIFAT chain shorter than expected");
      }
    } else if (Mn !== -1) {
      var cr = Wn[Mn];
      var Er = (Kn >>> 2) - 1;
      if (!cr) {
        return;
      }
      for (var ar = 0; ar < Er && (ti = As(cr, ar * 4)) !== Dr; ++ar) {
        qn.push(ti);
      }
      if (ei >= 1) {
        Pt(As(cr, Kn - 4), ei - 1, Wn, Kn, qn);
      }
    }
  }
  function rn(Mn, ei, Wn, Kn, qn) {
    var ti = [];
    var cr = [];
    qn ||= [];
    var Er = Kn - 1;
    var ar = 0;
    var rr = 0;
    for (ar = ei; ar >= 0;) {
      qn[ar] = true;
      ti[ti.length] = ar;
      cr.push(Mn[ar]);
      var ur = Wn[Math.floor(ar * 4 / Kn)];
      if (Kn < 4 + (rr = ar * 4 & Er)) {
        throw new Error("FAT boundary crossed: " + ar + " 4 " + Kn);
      }
      if (!Mn[ur]) {
        break;
      }
      ar = As(Mn[ur], rr);
    }
    return {
      nodes: ti,
      data: Kl([cr])
    };
  }
  function ai(Mn, ei) {
    return new Date((Hs(Mn, ei + 4) / 10000000 * Math.pow(2, 32) + Hs(Mn, ei) / 10000000 - 11644473600) * 1000);
  }
  function Ln(Mn, ei) {
    var Wn = ei || {};
    var Kn = Wn.root || "Root Entry";
    Mn.FullPaths ||= [];
    Mn.FileIndex ||= [];
    if (Mn.FullPaths.length !== Mn.FileIndex.length) {
      throw new Error("inconsistent CFB structure");
    }
    if (Mn.FullPaths.length === 0) {
      Mn.FullPaths[0] = Kn + "/";
      Mn.FileIndex[0] = {
        name: Kn,
        type: 5
      };
    }
    if (Wn.CLSID) {
      Mn.FileIndex[0].clsid = Wn.CLSID;
    }
    (function Jn(Mn) {
      var ei = "Sh33tJ5";
      if (!Fr.find(Mn, "/" + ei)) {
        var Wn = Gi(4);
        Wn[0] = 55;
        Wn[1] = Wn[3] = 50;
        Wn[2] = 54;
        Mn.FileIndex.push({
          name: ei,
          type: 2,
          content: Wn,
          size: 4,
          L: 69,
          R: 69,
          C: 69
        });
        Mn.FullPaths.push(Mn.FullPaths[0] + ei);
        yi(Mn);
      }
    })(Mn);
  }
  function yi(Mn, ei) {
    Ln(Mn);
    for (var Wn = false, Kn = false, qn = Mn.FullPaths.length - 1; qn >= 0; --qn) {
      var ti = Mn.FileIndex[qn];
      switch (ti.type) {
        case 0:
          if (Kn) {
            Wn = true;
          } else {
            Mn.FileIndex.pop();
            Mn.FullPaths.pop();
          }
          break;
        case 1:
        case 2:
        case 5:
          Kn = true;
          if (isNaN(ti.R * ti.L * ti.C)) {
            Wn = true;
          }
          if (ti.R > -1 && ti.L > -1 && ti.R == ti.L) {
            Wn = true;
          }
          break;
        default:
          Wn = true;
      }
    }
    if (Wn || ei) {
      var cr = new Date(1987, 1, 19);
      var Er = 0;
      var ar = Object.create ? Object.create(null) : {};
      var rr = [];
      for (qn = 0; qn < Mn.FullPaths.length; ++qn) {
        ar[Mn.FullPaths[qn]] = true;
        if (Mn.FileIndex[qn].type !== 0) {
          rr.push([Mn.FullPaths[qn], Mn.FileIndex[qn]]);
        }
      }
      for (qn = 0; qn < rr.length; ++qn) {
        var ur = p(rr[qn][0]);
        for (Kn = ar[ur]; !Kn;) {
          for (; p(ur) && !ar[p(ur)];) {
            ur = p(ur);
          }
          rr.push([ur, {
            name: _(ur).replace("/", ""),
            type: 1,
            clsid: ra,
            ct: cr,
            mt: cr,
            content: null
          }]);
          ar[ur] = true;
          Kn = ar[ur = p(rr[qn][0])];
        }
      }
      rr.sort(function (zo, Is) {
        return function o(Mn, ei) {
          for (var Wn = Mn.split("/"), Kn = ei.split("/"), qn = 0, ti = 0, cr = Math.min(Wn.length, Kn.length); qn < cr; ++qn) {
            if (ti = Wn[qn].length - Kn[qn].length) {
              return ti;
            }
            if (Wn[qn] != Kn[qn]) {
              if (Wn[qn] < Kn[qn]) {
                return -1;
              } else {
                return 1;
              }
            }
          }
          return Wn.length - Kn.length;
        }(zo[0], Is[0]);
      });
      Mn.FullPaths = [];
      Mn.FileIndex = [];
      qn = 0;
      for (; qn < rr.length; ++qn) {
        Mn.FullPaths[qn] = rr[qn][0];
        Mn.FileIndex[qn] = rr[qn][1];
      }
      for (qn = 0; qn < rr.length; ++qn) {
        var gs = Mn.FileIndex[qn];
        var Ds = Mn.FullPaths[qn];
        gs.name = _(Ds).replace("/", "");
        gs.L = gs.R = gs.C = -(gs.color = 1);
        gs.size = gs.content ? gs.content.length : 0;
        gs.start = 0;
        gs.clsid = gs.clsid || ra;
        if (qn === 0) {
          gs.C = rr.length > 1 ? 1 : -1;
          gs.size = 0;
          gs.type = 5;
        } else if (Ds.slice(-1) == "/") {
          for (Er = qn + 1; Er < rr.length && p(Mn.FullPaths[Er]) != Ds; ++Er);
          gs.C = Er >= rr.length ? -1 : Er;
          Er = qn + 1;
          for (; Er < rr.length && p(Mn.FullPaths[Er]) != p(Ds); ++Er);
          gs.R = Er >= rr.length ? -1 : Er;
          gs.type = 1;
        } else {
          if (p(Mn.FullPaths[qn + 1] || "") == p(Ds)) {
            gs.R = qn + 1;
          }
          gs.type = 2;
        }
      }
    }
  }
  function mi(Mn, ei) {
    var Wn = ei || {};
    if (Wn.fileType == "mad") {
      return function cx(Mn, ei) {
        for (var Wn = ei || {}, Kn = Wn.boundary || "SheetJS", qn = ["MIME-Version: 1.0", "Content-Type: multipart/related; boundary=\"" + (Kn = "------=" + Kn).slice(2) + "\"", "", "", ""], ti = Mn.FullPaths[0], cr = ti, Er = Mn.FileIndex[0], ar = 1; ar < Mn.FullPaths.length; ++ar) {
          cr = Mn.FullPaths[ar].slice(ti.length);
          if ((Er = Mn.FileIndex[ar]).size && Er.content && cr != "Sh33tJ5") {
            cr = cr.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (al) {
              return "_x" + al.charCodeAt(0).toString(16) + "_";
            }).replace(/[\u0080-\uFFFF]/g, function (al) {
              return "_u" + al.charCodeAt(0).toString(16) + "_";
            });
            for (var rr = Er.content, ur = ke && Buffer.isBuffer(rr) ? rr.toString("binary") : Ul(rr), gs = 0, Ds = Math.min(1024, ur.length), zo = 0, Is = 0; Is <= Ds; ++Is) {
              if ((zo = ur.charCodeAt(Is)) >= 32 && zo < 128) {
                ++gs;
              }
            }
            var fs = gs >= Ds * 4 / 5;
            qn.push(Kn);
            qn.push("Content-Location: " + (Wn.root || "file:///C:/SheetJS/") + cr);
            qn.push("Content-Transfer-Encoding: " + (fs ? "quoted-printable" : "base64"));
            qn.push("Content-Type: " + UA(Er, cr));
            qn.push("");
            qn.push(fs ? kb(ur) : Fb(ur));
          }
        }
        qn.push(Kn + "--\r\n");
        return qn.join("\r\n");
      }(Mn, Wn);
    }
    if ((yi(Mn), Wn.fileType) === "zip") {
      return function H1(Mn, ei) {
        var Wn = ei || {};
        var Kn = [];
        var qn = [];
        var ti = Gi(1);
        var cr = Wn.compression ? 8 : 0;
        var rr = 0;
        var ur = 0;
        var gs = 0;
        var Ds = 0;
        var zo = Mn.FullPaths[0];
        var Is = zo;
        var fs = Mn.FileIndex[0];
        var al = [];
        var gu = 0;
        for (rr = 1; rr < Mn.FullPaths.length; ++rr) {
          Is = Mn.FullPaths[rr].slice(zo.length);
          if ((fs = Mn.FileIndex[rr]).size && fs.content && Is != "Sh33tJ5") {
            var lp = gs;
            var Ud = Gi(Is.length);
            for (ur = 0; ur < Is.length; ++ur) {
              Ud.write_shift(1, Is.charCodeAt(ur) & 127);
            }
            Ud = Ud.slice(0, Ud.l);
            al[Ds] = typeof fs.content == "string" ? ta.bstr(fs.content, 0) : ta.buf(fs.content, 0);
            var Yp = typeof fs.content == "string" ? Yt(fs.content) : fs.content;
            if (cr == 8) {
              Yp = as(Yp);
            }
            (ti = Gi(30)).write_shift(4, 67324752);
            ti.write_shift(2, 20);
            ti.write_shift(2, 0);
            ti.write_shift(2, cr);
            if (fs.mt) {
              V(ti, fs.mt);
            } else {
              ti.write_shift(4, 0);
            }
            ti.write_shift(-4, al[Ds]);
            ti.write_shift(4, Yp.length);
            ti.write_shift(4, fs.content.length);
            ti.write_shift(2, Ud.length);
            ti.write_shift(2, 0);
            gs += ti.length;
            Kn.push(ti);
            gs += Ud.length;
            Kn.push(Ud);
            gs += Yp.length;
            Kn.push(Yp);
            (ti = Gi(46)).write_shift(4, 33639248);
            ti.write_shift(2, 0);
            ti.write_shift(2, 20);
            ti.write_shift(2, 0);
            ti.write_shift(2, cr);
            ti.write_shift(4, 0);
            ti.write_shift(-4, al[Ds]);
            ti.write_shift(4, Yp.length);
            ti.write_shift(4, fs.content.length);
            ti.write_shift(2, Ud.length);
            ti.write_shift(2, 0);
            ti.write_shift(2, 0);
            ti.write_shift(2, 0);
            ti.write_shift(2, 0);
            ti.write_shift(4, 0);
            ti.write_shift(4, lp);
            gu += ti.l;
            qn.push(ti);
            gu += Ud.length;
            qn.push(Ud);
            ++Ds;
          }
        }
        (ti = Gi(22)).write_shift(4, 101010256);
        ti.write_shift(2, 0);
        ti.write_shift(2, 0);
        ti.write_shift(2, Ds);
        ti.write_shift(2, Ds);
        ti.write_shift(4, gu);
        ti.write_shift(4, gs);
        ti.write_shift(2, 0);
        return St([St(Kn), St(qn), ti]);
      }(Mn, Wn);
    }
    var Kn = function (zo) {
      for (var Is = 0, fs = 0, al = 0; al < zo.FileIndex.length; ++al) {
        var gu = zo.FileIndex[al];
        if (gu.content) {
          var lp = gu.content.length;
          if (lp > 0) {
            if (lp < 4096) {
              Is += lp + 63 >> 6;
            } else {
              fs += lp + 511 >> 9;
            }
          }
        }
      }
      for (var Ud = zo.FullPaths.length + 3 >> 2, A_ = Is + 127 >> 7, n1 = (Is + 7 >> 3) + fs + Ud + A_, Wy = n1 + 127 >> 7, AE = Wy <= 109 ? 0 : Math.ceil((Wy - 109) / 127); n1 + Wy + AE + 127 >> 7 > Wy;) {
        AE = ++Wy <= 109 ? 0 : Math.ceil((Wy - 109) / 127);
      }
      var l0 = [1, AE, Wy, A_, Ud, fs, Is, 0];
      zo.FileIndex[0].size = Is << 6;
      l0[7] = (zo.FileIndex[0].start = l0[0] + l0[1] + l0[2] + l0[3] + l0[4] + l0[5]) + (l0[6] + 7 >> 3);
      return l0;
    }(Mn);
    var qn = Gi(Kn[7] << 9);
    var ti = 0;
    var cr = 0;
    for (ti = 0; ti < 8; ++ti) {
      qn.write_shift(1, _s[ti]);
    }
    for (ti = 0; ti < 8; ++ti) {
      qn.write_shift(2, 0);
    }
    qn.write_shift(2, 62);
    qn.write_shift(2, 3);
    qn.write_shift(2, 65534);
    qn.write_shift(2, 9);
    qn.write_shift(2, 6);
    ti = 0;
    for (; ti < 3; ++ti) {
      qn.write_shift(2, 0);
    }
    qn.write_shift(4, 0);
    qn.write_shift(4, Kn[2]);
    qn.write_shift(4, Kn[0] + Kn[1] + Kn[2] + Kn[3] - 1);
    qn.write_shift(4, 0);
    qn.write_shift(4, 4096);
    qn.write_shift(4, Kn[3] ? Kn[0] + Kn[1] + Kn[2] - 1 : Dr);
    qn.write_shift(4, Kn[3]);
    qn.write_shift(-4, Kn[1] ? Kn[0] - 1 : Dr);
    qn.write_shift(4, Kn[1]);
    ti = 0;
    for (; ti < 109; ++ti) {
      qn.write_shift(-4, ti < Kn[2] ? Kn[1] + ti : -1);
    }
    if (Kn[1]) {
      for (cr = 0; cr < Kn[1]; ++cr) {
        for (; ti < 236 + cr * 127; ++ti) {
          qn.write_shift(-4, ti < Kn[2] ? Kn[1] + ti : -1);
        }
        qn.write_shift(-4, cr === Kn[1] - 1 ? Dr : cr + 1);
      }
    }
    function Er(zo) {
      for (cr += zo; ti < cr - 1; ++ti) {
        qn.write_shift(-4, ti + 1);
      }
      if (zo) {
        ++ti;
        qn.write_shift(-4, Dr);
      }
    }
    cr = ti = 0;
    cr += Kn[1];
    for (; ti < cr; ++ti) {
      qn.write_shift(-4, ds.DIFSECT);
    }
    for (cr += Kn[2]; ti < cr; ++ti) {
      qn.write_shift(-4, ds.FATSECT);
    }
    Er(Kn[3]);
    Er(Kn[4]);
    for (var ar = 0, rr = 0, ur = Mn.FileIndex[0]; ar < Mn.FileIndex.length; ++ar) {
      if ((ur = Mn.FileIndex[ar]).content && (rr = ur.content.length) >= 4096) {
        ur.start = cr;
        Er(rr + 511 >> 9);
      }
    }
    for (Er(Kn[6] + 7 >> 3); qn.l & 511;) {
      qn.write_shift(-4, ds.ENDOFCHAIN);
    }
    cr = ti = 0;
    ar = 0;
    for (; ar < Mn.FileIndex.length; ++ar) {
      if ((ur = Mn.FileIndex[ar]).content && (rr = ur.content.length) && rr < 4096) {
        ur.start = cr;
        Er(rr + 63 >> 6);
      }
    }
    for (; qn.l & 511;) {
      qn.write_shift(-4, ds.ENDOFCHAIN);
    }
    for (ti = 0; ti < Kn[4] << 2; ++ti) {
      var gs = Mn.FullPaths[ti];
      if (gs && gs.length !== 0) {
        ur = Mn.FileIndex[ti];
        if (ti === 0) {
          ur.start = ur.size ? ur.start - 1 : Dr;
        }
        var Ds = ti === 0 && Wn.root || ur.name;
        if (Ds.length > 32) {
          console.error("Name " + Ds + " will be truncated to " + Ds.slice(0, 32));
          Ds = Ds.slice(0, 32);
        }
        rr = (Ds.length + 1) * 2;
        qn.write_shift(64, Ds, "utf16le");
        qn.write_shift(2, rr);
        qn.write_shift(1, ur.type);
        qn.write_shift(1, ur.color);
        qn.write_shift(-4, ur.L);
        qn.write_shift(-4, ur.R);
        qn.write_shift(-4, ur.C);
        if (ur.clsid) {
          qn.write_shift(16, ur.clsid, "hex");
        } else {
          for (ar = 0; ar < 4; ++ar) {
            qn.write_shift(4, 0);
          }
        }
        qn.write_shift(4, ur.state || 0);
        qn.write_shift(4, 0);
        qn.write_shift(4, 0);
        qn.write_shift(4, 0);
        qn.write_shift(4, 0);
        qn.write_shift(4, ur.start);
        qn.write_shift(4, ur.size);
        qn.write_shift(4, 0);
      } else {
        for (ar = 0; ar < 17; ++ar) {
          qn.write_shift(4, 0);
        }
        for (ar = 0; ar < 3; ++ar) {
          qn.write_shift(4, -1);
        }
        for (ar = 0; ar < 12; ++ar) {
          qn.write_shift(4, 0);
        }
      }
    }
    for (ti = 1; ti < Mn.FileIndex.length; ++ti) {
      if ((ur = Mn.FileIndex[ti]).size >= 4096) {
        qn.l = ur.start + 1 << 9;
        if (ke && Buffer.isBuffer(ur.content)) {
          ur.content.copy(qn, qn.l, 0, ur.size);
          qn.l += ur.size + 511 & -512;
        } else {
          for (ar = 0; ar < ur.size; ++ar) {
            qn.write_shift(1, ur.content[ar]);
          }
          for (; ar & 511; ++ar) {
            qn.write_shift(1, 0);
          }
        }
      }
    }
    for (ti = 1; ti < Mn.FileIndex.length; ++ti) {
      if ((ur = Mn.FileIndex[ti]).size > 0 && ur.size < 4096) {
        if (ke && Buffer.isBuffer(ur.content)) {
          ur.content.copy(qn, qn.l, 0, ur.size);
          qn.l += ur.size + 63 & -64;
        } else {
          for (ar = 0; ar < ur.size; ++ar) {
            qn.write_shift(1, ur.content[ar]);
          }
          for (; ar & 63; ++ar) {
            qn.write_shift(1, 0);
          }
        }
      }
    }
    if (ke) {
      qn.l = qn.length;
    } else {
      for (; qn.l < qn.length;) {
        qn.write_shift(1, 0);
      }
    }
    return qn;
  }
  c.version = "1.2.2";
  var Ba;
  var ji = 64;
  var Dr = -2;
  var yo = "d0cf11e0a1b11ae1";
  var _s = [208, 207, 17, 224, 161, 177, 26, 225];
  var ra = "00000000000000000000000000000000";
  var ds = {
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: Dr,
    FREESECT: -1,
    HEADER_SIGNATURE: yo,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: ra,
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function Ul(Mn) {
    for (var ei = new Array(Mn.length), Wn = 0; Wn < Mn.length; ++Wn) {
      ei[Wn] = String.fromCharCode(Mn[Wn]);
    }
    return ei.join("");
  }
  function as(Mn) {
    if (Ba) {
      return Ba.deflateRawSync(Mn);
    } else {
      return Wp(Mn);
    }
  }
  for (var Mn, ei, Lo = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Ro = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], va = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], Pi = typeof Uint8Array !== "undefined", bi = Pi ? new Uint8Array(256) : [], vi = 0; vi < 256; ++vi) {
    undefined;
    bi[vi] = ((ei = ((Mn = vi) << 1 | Mn << 11) & 139536 | (Mn << 5 | Mn << 15) & 558144) >> 16 | ei >> 8 | ei) & 255;
  }
  function Cr(Mn, ei) {
    var Wn = bi[Mn & 255];
    if (ei <= 8) {
      return Wn >>> 8 - ei;
    } else {
      Wn = Wn << 8 | bi[Mn >> 8 & 255];
      if (ei <= 16) {
        return Wn >>> 16 - ei;
      } else {
        return (Wn = Wn << 8 | bi[Mn >> 16 & 255]) >>> 24 - ei;
      }
    }
  }
  function jn(Mn, ei) {
    var Wn = ei & 7;
    var Kn = ei >>> 3;
    return (Mn[Kn] | (Wn <= 6 ? 0 : Mn[Kn + 1] << 8)) >>> Wn & 3;
  }
  function fo(Mn, ei) {
    var Wn = ei & 7;
    var Kn = ei >>> 3;
    return (Mn[Kn] | (Wn <= 5 ? 0 : Mn[Kn + 1] << 8)) >>> Wn & 7;
  }
  function ps(Mn, ei) {
    var Wn = ei & 7;
    var Kn = ei >>> 3;
    return (Mn[Kn] | (Wn <= 3 ? 0 : Mn[Kn + 1] << 8)) >>> Wn & 31;
  }
  function $a(Mn, ei) {
    var Wn = ei & 7;
    var Kn = ei >>> 3;
    return (Mn[Kn] | (Wn <= 1 ? 0 : Mn[Kn + 1] << 8)) >>> Wn & 127;
  }
  function ul(Mn, ei, Wn) {
    var Kn = ei & 7;
    var qn = ei >>> 3;
    var cr = Mn[qn] >>> Kn;
    if (Wn >= 8 - Kn && !(cr |= Mn[qn + 1] << 8 - Kn, Wn < 16 - Kn) && !(cr |= Mn[qn + 2] << 16 - Kn, Wn < 24 - Kn)) {
      cr |= Mn[qn + 3] << 24 - Kn;
    }
    return cr & (1 << Wn) - 1;
  }
  function no(Mn, ei, Wn) {
    var Kn = ei & 7;
    var qn = ei >>> 3;
    if (Kn <= 5) {
      Mn[qn] |= (Wn & 7) << Kn;
    } else {
      Mn[qn] |= Wn << Kn & 255;
      Mn[qn + 1] = (Wn & 7) >> 8 - Kn;
    }
    return ei + 3;
  }
  function Lc(Mn, ei, Wn) {
    Mn[ei >>> 3] |= Wn = (Wn & 1) << (ei & 7);
    return ei + 1;
  }
  function xc(Mn, ei, Wn) {
    var qn = ei >>> 3;
    Mn[qn] |= (Wn <<= ei & 7) & 255;
    Mn[qn + 1] = Wn >>>= 8;
    return ei + 8;
  }
  function Vc(Mn, ei, Wn) {
    var qn = ei >>> 3;
    Mn[qn] |= (Wn <<= ei & 7) & 255;
    Mn[qn + 1] = (Wn >>>= 8) & 255;
    Mn[qn + 2] = Wn >>> 8;
    return ei + 16;
  }
  function lh(Mn, ei) {
    var Wn = Mn.length;
    var Kn = Wn * 2 > ei ? Wn * 2 : ei + 5;
    var qn = 0;
    if (Wn >= ei) {
      return Mn;
    }
    if (ke) {
      var ti = It(Kn);
      if (Mn.copy) {
        Mn.copy(ti);
      } else {
        for (; qn < Mn.length; ++qn) {
          ti[qn] = Mn[qn];
        }
      }
      return ti;
    }
    if (Pi) {
      var cr = new Uint8Array(Kn);
      if (cr.set) {
        cr.set(Mn);
      } else {
        for (; qn < Wn; ++qn) {
          cr[qn] = Mn[qn];
        }
      }
      return cr;
    }
    Mn.length = Kn;
    return Mn;
  }
  function Fs(Mn) {
    for (var ei = new Array(Mn), Wn = 0; Wn < Mn; ++Wn) {
      ei[Wn] = 0;
    }
    return ei;
  }
  function Us(Mn, ei, Wn) {
    var Kn = 1;
    var qn = 0;
    var ti = 0;
    var cr = 0;
    var Er = 0;
    var ar = Mn.length;
    var rr = Pi ? new Uint16Array(32) : Fs(32);
    for (ti = 0; ti < 32; ++ti) {
      rr[ti] = 0;
    }
    for (ti = ar; ti < Wn; ++ti) {
      Mn[ti] = 0;
    }
    ar = Mn.length;
    var ur = Pi ? new Uint16Array(ar) : Fs(ar);
    for (ti = 0; ti < ar; ++ti) {
      rr[qn = Mn[ti]]++;
      if (Kn < qn) {
        Kn = qn;
      }
      ur[ti] = 0;
    }
    rr[0] = 0;
    ti = 1;
    for (; ti <= Kn; ++ti) {
      rr[ti + 16] = Er = Er + rr[ti - 1] << 1;
    }
    for (ti = 0; ti < ar; ++ti) {
      if ((Er = Mn[ti]) != 0) {
        ur[ti] = rr[Er + 16]++;
      }
    }
    var gs = 0;
    for (ti = 0; ti < ar; ++ti) {
      if ((gs = Mn[ti]) != 0) {
        Er = Cr(ur[ti], Kn) >> Kn - gs;
        cr = (1 << Kn + 4 - gs) - 1;
        Er = Cr(ur[ti], Kn) >> Kn - gs;
        cr = (1 << Kn + 4 - gs) - 1;
        for (; cr >= 0; --cr) {
          ei[Er | cr << gs] = gs & 15 | ti << 4;
        }
      }
    }
    return Kn;
  }
  var Hp = Pi ? new Uint16Array(512) : Fs(512);
  var Nf = Pi ? new Uint16Array(32) : Fs(32);
  if (!Pi) {
    for (var Cd = 0; Cd < 512; ++Cd) {
      Hp[Cd] = 0;
    }
    for (Cd = 0; Cd < 32; ++Cd) {
      Nf[Cd] = 0;
    }
  }
  (function () {
    for (var Mn = [], ei = 0; ei < 32; ei++) {
      Mn.push(5);
    }
    Us(Mn, Nf, 32);
    var Wn = [];
    for (ei = 0; ei <= 143; ei++) {
      Wn.push(8);
    }
    for (; ei <= 255; ei++) {
      Wn.push(9);
    }
    for (; ei <= 279; ei++) {
      Wn.push(7);
    }
    for (; ei <= 287; ei++) {
      Wn.push(8);
    }
    Us(Wn, Hp, 288);
  })();
  var Uf = function () {
    for (var ei = Pi ? new Uint8Array(32768) : [], Wn = 0, Kn = 0; Wn < va.length - 1; ++Wn) {
      for (; Kn < va[Wn + 1]; ++Kn) {
        ei[Kn] = Wn;
      }
    }
    for (; Kn < 32768; ++Kn) {
      ei[Kn] = 29;
    }
    var qn = Pi ? new Uint8Array(259) : [];
    Wn = 0;
    Kn = 0;
    for (; Wn < Ro.length - 1; ++Wn) {
      for (; Kn < Ro[Wn + 1]; ++Kn) {
        qn[Kn] = Wn;
      }
    }
    return function (ar, rr) {
      if (ar.length < 8) {
        return function ti(Er, ar) {
          for (var rr = 0; rr < Er.length;) {
            var ur = Math.min(65535, Er.length - rr);
            ar.write_shift(1, +(rr + ur == Er.length));
            ar.write_shift(2, ur);
            ar.write_shift(2, ~ur & 65535);
            for (; ur-- > 0;) {
              ar[ar.l++] = Er[rr++];
            }
          }
          return ar.l;
        }(ar, rr);
      } else {
        return function cr(Er, ar) {
          for (var rr = 0, ur = 0, gs = Pi ? new Uint16Array(32768) : []; ur < Er.length;) {
            var Ds = Math.min(65535, Er.length - ur);
            if (Ds < 10) {
              if ((rr = no(ar, rr, +(ur + Ds == Er.length))) & 7) {
                rr += 8 - (rr & 7);
              }
              ar.l = rr / 8 | 0;
              ar.write_shift(2, Ds);
              ar.write_shift(2, ~Ds & 65535);
              for (; Ds-- > 0;) {
                ar[ar.l++] = Er[ur++];
              }
              rr = ar.l * 8;
            } else {
              rr = no(ar, rr, +(ur + Ds == Er.length) + 2);
              for (var zo = 0; Ds-- > 0;) {
                var Is = Er[ur];
                var fs = -1;
                var al = 0;
                if ((fs = gs[zo = (zo << 5 ^ Is) & 32767]) && ((fs |= ur & -32768) > ur && (fs -= 32768), fs < ur)) {
                  for (; Er[fs + al] == Er[ur + al] && al < 250;) {
                    ++al;
                  }
                }
                if (al > 2) {
                  if ((Is = qn[al]) <= 22) {
                    rr = xc(ar, rr, bi[Is + 1] >> 1) - 1;
                  } else {
                    xc(ar, rr, 3);
                    xc(ar, rr += 5, bi[Is - 23] >> 5);
                    rr += 3;
                  }
                  var gu = Is < 8 ? 0 : Is - 4 >> 2;
                  if (gu > 0) {
                    Vc(ar, rr, al - Ro[Is]);
                    rr += gu;
                  }
                  rr = xc(ar, rr, bi[Is = ei[ur - fs]] >> 3);
                  rr -= 3;
                  var lp = Is < 4 ? 0 : Is - 2 >> 1;
                  if (lp > 0) {
                    Vc(ar, rr, ur - fs - va[Is]);
                    rr += lp;
                  }
                  for (var Ud = 0; Ud < al; ++Ud) {
                    gs[zo] = ur & 32767;
                    zo = (zo << 5 ^ Er[ur]) & 32767;
                    ++ur;
                  }
                  Ds -= al - 1;
                } else {
                  if (Is <= 143) {
                    Is += 48;
                  } else {
                    rr = Lc(ar, rr, 1);
                  }
                  rr = xc(ar, rr, bi[Is]);
                  gs[zo] = ur & 32767;
                  ++ur;
                }
              }
              rr = xc(ar, rr, 0) - 1;
            }
          }
          ar.l = (rr + 7) / 8 | 0;
          return ar.l;
        }(ar, rr);
      }
    };
  }();
  function Wp(Mn) {
    var ei = Gi(50 + Math.floor(Mn.length * 1.1));
    var Wn = Uf(Mn, ei);
    return ei.slice(0, Wn);
  }
  var Sl = Pi ? new Uint16Array(32768) : Fs(32768);
  var Xa = Pi ? new Uint16Array(32768) : Fs(32768);
  var nu = Pi ? new Uint16Array(128) : Fs(128);
  var wu = 1;
  var Hg = 1;
  function a0(Mn, ei) {
    var Wn = ps(Mn, ei) + 257;
    var Kn = ps(Mn, ei += 5) + 1;
    var qn = function Ms(Mn, ei) {
      var Wn = ei & 7;
      var Kn = ei >>> 3;
      return (Mn[Kn] | (Wn <= 4 ? 0 : Mn[Kn + 1] << 8)) >>> Wn & 15;
    }(Mn, ei += 5) + 4;
    ei += 4;
    for (var ti = 0, cr = Pi ? new Uint8Array(19) : Fs(19), Er = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ar = 1, rr = Pi ? new Uint8Array(8) : Fs(8), ur = Pi ? new Uint8Array(8) : Fs(8), gs = cr.length, Ds = 0; Ds < qn; ++Ds) {
      cr[Lo[Ds]] = ti = fo(Mn, ei);
      if (ar < ti) {
        ar = ti;
      }
      rr[ti]++;
      ei += 3;
    }
    var zo = 0;
    rr[0] = 0;
    Ds = 1;
    for (; Ds <= ar; ++Ds) {
      ur[Ds] = zo = zo + rr[Ds - 1] << 1;
    }
    for (Ds = 0; Ds < gs; ++Ds) {
      if ((zo = cr[Ds]) != 0) {
        Er[Ds] = ur[zo]++;
      }
    }
    var Is = 0;
    for (Ds = 0; Ds < gs; ++Ds) {
      if ((Is = cr[Ds]) != 0) {
        zo = bi[Er[Ds]] >> 8 - Is;
        for (var fs = (1 << 7 - Is) - 1; fs >= 0; --fs) {
          nu[zo | fs << Is] = Is & 7 | Ds << 3;
        }
      }
    }
    var al = [];
    for (ar = 1; al.length < Wn + Kn;) {
      zo = nu[$a(Mn, ei)];
      ei += zo & 7;
      switch (zo >>>= 3) {
        case 16:
          ti = 3 + jn(Mn, ei);
          ei += 2;
          zo = al[al.length - 1];
          for (; ti-- > 0;) {
            al.push(zo);
          }
          break;
        case 17:
          ti = 3 + fo(Mn, ei);
          ei += 3;
          for (; ti-- > 0;) {
            al.push(0);
          }
          break;
        case 18:
          ti = 11 + $a(Mn, ei);
          ei += 7;
          for (; ti-- > 0;) {
            al.push(0);
          }
          break;
        default:
          al.push(zo);
          if (ar < zo) {
            ar = zo;
          }
      }
    }
    var gu = al.slice(0, Wn);
    var lp = al.slice(Wn);
    for (Ds = Wn; Ds < 286; ++Ds) {
      gu[Ds] = 0;
    }
    for (Ds = Kn; Ds < 30; ++Ds) {
      lp[Ds] = 0;
    }
    wu = Us(gu, Sl, 286);
    Hg = Us(lp, Xa, 30);
    return ei;
  }
  function b_(Mn, ei) {
    var Kn = function Q0(Mn, ei) {
      if (Mn[0] == 3 && !(Mn[1] & 3)) {
        return [Qe(ei), 2];
      }
      for (var Wn = 0, Kn = 0, qn = It(ei || 1 << 18), ti = 0, cr = qn.length >>> 0, Er = 0, ar = 0; (Kn & 1) == 0;) {
        Kn = fo(Mn, Wn);
        Wn += 3;
        if (Kn >>> 1 != 0) {
          for (Kn >> 1 == 1 ? (Er = 9, ar = 5) : (Wn = a0(Mn, Wn), Er = wu, ar = Hg);;) {
            if (!ei && cr < ti + 32767) {
              cr = (qn = lh(qn, ti + 32767)).length;
            }
            var ur = ul(Mn, Wn, Er);
            var gs = Kn >>> 1 == 1 ? Hp[ur] : Sl[ur];
            Wn += gs & 15;
            if (((gs >>>= 4) >>> 8 & 255) == 0) {
              qn[ti++] = gs;
            } else {
              if (gs == 256) {
                break;
              }
              var Ds = (gs -= 257) < 8 ? 0 : gs - 4 >> 2;
              if (Ds > 5) {
                Ds = 0;
              }
              var zo = ti + Ro[gs];
              if (Ds > 0) {
                zo += ul(Mn, Wn, Ds);
                Wn += Ds;
              }
              ur = ul(Mn, Wn, ar);
              Wn += (gs = Kn >>> 1 == 1 ? Nf[ur] : Xa[ur]) & 15;
              var Is = (gs >>>= 4) < 4 ? 0 : gs - 2 >> 1;
              var fs = va[gs];
              if (Is > 0) {
                fs += ul(Mn, Wn, Is);
                Wn += Is;
              }
              if (!ei && cr < zo) {
                cr = (qn = lh(qn, zo + 100)).length;
              }
              for (; ti < zo;) {
                qn[ti] = qn[ti - fs];
                ++ti;
              }
            }
          }
        } else {
          if (Wn & 7) {
            Wn += 8 - (Wn & 7);
          }
          var rr = Mn[Wn >>> 3] | Mn[1 + (Wn >>> 3)] << 8;
          Wn += 32;
          if (rr > 0) {
            for (!ei && cr < ti + rr && (cr = (qn = lh(qn, ti + rr)).length); rr-- > 0;) {
              qn[ti++] = Mn[Wn >>> 3];
              Wn += 8;
            }
          }
        }
      }
      if (ei) {
        return [qn, Wn + 7 >>> 3];
      } else {
        return [qn.slice(0, ti), Wn + 7 >>> 3];
      }
    }(Mn.slice(Mn.l || 0), ei);
    Mn.l += Kn[1];
    return Kn[0];
  }
  function _E(Mn, ei) {
    if (!Mn) {
      throw new Error(ei);
    }
    if (typeof console !== "undefined") {
      console.error(ei);
    }
  }
  function EE(Mn, ei) {
    var Wn = Mn;
    Vl(Wn, 0);
    var ti = {
      FileIndex: [],
      FullPaths: []
    };
    Ln(ti, {
      root: ei.root
    });
    for (var cr = Wn.length - 4; (Wn[cr] != 80 || Wn[cr + 1] != 75 || Wn[cr + 2] != 5 || Wn[cr + 3] != 6) && cr >= 0;) {
      --cr;
    }
    Wn.l = cr + 4;
    Wn.l += 4;
    var Er = Wn.read_shift(2);
    Wn.l += 6;
    var ar = Wn.read_shift(4);
    Wn.l = ar;
    cr = 0;
    for (; cr < Er; ++cr) {
      Wn.l += 20;
      var rr = Wn.read_shift(4);
      var ur = Wn.read_shift(4);
      var gs = Wn.read_shift(2);
      var Ds = Wn.read_shift(2);
      var zo = Wn.read_shift(2);
      Wn.l += 8;
      var Is = Wn.read_shift(4);
      var fs = ee(Wn.slice(Wn.l + gs, Wn.l + gs + Ds));
      Wn.l += gs + Ds + zo;
      var al = Wn.l;
      Wn.l = Is + 4;
      if (fs && fs[1]) {
        if ((fs[1] || {}).usz) {
          ur = fs[1].usz;
        }
        if ((fs[1] || {}).csz) {
          rr = fs[1].csz;
        }
      }
      V1(Wn, rr, ur, ti, fs);
      Wn.l = al;
    }
    return ti;
  }
  function V1(Mn, ei, Wn, Kn, qn) {
    Mn.l += 2;
    var ti = Mn.read_shift(2);
    var cr = Mn.read_shift(2);
    var Er = function Y(Mn) {
      var ei = Mn.read_shift(2) & 65535;
      var Wn = Mn.read_shift(2) & 65535;
      var Kn = new Date();
      var qn = Wn & 31;
      var ti = (Wn >>>= 5) & 15;
      Wn >>>= 4;
      Kn.setMilliseconds(0);
      Kn.setFullYear(Wn + 1980);
      Kn.setMonth(ti - 1);
      Kn.setDate(qn);
      var cr = ei & 31;
      var Er = (ei >>>= 5) & 63;
      Kn.setHours(ei >>>= 6);
      Kn.setMinutes(Er);
      Kn.setSeconds(cr << 1);
      return Kn;
    }(Mn);
    if (ti & 8257) {
      throw new Error("Unsupported ZIP encryption");
    }
    Mn.read_shift(4);
    for (var rr = Mn.read_shift(4), ur = Mn.read_shift(4), gs = Mn.read_shift(2), Ds = Mn.read_shift(2), zo = "", Is = 0; Is < gs; ++Is) {
      zo += String.fromCharCode(Mn[Mn.l++]);
    }
    if (Ds) {
      var fs = ee(Mn.slice(Mn.l, Mn.l + Ds));
      if ((fs[21589] || {}).mt) {
        Er = fs[21589].mt;
      }
      if ((fs[1] || {}).usz) {
        ur = fs[1].usz;
      }
      if ((fs[1] || {}).csz) {
        rr = fs[1].csz;
      }
      if (qn) {
        if ((qn[21589] || {}).mt) {
          Er = qn[21589].mt;
        }
        if ((qn[1] || {}).usz) {
          ur = fs[1].usz;
        }
        if ((qn[1] || {}).csz) {
          rr = fs[1].csz;
        }
      }
    }
    Mn.l += Ds;
    var al = Mn.slice(Mn.l, Mn.l + rr);
    switch (cr) {
      case 8:
        al = function oo(Mn, ei) {
          if (!Ba) {
            return b_(Mn, ei);
          }
          var Kn = new (0, Ba.InflateRaw)();
          var qn = Kn._processChunk(Mn.slice(Mn.l), Kn._finishFlushFlag);
          Mn.l += Kn.bytesRead;
          return qn;
        }(Mn, ur);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + cr);
    }
    var gu = false;
    if (ti & 8) {
      if (Mn.read_shift(4) == 134695760) {
        Mn.read_shift(4);
        gu = true;
      }
      rr = Mn.read_shift(4);
      ur = Mn.read_shift(4);
    }
    if (rr != ei) {
      _E(gu, "Bad compressed size: " + ei + " != " + rr);
    }
    if (ur != Wn) {
      _E(gu, "Bad uncompressed size: " + Wn + " != " + ur);
    }
    bE(Kn, zo, al, {
      unsafe: true,
      mt: Er
    });
  }
  var t1 = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function UA(Mn, ei) {
    if (Mn.ctype) {
      return Mn.ctype;
    }
    var Wn = Mn.name || "";
    var Kn = Wn.match(/\.([^\.]+)$/);
    if (Kn && t1[Kn[1]] || ei && (Kn = (Wn = ei).match(/[\.\\]([^\.\\])+$/)) && t1[Kn[1]]) {
      return t1[Kn[1]];
    } else {
      return "application/octet-stream";
    }
  }
  function Fb(Mn) {
    for (var ei = st(Mn), Wn = [], Kn = 0; Kn < ei.length; Kn += 76) {
      Wn.push(ei.slice(Kn, Kn + 76));
    }
    return Wn.join("\r\n") + "\r\n";
  }
  function kb(Mn) {
    var ei = Mn.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (rr) {
      var ur = rr.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (ur.length == 1 ? "0" + ur : ur);
    });
    if ((ei = ei.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")).charAt(0) == "\n") {
      ei = "=0D" + ei.slice(1);
    }
    for (var Wn = [], Kn = (ei = ei.replace(/\r(?!\n)/gm, "=0D").replace(/\n\n/gm, "\n=0A").replace(/([^\r\n])\n/gm, "$1=0A")).split("\r\n"), qn = 0; qn < Kn.length; ++qn) {
      var ti = Kn[qn];
      if (ti.length != 0) {
        for (var cr = 0; cr < ti.length;) {
          var Er = 76;
          var ar = ti.slice(cr, cr + Er);
          if (ar.charAt(Er - 1) == "=") {
            Er--;
          } else if (ar.charAt(Er - 2) == "=") {
            Er -= 2;
          } else if (ar.charAt(Er - 3) == "=") {
            Er -= 3;
          }
          ar = ti.slice(cr, cr + Er);
          if ((cr += Er) < ti.length) {
            ar += "=";
          }
          Wn.push(ar);
        }
      } else {
        Wn.push("");
      }
    }
    return Wn.join("\r\n");
  }
  function VA(Mn, ei, Wn) {
    for (var cr, Kn = "", qn = "", ti = "", Er = 0; Er < 10; ++Er) {
      var ar = ei[Er];
      if (!ar || ar.match(/^\s*$/)) {
        break;
      }
      var rr = ar.match(/^(.*?):\s*([^\s].*)$/);
      if (rr) {
        switch (rr[1].toLowerCase()) {
          case "content-location":
            Kn = rr[2].trim();
            break;
          case "content-type":
            ti = rr[2].trim();
            break;
          case "content-transfer-encoding":
            qn = rr[2].trim();
        }
      }
    }
    ++Er;
    switch (qn.toLowerCase()) {
      case "base64":
        cr = Yt(Ee(ei.slice(Er).join("")));
        break;
      case "quoted-printable":
        cr = function BA(Mn) {
          for (var ei = [], Wn = 0; Wn < Mn.length; ++Wn) {
            for (var Kn = Mn[Wn]; Wn <= Mn.length && Kn.charAt(Kn.length - 1) == "=";) {
              Kn = Kn.slice(0, Kn.length - 1) + Mn[++Wn];
            }
            ei.push(Kn);
          }
          for (var qn = 0; qn < ei.length; ++qn) {
            ei[qn] = ei[qn].replace(/[=][0-9A-Fa-f]{2}/g, function (ti) {
              return String.fromCharCode(parseInt(ti.slice(1), 16));
            });
          }
          return Yt(ei.join("\r\n"));
        }(ei.slice(Er));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + qn);
    }
    var ur = bE(Mn, Kn.slice(Wn.length), cr, {
      unsafe: true
    });
    if (ti) {
      ur.ctype = ti;
    }
  }
  function bE(Mn, ei, Wn, Kn) {
    var qn = Kn && Kn.unsafe;
    if (!qn) {
      Ln(Mn);
    }
    var ti = !qn && Fr.find(Mn, ei);
    if (!ti) {
      var cr = Mn.FullPaths[0];
      if (ei.slice(0, cr.length) == cr) {
        cr = ei;
      } else {
        if (cr.slice(-1) != "/") {
          cr += "/";
        }
        cr = (cr + ei).replace("//", "/");
      }
      ti = {
        name: _(ei),
        type: 2
      };
      Mn.FileIndex.push(ti);
      Mn.FullPaths.push(cr);
      if (!qn) {
        Fr.utils.cfb_gc(Mn);
      }
    }
    ti.content = Wn;
    ti.size = Wn ? Wn.length : 0;
    if (Kn) {
      if (Kn.CLSID) {
        ti.clsid = Kn.CLSID;
      }
      if (Kn.mt) {
        ti.mt = Kn.mt;
      }
      if (Kn.ct) {
        ti.ct = Kn.ct;
      }
    }
    return ti;
  }
  c.find = function Fi(Mn, ei) {
    var Wn = Mn.FullPaths.map(function (ar) {
      return ar.toUpperCase();
    });
    var Kn = Wn.map(function (ar) {
      var rr = ar.split("/");
      return rr[rr.length - (ar.slice(-1) == "/" ? 2 : 1)];
    });
    var qn = false;
    if (ei.charCodeAt(0) === 47) {
      qn = true;
      ei = Wn[0].slice(0, -1) + ei;
    } else {
      qn = ei.indexOf("/") !== -1;
    }
    var ti = ei.toUpperCase();
    var cr = qn === true ? Wn.indexOf(ti) : Kn.indexOf(ti);
    if (cr !== -1) {
      return Mn.FileIndex[cr];
    }
    var Er = !ti.match(ft);
    ti = ti.replace(Lt, "");
    if (Er) {
      ti = ti.replace(ft, "!");
    }
    cr = 0;
    for (; cr < Wn.length; ++cr) {
      if ((Er ? Wn[cr].replace(ft, "!") : Wn[cr]).replace(Lt, "") == ti || (Er ? Kn[cr].replace(ft, "!") : Kn[cr]).replace(Lt, "") == ti) {
        return Mn.FileIndex[cr];
      }
    }
    return null;
  };
  c.read = function or(Mn, ei) {
    var Wn = ei && ei.type;
    if (!Wn) {
      if (ke && Buffer.isBuffer(Mn)) {
        Wn = "buffer";
      }
    }
    switch (Wn || "base64") {
      case "file":
        return function Ni(Mn, ei) {
          Ne();
          return ze(Te.readFileSync(Mn), ei);
        }(Mn, ei);
      case "base64":
        return ze(Yt(Ee(Mn)), ei);
      case "binary":
        return ze(Yt(Mn), ei);
    }
    return ze(Mn, ei);
  };
  c.parse = ze;
  c.write = function os(Mn, ei) {
    var Wn = mi(Mn, ei);
    switch (ei && ei.type || "buffer") {
      case "file":
        Ne();
        Te.writeFileSync(ei.filename, Wn);
        return Wn;
      case "binary":
        if (typeof Wn == "string") {
          return Wn;
        } else {
          return Ul(Wn);
        }
      case "base64":
        return st(typeof Wn == "string" ? Wn : Ul(Wn));
      case "buffer":
        if (ke) {
          if (Buffer.isBuffer(Wn)) {
            return Wn;
          } else {
            return Be(Wn);
          }
        }
      case "array":
        if (typeof Wn == "string") {
          return Yt(Wn);
        } else {
          return Wn;
        }
    }
    return Wn;
  };
  c.writeFile = function Ua(Mn, ei, Wn) {
    Ne();
    var Kn = mi(Mn, Wn);
    Te.writeFileSync(ei, Kn);
  };
  c.utils = {
    cfb_new: function Lb(Mn) {
      var ei = {};
      Ln(ei, Mn);
      return ei;
    },
    cfb_add: bE,
    cfb_del: function HA(Mn, ei) {
      Ln(Mn);
      var Wn = Fr.find(Mn, ei);
      if (Wn) {
        for (var Kn = 0; Kn < Mn.FileIndex.length; ++Kn) {
          if (Mn.FileIndex[Kn] == Wn) {
            Mn.FileIndex.splice(Kn, 1);
            Mn.FullPaths.splice(Kn, 1);
            return true;
          }
        }
      }
      return false;
    },
    cfb_mov: function WA(Mn, ei, Wn) {
      Ln(Mn);
      var Kn = Fr.find(Mn, ei);
      if (Kn) {
        for (var qn = 0; qn < Mn.FileIndex.length; ++qn) {
          if (Mn.FileIndex[qn] == Kn) {
            Mn.FileIndex[qn].name = _(Wn);
            Mn.FullPaths[qn] = Wn;
            return true;
          }
        }
      }
      return false;
    },
    cfb_gc: function ux(Mn) {
      yi(Mn, true);
    },
    ReadShift: Sa,
    CheckField: gd,
    prep_blob: Vl,
    bconcat: St,
    use_zlib: function hr(Mn) {
      try {
        var Wn = new (0, Mn.InflateRaw)();
        Wn._processChunk(new Uint8Array([3, 0]), Wn._finishFlushFlag);
        if (!Wn.bytesRead) {
          throw new Error("zlib does not expose bytesRead");
        }
        Ba = Mn;
      } catch (Kn) {
        console.error("cannot use native zlib: " + (Kn.message || Kn));
      }
    },
    _deflateRaw: Wp,
    _inflateRaw: b_,
    consts: ds
  };
  return c;
}();
function Pa(r) {
  if (typeof r == "string") {
    return Dn(r);
  } else if (Array.isArray(r)) {
    return function lt(r) {
      if (typeof Uint8Array === "undefined") {
        throw new Error("Unsupported");
      }
      return new Uint8Array(r);
    }(r);
  } else {
    return r;
  }
}
function Po(r, c, o) {
  if (typeof Deno !== "undefined") {
    if (o && typeof c == "string") {
      switch (o) {
        case "utf8":
          c = new TextEncoder(o).encode(c);
          break;
        case "binary":
          c = Dn(c);
          break;
        default:
          throw new Error("Unsupported encoding " + o);
      }
    }
    return Deno.writeFileSync(r, c);
  }
  var p = o == "utf8" ? ys(c) : c;
  if (typeof IE_SaveFile !== "undefined") {
    return IE_SaveFile(p, r);
  }
  if (typeof Blob !== "undefined") {
    var _ = new Blob([Pa(p)], {
      type: "application/octet-stream"
    });
    if (typeof navigator !== "undefined" && navigator.msSaveBlob) {
      return navigator.msSaveBlob(_, r);
    }
    if (typeof saveAs !== "undefined") {
      return saveAs(_, r);
    }
    if (typeof URL !== "undefined" && typeof document !== "undefined" && document.createElement && URL.createObjectURL) {
      var V = URL.createObjectURL(_);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function") {
        if (URL.revokeObjectURL && typeof setTimeout !== "undefined") {
          setTimeout(function () {
            URL.revokeObjectURL(V);
          }, 60000);
        }
        return chrome.downloads.download({
          url: V,
          filename: r,
          saveAs: true
        });
      }
      var Y = document.createElement("a");
      if (Y.download != null) {
        Y.download = r;
        Y.href = V;
        document.body.appendChild(Y);
        Y.click();
        document.body.removeChild(Y);
        if (URL.revokeObjectURL && typeof setTimeout !== "undefined") {
          setTimeout(function () {
            URL.revokeObjectURL(V);
          }, 60000);
        }
        return V;
      }
    } else if (typeof URL !== "undefined" && !URL.createObjectURL && typeof chrome == "object") {
      var ee = "data:application/octet-stream;base64," + function Oe(r) {
        for (var c = "", o = 0, p = 0, _ = 0, V = 0, Y = 0, ee = 0, Te = 0, Ne = 0; Ne < r.length;) {
          V = (o = r[Ne++]) >> 2;
          Y = (o & 3) << 4 | (p = r[Ne++]) >> 4;
          ee = (p & 15) << 2 | (_ = r[Ne++]) >> 6;
          Te = _ & 63;
          if (isNaN(p)) {
            ee = Te = 64;
          } else if (isNaN(_)) {
            Te = 64;
          }
          c += ot.charAt(V) + ot.charAt(Y) + ot.charAt(ee) + ot.charAt(Te);
        }
        return c;
      }(new Uint8Array(Pa(p)));
      return chrome.downloads.download({
        url: ee,
        filename: r,
        saveAs: true
      });
    }
  }
  if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") {
    try {
      var Te = File(r);
      Te.open("w");
      Te.encoding = "binary";
      if (Array.isArray(c)) {
        c = Et(c);
      }
      Te.write(c);
      Te.close();
      return c;
    } catch (Ne) {
      if (!Ne.message || !Ne.message.match(/onstruct/)) {
        throw Ne;
      }
    }
  }
  throw new Error("cannot save file " + r);
}
function qs(r) {
  for (var c = Object.keys(r), o = [], p = 0; p < c.length; ++p) {
    if (Object.prototype.hasOwnProperty.call(r, c[p])) {
      o.push(c[p]);
    }
  }
  return o;
}
function Fo(r, c) {
  for (var o = [], p = qs(r), _ = 0; _ !== p.length; ++_) {
    if (o[r[p[_]][c]] == null) {
      o[r[p[_]][c]] = p[_];
    }
  }
  return o;
}
function ha(r) {
  for (var c = [], o = qs(r), p = 0; p !== o.length; ++p) {
    c[r[o[p]]] = o[p];
  }
  return c;
}
function Ca(r) {
  for (var c = [], o = qs(r), p = 0; p !== o.length; ++p) {
    c[r[o[p]]] = parseInt(o[p], 10);
  }
  return c;
}
var fl = Date.UTC(1899, 11, 30, 0, 0, 0);
var Ml = Date.UTC(1899, 11, 31, 0, 0, 0);
var ko = Date.UTC(1904, 0, 1, 0, 0, 0);
function So(r, c) {
  var p = (r.getTime() - fl) / 86400000;
  if (c) {
    if ((p -= 1462) < -1402) {
      return p - 1;
    } else {
      return p;
    }
  } else if (p < 60) {
    return p - 1;
  } else {
    return p;
  }
}
function pa(r) {
  if (r >= 60 && r < 61) {
    return r;
  }
  var c = new Date();
  c.setTime((r > 60 ? r : r + 1) * 24 * 60 * 60 * 1000 + fl);
  return c;
}
function Ia(r) {
  var c = 0;
  var o = 0;
  var p = false;
  var _ = r.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!_) {
    throw new Error("|" + r + "| is not an ISO8601 Duration");
  }
  for (var V = 1; V != _.length; ++V) {
    if (_[V]) {
      o = 1;
      if (V > 3) {
        p = true;
      }
      switch (_[V].slice(_[V].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + _[V].slice(_[V].length - 1));
        case "D":
          o *= 24;
        case "H":
          o *= 60;
        case "M":
          if (!p) {
            throw new Error("Unsupported ISO Duration Field: M");
          }
          o *= 60;
      }
      c += o * parseInt(_[V], 10);
    }
  }
  return c;
}
var po = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/;
var zs = /^(\d+)-(\d+)-(\d+)$/;
var hs = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function Rs(r, c) {
  if (r instanceof Date) {
    return r;
  }
  var o = r.match(po);
  if (o) {
    return new Date((c ? ko : Ml) + ((parseInt(o[1], 10) * 60 + parseInt(o[2], 10)) * 60 + (o[3] ? parseInt(o[3].slice(1), 10) : 0)) * 1000 + (o[4] ? parseInt((o[4] + "000").slice(1, 4), 10) : 0));
  } else if (o = r.match(zs)) {
    return new Date(Date.UTC(+o[1], +o[2] - 1, +o[3], 0, 0, 0, 0));
  } else if (o = r.match(hs)) {
    return new Date(Date.UTC(+o[1], +o[2] - 1, +o[3], +o[4], +o[5], o[6] && parseInt(o[6].slice(1), 10) || 0, o[7] && parseInt(o[7].slice(1), 10) || 0));
  } else {
    return new Date(r);
  }
}
function eo(r, c) {
  if (ke && Buffer.isBuffer(r)) {
    if (c && De) {
      if (r[0] == 255 && r[1] == 254) {
        return ys(r.slice(2).toString("utf16le"));
      }
      if (r[1] == 254 && r[2] == 255) {
        return ys(Le(r.slice(2).toString("binary")));
      }
    }
    return r.toString("binary");
  }
  if (typeof TextDecoder !== "undefined") {
    try {
      if (c) {
        if (r[0] == 255 && r[1] == 254) {
          return ys(new TextDecoder("utf-16le").decode(r.slice(2)));
        }
        if (r[0] == 254 && r[1] == 255) {
          return ys(new TextDecoder("utf-16be").decode(r.slice(2)));
        }
      }
      var o = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        ˆ: "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      if (Array.isArray(r)) {
        r = new Uint8Array(r);
      }
      return new TextDecoder("latin1").decode(r).replace(/[\u20ac\u201a\u0192\u201e\u2026\u2020\u2021\u02c6\u2030\u0160\u2039\u0152\u017d\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u02dc\u2122\u0161\u203a\u0153\u017e\u0178]/g, function (V) {
        return o[V] || V;
      });
    } catch {}
  }
  var p = [];
  var _ = 0;
  try {
    for (_ = 0; _ < r.length - 65536; _ += 65536) {
      p.push(String.fromCharCode.apply(0, r.slice(_, _ + 65536)));
    }
    p.push(String.fromCharCode.apply(0, r.slice(_)));
  } catch {
    try {
      for (; _ < r.length - 16384; _ += 16384) {
        p.push(String.fromCharCode.apply(0, r.slice(_, _ + 16384)));
      }
      p.push(String.fromCharCode.apply(0, r.slice(_)));
    } catch {
      for (; _ != r.length; ++_) {
        p.push(String.fromCharCode(r[_]));
      }
    }
  }
  return p.join("");
}
function Vs(r) {
  if (typeof JSON !== "undefined" && !Array.isArray(r)) {
    return JSON.parse(JSON.stringify(r));
  }
  if (typeof r != "object" || r == null) {
    return r;
  }
  if (r instanceof Date) {
    return new Date(r.getTime());
  }
  var c = {};
  for (var o in r) {
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      c[o] = Vs(r[o]);
    }
  }
  return c;
}
function Qs(r, c) {
  for (var o = ""; o.length < c;) {
    o += r;
  }
  return o;
}
function Wo(r) {
  var c = Number(r);
  if (!isNaN(c)) {
    if (isFinite(c)) {
      return c;
    } else {
      return NaN;
    }
  }
  if (!/\d/.test(r)) {
    return c;
  }
  var o = 1;
  var p = r.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function () {
    o *= 100;
    return "";
  });
  if (isNaN(c = Number(p)) && (p = p.replace(/[(](.*)[)]/, function (_, V) {
    o = -o;
    return V;
  }), isNaN(c = Number(p)))) {
    return c;
  } else {
    return c / o;
  }
}
var Ra = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/;
var Uo = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/;
var _r = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/;
var at = new Date("6/9/69 00:00 UTC").valueOf() == -17798400000;
var Bt = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function an(r) {
  if (_r.test(r)) {
    if (r.indexOf("Z") == -1) {
      return Lr(new Date(r));
    } else {
      return new Date(r);
    }
  }
  var c = r.toLowerCase();
  var o = c.replace(/\s+/g, " ").trim();
  var p = o.match(Ra);
  if (p) {
    return function Je(r) {
      if (r[2]) {
        if (r[3]) {
          if (r[4]) {
            return new Date(Date.UTC(1899, 11, 31, +r[1] % 12 + (r[7] == "p" ? 12 : 0), +r[2], +r[4], parseFloat(r[3]) * 1000));
          } else {
            return new Date(Date.UTC(1899, 11, 31, r[7] == "p" ? 12 : 0, +r[1], +r[2], parseFloat(r[3]) * 1000));
          }
        } else if (r[5]) {
          return new Date(Date.UTC(1899, 11, 31, +r[1] % 12 + (r[7] == "p" ? 12 : 0), +r[2], +r[5], r[6] ? parseFloat(r[6]) * 1000 : 0));
        } else {
          return new Date(Date.UTC(1899, 11, 31, +r[1] % 12 + (r[7] == "p" ? 12 : 0), +r[2], 0, 0));
        }
      } else {
        return new Date(Date.UTC(1899, 11, 31, +r[1] % 12 + (r[7] == "p" ? 12 : 0), 0, 0, 0));
      }
    }(p);
  }
  if (p = o.match(Uo)) {
    return function be(r) {
      if (r[2]) {
        if (r[3]) {
          if (r[4]) {
            return new Date(Date.UTC(1899, 11, 31, +r[1], +r[2], +r[4], parseFloat(r[3]) * 1000));
          } else {
            return new Date(Date.UTC(1899, 11, 31, 0, +r[1], +r[2], parseFloat(r[3]) * 1000));
          }
        } else if (r[5]) {
          return new Date(Date.UTC(1899, 11, 31, +r[1], +r[2], +r[5], r[6] ? parseFloat(r[6]) * 1000 : 0));
        } else {
          return new Date(Date.UTC(1899, 11, 31, +r[1], +r[2], 0, 0));
        }
      } else {
        return new Date(Date.UTC(1899, 11, 31, +r[1], 0, 0, 0));
      }
    }(p);
  }
  if (p = o.match(hs)) {
    return new Date(Date.UTC(+p[1], +p[2] - 1, +p[3], +p[4], +p[5], p[6] && parseInt(p[6].slice(1), 10) || 0, p[7] && parseInt(p[7].slice(1), 10) || 0));
  }
  var _ = new Date(at && r.indexOf("UTC") == -1 ? r + " UTC" : r);
  var V = new Date(NaN);
  var Y = _.getYear();
  _.getMonth();
  var Te = _.getDate();
  if (isNaN(Te)) {
    return V;
  }
  if (c.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if ((c = c.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 && Bt.indexOf(c) == -1) {
      return V;
    }
  } else if (c.replace(/[ap]m?/, "").match(/[a-z]/)) {
    return V;
  }
  if (Y < 0 || Y > 8099 || r.match(/[^-0-9:,\/\\\ ]/)) {
    return V;
  } else {
    return _;
  }
}
var Gn = function () {
  var r = "abacaba".split(/(:?b)/i).length == 5;
  return function (o, p, _) {
    if (r || typeof p == "string") {
      return o.split(p);
    }
    for (var V = o.split(p), Y = [V[0]], ee = 1; ee < V.length; ++ee) {
      Y.push(_);
      Y.push(V[ee]);
    }
    return Y;
  };
}();
function Ki(r) {
  return new Date(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds());
}
function Lr(r) {
  return new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
}
function Gr(r) {
  if (r) {
    if (r.content && r.type) {
      return eo(r.content, true);
    } else if (r.data) {
      return he(r.data);
    } else if (r.asNodeBuffer && ke) {
      return he(r.asNodeBuffer().toString("binary"));
    } else if (r.asBinary) {
      return he(r.asBinary());
    } else if (r._data && r._data.getContent) {
      return he(eo(Array.prototype.slice.call(r._data.getContent(), 0)));
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function zr(r) {
  if (!r) {
    return null;
  }
  if (r.data) {
    return se(r.data);
  }
  if (r.asNodeBuffer && ke) {
    return r.asNodeBuffer();
  }
  if (r._data && r._data.getContent) {
    var c = r._data.getContent();
    if (typeof c == "string") {
      return se(c);
    } else {
      return Array.prototype.slice.call(c);
    }
  }
  if (r.content && r.type) {
    return r.content;
  } else {
    return null;
  }
}
function Js(r, c) {
  for (var o = r.FullPaths || qs(r.files), p = c.toLowerCase().replace(/[\/]/g, "\\"), _ = p.replace(/\\/g, "/"), V = 0; V < o.length; ++V) {
    var Y = o[V].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (p == Y || _ == Y) {
      if (r.files) {
        return r.files[o[V]];
      } else {
        return r.FileIndex[V];
      }
    }
  }
  return null;
}
function Xt(r, c) {
  var o = Js(r, c);
  if (o == null) {
    throw new Error("Cannot find file " + c + " in zip");
  }
  return o;
}
function ut(r, c, o) {
  if (!o) {
    return function Ks(r) {
      if (r && r.name.slice(-4) === ".bin") {
        return zr(r);
      } else {
        return Gr(r);
      }
    }(Xt(r, c));
  }
  if (!c) {
    return null;
  }
  try {
    return ut(r, c);
  } catch {
    return null;
  }
}
function vt(r, c, o) {
  if (!o) {
    return Gr(Xt(r, c));
  }
  if (!c) {
    return null;
  }
  try {
    return vt(r, c);
  } catch {
    return null;
  }
}
function Zt(r, c, o) {
  if (!o) {
    return zr(Xt(r, c));
  }
  if (!c) {
    return null;
  }
  try {
    return Zt(r, c);
  } catch {
    return null;
  }
}
function kn(r) {
  for (var c = r.FullPaths || qs(r.files), o = [], p = 0; p < c.length; ++p) {
    if (c[p].slice(-1) != "/") {
      o.push(c[p].replace(/^Root Entry[\/]/, ""));
    }
  }
  return o.sort();
}
function Zn(r, c, o) {
  if (r.FullPaths) {
    var p;
    if (typeof o == "string") {
      p = ke ? Be(o) : function ve(r) {
        for (var c = [], o = 0, p = r.length + 250, _ = Qe(r.length + 255), V = 0; V < r.length; ++V) {
          var Y = r.charCodeAt(V);
          if (Y < 128) {
            _[o++] = Y;
          } else if (Y < 2048) {
            _[o++] = Y >> 6 & 31 | 192;
            _[o++] = Y & 63 | 128;
          } else if (Y >= 55296 && Y < 57344) {
            Y = 64 + (Y & 1023);
            var ee = r.charCodeAt(++V) & 1023;
            _[o++] = Y >> 8 & 7 | 240;
            _[o++] = Y >> 2 & 63 | 128;
            _[o++] = ee >> 6 & 15 | 128 | (Y & 3) << 4;
            _[o++] = ee & 63 | 128;
          } else {
            _[o++] = Y >> 12 & 15 | 224;
            _[o++] = Y >> 6 & 63 | 128;
            _[o++] = Y & 63 | 128;
          }
          if (o > p) {
            c.push(_.slice(0, o));
            o = 0;
            _ = Qe(65535);
            p = 65530;
          }
        }
        c.push(_.slice(0, o));
        return St(c);
      }(o);
      return Fr.utils.cfb_add(r, c, p);
    }
    Fr.utils.cfb_add(r, c, o);
  } else {
    r.file(c, o);
  }
}
function li() {
  return Fr.utils.cfb_new();
}
function Oi(r, c) {
  switch (c.type) {
    case "base64":
      return Fr.read(r, {
        type: "base64"
      });
    case "binary":
      return Fr.read(r, {
        type: "binary"
      });
    case "buffer":
    case "array":
      return Fr.read(r, {
        type: "buffer"
      });
  }
  throw new Error("Unrecognized type " + c.type);
}
function Xi(r, c) {
  if (r.charAt(0) == "/") {
    return r.slice(1);
  }
  var o = c.split("/");
  if (c.slice(-1) != "/") {
    o.pop();
  }
  for (var p = r.split("/"); p.length !== 0;) {
    var _ = p.shift();
    if (_ === "..") {
      o.pop();
    } else if (_ !== ".") {
      o.push(_);
    }
  }
  return o.join("/");
}
var nr = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n";
var mr = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
var Jr = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm;
var Ys = nr.match(Jr) ? Jr : /<[^>]*>/g;
var xo = /<\w*:/;
var Ls = /<(\/?)\w+:/;
function sr(r, c, o) {
  for (var p = {}, _ = 0, V = 0; _ !== r.length && (V = r.charCodeAt(_)) !== 32 && V !== 10 && V !== 13; ++_);
  if (!c) {
    p[0] = r.slice(0, _);
  }
  if (_ === r.length) {
    return p;
  }
  var Y = r.match(mr);
  var ee = 0;
  var Te = "";
  var Ne = 0;
  var ze = "";
  var Ft = "";
  var _t = 1;
  if (Y) {
    for (Ne = 0; Ne != Y.length; ++Ne) {
      Ft = Y[Ne];
      V = 0;
      for (; V != Ft.length && Ft.charCodeAt(V) !== 61; ++V);
      for (ze = Ft.slice(0, V).trim(); Ft.charCodeAt(V + 1) == 32;) {
        ++V;
      }
      _t = (_ = Ft.charCodeAt(V + 1)) == 34 || _ == 39 ? 1 : 0;
      Te = Ft.slice(V + 1 + _t, Ft.length - _t);
      ee = 0;
      for (; ee != ze.length && ze.charCodeAt(ee) !== 58; ++ee);
      if (ee === ze.length) {
        if (ze.indexOf("_") > 0) {
          ze = ze.slice(0, ze.indexOf("_"));
        }
        p[ze] = Te;
        if (!o) {
          p[ze.toLowerCase()] = Te;
        }
      } else {
        var Ot = (ee === 5 && ze.slice(0, 5) === "xmlns" ? "xmlns" : "") + ze.slice(ee + 1);
        if (p[Ot] && ze.slice(ee - 3, ee) == "ext") {
          continue;
        }
        p[Ot] = Te;
        if (!o) {
          p[Ot.toLowerCase()] = Te;
        }
      }
    }
  }
  return p;
}
function wa(r) {
  return r.replace(Ls, "<$1");
}
var ao = {
  "&quot;": "\"",
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
};
var sl = ha(ao);
var Rr = function () {
  var r = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi;
  var c = /_x([\da-fA-F]{4})_/gi;
  function o(p) {
    var _ = p + "";
    var V = _.indexOf("<![CDATA[");
    if (V == -1) {
      return _.replace(r, function (ee, Te) {
        return ao[ee] || String.fromCharCode(parseInt(Te, ee.indexOf("x") > -1 ? 16 : 10)) || ee;
      }).replace(c, function (ee, Te) {
        return String.fromCharCode(parseInt(Te, 16));
      });
    }
    var Y = _.indexOf("]]>");
    return o(_.slice(0, V)) + _.slice(V + 9, Y) + o(_.slice(Y + 3));
  }
  return function (_, V) {
    var Y = o(_);
    if (V) {
      return Y.replace(/\r\n/g, "\n");
    } else {
      return Y;
    }
  };
}();
var el = /[&<>'"]/g;
var Fa = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function Mr(r) {
  return (r + "").replace(el, function (o) {
    return sl[o];
  }).replace(Fa, function (o) {
    return "_x" + ("000" + o.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function Xe(r) {
  return Mr(r).replace(/ /g, "_x0020_");
}
var $t = /[\u0000-\u001f]/g;
function _e(r) {
  return (r + "").replace(el, function (o) {
    return sl[o];
  }).replace(/\n/g, "<br/>").replace($t, function (o) {
    return "&#x" + ("000" + o.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
var gn = function () {
  var r = /&#(\d+);/g;
  function c(o, p) {
    return String.fromCharCode(parseInt(p, 10));
  }
  return function (p) {
    return p.replace(r, c);
  };
}();
function tr(r) {
  switch (r) {
    case 1:
    case true:
    case "1":
    case "true":
      return true;
    case 0:
    case false:
    case "0":
    case "false":
      return false;
  }
  return false;
}
function Do(r) {
  for (var c = "", o = 0, p = 0, _ = 0, V = 0, Y = 0, ee = 0; o < r.length;) {
    if ((p = r.charCodeAt(o++)) < 128) {
      c += String.fromCharCode(p);
    } else {
      _ = r.charCodeAt(o++);
      if (p > 191 && p < 224) {
        Y = (p & 31) << 6;
        Y |= _ & 63;
        c += String.fromCharCode(Y);
      } else {
        V = r.charCodeAt(o++);
        if (p < 240) {
          c += String.fromCharCode((p & 15) << 12 | (_ & 63) << 6 | V & 63);
        } else {
          ee = ((p & 7) << 18 | (_ & 63) << 12 | (V & 63) << 6 | (Y = r.charCodeAt(o++)) & 63) - 65536;
          c += String.fromCharCode(55296 + (ee >>> 10 & 1023));
          c += String.fromCharCode(56320 + (ee & 1023));
        }
      }
    }
  }
  return c;
}
function Ji(r) {
  var o;
  var p;
  var ee;
  var c = Qe(r.length * 2);
  var _ = 1;
  var V = 0;
  var Y = 0;
  for (p = 0; p < r.length; p += _) {
    _ = 1;
    if ((ee = r.charCodeAt(p)) < 128) {
      o = ee;
    } else if (ee < 224) {
      o = (ee & 31) * 64 + (r.charCodeAt(p + 1) & 63);
      _ = 2;
    } else if (ee < 240) {
      o = (ee & 15) * 4096 + (r.charCodeAt(p + 1) & 63) * 64 + (r.charCodeAt(p + 2) & 63);
      _ = 3;
    } else {
      _ = 4;
      o = (ee & 7) * 262144 + (r.charCodeAt(p + 1) & 63) * 4096 + (r.charCodeAt(p + 2) & 63) * 64 + (r.charCodeAt(p + 3) & 63);
      Y = 55296 + ((o -= 65536) >>> 10 & 1023);
      o = 56320 + (o & 1023);
    }
    if (Y !== 0) {
      c[V++] = Y & 255;
      c[V++] = Y >>> 8;
      Y = 0;
    }
    c[V++] = o % 256;
    c[V++] = o >>> 8;
  }
  return c.slice(0, V).toString("ucs2");
}
function hi(r) {
  return Be(r, "binary").toString("utf8");
}
var oa = "foo bar bazâð£";
var Ns = ke && (hi(oa) == Do(oa) && hi || Ji(oa) == Do(oa) && Ji) || Do;
var ys = ke ? function (r) {
  return Be(r, "utf8").toString("binary");
} : function (r) {
  for (var c = [], o = 0, p = 0, _ = 0; o < r.length;) {
    p = r.charCodeAt(o++);
    switch (true) {
      case p < 128:
        c.push(String.fromCharCode(p));
        break;
      case p < 2048:
        c.push(String.fromCharCode(192 + (p >> 6)));
        c.push(String.fromCharCode(128 + (p & 63)));
        break;
      case p >= 55296 && p < 57344:
        p -= 55296;
        _ = r.charCodeAt(o++) - 56320 + (p << 10);
        c.push(String.fromCharCode(240 + (_ >> 18 & 7)));
        c.push(String.fromCharCode(144 + (_ >> 12 & 63)));
        c.push(String.fromCharCode(128 + (_ >> 6 & 63)));
        c.push(String.fromCharCode(128 + (_ & 63)));
        break;
      default:
        c.push(String.fromCharCode(224 + (p >> 12)));
        c.push(String.fromCharCode(128 + (p >> 6 & 63)));
        c.push(String.fromCharCode(128 + (p & 63)));
    }
  }
  return c.join("");
};
var ht = function () {
  var r = {};
  return function (o, p) {
    var _ = o + "|" + (p || "");
    if (r[_]) {
      return r[_];
    } else {
      return r[_] = new RegExp("<(?:\\w+:)?" + o + "(?: xml:space=\"preserve\")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?" + o + ">", p || "");
    }
  };
}();
var dt = function () {
  var r = [["nbsp", " "], ["middot", "·"], ["quot", "\""], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function (c) {
    return [new RegExp("&" + c[0] + ";", "ig"), c[1]];
  });
  return function (o) {
    for (var p = o.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, ""), _ = 0; _ < r.length; ++_) {
      p = p.replace(r[_][0], r[_][1]);
    }
    return p;
  };
}();
var He = function () {
  var r = {};
  return function (o) {
    if (r[o] !== undefined) {
      return r[o];
    } else {
      return r[o] = new RegExp("<(?:vt:)?" + o + ">([\\s\\S]*?)</(?:vt:)?" + o + ">", "g");
    }
  };
}();
var dn = /<\/?(?:vt:)?variant>/g;
var Yi = /<(?:vt:)([^>]*)>([\s\S]*)</;
function $r(r, c) {
  var o = sr(r);
  var p = r.match(He(o.baseType)) || [];
  var _ = [];
  if (p.length != o.size) {
    if (c.WTF) {
      throw new Error("unexpected vector length " + p.length + " != " + o.size);
    }
    return _;
  }
  p.forEach(function (V) {
    var Y = V.replace(dn, "").match(Yi);
    if (Y) {
      _.push({
        v: Ns(Y[2]),
        t: Y[1]
      });
    }
  });
  return _;
}
var wi = /(^\s|\s$|\n)/;
function Aa(r, c) {
  return "<" + r + (c.match(wi) ? " xml:space=\"preserve\"" : "") + ">" + c + "</" + r + ">";
}
function Hr(r) {
  return qs(r).map(function (c) {
    return " " + c + "=\"" + r[c] + "\"";
  }).join("");
}
function wt(r, c, o) {
  return "<" + r + (o != null ? Hr(o) : "") + (c != null ? (c.match(wi) ? " xml:space=\"preserve\"" : "") + ">" + c + "</" + r : "/") + ">";
}
function mn(r, c) {
  try {
    return r.toISOString().replace(/\.\d*/, "");
  } catch (o) {
    if (c) {
      throw o;
    }
  }
  return "";
}
function Fn(r) {
  if (ke && Buffer.isBuffer(r)) {
    return r.toString("utf8");
  }
  if (typeof r == "string") {
    return r;
  }
  if (typeof Uint8Array !== "undefined" && r instanceof Uint8Array) {
    return Ns(Et(et(r)));
  }
  throw new Error("Bad input format: expected Buffer or string");
}
var ci = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/](?:[^>=]|="[^"]*?")*)?>/gm;
var pi_CT = "http://schemas.openxmlformats.org/package/2006/content-types";
var pi_TCMNT = "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments";
var pi_r = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
var pi_vt = "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes";
var pi_xsi = "http://www.w3.org/2001/XMLSchema-instance";
var lr = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
var xi_o = "urn:schemas-microsoft-com:office:office";
var xi_x = "urn:schemas-microsoft-com:office:excel";
var xi_ss = "urn:schemas-microsoft-com:office:spreadsheet";
function Ha(r) {
  for (var c = [], p = 0; p < r[0].length; ++p) {
    if (r[0][p]) {
      for (var _ = 0, V = r[0][p].length; _ < V; _ += 10240) {
        c.push.apply(c, r[0][p].slice(_, _ + 10240));
      }
    }
  }
  return c;
}
var Kl = ke ? function (r) {
  if (r[0].length > 0 && Buffer.isBuffer(r[0][0])) {
    return Buffer.concat(r[0].map(function (c) {
      if (Buffer.isBuffer(c)) {
        return c;
      } else {
        return Be(c);
      }
    }));
  } else {
    return Ha(r);
  }
} : Ha;
function Bl(r, c, o) {
  for (var p = [], _ = c; _ < o; _ += 2) {
    p.push(String.fromCharCode(lo(r, _)));
  }
  return p.join("").replace(Lt, "");
}
var iu = ke ? function (r, c, o) {
  if (Buffer.isBuffer(r) && De) {
    return r.toString("utf16le", c, o).replace(Lt, "");
  } else {
    return Bl(r, c, o);
  }
} : Bl;
function Wa(r, c, o) {
  for (var p = [], _ = c; _ < c + o; ++_) {
    p.push(("0" + r[_].toString(16)).slice(-2));
  }
  return p.join("");
}
var ls = ke ? function (r, c, o) {
  if (Buffer.isBuffer(r)) {
    return r.toString("hex", c, c + o);
  } else {
    return Wa(r, c, o);
  }
} : Wa;
function bs(r, c, o) {
  for (var p = [], _ = c; _ < o; _++) {
    p.push(String.fromCharCode(Zo(r, _)));
  }
  return p.join("");
}
var Cc = ke ? function (c, o, p) {
  if (Buffer.isBuffer(c)) {
    return c.toString("utf8", o, p);
  } else {
    return bs(c, o, p);
  }
} : bs;
function gc(r, c) {
  var o = Hs(r, c);
  if (o > 0) {
    return Cc(r, c + 4, c + 4 + o - 1);
  } else {
    return "";
  }
}
var mt = gc;
function qt(r, c) {
  var o = Hs(r, c);
  if (o > 0) {
    return Cc(r, c + 4, c + 4 + o - 1);
  } else {
    return "";
  }
}
var Ct = qt;
function Gt(r, c) {
  var o = Hs(r, c) * 2;
  if (o > 0) {
    return Cc(r, c + 4, c + 4 + o - 1);
  } else {
    return "";
  }
}
var Sn = Gt;
function ki(c, o) {
  var p = Hs(c, o);
  if (p > 0) {
    return iu(c, o + 4, o + 4 + p);
  } else {
    return "";
  }
}
var Ui = ki;
function cs(r, c) {
  var o = Hs(r, c);
  if (o > 0) {
    return Cc(r, c + 4, c + 4 + o);
  } else {
    return "";
  }
}
var La = cs;
function Yo(r, c) {
  return function Bo(r, c) {
    for (var o = 1 - (r[c + 7] >>> 7) * 2, p = ((r[c + 7] & 127) << 4) + (r[c + 6] >>> 4 & 15), _ = r[c + 6] & 15, V = 5; V >= 0; --V) {
      _ = _ * 256 + r[c + V];
    }
    if (p == 2047) {
      if (_ == 0) {
        return o * Infinity;
      } else {
        return NaN;
      }
    } else {
      if (p == 0) {
        p = -1022;
      } else {
        p -= 1023;
        _ += Math.pow(2, 52);
      }
      return o * Math.pow(2, p - 52) * _;
    }
  }(r, c);
}
var Ts = Yo;
function Os(c) {
  return Array.isArray(c) || typeof Uint8Array !== "undefined" && c instanceof Uint8Array;
}
if (ke) {
  mt = function (c, o) {
    if (!Buffer.isBuffer(c)) {
      return gc(c, o);
    }
    var p = c.readUInt32LE(o);
    if (p > 0) {
      return c.toString("utf8", o + 4, o + 4 + p - 1);
    } else {
      return "";
    }
  };
  Ct = function (c, o) {
    if (!Buffer.isBuffer(c)) {
      return qt(c, o);
    }
    var p = c.readUInt32LE(o);
    if (p > 0) {
      return c.toString("utf8", o + 4, o + 4 + p - 1);
    } else {
      return "";
    }
  };
  Sn = function (c, o) {
    if (!Buffer.isBuffer(c) || !De) {
      return Gt(c, o);
    }
    var p = c.readUInt32LE(o) * 2;
    return c.toString("utf16le", o + 4, o + 4 + p - 1);
  };
  Ui = function (c, o) {
    if (!Buffer.isBuffer(c) || !De) {
      return ki(c, o);
    }
    var p = c.readUInt32LE(o);
    return c.toString("utf16le", o + 4, o + 4 + p);
  };
  La = function (c, o) {
    if (!Buffer.isBuffer(c)) {
      return cs(c, o);
    }
    var p = c.readUInt32LE(o);
    return c.toString("utf8", o + 4, o + 4 + p);
  };
  Ts = function (c, o) {
    if (Buffer.isBuffer(c)) {
      return c.readDoubleLE(o);
    } else {
      return Yo(c, o);
    }
  };
  Os = function (c) {
    return Buffer.isBuffer(c) || Array.isArray(c) || typeof Uint8Array !== "undefined" && c instanceof Uint8Array;
  };
}
function Zo(r, c) {
  return r[c];
}
function lo(r, c) {
  return r[c + 1] * 256 + r[c];
}
function gl(r, c) {
  var o = r[c + 1] * 256 + r[c];
  if (o < 32768) {
    return o;
  } else {
    return (65535 - o + 1) * -1;
  }
}
function Hs(r, c) {
  return r[c + 3] * (1 << 24) + (r[c + 2] << 16) + (r[c + 1] << 8) + r[c];
}
function As(r, c) {
  return r[c + 3] << 24 | r[c + 2] << 16 | r[c + 1] << 8 | r[c];
}
function Io(r, c) {
  return r[c] << 24 | r[c + 1] << 16 | r[c + 2] << 8 | r[c + 3];
}
function Sa(r, c) {
  var p;
  var _;
  var Y;
  var ee;
  var Te;
  var Ne;
  var o = "";
  var V = [];
  switch (c) {
    case "dbcs":
      Ne = this.l;
      if (ke && Buffer.isBuffer(this) && De) {
        o = this.slice(this.l, this.l + r * 2).toString("utf16le");
      } else {
        for (Te = 0; Te < r; ++Te) {
          o += String.fromCharCode(lo(this, Ne));
          Ne += 2;
        }
      }
      r *= 2;
      break;
    case "utf8":
      o = Cc(this, this.l, this.l + r);
      break;
    case "utf16le":
      o = iu(this, this.l, this.l + (r *= 2));
      break;
    case "wstr":
      return Sa.call(this, r, "dbcs");
    case "lpstr-ansi":
      o = mt(this, this.l);
      r = 4 + Hs(this, this.l);
      break;
    case "lpstr-cp":
      o = Ct(this, this.l);
      r = 4 + Hs(this, this.l);
      break;
    case "lpwstr":
      o = Sn(this, this.l);
      r = 4 + Hs(this, this.l) * 2;
      break;
    case "lpp4":
      r = 4 + Hs(this, this.l);
      o = Ui(this, this.l);
      if (r & 2) {
        r += 2;
      }
      break;
    case "8lpp4":
      r = 4 + Hs(this, this.l);
      o = La(this, this.l);
      if (r & 3) {
        r += 4 - (r & 3);
      }
      break;
    case "cstr":
      r = 0;
      o = "";
      for (; (Y = Zo(this, this.l + r++)) !== 0;) {
        V.push(pe(Y));
      }
      o = V.join("");
      break;
    case "_wstr":
      r = 0;
      o = "";
      for (; (Y = lo(this, this.l + r)) !== 0;) {
        V.push(pe(Y));
        r += 2;
      }
      r += 2;
      o = V.join("");
      break;
    case "dbcs-cont":
      o = "";
      Ne = this.l;
      Te = 0;
      for (; Te < r; ++Te) {
        if (this.lens && this.lens.indexOf(Ne) !== -1) {
          Y = Zo(this, Ne);
          this.l = Ne + 1;
          ee = Sa.call(this, r - Te, Y ? "dbcs-cont" : "sbcs-cont");
          return V.join("") + ee;
        }
        V.push(pe(lo(this, Ne)));
        Ne += 2;
      }
      o = V.join("");
      r *= 2;
      break;
    case "cpstr":
      0;
    case "sbcs-cont":
      o = "";
      Ne = this.l;
      Te = 0;
      for (; Te != r; ++Te) {
        if (this.lens && this.lens.indexOf(Ne) !== -1) {
          Y = Zo(this, Ne);
          this.l = Ne + 1;
          ee = Sa.call(this, r - Te, Y ? "dbcs-cont" : "sbcs-cont");
          return V.join("") + ee;
        }
        V.push(pe(Zo(this, Ne)));
        Ne += 1;
      }
      o = V.join("");
      break;
    default:
      switch (r) {
        case 1:
          p = Zo(this, this.l);
          this.l++;
          return p;
        case 2:
          p = (c === "i" ? gl : lo)(this, this.l);
          this.l += 2;
          return p;
        case 4:
        case -4:
          if (c === "i" || (this[this.l + 3] & 128) == 0) {
            p = (r > 0 ? As : Io)(this, this.l);
            this.l += 4;
            return p;
          } else {
            _ = Hs(this, this.l);
            this.l += 4;
            return _;
          }
        case 8:
        case -8:
          if (c === "f") {
            _ = r == 8 ? Ts(this, this.l) : Ts([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0);
            this.l += 8;
            return _;
          }
          r = 8;
        case 16:
          o = ls(this, this.l, r);
      }
  }
  this.l += r;
  return o;
}
function wc(r, c, o) {
  r[o] = c & 255;
  r[o + 1] = c >>> 8 & 255;
}
function Sc(r, c, o) {
  var p = 0;
  var _ = 0;
  if (o === "dbcs") {
    for (_ = 0; _ != c.length; ++_) {
      wc(this, c.charCodeAt(_), this.l + _ * 2);
    }
    p = c.length * 2;
  } else if (o === "sbcs" || o == "cpstr") {
    c = c.replace(/[^\x00-\x7F]/g, "_");
    _ = 0;
    for (; _ != c.length; ++_) {
      this[this.l + _] = c.charCodeAt(_) & 255;
    }
    p = c.length;
  } else {
    if (o === "hex") {
      for (; _ < r; ++_) {
        this[this.l++] = parseInt(c.slice(_ * 2, _ * 2 + 2), 16) || 0;
      }
      return this;
    }
    if (o === "utf16le") {
      var Y = Math.min(this.l + r, this.length);
      for (_ = 0; _ < Math.min(c.length, r); ++_) {
        var ee = c.charCodeAt(_);
        this[this.l++] = ee & 255;
        this[this.l++] = ee >> 8;
      }
      for (; this.l < Y;) {
        this[this.l++] = 0;
      }
      return this;
    }
    switch (r) {
      case 1:
        p = 1;
        this[this.l] = c & 255;
        break;
      case 2:
        p = 2;
        this[this.l] = c & 255;
        this[this.l + 1] = (c >>>= 8) & 255;
        break;
      case 3:
        p = 3;
        this[this.l] = c & 255;
        this[this.l + 1] = (c >>>= 8) & 255;
        this[this.l + 2] = (c >>>= 8) & 255;
        break;
      case 4:
        p = 4;
        (function (r, c, o) {
          r[o] = c & 255;
          r[o + 1] = c >>> 8 & 255;
          r[o + 2] = c >>> 16 & 255;
          r[o + 3] = c >>> 24 & 255;
        })(this, c, this.l);
        break;
      case 8:
        p = 8;
        if (o === "f") {
          (function to(r, c, o) {
            var p = (c < 0 || 1 / c == -Infinity ? 1 : 0) << 7;
            var _ = 0;
            var V = 0;
            var Y = p ? -c : c;
            if (isFinite(Y)) {
              if (Y == 0) {
                _ = V = 0;
              } else {
                _ = Math.floor(Math.log(Y) / Math.LN2);
                V = Y * Math.pow(2, 52 - _);
                if (_ <= -1023 && (!isFinite(V) || V < Math.pow(2, 52))) {
                  _ = -1022;
                } else {
                  V -= Math.pow(2, 52);
                  _ += 1023;
                }
              }
            } else {
              _ = 2047;
              V = isNaN(c) ? 26985 : 0;
            }
            for (var ee = 0; ee <= 5; ++ee, V /= 256) {
              r[o + ee] = V & 255;
            }
            r[o + 6] = (_ & 15) << 4 | V & 15;
            r[o + 7] = _ >> 4 | p;
          })(this, c, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        p = 4;
        (function (r, c, o) {
          r[o] = c & 255;
          r[o + 1] = c >> 8 & 255;
          r[o + 2] = c >> 16 & 255;
          r[o + 3] = c >> 24 & 255;
        })(this, c, this.l);
    }
  }
  this.l += p;
  return this;
}
function gd(r, c) {
  var o = ls(this, this.l, r.length >> 1);
  if (o !== r) {
    throw new Error(c + "Expected " + r + " saw " + o);
  }
  this.l += r.length >> 1;
}
function Vl(r, c) {
  r.l = c;
  r.read_shift = Sa;
  r.chk = gd;
  r.write_shift = Sc;
}
function kl(r, c) {
  r.l += c;
}
function Gi(r) {
  var c = Qe(r);
  Vl(c, 0);
  return c;
}
function ic(r, c, o) {
  if (r) {
    var p;
    var _;
    var V;
    Vl(r, r.l || 0);
    for (var Y = r.length, ee = 0, Te = 0; r.l < Y;) {
      if ((ee = r.read_shift(1)) & 128) {
        ee = (ee & 127) + ((r.read_shift(1) & 127) << 7);
      }
      var Ne = t0[ee] || t0[65535];
      V = (p = r.read_shift(1)) & 127;
      _ = 1;
      for (; _ < 4 && p & 128; ++_) {
        V += ((p = r.read_shift(1)) & 127) << _ * 7;
      }
      Te = r.l + V;
      var ze = Ne.f && Ne.f(r, V, o);
      r.l = Te;
      if (c(ze, Ne, ee)) {
        return;
      }
    }
  }
}
function tl() {
  var r = [];
  var c = ke ? 256 : 2048;
  function o(Ne) {
    var ze = Gi(Ne);
    Vl(ze, 0);
    return ze;
  }
  var p = o(c);
  function _() {
    if (!!p) {
      if (p.l) {
        if (p.length > p.l) {
          (p = p.slice(0, p.l)).l = p.length;
        }
        if (p.length > 0) {
          r.push(p);
        }
      }
      p = null;
    }
  }
  function V(Ne) {
    if (p && Ne < p.length - p.l) {
      return p;
    } else {
      _();
      return p = o(Math.max(Ne + 1, c));
    }
  }
  return {
    next: V,
    push: function (Ne) {
      _();
      if ((p = Ne).l == null) {
        p.l = p.length;
      }
      V(c);
    },
    end: function () {
      _();
      return St(r);
    },
    _bufs: r
  };
}
function gr(r, c, o, p) {
  var V;
  var _ = +c;
  if (!isNaN(_)) {
    p ||= t0[_].p || (o || []).length || 0;
    V = 1 + (_ >= 128 ? 1 : 0) + 1;
    if (p >= 128) {
      ++V;
    }
    if (p >= 16384) {
      ++V;
    }
    if (p >= 2097152) {
      ++V;
    }
    var Y = r.next(V);
    if (_ <= 127) {
      Y.write_shift(1, _);
    } else {
      Y.write_shift(1, 128 + (_ & 127));
      Y.write_shift(1, _ >> 7);
    }
    for (var ee = 0; ee != 4; ++ee) {
      if (p < 128) {
        Y.write_shift(1, p);
        break;
      }
      Y.write_shift(1, 128 + (p & 127));
      p >>= 7;
    }
    if (p > 0 && Os(o)) {
      r.push(o);
    }
  }
}
function ro(r, c, o) {
  var p = Vs(r);
  if (c.s) {
    if (p.cRel) {
      p.c += c.s.c;
    }
    if (p.rRel) {
      p.r += c.s.r;
    }
  } else {
    if (p.cRel) {
      p.c += c.c;
    }
    if (p.rRel) {
      p.r += c.r;
    }
  }
  if (!o || o.biff < 12) {
    for (; p.c >= 256;) {
      p.c -= 256;
    }
    for (; p.r >= 65536;) {
      p.r -= 65536;
    }
  }
  return p;
}
function Vu(r, c, o) {
  var p = Vs(r);
  p.s = ro(p.s, c.s, o);
  p.e = ro(p.e, c.s, o);
  return p;
}
function Zl(r, c) {
  if (r.cRel && r.c < 0) {
    for (r = Vs(r); r.c < 0;) {
      r.c += c > 8 ? 16384 : 256;
    }
  }
  if (r.rRel && r.r < 0) {
    for (r = Vs(r); r.r < 0;) {
      r.r += c > 8 ? 1048576 : c > 5 ? 65536 : 16384;
    }
  }
  var o = Eo(r);
  if (!r.cRel && r.cRel != null) {
    o = function nd(r) {
      return r.replace(/^([A-Z])/, "$$$1");
    }(o);
  }
  if (!r.rRel && r.rRel != null) {
    o = function td(r) {
      return r.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
    }(o);
  }
  return o;
}
function $l(r, c) {
  if (r.s.r != 0 || r.s.rRel || r.e.r != (c.biff >= 12 ? 1048575 : c.biff >= 8 ? 65536 : 16384) || r.e.rRel) {
    if (r.s.c != 0 || r.s.cRel || r.e.c != (c.biff >= 12 ? 16383 : 255) || r.e.cRel) {
      return Zl(r.s, c.biff) + ":" + Zl(r.e, c.biff);
    } else {
      return (r.s.rRel ? "" : "$") + Da(r.s.r) + ":" + (r.e.rRel ? "" : "$") + Da(r.e.r);
    }
  } else {
    return (r.s.cRel ? "" : "$") + jo(r.s.c) + ":" + (r.e.cRel ? "" : "$") + jo(r.e.c);
  }
}
function Nc(r) {
  return parseInt(function Bd(r) {
    return r.replace(/\$(\d+)$/, "$1");
  }(r), 10) - 1;
}
function Da(r) {
  return "" + (r + 1);
}
function mu(r) {
  for (var c = function bl(r) {
      return r.replace(/^\$([A-Z])/, "$1");
    }(r), o = 0, p = 0; p !== c.length; ++p) {
    o = o * 26 + c.charCodeAt(p) - 64;
  }
  return o - 1;
}
function jo(r) {
  if (r < 0) {
    throw new Error("invalid column " + r);
  }
  var c = "";
  for (++r; r; r = Math.floor((r - 1) / 26)) {
    c = String.fromCharCode((r - 1) % 26 + 65) + c;
  }
  return c;
}
function Qo(r) {
  for (var c = 0, o = 0, p = 0; p < r.length; ++p) {
    var _ = r.charCodeAt(p);
    if (_ >= 48 && _ <= 57) {
      c = c * 10 + (_ - 48);
    } else if (_ >= 65 && _ <= 90) {
      o = o * 26 + (_ - 64);
    }
  }
  return {
    c: o - 1,
    r: c - 1
  };
}
function Eo(r) {
  for (var c = r.c + 1, o = ""; c; c = (c - 1) / 26 | 0) {
    o = String.fromCharCode((c - 1) % 26 + 65) + o;
  }
  return o + (r.r + 1);
}
function ml(r) {
  var c = r.indexOf(":");
  if (c == -1) {
    return {
      s: Qo(r),
      e: Qo(r)
    };
  } else {
    return {
      s: Qo(r.slice(0, c)),
      e: Qo(r.slice(c + 1))
    };
  }
}
function $o(r, c) {
  if (typeof c === "undefined" || typeof c == "number") {
    return $o(r.s, r.e);
  } else {
    if (typeof r != "string") {
      r = Eo(r);
    }
    if (typeof c != "string") {
      c = Eo(c);
    }
    if (r == c) {
      return r;
    } else {
      return r + ":" + c;
    }
  }
}
function Su(r) {
  var c = ml(r);
  return "$" + jo(c.s.c) + "$" + Da(c.s.r) + ":$" + jo(c.e.c) + "$" + Da(c.e.r);
}
function mc(r, c) {
  if (!r && (!c || c.biff > 5 || c.biff < 2)) {
    throw new Error("empty sheet name");
  }
  if (/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(r)) {
    return "'" + r.replace(/'/g, "''") + "'";
  } else {
    return r;
  }
}
function Ps(r) {
  var c = {
    s: {
      c: 0,
      r: 0
    },
    e: {
      c: 0,
      r: 0
    }
  };
  var o = 0;
  var p = 0;
  var _ = 0;
  var V = r.length;
  for (o = 0; p < V && (_ = r.charCodeAt(p) - 64) >= 1 && _ <= 26; ++p) {
    o = o * 26 + _;
  }
  c.s.c = --o;
  o = 0;
  for (; p < V && (_ = r.charCodeAt(p) - 48) >= 0 && _ <= 9; ++p) {
    o = o * 10 + _;
  }
  c.s.r = --o;
  if (p === V || _ != 10) {
    c.e.c = c.s.c;
    c.e.r = c.s.r;
    return c;
  }
  ++p;
  o = 0;
  for (; p != V && (_ = r.charCodeAt(p) - 64) >= 1 && _ <= 26; ++p) {
    o = o * 26 + _;
  }
  c.e.c = --o;
  o = 0;
  for (; p != V && (_ = r.charCodeAt(p) - 48) >= 0 && _ <= 9; ++p) {
    o = o * 10 + _;
  }
  c.e.r = --o;
  return c;
}
function lc(r, c, o) {
  if (r == null || r.t == null || r.t == "z") {
    return "";
  } else if (r.w !== undefined) {
    return r.w;
  } else {
    if (r.t == "d" && !r.z && o && o.dateNF) {
      r.z = o.dateNF;
    }
    if (r.t == "e") {
      return On[r.v] || r.v;
    } else {
      return function Ii(r, c) {
        var o = r.t == "d" && c instanceof Date;
        if (r.z != null) {
          try {
            return r.w = Zr(r.z, o ? So(c) : c);
          } catch {}
        }
        try {
          return r.w = Zr((r.XF || {}).numFmtId || (o ? 14 : 0), o ? So(c) : c);
        } catch {
          return "" + c;
        }
      }(r, c ?? r.v);
    }
  }
}
function cc(r, c) {
  var o = c && c.sheet ? c.sheet : "Sheet1";
  var p = {
    [o]: r
  };
  return {
    SheetNames: [o],
    Sheets: p
  };
}
function To(r, c) {
  return function uc(r, c, o) {
    var p = o || {};
    var _ = r ? r["!data"] != null : p.dense;
    var V = r || {};
    if (_ && !V["!data"]) {
      V["!data"] = [];
    }
    var Y = 0;
    var ee = 0;
    if (V && p.origin != null) {
      if (typeof p.origin == "number") {
        Y = p.origin;
      } else {
        var Te = typeof p.origin == "string" ? Qo(p.origin) : p.origin;
        Y = Te.r;
        ee = Te.c;
      }
      V["!ref"] ||= "A1:A1";
    }
    var Ne = {
      s: {
        c: 10000000,
        r: 10000000
      },
      e: {
        c: 0,
        r: 0
      }
    };
    if (V["!ref"]) {
      var ze = Ps(V["!ref"]);
      Ne.s.c = ze.s.c;
      Ne.s.r = ze.s.r;
      Ne.e.c = Math.max(Ne.e.c, ze.e.c);
      Ne.e.r = Math.max(Ne.e.r, ze.e.r);
      if (Y == -1) {
        Ne.e.r = Y = ze.e.r + 1;
      }
    }
    for (var Ft = [], _t = 0; _t != c.length; ++_t) {
      if (c[_t]) {
        if (!Array.isArray(c[_t])) {
          throw new Error("aoa_to_sheet expects an array of arrays");
        }
        var Ot = Y + _t;
        var zt = "" + (Ot + 1);
        if (_) {
          V["!data"][Ot] ||= [];
          Ft = V["!data"][Ot];
        }
        for (var nn = 0; nn != c[_t].length; ++nn) {
          if (typeof c[_t][nn] !== "undefined") {
            var Pt = {
              v: c[_t][nn]
            };
            var rn = ee + nn;
            if (Ne.s.r > Ot) {
              Ne.s.r = Ot;
            }
            if (Ne.s.c > rn) {
              Ne.s.c = rn;
            }
            if (Ne.e.r < Ot) {
              Ne.e.r = Ot;
            }
            if (Ne.e.c < rn) {
              Ne.e.c = rn;
            }
            if (!c[_t][nn] || typeof c[_t][nn] != "object" || Array.isArray(c[_t][nn]) || c[_t][nn] instanceof Date) {
              if (Array.isArray(Pt.v)) {
                Pt.f = c[_t][nn][1];
                Pt.v = Pt.v[0];
              }
              if (Pt.v === null) {
                if (Pt.f) {
                  Pt.t = "n";
                } else if (p.nullError) {
                  Pt.t = "e";
                  Pt.v = 0;
                } else {
                  if (!p.sheetStubs) {
                    continue;
                  }
                  Pt.t = "z";
                }
              } else if (typeof Pt.v == "number") {
                Pt.t = "n";
              } else if (typeof Pt.v == "boolean") {
                Pt.t = "b";
              } else if (Pt.v instanceof Date) {
                Pt.z = p.dateNF || Kt[14];
                if (!p.UTC) {
                  Pt.v = Lr(Pt.v);
                }
                if (p.cellDates) {
                  Pt.t = "d";
                  Pt.w = Zr(Pt.z, So(Pt.v, p.date1904));
                } else {
                  Pt.t = "n";
                  Pt.v = So(Pt.v, p.date1904);
                  Pt.w = Zr(Pt.z, Pt.v);
                }
              } else {
                Pt.t = "s";
              }
            } else {
              Pt = c[_t][nn];
            }
            if (_) {
              if (Ft[rn] && Ft[rn].z) {
                Pt.z = Ft[rn].z;
              }
              Ft[rn] = Pt;
            } else {
              var yn = jo(rn) + zt;
              if (V[yn] && V[yn].z) {
                Pt.z = V[yn].z;
              }
              V[yn] = Pt;
            }
          }
        }
      }
    }
    if (Ne.s.c < 10000000) {
      V["!ref"] = $o(Ne);
    }
    return V;
  }(null, r, c);
}
function rc(r, c) {
  c ||= Gi(4);
  c.write_shift(4, r);
  return c;
}
function Gl(r) {
  var c = r.read_shift(4);
  if (c === 0) {
    return "";
  } else {
    return r.read_shift(c, "dbcs");
  }
}
function Al(r, c) {
  var o = false;
  if (c == null) {
    o = true;
    c = Gi(4 + r.length * 2);
  }
  c.write_shift(4, r.length);
  if (r.length > 0) {
    c.write_shift(0, r, "dbcs");
  }
  if (o) {
    return c.slice(0, c.l);
  } else {
    return c;
  }
}
function wd(r) {
  return {
    ich: r.read_shift(2),
    ifnt: r.read_shift(2)
  };
}
function Xl(r, c) {
  var o = r.l;
  var p = r.read_shift(1);
  var _ = Gl(r);
  var V = [];
  var Y = {
    t: _,
    h: _
  };
  if ((p & 1) != 0) {
    for (var ee = r.read_shift(4), Te = 0; Te != ee; ++Te) {
      V.push(wd(r));
    }
    Y.r = V;
  } else {
    Y.r = [{
      ich: 0,
      ifnt: 0
    }];
  }
  r.l = o + c;
  return Y;
}
var md = Xl;
function Ll(r) {
  var c = r.read_shift(4);
  var o = r.read_shift(2);
  o += r.read_shift(1) << 16;
  r.l++;
  return {
    c,
    iStyleRef: o
  };
}
function Hc(r, c) {
  if (c == null) {
    c = Gi(8);
  }
  c.write_shift(-4, r.c);
  c.write_shift(3, r.iStyleRef || r.s);
  c.write_shift(1, 0);
  return c;
}
function sc(r) {
  var c = r.read_shift(2);
  c += r.read_shift(1) << 16;
  r.l++;
  return {
    c: -1,
    iStyleRef: c
  };
}
function Uc(r, c) {
  if (c == null) {
    c = Gi(4);
  }
  c.write_shift(3, r.iStyleRef || r.s);
  c.write_shift(1, 0);
  return c;
}
var Du = Gl;
var vc = Al;
function xl(r) {
  var c = r.read_shift(4);
  if (c === 0 || c === 4294967295) {
    return "";
  } else {
    return r.read_shift(c, "dbcs");
  }
}
function yc(r, c) {
  var o = false;
  if (c == null) {
    o = true;
    c = Gi(127);
  }
  c.write_shift(4, r.length > 0 ? r.length : 4294967295);
  if (r.length > 0) {
    c.write_shift(0, r, "dbcs");
  }
  if (o) {
    return c.slice(0, c.l);
  } else {
    return c;
  }
}
var Vd = Gl;
var vl = xl;
var Mo = yc;
function ol(r) {
  var c = r.slice(r.l, r.l + 4);
  var o = c[0] & 1;
  var p = c[0] & 2;
  r.l += 4;
  var _ = p === 0 ? Ts([0, 0, 0, 0, c[0] & 252, c[1], c[2], c[3]], 0) : As(c, 0) >> 2;
  if (o) {
    return _ / 100;
  } else {
    return _;
  }
}
function Sd(r, c) {
  if (c == null) {
    c = Gi(4);
  }
  var o = 0;
  var p = 0;
  var _ = r * 100;
  if (r == (r | 0) && r >= -(1 << 29) && r < 1 << 29) {
    p = 1;
  } else if (_ == (_ | 0) && _ >= -(1 << 29) && _ < 1 << 29) {
    p = 1;
    o = 1;
  }
  if (!p) {
    throw new Error("unsupported RkNumber " + r);
  }
  c.write_shift(-4, ((o ? _ : r) << 2) + (o + 2));
}
function mf(r) {
  var c = {
    s: {},
    e: {}
  };
  c.s.r = r.read_shift(4);
  c.e.r = r.read_shift(4);
  c.s.c = r.read_shift(4);
  c.e.c = r.read_shift(4);
  return c;
}
var ts = mf;
var Ta = function za(r, c) {
  c ||= Gi(16);
  c.write_shift(4, r.s.r);
  c.write_shift(4, r.e.r);
  c.write_shift(4, r.s.c);
  c.write_shift(4, r.e.c);
  return c;
};
function Dl(r) {
  if (r.length - r.l < 8) {
    throw "XLS Xnum Buffer underflow";
  }
  return r.read_shift(8, "f");
}
function Qa(r, c) {
  return (c || Gi(8)).write_shift(8, r, "f");
}
function yu(r, c) {
  c ||= Gi(8);
  if (!r || r.auto) {
    c.write_shift(4, 0);
    c.write_shift(4, 0);
    return c;
  }
  if (r.index != null) {
    c.write_shift(1, 2);
    c.write_shift(1, r.index);
  } else if (r.theme != null) {
    c.write_shift(1, 6);
    c.write_shift(1, r.theme);
  } else {
    c.write_shift(1, 5);
    c.write_shift(1, 0);
  }
  var o = r.tint || 0;
  if (o > 0) {
    o *= 32767;
  } else if (o < 0) {
    o *= 32768;
  }
  c.write_shift(2, o);
  if (r.rgb && r.theme == null) {
    var p = r.rgb || "FFFFFF";
    if (typeof p == "number") {
      p = ("000000" + p.toString(16)).slice(-6);
    }
    c.write_shift(1, parseInt(p.slice(0, 2), 16));
    c.write_shift(1, parseInt(p.slice(2, 4), 16));
    c.write_shift(1, parseInt(p.slice(4, 6), 16));
    c.write_shift(1, 255);
  } else {
    c.write_shift(2, 0);
    c.write_shift(1, 0);
    c.write_shift(1, 0);
  }
  return c;
}
function Bc(r, c) {
  var p = r.read_shift(4);
  switch (p) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return {
        2: "BITMAP",
        3: "METAFILEPICT",
        8: "DIB",
        14: "ENHMETAFILE"
      }[r.read_shift(4)] || "";
  }
  if (p > 400) {
    throw new Error("Unsupported Clipboard: " + p.toString(16));
  }
  r.l -= 4;
  return r.read_shift(0, c == 1 ? "lpstr" : "lpwstr");
}
var Tn = [80, 81];
var Ri = {
  1: {
    n: "CodePage",
    t: 2
  },
  2: {
    n: "Category",
    t: 80
  },
  3: {
    n: "PresentationFormat",
    t: 80
  },
  4: {
    n: "ByteCount",
    t: 3
  },
  5: {
    n: "LineCount",
    t: 3
  },
  6: {
    n: "ParagraphCount",
    t: 3
  },
  7: {
    n: "SlideCount",
    t: 3
  },
  8: {
    n: "NoteCount",
    t: 3
  },
  9: {
    n: "HiddenCount",
    t: 3
  },
  10: {
    n: "MultimediaClipCount",
    t: 3
  },
  11: {
    n: "ScaleCrop",
    t: 11
  },
  12: {
    n: "HeadingPairs",
    t: 4108
  },
  13: {
    n: "TitlesOfParts",
    t: 4126
  },
  14: {
    n: "Manager",
    t: 80
  },
  15: {
    n: "Company",
    t: 80
  },
  16: {
    n: "LinksUpToDate",
    t: 11
  },
  17: {
    n: "CharacterCount",
    t: 3
  },
  19: {
    n: "SharedDoc",
    t: 11
  },
  22: {
    n: "HyperlinksChanged",
    t: 11
  },
  23: {
    n: "AppVersion",
    t: 3,
    p: "version"
  },
  24: {
    n: "DigSig",
    t: 65
  },
  26: {
    n: "ContentType",
    t: 80
  },
  27: {
    n: "ContentStatus",
    t: 80
  },
  28: {
    n: "Language",
    t: 80
  },
  29: {
    n: "Version",
    t: 80
  },
  255: {},
  2147483648: {
    n: "Locale",
    t: 19
  },
  2147483651: {
    n: "Behavior",
    t: 19
  },
  1919054434: {}
};
var Yr = {
  1: {
    n: "CodePage",
    t: 2
  },
  2: {
    n: "Title",
    t: 80
  },
  3: {
    n: "Subject",
    t: 80
  },
  4: {
    n: "Author",
    t: 80
  },
  5: {
    n: "Keywords",
    t: 80
  },
  6: {
    n: "Comments",
    t: 80
  },
  7: {
    n: "Template",
    t: 80
  },
  8: {
    n: "LastAuthor",
    t: 80
  },
  9: {
    n: "RevNumber",
    t: 80
  },
  10: {
    n: "EditTime",
    t: 64
  },
  11: {
    n: "LastPrinted",
    t: 64
  },
  12: {
    n: "CreatedDate",
    t: 64
  },
  13: {
    n: "ModifiedDate",
    t: 64
  },
  14: {
    n: "PageCount",
    t: 3
  },
  15: {
    n: "WordCount",
    t: 3
  },
  16: {
    n: "CharCount",
    t: 3
  },
  17: {
    n: "Thumbnail",
    t: 71
  },
  18: {
    n: "Application",
    t: 80
  },
  19: {
    n: "DocSecurity",
    t: 3
  },
  255: {},
  2147483648: {
    n: "Locale",
    t: 19
  },
  2147483651: {
    n: "Behavior",
    t: 19
  },
  1919054434: {}
};
var Bs = {
  1: "US",
  2: "CA",
  3: "",
  7: "RU",
  20: "EG",
  30: "GR",
  31: "NL",
  32: "BE",
  33: "FR",
  34: "ES",
  36: "HU",
  39: "IT",
  41: "CH",
  43: "AT",
  44: "GB",
  45: "DK",
  46: "SE",
  47: "NO",
  48: "PL",
  49: "DE",
  52: "MX",
  55: "BR",
  61: "AU",
  64: "NZ",
  66: "TH",
  81: "JP",
  82: "KR",
  84: "VN",
  86: "CN",
  90: "TR",
  105: "JS",
  213: "DZ",
  216: "MA",
  218: "LY",
  351: "PT",
  354: "IS",
  358: "FI",
  420: "CZ",
  886: "TW",
  961: "LB",
  962: "JO",
  963: "SY",
  964: "IQ",
  965: "KW",
  966: "SA",
  971: "AE",
  972: "IL",
  974: "QA",
  981: "IR",
  65535: "US"
};
var Nt = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function Ke(r) {
  return r.map(function (c) {
    return [c >> 16 & 255, c >> 8 & 255, c & 255];
  });
}
var jt = Vs(Ke([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 0, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
var On = {
  0: "#NULL!",
  7: "#DIV/0!",
  15: "#VALUE!",
  23: "#REF!",
  29: "#NAME?",
  36: "#NUM!",
  42: "#N/A",
  43: "#GETTING_DATA",
  255: "#WTF?"
};
var ri = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
};
var Bi = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];
var wr = {
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  "application/vnd.ms-office.chartex+xml": "TODO",
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  "application/vnd.ms-excel.wsSortMap": "TODO",
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  "application/vnd.ms-excel.Survey+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  "image/png": "TODO",
  sheet: "js"
};
var Kr = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function ce(r, c, o) {
  var V;
  var p = function Za(r) {
    for (var c = [], o = qs(r), p = 0; p !== o.length; ++p) {
      if (c[r[o[p]]] == null) {
        c[r[o[p]]] = [];
      }
      c[r[o[p]]].push(o[p]);
    }
    return c;
  }(wr);
  var _ = [];
  if (!o) {
    _[_.length] = nr;
    _[_.length] = wt("Types", null, {
      xmlns: pi_CT,
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": pi_xsi
    });
    _ = _.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function (Ne) {
      return wt("Default", null, {
        Extension: Ne[0],
        ContentType: Ne[1]
      });
    }));
  }
  function Y(Ne) {
    if (r[Ne] && r[Ne].length > 0) {
      _[_.length] = wt("Override", null, {
        PartName: ((V = r[Ne][0])[0] == "/" ? "" : "/") + V,
        ContentType: Kr[Ne][c.bookType] || Kr[Ne].xlsx
      });
    }
  }
  function ee(Ne) {
    (r[Ne] || []).forEach(function (ze) {
      _[_.length] = wt("Override", null, {
        PartName: (ze[0] == "/" ? "" : "/") + ze,
        ContentType: Kr[Ne][c.bookType] || Kr[Ne].xlsx
      });
    });
  }
  function Te(Ne) {
    (r[Ne] || []).forEach(function (ze) {
      _[_.length] = wt("Override", null, {
        PartName: (ze[0] == "/" ? "" : "/") + ze,
        ContentType: p[Ne][0]
      });
    });
  }
  Y("workbooks");
  ee("sheets");
  ee("charts");
  Te("themes");
  ["strs", "styles"].forEach(Y);
  ["coreprops", "extprops", "custprops"].forEach(Te);
  Te("vba");
  Te("comments");
  Te("threadedcomments");
  Te("drawings");
  ee("metadata");
  Te("people");
  if (!o && _.length > 2) {
    _[_.length] = "</Types>";
    _[1] = _[1].replace("/>", ">");
  }
  return _.join("");
}
var nt = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function sn(r) {
  var c = r.lastIndexOf("/");
  return r.slice(0, c + 1) + "_rels/" + r.slice(c + 1) + ".rels";
}
function Pn(r, c) {
  var o = {
    "!id": {}
  };
  if (!r) {
    return o;
  }
  if (c.charAt(0) !== "/") {
    c = "/" + c;
  }
  var p = {};
  (r.match(Ys) || []).forEach(function (_) {
    var V = sr(_);
    if (V[0] === "<Relationship") {
      var Y = {
        Type: V.Type
      };
      Y.Target = Rr(V.Target);
      Y.Id = V.Id;
      if (V.TargetMode) {
        Y.TargetMode = V.TargetMode;
      }
      var ee = V.TargetMode === "External" ? V.Target : Xi(V.Target, c);
      o[ee] = Y;
      p[V.Id] = Y;
    }
  });
  o["!id"] = p;
  return o;
}
function Ei(r) {
  var c = [nr, wt("Relationships", null, {
    xmlns: "http://schemas.openxmlformats.org/package/2006/relationships"
  })];
  qs(r["!id"]).forEach(function (o) {
    c[c.length] = wt("Relationship", null, r["!id"][o]);
  });
  if (c.length > 2) {
    c[c.length] = "</Relationships>";
    c[1] = c[1].replace("/>", ">");
  }
  return c.join("");
}
function Hi(r, c, o, p, _, V) {
  _ ||= {};
  r["!id"] ||= {};
  r["!idx"] ||= 1;
  if (c < 0) {
    for (c = r["!idx"]; r["!id"]["rId" + c]; ++c);
  }
  r["!idx"] = c + 1;
  _.Id = "rId" + c;
  _.Type = p;
  _.Target = o;
  if (V) {
    _.TargetMode = V;
  } else if ([nt.HLINK, nt.XPATH, nt.XMISS].indexOf(_.Type) > -1) {
    _.TargetMode = "External";
  }
  if (r["!id"][_.Id]) {
    throw new Error("Cannot rewrite rId " + c);
  }
  r["!id"][_.Id] = _;
  r[("/" + _.Target).replace("//", "/")] = _;
  return c;
}
function Ja(r, c, o) {
  return ["  <rdf:Description rdf:about=\"" + r + "\">\n", "    <rdf:type rdf:resource=\"http://docs.oasis-open.org/ns/office/1.2/meta/" + (o || "odf") + "#" + c + "\"/>\n", "  </rdf:Description>\n"].join("");
}
function oc(r, c) {
  return ["  <rdf:Description rdf:about=\"" + r + "\">\n", "    <ns0:hasPart xmlns:ns0=\"http://docs.oasis-open.org/ns/office/1.2/meta/pkg#\" rdf:resource=\"" + c + "\"/>\n", "  </rdf:Description>\n"].join("");
}
function Cl(r, c) {
  return "<office:document-meta xmlns:office=\"urn:oasis:names:tc:opendocument:xmlns:office:1.0\" xmlns:meta=\"urn:oasis:names:tc:opendocument:xmlns:meta:1.0\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" office:version=\"1.2\"><office:meta><meta:generator>SheetJS " + U_version + "</meta:generator></office:meta></office:document-meta>";
}
var yl = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
var Hl = function () {
  for (var r = new Array(yl.length), c = 0; c < yl.length; ++c) {
    var o = yl[c];
    var p = "(?:" + o[0].slice(0, o[0].indexOf(":")) + ":)" + o[0].slice(o[0].indexOf(":") + 1);
    r[c] = new RegExp("<" + p + "[^>]*>([\\s\\S]*?)</" + p + ">");
  }
  return r;
}();
function _c(r) {
  var c = {};
  r = Ns(r);
  for (var o = 0; o < yl.length; ++o) {
    var p = yl[o];
    var _ = r.match(Hl[o]);
    if (_ != null && _.length > 0) {
      c[p[1]] = Rr(_[1]);
    }
    if (p[2] === "date" && c[p[1]]) {
      c[p[1]] = Rs(c[p[1]]);
    }
  }
  return c;
}
function Go(r, c, o, p, _) {
  if (_[r] == null && c != null && c !== "") {
    _[r] = c;
    c = Mr(c);
    p[p.length] = o ? wt(r, c, o) : Aa(r, c);
  }
}
function Wl(r, c) {
  var o = c || {};
  var p = [nr, wt("cp:coreProperties", null, {
    "xmlns:cp": "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:dcterms": "http://purl.org/dc/terms/",
    "xmlns:dcmitype": "http://purl.org/dc/dcmitype/",
    "xmlns:xsi": pi_xsi
  })];
  var _ = {};
  if (!r && !o.Props) {
    return p.join("");
  }
  if (r) {
    if (r.CreatedDate != null) {
      Go("dcterms:created", typeof r.CreatedDate == "string" ? r.CreatedDate : mn(r.CreatedDate, o.WTF), {
        "xsi:type": "dcterms:W3CDTF"
      }, p, _);
    }
    if (r.ModifiedDate != null) {
      Go("dcterms:modified", typeof r.ModifiedDate == "string" ? r.ModifiedDate : mn(r.ModifiedDate, o.WTF), {
        "xsi:type": "dcterms:W3CDTF"
      }, p, _);
    }
  }
  for (var V = 0; V != yl.length; ++V) {
    var Y = yl[V];
    var ee = o.Props && o.Props[Y[1]] != null ? o.Props[Y[1]] : r ? r[Y[1]] : null;
    if (ee === true) {
      ee = "1";
    } else if (ee === false) {
      ee = "0";
    } else if (typeof ee == "number") {
      ee = String(ee);
    }
    if (ee != null) {
      Go(Y[0], ee, null, p, _);
    }
  }
  if (p.length > 2) {
    p[p.length] = "</cp:coreProperties>";
    p[1] = p[1].replace("/>", ">");
  }
  return p.join("");
}
var Yc = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];
var Tu = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
function qd(r, c, o, p) {
  var _ = [];
  if (typeof r == "string") {
    _ = $r(r, p);
  } else {
    for (var V = 0; V < r.length; ++V) {
      _ = _.concat(r[V].map(function (ze) {
        return {
          v: ze
        };
      }));
    }
  }
  var Y = typeof c == "string" ? $r(c, p).map(function (ze) {
    return ze.v;
  }) : c;
  var ee = 0;
  var Te = 0;
  if (Y.length > 0) {
    for (var Ne = 0; Ne !== _.length; Ne += 2) {
      Te = +_[Ne + 1].v;
      switch (_[Ne].v) {
        case "Worksheets":
        case "工作表":
        case "Листы":
        case "أوراق العمل":
        case "ワークシート":
        case "גליונות עבודה":
        case "Arbeitsblätter":
        case "Çalışma Sayfaları":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de cálculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de cálculo":
        case "Werkbladen":
          o.Worksheets = Te;
          o.SheetNames = Y.slice(ee, ee + Te);
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "名前付き一覧":
        case "Benannte Bereiche":
        case "Navngivne områder":
          o.NamedRanges = Te;
          o.DefinedNames = Y.slice(ee, ee + Te);
          break;
        case "Charts":
        case "Diagramme":
          o.Chartsheets = Te;
          o.ChartNames = Y.slice(ee, ee + Te);
      }
      ee += Te;
    }
  }
}
function Tc(r) {
  var c = [];
  var o = wt;
  r ||= {};
  r.Application = "SheetJS";
  c[c.length] = nr;
  c[c.length] = wt("Properties", null, {
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
    "xmlns:vt": pi_vt
  });
  Yc.forEach(function (p) {
    if (r[p[1]] !== undefined) {
      var _;
      switch (p[2]) {
        case "string":
          _ = Mr(String(r[p[1]]));
          break;
        case "bool":
          _ = r[p[1]] ? "true" : "false";
      }
      if (_ !== undefined) {
        c[c.length] = o(p[0], _);
      }
    }
  });
  c[c.length] = o("HeadingPairs", o("vt:vector", o("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + o("vt:variant", o("vt:i4", String(r.Worksheets))), {
    size: 2,
    baseType: "variant"
  }));
  c[c.length] = o("TitlesOfParts", o("vt:vector", r.SheetNames.map(function (p) {
    return "<vt:lpstr>" + Mr(p) + "</vt:lpstr>";
  }).join(""), {
    size: r.Worksheets,
    baseType: "lpstr"
  }));
  if (c.length > 2) {
    c[c.length] = "</Properties>";
    c[1] = c[1].replace("/>", ">");
  }
  return c.join("");
}
var jl = /<[^>]+>[^<]*/g;
function rd(r) {
  var c = [nr, wt("Properties", null, {
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
    "xmlns:vt": pi_vt
  })];
  if (!r) {
    return c.join("");
  }
  var o = 1;
  qs(r).forEach(function (_) {
    ++o;
    c[c.length] = wt("property", function zn(r, c) {
      switch (typeof r) {
        case "string":
          var o = wt("vt:lpwstr", Mr(r));
          if (c) {
            o = o.replace(/&quot;/g, "_x0022_");
          }
          return o;
        case "number":
          return wt((r | 0) == r ? "vt:i4" : "vt:r8", Mr(String(r)));
        case "boolean":
          return wt("vt:bool", r ? "true" : "false");
      }
      if (r instanceof Date) {
        return wt("vt:filetime", mn(r));
      }
      throw new Error("Unable to serialize " + r);
    }(r[_], true), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: o,
      name: Mr(_)
    });
  });
  if (c.length > 2) {
    c[c.length] = "</Properties>";
    c[1] = c[1].replace("/>", ">");
  }
  return c.join("");
}
var jc;
var au = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  Category: "Category",
  Manager: "Manager",
  Company: "Company",
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  Identifier: "Identifier",
  Language: "Language"
};
function sd(r, c, o) {
  jc ||= ha(au);
  r[c = jc[c] || c] = o;
}
function lu(r) {
  var c = r.read_shift(4);
  var o = r.read_shift(4);
  return new Date((o / 10000000 * Math.pow(2, 32) + c / 10000000 - 11644473600) * 1000).toISOString().replace(/\.000/, "");
}
function vf(r, c, o) {
  var p = r.l;
  var _ = r.read_shift(0, "lpstr-cp");
  if (o) {
    for (; r.l - p & 3;) {
      ++r.l;
    }
  }
  return _;
}
function vd(r, c, o) {
  var p = r.read_shift(0, "lpwstr");
  if (o) {
    r.l += 4 - (p.length + 1 & 3) & 3;
  }
  return p;
}
function Wd(r, c, o) {
  if (c === 31) {
    return vd(r);
  } else {
    return vf(r, 0, o);
  }
}
function yd(r, c, o) {
  return Wd(r, c, o === false ? 0 : 4);
}
function xa(r) {
  var c = r.l;
  var o = Cn(r, 81);
  if (r[r.l] == 0 && r[r.l + 1] == 0 && r.l - c & 2) {
    r.l += 2;
  }
  return [o, Cn(r, 3)];
}
function Ye(r, c) {
  for (var o = r.read_shift(4), p = {}, _ = 0; _ != o; ++_) {
    var V = r.read_shift(4);
    var Y = r.read_shift(4);
    p[V] = r.read_shift(Y, c === 1200 ? "utf16le" : "utf8").replace(Lt, "").replace(ft, "!");
    if (c === 1200 && Y % 2) {
      r.l += 2;
    }
  }
  if (r.l & 3) {
    r.l = r.l >> 3 << 2;
  }
  return p;
}
function Mt(r) {
  var c = r.read_shift(4);
  var o = r.slice(r.l, r.l + c);
  r.l += c;
  if ((c & 3) > 0) {
    r.l += 4 - (c & 3) & 3;
  }
  return o;
}
function Cn(r, c, o) {
  var _;
  var p = r.read_shift(2);
  var V = o || {};
  r.l += 2;
  if (c !== 12 && p !== c && Tn.indexOf(c) === -1 && ((c & 65534) != 4126 || (p & 65534) != 4126)) {
    throw new Error("Expected type " + c + " saw " + p);
  }
  switch (c === 12 ? p : c) {
    case 2:
      _ = r.read_shift(2, "i");
      if (!V.raw) {
        r.l += 2;
      }
      return _;
    case 3:
      return r.read_shift(4, "i");
    case 11:
      return r.read_shift(4) !== 0;
    case 19:
      return r.read_shift(4);
    case 30:
      return vf(r, 0, 4).replace(Lt, "");
    case 31:
      return vd(r);
    case 64:
      return lu(r);
    case 65:
      return Mt(r);
    case 71:
      return function Qt(r) {
        var c = {};
        c.Size = r.read_shift(4);
        r.l += c.Size + 3 - (c.Size - 1) % 4;
        return c;
      }(r);
    case 80:
      return yd(r, p, !V.raw).replace(Lt, "");
    case 81:
      return function Hu(r, c) {
        if (!c) {
          throw new Error("VtUnalignedString must have positive length");
        }
        return Wd(r, c, 0);
      }(r, p).replace(Lt, "");
    case 4108:
      return function ue(r) {
        for (var c = r.read_shift(4), o = [], p = 0; p < c / 2; ++p) {
          o.push(xa(r));
        }
        return o;
      }(r);
    case 4126:
    case 4127:
      if (p == 4127) {
        return function Mc(r) {
          for (var c = r.read_shift(4), o = [], p = 0; p != c; ++p) {
            var _ = r.l;
            o[p] = r.read_shift(0, "lpwstr").replace(Lt, "");
            if (r.l - _ & 2) {
              r.l += 2;
            }
          }
          return o;
        }(r);
      } else {
        return function Yd(r) {
          for (var c = r.read_shift(4), o = [], p = 0; p != c; ++p) {
            o[p] = r.read_shift(0, "lpstr-cp").replace(Lt, "");
          }
          return o;
        }(r);
      }
    default:
      throw new Error("TypedPropertyValue unrecognized type " + c + " " + p);
  }
}
function gi(r, c) {
  var o = Gi(4);
  var p = Gi(4);
  o.write_shift(4, r == 80 ? 31 : r);
  switch (r) {
    case 3:
      p.write_shift(-4, c);
      break;
    case 5:
      (p = Gi(8)).write_shift(8, c, "f");
      break;
    case 11:
      p.write_shift(4, c ? 1 : 0);
      break;
    case 64:
      p = function Qc(r) {
        var o = (typeof r == "string" ? new Date(Date.parse(r)) : r).getTime() / 1000 + 11644473600;
        var p = o % Math.pow(2, 32);
        var _ = (o - p) / Math.pow(2, 32);
        _ *= 10000000;
        var V = (p *= 10000000) / Math.pow(2, 32) | 0;
        if (V > 0) {
          p %= Math.pow(2, 32);
          _ += V;
        }
        var Y = Gi(8);
        Y.write_shift(4, p);
        Y.write_shift(4, _);
        return Y;
      }(c);
      break;
    case 31:
    case 80:
      (p = Gi(4 + (c.length + 1) * 2 + (c.length % 2 ? 0 : 2))).write_shift(4, c.length + 1);
      p.write_shift(0, c, "dbcs");
      for (; p.l != p.length;) {
        p.write_shift(1, 0);
      }
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + c);
  }
  return St([o, p]);
}
function J(r, c) {
  var o = r.l;
  var p = r.read_shift(4);
  var _ = r.read_shift(4);
  var V = [];
  var Y = 0;
  var ee = 0;
  var Te = -1;
  var Ne = {};
  for (Y = 0; Y != _; ++Y) {
    var ze = r.read_shift(4);
    var Ft = r.read_shift(4);
    V[Y] = [ze, Ft + o];
  }
  V.sort(function (yn, un) {
    return yn[1] - un[1];
  });
  var _t = {};
  for (Y = 0; Y != _; ++Y) {
    if (r.l !== V[Y][1]) {
      var Ot = true;
      if (Y > 0 && c) {
        switch (c[V[Y - 1][0]].t) {
          case 2:
            if (r.l + 2 === V[Y][1]) {
              r.l += 2;
              Ot = false;
            }
            break;
          case 80:
          case 4108:
            if (r.l <= V[Y][1]) {
              r.l = V[Y][1];
              Ot = false;
            }
        }
      }
      if ((!c || Y == 0) && r.l <= V[Y][1]) {
        Ot = false;
        r.l = V[Y][1];
      }
      if (Ot) {
        throw new Error("Read Error: Expected address " + V[Y][1] + " at " + r.l + " :" + Y);
      }
    }
    if (c) {
      if (V[Y][0] == 0 && V.length > Y + 1 && V[Y][1] == V[Y + 1][1]) {
        continue;
      }
      var zt = c[V[Y][0]];
      _t[zt.n] = Cn(r, zt.t, {
        raw: true
      });
      if (zt.p === "version") {
        _t[zt.n] = String(_t[zt.n] >> 16) + "." + ("0000" + String(_t[zt.n] & 65535)).slice(-4);
      }
      if (zt.n == "CodePage") {
        switch (_t[zt.n]) {
          case 0:
            _t[zt.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 10000:
          case 1200:
          case 1201:
          case 1252:
          case 65000:
          case -536:
          case 65001:
          case -535:
            j(ee = _t[zt.n] >>> 0 & 65535);
            break;
          default:
            throw new Error("Unsupported CodePage: " + _t[zt.n]);
        }
      }
    } else if (V[Y][0] === 1) {
      ee = _t.CodePage = Cn(r, 2);
      j(ee);
      if (Te !== -1) {
        var nn = r.l;
        r.l = V[Te][1];
        Ne = Ye(r, ee);
        r.l = nn;
      }
    } else if (V[Y][0] === 0) {
      if (ee === 0) {
        Te = Y;
        r.l = V[Y + 1][1];
        continue;
      }
      Ne = Ye(r, ee);
    } else {
      var rn;
      var Pt = Ne[V[Y][0]];
      switch (r[r.l]) {
        case 65:
          r.l += 4;
          rn = Mt(r);
          break;
        case 30:
        case 31:
          r.l += 4;
          rn = yd(r, r[r.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          r.l += 4;
          rn = r.read_shift(4, "i");
          break;
        case 19:
          r.l += 4;
          rn = r.read_shift(4);
          break;
        case 5:
          r.l += 4;
          rn = r.read_shift(8, "f");
          break;
        case 11:
          r.l += 4;
          rn = ca(r, 4);
          break;
        case 64:
          r.l += 4;
          rn = Rs(lu(r));
          break;
        default:
          throw new Error("unparsed value: " + r[r.l]);
      }
      _t[Pt] = rn;
    }
  }
  r.l = o + p;
  return _t;
}
var Ce = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function tt(r) {
  switch (typeof r) {
    case "boolean":
      return 11;
    case "number":
      if ((r | 0) == r) {
        return 3;
      } else {
        return 5;
      }
    case "string":
      return 31;
    case "object":
      if (r instanceof Date) {
        return 64;
      }
  }
  return -1;
}
function Rt(r, c, o) {
  var p = Gi(8);
  var _ = [];
  var V = [];
  var Y = 8;
  var ee = 0;
  var Te = Gi(8);
  var Ne = Gi(8);
  Te.write_shift(4, 2);
  Te.write_shift(4, 1200);
  Ne.write_shift(4, 1);
  V.push(Te);
  _.push(Ne);
  Y += 8 + Te.length;
  if (!c) {
    (Ne = Gi(8)).write_shift(4, 0);
    _.unshift(Ne);
    var ze = [Gi(4)];
    ze[0].write_shift(4, r.length);
    ee = 0;
    for (; ee < r.length; ++ee) {
      var Ft = r[ee][0];
      (Te = Gi(8 + (Ft.length + 1) * 2 + (Ft.length % 2 ? 0 : 2))).write_shift(4, ee + 2);
      Te.write_shift(4, Ft.length + 1);
      Te.write_shift(0, Ft, "dbcs");
      for (; Te.l != Te.length;) {
        Te.write_shift(1, 0);
      }
      ze.push(Te);
    }
    Te = St(ze);
    V.unshift(Te);
    Y += 8 + Te.length;
  }
  for (ee = 0; ee < r.length; ++ee) {
    if ((!c || c[r[ee][0]]) && Ce.indexOf(r[ee][0]) <= -1 && Tu.indexOf(r[ee][0]) <= -1 && r[ee][1] != null) {
      var _t = r[ee][1];
      var Ot = 0;
      if (c) {
        var zt = o[Ot = +c[r[ee][0]]];
        if (zt.p == "version" && typeof _t == "string") {
          var nn = _t.split(".");
          _t = (+nn[0] << 16) + (+nn[1] || 0);
        }
        Te = gi(zt.t, _t);
      } else {
        var Pt = tt(_t);
        if (Pt == -1) {
          Pt = 31;
          _t = String(_t);
        }
        Te = gi(Pt, _t);
      }
      V.push(Te);
      (Ne = Gi(8)).write_shift(4, c ? Ot : 2 + ee);
      _.push(Ne);
      Y += 8 + Te.length;
    }
  }
  var rn = (V.length + 1) * 8;
  for (ee = 0; ee < V.length; ++ee) {
    _[ee].write_shift(4, rn);
    rn += V[ee].length;
  }
  p.write_shift(4, Y);
  p.write_shift(4, V.length);
  return St([p].concat(_).concat(V));
}
function ln(r, c, o) {
  var p = r.content;
  if (!p) {
    return {};
  }
  Vl(p, 0);
  var _;
  var V;
  var Y;
  var ee;
  var Te = 0;
  p.chk("feff", "Byte Order: ");
  p.read_shift(2);
  var Ne = p.read_shift(4);
  var ze = p.read_shift(16);
  if (ze !== Fr.utils.consts.HEADER_CLSID && ze !== o) {
    throw new Error("Bad PropertySet CLSID " + ze);
  }
  if ((_ = p.read_shift(4)) !== 1 && _ !== 2) {
    throw new Error("Unrecognized #Sets: " + _);
  }
  V = p.read_shift(16);
  ee = p.read_shift(4);
  if (_ === 1 && ee !== p.l) {
    throw new Error("Length mismatch: " + ee + " !== " + p.l);
  }
  if (_ === 2) {
    Y = p.read_shift(16);
    Te = p.read_shift(4);
  }
  var zt;
  var Ft = J(p, c);
  var _t = {
    SystemIdentifier: Ne
  };
  for (var Ot in Ft) {
    _t[Ot] = Ft[Ot];
  }
  _t.FMTID = V;
  if (_ === 1) {
    return _t;
  }
  if (Te - p.l == 2) {
    p.l += 2;
  }
  if (p.l !== Te) {
    throw new Error("Length mismatch 2: " + p.l + " !== " + Te);
  }
  try {
    zt = J(p, null);
  } catch {}
  for (Ot in zt) {
    _t[Ot] = zt[Ot];
  }
  _t.FMTID = [V, Y];
  return _t;
}
function ni(r, c, o, p, _, V) {
  var Y = Gi(_ ? 68 : 48);
  var ee = [Y];
  Y.write_shift(2, 65534);
  Y.write_shift(2, 0);
  Y.write_shift(4, 842412599);
  Y.write_shift(16, Fr.utils.consts.HEADER_CLSID, "hex");
  Y.write_shift(4, _ ? 2 : 1);
  Y.write_shift(16, c, "hex");
  Y.write_shift(4, _ ? 68 : 48);
  var Te = Rt(r, o, p);
  ee.push(Te);
  if (_) {
    var Ne = Rt(_, null, null);
    Y.write_shift(16, V, "hex");
    Y.write_shift(4, 68 + Te.length);
    ee.push(Ne);
  }
  return St(ee);
}
function Mi(r, c) {
  r.read_shift(c);
  return null;
}
function ca(r, c) {
  return r.read_shift(c) === 1;
}
function zl(r, c) {
  c ||= Gi(2);
  c.write_shift(2, +!!r);
  return c;
}
function wl(r) {
  return r.read_shift(2, "u");
}
function _u(r, c) {
  c ||= Gi(2);
  c.write_shift(2, r);
  return c;
}
function Oh(r, c) {
  return function $s(r, c, o) {
    for (var p = [], _ = r.l + c; r.l < _;) {
      p.push(o(r, _ - r.l));
    }
    if (_ !== r.l) {
      throw new Error("Slurp error");
    }
    return p;
  }(r, c, wl);
}
function Wm(r) {
  var c = r.read_shift(1);
  if (r.read_shift(1) === 1) {
    return c;
  } else {
    return c === 1;
  }
}
function ch(r, c, o) {
  o ||= Gi(2);
  o.write_shift(1, c == "e" ? +r : +!!r);
  o.write_shift(1, c == "e" ? 1 : 0);
  return o;
}
function yf(r, c, o) {
  var p = r.read_shift(o && o.biff >= 12 ? 2 : 1);
  var _ = "sbcs-cont";
  var V = B;
  if (o && o.biff >= 8) {
    B = 1200;
  }
  if (o && o.biff != 8) {
    if (o.biff == 12) {
      _ = "wstr";
    }
  } else if (r.read_shift(1)) {
    _ = "dbcs-cont";
  }
  if (o.biff >= 2 && o.biff <= 5) {
    _ = "cpstr";
  }
  var ee = p ? r.read_shift(p, _) : "";
  B = V;
  return ee;
}
function Wu(r) {
  var c = B;
  B = 1200;
  var Te;
  var o = r.read_shift(2);
  var p = r.read_shift(1);
  var _ = p & 4;
  var V = p & 8;
  var Y = 1 + (p & 1);
  var ee = 0;
  var Ne = {};
  if (V) {
    ee = r.read_shift(2);
  }
  if (_) {
    Te = r.read_shift(4);
  }
  var Ft = o === 0 ? "" : r.read_shift(o, Y == 2 ? "dbcs-cont" : "sbcs-cont");
  if (V) {
    r.l += ee * 4;
  }
  if (_) {
    r.l += Te;
  }
  Ne.t = Ft;
  if (!V) {
    Ne.raw = "<t>" + Ne.t + "</t>";
    Ne.r = Ne.t;
  }
  B = c;
  return Ne;
}
function cu(r) {
  var c = r.t || "";
  var p = Gi(3);
  p.write_shift(2, c.length);
  p.write_shift(1, 1);
  var _ = Gi(c.length * 2);
  _.write_shift(c.length * 2, c, "utf16le");
  return St([p, _]);
}
function Bf(r, c, o) {
  if (o) {
    if (o.biff >= 2 && o.biff <= 5) {
      return r.read_shift(c, "cpstr");
    }
    if (o.biff >= 12) {
      return r.read_shift(c, "dbcs-cont");
    }
  }
  var _ = r.read_shift(1);
  return r.read_shift(c, _ === 0 ? "sbcs-cont" : "dbcs-cont");
}
function cp(r, c, o) {
  var p = r.read_shift(o && o.biff == 2 ? 1 : 2);
  if (p === 0) {
    r.l++;
    return "";
  } else {
    return Bf(r, p, o);
  }
}
function Vf(r, c, o) {
  if (o.biff > 5) {
    return cp(r, 0, o);
  }
  var p = r.read_shift(1);
  if (p === 0) {
    r.l++;
    return "";
  } else {
    return r.read_shift(p, o.biff <= 4 || !r.lens ? "cpstr" : "sbcs-cont");
  }
}
function Zp(r, c, o) {
  o ||= Gi(3 + r.length * 2);
  o.write_shift(2, r.length);
  o.write_shift(1, 1);
  o.write_shift(31, r, "utf16le");
  return o;
}
function up(r) {
  var c = r.read_shift(4);
  if (c > 0) {
    return r.read_shift(c, "utf16le").replace(Lt, "");
  } else {
    return "";
  }
}
function u0(r, c) {
  c ||= Gi(6 + r.length * 2);
  c.write_shift(4, 1 + r.length);
  for (var o = 0; o < r.length; ++o) {
    c.write_shift(2, r.charCodeAt(o));
  }
  c.write_shift(2, 0);
  return c;
}
function Zg(r) {
  var c = Gi(512);
  var o = 0;
  var p = r.Target;
  if (p.slice(0, 7) == "file://") {
    p = p.slice(7);
  }
  var _ = p.indexOf("#");
  var V = _ > -1 ? 31 : 23;
  switch (p.charAt(0)) {
    case "#":
      V = 28;
      break;
    case ".":
      V &= -3;
  }
  c.write_shift(4, 2);
  c.write_shift(4, V);
  var Y = [8, 6815827, 6619237, 4849780, 83];
  for (o = 0; o < Y.length; ++o) {
    c.write_shift(4, Y[o]);
  }
  if (V == 28) {
    u0(p = p.slice(1), c);
  } else if (V & 2) {
    Y = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
    o = 0;
    for (; o < Y.length; ++o) {
      c.write_shift(1, parseInt(Y[o], 16));
    }
    var ee = _ > -1 ? p.slice(0, _) : p;
    c.write_shift(4, (ee.length + 1) * 2);
    o = 0;
    for (; o < ee.length; ++o) {
      c.write_shift(2, ee.charCodeAt(o));
    }
    c.write_shift(2, 0);
    if (V & 8) {
      u0(_ > -1 ? p.slice(_ + 1) : "", c);
    }
  } else {
    Y = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" ");
    o = 0;
    for (; o < Y.length; ++o) {
      c.write_shift(1, parseInt(Y[o], 16));
    }
    for (var Te = 0; p.slice(Te * 3, Te * 3 + 3) == "../" || p.slice(Te * 3, Te * 3 + 3) == "..\\";) {
      ++Te;
    }
    c.write_shift(2, Te);
    c.write_shift(4, p.length - Te * 3 + 1);
    o = 0;
    for (; o < p.length - Te * 3; ++o) {
      c.write_shift(1, p.charCodeAt(o + Te * 3) & 255);
    }
    c.write_shift(1, 0);
    c.write_shift(2, 65535);
    c.write_shift(2, 57005);
    o = 0;
    for (; o < 6; ++o) {
      c.write_shift(4, 0);
    }
  }
  return c.slice(0, c.l);
}
function Zd(r) {
  return [r.read_shift(1), r.read_shift(1), r.read_shift(1), r.read_shift(1)];
}
function _f(r, c) {
  var o = Zd(r);
  o[3] = 0;
  return o;
}
function ad(r, c, o) {
  var V = {
    r: r.read_shift(2),
    c: r.read_shift(2),
    ixfe: 0
  };
  if (o && o.biff == 2 || c == 7) {
    var Y = r.read_shift(1);
    V.ixfe = Y & 63;
    r.l += 2;
  } else {
    V.ixfe = r.read_shift(2);
  }
  return V;
}
function uh(r, c, o, p) {
  p ||= Gi(6);
  p.write_shift(2, r);
  p.write_shift(2, c);
  p.write_shift(2, o || 0);
  return p;
}
function Zm(r, c, o) {
  var p = o.biff > 8 ? 4 : 2;
  return [r.read_shift(p), r.read_shift(p, "i"), r.read_shift(p, "i")];
}
function X0(r) {
  return [r.read_shift(2), ol(r)];
}
function dh(r) {
  var c = r.read_shift(2);
  var o = r.read_shift(2);
  return {
    s: {
      c: r.read_shift(2),
      r: c
    },
    e: {
      c: r.read_shift(2),
      r: o
    }
  };
}
function Eu(r, c) {
  c ||= Gi(8);
  c.write_shift(2, r.s.r);
  c.write_shift(2, r.e.r);
  c.write_shift(2, r.s.c);
  c.write_shift(2, r.e.c);
  return c;
}
function q0(r) {
  var c = r.read_shift(2);
  var o = r.read_shift(2);
  return {
    s: {
      c: r.read_shift(1),
      r: c
    },
    e: {
      c: r.read_shift(1),
      r: o
    }
  };
}
var ld = q0;
function Pr(r) {
  r.l += 4;
  var c = r.read_shift(2);
  var o = r.read_shift(2);
  var p = r.read_shift(2);
  r.l += 12;
  return [o, c, p];
}
function bu(r) {
  r.l += 2;
  r.l += r.read_shift(2);
}
var Kg = {
  0: bu,
  4: bu,
  5: bu,
  6: bu,
  7: function Yy(r) {
    r.l += 4;
    r.cf = r.read_shift(2);
    return {};
  },
  8: bu,
  9: bu,
  10: bu,
  11: bu,
  12: bu,
  13: function zg(r) {
    var c = {};
    r.l += 4;
    r.l += 16;
    c.fSharedNote = r.read_shift(2);
    r.l += 4;
    return c;
  },
  14: bu,
  15: bu,
  16: bu,
  17: bu,
  18: bu,
  19: bu,
  20: bu,
  21: Pr
};
function Dd(r, c) {
  var o = {
    BIFFVer: 0,
    dt: 0
  };
  o.BIFFVer = r.read_shift(2);
  if ((c -= 2) >= 2) {
    o.dt = r.read_shift(2);
    r.l -= 2;
  }
  switch (o.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (c > 6) {
        throw new Error("Unexpected BIFF Ver " + o.BIFFVer);
      }
  }
  r.read_shift(c);
  return o;
}
function Td(r, c, o) {
  var p = 1536;
  var _ = 16;
  switch (o.bookType) {
    case "biff8":
    case "xla":
      break;
    case "biff5":
      p = 1280;
      _ = 8;
      break;
    case "biff4":
      p = 4;
      _ = 6;
      break;
    case "biff3":
      p = 3;
      _ = 6;
      break;
    case "biff2":
      p = 2;
      _ = 4;
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var V = Gi(_);
  V.write_shift(2, p);
  V.write_shift(2, c);
  if (_ > 4) {
    V.write_shift(2, 29282);
  }
  if (_ > 6) {
    V.write_shift(2, 1997);
  }
  if (_ > 8) {
    V.write_shift(2, 49161);
    V.write_shift(2, 1);
    V.write_shift(2, 1798);
    V.write_shift(2, 0);
  }
  return V;
}
function zm(r, c) {
  var o = !c || c.biff >= 8 ? 2 : 1;
  var p = Gi(8 + o * r.name.length);
  p.write_shift(4, r.pos);
  p.write_shift(1, r.hs || 0);
  p.write_shift(1, r.dt);
  p.write_shift(1, r.name.length);
  if (c.biff >= 8) {
    p.write_shift(1, 1);
  }
  p.write_shift(o * r.name.length, r.name, c.biff < 8 ? "sbcs" : "utf16le");
  var _ = p.slice(0, p.l);
  _.l = p.l;
  return _;
}
function Hf(r, c, o) {
  var p = 0;
  if (!o || o.biff != 2) {
    p = r.read_shift(2);
  }
  var _ = r.read_shift(2);
  if (o && o.biff == 2) {
    p = 1 - (_ >> 15);
    _ &= 32767;
  }
  return [{
    Unsynced: p & 1,
    DyZero: (p & 2) >> 1,
    ExAsc: (p & 4) >> 2,
    ExDsc: (p & 8) >> 3
  }, _];
}
function ey(r, c, o, p) {
  var _ = o && o.biff == 5;
  p ||= Gi(_ ? 3 + c.length : 5 + c.length * 2);
  p.write_shift(2, r);
  p.write_shift(_ ? 1 : 2, c.length);
  if (!_) {
    p.write_shift(1, 1);
  }
  p.write_shift((_ ? 1 : 2) * c.length, c, _ ? "sbcs" : "utf16le");
  var V = p.length > p.l ? p.slice(0, p.l) : p;
  if (V.l == null) {
    V.l = V.length;
  }
  return V;
}
var fh = Vf;
function Jg(r, c, o) {
  var p = r.l + c;
  var _ = o.biff != 8 && o.biff ? 2 : 4;
  var V = r.read_shift(_);
  var Y = r.read_shift(_);
  var ee = r.read_shift(2);
  var Te = r.read_shift(2);
  r.l = p;
  return {
    s: {
      r: V,
      c: ee
    },
    e: {
      r: Y,
      c: Te
    }
  };
}
function Xg(r, c, o, p) {
  var _ = o && o.biff == 5;
  p ||= Gi(_ ? 16 : 20);
  p.write_shift(2, 0);
  if (r.style) {
    p.write_shift(2, r.numFmtId || 0);
    p.write_shift(2, 65524);
  } else {
    p.write_shift(2, r.numFmtId || 0);
    p.write_shift(2, c << 4);
  }
  var V = 0;
  if (r.numFmtId > 0 && _) {
    V |= 1024;
  }
  p.write_shift(4, V);
  p.write_shift(4, 0);
  if (!_) {
    p.write_shift(4, 0);
  }
  p.write_shift(2, 0);
  return p;
}
function qg(r) {
  var c = Gi(12);
  c.l++;
  c.write_shift(1, r.numFmtId);
  c.l += 10;
  return c;
}
var Rh = qg;
function ev(r, c, o, p, _, V) {
  var Y = Gi(8);
  uh(r, c, p, Y);
  ch(o, V, Y);
  return Y;
}
var Fh = function Gg(r, c, o) {
  if (c === 0) {
    return "";
  } else {
    return Vf(r, 0, o);
  }
};
function tv(r, c, o) {
  var _;
  var p = r.read_shift(2);
  var V = {
    fBuiltIn: p & 1,
    fWantAdvise: p >>> 1 & 1,
    fWantPict: p >>> 2 & 1,
    fOle: p >>> 3 & 1,
    fOleLink: p >>> 4 & 1,
    cf: p >>> 5 & 1023,
    fIcon: p >>> 15 & 1
  };
  if (o.sbcch === 14849) {
    _ = function dp(r, c, o) {
      r.l += 4;
      var p = r.l + (c -= 4);
      var _ = yf(r, 0, o);
      var V = r.read_shift(2);
      if (V !== (p -= r.l)) {
        throw new Error("Malformed AddinUdf: padding = " + p + " != " + V);
      }
      r.l += V;
      return _;
    }(r, c - 2, o);
  }
  V.body = _ || r.read_shift(c - 2);
  if (typeof _ == "string") {
    V.Name = _;
  }
  return V;
}
function gh(r, c, o) {
  var p = r.l + c;
  var _ = r.read_shift(2);
  var V = r.read_shift(1);
  var Y = r.read_shift(1);
  var ee = r.read_shift(o && o.biff == 2 ? 1 : 2);
  var Te = 0;
  if (!o || o.biff >= 5) {
    if (o.biff != 5) {
      r.l += 2;
    }
    Te = r.read_shift(2);
    if (o.biff == 5) {
      r.l += 2;
    }
    r.l += 4;
  }
  var Ne = Bf(r, Y, o);
  if (_ & 32) {
    Ne = Bi[Ne.charCodeAt(0)];
  }
  var ze = p - r.l;
  if (o && o.biff == 2) {
    --ze;
  }
  var Ft = p != r.l && ee !== 0 && ze > 0 ? function U0(r, c, o, p) {
    var Y;
    var _ = r.l + c;
    var V = Bv(r, p, o);
    if (_ !== r.l) {
      Y = Sg(r, _ - r.l, V, o);
    }
    return [V, Y];
  }(r, ze, o, ee) : [];
  return {
    chKey: V,
    Name: Ne,
    itab: Te,
    rgce: Ft
  };
}
function jp(r, c, o) {
  if (o.biff < 8 || o.biff <= 8 && c == r[r.l] + (r[r.l + 1] == 3 ? 1 : 0) + 1) {
    return function mh(r, c, o) {
      if (r[r.l + 1] == 3) {
        r[r.l]++;
      }
      var p = yf(r, 0, o);
      if (p.charCodeAt(0) == 3) {
        return p.slice(1);
      } else {
        return p;
      }
    }(r, 0, o);
  }
  for (var p = [], _ = r.l + c, V = r.read_shift(o.biff > 8 ? 4 : 2); V-- != 0;) {
    p.push(Zm(r, 0, o));
  }
  if (r.l != _) {
    throw new Error("Bad ExternSheet: " + r.l + " != " + _);
  }
  return p;
}
function ny(r, c, o) {
  var p = ld(r, 6);
  switch (o.biff) {
    case 2:
      r.l++;
      c -= 7;
      break;
    case 3:
    case 4:
      r.l += 2;
      c -= 8;
      break;
    default:
      r.l += 6;
      c -= 12;
  }
  return [p, nh(r, c, o)];
}
function iv(r, c, o, p) {
  var _ = Gi(6 + (p || r.length));
  _.write_shift(2, c);
  _.write_shift(2, o);
  _.write_shift(2, p || r.length);
  _.write_shift(r.length, r, "sbcs");
  return _;
}
var sv = {
  8: function (r, c) {
    var o = r.l + c;
    r.l += 10;
    var p = r.read_shift(2);
    r.l += 4;
    r.l += 2;
    r.l += 2;
    r.l += 2;
    r.l += 4;
    var _ = r.read_shift(1);
    r.l += _;
    r.l = o;
    return {
      fmt: p
    };
  }
};
function sy(r) {
  var c = Gi(24);
  var o = Qo(r[0]);
  c.write_shift(2, o.r);
  c.write_shift(2, o.r);
  c.write_shift(2, o.c);
  c.write_shift(2, o.c);
  for (var p = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), _ = 0; _ < 16; ++_) {
    c.write_shift(1, parseInt(p[_], 16));
  }
  return St([c, Zg(r[1])]);
}
function oy(r) {
  var c = r[1].Tooltip;
  var o = Gi(10 + (c.length + 1) * 2);
  o.write_shift(2, 2048);
  var p = Qo(r[0]);
  o.write_shift(2, p.r);
  o.write_shift(2, p.r);
  o.write_shift(2, p.c);
  o.write_shift(2, p.c);
  for (var _ = 0; _ < c.length; ++_) {
    o.write_shift(2, c.charCodeAt(_));
  }
  o.write_shift(2, 0);
  return o;
}
function Yf(r, c, o) {
  if (!o.cellStyles) {
    return kl(r, c);
  }
  var p = o && o.biff >= 12 ? 4 : 2;
  var _ = r.read_shift(p);
  var V = r.read_shift(p);
  var Y = r.read_shift(p);
  var ee = r.read_shift(p);
  var Te = r.read_shift(2);
  if (p == 2) {
    r.l += 2;
  }
  var Ne = {
    s: _,
    e: V,
    w: Y,
    ixfe: ee,
    flags: Te
  };
  if (o.biff >= 5 || !o.biff) {
    Ne.level = Te >> 8 & 7;
  }
  return Ne;
}
var qp = ad;
var b0 = Oh;
var lv = cp;
function Gd(r, c, o, p, _) {
  r ||= Gi(7);
  r.write_shift(2, c);
  r.write_shift(2, o);
  r.write_shift(1, p || 0);
  r.write_shift(1, _ || 0);
  r.write_shift(1, 0);
  return r;
}
var vh = [2, 3, 48, 49, 131, 139, 140, 245];
var Mu = function () {
  var r = {
    1: 437,
    2: 850,
    3: 1252,
    4: 10000,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127,
    8: 865,
    9: 437,
    10: 850,
    11: 437,
    13: 437,
    14: 850,
    15: 437,
    16: 850,
    17: 437,
    18: 850,
    19: 932,
    20: 850,
    21: 437,
    22: 850,
    23: 865,
    24: 437,
    25: 437,
    26: 850,
    27: 437,
    28: 863,
    29: 850,
    31: 852,
    34: 852,
    35: 852,
    36: 860,
    37: 850,
    38: 866,
    55: 850,
    64: 852,
    77: 936,
    78: 949,
    79: 950,
    80: 874,
    87: 1252,
    88: 1252,
    89: 1252,
    108: 863,
    134: 737,
    135: 852,
    136: 857,
    204: 1257,
    255: 16969
  };
  var c = ha({
    1: 437,
    2: 850,
    3: 1252,
    4: 10000,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127
  });
  function p(ee, Te) {
    var Ne = Te || {};
    Ne.dateNF ||= "yyyymmdd";
    var ze = To(function o(ee, Te) {
      var Ne = [];
      var ze = Qe(1);
      switch (Te.type) {
        case "base64":
          ze = Yt(Ee(ee));
          break;
        case "binary":
          ze = Yt(ee);
          break;
        case "buffer":
        case "array":
          ze = ee;
      }
      Vl(ze, 0);
      var Ft = ze.read_shift(1);
      var _t = !!(Ft & 136);
      var Ot = false;
      var zt = false;
      switch (Ft) {
        case 2:
        case 3:
        case 131:
        case 139:
        case 245:
          break;
        case 48:
        case 49:
          Ot = true;
          _t = true;
          break;
        case 140:
          zt = true;
          break;
        default:
          throw new Error("DBF Unsupported Version: " + Ft.toString(16));
      }
      var nn = 0;
      var Pt = 521;
      if (Ft == 2) {
        nn = ze.read_shift(2);
      }
      ze.l += 3;
      if (Ft != 2) {
        nn = ze.read_shift(4);
      }
      if (nn > 1048576) {
        nn = 1000000;
      }
      if (Ft != 2) {
        Pt = ze.read_shift(2);
      }
      var rn = ze.read_shift(2);
      if (Ft != 2) {
        ze.l += 16;
        ze.read_shift(1);
        if (ze[ze.l] !== 0) {
          r[ze[ze.l]];
        }
        ze.l += 1;
        ze.l += 2;
      }
      if (zt) {
        ze.l += 36;
      }
      for (var un = [], ai = {}, Ni = Math.min(ze.length, Ft == 2 ? 521 : Pt - 10 - (Ot ? 264 : 0)), or = zt ? 32 : 11; ze.l < Ni && ze[ze.l] != 13;) {
        ai = {};
        ai.name = Et(ze.slice(ze.l, ze.l + or)).replace(/[\u0000\r\n].*$/g, "");
        ze.l += or;
        ai.type = String.fromCharCode(ze.read_shift(1));
        if (Ft != 2 && !zt) {
          ai.offset = ze.read_shift(4);
        }
        ai.len = ze.read_shift(1);
        if (Ft == 2) {
          ai.offset = ze.read_shift(2);
        }
        ai.dec = ze.read_shift(1);
        if (ai.name.length) {
          un.push(ai);
        }
        if (Ft != 2) {
          ze.l += zt ? 13 : 14;
        }
        switch (ai.type) {
          case "B":
            if ((!Ot || ai.len != 8) && Te.WTF) {
              console.log("Skipping " + ai.name + ":" + ai.type);
            }
            break;
          case "G":
          case "P":
            if (Te.WTF) {
              console.log("Skipping " + ai.name + ":" + ai.type);
            }
            break;
          case "+":
          case "0":
          case "@":
          case "C":
          case "D":
          case "F":
          case "I":
          case "L":
          case "M":
          case "N":
          case "O":
          case "T":
          case "Y":
            break;
          default:
            throw new Error("Unknown Field Type: " + ai.type);
        }
      }
      if (ze[ze.l] !== 13) {
        ze.l = Pt - 1;
      }
      if (ze.read_shift(1) !== 13) {
        throw new Error("DBF Terminator not found " + ze.l + " " + ze[ze.l]);
      }
      ze.l = Pt;
      var Ln = 0;
      var Jn = 0;
      Ne[0] = [];
      Jn = 0;
      for (; Jn != un.length; ++Jn) {
        Ne[0][Jn] = un[Jn].name;
      }
      for (; nn-- > 0;) {
        if (ze[ze.l] !== 42) {
          ++ze.l;
          Ne[++Ln] = [];
          Jn = 0;
          Jn = 0;
          ++ze.l;
          Ne[++Ln] = [];
          Jn = 0;
          Jn = 0;
          for (; Jn != un.length; ++Jn) {
            var yi = ze.slice(ze.l, ze.l + un[Jn].len);
            ze.l += un[Jn].len;
            Vl(yi, 0);
            var mi = Et(yi);
            switch (un[Jn].type) {
              case "C":
                if (mi.trim().length) {
                  Ne[Ln][Jn] = mi.replace(/\s+$/, "");
                }
                break;
              case "D":
                if (mi.length === 8) {
                  Ne[Ln][Jn] = new Date(Date.UTC(+mi.slice(0, 4), +mi.slice(4, 6) - 1, +mi.slice(6, 8), 0, 0, 0, 0));
                  if (!Te || !Te.UTC) {
                    Ne[Ln][Jn] = Ki(Ne[Ln][Jn]);
                  }
                } else {
                  Ne[Ln][Jn] = mi;
                }
                break;
              case "F":
                Ne[Ln][Jn] = parseFloat(mi.trim());
                break;
              case "+":
              case "I":
                Ne[Ln][Jn] = zt ? yi.read_shift(-4, "i") ^ 2147483648 : yi.read_shift(4, "i");
                break;
              case "L":
                switch (mi.trim().toUpperCase()) {
                  case "Y":
                  case "T":
                    Ne[Ln][Jn] = true;
                    break;
                  case "N":
                  case "F":
                    Ne[Ln][Jn] = false;
                    break;
                  case "":
                  case "\0":
                  case "?":
                    break;
                  default:
                    throw new Error("DBF Unrecognized L:|" + mi + "|");
                }
                break;
              case "M":
                if (!_t) {
                  throw new Error("DBF Unexpected MEMO for type " + Ft.toString(16));
                }
                Ne[Ln][Jn] = "##MEMO##" + (zt ? parseInt(mi.trim(), 10) : yi.read_shift(4));
                break;
              case "N":
                if ((mi = mi.replace(/\u0000/g, "").trim()) && mi != ".") {
                  Ne[Ln][Jn] = +mi || 0;
                }
                break;
              case "@":
                Ne[Ln][Jn] = new Date(yi.read_shift(-8, "f") - 62135683200000);
                break;
              case "T":
                var Fi = yi.read_shift(4);
                var ji = yi.read_shift(4);
                if (Fi == 0 && ji == 0) {
                  break;
                }
                Ne[Ln][Jn] = new Date((Fi - 2440588) * 86400000 + ji);
                if (!Te || !Te.UTC) {
                  Ne[Ln][Jn] = Ki(Ne[Ln][Jn]);
                }
                break;
              case "Y":
                Ne[Ln][Jn] = yi.read_shift(4, "i") / 10000 + yi.read_shift(4, "i") / 10000 * Math.pow(2, 32);
                break;
              case "O":
                Ne[Ln][Jn] = -yi.read_shift(-8, "f");
                break;
              case "B":
                if (Ot && un[Jn].len == 8) {
                  Ne[Ln][Jn] = yi.read_shift(8, "f");
                  break;
                }
              case "G":
              case "P":
                yi.l += un[Jn].len;
                break;
              case "0":
                if (un[Jn].name === "_NullFlags") {
                  break;
                }
              default:
                throw new Error("DBF Unsupported data type " + un[Jn].type);
            }
          }
        } else {
          ze.l += rn;
        }
      }
      if (Ft != 2 && ze.l < ze.length && ze[ze.l++] != 26) {
        throw new Error("DBF EOF Marker missing " + (ze.l - 1) + " of " + ze.length + " " + ze[ze.l - 1].toString(16));
      }
      if (Te && Te.sheetRows) {
        Ne = Ne.slice(0, Te.sheetRows);
      }
      Te.DBF = un;
      return Ne;
    }(ee, Ne), Ne);
    ze["!cols"] = Ne.DBF.map(function (Ft) {
      return {
        wch: Ft.len,
        DBF: Ft
      };
    });
    delete Ne.DBF;
    return ze;
  }
  var V = {
    B: 8,
    C: 250,
    L: 1,
    D: 8,
    "?": 0,
    "": 0
  };
  return {
    to_workbook: function _(ee, Te) {
      try {
        var Ne = cc(p(ee, Te), Te);
        Ne.bookType = "dbf";
        return Ne;
      } catch (ze) {
        if (Te && Te.WTF) {
          throw ze;
        }
      }
      return {
        SheetNames: [],
        Sheets: {}
      };
    },
    to_sheet: p,
    from_sheet: function Y(ee, Te) {
      if (!ee["!ref"]) {
        throw new Error("Cannot export empty sheet to DBF");
      }
      var Ne = Te || {};
      var ze = B;
      if (+Ne.codepage >= 0) {
        j(+Ne.codepage);
      }
      if (Ne.type == "string") {
        throw new Error("Cannot write DBF to JS string");
      }
      var Ft = tl();
      var _t = function Q_(r, c) {
        if (r == null || r["!ref"] == null) {
          return [];
        }
        var o = {
          t: "n",
          v: 0
        };
        var p = 0;
        var _ = 1;
        var V = [];
        var Y = 0;
        var ee = "";
        var Te = {
          s: {
            r: 0,
            c: 0
          },
          e: {
            r: 0,
            c: 0
          }
        };
        var Ne = c || {};
        var ze = Ne.range ?? r["!ref"];
        if (Ne.header === 1) {
          p = 1;
        } else if (Ne.header === "A") {
          p = 2;
        } else if (Array.isArray(Ne.header)) {
          p = 3;
        } else if (Ne.header == null) {
          p = 0;
        }
        switch (typeof ze) {
          case "string":
            Te = Ps(ze);
            break;
          case "number":
            (Te = Ps(r["!ref"])).s.r = ze;
            break;
          default:
            Te = ze;
        }
        if (p > 0) {
          _ = 0;
        }
        var Ft = Da(Te.s.r);
        var _t = [];
        var Ot = [];
        var zt = 0;
        var nn = 0;
        var Pt = r["!data"] != null;
        var rn = Te.s.r;
        var yn = 0;
        var un = {};
        if (Pt && !r["!data"][rn]) {
          r["!data"][rn] = [];
        }
        var ai = Ne.skipHidden && r["!cols"] || [];
        var Ni = Ne.skipHidden && r["!rows"] || [];
        for (yn = Te.s.c; yn <= Te.e.c; ++yn) {
          if (!(ai[yn] || {}).hidden) {
            _t[yn] = jo(yn);
            o = Pt ? r["!data"][rn][yn] : r[_t[yn] + Ft];
            switch (p) {
              case 1:
                V[yn] = yn - Te.s.c;
                break;
              case 2:
                V[yn] = _t[yn];
                break;
              case 3:
                V[yn] = Ne.header[yn - Te.s.c];
                break;
              default:
                if (o == null) {
                  o = {
                    w: "__EMPTY",
                    t: "s"
                  };
                }
                ee = Y = lc(o, null, Ne);
                if (nn = un[Y] || 0) {
                  do {
                    ee = Y + "_" + nn++;
                  } while (un[ee]);
                  un[Y] = nn;
                  un[ee] = 1;
                } else {
                  un[Y] = 1;
                }
                V[yn] = ee;
            }
          }
        }
        for (rn = Te.s.r + _; rn <= Te.e.r; ++rn) {
          if (!(Ni[rn] || {}).hidden) {
            var or = gA(r, Te, rn, _t, p, V, Ne);
            if (or.isempty === false || (p === 1 ? Ne.blankrows !== false : Ne.blankrows)) {
              Ot[zt++] = or.row;
            }
          }
        }
        Ot.length = zt;
        return Ot;
      }(ee, {
        header: 1,
        raw: true,
        cellDates: true
      });
      var Ot = _t[0];
      var zt = _t.slice(1);
      var nn = ee["!cols"] || [];
      var Pt = 0;
      var rn = 0;
      var yn = 0;
      var un = 1;
      for (Pt = 0; Pt < Ot.length; ++Pt) {
        if (((nn[Pt] || {}).DBF || {}).name) {
          Ot[Pt] = nn[Pt].DBF.name;
          ++yn;
        } else if (Ot[Pt] != null) {
          ++yn;
          if (typeof Ot[Pt] == "number") {
            Ot[Pt] = Ot[Pt].toString(10);
          }
          if (typeof Ot[Pt] != "string") {
            throw new Error("DBF Invalid column name " + Ot[Pt] + " |" + typeof Ot[Pt] + "|");
          }
          if (Ot.indexOf(Ot[Pt]) !== Pt) {
            for (rn = 0; rn < 1024; ++rn) {
              if (Ot.indexOf(Ot[Pt] + "_" + rn) == -1) {
                Ot[Pt] += "_" + rn;
                break;
              }
            }
          }
        }
      }
      var ai = Ps(ee["!ref"]);
      var Ni = [];
      var or = [];
      var Ln = [];
      for (Pt = 0; Pt <= ai.e.c - ai.s.c; ++Pt) {
        var Jn = "";
        var yi = "";
        var mi = 0;
        var Fi = [];
        for (rn = 0; rn < zt.length; ++rn) {
          if (zt[rn][Pt] != null) {
            Fi.push(zt[rn][Pt]);
          }
        }
        if (Fi.length != 0 && Ot[Pt] != null) {
          for (rn = 0; rn < Fi.length; ++rn) {
            switch (typeof Fi[rn]) {
              case "number":
                yi = "B";
                break;
              case "string":
              default:
                yi = "C";
                break;
              case "boolean":
                yi = "L";
                break;
              case "object":
                yi = Fi[rn] instanceof Date ? "D" : "C";
            }
            mi = Math.max(mi, String(Fi[rn]).length);
            Jn = Jn && Jn != yi ? "C" : yi;
          }
          if (mi > 250) {
            mi = 250;
          }
          if ((yi = ((nn[Pt] || {}).DBF || {}).type) == "C" && nn[Pt].DBF.len > mi) {
            mi = nn[Pt].DBF.len;
          }
          if (Jn == "B" && yi == "N") {
            Jn = "N";
            Ln[Pt] = nn[Pt].DBF.dec;
            mi = nn[Pt].DBF.len;
          }
          or[Pt] = Jn == "C" || yi == "N" ? mi : V[Jn] || 0;
          un += or[Pt];
          Ni[Pt] = Jn;
        } else {
          Ni[Pt] = "?";
        }
      }
      var ji = Ft.next(32);
      ji.write_shift(4, 318902576);
      ji.write_shift(4, zt.length);
      ji.write_shift(2, 296 + yn * 32);
      ji.write_shift(2, un);
      Pt = 0;
      for (; Pt < 4; ++Pt) {
        ji.write_shift(4, 0);
      }
      var Dr = +c[B] || 3;
      ji.write_shift(4, Dr << 8 | 0);
      if (r[Dr] != +Ne.codepage) {
        if (Ne.codepage) {
          console.error("DBF Unsupported codepage " + B + ", using 1252");
        }
        B = 1252;
      }
      Pt = 0;
      rn = 0;
      for (; Pt < Ot.length; ++Pt) {
        if (Ot[Pt] != null) {
          var yo = Ft.next(32);
          var _s = (Ot[Pt].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
          yo.write_shift(1, _s, "sbcs");
          yo.write_shift(1, Ni[Pt] == "?" ? "C" : Ni[Pt], "sbcs");
          yo.write_shift(4, rn);
          yo.write_shift(1, or[Pt] || V[Ni[Pt]] || 0);
          yo.write_shift(1, Ln[Pt] || 0);
          yo.write_shift(1, 2);
          yo.write_shift(4, 0);
          yo.write_shift(1, 0);
          yo.write_shift(4, 0);
          yo.write_shift(4, 0);
          rn += or[Pt] || V[Ni[Pt]] || 0;
        }
      }
      var ra = Ft.next(264);
      ra.write_shift(4, 13);
      Pt = 0;
      for (; Pt < 65; ++Pt) {
        ra.write_shift(4, 0);
      }
      for (Pt = 0; Pt < zt.length; ++Pt) {
        var ds = Ft.next(un);
        ds.write_shift(1, 0);
        rn = 0;
        for (; rn < Ot.length; ++rn) {
          if (Ot[rn] != null) {
            switch (Ni[rn]) {
              case "L":
                ds.write_shift(1, zt[Pt][rn] == null ? 63 : zt[Pt][rn] ? 84 : 70);
                break;
              case "B":
                ds.write_shift(8, zt[Pt][rn] || 0, "f");
                break;
              case "N":
                var Ua = "0";
                if (typeof zt[Pt][rn] == "number") {
                  Ua = zt[Pt][rn].toFixed(Ln[rn] || 0);
                }
                if (Ua.length > or[rn]) {
                  Ua = Ua.slice(0, or[rn]);
                }
                yn = 0;
                for (; yn < or[rn] - Ua.length; ++yn) {
                  ds.write_shift(1, 32);
                }
                ds.write_shift(1, Ua, "sbcs");
                break;
              case "D":
                if (zt[Pt][rn]) {
                  ds.write_shift(4, ("0000" + zt[Pt][rn].getFullYear()).slice(-4), "sbcs");
                  ds.write_shift(2, ("00" + (zt[Pt][rn].getMonth() + 1)).slice(-2), "sbcs");
                  ds.write_shift(2, ("00" + zt[Pt][rn].getDate()).slice(-2), "sbcs");
                } else {
                  ds.write_shift(8, "00000000", "sbcs");
                }
                break;
              case "C":
                var Ul = ds.l;
                var os = String(zt[Pt][rn] ?? "").slice(0, or[rn]);
                ds.write_shift(1, os, "cpstr");
                Ul += or[rn] - ds.l;
                yn = 0;
                for (; yn < Ul; ++yn) {
                  ds.write_shift(1, 32);
                }
            }
          }
        }
      }
      B = ze;
      Ft.next(1).write_shift(1, 26);
      return Ft.end();
    }
  };
}();
var Gf = function () {
  var r = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    0: 176,
    1: 177,
    2: 178,
    3: 179,
    5: 181,
    6: 182,
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    "\"": 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  };
  var c = new RegExp("N(" + qs(r).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    c = new RegExp("N(" + qs(r).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch {}
  function o(Ot, zt) {
    var nn = r[zt];
    if (typeof nn == "number") {
      return re(nn);
    } else {
      return nn;
    }
  }
  function p(Ot, zt, nn) {
    var Pt = zt.charCodeAt(0) - 32 << 4 | nn.charCodeAt(0) - 48;
    if (Pt == 59) {
      return Ot;
    } else {
      return re(Pt);
    }
  }
  function Y(Ot, zt) {
    var ji;
    var nn = Ot.split(/[\n\r]+/);
    var Pt = -1;
    var rn = -1;
    var yn = 0;
    var un = 0;
    var ai = [];
    var Ni = [];
    var or = null;
    var Ln = {};
    var Jn = [];
    var yi = [];
    var mi = [];
    var Fi = 0;
    var Dr = {
      Workbook: {
        WBProps: {},
        Names: []
      }
    };
    for (+zt.codepage >= 0 && j(+zt.codepage); yn !== nn.length; ++yn) {
      Fi = 0;
      var ds;
      var yo = nn[yn].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, p).replace(c, o);
      var _s = yo.replace(/;;/g, "\0").split(";").map(function (vi) {
        return vi.replace(/\u0000/g, ";");
      });
      if (yo.length > 0) {
        switch (_s[0]) {
          case "ID":
          case "E":
          case "B":
          case "W":
            break;
          case "O":
            for (un = 1; un < _s.length; ++un) {
              if (_s[un].charAt(0) === "V") {
                var Ua = parseInt(_s[un].slice(1), 10);
                if (Ua >= 1 && Ua <= 4) {
                  Dr.Workbook.WBProps.date1904 = true;
                }
              }
            }
            break;
          case "P":
            if (_s[1].charAt(0) === "P") {
              Ni.push(yo.slice(3).replace(/;;/g, ";"));
            }
            break;
          case "NN":
            var Ul = {
              Sheet: 0
            };
            for (un = 1; un < _s.length; ++un) {
              switch (_s[un].charAt(0)) {
                case "N":
                  Ul.Name = _s[un].slice(1);
                  break;
                case "E":
                  Ul.Ref = (zt && zt.sheet || "Sheet1") + "!" + Qh(_s[un].slice(1));
              }
            }
            Dr.Workbook.Names.push(Ul);
            break;
          case "C":
            var os = false;
            var Ba = false;
            var hr = false;
            var oo = false;
            var as = -1;
            var Lo = -1;
            var Ro = "";
            var va = "z";
            var Xn = "";
            for (un = 1; un < _s.length; ++un) {
              switch (_s[un].charAt(0)) {
                case "A":
                  Xn = _s[un].slice(1);
                  break;
                case "X":
                  rn = parseInt(_s[un].slice(1), 10) - 1;
                  Ba = true;
                  break;
                case "Y":
                  Pt = parseInt(_s[un].slice(1), 10) - 1;
                  if (!Ba) {
                    rn = 0;
                  }
                  ji = ai.length;
                  for (; ji <= Pt; ++ji) {
                    ai[ji] = [];
                  }
                  break;
                case "K":
                  if ((ds = _s[un].slice(1)).charAt(0) === "\"") {
                    ds = ds.slice(1, ds.length - 1);
                    va = "s";
                  } else if (ds === "TRUE" || ds === "FALSE") {
                    ds = ds === "TRUE";
                    va = "b";
                  } else if (!isNaN(Wo(ds))) {
                    ds = Wo(ds);
                    va = "n";
                    if (or !== null && No(or) && zt.cellDates) {
                      va = typeof (ds = pa(Dr.Workbook.WBProps.date1904 ? ds + 1462 : ds)) == "number" ? "n" : "d";
                    }
                  }
                  os = true;
                  break;
                case "E":
                  oo = true;
                  Ro = Qh(_s[un].slice(1), {
                    r: Pt,
                    c: rn
                  });
                  break;
                case "S":
                  hr = true;
                  break;
                case "G":
                  break;
                case "R":
                  as = parseInt(_s[un].slice(1), 10) - 1;
                  break;
                case "C":
                  Lo = parseInt(_s[un].slice(1), 10) - 1;
                  break;
                default:
                  if (zt && zt.WTF) {
                    throw new Error("SYLK bad record " + yo);
                  }
              }
            }
            if (os) {
              if (ai[Pt][rn]) {
                ai[Pt][rn].t = va;
                ai[Pt][rn].v = ds;
              } else {
                ai[Pt][rn] = {
                  t: va,
                  v: ds
                };
              }
              if (or) {
                ai[Pt][rn].z = or;
              }
              if (zt.cellText !== false && or) {
                ai[Pt][rn].w = Zr(ai[Pt][rn].z, ai[Pt][rn].v, {
                  date1904: Dr.Workbook.WBProps.date1904
                });
              }
              or = null;
            }
            if (hr) {
              if (oo) {
                throw new Error("SYLK shared formula cannot have own formula");
              }
              var Pi = as > -1 && ai[as][Lo];
              if (!Pi || !Pi[1]) {
                throw new Error("SYLK shared formula cannot find base");
              }
              Ro = Sp(Pi[1], {
                r: Pt - as,
                c: rn - Lo
              });
            }
            if (Ro) {
              if (ai[Pt][rn]) {
                ai[Pt][rn].f = Ro;
              } else {
                ai[Pt][rn] = {
                  t: "n",
                  f: Ro
                };
              }
            }
            if (Xn) {
              ai[Pt][rn] ||= {
                t: "z"
              };
              ai[Pt][rn].c = [{
                a: "SheetJSYLK",
                t: Xn
              }];
            }
            break;
          case "F":
            var bi = 0;
            for (un = 1; un < _s.length; ++un) {
              switch (_s[un].charAt(0)) {
                case "X":
                  rn = parseInt(_s[un].slice(1), 10) - 1;
                  ++bi;
                  break;
                case "Y":
                  Pt = parseInt(_s[un].slice(1), 10) - 1;
                  ji = ai.length;
                  for (; ji <= Pt; ++ji) {
                    ai[ji] = [];
                  }
                  break;
                case "M":
                  Fi = parseInt(_s[un].slice(1), 10) / 20;
                  break;
                case "F":
                case "G":
                case "S":
                case "D":
                case "N":
                  break;
                case "P":
                  or = Ni[parseInt(_s[un].slice(1), 10)];
                  break;
                case "W":
                  mi = _s[un].slice(1).split(" ");
                  ji = parseInt(mi[0], 10);
                  for (; ji <= parseInt(mi[1], 10); ++ji) {
                    Fi = parseInt(mi[2], 10);
                    yi[ji - 1] = Fi === 0 ? {
                      hidden: true
                    } : {
                      wch: Fi
                    };
                  }
                  break;
                case "C":
                  if (!yi[rn = parseInt(_s[un].slice(1), 10) - 1]) {
                    yi[rn] = {};
                  }
                  break;
                case "R":
                  if (!Jn[Pt = parseInt(_s[un].slice(1), 10) - 1]) {
                    Jn[Pt] = {};
                  }
                  if (Fi > 0) {
                    Jn[Pt].hpt = Fi;
                    Jn[Pt].hpx = zd(Fi);
                  } else if (Fi === 0) {
                    Jn[Pt].hidden = true;
                  }
                  break;
                default:
                  if (zt && zt.WTF) {
                    throw new Error("SYLK bad record " + yo);
                  }
              }
            }
            if (bi < 1) {
              or = null;
            }
            break;
          default:
            if (zt && zt.WTF) {
              throw new Error("SYLK bad record " + yo);
            }
        }
      }
    }
    if (Jn.length > 0) {
      Ln["!rows"] = Jn;
    }
    if (yi.length > 0) {
      Ln["!cols"] = yi;
    }
    yi.forEach(function (vi) {
      Df(vi);
    });
    if (zt && zt.sheetRows) {
      ai = ai.slice(0, zt.sheetRows);
    }
    return [ai, Ln, Dr];
  }
  function Te(Ot, zt, nn, Pt, rn, yn) {
    var un = "C;Y" + (nn + 1) + ";X" + (Pt + 1) + ";K";
    switch (Ot.t) {
      case "n":
        un += Ot.v || 0;
        if (Ot.f && !Ot.F) {
          un += ";E" + Eg(Ot.f, {
            r: nn,
            c: Pt
          });
        }
        break;
      case "b":
        un += Ot.v ? "TRUE" : "FALSE";
        break;
      case "e":
        un += Ot.w || Ot.v;
        break;
      case "d":
        un += So(Rs(Ot.v, yn), yn);
        break;
      case "s":
        un += "\"" + (Ot.v == null ? "" : String(Ot.v)).replace(/"/g, "").replace(/;/g, ";;") + "\"";
    }
    return un;
  }
  function Ne(Ot, zt, nn) {
    return "C;Y" + (zt + 1) + ";X" + (nn + 1) + ";A" + function (Ot) {
      return Ot.replace(/\n/g, " :").replace(/\r/g, " =");
    }(Ot.map(function (rn) {
      return rn.t;
    }).join(""));
  }
  r["|"] = 254;
  return {
    to_workbook: function ee(Ot, zt) {
      var nn = function V(Ot, zt) {
        switch (zt.type) {
          case "base64":
            return Y(Ee(Ot), zt);
          case "binary":
            return Y(Ot, zt);
          case "buffer":
            return Y(ke && Buffer.isBuffer(Ot) ? Ot.toString("binary") : Et(Ot), zt);
          case "array":
            return Y(eo(Ot), zt);
        }
        throw new Error("Unrecognized type " + zt.type);
      }(Ot, zt);
      var Pt = nn[0];
      var rn = nn[1];
      var yn = nn[2];
      var un = Vs(zt);
      un.date1904 = (((yn || {}).Workbook || {}).WBProps || {}).date1904;
      var ai = To(Pt, un);
      qs(rn).forEach(function (or) {
        ai[or] = rn[or];
      });
      var Ni = cc(ai, zt);
      qs(yn).forEach(function (or) {
        Ni[or] = yn[or];
      });
      Ni.bookType = "sylk";
      return Ni;
    },
    from_sheet: function _t(Ot, zt, nn) {
      zt ||= {};
      zt._formats = ["General"];
      var un;
      var Pt = ["ID;PSheetJS;N;E"];
      var rn = [];
      var yn = Ps(Ot["!ref"] || "A1");
      var ai = Ot["!data"] != null;
      var Ni = "\r\n";
      var or = (((nn || {}).Workbook || {}).WBProps || {}).date1904;
      Pt.push("P;PGeneral");
      var Jn = yn.s.r;
      var yi = yn.s.c;
      var mi = [];
      if (Ot["!ref"]) {
        for (Jn = yn.s.r; Jn <= yn.e.r; ++Jn) {
          if (!ai || Ot["!data"][Jn]) {
            mi = [];
            yi = yn.s.c;
            for (; yi <= yn.e.c; ++yi) {
              if ((un = ai ? Ot["!data"][Jn][yi] : Ot[jo(yi) + Da(Jn)]) && un.c) {
                mi.push(Ne(un.c, Jn, yi));
              }
            }
            if (mi.length) {
              rn.push(mi.join(Ni));
            }
          }
        }
      }
      if (Ot["!ref"]) {
        for (Jn = yn.s.r; Jn <= yn.e.r; ++Jn) {
          if (!ai || Ot["!data"][Jn]) {
            mi = [];
            yi = yn.s.c;
            for (; yi <= yn.e.c; ++yi) {
              if ((un = ai ? Ot["!data"][Jn][yi] : Ot[jo(yi) + Da(Jn)]) && (un.v != null || un.f && !un.F)) {
                if ((un.z || (un.t == "d" ? Kt[14] : "General")) != "General") {
                  var Fi = zt._formats.indexOf(un.z);
                  if (Fi == -1) {
                    zt._formats.push(un.z);
                    Fi = zt._formats.length - 1;
                    Pt.push("P;P" + un.z.replace(/;/g, ";;"));
                  }
                  mi.push("F;P" + Fi + ";Y" + (Jn + 1) + ";X" + (yi + 1));
                }
                mi.push(Te(un, 0, Jn, yi, 0, or));
              }
            }
            rn.push(mi.join(Ni));
          }
        }
      }
      Pt.push("F;P0;DG0G8;M255");
      if (Ot["!cols"]) {
        (function ze(Ot, zt) {
          zt.forEach(function (nn, Pt) {
            var rn = "F;W" + (Pt + 1) + " " + (Pt + 1) + " ";
            if (nn.hidden) {
              rn += "0";
            } else {
              if (typeof nn.width == "number" && !nn.wpx) {
                nn.wpx = Rd(nn.width);
              }
              if (typeof nn.wpx == "number" && !nn.wch) {
                nn.wch = cd(nn.wpx);
              }
              if (typeof nn.wch == "number") {
                rn += Math.round(nn.wch);
              }
            }
            if (rn.charAt(rn.length - 1) != " ") {
              Ot.push(rn);
            }
          });
        })(Pt, Ot["!cols"]);
      }
      if (Ot["!rows"]) {
        (function Ft(Ot, zt) {
          zt.forEach(function (nn, Pt) {
            var rn = "F;";
            if (nn.hidden) {
              rn += "M0;";
            } else if (nn.hpt) {
              rn += "M" + nn.hpt * 20 + ";";
            } else if (nn.hpx) {
              rn += "M" + Jf(nn.hpx) * 20 + ";";
            }
            if (rn.length > 2) {
              Ot.push(rn + "R" + (Pt + 1));
            }
          });
        })(Pt, Ot["!rows"]);
      }
      if (Ot["!ref"]) {
        Pt.push("B;Y" + (yn.e.r - yn.s.r + 1) + ";X" + (yn.e.c - yn.s.c + 1) + ";D" + [yn.s.c, yn.s.r, yn.e.c, yn.e.r].join(" "));
      }
      Pt.push("O;L;D;B" + (or ? ";V4" : "") + ";K47;G100 0.001");
      delete zt._formats;
      return Pt.join(Ni) + Ni + rn.join(Ni) + Ni + "E" + Ni;
    }
  };
}();
var eg = function () {
  function c(ee, Te) {
    for (var Ne = ee.split("\n"), ze = -1, Ft = -1, _t = 0, Ot = []; _t !== Ne.length; ++_t) {
      if (Ne[_t].trim() !== "BOT") {
        if (ze >= 0) {
          for (var zt = Ne[_t].trim().split(","), nn = zt[0], Pt = zt[1], rn = Ne[++_t] || ""; (rn.match(/["]/g) || []).length & 1 && _t < Ne.length - 1;) {
            rn += "\n" + Ne[++_t];
          }
          rn = rn.trim();
          switch (+nn) {
            case -1:
              if (rn === "BOT") {
                Ot[++ze] = [];
                Ft = 0;
                continue;
              }
              if (rn !== "EOD") {
                throw new Error("Unrecognized DIF special command " + rn);
              }
              break;
            case 0:
              if (rn === "TRUE") {
                Ot[ze][Ft] = true;
              } else if (rn === "FALSE") {
                Ot[ze][Ft] = false;
              } else if (isNaN(Wo(Pt))) {
                if (isNaN(an(Pt).getDate())) {
                  Ot[ze][Ft] = Pt;
                } else {
                  Ot[ze][Ft] = Rs(Pt);
                  if (!Te || !Te.UTC) {
                    Ot[ze][Ft] = Ki(Ot[ze][Ft]);
                  }
                }
              } else {
                Ot[ze][Ft] = Wo(Pt);
              }
              ++Ft;
              break;
            case 1:
              if ((rn = (rn = rn.slice(1, rn.length - 1)).replace(/""/g, "\"")) && rn.match(/^=".*"$/)) {
                rn = rn.slice(2, -1);
              }
              Ot[ze][Ft++] = rn !== "" ? rn : null;
          }
          if (rn === "EOD") {
            break;
          }
        }
      } else {
        Ot[++ze] = [];
        Ft = 0;
      }
    }
    if (Te && Te.sheetRows) {
      Ot = Ot.slice(0, Te.sheetRows);
    }
    return Ot;
  }
  function o(ee, Te) {
    return To(function r(ee, Te) {
      switch (Te.type) {
        case "base64":
          return c(Ee(ee), Te);
        case "binary":
          return c(ee, Te);
        case "buffer":
          return c(ke && Buffer.isBuffer(ee) ? ee.toString("binary") : Et(ee), Te);
        case "array":
          return c(eo(ee), Te);
      }
      throw new Error("Unrecognized type " + Te.type);
    }(ee, Te), Te);
  }
  function _(ee, Te) {
    return "0," + String(ee) + "\r\n" + Te;
  }
  function V(ee) {
    return "1,0\r\n\"" + ee.replace(/"/g, "\"\"") + "\"";
  }
  return {
    to_workbook: function p(ee, Te) {
      var Ne = cc(o(ee, Te), Te);
      Ne.bookType = "dif";
      return Ne;
    },
    to_sheet: o,
    from_sheet: function Y(ee) {
      if (!ee["!ref"]) {
        throw new Error("Cannot export empty sheet to DIF");
      }
      for (var Ne = Ps(ee["!ref"]), ze = ee["!data"] != null, Ft = ["TABLE\r\n0,1\r\n\"sheetjs\"\r\n", "VECTORS\r\n0," + (Ne.e.r - Ne.s.r + 1) + "\r\n\"\"\r\n", "TUPLES\r\n0," + (Ne.e.c - Ne.s.c + 1) + "\r\n\"\"\r\n", "DATA\r\n0,0\r\n\"\"\r\n"], _t = Ne.s.r; _t <= Ne.e.r; ++_t) {
        for (var Ot = ze ? ee["!data"][_t] : [], zt = "-1,0\r\nBOT\r\n", nn = Ne.s.c; nn <= Ne.e.c; ++nn) {
          var Pt = ze ? Ot && Ot[nn] : ee[Eo({
            r: _t,
            c: nn
          })];
          if (Pt != null) {
            switch (Pt.t) {
              case "n":
                zt += Pt.w != null ? "0," + Pt.w + "\r\nV" : Pt.v != null ? _(Pt.v, "V") : Pt.f == null || Pt.F ? "1,0\r\n\"\"" : V("=" + Pt.f);
                break;
              case "b":
                zt += Pt.v ? _(1, "TRUE") : _(0, "FALSE");
                break;
              case "s":
                zt += V(isNaN(+Pt.v) ? Pt.v : "=\"" + Pt.v + "\"");
                break;
              case "d":
                Pt.w ||= Zr(Pt.z || Kt[14], So(Rs(Pt.v)));
                zt += _(Pt.w, "V");
                break;
              default:
                zt += "1,0\r\n\"\"";
            }
            zt += "\r\n";
          } else {
            zt += "1,0\r\n\"\"\r\n";
          }
        }
        Ft.push(zt);
      }
      return Ft.join("") + "-1,0\r\nEOD";
    }
  };
}();
var ac = function () {
  function r(Ft) {
    return Ft.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
  }
  function c(Ft) {
    return Ft.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function p(Ft, _t) {
    return To(function o(Ft, _t) {
      for (var Ot = Ft.split("\n"), zt = -1, nn = -1, Pt = 0, rn = []; Pt !== Ot.length; ++Pt) {
        var yn = Ot[Pt].trim().split(":");
        if (yn[0] === "cell") {
          var un = Qo(yn[1]);
          if (rn.length <= un.r) {
            for (zt = rn.length; zt <= un.r; ++zt) {
              rn[zt] ||= [];
            }
          }
          zt = un.r;
          nn = un.c;
          switch (yn[2]) {
            case "t":
              rn[zt][nn] = r(yn[3]);
              break;
            case "v":
              rn[zt][nn] = +yn[3];
              break;
            case "vtf":
              var ai = yn[yn.length - 1];
            case "vtc":
              rn[zt][nn] = yn[3] === "nl" ? !!+yn[4] : +yn[4];
              if (yn[2] == "vtf") {
                rn[zt][nn] = [rn[zt][nn], ai];
              }
          }
        }
      }
      if (_t && _t.sheetRows) {
        rn = rn.slice(0, _t.sheetRows);
      }
      return rn;
    }(Ft, _t), _t);
  }
  var V = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n");
  var Y = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n";
  var ee = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n");
  var Te = "--SocialCalcSpreadsheetControlSave--";
  function Ne(Ft) {
    if (!Ft || !Ft["!ref"]) {
      return "";
    }
    for (var zt, _t = [], Ot = [], nn = "", Pt = ml(Ft["!ref"]), rn = Ft["!data"] != null, yn = Pt.s.r; yn <= Pt.e.r; ++yn) {
      for (var un = Pt.s.c; un <= Pt.e.c; ++un) {
        nn = Eo({
          r: yn,
          c: un
        });
        if ((zt = rn ? (Ft["!data"][yn] || [])[un] : Ft[nn]) && zt.v != null && zt.t !== "z") {
          Ot = ["cell", nn, "t"];
          switch (zt.t) {
            case "s":
            case "str":
              Ot.push(c(zt.v));
              break;
            case "n":
              if (zt.f) {
                Ot[2] = "vtf";
                Ot[3] = "n";
                Ot[4] = zt.v;
                Ot[5] = c(zt.f);
              } else {
                Ot[2] = "v";
                Ot[3] = zt.v;
              }
              break;
            case "b":
              Ot[2] = "vt" + (zt.f ? "f" : "c");
              Ot[3] = "nl";
              Ot[4] = zt.v ? "1" : "0";
              Ot[5] = c(zt.f || (zt.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var ai = So(Rs(zt.v));
              Ot[2] = "vtc";
              Ot[3] = "nd";
              Ot[4] = "" + ai;
              Ot[5] = zt.w || Zr(zt.z || Kt[14], ai);
              break;
            case "e":
              continue;
          }
          _t.push(Ot.join(":"));
        }
      }
    }
    _t.push("sheet:c:" + (Pt.e.c - Pt.s.c + 1) + ":r:" + (Pt.e.r - Pt.s.r + 1) + ":tvf:1");
    _t.push("valueformat:1:text-wiki");
    return _t.join("\n");
  }
  return {
    to_workbook: function _(Ft, _t) {
      return cc(p(Ft, _t), _t);
    },
    to_sheet: p,
    from_sheet: function ze(Ft) {
      return [V, Y, ee, Y, Ne(Ft), Te].join("\n");
    }
  };
}();
var Xo = function () {
  function r(ze, Ft, _t, Ot, zt) {
    if (zt.raw) {
      Ft[_t][Ot] = ze;
    } else if (ze !== "") {
      Ft[_t][Ot] = ze === "TRUE" || ze !== "FALSE" && (isNaN(Wo(ze)) ? isNaN(an(ze).getDate()) ? ze : Rs(ze) : Wo(ze));
    }
  }
  var o = {
    44: ",",
    9: "\t",
    59: ";",
    124: "|"
  };
  var p = {
    44: 3,
    9: 2,
    59: 1,
    124: 0
  };
  function _(ze) {
    for (var Ft = {}, _t = false, Ot = 0, zt = 0; Ot < ze.length; ++Ot) {
      if ((zt = ze.charCodeAt(Ot)) == 34) {
        _t = !_t;
      } else if (!_t && zt in o) {
        Ft[zt] = (Ft[zt] || 0) + 1;
      }
    }
    zt = [];
    for (Ot in Ft) {
      if (Object.prototype.hasOwnProperty.call(Ft, Ot)) {
        zt.push([Ft[Ot], Ot]);
      }
    }
    if (!zt.length) {
      for (Ot in Ft = p) {
        if (Object.prototype.hasOwnProperty.call(Ft, Ot)) {
          zt.push([Ft[Ot], Ot]);
        }
      }
    }
    zt.sort(function (nn, Pt) {
      return nn[0] - Pt[0] || p[nn[1]] - p[Pt[1]];
    });
    return o[zt.pop()[1]] || 44;
  }
  function Y(ze, Ft) {
    if (!Ft || !Ft.PRN || Ft.FS || ze.slice(0, 4) == "sep=" || ze.indexOf("\t") >= 0 || ze.indexOf(",") >= 0 || ze.indexOf(";") >= 0) {
      return function V(ze, Ft) {
        var _t = Ft || {};
        var Ot = "";
        var zt = {};
        if (_t.dense) {
          zt["!data"] = [];
        }
        var nn = {
          s: {
            c: 0,
            r: 0
          },
          e: {
            c: 0,
            r: 0
          }
        };
        if (ze.slice(0, 4) == "sep=") {
          if (ze.charCodeAt(5) == 13 && ze.charCodeAt(6) == 10) {
            Ot = ze.charAt(4);
            ze = ze.slice(7);
          } else if (ze.charCodeAt(5) == 13 || ze.charCodeAt(5) == 10) {
            Ot = ze.charAt(4);
            ze = ze.slice(6);
          } else {
            Ot = _(ze.slice(0, 1024));
          }
        } else {
          Ot = _t && _t.FS ? _t.FS : _(ze.slice(0, 1024));
        }
        var Pt = 0;
        var rn = 0;
        var yn = 0;
        var un = 0;
        var ai = 0;
        var Ni = Ot.charCodeAt(0);
        var or = false;
        var Ln = 0;
        var Jn = ze.charCodeAt(0);
        var yi = _t.dateNF != null ? function Oa(r) {
          var c = typeof r == "number" ? Kt[r] : r;
          c = c.replace(ea, "(\\d+)");
          ea.lastIndex = 0;
          return new RegExp("^" + c + "$");
        }(_t.dateNF) : null;
        function mi() {
          var Fi = ze.slice(un, ai);
          if (Fi.slice(-1) == "\r") {
            Fi = Fi.slice(0, -1);
          }
          var ji = {};
          if (Fi.charAt(0) == "\"" && Fi.charAt(Fi.length - 1) == "\"") {
            Fi = Fi.slice(1, -1).replace(/""/g, "\"");
          }
          if (_t.cellText !== false) {
            ji.w = Fi;
          }
          if (Fi.length === 0) {
            ji.t = "z";
          } else if (_t.raw) {
            ji.t = "s";
            ji.v = Fi;
          } else if (Fi.trim().length === 0) {
            ji.t = "s";
            ji.v = Fi;
          } else if (Fi.charCodeAt(0) == 61) {
            if (Fi.charCodeAt(1) == 34 && Fi.charCodeAt(Fi.length - 1) == 34) {
              ji.t = "s";
              ji.v = Fi.slice(2, -1).replace(/""/g, "\"");
            } else if (function Q(r) {
              return r.length != 1;
            }(Fi)) {
              ji.t = "s";
              ji.f = Fi.slice(1);
              ji.v = Fi;
            } else {
              ji.t = "s";
              ji.v = Fi;
            }
          } else if (Fi == "TRUE") {
            ji.t = "b";
            ji.v = true;
          } else if (Fi == "FALSE") {
            ji.t = "b";
            ji.v = false;
          } else if (isNaN(yn = Wo(Fi))) {
            if (!isNaN((yn = an(Fi)).getDate()) || yi && Fi.match(yi)) {
              ji.z = _t.dateNF || Kt[14];
              if (yi && Fi.match(yi)) {
                var Dr = function qa(r, c, o) {
                  var p = -1;
                  var _ = -1;
                  var V = -1;
                  var Y = -1;
                  var ee = -1;
                  var Te = -1;
                  (c.match(ea) || []).forEach(function (Ft, _t) {
                    var Ot = parseInt(o[_t + 1], 10);
                    switch (Ft.toLowerCase().charAt(0)) {
                      case "y":
                        p = Ot;
                        break;
                      case "d":
                        V = Ot;
                        break;
                      case "h":
                        Y = Ot;
                        break;
                      case "s":
                        Te = Ot;
                        break;
                      case "m":
                        if (Y >= 0) {
                          ee = Ot;
                        } else {
                          _ = Ot;
                        }
                    }
                  });
                  ea.lastIndex = 0;
                  if (Te >= 0 && ee == -1 && _ >= 0) {
                    ee = _;
                    _ = -1;
                  }
                  var Ne = ("" + (p >= 0 ? p : new Date().getFullYear())).slice(-4) + "-" + ("00" + (_ >= 1 ? _ : 1)).slice(-2) + "-" + ("00" + (V >= 1 ? V : 1)).slice(-2);
                  if (Ne.length == 7) {
                    Ne = "0" + Ne;
                  }
                  if (Ne.length == 8) {
                    Ne = "20" + Ne;
                  }
                  var ze = ("00" + (Y >= 0 ? Y : 0)).slice(-2) + ":" + ("00" + (ee >= 0 ? ee : 0)).slice(-2) + ":" + ("00" + (Te >= 0 ? Te : 0)).slice(-2);
                  if (Y == -1 && ee == -1 && Te == -1) {
                    return Ne;
                  } else if (p == -1 && _ == -1 && V == -1) {
                    return ze;
                  } else {
                    return Ne + "T" + ze;
                  }
                }(0, _t.dateNF, Fi.match(yi) || []);
                yn = Rs(Dr);
                if (_t && _t.UTC === false) {
                  yn = Ki(yn);
                }
              } else if (_t && _t.UTC === false) {
                yn = Ki(yn);
              } else if (_t.cellText !== false && _t.dateNF) {
                ji.w = Zr(ji.z, yn);
              }
              if (_t.cellDates) {
                ji.t = "d";
                ji.v = yn;
              } else {
                ji.t = "n";
                ji.v = So(yn);
              }
              if (!_t.cellNF) {
                delete ji.z;
              }
            } else {
              ji.t = "s";
              ji.v = Fi;
            }
          } else {
            ji.t = "n";
            ji.v = yn;
          }
          if (ji.t != "z") {
            if (_t.dense) {
              zt["!data"][Pt] ||= [];
              zt["!data"][Pt][rn] = ji;
            } else {
              zt[Eo({
                c: rn,
                r: Pt
              })] = ji;
            }
          }
          Jn = ze.charCodeAt(un = ai + 1);
          if (nn.e.c < rn) {
            nn.e.c = rn;
          }
          if (nn.e.r < Pt) {
            nn.e.r = Pt;
          }
          if (Ln == Ni) {
            ++rn;
          } else {
            rn = 0;
            ++Pt;
            if (_t.sheetRows && _t.sheetRows <= Pt) {
              return true;
            }
          }
        }
        e: for (; ai < ze.length; ++ai) {
          switch (Ln = ze.charCodeAt(ai)) {
            case 34:
              if (Jn === 34) {
                or = !or;
              }
              break;
            case 13:
              if (or) {
                break;
              }
              if (ze.charCodeAt(ai + 1) == 10) {
                ++ai;
              }
            case Ni:
            case 10:
              if (!or && mi()) {
                break e;
              }
          }
        }
        if (ai - un > 0) {
          mi();
        }
        zt["!ref"] = $o(nn);
        return zt;
      }(ze, Ft);
    } else {
      return To(function c(ze, Ft) {
        var _t = Ft || {};
        var Ot = [];
        if (!ze || ze.length === 0) {
          return Ot;
        }
        for (var zt = ze.split(/[\r\n]/), nn = zt.length - 1; nn >= 0 && zt[nn].length === 0;) {
          --nn;
        }
        for (var Pt = 10, rn = 0, yn = 0; yn <= nn; ++yn) {
          if ((rn = zt[yn].indexOf(" ")) == -1) {
            rn = zt[yn].length;
          } else {
            rn++;
          }
          Pt = Math.max(Pt, rn);
        }
        for (yn = 0; yn <= nn; ++yn) {
          Ot[yn] = [];
          var un = 0;
          r(zt[yn].slice(0, Pt).trim(), Ot, yn, un, _t);
          un = 1;
          for (; un <= (zt[yn].length - Pt) / 10 + 1; ++un) {
            r(zt[yn].slice(Pt + (un - 1) * 10, Pt + un * 10).trim(), Ot, yn, un, _t);
          }
        }
        if (_t.sheetRows) {
          Ot = Ot.slice(0, _t.sheetRows);
        }
        return Ot;
      }(ze, Ft), Ft);
    }
  }
  function ee(ze, Ft) {
    var _t = "";
    var Ot = Ft.type == "string" ? [0, 0, 0, 0] : R1(ze, Ft);
    switch (Ft.type) {
      case "base64":
        _t = Ee(ze);
        break;
      case "binary":
      case "string":
        _t = ze;
        break;
      case "buffer":
        _t = Ft.codepage == 65001 ? ze.toString("utf8") : ke && Buffer.isBuffer(ze) ? ze.toString("binary") : Et(ze);
        break;
      case "array":
        _t = eo(ze);
        break;
      default:
        throw new Error("Unrecognized type " + Ft.type);
    }
    if (Ot[0] == 239 && Ot[1] == 187 && Ot[2] == 191) {
      _t = Ns(_t.slice(3));
    } else if (Ft.type != "string" && Ft.type != "buffer" && Ft.codepage == 65001) {
      _t = Ns(_t);
    }
    if (_t.slice(0, 19) == "socialcalc:version:") {
      return ac.to_sheet(Ft.type == "string" ? _t : Ns(_t), Ft);
    } else {
      return Y(_t, Ft);
    }
  }
  return {
    to_workbook: function Te(ze, Ft) {
      return cc(ee(ze, Ft), Ft);
    },
    to_sheet: ee,
    from_sheet: function Ne(ze) {
      var Ft = [];
      if (!ze["!ref"]) {
        return "";
      }
      for (var Ot, _t = Ps(ze["!ref"]), zt = ze["!data"] != null, nn = _t.s.r; nn <= _t.e.r; ++nn) {
        for (var Pt = [], rn = _t.s.c; rn <= _t.e.c; ++rn) {
          var yn = Eo({
            r: nn,
            c: rn
          });
          if ((Ot = zt ? (ze["!data"][nn] || [])[rn] : ze[yn]) && Ot.v != null) {
            for (var un = (Ot.w || (lc(Ot), Ot.w) || "").slice(0, 10); un.length < 10;) {
              un += " ";
            }
            Pt.push(un + (rn === 0 ? " " : ""));
          } else {
            Pt.push("          ");
          }
        }
        Ft.push(Pt.join(""));
      }
      return Ft.join("\n");
    }
  };
}();
var zf = function () {
  function r(Xn, Pi, bi) {
    if (Xn) {
      Vl(Xn, Xn.l || 0);
      for (var vi = bi.Enum || oo; Xn.l < Xn.length;) {
        var Cr = Xn.read_shift(2);
        var jn = vi[Cr] || vi[65535];
        var fo = Xn.read_shift(2);
        var Ms = Xn.l + fo;
        var ps = jn.f && jn.f(Xn, fo, bi);
        Xn.l = Ms;
        if (Pi(ps, jn, Cr)) {
          return;
        }
      }
    }
  }
  var o = ["mmmm", "dd-mmm-yyyy", "dd-mmm", "mmm-yyyy", "@", "mm/dd", "hh:mm:ss AM/PM", "hh:mm AM/PM", "mm/dd/yyyy", "mm/dd", "hh:mm:ss", "hh:mm"];
  function p(Xn, Pi) {
    if (!Xn) {
      return Xn;
    }
    var bi = Pi || {};
    var vi = {};
    var Cr = "Sheet1";
    var jn = "";
    var fo = 0;
    var Ms = {};
    var ps = [];
    var $a = [];
    var ul = [];
    if (bi.dense) {
      ul = vi["!data"] = [];
    }
    var no = {
      s: {
        r: 0,
        c: 0
      },
      e: {
        r: 0,
        c: 0
      }
    };
    var Lc = bi.sheetRows || 0;
    var xc = {};
    if (Xn[4] == 81 && Xn[5] == 80 && Xn[6] == 87) {
      return function va(Xn, Pi) {
        Vl(Xn, 0);
        var bi = Pi || {};
        var vi = {};
        if (bi.dense) {
          vi["!data"] = [];
        }
        var Cr = [];
        var jn = "";
        var Ms = {
          s: {
            r: -1,
            c: -1
          },
          e: {
            r: -1,
            c: -1
          }
        };
        var ps = 0;
        var $a = 0;
        var ul = 0;
        var no = 0;
        var Lc = {
          SheetNames: [],
          Sheets: {}
        };
        var xc = [];
        e: for (; Xn.l < Xn.length;) {
          var Vc = Xn.read_shift(2);
          var lh = Xn.read_shift(2);
          var Fs = Xn.slice(Xn.l, Xn.l + lh);
          Vl(Fs, 0);
          switch (Vc) {
            case 1:
              if (Fs.read_shift(4) != 962023505) {
                throw "Bad QPW9 BOF!";
              }
              break;
            case 2:
              break e;
            case 8:
            case 1025:
            case 1026:
            case 1032:
            default:
              break;
            case 10:
              for (var Us = Fs.read_shift(4), Hp = (Fs.length - Fs.l) / Us | 0, Nf = 0; Nf < Us; ++Nf) {
                var Cd = Fs.l + Hp;
                var Uf = {};
                Fs.l += 2;
                Uf.numFmtId = Fs.read_shift(2);
                if (Lo[Uf.numFmtId]) {
                  Uf.z = Lo[Uf.numFmtId];
                }
                Fs.l = Cd;
                xc.push(Uf);
              }
              break;
            case 1031:
              for (Fs.l += 12; Fs.l < Fs.length;) {
                ps = Fs.read_shift(2);
                $a = Fs.read_shift(1);
                Cr.push(Fs.read_shift(ps, "cstr"));
              }
              break;
            case 1537:
              var Wp = Fs.read_shift(2);
              vi = {};
              if (bi.dense) {
                vi["!data"] = [];
              }
              Ms.s.c = Fs.read_shift(2);
              Ms.e.c = Fs.read_shift(2);
              Ms.s.r = Fs.read_shift(4);
              Ms.e.r = Fs.read_shift(4);
              Fs.l += 4;
              if (Fs.l + 2 < Fs.length) {
                ps = Fs.read_shift(2);
                $a = Fs.read_shift(1);
                jn = ps == 0 ? "" : Fs.read_shift(ps, "cstr");
              }
              jn ||= jo(Wp);
              break;
            case 1538:
              if (Ms.s.c > 255 || Ms.s.r > 999999) {
                break;
              }
              if (Ms.e.c < Ms.s.c) {
                Ms.e.c = Ms.s.c;
              }
              if (Ms.e.r < Ms.s.r) {
                Ms.e.r = Ms.s.r;
              }
              vi["!ref"] = $o(Ms);
              y_(Lc, vi, jn);
              break;
            case 2561:
              ul = Fs.read_shift(2);
              if (Ms.e.c < ul) {
                Ms.e.c = ul;
              }
              if (Ms.s.c > ul) {
                Ms.s.c = ul;
              }
              no = Fs.read_shift(4);
              if (Ms.s.r > no) {
                Ms.s.r = no;
              }
              no = Fs.read_shift(4);
              if (Ms.e.r < no) {
                Ms.e.r = no;
              }
              break;
            case 3073:
              no = Fs.read_shift(4);
              ps = Fs.read_shift(4);
              if (Ms.s.r > no) {
                Ms.s.r = no;
              }
              if (Ms.e.r < no + ps - 1) {
                Ms.e.r = no + ps - 1;
              }
              for (var Sl = jo(ul); Fs.l < Fs.length;) {
                var Xa = {
                  t: "z"
                };
                var nu = Fs.read_shift(1);
                var wu = -1;
                if (nu & 128) {
                  wu = Fs.read_shift(2);
                }
                var Hg = nu & 64 ? Fs.read_shift(2) - 1 : 0;
                switch (nu & 31) {
                  case 0:
                  case 1:
                    break;
                  case 2:
                    Xa = {
                      t: "n",
                      v: Fs.read_shift(2)
                    };
                    break;
                  case 3:
                    Xa = {
                      t: "n",
                      v: Fs.read_shift(2, "i")
                    };
                    break;
                  case 4:
                    Xa = {
                      t: "n",
                      v: ol(Fs)
                    };
                    break;
                  case 5:
                    Xa = {
                      t: "n",
                      v: Fs.read_shift(8, "f")
                    };
                    break;
                  case 7:
                    Xa = {
                      t: "s",
                      v: Cr[$a = Fs.read_shift(4) - 1]
                    };
                    break;
                  case 8:
                    Xa = {
                      t: "n",
                      v: Fs.read_shift(8, "f")
                    };
                    Fs.l += 2;
                    Fs.l += 4;
                    if (isNaN(Xa.v)) {
                      Xa = {
                        t: "e",
                        v: 15
                      };
                    }
                    break;
                  default:
                    throw "Unrecognized QPW cell type " + (nu & 31);
                }
                if (wu != -1 && (xc[wu - 1] || {}).z) {
                  Xa.z = xc[wu - 1].z;
                }
                var a0 = 0;
                if (nu & 32) {
                  switch (nu & 31) {
                    case 2:
                    case 7:
                      a0 = Fs.read_shift(2);
                      break;
                    case 3:
                      a0 = Fs.read_shift(2, "i");
                      break;
                    default:
                      throw "Unsupported delta for QPW cell type " + (nu & 31);
                  }
                }
                if (bi.sheetStubs || Xa.t != "z") {
                  var Q0 = Vs(Xa);
                  if (Xa.t == "n" && Xa.z && No(Xa.z) && bi.cellDates) {
                    Q0.v = pa(Xa.v);
                    Q0.t = typeof Q0.v == "number" ? "n" : "d";
                  }
                  if (vi["!data"] != null) {
                    vi["!data"][no] ||= [];
                    vi["!data"][no][ul] = Q0;
                  } else {
                    vi[Sl + Da(no)] = Q0;
                  }
                }
                ++no;
                --ps;
                for (; Hg-- > 0 && ps >= 0;) {
                  if (nu & 32) {
                    switch (nu & 31) {
                      case 2:
                        Xa = {
                          t: "n",
                          v: Xa.v + a0 & 65535
                        };
                        break;
                      case 3:
                        if ((Xa = {
                          t: "n",
                          v: Xa.v + a0 & 65535
                        }).v > 32767) {
                          Xa.v -= 65536;
                        }
                        break;
                      case 7:
                        Xa = {
                          t: "s",
                          v: Cr[$a = $a + a0 >>> 0]
                        };
                        break;
                      default:
                        throw "Cannot apply delta for QPW cell type " + (nu & 31);
                    }
                  } else {
                    switch (nu & 31) {
                      case 1:
                        Xa = {
                          t: "z"
                        };
                        break;
                      case 2:
                        Xa = {
                          t: "n",
                          v: Fs.read_shift(2)
                        };
                        break;
                      case 7:
                        Xa = {
                          t: "s",
                          v: Cr[$a = Fs.read_shift(4) - 1]
                        };
                        break;
                      default:
                        throw "Cannot apply repeat for QPW cell type " + (nu & 31);
                    }
                  }
                  if (!!bi.sheetStubs || Xa.t != "z") {
                    if (vi["!data"] != null) {
                      vi["!data"][no] ||= [];
                      vi["!data"][no][ul] = Xa;
                    } else {
                      vi[Sl + Da(no)] = Xa;
                    }
                  }
                  ++no;
                  --ps;
                }
              }
              break;
            case 3074:
              ul = Fs.read_shift(2);
              no = Fs.read_shift(4);
              var b_ = Ro(Fs);
              if (vi["!data"] != null) {
                vi["!data"][no] ||= [];
                vi["!data"][no][ul] = {
                  t: "s",
                  v: b_
                };
              } else {
                vi[jo(ul) + Da(no)] = {
                  t: "s",
                  v: b_
                };
              }
          }
          Xn.l += lh;
        }
        return Lc;
      }(Xn, Pi);
    }
    if (Xn[2] == 0 && (Xn[3] == 8 || Xn[3] == 9) && Xn.length >= 16 && Xn[14] == 5 && Xn[15] === 108) {
      throw new Error("Unsupported Works 3 for Mac file");
    }
    if (Xn[2] == 2) {
      bi.Enum = oo;
      r(Xn, function (Us, Hp, Nf) {
        switch (Nf) {
          case 0:
            bi.vers = Us;
            if (Us >= 4096) {
              bi.qpro = true;
            }
            break;
          case 255:
            bi.vers = Us;
            bi.works = true;
            break;
          case 6:
            no = Us;
            break;
          case 204:
            if (Us) {
              jn = Us;
            }
            break;
          case 222:
            jn = Us;
            break;
          case 15:
          case 51:
            if ((!bi.qpro && !bi.works || Nf == 51) && Us[1].v.charCodeAt(0) < 48) {
              Us[1].v = Us[1].v.slice(1);
            }
            if (bi.works || bi.works2) {
              Us[1].v = Us[1].v.replace(/\r\n/g, "\n");
            }
          case 13:
          case 14:
          case 16:
            if ((Us[2] & 112) == 112 && (Us[2] & 15) > 1 && (Us[2] & 15) < 15) {
              Us[1].z = bi.dateNF || o[(Us[2] & 15) - 1] || Kt[14];
              if (bi.cellDates) {
                Us[1].v = pa(Us[1].v);
                Us[1].t = typeof Us[1].v == "number" ? "n" : "d";
              }
            }
            if (bi.qpro && Us[3] > fo) {
              vi["!ref"] = $o(no);
              Ms[Cr] = vi;
              ps.push(Cr);
              vi = {};
              if (bi.dense) {
                ul = vi["!data"] = [];
              }
              no = {
                s: {
                  r: 0,
                  c: 0
                },
                e: {
                  r: 0,
                  c: 0
                }
              };
              fo = Us[3];
              Cr = jn || "Sheet" + (fo + 1);
              jn = "";
            }
            var Cd = bi.dense ? (ul[Us[0].r] || [])[Us[0].c] : vi[Eo(Us[0])];
            if (Cd) {
              Cd.t = Us[1].t;
              Cd.v = Us[1].v;
              if (Us[1].z != null) {
                Cd.z = Us[1].z;
              }
              if (Us[1].f != null) {
                Cd.f = Us[1].f;
              }
              xc = Cd;
              break;
            }
            if (bi.dense) {
              ul[Us[0].r] ||= [];
              ul[Us[0].r][Us[0].c] = Us[1];
            } else {
              vi[Eo(Us[0])] = Us[1];
            }
            xc = Us[1];
            break;
          case 21509:
            bi.works2 = true;
            break;
          case 21506:
            if (Us == 5281) {
              xc.z = "hh:mm:ss";
              if (bi.cellDates && xc.t == "n") {
                xc.v = pa(xc.v);
                xc.t = typeof xc.v == "number" ? "n" : "d";
              }
            }
        }
      }, bi);
    } else {
      if (Xn[2] != 26 && Xn[2] != 14) {
        throw new Error("Unrecognized LOTUS BOF " + Xn[2]);
      }
      bi.Enum = as;
      if (Xn[2] == 14) {
        bi.qpro = true;
        Xn.l = 0;
      }
      r(Xn, function (Us, Hp, Nf) {
        switch (Nf) {
          case 204:
            Cr = Us;
            break;
          case 22:
            if (Us[1].v.charCodeAt(0) < 48) {
              Us[1].v = Us[1].v.slice(1);
            }
            Us[1].v = Us[1].v.replace(/\x0F./g, function (Cd) {
              return String.fromCharCode(Cd.charCodeAt(1) - 32);
            }).replace(/\r\n/g, "\n");
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (Us[3] > fo) {
              vi["!ref"] = $o(no);
              Ms[Cr] = vi;
              ps.push(Cr);
              vi = {};
              if (bi.dense) {
                ul = vi["!data"] = [];
              }
              no = {
                s: {
                  r: 0,
                  c: 0
                },
                e: {
                  r: 0,
                  c: 0
                }
              };
              Cr = "Sheet" + ((fo = Us[3]) + 1);
            }
            if (Lc > 0 && Us[0].r >= Lc) {
              break;
            }
            if (bi.dense) {
              ul[Us[0].r] ||= [];
              ul[Us[0].r][Us[0].c] = Us[1];
            } else {
              vi[Eo(Us[0])] = Us[1];
            }
            if (no.e.c < Us[0].c) {
              no.e.c = Us[0].c;
            }
            if (no.e.r < Us[0].r) {
              no.e.r = Us[0].r;
            }
            break;
          case 27:
            if (Us[14000]) {
              $a[Us[14000][0]] = Us[14000][1];
            }
            break;
          case 1537:
            $a[Us[0]] = Us[1];
            if (Us[0] == fo) {
              Cr = Us[1];
            }
        }
      }, bi);
    }
    vi["!ref"] = $o(no);
    Ms[jn || Cr] = vi;
    ps.push(jn || Cr);
    if (!$a.length) {
      return {
        SheetNames: ps,
        Sheets: Ms
      };
    }
    for (var Vc = {}, lh = [], Fs = 0; Fs < $a.length; ++Fs) {
      if (Ms[ps[Fs]]) {
        lh.push($a[Fs] || ps[Fs]);
        Vc[$a[Fs]] = Ms[$a[Fs]] || Ms[ps[Fs]];
      } else {
        lh.push($a[Fs]);
        Vc[$a[Fs]] = {
          "!ref": "A1"
        };
      }
    }
    return {
      SheetNames: lh,
      Sheets: Vc
    };
  }
  function ze(Xn, Pi, bi) {
    var vi = [{
      c: 0,
      r: 0
    }, {
      t: "n",
      v: 0
    }, 0, 0];
    if (bi.qpro && bi.vers != 20768) {
      vi[0].c = Xn.read_shift(1);
      vi[3] = Xn.read_shift(1);
      vi[0].r = Xn.read_shift(2);
      Xn.l += 2;
    } else if (bi.works) {
      vi[0].c = Xn.read_shift(2);
      vi[0].r = Xn.read_shift(2);
      vi[2] = Xn.read_shift(2);
    } else {
      vi[2] = Xn.read_shift(1);
      vi[0].c = Xn.read_shift(2);
      vi[0].r = Xn.read_shift(2);
    }
    return vi;
  }
  function Ft(Xn) {
    if (Xn.z && No(Xn.z)) {
      return (o.indexOf(Xn.z) + 1 || 2) | 240;
    } else {
      return 255;
    }
  }
  function Ot(Xn, Pi, bi) {
    var vi = Gi(7 + bi.length);
    vi.write_shift(1, 255);
    vi.write_shift(2, Pi);
    vi.write_shift(2, Xn);
    vi.write_shift(1, 39);
    for (var Cr = 0; Cr < vi.length; ++Cr) {
      var jn = bi.charCodeAt(Cr);
      vi.write_shift(1, jn >= 128 ? 95 : jn);
    }
    vi.write_shift(1, 0);
    return vi;
  }
  function Pt(Xn, Pi, bi) {
    var vi = Gi(7);
    vi.write_shift(1, Ft(bi));
    vi.write_shift(2, Pi);
    vi.write_shift(2, Xn);
    vi.write_shift(2, bi.v, "i");
    return vi;
  }
  function yn(Xn, Pi, bi) {
    var vi = Gi(13);
    vi.write_shift(1, Ft(bi));
    vi.write_shift(2, Pi);
    vi.write_shift(2, Xn);
    vi.write_shift(8, bi.v, "f");
    return vi;
  }
  function ai(Xn, Pi, bi) {
    var vi = Pi & 32768;
    Pi = (vi ? Xn : 0) + ((Pi &= -32769) >= 8192 ? Pi - 16384 : Pi);
    return (vi ? "" : "$") + (bi ? jo(Pi) : Da(Pi));
  }
  var Ni = {
    31: ["NA", 0],
    33: ["ABS", 1],
    34: ["TRUNC", 1],
    35: ["SQRT", 1],
    36: ["LOG", 1],
    37: ["LN", 1],
    38: ["PI", 0],
    39: ["SIN", 1],
    40: ["COS", 1],
    41: ["TAN", 1],
    42: ["ATAN2", 2],
    43: ["ATAN", 1],
    44: ["ASIN", 1],
    45: ["ACOS", 1],
    46: ["EXP", 1],
    47: ["MOD", 2],
    49: ["ISNA", 1],
    50: ["ISERR", 1],
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    53: ["RAND", 0],
    54: ["DATE", 3],
    63: ["ROUND", 2],
    64: ["TIME", 3],
    68: ["ISNUMBER", 1],
    69: ["ISTEXT", 1],
    70: ["LEN", 1],
    71: ["VALUE", 1],
    73: ["MID", 3],
    74: ["CHAR", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    102: ["UPPER", 1],
    103: ["LOWER", 1],
    107: ["PROPER", 1],
    109: ["TRIM", 1],
    111: ["T", 1]
  };
  var or = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function Jn(Xn) {
    var Pi = [{
      c: 0,
      r: 0
    }, {
      t: "n",
      v: 0
    }, 0];
    Pi[0].r = Xn.read_shift(2);
    Pi[3] = Xn[Xn.l++];
    Pi[0].c = Xn[Xn.l++];
    return Pi;
  }
  function mi(Xn, Pi, bi, vi) {
    var Cr = Gi(6 + vi.length);
    Cr.write_shift(2, Xn);
    Cr.write_shift(1, bi);
    Cr.write_shift(1, Pi);
    Cr.write_shift(1, 39);
    for (var jn = 0; jn < vi.length; ++jn) {
      var fo = vi.charCodeAt(jn);
      Cr.write_shift(1, fo >= 128 ? 95 : fo);
    }
    Cr.write_shift(1, 0);
    return Cr;
  }
  function ji(Xn, Pi) {
    var bi = Jn(Xn);
    var vi = Xn.read_shift(4);
    var Cr = Xn.read_shift(4);
    var jn = Xn.read_shift(2);
    if (jn == 65535) {
      if (vi === 0 && Cr === 3221225472) {
        bi[1].t = "e";
        bi[1].v = 15;
      } else if (vi === 0 && Cr === 3489660928) {
        bi[1].t = "e";
        bi[1].v = 42;
      } else {
        bi[1].v = 0;
      }
      return bi;
    }
    var fo = jn & 32768;
    jn = (jn & 32767) - 16446;
    bi[1].v = (1 - fo * 2) * (Cr * Math.pow(2, jn + 32) + vi * Math.pow(2, jn));
    return bi;
  }
  function Dr(Xn, Pi, bi, vi) {
    var Cr = Gi(14);
    Cr.write_shift(2, Xn);
    Cr.write_shift(1, bi);
    Cr.write_shift(1, Pi);
    if (vi == 0) {
      Cr.write_shift(4, 0);
      Cr.write_shift(4, 0);
      Cr.write_shift(2, 65535);
      return Cr;
    }
    var jn = 0;
    var fo = 0;
    var ps = 0;
    if (vi < 0) {
      jn = 1;
      vi = -vi;
    }
    fo = Math.log2(vi) | 0;
    if (((ps = (vi /= Math.pow(2, fo - 31)) >>> 0) & 2147483648) == 0) {
      ++fo;
      ps = (vi /= 2) >>> 0;
    }
    vi -= ps;
    ps |= 2147483648;
    ps >>>= 0;
    vi *= Math.pow(2, 32);
    Cr.write_shift(4, vi >>> 0);
    Cr.write_shift(4, ps);
    Cr.write_shift(2, fo += 16383 + (jn ? 32768 : 0));
    return Cr;
  }
  function ra(Xn, Pi) {
    var bi = Jn(Xn);
    var vi = Xn.read_shift(8, "f");
    bi[1].v = vi;
    return bi;
  }
  function Ua(Xn, Pi) {
    if (Xn[Xn.l + Pi - 1] == 0) {
      return Xn.read_shift(Pi, "cstr");
    } else {
      return "";
    }
  }
  function hr(Xn, Pi) {
    var bi = Gi(5 + Xn.length);
    bi.write_shift(2, 14000);
    bi.write_shift(2, Pi);
    for (var vi = 0; vi < Xn.length; ++vi) {
      var Cr = Xn.charCodeAt(vi);
      bi[bi.l++] = Cr > 127 ? 95 : Cr;
    }
    bi[bi.l++] = 0;
    return bi;
  }
  var oo = {
    0: {
      n: "BOF",
      f: wl
    },
    1: {
      n: "EOF"
    },
    2: {
      n: "CALCMODE"
    },
    3: {
      n: "CALCORDER"
    },
    4: {
      n: "SPLIT"
    },
    5: {
      n: "SYNC"
    },
    6: {
      n: "RANGE",
      f: function Te(Xn, Pi, bi) {
        var vi = {
          s: {
            c: 0,
            r: 0
          },
          e: {
            c: 0,
            r: 0
          }
        };
        if (Pi == 8 && bi.qpro) {
          vi.s.c = Xn.read_shift(1);
          Xn.l++;
          vi.s.r = Xn.read_shift(2);
          vi.e.c = Xn.read_shift(1);
          Xn.l++;
          vi.e.r = Xn.read_shift(2);
          return vi;
        } else {
          vi.s.c = Xn.read_shift(2);
          vi.s.r = Xn.read_shift(2);
          if (Pi == 12 && bi.qpro) {
            Xn.l += 2;
          }
          vi.e.c = Xn.read_shift(2);
          vi.e.r = Xn.read_shift(2);
          if (Pi == 12 && bi.qpro) {
            Xn.l += 2;
          }
          if (vi.s.c == 65535) {
            vi.s.c = vi.e.c = vi.s.r = vi.e.r = 0;
          }
          return vi;
        }
      }
    },
    7: {
      n: "WINDOW1"
    },
    8: {
      n: "COLW1"
    },
    9: {
      n: "WINTWO"
    },
    10: {
      n: "COLW2"
    },
    11: {
      n: "NAME"
    },
    12: {
      n: "BLANK"
    },
    13: {
      n: "INTEGER",
      f: function nn(Xn, Pi, bi) {
        var vi = ze(Xn, 0, bi);
        vi[1].v = Xn.read_shift(2, "i");
        return vi;
      }
    },
    14: {
      n: "NUMBER",
      f: function rn(Xn, Pi, bi) {
        var vi = ze(Xn, 0, bi);
        vi[1].v = Xn.read_shift(8, "f");
        return vi;
      }
    },
    15: {
      n: "LABEL",
      f: function _t(Xn, Pi, bi) {
        var vi = Xn.l + Pi;
        var Cr = ze(Xn, 0, bi);
        Cr[1].t = "s";
        if ((bi.vers & 65534) == 20768) {
          Xn.l++;
          var jn = Xn.read_shift(1);
          Cr[1].v = Xn.read_shift(jn, "utf8");
          return Cr;
        }
        if (bi.qpro) {
          Xn.l++;
        }
        Cr[1].v = Xn.read_shift(vi - Xn.l, "cstr");
        return Cr;
      }
    },
    16: {
      n: "FORMULA",
      f: function un(Xn, Pi, bi) {
        var vi = Xn.l + Pi;
        var Cr = ze(Xn, 0, bi);
        Cr[1].v = Xn.read_shift(8, "f");
        if (bi.qpro) {
          Xn.l = vi;
        } else {
          var jn = Xn.read_shift(2);
          (function Ln(Xn, Pi) {
            Vl(Xn, 0);
            for (var bi = [], vi = 0, Cr = "", jn = "", fo = "", Ms = ""; Xn.l < Xn.length;) {
              var ps = Xn[Xn.l++];
              switch (ps) {
                case 0:
                  bi.push(Xn.read_shift(8, "f"));
                  break;
                case 1:
                  jn = ai(Pi[0].c, Xn.read_shift(2), true);
                  Cr = ai(Pi[0].r, Xn.read_shift(2), false);
                  bi.push(jn + Cr);
                  break;
                case 2:
                  var $a = ai(Pi[0].c, Xn.read_shift(2), true);
                  var ul = ai(Pi[0].r, Xn.read_shift(2), false);
                  jn = ai(Pi[0].c, Xn.read_shift(2), true);
                  Cr = ai(Pi[0].r, Xn.read_shift(2), false);
                  bi.push($a + ul + ":" + jn + Cr);
                  break;
                case 3:
                  if (Xn.l < Xn.length) {
                    console.error("WK1 premature formula end");
                    return;
                  }
                  break;
                case 4:
                  bi.push("(" + bi.pop() + ")");
                  break;
                case 5:
                  bi.push(Xn.read_shift(2));
                  break;
                case 6:
                  for (var no = ""; ps = Xn[Xn.l++];) {
                    no += String.fromCharCode(ps);
                  }
                  bi.push("\"" + no.replace(/"/g, "\"\"") + "\"");
                  break;
                case 8:
                  bi.push("-" + bi.pop());
                  break;
                case 23:
                  bi.push("+" + bi.pop());
                  break;
                case 22:
                  bi.push("NOT(" + bi.pop() + ")");
                  break;
                case 20:
                case 21:
                  Ms = bi.pop();
                  fo = bi.pop();
                  bi.push(["AND", "OR"][ps - 20] + "(" + fo + "," + Ms + ")");
                  break;
                default:
                  if (ps < 32 && or[ps]) {
                    Ms = bi.pop();
                    fo = bi.pop();
                    bi.push(fo + or[ps] + Ms);
                  } else {
                    if (!Ni[ps]) {
                      if (ps <= 7) {
                        return console.error("WK1 invalid opcode " + ps.toString(16));
                      } else if (ps <= 24) {
                        return console.error("WK1 unsupported op " + ps.toString(16));
                      } else if (ps <= 30) {
                        return console.error("WK1 invalid opcode " + ps.toString(16));
                      } else if (ps <= 115) {
                        return console.error("WK1 unsupported function opcode " + ps.toString(16));
                      } else {
                        return console.error("WK1 unrecognized opcode " + ps.toString(16));
                      }
                    }
                    if ((vi = Ni[ps][1]) == 69) {
                      vi = Xn[Xn.l++];
                    }
                    if (vi > bi.length) {
                      console.error("WK1 bad formula parse 0x" + ps.toString(16) + ":|" + bi.join("|") + "|");
                      return;
                    }
                    var Lc = bi.slice(-vi);
                    bi.length -= vi;
                    bi.push(Ni[ps][0] + "(" + Lc.join(",") + ")");
                  }
              }
            }
            if (bi.length == 1) {
              Pi[1].f = "" + bi[0];
            } else {
              console.error("WK1 bad formula parse |" + bi.join("|") + "|");
            }
          })(Xn.slice(Xn.l, Xn.l + jn), Cr);
          Xn.l += jn;
        }
        return Cr;
      }
    },
    24: {
      n: "TABLE"
    },
    25: {
      n: "ORANGE"
    },
    26: {
      n: "PRANGE"
    },
    27: {
      n: "SRANGE"
    },
    28: {
      n: "FRANGE"
    },
    29: {
      n: "KRANGE1"
    },
    32: {
      n: "HRANGE"
    },
    35: {
      n: "KRANGE2"
    },
    36: {
      n: "PROTEC"
    },
    37: {
      n: "FOOTER"
    },
    38: {
      n: "HEADER"
    },
    39: {
      n: "SETUP"
    },
    40: {
      n: "MARGINS"
    },
    41: {
      n: "LABELFMT"
    },
    42: {
      n: "TITLES"
    },
    43: {
      n: "SHEETJS"
    },
    45: {
      n: "GRAPH"
    },
    46: {
      n: "NGRAPH"
    },
    47: {
      n: "CALCCOUNT"
    },
    48: {
      n: "UNFORMATTED"
    },
    49: {
      n: "CURSORW12"
    },
    50: {
      n: "WINDOW"
    },
    51: {
      n: "STRING",
      f: function zt(Xn, Pi, bi) {
        var vi = Xn.l + Pi;
        var Cr = ze(Xn, 0, bi);
        Cr[1].t = "s";
        if (bi.vers == 20768) {
          var jn = Xn.read_shift(1);
          Cr[1].v = Xn.read_shift(jn, "utf8");
          return Cr;
        }
        Cr[1].v = Xn.read_shift(vi - Xn.l, "cstr");
        return Cr;
      }
    },
    55: {
      n: "PASSWORD"
    },
    56: {
      n: "LOCKED"
    },
    60: {
      n: "QUERY"
    },
    61: {
      n: "QUERYNAME"
    },
    62: {
      n: "PRINT"
    },
    63: {
      n: "PRINTNAME"
    },
    64: {
      n: "GRAPH2"
    },
    65: {
      n: "GRAPHNAME"
    },
    66: {
      n: "ZOOM"
    },
    67: {
      n: "SYMSPLIT"
    },
    68: {
      n: "NSROWS"
    },
    69: {
      n: "NSCOLS"
    },
    70: {
      n: "RULER"
    },
    71: {
      n: "NNAME"
    },
    72: {
      n: "ACOMM"
    },
    73: {
      n: "AMACRO"
    },
    74: {
      n: "PARSE"
    },
    102: {
      n: "PRANGES??"
    },
    103: {
      n: "RRANGES??"
    },
    104: {
      n: "FNAME??"
    },
    105: {
      n: "MRANGES??"
    },
    204: {
      n: "SHEETNAMECS",
      f: Ua
    },
    222: {
      n: "SHEETNAMELP",
      f: function Ul(Xn, Pi) {
        var bi = Xn[Xn.l++];
        if (bi > Pi - 1) {
          bi = Pi - 1;
        }
        for (var vi = ""; vi.length < bi;) {
          vi += String.fromCharCode(Xn[Xn.l++]);
        }
        return vi;
      }
    },
    255: {
      n: "BOF",
      f: wl
    },
    21506: {
      n: "WKSNF",
      f: wl
    },
    65535: {
      n: ""
    }
  };
  var as = {
    0: {
      n: "BOF"
    },
    1: {
      n: "EOF"
    },
    2: {
      n: "PASSWORD"
    },
    3: {
      n: "CALCSET"
    },
    4: {
      n: "WINDOWSET"
    },
    5: {
      n: "SHEETCELLPTR"
    },
    6: {
      n: "SHEETLAYOUT"
    },
    7: {
      n: "COLUMNWIDTH"
    },
    8: {
      n: "HIDDENCOLUMN"
    },
    9: {
      n: "USERRANGE"
    },
    10: {
      n: "SYSTEMRANGE"
    },
    11: {
      n: "ZEROFORCE"
    },
    12: {
      n: "SORTKEYDIR"
    },
    13: {
      n: "FILESEAL"
    },
    14: {
      n: "DATAFILLNUMS"
    },
    15: {
      n: "PRINTMAIN"
    },
    16: {
      n: "PRINTSTRING"
    },
    17: {
      n: "GRAPHMAIN"
    },
    18: {
      n: "GRAPHSTRING"
    },
    19: {
      n: "??"
    },
    20: {
      n: "ERRCELL"
    },
    21: {
      n: "NACELL"
    },
    22: {
      n: "LABEL16",
      f: function yi(Xn, Pi) {
        var bi = Jn(Xn);
        bi[1].t = "s";
        bi[1].v = Xn.read_shift(Pi - 4, "cstr");
        return bi;
      }
    },
    23: {
      n: "NUMBER17",
      f: ji
    },
    24: {
      n: "NUMBER18",
      f: function Fi(Xn, Pi) {
        var bi = Jn(Xn);
        bi[1].v = Xn.read_shift(2);
        var vi = bi[1].v >> 1;
        if (bi[1].v & 1) {
          switch (vi & 7) {
            case 0:
              vi = (vi >> 3) * 5000;
              break;
            case 1:
              vi = (vi >> 3) * 500;
              break;
            case 2:
              vi = (vi >> 3) / 20;
              break;
            case 3:
              vi = (vi >> 3) / 200;
              break;
            case 4:
              vi = (vi >> 3) / 2000;
              break;
            case 5:
              vi = (vi >> 3) / 20000;
              break;
            case 6:
              vi = (vi >> 3) / 16;
              break;
            case 7:
              vi = (vi >> 3) / 64;
          }
        }
        bi[1].v = vi;
        return bi;
      }
    },
    25: {
      n: "FORMULA19",
      f: function yo(Xn, Pi) {
        var bi = ji(Xn);
        Xn.l += Pi - 14;
        return bi;
      }
    },
    26: {
      n: "FORMULA1A"
    },
    27: {
      n: "XFORMAT",
      f: function Ba(Xn, Pi) {
        for (var bi = {}, vi = Xn.l + Pi; Xn.l < vi;) {
          var Cr = Xn.read_shift(2);
          if (Cr == 14000) {
            bi[Cr] = [0, ""];
            bi[Cr][0] = Xn.read_shift(2);
            for (; Xn[Xn.l];) {
              bi[Cr][1] += String.fromCharCode(Xn[Xn.l]);
              Xn.l++;
            }
            Xn.l++;
          }
        }
        return bi;
      }
    },
    28: {
      n: "DTLABELMISC"
    },
    29: {
      n: "DTLABELCELL"
    },
    30: {
      n: "GRAPHWINDOW"
    },
    31: {
      n: "CPA"
    },
    32: {
      n: "LPLAUTO"
    },
    33: {
      n: "QUERY"
    },
    34: {
      n: "HIDDENSHEET"
    },
    35: {
      n: "??"
    },
    37: {
      n: "NUMBER25",
      f: function _s(Xn, Pi) {
        var bi = Jn(Xn);
        var vi = Xn.read_shift(4);
        bi[1].v = vi >> 6;
        return bi;
      }
    },
    38: {
      n: "??"
    },
    39: {
      n: "NUMBER27",
      f: ra
    },
    40: {
      n: "FORMULA28",
      f: function ds(Xn, Pi) {
        var bi = ra(Xn);
        Xn.l += Pi - 12;
        return bi;
      }
    },
    142: {
      n: "??"
    },
    147: {
      n: "??"
    },
    150: {
      n: "??"
    },
    151: {
      n: "??"
    },
    152: {
      n: "??"
    },
    153: {
      n: "??"
    },
    154: {
      n: "??"
    },
    155: {
      n: "??"
    },
    156: {
      n: "??"
    },
    163: {
      n: "??"
    },
    174: {
      n: "??"
    },
    175: {
      n: "??"
    },
    176: {
      n: "??"
    },
    177: {
      n: "??"
    },
    184: {
      n: "??"
    },
    185: {
      n: "??"
    },
    186: {
      n: "??"
    },
    187: {
      n: "??"
    },
    188: {
      n: "??"
    },
    195: {
      n: "??"
    },
    201: {
      n: "??"
    },
    204: {
      n: "SHEETNAMECS",
      f: Ua
    },
    205: {
      n: "??"
    },
    206: {
      n: "??"
    },
    207: {
      n: "??"
    },
    208: {
      n: "??"
    },
    256: {
      n: "??"
    },
    259: {
      n: "??"
    },
    260: {
      n: "??"
    },
    261: {
      n: "??"
    },
    262: {
      n: "??"
    },
    263: {
      n: "??"
    },
    265: {
      n: "??"
    },
    266: {
      n: "??"
    },
    267: {
      n: "??"
    },
    268: {
      n: "??"
    },
    270: {
      n: "??"
    },
    271: {
      n: "??"
    },
    384: {
      n: "??"
    },
    389: {
      n: "??"
    },
    390: {
      n: "??"
    },
    393: {
      n: "??"
    },
    396: {
      n: "??"
    },
    512: {
      n: "??"
    },
    514: {
      n: "??"
    },
    513: {
      n: "??"
    },
    516: {
      n: "??"
    },
    517: {
      n: "??"
    },
    640: {
      n: "??"
    },
    641: {
      n: "??"
    },
    642: {
      n: "??"
    },
    643: {
      n: "??"
    },
    644: {
      n: "??"
    },
    645: {
      n: "??"
    },
    646: {
      n: "??"
    },
    647: {
      n: "??"
    },
    648: {
      n: "??"
    },
    658: {
      n: "??"
    },
    659: {
      n: "??"
    },
    660: {
      n: "??"
    },
    661: {
      n: "??"
    },
    662: {
      n: "??"
    },
    665: {
      n: "??"
    },
    666: {
      n: "??"
    },
    768: {
      n: "??"
    },
    772: {
      n: "??"
    },
    1537: {
      n: "SHEETINFOQP",
      f: function os(Xn, Pi, bi) {
        if (bi.qpro && Pi >= 21) {
          var vi = Xn.read_shift(1);
          Xn.l += 17;
          Xn.l += 1;
          Xn.l += 2;
          return [vi, Xn.read_shift(Pi - 21, "cstr")];
        }
      }
    },
    1600: {
      n: "??"
    },
    1602: {
      n: "??"
    },
    1793: {
      n: "??"
    },
    1794: {
      n: "??"
    },
    1795: {
      n: "??"
    },
    1796: {
      n: "??"
    },
    1920: {
      n: "??"
    },
    2048: {
      n: "??"
    },
    2049: {
      n: "??"
    },
    2052: {
      n: "??"
    },
    2688: {
      n: "??"
    },
    10998: {
      n: "??"
    },
    12849: {
      n: "??"
    },
    28233: {
      n: "??"
    },
    28484: {
      n: "??"
    },
    65535: {
      n: ""
    }
  };
  var Lo = {
    5: "dd-mmm-yy",
    6: "dd-mmm",
    7: "mmm-yy",
    8: "mm/dd/yy",
    10: "hh:mm:ss AM/PM",
    11: "hh:mm AM/PM",
    14: "dd-mmm-yyyy",
    15: "mmm-yyyy",
    34: "0.00",
    50: "0.00;[Red]0.00",
    66: "0.00;(0.00)",
    82: "0.00;[Red](0.00)",
    162: "\"$\"#,##0.00;\\(\"$\"#,##0.00\\)",
    288: "0%",
    304: "0E+00",
    320: "# ?/?"
  };
  function Ro(Xn) {
    var Pi = Xn.read_shift(2);
    var bi = Xn.read_shift(1);
    if (bi != 0) {
      throw "unsupported QPW string type " + bi.toString(16);
    }
    return Xn.read_shift(Pi, "sbcs-cont");
  }
  return {
    sheet_to_wk1: function _(Xn, Pi) {
      var bi = Pi || {};
      if (+bi.codepage >= 0) {
        j(+bi.codepage);
      }
      if (bi.type == "string") {
        throw new Error("Cannot write WK1 to JS string");
      }
      var vi = tl();
      if (!Xn["!ref"]) {
        throw new Error("Cannot export empty sheet to WK1");
      }
      var Cr = Ps(Xn["!ref"]);
      var jn = Xn["!data"] != null;
      var fo = [];
      Qr(vi, 0, function Y(Xn) {
        var Pi = Gi(2);
        Pi.write_shift(2, Xn);
        return Pi;
      }(1030));
      Qr(vi, 6, function Ne(Xn) {
        var Pi = Gi(8);
        Pi.write_shift(2, Xn.s.c);
        Pi.write_shift(2, Xn.s.r);
        Pi.write_shift(2, Xn.e.c);
        Pi.write_shift(2, Xn.e.r);
        return Pi;
      }(Cr));
      for (var Ms = Math.min(Cr.e.r, 8191), ps = Cr.s.c; ps <= Cr.e.c; ++ps) {
        fo[ps] = jo(ps);
      }
      for (var $a = Cr.s.r; $a <= Ms; ++$a) {
        var ul = Da($a);
        for (ps = Cr.s.c; ps <= Cr.e.c; ++ps) {
          var no = jn ? (Xn["!data"][$a] || [])[ps] : Xn[fo[ps] + ul];
          if (no && no.t != "z") {
            switch (no.t) {
              case "n":
                if ((no.v | 0) == no.v && no.v >= -32768 && no.v <= 32767) {
                  Qr(vi, 13, Pt($a, ps, no));
                } else {
                  Qr(vi, 14, yn($a, ps, no));
                }
                break;
              case "d":
                var Lc = So(no.v);
                if ((Lc | 0) == Lc && Lc >= -32768 && Lc <= 32767) {
                  Qr(vi, 13, Pt($a, ps, {
                    t: "n",
                    v: Lc,
                    z: no.z || Kt[14]
                  }));
                } else {
                  Qr(vi, 14, yn($a, ps, {
                    t: "n",
                    v: Lc,
                    z: no.z || Kt[14]
                  }));
                }
                break;
              default:
                Qr(vi, 15, Ot($a, ps, lc(no).slice(0, 239)));
            }
          }
        }
      }
      Qr(vi, 1);
      return vi.end();
    },
    book_to_wk3: function V(Xn, Pi) {
      var bi = Pi || {};
      if (+bi.codepage >= 0) {
        j(+bi.codepage);
      }
      if (bi.type == "string") {
        throw new Error("Cannot write WK3 to JS string");
      }
      var vi = tl();
      Qr(vi, 0, function ee(Xn) {
        var Pi = Gi(26);
        Pi.write_shift(2, 4096);
        Pi.write_shift(2, 4);
        Pi.write_shift(4, 0);
        for (var bi = 0, vi = 0, Cr = 0, jn = 0; jn < Xn.SheetNames.length; ++jn) {
          var Ms = Xn.Sheets[Xn.SheetNames[jn]];
          if (Ms && Ms["!ref"]) {
            ++Cr;
            var ps = ml(Ms["!ref"]);
            if (bi < ps.e.r) {
              bi = ps.e.r;
            }
            if (vi < ps.e.c) {
              vi = ps.e.c;
            }
          }
        }
        if (bi > 8191) {
          bi = 8191;
        }
        Pi.write_shift(2, bi);
        Pi.write_shift(1, Cr);
        Pi.write_shift(1, vi);
        Pi.write_shift(2, 0);
        Pi.write_shift(2, 0);
        Pi.write_shift(1, 1);
        Pi.write_shift(1, 2);
        Pi.write_shift(4, 0);
        Pi.write_shift(4, 0);
        return Pi;
      }(Xn));
      for (var Cr = 0, jn = 0; Cr < Xn.SheetNames.length; ++Cr) {
        if ((Xn.Sheets[Xn.SheetNames[Cr]] || {})["!ref"]) {
          Qr(vi, 27, hr(Xn.SheetNames[Cr], jn++));
        }
      }
      var fo = 0;
      for (Cr = 0; Cr < Xn.SheetNames.length; ++Cr) {
        var Ms = Xn.Sheets[Xn.SheetNames[Cr]];
        if (Ms && Ms["!ref"]) {
          for (var ps = Ps(Ms["!ref"]), $a = Ms["!data"] != null, ul = [], no = Math.min(ps.e.r, 8191), Lc = ps.s.r; Lc <= no; ++Lc) {
            for (var xc = Da(Lc), Vc = ps.s.c; Vc <= ps.e.c; ++Vc) {
              if (Lc === ps.s.r) {
                ul[Vc] = jo(Vc);
              }
              var Fs = $a ? (Ms["!data"][Lc] || [])[Vc] : Ms[ul[Vc] + xc];
              if (Fs && Fs.t != "z") {
                if (Fs.t == "n") {
                  Qr(vi, 23, Dr(Lc, Vc, fo, Fs.v));
                } else {
                  Qr(vi, 22, mi(Lc, Vc, fo, lc(Fs).slice(0, 239)));
                }
              }
            }
          }
          ++fo;
        }
      }
      Qr(vi, 1);
      return vi.end();
    },
    to_workbook: function c(Xn, Pi) {
      switch (Pi.type) {
        case "base64":
          return p(Yt(Ee(Xn)), Pi);
        case "binary":
          return p(Yt(Xn), Pi);
        case "buffer":
        case "array":
          return p(Xn, Pi);
      }
      throw "Unsupported type " + Pi.type;
    }
  };
}();
var Kf = function () {
  var r = ht("t");
  var c = ht("rPr");
  function o(V) {
    var Y = V.match(r);
    if (!Y) {
      return {
        t: "s",
        v: ""
      };
    }
    var ee = {
      t: "s",
      v: Rr(Y[1])
    };
    var Te = V.match(c);
    if (Te) {
      ee.s = function Ou(r) {
        var c = {};
        var o = r.match(Ys);
        var p = 0;
        var _ = false;
        if (o) {
          for (; p != o.length; ++p) {
            var V = sr(o[p]);
            switch (V[0].replace(/\w*:/g, "")) {
              case "<condense":
              case "<extend":
                break;
              case "<shadow":
                if (!V.val) {
                  break;
                }
              case "<shadow>":
              case "<shadow/>":
                c.shadow = 1;
                break;
              case "</shadow>":
                break;
              case "<charset":
                if (V.val == "1") {
                  break;
                }
                c.cp = le[parseInt(V.val, 10)];
                break;
              case "<outline":
                if (!V.val) {
                  break;
                }
              case "<outline>":
              case "<outline/>":
                c.outline = 1;
                break;
              case "</outline>":
                break;
              case "<rFont":
                c.name = V.val;
                break;
              case "<sz":
                c.sz = V.val;
                break;
              case "<strike":
                if (!V.val) {
                  break;
                }
              case "<strike>":
              case "<strike/>":
                c.strike = 1;
                break;
              case "</strike>":
                break;
              case "<u":
                if (!V.val) {
                  break;
                }
                switch (V.val) {
                  case "double":
                    c.uval = "double";
                    break;
                  case "singleAccounting":
                    c.uval = "single-accounting";
                    break;
                  case "doubleAccounting":
                    c.uval = "double-accounting";
                }
              case "<u>":
              case "<u/>":
                c.u = 1;
                break;
              case "</u>":
                break;
              case "<b":
                if (V.val == "0") {
                  break;
                }
              case "<b>":
              case "<b/>":
                c.b = 1;
                break;
              case "</b>":
                break;
              case "<i":
                if (V.val == "0") {
                  break;
                }
              case "<i>":
              case "<i/>":
                c.i = 1;
                break;
              case "</i>":
                break;
              case "<color":
                if (V.rgb) {
                  c.color = V.rgb.slice(2, 8);
                }
                break;
              case "<color>":
              case "<color/>":
              case "</color>":
                break;
              case "<family":
                c.family = V.val;
                break;
              case "<family>":
              case "<family/>":
              case "</family>":
                break;
              case "<vertAlign":
                c.valign = V.val;
                break;
              case "<vertAlign>":
              case "<vertAlign/>":
              case "</vertAlign>":
              case "<scheme":
              case "<scheme>":
              case "<scheme/>":
              case "</scheme>":
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<ext":
                _ = true;
                break;
              case "</ext>":
                _ = false;
                break;
              default:
                if (V[0].charCodeAt(1) !== 47 && !_) {
                  throw new Error("Unrecognized rich format " + V[0]);
                }
            }
          }
        }
        return c;
      }(Te[1]);
    }
    return ee;
  }
  var p = /<(?:\w+:)?r>/g;
  var _ = /<\/(?:\w+:)?r>/;
  return function (Y) {
    return Y.replace(p, "").split(_).map(o).filter(function (ee) {
      return ee.v;
    });
  };
}();
var fv = function () {
  var c = /(\r\n|\n)/g;
  function p(_) {
    var V = [[], _.v, []];
    if (_.v) {
      if (_.s) {
        (function o(_, V, Y) {
          var ee = [];
          if (_.u) {
            ee.push("text-decoration: underline;");
          }
          if (_.uval) {
            ee.push("text-underline-style:" + _.uval + ";");
          }
          if (_.sz) {
            ee.push("font-size:" + _.sz + "pt;");
          }
          if (_.outline) {
            ee.push("text-effect: outline;");
          }
          if (_.shadow) {
            ee.push("text-shadow: auto;");
          }
          V.push("<span style=\"" + ee.join("") + "\">");
          if (_.b) {
            V.push("<b>");
            Y.push("</b>");
          }
          if (_.i) {
            V.push("<i>");
            Y.push("</i>");
          }
          if (_.strike) {
            V.push("<s>");
            Y.push("</s>");
          }
          var Te = _.valign || "";
          if (Te == "superscript" || Te == "super") {
            Te = "sup";
          } else if (Te == "subscript") {
            Te = "sub";
          }
          if (Te != "") {
            V.push("<" + Te + ">");
            Y.push("</" + Te + ">");
          }
          Y.push("</span>");
        })(_.s, V[0], V[2]);
      }
      return V[0].join("") + V[1].replace(c, "<br/>") + V[2].join("");
    } else {
      return "";
    }
  }
  return function (V) {
    return V.map(p).join("");
  };
}();
var im = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g;
var rm = /<(?:\w+:)?r\b[^>]*>/;
var Af = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function tg(r, c) {
  var o = !c || c.cellHTML;
  var p = {};
  if (r) {
    if (r.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
      p.t = Rr(Ns(r.slice(r.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), true);
      p.r = Ns(r);
      if (o) {
        p.h = _e(p.t);
      }
    } else if (r.match(rm)) {
      p.r = Ns(r);
      p.t = Rr(Ns((r.replace(Af, "").match(im) || []).join("").replace(Ys, "")), true);
      if (o) {
        p.h = fv(Kf(p.r));
      }
    }
    return p;
  } else {
    return {
      t: ""
    };
  }
}
var xf = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
var hv = /<(?:\w+:)?(?:si|sstItem)>/g;
var kh = /<\/(?:\w+:)?(?:si|sstItem)>/;
var C0 = /^\s|\s$|[\t\n\r]/;
var tf = function Xd(r, c) {
  var o = false;
  if (c == null) {
    o = true;
    c = Gi(15 + r.t.length * 4);
  }
  c.write_shift(1, 0);
  Al(r.t, c);
  if (o) {
    return c.slice(0, c.l);
  } else {
    return c;
  }
};
function Pd(r) {
  for (var c = [], o = r.split(""), p = 0; p < o.length; ++p) {
    c[p] = o[p].charCodeAt(0);
  }
  return c;
}
function nf(r, c) {
  var o = {};
  o.Major = r.read_shift(2);
  o.Minor = r.read_shift(2);
  if (c >= 4) {
    r.l += c - 4;
  }
  return o;
}
function pv(r) {
  for (var c = r.read_shift(4), o = r.l + c - 4, p = {}, _ = r.read_shift(4), V = []; _-- > 0;) {
    V.push({
      t: r.read_shift(4),
      v: r.read_shift(0, "lpp4")
    });
  }
  p.name = r.read_shift(0, "lpp4");
  p.comps = V;
  if (r.l != o) {
    throw new Error("Bad DataSpaceMapEntry: " + r.l + " != " + o);
  }
  return p;
}
function Nh(r, c) {
  var o = r.l + c;
  var p = {};
  p.Flags = r.read_shift(4) & 63;
  r.l += 4;
  p.AlgID = r.read_shift(4);
  var _ = false;
  switch (p.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      _ = p.Flags == 36;
      break;
    case 26625:
      _ = p.Flags == 4;
      break;
    case 0:
      _ = p.Flags == 16 || p.Flags == 4 || p.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + p.AlgID;
  }
  if (!_) {
    throw new Error("Encryption Flags/AlgID mismatch");
  }
  p.AlgIDHash = r.read_shift(4);
  p.KeySize = r.read_shift(4);
  p.ProviderType = r.read_shift(4);
  r.l += 8;
  p.CSPName = r.read_shift(o - r.l >> 1, "utf16le");
  r.l = o;
  return p;
}
function Uh(r, c) {
  var o = {};
  var p = r.l + c;
  r.l += 4;
  o.Salt = r.slice(r.l, r.l + 16);
  r.l += 16;
  o.Verifier = r.slice(r.l, r.l + 16);
  r.l += 16;
  r.read_shift(4);
  o.VerifierHash = r.slice(r.l, p);
  r.l = p;
  return o;
}
function yh(r) {
  if ((r.read_shift(4) & 63) != 36) {
    throw new Error("EncryptionInfo mismatch");
  }
  var o = r.read_shift(4);
  return {
    t: "Std",
    h: Nh(r, o),
    v: Uh(r, r.length - r.l)
  };
}
function om() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function w0(r) {
  var c = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  r.l += 4;
  var o = r.read_shift(r.length - r.l, "utf8");
  var p = {};
  o.replace(Ys, function (V) {
    var Y = sr(V);
    switch (wa(Y[0])) {
      case "<?xml":
      case "<encryption":
      case "</encryption>":
      case "</keyEncryptors>":
      case "</keyEncryptor>":
        break;
      case "<keyData":
        c.forEach(function (ee) {
          p[ee] = Y[ee];
        });
        break;
      case "<dataIntegrity":
        p.encryptedHmacKey = Y.encryptedHmacKey;
        p.encryptedHmacValue = Y.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        p.encs = [];
        break;
      case "<keyEncryptor":
        p.uri = Y.uri;
        break;
      case "<encryptedKey":
        p.encs.push(Y);
        break;
      default:
        throw Y[0];
    }
  });
  return p;
}
function lm(r) {
  var o;
  var V;
  var c = 0;
  var p = Pd(r);
  var _ = p.length + 1;
  (o = Qe(_))[0] = p.length;
  V = 1;
  for (; V != _; ++V) {
    o[V] = p[V - 1];
  }
  for (V = _ - 1; V >= 0; --V) {
    c = (((c & 16384) == 0 ? 0 : 1) | c << 1 & 32767) ^ o[V];
  }
  return c ^ 52811;
}
var rg = function () {
  var r = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0];
  var c = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163];
  var o = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628];
  function _(Y, ee) {
    return function (Y) {
      return (Y / 2 | Y * 128) & 255;
    }(Y ^ ee);
  }
  return function (Y) {
    for (var ee = Pd(Y), Te = function (Y) {
        for (var ee = c[Y.length - 1], Te = 104, Ne = Y.length - 1; Ne >= 0; --Ne) {
          for (var ze = Y[Ne], Ft = 0; Ft != 7; ++Ft) {
            if (ze & 64) {
              ee ^= o[Te];
            }
            ze *= 2;
            --Te;
          }
        }
        return ee;
      }(ee), Ne = ee.length, ze = Qe(16), Ft = 0; Ft != 16; ++Ft) {
      ze[Ft] = 0;
    }
    var zt;
    for ((Ne & 1) == 1 && (ze[Ne] = _(r[0], Te >> 8), ze[--Ne] = _(ee[ee.length - 1], Te & 255)); Ne > 0;) {
      ze[--Ne] = _(ee[Ne], Te >> 8);
      ze[--Ne] = _(ee[Ne], Te & 255);
    }
    Ne = 15;
    zt = 15 - ee.length;
    for (; zt > 0;) {
      ze[Ne] = _(r[zt], Te >> 8);
      --zt;
      ze[--Ne] = _(ee[Ne], Te & 255);
      --Ne;
      --zt;
    }
    return ze;
  };
}();
function um(r, c) {
  var o = c || {};
  var p = {};
  var _ = o.dense;
  if (_) {
    p["!data"] = [];
  }
  var V = r.match(/\\trowd[\s\S]*?\\row\b/g);
  if (!V) {
    throw new Error("RTF missing table");
  }
  var Y = {
    s: {
      c: 0,
      r: 0
    },
    e: {
      c: 0,
      r: V.length - 1
    }
  };
  var ee = [];
  V.forEach(function (Te, Ne) {
    if (_) {
      ee = p["!data"][Ne] = [];
    }
    for (var _t, ze = /\\[\w\-]+\b/g, Ft = 0, Ot = -1, zt = []; (_t = ze.exec(Te)) != null;) {
      var nn = Te.slice(Ft, ze.lastIndex - _t[0].length);
      if (nn.charCodeAt(0) == 32) {
        nn = nn.slice(1);
      }
      if (nn.length) {
        zt.push(nn);
      }
      switch (_t[0]) {
        case "\\cell":
          ++Ot;
          if (zt.length) {
            var Pt = {
              v: zt.join(""),
              t: "s"
            };
            if (Pt.v == "TRUE" || Pt.v == "FALSE") {
              Pt.v = Pt.v == "TRUE";
              Pt.t = "b";
            } else if (!isNaN(Wo(Pt.v))) {
              Pt.t = "n";
              if (o.cellText !== false) {
                Pt.w = Pt.v;
              }
              Pt.v = Wo(Pt.v);
            }
            if (_) {
              ee[Ot] = Pt;
            } else {
              p[Eo({
                r: Ne,
                c: Ot
              })] = Pt;
            }
          }
          zt = [];
          break;
        case "\\par":
          zt.push("\n");
      }
      Ft = ze.lastIndex;
    }
    if (Ot > Y.e.c) {
      Y.e.c = Ot;
    }
  });
  p["!ref"] = $o(Y);
  return p;
}
function Id(r) {
  for (var c = 0, o = 1; c != 3; ++c) {
    o = o * 256 + (r[c] > 255 ? 255 : r[c] < 0 ? 0 : r[c]);
  }
  return o.toString(16).toUpperCase().slice(1);
}
function Eh(r, c) {
  if (c === 0) {
    return r;
  }
  var o = function Zu(r) {
    var c = r[0] / 255;
    var o = r[1] / 255;
    var p = r[2] / 255;
    var _ = Math.max(c, o, p);
    var V = Math.min(c, o, p);
    var Y = _ - V;
    if (Y === 0) {
      return [0, 0, c];
    }
    var Te;
    var ee = 0;
    var Ne = _ + V;
    Te = Y / (Ne > 1 ? 2 - Ne : Ne);
    switch (_) {
      case c:
        ee = ((o - p) / Y + 6) % 6;
        break;
      case o:
        ee = (p - c) / Y + 2;
        break;
      case p:
        ee = (c - o) / Y + 4;
    }
    return [ee / 6, Te, Ne / 2];
  }(function _h(r) {
    var c = r.slice(r[0] === "#" ? 1 : 0).slice(0, 6);
    return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
  }(r));
  o[2] = c < 0 ? o[2] * (1 + c) : 1 - (1 - o[2]) * (1 - c);
  return Id(function Cf(r) {
    var Te;
    var o = r[1];
    var p = r[2];
    var _ = o * 2 * (p < 0.5 ? p : 1 - p);
    var V = p - _ / 2;
    var Y = [V, V, V];
    var ee = r[0] * 6;
    if (o !== 0) {
      switch (ee | 0) {
        case 0:
        case 6:
          Te = _ * ee;
          Y[0] += _;
          Y[1] += Te;
          break;
        case 1:
          Y[0] += Te = _ * (2 - ee);
          Y[1] += _;
          break;
        case 2:
          Te = _ * (ee - 2);
          Y[1] += _;
          Y[2] += Te;
          break;
        case 3:
          Y[1] += Te = _ * (4 - ee);
          Y[2] += _;
          break;
        case 4:
          Te = _ * (ee - 4);
          Y[2] += _;
          Y[0] += Te;
          break;
        case 5:
          Y[2] += Te = _ * (6 - ee);
          Y[0] += _;
      }
    }
    for (var Ne = 0; Ne != 3; ++Ne) {
      Y[Ne] = Math.round(Y[Ne] * 255);
    }
    return Y;
  }(o));
}
var Ec = 6;
function Rd(r) {
  return Math.floor((r + Math.round(128 / Ec) / 256) * Ec);
}
function cd(r) {
  return Math.floor((r - 5) / Ec * 100 + 0.5) / 100;
}
function wf(r) {
  return Math.round((r * Ec + 5) / Ec * 256) / 256;
}
function Sf(r) {
  return wf(cd(Rd(r)));
}
function sg(r) {
  var c = Math.abs(r - Sf(r));
  var o = Ec;
  if (c > 0.005) {
    for (Ec = 1; Ec < 15; ++Ec) {
      if (Math.abs(r - Sf(r)) <= c) {
        c = Math.abs(r - Sf(r));
        o = Ec;
      }
    }
  }
  Ec = o;
}
function Df(r) {
  if (r.width) {
    r.wpx = Rd(r.width);
    r.wch = cd(r.wpx);
    r.MDW = Ec;
  } else if (r.wpx) {
    r.wch = cd(r.wpx);
    r.width = wf(r.wch);
    r.MDW = Ec;
  } else if (typeof r.wch == "number") {
    r.width = wf(r.wch);
    r.wpx = Rd(r.width);
    r.MDW = Ec;
  }
  if (r.customWidth) {
    delete r.customWidth;
  }
}
function Jf(r) {
  return r * 96 / 96;
}
function zd(r) {
  return r * 96 / 96;
}
var Ev = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
var $f = ["numFmtId", "fillId", "fontId", "borderId", "xfId"];
var Pu = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
var jy = function () {
  var c = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
  var o = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
  var p = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
  var _ = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
  var V = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function (ee, Te, Ne) {
    var Ft;
    var ze = {};
    if (ee) {
      if (Ft = (ee = ee.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "")).match(c)) {
        (function fm(r, c, o) {
          c.NumberFmt = [];
          for (var p = qs(Kt), _ = 0; _ < p.length; ++_) {
            c.NumberFmt[p[_]] = Kt[p[_]];
          }
          var V = r[0].match(Ys);
          if (V) {
            for (_ = 0; _ < V.length; ++_) {
              var Y = sr(V[_]);
              switch (wa(Y[0])) {
                case "<numFmts":
                case "</numFmts>":
                case "<numFmts/>":
                case "<numFmts>":
                case "</numFmt>":
                  break;
                case "<numFmt":
                  var ee = Rr(Ns(Y.formatCode));
                  var Te = parseInt(Y.numFmtId, 10);
                  c.NumberFmt[Te] = ee;
                  if (Te > 0) {
                    if (Te > 392) {
                      for (Te = 392; Te > 60 && c.NumberFmt[Te] != null; --Te);
                      c.NumberFmt[Te] = ee;
                    }
                    la(ee, Te);
                  }
                  break;
                default:
                  if (o.WTF) {
                    throw new Error("unrecognized " + Y[0] + " in numFmts");
                  }
              }
            }
          }
        })(Ft, ze, Ne);
      }
      if (Ft = ee.match(_)) {
        (function og(r, c, o, p) {
          c.Fonts = [];
          var _ = {};
          var V = false;
          (r[0].match(Ys) || []).forEach(function (Y) {
            var ee = sr(Y);
            switch (wa(ee[0])) {
              case "<fonts":
              case "<fonts>":
              case "</fonts>":
              case "<font":
              case "<font>":
              case "<name/>":
              case "</name>":
              case "<sz/>":
              case "</sz>":
              case "<vertAlign/>":
              case "</vertAlign>":
              case "<family/>":
              case "</family>":
              case "<scheme/>":
              case "</scheme>":
              case "<color/>":
              case "</color>":
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "</font>":
              case "<font/>":
                c.Fonts.push(_);
                _ = {};
                break;
              case "<name":
                if (ee.val) {
                  _.name = Ns(ee.val);
                }
                break;
              case "<b":
                _.bold = ee.val ? tr(ee.val) : 1;
                break;
              case "<b/>":
                _.bold = 1;
                break;
              case "<i":
                _.italic = ee.val ? tr(ee.val) : 1;
                break;
              case "<i/>":
                _.italic = 1;
                break;
              case "<u":
                switch (ee.val) {
                  case "none":
                    _.underline = 0;
                    break;
                  case "single":
                    _.underline = 1;
                    break;
                  case "double":
                    _.underline = 2;
                    break;
                  case "singleAccounting":
                    _.underline = 33;
                    break;
                  case "doubleAccounting":
                    _.underline = 34;
                }
                break;
              case "<u/>":
                _.underline = 1;
                break;
              case "<strike":
                _.strike = ee.val ? tr(ee.val) : 1;
                break;
              case "<strike/>":
                _.strike = 1;
                break;
              case "<outline":
                _.outline = ee.val ? tr(ee.val) : 1;
                break;
              case "<outline/>":
                _.outline = 1;
                break;
              case "<shadow":
                _.shadow = ee.val ? tr(ee.val) : 1;
                break;
              case "<shadow/>":
                _.shadow = 1;
                break;
              case "<condense":
                _.condense = ee.val ? tr(ee.val) : 1;
                break;
              case "<condense/>":
                _.condense = 1;
                break;
              case "<extend":
                _.extend = ee.val ? tr(ee.val) : 1;
                break;
              case "<extend/>":
                _.extend = 1;
                break;
              case "<sz":
                if (ee.val) {
                  _.sz = +ee.val;
                }
                break;
              case "<vertAlign":
                if (ee.val) {
                  _.vertAlign = ee.val;
                }
                break;
              case "<family":
                if (ee.val) {
                  _.family = parseInt(ee.val, 10);
                }
                break;
              case "<scheme":
                if (ee.val) {
                  _.scheme = ee.val;
                }
                break;
              case "<charset":
                if (ee.val == "1") {
                  break;
                }
                ee.codepage = le[parseInt(ee.val, 10)];
                break;
              case "<color":
                _.color ||= {};
                if (ee.auto) {
                  _.color.auto = tr(ee.auto);
                }
                if (ee.rgb) {
                  _.color.rgb = ee.rgb.slice(-6);
                } else if (ee.indexed) {
                  _.color.index = parseInt(ee.indexed, 10);
                  var Te = jt[_.color.index];
                  if (_.color.index == 81) {
                    Te = jt[1];
                  }
                  Te ||= jt[1];
                  _.color.rgb = Te[0].toString(16) + Te[1].toString(16) + Te[2].toString(16);
                } else if (ee.theme) {
                  _.color.theme = parseInt(ee.theme, 10);
                  if (ee.tint) {
                    _.color.tint = parseFloat(ee.tint);
                  }
                  if (ee.theme && o.themeElements && o.themeElements.clrScheme) {
                    _.color.rgb = Eh(o.themeElements.clrScheme[_.color.theme].rgb, _.color.tint || 0);
                  }
                }
                break;
              case "<AlternateContent":
              case "<ext":
                V = true;
                break;
              case "</AlternateContent>":
              case "</ext>":
                V = false;
                break;
              default:
                if (p && p.WTF && !V) {
                  throw new Error("unrecognized " + ee[0] + " in fonts");
                }
            }
          });
        })(Ft, ze, Te, Ne);
      }
      if (Ft = ee.match(p)) {
        (function dy(r, c, o, p) {
          c.Fills = [];
          var _ = {};
          var V = false;
          (r[0].match(Ys) || []).forEach(function (Y) {
            var ee = sr(Y);
            switch (wa(ee[0])) {
              case "<fills":
              case "<fills>":
              case "</fills>":
              case "</fill>":
              case "<gradientFill>":
              case "<patternFill/>":
              case "</patternFill>":
              case "<bgColor/>":
              case "</bgColor>":
              case "<fgColor/>":
              case "</fgColor>":
              case "<stop":
              case "<stop/>":
              case "</stop>":
              case "<color":
              case "<color/>":
              case "</color>":
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<fill>":
              case "<fill":
              case "<fill/>":
                c.Fills.push(_ = {});
                break;
              case "<gradientFill":
              case "</gradientFill>":
                c.Fills.push(_);
                _ = {};
                break;
              case "<patternFill":
              case "<patternFill>":
                if (ee.patternType) {
                  _.patternType = ee.patternType;
                }
                break;
              case "<bgColor":
                _.bgColor ||= {};
                if (ee.indexed) {
                  _.bgColor.indexed = parseInt(ee.indexed, 10);
                }
                if (ee.theme) {
                  _.bgColor.theme = parseInt(ee.theme, 10);
                }
                if (ee.tint) {
                  _.bgColor.tint = parseFloat(ee.tint);
                }
                if (ee.rgb) {
                  _.bgColor.rgb = ee.rgb.slice(-6);
                }
                break;
              case "<fgColor":
                _.fgColor ||= {};
                if (ee.theme) {
                  _.fgColor.theme = parseInt(ee.theme, 10);
                }
                if (ee.tint) {
                  _.fgColor.tint = parseFloat(ee.tint);
                }
                if (ee.rgb != null) {
                  _.fgColor.rgb = ee.rgb.slice(-6);
                }
                break;
              case "<ext":
                V = true;
                break;
              case "</ext>":
                V = false;
                break;
              default:
                if (p && p.WTF && !V) {
                  throw new Error("unrecognized " + ee[0] + " in fills");
                }
            }
          });
        })(Ft, ze, 0, Ne);
      }
      if (Ft = ee.match(V)) {
        (function dm(r, c, o, p) {
          c.Borders = [];
          var _ = {};
          var V = false;
          (r[0].match(Ys) || []).forEach(function (Y) {
            var ee = sr(Y);
            switch (wa(ee[0])) {
              case "<borders":
              case "<borders>":
              case "</borders>":
              case "</border>":
              case "<left/>":
              case "<left":
              case "<left>":
              case "</left>":
              case "<right/>":
              case "<right":
              case "<right>":
              case "</right>":
              case "<top/>":
              case "<top":
              case "<top>":
              case "</top>":
              case "<bottom/>":
              case "<bottom":
              case "<bottom>":
              case "</bottom>":
              case "<diagonal":
              case "<diagonal>":
              case "<diagonal/>":
              case "</diagonal>":
              case "<horizontal":
              case "<horizontal>":
              case "<horizontal/>":
              case "</horizontal>":
              case "<vertical":
              case "<vertical>":
              case "<vertical/>":
              case "</vertical>":
              case "<start":
              case "<start>":
              case "<start/>":
              case "</start>":
              case "<end":
              case "<end>":
              case "<end/>":
              case "</end>":
              case "<color":
              case "<color>":
              case "<color/>":
              case "</color>":
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<border":
              case "<border>":
              case "<border/>":
                _ = {};
                if (ee.diagonalUp) {
                  _.diagonalUp = tr(ee.diagonalUp);
                }
                if (ee.diagonalDown) {
                  _.diagonalDown = tr(ee.diagonalDown);
                }
                c.Borders.push(_);
                break;
              case "<ext":
                V = true;
                break;
              case "</ext>":
                V = false;
                break;
              default:
                if (p && p.WTF && !V) {
                  throw new Error("unrecognized " + ee[0] + " in borders");
                }
            }
          });
        })(Ft, ze, 0, Ne);
      }
      if (Ft = ee.match(o)) {
        (function ag(r, c, o) {
          c.CellXf = [];
          var p;
          var _ = false;
          (r[0].match(Ys) || []).forEach(function (V) {
            var Y = sr(V);
            var ee = 0;
            switch (wa(Y[0])) {
              case "<cellXfs":
              case "<cellXfs>":
              case "<cellXfs/>":
              case "</cellXfs>":
              case "</xf>":
              case "</alignment>":
              case "<protection":
              case "<protection>":
              case "</protection>":
              case "<protection/>":
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
                break;
              case "<xf":
              case "<xf/>":
              case "<xf>":
                delete (p = Y)[0];
                ee = 0;
                for (; ee < $f.length; ++ee) {
                  p[$f[ee]] &&= parseInt(p[$f[ee]], 10);
                }
                for (ee = 0; ee < Pu.length; ++ee) {
                  p[Pu[ee]] &&= tr(p[Pu[ee]]);
                }
                if (c.NumberFmt && p.numFmtId > 392) {
                  for (ee = 392; ee > 60; --ee) {
                    if (c.NumberFmt[p.numFmtId] == c.NumberFmt[ee]) {
                      p.numFmtId = ee;
                      break;
                    }
                  }
                }
                c.CellXf.push(p);
                break;
              case "<alignment":
              case "<alignment/>":
              case "<alignment>":
                var Te = {};
                if (Y.vertical) {
                  Te.vertical = Y.vertical;
                }
                if (Y.horizontal) {
                  Te.horizontal = Y.horizontal;
                }
                if (Y.textRotation != null) {
                  Te.textRotation = Y.textRotation;
                }
                if (Y.indent) {
                  Te.indent = Y.indent;
                }
                if (Y.wrapText) {
                  Te.wrapText = tr(Y.wrapText);
                }
                p.alignment = Te;
                break;
              case "<AlternateContent":
              case "<AlternateContent>":
              case "<ext":
                _ = true;
                break;
              case "</AlternateContent>":
              case "</ext>":
                _ = false;
                break;
              default:
                if (o && o.WTF && !_) {
                  throw new Error("unrecognized " + Y[0] + " in cellXfs");
                }
            }
          });
        })(Ft, ze, Ne);
      }
      return ze;
    } else {
      return ze;
    }
  };
}();
function hm(r, c, o) {
  o ||= Gi(6 + c.length * 4);
  o.write_shift(2, r);
  Al(c, o);
  var p = o.length > o.l ? o.slice(0, o.l) : o;
  if (o.l == null) {
    o.l = o.length;
  }
  return p;
}
var gm;
var pm = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
var Qy = kl;
function fy(r, c) {
  c ||= Gi(84);
  gm ||= ha(pm);
  var o = gm[r.patternType];
  if (o == null) {
    o = 40;
  }
  c.write_shift(4, o);
  var p = 0;
  if (o != 40) {
    yu({
      auto: 1
    }, c);
    yu({
      auto: 1
    }, c);
    yu({
      auto: 1
    }, c);
    yu({
      auto: 1
    }, c);
    for (; p < 12; ++p) {
      c.write_shift(4, 0);
    }
  } else {
    for (; p < 4; ++p) {
      c.write_shift(4, 0);
    }
    for (; p < 12; ++p) {
      c.write_shift(4, 0);
    }
  }
  if (c.length > c.l) {
    return c.slice(0, c.l);
  } else {
    return c;
  }
}
function hy(r, c, o) {
  o ||= Gi(16);
  o.write_shift(2, c || 0);
  o.write_shift(2, r.numFmtId || 0);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  return o;
}
function mm(r, c) {
  c ||= Gi(10);
  c.write_shift(1, 0);
  c.write_shift(1, 0);
  c.write_shift(4, 0);
  c.write_shift(4, 0);
  return c;
}
var _d = kl;
function my(r, c) {
  var o = tl();
  gr(o, 278);
  (function wv(r, c) {
    if (c) {
      var o = 0;
      [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (p) {
        for (var _ = p[0]; _ <= p[1]; ++_) {
          if (c[_] != null) {
            ++o;
          }
        }
      });
      if (o != 0) {
        gr(r, 615, rc(o));
        [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (p) {
          for (var _ = p[0]; _ <= p[1]; ++_) {
            if (c[_] != null) {
              gr(r, 44, hm(_, c[_]));
            }
          }
        });
        gr(r, 616);
      }
    }
  })(o, r.SSF);
  (function dg(r) {
    gr(r, 611, rc(1));
    gr(r, 43, function ug(r, c) {
      c ||= Gi(153);
      c.write_shift(2, r.sz * 20);
      (function pl(r, c) {
        c ||= Gi(2);
        c.write_shift(1, (r.italic ? 2 : 0) | (r.strike ? 8 : 0) | (r.outline ? 16 : 0) | (r.shadow ? 32 : 0) | (r.condense ? 64 : 0) | (r.extend ? 128 : 0));
        c.write_shift(1, 0);
      })(r, c);
      c.write_shift(2, r.bold ? 700 : 400);
      var o = 0;
      if (r.vertAlign == "superscript") {
        o = 1;
      } else if (r.vertAlign == "subscript") {
        o = 2;
      }
      c.write_shift(2, o);
      c.write_shift(1, r.underline || 0);
      c.write_shift(1, r.family || 0);
      c.write_shift(1, r.charset || 0);
      c.write_shift(1, 0);
      yu(r.color, c);
      var p = 0;
      if (r.scheme == "major") {
        p = 1;
      }
      if (r.scheme == "minor") {
        p = 2;
      }
      c.write_shift(1, p);
      Al(r.name, c);
      if (c.length > c.l) {
        return c.slice(0, c.l);
      } else {
        return c;
      }
    }({
      sz: 12,
      color: {
        theme: 1
      },
      name: "Calibri",
      family: 2,
      scheme: "minor"
    }));
    gr(r, 612);
  })(o);
  (function Sv(r) {
    gr(r, 603, rc(2));
    gr(r, 45, fy({
      patternType: "none"
    }));
    gr(r, 45, fy({
      patternType: "gray125"
    }));
    gr(r, 604);
  })(o);
  (function py(r) {
    gr(r, 613, rc(1));
    gr(r, 46, function Av(r, c) {
      c ||= Gi(51);
      c.write_shift(1, 0);
      mm(0, c);
      mm(0, c);
      mm(0, c);
      mm(0, c);
      mm(0, c);
      if (c.length > c.l) {
        return c.slice(0, c.l);
      } else {
        return c;
      }
    }());
    gr(r, 614);
  })(o);
  (function T0(r) {
    gr(r, 626, rc(1));
    gr(r, 47, hy({
      numFmtId: 0,
      fontId: 0,
      fillId: 0,
      borderId: 0
    }, 65535));
    gr(r, 627);
  })(o);
  (function gy(r, c) {
    gr(r, 617, rc(c.length));
    c.forEach(function (o) {
      gr(r, 47, hy(o, 0));
    });
    gr(r, 618);
  })(o, c.cellXfs);
  (function Ya(r) {
    gr(r, 619, rc(1));
    gr(r, 48, function xv(r, c) {
      c ||= Gi(52);
      c.write_shift(4, r.xfId);
      c.write_shift(2, 1);
      c.write_shift(1, +r.builtinId);
      c.write_shift(1, 0);
      yc(r.name || "", c);
      if (c.length > c.l) {
        return c.slice(0, c.l);
      } else {
        return c;
      }
    }({
      xfId: 0,
      builtinId: 0,
      name: "Normal"
    }));
    gr(r, 620);
  })(o);
  (function fg(r) {
    gr(r, 505, rc(0));
    gr(r, 506);
  })(o);
  (function Mf(r) {
    gr(r, 508, function D0(r, c, o) {
      var p = Gi(2052);
      p.write_shift(4, r);
      yc(c, p);
      yc(o, p);
      if (p.length > p.l) {
        return p.slice(0, p.l);
      } else {
        return p;
      }
    }(0, "TableStyleMedium9", "PivotStyleMedium4"));
    gr(r, 509);
  })(o);
  gr(o, 279);
  return o.end();
}
var vm = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function Dv(r, c, o) {
  c.themeElements.clrScheme = [];
  var p = {};
  (r[0].match(Ys) || []).forEach(function (_) {
    var V = sr(_);
    switch (V[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        p.rgb = V.val;
        break;
      case "<a:sysClr":
        p.rgb = V.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        if (V[0].charAt(1) === "/") {
          c.themeElements.clrScheme[vm.indexOf(V[0])] = p;
          p = {};
        } else {
          p.name = V[0].slice(3, V[0].length - 1);
        }
        break;
      default:
        if (o && o.WTF) {
          throw new Error("Unrecognized " + V[0] + " in clrScheme");
        }
    }
  });
}
function hg() {}
function Ah() {}
var sf = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;
var vy = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;
var ym = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
var Gh = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function Gu(r, c) {
  if (!r || r.length === 0) {
    r = pg();
  }
  var o;
  var p = {};
  if (!(o = r.match(Gh))) {
    throw new Error("themeElements not found in theme");
  }
  (function Ap(r, c, o) {
    var p;
    c.themeElements = {};
    [["clrScheme", sf, Dv], ["fontScheme", vy, hg], ["fmtScheme", ym, Ah]].forEach(function (_) {
      if (!(p = r.match(_[1]))) {
        throw new Error(_[0] + " not found in themeElements");
      }
      _[2](p, c, o);
    });
  })(o[0], p, c);
  p.raw = r;
  return p;
}
function pg(r, c) {
  if (c && c.themeXLSX) {
    return c.themeXLSX;
  }
  if (r && typeof r.raw == "string") {
    return r.raw;
  }
  var o = [nr];
  o[o.length] = "<a:theme xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\" name=\"Office Theme\">";
  o[o.length] = "<a:themeElements>";
  o[o.length] = "<a:clrScheme name=\"Office\">";
  o[o.length] = "<a:dk1><a:sysClr val=\"windowText\" lastClr=\"000000\"/></a:dk1>";
  o[o.length] = "<a:lt1><a:sysClr val=\"window\" lastClr=\"FFFFFF\"/></a:lt1>";
  o[o.length] = "<a:dk2><a:srgbClr val=\"1F497D\"/></a:dk2>";
  o[o.length] = "<a:lt2><a:srgbClr val=\"EEECE1\"/></a:lt2>";
  o[o.length] = "<a:accent1><a:srgbClr val=\"4F81BD\"/></a:accent1>";
  o[o.length] = "<a:accent2><a:srgbClr val=\"C0504D\"/></a:accent2>";
  o[o.length] = "<a:accent3><a:srgbClr val=\"9BBB59\"/></a:accent3>";
  o[o.length] = "<a:accent4><a:srgbClr val=\"8064A2\"/></a:accent4>";
  o[o.length] = "<a:accent5><a:srgbClr val=\"4BACC6\"/></a:accent5>";
  o[o.length] = "<a:accent6><a:srgbClr val=\"F79646\"/></a:accent6>";
  o[o.length] = "<a:hlink><a:srgbClr val=\"0000FF\"/></a:hlink>";
  o[o.length] = "<a:folHlink><a:srgbClr val=\"800080\"/></a:folHlink>";
  o[o.length] = "</a:clrScheme>";
  o[o.length] = "<a:fontScheme name=\"Office\">";
  o[o.length] = "<a:majorFont>";
  o[o.length] = "<a:latin typeface=\"Cambria\"/>";
  o[o.length] = "<a:ea typeface=\"\"/>";
  o[o.length] = "<a:cs typeface=\"\"/>";
  o[o.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>";
  o[o.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>";
  o[o.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>";
  o[o.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>";
  o[o.length] = "<a:font script=\"Arab\" typeface=\"Times New Roman\"/>";
  o[o.length] = "<a:font script=\"Hebr\" typeface=\"Times New Roman\"/>";
  o[o.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>";
  o[o.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>";
  o[o.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>";
  o[o.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>";
  o[o.length] = "<a:font script=\"Khmr\" typeface=\"MoolBoran\"/>";
  o[o.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>";
  o[o.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>";
  o[o.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>";
  o[o.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>";
  o[o.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>";
  o[o.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>";
  o[o.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>";
  o[o.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>";
  o[o.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>";
  o[o.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>";
  o[o.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>";
  o[o.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>";
  o[o.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>";
  o[o.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>";
  o[o.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>";
  o[o.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>";
  o[o.length] = "<a:font script=\"Viet\" typeface=\"Times New Roman\"/>";
  o[o.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>";
  o[o.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>";
  o[o.length] = "</a:majorFont>";
  o[o.length] = "<a:minorFont>";
  o[o.length] = "<a:latin typeface=\"Calibri\"/>";
  o[o.length] = "<a:ea typeface=\"\"/>";
  o[o.length] = "<a:cs typeface=\"\"/>";
  o[o.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>";
  o[o.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>";
  o[o.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>";
  o[o.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>";
  o[o.length] = "<a:font script=\"Arab\" typeface=\"Arial\"/>";
  o[o.length] = "<a:font script=\"Hebr\" typeface=\"Arial\"/>";
  o[o.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>";
  o[o.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>";
  o[o.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>";
  o[o.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>";
  o[o.length] = "<a:font script=\"Khmr\" typeface=\"DaunPenh\"/>";
  o[o.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>";
  o[o.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>";
  o[o.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>";
  o[o.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>";
  o[o.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>";
  o[o.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>";
  o[o.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>";
  o[o.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>";
  o[o.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>";
  o[o.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>";
  o[o.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>";
  o[o.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>";
  o[o.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>";
  o[o.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>";
  o[o.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>";
  o[o.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>";
  o[o.length] = "<a:font script=\"Viet\" typeface=\"Arial\"/>";
  o[o.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>";
  o[o.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>";
  o[o.length] = "</a:minorFont>";
  o[o.length] = "</a:fontScheme>";
  o[o.length] = "<a:fmtScheme name=\"Office\">";
  o[o.length] = "<a:fillStyleLst>";
  o[o.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>";
  o[o.length] = "<a:gradFill rotWithShape=\"1\">";
  o[o.length] = "<a:gsLst>";
  o[o.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
  o[o.length] = "<a:gs pos=\"35000\"><a:schemeClr val=\"phClr\"><a:tint val=\"37000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
  o[o.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"15000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  o[o.length] = "</a:gsLst>";
  o[o.length] = "<a:lin ang=\"16200000\" scaled=\"1\"/>";
  o[o.length] = "</a:gradFill>";
  o[o.length] = "<a:gradFill rotWithShape=\"1\">";
  o[o.length] = "<a:gsLst>";
  o[o.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"100000\"/><a:shade val=\"100000\"/><a:satMod val=\"130000\"/></a:schemeClr></a:gs>";
  o[o.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:shade val=\"100000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  o[o.length] = "</a:gsLst>";
  o[o.length] = "<a:lin ang=\"16200000\" scaled=\"0\"/>";
  o[o.length] = "</a:gradFill>";
  o[o.length] = "</a:fillStyleLst>";
  o[o.length] = "<a:lnStyleLst>";
  o[o.length] = "<a:ln w=\"9525\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"><a:shade val=\"95000\"/><a:satMod val=\"105000\"/></a:schemeClr></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
  o[o.length] = "<a:ln w=\"25400\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
  o[o.length] = "<a:ln w=\"38100\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
  o[o.length] = "</a:lnStyleLst>";
  o[o.length] = "<a:effectStyleLst>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = "<a:outerShdw blurRad=\"40000\" dist=\"20000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"38000\"/></a:srgbClr></a:outerShdw>";
  o[o.length] = "</a:effectLst>";
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>";
  o[o.length] = "</a:effectLst>";
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>";
  o[o.length] = "</a:effectLst>";
  o[o.length] = "<a:scene3d><a:camera prst=\"orthographicFront\"><a:rot lat=\"0\" lon=\"0\" rev=\"0\"/></a:camera><a:lightRig rig=\"threePt\" dir=\"t\"><a:rot lat=\"0\" lon=\"0\" rev=\"1200000\"/></a:lightRig></a:scene3d>";
  o[o.length] = "<a:sp3d><a:bevelT w=\"63500\" h=\"25400\"/></a:sp3d>";
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "</a:effectStyleLst>";
  o[o.length] = "<a:bgFillStyleLst>";
  o[o.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>";
  o[o.length] = "<a:gradFill rotWithShape=\"1\">";
  o[o.length] = "<a:gsLst>";
  o[o.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"40000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  o[o.length] = "<a:gs pos=\"40000\"><a:schemeClr val=\"phClr\"><a:tint val=\"45000\"/><a:shade val=\"99000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  o[o.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"20000\"/><a:satMod val=\"255000\"/></a:schemeClr></a:gs>";
  o[o.length] = "</a:gsLst>";
  o[o.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"-80000\" r=\"50000\" b=\"180000\"/></a:path>";
  o[o.length] = "</a:gradFill>";
  o[o.length] = "<a:gradFill rotWithShape=\"1\">";
  o[o.length] = "<a:gsLst>";
  o[o.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"80000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
  o[o.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"30000\"/><a:satMod val=\"200000\"/></a:schemeClr></a:gs>";
  o[o.length] = "</a:gsLst>";
  o[o.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"50000\" r=\"50000\" b=\"50000\"/></a:path>";
  o[o.length] = "</a:gradFill>";
  o[o.length] = "</a:bgFillStyleLst>";
  o[o.length] = "</a:fmtScheme>";
  o[o.length] = "</a:themeElements>";
  o[o.length] = "<a:objectDefaults>";
  o[o.length] = "<a:spDef>";
  o[o.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"3\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"lt1\"/></a:fontRef></a:style>";
  o[o.length] = "</a:spDef>";
  o[o.length] = "<a:lnDef>";
  o[o.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"0\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"tx1\"/></a:fontRef></a:style>";
  o[o.length] = "</a:lnDef>";
  o[o.length] = "</a:objectDefaults>";
  o[o.length] = "<a:extraClrSchemeLst/>";
  o[o.length] = "</a:theme>";
  return o.join("");
}
function Of(r) {
  var c = r.read_shift(2);
  var o = r.read_shift(2) - 4;
  var p = [c];
  switch (c) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      p[1] = function gg(r) {
        var c = {};
        c.xclrType = r.read_shift(2);
        c.nTintShade = r.read_shift(2);
        switch (c.xclrType) {
          case 0:
          case 4:
            r.l += 4;
            break;
          case 1:
            c.xclrValue = function Tv(r, c) {
              return kl(r, c);
            }(r, 4);
            break;
          case 2:
            c.xclrValue = Zd(r);
            break;
          case 3:
            c.xclrValue = function _m(r) {
              return r.read_shift(4);
            }(r);
        }
        r.l += 8;
        return c;
      }(r);
      break;
    case 6:
      p[1] = function Mv(r, c) {
        return kl(r, c);
      }(r, o);
      break;
    case 14:
    case 15:
      p[1] = r.read_shift(o === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + c + " " + o);
  }
  return p;
}
function Em(r, c) {
  c.forEach(function (o) {});
}
var Pf = /<(?:\w+:)?shape(?:[^\w][^>]*)?>([\s\S]*?)<\/(?:\w+:)?shape>/g;
function xh(r, c, o) {
  var p = [21600, 21600];
  var _ = ["m0,0l0", p[1], p[0], p[1], p[0], "0xe"].join(",");
  var V = [wt("xml", null, {
    "xmlns:v": "urn:schemas-microsoft-com:vml",
    "xmlns:o": xi_o,
    "xmlns:x": xi_x,
    "xmlns:mv": "http://macVmlSchemaUri"
  }).replace(/\/>/, ">"), wt("o:shapelayout", wt("o:idmap", null, {
    "v:ext": "edit",
    data: r
  }), {
    "v:ext": "edit"
  })];
  var Y = r * 65536;
  var ee = c || [];
  if (ee.length > 0) {
    V.push(wt("v:shapetype", [wt("v:stroke", null, {
      joinstyle: "miter"
    }), wt("v:path", null, {
      gradientshapeok: "t",
      "o:connecttype": "rect"
    })].join(""), {
      id: "_x0000_t202",
      coordsize: p.join(","),
      "o:spt": 202,
      path: _
    }));
  }
  ee.forEach(function (Te) {
    ++Y;
    V.push(function If(r, c, o) {
      var p = Qo(r[0]);
      var _ = {
        color2: "#BEFF82",
        type: "gradient"
      };
      if (_.type == "gradient") {
        _.angle = "-180";
      }
      var V = _.type == "gradient" ? wt("o:fill", null, {
        type: "gradientUnscaled",
        "v:ext": "view"
      }) : null;
      var Y = wt("v:fill", V, _);
      return ["<v:shape" + Hr({
        id: "_x0000_s" + c,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (r[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">", Y, wt("v:shadow", null, {
        on: "t",
        obscured: "t"
      }), wt("v:path", null, {
        "o:connecttype": "none"
      }), "<v:textbox><div style=\"text-align:left\"></div></v:textbox>", "<x:ClientData ObjectType=\"Note\">", "<x:MoveWithCells/>", "<x:SizeWithCells/>", Aa("x:Anchor", [p.c + 1, 0, p.r + 1, 0, p.c + 3, 20, p.r + 5, 20].join(",")), Aa("x:AutoFill", "False"), Aa("x:Row", String(p.r)), Aa("x:Column", String(p.c)), r[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"].join("");
    }(Te, Y));
  });
  V.push("</xml>");
  return V.join("");
}
function xm(r, c, o, p) {
  var V;
  var _ = r["!data"] != null;
  c.forEach(function (Y) {
    var ee = Qo(Y.ref);
    if (ee.r >= 0 && ee.c >= 0) {
      if (_) {
        r["!data"][ee.r] ||= [];
        V = r["!data"][ee.r][ee.c];
      } else {
        V = r[Y.ref];
      }
      if (!V) {
        V = {
          t: "z"
        };
        if (_) {
          r["!data"][ee.r][ee.c] = V;
        } else {
          r[Y.ref] = V;
        }
        var Te = Ps(r["!ref"] || "BDWGO1000001:A1");
        if (Te.s.r > ee.r) {
          Te.s.r = ee.r;
        }
        if (Te.e.r < ee.r) {
          Te.e.r = ee.r;
        }
        if (Te.s.c > ee.c) {
          Te.s.c = ee.c;
        }
        if (Te.e.c < ee.c) {
          Te.e.c = ee.c;
        }
        var Ne = $o(Te);
        r["!ref"] = Ne;
      }
      V.c ||= [];
      var ze = {
        a: Y.author,
        t: Y.t,
        r: Y.r,
        T: o
      };
      if (Y.h) {
        ze.h = Y.h;
      }
      for (var Ft = V.c.length - 1; Ft >= 0; --Ft) {
        if (!o && V.c[Ft].T) {
          return;
        }
        if (o && !V.c[Ft].T) {
          V.c.splice(Ft, 1);
        }
      }
      if (o && p) {
        for (Ft = 0; Ft < p.length; ++Ft) {
          if (ze.a == p[Ft].id) {
            ze.a = p[Ft].name || ze.a;
            break;
          }
        }
      }
      V.c.push(ze);
    }
  });
}
function mg(r) {
  var c = [nr, wt("comments", null, {
    xmlns: lr[0]
  })];
  var o = [];
  c.push("<authors>");
  r.forEach(function (p) {
    p[1].forEach(function (_) {
      var V = Mr(_.a);
      if (o.indexOf(V) == -1) {
        o.push(V);
        c.push("<author>" + V + "</author>");
      }
      if (_.T && _.ID && o.indexOf("tc=" + _.ID) == -1) {
        o.push("tc=" + _.ID);
        c.push("<author>tc=" + _.ID + "</author>");
      }
    });
  });
  if (o.length == 0) {
    o.push("SheetJ5");
    c.push("<author>SheetJ5</author>");
  }
  c.push("</authors>");
  c.push("<commentList>");
  r.forEach(function (p) {
    var _ = 0;
    var V = [];
    var Y = 0;
    if (p[1][0] && p[1][0].T && p[1][0].ID) {
      _ = o.indexOf("tc=" + p[1][0].ID);
    }
    p[1].forEach(function (Ne) {
      if (Ne.a) {
        _ = o.indexOf(Mr(Ne.a));
      }
      if (Ne.T) {
        ++Y;
      }
      V.push(Ne.t == null ? "" : Mr(Ne.t));
    });
    if (Y === 0) {
      p[1].forEach(function (Ne) {
        c.push("<comment ref=\"" + p[0] + "\" authorId=\"" + o.indexOf(Mr(Ne.a)) + "\"><text>");
        c.push(Aa("t", Ne.t == null ? "" : Mr(Ne.t)));
        c.push("</text></comment>");
      });
    } else {
      if (p[1][0] && p[1][0].T && p[1][0].ID) {
        _ = o.indexOf("tc=" + p[1][0].ID);
      }
      c.push("<comment ref=\"" + p[0] + "\" authorId=\"" + _ + "\"><text>");
      for (var ee = "Comment:\n    " + V[0] + "\n", Te = 1; Te < V.length; ++Te) {
        ee += "Reply:\n    " + V[Te] + "\n";
      }
      c.push(Aa("t", Mr(ee)));
      c.push("</text></comment>");
    }
  });
  c.push("</commentList>");
  if (c.length > 2) {
    c[c.length] = "</comments>";
    c[1] = c[1].replace("/>", ">");
  }
  return c.join("");
}
function Ch(r, c, o) {
  var p = [nr, wt("ThreadedComments", null, {
    xmlns: pi_TCMNT
  }).replace(/[\/]>/, ">")];
  r.forEach(function (_) {
    var V = "";
    (_[1] || []).forEach(function (Y, ee) {
      if (Y.T) {
        if (Y.a && c.indexOf(Y.a) == -1) {
          c.push(Y.a);
        }
        var Te = {
          ref: _[0],
          id: "{54EE7951-7262-4200-6969-" + ("000000000000" + o.tcid++).slice(-12) + "}"
        };
        if (ee == 0) {
          V = Te.id;
        } else {
          Te.parentId = V;
        }
        Y.ID = Te.id;
        if (Y.a) {
          Te.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + c.indexOf(Y.a)).slice(-12) + "}";
        }
        p.push(wt("threadedComment", Aa("text", Y.t || ""), Te));
      } else {
        delete Y.ID;
      }
    });
  });
  p.push("</ThreadedComments>");
  return p.join("");
}
function Cp(r) {
  var c = [nr, wt("personList", null, {
    xmlns: pi_TCMNT,
    "xmlns:x": lr[0]
  }).replace(/[\/]>/, ">")];
  r.forEach(function (o, p) {
    c.push(wt("person", null, {
      displayName: o,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + p).slice(-12) + "}",
      userId: o,
      providerId: "None"
    }));
  });
  c.push("</personList>");
  return c.join("");
}
var eh = Gl;
function vg(r) {
  return Al(r.slice(0, 54));
}
function wh(r) {
  var c = tl();
  var o = [];
  gr(c, 628);
  gr(c, 630);
  r.forEach(function (p) {
    p[1].forEach(function (_) {
      if (o.indexOf(_.a) <= -1) {
        o.push(_.a.slice(0, 54));
        gr(c, 632, vg(_.a));
        if (_.T && _.ID && o.indexOf("tc=" + _.ID) == -1) {
          o.push("tc=" + _.ID);
          gr(c, 632, vg("tc=" + _.ID));
        }
      }
    });
  });
  gr(c, 631);
  gr(c, 633);
  r.forEach(function (p) {
    p[1].forEach(function (_) {
      var V = -1;
      if (_.ID) {
        V = o.indexOf("tc=" + _.ID);
      }
      if (V == -1 && p[1][0].T && p[1][0].ID) {
        V = o.indexOf("tc=" + p[1][0].ID);
      }
      if (V == -1) {
        V = o.indexOf(_.a);
      }
      _.iauthor = V;
      var Y = {
        s: Qo(p[0]),
        e: Qo(p[0])
      };
      gr(c, 635, function Rf(r, c) {
        if (c == null) {
          c = Gi(36);
        }
        c.write_shift(4, r[1].iauthor);
        Ta(r[0], c);
        c.write_shift(4, 0);
        c.write_shift(4, 0);
        c.write_shift(4, 0);
        c.write_shift(4, 0);
        return c;
      }([Y, _]));
      if (_.t && _.t.length > 0) {
        gr(c, 637, function id(r, c) {
          var o = false;
          if (c == null) {
            o = true;
            c = Gi(23 + r.t.length * 4);
          }
          c.write_shift(1, 1);
          Al(r.t, c);
          c.write_shift(4, 1);
          (function Xc(r, c) {
            c ||= Gi(4);
            c.write_shift(2, r.ich || 0);
            c.write_shift(2, r.ifnt || 0);
          })({
            ich: 0,
            ifnt: 0
          }, c);
          if (o) {
            return c.slice(0, c.l);
          } else {
            return c;
          }
        }(_));
      }
      gr(c, 636);
      delete _.iauthor;
    });
  });
  gr(c, 634);
  gr(c, 629);
  return c.end();
}
var Cm = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
var Qh = function () {
  var r = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
  var c = {
    r: 0,
    c: 0
  };
  function o(p, _, V, Y) {
    var ee = false;
    var Te = false;
    if (V.length == 0) {
      Te = true;
    } else if (V.charAt(0) == "[") {
      Te = true;
      V = V.slice(1, -1);
    }
    if (Y.length == 0) {
      ee = true;
    } else if (Y.charAt(0) == "[") {
      ee = true;
      Y = Y.slice(1, -1);
    }
    var Ne = V.length > 0 ? parseInt(V, 10) | 0 : 0;
    var ze = Y.length > 0 ? parseInt(Y, 10) | 0 : 0;
    if (ee) {
      ze += c.c;
    } else {
      --ze;
    }
    if (Te) {
      Ne += c.r;
    } else {
      --Ne;
    }
    return _ + (ee ? "" : "$") + jo(ze) + (Te ? "" : "$") + Da(Ne);
  }
  return function (_, V) {
    c = V;
    return _.replace(r, o);
  };
}();
var Dm = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
  Dm = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch {}
var Eg = function () {
  return function (c, o) {
    return c.replace(Dm, function (p, _, V, Y, ee, Te) {
      var Ne = mu(Y) - (V ? 0 : o.c);
      var ze = Nc(Te) - (ee ? 0 : o.r);
      return _ + "R" + (ee == "$" ? ze + 1 : ze == 0 ? "" : "[" + ze + "]") + "C" + (V == "$" ? Ne + 1 : Ne == 0 ? "" : "[" + Ne + "]");
    });
  };
}();
function Sp(r, c) {
  return r.replace(Dm, function (o, p, _, V, Y, ee) {
    return p + (_ == "$" ? _ + V : jo(mu(V) + c.c)) + (Y == "$" ? Y + ee : Da(Nc(ee) + c.r));
  });
}
function H(r, c, o) {
  var _ = ml(c).s;
  var V = Qo(o);
  return Sp(r, {
    r: V.r - _.r,
    c: V.c - _.c
  });
}
function g(r) {
  return r.replace(/_xlfn\./g, "");
}
function ie(r) {
  r.l += 1;
}
function $e(r, c) {
  var o = r.read_shift(c == 1 ? 1 : 2);
  return [o & 16383, o >> 14 & 1, o >> 15 & 1];
}
function Ht(r, c, o) {
  var p = 2;
  if (o) {
    if (o.biff >= 2 && o.biff <= 5) {
      return _n(r);
    }
    if (o.biff == 12) {
      p = 4;
    }
  }
  var _ = r.read_shift(p);
  var V = r.read_shift(p);
  var Y = $e(r, 2);
  var ee = $e(r, 2);
  return {
    s: {
      r: _,
      c: Y[0],
      cRel: Y[1],
      rRel: Y[2]
    },
    e: {
      r: V,
      c: ee[0],
      cRel: ee[1],
      rRel: ee[2]
    }
  };
}
function _n(r) {
  var c = $e(r, 2);
  var o = $e(r, 2);
  var p = r.read_shift(1);
  var _ = r.read_shift(1);
  return {
    s: {
      r: c[0],
      c: p,
      cRel: c[1],
      rRel: c[2]
    },
    e: {
      r: o[0],
      c: _,
      cRel: o[1],
      rRel: o[2]
    }
  };
}
function ui(r, c, o) {
  if (o && o.biff >= 2 && o.biff <= 5) {
    return function Vi(r) {
      var c = $e(r, 2);
      var o = r.read_shift(1);
      return {
        r: c[0],
        c: o,
        cRel: c[1],
        rRel: c[2]
      };
    }(r);
  }
  var p = r.read_shift(o && o.biff == 12 ? 4 : 2);
  var _ = $e(r, 2);
  return {
    r: p,
    c: _[0],
    cRel: _[1],
    rRel: _[2]
  };
}
function Wr(r) {
  var c = r.read_shift(2);
  var o = r.read_shift(2);
  return {
    r: c,
    c: o & 255,
    fQuoted: !!(o & 16384),
    cRel: o >> 15,
    rRel: o >> 15
  };
}
function hc(r) {
  var c = r[r.l + 1] & 1;
  r.l += 4;
  return [c, 1];
}
function Jh(r) {
  return [r.read_shift(1), r.read_shift(1)];
}
function Nv(r, c) {
  var o = [r.read_shift(1)];
  if (c == 12) {
    switch (o[0]) {
      case 2:
        o[0] = 4;
        break;
      case 4:
        o[0] = 16;
        break;
      case 0:
        o[0] = 1;
        break;
      case 1:
        o[0] = 2;
    }
  }
  switch (o[0]) {
    case 4:
      o[1] = ca(r, 1) ? "TRUE" : "FALSE";
      if (c != 12) {
        r.l += 7;
      }
      break;
    case 37:
    case 16:
      o[1] = On[r[r.l]];
      r.l += c == 12 ? 4 : 8;
      break;
    case 0:
      r.l += 8;
      break;
    case 1:
      o[1] = Dl(r);
      break;
    case 2:
      o[1] = Vf(r, 0, {
        biff: c > 0 && c < 8 ? 2 : c
      });
      break;
    default:
      throw new Error("Bad SerAr: " + o[0]);
  }
  return o;
}
function Ff(r, c, o) {
  for (var p = r.read_shift(o.biff == 12 ? 4 : 2), _ = [], V = 0; V != p; ++V) {
    _.push((o.biff == 12 ? ts : dh)(r, 8));
  }
  return _;
}
function du(r, c, o) {
  var p = 0;
  var _ = 0;
  if (o.biff == 12) {
    p = r.read_shift(4);
    _ = r.read_shift(4);
  } else {
    _ = 1 + r.read_shift(1);
    p = 1 + r.read_shift(2);
  }
  if (o.biff >= 2 && o.biff < 8) {
    --p;
    if (--_ == 0) {
      _ = 256;
    }
  }
  for (var V = 0, Y = []; V != p && (Y[V] = []); ++V) {
    for (var ee = 0; ee != _; ++ee) {
      Y[V][ee] = Nv(r, o.biff);
    }
  }
  return Y;
}
function ku(r, c, o) {
  r.l += 2;
  return [Wr(r)];
}
function Op(r) {
  r.l += 6;
  return [];
}
function by(r) {
  r.l += 2;
  return [wl(r), r.read_shift(2) & 1];
}
var xg = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
var n_ = {
  1: {
    n: "PtgExp",
    f: function il(r, c, o) {
      r.l++;
      if (o && o.biff == 12) {
        return [r.read_shift(4, "i"), 0];
      } else {
        return [r.read_shift(2), r.read_shift(o && o.biff == 2 ? 1 : 2)];
      }
    }
  },
  2: {
    n: "PtgTbl",
    f: kl
  },
  3: {
    n: "PtgAdd",
    f: ie
  },
  4: {
    n: "PtgSub",
    f: ie
  },
  5: {
    n: "PtgMul",
    f: ie
  },
  6: {
    n: "PtgDiv",
    f: ie
  },
  7: {
    n: "PtgPower",
    f: ie
  },
  8: {
    n: "PtgConcat",
    f: ie
  },
  9: {
    n: "PtgLt",
    f: ie
  },
  10: {
    n: "PtgLe",
    f: ie
  },
  11: {
    n: "PtgEq",
    f: ie
  },
  12: {
    n: "PtgGe",
    f: ie
  },
  13: {
    n: "PtgGt",
    f: ie
  },
  14: {
    n: "PtgNe",
    f: ie
  },
  15: {
    n: "PtgIsect",
    f: ie
  },
  16: {
    n: "PtgUnion",
    f: ie
  },
  17: {
    n: "PtgRange",
    f: ie
  },
  18: {
    n: "PtgUplus",
    f: ie
  },
  19: {
    n: "PtgUminus",
    f: ie
  },
  20: {
    n: "PtgPercent",
    f: ie
  },
  21: {
    n: "PtgParen",
    f: ie
  },
  22: {
    n: "PtgMissArg",
    f: ie
  },
  23: {
    n: "PtgStr",
    f: function Pc(r, c, o) {
      r.l++;
      return yf(r, 0, o);
    }
  },
  26: {
    n: "PtgSheet",
    f: function e_(r, c, o) {
      r.l += 5;
      r.l += 2;
      r.l += o.biff == 2 ? 1 : 4;
      return ["PTGSHEET"];
    }
  },
  27: {
    n: "PtgEndSheet",
    f: function t_(r, c, o) {
      r.l += o.biff == 2 ? 4 : 5;
      return ["PTGENDSHEET"];
    }
  },
  28: {
    n: "PtgErr",
    f: function Oc(r) {
      r.l++;
      return On[r.read_shift(1)];
    }
  },
  29: {
    n: "PtgBool",
    f: function zu(r) {
      r.l++;
      return r.read_shift(1) !== 0;
    }
  },
  30: {
    n: "PtgInt",
    f: function ud(r) {
      r.l++;
      return r.read_shift(2);
    }
  },
  31: {
    n: "PtgNum",
    f: function df(r) {
      r.l++;
      return Dl(r);
    }
  },
  32: {
    n: "PtgArray",
    f: function Iu(r, c, o) {
      var p = (r[r.l++] & 96) >> 5;
      r.l += o.biff == 2 ? 6 : o.biff == 12 ? 14 : 7;
      return [p];
    }
  },
  33: {
    n: "PtgFunc",
    f: function bg(r, c, o) {
      var p = (r[r.l] & 96) >> 5;
      r.l += 1;
      var _ = r.read_shift(o && o.biff <= 3 ? 1 : 2);
      return [Rm[_], c_[_], p];
    }
  },
  34: {
    n: "PtgFuncVar",
    f: function Oo(r, c, o) {
      var p = r[r.l++];
      var _ = r.read_shift(1);
      var V = o && o.biff <= 3 ? [p == 88 ? -1 : 0, r.read_shift(1)] : function mo(r) {
        return [r[r.l + 1] >> 7, r.read_shift(2) & 32767];
      }(r);
      return [_, (V[0] === 0 ? c_ : ff)[V[1]]];
    }
  },
  35: {
    n: "PtgName",
    f: function Sh(r, c, o) {
      var p = r.read_shift(1) >>> 5 & 3;
      var V = r.read_shift(!o || o.biff >= 8 ? 4 : 2);
      switch (o.biff) {
        case 2:
          r.l += 5;
          break;
        case 3:
        case 4:
          r.l += 8;
          break;
        case 5:
          r.l += 12;
      }
      return [p, 0, V];
    }
  },
  36: {
    n: "PtgRef",
    f: function Dp(r, c, o) {
      var p = (r[r.l] & 96) >> 5;
      r.l += 1;
      return [p, ui(r, 0, o)];
    }
  },
  37: {
    n: "PtgArea",
    f: function ga(r, c, o) {
      return [(r[r.l++] & 96) >> 5, Ht(r, 0, o)];
    }
  },
  38: {
    n: "PtgMemArea",
    f: function Tp(r, c, o) {
      var p = r.read_shift(1) >>> 5 & 3;
      r.l += o && o.biff == 2 ? 3 : 4;
      return [p, r.read_shift(o && o.biff == 2 ? 1 : 2)];
    }
  },
  39: {
    n: "PtgMemErr",
    f: kl
  },
  40: {
    n: "PtgMemNoMem",
    f: kl
  },
  41: {
    n: "PtgMemFunc",
    f: function Ag(r, c, o) {
      return [r.read_shift(1) >>> 5 & 3, r.read_shift(o && o.biff == 2 ? 1 : 2)];
    }
  },
  42: {
    n: "PtgRefErr",
    f: function Mp(r, c, o) {
      var p = r.read_shift(1) >>> 5 & 3;
      r.l += 4;
      if (o.biff < 8) {
        r.l--;
      }
      if (o.biff == 12) {
        r.l += 2;
      }
      return [p];
    }
  },
  43: {
    n: "PtgAreaErr",
    f: function Ma(r, c, o) {
      var p = (r[r.l++] & 96) >> 5;
      r.l += o && o.biff > 8 ? 12 : o.biff < 8 ? 6 : 8;
      return [p];
    }
  },
  44: {
    n: "PtgRefN",
    f: function $h(r, c, o) {
      var p = (r[r.l] & 96) >> 5;
      r.l += 1;
      var _ = function Cs(r, c, o) {
        var p = o && o.biff ? o.biff : 8;
        if (p >= 2 && p <= 5) {
          return function Ea(r) {
            var c = r.read_shift(2);
            var o = r.read_shift(1);
            var p = (c & 32768) >> 15;
            var _ = (c & 16384) >> 14;
            c &= 16383;
            if (p == 1 && c >= 8192) {
              c -= 16384;
            }
            if (_ == 1 && o >= 128) {
              o -= 256;
            }
            return {
              r: c,
              c: o,
              cRel: _,
              rRel: p
            };
          }(r);
        }
        var _ = r.read_shift(p >= 12 ? 4 : 2);
        var V = r.read_shift(2);
        var Y = (V & 16384) >> 14;
        var ee = (V & 32768) >> 15;
        V &= 16383;
        if (ee == 1) {
          for (; _ > 524287;) {
            _ -= 1048576;
          }
        }
        if (Y == 1) {
          for (; V > 8191;) {
            V -= 16384;
          }
        }
        return {
          r: _,
          c: V,
          cRel: Y,
          rRel: ee
        };
      }(r, 0, o);
      return [p, _];
    }
  },
  45: {
    n: "PtgAreaN",
    f: function fc(r, c, o) {
      var p = (r[r.l++] & 96) >> 5;
      var _ = function Un(r, c, o) {
        if (o.biff < 8) {
          return _n(r);
        }
        var p = r.read_shift(o.biff == 12 ? 4 : 2);
        var _ = r.read_shift(o.biff == 12 ? 4 : 2);
        var V = $e(r, 2);
        var Y = $e(r, 2);
        return {
          s: {
            r: p,
            c: V[0],
            cRel: V[1],
            rRel: V[2]
          },
          e: {
            r: _,
            c: Y[0],
            cRel: Y[1],
            rRel: Y[2]
          }
        };
      }(r, 0, o);
      return [p, _];
    }
  },
  46: {
    n: "PtgMemAreaN",
    f: function wg(r) {
      return [r.read_shift(1) >>> 5 & 3, r.read_shift(2)];
    }
  },
  47: {
    n: "PtgMemNoMemN",
    f: function Dh(r) {
      return [r.read_shift(1) >>> 5 & 3, r.read_shift(2)];
    }
  },
  57: {
    n: "PtgNameX",
    f: function Fu(r, c, o) {
      if (o.biff == 5) {
        return function Tm(r) {
          var c = r.read_shift(1) >>> 5 & 3;
          var o = r.read_shift(2, "i");
          r.l += 8;
          var p = r.read_shift(2);
          r.l += 12;
          return [c, o, p];
        }(r);
      } else {
        return [r.read_shift(1) >>> 5 & 3, r.read_shift(2), r.read_shift(4)];
      }
    }
  },
  58: {
    n: "PtgRef3d",
    f: function Xh(r, c, o) {
      var p = (r[r.l] & 96) >> 5;
      r.l += 1;
      var _ = r.read_shift(2);
      if (o && o.biff == 5) {
        r.l += 12;
      }
      return [p, _, ui(r, 0, o)];
    }
  },
  59: {
    n: "PtgArea3d",
    f: function aa(r, c, o) {
      var p = (r[r.l++] & 96) >> 5;
      var _ = r.read_shift(2, "i");
      if (o && o.biff === 5) {
        r.l += 12;
      }
      return [p, _, Ht(r, 0, o)];
    }
  },
  60: {
    n: "PtgRefErr3d",
    f: function I0(r, c, o) {
      var p = (r[r.l++] & 96) >> 5;
      var _ = r.read_shift(2);
      var V = 4;
      if (o) {
        switch (o.biff) {
          case 5:
            V = 15;
            break;
          case 12:
            V = 6;
        }
      }
      r.l += V;
      return [p, _];
    }
  },
  61: {
    n: "PtgAreaErr3d",
    f: function Tl(r, c, o) {
      var p = (r[r.l++] & 96) >> 5;
      var _ = r.read_shift(2);
      var V = 8;
      if (o) {
        switch (o.biff) {
          case 5:
            r.l += 12;
            V = 6;
            break;
          case 12:
            V = 12;
        }
      }
      r.l += V;
      return [p, _];
    }
  },
  255: {}
};
var C_ = {
  64: 32,
  96: 32,
  65: 33,
  97: 33,
  66: 34,
  98: 34,
  67: 35,
  99: 35,
  68: 36,
  100: 36,
  69: 37,
  101: 37,
  70: 38,
  102: 38,
  71: 39,
  103: 39,
  72: 40,
  104: 40,
  73: 41,
  105: 41,
  74: 42,
  106: 42,
  75: 43,
  107: 43,
  76: 44,
  108: 44,
  77: 45,
  109: 45,
  78: 46,
  110: 46,
  79: 47,
  111: 47,
  88: 34,
  120: 34,
  89: 57,
  121: 57,
  90: 58,
  122: 58,
  91: 59,
  123: 59,
  92: 60,
  124: 60,
  93: 61,
  125: 61
};
var i_ = {
  1: {
    n: "PtgElfLel",
    f: by
  },
  2: {
    n: "PtgElfRw",
    f: ku
  },
  3: {
    n: "PtgElfCol",
    f: ku
  },
  6: {
    n: "PtgElfRwV",
    f: ku
  },
  7: {
    n: "PtgElfColV",
    f: ku
  },
  10: {
    n: "PtgElfRadical",
    f: ku
  },
  11: {
    n: "PtgElfRadicalS",
    f: Op
  },
  13: {
    n: "PtgElfColS",
    f: Op
  },
  15: {
    n: "PtgElfColSV",
    f: Op
  },
  16: {
    n: "PtgElfRadicalLel",
    f: by
  },
  25: {
    n: "PtgList",
    f: function xy(r) {
      r.l += 2;
      var c = r.read_shift(2);
      var o = r.read_shift(2);
      var p = r.read_shift(4);
      var _ = r.read_shift(2);
      var V = r.read_shift(2);
      return {
        ixti: c,
        coltype: o & 3,
        rt: xg[o >> 2 & 31],
        idx: p,
        c: _,
        C: V
      };
    }
  },
  29: {
    n: "PtgSxName",
    f: function Cg(r) {
      r.l += 2;
      return [r.read_shift(4)];
    }
  },
  255: {}
};
var Cy = {
  0: {
    n: "PtgAttrNoop",
    f: function L0(r) {
      r.l += 4;
      return [0, 0];
    }
  },
  1: {
    n: "PtgAttrSemi",
    f: function bd(r, c, o) {
      var p = r[r.l + 1] & 255 ? 1 : 0;
      r.l += o && o.biff == 2 ? 3 : 4;
      return [p];
    }
  },
  2: {
    n: "PtgAttrIf",
    f: function cf(r, c, o) {
      var p = r[r.l + 1] & 255 ? 1 : 0;
      r.l += 2;
      return [p, r.read_shift(o && o.biff == 2 ? 1 : 2)];
    }
  },
  4: {
    n: "PtgAttrChoose",
    f: function qc(r, c, o) {
      r.l += 2;
      for (var p = r.read_shift(o && o.biff == 2 ? 1 : 2), _ = [], V = 0; V <= p; ++V) {
        _.push(r.read_shift(o && o.biff == 2 ? 1 : 2));
      }
      return _;
    }
  },
  8: {
    n: "PtgAttrGoto",
    f: function th(r, c, o) {
      var p = r[r.l + 1] & 255 ? 1 : 0;
      r.l += 2;
      return [p, r.read_shift(o && o.biff == 2 ? 1 : 2)];
    }
  },
  16: {
    n: "PtgAttrSum",
    f: function ia(r, c, o) {
      r.l += o && o.biff == 2 ? 3 : 4;
    }
  },
  32: {
    n: "PtgAttrBaxcel",
    f: hc
  },
  33: {
    n: "PtgAttrBaxcel",
    f: hc
  },
  64: {
    n: "PtgAttrSpace",
    f: function uf(r) {
      r.read_shift(2);
      return Jh(r);
    }
  },
  65: {
    n: "PtgAttrSpaceSemi",
    f: function Fd(r) {
      r.read_shift(2);
      return Jh(r);
    }
  },
  128: {
    n: "PtgAttrIfError",
    f: function Ru(r) {
      var c = r[r.l + 1] & 255 ? 1 : 0;
      r.l += 2;
      return [c, r.read_shift(2)];
    }
  },
  255: {}
};
function Sg(r, c, o, p) {
  if (p.biff < 8) {
    return kl(r, c);
  }
  for (var _ = r.l + c, V = [], Y = 0; Y !== o.length; ++Y) {
    switch (o[Y][0]) {
      case "PtgArray":
        o[Y][1] = du(r, 0, p);
        V.push(o[Y][1]);
        break;
      case "PtgMemArea":
        o[Y][2] = Ff(r, 0, p);
        V.push(o[Y][2]);
        break;
      case "PtgExp":
        if (p && p.biff == 12) {
          o[Y][1][1] = r.read_shift(4);
          V.push(o[Y][1]);
        }
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + o[Y][0];
    }
  }
  if ((c = _ - r.l) != 0) {
    V.push(kl(r, c));
  }
  return V;
}
function Bv(r, c, o) {
  for (var _, V, p = r.l + c, Y = []; p != r.l;) {
    c = p - r.l;
    _ = n_[V = r[r.l]] || n_[C_[V]];
    if (V === 24 || V === 25) {
      _ = (V === 24 ? i_ : Cy)[r[r.l + 1]];
    }
    if (_ && _.f) {
      Y.push([_.n, _.f(r, c, o)]);
    } else {
      kl(r, c);
    }
  }
  return Y;
}
function w_(r) {
  for (var c = [], o = 0; o < r.length; ++o) {
    for (var p = r[o], _ = [], V = 0; V < p.length; ++V) {
      var Y = p[V];
      _.push(Y ? Y[0] === 2 ? "\"" + Y[1].replace(/"/g, "\"\"") + "\"" : Y[1] : "");
    }
    c.push(_.join(","));
  }
  return c.join(";");
}
var wy = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function N0(r, c) {
  var o = r.lastIndexOf("!");
  var p = c.lastIndexOf("!");
  if (o == -1 && p == -1) {
    return r + ":" + c;
  } else if (o > 0 && p > 0 && r.slice(0, o).toLowerCase() == c.slice(0, p).toLowerCase()) {
    return r + ":" + c.slice(p + 1);
  } else {
    console.error("Cannot hydrate range", r, c);
    return r + ":" + c;
  }
}
function r_(r, c, o) {
  if (!r) {
    return "SH33TJSERR0";
  }
  if (o.biff > 8 && (!r.XTI || !r.XTI[c])) {
    return r.SheetNames[c];
  }
  if (!r.XTI) {
    return "SH33TJSERR6";
  }
  var p = r.XTI[c];
  if (o.biff < 8) {
    if (c > 10000) {
      c -= 65536;
    }
    if (c < 0) {
      c = -c;
    }
    if (c == 0) {
      return "";
    } else {
      return r.XTI[c - 1];
    }
  }
  if (!p) {
    return "SH33TJSERR1";
  }
  var _ = "";
  if (o.biff > 8) {
    switch (r[p[0]][0]) {
      case 357:
        _ = p[1] == -1 ? "#REF" : r.SheetNames[p[1]];
        if (p[1] == p[2]) {
          return _;
        } else {
          return _ + ":" + r.SheetNames[p[2]];
        }
      case 358:
        if (o.SID != null) {
          return r.SheetNames[o.SID];
        } else {
          return "SH33TJSSAME" + r[p[0]][0];
        }
      default:
        return "SH33TJSSRC" + r[p[0]][0];
    }
  }
  switch (r[p[0]][0][0]) {
    case 1025:
      _ = p[1] == -1 ? "#REF" : r.SheetNames[p[1]] || "SH33TJSERR3";
      if (p[1] == p[2]) {
        return _;
      } else {
        return _ + ":" + r.SheetNames[p[2]];
      }
    case 14849:
      return r[p[0]].slice(1).map(function (V) {
        return V.Name;
      }).join(";;");
    default:
      if (r[p[0]][0][3]) {
        _ = p[1] == -1 ? "#REF" : r[p[0]][0][3][p[1]] || "SH33TJSERR4";
        if (p[1] == p[2]) {
          return _;
        } else {
          return _ + ":" + r[p[0]][0][3][p[2]];
        }
      } else {
        return "SH33TJSERR2";
      }
  }
}
function Om(r, c, o) {
  var p = r_(r, c, o);
  if (p == "#REF") {
    return p;
  } else {
    return mc(p, o);
  }
}
function eu(r, c, o, p, _) {
  var Te;
  var Ne;
  var ze;
  var Ot;
  var V = _ && _.biff || 8;
  var Y = {
    s: {
      c: 0,
      r: 0
    },
    e: {
      c: 0,
      r: 0
    }
  };
  var ee = [];
  var Ft = 0;
  var _t = 0;
  var zt = "";
  if (!r[0] || !r[0][0]) {
    return "";
  }
  for (var nn = -1, Pt = "", rn = 0, yn = r[0].length; rn < yn; ++rn) {
    var un = r[0][rn];
    switch (un[0]) {
      case "PtgUminus":
        ee.push("-" + ee.pop());
        break;
      case "PtgUplus":
        ee.push("+" + ee.pop());
        break;
      case "PtgPercent":
        ee.push(ee.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        Te = ee.pop();
        Ne = ee.pop();
        if (nn >= 0) {
          switch (r[0][nn][1][0]) {
            case 0:
              Pt = Qs(" ", r[0][nn][1][1]);
              break;
            case 1:
              Pt = Qs("\r", r[0][nn][1][1]);
              break;
            default:
              Pt = "";
              if (_.WTF) {
                throw new Error("Unexpected PtgAttrSpaceType " + r[0][nn][1][0]);
              }
          }
          Ne += Pt;
          nn = -1;
        }
        ee.push(Ne + wy[un[0]] + Te);
        break;
      case "PtgIsect":
        Te = ee.pop();
        Ne = ee.pop();
        ee.push(Ne + " " + Te);
        break;
      case "PtgUnion":
        Te = ee.pop();
        Ne = ee.pop();
        ee.push(Ne + "," + Te);
        break;
      case "PtgRange":
        Te = ee.pop();
        Ne = ee.pop();
        ee.push(N0(Ne, Te));
        break;
      case "PtgAttrChoose":
      case "PtgAttrGoto":
      case "PtgAttrIf":
      case "PtgAttrIfError":
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
      case "PtgMemArea":
      case "PtgTbl":
      case "PtgMemErr":
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
      case "PtgMemFunc":
      case "PtgMemNoMem":
        break;
      case "PtgRef":
        ze = ro(un[1][1], Y, _);
        ee.push(Zl(ze, V));
        break;
      case "PtgRefN":
        ze = o ? ro(un[1][1], o, _) : un[1][1];
        ee.push(Zl(ze, V));
        break;
      case "PtgRef3d":
        Ft = un[1][1];
        ze = ro(un[1][2], Y, _);
        zt = Om(p, Ft, _);
        ee.push(zt + "!" + Zl(ze, V));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var Ni = un[1][0];
        var or = un[1][1];
        Ni ||= 0;
        var Ln = (Ni &= 127) == 0 ? [] : ee.slice(-Ni);
        ee.length -= Ni;
        if (or === "User") {
          or = Ln.shift();
        }
        ee.push(or + "(" + Ln.join(",") + ")");
        break;
      case "PtgBool":
        ee.push(un[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
      case "PtgErr":
        ee.push(un[1]);
        break;
      case "PtgNum":
        ee.push(String(un[1]));
        break;
      case "PtgStr":
        ee.push("\"" + un[1].replace(/"/g, "\"\"") + "\"");
        break;
      case "PtgAreaN":
        Ot = Vu(un[1][1], o ? {
          s: o
        } : Y, _);
        ee.push($l(Ot, _));
        break;
      case "PtgArea":
        Ot = Vu(un[1][1], Y, _);
        ee.push($l(Ot, _));
        break;
      case "PtgArea3d":
        Ot = un[1][2];
        zt = Om(p, Ft = un[1][1], _);
        ee.push(zt + "!" + $l(Ot, _));
        break;
      case "PtgAttrSum":
        ee.push("SUM(" + ee.pop() + ")");
        break;
      case "PtgName":
        var Jn = (p.names || [])[(_t = un[1][2]) - 1] || (p[0] || [])[_t];
        var yi = Jn ? Jn.Name : "SH33TJSNAME" + String(_t);
        if (yi && yi.slice(0, 6) == "_xlfn." && !_.xlfn) {
          yi = yi.slice(6);
        }
        ee.push(yi);
        break;
      case "PtgNameX":
        var Fi;
        var mi = un[1][1];
        _t = un[1][2];
        if (_.biff > 5) {
          var ji = "";
          if (((p[mi] || [])[0] || [])[0] != 14849) {
            if (((p[mi] || [])[0] || [])[0] == 1025) {
              if (p[mi][_t] && p[mi][_t].itab > 0) {
                ji = p.SheetNames[p[mi][_t].itab - 1] + "!";
              }
            } else {
              ji = p.SheetNames[_t - 1] + "!";
            }
          }
          if (p[mi] && p[mi][_t]) {
            ji += p[mi][_t].Name;
          } else if (p[0] && p[0][_t]) {
            ji += p[0][_t].Name;
          } else {
            var Dr = (r_(p, mi, _) || "").split(";;");
            if (Dr[_t - 1]) {
              ji = Dr[_t - 1];
            } else {
              ji += "SH33TJSERRX";
            }
          }
          ee.push(ji);
          break;
        }
        if (mi < 0) {
          mi = -mi;
        }
        if (p[mi]) {
          Fi = p[mi][_t];
        }
        Fi ||= {
          Name: "SH33TJSERRY"
        };
        ee.push(Fi.Name);
        break;
      case "PtgParen":
        var yo = "(";
        var _s = ")";
        if (nn >= 0) {
          Pt = "";
          switch (r[0][nn][1][0]) {
            case 2:
              yo = Qs(" ", r[0][nn][1][1]) + yo;
              break;
            case 3:
              yo = Qs("\r", r[0][nn][1][1]) + yo;
              break;
            case 4:
              _s = Qs(" ", r[0][nn][1][1]) + _s;
              break;
            case 5:
              _s = Qs("\r", r[0][nn][1][1]) + _s;
              break;
            default:
              if (_.WTF) {
                throw new Error("Unexpected PtgAttrSpaceType " + r[0][nn][1][0]);
              }
          }
          nn = -1;
        }
        ee.push(yo + ee.pop() + _s);
        break;
      case "PtgRefErr":
      case "PtgRefErr3d":
      case "PtgAreaErr":
      case "PtgAreaErr3d":
        ee.push("#REF!");
        break;
      case "PtgExp":
        var ra = {
          c: o.c,
          r: o.r
        };
        if (p.sharedf[Eo(ze = {
          c: un[1][1],
          r: un[1][0]
        })]) {
          var ds = p.sharedf[Eo(ze)];
          ee.push(eu(ds, 0, ra, p, _));
        } else {
          var Ua = false;
          for (Te = 0; Te != p.arrayf.length; ++Te) {
            if (ze.c >= (Ne = p.arrayf[Te])[0].s.c && ze.c <= Ne[0].e.c && ze.r >= Ne[0].s.r && ze.r <= Ne[0].e.r) {
              ee.push(eu(Ne[1], 0, ra, p, _));
              Ua = true;
              break;
            }
          }
          if (!Ua) {
            ee.push(un[1]);
          }
        }
        break;
      case "PtgArray":
        ee.push("{" + w_(un[1]) + "}");
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        nn = rn;
        break;
      case "PtgMissArg":
        ee.push("");
        break;
      case "PtgList":
        ee.push("Table" + un[1].idx + "[#" + un[1].rt + "]");
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      default:
        throw new Error("Unrecognized Formula Token: " + String(un));
    }
    if (_.biff != 3 && nn >= 0 && ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"].indexOf(r[0][rn][0]) == -1) {
      var os = true;
      switch ((un = r[0][nn])[1][0]) {
        case 4:
          os = false;
        case 0:
          Pt = Qs(" ", un[1][1]);
          break;
        case 5:
          os = false;
        case 1:
          Pt = Qs("\r", un[1][1]);
          break;
        default:
          Pt = "";
          if (_.WTF) {
            throw new Error("Unexpected PtgAttrSpaceType " + un[1][0]);
          }
      }
      ee.push((os ? Pt : "") + ee.pop() + (os ? "" : Pt));
      nn = -1;
    }
  }
  if (ee.length > 1 && _.WTF) {
    throw new Error("bad formula stack");
  }
  return ee[0] == "TRUE" || ee[0] != "FALSE" && ee[0];
}
function nh(r, c, o) {
  var V;
  var p = r.l + c;
  var _ = o.biff == 2 ? 1 : 2;
  var Y = r.read_shift(_);
  if (Y == 65535) {
    return [[], kl(r, c - 2)];
  }
  var ee = Bv(r, Y, o);
  if (c !== Y + _) {
    V = Sg(r, c - Y - _, ee, o);
  }
  r.l = p;
  return [ee, V];
}
function S_(r, c, o) {
  var _;
  var p = r.l + c;
  var V = r.read_shift(2);
  var Y = Bv(r, V, o);
  if (V == 65535) {
    return [[], kl(r, c - 2)];
  } else {
    if (c !== V + 2) {
      _ = Sg(r, p - V - 2, Y, o);
    }
    return [Y, _];
  }
}
function Dg(r, c, o) {
  var p = r.l + c;
  var _ = ad(r, 6, o);
  var V = function Sy(r) {
    var c;
    if (lo(r, r.l + 6) !== 65535) {
      return [Dl(r), "n"];
    }
    switch (r[r.l]) {
      case 0:
        r.l += 8;
        return ["String", "s"];
      case 1:
        c = r[r.l + 2] === 1;
        r.l += 8;
        return [c, "b"];
      case 2:
        c = r[r.l + 2];
        r.l += 8;
        return [c, "e"];
      case 3:
        r.l += 8;
        return ["", "s"];
    }
    return [];
  }(r);
  var Y = r.read_shift(1);
  if (o.biff != 2) {
    r.read_shift(1);
    if (o.biff >= 5) {
      r.read_shift(4);
    }
  }
  var ee = function o1(r, c, o) {
    var V;
    var p = r.l + c;
    var _ = o.biff == 2 ? 1 : 2;
    var Y = r.read_shift(_);
    if (Y == 65535) {
      return [[], kl(r, c - 2)];
    }
    var ee = Bv(r, Y, o);
    if (c !== Y + _) {
      V = Sg(r, c - Y - _, ee, o);
    }
    r.l = p;
    return [ee, V];
  }(r, p - r.l, o);
  return {
    cell: _,
    val: V[0],
    formula: ee,
    shared: Y >> 3 & 1,
    tt: V[1]
  };
}
function Pm(r, c, o) {
  var p = r.read_shift(4);
  var _ = Bv(r, p, o);
  var V = r.read_shift(4);
  return [_, V > 0 ? Sg(r, V, _, o) : null];
}
var Ad = Pm;
var Pp = Pm;
var Vv = Pm;
var Hv = Pm;
function Wv(r) {
  if ((r | 0) == r && r < Math.pow(2, 16) && r >= 0) {
    var c = Gi(11);
    c.write_shift(4, 3);
    c.write_shift(1, 30);
    c.write_shift(2, r);
    c.write_shift(4, 0);
    return c;
  }
  var o = Gi(17);
  o.write_shift(4, 11);
  o.write_shift(1, 31);
  o.write_shift(8, r);
  o.write_shift(4, 0);
  return o;
}
var Zv = function Ty(r, c) {
  if (typeof r == "number") {
    return Wv(r);
  }
  if (typeof r == "boolean") {
    return function o_(r) {
      var c = Gi(10);
      c.write_shift(4, 2);
      c.write_shift(1, 29);
      c.write_shift(1, r ? 1 : 0);
      c.write_shift(4, 0);
      return c;
    }(r);
  }
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(r)) {
    return function Im(r) {
      var c = Gi(10);
      c.write_shift(4, 2);
      c.write_shift(1, 28);
      c.write_shift(1, r);
      c.write_shift(4, 0);
      return c;
    }(+ri[r]);
  }
  if (r.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return function D_(r) {
      var c = Qo(r);
      var o = Gi(15);
      o.write_shift(4, 7);
      o.write_shift(1, 36);
      o.write_shift(4, c.r);
      o.write_shift(2, c.c | (r.charAt(0) == "$" ? 0 : 1) << 14 | (r.match(/\$\d/) ? 0 : 1) << 15);
      o.write_shift(4, 0);
      return o;
    }(r);
  }
  if (r.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return function l_(r) {
      var c = r.split(":");
      var o = c[0];
      var p = Gi(23);
      p.write_shift(4, 15);
      var _ = Qo(o = c[0]);
      p.write_shift(1, 36);
      p.write_shift(4, _.r);
      p.write_shift(2, _.c | (o.charAt(0) == "$" ? 0 : 1) << 14 | (o.match(/\$\d/) ? 0 : 1) << 15);
      p.write_shift(4, 0);
      _ = Qo(o = c[1]);
      p.write_shift(1, 36);
      p.write_shift(4, _.r);
      p.write_shift(2, _.c | (o.charAt(0) == "$" ? 0 : 1) << 14 | (o.match(/\$\d/) ? 0 : 1) << 15);
      p.write_shift(4, 0);
      p.write_shift(1, 17);
      p.write_shift(4, 0);
      return p;
    }(r);
  }
  if (r.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return function V0(r, c) {
      var o = r.lastIndexOf("!");
      var p = r.slice(0, o);
      r = r.slice(o + 1);
      if (p.charAt(0) == "'") {
        p = p.slice(1, -1).replace(/''/g, "'");
      }
      var _ = ml(r);
      var V = Gi(23);
      V.write_shift(4, 15);
      V.write_shift(1, 59);
      V.write_shift(2, 2 + c.SheetNames.map(function (Y) {
        return Y.toLowerCase();
      }).indexOf(p.toLowerCase()));
      V.write_shift(4, _.s.r);
      V.write_shift(4, _.e.r);
      V.write_shift(2, _.s.c);
      V.write_shift(2, _.e.c);
      V.write_shift(4, 0);
      return V;
    }(r, c);
  }
  if (r.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return function Yv(r, c) {
      var o = r.lastIndexOf("!");
      var p = r.slice(0, o);
      var _ = Qo(r = r.slice(o + 1));
      if (p.charAt(0) == "'") {
        p = p.slice(1, -1).replace(/''/g, "'");
      }
      var V = Gi(17);
      V.write_shift(4, 9);
      V.write_shift(1, 58);
      V.write_shift(2, 2 + c.SheetNames.map(function (Y) {
        return Y.toLowerCase();
      }).indexOf(p.toLowerCase()));
      V.write_shift(4, _.r);
      V.write_shift(2, _.c | (r.charAt(0) == "$" ? 0 : 1) << 14 | (r.match(/\$\d/) ? 0 : 1) << 15);
      V.write_shift(4, 0);
      return V;
    }(r, c);
  }
  if (r.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return function T_(r, c) {
      var o = r.lastIndexOf("!");
      var p = r.slice(0, o);
      r = r.slice(o + 1);
      if (p.charAt(0) == "'") {
        p = p.slice(1, -1).replace(/''/g, "'");
      }
      var _ = r.split(":");
      var V = Gi(27);
      V.write_shift(4, 19);
      var Y = _[0];
      var ee = Qo(Y);
      V.write_shift(1, 58);
      V.write_shift(2, 2 + c.SheetNames.map(function (Te) {
        return Te.toLowerCase();
      }).indexOf(p.toLowerCase()));
      V.write_shift(4, ee.r);
      V.write_shift(2, ee.c | (Y.charAt(0) == "$" ? 0 : 1) << 14 | (Y.match(/\$\d/) ? 0 : 1) << 15);
      ee = Qo(Y = _[1]);
      V.write_shift(1, 58);
      V.write_shift(2, 2 + c.SheetNames.map(function (Te) {
        return Te.toLowerCase();
      }).indexOf(p.toLowerCase()));
      V.write_shift(4, ee.r);
      V.write_shift(2, ee.c | (Y.charAt(0) == "$" ? 0 : 1) << 14 | (Y.match(/\$\d/) ? 0 : 1) << 15);
      V.write_shift(1, 17);
      V.write_shift(4, 0);
      return V;
    }(r, c);
  }
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(r)) {
    return function B0(r, c) {
      var o = r.lastIndexOf("!");
      var p = r.slice(0, o);
      r = r.slice(o + 1);
      if (p.charAt(0) == "'") {
        p = p.slice(1, -1).replace(/''/g, "'");
      }
      var _ = Gi(17);
      _.write_shift(4, 9);
      _.write_shift(1, 60);
      _.write_shift(2, 2 + c.SheetNames.map(function (V) {
        return V.toLowerCase();
      }).indexOf(p.toLowerCase()));
      _.write_shift(4, 0);
      _.write_shift(2, 0);
      _.write_shift(4, 0);
      return _;
    }(r, c);
  }
  if (/^".*"$/.test(r)) {
    return function a_(r) {
      var c = Gi(7);
      c.write_shift(4, 3 + r.length * 2);
      c.write_shift(1, 23);
      c.write_shift(2, r.length);
      var o = Gi(r.length * 2);
      o.write_shift(r.length * 2, r, "utf16le");
      var p = Gi(4);
      p.write_shift(4, 0);
      return St([c, o, p]);
    }(r);
  }
  if (/^[+-]\d+$/.test(r)) {
    return Wv(parseInt(r, 10));
  }
  throw "Formula |" + r + "| not supported for XLSB";
};
var ff = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
};
var c_ = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
};
var Rm = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function My(r) {
  if (r.slice(0, 3) == "of:") {
    r = r.slice(3);
  }
  if (r.charCodeAt(0) == 61 && (r = r.slice(1)).charCodeAt(0) == 61) {
    r = r.slice(1);
  }
  return (r = (r = (r = (r = (r = r.replace(/COM\.MICROSOFT\./g, "")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function (c, o) {
    return o.replace(/\./g, "");
  })).replace(/\$'([^']|'')+'/g, function (c) {
    return c.slice(1);
  })).replace(/\$([^\]\. #$]+)/g, function (c, o) {
    if (o.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/)) {
      return c;
    } else {
      return o;
    }
  })).replace(/\[.(#[A-Z]*[?!])\]/g, "$1")).replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function Tg(r) {
  return ("of:=" + r.replace(Dm, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")).replace(/;/g, "|").replace(/,/g, ";");
}
function Fm(r) {
  var c = (r = (r = r.replace(/\$'([^']|'')+'/g, function (p) {
    return p.slice(1);
  })).replace(/\$([^\]\. #$]+)/g, function (p, _) {
    if (_.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/)) {
      return p;
    } else {
      return _;
    }
  })).split(":");
  return [c[0].split(".")[0], c[0].split(".")[1] + (c.length > 1 ? ":" + (c[1].split(".")[1] || c[1].split(".")[0]) : "")];
}
function Mg(r) {
  return r.replace(/!/, ".").replace(/:/, ":.");
}
var qh = {};
var Og = {};
var Gv = typeof Map !== "undefined";
function zv(r, c, o) {
  var p = 0;
  var _ = r.length;
  if (o) {
    if (Gv ? o.has(c) : Object.prototype.hasOwnProperty.call(o, c)) {
      for (var V = Gv ? o.get(c) : o[c]; p < V.length; ++p) {
        if (r[V[p]].t === c) {
          r.Count++;
          return V[p];
        }
      }
    }
  } else {
    for (; p < _; ++p) {
      if (r[p].t === c) {
        r.Count++;
        return p;
      }
    }
  }
  r[_] = {
    t: c
  };
  r.Count++;
  r.Unique++;
  if (o) {
    if (Gv) {
      if (!o.has(c)) {
        o.set(c, []);
      }
      o.get(c).push(_);
    } else {
      if (!Object.prototype.hasOwnProperty.call(o, c)) {
        o[c] = [];
      }
      o[c].push(_);
    }
  }
  return _;
}
function Ip(r, c) {
  var o = {
    min: r + 1,
    max: r + 1
  };
  var p = -1;
  if (c.MDW) {
    Ec = c.MDW;
  }
  if (c.width != null) {
    o.customWidth = 1;
  } else if (c.wpx != null) {
    p = cd(c.wpx);
  } else if (c.wch != null) {
    p = c.wch;
  }
  if (p > -1) {
    o.width = wf(p);
    o.customWidth = 1;
  } else if (c.width != null) {
    o.width = c.width;
  }
  if (c.hidden) {
    o.hidden = true;
  }
  if (c.level != null) {
    o.outlineLevel = o.level = c.level;
  }
  return o;
}
function hf(r, c) {
  if (r) {
    var o = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    if (c == "xlml") {
      o = [1, 1, 1, 1, 0.5, 0.5];
    }
    if (r.left == null) {
      r.left = o[0];
    }
    if (r.right == null) {
      r.right = o[1];
    }
    if (r.top == null) {
      r.top = o[2];
    }
    if (r.bottom == null) {
      r.bottom = o[3];
    }
    if (r.header == null) {
      r.header = o[4];
    }
    if (r.footer == null) {
      r.footer = o[5];
    }
  }
}
function Pg(r, c, o) {
  var p = o.revssf[c.z ?? "General"];
  var _ = 60;
  var V = r.length;
  if (p == null && o.ssf) {
    for (; _ < 392; ++_) {
      if (o.ssf[_] == null) {
        la(c.z, _);
        o.ssf[_] = c.z;
        o.revssf[c.z] = p = _;
        break;
      }
    }
  }
  for (_ = 0; _ != V; ++_) {
    if (r[_].numFmtId === p) {
      return _;
    }
  }
  r[V] = {
    numFmtId: p,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  };
  return V;
}
function Rp(r, c, o, p, _, V, Y) {
  try {
    if (p.cellNF) {
      r.z = Kt[c];
    }
  } catch (Te) {
    if (p.WTF) {
      throw Te;
    }
  }
  if (r.t !== "z" || p.cellStyles) {
    if (r.t === "d" && typeof r.v == "string") {
      r.v = Rs(r.v);
    }
    if ((!p || p.cellText !== false) && r.t !== "z") {
      try {
        if (Kt[c] == null) {
          la(qo[c] || "General", c);
        }
        if (r.t === "e") {
          r.w = r.w || On[r.v];
        } else if (c === 0) {
          if (r.t === "n") {
            r.w = (r.v | 0) === r.v ? r.v.toString(10) : Ar(r.v);
          } else if (r.t === "d") {
            var ee = So(r.v, !!Y);
            r.w = (ee | 0) === ee ? ee.toString(10) : Ar(ee);
          } else {
            if (r.v === undefined) {
              return "";
            }
            r.w = vr(r.v, Og);
          }
        } else {
          r.w = Zr(c, r.t === "d" ? So(r.v, !!Y) : r.v, Og);
        }
      } catch (Te) {
        if (p.WTF) {
          throw Te;
        }
      }
    }
    if (p.cellStyles && o != null) {
      try {
        r.s = V.Fills[o];
        if (r.s.fgColor && r.s.fgColor.theme && !r.s.fgColor.rgb) {
          r.s.fgColor.rgb = Eh(_.themeElements.clrScheme[r.s.fgColor.theme].rgb, r.s.fgColor.tint || 0);
          if (p.WTF) {
            r.s.fgColor.raw_rgb = _.themeElements.clrScheme[r.s.fgColor.theme].rgb;
          }
        }
        if (r.s.bgColor && r.s.bgColor.theme) {
          r.s.bgColor.rgb = Eh(_.themeElements.clrScheme[r.s.bgColor.theme].rgb, r.s.bgColor.tint || 0);
          if (p.WTF) {
            r.s.bgColor.raw_rgb = _.themeElements.clrScheme[r.s.bgColor.theme].rgb;
          }
        }
      } catch (Te) {
        if (p.WTF && V.Fills) {
          throw Te;
        }
      }
    }
  }
}
function Oy(r, c, o) {
  if (r && r["!ref"]) {
    var p = Ps(r["!ref"]);
    if (p.e.c < p.s.c || p.e.r < p.s.r) {
      throw new Error("Bad range (" + o + "): " + r["!ref"]);
    }
  }
}
var Ig = /<(?:\w:)?mergeCell ref=["'][A-Z0-9:]+['"]\s*[\/]?>/g;
var M_ = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;
var ih = /<(?:\w:)?hyperlink [^>]*>/gm;
var Kv = /"(\w*:\w*)"/;
var Ku = /<(?:\w:)?col\b[^>]*[\/]?>/g;
var Rg = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;
var jv = /<(?:\w:)?pageMargins[^>]*\/>/g;
var dd = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;
var Py = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/;
var Fg = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function Jc(r, c, o, p) {
  var _ = sr(r);
  o.Sheets[p] ||= {};
  if (_.codeName) {
    o.Sheets[p].CodeName = Rr(Ns(_.codeName));
  }
}
var Lg = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"];
var Lm = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
var Y0 = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/g;
function D(r, c, o, p, _, V, Y) {
  if (r.c) {
    o["!comments"].push([c, r.c]);
  }
  if ((r.v === undefined || r.t === "z" && !(p || {}).sheetStubs) && typeof r.f != "string" && typeof r.z === "undefined") {
    return "";
  }
  var ee = "";
  var Te = r.t;
  var Ne = r.v;
  if (r.t !== "z") {
    switch (r.t) {
      case "b":
        ee = r.v ? "1" : "0";
        break;
      case "n":
        if (isNaN(r.v)) {
          r.t = "e";
          ee = On[r.v = 36];
        } else if (isFinite(r.v)) {
          ee = "" + r.v;
        } else {
          r.t = "e";
          ee = On[r.v = 7];
        }
        break;
      case "e":
        ee = On[r.v];
        break;
      case "d":
        if (p && p.cellDates) {
          var ze = Rs(r.v, Y);
          ee = ze.toISOString();
          if (ze.getUTCFullYear() < 1900) {
            ee = ee.slice(ee.indexOf("T") + 1).replace("Z", "");
          }
        } else {
          (r = Vs(r)).t = "n";
          ee = "" + (r.v = So(Rs(r.v, Y), Y));
        }
        if (typeof r.z === "undefined") {
          r.z = Kt[14];
        }
        break;
      default:
        ee = r.v;
    }
  }
  var Ft = r.t == "z" || r.v == null ? "" : Aa("v", Mr(ee));
  var _t = {
    r: c
  };
  var Ot = Pg(p.cellXfs, r, p);
  if (Ot !== 0) {
    _t.s = Ot;
  }
  switch (r.t) {
    case "n":
    case "z":
      break;
    case "d":
      _t.t = "d";
      break;
    case "b":
      _t.t = "b";
      break;
    case "e":
      _t.t = "e";
      break;
    default:
      if (r.v == null) {
        delete r.t;
        break;
      }
      if (r.v.length > 32767) {
        throw new Error("Text length must not exceed 32767 characters");
      }
      if (p && p.bookSST) {
        Ft = Aa("v", "" + zv(p.Strings, r.v, p.revStrings));
        _t.t = "s";
        break;
      }
      _t.t = "str";
  }
  if (r.t != Te) {
    r.t = Te;
    r.v = Ne;
  }
  if (typeof r.f == "string" && r.f) {
    var zt = r.F && r.F.slice(0, c.length) == c ? {
      t: "array",
      ref: r.F
    } : null;
    Ft = wt("f", Mr(r.f), zt) + (r.v != null ? Ft : "");
  }
  if (r.l) {
    r.l.display = Mr(ee);
    o["!links"].push([c, r.l]);
  }
  if (r.D) {
    _t.cm = 1;
  }
  return wt("c", Ft, _t);
}
var A = function () {
  var r = /<(?:\w+:)?c[ \/>]/;
  var c = /<\/(?:\w+:)?row>/;
  var o = /r=["']([^"']*)["']/;
  var p = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
  var _ = /ref=["']([^"']*)["']/;
  var V = ht("v");
  var Y = ht("f");
  return function (Te, Ne, ze, Ft, _t, Ot, zt) {
    for (var Ln, Jn, Fi, ji, ra, nn = 0, Pt = "", rn = [], yn = [], un = 0, ai = 0, Ni = 0, or = "", yi = 0, mi = 0, Dr = 0, yo = 0, _s = Array.isArray(Ot.CellXf), ds = [], Ua = [], Ul = Ne["!data"] != null, os = [], Ba = {}, hr = false, oo = !!ze.sheetStubs, as = !!((zt || {}).WBProps || {}).date1904, Lo = Te.split(c), Ro = 0, va = Lo.length; Ro != va; ++Ro) {
      var Xn = (Pt = Lo[Ro].trim()).length;
      if (Xn !== 0) {
        var Pi = 0;
        e: for (nn = 0; nn < Xn; ++nn) {
          switch (Pt[nn]) {
            case ">":
              if (Pt[nn - 1] != "/") {
                ++nn;
                break e;
              }
              if (ze && ze.cellStyles) {
                yi = (Jn = sr(Pt.slice(Pi, nn), true)).r != null ? parseInt(Jn.r, 10) : yi + 1;
                mi = -1;
                if (ze.sheetRows && ze.sheetRows < yi) {
                  continue;
                }
                Ba = {};
                hr = false;
                if (Jn.ht) {
                  hr = true;
                  Ba.hpt = parseFloat(Jn.ht);
                  Ba.hpx = zd(Ba.hpt);
                }
                if (Jn.hidden && tr(Jn.hidden)) {
                  hr = true;
                  Ba.hidden = true;
                }
                if (Jn.outlineLevel != null) {
                  hr = true;
                  Ba.level = +Jn.outlineLevel;
                }
                if (hr) {
                  os[yi - 1] = Ba;
                }
              }
              break;
            case "<":
              Pi = nn;
          }
        }
        if (Pi >= nn) {
          break;
        }
        yi = (Jn = sr(Pt.slice(Pi, nn), true)).r != null ? parseInt(Jn.r, 10) : yi + 1;
        mi = -1;
        if (!ze.sheetRows || ze.sheetRows >= yi) {
          if (!ze.nodim) {
            if (Ft.s.r > yi - 1) {
              Ft.s.r = yi - 1;
            }
            if (Ft.e.r < yi - 1) {
              Ft.e.r = yi - 1;
            }
          }
          if (ze && ze.cellStyles) {
            Ba = {};
            hr = false;
            if (Jn.ht) {
              hr = true;
              Ba.hpt = parseFloat(Jn.ht);
              Ba.hpx = zd(Ba.hpt);
            }
            if (Jn.hidden && tr(Jn.hidden)) {
              hr = true;
              Ba.hidden = true;
            }
            if (Jn.outlineLevel != null) {
              hr = true;
              Ba.level = +Jn.outlineLevel;
            }
            if (hr) {
              os[yi - 1] = Ba;
            }
          }
          rn = Pt.slice(nn).split(r);
          for (var bi = 0; bi != rn.length && rn[bi].trim().charAt(0) == "<"; ++bi);
          rn = rn.slice(bi);
          nn = 0;
          for (; nn != rn.length; ++nn) {
            if ((Pt = rn[nn].trim()).length !== 0) {
              yn = Pt.match(o);
              un = nn;
              ai = 0;
              Ni = 0;
              Pt = "<c " + (Pt.slice(0, 1) == "<" ? ">" : "") + Pt;
              if (yn != null && yn.length === 2) {
                un = 0;
                or = yn[1];
                ai = 0;
                for (; ai != or.length && (Ni = or.charCodeAt(ai) - 64) >= 1 && Ni <= 26; ++ai) {
                  un = un * 26 + Ni;
                }
                mi = --un;
              } else {
                ++mi;
              }
              for (ai = 0; ai != Pt.length && Pt.charCodeAt(ai) !== 62; ++ai);
              ++ai;
              if (!(Jn = sr(Pt.slice(0, ai), true)).r) {
                Jn.r = Eo({
                  r: yi - 1,
                  c: mi
                });
              }
              Ln = {
                t: ""
              };
              if ((yn = (or = Pt.slice(ai)).match(V)) != null && yn[1] !== "") {
                Ln.v = Rr(yn[1]);
              }
              if (ze.cellFormula) {
                if ((yn = or.match(Y)) != null) {
                  if (yn[1] == "") {
                    if (yn[0].indexOf("t=\"shared\"") > -1 && Ua[(ji = sr(yn[0])).si]) {
                      Ln.f = H(Ua[ji.si][1], Ua[ji.si][2], Jn.r);
                    }
                  } else {
                    Ln.f = Rr(Ns(yn[1]), true);
                    if (!ze.xlfn) {
                      Ln.f = g(Ln.f);
                    }
                    if (yn[0].indexOf("t=\"array\"") > -1) {
                      Ln.F = (or.match(_) || [])[1];
                      if (Ln.F.indexOf(":") > -1) {
                        ds.push([Ps(Ln.F), Ln.F]);
                      }
                    } else if (yn[0].indexOf("t=\"shared\"") > -1) {
                      ji = sr(yn[0]);
                      var vi = Rr(Ns(yn[1]));
                      if (!ze.xlfn) {
                        vi = g(vi);
                      }
                      Ua[parseInt(ji.si, 10)] = [ji, vi, Jn.r];
                    }
                  }
                } else if ((yn = or.match(/<f[^>]*\/>/)) && Ua[(ji = sr(yn[0])).si]) {
                  Ln.f = H(Ua[ji.si][1], Ua[ji.si][2], Jn.r);
                }
                var Cr = Qo(Jn.r);
                for (ai = 0; ai < ds.length; ++ai) {
                  if (Cr.r >= ds[ai][0].s.r && Cr.r <= ds[ai][0].e.r && Cr.c >= ds[ai][0].s.c && Cr.c <= ds[ai][0].e.c) {
                    Ln.F = ds[ai][1];
                  }
                }
              }
              if (Jn.t == null && Ln.v === undefined) {
                if (Ln.f || Ln.F) {
                  Ln.v = 0;
                  Ln.t = "n";
                } else {
                  if (!oo) {
                    continue;
                  }
                  Ln.t = "z";
                }
              } else {
                Ln.t = Jn.t || "n";
              }
              if (Ft.s.c > mi) {
                Ft.s.c = mi;
              }
              if (Ft.e.c < mi) {
                Ft.e.c = mi;
              }
              switch (Ln.t) {
                case "n":
                  if (Ln.v == "" || Ln.v == null) {
                    if (!oo) {
                      continue;
                    }
                    Ln.t = "z";
                  } else {
                    Ln.v = parseFloat(Ln.v);
                  }
                  break;
                case "s":
                  if (typeof Ln.v === "undefined") {
                    if (!oo) {
                      continue;
                    }
                    Ln.t = "z";
                  } else {
                    Fi = qh[parseInt(Ln.v, 10)];
                    Ln.v = Fi.t;
                    Ln.r = Fi.r;
                    if (ze.cellHTML) {
                      Ln.h = Fi.h;
                    }
                  }
                  break;
                case "str":
                  Ln.t = "s";
                  Ln.v = Ln.v != null ? Rr(Ns(Ln.v), true) : "";
                  if (ze.cellHTML) {
                    Ln.h = _e(Ln.v);
                  }
                  break;
                case "inlineStr":
                  yn = or.match(p);
                  Ln.t = "s";
                  if (yn != null && (Fi = tg(yn[1]))) {
                    Ln.v = Fi.t;
                    if (ze.cellHTML) {
                      Ln.h = Fi.h;
                    }
                  } else {
                    Ln.v = "";
                  }
                  break;
                case "b":
                  Ln.v = tr(Ln.v);
                  break;
                case "d":
                  if (ze.cellDates) {
                    Ln.v = Rs(Ln.v, as);
                  } else {
                    Ln.v = So(Rs(Ln.v, as), as);
                    Ln.t = "n";
                  }
                  break;
                case "e":
                  if (!ze || ze.cellText !== false) {
                    Ln.w = Ln.v;
                  }
                  Ln.v = ri[Ln.v];
              }
              Dr = yo = 0;
              ra = null;
              if (_s && Jn.s !== undefined && (ra = Ot.CellXf[Jn.s]) != null) {
                if (ra.numFmtId != null) {
                  Dr = ra.numFmtId;
                }
                if (ze.cellStyles && ra.fillId != null) {
                  yo = ra.fillId;
                }
              }
              Rp(Ln, Dr, yo, ze, _t, Ot, as);
              if (ze.cellDates && _s && Ln.t == "n" && No(Kt[Dr])) {
                Ln.v = pa(Ln.v + (as ? 1462 : 0));
                Ln.t = typeof Ln.v == "number" ? "n" : "d";
              }
              if (Jn.cm && ze.xlmeta) {
                var jn = (ze.xlmeta.Cell || [])[+Jn.cm - 1];
                if (jn && jn.type == "XLDAPR") {
                  Ln.D = true;
                }
              }
              var fo;
              if (ze.nodim) {
                fo = Qo(Jn.r);
                if (Ft.s.r > fo.r) {
                  Ft.s.r = fo.r;
                }
                if (Ft.e.r < fo.r) {
                  Ft.e.r = fo.r;
                }
              }
              if (Ul) {
                fo = Qo(Jn.r);
                Ne["!data"][fo.r] ||= [];
                Ne["!data"][fo.r][fo.c] = Ln;
              } else {
                Ne[Jn.r] = Ln;
              }
            }
          }
        }
      }
    }
    if (os.length > 0) {
      Ne["!rows"] = os;
    }
  };
}();
function T(r, c, o, p) {
  var Y;
  var _ = [nr, wt("worksheet", null, {
    xmlns: lr[0],
    "xmlns:r": pi_r
  })];
  var ee = "";
  var Te = o.Sheets[o.SheetNames[r]];
  if (Te == null) {
    Te = {};
  }
  var Ne = Te["!ref"] || "A1";
  var ze = Ps(Ne);
  if (ze.e.c > 16383 || ze.e.r > 1048575) {
    if (c.WTF) {
      throw new Error("Range " + Ne + " exceeds format limit A1:XFD1048576");
    }
    ze.e.c = Math.min(ze.e.c, 16383);
    ze.e.r = Math.min(ze.e.c, 1048575);
    Ne = $o(ze);
  }
  p ||= {};
  Te["!comments"] = [];
  var Ft = [];
  (function xd(r, c, o, p, _) {
    var V = false;
    var Y = {};
    var ee = null;
    if (p.bookType !== "xlsx" && c.vbaraw) {
      var Te = c.SheetNames[o];
      try {
        if (c.Workbook) {
          Te = c.Workbook.Sheets[o].CodeName || Te;
        }
      } catch {}
      V = true;
      Y.codeName = ys(Mr(Te));
    }
    if (r && r["!outline"]) {
      var Ne = {
        summaryBelow: 1,
        summaryRight: 1
      };
      if (r["!outline"].above) {
        Ne.summaryBelow = 0;
      }
      if (r["!outline"].left) {
        Ne.summaryRight = 0;
      }
      ee = (ee || "") + wt("outlinePr", null, Ne);
    }
    if (!!V || !!ee) {
      _[_.length] = wt("sheetPr", ee, Y);
    }
  })(Te, o, r, c, _);
  _[_.length] = wt("dimension", null, {
    ref: Ne
  });
  _[_.length] = function Fy(r, c, o, p) {
    var _ = {
      workbookViewId: "0"
    };
    if ((((p || {}).Workbook || {}).Views || [])[0]) {
      _.rightToLeft = p.Workbook.Views[0].RTL ? "1" : "0";
    }
    return wt("sheetViews", wt("sheetView", null, _), {});
  }(0, 0, 0, o);
  if (c.sheetFormat) {
    _[_.length] = wt("sheetFormatPr", null, {
      defaultRowHeight: c.sheetFormat.defaultRowHeight || "16",
      baseColWidth: c.sheetFormat.baseColWidth || "10",
      outlineLevelRow: c.sheetFormat.outlineLevelRow || "7"
    });
  }
  if (Te["!cols"] != null && Te["!cols"].length > 0) {
    _[_.length] = function Qv(r, c) {
      for (var p, o = ["<cols>"], _ = 0; _ != c.length; ++_) {
        if (!!(p = c[_])) {
          o[o.length] = wt("col", null, Ip(_, p));
        }
      }
      o[o.length] = "</cols>";
      return o.join("");
    }(0, Te["!cols"]);
  }
  _[Y = _.length] = "<sheetData/>";
  Te["!links"] = [];
  if (Te["!ref"] != null) {
    ee = function m(r, c, o, p) {
      var Te;
      var Pt;
      var _ = [];
      var V = [];
      var Y = Ps(r["!ref"]);
      var ee = "";
      var Ne = "";
      var ze = [];
      var Ft = 0;
      var _t = 0;
      var Ot = r["!rows"];
      var zt = r["!data"] != null;
      var nn = {
        r: Ne
      };
      var rn = -1;
      var yn = (((p || {}).Workbook || {}).WBProps || {}).date1904;
      for (_t = Y.s.c; _t <= Y.e.c; ++_t) {
        ze[_t] = jo(_t);
      }
      for (Ft = Y.s.r; Ft <= Y.e.r; ++Ft) {
        V = [];
        Ne = Da(Ft);
        _t = Y.s.c;
        for (; _t <= Y.e.c; ++_t) {
          Te = ze[_t] + Ne;
          var un = zt ? (r["!data"][Ft] || [])[_t] : r[Te];
          if (un !== undefined && (ee = D(un, Te, r, c, 0, 0, yn)) != null) {
            V.push(ee);
          }
        }
        if (V.length > 0 || Ot && Ot[Ft]) {
          nn = {
            r: Ne
          };
          if (Ot && Ot[Ft]) {
            if ((Pt = Ot[Ft]).hidden) {
              nn.hidden = 1;
            }
            rn = -1;
            if (Pt.hpx) {
              rn = Jf(Pt.hpx);
            } else if (Pt.hpt) {
              rn = Pt.hpt;
            }
            if (rn > -1) {
              nn.ht = rn;
              nn.customHeight = 1;
            }
            if (Pt.level) {
              nn.outlineLevel = Pt.level;
            }
          }
          _[_.length] = wt("row", V.join(""), nn);
        }
      }
      if (Ot) {
        for (; Ft < Ot.length; ++Ft) {
          if (Ot && Ot[Ft]) {
            nn = {
              r: Ft + 1
            };
            if ((Pt = Ot[Ft]).hidden) {
              nn.hidden = 1;
            }
            rn = -1;
            if (Pt.hpx) {
              rn = Jf(Pt.hpx);
            } else if (Pt.hpt) {
              rn = Pt.hpt;
            }
            if (rn > -1) {
              nn.ht = rn;
              nn.customHeight = 1;
            }
            if (Pt.level) {
              nn.outlineLevel = Pt.level;
            }
            _[_.length] = wt("row", "", nn);
          }
        }
      }
      return _.join("");
    }(Te, c, 0, o);
    if (ee.length > 0) {
      _[_.length] = ee;
    }
  }
  if (_.length > Y + 1) {
    _[_.length] = "</sheetData>";
    _[Y] = _[Y].replace("/>", ">");
  }
  if (Te["!protect"]) {
    _[_.length] = function Nm(r) {
      var c = {
        sheet: 1
      };
      Lg.forEach(function (o) {
        if (r[o] != null && r[o]) {
          c[o] = "1";
        }
      });
      Lm.forEach(function (o) {
        if (r[o] != null && !r[o]) {
          c[o] = "0";
        }
      });
      if (r.password) {
        c.password = lm(r.password).toString(16).toUpperCase();
      }
      return wt("sheetProtection", null, c);
    }(Te["!protect"]);
  }
  if (Te["!autofilter"] != null) {
    _[_.length] = function Ry(r, c, o, p) {
      var _ = typeof r.ref == "string" ? r.ref : $o(r.ref);
      o.Workbook ||= {
        Sheets: []
      };
      o.Workbook.Names ||= [];
      var V = o.Workbook.Names;
      var Y = ml(_);
      if (Y.s.r == Y.e.r) {
        Y.e.r = ml(c["!ref"]).e.r;
        _ = $o(Y);
      }
      for (var ee = 0; ee < V.length; ++ee) {
        var Te = V[ee];
        if (Te.Name == "_xlnm._FilterDatabase" && Te.Sheet == p) {
          Te.Ref = mc(o.SheetNames[p]) + "!" + Su(_);
          break;
        }
      }
      if (ee == V.length) {
        V.push({
          Name: "_xlnm._FilterDatabase",
          Sheet: p,
          Ref: "'" + o.SheetNames[p] + "'!" + _
        });
      }
      return wt("autoFilter", null, {
        ref: _
      });
    }(Te["!autofilter"], Te, o, r);
  }
  if (Te["!merges"] != null && Te["!merges"].length > 0) {
    _[_.length] = function kg(r) {
      if (r.length === 0) {
        return "";
      }
      for (var c = "<mergeCells count=\"" + r.length + "\">", o = 0; o != r.length; ++o) {
        c += "<mergeCell ref=\"" + $o(r[o]) + "\"/>";
      }
      return c + "</mergeCells>";
    }(Te["!merges"]);
  }
  var Ot;
  var _t = -1;
  var zt = -1;
  if (Te["!links"].length > 0) {
    _[_.length] = "<hyperlinks>";
    Te["!links"].forEach(function (nn) {
      if (!!nn[1].Target) {
        Ot = {
          ref: nn[0]
        };
        if (nn[1].Target.charAt(0) != "#") {
          zt = Hi(p, -1, Mr(nn[1].Target).replace(/#.*$/, ""), nt.HLINK);
          Ot["r:id"] = "rId" + zt;
        }
        if ((_t = nn[1].Target.indexOf("#")) > -1) {
          Ot.location = Mr(nn[1].Target.slice(_t + 1));
        }
        if (nn[1].Tooltip) {
          Ot.tooltip = Mr(nn[1].Tooltip);
        }
        Ot.display = nn[1].display;
        _[_.length] = wt("hyperlink", null, Ot);
      }
    });
    _[_.length] = "</hyperlinks>";
  }
  delete Te["!links"];
  if (Te["!margins"] != null) {
    _[_.length] = function kp(r) {
      hf(r);
      return wt("pageMargins", null, r);
    }(Te["!margins"]);
  }
  if (!c || c.ignoreEC || c.ignoreEC == null) {
    _[_.length] = Aa("ignoredErrors", wt("ignoredError", null, {
      numberStoredAsText: 1,
      sqref: Ne
    }));
  }
  if (Ft.length > 0) {
    zt = Hi(p, -1, "../drawings/drawing" + (r + 1) + ".xml", nt.DRAW);
    _[_.length] = wt("drawing", null, {
      "r:id": "rId" + zt
    });
    Te["!drawing"] = Ft;
  }
  if (Te["!comments"].length > 0) {
    zt = Hi(p, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", nt.VML);
    _[_.length] = wt("legacyDrawing", null, {
      "r:id": "rId" + zt
    });
    Te["!legacy"] = zt;
  }
  if (_.length > 1) {
    _[_.length] = "</worksheet>";
    _[1] = _[1].replace("/>", ">");
  }
  return _.join("");
}
function ge(r, c, o, p) {
  var _ = function Se(r, c, o) {
    var p = Gi(145);
    var _ = (o["!rows"] || [])[r] || {};
    p.write_shift(4, r);
    p.write_shift(4, 0);
    var V = 320;
    if (_.hpx) {
      V = Jf(_.hpx) * 20;
    } else if (_.hpt) {
      V = _.hpt * 20;
    }
    p.write_shift(2, V);
    p.write_shift(1, 0);
    var Y = 0;
    if (_.level) {
      Y |= _.level;
    }
    if (_.hidden) {
      Y |= 16;
    }
    if (_.hpx || _.hpt) {
      Y |= 32;
    }
    p.write_shift(1, Y);
    p.write_shift(1, 0);
    var ee = 0;
    var Te = p.l;
    p.l += 4;
    for (var Ne = {
        r,
        c: 0
      }, ze = o["!data"] != null, Ft = 0; Ft < 16; ++Ft) {
      if (c.s.c <= Ft + 1 << 10 && c.e.c >= Ft << 10) {
        for (var _t = -1, Ot = -1, zt = Ft << 10; zt < Ft + 1 << 10; ++zt) {
          Ne.c = zt;
          if (ze ? (o["!data"][Ne.r] || [])[Ne.c] : o[Eo(Ne)]) {
            if (_t < 0) {
              _t = zt;
            }
            Ot = zt;
          }
        }
        if (_t >= 0) {
          ++ee;
          p.write_shift(4, _t);
          p.write_shift(4, Ot);
        }
      }
    }
    var Pt = p.l;
    p.l = Te;
    p.write_shift(4, ee);
    p.l = Pt;
    if (p.length > p.l) {
      return p.slice(0, p.l);
    } else {
      return p;
    }
  }(p, o, c);
  if (_.length > 17 || (c["!rows"] || [])[p]) {
    gr(r, 0, _);
  }
}
var Dt = ts;
var en = Ta;
function jr(r, c, o) {
  if (o == null) {
    o = Gi(9);
  }
  Hc(c, o);
  o.write_shift(1, r.v);
  return o;
}
function _l(r, c, o) {
  if (o == null) {
    o = Gi(8);
  }
  Uc(c, o);
  o.write_shift(1, r.v);
  o.write_shift(2, 0);
  o.write_shift(1, 0);
  return o;
}
function fu(r) {
  return [sc(r), Dl(r), "n"];
}
var ws = ts;
var co = Ta;
var Au = ["left", "right", "top", "bottom", "header", "footer"];
function $u(r, c, o, p, _, V, Y, ee) {
  var Te = {
    r: o,
    c: p
  };
  if (c.c) {
    V["!comments"].push([Eo(Te), c.c]);
  }
  if (c.v === undefined) {
    return false;
  }
  var Ne = "";
  switch (c.t) {
    case "b":
      Ne = c.v ? "1" : "0";
      break;
    case "d":
      (c = Vs(c)).z = c.z || Kt[14];
      c.v = So(Rs(c.v, ee), ee);
      c.t = "n";
      break;
    case "n":
    case "e":
      Ne = "" + c.v;
      break;
    default:
      Ne = c.v;
  }
  Te.s = Pg(_.cellXfs, c, _);
  if (c.l) {
    V["!links"].push([Eo(Te), c.l]);
  }
  switch (c.t) {
    case "s":
    case "str":
      if (_.bookSST) {
        Ne = zv(_.Strings, c.v == null ? "" : String(c.v), _.revStrings);
        Te.t = "s";
        Te.v = Ne;
        if (Y) {
          gr(r, 18, function ju(r, c, o) {
            if (o == null) {
              o = Gi(8);
            }
            Uc(c, o);
            o.write_shift(4, c.v);
            return o;
          }(0, Te));
        } else {
          gr(r, 7, function Lu(r, c, o) {
            if (o == null) {
              o = Gi(12);
            }
            Hc(c, o);
            o.write_shift(4, c.v);
            return o;
          }(0, Te));
        }
      } else {
        Te.t = "str";
        if (Y) {
          gr(r, 17, function Ti(r, c, o) {
            var p = r.v == null ? "" : String(r.v);
            if (o == null) {
              o = Gi(8 + p.length * 4);
            }
            Uc(c, o);
            Al(p, o);
            if (o.length > o.l) {
              return o.slice(0, o.l);
            } else {
              return o;
            }
          }(c, Te));
        } else {
          gr(r, 6, function En(r, c, o) {
            var p = r.v == null ? "" : String(r.v);
            if (o == null) {
              o = Gi(12 + r.v.length * 4);
            }
            Hc(c, o);
            Al(p, o);
            if (o.length > o.l) {
              return o.slice(0, o.l);
            } else {
              return o;
            }
          }(c, Te));
        }
      }
      return true;
    case "n":
      if (c.v == (c.v | 0) && c.v > -1000 && c.v < 1000) {
        if (Y) {
          gr(r, 13, function Lp(r, c, o) {
            if (o == null) {
              o = Gi(8);
            }
            Uc(c, o);
            Sd(r.v, o);
            return o;
          }(c, Te));
        } else {
          gr(r, 2, function Uu(r, c, o) {
            if (o == null) {
              o = Gi(12);
            }
            Hc(c, o);
            Sd(r.v, o);
            return o;
          }(c, Te));
        }
      } else if (isNaN(c.v)) {
        if (Y) {
          gr(r, 14, _l({
            t: "e",
            v: 36
          }, Te));
        } else {
          gr(r, 3, jr({
            t: "e",
            v: 36
          }, Te));
        }
      } else if (isFinite(c.v)) {
        if (Y) {
          gr(r, 16, function pf(r, c, o) {
            if (o == null) {
              o = Gi(12);
            }
            Uc(c, o);
            Qa(r.v, o);
            return o;
          }(c, Te));
        } else {
          gr(r, 5, function bc(r, c, o) {
            if (o == null) {
              o = Gi(16);
            }
            Hc(c, o);
            Qa(r.v, o);
            return o;
          }(c, Te));
        }
      } else if (Y) {
        gr(r, 14, _l({
          t: "e",
          v: 7
        }, Te));
      } else {
        gr(r, 3, jr({
          t: "e",
          v: 7
        }, Te));
      }
      return true;
    case "b":
      Te.t = "b";
      if (Y) {
        gr(r, 15, function ba(r, c, o) {
          if (o == null) {
            o = Gi(5);
          }
          Uc(c, o);
          o.write_shift(1, r.v ? 1 : 0);
          return o;
        }(c, Te));
      } else {
        gr(r, 4, function us(r, c, o) {
          if (o == null) {
            o = Gi(9);
          }
          Hc(c, o);
          o.write_shift(1, r.v ? 1 : 0);
          return o;
        }(c, Te));
      }
      return true;
    case "e":
      Te.t = "e";
      if (Y) {
        gr(r, 14, _l(c, Te));
      } else {
        gr(r, 3, jr(c, Te));
      }
      return true;
  }
  if (Y) {
    gr(r, 12, function Li(r, c, o) {
      if (o == null) {
        o = Gi(4);
      }
      return Uc(c, o);
    }(0, Te));
  } else {
    gr(r, 1, function ii(r, c, o) {
      if (o == null) {
        o = Gi(8);
      }
      return Hc(c, o);
    }(0, Te));
  }
  return true;
}
function Qd(r, c, o, p) {
  var _ = tl();
  var V = o.SheetNames[r];
  var Y = o.Sheets[V] || {};
  var ee = V;
  try {
    if (o && o.Workbook) {
      ee = o.Workbook.Sheets[r].CodeName || ee;
    }
  } catch {}
  var Te = Ps(Y["!ref"] || "A1");
  if (Te.e.c > 16383 || Te.e.r > 1048575) {
    if (c.WTF) {
      throw new Error("Range " + (Y["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    }
    Te.e.c = Math.min(Te.e.c, 16383);
    Te.e.r = Math.min(Te.e.c, 1048575);
  }
  Y["!links"] = [];
  Y["!comments"] = [];
  gr(_, 129);
  if (o.vbaraw || Y["!outline"]) {
    gr(_, 147, function Vn(r, c, o) {
      if (o == null) {
        o = Gi(84 + r.length * 4);
      }
      var p = 192;
      if (c) {
        if (c.above) {
          p &= -65;
        }
        if (c.left) {
          p &= -129;
        }
      }
      o.write_shift(1, p);
      for (var _ = 1; _ < 3; ++_) {
        o.write_shift(1, 0);
      }
      yu({
        auto: 1
      }, o);
      o.write_shift(-4, -1);
      o.write_shift(-4, -1);
      vc(r, o);
      return o.slice(0, o.l);
    }(ee, Y["!outline"]));
  }
  gr(_, 148, en(Te));
  (function Up(r, c, o) {
    gr(r, 133);
    gr(r, 137, function tu(r, c, o) {
      if (o == null) {
        o = Gi(30);
      }
      var p = 924;
      if ((((c || {}).Views || [])[0] || {}).RTL) {
        p |= 32;
      }
      o.write_shift(2, p);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(1, 0);
      o.write_shift(1, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 100);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(4, 0);
      return o;
    }(0, o));
    gr(r, 138);
    gr(r, 134);
  })(_, 0, o.Workbook);
  (function $v(r, c) {
    if (!!c && !!c["!cols"]) {
      gr(r, 390);
      c["!cols"].forEach(function (o, p) {
        if (o) {
          gr(r, 60, function Ic(r, c, o) {
            if (o == null) {
              o = Gi(18);
            }
            var p = Ip(r, c);
            o.write_shift(-4, r);
            o.write_shift(-4, r);
            o.write_shift(4, (p.width || 10) * 256);
            o.write_shift(4, 0);
            var _ = 0;
            if (c.hidden) {
              _ |= 1;
            }
            if (typeof p.width == "number") {
              _ |= 2;
            }
            if (c.level) {
              _ |= c.level << 8;
            }
            o.write_shift(2, _);
            return o;
          }(p, o));
        }
      });
      gr(r, 391);
    }
  })(_, Y);
  (function Xu(r, c, o, p, _) {
    var V = Ps(c["!ref"] || "A1");
    var ee = "";
    var Te = [];
    var Ne = (((_ || {}).Workbook || {}).WBProps || {}).date1904;
    gr(r, 145);
    var ze = c["!data"] != null;
    var Ft = V.e.r;
    if (c["!rows"]) {
      Ft = Math.max(V.e.r, c["!rows"].length - 1);
    }
    for (var _t = V.s.r; _t <= Ft; ++_t) {
      ee = Da(_t);
      ge(r, c, V, _t);
      var Ot = false;
      if (_t <= V.e.r) {
        for (var zt = V.s.c; zt <= V.e.c; ++zt) {
          if (_t === V.s.r) {
            Te[zt] = jo(zt);
          }
          var nn = ze ? (c["!data"][_t] || [])[zt] : c[Te[zt] + ee];
          Ot = !!nn && $u(r, nn, _t, zt, p, c, Ot, Ne);
        }
      }
    }
    gr(r, 146);
  })(_, Y, 0, c, o);
  (function Ug(r, c) {
    if (!!c["!protect"]) {
      gr(r, 535, function Rc(r, c) {
        if (c == null) {
          c = Gi(66);
        }
        c.write_shift(2, r.password ? lm(r.password) : 0);
        c.write_shift(4, 1);
        [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function (o) {
          c.write_shift(4, o[1] ? r[o[0]] == null || r[o[0]] ? 0 : 1 : r[o[0]] != null && r[o[0]] ? 0 : 1);
        });
        return c;
      }(c["!protect"]));
    }
  })(_, Y);
  (function Xv(r, c, o, p) {
    if (c["!autofilter"]) {
      var _ = c["!autofilter"];
      var V = typeof _.ref == "string" ? _.ref : $o(_.ref);
      o.Workbook ||= {
        Sheets: []
      };
      o.Workbook.Names ||= [];
      var Y = o.Workbook.Names;
      var ee = ml(V);
      if (ee.s.r == ee.e.r) {
        ee.e.r = ml(c["!ref"]).e.r;
        V = $o(ee);
      }
      for (var Te = 0; Te < Y.length; ++Te) {
        var Ne = Y[Te];
        if (Ne.Name == "_xlnm._FilterDatabase" && Ne.Sheet == p) {
          Ne.Ref = mc(o.SheetNames[p]) + "!" + Su(V);
          break;
        }
      }
      if (Te == Y.length) {
        Y.push({
          Name: "_xlnm._FilterDatabase",
          Sheet: p,
          Ref: mc(o.SheetNames[p]) + "!" + Su(V)
        });
      }
      gr(r, 161, Ta(Ps(V)));
      gr(r, 162);
    }
  })(_, Y, o, r);
  (function Um(r, c) {
    if (!!c && !!c["!merges"]) {
      gr(r, 177, function Xs(r, c) {
        if (c == null) {
          c = Gi(4);
        }
        c.write_shift(4, r);
        return c;
      }(c["!merges"].length));
      c["!merges"].forEach(function (o) {
        gr(r, 176, co(o));
      });
      gr(r, 178);
    }
  })(_, Y);
  (function np(r, c, o) {
    c["!links"].forEach(function (p) {
      if (p[1].Target) {
        var _ = Hi(o, -1, p[1].Target.replace(/#.*$/, ""), nt.HLINK);
        gr(r, 494, function Fl(r, c) {
          var o = Gi(50 + (r[1].Target.length + (r[1].Tooltip || "").length) * 4);
          Ta({
            s: Qo(r[0]),
            e: Qo(r[0])
          }, o);
          Mo("rId" + c, o);
          var p = r[1].Target.indexOf("#");
          Al((p == -1 ? "" : r[1].Target.slice(p + 1)) || "", o);
          Al(r[1].Tooltip || "", o);
          Al("", o);
          return o.slice(0, o.l);
        }(p, _));
      }
    });
    delete c["!links"];
  })(_, Y, p);
  if (Y["!margins"]) {
    gr(_, 476, function pu(r, c) {
      if (c == null) {
        c = Gi(48);
      }
      hf(r);
      Au.forEach(function (o) {
        Qa(r[o], c);
      });
      return c;
    }(Y["!margins"]));
  }
  if (!c || c.ignoreEC || c.ignoreEC == null) {
    (function Ng(r, c) {
      if (!!c && !!c["!ref"]) {
        gr(r, 648);
        gr(r, 649, function Bu(r) {
          var c = Gi(24);
          c.write_shift(4, 4);
          c.write_shift(4, 1);
          Ta(r, c);
          return c;
        }(Ps(c["!ref"])));
        gr(r, 650);
      }
    })(_, Y);
  }
  (function Np(r, c, o, p) {
    if (c["!comments"].length > 0) {
      var _ = Hi(p, -1, "../drawings/vmlDrawing" + (o + 1) + ".vml", nt.VML);
      gr(r, 551, Mo("rId" + _));
      c["!legacy"] = _;
    }
  })(_, Y, r, p);
  gr(_, 130);
  return _.end();
}
var kc = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]];
var Nd = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]];
var pd = [];
var Jd = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
function rh(r, c) {
  for (var o = 0; o != r.length; ++o) {
    for (var p = r[o], _ = 0; _ != c.length; ++_) {
      var V = c[_];
      if (p[V[0]] == null) {
        p[V[0]] = V[1];
      } else {
        switch (V[2]) {
          case "bool":
            if (typeof p[V[0]] == "string") {
              p[V[0]] = tr(p[V[0]]);
            }
            break;
          case "int":
            if (typeof p[V[0]] == "string") {
              p[V[0]] = parseInt(p[V[0]], 10);
            }
        }
      }
    }
  }
}
function Bp(r, c) {
  for (var o = 0; o != c.length; ++o) {
    var p = c[o];
    if (r[p[0]] == null) {
      r[p[0]] = p[1];
    } else {
      switch (p[2]) {
        case "bool":
          if (typeof r[p[0]] == "string") {
            r[p[0]] = tr(r[p[0]]);
          }
          break;
        case "int":
          if (typeof r[p[0]] == "string") {
            r[p[0]] = parseInt(r[p[0]], 10);
          }
      }
    }
  }
}
function sp(r) {
  Bp(r.WBProps, kc);
  Bp(r.CalcPr, Jd);
  rh(r.WBView, Nd);
  rh(r.Sheets, pd);
  Og.date1904 = tr(r.WBProps.date1904);
}
var a1 = ":][*?/\\".split("");
function Ly(r, c) {
  try {
    if (r == "") {
      throw new Error("Sheet name cannot be blank");
    }
    if (r.length > 31) {
      throw new Error("Sheet name cannot exceed 31 chars");
    }
    if (r.charCodeAt(0) == 39 || r.charCodeAt(r.length - 1) == 39) {
      throw new Error("Sheet name cannot start or end with apostrophe (')");
    }
    if (r.toLowerCase() == "history") {
      throw new Error("Sheet name cannot be 'History'");
    }
    a1.forEach(function (o) {
      if (r.indexOf(o) != -1) {
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      }
    });
  } catch (o) {
    if (c) {
      return false;
    }
    throw o;
  }
  return true;
}
var l1 = /<\w+:workbook/;
function u1(r, c) {
  c ||= Gi(127);
  c.write_shift(4, r.Hidden);
  c.write_shift(4, r.iTabID);
  Mo(r.strRelID, c);
  Al(r.name.slice(0, 31), c);
  if (c.length > c.l) {
    return c.slice(0, c.l);
  } else {
    return c;
  }
}
function d1(r, c) {
  var o = {};
  r.read_shift(4);
  o.ArchID = r.read_shift(4);
  r.l += c - 8;
  return o;
}
function I_(r, c) {
  var o = tl();
  gr(o, 131);
  gr(o, 128, function j1(r, c) {
    c ||= Gi(127);
    for (var o = 0; o != 4; ++o) {
      c.write_shift(4, 0);
    }
    Al("SheetJS", c);
    Al(U_version, c);
    Al(U_version, c);
    Al("7262", c);
    if (c.length > c.l) {
      return c.slice(0, c.l);
    } else {
      return c;
    }
  }());
  gr(o, 153, function G1(r, c) {
    c ||= Gi(72);
    var o = 0;
    if (r) {
      if (r.date1904) {
        o |= 1;
      }
      if (r.filterPrivacy) {
        o |= 8;
      }
    }
    c.write_shift(4, o);
    c.write_shift(4, 0);
    vc(r && r.CodeName || "ThisWorkbook", c);
    return c.slice(0, c.l);
  }(r.Workbook && r.Workbook.WBProps || null));
  (function Q1(r, c) {
    if (c.Workbook && c.Workbook.Sheets) {
      for (var o = c.Workbook.Sheets, p = 0, _ = -1, V = -1; p < o.length; ++p) {
        if (!o[p] || !o[p].Hidden && _ == -1) {
          _ = p;
        } else if (o[p].Hidden == 1 && V == -1) {
          V = p;
        }
      }
      if (V <= _) {
        gr(r, 135);
        gr(r, 158, function h1(r, c) {
          c ||= Gi(29);
          c.write_shift(-4, 0);
          c.write_shift(-4, 460);
          c.write_shift(4, 28800);
          c.write_shift(4, 17600);
          c.write_shift(4, 500);
          c.write_shift(4, r);
          c.write_shift(4, r);
          c.write_shift(1, 120);
          if (c.length > c.l) {
            return c.slice(0, c.l);
          } else {
            return c;
          }
        }(_));
        gr(r, 136);
      }
    }
  })(o, r);
  (function Mh(r, c) {
    gr(r, 143);
    for (var o = 0; o != c.SheetNames.length; ++o) {
      gr(r, 156, u1({
        Hidden: c.Workbook && c.Workbook.Sheets && c.Workbook.Sheets[o] && c.Workbook.Sheets[o].Hidden || 0,
        iTabID: o + 1,
        strRelID: "rId" + (o + 1),
        name: c.SheetNames[o]
      }));
    }
    gr(r, 144);
  })(o, r);
  (function g1(r, c) {
    gr(r, 353);
    gr(r, 357);
    gr(r, 362, function p1(r) {
      var c = r.SheetNames.length;
      var o = Gi(c * 12 + 28);
      o.write_shift(4, c + 2);
      o.write_shift(4, 0);
      o.write_shift(4, -2);
      o.write_shift(4, -2);
      o.write_shift(4, 0);
      o.write_shift(4, -1);
      o.write_shift(4, -1);
      for (var p = 0; p < c; ++p) {
        o.write_shift(4, 0);
        o.write_shift(4, p);
        o.write_shift(4, p);
      }
      return o;
    }(c));
    gr(r, 354);
  })(o, r);
  if ((r.Workbook || {}).Names) {
    (function P_(r, c) {
      if (!!c.Workbook && !!c.Workbook.Names) {
        c.Workbook.Names.forEach(function (o) {
          try {
            if (o.Flags & 14) {
              return;
            }
            gr(r, 39, function K1(r, c) {
              var o = Gi(9);
              var p = 0;
              var _ = r.Name;
              if (Bi.indexOf(_) > -1) {
                p |= 32;
                _ = _.slice(6);
              }
              o.write_shift(4, p);
              o.write_shift(1, 0);
              o.write_shift(4, r.Sheet ?? 4294967295);
              var V = [o, Al(_), Zv(r.Ref, c)];
              if (r.Comment) {
                V.push(yc(r.Comment));
              } else {
                var Y = Gi(4);
                Y.write_shift(4, 4294967295);
                V.push(Y);
              }
              return St(V);
            }(o, c));
          } catch {
            console.error("Could not serialize defined name " + JSON.stringify(o));
          }
        });
      }
    })(o, r);
  }
  gr(o, 132);
  return o.end();
}
function v1(r, c, o, p, _, V, Y, ee) {
  if (c.slice(-4) === ".bin") {
    return function Ju(r, c, o, p, _, V, Y) {
      if (!r) {
        return r;
      }
      var ee = c || {};
      p ||= {
        "!id": {}
      };
      var Te = {};
      if (ee.dense) {
        Te["!data"] = [];
      }
      var Ne;
      var zt;
      var nn;
      var Pt;
      var rn;
      var yn;
      var un;
      var ai;
      var Ni;
      var or;
      var ze = {
        s: {
          r: 2000000,
          c: 2000000
        },
        e: {
          r: 0,
          c: 0
        }
      };
      var Ft = [];
      var _t = false;
      var Ot = false;
      var Ln = [];
      ee.biff = 12;
      ee["!row"] = 0;
      var Jn = 0;
      var yi = false;
      var mi = [];
      var Fi = {};
      var ji = ee.supbooks || _.supbooks || [[]];
      ji.sharedf = Fi;
      ji.arrayf = mi;
      ji.SheetNames = _.SheetNames || _.Sheets.map(function (Ba) {
        return Ba.name;
      });
      if (!ee.supbooks && (ee.supbooks = ji, _.Names)) {
        for (var Dr = 0; Dr < _.Names.length; ++Dr) {
          ji[0][Dr + 1] = _.Names[Dr];
        }
      }
      var yo = [];
      var _s = [];
      var ra = false;
      t0[16] = {
        n: "BrtShortReal",
        f: fu
      };
      var ds;
      var Ua;
      var Ul = +!!((_ || {}).WBProps || {}).date1904 * 1462;
      ic(r, function (hr, oo, as) {
        if (!Ot) {
          switch (as) {
            case 148:
              Ne = hr;
              break;
            case 0:
              zt = hr;
              if (ee.sheetRows && ee.sheetRows <= zt.r) {
                Ot = true;
              }
              Ni = Da(rn = zt.r);
              ee["!row"] = zt.r;
              if (hr.hidden || hr.hpt || hr.level != null) {
                if (hr.hpt) {
                  hr.hpx = zd(hr.hpt);
                }
                _s[hr.r] = hr;
              }
              break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 62:
              nn = {
                t: hr[2]
              };
              switch (hr[2]) {
                case "n":
                  nn.v = hr[1];
                  break;
                case "s":
                  nn.v = (ai = qh[hr[1]]).t;
                  nn.r = ai.r;
                  break;
                case "b":
                  nn.v = !!hr[1];
                  break;
                case "e":
                  nn.v = hr[1];
                  if (ee.cellText !== false) {
                    nn.w = On[nn.v];
                  }
                  break;
                case "str":
                  nn.t = "s";
                  nn.v = hr[1];
                  break;
                case "is":
                  nn.t = "s";
                  nn.v = hr[1].t;
              }
              if (Pt = Y.CellXf[hr[0].iStyleRef]) {
                Rp(nn, Pt.numFmtId, null, ee, V, Y, Ul > 0);
              }
              yn = hr[0].c == -1 ? yn + 1 : hr[0].c;
              if (ee.dense) {
                Te["!data"][rn] ||= [];
                Te["!data"][rn][yn] = nn;
              } else {
                Te[jo(yn) + Ni] = nn;
              }
              if (ee.cellFormula) {
                yi = false;
                Jn = 0;
                for (; Jn < mi.length; ++Jn) {
                  var Lo = mi[Jn];
                  if (zt.r >= Lo[0].s.r && zt.r <= Lo[0].e.r && yn >= Lo[0].s.c && yn <= Lo[0].e.c) {
                    nn.F = $o(Lo[0]);
                    yi = true;
                  }
                }
                if (!yi && hr.length > 3) {
                  nn.f = hr[3];
                }
              }
              if (ze.s.r > zt.r) {
                ze.s.r = zt.r;
              }
              if (ze.s.c > yn) {
                ze.s.c = yn;
              }
              if (ze.e.r < zt.r) {
                ze.e.r = zt.r;
              }
              if (ze.e.c < yn) {
                ze.e.c = yn;
              }
              if (ee.cellDates && Pt && nn.t == "n" && No(Kt[Pt.numFmtId])) {
                var Ro = Si(nn.v + Ul);
                if (Ro) {
                  nn.t = "d";
                  nn.v = new Date(Date.UTC(Ro.y, Ro.m - 1, Ro.d, Ro.H, Ro.M, Ro.S, Ro.u));
                }
              }
              if (ds) {
                if (ds.type == "XLDAPR") {
                  nn.D = true;
                }
                ds = undefined;
              }
              Ua &&= undefined;
              break;
            case 1:
            case 12:
              if (!ee.sheetStubs || _t) {
                break;
              }
              nn = {
                t: "z",
                v: undefined
              };
              yn = hr[0].c == -1 ? yn + 1 : hr[0].c;
              if (ee.dense) {
                Te["!data"][rn] ||= [];
                Te["!data"][rn][yn] = nn;
              } else {
                Te[jo(yn) + Ni] = nn;
              }
              if (ze.s.r > zt.r) {
                ze.s.r = zt.r;
              }
              if (ze.s.c > yn) {
                ze.s.c = yn;
              }
              if (ze.e.r < zt.r) {
                ze.e.r = zt.r;
              }
              if (ze.e.c < yn) {
                ze.e.c = yn;
              }
              if (ds) {
                if (ds.type == "XLDAPR") {
                  nn.D = true;
                }
                ds = undefined;
              }
              Ua &&= undefined;
              break;
            case 176:
              Ln.push(hr);
              break;
            case 49:
              ds = ((ee.xlmeta || {}).Cell || [])[hr - 1];
              break;
            case 494:
              var va = p["!id"][hr.relId];
              if (va) {
                hr.Target = va.Target;
                if (hr.loc) {
                  hr.Target += "#" + hr.loc;
                }
                hr.Rel = va;
              } else if (hr.relId == "") {
                hr.Target = "#" + hr.loc;
              }
              rn = hr.rfx.s.r;
              for (; rn <= hr.rfx.e.r; ++rn) {
                for (yn = hr.rfx.s.c; yn <= hr.rfx.e.c; ++yn) {
                  if (ee.dense) {
                    Te["!data"][rn] ||= [];
                    Te["!data"][rn][yn] ||= {
                      t: "z",
                      v: undefined
                    };
                    Te["!data"][rn][yn].l = hr;
                  } else {
                    un = jo(yn) + Da(rn);
                    Te[un] ||= {
                      t: "z",
                      v: undefined
                    };
                    Te[un].l = hr;
                  }
                }
              }
              break;
            case 426:
              if (!ee.cellFormula) {
                break;
              }
              mi.push(hr);
              (or = ee.dense ? Te["!data"][rn][yn] : Te[jo(yn) + Ni]).f = eu(hr[1], 0, {
                r: zt.r,
                c: yn
              }, ji, ee);
              or.F = $o(hr[0]);
              break;
            case 427:
              if (!ee.cellFormula) {
                break;
              }
              Fi[Eo(hr[0].s)] = hr[1];
              (or = ee.dense ? Te["!data"][rn][yn] : Te[jo(yn) + Ni]).f = eu(hr[1], 0, {
                r: zt.r,
                c: yn
              }, ji, ee);
              break;
            case 60:
              if (!ee.cellStyles) {
                break;
              }
              for (; hr.e >= hr.s;) {
                yo[hr.e--] = {
                  width: hr.w / 256,
                  hidden: !!(hr.flags & 1),
                  level: hr.level
                };
                if (!ra) {
                  ra = true;
                  sg(hr.w / 256);
                }
                Df(yo[hr.e + 1]);
              }
              break;
            case 551:
              if (hr) {
                Te["!legrel"] = hr;
              }
              break;
            case 161:
              Te["!autofilter"] = {
                ref: $o(hr)
              };
              break;
            case 476:
              Te["!margins"] = hr;
              break;
            case 147:
              _.Sheets[o] ||= {};
              if (hr.name) {
                _.Sheets[o].CodeName = hr.name;
              }
              if (hr.above || hr.left) {
                Te["!outline"] = {
                  above: hr.above,
                  left: hr.left
                };
              }
              break;
            case 137:
              _.Views ||= [{}];
              _.Views[0] ||= {};
              if (hr.RTL) {
                _.Views[0].RTL = true;
              }
              break;
            case 485:
            case 64:
            case 1053:
            case 151:
            case 152:
            case 175:
            case 644:
            case 625:
            case 562:
            case 396:
            case 1112:
            case 1146:
            case 471:
            case 1050:
            case 649:
            case 1105:
            case 589:
            case 607:
            case 564:
            case 1055:
            case 168:
            case 174:
            case 1180:
            case 499:
            case 507:
            case 550:
            case 171:
            case 167:
            case 1177:
            case 169:
            case 1181:
            case 552:
            case 661:
            case 639:
            case 478:
            case 537:
            case 477:
            case 536:
            case 1103:
            case 680:
            case 1104:
            case 1024:
            case 663:
            case 535:
            case 678:
            case 504:
            case 1043:
            case 428:
            case 170:
            case 3072:
            case 50:
            case 2070:
            case 1045:
              break;
            case 35:
              _t = true;
              break;
            case 36:
              _t = false;
              break;
            case 37:
              Ft.push(as);
              _t = true;
              break;
            case 38:
              Ft.pop();
              _t = false;
              break;
            default:
              if (!oo.T && (!_t || ee.WTF)) {
                throw new Error("Unexpected record 0x" + as.toString(16));
              }
          }
        }
      }, ee);
      delete ee.supbooks;
      delete ee["!row"];
      if (!Te["!ref"] && (ze.s.r < 2000000 || Ne && (Ne.e.r > 0 || Ne.e.c > 0 || Ne.s.r > 0 || Ne.s.c > 0))) {
        Te["!ref"] = $o(Ne || ze);
      }
      if (ee.sheetRows && Te["!ref"]) {
        var os = Ps(Te["!ref"]);
        if (ee.sheetRows <= +os.e.r) {
          os.e.r = ee.sheetRows - 1;
          if (os.e.r > ze.e.r) {
            os.e.r = ze.e.r;
          }
          if (os.e.r < os.s.r) {
            os.s.r = os.e.r;
          }
          if (os.e.c > ze.e.c) {
            os.e.c = ze.e.c;
          }
          if (os.e.c < os.s.c) {
            os.s.c = os.e.c;
          }
          Te["!fullref"] = Te["!ref"];
          Te["!ref"] = $o(os);
        }
      }
      if (Ln.length > 0) {
        Te["!merges"] = Ln;
      }
      if (yo.length > 0) {
        Te["!cols"] = yo;
      }
      if (_s.length > 0) {
        Te["!rows"] = _s;
      }
      if (p["!id"][Te["!legrel"]]) {
        Te["!legdrawel"] = p["!id"][Te["!legrel"]];
      }
      return Te;
    }(r, p, o, _, V, Y, ee);
  } else {
    return function ep(r, c, o, p, _, V, Y) {
      if (!r) {
        return r;
      }
      p ||= {
        "!id": {}
      };
      var ee = {};
      if (c.dense) {
        ee["!data"] = [];
      }
      var Te = {
        s: {
          r: 2000000,
          c: 2000000
        },
        e: {
          r: 0,
          c: 0
        }
      };
      var Ne = "";
      var ze = "";
      var Ft = r.match(M_);
      if (Ft) {
        Ne = r.slice(0, Ft.index);
        ze = r.slice(Ft.index + Ft[0].length);
      } else {
        Ne = ze = r;
      }
      var _t = Ne.match(dd);
      if (_t) {
        Jc(_t[0], 0, _, o);
      } else if (_t = Ne.match(Py)) {
        (function Fp(r, c, o, p, _) {
          Jc(r.slice(0, r.indexOf(">")), 0, p, _);
        })(_t[0], 0, 0, _, o);
      }
      var Ot = (Ne.match(/<(?:\w*:)?dimension/) || {
        index: -1
      }).index;
      if (Ot > 0) {
        var zt = Ne.slice(Ot, Ot + 50).match(Kv);
        if (zt && (!c || !c.nodim)) {
          (function km(r, c) {
            var o = Ps(c);
            if (o.s.r <= o.e.r && o.s.c <= o.e.c && o.s.r >= 0 && o.s.c >= 0) {
              r["!ref"] = $o(o);
            }
          })(ee, zt[1]);
        }
      }
      var nn = Ne.match(Fg);
      if (nn && nn[1]) {
        (function Jv(r, c) {
          c.Views ||= [{}];
          (r.match(Y0) || []).forEach(function (o, p) {
            var _ = sr(o);
            c.Views[p] ||= {};
            if (+_.zoomScale) {
              c.Views[p].zoom = +_.zoomScale;
            }
            if (_.rightToLeft && tr(_.rightToLeft)) {
              c.Views[p].RTL = true;
            }
          });
        })(nn[1], _);
      }
      var Pt = [];
      if (c.cellStyles) {
        var rn = Ne.match(Ku);
        if (rn) {
          (function Iy(r, c) {
            for (var o = false, p = 0; p != c.length; ++p) {
              var _ = sr(c[p], true);
              _.hidden &&= tr(_.hidden);
              var V = parseInt(_.min, 10) - 1;
              var Y = parseInt(_.max, 10) - 1;
              if (_.outlineLevel) {
                _.level = +_.outlineLevel || 0;
              }
              delete _.min;
              delete _.max;
              _.width = +_.width;
              if (!o && _.width) {
                o = true;
                sg(_.width);
              }
              Df(_);
              for (; V <= Y;) {
                r[V++] = Vs(_);
              }
            }
          })(Pt, rn);
        }
      }
      if (Ft) {
        A(Ft[1], ee, c, Te, V, Y, _);
      }
      var yn = ze.match(Rg);
      if (yn) {
        ee["!autofilter"] = function W0(r) {
          return {
            ref: (r.match(/ref="([^"]*)"/) || [])[1]
          };
        }(yn[0]);
      }
      var un = [];
      var ai = ze.match(Ig);
      if (ai) {
        for (Ot = 0; Ot != ai.length; ++Ot) {
          un[Ot] = Ps(ai[Ot].slice(ai[Ot].indexOf("\"") + 1));
        }
      }
      var Ni = ze.match(ih);
      if (Ni) {
        (function Th(r, c, o) {
          for (var p = r["!data"] != null, _ = 0; _ != c.length; ++_) {
            var V = sr(Ns(c[_]), true);
            if (!V.ref) {
              return;
            }
            var Y = ((o || {})["!id"] || [])[V.id];
            if (Y) {
              V.Target = Y.Target;
              if (V.location) {
                V.Target += "#" + Rr(V.location);
              }
            } else {
              V.Target = "#" + Rr(V.location);
              Y = {
                Target: V.Target,
                TargetMode: "Internal"
              };
            }
            V.Rel = Y;
            if (V.tooltip) {
              V.Tooltip = V.tooltip;
              delete V.tooltip;
            }
            for (var ee = Ps(V.ref), Te = ee.s.r; Te <= ee.e.r; ++Te) {
              for (var Ne = ee.s.c; Ne <= ee.e.c; ++Ne) {
                var ze = jo(Ne) + Da(Te);
                if (p) {
                  r["!data"][Te] ||= [];
                  r["!data"][Te][Ne] ||= {
                    t: "z",
                    v: undefined
                  };
                  r["!data"][Te][Ne].l = V;
                } else {
                  r[ze] ||= {
                    t: "z",
                    v: undefined
                  };
                  r[ze].l = V;
                }
              }
            }
          }
        })(ee, Ni, p);
      }
      var Ln;
      var or = ze.match(jv);
      if (or) {
        ee["!margins"] = function H0(r) {
          var c = {};
          ["left", "right", "top", "bottom", "header", "footer"].forEach(function (o) {
            if (r[o]) {
              c[o] = parseFloat(r[o]);
            }
          });
          return c;
        }(sr(or[0]));
      }
      if (Ln = ze.match(/legacyDrawing r:id="(.*?)"/)) {
        ee["!legrel"] = Ln[1];
      }
      if (c && c.nodim) {
        Te.s.c = Te.s.r = 0;
      }
      if (!ee["!ref"] && Te.e.c >= Te.s.c && Te.e.r >= Te.s.r) {
        ee["!ref"] = $o(Te);
      }
      if (c.sheetRows > 0 && ee["!ref"]) {
        var Jn = Ps(ee["!ref"]);
        if (c.sheetRows <= +Jn.e.r) {
          Jn.e.r = c.sheetRows - 1;
          if (Jn.e.r > Te.e.r) {
            Jn.e.r = Te.e.r;
          }
          if (Jn.e.r < Jn.s.r) {
            Jn.s.r = Jn.e.r;
          }
          if (Jn.e.c > Te.e.c) {
            Jn.e.c = Te.e.c;
          }
          if (Jn.e.c < Jn.s.c) {
            Jn.s.c = Jn.e.c;
          }
          ee["!fullref"] = ee["!ref"];
          ee["!ref"] = $o(Jn);
        }
      }
      if (Pt.length > 0) {
        ee["!cols"] = Pt;
      }
      if (un.length > 0) {
        ee["!merges"] = un;
      }
      if (p["!id"][ee["!legrel"]]) {
        ee["!legdrawel"] = p["!id"][ee["!legrel"]];
      }
      return ee;
    }(r, p, o, _, V, Y, ee);
  }
}
var d;
var R = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
var e = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function n(r, c) {
  var o = r.split(/\s+/);
  var p = [];
  if (!c) {
    p[0] = o[0];
  }
  if (o.length === 1) {
    return p;
  }
  var V;
  var Y;
  var Te;
  var _ = r.match(R);
  if (_) {
    for (Te = 0; Te != _.length; ++Te) {
      if ((Y = (V = _[Te].match(e))[1].indexOf(":")) === -1) {
        p[V[1]] = V[2].slice(1, V[2].length - 1);
      } else {
        p[V[1].slice(0, 6) === "xmlns:" ? "xmlns" + V[1].slice(6) : V[1].slice(Y + 1)] = V[2].slice(1, V[2].length - 1);
      }
    }
  }
  return p;
}
function s(r) {
  var o = {};
  if (r.split(/\s+/).length === 1) {
    return o;
  }
  var _;
  var V;
  var ee;
  var p = r.match(R);
  if (p) {
    for (ee = 0; ee != p.length; ++ee) {
      if ((V = (_ = p[ee].match(e))[1].indexOf(":")) === -1) {
        o[_[1]] = _[2].slice(1, _[2].length - 1);
      } else {
        o[_[1].slice(0, 6) === "xmlns:" ? "xmlns" + _[1].slice(6) : _[1].slice(V + 1)] = _[2].slice(1, _[2].length - 1);
      }
    }
  }
  return o;
}
function P(r, c, o, p) {
  var _ = p;
  switch ((o[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      _ = tr(p);
      break;
    case "i2":
    case "int":
      _ = parseInt(p, 10);
      break;
    case "r4":
    case "float":
      _ = parseFloat(p);
      break;
    case "date":
    case "dateTime.tz":
      _ = Rs(p);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + o[0]);
  }
  r[Rr(c)] = _;
}
function Ae(r, c, o) {
  if (o.cellStyles && c.Interior) {
    var p = c.Interior;
    if (p.Pattern) {
      p.patternType = Ev[p.Pattern] || p.Pattern;
    }
  }
  r[c.ID] = c;
}
function Ve(r, c, o, p, _, V, Y, ee, Te, Ne, ze) {
  var Ft = "General";
  var _t = p.StyleID;
  var Ot = {};
  Ne = Ne || {};
  var zt = [];
  var nn = 0;
  if (_t === undefined && ee) {
    _t = ee.StyleID;
  }
  if (_t === undefined && Y) {
    _t = Y.StyleID;
  }
  for (; V[_t] !== undefined && (V[_t].nf && (Ft = V[_t].nf), V[_t].Interior && zt.push(V[_t].Interior), V[_t].Parent);) {
    _t = V[_t].Parent;
  }
  switch (o.Type) {
    case "Boolean":
      p.t = "b";
      p.v = tr(r);
      break;
    case "String":
      p.t = "s";
      p.r = gn(Rr(r));
      p.v = r.indexOf("<") > -1 ? Rr(c || r).replace(/<.*?>/g, "") : p.r;
      break;
    case "DateTime":
      if (r.slice(-1) != "Z") {
        r += "Z";
      }
      p.v = So(Rs(r, ze), ze);
      if (p.v != p.v) {
        p.v = Rr(r);
      }
      if (!Ft || Ft == "General") {
        Ft = "yyyy-mm-dd";
      }
    case "Number":
      if (p.v === undefined) {
        p.v = +r;
      }
      p.t ||= "n";
      break;
    case "Error":
      p.t = "e";
      p.v = ri[r];
      if (Ne.cellText !== false) {
        p.w = r;
      }
      break;
    default:
      if (r == "" && c == "") {
        p.t = "z";
      } else {
        p.t = "s";
        p.v = gn(c || r);
      }
  }
  (function z(r, c, o, p) {
    if (r.t !== "z") {
      if (!o || o.cellText !== false) {
        try {
          r.w = r.t === "e" ? r.w || On[r.v] : c === "General" ? r.t === "n" ? (r.v | 0) === r.v ? r.v.toString(10) : Ar(r.v) : vr(r.v) : function h(r, c, o) {
            var p = d[r] || Rr(r);
            if (p === "General") {
              return vr(c);
            } else {
              return Zr(p, c, {
                date1904: !!o
              });
            }
          }(c || "General", r.v, p);
        } catch (Y) {
          if (o.WTF) {
            throw Y;
          }
        }
      }
      try {
        var _ = d[c] || c || "General";
        if (o.cellNF) {
          r.z = _;
        }
        if (o.cellDates && r.t == "n" && No(_)) {
          var V = Si(r.v + (p ? 1462 : 0));
          if (V) {
            r.t = "d";
            r.v = new Date(Date.UTC(V.y, V.m - 1, V.d, V.H, V.M, V.S, V.u));
          }
        }
      } catch (Y) {
        if (o.WTF) {
          throw Y;
        }
      }
    }
  })(p, Ft, Ne, ze);
  if (Ne.cellFormula !== false) {
    if (p.Formula) {
      var Pt = Rr(p.Formula);
      if (Pt.charCodeAt(0) == 61) {
        Pt = Pt.slice(1);
      }
      p.f = Qh(Pt, _);
      delete p.Formula;
      if (p.ArrayRange == "RC") {
        p.F = Qh("RC:RC", _);
      } else if (p.ArrayRange) {
        p.F = Qh(p.ArrayRange, _);
        Te.push([Ps(p.F), p.F]);
      }
    } else {
      for (nn = 0; nn < Te.length; ++nn) {
        if (_.r >= Te[nn][0].s.r && _.r <= Te[nn][0].e.r && _.c >= Te[nn][0].s.c && _.c <= Te[nn][0].e.c) {
          p.F = Te[nn][1];
        }
      }
    }
  }
  if (Ne.cellStyles) {
    zt.forEach(function (rn) {
      if (!Ot.patternType && rn.patternType) {
        Ot.patternType = rn.patternType;
      }
    });
    p.s = Ot;
  }
  if (p.StyleID !== undefined) {
    p.ixfe = p.StyleID;
  }
}
function Tt(r) {
  if (Bi.indexOf("_xlnm." + r) > -1) {
    return "_xlnm." + r;
  } else {
    return r;
  }
}
function Vt(r) {
  r.t = r.v || "";
  r.t = r.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  r.v = r.w = r.ixfe = undefined;
}
function Hn(r, c) {
  var o = c || {};
  Ko();
  var p = he(Fn(r));
  if (o.type == "binary" || o.type == "array" || o.type == "base64") {
    p = Ns(p);
  }
  var _ = p.slice(0, 1024).toLowerCase();
  var V = false;
  if (((_ = _.replace(/".*?"/g, "")).indexOf(">") & 1023) > Math.min(_.indexOf(",") & 1023, _.indexOf(";") & 1023)) {
    var Y = Vs(o);
    Y.type = "string";
    return Xo.to_workbook(p, Y);
  }
  if (_.indexOf("<?xml") == -1) {
    ["html", "table", "head", "meta", "script", "style", "div"].forEach(function (ul) {
      if (_.indexOf("<" + ul) >= 0) {
        V = true;
      }
    });
  }
  if (V) {
    return function zb(r, c) {
      var o = r.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
      if (!o || o.length == 0) {
        throw new Error("Invalid HTML: could not find <table>");
      }
      if (o.length == 1) {
        var p = cc(PE(o[0], c), c);
        p.bookType = "html";
        return p;
      }
      var _ = X_();
      o.forEach(function (V, Y) {
        y_(_, PE(V, c), "Sheet" + (Y + 1));
      });
      _.bookType = "html";
      return _;
    }(p, o);
  }
  d = {
    "General Number": "General",
    "General Date": Kt[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": Kt[15],
    "Short Date": Kt[14],
    "Long Time": Kt[19],
    "Medium Time": Kt[18],
    "Short Time": Kt[20],
    Currency: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
    Fixed: Kt[2],
    Standard: Kt[4],
    Percent: Kt[10],
    Scientific: Kt[11],
    "Yes/No": "\"Yes\";\"Yes\";\"No\";@",
    "True/False": "\"True\";\"True\";\"False\";@",
    "On/Off": "\"Yes\";\"Yes\";\"No\";@"
  };
  var ee;
  var Ne;
  var Te = [];
  var ze = {};
  var Ft = [];
  var _t = {};
  var Ot = "";
  if (o.dense) {
    _t["!data"] = [];
  }
  var ds;
  var zt = {};
  var nn = {};
  var Pt = n("<Data ss:Type=\"String\">");
  var rn = 0;
  var yn = 0;
  var un = 0;
  var ai = {
    s: {
      r: 2000000,
      c: 2000000
    },
    e: {
      r: 0,
      c: 0
    }
  };
  var Ni = {};
  var or = {};
  var Ln = "";
  var Jn = 0;
  var yi = [];
  var mi = {};
  var Fi = {};
  var ji = 0;
  var Dr = [];
  var yo = [];
  var _s = {};
  var ra = [];
  var Ua = false;
  var Ul = [];
  var os = [];
  var Ba = {};
  var hr = 0;
  var oo = 0;
  var as = {
    Sheets: [],
    WBProps: {
      date1904: false
    }
  };
  var Lo = {};
  ci.lastIndex = 0;
  p = p.replace(/<!--([\s\S]*?)-->/gm, "");
  for (var Ro = ""; ee = ci.exec(p);) {
    switch (ee[3] = (Ro = ee[3]).toLowerCase()) {
      case "data":
        if (Ro == "data") {
          if (ee[1] === "/") {
            if ((Ne = Te.pop())[0] !== ee[3]) {
              throw new Error("Bad state: " + Ne.join("|"));
            }
          } else if (ee[0].charAt(ee[0].length - 2) !== "/") {
            Te.push([ee[3], true]);
          }
          break;
        }
        if (Te[Te.length - 1][1]) {
          break;
        }
        if (ee[1] === "/") {
          Ve(p.slice(rn, ee.index), Ln, Pt, Te[Te.length - 1][0] == "comment" ? _s : zt, {
            c: yn,
            r: un
          }, Ni, ra[yn], nn, Ul, o, as.WBProps.date1904);
        } else {
          Ln = "";
          Pt = n(ee[0]);
          rn = ee.index + ee[0].length;
        }
        break;
      case "cell":
        if (ee[1] === "/") {
          if (yo.length > 0) {
            zt.c = yo;
          }
          if ((!o.sheetRows || o.sheetRows > un) && zt.v !== undefined) {
            if (o.dense) {
              _t["!data"][un] ||= [];
              _t["!data"][un][yn] = zt;
            } else {
              _t[jo(yn) + Da(un)] = zt;
            }
          }
          if (zt.HRef) {
            zt.l = {
              Target: Rr(zt.HRef)
            };
            if (zt.HRefScreenTip) {
              zt.l.Tooltip = zt.HRefScreenTip;
            }
            delete zt.HRef;
            delete zt.HRefScreenTip;
          }
          if (zt.MergeAcross || zt.MergeDown) {
            hr = yn + (parseInt(zt.MergeAcross, 10) | 0);
            oo = un + (parseInt(zt.MergeDown, 10) | 0);
            if (hr > yn || oo > un) {
              yi.push({
                s: {
                  c: yn,
                  r: un
                },
                e: {
                  c: hr,
                  r: oo
                }
              });
            }
          }
          if (o.sheetStubs) {
            if (zt.MergeAcross || zt.MergeDown) {
              for (var va = yn; va <= hr; ++va) {
                for (var Xn = un; Xn <= oo; ++Xn) {
                  if (va > yn || Xn > un) {
                    if (o.dense) {
                      _t["!data"][Xn] ||= [];
                      _t["!data"][Xn][va] = {
                        t: "z"
                      };
                    } else {
                      _t[jo(va) + Da(Xn)] = {
                        t: "z"
                      };
                    }
                  }
                }
              }
              yn = hr + 1;
            } else {
              ++yn;
            }
          } else if (zt.MergeAcross) {
            yn = hr + 1;
          } else {
            ++yn;
          }
        } else {
          if ((zt = s(ee[0])).Index) {
            yn = +zt.Index - 1;
          }
          if (yn < ai.s.c) {
            ai.s.c = yn;
          }
          if (yn > ai.e.c) {
            ai.e.c = yn;
          }
          if (ee[0].slice(-2) === "/>") {
            ++yn;
          }
          yo = [];
        }
        break;
      case "row":
        if (ee[1] === "/" || ee[0].slice(-2) === "/>") {
          if (un < ai.s.r) {
            ai.s.r = un;
          }
          if (un > ai.e.r) {
            ai.e.r = un;
          }
          if (ee[0].slice(-2) === "/>" && (nn = n(ee[0])).Index) {
            un = +nn.Index - 1;
          }
          yn = 0;
          ++un;
        } else {
          if ((nn = n(ee[0])).Index) {
            un = +nn.Index - 1;
          }
          Ba = {};
          if (nn.AutoFitHeight == "0" || nn.Height) {
            Ba.hpx = parseInt(nn.Height, 10);
            Ba.hpt = Jf(Ba.hpx);
            os[un] = Ba;
          }
          if (nn.Hidden == "1") {
            Ba.hidden = true;
            os[un] = Ba;
          }
        }
        break;
      case "worksheet":
        if (ee[1] === "/") {
          if ((Ne = Te.pop())[0] !== ee[3]) {
            throw new Error("Bad state: " + Ne.join("|"));
          }
          Ft.push(Ot);
          if (ai.s.r <= ai.e.r && ai.s.c <= ai.e.c) {
            _t["!ref"] = $o(ai);
            if (o.sheetRows && o.sheetRows <= ai.e.r) {
              _t["!fullref"] = _t["!ref"];
              ai.e.r = o.sheetRows - 1;
              _t["!ref"] = $o(ai);
            }
          }
          if (yi.length) {
            _t["!merges"] = yi;
          }
          if (ra.length > 0) {
            _t["!cols"] = ra;
          }
          if (os.length > 0) {
            _t["!rows"] = os;
          }
          ze[Ot] = _t;
        } else {
          ai = {
            s: {
              r: 2000000,
              c: 2000000
            },
            e: {
              r: 0,
              c: 0
            }
          };
          un = yn = 0;
          Te.push([ee[3], false]);
          Ne = n(ee[0]);
          Ot = Rr(Ne.Name);
          _t = {};
          if (o.dense) {
            _t["!data"] = [];
          }
          yi = [];
          Ul = [];
          os = [];
          as.Sheets.push(Lo = {
            name: Ot,
            Hidden: 0
          });
        }
        break;
      case "table":
        if (ee[1] === "/") {
          if ((Ne = Te.pop())[0] !== ee[3]) {
            throw new Error("Bad state: " + Ne.join("|"));
          }
        } else {
          if (ee[0].slice(-2) == "/>") {
            break;
          }
          Te.push([ee[3], false]);
          ra = [];
          Ua = false;
        }
        break;
      case "style":
        if (ee[1] === "/") {
          Ae(Ni, or, o);
        } else {
          or = n(ee[0]);
        }
        break;
      case "numberformat":
        or.nf = Rr(n(ee[0]).Format || "General");
        if (d[or.nf]) {
          or.nf = d[or.nf];
        }
        for (var Pi = 0; Pi != 392 && Kt[Pi] != or.nf; ++Pi);
        if (Pi == 392) {
          for (Pi = 57; Pi != 392; ++Pi) {
            if (Kt[Pi] == null) {
              la(or.nf, Pi);
              break;
            }
          }
        }
        break;
      case "column":
        if (Te[Te.length - 1][0] !== "table" || ee[1] === "/") {
          break;
        }
        if ((ds = n(ee[0])).Hidden) {
          ds.hidden = true;
          delete ds.Hidden;
        }
        if (ds.Width) {
          ds.wpx = parseInt(ds.Width, 10);
        }
        if (!Ua && ds.wpx > 10) {
          Ua = true;
          Ec = 6;
          for (var bi = 0; bi < ra.length; ++bi) {
            if (ra[bi]) {
              Df(ra[bi]);
            }
          }
        }
        if (Ua) {
          Df(ds);
        }
        ra[ds.Index - 1 || ra.length] = ds;
        for (var vi = 0; vi < +ds.Span; ++vi) {
          ra[ra.length] = Vs(ds);
        }
        break;
      case "namedrange":
        if (ee[1] === "/") {
          break;
        }
        as.Names ||= [];
        var Cr = sr(ee[0]);
        var jn = {
          Name: Tt(Cr.Name),
          Ref: Qh(Cr.RefersTo.slice(1), {
            r: 0,
            c: 0
          })
        };
        if (as.Sheets.length > 0) {
          jn.Sheet = as.Sheets.length - 1;
        }
        as.Names.push(jn);
        break;
      case "namedcell":
      case "b":
      case "i":
      case "u":
      case "s":
      case "em":
      case "h2":
      case "h3":
      case "sub":
      case "sup":
      case "span":
      case "alignment":
      case "borders":
      case "border":
      case "protection":
      case "paragraphs":
      case "name":
      case "pixelsperinch":
      case "null":
        break;
      case "font":
        if (ee[0].slice(-2) === "/>") {
          break;
        }
        if (ee[1] === "/") {
          Ln += p.slice(Jn, ee.index);
        } else {
          Jn = ee.index + ee[0].length;
        }
        break;
      case "interior":
        if (!o.cellStyles) {
          break;
        }
        or.Interior = n(ee[0]);
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (ee[0].slice(-2) === "/>") {
          break;
        }
        if (ee[1] === "/") {
          sd(mi, Ro, p.slice(ji, ee.index));
        } else {
          ji = ee.index + ee[0].length;
        }
        break;
      case "styles":
      case "workbook":
        if (ee[1] === "/") {
          if ((Ne = Te.pop())[0] !== ee[3]) {
            throw new Error("Bad state: " + Ne.join("|"));
          }
        } else {
          Te.push([ee[3], false]);
        }
        break;
      case "comment":
        if (ee[1] === "/") {
          if ((Ne = Te.pop())[0] !== ee[3]) {
            throw new Error("Bad state: " + Ne.join("|"));
          }
          Vt(_s);
          yo.push(_s);
        } else {
          Te.push([ee[3], false]);
          if (!tr((Ne = n(ee[0])).ShowAlways || "0")) {
            yo.hidden = true;
          }
          _s = {
            a: Ne.Author
          };
        }
        break;
      case "autofilter":
        if (ee[1] === "/") {
          if ((Ne = Te.pop())[0] !== ee[3]) {
            throw new Error("Bad state: " + Ne.join("|"));
          }
        } else if (ee[0].charAt(ee[0].length - 2) !== "/") {
          var fo = n(ee[0]);
          _t["!autofilter"] = {
            ref: Qh(fo.Range).replace(/\$/g, "")
          };
          Te.push([ee[3], true]);
        }
        break;
      case "datavalidation":
        if (ee[1] === "/") {
          if ((Ne = Te.pop())[0] !== ee[3]) {
            throw new Error("Bad state: " + Ne.join("|"));
          }
        } else if (ee[0].charAt(ee[0].length - 2) !== "/") {
          Te.push([ee[3], true]);
        }
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (ee[1] === "/") {
          if ((Ne = Te.pop())[0] !== ee[3]) {
            throw new Error("Bad state: " + Ne.join("|"));
          }
        } else if (ee[0].charAt(ee[0].length - 2) !== "/") {
          Te.push([ee[3], true]);
        }
        break;
      default:
        if (Te.length == 0 && ee[3] == "document" || Te.length == 0 && ee[3] == "uof") {
          return tE(p, o);
        }
        var Ms = true;
        switch (Te[Te.length - 1][0]) {
          case "officedocumentsettings":
            switch (ee[3]) {
              case "allowpng":
              case "removepersonalinformation":
              case "downloadcomponents":
              case "locationofcomponents":
              case "colors":
              case "color":
              case "index":
              case "rgb":
              case "targetscreensize":
              case "readonlyrecommended":
                break;
              default:
                Ms = false;
            }
            break;
          case "componentoptions":
            switch (ee[3]) {
              case "toolbar":
              case "hideofficelogo":
              case "spreadsheetautofit":
              case "label":
              case "caption":
              case "maxheight":
              case "maxwidth":
              case "nextsheetnumber":
                break;
              default:
                Ms = false;
            }
            break;
          case "excelworkbook":
            switch (ee[3]) {
              case "date1904":
                as.WBProps.date1904 = true;
                break;
              case "hidehorizontalscrollbar":
              case "hideverticalscrollbar":
              case "hideworkbooktabs":
              case "windowheight":
              case "windowwidth":
              case "windowtopx":
              case "windowtopy":
              case "tabratio":
              case "protectstructure":
              case "protectwindow":
              case "protectwindows":
              case "activesheet":
              case "displayinknotes":
              case "firstvisiblesheet":
              case "supbook":
              case "sheetname":
              case "sheetindex":
              case "sheetindexfirst":
              case "sheetindexlast":
              case "dll":
              case "acceptlabelsinformulas":
              case "donotsavelinkvalues":
              case "iteration":
              case "maxiterations":
              case "maxchange":
              case "path":
              case "xct":
              case "count":
              case "selectedsheets":
              case "calculation":
              case "uncalced":
              case "startupprompt":
              case "crn":
              case "externname":
              case "formula":
              case "colfirst":
              case "collast":
              case "wantadvise":
              case "boolean":
              case "error":
              case "text":
              case "ole":
              case "noautorecover":
              case "publishobjects":
              case "donotcalculatebeforesave":
              case "number":
              case "refmoder1c1":
              case "embedsavesmarttags":
                break;
              default:
                Ms = false;
            }
            break;
          case "workbookoptions":
            switch (ee[3]) {
              case "owcversion":
              case "height":
              case "width":
                break;
              default:
                Ms = false;
            }
            break;
          case "worksheetoptions":
            switch (ee[3]) {
              case "visible":
                if (ee[0].slice(-2) !== "/>") {
                  if (ee[1] === "/") {
                    switch (p.slice(ji, ee.index)) {
                      case "SheetHidden":
                        Lo.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        Lo.Hidden = 2;
                    }
                  } else {
                    ji = ee.index + ee[0].length;
                  }
                }
                break;
              case "header":
                if (!_t["!margins"]) {
                  hf(_t["!margins"] = {}, "xlml");
                }
                if (!isNaN(+sr(ee[0]).Margin)) {
                  _t["!margins"].header = +sr(ee[0]).Margin;
                }
                break;
              case "footer":
                if (!_t["!margins"]) {
                  hf(_t["!margins"] = {}, "xlml");
                }
                if (!isNaN(+sr(ee[0]).Margin)) {
                  _t["!margins"].footer = +sr(ee[0]).Margin;
                }
                break;
              case "pagemargins":
                var ps = sr(ee[0]);
                if (!_t["!margins"]) {
                  hf(_t["!margins"] = {}, "xlml");
                }
                if (!isNaN(+ps.Top)) {
                  _t["!margins"].top = +ps.Top;
                }
                if (!isNaN(+ps.Left)) {
                  _t["!margins"].left = +ps.Left;
                }
                if (!isNaN(+ps.Right)) {
                  _t["!margins"].right = +ps.Right;
                }
                if (!isNaN(+ps.Bottom)) {
                  _t["!margins"].bottom = +ps.Bottom;
                }
                break;
              case "displayrighttoleft":
                as.Views ||= [];
                as.Views[0] ||= {};
                as.Views[0].RTL = true;
                break;
              case "freezepanes":
              case "frozennosplit":
              case "splithorizontal":
              case "splitvertical":
              case "donotdisplaygridlines":
              case "activerow":
              case "activecol":
              case "toprowbottompane":
              case "leftcolumnrightpane":
              case "unsynced":
              case "print":
              case "printerrors":
              case "panes":
              case "scale":
              case "pane":
              case "number":
              case "layout":
              case "pagesetup":
              case "selected":
              case "protectobjects":
              case "enableselection":
              case "protectscenarios":
              case "validprinterinfo":
              case "horizontalresolution":
              case "verticalresolution":
              case "numberofcopies":
              case "activepane":
              case "toprowvisible":
              case "leftcolumnvisible":
              case "fittopage":
              case "rangeselection":
              case "papersizeindex":
              case "pagelayoutzoom":
              case "pagebreakzoom":
              case "filteron":
              case "fitwidth":
              case "fitheight":
              case "commentslayout":
              case "zoom":
              case "lefttoright":
              case "gridlines":
              case "allowsort":
              case "allowfilter":
              case "allowinsertrows":
              case "allowdeleterows":
              case "allowinsertcols":
              case "allowdeletecols":
              case "allowinserthyperlinks":
              case "allowformatcells":
              case "allowsizecols":
              case "allowsizerows":
              case "tabcolorindex":
              case "donotdisplayheadings":
              case "showpagelayoutzoom":
              case "blackandwhite":
              case "donotdisplayzeros":
              case "displaypagebreak":
              case "rowcolheadings":
              case "donotdisplayoutline":
              case "noorientation":
              case "allowusepivottables":
              case "zeroheight":
              case "viewablerange":
              case "selection":
              case "protectcontents":
                break;
              case "nosummaryrowsbelowdetail":
                _t["!outline"] ||= {};
                _t["!outline"].above = true;
                break;
              case "nosummarycolumnsrightdetail":
                _t["!outline"] ||= {};
                _t["!outline"].left = true;
                break;
              default:
                Ms = false;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (ee[3]) {
              case "immediateitemsondrop":
              case "showpagemultipleitemlabel":
              case "compactrowindent":
              case "location":
              case "pivotfield":
              case "orientation":
              case "layoutform":
              case "layoutsubtotallocation":
              case "layoutcompactrow":
              case "position":
              case "pivotitem":
              case "datatype":
              case "datafield":
              case "sourcename":
              case "parentfield":
              case "ptlineitems":
              case "ptlineitem":
              case "countofsameitems":
              case "item":
              case "itemtype":
              case "ptsource":
              case "cacheindex":
              case "consolidationreference":
              case "filename":
              case "reference":
              case "nocolumngrand":
              case "norowgrand":
              case "blanklineafteritems":
              case "hidden":
              case "subtotal":
              case "basefield":
              case "mapchilditems":
              case "function":
              case "refreshonfileopen":
              case "printsettitles":
              case "mergelabels":
              case "defaultversion":
              case "refreshname":
              case "refreshdate":
              case "refreshdatecopy":
              case "versionlastrefresh":
              case "versionlastupdate":
              case "versionupdateablemin":
              case "versionrefreshablemin":
              case "calculation":
                break;
              default:
                Ms = false;
            }
            break;
          case "pagebreaks":
            switch (ee[3]) {
              case "colbreaks":
              case "colbreak":
              case "rowbreaks":
              case "rowbreak":
              case "colstart":
              case "colend":
              case "rowend":
                break;
              default:
                Ms = false;
            }
            break;
          case "autofilter":
            switch (ee[3]) {
              case "autofiltercolumn":
              case "autofiltercondition":
              case "autofilterand":
              case "autofilteror":
                break;
              default:
                Ms = false;
            }
            break;
          case "querytable":
            switch (ee[3]) {
              case "id":
              case "autoformatfont":
              case "autoformatpattern":
              case "querysource":
              case "querytype":
              case "enableredirections":
              case "refreshedinxl9":
              case "urlstring":
              case "htmltables":
              case "connection":
              case "commandtext":
              case "refreshinfo":
              case "notitles":
              case "nextid":
              case "columninfo":
              case "overwritecells":
              case "donotpromptforfile":
              case "textwizardsettings":
              case "source":
              case "number":
              case "decimal":
              case "thousandseparator":
              case "trailingminusnumbers":
              case "formatsettings":
              case "fieldtype":
              case "delimiters":
              case "tab":
              case "comma":
              case "autoformatname":
              case "versionlastedit":
              case "versionlastrefresh":
                break;
              default:
                Ms = false;
            }
            break;
          case "datavalidation":
            switch (ee[3]) {
              case "range":
              case "type":
              case "min":
              case "max":
              case "sort":
              case "descending":
              case "order":
              case "casesensitive":
              case "value":
              case "errorstyle":
              case "errormessage":
              case "errortitle":
              case "inputmessage":
              case "inputtitle":
              case "combohide":
              case "inputhide":
              case "condition":
              case "qualifier":
              case "useblank":
              case "value1":
              case "value2":
              case "format":
              case "cellrangelist":
                break;
              default:
                Ms = false;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (ee[3]) {
              case "range":
              case "type":
              case "min":
              case "max":
              case "sort":
              case "descending":
              case "order":
              case "casesensitive":
              case "value":
              case "errorstyle":
              case "errormessage":
              case "errortitle":
              case "cellrangelist":
              case "inputmessage":
              case "inputtitle":
              case "combohide":
              case "inputhide":
              case "condition":
              case "qualifier":
              case "useblank":
              case "value1":
              case "value2":
              case "format":
                break;
              default:
                Ms = false;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (ee[3]) {
              case "map":
              case "entry":
              case "range":
              case "xpath":
              case "field":
              case "xsdtype":
              case "filteron":
              case "aggregate":
              case "elementtype":
              case "attributetype":
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
              case "row":
                break;
              default:
                Ms = false;
            }
            break;
          case "smarttags":
            break;
          default:
            Ms = false;
        }
        if (Ms || ee[3].match(/!\[CDATA/)) {
          break;
        }
        if (!Te[Te.length - 1][1]) {
          throw "Unrecognized tag: " + ee[3] + "|" + Te.join("|");
        }
        if (Te[Te.length - 1][0] === "customdocumentproperties") {
          if (ee[0].slice(-2) === "/>") {
            break;
          }
          if (ee[1] === "/") {
            P(Fi, Ro, Dr, p.slice(ji, ee.index));
          } else {
            Dr = ee;
            ji = ee.index + ee[0].length;
          }
          break;
        }
        if (o.WTF) {
          throw "Unrecognized tag: " + ee[3] + "|" + Te.join("|");
        }
    }
  }
  var $a = {};
  if (!o.bookSheets && !o.bookProps) {
    $a.Sheets = ze;
  }
  $a.SheetNames = Ft;
  $a.Workbook = as;
  $a.SSF = Vs(Kt);
  $a.Props = mi;
  $a.Custprops = Fi;
  $a.bookType = "xlml";
  return $a;
}
function Ci(r, c) {
  I1(c = c || {});
  switch (c.type || "base64") {
    case "base64":
      return Hn(Ee(r), c);
    case "binary":
    case "buffer":
    case "file":
      return Hn(r, c);
    case "array":
      return Hn(Et(r), c);
  }
}
function uo(r) {
  return wt("NamedRange", null, {
    "ss:Name": r.Name.slice(0, 6) == "_xlnm." ? r.Name.slice(6) : r.Name,
    "ss:RefersTo": "=" + Eg(r.Ref, {
      r: 0,
      c: 0
    })
  });
}
function d_(r, c, o, p, _, V, Y) {
  if (!r || r.v == null && r.f == null) {
    return "";
  }
  var ee = {};
  if (r.f) {
    ee["ss:Formula"] = "=" + Mr(Eg(r.f, Y));
  }
  if (r.F && r.F.slice(0, c.length) == c) {
    var Te = Qo(r.F.slice(c.length + 1));
    ee["ss:ArrayRange"] = "RC:R" + (Te.r == Y.r ? "" : "[" + (Te.r - Y.r) + "]") + "C" + (Te.c == Y.c ? "" : "[" + (Te.c - Y.c) + "]");
  }
  if (r.l && r.l.Target) {
    ee["ss:HRef"] = Mr(r.l.Target);
    if (r.l.Tooltip) {
      ee["x:HRefScreenTip"] = Mr(r.l.Tooltip);
    }
  }
  if (o["!merges"]) {
    for (var Ne = o["!merges"], ze = 0; ze != Ne.length; ++ze) {
      if (Ne[ze].s.c == Y.c && Ne[ze].s.r == Y.r) {
        if (Ne[ze].e.c > Ne[ze].s.c) {
          ee["ss:MergeAcross"] = Ne[ze].e.c - Ne[ze].s.c;
        }
        if (Ne[ze].e.r > Ne[ze].s.r) {
          ee["ss:MergeDown"] = Ne[ze].e.r - Ne[ze].s.r;
        }
      }
    }
  }
  var Ft = "";
  var _t = "";
  switch (r.t) {
    case "z":
      if (!p.sheetStubs) {
        return "";
      }
      break;
    case "n":
      Ft = "Number";
      _t = String(r.v);
      break;
    case "b":
      Ft = "Boolean";
      _t = r.v ? "1" : "0";
      break;
    case "e":
      Ft = "Error";
      _t = On[r.v];
      break;
    case "d":
      Ft = "DateTime";
      _t = new Date(r.v).toISOString();
      if (r.z == null) {
        r.z = r.z || Kt[14];
      }
      break;
    case "s":
      Ft = "String";
      _t = function xt(r) {
        return (r + "").replace(el, function (o) {
          return sl[o];
        }).replace($t, function (o) {
          return "&#x" + o.charCodeAt(0).toString(16).toUpperCase() + ";";
        });
      }(r.v || "");
  }
  var Ot = Pg(p.cellXfs, r, p);
  ee["ss:StyleID"] = "s" + (21 + Ot);
  ee["ss:Index"] = Y.c + 1;
  var nn = r.t == "z" ? "" : "<Data ss:Type=\"" + Ft + "\">" + (r.v != null ? _t : "") + "</Data>";
  if ((r.c || []).length > 0) {
    nn += function N_(r) {
      return r.map(function (c) {
        var o = function wn(r) {
          return r.replace(/(\r\n|[\r\n])/g, "&#10;");
        }(c.t || "");
        var p = wt("ss:Data", o, {
          xmlns: "http://www.w3.org/TR/REC-html40"
        });
        var _ = {};
        if (c.a) {
          _["ss:Author"] = c.a;
        }
        if (!r.hidden) {
          _["ss:ShowAlways"] = "1";
        }
        return wt("Comment", p, _);
      }).join("");
    }(r.c);
  }
  return wt("Cell", nn, ee);
}
function f_(r, c) {
  var o = "<Row ss:Index=\"" + (r + 1) + "\"";
  if (c) {
    if (c.hpt && !c.hpx) {
      c.hpx = zd(c.hpt);
    }
    if (c.hpx) {
      o += " ss:AutoFitHeight=\"0\" ss:Height=\"" + c.hpx + "\"";
    }
    if (c.hidden) {
      o += " ss:Hidden=\"1\"";
    }
  }
  return o + ">";
}
function p_(r, c, o) {
  var p = [];
  var V = o.Sheets[o.SheetNames[r]];
  var Y = V ? function Bm(r, c, o, p) {
    if (!r || !((p || {}).Workbook || {}).Names) {
      return "";
    }
    for (var _ = p.Workbook.Names, V = [], Y = 0; Y < _.length; ++Y) {
      var ee = _[Y];
      if (ee.Sheet == o) {
        if (!ee.Name.match(/^_xlfn\./)) {
          V.push(uo(ee));
        }
      }
    }
    return V.join("");
  }(V, 0, r, o) : "";
  if (Y.length > 0) {
    p.push("<Names>" + Y + "</Names>");
  }
  Y = V ? function h_(r, c, o, p) {
    if (!r["!ref"]) {
      return "";
    }
    var _ = Ps(r["!ref"]);
    var V = r["!merges"] || [];
    var Y = 0;
    var ee = [];
    if (r["!cols"]) {
      r["!cols"].forEach(function (Pt, rn) {
        Df(Pt);
        var yn = !!Pt.width;
        var un = Ip(rn, Pt);
        var ai = {
          "ss:Index": rn + 1
        };
        if (yn) {
          ai["ss:Width"] = Rd(un.width);
        }
        if (Pt.hidden) {
          ai["ss:Hidden"] = "1";
        }
        ee.push(wt("Column", null, ai));
      });
    }
    for (var Te = r["!data"] != null, Ne = _.s.r; Ne <= _.e.r; ++Ne) {
      for (var ze = [f_(Ne, (r["!rows"] || [])[Ne])], Ft = _.s.c; Ft <= _.e.c; ++Ft) {
        var _t = false;
        for (Y = 0; Y != V.length; ++Y) {
          if (V[Y].s.c <= Ft && V[Y].s.r <= Ne && V[Y].e.c >= Ft && V[Y].e.r >= Ne) {
            if (V[Y].s.c != Ft || V[Y].s.r != Ne) {
              _t = true;
            }
            break;
          }
        }
        if (!_t) {
          var Ot = {
            r: Ne,
            c: Ft
          };
          var zt = jo(Ft) + Da(Ne);
          ze.push(d_(Te ? (r["!data"][Ne] || [])[Ft] : r[zt], zt, r, c, 0, 0, Ot));
        }
      }
      ze.push("</Row>");
      if (ze.length > 2) {
        ee.push(ze.join(""));
      }
    }
    return ee.join("");
  }(V, c) : "";
  if (Y.length > 0) {
    p.push("<Table>" + Y + "</Table>");
  }
  p.push(function e0(r, c, o, p) {
    if (!r) {
      return "";
    }
    var _ = [];
    if (r["!margins"]) {
      _.push("<PageSetup>");
      if (r["!margins"].header) {
        _.push(wt("Header", null, {
          "x:Margin": r["!margins"].header
        }));
      }
      if (r["!margins"].footer) {
        _.push(wt("Footer", null, {
          "x:Margin": r["!margins"].footer
        }));
      }
      _.push(wt("PageMargins", null, {
        "x:Bottom": r["!margins"].bottom || "0.75",
        "x:Left": r["!margins"].left || "0.7",
        "x:Right": r["!margins"].right || "0.7",
        "x:Top": r["!margins"].top || "0.75"
      }));
      _.push("</PageSetup>");
    }
    if (p && p.Workbook && p.Workbook.Sheets && p.Workbook.Sheets[o]) {
      if (p.Workbook.Sheets[o].Hidden) {
        _.push(wt("Visible", p.Workbook.Sheets[o].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
      } else {
        for (var V = 0; V < o && (!p.Workbook.Sheets[V] || p.Workbook.Sheets[V].Hidden); ++V);
        if (V == o) {
          _.push("<Selected/>");
        }
      }
    }
    if (((((p || {}).Workbook || {}).Views || [])[0] || {}).RTL) {
      _.push("<DisplayRightToLeft/>");
    }
    if (r["!protect"]) {
      _.push(Aa("ProtectContents", "True"));
      if (r["!protect"].objects) {
        _.push(Aa("ProtectObjects", "True"));
      }
      if (r["!protect"].scenarios) {
        _.push(Aa("ProtectScenarios", "True"));
      }
      if (r["!protect"].selectLockedCells == null || r["!protect"].selectLockedCells) {
        if (r["!protect"].selectUnlockedCells != null && !r["!protect"].selectUnlockedCells) {
          _.push(Aa("EnableSelection", "UnlockedCells"));
        }
      } else {
        _.push(Aa("EnableSelection", "NoSelection"));
      }
      [["formatCells", "AllowFormatCells"], ["formatColumns", "AllowSizeCols"], ["formatRows", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function (Y) {
        if (r["!protect"][Y[0]]) {
          _.push("<" + Y[1] + "/>");
        }
      });
    }
    if (_.length == 0) {
      return "";
    } else {
      return wt("WorksheetOptions", _.join(""), {
        xmlns: xi_x
      });
    }
  }(V, 0, r, o));
  if (V["!autofilter"]) {
    p.push("<AutoFilter x:Range=\"" + Eg(Su(V["!autofilter"].ref), {
      r: 0,
      c: 0
    }) + "\" xmlns=\"urn:schemas-microsoft-com:office:excel\"></AutoFilter>");
  }
  return p.join("");
}
function U_(r, c) {
  c ||= {};
  r.SSF ||= Vs(Kt);
  if (r.SSF) {
    Ko();
    ya(r.SSF);
    c.revssf = Ca(r.SSF);
    c.revssf[r.SSF[65535]] = 0;
    c.ssf = r.SSF;
    c.cellXfs = [];
    Pg(c.cellXfs, {}, {
      revssf: {
        General: 0
      }
    });
  }
  var o = [];
  o.push(function fr(r, c) {
    var o = [];
    if (r.Props) {
      o.push(function od(r, c) {
        var o = [];
        qs(au).map(function (p) {
          for (var _ = 0; _ < yl.length; ++_) {
            if (yl[_][1] == p) {
              return yl[_];
            }
          }
          for (_ = 0; _ < Yc.length; ++_) {
            if (Yc[_][1] == p) {
              return Yc[_];
            }
          }
          throw p;
        }).forEach(function (p) {
          if (r[p[1]] != null) {
            var _ = c && c.Props && c.Props[p[1]] != null ? c.Props[p[1]] : r[p[1]];
            if (p[2] === "date") {
              _ = new Date(_).toISOString().replace(/\.\d*Z/, "Z");
            }
            if (typeof _ == "number") {
              _ = String(_);
            } else if (_ === true || _ === false) {
              _ = _ ? "1" : "0";
            } else if (_ instanceof Date) {
              _ = new Date(_).toISOString().replace(/\.\d*Z/, "");
            }
            o.push(Aa(au[p[1]] || p[1], _));
          }
        });
        return wt("DocumentProperties", o.join(""), {
          xmlns: xi_o
        });
      }(r.Props, c));
    }
    if (r.Custprops) {
      o.push(function ql(r, c) {
        var o = ["Worksheets", "SheetNames"];
        var p = "CustomDocumentProperties";
        var _ = [];
        if (r) {
          qs(r).forEach(function (V) {
            if (Object.prototype.hasOwnProperty.call(r, V)) {
              for (var Y = 0; Y < yl.length; ++Y) {
                if (V == yl[Y][1]) {
                  return;
                }
              }
              for (Y = 0; Y < Yc.length; ++Y) {
                if (V == Yc[Y][1]) {
                  return;
                }
              }
              for (Y = 0; Y < o.length; ++Y) {
                if (V == o[Y]) {
                  return;
                }
              }
              var ee = r[V];
              var Te = "string";
              if (typeof ee == "number") {
                Te = "float";
                ee = String(ee);
              } else if (ee === true || ee === false) {
                Te = "boolean";
                ee = ee ? "1" : "0";
              } else {
                ee = String(ee);
              }
              _.push(wt(Xe(V), ee, {
                "dt:dt": Te
              }));
            }
          });
        }
        if (c) {
          qs(c).forEach(function (V) {
            if (Object.prototype.hasOwnProperty.call(c, V) && (!r || !Object.prototype.hasOwnProperty.call(r, V))) {
              var Y = c[V];
              var ee = "string";
              if (typeof Y == "number") {
                ee = "float";
                Y = String(Y);
              } else if (Y === true || Y === false) {
                ee = "boolean";
                Y = Y ? "1" : "0";
              } else if (Y instanceof Date) {
                ee = "dateTime.tz";
                Y = Y.toISOString();
              } else {
                Y = String(Y);
              }
              _.push(wt(Xe(V), Y, {
                "dt:dt": ee
              }));
            }
          });
        }
        return "<" + p + " xmlns=\"" + xi_o + "\">" + _.join("") + "</" + p + ">";
      }(r.Props, r.Custprops));
    }
    return o.join("");
  }(r, c));
  o.push(function ss(r) {
    if ((((r || {}).Workbook || {}).WBProps || {}).date1904) {
      return "<ExcelWorkbook xmlns=\"urn:schemas-microsoft-com:office:excel\"><Date1904/></ExcelWorkbook>";
    } else {
      return "";
    }
  }(r));
  o.push("");
  o.push("");
  for (var p = 0; p < r.SheetNames.length; ++p) {
    o.push(wt("Worksheet", p_(p, c, r), {
      "ss:Name": Mr(r.SheetNames[p])
    }));
  }
  o[2] = function vo(r, c) {
    var o = ["<Style ss:ID=\"Default\" ss:Name=\"Normal\"><NumberFormat/></Style>"];
    c.cellXfs.forEach(function (p, _) {
      var V = [];
      V.push(wt("NumberFormat", null, {
        "ss:Format": Mr(Kt[p.numFmtId])
      }));
      var Y = {
        "ss:ID": "s" + (21 + _)
      };
      o.push(wt("Style", V.join(""), Y));
    });
    return wt("Styles", o.join(""));
  }(0, c);
  o[3] = function Cu(r) {
    if (!((r || {}).Workbook || {}).Names) {
      return "";
    }
    for (var c = r.Workbook.Names, o = [], p = 0; p < c.length; ++p) {
      var _ = c[p];
      if (_.Sheet == null) {
        if (!_.Name.match(/^_xlfn\./)) {
          o.push(uo(_));
        }
      }
    }
    return wt("Names", o.join(""));
  }(r);
  return nr + wt("Workbook", o.join(""), {
    xmlns: xi_ss,
    "xmlns:o": xi_o,
    "xmlns:x": xi_x,
    "xmlns:ss": xi_ss,
    "xmlns:dt": "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
    "xmlns:html": "http://www.w3.org/TR/REC-html40"
  });
}
var Nb = [60, 1084, 2066, 2165, 2175];
function B_(r, c, o, p, _) {
  var V = p;
  var Y = [];
  var ee = o.slice(o.l, o.l + V);
  if (_ && _.enc && _.enc.insitu && ee.length > 0) {
    switch (r) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
      case 133:
        break;
      default:
        _.enc.insitu(ee);
    }
  }
  Y.push(ee);
  o.l += V;
  for (var Te = lo(o, o.l), Ne = Ny[Te], ze = 0; Ne != null && Nb.indexOf(Te) > -1;) {
    V = lo(o, o.l + 2);
    ze = o.l + 4;
    if (Te == 2066) {
      ze += 4;
    } else if (Te == 2165 || Te == 2175) {
      ze += 12;
    }
    ee = o.slice(ze, o.l + 4 + V);
    Y.push(ee);
    o.l += 4 + V;
    Ne = Ny[Te = lo(o, o.l)];
  }
  var Ft = St(Y);
  Vl(Ft, 0);
  var _t = 0;
  Ft.lens = [];
  for (var Ot = 0; Ot < Y.length; ++Ot) {
    Ft.lens.push(_t);
    _t += Y[Ot].length;
  }
  if (Ft.length < p) {
    throw "XLS Record 0x" + r.toString(16) + " Truncated: " + Ft.length + " < " + p;
  }
  return c.f(Ft, Ft.length, _);
}
function Vm(r, c, o) {
  if (r.t !== "z" && r.XF) {
    var p = 0;
    try {
      p = r.z || r.XF.numFmtId || 0;
      if (c.cellNF && r.z == null) {
        r.z = Kt[p];
      }
    } catch (V) {
      if (c.WTF) {
        throw V;
      }
    }
    if (!c || c.cellText !== false) {
      try {
        r.w = r.t === "e" ? r.w || On[r.v] : p === 0 || p == "General" ? r.t === "n" ? (r.v | 0) === r.v ? r.v.toString(10) : Ar(r.v) : vr(r.v) : Zr(p, r.v, {
          date1904: !!o,
          dateNF: c && c.dateNF
        });
      } catch (V) {
        if (c.WTF) {
          throw V;
        }
      }
    }
    if (c.cellDates && p && r.t == "n" && No(Kt[p] || String(p))) {
      var _ = Si(r.v + (o ? 1462 : 0));
      if (_) {
        r.t = "d";
        r.v = new Date(Date.UTC(_.y, _.m - 1, _.d, _.H, _.M, _.S, _.u));
      }
    }
  }
}
function A1(r, c, o) {
  return {
    v: r,
    ixfe: c,
    t: o
  };
}
var Z0_SI = "e0859ff2f94f6810ab9108002b27b3d9";
var Z0_DSI = "02d5cdd59c2e1b10939708002b2cf9ae";
function x1(r, c) {
  var o;
  var p;
  var _;
  var V;
  c ||= {};
  I1(c);
  G();
  if (c.codepage) {
    fe(c.codepage);
  }
  if (r.FullPaths) {
    if (Fr.find(r, "/encryption")) {
      throw new Error("File is password-protected");
    }
    o = Fr.find(r, "!CompObj");
    p = Fr.find(r, "/Workbook") || Fr.find(r, "/Book");
  } else {
    switch (c.type) {
      case "base64":
        r = Yt(Ee(r));
        break;
      case "binary":
        r = Yt(r);
        break;
      case "buffer":
        break;
      case "array":
        if (!Array.isArray(r)) {
          r = Array.prototype.slice.call(r);
        }
    }
    Vl(r, 0);
    p = {
      content: r
    };
  }
  if (o) {
    (function $c(r) {
      var c = {};
      var o = r.content;
      o.l = 28;
      c.AnsiUserType = o.read_shift(0, "lpstr-ansi");
      c.AnsiClipboardFormat = function Hd(r) {
        return Bc(r, 1);
      }(o);
      if (o.length - o.l <= 4) {
        return c;
      }
      var p = o.read_shift(4);
      if (p == 0 || p > 40 || (o.l -= 4, c.Reserved1 = o.read_shift(0, "lpstr-ansi"), o.length - o.l <= 4) || (p = o.read_shift(4)) !== 1907505652 || (c.UnicodeClipboardFormat = function ru(r) {
        return Bc(r, 2);
      }(o), (p = o.read_shift(4)) == 0 || p > 40)) {
        return c;
      }
      o.l -= 4;
      c.Reserved2 = o.read_shift(0, "lpwstr");
    })(o);
  }
  if (c.bookProps && !c.bookSheets) {
    _ = {};
  } else {
    var Y = ke ? "buffer" : "array";
    if (p && p.content) {
      _ = function Ub(r, c) {
        var o = {
          opts: {}
        };
        var p = {};
        var _ = {};
        if (c.dense) {
          _["!data"] = [];
        }
        var Ft;
        var Ot;
        var zt;
        var nn;
        var Pt;
        var un;
        var ai;
        var V = {};
        var Y = {};
        var ee = null;
        var Te = [];
        var Ne = "";
        var ze = {};
        var _t = "";
        var rn = {};
        var yn = [];
        var Ni = [];
        var or = [];
        var Ln = {
          Sheets: [],
          WBProps: {
            date1904: false
          },
          Views: [{}]
        };
        var Jn = {};
        var yi = false;
        function mi(Sl) {
          if (Sl < 8) {
            return jt[Sl];
          } else {
            return Sl < 64 && or[Sl - 8] || jt[Sl];
          }
        }
        function ji(Sl, Xa, nu) {
          if ((yi || hr <= 1) && (!nu.sheetRows || Sl.r < nu.sheetRows)) {
            if (nu.cellStyles && Xa.XF && Xa.XF.data) {
              (function (Sl, Xa, nu) {
                var Hg;
                var wu = Xa.XF.data;
                if (wu && wu.patternType && nu && nu.cellStyles) {
                  Xa.s = {};
                  Xa.s.patternType = wu.patternType;
                  if (Hg = Id(mi(wu.icvFore))) {
                    Xa.s.fgColor = {
                      rgb: Hg
                    };
                  }
                  if (Hg = Id(mi(wu.icvBack))) {
                    Xa.s.bgColor = {
                      rgb: Hg
                    };
                  }
                }
              })(0, Xa, nu);
            }
            delete Xa.ixfe;
            delete Xa.XF;
            Ft = Sl;
            _t = Eo(Sl);
            if (!Y || !Y.s || !Y.e) {
              Y = {
                s: {
                  r: 0,
                  c: 0
                },
                e: {
                  r: 0,
                  c: 0
                }
              };
            }
            if (Sl.r < Y.s.r) {
              Y.s.r = Sl.r;
            }
            if (Sl.c < Y.s.c) {
              Y.s.c = Sl.c;
            }
            if (Sl.r + 1 > Y.e.r) {
              Y.e.r = Sl.r + 1;
            }
            if (Sl.c + 1 > Y.e.c) {
              Y.e.c = Sl.c + 1;
            }
            if (nu.cellFormula && Xa.f) {
              for (var wu = 0; wu < yn.length; ++wu) {
                if (yn[wu][0].s.c <= Sl.c && yn[wu][0].s.r <= Sl.r && yn[wu][0].e.c >= Sl.c && yn[wu][0].e.r >= Sl.r) {
                  Xa.F = $o(yn[wu][0]);
                  if (yn[wu][0].s.c != Sl.c || yn[wu][0].s.r != Sl.r) {
                    delete Xa.f;
                  }
                  Xa.f &&= "" + eu(yn[wu][1], 0, Sl, os, Dr);
                  break;
                }
              }
            }
            if (nu.dense) {
              _["!data"][Sl.r] ||= [];
              _["!data"][Sl.r][Sl.c] = Xa;
            } else {
              _[_t] = Xa;
            }
          }
        }
        var Dr = {
          enc: false,
          sbcch: 0,
          snames: [],
          sharedf: rn,
          arrayf: yn,
          rrtabid: [],
          lastuser: "",
          biff: 8,
          codepage: 0,
          winlocked: 0,
          cellStyles: !!c && !!c.cellStyles,
          WTF: !!c && !!c.wtf
        };
        if (c.password) {
          Dr.password = c.password;
        }
        var yo;
        var _s = [];
        var ra = [];
        var ds = [];
        var Ua = [];
        var Ul = false;
        var os = [];
        os.SheetNames = Dr.snames;
        os.sharedf = Dr.sharedf;
        os.arrayf = Dr.arrayf;
        os.names = [];
        os.XTI = [];
        var Ro;
        var Ba = 0;
        var hr = 0;
        var oo = 0;
        var as = [];
        var Lo = [];
        Dr.codepage = 1200;
        j(1200);
        for (var va = false; r.l < r.length - 1;) {
          var Xn = r.l;
          var Pi = r.read_shift(2);
          if (Pi === 0 && Ba === 10) {
            break;
          }
          var bi = r.l === r.length ? 0 : r.read_shift(2);
          var vi = Ny[Pi];
          if (hr == 0 && [9, 521, 1033, 2057].indexOf(Pi) == -1) {
            break;
          }
          if (vi && vi.f) {
            if (c.bookSheets && Ba === 133 && Pi !== 133) {
              break;
            }
            Ba = Pi;
            if (vi.r === 2 || vi.r == 12) {
              var Cr = r.read_shift(2);
              bi -= 2;
              if (!Dr.enc && Cr !== Pi && ((Cr & 255) << 8 | Cr >> 8) !== Pi) {
                throw new Error("rt mismatch: " + Cr + "!=" + Pi);
              }
              if (vi.r == 12) {
                r.l += 10;
                bi -= 10;
              }
            }
            var jn = {};
            jn = Pi === 10 ? vi.f(r, bi, Dr) : B_(Pi, vi, r, bi, Dr);
            if (hr == 0 && [9, 521, 1033, 2057].indexOf(Ba) === -1) {
              continue;
            }
            switch (Pi) {
              case 34:
                o.opts.Date1904 = Ln.WBProps.date1904 = jn;
                break;
              case 134:
                o.opts.WriteProtect = true;
                break;
              case 47:
                if (!Dr.enc) {
                  r.l = 0;
                }
                Dr.enc = jn;
                if (!c.password) {
                  throw new Error("File is password-protected");
                }
                if (jn.valid == null) {
                  throw new Error("Encryption scheme unsupported");
                }
                if (!jn.valid) {
                  throw new Error("Password is incorrect");
                }
                break;
              case 92:
                Dr.lastuser = jn;
                break;
              case 66:
                var fo = Number(jn);
                switch (fo) {
                  case 21010:
                    fo = 1200;
                    break;
                  case 32768:
                    fo = 10000;
                    break;
                  case 32769:
                    fo = 1252;
                }
                j(Dr.codepage = fo);
                va = true;
                break;
              case 317:
                Dr.rrtabid = jn;
                break;
              case 25:
                Dr.winlocked = jn;
                break;
              case 439:
                o.opts.RefreshAll = jn;
                break;
              case 12:
                o.opts.CalcCount = jn;
                break;
              case 16:
                o.opts.CalcDelta = jn;
                break;
              case 17:
                o.opts.CalcIter = jn;
                break;
              case 13:
                o.opts.CalcMode = jn;
                break;
              case 14:
                o.opts.CalcPrecision = jn;
                break;
              case 95:
                o.opts.CalcSaveRecalc = jn;
                break;
              case 15:
                Dr.CalcRefMode = jn;
                break;
              case 2211:
                o.opts.FullCalc = jn;
                break;
              case 129:
                if (jn.fDialog) {
                  _["!type"] = "dialog";
                }
                if (!jn.fBelow) {
                  (_["!outline"] ||= {}).above = true;
                }
                if (!jn.fRight) {
                  (_["!outline"] ||= {}).left = true;
                }
                break;
              case 67:
              case 579:
              case 1091:
              case 224:
                Ni.push(jn);
                break;
              case 430:
                os.push([jn]);
                os[os.length - 1].XTI = [];
                break;
              case 35:
              case 547:
                os[os.length - 1].push(jn);
                break;
              case 24:
              case 536:
                Ro = {
                  Name: jn.Name,
                  Ref: eu(jn.rgce, 0, null, os, Dr)
                };
                if (jn.itab > 0) {
                  Ro.Sheet = jn.itab - 1;
                }
                os.names.push(Ro);
                if (!os[0]) {
                  os[0] = [];
                  os[0].XTI = [];
                }
                os[os.length - 1].push(jn);
                if (jn.Name == "_xlnm._FilterDatabase" && jn.itab > 0 && jn.rgce && jn.rgce[0] && jn.rgce[0][0] && jn.rgce[0][0][0] == "PtgArea3d") {
                  Lo[jn.itab - 1] = {
                    ref: $o(jn.rgce[0][0][1][2])
                  };
                }
                break;
              case 22:
                Dr.ExternCount = jn;
                break;
              case 23:
                if (os.length == 0) {
                  os[0] = [];
                  os[0].XTI = [];
                }
                os[os.length - 1].XTI = os[os.length - 1].XTI.concat(jn);
                os.XTI = os.XTI.concat(jn);
                break;
              case 2196:
                if (Dr.biff < 8) {
                  break;
                }
                if (Ro != null) {
                  Ro.Comment = jn[1];
                }
                break;
              case 18:
                _["!protect"] = jn;
                break;
              case 19:
                if (jn !== 0 && Dr.WTF) {
                  console.error("Password verifier: " + jn);
                }
                break;
              case 133:
                V[Dr.biff == 4 ? Dr.snames.length : jn.pos] = jn;
                Dr.snames.push(jn.name);
                break;
              case 10:
                if (--hr ? !yi : yi) {
                  break;
                }
                if (Y.e) {
                  if (Y.e.r > 0 && Y.e.c > 0) {
                    Y.e.r--;
                    Y.e.c--;
                    _["!ref"] = $o(Y);
                    if (c.sheetRows && c.sheetRows <= Y.e.r) {
                      var Ms = Y.e.r;
                      Y.e.r = c.sheetRows - 1;
                      _["!fullref"] = _["!ref"];
                      _["!ref"] = $o(Y);
                      Y.e.r = Ms;
                    }
                    Y.e.r++;
                    Y.e.c++;
                  }
                  if (_s.length > 0) {
                    _["!merges"] = _s;
                  }
                  if (ra.length > 0) {
                    _["!objects"] = ra;
                  }
                  if (ds.length > 0) {
                    _["!cols"] = ds;
                  }
                  if (Ua.length > 0) {
                    _["!rows"] = Ua;
                  }
                  Ln.Sheets.push(Jn);
                }
                if (Ne === "") {
                  ze = _;
                } else {
                  p[Ne] = _;
                }
                _ = {};
                if (c.dense) {
                  _["!data"] = [];
                }
                break;
              case 9:
              case 521:
              case 1033:
              case 2057:
                if (Dr.biff === 8) {
                  Dr.biff = {
                    9: 2,
                    521: 3,
                    1033: 4
                  }[Pi] || {
                    512: 2,
                    768: 3,
                    1024: 4,
                    1280: 5,
                    1536: 8,
                    2: 2,
                    7: 2
                  }[jn.BIFFVer] || 8;
                }
                Dr.biffguess = jn.BIFFVer == 0;
                if (jn.BIFFVer == 0 && jn.dt == 4096) {
                  Dr.biff = 5;
                  va = true;
                  j(Dr.codepage = 28591);
                }
                if (Dr.biff == 4 && jn.dt & 256) {
                  yi = true;
                }
                if (Dr.biff == 8 && jn.BIFFVer == 0 && jn.dt == 16) {
                  Dr.biff = 2;
                }
                if (hr++ && !yi) {
                  break;
                }
                _ = {};
                if (c.dense) {
                  _["!data"] = [];
                }
                if (Dr.biff < 8 && !va) {
                  va = true;
                  j(Dr.codepage = c.codepage || 1252);
                }
                if (Dr.biff == 4 && yi) {
                  Ne = (V[Dr.snames.indexOf(Ne) + 1] || {
                    name: ""
                  }).name;
                } else if (Dr.biff < 5 || jn.BIFFVer == 0 && jn.dt == 4096) {
                  if (Ne === "") {
                    Ne = "Sheet1";
                  }
                  Y = {
                    s: {
                      r: 0,
                      c: 0
                    },
                    e: {
                      r: 0,
                      c: 0
                    }
                  };
                  var ps = {
                    pos: r.l - bi,
                    name: Ne
                  };
                  V[ps.pos] = ps;
                  Dr.snames.push(Ne);
                } else {
                  Ne = (V[Xn] || {
                    name: ""
                  }).name;
                }
                if (jn.dt == 32) {
                  _["!type"] = "chart";
                }
                if (jn.dt == 64) {
                  _["!type"] = "macro";
                }
                _s = [];
                ra = [];
                Dr.arrayf = yn = [];
                ds = [];
                Ua = [];
                Ul = false;
                Jn = {
                  Hidden: (V[Xn] || {
                    hs: 0
                  }).hs,
                  name: Ne
                };
                break;
              case 515:
              case 3:
              case 2:
                if (_["!type"] == "chart" && (c.dense ? (_["!data"][jn.r] || [])[jn.c] : _[jo(jn.c) + Da(jn.r)])) {
                  ++jn.c;
                }
                un = {
                  ixfe: jn.ixfe,
                  XF: Ni[jn.ixfe] || {},
                  v: jn.val,
                  t: "n"
                };
                if (oo > 0) {
                  un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                }
                Vm(un, c, o.opts.Date1904);
                ji({
                  c: jn.c,
                  r: jn.r
                }, un, c);
                break;
              case 5:
              case 517:
                un = {
                  ixfe: jn.ixfe,
                  XF: Ni[jn.ixfe],
                  v: jn.val,
                  t: jn.t
                };
                if (oo > 0) {
                  un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                }
                Vm(un, c, o.opts.Date1904);
                ji({
                  c: jn.c,
                  r: jn.r
                }, un, c);
                break;
              case 638:
                un = {
                  ixfe: jn.ixfe,
                  XF: Ni[jn.ixfe],
                  v: jn.rknum,
                  t: "n"
                };
                if (oo > 0) {
                  un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                }
                Vm(un, c, o.opts.Date1904);
                ji({
                  c: jn.c,
                  r: jn.r
                }, un, c);
                break;
              case 189:
                for (var $a = jn.c; $a <= jn.C; ++$a) {
                  var ul = jn.rkrec[$a - jn.c][0];
                  un = {
                    ixfe: ul,
                    XF: Ni[ul],
                    v: jn.rkrec[$a - jn.c][1],
                    t: "n"
                  };
                  if (oo > 0) {
                    un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                  }
                  Vm(un, c, o.opts.Date1904);
                  ji({
                    c: $a,
                    r: jn.r
                  }, un, c);
                }
                break;
              case 6:
              case 518:
              case 1030:
                if (jn.val == "String") {
                  ee = jn;
                  break;
                }
                (un = A1(jn.val, jn.cell.ixfe, jn.tt)).XF = Ni[un.ixfe];
                if (c.cellFormula) {
                  var no = jn.formula;
                  if (no && no[0] && no[0][0] && no[0][0][0] == "PtgExp") {
                    var Lc = no[0][0][1][0];
                    var xc = no[0][0][1][1];
                    var Vc = Eo({
                      r: Lc,
                      c: xc
                    });
                    if (rn[Vc]) {
                      un.f = "" + eu(jn.formula, 0, jn.cell, os, Dr);
                    } else {
                      un.F = ((c.dense ? (_["!data"][Lc] || [])[xc] : _[Vc]) || {}).F;
                    }
                  } else {
                    un.f = "" + eu(jn.formula, 0, jn.cell, os, Dr);
                  }
                }
                if (oo > 0) {
                  un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                }
                Vm(un, c, o.opts.Date1904);
                ji(jn.cell, un, c);
                ee = jn;
                break;
              case 7:
              case 519:
                if (!ee) {
                  throw new Error("String record expects Formula");
                }
                ee.val = jn;
                (un = A1(jn, ee.cell.ixfe, "s")).XF = Ni[un.ixfe];
                if (c.cellFormula) {
                  un.f = "" + eu(ee.formula, 0, ee.cell, os, Dr);
                }
                if (oo > 0) {
                  un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                }
                Vm(un, c, o.opts.Date1904);
                ji(ee.cell, un, c);
                ee = null;
                break;
              case 33:
              case 545:
                yn.push(jn);
                var lh = Eo(jn[0].s);
                Ot = c.dense ? (_["!data"][jn[0].s.r] || [])[jn[0].s.c] : _[lh];
                if (c.cellFormula && Ot) {
                  if (!ee || !lh || !Ot) {
                    break;
                  }
                  Ot.f = "" + eu(jn[1], 0, jn[0], os, Dr);
                  Ot.F = $o(jn[0]);
                }
                break;
              case 1212:
                if (!c.cellFormula) {
                  break;
                }
                if (_t) {
                  if (!ee) {
                    break;
                  }
                  rn[Eo(ee.cell)] = jn[0];
                  ((Ot = c.dense ? (_["!data"][ee.cell.r] || [])[ee.cell.c] : _[Eo(ee.cell)]) || {}).f = "" + eu(jn[0], 0, Ft, os, Dr);
                }
                break;
              case 253:
                un = A1(Te[jn.isst].t, jn.ixfe, "s");
                if (Te[jn.isst].h) {
                  un.h = Te[jn.isst].h;
                }
                un.XF = Ni[un.ixfe];
                if (oo > 0) {
                  un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                }
                Vm(un, c, o.opts.Date1904);
                ji({
                  c: jn.c,
                  r: jn.r
                }, un, c);
                break;
              case 513:
                if (c.sheetStubs) {
                  un = {
                    ixfe: jn.ixfe,
                    XF: Ni[jn.ixfe],
                    t: "z"
                  };
                  if (oo > 0) {
                    un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                  }
                  Vm(un, c, o.opts.Date1904);
                  ji({
                    c: jn.c,
                    r: jn.r
                  }, un, c);
                }
                break;
              case 190:
                if (c.sheetStubs) {
                  for (var Fs = jn.c; Fs <= jn.C; ++Fs) {
                    var Us = jn.ixfe[Fs - jn.c];
                    un = {
                      ixfe: Us,
                      XF: Ni[Us],
                      t: "z"
                    };
                    if (oo > 0) {
                      un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                    }
                    Vm(un, c, o.opts.Date1904);
                    ji({
                      c: Fs,
                      r: jn.r
                    }, un, c);
                  }
                }
                break;
              case 214:
              case 516:
              case 4:
                (un = A1(jn.val, jn.ixfe, "s")).XF = Ni[un.ixfe];
                if (oo > 0) {
                  un.z = un.XF && un.XF.numFmtId && as[un.XF.numFmtId] || as[un.ixfe >> 8 & 63];
                }
                Vm(un, c, o.opts.Date1904);
                ji({
                  c: jn.c,
                  r: jn.r
                }, un, c);
                break;
              case 0:
              case 512:
                if (hr === 1) {
                  Y = jn;
                }
                break;
              case 252:
                Te = jn;
                break;
              case 1054:
                if (Dr.biff >= 3 && Dr.biff <= 4) {
                  as[oo++] = jn[1];
                  for (var Hp = 0; Hp < oo + 163 && Kt[Hp] != jn[1]; ++Hp);
                  if (Hp >= 163) {
                    la(jn[1], oo + 163);
                  }
                } else {
                  la(jn[1], jn[0]);
                }
                break;
              case 30:
                as[oo++] = jn;
                for (var Nf = 0; Nf < oo + 163 && Kt[Nf] != jn; ++Nf);
                if (Nf >= 163) {
                  la(jn, oo + 163);
                }
                break;
              case 229:
                _s = _s.concat(jn);
                break;
              case 93:
                ra[jn.cmo[0]] = Dr.lastobj = jn;
                break;
              case 438:
                Dr.lastobj.TxO = jn;
                break;
              case 127:
                Dr.lastobj.ImData = jn;
                break;
              case 440:
                for (Pt = jn[0].s.r; Pt <= jn[0].e.r; ++Pt) {
                  for (nn = jn[0].s.c; nn <= jn[0].e.c; ++nn) {
                    if (Ot = c.dense ? (_["!data"][Pt] || [])[nn] : _[Eo({
                      c: nn,
                      r: Pt
                    })]) {
                      Ot.l = jn[1];
                    }
                  }
                }
                break;
              case 2048:
                for (Pt = jn[0].s.r; Pt <= jn[0].e.r; ++Pt) {
                  for (nn = jn[0].s.c; nn <= jn[0].e.c; ++nn) {
                    if ((Ot = c.dense ? (_["!data"][Pt] || [])[nn] : _[Eo({
                      c: nn,
                      r: Pt
                    })]) && Ot.l) {
                      Ot.l.Tooltip = jn[1];
                    }
                  }
                }
                break;
              case 28:
                if (!(Ot = c.dense ? (_["!data"][jn[0].r] || [])[jn[0].c] : _[Eo(jn[0])])) {
                  if (c.dense) {
                    _["!data"][jn[0].r] ||= [];
                    Ot = _["!data"][jn[0].r][jn[0].c] = {
                      t: "z"
                    };
                  } else {
                    Ot = _[Eo(jn[0])] = {
                      t: "z"
                    };
                  }
                  Y.e.r = Math.max(Y.e.r, jn[0].r);
                  Y.s.r = Math.min(Y.s.r, jn[0].r);
                  Y.e.c = Math.max(Y.e.c, jn[0].c);
                  Y.s.c = Math.min(Y.s.c, jn[0].c);
                }
                Ot.c ||= [];
                if (Dr.biff <= 5 && Dr.biff >= 2) {
                  zt = {
                    a: "SheetJ5",
                    t: jn[1]
                  };
                } else {
                  zt = {
                    a: jn[1],
                    t: ra[jn[2]].TxO.t
                  };
                  if (jn[3] != null && !(jn[3] & 2)) {
                    Ot.c.hidden = true;
                  }
                }
                Ot.c.push(zt);
                break;
              case 2173:
                Em(0, jn.ext);
                break;
              case 125:
                if (!Dr.cellStyles) {
                  break;
                }
                for (; jn.e >= jn.s;) {
                  ds[jn.e--] = {
                    width: jn.w / 256,
                    level: jn.level || 0,
                    hidden: !!(jn.flags & 1)
                  };
                  if (!Ul) {
                    Ul = true;
                    sg(jn.w / 256);
                  }
                  Df(ds[jn.e + 1]);
                }
                break;
              case 520:
                var Uf = {};
                if (jn.level != null) {
                  Ua[jn.r] = Uf;
                  Uf.level = jn.level;
                }
                if (jn.hidden) {
                  Ua[jn.r] = Uf;
                  Uf.hidden = true;
                }
                if (jn.hpt) {
                  Ua[jn.r] = Uf;
                  Uf.hpt = jn.hpt;
                  Uf.hpx = zd(jn.hpt);
                }
                break;
              case 38:
              case 39:
              case 40:
              case 41:
                if (!_["!margins"]) {
                  hf(_["!margins"] = {});
                }
                _["!margins"][{
                  38: "left",
                  39: "right",
                  40: "top",
                  41: "bottom"
                }[Pi]] = jn;
                break;
              case 161:
                if (!_["!margins"]) {
                  hf(_["!margins"] = {});
                }
                _["!margins"].header = jn.header;
                _["!margins"].footer = jn.footer;
                break;
              case 574:
                if (jn.RTL) {
                  Ln.Views[0].RTL = true;
                }
                break;
              case 146:
                or = jn;
                break;
              case 2198:
                yo = jn;
                break;
              case 140:
                ai = jn;
                break;
              case 442:
                if (Ne) {
                  Jn.CodeName = jn || Jn.name;
                } else {
                  Ln.WBProps.CodeName = jn || "ThisWorkbook";
                }
            }
          } else {
            if (!vi) {
              console.error("Missing Info for XLS Record 0x" + Pi.toString(16));
            }
            r.l += bi;
          }
        }
        o.SheetNames = qs(V).sort(function (Wp, Sl) {
          return Number(Wp) - Number(Sl);
        }).map(function (Wp) {
          return V[Wp].name;
        });
        if (!c.bookSheets) {
          o.Sheets = p;
        }
        if (!o.SheetNames.length && ze["!ref"]) {
          o.SheetNames.push("Sheet1");
          if (o.Sheets) {
            o.Sheets.Sheet1 = ze;
          }
        } else {
          o.Preamble = ze;
        }
        if (o.Sheets) {
          Lo.forEach(function (Wp, Sl) {
            o.Sheets[o.SheetNames[Sl]]["!autofilter"] = Wp;
          });
        }
        o.Strings = Te;
        o.SSF = Vs(Kt);
        if (Dr.enc) {
          o.Encryption = Dr.enc;
        }
        if (yo) {
          o.Themes = yo;
        }
        o.Metadata = {};
        if (ai !== undefined) {
          o.Metadata.Country = ai;
        }
        if (os.names.length > 0) {
          Ln.Names = os.names;
        }
        o.Workbook = Ln;
        return o;
      }(p.content, c);
    } else if ((V = Fr.find(r, "PerfectOffice_MAIN")) && V.content) {
      _ = zf.to_workbook(V.content, (c.type = Y, c));
    } else {
      if (!(V = Fr.find(r, "NativeContent_MAIN")) || !V.content) {
        throw (V = Fr.find(r, "MN0")) && V.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
      }
      _ = zf.to_workbook(V.content, (c.type = Y, c));
    }
    if (c.bookVBA && r.FullPaths && Fr.find(r, "/_VBA_PROJECT_CUR/VBA/dir")) {
      _.vbaraw = function Lv(r) {
        var c = Fr.utils.cfb_new({
          root: "R"
        });
        r.FullPaths.forEach(function (o, p) {
          if (o.slice(-1) !== "/" && o.match(/_VBA_PROJECT_CUR/)) {
            var _ = o.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
            Fr.utils.cfb_add(c, _, r.FileIndex[p].content);
          }
        });
        return Fr.write(c);
      }(r);
    }
  }
  var ee = {};
  if (r.FullPaths) {
    (function xE(r, c, o) {
      var p = Fr.find(r, "/!DocumentSummaryInformation");
      if (p && p.size > 0) {
        try {
          var _ = ln(p, Ri, Z0_DSI);
          for (var V in _) {
            c[V] = _[V];
          }
        } catch (Ne) {
          if (o.WTF) {
            throw Ne;
          }
        }
      }
      var Y = Fr.find(r, "/!SummaryInformation");
      if (Y && Y.size > 0) {
        try {
          var ee = ln(Y, Yr, Z0_SI);
          for (var Te in ee) {
            if (c[Te] == null) {
              c[Te] = ee[Te];
            }
          }
        } catch (Ne) {
          if (o.WTF) {
            throw Ne;
          }
        }
      }
      if (c.HeadingPairs && c.TitlesOfParts) {
        qd(c.HeadingPairs, c.TitlesOfParts, c, o);
        delete c.HeadingPairs;
        delete c.TitlesOfParts;
      }
    })(r, ee, c);
  }
  _.Props = _.Custprops = ee;
  if (c.bookFiles) {
    _.cfb = r;
  }
  return _;
}
var t0 = {
  0: {
    f: function te(r, c) {
      var o = {};
      var p = r.l + c;
      o.r = r.read_shift(4);
      r.l += 4;
      var _ = r.read_shift(2);
      r.l += 1;
      var V = r.read_shift(1);
      r.l = p;
      if (V & 7) {
        o.level = V & 7;
      }
      if (V & 16) {
        o.hidden = true;
      }
      if (V & 32) {
        o.hpt = _ / 20;
      }
      return o;
    }
  },
  1: {
    f: function Qn(r) {
      return [Ll(r)];
    }
  },
  2: {
    f: function Nu(r) {
      return [Ll(r), ol(r), "n"];
    }
  },
  3: {
    f: function Co(r) {
      return [Ll(r), r.read_shift(1), "e"];
    }
  },
  4: {
    f: function zi(r) {
      return [Ll(r), r.read_shift(1), "b"];
    }
  },
  5: {
    f: function fd(r) {
      return [Ll(r), Dl(r), "n"];
    }
  },
  6: {
    f: function cn(r) {
      return [Ll(r), Gl(r), "str"];
    }
  },
  7: {
    f: function pc(r) {
      return [Ll(r), r.read_shift(4), "s"];
    }
  },
  8: {
    f: function qr(r, c, o) {
      var p = r.l + c;
      var _ = Ll(r);
      _.r = o["!row"];
      var Y = [_, Gl(r), "str"];
      if (o.cellFormula) {
        r.l += 2;
        var ee = Pp(r, p - r.l, o);
        Y[3] = eu(ee, 0, _, o.supbooks, o);
      } else {
        r.l = p;
      }
      return Y;
    }
  },
  9: {
    f: function xr(r, c, o) {
      var p = r.l + c;
      var _ = Ll(r);
      _.r = o["!row"];
      var Y = [_, Dl(r), "n"];
      if (o.cellFormula) {
        r.l += 2;
        var ee = Pp(r, p - r.l, o);
        Y[3] = eu(ee, 0, _, o.supbooks, o);
      } else {
        r.l = p;
      }
      return Y;
    }
  },
  10: {
    f: function Wi(r, c, o) {
      var p = r.l + c;
      var _ = Ll(r);
      _.r = o["!row"];
      var Y = [_, r.read_shift(1), "b"];
      if (o.cellFormula) {
        r.l += 2;
        var ee = Pp(r, p - r.l, o);
        Y[3] = eu(ee, 0, _, o.supbooks, o);
      } else {
        r.l = p;
      }
      return Y;
    }
  },
  11: {
    f: function Sr(r, c, o) {
      var p = r.l + c;
      var _ = Ll(r);
      _.r = o["!row"];
      var Y = [_, r.read_shift(1), "e"];
      if (o.cellFormula) {
        r.l += 2;
        var ee = Pp(r, p - r.l, o);
        Y[3] = eu(ee, 0, _, o.supbooks, o);
      } else {
        r.l = p;
      }
      return Y;
    }
  },
  12: {
    f: function _i(r) {
      return [sc(r)];
    }
  },
  13: {
    f: function hu(r) {
      return [sc(r), ol(r), "n"];
    }
  },
  14: {
    f: function nc(r) {
      return [sc(r), r.read_shift(1), "e"];
    }
  },
  15: {
    f: function Vo(r) {
      return [sc(r), r.read_shift(1), "b"];
    }
  },
  16: {
    f: fu
  },
  17: {
    f: function $n(r) {
      return [sc(r), Gl(r), "str"];
    }
  },
  18: {
    f: function kf(r) {
      return [sc(r), r.read_shift(4), "s"];
    }
  },
  19: {
    f: Xl
  },
  20: {},
  21: {},
  22: {},
  23: {},
  24: {},
  25: {},
  26: {},
  27: {},
  28: {},
  29: {},
  30: {},
  31: {},
  32: {},
  33: {},
  34: {},
  35: {
    T: 1
  },
  36: {
    T: -1
  },
  37: {
    T: 1
  },
  38: {
    T: -1
  },
  39: {
    f: function z1(r, c, o) {
      var p = r.l + c;
      var _ = r.read_shift(4);
      r.l += 1;
      var V = r.read_shift(4);
      var Y = Vd(r);
      var ee = Vv(r, 0, o);
      var Te = xl(r);
      if (_ & 32) {
        Y = "_xlnm." + Y;
      }
      r.l = p;
      var Ne = {
        Name: Y,
        Ptg: ee,
        Flags: _
      };
      if (V < 268435455) {
        Ne.Sheet = V;
      }
      if (Te) {
        Ne.Comment = Te;
      }
      return Ne;
    }
  },
  40: {},
  42: {},
  43: {
    f: function cg(r, c, o) {
      var p = {};
      p.sz = r.read_shift(2) / 20;
      var _ = function Rl(r) {
        var c = r.read_shift(1);
        r.l++;
        return {
          fBold: c & 1,
          fItalic: c & 2,
          fUnderline: c & 4,
          fStrikeout: c & 8,
          fOutline: c & 16,
          fShadow: c & 32,
          fCondense: c & 64,
          fExtend: c & 128
        };
      }(r);
      if (_.fItalic) {
        p.italic = 1;
      }
      if (_.fCondense) {
        p.condense = 1;
      }
      if (_.fExtend) {
        p.extend = 1;
      }
      if (_.fShadow) {
        p.shadow = 1;
      }
      if (_.fOutline) {
        p.outline = 1;
      }
      if (_.fStrikeout) {
        p.strike = 1;
      }
      if (r.read_shift(2) === 700) {
        p.bold = 1;
      }
      switch (r.read_shift(2)) {
        case 1:
          p.vertAlign = "superscript";
          break;
        case 2:
          p.vertAlign = "subscript";
      }
      var Y = r.read_shift(1);
      if (Y != 0) {
        p.underline = Y;
      }
      var ee = r.read_shift(1);
      if (ee > 0) {
        p.family = ee;
      }
      var Te = r.read_shift(1);
      if (Te > 0) {
        p.charset = Te;
      }
      r.l++;
      p.color = function Il(r) {
        var c = {};
        var p = r.read_shift(1) >>> 1;
        var _ = r.read_shift(1);
        var V = r.read_shift(2, "i");
        var Y = r.read_shift(1);
        var ee = r.read_shift(1);
        var Te = r.read_shift(1);
        r.l++;
        switch (p) {
          case 0:
            c.auto = 1;
            break;
          case 1:
            c.index = _;
            var Ne = jt[_];
            if (Ne) {
              c.rgb = Id(Ne);
            }
            break;
          case 2:
            c.rgb = Id([Y, ee, Te]);
            break;
          case 3:
            c.theme = _;
        }
        if (V != 0) {
          c.tint = V > 0 ? V / 32767 : V / 32768;
        }
        return c;
      }(r);
      switch (r.read_shift(1)) {
        case 1:
          p.scheme = "major";
          break;
        case 2:
          p.scheme = "minor";
      }
      p.name = Gl(r);
      return p;
    }
  },
  44: {
    f: function lg(r, c) {
      return [r.read_shift(2), Gl(r)];
    }
  },
  45: {
    f: Qy
  },
  46: {
    f: _d
  },
  47: {
    f: function Yh(r, c) {
      var o = r.l + c;
      var p = r.read_shift(2);
      var _ = r.read_shift(2);
      r.l = o;
      return {
        ixfe: p,
        numFmtId: _
      };
    }
  },
  48: {},
  49: {
    f: function vu(r) {
      return r.read_shift(4, "i");
    }
  },
  50: {},
  51: {
    f: function Kh(r) {
      for (var c = [], o = r.read_shift(4); o-- > 0;) {
        c.push([r.read_shift(4), r.read_shift(4)]);
      }
      return c;
    }
  },
  52: {
    T: 1
  },
  53: {
    T: -1
  },
  54: {
    T: 1
  },
  55: {
    T: -1
  },
  56: {
    T: 1
  },
  57: {
    T: -1
  },
  58: {},
  59: {},
  60: {
    f: Yf
  },
  62: {
    f: function tp(r) {
      return [Ll(r), Xl(r), "is"];
    }
  },
  63: {
    f: function af(r) {
      var c = {};
      c.i = r.read_shift(4);
      var o = {};
      o.r = r.read_shift(4);
      o.c = r.read_shift(4);
      c.r = Eo(o);
      var p = r.read_shift(1);
      if (p & 2) {
        c.l = "1";
      }
      if (p & 8) {
        c.a = "1";
      }
      return c;
    }
  },
  64: {
    f: function jd() {}
  },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: {
    T: 1
  },
  130: {
    T: -1
  },
  131: {
    T: 1,
    f: kl,
    p: 0
  },
  132: {
    T: -1
  },
  133: {
    T: 1
  },
  134: {
    T: -1
  },
  135: {
    T: 1
  },
  136: {
    T: -1
  },
  137: {
    T: 1,
    f: function kd(r) {
      var c = r.read_shift(2);
      r.l += 28;
      return {
        RTL: c & 32
      };
    }
  },
  138: {
    T: -1
  },
  139: {
    T: 1
  },
  140: {
    T: -1
  },
  141: {
    T: 1
  },
  142: {
    T: -1
  },
  143: {
    T: 1
  },
  144: {
    T: -1
  },
  145: {
    T: 1
  },
  146: {
    T: -1
  },
  147: {
    f: function vn(r, c) {
      var o = {};
      var p = r[r.l];
      ++r.l;
      o.above = !(p & 64);
      o.left = !(p & 128);
      r.l += 18;
      o.name = Du(r, c - 19);
      return o;
    }
  },
  148: {
    f: Dt,
    p: 16
  },
  151: {
    f: function ma() {}
  },
  152: {},
  153: {
    f: function Z1(r, c) {
      var o = {};
      var p = r.read_shift(4);
      o.defaultThemeVersion = r.read_shift(4);
      var _ = c > 8 ? Gl(r) : "";
      if (_.length > 0) {
        o.CodeName = _;
      }
      o.autoCompressPictures = !!(p & 65536);
      o.backupFile = !!(p & 64);
      o.checkCompatibility = !!(p & 4096);
      o.date1904 = !!(p & 1);
      o.filterPrivacy = !!(p & 8);
      o.hidePivotFieldList = !!(p & 1024);
      o.promptedSolutions = !!(p & 16);
      o.publishItems = !!(p & 2048);
      o.refreshAllConnections = !!(p & 262144);
      o.saveExternalLinkValues = !!(p & 128);
      o.showBorderUnselectedTables = !!(p & 4);
      o.showInkAnnotation = !!(p & 32);
      o.showObjects = ["all", "placeholders", "none"][p >> 13 & 3];
      o.showPivotChartFilter = !!(p & 32768);
      o.updateLinks = ["userSet", "never", "always"][p >> 8 & 3];
      return o;
    }
  },
  154: {},
  155: {},
  156: {
    f: function Y1(r, c) {
      var o = {};
      o.Hidden = r.read_shift(4);
      o.iTabID = r.read_shift(4);
      o.strRelID = vl(r, c - 8);
      o.name = Gl(r);
      return o;
    }
  },
  157: {},
  158: {},
  159: {
    T: 1,
    f: function Yu(r) {
      return [r.read_shift(4), r.read_shift(4)];
    }
  },
  160: {
    T: -1
  },
  161: {
    T: 1,
    f: ts
  },
  162: {
    T: -1
  },
  163: {
    T: 1
  },
  164: {
    T: -1
  },
  165: {
    T: 1
  },
  166: {
    T: -1
  },
  167: {},
  168: {},
  169: {},
  170: {},
  171: {},
  172: {
    T: 1
  },
  173: {
    T: -1
  },
  174: {},
  175: {},
  176: {
    f: ws
  },
  177: {
    T: 1
  },
  178: {
    T: -1
  },
  179: {
    T: 1
  },
  180: {
    T: -1
  },
  181: {
    T: 1
  },
  182: {
    T: -1
  },
  183: {
    T: 1
  },
  184: {
    T: -1
  },
  185: {
    T: 1
  },
  186: {
    T: -1
  },
  187: {
    T: 1
  },
  188: {
    T: -1
  },
  189: {
    T: 1
  },
  190: {
    T: -1
  },
  191: {
    T: 1
  },
  192: {
    T: -1
  },
  193: {
    T: 1
  },
  194: {
    T: -1
  },
  195: {
    T: 1
  },
  196: {
    T: -1
  },
  197: {
    T: 1
  },
  198: {
    T: -1
  },
  199: {
    T: 1
  },
  200: {
    T: -1
  },
  201: {
    T: 1
  },
  202: {
    T: -1
  },
  203: {
    T: 1
  },
  204: {
    T: -1
  },
  205: {
    T: 1
  },
  206: {
    T: -1
  },
  207: {
    T: 1
  },
  208: {
    T: -1
  },
  209: {
    T: 1
  },
  210: {
    T: -1
  },
  211: {
    T: 1
  },
  212: {
    T: -1
  },
  213: {
    T: 1
  },
  214: {
    T: -1
  },
  215: {
    T: 1
  },
  216: {
    T: -1
  },
  217: {
    T: 1
  },
  218: {
    T: -1
  },
  219: {
    T: 1
  },
  220: {
    T: -1
  },
  221: {
    T: 1
  },
  222: {
    T: -1
  },
  223: {
    T: 1
  },
  224: {
    T: -1
  },
  225: {
    T: 1
  },
  226: {
    T: -1
  },
  227: {
    T: 1
  },
  228: {
    T: -1
  },
  229: {
    T: 1
  },
  230: {
    T: -1
  },
  231: {
    T: 1
  },
  232: {
    T: -1
  },
  233: {
    T: 1
  },
  234: {
    T: -1
  },
  235: {
    T: 1
  },
  236: {
    T: -1
  },
  237: {
    T: 1
  },
  238: {
    T: -1
  },
  239: {
    T: 1
  },
  240: {
    T: -1
  },
  241: {
    T: 1
  },
  242: {
    T: -1
  },
  243: {
    T: 1
  },
  244: {
    T: -1
  },
  245: {
    T: 1
  },
  246: {
    T: -1
  },
  247: {
    T: 1
  },
  248: {
    T: -1
  },
  249: {
    T: 1
  },
  250: {
    T: -1
  },
  251: {
    T: 1
  },
  252: {
    T: -1
  },
  253: {
    T: 1
  },
  254: {
    T: -1
  },
  255: {
    T: 1
  },
  256: {
    T: -1
  },
  257: {
    T: 1
  },
  258: {
    T: -1
  },
  259: {
    T: 1
  },
  260: {
    T: -1
  },
  261: {
    T: 1
  },
  262: {
    T: -1
  },
  263: {
    T: 1
  },
  264: {
    T: -1
  },
  265: {
    T: 1
  },
  266: {
    T: -1
  },
  267: {
    T: 1
  },
  268: {
    T: -1
  },
  269: {
    T: 1
  },
  270: {
    T: -1
  },
  271: {
    T: 1
  },
  272: {
    T: -1
  },
  273: {
    T: 1
  },
  274: {
    T: -1
  },
  275: {
    T: 1
  },
  276: {
    T: -1
  },
  277: {},
  278: {
    T: 1
  },
  279: {
    T: -1
  },
  280: {
    T: 1
  },
  281: {
    T: -1
  },
  282: {
    T: 1
  },
  283: {
    T: 1
  },
  284: {
    T: -1
  },
  285: {
    T: 1
  },
  286: {
    T: -1
  },
  287: {
    T: 1
  },
  288: {
    T: -1
  },
  289: {
    T: 1
  },
  290: {
    T: -1
  },
  291: {
    T: 1
  },
  292: {
    T: -1
  },
  293: {
    T: 1
  },
  294: {
    T: -1
  },
  295: {
    T: 1
  },
  296: {
    T: -1
  },
  297: {
    T: 1
  },
  298: {
    T: -1
  },
  299: {
    T: 1
  },
  300: {
    T: -1
  },
  301: {
    T: 1
  },
  302: {
    T: -1
  },
  303: {
    T: 1
  },
  304: {
    T: -1
  },
  305: {
    T: 1
  },
  306: {
    T: -1
  },
  307: {
    T: 1
  },
  308: {
    T: -1
  },
  309: {
    T: 1
  },
  310: {
    T: -1
  },
  311: {
    T: 1
  },
  312: {
    T: -1
  },
  313: {
    T: -1
  },
  314: {
    T: 1
  },
  315: {
    T: -1
  },
  316: {
    T: 1
  },
  317: {
    T: -1
  },
  318: {
    T: 1
  },
  319: {
    T: -1
  },
  320: {
    T: 1
  },
  321: {
    T: -1
  },
  322: {
    T: 1
  },
  323: {
    T: -1
  },
  324: {
    T: 1
  },
  325: {
    T: -1
  },
  326: {
    T: 1
  },
  327: {
    T: -1
  },
  328: {
    T: 1
  },
  329: {
    T: -1
  },
  330: {
    T: 1
  },
  331: {
    T: -1
  },
  332: {
    T: 1
  },
  333: {
    T: -1
  },
  334: {
    T: 1
  },
  335: {
    f: function tc(r, c) {
      return {
        flags: r.read_shift(4),
        version: r.read_shift(4),
        name: Gl(r)
      };
    }
  },
  336: {
    T: -1
  },
  337: {
    f: function bm(r) {
      r.l += 4;
      return r.read_shift(4) != 0;
    },
    T: 1
  },
  338: {
    T: -1
  },
  339: {
    T: 1
  },
  340: {
    T: -1
  },
  341: {
    T: 1
  },
  342: {
    T: -1
  },
  343: {
    T: 1
  },
  344: {
    T: -1
  },
  345: {
    T: 1
  },
  346: {
    T: -1
  },
  347: {
    T: 1
  },
  348: {
    T: -1
  },
  349: {
    T: 1
  },
  350: {
    T: -1
  },
  351: {},
  352: {},
  353: {
    T: 1
  },
  354: {
    T: -1
  },
  355: {
    f: vl
  },
  357: {},
  358: {},
  359: {},
  360: {
    T: 1
  },
  361: {},
  362: {
    f: jp
  },
  363: {},
  364: {},
  366: {},
  367: {},
  368: {},
  369: {},
  370: {},
  371: {},
  372: {
    T: 1
  },
  373: {
    T: -1
  },
  374: {
    T: 1
  },
  375: {
    T: -1
  },
  376: {
    T: 1
  },
  377: {
    T: -1
  },
  378: {
    T: 1
  },
  379: {
    T: -1
  },
  380: {
    T: 1
  },
  381: {
    T: -1
  },
  382: {
    T: 1
  },
  383: {
    T: -1
  },
  384: {
    T: 1
  },
  385: {
    T: -1
  },
  386: {
    T: 1
  },
  387: {
    T: -1
  },
  388: {
    T: 1
  },
  389: {
    T: -1
  },
  390: {
    T: 1
  },
  391: {
    T: -1
  },
  392: {
    T: 1
  },
  393: {
    T: -1
  },
  394: {
    T: 1
  },
  395: {
    T: -1
  },
  396: {},
  397: {},
  398: {},
  399: {},
  400: {},
  401: {
    T: 1
  },
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  409: {},
  410: {},
  411: {},
  412: {},
  413: {},
  414: {},
  415: {},
  416: {},
  417: {},
  418: {},
  419: {},
  420: {},
  421: {},
  422: {
    T: 1
  },
  423: {
    T: 1
  },
  424: {
    T: -1
  },
  425: {
    T: -1
  },
  426: {
    f: function El(r, c, o) {
      var p = r.l + c;
      var _ = mf(r);
      var V = r.read_shift(1);
      var Y = [_];
      Y[2] = V;
      if (o.cellFormula) {
        var ee = Ad(r, p - r.l, o);
        Y[1] = ee;
      } else {
        r.l = p;
      }
      return Y;
    }
  },
  427: {
    f: function Ac(r, c, o) {
      var p = r.l + c;
      var V = [ts(r, 16)];
      if (o.cellFormula) {
        var Y = Hv(r, p - r.l, o);
        V[1] = Y;
        r.l = p;
      } else {
        r.l = p;
      }
      return V;
    }
  },
  428: {},
  429: {
    T: 1
  },
  430: {
    T: -1
  },
  431: {
    T: 1
  },
  432: {
    T: -1
  },
  433: {
    T: 1
  },
  434: {
    T: -1
  },
  435: {
    T: 1
  },
  436: {
    T: -1
  },
  437: {
    T: 1
  },
  438: {
    T: -1
  },
  439: {
    T: 1
  },
  440: {
    T: -1
  },
  441: {
    T: 1
  },
  442: {
    T: -1
  },
  443: {
    T: 1
  },
  444: {
    T: -1
  },
  445: {
    T: 1
  },
  446: {
    T: -1
  },
  447: {
    T: 1
  },
  448: {
    T: -1
  },
  449: {
    T: 1
  },
  450: {
    T: -1
  },
  451: {
    T: 1
  },
  452: {
    T: -1
  },
  453: {
    T: 1
  },
  454: {
    T: -1
  },
  455: {
    T: 1
  },
  456: {
    T: -1
  },
  457: {
    T: 1
  },
  458: {
    T: -1
  },
  459: {
    T: 1
  },
  460: {
    T: -1
  },
  461: {
    T: 1
  },
  462: {
    T: -1
  },
  463: {
    T: 1
  },
  464: {
    T: -1
  },
  465: {
    T: 1
  },
  466: {
    T: -1
  },
  467: {
    T: 1
  },
  468: {
    T: -1
  },
  469: {
    T: 1
  },
  470: {
    T: -1
  },
  471: {},
  472: {},
  473: {
    T: 1
  },
  474: {
    T: -1
  },
  475: {},
  476: {
    f: function hd(r) {
      var c = {};
      Au.forEach(function (o) {
        c[o] = Dl(r);
      });
      return c;
    }
  },
  477: {},
  478: {},
  479: {
    T: 1
  },
  480: {
    T: -1
  },
  481: {
    T: 1
  },
  482: {
    T: -1
  },
  483: {
    T: 1
  },
  484: {
    T: -1
  },
  485: {
    f: function tn() {}
  },
  486: {
    T: 1
  },
  487: {
    T: -1
  },
  488: {
    T: 1
  },
  489: {
    T: -1
  },
  490: {
    T: 1
  },
  491: {
    T: -1
  },
  492: {
    T: 1
  },
  493: {
    T: -1
  },
  494: {
    f: function ka(r, c) {
      var o = r.l + c;
      var p = ts(r, 16);
      var _ = xl(r);
      var V = Gl(r);
      var Y = Gl(r);
      var ee = Gl(r);
      r.l = o;
      var Te = {
        rfx: p,
        relId: _,
        loc: V,
        display: ee
      };
      if (Y) {
        Te.Tooltip = Y;
      }
      return Te;
    }
  },
  495: {
    T: 1
  },
  496: {
    T: -1
  },
  497: {
    T: 1
  },
  498: {
    T: -1
  },
  499: {},
  500: {
    T: 1
  },
  501: {
    T: -1
  },
  502: {
    T: 1
  },
  503: {
    T: -1
  },
  504: {},
  505: {
    T: 1
  },
  506: {
    T: -1
  },
  507: {},
  508: {
    T: 1
  },
  509: {
    T: -1
  },
  510: {
    T: 1
  },
  511: {
    T: -1
  },
  512: {},
  513: {},
  514: {
    T: 1
  },
  515: {
    T: -1
  },
  516: {
    T: 1
  },
  517: {
    T: -1
  },
  518: {
    T: 1
  },
  519: {
    T: -1
  },
  520: {
    T: 1
  },
  521: {
    T: -1
  },
  522: {},
  523: {},
  524: {},
  525: {},
  526: {},
  527: {},
  528: {
    T: 1
  },
  529: {
    T: -1
  },
  530: {
    T: 1
  },
  531: {
    T: -1
  },
  532: {
    T: 1
  },
  533: {
    T: -1
  },
  534: {},
  535: {},
  536: {},
  537: {},
  538: {
    T: 1
  },
  539: {
    T: -1
  },
  540: {
    T: 1
  },
  541: {
    T: -1
  },
  542: {
    T: 1
  },
  548: {},
  549: {},
  550: {
    f: vl
  },
  551: {
    f: xl
  },
  552: {},
  553: {},
  554: {
    T: 1
  },
  555: {
    T: -1
  },
  556: {
    T: 1
  },
  557: {
    T: -1
  },
  558: {
    T: 1
  },
  559: {
    T: -1
  },
  560: {
    T: 1
  },
  561: {
    T: -1
  },
  562: {},
  564: {},
  565: {
    T: 1
  },
  566: {
    T: -1
  },
  569: {
    T: 1
  },
  570: {
    T: -1
  },
  572: {},
  573: {
    T: 1
  },
  574: {
    T: -1
  },
  577: {},
  578: {},
  579: {},
  580: {},
  581: {},
  582: {},
  583: {},
  584: {},
  585: {},
  586: {},
  587: {},
  588: {
    T: -1
  },
  589: {},
  590: {
    T: 1
  },
  591: {
    T: -1
  },
  592: {
    T: 1
  },
  593: {
    T: -1
  },
  594: {
    T: 1
  },
  595: {
    T: -1
  },
  596: {},
  597: {
    T: 1
  },
  598: {
    T: -1
  },
  599: {
    T: 1
  },
  600: {
    T: -1
  },
  601: {
    T: 1
  },
  602: {
    T: -1
  },
  603: {
    T: 1
  },
  604: {
    T: -1
  },
  605: {
    T: 1
  },
  606: {
    T: -1
  },
  607: {},
  608: {
    T: 1
  },
  609: {
    T: -1
  },
  610: {},
  611: {
    T: 1
  },
  612: {
    T: -1
  },
  613: {
    T: 1
  },
  614: {
    T: -1
  },
  615: {
    T: 1
  },
  616: {
    T: -1
  },
  617: {
    T: 1
  },
  618: {
    T: -1
  },
  619: {
    T: 1
  },
  620: {
    T: -1
  },
  625: {},
  626: {
    T: 1
  },
  627: {
    T: -1
  },
  628: {
    T: 1
  },
  629: {
    T: -1
  },
  630: {
    T: 1
  },
  631: {
    T: -1
  },
  632: {
    f: eh
  },
  633: {
    T: 1
  },
  634: {
    T: -1
  },
  635: {
    T: 1,
    f: function kv(r) {
      var c = {};
      c.iauthor = r.read_shift(4);
      var o = ts(r, 16);
      c.rfx = o.s;
      c.ref = Eo(o.s);
      r.l += 16;
      return c;
    }
  },
  636: {
    T: -1
  },
  637: {
    f: md
  },
  638: {
    T: 1
  },
  639: {},
  640: {
    T: -1
  },
  641: {
    T: 1
  },
  642: {
    T: -1
  },
  643: {
    T: 1
  },
  644: {},
  645: {
    T: -1
  },
  646: {
    T: 1
  },
  648: {
    T: 1
  },
  649: {},
  650: {
    T: -1
  },
  651: {
    f: function Ql(r, c) {
      r.l += 10;
      return {
        name: Gl(r)
      };
    }
  },
  652: {},
  653: {
    T: 1
  },
  654: {
    T: -1
  },
  655: {
    T: 1
  },
  656: {
    T: -1
  },
  657: {
    T: 1
  },
  658: {
    T: -1
  },
  659: {},
  660: {
    T: 1
  },
  661: {},
  662: {
    T: -1
  },
  663: {},
  664: {
    T: 1
  },
  665: {},
  666: {
    T: -1
  },
  667: {},
  668: {},
  669: {},
  671: {
    T: 1
  },
  672: {
    T: -1
  },
  673: {
    T: 1
  },
  674: {
    T: -1
  },
  675: {},
  676: {},
  677: {},
  678: {},
  679: {},
  680: {},
  681: {},
  1024: {},
  1025: {},
  1026: {
    T: 1
  },
  1027: {
    T: -1
  },
  1028: {
    T: 1
  },
  1029: {
    T: -1
  },
  1030: {},
  1031: {
    T: 1
  },
  1032: {
    T: -1
  },
  1033: {
    T: 1
  },
  1034: {
    T: -1
  },
  1035: {},
  1036: {},
  1037: {},
  1038: {
    T: 1
  },
  1039: {
    T: -1
  },
  1040: {},
  1041: {
    T: 1
  },
  1042: {
    T: -1
  },
  1043: {},
  1044: {},
  1045: {},
  1046: {
    T: 1
  },
  1047: {
    T: -1
  },
  1048: {
    T: 1
  },
  1049: {
    T: -1
  },
  1050: {},
  1051: {
    T: 1
  },
  1052: {
    T: 1
  },
  1053: {
    f: function Qu() {}
  },
  1054: {
    T: 1
  },
  1055: {},
  1056: {
    T: 1
  },
  1057: {
    T: -1
  },
  1058: {
    T: 1
  },
  1059: {
    T: -1
  },
  1061: {},
  1062: {
    T: 1
  },
  1063: {
    T: -1
  },
  1064: {
    T: 1
  },
  1065: {
    T: -1
  },
  1066: {
    T: 1
  },
  1067: {
    T: -1
  },
  1068: {
    T: 1
  },
  1069: {
    T: -1
  },
  1070: {
    T: 1
  },
  1071: {
    T: -1
  },
  1072: {
    T: 1
  },
  1073: {
    T: -1
  },
  1075: {
    T: 1
  },
  1076: {
    T: -1
  },
  1077: {
    T: 1
  },
  1078: {
    T: -1
  },
  1079: {
    T: 1
  },
  1080: {
    T: -1
  },
  1081: {
    T: 1
  },
  1082: {
    T: -1
  },
  1083: {
    T: 1
  },
  1084: {
    T: -1
  },
  1085: {},
  1086: {
    T: 1
  },
  1087: {
    T: -1
  },
  1088: {
    T: 1
  },
  1089: {
    T: -1
  },
  1090: {
    T: 1
  },
  1091: {
    T: -1
  },
  1092: {
    T: 1
  },
  1093: {
    T: -1
  },
  1094: {
    T: 1
  },
  1095: {
    T: -1
  },
  1096: {},
  1097: {
    T: 1
  },
  1098: {},
  1099: {
    T: -1
  },
  1100: {
    T: 1
  },
  1101: {
    T: -1
  },
  1102: {},
  1103: {},
  1104: {},
  1105: {},
  1111: {},
  1112: {},
  1113: {
    T: 1
  },
  1114: {
    T: -1
  },
  1115: {
    T: 1
  },
  1116: {
    T: -1
  },
  1117: {},
  1118: {
    T: 1
  },
  1119: {
    T: -1
  },
  1120: {
    T: 1
  },
  1121: {
    T: -1
  },
  1122: {
    T: 1
  },
  1123: {
    T: -1
  },
  1124: {
    T: 1
  },
  1125: {
    T: -1
  },
  1126: {},
  1128: {
    T: 1
  },
  1129: {
    T: -1
  },
  1130: {},
  1131: {
    T: 1
  },
  1132: {
    T: -1
  },
  1133: {
    T: 1
  },
  1134: {
    T: -1
  },
  1135: {
    T: 1
  },
  1136: {
    T: -1
  },
  1137: {
    T: 1
  },
  1138: {
    T: -1
  },
  1139: {
    T: 1
  },
  1140: {
    T: -1
  },
  1141: {},
  1142: {
    T: 1
  },
  1143: {
    T: -1
  },
  1144: {
    T: 1
  },
  1145: {
    T: -1
  },
  1146: {},
  1147: {
    T: 1
  },
  1148: {
    T: -1
  },
  1149: {
    T: 1
  },
  1150: {
    T: -1
  },
  1152: {
    T: 1
  },
  1153: {
    T: -1
  },
  1154: {
    T: -1
  },
  1155: {
    T: -1
  },
  1156: {
    T: -1
  },
  1157: {
    T: 1
  },
  1158: {
    T: -1
  },
  1159: {
    T: 1
  },
  1160: {
    T: -1
  },
  1161: {
    T: 1
  },
  1162: {
    T: -1
  },
  1163: {
    T: 1
  },
  1164: {
    T: -1
  },
  1165: {
    T: 1
  },
  1166: {
    T: -1
  },
  1167: {
    T: 1
  },
  1168: {
    T: -1
  },
  1169: {
    T: 1
  },
  1170: {
    T: -1
  },
  1171: {},
  1172: {
    T: 1
  },
  1173: {
    T: -1
  },
  1177: {},
  1178: {
    T: 1
  },
  1180: {},
  1181: {},
  1182: {},
  2048: {
    T: 1
  },
  2049: {
    T: -1
  },
  2050: {},
  2051: {
    T: 1
  },
  2052: {
    T: -1
  },
  2053: {},
  2054: {},
  2055: {
    T: 1
  },
  2056: {
    T: -1
  },
  2057: {
    T: 1
  },
  2058: {
    T: -1
  },
  2060: {},
  2067: {},
  2068: {
    T: 1
  },
  2069: {
    T: -1
  },
  2070: {},
  2071: {},
  2072: {
    T: 1
  },
  2073: {
    T: -1
  },
  2075: {},
  2076: {},
  2077: {
    T: 1
  },
  2078: {
    T: -1
  },
  2079: {},
  2080: {
    T: 1
  },
  2081: {
    T: -1
  },
  2082: {},
  2083: {
    T: 1
  },
  2084: {
    T: -1
  },
  2085: {
    T: 1
  },
  2086: {
    T: -1
  },
  2087: {
    T: 1
  },
  2088: {
    T: -1
  },
  2089: {
    T: 1
  },
  2090: {
    T: -1
  },
  2091: {},
  2092: {},
  2093: {
    T: 1
  },
  2094: {
    T: -1
  },
  2095: {},
  2096: {
    T: 1
  },
  2097: {
    T: -1
  },
  2098: {
    T: 1
  },
  2099: {
    T: -1
  },
  2100: {
    T: 1
  },
  2101: {
    T: -1
  },
  2102: {},
  2103: {
    T: 1
  },
  2104: {
    T: -1
  },
  2105: {},
  2106: {
    T: 1
  },
  2107: {
    T: -1
  },
  2108: {},
  2109: {
    T: 1
  },
  2110: {
    T: -1
  },
  2111: {
    T: 1
  },
  2112: {
    T: -1
  },
  2113: {
    T: 1
  },
  2114: {
    T: -1
  },
  2115: {},
  2116: {},
  2117: {},
  2118: {
    T: 1
  },
  2119: {
    T: -1
  },
  2120: {},
  2121: {
    T: 1
  },
  2122: {
    T: -1
  },
  2123: {
    T: 1
  },
  2124: {
    T: -1
  },
  2125: {},
  2126: {
    T: 1
  },
  2127: {
    T: -1
  },
  2128: {},
  2129: {
    T: 1
  },
  2130: {
    T: -1
  },
  2131: {
    T: 1
  },
  2132: {
    T: -1
  },
  2133: {
    T: 1
  },
  2134: {},
  2135: {},
  2136: {},
  2137: {
    T: 1
  },
  2138: {
    T: -1
  },
  2139: {
    T: 1
  },
  2140: {
    T: -1
  },
  2141: {},
  3072: {},
  3073: {},
  4096: {
    T: 1
  },
  4097: {
    T: -1
  },
  5002: {
    T: 1
  },
  5003: {
    T: -1
  },
  5081: {
    T: 1
  },
  5082: {
    T: -1
  },
  5083: {},
  5084: {
    T: 1
  },
  5085: {
    T: -1
  },
  5086: {
    T: 1
  },
  5087: {
    T: -1
  },
  5088: {},
  5089: {},
  5090: {},
  5092: {
    T: 1
  },
  5093: {
    T: -1
  },
  5094: {},
  5095: {
    T: 1
  },
  5096: {
    T: -1
  },
  5097: {},
  5099: {},
  65535: {
    n: ""
  }
};
var Ny = {
  6: {
    f: Dg
  },
  10: {
    f: Mi
  },
  12: {
    f: wl
  },
  13: {
    f: wl
  },
  14: {
    f: ca
  },
  15: {
    f: ca
  },
  16: {
    f: Dl
  },
  17: {
    f: ca
  },
  18: {
    f: ca
  },
  19: {
    f: wl
  },
  20: {
    f: Fh
  },
  21: {
    f: Fh
  },
  23: {
    f: jp
  },
  24: {
    f: gh
  },
  25: {
    f: ca
  },
  26: {},
  27: {},
  28: {
    f: function iy(r, c, o) {
      if (o && o.biff < 8) {
        var p = r.read_shift(2);
        var _ = r.read_shift(2);
        if (p == 65535 || p == -1) {
          return;
        }
        var V = r.read_shift(2);
        return [{
          r: p,
          c: _
        }, r.read_shift(Math.min(V, 2048), "cpstr")];
      }
      return function nv(r, c, o) {
        var p = r.read_shift(2);
        var _ = r.read_shift(2);
        var V = r.read_shift(2);
        var Y = r.read_shift(2);
        return [{
          r: p,
          c: _
        }, Vf(r, 0, o), Y, V];
      }(r, 0, o);
    }
  },
  29: {},
  34: {
    f: ca
  },
  35: {
    f: tv
  },
  38: {
    f: Dl
  },
  39: {
    f: Dl
  },
  40: {
    f: Dl
  },
  41: {
    f: Dl
  },
  42: {
    f: ca
  },
  43: {
    f: ca
  },
  47: {
    f: function vv(r, c, o) {
      var p = {
        Type: o.biff >= 8 ? r.read_shift(2) : 0
      };
      if (p.Type) {
        (function cm(r, c, o) {
          var p = o || {};
          p.Info = r.read_shift(2);
          r.l -= 2;
          p.Data = p.Info === 1 ? function am(r) {
            var c = {};
            var o = c.EncryptionVersionInfo = nf(r, 4);
            if (o.Major != 1 || o.Minor != 1) {
              throw "unrecognized version code " + o.Major + " : " + o.Minor;
            }
            c.Salt = r.read_shift(16);
            c.EncryptedVerifier = r.read_shift(16);
            c.EncryptedVerifierHash = r.read_shift(16);
            return c;
          }(r) : function ig(r, c) {
            var o = {};
            var p = o.EncryptionVersionInfo = nf(r, 4);
            c -= 4;
            if (p.Minor != 2) {
              throw new Error("unrecognized minor version code: " + p.Minor);
            }
            if (p.Major > 4 || p.Major < 2) {
              throw new Error("unrecognized major version code: " + p.Major);
            }
            o.Flags = r.read_shift(4);
            c -= 4;
            var _ = r.read_shift(4);
            c -= 4;
            o.EncryptionHeader = Nh(r, _);
            o.EncryptionVerifier = Uh(r, c -= _);
            return o;
          }(r, c);
          return p;
        })(r, c - 2, p);
      } else {
        (function uy(r, c, o, p) {
          var _ = {
            key: wl(r),
            verificationBytes: wl(r)
          };
          if (o.password) {
            _.verifier = lm(o.password);
          }
          p.valid = _.verificationBytes === _.verifier;
          if (p.valid) {
            p.insitu = function (r) {
              var c = 0;
              var o = rg(r);
              return function (p) {
                var _ = function (r, c, o, p, _) {
                  var V;
                  var Y;
                  _ ||= c;
                  p ||= rg("");
                  V = 0;
                  for (; V != c.length; ++V) {
                    Y = c[V];
                    _[V] = Y = ((Y ^= p[o]) >> 5 | Y << 3) & 255;
                    ++o;
                  }
                  return [_, o, p];
                }(0, p, c, o);
                c = _[1];
                return _[0];
              };
            }(o.password);
          }
        })(r, 0, o, p);
      }
      return p;
    }
  },
  49: {
    f: function gp(r, c, o) {
      var p = {
        dyHeight: r.read_shift(2),
        fl: r.read_shift(2)
      };
      switch (o && o.biff || 8) {
        case 2:
          break;
        case 3:
        case 4:
          r.l += 2;
          break;
        default:
          r.l += 10;
      }
      p.name = yf(r, 0, o);
      return p;
    }
  },
  51: {
    f: wl
  },
  60: {},
  61: {
    f: function Md(r) {
      return {
        Pos: [r.read_shift(2), r.read_shift(2)],
        Dim: [r.read_shift(2), r.read_shift(2)],
        Flags: r.read_shift(2),
        CurTab: r.read_shift(2),
        FirstTab: r.read_shift(2),
        Selected: r.read_shift(2),
        TabRatio: r.read_shift(2)
      };
    }
  },
  64: {
    f: ca
  },
  65: {
    f: function Qm() {}
  },
  66: {
    f: wl
  },
  77: {},
  80: {},
  81: {},
  82: {},
  85: {
    f: wl
  },
  89: {},
  90: {},
  91: {},
  92: {
    f: function ec(r, c, o) {
      if (o.enc) {
        r.l += c;
        return "";
      }
      var p = r.l;
      var _ = Vf(r, 0, o);
      r.read_shift(c + p - r.l);
      return _;
    }
  },
  93: {
    f: function Wf(r, c, o) {
      if (o && o.biff < 8) {
        return function ov(r, c, o) {
          r.l += 4;
          var p = r.read_shift(2);
          var _ = r.read_shift(2);
          var V = r.read_shift(2);
          r.l += 2;
          r.l += 2;
          r.l += 2;
          r.l += 2;
          r.l += 2;
          r.l += 2;
          r.l += 2;
          r.l += 2;
          r.l += 2;
          r.l += 6;
          var Y = [];
          Y.push((sv[p] || kl)(r, c -= 36, o));
          return {
            cmo: [_, p, V],
            ft: Y
          };
        }(r, c, o);
      }
      var p = Pr(r);
      var _ = function Gm(r, c) {
        for (var o = r.l + c, p = []; r.l < o;) {
          var _ = r.read_shift(2);
          r.l -= 2;
          try {
            p[_] = Kg[_](r, o - r.l);
          } catch {
            r.l = o;
            return p;
          }
        }
        if (r.l != o) {
          r.l = o;
        }
        return p;
      }(r, c - 22);
      return {
        cmo: p,
        ft: _
      };
    }
  },
  94: {},
  95: {
    f: ca
  },
  96: {},
  97: {},
  99: {
    f: ca
  },
  125: {
    f: Yf
  },
  128: {
    f: function yp(r) {
      r.l += 4;
      var c = [r.read_shift(2), r.read_shift(2)];
      if (c[0] !== 0) {
        c[0]--;
      }
      if (c[1] !== 0) {
        c[1]--;
      }
      if (c[0] > 7 || c[1] > 7) {
        throw new Error("Bad Gutters: " + c.join("|"));
      }
      return c;
    }
  },
  129: {
    f: function f0(r, c, o) {
      var p = o && o.biff == 8 || c == 2 ? r.read_shift(2) : (r.l += c, 0);
      return {
        fDialog: p & 16,
        fBelow: p & 64,
        fRight: p & 128
      };
    }
  },
  130: {
    f: wl
  },
  131: {
    f: ca
  },
  132: {
    f: ca
  },
  133: {
    f: function Gp(r, c, o) {
      var p = "";
      if (o.biff == 4) {
        if ((p = yf(r, 0, o)).length === 0) {
          p = "Sheet1";
        }
        return {
          name: p
        };
      }
      var _ = r.read_shift(4);
      var V = r.read_shift(1) & 3;
      var Y = r.read_shift(1);
      switch (Y) {
        case 0:
          Y = "Worksheet";
          break;
        case 1:
          Y = "Macrosheet";
          break;
        case 2:
          Y = "Chartsheet";
          break;
        case 6:
          Y = "VBAModule";
      }
      if ((p = yf(r, 0, o)).length === 0) {
        p = "Sheet1";
      }
      return {
        pos: _,
        hs: V,
        dt: Y,
        name: p
      };
    }
  },
  134: {},
  140: {
    f: function tm(r) {
      var o;
      var c = [0, 0];
      o = r.read_shift(2);
      c[0] = Bs[o] || o;
      o = r.read_shift(2);
      c[1] = Bs[o] || o;
      return c;
    }
  },
  141: {
    f: wl
  },
  144: {},
  146: {
    f: function bf(r) {
      for (var c = r.read_shift(2), o = []; c-- > 0;) {
        o.push(_f(r));
      }
      return o;
    }
  },
  151: {},
  152: {},
  153: {},
  154: {},
  155: {},
  156: {
    f: wl
  },
  157: {},
  158: {},
  160: {
    f: b0
  },
  161: {
    f: function E0(r, c) {
      var o = {};
      if (c >= 32) {
        r.l += 16;
        o.header = Dl(r);
        o.footer = Dl(r);
        r.l += 2;
      }
      return o;
    }
  },
  174: {},
  175: {},
  176: {},
  177: {},
  178: {},
  180: {},
  181: {},
  182: {},
  184: {},
  185: {},
  189: {
    f: function $g(r, c) {
      for (var o = r.l + c - 2, p = r.read_shift(2), _ = r.read_shift(2), V = []; r.l < o;) {
        V.push(X0(r));
      }
      if (r.l !== o) {
        throw new Error("MulRK read error");
      }
      var Y = r.read_shift(2);
      if (V.length != Y - _ + 1) {
        throw new Error("MulRK length mismatch");
      }
      return {
        r: p,
        c: _,
        C: Y,
        rkrec: V
      };
    }
  },
  190: {
    f: function Kp(r, c) {
      for (var o = r.l + c - 2, p = r.read_shift(2), _ = r.read_shift(2), V = []; r.l < o;) {
        V.push(r.read_shift(2));
      }
      if (r.l !== o) {
        throw new Error("MulBlank read error");
      }
      var Y = r.read_shift(2);
      if (V.length != Y - _ + 1) {
        throw new Error("MulBlank length mismatch");
      }
      return {
        r: p,
        c: _,
        C: Y,
        ixfe: V
      };
    }
  },
  193: {
    f: Mi
  },
  197: {},
  198: {},
  199: {},
  200: {},
  201: {},
  202: {
    f: ca
  },
  203: {},
  204: {},
  205: {},
  206: {},
  207: {},
  208: {},
  209: {},
  210: {},
  211: {},
  213: {},
  215: {},
  216: {},
  217: {},
  218: {
    f: wl
  },
  220: {},
  221: {
    f: ca
  },
  222: {},
  224: {
    f: function $m(r, c, o) {
      var p = {};
      p.ifnt = r.read_shift(2);
      p.numFmtId = r.read_shift(2);
      p.flags = r.read_shift(2);
      p.fStyle = p.flags >> 2 & 1;
      p.data = function Ih(r, c, o, p) {
        var _ = {};
        var V = r.read_shift(4);
        var Y = r.read_shift(4);
        var ee = r.read_shift(4);
        var Te = r.read_shift(2);
        _.patternType = Nt[ee >> 26];
        if (p.cellStyles) {
          _.alc = V & 7;
          _.fWrap = V >> 3 & 1;
          _.alcV = V >> 4 & 7;
          _.fJustLast = V >> 7 & 1;
          _.trot = V >> 8 & 255;
          _.cIndent = V >> 16 & 15;
          _.fShrinkToFit = V >> 20 & 1;
          _.iReadOrder = V >> 22 & 2;
          _.fAtrNum = V >> 26 & 1;
          _.fAtrFnt = V >> 27 & 1;
          _.fAtrAlc = V >> 28 & 1;
          _.fAtrBdr = V >> 29 & 1;
          _.fAtrPat = V >> 30 & 1;
          _.fAtrProt = V >> 31 & 1;
          _.dgLeft = Y & 15;
          _.dgRight = Y >> 4 & 15;
          _.dgTop = Y >> 8 & 15;
          _.dgBottom = Y >> 12 & 15;
          _.icvLeft = Y >> 16 & 127;
          _.icvRight = Y >> 23 & 127;
          _.grbitDiag = Y >> 30 & 3;
          _.icvTop = ee & 127;
          _.icvBottom = ee >> 7 & 127;
          _.icvDiag = ee >> 14 & 127;
          _.dgDiag = ee >> 21 & 15;
          _.icvFore = Te & 127;
          _.icvBack = Te >> 7 & 127;
          _.fsxButton = Te >> 14 & 1;
        }
        return _;
      }(r, 0, 0, o);
      return p;
    }
  },
  225: {
    f: function ef(r, c) {
      if (c !== 0) {
        r.read_shift(2);
      }
      return 1200;
    }
  },
  226: {
    f: Mi
  },
  227: {},
  229: {
    f: function rv(r, c) {
      for (var o = [], p = r.read_shift(2); p--;) {
        o.push(dh(r));
      }
      return o;
    }
  },
  233: {},
  235: {},
  236: {},
  237: {},
  239: {},
  240: {},
  241: {},
  242: {},
  244: {},
  245: {},
  246: {},
  247: {},
  248: {},
  249: {},
  251: {},
  252: {
    f: function jg(r, c) {
      for (var o = r.l + c, p = r.read_shift(4), _ = r.read_shift(4), V = [], Y = 0; Y != _ && r.l < o; ++Y) {
        V.push(Wu(r));
      }
      V.Count = p;
      V.Unique = _;
      return V;
    }
  },
  253: {
    f: function zp(r, c, o) {
      var p = ad(r, c, o);
      p.isst = r.read_shift(4);
      return p;
    }
  },
  255: {
    f: function fp(r, c) {
      var o = {};
      o.dsst = r.read_shift(2);
      r.l += c - 2;
      return o;
    }
  },
  256: {},
  259: {},
  290: {},
  311: {},
  312: {},
  315: {},
  317: {
    f: Oh
  },
  318: {},
  319: {},
  320: {},
  330: {},
  331: {},
  333: {},
  334: {},
  335: {},
  336: {},
  337: {},
  338: {},
  339: {},
  340: {},
  351: {},
  352: {
    f: ca
  },
  353: {
    f: Mi
  },
  401: {},
  402: {},
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  425: {},
  426: {},
  427: {},
  428: {},
  429: {},
  430: {
    f: function ty(r, c, o) {
      var p = r.l + c;
      var _ = r.read_shift(2);
      var V = r.read_shift(2);
      o.sbcch = V;
      if (V == 1025 || V == 14849) {
        return [V, _];
      }
      if (V < 1 || V > 255) {
        throw new Error("Unexpected SupBook type: " + V);
      }
      for (var Y = Bf(r, V), ee = []; p > r.l;) {
        ee.push(cp(r));
      }
      return [V, _, Y, ee];
    }
  },
  431: {
    f: ca
  },
  432: {},
  433: {},
  434: {},
  437: {},
  438: {
    f: function Gc(r, c, o) {
      var p = r.l;
      var _ = "";
      try {
        r.l += 4;
        if ([0, 5, 7, 11, 12, 14].indexOf((o.lastobj || {
          cmo: [0, 0]
        }).cmo[1]) == -1) {
          r.l += 6;
        } else {
          (function J0(r) {
            var c = r.read_shift(1);
            r.l++;
            var o = r.read_shift(2);
            r.l += 2;
          })(r);
        }
        var ee = r.read_shift(2);
        r.read_shift(2);
        wl(r);
        var Te = r.read_shift(2);
        r.l += Te;
        for (var Ne = 1; Ne < r.lens.length - 1; ++Ne) {
          if (r.l - p != r.lens[Ne]) {
            throw new Error("TxO: bad continue record");
          }
          var ze = r[r.l];
          if ((_ += Bf(r, r.lens[Ne + 1] - r.lens[Ne] - 1)).length >= (ze ? ee : ee * 2)) {
            break;
          }
        }
        if (_.length !== ee && _.length !== ee * 2) {
          throw new Error("cchText: " + ee + " != " + _.length);
        }
        r.l = p + c;
        return {
          t: _
        };
      } catch {
        r.l = p + c;
        return {
          t: _
        };
      }
    }
  },
  439: {
    f: ca
  },
  440: {
    f: function Ky(r, c) {
      var o = dh(r);
      r.l += 16;
      var p = function $0(r, c) {
        var o = r.l + c;
        var p = r.read_shift(4);
        if (p !== 2) {
          throw new Error("Unrecognized streamVersion: " + p);
        }
        var _ = r.read_shift(2);
        r.l += 2;
        var V;
        var Y;
        var ee;
        var Te;
        var ze;
        var Ft;
        var Ne = "";
        if (_ & 16) {
          V = up(r);
        }
        if (_ & 128) {
          Y = up(r);
        }
        if ((_ & 257) == 257) {
          ee = up(r);
        }
        if ((_ & 257) == 1) {
          Te = function Yg(r, c) {
            var o = r.read_shift(16);
            switch (o) {
              case "e0c9ea79f9bace118c8200aa004ba90b":
                return function c0(r) {
                  var c = r.read_shift(4);
                  var o = r.l;
                  var p = false;
                  if (c > 24) {
                    r.l += c - 24;
                    if (r.read_shift(16) === "795881f43b1d7f48af2c825dc4852763") {
                      p = true;
                    }
                    r.l = o;
                  }
                  var _ = r.read_shift((p ? c - 24 : c) >> 1, "utf16le").replace(Lt, "");
                  if (p) {
                    r.l += 24;
                  }
                  return _;
                }(r);
              case "0303000000000000c000000000000046":
                return function Wg(r) {
                  for (var c = r.read_shift(2), o = ""; c-- > 0;) {
                    o += "../";
                  }
                  var p = r.read_shift(0, "lpstr-ansi");
                  r.l += 2;
                  if (r.read_shift(2) != 57005) {
                    throw new Error("Bad FileMoniker");
                  }
                  if (r.read_shift(4) === 0) {
                    return o + p.replace(/\\/g, "/");
                  }
                  var V = r.read_shift(4);
                  if (r.read_shift(2) != 3) {
                    throw new Error("Bad FileMoniker");
                  }
                  return o + r.read_shift(V >> 1, "utf16le").replace(Lt, "");
                }(r);
              default:
                throw new Error("Unsupported Moniker " + o);
            }
          }(r);
        }
        if (_ & 8) {
          Ne = up(r);
        }
        if (_ & 32) {
          ze = r.read_shift(16);
        }
        if (_ & 64) {
          Ft = lu(r);
        }
        r.l = o;
        var _t = Y || ee || Te || "";
        if (_t && Ne) {
          _t += "#" + Ne;
        }
        _t ||= "#" + Ne;
        if (_ & 2 && _t.charAt(0) == "/" && _t.charAt(1) != "/") {
          _t = "file://" + _t;
        }
        var Ot = {
          Target: _t
        };
        if (ze) {
          Ot.guid = ze;
        }
        if (Ft) {
          Ot.time = Ft;
        }
        if (V) {
          Ot.Tooltip = V;
        }
        return Ot;
      }(r, c - 24);
      return [o, p];
    }
  },
  441: {},
  442: {
    f: cp
  },
  443: {},
  444: {
    f: wl
  },
  445: {},
  446: {},
  448: {
    f: Mi
  },
  449: {
    f: function pp(r) {
      r.read_shift(2);
      return r.read_shift(4);
    },
    r: 2
  },
  450: {
    f: Mi
  },
  512: {
    f: Jg
  },
  513: {
    f: qp
  },
  515: {
    f: function ph(r, c, o) {
      if (o.biffguess && o.biff == 2) {
        o.biff = 5;
      }
      var p = ad(r, 6, o);
      var _ = Dl(r);
      p.val = _;
      return p;
    }
  },
  516: {
    f: function Zy(r, c, o) {
      if (o.biffguess && o.biff == 2) {
        o.biff = 5;
      }
      var _ = ad(r, c, o);
      var V = cp(r, 0, o);
      _.val = V;
      return _;
    }
  },
  517: {
    f: function hh(r, c, o) {
      var p = ad(r, 6, o);
      var _ = Wm(r);
      p.val = _;
      p.t = _ === true || _ === false ? "b" : "e";
      return p;
    }
  },
  519: {
    f: lv
  },
  520: {
    f: function hp(r) {
      var c = {};
      c.r = r.read_shift(2);
      c.c = r.read_shift(2);
      c.cnt = r.read_shift(2) - c.c;
      var o = r.read_shift(2);
      r.l += 4;
      var p = r.read_shift(1);
      r.l += 3;
      if (p & 7) {
        c.level = p & 7;
      }
      if (p & 32) {
        c.hidden = true;
      }
      if (p & 64) {
        c.hpt = o / 20;
      }
      return c;
    }
  },
  523: {},
  545: {
    f: ny
  },
  549: {
    f: Hf
  },
  566: {},
  574: {
    f: function h0(r, c, o) {
      if (o && o.biff >= 2 && o.biff < 5) {
        return {};
      } else {
        return {
          RTL: r.read_shift(2) & 64
        };
      }
    }
  },
  638: {
    f: function Od(r) {
      var c = r.read_shift(2);
      var o = r.read_shift(2);
      var p = X0(r);
      return {
        r: c,
        c: o,
        ixfe: p[0],
        rknum: p[1]
      };
    }
  },
  659: {},
  1048: {},
  1054: {
    f: function p0(r, c, o) {
      return [r.read_shift(2), Vf(r, 0, o)];
    }
  },
  1084: {},
  1212: {
    f: function Jp(r, c, o) {
      var p = q0(r);
      r.l++;
      var _ = r.read_shift(1);
      return [S_(r, c -= 8, o), _, p];
    }
  },
  2048: {
    f: function av(r, c) {
      r.read_shift(2);
      var o = dh(r);
      var p = r.read_shift((c - 10) / 2, "dbcs-cont");
      return [o, p = p.replace(Lt, "")];
    }
  },
  2049: {},
  2050: {},
  2051: {},
  2052: {},
  2053: {},
  2054: {},
  2055: {},
  2056: {},
  2057: {
    f: Dd
  },
  2058: {},
  2059: {},
  2060: {},
  2061: {},
  2062: {},
  2063: {},
  2064: {},
  2066: {},
  2067: {},
  2128: {},
  2129: {},
  2130: {},
  2131: {},
  2132: {},
  2133: {},
  2134: {},
  2135: {},
  2136: {},
  2137: {},
  2138: {},
  2146: {},
  2147: {
    r: 12
  },
  2148: {},
  2149: {},
  2150: {},
  2151: {
    f: Mi
  },
  2152: {},
  2154: {},
  2155: {},
  2156: {},
  2161: {},
  2162: {},
  2164: {},
  2165: {},
  2166: {},
  2167: {},
  2168: {},
  2169: {},
  2170: {},
  2171: {},
  2172: {
    f: function _0(r) {
      r.l += 2;
      var c = {
        cxfs: 0,
        crc: 0
      };
      c.cxfs = r.read_shift(2);
      c.crc = r.read_shift(4);
      return c;
    },
    r: 12
  },
  2173: {
    f: function zh(r, c) {
      r.l += 2;
      var p = r.read_shift(2);
      r.l += 2;
      for (var _ = r.read_shift(2), V = []; _-- > 0;) {
        V.push(Of(r));
      }
      return {
        ixfe: p,
        ext: V
      };
    },
    r: 12
  },
  2174: {},
  2175: {},
  2180: {},
  2181: {},
  2182: {},
  2183: {},
  2184: {},
  2185: {},
  2186: {},
  2187: {},
  2188: {
    f: ca,
    r: 12
  },
  2189: {},
  2190: {
    r: 12
  },
  2191: {},
  2192: {},
  2194: {},
  2195: {},
  2196: {
    f: function Qp(r, c, o) {
      if (o.biff >= 8) {
        var p = r.read_shift(2);
        var _ = r.read_shift(2);
        return [Bf(r, p, o), Bf(r, _, o)];
      }
      r.l += c;
    },
    r: 12
  },
  2197: {},
  2198: {
    f: function xp(r, c, o) {
      var p = r.l + c;
      if (r.read_shift(4) !== 124226) {
        if (!o.cellStyles) {
          r.l = p;
          return;
        }
        var Y;
        var V = r.slice(r.l);
        r.l = p;
        try {
          Y = Oi(V, {
            type: "array"
          });
        } catch {
          return;
        }
        var ee = vt(Y, "theme/theme/theme1.xml", true);
        if (ee) {
          return Gu(ee, o);
        }
      }
    },
    r: 12
  },
  2199: {},
  2200: {},
  2201: {},
  2202: {
    f: function y0(r) {
      return [r.read_shift(4) !== 0, r.read_shift(4) !== 0, r.read_shift(4)];
    },
    r: 12
  },
  2203: {
    f: Mi
  },
  2204: {},
  2205: {},
  2206: {},
  2207: {},
  2211: {
    f: function Ef(r) {
      var c = function Ym(r) {
        var c = r.read_shift(2);
        var o = r.read_shift(2);
        r.l += 8;
        return {
          type: c,
          flags: o
        };
      }(r);
      if (c.type != 2211) {
        throw new Error("Invalid Future Record " + c.type);
      }
      return r.read_shift(4) !== 0;
    }
  },
  2212: {},
  2213: {},
  2214: {},
  2215: {},
  4097: {},
  4098: {},
  4099: {},
  4102: {},
  4103: {},
  4105: {},
  4106: {},
  4107: {},
  4108: {},
  4109: {},
  4116: {},
  4117: {},
  4118: {},
  4119: {},
  4120: {},
  4121: {},
  4122: {},
  4123: {},
  4124: {},
  4125: {},
  4126: {},
  4127: {},
  4128: {},
  4129: {},
  4130: {},
  4132: {},
  4133: {},
  4134: {
    f: wl
  },
  4135: {},
  4146: {},
  4147: {},
  4148: {},
  4149: {},
  4154: {},
  4156: {},
  4157: {},
  4158: {},
  4159: {},
  4160: {},
  4161: {},
  4163: {},
  4164: {
    f: function Ka(r, c, o) {
      var p = {
        area: false
      };
      if (o.biff != 5) {
        r.l += c;
        return p;
      }
      var _ = r.read_shift(1);
      r.l += 3;
      if (_ & 16) {
        p.area = true;
      }
      return p;
    }
  },
  4165: {},
  4166: {},
  4168: {},
  4170: {},
  4171: {},
  4174: {},
  4175: {},
  4176: {},
  4177: {},
  4187: {},
  4188: {
    f: function _p(r) {
      for (var c = r.read_shift(2), o = []; c-- > 0;) {
        o.push(_f(r));
      }
      return o;
    }
  },
  4189: {},
  4191: {},
  4192: {},
  4193: {},
  4194: {},
  4195: {},
  4196: {},
  4197: {},
  4198: {},
  4199: {},
  4200: {},
  0: {
    f: Jg
  },
  1: {},
  2: {
    f: function Zf(r, c, o) {
      var p = ad(r, 7, o);
      var _ = r.read_shift(2);
      p.t = "n";
      p.val = _;
      return p;
    }
  },
  3: {
    f: function ly(r, c, o) {
      var p = ad(r, 7, o);
      var _ = Dl(r);
      p.t = "n";
      p.val = _;
      return p;
    }
  },
  4: {
    f: function Ir(r, c, o) {
      if (o.biffguess && o.biff == 5) {
        o.biff = 2;
      }
      var p = ad(r, 7, o);
      var _ = Vf(r, 0, o);
      p.t = "str";
      p.val = _;
      return p;
    }
  },
  5: {
    f: function Ep(r, c, o) {
      var p = r.l + 7;
      var _ = ad(r, 6, o);
      r.l = p;
      var V = Wm(r);
      _.val = V;
      _.t = V === true || V === false ? "b" : "e";
      return _;
    }
  },
  7: {
    f: function nm(r) {
      var c = r.read_shift(1);
      if (c === 0) {
        r.l++;
        return "";
      } else {
        return r.read_shift(c, "sbcs-cont");
      }
    }
  },
  8: {},
  9: {
    f: Dd
  },
  11: {},
  22: {
    f: wl
  },
  30: {
    f: fh
  },
  31: {},
  32: {},
  33: {
    f: ny
  },
  36: {},
  37: {
    f: Hf
  },
  50: {
    f: function cv(r, c) {
      r.l += 6;
      r.l += 2;
      r.l += 1;
      r.l += 3;
      r.l += 1;
      r.l += c - 13;
    }
  },
  62: {},
  52: {},
  67: {
    f: function zy(r) {
      var c = {};
      c.ifnt = r.read_shift(1);
      r.l++;
      c.flags = r.read_shift(1);
      c.numFmtId = c.flags & 63;
      c.flags >>= 6;
      c.fStyle = 0;
      c.data = {};
      return c;
    }
  },
  68: {
    f: wl
  },
  69: {},
  86: {},
  126: {},
  127: {
    f: function cl(r) {
      var c = r.read_shift(2);
      var o = r.read_shift(2);
      var p = r.read_shift(4);
      var _ = {
        fmt: c,
        env: o,
        len: p,
        data: r.slice(r.l, r.l + p)
      };
      r.l += p;
      return _;
    }
  },
  135: {},
  136: {},
  137: {},
  143: {
    f: function uv(r) {
      var c = r.read_shift(4);
      var o = r.read_shift(1);
      var p = r.read_shift(o, "sbcs");
      if (p.length === 0) {
        p = "Sheet1";
      }
      return {
        flags: c,
        name: p
      };
    }
  },
  145: {},
  148: {},
  149: {},
  150: {},
  169: {},
  171: {},
  188: {},
  191: {},
  192: {},
  194: {},
  195: {},
  214: {
    f: function x0(r, c, o) {
      var p = r.l + c;
      var _ = ad(r, 6, o);
      var V = r.read_shift(2);
      var Y = Bf(r, V, o);
      r.l = p;
      _.t = "str";
      _.val = Y;
      return _;
    }
  },
  223: {},
  234: {},
  354: {},
  421: {},
  518: {
    f: Dg
  },
  521: {
    f: Dd
  },
  536: {
    f: gh
  },
  547: {
    f: tv
  },
  561: {},
  579: {
    f: function Xm(r) {
      var c = {};
      c.ifnt = r.read_shift(1);
      c.numFmtId = r.read_shift(1);
      c.flags = r.read_shift(2);
      c.fStyle = c.flags >> 2 & 1;
      c.data = {};
      return c;
    }
  },
  1030: {
    f: Dg
  },
  1033: {
    f: Dd
  },
  1091: {
    f: function qm(r) {
      var c = {};
      c.ifnt = r.read_shift(1);
      c.numFmtId = r.read_shift(1);
      c.flags = r.read_shift(2);
      c.fStyle = c.flags >> 2 & 1;
      c.data = {};
      return c;
    }
  },
  2157: {},
  2163: {},
  2177: {},
  2240: {},
  2241: {},
  2242: {},
  2243: {},
  2244: {},
  2245: {},
  2246: {},
  2247: {},
  2248: {},
  2249: {},
  2250: {},
  2251: {},
  2262: {
    r: 12
  },
  101: {},
  102: {},
  105: {},
  106: {},
  107: {},
  109: {},
  112: {},
  114: {},
  29282: {}
};
function Qr(r, c, o, p) {
  var _ = c;
  if (!isNaN(_)) {
    var V = p || (o || []).length || 0;
    var Y = r.next(4);
    Y.write_shift(2, _);
    Y.write_shift(2, V);
    if (V > 0 && Os(o)) {
      r.push(o);
    }
  }
}
function J1(r, c, o, p) {
  var _ = Gi(9);
  Gd(_, r, c);
  ch(o, p || "b", _);
  return _;
}
function $1(r, c) {
  c.forEach(function (o) {
    var p = o[0].map(function (V) {
      return V.t;
    }).join("");
    if (p.length <= 2048) {
      return Qr(r, 28, iv(p, o[1], o[2]));
    }
    Qr(r, 28, iv(p.slice(0, 2048), o[1], o[2], p.length));
    for (var _ = 2048; _ < p.length; _ += 2048) {
      Qr(r, 28, iv(p.slice(_, Math.min(_ + 2048, p.length)), -1, -1, Math.min(2048, p.length - _)));
    }
  });
}
function SE(r, c, o, p, _, V) {
  var Y = 0;
  if (c.z != null && (Y = _._BIFF2FmtTable.indexOf(c.z)) == -1) {
    _._BIFF2FmtTable.push(c.z);
    Y = _._BIFF2FmtTable.length - 1;
  }
  var ee = 0;
  if (c.z != null) {
    for (; ee < _.cellXfs.length && _.cellXfs[ee].numFmtId != Y; ++ee);
    if (ee == _.cellXfs.length) {
      _.cellXfs.push({
        numFmtId: Y
      });
    }
  }
  if (c.v != null) {
    switch (c.t) {
      case "d":
      case "n":
        var Te = c.t == "d" ? So(Rs(c.v, V), V) : c.v;
        if (_.biff == 2 && Te == (Te | 0) && Te >= 0 && Te < 65536) {
          Qr(r, 2, function nl(r, c, o, p, _) {
            var V = Gi(9);
            Gd(V, r, c, p || 0, _ || 0);
            V.write_shift(2, o);
            return V;
          }(o, p, Te, ee, Y));
        } else if (isNaN(Te)) {
          Qr(r, 5, J1(o, p, 36, "e"));
        } else if (isFinite(Te)) {
          Qr(r, 3, function A0(r, c, o, p, _) {
            var V = Gi(15);
            Gd(V, r, c, p || 0, _ || 0);
            V.write_shift(8, o, "f");
            return V;
          }(o, p, Te, ee, Y));
        } else {
          Qr(r, 5, J1(o, p, 7, "e"));
        }
        return;
      case "b":
      case "e":
        Qr(r, 5, J1(o, p, c.v, c.t));
        return;
      case "s":
      case "str":
        Qr(r, 4, function wE(r, c, o) {
          var p = Gi(8 + o.length * 2);
          Gd(p, r, c);
          p.write_shift(1, o.length);
          p.write_shift(o.length, o, "sbcs");
          if (p.l < p.length) {
            return p.slice(0, p.l);
          } else {
            return p;
          }
        }(o, p, c.v == null ? "" : String(c.v).slice(0, 255)));
        return;
    }
  }
  Qr(r, 1, Gd(null, o, p));
}
var Bg = 1;
var Vp = [];
function ME(r, c, o, p, _, V) {
  var Y = 16 + Pg(_.cellXfs, c, _);
  if (c.v != null || c.bf) {
    if (c.bf) {
      Qr(r, 6, function Dy(r, c, o, p, _) {
        var V = uh(c, o, _);
        var Y = function s_(r) {
          if (r == null) {
            var c = Gi(8);
            c.write_shift(1, 3);
            c.write_shift(1, 0);
            c.write_shift(2, 0);
            c.write_shift(2, 0);
            c.write_shift(2, 65535);
            return c;
          }
          return Qa(typeof r == "number" ? r : 0);
        }(r.v);
        var ee = Gi(6);
        ee.write_shift(2, 33);
        ee.write_shift(4, 0);
        for (var Ne = Gi(r.bf.length), ze = 0; ze < r.bf.length; ++ze) {
          Ne[ze] = r.bf[ze];
        }
        return St([V, Y, ee, Ne]);
      }(c, o, p, 0, Y));
    } else {
      switch (c.t) {
        case "d":
        case "n":
          var ee = c.t == "d" ? So(Rs(c.v, V), V) : c.v;
          if (isNaN(ee)) {
            Qr(r, 517, ev(o, p, 36, Y, 0, "e"));
          } else if (isFinite(ee)) {
            Qr(r, 515, function v0(r, c, o, p) {
              var _ = Gi(14);
              uh(r, c, p, _);
              Qa(o, _);
              return _;
            }(o, p, ee, Y));
          } else {
            Qr(r, 517, ev(o, p, 7, Y, 0, "e"));
          }
          break;
        case "b":
        case "e":
          Qr(r, 517, ev(o, p, c.v, Y, 0, c.t));
          break;
        case "s":
        case "str":
          if (_.bookSST) {
            Qr(r, 253, function Ph(r, c, o, p) {
              var _ = Gi(10);
              uh(r, c, p, _);
              _.write_shift(4, o);
              return _;
            }(o, p, zv(_.Strings, c.v == null ? "" : String(c.v), _.revStrings), Y));
          } else {
            Qr(r, 516, function Gy(r, c, o, p, _) {
              var V = !_ || _.biff == 8;
              var Y = Gi(+V + 8 + (1 + V) * o.length);
              uh(r, c, p, Y);
              Y.write_shift(2, o.length);
              if (V) {
                Y.write_shift(1, 1);
              }
              Y.write_shift((1 + V) * o.length, o, V ? "utf16le" : "sbcs");
              return Y;
            }(o, p, (c.v == null ? "" : String(c.v)).slice(0, 255), Y, _));
          }
          break;
        default:
          Qr(r, 513, uh(o, p, Y));
      }
    }
  } else {
    Qr(r, 513, uh(o, p, Y));
  }
}
function V_(r, c, o) {
  var ze;
  var p = tl();
  var _ = o.SheetNames[r];
  var V = o.Sheets[_] || {};
  var Y = (o || {}).Workbook || {};
  var ee = (Y.Sheets || [])[r] || {};
  var Te = V["!data"] != null;
  var Ne = c.biff == 8;
  var Ft = "";
  var _t = [];
  var Ot = Ps(V["!ref"] || "A1");
  var zt = Ne ? 65536 : 16384;
  if (Ot.e.c > 255 || Ot.e.r >= zt) {
    if (c.WTF) {
      throw new Error("Range " + (V["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    }
    Ot.e.c = Math.min(Ot.e.c, 255);
    Ot.e.r = Math.min(Ot.e.c, zt - 1);
  }
  Qr(p, 2057, Td(0, 16, c));
  Qr(p, 13, _u(1));
  Qr(p, 12, _u(100));
  Qr(p, 15, zl(true));
  Qr(p, 17, zl(false));
  Qr(p, 16, Qa(0.001));
  Qr(p, 95, zl(true));
  Qr(p, 42, zl(false));
  Qr(p, 43, zl(false));
  Qr(p, 130, _u(1));
  Qr(p, 128, function em(r) {
    var c = Gi(8);
    c.write_shift(4, 0);
    c.write_shift(2, r[0] ? r[0] + 1 : 0);
    c.write_shift(2, r[1] ? r[1] + 1 : 0);
    return c;
  }([0, 0]));
  Qr(p, 131, zl(false));
  Qr(p, 132, zl(false));
  if (Ne) {
    (function Yb(r, c) {
      if (c) {
        var o = 0;
        c.forEach(function (p, _) {
          if (++o <= 256 && p) {
            Qr(r, 125, function $p(r, c) {
              var o = Gi(12);
              o.write_shift(2, c);
              o.write_shift(2, c);
              o.write_shift(2, r.width * 256);
              o.write_shift(2, 0);
              var p = 0;
              if (r.hidden) {
                p |= 1;
              }
              o.write_shift(1, p);
              o.write_shift(1, p = r.level || 0);
              o.write_shift(2, 0);
              return o;
            }(Ip(_, p), _));
          }
        });
      }
    })(p, V["!cols"]);
  }
  Qr(p, 512, function Jm(r, c) {
    var o = c.biff != 8 && c.biff ? 2 : 4;
    var p = Gi(o * 2 + 6);
    p.write_shift(o, r.s.r);
    p.write_shift(o, r.e.r + 1);
    p.write_shift(2, r.s.c);
    p.write_shift(2, r.e.c + 1);
    p.write_shift(2, 0);
    return p;
  }(Ot, c));
  var nn = (((o || {}).Workbook || {}).WBProps || {}).date1904;
  if (Ne) {
    V["!links"] = [];
  }
  for (var Pt = [], rn = [], yn = Ot.s.c; yn <= Ot.e.c; ++yn) {
    _t[yn] = jo(yn);
  }
  for (var un = Ot.s.r; un <= Ot.e.r; ++un) {
    if (Te) {
      rn = V["!data"][un] || [];
    }
    Ft = Da(un);
    yn = Ot.s.c;
    if (Te) {
      rn = V["!data"][un] || [];
    }
    Ft = Da(un);
    yn = Ot.s.c;
    for (; yn <= Ot.e.c; ++yn) {
      ze = _t[yn] + Ft;
      var ai = Te ? rn[yn] : V[ze];
      if (!!ai) {
        ME(p, ai, un, yn, c, nn);
        if (Ne && ai.l) {
          V["!links"].push([ze, ai.l]);
        }
        if (ai.c) {
          Pt.push([ai.c, un, yn]);
        }
      }
    }
  }
  var Ni = ee.CodeName || ee.name || _;
  if (Ne) {
    (function tx(r, c) {
      var Y;
      var o = [];
      var p = 0;
      var _ = tl();
      var V = Bg;
      c.forEach(function (Te, Ne) {
        var ze = "";
        var Ft = Te[0].map(function (un) {
          if (un.a && !ze) {
            ze = un.a;
          }
          return un.t;
        }).join("");
        ++Bg;
        var _t = Gi(150);
        _t.write_shift(2, 15);
        _t.write_shift(2, 61444);
        _t.write_shift(4, 150);
        _t.write_shift(2, 3234);
        _t.write_shift(2, 61450);
        _t.write_shift(4, 8);
        _t.write_shift(4, Bg);
        _t.write_shift(4, 2560);
        _t.write_shift(2, 227);
        _t.write_shift(2, 61451);
        _t.write_shift(4, 84);
        _t.write_shift(2, 128);
        _t.write_shift(4, 0);
        _t.write_shift(2, 139);
        _t.write_shift(4, 2);
        _t.write_shift(2, 191);
        _t.write_shift(4, 524296);
        _t.write_shift(2, 344);
        _t.l += 4;
        _t.write_shift(2, 385);
        _t.write_shift(4, 134217808);
        _t.write_shift(2, 387);
        _t.write_shift(4, 134217808);
        _t.write_shift(2, 389);
        _t.write_shift(4, 268435700);
        _t.write_shift(2, 447);
        _t.write_shift(4, 1048592);
        _t.write_shift(2, 448);
        _t.write_shift(4, 134217809);
        _t.write_shift(2, 451);
        _t.write_shift(4, 268435700);
        _t.write_shift(2, 513);
        _t.write_shift(4, 134217809);
        _t.write_shift(2, 515);
        _t.write_shift(4, 268435700);
        _t.write_shift(2, 575);
        _t.write_shift(4, 196609);
        _t.write_shift(2, 959);
        _t.write_shift(4, (Te[0].hidden ? 2 : 0) | 131072);
        _t.l += 2;
        _t.write_shift(2, 61456);
        _t.write_shift(4, 18);
        _t.write_shift(2, 3);
        _t.write_shift(2, Te[2] + 2);
        _t.l += 2;
        _t.write_shift(2, Te[1] + 1);
        _t.l += 2;
        _t.write_shift(2, Te[2] + 4);
        _t.l += 2;
        _t.write_shift(2, Te[1] + 5);
        _t.l += 2;
        _t.l += 2;
        _t.write_shift(2, 61457);
        _t.l += 4;
        _t.l = 150;
        if (Ne == 0) {
          Y = _t;
        } else {
          Qr(_, 236, _t);
        }
        p += 150;
        var Ot = Gi(52);
        Ot.write_shift(2, 21);
        Ot.write_shift(2, 18);
        Ot.write_shift(2, 25);
        Ot.write_shift(2, Bg);
        Ot.write_shift(2, 0);
        Ot.l = 22;
        Ot.write_shift(2, 13);
        Ot.write_shift(2, 22);
        Ot.write_shift(4, 1651663474);
        Ot.write_shift(4, 2503426821);
        Ot.write_shift(4, 2150634280);
        Ot.write_shift(4, 1768515844 + Bg * 256);
        Ot.write_shift(2, 0);
        Ot.write_shift(4, 0);
        Ot.l += 4;
        Qr(_, 93, Ot);
        var zt = Gi(8);
        zt.l += 2;
        zt.write_shift(2, 61453);
        zt.l += 4;
        Qr(_, 236, zt);
        p += 8;
        var nn = Gi(18);
        nn.write_shift(2, 18);
        nn.l += 8;
        nn.write_shift(2, Ft.length);
        nn.write_shift(2, 16);
        nn.l += 4;
        Qr(_, 438, nn);
        var Pt = Gi(1 + Ft.length);
        Pt.write_shift(1, 0);
        Pt.write_shift(Ft.length, Ft, "sbcs");
        Qr(_, 60, Pt);
        var rn = Gi(16);
        rn.l += 8;
        rn.write_shift(2, Ft.length);
        rn.l += 6;
        Qr(_, 60, rn);
        var yn = Gi(12 + ze.length);
        yn.write_shift(2, Te[1]);
        yn.write_shift(2, Te[2]);
        yn.write_shift(2, (Te[0].hidden ? 0 : 2) | 0);
        yn.write_shift(2, Bg);
        yn.write_shift(2, ze.length);
        yn.write_shift(1, 0);
        yn.write_shift(ze.length, ze, "sbcs");
        yn.l++;
        o.push(yn);
      });
      var ee = Gi(80);
      ee.write_shift(2, 15);
      ee.write_shift(2, 61442);
      ee.write_shift(4, p + ee.length - 8);
      ee.write_shift(2, 16);
      ee.write_shift(2, 61448);
      ee.write_shift(4, 8);
      ee.write_shift(4, c.length + 1);
      ee.write_shift(4, Bg);
      ee.write_shift(2, 15);
      ee.write_shift(2, 61443);
      ee.write_shift(4, p + 48);
      ee.write_shift(2, 15);
      ee.write_shift(2, 61444);
      ee.write_shift(4, 40);
      ee.write_shift(2, 1);
      ee.write_shift(2, 61449);
      ee.write_shift(4, 16);
      ee.l += 16;
      ee.write_shift(2, 2);
      ee.write_shift(2, 61450);
      ee.write_shift(4, 8);
      ee.write_shift(4, V);
      ee.write_shift(4, 5);
      Qr(r, 236, Y ? St([ee, Y]) : ee);
      r.push(_.end());
      o.forEach(function (Te) {
        Qr(r, 28, Te);
      });
      Vp.push([V, c.length + 1, Bg]);
      ++Bg;
    })(p, Pt);
  } else {
    $1(p, Pt);
  }
  if (Ne) {
    Qr(p, 574, function jm(r) {
      var c = Gi(18);
      var o = 1718;
      if (r && r.RTL) {
        o |= 64;
      }
      c.write_shift(2, o);
      c.write_shift(4, 0);
      c.write_shift(4, 64);
      c.write_shift(4, 0);
      c.write_shift(4, 0);
      return c;
    }((Y.Views || [])[0]));
  }
  if (Ne && (V["!merges"] || []).length) {
    Qr(p, 229, function ry(r) {
      var c = Gi(2 + r.length * 8);
      c.write_shift(2, r.length);
      for (var o = 0; o < r.length; ++o) {
        Eu(r[o], c);
      }
      return c;
    }(V["!merges"]));
  }
  if (Ne) {
    (function Wb(r, c) {
      for (var o = 0; o < c["!links"].length; ++o) {
        var p = c["!links"][o];
        Qr(r, 440, sy(p));
        if (p[1].Tooltip) {
          Qr(r, 2048, oy(p));
        }
      }
      delete c["!links"];
    })(p, V);
  }
  Qr(p, 442, Zp(Ni));
  if (Ne) {
    (function TE(r, c) {
      var o = Gi(19);
      o.write_shift(4, 2151);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(2, 3);
      o.write_shift(1, 1);
      o.write_shift(4, 0);
      Qr(r, 2151, o);
      (o = Gi(39)).write_shift(4, 2152);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(2, 3);
      o.write_shift(1, 0);
      o.write_shift(4, 0);
      o.write_shift(2, 1);
      o.write_shift(4, 4);
      o.write_shift(2, 0);
      Eu(Ps(c["!ref"] || "A1"), o);
      o.write_shift(4, 4);
      Qr(r, 2152, o);
    })(p, V);
  }
  Qr(p, 10);
  return p.end();
}
function Zb(r, c, o) {
  var p = tl();
  var _ = (r || {}).Workbook || {};
  var V = _.Sheets || [];
  var Y = _.WBProps || {};
  var ee = o.biff == 8;
  var Te = o.biff == 5;
  Qr(p, 2057, Td(0, 5, o));
  if (o.bookType == "xla") {
    Qr(p, 135);
  }
  Qr(p, 225, ee ? _u(1200) : null);
  Qr(p, 193, function yr(r, c) {
    c ||= Gi(r);
    for (var o = 0; o < r; ++o) {
      c.write_shift(1, 0);
    }
    return c;
  }(2));
  if (Te) {
    Qr(p, 191);
  }
  if (Te) {
    Qr(p, 192);
  }
  Qr(p, 226);
  Qr(p, 92, function d0(r, c) {
    var o = !c || c.biff == 8;
    var p = Gi(o ? 112 : 54);
    p.write_shift(c.biff == 8 ? 2 : 1, 7);
    if (o) {
      p.write_shift(1, 0);
    }
    p.write_shift(4, 859007059);
    p.write_shift(4, (o ? 0 : 536870912) | 5458548);
    for (; p.l < p.length;) {
      p.write_shift(1, o ? 0 : 32);
    }
    return p;
  }(0, o));
  Qr(p, 66, _u(ee ? 1200 : 1252));
  if (ee) {
    Qr(p, 353, _u(0));
  }
  if (ee) {
    Qr(p, 448);
  }
  Qr(p, 317, function Xp(r) {
    for (var c = Gi(r * 2), o = 0; o < r; ++o) {
      c.write_shift(2, o + 1);
    }
    return c;
  }(r.SheetNames.length));
  if (ee && r.vbaraw) {
    Qr(p, 211);
  }
  if (ee && r.vbaraw) {
    Qr(p, 442, Zp(Y.CodeName || "ThisWorkbook"));
  }
  Qr(p, 156, _u(17));
  Qr(p, 25, zl(false));
  Qr(p, 18, zl(false));
  Qr(p, 19, _u(0));
  if (ee) {
    Qr(p, 431, zl(false));
  }
  if (ee) {
    Qr(p, 444, _u(0));
  }
  Qr(p, 61, function Km() {
    var r = Gi(18);
    r.write_shift(2, 0);
    r.write_shift(2, 0);
    r.write_shift(2, 29280);
    r.write_shift(2, 17600);
    r.write_shift(2, 56);
    r.write_shift(2, 0);
    r.write_shift(2, 0);
    r.write_shift(2, 1);
    r.write_shift(2, 500);
    return r;
  }());
  Qr(p, 64, zl(false));
  Qr(p, 141, _u(0));
  Qr(p, 34, zl(function ky(r) {
    if (r.Workbook && r.Workbook.WBProps && tr(r.Workbook.WBProps.date1904)) {
      return "true";
    } else {
      return "false";
    }
  }(r) == "true"));
  Qr(p, 14, zl(true));
  if (ee) {
    Qr(p, 439, zl(false));
  }
  Qr(p, 218, _u(0));
  (function nx(r, c, o) {
    Qr(r, 49, function mp(r, c) {
      var o = r.name || "Arial";
      var p = c && c.biff == 5;
      var V = Gi(p ? 15 + o.length : 16 + o.length * 2);
      V.write_shift(2, (r.sz || 12) * 20);
      V.write_shift(4, 0);
      V.write_shift(2, 400);
      V.write_shift(4, 0);
      V.write_shift(2, 0);
      V.write_shift(1, o.length);
      if (!p) {
        V.write_shift(1, 1);
      }
      V.write_shift((p ? 1 : 2) * o.length, o, p ? "sbcs" : "utf16le");
      return V;
    }({
      sz: 12,
      color: {
        theme: 1
      },
      name: "Arial",
      family: 2,
      scheme: "minor"
    }, o));
  })(p, 0, o);
  (function ix(r, c, o) {
    if (!!c) {
      [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (p) {
        for (var _ = p[0]; _ <= p[1]; ++_) {
          if (c[_] != null) {
            Qr(r, 1054, ey(_, c[_], o));
          }
        }
      });
    }
  })(p, r.SSF, o);
  (function C1(r, c) {
    for (var o = 0; o < 16; ++o) {
      Qr(r, 224, Xg({
        numFmtId: 0,
        style: true
      }, 0, c));
    }
    c.cellXfs.forEach(function (p) {
      Qr(r, 224, Xg(p, 0, c));
    });
  })(p, o);
  if (ee) {
    Qr(p, 352, zl(false));
  }
  var ze = p.end();
  var Ft = tl();
  if (ee) {
    Qr(Ft, 140, function ay(r) {
      r ||= Gi(4);
      r.write_shift(2, 1);
      r.write_shift(2, 1);
      return r;
    }());
  }
  if (ee && Vp.length) {
    Qr(Ft, 235, function ex() {
      var r = Gi(82 + Vp.length * 8);
      r.write_shift(2, 15);
      r.write_shift(2, 61440);
      r.write_shift(4, 74 + Vp.length * 8);
      r.write_shift(2, 0);
      r.write_shift(2, 61446);
      r.write_shift(4, 16 + Vp.length * 8);
      r.write_shift(4, Bg);
      r.write_shift(4, Vp.length + 1);
      for (var c = 0, o = 0; o < Vp.length; ++o) {
        c += Vp[o] && Vp[o][1] || 0;
      }
      r.write_shift(4, c);
      r.write_shift(4, Vp.length);
      Vp.forEach(function (p) {
        r.write_shift(4, p[0]);
        r.write_shift(4, p[2]);
      });
      r.write_shift(2, 51);
      r.write_shift(2, 61451);
      r.write_shift(4, 18);
      r.write_shift(2, 191);
      r.write_shift(4, 524296);
      r.write_shift(2, 385);
      r.write_shift(4, 134217793);
      r.write_shift(2, 448);
      r.write_shift(4, 134217792);
      r.write_shift(2, 64);
      r.write_shift(2, 61726);
      r.write_shift(4, 16);
      r.write_shift(4, 134217741);
      r.write_shift(4, 134217740);
      r.write_shift(4, 134217751);
      r.write_shift(4, 268435703);
      return r;
    }());
  }
  if (ee && o.Strings) {
    (function Vb(r, c, o, p) {
      var _ = p || (o || []).length || 0;
      if (_ <= 8224) {
        return Qr(r, c, o, _);
      }
      var V = c;
      if (!isNaN(V)) {
        for (var Y = o.parts || [], ee = 0, Te = 0, Ne = 0; Ne + (Y[ee] || 8224) <= 8224;) {
          Ne += Y[ee] || 8224;
          ee++;
        }
        var ze = r.next(4);
        ze.write_shift(2, V);
        ze.write_shift(2, Ne);
        r.push(o.slice(Te, Te + Ne));
        Te += Ne;
        for (; Te < _;) {
          (ze = r.next(4)).write_shift(2, 60);
          Ne = 0;
          for (; Ne + (Y[ee] || 8224) <= 8224;) {
            Ne += Y[ee] || 8224;
            ee++;
          }
          ze.write_shift(2, Ne);
          r.push(o.slice(Te, Te + Ne));
          Te += Ne;
        }
      }
    })(Ft, 252, function Qg(r, c) {
      var o = Gi(8);
      o.write_shift(4, r.Count);
      o.write_shift(4, r.Unique);
      for (var p = [], _ = 0; _ < r.length; ++_) {
        p[_] = cu(r[_]);
      }
      var V = St([o].concat(p));
      V.parts = [o.length].concat(p.map(function (Y) {
        return Y.length;
      }));
      return V;
    }(o.Strings));
  }
  Qr(Ft, 10);
  var _t = Ft.end();
  var Ot = tl();
  var zt = 0;
  var nn = 0;
  for (nn = 0; nn < r.SheetNames.length; ++nn) {
    zt += (ee ? 12 : 11) + (ee ? 2 : 1) * r.SheetNames[nn].length;
  }
  var Pt = ze.length + zt + _t.length;
  for (nn = 0; nn < r.SheetNames.length; ++nn) {
    Qr(Ot, 133, zm({
      pos: Pt,
      hs: (V[nn] || {}).Hidden || 0,
      dt: 0,
      name: r.SheetNames[nn]
    }, o));
    Pt += c[nn].length;
  }
  var yn = Ot.end();
  if (zt != yn.length) {
    throw new Error("BS8 " + zt + " != " + yn.length);
  }
  var un = [];
  if (ze.length) {
    un.push(ze);
  }
  if (yn.length) {
    un.push(yn);
  }
  if (_t.length) {
    un.push(_t);
  }
  return St(un);
}
function OE(r, c) {
  for (var o = 0; o <= r.SheetNames.length; ++o) {
    var p = r.Sheets[r.SheetNames[o]];
    if (p && p["!ref"] && ml(p["!ref"]).e.c > 255 && typeof console !== "undefined" && console.error) {
      console.error("Worksheet '" + r.SheetNames[o] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var V = c || {};
  switch (V.biff || 2) {
    case 8:
    case 5:
      return function Gb(r, c) {
        var o = c || {};
        var p = [];
        if (r && !r.SSF) {
          r.SSF = Vs(Kt);
        }
        if (r && r.SSF) {
          Ko();
          ya(r.SSF);
          o.revssf = Ca(r.SSF);
          o.revssf[r.SSF[65535]] = 0;
          o.ssf = r.SSF;
        }
        Bg = 1;
        Vp = [];
        o.Strings = [];
        o.Strings.Count = 0;
        o.Strings.Unique = 0;
        aE(o);
        o.cellXfs = [];
        Pg(o.cellXfs, {}, {
          revssf: {
            General: 0
          }
        });
        r.Props ||= {};
        for (var _ = 0; _ < r.SheetNames.length; ++_) {
          p[p.length] = V_(_, o, r);
        }
        p.unshift(Zb(r, p, o));
        return St(p);
      }(r, c);
    case 4:
    case 3:
    case 2:
      return function DE(r, c) {
        for (var o = c || {}, p = tl(), _ = 0, V = 0; V < r.SheetNames.length; ++V) {
          if (r.SheetNames[V] == o.sheet) {
            _ = V;
          }
        }
        if (_ == 0 && o.sheet && r.SheetNames[0] != o.sheet) {
          throw new Error("Sheet not found: " + o.sheet);
        }
        Qr(p, o.biff == 4 ? 1033 : o.biff == 3 ? 521 : 9, Td(0, 16, o));
        if (((r.Workbook || {}).WBProps || {}).date1904) {
          Qr(p, 34, zl(true));
        }
        o.cellXfs = [{
          numFmtId: 0
        }];
        o._BIFF2FmtTable = ["General"];
        o._Fonts = [];
        var Y = tl();
        (function Hb(r, c, o, p, _) {
          var V = c["!data"] != null;
          var Y = Ps(c["!ref"] || "A1");
          var Te = "";
          var Ne = [];
          if (Y.e.c > 255 || Y.e.r > 16383) {
            if (p.WTF) {
              throw new Error("Range " + (c["!ref"] || "A1") + " exceeds format limit A1:IV16384");
            }
            Y.e.c = Math.min(Y.e.c, 255);
            Y.e.r = Math.min(Y.e.c, 16383);
          }
          for (var ze = (((_ || {}).Workbook || {}).WBProps || {}).date1904, Ft = [], _t = [], Ot = Y.s.c; Ot <= Y.e.c; ++Ot) {
            Ne[Ot] = jo(Ot);
          }
          for (var zt = Y.s.r; zt <= Y.e.r; ++zt) {
            if (V) {
              Ft = c["!data"][zt] || [];
            }
            Te = Da(zt);
            Ot = Y.s.c;
            if (V) {
              Ft = c["!data"][zt] || [];
            }
            Te = Da(zt);
            Ot = Y.s.c;
            for (; Ot <= Y.e.c; ++Ot) {
              var nn = V ? Ft[Ot] : c[Ne[Ot] + Te];
              if (!!nn) {
                SE(r, nn, zt, Ot, p, ze);
                if (nn.c) {
                  _t.push([nn.c, zt, Ot]);
                }
              }
            }
          }
          $1(r, _t);
        })(Y, r.Sheets[r.SheetNames[_]], 0, o, r);
        o._BIFF2FmtTable.forEach(function (ee) {
          if (o.biff <= 3) {
            Qr(p, 30, function vp(r) {
              var c = Gi(1 + r.length);
              c.write_shift(1, r.length);
              c.write_shift(r.length, r, "sbcs");
              return c;
            }(ee));
          } else {
            Qr(p, 1054, function g0(r) {
              var c = Gi(3 + r.length);
              c.l += 2;
              c.write_shift(1, r.length);
              c.write_shift(r.length, r, "sbcs");
              return c;
            }(ee));
          }
        });
        o.cellXfs.forEach(function (ee) {
          switch (o.biff) {
            case 2:
              Qr(p, 67, function m0(r) {
                var c = Gi(4);
                c.l += 2;
                c.write_shift(1, r.numFmtId);
                c.l++;
                return c;
              }(ee));
              break;
            case 3:
              Qr(p, 579, qg(ee));
              break;
            case 4:
              Qr(p, 1091, Rh(ee));
          }
        });
        delete o._BIFF2FmtTable;
        delete o.cellXfs;
        delete o._Fonts;
        p.push(Y.end());
        Qr(p, 10);
        return p.end();
      }(r, c);
  }
  throw new Error("invalid type " + V.bookType + " for BIFF");
}
function PE(r, c) {
  var o = c || {};
  var p = o.dense ?? null;
  var _ = {};
  if (p) {
    _["!data"] = [];
  }
  var V = (r = r.replace(/<!--.*?-->/g, "")).match(/<table/i);
  if (!V) {
    throw new Error("Invalid HTML: could not find <table>");
  }
  var Y = r.match(/<\/table/i);
  var ee = V.index;
  var Te = Y && Y.index || r.length;
  var Ne = Gn(r.slice(ee, Te), /(:?<tr[^>]*>)/i, "<tr>");
  var ze = -1;
  var Ft = 0;
  var _t = 0;
  var Ot = 0;
  var zt = {
    s: {
      r: 10000000,
      c: 10000000
    },
    e: {
      r: 0,
      c: 0
    }
  };
  var nn = [];
  for (ee = 0; ee < Ne.length; ++ee) {
    var Pt = Ne[ee].trim();
    var rn = Pt.slice(0, 3).toLowerCase();
    if (rn != "<tr") {
      if (rn == "<td" || rn == "<th") {
        var yn = Pt.split(/<\/t[dh]>/i);
        for (Te = 0; Te < yn.length; ++Te) {
          var un = yn[Te].trim();
          if (un.match(/<t[dh]/i)) {
            for (var ai = un, Ni = 0; ai.charAt(0) == "<" && (Ni = ai.indexOf(">")) > -1;) {
              ai = ai.slice(Ni + 1);
            }
            for (var or = 0; or < nn.length; ++or) {
              var Ln = nn[or];
              if (Ln.s.c == Ft && Ln.s.r < ze && ze <= Ln.e.r) {
                Ft = Ln.e.c + 1;
                or = -1;
              }
            }
            var Jn = sr(un.slice(0, un.indexOf(">")));
            Ot = Jn.colspan ? +Jn.colspan : 1;
            if ((_t = +Jn.rowspan) > 1 || Ot > 1) {
              nn.push({
                s: {
                  r: ze,
                  c: Ft
                },
                e: {
                  r: ze + (_t || 1) - 1,
                  c: Ft + Ot - 1
                }
              });
            }
            var yi = Jn.t || Jn["data-t"] || "";
            if (!ai.length) {
              Ft += Ot;
              continue;
            }
            ai = dt(ai);
            if (zt.s.r > ze) {
              zt.s.r = ze;
            }
            if (zt.e.r < ze) {
              zt.e.r = ze;
            }
            if (zt.s.c > Ft) {
              zt.s.c = Ft;
            }
            if (zt.e.c < Ft) {
              zt.e.c = Ft;
            }
            if (!ai.length) {
              Ft += Ot;
              continue;
            }
            var mi = {
              t: "s",
              v: ai
            };
            if (!o.raw && !!ai.trim().length && yi != "s") {
              if (ai === "TRUE") {
                mi = {
                  t: "b",
                  v: true
                };
              } else if (ai === "FALSE") {
                mi = {
                  t: "b",
                  v: false
                };
              } else if (isNaN(Wo(ai))) {
                if (!isNaN(an(ai).getDate())) {
                  mi = {
                    t: "d",
                    v: Rs(ai)
                  };
                  if (o.UTC === false) {
                    mi.v = Ki(mi.v);
                  }
                  if (!o.cellDates) {
                    mi = {
                      t: "n",
                      v: So(mi.v)
                    };
                  }
                  mi.z = o.dateNF || Kt[14];
                }
              } else {
                mi = {
                  t: "n",
                  v: Wo(ai)
                };
              }
            }
            if (mi.cellText !== false) {
              mi.w = ai;
            }
            if (p) {
              _["!data"][ze] ||= [];
              _["!data"][ze][Ft] = mi;
            } else {
              _[Eo({
                r: ze,
                c: Ft
              })] = mi;
            }
            Ft += Ot;
          }
        }
      }
    } else {
      ++ze;
      if (o.sheetRows && o.sheetRows <= ze) {
        --ze;
        break;
      }
      Ft = 0;
    }
  }
  _["!ref"] = $o(zt);
  if (nn.length) {
    _["!merges"] = nn;
  }
  return _;
}
function IE(r, c, o, p) {
  for (var _ = r["!merges"] || [], V = [], Y = {}, ee = r["!data"] != null, Te = c.s.c; Te <= c.e.c; ++Te) {
    for (var Ne = 0, ze = 0, Ft = 0; Ft < _.length; ++Ft) {
      if (_[Ft].s.r <= o && _[Ft].s.c <= Te && _[Ft].e.r >= o && _[Ft].e.c >= Te) {
        if (_[Ft].s.r < o || _[Ft].s.c < Te) {
          Ne = -1;
          break;
        }
        Ne = _[Ft].e.r - _[Ft].s.r + 1;
        ze = _[Ft].e.c - _[Ft].s.c + 1;
        break;
      }
    }
    if (Ne >= 0) {
      var _t = jo(Te) + Da(o);
      var Ot = ee ? (r["!data"][o] || [])[Te] : r[_t];
      var zt = Ot && Ot.v != null && (Ot.h || _e(Ot.w || (lc(Ot), Ot.w) || "")) || "";
      Y = {};
      if (Ne > 1) {
        Y.rowspan = Ne;
      }
      if (ze > 1) {
        Y.colspan = ze;
      }
      if (p.editable) {
        zt = "<span contenteditable=\"true\">" + zt + "</span>";
      } else if (Ot) {
        Y["data-t"] = Ot && Ot.t || "z";
        if (Ot.v != null) {
          Y["data-v"] = Ot.v instanceof Date ? Ot.v.toISOString() : Ot.v;
        }
        if (Ot.z != null) {
          Y["data-z"] = Ot.z;
        }
        if (Ot.l && (Ot.l.Target || "#").charAt(0) != "#") {
          zt = "<a href=\"" + _e(Ot.l.Target) + "\">" + zt + "</a>";
        }
      }
      Y.id = (p.id || "sjs") + "-" + _t;
      V.push(wt("td", zt, Y));
    }
  }
  return "<tr>" + V.join("") + "</tr>";
}
function Kb(r) {
  var c = r.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function (p, _) {
    return Array(parseInt(_, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "\t").replace(/<text:line-break\/>/g, "\n");
  return [Rr(c.replace(/<[^>]*>/g, ""))];
}
function w1(r, c, o) {
  var p = o || {};
  var _ = Fn(r);
  ci.lastIndex = 0;
  _ = _.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
  for (var V, Y, Ne, ee = "", Te = "", ze = 0, Ft = -1, Ot = ""; V = ci.exec(_);) {
    switch (V[3] = V[3].replace(/_.*$/, "")) {
      case "number-style":
      case "currency-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
      case "text-style":
        if (V[1] === "/") {
          if (Y["truncate-on-overflow"] == "false") {
            if (ee.match(/h/)) {
              ee = ee.replace(/h+/, "[$&]");
            } else if (ee.match(/m/)) {
              ee = ee.replace(/m+/, "[$&]");
            } else if (ee.match(/s/)) {
              ee = ee.replace(/s+/, "[$&]");
            }
          }
          p[Y.name] = ee;
          ee = "";
        } else if (V[0].charAt(V[0].length - 2) !== "/") {
          ee = "";
          Y = sr(V[0], false);
        }
        break;
      case "boolean-style":
        if (V[1] === "/") {
          p[Y.name] = "General";
          ee = "";
        } else if (V[0].charAt(V[0].length - 2) !== "/") {
          ee = "";
          Y = sr(V[0], false);
        }
        break;
      case "boolean":
        ee += "General";
        break;
      case "text":
        if (V[1] === "/") {
          ee += (Ot = _.slice(Ft, ci.lastIndex - V[0].length)) == "%" && Y[0] == "<number:percentage-style" ? "%" : "\"" + Ot.replace(/"/g, "\"\"") + "\"";
        } else if (V[0].charAt(V[0].length - 2) !== "/") {
          Ft = ci.lastIndex;
        }
        break;
      case "day":
        if ((Ne = sr(V[0], false)).style === "short") {
          ee += "d";
        } else {
          ee += "dd";
        }
        break;
      case "day-of-week":
        switch ((Ne = sr(V[0], false)).style) {
          case "short":
          default:
            ee += "ddd";
            break;
          case "long":
            ee += "dddd";
        }
        break;
      case "era":
        if ((Ne = sr(V[0], false)).style === "short") {
          ee += "ee";
        } else {
          ee += "eeee";
        }
        break;
      case "hours":
        if ((Ne = sr(V[0], false)).style === "short") {
          ee += "h";
        } else {
          ee += "hh";
        }
        break;
      case "minutes":
        if ((Ne = sr(V[0], false)).style === "short") {
          ee += "m";
        } else {
          ee += "mm";
        }
        break;
      case "month":
        if ((Ne = sr(V[0], false)).textual) {
          ee += "mm";
        }
        switch (Ne.style) {
          case "short":
          default:
            ee += "m";
            break;
          case "long":
            ee += "mm";
        }
        break;
      case "seconds":
        if ((Ne = sr(V[0], false)).style === "short") {
          ee += "s";
        } else {
          ee += "ss";
        }
        if (Ne["decimal-places"]) {
          ee += "." + Qs("0", +Ne["decimal-places"]);
        }
        break;
      case "year":
        switch ((Ne = sr(V[0], false)).style) {
          case "short":
          default:
            ee += "yy";
            break;
          case "long":
            ee += "yyyy";
        }
        break;
      case "am-pm":
        ee += "AM/PM";
        break;
      case "week-of-year":
      case "quarter":
        console.error("Excel does not support ODS format token " + V[3]);
        break;
      case "fill-character":
        if (V[1] === "/") {
          ee += "\"" + (Ot = _.slice(Ft, ci.lastIndex - V[0].length)).replace(/"/g, "\"\"") + "\"*";
        } else if (V[0].charAt(V[0].length - 2) !== "/") {
          Ft = ci.lastIndex;
        }
        break;
      case "scientific-number":
        ee += "0." + Qs("0", +(Ne = sr(V[0], false))["min-decimal-places"] || +Ne["decimal-places"] || 2) + Qs("?", +Ne["decimal-places"] - +Ne["min-decimal-places"] || 0) + "E" + (tr(Ne["forced-exponent-sign"]) ? "+" : "") + Qs("0", +Ne["min-exponent-digits"] || 2);
        break;
      case "fraction":
        ee += +(Ne = sr(V[0], false))["min-integer-digits"] ? Qs("0", +Ne["min-integer-digits"]) : "#";
        ee += " ";
        ee += Qs("?", +Ne["min-numerator-digits"] || 1);
        ee += "/";
        ee += +Ne["denominator-value"] ? Ne["denominator-value"] : Qs("?", +Ne["min-denominator-digits"] || 1);
        break;
      case "currency-symbol":
        if (V[1] === "/") {
          ee += "\"" + _.slice(Ft, ci.lastIndex - V[0].length).replace(/"/g, "\"\"") + "\"";
        } else if (V[0].charAt(V[0].length - 2) !== "/") {
          Ft = ci.lastIndex;
        } else {
          ee += "$";
        }
        break;
      case "text-properties":
        switch (((Ne = sr(V[0], false)).color || "").toLowerCase().replace("#", "")) {
          case "ff0000":
          case "red":
            ee = "[Red]" + ee;
        }
        break;
      case "text-content":
        ee += "@";
        break;
      case "map":
        Ne = sr(V[0], false);
        if (Rr(Ne.condition) == "value()>=0") {
          ee = p[Ne["apply-style-name"]] + ";" + ee;
        } else {
          console.error("ODS number format may be incorrect: " + Ne.condition);
        }
        break;
      case "number":
        if (V[1] === "/") {
          break;
        }
        Te = "";
        Te += Qs("0", +(Ne = sr(V[0], false))["min-integer-digits"] || 1);
        if (tr(Ne.grouping)) {
          Te = rs(Qs("#", Math.max(0, 4 - Te.length)) + Te);
        }
        if (+Ne["min-decimal-places"] || +Ne["decimal-places"]) {
          Te += ".";
        }
        if (+Ne["min-decimal-places"]) {
          Te += Qs("0", +Ne["min-decimal-places"] || 1);
        }
        if (+Ne["decimal-places"] - (+Ne["min-decimal-places"] || 0)) {
          Te += Qs("0", +Ne["decimal-places"] - (+Ne["min-decimal-places"] || 0));
        }
        ee += Te;
        break;
      case "embedded-text":
        if (V[1] === "/") {
          if (ze == 0) {
            ee += "\"" + _.slice(Ft, ci.lastIndex - V[0].length).replace(/"/g, "\"\"") + "\"";
          } else {
            ee = ee.slice(0, ze) + "\"" + _.slice(Ft, ci.lastIndex - V[0].length).replace(/"/g, "\"\"") + "\"" + ee.slice(ze);
          }
        } else if (V[0].charAt(V[0].length - 2) !== "/") {
          Ft = ci.lastIndex;
          ze = -+sr(V[0], false).position || 0;
        }
    }
  }
  return p;
}
function BE(r, c, o) {
  var Y;
  var ee;
  var Te;
  var Ft;
  var _t;
  var p = c || {};
  var _ = Fn(r);
  var V = [];
  var ze = 0;
  var Ot = {};
  var zt = [];
  var nn = {};
  if (p.dense) {
    nn["!data"] = [];
  }
  var Pt;
  var rn;
  var yn = {
    value: ""
  };
  var un = "";
  var ai = 0;
  var or = "";
  var Ln = 0;
  var Jn = [];
  var yi = [];
  var mi = -1;
  var Fi = -1;
  var ji = {
    s: {
      r: 1000000,
      c: 10000000
    },
    e: {
      r: 0,
      c: 0
    }
  };
  var Dr = 0;
  var yo = o || {};
  var _s = {};
  var ra = [];
  var ds = {};
  var Ua = 0;
  var Ul = 0;
  var os = [];
  var Ba = 1;
  var hr = 1;
  var oo = [];
  var as = {
    Names: [],
    WBProps: {}
  };
  var Lo = {};
  var Ro = ["", ""];
  var va = [];
  var Xn = {};
  var Pi = "";
  var bi = 0;
  var vi = false;
  var Cr = false;
  var jn = 0;
  ci.lastIndex = 0;
  _ = _.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
  for (; Pt = ci.exec(_);) {
    switch (Pt[3] = Pt[3].replace(/_.*$/, "")) {
      case "table":
      case "工作表":
        if (Pt[1] === "/") {
          nn["!ref"] = ji.e.c >= ji.s.c && ji.e.r >= ji.s.r ? $o(ji) : "A1:A1";
          if (p.sheetRows > 0 && p.sheetRows <= ji.e.r) {
            nn["!fullref"] = nn["!ref"];
            ji.e.r = p.sheetRows - 1;
            nn["!ref"] = $o(ji);
          }
          if (ra.length) {
            nn["!merges"] = ra;
          }
          if (os.length) {
            nn["!rows"] = os;
          }
          Ft.name = Ft.名称 || Ft.name;
          if (typeof JSON !== "undefined") {
            JSON.stringify(Ft);
          }
          zt.push(Ft.name);
          Ot[Ft.name] = nn;
          Cr = false;
        } else if (Pt[0].charAt(Pt[0].length - 2) !== "/") {
          Ft = sr(Pt[0], false);
          mi = Fi = -1;
          ji.s.r = ji.s.c = 10000000;
          ji.e.r = ji.e.c = 0;
          nn = {};
          if (p.dense) {
            nn["!data"] = [];
          }
          ra = [];
          os = [];
          Cr = true;
        }
        break;
      case "table-row-group":
        if (Pt[1] === "/") {
          --Dr;
        } else {
          ++Dr;
        }
        break;
      case "table-row":
      case "行":
        if (Pt[1] === "/") {
          mi += Ba;
          Ba = 1;
          break;
        }
        if ((_t = sr(Pt[0], false)).行号) {
          mi = _t.行号 - 1;
        } else if (mi == -1) {
          mi = 0;
        }
        if ((Ba = +_t["number-rows-repeated"] || 1) < 10) {
          for (jn = 0; jn < Ba; ++jn) {
            if (Dr > 0) {
              os[mi + jn] = {
                level: Dr
              };
            }
          }
        }
        Fi = -1;
        break;
      case "covered-table-cell":
        if (Pt[1] !== "/") {
          ++Fi;
        }
        if (p.sheetStubs) {
          if (p.dense) {
            nn["!data"][mi] ||= [];
            nn["!data"][mi][Fi] = {
              t: "z"
            };
          } else {
            nn[Eo({
              r: mi,
              c: Fi
            })] = {
              t: "z"
            };
          }
        }
        un = "";
        Jn = [];
        break;
      case "table-cell":
      case "数据":
        if (Pt[0].charAt(Pt[0].length - 2) === "/") {
          ++Fi;
          yn = sr(Pt[0], false);
          hr = parseInt(yn["number-columns-repeated"] || "1", 10);
          rn = {
            t: "z",
            v: null
          };
          if (yn.formula && p.cellFormula != 0) {
            rn.f = My(Rr(yn.formula));
          }
          if (yn["style-name"] && _s[yn["style-name"]]) {
            rn.z = _s[yn["style-name"]];
          }
          if ((yn.数据类型 || yn["value-type"]) == "string") {
            rn.t = "s";
            rn.v = Rr(yn["string-value"] || "");
            if (p.dense) {
              nn["!data"][mi] ||= [];
              nn["!data"][mi][Fi] = rn;
            } else {
              nn[jo(Fi) + Da(mi)] = rn;
            }
          }
          Fi += hr - 1;
        } else if (Pt[1] !== "/") {
          un = or = "";
          ai = Ln = 0;
          Jn = [];
          yi = [];
          hr = 1;
          var fo = Ba ? mi + Ba - 1 : mi;
          if (++Fi > ji.e.c) {
            ji.e.c = Fi;
          }
          if (Fi < ji.s.c) {
            ji.s.c = Fi;
          }
          if (mi < ji.s.r) {
            ji.s.r = mi;
          }
          if (fo > ji.e.r) {
            ji.e.r = fo;
          }
          va = [];
          Xn = {};
          rn = {
            t: (yn = sr(Pt[0], false)).数据类型 || yn["value-type"],
            v: null
          };
          if (yn["style-name"] && _s[yn["style-name"]]) {
            rn.z = _s[yn["style-name"]];
          }
          if (p.cellFormula) {
            yn.formula &&= Rr(yn.formula);
            if (yn["number-matrix-columns-spanned"] && yn["number-matrix-rows-spanned"]) {
              Ua = parseInt(yn["number-matrix-rows-spanned"], 10) || 0;
              Ul = parseInt(yn["number-matrix-columns-spanned"], 10) || 0;
              rn.F = $o(ds = {
                s: {
                  r: mi,
                  c: Fi
                },
                e: {
                  r: mi + Ua - 1,
                  c: Fi + Ul - 1
                }
              });
              oo.push([ds, rn.F]);
            }
            if (yn.formula) {
              rn.f = My(yn.formula);
            } else {
              for (jn = 0; jn < oo.length; ++jn) {
                if (mi >= oo[jn][0].s.r && mi <= oo[jn][0].e.r && Fi >= oo[jn][0].s.c && Fi <= oo[jn][0].e.c) {
                  rn.F = oo[jn][1];
                }
              }
            }
          }
          if (yn["number-columns-spanned"] || yn["number-rows-spanned"]) {
            Ua = parseInt(yn["number-rows-spanned"], 10) || 0;
            Ul = parseInt(yn["number-columns-spanned"], 10) || 0;
            ra.push(ds = {
              s: {
                r: mi,
                c: Fi
              },
              e: {
                r: mi + Ua - 1,
                c: Fi + Ul - 1
              }
            });
          }
          if (yn["number-columns-repeated"]) {
            hr = parseInt(yn["number-columns-repeated"], 10);
          }
          switch (rn.t) {
            case "boolean":
              rn.t = "b";
              rn.v = tr(yn["boolean-value"]) || +yn["boolean-value"] >= 1;
              break;
            case "float":
              rn.t = "n";
              rn.v = parseFloat(yn.value);
              if (p.cellDates && rn.z && No(rn.z)) {
                rn.v = pa(rn.v + (as.WBProps.date1904 ? 1462 : 0));
                rn.t = typeof rn.v == "number" ? "n" : "d";
              }
              break;
            case "percentage":
            case "currency":
              rn.t = "n";
              rn.v = parseFloat(yn.value);
              break;
            case "date":
              rn.t = "d";
              rn.v = Rs(yn["date-value"], as.WBProps.date1904);
              if (!p.cellDates) {
                rn.t = "n";
                rn.v = So(rn.v, as.WBProps.date1904);
              }
              rn.z ||= "m/d/yy";
              break;
            case "time":
              rn.t = "n";
              rn.v = Ia(yn["time-value"]) / 86400;
              if (p.cellDates) {
                rn.v = pa(rn.v);
                rn.t = typeof rn.v == "number" ? "n" : "d";
              }
              rn.z ||= "HH:MM:SS";
              break;
            case "number":
              rn.t = "n";
              rn.v = parseFloat(yn.数据数值);
              break;
            default:
              if (rn.t !== "string" && rn.t !== "text" && rn.t) {
                throw new Error("Unsupported value type " + rn.t);
              }
              rn.t = "s";
              if (yn["string-value"] != null) {
                un = Rr(yn["string-value"]);
                Jn = [];
              }
          }
        } else {
          vi = false;
          if (rn.t === "s") {
            rn.v = un || "";
            if (Jn.length) {
              rn.R = Jn;
            }
            vi = ai == 0;
          }
          if (Lo.Target) {
            rn.l = Lo;
          }
          if (va.length > 0) {
            rn.c = va;
            va = [];
          }
          if (un && p.cellText !== false) {
            rn.w = un;
          }
          if (vi) {
            rn.t = "z";
            delete rn.v;
          }
          if ((!vi || p.sheetStubs) && (!p.sheetRows || p.sheetRows > mi)) {
            for (var Ms = 0; Ms < Ba; ++Ms) {
              hr = parseInt(yn["number-columns-repeated"] || "1", 10);
              if (p.dense) {
                nn["!data"][mi + Ms] ||= [];
                nn["!data"][mi + Ms][Fi] = Ms == 0 ? rn : Vs(rn);
                nn["!data"][mi + Ms] ||= [];
                nn["!data"][mi + Ms][Fi] = Ms == 0 ? rn : Vs(rn);
                for (; --hr > 0;) {
                  nn["!data"][mi + Ms][Fi + hr] = Vs(rn);
                }
              } else {
                for (nn[Eo({
                  r: mi + Ms,
                  c: Fi
                })] = rn; --hr > 0;) {
                  nn[Eo({
                    r: mi + Ms,
                    c: Fi + hr
                  })] = Vs(rn);
                }
              }
              if (ji.e.c <= Fi) {
                ji.e.c = Fi;
              }
            }
          }
          Fi += (hr = parseInt(yn["number-columns-repeated"] || "1", 10)) - 1;
          hr = 0;
          rn = {};
          un = "";
          Jn = [];
        }
        Lo = {};
        break;
      case "document":
      case "document-content":
      case "电子表格文档":
      case "spreadsheet":
      case "主体":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (Pt[1] === "/") {
          if ((Y = V.pop())[0] !== Pt[3]) {
            throw "Bad state: " + Y;
          }
        } else if (Pt[0].charAt(Pt[0].length - 2) !== "/") {
          V.push([Pt[3], true]);
        }
        break;
      case "annotation":
        if (Pt[1] === "/") {
          if ((Y = V.pop())[0] !== Pt[3]) {
            throw "Bad state: " + Y;
          }
          Xn.t = un;
          if (Jn.length) {
            Xn.R = Jn;
          }
          Xn.a = Pi;
          va.push(Xn);
          un = or;
          ai = Ln;
          Jn = yi;
        } else if (Pt[0].charAt(Pt[0].length - 2) !== "/") {
          V.push([Pt[3], false]);
          var ps = sr(Pt[0], true);
          if (!ps.display || !tr(ps.display)) {
            va.hidden = true;
          }
          or = un;
          Ln = ai;
          yi = Jn;
          un = "";
          ai = 0;
          Jn = [];
        }
        Pi = "";
        bi = 0;
        break;
      case "creator":
        if (Pt[1] === "/") {
          Pi = _.slice(bi, Pt.index);
        } else {
          bi = Pt.index + Pt[0].length;
        }
        break;
      case "meta":
      case "元数据":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (Pt[1] === "/") {
          if ((Y = V.pop())[0] !== Pt[3]) {
            throw "Bad state: " + Y;
          }
        } else if (Pt[0].charAt(Pt[0].length - 2) !== "/") {
          V.push([Pt[3], false]);
        }
        un = "";
        ai = 0;
        Jn = [];
        break;
      case "scientific-number":
      case "currency-symbol":
      case "fill-character":
      case "script":
      case "libraries":
      case "automatic-styles":
      case "default-style":
      case "page-layout":
      case "map":
      case "font-face":
      case "paragraph-properties":
      case "table-properties":
      case "table-column-properties":
      case "table-row-properties":
      case "table-cell-properties":
      case "number":
      case "fraction":
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
      case "boolean":
      case "text-content":
      case "text-properties":
      case "embedded-text":
      case "body":
      case "电子表格":
      case "forms":
      case "table-column":
      case "table-header-rows":
      case "table-rows":
      case "table-column-group":
      case "table-header-columns":
      case "table-columns":
      case "graphic-properties":
      case "calculation-settings":
      case "named-expressions":
      case "label-range":
      case "label-ranges":
      case "named-expression":
      case "sort":
      case "sort-by":
      case "sort-groups":
      case "tab":
      case "line-break":
      case "span":
      case "s":
      case "date":
      case "object":
      case "title":
      case "标题":
      case "desc":
      case "binary-data":
      case "table-source":
      case "scenario":
      case "iteration":
      case "content-validations":
      case "content-validation":
      case "help-message":
      case "error-message":
      case "database-ranges":
      case "filter":
      case "filter-and":
      case "filter-or":
      case "filter-condition":
      case "filter-set-item":
      case "list-level-style-bullet":
      case "list-level-style-number":
      case "list-level-properties":
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
      case "event-listener":
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
      case "config-item":
      case "page-number":
      case "page-count":
      case "time":
      case "cell-range-source":
      case "detective":
      case "operation":
      case "highlighted-range":
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
      case "rect":
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
      case "properties":
      case "property":
      case "table-protection":
      case "data-pilot-grand-total":
      case "office-document-common-attrs":
        break;
      case "text-style":
      case "boolean-style":
      case "number-style":
      case "currency-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (Pt[1] === "/") {
          var $a = ci.lastIndex;
          w1(_.slice(Te, ci.lastIndex), 0, yo);
          ci.lastIndex = $a;
        } else if (Pt[0].charAt(Pt[0].length - 2) !== "/") {
          Te = ci.lastIndex - Pt[0].length;
        }
        break;
      case "style":
        var ul = sr(Pt[0], false);
        if (ul.family == "table-cell" && yo[ul["data-style-name"]]) {
          _s[ul.name] = yo[ul["data-style-name"]];
        }
        break;
      case "text":
        if (Pt[0].slice(-2) === "/>") {
          break;
        }
        if (Pt[1] === "/") {
          switch (V[V.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              _.slice(ze, Pt.index);
          }
        } else {
          ze = Pt.index + Pt[0].length;
        }
        break;
      case "named-range":
        Ro = Fm((ee = sr(Pt[0], false))["cell-range-address"]);
        var no = {
          Name: ee.name,
          Ref: Ro[0] + "!" + Ro[1]
        };
        if (Cr) {
          no.Sheet = zt.length;
        }
        as.Names.push(no);
        break;
      case "null-date":
        if ((ee = sr(Pt[0], false))["date-value"] === "1904-01-01") {
          as.WBProps.date1904 = true;
        }
        break;
      case "p":
      case "文本串":
        if (["master-styles"].indexOf(V[V.length - 1][0]) > -1) {
          break;
        }
        if (Pt[1] !== "/" || yn && yn["string-value"]) {
          if (Pt[0].slice(-2) == "/>") {
            un += "\n";
          } else {
            sr(Pt[0], false);
            ai = Pt.index + Pt[0].length;
          }
        } else {
          var Lc = Kb(_.slice(ai, Pt.index));
          un = (un.length > 0 ? un + "\n" : "") + Lc[0];
        }
        break;
      case "database-range":
        if (Pt[1] === "/") {
          break;
        }
        try {
          Ot[(Ro = Fm(sr(Pt[0])["target-range-address"]))[0]]["!autofilter"] = {
            ref: Ro[1]
          };
        } catch {}
        break;
      case "a":
        if (Pt[1] !== "/") {
          if (!(Lo = sr(Pt[0], false)).href) {
            break;
          }
          Lo.Target = Rr(Lo.href);
          delete Lo.href;
          if (Lo.Target.charAt(0) == "#" && Lo.Target.indexOf(".") > -1) {
            Ro = Fm(Lo.Target.slice(1));
            Lo.Target = "#" + Ro[0] + "!" + Ro[1];
          } else if (Lo.Target.match(/^\.\.[\\\/]/)) {
            Lo.Target = Lo.Target.slice(3);
          }
        }
        break;
      default:
        switch (Pt[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "表:":
          case "字:":
            break;
          default:
            if (p.WTF) {
              throw new Error(Pt);
            }
        }
    }
  }
  var xc = {
    Sheets: Ot,
    SheetNames: zt,
    Workbook: as
  };
  if (p.bookSheets) {
    delete xc.Sheets;
  }
  return xc;
}
function tE(r, c) {
  var o = BE(r, c);
  o.bookType = "fods";
  return o;
}
var jb = function () {
  var r = ["<office:master-styles>", "<style:master-page style:name=\"mp1\" style:page-layout-name=\"mp1\">", "<style:header/>", "<style:header-left style:display=\"false\"/>", "<style:footer/>", "<style:footer-left style:display=\"false\"/>", "</style:master-page>", "</office:master-styles>"].join("");
  var c = "<office:document-styles " + Hr({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + r + "</office:document-styles>";
  return function () {
    return nr + c;
  };
}();
function Qb(r, c) {
  var o = "number";
  var p = "";
  var _ = {
    "style:name": c
  };
  var V = "";
  var Y = 0;
  if ((r = r.replace(/"[$]"/g, "$")).indexOf(";") > -1) {
    console.error("Unsupported ODS Style Map exported.  Using first branch of " + r);
    r = r.slice(0, r.indexOf(";"));
  }
  e: if (r != "@") {
    if (r.indexOf(/\$/) > -1) {
      o = "currency";
    }
    if (r[Y] == "\"") {
      for (V = ""; r[++Y] != "\"" || r[++Y] == "\"";) {
        V += r[Y];
      }
      if (r[1 + --Y] == "*") {
        Y++;
        p += "<number:fill-character>" + Mr(V.replace(/""/g, "\"")) + "</number:fill-character>";
      } else {
        p += "<number:text>" + Mr(V.replace(/""/g, "\"")) + "</number:text>";
      }
      r = r.slice(Y + 1);
      Y = 0;
    }
    var ee = r.match(/# (\?+)\/(\?+)/);
    if (ee) {
      p += wt("number:fraction", null, {
        "number:min-integer-digits": 0,
        "number:min-numerator-digits": ee[1].length,
        "number:max-denominator-value": Math.max(+ee[1].replace(/./g, "9"), +ee[2].replace(/./g, "9"))
      });
    } else if (ee = r.match(/# (\?+)\/(\d+)/)) {
      p += wt("number:fraction", null, {
        "number:min-integer-digits": 0,
        "number:min-numerator-digits": ee[1].length,
        "number:denominator-value": +ee[2]
      });
    } else if (ee = r.match(/(\d+)(|\.\d+)%/)) {
      o = "percentage";
      p += wt("number:number", null, {
        "number:decimal-places": ee[2] && ee.length - 1 || 0,
        "number:min-decimal-places": ee[2] && ee.length - 1 || 0,
        "number:min-integer-digits": ee[1].length
      }) + "<number:text>%</number:text>";
    } else {
      var Te = false;
      if (["y", "m", "d"].indexOf(r[0]) > -1) {
        o = "date";
        t: for (; Y < r.length; ++Y) {
          switch (V = r[Y].toLowerCase()) {
            case "h":
            case "s":
              Te = true;
              --Y;
              break t;
            case "m":
              n: for (var Ne = Y + 1; Ne < r.length; ++Ne) {
                switch (r[Ne]) {
                  case "y":
                  case "d":
                    break n;
                  case "h":
                  case "s":
                    Te = true;
                    --Y;
                    break t;
                }
              }
            case "y":
            case "d":
              for (; (r[++Y] || "").toLowerCase() == V[0];) {
                V += V[0];
              }
              --Y;
              switch (V) {
                case "y":
                case "yy":
                  p += "<number:year/>";
                  break;
                case "yyy":
                case "yyyy":
                  p += "<number:year number:style=\"long\"/>";
                  break;
                case "mmmmm":
                  console.error("ODS has no equivalent of format |mmmmm|");
                case "m":
                case "mm":
                case "mmm":
                case "mmmm":
                  p += "<number:month number:style=\"" + (V.length % 2 ? "short" : "long") + "\" number:textual=\"" + (V.length >= 3 ? "true" : "false") + "\"/>";
                  break;
                case "d":
                case "dd":
                  p += "<number:day number:style=\"" + (V.length % 2 ? "short" : "long") + "\"/>";
                  break;
                case "ddd":
                case "dddd":
                  p += "<number:day-of-week number:style=\"" + (V.length % 2 ? "short" : "long") + "\"/>";
              }
              break;
            case "\"":
              for (; r[++Y] != "\"" || r[++Y] == "\"";) {
                V += r[Y];
              }
              --Y;
              p += "<number:text>" + Mr(V.slice(1).replace(/""/g, "\"")) + "</number:text>";
              break;
            case "\\":
              p += "<number:text>" + Mr(V = r[++Y]) + "</number:text>";
              break;
            case "/":
            case ":":
              p += "<number:text>" + Mr(V) + "</number:text>";
              break;
            default:
              console.error("unrecognized character " + V + " in ODF format " + r);
          }
        }
        if (!Te) {
          break e;
        }
        r = r.slice(Y + 1);
        Y = 0;
      }
      if (r.match(/^\[?[hms]/)) {
        if (o == "number") {
          o = "time";
        }
        if (r.match(/\[/)) {
          r = r.replace(/[\[\]]/g, "");
          _["number:truncate-on-overflow"] = "false";
        }
        if (o == "number") {
          o = "time";
        }
        if (r.match(/\[/)) {
          r = r.replace(/[\[\]]/g, "");
          _["number:truncate-on-overflow"] = "false";
        }
        for (; Y < r.length; ++Y) {
          switch (V = r[Y].toLowerCase()) {
            case "h":
            case "m":
            case "s":
              for (; (r[++Y] || "").toLowerCase() == V[0];) {
                V += V[0];
              }
              --Y;
              switch (V) {
                case "h":
                case "hh":
                  p += "<number:hours number:style=\"" + (V.length % 2 ? "short" : "long") + "\"/>";
                  break;
                case "m":
                case "mm":
                  p += "<number:minutes number:style=\"" + (V.length % 2 ? "short" : "long") + "\"/>";
                  break;
                case "s":
                case "ss":
                  if (r[Y + 1] == ".") {
                    do {
                      V += r[Y + 1];
                      ++Y;
                    } while (r[Y + 1] == "0");
                  }
                  p += "<number:seconds number:style=\"" + (V.match("ss") ? "long" : "short") + "\"" + (V.match(/\./) ? " number:decimal-places=\"" + (V.match(/0+/) || [""])[0].length + "\"" : "") + "/>";
              }
              break;
            case "\"":
              for (; r[++Y] != "\"" || r[++Y] == "\"";) {
                V += r[Y];
              }
              --Y;
              p += "<number:text>" + Mr(V.slice(1).replace(/""/g, "\"")) + "</number:text>";
              break;
            case "/":
            case ":":
              p += "<number:text>" + Mr(V) + "</number:text>";
              break;
            case "a":
              if (r.slice(Y, Y + 3).toLowerCase() == "a/p") {
                p += "<number:am-pm/>";
                Y += 2;
                break;
              }
              if (r.slice(Y, Y + 5).toLowerCase() == "am/pm") {
                p += "<number:am-pm/>";
                Y += 4;
                break;
              }
            default:
              console.error("unrecognized character " + V + " in ODF format " + r);
          }
        }
      } else {
        if (r.indexOf(/\$/) > -1) {
          o = "currency";
        }
        if (r[0] == "$") {
          p += "<number:currency-symbol number:language=\"en\" number:country=\"US\">$</number:currency-symbol>";
          r = r.slice(1);
          Y = 0;
        }
        if (r[Y = 0] == "\"") {
          for (; r[++Y] != "\"" || r[++Y] == "\"";) {
            V += r[Y];
          }
          if (r[1 + --Y] == "*") {
            Y++;
            p += "<number:fill-character>" + Mr(V.replace(/""/g, "\"")) + "</number:fill-character>";
          } else {
            p += "<number:text>" + Mr(V.replace(/""/g, "\"")) + "</number:text>";
          }
          r = r.slice(Y + 1);
          Y = 0;
        }
        var ze = r.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);
        if (ze && ze[0]) {
          var Ft = ze[1].replace(/,/g, "");
          p += "<number:" + (ze[3] ? "scientific-" : "") + "number number:min-integer-digits=\"" + (Ft.indexOf("0") == -1 ? "0" : Ft.length - Ft.indexOf("0")) + "\"" + (ze[0].indexOf(",") > -1 ? " number:grouping=\"true\"" : "") + (ze[2] && " number:decimal-places=\"" + (ze[2].length - 1) + "\"" || " number:decimal-places=\"0\"") + (ze[3] && ze[3].indexOf("+") > -1 ? " number:forced-exponent-sign=\"true\"" : "") + (ze[3] ? " number:min-exponent-digits=\"" + ze[3].match(/0+/)[0].length + "\"" : "") + "></number:" + (ze[3] ? "scientific-" : "") + "number>";
          Y = ze.index + ze[0].length;
        } else {
          console.error("Could not find numeric part of " + r);
        }
        if (r[Y] == "\"") {
          for (V = ""; r[++Y] != "\"" || r[++Y] == "\"";) {
            V += r[Y];
          }
          --Y;
          p += "<number:text>" + Mr(V.replace(/""/g, "\"")) + "</number:text>";
        }
      }
    }
  } else {
    o = "text";
    p = "<number:text-content/>";
  }
  if (p) {
    return wt("number:" + o + "-style", p, _);
  } else {
    console.error("Could not generate ODS number format for |" + r + "|");
    return "";
  }
}
function VE(r, c, o) {
  for (var p = [], _ = 0; _ < r.length; ++_) {
    var V = r[_];
    if (!!V) {
      if (V.Sheet == (o == -1 ? null : o)) {
        p.push(V);
      }
    }
  }
  if (p.length) {
    return "      <table:named-expressions>\n" + p.map(function (Y) {
      var ee = (o == -1 ? "$" : "") + Mg(Y.Ref);
      return "        " + wt("table:named-range", null, {
        "table:name": Y.Name,
        "table:cell-range-address": ee,
        "table:base-cell-address": ee.replace(/[\.]?[^\.]*$/, ".$A$1")
      });
    }).join("\n") + "\n      </table:named-expressions>\n";
  } else {
    return "";
  }
}
var S1 = function () {
  function r(_) {
    return Mr(_).replace(/  +/g, function (V) {
      return "<text:s text:c=\"" + V.length + "\"/>";
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }
  var c = "          <table:table-cell />\n";
  function o(_, V, Y, ee, Te, Ne) {
    var ze = [];
    ze.push("      <table:table table:name=\"" + Mr(V.SheetNames[Y]) + "\" table:style-name=\"ta1\">\n");
    var Ft = 0;
    var _t = 0;
    var Ot = ml(_["!ref"] || "A1");
    var zt = _["!merges"] || [];
    var nn = 0;
    var Pt = _["!data"] != null;
    if (_["!cols"]) {
      for (_t = 0; _t <= Ot.e.c; ++_t) {
        ze.push("        <table:table-column" + (_["!cols"][_t] ? " table:style-name=\"co" + _["!cols"][_t].ods + "\"" : "") + "></table:table-column>\n");
      }
    }
    var yn = _["!rows"] || [];
    for (Ft = 0; Ft < Ot.s.r; ++Ft) {
      ze.push("        <table:table-row" + (yn[Ft] ? " table:style-name=\"ro" + yn[Ft].ods + "\"" : "") + "></table:table-row>\n");
    }
    for (; Ft <= Ot.e.r; ++Ft) {
      ze.push("        <table:table-row" + (yn[Ft] ? " table:style-name=\"ro" + yn[Ft].ods + "\"" : "") + ">\n");
      _t = 0;
      for (; _t < Ot.s.c; ++_t) {
        ze.push(c);
      }
      for (; _t <= Ot.e.c; ++_t) {
        var un = false;
        var ai = {};
        var Ni = "";
        for (nn = 0; nn != zt.length; ++nn) {
          if (zt[nn].s.c <= _t && zt[nn].s.r <= Ft && zt[nn].e.c >= _t && zt[nn].e.r >= Ft) {
            if (zt[nn].s.c != _t || zt[nn].s.r != Ft) {
              un = true;
            }
            ai["table:number-columns-spanned"] = zt[nn].e.c - zt[nn].s.c + 1;
            ai["table:number-rows-spanned"] = zt[nn].e.r - zt[nn].s.r + 1;
            break;
          }
        }
        if (un) {
          ze.push("          <table:covered-table-cell/>\n");
        } else {
          var or = Eo({
            r: Ft,
            c: _t
          });
          var Ln = Pt ? (_["!data"][Ft] || [])[_t] : _[or];
          if (Ln && Ln.f && (ai["table:formula"] = Mr(Tg(Ln.f)), Ln.F && Ln.F.slice(0, or.length) == or)) {
            var Jn = ml(Ln.F);
            ai["table:number-matrix-columns-spanned"] = Jn.e.c - Jn.s.c + 1;
            ai["table:number-matrix-rows-spanned"] = Jn.e.r - Jn.s.r + 1;
          }
          if (Ln) {
            switch (Ln.t) {
              case "b":
                Ni = Ln.v ? "TRUE" : "FALSE";
                ai["office:value-type"] = "boolean";
                ai["office:boolean-value"] = Ln.v ? "true" : "false";
                break;
              case "n":
                Ni = Ln.w || String(Ln.v || 0);
                ai["office:value-type"] = "float";
                ai["office:value"] = Ln.v || 0;
                break;
              case "s":
              case "str":
                Ni = Ln.v ?? "";
                ai["office:value-type"] = "string";
                break;
              case "d":
                Ni = Ln.w || Rs(Ln.v, Ne).toISOString();
                ai["office:value-type"] = "date";
                ai["office:date-value"] = Rs(Ln.v, Ne).toISOString();
                ai["table:style-name"] = "ce1";
                break;
              default:
                ze.push(c);
                continue;
            }
            var yi = r(Ni);
            if (Ln.l && Ln.l.Target) {
              var mi = Ln.l.Target;
              if ((mi = mi.charAt(0) == "#" ? "#" + Mg(mi.slice(1)) : mi).charAt(0) != "#" && !mi.match(/^\w+:/)) {
                mi = "../" + mi;
              }
              yi = wt("text:a", yi, {
                "xlink:href": mi.replace(/&/g, "&amp;")
              });
            }
            if (Te[Ln.z]) {
              ai["table:style-name"] = "ce" + Te[Ln.z].slice(1);
            }
            var Fi = wt("text:p", yi, {});
            if (Ln.c) {
              for (var ji = "", Dr = "", yo = {}, _s = 0; _s < Ln.c.length; ++_s) {
                if (!ji && Ln.c[_s].a) {
                  ji = Ln.c[_s].a;
                }
                Dr += "<text:p>" + r(Ln.c[_s].t) + "</text:p>";
              }
              if (!Ln.c.hidden) {
                yo["office:display"] = true;
              }
              Fi = wt("office:annotation", Dr, yo) + Fi;
            }
            ze.push("          " + wt("table:table-cell", Fi, ai) + "\n");
          } else {
            ze.push(c);
          }
        }
      }
      ze.push("        </table:table-row>\n");
    }
    if ((V.Workbook || {}).Names) {
      ze.push(VE(V.Workbook.Names, 0, Y));
    }
    ze.push("      </table:table>\n");
    return ze.join("");
  }
  return function (V, Y) {
    var ee = [nr];
    var Te = Hr({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    });
    var Ne = Hr({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    if (Y.bookType == "fods") {
      ee.push("<office:document" + Te + Ne + ">\n");
      ee.push(Cl().replace(/<office:document-meta.*?>/, "").replace(/<\/office:document-meta>/, "") + "\n");
    } else {
      ee.push("<office:document-content" + Te + ">\n");
    }
    var ze = function (_, V) {
      _.push(" <office:automatic-styles>\n");
      var Y = 0;
      V.SheetNames.map(function (ze) {
        return V.Sheets[ze];
      }).forEach(function (ze) {
        if (ze && ze["!cols"]) {
          for (var Ft = 0; Ft < ze["!cols"].length; ++Ft) {
            if (ze["!cols"][Ft]) {
              var _t = ze["!cols"][Ft];
              if (_t.width == null && _t.wpx == null && _t.wch == null) {
                continue;
              }
              Df(_t);
              _t.ods = Y;
              var Ot = ze["!cols"][Ft].wpx + "px";
              _.push("  <style:style style:name=\"co" + Y + "\" style:family=\"table-column\">\n");
              _.push("   <style:table-column-properties fo:break-before=\"auto\" style:column-width=\"" + Ot + "\"/>\n");
              _.push("  </style:style>\n");
              ++Y;
            }
          }
        }
      });
      var ee = 0;
      V.SheetNames.map(function (ze) {
        return V.Sheets[ze];
      }).forEach(function (ze) {
        if (ze && ze["!rows"]) {
          for (var Ft = 0; Ft < ze["!rows"].length; ++Ft) {
            if (ze["!rows"][Ft]) {
              ze["!rows"][Ft].ods = ee;
              var _t = ze["!rows"][Ft].hpx + "px";
              _.push("  <style:style style:name=\"ro" + ee + "\" style:family=\"table-row\">\n");
              _.push("   <style:table-row-properties fo:break-before=\"auto\" style:row-height=\"" + _t + "\"/>\n");
              _.push("  </style:style>\n");
              ++ee;
            }
          }
        }
      });
      _.push("  <style:style style:name=\"ta1\" style:family=\"table\" style:master-page-name=\"mp1\">\n");
      _.push("   <style:table-properties table:display=\"true\" style:writing-mode=\"lr-tb\"/>\n");
      _.push("  </style:style>\n");
      _.push("  <number:date-style style:name=\"N37\" number:automatic-order=\"true\">\n");
      _.push("   <number:month number:style=\"long\"/>\n");
      _.push("   <number:text>/</number:text>\n");
      _.push("   <number:day number:style=\"long\"/>\n");
      _.push("   <number:text>/</number:text>\n");
      _.push("   <number:year/>\n");
      _.push("  </number:date-style>\n");
      var Te = {};
      var Ne = 69;
      V.SheetNames.map(function (ze) {
        return V.Sheets[ze];
      }).forEach(function (ze) {
        if (ze) {
          var Ft = ze["!data"] != null;
          if (ze["!ref"]) {
            for (var _t = ml(ze["!ref"]), Ot = 0; Ot <= _t.e.r; ++Ot) {
              for (var zt = 0; zt <= _t.e.c; ++zt) {
                var nn = Ft ? (ze["!data"][Ot] || [])[zt] : ze[Eo({
                  r: Ot,
                  c: zt
                })];
                if (nn && nn.z && nn.z.toLowerCase() != "general" && !Te[nn.z]) {
                  var Pt = Qb(nn.z, "N" + Ne);
                  if (Pt) {
                    Te[nn.z] = "N" + Ne;
                    ++Ne;
                    _.push(Pt + "\n");
                  }
                }
              }
            }
          }
        }
      });
      _.push("  <style:style style:name=\"ce1\" style:family=\"table-cell\" style:parent-style-name=\"Default\" style:data-style-name=\"N37\"/>\n");
      qs(Te).forEach(function (ze) {
        _.push("<style:style style:name=\"ce" + Te[ze].slice(1) + "\" style:family=\"table-cell\" style:parent-style-name=\"Default\" style:data-style-name=\"" + Te[ze] + "\"/>\n");
      });
      _.push(" </office:automatic-styles>\n");
      return Te;
    }(ee, V);
    ee.push("  <office:body>\n");
    ee.push("    <office:spreadsheet>\n");
    if (((V.Workbook || {}).WBProps || {}).date1904) {
      ee.push("      <table:calculation-settings table:case-sensitive=\"false\" table:search-criteria-must-apply-to-whole-cell=\"true\" table:use-wildcards=\"true\" table:use-regular-expressions=\"false\" table:automatic-find-labels=\"false\">\n        <table:null-date table:date-value=\"1904-01-01\"/>\n      </table:calculation-settings>\n");
    }
    for (var Ft = 0; Ft != V.SheetNames.length; ++Ft) {
      ee.push(o(V.Sheets[V.SheetNames[Ft]], V, Ft, 0, ze, ((V.Workbook || {}).WBProps || {}).date1904));
    }
    if ((V.Workbook || {}).Names) {
      ee.push(VE(V.Workbook.Names, 0, -1));
    }
    ee.push("    </office:spreadsheet>\n");
    ee.push("  </office:body>\n");
    ee.push(Y.bookType == "fods" ? "</office:document>" : "</office:document-content>");
    return ee.join("");
  };
}();
function HE(r, c) {
  if (c.bookType == "fods") {
    return S1(r, c);
  }
  var o = li();
  var p = "";
  var _ = [];
  var V = [];
  Zn(o, p = "mimetype", "application/vnd.oasis.opendocument.spreadsheet");
  Zn(o, p = "content.xml", S1(r, c));
  _.push([p, "text/xml"]);
  V.push([p, "ContentFile"]);
  Zn(o, p = "styles.xml", jb(r, c));
  _.push([p, "text/xml"]);
  V.push([p, "StylesFile"]);
  Zn(o, p = "meta.xml", nr + Cl());
  _.push([p, "text/xml"]);
  V.push([p, "MetadataFile"]);
  Zn(o, p = "manifest.rdf", function ou(r) {
    var c = [nr];
    c.push("<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n");
    for (var o = 0; o != r.length; ++o) {
      c.push(Ja(r[o][0], r[o][1]));
      c.push(oc("", r[o][0]));
    }
    c.push(Ja("", "Document", "pkg"));
    c.push("</rdf:RDF>");
    return c.join("");
  }(V));
  _.push([p, "application/rdf+xml"]);
  Zn(o, p = "META-INF/manifest.xml", function go(r) {
    var c = [nr];
    c.push("<manifest:manifest xmlns:manifest=\"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0\" manifest:version=\"1.2\">\n");
    c.push("  <manifest:file-entry manifest:full-path=\"/\" manifest:version=\"1.2\" manifest:media-type=\"application/vnd.oasis.opendocument.spreadsheet\"/>\n");
    for (var o = 0; o < r.length; ++o) {
      c.push("  <manifest:file-entry manifest:full-path=\"" + r[o][0] + "\" manifest:media-type=\"" + r[o][1] + "\"/>\n");
    }
    c.push("</manifest:manifest>");
    return c.join("");
  }(_));
  return o;
  /*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
}
var qu = function () {
  try {
    if (typeof Uint8Array === "undefined" || typeof Uint8Array.prototype.subarray === "undefined") {
      return "slice";
    } else if (typeof Buffer !== "undefined") {
      if (typeof Buffer.prototype.subarray === "undefined") {
        return "slice";
      } else if ((typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array) {
        return "subarray";
      } else {
        return "slice";
      }
    } else {
      return "subarray";
    }
  } catch {
    return "slice";
  }
}();
function n0(r) {
  return new DataView(r.buffer, r.byteOffset, r.byteLength);
}
function Vg(r) {
  if (typeof TextDecoder !== "undefined") {
    return new TextDecoder().decode(r);
  } else {
    return Ns(Et(r));
  }
}
function sh(r) {
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(r);
  } else {
    return Yt(ys(r));
  }
}
function G0(r) {
  for (var c = 0, o = 0; o < r.length; ++o) {
    c += r[o].length;
  }
  var p = new Uint8Array(c);
  var _ = 0;
  for (o = 0; o < r.length; ++o) {
    var V = r[o];
    var Y = V.length;
    if (Y < 250) {
      for (var ee = 0; ee < Y; ++ee) {
        p[_++] = V[ee];
      }
    } else {
      p.set(V, _);
      _ += Y;
    }
  }
  return p;
}
function H_(r) {
  return ((r = ((r -= r >> 1 & 1431655765) & 858993459) + (r >> 2 & 858993459)) + (r >> 4) & 252645135) * 16843009 >>> 24;
}
function W_(r, c) {
  var o = c.l;
  var p = r[o] & 127;
  e: if (r[o++] >= 128 && (p |= (r[o] & 127) << 7, r[o++] < 128 || (p |= (r[o] & 127) << 14, r[o++] < 128) || (p |= (r[o] & 127) << 21, r[o++] < 128) || (p += (r[o] & 127) * Math.pow(2, 28), ++o, r[o++] < 128) || (p += (r[o] & 127) * Math.pow(2, 35), ++o, r[o++] < 128) || (p += (r[o] & 127) * Math.pow(2, 42), ++o, r[o++] < 128))) {
    break e;
  }
  c.l = o;
  return p;
}
function Jo(r) {
  var c = new Uint8Array(7);
  c[0] = r & 127;
  var o = 1;
  e: if (r > 127) {
    c[o - 1] |= 128;
    c[o] = r >> 7 & 127;
    ++o;
    if (r <= 16383 || (c[o - 1] |= 128, c[o] = r >> 14 & 127, ++o, r <= 2097151) || (c[o - 1] |= 128, c[o] = r >> 21 & 127, ++o, r <= 268435455) || (c[o - 1] |= 128, c[o] = r / 256 >>> 21 & 127, ++o, r <= 34359738367) || (c[o - 1] |= 128, c[o] = r / 65536 >>> 21 & 127, ++o, r <= 4398046511103)) {
      break e;
    }
    c[o - 1] |= 128;
    c[o] = r / 16777216 >>> 21 & 127;
    ++o;
  }
  return c[qu](0, o);
}
function nE(r) {
  for (var c = {
      l: 0
    }, o = []; c.l < r.length;) {
    o.push(W_(r, c));
  }
  return o;
}
function WE(r) {
  return G0(r.map(function (c) {
    return Jo(c);
  }));
}
function Nl(r) {
  var c = 0;
  var o = r[c] & 127;
  if (r[c++] >= 128 && !(o |= (r[c] & 127) << 7, r[c++] < 128) && !(o |= (r[c] & 127) << 14, r[c++] < 128) && !(o |= (r[c] & 127) << 21, r[c++] < 128)) {
    o |= (r[c] & 15) << 28;
  }
  return o;
}
function Ws(r) {
  for (var c = [], o = {
      l: 0
    }; o.l < r.length;) {
    var p = o.l;
    var _ = W_(r, o);
    var V = _ & 7;
    _ = _ / 8 | 0;
    var Y;
    var ee = o.l;
    switch (V) {
      case 0:
        for (; r[ee++] >= 128;);
        Y = r[qu](o.l, ee);
        o.l = ee;
        break;
      case 1:
        Y = r[qu](ee, ee + 8);
        o.l = ee + 8;
        break;
      case 2:
        var Te = W_(r, o);
        Y = r[qu](o.l, o.l + Te);
        o.l += Te;
        break;
      case 5:
        Y = r[qu](ee, ee + 4);
        o.l = ee + 4;
        break;
      default:
        throw new Error(`PB Type ${V} for Field ${_} at offset ${p}`);
    }
    var Ne = {
      data: Y,
      type: V
    };
    if (c[_] == null) {
      c[_] = [];
    }
    c[_].push(Ne);
  }
  return c;
}
function da(r) {
  var c = [];
  r.forEach(function (o, p) {
    if (p != 0) {
      o.forEach(function (_) {
        if (!!_.data) {
          c.push(Jo(p * 8 + _.type));
          if (_.type == 2) {
            c.push(Jo(_.data.length));
          }
          c.push(_.data);
        }
      });
    }
  });
  return G0(c);
}
function Uy(r, c) {
  return r?.map(function (o) {
    return c(o.data);
  }) || [];
}
function By(r) {
  for (var c, o = [], p = {
      l: 0
    }; p.l < r.length;) {
    var _ = W_(r, p);
    var V = Ws(r[qu](p.l, p.l + _));
    p.l += _;
    var Y = {
      id: Nl(V[1][0].data),
      messages: []
    };
    V[2].forEach(function (ee) {
      var Te = Ws(ee.data);
      var Ne = Nl(Te[3][0].data);
      Y.messages.push({
        meta: Te,
        data: r[qu](p.l, p.l + Ne)
      });
      p.l += Ne;
    });
    if ((c = V[3]) != null && c[0]) {
      Y.merge = Nl(V[3][0].data) >>> 0 > 0;
    }
    o.push(Y);
  }
  return o;
}
function z0(r) {
  var c = [];
  r.forEach(function (o) {
    var p = [[], [{
      data: Jo(o.id),
      type: 0
    }], []];
    if (o.merge != null) {
      p[3] = [{
        data: Jo(+!!o.merge),
        type: 0
      }];
    }
    var _ = [];
    o.messages.forEach(function (Y) {
      _.push(Y.data);
      Y.meta[3] = [{
        type: 0,
        data: Jo(Y.data.length)
      }];
      p[2].push({
        data: da(Y.meta),
        type: 2
      });
    });
    var V = da(p);
    c.push(Jo(V.length));
    c.push(V);
    _.forEach(function (Y) {
      return c.push(Y);
    });
  });
  return G0(c);
}
function YE(r, c) {
  if (r != 0) {
    throw new Error(`Unexpected Snappy chunk type ${r}`);
  }
  for (var o = {
      l: 0
    }, p = W_(c, o), _ = [], V = o.l; V < c.length;) {
    var Y = c[V] & 3;
    if (Y != 0) {
      var Ne = 0;
      var ze = 0;
      if (Y == 1) {
        ze = 4 + (c[V] >> 2 & 7);
        Ne = (c[V++] & 224) << 3;
        Ne |= c[V++];
      } else {
        ze = 1 + (c[V++] >> 2);
        if (Y == 2) {
          Ne = c[V] | c[V + 1] << 8;
          V += 2;
        } else {
          Ne = (c[V] | c[V + 1] << 8 | c[V + 2] << 16 | c[V + 3] << 24) >>> 0;
          V += 4;
        }
      }
      if (Ne == 0) {
        throw new Error("Invalid offset 0");
      }
      for (var Ft = _.length - 1, _t = Ne; Ft >= 0 && _t >= _[Ft].length;) {
        _t -= _[Ft].length;
        --Ft;
      }
      if (Ft < 0) {
        if (_t != 0) {
          throw new Error("Invalid offset beyond length");
        }
        _t = _[Ft = 0].length;
      }
      if (ze < _t) {
        _.push(_[Ft][qu](_[Ft].length - _t, _[Ft].length - _t + ze));
      } else {
        if (_t > 0) {
          _.push(_[Ft][qu](_[Ft].length - _t));
          ze -= _t;
        }
        ++Ft;
        for (; ze >= _[Ft].length;) {
          _.push(_[Ft]);
          ze -= _[Ft].length;
          ++Ft;
        }
        if (ze) {
          _.push(_[Ft][qu](0, ze));
        }
      }
      if (_.length > 25) {
        _ = [G0(_)];
      }
    } else {
      var ee = c[V++] >> 2;
      if (ee < 60) {
        ++ee;
      } else {
        var Te = ee - 59;
        ee = c[V];
        if (Te > 1) {
          ee |= c[V + 1] << 8;
        }
        if (Te > 2) {
          ee |= c[V + 2] << 16;
        }
        if (Te > 3) {
          ee |= c[V + 3] << 24;
        }
        ee >>>= 0;
        ee++;
        V += Te;
      }
      _.push(c[qu](V, V + ee));
      V += ee;
    }
  }
  for (var Ot = 0, zt = 0; zt < _.length; ++zt) {
    Ot += _[zt].length;
  }
  if (Ot != p) {
    throw new Error(`Unexpected length: ${Ot} != ${p}`);
  }
  return _;
}
function Vy(r) {
  if (Array.isArray(r)) {
    r = new Uint8Array(r);
  }
  for (var c = [], o = 0; o < r.length;) {
    var p = r[o++];
    var _ = r[o] | r[o + 1] << 8 | r[o + 2] << 16;
    c.push.apply(c, YE(p, r[qu](o += 3, o + _)));
    o += _;
  }
  if (o !== r.length) {
    throw new Error("data is not a valid framed stream!");
  }
  if (c.length == 1) {
    return c[0];
  } else {
    return G0(c);
  }
}
function m_(r) {
  for (var c = [], o = 0; o < r.length;) {
    var p = Math.min(r.length - o, 268435455);
    var _ = new Uint8Array(4);
    c.push(_);
    var V = Jo(p);
    var Y = V.length;
    c.push(V);
    if (p <= 60) {
      Y++;
      c.push(new Uint8Array([p - 1 << 2]));
    } else if (p <= 256) {
      Y += 2;
      c.push(new Uint8Array([240, p - 1 & 255]));
    } else if (p <= 65536) {
      Y += 3;
      c.push(new Uint8Array([244, p - 1 & 255, p - 1 >> 8 & 255]));
    } else if (p <= 16777216) {
      Y += 4;
      c.push(new Uint8Array([248, p - 1 & 255, p - 1 >> 8 & 255, p - 1 >> 16 & 255]));
    } else if (p <= 4294967296) {
      Y += 5;
      c.push(new Uint8Array([252, p - 1 & 255, p - 1 >> 8 & 255, p - 1 >> 16 & 255, p - 1 >>> 24 & 255]));
    }
    c.push(r[qu](o, o + p));
    Y += p;
    _[0] = 0;
    _[1] = Y & 255;
    _[2] = Y >> 8 & 255;
    _[3] = Y >> 16 & 255;
    o += p;
  }
  return G0(c);
}
function D1(r, c, o, p, _) {
  var V;
  var Y;
  var ee;
  var Te;
  var ze = c >> 8;
  var Ft = ze >= 5 ? _ : p;
  e: if (o & (ze > 4 ? 8 : 4) && r.t == "n" && (c & 255) == 7) {
    var _t = (V = Ft[7]) != null && V[0] ? Nl(Ft[7][0].data) : -1;
    if (_t == -1) {
      break e;
    }
    var Ot = (Y = Ft[15]) != null && Y[0] ? Nl(Ft[15][0].data) : -1;
    var zt = (ee = Ft[16]) != null && ee[0] ? Nl(Ft[16][0].data) : -1;
    var nn = (Te = Ft[40]) != null && Te[0] ? Nl(Ft[40][0].data) : -1;
    var Pt = r.v;
    var rn = Pt;
    t: if (nn) {
      if (Pt == 0) {
        Ot = zt = 2;
        break t;
      }
      Ot = Pt >= 604800 ? 1 : Pt >= 86400 ? 2 : Pt >= 3600 ? 4 : Pt >= 60 ? 8 : Pt >= 1 ? 16 : 32;
      if (Math.floor(Pt) != Pt) {
        zt = 32;
      } else if (Pt % 60) {
        zt = 16;
      } else if (Pt % 3600) {
        zt = 8;
      } else if (Pt % 86400) {
        zt = 4;
      } else if (Pt % 604800) {
        zt = 2;
      }
      if (zt < Ot) {
        zt = Ot;
      }
    }
    if (Ot == -1 || zt == -1) {
      break e;
    }
    var yn = [];
    var un = [];
    if (Ot == 1) {
      rn = Pt / 604800;
      if (zt == 1) {
        un.push("d\"d\"");
      } else {
        Pt -= (rn |= 0) * 604800;
      }
      yn.push(rn + (_t == 2 ? " week" + (rn == 1 ? "" : "s") : _t == 1 ? "w" : ""));
    }
    if (Ot <= 2 && zt >= 2) {
      rn = Pt / 86400;
      if (zt > 2) {
        Pt -= (rn |= 0) * 86400;
      }
      un.push("d\"d\"");
      yn.push(rn + (_t == 2 ? " day" + (rn == 1 ? "" : "s") : _t == 1 ? "d" : ""));
    }
    if (Ot <= 4 && zt >= 4) {
      rn = Pt / 3600;
      if (zt > 4) {
        Pt -= (rn |= 0) * 3600;
      }
      un.push((Ot >= 4 ? "[h]" : "h") + "\"h\"");
      yn.push(rn + (_t == 2 ? " hour" + (rn == 1 ? "" : "s") : _t == 1 ? "h" : ""));
    }
    if (Ot <= 8 && zt >= 8) {
      rn = Pt / 60;
      if (zt > 8) {
        Pt -= (rn |= 0) * 60;
      }
      un.push((Ot >= 8 ? "[m]" : "m") + "\"m\"");
      yn.push(_t == 0 ? (Ot == 8 && zt == 8 || rn >= 10 ? "" : "0") + rn : rn + (_t == 2 ? " minute" + (rn == 1 ? "" : "s") : _t == 1 ? "m" : ""));
    }
    if (Ot <= 16 && zt >= 16) {
      rn = Pt;
      if (zt > 16) {
        Pt -= rn |= 0;
      }
      un.push((Ot >= 16 ? "[s]" : "s") + "\"s\"");
      yn.push(_t == 0 ? (zt == 16 && Ot == 16 || rn >= 10 ? "" : "0") + rn : rn + (_t == 2 ? " second" + (rn == 1 ? "" : "s") : _t == 1 ? "s" : ""));
    }
    if (zt >= 32) {
      rn = Math.round(Pt * 1000);
      if (Ot < 32) {
        un.push(".000\"ms\"");
      }
      yn.push(_t == 0 ? (rn >= 100 ? "" : rn >= 10 ? "0" : "00") + rn : rn + (_t == 2 ? " millisecond" + (rn == 1 ? "" : "s") : _t == 1 ? "ms" : ""));
    }
    r.w = yn.join(_t == 0 ? ":" : " ");
    r.z = un.join(_t == 0 ? "\":\"" : " ");
    if (_t == 0) {
      r.w = r.w.replace(/:(\d\d\d)$/, ".$1");
    }
  }
}
function K0(r, c) {
  var o = new Uint8Array(32);
  var p = n0(o);
  var _ = 12;
  var V = 0;
  o[0] = 5;
  switch (r.t) {
    case "n":
      if (r.z && No(r.z)) {
        o[1] = 5;
        p.setFloat64(_, (pa(r.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1000, true);
        V |= 4;
        _ += 8;
        break;
      }
      o[1] = 2;
      (function $b(r, c, o) {
        var p = Math.floor(o == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(o))) + 6176 - 16;
        var _ = o / Math.pow(10, p - 6176);
        r[c + 15] |= p >> 7;
        r[c + 14] |= (p & 127) << 1;
        for (var V = 0; _ >= 1; ++V, _ /= 256) {
          r[c + V] = _ & 255;
        }
        r[c + 15] |= o >= 0 ? 0 : 128;
      })(o, _, r.v);
      V |= 1;
      _ += 16;
      break;
    case "b":
      o[1] = 6;
      p.setFloat64(_, r.v ? 1 : 0, true);
      V |= 2;
      _ += 8;
      break;
    case "s":
      var Y = r.v == null ? "" : String(r.v);
      if (r.l) {
        var ee = c.rsst.findIndex(function (Ne) {
          var ze;
          return Ne.v == Y && Ne.l == ((ze = r.l) == null ? undefined : ze.Target);
        });
        if (ee == -1) {
          c.rsst[ee = c.rsst.length] = {
            v: Y,
            l: r.l.Target
          };
        }
        o[1] = 9;
        p.setUint32(_, ee, true);
        V |= 16;
        _ += 4;
      } else {
        var Te = c.sst.indexOf(Y);
        if (Te == -1) {
          c.sst[Te = c.sst.length] = Y;
        }
        o[1] = 3;
        p.setUint32(_, Te, true);
        V |= 8;
        _ += 4;
      }
      break;
    case "d":
      o[1] = 5;
      p.setFloat64(_, (r.v.getTime() - Date.UTC(2001, 0, 1)) / 1000, true);
      V |= 4;
      _ += 8;
      break;
    case "z":
      o[1] = 0;
      break;
    default:
      throw "unsupported cell type " + r.t;
  }
  if (r.c) {
    c.cmnt.push(function KE(r) {
      for (var c = {
          a: "",
          t: "",
          replies: []
        }, o = 0; o < r.length; ++o) {
        if (o == 0) {
          c.a = r[o].a;
          c.t = r[o].t;
        } else {
          c.replies.push({
            a: r[o].a,
            t: r[o].t
          });
        }
      }
      return c;
    }(r.c));
    p.setUint32(_, c.cmnt.length - 1, true);
    V |= 524288;
    _ += 4;
  }
  p.setUint32(8, V, true);
  return o[qu](0, _);
}
function T1(r, c) {
  var o = new Uint8Array(32);
  var p = n0(o);
  var _ = 12;
  var V = 0;
  var Y = "";
  o[0] = 4;
  switch (r.t) {
    case "n":
    case "b":
    case "d":
    case "e":
    case "z":
      break;
    case "s":
      Y = r.v == null ? "" : String(r.v);
      if (r.l) {
        var ee = c.rsst.findIndex(function (Ne) {
          var ze;
          return Ne.v == Y && Ne.l == ((ze = r.l) == null ? undefined : ze.Target);
        });
        if (ee == -1) {
          c.rsst[ee = c.rsst.length] = {
            v: Y,
            l: r.l.Target
          };
        }
        o[1] = 9;
        p.setUint32(_, ee, true);
        V |= 512;
        _ += 4;
      }
      break;
    default:
      throw "unsupported cell type " + r.t;
  }
  if (r.c) {
    p.setUint32(_, c.cmnt.length - 1, true);
    V |= 4096;
    _ += 4;
  }
  switch (r.t) {
    case "n":
      o[1] = 2;
      p.setFloat64(_, r.v, true);
      V |= 32;
      _ += 8;
      break;
    case "b":
      o[1] = 6;
      p.setFloat64(_, r.v ? 1 : 0, true);
      V |= 32;
      _ += 8;
      break;
    case "s":
      Y = r.v == null ? "" : String(r.v);
      if (!r.l) {
        var Te = c.sst.indexOf(Y);
        if (Te == -1) {
          c.sst[Te = c.sst.length] = Y;
        }
        o[1] = 3;
        p.setUint32(_, Te, true);
        V |= 16;
        _ += 4;
      }
      break;
    case "d":
      o[1] = 5;
      p.setFloat64(_, (r.v.getTime() - Date.UTC(2001, 0, 1)) / 1000, true);
      V |= 64;
      _ += 8;
      break;
    case "z":
      o[1] = 0;
      break;
    default:
      throw "unsupported cell type " + r.t;
  }
  p.setUint32(8, V, true);
  return o[qu](0, _);
}
function tA(r, c, o) {
  switch (r[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return function eA(r, c, o, p) {
        var _ = n0(r);
        var V = _.getUint32(4, true);
        var Y = -1;
        var ee = -1;
        var Te = -1;
        var Ne = NaN;
        var ze = 0;
        var Ft = new Date(Date.UTC(2001, 0, 1));
        var _t = o > 1 ? 12 : 8;
        if (V & 2) {
          Te = _.getUint32(_t, true);
          _t += 4;
        }
        _t += H_(V & (o > 1 ? 3468 : 396)) * 4;
        if (V & 512) {
          Y = _.getUint32(_t, true);
          _t += 4;
        }
        _t += H_(V & (o > 1 ? 12288 : 4096)) * 4;
        if (V & 16) {
          ee = _.getUint32(_t, true);
          _t += 4;
        }
        if (V & 32) {
          Ne = _.getFloat64(_t, true);
          _t += 8;
        }
        if (V & 64) {
          Ft.setTime(Ft.getTime() + (ze = _.getFloat64(_t, true)) * 1000);
          _t += 8;
        }
        if (o > 1 && (V = _.getUint32(8, true) >>> 16) & 255) {
          if (Te == -1) {
            Te = _.getUint32(_t, true);
          }
          _t += 4;
        }
        var Ot;
        var zt = r[o >= 4 ? 1 : 2];
        switch (zt) {
          case 0:
            return;
          case 2:
          case 7:
            Ot = {
              t: "n",
              v: Ne
            };
            break;
          case 3:
            Ot = {
              t: "s",
              v: c.sst[ee]
            };
            break;
          case 5:
            Ot = p?.cellDates ? {
              t: "d",
              v: Ft
            } : {
              t: "n",
              v: ze / 86400 + 35430,
              z: Kt[14]
            };
            break;
          case 6:
            Ot = {
              t: "b",
              v: Ne > 0
            };
            break;
          case 8:
            Ot = {
              t: "e",
              v: 0
            };
            break;
          case 9:
            if (Y <= -1) {
              throw new Error(`Unsupported cell type ${r[qu](0, 4)}`);
            }
            var nn = c.rsst[Y];
            Ot = {
              t: "s",
              v: nn.v
            };
            if (nn.l) {
              Ot.l = {
                Target: nn.l
              };
            }
            break;
          default:
            throw new Error(`Unsupported cell type ${r[qu](0, 4)}`);
        }
        if (Te > -1) {
          D1(Ot, zt | o << 8, V, c.ofmt[Te], c.nfmt[Te]);
        }
        if (zt == 7) {
          Ot.v /= 86400;
        }
        return Ot;
      }(r, c, r[0], o);
    case 5:
      return function ZE(r, c, o) {
        var p = n0(r);
        p.getUint32(4, true);
        var V = p.getUint32(8, true);
        var Y = 12;
        var ee = -1;
        var Te = -1;
        var Ne = -1;
        var ze = NaN;
        var Ft = NaN;
        var _t = 0;
        var Ot = new Date(Date.UTC(2001, 0, 1));
        if (V & 1) {
          ze = function Jb(r, c) {
            for (var o = (r[c + 15] & 127) << 7 | r[c + 14] >> 1, p = r[c + 14] & 1, _ = c + 13; _ >= c; --_) {
              p = p * 256 + r[_];
            }
            return (r[c + 15] & 128 ? -p : p) * Math.pow(10, o - 6176);
          }(r, Y);
          Y += 16;
        }
        if (V & 2) {
          Ft = p.getFloat64(Y, true);
          Y += 8;
        }
        if (V & 4) {
          Ot.setTime(Ot.getTime() + (_t = p.getFloat64(Y, true)) * 1000);
          Y += 8;
        }
        if (V & 8) {
          Te = p.getUint32(Y, true);
          Y += 4;
        }
        if (V & 16) {
          ee = p.getUint32(Y, true);
          Y += 4;
        }
        Y += H_(V & 480) * 4;
        if (V & 512) {
          p.getUint32(Y, true);
          Y += 4;
        }
        Y += H_(V & 1024) * 4;
        if (V & 2048) {
          p.getUint32(Y, true);
          Y += 4;
        }
        var Pt;
        var rn = r[1];
        switch (rn) {
          case 0:
            Pt = {
              t: "z"
            };
            break;
          case 2:
          case 10:
            Pt = {
              t: "n",
              v: ze
            };
            break;
          case 3:
            Pt = {
              t: "s",
              v: c.sst[Te]
            };
            break;
          case 5:
            Pt = o?.cellDates ? {
              t: "d",
              v: Ot
            } : {
              t: "n",
              v: _t / 86400 + 35430,
              z: Kt[14]
            };
            break;
          case 6:
            Pt = {
              t: "b",
              v: Ft > 0
            };
            break;
          case 7:
            Pt = {
              t: "n",
              v: Ft
            };
            break;
          case 8:
            Pt = {
              t: "e",
              v: 0
            };
            break;
          case 9:
            if (ee <= -1) {
              throw new Error(`Unsupported cell type ${r[1]} : ${V & 31} : ${r[qu](0, 4)}`);
            }
            var yn = c.rsst[ee];
            Pt = {
              t: "s",
              v: yn.v
            };
            if (yn.l) {
              Pt.l = {
                Target: yn.l
              };
            }
            break;
          default:
            throw new Error(`Unsupported cell type ${r[1]} : ${V & 31} : ${r[qu](0, 4)}`);
        }
        Y += H_(V & 4096) * 4;
        if (V & 516096) {
          if (Ne == -1) {
            Ne = p.getUint32(Y, true);
          }
          Y += 4;
        }
        if (V & 524288) {
          var un = p.getUint32(Y, true);
          Y += 4;
          if (c.cmnt[un]) {
            Pt.c = function zE(r) {
              var c = [];
              c.push({
                t: r.t || "",
                a: r.a,
                T: r.replies && r.replies.length > 0
              });
              if (r.replies) {
                r.replies.forEach(function (o) {
                  c.push({
                    t: o.t || "",
                    a: o.a,
                    T: true
                  });
                });
              }
              return c;
            }(c.cmnt[un]);
          }
        }
        if (Ne > -1) {
          D1(Pt, rn | 1280, V >> 13, c.ofmt[Ne], c.nfmt[Ne]);
        }
        if (rn == 7) {
          Pt.v /= 86400;
        }
        return Pt;
      }(r, c, o);
    default:
      throw new Error(`Unsupported payload version ${r[0]}`);
  }
}
function Yl(r) {
  return Nl(Ws(r)[1][0].data);
}
function gf(r) {
  return da([[], [{
    type: 0,
    data: Jo(r)
  }]]);
}
function $d(r, c) {
  var o;
  var p = (o = r.messages[0].meta[5]) != null && o[0] ? nE(r.messages[0].meta[5][0].data) : [];
  if (p.indexOf(c) == -1) {
    p.push(c);
    r.messages[0].meta[5] = [{
      type: 2,
      data: WE(p)
    }];
  }
}
function r0(r, c) {
  var o;
  var p = (o = r.messages[0].meta[5]) != null && o[0] ? nE(r.messages[0].meta[5][0].data) : [];
  r.messages[0].meta[5] = [{
    type: 2,
    data: WE(p.filter(function (_) {
      return _ != c;
    }))
  }];
}
function s0(r, c) {
  var o = Ws(c.data);
  var p = Nl(o[1][0].data);
  var V = [];
  (o[3] || []).forEach(function (Y) {
    var ee;
    var Te;
    var Ne = Ws(Y.data);
    if (Ne[1]) {
      var ze = Nl(Ne[1][0].data) >>> 0;
      switch (p) {
        case 1:
          V[ze] = Vg(Ne[3][0].data);
          break;
        case 8:
          var _t = Ws(r[Yl(Ne[9][0].data)][0].data);
          var Ot = r[Yl(_t[1][0].data)][0];
          var zt = Nl(Ot.meta[1][0].data);
          if (zt != 2001) {
            throw new Error(`2000 unexpected reference to ${zt}`);
          }
          var nn = Ws(Ot.data);
          var Pt = {
            v: nn[3].map(function (un) {
              return Vg(un.data);
            }).join("")
          };
          V[ze] = Pt;
          e: if ((ee = nn?.[11]) != null && ee[0]) {
            var rn = (Te = Ws(nn[11][0].data)) == null ? undefined : Te[1];
            if (!rn) {
              break e;
            }
            rn.forEach(function (un) {
              var ai;
              var Ni;
              var or;
              var Ln = Ws(un.data);
              if ((ai = Ln[2]) != null && ai[0]) {
                var Jn = r[Yl((Ni = Ln[2]) == null ? undefined : Ni[0].data)][0];
                var yi = Nl(Jn.meta[1][0].data);
                switch (yi) {
                  case 2032:
                    var mi = Ws(Jn.data);
                    if (((or = mi?.[2]) == null ? undefined : or[0]) && !Pt.l) {
                      Pt.l = Vg(mi[2][0].data);
                    }
                    break;
                  case 2039:
                    break;
                  default:
                    console.log(`unrecognized ObjectAttribute type ${yi}`);
                }
              }
            });
          }
          break;
        case 2:
          V[ze] = Ws(Ne[6][0].data);
          break;
        case 3:
          V[ze] = Ws(Ne[5][0].data);
          break;
        case 10:
          var yn = r[Yl(Ne[10][0].data)][0];
          V[ze] = M1(r, yn.data);
          break;
        default:
          throw p;
      }
    }
  });
  return V;
}
function M1(r, c) {
  var o;
  var p;
  var _;
  var V;
  var Y;
  var ee;
  var Te;
  var Ne;
  var ze;
  var Ft;
  var _t = {
    t: "",
    a: ""
  };
  var Ot = Ws(c);
  if ((p = (o = Ot?.[1]) == null ? undefined : o[0]) != null && p.data) {
    _t.t = Vg((V = (_ = Ot?.[1]) == null ? undefined : _[0]) == null ? undefined : V.data) || "";
  }
  if ((ee = (Y = Ot?.[3]) == null ? undefined : Y[0]) != null && ee.data) {
    var nn = Ws(r[Yl((Ne = (Te = Ot?.[3]) == null ? undefined : Te[0]) == null ? undefined : Ne.data)][0].data);
    if ((Ft = (ze = nn[1]) == null ? undefined : ze[0]) != null && Ft.data) {
      _t.a = Vg(nn[1][0].data);
    }
  }
  if (Ot?.[4]) {
    _t.replies = [];
    Ot[4].forEach(function (Pt) {
      var rn = r[Yl(Pt.data)][0];
      _t.replies.push(M1(r, rn.data));
    });
  }
  return _t;
}
function QE(r, c, o) {
  var p = Ws(c.data);
  var _ = {
    "!ref": "A1"
  };
  if (o?.dense) {
    _["!data"] = [];
  }
  var V = r[Yl(p[2][0].data)];
  var Y = Nl(V[0].meta[1][0].data);
  if (Y != 6001) {
    throw new Error(`6000 unexpected reference to ${Y}`);
  }
  (function jE(r, c, o, p) {
    var _;
    var V;
    var Y;
    var ee;
    var Te;
    var Ne;
    var ze;
    var Ft;
    var _t;
    var Ot;
    var zt = Ws(c.data);
    var nn = {
      s: {
        r: 0,
        c: 0
      },
      e: {
        r: 0,
        c: 0
      }
    };
    nn.e.r = (Nl(zt[6][0].data) >>> 0) - 1;
    if (nn.e.r < 0) {
      throw new Error(`Invalid row varint ${zt[6][0].data}`);
    }
    nn.e.c = (Nl(zt[7][0].data) >>> 0) - 1;
    if (nn.e.c < 0) {
      throw new Error(`Invalid col varint ${zt[7][0].data}`);
    }
    o["!ref"] = $o(nn);
    var Pt = o["!data"] != null;
    var rn = o;
    var yn = Ws(zt[4][0].data);
    var un = {
      sst: [],
      rsst: [],
      ofmt: [],
      nfmt: [],
      fmla: [],
      ferr: [],
      cmnt: []
    };
    if ((_ = yn[4]) != null && _[0]) {
      un.sst = s0(r, r[Yl(yn[4][0].data)][0]);
    }
    if ((V = yn[6]) != null && V[0]) {
      un.fmla = s0(r, r[Yl(yn[6][0].data)][0]);
    }
    if ((Y = yn[11]) != null && Y[0]) {
      un.ofmt = s0(r, r[Yl(yn[11][0].data)][0]);
    }
    if ((ee = yn[12]) != null && ee[0]) {
      un.ferr = s0(r, r[Yl(yn[12][0].data)][0]);
    }
    if ((Te = yn[17]) != null && Te[0]) {
      un.rsst = s0(r, r[Yl(yn[17][0].data)][0]);
    }
    if ((Ne = yn[19]) != null && Ne[0]) {
      un.cmnt = s0(r, r[Yl(yn[19][0].data)][0]);
    }
    if ((ze = yn[22]) != null && ze[0]) {
      un.nfmt = s0(r, r[Yl(yn[22][0].data)][0]);
    }
    var ai = Ws(yn[3][0].data);
    var Ni = 0;
    if ((Ft = yn[9]) == null || !Ft[0]) {
      throw "NUMBERS file missing row tree";
    }
    Ws(yn[9][0].data)[1].map(function (yi) {
      return Ws(yi.data);
    }).forEach(function (yi) {
      Ni = Nl(yi[1][0].data);
      var mi = Nl(yi[2][0].data);
      var Fi = ai[1][mi];
      if (!Fi) {
        throw "NUMBERS missing tile " + mi;
      }
      var ji = Ws(Fi.data);
      var Dr = r[Yl(ji[2][0].data)][0];
      var yo = Nl(Dr.meta[1][0].data);
      if (yo != 6002) {
        throw new Error(`6001 unexpected reference to ${yo}`);
      }
      var _s = function GE(r, c) {
        var o;
        var p = Ws(c.data);
        var _ = -1;
        if ((o = p?.[7]) != null && o[0]) {
          _ = Nl(p[7][0].data) >>> 0 ? 1 : 0;
        }
        var V = Uy(p[5], function (Y) {
          return function nA(r, c) {
            var o;
            var p;
            var _;
            var V;
            var Y;
            var ee;
            var Te;
            var Ne;
            var ze;
            var Ft;
            var _t;
            var Ot;
            var zt;
            var nn;
            var ai;
            var Ni;
            var Pt = Ws(r);
            var rn = Nl(Pt[1][0].data) >>> 0;
            var yn = Nl(Pt[2][0].data) >>> 0;
            var un = ((p = (o = Pt[8]) == null ? undefined : o[0]) == null ? undefined : p.data) && Nl(Pt[8][0].data) > 0 || false;
            if (((V = (_ = Pt[7]) == null ? undefined : _[0]) == null ? undefined : V.data) && c != 0) {
              ai = (ee = (Y = Pt[7]) == null ? undefined : Y[0]) == null ? undefined : ee.data;
              Ni = (Ne = (Te = Pt[6]) == null ? undefined : Te[0]) == null ? undefined : Ne.data;
            } else {
              if (!((Ft = (ze = Pt[4]) == null ? undefined : ze[0]) == null ? undefined : Ft.data) || c == 1) {
                throw `NUMBERS Tile missing ${c} cell storage`;
              }
              ai = (Ot = (_t = Pt[4]) == null ? undefined : _t[0]) == null ? undefined : Ot.data;
              Ni = (nn = (zt = Pt[3]) == null ? undefined : zt[0]) == null ? undefined : nn.data;
            }
            for (var or = un ? 4 : 1, Ln = n0(ai), Jn = [], yi = 0; yi < ai.length / 2; ++yi) {
              var mi = Ln.getUint16(yi * 2, true);
              if (mi < 65535) {
                Jn.push([yi, mi]);
              }
            }
            if (Jn.length != yn) {
              throw `Expected ${yn} cells, found ${Jn.length}`;
            }
            var Fi = [];
            for (yi = 0; yi < Jn.length - 1; ++yi) {
              Fi[Jn[yi][0]] = Ni[qu](Jn[yi][1] * or, Jn[yi + 1][1] * or);
            }
            if (Jn.length >= 1) {
              Fi[Jn[Jn.length - 1][0]] = Ni[qu](Jn[Jn.length - 1][1] * or);
            }
            return {
              R: rn,
              cells: Fi
            };
          }(Y, _);
        });
        return {
          nrows: Nl(p[4][0].data) >>> 0,
          data: V.reduce(function (Y, ee) {
            Y[ee.R] ||= [];
            ee.cells.forEach(function (Te, Ne) {
              if (Y[ee.R][Ne]) {
                throw new Error(`Duplicate cell r=${ee.R} c=${Ne}`);
              }
              Y[ee.R][Ne] = Te;
            });
            return Y;
          }, [])
        };
      }(0, Dr);
      _s.data.forEach(function (ra, ds) {
        ra.forEach(function (Ua, Ul) {
          var os = tA(Ua, un, p);
          if (os) {
            if (Pt) {
              rn["!data"][Ni + ds] ||= [];
              rn["!data"][Ni + ds][Ul] = os;
            } else {
              o[jo(Ul) + Da(Ni + ds)] = os;
            }
          }
        });
      });
      Ni += _s.nrows;
    });
    if ((_t = yn[13]) != null && _t[0]) {
      var Ln = r[Yl(yn[13][0].data)][0];
      var Jn = Nl(Ln.meta[1][0].data);
      if (Jn != 6144) {
        throw new Error(`Expected merge type 6144, found ${Jn}`);
      }
      o["!merges"] = (Ot = Ws(Ln.data)) == null ? undefined : Ot[1].map(function (yi) {
        var mi = Ws(yi.data);
        var Fi = n0(Ws(mi[1][0].data)[1][0].data);
        var ji = n0(Ws(mi[2][0].data)[1][0].data);
        return {
          s: {
            r: Fi.getUint16(0, true),
            c: Fi.getUint16(2, true)
          },
          e: {
            r: Fi.getUint16(0, true) + ji.getUint16(0, true) - 1,
            c: Fi.getUint16(2, true) + ji.getUint16(2, true) - 1
          }
        };
      });
    }
  })(r, V[0], _, o);
  return _;
}
function iE(r, c) {
  var o;
  var p;
  var _;
  var V;
  var Y;
  var ee;
  var Te;
  var Ne = {};
  var ze = [];
  r.FullPaths.forEach(function (_t) {
    if (_t.match(/\.iwpv2/)) {
      throw new Error("Unsupported password protection");
    }
  });
  r.FileIndex.forEach(function (_t) {
    if (_t.name.match(/\.iwa$/) && _t.content[0] == 0) {
      var Ot;
      var zt;
      try {
        Ot = Vy(_t.content);
      } catch (nn) {
        return console.log("?? " + _t.content.length + " " + (nn.message || nn));
      }
      try {
        zt = By(Ot);
      } catch (nn) {
        return console.log("## " + (nn.message || nn));
      }
      zt.forEach(function (nn) {
        Ne[nn.id] = nn.messages;
        ze.push(nn.id);
      });
    }
  });
  if (!ze.length) {
    throw new Error("File has no messages");
  }
  if (((_ = (p = (o = Ne?.[1]) == null ? undefined : o[0].meta) == null ? undefined : p[1]) == null ? undefined : _[0].data) && Nl(Ne[1][0].meta[1][0].data) == 10000) {
    throw new Error("Pages documents are not supported");
  }
  var Ft = ((Te = (ee = (Y = (V = Ne?.[1]) == null ? undefined : V[0]) == null ? undefined : Y.meta) == null ? undefined : ee[1]) == null ? undefined : Te[0].data) && Nl(Ne[1][0].meta[1][0].data) == 1 && Ne[1][0];
  if (!Ft) {
    ze.forEach(function (_t) {
      Ne[_t].forEach(function (Ot) {
        if (Nl(Ot.meta[1][0].data) >>> 0 == 1) {
          if (Ft) {
            throw new Error("Document has multiple roots");
          }
          Ft = Ot;
        }
      });
    });
  }
  if (!Ft) {
    throw new Error("Cannot find Document root");
  }
  return function rA(r, c, o) {
    var p;
    var _ = X_();
    _.Workbook = {
      WBProps: {
        date1904: true
      }
    };
    var V = Ws(c.data);
    if ((p = V[2]) != null && p[0]) {
      throw new Error("Keynote presentations are not supported");
    }
    Uy(V[1], Yl).forEach(function (ee) {
      r[ee].forEach(function (Te) {
        if (Nl(Te.meta[1][0].data) == 2) {
          var ze = function iA(r, c, o) {
            var p;
            var _ = Ws(c.data);
            var V = {
              name: (p = _[1]) != null && p[0] ? Vg(_[1][0].data) : "",
              sheets: []
            };
            Uy(_[2], Yl).forEach(function (ee) {
              r[ee].forEach(function (Te) {
                if (Nl(Te.meta[1][0].data) == 6000) {
                  V.sheets.push(QE(r, Te, o));
                }
              });
            });
            return V;
          }(r, Te, o);
          ze.sheets.forEach(function (Ft, _t) {
            y_(_, Ft, _t == 0 ? ze.name : ze.name + "_" + _t, true);
          });
        }
      });
    });
    if (_.SheetNames.length == 0) {
      throw new Error("Empty NUMBERS file");
    }
    _.bookType = "numbers";
    return _;
  }(Ne, Ft, c);
}
function sA(r, c, o) {
  var p;
  var _;
  var V;
  var Y = [[], [{
    type: 0,
    data: Jo(0)
  }], [{
    type: 0,
    data: Jo(0)
  }], [{
    type: 2,
    data: new Uint8Array([])
  }], [{
    type: 2,
    data: new Uint8Array(Array.from({
      length: 510
    }, function () {
      return 255;
    }))
  }], [{
    type: 0,
    data: Jo(5)
  }], [{
    type: 2,
    data: new Uint8Array([])
  }], [{
    type: 2,
    data: new Uint8Array(Array.from({
      length: 510
    }, function () {
      return 255;
    }))
  }], [{
    type: 0,
    data: Jo(1)
  }]];
  if ((p = Y[6]) == null || !p[0] || (_ = Y[7]) == null || !_[0]) {
    throw "Mutation only works on post-BNC storages!";
  }
  var ee = 0;
  if (Y[7][0].data.length < r.length * 2) {
    var Te = new Uint8Array(r.length * 2);
    Te.set(Y[7][0].data);
    Y[7][0].data = Te;
  }
  if (Y[4][0].data.length < r.length * 2) {
    var Ne = new Uint8Array(r.length * 2);
    Ne.set(Y[4][0].data);
    Y[4][0].data = Ne;
  }
  for (var ze = n0(Y[7][0].data), Ft = 0, _t = [], Ot = n0(Y[4][0].data), zt = 0, nn = [], Pt = o ? 4 : 1, rn = 0; rn < r.length; ++rn) {
    if (r[rn] != null && (r[rn].t != "z" || (V = r[rn].c) != null && V.length) && r[rn].t != "e") {
      var yn;
      var un;
      ze.setUint16(rn * 2, Ft / Pt, true);
      Ot.setUint16(rn * 2, zt / Pt, true);
      switch (r[rn].t) {
        case "d":
          if (r[rn].v instanceof Date) {
            yn = K0(r[rn], c);
            un = T1(r[rn], c);
            break;
          }
          yn = K0(r[rn], c);
          un = T1(r[rn], c);
          break;
        case "s":
        case "n":
        case "b":
        case "z":
          yn = K0(r[rn], c);
          un = T1(r[rn], c);
          break;
        default:
          throw new Error("Unsupported value " + r[rn]);
      }
      _t.push(yn);
      Ft += yn.length;
      nn.push(un);
      zt += un.length;
      ++ee;
    } else {
      ze.setUint16(rn * 2, 65535, true);
      Ot.setUint16(rn * 2, 65535);
    }
  }
  Y[2][0].data = Jo(ee);
  Y[5][0].data = Jo(5);
  for (; rn < Y[7][0].data.length / 2; ++rn) {
    ze.setUint16(rn * 2, 65535, true);
    Ot.setUint16(rn * 2, 65535, true);
  }
  Y[6][0].data = G0(_t);
  Y[3][0].data = G0(nn);
  Y[8] = [{
    type: 0,
    data: Jo(o ? 1 : 0)
  }];
  return Y;
}
function O1(r, c) {
  return {
    meta: [[], [{
      type: 0,
      data: Jo(r)
    }]],
    data: c
  };
}
function o0(r, c) {
  c.last ||= 927262;
  for (var o = c.last; o < 2000000; ++o) {
    if (!c[o]) {
      c[c.last = o] = r;
      return o;
    }
  }
  throw new Error("Too many messages");
}
function P1(r, c, o) {
  return da([[], [{
    type: 0,
    data: Jo(1)
  }], [], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([r / 255]).buffer)
  }], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([c / 255]).buffer)
  }], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([o / 255]).buffer)
  }], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([1]).buffer)
  }], [], [], [], [], [], [{
    type: 0,
    data: Jo(1)
  }]]);
}
function $E(r) {
  switch (r) {
    case 0:
      return P1(99, 222, 171);
    case 1:
      return P1(162, 197, 240);
    case 2:
      return P1(255, 189, 189);
  }
  return P1(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function zc(r, c, o, p) {
  var _ = Fr.find(r, c[o].location);
  if (!_) {
    throw `Could not find ${c[o].location} in Numbers template`;
  }
  var V = By(Vy(_.content));
  p(V.find(function (ee) {
    return ee.id == o;
  }), V);
  _.content = m_(z0(V));
  _.size = _.content.length;
}
function Hm(r, c, o) {
  var p = Fr.find(r, c[o].location);
  if (!p) {
    throw `Could not find ${c[o].location} in Numbers template`;
  }
  return By(Vy(p.content)).find(function (Y) {
    return Y.id == o;
  });
}
function rE(r, c, o) {
  r[3].push({
    type: 2,
    data: da([[], [{
      type: 0,
      data: Jo(c)
    }], [{
      type: 2,
      data: sh(o.replace(/-.*$/, ""))
    }], [{
      type: 2,
      data: sh(o)
    }], [{
      type: 2,
      data: new Uint8Array([2, 0, 0])
    }], [{
      type: 2,
      data: new Uint8Array([2, 0, 0])
    }], [], [], [], [], [{
      type: 0,
      data: Jo(0)
    }], [], [{
      type: 0,
      data: Jo(0)
    }]])
  });
  r[1] = [{
    type: 0,
    data: Jo(Math.max(c + 1, Nl(r[1][0].data)))
  }];
}
function j0(r, c, o, p, _, V) {
  V ||= o0({
    deps: [],
    location: "",
    type: c
  }, _);
  var Y = `${p}-${V}.iwa`;
  _[V].location = "Root Entry" + Y;
  Fr.utils.cfb_add(r, Y, m_(z0([{
    id: V,
    messages: [O1(c, da(o))]
  }])));
  var ee = Y.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  zc(r, _, 2, function (Te) {
    var Ne = Ws(Te.messages[0].data);
    rE(Ne, V || 0, ee);
    Te.messages[0].data = da(Ne);
  });
  return V;
}
function oh(r, c, o, p) {
  var _ = c[o].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  var V = r[3].findIndex(function (ee) {
    var Te;
    var Ne;
    var ze = Ws(ee.data);
    if ((Te = ze[3]) != null && Te[0]) {
      return Vg(ze[3][0].data) == _;
    } else {
      return !!((Ne = ze[2]) == null ? undefined : Ne[0]) && Vg(ze[2][0].data) == _;
    }
  });
  var Y = Ws(r[3][V].data);
  Y[6] ||= [];
  (Array.isArray(p) ? p : [p]).forEach(function (ee) {
    Y[6].push({
      type: 2,
      data: da([[], [{
        type: 0,
        data: Jo(ee)
      }]])
    });
  });
  r[3][V].data = da(Y);
}
function oE(r) {
  return function (o) {
    for (var p = 0; p != r.length; ++p) {
      var _ = r[p];
      if (o[_[0]] === undefined) {
        o[_[0]] = _[1];
      }
      if (_[2] === "n") {
        o[_[0]] = Number(o[_[0]]);
      }
    }
  };
}
function I1(r) {
  oE([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(r);
}
function aE(r) {
  oE([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]])(r);
}
function Y_(r) {
  if (nt.WS.indexOf(r) > -1) {
    return "sheet";
  } else if (nt.CS && r == nt.CS) {
    return "chart";
  } else if (nt.DS && r == nt.DS) {
    return "dialog";
  } else if (nt.MS && r == nt.MS) {
    return "macro";
  } else if (r && r.length) {
    return r;
  } else {
    return "sheet";
  }
}
function ib(r, c, o, p, _, V, Y, ee) {
  if (r && r["!legdrawel"]) {
    var Ne = vt(o, Xi(r["!legdrawel"].Target, p), true);
    if (Ne) {
      (function Ey(r, c, o) {
        var p = 0;
        (r.match(Pf) || []).forEach(function (_) {
          var V = "";
          var Y = true;
          var ee = -1;
          var Te = -1;
          var Ne = -1;
          if ((_.replace(Ys, function (Ft, _t) {
            var Ot = sr(Ft);
            switch (wa(Ot[0])) {
              case "<ClientData":
                if (Ot.ObjectType) {
                  V = Ot.ObjectType;
                }
                break;
              case "<Visible":
              case "<Visible/>":
                Y = false;
                break;
              case "<Row":
              case "<Row>":
              case "<Column":
              case "<Column>":
                ee = _t + Ft.length;
                break;
              case "</Row>":
                Te = +_.slice(ee, _t).trim();
                break;
              case "</Column>":
                Ne = +_.slice(ee, _t).trim();
            }
            return "";
          }), V) === "Note") {
            var ze = $_(c, Te >= 0 && Ne >= 0 ? Eo({
              r: Te,
              c: Ne
            }) : o[p].ref);
            if (ze.c) {
              ze.c.hidden = Y;
            }
            ++p;
          }
        });
      })(Ns(Ne), r, ee || []);
    }
  }
}
function rb(r, c, o, p, _, V, Y, ee, Te, Ne, ze, Ft) {
  try {
    V[p] = Pn(vt(r, o, true), c);
    var Ot;
    var _t = ut(r, c);
    switch (ee) {
      case "sheet":
        Ot = v1(_t, c, _, Te, V[p], Ne, ze, Ft);
        break;
      case "chart":
        if (!(Ot = function R_(r, c, o, p, _, V, Y, ee) {
          if (c.slice(-4) === ".bin") {
            return function xu(r, c, o, p, _) {
              if (!r) {
                return r;
              }
              p ||= {
                "!id": {}
              };
              var V = {
                "!type": "chart",
                "!drawel": null,
                "!rel": ""
              };
              var Y = [];
              var ee = false;
              ic(r, function (Ne, ze, Ft) {
                switch (Ft) {
                  case 550:
                    V["!rel"] = Ne;
                    break;
                  case 651:
                    _.Sheets[o] ||= {};
                    if (Ne.name) {
                      _.Sheets[o].CodeName = Ne.name;
                    }
                    break;
                  case 562:
                  case 652:
                  case 669:
                  case 679:
                  case 551:
                  case 552:
                  case 476:
                  case 3072:
                    break;
                  case 35:
                    ee = true;
                    break;
                  case 36:
                    ee = false;
                    break;
                  case 37:
                    Y.push(Ft);
                    break;
                  case 38:
                    Y.pop();
                    break;
                  default:
                    if (ze.T > 0) {
                      Y.push(Ft);
                    } else if (ze.T < 0) {
                      Y.pop();
                    } else if (!ee || c.WTF) {
                      throw new Error("Unexpected record 0x" + Ft.toString(16));
                    }
                }
              }, c);
              if (p["!id"][V["!rel"]]) {
                V["!drawel"] = p["!id"][V["!rel"]];
              }
              return V;
            }(r, p, o, _, V);
          } else {
            return function Fc(r, c, o, p, _) {
              if (!r) {
                return r;
              }
              p ||= {
                "!id": {}
              };
              var Y;
              var V = {
                "!type": "chart",
                "!drawel": null,
                "!rel": ""
              };
              var ee = r.match(dd);
              if (ee) {
                Jc(ee[0], 0, _, o);
              }
              if (Y = r.match(/drawing r:id="(.*?)"/)) {
                V["!rel"] = Y[1];
              }
              if (p["!id"][V["!rel"]]) {
                V["!drawel"] = p["!id"][V["!rel"]];
              }
              return V;
            }(r, 0, o, _, V);
          }
        }(_t, c, _, Te, V[p], Ne)) || !Ot["!drawel"]) {
          break;
        }
        var zt = Xi(Ot["!drawel"].Target, c);
        var nn = sn(zt);
        var Pt = function Fv(r, c) {
          if (!r) {
            return "??";
          }
          var o = (r.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
          return c["!id"][o].Target;
        }(vt(r, zt, true), Pn(vt(r, nn, true), zt));
        var rn = Xi(Pt, zt);
        var yn = sn(rn);
        Ot = function rp(r, c, o, p, _, V) {
          var Y = V || {
            "!type": "chart"
          };
          if (!r) {
            return V;
          }
          var ee = 0;
          var Te = 0;
          var Ne = "A";
          var ze = {
            s: {
              r: 2000000,
              c: 2000000
            },
            e: {
              r: 0,
              c: 0
            }
          };
          (r.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (Ft) {
            var _t = function Ld(r) {
              var p;
              var c = [];
              var o = r.match(/^<c:numCache>/);
              (r.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (V) {
                var Y = V.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
                if (!!Y) {
                  c[+Y[1]] = o ? +Y[2] : Y[2];
                }
              });
              var _ = Rr((r.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
              (r.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function (V) {
                p = V.replace(/<.*?>/g, "");
              });
              return [c, _, p];
            }(Ft);
            ze.s.r = ze.s.c = 0;
            ze.e.c = ee;
            Ne = jo(ee);
            _t[0].forEach(function (Ot, zt) {
              if (Y["!data"]) {
                Y["!data"][zt] ||= [];
                Y["!data"][zt][ee] = {
                  t: "n",
                  v: Ot,
                  z: _t[1]
                };
              } else {
                Y[Ne + Da(zt)] = {
                  t: "n",
                  v: Ot,
                  z: _t[1]
                };
              }
              Te = zt;
            });
            if (ze.e.r < Te) {
              ze.e.r = Te;
            }
            ++ee;
          });
          if (ee > 0) {
            Y["!ref"] = $o(ze);
          }
          return Y;
        }(vt(r, rn, true), 0, 0, Pn(vt(r, yn, true), rn), 0, Ot);
        break;
      case "macro":
        Ot = function y1(r, c, o, p, _, V, Y, ee) {
          c.slice(-4);
          return {
            "!type": "macro"
          };
        }(0, c);
        break;
      case "dialog":
        Ot = function _1(r, c, o, p, _, V, Y, ee) {
          c.slice(-4);
          return {
            "!type": "dialog"
          };
        }(0, c);
        break;
      default:
        throw new Error("Unrecognized sheet type " + ee);
    }
    Y[p] = Ot;
    var un = [];
    var ai = [];
    if (V && V[p]) {
      qs(V[p]).forEach(function (Ni) {
        var or = "";
        if (V[p][Ni].Type == nt.CMNT) {
          or = Xi(V[p][Ni].Target, c);
          if (!(un = function k_(r, c, o) {
            if (c.slice(-4) === ".bin") {
              return function Ed(r, c) {
                var o = [];
                var p = [];
                var _ = {};
                var V = false;
                ic(r, function (ee, Te, Ne) {
                  switch (Ne) {
                    case 632:
                      p.push(ee);
                      break;
                    case 635:
                      _ = ee;
                      break;
                    case 637:
                      _.t = ee.t;
                      _.h = ee.h;
                      _.r = ee.r;
                      break;
                    case 636:
                      _.author = p[_.iauthor];
                      delete _.iauthor;
                      if (c.sheetRows && _.rfx && c.sheetRows <= _.rfx.r) {
                        break;
                      }
                      _.t ||= "";
                      delete _.rfx;
                      o.push(_);
                      break;
                    case 3072:
                    case 37:
                    case 38:
                      break;
                    case 35:
                      V = true;
                      break;
                    case 36:
                      V = false;
                      break;
                    default:
                      if (!Te.T && (!V || c.WTF)) {
                        throw new Error("Unexpected record 0x" + Ne.toString(16));
                      }
                  }
                });
                return o;
              }(r, o);
            } else {
              return function lf(r, c) {
                if (r.match(/<(?:\w+:)?comments *\/>/)) {
                  return [];
                }
                var o = [];
                var p = [];
                var _ = r.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
                if (_ && _[1]) {
                  _[1].split(/<\/\w*:?author>/).forEach(function (Y) {
                    if (Y !== "" && Y.trim() !== "") {
                      var ee = Y.match(/<(?:\w+:)?author[^>]*>(.*)/);
                      if (ee) {
                        o.push(ee[1]);
                      }
                    }
                  });
                }
                var V = r.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
                if (V && V[1]) {
                  V[1].split(/<\/\w*:?comment>/).forEach(function (Y) {
                    if (Y !== "" && Y.trim() !== "") {
                      var ee = Y.match(/<(?:\w+:)?comment[^>]*>/);
                      if (ee) {
                        var Te = sr(ee[0]);
                        var Ne = {
                          author: Te.authorId && o[Te.authorId] || "sheetjsghost",
                          ref: Te.ref,
                          guid: Te.guid
                        };
                        var ze = Qo(Te.ref);
                        if (!c.sheetRows || c.sheetRows > ze.r) {
                          var Ft = Y.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);
                          var _t = !!Ft && !!Ft[1] && tg(Ft[1]) || {
                            r: "",
                            t: "",
                            h: ""
                          };
                          Ne.r = _t.r;
                          if (_t.r == "<t></t>") {
                            _t.t = _t.h = "";
                          }
                          Ne.t = (_t.t || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                          if (c.cellHTML) {
                            Ne.h = _t.h;
                          }
                          p.push(Ne);
                        }
                      }
                    }
                  });
                }
                return p;
              }(r, o);
            }
          }(ut(r, or, true), or, Te)) || !un.length) {
            return;
          }
          xm(Ot, un, false);
        }
        if (V[p][Ni].Type == nt.TCMNT) {
          or = Xi(V[p][Ni].Target, c);
          ai = ai.concat(function O0(r, c) {
            var o = [];
            var p = false;
            var _ = {};
            var V = 0;
            r.replace(Ys, function (ee, Te) {
              var Ne = sr(ee);
              switch (wa(Ne[0])) {
                case "<?xml":
                case "<ThreadedComments":
                case "</ThreadedComments>":
                case "<extLst":
                case "<extLst>":
                case "</extLst>":
                case "<extLst/>":
                  break;
                case "<threadedComment":
                  _ = {
                    author: Ne.personId,
                    guid: Ne.id,
                    ref: Ne.ref,
                    T: 1
                  };
                  break;
                case "</threadedComment>":
                  if (_.t != null) {
                    o.push(_);
                  }
                  break;
                case "<text>":
                case "<text":
                  V = Te + ee.length;
                  break;
                case "</text>":
                  _.t = r.slice(V, Te).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                  break;
                case "<mentions":
                case "<mentions>":
                case "<ext":
                  p = true;
                  break;
                case "</mentions>":
                case "</ext>":
                  p = false;
                  break;
                default:
                  if (!p && c.WTF) {
                    throw new Error("unrecognized " + Ne[0] + " in threaded comments");
                  }
              }
              return ee;
            });
            return o;
          }(ut(r, or, true), Te));
        }
      });
    }
    if (ai && ai.length) {
      xm(Ot, ai, true, Te.people || []);
    }
    ib(Ot, 0, r, c, 0, 0, 0, un);
  } catch (Ni) {
    if (Te.WTF) {
      throw Ni;
    }
  }
}
function op(r) {
  if (r.charAt(0) == "/") {
    return r.slice(1);
  } else {
    return r;
  }
}
function lE(r, c) {
  Ko();
  I1(c = c || {});
  if (Js(r, "META-INF/manifest.xml") || Js(r, "objectdata.xml")) {
    return function eE(r, c) {
      c = c || {};
      if (Js(r, "META-INF/manifest.xml")) {
        (function _a(r, c) {
          for (var p, _, o = Fn(r); p = ci.exec(o);) {
            switch (p[3]) {
              case "manifest":
                break;
              case "file-entry":
                if ((_ = sr(p[0], false)).path == "/" && _.type !== "application/vnd.oasis.opendocument.spreadsheet") {
                  throw new Error("This OpenDocument is not a spreadsheet");
                }
                break;
              case "encryption-data":
              case "algorithm":
              case "start-key-generation":
              case "key-derivation":
                throw new Error("Unsupported ODS Encryption");
              default:
                if (c && c.WTF) {
                  throw p;
                }
            }
          }
        })(ut(r, "META-INF/manifest.xml"), c);
      }
      var o = vt(r, "styles.xml");
      var p = o && w1(Ns(o));
      var _ = vt(r, "content.xml");
      if (!_) {
        throw new Error("Missing content.xml in ODS / UOF file");
      }
      var V = BE(Ns(_), c, p);
      if (Js(r, "meta.xml")) {
        V.Props = _c(ut(r, "meta.xml"));
      }
      V.bookType = "ods";
      return V;
    }(r, c);
  }
  if (Js(r, "Index/Document.iwa")) {
    if (typeof Uint8Array === "undefined") {
      throw new Error("NUMBERS file parsing requires Uint8Array support");
    }
    if (r.FileIndex) {
      return iE(r, c);
    }
    var o = Fr.utils.cfb_new();
    kn(r).forEach(function (_s) {
      Zn(o, _s, Zt(r, _s));
    });
    return iE(o, c);
  }
  if (!Js(r, "[Content_Types].xml")) {
    if (Js(r, "index.xml.gz")) {
      throw new Error("Unsupported NUMBERS 08 file");
    }
    if (Js(r, "index.xml")) {
      throw new Error("Unsupported NUMBERS 09 file");
    }
    var p = Fr.find(r, "Index.zip");
    if (p) {
      delete (c = Vs(c)).type;
      if (typeof p.content == "string") {
        c.type = "binary";
      }
      if (typeof Bun !== "undefined" && Buffer.isBuffer(p.content)) {
        return Lf(new Uint8Array(p.content), c);
      } else {
        return Lf(p.content, c);
      }
    }
    throw new Error("Unsupported ZIP file");
  }
  var ee;
  var Te;
  var _ = kn(r);
  var V = function we(r) {
    var c = {
      workbooks: [],
      sheets: [],
      charts: [],
      dialogs: [],
      macros: [],
      rels: [],
      strs: [],
      comments: [],
      threadedcomments: [],
      links: [],
      coreprops: [],
      extprops: [],
      custprops: [],
      themes: [],
      styles: [],
      calcchains: [],
      vba: [],
      drawings: [],
      metadata: [],
      people: [],
      TODO: [],
      xmlns: ""
    };
    if (!r || !r.match) {
      return c;
    }
    var o = {};
    (r.match(Ys) || []).forEach(function (p) {
      var _ = sr(p);
      switch (_[0].replace(xo, "<")) {
        case "<?xml":
          break;
        case "<Types":
          c.xmlns = _["xmlns" + (_[0].match(/<(\w+):/) || ["", ""])[1]];
          break;
        case "<Default":
          o[_.Extension.toLowerCase()] = _.ContentType;
          break;
        case "<Override":
          if (c[wr[_.ContentType]] !== undefined) {
            c[wr[_.ContentType]].push(_.PartName);
          }
      }
    });
    if (c.xmlns !== pi_CT) {
      throw new Error("Unknown Namespace: " + c.xmlns);
    }
    c.calcchain = c.calcchains.length > 0 ? c.calcchains[0] : "";
    c.sst = c.strs.length > 0 ? c.strs[0] : "";
    c.style = c.styles.length > 0 ? c.styles[0] : "";
    c.defaults = o;
    delete c.calcchains;
    return c;
  }(vt(r, "[Content_Types].xml"));
  var Y = false;
  if (V.workbooks.length === 0 && ut(r, Te = "xl/workbook.xml", true)) {
    V.workbooks.push(Te);
  }
  if (V.workbooks.length === 0) {
    if (!ut(r, Te = "xl/workbook.bin", true)) {
      throw new Error("Could not find workbook");
    }
    V.workbooks.push(Te);
    Y = true;
  }
  if (V.workbooks[0].slice(-3) == "bin") {
    Y = true;
  }
  var Ne = {};
  var ze = {};
  if (!c.bookSheets && !c.bookProps) {
    qh = [];
    if (V.sst) {
      try {
        qh = function E1(r, c, o) {
          if (c.slice(-4) === ".bin") {
            return function ng(r, c) {
              var o = [];
              var p = false;
              ic(r, function (V, Y, ee) {
                switch (ee) {
                  case 159:
                    o.Count = V[0];
                    o.Unique = V[1];
                    break;
                  case 19:
                    o.push(V);
                    break;
                  case 160:
                    return true;
                  case 35:
                    p = true;
                    break;
                  case 36:
                    p = false;
                    break;
                  default:
                    if (!p || c.WTF) {
                      throw new Error("Unexpected record 0x" + ee.toString(16));
                    }
                }
              });
              return o;
            }(r, o);
          } else {
            return function jf(r, c) {
              var o = [];
              var p = "";
              if (!r) {
                return o;
              }
              var _ = r.match(xf);
              if (_) {
                p = _[2].replace(hv, "").split(kh);
                for (var V = 0; V != p.length; ++V) {
                  var Y = tg(p[V].trim(), c);
                  if (Y != null) {
                    o[o.length] = Y;
                  }
                }
                _ = sr(_[1]);
                o.Count = _.count;
                o.Unique = _.uniqueCount;
              }
              return o;
            }(r, o);
          }
        }(ut(r, op(V.sst)), V.sst, c);
      } catch (_s) {
        if (c.WTF) {
          throw _s;
        }
      }
    }
    if (c.cellStyles && V.themes.length) {
      Ne = Gu(vt(r, V.themes[0].replace(/^\//, ""), true) || "", c);
    }
    if (V.style) {
      ze = function F_(r, c, o, p) {
        if (c.slice(-4) === ".bin") {
          return function Cv(r, c, o) {
            var p = {
              NumberFmt: []
            };
            for (var _ in Kt) {
              p.NumberFmt[_] = Kt[_];
            }
            p.CellXf = [];
            p.Fonts = [];
            var V = [];
            var Y = false;
            ic(r, function (Te, Ne, ze) {
              switch (ze) {
                case 44:
                  p.NumberFmt[Te[0]] = Te[1];
                  la(Te[1], Te[0]);
                  break;
                case 43:
                  p.Fonts.push(Te);
                  if (Te.color.theme != null && c && c.themeElements && c.themeElements.clrScheme) {
                    Te.color.rgb = Eh(c.themeElements.clrScheme[Te.color.theme].rgb, Te.color.tint || 0);
                  }
                  break;
                case 1025:
                case 45:
                case 46:
                case 48:
                case 507:
                case 572:
                case 475:
                case 1171:
                case 2102:
                case 1130:
                case 512:
                case 2095:
                case 3072:
                  break;
                case 47:
                  if (V[V.length - 1] == 617) {
                    p.CellXf.push(Te);
                  }
                  break;
                case 35:
                  Y = true;
                  break;
                case 36:
                  Y = false;
                  break;
                case 37:
                  V.push(ze);
                  Y = true;
                  break;
                case 38:
                  V.pop();
                  Y = false;
                  break;
                default:
                  if (Ne.T > 0) {
                    V.push(ze);
                  } else if (Ne.T < 0) {
                    V.pop();
                  } else if (!Y || o.WTF && V[V.length - 1] != 37) {
                    throw new Error("Unexpected record 0x" + ze.toString(16));
                  }
              }
            });
            return p;
          }(r, o, p);
        } else {
          return jy(r, o, p);
        }
      }(ut(r, op(V.style)), V.style, Ne, c);
    }
  }
  V.links.map(function (_s) {
    try {
      Pn(vt(r, sn(op(_s))), _s);
      return function L_(r, c, o, p) {
        if (o.slice(-4) === ".bin") {
          return function qf(r, c, o, p) {
            if (!r) {
              return r;
            }
            var _ = p || {};
            var V = false;
            ic(r, function (Te, Ne, ze) {
              switch (ze) {
                case 359:
                case 363:
                case 364:
                case 366:
                case 367:
                case 368:
                case 369:
                case 370:
                case 371:
                case 472:
                case 577:
                case 578:
                case 579:
                case 580:
                case 581:
                case 582:
                case 583:
                case 584:
                case 585:
                case 586:
                case 587:
                  break;
                case 35:
                  V = true;
                  break;
                case 36:
                  V = false;
                  break;
                default:
                  if (!Ne.T && (!V || _.WTF)) {
                    throw new Error("Unexpected record 0x" + ze.toString(16));
                  }
              }
            }, _);
          }(r, 0, 0, p);
        } else {
          return undefined;
        }
      }(ut(r, op(_s)), 0, _s, c);
    } catch {}
  });
  var Ft = function m1(r, c, o) {
    if (c.slice(-4) === ".bin") {
      return function f1(r, c) {
        var o = {
          AppVersion: {},
          WBProps: {},
          WBView: [],
          Sheets: [],
          CalcPr: {},
          xmlns: ""
        };
        var p = [];
        var _ = false;
        c ||= {};
        c.biff = 12;
        var V = [];
        var Y = [[]];
        Y.SheetNames = [];
        Y.XTI = [];
        t0[16] = {
          n: "BrtFRTArchID$",
          f: d1
        };
        ic(r, function (Te, Ne, ze) {
          switch (ze) {
            case 156:
              Y.SheetNames.push(Te.name);
              o.Sheets.push(Te);
              break;
            case 153:
              o.WBProps = Te;
              break;
            case 39:
              if (Te.Sheet != null) {
                c.SID = Te.Sheet;
              }
              Te.Ref = eu(Te.Ptg, 0, null, Y, c);
              delete c.SID;
              delete Te.Ptg;
              V.push(Te);
              break;
            case 1036:
            case 361:
            case 2071:
            case 158:
            case 143:
            case 664:
            case 353:
            case 3072:
            case 3073:
            case 534:
            case 677:
            case 157:
            case 610:
            case 2050:
            case 155:
            case 548:
            case 676:
            case 128:
            case 665:
            case 2128:
            case 2125:
            case 549:
            case 2053:
            case 596:
            case 2076:
            case 2075:
            case 2082:
            case 397:
            case 154:
            case 1117:
            case 553:
            case 2091:
            case 16:
              break;
            case 357:
            case 358:
            case 355:
            case 667:
              if (Y[0].length) {
                Y.push([ze, Te]);
              } else {
                Y[0] = [ze, Te];
              }
              Y[Y.length - 1].XTI = [];
              break;
            case 362:
              if (Y.length === 0) {
                Y[0] = [];
                Y[0].XTI = [];
              }
              Y[Y.length - 1].XTI = Y[Y.length - 1].XTI.concat(Te);
              Y.XTI = Y.XTI.concat(Te);
              break;
            case 35:
            case 37:
              p.push(ze);
              _ = true;
              break;
            case 36:
            case 38:
              p.pop();
              _ = false;
              break;
            default:
              if (!Ne.T && (!_ || c.WTF && p[p.length - 1] != 37 && p[p.length - 1] != 35)) {
                throw new Error("Unexpected record 0x" + ze.toString(16));
              }
          }
        }, c);
        sp(o);
        o.Names = V;
        o.supbooks = Y;
        return o;
      }(r, o);
    } else {
      return function W1(r, c) {
        if (!r) {
          throw new Error("Could not find file");
        }
        var o = {
          AppVersion: {},
          WBProps: {},
          WBView: [],
          Sheets: [],
          CalcPr: {},
          Names: [],
          xmlns: ""
        };
        var p = false;
        var _ = "xmlns";
        var V = {};
        var Y = 0;
        r.replace(Ys, function (Te, Ne) {
          var ze = sr(Te);
          switch (wa(ze[0])) {
            case "<?xml":
            case "</workbook>":
            case "<fileVersion/>":
            case "</fileVersion>":
            case "<fileSharing":
            case "<fileSharing/>":
            case "</workbookPr>":
            case "<workbookProtection":
            case "<workbookProtection/>":
            case "<bookViews":
            case "<bookViews>":
            case "</bookViews>":
            case "</workbookView>":
            case "<sheets":
            case "<sheets>":
            case "</sheets>":
            case "</sheet>":
            case "<functionGroups":
            case "<functionGroups/>":
            case "<functionGroup":
            case "<externalReferences":
            case "</externalReferences>":
            case "<externalReferences>":
            case "<externalReference":
            case "<definedNames/>":
            case "<definedName/>":
            case "</calcPr>":
            case "<oleSize":
            case "<customWorkbookViews>":
            case "</customWorkbookViews>":
            case "<customWorkbookViews":
            case "<customWorkbookView":
            case "</customWorkbookView>":
            case "<pivotCaches>":
            case "</pivotCaches>":
            case "<pivotCaches":
            case "<pivotCache":
            case "<smartTagPr":
            case "<smartTagPr/>":
            case "<smartTagTypes":
            case "<smartTagTypes>":
            case "</smartTagTypes>":
            case "<smartTagType":
            case "<webPublishing":
            case "<webPublishing/>":
            case "<fileRecoveryPr":
            case "<fileRecoveryPr/>":
            case "<webPublishObjects>":
            case "<webPublishObjects":
            case "</webPublishObjects>":
            case "<webPublishObject":
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
            case "<extLst/>":
            case "<ArchID":
            case "<revisionPtr":
              break;
            case "<workbook":
              if (Te.match(l1)) {
                _ = "xmlns" + Te.match(/<(\w+):/)[1];
              }
              o.xmlns = ze[_];
              break;
            case "<fileVersion":
              delete ze[0];
              o.AppVersion = ze;
              break;
            case "<workbookPr":
            case "<workbookPr/>":
              kc.forEach(function (Ft) {
                if (ze[Ft[0]] != null) {
                  switch (Ft[2]) {
                    case "bool":
                      o.WBProps[Ft[0]] = tr(ze[Ft[0]]);
                      break;
                    case "int":
                      o.WBProps[Ft[0]] = parseInt(ze[Ft[0]], 10);
                      break;
                    default:
                      o.WBProps[Ft[0]] = ze[Ft[0]];
                  }
                }
              });
              if (ze.codeName) {
                o.WBProps.CodeName = Ns(ze.codeName);
              }
              break;
            case "<workbookView":
            case "<workbookView/>":
              delete ze[0];
              o.WBView.push(ze);
              break;
            case "<sheet":
              switch (ze.state) {
                case "hidden":
                  ze.Hidden = 1;
                  break;
                case "veryHidden":
                  ze.Hidden = 2;
                  break;
                default:
                  ze.Hidden = 0;
              }
              delete ze.state;
              ze.name = Rr(Ns(ze.name));
              delete ze[0];
              o.Sheets.push(ze);
              break;
            case "<definedNames>":
            case "<definedNames":
            case "<ext":
            case "<AlternateContent":
            case "<AlternateContent>":
              p = true;
              break;
            case "</definedNames>":
            case "</ext>":
            case "</AlternateContent>":
              p = false;
              break;
            case "<definedName":
              (V = {}).Name = Ns(ze.name);
              if (ze.comment) {
                V.Comment = ze.comment;
              }
              if (ze.localSheetId) {
                V.Sheet = +ze.localSheetId;
              }
              if (tr(ze.hidden || "0")) {
                V.Hidden = true;
              }
              Y = Ne + Te.length;
              break;
            case "</definedName>":
              V.Ref = Rr(Ns(r.slice(Y, Ne)));
              o.Names.push(V);
              break;
            case "<calcPr":
            case "<calcPr/>":
              delete ze[0];
              o.CalcPr = ze;
              break;
            default:
              if (!p && c.WTF) {
                throw new Error("unrecognized " + ze[0] + " in workbook");
              }
          }
          return Te;
        });
        if (lr.indexOf(o.xmlns) === -1) {
          throw new Error("Unknown Namespace: " + o.xmlns);
        }
        sp(o);
        return o;
      }(r, o);
    }
  }(ut(r, op(V.workbooks[0])), V.workbooks[0], c);
  var _t = {};
  var Ot = "";
  if (V.coreprops.length) {
    if (Ot = ut(r, op(V.coreprops[0]), true)) {
      _t = _c(Ot);
    }
    if (V.extprops.length !== 0 && (Ot = ut(r, op(V.extprops[0]), true))) {
      (function Zc(r, c, o) {
        var p = {};
        c ||= {};
        r = Ns(r);
        Yc.forEach(function (_) {
          var V = (r.match(ht(_[0])) || [])[1];
          switch (_[2]) {
            case "string":
              if (V) {
                c[_[1]] = Rr(V);
              }
              break;
            case "bool":
              c[_[1]] = V === "true";
              break;
            case "raw":
              var Y = r.match(new RegExp("<" + _[0] + "[^>]*>([\\s\\S]*?)</" + _[0] + ">"));
              if (Y && Y.length > 0) {
                p[_[1]] = Y[1];
              }
          }
        });
        if (p.HeadingPairs && p.TitlesOfParts) {
          qd(p.HeadingPairs, p.TitlesOfParts, c, o);
        }
      })(Ot, _t, c);
    }
  }
  var zt = {};
  if ((!c.bookSheets || c.bookProps) && V.custprops.length !== 0 && (Ot = vt(r, op(V.custprops[0]), true))) {
    zt = function na(r, c) {
      var o = {};
      var p = "";
      var _ = r.match(jl);
      if (_) {
        for (var V = 0; V != _.length; ++V) {
          var Y = _[V];
          var ee = sr(Y);
          switch (wa(ee[0])) {
            case "<?xml":
            case "<Properties":
              break;
            case "<property":
              p = Rr(ee.name);
              break;
            case "</property>":
              p = null;
              break;
            default:
              if (Y.indexOf("<vt:") === 0) {
                var Te = Y.split(">");
                var Ne = Te[0].slice(4);
                var ze = Te[1];
                switch (Ne) {
                  case "lpstr":
                  case "bstr":
                  case "lpwstr":
                  case "cy":
                  case "error":
                    o[p] = Rr(ze);
                    break;
                  case "bool":
                    o[p] = tr(ze);
                    break;
                  case "i1":
                  case "i2":
                  case "i4":
                  case "i8":
                  case "int":
                  case "uint":
                    o[p] = parseInt(ze, 10);
                    break;
                  case "r4":
                  case "r8":
                  case "decimal":
                    o[p] = parseFloat(ze);
                    break;
                  case "filetime":
                  case "date":
                    o[p] = Rs(ze);
                    break;
                  default:
                    if (Ne.slice(-1) == "/") {
                      break;
                    }
                    if (c.WTF && typeof console !== "undefined") {
                      console.warn("Unexpected", Y, Ne, Te);
                    }
                }
              } else if (Y.slice(0, 2) !== "</" && c.WTF) {
                throw new Error(Y);
              }
          }
        }
      }
      return o;
    }(Ot, c);
  }
  var nn = {};
  if ((c.bookSheets || c.bookProps) && (Ft.Sheets ? ee = Ft.Sheets.map(function (ra) {
    return ra.name;
  }) : _t.Worksheets && _t.SheetNames.length > 0 && (ee = _t.SheetNames), c.bookProps && (nn.Props = _t, nn.Custprops = zt), c.bookSheets && typeof ee !== "undefined" && (nn.SheetNames = ee), c.bookSheets ? nn.SheetNames : c.bookProps)) {
    return nn;
  }
  ee = {};
  var Pt = {};
  if (c.bookDeps && V.calcchain) {
    Pt = function b1(r, c, o) {
      if (c.slice(-4) === ".bin") {
        return function Rv(r, c, o) {
          var p = [];
          ic(r, function (Y, ee, Te) {
            if (Te === 63) {
              p.push(Y);
            } else if (!ee.T) {
              throw new Error("Unexpected record 0x" + Te.toString(16));
            }
          });
          return p;
        }(r);
      } else {
        return function Am(r) {
          var c = [];
          if (!r) {
            return c;
          }
          var o = 1;
          (r.match(Ys) || []).forEach(function (p) {
            var _ = sr(p);
            switch (_[0]) {
              case "<?xml":
              case "<calcChain":
              case "<calcChain>":
              case "</calcChain>":
                break;
              case "<c":
                delete _[0];
                if (_.i) {
                  o = _.i;
                } else {
                  _.i = o;
                }
                c.push(_);
            }
          });
          return c;
        }(r);
      }
    }(ut(r, op(V.calcchain)), V.calcchain);
  }
  var un;
  var ai;
  var rn = 0;
  var yn = {};
  var Ni = Ft.Sheets;
  _t.Worksheets = Ni.length;
  _t.SheetNames = [];
  for (var or = 0; or != Ni.length; ++or) {
    _t.SheetNames[or] = Ni[or].name;
  }
  var Ln = Y ? "bin" : "xml";
  var Jn = V.workbooks[0].lastIndexOf("/");
  var yi = (V.workbooks[0].slice(0, Jn + 1) + "_rels/" + V.workbooks[0].slice(Jn + 1) + ".rels").replace(/^\//, "");
  if (!Js(r, yi)) {
    yi = "xl/_rels/workbook." + Ln + ".rels";
  }
  var mi = Pn(vt(r, yi, true), yi.replace(/_rels.*/, "s5s"));
  if ((V.metadata || []).length >= 1) {
    c.xlmeta = function qv(r, c, o) {
      if (c.slice(-4) === ".bin") {
        return function Pv(r, c, o) {
          var p = {
            Types: [],
            Cell: [],
            Value: []
          };
          var _ = o || {};
          var V = [];
          var Y = false;
          var ee = 2;
          ic(r, function (Te, Ne, ze) {
            switch (ze) {
              case 335:
                p.Types.push({
                  name: Te.name
                });
                break;
              case 51:
                Te.forEach(function (Ft) {
                  if (ee == 1) {
                    p.Cell.push({
                      type: p.Types[Ft[0] - 1].name,
                      index: Ft[1]
                    });
                  } else if (ee == 0) {
                    p.Value.push({
                      type: p.Types[Ft[0] - 1].name,
                      index: Ft[1]
                    });
                  }
                });
                break;
              case 337:
                ee = Te ? 1 : 0;
                break;
              case 338:
                ee = 2;
                break;
              case 35:
                V.push(ze);
                Y = true;
                break;
              case 36:
                V.pop();
                Y = false;
                break;
              default:
                if (!Ne.T && (!Y || _.WTF && V[V.length - 1] != 35)) {
                  throw new Error("Unexpected record 0x" + ze.toString(16));
                }
            }
          });
          return p;
        }(r, 0, o);
      } else {
        return function jh(r, c, o) {
          var p = {
            Types: [],
            Cell: [],
            Value: []
          };
          if (!r) {
            return p;
          }
          var Y;
          var _ = false;
          var V = 2;
          r.replace(Ys, function (ee) {
            var Te = sr(ee);
            switch (wa(Te[0])) {
              case "<?xml":
              case "<metadata":
              case "</metadata>":
              case "<metadataTypes":
              case "</metadataTypes>":
              case "</metadataType>":
              case "</futureMetadata>":
              case "<bk>":
              case "</bk>":
              case "</rc>":
              case "<extLst":
              case "<extLst>":
              case "</extLst>":
              case "<extLst/>":
                break;
              case "<metadataType":
                p.Types.push({
                  name: Te.name
                });
                break;
              case "<futureMetadata":
                for (var Ne = 0; Ne < p.Types.length; ++Ne) {
                  if (p.Types[Ne].name == Te.name) {
                    Y = p.Types[Ne];
                  }
                }
                break;
              case "<rc":
                if (V == 1) {
                  p.Cell.push({
                    type: p.Types[Te.t - 1].name,
                    index: +Te.v
                  });
                } else if (V == 0) {
                  p.Value.push({
                    type: p.Types[Te.t - 1].name,
                    index: +Te.v
                  });
                }
                break;
              case "<cellMetadata":
                V = 1;
                break;
              case "</cellMetadata>":
              case "</valueMetadata>":
                V = 2;
                break;
              case "<valueMetadata":
                V = 0;
                break;
              case "<ext":
                _ = true;
                break;
              case "</ext>":
                _ = false;
                break;
              case "<rvb":
                if (!Y) {
                  break;
                }
                Y.offsets ||= [];
                Y.offsets.push(+Te.i);
                break;
              default:
                if (!_ && o?.WTF) {
                  throw new Error("unrecognized " + Te[0] + " in metadata");
                }
            }
            return ee;
          });
          return p;
        }(r, 0, o);
      }
    }(ut(r, op(V.metadata[0])), V.metadata[0], c);
  }
  if ((V.people || []).length >= 1) {
    c.people = function Kd(r, c) {
      var o = [];
      var p = false;
      r.replace(Ys, function (V) {
        var Y = sr(V);
        switch (wa(Y[0])) {
          case "<?xml":
          case "<personList":
          case "</personList>":
          case "</person>":
          case "<extLst":
          case "<extLst>":
          case "</extLst>":
          case "<extLst/>":
            break;
          case "<person":
            o.push({
              name: Y.displayname,
              id: Y.id
            });
            break;
          case "<ext":
            p = true;
            break;
          case "</ext>":
            p = false;
            break;
          default:
            if (!p && c.WTF) {
              throw new Error("unrecognized " + Y[0] + " in threaded comments");
            }
        }
        return V;
      });
      return o;
    }(ut(r, op(V.people[0])), c);
  }
  mi &&= function nb(r, c) {
    if (!r) {
      return 0;
    }
    try {
      r = c.map(function (p) {
        p.id ||= p.strRelID;
        return [p.name, r["!id"][p.id].Target, Y_(r["!id"][p.id].Type)];
      });
    } catch {
      return null;
    }
    if (r && r.length !== 0) {
      return r;
    } else {
      return null;
    }
  }(mi, Ft.Sheets);
  var Fi = ut(r, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (rn = 0; rn != _t.Worksheets; ++rn) {
    var ji = "sheet";
    if (mi && mi[rn]) {
      un = "xl/" + mi[rn][1].replace(/[\/]?xl\//, "");
      if (!Js(r, un)) {
        un = mi[rn][1];
      }
      if (!Js(r, un)) {
        un = yi.replace(/_rels\/.*$/, "") + mi[rn][1];
      }
      ji = mi[rn][2];
    } else {
      un = (un = "xl/worksheets/sheet" + (rn + 1 - Fi) + "." + Ln).replace(/sheet0\./, "sheet.");
    }
    ai = un.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
    if (c && c.sheets != null) {
      switch (typeof c.sheets) {
        case "number":
          if (rn != c.sheets) {
            continue e;
          }
          break;
        case "string":
          if (_t.SheetNames[rn].toLowerCase() != c.sheets.toLowerCase()) {
            continue e;
          }
          break;
        default:
          if (Array.isArray && Array.isArray(c.sheets)) {
            for (var Dr = false, yo = 0; yo != c.sheets.length; ++yo) {
              if (typeof c.sheets[yo] == "number" && c.sheets[yo] == rn) {
                Dr = 1;
              }
              if (typeof c.sheets[yo] == "string" && c.sheets[yo].toLowerCase() == _t.SheetNames[rn].toLowerCase()) {
                Dr = 1;
              }
            }
            if (!Dr) {
              continue e;
            }
          }
      }
    }
    rb(r, un, ai, _t.SheetNames[rn], rn, yn, ee, ji, c, Ft, Ne, ze);
  }
  nn = {
    Directory: V,
    Workbook: Ft,
    Props: _t,
    Custprops: zt,
    Deps: Pt,
    Sheets: ee,
    SheetNames: _t.SheetNames,
    Strings: qh,
    Styles: ze,
    Themes: Ne,
    SSF: Vs(Kt)
  };
  if (c && c.bookFiles) {
    if (r.files) {
      nn.keys = _;
      nn.files = r.files;
    } else {
      nn.keys = [];
      nn.files = {};
      r.FullPaths.forEach(function (_s, ra) {
        _s = _s.replace(/^Root Entry[\/]/, "");
        nn.keys.push(_s);
        nn.files[_s] = r.FileIndex[ra];
      });
    }
  }
  if (c && c.bookVBA) {
    if (V.vba.length > 0) {
      nn.vbaraw = ut(r, op(V.vba[0]), true);
    } else if (V.defaults && V.defaults.bin === "application/vnd.ms-office.vbaProject") {
      nn.vbaraw = ut(r, "xl/vbaProject.bin", true);
    }
  }
  nn.bookType = Y ? "xlsb" : "xlsx";
  return nn;
}
function sb(r, c) {
  var o = c || {};
  var p = "Workbook";
  var _ = Fr.find(r, p);
  try {
    if (!(_ = Fr.find(r, p = "/!DataSpaces/Version")) || !_.content) {
      throw new Error("ECMA-376 Encrypted file missing " + p);
    }
    (function cy(r) {
      var c = {};
      c.id = r.read_shift(0, "lpp4");
      c.R = nf(r, 4);
      c.U = nf(r, 4);
      c.W = nf(r, 4);
    })(_.content);
    if (!(_ = Fr.find(r, p = "/!DataSpaces/DataSpaceMap")) || !_.content) {
      throw new Error("ECMA-376 Encrypted file missing " + p);
    }
    var V = function Na(r) {
      var c = [];
      r.l += 4;
      for (var o = r.read_shift(4); o-- > 0;) {
        c.push(pv(r));
      }
      return c;
    }(_.content);
    if (V.length !== 1 || V[0].comps.length !== 1 || V[0].comps[0].t !== 0 || V[0].name !== "StrongEncryptionDataSpace" || V[0].comps[0].v !== "EncryptedPackage") {
      throw new Error("ECMA-376 Encrypted file bad " + p);
    }
    if (!(_ = Fr.find(r, p = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace")) || !_.content) {
      throw new Error("ECMA-376 Encrypted file missing " + p);
    }
    var Y = function rf(r) {
      var c = [];
      r.l += 4;
      for (var o = r.read_shift(4); o-- > 0;) {
        c.push(r.read_shift(0, "lpp4"));
      }
      return c;
    }(_.content);
    if (Y.length != 1 || Y[0] != "StrongEncryptionTransform") {
      throw new Error("ECMA-376 Encrypted file bad " + p);
    }
    if (!(_ = Fr.find(r, p = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary")) || !_.content) {
      throw new Error("ECMA-376 Encrypted file missing " + p);
    }
    (function gv(r) {
      var c = function sm(r) {
        var c = {};
        r.read_shift(4);
        r.l += 4;
        c.id = r.read_shift(0, "lpp4");
        c.name = r.read_shift(0, "lpp4");
        c.R = nf(r, 4);
        c.U = nf(r, 4);
        c.W = nf(r, 4);
        return c;
      }(r);
      c.ename = r.read_shift(0, "8lpp4");
      c.blksz = r.read_shift(4);
      c.cmode = r.read_shift(4);
      if (r.read_shift(4) != 4) {
        throw new Error("Bad !Primary record");
      }
      return c;
    })(_.content);
  } catch {}
  if (!(_ = Fr.find(r, p = "/EncryptionInfo")) || !_.content) {
    throw new Error("ECMA-376 Encrypted file missing " + p);
  }
  var ee = function bp(r) {
    var c = nf(r);
    switch (c.Minor) {
      case 2:
        return [c.Minor, yh(r)];
      case 3:
        return [c.Minor, om()];
      case 4:
        return [c.Minor, w0(r)];
    }
    throw new Error("ECMA-376 Encrypted file unrecognized Version: " + c.Minor);
  }(_.content);
  if (!(_ = Fr.find(r, p = "/EncryptedPackage")) || !_.content) {
    throw new Error("ECMA-376 Encrypted file missing " + p);
  }
  if (ee[0] == 4 && typeof decrypt_agile !== "undefined") {
    return decrypt_agile(ee[1], _.content, o.password || "", o);
  }
  if (ee[0] == 2 && typeof decrypt_std76 !== "undefined") {
    return decrypt_std76(ee[1], _.content, o.password || "", o);
  }
  throw new Error("File is password-protected");
}
function aA(r, c) {
  if (r && !r.SSF) {
    r.SSF = Vs(Kt);
  }
  if (r && r.SSF) {
    Ko();
    ya(r.SSF);
    c.revssf = Ca(r.SSF);
    c.revssf[r.SSF[65535]] = 0;
    c.ssf = r.SSF;
  }
  c.rels = {};
  c.wbrels = {};
  c.Strings = [];
  c.Strings.Count = 0;
  c.Strings.Unique = 0;
  if (Gv) {
    c.revStrings = new Map();
  } else {
    c.revStrings = {};
    c.revStrings.foo = [];
    delete c.revStrings.foo;
  }
  var o = "xml";
  var p = Cm.indexOf(c.bookType) > -1;
  var _ = {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
  aE(c = c || {});
  var V = li();
  var Y = "";
  var ee = 0;
  c.cellXfs = [];
  Pg(c.cellXfs, {}, {
    revssf: {
      General: 0
    }
  });
  r.Props ||= {};
  Zn(V, Y = "docProps/core.xml", Wl(r.Props, c));
  _.coreprops.push(Y);
  Hi(c.rels, 2, Y, nt.CORE_PROPS);
  Y = "docProps/app.xml";
  if (!r.Props || !r.Props.SheetNames) {
    if (r.Workbook && r.Workbook.Sheets) {
      for (var Te = [], Ne = 0; Ne < r.SheetNames.length; ++Ne) {
        if ((r.Workbook.Sheets[Ne] || {}).Hidden != 2) {
          Te.push(r.SheetNames[Ne]);
        }
      }
      r.Props.SheetNames = Te;
    } else {
      r.Props.SheetNames = r.SheetNames;
    }
  }
  r.Props.Worksheets = r.Props.SheetNames.length;
  Zn(V, Y, Tc(r.Props));
  _.extprops.push(Y);
  Hi(c.rels, 3, Y, nt.EXT_PROPS);
  if (r.Custprops !== r.Props && qs(r.Custprops || {}).length > 0) {
    Zn(V, Y = "docProps/custom.xml", rd(r.Custprops));
    _.custprops.push(Y);
    Hi(c.rels, 4, Y, nt.CUST_PROPS);
  }
  var ze = ["SheetJ5"];
  c.tcid = 0;
  ee = 1;
  for (; ee <= r.SheetNames.length; ++ee) {
    var Ft = {
      "!id": {}
    };
    var _t = r.Sheets[r.SheetNames[ee - 1]];
    Zn(V, Y = "xl/worksheets/sheet" + ee + "." + o, T(ee - 1, c, r, Ft));
    _.sheets.push(Y);
    Hi(c.wbrels, -1, "worksheets/sheet" + ee + "." + o, nt.WS[0]);
    if (_t) {
      var zt = _t["!comments"];
      var nn = false;
      var Pt = "";
      if (zt && zt.length > 0) {
        var rn = false;
        zt.forEach(function (yn) {
          yn[1].forEach(function (un) {
            if (un.T == 1) {
              rn = true;
            }
          });
        });
        if (rn) {
          Zn(V, Pt = "xl/threadedComments/threadedComment" + ee + ".xml", Ch(zt, ze, c));
          _.threadedcomments.push(Pt);
          Hi(Ft, -1, "../threadedComments/threadedComment" + ee + ".xml", nt.TCMNT);
        }
        Zn(V, Pt = "xl/comments" + ee + "." + o, mg(zt));
        _.comments.push(Pt);
        Hi(Ft, -1, "../comments" + ee + "." + o, nt.CMNT);
        nn = true;
      }
      if (_t["!legacy"] && nn) {
        Zn(V, "xl/drawings/vmlDrawing" + ee + ".vml", xh(ee, _t["!comments"]));
      }
      delete _t["!comments"];
      delete _t["!legacy"];
    }
    if (Ft["!id"].rId1) {
      Zn(V, sn(Y), Ei(Ft));
    }
  }
  if (c.Strings != null && c.Strings.length > 0) {
    Zn(V, Y = "xl/sharedStrings." + o, function ua(r, c) {
      if (!c.bookSST) {
        return "";
      }
      var o = [nr];
      o[o.length] = wt("sst", null, {
        xmlns: lr[0],
        count: r.Count,
        uniqueCount: r.Unique
      });
      for (var p = 0; p != r.length; ++p) {
        if (r[p] != null) {
          var _ = r[p];
          var V = "<si>";
          if (_.r) {
            V += _.r;
          } else {
            V += "<t";
            _.t ||= "";
            if (typeof _.t != "string") {
              _.t = String(_.t);
            }
            if (_.t.match(C0)) {
              V += " xml:space=\"preserve\"";
            }
            V += ">" + Mr(_.t) + "</t>";
          }
          o[o.length] = V += "</si>";
        }
      }
      if (o.length > 2) {
        o[o.length] = "</sst>";
        o[1] = o[1].replace("/>", ">");
      }
      return o.join("");
    }(c.Strings, c));
    _.strs.push(Y);
    Hi(c.wbrels, -1, "sharedStrings." + o, nt.SST);
  }
  Zn(V, Y = "xl/workbook." + o, function c1(r) {
    var c = [nr];
    c[c.length] = wt("workbook", null, {
      xmlns: lr[0],
      "xmlns:r": pi_r
    });
    var o = r.Workbook && (r.Workbook.Names || []).length > 0;
    var p = {
      codeName: "ThisWorkbook"
    };
    if (r.Workbook && r.Workbook.WBProps) {
      kc.forEach(function (ee) {
        if (r.Workbook.WBProps[ee[0]] != null && r.Workbook.WBProps[ee[0]] != ee[1]) {
          p[ee[0]] = r.Workbook.WBProps[ee[0]];
        }
      });
      if (r.Workbook.WBProps.CodeName) {
        p.codeName = r.Workbook.WBProps.CodeName;
        delete p.CodeName;
      }
    }
    c[c.length] = wt("workbookPr", null, p);
    var _ = r.Workbook && r.Workbook.Sheets || [];
    var V = 0;
    if (_ && _[0] && _[0].Hidden) {
      c[c.length] = "<bookViews>";
      V = 0;
      for (; V != r.SheetNames.length && _[V] && _[V].Hidden; ++V);
      if (V == r.SheetNames.length) {
        V = 0;
      }
      c[c.length] = "<workbookView firstSheet=\"" + V + "\" activeTab=\"" + V + "\"/>";
      c[c.length] = "</bookViews>";
    }
    c[c.length] = "<sheets>";
    V = 0;
    for (; V != r.SheetNames.length; ++V) {
      var Y = {
        name: Mr(r.SheetNames[V].slice(0, 31))
      };
      Y.sheetId = "" + (V + 1);
      Y["r:id"] = "rId" + (V + 1);
      if (_[V]) {
        switch (_[V].Hidden) {
          case 1:
            Y.state = "hidden";
            break;
          case 2:
            Y.state = "veryHidden";
        }
      }
      c[c.length] = wt("sheet", null, Y);
    }
    c[c.length] = "</sheets>";
    if (o) {
      c[c.length] = "<definedNames>";
      if (r.Workbook && r.Workbook.Names) {
        r.Workbook.Names.forEach(function (ee) {
          var Te = {
            name: ee.Name
          };
          if (ee.Comment) {
            Te.comment = ee.Comment;
          }
          if (ee.Sheet != null) {
            Te.localSheetId = "" + ee.Sheet;
          }
          if (ee.Hidden) {
            Te.hidden = "1";
          }
          if (ee.Ref) {
            c[c.length] = wt("definedName", Mr(ee.Ref), Te);
          }
        });
      }
      c[c.length] = "</definedNames>";
    }
    if (c.length > 2) {
      c[c.length] = "</workbook>";
      c[1] = c[1].replace("/>", ">");
    }
    return c.join("");
  }(r));
  _.workbooks.push(Y);
  Hi(c.rels, 1, Y, nt.WB);
  Zn(V, Y = "xl/theme/theme1.xml", pg(r.Themes, c));
  _.themes.push(Y);
  Hi(c.wbrels, -1, "theme/theme1.xml", nt.THEME);
  Zn(V, Y = "xl/styles." + o, function Wh(r, c) {
    var p;
    var o = [nr, wt("styleSheet", null, {
      xmlns: lr[0],
      "xmlns:vt": pi_vt
    })];
    if (r.SSF && (p = function bv(r) {
      var c = ["<numFmts>"];
      [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (o) {
        for (var p = o[0]; p <= o[1]; ++p) {
          if (r[p] != null) {
            c[c.length] = wt("numFmt", null, {
              numFmtId: p,
              formatCode: Mr(r[p])
            });
          }
        }
      });
      if (c.length === 1) {
        return "";
      } else {
        c[c.length] = "</numFmts>";
        c[0] = wt("numFmts", null, {
          count: c.length - 2
        }).replace("/>", ">");
        return c.join("");
      }
    }(r.SSF)) != null) {
      o[o.length] = p;
    }
    o[o.length] = "<fonts count=\"1\"><font><sz val=\"12\"/><color theme=\"1\"/><name val=\"Calibri\"/><family val=\"2\"/><scheme val=\"minor\"/></font></fonts>";
    o[o.length] = "<fills count=\"2\"><fill><patternFill patternType=\"none\"/></fill><fill><patternFill patternType=\"gray125\"/></fill></fills>";
    o[o.length] = "<borders count=\"1\"><border><left/><right/><top/><bottom/><diagonal/></border></borders>";
    o[o.length] = "<cellStyleXfs count=\"1\"><xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\"/></cellStyleXfs>";
    if (p = function Hh(r) {
      var c = [];
      c[c.length] = wt("cellXfs", null);
      r.forEach(function (o) {
        c[c.length] = wt("xf", null, o);
      });
      c[c.length] = "</cellXfs>";
      if (c.length === 2) {
        return "";
      } else {
        c[0] = wt("cellXfs", null, {
          count: c.length - 2
        }).replace("/>", ">");
        return c.join("");
      }
    }(c.cellXfs)) {
      o[o.length] = p;
    }
    o[o.length] = "<cellStyles count=\"1\"><cellStyle name=\"Normal\" xfId=\"0\" builtinId=\"0\"/></cellStyles>";
    o[o.length] = "<dxfs count=\"0\"/>";
    o[o.length] = "<tableStyles count=\"0\" defaultTableStyle=\"TableStyleMedium9\" defaultPivotStyle=\"PivotStyleMedium4\"/>";
    if (o.length > 2) {
      o[o.length] = "</styleSheet>";
      o[1] = o[1].replace("/>", ">");
    }
    return o.join("");
  }(r, c));
  _.styles.push(Y);
  Hi(c.wbrels, -1, "styles." + o, nt.STY);
  if (r.vbaraw && p) {
    Zn(V, Y = "xl/vbaProject.bin", r.vbaraw);
    _.vba.push(Y);
    Hi(c.wbrels, -1, "vbaProject.bin", nt.VBA);
  }
  Zn(V, Y = "xl/metadata." + o, function Xf() {
    var r = [nr];
    r.push("<metadata xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:xlrd=\"http://schemas.microsoft.com/office/spreadsheetml/2017/richdata\" xmlns:xda=\"http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray\">\n  <metadataTypes count=\"1\">\n    <metadataType name=\"XLDAPR\" minSupportedVersion=\"120000\" copy=\"1\" pasteAll=\"1\" pasteValues=\"1\" merge=\"1\" splitFirst=\"1\" rowColShift=\"1\" clearFormats=\"1\" clearComments=\"1\" assign=\"1\" coerce=\"1\" cellMeta=\"1\"/>\n  </metadataTypes>\n  <futureMetadata name=\"XLDAPR\" count=\"1\">\n    <bk>\n      <extLst>\n        <ext uri=\"{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}\">\n          <xda:dynamicArrayProperties fDynamic=\"1\" fCollapsed=\"0\"/>\n        </ext>\n      </extLst>\n    </bk>\n  </futureMetadata>\n  <cellMetadata count=\"1\">\n    <bk>\n      <rc t=\"1\" v=\"0\"/>\n    </bk>\n  </cellMetadata>\n</metadata>");
    return r.join("");
  }());
  _.metadata.push(Y);
  Hi(c.wbrels, -1, "metadata." + o, nt.XLMETA);
  if (ze.length > 1) {
    Zn(V, Y = "xl/persons/person.xml", Cp(ze));
    _.people.push(Y);
    Hi(c.wbrels, -1, "persons/person.xml", nt.PEOPLE);
  }
  Zn(V, "[Content_Types].xml", ce(_, c));
  Zn(V, "_rels/.rels", Ei(c.rels));
  Zn(V, "xl/_rels/workbook.xml.rels", Ei(c.wbrels));
  delete c.revssf;
  delete c.ssf;
  return V;
}
function R1(r, c) {
  var o = "";
  switch ((c || {}).type || "base64") {
    case "buffer":
    case "array":
      return [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]];
    case "base64":
      o = Ee(r.slice(0, 12));
      break;
    case "binary":
      o = r;
      break;
    default:
      throw new Error("Unrecognized type " + (c && c.type || "undefined"));
  }
  return [o.charCodeAt(0), o.charCodeAt(1), o.charCodeAt(2), o.charCodeAt(3), o.charCodeAt(4), o.charCodeAt(5), o.charCodeAt(6), o.charCodeAt(7)];
}
function cE(r, c) {
  var o = 0;
  e: for (; o < r.length;) {
    switch (r.charCodeAt(o)) {
      case 10:
      case 13:
      case 32:
        ++o;
        break;
      case 60:
        return Ci(r.slice(o), c);
      default:
        break e;
    }
  }
  return Xo.to_workbook(r, c);
}
function G_(r, c, o, p) {
  if (p) {
    o.type = "string";
    return Xo.to_workbook(r, o);
  } else {
    return Xo.to_workbook(c, o);
  }
}
function Lf(r, c) {
  G();
  var o = c || {};
  if (o.codepage) {
    console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results");
  }
  if (typeof ArrayBuffer !== "undefined" && r instanceof ArrayBuffer) {
    return Lf(new Uint8Array(r), ((o = Vs(o)).type = "array", o));
  }
  if (typeof Uint8Array !== "undefined" && r instanceof Uint8Array && !o.type) {
    o.type = typeof Deno !== "undefined" ? "buffer" : "array";
  }
  var _;
  var p = r;
  var V = false;
  if (o.cellStyles) {
    o.cellNF = true;
    o.sheetStubs = true;
  }
  Og = {};
  if (o.dateNF) {
    Og.dateNF = o.dateNF;
  }
  o.type ||= ke && Buffer.isBuffer(r) ? "buffer" : "base64";
  if (o.type == "file") {
    o.type = ke ? "buffer" : "binary";
    p = function dl(r) {
      if (typeof Deno !== "undefined") {
        return Deno.readFileSync(r);
      }
      if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") {
        try {
          var c = File(r);
          c.open("r");
          c.encoding = "binary";
          var o = c.read();
          c.close();
          return o;
        } catch (p) {
          if (!p.message || !p.message.match(/onstruct/)) {
            throw p;
          }
        }
      }
      throw new Error("Cannot access file " + r);
    }(r);
    if (typeof Uint8Array !== "undefined" && !ke) {
      o.type = "array";
    }
  }
  if (o.type == "string") {
    V = true;
    o.type = "binary";
    o.codepage = 65001;
    p = function cA(r) {
      if (r.match(/[^\x00-\x7F]/)) {
        return ys(r);
      } else {
        return r;
      }
    }(r);
  }
  if (o.type == "array" && typeof Uint8Array !== "undefined" && r instanceof Uint8Array && typeof ArrayBuffer !== "undefined") {
    var Y = new ArrayBuffer(3);
    var ee = new Uint8Array(Y);
    ee.foo = "bar";
    if (!ee.foo) {
      (o = Vs(o)).type = "array";
      return Lf(et(p), o);
    }
  }
  switch ((_ = R1(p, o))[0]) {
    case 208:
      if (_[1] === 207 && _[2] === 17 && _[3] === 224 && _[4] === 161 && _[5] === 177 && _[6] === 26 && _[7] === 225) {
        return function ob(r, c) {
          if (Fr.find(r, "EncryptedPackage")) {
            return sb(r, c);
          } else {
            return x1(r, c);
          }
        }(Fr.read(p, o), o);
      }
      break;
    case 9:
      if (_[1] <= 8) {
        return x1(p, o);
      }
      break;
    case 60:
      return Ci(p, o);
    case 73:
      if (_[1] === 73 && _[2] === 42 && _[3] === 0) {
        throw new Error("TIFF Image File is not a spreadsheet");
      }
      if (_[1] === 68) {
        return function dv(r, c) {
          var o = c || {};
          var p = !!o.WTF;
          o.WTF = true;
          try {
            var _ = Gf.to_workbook(r, o);
            o.WTF = p;
            return _;
          } catch (V) {
            o.WTF = p;
            if (!V.message.match(/SYLK bad record ID/) && p) {
              throw V;
            }
            return Xo.to_workbook(r, c);
          }
        }(p, o);
      }
      break;
    case 84:
      if (_[1] === 65 && _[2] === 66 && _[3] === 76) {
        return eg.to_workbook(p, o);
      }
      break;
    case 80:
      if (_[1] === 75 && _[2] < 9 && _[3] < 9) {
        return function ab(r, c) {
          var p = r;
          var _ = c || {};
          _.type ||= ke && Buffer.isBuffer(r) ? "buffer" : "base64";
          return lE(Oi(p, _), _);
        }(p, o);
      } else {
        return G_(r, p, o, V);
      }
    case 239:
      if (_[3] === 60) {
        return Ci(p, o);
      } else {
        return G_(r, p, o, V);
      }
    case 255:
      if (_[1] === 254) {
        return function Z_(r, c) {
          var o = r;
          if (c.type == "base64") {
            o = Ee(o);
          }
          if (typeof ArrayBuffer !== "undefined" && r instanceof ArrayBuffer) {
            o = new Uint8Array(r);
          }
          o = ke && Buffer.isBuffer(r) ? r.slice(2).toString("utf16le") : typeof Uint8Array !== "undefined" && o instanceof Uint8Array ? typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le").decode(o.slice(2)) : function Pe(r) {
            for (var c = [], o = 0; o < r.length >> 1; ++o) {
              c[o] = String.fromCharCode(r[o * 2] + (r[o * 2 + 1] << 8));
            }
            return c.join("");
          }(o.slice(2)) : W(o.slice(2));
          c.type = "binary";
          return cE(o, c);
        }(p, o);
      }
      if (_[1] === 0 && _[2] === 2 && _[3] === 0) {
        return zf.to_workbook(p, o);
      }
      break;
    case 0:
      if (_[1] === 0 && (_[2] >= 2 && _[3] === 0 || _[2] === 0 && (_[3] === 8 || _[3] === 9))) {
        return zf.to_workbook(p, o);
      }
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Mu.to_workbook(p, o);
    case 123:
      if (_[1] === 92 && _[2] === 114 && _[3] === 116) {
        return function Vh(r, c) {
          var o = cc(function yv(r, c) {
            switch (c.type) {
              case "base64":
                return um(Ee(r), c);
              case "binary":
                return um(r, c);
              case "buffer":
                return um(ke && Buffer.isBuffer(r) ? r.toString("binary") : Et(r), c);
              case "array":
                return um(eo(r), c);
            }
            throw new Error("Unrecognized type " + c.type);
          }(r, c), c);
          o.bookType = "rtf";
          return o;
        }(p, o);
      }
      break;
    case 10:
    case 13:
    case 32:
      return function lA(r, c) {
        var o = "";
        var p = R1(r, c);
        switch (c.type) {
          case "base64":
            o = Ee(r);
            break;
          case "binary":
            o = r;
            break;
          case "buffer":
            o = r.toString("binary");
            break;
          case "array":
            o = eo(r);
            break;
          default:
            throw new Error("Unrecognized type " + c.type);
        }
        if (p[0] == 239 && p[1] == 187 && p[2] == 191) {
          o = Ns(o);
        }
        c.type = "binary";
        return cE(o, c);
      }(p, o);
    case 137:
      if (_[1] === 80 && _[2] === 78 && _[3] === 71) {
        throw new Error("PNG Image File is not a spreadsheet");
      }
      break;
    case 8:
      if (_[1] === 231) {
        throw new Error("Unsupported Multiplan 1.x file!");
      }
      break;
    case 12:
      if (_[1] === 236) {
        throw new Error("Unsupported Multiplan 2.x file!");
      }
      if (_[1] === 237) {
        throw new Error("Unsupported Multiplan 3.x file!");
      }
  }
  if (vh.indexOf(_[0]) > -1 && _[2] <= 12 && _[3] <= 31) {
    return Mu.to_workbook(p, o);
  } else {
    return G_(r, p, o, V);
  }
}
function z_(r, c) {
  switch (c.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      c.type = "";
      break;
    case "file":
      return Po(c.file, Fr.write(r, {
        type: ke ? "buffer" : ""
      }));
    case "string":
      throw new Error("'string' output type invalid for '" + c.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + c.type);
  }
  return Fr.write(r, c);
}
function K_(r, c) {
  switch (c.bookType) {
    case "ods":
      return HE(r, c);
    case "numbers":
      return function rx(r, c) {
        if (!c || !c.numbers) {
          throw new Error("Must pass a `numbers` option -- check the README");
        }
        var o = Fr.read(c.numbers, {
          type: "base64"
        });
        var p = function JE(r) {
          var c = {};
          var o = [];
          r.FileIndex.map(function (p, _) {
            return [p, r.FullPaths[_]];
          }).forEach(function (p) {
            var _ = p[0];
            var V = p[1];
            if (_.type == 2) {
              if (!!_.name.match(/\.iwa/)) {
                if (_.content[0] == 0) {
                  By(Vy(_.content)).forEach(function (Y) {
                    o.push(Y.id);
                    c[Y.id] = {
                      deps: [],
                      location: V,
                      type: Nl(Y.messages[0].meta[1][0].data)
                    };
                  });
                }
              }
            }
          });
          r.FileIndex.forEach(function (p) {
            if (!!p.name.match(/\.iwa/)) {
              if (p.content[0] == 0) {
                By(Vy(p.content)).forEach(function (_) {
                  _.messages.forEach(function (V) {
                    [5, 6].forEach(function (Y) {
                      if (!!V.meta[Y]) {
                        V.meta[Y].forEach(function (ee) {
                          c[_.id].deps.push(Nl(ee.data));
                        });
                      }
                    });
                  });
                });
              }
            }
          });
          return c;
        }(o);
        var _ = Hm(o, p, 1);
        if (_ == null) {
          throw `Could not find message ${1} in Numbers template`;
        }
        var V = Uy(Ws(_.messages[0].data)[1], Yl);
        if (V.length > 1) {
          throw new Error("Template NUMBERS file must have exactly one sheet");
        }
        r.SheetNames.forEach(function (Y, ee) {
          if (ee >= 1) {
            (function qE(r, c, o) {
              var p = -1;
              var _ = -1;
              var V = {};
              zc(r, c, 1, function (Te, Ne) {
                var ze = Ws(Te.messages[0].data);
                p = Yl(Ws(Te.messages[0].data)[1][0].data);
                _ = o0({
                  deps: [1],
                  location: c[p].location,
                  type: 2
                }, c);
                V[p] = _;
                $d(Te, _);
                ze[1].push({
                  type: 2,
                  data: gf(_)
                });
                var Ft = Hm(r, c, p);
                Ft.id = _;
                if (c[1].location == c[_].location) {
                  Ne.push(Ft);
                } else {
                  zc(r, c, _, function (_t, Ot) {
                    return Ot.push(Ft);
                  });
                }
                Te.messages[0].data = da(ze);
              });
              var Y = -1;
              zc(r, c, _, function (Te, Ne) {
                for (var ze = Ws(Te.messages[0].data), Ft = 3; Ft <= 69; ++Ft) {
                  delete ze[Ft];
                }
                var _t = Uy(ze[2], Yl);
                _t.forEach(function (zt) {
                  return r0(Te, zt);
                });
                Y = o0({
                  deps: [_],
                  location: c[_t[0]].location,
                  type: c[_t[0]].type
                }, c);
                $d(Te, Y);
                V[_t[0]] = Y;
                ze[2] = [{
                  type: 2,
                  data: gf(Y)
                }];
                var Ot = Hm(r, c, _t[0]);
                Ot.id = Y;
                if (c[_t[0]].location == c[_].location) {
                  Ne.push(Ot);
                } else {
                  zc(r, c, 2, function (zt) {
                    var nn = Ws(zt.messages[0].data);
                    oh(nn, c, _, Y);
                    zt.messages[0].data = da(nn);
                  });
                  zc(r, c, Y, function (zt, nn) {
                    return nn.push(Ot);
                  });
                }
                Te.messages[0].data = da(ze);
              });
              var ee = -1;
              zc(r, c, Y, function (Te, Ne) {
                for (var ze = Ws(Te.messages[0].data), Ft = Ws(ze[1][0].data), _t = 3; _t <= 69; ++_t) {
                  delete Ft[_t];
                }
                var Ot = Yl(Ft[2][0].data);
                Ft[2][0].data = gf(V[Ot]);
                ze[1][0].data = da(Ft);
                var zt = Yl(ze[2][0].data);
                r0(Te, zt);
                $d(Te, ee = o0({
                  deps: [Y],
                  location: c[zt].location,
                  type: c[zt].type
                }, c));
                V[zt] = ee;
                ze[2][0].data = gf(ee);
                var nn = Hm(r, c, zt);
                nn.id = ee;
                if (c[Y].location == c[ee].location) {
                  Ne.push(nn);
                } else {
                  zc(r, c, ee, function (Pt, rn) {
                    return rn.push(nn);
                  });
                }
                Te.messages[0].data = da(ze);
              });
              zc(r, c, ee, function (Te, Ne) {
                var ze;
                var Ft;
                var _t = Ws(Te.messages[0].data);
                var zt = Vg(_t[1][0].data).replace(/-[A-Z0-9]*/, `-${("0000" + o.toString(16)).slice(-4)}`);
                _t[1][0].data = sh(zt);
                [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function (Ni) {
                  return delete _t[Ni];
                });
                if (_t[45]) {
                  var Pt = Yl(Ws(_t[45][0].data)[1][0].data);
                  r0(Te, Pt);
                  delete _t[45];
                }
                if (_t[70]) {
                  if ((ze = Ws(_t[70][0].data)[2]) != null) {
                    ze.forEach(function (Ni) {
                      var or = Ws(Ni.data);
                      [2, 3].map(function (Ln) {
                        return or[Ln][0];
                      }).forEach(function (Ln) {
                        var Jn = Ws(Ln.data);
                        if (Jn[8]) {
                          var yi = Yl(Jn[8][0].data);
                          r0(Te, yi);
                        }
                      });
                    });
                  }
                  delete _t[70];
                }
                [46, 30, 34, 35, 36, 38, 48, 49, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89].forEach(function (Ni) {
                  if (_t[Ni]) {
                    var or = Yl(_t[Ni][0].data);
                    delete _t[Ni];
                    r0(Te, or);
                  }
                });
                var yn = Ws(_t[4][0].data);
                [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function (Ni) {
                  var or;
                  if ((or = yn[Ni]) != null && or[0]) {
                    var Ln = Yl(yn[Ni][0].data);
                    var Jn = o0({
                      deps: [ee],
                      location: c[Ln].location,
                      type: c[Ln].type
                    }, c);
                    r0(Te, Ln);
                    $d(Te, Jn);
                    V[Ln] = Jn;
                    var yi = Hm(r, c, Ln);
                    yi.id = Jn;
                    if (c[Ln].location == c[ee].location) {
                      Ne.push(yi);
                    } else {
                      c[Jn].location = c[Ln].location.replace(Ln.toString(), Jn.toString());
                      if (c[Jn].location == c[Ln].location) {
                        c[Jn].location = c[Jn].location.replace(/\.iwa/, `-${Jn}.iwa`);
                      }
                      Fr.utils.cfb_add(r, c[Jn].location, m_(z0([yi])));
                      var mi = c[Jn].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
                      zc(r, c, 2, function (Fi) {
                        var ji = Ws(Fi.messages[0].data);
                        rE(ji, Jn, mi);
                        oh(ji, c, ee, Jn);
                        Fi.messages[0].data = da(ji);
                      });
                    }
                    yn[Ni][0].data = gf(Jn);
                  }
                });
                var un = Ws(yn[1][0].data);
                if ((Ft = un[2]) != null) {
                  Ft.forEach(function (Ni) {
                    var or = Yl(Ni.data);
                    var Ln = o0({
                      deps: [ee],
                      location: c[or].location,
                      type: c[or].type
                    }, c);
                    r0(Te, or);
                    $d(Te, Ln);
                    V[or] = Ln;
                    var Jn = Hm(r, c, or);
                    Jn.id = Ln;
                    if (c[or].location == c[ee].location) {
                      Ne.push(Jn);
                    } else {
                      c[Ln].location = c[or].location.replace(or.toString(), Ln.toString());
                      if (c[Ln].location == c[or].location) {
                        c[Ln].location = c[Ln].location.replace(/\.iwa/, `-${Ln}.iwa`);
                      }
                      Fr.utils.cfb_add(r, c[Ln].location, m_(z0([Jn])));
                      var yi = c[Ln].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
                      zc(r, c, 2, function (mi) {
                        var Fi = Ws(mi.messages[0].data);
                        rE(Fi, Ln, yi);
                        oh(Fi, c, ee, Ln);
                        mi.messages[0].data = da(Fi);
                      });
                    }
                    Ni.data = gf(Ln);
                  });
                }
                yn[1][0].data = da(un);
                var ai = Ws(yn[3][0].data);
                ai[1].forEach(function (Ni) {
                  var or = Ws(Ni.data);
                  var Ln = Yl(or[2][0].data);
                  var Jn = V[Ln];
                  if (!V[Ln]) {
                    Jn = o0({
                      deps: [ee],
                      location: "",
                      type: c[Ln].type
                    }, c);
                    c[Jn].location = `Root Entry/Index/Tables/Tile-${Jn}.iwa`;
                    V[Ln] = Jn;
                    var yi = Hm(r, c, Ln);
                    yi.id = Jn;
                    r0(Te, Ln);
                    $d(Te, Jn);
                    Fr.utils.cfb_add(r, `/Index/Tables/Tile-${Jn}.iwa`, m_(z0([yi])));
                    zc(r, c, 2, function (mi) {
                      var Fi = Ws(mi.messages[0].data);
                      Fi[3].push({
                        type: 2,
                        data: da([[], [{
                          type: 0,
                          data: Jo(Jn)
                        }], [{
                          type: 2,
                          data: sh("Tables/Tile")
                        }], [{
                          type: 2,
                          data: sh(`Tables/Tile-${Jn}`)
                        }], [{
                          type: 2,
                          data: new Uint8Array([2, 0, 0])
                        }], [{
                          type: 2,
                          data: new Uint8Array([2, 0, 0])
                        }], [], [], [], [], [{
                          type: 0,
                          data: Jo(0)
                        }], [], [{
                          type: 0,
                          data: Jo(0)
                        }]])
                      });
                      Fi[1] = [{
                        type: 0,
                        data: Jo(Math.max(Jn + 1, Nl(Fi[1][0].data)))
                      }];
                      oh(Fi, c, ee, Jn);
                      mi.messages[0].data = da(Fi);
                    });
                  }
                  or[2][0].data = gf(Jn);
                  Ni.data = da(or);
                });
                yn[3][0].data = da(ai);
                _t[4][0].data = da(yn);
                Te.messages[0].data = da(_t);
              });
            })(o, p, ee + 1);
            _ = Hm(o, p, 1);
            V = Uy(Ws(_.messages[0].data)[1], Yl);
          }
          (function eb(r, c, o, p, _, V) {
            var Y = [];
            zc(r, c, V, function (Ne) {
              var ze = Ws(Ne.messages[0].data);
              ze[1] = [{
                type: 2,
                data: sh(p)
              }];
              Y = Uy(ze[2], Yl);
              Ne.messages[0].data = da(ze);
            });
            var Te = Yl(Ws(Hm(r, c, Y[0]).messages[0].data)[2][0].data);
            zc(r, c, Te, function (Ne, ze) {
              return function tb(r, c, o, p, _, V) {
                if (!o["!ref"]) {
                  throw new Error("Cannot export empty sheet to NUMBERS");
                }
                var Y = ml(o["!ref"]);
                Y.s.r = Y.s.c = 0;
                var ee = false;
                if (Y.e.c > 999) {
                  ee = true;
                  Y.e.c = 999;
                }
                if (Y.e.r > 999999) {
                  ee = true;
                  Y.e.r = 999999;
                }
                if (ee) {
                  console.error(`Truncating to ${$o(Y)}`);
                }
                var Te = [];
                if (o["!data"]) {
                  Te = o["!data"];
                } else {
                  for (var Ne = [], ze = 0; ze <= Y.e.c; ++ze) {
                    Ne[ze] = jo(ze);
                  }
                  for (var Ft = 0; Ft <= Y.e.r; ++Ft) {
                    Te[Ft] = [];
                    var _t = "" + (Ft + 1);
                    for (ze = 0; ze <= Y.e.c; ++ze) {
                      var Ot = o[Ne[ze] + _t];
                      if (!!Ot) {
                        Te[Ft][ze] = Ot;
                      }
                    }
                  }
                }
                var zt = {
                  cmnt: [{
                    a: "~54ee77S~",
                    t: "... the people who are crazy enough to think they can change the world, are the ones who do."
                  }],
                  ferr: [],
                  fmla: [],
                  nfmt: [],
                  ofmt: [],
                  rsst: [{
                    v: "~54ee77S~",
                    l: "https://sheetjs.com/"
                  }],
                  sst: ["~Sh33tJ5~"]
                };
                var nn = Ws(p.messages[0].data);
                nn[6][0].data = Jo(Y.e.r + 1);
                nn[7][0].data = Jo(Y.e.c + 1);
                delete nn[46];
                var Pt = Ws(nn[4][0].data);
                var rn = Yl(Ws(Pt[1][0].data)[2][0].data);
                zc(r, c, rn, function (hr, oo) {
                  var as;
                  var Lo = Ws(hr.messages[0].data);
                  if ((as = Lo?.[2]) != null && as[0]) {
                    for (var Ro = 0; Ro < Te.length; ++Ro) {
                      var va = Ws(Lo[2][0].data);
                      va[1][0].data = Jo(Ro);
                      va[4][0].data = Jo(Te[Ro].length);
                      Lo[2][Ro] = {
                        type: Lo[2][0].type,
                        data: da(va)
                      };
                    }
                  }
                  hr.messages[0].data = da(Lo);
                });
                var yn = Yl(Pt[2][0].data);
                zc(r, c, yn, function (hr, oo) {
                  for (var as = Ws(hr.messages[0].data), Lo = 0; Lo <= Y.e.c; ++Lo) {
                    var Ro = Ws(as[2][0].data);
                    Ro[1][0].data = Jo(Lo);
                    Ro[4][0].data = Jo(Y.e.r + 1);
                    as[2][Lo] = {
                      type: as[2][0].type,
                      data: da(Ro)
                    };
                  }
                  hr.messages[0].data = da(as);
                });
                var un = Ws(Pt[9][0].data);
                un[1] = [];
                var ai = Ws(Pt[3][0].data);
                var Ni = 256;
                ai[2] = [{
                  type: 0,
                  data: Jo(Ni)
                }];
                var as;
                var or = Yl(Ws(ai[1][0].data)[2][0].data);
                var Ln = (as = Ws(Hm(r, c, 2).messages[0].data)[3].filter(function (Lo) {
                  return Nl(Ws(Lo.data)[1][0].data) == or;
                }))?.length ? Nl(Ws(as[0].data)[12][0].data) : 0;
                Fr.utils.cfb_del(r, c[or].location);
                zc(r, c, 2, function (hr) {
                  var oo = Ws(hr.messages[0].data);
                  oo[3] = oo[3].filter(function (as) {
                    return Nl(Ws(as.data)[1][0].data) != or;
                  });
                  (function XE(r, c, o, p) {
                    var _ = c[o].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
                    var V = r[3].findIndex(function (ee) {
                      var Te;
                      var Ne;
                      var ze = Ws(ee.data);
                      if ((Te = ze[3]) != null && Te[0]) {
                        return Vg(ze[3][0].data) == _;
                      } else {
                        return !!((Ne = ze[2]) == null ? undefined : Ne[0]) && Vg(ze[2][0].data) == _;
                      }
                    });
                    var Y = Ws(r[3][V].data);
                    Y[6] ||= [];
                    Y[6] = Y[6].filter(function (ee) {
                      return Nl(Ws(ee.data)[1][0].data) != p;
                    });
                    r[3][V].data = da(Y);
                  })(oo, c, V, or);
                  hr.messages[0].data = da(oo);
                });
                r0(p, or);
                ai[1] = [];
                for (var Jn = Math.ceil((Y.e.r + 1) / Ni), yi = 0; yi < Jn; ++yi) {
                  var mi = o0({
                    deps: [],
                    location: "",
                    type: 6002
                  }, c);
                  c[mi].location = `Root Entry/Index/Tables/Tile-${mi}.iwa`;
                  for (var Fi = [[], [{
                      type: 0,
                      data: Jo(0)
                    }], [{
                      type: 0,
                      data: Jo(Math.min(Y.e.r + 1, (yi + 1) * Ni))
                    }], [{
                      type: 0,
                      data: Jo(0)
                    }], [{
                      type: 0,
                      data: Jo(Math.min((yi + 1) * Ni, Y.e.r + 1) - yi * Ni)
                    }], [], [{
                      type: 0,
                      data: Jo(5)
                    }], [{
                      type: 0,
                      data: Jo(1)
                    }], [{
                      type: 0,
                      data: Jo(1)
                    }]], ji = yi * Ni; ji <= Math.min(Y.e.r, (yi + 1) * Ni - 1); ++ji) {
                    var Dr = sA(Te[ji], zt, true);
                    Dr[1][0].data = Jo(ji - yi * Ni);
                    Fi[5].push({
                      data: da(Dr),
                      type: 2
                    });
                  }
                  ai[1].push({
                    type: 2,
                    data: da([[], [{
                      type: 0,
                      data: Jo(yi)
                    }], [{
                      type: 2,
                      data: gf(mi)
                    }]])
                  });
                  var _s = m_(z0([{
                    id: mi,
                    messages: [O1(6002, da(Fi))]
                  }]));
                  Fr.utils.cfb_add(r, `/Index/Tables/Tile-${mi}.iwa`, _s);
                  zc(r, c, 2, function (hr) {
                    var oo = Ws(hr.messages[0].data);
                    oo[3].push({
                      type: 2,
                      data: da([[], [{
                        type: 0,
                        data: Jo(mi)
                      }], [{
                        type: 2,
                        data: sh("Tables/Tile")
                      }], [{
                        type: 2,
                        data: sh(`Tables/Tile-${mi}`)
                      }], [{
                        type: 2,
                        data: new Uint8Array([2, 0, 0])
                      }], [{
                        type: 2,
                        data: new Uint8Array([2, 0, 0])
                      }], [], [], [], [], [{
                        type: 0,
                        data: Jo(0)
                      }], [], [{
                        type: 0,
                        data: Jo(Ln)
                      }]])
                    });
                    oo[1] = [{
                      type: 0,
                      data: Jo(Math.max(mi + 1, Nl(oo[1][0].data)))
                    }];
                    oh(oo, c, V, mi);
                    hr.messages[0].data = da(oo);
                  });
                  $d(p, mi);
                  un[1].push({
                    type: 2,
                    data: da([[], [{
                      type: 0,
                      data: Jo(yi * Ni)
                    }], [{
                      type: 0,
                      data: Jo(yi)
                    }]])
                  });
                }
                Pt[3][0].data = da(ai);
                Pt[9][0].data = da(un);
                Pt[10] = [{
                  type: 2,
                  data: new Uint8Array([])
                }];
                if (o["!merges"]) {
                  var ra = o0({
                    type: 6144,
                    deps: [V],
                    location: c[V].location
                  }, c);
                  _.push({
                    id: ra,
                    messages: [O1(6144, da([[], o["!merges"].map(function (hr) {
                      return {
                        type: 2,
                        data: da([[], [{
                          type: 2,
                          data: da([[], [{
                            type: 5,
                            data: new Uint8Array(new Uint16Array([hr.s.r, hr.s.c]).buffer)
                          }]])
                        }], [{
                          type: 2,
                          data: da([[], [{
                            type: 5,
                            data: new Uint8Array(new Uint16Array([hr.e.r - hr.s.r + 1, hr.e.c - hr.s.c + 1]).buffer)
                          }]])
                        }]])
                      };
                    })]))]
                  });
                  Pt[13] = [{
                    type: 2,
                    data: gf(ra)
                  }];
                  zc(r, c, 2, function (hr) {
                    var oo = Ws(hr.messages[0].data);
                    oh(oo, c, V, ra);
                    hr.messages[0].data = da(oo);
                  });
                  $d(p, ra);
                } else {
                  delete Pt[13];
                }
                var ds = Yl(Pt[4][0].data);
                zc(r, c, ds, function (hr) {
                  var oo = Ws(hr.messages[0].data);
                  oo[3] = [];
                  zt.sst.forEach(function (as, Lo) {
                    if (Lo != 0) {
                      oo[3].push({
                        type: 2,
                        data: da([[], [{
                          type: 0,
                          data: Jo(Lo)
                        }], [{
                          type: 0,
                          data: Jo(1)
                        }], [{
                          type: 2,
                          data: sh(as)
                        }]])
                      });
                    }
                  });
                  hr.messages[0].data = da(oo);
                });
                var Ua = Yl(Pt[17][0].data);
                zc(r, c, Ua, function (hr) {
                  var oo = Ws(hr.messages[0].data);
                  oo[3] = [];
                  var as = [904980, 903835, 903815, 903845];
                  zt.rsst.forEach(function (Lo, Ro) {
                    if (Ro != 0) {
                      var va = [[], [{
                        type: 0,
                        data: new Uint8Array([5])
                      }], [], [{
                        type: 2,
                        data: sh(Lo.v)
                      }]];
                      va[10] = [{
                        type: 0,
                        data: new Uint8Array([1])
                      }];
                      va[19] = [{
                        type: 2,
                        data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110])
                      }];
                      va[5] = [{
                        type: 2,
                        data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55])
                      }];
                      va[2] = [{
                        type: 2,
                        data: new Uint8Array([8, 148, 158, 55])
                      }];
                      va[6] = [{
                        type: 2,
                        data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0])
                      }];
                      va[7] = [{
                        type: 2,
                        data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55])
                      }];
                      va[8] = [{
                        type: 2,
                        data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55])
                      }];
                      va[14] = [{
                        type: 2,
                        data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0])
                      }];
                      va[24] = [{
                        type: 2,
                        data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0])
                      }];
                      var Xn = o0({
                        deps: [],
                        location: "",
                        type: 2001
                      }, c);
                      var Pi = [];
                      if (Lo.l) {
                        var bi = j0(r, 2032, [[], [], [{
                          type: 2,
                          data: sh(Lo.l)
                        }]], "/Index/Tables/DataList", c);
                        va[11] = [];
                        var vi = [[], []];
                        vi[1] ||= [];
                        vi[1].push({
                          type: 2,
                          data: da([[], [{
                            type: 0,
                            data: Jo(0)
                          }], [{
                            type: 2,
                            data: gf(bi)
                          }]])
                        });
                        va[11][0] = {
                          type: 2,
                          data: da(vi)
                        };
                        Pi.push(bi);
                      }
                      j0(r, 2001, va, "/Index/Tables/DataList", c, Xn);
                      zc(r, c, Xn, function (jn) {
                        as.forEach(function (fo) {
                          return $d(jn, fo);
                        });
                        Pi.forEach(function (fo) {
                          return $d(jn, fo);
                        });
                      });
                      var Cr = j0(r, 6218, [[], [{
                        type: 2,
                        data: gf(Xn)
                      }], [], [{
                        type: 2,
                        data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7])
                      }]], "/Index/Tables/DataList", c);
                      zc(r, c, Cr, function (jn) {
                        return $d(jn, Xn);
                      });
                      oo[3].push({
                        type: 2,
                        data: da([[], [{
                          type: 0,
                          data: Jo(Ro)
                        }], [{
                          type: 0,
                          data: Jo(1)
                        }], [], [], [], [], [], [], [{
                          type: 2,
                          data: gf(Cr)
                        }]])
                      });
                      $d(hr, Cr);
                      zc(r, c, 2, function (jn) {
                        var fo = Ws(jn.messages[0].data);
                        oh(fo, c, Ua, Cr);
                        oh(fo, c, Cr, Xn);
                        oh(fo, c, Xn, Pi);
                        oh(fo, c, Xn, as);
                        jn.messages[0].data = da(fo);
                      });
                    }
                  });
                  hr.messages[0].data = da(oo);
                });
                if (zt.cmnt.length > 1) {
                  var Ul = Yl(Pt[19][0].data);
                  var os = {};
                  var Ba = 0;
                  zc(r, c, Ul, function (hr) {
                    var oo = Ws(hr.messages[0].data);
                    oo[3] = [];
                    zt.cmnt.forEach(function (as, Lo) {
                      if (Lo != 0) {
                        var Ro = [];
                        if (as.replies) {
                          as.replies.forEach(function (Pi) {
                            os[Pi.a || ""] ||= j0(r, 212, [[], [{
                              type: 2,
                              data: sh(Pi.a || "")
                            }], [{
                              type: 2,
                              data: $E(++Ba)
                            }], [], [{
                              type: 0,
                              data: Jo(0)
                            }]], "/Index/Tables/DataList", c);
                            var bi = os[Pi.a || ""];
                            var vi = j0(r, 3056, [[], [{
                              type: 2,
                              data: sh(Pi.t || "")
                            }], [{
                              type: 2,
                              data: da([[], [{
                                type: 1,
                                data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65])
                              }]])
                            }], [{
                              type: 2,
                              data: gf(bi)
                            }]], "/Index/Tables/DataList", c);
                            zc(r, c, vi, function (Cr) {
                              return $d(Cr, bi);
                            });
                            Ro.push(vi);
                            zc(r, c, 2, function (Cr) {
                              var jn = Ws(Cr.messages[0].data);
                              oh(jn, c, vi, bi);
                              Cr.messages[0].data = da(jn);
                            });
                          });
                        }
                        os[as.a || ""] ||= j0(r, 212, [[], [{
                          type: 2,
                          data: sh(as.a || "")
                        }], [{
                          type: 2,
                          data: $E(++Ba)
                        }], [], [{
                          type: 0,
                          data: Jo(0)
                        }]], "/Index/Tables/DataList", c);
                        var va = os[as.a || ""];
                        var Xn = j0(r, 3056, [[], [{
                          type: 2,
                          data: sh(as.t || "")
                        }], [{
                          type: 2,
                          data: da([[], [{
                            type: 1,
                            data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65])
                          }]])
                        }], [{
                          type: 2,
                          data: gf(va)
                        }], Ro.map(function (Pi) {
                          return {
                            type: 2,
                            data: gf(Pi)
                          };
                        }), [{
                          type: 2,
                          data: da([[], [{
                            type: 0,
                            data: Jo(Lo)
                          }], [{
                            type: 0,
                            data: Jo(0)
                          }]])
                        }]], "/Index/Tables/DataList", c);
                        zc(r, c, Xn, function (Pi) {
                          $d(Pi, va);
                          Ro.forEach(function (bi) {
                            return $d(Pi, bi);
                          });
                        });
                        oo[3].push({
                          type: 2,
                          data: da([[], [{
                            type: 0,
                            data: Jo(Lo)
                          }], [{
                            type: 0,
                            data: Jo(1)
                          }], [], [], [], [], [], [], [], [{
                            type: 2,
                            data: gf(Xn)
                          }]])
                        });
                        $d(hr, Xn);
                        zc(r, c, 2, function (Pi) {
                          var bi = Ws(Pi.messages[0].data);
                          oh(bi, c, Ul, Xn);
                          oh(bi, c, Xn, va);
                          if (Ro.length) {
                            oh(bi, c, Xn, Ro);
                          }
                          Pi.messages[0].data = da(bi);
                        });
                      }
                    });
                    oo[2][0].data = Jo(zt.cmnt.length + 1);
                    hr.messages[0].data = da(oo);
                  });
                }
                nn[4][0].data = da(Pt);
                p.messages[0].data = da(nn);
              }(r, c, o, Ne, ze, Te);
            });
          })(o, p, r.Sheets[Y], Y, 0, V[ee]);
        });
        return o;
      }(r, c);
    case "xlsb":
      return function oA(r, c) {
        if (r && !r.SSF) {
          r.SSF = Vs(Kt);
        }
        if (r && r.SSF) {
          Ko();
          ya(r.SSF);
          c.revssf = Ca(r.SSF);
          c.revssf[r.SSF[65535]] = 0;
          c.ssf = r.SSF;
        }
        c.rels = {};
        c.wbrels = {};
        c.Strings = [];
        c.Strings.Count = 0;
        c.Strings.Unique = 0;
        if (Gv) {
          c.revStrings = new Map();
        } else {
          c.revStrings = {};
          c.revStrings.foo = [];
          delete c.revStrings.foo;
        }
        var o = "bin";
        var _ = {
          workbooks: [],
          sheets: [],
          charts: [],
          dialogs: [],
          macros: [],
          rels: [],
          strs: [],
          comments: [],
          threadedcomments: [],
          links: [],
          coreprops: [],
          extprops: [],
          custprops: [],
          themes: [],
          styles: [],
          calcchains: [],
          vba: [],
          drawings: [],
          metadata: [],
          people: [],
          TODO: [],
          xmlns: ""
        };
        aE(c = c || {});
        var V = li();
        var Y = "";
        var ee = 0;
        c.cellXfs = [];
        Pg(c.cellXfs, {}, {
          revssf: {
            General: 0
          }
        });
        r.Props ||= {};
        Zn(V, Y = "docProps/core.xml", Wl(r.Props, c));
        _.coreprops.push(Y);
        Hi(c.rels, 2, Y, nt.CORE_PROPS);
        Y = "docProps/app.xml";
        if (!r.Props || !r.Props.SheetNames) {
          if (r.Workbook && r.Workbook.Sheets) {
            for (var Te = [], Ne = 0; Ne < r.SheetNames.length; ++Ne) {
              if ((r.Workbook.Sheets[Ne] || {}).Hidden != 2) {
                Te.push(r.SheetNames[Ne]);
              }
            }
            r.Props.SheetNames = Te;
          } else {
            r.Props.SheetNames = r.SheetNames;
          }
        }
        r.Props.Worksheets = r.Props.SheetNames.length;
        Zn(V, Y, Tc(r.Props));
        _.extprops.push(Y);
        Hi(c.rels, 3, Y, nt.EXT_PROPS);
        if (r.Custprops !== r.Props && qs(r.Custprops || {}).length > 0) {
          Zn(V, Y = "docProps/custom.xml", rd(r.Custprops));
          _.custprops.push(Y);
          Hi(c.rels, 4, Y, nt.CUST_PROPS);
        }
        var ze = ["SheetJ5"];
        c.tcid = 0;
        ee = 1;
        for (; ee <= r.SheetNames.length; ++ee) {
          var Ft = {
            "!id": {}
          };
          var _t = r.Sheets[r.SheetNames[ee - 1]];
          Zn(V, Y = "xl/worksheets/sheet" + ee + "." + o, Qd(ee - 1, c, r, Ft));
          _.sheets.push(Y);
          Hi(c.wbrels, -1, "worksheets/sheet" + ee + "." + o, nt.WS[0]);
          if (_t) {
            var zt = _t["!comments"];
            var nn = false;
            var Pt = "";
            if (zt && zt.length > 0) {
              var rn = false;
              zt.forEach(function (un) {
                un[1].forEach(function (ai) {
                  if (ai.T == 1) {
                    rn = true;
                  }
                });
              });
              if (rn) {
                Zn(V, Pt = "xl/threadedComments/threadedComment" + ee + ".xml", Ch(zt, ze, c));
                _.threadedcomments.push(Pt);
                Hi(Ft, -1, "../threadedComments/threadedComment" + ee + ".xml", nt.TCMNT);
              }
              Zn(V, Pt = "xl/comments" + ee + "." + o, wh(zt));
              _.comments.push(Pt);
              Hi(Ft, -1, "../comments" + ee + "." + o, nt.CMNT);
              nn = true;
            }
            if (_t["!legacy"] && nn) {
              Zn(V, "xl/drawings/vmlDrawing" + ee + ".vml", xh(ee, _t["!comments"]));
            }
            delete _t["!comments"];
            delete _t["!legacy"];
          }
          if (Ft["!id"].rId1) {
            Zn(V, sn(Y), Ei(Ft));
          }
        }
        if (c.Strings != null && c.Strings.length > 0) {
          Zn(V, Y = "xl/sharedStrings." + o, function Lh(r) {
            var c = tl();
            gr(c, 159, function Xr(r, c) {
              c ||= Gi(8);
              c.write_shift(4, r.Count);
              c.write_shift(4, r.Unique);
              return c;
            }(r));
            for (var o = 0; o < r.length; ++o) {
              gr(c, 19, tf(r[o]));
            }
            gr(c, 160);
            return c.end();
          }(c.Strings));
          _.strs.push(Y);
          Hi(c.wbrels, -1, "sharedStrings." + o, nt.SST);
        }
        Zn(V, Y = "xl/workbook." + o, I_(r));
        _.workbooks.push(Y);
        Hi(c.rels, 1, Y, nt.WB);
        Zn(V, Y = "xl/theme/theme1.xml", pg(r.Themes, c));
        _.themes.push(Y);
        Hi(c.wbrels, -1, "theme/theme1.xml", nt.THEME);
        Zn(V, Y = "xl/styles." + o, my(r, c));
        _.styles.push(Y);
        Hi(c.wbrels, -1, "styles." + o, nt.STY);
        if (r.vbaraw) {
          Zn(V, Y = "xl/vbaProject.bin", r.vbaraw);
          _.vba.push(Y);
          Hi(c.wbrels, -1, "vbaProject.bin", nt.VBA);
        }
        Zn(V, Y = "xl/metadata." + o, function Iv() {
          var r = tl();
          gr(r, 332);
          gr(r, 334, rc(1));
          gr(r, 335, function uu(r) {
            var c = Gi(12 + r.name.length * 2);
            c.write_shift(4, r.flags);
            c.write_shift(4, r.version);
            Al(r.name, c);
            return c.slice(0, c.l);
          }({
            name: "XLDAPR",
            version: 120000,
            flags: 3496657072
          }));
          gr(r, 336);
          gr(r, 339, function _y(r, c) {
            var o = Gi(8 + c.length * 2);
            o.write_shift(4, r);
            Al(c, o);
            return o.slice(0, o.l);
          }(1, "XLDAPR"));
          gr(r, 52);
          gr(r, 35, rc(514));
          gr(r, 4096, rc(0));
          gr(r, 4097, _u(1));
          gr(r, 36);
          gr(r, 53);
          gr(r, 340);
          gr(r, 337, function Ov(r, c) {
            var o = Gi(8);
            o.write_shift(4, r);
            o.write_shift(4, c ? 1 : 0);
            return o;
          }(1, true));
          gr(r, 51, function yy(r) {
            var c = Gi(4 + r.length * 8);
            c.write_shift(4, r.length);
            for (var o = 0; o < r.length; ++o) {
              c.write_shift(4, r[o][0]);
              c.write_shift(4, r[o][1]);
            }
            return c;
          }([[1, 0]]));
          gr(r, 338);
          gr(r, 333);
          return r.end();
        }());
        _.metadata.push(Y);
        Hi(c.wbrels, -1, "metadata." + o, nt.XLMETA);
        if (ze.length > 1) {
          Zn(V, Y = "xl/persons/person.xml", Cp(ze));
          _.people.push(Y);
          Hi(c.wbrels, -1, "persons/person.xml", nt.PEOPLE);
        }
        Zn(V, "[Content_Types].xml", ce(_, c));
        Zn(V, "_rels/.rels", Ei(c.rels));
        Zn(V, "xl/_rels/workbook.bin.rels", Ei(c.wbrels));
        delete c.revssf;
        delete c.ssf;
        return V;
      }(r, c);
    default:
      return aA(r, c);
  }
}
function ap(r, c, o) {
  o ||= "";
  var p = o + r;
  switch (c.type) {
    case "base64":
      return st(ys(p));
    case "binary":
      return ys(p);
    case "string":
      return r;
    case "file":
      return Po(c.file, p, "utf8");
    case "buffer":
      if (ke) {
        return Be(p, "utf8");
      } else if (typeof TextEncoder !== "undefined") {
        return new TextEncoder().encode(p);
      } else {
        return ap(p, {
          type: "binary"
        }).split("").map(function (_) {
          return _.charCodeAt(0);
        });
      }
  }
  throw new Error("Unrecognized type " + c.type);
}
function k1(r, c) {
  switch (c.type) {
    case "string":
    case "base64":
    case "binary":
      for (var o = "", p = 0; p < r.length; ++p) {
        o += String.fromCharCode(r[p]);
      }
      if (c.type == "base64") {
        return st(o);
      } else if (c.type == "string") {
        return Ns(o);
      } else {
        return o;
      }
    case "file":
      return Po(c.file, r);
    case "buffer":
      return r;
    default:
      throw new Error("Unrecognized type " + c.type);
  }
}
function v_(r, c) {
  G();
  (function O_(r) {
    if (!r || !r.SheetNames || !r.Sheets) {
      throw new Error("Invalid Workbook");
    }
    if (!r.SheetNames.length) {
      throw new Error("Workbook is empty");
    }
    (function u_(r, c, o) {
      r.forEach(function (p, _) {
        Ly(p);
        for (var V = 0; V < _; ++V) {
          if (p == r[V]) {
            throw new Error("Duplicate Sheet Name: " + p);
          }
        }
        if (o) {
          var Y = c && c[_] && c[_].CodeName || p;
          if (Y.charCodeAt(0) == 95 && Y.length > 22) {
            throw new Error("Bad Code Name: Worksheet" + Y);
          }
        }
      });
    })(r.SheetNames, r.Workbook && r.Workbook.Sheets || [], !!r.vbaraw);
    for (var o = 0; o < r.SheetNames.length; ++o) {
      Oy(r.Sheets[r.SheetNames[o]], 0, o);
    }
    r.SheetNames.forEach(function (p, _) {
      var V = r.Sheets[p];
      if (V && V["!autofilter"]) {
        var Y;
        r.Workbook ||= {};
        r.Workbook.Names ||= [];
        r.Workbook.Names.forEach(function (Te) {
          if (Te.Name == "_xlnm._FilterDatabase" && Te.Sheet == _) {
            Y = Te;
          }
        });
        var ee = mc(p) + "!" + Su(V["!autofilter"].ref);
        if (Y) {
          Y.Ref = ee;
        } else {
          r.Workbook.Names.push({
            Name: "_xlnm._FilterDatabase",
            Sheet: _,
            Ref: ee
          });
        }
      }
    });
  })(r);
  var o = Vs(c || {});
  if (o.cellStyles) {
    o.cellNF = true;
    o.sheetStubs = true;
  }
  if (o.type == "array") {
    o.type = "binary";
    var p = v_(r, o);
    o.type = "array";
    return Dn(p);
  }
  var _ = 0;
  if (o.sheet && (_ = typeof o.sheet == "number" ? o.sheet : r.SheetNames.indexOf(o.sheet), !r.SheetNames[_])) {
    throw new Error("Sheet not found: " + o.sheet + " : " + typeof o.sheet);
  }
  switch (o.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return ap(U_(r, o), o);
    case "slk":
    case "sylk":
      return ap(Gf.from_sheet(r.Sheets[r.SheetNames[_]], o, r), o);
    case "htm":
    case "html":
      return ap(function FE(r, c) {
        var o = c || {};
        var _ = o.footer ?? "</body></html>";
        var V = [o.header ?? "<html><head><meta charset=\"utf-8\"/><title>SheetJS Table Export</title></head><body>"];
        var Y = ml(r["!ref"] || "A1");
        V.push(function g_(r, c, o) {
          return [].join("") + "<table" + (o && o.id ? " id=\"" + o.id + "\"" : "") + ">";
        }(0, 0, o));
        if (r["!ref"]) {
          for (var ee = Y.s.r; ee <= Y.e.r; ++ee) {
            V.push(IE(r, Y, ee, o));
          }
        }
        V.push("</table>" + _);
        return V.join("");
      }(r.Sheets[r.SheetNames[_]], o), o);
    case "txt":
      return function fA(r, c) {
        switch (c.type) {
          case "base64":
            return function rt(r) {
              for (var c = "", o = 0, p = 0, _ = 0, V = 0, Y = 0, ee = 0, Te = 0, Ne = 0; Ne < r.length;) {
                if ((o = r.charCodeAt(Ne++)) > 255) {
                  o = 95;
                }
                V = o >> 2;
                if ((p = r.charCodeAt(Ne++)) > 255) {
                  p = 95;
                }
                Y = (o & 3) << 4 | p >> 4;
                if ((_ = r.charCodeAt(Ne++)) > 255) {
                  _ = 95;
                }
                ee = (p & 15) << 2 | _ >> 6;
                Te = _ & 63;
                if (isNaN(p)) {
                  ee = Te = 64;
                } else if (isNaN(_)) {
                  Te = 64;
                }
                c += ot.charAt(V) + ot.charAt(Y) + ot.charAt(ee) + ot.charAt(Te);
              }
              return c;
            }(r);
          case "binary":
          case "string":
            return r;
          case "file":
            return Po(c.file, r, "binary");
          case "buffer":
            if (ke) {
              return Be(r, "binary");
            } else {
              return r.split("").map(function (o) {
                return o.charCodeAt(0);
              });
            }
        }
        throw new Error("Unrecognized type " + c.type);
      }(function U1(r, c) {
        c ||= {};
        c.FS = "\t";
        c.RS = "\n";
        var o = J_(r, c);
        return o;
        var p = Z.utils.encode(1200, o, "str");
        return String.fromCharCode(255) + String.fromCharCode(254) + p;
      }(r.Sheets[r.SheetNames[_]], o), o);
    case "csv":
      return ap(J_(r.Sheets[r.SheetNames[_]], o), o, "﻿");
    case "dif":
      return ap(eg.from_sheet(r.Sheets[r.SheetNames[_]], o), o);
    case "dbf":
      return k1(Mu.from_sheet(r.Sheets[r.SheetNames[_]], o), o);
    case "prn":
      return ap(Xo.from_sheet(r.Sheets[r.SheetNames[_]], o), o);
    case "rtf":
      return ap(function S0(r, c) {
        var o = ["{\\rtf1\\ansi"];
        if (!r["!ref"]) {
          return o[0] + "}";
        }
        for (var _, p = Ps(r["!ref"]), V = r["!data"] != null, Y = [], ee = p.s.r; ee <= p.e.r; ++ee) {
          o.push("\\trowd\\trautofit1");
          for (var Te = p.s.c; Te <= p.e.c; ++Te) {
            o.push("\\cellx" + (Te + 1));
          }
          o.push("\\pard\\intbl");
          if (V) {
            Y = r["!data"][ee] || [];
          }
          Te = p.s.c;
          for (; Te <= p.e.c; ++Te) {
            var Ne = Eo({
              r: ee,
              c: Te
            });
            if ((_ = V ? Y[Te] : r[Ne]) && (_.v != null || _.f && !_.F)) {
              o.push(" " + (_.w || (lc(_), _.w) || "").replace(/[\r\n]/g, "\\par "));
              o.push("\\cell");
            } else {
              o.push(" \\cell");
            }
          }
          o.push("\\pard\\intbl\\row");
        }
        return o.join("") + "}";
      }(r.Sheets[r.SheetNames[_]]), o);
    case "eth":
      return ap(ac.from_sheet(r.Sheets[r.SheetNames[_]], o), o);
    case "fods":
      return ap(HE(r, o), o);
    case "wk1":
      return k1(zf.sheet_to_wk1(r.Sheets[r.SheetNames[_]], o), o);
    case "wk3":
      return k1(zf.book_to_wk3(r, o), o);
    case "biff2":
      o.biff ||= 2;
    case "biff3":
      o.biff ||= 3;
    case "biff4":
      o.biff ||= 4;
      return k1(OE(r, o), o);
    case "biff5":
      o.biff ||= 5;
    case "biff8":
    case "xla":
    case "xls":
      o.biff ||= 8;
      return function F1(r, c) {
        var o = c || {};
        return z_(function Bb(r, c) {
          var o = c || {};
          var p = Fr.utils.cfb_new({
            root: "R"
          });
          var _ = "/Workbook";
          switch (o.bookType || "xls") {
            case "xls":
              o.bookType = "biff8";
            case "xla":
              o.bookType ||= "xla";
            case "biff8":
              _ = "/Workbook";
              o.biff = 8;
              break;
            case "biff5":
              _ = "/Book";
              o.biff = 5;
              break;
            default:
              throw new Error("invalid type " + o.bookType + " for XLS CFB");
          }
          Fr.utils.cfb_add(p, _, OE(r, o));
          if (o.biff == 8 && (r.Props || r.Custprops)) {
            (function CE(r, c) {
              var Y;
              var o = [];
              var p = [];
              var _ = [];
              var V = 0;
              var ee = Fo(Ri, "n");
              var Te = Fo(Yr, "n");
              if (r.Props) {
                Y = qs(r.Props);
                V = 0;
                Y = qs(r.Props);
                V = 0;
                for (; V < Y.length; ++V) {
                  (Object.prototype.hasOwnProperty.call(ee, Y[V]) ? o : Object.prototype.hasOwnProperty.call(Te, Y[V]) ? p : _).push([Y[V], r.Props[Y[V]]]);
                }
              }
              if (r.Custprops) {
                Y = qs(r.Custprops);
                V = 0;
                Y = qs(r.Custprops);
                V = 0;
                for (; V < Y.length; ++V) {
                  if (!Object.prototype.hasOwnProperty.call(r.Props || {}, Y[V])) {
                    (Object.prototype.hasOwnProperty.call(ee, Y[V]) ? o : Object.prototype.hasOwnProperty.call(Te, Y[V]) ? p : _).push([Y[V], r.Custprops[Y[V]]]);
                  }
                }
              }
              var Ne = [];
              for (V = 0; V < _.length; ++V) {
                if (Ce.indexOf(_[V][0]) <= -1 && Tu.indexOf(_[V][0]) <= -1) {
                  if (_[V][1] != null) {
                    Ne.push(_[V]);
                  }
                }
              }
              if (p.length) {
                Fr.utils.cfb_add(c, "/SummaryInformation", ni(p, Z0_SI, Te, Yr));
              }
              if (o.length || Ne.length) {
                Fr.utils.cfb_add(c, "/DocumentSummaryInformation", ni(o, Z0_DSI, ee, Ri, Ne.length ? Ne : null, "05d5cdd59c2e1b10939708002b2cf9ae"));
              }
            })(r, p);
          }
          if (o.biff == 8 && r.vbaraw) {
            (function wp(r, c) {
              c.FullPaths.forEach(function (o, p) {
                if (p != 0) {
                  var _ = o.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
                  if (_.slice(-1) !== "/") {
                    Fr.utils.cfb_add(r, _, c.FileIndex[p].content);
                  }
                }
              });
            })(p, Fr.read(r.vbaraw, {
              type: typeof r.vbaraw == "string" ? "binary" : "buffer"
            }));
          }
          return p;
        }(r, o), o);
      }(r, o);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return function uA(r, c) {
        var o = Vs(c || {});
        return function cb(r, c) {
          var o = {};
          var p = ke ? "nodebuffer" : typeof Uint8Array !== "undefined" ? "array" : "string";
          if (c.compression) {
            o.compression = "DEFLATE";
          }
          if (c.password) {
            o.type = p;
          } else {
            switch (c.type) {
              case "base64":
                o.type = "base64";
                break;
              case "binary":
                o.type = "string";
                break;
              case "string":
                throw new Error("'string' output type invalid for '" + c.bookType + "' files");
              case "buffer":
              case "file":
                o.type = p;
                break;
              default:
                throw new Error("Unrecognized type " + c.type);
            }
          }
          var _ = r.FullPaths ? Fr.write(r, {
            fileType: "zip",
            type: {
              nodebuffer: "buffer",
              string: "binary"
            }[o.type] || o.type,
            compression: !!c.compression
          }) : r.generate(o);
          if (typeof Deno !== "undefined" && typeof _ == "string") {
            if (c.type == "binary" || c.type == "base64") {
              return _;
            }
            _ = new Uint8Array(Dn(_));
          }
          if (c.password && typeof encrypt_agile !== "undefined") {
            return z_(encrypt_agile(_, c.password), c);
          } else if (c.type === "file") {
            return Po(c.file, _);
          } else if (c.type == "string") {
            return Ns(_);
          } else {
            return _;
          }
        }(K_(r, o), o);
      }(r, o);
    default:
      throw new Error("Unrecognized bookType |" + o.bookType + "|");
  }
}
function gA(r, c, o, p, _, V, Y) {
  var ee = Da(o);
  var Te = Y.defval;
  var Ne = Y.raw || !Object.prototype.hasOwnProperty.call(Y, "raw");
  var ze = true;
  var Ft = r["!data"] != null;
  var _t = _ === 1 ? [] : {};
  if (_ !== 1) {
    if (Object.defineProperty) {
      try {
        Object.defineProperty(_t, "__rowNum__", {
          value: o,
          enumerable: false
        });
      } catch {
        _t.__rowNum__ = o;
      }
    } else {
      _t.__rowNum__ = o;
    }
  }
  if (!Ft || r["!data"][o]) {
    for (var Ot = c.s.c; Ot <= c.e.c; ++Ot) {
      var zt = Ft ? (r["!data"][o] || [])[Ot] : r[p[Ot] + ee];
      if (zt != null && zt.t !== undefined) {
        var nn = zt.v;
        switch (zt.t) {
          case "z":
            if (nn == null) {
              break;
            }
            continue;
          case "e":
            nn = nn == 0 ? null : undefined;
            break;
          case "s":
          case "b":
          case "n":
            if (!zt.z || !No(zt.z) || typeof (nn = pa(nn)) == "number") {
              break;
            }
          case "d":
            if (!Y || !Y.UTC && Y.raw !== false) {
              nn = Ki(new Date(nn));
            }
            break;
          default:
            throw new Error("unrecognized type " + zt.t);
        }
        if (V[Ot] != null) {
          if (nn == null) {
            if (zt.t == "e" && nn === null) {
              _t[V[Ot]] = null;
            } else if (Te !== undefined) {
              _t[V[Ot]] = Te;
            } else {
              if (!Ne || nn !== null) {
                continue;
              }
              _t[V[Ot]] = null;
            }
          } else {
            _t[V[Ot]] = (zt.t === "n" && typeof Y.rawNumbers == "boolean" ? Y.rawNumbers : Ne) ? nn : lc(zt, nn, Y);
          }
          if (nn != null) {
            ze = false;
          }
        }
      } else {
        if (Te === undefined) {
          continue;
        }
        if (V[Ot] != null) {
          _t[V[Ot]] = Te;
        }
      }
    }
  }
  return {
    row: _t,
    isempty: ze
  };
}
var N1 = /"/g;
function dE(r, c, o, p, _, V, Y, ee) {
  for (var Te = true, Ne = [], ze = "", Ft = Da(o), _t = r["!data"] != null, Ot = _t && r["!data"][o] || [], zt = c.s.c; zt <= c.e.c; ++zt) {
    if (p[zt]) {
      var nn = _t ? Ot[zt] : r[p[zt] + Ft];
      if (nn == null) {
        ze = "";
      } else if (nn.v != null) {
        Te = false;
        ze = "" + (ee.rawNumbers && nn.t == "n" ? nn.v : lc(nn, null, ee));
        for (var Pt = 0, rn = 0; Pt !== ze.length; ++Pt) {
          if ((rn = ze.charCodeAt(Pt)) === _ || rn === V || rn === 34 || ee.forceQuotes) {
            ze = "\"" + ze.replace(N1, "\"\"") + "\"";
            break;
          }
        }
        if (ze == "ID") {
          ze = "\"ID\"";
        }
      } else if (nn.f == null || nn.F) {
        ze = "";
      } else {
        Te = false;
        if ((ze = "=" + nn.f).indexOf(",") >= 0) {
          ze = "\"" + ze.replace(N1, "\"\"") + "\"";
        }
      }
      Ne.push(ze);
    }
  }
  if (ee.blankrows === false && Te) {
    return null;
  } else {
    return Ne.join(Y);
  }
}
function J_(r, c) {
  var o = [];
  var p = c ?? {};
  if (r == null || r["!ref"] == null) {
    return "";
  }
  for (var _ = Ps(r["!ref"]), V = p.FS !== undefined ? p.FS : ",", Y = V.charCodeAt(0), ee = p.RS !== undefined ? p.RS : "\n", Te = ee.charCodeAt(0), Ne = new RegExp((V == "|" ? "\\|" : V) + "+$"), ze = "", Ft = [], _t = p.skipHidden && r["!cols"] || [], Ot = p.skipHidden && r["!rows"] || [], zt = _.s.c; zt <= _.e.c; ++zt) {
    if (!(_t[zt] || {}).hidden) {
      Ft[zt] = jo(zt);
    }
  }
  for (var nn = 0, Pt = _.s.r; Pt <= _.e.r; ++Pt) {
    if (!(Ot[Pt] || {}).hidden) {
      if ((ze = dE(r, _, Pt, Ft, Y, Te, V, p)) != null) {
        if (p.strip) {
          ze = ze.replace(Ne, "");
        }
        if (ze || p.blankrows !== false) {
          o.push((nn++ ? ee : "") + ze);
        }
      }
    }
  }
  return o.join("");
}
function $_(r, c, o) {
  if (typeof c == "string") {
    if (r["!data"] != null) {
      var p = Qo(c);
      r["!data"][p.r] ||= [];
      return r["!data"][p.r][p.c] ||= {
        t: "z"
      };
    }
    return r[c] ||= {
      t: "z"
    };
  }
  return $_(r, typeof c != "number" ? Eo(c) : jo(o || 0) + Da(c));
}
function X_(r, c) {
  var o = {
    SheetNames: [],
    Sheets: {}
  };
  if (r) {
    y_(o, r, c || "Sheet1");
  }
  return o;
}
function y_(r, c, o, p) {
  var _ = 1;
  if (!o) {
    for (; _ <= 65535 && r.SheetNames.indexOf(o = "Sheet" + _) != -1; o = undefined) {
      ++_;
    }
  }
  if (!o || r.SheetNames.length >= 65535) {
    throw new Error("Too many worksheets");
  }
  if (p && r.SheetNames.indexOf(o) >= 0) {
    var V = o.match(/(^.*?)(\d+)$/);
    _ = V && +V[2] || 0;
    var Y = V && V[1] || o;
    for (++_; _ <= 65535 && r.SheetNames.indexOf(o = Y + _) != -1; ++_);
  }
  Ly(o);
  if (r.SheetNames.indexOf(o) >= 0) {
    throw new Error("Worksheet with name |" + o + "| already exists!");
  }
  r.SheetNames.push(o);
  r.Sheets[o] = c;
  return o;
}
import * as e1 from "92635";
import * as hE from "3930";
import * as Hy from "36895";
import * as pE from "80125";
let vb = (() => {
  class r {
    constructor(o, p, _, V, Y, ee, Te) {
      this.renderer = o;
      this.credentialsStore = p;
      this.elementRef = _;
      this.authStore = V;
      this.loaderService = Y;
      this.cloudService = ee;
      this.uiService = Te;
      this.readonly = false;
      this.additionalData = {};
    }
    ngOnInit() {
      this.loadCollabora();
    }
    loadToken() {
      return this.cloudService.generateToken(this.authStore.currentUser.id, this.authStore.currentUser.typeCompte, "WOPI");
    }
    preloadFile() {
      return this.cloudService.preloadDynamicFileCollabora(this.file.url, this.additionalData).pipe((0, gE.U)(o => {
        this.file.id = o;
        return true;
      }));
    }
    loadCollabora() {
      this.loader = this.loaderService.show(this);
      let o = (0, b.of)(true);
      if (k.FSr.isNotEmptyString(this.file.url) && this.file.type === k.Vav.FICHIER_PRELOADED) {
        o = this.preloadFile();
      }
      o.pipe((0, w.w)(p => this.loadToken()), (0, M.b)(() => {
        const p = new k.YC();
        const _ = this.file.type === k.Vav.FICHIER_PRELOADED ? this.file.type : this.typeFichier;
        const V = this.authStore.currentUser.codeOgec;
        const Y = this.authStore.currentUser.id;
        const ee = this.authStore.currentUser.typeCompte;
        const Te = `${this.file.id}`;
        const Ne = Te.split(/[\\/]/).pop();
        const ze = Te.slice(0, Te.length - Ne.length);
        const Ft = AA.Pu.generate(Te);
        const zt = `${this.credentialsStore.apiWopiRESTUrl}/ws/wopi/files/${p.transform(`${V}${k.IZV}${_}${k.IZV}${Ne}${k.IZV}${Ft}`, "encode")}?fp=${p.transform(ze, "encode")}`;
        const nn = `${this.credentialsStore.collaboraUrl}?lang=fr-FR&WOPISrc=${encodeURIComponent(zt)}`;
        const Pt = this.renderer.createElement("form");
        this.renderer.setAttribute(Pt, "method", "POST");
        this.renderer.setAttribute(Pt, "target", "collaboraIFrame");
        this.renderer.setAttribute(Pt, "action", nn);
        let rn = this.credentialsStore.wopiToken;
        rn += `${k.IZV}`;
        if (this.file.type === k.Vav.FICHIER_PRELOADED) {
          this.additionalData = {};
        }
        rn += p.transform(JSON.stringify({
          ...this.additionalData,
          idUser: Y,
          typeUser: ee,
          ro: this.readonly ? 1 : 0,
          typeFichier: _
        }), "encode");
        const yn = this.renderer.createElement("input");
        this.renderer.setAttribute(yn, "name", "access_token");
        this.renderer.setAttribute(yn, "type", "hidden");
        this.renderer.setAttribute(yn, "value", rn);
        this.renderer.appendChild(Pt, yn);
        const un = this.renderer.createElement("input");
        this.renderer.setAttribute(un, "name", "typeUser");
        this.renderer.setAttribute(un, "type", "hidden");
        this.renderer.setAttribute(un, "value", this.authStore.currentUser.typeCompte);
        this.renderer.appendChild(Pt, un);
        const ai = this.renderer.createElement("input");
        this.renderer.setAttribute(ai, "name", "idUser");
        this.renderer.setAttribute(ai, "type", "hidden");
        this.renderer.setAttribute(ai, "value", "" + this.authStore.currentUser.id);
        this.renderer.appendChild(Pt, ai);
        const Ni = this.elementRef.nativeElement.closest("body");
        this.renderer.appendChild(Ni, Pt);
        Pt.submit();
        this.renderer.removeChild(Ni, Pt);
      }), (0, v.K)(p => {
        this.uiService.notifyEvent(k.DOJ.genericError, "Une erreur s'est produite lors du chargement du document", "Visionneuse", "fa fa-list-alt");
        return t.E;
      }), (0, C.x)(() => this.loaderService.hide(this))).subscribe();
    }
  }
  r.ɵfac = function (o) {
    return new (o || r)(O.Y36(O.Qsj), O.Y36(k.dSF), O.Y36(O.SBq), O.Y36(k.CnD), O.Y36(e1.S), O.Y36(k.eyc), O.Y36(k.VLf));
  };
  r.ɵcmp = O.Xpm({
    type: r,
    selectors: [["ed-collabora"]],
    inputs: {
      file: "file",
      readonly: "readonly",
      typeFichier: "typeFichier",
      additionalData: "additionalData"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "ed-collabora", 3, "ngBusy"], ["name", "collaboraIFrame", "allow", "fullscreen *"]],
    template: function (o, p) {
      if (o & 1) {
        O.TgZ(0, "div", 0);
        O._UZ(1, "iframe", 1);
        O.qZA();
      }
      if (o & 2) {
        O.Q6J("ngBusy", p.loader);
      }
    },
    dependencies: [pE.DC],
    styles: ["div.ed-collabora{height:100%}div.ed-collabora iframe{height:100%;width:100%;border:1px solid var(--dark-placeholder-color)}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return r;
})();
let xA = (() => {
  class r {
    constructor(o, p, _, V, Y, ee) {
      this.cloudService = o;
      this.authStore = p;
      this.credentialsStore = _;
      this.loaderService = V;
      this.uiService = Y;
      this.cd = ee;
    }
    ngOnInit() {
      this.loadVideo();
    }
    loadToken() {
      return this.cloudService.generateToken(this.authStore.currentUser.id, this.authStore.currentUser.typeCompte, "STREAMING");
    }
    loadVideo() {
      this.loader = this.loaderService.show(this);
      this.loadToken().pipe((0, M.b)(o => {
        const p = new k.YC();
        let _ = `${this.credentialsStore.apiRESTUrl}/ws/streaming/download`;
        _ += "?fichierId=" + p.transform(this.file.id, "encode");
        _ += "&leTypeDeFichier=CLOUD";
        _ += "&iu=" + this.authStore.currentUser.id;
        _ += "&tu=" + this.authStore.currentUser.typeCompte;
        _ += "&t=" + this.credentialsStore.streamToken;
        this.videoSrc = _;
        this.cd.detectChanges();
      }), (0, v.K)(o => {
        this.uiService.notifyEvent(k.DOJ.genericError, "Une erreur s'est produite lors du chargement du document", "Visionneuse", "fa fa-list-alt");
        return t.E;
      }), (0, C.x)(() => this.loaderService.hide(this))).subscribe();
    }
  }
  r.ɵfac = function (o) {
    return new (o || r)(O.Y36(k.eyc), O.Y36(k.CnD), O.Y36(k.dSF), O.Y36(e1.S), O.Y36(k.VLf), O.Y36(O.sBO));
  };
  r.ɵcmp = O.Xpm({
    type: r,
    selectors: [["ed-streaming"]],
    inputs: {
      file: "file"
    },
    decls: 2,
    vars: 1,
    consts: [["controls", "", "controlsList", "nodownload", "preload", "metadata", "disablePictureInPicture", "", 3, "src"], ["videoViewer", ""]],
    template: function (o, p) {
      if (o & 1) {
        O._UZ(0, "video", 0, 1);
      }
      if (o & 2) {
        O.Q6J("src", p.videoSrc, O.LSH);
      }
    },
    styles: ["video[_ngcontent-%COMP%]{box-shadow:0 0 7px #000000bf;max-height:100%;max-width:100%;aspect-ratio:16/9;width:100%;height:auto}"],
    changeDetection: 0
  });
  return r;
})();
const CA = ["edFileViewer"];
const wA = ["odfView"];
function mE(r, c) {
  if (r & 1) {
    O.TgZ(0, "div", 12);
    O._uU(1, "Vous pouvez compléter puis téléverser ce document directement depuis cette fenêtre.");
    O.qZA();
  }
}
function yb(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "button", 8);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.startUpload(true));
    });
    O._UZ(4, "i", 9);
    O.TgZ(5, "span", 10);
    O._uU(6, "Téléverser le document");
    O.qZA()()()();
    O.YNc(7, mE, 2, 0, "div", 11);
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.xp6(7);
    O.Q6J("ngIf", o.isPDF && o.isPDFEditable);
  }
}
function _b(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "button", 8);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.startUpload(false));
    });
    O._UZ(4, "i", 9);
    O.TgZ(5, "span", 10);
    O._uU(6, "Enregistrer le document");
    O.qZA()()()();
    O.TgZ(7, "div", 12);
    O._uU(8, "Vous pouvez modifier et enregistrer ce document directement depuis cette fenêtre.");
    O.qZA()();
  }
}
function B1(r, c) {
  if (r & 1) {
    O._UZ(0, "ed-collabora", 16);
  }
  if (r & 2) {
    const o = O.oxw(2);
    O.Q6J("additionalData", o.additionalData)("file", o.file)("typeFichier", o.typeFichier)("readonly", o.readonly);
  }
}
function vE(r, c) {
  if (r & 1) {
    O._UZ(0, "div", 21);
  }
  if (r & 2) {
    const o = O.oxw(3);
    O.Q6J("innerHTML", o.docx, O.oJD);
  }
}
function sx(r, c) {
  if (r & 1) {
    O._UZ(0, "div", 22, 23);
  }
}
function Eb(r, c) {
  if (r & 1) {
    O._UZ(0, "div", 24);
  }
  if (r & 2) {
    const o = O.oxw(3);
    O.Q6J("innerHTML", o.xls, O.oJD);
  }
}
function SA(r, c) {
  if (r & 1) {
    O.TgZ(0, "div", 25);
    O._UZ(1, "ed-streaming", 26);
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw(3);
    O.xp6(1);
    O.Q6J("file", o.file);
  }
}
function bb(r, c) {
  if (r & 1) {
    O.YNc(0, vE, 1, 1, "div", 17);
    O.YNc(1, sx, 2, 0, "div", 18);
    O.YNc(2, Eb, 1, 1, "div", 19);
    O.YNc(3, SA, 2, 1, "div", 20);
  }
  if (r & 2) {
    const o = O.oxw(2);
    O.Q6J("ngIf", o.isDocX && o.docx);
    O.xp6(1);
    O.Q6J("ngIf", o.isODF);
    O.xp6(1);
    O.Q6J("ngIf", o.isXls && o.xls);
    O.xp6(1);
    O.Q6J("ngIf", false);
  }
}
const E_ = function (r, c, o, p, _) {
  return {
    docx: r,
    odf: c,
    xls: o,
    video: p,
    collabora: _
  };
};
function DA(r, c) {
  if (r & 1) {
    O.TgZ(0, "div", 13);
    O.YNc(1, B1, 1, 4, "ed-collabora", 14);
    O.YNc(2, bb, 4, 4, "ng-template", null, 15, O.W1O);
    O.qZA();
  }
  if (r & 2) {
    const o = O.MAs(3);
    const p = O.oxw();
    O.Q6J("ngClass", O.qbA(3, E_, p.isDocX, p.isODF, p.isXls, p.isVideo, p.forceCollabora));
    O.xp6(1);
    O.Q6J("ngIf", p.file.isCollaboraFile() && p.forceCollabora)("ngIfElse", o);
  }
}
const Ab = function (r) {
  return {
    editable: r
  };
};
function yE(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "div", 27)(1, "ngx-extended-pdf-viewer", 28);
    O.NdJ("pageChange", function (_) {
      O.CHM(o);
      const V = O.oxw();
      return O.KtG(V.pageChanging(_));
    })("pdfLoaded", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.onLoadedPDF());
    });
    O.qZA()();
  }
  if (r & 2) {
    const o = O.oxw();
    O.Q6J("ngClass", O.VKq(9, Ab, o.isPDFEditable));
    O.xp6(1);
    O.Q6J("filenameForDownload", o.getFileNameToDownload())("src", o.urlFileTmp)("scrollMode", 0)("textLayer", true)("showPresentationModeButton", true)("showEditor", o.canModifyPdf)("showOpenFileButton", false)("useBrowserLocale", true);
  }
}
let TA = (() => {
  class r {
    constructor(o, p, _, V, Y, ee, Te) {
      this.loaderService = o;
      this.uiService = p;
      this.cloudService = _;
      this.cd = V;
      this.ngxService = Y;
      this.credentialsStore = ee;
      this.authStore = Te;
      this.forceCollabora = false;
      this.readonly = true;
      this.canModifyPdf = false;
      this.completeTeleversement = new O.vpe();
      this.fileLoaded = new O.vpe();
      this.zoom100 = 0.9;
      this.currentPage = 1;
      this.isPreviewReady = false;
      this.isPDFEditable = false;
      this.zoom = this.zoom100;
      this.typeFichierTelechargement = k.Y9E;
      this.edTypeFichier = k.Vav;
      this.numberPages = 1;
      this.pageCurrentNb = 1;
    }
    keyEvent(o) {
      this.onKeyPress(o);
    }
    get videoSrc() {
      const o = new k.YC();
      let p = `${this.credentialsStore.apiRESTUrl}/ws/streaming/download`;
      p += "?fichierId=" + o.transform(this.file.id, "encode");
      p += "&leTypeDeFichier=CLOUD";
      p += "&iu=" + this.authStore.currentUser.id;
      p += "&tu=" + this.authStore.currentUser.typeCompte;
      p += "&t=" + this.credentialsStore.streamToken;
      return p;
    }
    ngOnInit() {
      this.isVideo = this.file.isVideo();
      if (this.isVideo || this.forceCollabora) {
        this.isPreviewReady = true;
        this.isLoaded = true;
      } else {
        this.isPDF = this.isPDFFunction(this.file);
        this.isODF = this.file.isODF();
        this.isXls = this.isXLSFunction(this.file);
        this.isDocX = this.file.isDocX();
        this.loadBlobFile(this.file);
      }
      document.onfullscreenchange = this.fullScreenListener.bind(this);
      document.onwebkitfullscreenchange = this.fullScreenListener.bind(this);
    }
    ngOnChanges(o) {
      if (o.forceCollabora) {
        if (this.file.isCollaboraFile() && k.VEx.isCollaboraActif(this.authStore.currentUser)) {
          this.forceCollabora = this.forceCollabora || this.typeFichier === this.edTypeFichier.FICHIER_CLOUD;
        }
        if (this.forceCollabora) {
          this.isDocX = false;
          this.isXls = false;
          this.isODF = false;
        }
      }
    }
    ngOnDestroy() {
      if (k.FSr.isNotEmptyString(this.urlFileTmp)) {
        URL.revokeObjectURL(this.urlFileTmp);
      }
    }
    getFileNameToDownload() {
      let o = "document.pdf";
      if (k.FSr.isNotEmptyString(this.file.libelle)) {
        o = this.file.libelle;
      } else if (k.FSr.isNotEmptyString(this.file.displayText)) {
        o = this.file.displayText;
      }
      if (o.endsWith(".pdf")) {
        return o;
      } else {
        return `${o}.pdf`;
      }
    }
    isPDFFunction(o) {
      return [this.edTypeFichier.FICHIER_EMPTY, this.edTypeFichier.FICHIER_AIDES, this.edTypeFichier.FICHIER_DOC, this.edTypeFichier.FICHIER_ADM, this.edTypeFichier.FICHIER_VS, this.edTypeFichier.FICHIER_NOTE, this.edTypeFichier.FICHIER_FACTURE, this.edTypeFichier.FICHIER_INSCR_DOC_A_SIGNER, this.edTypeFichier.FICHIER_RPP, this.edTypeFichier.FICHIER_EDITION_PDF, this.edTypeFichier.FICHIER_FINANCE_PDF, this.edTypeFichier.FICHIER_MENU_RESTAURATION, this.typeFichierTelechargement.INSCR_MEMOS, this.edTypeFichier.FICHIER_VISITE_STAGE].indexOf(o.type) > -1 || Object.values(k.Vav).indexOf(o.type) === -1 || o.isPDF() || ["pdf"].indexOf(k.VEx.getExtension(o.libelle)) > -1;
    }
    isXLSFunction(o) {
      const p = [this.edTypeFichier.FICHIER_CATALOGUE_LSU, this.edTypeFichier.FICHIER_EDITION_COMPOSANTE, this.edTypeFichier.FICHIER_EDITION_APPRECIATION, this.edTypeFichier.FICHIER_GROUPE_FLEXIBLE, this.edTypeFichier.FICHIER_EDITION_EXCEL, this.edTypeFichier.FICHIER_SUIVI_STAGE_EXCEL, this.edTypeFichier.FICHIER_EDFORMS_SIGNATURES, this.typeFichierTelechargement.RECHERCHE_STAGE].indexOf(this.typeFichier) > -1 || o.isXls();
      if (p) {
        this.isPDF = false;
      }
      return p;
    }
    loadBlobFile(o) {
      if (!Object.isExists(o)) {
        return;
      }
      const p = {
        leTypeDeFichier: this.typeFichier !== o.type ? this.typeFichier : o.type,
        fichierId: o.id
      };
      let _;
      this.loader = this.loaderService.show(this);
      if (this.otherTypeDL) {
        _ = this.file.url;
      }
      this.cloudService.loadBlobFile(p.leTypeDeFichier, p.fichierId, this.additionalData, _).pipe((0, M.b)(V => {
        if (!Object.isExists(V) || V.size === 0) {
          this.isLoaded = false;
          this.uiService.notifyEvent(k.DOJ.genericError, "Chargement du document impossible", "Prévisualisation");
          return;
        }
        this.isLoaded = true;
        this.fileLoaded.emit(true);
        if (this.isPDF) {
          this.loadPDFPreview(V);
        } else if (this.isODF) {
          this.loadODFPreview(V);
        } else if (this.isDocX) {
          this.loadDocXPreview(V);
        } else if (this.isXls) {
          this.loadXlsPreview(V);
        }
      }), (0, C.x)(() => this.loaderService.hide(this)), (0, v.K)(V => {
        if (!k.FSr.isNotEmptyString(V.message)) {
          V.message = "Prévisualisation du document impossible !";
        }
        return this.uiService.notifyErrorThenEmpty(V, true, "Erreur", "fa fa-warning");
      })).subscribe();
    }
    fullScreenListener() {
      const o = document.fullscreenElement || document.webkitFullscreenElement;
      this.isFullScreen = Object.isExists(o) && o !== null;
      this.zoom = this.isFullScreen ? 1.5 : this.zoom100;
      this.cd.markForCheck();
    }
    goToPrevPage() {
      if (this.currentPage !== 1) {
        this.currentPage--;
      }
    }
    goToNextPage() {
      if (this.currentPage !== this.totalPages) {
        this.currentPage++;
      }
    }
    onKeyPress(o) {
      if (this.isPDF) {
        if (o.key === "ArrowLeft" || o.code === "Left") {
          this.goToPrevPage();
        } else if (o.key === "ArrowRight" || o.code === "Right") {
          this.goToNextPage();
        } else if (o.key === "ArrowDown" || o.code === "Down") {
          this.zoomOut();
        } else if (o.key === "ArrowUp" || o.code === "Up") {
          this.zoomIn();
        }
      }
      o.stopImmediatePropagation();
    }
    zoomIn() {
      this.zoom += 0.05;
    }
    zoomOut() {
      if (this.zoom > 0.05) {
        this.zoom -= 0.05;
      }
    }
    loadPDFPreview(o) {
      o = new Blob([o], {
        type: "application/pdf"
      });
      this.urlFileTmp = URL.createObjectURL(o);
      this.currentPage = 1;
      this.isPreviewReady = true;
      this.cd.detectChanges();
    }
    loadODFPreview(o) {
      this.isPreviewReady = true;
      this.urlFileTmp = URL.createObjectURL(o);
      setTimeout(() => {
        new odf.OdfCanvas(this.odfView.nativeElement).load(this.urlFileTmp);
      }, 0);
      this.cd.detectChanges();
    }
    loadDocXPreview(o) {
      const p = new FileReader();
      p.onloadend = _ => {
        const V = p.result;
        this.xls = "";
        (0, x.convertToHtml)({
          arrayBuffer: V
        }).then(Y => {
          this.docx = Y.value;
          this.isPreviewReady = true;
          this.cd.detectChanges();
        });
      };
      p.readAsArrayBuffer(o);
    }
    loadXlsPreview(o) {
      const p = new FileReader();
      p.onloadend = _ => {
        try {
          const V = Lf(p.result, {
            type: "array"
          });
          this.xls = "";
          V.SheetNames.forEach(Y => {
            this.xls += v_(V, {
              sheet: Y,
              type: "string",
              bookType: "html"
            });
          });
          V.Props.Title = "a";
          this.isPreviewReady = true;
          this.cd.detectChanges();
        } catch {
          this.uiService.notifyEvent(k.DOJ.genericError, "Prévisualisation du document impossible. Vous pouvez néanmoins le télécharger.", "danger");
          this.isPreviewReady = false;
        }
      };
      p.readAsArrayBuffer(o);
    }
    goodUrl(o) {
      return (0, I.Je)() + "/" + o + I.sX.apiExtension + "?verbe=get";
    }
    startUpload(o = false) {
      var p = this;
      return (0, E.Z)(function* () {
        const _ = window.PDFViewerApplication;
        const V = yield _.pdfDocument.saveDocument(_.pdfDocument.annotationStorage);
        const Y = new Blob([V], {
          type: "application/pdf"
        });
        let ee;
        ee = o ? {
          blob: Y,
          libelleFichier: k.FSr.getNormalizeString(p.file.libelle.slice(0, -4)) + ".pdf"
        } : {
          blob: Y,
          libelleFichier: p.file.libelle
        };
        p.completeTeleversement.emit(ee);
        p.cd.detectChanges();
        return new Blob([V], {
          type: "application/pdf"
        });
      })();
    }
    onLoadedPDF() {
      if (!this.readonly) {
        this.ngxService.getFormData().then(o => {
          this.isPDFEditable = o.length > 0;
        });
      }
      this.numberPages = this.ngxService.numberOfPages();
    }
    pageChanging(o) {
      this.pageCurrentNb = o;
      this.numberPages = this.ngxService.numberOfPages();
    }
  }
  r.ɵfac = function (o) {
    return new (o || r)(O.Y36(e1.S), O.Y36(k.VLf), O.Y36(k.eyc), O.Y36(O.sBO), O.Y36(hE.CG), O.Y36(k.dSF), O.Y36(k.CnD));
  };
  r.ɵcmp = O.Xpm({
    type: r,
    selectors: [["ed-file-viewer"]],
    viewQuery: function (o, p) {
      if (o & 1) {
        O.Gf(CA, 5);
        O.Gf(wA, 5);
      }
      if (o & 2) {
        let _;
        if (O.iGM(_ = O.CRH())) {
          p.viewerElem = _.first;
        }
        if (O.iGM(_ = O.CRH())) {
          p.odfView = _.first;
        }
      }
    },
    hostBindings: function (o, p) {
      if (o & 1) {
        O.NdJ("keyup", function (V) {
          return p.keyEvent(V);
        }, false, O.Jf7);
      }
    },
    inputs: {
      file: "file",
      typeFichier: "typeFichier",
      additionalData: "additionalData",
      otherTypeDL: "otherTypeDL",
      forceCollabora: "forceCollabora",
      readonly: "readonly",
      canModifyPdf: "canModifyPdf"
    },
    outputs: {
      completeTeleversement: "completeTeleversement",
      fileLoaded: "fileLoaded"
    },
    features: [O.TTD],
    decls: 6,
    vars: 5,
    consts: [["tabindex", "0", 1, "ed-file-viewer", 3, "ngBusy"], ["edFileViewer", ""], ["class", "d-print-none toolbar", 4, "ngIf"], ["id", "viewer", "class", "viewer", 3, "ngClass", 4, "ngIf"], ["class", "viewer pdf", 3, "ngClass", 4, "ngIf"], [1, "d-print-none", "toolbar"], [1, "btn-toolbar"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "margin-whitespace"], ["class", "alert alert-info", 4, "ngIf"], [1, "alert", "alert-info"], ["id", "viewer", 1, "viewer", 3, "ngClass"], ["class", "collabora-viewer", 3, "additionalData", "file", "typeFichier", "readonly", 4, "ngIf", "ngIfElse"], ["otherPreview", ""], [1, "collabora-viewer", 3, "additionalData", "file", "typeFichier", "readonly"], ["class", "docx-viewer", 3, "innerHTML", 4, "ngIf"], ["id", "odfView", "class", "odf-viewer", 4, "ngIf"], ["class", "xls-viewer", 3, "innerHTML", 4, "ngIf"], ["class", "video-viewer", 4, "ngIf"], [1, "docx-viewer", 3, "innerHTML"], ["id", "odfView", 1, "odf-viewer"], ["odfView", ""], [1, "xls-viewer", 3, "innerHTML"], [1, "video-viewer"], [3, "file"], [1, "viewer", "pdf", 3, "ngClass"], ["language", "fr", 3, "filenameForDownload", "src", "scrollMode", "textLayer", "showPresentationModeButton", "showEditor", "showOpenFileButton", "useBrowserLocale", "pageChange", "pdfLoaded"]],
    template: function (o, p) {
      if (o & 1) {
        O.TgZ(0, "div", 0, 1);
        O.YNc(2, yb, 8, 1, "div", 2);
        O.YNc(3, _b, 9, 0, "div", 2);
        O.YNc(4, DA, 4, 9, "div", 3);
        O.YNc(5, yE, 2, 11, "div", 4);
        O.qZA();
      }
      if (o & 2) {
        O.Q6J("ngBusy", p.loader);
        O.xp6(2);
        O.Q6J("ngIf", p.isLoaded && p.isPDFEditable);
        O.xp6(1);
        O.Q6J("ngIf", p.isPDF && p.canModifyPdf);
        O.xp6(1);
        O.Q6J("ngIf", !p.isPDF && p.isPreviewReady && p.isLoaded);
        O.xp6(1);
        O.Q6J("ngIf", p.isPreviewReady && p.isLoaded && p.isPDF && p.urlFileTmp);
      }
    },
    dependencies: [Hy.mk, Hy.O5, pE.DC, hE.S3, vb, xA],
    styles: ["div.ed-file-viewer{height:100%}div.ed-file-viewer:focus{outline:none}div.ed-file-viewer div.toolbar{margin:0 auto 20px}div.ed-file-viewer div.toolbar div.btn-toolbar{display:flex;justify-content:space-around}div.ed-file-viewer div.toolbar div.page-selector{width:125px;display:inline-block;height:37px;margin:0 2px}div.ed-file-viewer div.toolbar div.page-selector input[name=page]{width:50px;height:37px}div.ed-file-viewer div.toolbar div.page-selector span.input-group-text{height:37px}div.ed-file-viewer div.toolbar span.input-group-text:first-child{background:none;border:none;color:var(--light-primary-color);font-weight:700}div.ed-file-viewer div.toolbar span.input-group-text:last-child{background:var(--light-primary-color);color:#fff;font-weight:700}div.ed-file-viewer div.viewer{overflow-y:auto;height:100%}div.ed-file-viewer div.viewer.pdf{height:100%}div.ed-file-viewer div.viewer.editable{height:calc(100% - 73px)}div.ed-file-viewer div.viewer.odf>div.odf-viewer{box-shadow:0 0 7px #000000bf;margin:7px auto;display:block}div.ed-file-viewer div.viewer.docx{box-shadow:0 0 7px #000000bf;padding:30px}div.ed-file-viewer div.viewer.docx>div{all:initial}div.ed-file-viewer div.viewer.xls{box-shadow:0 0 7px #000000bf}div.ed-file-viewer div.xls-viewer{all:initial}div.ed-file-viewer div.xls-viewer table{top:-20px;position:relative;background:white}div.ed-file-viewer div.xls-viewer table tr td{border:1px solid var(--dark-placeholder-color)}div.ed-file-viewer div.xls-viewer table tr td[colspan]{text-align:center}div.ed-file-viewer div.viewer.video{overflow-y:hidden}div.ed-file-viewer div.viewer.video div.video-viewer{height:100%}div.ed-file-viewer div.viewer.collabora{overflow-y:hidden;height:100%}div.ed-file-viewer:-webkit-full-screen div.toolbar{width:50%;margin:20px auto}div.ed-file-viewer:fullscreen div.toolbar{width:50%;margin:20px auto}div.ed-file-viewer:-webkit-full-screen div.viewer.pdf{max-height:100%}div.ed-file-viewer:fullscreen div.viewer.pdf{max-height:100%}div.ed-file-viewer iframe#printPDFFrame{display:none}div.ed-file-viewer #errorWrapper button#errorShowMore,div.ed-file-viewer #errorWrapper button#errorClose,div.ed-file-viewer #errorWrapper button#errorShowLess{background:var(--light-primary-color);border:none;padding:6px 12px;border-radius:4px;margin-left:5px}div.ed-file-viewer #errorWrapper button#errorShowMore:hover,div.ed-file-viewer #errorWrapper button#errorClose:hover,div.ed-file-viewer #errorWrapper button#errorShowLess:hover{background:var(--dark-primary-color)}div.ed-file-viewer #errorWrapper button#errorShowMore:focus,div.ed-file-viewer #errorWrapper button#errorClose:focus,div.ed-file-viewer #errorWrapper button#errorShowLess:focus{background:var(--dark-primary-color)}::-webkit-backdrop{background-color:#fff}::backdrop{background-color:#fff}::-ms-backdrop{background-color:#fff}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return r;
})();
import * as xb from "20388";
function PA(r, c) {
  if (r & 1) {
    O.TgZ(0, "button", 26);
    O._UZ(1, "i", 27);
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.Q6J("fileId", o.file.id)("fileType", o.typeFichier !== o.file.type ? o.typeFichier : o.file.type)("additionalData", o.additionalData);
  }
}
function Cb(r, c) {
  if (r & 1) {
    O.TgZ(0, "button", 28);
    O._UZ(1, "i", 27);
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.Q6J("additionalData", o.additionalData)("url", o.getUrlDynamiqueDownload(o.file.url));
  }
}
function wb(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 29);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.exportToCloud());
    });
    O._UZ(1, "i", 30);
    O.qZA();
  }
}
function IA(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 31);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.print());
    });
    O._UZ(1, "i", 32);
    O.qZA();
  }
}
function Sb(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 33);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.rotateImg());
    });
    O._UZ(1, "i", 34);
    O.qZA();
  }
}
function Db(r, c) {
  if (r & 1) {
    O.TgZ(0, "span", 35);
    O._uU(1);
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.xp6(1);
    O.AsE("", o.currentIndex + 1, " / ", o.listFiles.length, "");
  }
}
function RA(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 36);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.maximise());
    });
    O._UZ(1, "i", 37);
    O.qZA();
  }
}
function FA(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 38);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.minimise());
    });
    O._UZ(1, "i", 39);
    O.qZA();
  }
}
function Tb(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 40);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.loadNext(-1));
    });
    O._UZ(1, "i", 41);
    O.qZA();
  }
}
function kA(r, c) {
  if (r & 1) {
    O._UZ(0, "img", 42);
  }
  if (r & 2) {
    const o = O.oxw();
    O.Q6J("src", o.imgDataSrc, O.LSH);
  }
}
function Mb(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "ed-file-viewer", 43);
    O.NdJ("completeTeleversement", function (_) {
      O.CHM(o);
      const V = O.oxw();
      return O.KtG(V.completeTeleversementFunction(_));
    })("fileLoaded", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.onFileLoaded());
    });
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.Q6J("otherTypeDL", o.otherTypeDL)("additionalData", o.additionalData)("file", o.file)("typeFichier", o.typeFichier)("readonly", o.readonly)("canModifyPdf", o.canModifyPdf)("forceCollabora", o.isForceCollabora);
  }
}
function Ob(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 44);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.loadNext(1));
    });
    O._UZ(1, "i", 45);
    O.qZA();
  }
}
function Pb(r, c) {
  if (r & 1) {
    O.TgZ(0, "span");
    O._uU(1);
    O.ALo(2, "edDate");
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.xp6(1);
    O.hij("Ajouté le ", O.xi3(2, 1, o.file.date, o.file.date.length > 10 ? "d MMM y à HH:mm" : "d MMM y"), "");
  }
}
function Ib(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 46);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.openModalSignature());
    });
    O._UZ(1, "i", 47);
    O._uU(2);
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.Q6J("disabled", !o.scrolledToEnd());
    O.xp6(2);
    O.hij(" ", o.scrolledToEnd() ? "Signer le document" : "Scrollez pour signer le document", " ");
  }
}
function LA(r, c) {
  if (r & 1) {
    const o = O.EpF();
    O.TgZ(0, "button", 48);
    O.NdJ("click", function () {
      O.CHM(o);
      const _ = O.oxw();
      return O.KtG(_.enableCollaboraPreview());
    });
    O._UZ(1, "i", 49);
    O._uU(2, " Visualiser dans la suite bureautique ");
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.Q6J("disabled", !o.fileLoaded);
  }
}
function NA(r, c) {
  if (r & 1) {
    O.TgZ(0, "span");
    O._uU(1);
    O.ALo(2, "displayNom");
    O.qZA();
  }
  if (r & 2) {
    const o = O.oxw();
    O.xp6(1);
    O.hij("Par ", O.lcZ(2, 1, o.file.proprietaire), "");
  }
}
const ax = function (r, c) {
  return {
    img: r,
    signature: c
  };
};
export let i = (() => {
  class r {
    constructor(o, p, _, V, Y, ee, Te, Ne, ze, Ft) {
      this.renderer = o;
      this.cloudService = p;
      this.loaderService = _;
      this.modalRef = V;
      this.cd = Y;
      this.sanitizer = ee;
      this.documentsService = Te;
      this.uiService = Ne;
      this.modalService = ze;
      this.authStore = Ft;
      this.listFiles = [];
      this.readonly = true;
      this.canModifyPdf = false;
      this.canExportToCloud = false;
      this.edTypeFichier = k.Vav;
      this.currentIndex = 0;
      this.degree = 0;
      this.showCollaboraPreview = false;
      this.isForceCollabora = false;
      this.isMaximised = false;
      this.fileLoaded = false;
      this.isCloudEnable = false;
      this.scrollValid = false;
    }
    keyEvent(o) {
      this.onKeyPress(o);
    }
    ngOnInit() {
      this.isCloudEnable = k.Kg5.isModuleEnabled(this.authStore.currentUser, k.qzA.CLOUD);
      this._onTeleversement$ = new _i2.x();
      this.listFiles = this.listFiles.filter(o => o.isImage());
      this.currentIndex = this.listFiles.findIndex(o => o.id === this.file.id);
      this.typeFichier = Object.isExists(this.typeFichier) ? this.typeFichier : Object.isExists(this.file.type) ? this.file.type : this.edTypeFichier.FICHIER_CLOUD;
      if (this.file.isImage()) {
        this.loadImage(this.file, this.typeFichier);
      }
      if (this.file instanceof k.VZO) {
        this.signatureEnable = this.file.signatureDemandee && !this.file.signature.dateValidation;
      }
      if (this.file.isCollaboraFile() && k.VEx.isCollaboraActif(this.authStore.currentUser)) {
        if (this.typeFichier !== this.edTypeFichier.FICHIER_CLOUD) {
          this.showCollaboraPreview = true;
          this.isForceCollabora = false;
        } else {
          this.enableCollaboraPreview();
        }
      }
    }
    ngOnDestroy() {
      this._onTeleversement$.complete();
    }
    loadImage(o, p) {
      this.loader = this.loaderService.show(this);
      this.cloudService.loadBlobFile(p, o.id, this.additionalData).pipe((0, M.b)(_ => {
        this.imgDataSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(_));
        this.cd.detectChanges();
      }), (0, v.K)(_ => {
        this.file = o;
        return t.E;
      }), (0, C.x)(() => this.loaderService.hide(this))).subscribe();
    }
    loadNext(o = 1) {
      this.degree = -90;
      this.rotateImg();
      if (this.listFiles.length !== 1) {
        if (this.currentIndex + o >= this.listFiles.length) {
          this.currentIndex = this.currentIndex + o - this.listFiles.length;
        } else if (this.currentIndex + o < 0) {
          this.currentIndex = this.listFiles.length - (-o - this.currentIndex);
        } else {
          this.currentIndex += o;
        }
        this.loadImage(this.listFiles[this.currentIndex], this.typeFichier);
        this.file = new k.EiA(this.listFiles[this.currentIndex]);
        this.cd.markForCheck();
      }
    }
    onKeyPress(o) {
      if (this.file.isImage() && Object.isExists(o)) {
        if (o.key === "ArrowLeft" || o.key === "Left") {
          this.loadNext(-1);
        } else if (o.key === "ArrowRight" || o.key === "Right") {
          this.loadNext(1);
        }
      }
    }
    openModalSignature() {
      if (this.authStore.isModeSupervision() || this.authStore.isEphemere()) {
        this.uiService.notifyEvent(k.DOJ.genericError, "En mode supervision, cette action n'est pas disponible !", "Documents");
        return;
      }
      const p = {
        titre: "confirmation de lecture du document",
        customMessage: "Pour certifier que vous avez bien <b>pris connaissance du document</b>,",
        send3DSecureAuth: (V, Y) => V ? this.documentsService.signerDocument(this.file, V, Y.signatureCanvas).pipe((0, w.w)(() => {
          this.uiService.notifyEvent(k.DOJ.genericSuccess, "Votre signature a bien été prise en compte", "Signature");
          this.signatureEnable = false;
          this.cd.markForCheck();
          return (0, b.of)(true);
        }), (0, v.K)(ee => {
          this.uiService.notifyEvent(k.DOJ.genericError, k.FSr.isNotEmptyString(ee.message) ? ee.message : "Signature impossible", "Signature");
          return t.E;
        })) : (0, b.of)(false)
      };
      this.modalService.show(L.a, {
        id: this.modalService.getModalsCount() + 1,
        ignoreBackdropClick: true,
        initialState: p
      }).content.onClose$.pipe((0, S.q)(1)).subscribe();
    }
    rotateImg() {
      this.degree += 90;
      const o = document.getElementById("image");
      this.renderer.setStyle(o, "transform", `rotate(${this.degree}deg)`);
    }
    print() {
      window.print();
    }
    completeTeleversementFunction(o) {
      this._onTeleversement$.next(o);
      this.modalRef.hide();
    }
    getUrlDynamiqueDownload(o) {
      return (0, I.Je)() + "/" + o + I.sX.apiExtension + "?verbe=get";
    }
    enableCollaboraPreview() {
      this.showCollaboraPreview = false;
      this.isForceCollabora = true;
    }
    maximise() {
      this.modalRef.setClass("modal-fullscreen");
      this.isMaximised = true;
    }
    minimise() {
      this.modalRef.setClass(this.modalClassCSS);
      this.isMaximised = false;
    }
    onFileLoaded() {
      this.fileLoaded = true;
    }
    exportToCloud() {
      let o = {};
      o = this.typeModule === "PJSTAGE" ? JSON.parse(this.additionalData?.data) : this.additionalData;
      this.loader = this.loaderService.show(this);
      this.cloudService.exportToCloud(this.file.id, this.typeModule, o).pipe((0, M.b)(p => {
        let _ = "Téléchargements";
        if (this.typeModule === k.qzA.CAHIER_DE_TEXTES || this.typeModule === k.qzA.MESSAGERIE || this.typeModule === k.qzA.CARNET_CORRESPONDANCE || this.typeModule === "PJSTAGE") {
          _ = "Pièces Jointes";
        }
        this.uiService.notifyEvent(k.DOJ.genericSuccess, `Votre pi\xe8ce jointe a bien \xe9t\xe9 copi\xe9e dans le dossier <strong>${_}</strong> de votre Cloud`, "Messagerie", "fa fa-envelope");
      }), (0, v.K)(p => this.uiService.notifyErrorThenEmpty(p, true, "Erreur", "fa fa-warning")), (0, C.x)(() => this.loaderService.hide(this))).subscribe();
    }
    scrolledToEnd() {
      return !!Object.isExists(this.fileViewerComponent) && (!!this.scrollValid || !this.fileViewerComponent.isPDFFunction(this.file) || this.fileViewerComponent.numberPages === 1 || !(this.fileViewerComponent.numberPages === this.fileViewerComponent.pageCurrentNb && (this.scrollValid = true), this.fileViewerComponent.numberPages !== this.fileViewerComponent.pageCurrentNb));
    }
  }
  r.ɵfac = function (o) {
    return new (o || r)(O.Y36(O.Qsj), O.Y36(k.eyc), O.Y36(e1.S), O.Y36(xb.UZ), O.Y36(O.sBO), O.Y36(ox.H7), O.Y36(k.SRx), O.Y36(k.VLf), O.Y36(xb.tT), O.Y36(k.CnD));
  };
  r.ɵcmp = O.Xpm({
    type: r,
    selectors: [["ed-lightbox-modal"]],
    viewQuery: function (o, p) {
      if (o & 1) {
        O.Gf(TA, 5);
      }
      if (o & 2) {
        let _;
        if (O.iGM(_ = O.CRH())) {
          p.fileViewerComponent = _.first;
        }
      }
    },
    hostBindings: function (o, p) {
      if (o & 1) {
        O.NdJ("keyup", function (V) {
          return p.keyEvent(V);
        }, false, O.Jf7);
      }
    },
    inputs: {
      file: "file",
      listFiles: "listFiles",
      typeFichier: "typeFichier",
      typeModule: "typeModule",
      additionalData: "additionalData",
      readonly: "readonly",
      canModifyPdf: "canModifyPdf",
      canExportToCloud: "canExportToCloud",
      otherTypeDL: "otherTypeDL",
      modalClassCSS: "modalClassCSS"
    },
    decls: 30,
    vars: 23,
    consts: [["edAutofocus", "", "id", "edLightbox", "tabindex", "0"], [1, "modal-header", "d-print-none"], [1, "modal-title"], ["type", "button", "class", "btn btn-primary white", "edTelechargement", "", "title", "Télécharger", "aria-label", "Télécharger", 3, "fileId", "fileType", "additionalData", 4, "ngIf"], ["type", "button", "class", "btn btn-primary white", "edTelechargement", "", "title", "Télécharger", "aria-label", "Télécharger", 3, "additionalData", "url", 4, "ngIf"], ["class", "btn btn btn-primary white margin-whitespace", "title", "Enregistrer dans mon Cloud", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary white", "aria-label", "Imprimer", "title", "Imprimer", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary white mx-3", "title", "rotation", "aria-label", "rotation du document", 3, "click", 4, "ngIf"], ["class", "mx-3", 4, "ngIf"], ["title", "Ouvrir en mode plein écran", "type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], ["title", "Quitter le mode plein écran", "type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn", "btn-close", "ms-2", 3, "click"], [1, "modal-body", "text-center", 3, "ngBusy"], ["type", "button", "class", "btn active no-background nav navLeft d-print-none", 3, "click", 4, "ngIf"], ["id", "image", "alt", "Image non chargée", 3, "src", 4, "ngIf", "ngIfElse"], ["notImageFile", ""], ["type", "button", "class", "btn active no-background nav navRight", 3, "click", 4, "ngIf"], [1, "modal-footer", "container-fluid"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-3", "text-start", "d-print-none"], [4, "ngIf"], [1, "col-6", "text-center", "d-print-none"], ["class", "btn btn-primary white", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary white margin-whitespace", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "col-3", "text-end", "d-print-none"], ["type", "button", "edTelechargement", "", "title", "Télécharger", "aria-label", "Télécharger", 1, "btn", "btn-primary", "white", 3, "fileId", "fileType", "additionalData"], ["aria-hidden", "true", 1, "fa", "fa-download"], ["type", "button", "edTelechargement", "", "title", "Télécharger", "aria-label", "Télécharger", 1, "btn", "btn-primary", "white", 3, "additionalData", "url"], ["title", "Enregistrer dans mon Cloud", "type", "button", 1, "btn", "btn", "btn-primary", "white", "margin-whitespace", 3, "click"], ["aria-hidden", "true", 1, "icon-ed_cloud"], ["type", "button", "aria-label", "Imprimer", "title", "Imprimer", 1, "btn", "btn-primary", "white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-print"], ["type", "button", "title", "rotation", "aria-label", "rotation du document", 1, "btn", "btn-primary", "white", "mx-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-rotate-right"], [1, "mx-3"], ["title", "Ouvrir en mode plein écran", "type", "button", 1, "btn", "btn-link", 3, "click"], [1, "size-17", "fa", "fa-window-maximize"], ["title", "Quitter le mode plein écran", "type", "button", 1, "btn", "btn-link", 3, "click"], [1, "size-17", "fa", "fa-window-minimize"], ["type", "button", 1, "btn", "active", "no-background", "nav", "navLeft", "d-print-none", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-left", "nav"], ["id", "image", "alt", "Image non chargée", 3, "src"], [1, "file-viewer", 3, "otherTypeDL", "additionalData", "file", "typeFichier", "readonly", "canModifyPdf", "forceCollabora", "completeTeleversement", "fileLoaded"], ["type", "button", 1, "btn", "active", "no-background", "nav", "navRight", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-right", "nav", "d-print-none"], ["type", "button", 1, "btn", "btn-primary", "white", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["type", "button", 1, "btn", "btn-primary", "white", "margin-whitespace", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-desktop"]],
    template: function (o, p) {
      if (o & 1) {
        O.TgZ(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        O.YNc(3, PA, 2, 3, "button", 3);
        O.YNc(4, Cb, 2, 2, "button", 4);
        O.YNc(5, wb, 2, 0, "button", 5);
        O._uU(6);
        O.qZA();
        O.TgZ(7, "div");
        O.YNc(8, IA, 2, 0, "button", 6);
        O.YNc(9, Sb, 2, 0, "button", 7);
        O.YNc(10, Db, 2, 2, "span", 8);
        O.YNc(11, RA, 2, 0, "button", 9);
        O.YNc(12, FA, 2, 0, "button", 10);
        O.TgZ(13, "button", 11);
        O.NdJ("click", function () {
          return p.modalRef.hide();
        });
        O.qZA()()();
        O.TgZ(14, "div", 12);
        O.YNc(15, Tb, 2, 0, "button", 13);
        O.YNc(16, kA, 1, 1, "img", 14);
        O.YNc(17, Mb, 1, 7, "ng-template", null, 15, O.W1O);
        O.YNc(19, Ob, 2, 0, "button", 16);
        O.qZA();
        O.TgZ(20, "div", 17)(21, "div", 18)(22, "div", 19)(23, "div", 20);
        O.YNc(24, Pb, 3, 4, "span", 21);
        O.qZA();
        O.TgZ(25, "div", 22);
        O.YNc(26, Ib, 3, 2, "button", 23);
        O.YNc(27, LA, 3, 1, "button", 24);
        O.qZA();
        O.TgZ(28, "div", 25);
        O.YNc(29, NA, 3, 3, "span", 21);
        O.qZA()()()()();
      }
      if (o & 2) {
        const _ = O.MAs(18);
        O.Tol(O.WLB(20, ax, p.file.isImage(), p.signatureEnable));
        O.xp6(3);
        O.Q6J("ngIf", !p.otherTypeDL);
        O.xp6(1);
        O.Q6J("ngIf", p.otherTypeDL);
        O.xp6(1);
        O.Q6J("ngIf", p.canExportToCloud && p.isCloudEnable && !p.authStore.isFamille() && !p.authStore.isEntreprise());
        O.xp6(1);
        O.hij(" ", p.file.libelle, " ");
        O.xp6(2);
        O.Q6J("ngIf", p.file.isImage());
        O.xp6(1);
        O.Q6J("ngIf", p.file.isImage());
        O.xp6(1);
        O.Q6J("ngIf", (p.listFiles == null ? null : p.listFiles.length) > 0);
        O.xp6(1);
        O.Q6J("ngIf", !p.isMaximised);
        O.xp6(1);
        O.Q6J("ngIf", p.isMaximised);
        O.xp6(2);
        O.Q6J("ngBusy", p.loader);
        O.xp6(1);
        O.Q6J("ngIf", (p.listFiles == null ? null : p.listFiles.length) > 1);
        O.xp6(1);
        O.Q6J("ngIf", p.file.isImage())("ngIfElse", _);
        O.xp6(3);
        O.Q6J("ngIf", (p.listFiles == null ? null : p.listFiles.length) > 1);
        O.xp6(5);
        O.Q6J("ngIf", p.file.date && p.file.date !== "");
        O.xp6(2);
        O.Q6J("ngIf", p.signatureEnable === true);
        O.xp6(1);
        O.Q6J("ngIf", p.showCollaboraPreview);
        O.xp6(2);
        O.Q6J("ngIf", p.file.proprietaire);
      }
    },
    dependencies: [Hy.O5, pE.DC, MA.U, OA.x, TA, k.$t3, k.ifA],
    styles: [".modal-lightbox .modal-content{height:100%}.modal-fullscreen div#edLightbox div.modal-body{height:calc(100vh - 132px)}div#edLightbox{height:100%}div#edLightbox:focus{outline:none}div#edLightbox div.modal-header button i[class*=fa-window-]{opacity:.5}div#edLightbox div.modal-header button i[class*=fa-window-]:hover{opacity:1}div#edLightbox div.modal-body{min-height:200px;display:flex;align-items:center;justify-content:center;height:calc(100vh - 193px)}div#edLightbox div.modal-body button.nav{position:absolute;z-index:10;top:0;bottom:0;width:175px;font-size:5em;display:flex;align-items:center;justify-content:center;opacity:.4;transition:opacity .5s}div#edLightbox div.modal-body button.nav:hover{opacity:1}div#edLightbox div.modal-body button.navLeft{left:0}div#edLightbox div.modal-body button.navRight{right:0}div#edLightbox div.modal-footer{padding-left:0;padding-right:0}div#edLightbox img{max-width:100%;max-height:100%;flex-grow:0;flex-shrink:0;flex-basis:auto}div#edLightbox .file-viewer,div#edLightbox .collabora-viewer{max-width:100%;flex-grow:0;flex-shrink:0;flex-basis:auto;width:100%;height:100%}div#edLightbox div.cg-busy.cg-busy-animation div.spinner{display:flex;align-items:center}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return r;
})();