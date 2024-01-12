import * as b from "60614";
function C() {}
var w = [];
var S = M("Reflect", "construct");
var L = /^\s*(?:class|function)\b/;
var I = i(L.exec);
var E = !L.exec(C);
function O(B) {
  if (!b(B)) {
    return false;
  }
  try {
    S(C, w, B);
    return true;
  } catch {
    return false;
  }
}
function x(B) {
  if (!b(B)) {
    return false;
  }
  switch (k(B)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return E || !!I(L, v(B));
  } catch {
    return true;
  }
}
x.sham = true;
__webpack_module__.exports = !S || t(function () {
  var U;
  return O(O.call) || !O(Object) || !O(function () {
    U = true;
  }) || U;
}) ? x : O;