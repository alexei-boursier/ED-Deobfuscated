import * as i from "51400";
var k = Array;
var M = Math.max;
__webpack_module__.exports = function (v, C, w) {
  for (var S = t(v), L = i(C, S), I = i(w === undefined ? S : w, S), E = k(M(I - L, 0)), O = 0; L < I; L++, O++) {
    b(E, O, v[L]);
  }
  E.length = O;
  return E;
};