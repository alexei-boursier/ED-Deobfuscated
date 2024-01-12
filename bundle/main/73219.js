/**!
       * Sortable 1.15.0
       * @author	RubaXa   <trash@rubaxa.org>
       * @author	owenm    <owen23355@gmail.com>
       * @license MIT
       */
import * as i from "94650";
function t(Xt, ut) {
  var vt = Object.keys(Xt);
  if (Object.getOwnPropertySymbols) {
    var Zt = Object.getOwnPropertySymbols(Xt);
    if (ut) {
      Zt = Zt.filter(function (kn) {
        return Object.getOwnPropertyDescriptor(Xt, kn).enumerable;
      });
    }
    vt.push.apply(vt, Zt);
  }
  return vt;
}
function b(Xt) {
  for (var ut = 1; ut < arguments.length; ut++) {
    var vt = arguments[ut] ?? {};
    if (ut % 2) {
      t(Object(vt), true).forEach(function (Zt) {
        M(Xt, Zt, vt[Zt]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(Xt, Object.getOwnPropertyDescriptors(vt));
    } else {
      t(Object(vt)).forEach(function (Zt) {
        Object.defineProperty(Xt, Zt, Object.getOwnPropertyDescriptor(vt, Zt));
      });
    }
  }
  return Xt;
}
function k(Xt) {
  return (k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (ut) {
    return typeof ut;
  } : function (ut) {
    if (ut && typeof Symbol == "function" && ut.constructor === Symbol && ut !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof ut;
    }
  })(Xt);
}
function M(Xt, ut, vt) {
  if (ut in Xt) {
    Object.defineProperty(Xt, ut, {
      value: vt,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    Xt[ut] = vt;
  }
  return Xt;
}
function v() {
  v = Object.assign || function (Xt) {
    for (var ut = 1; ut < arguments.length; ut++) {
      var vt = arguments[ut];
      for (var Zt in vt) {
        if (Object.prototype.hasOwnProperty.call(vt, Zt)) {
          Xt[Zt] = vt[Zt];
        }
      }
    }
    return Xt;
  };
  return v.apply(this, arguments);
}
function w(Xt, ut) {
  if (Xt == null) {
    return {};
  }
  var Zt;
  var kn;
  var vt = function C(Xt, ut) {
    if (Xt == null) {
      return {};
    }
    var kn;
    var Zn;
    var vt = {};
    var Zt = Object.keys(Xt);
    for (Zn = 0; Zn < Zt.length; Zn++) {
      if (ut.indexOf(kn = Zt[Zn]) < 0) {
        vt[kn] = Xt[kn];
      }
    }
    return vt;
  }(Xt, ut);
  if (Object.getOwnPropertySymbols) {
    var Zn = Object.getOwnPropertySymbols(Xt);
    for (kn = 0; kn < Zn.length; kn++) {
      if (ut.indexOf(Zt = Zn[kn]) < 0) {
        if (!!Object.prototype.propertyIsEnumerable.call(Xt, Zt)) {
          vt[Zt] = Xt[Zt];
        }
      }
    }
  }
  return vt;
}
function B(Xt) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!navigator.userAgent.match(Xt);
  }
}
var F = B(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Z = B(/Edge/i);
var X = B(/firefox/i);
var le = B(/safari/i) && !B(/chrome/i) && !B(/android/i);
var fe = B(/iP(ad|od|hone)/i);
var q = B(/chrome/i) && B(/android/i);
var j = {
  capture: false,
  passive: false
};
function G(Xt, ut, vt) {
  Xt.addEventListener(ut, vt, !F && j);
}
function se(Xt, ut, vt) {
  Xt.removeEventListener(ut, vt, !F && j);
}
function W(Xt, ut) {
  if (ut) {
    if (ut[0] === ">") {
      ut = ut.substring(1);
    }
    if (Xt) {
      try {
        if (Xt.matches) {
          return Xt.matches(ut);
        }
        if (Xt.msMatchesSelector) {
          return Xt.msMatchesSelector(ut);
        }
        if (Xt.webkitMatchesSelector) {
          return Xt.webkitMatchesSelector(ut);
        }
      } catch {
        return false;
      }
    }
    return false;
  }
}
function Pe(Xt) {
  if (Xt.host && Xt !== document && Xt.host.nodeType) {
    return Xt.host;
  } else {
    return Xt.parentNode;
  }
}
function Le(Xt, ut, vt, Zt) {
  if (Xt) {
    vt = vt || document;
    do {
      if (ut != null && (ut[0] === ">" ? Xt.parentNode === vt && W(Xt, ut) : W(Xt, ut)) || Zt && Xt === vt) {
        return Xt;
      }
      if (Xt === vt) {
        break;
      }
    } while (Xt = Pe(Xt));
  }
  return null;
}
var Yt;
var he = /\s+/g;
function pe(Xt, ut, vt) {
  if (Xt && ut) {
    if (Xt.classList) {
      Xt.classList[vt ? "add" : "remove"](ut);
    } else {
      var Zt = (" " + Xt.className + " ").replace(he, " ").replace(" " + ut + " ", " ");
      Xt.className = (Zt + (vt ? " " + ut : "")).replace(he, " ");
    }
  }
}
function re(Xt, ut, vt) {
  var Zt = Xt && Xt.style;
  if (Zt) {
    if (vt === undefined) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        vt = document.defaultView.getComputedStyle(Xt, "");
      } else if (Xt.currentStyle) {
        vt = Xt.currentStyle;
      }
      if (ut === undefined) {
        return vt;
      } else {
        return vt[ut];
      }
    }
    if (!(ut in Zt) && ut.indexOf("webkit") === -1) {
      ut = "-webkit-" + ut;
    }
    Zt[ut] = vt + (typeof vt == "string" ? "" : "px");
  }
}
function Re(Xt, ut) {
  var vt = "";
  if (typeof Xt == "string") {
    vt = Xt;
  } else {
    do {
      var Zt = re(Xt, "transform");
      if (Zt && Zt !== "none") {
        vt = Zt + " " + vt;
      }
    } while (!ut && (Xt = Xt.parentNode));
  }
  var kn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return kn && new kn(vt);
}
function Ge(Xt, ut, vt) {
  if (Xt) {
    var Zt = Xt.getElementsByTagName(ut);
    var kn = 0;
    var Zn = Zt.length;
    if (vt) {
      for (; kn < Zn; kn++) {
        vt(Zt[kn], kn);
      }
    }
    return Zt;
  }
  return [];
}
function Ue() {
  return document.scrollingElement || document.documentElement;
}
function ot(Xt, ut, vt, Zt, kn) {
  if (Xt.getBoundingClientRect || Xt === window) {
    var Zn;
    var li;
    var Oi;
    var Xi;
    var nr;
    var mr;
    var Jr;
    if (Xt !== window && Xt.parentNode && Xt !== Ue()) {
      li = (Zn = Xt.getBoundingClientRect()).top;
      Oi = Zn.left;
      Xi = Zn.bottom;
      nr = Zn.right;
      mr = Zn.height;
      Jr = Zn.width;
    } else {
      li = 0;
      Oi = 0;
      Xi = window.innerHeight;
      nr = window.innerWidth;
      mr = window.innerHeight;
      Jr = window.innerWidth;
    }
    if ((ut || vt) && Xt !== window && (kn = kn || Xt.parentNode, !F)) {
      do {
        if (kn && kn.getBoundingClientRect && (re(kn, "transform") !== "none" || vt && re(kn, "position") !== "static")) {
          var Ss = kn.getBoundingClientRect();
          li -= Ss.top + parseInt(re(kn, "border-top-width"));
          Oi -= Ss.left + parseInt(re(kn, "border-left-width"));
          Xi = li + Zn.height;
          nr = Oi + Zn.width;
          break;
        }
      } while (kn = kn.parentNode);
    }
    if (Zt && Xt !== window) {
      var Ys = Re(kn || Xt);
      var xo = Ys && Ys.a;
      var Ls = Ys && Ys.d;
      if (Ys) {
        Xi = (li /= Ls) + (mr /= Ls);
        nr = (Oi /= xo) + (Jr /= xo);
      }
    }
    return {
      top: li,
      left: Oi,
      bottom: Xi,
      right: nr,
      width: Jr,
      height: mr
    };
  }
}
function st(Xt, ut, vt) {
  for (var Zt = De(Xt, true), kn = ot(Xt)[ut]; Zt;) {
    var Zn = ot(Zt)[vt];
    if (!(vt === "top" || vt === "left" ? kn >= Zn : kn <= Zn)) {
      return Zt;
    }
    if (Zt === Ue()) {
      break;
    }
    Zt = De(Zt, false);
  }
  return false;
}
function rt(Xt, ut, vt, Zt) {
  for (var kn = 0, Zn = 0, li = Xt.children; Zn < li.length;) {
    if (li[Zn].style.display !== "none" && li[Zn] !== Zr.ghost && (Zt || li[Zn] !== Zr.dragged) && Le(li[Zn], vt.draggable, Xt, false)) {
      if (kn === ut) {
        return li[Zn];
      }
      kn++;
    }
    Zn++;
  }
  return null;
}
function Oe(Xt, ut) {
  for (var vt = Xt.lastElementChild; vt && (vt === Zr.ghost || re(vt, "display") === "none" || ut && !W(vt, ut));) {
    vt = vt.previousElementSibling;
  }
  return vt || null;
}
function Ee(Xt, ut) {
  var vt = 0;
  if (!Xt || !Xt.parentNode) {
    return -1;
  }
  for (; Xt = Xt.previousElementSibling;) {
    if (Xt.nodeName.toUpperCase() !== "TEMPLATE" && Xt !== Zr.clone && (!ut || W(Xt, ut))) {
      vt++;
    }
  }
  return vt;
}
function ke(Xt) {
  var ut = 0;
  var vt = 0;
  var Zt = Ue();
  if (Xt) {
    do {
      var kn = Re(Xt);
      ut += Xt.scrollLeft * kn.a;
      vt += Xt.scrollTop * kn.d;
    } while (Xt !== Zt && (Xt = Xt.parentNode));
  }
  return [ut, vt];
}
function De(Xt, ut) {
  if (!Xt || !Xt.getBoundingClientRect) {
    return Ue();
  }
  var vt = Xt;
  var Zt = false;
  do {
    if (vt.clientWidth < vt.scrollWidth || vt.clientHeight < vt.scrollHeight) {
      var kn = re(vt);
      if (vt.clientWidth < vt.scrollWidth && (kn.overflowX == "auto" || kn.overflowX == "scroll") || vt.clientHeight < vt.scrollHeight && (kn.overflowY == "auto" || kn.overflowY == "scroll")) {
        if (!vt.getBoundingClientRect || vt === document.body) {
          return Ue();
        }
        if (Zt || ut) {
          return vt;
        }
        Zt = true;
      }
    }
  } while (vt = vt.parentNode);
  return Ue();
}
function It(Xt, ut) {
  return Math.round(Xt.top) === Math.round(ut.top) && Math.round(Xt.left) === Math.round(ut.left) && Math.round(Xt.height) === Math.round(ut.height) && Math.round(Xt.width) === Math.round(ut.width);
}
function Dn(Xt, ut) {
  return function () {
    if (!Yt) {
      var vt = arguments;
      var Zt = this;
      if (vt.length === 1) {
        Xt.call(Zt, vt[0]);
      } else {
        Xt.apply(Zt, vt);
      }
      Yt = setTimeout(function () {
        Yt = undefined;
      }, ut);
    }
  };
}
function lt(Xt, ut, vt) {
  Xt.scrollLeft += ut;
  Xt.scrollTop += vt;
}
function et(Xt) {
  var ut = window.Polymer;
  var vt = window.jQuery || window.Zepto;
  if (ut && ut.dom) {
    return ut.dom(Xt).cloneNode(true);
  } else if (vt) {
    return vt(Xt).clone(true)[0];
  } else {
    return Xt.cloneNode(true);
  }
}
var Lt = "Sortable" + new Date().getTime();
var ne = [];
var me = {
  initializeByDefault: true
};
var it = {
  mount: function (ut) {
    for (var vt in me) {
      if (me.hasOwnProperty(vt) && !(vt in ut)) {
        ut[vt] = me[vt];
      }
    }
    ne.forEach(function (Zt) {
      if (Zt.pluginName === ut.pluginName) {
        throw `Sortable: Cannot mount plugin ${ut.pluginName} more than once`;
      }
    });
    ne.push(ut);
  },
  pluginEvent: function (ut, vt, Zt) {
    var kn = this;
    this.eventCanceled = false;
    Zt.cancel = function () {
      kn.eventCanceled = true;
    };
    var Zn = ut + "Global";
    ne.forEach(function (li) {
      if (!!vt[li.pluginName]) {
        if (vt[li.pluginName][Zn]) {
          vt[li.pluginName][Zn](b({
            sortable: vt
          }, Zt));
        }
        if (vt.options[li.pluginName] && vt[li.pluginName][ut]) {
          vt[li.pluginName][ut](b({
            sortable: vt
          }, Zt));
        }
      }
    });
  },
  initializePlugins: function (ut, vt, Zt, kn) {
    ne.forEach(function (Oi) {
      var Xi = Oi.pluginName;
      if (ut.options[Xi] || Oi.initializeByDefault) {
        var nr = new Oi(ut, vt, ut.options);
        nr.sortable = ut;
        nr.options = ut.options;
        ut[Xi] = nr;
        v(Zt, nr.defaults);
      }
    });
    for (var Zn in ut.options) {
      if (ut.options.hasOwnProperty(Zn)) {
        var li = this.modifyOption(ut, Zn, ut.options[Zn]);
        if (typeof li !== "undefined") {
          ut.options[Zn] = li;
        }
      }
    }
  },
  getEventProperties: function (ut, vt) {
    var Zt = {};
    ne.forEach(function (kn) {
      if (typeof kn.eventProperties == "function") {
        v(Zt, kn.eventProperties.call(vt[kn.pluginName], ut));
      }
    });
    return Zt;
  },
  modifyOption: function (ut, vt, Zt) {
    var kn;
    ne.forEach(function (Zn) {
      if (!!ut[Zn.pluginName]) {
        if (Zn.optionListeners && typeof Zn.optionListeners[vt] == "function") {
          kn = Zn.optionListeners[vt].call(ut[Zn.pluginName], Zt);
        }
      }
    });
    return kn;
  }
};
var Ut = ["evt"];
function Ze(ut, vt) {
  var Zt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var kn = Zt.evt;
  var Zn = w(Zt, Ut);
  it.pluginEvent.bind(Zr)(ut, vt, b({
    dragEl: yt,
    parentEl: Wt,
    ghostEl: hn,
    rootEl: Kt,
    nextEl: on,
    lastDownEl: Rn,
    cloneEl: In,
    cloneHidden: di,
    dragStarted: Tr,
    putSortable: Ar,
    activeSortable: Zr.active,
    originalEvent: kn,
    oldIndex: Si,
    oldDraggableIndex: $i,
    newIndex: Zi,
    newDraggableIndex: Qi,
    hideGhostForTarget: fa,
    unhideGhostForTarget: bo,
    cloneNowHidden: function () {
      di = true;
    },
    cloneNowShown: function () {
      di = false;
    },
    dispatchSortableEvent: function (Oi) {
      pt({
        sortable: vt,
        name: Oi,
        originalEvent: kn
      });
    }
  }, Zn));
}
function pt(Xt) {
  (function bt(Xt) {
    var ut = Xt.sortable;
    var vt = Xt.rootEl;
    var Zt = Xt.name;
    var kn = Xt.targetEl;
    var Zn = Xt.cloneEl;
    var li = Xt.toEl;
    var Oi = Xt.fromEl;
    var Xi = Xt.oldIndex;
    var nr = Xt.newIndex;
    var mr = Xt.oldDraggableIndex;
    var Jr = Xt.newDraggableIndex;
    var Ss = Xt.originalEvent;
    var Ys = Xt.putSortable;
    var xo = Xt.extraEventProperties;
    if (ut = ut || vt && vt[Lt]) {
      var Ls;
      var sr = ut.options;
      var wa = "on" + Zt.charAt(0).toUpperCase() + Zt.substr(1);
      if (!window.CustomEvent || F || Z) {
        (Ls = document.createEvent("Event")).initEvent(Zt, true, true);
      } else {
        Ls = new CustomEvent(Zt, {
          bubbles: true,
          cancelable: true
        });
      }
      Ls.to = li || vt;
      Ls.from = Oi || vt;
      Ls.item = kn || vt;
      Ls.clone = Zn;
      Ls.oldIndex = Xi;
      Ls.newIndex = nr;
      Ls.oldDraggableIndex = mr;
      Ls.newDraggableIndex = Jr;
      Ls.originalEvent = Ss;
      Ls.pullMode = Ys ? Ys.lastPutMode : undefined;
      var ao = b(b({}, xo), it.getEventProperties(Zt, ut));
      for (var sl in ao) {
        Ls[sl] = ao[sl];
      }
      if (vt) {
        vt.dispatchEvent(Ls);
      }
      if (sr[wa]) {
        sr[wa].call(ut, Ls);
      }
    }
  })(b({
    putSortable: Ar,
    cloneEl: In,
    targetEl: yt,
    rootEl: Kt,
    oldIndex: Si,
    oldDraggableIndex: $i,
    newIndex: Zi,
    newDraggableIndex: Qi
  }, Xt));
}
var yt;
var Wt;
var hn;
var Kt;
var on;
var Rn;
var In;
var di;
var Si;
var Zi;
var $i;
var Qi;
var br;
var Ar;
var rs;
var vs;
var wo;
var so;
var sa;
var js;
var Tr;
var ns;
var pr;
var fi;
var bn;
var vr = false;
var Ur = false;
var Br = [];
var Bn = false;
var oi = false;
var pn = [];
var An = false;
var si = [];
var Di = typeof document !== "undefined";
var dr = fe;
var Vr = Z || F ? "cssFloat" : "float";
var Or = Di && !q && !fe && "draggable" in document.createElement("div");
var is = function () {
  if (Di) {
    if (F) {
      return false;
    }
    var Xt = document.createElement("x");
    Xt.style.cssText = "pointer-events:auto";
    return Xt.style.pointerEvents === "auto";
  }
}();
function _o(ut, vt) {
  var Zt = re(ut);
  var kn = parseInt(Zt.width) - parseInt(Zt.paddingLeft) - parseInt(Zt.paddingRight) - parseInt(Zt.borderLeftWidth) - parseInt(Zt.borderRightWidth);
  var Zn = rt(ut, 0, vt);
  var li = rt(ut, 1, vt);
  var Oi = Zn && re(Zn);
  var Xi = li && re(li);
  var nr = Oi && parseInt(Oi.marginLeft) + parseInt(Oi.marginRight) + ot(Zn).width;
  var mr = Xi && parseInt(Xi.marginLeft) + parseInt(Xi.marginRight) + ot(li).width;
  if (Zt.display === "flex") {
    if (Zt.flexDirection === "column" || Zt.flexDirection === "column-reverse") {
      return "vertical";
    } else {
      return "horizontal";
    }
  } else if (Zt.display === "grid") {
    if (Zt.gridTemplateColumns.split(" ").length <= 1) {
      return "vertical";
    } else {
      return "horizontal";
    }
  } else if (Zn && Oi.float && Oi.float !== "none") {
    if (!li || Xi.clear !== "both" && Xi.clear !== (Oi.float === "left" ? "left" : "right")) {
      return "horizontal";
    } else {
      return "vertical";
    }
  } else if (Zn && (Oi.display === "block" || Oi.display === "flex" || Oi.display === "table" || Oi.display === "grid" || nr >= kn && Zt[Vr] === "none" || li && Zt[Vr] === "none" && nr + mr > kn)) {
    return "vertical";
  } else {
    return "horizontal";
  }
}
function No(ut) {
  function vt(Zn, li) {
    return function (Oi, Xi, nr, mr) {
      if (Zn == null && (li || Oi.options.group.name && Xi.options.group.name && Oi.options.group.name === Xi.options.group.name)) {
        return true;
      }
      if (Zn == null || Zn === false) {
        return false;
      }
      if (li && Zn === "clone") {
        return Zn;
      }
      if (typeof Zn == "function") {
        return vt(Zn(Oi, Xi, nr, mr), li)(Oi, Xi, nr, mr);
      }
      var Ss = (li ? Oi : Xi).options.group.name;
      return Zn === true || typeof Zn == "string" && Zn === Ss || Zn.join && Zn.indexOf(Ss) > -1;
    };
  }
  var Zt = {};
  var kn = ut.group;
  if (!kn || k(kn) != "object") {
    kn = {
      name: kn
    };
  }
  Zt.name = kn.name;
  Zt.checkPull = vt(kn.pull, true);
  Zt.checkPut = vt(kn.put);
  Zt.revertClone = kn.revertClone;
  ut.group = Zt;
}
function fa() {
  if (!is && hn) {
    re(hn, "display", "none");
  }
}
function bo() {
  if (!is && hn) {
    re(hn, "display", "");
  }
}
if (Di && !q) {
  document.addEventListener("click", function (Xt) {
    if (Ur) {
      Xt.preventDefault();
      if (Xt.stopPropagation) {
        Xt.stopPropagation();
      }
      if (Xt.stopImmediatePropagation) {
        Xt.stopImmediatePropagation();
      }
      Ur = false;
      return false;
    }
  }, true);
}
function ks(ut) {
  if (yt) {
    var vt = function (ut, vt) {
      var Zt;
      Br.some(function (kn) {
        var Zn = kn[Lt].options.emptyInsertThreshold;
        if (Zn && !Oe(kn)) {
          var li = ot(kn);
          if (ut >= li.left - Zn && ut <= li.right + Zn && vt >= li.top - Zn && vt <= li.bottom + Zn) {
            return Zt = kn;
          }
        }
      });
      return Zt;
    }((ut = ut.touches ? ut.touches[0] : ut).clientX, ut.clientY);
    if (vt) {
      var Zt = {};
      for (var kn in ut) {
        if (ut.hasOwnProperty(kn)) {
          Zt[kn] = ut[kn];
        }
      }
      Zt.target = Zt.rootEl = vt;
      Zt.preventDefault = undefined;
      Zt.stopPropagation = undefined;
      vt[Lt]._onDragOver(Zt);
    }
  }
}
function Gs(ut) {
  if (yt) {
    yt.parentNode[Lt]._isOutsideThisEl(ut.target);
  }
}
function Zr(Xt, ut) {
  if (!Xt || !Xt.nodeType || Xt.nodeType !== 1) {
    throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(Xt)}`;
  }
  this.el = Xt;
  this.options = ut = v({}, ut);
  Xt[Lt] = this;
  var vt = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(Xt.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: null,
    removeCloneOnHide: true,
    direction: function () {
      return _o(Xt, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function (li, Oi) {
      li.setData("Text", Oi.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Zr.supportPointer !== false && "PointerEvent" in window && !le,
    emptyInsertThreshold: 5
  };
  it.initializePlugins(this, Xt, vt);
  for (var Zt in vt) {
    if (!(Zt in ut)) {
      ut[Zt] = vt[Zt];
    }
  }
  No(ut);
  for (var kn in this) {
    if (kn.charAt(0) === "_" && typeof this[kn] == "function") {
      this[kn] = this[kn].bind(this);
    }
  }
  this.nativeDraggable = !ut.forceFallback && Or;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (ut.supportPointer) {
    G(Xt, "pointerdown", this._onTapStart);
  } else {
    G(Xt, "mousedown", this._onTapStart);
    G(Xt, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    G(Xt, "dragover", this);
    G(Xt, "dragenter", this);
  }
  Br.push(this.el);
  if (ut.store && ut.store.get) {
    this.sort(ut.store.get(this) || []);
  }
  v(this, function ft() {
    var ut;
    var Xt = [];
    return {
      captureAnimationState: function () {
        Xt = [];
        if (this.options.animation) {
          [].slice.call(this.el.children).forEach(function (kn) {
            if (re(kn, "display") !== "none" && kn !== Zr.ghost) {
              Xt.push({
                target: kn,
                rect: ot(kn)
              });
              var Zn = b({}, Xt[Xt.length - 1].rect);
              if (kn.thisAnimationDuration) {
                var li = Re(kn, true);
                if (li) {
                  Zn.top -= li.f;
                  Zn.left -= li.e;
                }
              }
              kn.fromRect = Zn;
            }
          });
        }
      },
      addAnimationState: function (Zt) {
        Xt.push(Zt);
      },
      removeAnimationState: function (Zt) {
        Xt.splice(function Be(Xt, ut) {
          for (var vt in Xt) {
            if (Xt.hasOwnProperty(vt)) {
              for (var Zt in ut) {
                if (ut.hasOwnProperty(Zt) && ut[Zt] === Xt[vt][Zt]) {
                  return Number(vt);
                }
              }
            }
          }
          return -1;
        }(Xt, {
          target: Zt
        }), 1);
      },
      animateAll: function (Zt) {
        var kn = this;
        if (!this.options.animation) {
          clearTimeout(ut);
          if (typeof Zt == "function") {
            Zt();
          }
          return;
        }
        var Zn = false;
        var li = 0;
        Xt.forEach(function (Oi) {
          var Xi = 0;
          var nr = Oi.target;
          var mr = nr.fromRect;
          var Jr = ot(nr);
          var Ss = nr.prevFromRect;
          var Ys = nr.prevToRect;
          var xo = Oi.rect;
          var Ls = Re(nr, true);
          if (Ls) {
            Jr.top -= Ls.f;
            Jr.left -= Ls.e;
          }
          nr.toRect = Jr;
          if (nr.thisAnimationDuration && It(Ss, Jr) && !It(mr, Jr) && (xo.top - Jr.top) / (xo.left - Jr.left) == (mr.top - Jr.top) / (mr.left - Jr.left)) {
            Xi = function Me(Xt, ut, vt, Zt) {
              return Math.sqrt(Math.pow(ut.top - Xt.top, 2) + Math.pow(ut.left - Xt.left, 2)) / Math.sqrt(Math.pow(ut.top - vt.top, 2) + Math.pow(ut.left - vt.left, 2)) * Zt.animation;
            }(xo, Ss, Ys, kn.options);
          }
          if (!It(Jr, mr)) {
            nr.prevFromRect = mr;
            nr.prevToRect = Jr;
            Xi ||= kn.options.animation;
            kn.animate(nr, xo, Jr, Xi);
          }
          if (Xi) {
            Zn = true;
            li = Math.max(li, Xi);
            clearTimeout(nr.animationResetTimer);
            nr.animationResetTimer = setTimeout(function () {
              nr.animationTime = 0;
              nr.prevFromRect = null;
              nr.fromRect = null;
              nr.prevToRect = null;
              nr.thisAnimationDuration = null;
            }, Xi);
            nr.thisAnimationDuration = Xi;
          }
        });
        clearTimeout(ut);
        if (Zn) {
          ut = setTimeout(function () {
            if (typeof Zt == "function") {
              Zt();
            }
          }, li);
        } else if (typeof Zt == "function") {
          Zt();
        }
        Xt = [];
      },
      animate: function (Zt, kn, Zn, li) {
        if (li) {
          re(Zt, "transition", "");
          re(Zt, "transform", "");
          var Oi = Re(this.el);
          var mr = (kn.left - Zn.left) / (Oi && Oi.a || 1);
          var Jr = (kn.top - Zn.top) / (Oi && Oi.d || 1);
          Zt.animatingX = !!mr;
          Zt.animatingY = !!Jr;
          re(Zt, "transform", "translate3d(" + mr + "px," + Jr + "px,0)");
          this.forRepaintDummy = function qe(Xt) {
            return Xt.offsetWidth;
          }(Zt);
          re(Zt, "transition", "transform " + li + "ms" + (this.options.easing ? " " + this.options.easing : ""));
          re(Zt, "transform", "translate3d(0,0,0)");
          if (typeof Zt.animated == "number") {
            clearTimeout(Zt.animated);
          }
          Zt.animated = setTimeout(function () {
            re(Zt, "transition", "");
            re(Zt, "transform", "");
            Zt.animated = false;
            Zt.animatingX = false;
            Zt.animatingY = false;
          }, li);
        }
      }
    };
  }());
}
function ya(Xt, ut, vt, Zt, kn, Zn, li, Oi) {
  var Xi;
  var Jr;
  var nr = Xt[Lt];
  var mr = nr.options.onMove;
  if (!window.CustomEvent || F || Z) {
    (Xi = document.createEvent("Event")).initEvent("move", true, true);
  } else {
    Xi = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  }
  Xi.to = ut;
  Xi.from = Xt;
  Xi.dragged = vt;
  Xi.draggedRect = Zt;
  Xi.related = kn || ut;
  Xi.relatedRect = Zn || ot(ut);
  Xi.willInsertAfter = Oi;
  Xi.originalEvent = li;
  Xt.dispatchEvent(Xi);
  if (mr) {
    Jr = mr.call(nr, Xi, li);
  }
  return Jr;
}
function Ko(Xt) {
  Xt.draggable = false;
}
function qi() {
  An = false;
}
function ja(Xt) {
  for (var ut = Xt.tagName + Xt.className + Xt.src + Xt.href + Xt.textContent, vt = ut.length, Zt = 0; vt--;) {
    Zt += ut.charCodeAt(vt);
  }
  return Zt.toString(36);
}
function ta(Xt) {
  return setTimeout(Xt, 0);
}
function Fr(Xt) {
  return clearTimeout(Xt);
}
Zr.prototype = {
  constructor: Zr,
  _isOutsideThisEl: function (ut) {
    if (!this.el.contains(ut) && ut !== this.el) {
      ns = null;
    }
  },
  _getDirection: function (ut, vt) {
    if (typeof this.options.direction == "function") {
      return this.options.direction.call(this, ut, vt, yt);
    } else {
      return this.options.direction;
    }
  },
  _onTapStart: function (ut) {
    if (ut.cancelable) {
      var vt = this;
      var Zt = this.el;
      var kn = this.options;
      var Zn = kn.preventOnFilter;
      var li = ut.type;
      var Oi = ut.touches && ut.touches[0] || ut.pointerType && ut.pointerType === "touch" && ut;
      var Xi = (Oi || ut).target;
      var nr = ut.target.shadowRoot && (ut.path && ut.path[0] || ut.composedPath && ut.composedPath()[0]) || Xi;
      var mr = kn.filter;
      (function la(Xt) {
        si.length = 0;
        for (var ut = Xt.getElementsByTagName("input"), vt = ut.length; vt--;) {
          var Zt = ut[vt];
          if (Zt.checked) {
            si.push(Zt);
          }
        }
      })(Zt);
      if (!yt && (!/mousedown|pointerdown/.test(li) || ut.button === 0) && !kn.disabled && !nr.isContentEditable && (this.nativeDraggable || !le || !Xi || Xi.tagName.toUpperCase() !== "SELECT") && (!(Xi = Le(Xi, kn.draggable, Zt, false)) || !Xi.animated) && Rn !== Xi) {
        Si = Ee(Xi);
        $i = Ee(Xi, kn.draggable);
        if (typeof mr == "function") {
          if (mr.call(this, ut, Xi, this)) {
            pt({
              sortable: vt,
              rootEl: nr,
              name: "filter",
              targetEl: Xi,
              toEl: Zt,
              fromEl: Zt
            });
            Ze("filter", vt, {
              evt: ut
            });
            if (Zn && ut.cancelable) {
              ut.preventDefault();
            }
            return;
          }
        } else if (mr &&= mr.split(",").some(function (Jr) {
          if (Jr = Le(nr, Jr.trim(), Zt, false)) {
            pt({
              sortable: vt,
              rootEl: Jr,
              name: "filter",
              targetEl: Xi,
              fromEl: Zt,
              toEl: Zt
            });
            Ze("filter", vt, {
              evt: ut
            });
            return true;
          }
        })) {
          if (Zn && ut.cancelable) {
            ut.preventDefault();
          }
          return;
        }
        if (!kn.handle || !!Le(nr, kn.handle, Zt, false)) {
          this._prepareDragStart(ut, Oi, Xi);
        }
      }
    }
  },
  _prepareDragStart: function (ut, vt, Zt) {
    var Xi;
    var kn = this;
    var Zn = kn.el;
    var li = kn.options;
    var Oi = Zn.ownerDocument;
    if (Zt && !yt && Zt.parentNode === Zn) {
      var nr = ot(Zt);
      Kt = Zn;
      Wt = (yt = Zt).parentNode;
      on = yt.nextSibling;
      Rn = Zt;
      br = li.group;
      Zr.dragged = yt;
      sa = (rs = {
        target: yt,
        clientX: (vt || ut).clientX,
        clientY: (vt || ut).clientY
      }).clientX - nr.left;
      js = rs.clientY - nr.top;
      this._lastX = (vt || ut).clientX;
      this._lastY = (vt || ut).clientY;
      yt.style["will-change"] = "all";
      Xi = function () {
        Ze("delayEnded", kn, {
          evt: ut
        });
        if (Zr.eventCanceled) {
          kn._onDrop();
        } else {
          kn._disableDelayedDragEvents();
          if (!X && kn.nativeDraggable) {
            yt.draggable = true;
          }
          kn._triggerDragStart(ut, vt);
          pt({
            sortable: kn,
            name: "choose",
            originalEvent: ut
          });
          pe(yt, li.chosenClass, true);
        }
      };
      li.ignore.split(",").forEach(function (mr) {
        Ge(yt, mr.trim(), Ko);
      });
      G(Oi, "dragover", ks);
      G(Oi, "mousemove", ks);
      G(Oi, "touchmove", ks);
      G(Oi, "mouseup", kn._onDrop);
      G(Oi, "touchend", kn._onDrop);
      G(Oi, "touchcancel", kn._onDrop);
      if (X && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        yt.draggable = true;
      }
      Ze("delayStart", this, {
        evt: ut
      });
      if (!li.delay || li.delayOnTouchOnly && !vt || this.nativeDraggable && (Z || F)) {
        Xi();
      } else {
        if (Zr.eventCanceled) {
          this._onDrop();
          return;
        }
        G(Oi, "mouseup", kn._disableDelayedDrag);
        G(Oi, "touchend", kn._disableDelayedDrag);
        G(Oi, "touchcancel", kn._disableDelayedDrag);
        G(Oi, "mousemove", kn._delayedDragTouchMoveHandler);
        G(Oi, "touchmove", kn._delayedDragTouchMoveHandler);
        if (li.supportPointer) {
          G(Oi, "pointermove", kn._delayedDragTouchMoveHandler);
        }
        kn._dragStartTimer = setTimeout(Xi, li.delay);
      }
    }
  },
  _delayedDragTouchMoveHandler: function (ut) {
    var vt = ut.touches ? ut.touches[0] : ut;
    if (Math.max(Math.abs(vt.clientX - this._lastX), Math.abs(vt.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function () {
    if (yt) {
      Ko(yt);
    }
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var ut = this.el.ownerDocument;
    se(ut, "mouseup", this._disableDelayedDrag);
    se(ut, "touchend", this._disableDelayedDrag);
    se(ut, "touchcancel", this._disableDelayedDrag);
    se(ut, "mousemove", this._delayedDragTouchMoveHandler);
    se(ut, "touchmove", this._delayedDragTouchMoveHandler);
    se(ut, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (ut, vt) {
    vt = vt || ut.pointerType == "touch" && ut;
    if (!this.nativeDraggable || vt) {
      G(document, this.options.supportPointer ? "pointermove" : vt ? "touchmove" : "mousemove", this._onTouchMove);
    } else {
      G(yt, "dragend", this);
      G(Kt, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        ta(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch {}
  },
  _dragStarted: function (ut, vt) {
    vr = false;
    if (Kt && yt) {
      Ze("dragStarted", this, {
        evt: vt
      });
      if (this.nativeDraggable) {
        G(document, "dragover", Gs);
      }
      var Zt = this.options;
      if (!ut) {
        pe(yt, Zt.dragClass, false);
      }
      pe(yt, Zt.ghostClass, true);
      Zr.active = this;
      if (ut) {
        this._appendGhost();
      }
      pt({
        sortable: this,
        name: "start",
        originalEvent: vt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function () {
    if (vs) {
      this._lastX = vs.clientX;
      this._lastY = vs.clientY;
      fa();
      for (var ut = document.elementFromPoint(vs.clientX, vs.clientY), vt = ut; ut && ut.shadowRoot && (ut = ut.shadowRoot.elementFromPoint(vs.clientX, vs.clientY)) !== vt;) {
        vt = ut;
      }
      yt.parentNode[Lt]._isOutsideThisEl(ut);
      if (vt) {
        do {
          if (vt[Lt] && vt[Lt]._onDragOver({
            clientX: vs.clientX,
            clientY: vs.clientY,
            target: ut,
            rootEl: vt
          }) && !this.options.dragoverBubble) {
            break;
          }
          ut = vt;
        } while (vt = vt.parentNode);
      }
      bo();
    }
  },
  _onTouchMove: function (ut) {
    if (rs) {
      var vt = this.options;
      var Zt = vt.fallbackTolerance;
      var kn = vt.fallbackOffset;
      var Zn = ut.touches ? ut.touches[0] : ut;
      var li = hn && Re(hn, true);
      var Oi = hn && li && li.a;
      var Xi = hn && li && li.d;
      var nr = dr && bn && ke(bn);
      var mr = (Zn.clientX - rs.clientX + kn.x) / (Oi || 1) + (nr ? nr[0] - pn[0] : 0) / (Oi || 1);
      var Jr = (Zn.clientY - rs.clientY + kn.y) / (Xi || 1) + (nr ? nr[1] - pn[1] : 0) / (Xi || 1);
      if (!Zr.active && !vr) {
        if (Zt && Math.max(Math.abs(Zn.clientX - this._lastX), Math.abs(Zn.clientY - this._lastY)) < Zt) {
          return;
        }
        this._onDragStart(ut, true);
      }
      if (hn) {
        if (li) {
          li.e += mr - (wo || 0);
          li.f += Jr - (so || 0);
        } else {
          li = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: mr,
            f: Jr
          };
        }
        var Ss = `matrix(${li.a},${li.b},${li.c},${li.d},${li.e},${li.f})`;
        re(hn, "webkitTransform", Ss);
        re(hn, "mozTransform", Ss);
        re(hn, "msTransform", Ss);
        re(hn, "transform", Ss);
        wo = mr;
        so = Jr;
        vs = Zn;
      }
      if (ut.cancelable) {
        ut.preventDefault();
      }
    }
  },
  _appendGhost: function () {
    if (!hn) {
      var ut = this.options.fallbackOnBody ? document.body : Kt;
      var vt = ot(yt, true, dr, true, ut);
      var Zt = this.options;
      if (dr) {
        for (bn = ut; re(bn, "position") === "static" && re(bn, "transform") === "none" && bn !== document;) {
          bn = bn.parentNode;
        }
        if (bn !== document.body && bn !== document.documentElement) {
          if (bn === document) {
            bn = Ue();
          }
          vt.top += bn.scrollTop;
          vt.left += bn.scrollLeft;
        } else {
          bn = Ue();
        }
        pn = ke(bn);
      }
      pe(hn = yt.cloneNode(true), Zt.ghostClass, false);
      pe(hn, Zt.fallbackClass, true);
      pe(hn, Zt.dragClass, true);
      re(hn, "transition", "");
      re(hn, "transform", "");
      re(hn, "box-sizing", "border-box");
      re(hn, "margin", 0);
      re(hn, "top", vt.top);
      re(hn, "left", vt.left);
      re(hn, "width", vt.width);
      re(hn, "height", vt.height);
      re(hn, "opacity", "0.8");
      re(hn, "position", dr ? "absolute" : "fixed");
      re(hn, "zIndex", "100000");
      re(hn, "pointerEvents", "none");
      Zr.ghost = hn;
      ut.appendChild(hn);
      re(hn, "transform-origin", sa / parseInt(hn.style.width) * 100 + "% " + js / parseInt(hn.style.height) * 100 + "%");
    }
  },
  _onDragStart: function (ut, vt) {
    var Zt = this;
    var kn = ut.dataTransfer;
    var Zn = Zt.options;
    Ze("dragStart", this, {
      evt: ut
    });
    if (Zr.eventCanceled) {
      this._onDrop();
    } else {
      Ze("setupClone", this);
      if (!Zr.eventCanceled) {
        (In = et(yt)).removeAttribute("id");
        In.draggable = false;
        In.style["will-change"] = "";
        this._hideClone();
        pe(In, this.options.chosenClass, false);
        Zr.clone = In;
      }
      Zt.cloneId = ta(function () {
        Ze("clone", Zt);
        if (!Zr.eventCanceled) {
          if (!Zt.options.removeCloneOnHide) {
            Kt.insertBefore(In, yt);
          }
          Zt._hideClone();
          pt({
            sortable: Zt,
            name: "clone"
          });
        }
      });
      if (!vt) {
        pe(yt, Zn.dragClass, true);
      }
      if (vt) {
        Ur = true;
        Zt._loopId = setInterval(Zt._emulateDragOver, 50);
      } else {
        se(document, "mouseup", Zt._onDrop);
        se(document, "touchend", Zt._onDrop);
        se(document, "touchcancel", Zt._onDrop);
        if (kn) {
          kn.effectAllowed = "move";
          if (Zn.setData) {
            Zn.setData.call(Zt, kn, yt);
          }
        }
        G(document, "drop", Zt);
        re(yt, "transform", "translateZ(0)");
      }
      vr = true;
      Zt._dragStartId = ta(Zt._dragStarted.bind(Zt, vt, ut));
      G(document, "selectstart", Zt);
      Tr = true;
      if (le) {
        re(document.body, "user-select", "none");
      }
    }
  },
  _onDragOver: function (ut) {
    var kn;
    var Zn;
    var li;
    var Ys;
    var vt = this.el;
    var Zt = ut.target;
    var Oi = this.options;
    var Xi = Oi.group;
    var nr = Zr.active;
    var mr = br === Xi;
    var Jr = Oi.sort;
    var Ss = Ar || nr;
    var xo = this;
    var Ls = false;
    if (!An) {
      if (ut.preventDefault !== undefined && ut.cancelable) {
        ut.preventDefault();
      }
      Zt = Le(Zt, Oi.draggable, vt, true);
      sr("dragOver");
      if (Zr.eventCanceled) {
        return Ls;
      }
      if (yt.contains(ut.target) || Zt.animated && Zt.animatingX && Zt.animatingY || xo._ignoreWhileAnimating === Zt) {
        return ao(false);
      }
      Ur = false;
      if (nr && !Oi.disabled && (mr ? Jr || (li = Wt !== Kt) : Ar === this || (this.lastPutMode = br.checkPull(this, nr, yt, ut)) && Xi.checkPut(this, nr, yt, ut))) {
        Ys = this._getDirection(ut, Zt) === "vertical";
        kn = ot(yt);
        sr("dragOverValid");
        if (Zr.eventCanceled) {
          return Ls;
        }
        if (li) {
          Wt = Kt;
          wa();
          this._hideClone();
          sr("revert");
          if (!Zr.eventCanceled) {
            if (on) {
              Kt.insertBefore(yt, on);
            } else {
              Kt.appendChild(yt);
            }
          }
          return ao(true);
        }
        var Rr = Oe(vt, Oi.draggable);
        if (!Rr || function ea(Xt, ut, vt) {
          var Zt = ot(Oe(vt.el, vt.options.draggable));
          if (ut) {
            return Xt.clientX > Zt.right + 10 || Xt.clientX <= Zt.right && Xt.clientY > Zt.bottom && Xt.clientX >= Zt.left;
          } else {
            return Xt.clientX > Zt.right && Xt.clientY > Zt.top || Xt.clientX <= Zt.right && Xt.clientY > Zt.bottom + 10;
          }
        }(ut, Ys, this) && !Rr.animated) {
          if (Rr === yt) {
            return ao(false);
          }
          if (Rr && vt === ut.target) {
            Zt = Rr;
          }
          if (Zt) {
            Zn = ot(Zt);
          }
          if (ya(Kt, vt, yt, kn, Zt, Zn, ut, !!Zt) !== false) {
            wa();
            if (Rr && Rr.nextSibling) {
              vt.insertBefore(yt, Rr.nextSibling);
            } else {
              vt.appendChild(yt);
            }
            Wt = vt;
            sl();
            return ao(true);
          }
        } else if (Rr && function qo(Xt, ut, vt) {
          var Zt = ot(rt(vt.el, 0, vt.options, true));
          if (ut) {
            return Xt.clientX < Zt.left - 10 || Xt.clientY < Zt.top && Xt.clientX < Zt.right;
          } else {
            return Xt.clientY < Zt.top - 10 || Xt.clientY < Zt.bottom && Xt.clientX < Zt.left;
          }
        }(ut, Ys, this)) {
          var el = rt(vt, 0, Oi, true);
          if (el === yt) {
            return ao(false);
          }
          Zn = ot(Zt = el);
          if (ya(Kt, vt, yt, kn, Zt, Zn, ut, false) !== false) {
            wa();
            vt.insertBefore(yt, el);
            Wt = vt;
            sl();
            return ao(true);
          }
        } else if (Zt.parentNode === vt) {
          Zn = ot(Zt);
          var Fa;
          var Mr;
          var wn;
          var Xe = yt.parentNode !== vt;
          var $t = !function (ut, vt, Zt) {
            var kn = Zt ? ut.left : ut.top;
            var Oi = Zt ? vt.left : vt.top;
            return kn === Oi || (Zt ? ut.right : ut.bottom) === (Zt ? vt.right : vt.bottom) || kn + (Zt ? ut.width : ut.height) / 2 === Oi + (Zt ? vt.width : vt.height) / 2;
          }(yt.animated && yt.toRect || kn, Zt.animated && Zt.toRect || Zn, Ys);
          var _e = Ys ? "top" : "left";
          var xt = st(Zt, "top", "top") || st(yt, "top", "top");
          var gn = xt ? xt.scrollTop : undefined;
          if (ns !== Zt) {
            Mr = Zn[_e];
            Bn = false;
            oi = !$t && Oi.invertSwap || Xe;
          }
          Fa = function Oa(Xt, ut, vt, Zt, kn, Zn, li, Oi) {
            var Xi = Zt ? Xt.clientY : Xt.clientX;
            var nr = Zt ? vt.height : vt.width;
            var mr = Zt ? vt.top : vt.left;
            var Jr = Zt ? vt.bottom : vt.right;
            var Ss = false;
            if (!li) {
              if (Oi && fi < nr * kn) {
                if (!Bn && (pr === 1 ? Xi > mr + nr * Zn / 2 : Xi < Jr - nr * Zn / 2)) {
                  Bn = true;
                }
                if (Bn) {
                  Ss = true;
                } else if (pr === 1 ? Xi < mr + fi : Xi > Jr - fi) {
                  return -pr;
                }
              } else if (Xi > mr + nr * (1 - kn) / 2 && Xi < Jr - nr * (1 - kn) / 2) {
                return function qa(Xt) {
                  if (Ee(yt) < Ee(Xt)) {
                    return 1;
                  } else {
                    return -1;
                  }
                }(ut);
              }
            }
            if ((Ss = Ss || li) && (Xi < mr + nr * Zn / 2 || Xi > Jr - nr * Zn / 2)) {
              if (Xi > mr + nr / 2) {
                return 1;
              } else {
                return -1;
              }
            } else {
              return 0;
            }
          }(ut, Zt, Zn, Ys, $t ? 1 : Oi.swapThreshold, Oi.invertedSwapThreshold ?? Oi.swapThreshold, oi, ns === Zt);
          if (Fa !== 0) {
            var tr = Ee(yt);
            do {
              wn = Wt.children[tr -= Fa];
            } while (wn && (re(wn, "display") === "none" || wn === hn));
          }
          if (Fa === 0 || wn === Zt) {
            return ao(false);
          }
          ns = Zt;
          pr = Fa;
          var Do = Zt.nextElementSibling;
          var Ji = false;
          var hi = ya(Kt, vt, yt, kn, Zt, Zn, ut, Ji = Fa === 1);
          if (hi !== false) {
            if (hi === 1 || hi === -1) {
              Ji = hi === 1;
            }
            An = true;
            setTimeout(qi, 30);
            wa();
            if (Ji && !Do) {
              vt.appendChild(yt);
            } else {
              Zt.parentNode.insertBefore(yt, Ji ? Do : Zt);
            }
            if (xt) {
              lt(xt, 0, gn - xt.scrollTop);
            }
            Wt = yt.parentNode;
            if (Mr !== undefined && !oi) {
              fi = Math.abs(Mr - ot(Zt)[_e]);
            }
            sl();
            return ao(true);
          }
        }
        if (vt.contains(yt)) {
          return ao(false);
        }
      }
      return false;
    }
    function sr(oa, Ns) {
      Ze(oa, xo, b({
        evt: ut,
        isOwner: mr,
        axis: Ys ? "vertical" : "horizontal",
        revert: li,
        dragRect: kn,
        targetRect: Zn,
        canSort: Jr,
        fromSortable: Ss,
        target: Zt,
        completed: ao,
        onMove: function (ht, dt) {
          return ya(Kt, vt, yt, kn, ht, ot(ht), ut, dt);
        },
        changed: sl
      }, Ns));
    }
    function wa() {
      sr("dragOverAnimationCapture");
      xo.captureAnimationState();
      if (xo !== Ss) {
        Ss.captureAnimationState();
      }
    }
    function ao(oa) {
      sr("dragOverCompleted", {
        insertion: oa
      });
      if (oa) {
        if (mr) {
          nr._hideClone();
        } else {
          nr._showClone(xo);
        }
        if (xo !== Ss) {
          pe(yt, Ar ? Ar.options.ghostClass : nr.options.ghostClass, false);
          pe(yt, Oi.ghostClass, true);
        }
        if (Ar !== xo && xo !== Zr.active) {
          Ar = xo;
        } else if (xo === Zr.active && Ar) {
          Ar = null;
        }
        if (Ss === xo) {
          xo._ignoreWhileAnimating = Zt;
        }
        xo.animateAll(function () {
          sr("dragOverAnimationComplete");
          xo._ignoreWhileAnimating = null;
        });
        if (xo !== Ss) {
          Ss.animateAll();
          Ss._ignoreWhileAnimating = null;
        }
      }
      if (Zt === yt && !yt.animated || Zt === vt && !Zt.animated) {
        ns = null;
      }
      if (!Oi.dragoverBubble && !ut.rootEl && Zt !== document) {
        yt.parentNode[Lt]._isOutsideThisEl(ut.target);
        if (!oa) {
          ks(ut);
        }
      }
      if (!Oi.dragoverBubble && ut.stopPropagation) {
        ut.stopPropagation();
      }
      return Ls = true;
    }
    function sl() {
      Zi = Ee(yt);
      Qi = Ee(yt, Oi.draggable);
      pt({
        sortable: xo,
        name: "change",
        toEl: vt,
        newIndex: Zi,
        newDraggableIndex: Qi,
        originalEvent: ut
      });
    }
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    se(document, "mousemove", this._onTouchMove);
    se(document, "touchmove", this._onTouchMove);
    se(document, "pointermove", this._onTouchMove);
    se(document, "dragover", ks);
    se(document, "mousemove", ks);
    se(document, "touchmove", ks);
  },
  _offUpEvents: function () {
    var ut = this.el.ownerDocument;
    se(ut, "mouseup", this._onDrop);
    se(ut, "touchend", this._onDrop);
    se(ut, "pointerup", this._onDrop);
    se(ut, "touchcancel", this._onDrop);
    se(document, "selectstart", this);
  },
  _onDrop: function (ut) {
    var vt = this.el;
    var Zt = this.options;
    Zi = Ee(yt);
    Qi = Ee(yt, Zt.draggable);
    Ze("drop", this, {
      evt: ut
    });
    Wt = yt && yt.parentNode;
    Zi = Ee(yt);
    Qi = Ee(yt, Zt.draggable);
    if (!Zr.eventCanceled) {
      vr = false;
      oi = false;
      Bn = false;
      clearInterval(this._loopId);
      clearTimeout(this._dragStartTimer);
      Fr(this.cloneId);
      Fr(this._dragStartId);
      if (this.nativeDraggable) {
        se(document, "drop", this);
        se(vt, "dragstart", this._onDragStart);
      }
      this._offMoveEvents();
      this._offUpEvents();
      if (le) {
        re(document.body, "user-select", "");
      }
      re(yt, "transform", "");
      if (ut) {
        if (Tr) {
          if (ut.cancelable) {
            ut.preventDefault();
          }
          if (!Zt.dropBubble) {
            ut.stopPropagation();
          }
        }
        if (hn && hn.parentNode) {
          hn.parentNode.removeChild(hn);
        }
        if ((Kt === Wt || Ar && Ar.lastPutMode !== "clone") && In && In.parentNode) {
          In.parentNode.removeChild(In);
        }
        if (yt) {
          if (this.nativeDraggable) {
            se(yt, "dragend", this);
          }
          Ko(yt);
          yt.style["will-change"] = "";
          if (Tr && !vr) {
            pe(yt, Ar ? Ar.options.ghostClass : this.options.ghostClass, false);
          }
          pe(yt, this.options.chosenClass, false);
          pt({
            sortable: this,
            name: "unchoose",
            toEl: Wt,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: ut
          });
          if (Kt !== Wt) {
            if (Zi >= 0) {
              pt({
                rootEl: Wt,
                name: "add",
                toEl: Wt,
                fromEl: Kt,
                originalEvent: ut
              });
              pt({
                sortable: this,
                name: "remove",
                toEl: Wt,
                originalEvent: ut
              });
              pt({
                rootEl: Wt,
                name: "sort",
                toEl: Wt,
                fromEl: Kt,
                originalEvent: ut
              });
              pt({
                sortable: this,
                name: "sort",
                toEl: Wt,
                originalEvent: ut
              });
            }
            if (Ar) {
              Ar.save();
            }
          } else if (Zi !== Si && Zi >= 0) {
            pt({
              sortable: this,
              name: "update",
              toEl: Wt,
              originalEvent: ut
            });
            pt({
              sortable: this,
              name: "sort",
              toEl: Wt,
              originalEvent: ut
            });
          }
          if (Zr.active) {
            if (Zi == null || Zi === -1) {
              Zi = Si;
              Qi = $i;
            }
            pt({
              sortable: this,
              name: "end",
              toEl: Wt,
              originalEvent: ut
            });
            this.save();
          }
        }
      }
    }
    this._nulling();
  },
  _nulling: function () {
    Ze("nulling", this);
    Kt = yt = Wt = hn = on = In = Rn = di = rs = vs = Tr = Zi = Qi = Si = $i = ns = pr = Ar = br = Zr.dragged = Zr.ghost = Zr.clone = Zr.active = null;
    si.forEach(function (ut) {
      ut.checked = true;
    });
    si.length = wo = so = 0;
  },
  handleEvent: function (ut) {
    switch (ut.type) {
      case "drop":
      case "dragend":
        this._onDrop(ut);
        break;
      case "dragenter":
      case "dragover":
        if (yt) {
          this._onDragOver(ut);
          (function ho(Xt) {
            if (Xt.dataTransfer) {
              Xt.dataTransfer.dropEffect = "move";
            }
            if (Xt.cancelable) {
              Xt.preventDefault();
            }
          })(ut);
        }
        break;
      case "selectstart":
        ut.preventDefault();
    }
  },
  toArray: function () {
    for (var vt, ut = [], Zt = this.el.children, kn = 0, Zn = Zt.length, li = this.options; kn < Zn; kn++) {
      if (Le(vt = Zt[kn], li.draggable, this.el, false)) {
        ut.push(vt.getAttribute(li.dataIdAttr) || ja(vt));
      }
    }
    return ut;
  },
  sort: function (ut, vt) {
    var Zt = {};
    var kn = this.el;
    this.toArray().forEach(function (Zn, li) {
      var Oi = kn.children[li];
      if (Le(Oi, this.options.draggable, kn, false)) {
        Zt[Zn] = Oi;
      }
    }, this);
    if (vt) {
      this.captureAnimationState();
    }
    ut.forEach(function (Zn) {
      if (Zt[Zn]) {
        kn.removeChild(Zt[Zn]);
        kn.appendChild(Zt[Zn]);
      }
    });
    if (vt) {
      this.animateAll();
    }
  },
  save: function () {
    var ut = this.options.store;
    if (ut && ut.set) {
      ut.set(this);
    }
  },
  closest: function (ut, vt) {
    return Le(ut, vt || this.options.draggable, this.el, false);
  },
  option: function (ut, vt) {
    var Zt = this.options;
    if (vt === undefined) {
      return Zt[ut];
    }
    var kn = it.modifyOption(this, ut, vt);
    Zt[ut] = typeof kn !== "undefined" ? kn : vt;
    if (ut === "group") {
      No(Zt);
    }
  },
  destroy: function () {
    Ze("destroy", this);
    var ut = this.el;
    ut[Lt] = null;
    se(ut, "mousedown", this._onTapStart);
    se(ut, "touchstart", this._onTapStart);
    se(ut, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      se(ut, "dragover", this);
      se(ut, "dragenter", this);
    }
    Array.prototype.forEach.call(ut.querySelectorAll("[draggable]"), function (vt) {
      vt.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    Br.splice(Br.indexOf(this.el), 1);
    this.el = ut = null;
  },
  _hideClone: function () {
    if (!di) {
      Ze("hideClone", this);
      if (Zr.eventCanceled) {
        return;
      }
      re(In, "display", "none");
      if (this.options.removeCloneOnHide && In.parentNode) {
        In.parentNode.removeChild(In);
      }
      di = true;
    }
  },
  _showClone: function (ut) {
    if (ut.lastPutMode === "clone") {
      if (di) {
        Ze("showClone", this);
        if (Zr.eventCanceled) {
          return;
        }
        if (yt.parentNode != Kt || this.options.group.revertClone) {
          if (on) {
            Kt.insertBefore(In, on);
          } else {
            Kt.appendChild(In);
          }
        } else {
          Kt.insertBefore(In, yt);
        }
        if (this.options.group.revertClone) {
          this.animate(yt, In);
        }
        re(In, "display", "");
        di = false;
      }
    } else {
      this._hideClone();
    }
  }
};
if (Di) {
  G(document, "touchmove", function (Xt) {
    if ((Zr.active || vr) && Xt.cancelable) {
      Xt.preventDefault();
    }
  });
}
Zr.utils = {
  on: G,
  off: se,
  css: re,
  find: Ge,
  is: function (ut, vt) {
    return !!Le(ut, vt, ut, false);
  },
  extend: function Qe(Xt, ut) {
    if (Xt && ut) {
      for (var vt in ut) {
        if (ut.hasOwnProperty(vt)) {
          Xt[vt] = ut[vt];
        }
      }
    }
    return Xt;
  },
  throttle: Dn,
  closest: Le,
  toggleClass: pe,
  clone: et,
  index: Ee,
  nextTick: ta,
  cancelNextTick: Fr,
  detectDirection: _o,
  getChild: rt
};
Zr.get = function (Xt) {
  return Xt[Lt];
};
Zr.mount = function () {
  for (var Xt = arguments.length, ut = new Array(Xt), vt = 0; vt < Xt; vt++) {
    ut[vt] = arguments[vt];
  }
  if (ut[0].constructor === Array) {
    ut = ut[0];
  }
  ut.forEach(function (Zt) {
    if (!Zt.prototype || !Zt.prototype.constructor) {
      throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(Zt)}`;
    }
    if (Zt.utils) {
      Zr.utils = b(b({}, Zr.utils), Zt.utils);
    }
    it.mount(Zt);
  });
};
Zr.create = function (Xt, ut) {
  return new Zr(Xt, ut);
};
Zr.version = "1.15.0";
var Ao;
var Pa;
var dl;
var qs;
var Fo;
var ha;
var Es = [];
var Po = false;
function Za() {
  Es.forEach(function (Xt) {
    clearInterval(Xt.pid);
  });
  Es = [];
}
function fl() {
  clearInterval(ha);
}
var Ml = Dn(function (Xt, ut, vt, Zt) {
  if (ut.scroll) {
    var mr;
    var kn = (Xt.touches ? Xt.touches[0] : Xt).clientX;
    var Zn = (Xt.touches ? Xt.touches[0] : Xt).clientY;
    var li = ut.scrollSensitivity;
    var Oi = ut.scrollSpeed;
    var Xi = Ue();
    var nr = false;
    if (Pa !== vt) {
      Pa = vt;
      Za();
      mr = ut.scrollFn;
      if ((Ao = ut.scroll) === true) {
        Ao = De(vt, true);
      }
    }
    var Jr = 0;
    var Ss = Ao;
    do {
      var Ys = Ss;
      var xo = ot(Ys);
      var Ls = xo.top;
      var sr = xo.bottom;
      var wa = xo.left;
      var ao = xo.right;
      var sl = xo.width;
      var Rr = xo.height;
      var el = undefined;
      var Fa = undefined;
      var Mr = Ys.scrollWidth;
      var Xe = Ys.scrollHeight;
      var $t = re(Ys);
      var _e = Ys.scrollLeft;
      var xt = Ys.scrollTop;
      if (Ys === Xi) {
        el = sl < Mr && ($t.overflowX === "auto" || $t.overflowX === "scroll" || $t.overflowX === "visible");
        Fa = Rr < Xe && ($t.overflowY === "auto" || $t.overflowY === "scroll" || $t.overflowY === "visible");
      } else {
        el = sl < Mr && ($t.overflowX === "auto" || $t.overflowX === "scroll");
        Fa = Rr < Xe && ($t.overflowY === "auto" || $t.overflowY === "scroll");
      }
      var gn = el && (Math.abs(ao - kn) <= li && _e + sl < Mr) - (Math.abs(wa - kn) <= li && !!_e);
      var wn = Fa && (Math.abs(sr - Zn) <= li && xt + Rr < Xe) - (Math.abs(Ls - Zn) <= li && !!xt);
      if (!Es[Jr]) {
        for (var tr = 0; tr <= Jr; tr++) {
          Es[tr] ||= {};
        }
      }
      if (Es[Jr].vx != gn || Es[Jr].vy != wn || Es[Jr].el !== Ys) {
        Es[Jr].el = Ys;
        Es[Jr].vx = gn;
        Es[Jr].vy = wn;
        clearInterval(Es[Jr].pid);
        if (gn != 0 || wn != 0) {
          nr = true;
          Es[Jr].pid = setInterval(function () {
            if (Zt && this.layer === 0) {
              Zr.active._onTouchMove(Fo);
            }
            var Do = Es[this.layer].vy ? Es[this.layer].vy * Oi : 0;
            var Ji = Es[this.layer].vx ? Es[this.layer].vx * Oi : 0;
            if (typeof mr != "function" || mr.call(Zr.dragged.parentNode[Lt], Ji, Do, Xt, Fo, Es[this.layer].el) === "continue") {
              lt(Es[this.layer].el, Ji, Do);
            }
          }.bind({
            layer: Jr
          }), 24);
        }
      }
      Jr++;
    } while (ut.bubbleScroll && Ss !== Xi && (Ss = De(Ss, false)));
    Po = nr;
  }
}, 30);
function ko(ut) {
  var vt = ut.originalEvent;
  var Zt = ut.putSortable;
  var kn = ut.dragEl;
  var li = ut.dispatchSortableEvent;
  var Xi = ut.unhideGhostForTarget;
  if (vt) {
    var nr = Zt || ut.activeSortable;
    (0, ut.hideGhostForTarget)();
    var mr = vt.changedTouches && vt.changedTouches.length ? vt.changedTouches[0] : vt;
    var Jr = document.elementFromPoint(mr.clientX, mr.clientY);
    Xi();
    if (nr && !nr.el.contains(Jr)) {
      li("spill");
      this.onSpill({
        dragEl: kn,
        putSortable: Zt
      });
    }
  }
}
function So() {}
function pa() {}
So.prototype = {
  startIndex: null,
  dragStart: function (ut) {
    this.startIndex = ut.oldDraggableIndex;
  },
  onSpill: function (ut) {
    var vt = ut.dragEl;
    var Zt = ut.putSortable;
    this.sortable.captureAnimationState();
    if (Zt) {
      Zt.captureAnimationState();
    }
    var kn = rt(this.sortable.el, this.startIndex, this.options);
    if (kn) {
      this.sortable.el.insertBefore(vt, kn);
    } else {
      this.sortable.el.appendChild(vt);
    }
    this.sortable.animateAll();
    if (Zt) {
      Zt.animateAll();
    }
  },
  drop: ko
};
v(So, {
  pluginName: "revertOnSpill"
});
pa.prototype = {
  onSpill: function (ut) {
    var vt = ut.dragEl;
    var kn = ut.putSortable || this.sortable;
    kn.captureAnimationState();
    if (vt.parentNode) {
      vt.parentNode.removeChild(vt);
    }
    kn.animateAll();
  },
  drop: ko
};
v(pa, {
  pluginName: "removeOnSpill"
});
Zr.mount(new function Ca() {
  function Xt() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var ut in this) {
      if (ut.charAt(0) === "_" && typeof this[ut] == "function") {
        this[ut] = this[ut].bind(this);
      }
    }
  }
  Xt.prototype = {
    dragStarted: function (vt) {
      var Zt = vt.originalEvent;
      if (this.sortable.nativeDraggable) {
        G(document, "dragover", this._handleAutoScroll);
      } else {
        G(document, this.options.supportPointer ? "pointermove" : Zt.touches ? "touchmove" : "mousemove", this._handleFallbackAutoScroll);
      }
    },
    dragOverCompleted: function (vt) {
      var Zt = vt.originalEvent;
      if (!this.options.dragOverBubble && !Zt.rootEl) {
        this._handleAutoScroll(Zt);
      }
    },
    drop: function () {
      if (this.sortable.nativeDraggable) {
        se(document, "dragover", this._handleAutoScroll);
      } else {
        se(document, "pointermove", this._handleFallbackAutoScroll);
        se(document, "touchmove", this._handleFallbackAutoScroll);
        se(document, "mousemove", this._handleFallbackAutoScroll);
      }
      fl();
      Za();
      (function Et() {
        clearTimeout(Yt);
        Yt = undefined;
      })();
    },
    nulling: function () {
      Fo = Pa = Ao = Po = ha = dl = qs = null;
      Es.length = 0;
    },
    _handleFallbackAutoScroll: function (vt) {
      this._handleAutoScroll(vt, true);
    },
    _handleAutoScroll: function (vt, Zt) {
      var kn = this;
      var Zn = (vt.touches ? vt.touches[0] : vt).clientX;
      var li = (vt.touches ? vt.touches[0] : vt).clientY;
      var Oi = document.elementFromPoint(Zn, li);
      Fo = vt;
      if (Zt || this.options.forceAutoScrollFallback || Z || F || le) {
        Ml(vt, this.options, Oi, Zt);
        var Xi = De(Oi, true);
        if (Po && (!ha || Zn !== dl || li !== qs)) {
          if (ha) {
            fl();
          }
          ha = setInterval(function () {
            var nr = De(document.elementFromPoint(Zn, li), true);
            if (nr !== Xi) {
              Xi = nr;
              Za();
            }
            Ml(vt, kn.options, nr, Zt);
          }, 10);
          dl = Zn;
          qs = li;
        }
      } else {
        if (!this.options.bubbleScroll || De(Oi, true) === Ue()) {
          Za();
          return;
        }
        Ml(vt, this.options, De(Oi, false), false);
      }
    }
  };
  return v(Xt, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}());
