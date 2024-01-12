var t = Function.prototype;
var b = t.apply;
var k = t.call;
__webpack_module__.exports = typeof Reflect == "object" && Reflect.apply || (i ? k.bind(b) : function () {
  return k.apply(b, arguments);
});