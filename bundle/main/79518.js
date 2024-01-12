var v = k("IE_PROTO");
var C = Object;
var w = C.prototype;
__webpack_module__.exports = M ? C.getPrototypeOf : function (S) {
  var L = b(S);
  if (i(L, v)) {
    return L[v];
  }
  var I = L.constructor;
  if (t(I) && L instanceof I) {
    return I.prototype;
  } else if (L instanceof C) {
    return w;
  } else {
    return null;
  }
};