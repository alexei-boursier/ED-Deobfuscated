require("47042");
import * as t from "45265";
function v(L, I) {
  if (!(L instanceof I)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function C(L, I) {
  for (var E = 0; E < I.length; E++) {
    var O = I[E];
    O.enumerable = O.enumerable || false;
    O.configurable = true;
    if ("value" in O) {
      O.writable = true;
    }
    Object.defineProperty(L, O.key, O);
  }
}
export var n = function () {
  function L() {
    var I = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    v(this, L);
    this.indexedValues = [];
    this.initValueOrFn = I;
  }
  (function w(L, I, E) {
    if (I) {
      C(L.prototype, I);
    }
    if (E) {
      C(L, E);
    }
    Object.defineProperty(L, "prototype", {
      writable: false
    });
  })(L, [{
    key: "getValues",
    value: function () {
      return this.indexedValues;
    }
  }, {
    key: "getValueAtIndex",
    value: function (E) {
      var O = this.indexedValues;
      if (E < O.length) {
        return O[E];
      }
    }
  }, {
    key: "setValues",
    value: function (E) {
      this.indexedValues = E.slice();
      this.runLocalHooks("change");
    }
  }, {
    key: "setValueAtIndex",
    value: function (E, O) {
      return E < this.indexedValues.length && (this.indexedValues[E] = O, this.runLocalHooks("change"), true);
    }
  }, {
    key: "clear",
    value: function () {
      this.setDefaultValues();
    }
  }, {
    key: "getLength",
    value: function () {
      return this.getValues().length;
    }
  }, {
    key: "setDefaultValues",
    value: function () {
      var E = this;
      var O = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.indexedValues.length;
      this.indexedValues.length = 0;
      if ((0, k.mf)(this.initValueOrFn)) {
        (0, t.q4)(O - 1, function (x) {
          return E.indexedValues.push(E.initValueOrFn(x));
        });
      } else {
        (0, t.q4)(O - 1, function () {
          return E.indexedValues.push(E.initValueOrFn);
        });
      }
      this.runLocalHooks("change");
    }
  }, {
    key: "init",
    value: function (E) {
      this.setDefaultValues(E);
      this.runLocalHooks("init");
      return this;
    }
  }, {
    key: "insert",
    value: function () {
      this.runLocalHooks("change");
    }
  }, {
    key: "remove",
    value: function () {
      this.runLocalHooks("change");
    }
  }, {
    key: "destroy",
    value: function () {
      this.clearLocalHooks();
      this.indexedValues = null;
      this.initValueOrFn = null;
    }
  }]);
  return L;
}();
(0, b.jB)(n, M.Z);