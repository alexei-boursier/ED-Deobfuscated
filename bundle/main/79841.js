var t = require("28710").codeAt;
i({
  target: "String",
  proto: true
}, {
  codePointAt: function (k) {
    return t(this, k);
  }
});