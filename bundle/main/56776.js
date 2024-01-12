import * as i from "94650";
import * as k from "13620";
import * as M from "36895";
function v(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, "   ");
    i.qZA();
  }
}
function C(Ze, pt) {
  if (Ze & 1) {
    const yt = i.EpF();
    i.TgZ(0, "td")(1, "a", 1);
    i.NdJ("click", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeMinutes(hn.minuteStep));
    });
    i._UZ(2, "span", 2);
    i.qZA()();
  }
  if (Ze & 2) {
    const yt = i.oxw();
    i.xp6(1);
    i.ekj("disabled", !yt.canIncrementMinutes || !yt.isEditable);
  }
}
function w(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, " ");
    i.qZA();
  }
}
function S(Ze, pt) {
  if (Ze & 1) {
    const yt = i.EpF();
    i.TgZ(0, "td")(1, "a", 1);
    i.NdJ("click", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeSeconds(hn.secondsStep));
    });
    i._UZ(2, "span", 2);
    i.qZA()();
  }
  if (Ze & 2) {
    const yt = i.oxw();
    i.xp6(1);
    i.ekj("disabled", !yt.canIncrementSeconds || !yt.isEditable);
  }
}
function L(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, "   ");
    i.qZA();
  }
}
function I(Ze, pt) {
  if (Ze & 1) {
    i._UZ(0, "td");
  }
}
function E(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, " : ");
    i.qZA();
  }
}
function O(Ze, pt) {
  if (Ze & 1) {
    const yt = i.EpF();
    i.TgZ(0, "td", 4)(1, "input", 5);
    i.NdJ("wheel", function (hn) {
      i.CHM(yt);
      const Kt = i.oxw();
      Kt.prevDef(hn);
      return i.KtG(Kt.changeMinutes(Kt.minuteStep * Kt.wheelSign(hn), "wheel"));
    })("keydown.ArrowUp", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeMinutes(hn.minuteStep, "key"));
    })("keydown.ArrowDown", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeMinutes(-hn.minuteStep, "key"));
    })("change", function (hn) {
      i.CHM(yt);
      const Kt = i.oxw();
      return i.KtG(Kt.updateMinutes(hn.target));
    });
    i.qZA()();
  }
  if (Ze & 2) {
    const yt = i.oxw();
    i.ekj("has-error", yt.invalidMinutes);
    i.xp6(1);
    i.ekj("is-invalid", yt.invalidMinutes);
    i.Q6J("placeholder", yt.minutesPlaceholder)("readonly", yt.readonlyInput)("disabled", yt.disabled)("value", yt.minutes);
    i.uIk("aria-label", yt.labelMinutes);
  }
}
function x(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, " : ");
    i.qZA();
  }
}
function U(Ze, pt) {
  if (Ze & 1) {
    const yt = i.EpF();
    i.TgZ(0, "td", 4)(1, "input", 5);
    i.NdJ("wheel", function (hn) {
      i.CHM(yt);
      const Kt = i.oxw();
      Kt.prevDef(hn);
      return i.KtG(Kt.changeSeconds(Kt.secondsStep * Kt.wheelSign(hn), "wheel"));
    })("keydown.ArrowUp", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeSeconds(hn.secondsStep, "key"));
    })("keydown.ArrowDown", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeSeconds(-hn.secondsStep, "key"));
    })("change", function (hn) {
      i.CHM(yt);
      const Kt = i.oxw();
      return i.KtG(Kt.updateSeconds(hn.target));
    });
    i.qZA()();
  }
  if (Ze & 2) {
    const yt = i.oxw();
    i.ekj("has-error", yt.invalidSeconds);
    i.xp6(1);
    i.ekj("is-invalid", yt.invalidSeconds);
    i.Q6J("placeholder", yt.secondsPlaceholder)("readonly", yt.readonlyInput)("disabled", yt.disabled)("value", yt.seconds);
    i.uIk("aria-label", yt.labelSeconds);
  }
}
function B(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, "   ");
    i.qZA();
  }
}
function F(Ze, pt) {
  if (Ze & 1) {
    const yt = i.EpF();
    i.TgZ(0, "td")(1, "button", 8);
    i.NdJ("click", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.toggleMeridian());
    });
    i._uU(2);
    i.qZA()();
  }
  if (Ze & 2) {
    const yt = i.oxw();
    i.xp6(1);
    i.ekj("disabled", !yt.isEditable || !yt.canToggleMeridian);
    i.Q6J("disabled", !yt.isEditable || !yt.canToggleMeridian);
    i.xp6(1);
    i.hij("", yt.meridian, " ");
  }
}
function Z(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, "   ");
    i.qZA();
  }
}
function X(Ze, pt) {
  if (Ze & 1) {
    const yt = i.EpF();
    i.TgZ(0, "td")(1, "a", 1);
    i.NdJ("click", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeMinutes(-hn.minuteStep));
    });
    i._UZ(2, "span", 7);
    i.qZA()();
  }
  if (Ze & 2) {
    const yt = i.oxw();
    i.xp6(1);
    i.ekj("disabled", !yt.canDecrementMinutes || !yt.isEditable);
  }
}
function le(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, " ");
    i.qZA();
  }
}
function fe(Ze, pt) {
  if (Ze & 1) {
    const yt = i.EpF();
    i.TgZ(0, "td")(1, "a", 1);
    i.NdJ("click", function () {
      i.CHM(yt);
      const hn = i.oxw();
      return i.KtG(hn.changeSeconds(-hn.secondsStep));
    });
    i._UZ(2, "span", 7);
    i.qZA()();
  }
  if (Ze & 2) {
    const yt = i.oxw();
    i.xp6(1);
    i.ekj("disabled", !yt.canDecrementSeconds || !yt.isEditable);
  }
}
function q(Ze, pt) {
  if (Ze & 1) {
    i.TgZ(0, "td");
    i._uU(1, "   ");
    i.qZA();
  }
}
function j(Ze, pt) {
  if (Ze & 1) {
    i._UZ(0, "td");
  }
}
export let lx = (() => {
  class Ze {
    writeValue(yt) {
      return {
        type: Ze.WRITE_VALUE,
        payload: yt
      };
    }
    changeHours(yt) {
      return {
        type: Ze.CHANGE_HOURS,
        payload: yt
      };
    }
    changeMinutes(yt) {
      return {
        type: Ze.CHANGE_MINUTES,
        payload: yt
      };
    }
    changeSeconds(yt) {
      return {
        type: Ze.CHANGE_SECONDS,
        payload: yt
      };
    }
    setTime(yt) {
      return {
        type: Ze.SET_TIME_UNIT,
        payload: yt
      };
    }
    updateControls(yt) {
      return {
        type: Ze.UPDATE_CONTROLS,
        payload: yt
      };
    }
  }
  Ze.WRITE_VALUE = "[timepicker] write value from ng model";
  Ze.CHANGE_HOURS = "[timepicker] change hours";
  Ze.CHANGE_MINUTES = "[timepicker] change minutes";
  Ze.CHANGE_SECONDS = "[timepicker] change seconds";
  Ze.SET_TIME_UNIT = "[timepicker] set time unit";
  Ze.UPDATE_CONTROLS = "[timepicker] update controls";
  Ze.ɵfac = function (yt) {
    return new (yt || Ze)();
  };
  Ze.ɵprov = i.Yz7({
    token: Ze,
    factory: Ze.ɵfac,
    providedIn: "platform"
  });
  return Ze;
})();
function pe(Ze) {
  return !!Ze && (!(Ze instanceof Date) || !isNaN(Ze.getHours())) && (typeof Ze != "string" || pe(new Date(Ze)));
}
function re(Ze, pt) {
  return (!Ze.min || pt >= Ze.min) && (!Ze.max || pt <= Ze.max);
}
function Re(Ze) {
  if (typeof Ze === "undefined") {
    return NaN;
  } else if (typeof Ze == "number") {
    return Ze;
  } else {
    return parseInt(Ze, 10);
  }
}
function Ue(Ze, pt = false) {
  const yt = Re(Ze);
  if (isNaN(yt) || yt < 0 || yt > (pt ? 12 : 24)) {
    return NaN;
  } else {
    return yt;
  }
}
function ot(Ze) {
  const pt = Re(Ze);
  if (isNaN(pt) || pt < 0 || pt > 60) {
    return NaN;
  } else {
    return pt;
  }
}
function st(Ze) {
  const pt = Re(Ze);
  if (isNaN(pt) || pt < 0 || pt > 60) {
    return NaN;
  } else {
    return pt;
  }
}
function rt(Ze) {
  if (typeof Ze == "string") {
    return new Date(Ze);
  } else {
    return Ze;
  }
}
function Oe(Ze, pt) {
  if (!Ze) {
    return Oe(ke(new Date(), 0, 0, 0), pt);
  }
  if (!pt) {
    return Ze;
  }
  let yt = Ze.getHours();
  let Wt = Ze.getMinutes();
  let hn = Ze.getSeconds();
  if (pt.hour) {
    yt += Re(pt.hour);
  }
  if (pt.minute) {
    Wt += Re(pt.minute);
  }
  if (pt.seconds) {
    hn += Re(pt.seconds);
  }
  return ke(Ze, yt, Wt, hn);
}
function Ee(Ze, pt) {
  let yt = Ue(pt.hour);
  const Wt = ot(pt.minute);
  const hn = st(pt.seconds) || 0;
  if (pt.isPM && yt !== 12) {
    yt += 12;
  }
  if (Ze) {
    if (isNaN(yt) || isNaN(Wt)) {
      return Ze;
    } else {
      return ke(Ze, yt, Wt, hn);
    }
  } else if (isNaN(yt) || isNaN(Wt)) {
    return Ze;
  } else {
    return ke(new Date(), yt, Wt, hn);
  }
}
function ke(Ze, pt, yt, Wt) {
  const hn = new Date(Ze.getFullYear(), Ze.getMonth(), Ze.getDate(), pt, yt, Wt, Ze.getMilliseconds());
  hn.setFullYear(Ze.getFullYear());
  hn.setMonth(Ze.getMonth());
  hn.setDate(Ze.getDate());
  return hn;
}
function Be(Ze) {
  const pt = Ze.toString();
  if (pt.length > 1) {
    return pt;
  } else {
    return `0${pt}`;
  }
}
function De(Ze, pt) {
  return !isNaN(Ue(Ze, pt));
}
function Qe(Ze) {
  return !isNaN(ot(Ze));
}
function It(Ze) {
  return !isNaN(st(Ze));
}
function Et(Ze, pt = "0", yt = "0", Wt) {
  return De(Ze, Wt) && Qe(pt) && It(yt);
}
function lt(Ze, pt) {
  return !Ze.readonlyInput && !Ze.disabled && (!pt || (pt.source !== "wheel" || !!Ze.mousewheel) && (pt.source !== "key" || !!Ze.arrowkeys));
}
function Lt(Ze) {
  const {
    hourStep: pt,
    minuteStep: yt,
    secondsStep: Wt,
    readonlyInput: hn,
    disabled: Kt,
    mousewheel: on,
    arrowkeys: Rn,
    showSpinners: In,
    showMeridian: di,
    showSeconds: Si,
    meridians: Zi,
    min: $i,
    max: Qi
  } = Ze;
  return {
    hourStep: pt,
    minuteStep: yt,
    secondsStep: Wt,
    readonlyInput: hn,
    disabled: Kt,
    mousewheel: on,
    arrowkeys: Rn,
    showSpinners: In,
    showMeridian: di,
    showSeconds: Si,
    meridians: Zi,
    min: $i,
    max: Qi
  };
}
export let Sm = (() => {
  class Ze {
    constructor() {
      this.hourStep = 1;
      this.minuteStep = 5;
      this.secondsStep = 10;
      this.showMeridian = true;
      this.meridians = ["AM", "PM"];
      this.readonlyInput = false;
      this.disabled = false;
      this.allowEmptyTime = false;
      this.mousewheel = true;
      this.arrowkeys = true;
      this.showSpinners = true;
      this.showSeconds = false;
      this.showMinutes = true;
      this.hoursPlaceholder = "HH";
      this.minutesPlaceholder = "MM";
      this.secondsPlaceholder = "SS";
      this.ariaLabelHours = "hours";
      this.ariaLabelMinutes = "minutes";
      this.ariaLabelSeconds = "seconds";
    }
  }
  Ze.ɵfac = function (yt) {
    return new (yt || Ze)();
  };
  Ze.ɵprov = i.Yz7({
    token: Ze,
    factory: Ze.ɵfac,
    providedIn: "root"
  });
  return Ze;
})();
const Me = {
  value: undefined,
  config: new Sm(),
  controls: {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  }
};
function ne(Ze = Me, pt) {
  switch (pt.type) {
    case lx.WRITE_VALUE:
      return Object.assign({}, Ze, {
        value: pt.payload
      });
    case lx.CHANGE_HOURS:
      {
        if (!lt(Ze.config, pt.payload) || !function et(Ze, pt) {
          return !!Ze.step && (Ze.step <= 0 || !!pt.canIncrementHours) && (Ze.step >= 0 || !!pt.canDecrementHours);
        }(pt.payload, Ze.controls)) {
          return Ze;
        }
        const yt = Oe(Ze.value, {
          hour: pt.payload.step
        });
        if (!Ze.config.max && !Ze.config.min || re(Ze.config, yt)) {
          return Object.assign({}, Ze, {
            value: yt
          });
        } else {
          return Ze;
        }
      }
    case lx.CHANGE_MINUTES:
      {
        if (!lt(Ze.config, pt.payload) || !function St(Ze, pt) {
          return !!Ze.step && (Ze.step <= 0 || !!pt.canIncrementMinutes) && (Ze.step >= 0 || !!pt.canDecrementMinutes);
        }(pt.payload, Ze.controls)) {
          return Ze;
        }
        const yt = Oe(Ze.value, {
          minute: pt.payload.step
        });
        if (!Ze.config.max && !Ze.config.min || re(Ze.config, yt)) {
          return Object.assign({}, Ze, {
            value: yt
          });
        } else {
          return Ze;
        }
      }
    case lx.CHANGE_SECONDS:
      {
        if (!lt(Ze.config, pt.payload) || !function ve(Ze, pt) {
          return !!Ze.step && (Ze.step <= 0 || !!pt.canIncrementSeconds) && (Ze.step >= 0 || !!pt.canDecrementSeconds);
        }(pt.payload, Ze.controls)) {
          return Ze;
        }
        const yt = Oe(Ze.value, {
          seconds: pt.payload.step
        });
        if (!Ze.config.max && !Ze.config.min || re(Ze.config, yt)) {
          return Object.assign({}, Ze, {
            value: yt
          });
        } else {
          return Ze;
        }
      }
    case lx.SET_TIME_UNIT:
      {
        if (!lt(Ze.config)) {
          return Ze;
        }
        const yt = Ee(Ze.value, pt.payload);
        return Object.assign({}, Ze, {
          value: yt
        });
      }
    case lx.UPDATE_CONTROLS:
      {
        const yt = function ft(Ze, pt) {
          const {
            min: hn,
            max: Kt,
            hourStep: on,
            minuteStep: Rn,
            secondsStep: In,
            showSeconds: di
          } = pt;
          const Si = {
            canIncrementHours: true,
            canIncrementMinutes: true,
            canIncrementSeconds: true,
            canDecrementHours: true,
            canDecrementMinutes: true,
            canDecrementSeconds: true,
            canToggleMeridian: true
          };
          if (!Ze) {
            return Si;
          }
          if (Kt) {
            const Zi = Oe(Ze, {
              hour: on
            });
            Si.canIncrementHours = Kt > Zi && Ze.getHours() + on < 24;
            if (!Si.canIncrementHours) {
              const $i = Oe(Ze, {
                minute: Rn
              });
              Si.canIncrementMinutes = di ? Kt > $i : Kt >= $i;
            }
            if (!Si.canIncrementMinutes) {
              const $i = Oe(Ze, {
                seconds: In
              });
              Si.canIncrementSeconds = Kt >= $i;
            }
            if (Ze.getHours() < 12) {
              Si.canToggleMeridian = Oe(Ze, {
                hour: 12
              }) < Kt;
            }
          }
          if (hn) {
            const Zi = Oe(Ze, {
              hour: -on
            });
            Si.canDecrementHours = hn < Zi;
            if (!Si.canDecrementHours) {
              const $i = Oe(Ze, {
                minute: -Rn
              });
              Si.canDecrementMinutes = di ? hn < $i : hn <= $i;
            }
            if (!Si.canDecrementMinutes) {
              const $i = Oe(Ze, {
                seconds: -In
              });
              Si.canDecrementSeconds = hn <= $i;
            }
            if (Ze.getHours() >= 12) {
              Si.canToggleMeridian = Oe(Ze, {
                hour: -12
              }) > hn;
            }
          }
          return Si;
        }(Ze.value, pt.payload);
        const Wt = {
          value: Ze.value,
          config: pt.payload,
          controls: yt
        };
        if (Ze.config.showMeridian !== Wt.config.showMeridian && Ze.value) {
          Wt.value = new Date(Ze.value);
        }
        return Object.assign({}, Ze, Wt);
      }
    default:
      return Ze;
  }
}
let me = (() => {
  class Ze extends k.s {
    constructor() {
      const yt = new b.X({
        type: "[mini-ngrx] dispatcher init"
      });
      super(yt, ne, new k.F(Me, yt, ne));
    }
  }
  Ze.ɵfac = function (yt) {
    return new (yt || Ze)();
  };
  Ze.ɵprov = i.Yz7({
    token: Ze,
    factory: Ze.ɵfac,
    providedIn: "platform"
  });
  return Ze;
})();
const it = {
  provide: t.JU,
  useExisting: (0, i.Gpc)(() => EV),
  multi: true
};
export let EV = (() => {
  class Ze {
    constructor(yt, Wt, hn, Kt) {
      this._cd = Wt;
      this._store = hn;
      this._timepickerActions = Kt;
      this.hourStep = 1;
      this.minuteStep = 5;
      this.secondsStep = 10;
      this.readonlyInput = false;
      this.disabled = false;
      this.mousewheel = true;
      this.arrowkeys = true;
      this.showSpinners = true;
      this.showMeridian = true;
      this.showMinutes = true;
      this.showSeconds = false;
      this.meridians = ["AM", "PM"];
      this.hoursPlaceholder = "HH";
      this.minutesPlaceholder = "MM";
      this.secondsPlaceholder = "SS";
      this.isValid = new i.vpe();
      this.meridianChange = new i.vpe();
      this.hours = "";
      this.minutes = "";
      this.seconds = "";
      this.meridian = "";
      this.invalidHours = false;
      this.invalidMinutes = false;
      this.invalidSeconds = false;
      this.labelHours = "hours";
      this.labelMinutes = "minutes";
      this.labelSeconds = "seconds";
      this.canIncrementHours = true;
      this.canIncrementMinutes = true;
      this.canIncrementSeconds = true;
      this.canDecrementHours = true;
      this.canDecrementMinutes = true;
      this.canDecrementSeconds = true;
      this.canToggleMeridian = true;
      this.onChange = Function.prototype;
      this.onTouched = Function.prototype;
      this.config = yt;
      Object.assign(this, this.config);
      this.timepickerSub = hn.select(on => on.value).subscribe(on => {
        this._renderTime(on);
        this.onChange(on);
        this._store.dispatch(this._timepickerActions.updateControls(Lt(this)));
      });
      hn.select(on => on.controls).subscribe(on => {
        const Rn = Et(this.hours, this.minutes, this.seconds, this.isPM());
        const In = this.config.allowEmptyTime && this.isOneOfDatesIsEmpty() || Rn;
        this.isValid.emit(In);
        Object.assign(this, on);
        Wt.markForCheck();
      });
    }
    get isSpinnersVisible() {
      return this.showSpinners && !this.readonlyInput;
    }
    get isEditable() {
      return !this.readonlyInput && !this.disabled;
    }
    resetValidation() {
      this.invalidHours = false;
      this.invalidMinutes = false;
      this.invalidSeconds = false;
    }
    isPM() {
      return this.showMeridian && this.meridian === this.meridians[1];
    }
    prevDef(yt) {
      yt.preventDefault();
    }
    wheelSign(yt) {
      return Math.sign(yt.deltaY || 0) * -1;
    }
    ngOnChanges() {
      this._store.dispatch(this._timepickerActions.updateControls(Lt(this)));
    }
    changeHours(yt, Wt = "") {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.changeHours({
        step: yt,
        source: Wt
      }));
    }
    changeMinutes(yt, Wt = "") {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.changeMinutes({
        step: yt,
        source: Wt
      }));
    }
    changeSeconds(yt, Wt = "") {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.changeSeconds({
        step: yt,
        source: Wt
      }));
    }
    updateHours(yt) {
      this.resetValidation();
      this.hours = yt.value;
      const Wt = De(this.hours, this.isPM()) && this.isValidLimit();
      if ((!this.config.allowEmptyTime || !this.isOneOfDatesIsEmpty()) && !Wt) {
        this.invalidHours = true;
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }
      this._updateTime();
    }
    updateMinutes(yt) {
      this.resetValidation();
      this.minutes = yt.value;
      const Wt = Qe(this.minutes) && this.isValidLimit();
      if ((!this.config.allowEmptyTime || !this.isOneOfDatesIsEmpty()) && !Wt) {
        this.invalidMinutes = true;
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }
      this._updateTime();
    }
    updateSeconds(yt) {
      this.resetValidation();
      this.seconds = yt.value;
      const Wt = It(this.seconds) && this.isValidLimit();
      if ((!this.config.allowEmptyTime || !this.isOneOfDatesIsEmpty()) && !Wt) {
        this.invalidSeconds = true;
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }
      this._updateTime();
    }
    isValidLimit() {
      return function Yt(Ze, pt, yt) {
        const Wt = Ee(new Date(), Ze);
        return !!Wt && (!pt || Wt <= pt) && (!yt || Wt >= yt);
      }({
        hour: this.hours,
        minute: this.minutes,
        seconds: this.seconds,
        isPM: this.isPM()
      }, this.max, this.min);
    }
    isOneOfDatesIsEmpty() {
      return function Dn(Ze, pt, yt) {
        return Ze.length === 0 || pt.length === 0 || yt.length === 0;
      }(this.hours, this.minutes, this.seconds);
    }
    _updateTime() {
      const hn = Et(this.hours, this.showMinutes ? this.minutes : undefined, this.showSeconds ? this.seconds : undefined, this.isPM());
      if ((!this.config.allowEmptyTime || !this.isOneOfDatesIsEmpty()) && !hn) {
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }
      this._store.dispatch(this._timepickerActions.setTime({
        hour: this.hours,
        minute: this.minutes,
        seconds: this.seconds,
        isPM: this.isPM()
      }));
    }
    toggleMeridian() {
      if (this.showMeridian && this.isEditable) {
        this._store.dispatch(this._timepickerActions.changeHours({
          step: 12,
          source: ""
        }));
      }
    }
    writeValue(yt) {
      if (pe(yt)) {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.writeValue(rt(yt)));
      } else if (yt == null) {
        this._store.dispatch(this._timepickerActions.writeValue());
      }
    }
    registerOnChange(yt) {
      this.onChange = yt;
    }
    registerOnTouched(yt) {
      this.onTouched = yt;
    }
    setDisabledState(yt) {
      this.disabled = yt;
      this._cd.markForCheck();
    }
    ngOnDestroy() {
      var yt;
      if ((yt = this.timepickerSub) !== null && yt !== undefined) {
        yt.unsubscribe();
      }
    }
    _renderTime(yt) {
      if (!yt || !pe(yt)) {
        this.hours = "";
        this.minutes = "";
        this.seconds = "";
        this.meridian = this.meridians[0];
        this.meridianChange.emit(this.meridian);
        return;
      }
      const Wt = rt(yt);
      if (!Wt) {
        return;
      }
      let Kt = Wt.getHours();
      if (this.showMeridian) {
        this.meridian = this.meridians[Kt >= 12 ? 1 : 0];
        this.meridianChange.emit(this.meridian);
        Kt %= 12;
        if (Kt === 0) {
          Kt = 12;
        }
      }
      this.hours = Be(Kt);
      this.minutes = Be(Wt.getMinutes());
      this.seconds = Be(Wt.getUTCSeconds());
    }
  }
  Ze.ɵfac = function (yt) {
    return new (yt || Ze)(i.Y36(Sm), i.Y36(i.sBO), i.Y36(me), i.Y36(lx));
  };
  Ze.ɵcmp = i.Xpm({
    type: Ze,
    selectors: [["timepicker"]],
    inputs: {
      hourStep: "hourStep",
      minuteStep: "minuteStep",
      secondsStep: "secondsStep",
      readonlyInput: "readonlyInput",
      disabled: "disabled",
      mousewheel: "mousewheel",
      arrowkeys: "arrowkeys",
      showSpinners: "showSpinners",
      showMeridian: "showMeridian",
      showMinutes: "showMinutes",
      showSeconds: "showSeconds",
      meridians: "meridians",
      min: "min",
      max: "max",
      hoursPlaceholder: "hoursPlaceholder",
      minutesPlaceholder: "minutesPlaceholder",
      secondsPlaceholder: "secondsPlaceholder"
    },
    outputs: {
      isValid: "isValid",
      meridianChange: "meridianChange"
    },
    features: [i._Bn([it, me]), i.TTD],
    decls: 31,
    vars: 33,
    consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group mb-3", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]],
    template: function (yt, Wt) {
      if (yt & 1) {
        i.TgZ(0, "table")(1, "tbody")(2, "tr", 0)(3, "td")(4, "a", 1);
        i.NdJ("click", function () {
          return Wt.changeHours(Wt.hourStep);
        });
        i._UZ(5, "span", 2);
        i.qZA()();
        i.YNc(6, v, 2, 0, "td", 3);
        i.YNc(7, C, 3, 2, "td", 3);
        i.YNc(8, w, 2, 0, "td", 3);
        i.YNc(9, S, 3, 2, "td", 3);
        i.YNc(10, L, 2, 0, "td", 3);
        i.YNc(11, I, 1, 0, "td", 3);
        i.qZA();
        i.TgZ(12, "tr")(13, "td", 4)(14, "input", 5);
        i.NdJ("wheel", function (Kt) {
          Wt.prevDef(Kt);
          return Wt.changeHours(Wt.hourStep * Wt.wheelSign(Kt), "wheel");
        })("keydown.ArrowUp", function () {
          return Wt.changeHours(Wt.hourStep, "key");
        })("keydown.ArrowDown", function () {
          return Wt.changeHours(-Wt.hourStep, "key");
        })("change", function (Kt) {
          return Wt.updateHours(Kt.target);
        });
        i.qZA()();
        i.YNc(15, E, 2, 0, "td", 3);
        i.YNc(16, O, 2, 9, "td", 6);
        i.YNc(17, x, 2, 0, "td", 3);
        i.YNc(18, U, 2, 9, "td", 6);
        i.YNc(19, B, 2, 0, "td", 3);
        i.YNc(20, F, 3, 4, "td", 3);
        i.qZA();
        i.TgZ(21, "tr", 0)(22, "td")(23, "a", 1);
        i.NdJ("click", function () {
          return Wt.changeHours(-Wt.hourStep);
        });
        i._UZ(24, "span", 7);
        i.qZA()();
        i.YNc(25, Z, 2, 0, "td", 3);
        i.YNc(26, X, 3, 2, "td", 3);
        i.YNc(27, le, 2, 0, "td", 3);
        i.YNc(28, fe, 3, 2, "td", 3);
        i.YNc(29, q, 2, 0, "td", 3);
        i.YNc(30, j, 1, 0, "td", 3);
        i.qZA()()();
      }
      if (yt & 2) {
        i.xp6(2);
        i.Q6J("hidden", !Wt.showSpinners);
        i.xp6(2);
        i.ekj("disabled", !Wt.canIncrementHours || !Wt.isEditable);
        i.xp6(2);
        i.Q6J("ngIf", Wt.showMinutes);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMinutes);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showSeconds);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showSeconds);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMeridian);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMeridian);
        i.xp6(2);
        i.ekj("has-error", Wt.invalidHours);
        i.xp6(1);
        i.ekj("is-invalid", Wt.invalidHours);
        i.Q6J("placeholder", Wt.hoursPlaceholder)("readonly", Wt.readonlyInput)("disabled", Wt.disabled)("value", Wt.hours);
        i.uIk("aria-label", Wt.labelHours);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMinutes);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMinutes);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showSeconds);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showSeconds);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMeridian);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMeridian);
        i.xp6(1);
        i.Q6J("hidden", !Wt.showSpinners);
        i.xp6(2);
        i.ekj("disabled", !Wt.canDecrementHours || !Wt.isEditable);
        i.xp6(2);
        i.Q6J("ngIf", Wt.showMinutes);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMinutes);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showSeconds);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showSeconds);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMeridian);
        i.xp6(1);
        i.Q6J("ngIf", Wt.showMeridian);
      }
    },
    dependencies: [M.O5],
    styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return Ze;
})();
export let Db = (() => {
  class Ze {
    static forRoot() {
      return {
        ngModule: Ze,
        providers: [lx, me]
      };
    }
  }
  Ze.ɵfac = function (yt) {
    return new (yt || Ze)();
  };
  Ze.ɵmod = i.oAB({
    type: Ze
  });
  Ze.ɵinj = i.cJS({
    providers: [me],
    imports: [M.ez]
  });
  return Ze;
})();