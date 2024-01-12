i({
  target: "Object",
  stat: true,
  sham: !t
}, {
  getOwnPropertyDescriptors: function (w) {
    for (var x, U, S = k(w), L = M.f, I = b(S), E = {}, O = 0; I.length > O;) {
      if ((U = L(S, x = I[O++])) !== undefined) {
        v(E, x, U);
      }
    }
    return E;
  }
});