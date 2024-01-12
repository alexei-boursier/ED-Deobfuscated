__webpack_module__.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var v;
  var k = false;
  var M = {};
  try {
    (v = i(Object.prototype, "__proto__", "set"))(M, []);
    k = M instanceof Array;
  } catch {}
  return function (w, S) {
    t(w);
    b(S);
    if (k) {
      v(w, S);
    } else {
      w.__proto__ = S;
    }
    return w;
  };
}() : undefined);