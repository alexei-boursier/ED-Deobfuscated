import * as i from "1702";
var b = Math.floor;
var k = i("".charAt);
var M = i("".replace);
var v = i("".slice);
var C = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var w = /\$([$&'`]|\d{1,2})/g;
__webpack_module__.exports = function (S, L, I, E, O, x) {
  var U = I + S.length;
  var B = E.length;
  var F = w;
  if (O !== undefined) {
    O = t(O);
    F = C;
  }
  return M(x, F, function (Z, X) {
    var le;
    switch (k(X, 0)) {
      case "$":
        return "$";
      case "&":
        return S;
      case "`":
        return v(L, 0, I);
      case "'":
        return v(L, U);
      case "<":
        le = O[v(X, 1, -1)];
        break;
      default:
        var fe = +X;
        if (fe === 0) {
          return Z;
        }
        if (fe > B) {
          var q = b(fe / 10);
          if (q === 0) {
            return Z;
          } else if (q <= B) {
            if (E[q - 1] === undefined) {
              return k(X, 1);
            } else {
              return E[q - 1] + k(X, 1);
            }
          } else {
            return Z;
          }
        }
        le = E[fe - 1];
    }
    if (le === undefined) {
      return "";
    } else {
      return le;
    }
  });
};