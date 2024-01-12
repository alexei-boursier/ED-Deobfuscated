import * as b from "84326";
var M = require("5112")("toStringTag");
var v = Object;
var C = b(function () {
  return arguments;
}()) == "Arguments";
__webpack_module__.exports = i ? b : function (S) {
  var L;
  var I;
  var E;
  if (S === undefined) {
    return "Undefined";
  } else if (S === null) {
    return "Null";
  } else if (typeof (I = function (S, L) {
    try {
      return S[L];
    } catch {}
  }(L = v(S), M)) == "string") {
    return I;
  } else if (C) {
    return b(L);
  } else if ((E = b(L)) == "Object" && t(L.callee)) {
    return "Arguments";
  } else {
    return E;
  }
};