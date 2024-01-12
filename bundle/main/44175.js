import * as i from "94650";
import * as b from "36895";
const k = ["*"];
function M(O, x) {
  if (O & 1) {
    i.GkF(0);
  }
}
function v(O, x) {
  if (O & 1) {
    i.TgZ(0, "bar", 3);
    i.Hsn(1);
    i.qZA();
  }
  if (O & 2) {
    const U = i.oxw();
    i.Q6J("type", U.type)("value", U._value)("max", U.max)("animate", U.animate)("striped", U.striped);
  }
}
function C(O, x) {
  if (O & 1) {
    i.TgZ(0, "bar", 3);
    i._uU(1);
    i.qZA();
  }
  if (O & 2) {
    const U = x.$implicit;
    const B = i.oxw(2);
    i.Q6J("type", U.type)("value", U.value)("max", U.max || B.max)("animate", B.animate)("striped", B.striped);
    i.xp6(1);
    i.Oqu(U.label);
  }
}
function w(O, x) {
  if (O & 1) {
    i.YNc(0, C, 2, 6, "bar", 4);
  }
  if (O & 2) {
    const U = i.oxw();
    i.Q6J("ngForOf", U._values);
  }
}
let S = (() => {
  class O {
    constructor(U, B) {
      this.el = U;
      this.renderer = B;
      this.max = 100;
      this.value = 0;
      this.animate = false;
      this.striped = false;
      this.type = "info";
      this.percent = 100;
    }
    get isBs3() {
      return (0, t.XA)();
    }
    ngOnChanges(U) {
      if (U.value || U.max) {
        this.percent = Number(U.value?.currentValue || this.value) / Number(U.max?.currentValue || this.max || 100) * 100;
      }
      if (U.type) {
        this.applyTypeClasses();
      }
    }
    applyTypeClasses() {
      if (this._prevType) {
        const B = `bg-${this._prevType}`;
        this.renderer.removeClass(this.el.nativeElement, `progress-bar-${this._prevType}`);
        this.renderer.removeClass(this.el.nativeElement, B);
        this._prevType = undefined;
      }
      if (this.type) {
        const B = `bg-${this.type}`;
        this.renderer.addClass(this.el.nativeElement, `progress-bar-${this.type}`);
        this.renderer.addClass(this.el.nativeElement, B);
        this._prevType = this.type;
      }
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)(i.Y36(i.SBq), i.Y36(i.Qsj));
  };
  O.ɵcmp = i.Xpm({
    type: O,
    selectors: [["bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0"],
    hostVars: 15,
    hostBindings: function (U, B) {
      if (U & 2) {
        i.uIk("aria-valuenow", B.value)("aria-valuetext", B.percent ? B.percent.toFixed(0) + "%" : "")("aria-valuemax", B.max);
        i.Udp("height", "100", "%")("width", B.percent, "%");
        i.ekj("progress-bar", true)("progress-bar-animated", !B.isBs3 && B.animate)("progress-bar-striped", B.striped)("active", B.isBs3 && B.animate);
      }
    },
    inputs: {
      max: "max",
      value: "value",
      animate: "animate",
      striped: "striped",
      type: "type"
    },
    features: [i.TTD],
    ngContentSelectors: k,
    decls: 1,
    vars: 0,
    template: function (U, B) {
      if (U & 1) {
        i.F$t();
        i.Hsn(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return O;
})();
let L = (() => {
  class O {
    constructor() {
      this.animate = false;
      this.max = 100;
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)();
  };
  O.ɵprov = i.Yz7({
    token: O,
    factory: O.ɵfac,
    providedIn: "root"
  });
  return O;
})();
export let O1 = (() => {
  class O {
    constructor(U) {
      this.max = 100;
      this.animate = false;
      this.striped = false;
      this.isStacked = false;
      this._value = 0;
      Object.assign(this, U);
    }
    set value(U) {
      this.isStacked = Array.isArray(U);
      if (typeof U == "number") {
        this._value = U;
        this._values = undefined;
      } else {
        this._value = undefined;
        this._values = U;
      }
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)(i.Y36(L));
  };
  O.ɵcmp = i.Xpm({
    type: O,
    selectors: [["progressbar"]],
    hostVars: 3,
    hostBindings: function (U, B) {
      if (U & 2) {
        i.uIk("max", B.max);
        i.ekj("progress", true);
      }
    },
    inputs: {
      max: "max",
      animate: "animate",
      striped: "striped",
      type: "type",
      value: "value"
    },
    ngContentSelectors: k,
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["NotStacked", ""], ["Stacked", ""], [3, "type", "value", "max", "animate", "striped"], [3, "type", "value", "max", "animate", "striped", 4, "ngFor", "ngForOf"]],
    template: function (U, B) {
      if (U & 1) {
        i.F$t();
        i.YNc(0, M, 1, 0, "ng-container", 0);
        i.YNc(1, v, 2, 5, "ng-template", null, 1, i.W1O);
        i.YNc(3, w, 1, 1, "ng-template", null, 2, i.W1O);
      }
      if (U & 2) {
        const F = i.MAs(2);
        const Z = i.MAs(4);
        i.Q6J("ngIf", !B.isStacked)("ngIfThen", F)("ngIfElse", Z);
      }
    },
    dependencies: [b.sg, b.O5, S],
    styles: ["[_nghost-%COMP%]{width:100%;display:flex}"],
    changeDetection: 0
  });
  return O;
})();
export let HC = (() => {
  class O {
    static forRoot() {
      return {
        ngModule: O,
        providers: []
      };
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)();
  };
  O.ɵmod = i.oAB({
    type: O
  });
  O.ɵinj = i.cJS({
    imports: [b.ez]
  });
  return O;
})();