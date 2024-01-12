var b = require("17854").RegExp;
__webpack_module__.exports = i(function () {
  var k = b("(?<a>b)", "g");
  return k.exec("b").groups.a !== "b" || "b".replace(k, "$<a>c") !== "bc";
});