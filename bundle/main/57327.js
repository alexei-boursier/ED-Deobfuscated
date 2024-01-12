var t = require("42092").filter;
i({
  target: "Array",
  proto: true,
  forced: !require("81194")("filter")
}, {
  filter: function (v) {
    return t(this, v, arguments.length > 1 ? arguments[1] : undefined);
  }
});