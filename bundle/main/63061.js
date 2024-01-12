var i = require("13383").IteratorPrototype;
function v() {
  return this;
}
__webpack_module__.exports = function (C, w, S, L) {
  var I = w + " Iterator";
  C.prototype = t(i, {
    next: b(+!L, S)
  });
  k(C, I, false, true);
  M[I] = v;
  return C;
};