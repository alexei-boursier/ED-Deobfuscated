import * as b from "5465";
var k = i(Function.toString);
if (!t(b.inspectSource)) {
  b.inspectSource = function (M) {
    return k(M);
  };
}
__webpack_module__.exports = b.inspectSource;