var b = require("17854").RegExp;
__webpack_module__.exports = i(function () {
  var k = b(".", "s");
  return !k.dotAll || !k.exec("\n") || k.flags !== "s";
});