import * as i from "43157";
var M = require("5112")("species");
var v = Array;
__webpack_module__.exports = function (C) {
  var w;
  if (i(C) && (t(w = C.constructor) && (w === v || i(w.prototype)) || b(w) && (w = w[M]) === null)) {
    w = undefined;
  }
  if (w === undefined) {
    return v;
  } else {
    return w;
  }
};