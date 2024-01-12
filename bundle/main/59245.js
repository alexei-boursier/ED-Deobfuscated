import * as i from "94650";
import * as b from "82381";
import * as k from "21607";
import * as M from "37340";
import * as v from "36895";
const w = function (X) {
  return {
    dropdown: X
  };
};
const S = ["*"];
export let fc = (() => {
  class X {
    constructor() {
      this.autoClose = true;
      this.insideClick = false;
      this.isAnimated = false;
      this.stopOnClickPropagation = false;
    }
  }
  X.ɵfac = function (fe) {
    return new (fe || X)();
  };
  X.ɵprov = i.Yz7({
    token: X,
    factory: X.ɵfac,
    providedIn: "root"
  });
  return X;
})();
let I = (() => {
  class X {
    constructor() {
      this.direction = "down";
      this.autoClose = true;
      this.insideClick = false;
      this.isAnimated = false;
      this.stopOnClickPropagation = false;
      this.isOpenChange = new i.vpe();
      this.isDisabledChange = new i.vpe();
      this.toggleClick = new i.vpe();
      this.counts = 0;
      this.dropdownMenu = new Promise(fe => {
        this.resolveDropdownMenu = fe;
      });
    }
  }
  X.ɵfac = function (fe) {
    return new (fe || X)();
  };
  X.ɵprov = i.Yz7({
    token: X,
    factory: X.ɵfac,
    providedIn: "platform"
  });
  return X;
})();
const O = [(0, M.oB)({
  height: 0,
  overflow: "hidden"
}), (0, M.jt)("220ms cubic-bezier(0, 0, 0.2, 1)", (0, M.oB)({
  height: "*",
  overflow: "hidden"
}))];
let x = (() => {
  class X {
    constructor(fe, q, j, G, se) {
      this._state = fe;
      this.cd = q;
      this._renderer = j;
      this._element = G;
      this.isOpen = false;
      this._factoryDropDownAnimation = se.build(O);
      this._subscription = fe.isOpenChange.subscribe(W => {
        this.isOpen = W;
        const Pe = this._element.nativeElement.querySelector(".dropdown-menu");
        this._renderer.addClass(this._element.nativeElement.querySelector("div"), "open");
        if (Pe && !(0, k.XA)()) {
          this._renderer.addClass(Pe, "show");
          if (Pe.classList.contains("dropdown-menu-right") || Pe.classList.contains("dropdown-menu-end")) {
            this._renderer.setStyle(Pe, "left", "auto");
            this._renderer.setStyle(Pe, "right", "0");
          }
          if (this.direction === "up") {
            this._renderer.setStyle(Pe, "top", "auto");
            this._renderer.setStyle(Pe, "transform", "translateY(-101%)");
          }
        }
        if (Pe && this._state.isAnimated) {
          this._factoryDropDownAnimation.create(Pe).play();
        }
        this.cd.markForCheck();
        this.cd.detectChanges();
      });
    }
    get direction() {
      return this._state.direction;
    }
    _contains(fe) {
      return this._element.nativeElement.contains(fe);
    }
    ngOnDestroy() {
      this._subscription.unsubscribe();
    }
  }
  X.ɵfac = function (fe) {
    return new (fe || X)(i.Y36(I), i.Y36(i.sBO), i.Y36(i.Qsj), i.Y36(i.SBq), i.Y36(M._j));
  };
  X.ɵcmp = i.Xpm({
    type: X,
    selectors: [["bs-dropdown-container"]],
    hostAttrs: [2, "display", "block", "position", "absolute", "z-index", "1040"],
    ngContentSelectors: S,
    decls: 2,
    vars: 9,
    consts: [[3, "ngClass"]],
    template: function (fe, q) {
      if (fe & 1) {
        i.F$t();
        i.TgZ(0, "div", 0);
        i.Hsn(1);
        i.qZA();
      }
      if (fe & 2) {
        i.ekj("dropup", q.direction === "up")("show", q.isOpen)("open", q.isOpen);
        i.Q6J("ngClass", i.VKq(7, w, q.direction === "down"));
      }
    },
    dependencies: [v.mk],
    encapsulation: 2,
    changeDetection: 0
  });
  return X;
})();
export let TO = (() => {
  class X {
    constructor(fe, q, j, G, se, W, Pe) {
      this._elementRef = fe;
      this._renderer = q;
      this._viewContainerRef = j;
      this._cis = G;
      this._state = se;
      this._config = W;
      this.dropup = false;
      this._isInlineOpen = false;
      this._isDisabled = false;
      this._subscriptions = [];
      this._isInited = false;
      this._state.autoClose = this._config.autoClose;
      this._state.insideClick = this._config.insideClick;
      this._state.isAnimated = this._config.isAnimated;
      this._state.stopOnClickPropagation = this._config.stopOnClickPropagation;
      this._factoryDropDownAnimation = Pe.build(O);
      this._dropdown = this._cis.createLoader(this._elementRef, this._viewContainerRef, this._renderer).provide({
        provide: I,
        useValue: this._state
      });
      this.onShown = this._dropdown.onShown;
      this.onHidden = this._dropdown.onHidden;
      this.isOpenChange = this._state.isOpenChange;
    }
    set autoClose(fe) {
      this._state.autoClose = fe;
    }
    get autoClose() {
      return this._state.autoClose;
    }
    set isAnimated(fe) {
      this._state.isAnimated = fe;
    }
    get isAnimated() {
      return this._state.isAnimated;
    }
    set insideClick(fe) {
      this._state.insideClick = fe;
    }
    get insideClick() {
      return this._state.insideClick;
    }
    set isDisabled(fe) {
      this._isDisabled = fe;
      this._state.isDisabledChange.emit(fe);
      if (fe) {
        this.hide();
      }
    }
    get isDisabled() {
      return this._isDisabled;
    }
    get isOpen() {
      if (this._showInline) {
        return this._isInlineOpen;
      } else {
        return this._dropdown.isShown;
      }
    }
    set isOpen(fe) {
      if (fe) {
        this.show();
      } else {
        this.hide();
      }
    }
    get isBs4() {
      return !(0, k.XA)();
    }
    get _showInline() {
      return !this.container;
    }
    ngOnInit() {
      if (!this._isInited) {
        this._isInited = true;
        this._dropdown.listen({
          outsideClick: false,
          triggers: this.triggers,
          show: () => this.show()
        });
        this._subscriptions.push(this._state.toggleClick.subscribe(fe => this.toggle(fe)));
        this._subscriptions.push(this._state.isDisabledChange.pipe((0, t.h)(fe => fe)).subscribe(() => this.hide()));
      }
    }
    show() {
      if (!this.isOpen && !this.isDisabled) {
        if (this._showInline) {
          if (!this._inlinedMenu) {
            this._state.dropdownMenu.then(fe => {
              this._dropdown.attachInline(fe.viewContainer, fe.templateRef);
              this._inlinedMenu = this._dropdown._inlineViewRef;
              this.addBs4Polyfills();
              if (this._inlinedMenu) {
                this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode, "open");
              }
              this.playAnimation();
            }).catch();
          }
          this.addBs4Polyfills();
          this._isInlineOpen = true;
          this.onShown.emit(true);
          this._state.isOpenChange.emit(true);
          this.playAnimation();
          return;
        }
        this._state.dropdownMenu.then(fe => {
          const q = this.dropup || typeof this.dropup !== "undefined" && this.dropup;
          this._state.direction = q ? "up" : "down";
          const j = this.placement || (q ? "top start" : "bottom start");
          this._dropdown.attach(x).to(this.container).position({
            attachment: j
          }).show({
            content: fe.templateRef,
            placement: j
          });
          this._state.isOpenChange.emit(true);
        }).catch();
      }
    }
    hide() {
      if (!!this.isOpen) {
        if (this._showInline) {
          this.removeShowClass();
          this.removeDropupStyles();
          this._isInlineOpen = false;
          this.onHidden.emit(true);
        } else {
          this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
      }
    }
    toggle(fe) {
      if (this.isOpen || !fe) {
        return this.hide();
      } else {
        return this.show();
      }
    }
    _contains(fe) {
      return this._elementRef.nativeElement.contains(fe.target) || this._dropdown.instance && this._dropdown.instance._contains(fe.target);
    }
    navigationClick(fe) {
      const q = this._elementRef.nativeElement.querySelector(".dropdown-menu");
      if (!q) {
        return;
      }
      const j = this._elementRef.nativeElement.ownerDocument.activeElement;
      const G = q.querySelectorAll(".dropdown-item");
      switch (fe.keyCode) {
        case 38:
          if (this._state.counts > 0) {
            G[--this._state.counts].focus();
          }
          break;
        case 40:
          if (this._state.counts + 1 < G.length) {
            if (j.classList !== G[this._state.counts].classList) {
              G[this._state.counts].focus();
            } else {
              G[++this._state.counts].focus();
            }
          }
      }
      fe.preventDefault();
    }
    ngOnDestroy() {
      for (const fe of this._subscriptions) {
        fe.unsubscribe();
      }
      this._dropdown.dispose();
    }
    addBs4Polyfills() {
      if (!(0, k.XA)()) {
        this.addShowClass();
        this.checkRightAlignment();
        this.addDropupStyles();
      }
    }
    playAnimation() {
      if (this._state.isAnimated && this._inlinedMenu) {
        setTimeout(() => {
          if (this._inlinedMenu) {
            this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play();
          }
        });
      }
    }
    addShowClass() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        this._renderer.addClass(this._inlinedMenu.rootNodes[0], "show");
      }
    }
    removeShowClass() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        this._renderer.removeClass(this._inlinedMenu.rootNodes[0], "show");
      }
    }
    checkRightAlignment() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        const fe = this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-right") || this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-end");
        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "left", fe ? "auto" : "0");
        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "right", fe ? "0" : "auto");
      }
    }
    addDropupStyles() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "top", this.dropup ? "auto" : "100%");
        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "transform", this.dropup ? "translateY(-101%)" : "translateY(0)");
        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "bottom", "auto");
      }
    }
    removeDropupStyles() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "top");
        this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "transform");
        this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "bottom");
      }
    }
  }
  X.ɵfac = function (fe) {
    return new (fe || X)(i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(i.s_b), i.Y36(b.oj), i.Y36(I), i.Y36(fc), i.Y36(M._j));
  };
  X.ɵdir = i.lG2({
    type: X,
    selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]],
    hostVars: 6,
    hostBindings: function (fe, q) {
      if (fe & 1) {
        i.NdJ("keydown.arrowDown", function (G) {
          return q.navigationClick(G);
        })("keydown.arrowUp", function (G) {
          return q.navigationClick(G);
        });
      }
      if (fe & 2) {
        i.ekj("dropup", q.dropup)("open", q.isOpen)("show", q.isOpen && q.isBs4);
      }
    },
    inputs: {
      placement: "placement",
      triggers: "triggers",
      container: "container",
      dropup: "dropup",
      autoClose: "autoClose",
      isAnimated: "isAnimated",
      insideClick: "insideClick",
      isDisabled: "isDisabled",
      isOpen: "isOpen"
    },
    outputs: {
      isOpenChange: "isOpenChange",
      onShown: "onShown",
      onHidden: "onHidden"
    },
    exportAs: ["bs-dropdown"],
    features: [i._Bn([I])]
  });
  return X;
})();
export let Hz = (() => {
  class X {
    constructor(fe, q, j) {
      fe.resolveDropdownMenu({
        templateRef: j,
        viewContainer: q
      });
    }
  }
  X.ɵfac = function (fe) {
    return new (fe || X)(i.Y36(I), i.Y36(i.s_b), i.Y36(i.Rgc));
  };
  X.ɵdir = i.lG2({
    type: X,
    selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]],
    exportAs: ["bs-dropdown-menu"]
  });
  return X;
})();
export let Mq = (() => {
  class X {
    constructor(fe, q, j, G, se) {
      this._changeDetectorRef = fe;
      this._dropdown = q;
      this._element = j;
      this._renderer = G;
      this._state = se;
      this.isOpen = false;
      this._subscriptions = [];
      this._subscriptions.push(this._state.isOpenChange.subscribe(W => {
        this.isOpen = W;
        if (W) {
          this._documentClickListener = this._renderer.listen("document", "click", Pe => {
            if (this._state.autoClose && Pe.button !== 2 && !this._element.nativeElement.contains(Pe.target) && (!this._state.insideClick || !this._dropdown._contains(Pe))) {
              this._state.toggleClick.emit(false);
              this._changeDetectorRef.detectChanges();
            }
          });
          this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, "keyup.esc", () => {
            if (this._state.autoClose) {
              this._state.toggleClick.emit(false);
              this._changeDetectorRef.detectChanges();
            }
          });
        } else {
          if (this._documentClickListener) {
            this._documentClickListener();
          }
          if (this._escKeyUpListener) {
            this._escKeyUpListener();
          }
        }
      }));
      this._subscriptions.push(this._state.isDisabledChange.subscribe(W => this.isDisabled = W || undefined));
    }
    onClick(fe) {
      if (this._state.stopOnClickPropagation) {
        fe.stopPropagation();
      }
      if (!this.isDisabled) {
        this._state.toggleClick.emit(true);
      }
    }
    ngOnDestroy() {
      if (this._documentClickListener) {
        this._documentClickListener();
      }
      if (this._escKeyUpListener) {
        this._escKeyUpListener();
      }
      for (const fe of this._subscriptions) {
        fe.unsubscribe();
      }
    }
  }
  X.ɵfac = function (fe) {
    return new (fe || X)(i.Y36(i.sBO), i.Y36(TO), i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(I));
  };
  X.ɵdir = i.lG2({
    type: X,
    selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]],
    hostVars: 3,
    hostBindings: function (fe, q) {
      if (fe & 1) {
        i.NdJ("click", function (G) {
          return q.onClick(G);
        });
      }
      if (fe & 2) {
        i.uIk("aria-haspopup", true)("disabled", q.isDisabled)("aria-expanded", q.isOpen);
      }
    },
    exportAs: ["bs-dropdown-toggle"]
  });
  return X;
})();
export let mr = (() => {
  class X {
    static forRoot() {
      return {
        ngModule: X,
        providers: [b.oj, C.sA, I]
      };
    }
  }
  X.ɵfac = function (fe) {
    return new (fe || X)();
  };
  X.ɵmod = i.oAB({
    type: X
  });
  X.ɵinj = i.cJS({
    imports: [v.ez]
  });
  return X;
})();