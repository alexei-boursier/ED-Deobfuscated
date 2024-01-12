var b = TypeError;
var k = Object.getOwnPropertyDescriptor;
var M = i && !function () {
  if (this !== undefined) {
    return true;
  }
  try {
    Object.defineProperty([], "length", {
      writable: false
    }).length = 1;
  } catch (v) {
    return v instanceof TypeError;
  }
}();
__webpack_module__.exports = M ? function (v, C) {
  if (t(v) && !k(v, "length").writable) {
    throw b("Cannot set read only .length");
  }
  return v.length = C;
} : function (v, C) {
  return v.length = C;
};