require("26699");
require("32023");
require("82772");
require("66992");
require("41539");
require("78783");
require("4129");
require("33948");
import * as S from "81888";
function L(G, se) {
  if (!(G instanceof se)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function I(G, se) {
  for (var W = 0; W < se.length; W++) {
    var Pe = se[W];
    Pe.enumerable = Pe.enumerable || false;
    Pe.configurable = true;
    if ("value" in Pe) {
      Pe.writable = true;
    }
    Object.defineProperty(G, Pe.key, Pe);
  }
}
function O(G, se, W) {
  (function x(G, se) {
    if (se.has(G)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  })(G, se);
  se.set(G, W);
}
function U(G, se, W) {
  if (se in G) {
    Object.defineProperty(G, se, {
      value: W,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    G[se] = W;
  }
  return G;
}
function B(G, se) {
  return function F(G, se) {
    if (se.get) {
      return se.get.call(G);
    } else {
      return se.value;
    }
  }(G, X(G, se, "get"));
}
function _Z(G, se, W) {
  (function le(G, se, W) {
    if (se.set) {
      se.set.call(G, W);
    } else {
      if (!se.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      se.value = W;
    }
  })(G, X(G, se, "set"), W);
  return W;
}
function X(G, se, W) {
  if (!se.has(G)) {
    throw new TypeError("attempted to " + W + " private field on non-instance");
  }
  return se.get(G);
}
var fe = new WeakMap();
export const Z = function () {
  function G(se) {
    var W = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : se;
    var Pe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : se;
    var Le = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    L(this, G);
    U(this, "highlight", null);
    U(this, "from", null);
    U(this, "to", null);
    O(this, fe, {
      writable: true,
      value: false
    });
    this.highlight = se.clone().normalize();
    this.from = W.clone();
    this.to = Pe.clone();
    _Z(this, fe, Le);
  }
  (function E(G, se, W) {
    if (se) {
      I(G.prototype, se);
    }
    if (W) {
      I(G, W);
    }
    Object.defineProperty(G, "prototype", {
      writable: false
    });
  })(G, [{
    key: "setHighlight",
    value: function (W) {
      this.highlight = W.clone().normalize();
      return this;
    }
  }, {
    key: "setFrom",
    value: function (W) {
      this.from = W.clone();
      return this;
    }
  }, {
    key: "setTo",
    value: function (W) {
      this.to = W.clone();
      return this;
    }
  }, {
    key: "isValid",
    value: function (W) {
      return this.from.isValid(W) && this.to.isValid(W);
    }
  }, {
    key: "isSingle",
    value: function () {
      return this.from.row >= 0 && this.from.row === this.to.row && this.from.col >= 0 && this.from.col === this.to.col;
    }
  }, {
    key: "getOuterHeight",
    value: function () {
      return Math.max(this.from.row, this.to.row) - Math.min(this.from.row, this.to.row) + 1;
    }
  }, {
    key: "getOuterWidth",
    value: function () {
      return Math.max(this.from.col, this.to.col) - Math.min(this.from.col, this.to.col) + 1;
    }
  }, {
    key: "getHeight",
    value: function () {
      var W = Math.max(this.from.row, 0);
      var Pe = Math.max(this.to.row, 0);
      return Math.max(W, Pe) - Math.min(W, Pe) + 1;
    }
  }, {
    key: "getWidth",
    value: function () {
      var W = Math.max(this.from.col, 0);
      var Pe = Math.max(this.to.col, 0);
      return Math.max(W, Pe) - Math.min(W, Pe) + 1;
    }
  }, {
    key: "getCellsCount",
    value: function () {
      return this.getWidth() * this.getHeight();
    }
  }, {
    key: "includes",
    value: function (W) {
      var Pe = W.row;
      var Le = W.col;
      var he = this.getOuterTopStartCorner();
      var pe = this.getOuterBottomEndCorner();
      return he.row <= Pe && pe.row >= Pe && he.col <= Le && pe.col >= Le;
    }
  }, {
    key: "includesRange",
    value: function (W) {
      return this.includes(W.getOuterTopStartCorner()) && this.includes(W.getOuterBottomEndCorner());
    }
  }, {
    key: "isEqual",
    value: function (W) {
      return Math.min(this.from.row, this.to.row) === Math.min(W.from.row, W.to.row) && Math.max(this.from.row, this.to.row) === Math.max(W.from.row, W.to.row) && Math.min(this.from.col, this.to.col) === Math.min(W.from.col, W.to.col) && Math.max(this.from.col, this.to.col) === Math.max(W.from.col, W.to.col);
    }
  }, {
    key: "overlaps",
    value: function (W) {
      return W.isSouthEastOf(this.getOuterTopLeftCorner()) && W.isNorthWestOf(this.getOuterBottomRightCorner());
    }
  }, {
    key: "isSouthEastOf",
    value: function (W) {
      return this.getOuterTopLeftCorner().isSouthEastOf(W) || this.getOuterBottomRightCorner().isSouthEastOf(W);
    }
  }, {
    key: "isNorthWestOf",
    value: function (W) {
      return this.getOuterTopLeftCorner().isNorthWestOf(W) || this.getOuterBottomRightCorner().isNorthWestOf(W);
    }
  }, {
    key: "isOverlappingHorizontally",
    value: function (W) {
      return this.getOuterTopRightCorner().col >= W.getOuterTopLeftCorner().col && this.getOuterTopRightCorner().col <= W.getOuterTopRightCorner().col || this.getOuterTopLeftCorner().col <= W.getOuterTopRightCorner().col && this.getOuterTopLeftCorner().col >= W.getOuterTopLeftCorner().col;
    }
  }, {
    key: "isOverlappingVertically",
    value: function (W) {
      return this.getOuterBottomRightCorner().row >= W.getOuterTopRightCorner().row && this.getOuterBottomRightCorner().row <= W.getOuterBottomRightCorner().row || this.getOuterTopRightCorner().row <= W.getOuterBottomRightCorner().row && this.getOuterTopRightCorner().row >= W.getOuterTopRightCorner().row;
    }
  }, {
    key: "expand",
    value: function (W) {
      var Pe = this.getOuterTopStartCorner();
      var Le = this.getOuterBottomEndCorner();
      return (W.row < Pe.row || W.col < Pe.col || W.row > Le.row || W.col > Le.col) && (this.from = this._createCellCoords(Math.min(Pe.row, W.row), Math.min(Pe.col, W.col)), this.to = this._createCellCoords(Math.max(Le.row, W.row), Math.max(Le.col, W.col)), true);
    }
  }, {
    key: "expandByRange",
    value: function (W) {
      if (this.includesRange(W) || !this.overlaps(W)) {
        return false;
      }
      var Pe = this.getOuterTopStartCorner();
      var Le = this.getOuterBottomEndCorner();
      var he = this.getDirection();
      var pe = W.getOuterTopStartCorner();
      var re = W.getOuterBottomEndCorner();
      var Re = Math.min(Pe.row, pe.row);
      var Ge = Math.min(Pe.col, pe.col);
      var Ue = Math.max(Le.row, re.row);
      var ot = Math.max(Le.col, re.col);
      var st = this._createCellCoords(Re, Ge);
      var rt = this._createCellCoords(Ue, ot);
      this.from = st;
      this.to = rt;
      this.setDirection(he);
      if (this.highlight.row === this.getOuterBottomRightCorner().row && this.getVerticalDirection() === "N-S") {
        this.flipDirectionVertically();
      }
      if (this.highlight.col === this.getOuterTopRightCorner().col && this.getHorizontalDirection() === "W-E") {
        this.flipDirectionHorizontally();
      }
      return true;
    }
  }, {
    key: "getDirection",
    value: function () {
      if (this.from.isNorthWestOf(this.to)) {
        return "NW-SE";
      } else if (this.from.isNorthEastOf(this.to)) {
        return "NE-SW";
      } else if (this.from.isSouthEastOf(this.to)) {
        return "SE-NW";
      } else if (this.from.isSouthWestOf(this.to)) {
        return "SW-NE";
      } else {
        return undefined;
      }
    }
  }, {
    key: "setDirection",
    value: function (W) {
      switch (W) {
        case "NW-SE":
          var Pe = [this.getOuterTopLeftCorner(), this.getOuterBottomRightCorner()];
          this.from = Pe[0];
          this.to = Pe[1];
          break;
        case "NE-SW":
          var Le = [this.getOuterTopRightCorner(), this.getOuterBottomLeftCorner()];
          this.from = Le[0];
          this.to = Le[1];
          break;
        case "SE-NW":
          var he = [this.getOuterBottomRightCorner(), this.getOuterTopLeftCorner()];
          this.from = he[0];
          this.to = he[1];
          break;
        case "SW-NE":
          var pe = [this.getOuterBottomLeftCorner(), this.getOuterTopRightCorner()];
          this.from = pe[0];
          this.to = pe[1];
      }
    }
  }, {
    key: "getVerticalDirection",
    value: function () {
      if (["NE-SW", "NW-SE"].indexOf(this.getDirection()) > -1) {
        return "N-S";
      } else {
        return "S-N";
      }
    }
  }, {
    key: "getHorizontalDirection",
    value: function () {
      if (["NW-SE", "SW-NE"].indexOf(this.getDirection()) > -1) {
        return "W-E";
      } else {
        return "E-W";
      }
    }
  }, {
    key: "flipDirectionVertically",
    value: function () {
      switch (this.getDirection()) {
        case "NW-SE":
          this.setDirection("SW-NE");
          break;
        case "NE-SW":
          this.setDirection("SE-NW");
          break;
        case "SE-NW":
          this.setDirection("NE-SW");
          break;
        case "SW-NE":
          this.setDirection("NW-SE");
      }
    }
  }, {
    key: "flipDirectionHorizontally",
    value: function () {
      switch (this.getDirection()) {
        case "NW-SE":
          this.setDirection("NE-SW");
          break;
        case "NE-SW":
          this.setDirection("NW-SE");
          break;
        case "SE-NW":
          this.setDirection("SW-NE");
          break;
        case "SW-NE":
          this.setDirection("SE-NW");
      }
    }
  }, {
    key: "getTopStartCorner",
    value: function () {
      return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.min(this.from.col, this.to.col)).normalize();
    }
  }, {
    key: "getTopLeftCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getTopEndCorner();
      } else {
        return this.getTopStartCorner();
      }
    }
  }, {
    key: "getBottomEndCorner",
    value: function () {
      return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.max(this.from.col, this.to.col)).normalize();
    }
  }, {
    key: "getBottomRightCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getBottomStartCorner();
      } else {
        return this.getBottomEndCorner();
      }
    }
  }, {
    key: "getTopEndCorner",
    value: function () {
      return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.max(this.from.col, this.to.col)).normalize();
    }
  }, {
    key: "getTopRightCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getTopStartCorner();
      } else {
        return this.getTopEndCorner();
      }
    }
  }, {
    key: "getBottomStartCorner",
    value: function () {
      return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.min(this.from.col, this.to.col)).normalize();
    }
  }, {
    key: "getBottomLeftCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getBottomEndCorner();
      } else {
        return this.getBottomStartCorner();
      }
    }
  }, {
    key: "getOuterTopStartCorner",
    value: function () {
      return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
    }
  }, {
    key: "getOuterTopLeftCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getOuterTopEndCorner();
      } else {
        return this.getOuterTopStartCorner();
      }
    }
  }, {
    key: "getOuterBottomEndCorner",
    value: function () {
      return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
    }
  }, {
    key: "getOuterBottomRightCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getOuterBottomStartCorner();
      } else {
        return this.getOuterBottomEndCorner();
      }
    }
  }, {
    key: "getOuterTopEndCorner",
    value: function () {
      return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
    }
  }, {
    key: "getOuterTopRightCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getOuterTopStartCorner();
      } else {
        return this.getOuterTopEndCorner();
      }
    }
  }, {
    key: "getOuterBottomStartCorner",
    value: function () {
      return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
    }
  }, {
    key: "getOuterBottomLeftCorner",
    value: function () {
      if (B(this, fe)) {
        return this.getOuterBottomEndCorner();
      } else {
        return this.getOuterBottomStartCorner();
      }
    }
  }, {
    key: "isCorner",
    value: function (W, Pe) {
      return !!Pe && !!Pe.includes(W) && (!!this.getOuterTopLeftCorner().isEqual(this._createCellCoords(Pe.from.row, Pe.from.col)) || !!this.getOuterTopRightCorner().isEqual(this._createCellCoords(Pe.from.row, Pe.to.col)) || !!this.getOuterBottomLeftCorner().isEqual(this._createCellCoords(Pe.to.row, Pe.from.col)) || !!this.getOuterBottomRightCorner().isEqual(this._createCellCoords(Pe.to.row, Pe.to.col))) || W.isEqual(this.getOuterTopLeftCorner()) || W.isEqual(this.getOuterTopRightCorner()) || W.isEqual(this.getOuterBottomLeftCorner()) || W.isEqual(this.getOuterBottomRightCorner());
    }
  }, {
    key: "getOppositeCorner",
    value: function (W, Pe) {
      if (!(W instanceof S.Z)) {
        return false;
      }
      if (Pe) {
        var Le = Pe.from;
        var he = Pe.to;
        if (Pe.includes(W)) {
          if (this.getOuterTopStartCorner().isEqual(this._createCellCoords(Le.row, Le.col))) {
            return this.getOuterBottomEndCorner();
          }
          if (this.getOuterTopEndCorner().isEqual(this._createCellCoords(Le.row, he.col))) {
            return this.getOuterBottomStartCorner();
          }
          if (this.getOuterBottomStartCorner().isEqual(this._createCellCoords(he.row, Le.col))) {
            return this.getOuterTopEndCorner();
          }
          if (this.getOuterBottomEndCorner().isEqual(this._createCellCoords(he.row, he.col))) {
            return this.getOuterTopStartCorner();
          }
        }
      }
      if (W.isEqual(this.getOuterBottomEndCorner())) {
        return this.getOuterTopStartCorner();
      } else if (W.isEqual(this.getOuterTopStartCorner())) {
        return this.getOuterBottomEndCorner();
      } else if (W.isEqual(this.getOuterTopEndCorner())) {
        return this.getOuterBottomStartCorner();
      } else if (W.isEqual(this.getOuterBottomStartCorner())) {
        return this.getOuterTopEndCorner();
      } else {
        return undefined;
      }
    }
  }, {
    key: "getBordersSharedWith",
    value: function (W) {
      if (!this.includesRange(W)) {
        return [];
      }
      var Pe_top = Math.min(this.from.row, this.to.row);
      var Pe_bottom = Math.max(this.from.row, this.to.row);
      var Pe_left = Math.min(this.from.col, this.to.col);
      var Pe_right = Math.max(this.from.col, this.to.col);
      var Le_top = Math.min(W.from.row, W.to.row);
      var Le_bottom = Math.max(W.from.row, W.to.row);
      var Le_left = Math.min(W.from.col, W.to.col);
      var Le_right = Math.max(W.from.col, W.to.col);
      var he = [];
      if (Pe_top === Le_top) {
        he.push("top");
      }
      if (Pe_right === Le_right) {
        he.push("right");
      }
      if (Pe_bottom === Le_bottom) {
        he.push("bottom");
      }
      if (Pe_left === Le_left) {
        he.push("left");
      }
      return he;
    }
  }, {
    key: "getInner",
    value: function () {
      for (var W = this.getOuterTopStartCorner(), Pe = this.getOuterBottomEndCorner(), Le = [], he = W.row; he <= Pe.row; he++) {
        for (var pe = W.col; pe <= Pe.col; pe++) {
          if ((this.from.row !== he || this.from.col !== pe) && (this.to.row !== he || this.to.col !== pe)) {
            Le.push(this._createCellCoords(he, pe));
          }
        }
      }
      return Le;
    }
  }, {
    key: "getAll",
    value: function () {
      for (var W = this.getOuterTopStartCorner(), Pe = this.getOuterBottomEndCorner(), Le = [], he = W.row; he <= Pe.row; he++) {
        for (var pe = W.col; pe <= Pe.col; pe++) {
          Le.push(W.row === he && W.col === pe ? W : Pe.row === he && Pe.col === pe ? Pe : this._createCellCoords(he, pe));
        }
      }
      return Le;
    }
  }, {
    key: "forAll",
    value: function (W) {
      for (var Pe = this.getOuterTopStartCorner(), Le = this.getOuterBottomEndCorner(), he = Pe.row; he <= Le.row; he++) {
        for (var pe = Pe.col; pe <= Le.col; pe++) {
          if (W(he, pe) === false) {
            return;
          }
        }
      }
    }
  }, {
    key: "clone",
    value: function () {
      return new G(this.highlight, this.from, this.to, B(this, fe));
    }
  }, {
    key: "toObject",
    value: function () {
      return {
        from: this.from.toObject(),
        to: this.to.toObject()
      };
    }
  }, {
    key: "_createCellCoords",
    value: function (W, Pe) {
      return new S.Z(W, Pe, B(this, fe));
    }
  }]);
  return G;
}();