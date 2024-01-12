import * as t from "94650";
export let h = (() => {
  class k {
    static comparePwd(v, C) {
      return v === C;
    }
    validate(v) {
      if (Object.isExists(v) && Object.isExists(this.compareWith) && !k.comparePwd(this.compareWith.value, v.value)) {
        return {
          mdpIdentiques: true
        };
      } else {
        return null;
      }
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵdir = t.lG2({
    type: k,
    selectors: [["", "edSamePasswordValidator", ""]],
    inputs: {
      compareWith: "compareWith"
    },
    features: [t._Bn([{
      provide: i.Cf,
      useExisting: k,
      multi: true
    }])]
  });
  return k;
})();