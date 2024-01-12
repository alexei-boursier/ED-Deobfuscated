require("47042");
require("43371");
require("41539");
require("39714");
require("79841");
require("74916");
require("15306");
require("83112");
require("82526");
require("41817");
require("32165");
require("66992");
require("78783");
require("33948");
var F;
var Z;
var X;
var le;
var fe;
var q;
import * as U from "15439";
import * as B from "29664";
function j(Qe, It) {
  It ||= Qe.slice(0);
  return Object.freeze(Object.defineProperties(Qe, {
    raw: {
      value: Object.freeze(It)
    }
  }));
}
function G(Qe) {
  return (G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (It) {
    return typeof It;
  } : function (It) {
    if (It && typeof Symbol == "function" && It.constructor === Symbol && It !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof It;
    }
  })(Qe);
}
export function Pz(Qe) {
  var It;
  switch (G(Qe)) {
    case "string":
    case "number":
      It = `${Qe}`;
      break;
    case "object":
      It = Qe === null ? "" : Qe.toString();
      break;
    case "undefined":
      It = "";
      break;
    default:
      It = Qe.toString();
  }
  return It;
}
export function $K(Qe) {
  return typeof Qe !== "undefined";
}
export function o8(Qe) {
  return typeof Qe === "undefined";
}
export function xb(Qe) {
  return Qe === null || Qe === "" || o8(Qe);
}
export function Kj(Qe) {
  return Object.prototype.toString.call(Qe) === "[object RegExp]";
}
var pe = "length";
function re(It) {
  return parseInt(It, 16);
}
function Re(It) {
  return parseInt(It, 10);
}
function Ge(It, Yt, Dn) {
  return It.substr(Yt, Dn);
}
function Ue(It) {
  return It.codePointAt(0) - 65;
}
function ot(It) {
  return `${It}`.replace(/\-/g, "");
}
var Oe = false;
var Ee = {
  invalid: function () {
    return (0, B.e)(F ||= j(["\n    The license key for Handsontable is invalid. \n    If you need any help, contact us at support@handsontable.com."], ["\n    The license key for Handsontable is invalid.\\x20\n    If you need any help, contact us at support@handsontable.com."]));
  },
  expired: function (It) {
    var Yt = It.keyValidityDate;
    var Dn = It.hotVersion;
    return (0, B.e)(Z ||= j(["\n    The license key for Handsontable expired on ", ", and is not valid for the installed \n    version ", ". Renew your license key at handsontable.com or downgrade to a version released prior \n    to ", ". If you need any help, contact us at sales@handsontable.com."], ["\n    The license key for Handsontable expired on ", ", and is not valid for the installed\\x20\n    version ", ". Renew your license key at handsontable.com or downgrade to a version released prior\\x20\n    to ", ". If you need any help, contact us at sales@handsontable.com."]), Yt, Dn, Yt);
  },
  missing: function () {
    return (0, B.e)(X ||= j(["\n    The license key for Handsontable is missing. Use your purchased key to activate the product. \n    Alternatively, you can activate Handsontable to use for non-commercial purposes by \n    passing the key: 'non-commercial-and-evaluation'. If you need any help, contact \n    us at support@handsontable.com."], ["\n    The license key for Handsontable is missing. Use your purchased key to activate the product.\\x20\n    Alternatively, you can activate Handsontable to use for non-commercial purposes by\\x20\n    passing the key: 'non-commercial-and-evaluation'. If you need any help, contact\\x20\n    us at support@handsontable.com."]));
  },
  non_commercial: function () {
    return "";
  }
};
var ke = {
  invalid: function () {
    return (0, B.e)(le ||= j(["\n    The license key for Handsontable is invalid. \n    <a href=\"https://handsontable.com/docs/tutorial-license-key.html\" target=\"_blank\">Read more</a> on how to \n    install it properly or contact us at <a href=\"mailto:support@handsontable.com\">support@handsontable.com</a>."], ["\n    The license key for Handsontable is invalid.\\x20\n    <a href=\"https://handsontable.com/docs/tutorial-license-key.html\" target=\"_blank\">Read more</a> on how to\\x20\n    install it properly or contact us at <a href=\"mailto:support@handsontable.com\">support@handsontable.com</a>."]));
  },
  expired: function (It) {
    var Yt = It.keyValidityDate;
    var Dn = It.hotVersion;
    return (0, B.e)(fe ||= j(["\n    The license key for Handsontable expired on ", ", and is not valid for the installed \n    version ", ". <a href=\"https://handsontable.com/pricing\" target=\"_blank\">Renew</a> your \n    license key or downgrade to a version released prior to ", ". If you need any \n    help, contact us at <a href=\"mailto:sales@handsontable.com\">sales@handsontable.com</a>."], ["\n    The license key for Handsontable expired on ", ", and is not valid for the installed\\x20\n    version ", ". <a href=\"https://handsontable.com/pricing\" target=\"_blank\">Renew</a> your\\x20\n    license key or downgrade to a version released prior to ", ". If you need any\\x20\n    help, contact us at <a href=\"mailto:sales@handsontable.com\">sales@handsontable.com</a>."]), Yt, Dn, Yt);
  },
  missing: function () {
    return (0, B.e)(q ||= j(["\n    The license key for Handsontable is missing. Use your purchased key to activate the product. \n    Alternatively, you can activate Handsontable to use for non-commercial purposes by \n    passing the key: 'non-commercial-and-evaluation'. \n    <a href=\"https://handsontable.com/docs/tutorial-license-key.html\" target=\"_blank\">Read more</a> about it in \n    the documentation or contact us at <a href=\"mailto:support@handsontable.com\">support@handsontable.com</a>."], ["\n    The license key for Handsontable is missing. Use your purchased key to activate the product.\\x20\n    Alternatively, you can activate Handsontable to use for non-commercial purposes by\\x20\n    passing the key: 'non-commercial-and-evaluation'.\\x20\n    <a href=\"https://handsontable.com/docs/tutorial-license-key.html\" target=\"_blank\">Read more</a> about it in\\x20\n    the documentation or contact us at <a href=\"mailto:support@handsontable.com\">support@handsontable.com</a>."]));
  },
  non_commercial: function () {
    return "";
  }
};
export function ge(Qe, It) {
  var lt;
  var Yt = !xb(Qe);
  var Dn = typeof Qe == "string" && Qe.toLowerCase() === "non-commercial-and-evaluation";
  var Et = "12.2.0";
  var et = "invalid";
  var St = "invalid";
  var ve = function De(Qe) {
    var It = [][pe];
    var Yt = It;
    if (Qe[pe] !== Ue("Z")) {
      return false;
    }
    for (var Dn = "", Et = "B<H4P+".split(""), lt = Ue(Et.shift()); lt; lt = Ue(Et.shift() || "A")) {
      if (--lt < ""[pe]) {
        Yt |= (Re(`${Re(re(Dn) + (re(Ge(Qe, Math.abs(lt), 2)) + []).padStart(2, "0"))}`) % 97 || 2) >> 1;
      } else {
        Dn = Ge(Qe, lt, lt ? Et[pe] === 1 ? 9 : 8 : 6);
      }
    }
    return Yt === It;
  }(Qe = ot(Qe || ""));
  if (Yt || Dn || ve) {
    if (ve) {
      var Lt = U("25/10/2022", "DD/MM/YYYY");
      var ft = Math.floor(Lt.toDate().getTime() / 86400000);
      var qe = function (It) {
        return re(Ge(ot(It), re("12"), Ue("F"))) / (re(Ge(ot(It), Ue("B"), ~~![][pe])) || 9);
      }(Qe);
      lt = U((qe + 1) * 86400000, "x").format("MMMM DD, YYYY");
      if (ft > qe) {
        var Me = U().diff(Lt, "days");
        et = Me <= 1 ? "valid" : "expired";
        St = Me <= 15 ? "valid" : "expired";
      } else {
        et = "valid";
        St = "valid";
      }
    } else if (Dn) {
      et = "non_commercial";
      St = "valid";
    } else {
      et = "invalid";
      St = "invalid";
    }
  } else {
    et = "missing";
    St = "missing";
  }
  if (typeof location !== "undefined" && /^([a-z0-9\-]+\.)?\x68\x61\x6E\x64\x73\x6F\x6E\x74\x61\x62\x6C\x65\x2E\x63\x6F\x6D$/i.test(location.host)) {
    et = "valid";
    St = "valid";
  }
  if (!Oe && et !== "valid") {
    if (Ee[et]({
      keyValidityDate: lt,
      hotVersion: Et
    })) {
      console[et === "non_commercial" ? "info" : "warn"](Ee[et]({
        keyValidityDate: lt,
        hotVersion: Et
      }));
    }
    Oe = true;
  }
  if (St !== "valid" && It.parentNode && ke[St]({
    keyValidityDate: lt,
    hotVersion: Et
  })) {
    var it = document.createElement("div");
    it.id = "hot-display-license-info";
    it.innerHTML = ke[St]({
      keyValidityDate: lt,
      hotVersion: Et
    });
    It.parentNode.insertBefore(it, It.nextSibling);
  }
}