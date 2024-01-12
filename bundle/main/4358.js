import * as i from "70655";
import * as t from "94650";
import * as k from "36895";
function M(I, E) {
  if (I & 1) {
    const O = t.EpF();
    t.TgZ(0, "button", 2);
    t.NdJ("click", function () {
      t.CHM(O);
      const U = t.oxw(2);
      return t.KtG(U.close());
    });
    t.TgZ(1, "span", 3);
    t._uU(2, "×");
    t.qZA();
    t.TgZ(3, "span", 4);
    t._uU(4, "Close");
    t.qZA()();
  }
}
function v(I, E) {
  if (I & 1) {
    t.TgZ(0, "div", 1);
    t.YNc(1, M, 5, 0, "ng-template", 0);
    t.Hsn(2);
    t.qZA();
  }
  if (I & 2) {
    const O = t.oxw();
    t.Tol("alert alert-" + O.type);
    t.Q6J("ngClass", O.classes);
    t.xp6(1);
    t.Q6J("ngIf", O.dismissible);
  }
}
const C = ["*"];
let w = (() => {
  class I {
    constructor() {
      this.type = "warning";
      this.dismissible = false;
      this.dismissOnTimeout = undefined;
    }
  }
  I.ɵfac = function (O) {
    return new (O || I)();
  };
  I.ɵprov = t.Yz7({
    token: I,
    factory: I.ɵfac,
    providedIn: "root"
  });
  return I;
})();
export let wx = (() => {
  class I {
    constructor(O, x) {
      this.changeDetection = x;
      this.type = "warning";
      this.dismissible = false;
      this.isOpen = true;
      this.onClose = new t.vpe();
      this.onClosed = new t.vpe();
      this.classes = "";
      this.dismissibleChange = new t.vpe();
      Object.assign(this, O);
      this.dismissibleChange.subscribe(() => {
        this.classes = this.dismissible ? "alert-dismissible" : "";
        this.changeDetection.markForCheck();
      });
    }
    ngOnInit() {
      if (this.dismissOnTimeout) {
        setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
      }
    }
    close() {
      if (!!this.isOpen) {
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
      }
    }
  }
  I.ɵfac = function (O) {
    return new (O || I)(t.Y36(w), t.Y36(t.sBO));
  };
  I.ɵcmp = t.Xpm({
    type: I,
    selectors: [["alert"], ["bs-alert"]],
    inputs: {
      type: "type",
      dismissible: "dismissible",
      dismissOnTimeout: "dismissOnTimeout",
      isOpen: "isOpen"
    },
    outputs: {
      onClose: "onClose",
      onClosed: "onClosed"
    },
    ngContentSelectors: C,
    decls: 1,
    vars: 1,
    consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", "btn-close", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "sr-only", "visually-hidden"]],
    template: function (O, x) {
      if (O & 1) {
        t.F$t();
        t.YNc(0, v, 3, 4, "ng-template", 0);
      }
      if (O & 2) {
        t.Q6J("ngIf", x.isOpen);
      }
    },
    dependencies: [k.mk, k.O5],
    encapsulation: 2,
    changeDetection: 0
  });
  (0, i.gn)([(0, b.GU)(), (0, i.w6)("design:type", Object)], I.prototype, "dismissible", undefined);
  return I;
})();
export let nM = (() => {
  class I {
    static forRoot() {
      return {
        ngModule: I,
        providers: []
      };
    }
  }
  I.ɵfac = function (O) {
    return new (O || I)();
  };
  I.ɵmod = t.oAB({
    type: I
  });
  I.ɵinj = t.cJS({
    imports: [k.ez]
  });
  return I;
})();