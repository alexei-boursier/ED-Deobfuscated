import * as i from "94650";
const S = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export let vQ = (() => {
  class E {
    constructor(x) {
      this.elemRef = x;
      this.pasteValue = new i.vpe();
      this.valueChange = new i.vpe();
      this.focusNext = new i.vpe();
      this.focusPrev = new i.vpe();
      this.class = "otp-box__input";
    }
    onInput(x) {
      this._onInput(x);
    }
    onKeydown(x) {
      this._onKeydown(x);
    }
    onPaste(x) {
      this._onPaste(x);
    }
    set value(x) {
      if (x !== this.value) {
        this.elemRef.nativeElement.value = x ? x.trim() : "";
      }
    }
    get value() {
      return this.elemRef.nativeElement.value;
    }
    _onPaste(x) {
      x.preventDefault();
      const U = x.clipboardData.getData("text").trim();
      if (this.isPastedValueValid(U)) {
        this.pasteValue.emit(U);
      }
    }
    _onKeydown(x) {
      this.valueOnKeydown = this.value;
      if (x.key === "ArrowRight") {
        x.preventDefault();
        this._focusNext();
        return;
      } else if (x.keyCode === 8 && !this.hasValue || x.key === "ArrowLeft") {
        x.preventDefault();
        this._focusPrev();
        return;
      } else if (x.keyCode === 8 || x.key === "Delete") {
        x.preventDefault();
        this.setValueAndEmit(null);
        return;
      } else {
        return undefined;
      }
    }
    _onInput(x) {
      let U = this.value.replace(this.valueOnKeydown, "");
      U = U || this.valueOnKeydown;
      if (I(U)) {
        this.setValueAndEmit(U);
        this._focusNext();
      } else {
        this.setValueAndEmit(null);
      }
    }
    setValueAndEmit(x) {
      this.value = x;
      this.valueChange.emit({
        value: x,
        index: this.index
      });
    }
    isPastedValueValid(x) {
      return typeof x == "string" && Array.from(x).every(U => I(U));
    }
    _focusNext() {
      this.focusNext.emit(this.index);
    }
    _focusPrev() {
      this.focusPrev.emit(this.index);
    }
    get hasValue() {
      return this.value.length === 1;
    }
  }
  E.ɵfac = function (x) {
    return new (x || E)(i.Y36(i.SBq));
  };
  E.ɵdir = i.lG2({
    type: E,
    selectors: [["", "edOtpInput", ""]],
    hostVars: 2,
    hostBindings: function (x, U) {
      if (x & 1) {
        i.NdJ("input", function (F) {
          return U.onInput(F);
        })("keydown", function (F) {
          return U.onKeydown(F);
        })("paste", function (F) {
          return U.onPaste(F);
        });
      }
      if (x & 2) {
        i.ekj("otp-box__input", U.class);
      }
    },
    inputs: {
      index: "index"
    },
    outputs: {
      pasteValue: "pasteValue",
      valueChange: "valueChange",
      focusNext: "focusNext",
      focusPrev: "focusPrev"
    }
  });
  return E;
})();
const I = E => S.includes(E);