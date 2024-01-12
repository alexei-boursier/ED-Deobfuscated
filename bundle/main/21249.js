var t = require("42092").map;
i({
  target: "Array",
  proto: true,
  forced: !require("81194")("map")
}, {
  map: function (v) {
    return t(this, v, arguments.length > 1 ? arguments[1] : undefined);
  }
});