Zr.mount(pa, So);
const Gn = Zr;
class Lr {
  constructor(ut) {
    this.target = ut;
  }
  get isFormArray() {
    return !!this.target.at && !!this.target.insert && !!this.target.reset;
  }
  insert(ut, vt) {
    if (this.isFormArray) {
      this.target.insert(ut, vt);
    } else {
      this.target.splice(ut, 0, vt);
    }
  }
  get(ut) {
    if (this.isFormArray) {
      return this.target.at(ut);
    } else {
      return this.target[ut];
    }
  }
  remove(ut) {
    let vt;
    if (this.isFormArray) {
      vt = this.target.at(ut);
      this.target.removeAt(ut);
    } else {
      vt = this.target.splice(ut, 1)[0];
    }
    return vt;
  }
}
class Gr {
  constructor(ut) {
    this.bindings = ut.map(vt => new Lr(vt));
  }
  get provided() {
    return !!this.bindings.length;
  }
  injectIntoEvery(ut, vt) {
    this.bindings.forEach((Zt, kn) => Zt.insert(ut, vt[kn]));
  }
  getFromEvery(ut) {
    return this.bindings.map(vt => vt.get(ut));
  }
  extractFromEvery(ut) {
    return this.bindings.map(vt => vt.remove(ut));
  }
}
let zr = (() => {
  class Xt {}
  Xt.ɵfac = function (vt) {
    return new (vt || Xt)();
  };
  Xt.ɵprov = i.Yz7({
    token: Xt,
    factory: Xt.ɵfac,
    providedIn: "root"
  });
  return Xt;
})();
export let Q = (() => {
  class Xt {
    constructor(vt, Zt, kn, Zn, li) {
      this.globalConfig = vt;
      this.service = Zt;
      this.element = kn;
      this.zone = Zn;
      this.renderer = li;
      this.sortablejsInit = new i.vpe();
    }
    ngOnInit() {
      if (Gn && Gn.create) {
        this.create();
      }
    }
    ngOnChanges(vt) {
      const Zt = vt.sortablejsOptions;
      if (Zt && !Zt.isFirstChange()) {
        const kn = Zt.previousValue;
        const Zn = Zt.currentValue;
        Object.keys(Zn).forEach(li => {
          if (Zn[li] !== kn[li]) {
            this.sortableInstance.option(li, this.options[li]);
          }
        });
      }
    }
    ngOnDestroy() {
      if (this.sortableInstance) {
        this.sortableInstance.destroy();
      }
    }
    create() {
      const vt = this.sortablejsContainer ? this.element.nativeElement.querySelector(this.sortablejsContainer) : this.element.nativeElement;
      setTimeout(() => {
        this.sortableInstance = Gn.create(vt, this.options);
        this.sortablejsInit.emit(this.sortableInstance);
      }, 0);
    }
    getBindings() {
      if (this.edSortablejs) {
        if (this.edSortablejs instanceof Gr) {
          return this.edSortablejs;
        } else {
          return new Gr([this.edSortablejs]);
        }
      } else {
        return new Gr([]);
      }
    }
    get options() {
      return {
        ...this.optionsWithoutEvents,
        ...this.overridenOptions
      };
    }
    get optionsWithoutEvents() {
      return {
        ...(this.globalConfig || {}),
        ...(this.sortablejsOptions || {})
      };
    }
    proxyEvent(vt, ...Zt) {
      this.zone.run(() => {
        if (this.optionsWithoutEvents && this.optionsWithoutEvents[vt]) {
          this.optionsWithoutEvents[vt](...Zt);
        }
      });
    }
    get isCloning() {
      return this.sortableInstance.options.group.checkPull(this.sortableInstance, this.sortableInstance) === "clone";
    }
    clone(vt) {
      return (this.sortablejsCloneFunction || (Zt => Zt))(vt);
    }
    get overridenOptions() {
      return {
        onAdd: vt => {
          this.service.transfer = Zt => {
            this.getBindings().injectIntoEvery(vt.newIndex, Zt);
            this.proxyEvent("onAdd", vt);
          };
          this.proxyEvent("onAddOriginal", vt);
        },
        onRemove: vt => {
          const Zt = this.getBindings();
          if (Zt.provided) {
            if (this.isCloning) {
              this.service.transfer(Zt.getFromEvery(vt.oldIndex).map(kn => this.clone(kn)));
              this.renderer.removeChild(vt.item.parentNode, vt.item);
              this.renderer.insertBefore(vt.clone.parentNode, vt.item, vt.clone);
              this.renderer.removeChild(vt.clone.parentNode, vt.clone);
            } else {
              this.service.transfer(Zt.extractFromEvery(vt.oldIndex));
            }
            this.service.transfer = null;
          }
          this.proxyEvent("onRemove", vt);
        },
        onUpdate: vt => {
          const Zt = this.getBindings();
          const kn = (Xt => Xt.hasOwnProperty("newDraggableIndex") && Xt.hasOwnProperty("oldDraggableIndex") ? {
            new: Xt.newDraggableIndex,
            old: Xt.oldDraggableIndex
          } : {
            new: Xt.newIndex,
            old: Xt.oldIndex
          })(vt);
          Zt.injectIntoEvery(kn.new, Zt.extractFromEvery(kn.old));
          this.proxyEvent("onUpdate", vt);
        }
      };
    }
  }
  Xt.ɵfac = function (vt) {
    return new (vt || Xt)(i.Y36(Ki.W, 8), i.Y36(zr), i.Y36(i.SBq), i.Y36(i.R0b), i.Y36(i.Qsj));
  };
  Xt.ɵdir = i.lG2({
    type: Xt,
    selectors: [["", "edSortablejs", ""]],
    inputs: {
      edSortablejs: "edSortablejs",
      sortablejsContainer: "sortablejsContainer",
      sortablejsOptions: "sortablejsOptions",
      sortablejsCloneFunction: "sortablejsCloneFunction"
    },
    outputs: {
      sortablejsInit: "sortablejsInit"
    },
    features: [i.TTD]
  });
  return Xt;
})();