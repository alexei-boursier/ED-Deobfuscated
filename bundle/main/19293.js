import * as i from "45007";
export let Y = (() => {
  class k {
    transform(v) {
      if (!v || v === "") {
        return [];
      }
      let C = v;
      const w = v.split(i.IZV).length;
      for (let S = 0; S < w - 1; S++) {
        C = C.replace(`${i.IZV}${S}`, i.IZV);
      }
      return C.split(i.IZV);
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵpipe = t.Yjl({
    name: "textHolesToArray",
    type: k,
    pure: true
  });
  return k;
})();