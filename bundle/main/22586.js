export let Z = (() => {
  class k {
    transform(v) {
      if (i.FSr.isNotEmptyString(v)) {
        return v.trim().replace(/\s/g, "");
      } else {
        return v;
      }
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵpipe = t.Yjl({
    name: "trim",
    type: k,
    pure: true
  });
  return k;
})();