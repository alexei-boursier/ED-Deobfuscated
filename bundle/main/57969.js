require("30489");
require("26699");
require("32023");
require("47042");
require("82772");
require("57327");
require("41539");
require("24603");
require("74916");
require("39714");
require("69600");
require("73210");
require("15306");
require("92222");
require("82526");
require("41817");
require("32165");
require("66992");
require("78783");
require("33948");
require("91038");
require("68309");
var Be;
var De;
var Qe;
import * as j from "1340";
import * as G from "86675";
function W(Bn) {
  return function pe(Bn) {
    if (Array.isArray(Bn)) {
      return re(Bn);
    }
  }(Bn) || function he(Bn) {
    if (typeof Symbol !== "undefined" && Bn[Symbol.iterator] != null || Bn["@@iterator"] != null) {
      return Array.from(Bn);
    }
  }(Bn) || function Le(Bn, oi) {
    if (Bn) {
      if (typeof Bn == "string") {
        return re(Bn, oi);
      }
      var fi = Object.prototype.toString.call(Bn).slice(8, -1);
      if (fi === "Object" && Bn.constructor) {
        fi = Bn.constructor.name;
      }
      if (fi === "Map" || fi === "Set") {
        return Array.from(Bn);
      }
      if (fi === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fi)) {
        return re(Bn, oi);
      }
    }
  }(Bn) || function Pe() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function re(Bn, oi) {
  if (oi == null || oi > Bn.length) {
    oi = Bn.length;
  }
  for (var fi = 0, bn = new Array(oi); fi < oi; fi++) {
    bn[fi] = Bn[fi];
  }
  return bn;
}
export function G_(Bn) {
  for (var oi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, fi = -1, bn = null, pn = Bn; pn !== null;) {
    if (fi === oi) {
      bn = pn;
      break;
    }
    if (pn.host && pn.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      pn = pn.host;
    } else {
      fi += 1;
      pn = pn.parentNode;
    }
  }
  return bn;
}
export function f5(Bn) {
  return function Ge(Bn) {
    return Object.getPrototypeOf(Bn.parent) && Bn.frameElement;
  }(Bn) && Bn.parent;
}
export function oq(Bn) {
  for (var oi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [], fi = arguments.length > 2 ? arguments[2] : undefined, bn = Node, pn = bn.ELEMENT_NODE, An = bn.DOCUMENT_FRAGMENT_NODE, si = Bn; si != null && si !== fi;) {
    var Di = si;
    var dr = Di.nodeType;
    var Vr = Di.nodeName;
    if (dr === pn && (oi.includes(Vr) || oi.includes(si))) {
      return si;
    }
    var Or = si;
    var is = Or.host;
    si = is && dr === An ? is : si.parentNode;
  }
  return null;
}
export function W6(Bn, oi, fi) {
  for (var bn = [], pn = Bn; (pn &&= oq(pn, oi, fi)) && (!fi || fi.contains(pn));) {
    bn.push(pn);
    pn = pn.host && pn.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? pn.host : pn.parentNode;
  }
  var An = bn.length;
  if (An) {
    return bn[An - 1];
  } else {
    return null;
  }
}
export function MO(Bn, oi) {
  var fi = Bn.parentNode;
  var bn = [];
  for (typeof oi == "string" ? bn = Array.prototype.slice.call(Bn.defaultView ? Bn.querySelectorAll(oi) : Bn.ownerDocument.querySelectorAll(oi), 0) : bn.push(oi); fi !== null;) {
    if (bn.indexOf(fi) > -1) {
      return true;
    }
    fi = fi.parentNode;
  }
  return false;
}
export function Kz(Bn) {
  var oi = 0;
  var fi = Bn;
  if (fi.previousSibling) {
    for (; fi = fi.previousSibling;) {
      oi += 1;
    }
  }
  return oi;
}
export function mK(Bn, oi, fi) {
  var bn = fi.parentElement.querySelector(`.ht_clone_${Bn}`);
  if (bn) {
    return bn.contains(oi);
  } else {
    return null;
  }
}
function It(Bn) {
  if (Bn && Bn.length) {
    return Bn.filter(function (oi) {
      return !!oi;
    });
  } else {
    return [];
  }
}
if ((0, j.mp)()) {
  function Yt(oi) {
    var fi = oi.createElement("div");
    fi.classList.add("test", "test2");
    return fi.classList.contains("test2");
  }
  Be = function (oi, fi) {
    return oi.classList !== undefined && typeof fi == "string" && fi !== "" && oi.classList.contains(fi);
  };
  De = function (oi, fi) {
    var bn = oi.ownerDocument;
    var pn = fi;
    if (typeof pn == "string") {
      pn = pn.split(" ");
    }
    if ((pn = It(pn)).length > 0) {
      if (Yt(bn)) {
        var An;
        (An = oi.classList).add.apply(An, W(pn));
      } else {
        for (var si = 0; pn[si];) {
          oi.classList.add(pn[si]);
          si += 1;
        }
      }
    }
  };
  Qe = function (oi, fi) {
    var bn = oi.ownerDocument;
    var pn = fi;
    if (typeof pn == "string") {
      pn = pn.split(" ");
    }
    if ((pn = It(pn)).length > 0) {
      if (Yt(bn)) {
        var An;
        (An = oi.classList).remove.apply(An, W(pn));
      } else {
        for (var si = 0; pn[si];) {
          oi.classList.remove(pn[si]);
          si += 1;
        }
      }
    }
  };
} else {
  function Dn(oi) {
    return new RegExp(`(\\s|^)${oi}(\\s|\$)`);
  }
  Be = function (oi, fi) {
    return oi.className !== undefined && Dn(fi).test(oi.className);
  };
  De = function (oi, fi) {
    var bn = oi.className;
    var pn = fi;
    if (typeof pn == "string") {
      pn = pn.split(" ");
    }
    pn = It(pn);
    if (bn === "") {
      bn = pn.join(" ");
    } else {
      for (var An = 0; An < pn.length; An++) {
        if (pn[An] && !Dn(pn[An]).test(bn)) {
          bn += ` ${pn[An]}`;
        }
      }
    }
    oi.className = bn;
  };
  Qe = function (oi, fi) {
    var bn = 0;
    var pn = oi.className;
    var An = fi;
    if (typeof An == "string") {
      An = An.split(" ");
    }
    An = It(An);
    for (; An[bn];) {
      pn = pn.replace(Dn(An[bn]), " ").trim();
      bn += 1;
    }
    if (oi.className !== pn) {
      oi.className = pn;
    }
  };
}
export function pv(Bn, oi) {
  return Be(Bn, oi);
}
export function cn(Bn, oi) {
  De(Bn, oi);
}
export function IV(Bn, oi) {
  Qe(Bn, oi);
}
export function Wu(Bn) {
  if (Bn.nodeType === 3) {
    Bn.parentNode.removeChild(Bn);
  } else if (["TABLE", "THEAD", "TBODY", "TFOOT", "TR"].indexOf(Bn.nodeName) > -1) {
    for (var oi = Bn.childNodes, fi = oi.length - 1; fi >= 0; fi--) {
      Wu(oi[fi]);
    }
  }
}
export function cS(Bn) {
  for (var oi; oi = Bn.lastChild;) {
    Bn.removeChild(oi);
  }
}
var vr;
var Lt = /(<(.*)>|&(.*);)/;
export function uS(Bn, oi) {
  var fi = arguments.length <= 2 || arguments[2] === undefined || arguments[2];
  if (Lt.test(oi)) {
    Bn.innerHTML = fi ? (0, se.Nw)(oi) : oi;
  } else {
    tT(Bn, oi);
  }
}
export function tT(Bn, oi) {
  var fi = Bn.firstChild;
  if (fi && fi.nodeType === 3 && fi.nextSibling === null) {
    if (j.tt) {
      fi.textContent = oi;
    } else {
      fi.data = oi;
    }
  } else {
    cS(Bn);
    Bn.appendChild(Bn.ownerDocument.createTextNode(oi));
  }
}
export function pn(Bn) {
  for (var oi = Bn.ownerDocument.documentElement, fi = Bn; fi !== oi;) {
    if (fi === null) {
      return false;
    }
    if (fi.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      if (fi.host) {
        if (fi.host.impl) {
          return pn(fi.host.impl);
        }
        if (fi.host) {
          return pn(fi.host);
        }
        throw new Error("Lost in Web Components world");
      }
      return false;
    }
    if (fi.style && fi.style.display === "none") {
      return false;
    }
    fi = fi.parentNode;
  }
  return true;
}
export function cv(Bn) {
  var An;
  var si;
  var Di;
  var dr;
  var oi = Bn.ownerDocument;
  var fi = oi.defaultView;
  var bn = oi.documentElement;
  var pn = Bn;
  if ((0, j.ZF)() && pn.firstChild && pn.firstChild.nodeName === "CAPTION") {
    return {
      top: (dr = pn.getBoundingClientRect()).top + (fi.pageYOffset || bn.scrollTop) - (bn.clientTop || 0),
      left: dr.left + (fi.pageXOffset || bn.scrollLeft) - (bn.clientLeft || 0)
    };
  }
  An = pn.offsetLeft;
  si = pn.offsetTop;
  Di = pn;
  for (; (pn = pn.offsetParent) && pn !== oi.body;) {
    An += pn.offsetLeft;
    si += pn.offsetTop;
    Di = pn;
  }
  if (Di && Di.style.position === "fixed") {
    An += fi.pageXOffset || bn.scrollLeft;
    si += fi.pageYOffset || bn.scrollTop;
  }
  return {
    left: An,
    top: si
  };
}
export function AQ() {
  var Bn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var oi = Bn.scrollY;
  if (oi === undefined) {
    oi = Bn.document.documentElement.scrollTop;
  }
  return oi;
}
export function DZ() {
  var Bn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var oi = Bn.scrollX;
  if (oi === undefined) {
    oi = Bn.document.documentElement.scrollLeft;
  }
  return oi;
}
export function cx(Bn) {
  var oi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  if (Bn === oi) {
    return AQ(oi);
  } else {
    return Bn.scrollTop;
  }
}
export function vj(Bn) {
  var oi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  if (Bn === oi) {
    return DZ(oi);
  } else {
    return Bn.scrollLeft;
  }
}
export function dD(Bn) {
  var oi = Bn.ownerDocument;
  var fi = oi ? oi.defaultView : undefined;
  if (!oi) {
    fi = (oi = Bn.document ? Bn.document : Bn).defaultView;
  }
  for (var bn = ["auto", "scroll"], pn = (0, j.mI)(), An = Bn.parentNode; An && An.style && oi.body !== An;) {
    var si = An.style;
    var Di = si.overflow;
    var dr = si.overflowX;
    var Vr = si.overflowY;
    if ([Di, dr, Vr].includes("scroll")) {
      return An;
    }
    if (pn) {
      var Or = fi.getComputedStyle(An);
      dr = Or.overflowX;
      Vr = Or.overflowY;
      if (bn.includes(Di = Or.overflow) || bn.includes(dr) || bn.includes(Vr)) {
        return An;
      }
    }
    if (An.clientHeight <= An.scrollHeight + 1 && (bn.includes(Vr) || bn.includes(Di)) || An.clientWidth <= An.scrollWidth + 1 && (bn.includes(dr) || bn.includes(Di))) {
      return An;
    }
    An = An.parentNode;
  }
  return fi;
}
export function $g(Bn) {
  for (var oi = Bn.ownerDocument, fi = oi.defaultView, bn = Bn.parentNode; bn && bn.style && oi.body !== bn;) {
    if (bn.style.overflow !== "visible" && bn.style.overflow !== "") {
      return bn;
    }
    var pn = Dx(bn, fi);
    var An = ["scroll", "hidden", "auto"];
    var si = pn.getPropertyValue("overflow");
    var Di = pn.getPropertyValue("overflow-y");
    var dr = pn.getPropertyValue("overflow-x");
    if (An.includes(si) || An.includes(Di) || An.includes(dr)) {
      return bn;
    }
    bn = bn.parentNode;
  }
  return fi;
}
export function C2(Bn, oi) {
  var fi = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  if (Bn) {
    if (Bn === fi) {
      if (oi === "width") {
        return `${fi.innerWidth}px`;
      } else if (oi === "height") {
        return `${fi.innerHeight}px`;
      } else {
        return undefined;
      }
    }
    var bn = Bn.style[oi];
    if (bn !== "" && bn !== undefined) {
      return bn;
    }
    var pn = Dx(Bn, fi);
    if (pn[oi] !== "" && pn[oi] !== undefined) {
      return pn[oi];
    } else {
      return undefined;
    }
  }
}
export function Dx(Bn) {
  var oi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  return Bn.currentStyle || oi.getComputedStyle(Bn);
}
export function iO(Bn) {
  return Bn.offsetWidth;
}
export function Pb(Bn) {
  if ((0, j.ZF)() && Bn.firstChild && Bn.firstChild.nodeName === "CAPTION") {
    return Bn.offsetHeight + Bn.firstChild.offsetHeight;
  } else {
    return Bn.offsetHeight;
  }
}
export function WS(Bn) {
  return Bn.clientHeight || Bn.innerHeight;
}
export function x9(Bn) {
  return Bn.clientWidth || Bn.innerWidth;
}
export function qK(Bn) {
  var oi = Bn.ownerDocument;
  if (Bn.selectionStart) {
    return Bn.selectionStart;
  }
  if (oi.selection) {
    Bn.focus();
    var fi = oi.selection.createRange();
    if (fi === null) {
      return 0;
    }
    var bn = Bn.createTextRange();
    var pn = bn.duplicate();
    bn.moveToBookmark(fi.getBookmark());
    pn.setEndPoint("EndToStart", bn);
    return pn.text.length;
  }
  return 0;
}
export function mR() {
  var Bn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var oi = Bn.document;
  var fi = "";
  if (Bn.getSelection) {
    fi = Bn.getSelection().toString();
  } else if (oi.selection && oi.selection.type !== "Control") {
    fi = oi.selection.createRange().text;
  }
  return fi;
}
export function a7() {
  var Bn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var oi = Bn.document;
  if (Bn.getSelection) {
    if (Bn.getSelection().empty) {
      Bn.getSelection().empty();
    } else if (Bn.getSelection().removeAllRanges) {
      Bn.getSelection().removeAllRanges();
    }
  } else if (oi.selection) {
    oi.selection.empty();
  }
}
export function Mq(Bn, oi, fi) {
  if (fi === undefined) {
    fi = oi;
  }
  if (Bn.setSelectionRange) {
    Bn.focus();
    try {
      Bn.setSelectionRange(oi, fi);
    } catch {
      var bn = Bn.parentNode;
      var pn = bn.style.display;
      bn.style.display = "block";
      Bn.setSelectionRange(oi, fi);
      bn.style.display = pn;
    }
  }
}
function Ur() {
  var Bn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var oi = Bn.createElement("div");
  oi.style.height = "200px";
  oi.style.width = "100%";
  var fi = Bn.createElement("div");
  fi.style.boxSizing = "content-box";
  fi.style.height = "150px";
  fi.style.left = "0px";
  fi.style.overflow = "hidden";
  fi.style.position = "absolute";
  fi.style.top = "0px";
  fi.style.width = "200px";
  fi.style.visibility = "hidden";
  fi.appendChild(oi);
  (Bn.body || Bn.documentElement).appendChild(fi);
  var bn = oi.offsetWidth;
  fi.style.overflow = "scroll";
  var pn = oi.offsetWidth;
  if (bn === pn) {
    pn = fi.clientWidth;
  }
  (Bn.body || Bn.documentElement).removeChild(fi);
  return bn - pn;
}
export function np() {
  var Bn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  if (vr === undefined) {
    vr = Ur(Bn);
  }
  return vr;
}
export function do(Bn) {
  return Bn.offsetWidth !== Bn.clientWidth;
}
export function vw(Bn) {
  return Bn.offsetHeight !== Bn.clientHeight;
}
export function I2(Bn, oi, fi) {
  if ((0, G.D8)()) {
    Bn.style.top = fi;
    Bn.style.left = oi;
  } else if ((0, G.G6)()) {
    Bn.style["-webkit-transform"] = `translate3d(${oi},${fi},0)`;
  } else {
    Bn.style.transform = `translate3d(${oi},${fi},0)`;
  }
}
export function WH(Bn) {
  if (Bn.style.transform && Bn.style.transform !== "") {
    Bn.style.transform = "";
  } else if (Bn.style["-webkit-transform"] && Bn.style["-webkit-transform"] !== "") {
    Bn.style["-webkit-transform"] = "";
  }
}
export function u7(Bn) {
  return Bn && (["INPUT", "SELECT", "TEXTAREA"].indexOf(Bn.nodeName) > -1 || Bn.contentEditable === "true");
}
export function pV(Bn) {
  return u7(Bn) && Bn.hasAttribute("data-hot-input") === false;
}
export function hd(Bn) {
  if (!pV(Bn.ownerDocument.activeElement)) {
    Bn.select();
  }
}