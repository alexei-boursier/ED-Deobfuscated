import * as i from "1702";
import * as k from "92597";
import * as M from "19781";
var v = require("76530").CONFIGURABLE;
import * as w from "29909";
var S = w.enforce;
var L = w.get;
var I = String;
var E = Object.defineProperty;
var O = i("".slice);
var x = i("".replace);
var U = i([].join);
var B = M && !t(function () {
  return E(function () {}, "length", {
    value: 8
  }).length !== 8;
});
var F = String(String).split("String");
var Z = __webpack_module__.exports = function (X, le, fe) {
  if (O(I(le), 0, 7) === "Symbol(") {
    le = "[" + x(I(le), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (fe && fe.getter) {
    le = "get " + le;
  }
  if (fe && fe.setter) {
    le = "set " + le;
  }
  if (!k(X, "name") || v && X.name !== le) {
    if (M) {
      E(X, "name", {
        value: le,
        configurable: true
      });
    } else {
      X.name = le;
    }
  }
  if (B && fe && k(fe, "arity") && X.length !== fe.arity) {
    E(X, "length", {
      value: fe.arity
    });
  }
  try {
    if (fe && k(fe, "constructor") && fe.constructor) {
      if (M) {
        E(X, "prototype", {
          writable: false
        });
      }
    } else {
      X.prototype &&= undefined;
    }
  } catch {}
  var q = S(X);
  if (!k(q, "source")) {
    q.source = U(F, typeof le == "string" ? le : "");
  }
  return X;
};
Function.prototype.toString = Z(function () {
  return b(this) && L(this).source || C(this);
}, "toString");