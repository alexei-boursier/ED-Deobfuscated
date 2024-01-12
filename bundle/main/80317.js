import * as t from "70111";
var b = i.document;
var k = t(b) && t(b.createElement);
__webpack_module__.exports = function (M) {
  if (k) {
    return b.createElement(M);
  } else {
    return {};
  }
};