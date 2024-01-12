__webpack_module__.exports = function (a, i) {
  i ||= [0, ""];
  a = String(a);
  var t = parseFloat(a, 10);
  i[0] = t;
  i[1] = a.match(/[\d.\-\+]*\s*(.*)/)[1] || "";
  return i;
};