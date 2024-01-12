import * as i from "19781";
import * as b from "1702";
var w = b(require("55296").f);
var S = b([].push);
var L = i && t(function () {
  var E = Object.create(null);
  E[2] = 2;
  return !w(E, 2);
});
function I(E) {
  return function (O) {
    for (var le, x = v(O), U = M(x), B = L && k(x) === null, F = U.length, Z = 0, X = []; F > Z;) {
      le = U[Z++];
      if (!i || (B ? le in x : w(x, le))) {
        S(X, E ? [le, x[le]] : x[le]);
      }
    }
    return X;
  };
}
__webpack_module__.exports = {
  entries: I(true),
  values: I(false)
};