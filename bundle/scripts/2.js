__webpack_module__.exports = function (I) {
  return function () {
    var y = {};
    for (var w in this._events) {
      var E = this._events[w];
      if (E.id.toString().indexOf("#") == -1) {
        y[E.id] = E;
      }
    }
    return y;
  }.bind(I);
};