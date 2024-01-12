import * as i from "94650";
import * as b from "26101";
function v(I, E) {
  if (I & 1) {
    const O = i.EpF();
    i.TgZ(0, "input", 5);
    i.NdJ("valueChange", function (U) {
      i.CHM(O);
      const B = i.oxw(2);
      return i.KtG(B.onPinValueChange(U.index));
    })("pasteValue", function (U) {
      i.CHM(O);
      const B = i.oxw(2);
      return i.KtG(B.onPaste(U));
    })("focusNext", function (U) {
      i.CHM(O);
      const B = i.oxw(2);
      return i.KtG(B.focusNext(U));
    })("focusPrev", function (U) {
      i.CHM(O);
      const B = i.oxw(2);
      return i.KtG(B.focusPrev(U));
    })("blur", function () {
      i.CHM(O);
      const U = i.oxw(2);
      return i.KtG(U.onBlur());
    });
    i.qZA();
  }
  if (I & 2) {
    const O = E.index;
    const x = i.oxw().index;
    const U = i.oxw();
    i.ekj("otp-box__input--invalid", U.isBoxInvalid(U.getIndex(x, O)))("otp-box__input--desktop", U.isDesktop);
    i.Q6J("type", U.type)("index", U.getIndex(x, O))("disabled", U.disabled);
  }
}
function C(I, E) {
  if (I & 1) {
    i.TgZ(0, "div", 1);
    i.YNc(1, v, 1, 7, "input", 2);
    i.ALo(2, "trackByProperty");
    i.TgZ(3, "div", 3);
    i._UZ(4, "div", 4);
    i.qZA()();
  }
  if (I & 2) {
    const O = E.last;
    const x = i.oxw();
    i.xp6(1);
    i.Q6J("ngForOf", x.boxInGroupList)("ngForTrackBy", i.lcZ(2, 4, "$index"));
    i.xp6(3);
    i.ekj("otp-box__group-split--last", O);
  }
}
const w = {
  provide: t.JU,
  useExisting: (0, i.Gpc)(() => e),
  multi: true
};
export let e = (() => {
  class I {
    constructor(O) {
      this.cd = O;
      this.length = 1;
      this.groupLength = 1;
      this.type = "text";
      this.valueChanged = new i.vpe();
      this.class = "ed-otp-sms";
      this.disabled = false;
      this.value = "";
      this.isDesktop = true;
    }
    ngOnInit() {
      this.groupList = Array(this.groupLength).fill(0);
      this.boxInGroupLength = Math.ceil(this.length / this.groupLength);
      this.boxInGroupList = Array(this.boxInGroupLength).fill(0);
    }
    registerOnTouched(O) {
      this.onTouch = O;
    }
    registerOnChange(O) {
      this.onCtrlChange = O;
    }
    writeValue(O) {
      this.value = O;
    }
    setDisabledState(O) {
      this.disabled = O;
    }
    onBlur() {
      setTimeout(() => {
        if (!this.otpInputItemElem.some(x => document.activeElement === x.nativeElement) && this.formControl.dirty) {
          this.onTouch();
          this.cd.detectChanges();
        }
      });
    }
    onPaste(O) {
      const x = O.slice(0, this.length);
      this._setValue(x);
      this.otpInputDirective.forEach((U, B) => U.value = this.value[B]);
      this.focusByIndex(this.value.length);
      this.onTouch();
    }
    onPinValueChange(O) {
      const x = this.otpInputDirective.reduce((U, B) => U + (B.value.trim().length === 1 ? B.value.trim() : " "), "");
      this._setValue(x);
    }
    _setValue(O) {
      if (this.value === O) {
        return;
      }
      this.value = O;
      const x = O.split("").map(U => U !== " " ? U : "");
      this.valueChanged.emit(x);
      this.onCtrlChange(x.join(""));
    }
    focusByIndex(O) {
      const x = Math.max(0, Math.min(O, this.otpInputItemElem.length - 1));
      this.otpInputItemElem.toArray()[x].nativeElement.focus();
    }
    focusNext(O) {
      if (O < this.otpInputItemElem.length - 1) {
        this.otpInputItemElem.toArray()[O + 1].nativeElement.focus();
      }
    }
    focusPrev(O) {
      if (O > 0) {
        this.otpInputItemElem.toArray()[O - 1].nativeElement.focus();
      }
    }
    getIndex(O, x) {
      return O * this.boxInGroupLength + x;
    }
    isBoxInvalid(O) {
      return this.formControl.touched && L(this.value[O]);
    }
  }
  I.ɵfac = function (O) {
    return new (O || I)(i.Y36(i.sBO));
  };
  I.ɵcmp = i.Xpm({
    type: I,
    selectors: [["ed-otp-sms"]],
    viewQuery: function (O, x) {
      if (O & 1) {
        i.Gf(b.vQ, 5);
        i.Gf(b.vQ, 5, i.SBq);
      }
      if (O & 2) {
        let U;
        if (i.iGM(U = i.CRH())) {
          x.otpInputDirective = U;
        }
        if (i.iGM(U = i.CRH())) {
          x.otpInputItemElem = U;
        }
      }
    },
    hostVars: 2,
    hostBindings: function (O, x) {
      if (O & 2) {
        i.ekj("ed-otp-sms", x.class);
      }
    },
    inputs: {
      length: "length",
      groupLength: "groupLength",
      type: "type",
      formControl: "formControl"
    },
    outputs: {
      valueChanged: "valueChanged"
    },
    features: [i._Bn([w])],
    decls: 2,
    vars: 4,
    consts: [["class", "otp-box__group", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "otp-box__group"], ["edOtpInput", "", "tabindex", "0", "autocapitalize", "off", 3, "type", "otp-box__input--invalid", "otp-box__input--desktop", "index", "disabled", "valueChange", "pasteValue", "focusNext", "focusPrev", "blur", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "otp-box__group-split-wrapper"], [1, "otp-box__group-split"], ["edOtpInput", "", "tabindex", "0", "autocapitalize", "off", 3, "type", "index", "disabled", "valueChange", "pasteValue", "focusNext", "focusPrev", "blur"]],
    template: function (O, x) {
      if (O & 1) {
        i.YNc(0, C, 5, 6, "div", 0);
        i.ALo(1, "trackByProperty");
      }
      if (O & 2) {
        i.Q6J("ngForOf", x.groupList)("ngForTrackBy", i.lcZ(1, 2, "$index"));
      }
    },
    dependencies: [k.sg, b.vQ, M.$],
    styles: [".ed-otp-sms{display:flex;flex-wrap:wrap}.otp-box__group{display:flex;justify-content:center}.ed-otp-sms__group-split-wrapper{width:17px;display:flex;justify-content:center;align-items:center;padding:0 2px}.ed-otp-sms__group-split{width:100%;height:3px;background-color:#0000006b}.ed-otp-sms__group-split--last{background-color:transparent}.otp-box__input{width:2.5em;height:2.5em;border:1px solid rgba(0,0,0,.32);transition:border .2s,transform .2s;border-radius:5px;margin:.3em;text-align:center;font-size:18px;display:flex;justify-content:center;align-items:center;-webkit-appearance:none}.otp-box__input--desktop:hover{border:1px solid rgba(0,0,0,.8)}.otp-box__input:focus{outline:none;border:2px solid rgba(33,150,243,.8);transform:translate(-1px,-2px) scale(1.05)}.otp-box__input:disabled{background-color:initial;opacity:.6}.otp-box__input--invalid{border:2px solid rgba(255,0,0,.5)}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return I;
})();
const L = I => I == null || I.trim() === "";