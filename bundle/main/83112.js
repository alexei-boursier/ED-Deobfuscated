var t = require("76650").start;
i({
  target: "String",
  proto: true,
  forced: require("54986")
}, {
  padStart: function (M) {
    return t(this, M, arguments.length > 1 ? arguments[1] : undefined);
  }
});