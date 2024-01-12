import * as i from "41589";
var t = Math.floor;
function b(v, C) {
  var w = v.length;
  var S = t(w / 2);
  if (w < 8) {
    return k(v, C);
  } else {
    return M(v, b(i(v, 0, S), C), b(i(v, S), C), C);
  }
}
function k(v, C) {
  for (var L, I, w = v.length, S = 1; S < w;) {
    I = S;
    L = v[S];
    for (; I && C(v[I - 1], L) > 0;) {
      v[I] = v[--I];
    }
    if (I !== S++) {
      v[I] = L;
    }
  }
  return v;
}
function M(v, C, w, S) {
  for (var L = C.length, I = w.length, E = 0, O = 0; E < L || O < I;) {
    v[E + O] = E < L && O < I ? S(C[E], w[O]) <= 0 ? C[E++] : w[O++] : E < L ? C[E++] : w[O++];
  }
  return v;
}
__webpack_module__.exports = b;