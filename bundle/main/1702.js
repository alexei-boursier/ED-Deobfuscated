import * as i from "34374";
var t = Function.prototype;
var b = t.call;
var k = i && t.bind.bind(b, b);
__webpack_module__.exports = i ? k : function (M) {
  return function () {
    return b.apply(M, arguments);
  };
};