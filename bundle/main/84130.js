function O(fe) {
  return function F(fe) {
    if (Array.isArray(fe)) {
      return _Z(fe);
    }
  }(fe) || function B(fe) {
    if (typeof Symbol !== "undefined" && fe[Symbol.iterator] != null || fe["@@iterator"] != null) {
      return Array.from(fe);
    }
  }(fe) || function U(fe, q) {
    if (fe) {
      if (typeof fe == "string") {
        return _Z(fe, q);
      }
      var j = Object.prototype.toString.call(fe).slice(8, -1);
      if (j === "Object" && fe.constructor) {
        j = fe.constructor.name;
      }
      if (j === "Map" || j === "Set") {
        return Array.from(fe);
      }
      if (j === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)) {
        return _Z(fe, q);
      }
    }
  }(fe) || function x() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function _Z(fe, q) {
  if (q == null || q > fe.length) {
    q = fe.length;
  }
  for (var j = 0, G = new Array(q); j < q; j++) {
    G[j] = fe[j];
  }
  return G;
}
require("66992");
require("51532");
require("41539");
require("78783");
require("33948");
require("82526");
require("41817");
require("32165");
require("91038");
require("47042");
require("68309");
require("74916");
var X = new Map();
export function Z() {
  var fe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "common";
  if (!X.has(fe)) {
    X.set(fe, new Map());
  }
  var q = X.get(fe);
  function j(Le, he) {
    q.set(Le, he);
  }
  function G(Le) {
    return q.get(Le);
  }
  function se(Le) {
    return q.has(Le);
  }
  function W() {
    return O(q.keys());
  }
  function Pe() {
    return O(q.values());
  }
  return {
    register: j,
    getItem: G,
    hasItem: se,
    getNames: W,
    getValues: Pe
  };
}