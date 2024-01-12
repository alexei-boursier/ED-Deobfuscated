import * as t from "19670";
__webpack_module__.exports = function (k, M, v) {
  var C;
  var w;
  t(k);
  try {
    if (!(C = b(k, "return"))) {
      if (M === "throw") {
        throw v;
      }
      return v;
    }
    C = i(C, k);
  } catch (S) {
    w = true;
    C = S;
  }
  if (M === "throw") {
    throw v;
  }
  if (w) {
    throw C;
  }
  t(C);
  return v;
};