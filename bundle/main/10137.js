import * as i from "94650";
import * as b from "36895";
import * as k from "8816";
const M = ["*"];
const v = function (x) {
  return {
    "text-muted": x
  };
};
function C(x, U) {
  if (x & 1) {
    i.TgZ(0, "button", 7);
    i._uU(1);
    i.qZA();
  }
  if (x & 2) {
    const B = i.oxw();
    i.Q6J("ngClass", i.VKq(2, v, B.isDisabled));
    i.xp6(1);
    i.hij(" ", B.heading, " ");
  }
}
const w = [[["", "accordion-heading", ""]], "*"];
const S = ["[accordion-heading]", "*"];
let L = (() => {
  class x {
    constructor() {
      this.closeOthers = false;
      this.isAnimated = false;
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)();
  };
  x.ɵprov = i.Yz7({
    token: x,
    factory: x.ɵfac,
    providedIn: "root"
  });
  return x;
})();
export let Zf = (() => {
  class x {
    constructor(B) {
      this.isAnimated = false;
      this.closeOthers = false;
      this.groups = [];
      Object.assign(this, B);
    }
    closeOtherPanels(B) {
      if (!!this.closeOthers) {
        this.groups.forEach(F => {
          if (F !== B) {
            F.isOpen = false;
          }
        });
      }
    }
    addGroup(B) {
      B.isAnimated = this.isAnimated;
      this.groups.push(B);
    }
    removeGroup(B) {
      const F = this.groups.indexOf(B);
      if (F !== -1) {
        this.groups.splice(F, 1);
      }
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)(i.Y36(L));
  };
  x.ɵcmp = i.Xpm({
    type: x,
    selectors: [["accordion"]],
    hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"],
    hostVars: 1,
    hostBindings: function (B, F) {
      if (B & 2) {
        i.uIk("aria-multiselectable", F.closeOthers);
      }
    },
    inputs: {
      isAnimated: "isAnimated",
      closeOthers: "closeOthers"
    },
    ngContentSelectors: M,
    decls: 1,
    vars: 0,
    template: function (B, F) {
      if (B & 1) {
        i.F$t();
        i.Hsn(0);
      }
    },
    encapsulation: 2
  });
  return x;
})();
export let U_ = (() => {
  class x {
    constructor(B) {
      this.isAnimated = false;
      this.panelClass = "panel-default";
      this.isDisabled = false;
      this.isOpenChange = new i.vpe();
      this._isOpen = false;
      this.accordion = B;
    }
    get isOpen() {
      return this._isOpen;
    }
    set isOpen(B) {
      if (B !== this.isOpen) {
        if (B) {
          this.accordion.closeOtherPanels(this);
        }
        this._isOpen = B;
        Promise.resolve(null).then(() => {
          this.isOpenChange.emit(B);
        });
      }
    }
    get isBs3() {
      return (0, t.XA)();
    }
    ngOnInit() {
      this.accordion.addGroup(this);
    }
    ngOnDestroy() {
      this.accordion.removeGroup(this);
    }
    toggleOpen() {
      if (!this.isDisabled) {
        this.isOpen = !this.isOpen;
      }
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)(i.Y36(Zf));
  };
  x.ɵcmp = i.Xpm({
    type: x,
    selectors: [["accordion-group"], ["accordion-panel"]],
    hostAttrs: [1, "panel", 2, "display", "block"],
    hostVars: 2,
    hostBindings: function (B, F) {
      if (B & 2) {
        i.ekj("panel-open", F.isOpen);
      }
    },
    inputs: {
      heading: "heading",
      panelClass: "panelClass",
      isDisabled: "isDisabled",
      isOpen: "isOpen"
    },
    outputs: {
      isOpenChange: "isOpenChange"
    },
    ngContentSelectors: S,
    decls: 9,
    vars: 6,
    consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]],
    template: function (B, F) {
      if (B & 1) {
        i.F$t(w);
        i.TgZ(0, "div", 0)(1, "div", 1);
        i.NdJ("click", function () {
          return F.toggleOpen();
        });
        i.TgZ(2, "div", 2)(3, "div", 3);
        i.YNc(4, C, 2, 4, "button", 4);
        i.Hsn(5);
        i.qZA()()();
        i.TgZ(6, "div", 5)(7, "div", 6);
        i.Hsn(8, 1);
        i.qZA()()();
      }
      if (B & 2) {
        i.Q6J("ngClass", F.panelClass);
        i.xp6(1);
        i.Q6J("ngClass", F.isDisabled ? "panel-disabled" : "panel-enabled");
        i.xp6(2);
        i.uIk("aria-expanded", F.isOpen);
        i.xp6(1);
        i.Q6J("ngIf", F.heading);
        i.xp6(2);
        i.Q6J("collapse", !F.isOpen)("isAnimated", F.isAnimated);
      }
    },
    dependencies: [b.mk, b.O5, k.Y],
    styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]
  });
  return x;
})();
export let fx = (() => {
  class x {
    static forRoot() {
      return {
        ngModule: x,
        providers: []
      };
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)();
  };
  x.ɵmod = i.oAB({
    type: x
  });
  x.ɵinj = i.cJS({
    imports: [b.ez, k.f]
  });
  return x;
})();