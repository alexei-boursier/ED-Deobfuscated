import * as i from "94650";
export let m = (() => {
  class v {
    constructor(w, S, L, I) {
      this.elementRef = w;
      this.renderer = S;
      this.unformattedPaste = L;
      this.document = I;
      this.propValueAccessor = "textContent";
      this.editable = true;
    }
    callOnChange() {
      if (typeof this.onChange == "function") {
        this.onChange(this.elementRef.nativeElement[this.propValueAccessor]);
      }
    }
    callOnTouched() {
      if (typeof this.onTouched == "function") {
        this.onTouched();
      }
    }
    writeValue(w) {
      this.renderer.setProperty(this.elementRef.nativeElement, this.propValueAccessor, w ?? "");
    }
    registerOnChange(w) {
      this.onChange = w;
    }
    registerOnTouched(w) {
      this.onTouched = w;
    }
    setDisabledState(w) {
      if (w) {
        this.renderer.setAttribute(this.elementRef.nativeElement, "disabled", "true");
        this.removeDisabledState = this.renderer.listen(this.elementRef.nativeElement, "keydown", this.listenerDisabledState);
      } else if (this.removeDisabledState) {
        this.renderer.removeAttribute(this.elementRef.nativeElement, "disabled");
        this.removeDisabledState();
      }
    }
    preventFormatedPaste(w) {
      if (this.unformattedPaste === null || this.unformattedPaste == "false" || !this.document.execCommand) {
        return;
      }
      w.preventDefault();
      const {
        clipboardData: S
      } = w;
      const L = S?.getData("text/plain") || S?.getData("text");
      this.document.execCommand("insertText", false, L);
    }
    listenerDisabledState(w) {
      w.preventDefault();
    }
  }
  v.ɵfac = function (w) {
    return new (w || v)(i.Y36(i.SBq), i.Y36(i.Qsj), i.$8M("unformattedPaste"), i.Y36(b.K0));
  };
  v.ɵdir = i.lG2({
    type: v,
    selectors: [["", "editable", "", "formControlName", ""], ["", "editable", "", "formControl", ""], ["", "editable", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function (w, S) {
      if (w & 1) {
        i.NdJ("input", function () {
          return S.callOnChange();
        })("blur", function () {
          return S.callOnTouched();
        })("paste", function (I) {
          return S.preventFormatedPaste(I);
        });
      }
      if (w & 2) {
        i.uIk("contenteditable", S.editable);
      }
    },
    inputs: {
      propValueAccessor: "propValueAccessor",
      editable: "editable"
    },
    features: [i._Bn([{
      provide: t.JU,
      useExisting: (0, i.Gpc)(() => v),
      multi: true
    }])]
  });
  return v;
})();
export let f = (() => {
  class v {}
  v.ɵfac = function (w) {
    return new (w || v)();
  };
  v.ɵmod = i.oAB({
    type: v
  });
  v.ɵinj = i.cJS({});
  return v;
})();