var i = {
  "./fr": 1636,
  "node_modules/moment/locale/fr": 1636
};
function t(k) {
  var M = b(k);
  return __webpack_require__(M);
}
function b(k) {
  if (!Object.hasOwn(i, k)) {
    var M = new Error("Cannot find module '" + k + "'");
    M.code = "MODULE_NOT_FOUND";
    throw M;
  }
  return i[k];
}
t.keys = function () {
  return Object.keys(i);
};
t.resolve = b;
__webpack_module__.exports = t;
t.id = 86563;