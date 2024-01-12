function I(w) {
  return (I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (E) {
    return typeof E;
  } : function (E) {
    if (E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof E;
    }
  })(w);
}
var y;
y = function () {
  return this;
}();
try {
  y = y || new Function("return this")();
} catch {
  if ((typeof window === "undefined" ? "undefined" : I(window)) === "object") {
    y = window;
  }
}
__webpack_module__.exports = y;