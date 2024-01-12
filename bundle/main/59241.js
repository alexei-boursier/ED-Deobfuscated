import * as i from "94650";
import * as t from "36895";
function b(O, x) {
  if (O & 1) {
    const U = i.EpF();
    i.TgZ(0, "span", 7);
    i.NdJ("click", function (F) {
      i.CHM(U);
      const Z = i.oxw().$implicit;
      const X = i.oxw();
      F.preventDefault();
      return i.KtG(X.removeTab(Z));
    });
    i._uU(1, " ❌");
    i.qZA();
  }
}
const k = function (O) {
  return ["nav-item", O];
};
function M(O, x) {
  if (O & 1) {
    const U = i.EpF();
    i.TgZ(0, "li", 3);
    i.NdJ("keydown", function (F) {
      const X = i.CHM(U).index;
      const le = i.oxw();
      return i.KtG(le.keyNavActions(F, X));
    });
    i.TgZ(1, "a", 4);
    i.NdJ("click", function () {
      const Z = i.CHM(U).$implicit;
      return i.KtG(Z.active = true);
    });
    i.TgZ(2, "span", 5);
    i._uU(3);
    i.qZA();
    i.YNc(4, b, 2, 0, "span", 6);
    i.qZA()();
  }
  if (O & 2) {
    const U = x.$implicit;
    i.ekj("active", U.active)("disabled", U.disabled);
    i.Q6J("ngClass", i.VKq(15, k, U.customClass || ""));
    i.xp6(1);
    i.ekj("active", U.active)("disabled", U.disabled);
    i.uIk("aria-controls", U.id ? U.id : "")("aria-selected", !!U.active)("id", U.id ? U.id + "-link" : "");
    i.xp6(1);
    i.Q6J("ngTransclude", U.headingRef);
    i.xp6(1);
    i.Oqu(U.heading);
    i.xp6(1);
    i.Q6J("ngIf", U.removable);
  }
}
const v = ["*"];
let C = (() => {
  class O {
    constructor(U) {
      this.viewRef = U;
    }
    set ngTransclude(U) {
      this._ngTransclude = U;
      if (U) {
        this.viewRef.createEmbeddedView(U);
      }
    }
    get ngTransclude() {
      return this._ngTransclude;
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)(i.Y36(i.s_b));
  };
  O.ɵdir = i.lG2({
    type: O,
    selectors: [["", "ngTransclude", ""]],
    inputs: {
      ngTransclude: "ngTransclude"
    }
  });
  return O;
})();
let w = (() => {
  class O {
    constructor() {
      this.type = "tabs";
      this.isKeysAllowed = true;
      this.ariaLabel = "Tabs";
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
export let AH = (() => {
  class O {
    constructor(U, B, F) {
      this.renderer = B;
      this.elementRef = F;
      this.clazz = true;
      this.tabs = [];
      this.classMap = {};
      this.ariaLabel = "Tabs";
      this.isDestroyed = false;
      this._vertical = false;
      this._justified = false;
      this._type = "tabs";
      this._isKeysAllowed = true;
      Object.assign(this, U);
    }
    get vertical() {
      return this._vertical;
    }
    set vertical(U) {
      this._vertical = U;
      this.setClassMap();
    }
    get justified() {
      return this._justified;
    }
    set justified(U) {
      this._justified = U;
      this.setClassMap();
    }
    get type() {
      return this._type;
    }
    set type(U) {
      this._type = U;
      this.setClassMap();
    }
    get isKeysAllowed() {
      return this._isKeysAllowed;
    }
    set isKeysAllowed(U) {
      this._isKeysAllowed = U;
    }
    ngOnDestroy() {
      this.isDestroyed = true;
    }
    addTab(U) {
      this.tabs.push(U);
      U.active = this.tabs.length === 1 && !U.active;
    }
    removeTab(U, B = {
      reselect: true,
      emit: true
    }) {
      const F = this.tabs.indexOf(U);
      if (F !== -1 && !this.isDestroyed) {
        if (B.reselect && U.active && this.hasAvailableTabs(F)) {
          const Z = this.getClosestTabIndex(F);
          this.tabs[Z].active = true;
        }
        if (B.emit) {
          U.removed.emit(U);
        }
        this.tabs.splice(F, 1);
        if (U.elementRef.nativeElement.parentNode) {
          this.renderer.removeChild(U.elementRef.nativeElement.parentNode, U.elementRef.nativeElement);
        }
      }
    }
    keyNavActions(U, B) {
      if (!this.isKeysAllowed) {
        return;
      }
      const F = Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));
      if (U.keyCode === 13 || U.key === "Enter" || U.keyCode === 32 || U.key === "Space") {
        U.preventDefault();
        F[B % F.length].click();
        return;
      }
      if (U.keyCode !== 39 && U.key !== "RightArrow") {
        if (U.keyCode !== 37 && U.key !== "LeftArrow") {
          if (U.keyCode !== 36 && U.key !== "Home") {
            if (U.keyCode !== 35 && U.key !== "End") {
              if ((U.keyCode === 46 || U.key === "Delete") && this.tabs[B].removable) {
                this.removeTab(this.tabs[B]);
                if (F[B + 1]) {
                  F[(B + 1) % F.length].focus();
                  return;
                }
                if (F[F.length - 1]) {
                  F[0].focus();
                }
              }
            } else {
              U.preventDefault();
              let Z;
              let X = 1;
              let le = B;
              do {
                if (le - X < 0) {
                  le = F.length - 1;
                  Z = F[le];
                  X = 0;
                } else {
                  Z = F[le - X];
                }
                X++;
              } while (Z.classList.contains("disabled"));
              Z.focus();
            }
          } else {
            U.preventDefault();
            let Z;
            let X = 0;
            do {
              Z = F[X % F.length];
              X++;
            } while (Z.classList.contains("disabled"));
            Z.focus();
          }
        } else {
          let Z;
          let X = 1;
          let le = B;
          do {
            if (le - X < 0) {
              le = F.length - 1;
              Z = F[le];
              X = 0;
            } else {
              Z = F[le - X];
            }
            X++;
          } while (Z.classList.contains("disabled"));
          Z.focus();
        }
      } else {
        let Z;
        let X = 1;
        do {
          Z = F[(B + X) % F.length];
          X++;
        } while (Z.classList.contains("disabled"));
        Z.focus();
      }
    }
    getClosestTabIndex(U) {
      const B = this.tabs.length;
      if (!B) {
        return -1;
      }
      for (let F = 1; F <= B; F += 1) {
        const Z = U - F;
        const X = U + F;
        if (this.tabs[Z] && !this.tabs[Z].disabled) {
          return Z;
        }
        if (this.tabs[X] && !this.tabs[X].disabled) {
          return X;
        }
      }
      return -1;
    }
    hasAvailableTabs(U) {
      const B = this.tabs.length;
      if (!B) {
        return false;
      }
      for (let F = 0; F < B; F += 1) {
        if (!this.tabs[F].disabled && F !== U) {
          return true;
        }
      }
      return false;
    }
    setClassMap() {
      this.classMap = {
        "nav-stacked": this.vertical,
        "flex-column": this.vertical,
        "nav-justified": this.justified,
        [`nav-${this.type}`]: true
      };
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)(i.Y36(w), i.Y36(i.Qsj), i.Y36(i.SBq));
  };
  O.ɵcmp = i.Xpm({
    type: O,
    selectors: [["tabset"]],
    hostVars: 2,
    hostBindings: function (U, B) {
      if (U & 2) {
        i.ekj("tab-container", B.clazz);
      }
    },
    inputs: {
      vertical: "vertical",
      justified: "justified",
      type: "type"
    },
    ngContentSelectors: v,
    decls: 4,
    vars: 3,
    consts: [["role", "tablist", 1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass", "keydown"], ["href", "javascript:void(0);", "role", "tab", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]],
    template: function (U, B) {
      if (U & 1) {
        i.F$t();
        i.TgZ(0, "ul", 0);
        i.NdJ("click", function (Z) {
          return Z.preventDefault();
        });
        i.YNc(1, M, 5, 17, "li", 1);
        i.qZA();
        i.TgZ(2, "div", 2);
        i.Hsn(3);
        i.qZA();
      }
      if (U & 2) {
        i.Q6J("ngClass", B.classMap);
        i.uIk("aria-label", B.ariaLabel);
        i.xp6(1);
        i.Q6J("ngForOf", B.tabs);
      }
    },
    dependencies: [t.mk, t.sg, t.O5, C],
    styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]
  });
  return O;
})();
export let wW = (() => {
  class O {
    constructor(U, B, F) {
      this.elementRef = B;
      this.renderer = F;
      this.disabled = false;
      this.removable = false;
      this.selectTab = new i.vpe();
      this.deselect = new i.vpe();
      this.removed = new i.vpe();
      this.addClass = true;
      this.role = "tabpanel";
      this._active = false;
      this._customClass = "";
      this.tabset = U;
      this.tabset.addTab(this);
    }
    get customClass() {
      return this._customClass;
    }
    set customClass(U) {
      if (this.customClass) {
        this.customClass.split(" ").forEach(B => {
          this.renderer.removeClass(this.elementRef.nativeElement, B);
        });
      }
      this._customClass = U ? U.trim() : "";
      if (this.customClass) {
        this.customClass.split(" ").forEach(B => {
          this.renderer.addClass(this.elementRef.nativeElement, B);
        });
      }
    }
    get active() {
      return this._active;
    }
    set active(U) {
      if (this._active !== U) {
        if (this.disabled && U || !U) {
          if (this._active && !U) {
            this.deselect.emit(this);
            this._active = U;
          }
          return;
        }
        this._active = U;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach(B => {
          if (B !== this) {
            B.active = false;
          }
        });
      }
    }
    get ariaLabelledby() {
      if (this.id) {
        return `${this.id}-link`;
      } else {
        return "";
      }
    }
    ngOnInit() {
      this.removable = !!this.removable;
    }
    ngOnDestroy() {
      this.tabset.removeTab(this, {
        reselect: false,
        emit: false
      });
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)(i.Y36(AH), i.Y36(i.SBq), i.Y36(i.Qsj));
  };
  O.ɵdir = i.lG2({
    type: O,
    selectors: [["tab"], ["", "tab", ""]],
    hostVars: 7,
    hostBindings: function (U, B) {
      if (U & 2) {
        i.uIk("id", B.id)("role", B.role)("aria-labelledby", B.ariaLabelledby);
        i.ekj("active", B.active)("tab-pane", B.addClass);
      }
    },
    inputs: {
      heading: "heading",
      id: "id",
      disabled: "disabled",
      removable: "removable",
      customClass: "customClass",
      active: "active"
    },
    outputs: {
      selectTab: "selectTab",
      deselect: "deselect",
      removed: "removed"
    },
    exportAs: ["tab"]
  });
  return O;
})();
export let y3 = (() => {
  class O {
    constructor(U, B) {
      B.headingRef = U;
    }
  }
  O.ɵfac = function (U) {
    return new (U || O)(i.Y36(i.Rgc), i.Y36(wW));
  };
  O.ɵdir = i.lG2({
    type: O,
    selectors: [["", "tabHeading", ""]]
  });
  return O;
})();
export let P4 = (() => {
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
    imports: [t.ez]
  });
  return O;
})();