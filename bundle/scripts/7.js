var y = __webpack_require__(1);
var w = y !== undefined && y || typeof self !== "undefined" && self || window;
var E = Function.prototype.apply;
function R(C, N) {
  this._id = C;
  this._clearFn = N;
}
__webpack_exports__.setTimeout = function () {
  return new R(E.call(setTimeout, w, arguments), clearTimeout);
};
__webpack_exports__.setInterval = function () {
  return new R(E.call(setInterval, w, arguments), clearInterval);
};
__webpack_exports__.clearTimeout = __webpack_exports__.clearInterval = function (C) {
  if (C) {
    C.close();
  }
};
R.prototype.unref = R.prototype.ref = function () {};
R.prototype.close = function () {
  this._clearFn.call(w, this._id);
};
__webpack_exports__.enroll = function (C, N) {
  clearTimeout(C._idleTimeoutId);
  C._idleTimeout = N;
};
__webpack_exports__.unenroll = function (C) {
  clearTimeout(C._idleTimeoutId);
  C._idleTimeout = -1;
};
__webpack_exports__._unrefActive = __webpack_exports__.active = function (C) {
  clearTimeout(C._idleTimeoutId);
  var N = C._idleTimeout;
  if (N >= 0) {
    C._idleTimeoutId = setTimeout(function () {
      if (C._onTimeout) {
        C._onTimeout();
      }
    }, N);
  }
};
require("8");
__webpack_exports__.setImmediate = typeof self !== "undefined" && self.setImmediate || y !== undefined && y.setImmediate || this && this.setImmediate;
__webpack_exports__.clearImmediate = typeof self !== "undefined" && self.clearImmediate || y !== undefined && y.clearImmediate || this && this.clearImmediate;