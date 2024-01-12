import * as i from "21470";
import * as b from "34374";
var k = i(i.bind);
__webpack_module__.exports = function (M, v) {
  t(M);
  if (v === undefined) {
    return M;
  } else if (b) {
    return k(M, v);
  } else {
    return function () {
      return M.apply(v, arguments);
    };
  }
};