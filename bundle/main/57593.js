import * as t from "70111";
import * as b from "52190";
var C = TypeError;
var w = v("toPrimitive");
__webpack_module__.exports = function (S, L) {
  if (!t(S) || b(S)) {
    return S;
  }
  var E;
  var I = k(S, w);
  if (I) {
    if (L === undefined) {
      L = "default";
    }
    E = i(I, S, L);
    if (!t(E) || b(E)) {
      return E;
    }
    throw C("Can't convert object to primitive value");
  }
  if (L === undefined) {
    L = "number";
  }
  return M(S, L);
};