import * as i from "19781";
import * as M from "81956";
var L = Object.assign;
var I = Object.defineProperty;
var E = t([].concat);
__webpack_module__.exports = !L || k(function () {
  if (i && L({
    b: 1
  }, L(I({}, "a", {
    enumerable: true,
    get: function () {
      I(this, "b", {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) {
    return true;
  }
  var O = {};
  var x = {};
  var U = Symbol();
  var B = "abcdefghijklmnopqrst";
  O[U] = 7;
  B.split("").forEach(function (F) {
    x[F] = F;
  });
  return L({}, O)[U] != 7 || M(L({}, x)).join("") != B;
}) ? function (x, U) {
  for (var B = w(x), F = arguments.length, Z = 1, X = v.f, le = C.f; F > Z;) {
    for (var se, fe = S(arguments[Z++]), q = X ? E(M(fe), X(fe)) : M(fe), j = q.length, G = 0; j > G;) {
      se = q[G++];
      if (!i || b(le, fe, se)) {
        B[se] = fe[se];
      }
    }
  }
  return B;
} : L;