require("66992");
require("51532");
require("41539");
require("78783");
require("33948");
require("69826");
require("82526");
require("41817");
require("32165");
require("47042");
require("68309");
require("91038");
require("74916");
function U(Pe) {
  return function Z(Pe) {
    if (Array.isArray(Pe)) {
      return q(Pe);
    }
  }(Pe) || function F(Pe) {
    if (typeof Symbol !== "undefined" && Pe[Symbol.iterator] != null || Pe["@@iterator"] != null) {
      return Array.from(Pe);
    }
  }(Pe) || fe(Pe) || function B() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function X(Pe, Le) {
  return function G(Pe) {
    if (Array.isArray(Pe)) {
      return Pe;
    }
  }(Pe) || function j(Pe, Le) {
    var he = Pe == null ? null : typeof Symbol !== "undefined" && Pe[Symbol.iterator] || Pe["@@iterator"];
    if (he != null) {
      var Ge;
      var Ue;
      var pe = [];
      var re = true;
      var Re = false;
      try {
        for (he = he.call(Pe); !(re = (Ge = he.next()).done) && (pe.push(Ge.value), !Le || pe.length !== Le); re = true);
      } catch (ot) {
        Re = true;
        Ue = ot;
      } finally {
        try {
          if (!re && he.return != null) {
            he.return();
          }
        } finally {
          if (Re) {
            throw Ue;
          }
        }
      }
      return pe;
    }
  }(Pe, Le) || fe(Pe, Le) || function le() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function fe(Pe, Le) {
  if (Pe) {
    if (typeof Pe == "string") {
      return q(Pe, Le);
    }
    var he = Object.prototype.toString.call(Pe).slice(8, -1);
    if (he === "Object" && Pe.constructor) {
      he = Pe.constructor.name;
    }
    if (he === "Map" || he === "Set") {
      return Array.from(Pe);
    }
    if (he === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(he)) {
      return q(Pe, Le);
    }
  }
}
function q(Pe, Le) {
  if (Le == null || Le > Pe.length) {
    Le = Pe.length;
  }
  for (var he = 0, pe = new Array(Le); he < Le; he++) {
    pe[he] = Pe[he];
  }
  return pe;
}
function se(Le) {
  return `The id '${Le}' is already declared in a map.`;
}
export function I() {
  var Pe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Le = Pe.errorIdExists;
  var he = new Map();
  function pe(rt, Oe) {
    if (st(rt)) {
      throw new Error(Le(rt));
    }
    he.set(rt, Oe);
  }
  function re(rt) {
    return he.delete(rt);
  }
  function Re() {
    he.clear();
  }
  function Ge(rt) {
    var Oe = ot().find(function (Be) {
      var De = X(Be, 2);
      return rt === De[1] && De[0];
    }) || [null];
    return X(Oe, 1)[0];
  }
  function Ue(rt) {
    return he.get(rt);
  }
  function ot() {
    return U(he);
  }
  function st(rt) {
    return he.has(rt);
  }
  Le = (0, x.mf)(Le) ? Le : se;
  return {
    addItem: pe,
    clear: Re,
    getId: Ge,
    getItem: Ue,
    getItems: ot,
    hasItem: st,
    removeItem: re
  };
}