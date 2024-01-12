import * as i from "94650";
import * as t from "21607";
import * as b from "36895";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let v;
let M = (() => {
  class lt {
    constructor() {
      this._focusTrapStack = [];
    }
    register(St) {
      this._focusTrapStack = this._focusTrapStack.filter(Lt => Lt !== St);
      let ve = this._focusTrapStack;
      if (ve.length) {
        ve[ve.length - 1]._disable();
      }
      ve.push(St);
      St._enable();
    }
    deregister(St) {
      St._disable();
      const ve = this._focusTrapStack;
      const Lt = ve.indexOf(St);
      if (Lt !== -1) {
        ve.splice(Lt, 1);
        if (ve.length) {
          ve[ve.length - 1]._enable();
        }
      }
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)();
  };
  lt.ɵprov = i.Yz7({
    token: lt,
    factory: lt.ɵfac,
    providedIn: "root"
  });
  return lt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
try {
  v = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  v = false;
}
let C = (() => {
  class lt {
    constructor(St) {
      this._platformId = St;
      this.isBrowser = this._platformId ? (0, b.NF)(this._platformId) : typeof document == "object" && !!document;
      this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      this.BLINK = this.isBrowser && (!!window.chrome || !!v) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
      this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
      this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)(i.LFG(i.Lbi));
  };
  lt.ɵprov = i.Yz7({
    token: lt,
    factory: lt.ɵfac,
    providedIn: "root"
  });
  return lt;
})();
let S = (() => {
  class lt {
    constructor(St) {
      this._platform = St;
    }
    isDisabled(St) {
      return St.hasAttribute("disabled");
    }
    isVisible(St) {
      return function I(lt) {
        return !!lt.offsetWidth || !!lt.offsetHeight || typeof lt.getClientRects == "function" && !!lt.getClientRects().length;
      }(St) && getComputedStyle(St).visibility === "visible";
    }
    isTabbable(St) {
      if (!this._platform.isBrowser) {
        return false;
      }
      const ve = function L(lt) {
        try {
          return lt.frameElement;
        } catch {
          return null;
        }
      }(function fe(lt) {
        return lt.ownerDocument && lt.ownerDocument.defaultView || window;
      }
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */(St));
      if (ve && (Z(ve) === -1 || !this.isVisible(ve))) {
        return false;
      }
      let Lt = St.nodeName.toLowerCase();
      let ft = Z(St);
      if (St.hasAttribute("contenteditable")) {
        return ft !== -1;
      } else {
        return Lt !== "iframe" && Lt !== "object" && (!this._platform.WEBKIT || !this._platform.IOS || !!function X(lt) {
          let et = lt.nodeName.toLowerCase();
          let St = et === "input" && lt.type;
          return St === "text" || St === "password" || et === "select" || et === "textarea";
        }(St)) && (Lt === "audio" ? !!St.hasAttribute("controls") && ft !== -1 : Lt === "video" ? ft !== -1 && (ft !== null || this._platform.FIREFOX || St.hasAttribute("controls")) : St.tabIndex >= 0);
      }
    }
    isFocusable(St, ve) {
      return function le(lt) {
        return !function O(lt) {
          return function U(lt) {
            return lt.nodeName.toLowerCase() == "input";
          }(lt) && lt.type == "hidden";
        }(lt) && (function E(lt) {
          let et = lt.nodeName.toLowerCase();
          return et === "input" || et === "select" || et === "button" || et === "textarea";
        }(lt) || function x(lt) {
          return function B(lt) {
            return lt.nodeName.toLowerCase() == "a";
          }(lt) && lt.hasAttribute("href");
        }(lt) || lt.hasAttribute("contenteditable") || F(lt));
      }(St) && !this.isDisabled(St) && (ve?.ignoreVisibility || this.isVisible(St));
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)(i.LFG(C));
  };
  lt.ɵprov = i.Yz7({
    token: lt,
    factory: lt.ɵfac,
    providedIn: "root"
  });
  return lt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function F(lt) {
  if (!lt.hasAttribute("tabindex") || lt.tabIndex === undefined) {
    return false;
  }
  let et = lt.getAttribute("tabindex");
  return et != "-32768" && !!et && !isNaN(parseInt(et, 10));
}
function Z(lt) {
  if (!F(lt)) {
    return null;
  }
  const et = parseInt(lt.getAttribute("tabindex") || "", 10);
  if (isNaN(et)) {
    return -1;
  } else {
    return et;
  }
}
function q(lt) {
  return lt != null && "false" != `${lt}`;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class j {
  constructor(et, St, ve, Lt, ft = false) {
    this._element = et;
    this._checker = St;
    this._ngZone = ve;
    this._document = Lt;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!ft) {
      this.attachAnchors();
    }
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(et) {
    this._enabled = et;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(et, this._startAnchor);
      this._toggleAnchorTabIndex(et, this._endAnchor);
    }
  }
  destroy() {
    const et = this._startAnchor;
    const St = this._endAnchor;
    if (et) {
      et.removeEventListener("focus", this.startAnchorListener);
      if (et.parentNode) {
        et.parentNode.removeChild(et);
      }
    }
    if (St) {
      St.removeEventListener("focus", this.endAnchorListener);
      if (St.parentNode) {
        St.parentNode.removeChild(St);
      }
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  attachAnchors() {
    return !!this._hasAttached || (this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    }), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = true), this._hasAttached);
  }
  focusInitialElementWhenReady() {
    return new Promise(et => {
      this._executeOnStable(() => et(this.focusInitialElement()));
    });
  }
  focusFirstTabbableElementWhenReady() {
    return new Promise(et => {
      this._executeOnStable(() => et(this.focusFirstTabbableElement()));
    });
  }
  focusLastTabbableElementWhenReady() {
    return new Promise(et => {
      this._executeOnStable(() => et(this.focusLastTabbableElement()));
    });
  }
  _getRegionBoundary(et) {
    let St = this._element.querySelectorAll(`[cdk-focus-region-${et}], [cdkFocusRegion${et}], [cdk-focus-${et}]`);
    for (let ve = 0; ve < St.length; ve++) {
      if (St[ve].hasAttribute(`cdk-focus-${et}`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-${et}', use 'cdkFocusRegion${et}' instead. The deprecated attribute will be removed in 8.0.0.`, St[ve]);
      } else if (St[ve].hasAttribute(`cdk-focus-region-${et}`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-region-${et}', use 'cdkFocusRegion${et}' instead. The deprecated attribute will be removed in 8.0.0.`, St[ve]);
      }
    }
    if (et == "start") {
      if (St.length) {
        return St[0];
      } else {
        return this._getFirstTabbableElement(this._element);
      }
    } else if (St.length) {
      return St[St.length - 1];
    } else {
      return this._getLastTabbableElement(this._element);
    }
  }
  focusInitialElement() {
    const et = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");
    if (et) {
      if (et.hasAttribute("cdk-focus-initial")) {
        console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0", et);
      }
      if (!this._checker.isFocusable(et)) {
        const St = this._getFirstTabbableElement(et);
        St?.focus();
        return !!St;
      }
      et.focus();
      return true;
    }
    return this.focusFirstTabbableElement();
  }
  focusFirstTabbableElement() {
    const et = this._getRegionBoundary("start");
    if (et) {
      et.focus();
    }
    return !!et;
  }
  focusLastTabbableElement() {
    const et = this._getRegionBoundary("end");
    if (et) {
      et.focus();
    }
    return !!et;
  }
  hasAttached() {
    return this._hasAttached;
  }
  _getFirstTabbableElement(et) {
    if (this._checker.isFocusable(et) && this._checker.isTabbable(et)) {
      return et;
    }
    let St = et.children || et.childNodes;
    for (let ve = 0; ve < St.length; ve++) {
      let Lt = St[ve].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(St[ve]) : null;
      if (Lt) {
        return Lt;
      }
    }
    return null;
  }
  _getLastTabbableElement(et) {
    if (this._checker.isFocusable(et) && this._checker.isTabbable(et)) {
      return et;
    }
    let St = et.children || et.childNodes;
    for (let ve = St.length - 1; ve >= 0; ve--) {
      let Lt = St[ve].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(St[ve]) : null;
      if (Lt) {
        return Lt;
      }
    }
    return null;
  }
  _createAnchor() {
    const et = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, et);
    et.classList.add("cdk-visually-hidden");
    et.classList.add("cdk-focus-trap-anchor");
    et.setAttribute("aria-hidden", "true");
    return et;
  }
  _toggleAnchorTabIndex(et, St) {
    if (et) {
      St.setAttribute("tabindex", "0");
    } else {
      St.removeAttribute("tabindex");
    }
  }
  toggleAnchors(et) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(et, this._startAnchor);
      this._toggleAnchorTabIndex(et, this._endAnchor);
    }
  }
  _executeOnStable(et) {
    if (this._ngZone.isStable) {
      et();
    } else {
      this._ngZone.onStable.pipe((0, k.q)(1)).subscribe(et);
    }
  }
}
let G = (() => {
  class lt {
    constructor(St, ve, Lt) {
      this._checker = St;
      this._ngZone = ve;
      this._document = Lt;
    }
    create(St, ve = false) {
      return new j(St, this._checker, this._ngZone, this._document, ve);
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)(i.LFG(S), i.LFG(i.R0b), i.LFG(b.K0));
  };
  lt.ɵprov = i.Yz7({
    token: lt,
    factory: lt.ɵfac,
    providedIn: "root"
  });
  return lt;
})();
let se = (() => {
  class lt {
    constructor(St, ve, Lt) {
      this._elementRef = St;
      this._focusTrapFactory = ve;
      this._previouslyFocusedElement = null;
      this._autoCapture = false;
      this._document = Lt;
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    get enabled() {
      return this.focusTrap.enabled;
    }
    set enabled(St) {
      this.focusTrap.enabled = q(St);
    }
    get autoCapture() {
      return this._autoCapture;
    }
    set autoCapture(St) {
      this._autoCapture = q(St);
    }
    ngOnDestroy() {
      this.focusTrap.destroy();
      if (this._previouslyFocusedElement) {
        this._previouslyFocusedElement.focus();
        this._previouslyFocusedElement = null;
      }
    }
    ngAfterContentInit() {
      this.focusTrap.attachAnchors();
      if (this.autoCapture) {
        this._captureFocus();
      }
    }
    ngDoCheck() {
      if (!this.focusTrap.hasAttached()) {
        this.focusTrap.attachAnchors();
      }
    }
    ngOnChanges(St) {
      const ve = St.autoCapture;
      if (ve && !ve.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
        this._captureFocus();
      }
    }
    _captureFocus() {
      this._previouslyFocusedElement = this._document.activeElement;
      this.focusTrap.focusInitialElementWhenReady();
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)(i.Y36(i.SBq), i.Y36(G), i.Y36(b.K0));
  };
  lt.ɵdir = i.lG2({
    type: lt,
    selectors: [["", "focusTrap", ""]],
    inputs: {
      enabled: ["cdkTrapFocus", "enabled"],
      autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
    },
    exportAs: ["focusTrap"],
    features: [i.TTD]
  });
  return lt;
})();
let W = (() => {
  class lt {
    static forRoot() {
      return {
        ngModule: lt,
        providers: [M, C, S]
      };
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)();
  };
  lt.ɵmod = i.oAB({
    type: lt
  });
  lt.ɵinj = i.cJS({
    imports: [b.ez]
  });
  return lt;
})();
import * as Pe from "82381";
import * as Le from "65987";
const he = ["*"];
export let UZ = (() => {
  class lt {
    constructor() {
      this.hide = () => {};
      this.setClass = () => {};
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)();
  };
  lt.ɵprov = i.Yz7({
    token: lt,
    factory: lt.ɵfac,
    providedIn: "platform"
  });
  return lt;
})();
let Re = (() => {
  class lt {}
  lt.ɵfac = function (St) {
    return new (St || lt)();
  };
  lt.ɵprov = i.Yz7({
    token: lt,
    factory: lt.ɵfac,
    providedIn: "platform"
  });
  return lt;
})();
const Ge = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: false,
  ignoreBackdropClick: false,
  class: "",
  animated: true,
  initialState: {},
  closeInterceptor: undefined
};
const Ue = new i.OlP("override-default-config");
let Ee = (() => {
  class lt {
    constructor(St, ve, Lt) {
      this._element = ve;
      this._renderer = Lt;
      this.isShown = false;
      this.isAnimated = false;
      this.isModalHiding = false;
      this.clickStartedInContent = false;
      this.config = Object.assign({}, St);
    }
    ngOnInit() {
      if (this.isAnimated) {
        this._renderer.addClass(this._element.nativeElement, "fade");
      }
      this._renderer.setStyle(this._element.nativeElement, "display", "block");
      setTimeout(() => {
        this.isShown = true;
        this._renderer.addClass(this._element.nativeElement, (0, t.XA)() ? "in" : "show");
      }, this.isAnimated ? 150 : 0);
      if (document && document.body) {
        if (this.bsModalService && this.bsModalService.getModalsCount() === 1) {
          this.bsModalService.checkScrollbar();
          this.bsModalService.setScrollbar();
        }
        this._renderer.addClass(document.body, "modal-open");
        this._renderer.setStyle(document.body, "overflow-y", "hidden");
      }
      if (this._element.nativeElement) {
        this._element.nativeElement.focus();
      }
    }
    onClickStarted(St) {
      this.clickStartedInContent = St.target !== this._element.nativeElement;
    }
    onClickStop(St) {
      var ve;
      if (this.config.ignoreBackdropClick || this.config.backdrop === "static" || St.target !== this._element.nativeElement || this.clickStartedInContent) {
        this.clickStartedInContent = false;
      } else {
        if ((ve = this.bsModalService) !== null && ve !== undefined) {
          ve.setDismissReason("backdrop-click");
        }
        this.hide();
      }
    }
    onPopState() {
      var St;
      if ((St = this.bsModalService) !== null && St !== undefined) {
        St.setDismissReason("browser-back-navigation-clicked");
      }
      this.hide();
    }
    onEsc(St) {
      var ve;
      var Lt;
      if (this.isShown && ((St.keyCode === 27 || St.key === "Escape") && St.preventDefault(), this.config.keyboard && this.level === ((ve = this.bsModalService) === null || ve === undefined ? undefined : ve.getModalsCount()))) {
        if ((Lt = this.bsModalService) !== null && Lt !== undefined) {
          Lt.setDismissReason("esc");
        }
        this.hide();
      }
    }
    ngOnDestroy() {
      if (this.isShown) {
        this._hide();
      }
    }
    hide() {
      if (!this.isModalHiding && this.isShown) {
        if (this.config.closeInterceptor) {
          this.config.closeInterceptor().then(() => this._hide(), () => {});
          return;
        }
        this._hide();
      }
    }
    _hide() {
      this.isModalHiding = true;
      this._renderer.removeClass(this._element.nativeElement, (0, t.XA)() ? "in" : "show");
      setTimeout(() => {
        var St;
        var ve;
        this.isShown = false;
        if (document && document.body && ((St = this.bsModalService) === null || St === undefined ? undefined : St.getModalsCount()) === 1) {
          this._renderer.removeClass(document.body, "modal-open");
          this._renderer.setStyle(document.body, "overflow-y", "");
        }
        if ((ve = this.bsModalService) !== null && ve !== undefined) {
          ve.hide(this.config.id);
        }
        this.isModalHiding = false;
      }, this.isAnimated ? 300 : 0);
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)(i.Y36(Re), i.Y36(i.SBq), i.Y36(i.Qsj));
  };
  lt.ɵcmp = i.Xpm({
    type: lt,
    selectors: [["modal-container"]],
    hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
    hostVars: 3,
    hostBindings: function (St, ve) {
      if (St & 1) {
        i.NdJ("mousedown", function (ft) {
          return ve.onClickStarted(ft);
        })("click", function (ft) {
          return ve.onClickStop(ft);
        })("popstate", function () {
          return ve.onPopState();
        }, false, i.Jf7)("keydown.esc", function (ft) {
          return ve.onEsc(ft);
        }, false, i.Jf7);
      }
      if (St & 2) {
        i.uIk("aria-modal", true)("aria-labelledby", ve.config.ariaLabelledBy)("aria-describedby", ve.config.ariaDescribedby);
      }
    },
    ngContentSelectors: he,
    decls: 3,
    vars: 2,
    consts: [["role", "document", "focusTrap", ""], [1, "modal-content"]],
    template: function (St, ve) {
      if (St & 1) {
        i.F$t();
        i.TgZ(0, "div", 0)(1, "div", 1);
        i.Hsn(2);
        i.qZA()();
      }
      if (St & 2) {
        i.Tol("modal-dialog" + (ve.config.class ? " " + ve.config.class : ""));
      }
    },
    dependencies: [se],
    encapsulation: 2
  });
  return lt;
})();
let ke = (() => {
  class lt {
    constructor(St, ve) {
      this._isAnimated = false;
      this._isShown = false;
      this.element = St;
      this.renderer = ve;
    }
    get isAnimated() {
      return this._isAnimated;
    }
    set isAnimated(St) {
      this._isAnimated = St;
    }
    get isShown() {
      return this._isShown;
    }
    set isShown(St) {
      this._isShown = St;
      if (St) {
        this.renderer.addClass(this.element.nativeElement, "in");
      } else {
        this.renderer.removeClass(this.element.nativeElement, "in");
      }
      if (!(0, t.XA)()) {
        if (St) {
          this.renderer.addClass(this.element.nativeElement, "show");
        } else {
          this.renderer.removeClass(this.element.nativeElement, "show");
        }
      }
    }
    ngOnInit() {
      if (this.isAnimated) {
        this.renderer.addClass(this.element.nativeElement, "fade");
        t.cQ.reflow(this.element.nativeElement);
      }
      this.isShown = true;
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)(i.Y36(i.SBq), i.Y36(i.Qsj));
  };
  lt.ɵcmp = i.Xpm({
    type: lt,
    selectors: [["bs-modal-backdrop"]],
    hostAttrs: [1, "modal-backdrop"],
    decls: 0,
    vars: 0,
    template: function (St, ve) {},
    encapsulation: 2
  });
  return lt;
})();
let It = 1;
export let tT = (() => {
  class lt {
    constructor(St, ve, Lt) {
      this.clf = ve;
      this.modalDefaultOption = Lt;
      this.onShow = new i.vpe();
      this.onShown = new i.vpe();
      this.onHide = new i.vpe();
      this.onHidden = new i.vpe();
      this.isBodyOverflowing = false;
      this.originalBodyPadding = 0;
      this.scrollbarWidth = 0;
      this.modalsCount = 0;
      this.loaders = [];
      this._backdropLoader = this.clf.createLoader();
      this._renderer = St.createRenderer(null, null);
      this.config = Lt ? Object.assign({}, Ge, Lt) : Ge;
    }
    show(St, ve) {
      this.modalsCount++;
      this._createLoaders();
      const Lt = ve?.id || It++;
      this.config = this.modalDefaultOption ? Object.assign({}, Ge, this.modalDefaultOption, ve) : Object.assign({}, Ge, ve);
      this.config.id = Lt;
      this._showBackdrop();
      this.lastDismissReason = undefined;
      return this._showModal(St);
    }
    hide(St) {
      if (this.modalsCount === 1 || St == null) {
        this._hideBackdrop();
        this.resetScrollbar();
      }
      this.modalsCount = this.modalsCount >= 1 && St != null ? this.modalsCount - 1 : 0;
      setTimeout(() => {
        this._hideModal(St);
        this.removeLoaders(St);
      }, this.config.animated ? 150 : 0);
    }
    _showBackdrop() {
      const St = this.config.backdrop === true || this.config.backdrop === "static";
      const ve = !this.backdropRef || !this.backdropRef.instance.isShown;
      if (this.modalsCount === 1) {
        this.removeBackdrop();
        if (St && ve) {
          this._backdropLoader.attach(ke).to("body").show({
            isAnimated: this.config.animated
          });
          this.backdropRef = this._backdropLoader._componentRef;
        }
      }
    }
    _hideBackdrop() {
      if (this.backdropRef) {
        this.backdropRef.instance.isShown = false;
        setTimeout(() => this.removeBackdrop(), this.config.animated ? 150 : 0);
      }
    }
    _showModal(St) {
      const ve = this.loaders[this.loaders.length - 1];
      if (this.config && this.config.providers) {
        for (const Me of this.config.providers) {
          ve.provide(Me);
        }
      }
      const Lt = new UZ();
      const ft = ve.provide({
        provide: Re,
        useValue: this.config
      }).provide({
        provide: UZ,
        useValue: Lt
      }).attach(Ee).to("body");
      Lt.hide = () => {
        var Me;
        if ((Me = ft.instance) === null || Me === undefined) {
          return undefined;
        } else {
          return Me.hide();
        }
      };
      Lt.setClass = Me => {
        if (ft.instance) {
          ft.instance.config.class = Me;
        }
      };
      Lt.onHidden = new i.vpe();
      Lt.onHide = new i.vpe();
      this.copyEvent(ve.onBeforeHide, Lt.onHide);
      this.copyEvent(ve.onHidden, Lt.onHidden);
      ft.show({
        content: St,
        isAnimated: this.config.animated,
        initialState: this.config.initialState,
        bsModalService: this,
        id: this.config.id
      });
      if (ft.instance) {
        ft.instance.level = this.getModalsCount();
        Lt.content = ve.getInnerComponent();
        Lt.id = ft.instance.config?.id;
      }
      return Lt;
    }
    _hideModal(St) {
      if (St != null) {
        const ve = this.loaders.findIndex(ft => {
          var qe;
          return ((qe = ft.instance) === null || qe === undefined ? undefined : qe.config.id) === St;
        });
        const Lt = this.loaders[ve];
        if (Lt) {
          Lt.hide(St);
        }
      } else {
        this.loaders.forEach(ve => {
          if (ve.instance) {
            ve.hide(ve.instance.config.id);
          }
        });
      }
    }
    getModalsCount() {
      return this.modalsCount;
    }
    setDismissReason(St) {
      this.lastDismissReason = St;
    }
    removeBackdrop() {
      this._renderer.removeClass(document.body, "modal-open");
      this._renderer.setStyle(document.body, "overflow-y", "");
      this._backdropLoader.hide();
      this.backdropRef = undefined;
    }
    checkScrollbar() {
      this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this.scrollbarWidth = this.getScrollbarWidth();
    }
    setScrollbar() {
      if (!!document) {
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right") || "0", 10);
        if (this.isBodyOverflowing) {
          document.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`;
        }
      }
    }
    resetScrollbar() {
      document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    getScrollbarWidth() {
      const St = this._renderer.createElement("div");
      this._renderer.addClass(St, "modal-scrollbar-measure");
      this._renderer.appendChild(document.body, St);
      const ve = St.offsetWidth - St.clientWidth;
      this._renderer.removeChild(document.body, St);
      return ve;
    }
    _createLoaders() {
      const St = this.clf.createLoader();
      this.copyEvent(St.onBeforeShow, this.onShow);
      this.copyEvent(St.onShown, this.onShown);
      this.copyEvent(St.onBeforeHide, this.onHide);
      this.copyEvent(St.onHidden, this.onHidden);
      this.loaders.push(St);
    }
    removeLoaders(St) {
      if (St != null) {
        const ve = this.loaders.findIndex(Lt => {
          var ft;
          return ((ft = Lt.instance) === null || ft === undefined ? undefined : ft.config.id) === St;
        });
        if (ve >= 0) {
          this.loaders.splice(ve, 1);
          this.loaders.forEach((Lt, ft) => {
            if (Lt.instance) {
              Lt.instance.level = ft + 1;
            }
          });
        }
      } else {
        this.loaders.splice(0, this.loaders.length);
      }
    }
    copyEvent(St, ve) {
      St.subscribe(Lt => {
        ve.emit(this.lastDismissReason || Lt);
      });
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)(i.LFG(i.FYo), i.LFG(Pe.oj), i.LFG(Ue, 8));
  };
  lt.ɵprov = i.Yz7({
    token: lt,
    factory: lt.ɵfac,
    providedIn: "platform"
  });
  return lt;
})();
W.forRoot();
export let zk = (() => {
  class lt {
    static forRoot() {
      return {
        ngModule: lt,
        providers: [tT, Pe.oj, Le.sA]
      };
    }
    static forChild() {
      return {
        ngModule: lt,
        providers: [tT, Pe.oj, Le.sA]
      };
    }
  }
  lt.ɵfac = function (St) {
    return new (St || lt)();
  };
  lt.ɵmod = i.oAB({
    type: lt
  });
  lt.ɵinj = i.cJS({
    imports: [W]
  });
  return lt;
})();