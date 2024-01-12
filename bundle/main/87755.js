require("68304");
require("30489");
require("41539");
require("12419");
require("74819");
require("38880");
require("82526");
require("41817");
require("32165");
require("66992");
require("78783");
require("33948");
import * as x from "56922";
function U(he) {
  return (U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (pe) {
    return typeof pe;
  } : function (pe) {
    if (pe && typeof Symbol == "function" && pe.constructor === Symbol && pe !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof pe;
    }
  })(he);
}
function B(he, pe) {
  if (!(he instanceof pe)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function F(he, pe) {
  for (var re = 0; re < pe.length; re++) {
    var Re = pe[re];
    Re.enumerable = Re.enumerable || false;
    Re.configurable = true;
    if ("value" in Re) {
      Re.writable = true;
    }
    Object.defineProperty(he, Re.key, Re);
  }
}
function X() {
  X = typeof Reflect !== "undefined" && Reflect.get ? Reflect.get.bind() : function (pe, re, Re) {
    var Ge = le(pe, re);
    if (Ge) {
      var Ue = Object.getOwnPropertyDescriptor(Ge, re);
      if (Ue.get) {
        return Ue.get.call(arguments.length < 3 ? pe : Re);
      } else {
        return Ue.value;
      }
    }
  };
  return X.apply(this, arguments);
}
function le(he, pe) {
  for (; !Object.prototype.hasOwnProperty.call(he, pe) && (he = Pe(he)) !== null;);
  return he;
}
function q(he, pe) {
  return (q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (Re, Ge) {
    Re.__proto__ = Ge;
    return Re;
  })(he, pe);
}
function G(he, pe) {
  if (pe && (U(pe) === "object" || typeof pe == "function")) {
    return pe;
  }
  if (pe !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function se(he) {
    if (he === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return he;
  }(he);
}
function Pe(he) {
  return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (re) {
    return re.__proto__ || Object.getPrototypeOf(re);
  })(he);
}
export var L = function (he) {
  (function fe(he, pe) {
    if (typeof pe != "function" && pe !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    he.prototype = Object.create(pe && pe.prototype, {
      constructor: {
        value: he,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(he, "prototype", {
      writable: false
    });
    if (pe) {
      q(he, pe);
    }
  })(re, he);
  var pe = function j(he) {
    var pe = function W() {
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
      var Ge;
      var Re = Pe(he);
      if (pe) {
        var Ue = Pe(this).constructor;
        Ge = Reflect.construct(Re, arguments, Ue);
      } else {
        Ge = Re.apply(this, arguments);
      }
      return G(this, Ge);
    };
  }(re);
  function re() {
    B(this, re);
    return pe.apply(this, arguments);
  }
  (function Z(he, pe, re) {
    if (pe) {
      F(he.prototype, pe);
    }
    if (re) {
      F(he, re);
    }
    Object.defineProperty(he, "prototype", {
      writable: false
    });
  })(re, [{
    key: "insert",
    value: function (Ge, Ue) {
      this.indexedValues = (0, x.S)(this.indexedValues, Ge, Ue, this.initValueOrFn);
      X(Pe(re.prototype), "insert", this).call(this, Ge, Ue);
    }
  }, {
    key: "remove",
    value: function (Ge) {
      this.indexedValues = (0, x.t)(this.indexedValues, Ge);
      X(Pe(re.prototype), "remove", this).call(this, Ge);
    }
  }]);
  return re;
}(O.n);