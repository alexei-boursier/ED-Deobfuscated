var M = require("62423").onFreeze;
var v = Object.freeze;
i({
  target: "Object",
  stat: true,
  forced: b(function () {
    v(1);
  }),
  sham: !t
}, {
  freeze: function (S) {
    if (v && k(S)) {
      return v(M(S));
    } else {
      return S;
    }
  }
});