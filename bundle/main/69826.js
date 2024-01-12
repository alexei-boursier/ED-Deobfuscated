var t = require("42092").find;
var k = "find";
var M = true;
if (k in []) {
  Array(1)[k](function () {
    M = false;
  });
}
i({
  target: "Array",
  proto: true,
  forced: M
}, {
  find: function (C) {
    return t(this, C, arguments.length > 1 ? arguments[1] : undefined);
  }
});
b(k);