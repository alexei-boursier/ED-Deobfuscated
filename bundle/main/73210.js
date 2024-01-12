var t = require("53111").trim;
i({
  target: "String",
  proto: true,
  forced: require("76091")("trim")
}, {
  trim: function () {
    return t(this);
  }
});