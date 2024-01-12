import * as t from "94650";
export let b = (() => {
  class k {
    static forRoot(v) {
      return {
        ngModule: k,
        providers: [{
          provide: i.W,
          useValue: v
        }]
      };
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵmod = t.oAB({
    type: k
  });
  k.ɵinj = t.cJS({});
  return k;
})();