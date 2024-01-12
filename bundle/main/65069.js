var k = t([].reverse);
var M = [1, 2];
i({
  target: "Array",
  proto: true,
  forced: String(M) === String(M.reverse())
}, {
  reverse: function () {
    if (b(this)) {
      this.length = this.length;
    }
    return k(this);
  }
});