import * as i from "19781";
var b = Function.prototype;
var k = i && Object.getOwnPropertyDescriptor;
var M = t(b, "name");
var v = M && function () {}.name === "something";
var C = M && (!i || i && k(b, "name").configurable);
__webpack_module__.exports = {
  EXISTS: M,
  PROPER: v,
  CONFIGURABLE: C
};