function k(M) {
  return function (v, C, w) {
    var E;
    var S = i(v);
    var L = b(S);
    var I = t(w, L);
    if (M && C != C) {
      for (; L > I;) {
        if ((E = S[I++]) != E) {
          return true;
        }
      }
    } else {
      for (; L > I; I++) {
        if ((M || I in S) && S[I] === C) {
          return M || I || 0;
        }
      }
    }
    return !M && -1;
  };
}
__webpack_module__.exports = {
  includes: k(true),
  indexOf: k(false)
};