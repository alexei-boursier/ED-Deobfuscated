var C = M("symbol-to-string-registry");
i({
  target: "Symbol",
  stat: true,
  forced: !v
}, {
  keyFor: function (S) {
    if (!b(S)) {
      throw TypeError(k(S) + " is not a symbol");
    }
    if (t(C, S)) {
      return C[S];
    }
  }
});