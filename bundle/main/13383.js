var I;
var E;
var O;
import * as M from "79518";
import * as w from "31913";
var S = C("iterator");
var L = false;
if ([].keys) {
  if ("next" in (O = [].keys())) {
    if ((E = M(M(O))) !== Object.prototype) {
      I = E;
    }
  } else {
    L = true;
  }
}
if (!b(I) || i(function () {
  var U = {};
  return I[S].call(U) !== U;
})) {
  I = {};
} else if (w) {
  I = k(I);
}
if (!t(I[S])) {
  v(I, S, function () {
    return this;
  });
}
__webpack_module__.exports = {
  IteratorPrototype: I,
  BUGGY_SAFARI_ITERATORS: L
};