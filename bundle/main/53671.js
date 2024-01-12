var M = TypeError;
function v(C) {
  return function (w, S, L, I) {
    i(S);
    var E = t(w);
    var O = b(E);
    var x = k(E);
    var U = C ? x - 1 : 0;
    var B = C ? -1 : 1;
    if (L < 2) {
      for (;;) {
        if (U in O) {
          I = O[U];
          U += B;
          break;
        }
        U += B;
        if (C ? U < 0 : x <= U) {
          throw M("Reduce of empty array with no initial value");
        }
      }
    }
    for (; C ? U >= 0 : x > U; U += B) {
      if (U in O) {
        I = S(I, O[U], U, E);
      }
    }
    return I;
  };
}
__webpack_module__.exports = {
  left: v(false),
  right: v(true)
};