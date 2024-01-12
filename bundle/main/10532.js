export let S = (() => {
  class b {
    transform(M, v) {
      if (!v) {
        return M;
      }
      const C = new RegExp(v, "gi");
      const w = M.match(C);
      if (w) {
        return M.replace(C, `<mark>${w[0]}</mark>`);
      } else {
        return M;
      }
    }
  }
  b.ɵfac = function (M) {
    return new (M || b)();
  };
  b.ɵpipe = i.Yjl({
    name: "highlight",
    type: b,
    pure: true
  });
  return b;
})();