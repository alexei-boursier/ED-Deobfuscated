require("66992");
require("41539");
require("78783");
require("4129");
require("33948");
import * as v from "30076";
function C(O, x) {
  if (!(O instanceof x)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function w(O, x) {
  for (var U = 0; U < x.length; U++) {
    var B = x[U];
    B.enumerable = B.enumerable || false;
    B.configurable = true;
    if ("value" in B) {
      B.writable = true;
    }
    Object.defineProperty(O, B.key, B);
  }
}
var L = new WeakMap();
export const Z = function () {
  function O() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var U = x.viewportSize;
    var B = x.scrollOffset;
    var F = x.totalItems;
    var Z = x.itemSizeFn;
    var X = x.overrideFn;
    var le = x.calculationType;
    var fe = x.stretchMode;
    var q = x.stretchingItemWidthFn;
    var j = q === undefined ? function (G) {
      return G;
    } : q;
    C(this, O);
    L.set(this, {
      viewportWidth: U,
      scrollOffset: B,
      totalColumns: F,
      columnWidthFn: Z,
      overrideFn: X,
      calculationType: le,
      stretchingColumnWidthFn: j
    });
    this.count = 0;
    this.startColumn = null;
    this.endColumn = null;
    this.startPosition = null;
    this.stretchAllRatio = 0;
    this.stretchLastWidth = 0;
    this.stretch = fe;
    this.totalTargetWidth = 0;
    this.needVerifyLastColumnWidth = true;
    this.stretchAllColumnsWidth = [];
    this.calculate();
  }
  (function S(O, x, U) {
    if (x) {
      w(O.prototype, x);
    }
    if (U) {
      w(O, U);
    }
    Object.defineProperty(O, "prototype", {
      writable: false
    });
  })(O, [{
    key: "calculate",
    value: function () {
      for (var Z, U = 0, B = true, F = [], X = L.get(this), le = X.calculationType, fe = X.overrideFn, q = X.scrollOffset, j = X.totalColumns, G = X.viewportWidth, se = 0; se < j; se++) {
        Z = this._getColumnWidth(se);
        if (U <= q && le !== v.vp) {
          this.startColumn = se;
        }
        if (U >= q && U + (le === v.vp ? Z : 0) <= q + (q > 0 ? G + 1 : G)) {
          if (this.startColumn == null) {
            this.startColumn = se;
          }
          this.endColumn = se;
        }
        F.push(U);
        U += Z;
        if (le !== v.vp) {
          this.endColumn = se;
        }
        if (U >= q + G) {
          B = false;
          break;
        }
      }
      if (this.endColumn === j - 1 && B) {
        for (this.startColumn = this.endColumn; this.startColumn > 0;) {
          var Pe = F[this.endColumn] + Z - F[this.startColumn - 1];
          if (Pe <= G || le !== v.vp) {
            this.startColumn -= 1;
          }
          if (Pe > G) {
            break;
          }
        }
      }
      if (le === v.Ii && this.startColumn !== null && fe) {
        fe(this);
      }
      this.startPosition = F[this.startColumn];
      if (this.startPosition === undefined) {
        this.startPosition = null;
      }
      if (j < this.endColumn) {
        this.endColumn = j - 1;
      }
      if (this.startColumn !== null) {
        this.count = this.endColumn - this.startColumn + 1;
      }
    }
  }, {
    key: "refreshStretching",
    value: function (U) {
      if (this.stretch !== "none") {
        var B = U;
        this.totalTargetWidth = B;
        for (var F = L.get(this), Z = F.totalColumns, X = 0, le = 0; le < Z; le++) {
          var fe = this._getColumnWidth(le);
          var q = F.stretchingColumnWidthFn(undefined, le);
          if (typeof q == "number") {
            B -= q;
          } else {
            X += fe;
          }
        }
        var j = B - X;
        if (this.stretch === "all" && j > 0) {
          this.stretchAllRatio = B / X;
          this.stretchAllColumnsWidth = [];
          this.needVerifyLastColumnWidth = true;
        } else if (this.stretch === "last" && B !== Infinity) {
          var G = this._getColumnWidth(Z - 1);
          var se = j + G;
          this.stretchLastWidth = se >= 0 ? se : G;
        }
      }
    }
  }, {
    key: "getStretchedColumnWidth",
    value: function (U, B) {
      var F = null;
      if (this.stretch === "all" && this.stretchAllRatio !== 0) {
        F = this._getStretchedAllColumnWidth(U, B);
      } else if (this.stretch === "last" && this.stretchLastWidth !== 0) {
        F = this._getStretchedLastColumnWidth(U);
      }
      return F;
    }
  }, {
    key: "_getStretchedAllColumnWidth",
    value: function (U, B) {
      var F = 0;
      var Z = L.get(this);
      var X = Z.totalColumns;
      if (!this.stretchAllColumnsWidth[U]) {
        var le = Math.round(B * this.stretchAllRatio);
        var fe = Z.stretchingColumnWidthFn(le, U);
        this.stretchAllColumnsWidth[U] = fe === undefined ? le : isNaN(fe) ? this._getColumnWidth(U) : fe;
      }
      if (this.stretchAllColumnsWidth.length === X && this.needVerifyLastColumnWidth) {
        this.needVerifyLastColumnWidth = false;
        for (var q = 0; q < this.stretchAllColumnsWidth.length; q++) {
          F += this.stretchAllColumnsWidth[q];
        }
        if (F !== this.totalTargetWidth) {
          this.stretchAllColumnsWidth[this.stretchAllColumnsWidth.length - 1] += this.totalTargetWidth - F;
        }
      }
      return this.stretchAllColumnsWidth[U];
    }
  }, {
    key: "_getStretchedLastColumnWidth",
    value: function (U) {
      if (U === L.get(this).totalColumns - 1) {
        return this.stretchLastWidth;
      } else {
        return null;
      }
    }
  }, {
    key: "_getColumnWidth",
    value: function (U) {
      var B = L.get(this).columnWidthFn(U);
      if (isNaN(B)) {
        B = O.DEFAULT_WIDTH;
      }
      return B;
    }
  }], [{
    key: "DEFAULT_WIDTH",
    get: function () {
      return 50;
    }
  }]);
  return O;
}();