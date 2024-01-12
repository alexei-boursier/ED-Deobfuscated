import * as k from "94650";
export let m = (() => {
  class v extends (0, b.kCV)() {
    constructor() {
      super();
    }
    checkInput(w) {
      if (Object.values(w).filter(L => L === true).length !== this.combien) {
        this.myFormGroup.setErrors({
          nbCheckBoxInvalid: true
        });
      }
    }
    ngOnChanges(w) {
      if (Object.isExists(w.myFormGroup) && w.myFormGroup.currentValue instanceof i.cw && w.myFormGroup.currentValue !== w.myFormGroup.previousValue) {
        if (Object.isExists(this._sub)) {
          this._sub.unsubscribe();
        }
        this._sub = this.myFormGroup.valueChanges.pipe((0, t.R)(this.componentDestroyed$)).subscribe(S => this.checkInput(S));
      }
    }
  }
  v.ɵfac = function (w) {
    return new (w || v)();
  };
  v.ɵdir = k.lG2({
    type: v,
    selectors: [["", "edCheckboxEqual", ""]],
    inputs: {
      myFormGroup: "myFormGroup",
      combien: "combien"
    },
    features: [k.qOj, k.TTD]
  });
  return v;
})();