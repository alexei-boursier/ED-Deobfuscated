var xe = Math.ceil;
var a = Math.floor;
__webpack_module__.exports = Math.trunc || function (t) {
  var b = +t;
  return (b > 0 ? a : xe)(b);
};