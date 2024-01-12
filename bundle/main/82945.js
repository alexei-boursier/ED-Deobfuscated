import * as t from "94650";
export let U = (() => {
  class k {
    constructor(v) {
      this.elRef = v;
      this.focusOnBlur = false;
    }
    ngOnInit() {
      if (!Object.isExists(this.edAutofocus) || typeof this.edAutofocus == "string" && !i.FSr.isNotEmptyString(this.edAutofocus)) {
        this.edAutofocus = true;
      }
    }
    ngAfterViewInit() {
      if (this.edAutofocus === true) {
        const v = this.elRef.nativeElement;
        if (v) {
          setTimeout(() => v.focus(), 0);
        }
      }
    }
    ngOnChanges(v) {
      if (Object.isExists(v.focusOnBlur) && v.focusOnBlur.previousValue === false && v.focusOnBlur.currentValue === true) {
        this.focusOnBlur = true;
        this.onBlur(this.elRef.nativeElement);
      }
    }
    onBlur(v) {
      if (!!this.focusOnBlur) {
        setTimeout(() => v.focus({
          preventScroll: true
        }), 500);
      }
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)(t.Y36(t.SBq));
  };
  k.ɵdir = t.lG2({
    type: k,
    selectors: [["", "edAutofocus", ""]],
    hostBindings: function (v, C) {
      if (v & 1) {
        t.NdJ("blur", function (S) {
          return C.onBlur(S.target);
        });
      }
    },
    inputs: {
      edAutofocus: "edAutofocus",
      focusOnBlur: "focusOnBlur"
    },
    features: [t.TTD]
  });
  return k;
})();