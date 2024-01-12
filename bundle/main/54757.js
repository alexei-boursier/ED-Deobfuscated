import * as i from "94650";
import * as b from "36895";
function k(E, O) {
  if (E & 1) {
    i._uU(0);
  }
  if (E & 2) {
    i.Oqu(O.index < O.value ? "★" : "☆");
  }
}
function M(E, O) {}
const v = function (E, O) {
  return {
    index: E,
    value: O
  };
};
function C(E, O) {
  if (E & 1) {
    const x = i.EpF();
    i.TgZ(0, "span", 3);
    i._uU(1);
    i.qZA();
    i.TgZ(2, "span", 4);
    i.NdJ("mouseenter", function () {
      const F = i.CHM(x).index;
      const Z = i.oxw();
      return i.KtG(Z.enter(F + 1));
    })("click", function () {
      const F = i.CHM(x).index;
      const Z = i.oxw();
      return i.KtG(Z.rate(F + 1));
    });
    i.YNc(3, M, 0, 0, "ng-template", 5);
    i.qZA();
  }
  if (E & 2) {
    const x = O.$implicit;
    const U = O.index;
    const B = i.oxw();
    const F = i.MAs(2);
    i.xp6(1);
    i.hij("(", U < B.value ? "*" : " ", ")");
    i.xp6(1);
    i.Udp("cursor", B.readonly ? "default" : "pointer");
    i.ekj("active", U < B.value);
    i.Q6J("title", x.title);
    i.xp6(1);
    i.Q6J("ngTemplateOutlet", B.customTemplate || F)("ngTemplateOutletContext", i.WLB(8, v, U, B.value));
  }
}
let w = (() => {
  class E {
    constructor() {
      this.ariaLabel = "rating";
    }
  }
  E.ɵfac = function (x) {
    return new (x || E)();
  };
  E.ɵprov = i.Yz7({
    token: E,
    factory: E.ɵfac,
    providedIn: "root"
  });
  return E;
})();
const S = {
  provide: t.JU,
  useExisting: (0, i.Gpc)(() => AT),
  multi: true
};
export let AT = (() => {
  class E {
    constructor(x, U) {
      this.changeDetection = x;
      this.max = 5;
      this.readonly = false;
      this.titles = [];
      this.onHover = new i.vpe();
      this.onLeave = new i.vpe();
      this.onChange = Function.prototype;
      this.onTouched = Function.prototype;
      this.ariaLabel = "rating";
      this.range = [];
      this.value = 0;
      Object.assign(this, U);
    }
    onKeydown(x) {
      if ([37, 38, 39, 40].indexOf(x.which) !== -1) {
        x.preventDefault();
        x.stopPropagation();
        this.rate(this.value + (x.which === 38 || x.which === 39 ? 1 : -1));
      }
    }
    ngOnInit() {
      this.max = this.max || 5;
      this.titles = typeof this.titles !== "undefined" && this.titles.length > 0 ? this.titles : [];
      this.range = this.buildTemplateObjects(this.max);
    }
    writeValue(x) {
      if (x % 1 !== x) {
        this.value = Math.round(x);
        this.preValue = x;
        this.changeDetection.markForCheck();
        return;
      }
      this.preValue = x;
      this.value = x;
      this.changeDetection.markForCheck();
    }
    enter(x) {
      if (!this.readonly) {
        this.value = x;
        this.changeDetection.markForCheck();
        this.onHover.emit(x);
      }
    }
    reset() {
      if (typeof this.preValue == "number") {
        this.value = Math.round(this.preValue);
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
      }
    }
    registerOnChange(x) {
      this.onChange = x;
    }
    registerOnTouched(x) {
      this.onTouched = x;
    }
    rate(x) {
      if (!this.readonly && this.range && x >= 0 && x <= this.range.length) {
        this.writeValue(x);
        this.onChange(x);
      }
    }
    buildTemplateObjects(x) {
      const U = [];
      for (let B = 0; B < x; B++) {
        U.push({
          index: B,
          title: this.titles[B] || B + 1
        });
      }
      return U;
    }
  }
  E.ɵfac = function (x) {
    return new (x || E)(i.Y36(i.sBO), i.Y36(w));
  };
  E.ɵcmp = i.Xpm({
    type: E,
    selectors: [["rating"]],
    hostBindings: function (x, U) {
      if (x & 1) {
        i.NdJ("keydown", function (F) {
          return U.onKeydown(F);
        });
      }
    },
    inputs: {
      max: "max",
      readonly: "readonly",
      titles: "titles",
      customTemplate: "customTemplate"
    },
    outputs: {
      onHover: "onHover",
      onLeave: "onLeave"
    },
    features: [i._Bn([S])],
    decls: 4,
    vars: 4,
    consts: [["tabindex", "0", "role", "slider", "aria-valuemin", "0", 3, "mouseleave", "keydown"], ["star", ""], ["ngFor", "", 3, "ngForOf"], [1, "sr-only", "visually-hidden"], [1, "bs-rating-star", 3, "title", "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function (x, U) {
      if (x & 1) {
        i.TgZ(0, "span", 0);
        i.NdJ("mouseleave", function () {
          return U.reset();
        })("keydown", function (F) {
          return U.onKeydown(F);
        });
        i.YNc(1, k, 1, 1, "ng-template", null, 1, i.W1O);
        i.YNc(3, C, 4, 11, "ng-template", 2);
        i.qZA();
      }
      if (x & 2) {
        i.uIk("aria-label", U.ariaLabel)("aria-valuemax", U.range.length)("aria-valuenow", U.value);
        i.xp6(3);
        i.Q6J("ngForOf", U.range);
      }
    },
    dependencies: [b.sg, b.tP],
    encapsulation: 2,
    changeDetection: 0
  });
  return E;
})();
export let Xt = (() => {
  class E {
    static forRoot() {
      return {
        ngModule: E,
        providers: []
      };
    }
  }
  E.ɵfac = function (x) {
    return new (x || E)();
  };
  E.ɵmod = i.oAB({
    type: E
  });
  E.ɵinj = i.cJS({
    imports: [b.ez]
  });
  return E;
})();