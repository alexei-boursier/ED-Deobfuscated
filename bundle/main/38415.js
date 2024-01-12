var k = RangeError;
__webpack_module__.exports = function (v) {
  var C = t(b(this));
  var w = "";
  var S = i(v);
  if (S < 0 || S == Infinity) {
    throw k("Wrong number of repetitions");
  }
  for (; S > 0; (S >>>= 1) && (C += C)) {
    if (S & 1) {
      w += C;
    }
  }
  return w;
};