var t = require("5112")("match");
__webpack_module__.exports = function (b) {
  var k = /./;
  try {
    "/./"[b](k);
  } catch {
    try {
      k[t] = false;
      return "/./"[b](k);
    } catch {}
  }
  return false;
};