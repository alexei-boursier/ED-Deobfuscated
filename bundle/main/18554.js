var v = TypeError;
__webpack_module__.exports = function (C, w) {
  var S = arguments.length < 2 ? M(C) : w;
  if (t(S)) {
    return b(i(S, C));
  }
  throw v(k(C) + " is not iterable");
};