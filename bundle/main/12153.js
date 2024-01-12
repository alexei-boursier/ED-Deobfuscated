import * as t from "45007";
import * as b from "94650";
export let x = (() => {
  class M {
    constructor() {
      this._datePipe = new t.ifA();
    }
    validate(C) {
      let w = Object.isExists(this.elemToCompare) ? this.elemToCompare : C.value;
      if (t.C_1.isDate(w)) {
        w = this._datePipe.transform(w, "dd/MM/yyyy");
      }
      if (w && !/^\d{2}\/\d{2}\/\d{4}$/i.test(w)) {
        return {
          validateDate: false
        };
      } else {
        return null;
      }
    }
  }
  M.ɵfac = function (C) {
    return new (C || M)();
  };
  M.ɵdir = b.lG2({
    type: M,
    selectors: [["", "edValidateDate", ""]],
    inputs: {
      elemToCompare: "elemToCompare"
    },
    features: [b._Bn([{
      provide: i.Cf,
      useExisting: M,
      multi: true
    }])]
  });
  return M;
})();