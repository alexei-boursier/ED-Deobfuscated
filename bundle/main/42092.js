var C = t([].push);
function w(S) {
  var L = S == 1;
  var I = S == 2;
  var E = S == 3;
  var O = S == 4;
  var x = S == 6;
  var U = S == 7;
  var B = S == 5 || x;
  return function (F, Z, X, le) {
    for (var Le, he, fe = k(F), q = b(fe), j = i(Z, X), G = M(q), se = 0, W = le || v, Pe = L ? W(F, G) : I || U ? W(F, 0) : undefined; G > se; se++) {
      if ((B || se in q) && (he = j(Le = q[se], se, fe), S)) {
        if (L) {
          Pe[se] = he;
        } else if (he) {
          switch (S) {
            case 3:
              return true;
            case 5:
              return Le;
            case 6:
              return se;
            case 2:
              C(Pe, Le);
          }
        } else {
          switch (S) {
            case 4:
              return false;
            case 7:
              C(Pe, Le);
          }
        }
      }
    }
    if (x) {
      return -1;
    } else if (E || O) {
      return O;
    } else {
      return Pe;
    }
  };
}
__webpack_module__.exports = {
  forEach: w(0),
  map: w(1),
  filter: w(2),
  some: w(3),
  every: w(4),
  find: w(5),
  findIndex: w(6),
  filterReject: w(7)
};