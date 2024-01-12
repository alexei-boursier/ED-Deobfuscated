import * as k from "19670";
import * as M from "34948";
var v = TypeError;
var C = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var S = "enumerable";
var L = "configurable";
var I = "writable";
__webpack_exports__.f = i ? b ? function (O, x, U) {
  k(O);
  x = M(x);
  k(U);
  if (typeof O == "function" && x === "prototype" && "value" in U && I in U && !U[I]) {
    var B = w(O, x);
    if (B && B[I]) {
      O[x] = U.value;
      U = {
        configurable: L in U ? U[L] : B[L],
        enumerable: S in U ? U[S] : B[S],
        writable: false
      };
    }
  }
  return C(O, x, U);
} : C : function (O, x, U) {
  k(O);
  x = M(x);
  k(U);
  if (t) {
    try {
      return C(O, x, U);
    } catch {}
  }
  if ("get" in U || "set" in U) {
    throw v("Accessors not supported");
  }
  if ("value" in U) {
    O[x] = U.value;
  }
  return O;
};