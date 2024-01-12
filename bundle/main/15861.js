function i(b, k, M, v, C, w, S) {
  try {
    var L = b[w](S);
    var I = L.value;
  } catch (E) {
    M(E);
    return;
  }
  if (L.done) {
    k(I);
  } else {
    Promise.resolve(I).then(v, C);
  }
}
export function Z(b) {
  return function () {
    var k = this;
    var M = arguments;
    return new Promise(function (v, C) {
      var w = b.apply(k, M);
      function S(I) {
        i(w, v, C, S, L, "next", I);
      }
      function L(I) {
        i(w, v, C, S, L, "throw", I);
      }
      S(undefined);
    });
  };
}