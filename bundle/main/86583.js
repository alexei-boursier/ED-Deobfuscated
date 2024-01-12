var v = Math.min;
var C = [].lastIndexOf;
var w = !!C && 1 / [1].lastIndexOf(1, -0) < 0;
var S = M("lastIndexOf");
__webpack_module__.exports = w || !S ? function (E) {
  if (w) {
    return i(C, this, arguments) || 0;
  }
  var O = t(this);
  var x = k(O);
  var U = x - 1;
  if (arguments.length > 1) {
    U = v(U, b(arguments[1]));
  }
  if (U < 0) {
    U = x + U;
  }
  for (; U >= 0; U--) {
    if (U in O && O[U] === E) {
      return U || 0;
    }
  }
  return -1;
} : C;