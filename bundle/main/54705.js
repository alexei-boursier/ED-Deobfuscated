var b = /#|\.prototype\./;
function k(S, L) {
  var I = v[M(S)];
  return I == w || I != C && (t(L) ? i(L) : !!L);
}
var M = k.normalize = function (S) {
  return String(S).replace(b, ".").toLowerCase();
};
var v = k.data = {};
var C = k.NATIVE = "N";
var w = k.POLYFILL = "P";
__webpack_module__.exports = k;