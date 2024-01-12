import * as b from "92597";
var C = i.Symbol;
var w = t("wks");
var S = v ? C.for || C : C && C.withoutSetter || k;
__webpack_module__.exports = function (L) {
  if (!b(w, L)) {
    w[L] = M && b(C, L) ? C[L] : S("Symbol." + L);
  }
  return w[L];
};