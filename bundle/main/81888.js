function v(le, fe) {
  if (!(le instanceof fe)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function C(le, fe) {
  for (var q = 0; q < fe.length; q++) {
    var j = fe[q];
    j.enumerable = j.enumerable || false;
    j.configurable = true;
    if ("value" in j) {
      j.writable = true;
    }
    Object.defineProperty(le, j.key, j);
  }
}
function S(le, fe, q) {
  (function L(le, fe) {
    if (fe.has(le)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  })(le, fe);
  fe.set(le, q);
}
function I(le, fe, q) {
  if (fe in le) {
    Object.defineProperty(le, fe, {
      value: q,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    le[fe] = q;
  }
  return le;
}
function E(le, fe) {
  return function O(le, fe) {
    if (fe.get) {
      return fe.get.call(le);
    } else {
      return fe.value;
    }
  }(le, U(le, fe, "get"));
}
function x(le, fe, q) {
  (function B(le, fe, q) {
    if (fe.set) {
      fe.set.call(le, q);
    } else {
      if (!fe.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      fe.value = q;
    }
  })(le, U(le, fe, "set"), q);
  return q;
}
function U(le, fe, q) {
  if (!fe.has(le)) {
    throw new TypeError("attempted to " + q + " private field on non-instance");
  }
  return fe.get(le);
}
require("66992");
require("41539");
require("78783");
require("4129");
require("33948");
var F = new WeakMap();
export const Z = function () {
  function le(fe, q) {
    var j = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    v(this, le);
    I(this, "row", null);
    I(this, "col", null);
    S(this, F, {
      writable: true,
      value: false
    });
    x(this, F, j);
    if (typeof fe !== "undefined" && typeof q !== "undefined") {
      this.row = fe;
      this.col = q;
    }
  }
  (function w(le, fe, q) {
    if (fe) {
      C(le.prototype, fe);
    }
    if (q) {
      C(le, q);
    }
    Object.defineProperty(le, "prototype", {
      writable: false
    });
  })(le, [{
    key: "isValid",
    value: function (q) {
      return this.row >= 0 && this.col >= 0 && this.row < q.getSetting("totalRows") && this.col < q.getSetting("totalColumns");
    }
  }, {
    key: "isEqual",
    value: function (q) {
      return q === this || this.row === q.row && this.col === q.col;
    }
  }, {
    key: "isSouthEastOf",
    value: function (q) {
      return this.row >= q.row && (E(this, F) ? this.col <= q.col : this.col >= q.col);
    }
  }, {
    key: "isNorthWestOf",
    value: function (q) {
      return this.row <= q.row && (E(this, F) ? this.col >= q.col : this.col <= q.col);
    }
  }, {
    key: "isSouthWestOf",
    value: function (q) {
      return this.row >= q.row && (E(this, F) ? this.col >= q.col : this.col <= q.col);
    }
  }, {
    key: "isNorthEastOf",
    value: function (q) {
      return this.row <= q.row && (E(this, F) ? this.col <= q.col : this.col >= q.col);
    }
  }, {
    key: "normalize",
    value: function () {
      this.row = this.row === null ? this.row : Math.max(this.row, 0);
      this.col = this.col === null ? this.col : Math.max(this.col, 0);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new le(this.row, this.col, E(this, F));
    }
  }, {
    key: "toObject",
    value: function () {
      return {
        row: this.row,
        col: this.col
      };
    }
  }]);
  return le;
}();