var E;
var O;
var x;
import * as t from "17854";
import * as M from "92597";
import * as v from "5465";
var S = "Object already initialized";
var L = t.TypeError;
if (i || v.state) {
  var F = v.state ||= new (0, t.WeakMap)();
  F.get = F.get;
  F.has = F.has;
  F.set = F.set;
  E = function (X, le) {
    if (F.has(X)) {
      throw L(S);
    }
    le.facade = X;
    F.set(X, le);
    return le;
  };
  O = function (X) {
    return F.get(X) || {};
  };
  x = function (X) {
    return F.has(X);
  };
} else {
  var Z = C("state");
  w[Z] = true;
  E = function (X, le) {
    if (M(X, Z)) {
      throw L(S);
    }
    le.facade = X;
    k(X, Z, le);
    return le;
  };
  O = function (X) {
    if (M(X, Z)) {
      return X[Z];
    } else {
      return {};
    }
  };
  x = function (X) {
    return M(X, Z);
  };
}
__webpack_module__.exports = {
  set: E,
  get: O,
  has: x,
  enforce: function (X) {
    if (x(X)) {
      return O(X);
    } else {
      return E(X, {});
    }
  },
  getterFor: function (X) {
    return function (le) {
      var fe;
      if (!b(le) || (fe = O(le)).type !== X) {
        throw L("Incompatible receiver, " + X + " required");
      }
      return fe;
    };
  }
};