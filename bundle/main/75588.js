require("32564");
require("47042");
require("92222");
require("65069");
import * as M from "6868";
export function mf(U) {
  return typeof U == "function";
}
export function Ds(U) {
  var Z;
  var B = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var F = null;
  function X() {
    for (var le = this, fe = arguments.length, q = new Array(fe), j = 0; j < fe; j++) {
      q[j] = arguments[j];
    }
    if (F) {
      clearTimeout(F);
    }
    F = setTimeout(function () {
      Z = U.apply(le, q);
    }, B);
    return Z;
  }
  return X;
}
export function r$(U) {
  for (var B = arguments.length, F = new Array(B > 1 ? B - 1 : 0), Z = 1; Z < B; Z++) {
    F[Z - 1] = arguments[Z];
  }
  return function () {
    for (var le = arguments.length, fe = new Array(le), q = 0; q < le; q++) {
      fe[q] = arguments[q];
    }
    return U.apply(this, F.concat(fe));
  };
}
export function $Z(U, B, F, Z, X, le, fe, q) {
  if ((0, M.$K)(q)) {
    return U.call(B, F, Z, X, le, fe, q);
  } else if ((0, M.$K)(fe)) {
    return U.call(B, F, Z, X, le, fe);
  } else if ((0, M.$K)(le)) {
    return U.call(B, F, Z, X, le);
  } else if ((0, M.$K)(X)) {
    return U.call(B, F, Z, X);
  } else if ((0, M.$K)(Z)) {
    return U.call(B, F, Z);
  } else if ((0, M.$K)(F)) {
    return U.call(B, F);
  } else {
    return U.call(B);
  }
}