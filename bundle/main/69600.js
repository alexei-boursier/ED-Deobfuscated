var v = t([].join);
i({
  target: "Array",
  proto: true,
  forced: b != Object || !M("join", ",")
}, {
  join: function (L) {
    return v(k(this), L === undefined ? "," : L);
  }
});