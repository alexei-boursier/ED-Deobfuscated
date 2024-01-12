var b = require("8006").f;
var M = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
__webpack_module__.exports.f = function (w) {
  if (M && i(w) == "Window") {
    return function (C) {
      try {
        return b(C);
      } catch {
        return k(M);
      }
    }(w);
  } else {
    return b(t(w));
  }
};