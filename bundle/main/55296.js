var a = {}.propertyIsEnumerable;
var i = Object.getOwnPropertyDescriptor;
var t = i && !a.call({
  1: 2
}, 1);
__webpack_exports__.f = t ? function (k) {
  var M = i(this, k);
  return !!M && M.enumerable;
} : a;