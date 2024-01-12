import * as i from "47293";
var b = require("17854").RegExp;
var k = i(function () {
  var C = b("a", "y");
  C.lastIndex = 2;
  return C.exec("abcd") != null;
});
var M = k || i(function () {
  return !b("a", "y").sticky;
});
var v = k || i(function () {
  var C = b("^r", "gy");
  C.lastIndex = 2;
  return C.exec("str") != null;
});
__webpack_module__.exports = {
  BROKEN_CARET: v,
  MISSED_STICKY: M,
  UNSUPPORTED_Y: k
};