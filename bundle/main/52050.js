import * as k from "7556";
var M = Object.isExtensible;
var v = i(function () {
  M(1);
});
__webpack_module__.exports = v || k ? function (w) {
  return !!t(w) && (!k || b(w) != "ArrayBuffer") && (!M || M(w));
} : M;