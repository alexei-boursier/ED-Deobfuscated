import * as b from "94650";
export let c = (() => {
  class M {
    ngOnInit() {
      if (!Object.isExists(this.withnozero) || typeof this.withnozero == "string" && !t.FSr.isNotEmptyString(this.withnozero)) {
        this.withnozero = true;
      }
    }
    validate(C) {
      if ((this.withnozero ? new RegExp(M.INTEGER_NONZERO_REGEXP) : new RegExp(M.INTEGER_REGEXP)).test(C.value)) {
        return null;
      } else {
        return {
          entierWithNoZero: true
        };
      }
    }
  }
  M.INTEGER_REGEXP = /^-?[0-9]+$/;
  M.INTEGER_NONZERO_REGEXP = /^-?[1-9]\d*$/;
  M.ɵfac = function (C) {
    return new (C || M)();
  };
  M.ɵdir = b.lG2({
    type: M,
    selectors: [["", "edEntierWithNoZero", ""]],
    inputs: {
      withnozero: ["edEntierWithNoZero", "withnozero"]
    },
    features: [b._Bn([{
      provide: i.Cf,
      useExisting: M,
      multi: true
    }])]
  });
  return M;
})();