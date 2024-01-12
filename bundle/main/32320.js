import * as i from "94650";
import * as t from "21607";
import * as b from "65987";
import * as k from "70655";
import * as M from "82381";
const w = ["*"];
let S = (() => {
  class x {
    constructor() {
      this.adaptivePosition = true;
      this.placement = "top";
      this.triggers = "hover focus";
      this.delay = 0;
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
let L = (() => {
  class x {
    constructor(B) {
      Object.assign(this, B);
    }
    get _bsVersions() {
      return (0, t.Wl)();
    }
    ngAfterViewInit() {
      this.classMap = {
        in: false,
        fade: false
      };
      if (this.placement) {
        if (this._bsVersions.isBs5) {
          this.placement = b.Bz[this.placement];
        }
        this.classMap[this.placement] = true;
      }
      this.classMap[`tooltip-${this.placement}`] = true;
      this.classMap.in = true;
      if (this.animation) {
        this.classMap.fade = true;
      }
      if (this.containerClass) {
        this.classMap[this.containerClass] = true;
      }
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)(i.Y36(S));
  };
  x.ɵcmp = i.Xpm({
    type: x,
    selectors: [["bs-tooltip-container"]],
    hostAttrs: ["role", "tooltip"],
    hostVars: 7,
    hostBindings: function (B, F) {
      if (B & 2) {
        i.uIk("id", F.id);
        i.Tol("tooltip in tooltip-" + F.placement + " bs-tooltip-" + F.placement + " " + F.placement + " " + F.containerClass);
        i.ekj("show", !F._bsVersions.isBs3)("bs3", F._bsVersions.isBs3);
      }
    },
    ngContentSelectors: w,
    decls: 3,
    vars: 0,
    consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
    template: function (B, F) {
      if (B & 1) {
        i.F$t();
        i._UZ(0, "div", 0);
        i.TgZ(1, "div", 1);
        i.Hsn(2);
        i.qZA();
      }
    },
    styles: [".tooltip[_nghost-%COMP%]{display:block;pointer-events:none}.bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.tooltip.bottom[_nghost-%COMP%]{margin-top:0}.bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{margin:0}.bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"],
    changeDetection: 0
  });
  return x;
})();
let I = 0;
export let i9 = (() => {
  class x {
    constructor(B, F, Z, X, le, fe) {
      this._elementRef = X;
      this._renderer = le;
      this._positionService = fe;
      this.tooltipId = I++;
      this.adaptivePosition = true;
      this.tooltipChange = new i.vpe();
      this.placement = "top";
      this.triggers = "hover focus";
      this.containerClass = "";
      this.isDisabled = false;
      this.delay = 0;
      this.tooltipAnimation = true;
      this.tooltipFadeDuration = 150;
      this.tooltipStateChanged = new i.vpe();
      this._tooltip = F.createLoader(this._elementRef, B, this._renderer).provide({
        provide: S,
        useValue: Z
      });
      Object.assign(this, Z);
      this.onShown = this._tooltip.onShown;
      this.onHidden = this._tooltip.onHidden;
    }
    get isOpen() {
      return this._tooltip.isShown;
    }
    set isOpen(B) {
      if (B) {
        this.show();
      } else {
        this.hide();
      }
    }
    set htmlContent(B) {
      (0, t.O4)("tooltipHtml was deprecated, please use `tooltip` instead");
      this.tooltip = B;
    }
    set _placement(B) {
      (0, t.O4)("tooltipPlacement was deprecated, please use `placement` instead");
      this.placement = B;
    }
    set _isOpen(B) {
      (0, t.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead");
      this.isOpen = B;
    }
    get _isOpen() {
      (0, t.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead");
      return this.isOpen;
    }
    set _enable(B) {
      (0, t.O4)("tooltipEnable was deprecated, please use `isDisabled` instead");
      this.isDisabled = !B;
    }
    get _enable() {
      (0, t.O4)("tooltipEnable was deprecated, please use `isDisabled` instead");
      return this.isDisabled;
    }
    set _appendToBody(B) {
      (0, t.O4)("tooltipAppendToBody was deprecated, please use `container=\"body\"` instead");
      this.container = B ? "body" : this.container;
    }
    get _appendToBody() {
      (0, t.O4)("tooltipAppendToBody was deprecated, please use `container=\"body\"` instead");
      return this.container === "body";
    }
    set _popupClass(B) {
      (0, t.O4)("tooltipClass deprecated");
    }
    set _tooltipContext(B) {
      (0, t.O4)("tooltipContext deprecated");
    }
    set _tooltipPopupDelay(B) {
      (0, t.O4)("tooltipPopupDelay is deprecated, use `delay` instead");
      this.delay = B;
    }
    get _tooltipTrigger() {
      (0, t.O4)("tooltipTrigger was deprecated, please use `triggers` instead");
      return this.triggers;
    }
    set _tooltipTrigger(B) {
      (0, t.O4)("tooltipTrigger was deprecated, please use `triggers` instead");
      this.triggers = (B || "").toString();
    }
    ngOnInit() {
      this._tooltip.listen({
        triggers: this.triggers,
        show: () => this.show()
      });
      this.tooltipChange.subscribe(B => {
        if (!B) {
          this._tooltip.hide();
        }
      });
      this.onShown.subscribe(() => {
        this.setAriaDescribedBy();
      });
      this.onHidden.subscribe(() => {
        this.setAriaDescribedBy();
      });
    }
    setAriaDescribedBy() {
      this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : undefined;
      if (this._ariaDescribedby) {
        this._renderer.setAttribute(this._elementRef.nativeElement, "aria-describedby", this._ariaDescribedby);
      } else {
        this._renderer.removeAttribute(this._elementRef.nativeElement, "aria-describedby");
      }
    }
    toggle() {
      if (this.isOpen) {
        return this.hide();
      }
      this.show();
    }
    show() {
      this._positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this.adaptivePosition
          },
          preventOverflow: {
            enabled: this.adaptivePosition,
            boundariesElement: this.boundariesElement || "scrollParent"
          }
        }
      });
      if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
        return;
      }
      const B = () => {
        this._delayTimeoutId &&= undefined;
        this._tooltip.attach(L).to(this.container).position({
          attachment: this.placement
        }).show({
          content: this.tooltip,
          placement: this.placement,
          containerClass: this.containerClass,
          id: `tooltip-${this.tooltipId}`
        });
      };
      const F = () => {
        if (this._tooltipCancelShowFn) {
          this._tooltipCancelShowFn();
        }
      };
      if (this.delay) {
        if (this._delaySubscription) {
          this._delaySubscription.unsubscribe();
        }
        this._delaySubscription = (0, v.H)(this.delay).subscribe(() => {
          B();
          F();
        });
        if (this.triggers) {
          (0, t.AL)(this.triggers).forEach(Z => {
            if (!!Z.close) {
              this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, Z.close, () => {
                var X;
                if ((X = this._delaySubscription) !== null && X !== undefined) {
                  X.unsubscribe();
                }
                F();
              });
            }
          });
        }
      } else {
        B();
      }
    }
    hide() {
      var B;
      if (this._delayTimeoutId) {
        clearTimeout(this._delayTimeoutId);
        this._delayTimeoutId = undefined;
      }
      if (this._tooltip.isShown) {
        if ((B = this._tooltip.instance) !== null && B !== undefined && B.classMap) {
          this._tooltip.instance.classMap.in = false;
        }
        setTimeout(() => {
          this._tooltip.hide();
        }, this.tooltipFadeDuration);
      }
    }
    ngOnDestroy() {
      this._tooltip.dispose();
      this.tooltipChange.unsubscribe();
      if (this._delaySubscription) {
        this._delaySubscription.unsubscribe();
      }
      this.onShown.unsubscribe();
      this.onHidden.unsubscribe();
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)(i.Y36(i.s_b), i.Y36(M.oj), i.Y36(S), i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(b.sA));
  };
  x.ɵdir = i.lG2({
    type: x,
    selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
    inputs: {
      adaptivePosition: "adaptivePosition",
      tooltip: "tooltip",
      placement: "placement",
      triggers: "triggers",
      container: "container",
      containerClass: "containerClass",
      boundariesElement: "boundariesElement",
      isOpen: "isOpen",
      isDisabled: "isDisabled",
      delay: "delay",
      htmlContent: ["tooltipHtml", "htmlContent"],
      _placement: ["tooltipPlacement", "_placement"],
      _isOpen: ["tooltipIsOpen", "_isOpen"],
      _enable: ["tooltipEnable", "_enable"],
      _appendToBody: ["tooltipAppendToBody", "_appendToBody"],
      tooltipAnimation: "tooltipAnimation",
      _popupClass: ["tooltipClass", "_popupClass"],
      _tooltipContext: ["tooltipContext", "_tooltipContext"],
      _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"],
      tooltipFadeDuration: "tooltipFadeDuration",
      _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"]
    },
    outputs: {
      tooltipChange: "tooltipChange",
      onShown: "onShown",
      onHidden: "onHidden",
      tooltipStateChanged: "tooltipStateChanged"
    },
    exportAs: ["bs-tooltip"]
  });
  (0, k.gn)([(0, t.GU)(), (0, k.w6)("design:type", Object)], x.prototype, "tooltip", undefined);
  return x;
})();
export let z8 = (() => {
  class x {
    static forRoot() {
      return {
        ngModule: x,
        providers: [M.oj, b.sA]
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
    imports: [C.ez]
  });
  return x;
})();