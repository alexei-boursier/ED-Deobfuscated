import * as i from "46916";
import * as t from "60614";
import * as b from "70111";
var k = TypeError;
__webpack_module__.exports = function (M, v) {
  var C;
  var w;
  if (v === "string" && t(C = M.toString) && !b(w = i(C, M)) || t(C = M.valueOf) && !b(w = i(C, M)) || v !== "string" && t(C = M.toString) && !b(w = i(C, M))) {
    return w;
  }
  throw k("Can't convert object to primitive value");
};