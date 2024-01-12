i({
  target: "Reflect",
  stat: true
}, {
  get: function w(S, L) {
    var E;
    var O;
    var I = arguments.length < 3 ? S : arguments[2];
    if (k(S) === I) {
      return S[L];
    } else if (E = v.f(S, L)) {
      if (M(E)) {
        return E.value;
      } else if (E.get === undefined) {
        return undefined;
      } else {
        return t(E.get, I);
      }
    } else if (b(O = C(S))) {
      return w(O, L, I);
    } else {
      return undefined;
    }
  }
});