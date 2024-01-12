require("82526");
require("41817");
require("32165");
require("68309");
require("43371");
require("66992");
require("41539");
require("70189");
require("78783");
require("33948");
require("26699");
require("2707");
require("40561");
require("33161");
require("9653");
require("47042");
require("92222");
require("43290");
require("21249");
require("74916");
require("15306");
require("91038");
require("82772");
require("65069");
require("54747");
require("32564");
require("84633");
require("51532");
import * as he from "57969";
import * as pe from "75588";
import * as re from "6868";
import * as Re from "86675";
import * as Ge from "35873";
import * as Ue from "29664";
import * as st from "51173";
import * as rt from "94079";
import * as Oe from "67219";
import * as Ee from "18461";
import * as ke from "86719";
import * as Qe from "36701";
import * as It from "45265";
require("4129");
import * as Dn from "89552";
require("68304");
require("30489");
require("12419");
function ve(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Lt(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var qe = new WeakMap();
const ne = function () {
  function D(A, m, T, te, Se, ge) {
    var Dt = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
    ve(this, D);
    this.wtSettings = T;
    this.domBindings = m;
    this.wtTable = Se;
    this.selections = ge;
    this.parent = Dt;
    this.eventManager = te;
    this.facadeGetter = A;
    qe.set(this, {
      selectedCellBeforeTouchEnd: undefined,
      dblClickTimeout: [null, null],
      dblClickOrigin: [null, null]
    });
    this.registerEvents();
  }
  (function ft(D, A, m) {
    if (A) {
      Lt(D.prototype, A);
    }
    if (m) {
      Lt(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "registerEvents",
    value: function () {
      var m = this;
      this.eventManager.addEventListener(this.wtTable.holder, "contextmenu", function (Se) {
        return m.onContextMenu(Se);
      });
      this.eventManager.addEventListener(this.wtTable.TABLE, "mouseover", function (Se) {
        return m.onMouseOver(Se);
      });
      this.eventManager.addEventListener(this.wtTable.TABLE, "mouseout", function (Se) {
        return m.onMouseOut(Se);
      });
      function T() {
        m.eventManager.addEventListener(m.wtTable.holder, "touchstart", function (ge) {
          return m.onTouchStart(ge);
        });
        m.eventManager.addEventListener(m.wtTable.holder, "touchend", function (ge) {
          return m.onTouchEnd(ge);
        });
        m.momentumScrolling ||= {};
        m.eventManager.addEventListener(m.wtTable.holder, "scroll", function () {
          clearTimeout(m.momentumScrolling._timeout);
          if (!m.momentumScrolling.ongoing) {
            m.wtSettings.getSetting("onBeforeTouchScroll");
          }
          m.momentumScrolling.ongoing = true;
          m.momentumScrolling._timeout = setTimeout(function () {
            if (!m.touchApplied) {
              m.momentumScrolling.ongoing = false;
              m.wtSettings.getSetting("onAfterMomentumScroll");
            }
          }, 200);
        });
      }
      if ((0, Re.K1)()) {
        T();
      } else {
        if ((0, St.JS)()) {
          T();
        }
        m.eventManager.addEventListener(m.wtTable.holder, "mouseup", function (ge) {
          return m.onMouseUp(ge);
        });
        m.eventManager.addEventListener(m.wtTable.holder, "mousedown", function (ge) {
          return m.onMouseDown(ge);
        });
      }
    }
  }, {
    key: "selectedCellWasTouched",
    value: function (m) {
      var T = qe.get(this);
      var Se = this.parentCell(m).coords;
      if (T.selectedCellBeforeTouchEnd && Se) {
        var ge = [Se.row, T.selectedCellBeforeTouchEnd.from.row];
        var tn = [Se.col, T.selectedCellBeforeTouchEnd.from.col];
        return ge[0] === ge[1] && tn[0] === tn[1];
      }
      return false;
    }
  }, {
    key: "parentCell",
    value: function (m) {
      var T = {};
      var Se = (0, he.W6)(m, ["TD", "TH"], this.wtTable.TABLE);
      if (Se) {
        T.coords = this.wtTable.getCoords(Se);
        T.TD = Se;
      } else if ((0, he.pv)(m, "wtBorder") && (0, he.pv)(m, "current")) {
        T.coords = this.selections.getCell().cellRange.highlight;
        T.TD = this.wtTable.getCell(T.coords);
      } else if ((0, he.pv)(m, "wtBorder") && (0, he.pv)(m, "area") && this.selections.createOrGetArea().cellRange) {
        T.coords = this.selections.createOrGetArea().cellRange.to;
        T.TD = this.wtTable.getCell(T.coords);
      }
      return T;
    }
  }, {
    key: "onMouseDown",
    value: function (m) {
      var T = qe.get(this);
      var te = this.domBindings.rootDocument.activeElement;
      var Se = (0, pe.r$)(he.G_, m.target);
      var ge = m.target;
      if (ge !== te && Se(0) !== te && Se(1) !== te) {
        var Dt = this.parentCell(ge);
        if ((0, he.pv)(ge, "corner")) {
          this.wtSettings.getSetting("onCellCornerMouseDown", m, ge);
        } else if (Dt.TD && this.wtSettings.has("onCellMouseDown")) {
          this.callListener("onCellMouseDown", m, Dt.coords, Dt.TD);
        }
        if ((m.button === 0 || this.touchApplied) && Dt.TD) {
          T.dblClickOrigin[0] = Dt.TD;
          clearTimeout(T.dblClickTimeout[0]);
          T.dblClickTimeout[0] = setTimeout(function () {
            T.dblClickOrigin[0] = null;
          }, 1000);
        }
      }
    }
  }, {
    key: "onContextMenu",
    value: function (m) {
      if (this.wtSettings.has("onCellContextMenu")) {
        var T = this.parentCell(m.target);
        if (T.TD) {
          this.callListener("onCellContextMenu", m, T.coords, T.TD);
        }
      }
    }
  }, {
    key: "onMouseOver",
    value: function (m) {
      if (this.wtSettings.has("onCellMouseOver")) {
        var T = this.wtTable.TABLE;
        var te = (0, he.W6)(m.target, ["TD", "TH"], T);
        var Se = this.parent || this;
        if (te && te !== Se.lastMouseOver && (0, he.MO)(te, T)) {
          Se.lastMouseOver = te;
          this.callListener("onCellMouseOver", m, this.wtTable.getCoords(te), te);
        }
      }
    }
  }, {
    key: "onMouseOut",
    value: function (m) {
      if (this.wtSettings.has("onCellMouseOut")) {
        var T = this.wtTable.TABLE;
        var te = (0, he.W6)(m.target, ["TD", "TH"], T);
        var Se = (0, he.W6)(m.relatedTarget, ["TD", "TH"], T);
        if (te && te !== Se && (0, he.MO)(te, T)) {
          this.callListener("onCellMouseOut", m, this.wtTable.getCoords(te), te);
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function (m) {
      var T = qe.get(this);
      var te = this.parentCell(m.target);
      if (te.TD && this.wtSettings.has("onCellMouseUp")) {
        this.callListener("onCellMouseUp", m, te.coords, te.TD);
      }
      if (m.button === 0 || this.touchApplied) {
        if (te.TD === T.dblClickOrigin[0] && te.TD === T.dblClickOrigin[1]) {
          if ((0, he.pv)(m.target, "corner")) {
            this.callListener("onCellCornerDblClick", m, te.coords, te.TD);
          } else {
            this.callListener("onCellDblClick", m, te.coords, te.TD);
          }
          T.dblClickOrigin[0] = null;
          T.dblClickOrigin[1] = null;
        } else if (te.TD === T.dblClickOrigin[0]) {
          T.dblClickOrigin[1] = te.TD;
          clearTimeout(T.dblClickTimeout[1]);
          T.dblClickTimeout[1] = setTimeout(function () {
            T.dblClickOrigin[1] = null;
          }, 500);
        }
      }
    }
  }, {
    key: "onTouchStart",
    value: function (m) {
      qe.get(this).selectedCellBeforeTouchEnd = this.selections.getCell().cellRange;
      this.touchApplied = true;
      this.onMouseDown(m);
    }
  }, {
    key: "onTouchEnd",
    value: function (m) {
      var te = m.target;
      var Se = this.parentCell(te)?.coords;
      var ge = (0, re.$K)(Se) && Se.row >= 0 && Se.col >= 0;
      if (m.cancelable && ge && this.wtSettings.getSetting("isDataViewInstance")) {
        if ((0, Re.gn)() && ((0, Re.E6)() || (0, Re.iF)()) && this.selectedCellWasTouched(te) && !["A", "BUTTON", "INPUT"].includes(te.tagName)) {
          m.preventDefault();
        } else if (!this.selectedCellWasTouched(te)) {
          m.preventDefault();
        }
      }
      this.onMouseUp(m);
      this.touchApplied = false;
    }
  }, {
    key: "callListener",
    value: function (m, T, te, Se) {
      var ge = this.wtSettings.getSettingPure(m);
      if (ge) {
        ge(T, te, Se, this.facadeGetter());
      }
    }
  }, {
    key: "destroy",
    value: function () {
      var m = qe.get(this);
      clearTimeout(m.dblClickTimeout[0]);
      clearTimeout(m.dblClickTimeout[1]);
      this.eventManager.destroy();
    }
  }]);
  return D;
}();
function bt(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
const pt = function () {
  function D(A, m, T) {
    (function it(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.offset = A;
    this.total = m;
    this.countTH = T;
  }
  (function Ut(D, A, m) {
    if (A) {
      bt(D.prototype, A);
    }
    if (m) {
      bt(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "offsetted",
    value: function (m) {
      return m + this.offset;
    }
  }, {
    key: "unOffsetted",
    value: function (m) {
      return m - this.offset;
    }
  }, {
    key: "renderedToSource",
    value: function (m) {
      return this.offsetted(m);
    }
  }, {
    key: "sourceToRendered",
    value: function (m) {
      return this.unOffsetted(m);
    }
  }, {
    key: "offsettedTH",
    value: function (m) {
      return m - this.countTH;
    }
  }, {
    key: "unOffsettedTH",
    value: function (m) {
      return m + this.countTH;
    }
  }, {
    key: "visibleRowHeadedColumnToSourceColumn",
    value: function (m) {
      return this.renderedToSource(this.offsettedTH(m));
    }
  }, {
    key: "sourceColumnToVisibleRowHeadedColumn",
    value: function (m) {
      return this.unOffsettedTH(this.sourceToRendered(m));
    }
  }]);
  return D;
}();
function Wt(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
const on = function () {
  function D(A, m, T) {
    (function yt(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.offset = A;
    this.total = m;
    this.countTH = T;
  }
  (function hn(D, A, m) {
    if (A) {
      Wt(D.prototype, A);
    }
    if (m) {
      Wt(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "offsetted",
    value: function (m) {
      return m + this.offset;
    }
  }, {
    key: "unOffsetted",
    value: function (m) {
      return m - this.offset;
    }
  }, {
    key: "renderedToSource",
    value: function (m) {
      return this.offsetted(m);
    }
  }, {
    key: "sourceToRendered",
    value: function (m) {
      return this.unOffsetted(m);
    }
  }, {
    key: "offsettedTH",
    value: function (m) {
      return m - this.countTH;
    }
  }, {
    key: "unOffsettedTH",
    value: function (m) {
      return m + this.countTH;
    }
  }, {
    key: "visibleColHeadedRowToSourceRow",
    value: function (m) {
      return this.renderedToSource(this.offsettedTH(m));
    }
  }, {
    key: "sourceRowToVisibleColHeadedRow",
    value: function (m) {
      return this.unOffsettedTH(this.sourceToRendered(m));
    }
  }]);
  return D;
}();
function Zi(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Qi = function () {
  function D() {
    (function Si(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.currentSize = 0;
    this.nextSize = 0;
    this.currentOffset = 0;
    this.nextOffset = 0;
  }
  (function $i(D, A, m) {
    if (A) {
      Zi(D.prototype, A);
    }
    if (m) {
      Zi(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "setSize",
    value: function (m) {
      this.currentSize = this.nextSize;
      this.nextSize = m;
    }
  }, {
    key: "setOffset",
    value: function (m) {
      this.currentOffset = this.nextOffset;
      this.nextOffset = m;
    }
  }]);
  return D;
}();
function Ar(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Ur = function () {
  function D() {
    (function br(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.size = new Qi();
    this.workingSpace = 0;
    this.sharedSize = null;
  }
  (function vr(D, A, m) {
    if (A) {
      Ar(D.prototype, A);
    }
    if (m) {
      Ar(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "setSize",
    value: function (m) {
      this.size.setSize(m);
    }
  }, {
    key: "setOffset",
    value: function (m) {
      this.size.setOffset(m);
    }
  }, {
    key: "getViewSize",
    value: function () {
      return this.size;
    }
  }, {
    key: "isShared",
    value: function () {
      return this.sharedSize instanceof Qi;
    }
  }, {
    key: "isPlaceOn",
    value: function (m) {
      return this.workingSpace === m;
    }
  }, {
    key: "append",
    value: function (m) {
      this.workingSpace = 1;
      m.workingSpace = 2;
      this.sharedSize = m.getViewSize();
    }
  }, {
    key: "prepend",
    value: function (m) {
      this.workingSpace = 2;
      m.workingSpace = 1;
      this.sharedSize = m.getViewSize();
    }
  }]);
  return D;
}();
function rs(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var wo = function () {
  function D(A, m, T) {
    (function Br(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.rootNode = A;
    this.nodesPool = m;
    this.sizeSet = new Ur();
    this.childNodeType = T.toUpperCase();
    this.visualIndex = 0;
    this.collectedNodes = [];
  }
  (function vs(D, A, m) {
    if (A) {
      rs(D.prototype, A);
    }
    if (m) {
      rs(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "setSize",
    value: function (m) {
      this.sizeSet.setSize(m);
      return this;
    }
  }, {
    key: "setOffset",
    value: function (m) {
      this.sizeSet.setOffset(m);
      return this;
    }
  }, {
    key: "isSharedViewSet",
    value: function () {
      return this.sizeSet.isShared();
    }
  }, {
    key: "getNode",
    value: function (m) {
      if (m < this.collectedNodes.length) {
        return this.collectedNodes[m];
      } else {
        return null;
      }
    }
  }, {
    key: "getCurrentNode",
    value: function () {
      var m = this.collectedNodes.length;
      if (m > 0) {
        return this.collectedNodes[m - 1];
      } else {
        return null;
      }
    }
  }, {
    key: "getRenderedChildCount",
    value: function () {
      var m = this.rootNode;
      var T = this.sizeSet;
      var te = 0;
      if (this.isSharedViewSet()) {
        for (var Se = m.firstElementChild; Se;) {
          if (Se.tagName === this.childNodeType) {
            te += 1;
          } else if (T.isPlaceOn(1)) {
            break;
          }
          Se = Se.nextElementSibling;
        }
      } else {
        te = m.childElementCount;
      }
      return te;
    }
  }, {
    key: "start",
    value: function () {
      this.collectedNodes.length = 0;
      this.visualIndex = 0;
      for (var m = this.rootNode, T = this.sizeSet, te = this.isSharedViewSet(), ge = T.getViewSize().nextSize, Dt = this.getRenderedChildCount(); Dt < ge;) {
        var en = this.nodesPool();
        if (!te || te && T.isPlaceOn(2)) {
          m.appendChild(en);
        } else {
          m.insertBefore(en, m.firstChild);
        }
        Dt += 1;
      }
      for (var tn = te && T.isPlaceOn(1); Dt > ge;) {
        m.removeChild(tn ? m.firstChild : m.lastChild);
        Dt -= 1;
      }
    }
  }, {
    key: "render",
    value: function () {
      var m = this.rootNode;
      var T = this.sizeSet;
      var te = this.visualIndex;
      if (this.isSharedViewSet() && T.isPlaceOn(2)) {
        te += T.sharedSize.nextSize;
      }
      var Se = m.childNodes[te];
      if (Se.tagName !== this.childNodeType) {
        var ge = this.nodesPool();
        m.replaceChild(ge, Se);
        Se = ge;
      }
      this.collectedNodes.push(Se);
      this.visualIndex += 1;
    }
  }, {
    key: "end",
    value: function () {}
  }]);
  return D;
}();
function so(D) {
  return (so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function sa(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function js(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function pr(D, A) {
  return (pr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function oi(D, A) {
  if (A && (so(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function fi(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function pn(D) {
  return (pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var An = function (D) {
  (function ns(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      pr(D, A);
    }
  })(m, D);
  var A = function Bn(D) {
    var A = function bn() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = pn(D);
      if (A) {
        var Se = pn(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return oi(this, te);
    };
  }(m);
  function m() {
    sa(this, m);
    return A.apply(this, arguments);
  }
  (function Tr(D, A, m) {
    if (A) {
      js(D.prototype, A);
    }
    if (m) {
      js(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "prependView",
    value: function (te) {
      this.sizeSet.prepend(te.sizeSet);
      te.sizeSet.append(this.sizeSet);
      return this;
    }
  }, {
    key: "appendView",
    value: function (te) {
      this.sizeSet.append(te.sizeSet);
      te.sizeSet.prepend(this.sizeSet);
      return this;
    }
  }]);
  return m;
}(wo);
function Di(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Vr = function () {
  function D(A) {
    (function si(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.nodeType = A.toUpperCase();
  }
  (function dr(D, A, m) {
    if (A) {
      Di(D.prototype, A);
    }
    if (m) {
      Di(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "setRootDocument",
    value: function (m) {
      this.rootDocument = m;
    }
  }, {
    key: "obtain",
    value: function () {
      return this.rootDocument.createElement(this.nodeType);
    }
  }]);
  return D;
}();
function is(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var kr = function () {
  function D(A, m) {
    (function Or(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.nodesPool = typeof A == "string" ? new Vr(A) : null;
    this.nodeType = A;
    this.rootNode = m;
    this.table = null;
    this.renderedNodes = 0;
  }
  (function _o(D, A, m) {
    if (A) {
      is(D.prototype, A);
    }
    if (m) {
      is(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "setTable",
    value: function (m) {
      if (this.nodesPool) {
        this.nodesPool.setRootDocument(m.rootDocument);
      }
      this.table = m;
    }
  }, {
    key: "adjust",
    value: function () {}
  }, {
    key: "render",
    value: function () {}
  }]);
  return D;
}();
function Zs(D) {
  return (Zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function fa(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Gs(D, A) {
  return (Gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function ho(D, A) {
  if (A && (Zs(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function ya(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function qi(D) {
  return (qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var qo = function (D) {
  (function ks(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Gs(D, A);
    }
  })(m, D);
  var A = function Zr(D) {
    var A = function Ko() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = qi(D);
      if (A) {
        var Se = qi(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return ho(this, te);
    };
  }(m);
  function m() {
    var T;
    (function No(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (T = A.call(this, "TH")).orderViews = new WeakMap();
    T.sourceRowIndex = 0;
    return T;
  }
  (function bo(D, A, m) {
    if (A) {
      fa(D.prototype, A);
    }
    if (m) {
      fa(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "obtainOrderView",
    value: function (te) {
      var ge;
      var Se = this;
      if (this.orderViews.has(te)) {
        ge = this.orderViews.get(te);
      } else {
        ge = new An(te, function (Dt) {
          return Se.nodesPool.obtain(Se.sourceRowIndex, Dt);
        }, this.nodeType);
        this.orderViews.set(te, ge);
      }
      return ge;
    }
  }, {
    key: "render",
    value: function () {
      for (var te = this.table, Se = te.rowsToRender, ge = te.rowHeaderFunctions, Dt = te.rowHeadersCount, en = te.rows, tn = te.cells, vn = 0; vn < Se; vn++) {
        var Vn = this.table.renderedRowToSource(vn);
        var Qn = en.getRenderedNode(vn);
        this.sourceRowIndex = Vn;
        var ii = this.obtainOrderView(Qn);
        var _i = tn.obtainOrderView(Qn);
        ii.appendView(_i).setSize(Dt).setOffset(this.table.renderedColumnToSource(0)).start();
        for (var Li = 0; Li < Dt; Li++) {
          ii.render();
          var zi = ii.getCurrentNode();
          zi.className = "";
          zi.removeAttribute("style");
          ge[Li](Vn, zi, Li);
        }
        ii.end();
      }
    }
  }]);
  return m;
}(kr);
function ea(D) {
  return (ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function qa(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function ta(D, A) {
  return (ta = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Es(D, A) {
  if (A && (ea(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function Ao(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Po(D) {
  return (Po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var dl = function (D) {
  (function la(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      ta(D, A);
    }
  })(m, D);
  var A = function Fr(D) {
    var A = function Pa() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Po(D);
      if (A) {
        var Se = Po(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return Es(this, te);
    };
  }(m);
  function m(T) {
    (function Oa(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, null, T);
  }
  (function ja(D, A, m) {
    if (A) {
      qa(D.prototype, A);
    }
    if (m) {
      qa(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "adjust",
    value: function () {
      var te = this.table;
      var Se = te.columnHeadersCount;
      var Dt = this.rootNode.firstChild;
      if (Se) {
        for (var tn = this.table.columnsToRender + te.rowHeadersCount, vn = 0, Vn = Se; vn < Vn; vn++) {
          if (!(Dt = this.rootNode.childNodes[vn])) {
            Dt = this.table.rootDocument.createElement("tr");
            this.rootNode.appendChild(Dt);
          }
          this.renderedNodes = Dt.childNodes.length;
          for (; this.renderedNodes < tn;) {
            Dt.appendChild(this.table.rootDocument.createElement("th"));
            this.renderedNodes += 1;
          }
          for (; this.renderedNodes > tn;) {
            Dt.removeChild(Dt.lastChild);
            this.renderedNodes -= 1;
          }
        }
        var Qn = this.rootNode.childNodes.length;
        if (Qn > Se) {
          for (var ii = Se; ii < Qn; ii++) {
            this.rootNode.removeChild(this.rootNode.lastChild);
          }
        }
      } else if (Dt) {
        (0, he.cS)(Dt);
      }
    }
  }, {
    key: "render",
    value: function () {
      for (var te = this.table.columnHeadersCount, Se = 0; Se < te; Se += 1) {
        for (var ge = this.table, Dt = ge.columnHeaderFunctions, en = ge.columnsToRender, tn = ge.rowHeadersCount, vn = this.rootNode.childNodes[Se], Vn = tn * -1; Vn < en; Vn += 1) {
          var Qn = this.table.renderedColumnToSource(Vn);
          var ii = vn.childNodes[Vn + tn];
          ii.className = "";
          ii.removeAttribute("style");
          Dt[Se](Qn, ii, Se);
        }
      }
    }
  }]);
  return m;
}(kr);
function qs(D) {
  return (qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function ha(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function fl(D, A) {
  return (fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function ko(D, A) {
  if (A && (qs(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function So(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Ia(D) {
  return (Ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var hs;
var po = function (D) {
  (function Za(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      fl(D, A);
    }
  })(m, D);
  var A = function Ml(D) {
    var A = function pa() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Ia(D);
      if (A) {
        var Se = Ia(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return ko(this, te);
    };
  }(m);
  function m(T) {
    (function Fo(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, null, T);
  }
  (function Ca(D, A, m) {
    if (A) {
      ha(D.prototype, A);
    }
    if (m) {
      ha(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "adjust",
    value: function () {
      for (var te = this.table, Dt = te.columnsToRender + te.rowHeadersCount; this.renderedNodes < Dt;) {
        this.rootNode.appendChild(this.table.rootDocument.createElement("col"));
        this.renderedNodes += 1;
      }
      for (; this.renderedNodes > Dt;) {
        this.rootNode.removeChild(this.rootNode.lastChild);
        this.renderedNodes -= 1;
      }
    }
  }, {
    key: "render",
    value: function () {
      this.adjust();
      for (var te = this.table, Se = te.columnsToRender, ge = te.rowHeadersCount, Dt = 0; Dt < ge; Dt++) {
        var en = this.table.renderedColumnToSource(Dt);
        var tn = this.table.columnUtils.getHeaderWidth(en);
        this.rootNode.childNodes[Dt].style.width = `${tn}px`;
      }
      for (var vn = 0; vn < Se; vn++) {
        var Vn = this.table.renderedColumnToSource(vn);
        var Qn = this.table.columnUtils.getStretchedColumnWidth(Vn);
        this.rootNode.childNodes[vn + ge].style.width = `${Qn}px`;
      }
      var ii = this.rootNode.firstChild;
      if (ii) {
        (0, he.cn)(ii, "rowHeader");
      }
    }
  }]);
  return m;
}(kr);
function zs(D) {
  return (zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Vs(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Ra(D, A) {
  return (Ra = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function _r(D, A) {
  if (A && (zs(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function at(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function be(D) {
  return (be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var Bt = false;
var an = function (D) {
  (function Wo(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Ra(D, A);
    }
  })(m, D);
  var A = function Uo(D) {
    var A = function Je() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = be(D);
      if (A) {
        var Se = be(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return _r(this, te);
    };
  }(m);
  function m(T) {
    var te;
    (function eo(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (te = A.call(this, "TR", T)).orderView = new wo(T, function (Se) {
      return te.nodesPool.obtain(Se);
    }, te.nodeType);
    return te;
  }
  (function Qs(D, A, m) {
    if (A) {
      Vs(D.prototype, A);
    }
    if (m) {
      Vs(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "getRenderedNode",
    value: function (te) {
      return this.orderView.getNode(te);
    }
  }, {
    key: "render",
    value: function () {
      var te = this.table.rowsToRender;
      if (!Bt && te > 1000) {
        Bt = true;
        (0, Ge.ZK)((0, Ue.e)(hs ||= function Rs(D, A) {
          A ||= D.slice(0);
          return Object.freeze(Object.defineProperties(D, {
            raw: {
              value: Object.freeze(A)
            }
          }));
        }(["Performance tip: Handsontable rendered more than 1000 visible rows. Consider limiting \n        the number of rendered rows by specifying the table height and/or turning off the \"renderAllRows\" option."], ["Performance tip: Handsontable rendered more than 1000 visible rows. Consider limiting\\x20\n        the number of rendered rows by specifying the table height and/or turning off the \"renderAllRows\" option."])));
      }
      this.orderView.setSize(te).setOffset(this.table.renderedRowToSource(0)).start();
      for (var Se = 0; Se < te; Se++) {
        this.orderView.render();
      }
      this.orderView.end();
    }
  }]);
  return m;
}(kr);
function Gn(D) {
  return (Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Lr(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Ks(D, A) {
  return (Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Xt(D, A) {
  if (A && (Gn(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function ut(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Zt(D) {
  return (Zt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var kn = function (D) {
  (function zr(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Ks(D, A);
    }
  })(m, D);
  var A = function Js(D) {
    var A = function vt() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Zt(D);
      if (A) {
        var Se = Zt(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return Xt(this, te);
    };
  }(m);
  function m() {
    var T;
    (function Ki(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (T = A.call(this, "TD")).orderViews = new WeakMap();
    T.sourceRowIndex = 0;
    return T;
  }
  (function Gr(D, A, m) {
    if (A) {
      Lr(D.prototype, A);
    }
    if (m) {
      Lr(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "obtainOrderView",
    value: function (te) {
      var ge;
      var Se = this;
      if (this.orderViews.has(te)) {
        ge = this.orderViews.get(te);
      } else {
        ge = new An(te, function (Dt) {
          return Se.nodesPool.obtain(Se.sourceRowIndex, Dt);
        }, this.nodeType);
        this.orderViews.set(te, ge);
      }
      return ge;
    }
  }, {
    key: "render",
    value: function () {
      for (var te = this.table, Se = te.rowsToRender, ge = te.columnsToRender, Dt = te.rows, en = te.rowHeaders, tn = 0; tn < Se; tn++) {
        var vn = this.table.renderedRowToSource(tn);
        var Vn = Dt.getRenderedNode(tn);
        this.sourceRowIndex = vn;
        var Qn = this.obtainOrderView(Vn);
        var ii = en.obtainOrderView(Vn);
        Qn.prependView(ii).setSize(ge).setOffset(this.table.renderedColumnToSource(0)).start();
        for (var _i = 0; _i < ge; _i++) {
          Qn.render();
          var Li = Qn.getCurrentNode();
          var zi = this.table.renderedColumnToSource(_i);
          if (!(0, he.pv)(Li, "hide")) {
            Li.className = "";
          }
          Li.removeAttribute("style");
          Li.removeAttribute("dir");
          this.table.cellRenderer(vn, zi, Li);
        }
        Qn.end();
      }
    }
  }]);
  return m;
}(kr);
function Zn(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function li(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Xi = function () {
  function D(A) {
    var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var T = m.cellRenderer;
    Zn(this, D);
    this.rootNode = A;
    this.rootDocument = this.rootNode.ownerDocument;
    this.rowHeaders = null;
    this.columnHeaders = null;
    this.colGroup = null;
    this.rows = null;
    this.cells = null;
    this.rowFilter = null;
    this.columnFilter = null;
    this.rowUtils = null;
    this.columnUtils = null;
    this.rowsToRender = 0;
    this.columnsToRender = 0;
    this.rowHeaderFunctions = [];
    this.rowHeadersCount = 0;
    this.columnHeaderFunctions = [];
    this.columnHeadersCount = 0;
    this.cellRenderer = T;
  }
  (function Oi(D, A, m) {
    if (A) {
      li(D.prototype, A);
    }
    if (m) {
      li(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "setAxisUtils",
    value: function (m, T) {
      this.rowUtils = m;
      this.columnUtils = T;
    }
  }, {
    key: "setViewportSize",
    value: function (m, T) {
      this.rowsToRender = m;
      this.columnsToRender = T;
    }
  }, {
    key: "setFilters",
    value: function (m, T) {
      this.rowFilter = m;
      this.columnFilter = T;
    }
  }, {
    key: "setHeaderContentRenderers",
    value: function (m, T) {
      this.rowHeaderFunctions = m;
      this.rowHeadersCount = m.length;
      this.columnHeaderFunctions = T;
      this.columnHeadersCount = T.length;
    }
  }, {
    key: "setRenderers",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var T = m.rowHeaders;
      var te = m.columnHeaders;
      var Se = m.colGroup;
      var ge = m.rows;
      var Dt = m.cells;
      T.setTable(this);
      te.setTable(this);
      Se.setTable(this);
      ge.setTable(this);
      Dt.setTable(this);
      this.rowHeaders = T;
      this.columnHeaders = te;
      this.colGroup = Se;
      this.rows = ge;
      this.cells = Dt;
    }
  }, {
    key: "renderedRowToSource",
    value: function (m) {
      return this.rowFilter.renderedToSource(m);
    }
  }, {
    key: "renderedColumnToSource",
    value: function (m) {
      return this.columnFilter.renderedToSource(m);
    }
  }, {
    key: "render",
    value: function () {
      this.colGroup.adjust();
      this.columnHeaders.adjust();
      this.rows.adjust();
      this.rowHeaders.adjust();
      this.columnHeaders.render();
      this.rows.render();
      this.rowHeaders.render();
      this.cells.render();
      this.columnUtils.calculateWidths();
      this.colGroup.render();
      for (var m = this.rowsToRender, T = this.rows, te = 0; te < m; te++) {
        var Se = T.getRenderedNode(te);
        if (Se.firstChild) {
          var ge = this.renderedRowToSource(te);
          var Dt = this.rowUtils.getHeight(ge);
          Se.firstChild.style.height = Dt ? `${Dt - 1}px` : "";
        }
      }
    }
  }]);
  return D;
}();
function nr(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function mr(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Ss = function () {
  function D() {
    var A = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var m = A.TABLE;
    var T = A.THEAD;
    var te = A.COLGROUP;
    var Se = A.TBODY;
    var ge = A.rowUtils;
    var Dt = A.columnUtils;
    var en = A.cellRenderer;
    nr(this, D);
    this.renderer = new Xi(m, {
      cellRenderer: en
    });
    this.renderer.setRenderers({
      rowHeaders: new qo(),
      columnHeaders: new dl(T),
      colGroup: new po(te),
      rows: new an(Se),
      cells: new kn()
    });
    this.renderer.setAxisUtils(ge, Dt);
  }
  (function Jr(D, A, m) {
    if (A) {
      mr(D.prototype, A);
    }
    if (m) {
      mr(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "setFilters",
    value: function (m, T) {
      this.renderer.setFilters(m, T);
      return this;
    }
  }, {
    key: "setViewportSize",
    value: function (m, T) {
      this.renderer.setViewportSize(m, T);
      return this;
    }
  }, {
    key: "setHeaderContentRenderers",
    value: function (m, T) {
      this.renderer.setHeaderContentRenderers(m, T);
      return this;
    }
  }, {
    key: "adjust",
    value: function () {
      this.renderer.adjust();
    }
  }, {
    key: "render",
    value: function () {
      this.renderer.render();
    }
  }]);
  return D;
}();
function xo(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var sr = function () {
  function D(A, m) {
    (function Ys(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.dataAccessObject = A;
    this.wtSettings = m;
    this.headerWidths = new Map();
  }
  (function Ls(D, A, m) {
    if (A) {
      xo(D.prototype, A);
    }
    if (m) {
      xo(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getWidth",
    value: function (m) {
      return this.wtSettings.getSetting("columnWidth", m) || this.wtSettings.getSetting("defaultColumnWidth");
    }
  }, {
    key: "getStretchedColumnWidth",
    value: function (m) {
      var T = this.dataAccessObject.wtViewport.columnsRenderCalculator;
      var te = this.getWidth(m);
      if (T) {
        var Se = T.getStretchedColumnWidth(m, te);
        if (Se) {
          te = Se;
        }
      }
      return te;
    }
  }, {
    key: "getHeaderHeight",
    value: function (m) {
      var T = this.wtSettings.getSetting("defaultRowHeight");
      var te = this.dataAccessObject.wtViewport.oversizedColumnHeaders[m];
      if (te !== undefined) {
        T = T ? Math.max(T, te) : te;
      }
      return T;
    }
  }, {
    key: "getHeaderWidth",
    value: function (m) {
      return this.headerWidths.get(this.dataAccessObject.wtTable.columnFilter.sourceToRendered(m));
    }
  }, {
    key: "calculateWidths",
    value: function () {
      var m = this.wtSettings;
      var T = this.dataAccessObject;
      var Se = T.wtViewport;
      var ge = T.cloneSource;
      var Dt = ge ? ge.wtTable.holder : T.wtTable.holder;
      var en = Dt.offsetHeight < Dt.scrollHeight ? (0, he.np)() : 0;
      var tn = m.getSetting("rowHeaderWidth");
      Se.columnsRenderCalculator.refreshStretching(Se.getViewportWidth() - en);
      if ((tn = m.getSetting("onModifyRowHeaderWidth", tn)) != null) {
        for (var vn = m.getSetting("rowHeaders").length, Vn = m.getSetting("defaultColumnWidth"), Qn = 0; Qn < vn; Qn++) {
          var ii = Array.isArray(tn) ? tn[Qn] : tn;
          this.headerWidths.set(Qn, ii = ii ?? Vn);
        }
      }
    }
  }]);
  return D;
}();
function ao(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Rr = function () {
  function D(A, m) {
    (function wa(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.dataAccessObject = A;
    this.wtSettings = m;
  }
  (function sl(D, A, m) {
    if (A) {
      ao(D.prototype, A);
    }
    if (m) {
      ao(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getHeight",
    value: function (m) {
      var T = this.wtSettings.getSetting("rowHeight", m);
      var te = this.dataAccessObject.wtViewport.oversizedRows[m];
      if (te !== undefined) {
        T = T === undefined ? te : Math.max(T, te);
      }
      return T;
    }
  }]);
  return D;
}();
var el = "top";
var Fa = "bottom";
var Mr = "inline_start";
var Xe = "top_inline_start_corner";
var $t = "bottom_inline_start_corner";
var _e = [el, Fa, Mr, Xe, $t];
var xt = new Map([[el, `ht_clone_${el}`], [Fa, `ht_clone_${Fa}`], [Mr, `ht_clone_${Mr} ht_clone_left`], [Xe, `ht_clone_${Xe} ht_clone_top_left_corner`], [$t, `ht_clone_${$t} ht_clone_bottom_left_corner`]]);
function oa(D, A) {
  if (D) {
    if (typeof D == "string") {
      return Ns(D, A);
    }
    var m = Object.prototype.toString.call(D).slice(8, -1);
    if (m === "Object" && D.constructor) {
      m = D.constructor.name;
    }
    if (m === "Map" || m === "Set") {
      return Array.from(D);
    }
    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
      return Ns(D, A);
    }
  }
}
function Ns(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function He(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Yi(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
const wi = function () {
  function D(A, m, T, te, Se) {
    var ge = this;
    (function dt(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    Yi(this, "wtSettings", null);
    Yi(this, "domBindings", undefined);
    Yi(this, "TBODY", null);
    Yi(this, "THEAD", null);
    Yi(this, "COLGROUP", null);
    Yi(this, "hasTableHeight", true);
    Yi(this, "hasTableWidth", true);
    Yi(this, "isTableVisible", false);
    Yi(this, "tableOffset", 0);
    Yi(this, "holderOffset", 0);
    this.domBindings = T;
    this.isMaster = Se === "master";
    this.name = Se;
    this.dataAccessObject = A;
    this.facadeGetter = m;
    this.wtSettings = te;
    this.instance = this.dataAccessObject.wot;
    this.wot = this.dataAccessObject.wot;
    this.TABLE = T.rootTable;
    (0, he.Wu)(this.TABLE);
    this.spreader = this.createSpreader(this.TABLE);
    this.hider = this.createHider(this.spreader);
    this.holder = this.createHolder(this.hider);
    this.wtRootElement = this.holder.parentNode;
    if (this.isMaster) {
      this.alignOverlaysWithTrimmingContainer();
    }
    this.fixTableDomTree();
    this.rowFilter = null;
    this.columnFilter = null;
    this.correctHeaderWidth = false;
    var Dt = this.wtSettings.getSettingPure("rowHeaderWidth");
    this.wtSettings.update("rowHeaderWidth", function () {
      return ge._modifyRowHeaderWidth(Dt);
    });
    this.rowUtils = new Rr(this.dataAccessObject, this.wtSettings);
    this.columnUtils = new sr(this.dataAccessObject, this.wtSettings);
    this.tableRenderer = new Ss({
      TABLE: this.TABLE,
      THEAD: this.THEAD,
      COLGROUP: this.COLGROUP,
      TBODY: this.TBODY,
      rowUtils: this.rowUtils,
      columnUtils: this.columnUtils,
      cellRenderer: this.wtSettings.getSettingPure("cellRenderer")
    });
  }
  (function dn(D, A, m) {
    if (A) {
      He(D.prototype, A);
    }
    if (m) {
      He(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "is",
    value: function (m) {
      return this.name === m;
    }
  }, {
    key: "fixTableDomTree",
    value: function () {
      var m = this.domBindings.rootDocument;
      this.TBODY = this.TABLE.querySelector("tbody");
      if (!this.TBODY) {
        this.TBODY = m.createElement("tbody");
        this.TABLE.appendChild(this.TBODY);
      }
      this.THEAD = this.TABLE.querySelector("thead");
      if (!this.THEAD) {
        this.THEAD = m.createElement("thead");
        this.TABLE.insertBefore(this.THEAD, this.TBODY);
      }
      this.COLGROUP = this.TABLE.querySelector("colgroup");
      if (!this.COLGROUP) {
        this.COLGROUP = m.createElement("colgroup");
        this.TABLE.insertBefore(this.COLGROUP, this.THEAD);
      }
    }
  }, {
    key: "createSpreader",
    value: function (m) {
      var te;
      var T = m.parentNode;
      if (!T || T.nodeType !== Node.ELEMENT_NODE || !(0, he.pv)(T, "wtHolder")) {
        (te = this.domBindings.rootDocument.createElement("div")).className = "wtSpreader";
        if (T) {
          T.insertBefore(te, m);
        }
        te.appendChild(m);
      }
      te.style.position = "relative";
      return te;
    }
  }, {
    key: "createHider",
    value: function (m) {
      var te;
      var T = m.parentNode;
      if (!T || T.nodeType !== Node.ELEMENT_NODE || !(0, he.pv)(T, "wtHolder")) {
        (te = this.domBindings.rootDocument.createElement("div")).className = "wtHider";
        if (T) {
          T.insertBefore(te, m);
        }
        te.appendChild(m);
      }
      return te;
    }
  }, {
    key: "createHolder",
    value: function (m) {
      var te;
      var T = m.parentNode;
      if (!T || T.nodeType !== Node.ELEMENT_NODE || !(0, he.pv)(T, "wtHolder")) {
        (te = this.domBindings.rootDocument.createElement("div")).style.position = "relative";
        te.className = "wtHolder";
        if (T) {
          T.insertBefore(te, m);
        }
        if (this.isMaster) {
          te.parentNode.className += "ht_master handsontable";
          te.parentNode.setAttribute("dir", this.wtSettings.getSettingPure("rtlMode") ? "rtl" : "ltr");
        }
        te.appendChild(m);
      }
      return te;
    }
  }, {
    key: "draw",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var T = this.wtSettings;
      var te = this.dataAccessObject;
      var Se = te.wtOverlays;
      var ge = te.wtViewport;
      var Dt = T.getSetting("totalRows");
      var en = T.getSetting("totalColumns");
      var tn = T.getSetting("rowHeaders");
      var vn = tn.length;
      var Vn = T.getSetting("columnHeaders");
      var Qn = Vn.length;
      var ii = false;
      var _i = m;
      if (this.isMaster && (this.holderOffset = (0, he.cv)(this.holder), _i = ge.createRenderCalculators(_i), vn && !T.getSetting("fixedColumnsStart"))) {
        var Li = Se.inlineStartOverlay.getScrollPosition();
        var zi = this.correctHeaderWidth;
        this.correctHeaderWidth = Li !== 0;
        if (zi !== this.correctHeaderWidth) {
          _i = false;
        }
      }
      if (this.isMaster) {
        ii = Se.updateStateOfRendering();
      }
      if (_i) {
        if (this.isMaster) {
          ge.createVisibleCalculators();
        }
        if (Se) {
          Se.refresh(true);
        }
      } else {
        this.tableOffset = this.isMaster ? (0, he.cv)(this.TABLE) : this.dataAccessObject.parentTableOffset;
        var us = Dt > 0 ? this.getFirstRenderedRow() : 0;
        var Vo = en > 0 ? this.getFirstRenderedColumn() : 0;
        this.rowFilter = new on(us, Dt, Qn);
        this.columnFilter = new pt(Vo, en, vn);
        var jr;
        var ba = true;
        if (this.isMaster) {
          this.alignOverlaysWithTrimmingContainer();
          var Co = {};
          this.wtSettings.getSetting("beforeDraw", true, Co);
          ba = Co.skipRender !== true;
        }
        if (ba) {
          this.tableRenderer.setHeaderContentRenderers(tn, Vn);
          if (this.is(Fa) || this.is($t)) {
            this.tableRenderer.setHeaderContentRenderers(tn, []);
          }
          this.resetOversizedRows();
          this.tableRenderer.setViewportSize(this.getRenderedRowsCount(), this.getRenderedColumnsCount()).setFilters(this.rowFilter, this.columnFilter).render();
          if (this.isMaster) {
            jr = this.dataAccessObject.workspaceWidth;
            this.dataAccessObject.wtViewport.containerWidth = null;
            this.markOversizedColumnHeaders();
          }
          this.adjustColumnHeaderHeights();
          if (this.isMaster || this.is(Fa)) {
            this.markOversizedRows();
          }
          if (this.isMaster) {
            this.dataAccessObject.wtViewport.createVisibleCalculators();
            this.dataAccessObject.wtOverlays.refresh(false);
            this.dataAccessObject.wtOverlays.applyToDOM();
            var nc = (0, he.iO)(this.hider);
            var _l = (0, he.iO)(this.TABLE);
            if (nc !== 0 && _l !== nc) {
              this.columnUtils.calculateWidths();
              this.tableRenderer.renderer.colGroup.render();
            }
            if (jr !== this.dataAccessObject.wtViewport.getWorkspaceWidth()) {
              this.dataAccessObject.wtViewport.containerWidth = null;
              this.columnUtils.calculateWidths();
              this.tableRenderer.renderer.colGroup.render();
            }
            this.wtSettings.getSetting("onDraw", true);
          } else if (this.is(Fa)) {
            this.dataAccessObject.cloneSource.wtOverlays.adjustElementsSize();
          }
        }
      }
      var pc = false;
      if (this.isMaster) {
        pc = Se.topOverlay.resetFixedPosition();
        if (Se.bottomOverlay.clone) {
          pc = Se.bottomOverlay.resetFixedPosition() || pc;
        }
        pc = Se.inlineStartOverlay.resetFixedPosition() || pc;
        if (Se.topInlineStartCornerOverlay) {
          Se.topInlineStartCornerOverlay.resetFixedPosition();
        }
        if (Se.bottomInlineStartCornerOverlay && Se.bottomInlineStartCornerOverlay.clone) {
          Se.bottomInlineStartCornerOverlay.resetFixedPosition();
        }
      }
      if (pc) {
        Se.refreshAll();
        Se.adjustElementsSize();
      } else {
        this.refreshSelections(_i);
      }
      if (ii) {
        Se.syncScrollWithMaster();
      }
      this.dataAccessObject.drawn = true;
      return this;
    }
  }, {
    key: "markIfOversizedColumnHeader",
    value: function (m) {
      for (var ge, Dt, en, T = this.columnFilter.renderedToSource(m), te = this.wtSettings.getSetting("columnHeaders").length, Se = this.wtSettings.getSetting("defaultRowHeight"), tn = this.wtSettings.getSetting("columnHeaderHeight") || []; te;) {
        ge = this.getColumnHeaderHeight(te -= 1);
        if (Dt = this.getColumnHeader(T, te)) {
          en = (0, he.WS)(Dt);
          if (!ge && Se < en || ge < en) {
            this.dataAccessObject.wtViewport.oversizedColumnHeaders[te] = en;
          }
          if (Array.isArray(tn)) {
            if (tn[te] != null) {
              this.dataAccessObject.wtViewport.oversizedColumnHeaders[te] = tn[te];
            }
          } else if (!isNaN(tn)) {
            this.dataAccessObject.wtViewport.oversizedColumnHeaders[te] = tn;
          }
          if (this.dataAccessObject.wtViewport.oversizedColumnHeaders[te] < (tn[te] || tn)) {
            this.dataAccessObject.wtViewport.oversizedColumnHeaders[te] = tn[te] || tn;
          }
        }
      }
    }
  }, {
    key: "adjustColumnHeaderHeights",
    value: function () {
      for (var T = this.THEAD.childNodes, te = this.dataAccessObject.wtViewport.oversizedColumnHeaders, ge = 0, Dt = this.wtSettings.getSetting("columnHeaders").length; ge < Dt; ge++) {
        if (te[ge]) {
          if (!T[ge] || T[ge].childNodes.length === 0) {
            return;
          }
          T[ge].childNodes[0].style.height = `${te[ge]}px`;
        }
      }
    }
  }, {
    key: "resetOversizedRows",
    value: function () {
      var m = this.wtSettings;
      var T = this.dataAccessObject.wtViewport;
      if ((this.isMaster || this.is(Fa)) && !m.getSetting("externalRowCalculator")) {
        for (var te = this.getRenderedRowsCount(), Se = 0; Se < te; Se++) {
          var ge = this.rowFilter.renderedToSource(Se);
          if (T.oversizedRows && T.oversizedRows[ge]) {
            T.oversizedRows[ge] = undefined;
          }
        }
      }
    }
  }, {
    key: "removeClassFromCells",
    value: function (m) {
      for (var T = this.TABLE.querySelectorAll(`.${m}`), te = 0, Se = T.length; te < Se; te++) {
        (0, he.IV)(T[te], m);
      }
    }
  }, {
    key: "refreshSelections",
    value: function (m) {
      var T = this.wtSettings;
      var te = this.dataAccessObject.selections;
      if (te) {
        var Se = Array.from(te);
        var ge = Se.length;
        if (m) {
          for (var Dt = [], en = 0; en < ge; en++) {
            for (var tn = Se[en].settings, vn = tn.highlightHeaderClassName, Vn = tn.highlightRowClassName, Qn = tn.highlightColumnClassName, ii = Se[en].classNames, _i = ii.length, Li = 0; Li < _i; Li++) {
              if (!Dt.includes(ii[Li])) {
                Dt.push(ii[Li]);
              }
            }
            if (vn && !Dt.includes(vn)) {
              Dt.push(vn);
            }
            if (Vn && !Dt.includes(Vn)) {
              Dt.push(Vn);
            }
            if (Qn && !Dt.includes(Qn)) {
              Dt.push(Qn);
            }
          }
          var zi = T.getSetting("onBeforeRemoveCellClassNames");
          if (Array.isArray(zi)) {
            for (var us = 0; us < zi.length; us++) {
              Dt.push(zi[us]);
            }
          }
          for (var Vo = Dt.length, ba = 0; ba < Vo; ba++) {
            this.removeClassFromCells(Dt[ba]);
          }
        }
        for (var Co = 0; Co < ge; Co++) {
          Se[Co].draw(this.facadeGetter(), m);
        }
      }
    }
  }, {
    key: "getCell",
    value: function (m) {
      var Dt;
      var T = m.row;
      var te = m.col;
      var Se = this.wtSettings.getSetting("onModifyGetCellCoords", T, te);
      if (Se && Array.isArray(Se)) {
        var ge = function Ji(D, A) {
          return function ht(D) {
            if (Array.isArray(D)) {
              return D;
            }
          }(D) || function ys(D, A) {
            var m = D == null ? null : typeof Symbol !== "undefined" && D[Symbol.iterator] || D["@@iterator"];
            if (m != null) {
              var ge;
              var Dt;
              var T = [];
              var te = true;
              var Se = false;
              try {
                for (m = m.call(D); !(te = (ge = m.next()).done) && (T.push(ge.value), !A || T.length !== A); te = true);
              } catch (en) {
                Se = true;
                Dt = en;
              } finally {
                try {
                  if (!te && m.return != null) {
                    m.return();
                  }
                } finally {
                  if (Se) {
                    throw Dt;
                  }
                }
              }
              return T;
            }
          }(D, A) || oa(D, A) || function hi() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(Se, 2);
        T = ge[0];
        te = ge[1];
      }
      if (this.isRowBeforeRenderedRows(T)) {
        return -1;
      }
      if (this.isRowAfterRenderedRows(T)) {
        return -2;
      }
      if (this.isColumnBeforeRenderedColumns(te)) {
        return -3;
      }
      if (this.isColumnAfterRenderedColumns(te)) {
        return -4;
      }
      if (!(Dt = T < 0 ? this.THEAD.childNodes[this.rowFilter.sourceRowToVisibleColHeadedRow(T)] : this.TBODY.childNodes[this.rowFilter.sourceToRendered(T)]) && T >= 0) {
        throw new Error("TR was expected to be rendered but is not");
      }
      var en = Dt.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(te)];
      if (!en && te >= 0) {
        throw new Error("TD or TH was expected to be rendered but is not");
      }
      return en;
    }
  }, {
    key: "getColumnHeader",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var te = this.THEAD.childNodes[T];
      return te?.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(m)];
    }
  }, {
    key: "getColumnHeaders",
    value: function (m) {
      var T = [];
      var te = this.columnFilter.sourceColumnToVisibleRowHeadedColumn(m);
      this.THEAD.childNodes.forEach(function (Se) {
        var ge = Se.childNodes[te];
        if (ge) {
          T.push(ge);
        }
      });
      return T;
    }
  }, {
    key: "getRowHeader",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (this.columnFilter.sourceColumnToVisibleRowHeadedColumn(0) !== 0) {
        var te = this.wtSettings.getSetting("rowHeaders").length;
        if (T < te) {
          var Se = this.TBODY.childNodes[this.rowFilter.sourceToRendered(m)];
          return Se?.childNodes[T];
        }
      }
    }
  }, {
    key: "getRowHeaders",
    value: function (m) {
      if (this.columnFilter.sourceColumnToVisibleRowHeadedColumn(0) === 0) {
        return [];
      }
      for (var T = [], te = this.wtSettings.getSetting("rowHeaders").length, Se = 0; Se < te; Se++) {
        var Dt = this.TBODY.childNodes[this.rowFilter.sourceToRendered(m)]?.childNodes[Se];
        if (Dt) {
          T.push(Dt);
        }
      }
      return T;
    }
  }, {
    key: "getCoords",
    value: function (m) {
      var T = m;
      if (T.nodeName !== "TD" && T.nodeName !== "TH") {
        T = (0, he.oq)(T, ["TD", "TH"]);
      }
      if (T === null) {
        return null;
      }
      var te = T.parentNode;
      var Se = te.parentNode;
      var ge = (0, he.Kz)(te);
      var Dt = T.cellIndex;
      if ((0, he.mK)(Xe, T, this.wtRootElement) || (0, he.mK)(el, T, this.wtRootElement)) {
        if (Se.nodeName === "THEAD") {
          ge -= Se.childNodes.length;
        }
      } else {
        ge = (0, he.mK)($t, T, this.wtRootElement) || (0, he.mK)(Fa, T, this.wtRootElement) ? this.wtSettings.getSetting("totalRows") - Se.childNodes.length + ge : Se === this.THEAD ? this.rowFilter.visibleColHeadedRowToSourceRow(ge) : this.rowFilter.renderedToSource(ge);
      }
      Dt = (0, he.mK)(Xe, T, this.wtRootElement) || (0, he.mK)(Mr, T, this.wtRootElement) || (0, he.mK)($t, T, this.wtRootElement) ? this.columnFilter.offsettedTH(Dt) : this.columnFilter.visibleRowHeadedColumnToSourceColumn(Dt);
      return this.wot.createCellCoords(ge, Dt);
    }
  }, {
    key: "markOversizedRows",
    value: function () {
      if (!this.wtSettings.getSetting("externalRowCalculator")) {
        var Se;
        var ge;
        var Dt;
        var en;
        var tn;
        var m = this.TBODY.childNodes.length;
        if (m * this.wtSettings.getSetting("defaultRowHeight") != (0, he.WS)(this.TBODY) - 1 || this.wtSettings.getSetting("fixedRowsBottom")) {
          for (; m;) {
            Dt = this.rowFilter.renderedToSource(m -= 1);
            Se = this.getRowHeight(Dt);
            ge = (tn = (en = this.getTrForRow(Dt)).querySelector("th")) ? (0, he.WS)(tn) : (0, he.WS)(en) - 1;
            if (!Se && this.wtSettings.getSetting("defaultRowHeight") < ge || Se < ge) {
              this.dataAccessObject.wtViewport.oversizedRows[Dt] = ge += 1;
            }
          }
        }
      }
    }
  }, {
    key: "getTrForRow",
    value: function (m) {
      return this.TBODY.childNodes[this.rowFilter.sourceToRendered(m)];
    }
  }, {
    key: "isColumnHeaderRendered",
    value: function (m) {
      if (m >= 0) {
        return false;
      }
      var te = this.wtSettings.getSetting("rowHeaders").length;
      return Math.abs(m) <= te;
    }
  }, {
    key: "isRowHeaderRendered",
    value: function (m) {
      if (m >= 0) {
        return false;
      }
      var te = this.wtSettings.getSetting("columnHeaders").length;
      return Math.abs(m) <= te;
    }
  }, {
    key: "isRowBeforeRenderedRows",
    value: function (m) {
      var T = this.getFirstRenderedRow();
      if (m < 0 && T <= 0) {
        return !this.isRowHeaderRendered(m);
      } else {
        return m < T;
      }
    }
  }, {
    key: "isRowAfterRenderedRows",
    value: function (m) {
      return m > this.getLastRenderedRow();
    }
  }, {
    key: "isColumnBeforeRenderedColumns",
    value: function (m) {
      var T = this.getFirstRenderedColumn();
      if (m < 0 && T <= 0) {
        return !this.isColumnHeaderRendered(m);
      } else {
        return m < T;
      }
    }
  }, {
    key: "isColumnAfterRenderedColumns",
    value: function (m) {
      return this.columnFilter && m > this.getLastRenderedColumn();
    }
  }, {
    key: "isColumnAfterViewport",
    value: function (m) {
      return this.columnFilter && m > this.getLastVisibleColumn();
    }
  }, {
    key: "isRowAfterViewport",
    value: function (m) {
      return this.rowFilter && m > this.getLastVisibleRow();
    }
  }, {
    key: "isColumnBeforeViewport",
    value: function (m) {
      return this.columnFilter && this.columnFilter.sourceToRendered(m) < 0 && m >= 0;
    }
  }, {
    key: "isLastRowFullyVisible",
    value: function () {
      return this.getLastVisibleRow() === this.getLastRenderedRow();
    }
  }, {
    key: "isLastColumnFullyVisible",
    value: function () {
      return this.getLastVisibleColumn() === this.getLastRenderedColumn();
    }
  }, {
    key: "allRowsInViewport",
    value: function () {
      return this.wtSettings.getSetting("totalRows") === this.getVisibleRowsCount();
    }
  }, {
    key: "allColumnsInViewport",
    value: function () {
      return this.wtSettings.getSetting("totalColumns") === this.getVisibleColumnsCount();
    }
  }, {
    key: "getRowHeight",
    value: function (m) {
      return this.rowUtils.getHeight(m);
    }
  }, {
    key: "getColumnHeaderHeight",
    value: function (m) {
      return this.columnUtils.getHeaderHeight(m);
    }
  }, {
    key: "getColumnWidth",
    value: function (m) {
      return this.columnUtils.getWidth(m);
    }
  }, {
    key: "getStretchedColumnWidth",
    value: function (m) {
      return this.columnUtils.getStretchedColumnWidth(m);
    }
  }, {
    key: "hasDefinedSize",
    value: function () {
      return this.hasTableHeight && this.hasTableWidth;
    }
  }, {
    key: "getWidth",
    value: function () {
      return (0, he.iO)(this.TABLE);
    }
  }, {
    key: "getHeight",
    value: function () {
      return (0, he.Pb)(this.TABLE);
    }
  }, {
    key: "getTotalWidth",
    value: function () {
      var m = (0, he.iO)(this.hider);
      if (m !== 0) {
        return m;
      } else {
        return this.getWidth();
      }
    }
  }, {
    key: "getTotalHeight",
    value: function () {
      var m = (0, he.Pb)(this.hider);
      if (m !== 0) {
        return m;
      } else {
        return this.getHeight();
      }
    }
  }, {
    key: "isVisible",
    value: function () {
      return (0, he.pn)(this.TABLE);
    }
  }, {
    key: "_modifyRowHeaderWidth",
    value: function (m) {
      var T = (0, pe.mf)(m) ? m() : null;
      if (Array.isArray(T)) {
        (T = function gn(D) {
          return function Do(D) {
            if (Array.isArray(D)) {
              return Ns(D);
            }
          }(D) || function tr(D) {
            if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
              return Array.from(D);
            }
          }(D) || oa(D) || function wn() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(T))[T.length - 1] = this._correctRowHeaderWidth(T[T.length - 1]);
      } else {
        T = this._correctRowHeaderWidth(T);
      }
      return T;
    }
  }, {
    key: "_correctRowHeaderWidth",
    value: function (m) {
      var T = m;
      if (typeof m != "number") {
        T = this.wtSettings.getSetting("defaultColumnWidth");
      }
      if (this.correctHeaderWidth) {
        T += 1;
      }
      return T;
    }
  }]);
  return D;
}();
var Hr = {
  getFirstRenderedRow: function () {
    if (this.wtSettings.getSetting("totalRows") === 0) {
      return -1;
    } else {
      return 0;
    }
  },
  getFirstVisibleRow: function () {
    return this.getFirstRenderedRow();
  },
  getLastRenderedRow: function () {
    return this.getRenderedRowsCount() - 1;
  },
  getLastVisibleRow: function () {
    return this.getLastRenderedRow();
  },
  getRenderedRowsCount: function () {
    var A = this.wtSettings.getSetting("totalRows");
    return Math.min(this.wtSettings.getSetting("fixedRowsTop"), A);
  },
  getVisibleRowsCount: function () {
    return this.getRenderedRowsCount();
  }
};
(0, rt.jW)(Hr, "MIXIN_NAME", "stickyRowsTop", {
  writable: false,
  enumerable: false
});
const wt = Hr;
var zn = {
  getFirstRenderedColumn: function () {
    var A = this.dataAccessObject.startColumnRendered;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getFirstVisibleColumn: function () {
    var A = this.dataAccessObject.startColumnVisible;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getLastRenderedColumn: function () {
    var A = this.dataAccessObject.endColumnRendered;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getLastVisibleColumn: function () {
    var A = this.dataAccessObject.endColumnVisible;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getRenderedColumnsCount: function () {
    return this.dataAccessObject.countColumnsRendered;
  },
  getVisibleColumnsCount: function () {
    return this.dataAccessObject.countColumnsVisible;
  }
};
(0, rt.jW)(zn, "MIXIN_NAME", "calculatedColumns", {
  writable: false,
  enumerable: false
});
const Fn = zn;
function ci(D) {
  return (ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function pi(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function to(D, A) {
  return (to = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Kl(D, A) {
  if (A && (ci(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function Bl(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Wa(D) {
  return (Wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var ls = function (D) {
  (function Bo(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      to(D, A);
    }
  })(m, D);
  var A = function Ha(D) {
    var A = function iu() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Wa(D);
      if (A) {
        var Se = Wa(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return Kl(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    (function xi(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, T, te, Se, ge, el);
  }
  return function lr(D, A, m) {
    if (A) {
      pi(D.prototype, A);
    }
    if (m) {
      pi(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    return D;
  }(m);
}(wi);
(0, rt.jB)(ls, wt);
(0, rt.jB)(ls, Fn);
const bs = ls;
function gc(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function qt(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
const Gt = function () {
  function D(A) {
    (function Cc(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    qt(this, "dataAccessObject", undefined);
    qt(this, "lastScrolledColumnPos", -1);
    qt(this, "lastScrolledRowPos", -1);
    this.dataAccessObject = A;
  }
  (function mt(D, A, m) {
    if (A) {
      gc(D.prototype, A);
    }
    if (m) {
      gc(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "scrollViewport",
    value: function (m, T, te, Se, ge) {
      var Dt = this.scrollViewportHorizontally(m.col, te, ge);
      var en = this.scrollViewportVertically(m.row, T, Se);
      return Dt || en;
    }
  }, {
    key: "scrollViewportHorizontally",
    value: function (m, T, te) {
      var Se = this.dataAccessObject;
      var Dt = Se.totalColumns;
      if (!Se.drawn || !Number.isInteger(m) || m < 0 || m > Dt) {
        return false;
      }
      var en = this.getFirstVisibleColumn();
      var tn = this.getLastVisibleColumn();
      var vn = T === undefined && te === undefined;
      var Vn = this.dataAccessObject;
      var ii = Vn.inlineStartOverlay;
      if (vn && m < Vn.fixedColumnsStart) {
        return false;
      }
      var _i = false;
      if (en === -1) {
        _i = ii.scrollTo(m, vn ? m > this.lastScrolledColumnPos : T);
      } else if (vn && (m < en || m > tn) || !vn) {
        _i = ii.scrollTo(m, vn ? m > tn : T);
      }
      if (_i) {
        this.lastScrolledColumnPos = m;
      }
      return _i;
    }
  }, {
    key: "scrollViewportVertically",
    value: function (m, T, te) {
      var Se = this.dataAccessObject;
      var Dt = Se.totalRows;
      if (!Se.drawn || !Number.isInteger(m) || m < 0 || m > Dt) {
        return false;
      }
      var en = this.getFirstVisibleRow();
      var tn = this.getLastVisibleRow();
      var vn = T === undefined && te === undefined;
      var Vn = this.dataAccessObject;
      var _i = Vn.topOverlay;
      if (vn && (m < Vn.fixedRowsTop || m > Dt - Vn.fixedRowsBottom - 1)) {
        return false;
      }
      var Li = false;
      if (en === -1) {
        Li = _i.scrollTo(m, vn ? m > this.lastScrolledRowPos : te);
      } else if (vn && (m < en || m > tn) || !vn) {
        Li = _i.scrollTo(m, vn ? m > tn : te);
      }
      if (Li) {
        this.lastScrolledRowPos = m;
      }
      return Li;
    }
  }, {
    key: "getFirstVisibleRow",
    value: function () {
      var m = this.dataAccessObject;
      var T = m.topOverlay;
      var te = m.wtTable;
      var Se = m.wtViewport;
      var ge = m.totalRows;
      var Dt = m.fixedRowsTop;
      var en = m.rootWindow;
      var tn = te.getFirstVisibleRow();
      if (T.mainTableScrollableElement === en) {
        var vn = (0, he.cv)(te.wtRootElement);
        var Vn = (0, he.WS)(te.hider);
        var Qn = (0, he.WS)(en);
        var ii = (0, he.cx)(en, en);
        if (vn.top + Vn - Qn <= ii) {
          var _i = Se.getColumnHeaderHeight();
          _i += T.sumCellSizes(0, Dt);
          for (var Li = ge; Li > 0; Li--) {
            _i += T.sumCellSizes(Li - 1, Li);
            if (vn.top + Vn - _i <= ii) {
              tn = Li;
              break;
            }
          }
        }
      }
      return tn;
    }
  }, {
    key: "getLastVisibleRow",
    value: function () {
      var m = this.dataAccessObject;
      var T = m.topOverlay;
      var te = m.wtTable;
      var Se = m.wtViewport;
      var ge = m.totalRows;
      var Dt = m.rootWindow;
      var en = te.getLastVisibleRow();
      if (T.mainTableScrollableElement === Dt) {
        var tn = (0, he.cv)(te.wtRootElement);
        var vn = (0, he.cx)(Dt, Dt);
        if (tn.top > vn) {
          for (var Vn = (0, he.WS)(Dt), Qn = Se.getColumnHeaderHeight(), ii = 1; ii <= ge; ii++) {
            Qn += T.sumCellSizes(ii - 1, ii);
            if (tn.top + Qn - vn >= Vn) {
              en = ii - 2;
              break;
            }
          }
        }
      }
      return en;
    }
  }, {
    key: "getFirstVisibleColumn",
    value: function () {
      var m = this.dataAccessObject;
      var T = m.inlineStartOverlay;
      var te = m.wtTable;
      var Se = m.wtViewport;
      var ge = m.totalColumns;
      var Dt = m.rootWindow;
      var en = te.getFirstVisibleColumn();
      if (T.mainTableScrollableElement === Dt) {
        var tn = (0, he.cv)(te.wtRootElement);
        var vn = (0, he.x9)(te.hider);
        var Vn = (0, he.x9)(Dt);
        var Qn = Math.abs((0, he.vj)(Dt, Dt));
        if (tn.left + vn - Vn <= Qn) {
          for (var ii = Se.getRowHeaderWidth(), _i = ge; _i > 0; _i--) {
            ii += T.sumCellSizes(_i - 1, _i);
            if (tn.left + vn - ii <= Qn) {
              en = _i;
              break;
            }
          }
        }
      }
      return en;
    }
  }, {
    key: "getLastVisibleColumn",
    value: function () {
      var m = this.dataAccessObject;
      var T = m.inlineStartOverlay;
      var te = m.wtTable;
      var Se = m.wtViewport;
      var ge = m.totalColumns;
      var Dt = m.rootWindow;
      var en = te.getLastVisibleColumn();
      if (T.mainTableScrollableElement === Dt) {
        var tn = (0, he.cv)(te.wtRootElement);
        var vn = Math.abs((0, he.vj)(Dt, Dt));
        if (tn.left > vn) {
          for (var Vn = (0, he.x9)(Dt), Qn = Se.getRowHeaderWidth(), ii = 1; ii <= ge; ii++) {
            Qn += T.sumCellSizes(ii - 1, ii);
            if (tn.left + Qn - vn >= Vn) {
              en = ii - 2;
              break;
            }
          }
        }
      }
      return en;
    }
  }]);
  return D;
}();
function cs(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Yo(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var Ts = function () {
  function D(A, m) {
    (function Ui(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    Yo(this, "wtTable", undefined);
    Yo(this, "wtScroll", undefined);
    Yo(this, "wtViewport", undefined);
    Yo(this, "wtOverlays", undefined);
    Yo(this, "selections", undefined);
    Yo(this, "wtEvent", undefined);
    Yo(this, "guid", `wt_${(0, Qe.O1)()}`);
    Yo(this, "drawInterrupted", false);
    Yo(this, "drawn", false);
    Yo(this, "domBindings", undefined);
    Yo(this, "wtSettings", undefined);
    this.domBindings = {
      rootTable: A,
      rootDocument: A.ownerDocument,
      rootWindow: A.ownerDocument.defaultView
    };
    this.wtSettings = m;
    this.wtScroll = new Gt(this.createScrollDao());
  }
  (function La(D, A, m) {
    if (A) {
      cs(D.prototype, A);
    }
    if (m) {
      cs(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "eventManager",
    get: function () {
      return new st.Z(this);
    }
  }, {
    key: "findOriginalHeaders",
    value: function () {
      var m = [];
      if (this.wtTable.THEAD.childNodes.length && this.wtTable.THEAD.childNodes[0].childNodes.length) {
        for (var T = 0, te = this.wtTable.THEAD.childNodes[0].childNodes.length; T < te; T++) {
          m.push(this.wtTable.THEAD.childNodes[0].childNodes[T].innerHTML);
        }
        if (!this.wtSettings.getSetting("columnHeaders").length) {
          this.wtSettings.update("columnHeaders", [function (Se, ge) {
            (0, he.tT)(ge, m[Se]);
          }]);
        }
      }
    }
  }, {
    key: "createCellCoords",
    value: function (m, T) {
      return new Sn.Z(m, T, this.wtSettings.getSetting("rtlMode"));
    }
  }, {
    key: "createCellRange",
    value: function (m, T, te) {
      return new ki.Z(m, T, te, this.wtSettings.getSetting("rtlMode"));
    }
  }, {
    key: "draw",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      this.drawInterrupted = false;
      if (m || this.wtTable.isVisible()) {
        this.wtTable.draw(m);
      } else {
        this.drawInterrupted = true;
      }
      return this;
    }
  }, {
    key: "getCell",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      if (!T) {
        return this.wtTable.getCell(m);
      }
      var te = this.wtSettings.getSetting("totalRows");
      var Se = this.wtSettings.getSetting("fixedRowsTop");
      var ge = this.wtSettings.getSetting("fixedRowsBottom");
      var Dt = this.wtSettings.getSetting("fixedColumnsStart");
      if (m.row < Se && m.col < Dt) {
        return this.wtOverlays.topInlineStartCornerOverlay.clone.wtTable.getCell(m);
      }
      if (m.row < Se) {
        return this.wtOverlays.topOverlay.clone.wtTable.getCell(m);
      }
      if (m.col < Dt && m.row >= te - ge) {
        if (this.wtOverlays.bottomInlineStartCornerOverlay && this.wtOverlays.bottomInlineStartCornerOverlay.clone) {
          return this.wtOverlays.bottomInlineStartCornerOverlay.clone.wtTable.getCell(m);
        }
      } else {
        if (m.col < Dt) {
          return this.wtOverlays.inlineStartOverlay.clone.wtTable.getCell(m);
        }
        if (m.row < te && m.row >= te - ge && this.wtOverlays.bottomOverlay && this.wtOverlays.bottomOverlay.clone) {
          return this.wtOverlays.bottomOverlay.clone.wtTable.getCell(m);
        }
      }
      return this.wtTable.getCell(m);
    }
  }, {
    key: "scrollViewport",
    value: function (m, T, te, Se, ge) {
      return m.col >= 0 && m.row >= 0 && this.wtScroll.scrollViewport(m, T, te, Se, ge);
    }
  }, {
    key: "scrollViewportHorizontally",
    value: function (m, T, te) {
      return m >= 0 && this.wtScroll.scrollViewportHorizontally(m, T, te);
    }
  }, {
    key: "scrollViewportVertically",
    value: function (m, T, te) {
      return m >= 0 && this.wtScroll.scrollViewportVertically(m, T, te);
    }
  }, {
    key: "getViewport",
    value: function () {
      return [this.wtTable.getFirstVisibleRow(), this.wtTable.getFirstVisibleColumn(), this.wtTable.getLastVisibleRow(), this.wtTable.getLastVisibleColumn()];
    }
  }, {
    key: "destroy",
    value: function () {
      this.wtOverlays.destroy();
      this.wtEvent.destroy();
    }
  }, {
    key: "createScrollDao",
    value: function () {
      var m = this;
      return {
        get drawn() {
          return m.drawn;
        },
        get topOverlay() {
          return m.wtOverlays.topOverlay;
        },
        get inlineStartOverlay() {
          return m.wtOverlays.inlineStartOverlay;
        },
        get wtTable() {
          return m.wtTable;
        },
        get wtViewport() {
          return m.wtViewport;
        },
        get rootWindow() {
          return m.domBindings.rootWindow;
        },
        get totalRows() {
          return m.wtSettings.getSetting("totalRows");
        },
        get totalColumns() {
          return m.wtSettings.getSetting("totalColumns");
        },
        get fixedRowsTop() {
          return m.wtSettings.getSetting("fixedRowsTop");
        },
        get fixedRowsBottom() {
          return m.wtSettings.getSetting("fixedRowsBottom");
        },
        get fixedColumnsStart() {
          return m.wtSettings.getSetting("fixedColumnsStart");
        }
      };
    }
  }, {
    key: "getTableDao",
    value: function () {
      var m = this;
      return {
        get wot() {
          return m;
        },
        get parentTableOffset() {
          return m.cloneSource.wtTable.tableOffset;
        },
        get cloneSource() {
          return m.cloneSource;
        },
        get workspaceWidth() {
          return m.wtViewport.getWorkspaceWidth();
        },
        get wtViewport() {
          return m.wtViewport;
        },
        get wtOverlays() {
          return m.wtOverlays;
        },
        get selections() {
          return m.selections;
        },
        get drawn() {
          return m.drawn;
        },
        set drawn(T) {
          m.drawn = T;
        },
        get wtTable() {
          return m.wtTable;
        },
        get startColumnRendered() {
          return m.wtViewport.columnsRenderCalculator.startColumn;
        },
        get startColumnVisible() {
          return m.wtViewport.columnsVisibleCalculator.startColumn;
        },
        get endColumnRendered() {
          return m.wtViewport.columnsRenderCalculator.endColumn;
        },
        get endColumnVisible() {
          return m.wtViewport.columnsVisibleCalculator.endColumn;
        },
        get countColumnsRendered() {
          return m.wtViewport.columnsRenderCalculator.count;
        },
        get countColumnsVisible() {
          return m.wtViewport.columnsVisibleCalculator.count;
        },
        get startRowRendered() {
          return m.wtViewport.rowsRenderCalculator.startRow;
        },
        get startRowVisible() {
          return m.wtViewport.rowsVisibleCalculator.startRow;
        },
        get endRowRendered() {
          return m.wtViewport.rowsRenderCalculator.endRow;
        },
        get endRowVisible() {
          return m.wtViewport.rowsVisibleCalculator.endRow;
        },
        get countRowsRendered() {
          return m.wtViewport.rowsRenderCalculator.count;
        },
        get countRowsVisible() {
          return m.wtViewport.rowsVisibleCalculator.count;
        }
      };
    }
  }]);
  return D;
}();
function Os(D) {
  return (Os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Ga(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Hs(D, A) {
  return (Hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Io(D, A) {
  if (A && (Os(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return Sa(D);
}
function Sa(D) {
  if (D === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return D;
}
function Kc(D) {
  return (Kc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
function wc(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var Sc = function (D) {
  (function gl(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Hs(D, A);
    }
  })(m, D);
  var A = function As(D) {
    var A = function hl() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Kc(D);
      if (A) {
        var Se = Kc(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return Io(this, te);
    };
  }(m);
  function m(T, te, Se) {
    var ge;
    (function lo(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    wc(Sa(ge = A.call(this, T, te)), "cloneSource", undefined);
    wc(Sa(ge), "cloneOverlay", undefined);
    var Dt = ge.wtSettings.getSetting("facade", Sa(ge));
    ge.cloneSource = Se.source;
    ge.cloneOverlay = Se.overlay;
    ge.wtTable = ge.cloneOverlay.createTable(ge.getTableDao(), Dt, ge.domBindings, ge.wtSettings);
    ge.wtViewport = Se.viewport;
    ge.selections = Se.selections;
    ge.wtEvent = new ne(Dt, ge.domBindings, ge.wtSettings, ge.eventManager, ge.wtTable, ge.selections, Se.event);
    ge.findOriginalHeaders();
    return ge;
  }
  return function Zo(D, A, m) {
    if (A) {
      Ga(D.prototype, A);
    }
    if (m) {
      Ga(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    return D;
  }(m);
}(Ts);
function Vl(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var ic = function () {
  function D(A, m, T, te, Se) {
    (function gd(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    (function Gi(D, A, m) {
      if (A in D) {
        Object.defineProperty(D, A, {
          value: m,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        D[A] = m;
      }
    })(this, "wtSettings", null);
    (0, rt.jW)(this, "wot", A, {
      writable: false
    });
    this.domBindings = Se;
    this.facadeGetter = m;
    this.wtSettings = te;
    var ge = this.wot.wtTable;
    var Dt = ge.TABLE;
    var en = ge.hider;
    var tn = ge.spreader;
    var vn = ge.holder;
    var Vn = ge.wtRootElement;
    this.instance = this.wot;
    this.type = T;
    this.mainTableScrollableElement = null;
    this.TABLE = Dt;
    this.hider = en;
    this.spreader = tn;
    this.holder = vn;
    this.wtRootElement = Vn;
    this.trimmingContainer = (0, he.$g)(this.hider.parentNode.parentNode);
    this.updateStateOfRendering();
    this.clone = this.makeClone();
  }
  (function kl(D, A, m) {
    if (A) {
      Vl(D.prototype, A);
    }
    if (m) {
      Vl(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "updateStateOfRendering",
    value: function () {
      var m = this.needFullRender;
      this.needFullRender = this.shouldBeRendered();
      var T = m !== this.needFullRender;
      if (T && !this.needFullRender) {
        this.reset();
      }
      return T;
    }
  }, {
    key: "shouldBeRendered",
    value: function () {
      return true;
    }
  }, {
    key: "updateTrimmingContainer",
    value: function () {
      this.trimmingContainer = (0, he.$g)(this.hider.parentNode.parentNode);
    }
  }, {
    key: "updateMainScrollableElement",
    value: function () {
      var m = this.wot.wtTable;
      this.mainTableScrollableElement = this.domBindings.rootWindow.getComputedStyle(m.wtRootElement.parentNode).getPropertyValue("overflow") === "hidden" ? this.wot.wtTable.holder : (0, he.dD)(m.TABLE);
    }
  }, {
    key: "getRelativeCellPosition",
    value: function (m, T, te) {
      if (this.clone.wtTable.holder.contains(m) !== false) {
        var Se = this.mainTableScrollableElement === this.domBindings.rootWindow;
        var ge = te < this.wtSettings.getSetting("fixedColumnsStart");
        var Dt = T < this.wtSettings.getSetting("fixedRowsTop");
        var en = T >= this.wtSettings.getSetting("totalRows") - this.wtSettings.getSetting("fixedRowsBottom");
        var tn = this.clone.wtTable.spreader;
        var vn = {
          start: this.getRelativeStartPosition(tn),
          top: tn.offsetTop
        };
        var Vn = {
          start: this.getRelativeStartPosition(m),
          top: m.offsetTop
        };
        if (Se) {
          return this.getRelativeCellPositionWithinWindow(Dt, ge, Vn, vn);
        } else {
          return this.getRelativeCellPositionWithinHolder(Dt, en, ge, Vn, vn);
        }
      }
      (0, Ge.ZK)(`The provided element is not a child of the ${this.type} overlay`);
    }
  }, {
    key: "getRelativeStartPosition",
    value: function (m) {
      if (this.isRtl()) {
        return m.offsetParent.offsetWidth - m.offsetLeft - m.offsetWidth;
      } else {
        return m.offsetLeft;
      }
    }
  }, {
    key: "getRelativeCellPositionWithinWindow",
    value: function (m, T, te, Se) {
      var ge = this.wot.wtTable.wtRootElement.getBoundingClientRect();
      var Dt = 0;
      var en = 0;
      if (T) {
        var tn = ge.left;
        if (this.isRtl()) {
          tn = this.domBindings.rootWindow.innerWidth - (ge.left + ge.width + (0, he.np)());
        }
        Dt = tn <= 0 ? tn * -1 : 0;
      } else {
        Dt = Se.start;
      }
      en = m ? this.clone.wtTable.TABLE.getBoundingClientRect().top - ge.top : Se.top;
      return {
        start: te.start + Dt,
        top: te.top + en
      };
    }
  }, {
    key: "getRelativeCellPositionWithinHolder",
    value: function (m, T, te, Se, ge) {
      var Dt_horizontal = this.wot.wtOverlays.inlineStartOverlay.getScrollPosition();
      var Dt_vertical = this.wot.wtOverlays.topOverlay.getScrollPosition();
      var en = 0;
      var tn = 0;
      if (!te) {
        en = Dt_horizontal - ge.start;
      }
      if (T) {
        var vn = this.wot.wtTable.wtRootElement.getBoundingClientRect();
        tn = this.clone.wtTable.TABLE.getBoundingClientRect().top * -1 + vn.top;
      } else if (!m) {
        tn = Dt_vertical - ge.top;
      }
      return {
        start: Se.start - en,
        top: Se.top - tn
      };
    }
  }, {
    key: "makeClone",
    value: function () {
      if (_e.indexOf(this.type) === -1) {
        throw new Error(`Clone type "${this.type}" is not supported.`);
      }
      var m = this.wot.wtTable;
      var T = this.domBindings;
      var te = T.rootDocument;
      var Se = T.rootWindow;
      var ge = te.createElement("DIV");
      var Dt = te.createElement("TABLE");
      var en = m.wtRootElement.parentNode;
      ge.className = `${xt.get(this.type)} handsontable`;
      ge.setAttribute("dir", this.isRtl() ? "rtl" : "ltr");
      ge.style.position = "absolute";
      ge.style.top = 0;
      ge.style.overflow = "visible";
      if (this.isRtl()) {
        ge.style.right = 0;
      } else {
        ge.style.left = 0;
      }
      Dt.className = m.TABLE.className;
      ge.appendChild(Dt);
      en.appendChild(ge);
      var tn = this.wtSettings.getSetting("preventOverflow");
      this.mainTableScrollableElement = tn === true || tn === "horizontal" && this.type === el || tn === "vertical" && this.type === Mr ? Se : Se.getComputedStyle(en).getPropertyValue("overflow") === "hidden" ? m.holder : (0, he.dD)(m.TABLE);
      return new Sc(Dt, this.wtSettings, {
        source: this.wot,
        overlay: this,
        viewport: this.wot.wtViewport,
        event: this.wot.wtEvent,
        selections: this.wot.selections
      });
    }
  }, {
    key: "refresh",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var T = this.shouldBeRendered();
      if (this.clone && (this.needFullRender || T)) {
        this.clone.draw(m);
      }
      this.needFullRender = T;
    }
  }, {
    key: "reset",
    value: function () {
      if (this.clone) {
        var m = this.clone.wtTable.holder;
        (0, Oe.Bk)([m.style, this.clone.wtTable.hider.style, m.parentNode.style], function (Dt) {
          Dt.width = "";
          Dt.height = "";
        });
      }
    }
  }, {
    key: "isRtl",
    value: function () {
      return this.wtSettings.getSetting("rtlMode");
    }
  }, {
    key: "destroy",
    value: function () {
      this.clone.eventManager.destroy();
    }
  }]);
  return D;
}();
function tl(D) {
  return (tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function gr(D, A, m) {
  return (gr = mu() ? Reflect.construct.bind() : function (te, Se, ge) {
    var Dt = [null];
    Dt.push.apply(Dt, Se);
    var tn = new (Function.bind.apply(te, Dt))();
    if (ge) {
      Nc(tn, ge.prototype);
    }
    return tn;
  }).apply(null, arguments);
}
function Vu(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Nc(D, A) {
  return (Nc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function td(D, A) {
  if (A && (tl(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return Bd(D);
}
function Bd(D) {
  if (D === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return D;
}
function mu() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function jo(D) {
  return (jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var bl = function (D) {
  (function $l(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Nc(D, A);
    }
  })(m, D);
  var A = function Da(D) {
    var A = mu();
    return function () {
      var te;
      var T = jo(D);
      if (A) {
        var Se = jo(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return td(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    var Dt;
    (function ro(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (function nd(D, A, m) {
      if (A in D) {
        Object.defineProperty(D, A, {
          value: m,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        D[A] = m;
      }
    })(Bd(Dt = A.call(this, T, te, el, Se, ge)), "cachedFixedRowsTop", -1);
    Dt.cachedFixedRowsTop = Dt.wtSettings.getSetting("fixedRowsTop");
    return Dt;
  }
  (function Zl(D, A, m) {
    if (A) {
      Vu(D.prototype, A);
    }
    if (m) {
      Vu(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "createTable",
    value: function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return gr(bs, Se);
    }
  }, {
    key: "shouldBeRendered",
    value: function () {
      return this.wtSettings.getSetting("shouldRenderTopOverlay");
    }
  }, {
    key: "resetFixedPosition",
    value: function () {
      if (!this.needFullRender || !this.wot.wtTable.holder.parentNode) {
        return false;
      }
      var te = this.clone.wtTable.holder.parentNode;
      var Se = this.domBindings.rootWindow;
      var ge = this.wtSettings.getSetting("preventOverflow");
      var Dt = 0;
      var en = false;
      if (this.trimmingContainer !== Se || ge && ge === "vertical") {
        Dt = this.getScrollPosition();
        (0, he.WH)(te);
      } else {
        var vn = this.wot.wtTable.hider.getBoundingClientRect();
        en = Math.ceil(vn.bottom) === te.offsetHeight;
        Dt = this.getOverlayOffset();
        (0, he.I2)(te, "0px", `${Dt}px`);
      }
      var ii = this.adjustHeaderBordersPosition(Dt, en);
      this.adjustElementsSize();
      return ii;
    }
  }, {
    key: "setScrollPosition",
    value: function (te) {
      var Se = this.domBindings.rootWindow;
      var ge = false;
      if (this.mainTableScrollableElement === Se && Se.scrollY !== te) {
        Se.scrollTo((0, he.DZ)(Se), te);
        ge = true;
      } else if (this.mainTableScrollableElement.scrollTop !== te) {
        this.mainTableScrollableElement.scrollTop = te;
        ge = true;
      }
      return ge;
    }
  }, {
    key: "onScroll",
    value: function () {
      this.wtSettings.getSetting("onScrollHorizontally");
    }
  }, {
    key: "sumCellSizes",
    value: function (te, Se) {
      for (var ge = this.wtSettings.getSetting("defaultRowHeight"), Dt = te, en = 0; Dt < Se;) {
        var tn = this.wot.wtTable.getRowHeight(Dt);
        en += tn === undefined ? ge : tn;
        Dt += 1;
      }
      return en;
    }
  }, {
    key: "adjustElementsSize",
    value: function () {
      var te = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      this.updateTrimmingContainer();
      if (this.needFullRender || te) {
        this.adjustRootElementSize();
        this.adjustRootChildrenSize();
      }
    }
  }, {
    key: "adjustRootElementSize",
    value: function () {
      var te = this.wot.wtTable;
      var Se = this.domBindings;
      var Dt = Se.rootWindow;
      var en = (0, he.np)(Se.rootDocument);
      var vn = this.clone.wtTable.holder.parentNode.style;
      var Vn = this.wtSettings.getSetting("preventOverflow");
      if (this.trimmingContainer !== Dt || Vn === "horizontal") {
        var Qn = this.wot.wtViewport.getWorkspaceWidth();
        if (this.wot.wtOverlays.hasScrollbarRight) {
          Qn -= en;
        }
        Qn = Math.min(Qn, te.wtRootElement.scrollWidth);
        vn.width = `${Qn}px`;
      } else {
        vn.width = "";
      }
      this.clone.wtTable.holder.style.width = vn.width;
      var ii = (0, he.Pb)(this.clone.wtTable.TABLE);
      if (!this.wot.wtTable.hasDefinedSize()) {
        ii = 0;
      }
      vn.height = `${ii}px`;
    }
  }, {
    key: "adjustRootChildrenSize",
    value: function () {
      var Se = this.clone.wtTable.holder;
      var ge = this.wot.selections;
      var Dt = this.facadeGetter();
      var en = Math.abs(ge?.getCell().getBorder(Dt).cornerCenterPointOffset ?? 0);
      this.clone.wtTable.hider.style.width = this.hider.style.width;
      Se.style.width = Se.parentNode.style.width;
      Se.style.height = `${parseInt(Se.parentNode.style.height, 10) + en}px`;
    }
  }, {
    key: "applyToDOM",
    value: function () {
      var te = this.wtSettings.getSetting("totalRows");
      if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition == "number") {
        this.spreader.style.top = `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px`;
      } else {
        if (te !== 0) {
          throw new Error("Incorrect value of the rowsRenderCalculator");
        }
        this.spreader.style.top = "0";
      }
      this.spreader.style.bottom = "";
      if (this.needFullRender) {
        this.syncOverlayOffset();
      }
    }
  }, {
    key: "syncOverlayOffset",
    value: function () {
      var te = this.isRtl() ? "right" : "left";
      this.clone.wtTable.spreader.style[te] = typeof this.wot.wtViewport.columnsRenderCalculator.startPosition == "number" ? `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px` : "";
    }
  }, {
    key: "scrollTo",
    value: function (te, Se) {
      var ge = this.wot;
      var Dt = this.wtSettings;
      var tn = (ge.cloneSource ? ge.cloneSource : ge).wtTable.holder;
      var vn = this.getTableParentOffset();
      var Vn = 0;
      if (Se && this.wot.wtTable.getRowHeight(te) > this.wot.wtViewport.getViewportHeight()) {
        Se = false;
      }
      if (Se && tn.offsetHeight !== tn.clientHeight) {
        Vn = (0, he.np)(this.domBindings.rootDocument);
      }
      if (Se) {
        var _i = Dt.getSetting("fixedRowsBottom");
        var Li = Dt.getSetting("totalRows");
        vn += this.sumCellSizes(0, te + 1);
        vn -= ge.wtViewport.getViewportHeight() - this.sumCellSizes(Li - _i, Li);
        vn += 1;
      } else {
        vn += this.sumCellSizes(Dt.getSetting("fixedRowsTop"), te);
      }
      return this.setScrollPosition(vn += Vn);
    }
  }, {
    key: "getTableParentOffset",
    value: function () {
      if (this.mainTableScrollableElement === this.domBindings.rootWindow) {
        return this.wot.wtTable.holderOffset.top;
      } else {
        return 0;
      }
    }
  }, {
    key: "getScrollPosition",
    value: function () {
      return (0, he.cx)(this.mainTableScrollableElement, this.domBindings.rootWindow);
    }
  }, {
    key: "getOverlayOffset",
    value: function () {
      var te = this.domBindings.rootWindow;
      var Se = this.wtSettings.getSetting("preventOverflow");
      var ge = 0;
      if (this.trimmingContainer === te && (!Se || Se !== "vertical")) {
        var tn = this.wot.wtTable.getTotalHeight() - this.clone.wtTable.getTotalHeight();
        if ((ge = Math.max(this.getScrollPosition() - this.getTableParentOffset(), 0)) > tn) {
          ge = 0;
        }
      }
      return ge;
    }
  }, {
    key: "adjustHeaderBordersPosition",
    value: function (te) {
      var Se = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      var ge = this.wot.wtTable.holder.parentNode;
      var Dt = this.wtSettings.getSetting("totalColumns");
      if (Dt) {
        (0, he.IV)(ge, "emptyColumns");
      } else {
        (0, he.cn)(ge, "emptyColumns");
      }
      var en = false;
      if (!Se) {
        var tn = this.wtSettings.getSetting("fixedRowsTop");
        var vn = this.cachedFixedRowsTop !== tn;
        var Vn = this.wtSettings.getSetting("columnHeaders");
        if ((vn || tn === 0) && Vn.length > 0) {
          var Qn = (0, he.pv)(ge, "innerBorderTop");
          this.cachedFixedRowsTop = this.wtSettings.getSetting("fixedRowsTop");
          if (te || this.wtSettings.getSetting("totalRows") === 0) {
            (0, he.cn)(ge, "innerBorderTop");
            en = !Qn;
          } else {
            (0, he.IV)(ge, "innerBorderTop");
            en = Qn;
          }
        }
      }
      return en;
    }
  }]);
  return m;
}(ic);
var Qo = {
  getFirstRenderedRow: function () {
    var A = this.wtSettings.getSetting("totalRows");
    var m = this.wtSettings.getSetting("fixedRowsBottom");
    var T = A - m;
    if (A === 0 || m === 0) {
      return -1;
    } else if (T < 0) {
      return 0;
    } else {
      return T;
    }
  },
  getFirstVisibleRow: function () {
    return this.getFirstRenderedRow();
  },
  getLastRenderedRow: function () {
    return this.wtSettings.getSetting("totalRows") - 1;
  },
  getLastVisibleRow: function () {
    return this.getLastRenderedRow();
  },
  getRenderedRowsCount: function () {
    var A = this.wtSettings.getSetting("totalRows");
    return Math.min(this.wtSettings.getSetting("fixedRowsBottom"), A);
  },
  getVisibleRowsCount: function () {
    return this.getRenderedRowsCount();
  }
};
(0, rt.jW)(Qo, "MIXIN_NAME", "stickyRowsBottom", {
  writable: false,
  enumerable: false
});
const Eo = Qo;
function ml(D) {
  return (ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function $o(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Ii(D, A) {
  return (Ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function cc(D, A) {
  if (A && (ml(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function ir(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function To(D) {
  return (To = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var vu = function (D) {
  (function Ps(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Ii(D, A);
    }
  })(m, D);
  var A = function lc(D) {
    var A = function uc() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = To(D);
      if (A) {
        var Se = To(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return cc(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    (function mc(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, T, te, Se, ge, Fa);
  }
  return function Su(D, A, m) {
    if (A) {
      $o(D.prototype, A);
    }
    if (m) {
      $o(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    return D;
  }(m);
}(wi);
(0, rt.jB)(vu, Eo);
(0, rt.jB)(vu, Fn);
const rc = vu;
function Gl(D) {
  return (Gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Al(D, A, m) {
  return (Al = sc() ? Reflect.construct.bind() : function (te, Se, ge) {
    var Dt = [null];
    Dt.push.apply(Dt, Se);
    var tn = new (Function.bind.apply(te, Dt))();
    if (ge) {
      md(tn, ge.prototype);
    }
    return tn;
  }).apply(null, arguments);
}
function Xc(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function md(D, A) {
  return (md = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Ll(D, A) {
  if (A && (Gl(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return Hc(D);
}
function Hc(D) {
  if (D === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return D;
}
function sc() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Uc(D) {
  return (Uc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var vc = function (D) {
  (function Xd(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      md(D, A);
    }
  })(m, D);
  var A = function id(D) {
    var A = sc();
    return function () {
      var te;
      var T = Uc(D);
      if (A) {
        var Se = Uc(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return Ll(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    var Dt;
    (function wd(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (function Du(D, A, m) {
      if (A in D) {
        Object.defineProperty(D, A, {
          value: m,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        D[A] = m;
      }
    })(Hc(Dt = A.call(this, T, te, Fa, Se, ge)), "cachedFixedRowsBottom", -1);
    Dt.cachedFixedRowsBottom = Dt.wtSettings.getSetting("fixedRowsBottom");
    return Dt;
  }
  (function Xl(D, A, m) {
    if (A) {
      Xc(D.prototype, A);
    }
    if (m) {
      Xc(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "createTable",
    value: function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return Al(rc, Se);
    }
  }, {
    key: "shouldBeRendered",
    value: function () {
      return this.wtSettings.getSetting("shouldRenderBottomOverlay");
    }
  }, {
    key: "resetFixedPosition",
    value: function () {
      if (!this.needFullRender || !this.wot.wtTable.holder.parentNode) {
        return false;
      }
      var te = this.domBindings.rootWindow;
      var Se = this.clone.wtTable.holder.parentNode;
      Se.style.top = "";
      var ge = 0;
      var Dt = this.wtSettings.getSetting("preventOverflow");
      if (this.trimmingContainer !== te || Dt && Dt === "vertical") {
        ge = this.getScrollPosition();
        this.repositionOverlay();
      } else {
        ge = this.getOverlayOffset();
        Se.style.bottom = `${ge}px`;
      }
      var en = this.adjustHeaderBordersPosition(ge);
      this.adjustElementsSize();
      return en;
    }
  }, {
    key: "repositionOverlay",
    value: function () {
      var te = this.wot;
      var Se = te.wtTable;
      var ge = te.wtViewport;
      var Dt = this.domBindings.rootDocument;
      var en = this.clone.wtTable.holder.parentNode;
      var tn = 0;
      if (!ge.hasVerticalScroll()) {
        tn += ge.getWorkspaceHeight() - Se.getTotalHeight();
      }
      if (ge.hasVerticalScroll() && ge.hasHorizontalScroll()) {
        tn += (0, he.np)(Dt);
      }
      en.style.bottom = `${tn}px`;
    }
  }, {
    key: "setScrollPosition",
    value: function (te) {
      var Se = this.domBindings.rootWindow;
      var ge = false;
      if (this.mainTableScrollableElement === Se) {
        Se.scrollTo((0, he.DZ)(Se), te);
        ge = true;
      } else if (this.mainTableScrollableElement.scrollTop !== te) {
        this.mainTableScrollableElement.scrollTop = te;
        ge = true;
      }
      return ge;
    }
  }, {
    key: "onScroll",
    value: function () {
      this.wtSettings.getSetting("onScrollHorizontally");
    }
  }, {
    key: "sumCellSizes",
    value: function (te, Se) {
      for (var ge = this.wot, Dt = ge.wtTable, tn = ge.wtSettings.getSetting("defaultRowHeight"), vn = te, Vn = 0; vn < Se;) {
        var Qn = Dt.getRowHeight(vn);
        Vn += Qn === undefined ? tn : Qn;
        vn += 1;
      }
      return Vn;
    }
  }, {
    key: "adjustElementsSize",
    value: function () {
      var te = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      this.updateTrimmingContainer();
      if (this.needFullRender || te) {
        this.adjustRootElementSize();
        this.adjustRootChildrenSize();
      }
    }
  }, {
    key: "adjustRootElementSize",
    value: function () {
      var te = this.wot;
      var Se = te.wtTable;
      var ge = te.wtViewport;
      var Dt = this.domBindings;
      var tn = Dt.rootWindow;
      var vn = (0, he.np)(Dt.rootDocument);
      var Qn = this.clone.wtTable.holder.parentNode.style;
      var ii = this.wtSettings.getSetting("preventOverflow");
      if (this.trimmingContainer !== tn || ii === "horizontal") {
        var _i = ge.getWorkspaceWidth();
        if (this.wot.wtOverlays.hasScrollbarRight) {
          _i -= vn;
        }
        _i = Math.min(_i, Se.wtRootElement.scrollWidth);
        Qn.width = `${_i}px`;
      } else {
        Qn.width = "";
      }
      this.clone.wtTable.holder.style.width = Qn.width;
      var Li = (0, he.Pb)(this.clone.wtTable.TABLE);
      if (!this.wot.wtTable.hasDefinedSize()) {
        Li = 0;
      }
      Qn.height = `${Li}px`;
    }
  }, {
    key: "adjustRootChildrenSize",
    value: function () {
      var te = this.clone.wtTable.holder;
      this.clone.wtTable.hider.style.width = this.hider.style.width;
      te.style.width = te.parentNode.style.width;
      te.style.height = te.parentNode.style.height;
    }
  }, {
    key: "applyToDOM",
    value: function () {
      var te = this.wtSettings.getSetting("totalRows");
      if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition == "number") {
        this.spreader.style.top = `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px`;
      } else {
        if (te !== 0) {
          throw new Error("Incorrect value of the rowsRenderCalculator");
        }
        this.spreader.style.top = "0";
      }
      this.spreader.style.bottom = "";
      if (this.needFullRender) {
        this.syncOverlayOffset();
      }
    }
  }, {
    key: "syncOverlayOffset",
    value: function () {
      var te = this.isRtl() ? "right" : "left";
      this.clone.wtTable.spreader.style[te] = typeof this.wot.wtViewport.columnsRenderCalculator.startPosition == "number" ? `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px` : "";
    }
  }, {
    key: "scrollTo",
    value: function (te, Se) {
      var ge = this.getTableParentOffset();
      var en = (this.wot.cloneSource ? this.wot.cloneSource : this.wot).wtTable.holder;
      var tn = 0;
      if (Se && en.offsetHeight !== en.clientHeight) {
        tn = (0, he.np)(this.domBindings.rootDocument);
      }
      if (Se) {
        ge += this.sumCellSizes(0, te + 1);
        ge -= this.wot.wtViewport.getViewportHeight();
        ge += 1;
      } else {
        ge += this.sumCellSizes(this.wtSettings.getSetting("fixedRowsBottom"), te);
      }
      this.setScrollPosition(ge += tn);
    }
  }, {
    key: "getTableParentOffset",
    value: function () {
      if (this.mainTableScrollableElement === this.domBindings.rootWindow) {
        return this.wot.wtTable.holderOffset.top;
      } else {
        return 0;
      }
    }
  }, {
    key: "getScrollPosition",
    value: function () {
      return (0, he.cx)(this.mainTableScrollableElement, this.domBindings.rootWindow);
    }
  }, {
    key: "getOverlayOffset",
    value: function () {
      var te = this.domBindings.rootWindow;
      var Se = this.wtSettings.getSetting("preventOverflow");
      var ge = 0;
      if (this.trimmingContainer === te && (!Se || Se !== "vertical")) {
        var Dt = this.wot.wtTable.getTotalHeight();
        var tn = Dt - this.clone.wtTable.getTotalHeight();
        var vn = this.domBindings.rootDocument.documentElement.clientHeight;
        if ((ge = Math.max(this.getTableParentOffset() - this.getScrollPosition() - vn + Dt, 0)) > tn) {
          ge = 0;
        }
      }
      return ge;
    }
  }, {
    key: "adjustHeaderBordersPosition",
    value: function (te) {
      var Se = this.wtSettings.getSetting("fixedRowsBottom");
      var ge = this.cachedFixedRowsBottom !== Se;
      var Dt = this.wtSettings.getSetting("columnHeaders");
      var en = false;
      if ((ge || Se === 0) && Dt.length > 0) {
        var tn = this.wot.wtTable.holder.parentNode;
        var vn = (0, he.pv)(tn, "innerBorderBottom");
        this.cachedFixedRowsBottom = this.wtSettings.getSetting("fixedRowsBottom");
        if (te || this.wtSettings.getSetting("totalRows") === 0) {
          (0, he.cn)(tn, "innerBorderBottom");
          en = !vn;
        } else {
          (0, he.IV)(tn, "innerBorderBottom");
          en = vn;
        }
      }
      return en;
    }
  }]);
  return m;
}(ic);
var yc = {
  getFirstRenderedRow: function () {
    var A = this.dataAccessObject.startRowRendered;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getFirstVisibleRow: function () {
    var A = this.dataAccessObject.startRowVisible;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getLastRenderedRow: function () {
    var A = this.dataAccessObject.endRowRendered;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getLastVisibleRow: function () {
    var A = this.dataAccessObject.endRowVisible;
    if (A === null) {
      return -1;
    } else {
      return A;
    }
  },
  getRenderedRowsCount: function () {
    return this.dataAccessObject.countRowsRendered;
  },
  getVisibleRowsCount: function () {
    return this.dataAccessObject.countRowsVisible;
  }
};
(0, rt.jW)(yc, "MIXIN_NAME", "calculatedRows", {
  writable: false,
  enumerable: false
});
const Vd = yc;
var Mo = {
  getFirstRenderedColumn: function () {
    if (this.wtSettings.getSetting("totalColumns") === 0) {
      return -1;
    } else {
      return 0;
    }
  },
  getFirstVisibleColumn: function () {
    return this.getFirstRenderedColumn();
  },
  getLastRenderedColumn: function () {
    return this.getRenderedColumnsCount() - 1;
  },
  getLastVisibleColumn: function () {
    return this.getLastRenderedColumn();
  },
  getRenderedColumnsCount: function () {
    var A = this.wtSettings.getSetting("totalColumns");
    return Math.min(this.wtSettings.getSetting("fixedColumnsStart"), A);
  },
  getVisibleColumnsCount: function () {
    return this.getRenderedColumnsCount();
  }
};
(0, rt.jW)(Mo, "MIXIN_NAME", "stickyColumnsStart", {
  writable: false,
  enumerable: false
});
const ol = Mo;
function Sd(D) {
  return (Sd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function mf(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Dl(D, A) {
  return (Dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Il(D, A) {
  if (A && (Sd(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function yu(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function pl(D) {
  return (pl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var Bc = function (D) {
  (function Ta(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Dl(D, A);
    }
  })(m, D);
  var A = function Qa(D) {
    var A = function Rl() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = pl(D);
      if (A) {
        var Se = pl(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return Il(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    (function ts(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, T, te, Se, ge, Mr);
  }
  return function za(D, A, m) {
    if (A) {
      mf(D.prototype, A);
    }
    if (m) {
      mf(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    return D;
  }(m);
}(wi);
(0, rt.jB)(Bc, Vd);
(0, rt.jB)(Bc, ol);
const Hd = Bc;
function ru(D) {
  return (ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Pl(D, A, m) {
  return (Pl = kt() ? Reflect.construct.bind() : function (te, Se, ge) {
    var Dt = [null];
    Dt.push.apply(Dt, Se);
    var tn = new (Function.bind.apply(te, Dt))();
    if (ge) {
      je(tn, ge.prototype);
    }
    return tn;
  }).apply(null, arguments);
}
function Wc(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function je(D, A) {
  return (je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function ye(D, A) {
  if (A && (ru(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function gt(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function kt() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function fn(D) {
  return (fn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var Nn = function (D) {
  (function Dc(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      je(D, A);
    }
  })(m, D);
  var A = function Ie(D) {
    var A = kt();
    return function () {
      var te;
      var T = fn(D);
      if (A) {
        var Se = fn(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return ye(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    (function ll(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, T, te, Mr, Se, ge);
  }
  (function su(D, A, m) {
    if (A) {
      Wc(D.prototype, A);
    }
    if (m) {
      Wc(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "createTable",
    value: function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return Pl(Hd, Se);
    }
  }, {
    key: "shouldBeRendered",
    value: function () {
      return this.wtSettings.getSetting("shouldRenderInlineStartOverlay");
    }
  }, {
    key: "resetFixedPosition",
    value: function () {
      if (!this.needFullRender || !this.wot.wtTable.holder.parentNode) {
        return false;
      }
      var Se = this.domBindings.rootWindow;
      var ge = this.clone.wtTable.holder.parentNode;
      var Dt = this.wtSettings.getSetting("preventOverflow");
      var en = 0;
      if (this.trimmingContainer !== Se || Dt && Dt === "horizontal") {
        en = this.getScrollPosition();
        (0, he.WH)(ge);
      } else {
        en = this.getOverlayOffset() * (this.isRtl() ? -1 : 1);
        (0, he.I2)(ge, `${en}px`, "0px");
      }
      var tn = this.adjustHeaderBordersPosition(en);
      this.adjustElementsSize();
      return tn;
    }
  }, {
    key: "setScrollPosition",
    value: function (te) {
      var Se = this.domBindings.rootWindow;
      var ge = false;
      if (this.isRtl()) {
        te = -te;
      }
      if (this.mainTableScrollableElement === Se && Se.scrollX !== te) {
        Se.scrollTo(te, (0, he.AQ)(Se));
        ge = true;
      } else if (this.mainTableScrollableElement.scrollLeft !== te) {
        this.mainTableScrollableElement.scrollLeft = te;
        ge = true;
      }
      return ge;
    }
  }, {
    key: "onScroll",
    value: function () {
      this.wtSettings.getSetting("onScrollVertically");
    }
  }, {
    key: "sumCellSizes",
    value: function (te, Se) {
      for (var ge = this.wtSettings.getSetting("defaultColumnWidth"), Dt = te, en = 0; Dt < Se;) {
        en += this.wot.wtTable.getStretchedColumnWidth(Dt) || ge;
        Dt += 1;
      }
      return en;
    }
  }, {
    key: "adjustElementsSize",
    value: function () {
      var te = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      this.updateTrimmingContainer();
      if (this.needFullRender || te) {
        this.adjustRootElementSize();
        this.adjustRootChildrenSize();
      }
    }
  }, {
    key: "adjustRootElementSize",
    value: function () {
      var te = this.wot.wtTable;
      var Se = this.domBindings;
      var Dt = Se.rootWindow;
      var en = (0, he.np)(Se.rootDocument);
      var vn = this.clone.wtTable.holder.parentNode.style;
      var Vn = this.wtSettings.getSetting("preventOverflow");
      if (this.trimmingContainer !== Dt || Vn === "vertical") {
        var Qn = this.wot.wtViewport.getWorkspaceHeight();
        if (this.wot.wtOverlays.hasScrollbarBottom) {
          Qn -= en;
        }
        Qn = Math.min(Qn, te.wtRootElement.scrollHeight);
        vn.height = `${Qn}px`;
      } else {
        vn.height = "";
      }
      this.clone.wtTable.holder.style.height = vn.height;
      var ii = (0, he.iO)(this.clone.wtTable.TABLE);
      vn.width = `${ii}px`;
    }
  }, {
    key: "adjustRootChildrenSize",
    value: function () {
      var Se = this.clone.wtTable.holder;
      var ge = this.wot.selections;
      var Dt = this.facadeGetter();
      var en = Math.abs(ge?.getCell().getBorder(Dt).cornerCenterPointOffset ?? 0);
      this.clone.wtTable.hider.style.height = this.hider.style.height;
      Se.style.height = Se.parentNode.style.height;
      Se.style.width = `${parseInt(Se.parentNode.style.width, 10) + en}px`;
    }
  }, {
    key: "applyToDOM",
    value: function () {
      var te = this.wtSettings.getSetting("totalColumns");
      var Se = this.isRtl() ? "right" : "left";
      if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition == "number") {
        this.spreader.style[Se] = `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px`;
      } else {
        if (te !== 0) {
          throw new Error("Incorrect value of the columnsRenderCalculator");
        }
        this.spreader.style[Se] = "0";
      }
      if (this.isRtl()) {
        this.spreader.style.left = "";
      } else {
        this.spreader.style.right = "";
      }
      if (this.needFullRender) {
        this.syncOverlayOffset();
      }
    }
  }, {
    key: "syncOverlayOffset",
    value: function () {
      this.clone.wtTable.spreader.style.top = typeof this.wot.wtViewport.rowsRenderCalculator.startPosition == "number" ? `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px` : "";
    }
  }, {
    key: "scrollTo",
    value: function (te, Se) {
      var ge = this.getTableParentOffset();
      var en = (this.wot.cloneSource ? this.wot.cloneSource : this.wot).wtTable.holder;
      var tn = 0;
      if (Se && this.wot.wtTable.getColumnWidth(te) > this.wot.wtViewport.getViewportWidth()) {
        Se = false;
      }
      if (Se && en.offsetWidth !== en.clientWidth) {
        tn = (0, he.np)(this.domBindings.rootDocument);
      }
      if (Se) {
        ge += this.sumCellSizes(0, te + 1);
        ge -= this.wot.wtViewport.getViewportWidth();
      } else {
        ge += this.sumCellSizes(this.wtSettings.getSetting("fixedColumnsStart"), te);
      }
      return this.setScrollPosition(ge += tn);
    }
  }, {
    key: "getTableParentOffset",
    value: function () {
      var Se = 0;
      if (!this.wtSettings.getSetting("preventOverflow") && this.trimmingContainer === this.domBindings.rootWindow) {
        Se = this.wot.wtTable.holderOffset.left;
      }
      return Se;
    }
  }, {
    key: "getScrollPosition",
    value: function () {
      return Math.abs((0, he.vj)(this.mainTableScrollableElement, this.domBindings.rootWindow));
    }
  }, {
    key: "getOverlayOffset",
    value: function () {
      var te = this.domBindings.rootWindow;
      var Se = this.wtSettings.getSetting("preventOverflow");
      var ge = 0;
      if (this.trimmingContainer === te && (!Se || Se !== "horizontal")) {
        if ((ge = this.isRtl() ? Math.abs(Math.min(this.getTableParentOffset() - this.getScrollPosition(), 0)) : Math.max(this.getScrollPosition() - this.getTableParentOffset(), 0)) > this.wot.wtTable.getTotalWidth() - this.clone.wtTable.getTotalWidth()) {
          ge = 0;
        }
      }
      return ge;
    }
  }, {
    key: "adjustHeaderBordersPosition",
    value: function (te) {
      var Se = this.wot.wtTable.holder.parentNode;
      var ge = this.wtSettings.getSetting("rowHeaders");
      var Dt = this.wtSettings.getSetting("fixedColumnsStart");
      if (this.wtSettings.getSetting("totalRows")) {
        (0, he.IV)(Se, "emptyRows");
      } else {
        (0, he.cn)(Se, "emptyRows");
      }
      var tn = false;
      if (Dt && !ge.length) {
        (0, he.cn)(Se, "innerBorderLeft innerBorderInlineStart");
      } else if (!Dt && ge.length) {
        var vn = (0, he.pv)(Se, "innerBorderInlineStart");
        if (te) {
          (0, he.cn)(Se, "innerBorderLeft innerBorderInlineStart");
          tn = !vn;
        } else {
          (0, he.IV)(Se, "innerBorderLeft innerBorderInlineStart");
          tn = vn;
        }
      }
      return tn;
    }
  }]);
  return m;
}(ic);
function Tn(D) {
  return (Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Ri(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Ke(D, A) {
  return (Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function jt(D, A) {
  if (A && (Tn(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function On(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Bi(D) {
  return (Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var wr = function (D) {
  (function Nt(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Ke(D, A);
    }
  })(m, D);
  var A = function We(D) {
    var A = function ri() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Bi(D);
      if (A) {
        var Se = Bi(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return jt(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    (function Bs(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, T, te, Se, ge, Xe);
  }
  return function Yr(D, A, m) {
    if (A) {
      Ri(D.prototype, A);
    }
    if (m) {
      Ri(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    return D;
  }(m);
}(wi);
(0, rt.jB)(wr, wt);
(0, rt.jB)(wr, ol);
const Kr = wr;
function oe(D) {
  return (oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function we(D, A, m) {
  return (we = go() ? Reflect.construct.bind() : function (te, Se, ge) {
    var Dt = [null];
    Dt.push.apply(Dt, Se);
    var tn = new (Function.bind.apply(te, Dt))();
    if (ge) {
      Ei(tn, ge.prototype);
    }
    return tn;
  }).apply(null, arguments);
}
function nt(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Ei(D, A) {
  return (Ei = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function xs(D, A) {
  if (A && (oe(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _a(D);
}
function _a(D) {
  if (D === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return D;
}
function go() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Ja(D) {
  return (Ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
function oc(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var ou = function (D) {
  (function Pn(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Ei(D, A);
    }
  })(m, D);
  var A = function Hi(D) {
    var A = go();
    return function () {
      var te;
      var T = Ja(D);
      if (A) {
        var Se = Ja(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return xs(this, te);
    };
  }(m);
  function m(T, te, Se, ge, Dt, en) {
    var tn;
    (function ce(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    oc(_a(tn = A.call(this, T, te, Xe, Se, ge)), "topOverlay", undefined);
    oc(_a(tn), "inlineStartOverlay", undefined);
    tn.topOverlay = Dt;
    tn.inlineStartOverlay = en;
    return tn;
  }
  (function sn(D, A, m) {
    if (A) {
      nt(D.prototype, A);
    }
    if (m) {
      nt(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "createTable",
    value: function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return we(Kr, Se);
    }
  }, {
    key: "shouldBeRendered",
    value: function () {
      return this.wtSettings.getSetting("shouldRenderTopOverlay") && this.wtSettings.getSetting("shouldRenderInlineStartOverlay");
    }
  }, {
    key: "resetFixedPosition",
    value: function () {
      this.updateTrimmingContainer();
      if (!this.wot.wtTable.holder.parentNode) {
        return false;
      }
      var te = this.clone.wtTable.holder.parentNode;
      if (this.trimmingContainer === this.domBindings.rootWindow) {
        var Se = this.inlineStartOverlay.getOverlayOffset() * (this.isRtl() ? -1 : 1);
        var ge = this.topOverlay.getOverlayOffset();
        (0, he.I2)(te, `${Se}px`, `${ge}px`);
      } else {
        (0, he.WH)(te);
      }
      var Dt = (0, he.Pb)(this.clone.wtTable.TABLE);
      var en = (0, he.iO)(this.clone.wtTable.TABLE);
      if (!this.wot.wtTable.hasDefinedSize()) {
        Dt = 0;
      }
      te.style.height = `${Dt}px`;
      te.style.width = `${en}px`;
      return false;
    }
  }]);
  return m;
}(ic);
function Cl(D) {
  return (Cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function yl(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Wl(D, A) {
  return (Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Tu(D, A) {
  if (A && (Cl(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function qd(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Tc(D) {
  return (Tc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var jl = function (D) {
  (function Go(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Wl(D, A);
    }
  })(m, D);
  var A = function Yc(D) {
    var A = function Zc() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Tc(D);
      if (A) {
        var Se = Tc(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return Tu(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    (function _c(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, T, te, Se, ge, $t);
  }
  return function Hl(D, A, m) {
    if (A) {
      yl(D.prototype, A);
    }
    if (m) {
      yl(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    return D;
  }(m);
}(wi);
(0, rt.jB)(jl, Eo);
(0, rt.jB)(jl, ol);
const na = jl;
function rd(D) {
  return (rd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function au(D, A, m) {
  return (au = Wd() ? Reflect.construct.bind() : function (te, Se, ge) {
    var Dt = [null];
    Dt.push.apply(Dt, Se);
    var tn = new (Function.bind.apply(te, Dt))();
    if (ge) {
      lu(tn, ge.prototype);
    }
    return tn;
  }).apply(null, arguments);
}
function sd(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function lu(D, A) {
  return (lu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function vf(D, A) {
  if (A && (rd(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function vd(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Wd() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function yd(D) {
  return (yd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var Hu = function (D) {
  (function ql(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      lu(D, A);
    }
  })(m, D);
  var A = function Qc(D) {
    var A = Wd();
    return function () {
      var te;
      var T = yd(D);
      if (A) {
        var Se = yd(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return vf(this, te);
    };
  }(m);
  function m(T, te, Se, ge, Dt, en) {
    var tn;
    (function jc(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (tn = A.call(this, T, te, $t, Se, ge)).bottomOverlay = Dt;
    tn.inlineStartOverlay = en;
    return tn;
  }
  (function od(D, A, m) {
    if (A) {
      sd(D.prototype, A);
    }
    if (m) {
      sd(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "createTable",
    value: function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return au(na, Se);
    }
  }, {
    key: "shouldBeRendered",
    value: function () {
      return this.wtSettings.getSetting("shouldRenderBottomOverlay") && this.wtSettings.getSetting("shouldRenderInlineStartOverlay");
    }
  }, {
    key: "resetFixedPosition",
    value: function () {
      var te = this.wot;
      this.updateTrimmingContainer();
      if (!te.wtTable.holder.parentNode) {
        return false;
      }
      var Se = this.clone.wtTable.holder.parentNode;
      Se.style.top = "";
      if (this.trimmingContainer === this.domBindings.rootWindow) {
        var ge = this.inlineStartOverlay.getOverlayOffset();
        var Dt = this.bottomOverlay.getOverlayOffset();
        Se.style[this.isRtl() ? "right" : "left"] = `${ge}px`;
        Se.style.bottom = `${Dt}px`;
      } else {
        (0, he.WH)(Se);
        this.repositionOverlay();
      }
      var en = (0, he.Pb)(this.clone.wtTable.TABLE);
      var tn = (0, he.iO)(this.clone.wtTable.TABLE);
      if (!this.wot.wtTable.hasDefinedSize()) {
        en = 0;
      }
      Se.style.height = `${en}px`;
      Se.style.width = `${tn}px`;
      return false;
    }
  }, {
    key: "repositionOverlay",
    value: function () {
      var te = this.wot;
      var Se = te.wtTable;
      var ge = te.wtViewport;
      var Dt = this.domBindings.rootDocument;
      var en = this.clone.wtTable.holder.parentNode;
      var tn = 0;
      if (!ge.hasVerticalScroll()) {
        tn += ge.getWorkspaceHeight() - Se.getTotalHeight();
      }
      if (ge.hasVerticalScroll() && ge.hasHorizontalScroll()) {
        tn += (0, he.np)(Dt);
      }
      en.style.bottom = `${tn}px`;
    }
  }]);
  return m;
}(ic);
function Mc(D, A, m) {
  return (Mc = Yd() ? Reflect.construct.bind() : function (te, Se, ge) {
    var Dt = [null];
    Dt.push.apply(Dt, Se);
    var tn = new (Function.bind.apply(te, Dt))();
    if (ge) {
      xa(tn, ge.prototype);
    }
    return tn;
  }).apply(null, arguments);
}
function Yd() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function xa(D, A) {
  return (xa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function Ye(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Qt(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
const gi = function () {
  function D(A, m, T, te, Se, ge) {
    (function ue(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    Qt(this, "wot", null);
    Qt(this, "topOverlay", null);
    Qt(this, "bottomOverlay", null);
    Qt(this, "inlineStartOverlay", null);
    Qt(this, "topInlineStartCornerOverlay", null);
    Qt(this, "bottomInlineStartCornerOverlay", null);
    Qt(this, "browserLineHeight", undefined);
    Qt(this, "wtSettings", null);
    this.wot = A;
    this.wtSettings = te;
    this.domBindings = T;
    this.facadeGetter = m;
    this.wtTable = ge;
    var Dt = this.domBindings;
    var en = Dt.rootDocument;
    var tn = Dt.rootWindow;
    this.instance = this.wot;
    this.eventManager = Se;
    this.scrollbarSize = (0, he.np)(en);
    var vn = tn.getComputedStyle(ge.wtRootElement.parentNode).getPropertyValue("overflow") === "hidden";
    this.scrollableElement = vn ? ge.holder : (0, he.dD)(ge.TABLE);
    this.initOverlays();
    this.hasScrollbarBottom = false;
    this.hasScrollbarRight = false;
    this.destroyed = false;
    this.keyPressed = false;
    this.spreaderLastSize = {
      width: null,
      height: null
    };
    this.verticalScrolling = false;
    this.horizontalScrolling = false;
    this.initBrowserLineHeight();
    this.registerListeners();
    this.lastScrollX = tn.scrollX;
    this.lastScrollY = tn.scrollY;
  }
  (function Mt(D, A, m) {
    if (A) {
      Ye(D.prototype, A);
    }
    if (m) {
      Ye(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "initBrowserLineHeight",
    value: function () {
      var m = this.domBindings;
      var Se = m.rootWindow.getComputedStyle(m.rootDocument.body);
      var ge = parseInt(Se.lineHeight, 10);
      var Dt = parseInt(Se.fontSize, 10) * 1.2;
      this.browserLineHeight = ge || Dt;
    }
  }, {
    key: "initOverlays",
    value: function () {
      var m = [this.wot, this.facadeGetter, this.wtSettings, this.domBindings];
      this.topOverlay = Mc(bl, m);
      this.bottomOverlay = Mc(vc, m);
      this.inlineStartOverlay = Mc(Nn, m);
      this.topInlineStartCornerOverlay = Mc(ou, m.concat([this.topOverlay, this.inlineStartOverlay]));
      this.bottomInlineStartCornerOverlay = Mc(Hu, m.concat([this.bottomOverlay, this.inlineStartOverlay]));
    }
  }, {
    key: "updateStateOfRendering",
    value: function () {
      var m = this.topOverlay.updateStateOfRendering();
      m = this.bottomOverlay.updateStateOfRendering() || m;
      m = this.inlineStartOverlay.updateStateOfRendering() || m;
      if (this.inlineStartOverlay.needFullRender) {
        if (this.topOverlay.needFullRender) {
          m = this.topInlineStartCornerOverlay.updateStateOfRendering() || m;
        }
        if (this.bottomOverlay.needFullRender) {
          m = this.bottomInlineStartCornerOverlay.updateStateOfRendering() || m;
        }
      }
      return m;
    }
  }, {
    key: "refreshAll",
    value: function () {
      if (this.wot.drawn) {
        if (!this.wtTable.holder.parentNode) {
          this.destroy();
          return;
        }
        this.wot.draw(true);
        if (this.verticalScrolling) {
          this.inlineStartOverlay.onScroll();
        }
        if (this.horizontalScrolling) {
          this.topOverlay.onScroll();
        }
        this.verticalScrolling = false;
        this.horizontalScrolling = false;
      }
    }
  }, {
    key: "registerListeners",
    value: function () {
      var m = this;
      var T = this.domBindings;
      var te = T.rootDocument;
      var Se = T.rootWindow;
      var ge = this.topOverlay.mainTableScrollableElement;
      var Dt = this.inlineStartOverlay.mainTableScrollableElement;
      this.eventManager.addEventListener(te.documentElement, "keydown", function (_i) {
        return m.onKeyDown(_i);
      });
      this.eventManager.addEventListener(te.documentElement, "keyup", function () {
        return m.onKeyUp();
      });
      this.eventManager.addEventListener(te, "visibilitychange", function () {
        return m.onKeyUp();
      });
      this.eventManager.addEventListener(ge, "scroll", function (_i) {
        return m.onTableScroll(_i);
      }, {
        passive: true
      });
      if (ge !== Dt) {
        this.eventManager.addEventListener(Dt, "scroll", function (_i) {
          return m.onTableScroll(_i);
        }, {
          passive: true
        });
      }
      var ii;
      var en = Se.devicePixelRatio && Se.devicePixelRatio > 1;
      var tn = this.scrollableElement === Se;
      var vn = this.wtSettings.getSetting("preventWheel");
      var Vn = {
        passive: tn
      };
      if (vn || en || !(0, Re.i7)()) {
        this.eventManager.addEventListener(this.wtTable.wtRootElement, "wheel", function (_i) {
          return m.onCloneWheel(_i, vn);
        }, Vn);
      }
      [this.topOverlay, this.bottomOverlay, this.inlineStartOverlay, this.topInlineStartCornerOverlay, this.bottomInlineStartCornerOverlay].forEach(function (_i) {
        if (_i && _i.needFullRender) {
          m.eventManager.addEventListener(_i.clone.wtTable.holder, "wheel", function (zi) {
            return m.onCloneWheel(zi, vn);
          }, Vn);
        }
      });
      this.eventManager.addEventListener(Se, "resize", function () {
        clearTimeout(ii);
        ii = setTimeout(function () {
          m.wtSettings.getSetting("onWindowResize");
        }, 200);
      });
    }
  }, {
    key: "deregisterListeners",
    value: function () {
      this.eventManager.clearEvents(true);
    }
  }, {
    key: "onTableScroll",
    value: function (m) {
      var T = this.domBindings.rootWindow;
      var te = this.inlineStartOverlay.mainTableScrollableElement;
      var Se = this.topOverlay.mainTableScrollableElement;
      var ge = m.target;
      if (!this.keyPressed || (Se === T || ge === T || !!m.target.contains(Se)) && (te === T || ge === T || !!m.target.contains(te))) {
        this.syncScrollPositions(m);
      }
    }
  }, {
    key: "onCloneWheel",
    value: function (m, T) {
      var te = this.domBindings.rootWindow;
      var Se = this.inlineStartOverlay.mainTableScrollableElement;
      var ge = this.topOverlay.mainTableScrollableElement;
      var Dt = m.target;
      var en = ge !== te && Dt !== te && !Dt.contains(ge);
      var tn = Se !== te && Dt !== te && !Dt.contains(Se);
      if (!this.keyPressed || !en && !tn) {
        var vn = this.translateMouseWheelToScroll(m);
        if (T || this.scrollableElement !== te && vn) {
          m.preventDefault();
        }
      }
    }
  }, {
    key: "onKeyDown",
    value: function (m) {
      this.keyPressed = (0, me.ot)(m.keyCode, "ARROW_UP|ARROW_RIGHT|ARROW_DOWN|ARROW_LEFT");
    }
  }, {
    key: "onKeyUp",
    value: function () {
      this.keyPressed = false;
    }
  }, {
    key: "translateMouseWheelToScroll",
    value: function (m) {
      var T = isNaN(m.deltaY) ? m.wheelDeltaY * -1 : m.deltaY;
      var te = isNaN(m.deltaX) ? m.wheelDeltaX * -1 : m.deltaX;
      if (m.deltaMode === 1) {
        te += te * this.browserLineHeight;
        T += T * this.browserLineHeight;
      }
      var Se = this.scrollVertically(T);
      var ge = this.scrollHorizontally(te);
      return Se || ge;
    }
  }, {
    key: "scrollVertically",
    value: function (m) {
      var T = this.scrollableElement.scrollTop;
      this.scrollableElement.scrollTop += m;
      return T !== this.scrollableElement.scrollTop;
    }
  }, {
    key: "scrollHorizontally",
    value: function (m) {
      var T = this.scrollableElement.scrollLeft;
      this.scrollableElement.scrollLeft += m;
      return T !== this.scrollableElement.scrollLeft;
    }
  }, {
    key: "syncScrollPositions",
    value: function () {
      if (!this.destroyed) {
        var m = this.domBindings.rootWindow;
        var T = this.topOverlay.clone.wtTable.holder;
        var te = this.inlineStartOverlay.clone.wtTable.holder;
        var Se = [this.scrollableElement.scrollLeft, this.scrollableElement.scrollTop];
        var ge = Se[0];
        var Dt = Se[1];
        this.horizontalScrolling = T.scrollLeft !== ge || this.lastScrollX !== m.scrollX;
        this.verticalScrolling = te.scrollTop !== Dt || this.lastScrollY !== m.scrollY;
        this.lastScrollX = m.scrollX;
        this.lastScrollY = m.scrollY;
        if (this.horizontalScrolling) {
          T.scrollLeft = ge;
          var en = this.bottomOverlay.needFullRender ? this.bottomOverlay.clone.wtTable.holder : null;
          if (en) {
            en.scrollLeft = ge;
          }
        }
        if (this.verticalScrolling) {
          te.scrollTop = Dt;
        }
        this.refreshAll();
      }
    }
  }, {
    key: "syncScrollWithMaster",
    value: function () {
      var m = this.topOverlay.mainTableScrollableElement;
      var T = m.scrollLeft;
      var te = m.scrollTop;
      if (this.topOverlay.needFullRender) {
        this.topOverlay.clone.wtTable.holder.scrollLeft = T;
      }
      if (this.bottomOverlay.needFullRender) {
        this.bottomOverlay.clone.wtTable.holder.scrollLeft = T;
      }
      if (this.inlineStartOverlay.needFullRender) {
        this.inlineStartOverlay.clone.wtTable.holder.scrollTop = te;
      }
    }
  }, {
    key: "updateMainScrollableElements",
    value: function () {
      this.deregisterListeners();
      this.inlineStartOverlay.updateMainScrollableElement();
      this.topOverlay.updateMainScrollableElement();
      if (this.bottomOverlay.needFullRender) {
        this.bottomOverlay.updateMainScrollableElement();
      }
      var m = this.wtTable;
      this.scrollableElement = this.domBindings.rootWindow.getComputedStyle(m.wtRootElement.parentNode).getPropertyValue("overflow") === "hidden" ? m.holder : (0, he.dD)(m.TABLE);
      this.registerListeners();
    }
  }, {
    key: "destroy",
    value: function () {
      this.eventManager.destroy();
      this.topOverlay.destroy();
      if (this.bottomOverlay.clone) {
        this.bottomOverlay.destroy();
      }
      this.inlineStartOverlay.destroy();
      if (this.topInlineStartCornerOverlay) {
        this.topInlineStartCornerOverlay.destroy();
      }
      if (this.bottomInlineStartCornerOverlay && this.bottomInlineStartCornerOverlay.clone) {
        this.bottomInlineStartCornerOverlay.destroy();
      }
      this.destroyed = true;
    }
  }, {
    key: "refresh",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var T = this.wtTable.spreader;
      var te = T.clientWidth;
      var Se = T.clientHeight;
      if (te !== this.spreaderLastSize.width || Se !== this.spreaderLastSize.height) {
        this.spreaderLastSize.width = te;
        this.spreaderLastSize.height = Se;
        this.adjustElementsSize();
      }
      if (this.bottomOverlay.clone) {
        this.bottomOverlay.refresh(m);
      }
      this.inlineStartOverlay.refresh(m);
      this.topOverlay.refresh(m);
      if (this.topInlineStartCornerOverlay) {
        this.topInlineStartCornerOverlay.refresh(m);
      }
      if (this.bottomInlineStartCornerOverlay && this.bottomInlineStartCornerOverlay.clone) {
        this.bottomInlineStartCornerOverlay.refresh(m);
      }
    }
  }, {
    key: "adjustElementsSize",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var T = this.wot.wtViewport;
      var te = this.wtTable;
      var Se = this.wtSettings.getSetting("totalColumns");
      var ge = this.wtSettings.getSetting("totalRows");
      var Dt = T.getRowHeaderWidth();
      var en = T.getColumnHeaderHeight();
      var tn = te.hider.style;
      tn.width = `${Dt + this.inlineStartOverlay.sumCellSizes(0, Se)}px`;
      tn.height = `${en + this.topOverlay.sumCellSizes(0, ge) + 1}px`;
      if (this.scrollbarSize > 0) {
        var vn = te.wtRootElement;
        var Vn = vn.scrollHeight;
        var Qn = vn.scrollWidth;
        var ii = te.holder;
        var _i = ii.scrollHeight;
        var Li = ii.scrollWidth;
        this.hasScrollbarRight = Vn < _i;
        this.hasScrollbarBottom = Qn < Li;
        if (this.hasScrollbarRight && te.hider.scrollWidth + this.scrollbarSize > Qn) {
          this.hasScrollbarBottom = true;
        } else if (this.hasScrollbarBottom && te.hider.scrollHeight + this.scrollbarSize > Vn) {
          this.hasScrollbarRight = true;
        }
      }
      this.topOverlay.adjustElementsSize(m);
      this.inlineStartOverlay.adjustElementsSize(m);
      this.bottomOverlay.adjustElementsSize(m);
    }
  }, {
    key: "applyToDOM",
    value: function () {
      if (!!this.wtTable.isVisible()) {
        this.topOverlay.applyToDOM();
        if (this.bottomOverlay.clone) {
          this.bottomOverlay.applyToDOM();
        }
        this.inlineStartOverlay.applyToDOM();
      }
    }
  }, {
    key: "getParentOverlay",
    value: function (m) {
      if (!m) {
        return null;
      }
      var te = null;
      (0, Oe.Bk)([this.topOverlay, this.inlineStartOverlay, this.bottomOverlay, this.topInlineStartCornerOverlay, this.bottomInlineStartCornerOverlay], function (Se) {
        if (!!Se) {
          if (Se.clone && Se.clone.wtTable.TABLE.contains(m)) {
            te = Se.clone;
          }
        }
      });
      return te;
    }
  }, {
    key: "syncOverlayTableClassNames",
    value: function () {
      var m = this.wtTable.TABLE;
      (0, Oe.Bk)([this.topOverlay, this.inlineStartOverlay, this.bottomOverlay, this.topInlineStartCornerOverlay, this.bottomInlineStartCornerOverlay], function (te) {
        if (!!te) {
          te.clone.wtTable.TABLE.className = m.className;
        }
      });
    }
  }]);
  return D;
}();
function Ce(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Rt(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var ln = function () {
  function D(A) {
    var m = this;
    (function J(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    Rt(this, "settings", {});
    Rt(this, "defaults", Object.freeze(this.getDefaults()));
    (0, rt._l)(this.defaults, function (T, te) {
      if (A[te] !== undefined) {
        m.settings[te] = A[te];
      } else {
        if (T === undefined) {
          throw new Error(`A required setting "${te}" was not provided`);
        }
        m.settings[te] = T;
      }
    });
  }
  (function tt(D, A, m) {
    if (A) {
      Ce(D.prototype, A);
    }
    if (m) {
      Ce(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getDefaults",
    value: function () {
      var m = this;
      return {
        facade: undefined,
        table: undefined,
        isDataViewInstance: true,
        externalRowCalculator: false,
        stretchH: "none",
        currentRowClassName: null,
        currentColumnClassName: null,
        preventOverflow: function () {
          return false;
        },
        preventWheel: false,
        data: undefined,
        freezeOverlays: false,
        fixedColumnsStart: 0,
        fixedRowsTop: 0,
        fixedRowsBottom: 0,
        shouldRenderInlineStartOverlay: function () {
          return m.getSetting("fixedColumnsStart") > 0 || m.getSetting("rowHeaders").length > 0;
        },
        shouldRenderTopOverlay: function () {
          return m.getSetting("fixedRowsTop") > 0 || m.getSetting("columnHeaders").length > 0;
        },
        shouldRenderBottomOverlay: function () {
          return m.getSetting("fixedRowsBottom") > 0;
        },
        minSpareRows: 0,
        rowHeaders: function () {
          return [];
        },
        columnHeaders: function () {
          return [];
        },
        totalRows: undefined,
        totalColumns: undefined,
        cellRenderer: function (te, Se, ge) {
          var Dt = m.getSetting("data", te, Se);
          (0, he.tT)(ge, Dt ?? "");
        },
        columnWidth: function () {},
        rowHeight: function () {},
        defaultRowHeight: 23,
        defaultColumnWidth: 50,
        selections: null,
        hideBorderOnMouseDownOver: false,
        viewportRowCalculatorOverride: null,
        viewportColumnCalculatorOverride: null,
        onCellMouseDown: null,
        onCellContextMenu: null,
        onCellMouseOver: null,
        onCellMouseOut: null,
        onCellMouseUp: null,
        onCellDblClick: null,
        onCellCornerMouseDown: null,
        onCellCornerDblClick: null,
        beforeDraw: null,
        onDraw: null,
        onBeforeRemoveCellClassNames: null,
        onAfterDrawSelection: null,
        onBeforeDrawBorders: null,
        onScrollVertically: null,
        onScrollHorizontally: null,
        onBeforeTouchScroll: null,
        onAfterMomentumScroll: null,
        onBeforeStretchingColumnWidth: function (te) {
          return te;
        },
        onModifyRowHeaderWidth: null,
        onModifyGetCellCoords: null,
        onBeforeHighlightingRowHeader: function (te) {
          return te;
        },
        onBeforeHighlightingColumnHeader: function (te) {
          return te;
        },
        onWindowResize: null,
        renderAllRows: false,
        groups: false,
        rowHeaderWidth: null,
        columnHeaderHeight: null,
        headerClassName: null,
        rtlMode: false
      };
    }
  }, {
    key: "update",
    value: function (m, T) {
      var te = this;
      if (T === undefined) {
        (0, rt._l)(m, function (Se, ge) {
          te.settings[ge] = Se;
        });
      } else {
        this.settings[m] = T;
      }
      return this;
    }
  }, {
    key: "getSetting",
    value: function (m, T, te, Se, ge) {
      if (typeof this.settings[m] == "function") {
        return this.settings[m](T, te, Se, ge);
      } else if (T !== undefined && Array.isArray(this.settings[m])) {
        return this.settings[m][T];
      } else {
        return this.settings[m];
      }
    }
  }, {
    key: "getSettingPure",
    value: function (m) {
      return this.settings[m];
    }
  }, {
    key: "has",
    value: function (m) {
      return !!this.settings[m];
    }
  }]);
  return D;
}();
function ni(D) {
  return (ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function yr(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function zl(D, A) {
  return (zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function _u(D, A) {
  if (A && (ni(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function Oh(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function ch(D) {
  return (ch = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var yf = function (D) {
  (function ca(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      zl(D, A);
    }
  })(m, D);
  var A = function wl(D) {
    var A = function Wm() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = ch(D);
      if (A) {
        var Se = ch(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return _u(this, te);
    };
  }(m);
  function m(T, te, Se, ge) {
    (function Mi(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, T, te, Se, ge, "master");
  }
  (function $s(D, A, m) {
    if (A) {
      yr(D.prototype, A);
    }
    if (m) {
      yr(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "alignOverlaysWithTrimmingContainer",
    value: function () {
      var te = (0, he.$g)(this.wtRootElement);
      var Se = this.domBindings.rootWindow;
      if (te === Se) {
        if (!this.wtSettings.getSetting("preventOverflow")) {
          this.holder.style.overflow = "visible";
          this.wtRootElement.style.overflow = "visible";
        }
      } else {
        var Dt = te.parentElement;
        var en = (0, he.C2)(te, "height", Se);
        var tn = (0, he.C2)(te, "overflow", Se);
        var vn = this.holder.style;
        var Vn = te.scrollWidth;
        var Qn = te.scrollHeight;
        var ii = te.getBoundingClientRect();
        var _i = ii.width;
        var Li = ii.height;
        if (Dt && ["auto", "hidden", "scroll"].includes(tn)) {
          var us = te.cloneNode(false);
          us.style.overflow = "auto";
          us.style.position = "absolute";
          if (te.nextElementSibling) {
            Dt.insertBefore(us, te.nextElementSibling);
          } else {
            Dt.appendChild(us);
          }
          var Vo = parseInt((0, he.Dx)(us, Se).height, 10);
          Dt.removeChild(us);
          if (Vo === 0) {
            Li = 0;
          }
        }
        Li = Math.min(Li, Qn);
        vn.height = en === "auto" ? "auto" : `${Li}px`;
        _i = Math.min(_i, Vn);
        vn.width = `${_i}px`;
        vn.overflow = "";
        this.hasTableHeight = vn.height === "auto" || Li > 0;
        this.hasTableWidth = _i > 0;
      }
      this.isTableVisible = (0, he.pn)(this.TABLE);
    }
  }, {
    key: "markOversizedColumnHeaders",
    value: function () {
      var te = this.wtSettings;
      var Se = this.dataAccessObject.wtViewport;
      var en = te.getSetting("columnHeaders").length;
      if (en && !Se.hasOversizedColumnHeadersMarked.master) {
        for (var vn = te.getSetting("rowHeaders").length, Vn = this.getRenderedColumnsCount(), Qn = 0; Qn < en; Qn++) {
          for (var ii = vn * -1; ii < Vn; ii++) {
            this.markIfOversizedColumnHeader(ii);
          }
        }
        Se.hasOversizedColumnHeadersMarked.master = true;
      }
    }
  }]);
  return m;
}(wi);
(0, rt.jB)(yf, Vd);
(0, rt.jB)(yf, Fn);
const Wu = yf;
import * as cu from "30076";
function Bf(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function cp(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Zp = new WeakMap();
const c0 = function () {
  function D() {
    var A = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var m = A.viewportSize;
    var T = A.scrollOffset;
    var te = A.totalItems;
    var Se = A.itemSizeFn;
    var ge = A.overrideFn;
    var Dt = A.calculationType;
    var en = A.scrollbarHeight;
    Bf(this, D);
    Zp.set(this, {
      viewportHeight: m,
      scrollOffset: T,
      totalRows: te,
      rowHeightFn: Se,
      overrideFn: ge,
      calculationType: Dt,
      horizontalScrollbarHeight: en
    });
    this.count = 0;
    this.startRow = null;
    this.endRow = null;
    this.startPosition = null;
    this.calculate();
  }
  (function Vf(D, A, m) {
    if (A) {
      cp(D.prototype, A);
    }
    if (m) {
      cp(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "calculate",
    value: function () {
      for (var ii, m = 0, T = true, te = [], Se = Zp.get(this), ge = Se.calculationType, Dt = Se.overrideFn, en = Se.rowHeightFn, tn = Se.scrollOffset, vn = Se.totalRows, Vn = Se.viewportHeight, Qn = Se.horizontalScrollbarHeight || 0, _i = 0; _i < vn; _i++) {
        ii = en(_i);
        if (isNaN(ii)) {
          ii = D.DEFAULT_HEIGHT;
        }
        if (m <= tn && ge !== cu.vp) {
          this.startRow = _i;
        }
        if (m >= tn && m + (ge === cu.vp ? ii : 0) <= tn + Vn - Qn) {
          if (this.startRow === null) {
            this.startRow = _i;
          }
          this.endRow = _i;
        }
        te.push(m);
        m += ii;
        if (ge !== cu.vp) {
          this.endRow = _i;
        }
        if (m >= tn + Vn - Qn) {
          T = false;
          break;
        }
      }
      if (this.endRow === vn - 1 && T) {
        for (this.startRow = this.endRow; this.startRow > 0;) {
          var Li = te[this.endRow] + ii - te[this.startRow - 1];
          if (Li <= Vn - Qn || ge !== cu.vp) {
            this.startRow -= 1;
          }
          if (Li >= Vn - Qn) {
            break;
          }
        }
      }
      if (ge === cu.Ii && this.startRow !== null && Dt) {
        Dt(this);
      }
      this.startPosition = te[this.startRow];
      if (this.startPosition === undefined) {
        this.startPosition = null;
      }
      if (vn < this.endRow) {
        this.endRow = vn - 1;
      }
      if (this.startRow !== null) {
        this.count = this.endRow - this.startRow + 1;
      }
    }
  }], [{
    key: "DEFAULT_HEIGHT",
    get: function () {
      return 23;
    }
  }]);
  return D;
}();
import * as Wg from "72297";
function up(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
const Zg = function () {
  function D(A, m, T, te, Se) {
    var ge = this;
    (function Yg(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.dataAccessObject = A;
    this.wot = A.wot;
    this.instance = this.wot;
    this.domBindings = m;
    this.wtSettings = T;
    this.wtTable = Se;
    this.oversizedRows = [];
    this.oversizedColumnHeaders = [];
    this.hasOversizedColumnHeadersMarked = {};
    this.clientHeight = 0;
    this.containerWidth = NaN;
    this.rowHeaderWidth = NaN;
    this.rowsVisibleCalculator = null;
    this.columnsVisibleCalculator = null;
    this.eventManager = te;
    this.eventManager.addEventListener(this.domBindings.rootWindow, "resize", function () {
      ge.clientHeight = ge.getWorkspaceHeight();
    });
  }
  (function u0(D, A, m) {
    if (A) {
      up(D.prototype, A);
    }
    if (m) {
      up(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getWorkspaceHeight",
    value: function () {
      var T = this.dataAccessObject.topOverlayTrimmingContainer;
      if (T === this.domBindings.rootWindow) {
        return this.domBindings.rootDocument.documentElement.clientHeight;
      } else if ((0, he.Pb)(T) > 0 && T.clientHeight > 0) {
        return T.clientHeight;
      } else {
        return Infinity;
      }
    }
  }, {
    key: "getWorkspaceWidth",
    value: function () {
      var _i;
      var Li;
      var m = this.wtSettings;
      var T = this.domBindings;
      var te = T.rootDocument;
      var Se = T.rootWindow;
      var ge = this.dataAccessObject.inlineStartOverlayTrimmingContainer;
      var Dt = te.documentElement.offsetWidth;
      var en = m.getSetting("totalColumns");
      var tn = m.getSetting("preventOverflow");
      var vn = m.getSetting("rtlMode");
      var Vn = this.wtTable.TABLE.getBoundingClientRect();
      var ii = Dt - (vn ? Vn.right - Dt : Vn.left);
      if (tn) {
        return (0, he.iO)(this.wtTable.wtRootElement);
      }
      _i = m.getSetting("freezeOverlays") ? Math.min(ii, Dt) : Math.min(this.getContainerFillWidth(), ii, Dt);
      if (ge === Se && en > 0 && this.sumColumnWidths(0, en - 1) > _i) {
        return te.documentElement.clientWidth;
      }
      if (ge !== Se && ((Li = (0, he.C2)(this.dataAccessObject.inlineStartOverlayTrimmingContainer, "overflow", Se)) === "scroll" || Li === "hidden" || Li === "auto")) {
        return Math.max(_i, ge.clientWidth);
      }
      var zi = m.getSetting("stretchH");
      if (zi !== "none" && zi) {
        return _i;
      } else {
        return Math.max(_i, (0, he.iO)(this.wtTable.TABLE));
      }
    }
  }, {
    key: "hasVerticalScroll",
    value: function () {
      return this.wtTable.hider.offsetHeight > this.getWorkspaceHeight();
    }
  }, {
    key: "hasHorizontalScroll",
    value: function () {
      return this.wtTable.hider.offsetWidth > this.getWorkspaceWidth();
    }
  }, {
    key: "sumColumnWidths",
    value: function (m, T) {
      for (var te = 0, Se = m; Se < T;) {
        te += this.wtTable.getColumnWidth(Se);
        Se += 1;
      }
      return te;
    }
  }, {
    key: "getContainerFillWidth",
    value: function () {
      if (this.containerWidth) {
        return this.containerWidth;
      }
      var m = this.wtTable.holder;
      var T = this.domBindings.rootDocument.createElement("div");
      T.style.width = "100%";
      T.style.height = "1px";
      m.appendChild(T);
      var te = T.offsetWidth;
      this.containerWidth = te;
      m.removeChild(T);
      return te;
    }
  }, {
    key: "getWorkspaceOffset",
    value: function () {
      return (0, he.cv)(this.wtTable.TABLE);
    }
  }, {
    key: "getColumnHeaderHeight",
    value: function () {
      if (this.wtSettings.getSetting("columnHeaders").length) {
        if (isNaN(this.columnHeaderHeight)) {
          this.columnHeaderHeight = (0, he.Pb)(this.wtTable.THEAD);
        }
      } else {
        this.columnHeaderHeight = 0;
      }
      return this.columnHeaderHeight;
    }
  }, {
    key: "getViewportHeight",
    value: function () {
      var m = this.getWorkspaceHeight();
      if (m === Infinity) {
        return m;
      }
      var T = this.getColumnHeaderHeight();
      if (T > 0) {
        m -= T;
      }
      return m;
    }
  }, {
    key: "getRowHeaderWidth",
    value: function () {
      var m = this.wtSettings.getSetting("rowHeaderWidth");
      var T = this.wtSettings.getSetting("rowHeaders");
      if (m) {
        this.rowHeaderWidth = 0;
        for (var te = 0, Se = T.length; te < Se; te++) {
          this.rowHeaderWidth += m[te] || m;
        }
      }
      if (isNaN(this.rowHeaderWidth)) {
        if (T.length) {
          var ge = this.wtTable.TABLE.querySelector("TH");
          this.rowHeaderWidth = 0;
          for (var Dt = 0, en = T.length; Dt < en; Dt++) {
            if (ge) {
              this.rowHeaderWidth += (0, he.iO)(ge);
              ge = ge.nextSibling;
            } else {
              this.rowHeaderWidth += 50;
            }
          }
        } else {
          this.rowHeaderWidth = 0;
        }
      }
      this.rowHeaderWidth = this.wtSettings.getSetting("onModifyRowHeaderWidth", this.rowHeaderWidth) || this.rowHeaderWidth;
      return this.rowHeaderWidth;
    }
  }, {
    key: "getViewportWidth",
    value: function () {
      var m = this.getWorkspaceWidth();
      if (m === Infinity) {
        return m;
      }
      var T = this.getRowHeaderWidth();
      if (T > 0) {
        return m - T;
      } else {
        return m;
      }
    }
  }, {
    key: "createRowsCalculator",
    value: function () {
      var Se;
      var ge;
      var Dt;
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cu.Ii;
      var T = this.wtSettings;
      var te = this.wtTable;
      this.rowHeaderWidth = NaN;
      Se = T.getSetting("renderAllRows") && m === cu.Ii ? Infinity : this.getViewportHeight();
      var en = this.dataAccessObject.topScrollPosition - this.dataAccessObject.topParentOffset;
      if (en < 0) {
        en = 0;
      }
      var tn = T.getSetting("fixedRowsTop");
      var vn = T.getSetting("fixedRowsBottom");
      var Vn = T.getSetting("totalRows");
      if (tn) {
        en += Dt = this.dataAccessObject.topOverlay.sumCellSizes(0, tn);
        Se -= Dt;
      }
      if (vn && this.dataAccessObject.bottomOverlay.clone) {
        Se -= Dt = this.dataAccessObject.bottomOverlay.sumCellSizes(Vn - vn, Vn);
      }
      ge = te.holder.clientHeight === te.holder.offsetHeight ? 0 : (0, he.np)(this.domBindings.rootDocument);
      return new c0({
        viewportSize: Se,
        scrollOffset: en,
        totalItems: T.getSetting("totalRows"),
        itemSizeFn: function (ii) {
          return te.getRowHeight(ii);
        },
        overrideFn: T.getSettingPure("viewportRowCalculatorOverride"),
        calculationType: m,
        scrollbarHeight: ge
      });
    }
  }, {
    key: "createColumnsCalculator",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cu.Ii;
      var T = this.wtSettings;
      var te = this.wtTable;
      var Se = this.getViewportWidth();
      var ge = Math.abs(this.dataAccessObject.inlineStartScrollPosition) - this.dataAccessObject.inlineStartParentOffset;
      this.columnHeaderHeight = NaN;
      if (ge < 0) {
        ge = 0;
      }
      var Dt = T.getSetting("fixedColumnsStart");
      if (Dt) {
        var en = this.dataAccessObject.inlineStartOverlay.sumCellSizes(0, Dt);
        ge += en;
        Se -= en;
      }
      if (te.holder.clientWidth !== te.holder.offsetWidth) {
        Se -= (0, he.np)(this.domBindings.rootDocument);
      }
      return new Wg.Z({
        viewportSize: Se,
        scrollOffset: Math.abs(ge),
        totalItems: T.getSetting("totalColumns"),
        itemSizeFn: function (vn) {
          return te.getColumnWidth(vn);
        },
        overrideFn: T.getSettingPure("viewportColumnCalculatorOverride"),
        calculationType: m,
        stretchMode: T.getSetting("stretchH"),
        stretchingItemWidthFn: function (vn, Vn) {
          return T.getSetting("onBeforeStretchingColumnWidth", vn, Vn);
        }
      });
    }
  }, {
    key: "createRenderCalculators",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var T = m;
      if (T) {
        var te = this.createRowsCalculator(cu.vp);
        var Se = this.createColumnsCalculator(cu.vp);
        if (!this.areAllProposedVisibleRowsAlreadyRendered(te) || !this.areAllProposedVisibleColumnsAlreadyRendered(Se)) {
          T = false;
        }
      }
      if (!T) {
        this.rowsRenderCalculator = this.createRowsCalculator(cu.Ii);
        this.columnsRenderCalculator = this.createColumnsCalculator(cu.Ii);
      }
      this.rowsVisibleCalculator = null;
      this.columnsVisibleCalculator = null;
      return T;
    }
  }, {
    key: "createVisibleCalculators",
    value: function () {
      this.rowsVisibleCalculator = this.createRowsCalculator(cu.vp);
      this.columnsVisibleCalculator = this.createColumnsCalculator(cu.vp);
    }
  }, {
    key: "areAllProposedVisibleRowsAlreadyRendered",
    value: function (m) {
      if (!this.rowsVisibleCalculator) {
        return false;
      }
      var T = m.startRow;
      var te = m.endRow;
      if (T === null && te === null) {
        return false;
      }
      var Se = this.rowsRenderCalculator;
      var ge = Se.startRow;
      var Dt = Se.endRow;
      return T >= ge && (T !== ge || T <= 0) && te <= Dt && (te !== Dt || te >= this.wtSettings.getSetting("totalRows") - 1);
    }
  }, {
    key: "areAllProposedVisibleColumnsAlreadyRendered",
    value: function (m) {
      if (!this.columnsVisibleCalculator) {
        return false;
      }
      var T = m.startColumn;
      var te = m.endColumn;
      if (T === null && te === null) {
        return false;
      }
      var Se = this.columnsRenderCalculator;
      var ge = Se.startColumn;
      var Dt = Se.endColumn;
      return T >= ge && (T !== ge || T <= 0) && te <= Dt && (te !== Dt || te >= this.wtSettings.getSetting("totalColumns") - 1);
    }
  }, {
    key: "resetHasOversizedColumnHeadersMarked",
    value: function () {
      (0, rt._l)(this.hasOversizedColumnHeadersMarked, function (m, T, te) {
        te[T] = undefined;
      });
    }
  }]);
  return D;
}();
function Zd(D) {
  return (Zd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function ad(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Gg(D, A) {
  return (Gg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function X0(D, A) {
  if (A && (Zd(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return dp(D);
}
function dp(D) {
  if (D === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return D;
}
function Eu(D) {
  return (Eu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var q0 = function (D) {
  (function Ym(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Gg(D, A);
    }
  })(m, D);
  var A = function Zm(D) {
    var A = function dh() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Eu(D);
      if (A) {
        var Se = Eu(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return X0(this, te);
    };
  }(m);
  function m(T, te) {
    var Se;
    (function _f(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    var ge = (Se = A.call(this, T, new ln(te))).wtSettings.getSetting("facade", dp(Se));
    Se.wtTable = new Wu(Se.getTableDao(), ge, Se.domBindings, Se.wtSettings);
    Se.wtViewport = new Zg(Se.getViewportDao(), Se.domBindings, Se.wtSettings, Se.eventManager, Se.wtTable);
    Se.selections = Se.wtSettings.getSetting("selections");
    Se.wtEvent = new ne(ge, Se.domBindings, Se.wtSettings, Se.eventManager, Se.wtTable, Se.selections);
    Se.wtOverlays = new gi(dp(Se), ge, Se.domBindings, Se.wtSettings, Se.eventManager, Se.wtTable);
    Se.exportSettingsAsClassNames();
    Se.findOriginalHeaders();
    return Se;
  }
  (function uh(D, A, m) {
    if (A) {
      ad(D.prototype, A);
    }
    if (m) {
      ad(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "exportSettingsAsClassNames",
    value: function () {
      var te = this;
      var ge = [];
      var Dt = [];
      (0, rt._l)({
        rowHeaders: "htRowHeaders",
        columnHeaders: "htColumnHeaders"
      }, function (en, tn) {
        if (te.wtSettings.getSetting(tn).length) {
          Dt.push(en);
        }
        ge.push(en);
      });
      (0, he.IV)(this.wtTable.wtRootElement.parentNode, ge);
      (0, he.cn)(this.wtTable.wtRootElement.parentNode, Dt);
    }
  }, {
    key: "getViewportDao",
    value: function () {
      var te = this;
      return {
        get wot() {
          return te;
        },
        get topOverlayTrimmingContainer() {
          return te.wtOverlays.topOverlay.trimmingContainer;
        },
        get inlineStartOverlayTrimmingContainer() {
          return te.wtOverlays.inlineStartOverlay.trimmingContainer;
        },
        get topScrollPosition() {
          return te.wtOverlays.topOverlay.getScrollPosition();
        },
        get topParentOffset() {
          return te.wtOverlays.topOverlay.getTableParentOffset();
        },
        get inlineStartScrollPosition() {
          return te.wtOverlays.inlineStartOverlay.getScrollPosition();
        },
        get inlineStartParentOffset() {
          return te.wtOverlays.inlineStartOverlay.getTableParentOffset();
        },
        get topOverlay() {
          return te.wtOverlays.topOverlay;
        },
        get inlineStartOverlay() {
          return te.wtOverlays.inlineStartOverlay;
        },
        get bottomOverlay() {
          return te.wtOverlays.bottomOverlay;
        }
      };
    }
  }]);
  return m;
}(Ts);
function Pr(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Yy = function () {
  function D(A) {
    (function ld(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    if (A instanceof Ts) {
      this._wot = A;
    } else {
      this._initFromSettings(A);
    }
  }
  (function zg(D, A, m) {
    if (A) {
      Pr(D.prototype, A);
    }
    if (m) {
      Pr(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "_initFromSettings",
    value: function (m) {
      m.facade = function (T) {
        var te = new D(T);
        return function () {
          return te;
        };
      };
      this._wot = new q0(m.table, m);
    }
  }, {
    key: "guid",
    get: function () {
      return this._wot.guid;
    }
  }, {
    key: "rootDocument",
    get: function () {
      return this._wot.domBindings.rootDocument;
    }
  }, {
    key: "rootWindow",
    get: function () {
      return this._wot.domBindings.rootWindow;
    }
  }, {
    key: "wtSettings",
    get: function () {
      return this._wot.wtSettings;
    }
  }, {
    key: "cloneSource",
    get: function () {
      return this._wot.cloneSource;
    }
  }, {
    key: "cloneOverlay",
    get: function () {
      return this._wot.cloneOverlay;
    }
  }, {
    key: "selections",
    get: function () {
      return this._wot.selections;
    }
  }, {
    key: "wtViewport",
    get: function () {
      return this._wot.wtViewport;
    }
  }, {
    key: "wtOverlays",
    get: function () {
      return this._wot.wtOverlays;
    }
  }, {
    key: "wtTable",
    get: function () {
      return this._wot.wtTable;
    }
  }, {
    key: "wtEvent",
    get: function () {
      return this._wot.wtEvent;
    }
  }, {
    key: "wtScroll",
    get: function () {
      return this._wot.wtScroll;
    }
  }, {
    key: "drawn",
    get: function () {
      return this._wot.drawn;
    },
    set: function (m) {
      this._wot.drawn = m;
    }
  }, {
    key: "drawInterrupted",
    get: function () {
      return this._wot.drawInterrupted;
    },
    set: function (m) {
      this._wot.drawInterrupted = m;
    }
  }, {
    key: "lastMouseOver",
    get: function () {
      return this._wot.lastMouseOver;
    },
    set: function (m) {
      this._wot.lastMouseOver = m;
    }
  }, {
    key: "momentumScrolling",
    get: function () {
      return this._wot.momentumScrolling;
    },
    set: function (m) {
      this._wot.momentumScrolling = m;
    }
  }, {
    key: "touchApplied",
    get: function () {
      return this._wot.touchApplied;
    },
    set: function (m) {
      this._wot.touchApplied = m;
    }
  }, {
    key: "domBindings",
    get: function () {
      return this._wot.domBindings;
    }
  }, {
    key: "eventListeners",
    get: function () {
      return this._wot.eventListeners;
    },
    set: function (m) {
      this._wot.eventListeners = m;
    }
  }, {
    key: "eventManager",
    get: function () {
      return this._wot.eventManager;
    }
  }, {
    key: "createCellCoords",
    value: function (m, T) {
      return this._wot.createCellCoords(m, T);
    }
  }, {
    key: "createCellRange",
    value: function (m, T, te) {
      return this._wot.createCellRange(m, T, te);
    }
  }, {
    key: "draw",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      this._wot.draw(m);
      return this;
    }
  }, {
    key: "getCell",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      return this._wot.getCell(m, T);
    }
  }, {
    key: "scrollViewport",
    value: function (m, T, te, Se, ge) {
      return this._wot.scrollViewport(m, T, te, Se, ge);
    }
  }, {
    key: "scrollViewportHorizontally",
    value: function (m, T, te) {
      return this._wot.scrollViewportHorizontally(m, T, te);
    }
  }, {
    key: "scrollViewportVertically",
    value: function (m, T, te) {
      return this._wot.scrollViewportVertically(m, T, te);
    }
  }, {
    key: "getViewport",
    value: function () {
      return this._wot.getViewport();
    }
  }, {
    key: "getOverlayName",
    value: function () {
      if (this._wot.cloneOverlay) {
        return this._wot.cloneOverlay.type;
      } else {
        return "master";
      }
    }
  }, {
    key: "exportSettingsAsClassNames",
    value: function () {
      return this._wot.exportSettingsAsClassNames();
    }
  }, {
    key: "update",
    value: function (m, T) {
      this._wot.wtSettings.update(m, T);
      return this;
    }
  }, {
    key: "getSetting",
    value: function (m, T, te, Se, ge) {
      return this._wot.wtSettings.getSetting(m, T, te, Se, ge);
    }
  }, {
    key: "hasSetting",
    value: function (m) {
      return this._wot.wtSettings.hasSetting(m);
    }
  }, {
    key: "destroy",
    value: function () {
      this._wot.destroy();
    }
  }]);
  return D;
}();
function bu(D) {
  var A = D.isShiftKey;
  var m = D.isLeftClick;
  var T = D.isRightClick;
  var te = D.coords;
  var Se = D.selection;
  var ge = D.controller;
  var Dt = D.cellCoordsFactory;
  var en = Se.isSelected() ? Se.getSelectedRange().current() : null;
  var tn = Se.isSelectedByCorner();
  var vn = Se.isSelectedByRowHeader();
  if (A && en) {
    if (te.row >= 0 && te.col >= 0 && !ge.cell) {
      Se.setRangeEnd(te);
    } else if ((tn || vn) && te.row >= 0 && te.col >= 0 && !ge.cell) {
      Se.setRangeEnd(Dt(te.row, te.col));
    } else if (tn && te.row < 0 && !ge.column) {
      Se.setRangeEnd(Dt(en.to.row, te.col));
    } else if (vn && te.col < 0 && !ge.row) {
      Se.setRangeEnd(Dt(te.row, en.to.col));
    } else if ((!tn && !vn && te.col < 0 || tn && te.col < 0) && !ge.row) {
      Se.selectRows(Math.max(en.from.row, 0), te.row, te.col);
    } else if ((!tn && !vn && te.row < 0 || vn && te.row < 0) && !ge.column) {
      Se.selectColumns(Math.max(en.from.col, 0), te.col, te.row);
    }
  } else {
    var Vn = !Se.inInSelection(te);
    var Qn = m || T && Vn;
    if (te.row < 0 && te.col >= 0 && !ge.column) {
      if (Qn) {
        Se.selectColumns(te.col, te.col, te.row);
      }
    } else if (te.col < 0 && te.row >= 0 && !ge.row) {
      if (Qn) {
        Se.selectRows(te.row, te.row, te.col);
      }
    } else if (te.col >= 0 && te.row >= 0 && !ge.cell) {
      if (Qn) {
        Se.setRangeStart(te);
      }
    } else if (te.col < 0 && te.row < 0) {
      Se.selectAll(true, true);
    }
  }
}
var Gm = new Map([["mousedown", bu], ["mouseover", function Kg(D) {
  var m = D.coords;
  var T = D.selection;
  var te = D.controller;
  var Se = D.cellCoordsFactory;
  if (D.isLeftClick) {
    var ge = T.isSelectedByRowHeader();
    var Dt = T.isSelectedByColumnHeader();
    var en = T.tableProps.countCols();
    var tn = T.tableProps.countRows();
    if (Dt && !te.column) {
      T.setRangeEnd(Se(tn - 1, m.col));
    } else if (ge && !te.row) {
      T.setRangeEnd(Se(m.row, en - 1));
    } else if (!te.cell) {
      T.setRangeEnd(m);
    }
  }
}], ["touchstart", bu]]);
function Dd(D, A) {
  var m = A.coords;
  var T = A.selection;
  var te = A.controller;
  var Se = A.cellCoordsFactory;
  Gm.get(D.type)({
    coords: m,
    selection: T,
    controller: te,
    cellCoordsFactory: Se,
    isShiftKey: D.shiftKey,
    isLeftClick: (0, Dn.pW)(D) || D.type === "touchstart",
    isRightClick: (0, Dn.dO)(D)
  });
}
import * as Td from "38587";
function ef(D, A) {
  return function f0(D) {
    if (Array.isArray(D)) {
      return D;
    }
  }(D) || function d0(D, A) {
    var m = D == null ? null : typeof Symbol !== "undefined" && D[Symbol.iterator] || D["@@iterator"];
    if (m != null) {
      var ge;
      var Dt;
      var T = [];
      var te = true;
      var Se = false;
      try {
        for (m = m.call(D); !(te = (ge = m.next()).done) && (T.push(ge.value), !A || T.length !== A); te = true);
      } catch (en) {
        Se = true;
        Dt = en;
      } finally {
        try {
          if (!te && m.return != null) {
            m.return();
          }
        } finally {
          if (Se) {
            throw Dt;
          }
        }
      }
      return T;
    }
  }(D, A) || jg(D, A) || function ec() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Gp(D) {
  return function fp(D) {
    if (Array.isArray(D)) {
      return hp(D);
    }
  }(D) || function Qg(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || jg(D) || function zm() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function jg(D, A) {
  if (D) {
    if (typeof D == "string") {
      return hp(D, A);
    }
    var m = Object.prototype.toString.call(D).slice(8, -1);
    if (m === "Object" && D.constructor) {
      m = D.constructor.name;
    }
    if (m === "Map" || m === "Set") {
      return Array.from(D);
    }
    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
      return hp(D, A);
    }
  }
}
function hp(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function pp(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Md = new WeakMap();
const h0 = function () {
  function D(A) {
    (function Ef(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.instance = A;
    this.eventManager = new st.Z(A);
    this.settings = A.getSettings();
    this.THEAD = undefined;
    this.TBODY = undefined;
    this._wt = undefined;
    this.activeWt = undefined;
    this.postponedAdjustElementsSize = false;
    Md.set(this, {
      selectionMouseDown: false,
      mouseDown: undefined,
      table: undefined,
      lastWidth: 0,
      lastHeight: 0
    });
    this.createElements();
    this.registerEvents();
    this.initializeWalkontable();
  }
  (function Hf(D, A, m) {
    if (A) {
      pp(D.prototype, A);
    }
    if (m) {
      pp(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "render",
    value: function () {
      if (!this.instance.isRenderSuspended()) {
        this.instance.runHooks("beforeRender", this.instance.forceFullRender);
        if (this.postponedAdjustElementsSize) {
          this.postponedAdjustElementsSize = false;
          this.adjustElementsSize(true);
        }
        this._wt.draw(!this.instance.forceFullRender);
        this.instance.runHooks("afterRender", this.instance.forceFullRender);
        this.instance.forceFullRender = false;
        this.instance.renderCall = false;
      }
    }
  }, {
    key: "adjustElementsSize",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (this.instance.isRenderSuspended()) {
        this.postponedAdjustElementsSize = true;
      } else {
        this._wt.wtOverlays.adjustElementsSize(m);
      }
    }
  }, {
    key: "getCellAtCoords",
    value: function (m, T) {
      var te = this._wt.getCell(m, T);
      if (te < 0) {
        return null;
      } else {
        return te;
      }
    }
  }, {
    key: "scrollViewport",
    value: function (m, T, te, Se, ge) {
      return this._wt.scrollViewport(m, T, te, Se, ge);
    }
  }, {
    key: "scrollViewportHorizontally",
    value: function (m, T, te) {
      return this._wt.scrollViewportHorizontally(m, T, te);
    }
  }, {
    key: "scrollViewportVertically",
    value: function (m, T, te) {
      return this._wt.scrollViewportVertically(m, T, te);
    }
  }, {
    key: "createElements",
    value: function () {
      var m = Md.get(this);
      var T = this.instance;
      var te = T.rootElement;
      var Se = T.rootDocument;
      var ge = te.getAttribute("style");
      if (ge) {
        te.setAttribute("data-originalstyle", ge);
      }
      (0, he.cn)(te, "handsontable");
      m.table = Se.createElement("TABLE");
      (0, he.cn)(m.table, "htCore");
      if (this.instance.getSettings().tableClassName) {
        (0, he.cn)(m.table, this.instance.getSettings().tableClassName);
      }
      this.THEAD = Se.createElement("THEAD");
      m.table.appendChild(this.THEAD);
      this.TBODY = Se.createElement("TBODY");
      m.table.appendChild(this.TBODY);
      this.instance.table = m.table;
      this.instance.container.insertBefore(m.table, this.instance.container.firstChild);
    }
  }, {
    key: "registerEvents",
    value: function () {
      var m = this;
      var T = Md.get(this);
      var te = this.instance;
      var Se = te.rootElement;
      var ge = te.rootDocument;
      var Dt = te.selection;
      var en = ge.documentElement;
      this.eventManager.addEventListener(Se, "mousedown", function (tn) {
        T.selectionMouseDown = true;
        if (!m.isTextSelectionAllowed(tn.target)) {
          var vn = m.instance.rootWindow;
          (0, he.a7)(vn);
          tn.preventDefault();
          vn.focus();
        }
      });
      this.eventManager.addEventListener(Se, "mouseup", function () {
        T.selectionMouseDown = false;
      });
      this.eventManager.addEventListener(Se, "mousemove", function (tn) {
        if (T.selectionMouseDown && !m.isTextSelectionAllowed(tn.target)) {
          if (m.settings.fragmentSelection) {
            (0, he.a7)(m.instance.rootWindow);
          }
          tn.preventDefault();
        }
      });
      this.eventManager.addEventListener(en, "keyup", function (tn) {
        if (Dt.isInProgress() && !tn.shiftKey) {
          Dt.finish();
        }
      });
      this.eventManager.addEventListener(en, "mouseup", function (tn) {
        if (Dt.isInProgress() && (0, Dn.pW)(tn)) {
          Dt.finish();
        }
        T.mouseDown = false;
        if ((0, he.pV)(ge.activeElement) || !Dt.isSelected() && !Dt.isSelectedByAnyHeader() && !Se.contains(tn.target) && !(0, Dn.dO)(tn)) {
          m.instance.unlisten();
        }
      });
      this.eventManager.addEventListener(en, "contextmenu", function (tn) {
        if (Dt.isInProgress() && (0, Dn.dO)(tn)) {
          Dt.finish();
          T.mouseDown = false;
        }
      });
      this.eventManager.addEventListener(en, "touchend", function () {
        if (Dt.isInProgress()) {
          Dt.finish();
        }
        T.mouseDown = false;
      });
      this.eventManager.addEventListener(en, "mousedown", function (tn) {
        var vn = tn.target;
        var Vn = tn.x || tn.clientX;
        var Qn = tn.y || tn.clientY;
        var ii = tn.target;
        if (!T.mouseDown && Se && m.instance.view) {
          var _i = m.instance.view._wt.wtTable.holder;
          if (ii === _i) {
            var Li = (0, he.np)(ge);
            if (ge.elementFromPoint(Vn + Li, Qn) !== _i || ge.elementFromPoint(Vn, Qn + Li) !== _i) {
              return;
            }
          } else {
            for (; ii !== en;) {
              if (ii === null) {
                if (tn.isTargetWebComponent) {
                  break;
                }
                return;
              }
              if (ii === Se) {
                return;
              }
              ii = ii.parentNode;
            }
          }
          if (typeof m.settings.outsideClickDeselects == "function" ? m.settings.outsideClickDeselects(vn) : m.settings.outsideClickDeselects) {
            m.instance.deselectCell();
          } else {
            m.instance.destroyEditor(false, false);
          }
        }
      });
      this.eventManager.addEventListener(T.table, "selectstart", function (tn) {
        if (!m.settings.fragmentSelection && !(0, he.u7)(tn.target)) {
          tn.preventDefault();
        }
      });
    }
  }, {
    key: "translateFromRenderableToVisualCoords",
    value: function (m) {
      var T;
      return (T = this.instance)._createCellCoords.apply(T, Gp(this.translateFromRenderableToVisualIndex(m.row, m.col)));
    }
  }, {
    key: "translateFromRenderableToVisualIndex",
    value: function (m, T) {
      var te = m >= 0 ? this.instance.rowIndexMapper.getVisualFromRenderableIndex(m) : m;
      var Se = T >= 0 ? this.instance.columnIndexMapper.getVisualFromRenderableIndex(T) : T;
      if (te === null) {
        te = m;
      }
      if (Se === null) {
        Se = T;
      }
      return [te, Se];
    }
  }, {
    key: "countRenderableIndexes",
    value: function (m, T) {
      var te = Math.min(m.getNotTrimmedIndexesLength(), T);
      var Se = m.getNearestNotHiddenIndex(te - 1, -1);
      if (Se === null) {
        return 0;
      } else {
        return m.getRenderableFromVisualIndex(Se) + 1;
      }
    }
  }, {
    key: "countRenderableColumns",
    value: function () {
      return this.countRenderableIndexes(this.instance.columnIndexMapper, this.settings.maxCols);
    }
  }, {
    key: "countRenderableRows",
    value: function () {
      return this.countRenderableIndexes(this.instance.rowIndexMapper, this.settings.maxRows);
    }
  }, {
    key: "countNotHiddenRowIndexes",
    value: function (m, T) {
      return this.countNotHiddenIndexes(m, T, this.instance.rowIndexMapper, this.countRenderableRows());
    }
  }, {
    key: "countNotHiddenColumnIndexes",
    value: function (m, T) {
      return this.countNotHiddenIndexes(m, T, this.instance.columnIndexMapper, this.countRenderableColumns());
    }
  }, {
    key: "countNotHiddenIndexes",
    value: function (m, T, te, Se) {
      if (isNaN(m) || m < 0) {
        return 0;
      }
      var ge = te.getNearestNotHiddenIndex(m, T);
      var Dt = te.getRenderableFromVisualIndex(ge);
      if (!Number.isInteger(Dt)) {
        return 0;
      }
      var en = 0;
      if (T < 0) {
        en = Dt + 1;
      } else if (T > 0) {
        en = Se - Dt;
      }
      return en;
    }
  }, {
    key: "countNotHiddenFixedColumnsStart",
    value: function () {
      var m = this.instance.countCols();
      var T = Math.min(parseInt(this.settings.fixedColumnsStart, 10), m) - 1;
      return this.countNotHiddenColumnIndexes(T, -1);
    }
  }, {
    key: "countNotHiddenFixedRowsTop",
    value: function () {
      var m = this.instance.countRows();
      var T = Math.min(parseInt(this.settings.fixedRowsTop, 10), m) - 1;
      return this.countNotHiddenRowIndexes(T, -1);
    }
  }, {
    key: "countNotHiddenFixedRowsBottom",
    value: function () {
      var m = this.instance.countRows();
      var T = Math.max(m - parseInt(this.settings.fixedRowsBottom, 10), 0);
      return this.countNotHiddenRowIndexes(T, 1);
    }
  }, {
    key: "isMainTableNotFullyCoveredByOverlays",
    value: function () {
      var m = this.countNotHiddenFixedRowsTop() + this.countNotHiddenFixedRowsBottom();
      var T = this.countNotHiddenFixedColumnsStart();
      return this.instance.countRenderedRows() > m && this.instance.countRenderedCols() > T;
    }
  }, {
    key: "initializeWalkontable",
    value: function () {
      var m = this;
      var T = Md.get(this);
      var te = {
        rtlMode: this.instance.isRtl(),
        externalRowCalculator: this.instance.getPlugin("autoRowSize") && this.instance.getPlugin("autoRowSize").isEnabled(),
        table: T.table,
        isDataViewInstance: function () {
          return (0, Td._v)(m.instance);
        },
        preventOverflow: function () {
          return m.settings.preventOverflow;
        },
        preventWheel: function () {
          return m.settings.preventWheel;
        },
        stretchH: function () {
          return m.settings.stretchH;
        },
        data: function (vn, Vn) {
          var Qn;
          return (Qn = m.instance).getDataAtCell.apply(Qn, Gp(m.translateFromRenderableToVisualIndex(vn, Vn)));
        },
        totalRows: function () {
          return m.countRenderableRows();
        },
        totalColumns: function () {
          return m.countRenderableColumns();
        },
        fixedColumnsStart: function () {
          return m.countNotHiddenFixedColumnsStart();
        },
        fixedRowsTop: function () {
          return m.countNotHiddenFixedRowsTop();
        },
        fixedRowsBottom: function () {
          return m.countNotHiddenFixedRowsBottom();
        },
        shouldRenderInlineStartOverlay: function () {
          return m.settings.fixedColumnsStart > 0 || te.rowHeaders().length > 0;
        },
        shouldRenderTopOverlay: function () {
          return m.settings.fixedRowsTop > 0 || te.columnHeaders().length > 0;
        },
        shouldRenderBottomOverlay: function () {
          return m.settings.fixedRowsBottom > 0;
        },
        minSpareRows: function () {
          return m.settings.minSpareRows;
        },
        renderAllRows: this.settings.renderAllRows,
        rowHeaders: function () {
          var vn = [];
          if (m.instance.hasRowHeaders()) {
            vn.push(function (Vn, Qn) {
              var ii = Vn >= 0 ? m.instance.rowIndexMapper.getVisualFromRenderableIndex(Vn) : Vn;
              m.appendRowHeader(ii, Qn);
            });
          }
          m.instance.runHooks("afterGetRowHeaderRenderers", vn);
          return vn;
        },
        columnHeaders: function () {
          var vn = [];
          if (m.instance.hasColHeaders()) {
            vn.push(function (Vn, Qn) {
              var ii = Vn >= 0 ? m.instance.columnIndexMapper.getVisualFromRenderableIndex(Vn) : Vn;
              m.appendColHeader(ii, Qn);
            });
          }
          m.instance.runHooks("afterGetColumnHeaderRenderers", vn);
          return vn;
        },
        columnWidth: function (vn) {
          var Vn = m.instance.columnIndexMapper.getVisualFromRenderableIndex(vn);
          return m.instance.getColWidth(Vn === null ? vn : Vn);
        },
        rowHeight: function (vn) {
          var Vn = m.instance.rowIndexMapper.getVisualFromRenderableIndex(vn);
          return m.instance.getRowHeight(Vn === null ? vn : Vn);
        },
        cellRenderer: function (vn, Vn, Qn) {
          var _i = ef(m.translateFromRenderableToVisualIndex(vn, Vn), 2);
          var Li = _i[0];
          var zi = _i[1];
          var us = m.instance.runHooks("modifyGetCellCoords", Li, zi);
          var Vo = Li;
          var ba = zi;
          if (Array.isArray(us)) {
            var Co = ef(us, 2);
            Vo = Co[0];
            ba = Co[1];
          }
          var jr = m.instance.getCellMeta(Vo, ba);
          var nc = m.instance.colToProp(ba);
          var _l = m.instance.getDataAtRowProp(Vo, nc);
          if (m.instance.hasHook("beforeValueRender")) {
            _l = m.instance.runHooks("beforeValueRender", _l, jr);
          }
          m.instance.runHooks("beforeRenderer", Qn, Li, zi, nc, _l, jr);
          m.instance.getCellRenderer(jr)(m.instance, Qn, Li, zi, nc, _l, jr);
          m.instance.runHooks("afterRenderer", Qn, Li, zi, nc, _l, jr);
        },
        selections: this.instance.selection.highlight,
        hideBorderOnMouseDownOver: function () {
          return m.settings.fragmentSelection;
        },
        onWindowResize: function () {
          if (!!m.instance && !m.instance.isDestroyed) {
            m.instance.refreshDimensions();
          }
        },
        onCellMouseDown: function (vn, Vn, Qn, ii) {
          var _i = m.translateFromRenderableToVisualCoords(Vn);
          var Li = {
            row: false,
            column: false,
            cell: false
          };
          m.instance.listen();
          m.activeWt = ii;
          T.mouseDown = true;
          m.instance.runHooks("beforeOnCellMouseDown", vn, _i, Qn, Li);
          if (!(0, Dn.Ty)(vn)) {
            Dd(vn, {
              coords: _i,
              selection: m.instance.selection,
              controller: Li,
              cellCoordsFactory: function (us, Vo) {
                return m.instance._createCellCoords(us, Vo);
              }
            });
            m.instance.runHooks("afterOnCellMouseDown", vn, _i, Qn);
            m.activeWt = m._wt;
          }
        },
        onCellContextMenu: function (vn, Vn, Qn, ii) {
          var _i = m.translateFromRenderableToVisualCoords(Vn);
          m.activeWt = ii;
          T.mouseDown = false;
          if (m.instance.selection.isInProgress()) {
            m.instance.selection.finish();
          }
          m.instance.runHooks("beforeOnCellContextMenu", vn, _i, Qn);
          if (!(0, Dn.Ty)(vn)) {
            m.instance.runHooks("afterOnCellContextMenu", vn, _i, Qn);
            m.activeWt = m._wt;
          }
        },
        onCellMouseOut: function (vn, Vn, Qn, ii) {
          var _i = m.translateFromRenderableToVisualCoords(Vn);
          m.activeWt = ii;
          m.instance.runHooks("beforeOnCellMouseOut", vn, _i, Qn);
          if (!(0, Dn.Ty)(vn)) {
            m.instance.runHooks("afterOnCellMouseOut", vn, _i, Qn);
            m.activeWt = m._wt;
          }
        },
        onCellMouseOver: function (vn, Vn, Qn, ii) {
          var _i = m.translateFromRenderableToVisualCoords(Vn);
          var Li = {
            row: false,
            column: false,
            cell: false
          };
          m.activeWt = ii;
          m.instance.runHooks("beforeOnCellMouseOver", vn, _i, Qn, Li);
          if (!(0, Dn.Ty)(vn)) {
            if (T.mouseDown) {
              Dd(vn, {
                coords: _i,
                selection: m.instance.selection,
                controller: Li,
                cellCoordsFactory: function (us, Vo) {
                  return m.instance._createCellCoords(us, Vo);
                }
              });
            }
            m.instance.runHooks("afterOnCellMouseOver", vn, _i, Qn);
            m.activeWt = m._wt;
          }
        },
        onCellMouseUp: function (vn, Vn, Qn, ii) {
          var _i = m.translateFromRenderableToVisualCoords(Vn);
          m.activeWt = ii;
          m.instance.runHooks("beforeOnCellMouseUp", vn, _i, Qn);
          if (!(0, Dn.Ty)(vn) && !m.instance.isDestroyed) {
            m.instance.runHooks("afterOnCellMouseUp", vn, _i, Qn);
            m.activeWt = m._wt;
          }
        },
        onCellCornerMouseDown: function (vn) {
          vn.preventDefault();
          m.instance.runHooks("afterOnCellCornerMouseDown", vn);
        },
        onCellCornerDblClick: function (vn) {
          vn.preventDefault();
          m.instance.runHooks("afterOnCellCornerDblClick", vn);
        },
        beforeDraw: function (vn, Vn) {
          return m.beforeRender(vn, Vn);
        },
        onDraw: function (vn) {
          return m.afterRender(vn);
        },
        onScrollVertically: function () {
          return m.instance.runHooks("afterScrollVertically");
        },
        onScrollHorizontally: function () {
          return m.instance.runHooks("afterScrollHorizontally");
        },
        onBeforeRemoveCellClassNames: function () {
          return m.instance.runHooks("beforeRemoveCellClassNames");
        },
        onBeforeHighlightingRowHeader: function (vn, Vn, Qn) {
          var ii = m.instance.rowIndexMapper;
          var _i = ii.getVisualFromRenderableIndex(vn);
          var Li = m.instance.runHooks("beforeHighlightingRowHeader", _i, Vn, Qn);
          return ii.getRenderableFromVisualIndex(ii.getNearestNotHiddenIndex(Li, 1));
        },
        onBeforeHighlightingColumnHeader: function (vn, Vn, Qn) {
          var ii = m.instance.columnIndexMapper;
          var _i = ii.getVisualFromRenderableIndex(vn);
          var Li = m.instance.runHooks("beforeHighlightingColumnHeader", _i, Vn, Qn);
          return ii.getRenderableFromVisualIndex(ii.getNearestNotHiddenIndex(Li, 1));
        },
        onAfterDrawSelection: function (vn, Vn, Qn) {
          var ii;
          var Li = ef(m.translateFromRenderableToVisualIndex(vn, Vn), 2);
          var zi = Li[0];
          var us = Li[1];
          var Vo = m.instance.selection.getSelectedRange();
          var ba = Vo.size();
          if (ba > 0) {
            var jr = Vo.peekByIndex((Qn ?? 0) + 1 - ba);
            ii = [jr.from.row, jr.from.col, jr.to.row, jr.to.col];
          }
          return m.instance.runHooks("afterDrawSelection", zi, us, ii, Qn);
        },
        onBeforeDrawBorders: function (vn, Vn) {
          var Qn = ef(vn, 4);
          var _i = Qn[1];
          var Li = Qn[2];
          var zi = Qn[3];
          var us = [m.instance.rowIndexMapper.getVisualFromRenderableIndex(Qn[0]), m.instance.columnIndexMapper.getVisualFromRenderableIndex(_i), m.instance.rowIndexMapper.getVisualFromRenderableIndex(Li), m.instance.columnIndexMapper.getVisualFromRenderableIndex(zi)];
          return m.instance.runHooks("beforeDrawBorders", us, Vn);
        },
        onBeforeTouchScroll: function () {
          return m.instance.runHooks("beforeTouchScroll");
        },
        onAfterMomentumScroll: function () {
          return m.instance.runHooks("afterMomentumScroll");
        },
        onBeforeStretchingColumnWidth: function (vn, Vn) {
          var Qn = m.instance.columnIndexMapper.getVisualFromRenderableIndex(Vn);
          return m.instance.runHooks("beforeStretchingColumnWidth", vn, Qn);
        },
        onModifyRowHeaderWidth: function (vn) {
          return m.instance.runHooks("modifyRowHeaderWidth", vn);
        },
        onModifyGetCellCoords: function (vn, Vn, Qn) {
          var ii = m.instance.rowIndexMapper;
          var _i = m.instance.columnIndexMapper;
          var Li = Vn >= 0 ? _i.getVisualFromRenderableIndex(Vn) : Vn;
          var zi = vn >= 0 ? ii.getVisualFromRenderableIndex(vn) : vn;
          var us = m.instance.runHooks("modifyGetCellCoords", zi, Li, Qn);
          if (Array.isArray(us)) {
            var Vo = ef(us, 4);
            var ba = Vo[0];
            var Co = Vo[1];
            var jr = Vo[2];
            var nc = Vo[3];
            return [ba >= 0 ? ii.getRenderableFromVisualIndex(ii.getNearestNotHiddenIndex(ba, 1)) : ba, Co >= 0 ? _i.getRenderableFromVisualIndex(_i.getNearestNotHiddenIndex(Co, 1)) : Co, jr >= 0 ? ii.getRenderableFromVisualIndex(ii.getNearestNotHiddenIndex(jr, -1)) : jr, nc >= 0 ? _i.getRenderableFromVisualIndex(_i.getNearestNotHiddenIndex(nc, -1)) : nc];
          }
        },
        viewportRowCalculatorOverride: function (vn) {
          var Vn = m.settings.viewportRowRenderingOffset;
          if (Vn === "auto" && m.settings.fixedRowsTop) {
            Vn = 10;
          }
          if (Vn > 0 || Vn === "auto") {
            var Qn = m.countRenderableRows();
            var ii = vn.startRow;
            var _i = vn.endRow;
            if (typeof Vn == "number") {
              vn.startRow = Math.max(ii - Vn, 0);
              vn.endRow = Math.min(_i + Vn, Qn - 1);
            } else if (Vn === "auto") {
              var Li = Math.ceil(_i / Qn * 12);
              vn.startRow = Math.max(ii - Li, 0);
              vn.endRow = Math.min(_i + Li, Qn - 1);
            }
          }
          m.instance.runHooks("afterViewportRowCalculatorOverride", vn);
        },
        viewportColumnCalculatorOverride: function (vn) {
          var Vn = m.settings.viewportColumnRenderingOffset;
          if (Vn === "auto" && m.settings.fixedColumnsStart) {
            Vn = 10;
          }
          if (Vn > 0 || Vn === "auto") {
            var Qn = m.countRenderableColumns();
            var ii = vn.startColumn;
            var _i = vn.endColumn;
            if (typeof Vn == "number") {
              vn.startColumn = Math.max(ii - Vn, 0);
              vn.endColumn = Math.min(_i + Vn, Qn - 1);
            }
            if (Vn === "auto") {
              var Li = Math.ceil(_i / Qn * 6);
              vn.startColumn = Math.max(ii - Li, 0);
              vn.endColumn = Math.min(_i + Li, Qn - 1);
            }
          }
          m.instance.runHooks("afterViewportColumnCalculatorOverride", vn);
        },
        rowHeaderWidth: function () {
          return m.settings.rowHeaderWidth;
        },
        columnHeaderHeight: function () {
          var vn = m.instance.runHooks("modifyColumnHeaderHeight");
          return m.settings.columnHeaderHeight || vn;
        }
      };
      this.instance.runHooks("beforeInitWalkontable", te);
      this._wt = new Yy(te);
      this.activeWt = this._wt;
      var Se = this._wt.wtTable.spreader;
      var ge = this.instance.rootElement.getBoundingClientRect();
      this.setLastSize(ge.width, ge.height);
      this.eventManager.addEventListener(Se, "mousedown", function (tn) {
        if (tn.target === Se && tn.which === 3) {
          tn.stopPropagation();
        }
      });
      this.eventManager.addEventListener(Se, "contextmenu", function (tn) {
        if (tn.target === Se && tn.which === 3) {
          tn.stopPropagation();
        }
      });
      this.eventManager.addEventListener(this.instance.rootDocument.documentElement, "click", function () {
        if (m.settings.observeDOMVisibility && m._wt.drawInterrupted) {
          m.instance.forceFullRender = true;
          m.render();
        }
      });
    }
  }, {
    key: "isTextSelectionAllowed",
    value: function (m) {
      if ((0, he.u7)(m)) {
        return true;
      }
      var T = (0, he.MO)(m, this.instance.view._wt.wtTable.spreader);
      return this.settings.fragmentSelection === true && !!T || this.settings.fragmentSelection === "cell" && !!this.isSelectedOnlyCell() && !!T || !!!this.settings.fragmentSelection && !!this.isCellEdited() && !!this.isSelectedOnlyCell();
    }
  }, {
    key: "isMouseDown",
    value: function () {
      return Md.get(this).mouseDown;
    }
  }, {
    key: "isSelectedOnlyCell",
    value: function () {
      var m;
      var T;
      return (m = (T = this.instance.getSelectedRangeLast()) === null || T === undefined ? undefined : T.isSingle()) !== null && m !== undefined && m;
    }
  }, {
    key: "isCellEdited",
    value: function () {
      var m = this.instance.getActiveEditor();
      return m && m.isOpened();
    }
  }, {
    key: "beforeRender",
    value: function (m, T) {
      if (m) {
        this.instance.runHooks("beforeViewRender", this.instance.forceFullRender, T);
      }
    }
  }, {
    key: "afterRender",
    value: function (m) {
      if (m) {
        this.instance.runHooks("afterViewRender", this.instance.forceFullRender);
      }
    }
  }, {
    key: "appendRowHeader",
    value: function (m, T) {
      if (T.firstChild) {
        var te = T.firstChild;
        if (!(0, he.pv)(te, "relative")) {
          (0, he.cS)(T);
          this.appendRowHeader(m, T);
          return;
        }
        this.updateCellHeader(te.querySelector(".rowHeader"), m, this.instance.getRowHeader);
      } else {
        var Se = this.instance;
        var ge = Se.rootDocument;
        var Dt = Se.getRowHeader;
        var en = ge.createElement("div");
        var tn = ge.createElement("span");
        en.className = "relative";
        tn.className = "rowHeader";
        this.updateCellHeader(tn, m, Dt);
        en.appendChild(tn);
        T.appendChild(en);
      }
      this.instance.runHooks("afterGetRowHeader", m, T);
    }
  }, {
    key: "appendColHeader",
    value: function (m, T) {
      var te = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.instance.getColHeader;
      var Se = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (T.firstChild) {
        var ge = T.firstChild;
        if ((0, he.pv)(ge, "relative")) {
          this.updateCellHeader(ge.querySelector(".colHeader"), m, te);
        } else {
          (0, he.cS)(T);
          this.appendColHeader(m, T, Se);
        }
      } else {
        var Dt = this.instance.rootDocument;
        var en = Dt.createElement("div");
        var tn = Dt.createElement("span");
        en.className = "relative";
        tn.className = "colHeader";
        this.updateCellHeader(tn, m, te);
        en.appendChild(tn);
        T.appendChild(en);
      }
      this.instance.runHooks("afterGetColHeader", m, T, Se);
    }
  }, {
    key: "updateCellHeader",
    value: function (m, T, te) {
      var Se = T;
      var ge = this._wt.wtOverlays.getParentOverlay(m) || this._wt;
      if (m.parentNode) {
        if ((0, he.pv)(m, "colHeader")) {
          Se = ge.wtTable.columnFilter.sourceToRendered(T);
        } else if ((0, he.pv)(m, "rowHeader")) {
          Se = ge.wtTable.rowFilter.sourceToRendered(T);
        }
      }
      if (Se > -1) {
        (0, he.uS)(m, te(T));
      } else {
        (0, he.tT)(m, String.fromCharCode(160));
        (0, he.cn)(m, "cornerHeader");
      }
    }
  }, {
    key: "maximumVisibleElementWidth",
    value: function (m) {
      var te = this._wt.wtViewport.getWorkspaceWidth() - m;
      if (te > 0) {
        return te;
      } else {
        return 0;
      }
    }
  }, {
    key: "maximumVisibleElementHeight",
    value: function (m) {
      var te = this._wt.wtViewport.getWorkspaceHeight() - m;
      if (te > 0) {
        return te;
      } else {
        return 0;
      }
    }
  }, {
    key: "setLastSize",
    value: function (m, T) {
      var te = Md.get(this);
      var Se = [m, T];
      te.lastWidth = Se[0];
      te.lastHeight = Se[1];
    }
  }, {
    key: "getLastSize",
    value: function () {
      var m = Md.get(this);
      return {
        width: m.lastWidth,
        height: m.lastHeight
      };
    }
  }, {
    key: "getFirstFullyVisibleRow",
    value: function () {
      return this.instance.rowIndexMapper.getVisualFromRenderableIndex(this.instance.view._wt.wtScroll.getFirstVisibleRow());
    }
  }, {
    key: "getLastFullyVisibleRow",
    value: function () {
      return this.instance.rowIndexMapper.getVisualFromRenderableIndex(this.instance.view._wt.wtScroll.getLastVisibleRow());
    }
  }, {
    key: "getFirstFullyVisibleColumn",
    value: function () {
      return this.instance.columnIndexMapper.getVisualFromRenderableIndex(this.instance.view._wt.wtScroll.getFirstVisibleColumn());
    }
  }, {
    key: "getLastFullyVisibleColumn",
    value: function () {
      return this.instance.columnIndexMapper.getVisualFromRenderableIndex(this.instance.view._wt.wtScroll.getLastVisibleColumn());
    }
  }, {
    key: "destroy",
    value: function () {
      this._wt.destroy();
      this.eventManager.destroy();
    }
  }]);
  return D;
}();
require("47941");
import * as Qm from "84328";
var zp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
function Ph(D) {
  for (var T, A = D + 1, m = ""; A > 0;) {
    T = (A - 1) % zp;
    m = String.fromCharCode(65 + T) + m;
    A = parseInt((A - T) / zp, 10);
  }
  return m;
}
function fh(D, A) {
  var m = typeof A === "undefined" || A;
  return function (te, Se) {
    return function ge(Dt) {
      if (Dt) {
        if ((0, rt.nr)(Dt, D) && Dt[D] !== undefined) {
          return Dt[D];
        }
        if ((0, rt.nr)(Dt, "type") && Dt.type) {
          if (typeof Dt.type != "string") {
            throw new Error("Cell \"type\" must be a string");
          }
          var en = (0, Qm.DA)(Dt.type);
          if ((0, rt.nr)(en, D)) {
            return en[D];
          }
          if (m) {
            return;
          }
        }
        return ge(Object.getPrototypeOf(Dt));
      }
    }(typeof te == "number" ? this.getCellMeta(te, Se) : te);
  };
}
function g0(D) {
  var A = 0;
  if (Array.isArray(D)) {
    if (D[0] && Array.isArray(D[0])) {
      A = D[0].length;
    } else if (D[0] && (0, rt.Kn)(D[0])) {
      A = (0, rt.Q8)(D[0]);
    }
  }
  return A;
}
function Od(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function $g(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
const $m = function () {
  function D(A) {
    var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    Od(this, D);
    this.hot = A;
    this.data = m;
    this.dataType = "array";
    this.colToProp = function () {};
    this.propToCol = function () {};
  }
  (function Kp(D, A, m) {
    if (A) {
      $g(D.prototype, A);
    }
    if (m) {
      $g(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "modifyRowData",
    value: function (m) {
      var T;
      if (this.hot.hasHook("modifyRowData")) {
        T = this.hot.runHooks("modifyRowData", m);
      }
      if (T === undefined || Number.isInteger(T)) {
        return this.data[m];
      } else {
        return T;
      }
    }
  }, {
    key: "getData",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (this.data && this.data.length !== 0) {
        return this.getByRange(null, null, m);
      } else {
        return this.data;
      }
    }
  }, {
    key: "setData",
    value: function (m) {
      this.data = m;
    }
  }, {
    key: "getAtColumn",
    value: function (m) {
      var T = this;
      var te = [];
      (0, Oe.Bk)(this.data, function (Se, ge) {
        var Dt = T.getAtCell(ge, m);
        te.push(Dt);
      });
      return te;
    }
  }, {
    key: "getAtRow",
    value: function (m, T, te) {
      var Se = this;
      var ge = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
      var Dt = T === undefined && te === undefined;
      var en = null;
      var tn = null;
      en = this.modifyRowData(m);
      if (Array.isArray(en)) {
        tn = [];
        if (Dt) {
          en.forEach(function (Qn, ii) {
            tn[ii] = Se.getAtPhysicalCell(m, ii, en);
          });
        } else {
          (0, It.q4)(T, te, function (Qn) {
            tn[Qn - T] = Se.getAtPhysicalCell(m, Qn, en);
          });
        }
      } else if ((0, rt.Kn)(en) || (0, pe.mf)(en)) {
        tn = ge ? [] : {};
        if (!Dt || ge) {
          var vn = 0;
          var Vn = this.countFirstRowKeys() - 1;
          (0, It.q4)(vn, Vn, function (Qn) {
            var ii = Se.colToProp(Qn);
            if (Qn >= (T || vn) && Qn <= (te || Vn) && !Number.isInteger(ii)) {
              var _i = Se.getAtPhysicalCell(m, ii, en);
              if (ge) {
                tn.push(_i);
              } else {
                (0, rt.Hn)(tn, ii, _i);
              }
            }
          });
        } else {
          (0, rt._l)(en, function (Qn, ii) {
            (0, rt.Hn)(tn, ii, Se.getAtPhysicalCell(m, ii, en));
          });
        }
      }
      return tn;
    }
  }, {
    key: "setAtCell",
    value: function (m, T, te) {
      if (m < this.countRows() && T < this.countFirstRowKeys()) {
        if (this.hot.hasHook("modifySourceData")) {
          var Se = (0, rt.sm)(te);
          this.hot.runHooks("modifySourceData", m, this.propToCol(T), Se, "set");
          if (Se.isTouched()) {
            te = Se.value;
          }
        }
        if (Number.isInteger(T)) {
          this.data[m][T] = te;
        } else {
          (0, rt.Hn)(this.data[m], T, te);
        }
      }
    }
  }, {
    key: "getAtPhysicalCell",
    value: function (m, T, te) {
      var Se = null;
      if (te) {
        Se = typeof T == "string" ? (0, rt.$s)(te, T) : typeof T == "function" ? T(te) : te[T];
      }
      if (this.hot.hasHook("modifySourceData")) {
        var ge = (0, rt.sm)(Se);
        this.hot.runHooks("modifySourceData", m, this.colToProp(T), ge, "get");
        if (ge.isTouched()) {
          Se = ge.value;
        }
      }
      return Se;
    }
  }, {
    key: "getAtCell",
    value: function (m, T) {
      var te = this.modifyRowData(m);
      return this.getAtPhysicalCell(m, this.colToProp(T), te);
    }
  }, {
    key: "getByRange",
    value: function () {
      var m = this;
      var T = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var te = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var Se = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      var ge = false;
      var Dt = null;
      var en = null;
      var tn = null;
      var vn = null;
      if (T === null || te === null) {
        ge = true;
        Dt = 0;
        tn = this.countRows() - 1;
      } else {
        Dt = Math.min(T.row, te.row);
        en = Math.min(T.col, te.col);
        tn = Math.max(T.row, te.row);
        vn = Math.max(T.col, te.col);
      }
      var Vn = [];
      (0, It.q4)(Dt, tn, function (Qn) {
        Vn.push(ge ? m.getAtRow(Qn, undefined, undefined, Se) : m.getAtRow(Qn, en, vn, Se));
      });
      return Vn;
    }
  }, {
    key: "countRows",
    value: function () {
      if (this.hot.hasHook("modifySourceLength")) {
        var m = this.hot.runHooks("modifySourceLength");
        if (Number.isInteger(m)) {
          return m;
        }
      }
      return this.data.length;
    }
  }, {
    key: "countFirstRowKeys",
    value: function () {
      return g0(this.data);
    }
  }, {
    key: "destroy",
    value: function () {
      this.data = null;
      this.hot = null;
    }
  }]);
  return D;
}();
require("34553");
require("57327");
require("32023");
require("74819");
require("38880");
import * as Xm from "47699";
function qm(D) {
  return function ev(D) {
    if (Array.isArray(D)) {
      return ph(D);
    }
  }(D) || function hh(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || function em(D, A) {
    if (D) {
      if (typeof D == "string") {
        return ph(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return ph(D, A);
      }
    }
  }(D) || function yp() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function ph(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function v0(D, A, m) {
  return [].concat(qm(D.slice(0, A)), qm(m), qm(D.slice(A)));
}
function Fh(D, A) {
  return (0, Oe.w7)(D, function (m) {
    return A.includes(m) === false;
  });
}
function ty(D, A) {
  return (0, Oe.Sc)(D, function (m) {
    return m - A.filter(function (T) {
      return T < m;
    }).length;
  });
}
function tv(D, A) {
  var m = A[0];
  var T = A.length;
  return (0, Oe.Sc)(D, function (te) {
    if (te >= m) {
      return te + T;
    } else {
      return te;
    }
  });
}
function gh(D) {
  return (gh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function mh(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Jp() {
  Jp = typeof Reflect !== "undefined" && Reflect.get ? Reflect.get.bind() : function (A, m, T) {
    var te = ny(A, m);
    if (te) {
      var Se = Object.getOwnPropertyDescriptor(te, m);
      if (Se.get) {
        return Se.get.call(arguments.length < 3 ? A : T);
      } else {
        return Se.value;
      }
    }
  };
  return Jp.apply(this, arguments);
}
function ny(D, A) {
  for (; !Object.prototype.hasOwnProperty.call(D, A) && (D = Wf(D)) !== null;);
  return D;
}
function nv(D, A) {
  return (nv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function iv(D, A) {
  if (A && (gh(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function rv(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Wf(D) {
  return (Wf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var sv = function (D) {
  (function y0(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      nv(D, A);
    }
  })(m, D);
  var A = function iy(D) {
    var A = function ry() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Wf(D);
      if (A) {
        var Se = Wf(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return iv(this, te);
    };
  }(m);
  function m() {
    (function jp(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    return A.call(this, function (T) {
      return T;
    });
  }
  (function Qp(D, A, m) {
    if (A) {
      mh(D.prototype, A);
    }
    if (m) {
      mh(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "insert",
    value: function (te, Se) {
      var ge = tv(this.indexedValues, Se);
      this.indexedValues = v0(ge, te, Se);
      Jp(Wf(m.prototype), "insert", this).call(this, te, Se);
    }
  }, {
    key: "remove",
    value: function (te) {
      var Se = Fh(this.indexedValues, te);
      this.indexedValues = ty(Se, te);
      Jp(Wf(m.prototype), "remove", this).call(this, te);
    }
  }]);
  return m;
}(Xm.n);
import * as ov from "87755";
function Gc(D) {
  return (Gc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Ky(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function sy(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function tm(D, A) {
  return (tm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function _p(D, A) {
  if (A && (Gc(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function bf(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Yf(D) {
  return (Yf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var $p = function (D) {
  (function oy(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      tm(D, A);
    }
  })(m, D);
  var A = function ay(D) {
    var A = function _0() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Yf(D);
      if (A) {
        var Se = Yf(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return _p(this, te);
    };
  }(m);
  function m() {
    var T = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    Ky(this, m);
    return A.call(this, T);
  }
  (function av(D, A, m) {
    if (A) {
      sy(D.prototype, A);
    }
    if (m) {
      sy(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "getHiddenIndexes",
    value: function () {
      return (0, Oe.k$)(this.getValues(), function (te, Se, ge) {
        if (Se) {
          te.push(ge);
        }
        return te;
      }, []);
    }
  }]);
  return m;
}(ov.L);
import * as E0 from "56922";
function Ka(D) {
  return (Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Gd(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function Ir(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function ly(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Zf() {
  Zf = typeof Reflect !== "undefined" && Reflect.get ? Reflect.get.bind() : function (A, m, T) {
    var te = nl(A, m);
    if (te) {
      var Se = Object.getOwnPropertyDescriptor(te, m);
      if (Se.get) {
        return Se.get.call(arguments.length < 3 ? A : T);
      } else {
        return Se.value;
      }
    }
  };
  return Zf.apply(this, arguments);
}
function nl(D, A) {
  for (; !Object.prototype.hasOwnProperty.call(D, A) && (D = Mu(D)) !== null;);
  return D;
}
function Ep(D, A) {
  return (Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function x0(D, A) {
  if (A && (Ka(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return uv(D);
}
function uv(D) {
  if (D === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return D;
}
function Mu(D) {
  return (Mu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
function Gf(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var eg = function (D) {
  (function nm(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Ep(D, A);
    }
  })(m, D);
  var A = function cv(D) {
    var A = function vh() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Mu(D);
      if (A) {
        var Se = Mu(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return x0(this, te);
    };
  }(m);
  function m() {
    var T;
    Ir(this, m);
    for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
      Se[ge] = arguments[ge];
    }
    Gf(uv(T = A.call.apply(A, [this].concat(Se))), "orderOfIndexes", []);
    return T;
  }
  (function A0(D, A, m) {
    if (A) {
      ly(D.prototype, A);
    }
    if (m) {
      ly(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "getValues",
    value: function () {
      var te = this;
      return this.orderOfIndexes.map(function (Se) {
        return te.indexedValues[Se];
      });
    }
  }, {
    key: "setValues",
    value: function (te) {
      this.orderOfIndexes = function Xp(D) {
        return function cl(D) {
          if (Array.isArray(D)) {
            return Gd(D);
          }
        }(D) || function lv(D) {
          if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
            return Array.from(D);
          }
        }(D) || function b0(D, A) {
          if (D) {
            if (typeof D == "string") {
              return Gd(D, A);
            }
            var m = Object.prototype.toString.call(D).slice(8, -1);
            if (m === "Object" && D.constructor) {
              m = D.constructor.name;
            }
            if (m === "Map" || m === "Set") {
              return Array.from(D);
            }
            if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
              return Gd(D, A);
            }
          }
        }(D) || function qp() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }(Array(te.length).keys());
      Zf(Mu(m.prototype), "setValues", this).call(this, te);
    }
  }, {
    key: "setValueAtIndex",
    value: function (te, Se) {
      var ge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.orderOfIndexes.length;
      return te < this.indexedValues.length && (this.indexedValues[te] = Se, this.orderOfIndexes.includes(te) === false && this.orderOfIndexes.splice(ge, 0, te), this.runLocalHooks("change"), true);
    }
  }, {
    key: "clearValue",
    value: function (te) {
      this.orderOfIndexes = Fh(this.orderOfIndexes, [te]);
      if ((0, pe.mf)(this.initValueOrFn)) {
        Zf(Mu(m.prototype), "setValueAtIndex", this).call(this, te, this.initValueOrFn(te));
      } else {
        Zf(Mu(m.prototype), "setValueAtIndex", this).call(this, te, this.initValueOrFn);
      }
    }
  }, {
    key: "getLength",
    value: function () {
      return this.orderOfIndexes.length;
    }
  }, {
    key: "setDefaultValues",
    value: function () {
      var te = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.indexedValues.length;
      this.orderOfIndexes.length = 0;
      Zf(Mu(m.prototype), "setDefaultValues", this).call(this, te);
    }
  }, {
    key: "insert",
    value: function (te, Se) {
      this.indexedValues = (0, E0.S)(this.indexedValues, te, Se, this.initValueOrFn);
      this.orderOfIndexes = tv(this.orderOfIndexes, Se);
      Zf(Mu(m.prototype), "insert", this).call(this, te, Se);
    }
  }, {
    key: "remove",
    value: function (te) {
      this.indexedValues = (0, E0.t)(this.indexedValues, te);
      this.orderOfIndexes = Fh(this.orderOfIndexes, te);
      this.orderOfIndexes = ty(this.orderOfIndexes, te);
      Zf(Mu(m.prototype), "remove", this).call(this, te);
    }
  }, {
    key: "getEntries",
    value: function () {
      var te = this;
      return this.orderOfIndexes.map(function (Se) {
        return [Se, te.getValueAtIndex(Se)];
      });
    }
  }]);
  return m;
}(Xm.n);
function ac(D) {
  return (ac = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Xo(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function dv(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Kf(D, A) {
  return (Kf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function im(D, A) {
  if (A && (ac(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function rm(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function tg(D) {
  return (tg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
var xf = function (D) {
  (function Ou(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Kf(D, A);
    }
  })(m, D);
  var A = function fv(D) {
    var A = function Af() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = tg(D);
      if (A) {
        var Se = tg(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return im(this, te);
    };
  }(m);
  function m() {
    var T = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    Xo(this, m);
    return A.call(this, T);
  }
  (function zf(D, A, m) {
    if (A) {
      dv(D.prototype, A);
    }
    if (m) {
      dv(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "getTrimmedIndexes",
    value: function () {
      return (0, Oe.k$)(this.getValues(), function (te, Se, ge) {
        if (Se) {
          te.push(ge);
        }
        return te;
      }, []);
    }
  }]);
  return m;
}(ov.L);
var hv = new Map([["hiding", $p], ["index", Xm.n], ["linkedPhysicalIndexToValue", eg], ["physicalIndexToValue", ov.L], ["trimming", xf]]);
import * as jf from "50914";
function ua(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Xr = function () {
  function D() {
    (function C0(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.collection = new Map();
  }
  (function Yu(D, A, m) {
    if (A) {
      ua(D.prototype, A);
    }
    if (m) {
      ua(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "register",
    value: function (m, T) {
      var te = this;
      if (this.collection.has(m) === false) {
        this.collection.set(m, T);
        T.addLocalHook("change", function () {
          return te.runLocalHooks("change", T);
        });
      }
    }
  }, {
    key: "unregister",
    value: function (m) {
      var T = this.collection.get(m);
      if ((0, re.$K)(T)) {
        T.destroy();
        this.collection.delete(m);
        this.runLocalHooks("change", T);
      }
    }
  }, {
    key: "unregisterAll",
    value: function () {
      var m = this;
      this.collection.forEach(function (T, te) {
        return m.unregister(te);
      });
      this.collection.clear();
    }
  }, {
    key: "get",
    value: function (m) {
      if ((0, re.o8)(m)) {
        return Array.from(this.collection.values());
      } else {
        return this.collection.get(m);
      }
    }
  }, {
    key: "getLength",
    value: function () {
      return this.collection.size;
    }
  }, {
    key: "removeFromEvery",
    value: function (m) {
      this.collection.forEach(function (T) {
        T.remove(m);
      });
    }
  }, {
    key: "insertToEvery",
    value: function (m, T) {
      this.collection.forEach(function (te) {
        te.insert(m, T);
      });
    }
  }, {
    key: "initEvery",
    value: function (m) {
      this.collection.forEach(function (T) {
        T.init(m);
      });
    }
  }]);
  return D;
}();
function Lh(D) {
  return (Lh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function nf(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Na(D, A) {
  return (Na = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function sm(D, A) {
  if (A && (Lh(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function gv(D) {
    if (D === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return D;
  }(D);
}
function Uh(D) {
  return (Uh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
(0, rt.jB)(Xr, jf.Z);
var bp = function (D) {
  (function pv(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      Na(D, A);
    }
  })(m, D);
  var A = function rf(D) {
    var A = function Nh() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Uh(D);
      if (A) {
        var Se = Uh(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return sm(this, te);
    };
  }(m);
  function m(T, te) {
    var Se;
    (function Pd(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (Se = A.call(this)).mergedValuesCache = [];
    Se.aggregationFunction = T;
    Se.fallbackValue = te;
    return Se;
  }
  (function cy(D, A, m) {
    if (A) {
      nf(D.prototype, A);
    }
    if (m) {
      nf(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "getMergedValues",
    value: function () {
      var te = arguments.length <= 0 || arguments[0] === undefined || arguments[0];
      if (te === true) {
        return this.mergedValuesCache;
      }
      if (this.getLength() === 0) {
        return [];
      }
      for (var Se = (0, Oe.Sc)(this.get(), function (Vn) {
          return Vn.getValues();
        }), ge = [], Dt = (0, re.$K)(Se[0]) && Se[0].length || 0, en = 0; en < Dt; en += 1) {
        for (var tn = [], vn = 0; vn < this.getLength(); vn += 1) {
          tn.push(Se[vn][en]);
        }
        ge.push(tn);
      }
      return (0, Oe.Sc)(ge, this.aggregationFunction);
    }
  }, {
    key: "getMergedValueAtIndex",
    value: function (te, Se) {
      var ge = this.getMergedValues(Se)[te];
      if ((0, re.$K)(ge)) {
        return ge;
      } else {
        return this.fallbackValue;
      }
    }
  }, {
    key: "updateCache",
    value: function () {
      this.mergedValuesCache = this.getMergedValues(false);
    }
  }]);
  return m;
}(Xr);
function om(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function mv(D, A, m) {
  if (!A.has(D)) {
    throw new TypeError("attempted to " + m + " private field on non-instance");
  }
  return A.get(D);
}
var cm = new WeakMap();
var vv = function () {
  function D() {
    (function yh(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    (function ig(D, A, m) {
      (function am(D, A) {
        if (A.has(D)) {
          throw new TypeError("Cannot initialize the same private elements twice on an object");
        }
      })(D, A);
      A.set(D, m);
    })(this, cm, {
      writable: true,
      value: []
    });
  }
  (function w0(D, A, m) {
    if (A) {
      om(D.prototype, A);
    }
    if (m) {
      om(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "subscribe",
    value: function (m) {
      this.addLocalHook("change", m);
      this._write(function Bh(D, A) {
        return function uy(D, A) {
          if (A.get) {
            return A.get.call(D);
          } else {
            return A.value;
          }
        }(D, mv(D, A, "get"));
      }(this, cm));
      return this;
    }
  }, {
    key: "unsubscribe",
    value: function () {
      this.runLocalHooks("unsubscribe");
      this.clearLocalHooks();
      return this;
    }
  }, {
    key: "_write",
    value: function (m) {
      if (m.length > 0) {
        this.runLocalHooks("change", m);
      }
      return this;
    }
  }, {
    key: "_writeInitialChanges",
    value: function (m) {
      (function lm(D, A, m) {
        (function rg(D, A, m) {
          if (A.set) {
            A.set.call(D, m);
          } else {
            if (!A.writable) {
              throw new TypeError("attempted to set read only private field");
            }
            A.value = m;
          }
        })(D, mv(D, A, "set"), m);
        return m;
      })(this, cm, m);
    }
  }]);
  return D;
}();
function yv(D, A) {
  for (var m = [], T = 0, te = 0; T < D.length && te < A.length; T++, te++) {
    if (D[T] !== A[te]) {
      m.push({
        op: "replace",
        index: te,
        oldValue: D[T],
        newValue: A[te]
      });
    }
  }
  for (; T < A.length; T++) {
    m.push({
      op: "insert",
      index: T,
      oldValue: undefined,
      newValue: A[T]
    });
  }
  for (; te < D.length; te++) {
    m.push({
      op: "remove",
      index: te,
      oldValue: D[te],
      newValue: undefined
    });
  }
  return m;
}
function um(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Vh(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function _h(D, A, m) {
  (function Id(D, A) {
    if (A.has(D)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  })(D, A);
  A.set(D, m);
}
function Zu(D, A) {
  return function Cf(D, A) {
    if (A.get) {
      return A.get.call(D);
    } else {
      return A.value;
    }
  }(D, dc(D, A, "get"));
}
function Eh(D, A, m) {
  (function _v(D, A, m) {
    if (A.set) {
      A.set.call(D, m);
    } else {
      if (!A.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      A.value = m;
    }
  })(D, dc(D, A, "set"), m);
  return m;
}
function dc(D, A, m) {
  if (!A.has(D)) {
    throw new TypeError("attempted to " + m + " private field on non-instance");
  }
  return A.get(D);
}
(0, rt.jB)(vv, jf.Z);
var sg;
var Qf = new WeakMap();
var Ec = new WeakMap();
var Rd = new WeakMap();
var cd = new WeakMap();
var wf = new WeakMap();
var Sf = function () {
  function D() {
    var A = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var m = A.initialIndexValue;
    um(this, D);
    _h(this, Qf, {
      writable: true,
      value: new Set()
    });
    _h(this, Ec, {
      writable: true,
      value: []
    });
    _h(this, Rd, {
      writable: true,
      value: []
    });
    _h(this, cd, {
      writable: true,
      value: false
    });
    _h(this, wf, {
      writable: true,
      value: false
    });
    Eh(this, wf, m ?? false);
  }
  (function S0(D, A, m) {
    if (A) {
      Vh(D.prototype, A);
    }
    if (m) {
      Vh(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "createObserver",
    value: function () {
      var m = this;
      var T = new vv();
      Zu(this, Qf).add(T);
      T.addLocalHook("unsubscribe", function () {
        Zu(m, Qf).delete(T);
      });
      T._writeInitialChanges(yv(Zu(this, Ec), Zu(this, Rd)));
      return T;
    }
  }, {
    key: "emit",
    value: function (m) {
      var T = Zu(this, Rd);
      if (!Zu(this, cd) || Zu(this, Ec).length !== m.length) {
        if (m.length === 0) {
          m = new Array(T.length).fill(Zu(this, wf));
        } else {
          Eh(this, Ec, new Array(m.length).fill(Zu(this, wf)));
        }
        if (!Zu(this, cd)) {
          Eh(this, cd, true);
          T = Zu(this, Ec);
        }
      }
      var te = yv(T, m);
      Zu(this, Qf).forEach(function (Se) {
        return Se._write(te);
      });
      Eh(this, Rd, m);
    }
  }]);
  return D;
}();
function Df(D) {
  return function zd(D) {
    if (Array.isArray(D)) {
      return Ev(D);
    }
  }(D) || function Jf(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || function Tf(D, A) {
    if (D) {
      if (typeof D == "string") {
        return Ev(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return Ev(D, A);
      }
    }
  }(D) || function bh() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ev(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function dm(D, A) {
  A ||= D.slice(0);
  return Object.freeze(Object.defineProperties(D, {
    raw: {
      value: Object.freeze(A)
    }
  }));
}
function og(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var bv = new Set(["getFirstNotHiddenIndex"]);
var $f = function () {
  function D() {
    var A = this;
    (function dy(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.indexesSequence = new sv();
    this.trimmingMapsCollection = new bp(function (m) {
      return m.some(function (T) {
        return T === true;
      });
    }, false);
    this.hidingMapsCollection = new bp(function (m) {
      return m.some(function (T) {
        return T === true;
      });
    }, false);
    this.variousMapsCollection = new Xr();
    this.hidingChangesObservable = new Sf({
      initialIndexValue: false
    });
    this.notTrimmedIndexesCache = [];
    this.notHiddenIndexesCache = [];
    this.isBatched = false;
    this.indexesSequenceChanged = false;
    this.trimmedIndexesChanged = false;
    this.hiddenIndexesChanged = false;
    this.renderablePhysicalIndexesCache = [];
    this.fromPhysicalToVisualIndexesCache = new Map();
    this.fromVisualToRenderableIndexesCache = new Map();
    this.indexesSequence.addLocalHook("change", function () {
      A.indexesSequenceChanged = true;
      A.updateCache();
      A.runLocalHooks("change", A.indexesSequence, null);
    });
    this.trimmingMapsCollection.addLocalHook("change", function (m) {
      A.trimmedIndexesChanged = true;
      A.updateCache();
      A.runLocalHooks("change", m, A.trimmingMapsCollection);
    });
    this.hidingMapsCollection.addLocalHook("change", function (m) {
      A.hiddenIndexesChanged = true;
      A.updateCache();
      A.runLocalHooks("change", m, A.hidingMapsCollection);
    });
    this.variousMapsCollection.addLocalHook("change", function (m) {
      A.runLocalHooks("change", m, A.variousMapsCollection);
    });
  }
  (function fm(D, A, m) {
    if (A) {
      og(D.prototype, A);
    }
    if (m) {
      og(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "suspendOperations",
    value: function () {
      this.isBatched = true;
    }
  }, {
    key: "resumeOperations",
    value: function () {
      this.isBatched = false;
      this.updateCache();
    }
  }, {
    key: "createChangesObserver",
    value: function (m) {
      if (m !== "hiding") {
        throw new Error(`Unsupported index map type "${m}".`);
      }
      return this.hidingChangesObservable.createObserver();
    }
  }, {
    key: "createAndRegisterIndexMap",
    value: function (m, T, te) {
      return this.registerMap(m, function kh(D) {
        var A = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!hv.has(D)) {
          throw new Error(`The provided map type ("${D}") does not exist.`);
        }
        return new (hv.get(D))(A);
      }(T, te));
    }
  }, {
    key: "registerMap",
    value: function (m, T) {
      if (this.trimmingMapsCollection.get(m) || this.hidingMapsCollection.get(m) || this.variousMapsCollection.get(m)) {
        throw Error(`Map with name "${m}" has been already registered.`);
      }
      if (T instanceof xf) {
        this.trimmingMapsCollection.register(m, T);
      } else if (T instanceof $p) {
        this.hidingMapsCollection.register(m, T);
      } else {
        this.variousMapsCollection.register(m, T);
      }
      var te = this.getNumberOfIndexes();
      if (te > 0) {
        T.init(te);
      }
      return T;
    }
  }, {
    key: "unregisterMap",
    value: function (m) {
      this.trimmingMapsCollection.unregister(m);
      this.hidingMapsCollection.unregister(m);
      this.variousMapsCollection.unregister(m);
    }
  }, {
    key: "unregisterAll",
    value: function () {
      this.trimmingMapsCollection.unregisterAll();
      this.hidingMapsCollection.unregisterAll();
      this.variousMapsCollection.unregisterAll();
    }
  }, {
    key: "getPhysicalFromVisualIndex",
    value: function (m) {
      var T = this.notTrimmedIndexesCache[m];
      if ((0, re.$K)(T)) {
        return T;
      } else {
        return null;
      }
    }
  }, {
    key: "getPhysicalFromRenderableIndex",
    value: function (m) {
      var T = this.renderablePhysicalIndexesCache[m];
      if ((0, re.$K)(T)) {
        return T;
      } else {
        return null;
      }
    }
  }, {
    key: "getVisualFromPhysicalIndex",
    value: function (m) {
      var T = this.fromPhysicalToVisualIndexesCache.get(m);
      if ((0, re.$K)(T)) {
        return T;
      } else {
        return null;
      }
    }
  }, {
    key: "getVisualFromRenderableIndex",
    value: function (m) {
      return this.getVisualFromPhysicalIndex(this.getPhysicalFromRenderableIndex(m));
    }
  }, {
    key: "getRenderableFromVisualIndex",
    value: function (m) {
      var T = this.fromVisualToRenderableIndexesCache.get(m);
      if ((0, re.$K)(T)) {
        return T;
      } else {
        return null;
      }
    }
  }, {
    key: "getFirstNotHiddenIndex",
    value: function (m, T) {
      var te = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      var Se = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : m - T;
      if (bv.has("getFirstNotHiddenIndex")) {
        bv.delete("getFirstNotHiddenIndex");
        (0, Ge.ZK)((0, Ue.e)(sg ||= dm(["The method \"getFirstNotHiddenIndex\" is deprecated and will be removed in the next \n                        major release. Please use \"getNearestNotHiddenIndex\" instead."], ["The method \"getFirstNotHiddenIndex\" is deprecated and will be removed in the next\\x20\n                        major release. Please use \"getNearestNotHiddenIndex\" instead."])));
      }
      var ge = this.getPhysicalFromVisualIndex(m);
      if (ge === null) {
        if (te === true && Se !== m - T) {
          return this.getFirstNotHiddenIndex(Se, -T, false, Se);
        } else {
          return null;
        }
      } else if (this.isHidden(ge) === false) {
        return m;
      } else {
        return this.getFirstNotHiddenIndex(m + T, T, te, Se);
      }
    }
  }, {
    key: "getNearestNotHiddenIndex",
    value: function (m, T) {
      var te = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      var Se = this.getPhysicalFromVisualIndex(m);
      if (Se === null) {
        return null;
      }
      if (this.fromVisualToRenderableIndexesCache.has(m)) {
        return m;
      }
      var ge = Array.from(this.fromVisualToRenderableIndexesCache.keys());
      var Dt = -1;
      if ((Dt = T > 0 ? ge.findIndex(function (en) {
        return en > m;
      }) : ge.reverse().findIndex(function (en) {
        return en < m;
      })) === -1) {
        if (te) {
          return this.getNearestNotHiddenIndex(m, -T, false);
        } else {
          return null;
        }
      } else {
        return ge[Dt];
      }
    }
  }, {
    key: "initToLength",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getNumberOfIndexes();
      this.notTrimmedIndexesCache = Df(new Array(m).keys());
      this.notHiddenIndexesCache = Df(new Array(m).keys());
      this.suspendOperations();
      this.indexesSequence.init(m);
      this.trimmingMapsCollection.initEvery(m);
      this.resumeOperations();
      this.suspendOperations();
      this.hidingMapsCollection.initEvery(m);
      this.variousMapsCollection.initEvery(m);
      this.resumeOperations();
      this.runLocalHooks("init");
    }
  }, {
    key: "fitToLength",
    value: function (m) {
      var T = this.getNumberOfIndexes();
      if (m < T) {
        var te = Df(Array(this.getNumberOfIndexes() - m).keys()).map(function (Se) {
          return Se + m;
        });
        this.removeIndexes(te);
      } else {
        this.insertIndexes(T, m - T);
      }
    }
  }, {
    key: "getIndexesSequence",
    value: function () {
      return this.indexesSequence.getValues();
    }
  }, {
    key: "setIndexesSequence",
    value: function (m) {
      this.indexesSequence.setValues(m);
    }
  }, {
    key: "getNotTrimmedIndexes",
    value: function () {
      var m = this;
      var T = arguments.length <= 0 || arguments[0] === undefined || arguments[0];
      if (T === true) {
        return this.notTrimmedIndexesCache;
      }
      var te = this.getIndexesSequence();
      return te.filter(function (Se) {
        return m.isTrimmed(Se) === false;
      });
    }
  }, {
    key: "getNotTrimmedIndexesLength",
    value: function () {
      return this.getNotTrimmedIndexes().length;
    }
  }, {
    key: "getNotHiddenIndexes",
    value: function () {
      var m = this;
      var T = arguments.length <= 0 || arguments[0] === undefined || arguments[0];
      if (T === true) {
        return this.notHiddenIndexesCache;
      }
      var te = this.getIndexesSequence();
      return te.filter(function (Se) {
        return m.isHidden(Se) === false;
      });
    }
  }, {
    key: "getNotHiddenIndexesLength",
    value: function () {
      return this.getNotHiddenIndexes().length;
    }
  }, {
    key: "getRenderableIndexes",
    value: function () {
      var m = this;
      var T = arguments.length <= 0 || arguments[0] === undefined || arguments[0];
      if (T === true) {
        return this.renderablePhysicalIndexesCache;
      }
      var te = this.getNotTrimmedIndexes();
      return te.filter(function (Se) {
        return m.isHidden(Se) === false;
      });
    }
  }, {
    key: "getRenderableIndexesLength",
    value: function () {
      return this.getRenderableIndexes().length;
    }
  }, {
    key: "getNumberOfIndexes",
    value: function () {
      return this.getIndexesSequence().length;
    }
  }, {
    key: "moveIndexes",
    value: function (m, T) {
      var te = this;
      if (typeof m == "number") {
        m = [m];
      }
      var Se = (0, Oe.Sc)(m, function (Vn) {
        return te.getPhysicalFromVisualIndex(Vn);
      });
      var ge = this.getNotTrimmedIndexesLength();
      var Dt = m.length;
      var en = Fh(this.getIndexesSequence(), Se);
      var tn = ge - Dt;
      if (T + Dt < ge) {
        var vn = en.filter(function (Vn) {
          return te.isTrimmed(Vn) === false;
        })[T];
        tn = en.indexOf(vn);
      }
      this.setIndexesSequence(v0(en, tn, Se));
    }
  }, {
    key: "isTrimmed",
    value: function (m) {
      return this.trimmingMapsCollection.getMergedValueAtIndex(m);
    }
  }, {
    key: "isHidden",
    value: function (m) {
      return this.hidingMapsCollection.getMergedValueAtIndex(m);
    }
  }, {
    key: "insertIndexes",
    value: function (m, T) {
      var te = this.getNotTrimmedIndexes()[m];
      var Se = (0, re.$K)(te) ? te : this.getNumberOfIndexes();
      var ge = this.getIndexesSequence().includes(te) ? this.getIndexesSequence().indexOf(te) : this.getNumberOfIndexes();
      var Dt = (0, Oe.Sc)(new Array(T).fill(Se), function (en, tn) {
        return en + tn;
      });
      this.suspendOperations();
      this.indexesSequence.insert(ge, Dt);
      this.trimmingMapsCollection.insertToEvery(ge, Dt);
      this.hidingMapsCollection.insertToEvery(ge, Dt);
      this.variousMapsCollection.insertToEvery(ge, Dt);
      this.resumeOperations();
    }
  }, {
    key: "removeIndexes",
    value: function (m) {
      this.suspendOperations();
      this.indexesSequence.remove(m);
      this.trimmingMapsCollection.removeFromEvery(m);
      this.hidingMapsCollection.removeFromEvery(m);
      this.variousMapsCollection.removeFromEvery(m);
      this.resumeOperations();
    }
  }, {
    key: "updateCache",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var T = this.indexesSequenceChanged || this.trimmedIndexesChanged || this.hiddenIndexesChanged;
      if (m === true || this.isBatched === false && T === true) {
        this.trimmingMapsCollection.updateCache();
        this.hidingMapsCollection.updateCache();
        this.notTrimmedIndexesCache = this.getNotTrimmedIndexes(false);
        this.notHiddenIndexesCache = this.getNotHiddenIndexes(false);
        this.renderablePhysicalIndexesCache = this.getRenderableIndexes(false);
        this.cacheFromPhysicalToVisualIndexes();
        this.cacheFromVisualToRenderableIndexes();
        if (this.hiddenIndexesChanged) {
          this.hidingChangesObservable.emit(this.hidingMapsCollection.getMergedValues());
        }
        this.runLocalHooks("cacheUpdated", {
          indexesSequenceChanged: this.indexesSequenceChanged,
          trimmedIndexesChanged: this.trimmedIndexesChanged,
          hiddenIndexesChanged: this.hiddenIndexesChanged
        });
        this.indexesSequenceChanged = false;
        this.trimmedIndexesChanged = false;
        this.hiddenIndexesChanged = false;
      }
    }
  }, {
    key: "cacheFromPhysicalToVisualIndexes",
    value: function () {
      var m = this.getNotTrimmedIndexesLength();
      this.fromPhysicalToVisualIndexesCache.clear();
      for (var T = 0; T < m; T += 1) {
        var te = this.getPhysicalFromVisualIndex(T);
        this.fromPhysicalToVisualIndexesCache.set(te, T);
      }
    }
  }, {
    key: "cacheFromVisualToRenderableIndexes",
    value: function () {
      var m = this.getRenderableIndexesLength();
      this.fromVisualToRenderableIndexesCache.clear();
      for (var T = 0; T < m; T += 1) {
        var te = this.getPhysicalFromRenderableIndex(T);
        var Se = this.getVisualFromPhysicalIndex(te);
        this.fromVisualToRenderableIndexesCache.set(Se, T);
      }
    }
  }]);
  return D;
}();
(0, rt.jB)($f, jf.Z);
import * as Pu from "36714";
import * as ag from "39824";
import * as Hh from "72536";
require("49337");
var lg = "active-header";
var hm = "area";
var cg = "cell";
var ug = "fill";
var pm = "header";
var gm = "custom-selection";
function Yh(D, A) {
  return function xv(D) {
    if (Array.isArray(D)) {
      return D;
    }
  }(D) || function Av(D, A) {
    var m = D == null ? null : typeof Symbol !== "undefined" && D[Symbol.iterator] || D["@@iterator"];
    if (m != null) {
      var ge;
      var Dt;
      var T = [];
      var te = true;
      var Se = false;
      try {
        for (m = m.call(D); !(te = (ge = m.next()).done) && (T.push(ge.value), !A || T.length !== A); te = true);
      } catch (en) {
        Se = true;
        Dt = en;
      } finally {
        try {
          if (!te && m.return != null) {
            m.return();
          }
        } finally {
          if (Se) {
            throw Dt;
          }
        }
      }
      return T;
    }
  }(D, A) || function mm(D, A) {
    if (D) {
      if (typeof D == "string") {
        return _d(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return _d(D, A);
      }
    }
  }(D, A) || function hy() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function _d(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function Cv(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
require("26833");
require("69600");
const Sv = function () {
  function D(A, m) {
    (function D0(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    if (m) {
      this.eventManager = A.eventManager;
      this.instance = A;
      this.wot = A;
      this.settings = m;
      this.mouseDown = false;
      this.main = null;
      this.top = null;
      this.bottom = null;
      this.start = null;
      this.end = null;
      this.topStyle = null;
      this.bottomStyle = null;
      this.startStyle = null;
      this.endStyle = null;
      this.cornerDefaultStyle = {
        width: "6px",
        height: "6px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#FFF"
      };
      this.cornerCenterPointOffset = -parseInt(this.cornerDefaultStyle.width, 10) / 2;
      this.corner = null;
      this.cornerStyle = null;
      this.createBorders(m);
      this.registerListeners();
    }
  }
  (function wv(D, A, m) {
    if (A) {
      Cv(D.prototype, A);
    }
    if (m) {
      Cv(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "registerListeners",
    value: function () {
      var m = this;
      var T = this.wot.rootDocument.body;
      this.eventManager.addEventListener(T, "mousedown", function () {
        return m.onMouseDown();
      });
      this.eventManager.addEventListener(T, "mouseup", function () {
        return m.onMouseUp();
      });
      for (var te = function (en, tn) {
          m.eventManager.addEventListener(m.main.childNodes[en], "mouseenter", function (Vn) {
            return m.onMouseEnter(Vn, m.main.childNodes[en]);
          });
        }, Se = 0, ge = this.main.childNodes.length; Se < ge; Se++) {
        te(Se);
      }
    }
  }, {
    key: "onMouseDown",
    value: function () {
      this.mouseDown = true;
    }
  }, {
    key: "onMouseUp",
    value: function () {
      this.mouseDown = false;
    }
  }, {
    key: "onMouseEnter",
    value: function (m, T) {
      if (this.mouseDown && this.wot.getSetting("hideBorderOnMouseDownOver")) {
        m.preventDefault();
        (0, Dn.mM)(m);
        var te = this;
        var Se = this.wot.rootDocument.body;
        var ge = T.getBoundingClientRect();
        T.style.display = "none";
        this.eventManager.addEventListener(Se, "mousemove", function en(tn) {
          if (function Dt(tn) {
            if (tn.clientY < Math.floor(ge.top) || tn.clientY > Math.ceil(ge.top + ge.height) || tn.clientX < Math.floor(ge.left) || tn.clientX > Math.ceil(ge.left + ge.width)) {
              return true;
            }
          }(tn)) {
            te.eventManager.removeEventListener(Se, "mousemove", en);
            T.style.display = "block";
          }
        });
      }
    }
  }, {
    key: "createBorders",
    value: function (m) {
      var T = this.wot.rootDocument;
      this.main = T.createElement("div");
      var te = ["top", "start", "bottom", "end", "corner"];
      var Se = this.main.style;
      Se.position = "absolute";
      Se.top = 0;
      Se.left = 0;
      for (var ge = 0; ge < 5; ge++) {
        var Dt = te[ge];
        var en = T.createElement("div");
        en.className = `wtBorder ${this.settings.className || ""}`;
        if (this.settings[Dt] && this.settings[Dt].hide) {
          en.className += " hidden";
        }
        (Se = en.style).backgroundColor = this.settings[Dt] && this.settings[Dt].color ? this.settings[Dt].color : m.border.color;
        Se.height = `${this.settings[Dt] && this.settings[Dt].width ? this.settings[Dt].width : m.border.width}px`;
        Se.width = `${this.settings[Dt] && this.settings[Dt].width ? this.settings[Dt].width : m.border.width}px`;
        this.main.appendChild(en);
      }
      this.top = this.main.childNodes[0];
      this.start = this.main.childNodes[1];
      this.bottom = this.main.childNodes[2];
      this.end = this.main.childNodes[3];
      this.topStyle = this.top.style;
      this.startStyle = this.start.style;
      this.bottomStyle = this.bottom.style;
      this.endStyle = this.end.style;
      this.corner = this.main.childNodes[4];
      this.corner.className += " corner";
      this.cornerStyle = this.corner.style;
      this.cornerStyle.width = this.cornerDefaultStyle.width;
      this.cornerStyle.height = this.cornerDefaultStyle.height;
      this.cornerStyle.border = [this.cornerDefaultStyle.borderWidth, this.cornerDefaultStyle.borderStyle, this.cornerDefaultStyle.borderColor].join(" ");
      if ((0, Re.K1)()) {
        this.createMultipleSelectorHandles();
      }
      this.disappear();
      var tn = this.wot.wtTable;
      var vn = tn.bordersHolder;
      if (!vn) {
        (vn = T.createElement("div")).className = "htBorders";
        tn.bordersHolder = vn;
        tn.spreader.appendChild(vn);
      }
      vn.appendChild(this.main);
    }
  }, {
    key: "createMultipleSelectorHandles",
    value: function () {
      var m = this;
      var T = this.wot.rootDocument;
      this.selectionHandles = {
        top: T.createElement("DIV"),
        topHitArea: T.createElement("DIV"),
        bottom: T.createElement("DIV"),
        bottomHitArea: T.createElement("DIV")
      };
      this.selectionHandles.top.className = "topSelectionHandle topLeftSelectionHandle";
      this.selectionHandles.topHitArea.className = "topSelectionHandle-HitArea topLeftSelectionHandle-HitArea";
      this.selectionHandles.bottom.className = "bottomSelectionHandle bottomRightSelectionHandle";
      this.selectionHandles.bottomHitArea.className = "bottomSelectionHandle-HitArea bottomRightSelectionHandle-HitArea";
      this.selectionHandles.styles = {
        top: this.selectionHandles.top.style,
        topHitArea: this.selectionHandles.topHitArea.style,
        bottom: this.selectionHandles.bottom.style,
        bottomHitArea: this.selectionHandles.bottomHitArea.style
      };
      var ge = {
        position: "absolute",
        height: `${40}px`,
        width: `${40}px`,
        "border-radius": `${parseInt(40 / 1.5, 10)}px`
      };
      (0, rt._l)(ge, function (en, tn) {
        m.selectionHandles.styles.bottomHitArea[tn] = en;
        m.selectionHandles.styles.topHitArea[tn] = en;
      });
      var Dt = {
        position: "absolute",
        height: `${10}px`,
        width: `${10}px`,
        "border-radius": `${parseInt(10 / 1.5, 10)}px`,
        background: "#F5F5FF",
        border: "1px solid #4285c8"
      };
      (0, rt._l)(Dt, function (en, tn) {
        m.selectionHandles.styles.bottom[tn] = en;
        m.selectionHandles.styles.top[tn] = en;
      });
      this.main.appendChild(this.selectionHandles.top);
      this.main.appendChild(this.selectionHandles.bottom);
      this.main.appendChild(this.selectionHandles.topHitArea);
      this.main.appendChild(this.selectionHandles.bottomHitArea);
    }
  }, {
    key: "isPartRange",
    value: function (m, T) {
      var te = this.wot.selections.createOrGetArea();
      return !!te.cellRange && (m !== te.cellRange.to.row || T !== te.cellRange.to.col);
    }
  }, {
    key: "updateMultipleSelectionHandlesPosition",
    value: function (m, T, te, Se, ge, Dt) {
      var tn = this.wot.wtSettings.getSetting("rtlMode") ? "right" : "left";
      var vn = this.selectionHandles.styles;
      var Vn = vn.top;
      var Qn = vn.topHitArea;
      var ii = vn.bottom;
      var _i = vn.bottomHitArea;
      var Li = parseInt(Vn.borderWidth, 10);
      var zi = parseInt(Vn.width, 10);
      var us = parseInt(Qn.width, 10);
      var Vo = this.wot.wtTable.getWidth();
      var ba = this.wot.wtTable.getHeight();
      Vn.top = `${parseInt(te - zi - 1, 10)}px`;
      Vn[tn] = `${parseInt(Se - zi - 1, 10)}px`;
      Qn.top = `${parseInt(te - us / 4 * 3, 10)}px`;
      Qn[tn] = `${parseInt(Se - us / 4 * 3, 10)}px`;
      var Co = Math.min(parseInt(Se + ge, 10), Vo - zi - Li * 2);
      var jr = Math.min(parseInt(Se + ge - us / 4, 10), Vo - us - Li * 2);
      ii[tn] = `${Co}px`;
      _i[tn] = `${jr}px`;
      var nc = Math.min(parseInt(te + Dt, 10), ba - zi - Li * 2);
      var _l = Math.min(parseInt(te + Dt - us / 4, 10), ba - us - Li * 2);
      ii.top = `${nc}px`;
      _i.top = `${_l}px`;
      if (this.settings.border.cornerVisible && this.settings.border.cornerVisible()) {
        Vn.display = "block";
        Qn.display = "block";
        if (this.isPartRange(m, T)) {
          ii.display = "none";
          _i.display = "none";
        } else {
          ii.display = "block";
          _i.display = "block";
        }
      } else {
        Vn.display = "none";
        ii.display = "none";
        Qn.display = "none";
        _i.display = "none";
      }
      if (m === this.wot.wtSettings.getSetting("fixedRowsTop") || T === this.wot.wtSettings.getSetting("fixedColumnsStart")) {
        Vn.zIndex = "9999";
        Qn.zIndex = "9999";
      } else {
        Vn.zIndex = "";
        Qn.zIndex = "";
      }
    }
  }, {
    key: "appear",
    value: function (m) {
      if (!this.disabled) {
        for (var Dt, en, tn, vn, Vn, Qn, T = this.wot, te = T.wtTable, Se = T.rootDocument, ge = T.rootWindow, ii = te.getRenderedRowsCount(), _i = 0; _i < ii; _i += 1) {
          var Li = te.rowFilter.renderedToSource(_i);
          if (Li >= m[0] && Li <= m[2]) {
            Dt = Li;
            Vn = m[0];
            break;
          }
        }
        for (var zi = ii - 1; zi >= 0; zi -= 1) {
          var us = te.rowFilter.renderedToSource(zi);
          if (us >= m[0] && us <= m[2]) {
            en = us;
            break;
          }
        }
        for (var Vo = te.getRenderedColumnsCount(), ba = 0; ba < Vo; ba += 1) {
          var Co = te.columnFilter.renderedToSource(ba);
          if (Co >= m[1] && Co <= m[3]) {
            tn = Co;
            Qn = m[1];
            break;
          }
        }
        for (var jr = Vo - 1; jr >= 0; jr -= 1) {
          var nc = te.columnFilter.renderedToSource(jr);
          if (nc >= m[1] && nc <= m[3]) {
            vn = nc;
            break;
          }
        }
        if (Dt === undefined || tn === undefined) {
          this.disappear();
          return;
        }
        var _l = te.getCell(this.wot.createCellCoords(Dt, tn));
        var pc = Dt !== en || tn !== vn;
        var Lu = pc ? te.getCell(this.wot.createCellCoords(en, vn)) : _l;
        var kf = (0, he.cv)(_l);
        var ju = pc ? (0, he.cv)(Lu) : kf;
        var fd = (0, he.cv)(te.TABLE);
        var bc = (0, he.iO)(te.TABLE);
        var fu = kf.top;
        var pf = kf.left;
        var Nu = this.wot.wtSettings.getSetting("rtlMode");
        var Uu = 0;
        var hu = 0;
        if (Nu) {
          var Lp = (0, he.iO)(_l);
          hu = pf + Lp - ju.left;
          Uu = ge.innerWidth - pf - Lp - (ge.innerWidth - fd.left - bc) - 1;
        } else {
          hu = ju.left + (0, he.iO)(Lu) - pf;
          Uu = pf - fd.left - 1;
        }
        if (this.isEntireColumnSelected(Dt, en)) {
          var cn = this.getDimensionsFromHeader("columns", tn, vn, Vn, fd);
          var En = null;
          if (cn) {
            var $n = Yh(cn, 3);
            En = $n[0];
            Uu = $n[1];
            hu = $n[2];
          }
          if (En) {
            _l = En;
          }
        }
        var Ti = fu - fd.top - 1;
        var Wi = ju.top + (0, he.Pb)(Lu) - fu;
        if (this.isEntireRowSelected(tn, vn)) {
          var Sr = this.getDimensionsFromHeader("rows", Dt, en, Qn, fd);
          var xr = null;
          if (Sr) {
            var qr = Yh(Sr, 3);
            xr = qr[0];
            Ti = qr[1];
            Wi = qr[2];
          }
          if (xr) {
            _l = xr;
          }
        }
        var ws = (0, he.Dx)(_l, ge);
        if (parseInt(ws.borderTopWidth, 10) > 0) {
          Ti += 1;
          Wi = Wi > 0 ? Wi - 1 : 0;
        }
        if (parseInt(ws[Nu ? "borderRightWidth" : "borderLeftWidth"], 10) > 0) {
          Uu += 1;
          hu = hu > 0 ? hu - 1 : 0;
        }
        var co = Nu ? "right" : "left";
        this.topStyle.top = `${Ti}px`;
        this.topStyle[co] = `${Uu}px`;
        this.topStyle.width = `${hu}px`;
        this.topStyle.display = "block";
        this.startStyle.top = `${Ti}px`;
        this.startStyle[co] = `${Uu}px`;
        this.startStyle.height = `${Wi}px`;
        this.startStyle.display = "block";
        var Xs = Math.floor(this.settings.border.width / 2);
        this.bottomStyle.top = `${Ti + Wi - Xs}px`;
        this.bottomStyle[co] = `${Uu}px`;
        this.bottomStyle.width = `${hu}px`;
        this.bottomStyle.display = "block";
        this.endStyle.top = `${Ti}px`;
        this.endStyle[co] = `${Uu + hu - Xs}px`;
        this.endStyle.height = `${Wi + 1}px`;
        this.endStyle.display = "block";
        var ka = this.settings.border.cornerVisible;
        ka = typeof ka == "function" ? ka(this.settings.layerLevel) : ka;
        var Fl = this.wot.getSetting("onModifyGetCellCoords", en, vn);
        var ma = en;
        var El = vn;
        if (Fl && Array.isArray(Fl)) {
          var Ac = Yh(Fl, 4);
          ma = Ac[2];
          El = Ac[3];
        }
        if ((0, Re.K1)() || !ka || this.isPartRange(ma, El)) {
          this.cornerStyle.display = "none";
        } else {
          this.cornerStyle.top = `${Ti + Wi + this.cornerCenterPointOffset - 1}px`;
          this.cornerStyle[co] = `${Uu + hu + this.cornerCenterPointOffset - 1}px`;
          this.cornerStyle.borderRightWidth = this.cornerDefaultStyle.borderWidth;
          this.cornerStyle.width = this.cornerDefaultStyle.width;
          this.cornerStyle.display = "none";
          var Ic = (0, he.$g)(te.TABLE);
          var Au = Ic === ge;
          if (Au) {
            Ic = Se.documentElement;
          }
          var hd = parseInt(this.cornerDefaultStyle.width, 10) / 2;
          var pu = parseInt(this.cornerDefaultStyle.height, 10) / 2;
          if (vn === this.wot.getSetting("totalColumns") - 1) {
            var kd = Au ? Lu.getBoundingClientRect().left : Lu.offsetLeft;
            if (Nu ? kd - parseInt(this.cornerDefaultStyle.width, 10) / 2 < 0 : kd + (0, he.iO)(Lu) + parseInt(this.cornerDefaultStyle.width, 10) / 2 >= (0, he.x9)(Ic)) {
              this.cornerStyle[co] = `${Math.floor(Uu + hu + this.cornerCenterPointOffset - hd)}px`;
              this.cornerStyle[Nu ? "borderLeftWidth" : "borderRightWidth"] = 0;
            }
          }
          if (en === this.wot.getSetting("totalRows") - 1 && (Au ? Lu.getBoundingClientRect().top : Lu.offsetTop) + (0, he.Pb)(Lu) + parseInt(this.cornerDefaultStyle.height, 10) / 2 >= (0, he.WS)(Ic)) {
            this.cornerStyle.top = `${Math.floor(Ti + Wi + this.cornerCenterPointOffset - pu)}px`;
            this.cornerStyle.borderBottomWidth = 0;
          }
          this.cornerStyle.display = "block";
        }
        if ((0, Re.K1)()) {
          this.updateMultipleSelectionHandlesPosition(en, vn, Ti, Uu, hu, Wi);
        }
      }
    }
  }, {
    key: "isEntireColumnSelected",
    value: function (m, T) {
      return m === this.wot.wtTable.getFirstRenderedRow() && T === this.wot.wtTable.getLastRenderedRow();
    }
  }, {
    key: "isEntireRowSelected",
    value: function (m, T) {
      return m === this.wot.wtTable.getFirstRenderedColumn() && T === this.wot.wtTable.getLastRenderedColumn();
    }
  }, {
    key: "getDimensionsFromHeader",
    value: function (m, T, te, Se, ge) {
      var Dt = this.wot.wtTable;
      var en = Dt.wtRootElement.parentNode;
      var tn = null;
      var vn = null;
      var Vn = null;
      var Qn = null;
      var ii = null;
      var _i = null;
      var Li = null;
      var zi = null;
      switch (m) {
        case "rows":
          tn = function () {
            return Dt.getRowHeader.apply(Dt, arguments);
          };
          vn = function () {
            return he.Pb.apply(undefined, arguments);
          };
          Vn = "ht__selection--rows";
          _i = "top";
          break;
        case "columns":
          tn = function () {
            return Dt.getColumnHeader.apply(Dt, arguments);
          };
          vn = function () {
            return he.iO.apply(undefined, arguments);
          };
          Vn = "ht__selection--columns";
          _i = "left";
      }
      if (en.classList.contains(Vn)) {
        var us = this.wot.getSetting("columnHeaders").length;
        Li = tn(T, us - Se);
        zi = tn(te, us - Se);
        if (!Li || !zi) {
          return false;
        }
        var Vo = (0, he.cv)(Li);
        var ba = (0, he.cv)(zi);
        if (Li && zi) {
          Qn = Vo[_i] - ge[_i] - 1;
          ii = ba[_i] + vn(zi) - Vo[_i];
        }
        return [Li, Qn, ii];
      }
      return false;
    }
  }, {
    key: "changeBorderStyle",
    value: function (m, T) {
      var te = this[m].style;
      var Se = T[m];
      if (!Se || Se.hide) {
        (0, he.cn)(this[m], "hidden");
      } else {
        if ((0, he.pv)(this[m], "hidden")) {
          (0, he.IV)(this[m], "hidden");
        }
        te.backgroundColor = Se.color;
        if (m === "top" || m === "bottom") {
          te.height = `${Se.width}px`;
        }
        if (m === "start" || m === "end") {
          te.width = `${Se.width}px`;
        }
      }
    }
  }, {
    key: "changeBorderToDefaultStyle",
    value: function (m) {
      var te = this[m].style;
      te.backgroundColor = "#000";
      te.width = `${1}px`;
      te.height = `${1}px`;
    }
  }, {
    key: "toggleHiddenClass",
    value: function (m, T) {
      this.changeBorderToDefaultStyle(m);
      if (T) {
        (0, he.cn)(this[m], "hidden");
      } else {
        (0, he.IV)(this[m], "hidden");
      }
    }
  }, {
    key: "disappear",
    value: function () {
      this.topStyle.display = "none";
      this.bottomStyle.display = "none";
      this.startStyle.display = "none";
      this.endStyle.display = "none";
      this.cornerStyle.display = "none";
      if ((0, Re.K1)()) {
        this.selectionHandles.styles.top.display = "none";
        this.selectionHandles.styles.topHitArea.display = "none";
        this.selectionHandles.styles.bottom.display = "none";
        this.selectionHandles.styles.bottomHitArea.display = "none";
      }
    }
  }, {
    key: "destroy",
    value: function () {
      this.eventManager.destroyWithOwnEventsOnly();
      this.main.parentNode.removeChild(this.main);
    }
  }]);
  return D;
}();
function Ya(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function Zh(D) {
  return (Zh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function vm(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function sf(D) {
  return (sf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function ym(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function Gh() {
  Gh = typeof Reflect !== "undefined" && Reflect.get ? Reflect.get.bind() : function (A, m, T) {
    var te = Gu(A, m);
    if (te) {
      var Se = Object.getOwnPropertyDescriptor(te, m);
      if (Se.get) {
        return Se.get.call(arguments.length < 3 ? A : T);
      } else {
        return Se.value;
      }
    }
  };
  return Gh.apply(this, arguments);
}
function Gu(D, A) {
  for (; !Object.prototype.hasOwnProperty.call(D, A) && (D = Of(D)) !== null;);
  return D;
}
function xp(D, A) {
  return (xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (T, te) {
    T.__proto__ = te;
    return T;
  })(D, A);
}
function gg(D, A) {
  if (A && (sf(A) === "object" || typeof A == "function")) {
    return A;
  }
  if (A !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return Tv(D);
}
function Tv(D) {
  if (D === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return D;
}
function Of(D) {
  return (Of = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(D);
}
const tc = function (D) {
  (function pg(D, A) {
    if (typeof A != "function" && A !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    D.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: D,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(D, "prototype", {
      writable: false
    });
    if (A) {
      xp(D, A);
    }
  })(m, D);
  var A = function _m(D) {
    var A = function Mv() {
      if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch {
        return false;
      }
    }();
    return function () {
      var te;
      var T = Of(D);
      if (A) {
        var Se = Of(this).constructor;
        te = Reflect.construct(T, arguments, Se);
      } else {
        te = T.apply(this, arguments);
      }
      return gg(this, te);
    };
  }(m);
  function m(T, te) {
    var Se;
    (function vy(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, m);
    (function zh(D, A, m) {
      if (A in D) {
        Object.defineProperty(D, A, {
          value: m,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        D[A] = m;
      }
    })(Tv(Se = A.call(this, T, null)), "visualCellRange", null);
    Se.visualCellRange = te || null;
    Se.commit();
    return Se;
  }
  (function Ap(D, A, m) {
    if (A) {
      ym(D.prototype, A);
    }
    if (m) {
      ym(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(m, [{
    key: "add",
    value: function (te) {
      if (this.visualCellRange === null) {
        this.visualCellRange = this.settings.createCellRange(te);
      } else {
        this.visualCellRange.expand(te);
      }
      return this;
    }
  }, {
    key: "clear",
    value: function () {
      this.visualCellRange = null;
      return Gh(Of(m.prototype), "clear", this).call(this);
    }
  }, {
    key: "trimToVisibleCellsRangeOnly",
    value: function (te) {
      var Se = te.from;
      var ge = te.to;
      var Dt = this.getNearestNotHiddenCoords(Se, 1);
      var en = this.getNearestNotHiddenCoords(ge, -1);
      if (Dt === null || en === null) {
        return null;
      }
      if (Dt.row > en.row || Dt.col > en.col) {
        if (this.settings.type !== "header" && this.settings.type !== "active-header") {
          return null;
        }
        Dt = Se;
        en = ge;
      }
      return this.settings.createCellRange(Dt, Dt, en);
    }
  }, {
    key: "getNearestNotHiddenCoords",
    value: function (te, Se) {
      var ge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Se;
      var Dt = this.getNearestNotHiddenIndex(this.settings.rowIndexMapper(), te.row, Se);
      if (Dt === null) {
        return null;
      }
      var en = this.getNearestNotHiddenIndex(this.settings.columnIndexMapper(), te.col, ge);
      if (en === null) {
        return null;
      } else {
        return this.settings.createCellCoords(Dt, en);
      }
    }
  }, {
    key: "getNearestNotHiddenIndex",
    value: function (te, Se, ge) {
      if (Se < 0) {
        return Se;
      }
      var Dt = te.getNearestNotHiddenIndex(Se, ge);
      if (this.settings.type !== "header" && this.settings.type !== "active-header" || Dt !== null) {
        return Dt;
      } else {
        return -1;
      }
    }
  }, {
    key: "commit",
    value: function () {
      if (this.visualCellRange === null) {
        return this;
      }
      var te = this.trimToVisibleCellsRangeOnly(this.visualCellRange);
      this.cellRange = te === null ? null : this.createRenderableCellRange(te.from, te.to);
      return this;
    }
  }, {
    key: "syncWith",
    value: function (te) {
      var Se = te.getVerticalDirection() === "N-S" ? 1 : -1;
      var ge = te.getHorizontalDirection() === "W-E" ? 1 : -1;
      var Dt = this.getNearestNotHiddenCoords(te.from.clone().normalize(), Se, ge);
      if (Dt !== null && te.overlaps(Dt)) {
        if (this.cellRange === null) {
          var en = this.settings.visualToRenderableCoords(Dt);
          this.cellRange = this.settings.createCellRange(en);
        }
        te.setHighlight(Dt);
        return this;
      }
      te.setHighlight(te.from);
      return this;
    }
  }, {
    key: "getCorners",
    value: function () {
      var te = this.cellRange;
      var Se = te.from;
      var ge = te.to;
      var Dt = Se.row === null || ge.row === null;
      var en = Se.col === null || ge.col === null;
      var tn = this.settings.createCellCoords(Dt ? null : Math.min(Se.row, ge.row), en ? null : Math.min(Se.col, ge.col));
      var vn = this.settings.createCellCoords(Dt ? null : Math.max(Se.row, ge.row), en ? null : Math.max(Se.col, ge.col));
      return [tn.row, tn.col, vn.row, vn.col];
    }
  }, {
    key: "getVisualCorners",
    value: function () {
      var te = this.settings.renderableToVisualCoords(this.cellRange.getTopStartCorner());
      var Se = this.settings.renderableToVisualCoords(this.cellRange.getBottomEndCorner());
      return [te.row, te.col, Se.row, Se.col];
    }
  }, {
    key: "createRenderableCellRange",
    value: function (te, Se) {
      var ge = this.settings.visualToRenderableCoords(te);
      var Dt = this.settings.visualToRenderableCoords(Se);
      return this.settings.createCellRange(ge, ge, Dt);
    }
  }]);
  return m;
}(function () {
  function D(A, m) {
    (function my(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.settings = A;
    this.cellRange = m || null;
    this.instanceBorders = {};
    this.classNames = [this.settings.className];
    this.classNameGenerator = this.linearClassNameGenerator(this.settings.className, this.settings.layerLevel);
  }
  (function Dv(D, A, m) {
    if (A) {
      vm(D.prototype, A);
    }
    if (m) {
      vm(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getBorder",
    value: function (m) {
      this.instanceBorders[m.guid] ||= new Sv(m, this.settings);
      return this.instanceBorders[m.guid];
    }
  }, {
    key: "isEmpty",
    value: function () {
      return this.cellRange === null;
    }
  }, {
    key: "add",
    value: function (m) {
      if (this.isEmpty()) {
        this.cellRange = this.settings.createCellRange(m);
      } else {
        this.cellRange.expand(m);
      }
      return this;
    }
  }, {
    key: "replace",
    value: function (m, T) {
      if (!this.isEmpty()) {
        if (this.cellRange.from.isEqual(m)) {
          this.cellRange.from = T;
          return true;
        }
        if (this.cellRange.to.isEqual(m)) {
          this.cellRange.to = T;
          return true;
        }
      }
      return false;
    }
  }, {
    key: "clear",
    value: function () {
      this.cellRange = null;
      return this;
    }
  }, {
    key: "getCorners",
    value: function () {
      var m = this.cellRange.getOuterTopStartCorner();
      var T = this.cellRange.getOuterBottomEndCorner();
      return [m.row, m.col, T.row, T.col];
    }
  }, {
    key: "addClassAtCoords",
    value: function (m, T, te, Se) {
      var ge = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
      var Dt = m.wtTable.getCell(this.settings.createCellCoords(T, te));
      if (Zh(Dt) === "object") {
        var en = Se;
        if (ge) {
          en = this.classNameGenerator(Dt);
          if (!this.classNames.includes(en)) {
            this.classNames.push(en);
          }
        }
        (0, he.cn)(Dt, en);
      }
      return this;
    }
  }, {
    key: "linearClassNameGenerator",
    value: function (m, T) {
      return function te(Se) {
        var ge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        if (T === 0 || ge === 0) {
          return m;
        }
        var Dt = ge >= 0 ? ge : T;
        var en = m;
        var tn = (Dt -= 1) == 0 ? m : `${m}-${Dt}`;
        if ((0, he.pv)(Se, tn)) {
          var vn = Dt + 1;
          en = `${m}-${vn}`;
        } else {
          en = te(Se, Dt);
        }
        return en;
      };
    }
  }, {
    key: "draw",
    value: function (m) {
      if (this.isEmpty()) {
        if (this.settings.border) {
          this.getBorder(m).disappear();
        }
      } else {
        var T = m.wtTable.getRenderedRowsCount();
        var te = m.wtTable.getRenderedColumnsCount();
        var Se = this.getCorners();
        var ge = function py(D, A) {
          return function Mf(D) {
            if (Array.isArray(D)) {
              return D;
            }
          }(D) || function fg(D, A) {
            var m = D == null ? null : typeof Symbol !== "undefined" && D[Symbol.iterator] || D["@@iterator"];
            if (m != null) {
              var ge;
              var Dt;
              var T = [];
              var te = true;
              var Se = false;
              try {
                for (m = m.call(D); !(te = (ge = m.next()).done) && (T.push(ge.value), !A || T.length !== A); te = true);
              } catch (en) {
                Se = true;
                Dt = en;
              } finally {
                try {
                  if (!te && m.return != null) {
                    m.return();
                  }
                } finally {
                  if (Se) {
                    throw Dt;
                  }
                }
              }
              return T;
            }
          }(D, A) || function gy(D, A) {
            if (D) {
              if (typeof D == "string") {
                return Ya(D, A);
              }
              var m = Object.prototype.toString.call(D).slice(8, -1);
              if (m === "Object" && D.constructor) {
                m = D.constructor.name;
              }
              if (m === "Map" || m === "Set") {
                return Array.from(D);
              }
              if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
                return Ya(D, A);
              }
            }
          }(D, A) || function T0() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(Se, 4);
        var Dt = ge[0];
        var en = ge[1];
        var tn = ge[2];
        var vn = ge[3];
        var Vn = this.settings;
        var Qn = Vn.highlightHeaderClassName;
        var ii = Vn.highlightColumnClassName;
        var _i = Vn.highlightRowClassName;
        var Li = Vn.highlightOnlyClosestHeader;
        var zi = Vn.selectionType;
        var us = zi === undefined || ["active-header", "header"].includes(zi);
        if (us && en !== null && vn !== null) {
          for (var Vo = 0, ba = 0; ba < te; ba += 1) {
            var Co = m.wtTable.columnFilter.renderedToSource(ba);
            if (Co >= en && Co <= vn) {
              var jr = m.wtTable.getColumnHeaders(Co);
              var nc = jr.length - 1;
              if (Li && jr.length > 1) {
                jr = [jr[nc]];
              }
              for (var _l = 0; _l < jr.length; _l += 1) {
                var pc = [];
                var Lu = jr[_l];
                if (Qn) {
                  pc.push(Qn);
                }
                if (ii) {
                  pc.push(ii);
                }
                var kf = m.getSetting("onBeforeHighlightingColumnHeader", Co, _l = Li ? nc : _l, {
                  selectionType: zi,
                  columnCursor: Vo,
                  selectionWidth: vn - en + 1,
                  classNames: pc
                });
                if (kf !== Co) {
                  Lu = m.wtTable.getColumnHeader(kf, _l);
                }
                (0, he.cn)(Lu, pc);
              }
              Vo += 1;
            }
          }
        }
        if (Dt !== null && tn !== null) {
          for (var ju = 0, fd = 0; fd < T; fd += 1) {
            var bc = m.wtTable.rowFilter.renderedToSource(fd);
            if (us && bc >= Dt && bc <= tn) {
              var fu = m.wtTable.getRowHeaders(bc);
              var pf = fu.length - 1;
              if (Li && fu.length > 1) {
                fu = [fu[pf]];
              }
              for (var Nu = 0; Nu < fu.length; Nu += 1) {
                var Uu = [];
                var hu = fu[Nu];
                if (Qn) {
                  Uu.push(Qn);
                }
                if (_i) {
                  Uu.push(_i);
                }
                var Lp = m.getSetting("onBeforeHighlightingRowHeader", bc, Nu = Li ? pf : Nu, {
                  selectionType: zi,
                  rowCursor: ju,
                  selectionHeight: tn - Dt + 1,
                  classNames: Uu
                });
                if (Lp !== bc) {
                  hu = m.wtTable.getRowHeader(Lp, Nu);
                }
                (0, he.cn)(hu, Uu);
              }
              ju += 1;
            }
            if (en !== null && vn !== null) {
              for (var tp = 0; tp < te; tp += 1) {
                var cn = m.wtTable.columnFilter.renderedToSource(tp);
                if (bc >= Dt && bc <= tn && cn >= en && cn <= vn) {
                  if (this.settings.className) {
                    this.addClassAtCoords(m, bc, cn, this.settings.className, this.settings.markIntersections);
                  }
                } else if (bc >= Dt && bc <= tn) {
                  if (_i) {
                    this.addClassAtCoords(m, bc, cn, _i);
                  }
                } else if (cn >= en && cn <= vn && ii) {
                  this.addClassAtCoords(m, bc, cn, ii);
                }
                var En = m.getSetting("onAfterDrawSelection", bc, cn, this.settings.layerLevel);
                if (typeof En == "string") {
                  this.addClassAtCoords(m, bc, cn, En);
                }
              }
            }
          }
        }
        m.getSetting("onBeforeDrawBorders", Se, this.settings.className);
        if (this.settings.border) {
          this.getBorder(m).appear(Se);
        }
      }
    }
  }, {
    key: "destroy",
    value: function () {
      Object.values(this.instanceBorders).forEach(function (m) {
        return m.destroy();
      });
    }
  }]);
  return D;
}());
var uu = ["activeHeaderClassName"];
function Kh(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function yy(D) {
  for (var A = 1; A < arguments.length; A++) {
    var m = arguments[A] ?? {};
    if (A % 2) {
      Kh(Object(m), true).forEach(function (T) {
        _y(D, T, m[T]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
    } else {
      Kh(Object(m)).forEach(function (T) {
        Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
      });
    }
  }
  return D;
}
function _y(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var jh = ["layerLevel", "areaCornerVisible"];
function Xf(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function Am(D) {
  for (var A = 1; A < arguments.length; A++) {
    var m = arguments[A] ?? {};
    if (A % 2) {
      Xf(Object(m), true).forEach(function (T) {
        af(D, T, m[T]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
    } else {
      Xf(Object(m)).forEach(function (T) {
        Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
      });
    }
  }
  return D;
}
function af(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var Pf = ["cellCornerVisible"];
function Ey(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function xh(D) {
  for (var A = 1; A < arguments.length; A++) {
    var m = arguments[A] ?? {};
    if (A % 2) {
      Ey(Object(m), true).forEach(function (T) {
        If(D, T, m[T]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
    } else {
      Ey(Object(m)).forEach(function (T) {
        Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
      });
    }
  }
  return D;
}
function If(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var Ch = ["border", "visualCellRange"];
function Kd(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function Cp(D) {
  for (var A = 1; A < arguments.length; A++) {
    var m = arguments[A] ?? {};
    if (A % 2) {
      Kd(Object(m), true).forEach(function (T) {
        kv(D, T, m[T]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
    } else {
      Kd(Object(m)).forEach(function (T) {
        Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
      });
    }
  }
  return D;
}
function kv(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
function P0(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function Lv(D) {
  for (var A = 1; A < arguments.length; A++) {
    var m = arguments[A] ?? {};
    if (A % 2) {
      P0(Object(m), true).forEach(function (T) {
        wp(D, T, m[T]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
    } else {
      P0(Object(m)).forEach(function (T) {
        Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
      });
    }
  }
  return D;
}
function wp(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
require("19601");
var _g = ["headerClassName", "rowClassName", "columnClassName"];
function Sm(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function Qh(D) {
  for (var A = 1; A < arguments.length; A++) {
    var m = arguments[A] ?? {};
    if (A % 2) {
      Sm(Object(m), true).forEach(function (T) {
        Dm(D, T, m[T]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
    } else {
      Sm(Object(m)).forEach(function (T) {
        Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
      });
    }
  }
  return D;
}
function Dm(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
function g(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function $e(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
var Ht = (0, Wh.Z)("highlight/types");
var _n = Ht.register;
var Un = Ht.getItem;
function ui(D, A) {
  return Un(D)(function ie(D) {
    for (var A = 1; A < arguments.length; A++) {
      var m = arguments[A] ?? {};
      if (A % 2) {
        g(Object(m), true).forEach(function (T) {
          $e(D, T, m[T]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
      } else {
        g(Object(m)).forEach(function (T) {
          Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
        });
      }
    }
    return D;
  }({
    type: D
  }, A));
}
function Vi(D) {
  return function ga(D) {
    if (Array.isArray(D)) {
      return aa(D);
    }
  }(D) || function Ea(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || function Cs(D, A) {
    if (D) {
      if (typeof D == "string") {
        return aa(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return aa(D, A);
      }
    }
  }(D) || function Wr() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function aa(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function Ma(D, A) {
  var m = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(D);
    if (A) {
      T = T.filter(function (te) {
        return Object.getOwnPropertyDescriptor(D, te).enumerable;
      });
    }
    m.push.apply(m, T);
  }
  return m;
}
function Tl(D) {
  for (var A = 1; A < arguments.length; A++) {
    var m = arguments[A] ?? {};
    if (A % 2) {
      Ma(Object(m), true).forEach(function (T) {
        fc(D, T, m[T]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(D, Object.getOwnPropertyDescriptors(m));
    } else {
      Ma(Object(m)).forEach(function (T) {
        Object.defineProperty(D, T, Object.getOwnPropertyDescriptor(m, T));
      });
    }
  }
  return D;
}
function fc(D, A, m) {
  if (A in D) {
    Object.defineProperty(D, A, {
      value: m,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    D[A] = m;
  }
  return D;
}
function hc(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
_n(lg, function Pv(D) {
  var A = D.activeHeaderClassName;
  var m = function bm(D, A) {
    if (D == null) {
      return {};
    }
    var T;
    var te;
    var m = function Ov(D, A) {
      if (D == null) {
        return {};
      }
      var te;
      var Se;
      var m = {};
      var T = Object.keys(D);
      for (Se = 0; Se < T.length; Se++) {
        if (A.indexOf(te = T[Se]) < 0) {
          m[te] = D[te];
        }
      }
      return m;
    }(D, A);
    if (Object.getOwnPropertySymbols) {
      var Se = Object.getOwnPropertySymbols(D);
      for (te = 0; te < Se.length; te++) {
        if (A.indexOf(T = Se[te]) < 0) {
          if (!!Object.prototype.propertyIsEnumerable.call(D, T)) {
            m[T] = D[T];
          }
        }
      }
    }
    return m;
  }(D, uu);
  return new tc(yy(yy({
    highlightHeaderClassName: A
  }, m), {}, {
    selectionType: lg
  }));
});
_n(hm, function qf(D) {
  var A = D.layerLevel;
  var m = D.areaCornerVisible;
  var T = function Rv(D, A) {
    if (D == null) {
      return {};
    }
    var T;
    var te;
    var m = function M0(D, A) {
      if (D == null) {
        return {};
      }
      var te;
      var Se;
      var m = {};
      var T = Object.keys(D);
      for (Se = 0; Se < T.length; Se++) {
        if (A.indexOf(te = T[Se]) < 0) {
          m[te] = D[te];
        }
      }
      return m;
    }(D, A);
    if (Object.getOwnPropertySymbols) {
      var Se = Object.getOwnPropertySymbols(D);
      for (te = 0; te < Se.length; te++) {
        if (A.indexOf(T = Se[te]) < 0) {
          if (!!Object.prototype.propertyIsEnumerable.call(D, T)) {
            m[T] = D[T];
          }
        }
      }
    }
    return m;
  }(D, jh);
  return new tc(Am(Am({
    className: "area",
    markIntersections: true,
    layerLevel: Math.min(A, 7),
    border: {
      width: 1,
      color: "#4b89ff",
      cornerVisible: m
    }
  }, T), {}, {
    selectionType: hm
  }));
});
_n(cg, function mg(D) {
  var A = D.cellCornerVisible;
  var m = function xm(D, A) {
    if (D == null) {
      return {};
    }
    var T;
    var te;
    var m = function lf(D, A) {
      if (D == null) {
        return {};
      }
      var te;
      var Se;
      var m = {};
      var T = Object.keys(D);
      for (Se = 0; Se < T.length; Se++) {
        if (A.indexOf(te = T[Se]) < 0) {
          m[te] = D[te];
        }
      }
      return m;
    }(D, A);
    if (Object.getOwnPropertySymbols) {
      var Se = Object.getOwnPropertySymbols(D);
      for (te = 0; te < Se.length; te++) {
        if (A.indexOf(T = Se[te]) < 0) {
          if (!!Object.prototype.propertyIsEnumerable.call(D, T)) {
            m[T] = D[T];
          }
        }
      }
    }
    return m;
  }(D, Pf);
  return new tc(xh(xh({
    className: "current",
    border: {
      width: 2,
      color: "#4b89ff",
      cornerVisible: A
    }
  }, m), {}, {
    selectionType: cg
  }));
});
_n(gm, function vg(D) {
  var A = D.border;
  var m = D.visualCellRange;
  var T = function Rf(D, A) {
    if (D == null) {
      return {};
    }
    var T;
    var te;
    var m = function eh(D, A) {
      if (D == null) {
        return {};
      }
      var te;
      var Se;
      var m = {};
      var T = Object.keys(D);
      for (Se = 0; Se < T.length; Se++) {
        if (A.indexOf(te = T[Se]) < 0) {
          m[te] = D[te];
        }
      }
      return m;
    }(D, A);
    if (Object.getOwnPropertySymbols) {
      var Se = Object.getOwnPropertySymbols(D);
      for (te = 0; te < Se.length; te++) {
        if (A.indexOf(T = Se[te]) < 0) {
          if (!!Object.prototype.propertyIsEnumerable.call(D, T)) {
            m[T] = D[T];
          }
        }
      }
    }
    return m;
  }(D, Ch);
  return new tc(Cp(Cp(Cp({}, A), T), {}, {
    selectionType: gm
  }), m);
});
_n(ug, function yg(D) {
  var A = Object.assign({}, (function Cm(D) {
    if (D == null) {
      throw new TypeError("Cannot destructure " + D);
    }
  }(D), D));
  return new tc(Lv(Lv({
    className: "fill",
    border: {
      width: 1,
      color: "#ff0000"
    }
  }, A), {}, {
    selectionType: ug
  }));
});
_n(pm, function H(D) {
  var A = D.headerClassName;
  var m = D.rowClassName;
  var T = D.columnClassName;
  var te = function Eg(D, A) {
    if (D == null) {
      return {};
    }
    var T;
    var te;
    var m = function Sp(D, A) {
      if (D == null) {
        return {};
      }
      var te;
      var Se;
      var m = {};
      var T = Object.keys(D);
      for (Se = 0; Se < T.length; Se++) {
        if (A.indexOf(te = T[Se]) < 0) {
          m[te] = D[te];
        }
      }
      return m;
    }(D, A);
    if (Object.getOwnPropertySymbols) {
      var Se = Object.getOwnPropertySymbols(D);
      for (te = 0; te < Se.length; te++) {
        if (A.indexOf(T = Se[te]) < 0) {
          if (!!Object.prototype.propertyIsEnumerable.call(D, T)) {
            m[T] = D[T];
          }
        }
      }
    }
    return m;
  }(D, _g);
  return new tc(Qh(Qh({
    className: "highlight",
    highlightHeaderClassName: A,
    highlightRowClassName: m,
    highlightColumnClassName: T
  }, te), {}, {
    highlightOnlyClosestHeader: true,
    selectionType: pm
  }));
});
const cf = function (D) {
  function A(m) {
    (function Iu(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, A);
    this.options = m;
    this.layerLevel = 0;
    this.cell = ui(cg, m);
    this.fill = ui(ug, m);
    this.areas = new Map();
    this.headers = new Map();
    this.activeHeaders = new Map();
    this.customSelections = [];
  }
  (function qc(D, A, m) {
    if (A) {
      hc(D.prototype, A);
    }
    if (m) {
      hc(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(A, [{
    key: "isEnabledFor",
    value: function (T, te) {
      var Se = T;
      if (T === cg) {
        Se = "current";
      }
      var ge = this.options.disabledCellSelection(te.row, te.col);
      if (typeof ge == "string") {
        ge = [ge];
      }
      return ge === false || Array.isArray(ge) && !ge.includes(Se);
    }
  }, {
    key: "useLayerLevel",
    value: function () {
      var T = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.layerLevel = T;
      return this;
    }
  }, {
    key: "getCell",
    value: function () {
      return this.cell;
    }
  }, {
    key: "getFill",
    value: function () {
      return this.fill;
    }
  }, {
    key: "createOrGetArea",
    value: function () {
      var te;
      var T = this.layerLevel;
      if (this.areas.has(T)) {
        te = this.areas.get(T);
      } else {
        te = ui(hm, Tl({
          layerLevel: T
        }, this.options));
        this.areas.set(T, te);
      }
      return te;
    }
  }, {
    key: "getAreas",
    value: function () {
      return Vi(this.areas.values());
    }
  }, {
    key: "createOrGetHeader",
    value: function () {
      var te;
      var T = this.layerLevel;
      if (this.headers.has(T)) {
        te = this.headers.get(T);
      } else {
        te = ui(pm, Tl({}, this.options));
        this.headers.set(T, te);
      }
      return te;
    }
  }, {
    key: "getHeaders",
    value: function () {
      return Vi(this.headers.values());
    }
  }, {
    key: "createOrGetActiveHeader",
    value: function () {
      var te;
      var T = this.layerLevel;
      if (this.activeHeaders.has(T)) {
        te = this.activeHeaders.get(T);
      } else {
        te = ui(lg, Tl({}, this.options));
        this.activeHeaders.set(T, te);
      }
      return te;
    }
  }, {
    key: "getActiveHeaders",
    value: function () {
      return Vi(this.activeHeaders.values());
    }
  }, {
    key: "getCustomSelections",
    value: function () {
      return Vi(this.customSelections.values());
    }
  }, {
    key: "addCustomSelection",
    value: function (T) {
      this.customSelections.push(ui(gm, Tl(Tl({}, this.options), T)));
    }
  }, {
    key: "clear",
    value: function () {
      this.cell.clear();
      this.fill.clear();
      (0, Oe.Bk)(this.areas.values(), function (T) {
        T.clear();
      });
      (0, Oe.Bk)(this.headers.values(), function (T) {
        T.clear();
      });
      (0, Oe.Bk)(this.activeHeaders.values(), function (T) {
        T.clear();
      });
    }
  }, {
    key: Symbol.iterator,
    value: function () {
      return [this.cell, this.fill].concat(Vi(this.areas.values()), Vi(this.headers.values()), Vi(this.activeHeaders.values()), Vi(this.customSelections))[Symbol.iterator]();
    }
  }]);
  return A;
}();
function bd(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
const Fd = function (D) {
  function A(m) {
    (function Ru(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, A);
    this.ranges = [];
    this.createCellRange = m;
  }
  (function Jh(D, A, m) {
    if (A) {
      bd(D.prototype, A);
    }
    if (m) {
      bd(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(A, [{
    key: "isEmpty",
    value: function () {
      return this.size() === 0;
    }
  }, {
    key: "set",
    value: function (T) {
      this.clear();
      this.ranges.push(this.createCellRange(T));
      return this;
    }
  }, {
    key: "add",
    value: function (T) {
      this.ranges.push(this.createCellRange(T));
      return this;
    }
  }, {
    key: "pop",
    value: function () {
      this.ranges.pop();
      return this;
    }
  }, {
    key: "current",
    value: function () {
      return this.peekByIndex(0);
    }
  }, {
    key: "previous",
    value: function () {
      return this.peekByIndex(-1);
    }
  }, {
    key: "includes",
    value: function (T) {
      return this.ranges.some(function (te) {
        return te.includes(T);
      });
    }
  }, {
    key: "clear",
    value: function () {
      this.ranges.length = 0;
      return this;
    }
  }, {
    key: "size",
    value: function () {
      return this.ranges.length;
    }
  }, {
    key: "peekByIndex",
    value: function () {
      var Se;
      var T = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var te = this.size() + T - 1;
      if (te >= 0) {
        Se = this.ranges[te];
      }
      return Se;
    }
  }, {
    key: Symbol.iterator,
    value: function () {
      return this.ranges[Symbol.iterator]();
    }
  }]);
  return A;
}();
function $h(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var bg = function () {
  function D(A, m) {
    (function Dp(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.range = A;
    this.options = m;
  }
  (function Xh(D, A, m) {
    if (A) {
      $h(D.prototype, A);
    }
    if (m) {
      $h(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "transformStart",
    value: function (m, T) {
      var te = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      var Se = this.options.createCellCoords(m, T);
      var ge = this.range.current().highlight;
      var Dt = this.options.visualToRenderableCoords(ge);
      var en = Dt.row;
      var tn = Dt.col;
      var vn = ge;
      var Vn = 0;
      var Qn = 0;
      this.runLocalHooks("beforeTransformStart", Se);
      if (en !== null && tn !== null) {
        var ii = this.options.countRows();
        var _i = this.options.countCols();
        var Li = this.options.fixedRowsBottom();
        var zi = this.options.minSpareRows();
        var us = this.options.minSpareCols();
        var Vo = this.options.autoWrapRow();
        var ba = this.options.autoWrapCol();
        if (en + m > ii - 1) {
          if (te && zi > 0 && (!Li || en < ii - Li - 1)) {
            this.runLocalHooks("insertRowRequire", ii);
            ii = this.options.countRows();
          } else if (ba) {
            Se.row = 1 - ii;
            Se.col = tn + Se.col === _i - 1 ? 1 - _i : 1;
          }
        } else if (ba && en + Se.row < 0 && tn + Se.col >= 0) {
          Se.row = ii - 1;
          Se.col = tn + Se.col === 0 ? _i - 1 : -1;
        }
        if (tn + Se.col > _i - 1) {
          if (te && us > 0) {
            this.runLocalHooks("insertColRequire", _i);
            _i = this.options.countCols();
          } else if (Vo) {
            Se.row = en + Se.row === ii - 1 ? 1 - ii : 1;
            Se.col = 1 - _i;
          }
        } else if (Vo && tn + Se.col < 0 && en + Se.row >= 0) {
          Se.row = en + Se.row === 0 ? ii - 1 : -1;
          Se.col = _i - 1;
        }
        var Co = this.options.createCellCoords(en + Se.row, tn + Se.col);
        Vn = 0;
        Qn = 0;
        if (Co.row < 0) {
          Vn = -1;
          Co.row = 0;
        } else if (Co.row > 0 && Co.row >= ii) {
          Vn = 1;
          Co.row = ii - 1;
        }
        if (Co.col < 0) {
          Qn = -1;
          Co.col = 0;
        } else if (Co.col > 0 && Co.col >= _i) {
          Qn = 1;
          Co.col = _i - 1;
        }
        vn = this.options.renderableToVisualCoords(Co);
      }
      this.runLocalHooks("afterTransformStart", vn, Vn, Qn);
      return vn;
    }
  }, {
    key: "transformEnd",
    value: function (m, T) {
      var te = this.options.createCellCoords(m, T);
      var Se = this.range.current();
      var ge = Se.to;
      var Dt = 0;
      var en = 0;
      this.runLocalHooks("beforeTransformEnd", te);
      var tn = this.options.visualToRenderableCoords(Se.highlight);
      if (tn.row !== null && tn.col !== null) {
        var Qn = this.options.countRows();
        var ii = this.options.countCols();
        var _i = this.options.visualToRenderableCoords(Se.to);
        var us = this.options.createCellCoords(_i.row + te.row, _i.col + te.col);
        Dt = 0;
        en = 0;
        if (us.row < 0) {
          Dt = -1;
          us.row = 0;
        } else if (us.row > 0 && us.row >= Qn) {
          Dt = 1;
          us.row = Qn - 1;
        }
        if (us.col < 0) {
          en = -1;
          us.col = 0;
        } else if (us.col > 0 && us.col >= ii) {
          en = 1;
          us.col = ii - 1;
        }
        ge = this.options.renderableToVisualCoords(us);
      }
      this.runLocalHooks("afterTransformEnd", ge, Dt, en);
      return ge;
    }
  }]);
  return D;
}();
(0, rt.jB)(bg, jf.Z);
const Oo = bg;
var ia;
import * as mo from "54097";
function il(D, A) {
  return function Pc(D) {
    if (Array.isArray(D)) {
      return D;
    }
  }(D) || function df(D, A) {
    var m = D == null ? null : typeof Symbol !== "undefined" && D[Symbol.iterator] || D["@@iterator"];
    if (m != null) {
      var ge;
      var Dt;
      var T = [];
      var te = true;
      var Se = false;
      try {
        for (m = m.call(D); !(te = (ge = m.next()).done) && (T.push(ge.value), !A || T.length !== A); te = true);
      } catch (en) {
        Se = true;
        Dt = en;
      } finally {
        try {
          if (!te && m.return != null) {
            m.return();
          }
        } finally {
          if (Se) {
            throw Dt;
          }
        }
      }
      return T;
    }
  }(D, A) || function ud(D, A) {
    if (D) {
      if (typeof D == "string") {
        return zu(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return zu(D, A);
      }
    }
  }(D, A) || function Oc() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function zu(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function du(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Fu = function () {
  function D(A, m) {
    var T = this;
    (function Ff(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.settings = A;
    this.tableProps = m;
    this.inProgress = false;
    this.selectedByCorner = false;
    this.selectedByRowHeader = new Set();
    this.selectedByColumnHeader = new Set();
    this.selectedRange = new Fd(function (te, Se, ge) {
      return T.tableProps.createCellRange(te, Se, ge);
    });
    this.highlight = new cf({
      headerClassName: A.currentHeaderClassName,
      activeHeaderClassName: A.activeHeaderClassName,
      rowClassName: A.currentRowClassName,
      columnClassName: A.currentColClassName,
      disabledCellSelection: function (Se, ge) {
        return T.tableProps.isDisabledCellSelection(Se, ge);
      },
      cellCornerVisible: function () {
        return T.isCellCornerVisible.apply(T, arguments);
      },
      areaCornerVisible: function () {
        return T.isAreaCornerVisible.apply(T, arguments);
      },
      visualToRenderableCoords: function (Se) {
        return T.tableProps.visualToRenderableCoords(Se);
      },
      renderableToVisualCoords: function (Se) {
        return T.tableProps.renderableToVisualCoords(Se);
      },
      createCellCoords: function (Se, ge) {
        return T.tableProps.createCellCoords(Se, ge);
      },
      createCellRange: function (Se, ge, Dt) {
        return T.tableProps.createCellRange(Se, ge, Dt);
      },
      rowIndexMapper: function () {
        return T.tableProps.rowIndexMapper();
      },
      columnIndexMapper: function () {
        return T.tableProps.columnIndexMapper();
      }
    });
    this.transformation = new Oo(this.selectedRange, {
      countRows: function () {
        return T.tableProps.countRowsTranslated();
      },
      countCols: function () {
        return T.tableProps.countColsTranslated();
      },
      visualToRenderableCoords: function (Se) {
        return T.tableProps.visualToRenderableCoords(Se);
      },
      renderableToVisualCoords: function (Se) {
        return T.tableProps.renderableToVisualCoords(Se);
      },
      createCellCoords: function (Se, ge) {
        return T.tableProps.createCellCoords(Se, ge);
      },
      fixedRowsBottom: function () {
        return A.fixedRowsBottom;
      },
      minSpareRows: function () {
        return A.minSpareRows;
      },
      minSpareCols: function () {
        return A.minSpareCols;
      },
      autoWrapRow: function () {
        return A.autoWrapRow;
      },
      autoWrapCol: function () {
        return A.autoWrapCol;
      }
    });
    this.transformation.addLocalHook("beforeTransformStart", function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return T.runLocalHooks.apply(T, ["beforeModifyTransformStart"].concat(Se));
    });
    this.transformation.addLocalHook("afterTransformStart", function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return T.runLocalHooks.apply(T, ["afterModifyTransformStart"].concat(Se));
    });
    this.transformation.addLocalHook("beforeTransformEnd", function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return T.runLocalHooks.apply(T, ["beforeModifyTransformEnd"].concat(Se));
    });
    this.transformation.addLocalHook("afterTransformEnd", function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return T.runLocalHooks.apply(T, ["afterModifyTransformEnd"].concat(Se));
    });
    this.transformation.addLocalHook("insertRowRequire", function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return T.runLocalHooks.apply(T, ["insertRowRequire"].concat(Se));
    });
    this.transformation.addLocalHook("insertColRequire", function () {
      for (var te = arguments.length, Se = new Array(te), ge = 0; ge < te; ge++) {
        Se[ge] = arguments[ge];
      }
      return T.runLocalHooks.apply(T, ["insertColRequire"].concat(Se));
    });
  }
  (function Sh(D, A, m) {
    if (A) {
      du(D.prototype, A);
    }
    if (m) {
      du(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getSelectedRange",
    value: function () {
      return this.selectedRange;
    }
  }, {
    key: "begin",
    value: function () {
      this.inProgress = true;
    }
  }, {
    key: "finish",
    value: function () {
      this.runLocalHooks("afterSelectionFinished", Array.from(this.selectedRange));
      this.inProgress = false;
    }
  }, {
    key: "isInProgress",
    value: function () {
      return this.inProgress;
    }
  }, {
    key: "setRangeStart",
    value: function (m, T) {
      var te = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      var Se = this.settings.selectionMode === "multiple";
      var ge = (0, re.o8)(T) ? this.tableProps.getShortcutManager().isCtrlPressed() : T;
      var Dt = m.row < 0;
      var en = m.col < 0;
      var tn = Dt && en;
      var vn = m.clone();
      this.selectedByCorner = tn;
      this.runLocalHooks(`beforeSetRangeStart${te ? "Only" : ""}`, vn);
      if (!Se || Se && !ge && (0, re.o8)(T)) {
        this.selectedRange.clear();
      }
      this.selectedRange.add(vn);
      if (this.getLayerLevel() === 0) {
        this.selectedByRowHeader.clear();
        this.selectedByColumnHeader.clear();
      }
      if (!tn && en) {
        this.selectedByRowHeader.add(this.getLayerLevel());
      }
      if (!tn && Dt) {
        this.selectedByColumnHeader.add(this.getLayerLevel());
      }
      if (!te) {
        this.setRangeEnd(m);
      }
    }
  }, {
    key: "setRangeStartOnly",
    value: function (m, T) {
      this.setRangeStart(m, T, true);
    }
  }, {
    key: "setRangeEnd",
    value: function (m) {
      if (!this.selectedRange.isEmpty()) {
        var T = m.clone();
        this.runLocalHooks("beforeSetRangeEnd", T);
        this.begin();
        var te = this.selectedRange.current();
        if (this.settings.selectionMode !== "single") {
          te.setTo(this.tableProps.createCellCoords(T.row, T.col));
        }
        this.highlight.getCell().clear();
        if (this.highlight.isEnabledFor(cg, te.highlight)) {
          this.highlight.getCell().add(this.selectedRange.current().highlight).commit().syncWith(te);
        }
        var Se = this.getLayerLevel();
        if (Se < this.highlight.layerLevel) {
          (0, Oe.Bk)(this.highlight.getAreas(), function (Li) {
            Li.clear();
          });
          (0, Oe.Bk)(this.highlight.getHeaders(), function (Li) {
            Li.clear();
          });
          (0, Oe.Bk)(this.highlight.getActiveHeaders(), function (Li) {
            Li.clear();
          });
        }
        this.highlight.useLayerLevel(Se);
        var ge = this.highlight.createOrGetArea();
        var Dt = this.highlight.createOrGetHeader();
        var en = this.highlight.createOrGetActiveHeader();
        ge.clear();
        Dt.clear();
        en.clear();
        if (this.highlight.isEnabledFor(hm, te.highlight) && (this.isMultiple() || Se >= 1) && (ge.add(te.from).add(te.to).commit(), Se === 1)) {
          var tn = this.selectedRange.previous();
          this.highlight.useLayerLevel(Se - 1).createOrGetArea().add(tn.from).commit().syncWith(tn);
          this.highlight.useLayerLevel(Se);
        }
        if (this.highlight.isEnabledFor(pm, te.highlight)) {
          var vn = this.tableProps.countRowsTranslated() === 0;
          var Vn = this.tableProps.countColsTranslated() === 0;
          var Qn = te;
          if (vn || Vn) {
            Qn = te.clone();
          }
          if (vn) {
            Qn.from.row = -1;
          }
          if (Vn) {
            Qn.from.col = -1;
          }
          if (this.settings.selectionMode === "single") {
            if (this.isSelectedByAnyHeader()) {
              Qn.from.normalize();
            }
            Dt.add(Qn.from).commit();
          } else {
            Dt.add(Qn.from).add(Qn.to).commit();
          }
          if (this.isEntireRowSelected() && this.tableProps.countCols() === te.getWidth()) {
            en.add(this.tableProps.createCellCoords(te.from.row, -1)).add(this.tableProps.createCellCoords(te.to.row, -1)).commit();
          }
          if (this.isEntireColumnSelected() && this.tableProps.countRows() === te.getHeight()) {
            en.add(this.tableProps.createCellCoords(-1, te.from.col)).add(this.tableProps.createCellCoords(-1, te.to.col)).commit();
          }
        }
        this.runLocalHooks("afterSetRangeEnd", m);
      }
    }
  }, {
    key: "isMultiple",
    value: function () {
      var m = (0, rt.sm)(!this.selectedRange.current().isSingle());
      this.runLocalHooks("afterIsMultipleSelection", m);
      return m.value;
    }
  }, {
    key: "transformStart",
    value: function (m, T) {
      var te = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      this.setRangeStart(this.transformation.transformStart(m, T, te));
    }
  }, {
    key: "transformEnd",
    value: function (m, T) {
      this.setRangeEnd(this.transformation.transformEnd(m, T));
    }
  }, {
    key: "getLayerLevel",
    value: function () {
      return this.selectedRange.size() - 1;
    }
  }, {
    key: "isSelected",
    value: function () {
      return !this.selectedRange.isEmpty();
    }
  }, {
    key: "isSelectedByRowHeader",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLayerLevel();
      return !this.isSelectedByCorner(m) && this.isEntireRowSelected(m);
    }
  }, {
    key: "isEntireRowSelected",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLayerLevel();
      if (m === -1) {
        return this.selectedByRowHeader.size > 0;
      } else {
        return this.selectedByRowHeader.has(m);
      }
    }
  }, {
    key: "isSelectedByColumnHeader",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLayerLevel();
      return !this.isSelectedByCorner() && this.isEntireColumnSelected(m);
    }
  }, {
    key: "isEntireColumnSelected",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLayerLevel();
      if (m === -1) {
        return this.selectedByColumnHeader.size > 0;
      } else {
        return this.selectedByColumnHeader.has(m);
      }
    }
  }, {
    key: "isSelectedByAnyHeader",
    value: function () {
      return this.isSelectedByRowHeader(-1) || this.isSelectedByColumnHeader(-1) || this.isSelectedByCorner();
    }
  }, {
    key: "isSelectedByCorner",
    value: function () {
      return this.selectedByCorner;
    }
  }, {
    key: "inInSelection",
    value: function (m) {
      return this.selectedRange.includes(m);
    }
  }, {
    key: "isCellCornerVisible",
    value: function () {
      return this.settings.fillHandle && !this.tableProps.isEditorOpened() && !this.isMultiple();
    }
  }, {
    key: "isAreaCornerVisible",
    value: function (m) {
      return (!Number.isInteger(m) || m === this.getLayerLevel()) && this.settings.fillHandle && !this.tableProps.isEditorOpened() && this.isMultiple();
    }
  }, {
    key: "clear",
    value: function () {
      this.selectedRange.clear();
      this.highlight.clear();
    }
  }, {
    key: "deselect",
    value: function () {
      if (!!this.isSelected()) {
        this.inProgress = false;
        this.clear();
        this.runLocalHooks("afterDeselect");
      }
    }
  }, {
    key: "selectAll",
    value: function () {
      var m = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var T = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      var te = this.tableProps.countRows();
      var Se = this.tableProps.countCols();
      if (m || T || te !== 0 && Se !== 0) {
        var ge = this.tableProps.createCellCoords(T ? -1 : 0, m ? -1 : 0);
        this.clear();
        this.setRangeStartOnly(ge);
        this.selectedByRowHeader.add(this.getLayerLevel());
        this.selectedByColumnHeader.add(this.getLayerLevel());
        this.setRangeEnd(this.tableProps.createCellCoords(te - 1, Se - 1));
        this.finish();
      }
    }
  }, {
    key: "selectCells",
    value: function (m) {
      var T = this;
      var te = (0, mo.AV)(m);
      if (te === mo.gk) {
        return false;
      }
      if (te === mo.Kk) {
        throw new Error((0, Ue.e)(ia ||= function Nv(D, A) {
          A ||= D.slice(0);
          return Object.freeze(Object.defineProperties(D, {
            raw: {
              value: Object.freeze(A)
            }
          }));
        }(["Unsupported format of the selection ranges was passed. To select cells pass \n        the coordinates as an array of arrays ([[rowStart, columnStart/columnPropStart, rowEnd, \n        columnEnd/columnPropEnd]]) or as an array of CellRange objects."], ["Unsupported format of the selection ranges was passed. To select cells pass\\x20\n        the coordinates as an array of arrays ([[rowStart, columnStart/columnPropStart, rowEnd,\\x20\n        columnEnd/columnPropEnd]]) or as an array of CellRange objects."])));
      }
      var Se = (0, mo.S5)(te, {
        propToCol: function (vn) {
          return T.tableProps.propToCol(vn);
        },
        keepDirection: true
      });
      var ge = this.tableProps.countRows();
      var Dt = this.tableProps.countCols();
      var en = !m.some(function (tn) {
        var Vn = il(Se(tn), 4);
        var ii = Vn[1];
        var _i = Vn[2];
        var Li = Vn[3];
        return !(0, mo.AO)(Vn[0], ge) || !(0, mo.AO)(ii, Dt) || !(0, mo.AO)(_i, ge) || !(0, mo.AO)(Li, Dt);
      });
      if (en) {
        this.clear();
        (0, Oe.Bk)(m, function (tn) {
          var Vn = il(Se(tn), 4);
          var _i = Vn[2];
          var Li = Vn[3];
          T.setRangeStartOnly(T.tableProps.createCellCoords(Vn[0], Vn[1]), false);
          T.setRangeEnd(T.tableProps.createCellCoords(_i, Li));
          T.finish();
        });
      }
      return en;
    }
  }, {
    key: "selectColumns",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m;
      var te = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var Se = typeof m == "string" ? this.tableProps.propToCol(m) : m;
      var ge = typeof T == "string" ? this.tableProps.propToCol(T) : T;
      var Dt = this.tableProps.countCols();
      var en = this.tableProps.countRows();
      var tn = (0, mo.AO)(Se, Dt) && (0, mo.AO)(ge, Dt);
      if (tn) {
        this.setRangeStartOnly(this.tableProps.createCellCoords(te, Se));
        this.setRangeEnd(this.tableProps.createCellCoords(en - 1, ge));
        this.finish();
      }
      return tn;
    }
  }, {
    key: "selectRows",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m;
      var te = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var Se = this.tableProps.countRows();
      var ge = this.tableProps.countCols();
      var Dt = (0, mo.AO)(m, Se) && (0, mo.AO)(T, Se);
      if (Dt) {
        this.setRangeStartOnly(this.tableProps.createCellCoords(m, te));
        this.setRangeEnd(this.tableProps.createCellCoords(T, ge - 1));
        this.finish();
      }
      return Dt;
    }
  }, {
    key: "refresh",
    value: function () {
      this.highlight.getCustomSelections().forEach(function (tn) {
        tn.commit();
      });
      if (this.isSelected()) {
        var T = this.highlight.getCell();
        var te = this.getLayerLevel();
        T.commit().syncWith(this.selectedRange.current());
        for (var Se = 0; Se < this.selectedRange.size(); Se += 1) {
          this.highlight.useLayerLevel(Se);
          var ge = this.highlight.createOrGetArea();
          var Dt = this.highlight.createOrGetHeader();
          var en = this.highlight.createOrGetActiveHeader();
          ge.commit();
          Dt.commit();
          en.commit();
        }
        this.highlight.useLayerLevel(te);
      }
    }
  }]);
  return D;
}();
(0, rt.jB)(Fu, jf.Z);
const Tm = Fu;
function Tp(D, A) {
  var m = typeof D == "string" ? (0, Qm.DA)(D) : D;
  if ((0, rt.Kn)(m)) {
    var T = (0, rt.Kn)(A);
    var te = {};
    (0, rt._l)(m, function (Se, ge) {
      var Dt;
      if (ge !== "CELL_TYPE" && (!T || T && (!(0, rt.nr)(A, ge) || (A == null || (Dt = A._automaticallyAssignedMetaProps) === null || Dt === undefined ? undefined : Dt[ge]) === true))) {
        te[ge] = Se;
        if (A != null && A._automaticallyAssignedMetaProps) {
          A._automaticallyAssignedMetaProps[ge] = true;
        }
      }
    });
    return te;
  }
}
function Mp(D) {
  return Number.isInteger(D) && D >= 0;
}
function I0(D, A) {
  if (!D()) {
    throw new Error(`Assertion failed: ${A}`);
  }
}
function Mm(D) {
  return D == null;
}
function $y(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
function ku(D, A, m) {
  if (A) {
    $y(D.prototype, A);
  }
  if (m) {
    $y(D, m);
  }
  Object.defineProperty(D, "prototype", {
    writable: false
  });
  return D;
}
function Op(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var s1 = function () {
  function D(A) {
    Op(this, D);
    this.metaCtor = function x_() {
      return ku(function D() {
        Op(this, D);
      });
    }();
    this.meta = this.metaCtor.prototype;
    (0, rt.l7)(this.meta, (0, Jy.Z)());
    this.meta.instance = A;
  }
  ku(D, [{
    key: "getMetaConstructor",
    value: function () {
      return this.metaCtor;
    }
  }, {
    key: "getMeta",
    value: function () {
      return this.meta;
    }
  }, {
    key: "updateMeta",
    value: function (m) {
      (0, rt.l7)(this.meta, m);
      (0, rt.l7)(this.meta, Tp(m.type, m));
    }
  }]);
  return D;
}();
function Uv(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Ay = function () {
  function D(A) {
    (function R0(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    var m = A.getMetaConstructor();
    this.meta = new m();
  }
  (function by(D, A, m) {
    if (A) {
      Uv(D.prototype, A);
    }
    if (m) {
      Uv(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getMeta",
    value: function () {
      return this.meta;
    }
  }, {
    key: "updateMeta",
    value: function (m) {
      (0, rt.l7)(this.meta, m);
      (0, rt.l7)(this.meta, Tp(m.type, m));
    }
  }]);
  return D;
}();
function F0(D) {
  return function xg(D) {
    if (Array.isArray(D)) {
      return xy(D);
    }
  }(D) || function qy(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || function k0(D, A) {
    if (D) {
      if (typeof D == "string") {
        return xy(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return xy(D, A);
      }
    }
  }(D) || function Xy() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function xy(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function e_(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var wg = function (D) {
  function A(m) {
    (function Cg(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, A);
    this.valueFactory = m;
    this.data = [];
    this.index = [];
    this.holes = new Set();
  }
  (function t_(D, A, m) {
    if (A) {
      e_(D.prototype, A);
    }
    if (m) {
      e_(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(A, [{
    key: "obtain",
    value: function (T) {
      I0(function () {
        return Mp(T);
      }, "Expecting an unsigned number.");
      var Se;
      var te = this._getStorageIndexByKey(T);
      if (te >= 0) {
        if ((Se = this.data[te]) === undefined) {
          Se = this.valueFactory(T);
          this.data[te] = Se;
        }
      } else {
        Se = this.valueFactory(T);
        if (this.holes.size > 0) {
          var ge = this.holes.values().next().value;
          this.holes.delete(ge);
          this.data[ge] = Se;
          this.index[T] = ge;
        } else {
          this.data.push(Se);
          this.index[T] = this.data.length - 1;
        }
      }
      return Se;
    }
  }, {
    key: "insert",
    value: function (T) {
      var te = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      I0(function () {
        return Mp(T) || Mm(T);
      }, "Expecting an unsigned number or null/undefined argument.");
      for (var Se = [], ge = this.data.length, Dt = 0; Dt < te; Dt++) {
        Se.push(ge + Dt);
        this.data.push(undefined);
      }
      var en = Mm(T) ? this.index.length : T;
      this.index = [].concat(F0(this.index.slice(0, en)), Se, F0(this.index.slice(en)));
    }
  }, {
    key: "remove",
    value: function (T) {
      var te = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      I0(function () {
        return Mp(T) || Mm(T);
      }, "Expecting an unsigned number or null/undefined argument.");
      for (var Se = this.index.splice(Mm(T) ? this.index.length - te : T, te), ge = 0; ge < Se.length; ge++) {
        var Dt = Se[ge];
        if (typeof Dt == "number") {
          this.holes.add(Dt);
        }
      }
    }
  }, {
    key: "size",
    value: function () {
      return this.data.length - this.holes.size;
    }
  }, {
    key: "values",
    value: function () {
      var T = this;
      return (0, Oe.w7)(this.data, function (te, Se) {
        return !T.holes.has(Se);
      })[Symbol.iterator]();
    }
  }, {
    key: "entries",
    value: function () {
      for (var T = [], te = 0; te < this.data.length; te++) {
        var Se = this._getKeyByStorageIndex(te);
        if (Se !== -1) {
          T.push([Se, this.data[te]]);
        }
      }
      var ge = 0;
      return {
        next: function () {
          if (ge < T.length) {
            var en = T[ge];
            ge += 1;
            return {
              value: en,
              done: false
            };
          }
          return {
            done: true
          };
        }
      };
    }
  }, {
    key: "clear",
    value: function () {
      this.data = [];
      this.index = [];
      this.holes.clear();
    }
  }, {
    key: "_getStorageIndexByKey",
    value: function (T) {
      if (this.index.length > T) {
        return this.index[T];
      } else {
        return -1;
      }
    }
  }, {
    key: "_getKeyByStorageIndex",
    value: function (T) {
      return this.index.indexOf(T);
    }
  }, {
    key: Symbol.iterator,
    value: function () {
      return this.entries();
    }
  }]);
  return A;
}();
function L0(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var C_ = ["data", "width"];
var i_ = function () {
  function D(A) {
    var m = this;
    (function Dh(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.globalMeta = A;
    this.metas = new wg(function () {
      return m._createMeta();
    });
  }
  (function n_(D, A, m) {
    if (A) {
      L0(D.prototype, A);
    }
    if (m) {
      L0(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "updateMeta",
    value: function (m, T) {
      var te = this.getMeta(m);
      (0, rt.l7)(te, T);
      (0, rt.l7)(te, Tp(T.type, te));
    }
  }, {
    key: "createColumn",
    value: function (m, T) {
      this.metas.insert(m, T);
    }
  }, {
    key: "removeColumn",
    value: function (m, T) {
      this.metas.remove(m, T);
    }
  }, {
    key: "getMeta",
    value: function (m) {
      return this.metas.obtain(m);
    }
  }, {
    key: "getMetaConstructor",
    value: function (m) {
      return this.metas.obtain(m).constructor;
    }
  }, {
    key: "clearCache",
    value: function () {
      this.metas.clear();
    }
  }, {
    key: "_createMeta",
    value: function () {
      return function Ag(D) {
        var A = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        function m() {}
        (0, rt.ED)(m, D);
        for (var T = 0; T < A.length; T++) {
          m.prototype[A[T]] = undefined;
        }
        return m;
      }(this.globalMeta.getMetaConstructor(), C_).prototype;
    }
  }]);
  return D;
}();
function Cy(D) {
  return function wy(D) {
    if (Array.isArray(D)) {
      return N0(D);
    }
  }(D) || function w_(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || function Bv(D, A) {
    if (D) {
      if (typeof D == "string") {
        return N0(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return N0(D, A);
      }
    }
  }(D) || function Sg() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function N0(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function Om(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var nh = function () {
  function D(A) {
    var m = this;
    (function r_(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.columnMeta = A;
    this.metas = new wg(function () {
      return m._createRow();
    });
  }
  (function eu(D, A, m) {
    if (A) {
      Om(D.prototype, A);
    }
    if (m) {
      Om(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "updateMeta",
    value: function (m, T, te) {
      var Se = this.getMeta(m, T);
      (0, rt.l7)(Se, te);
      (0, rt.l7)(Se, Tp(te.type, Se));
    }
  }, {
    key: "createRow",
    value: function (m, T) {
      this.metas.insert(m, T);
    }
  }, {
    key: "createColumn",
    value: function (m, T) {
      for (var te = 0; te < this.metas.size(); te++) {
        this.metas.obtain(te).insert(m, T);
      }
    }
  }, {
    key: "removeRow",
    value: function (m, T) {
      this.metas.remove(m, T);
    }
  }, {
    key: "removeColumn",
    value: function (m, T) {
      for (var te = 0; te < this.metas.size(); te++) {
        this.metas.obtain(te).remove(m, T);
      }
    }
  }, {
    key: "getMeta",
    value: function (m, T, te) {
      var Se = this.metas.obtain(m).obtain(T);
      if (te === undefined) {
        return Se;
      } else {
        return Se[te];
      }
    }
  }, {
    key: "setMeta",
    value: function (m, T, te, Se) {
      var ge = this.metas.obtain(m).obtain(T);
      ge[te] = Se;
      if (ge._automaticallyAssignedMetaProps[te] === true) {
        ge._automaticallyAssignedMetaProps[te] = undefined;
      }
    }
  }, {
    key: "removeMeta",
    value: function (m, T, te) {
      delete this.metas.obtain(m).obtain(T)[te];
    }
  }, {
    key: "getMetas",
    value: function () {
      for (var m = [], T = Array.from(this.metas.values()), te = 0; te < T.length; te++) {
        m.push.apply(m, Cy(T[te].values()));
      }
      return m;
    }
  }, {
    key: "getMetasAtRow",
    value: function (m) {
      I0(function () {
        return Mp(m);
      }, "Expecting an unsigned number.");
      var T = new Map(this.metas);
      if (T.has(m)) {
        return Array.from(T.get(m).values());
      } else {
        return [];
      }
    }
  }, {
    key: "clearCache",
    value: function () {
      this.metas.clear();
    }
  }, {
    key: "_createRow",
    value: function () {
      var m = this;
      return new wg(function (T) {
        return m._createMeta(T);
      });
    }
  }, {
    key: "_createMeta",
    value: function (m) {
      return new (this.columnMeta.getMetaConstructor(m))();
    }
  }]);
  return D;
}();
function o1(D, A) {
  if (!(D instanceof A)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function U0(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Sy = function () {
  function D(A) {
    var m = this;
    var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var te = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    o1(this, D);
    this.hot = A;
    this.globalMeta = new s1(A);
    this.tableMeta = new Ay(this.globalMeta);
    this.columnMeta = new i_(this.globalMeta);
    this.cellMeta = new nh(this.columnMeta);
    te.forEach(function (Se) {
      return new Se(m);
    });
    this.globalMeta.updateMeta(T);
  }
  (function S_(D, A, m) {
    if (A) {
      U0(D.prototype, A);
    }
    if (m) {
      U0(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "getGlobalMeta",
    value: function () {
      return this.globalMeta.getMeta();
    }
  }, {
    key: "updateGlobalMeta",
    value: function (m) {
      this.globalMeta.updateMeta(m);
    }
  }, {
    key: "getTableMeta",
    value: function () {
      return this.tableMeta.getMeta();
    }
  }, {
    key: "updateTableMeta",
    value: function (m) {
      this.tableMeta.updateMeta(m);
    }
  }, {
    key: "getColumnMeta",
    value: function (m) {
      return this.columnMeta.getMeta(m);
    }
  }, {
    key: "updateColumnMeta",
    value: function (m, T) {
      this.columnMeta.updateMeta(m, T);
    }
  }, {
    key: "getCellMeta",
    value: function (m, T, te) {
      var Se = te.visualRow;
      var ge = te.visualColumn;
      var Dt = this.cellMeta.getMeta(m, T);
      Dt.visualRow = Se;
      Dt.visualCol = ge;
      Dt.row = m;
      Dt.col = T;
      this.runLocalHooks("afterGetCellMeta", Dt);
      return Dt;
    }
  }, {
    key: "getCellMetaKeyValue",
    value: function (m, T, te) {
      if (typeof te != "string") {
        throw new Error("The passed cell meta object key is not a string");
      }
      return this.cellMeta.getMeta(m, T, te);
    }
  }, {
    key: "setCellMeta",
    value: function (m, T, te, Se) {
      this.cellMeta.setMeta(m, T, te, Se);
    }
  }, {
    key: "updateCellMeta",
    value: function (m, T, te) {
      this.cellMeta.updateMeta(m, T, te);
    }
  }, {
    key: "removeCellMeta",
    value: function (m, T, te) {
      this.cellMeta.removeMeta(m, T, te);
    }
  }, {
    key: "getCellsMeta",
    value: function () {
      return this.cellMeta.getMetas();
    }
  }, {
    key: "getCellsMetaAtRow",
    value: function (m) {
      return this.cellMeta.getMetasAtRow(m);
    }
  }, {
    key: "createRow",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.cellMeta.createRow(m, T);
    }
  }, {
    key: "removeRow",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.cellMeta.removeRow(m, T);
    }
  }, {
    key: "createColumn",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.cellMeta.createColumn(m, T);
      this.columnMeta.createColumn(m, T);
    }
  }, {
    key: "removeColumn",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.cellMeta.removeColumn(m, T);
      this.columnMeta.removeColumn(m, T);
    }
  }, {
    key: "clearCellsCache",
    value: function () {
      this.cellMeta.clearCache();
    }
  }, {
    key: "clearCache",
    value: function () {
      this.cellMeta.clearCache();
      this.columnMeta.clearCache();
    }
  }]);
  return D;
}();
function Dg(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
(0, rt.jB)(Sy, jf.Z);
var Pm = function () {
  function D(A) {
    var m = this;
    (function s_(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.metaManager = A;
    this.metaSyncMemo = new Map();
    A.addLocalHook("afterGetCellMeta", function (T) {
      return m.extendCellMeta(T);
    });
    Pu.Z.getSingleton().add("beforeRender", function (T) {
      if (T) {
        m.metaSyncMemo.clear();
      }
    }, this.metaManager.hot);
  }
  (function Dy(D, A, m) {
    if (A) {
      Dg(D.prototype, A);
    }
    if (m) {
      Dg(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "extendCellMeta",
    value: function (m) {
      var T;
      var te = m.row;
      var Se = m.col;
      if ((T = this.metaSyncMemo.get(te)) === null || T === undefined || !T.has(Se)) {
        var ge = m.visualRow;
        var Dt = m.visualCol;
        var en = this.metaManager.hot;
        var tn = en.colToProp(Dt);
        m.prop = tn;
        en.runHooks("beforeGetCellMeta", ge, Dt, m);
        var vn = (0, rt.nr)(m, "type") ? m.type : null;
        var Vn = (0, pe.mf)(m.cells) ? m.cells(te, Se, tn) : null;
        if (vn) {
          if (Vn) {
            Vn.type = Vn.type ?? vn;
          } else {
            Vn = {
              type: vn
            };
          }
        }
        if (Vn) {
          this.metaManager.updateCellMeta(te, Se, Vn);
        }
        en.runHooks("afterGetCellMeta", ge, Dt, m);
        if (!this.metaSyncMemo.has(te)) {
          this.metaSyncMemo.set(te, new Set());
        }
        this.metaSyncMemo.get(te).add(Se);
      }
    }
  }]);
  return D;
}();
function Pp(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Hv = function () {
  function D(A) {
    (function Ad(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.metaManager = A;
    this.usageTracker = new Set();
    this.propDescriptors = new Map([["fixedColumnsLeft", {
      target: "fixedColumnsStart",
      onChange: function (T) {
        if (this.metaManager.hot.isRtl() && T === "fixedColumnsLeft") {
          throw new Error("The `fixedColumnsLeft` is not supported for RTL. Please use option `fixedColumnsStart`.");
        }
        if (this.usageTracker.has("fixedColumnsLeft") && this.usageTracker.has("fixedColumnsStart")) {
          throw new Error("The `fixedColumnsLeft` and `fixedColumnsStart` should not be used together. Please use only the option `fixedColumnsStart`.");
        }
      }
    }], ["layoutDirection", {
      onChange: function (T, te, Se) {
        if (!Se) {
          throw new Error(`The \`${T}\` option can not be updated after the Handsontable is initialized.`);
        }
      }
    }]]);
    this.extendMetaProps();
  }
  (function Vv(D, A, m) {
    if (A) {
      Pp(D.prototype, A);
    }
    if (m) {
      Pp(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "extendMetaProps",
    value: function () {
      var m = this;
      this.propDescriptors.forEach(function (T, te) {
        var Se = T.target;
        var ge = T.onChange;
        var Dt = ge === undefined ? function () {} : ge;
        var en = typeof Se == "string";
        var tn = en ? Se : te;
        var vn = `_${tn}`;
        m.metaManager.globalMeta.meta[vn] = m.metaManager.globalMeta.meta[tn];
        m.installPropWatcher(te, vn, Dt);
        if (en) {
          m.installPropWatcher(Se, vn, Dt);
        }
      });
    }
  }, {
    key: "installPropWatcher",
    value: function (m, T, te) {
      var Se = this;
      Object.defineProperty(this.metaManager.globalMeta.meta, m, {
        get: function () {
          return this[T];
        },
        set: function (Dt) {
          var en = !Se.usageTracker.has(m);
          Se.usageTracker.add(m);
          te.call(Se, m, Dt, en);
          this[T] = Dt;
        },
        enumerable: true,
        configurable: true
      });
    }
  }]);
  return D;
}();
import * as Wv from "6150";
function Im(D) {
  return function Yv(D) {
    if (Array.isArray(D)) {
      return B0(D);
    }
  }(D) || function D_(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || function a_(D, A) {
    if (D) {
      if (typeof D == "string") {
        return B0(D, A);
      }
      var m = Object.prototype.toString.call(D).slice(8, -1);
      if (m === "Object" && D.constructor) {
        m = D.constructor.name;
      }
      if (m === "Map" || m === "Set") {
        return Array.from(D);
      }
      if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
        return B0(D, A);
      }
    }
  }(D) || function o_() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function B0(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function l_(D) {
  return (l_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function V0(D, A) {
  for (var m = 0; m < A.length; m++) {
    var T = A[m];
    T.enumerable = T.enumerable || false;
    T.configurable = true;
    if ("value" in T) {
      T.writable = true;
    }
    Object.defineProperty(D, T.key, T);
  }
}
var Zv = fh("copyable", false);
const c_ = function () {
  function D(A, m, T) {
    (function T_(D, A) {
      if (!(D instanceof A)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, D);
    this.instance = A;
    this.tableMeta = T;
    this.dataSource = m;
    this.duckSchema = this.dataSource && this.dataSource[0] ? (0, rt.ie)(this.dataSource[0]) : {};
    this.colToPropCache = undefined;
    this.propToColCache = undefined;
    this.createMap();
  }
  (function Ty(D, A, m) {
    if (A) {
      V0(D.prototype, A);
    }
    if (m) {
      V0(D, m);
    }
    Object.defineProperty(D, "prototype", {
      writable: false
    });
  })(D, [{
    key: "createMap",
    value: function () {
      var m = this.getSchema();
      if (typeof m === "undefined") {
        throw new Error("trying to create `columns` definition but you didn't provide `schema` nor `data`");
      }
      var te;
      var T = this.tableMeta.columns;
      this.colToPropCache = [];
      this.propToColCache = new Map();
      if (T) {
        var Se = 0;
        var ge = 0;
        var Dt = false;
        if (typeof T == "function") {
          var en = (0, rt.Q8)(m);
          Se = en > 0 ? en : this.countFirstRowKeys();
          Dt = true;
        } else {
          Se = Math.min(this.tableMeta.maxCols, T.length);
        }
        for (te = 0; te < Se; te++) {
          var vn = Dt ? T(te) : T[te];
          if ((0, rt.Kn)(vn)) {
            if (typeof vn.data !== "undefined") {
              var Vn = Dt ? ge : te;
              this.colToPropCache[Vn] = vn.data;
              this.propToColCache.set(vn.data, Vn);
            }
            ge += 1;
          }
        }
      } else {
        this.recursiveDuckColumns(m);
      }
    }
  }, {
    key: "countFirstRowKeys",
    value: function () {
      return g0(this.dataSource);
    }
  }, {
    key: "recursiveDuckColumns",
    value: function (m, T, te) {
      var en;
      var Se = this;
      var ge = T;
      var Dt = te;
      if (typeof ge === "undefined") {
        ge = 0;
        Dt = "";
      }
      if (l_(m) === "object" && !Array.isArray(m)) {
        (0, rt._l)(m, function (tn, vn) {
          if (tn === null) {
            Se.colToPropCache.push(en = Dt + vn);
            Se.propToColCache.set(en, ge);
            ge += 1;
          } else {
            ge = Se.recursiveDuckColumns(tn, ge, `${vn}.`);
          }
        });
      }
      return ge;
    }
  }, {
    key: "colToProp",
    value: function (m) {
      if (Number.isInteger(m) === false) {
        return m;
      }
      var T = this.instance.toPhysicalColumn(m);
      if (T === null) {
        return m;
      } else if (this.colToPropCache && (0, re.$K)(this.colToPropCache[T])) {
        return this.colToPropCache[T];
      } else {
        return T;
      }
    }
  }, {
    key: "propToCol",
    value: function (m) {
      var T = this.propToColCache.get(m);
      if ((0, re.$K)(T)) {
        return this.instance.toVisualColumn(T);
      }
      var te = this.instance.toVisualColumn(m);
      if (te === null) {
        return m;
      } else {
        return te;
      }
    }
  }, {
    key: "getSchema",
    value: function () {
      var m = this.tableMeta.dataSchema;
      if (m) {
        if (typeof m == "function") {
          return m();
        } else {
          return m;
        }
      } else {
        return this.duckSchema;
      }
    }
  }, {
    key: "createRow",
    value: function (m) {
      var T = this;
      var te = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var Se = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var ge = Se.source;
      var Dt = Se.mode;
      var en = Dt === undefined ? "above" : Dt;
      var tn = this.instance.countSourceRows();
      var vn = tn;
      var Vn = 0;
      var Qn = m;
      if (typeof Qn != "number" || Qn >= tn) {
        Qn = tn;
      }
      if (Qn < this.instance.countRows()) {
        vn = this.instance.toPhysicalRow(Qn);
      }
      var ii = this.instance.runHooks("beforeCreateRow", Qn, te, ge);
      if (ii === false || vn === null) {
        return 0;
      }
      for (var _i = this.tableMeta.maxRows, Li = this.instance.countCols(), zi = [], us = function () {
          var Co = null;
          if (T.instance.dataType === "array") {
            if (T.tableMeta.dataSchema) {
              Co = (0, rt.I8)(T.getSchema());
            } else {
              Co = [];
              (0, It.q4)(Li - 1, function () {
                return Co.push(null);
              });
            }
          } else if (T.instance.dataType === "function") {
            Co = T.tableMeta.dataSchema(Qn + Vn);
          } else {
            (0, rt.ZB)(Co = {}, T.getSchema());
          }
          zi.push(Co);
          Vn += 1;
        }; Vn < te && tn + Vn < _i;) {
        us();
      }
      this.instance.rowIndexMapper.insertIndexes(Qn, Vn);
      if (en === "below") {
        vn = Math.min(vn + 1, tn);
      }
      this.spliceData(vn, 0, zi);
      var Vo = this.instance.toVisualRow(vn);
      this.instance.runHooks("afterCreateRow", Vo, Vn, ge);
      this.instance.forceFullRender = true;
      return {
        delta: Vn,
        startPhysicalIndex: vn
      };
    }
  }, {
    key: "createCol",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var te = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var Se = te.source;
      var ge = te.mode;
      var Dt = ge === undefined ? "start" : ge;
      if (!this.instance.isColumnModificationAllowed()) {
        throw new Error("Cannot create new column. When data source in an object, you can only have as much columns as defined in first data row, data schema or in the 'columns' setting.If you want to be able to add new columns, you have to use array datasource.");
      }
      var en = this.dataSource;
      var tn = this.tableMeta.maxCols;
      var vn = this.instance.countSourceCols();
      var Vn = m;
      if (typeof Vn != "number" || Vn >= vn) {
        Vn = vn;
      }
      var Qn = this.instance.runHooks("beforeCreateCol", Vn, T, Se);
      if (Qn === false) {
        return 0;
      }
      var ii = vn;
      if (Vn < this.instance.countCols()) {
        ii = this.instance.toPhysicalColumn(Vn);
      }
      var _i = this.instance.countSourceRows();
      var Li = this.instance.countCols();
      var zi = 0;
      var us = ii;
      if (Dt === "end") {
        us = Math.min(us + 1, vn);
      }
      for (var Vo = us; zi < T && Li < tn;) {
        if (typeof Vn != "number" || Vn >= Li) {
          if (_i > 0) {
            for (var ba = 0; ba < _i; ba += 1) {
              if (typeof en[ba] === "undefined") {
                en[ba] = [];
              }
              en[ba].push(null);
            }
          } else {
            en.push([null]);
          }
        } else {
          for (var Co = 0; Co < _i; Co++) {
            en[Co].splice(us, 0, null);
          }
        }
        zi += 1;
        us += 1;
        Li += 1;
      }
      this.instance.columnIndexMapper.insertIndexes(Vn, zi);
      var jr = this.instance.toVisualColumn(Vo);
      this.instance.runHooks("afterCreateCol", jr, zi, Se);
      this.instance.forceFullRender = true;
      return {
        delta: zi,
        startPhysicalIndex: Vo
      };
    }
  }, {
    key: "removeRow",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var te = arguments.length > 2 ? arguments[2] : undefined;
      var Se = Number.isInteger(m) ? m : -T;
      var ge = this.visualRowsToPhysical(Se, T);
      var Dt = this.instance.countSourceRows();
      var en = this.instance.runHooks("beforeRemoveRow", Se = (Dt + Se) % Dt, ge.length, ge, te);
      if (en === false) {
        return false;
      }
      var tn = ge.length;
      this.filterData(Se, tn, ge);
      if (Se < this.instance.countRows()) {
        this.instance.rowIndexMapper.removeIndexes(ge);
        var vn = (0, re.$K)(this.tableMeta.columns) || (0, re.$K)(this.tableMeta.dataSchema);
        if (this.instance.rowIndexMapper.getNotTrimmedIndexesLength() === 0 && vn === false) {
          this.instance.columnIndexMapper.setIndexesSequence([]);
        }
      }
      this.instance.runHooks("afterRemoveRow", Se, tn, ge, te);
      this.instance.forceFullRender = true;
      return true;
    }
  }, {
    key: "removeCol",
    value: function (m) {
      var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var te = arguments.length > 2 ? arguments[2] : undefined;
      if (this.instance.dataType === "object" || this.tableMeta.columns) {
        throw new Error("cannot remove column with object data source or columns option specified");
      }
      var Se = typeof m != "number" ? -T : m;
      Se = (this.instance.countCols() + Se) % this.instance.countCols();
      var ge = this.visualColumnsToPhysical(Se, T);
      var Dt = ge.slice(0).sort(function (Vo, ba) {
        return ba - Vo;
      });
      var en = this.instance.runHooks("beforeRemoveCol", Se, T, ge, te);
      if (en === false) {
        return false;
      }
      for (var tn = true, vn = Dt.length, Vn = this.dataSource, Qn = 0; Qn < vn; Qn++) {
        if (tn && ge[0] !== ge[Qn] - Qn) {
          tn = false;
        }
      }
      if (tn) {
        for (var ii = 0, _i = this.instance.countSourceRows(); ii < _i; ii++) {
          Vn[ii].splice(ge[0], T);
        }
      } else {
        for (var Li = 0, zi = this.instance.countSourceRows(); Li < zi; Li++) {
          for (var us = 0; us < vn; us++) {
            Vn[Li].splice(Dt[us], 1);
          }
        }
      }
      if (Se < this.instance.countCols()) {
        this.instance.columnIndexMapper.removeIndexes(ge);
        if (this.instance.columnIndexMapper.getNotTrimmedIndexesLength() === 0) {
          this.instance.rowIndexMapper.setIndexesSequence([]);
        }
      }
      this.instance.runHooks("afterRemoveCol", Se, T, ge, te);
      this.instance.forceFullRender = true;
      return true;
    }
  }, {
    key: "spliceCol",
    value: function (m, T, te) {
      for (var Se = this.instance.getDataAtCol(m), ge = Se.slice(T, T + te), Dt = Se.slice(T + te), en = arguments.length, tn = new Array(en > 3 ? en - 3 : 0), vn = 3; vn < en; vn++) {
        tn[vn - 3] = arguments[vn];
      }
      (0, Oe.g9)(tn, Dt);
      for (var Vn = 0; Vn < te;) {
        tn.push(null);
        Vn += 1;
      }
      (0, Oe.PI)(tn);
      this.instance.populateFromArray(T, m, tn, null, null, "spliceCol");
      return ge;
    }
  }, {
    key: "spliceRow",
    value: function (m, T, te) {
      for (var Se = this.instance.getSourceDataAtRow(m), ge = Se.slice(T, T + te), Dt = Se.slice(T + te), en = arguments.length, tn = new Array(en > 3 ? en - 3 : 0), vn = 3; vn < en; vn++) {
        tn[vn - 3] = arguments[vn];
      }
      (0, Oe.g9)(tn, Dt);
      for (var Vn = 0; Vn < te;) {
        tn.push(null);
        Vn += 1;
      }
      this.instance.populateFromArray(m, T, [tn], null, null, "spliceRow");
      return ge;
    }
  }, {
    key: "spliceData",
    value: function (m, T, te) {
      var Se = this;
      if (this.instance.runHooks("beforeDataSplice", m, T, te) !== false) {
        var Dt = [].concat(Im(this.dataSource.slice(0, m)), Im(te), Im(this.dataSource.slice(m)));
        this.dataSource.length = 0;
        Dt.forEach(function (en) {
          return Se.dataSource.push(en);
        });
      }
    }
  }, {
    key: "filterData",
    value: function (m, T, te) {
      var Se = this.instance.runHooks("filterData", m, T, te);
      if (Array.isArray(Se) === false) {
        Se = this.dataSource.filter(function (ge, Dt) {
          return te.indexOf(Dt) === -1;
        });
      }
      this.dataSource.length = 0;
      Array.prototype.push.apply(this.dataSource, Se);
    }
  }, {
    key: "get",
    value: function (m, T) {
      var te = this.instance.toPhysicalRow(m);
      var Se = this.dataSource[te];
      var ge = this.instance.runHooks("modifyRowData", te);
      var Dt = null;
      if ((Se = isNaN(ge) ? ge : Se) && Se.hasOwnProperty && (0, rt.nr)(Se, T)) {
        Dt = Se[T];
      } else if (typeof T == "string" && T.indexOf(".") > -1) {
        var en = T.split(".");
        var tn = Se;
        if (!tn) {
          return null;
        }
        for (var vn = 0, Vn = en.length; vn < Vn; vn++) {
          if (typeof (tn = tn[en[vn]]) === "undefined") {
            return null;
          }
        }
        Dt = tn;
      } else if (typeof T == "function") {
        Dt = T(this.dataSource.slice(te, te + 1)[0]);
      }
      if (this.instance.hasHook("modifyData")) {
        var Qn = (0, rt.sm)(Dt);
        this.instance.runHooks("modifyData", te, this.propToCol(T), Qn, "get");
        if (Qn.isTouched()) {
          Dt = Qn.value;
        }
      }
      return Dt;
    }
  }, {
    key: "getCopyable",
    value: function (m, T) {
      if (Zv.call(this.instance, m, this.propToCol(T))) {
        return this.get(m, T);
      } else {
        return "";
      }
    }
  }, {
    key: "set",
    value: function (m, T, te) {
      var Se = this.instance.toPhysicalRow(m);
      var ge = te;
      var Dt = this.dataSource[Se];
      var en = this.instance.runHooks("modifyRowData", Se);
      Dt = isNaN(en) ? en : Dt;
      if (this.instance.hasHook("modifyData")) {
        var tn = (0, rt.sm)(ge);
        this.instance.runHooks("modifyData", Se, this.propToCol(T), tn, "set");
        if (tn.isTouched()) {
          ge = tn.value;
        }
      }
      if (Dt && Dt.hasOwnProperty && (0, rt.nr)(Dt, T)) {
        Dt[T] = ge;
      } else if (typeof T == "string" && T.indexOf(".") > -1) {
        var ii;
        var vn = T.split(".");
        var Vn = Dt;
        var Qn = 0;
        Qn = 0;
        ii = vn.length - 1;
        for (; Qn < ii; Qn++) {
          if (typeof Vn[vn[Qn]] === "undefined") {
            Vn[vn[Qn]] = {};
          }
          Vn = Vn[vn[Qn]];
        }
        Vn[vn[Qn]] = ge;
      } else if (typeof T == "function") {
        T(this.dataSource.slice(Se, Se + 1)[0], ge);
      } else {
        Dt[T] = ge;
      }
    }
  }, {
    key: "visualRowsToPhysical",
    value: function (m, T) {
      for (var en, te = this.instance.countSourceRows(), Se = [], ge = (te + m) % te, Dt = T; ge < te && Dt;) {
        en = this.instance.toPhysicalRow(ge);
        Se.push(en);
        Dt -= 1;
        ge += 1;
      }
      return Se;
    }
  }, {
    key: "visualColumnsToPhysical",
    value: function (m, T) {
      for (var te = this.instance.countCols(), Se = [], ge = (te + m) % te, Dt = T; ge < te && Dt;) {
        var en = this.instance.toPhysicalColumn(ge);
        Se.push(en);
        Dt -= 1;
        ge += 1;
      }
      return Se;
    }
  }, {
    key: "clear",
    value: function () {
      for (var m = 0; m < this.instance.countSourceRows(); m++) {
        for (var T = 0; T < this.instance.countCols(); T++) {
          this.set(m, this.colToProp(T), "");
        }
      }
    }
  }, {
    key: "getLength",
    value: function () {
      var T;
      var m = this.tableMeta.maxRows;
      T = m < 0 || m === 0 ? 0 : m || Infinity;
      var te = this.instance.rowIndexMapper.getNotTrimmedIndexesLength();
      return Math.min(te, T);
    }
  }, {
    key: "getAll",
    value: function () {
      var m = {
        row: 0,
        col: 0
      };
      var T = {
        row: Math.max(this.instance.countRows() - 1, 0),
        col: Math.max(this.instance.countCols() - 1, 0)
      };
      if (m.row - T.row != 0 || this.instance.countSourceRows()) {
        return this.getRange(m, T, D.DESTINATION_RENDERER);
      } else {
        return [];
      }
    }
  }, {
    key: "countCachedColumns",
    value: function () {
      return this.colToPropCache.length;
    }
  }, {
    key: "getRange",
    value: function (m, T, te) {
      var ge;
      var Dt;
      var en;
      var Se = [];
      var tn = this.tableMeta.maxRows;
      var vn = this.tableMeta.maxCols;
      if (tn === 0 || vn === 0) {
        return [];
      }
      var Vn = te === D.DESTINATION_CLIPBOARD_GENERATOR ? this.getCopyable : this.get;
      var Qn = Math.min(Math.max(tn - 1, 0), Math.max(m.row, T.row));
      var ii = Math.min(Math.max(vn - 1, 0), Math.max(m.col, T.col));
      for (ge = Math.min(m.row, T.row); ge <= Qn; ge++) {
        en = [];
        var _i = ge >= 0 ? this.instance.toPhysicalRow(ge) : ge;
        for (Dt = Math.min(m.col, T.col); Dt <= ii && _i !== null; Dt++) {
          en.push(Vn.call(this, ge, this.colToProp(Dt)));
        }
        if (_i !== null) {
          Se.push(en);
        }
      }
      return Se;
    }
  }, {
    key: "getText",
    value: function (m, T) {
      return (0, Wv.P)(this.getRange(m, T, D.DESTINATION_RENDERER));
    }
  }, {
    key: "getCopyableText",
    value: function (m, T) {
      return (0, Wv.P)(this.getRange(m, T, D.DESTINATION_CLIPBOARD_GENERATOR));
    }
  }, {
    key: "destroy",
    value: function () {
      this.instance = null;
      this.tableMeta = null;
      this.dataSource = null;
      this.duckSchema = null;
      this.colToPropCache.length = 0;
      this.propToColCache.clear();
      this.propToColCache = undefined;
    }
  }], [{
    key: "DESTINATION_RENDERER",
    get: function () {
      return 1;
    }
  }, {
    key: "DESTINATION_CLIPBOARD_GENERATOR",
    get: function () {
      return 2;
    }
  }]);
  return D;
}();
function Rm(D) {
  return (Rm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function My(D, A, m, T) {
  var te = T.hotInstance;
  var Se = T.dataMap;
  var ge = T.dataSource;
  var Dt = T.internalSource;
  var en = T.source;
  var tn = T.firstRun;
  var vn = (0, Qe.ct)(Dt);
  var Vn = te.getSettings();
  te.dataType = Array.isArray(Vn.dataSchema) ? "array" : (0, pe.mf)(Vn.dataSchema) ? "function" : "object";
  if (Se) {
    Se.destroy();
  }
  D = te.runHooks(`before${vn}`, D, tn, en);
  var Qn = new c_(te, D, Vn);
  A(Qn);
  if (Rm(D) === "object" && D !== null) {
    if (!D.push || !D.splice) {
      D = [D];
    }
  } else {
    if (D !== null) {
      throw new Error(`${Dt} only accepts array of objects or array of arrays (${Rm(D)} given)`);
    }
    var ii = Qn.getSchema();
    D = [];
    var _i;
    var zi;
    var Li = 0;
    Li = 0;
    zi = Vn.startRows;
    for (; Li < zi; Li++) {
      if (te.dataType !== "object" && te.dataType !== "function" || !Vn.dataSchema) {
        if (te.dataType === "array") {
          _i = (0, rt.I8)(ii[0]);
          D.push(_i);
        } else {
          _i = [];
          for (var us = 0, Vo = Vn.startCols; us < Vo; us++) {
            _i.push(null);
          }
          D.push(_i);
        }
      } else {
        _i = (0, rt.I8)(ii);
        D.push(_i);
      }
    }
  }
  if (Array.isArray(D[0])) {
    te.dataType = "array";
  }
  Vn.data = D;
  Qn.dataSource = D;
  ge.data = D;
  ge.dataType = te.dataType;
  ge.colToProp = Qn.colToProp.bind(Qn);
  ge.propToCol = Qn.propToCol.bind(Qn);
  ge.countCachedColumns = Qn.countCachedColumns.bind(Qn);
  m(Qn);
  te.runHooks(`after${vn}`, D, tn, en);
  if (!tn) {
    te.runHooks("afterChange", null, Dt);
    te.render();
  }
}
var Gv;
import * as Tg from "78053";
var Fm = new Map([[" ", "space"], ["spacebar", "space"], ["scroll", "scrolllock"], ["del", "delete"], ["esc", "escape"], ["medianexttrack", "mediatracknext"], ["mediaprevioustrack", "mediatrackprevious"], ["volumeup", "audiovolumeup"], ["volumedown", "audiovolumedown"], ["volumemute", "audiovolumemute"], ["multiply", "*"], ["add", "+"], ["divide", "/"], ["subtract", "-"], ["left", "arrowleft"], ["right", "arrowright"], ["up", "arrowup"], ["down", "arrowdown"]]);
function Mg(A) {
  return A.map(function (m) {
    var T = m.toLowerCase();
    if (Fm.has(T)) {
      return Fm.get(T);
    } else {
      return T;
    }
  }).sort().join("+");
}
function Og(A) {
  return A.toLowerCase();
}
function km(D, A) {
  if (D) {
    if (typeof D == "string") {
      return Ig(D, A);
    }
    var m = Object.prototype.toString.call(D).slice(8, -1);
    if (m === "Object" && D.constructor) {
      m = D.constructor.name;
    }
    if (m === "Map" || m === "Set") {
      return Array.from(D);
    }
    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
      return Ig(D, A);
    }
  }
}
function Ig(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
function Kv(D, A) {
  A ||= D.slice(0);
  return Object.freeze(Object.defineProperties(D, {
    raw: {
      value: Object.freeze(A)
    }
  }));
}
var ep;
var kg;
var jv = ["meta", "alt", "shift", "control"];
var dd = function Rg() {
  var D = new Set();
  return {
    press: function (m) {
      D.add(m);
    },
    release: function (m) {
      D.delete(m);
    },
    releaseAll: function () {
      D.clear();
    },
    isPressed: function (m) {
      return D.has(m);
    }
  };
}();
function Fg(A) {
  var m = A.ownerWindow;
  var T = A.handleEvent;
  var te = A.beforeKeyDown;
  var Se = A.afterKeyDown;
  var ge = (0, Tg.I)({
    errorIdExists: function (Li) {
      return `The "${Li}" context name is already registered.`;
    }
  });
  var Dt = "grid";
  function tn() {
    return Dt;
  }
  function vn(Li) {
    return ge.getItem(Li);
  }
  var Qn = false;
  var ii = function Py(D, A, m, T, te) {
    function Se(ii) {
      return jv.includes(ii);
    }
    function ge(ii) {
      var _i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      var Li = [];
      if (ii.altKey) {
        Li.push("alt");
      }
      if (_i && (ii.ctrlKey || ii.metaKey)) {
        Li.push("control/meta");
      } else {
        if (ii.ctrlKey) {
          Li.push("control");
        }
        if (ii.metaKey) {
          Li.push("meta");
        }
      }
      if (ii.shiftKey) {
        Li.push("shift");
      }
      return Li;
    }
    function Dt(ii) {
      if (A(ii) !== false) {
        var _i = m(ii);
        if (ii.keyCode !== 229 && _i !== false && !(0, Dn.Ty)(ii)) {
          var Li = Og(ii.key);
          var zi = [];
          if (Se(Li)) {
            dd.press(Li);
          } else {
            zi = ge(ii);
          }
          var us = [Li].concat(zi);
          if (!te(ii, us) && ((0, Re.eE)() && zi.includes("meta") || !(0, Re.eE)() && zi.includes("control"))) {
            te(ii, [Li].concat(ge(ii, true)));
          }
          T(ii);
        }
      }
    }
    function en(ii) {
      if (A(ii) !== false) {
        var _i = Og(ii.key);
        if (Se(_i) !== false) {
          dd.release(_i);
        }
      }
    }
    function tn() {
      dd.releaseAll();
    }
    return {
      mount: function () {
        for (var ii = D; ii;) {
          ii.document.documentElement.addEventListener("keydown", Dt);
          ii.document.documentElement.addEventListener("keyup", en);
          ii.document.documentElement.addEventListener("blur", tn);
          ii = (0, he.f5)(ii);
        }
      },
      unmount: function () {
        for (var ii = D; ii;) {
          ii.document.documentElement.removeEventListener("keydown", Dt);
          ii.document.documentElement.removeEventListener("keyup", en);
          ii.document.documentElement.removeEventListener("blur", tn);
          ii = (0, he.f5)(ii);
        }
      },
      isPressed: function (ii) {
        return dd.isPressed(ii);
      }
    };
  }(m, T, te, Se, function (_i, Li) {
    var zi = vn(tn());
    var us = false;
    if (!zi.hasShortcut(Li)) {
      return us;
    }
    for (var Vo = zi.getShortcuts(Li), ba = 0; ba < Vo.length; ba++) {
      var Co = Vo[ba];
      var jr = Co.callback;
      var _l = Co.preventDefault;
      var pc = Co.stopPropagation;
      var Lu = Co.captureCtrl;
      if ((0, Co.runOnlyIf)(_i) !== false && (Qn = Lu, us = jr(_i, Li) === false, Qn = false, _l && _i.preventDefault(), pc && _i.stopPropagation(), us)) {
        break;
      }
    }
    return us;
  });
  ii.mount();
  return {
    addContext: function (Li) {
      var zi = function (A) {
        var m = (0, Tg.I)({
          errorIdExists: function (vn) {
            return `The "${vn}" shortcut is already registered in the "${A}" context.`;
          }
        });
        function T() {
          var vn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var Vn = vn.keys;
          var Qn = vn.callback;
          var ii = vn.group;
          var _i = vn.runOnlyIf;
          var Li = _i === undefined ? function () {
            return true;
          } : _i;
          var zi = vn.captureCtrl;
          var us = zi !== undefined && zi;
          var Vo = vn.preventDefault;
          var ba = Vo === undefined || Vo;
          var Co = vn.stopPropagation;
          var jr = Co !== undefined && Co;
          var nc = vn.relativeToGroup;
          var _l = vn.position;
          if ((0, re.o8)(ii)) {
            throw new Error("You need to define the shortcut's group.");
          }
          if ((0, pe.mf)(Qn) === false) {
            throw new Error("The shortcut's callback needs to be a function.");
          }
          if (Array.isArray(Vn) === false) {
            throw new Error((0, Ue.e)(Gv ||= Kv(["Pass the shortcut's keys as an array of arrays, \n      using the KeyboardEvent.key properties: \n      https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values."], ["Pass the shortcut\\'s keys as an array of arrays,\\x20\n      using the KeyboardEvent.key properties:\\x20\n      https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values."])));
          }
          var pc = {
            callback: Qn,
            group: ii,
            runOnlyIf: Li,
            captureCtrl: us,
            preventDefault: ba,
            stopPropagation: jr
          };
          if ((0, re.$K)(nc)) {
            var Lu = [nc, _l];
            pc.relativeToGroup = Lu[0];
            pc.position = Lu[1];
          }
          Vn.forEach(function (kf) {
            var ju = Mg(kf);
            if (m.hasItem(ju)) {
              var bc = m.getItem(ju);
              var fu = bc.findIndex(function (pf) {
                return pf.group === nc;
              });
              if (fu !== -1) {
                if (_l === "before") {
                  fu -= 1;
                } else {
                  fu += 1;
                }
              } else {
                fu = bc.length;
              }
              bc.splice(fu, 0, pc);
            } else {
              m.addItem(ju, [pc]);
            }
          });
        }
        function Se(vn) {
          var Vn = Mg(vn);
          m.removeItem(Vn);
        }
        return {
          addShortcut: T,
          addShortcuts: function (vn) {
            var Vn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            vn.forEach(function (Qn) {
              (0, rt._l)(Vn, function (ii, _i) {
                if (Object.prototype.hasOwnProperty.call(Qn, _i) === false) {
                  Qn[_i] = Vn[_i];
                }
              });
              T(Qn);
            });
          },
          getShortcuts: function (vn) {
            var Vn = Mg(vn);
            var Qn = m.getItem(Vn);
            if ((0, re.$K)(Qn)) {
              return Qn.slice();
            } else {
              return [];
            }
          },
          hasShortcut: function (vn) {
            var Vn = Mg(vn);
            return m.hasItem(Vn);
          },
          removeShortcutsByKeys: Se,
          removeShortcutsByGroup: function (vn) {
            m.getItems().forEach(function (Qn) {
              var ii = function Rp(D, A) {
                return function ih(D) {
                  if (Array.isArray(D)) {
                    return D;
                  }
                }(D) || function M_(D, A) {
                  var m = D == null ? null : typeof Symbol !== "undefined" && D[Symbol.iterator] || D["@@iterator"];
                  if (m != null) {
                    var ge;
                    var Dt;
                    var T = [];
                    var te = true;
                    var Se = false;
                    try {
                      for (m = m.call(D); !(te = (ge = m.next()).done) && (T.push(ge.value), !A || T.length !== A); te = true);
                    } catch (en) {
                      Se = true;
                      Dt = en;
                    } finally {
                      try {
                        if (!te && m.return != null) {
                          m.return();
                        }
                      } finally {
                        if (Se) {
                          throw Dt;
                        }
                      }
                    }
                    return T;
                  }
                }(D, A) || km(D, A) || function Oy() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
              }(Qn, 2);
              var _i = ii[0];
              var Li = ii[1];
              var zi = Li.filter(function (us) {
                return us.group !== vn;
              });
              if (zi.length === 0) {
                Se(function (A) {
                  return A.split("+");
                }(_i));
              } else {
                Li.length = 0;
                Li.push.apply(Li, function zv(D) {
                  return function Pg(D) {
                    if (Array.isArray(D)) {
                      return Ig(D);
                    }
                  }(D) || function hf(D) {
                    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
                      return Array.from(D);
                    }
                  }(D) || km(D) || function Ip() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }();
                }(zi));
              }
            });
          }
        };
      }(Li);
      ge.addItem(Li, zi);
      return zi;
    },
    getActiveContextName: tn,
    getContext: vn,
    setActiveContextName: function (Li) {
      Dt = Li;
    },
    isCtrlPressed: function () {
      return !Qn && (ii.isPressed("control") || ii.isPressed("meta"));
    },
    destroy: function () {
      return ii.unmount();
    }
  };
}
function Jc(D) {
  return (Jc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (A) {
    return typeof A;
  } : function (A) {
    if (A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof A;
    }
  })(D);
}
function Fp(D, A) {
  A ||= D.slice(0);
  return Object.freeze(Object.defineProperties(D, {
    raw: {
      value: Object.freeze(A)
    }
  }));
}
function xd(D, A) {
  return function Nm(D) {
    if (Array.isArray(D)) {
      return D;
    }
  }(D) || function Lm(D, A) {
    var m = D == null ? null : typeof Symbol !== "undefined" && D[Symbol.iterator] || D["@@iterator"];
    if (m != null) {
      var ge;
      var Dt;
      var T = [];
      var te = true;
      var Se = false;
      try {
        for (m = m.call(D); !(te = (ge = m.next()).done) && (T.push(ge.value), !A || T.length !== A); te = true);
      } catch (en) {
        Se = true;
        Dt = en;
      } finally {
        try {
          if (!te && m.return != null) {
            m.return();
          }
        } finally {
          if (Se) {
            throw Dt;
          }
        }
      }
      return T;
    }
  }(D, A) || kp(D, A) || function Lg() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Th(D) {
  return function Qv(D) {
    if (Array.isArray(D)) {
      return W0(D);
    }
  }(D) || function Iy(D) {
    if (typeof Symbol !== "undefined" && D[Symbol.iterator] != null || D["@@iterator"] != null) {
      return Array.from(D);
    }
  }(D) || kp(D) || function H0() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function kp(D, A) {
  if (D) {
    if (typeof D == "string") {
      return W0(D, A);
    }
    var m = Object.prototype.toString.call(D).slice(8, -1);
    if (m === "Object" && D.constructor) {
      m = D.constructor.name;
    }
    if (m === "Map" || m === "Set") {
      return Array.from(D);
    }
    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) {
      return W0(D, A);
    }
  }
}
function W0(D, A) {
  if (A == null || A > D.length) {
    A = D.length;
  }
  for (var m = 0, T = new Array(A); m < A; m++) {
    T[m] = D[m];
  }
  return T;
}
var Ry = "gridDefault";
var Y0 = null;
var Jv = new Set();
export function Z(D, A) {
  var en;
  var tn;
  var vn;
  var Vn;
  var T = this;
  var te = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  var Se = false;
  var ge = this;
  var Dt = new st.Z(ge);
  var Qn = true;
  if ((0, Td.dU)(te)) {
    (0, Td.IU)(this);
  }
  this.rootElement = D;
  this.rootDocument = D.ownerDocument;
  this.rootWindow = this.rootDocument.defaultView;
  this.isDestroyed = false;
  this.renderSuspendedCounter = 0;
  this.executionSuspendedCounter = 0;
  var ii = A?.layoutDirection ?? "inherit";
  var _i = ["rtl", "ltr"].includes(ii) ? ii : this.rootWindow.getComputedStyle(this.rootElement).direction;
  this.rootElement.setAttribute("dir", _i);
  this.isRtl = function () {
    return _i === "rtl";
  };
  this.isLtr = function () {
    return !ge.isRtl();
  };
  this.getDirectionFactor = function () {
    if (ge.isLtr()) {
      return 1;
    } else {
      return -1;
    }
  };
  A.language = (0, ag.gr)(A.language);
  var Li = new Sy(ge, A, [Pm, Hv]);
  var zi = Li.getTableMeta();
  var us = Li.getGlobalMeta();
  var Vo = (0, Tg.I)();
  this.container = this.rootDocument.createElement("div");
  this.renderCall = false;
  D.insertBefore(this.container, D.firstChild);
  if ((0, Td._v)(this)) {
    (0, re.ge)(A.licenseKey, D);
  }
  this.guid = `ht_${(0, Qe.O1)()}`;
  this.columnIndexMapper = new $f();
  this.rowIndexMapper = new $f();
  tn = new $m(ge);
  if (!this.rootElement.id || this.rootElement.id.substring(0, 3) === "ht_") {
    this.rootElement.id = this.guid;
  }
  function ba(En) {
    var $n = En.row;
    var Ti = En.col;
    return ge._createCellCoords($n >= 0 ? ge.rowIndexMapper.getRenderableFromVisualIndex($n) : $n, Ti >= 0 ? ge.columnIndexMapper.getRenderableFromVisualIndex(Ti) : Ti);
  }
  function Co(En) {
    var $n = En.row;
    var Ti = En.col;
    return ge._createCellCoords($n >= 0 ? ge.rowIndexMapper.getVisualFromRenderableIndex($n) : $n, Ti >= 0 ? ge.columnIndexMapper.getVisualFromRenderableIndex(Ti) : Ti);
  }
  var jr = new Tm(zi, {
    rowIndexMapper: function () {
      return ge.rowIndexMapper;
    },
    columnIndexMapper: function () {
      return ge.columnIndexMapper;
    },
    countCols: function () {
      return ge.countCols();
    },
    countRows: function () {
      return ge.countRows();
    },
    propToCol: function (En) {
      return en.propToCol(En);
    },
    isEditorOpened: function () {
      return !!ge.getActiveEditor() && ge.getActiveEditor().isOpened();
    },
    countColsTranslated: function () {
      return T.view.countRenderableColumns();
    },
    countRowsTranslated: function () {
      return T.view.countRenderableRows();
    },
    getShortcutManager: function () {
      return ge.getShortcutManager();
    },
    createCellCoords: function (En, $n) {
      return ge._createCellCoords(En, $n);
    },
    createCellRange: function (En, $n, Ti) {
      return ge._createCellRange(En, $n, Ti);
    },
    visualToRenderableCoords: ba,
    renderableToVisualCoords: Co,
    isDisabledCellSelection: function (En, $n) {
      return ge.getCellMeta(En, $n).disableVisualSelection;
    }
  });
  this.selection = jr;
  function nc(En) {
    if (En.hiddenIndexesChanged) {
      T.selection.refresh();
    }
  }
  function _l(cn) {
    var En = (0, Hh.TH)(cn);
    if ((0, ag.RY)(En)) {
      ge.runHooks("beforeLanguageChange", En);
      us.language = En;
      ge.runHooks("afterLanguageChange", En);
    } else {
      (0, Hh.Vn)(cn);
    }
  }
  function pc(cn, En) {
    var $n = cn === "className" ? ge.rootElement : ge.table;
    if (Qn) {
      (0, he.cn)($n, En);
    } else {
      var Ti = [];
      var Wi = [];
      if (us[cn]) {
        Ti = Array.isArray(us[cn]) ? us[cn] : (0, Oe.W7)(us[cn]);
      }
      if (En) {
        Wi = Array.isArray(En) ? En : (0, Oe.W7)(En);
      }
      var Sr = (0, Oe.o0)(Ti, Wi);
      var xr = (0, Oe.o0)(Wi, Ti);
      if (Sr.length) {
        (0, he.IV)($n, Sr);
      }
      if (xr.length) {
        (0, he.cn)($n, xr);
      }
    }
    us[cn] = En;
  }
  function Lu() {
    var cn = false;
    return {
      validatorsInQueue: 0,
      valid: true,
      addValidatorToQueue: function () {
        this.validatorsInQueue += 1;
        cn = false;
      },
      removeValidatorFormQueue: function () {
        this.validatorsInQueue = this.validatorsInQueue - 1 < 0 ? 0 : this.validatorsInQueue - 1;
        this.checkIfQueueIsEmpty();
      },
      onQueueEmpty: function () {},
      checkIfQueueIsEmpty: function () {
        if (this.validatorsInQueue === 0 && cn === false) {
          cn = true;
          this.onQueueEmpty(this.valid);
        }
      }
    };
  }
  function kf(cn) {
    var En = cn.replace(",", ".");
    if (isNaN(parseFloat(En)) === false) {
      return parseFloat(En);
    } else {
      return cn;
    }
  }
  function ju(cn, En, $n) {
    if (cn.length) {
      var Ti = ge.getActiveEditor();
      var Wi = ge.runHooks("beforeChange", cn, En || "edit");
      var Sr = true;
      if (Wi === false) {
        if (Ti) {
          Ti.cancelChanges();
        }
        return;
      }
      var xr = new Lu();
      xr.onQueueEmpty = function (El) {
        if (Ti && Sr) {
          Ti.cancelChanges();
        }
        $n(El);
      };
      for (var qr = cn.length - 1; qr >= 0; qr--) {
        if (cn[qr] === null) {
          cn.splice(qr, 1);
        } else {
          var ws = xd(cn[qr], 4);
          var co = ws[0];
          var ka = ws[3];
          var Fl = en.propToCol(ws[1]);
          var ma = ge.getCellMeta(co, Fl);
          if (ma.type === "numeric" && typeof ka == "string" && (0, It.TR)(ka)) {
            cn[qr][3] = kf(ka);
          }
          if (ge.getCellValidator(ma)) {
            xr.addValidatorToQueue();
            ge.validateCell(cn[qr][3], ma, function (El, Ac) {
              return function (Ic) {
                if (typeof Ic != "boolean") {
                  throw new Error("Validation error: result is not boolean");
                }
                if (Ic === false && Ac.allowInvalid === false) {
                  Sr = false;
                  cn.splice(El, 1);
                  Ac.valid = true;
                  var Au = ge.getCell(Ac.visualRow, Ac.visualCol);
                  if (Au !== null) {
                    (0, he.IV)(Au, zi.invalidCellClassName);
                  }
                }
                xr.removeValidatorFormQueue();
              };
            }(qr, ma), En);
          }
        }
      }
      xr.checkIfQueueIsEmpty();
    }
  }
  function fd(cn, En) {
    var $n = cn.length - 1;
    if ($n >= 0) {
      for (; $n >= 0; $n--) {
        var Ti = false;
        if (cn[$n] !== null) {
          if (cn[$n][2] != null || cn[$n][3] != null) {
            if (zi.allowInsertRow) {
              for (; cn[$n][0] > ge.countRows() - 1;) {
                var Sr = en.createRow(undefined, undefined, {
                  source: En
                }).delta;
                if (Sr < 1) {
                  Ti = true;
                  break;
                }
                Li.createRow(null, Sr);
              }
            }
            if (ge.dataType === "array" && (!zi.columns || zi.columns.length === 0) && zi.allowInsertColumn) {
              for (; en.propToCol(cn[$n][1]) > ge.countCols() - 1;) {
                var qr = en.createCol(undefined, undefined, {
                  source: En
                }).delta;
                if (qr < 1) {
                  Ti = true;
                  break;
                }
                Li.createColumn(null, qr);
              }
            }
            if (!Ti) {
              en.set(cn[$n][0], cn[$n][1], cn[$n][3]);
            }
          }
        } else {
          cn.splice($n, 1);
        }
      }
      ge.forceFullRender = true;
      vn.adjustRowsAndCols();
      ge.runHooks("beforeChangeRender", cn, En);
      Vn.lockEditor();
      ge._refreshBorders(null);
      Vn.unlockEditor();
      ge.view.adjustElementsSize();
      ge.runHooks("afterChange", cn, En || "edit");
      var ws = ge.getActiveEditor();
      if (ws && (0, re.$K)(ws.refreshValue)) {
        ws.refreshValue();
      }
    }
  }
  function bc(cn, En, $n) {
    if (Array.isArray(cn)) {
      return cn;
    } else {
      return [[cn, En, $n]];
    }
  }
  this.columnIndexMapper.addLocalHook("cacheUpdated", nc);
  this.rowIndexMapper.addLocalHook("cacheUpdated", nc);
  this.selection.addLocalHook("beforeSetRangeStart", function (cn) {
    T.runHooks("beforeSetRangeStart", cn);
  });
  this.selection.addLocalHook("beforeSetRangeStartOnly", function (cn) {
    T.runHooks("beforeSetRangeStartOnly", cn);
  });
  this.selection.addLocalHook("beforeSetRangeEnd", function (cn) {
    T.runHooks("beforeSetRangeEnd", cn);
    if (cn.row < 0) {
      cn.row = T.view._wt.wtTable.getFirstVisibleRow();
    }
    if (cn.col < 0) {
      cn.col = T.view._wt.wtTable.getFirstVisibleColumn();
    }
  });
  this.selection.addLocalHook("afterSetRangeEnd", function (cn) {
    var En = (0, rt.sm)(false);
    var $n = T.selection.getSelectedRange();
    var Ti = $n.current();
    var Wi = Ti.from;
    var Sr = Ti.to;
    var xr = $n.size() - 1;
    T.runHooks("afterSelection", Wi.row, Wi.col, Sr.row, Sr.col, En, xr);
    T.runHooks("afterSelectionByProp", Wi.row, ge.colToProp(Wi.col), Sr.row, ge.colToProp(Sr.col), En, xr);
    var qr = T.selection.isSelectedByAnyHeader();
    var ws = T.selection.selectedRange.current();
    var co = true;
    if (Se) {
      co = false;
    }
    if (En.isTouched()) {
      co = !En.value;
    }
    var Xs = T.selection.isSelectedByRowHeader();
    var ka = T.selection.isSelectedByColumnHeader();
    if (co !== false) {
      if (qr) {
        if (Xs) {
          T.view.scrollViewportVertically(ge.rowIndexMapper.getRenderableFromVisualIndex(cn.row));
        } else if (ka) {
          T.view.scrollViewportHorizontally(ge.columnIndexMapper.getRenderableFromVisualIndex(cn.col));
        }
      } else if (ws && !T.selection.isMultiple()) {
        T.view.scrollViewport(ba(ws.from));
      } else {
        T.view.scrollViewport(ba(cn));
      }
    }
    if (Xs && ka) {
      (0, he.cn)(T.rootElement, ["ht__selection--rows", "ht__selection--columns"]);
    } else if (Xs) {
      (0, he.IV)(T.rootElement, "ht__selection--columns");
      (0, he.cn)(T.rootElement, "ht__selection--rows");
    } else if (ka) {
      (0, he.IV)(T.rootElement, "ht__selection--rows");
      (0, he.cn)(T.rootElement, "ht__selection--columns");
    } else {
      (0, he.IV)(T.rootElement, ["ht__selection--rows", "ht__selection--columns"]);
    }
    T._refreshBorders(null);
  });
  this.selection.addLocalHook("afterSelectionFinished", function (cn) {
    var En = cn.length - 1;
    var $n = cn[En];
    var Ti = $n.from;
    var Wi = $n.to;
    T.runHooks("afterSelectionEnd", Ti.row, Ti.col, Wi.row, Wi.col, En);
    T.runHooks("afterSelectionEndByProp", Ti.row, ge.colToProp(Ti.col), Wi.row, ge.colToProp(Wi.col), En);
  });
  this.selection.addLocalHook("afterIsMultipleSelection", function (cn) {
    var En = T.runHooks("afterIsMultipleSelection", cn.value);
    cn.value &&= En;
  });
  this.selection.addLocalHook("beforeModifyTransformStart", function (cn) {
    T.runHooks("modifyTransformStart", cn);
  });
  this.selection.addLocalHook("afterModifyTransformStart", function (cn, En, $n) {
    T.runHooks("afterModifyTransformStart", cn, En, $n);
  });
  this.selection.addLocalHook("beforeModifyTransformEnd", function (cn) {
    T.runHooks("modifyTransformEnd", cn);
  });
  this.selection.addLocalHook("afterModifyTransformEnd", function (cn, En, $n) {
    T.runHooks("afterModifyTransformEnd", cn, En, $n);
  });
  this.selection.addLocalHook("afterDeselect", function () {
    Vn.destroyEditor();
    T._refreshBorders();
    (0, he.IV)(T.rootElement, ["ht__selection--rows", "ht__selection--columns"]);
    T.runHooks("afterDeselect");
  });
  this.selection.addLocalHook("insertRowRequire", function (cn) {
    T.alter("insert_row_above", cn, 1, "auto");
  });
  this.selection.addLocalHook("insertColRequire", function (cn) {
    T.alter("insert_col_start", cn, 1, "auto");
  });
  vn = {
    alter: function (En, $n) {
      var Sr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var xr = arguments.length > 3 ? arguments[3] : undefined;
      var qr = arguments.length > 4 ? arguments[4] : undefined;
      function ws(Qd) {
        if (Qd.length === 0) {
          return [];
        }
        var Ld = Th(Qd);
        Ld.sort(function (Fc, Ql) {
          var kc = xd(Fc, 1)[0];
          var pd = xd(Ql, 1)[0];
          if (kc === pd) {
            return 0;
          } else if (kc > pd) {
            return 1;
          } else {
            return -1;
          }
        });
        return (0, Oe.k$)(Ld, function (Fc, Ql) {
          var xu = xd(Ql, 2);
          var kc = xu[0];
          var Nd = xu[1];
          var pd = Fc[Fc.length - 1];
          var Jd = xd(pd, 2);
          var sp = Jd[0] + Jd[1];
          if (kc <= sp) {
            var ky = Math.max(Nd - (sp - kc), 0);
            pd[1] += ky;
          } else {
            Fc.push([kc, Nd]);
          }
          return Fc;
        }, [Ld[0]]);
      }
      switch (En) {
        case "insert_row":
          if (!Jv.has(En)) {
            Jv.add(En);
            (0, Ge.ZK)((0, Ue.e)(ep ||= Fp(["The `", "` action of the `alter()` method is deprecated and will be removed \n                              in the next major release of Handsontable. Use the `insert_row_above` action instead."], ["The \\`", "\\` action of the \\`alter()\\` method is deprecated and will be removed\\x20\n                              in the next major release of Handsontable. Use the \\`insert_row_above\\` action instead."]), En));
          }
        case "insert_row_below":
        case "insert_row_above":
          var co = ge.countSourceRows();
          if (zi.maxRows === co) {
            return;
          }
          var Xs = En === "insert_row_below" ? "below" : "above";
          $n = $n ?? (En === "insert_row" || Xs === "below" ? co : 0);
          var ka = en.createRow($n, Sr, {
            source: xr,
            mode: Xs
          });
          var Fl = ka.delta;
          var ma = ka.startPhysicalIndex;
          if (Fl) {
            Li.createRow(ma, Sr);
            var El = jr.selectedRange.current();
            var Ac = El?.from;
            var Ic = Ac?.row;
            var Au = ge.toVisualRow(ma);
            if (jr.isSelectedByCorner()) {
              ge.selectAll();
            } else if ((0, re.$K)(Ic) && Ic >= Au) {
              var hd = El.to;
              var pu = hd.row;
              var kd = hd.col;
              var tu = Ac.col;
              if (jr.isSelectedByRowHeader()) {
                tu = -1;
              }
              jr.getSelectedRange().pop();
              jr.setRangeStartOnly(ge._createCellCoords(Ic + Fl, tu), true);
              jr.setRangeEnd(ge._createCellCoords(pu + Fl, kd));
            } else {
              ge._refreshBorders();
            }
          }
          break;
        case "insert_col":
          if (!Jv.has(En)) {
            Jv.add(En);
            (0, Ge.ZK)((0, Ue.e)(kg ||= Fp(["The `", "` action of the `alter()` method is deprecated and will be removed \n                              in the next major release of Handsontable. Use the `insert_col_start` action instead."], ["The \\`", "\\` action of the \\`alter()\\` method is deprecated and will be removed\\x20\n                              in the next major release of Handsontable. Use the \\`insert_col_start\\` action instead."]), En));
          }
        case "insert_col_start":
        case "insert_col_end":
          var Bu = En === "insert_col_end" ? "end" : "start";
          $n = $n ?? (En === "insert_col" || Bu === "end" ? ge.countSourceCols() : 0);
          var Rc = en.createCol($n, Sr, {
            source: xr,
            mode: Bu
          });
          var jd = Rc.delta;
          var Qu = Rc.startPhysicalIndex;
          if (jd) {
            Li.createColumn(Qu, Sr);
            if (Array.isArray(zi.colHeaders)) {
              var Ju = [ge.toVisualColumn(Qu), 0];
              Ju.length += jd;
              Array.prototype.splice.apply(zi.colHeaders, Ju);
            }
            var $u = jr.selectedRange.current();
            var Xu = $u?.from;
            var Um = Xu?.col;
            var $v = ge.toVisualColumn(Qu);
            if (jr.isSelectedByCorner()) {
              ge.selectAll();
            } else if ((0, re.$K)(Um) && Um >= $v) {
              var Ng = $u.to;
              var np = Ng.row;
              var Np = Ng.col;
              var Xv = Xu.row;
              if (jr.isSelectedByColumnHeader()) {
                Xv = -1;
              }
              jr.getSelectedRange().pop();
              jr.setRangeStartOnly(ge._createCellCoords(Xv, Um + jd), true);
              jr.setRangeEnd(ge._createCellCoords(np, Np + jd));
            } else {
              ge._refreshBorders();
            }
          }
          break;
        case "remove_row":
          function Up(Qd) {
            var Ld = 0;
            (0, Oe.Bk)(Qd, function (rp) {
              var Fc = xd(rp, 2);
              var Ql = Fc[0];
              var xu = Fc[1];
              var kc = (0, re.xb)(Ql) ? ge.countRows() - 1 : Math.max(Ql - Ld, 0);
              if (Number.isInteger(Ql)) {
                Ql = Math.max(Ql - Ld, 0);
              }
              if (en.removeRow(Ql, xu, xr)) {
                Li.removeRow(ge.toPhysicalRow(kc), xu);
                var pd = ge.countRows();
                var Jd = zi.fixedRowsTop;
                if (Jd >= kc + 1) {
                  zi.fixedRowsTop -= Math.min(xu, Jd - kc);
                }
                var rh = zi.fixedRowsBottom;
                if (rh && kc >= pd - rh) {
                  zi.fixedRowsBottom -= Math.min(xu, rh);
                }
                Ld += xu;
              }
            });
          }
          if (Array.isArray($n)) {
            Up(ws($n));
          } else {
            Up([[$n, Sr]]);
          }
          vn.adjustRowsAndCols();
          ge._refreshBorders();
          break;
        case "remove_col":
          function ip(Qd) {
            var Ld = 0;
            (0, Oe.Bk)(Qd, function (rp) {
              var Fc = xd(rp, 2);
              var Ql = Fc[0];
              var xu = Fc[1];
              var kc = (0, re.xb)(Ql) ? ge.countCols() - 1 : Math.max(Ql - Ld, 0);
              var Nd = ge.toPhysicalColumn(kc);
              if (Number.isInteger(Ql)) {
                Ql = Math.max(Ql - Ld, 0);
              }
              if (en.removeCol(Ql, xu, xr)) {
                Li.removeColumn(Nd, xu);
                var Jd = zi.fixedColumnsStart;
                if (Jd >= kc + 1) {
                  zi.fixedColumnsStart -= Math.min(xu, Jd - kc);
                }
                if (Array.isArray(zi.colHeaders)) {
                  if (typeof Nd === "undefined") {
                    Nd = -1;
                  }
                  zi.colHeaders.splice(Nd, xu);
                }
                Ld += xu;
              }
            });
          }
          if (Array.isArray($n)) {
            ip(ws($n));
          } else {
            ip([[$n, Sr]]);
          }
          vn.adjustRowsAndCols();
          ge._refreshBorders();
          break;
        default:
          throw new Error(`There is no such action "${En}"`);
      }
      if (!qr) {
        vn.adjustRowsAndCols();
      }
    },
    adjustRowsAndCols: function () {
      var co;
      var En = zi.minRows;
      var $n = zi.minSpareRows;
      var Ti = zi.minCols;
      var Wi = zi.minSpareCols;
      if (ge.countRows() === 0 && ge.countCols() === 0) {
        jr.deselect();
      }
      if (En) {
        var Sr = ge.countRows();
        if (Sr < En) {
          en.createRow(Sr, En - Sr, {
            source: "auto"
          });
        }
      }
      if ($n) {
        var xr = ge.countEmptyRows(true);
        if (xr < $n) {
          var ws = Math.min($n - xr, zi.maxRows - ge.countSourceRows());
          en.createRow(ge.countRows(), ws, {
            source: "auto"
          });
        }
      }
      if (Ti || Wi) {
        co = ge.countEmptyCols(true);
      }
      var Xs = ge.countCols();
      if (Ti && !zi.columns && Xs < Ti) {
        var ka = Ti - Xs;
        co += ka;
        en.createCol(Xs, ka, {
          source: "auto"
        });
      }
      if (Wi && !zi.columns && ge.dataType === "array" && co < Wi) {
        Xs = ge.countCols();
        var ma = Math.min(Wi - co, zi.maxCols - Xs);
        en.createCol(Xs, ma, {
          source: "auto"
        });
      }
      if (jr.isSelected()) {
        var El = ge.countRows();
        var Ac = ge.countCols();
        (0, Oe.Bk)(jr.selectedRange, function (Ic) {
          var Au = false;
          var hd = Ic.from.row;
          var pu = Ic.from.col;
          var kd = Ic.to.row;
          var tu = Ic.to.col;
          if (hd > El - 1) {
            Au = true;
            if (kd > (hd = El - 1)) {
              kd = hd;
            }
          } else if (kd > El - 1) {
            Au = true;
            if (hd > (kd = El - 1)) {
              hd = kd;
            }
          }
          if (pu > Ac - 1) {
            Au = true;
            if (tu > (pu = Ac - 1)) {
              tu = pu;
            }
          } else if (tu > Ac - 1) {
            Au = true;
            if (pu > (tu = Ac - 1)) {
              pu = tu;
            }
          }
          if (Au) {
            ge.selectCell(hd, pu, kd, tu);
          }
        });
      }
      if (ge.view) {
        ge.view.adjustElementsSize();
      }
    },
    populateFromArray: function (En, $n, Ti, Wi, Sr, xr, qr) {
      var ws;
      var co;
      var Xs;
      var ka;
      var Fl = [];
      var ma = {};
      var El = [];
      var Ac = En.row;
      var Ic = En.col;
      if ((co = $n.length) === 0) {
        return false;
      }
      var Au = 0;
      var hd = 0;
      if ((0, rt.Kn)(Ti)) {
        Au = Ti.col - Ic + 1;
        hd = Ti.row - Ac + 1;
      }
      switch (Sr) {
        case "shift_down":
          var pu = (0, Oe.jz)($n);
          var kd = pu.length;
          var tu = Math.max(kd, Au);
          var Bu = ge.getData().slice(Ac);
          var Rc = (0, Oe.jz)(Bu).slice(Ic, Ic + tu);
          for (Xs = 0; Xs < tu; Xs += 1) {
            if (Xs < kd) {
              ws = 0;
              co = pu[Xs].length;
              for (; ws < hd - co; ws += 1) {
                pu[Xs].push(pu[Xs][ws % co]);
              }
              El.push(pu[Xs].concat(Xs < Rc.length ? Rc[Xs] : new Array(Bu.length).fill(null)));
            } else {
              El.push(pu[Xs % kd].concat(Rc[Xs]));
            }
          }
          ge.populateFromArray(Ac, Ic, (0, Oe.jz)(El));
          break;
        case "shift_right":
          var jd = $n.length;
          var Qu = Math.max(jd, hd);
          var Ju = ge.getData().slice(Ac).map(function (Jd) {
            return Jd.slice(Ic);
          });
          for (ws = 0; ws < Qu; ws += 1) {
            if (ws < jd) {
              Xs = 0;
              ka = $n[ws].length;
              for (; Xs < Au - ka; Xs += 1) {
                $n[ws].push($n[ws][Xs % ka]);
              }
              var Xu;
              if (ws < Ju.length) {
                for (var $u = 0; $u < Ju[ws].length; $u += 1) {
                  $n[ws].push(Ju[ws][$u]);
                }
              } else {
                (Xu = $n[ws]).push.apply(Xu, Th(new Array(Ju[0].length).fill(null)));
              }
            } else {
              $n.push($n[ws % co].slice(0, Qu).concat(Ju[ws]));
            }
          }
          ge.populateFromArray(Ac, Ic, $n);
          break;
        default:
          ma.row = En.row;
          ma.col = En.col;
          var Np;
          var Um = {
            row: Ti && En ? Ti.row - En.row + 1 : 1,
            col: Ti && En ? Ti.col - En.col + 1 : 1
          };
          var $v = 0;
          var Ng = 0;
          var np = true;
          function Xv(rh) {
            var Bp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var sp = $n[rh % $n.length];
            if (Bp !== null) {
              return sp[Bp % sp.length];
            } else {
              return sp;
            }
          }
          var Up = $n.length;
          var ip = Ti ? Ti.row - En.row + 1 : 0;
          co = Ti ? ip : Math.max(Up, ip);
          ws = 0;
          for (; ws < co && (!Ti || ma.row <= Ti.row || ip <= Up) && (!!zi.allowInsertRow || ma.row <= ge.countRows() - 1) && ma.row < zi.maxRows; ws++) {
            var Ug = ws - $v;
            var Qd = Xv(Ug).length;
            var Ld = Ti ? Ti.col - En.col + 1 : 0;
            ka = Ti ? Ld : Math.max(Qd, Ld);
            ma.col = En.col;
            Np = ge.getCellMeta(ma.row, ma.col);
            if (Wi !== "CopyPaste.paste" && Wi !== "Autofill.fill" || !Np.skipRowOnPaste) {
              Ng = 0;
              Xs = 0;
              for (; Xs < ka && (!Ti || ma.col <= Ti.col || Ld <= Qd) && (!!zi.allowInsertColumn || ma.col <= ge.countCols() - 1) && ma.col < zi.maxCols; Xs++) {
                Np = ge.getCellMeta(ma.row, ma.col);
                if (Wi !== "CopyPaste.paste" && Wi !== "Autofill.fill" || !Np.skipColumnOnPaste) {
                  if (Np.readOnly && Wi !== "UndoRedo.undo") {
                    ma.col += 1;
                  } else {
                    var rp = Xs - Ng;
                    var Fc = Xv(Ug, rp);
                    var Ql = ge.getDataAtCell(ma.row, ma.col);
                    if (Wi === "Autofill.fill") {
                      var kc = ge.runHooks("beforeAutofillInsidePopulate", {
                        row: Ug,
                        col: rp
                      }, xr, $n, qr, {}, Um);
                      if (kc) {
                        Fc = (0, re.o8)(kc.value) ? Fc : kc.value;
                      }
                    }
                    if (Fc !== null && Jc(Fc) === "object") {
                      if (Array.isArray(Fc) && Ql === null) {
                        Ql = [];
                      }
                      if (Ql === null || Jc(Ql) !== "object") {
                        np = false;
                      } else {
                        var Nd = (0, rt.ie)(Array.isArray(Ql) ? Ql : Ql[0] || Ql);
                        var pd = (0, rt.ie)(Array.isArray(Fc) ? Fc : Fc[0] || Fc);
                        if ((0, rt.Z1)(Nd, pd)) {
                          Fc = (0, rt.I8)(Fc);
                        } else {
                          np = false;
                        }
                      }
                    } else if (Ql !== null && Jc(Ql) === "object") {
                      np = false;
                    }
                    if (np) {
                      Fl.push([ma.row, ma.col, Fc]);
                    }
                    np = true;
                    ma.col += 1;
                  }
                } else {
                  Ng += 1;
                  ma.col += 1;
                  ka += 1;
                }
              }
              ma.row += 1;
            } else {
              $v += 1;
              ma.row += 1;
              co += 1;
            }
          }
          ge.setDataAtCell(Fl, null, null, Wi || "populateFromArray");
      }
    }
  };
  this.init = function () {
    tn.setData(zi.data);
    ge.runHooks("beforeInit");
    if ((0, Re.K1)() || (0, Re.L)()) {
      (0, he.cn)(ge.rootElement, "mobile");
    }
    this.updateSettings(zi, true);
    this.view = new h0(this);
    Vn = ot.ZP.getInstance(ge, zi, jr);
    ge.runHooks("init");
    this.forceFullRender = true;
    this.view.render();
    if (Jc(Qn) === "object") {
      ge.runHooks("afterChange", Qn[0], Qn[1]);
      Qn = false;
    }
    ge.runHooks("afterInit");
  };
  this._createCellCoords = function (cn, En) {
    return ge.view._wt.createCellCoords(cn, En);
  };
  this._createCellRange = function (cn, En, $n) {
    return ge.view._wt.createCellRange(cn, En, $n);
  };
  this.validateCell = function (cn, En, $n, Ti) {
    var xr;
    var Wi = ge.getCellValidator(En);
    function Sr(xr) {
      var qr = arguments.length <= 1 || arguments[1] === undefined || arguments[1];
      if (qr && En.hidden !== true) {
        var ws = En.visualCol;
        var co = En.visualRow;
        var Xs = ge.getCell(co, ws, true);
        if (Xs && Xs.nodeName !== "TH") {
          var ka = ge.rowIndexMapper.getRenderableFromVisualIndex(co);
          var Fl = ge.columnIndexMapper.getRenderableFromVisualIndex(ws);
          ge.view._wt.getSetting("cellRenderer", ka, Fl, Xs);
        }
        $n(xr);
      } else {
        $n(xr);
      }
    }
    if ((0, re.Kj)(Wi)) {
      xr = Wi;
      Wi = function (qr, ws) {
        ws(xr.test(qr));
      };
    }
    if ((0, pe.mf)(Wi)) {
      cn = ge.runHooks("beforeValidate", cn, En.visualRow, En.prop, Ti);
      ge._registerImmediate(function () {
        Wi.call(En, cn, function (xr) {
          if (!!ge) {
            xr = ge.runHooks("afterValidate", xr, cn, En.visualRow, En.prop, Ti);
            En.valid = xr;
            Sr(xr);
            ge.runHooks("postAfterValidate", xr, cn, En.visualRow, En.prop, Ti);
          }
        });
      });
    } else {
      ge._registerImmediate(function () {
        En.valid = true;
        Sr(En.valid, false);
      });
    }
  };
  this.setDataAtCell = function (cn, En, $n, Ti) {
    var qr;
    var ws;
    var co;
    var Wi = bc(cn, En, $n);
    var Sr = [];
    var xr = Ti;
    qr = 0;
    ws = Wi.length;
    for (; qr < ws; qr++) {
      if (Jc(Wi[qr]) !== "object") {
        throw new Error("Method `setDataAtCell` accepts row number or changes array of arrays as its first parameter");
      }
      if (typeof Wi[qr][1] != "number") {
        throw new Error("Method `setDataAtCell` accepts row and column number as its parameters. If you want to use object property name, use method `setDataAtRowProp`");
      }
      co = Wi[qr][1] >= this.countCols() ? Wi[qr][1] : en.colToProp(Wi[qr][1]);
      Sr.push([Wi[qr][0], co, tn.getAtCell(this.toPhysicalRow(Wi[qr][0]), Wi[qr][1]), Wi[qr][2]]);
    }
    if (!xr && Jc(cn) === "object") {
      xr = En;
    }
    ge.runHooks("afterSetDataAtCell", Sr, xr);
    ju(Sr, xr, function () {
      fd(Sr, xr);
    });
  };
  this.setDataAtRowProp = function (cn, En, $n, Ti) {
    var qr;
    var ws;
    var Wi = bc(cn, En, $n);
    var Sr = [];
    var xr = Ti;
    qr = 0;
    ws = Wi.length;
    for (; qr < ws; qr++) {
      Sr.push([Wi[qr][0], Wi[qr][1], tn.getAtCell(this.toPhysicalRow(Wi[qr][0]), Wi[qr][1]), Wi[qr][2]]);
    }
    if (!xr && Jc(cn) === "object") {
      xr = En;
    }
    ge.runHooks("afterSetDataAtRowProp", Sr, xr);
    ju(Sr, xr, function () {
      fd(Sr, xr);
    });
  };
  this.listen = function () {
    if (ge && !ge.isListening()) {
      Y0 = ge.guid;
      ge.runHooks("afterListen");
    }
  };
  this.unlisten = function () {
    if (this.isListening()) {
      Y0 = null;
      ge.runHooks("afterUnlisten");
    }
  };
  this.isListening = function () {
    return Y0 === ge.guid;
  };
  this.destroyEditor = function () {
    var cn = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    var En = arguments.length <= 1 || arguments[1] === undefined || arguments[1];
    ge._refreshBorders(cn, En);
  };
  this.populateFromArray = function (cn, En, $n, Ti, Wi, Sr, xr, qr, ws) {
    if (Jc($n) !== "object" || Jc($n[0]) !== "object") {
      throw new Error("populateFromArray parameter `input` must be an array of arrays");
    }
    var co = typeof Ti == "number" ? ge._createCellCoords(Ti, Wi) : null;
    return vn.populateFromArray(ge._createCellCoords(cn, En), $n, co, Sr, xr, qr, ws);
  };
  this.spliceCol = function (cn, En, $n) {
    for (var Ti, Wi = arguments.length, Sr = new Array(Wi > 3 ? Wi - 3 : 0), xr = 3; xr < Wi; xr++) {
      Sr[xr - 3] = arguments[xr];
    }
    return (Ti = en).spliceCol.apply(Ti, [cn, En, $n].concat(Sr));
  };
  this.spliceRow = function (cn, En, $n) {
    for (var Ti, Wi = arguments.length, Sr = new Array(Wi > 3 ? Wi - 3 : 0), xr = 3; xr < Wi; xr++) {
      Sr[xr - 3] = arguments[xr];
    }
    return (Ti = en).spliceRow.apply(Ti, [cn, En, $n].concat(Sr));
  };
  this.getSelected = function () {
    if (jr.isSelected()) {
      return (0, Oe.Sc)(jr.getSelectedRange(), function (cn) {
        var En = cn.from;
        var $n = cn.to;
        return [En.row, En.col, $n.row, $n.col];
      });
    }
  };
  this.getSelectedLast = function () {
    var En;
    var cn = this.getSelected();
    if (cn && cn.length > 0) {
      En = cn[cn.length - 1];
    }
    return En;
  };
  this.getSelectedRange = function () {
    if (jr.isSelected()) {
      return Array.from(jr.getSelectedRange());
    }
  };
  this.getSelectedRangeLast = function () {
    var En;
    var cn = this.getSelectedRange();
    if (cn && cn.length > 0) {
      En = cn[cn.length - 1];
    }
    return En;
  };
  this.emptySelectedCells = function (cn) {
    var En = this;
    if (jr.isSelected() && this.countRows() !== 0 && this.countCols() !== 0) {
      var $n = [];
      (0, Oe.Bk)(jr.getSelectedRange(), function (Ti) {
        var Wi = Ti.getTopStartCorner();
        var Sr = Ti.getBottomEndCorner();
        (0, It.q4)(Wi.row, Sr.row, function (xr) {
          (0, It.q4)(Wi.col, Sr.col, function (qr) {
            if (!En.getCellMeta(xr, qr).readOnly) {
              $n.push([xr, qr, null]);
            }
          });
        });
      });
      if ($n.length > 0) {
        this.setDataAtCell($n, cn);
      }
    }
  };
  this.isRenderSuspended = function () {
    return this.renderSuspendedCounter > 0;
  };
  this.suspendRender = function () {
    this.renderSuspendedCounter += 1;
  };
  this.resumeRender = function () {
    var cn = this.renderSuspendedCounter - 1;
    this.renderSuspendedCounter = Math.max(cn, 0);
    if (!this.isRenderSuspended() && cn === this.renderSuspendedCounter) {
      if (this.renderCall) {
        this.render();
      } else {
        this._refreshBorders(null);
      }
    }
  };
  this.render = function () {
    if (this.view) {
      this.renderCall = true;
      this.forceFullRender = true;
      if (!this.isRenderSuspended()) {
        Vn.lockEditor();
        this._refreshBorders(null);
        Vn.unlockEditor();
      }
    }
  };
  this.batchRender = function (cn) {
    this.suspendRender();
    var En = cn();
    this.resumeRender();
    return En;
  };
  this.isExecutionSuspended = function () {
    return this.executionSuspendedCounter > 0;
  };
  this.suspendExecution = function () {
    this.executionSuspendedCounter += 1;
    this.columnIndexMapper.suspendOperations();
    this.rowIndexMapper.suspendOperations();
  };
  this.resumeExecution = function () {
    var cn = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    var En = this.executionSuspendedCounter - 1;
    this.executionSuspendedCounter = Math.max(En, 0);
    if (!this.isExecutionSuspended() && En === this.executionSuspendedCounter || cn) {
      this.columnIndexMapper.resumeOperations();
      this.rowIndexMapper.resumeOperations();
    }
  };
  this.batchExecution = function (cn) {
    var En = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    this.suspendExecution();
    var $n = cn();
    this.resumeExecution(En);
    return $n;
  };
  this.batch = function (cn) {
    this.suspendRender();
    this.suspendExecution();
    var En = cn();
    this.resumeExecution();
    this.resumeRender();
    return En;
  };
  this.refreshDimensions = function () {
    if (ge.view) {
      var cn = ge.view.getLastSize();
      var En = cn.width;
      var $n = cn.height;
      var Ti = ge.rootElement.getBoundingClientRect();
      var Wi = Ti.width;
      var Sr = Ti.height;
      var xr = Wi !== En || Sr !== $n;
      if (ge.runHooks("beforeRefreshDimensions", {
        width: En,
        height: $n
      }, {
        width: Wi,
        height: Sr
      }, xr) !== false) {
        if (xr || ge.view._wt.wtOverlays.scrollableElement === ge.rootWindow) {
          ge.view.setLastSize(Wi, Sr);
          ge.render();
        }
        ge.runHooks("afterRefreshDimensions", {
          width: En,
          height: $n
        }, {
          width: Wi,
          height: Sr
        }, xr);
      }
    }
  };
  this.updateData = function (cn, En) {
    var $n = this;
    My(cn, function (Ti) {
      en = Ti;
    }, function (Ti) {
      en = Ti;
      ge.columnIndexMapper.fitToLength($n.getInitialColumnCount());
      ge.rowIndexMapper.fitToLength($n.countSourceRows());
      vn.adjustRowsAndCols();
    }, {
      hotInstance: ge,
      dataMap: en,
      dataSource: tn,
      internalSource: "updateData",
      source: En,
      firstRun: Qn
    });
  };
  this.loadData = function (cn, En) {
    My(cn, function ($n) {
      en = $n;
    }, function () {
      Li.clearCellsCache();
      ge.initIndexMappers();
      vn.adjustRowsAndCols();
      Qn &&= [null, "loadData"];
    }, {
      hotInstance: ge,
      dataMap: en,
      dataSource: tn,
      internalSource: "loadData",
      source: En,
      firstRun: Qn
    });
  };
  this.getInitialColumnCount = function () {
    var cn = zi.columns;
    var En = 0;
    if (Array.isArray(cn)) {
      En = cn.length;
    } else if ((0, pe.mf)(cn)) {
      if (ge.dataType === "array") {
        for (var $n = this.countSourceCols(), Ti = 0; Ti < $n; Ti += 1) {
          if (cn(Ti)) {
            En += 1;
          }
        }
      } else if (ge.dataType === "object" || ge.dataType === "function") {
        En = en.colToPropCache.length;
      }
    } else if ((0, re.$K)(zi.dataSchema)) {
      var Wi = en.getSchema();
      En = Array.isArray(Wi) ? Wi.length : (0, rt.Q8)(Wi);
    } else {
      En = this.countSourceCols();
    }
    return En;
  };
  this.initIndexMappers = function () {
    this.columnIndexMapper.initToLength(this.getInitialColumnCount());
    this.rowIndexMapper.initToLength(this.countSourceRows());
  };
  this.getData = function (cn, En, $n, Ti) {
    if ((0, re.o8)(cn)) {
      return en.getAll();
    } else {
      return en.getRange(ge._createCellCoords(cn, En), ge._createCellCoords($n, Ti), en.DESTINATION_RENDERER);
    }
  };
  this.getCopyableText = function (cn, En, $n, Ti) {
    return en.getCopyableText(ge._createCellCoords(cn, En), ge._createCellCoords($n, Ti));
  };
  this.getCopyableData = function (cn, En) {
    return en.getCopyable(cn, en.colToProp(En));
  };
  this.getSchema = function () {
    return en.getSchema();
  };
  this.updateSettings = function (cn) {
    var Wi;
    var Sr;
    var En = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    var $n = (Qn ? ge.loadData : ge.updateData).bind(this);
    var Ti = false;
    if ((0, re.$K)(cn.rows)) {
      throw new Error("The \"rows\" setting is no longer supported. Do you mean startRows, minRows or maxRows?");
    }
    if ((0, re.$K)(cn.cols)) {
      throw new Error("The \"cols\" setting is no longer supported. Do you mean startCols, minCols or maxCols?");
    }
    if ((0, re.$K)(cn.ganttChart)) {
      throw new Error("Since 8.0.0 the \"ganttChart\" setting is no longer supported.");
    }
    for (Wi in cn) {
      if (Wi !== "data") {
        if (Wi === "language") {
          _l(cn.language);
        } else if (Wi === "className") {
          pc("className", cn.className);
        } else if (Wi === "tableClassName" && ge.table) {
          pc("tableClassName", cn.tableClassName);
          ge.view._wt.wtOverlays.syncOverlayTableClassNames();
        } else if (Pu.Z.getSingleton().isRegistered(Wi) || Pu.Z.getSingleton().isDeprecated(Wi)) {
          if ((0, pe.mf)(cn[Wi]) || Array.isArray(cn[Wi])) {
            cn[Wi].initialHook = true;
            ge.addHook(Wi, cn[Wi]);
          }
        } else if (!En && (0, rt.nr)(cn, Wi)) {
          us[Wi] = cn[Wi];
        }
      }
    }
    if (cn.data === undefined && zi.data === undefined) {
      $n(null, "updateSettings");
    } else if (cn.data !== undefined) {
      $n(cn.data, "updateSettings");
    } else if (cn.columns !== undefined) {
      en.createMap();
      ge.initIndexMappers();
    }
    var xr = ge.countCols();
    var qr = zi.columns;
    if (qr && (0, pe.mf)(qr)) {
      Ti = true;
    }
    if (cn.cell !== undefined || cn.cells !== undefined || cn.columns !== undefined) {
      Li.clearCache();
    }
    if (xr > 0) {
      Wi = 0;
      Sr = 0;
      Wi = 0;
      Sr = 0;
      for (; Wi < xr; Wi++) {
        if (qr) {
          var ws = Ti ? qr(Wi) : qr[Sr];
          if (ws) {
            Li.updateColumnMeta(Sr, ws);
          }
        }
        Sr += 1;
      }
    }
    if ((0, re.$K)(cn.cell)) {
      (0, rt._l)(cn.cell, function (El) {
        ge.setCellMetaObject(El.row, El.col, El);
      });
    }
    ge.runHooks("afterCellMetaReset");
    var co = ge.rootElement.style.height;
    if (co !== "") {
      co = parseInt(ge.rootElement.style.height, 10);
    }
    var Xs = cn.height;
    if ((0, pe.mf)(Xs)) {
      Xs = Xs();
    }
    if (En) {
      var ka = ge.rootElement.getAttribute("style");
      if (ka) {
        ge.rootElement.setAttribute("data-initialstyle", ge.rootElement.getAttribute("style"));
      }
    }
    if (Xs === null) {
      var Fl = ge.rootElement.getAttribute("data-initialstyle");
      if (Fl && (Fl.indexOf("height") > -1 || Fl.indexOf("overflow") > -1)) {
        ge.rootElement.setAttribute("style", Fl);
      } else {
        ge.rootElement.style.height = "";
        ge.rootElement.style.overflow = "";
      }
    } else if (Xs !== undefined) {
      ge.rootElement.style.height = isNaN(Xs) ? `${Xs}` : `${Xs}px`;
      ge.rootElement.style.overflow = "hidden";
    }
    if (typeof cn.width !== "undefined") {
      var ma = cn.width;
      if ((0, pe.mf)(ma)) {
        ma = ma();
      }
      ge.rootElement.style.width = isNaN(ma) ? `${ma}` : `${ma}px`;
    }
    if (!En) {
      if (ge.view) {
        ge.view._wt.wtViewport.resetHasOversizedColumnHeadersMarked();
        ge.view._wt.exportSettingsAsClassNames();
      }
      ge.runHooks("afterUpdateSettings", cn);
    }
    vn.adjustRowsAndCols();
    if (ge.view && !Qn) {
      ge.forceFullRender = true;
      Vn.lockEditor();
      ge._refreshBorders(null);
      ge.view._wt.wtOverlays.adjustElementsSize();
      Vn.unlockEditor();
    }
    if (!En && ge.view && (co === "" || Xs === "" || Xs === undefined) && co !== Xs) {
      ge.view._wt.wtOverlays.updateMainScrollableElements();
    }
  };
  this.getValue = function () {
    var cn = ge.getSelectedLast();
    if (zi.getValue) {
      if ((0, pe.mf)(zi.getValue)) {
        return zi.getValue.call(ge);
      }
      if (cn) {
        return ge.getData()[cn[0][0]][zi.getValue];
      }
    } else if (cn) {
      return ge.getDataAtCell(cn[0], cn[1]);
    }
  };
  this.getSettings = function () {
    return zi;
  };
  this.clear = function () {
    this.selectAll();
    this.emptySelectedCells();
  };
  this.alter = function (cn, En, $n, Ti, Wi) {
    vn.alter(cn, En, $n, Ti, Wi);
  };
  this.getCell = function (cn, En) {
    var $n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    var Ti = En;
    var Wi = cn;
    if (En >= 0) {
      if (this.columnIndexMapper.isHidden(this.toPhysicalColumn(En))) {
        return null;
      }
      Ti = this.columnIndexMapper.getRenderableFromVisualIndex(En);
    }
    if (cn >= 0) {
      if (this.rowIndexMapper.isHidden(this.toPhysicalRow(cn))) {
        return null;
      }
      Wi = this.rowIndexMapper.getRenderableFromVisualIndex(cn);
    }
    if (Wi === null || Ti === null) {
      return null;
    } else {
      return ge.view.getCellAtCoords(ge._createCellCoords(Wi, Ti), $n);
    }
  };
  this.getCoords = function (cn) {
    var En = this.view._wt.wtTable.getCoords(cn);
    if (En === null) {
      return null;
    }
    var $n = En.row;
    var Ti = En.col;
    var Wi = $n;
    var Sr = Ti;
    if ($n >= 0) {
      Wi = this.rowIndexMapper.getVisualFromRenderableIndex($n);
    }
    if (Ti >= 0) {
      Sr = this.columnIndexMapper.getVisualFromRenderableIndex(Ti);
    }
    return ge._createCellCoords(Wi, Sr);
  };
  this.colToProp = function (cn) {
    return en.colToProp(cn);
  };
  this.propToCol = function (cn) {
    return en.propToCol(cn);
  };
  this.toVisualRow = function (cn) {
    return T.rowIndexMapper.getVisualFromPhysicalIndex(cn);
  };
  this.toVisualColumn = function (cn) {
    return T.columnIndexMapper.getVisualFromPhysicalIndex(cn);
  };
  this.toPhysicalRow = function (cn) {
    return T.rowIndexMapper.getPhysicalFromVisualIndex(cn);
  };
  this.toPhysicalColumn = function (cn) {
    return T.columnIndexMapper.getPhysicalFromVisualIndex(cn);
  };
  this.getDataAtCell = function (cn, En) {
    return en.get(cn, en.colToProp(En));
  };
  this.getDataAtRowProp = function (cn, En) {
    return en.get(cn, En);
  };
  this.getDataAtCol = function (cn) {
    var En;
    return (En = []).concat.apply(En, Th(en.getRange(ge._createCellCoords(0, cn), ge._createCellCoords(zi.data.length - 1, cn), en.DESTINATION_RENDERER)));
  };
  this.getDataAtProp = function (cn) {
    var En;
    var $n = en.getRange(ge._createCellCoords(0, en.propToCol(cn)), ge._createCellCoords(zi.data.length - 1, en.propToCol(cn)), en.DESTINATION_RENDERER);
    return (En = []).concat.apply(En, Th($n));
  };
  this.getSourceData = function (cn, En, $n, Ti) {
    if (cn === undefined) {
      return tn.getData();
    } else {
      return tn.getByRange(ge._createCellCoords(cn, En), ge._createCellCoords($n, Ti));
    }
  };
  this.getSourceDataArray = function (cn, En, $n, Ti) {
    if (cn === undefined) {
      return tn.getData(true);
    } else {
      return tn.getByRange(ge._createCellCoords(cn, En), ge._createCellCoords($n, Ti), true);
    }
  };
  this.getSourceDataAtCol = function (cn) {
    return tn.getAtColumn(cn);
  };
  this.setSourceDataAtCell = function (cn, En, $n, Ti) {
    var Wi = bc(cn, En, $n);
    var Sr = this.hasHook("afterSetSourceDataAtCell");
    var xr = [];
    if (Sr) {
      (0, Oe.Bk)(Wi, function (ws) {
        var co = xd(ws, 3);
        var Xs = co[0];
        var ka = co[1];
        var Fl = co[2];
        xr.push([Xs, ka, tn.getAtCell(Xs, ka), Fl]);
      });
    }
    (0, Oe.Bk)(Wi, function (ws) {
      var co = xd(ws, 3);
      tn.setAtCell(co[0], co[1], co[2]);
    });
    if (Sr) {
      this.runHooks("afterSetSourceDataAtCell", xr, Ti);
    }
    this.render();
    var qr = ge.getActiveEditor();
    if (qr && (0, re.$K)(qr.refreshValue)) {
      qr.refreshValue();
    }
  };
  this.getSourceDataAtRow = function (cn) {
    return tn.getAtRow(cn);
  };
  this.getSourceDataAtCell = function (cn, En) {
    return tn.getAtCell(cn, En);
  };
  this.getDataAtRow = function (cn) {
    return en.getRange(ge._createCellCoords(cn, 0), ge._createCellCoords(cn, this.countCols() - 1), en.DESTINATION_RENDERER)[0] || [];
  };
  this.getDataType = function (cn, En, $n, Ti) {
    var Wi = this;
    var Sr = cn === undefined ? [0, 0, this.countRows(), this.countCols()] : [cn, En, $n, Ti];
    var xr = Sr[0];
    var qr = Sr[1];
    var ws = Sr[2];
    var co = Sr[3];
    var Xs = null;
    var ka = null;
    if (ws === undefined) {
      ws = xr;
    }
    if (co === undefined) {
      co = qr;
    }
    var Fl = "mixed";
    (0, It.q4)(Math.max(Math.min(xr, ws), 0), Math.max(xr, ws), function (ma) {
      var El = true;
      (0, It.q4)(Math.max(Math.min(qr, co), 0), Math.max(qr, co), function (Ac) {
        var Ic = Wi.getCellMeta(ma, Ac);
        ka = Ic.type;
        if (Xs) {
          El = Xs === ka;
        } else {
          Xs = ka;
        }
        return El;
      });
      Fl = El ? ka : "mixed";
      return El;
    });
    return Fl;
  };
  this.removeCellMeta = function (cn, En, $n) {
    var Ti = [this.toPhysicalRow(cn), this.toPhysicalColumn(En)];
    var Wi = Ti[0];
    var Sr = Ti[1];
    var xr = Li.getCellMetaKeyValue(Wi, Sr, $n);
    if (ge.runHooks("beforeRemoveCellMeta", cn, En, $n, xr) !== false) {
      Li.removeCellMeta(Wi, Sr, $n);
      ge.runHooks("afterRemoveCellMeta", cn, En, $n, xr);
    }
    xr = null;
  };
  this.spliceCellsMeta = function (cn) {
    for (var En = this, $n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, Ti = arguments.length, Wi = new Array(Ti > 2 ? Ti - 2 : 0), Sr = 2; Sr < Ti; Sr++) {
      Wi[Sr - 2] = arguments[Sr];
    }
    if (Wi.length > 0 && !Array.isArray(Wi[0])) {
      throw new Error("The 3rd argument (cellMetaRows) has to be passed as an array of cell meta objects array.");
    }
    if ($n > 0) {
      Li.removeRow(this.toPhysicalRow(cn), $n);
    }
    if (Wi.length > 0) {
      (0, Oe.Bk)(Wi.reverse(), function (xr) {
        Li.createRow(En.toPhysicalRow(cn));
        (0, Oe.Bk)(xr, function (qr, ws) {
          return En.setCellMetaObject(cn, ws, qr);
        });
      });
    }
    ge.render();
  };
  this.setCellMetaObject = function (cn, En, $n) {
    var Ti = this;
    if (Jc($n) === "object") {
      (0, rt._l)($n, function (Wi, Sr) {
        Ti.setCellMeta(cn, En, Sr, Wi);
      });
    }
  };
  this.setCellMeta = function (cn, En, $n, Ti) {
    if (ge.runHooks("beforeSetCellMeta", cn, En, $n, Ti) !== false) {
      var Sr = cn;
      var xr = En;
      if (cn < this.countRows()) {
        Sr = this.toPhysicalRow(cn);
      }
      if (En < this.countCols()) {
        xr = this.toPhysicalColumn(En);
      }
      Li.setCellMeta(Sr, xr, $n, Ti);
      ge.runHooks("afterSetCellMeta", cn, En, $n, Ti);
    }
  };
  this.getCellsMeta = function () {
    return Li.getCellsMeta();
  };
  this.getCellMeta = function (cn, En) {
    var $n = this.toPhysicalRow(cn);
    var Ti = this.toPhysicalColumn(En);
    if ($n === null) {
      $n = cn;
    }
    if (Ti === null) {
      Ti = En;
    }
    return Li.getCellMeta($n, Ti, {
      visualRow: cn,
      visualColumn: En
    });
  };
  this.getCellMetaAtRow = function (cn) {
    return Li.getCellsMetaAtRow(cn);
  };
  this.isColumnModificationAllowed = function () {
    return ge.dataType !== "object" && !zi.columns;
  };
  var fu = fh("renderer");
  this.getCellRenderer = function (cn, En) {
    return (0, Be.Bp)(fu.call(this, cn, En));
  };
  this.getCellEditor = fh("editor");
  var pf = fh("validator");
  this.getCellValidator = function (cn, En) {
    var $n = pf.call(this, cn, En);
    if (typeof $n == "string") {
      $n = (0, De.Te)($n);
    }
    return $n;
  };
  this.validateCells = function (cn) {
    this._validateCells(cn);
  };
  this.validateRows = function (cn, En) {
    if (!Array.isArray(cn)) {
      throw new Error("validateRows parameter `rows` must be an array");
    }
    this._validateCells(En, cn);
  };
  this.validateColumns = function (cn, En) {
    if (!Array.isArray(cn)) {
      throw new Error("validateColumns parameter `columns` must be an array");
    }
    this._validateCells(En, undefined, cn);
  };
  this._validateCells = function (cn, En, $n) {
    var Ti = new Lu();
    if (cn) {
      Ti.onQueueEmpty = cn;
    }
    for (var Wi = ge.countRows() - 1; Wi >= 0;) {
      if (En === undefined || En.indexOf(Wi) !== -1) {
        for (var Sr = ge.countCols() - 1; Sr >= 0;) {
          if ($n === undefined || $n.indexOf(Sr) !== -1) {
            Ti.addValidatorToQueue();
            ge.validateCell(ge.getDataAtCell(Wi, Sr), ge.getCellMeta(Wi, Sr), function (xr) {
              if (typeof xr != "boolean") {
                throw new Error("Validation error: result is not boolean");
              }
              if (xr === false) {
                Ti.valid = false;
              }
              Ti.removeValidatorFormQueue();
            }, "validateCells");
            Sr -= 1;
          } else {
            Sr -= 1;
          }
        }
        Wi -= 1;
      } else {
        Wi -= 1;
      }
    }
    Ti.checkIfQueueIsEmpty();
  };
  this.getRowHeader = function (cn) {
    var En = zi.rowHeaders;
    var $n = cn;
    if ($n !== undefined) {
      $n = ge.runHooks("modifyRowHeader", $n);
    }
    if ($n === undefined) {
      En = [];
      (0, It.q4)(ge.countRows() - 1, function (Ti) {
        En.push(ge.getRowHeader(Ti));
      });
    } else if (Array.isArray(En) && En[$n] !== undefined) {
      En = En[$n];
    } else if ((0, pe.mf)(En)) {
      En = En($n);
    } else if (En && typeof En != "string" && typeof En != "number") {
      En = $n + 1;
    }
    return En;
  };
  this.hasRowHeaders = function () {
    return !!zi.rowHeaders;
  };
  this.hasColHeaders = function () {
    if (zi.colHeaders != null) {
      return !!zi.colHeaders;
    }
    for (var cn = 0, En = ge.countCols(); cn < En; cn++) {
      if (ge.getColHeader(cn)) {
        return true;
      }
    }
    return false;
  };
  this.getColHeader = function (cn) {
    var En = ge.runHooks("modifyColHeader", cn);
    var $n = zi.colHeaders;
    if (En === undefined) {
      for (var Ti = [], Wi = ge.countCols(), Sr = 0; Sr < Wi; Sr++) {
        Ti.push(ge.getColHeader(Sr));
      }
      $n = Ti;
    } else {
      var qr = ge.toPhysicalColumn(En);
      var ws = function (Xs) {
        for (var ka = [], Fl = ge.countCols(), ma = 0; ma < Fl; ma++) {
          if ((0, pe.mf)(zi.columns) && zi.columns(ma)) {
            ka.push(ma);
          }
        }
        return ka[Xs];
      }(qr);
      if (zi.colHeaders === false) {
        $n = null;
      } else if (zi.columns && (0, pe.mf)(zi.columns) && zi.columns(ws) && zi.columns(ws).title) {
        $n = zi.columns(ws).title;
      } else if (zi.columns && zi.columns[qr] && zi.columns[qr].title) {
        $n = zi.columns[qr].title;
      } else if (Array.isArray(zi.colHeaders) && zi.colHeaders[qr] !== undefined) {
        $n = zi.colHeaders[qr];
      } else if ((0, pe.mf)(zi.colHeaders)) {
        $n = zi.colHeaders(qr);
      } else if (zi.colHeaders && typeof zi.colHeaders != "string" && typeof zi.colHeaders != "number") {
        $n = Ph(En);
      }
    }
    return $n;
  };
  this._getColWidthFromSettings = function (cn) {
    var En;
    if (cn >= 0) {
      En = ge.getCellMeta(0, cn).width;
    }
    if (En === undefined || En === zi.width) {
      En = zi.colWidths;
    }
    if (En != null) {
      switch (Jc(En)) {
        case "object":
          En = En[cn];
          break;
        case "function":
          En = En(cn);
      }
      if (typeof En == "string") {
        En = parseInt(En, 10);
      }
    }
    return En;
  };
  this.getColWidth = function (cn) {
    var En = ge._getColWidthFromSettings(cn);
    if ((En = ge.runHooks("modifyColWidth", En, cn)) === undefined) {
      En = Wg.Z.DEFAULT_WIDTH;
    }
    return En;
  };
  this._getRowHeightFromSettings = function (cn) {
    var En = zi.rowHeights;
    if (En != null) {
      switch (Jc(En)) {
        case "object":
          En = En[cn];
          break;
        case "function":
          En = En(cn);
      }
      if (typeof En == "string") {
        En = parseInt(En, 10);
      }
    }
    return En;
  };
  this.getRowHeight = function (cn) {
    var En = ge._getRowHeightFromSettings(cn);
    return ge.runHooks("modifyRowHeight", En, cn);
  };
  this.countSourceRows = function () {
    return tn.countRows();
  };
  this.countSourceCols = function () {
    return tn.countFirstRowKeys();
  };
  this.countRows = function () {
    return en.getLength();
  };
  this.countCols = function () {
    var cn = zi.maxCols;
    var En = this.columnIndexMapper.getNotTrimmedIndexesLength();
    return Math.min(cn, En);
  };
  this.countRenderedRows = function () {
    if (ge.view._wt.drawn) {
      return ge.view._wt.wtTable.getRenderedRowsCount();
    } else {
      return -1;
    }
  };
  this.countVisibleRows = function () {
    if (ge.view._wt.drawn) {
      return ge.view._wt.wtTable.getVisibleRowsCount();
    } else {
      return -1;
    }
  };
  this.countRenderedCols = function () {
    if (ge.view._wt.drawn) {
      return ge.view._wt.wtTable.getRenderedColumnsCount();
    } else {
      return -1;
    }
  };
  this.countVisibleCols = function () {
    if (ge.view._wt.drawn) {
      return ge.view._wt.wtTable.getVisibleColumnsCount();
    } else {
      return -1;
    }
  };
  this.countEmptyRows = function () {
    var cn = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    var En = 0;
    (0, It.yh)(ge.countRows() - 1, function ($n) {
      if (ge.isEmptyRow($n)) {
        En += 1;
      } else if (cn === true) {
        return false;
      }
    });
    return En;
  };
  this.countEmptyCols = function () {
    var cn = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    var En = 0;
    (0, It.yh)(ge.countCols() - 1, function ($n) {
      if (ge.isEmptyCol($n)) {
        En += 1;
      } else if (cn === true) {
        return false;
      }
    });
    return En;
  };
  this.isEmptyRow = function (cn) {
    return zi.isEmptyRow.call(ge, cn);
  };
  this.isEmptyCol = function (cn) {
    return zi.isEmptyCol.call(ge, cn);
  };
  this.selectCell = function (cn, En, $n, Ti) {
    var Wi = arguments.length <= 4 || arguments[4] === undefined || arguments[4];
    var Sr = arguments.length <= 5 || arguments[5] === undefined || arguments[5];
    return !(0, re.o8)(cn) && !(0, re.o8)(En) && this.selectCells([[cn, En, $n, Ti]], Wi, Sr);
  };
  this.selectCells = function () {
    var cn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[]];
    var En = arguments.length <= 1 || arguments[1] === undefined || arguments[1];
    var $n = arguments.length <= 2 || arguments[2] === undefined || arguments[2];
    if (En === false) {
      Se = true;
    }
    var Ti = jr.selectCells(cn);
    if (Ti && $n) {
      ge.listen();
    }
    Se = false;
    return Ti;
  };
  this.selectColumns = function (cn) {
    var En = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cn;
    return jr.selectColumns(cn, En);
  };
  this.selectRows = function (cn) {
    var En = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cn;
    return jr.selectRows(cn, En);
  };
  this.deselectCell = function () {
    jr.deselect();
  };
  this.selectAll = function () {
    var cn = arguments.length <= 0 || arguments[0] === undefined || arguments[0];
    var En = cn && this.hasRowHeaders();
    var $n = cn && this.hasColHeaders();
    Se = true;
    jr.selectAll(En, $n);
    Se = false;
  };
  function Nu(En, $n) {
    return En.getNearestNotHiddenIndex($n, 1, true);
  }
  function Uu(cn) {
    return function () {
      throw new Error(`The "${cn}" method cannot be called because this Handsontable instance has been destroyed`);
    };
  }
  this.scrollViewportTo = function (cn, En) {
    var $n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    var Ti = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    var Wi = arguments.length <= 4 || arguments[4] === undefined || arguments[4];
    var Sr = !$n;
    var xr = !Ti;
    var qr = cn;
    var ws = En;
    if (Wi) {
      var co = Number.isInteger(cn);
      var Xs = Number.isInteger(En);
      var ka = co ? Nu(this.rowIndexMapper, cn) : undefined;
      var Fl = Xs ? Nu(this.columnIndexMapper, En) : undefined;
      if (ka === null || Fl === null) {
        return false;
      }
      qr = co ? ge.rowIndexMapper.getRenderableFromVisualIndex(ka) : undefined;
      ws = Xs ? ge.columnIndexMapper.getRenderableFromVisualIndex(Fl) : undefined;
    }
    var ma = Number.isInteger(qr);
    var El = Number.isInteger(ws);
    if (ma && El) {
      return ge.view.scrollViewport(ge._createCellCoords(qr, ws), Sr, Ti, $n, xr);
    } else if (ma && El === false) {
      return ge.view.scrollViewportVertically(qr, Sr, $n);
    } else {
      return !!El && ma === false && ge.view.scrollViewportHorizontally(ws, Ti, xr);
    }
  };
  this.destroy = function () {
    ge._clearTimeouts();
    ge._clearImmediates();
    if (ge.view) {
      ge.view.destroy();
    }
    if (tn) {
      tn.destroy();
    }
    tn = null;
    this.getShortcutManager().destroy();
    Li.clearCache();
    if ((0, Td._v)(ge)) {
      var cn = this.rootDocument.querySelector("#hot-display-license-info");
      if (cn) {
        cn.parentNode.removeChild(cn);
      }
    }
    (0, he.cS)(ge.rootElement);
    Dt.destroy();
    if (Vn) {
      Vn.destroy();
    }
    ge.batchExecution(function () {
      ge.rowIndexMapper.unregisterAll();
      ge.columnIndexMapper.unregisterAll();
      Vo.getItems().forEach(function (En) {
        xd(En, 2)[1].destroy();
      });
      Vo.clear();
      ge.runHooks("afterDestroy");
    }, true);
    Pu.Z.getSingleton().destroy(ge);
    (0, rt._l)(ge, function (En, $n, Ti) {
      if ((0, pe.mf)(En)) {
        Ti[$n] = Uu($n);
      } else if ($n !== "guid") {
        Ti[$n] = null;
      }
    });
    ge.isDestroyed = true;
    if (en) {
      en.destroy();
    }
    ge.rowIndexMapper = null;
    ge.columnIndexMapper = null;
    en = null;
    vn = null;
    jr = null;
    Vn = null;
    ge = null;
  };
  this.getActiveEditor = function () {
    return Vn.getActiveEditor();
  };
  this.getPlugin = function (cn) {
    var En = (0, Qe.ct)(cn);
    if (En === "UndoRedo") {
      return this.undoRedo;
    } else {
      return Vo.getItem(En);
    }
  };
  this.getPluginName = function (cn) {
    if (cn === this.undoRedo) {
      return this.undoRedo.constructor.PLUGIN_KEY;
    } else {
      return Vo.getId(cn);
    }
  };
  this.getInstance = function () {
    return ge;
  };
  this.addHook = function (cn, En) {
    Pu.Z.getSingleton().add(cn, En, ge);
  };
  this.hasHook = function (cn) {
    return Pu.Z.getSingleton().has(cn, ge) || Pu.Z.getSingleton().has(cn);
  };
  this.addHookOnce = function (cn, En) {
    Pu.Z.getSingleton().once(cn, En, ge);
  };
  this.removeHook = function (cn, En) {
    Pu.Z.getSingleton().remove(cn, En, ge);
  };
  this.runHooks = function (cn, En, $n, Ti, Wi, Sr, xr) {
    return Pu.Z.getSingleton().run(ge, cn, En, $n, Ti, Wi, Sr, xr);
  };
  this.getTranslatedPhrase = function (cn, En) {
    return (0, ag.vk)(zi.language, cn, En);
  };
  this.toHTML = function () {
    return (0, Ee.vo)(T);
  };
  this.toTableElement = function () {
    var cn = T.rootDocument.createElement("div");
    cn.insertAdjacentHTML("afterbegin", (0, Ee.vo)(T));
    return cn.firstElementChild;
  };
  this.timeouts = [];
  this._registerTimeout = function (cn) {
    var En = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var $n = cn;
    if (typeof $n == "function") {
      $n = setTimeout($n, En);
    }
    this.timeouts.push($n);
  };
  this._clearTimeouts = function () {
    (0, Oe.Bk)(this.timeouts, function (cn) {
      clearTimeout(cn);
    });
  };
  this.immediates = [];
  this._registerImmediate = function (cn) {
    this.immediates.push(setImmediate(cn));
  };
  this._clearImmediates = function () {
    (0, Oe.Bk)(this.immediates, function (cn) {
      clearImmediate(cn);
    });
  };
  this._refreshBorders = function () {
    var cn = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    var En = arguments.length <= 1 || arguments[1] === undefined || arguments[1];
    Vn.destroyEditor(cn);
    ge.view.render();
    if (En && jr.isSelected()) {
      Vn.prepareEditor();
    }
  };
  this.isRtl = function () {
    return ge.rootWindow.getComputedStyle(ge.rootElement).direction === "rtl";
  };
  this.isLtr = function () {
    return !ge.isRtl();
  };
  this.getDirectionFactor = function () {
    if (ge.isLtr()) {
      return 1;
    } else {
      return -1;
    }
  };
  var hu = Fg({
    handleEvent: function (En) {
      return ge.isListening() && En?.key !== undefined;
    },
    beforeKeyDown: function (En) {
      return T.runHooks("beforeKeyDown", En);
    },
    afterKeyDown: function (En) {
      if (!T.isDestroyed) {
        ge.runHooks("afterDocumentKeyDown", En);
      }
    },
    ownerWindow: this.rootWindow
  });
  this.getShortcutManager = function () {
    return hu;
  };
  var Lp = hu.addContext("grid");
  var tp = {
    runOnlyIf: function () {
      return (0, re.$K)(ge.getSelected()) && ge.countRenderedRows() > 0 && ge.countRenderedCols() > 0;
    },
    group: Ry
  };
  hu.setActiveContextName("grid");
  Lp.addShortcuts([{
    keys: [["Control/Meta", "A"]],
    callback: function () {
      ge.selectAll();
    }
  }, {
    keys: [["Control/Meta", "Enter"]],
    callback: function () {
      for (var En = ge.getSelectedRange(), $n = En[En.length - 1].highlight, Ti = $n.row, Wi = $n.col, Sr = ge.getDataAtCell(Ti, Wi), xr = new Map(), qr = 0; qr < En.length; qr++) {
        En[qr].forAll(function (ws, co) {
          if (ws >= 0 && co >= 0 && (ws !== Ti || co !== Wi)) {
            if (!ge.getCellMeta(ws, co).readOnly) {
              xr.set(`${ws}x${co}`, [ws, co, Sr]);
            }
          }
        });
      }
      ge.setDataAtCell(Array.from(xr.values()));
    },
    runOnlyIf: function () {
      return ge.getSelectedRangeLast().getCellsCount() > 1;
    }
  }, {
    keys: [["ArrowUp"]],
    callback: function () {
      jr.transformStart(-1, 0);
    }
  }, {
    keys: [["ArrowUp", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      jr.setRangeStart(ge._createCellCoords(ge.rowIndexMapper.getNearestNotHiddenIndex(0, 1), ge.getSelectedRangeLast().highlight.col));
    }
  }, {
    keys: [["ArrowUp", "Shift"]],
    callback: function () {
      jr.transformEnd(-1, 0);
    }
  }, {
    keys: [["ArrowUp", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En = ge.getSelectedRangeLast();
      var $n = En.from;
      var Ti = En.to;
      var Wi = ge.rowIndexMapper.getNearestNotHiddenIndex(0, 1);
      jr.setRangeStart($n.clone());
      jr.setRangeEnd(ge._createCellCoords(Wi, Ti.col));
    },
    runOnlyIf: function () {
      return !ge.selection.isSelectedByCorner() && !ge.selection.isSelectedByColumnHeader();
    }
  }, {
    keys: [["ArrowDown"]],
    callback: function () {
      jr.transformStart(1, 0);
    }
  }, {
    keys: [["ArrowDown", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      jr.setRangeStart(ge._createCellCoords(ge.rowIndexMapper.getNearestNotHiddenIndex(ge.countRows() - 1, -1), ge.getSelectedRangeLast().highlight.col));
    }
  }, {
    keys: [["ArrowDown", "Shift"]],
    callback: function () {
      jr.transformEnd(1, 0);
    }
  }, {
    keys: [["ArrowDown", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En = ge.getSelectedRangeLast();
      var $n = En.from;
      var Ti = En.to;
      var Wi = ge.rowIndexMapper.getNearestNotHiddenIndex(ge.countRows() - 1, -1);
      jr.setRangeStart($n.clone());
      jr.setRangeEnd(ge._createCellCoords(Wi, Ti.col));
    },
    runOnlyIf: function () {
      return !ge.selection.isSelectedByCorner() && !ge.selection.isSelectedByColumnHeader();
    }
  }, {
    keys: [["ArrowLeft"]],
    callback: function () {
      jr.transformStart(0, ge.getDirectionFactor() * -1);
    }
  }, {
    keys: [["ArrowLeft", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En;
      var $n = ge.getSelectedRangeLast().highlight.row;
      var Ti = (En = ge.columnIndexMapper).getNearestNotHiddenIndex.apply(En, Th(ge.isRtl() ? [ge.countCols() - 1, -1] : [0, 1]));
      jr.setRangeStart(ge._createCellCoords($n, Ti));
    }
  }, {
    keys: [["ArrowLeft", "Shift"]],
    callback: function () {
      jr.transformEnd(0, ge.getDirectionFactor() * -1);
    }
  }, {
    keys: [["ArrowLeft", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En;
      var $n = ge.getSelectedRangeLast();
      var Ti = $n.from;
      var Wi = $n.to;
      var Sr = (En = ge.columnIndexMapper).getNearestNotHiddenIndex.apply(En, Th(ge.isRtl() ? [ge.countCols() - 1, -1] : [0, 1]));
      jr.setRangeStart(Ti.clone());
      jr.setRangeEnd(ge._createCellCoords(Wi.row, Sr));
    },
    runOnlyIf: function () {
      return !ge.selection.isSelectedByCorner() && !ge.selection.isSelectedByRowHeader();
    }
  }, {
    keys: [["ArrowRight"]],
    callback: function () {
      jr.transformStart(0, ge.getDirectionFactor());
    }
  }, {
    keys: [["ArrowRight", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En;
      var $n = ge.getSelectedRangeLast().highlight.row;
      var Ti = (En = ge.columnIndexMapper).getNearestNotHiddenIndex.apply(En, Th(ge.isRtl() ? [0, 1] : [ge.countCols() - 1, -1]));
      jr.setRangeStart(ge._createCellCoords($n, Ti));
    }
  }, {
    keys: [["ArrowRight", "Shift"]],
    callback: function () {
      jr.transformEnd(0, ge.getDirectionFactor());
    }
  }, {
    keys: [["ArrowRight", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En;
      var $n = ge.getSelectedRangeLast();
      var Ti = $n.from;
      var Wi = $n.to;
      var Sr = (En = ge.columnIndexMapper).getNearestNotHiddenIndex.apply(En, Th(ge.isRtl() ? [0, 1] : [ge.countCols() - 1, -1]));
      jr.setRangeStart(Ti.clone());
      jr.setRangeEnd(ge._createCellCoords(Wi.row, Sr));
    },
    runOnlyIf: function () {
      return !ge.selection.isSelectedByCorner() && !ge.selection.isSelectedByRowHeader();
    }
  }, {
    keys: [["Home"]],
    captureCtrl: true,
    callback: function () {
      var En = parseInt(ge.getSettings().fixedColumnsStart, 10);
      var $n = ge.getSelectedRangeLast().highlight.row;
      var Ti = ge.columnIndexMapper.getNearestNotHiddenIndex(En, 1);
      jr.setRangeStart(ge._createCellCoords($n, Ti));
    },
    runOnlyIf: function () {
      return ge.view.isMainTableNotFullyCoveredByOverlays();
    }
  }, {
    keys: [["Home", "Shift"]],
    callback: function () {
      jr.setRangeEnd(ge._createCellCoords(jr.selectedRange.current().from.row, ge.columnIndexMapper.getNearestNotHiddenIndex(0, 1)));
    }
  }, {
    keys: [["Home", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En = parseInt(ge.getSettings().fixedRowsTop, 10);
      var $n = parseInt(ge.getSettings().fixedColumnsStart, 10);
      var Ti = ge.rowIndexMapper.getNearestNotHiddenIndex(En, 1);
      var Wi = ge.columnIndexMapper.getNearestNotHiddenIndex($n, 1);
      jr.setRangeStart(ge._createCellCoords(Ti, Wi));
    },
    runOnlyIf: function () {
      return ge.view.isMainTableNotFullyCoveredByOverlays();
    }
  }, {
    keys: [["End"]],
    captureCtrl: true,
    callback: function () {
      jr.setRangeStart(ge._createCellCoords(ge.getSelectedRangeLast().highlight.row, ge.columnIndexMapper.getNearestNotHiddenIndex(ge.countCols() - 1, -1)));
    },
    runOnlyIf: function () {
      return ge.view.isMainTableNotFullyCoveredByOverlays();
    }
  }, {
    keys: [["End", "Shift"]],
    callback: function () {
      jr.setRangeEnd(ge._createCellCoords(jr.selectedRange.current().from.row, ge.columnIndexMapper.getNearestNotHiddenIndex(ge.countCols() - 1, -1)));
    }
  }, {
    keys: [["End", "Control/Meta"]],
    captureCtrl: true,
    callback: function () {
      var En = parseInt(ge.getSettings().fixedRowsBottom, 10);
      var $n = ge.rowIndexMapper.getNearestNotHiddenIndex(ge.countRows() - En - 1, -1);
      var Ti = ge.columnIndexMapper.getNearestNotHiddenIndex(ge.countCols() - 1, -1);
      jr.setRangeStart(ge._createCellCoords($n, Ti));
    },
    runOnlyIf: function () {
      return ge.view.isMainTableNotFullyCoveredByOverlays();
    }
  }, {
    keys: [["PageUp"]],
    callback: function () {
      jr.transformStart(-ge.countVisibleRows(), 0);
    }
  }, {
    keys: [["PageUp", "Shift"]],
    callback: function () {
      var $n = ge.getSelectedRangeLast().to;
      var Ti = Math.max($n.row - ge.countVisibleRows(), 0);
      var Wi = ge.rowIndexMapper.getNearestNotHiddenIndex(Ti, 1);
      if (Wi !== null) {
        var Sr = ge._createCellCoords(Wi, $n.col);
        var xr = $n.row - ge.view.getFirstFullyVisibleRow();
        var qr = Math.max(Sr.row - xr, 0);
        jr.setRangeEnd(Sr);
        ge.scrollViewportTo(qr);
      }
    }
  }, {
    keys: [["PageDown"]],
    callback: function () {
      jr.transformStart(ge.countVisibleRows(), 0);
    }
  }, {
    keys: [["PageDown", "Shift"]],
    callback: function () {
      var $n = ge.getSelectedRangeLast().to;
      var Ti = Math.min($n.row + ge.countVisibleRows(), ge.countRows() - 1);
      var Wi = ge.rowIndexMapper.getNearestNotHiddenIndex(Ti, -1);
      if (Wi !== null) {
        var Sr = ge._createCellCoords(Wi, $n.col);
        var xr = $n.row - ge.view.getFirstFullyVisibleRow();
        var qr = Math.min(Sr.row - xr, ge.countRows() - 1);
        jr.setRangeEnd(Sr);
        ge.scrollViewportTo(qr);
      }
    }
  }, {
    keys: [["Tab"]],
    callback: function (En) {
      var $n = typeof zi.tabMoves == "function" ? zi.tabMoves(En) : zi.tabMoves;
      jr.transformStart($n.row, $n.col, true);
    }
  }, {
    keys: [["Shift", "Tab"]],
    callback: function (En) {
      var $n = typeof zi.tabMoves == "function" ? zi.tabMoves(En) : zi.tabMoves;
      jr.transformStart(-$n.row, -$n.col);
    }
  }], tp);
  (0, ke.a9)().forEach(function (cn) {
    var En = (0, ke.s3)(cn);
    Vo.addItem(cn, new En(T));
  });
  Pu.Z.getSingleton().run(ge, "construct");
}