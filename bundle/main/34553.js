var t = require("42092").findIndex;
var k = "findIndex";
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
  findIndex: function (C) {
    return t(this, C, arguments.length > 1 ? arguments[1] : undefined);
  }
});
b(k);