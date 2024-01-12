import * as i from "60614";
import * as t from "4154";
var b = t.all;
__webpack_module__.exports = t.IS_HTMLDDA ? function (k) {
  if (typeof k == "object") {
    return k !== null;
  } else {
    return i(k) || k === b;
  }
} : function (k) {
  if (typeof k == "object") {
    return k !== null;
  } else {
    return i(k);
  }
};