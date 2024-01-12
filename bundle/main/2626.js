var i = require("3070").f;
__webpack_module__.exports = function (t, b, k) {
  if (!(k in t)) {
    i(t, k, {
      configurable: true,
      get: function () {
        return b[k];
      },
      set: function (M) {
        b[k] = M;
      }
    });
  }
};