import * as M from "72309";
var C = M("string-to-symbol-registry");
var w = M("symbol-to-string-registry");
i({
  target: "Symbol",
  stat: true,
  forced: !v
}, {
  for: function (S) {
    var L = k(S);
    if (b(C, L)) {
      return C[L];
    }
    var I = t("Symbol")(L);
    C[L] = I;
    w[I] = L;
    return I;
  }
});