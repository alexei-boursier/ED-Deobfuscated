__webpack_module__.exports = function (M, v, C, w) {
  w ||= {};
  var S = w.enumerable;
  var L = w.name !== undefined ? w.name : v;
  if (i(C)) {
    b(C, L, w);
  }
  if (w.global) {
    if (S) {
      M[v] = C;
    } else {
      k(v, C);
    }
  } else {
    try {
      if (w.unsafe) {
        if (M[v]) {
          S = true;
        }
      } else {
        delete M[v];
      }
    } catch {}
    if (S) {
      M[v] = C;
    } else {
      t.f(M, v, {
        value: C,
        enumerable: false,
        configurable: !w.nonConfigurable,
        writable: !w.nonWritable
      });
    }
  }
  return M;
};