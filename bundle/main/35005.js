import * as i from "17854";
function b(k) {
  if (t(k)) {
    return k;
  } else {
    return undefined;
  }
}
__webpack_module__.exports = function (k, M) {
  if (arguments.length < 2) {
    return b(i[k]);
  } else {
    return i[k] && i[k][M];
  }
};