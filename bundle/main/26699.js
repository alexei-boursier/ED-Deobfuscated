var t = require("41318").includes;
i({
  target: "Array",
  proto: true,
  forced: b(function () {
    return !Array(1).includes();
  })
}, {
  includes: function (C) {
    return t(this, C, arguments.length > 1 ? arguments[1] : undefined);
  }
});
k("includes");