import * as i from "24006";
import * as t from "94650";
export let v = (() => {
  class k {
    ngOnChanges(v) {
      if ("edMaxlength" in v) {
        this.edMaxlength = Number(v.edMaxlength.currentValue) || 300;
        this._createValidator();
        if (this._onChange) {
          this._onChange();
        }
      }
    }
    validate(v) {
      if (Object.isExists(this.edMaxlength) && this._validator) {
        return this._validator(v);
      } else {
        return null;
      }
    }
    registerOnValidatorChange(v) {
      this._onChange = v;
    }
    _createValidator() {
      this._validator = i.kI.maxLength(this.edMaxlength);
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵdir = t.lG2({
    type: k,
    selectors: [["", "edMaxlength", "", "ngModel", ""], ["", "edMaxlength", "", "formControlName", ""], ["", "edMaxlength", "", "formControl", ""]],
    inputs: {
      edMaxlength: "edMaxlength"
    },
    features: [t._Bn([{
      provide: i.Cf,
      useExisting: k,
      multi: true
    }]), t.TTD]
  });
  return k;
})();