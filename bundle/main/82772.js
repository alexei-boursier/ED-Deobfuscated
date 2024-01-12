var b = require("41318").indexOf;
var M = t([].indexOf);
var v = !!M && 1 / M([1], 1, -0) < 0;
i({
  target: "Array",
  proto: true,
  forced: v || !k("indexOf")
}, {
  indexOf: function (S) {
    var L = arguments.length > 1 ? arguments[1] : undefined;
    if (v) {
      return M(this, S, L) || 0;
    } else {
      return b(this, S, L);
    }
  }
});