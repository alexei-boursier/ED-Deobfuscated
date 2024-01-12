import * as i from "94650";
import * as t from "36895";
/**
       * @license Angular v14.2.11
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let v = (() => {
  class ht {
    constructor(He, dn) {
      this._renderer = He;
      this._elementRef = dn;
      this.onChange = Yi => {};
      this.onTouched = () => {};
    }
    setProperty(He, dn) {
      this._renderer.setProperty(this._elementRef.nativeElement, He, dn);
    }
    registerOnTouched(He) {
      this.onTouched = He;
    }
    registerOnChange(He) {
      this.onChange = He;
    }
    setDisabledState(He) {
      this.setProperty("disabled", He);
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(i.Qsj), i.Y36(i.SBq));
  };
  ht.ɵdir = i.lG2({
    type: ht
  });
  return ht;
})();
let C = (() => {
  class ht extends v {}
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    features: [i.qOj]
  });
  return ht;
})();
export const JU = new i.OlP("NgValueAccessor");
const S = {
  provide: JU,
  useExisting: (0, i.Gpc)(() => Wl),
  multi: true
};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let Wl = (() => {
  class ht extends C {
    writeValue(He) {
      this.setProperty("checked", He);
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("change", function ($r) {
          return dn.onChange($r.target.checked);
        })("blur", function () {
          return dn.onTouched();
        });
      }
    },
    features: [i._Bn([S]), i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const I = {
  provide: JU,
  useExisting: (0, i.Gpc)(() => Fj),
  multi: true
};
const O = new i.OlP("CompositionEventMode");
export let Fj = (() => {
  class ht extends v {
    constructor(He, dn, Yi) {
      super(He, dn);
      this._compositionMode = Yi;
      this._composing = false;
      if (this._compositionMode == null) {
        this._compositionMode = !function E() {
          const ht = (0, t.q)() ? (0, t.q)().getUserAgent() : "";
          return /android (\d+)/.test(ht.toLowerCase());
        }();
      }
    }
    writeValue(He) {
      this.setProperty("value", He ?? "");
    }
    _handleInput(He) {
      if (!this._compositionMode || this._compositionMode && !this._composing) {
        this.onChange(He);
      }
    }
    _compositionStart() {
      this._composing = true;
    }
    _compositionEnd(He) {
      this._composing = false;
      if (this._compositionMode) {
        this.onChange(He);
      }
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(i.Qsj), i.Y36(i.SBq), i.Y36(O, 8));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("input", function ($r) {
          return dn._handleInput($r.target.value);
        })("blur", function () {
          return dn.onTouched();
        })("compositionstart", function () {
          return dn._compositionStart();
        })("compositionend", function ($r) {
          return dn._compositionEnd($r.target.value);
        });
      }
    },
    features: [i._Bn([I]), i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function B(ht) {
  return ht == null || (typeof ht == "string" || Array.isArray(ht)) && ht.length === 0;
}
function _F(ht) {
  return ht != null && typeof ht.length == "number";
}
export const Cf = new i.OlP("NgValidators");
const X = new i.OlP("NgAsyncValidators");
const le = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export class kI {
  static min(dt) {
    return function q(ht) {
      return dt => {
        if (B(dt.value) || B(ht)) {
          return null;
        }
        const He = parseFloat(dt.value);
        if (!isNaN(He) && He < ht) {
          return {
            min: {
              min: ht,
              actual: dt.value
            }
          };
        } else {
          return null;
        }
      };
    }(dt);
  }
  static max(dt) {
    return function j(ht) {
      return dt => {
        if (B(dt.value) || B(ht)) {
          return null;
        }
        const He = parseFloat(dt.value);
        if (!isNaN(He) && He > ht) {
          return {
            max: {
              max: ht,
              actual: dt.value
            }
          };
        } else {
          return null;
        }
      };
    }(dt);
  }
  static required(dt) {
    return G(dt);
  }
  static requiredTrue(dt) {
    return function se(ht) {
      if (ht.value === true) {
        return null;
      } else {
        return {
          required: true
        };
      }
    }(dt);
  }
  static email(dt) {
    return W(dt);
  }
  static minLength(dt) {
    return Pe(dt);
  }
  static maxLength(dt) {
    return Le(dt);
  }
  static pattern(dt) {
    return he(dt);
  }
  static nullValidator(dt) {
    return null;
  }
  static compose(dt) {
    return rt(dt);
  }
  static composeAsync(dt) {
    return Ee(dt);
  }
}
function G(ht) {
  if (B(ht.value)) {
    return {
      required: true
    };
  } else {
    return null;
  }
}
function W(ht) {
  if (B(ht.value) || le.test(ht.value)) {
    return null;
  } else {
    return {
      email: true
    };
  }
}
function Pe(ht) {
  return dt => B(dt.value) || !_F(dt.value) ? null : dt.value.length < ht ? {
    minlength: {
      requiredLength: ht,
      actualLength: dt.value.length
    }
  } : null;
}
function Le(ht) {
  return dt => _F(dt.value) && dt.value.length > ht ? {
    maxlength: {
      requiredLength: ht,
      actualLength: dt.value.length
    }
  } : null;
}
function he(ht) {
  if (!ht) {
    return pe;
  }
  let dt;
  let He;
  if (typeof ht == "string") {
    He = "";
    if (ht.charAt(0) !== "^") {
      He += "^";
    }
    He += ht;
    if (ht.charAt(ht.length - 1) !== "$") {
      He += "$";
    }
    dt = new RegExp(He);
  } else {
    He = ht.toString();
    dt = ht;
  }
  return dn => {
    if (B(dn.value)) {
      return null;
    }
    const Yi = dn.value;
    if (dt.test(Yi)) {
      return null;
    } else {
      return {
        pattern: {
          requiredPattern: He,
          actualValue: Yi
        }
      };
    }
  };
}
function pe(ht) {
  return null;
}
function re(ht) {
  return ht != null;
}
function Re(ht) {
  if ((0, i.QGY)(ht)) {
    return (0, b.D)(ht);
  } else {
    return ht;
  }
}
function Ge(ht) {
  let dt = {};
  ht.forEach(He => {
    dt = He != null ? {
      ...dt,
      ...He
    } : dt;
  });
  if (Object.keys(dt).length === 0) {
    return null;
  } else {
    return dt;
  }
}
function Ue(ht, dt) {
  return dt.map(He => He(ht));
}
function st(ht) {
  return ht.map(dt => function ot(ht) {
    return !ht.validate;
  }(dt) ? dt : He => dt.validate(He));
}
function rt(ht) {
  if (!ht) {
    return null;
  }
  const dt = ht.filter(re);
  if (dt.length == 0) {
    return null;
  } else {
    return function (He) {
      return Ge(Ue(He, dt));
    };
  }
}
function _Oe(ht) {
  if (ht != null) {
    return rt(st(ht));
  } else {
    return null;
  }
}
function Ee(ht) {
  if (!ht) {
    return null;
  }
  const dt = ht.filter(re);
  if (dt.length == 0) {
    return null;
  } else {
    return function (He) {
      const dn = Ue(He, dt).map(Re);
      return (0, k.D)(dn).pipe((0, M.U)(Ge));
    };
  }
}
function ke(ht) {
  if (ht != null) {
    return Ee(st(ht));
  } else {
    return null;
  }
}
function Be(ht, dt) {
  if (ht === null) {
    return [dt];
  } else if (Array.isArray(ht)) {
    return [...ht, dt];
  } else {
    return [ht, dt];
  }
}
function De(ht) {
  return ht._rawValidators;
}
function Qe(ht) {
  return ht._rawAsyncValidators;
}
function It(ht) {
  if (ht) {
    if (Array.isArray(ht)) {
      return ht;
    } else {
      return [ht];
    }
  } else {
    return [];
  }
}
function Yt(ht, dt) {
  if (Array.isArray(ht)) {
    return ht.includes(dt);
  } else {
    return ht === dt;
  }
}
function Dn(ht, dt) {
  const He = It(dt);
  It(ht).forEach(Yi => {
    if (!Yt(He, Yi)) {
      He.push(Yi);
    }
  });
  return He;
}
function Et(ht, dt) {
  return It(dt).filter(He => !Yt(ht, He));
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class lt {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  get value() {
    if (this.control) {
      return this.control.value;
    } else {
      return null;
    }
  }
  get valid() {
    if (this.control) {
      return this.control.valid;
    } else {
      return null;
    }
  }
  get invalid() {
    if (this.control) {
      return this.control.invalid;
    } else {
      return null;
    }
  }
  get pending() {
    if (this.control) {
      return this.control.pending;
    } else {
      return null;
    }
  }
  get disabled() {
    if (this.control) {
      return this.control.disabled;
    } else {
      return null;
    }
  }
  get enabled() {
    if (this.control) {
      return this.control.enabled;
    } else {
      return null;
    }
  }
  get errors() {
    if (this.control) {
      return this.control.errors;
    } else {
      return null;
    }
  }
  get pristine() {
    if (this.control) {
      return this.control.pristine;
    } else {
      return null;
    }
  }
  get dirty() {
    if (this.control) {
      return this.control.dirty;
    } else {
      return null;
    }
  }
  get touched() {
    if (this.control) {
      return this.control.touched;
    } else {
      return null;
    }
  }
  get status() {
    if (this.control) {
      return this.control.status;
    } else {
      return null;
    }
  }
  get untouched() {
    if (this.control) {
      return this.control.untouched;
    } else {
      return null;
    }
  }
  get statusChanges() {
    if (this.control) {
      return this.control.statusChanges;
    } else {
      return null;
    }
  }
  get valueChanges() {
    if (this.control) {
      return this.control.valueChanges;
    } else {
      return null;
    }
  }
  get path() {
    return null;
  }
  _setValidators(dt) {
    this._rawValidators = dt || [];
    this._composedValidatorFn = _Oe(this._rawValidators);
  }
  _setAsyncValidators(dt) {
    this._rawAsyncValidators = dt || [];
    this._composedAsyncValidatorFn = ke(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _registerOnDestroy(dt) {
    this._onDestroyCallbacks.push(dt);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach(dt => dt());
    this._onDestroyCallbacks = [];
  }
  reset(dt) {
    if (this.control) {
      this.control.reset(dt);
    }
  }
  hasError(dt, He) {
    return !!this.control && this.control.hasError(dt, He);
  }
  getError(dt, He) {
    if (this.control) {
      return this.control.getError(dt, He);
    } else {
      return null;
    }
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class gN extends lt {
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class a5 extends lt {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ve {
  constructor(dt) {
    this._cd = dt;
  }
  get isTouched() {
    var dt;
    var He;
    return (dt = this._cd) !== null && dt !== undefined && (He = dt.control) !== null && He !== undefined && !!He.touched;
  }
  get isUntouched() {
    var dt;
    var He;
    return (dt = this._cd) !== null && dt !== undefined && (He = dt.control) !== null && He !== undefined && !!He.untouched;
  }
  get isPristine() {
    var dt;
    var He;
    return (dt = this._cd) !== null && dt !== undefined && (He = dt.control) !== null && He !== undefined && !!He.pristine;
  }
  get isDirty() {
    var dt;
    var He;
    return (dt = this._cd) !== null && dt !== undefined && (He = dt.control) !== null && He !== undefined && !!He.dirty;
  }
  get isValid() {
    var dt;
    var He;
    return (dt = this._cd) !== null && dt !== undefined && (He = dt.control) !== null && He !== undefined && !!He.valid;
  }
  get isInvalid() {
    var dt;
    var He;
    return (dt = this._cd) !== null && dt !== undefined && (He = dt.control) !== null && He !== undefined && !!He.invalid;
  }
  get isPending() {
    var dt;
    var He;
    return (dt = this._cd) !== null && dt !== undefined && (He = dt.control) !== null && He !== undefined && !!He.pending;
  }
  get isSubmitted() {
    var dt;
    return (dt = this._cd) !== null && dt !== undefined && !!dt.submitted;
  }
}
export let JJ = (() => {
  class ht extends ve {
    constructor(He) {
      super(He);
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(a5, 2));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function (He, dn) {
      if (He & 2) {
        i.ekj("ng-untouched", dn.isUntouched)("ng-touched", dn.isTouched)("ng-pristine", dn.isPristine)("ng-dirty", dn.isDirty)("ng-valid", dn.isValid)("ng-invalid", dn.isInvalid)("ng-pending", dn.isPending);
      }
    },
    features: [i.qOj]
  });
  return ht;
})();
export let JL = (() => {
  class ht extends ve {
    constructor(He) {
      super(He);
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(gN, 10));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function (He, dn) {
      if (He & 2) {
        i.ekj("ng-untouched", dn.isUntouched)("ng-touched", dn.isTouched)("ng-pristine", dn.isPristine)("ng-dirty", dn.isDirty)("ng-valid", dn.isValid)("ng-invalid", dn.isInvalid)("ng-pending", dn.isPending)("ng-submitted", dn.isSubmitted);
      }
    },
    features: [i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qi = "VALID";
const br = "INVALID";
const Ar = "PENDING";
const vr = "DISABLED";
function Ur(ht) {
  return (wo(ht) ? ht.validators : ht) || null;
}
function Br(ht) {
  if (Array.isArray(ht)) {
    return _Oe(ht);
  } else {
    return ht || null;
  }
}
function rs(ht, dt) {
  return (wo(dt) ? dt.asyncValidators : ht) || null;
}
function vs(ht) {
  if (Array.isArray(ht)) {
    return ke(ht);
  } else {
    return ht || null;
  }
}
function wo(ht) {
  return ht != null && !Array.isArray(ht) && typeof ht == "object";
}
function so(ht, dt, He) {
  const dn = ht.controls;
  if (!(dt ? Object.keys(dn) : dn).length) {
    throw new i.vHH(1000, "");
  }
  if (!dn[He]) {
    throw new i.vHH(1001, "");
  }
}
function sa(ht, dt, He) {
  ht._forEachChild((dn, Yi) => {
    if (He[Yi] === undefined) {
      throw new i.vHH(1002, "");
    }
  });
}
class js {
  constructor(dt, He) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {};
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._rawValidators = dt;
    this._rawAsyncValidators = He;
    this._composedValidatorFn = Br(this._rawValidators);
    this._composedAsyncValidatorFn = vs(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(dt) {
    this._rawValidators = this._composedValidatorFn = dt;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(dt) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = dt;
  }
  get parent() {
    return this._parent;
  }
  get valid() {
    return this.status === Qi;
  }
  get invalid() {
    return this.status === br;
  }
  get pending() {
    return this.status == Ar;
  }
  get disabled() {
    return this.status === vr;
  }
  get enabled() {
    return this.status !== vr;
  }
  get dirty() {
    return !this.pristine;
  }
  get untouched() {
    return !this.touched;
  }
  get updateOn() {
    if (this._updateOn) {
      return this._updateOn;
    } else if (this.parent) {
      return this.parent.updateOn;
    } else {
      return "change";
    }
  }
  setValidators(dt) {
    this._rawValidators = dt;
    this._composedValidatorFn = Br(dt);
  }
  setAsyncValidators(dt) {
    this._rawAsyncValidators = dt;
    this._composedAsyncValidatorFn = vs(dt);
  }
  addValidators(dt) {
    this.setValidators(Dn(dt, this._rawValidators));
  }
  addAsyncValidators(dt) {
    this.setAsyncValidators(Dn(dt, this._rawAsyncValidators));
  }
  removeValidators(dt) {
    this.setValidators(Et(dt, this._rawValidators));
  }
  removeAsyncValidators(dt) {
    this.setAsyncValidators(Et(dt, this._rawAsyncValidators));
  }
  hasValidator(dt) {
    return Yt(this._rawValidators, dt);
  }
  hasAsyncValidator(dt) {
    return Yt(this._rawAsyncValidators, dt);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(dt = {}) {
    this.touched = true;
    if (this._parent && !dt.onlySelf) {
      this._parent.markAsTouched(dt);
    }
  }
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild(dt => dt.markAllAsTouched());
  }
  markAsUntouched(dt = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild(He => {
      He.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !dt.onlySelf) {
      this._parent._updateTouched(dt);
    }
  }
  markAsDirty(dt = {}) {
    this.pristine = false;
    if (this._parent && !dt.onlySelf) {
      this._parent.markAsDirty(dt);
    }
  }
  markAsPristine(dt = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild(He => {
      He.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !dt.onlySelf) {
      this._parent._updatePristine(dt);
    }
  }
  markAsPending(dt = {}) {
    this.status = Ar;
    if (dt.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !dt.onlySelf) {
      this._parent.markAsPending(dt);
    }
  }
  disable(dt = {}) {
    const He = this._parentMarkedDirty(dt.onlySelf);
    this.status = vr;
    this.errors = null;
    this._forEachChild(dn => {
      dn.disable({
        ...dt,
        onlySelf: true
      });
    });
    this._updateValue();
    if (dt.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors({
      ...dt,
      skipPristineCheck: He
    });
    this._onDisabledChange.forEach(dn => dn(true));
  }
  enable(dt = {}) {
    const He = this._parentMarkedDirty(dt.onlySelf);
    this.status = Qi;
    this._forEachChild(dn => {
      dn.enable({
        ...dt,
        onlySelf: true
      });
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: dt.emitEvent
    });
    this._updateAncestors({
      ...dt,
      skipPristineCheck: He
    });
    this._onDisabledChange.forEach(dn => dn(false));
  }
  _updateAncestors(dt) {
    if (this._parent && !dt.onlySelf) {
      this._parent.updateValueAndValidity(dt);
      if (!dt.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  setParent(dt) {
    this._parent = dt;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(dt = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === Qi || this.status === Ar) {
        this._runAsyncValidator(dt.emitEvent);
      }
    }
    if (dt.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !dt.onlySelf) {
      this._parent.updateValueAndValidity(dt);
    }
  }
  _updateTreeValidity(dt = {
    emitEvent: true
  }) {
    this._forEachChild(He => He._updateTreeValidity(dt));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: dt.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? vr : Qi;
  }
  _runValidator() {
    if (this.validator) {
      return this.validator(this);
    } else {
      return null;
    }
  }
  _runAsyncValidator(dt) {
    if (this.asyncValidator) {
      this.status = Ar;
      this._hasOwnPendingAsyncValidator = true;
      const He = Re(this.asyncValidator(this));
      this._asyncValidationSubscription = He.subscribe(dn => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(dn, {
          emitEvent: dt
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  setErrors(dt, He = {}) {
    this.errors = dt;
    this._updateControlsErrors(He.emitEvent !== false);
  }
  get(dt) {
    let He = dt;
    if (He == null || (Array.isArray(He) || (He = He.split(".")), He.length === 0)) {
      return null;
    } else {
      return He.reduce((dn, Yi) => dn && dn._find(Yi), this);
    }
  }
  getError(dt, He) {
    const dn = He ? this.get(He) : this;
    if (dn && dn.errors) {
      return dn.errors[dt];
    } else {
      return null;
    }
  }
  hasError(dt, He) {
    return !!this.getError(dt, He);
  }
  get root() {
    let dt = this;
    for (; dt._parent;) {
      dt = dt._parent;
    }
    return dt;
  }
  _updateControlsErrors(dt) {
    this.status = this._calculateStatus();
    if (dt) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(dt);
    }
  }
  _initObservables() {
    this.valueChanges = new i.vpe();
    this.statusChanges = new i.vpe();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) {
      return vr;
    } else if (this.errors) {
      return br;
    } else if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Ar)) {
      return Ar;
    } else if (this._anyControlsHaveStatus(br)) {
      return br;
    } else {
      return Qi;
    }
  }
  _anyControlsHaveStatus(dt) {
    return this._anyControls(He => He.status === dt);
  }
  _anyControlsDirty() {
    return this._anyControls(dt => dt.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls(dt => dt.touched);
  }
  _updatePristine(dt = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !dt.onlySelf) {
      this._parent._updatePristine(dt);
    }
  }
  _updateTouched(dt = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !dt.onlySelf) {
      this._parent._updateTouched(dt);
    }
  }
  _registerOnCollectionChange(dt) {
    this._onCollectionChange = dt;
  }
  _setUpdateStrategy(dt) {
    if (wo(dt) && dt.updateOn != null) {
      this._updateOn = dt.updateOn;
    }
  }
  _parentMarkedDirty(dt) {
    return !dt && !!this._parent && !!this._parent.dirty && !this._parent._anyControlsDirty();
  }
  _find(dt) {
    return null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class cw extends js {
  constructor(dt, He, dn) {
    super(Ur(He), rs(dn, He));
    this.controls = dt;
    this._initObservables();
    this._setUpdateStrategy(He);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(dt, He) {
    if (this.controls[dt]) {
      return this.controls[dt];
    } else {
      this.controls[dt] = He;
      He.setParent(this);
      He._registerOnCollectionChange(this._onCollectionChange);
      return He;
    }
  }
  addControl(dt, He, dn = {}) {
    this.registerControl(dt, He);
    this.updateValueAndValidity({
      emitEvent: dn.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(dt, He = {}) {
    if (this.controls[dt]) {
      this.controls[dt]._registerOnCollectionChange(() => {});
    }
    delete this.controls[dt];
    this.updateValueAndValidity({
      emitEvent: He.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(dt, He, dn = {}) {
    if (this.controls[dt]) {
      this.controls[dt]._registerOnCollectionChange(() => {});
    }
    delete this.controls[dt];
    if (He) {
      this.registerControl(dt, He);
    }
    this.updateValueAndValidity({
      emitEvent: dn.emitEvent
    });
    this._onCollectionChange();
  }
  contains(dt) {
    return this.controls.hasOwnProperty(dt) && this.controls[dt].enabled;
  }
  setValue(dt, He = {}) {
    sa(this, 0, dt);
    Object.keys(dt).forEach(dn => {
      so(this, true, dn);
      this.controls[dn].setValue(dt[dn], {
        onlySelf: true,
        emitEvent: He.emitEvent
      });
    });
    this.updateValueAndValidity(He);
  }
  patchValue(dt, He = {}) {
    if (dt != null) {
      Object.keys(dt).forEach(dn => {
        const Yi = this.controls[dn];
        if (Yi) {
          Yi.patchValue(dt[dn], {
            onlySelf: true,
            emitEvent: He.emitEvent
          });
        }
      });
      this.updateValueAndValidity(He);
    }
  }
  reset(dt = {}, He = {}) {
    this._forEachChild((dn, Yi) => {
      dn.reset(dt[Yi], {
        onlySelf: true,
        emitEvent: He.emitEvent
      });
    });
    this._updatePristine(He);
    this._updateTouched(He);
    this.updateValueAndValidity(He);
  }
  getRawValue() {
    return this._reduceChildren({}, (dt, He, dn) => {
      dt[dn] = He.getRawValue();
      return dt;
    });
  }
  _syncPendingControls() {
    let dt = this._reduceChildren(false, (He, dn) => !!dn._syncPendingControls() || He);
    if (dt) {
      this.updateValueAndValidity({
        onlySelf: true
      });
    }
    return dt;
  }
  _forEachChild(dt) {
    Object.keys(this.controls).forEach(He => {
      const dn = this.controls[He];
      if (dn) {
        dt(dn, He);
      }
    });
  }
  _setUpControls() {
    this._forEachChild(dt => {
      dt.setParent(this);
      dt._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(dt) {
    for (const [He, dn] of Object.entries(this.controls)) {
      if (this.contains(He) && dt(dn)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    return this._reduceChildren({}, (He, dn, Yi) => {
      if (dn.enabled || this.disabled) {
        He[Yi] = dn.value;
      }
      return He;
    });
  }
  _reduceChildren(dt, He) {
    let dn = dt;
    this._forEachChild((Yi, $r) => {
      dn = He(dn, Yi, $r);
    });
    return dn;
  }
  _allControlsDisabled() {
    for (const dt of Object.keys(this.controls)) {
      if (this.controls[dt].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(dt) {
    if (this.controls.hasOwnProperty(dt)) {
      return this.controls[dt];
    } else {
      return null;
    }
  }
}
class Bn extends cw {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fi(ht, dt) {
  return [...dt.path, ht];
}
function bn(ht, dt) {
  var He;
  var dn;
  Di(ht, dt);
  dt.valueAccessor.writeValue(ht.value);
  if (ht.disabled) {
    if ((He = (dn = dt.valueAccessor).setDisabledState) !== null && He !== undefined) {
      He.call(dn, true);
    }
  }
  (function Vr(ht, dt) {
    dt.valueAccessor.registerOnChange(He => {
      ht._pendingValue = He;
      ht._pendingChange = true;
      ht._pendingDirty = true;
      if (ht.updateOn === "change") {
        is(ht, dt);
      }
    });
  })(ht, dt);
  (function _o(ht, dt) {
    const He = (dn, Yi) => {
      dt.valueAccessor.writeValue(dn);
      if (Yi) {
        dt.viewToModelUpdate(dn);
      }
    };
    ht.registerOnChange(He);
    dt._registerOnDestroy(() => {
      ht._unregisterOnChange(He);
    });
  })(ht, dt);
  (function Or(ht, dt) {
    dt.valueAccessor.registerOnTouched(() => {
      ht._pendingTouched = true;
      if (ht.updateOn === "blur" && ht._pendingChange) {
        is(ht, dt);
      }
      if (ht.updateOn !== "submit") {
        ht.markAsTouched();
      }
    });
  })(ht, dt);
  (function si(ht, dt) {
    if (dt.valueAccessor.setDisabledState) {
      const He = dn => {
        dt.valueAccessor.setDisabledState(dn);
      };
      ht.registerOnDisabledChange(He);
      dt._registerOnDestroy(() => {
        ht._unregisterOnDisabledChange(He);
      });
    }
  })(ht, dt);
}
function pn(ht, dt, He = true) {
  const dn = () => {};
  if (dt.valueAccessor) {
    dt.valueAccessor.registerOnChange(dn);
    dt.valueAccessor.registerOnTouched(dn);
  }
  dr(ht, dt);
  if (ht) {
    dt._invokeOnDestroyCallbacks();
    ht._registerOnCollectionChange(() => {});
  }
}
function An(ht, dt) {
  ht.forEach(He => {
    if (He.registerOnValidatorChange) {
      He.registerOnValidatorChange(dt);
    }
  });
}
function Di(ht, dt) {
  const He = De(ht);
  if (dt.validator !== null) {
    ht.setValidators(Be(He, dt.validator));
  } else if (typeof He == "function") {
    ht.setValidators([He]);
  }
  const dn = Qe(ht);
  if (dt.asyncValidator !== null) {
    ht.setAsyncValidators(Be(dn, dt.asyncValidator));
  } else if (typeof dn == "function") {
    ht.setAsyncValidators([dn]);
  }
  const Yi = () => ht.updateValueAndValidity();
  An(dt._rawValidators, Yi);
  An(dt._rawAsyncValidators, Yi);
}
function dr(ht, dt) {
  let He = false;
  if (ht !== null) {
    if (dt.validator !== null) {
      const Yi = De(ht);
      if (Array.isArray(Yi) && Yi.length > 0) {
        const $r = Yi.filter(wi => wi !== dt.validator);
        if ($r.length !== Yi.length) {
          He = true;
          ht.setValidators($r);
        }
      }
    }
    if (dt.asyncValidator !== null) {
      const Yi = Qe(ht);
      if (Array.isArray(Yi) && Yi.length > 0) {
        const $r = Yi.filter(wi => wi !== dt.asyncValidator);
        if ($r.length !== Yi.length) {
          He = true;
          ht.setAsyncValidators($r);
        }
      }
    }
  }
  const dn = () => {};
  An(dt._rawValidators, dn);
  An(dt._rawAsyncValidators, dn);
  return He;
}
function is(ht, dt) {
  if (ht._pendingDirty) {
    ht.markAsDirty();
  }
  ht.setValue(ht._pendingValue, {
    emitModelToViewChange: false
  });
  dt.viewToModelUpdate(ht._pendingValue);
  ht._pendingChange = false;
}
function kr(ht, dt) {
  Di(ht, dt);
}
function Gs(ht, dt) {
  if (!ht.hasOwnProperty("model")) {
    return false;
  }
  const He = ht.model;
  return !!He.isFirstChange() || !Object.is(dt, He.currentValue);
}
function ho(ht, dt) {
  ht._syncPendingControls();
  dt.forEach(He => {
    const dn = He.control;
    if (dn.updateOn === "submit" && dn._pendingChange) {
      He.viewToModelUpdate(dn._pendingValue);
      dn._pendingChange = false;
    }
  });
}
function ya(ht, dt) {
  if (!dt) {
    return null;
  }
  let He;
  let dn;
  let Yi;
  Array.isArray(dt);
  dt.forEach($r => {
    if ($r.constructor === Fj) {
      He = $r;
    } else if (function Zr(ht) {
      return Object.getPrototypeOf(ht.constructor) === C;
    }($r)) {
      dn = $r;
    } else {
      Yi = $r;
    }
  });
  return Yi || dn || He || null;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qo = {
  provide: gN,
  useExisting: (0, i.Gpc)(() => F)
};
const ea = (() => Promise.resolve())();
export let F = (() => {
  class ht extends gN {
    constructor(He, dn) {
      super();
      this.submitted = false;
      this._directives = new Set();
      this.ngSubmit = new i.vpe();
      this.form = new cw({}, _Oe(He), ke(dn));
    }
    ngAfterViewInit() {
      this._setUpdateStrategy();
    }
    get formDirective() {
      return this;
    }
    get control() {
      return this.form;
    }
    get path() {
      return [];
    }
    get controls() {
      return this.form.controls;
    }
    addControl(He) {
      ea.then(() => {
        const dn = this._findContainer(He.path);
        He.control = dn.registerControl(He.name, He.control);
        bn(He.control, He);
        He.control.updateValueAndValidity({
          emitEvent: false
        });
        this._directives.add(He);
      });
    }
    getControl(He) {
      return this.form.get(He.path);
    }
    removeControl(He) {
      ea.then(() => {
        const dn = this._findContainer(He.path);
        if (dn) {
          dn.removeControl(He.name);
        }
        this._directives.delete(He);
      });
    }
    addFormGroup(He) {
      ea.then(() => {
        const dn = this._findContainer(He.path);
        const Yi = new cw({});
        kr(Yi, He);
        dn.registerControl(He.name, Yi);
        Yi.updateValueAndValidity({
          emitEvent: false
        });
      });
    }
    removeFormGroup(He) {
      ea.then(() => {
        const dn = this._findContainer(He.path);
        if (dn) {
          dn.removeControl(He.name);
        }
      });
    }
    getFormGroup(He) {
      return this.form.get(He.path);
    }
    updateModel(He, dn) {
      ea.then(() => {
        this.form.get(He.path).setValue(dn);
      });
    }
    setValue(He) {
      this.control.setValue(He);
    }
    onSubmit(He) {
      var dn;
      this.submitted = true;
      ho(this.form, this._directives);
      this.ngSubmit.emit(He);
      return (He == null || (dn = He.target) === null || dn === undefined ? undefined : dn.method) === "dialog";
    }
    onReset() {
      this.resetForm();
    }
    resetForm(He) {
      this.form.reset(He);
      this.submitted = false;
    }
    _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.form._updateOn = this.options.updateOn;
      }
    }
    _findContainer(He) {
      He.pop();
      if (He.length) {
        return this.form.get(He);
      } else {
        return this.form;
      }
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(Cf, 10), i.Y36(X, 10));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("submit", function ($r) {
          return dn.onSubmit($r);
        })("reset", function () {
          return dn.onReset();
        });
      }
    },
    inputs: {
      options: ["ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    features: [i._Bn([qo]), i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qa(ht, dt) {
  const He = ht.indexOf(dt);
  if (He > -1) {
    ht.splice(He, 1);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ja(ht) {
  return typeof ht == "object" && ht !== null && Object.keys(ht).length === 2 && "value" in ht && "disabled" in ht;
}
export const NI = class extends js {
  constructor(dt = null, He, dn) {
    super(Ur(He), rs(dn, He));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(dt);
    this._setUpdateStrategy(He);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (wo(He) && (He.nonNullable || He.initialValueIsDefault)) {
      this.defaultValue = ja(dt) ? dt.value : dt;
    }
  }
  setValue(dt, He = {}) {
    this.value = this._pendingValue = dt;
    if (this._onChange.length && He.emitModelToViewChange !== false) {
      this._onChange.forEach(dn => dn(this.value, He.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(He);
  }
  patchValue(dt, He = {}) {
    this.setValue(dt, He);
  }
  reset(dt = this.defaultValue, He = {}) {
    this._applyFormState(dt);
    this.markAsPristine(He);
    this.markAsUntouched(He);
    this.setValue(this.value, He);
    this._pendingChange = false;
  }
  _updateValue() {}
  _anyControls(dt) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(dt) {
    this._onChange.push(dt);
  }
  _unregisterOnChange(dt) {
    qa(this._onChange, dt);
  }
  registerOnDisabledChange(dt) {
    this._onDisabledChange.push(dt);
  }
  _unregisterOnDisabledChange(dt) {
    qa(this._onDisabledChange, dt);
  }
  _forEachChild(dt) {}
  _syncPendingControls() {
    return this.updateOn === "submit" && !(this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) && !(this.setValue(this._pendingValue, {
      onlySelf: true,
      emitModelToViewChange: false
    }), 0);
  }
  _applyFormState(dt) {
    if (ja(dt)) {
      this.value = this._pendingValue = dt.value;
      if (dt.disabled) {
        this.disable({
          onlySelf: true,
          emitEvent: false
        });
      } else {
        this.enable({
          onlySelf: true,
          emitEvent: false
        });
      }
    } else {
      this.value = this._pendingValue = dt;
    }
  }
};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Es = (() => {
  class ht extends gN {
    ngOnInit() {
      this._checkParentType();
      this.formDirective.addFormGroup(this);
    }
    ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormGroup(this);
      }
    }
    get control() {
      return this.formDirective.getFormGroup(this);
    }
    get path() {
      return fi(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    get formDirective() {
      if (this._parent) {
        return this._parent.formDirective;
      } else {
        return null;
      }
    }
    _checkParentType() {}
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    features: [i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qs = {
  provide: gN,
  useExisting: (0, i.Gpc)(() => Mq)
};
export let Mq = (() => {
  class ht extends Es {
    constructor(He, dn, Yi) {
      super();
      this._parent = He;
      this._setValidators(dn);
      this._setAsyncValidators(Yi);
    }
    _checkParentType() {}
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(gN, 5), i.Y36(Cf, 10), i.Y36(X, 10));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: ["ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    features: [i._Bn([qs]), i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ha = {
  provide: a5,
  useExisting: (0, i.Gpc)(() => On)
};
const Ca = (() => Promise.resolve())();
export let On = (() => {
  class ht extends a5 {
    constructor(He, dn, Yi, $r, wi) {
      super();
      this._changeDetectorRef = wi;
      this.control = new NI();
      this._registered = false;
      this.update = new i.vpe();
      this._parent = He;
      this._setValidators(dn);
      this._setAsyncValidators(Yi);
      this.valueAccessor = ya(0, $r);
    }
    ngOnChanges(He) {
      this._checkForErrors();
      if (!this._registered || "name" in He) {
        if (this._registered && (this._checkName(), this.formDirective)) {
          const dn = He.name.previousValue;
          this.formDirective.removeControl({
            name: dn,
            path: this._getPath(dn)
          });
        }
        this._setUpControl();
      }
      if ("isDisabled" in He) {
        this._updateDisabled(He);
      }
      if (Gs(He, this.viewModel)) {
        this._updateValue(this.model);
        this.viewModel = this.model;
      }
    }
    ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeControl(this);
      }
    }
    get path() {
      return this._getPath(this.name);
    }
    get formDirective() {
      if (this._parent) {
        return this._parent.formDirective;
      } else {
        return null;
      }
    }
    viewToModelUpdate(He) {
      this.viewModel = He;
      this.update.emit(He);
    }
    _setUpControl() {
      this._setUpdateStrategy();
      if (this._isStandalone()) {
        this._setUpStandalone();
      } else {
        this.formDirective.addControl(this);
      }
      this._registered = true;
    }
    _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.control._updateOn = this.options.updateOn;
      }
    }
    _isStandalone() {
      return !this._parent || !!this.options && !!this.options.standalone;
    }
    _setUpStandalone() {
      bn(this.control, this);
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
    _checkForErrors() {
      if (!this._isStandalone()) {
        this._checkParentType();
      }
      this._checkName();
    }
    _checkParentType() {}
    _checkName() {
      if (this.options && this.options.name) {
        this.name = this.options.name;
      }
      this._isStandalone();
    }
    _updateValue(He) {
      Ca.then(() => {
        var dn;
        this.control.setValue(He, {
          emitViewToModelChange: false
        });
        if ((dn = this._changeDetectorRef) !== null && dn !== undefined) {
          dn.markForCheck();
        }
      });
    }
    _updateDisabled(He) {
      const dn = He.isDisabled.currentValue;
      const Yi = dn !== 0 && (0, i.D6c)(dn);
      Ca.then(() => {
        var $r;
        if (Yi && !this.control.disabled) {
          this.control.disable();
        } else if (!Yi && this.control.disabled) {
          this.control.enable();
        }
        if (($r = this._changeDetectorRef) !== null && $r !== undefined) {
          $r.markForCheck();
        }
      });
    }
    _getPath(He) {
      if (this._parent) {
        return fi(He, this._parent);
      } else {
        return [He];
      }
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(gN, 9), i.Y36(Cf, 10), i.Y36(X, 10), i.Y36(JU, 10), i.Y36(i.sBO, 8));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: ["disabled", "isDisabled"],
      model: ["ngModel", "model"],
      options: ["ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    features: [i._Bn([ha]), i.qOj, i.TTD]
  });
  return ht;
})();
export let _Y = (() => {
  class ht {}
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ml = {
  provide: JU,
  useExisting: (0, i.Gpc)(() => wV),
  multi: true
};
export let wV = (() => {
  class ht extends C {
    writeValue(He) {
      this.setProperty("value", He ?? "");
    }
    registerOnChange(He) {
      this.onChange = dn => {
        He(dn == "" ? null : parseFloat(dn));
      };
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("input", function ($r) {
          return dn.onChange($r.target.value);
        })("blur", function () {
          return dn.onTouched();
        });
      }
    },
    features: [i._Bn([Ml]), i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const So = {
  provide: JU,
  useExisting: (0, i.Gpc)(() => _),
  multi: true
};
let Ia = (() => {
  class ht {}
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵmod = i.oAB({
    type: ht
  });
  ht.ɵinj = i.cJS({});
  return ht;
})();
let po = (() => {
  class ht {
    constructor() {
      this._accessors = [];
    }
    add(He, dn) {
      this._accessors.push([He, dn]);
    }
    remove(He) {
      for (let dn = this._accessors.length - 1; dn >= 0; --dn) {
        if (this._accessors[dn][1] === He) {
          this._accessors.splice(dn, 1);
          return;
        }
      }
    }
    select(He) {
      this._accessors.forEach(dn => {
        if (this._isSameGroup(dn, He) && dn[1] !== He) {
          dn[1].fireUncheck(He.value);
        }
      });
    }
    _isSameGroup(He, dn) {
      return !!He[0].control && He[0]._parent === dn._control._parent && He[1].name === dn.name;
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵprov = i.Yz7({
    token: ht,
    factory: ht.ɵfac,
    providedIn: Ia
  });
  return ht;
})();
export let _ = (() => {
  class ht extends C {
    constructor(He, dn, Yi, $r) {
      super(He, dn);
      this._registry = Yi;
      this._injector = $r;
      this.onChange = () => {};
    }
    ngOnInit() {
      this._control = this._injector.get(a5);
      this._checkName();
      this._registry.add(this._control, this);
    }
    ngOnDestroy() {
      this._registry.remove(this);
    }
    writeValue(He) {
      this._state = He === this.value;
      this.setProperty("checked", this._state);
    }
    registerOnChange(He) {
      this._fn = He;
      this.onChange = () => {
        He(this.value);
        this._registry.select(this);
      };
    }
    fireUncheck(He) {
      this.writeValue(He);
    }
    _checkName() {
      if (!this.name && this.formControlName) {
        this.name = this.formControlName;
      }
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(i.Qsj), i.Y36(i.SBq), i.Y36(po), i.Y36(i.zs3));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("change", function () {
          return dn.onChange();
        })("blur", function () {
          return dn.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    features: [i._Bn([So]), i.qOj]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const eo = new i.OlP("NgModelWithFormControlWarning");
const Vs = {
  provide: a5,
  useExisting: (0, i.Gpc)(() => oH)
};
export let oH = (() => {
  class ht extends a5 {
    constructor(He, dn, Yi, $r) {
      super();
      this._ngModelWarningConfig = $r;
      this.update = new i.vpe();
      this._ngModelWarningSent = false;
      this._setValidators(He);
      this._setAsyncValidators(dn);
      this.valueAccessor = ya(0, Yi);
    }
    set isDisabled(He) {}
    ngOnChanges(He) {
      if (this._isControlChanged(He)) {
        const dn = He.form.previousValue;
        if (dn) {
          pn(dn, this, false);
        }
        bn(this.form, this);
        this.form.updateValueAndValidity({
          emitEvent: false
        });
      }
      if (Gs(He, this.viewModel)) {
        this.form.setValue(this.model);
        this.viewModel = this.model;
      }
    }
    ngOnDestroy() {
      if (this.form) {
        pn(this.form, this, false);
      }
    }
    get path() {
      return [];
    }
    get control() {
      return this.form;
    }
    viewToModelUpdate(He) {
      this.viewModel = He;
      this.update.emit(He);
    }
    _isControlChanged(He) {
      return He.hasOwnProperty("form");
    }
  }
  ht._ngModelWarningSentOnce = false;
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(Cf, 10), i.Y36(X, 10), i.Y36(JU, 10), i.Y36(eo, 8));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: ["formControl", "form"],
      isDisabled: ["disabled", "isDisabled"],
      model: ["ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    features: [i._Bn([Vs]), i.qOj, i.TTD]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Wo = {
  provide: gN,
  useExisting: (0, i.Gpc)(() => sg)
};
export let sg = (() => {
  class ht extends gN {
    constructor(He, dn) {
      super();
      this.submitted = false;
      this._onCollectionChange = () => this._updateDomValue();
      this.directives = [];
      this.form = null;
      this.ngSubmit = new i.vpe();
      this._setValidators(He);
      this._setAsyncValidators(dn);
    }
    ngOnChanges(He) {
      this._checkFormPresent();
      if (He.hasOwnProperty("form")) {
        this._updateValidators();
        this._updateDomValue();
        this._updateRegistrations();
        this._oldForm = this.form;
      }
    }
    ngOnDestroy() {
      if (this.form) {
        dr(this.form, this);
        if (this.form._onCollectionChange === this._onCollectionChange) {
          this.form._registerOnCollectionChange(() => {});
        }
      }
    }
    get formDirective() {
      return this;
    }
    get control() {
      return this.form;
    }
    get path() {
      return [];
    }
    addControl(He) {
      const dn = this.form.get(He.path);
      bn(dn, He);
      dn.updateValueAndValidity({
        emitEvent: false
      });
      this.directives.push(He);
      return dn;
    }
    getControl(He) {
      return this.form.get(He.path);
    }
    removeControl(He) {
      pn(He.control || null, He, false);
      (function Ko(ht, dt) {
        const He = ht.indexOf(dt);
        if (He > -1) {
          ht.splice(He, 1);
        }
      })(this.directives, He);
    }
    addFormGroup(He) {
      this._setUpFormContainer(He);
    }
    removeFormGroup(He) {
      this._cleanUpFormContainer(He);
    }
    getFormGroup(He) {
      return this.form.get(He.path);
    }
    addFormArray(He) {
      this._setUpFormContainer(He);
    }
    removeFormArray(He) {
      this._cleanUpFormContainer(He);
    }
    getFormArray(He) {
      return this.form.get(He.path);
    }
    updateModel(He, dn) {
      this.form.get(He.path).setValue(dn);
    }
    onSubmit(He) {
      var dn;
      this.submitted = true;
      ho(this.form, this.directives);
      this.ngSubmit.emit(He);
      return (He == null || (dn = He.target) === null || dn === undefined ? undefined : dn.method) === "dialog";
    }
    onReset() {
      this.resetForm();
    }
    resetForm(He) {
      this.form.reset(He);
      this.submitted = false;
    }
    _updateDomValue() {
      this.directives.forEach(He => {
        const dn = He.control;
        const Yi = this.form.get(He.path);
        if (dn !== Yi) {
          pn(dn || null, He);
          if ((ht => ht instanceof NI)(Yi)) {
            bn(Yi, He);
            He.control = Yi;
          }
        }
      });
      this.form._updateTreeValidity({
        emitEvent: false
      });
    }
    _setUpFormContainer(He) {
      const dn = this.form.get(He.path);
      kr(dn, He);
      dn.updateValueAndValidity({
        emitEvent: false
      });
    }
    _cleanUpFormContainer(He) {
      if (this.form) {
        const dn = this.form.get(He.path);
        if (dn && function Zs(ht, dt) {
          return dr(ht, dt);
        }(dn, He)) {
          dn.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
    _updateRegistrations() {
      this.form._registerOnCollectionChange(this._onCollectionChange);
      if (this._oldForm) {
        this._oldForm._registerOnCollectionChange(() => {});
      }
    }
    _updateValidators() {
      Di(this.form, this);
      if (this._oldForm) {
        dr(this._oldForm, this);
      }
    }
    _checkFormPresent() {}
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(Cf, 10), i.Y36(X, 10));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "formGroup", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("submit", function ($r) {
          return dn.onSubmit($r);
        })("reset", function () {
          return dn.onReset();
        });
      }
    },
    inputs: {
      form: ["formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    features: [i._Bn([Wo]), i.qOj, i.TTD]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Uo = {
  provide: gN,
  useExisting: (0, i.Gpc)(() => x0)
};
export let x0 = (() => {
  class ht extends Es {
    constructor(He, dn, Yi) {
      super();
      this._parent = He;
      this._setValidators(dn);
      this._setAsyncValidators(Yi);
    }
    _checkParentType() {
      be(this._parent);
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(gN, 13), i.Y36(Cf, 10), i.Y36(X, 10));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: ["formGroupName", "name"]
    },
    features: [i._Bn([Uo]), i.qOj]
  });
  return ht;
})();
const at = {
  provide: gN,
  useExisting: (0, i.Gpc)(() => CE)
};
export let CE = (() => {
  class ht extends gN {
    constructor(He, dn, Yi) {
      super();
      this._parent = He;
      this._setValidators(dn);
      this._setAsyncValidators(Yi);
    }
    ngOnInit() {
      this._checkParentType();
      this.formDirective.addFormArray(this);
    }
    ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormArray(this);
      }
    }
    get control() {
      return this.formDirective.getFormArray(this);
    }
    get formDirective() {
      if (this._parent) {
        return this._parent.formDirective;
      } else {
        return null;
      }
    }
    get path() {
      return fi(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    _checkParentType() {
      be(this._parent);
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(gN, 13), i.Y36(Cf, 10), i.Y36(X, 10));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: ["formArrayName", "name"]
    },
    features: [i._Bn([at]), i.qOj]
  });
  return ht;
})();
function be(ht) {
  return !(ht instanceof x0) && !(ht instanceof sg) && !(ht instanceof CE);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Bt = {
  provide: a5,
  useExisting: (0, i.Gpc)(() => u)
};
export let u = (() => {
  class ht extends a5 {
    constructor(He, dn, Yi, $r, wi) {
      super();
      this._ngModelWarningConfig = wi;
      this._added = false;
      this.update = new i.vpe();
      this._ngModelWarningSent = false;
      this._parent = He;
      this._setValidators(dn);
      this._setAsyncValidators(Yi);
      this.valueAccessor = ya(0, $r);
    }
    set isDisabled(He) {}
    ngOnChanges(He) {
      if (!this._added) {
        this._setUpControl();
      }
      if (Gs(He, this.viewModel)) {
        this.viewModel = this.model;
        this.formDirective.updateModel(this, this.model);
      }
    }
    ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeControl(this);
      }
    }
    viewToModelUpdate(He) {
      this.viewModel = He;
      this.update.emit(He);
    }
    get path() {
      return fi(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    get formDirective() {
      if (this._parent) {
        return this._parent.formDirective;
      } else {
        return null;
      }
    }
    _checkParentType() {}
    _setUpControl() {
      this._checkParentType();
      this.control = this.formDirective.addControl(this);
      this._added = true;
    }
  }
  ht._ngModelWarningSentOnce = false;
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(gN, 13), i.Y36(Cf, 10), i.Y36(X, 10), i.Y36(JU, 10), i.Y36(eo, 8));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: ["formControlName", "name"],
      isDisabled: ["disabled", "isDisabled"],
      model: ["ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    features: [i._Bn([Bt]), i.qOj, i.TTD]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Gn = {
  provide: JU,
  useExisting: (0, i.Gpc)(() => EJ),
  multi: true
};
function Ki(ht, dt) {
  if (ht == null) {
    return `${dt}`;
  } else {
    if (dt && typeof dt == "object") {
      dt = "Object";
    }
    return `${ht}: ${dt}`.slice(0, 50);
  }
}
export let EJ = (() => {
  class ht extends C {
    constructor() {
      super(...arguments);
      this._optionMap = new Map();
      this._idCounter = 0;
      this._compareWith = Object.is;
    }
    set compareWith(He) {
      this._compareWith = He;
    }
    writeValue(He) {
      this.value = He;
      const Yi = Ki(this._getOptionId(He), He);
      this.setProperty("value", Yi);
    }
    registerOnChange(He) {
      this.onChange = dn => {
        this.value = this._getOptionValue(dn);
        He(this.value);
      };
    }
    _registerOption() {
      return (this._idCounter++).toString();
    }
    _getOptionId(He) {
      for (const dn of Array.from(this._optionMap.keys())) {
        if (this._compareWith(this._optionMap.get(dn), He)) {
          return dn;
        }
      }
      return null;
    }
    _getOptionValue(He) {
      const dn = function Lr(ht) {
        return ht.split(":")[0];
      }(He);
      if (this._optionMap.has(dn)) {
        return this._optionMap.get(dn);
      } else {
        return He;
      }
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("change", function ($r) {
          return dn.onChange($r.target.value);
        })("blur", function () {
          return dn.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    features: [i._Bn([Gn]), i.qOj]
  });
  return ht;
})();
export let YN = (() => {
  class ht {
    constructor(He, dn, Yi) {
      this._element = He;
      this._renderer = dn;
      this._select = Yi;
      if (this._select) {
        this.id = this._select._registerOption();
      }
    }
    set ngValue(He) {
      if (this._select != null) {
        this._select._optionMap.set(this.id, He);
        this._setElementValue(Ki(this.id, He));
        this._select.writeValue(this._select.value);
      }
    }
    set value(He) {
      this._setElementValue(He);
      if (this._select) {
        this._select.writeValue(this._select.value);
      }
    }
    _setElementValue(He) {
      this._renderer.setProperty(this._element.nativeElement, "value", He);
    }
    ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);
        this._select.writeValue(this._select.value);
      }
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(EJ, 9));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    }
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ks = {
  provide: JU,
  useExisting: (0, i.Gpc)(() => K7),
  multi: true
};
function Js(ht, dt) {
  if (ht == null) {
    return `${dt}`;
  } else {
    if (typeof dt == "string") {
      dt = `'${dt}'`;
    }
    if (dt && typeof dt == "object") {
      dt = "Object";
    }
    return `${ht}: ${dt}`.slice(0, 50);
  }
}
export let K7 = (() => {
  class ht extends C {
    constructor() {
      super(...arguments);
      this._optionMap = new Map();
      this._idCounter = 0;
      this._compareWith = Object.is;
    }
    set compareWith(He) {
      this._compareWith = He;
    }
    writeValue(He) {
      let dn;
      this.value = He;
      if (Array.isArray(He)) {
        const Yi = He.map($r => this._getOptionId($r));
        dn = ($r, wi) => {
          $r._setSelected(Yi.indexOf(wi.toString()) > -1);
        };
      } else {
        dn = (Yi, $r) => {
          Yi._setSelected(false);
        };
      }
      this._optionMap.forEach(dn);
    }
    registerOnChange(He) {
      this.onChange = dn => {
        const Yi = [];
        const $r = dn.selectedOptions;
        if ($r !== undefined) {
          const wi = $r;
          for (let Aa = 0; Aa < wi.length; Aa++) {
            const wt = this._getOptionValue(wi[Aa].value);
            Yi.push(wt);
          }
        } else {
          const wi = dn.options;
          for (let Aa = 0; Aa < wi.length; Aa++) {
            const Hr = wi[Aa];
            if (Hr.selected) {
              const wt = this._getOptionValue(Hr.value);
              Yi.push(wt);
            }
          }
        }
        this.value = Yi;
        He(Yi);
      };
    }
    _registerOption(He) {
      const dn = (this._idCounter++).toString();
      this._optionMap.set(dn, He);
      return dn;
    }
    _getOptionId(He) {
      for (const dn of Array.from(this._optionMap.keys())) {
        if (this._compareWith(this._optionMap.get(dn)._value, He)) {
          return dn;
        }
      }
      return null;
    }
    _getOptionValue(He) {
      const dn = function Xt(ht) {
        return ht.split(":")[0];
      }(He);
      if (this._optionMap.has(dn)) {
        return this._optionMap.get(dn)._value;
      } else {
        return He;
      }
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function (He, dn) {
      if (He & 1) {
        i.NdJ("change", function ($r) {
          return dn.onChange($r.target);
        })("blur", function () {
          return dn.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    features: [i._Bn([Ks]), i.qOj]
  });
  return ht;
})();
export let Kr = (() => {
  class ht {
    constructor(He, dn, Yi) {
      this._element = He;
      this._renderer = dn;
      this._select = Yi;
      if (this._select) {
        this.id = this._select._registerOption(this);
      }
    }
    set ngValue(He) {
      if (this._select != null) {
        this._value = He;
        this._setElementValue(Js(this.id, He));
        this._select.writeValue(this._select.value);
      }
    }
    set value(He) {
      if (this._select) {
        this._value = He;
        this._setElementValue(Js(this.id, He));
        this._select.writeValue(this._select.value);
      } else {
        this._setElementValue(He);
      }
    }
    _setElementValue(He) {
      this._renderer.setProperty(this._element.nativeElement, "value", He);
    }
    _setSelected(He) {
      this._renderer.setProperty(this._element.nativeElement, "selected", He);
    }
    ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);
        this._select.writeValue(this._select.value);
      }
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)(i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(K7, 9));
  };
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    }
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kn(ht) {
  if (typeof ht == "number") {
    return ht;
  } else {
    return parseInt(ht, 10);
  }
}
let li = (() => {
  class ht {
    constructor() {
      this._validator = pe;
    }
    ngOnChanges(He) {
      if (this.inputName in He) {
        const dn = this.normalizeInput(He[this.inputName].currentValue);
        this._enabled = this.enabled(dn);
        this._validator = this._enabled ? this.createValidator(dn) : pe;
        if (this._onChange) {
          this._onChange();
        }
      }
    }
    validate(He) {
      return this._validator(He);
    }
    registerOnValidatorChange(He) {
      this._onChange = He;
    }
    enabled(He) {
      return He != null;
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵdir = i.lG2({
    type: ht,
    features: [i.TTD]
  });
  return ht;
})();
const Jr = {
  provide: Cf,
  useExisting: (0, i.Gpc)(() => Q7),
  multi: true
};
export let Q7 = (() => {
  class ht extends li {
    constructor() {
      super(...arguments);
      this.inputName = "required";
      this.normalizeInput = i.D6c;
      this.createValidator = He => G;
    }
    enabled(He) {
      return He;
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function (He, dn) {
      if (He & 2) {
        i.uIk("required", dn._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    features: [i._Bn([Jr]), i.qOj]
  });
  return ht;
})();
const Ls = {
  provide: Cf,
  useExisting: (0, i.Gpc)(() => on),
  multi: true
};
export let on = (() => {
  class ht extends li {
    constructor() {
      super(...arguments);
      this.inputName = "email";
      this.normalizeInput = i.D6c;
      this.createValidator = He => W;
    }
    enabled(He) {
      return He;
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    features: [i._Bn([Ls]), i.qOj]
  });
  return ht;
})();
const wa = {
  provide: Cf,
  useExisting: (0, i.Gpc)(() => wO),
  multi: true
};
export let wO = (() => {
  class ht extends li {
    constructor() {
      super(...arguments);
      this.inputName = "minlength";
      this.normalizeInput = He => kn(He);
      this.createValidator = He => Pe(He);
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function (He, dn) {
      if (He & 2) {
        i.uIk("minlength", dn._enabled ? dn.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    features: [i._Bn([wa]), i.qOj]
  });
  return ht;
})();
const sl = {
  provide: Cf,
  useExisting: (0, i.Gpc)(() => nD),
  multi: true
};
export let nD = (() => {
  class ht extends li {
    constructor() {
      super(...arguments);
      this.inputName = "maxlength";
      this.normalizeInput = He => kn(He);
      this.createValidator = He => Le(He);
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function (He, dn) {
      if (He & 2) {
        i.uIk("maxlength", dn._enabled ? dn.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    features: [i._Bn([sl]), i.qOj]
  });
  return ht;
})();
const el = {
  provide: Cf,
  useExisting: (0, i.Gpc)(() => c5),
  multi: true
};
export let c5 = (() => {
  class ht extends li {
    constructor() {
      super(...arguments);
      this.inputName = "pattern";
      this.normalizeInput = He => He;
      this.createValidator = He => he(He);
    }
  }
  ht.ɵfac = function () {
    let dt;
    return function (dn) {
      return (dt ||= i.n5z(ht))(dn || ht);
    };
  }();
  ht.ɵdir = i.lG2({
    type: ht,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function (He, dn) {
      if (He & 2) {
        i.uIk("pattern", dn._enabled ? dn.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    features: [i._Bn([el]), i.qOj]
  });
  return ht;
})();
let _e = (() => {
  class ht {}
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵmod = i.oAB({
    type: ht
  });
  ht.ɵinj = i.cJS({
    imports: [Ia]
  });
  return ht;
})();
export let u5 = (() => {
  class ht {}
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵmod = i.oAB({
    type: ht
  });
  ht.ɵinj = i.cJS({
    imports: [_e]
  });
  return ht;
})();
export let UX = (() => {
  class ht {
    static withConfig(He) {
      return {
        ngModule: ht,
        providers: [{
          provide: eo,
          useValue: He.warnOnNgModelWithFormControl
        }]
      };
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵmod = i.oAB({
    type: ht
  });
  ht.ɵinj = i.cJS({
    imports: [_e]
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class Oe extends js {
  constructor(dt, He, dn) {
    super(Ur(He), rs(dn, He));
    this.controls = dt;
    this._initObservables();
    this._setUpdateStrategy(He);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  at(dt) {
    return this.controls[this._adjustIndex(dt)];
  }
  push(dt, He = {}) {
    this.controls.push(dt);
    this._registerControl(dt);
    this.updateValueAndValidity({
      emitEvent: He.emitEvent
    });
    this._onCollectionChange();
  }
  insert(dt, He, dn = {}) {
    this.controls.splice(dt, 0, He);
    this._registerControl(He);
    this.updateValueAndValidity({
      emitEvent: dn.emitEvent
    });
  }
  removeAt(dt, He = {}) {
    let dn = this._adjustIndex(dt);
    if (dn < 0) {
      dn = 0;
    }
    if (this.controls[dn]) {
      this.controls[dn]._registerOnCollectionChange(() => {});
    }
    this.controls.splice(dn, 1);
    this.updateValueAndValidity({
      emitEvent: He.emitEvent
    });
  }
  setControl(dt, He, dn = {}) {
    let Yi = this._adjustIndex(dt);
    if (Yi < 0) {
      Yi = 0;
    }
    if (this.controls[Yi]) {
      this.controls[Yi]._registerOnCollectionChange(() => {});
    }
    this.controls.splice(Yi, 1);
    if (He) {
      this.controls.splice(Yi, 0, He);
      this._registerControl(He);
    }
    this.updateValueAndValidity({
      emitEvent: dn.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(dt, He = {}) {
    sa(this, 0, dt);
    dt.forEach((dn, Yi) => {
      so(this, false, Yi);
      this.at(Yi).setValue(dn, {
        onlySelf: true,
        emitEvent: He.emitEvent
      });
    });
    this.updateValueAndValidity(He);
  }
  patchValue(dt, He = {}) {
    if (dt != null) {
      dt.forEach((dn, Yi) => {
        if (this.at(Yi)) {
          this.at(Yi).patchValue(dn, {
            onlySelf: true,
            emitEvent: He.emitEvent
          });
        }
      });
      this.updateValueAndValidity(He);
    }
  }
  reset(dt = [], He = {}) {
    this._forEachChild((dn, Yi) => {
      dn.reset(dt[Yi], {
        onlySelf: true,
        emitEvent: He.emitEvent
      });
    });
    this._updatePristine(He);
    this._updateTouched(He);
    this.updateValueAndValidity(He);
  }
  getRawValue() {
    return this.controls.map(dt => dt.getRawValue());
  }
  clear(dt = {}) {
    if (this.controls.length >= 1) {
      this._forEachChild(He => He._registerOnCollectionChange(() => {}));
      this.controls.splice(0);
      this.updateValueAndValidity({
        emitEvent: dt.emitEvent
      });
    }
  }
  _adjustIndex(dt) {
    if (dt < 0) {
      return dt + this.length;
    } else {
      return dt;
    }
  }
  _syncPendingControls() {
    let dt = this.controls.reduce((He, dn) => !!dn._syncPendingControls() || He, false);
    if (dt) {
      this.updateValueAndValidity({
        onlySelf: true
      });
    }
    return dt;
  }
  _forEachChild(dt) {
    this.controls.forEach((He, dn) => {
      dt(He, dn);
    });
  }
  _updateValue() {
    this.value = this.controls.filter(dt => dt.enabled || this.disabled).map(dt => dt.value);
  }
  _anyControls(dt) {
    return this.controls.some(He => He.enabled && dt(He));
  }
  _setUpControls() {
    this._forEachChild(dt => this._registerControl(dt));
  }
  _allControlsDisabled() {
    for (const dt of this.controls) {
      if (dt.enabled) {
        return false;
      }
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(dt) {
    dt.setParent(this);
    dt._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(dt) {
    return this.at(dt) ?? null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ji(ht) {
  return !!ht && (ht.asyncValidators !== undefined || ht.validators !== undefined || ht.updateOn !== undefined);
}
export let qu = (() => {
  class ht {
    constructor() {
      this.useNonNullable = false;
    }
    get nonNullable() {
      const He = new ht();
      He.useNonNullable = true;
      return He;
    }
    group(He, dn = null) {
      const Yi = this._reduceControls(He);
      let $r = {};
      if (Ji(dn)) {
        $r = dn;
      } else if (dn !== null) {
        $r.validators = dn.validator;
        $r.asyncValidators = dn.asyncValidator;
      }
      return new cw(Yi, $r);
    }
    record(He, dn = null) {
      const Yi = this._reduceControls(He);
      return new Bn(Yi, dn);
    }
    control(He, dn, Yi) {
      let $r = {};
      if (this.useNonNullable) {
        if (Ji(dn)) {
          $r = dn;
        } else {
          $r.validators = dn;
          $r.asyncValidators = Yi;
        }
        return new NI(He, {
          ...$r,
          nonNullable: true
        });
      } else {
        return new NI(He, dn, Yi);
      }
    }
    array(He, dn, Yi) {
      const $r = He.map(wi => this._createControl(wi));
      return new Oe($r, dn, Yi);
    }
    _reduceControls(He) {
      const dn = {};
      Object.keys(He).forEach(Yi => {
        dn[Yi] = this._createControl(He[Yi]);
      });
      return dn;
    }
    _createControl(He) {
      if (He instanceof NI || He instanceof js) {
        return He;
      } else if (Array.isArray(He)) {
        return this.control(He[0], He.length > 1 ? He[1] : null, He.length > 2 ? He[2] : null);
      } else {
        return this.control(He);
      }
    }
  }
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵprov = i.Yz7({
    token: ht,
    factory: ht.ɵfac,
    providedIn: UX
  });
  return ht;
})();
export let j3 = (() => {
  class ht {}
  ht.ɵfac = function (He) {
    return new (He || ht)();
  };
  ht.ɵprov = i.Yz7({
    token: ht,
    factory: function () {
      return (0, i.f3M)(qu).nonNullable;
    },
    providedIn: UX
  });
  return ht;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */