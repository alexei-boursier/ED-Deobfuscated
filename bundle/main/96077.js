var t = String;
var b = TypeError;
__webpack_module__.exports = function (k) {
  if (typeof k == "object" || i(k)) {
    return k;
  }
  throw b("Can't set " + t(k) + " as a prototype");
};