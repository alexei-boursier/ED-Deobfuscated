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
import * as i from "94650";
function M(Nt) {
  if (Array.isArray(Nt)) {
    return Nt;
  } else {
    return [Nt];
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function v(Nt) {
  if (Nt == null) {
    return "";
  } else if (typeof Nt == "string") {
    return Nt;
  } else {
    return `${Nt}px`;
  }
}
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
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
import * as S from "77579";
require("66406");
require("53101");
import * as U from "23601";
import * as B from "39300";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
import * as F from "36895";
let Z;
try {
  Z = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  Z = false;
}
let Le;
let X = (() => {
  class Nt {
    constructor(We) {
      this._platformId = We;
      this.isBrowser = this._platformId ? (0, F.NF)(this._platformId) : typeof document == "object" && !!document;
      this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      this.BLINK = this.isBrowser && (!!window.chrome || !!Z) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
      this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
      this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(i.Lbi));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function he() {
  if (Le == null) {
    if (typeof document != "object" || !document || typeof Element != "function" || !Element) {
      Le = false;
      return Le;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      Le = true;
    } else {
      const Nt = Element.prototype.scrollTo;
      Le = !!Nt && !/\{\s*\[native code\]\s*\}/.test(Nt.toString());
    }
  }
  return Le;
}
function ot(Nt) {
  if (Nt.composedPath) {
    return Nt.composedPath()[0];
  } else {
    return Nt.target;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function st() {
  return typeof __karma__ !== "undefined" && !!__karma__ || typeof jasmine !== "undefined" && !!jasmine || typeof jest !== "undefined" && !!jest || typeof Mocha !== "undefined" && !!Mocha;
}
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
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const rt = new i.OlP("cdk-dir-doc", {
  providedIn: "root",
  factory: function Oe() {
    return (0, i.f3M)(F.K0);
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
});
const Ee = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function ke(Nt) {
  var Ke;
  const We = Nt?.toLowerCase() || "";
  if (We === "auto" && typeof navigator !== "undefined" && (Ke = navigator) !== null && Ke !== undefined && Ke.language) {
    if (Ee.test(navigator.language)) {
      return "rtl";
    } else {
      return "ltr";
    }
  } else if (We === "rtl") {
    return "rtl";
  } else {
    return "ltr";
  }
}
let Be = (() => {
  class Nt {
    constructor(We) {
      this.value = "ltr";
      this.change = new i.vpe();
      if (We) {
        const On = We.documentElement ? We.documentElement.dir : null;
        this.value = ke((We.body ? We.body.dir : null) || On || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(rt, 8));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let De = (() => {
  class Nt {
    constructor() {
      this._dir = "ltr";
      this._isInitialized = false;
      this.change = new i.vpe();
    }
    get dir() {
      return this._dir;
    }
    set dir(We) {
      const jt = this._dir;
      this._dir = ke(We);
      this._rawDir = We;
      if (jt !== this._dir && this._isInitialized) {
        this.change.emit(this._dir);
      }
    }
    get value() {
      return this.dir;
    }
    ngAfterContentInit() {
      this._isInitialized = true;
    }
    ngOnDestroy() {
      this.change.complete();
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵdir = i.lG2({
    type: Nt,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function (We, jt) {
      if (We & 2) {
        i.uIk("dir", jt._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [i._Bn([{
      provide: Be,
      useExisting: Nt
    }])]
  });
  return Nt;
})();
let Qe = (() => {
  class Nt {}
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵmod = i.oAB({
    type: Nt
  });
  Nt.ɵinj = i.cJS({});
  return Nt;
})();
let ve = (() => {
  class Nt {
    constructor(We, jt, On) {
      this._ngZone = We;
      this._platform = jt;
      this._scrolled = new S.x();
      this._globalSubscription = null;
      this._scrolledCount = 0;
      this.scrollContainers = new Map();
      this._document = On;
    }
    register(We) {
      if (!this.scrollContainers.has(We)) {
        this.scrollContainers.set(We, We.elementScrolled().subscribe(() => this._scrolled.next(We)));
      }
    }
    deregister(We) {
      const jt = this.scrollContainers.get(We);
      if (jt) {
        jt.unsubscribe();
        this.scrollContainers.delete(We);
      }
    }
    scrolled(We = 20) {
      if (this._platform.isBrowser) {
        return new I.y(jt => {
          if (!this._globalSubscription) {
            this._addGlobalListener();
          }
          const On = We > 0 ? this._scrolled.pipe((0, U.e)(We)).subscribe(jt) : this._scrolled.subscribe(jt);
          this._scrolledCount++;
          return () => {
            On.unsubscribe();
            this._scrolledCount--;
            if (!this._scrolledCount) {
              this._removeGlobalListener();
            }
          };
        });
      } else {
        return (0, L.of)();
      }
    }
    ngOnDestroy() {
      this._removeGlobalListener();
      this.scrollContainers.forEach((We, jt) => this.deregister(jt));
      this._scrolled.complete();
    }
    ancestorScrolled(We, jt) {
      const On = this.getAncestorScrollContainers(We);
      return this.scrolled(jt).pipe((0, B.h)(ri => !ri || On.indexOf(ri) > -1));
    }
    getAncestorScrollContainers(We) {
      const jt = [];
      this.scrollContainers.forEach((On, ri) => {
        if (this._scrollableContainsElement(ri, We)) {
          jt.push(ri);
        }
      });
      return jt;
    }
    _getWindow() {
      return this._document.defaultView || window;
    }
    _scrollableContainsElement(We, jt) {
      let On = function C(Nt) {
        if (Nt instanceof i.SBq) {
          return Nt.nativeElement;
        } else {
          return Nt;
        }
      }
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */(jt);
      let ri = We.getElementRef().nativeElement;
      do {
        if (On == ri) {
          return true;
        }
      } while (On = On.parentElement);
      return false;
    }
    _addGlobalListener() {
      this._globalSubscription = this._ngZone.runOutsideAngular(() => {
        const We = this._getWindow();
        return (0, E.R)(We.document, "scroll").subscribe(() => this._scrolled.next());
      });
    }
    _removeGlobalListener() {
      if (this._globalSubscription) {
        this._globalSubscription.unsubscribe();
        this._globalSubscription = null;
      }
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(i.R0b), i.LFG(X), i.LFG(F.K0, 8));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let qe = (() => {
  class Nt {
    constructor(We, jt, On) {
      this._platform = We;
      this._change = new S.x();
      this._changeListener = ri => {
        this._change.next(ri);
      };
      this._document = On;
      jt.runOutsideAngular(() => {
        if (We.isBrowser) {
          const ri = this._getWindow();
          ri.addEventListener("resize", this._changeListener);
          ri.addEventListener("orientationchange", this._changeListener);
        }
        this.change().subscribe(() => this._viewportSize = null);
      });
    }
    ngOnDestroy() {
      if (this._platform.isBrowser) {
        const We = this._getWindow();
        We.removeEventListener("resize", this._changeListener);
        We.removeEventListener("orientationchange", this._changeListener);
      }
      this._change.complete();
    }
    getViewportSize() {
      if (!this._viewportSize) {
        this._updateViewportSize();
      }
      const We = {
        width: this._viewportSize.width,
        height: this._viewportSize.height
      };
      if (!this._platform.isBrowser) {
        this._viewportSize = null;
      }
      return We;
    }
    getViewportRect() {
      const We = this.getViewportScrollPosition();
      const {
        width: jt,
        height: On
      } = this.getViewportSize();
      return {
        top: We.top,
        left: We.left,
        bottom: We.top + On,
        right: We.left + jt,
        height: On,
        width: jt
      };
    }
    getViewportScrollPosition() {
      if (!this._platform.isBrowser) {
        return {
          top: 0,
          left: 0
        };
      }
      const We = this._document;
      const jt = this._getWindow();
      const On = We.documentElement;
      const ri = On.getBoundingClientRect();
      return {
        top: -ri.top || We.body.scrollTop || jt.scrollY || On.scrollTop || 0,
        left: -ri.left || We.body.scrollLeft || jt.scrollX || On.scrollLeft || 0
      };
    }
    change(We = 20) {
      if (We > 0) {
        return this._change.pipe((0, U.e)(We));
      } else {
        return this._change;
      }
    }
    _getWindow() {
      return this._document.defaultView || window;
    }
    _updateViewportSize() {
      const We = this._getWindow();
      this._viewportSize = this._platform.isBrowser ? {
        width: We.innerWidth,
        height: We.innerHeight
      } : {
        width: 0,
        height: 0
      };
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(X), i.LFG(i.R0b), i.LFG(F.K0, 8));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let Wt = (() => {
  class Nt {}
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵmod = i.oAB({
    type: Nt
  });
  Nt.ɵinj = i.cJS({});
  return Nt;
})();
let hn = (() => {
  class Nt {}
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵmod = i.oAB({
    type: Nt
  });
  Nt.ɵinj = i.cJS({
    imports: [Qe, Wt, Qe, Wt]
  });
  return Nt;
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
class Zi {
  attach(Ke) {
    this._attachedHost = Ke;
    return Ke.attach(this);
  }
  detach() {
    let Ke = this._attachedHost;
    if (Ke != null) {
      this._attachedHost = null;
      Ke.detach();
    }
  }
  get isAttached() {
    return this._attachedHost != null;
  }
  setAttachedHost(Ke) {
    this._attachedHost = Ke;
  }
}
class $i extends Zi {
  constructor(Ke, We, jt, On) {
    super();
    this.component = Ke;
    this.viewContainerRef = We;
    this.injector = jt;
    this.componentFactoryResolver = On;
  }
}
class Qi extends Zi {
  constructor(Ke, We, jt, On) {
    super();
    this.templateRef = Ke;
    this.viewContainerRef = We;
    this.context = jt;
    this.injector = On;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  attach(Ke, We = this.context) {
    this.context = We;
    return super.attach(Ke);
  }
  detach() {
    this.context = undefined;
    return super.detach();
  }
}
class br extends Zi {
  constructor(Ke) {
    super();
    this.element = Ke instanceof i.SBq ? Ke.nativeElement : Ke;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ur extends class Ar {
  constructor() {
    this._isDisposed = false;
    this.attachDomPortal = null;
  }
  hasAttached() {
    return !!this._attachedPortal;
  }
  attach(Ke) {
    if (Ke instanceof $i) {
      this._attachedPortal = Ke;
      return this.attachComponentPortal(Ke);
    } else if (Ke instanceof Qi) {
      this._attachedPortal = Ke;
      return this.attachTemplatePortal(Ke);
    } else if (this.attachDomPortal && Ke instanceof br) {
      this._attachedPortal = Ke;
      return this.attachDomPortal(Ke);
    } else {
      return undefined;
    }
  }
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  setDisposeFn(Ke) {
    this._disposeFn = Ke;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
} {
  constructor(Ke, We, jt, On, ri) {
    super();
    this.outletElement = Ke;
    this._componentFactoryResolver = We;
    this._appRef = jt;
    this._defaultInjector = On;
    this.attachDomPortal = Bi => {
      const wr = Bi.element;
      const Kr = this._document.createComment("dom-portal");
      wr.parentNode.insertBefore(Kr, wr);
      this.outletElement.appendChild(wr);
      this._attachedPortal = Bi;
      super.setDisposeFn(() => {
        if (Kr.parentNode) {
          Kr.parentNode.replaceChild(wr, Kr);
        }
      });
    };
    this._document = ri;
  }
  attachComponentPortal(Ke) {
    const jt = (Ke.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(Ke.component);
    let On;
    if (Ke.viewContainerRef) {
      On = Ke.viewContainerRef.createComponent(jt, Ke.viewContainerRef.length, Ke.injector || Ke.viewContainerRef.injector);
      this.setDisposeFn(() => On.destroy());
    } else {
      On = jt.create(Ke.injector || this._defaultInjector || i.zs3.NULL);
      this._appRef.attachView(On.hostView);
      this.setDisposeFn(() => {
        if (this._appRef.viewCount > 0) {
          this._appRef.detachView(On.hostView);
        }
        On.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(On));
    this._attachedPortal = Ke;
    return On;
  }
  attachTemplatePortal(Ke) {
    let We = Ke.viewContainerRef;
    let jt = We.createEmbeddedView(Ke.templateRef, Ke.context, {
      injector: Ke.injector
    });
    jt.rootNodes.forEach(On => this.outletElement.appendChild(On));
    jt.detectChanges();
    this.setDisposeFn(() => {
      let On = We.indexOf(jt);
      if (On !== -1) {
        We.remove(On);
      }
    });
    this._attachedPortal = Ke;
    return jt;
  }
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  _getComponentRootNode(Ke) {
    return Ke.hostView.rootNodes[0];
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let sa = (() => {
  class Nt {}
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵmod = i.oAB({
    type: Nt
  });
  Nt.ɵinj = i.cJS({});
  return Nt;
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
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
import * as Tr from "50727";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oi = he();
class fi {
  constructor(Ke, We) {
    this._viewportRuler = Ke;
    this._previousHTMLStyles = {
      top: "",
      left: ""
    };
    this._isEnabled = false;
    this._document = We;
  }
  attach() {}
  enable() {
    if (this._canBeEnabled()) {
      const Ke = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      this._previousHTMLStyles.left = Ke.style.left || "";
      this._previousHTMLStyles.top = Ke.style.top || "";
      Ke.style.left = v(-this._previousScrollPosition.left);
      Ke.style.top = v(-this._previousScrollPosition.top);
      Ke.classList.add("cdk-global-scrollblock");
      this._isEnabled = true;
    }
  }
  disable() {
    if (this._isEnabled) {
      const Ke = this._document.documentElement;
      const jt = Ke.style;
      const On = this._document.body.style;
      const ri = jt.scrollBehavior || "";
      const Bi = On.scrollBehavior || "";
      this._isEnabled = false;
      jt.left = this._previousHTMLStyles.left;
      jt.top = this._previousHTMLStyles.top;
      Ke.classList.remove("cdk-global-scrollblock");
      if (oi) {
        jt.scrollBehavior = On.scrollBehavior = "auto";
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (oi) {
        jt.scrollBehavior = ri;
        On.scrollBehavior = Bi;
      }
    }
  }
  _canBeEnabled() {
    if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
      return false;
    }
    const We = this._document.body;
    const jt = this._viewportRuler.getViewportSize();
    return We.scrollHeight > jt.height || We.scrollWidth > jt.width;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pn {
  constructor(Ke, We, jt, On) {
    this._scrollDispatcher = Ke;
    this._ngZone = We;
    this._viewportRuler = jt;
    this._config = On;
    this._scrollSubscription = null;
    this._detach = () => {
      this.disable();
      if (this._overlayRef.hasAttached()) {
        this._ngZone.run(() => this._overlayRef.detach());
      }
    };
  }
  attach(Ke) {
    this._overlayRef = Ke;
  }
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const Ke = this._scrollDispatcher.scrolled(0);
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = Ke.subscribe(() => {
        const We = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(We - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = Ke.subscribe(this._detach);
    }
  }
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class An {
  enable() {}
  disable() {}
  attach() {}
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function si(Nt, Ke) {
  return Ke.some(We => Nt.bottom < We.top || Nt.top > We.bottom || Nt.right < We.left || Nt.left > We.right);
}
function Di(Nt, Ke) {
  return Ke.some(We => Nt.top < We.top || Nt.bottom > We.bottom || Nt.left < We.left || Nt.right > We.right);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dr {
  constructor(Ke, We, jt, On) {
    this._scrollDispatcher = Ke;
    this._viewportRuler = We;
    this._ngZone = jt;
    this._config = On;
    this._scrollSubscription = null;
  }
  attach(Ke) {
    this._overlayRef = Ke;
  }
  enable() {
    this._scrollSubscription ||= this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(() => {
      this._overlayRef.updatePosition();
      if (this._config && this._config.autoClose) {
        const We = this._overlayRef.overlayElement.getBoundingClientRect();
        const {
          width: jt,
          height: On
        } = this._viewportRuler.getViewportSize();
        if (si(We, [{
          width: jt,
          height: On,
          bottom: On,
          right: jt,
          top: 0,
          left: 0
        }])) {
          this.disable();
          this._ngZone.run(() => this._overlayRef.detach());
        }
      }
    });
  }
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Vr = (() => {
  class Nt {
    constructor(We, jt, On, ri) {
      this._scrollDispatcher = We;
      this._viewportRuler = jt;
      this._ngZone = On;
      this.noop = () => new An();
      this.close = Bi => new pn(this._scrollDispatcher, this._ngZone, this._viewportRuler, Bi);
      this.block = () => new fi(this._viewportRuler, this._document);
      this.reposition = Bi => new dr(this._scrollDispatcher, this._viewportRuler, this._ngZone, Bi);
      this._document = ri;
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(ve), i.LFG(qe), i.LFG(i.R0b), i.LFG(F.K0));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
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
class Or {
  constructor(Ke) {
    this.scrollStrategy = new An();
    this.panelClass = "";
    this.hasBackdrop = false;
    this.backdropClass = "cdk-overlay-dark-backdrop";
    this.disposeOnNavigation = false;
    if (Ke) {
      const We = Object.keys(Ke);
      for (const jt of We) {
        if (Ke[jt] !== undefined) {
          this[jt] = Ke[jt];
        }
      }
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
class kr {
  constructor(Ke, We) {
    this.connectionPair = Ke;
    this.scrollableViewProperties = We;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let fa = (() => {
  class Nt {
    constructor(We) {
      this._attachedOverlays = [];
      this._document = We;
    }
    ngOnDestroy() {
      this.detach();
    }
    add(We) {
      this.remove(We);
      this._attachedOverlays.push(We);
    }
    remove(We) {
      const jt = this._attachedOverlays.indexOf(We);
      if (jt > -1) {
        this._attachedOverlays.splice(jt, 1);
      }
      if (this._attachedOverlays.length === 0) {
        this.detach();
      }
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(F.K0));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let bo = (() => {
  class Nt extends fa {
    constructor(We, jt) {
      super(We);
      this._ngZone = jt;
      this._keydownListener = On => {
        const ri = this._attachedOverlays;
        for (let Bi = ri.length - 1; Bi > -1; Bi--) {
          if (ri[Bi]._keydownEvents.observers.length > 0) {
            const wr = ri[Bi]._keydownEvents;
            if (this._ngZone) {
              this._ngZone.run(() => wr.next(On));
            } else {
              wr.next(On);
            }
            break;
          }
        }
      };
    }
    add(We) {
      super.add(We);
      if (!this._isAttached) {
        if (this._ngZone) {
          this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener));
        } else {
          this._document.body.addEventListener("keydown", this._keydownListener);
        }
        this._isAttached = true;
      }
    }
    detach() {
      if (this._isAttached) {
        this._document.body.removeEventListener("keydown", this._keydownListener);
        this._isAttached = false;
      }
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(F.K0), i.LFG(i.R0b, 8));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let ks = (() => {
  class Nt extends fa {
    constructor(We, jt, On) {
      super(We);
      this._platform = jt;
      this._ngZone = On;
      this._cursorStyleIsSet = false;
      this._pointerDownListener = ri => {
        this._pointerDownEventTarget = ot(ri);
      };
      this._clickListener = ri => {
        const Bi = ot(ri);
        const wr = ri.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : Bi;
        this._pointerDownEventTarget = null;
        const Kr = this._attachedOverlays.slice();
        for (let oe = Kr.length - 1; oe > -1; oe--) {
          const we = Kr[oe];
          if (we._outsidePointerEvents.observers.length < 1 || !we.hasAttached()) {
            continue;
          }
          if (we.overlayElement.contains(Bi) || we.overlayElement.contains(wr)) {
            break;
          }
          const ce = we._outsidePointerEvents;
          if (this._ngZone) {
            this._ngZone.run(() => ce.next(ri));
          } else {
            ce.next(ri);
          }
        }
      };
    }
    add(We) {
      super.add(We);
      if (!this._isAttached) {
        const jt = this._document.body;
        if (this._ngZone) {
          this._ngZone.runOutsideAngular(() => this._addEventListeners(jt));
        } else {
          this._addEventListeners(jt);
        }
        if (this._platform.IOS && !this._cursorStyleIsSet) {
          this._cursorOriginalValue = jt.style.cursor;
          jt.style.cursor = "pointer";
          this._cursorStyleIsSet = true;
        }
        this._isAttached = true;
      }
    }
    detach() {
      if (this._isAttached) {
        const We = this._document.body;
        We.removeEventListener("pointerdown", this._pointerDownListener, true);
        We.removeEventListener("click", this._clickListener, true);
        We.removeEventListener("auxclick", this._clickListener, true);
        We.removeEventListener("contextmenu", this._clickListener, true);
        if (this._platform.IOS && this._cursorStyleIsSet) {
          We.style.cursor = this._cursorOriginalValue;
          this._cursorStyleIsSet = false;
        }
        this._isAttached = false;
      }
    }
    _addEventListeners(We) {
      We.addEventListener("pointerdown", this._pointerDownListener, true);
      We.addEventListener("click", this._clickListener, true);
      We.addEventListener("auxclick", this._clickListener, true);
      We.addEventListener("contextmenu", this._clickListener, true);
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(F.K0), i.LFG(X), i.LFG(i.R0b, 8));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let Gs = (() => {
  class Nt {
    constructor(We, jt) {
      this._platform = jt;
      this._document = We;
    }
    ngOnDestroy() {
      var We;
      if ((We = this._containerElement) !== null && We !== undefined) {
        We.remove();
      }
    }
    getContainerElement() {
      if (!this._containerElement) {
        this._createContainer();
      }
      return this._containerElement;
    }
    _createContainer() {
      const We = "cdk-overlay-container";
      if (this._platform.isBrowser || st()) {
        const On = this._document.querySelectorAll(`.${We}[platform="server"], .${We}[platform="test"]`);
        for (let ri = 0; ri < On.length; ri++) {
          On[ri].remove();
        }
      }
      const jt = this._document.createElement("div");
      jt.classList.add(We);
      if (st()) {
        jt.setAttribute("platform", "test");
      } else if (!this._platform.isBrowser) {
        jt.setAttribute("platform", "server");
      }
      this._document.body.appendChild(jt);
      this._containerElement = jt;
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(F.K0), i.LFG(X));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
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
class Zr {
  constructor(Ke, We, jt, On, ri, Bi, wr, Kr, oe, we = false) {
    this._portalOutlet = Ke;
    this._host = We;
    this._pane = jt;
    this._config = On;
    this._ngZone = ri;
    this._keyboardDispatcher = Bi;
    this._document = wr;
    this._location = Kr;
    this._outsideClickDispatcher = oe;
    this._animationsDisabled = we;
    this._backdropElement = null;
    this._backdropClick = new S.x();
    this._attachments = new S.x();
    this._detachments = new S.x();
    this._locationChanges = Tr.w0.EMPTY;
    this._backdropClickHandler = ce => this._backdropClick.next(ce);
    this._backdropTransitionendHandler = ce => {
      this._disposeBackdrop(ce.target);
    };
    this._keydownEvents = new S.x();
    this._outsidePointerEvents = new S.x();
    if (On.scrollStrategy) {
      this._scrollStrategy = On.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = On.positionStrategy;
  }
  get overlayElement() {
    return this._pane;
  }
  get backdropElement() {
    return this._backdropElement;
  }
  get hostElement() {
    return this._host;
  }
  attach(Ke) {
    if (!this._host.parentElement && this._previousHostParent) {
      this._previousHostParent.appendChild(this._host);
    }
    const We = this._portalOutlet.attach(Ke);
    if (this._positionStrategy) {
      this._positionStrategy.attach(this);
    }
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    this._ngZone.onStable.pipe((0, pr.q)(1)).subscribe(() => {
      if (this.hasAttached()) {
        this.updatePosition();
      }
    });
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    this._attachments.next();
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation) {
      this._locationChanges = this._location.subscribe(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    if (typeof We?.onDestroy == "function") {
      We.onDestroy(() => {
        if (this.hasAttached()) {
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return We;
  }
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const Ke = this._portalOutlet.detach();
    this._detachments.next();
    this._keyboardDispatcher.remove(this);
    this._detachContentWhenStable();
    this._locationChanges.unsubscribe();
    this._outsideClickDispatcher.remove(this);
    return Ke;
  }
  dispose() {
    var Ke;
    const We = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._disposeBackdrop(this._backdropElement);
    this._locationChanges.unsubscribe();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    if ((Ke = this._host) !== null && Ke !== undefined) {
      Ke.remove();
    }
    this._previousHostParent = this._pane = this._host = null;
    if (We) {
      this._detachments.next();
    }
    this._detachments.complete();
  }
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  backdropClick() {
    return this._backdropClick;
  }
  attachments() {
    return this._attachments;
  }
  detachments() {
    return this._detachments;
  }
  keydownEvents() {
    return this._keydownEvents;
  }
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  getConfig() {
    return this._config;
  }
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  updatePositionStrategy(Ke) {
    if (Ke !== this._positionStrategy) {
      if (this._positionStrategy) {
        this._positionStrategy.dispose();
      }
      this._positionStrategy = Ke;
      if (this.hasAttached()) {
        Ke.attach(this);
        this.updatePosition();
      }
    }
  }
  updateSize(Ke) {
    this._config = {
      ...this._config,
      ...Ke
    };
    this._updateElementSize();
  }
  setDirection(Ke) {
    this._config = {
      ...this._config,
      direction: Ke
    };
    this._updateElementDirection();
  }
  addPanelClass(Ke) {
    if (this._pane) {
      this._toggleClasses(this._pane, Ke, true);
    }
  }
  removePanelClass(Ke) {
    if (this._pane) {
      this._toggleClasses(this._pane, Ke, false);
    }
  }
  getDirection() {
    const Ke = this._config.direction;
    if (Ke) {
      if (typeof Ke == "string") {
        return Ke;
      } else {
        return Ke.value;
      }
    } else {
      return "ltr";
    }
  }
  updateScrollStrategy(Ke) {
    if (Ke !== this._scrollStrategy) {
      this._disposeScrollStrategy();
      this._scrollStrategy = Ke;
      if (this.hasAttached()) {
        Ke.attach(this);
        Ke.enable();
      }
    }
  }
  _updateElementDirection() {
    this._host.setAttribute("dir", this.getDirection());
  }
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const Ke = this._pane.style;
    Ke.width = v(this._config.width);
    Ke.height = v(this._config.height);
    Ke.minWidth = v(this._config.minWidth);
    Ke.minHeight = v(this._config.minHeight);
    Ke.maxWidth = v(this._config.maxWidth);
    Ke.maxHeight = v(this._config.maxHeight);
  }
  _togglePointerEvents(Ke) {
    this._pane.style.pointerEvents = Ke ? "" : "none";
  }
  _attachBackdrop() {
    const Ke = "cdk-overlay-backdrop-showing";
    this._backdropElement = this._document.createElement("div");
    this._backdropElement.classList.add("cdk-overlay-backdrop");
    if (this._animationsDisabled) {
      this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation");
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
    }
    this._host.parentElement.insertBefore(this._backdropElement, this._host);
    this._backdropElement.addEventListener("click", this._backdropClickHandler);
    if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          if (this._backdropElement) {
            this._backdropElement.classList.add(Ke);
          }
        });
      });
    } else {
      this._backdropElement.classList.add(Ke);
    }
  }
  _updateStackingOrder() {
    if (this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  detachBackdrop() {
    const Ke = this._backdropElement;
    if (Ke) {
      if (this._animationsDisabled) {
        this._disposeBackdrop(Ke);
        return;
      }
      Ke.classList.remove("cdk-overlay-backdrop-showing");
      this._ngZone.runOutsideAngular(() => {
        Ke.addEventListener("transitionend", this._backdropTransitionendHandler);
      });
      Ke.style.pointerEvents = "none";
      this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
        this._disposeBackdrop(Ke);
      }, 500));
    }
  }
  _toggleClasses(Ke, We, jt) {
    const On = M(We || []).filter(ri => !!ri);
    if (On.length) {
      if (jt) {
        Ke.classList.add(...On);
      } else {
        Ke.classList.remove(...On);
      }
    }
  }
  _detachContentWhenStable() {
    this._ngZone.runOutsideAngular(() => {
      const Ke = this._ngZone.onStable.pipe((0, Bn.R)((0, ns.T)(this._attachments, this._detachments))).subscribe(() => {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
          if (this._pane && this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
          }
          if (this._host && this._host.parentElement) {
            this._previousHostParent = this._host.parentElement;
            this._host.remove();
          }
          Ke.unsubscribe();
        }
      });
    });
  }
  _disposeScrollStrategy() {
    const Ke = this._scrollStrategy;
    if (Ke) {
      Ke.disable();
      if (Ke.detach) {
        Ke.detach();
      }
    }
  }
  _disposeBackdrop(Ke) {
    if (Ke) {
      Ke.removeEventListener("click", this._backdropClickHandler);
      Ke.removeEventListener("transitionend", this._backdropTransitionendHandler);
      Ke.remove();
      if (this._backdropElement === Ke) {
        this._backdropElement = null;
      }
    }
    if (this._backdropTimeout) {
      clearTimeout(this._backdropTimeout);
      this._backdropTimeout = undefined;
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
const ho = "cdk-overlay-connected-position-bounding-box";
const ya = /([A-Za-z%]+)$/;
class Ko {
  constructor(Ke, We, jt, On, ri) {
    this._viewportRuler = We;
    this._document = jt;
    this._platform = On;
    this._overlayContainer = ri;
    this._lastBoundingBoxSize = {
      width: 0,
      height: 0
    };
    this._isPushed = false;
    this._canPush = true;
    this._growAfterOpen = false;
    this._hasFlexibleDimensions = true;
    this._positionLocked = false;
    this._viewportMargin = 0;
    this._scrollables = [];
    this._preferredPositions = [];
    this._positionChanges = new S.x();
    this._resizeSubscription = Tr.w0.EMPTY;
    this._offsetX = 0;
    this._offsetY = 0;
    this._appliedPanelClasses = [];
    this.positionChanges = this._positionChanges;
    this.setOrigin(Ke);
  }
  get positions() {
    return this._preferredPositions;
  }
  attach(Ke) {
    this._validatePositions();
    Ke.hostElement.classList.add(ho);
    this._overlayRef = Ke;
    this._boundingBox = Ke.hostElement;
    this._pane = Ke.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = true;
      this.apply();
    });
  }
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
    const Ke = this._originRect;
    const We = this._overlayRect;
    const jt = this._viewportRect;
    const On = this._containerRect;
    const ri = [];
    let Bi;
    for (let wr of this._preferredPositions) {
      let Kr = this._getOriginPoint(Ke, On, wr);
      let oe = this._getOverlayPoint(Kr, We, wr);
      let we = this._getOverlayFit(oe, We, jt, wr);
      if (we.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(wr, Kr);
        return;
      }
      if (this._canFitWithFlexibleDimensions(we, oe, jt)) {
        ri.push({
          position: wr,
          origin: Kr,
          overlayRect: We,
          boundingBoxRect: this._calculateBoundingBoxRect(Kr, wr)
        });
      } else if (!Bi || Bi.overlayFit.visibleArea < we.visibleArea) {
        Bi = {
          overlayFit: we,
          overlayPoint: oe,
          originPoint: Kr,
          position: wr,
          overlayRect: We
        };
      }
    }
    if (ri.length) {
      let wr = null;
      let Kr = -1;
      for (const oe of ri) {
        const we = oe.boundingBoxRect.width * oe.boundingBoxRect.height * (oe.position.weight || 1);
        if (we > Kr) {
          Kr = we;
          wr = oe;
        }
      }
      this._isPushed = false;
      this._applyPosition(wr.position, wr.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = true;
      this._applyPosition(Bi.position, Bi.originPoint);
      return;
    }
    this._applyPosition(Bi.position, Bi.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  dispose() {
    if (!this._isDisposed) {
      if (this._boundingBox) {
        qi(this._boundingBox.style, {
          top: "",
          left: "",
          right: "",
          bottom: "",
          height: "",
          width: "",
          alignItems: "",
          justifyContent: ""
        });
      }
      if (this._pane) {
        this._resetOverlayElementStyles();
      }
      if (this._overlayRef) {
        this._overlayRef.hostElement.classList.remove(ho);
      }
      this.detach();
      this._positionChanges.complete();
      this._overlayRef = this._boundingBox = null;
      this._isDisposed = true;
    }
  }
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const Ke = this._lastPosition;
    if (Ke) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      const We = this._getOriginPoint(this._originRect, this._containerRect, Ke);
      this._applyPosition(Ke, We);
    } else {
      this.apply();
    }
  }
  withScrollableContainers(Ke) {
    this._scrollables = Ke;
    return this;
  }
  withPositions(Ke) {
    this._preferredPositions = Ke;
    if (Ke.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  withViewportMargin(Ke) {
    this._viewportMargin = Ke;
    return this;
  }
  withFlexibleDimensions(Ke = true) {
    this._hasFlexibleDimensions = Ke;
    return this;
  }
  withGrowAfterOpen(Ke = true) {
    this._growAfterOpen = Ke;
    return this;
  }
  withPush(Ke = true) {
    this._canPush = Ke;
    return this;
  }
  withLockedPosition(Ke = true) {
    this._positionLocked = Ke;
    return this;
  }
  setOrigin(Ke) {
    this._origin = Ke;
    return this;
  }
  withDefaultOffsetX(Ke) {
    this._offsetX = Ke;
    return this;
  }
  withDefaultOffsetY(Ke) {
    this._offsetY = Ke;
    return this;
  }
  withTransformOriginOn(Ke) {
    this._transformOriginSelector = Ke;
    return this;
  }
  _getOriginPoint(Ke, We, jt) {
    let On;
    let ri;
    if (jt.originX == "center") {
      On = Ke.left + Ke.width / 2;
    } else {
      const Bi = this._isRtl() ? Ke.right : Ke.left;
      const wr = this._isRtl() ? Ke.left : Ke.right;
      On = jt.originX == "start" ? Bi : wr;
    }
    if (We.left < 0) {
      On -= We.left;
    }
    ri = jt.originY == "center" ? Ke.top + Ke.height / 2 : jt.originY == "top" ? Ke.top : Ke.bottom;
    if (We.top < 0) {
      ri -= We.top;
    }
    return {
      x: On,
      y: ri
    };
  }
  _getOverlayPoint(Ke, We, jt) {
    let On;
    let ri;
    On = jt.overlayX == "center" ? -We.width / 2 : jt.overlayX === "start" ? this._isRtl() ? -We.width : 0 : this._isRtl() ? 0 : -We.width;
    ri = jt.overlayY == "center" ? -We.height / 2 : jt.overlayY == "top" ? 0 : -We.height;
    return {
      x: Ke.x + On,
      y: Ke.y + ri
    };
  }
  _getOverlayFit(Ke, We, jt, On) {
    const ri = ea(We);
    let {
      x: Bi,
      y: wr
    } = Ke;
    let Kr = this._getOffset(On, "x");
    let oe = this._getOffset(On, "y");
    if (Kr) {
      Bi += Kr;
    }
    if (oe) {
      wr += oe;
    }
    let nt = 0 - wr;
    let sn = wr + ri.height - jt.height;
    let Pn = this._subtractOverflows(ri.width, 0 - Bi, Bi + ri.width - jt.width);
    let Ei = this._subtractOverflows(ri.height, nt, sn);
    let Hi = Pn * Ei;
    return {
      visibleArea: Hi,
      isCompletelyWithinViewport: ri.width * ri.height === Hi,
      fitsInViewportVertically: Ei === ri.height,
      fitsInViewportHorizontally: Pn == ri.width
    };
  }
  _canFitWithFlexibleDimensions(Ke, We, jt) {
    if (this._hasFlexibleDimensions) {
      const On = jt.bottom - We.y;
      const ri = jt.right - We.x;
      const Bi = qo(this._overlayRef.getConfig().minHeight);
      const wr = qo(this._overlayRef.getConfig().minWidth);
      const oe = Ke.fitsInViewportHorizontally || wr != null && wr <= ri;
      return (Ke.fitsInViewportVertically || Bi != null && Bi <= On) && oe;
    }
    return false;
  }
  _pushOverlayOnScreen(Ke, We, jt) {
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: Ke.x + this._previousPushAmount.x,
        y: Ke.y + this._previousPushAmount.y
      };
    }
    const On = ea(We);
    const ri = this._viewportRect;
    const Bi = Math.max(Ke.x + On.width - ri.width, 0);
    const wr = Math.max(Ke.y + On.height - ri.height, 0);
    const Kr = Math.max(ri.top - jt.top - Ke.y, 0);
    const oe = Math.max(ri.left - jt.left - Ke.x, 0);
    let we = 0;
    let ce = 0;
    we = On.width <= ri.width ? oe || -Bi : Ke.x < this._viewportMargin ? ri.left - jt.left - Ke.x : 0;
    ce = On.height <= ri.height ? Kr || -wr : Ke.y < this._viewportMargin ? ri.top - jt.top - Ke.y : 0;
    this._previousPushAmount = {
      x: we,
      y: ce
    };
    return {
      x: Ke.x + we,
      y: Ke.y + ce
    };
  }
  _applyPosition(Ke, We) {
    this._setTransformOrigin(Ke);
    this._setOverlayElementStyles(We, Ke);
    this._setBoundingBoxStyles(We, Ke);
    if (Ke.panelClass) {
      this._addPanelClasses(Ke.panelClass);
    }
    this._lastPosition = Ke;
    if (this._positionChanges.observers.length) {
      const jt = this._getScrollVisibility();
      const On = new kr(Ke, jt);
      this._positionChanges.next(On);
    }
    this._isInitialRender = false;
  }
  _setTransformOrigin(Ke) {
    if (!this._transformOriginSelector) {
      return;
    }
    const We = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let jt;
    let On = Ke.overlayY;
    jt = Ke.overlayX === "center" ? "center" : this._isRtl() ? Ke.overlayX === "start" ? "right" : "left" : Ke.overlayX === "start" ? "left" : "right";
    for (let ri = 0; ri < We.length; ri++) {
      We[ri].style.transformOrigin = `${jt} ${On}`;
    }
  }
  _calculateBoundingBoxRect(Ke, We) {
    const jt = this._viewportRect;
    const On = this._isRtl();
    let ri;
    let Bi;
    let wr;
    let we;
    let ce;
    let nt;
    if (We.overlayY === "top") {
      Bi = Ke.y;
      ri = jt.height - Bi + this._viewportMargin;
    } else if (We.overlayY === "bottom") {
      wr = jt.height - Ke.y + this._viewportMargin * 2;
      ri = jt.height - wr + this._viewportMargin;
    } else {
      const sn = Math.min(jt.bottom - Ke.y + jt.top, Ke.y);
      const Pn = this._lastBoundingBoxSize.height;
      ri = sn * 2;
      Bi = Ke.y - sn;
      if (ri > Pn && !this._isInitialRender && !this._growAfterOpen) {
        Bi = Ke.y - Pn / 2;
      }
    }
    if (We.overlayX === "end" && !On || We.overlayX === "start" && On) {
      nt = jt.width - Ke.x + this._viewportMargin;
      we = Ke.x - this._viewportMargin;
    } else if (We.overlayX === "start" && !On || We.overlayX === "end" && On) {
      ce = Ke.x;
      we = jt.right - Ke.x;
    } else {
      const sn = Math.min(jt.right - Ke.x + jt.left, Ke.x);
      const Pn = this._lastBoundingBoxSize.width;
      we = sn * 2;
      ce = Ke.x - sn;
      if (we > Pn && !this._isInitialRender && !this._growAfterOpen) {
        ce = Ke.x - Pn / 2;
      }
    }
    return {
      top: Bi,
      left: ce,
      bottom: wr,
      right: nt,
      width: we,
      height: ri
    };
  }
  _setBoundingBoxStyles(Ke, We) {
    const jt = this._calculateBoundingBoxRect(Ke, We);
    if (!this._isInitialRender && !this._growAfterOpen) {
      jt.height = Math.min(jt.height, this._lastBoundingBoxSize.height);
      jt.width = Math.min(jt.width, this._lastBoundingBoxSize.width);
    }
    const On = {};
    if (this._hasExactPosition()) {
      On.top = On.left = "0";
      On.bottom = On.right = On.maxHeight = On.maxWidth = "";
      On.width = On.height = "100%";
    } else {
      const ri = this._overlayRef.getConfig().maxHeight;
      const Bi = this._overlayRef.getConfig().maxWidth;
      On.height = v(jt.height);
      On.top = v(jt.top);
      On.bottom = v(jt.bottom);
      On.width = v(jt.width);
      On.left = v(jt.left);
      On.right = v(jt.right);
      On.alignItems = We.overlayX === "center" ? "center" : We.overlayX === "end" ? "flex-end" : "flex-start";
      On.justifyContent = We.overlayY === "center" ? "center" : We.overlayY === "bottom" ? "flex-end" : "flex-start";
      if (ri) {
        On.maxHeight = v(ri);
      }
      if (Bi) {
        On.maxWidth = v(Bi);
      }
    }
    this._lastBoundingBoxSize = jt;
    qi(this._boundingBox.style, On);
  }
  _resetBoundingBoxStyles() {
    qi(this._boundingBox.style, {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    });
  }
  _resetOverlayElementStyles() {
    qi(this._pane.style, {
      top: "",
      left: "",
      bottom: "",
      right: "",
      position: "",
      transform: ""
    });
  }
  _setOverlayElementStyles(Ke, We) {
    const jt = {};
    const On = this._hasExactPosition();
    const ri = this._hasFlexibleDimensions;
    const Bi = this._overlayRef.getConfig();
    if (On) {
      const we = this._viewportRuler.getViewportScrollPosition();
      qi(jt, this._getExactOverlayY(We, Ke, we));
      qi(jt, this._getExactOverlayX(We, Ke, we));
    } else {
      jt.position = "static";
    }
    let wr = "";
    let Kr = this._getOffset(We, "x");
    let oe = this._getOffset(We, "y");
    if (Kr) {
      wr += `translateX(${Kr}px) `;
    }
    if (oe) {
      wr += `translateY(${oe}px)`;
    }
    jt.transform = wr.trim();
    if (Bi.maxHeight) {
      if (On) {
        jt.maxHeight = v(Bi.maxHeight);
      } else if (ri) {
        jt.maxHeight = "";
      }
    }
    if (Bi.maxWidth) {
      if (On) {
        jt.maxWidth = v(Bi.maxWidth);
      } else if (ri) {
        jt.maxWidth = "";
      }
    }
    qi(this._pane.style, jt);
  }
  _getExactOverlayY(Ke, We, jt) {
    let On = {
      top: "",
      bottom: ""
    };
    let ri = this._getOverlayPoint(We, this._overlayRect, Ke);
    if (this._isPushed) {
      ri = this._pushOverlayOnScreen(ri, this._overlayRect, jt);
    }
    if (Ke.overlayY === "bottom") {
      On.bottom = this._document.documentElement.clientHeight - (ri.y + this._overlayRect.height) + "px";
    } else {
      On.top = v(ri.y);
    }
    return On;
  }
  _getExactOverlayX(Ke, We, jt) {
    let Bi;
    let On = {
      left: "",
      right: ""
    };
    let ri = this._getOverlayPoint(We, this._overlayRect, Ke);
    if (this._isPushed) {
      ri = this._pushOverlayOnScreen(ri, this._overlayRect, jt);
    }
    Bi = this._isRtl() ? Ke.overlayX === "end" ? "left" : "right" : Ke.overlayX === "end" ? "right" : "left";
    if (Bi === "right") {
      On.right = this._document.documentElement.clientWidth - (ri.x + this._overlayRect.width) + "px";
    } else {
      On.left = v(ri.x);
    }
    return On;
  }
  _getScrollVisibility() {
    const Ke = this._getOriginRect();
    const We = this._pane.getBoundingClientRect();
    const jt = this._scrollables.map(On => On.getElementRef().nativeElement.getBoundingClientRect());
    return {
      isOriginClipped: Di(Ke, jt),
      isOriginOutsideView: si(Ke, jt),
      isOverlayClipped: Di(We, jt),
      isOverlayOutsideView: si(We, jt)
    };
  }
  _subtractOverflows(Ke, ...We) {
    return We.reduce((jt, On) => jt - Math.max(On, 0), Ke);
  }
  _getNarrowedViewportRect() {
    const Ke = this._document.documentElement.clientWidth;
    const We = this._document.documentElement.clientHeight;
    const jt = this._viewportRuler.getViewportScrollPosition();
    return {
      top: jt.top + this._viewportMargin,
      left: jt.left + this._viewportMargin,
      right: jt.left + Ke - this._viewportMargin,
      bottom: jt.top + We - this._viewportMargin,
      width: Ke - this._viewportMargin * 2,
      height: We - this._viewportMargin * 2
    };
  }
  _isRtl() {
    return this._overlayRef.getDirection() === "rtl";
  }
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  _getOffset(Ke, We) {
    if (We === "x") {
      return Ke.offsetX ?? this._offsetX;
    } else {
      return Ke.offsetY ?? this._offsetY;
    }
  }
  _validatePositions() {}
  _addPanelClasses(Ke) {
    if (this._pane) {
      M(Ke).forEach(We => {
        if (We !== "" && this._appliedPanelClasses.indexOf(We) === -1) {
          this._appliedPanelClasses.push(We);
          this._pane.classList.add(We);
        }
      });
    }
  }
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach(Ke => {
        this._pane.classList.remove(Ke);
      });
      this._appliedPanelClasses = [];
    }
  }
  _getOriginRect() {
    const Ke = this._origin;
    if (Ke instanceof i.SBq) {
      return Ke.nativeElement.getBoundingClientRect();
    }
    if (Ke instanceof Element) {
      return Ke.getBoundingClientRect();
    }
    const We = Ke.width || 0;
    const jt = Ke.height || 0;
    return {
      top: Ke.y,
      bottom: Ke.y + jt,
      left: Ke.x,
      right: Ke.x + We,
      height: jt,
      width: We
    };
  }
}
function qi(Nt, Ke) {
  for (let We in Ke) {
    if (Ke.hasOwnProperty(We)) {
      Nt[We] = Ke[We];
    }
  }
  return Nt;
}
function qo(Nt) {
  if (typeof Nt != "number" && Nt != null) {
    const [Ke, We] = Nt.split(ya);
    if (We && We !== "px") {
      return null;
    } else {
      return parseFloat(Ke);
    }
  }
  return Nt || null;
}
function ea(Nt) {
  return {
    top: Math.floor(Nt.top),
    right: Math.floor(Nt.right),
    bottom: Math.floor(Nt.bottom),
    left: Math.floor(Nt.left),
    width: Math.floor(Nt.width),
    height: Math.floor(Nt.height)
  };
}
const ja = "cdk-global-overlay-wrapper";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class la {
  constructor() {
    this._cssPosition = "static";
    this._topOffset = "";
    this._bottomOffset = "";
    this._alignItems = "";
    this._xPosition = "";
    this._xOffset = "";
    this._width = "";
    this._height = "";
    this._isDisposed = false;
  }
  attach(Ke) {
    const We = Ke.getConfig();
    this._overlayRef = Ke;
    if (this._width && !We.width) {
      Ke.updateSize({
        width: this._width
      });
    }
    if (this._height && !We.height) {
      Ke.updateSize({
        height: this._height
      });
    }
    Ke.hostElement.classList.add(ja);
    this._isDisposed = false;
  }
  top(Ke = "") {
    this._bottomOffset = "";
    this._topOffset = Ke;
    this._alignItems = "flex-start";
    return this;
  }
  left(Ke = "") {
    this._xOffset = Ke;
    this._xPosition = "left";
    return this;
  }
  bottom(Ke = "") {
    this._topOffset = "";
    this._bottomOffset = Ke;
    this._alignItems = "flex-end";
    return this;
  }
  right(Ke = "") {
    this._xOffset = Ke;
    this._xPosition = "right";
    return this;
  }
  start(Ke = "") {
    this._xOffset = Ke;
    this._xPosition = "start";
    return this;
  }
  end(Ke = "") {
    this._xOffset = Ke;
    this._xPosition = "end";
    return this;
  }
  width(Ke = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: Ke
      });
    } else {
      this._width = Ke;
    }
    return this;
  }
  height(Ke = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: Ke
      });
    } else {
      this._height = Ke;
    }
    return this;
  }
  centerHorizontally(Ke = "") {
    this.left(Ke);
    this._xPosition = "center";
    return this;
  }
  centerVertically(Ke = "") {
    this.top(Ke);
    this._alignItems = "center";
    return this;
  }
  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const Ke = this._overlayRef.overlayElement.style;
    const We = this._overlayRef.hostElement.style;
    const jt = this._overlayRef.getConfig();
    const {
      width: On,
      height: ri,
      maxWidth: Bi,
      maxHeight: wr
    } = jt;
    const Kr = (On === "100%" || On === "100vw") && (!Bi || Bi === "100%" || Bi === "100vw");
    const oe = (ri === "100%" || ri === "100vh") && (!wr || wr === "100%" || wr === "100vh");
    const we = this._xPosition;
    const ce = this._xOffset;
    const nt = this._overlayRef.getConfig().direction === "rtl";
    let sn = "";
    let Pn = "";
    let Ei = "";
    if (Kr) {
      Ei = "flex-start";
    } else if (we === "center") {
      Ei = "center";
      if (nt) {
        Pn = ce;
      } else {
        sn = ce;
      }
    } else if (nt) {
      if (we === "left" || we === "end") {
        Ei = "flex-end";
        sn = ce;
      } else if (we === "right" || we === "start") {
        Ei = "flex-start";
        Pn = ce;
      }
    } else if (we === "left" || we === "start") {
      Ei = "flex-start";
      sn = ce;
    } else if (we === "right" || we === "end") {
      Ei = "flex-end";
      Pn = ce;
    }
    Ke.position = this._cssPosition;
    Ke.marginLeft = Kr ? "0" : sn;
    Ke.marginTop = oe ? "0" : this._topOffset;
    Ke.marginBottom = this._bottomOffset;
    Ke.marginRight = Kr ? "0" : Pn;
    We.justifyContent = Ei;
    We.alignItems = oe ? "flex-start" : this._alignItems;
  }
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const Ke = this._overlayRef.overlayElement.style;
    const We = this._overlayRef.hostElement;
    const jt = We.style;
    We.classList.remove(ja);
    jt.justifyContent = jt.alignItems = Ke.marginTop = Ke.marginBottom = Ke.marginLeft = Ke.marginRight = Ke.position = "";
    this._overlayRef = null;
    this._isDisposed = true;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ta = (() => {
  class Nt {
    constructor(We, jt, On, ri) {
      this._viewportRuler = We;
      this._document = jt;
      this._platform = On;
      this._overlayContainer = ri;
    }
    global() {
      return new la();
    }
    flexibleConnectedTo(We) {
      return new Ko(We, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(qe), i.LFG(F.K0), i.LFG(X), i.LFG(Gs));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let Fr = 0;
let Es = (() => {
  class Nt {
    constructor(We, jt, On, ri, Bi, wr, Kr, oe, we, ce, nt, sn) {
      this.scrollStrategies = We;
      this._overlayContainer = jt;
      this._componentFactoryResolver = On;
      this._positionBuilder = ri;
      this._keyboardDispatcher = Bi;
      this._injector = wr;
      this._ngZone = Kr;
      this._document = oe;
      this._directionality = we;
      this._location = ce;
      this._outsideClickDispatcher = nt;
      this._animationsModuleType = sn;
    }
    create(We) {
      const jt = this._createHostElement();
      const On = this._createPaneElement(jt);
      const ri = this._createPortalOutlet(On);
      const Bi = new Or(We);
      Bi.direction = Bi.direction || this._directionality.value;
      return new Zr(ri, jt, On, Bi, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, this._animationsModuleType === "NoopAnimations");
    }
    position() {
      return this._positionBuilder;
    }
    _createPaneElement(We) {
      const jt = this._document.createElement("div");
      jt.id = "cdk-overlay-" + Fr++;
      jt.classList.add("cdk-overlay-pane");
      We.appendChild(jt);
      return jt;
    }
    _createHostElement() {
      const We = this._document.createElement("div");
      this._overlayContainer.getContainerElement().appendChild(We);
      return We;
    }
    _createPortalOutlet(We) {
      this._appRef ||= this._injector.get(i.z2F);
      return new Ur(We, this._componentFactoryResolver, this._appRef, this._injector, this._document);
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(Vr), i.LFG(Gs), i.LFG(i._Vd), i.LFG(ta), i.LFG(bo), i.LFG(i.zs3), i.LFG(i.R0b), i.LFG(F.K0), i.LFG(Be), i.LFG(F.Ye), i.LFG(ks), i.LFG(i.QbO, 8));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac
  });
  return Nt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Fo = {
  provide: new i.OlP("cdk-connected-overlay-scroll-strategy"),
  deps: [Es],
  useFactory: function qs(Nt) {
    return () => Nt.scrollStrategies.reposition();
  }
};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ha = (() => {
  class Nt {}
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵmod = i.oAB({
    type: Nt
  });
  Nt.ɵinj = i.cJS({
    providers: [Es, Fo],
    imports: [Qe, sa, hn, hn]
  });
  return Nt;
})();
let Ca = (() => {
  class Nt extends Gs {
    constructor(We, jt) {
      super(We, jt);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      if (this._fullScreenEventName && this._fullScreenListener) {
        this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
      }
    }
    _createContainer() {
      super._createContainer();
      this._adjustParentForFullscreenChange();
      this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
    }
    _adjustParentForFullscreenChange() {
      if (this._containerElement) {
        (this.getFullscreenElement() || this._document.body).appendChild(this._containerElement);
      }
    }
    _addFullscreenChangeListener(We) {
      const jt = this._getEventName();
      if (jt) {
        if (this._fullScreenListener) {
          this._document.removeEventListener(jt, this._fullScreenListener);
        }
        this._document.addEventListener(jt, We);
        this._fullScreenListener = We;
      }
    }
    _getEventName() {
      if (!this._fullScreenEventName) {
        const We = this._document;
        if (We.fullscreenEnabled) {
          this._fullScreenEventName = "fullscreenchange";
        } else if (We.webkitFullscreenEnabled) {
          this._fullScreenEventName = "webkitfullscreenchange";
        } else if (We.mozFullScreenEnabled) {
          this._fullScreenEventName = "mozfullscreenchange";
        } else if (We.msFullscreenEnabled) {
          this._fullScreenEventName = "MSFullscreenChange";
        }
      }
      return this._fullScreenEventName;
    }
    getFullscreenElement() {
      const We = this._document;
      return We.fullscreenElement || We.webkitFullscreenElement || We.mozFullScreenElement || We.msFullscreenElement || null;
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(F.K0), i.LFG(X));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
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
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
import * as Qa from "70655";
const Il = ["li"];
function yu(Nt, Ke) {
  if (Nt & 1) {
    i._UZ(0, "hr", 9);
  }
}
function Rl(Nt, Ke) {}
const pl = function (Nt) {
  return {
    $implicit: Nt
  };
};
function Bc(Nt, Ke) {
  if (Nt & 1) {
    const We = i.EpF();
    i.TgZ(0, "button", 10);
    i.NdJ("click", function (On) {
      i.CHM(We);
      const ri = i.oxw().$implicit;
      const Bi = i.oxw();
      return i.KtG(Bi.onMenuItemSelect(ri, On));
    })("mouseenter", function (On) {
      i.CHM(We);
      const ri = i.oxw().$implicit;
      const Bi = i.oxw();
      return i.KtG(Bi.onOpenSubMenu(ri, On));
    });
    i.YNc(1, Rl, 0, 0, "ng-template", 11);
    i.qZA();
  }
  if (Nt & 2) {
    const We = i.oxw().$implicit;
    const jt = i.oxw();
    i.ekj("ngx-contextmenu--parent-menu", !!We.subMenu)("active", We.isActive && !jt.isMenuItemDisabled(We))("disabled", jt.isMenuItemDisabled(We));
    i.uIk("aria-haspopup", !!We.subMenu)("disabled", jt.isMenuItemDisabled(We) ? "disabled" : null);
    i.xp6(1);
    i.Q6J("ngTemplateOutlet", We.template)("ngTemplateOutletContext", i.VKq(10, pl, jt.value));
  }
}
function Hd(Nt, Ke) {}
function ru(Nt, Ke) {
  if (Nt & 1) {
    const We = i.EpF();
    i.TgZ(0, "span", 12);
    i.NdJ("click", function (On) {
      i.CHM(We);
      const ri = i.oxw(2);
      return i.KtG(ri.stopEvent(On));
    })("contextmenu", function (On) {
      i.CHM(We);
      const ri = i.oxw(2);
      return i.KtG(ri.stopEvent(On));
    });
    i.YNc(1, Hd, 0, 0, "ng-template", 11);
    i.qZA();
  }
  if (Nt & 2) {
    const We = i.oxw().$implicit;
    const jt = i.oxw();
    i.ekj("disabled", jt.isMenuItemDisabled(We));
    i.xp6(1);
    i.Q6J("ngTemplateOutlet", We.template)("ngTemplateOutletContext", i.VKq(4, pl, jt.value));
  }
}
function Pl(Nt, Ke) {
  if (Nt & 1) {
    i.TgZ(0, "li", 4, 5);
    i.YNc(2, yu, 1, 0, "hr", 6);
    i.YNc(3, Bc, 2, 12, "button", 7);
    i.YNc(4, ru, 2, 6, "span", 8);
    i.qZA();
  }
  if (Nt & 2) {
    const We = Ke.$implicit;
    const jt = i.oxw();
    i.ekj("disabled", jt.isMenuItemDisabled(We))("divider", We.divider)("active", We.isActive && !jt.isMenuItemDisabled(We));
    i.uIk("role", We.divider ? "separator" : undefined);
    i.xp6(2);
    i.Q6J("ngIf", We.divider);
    i.xp6(1);
    i.Q6J("ngIf", !We.divider && !We.passive);
    i.xp6(1);
    i.Q6J("ngIf", !We.divider && We.passive);
  }
}
const ll = (Nt, Ke) => Nt instanceof Function ? Nt(Ke) : Nt;
const Dc_ActiveDescendantKeyManager =
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class jo extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mu {
  constructor(Ke) {
    this._items = Ke;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new S.x();
    this._typeaheadSubscription = Tr.w0.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    this._skipPredicateFn = We => We.disabled;
    this._pressedLetters = [];
    this.tabOut = new S.x();
    this.change = new S.x();
    if (Ke instanceof i.n_E) {
      Ke.changes.subscribe(We => {
        if (this._activeItem) {
          const On = We.toArray().indexOf(this._activeItem);
          if (On > -1 && On !== this._activeItemIndex) {
            this._activeItemIndex = On;
          }
        }
      });
    }
  }
  skipPredicate(Ke) {
    this._skipPredicateFn = Ke;
    return this;
  }
  withWrap(Ke = true) {
    this._wrap = Ke;
    return this;
  }
  withVerticalOrientation(Ke = true) {
    this._vertical = Ke;
    return this;
  }
  withHorizontalOrientation(Ke) {
    this._horizontal = Ke;
    return this;
  }
  withAllowedModifierKeys(Ke) {
    this._allowedModifierKeys = Ke;
    return this;
  }
  withTypeAhead(Ke = 200) {
    this._typeaheadSubscription.unsubscribe();
    this._typeaheadSubscription = this._letterKeyStream.pipe((0, Vl.b)(We => this._pressedLetters.push(We)), (0, kl.b)(Ke), (0, B.h)(() => this._pressedLetters.length > 0), (0, Gi.U)(() => this._pressedLetters.join(""))).subscribe(We => {
      const jt = this._getItemsArray();
      for (let On = 1; On < jt.length + 1; On++) {
        const ri = (this._activeItemIndex + On) % jt.length;
        const Bi = jt[ri];
        if (!this._skipPredicateFn(Bi) && Bi.getLabel().toUpperCase().trim().indexOf(We) === 0) {
          this.setActiveItem(ri);
          break;
        }
      }
      this._pressedLetters = [];
    });
    return this;
  }
  withHomeAndEnd(Ke = true) {
    this._homeAndEnd = Ke;
    return this;
  }
  setActiveItem(Ke) {
    const We = this._activeItem;
    this.updateActiveItem(Ke);
    if (this._activeItem !== We) {
      this.change.next(this._activeItemIndex);
    }
  }
  onKeydown(Ke) {
    const We = Ke.keyCode;
    const On = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(ri => !Ke[ri] || this._allowedModifierKeys.indexOf(ri) > -1);
    switch (We) {
      case 9:
        this.tabOut.next();
        return;
      case 40:
        if (this._vertical && On) {
          this.setNextItemActive();
          break;
        }
        return;
      case 38:
        if (this._vertical && On) {
          this.setPreviousItemActive();
          break;
        }
        return;
      case 39:
        if (this._horizontal && On) {
          if (this._horizontal === "rtl") {
            this.setPreviousItemActive();
          } else {
            this.setNextItemActive();
          }
          break;
        }
        return;
      case 37:
        if (this._horizontal && On) {
          if (this._horizontal === "rtl") {
            this.setNextItemActive();
          } else {
            this.setPreviousItemActive();
          }
          break;
        }
        return;
      case 36:
        if (this._homeAndEnd && On) {
          this.setFirstItemActive();
          break;
        }
        return;
      case 35:
        if (this._homeAndEnd && On) {
          this.setLastItemActive();
          break;
        }
        return;
      default:
        if (On ||
        /**
               * @license
               * Copyright Google LLC All Rights Reserved.
               *
               * Use of this source code is governed by an MIT-style license that can be
               * found in the LICENSE file at https://angular.io/license
               */
        function gd(Nt, ...Ke) {
          if (Ke.length) {
            return Ke.some(We => Nt[We]);
          } else {
            return Nt.altKey || Nt.shiftKey || Nt.ctrlKey || Nt.metaKey;
          }
        }(Ke, "shiftKey")) {
          if (Ke.key && Ke.key.length === 1) {
            this._letterKeyStream.next(Ke.key.toLocaleUpperCase());
          } else if (We >= 65 && We <= 90 || We >= 48 && We <= 57) {
            this._letterKeyStream.next(String.fromCharCode(We));
          }
        }
        return;
    }
    this._pressedLetters = [];
    Ke.preventDefault();
  }
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  get activeItem() {
    return this._activeItem;
  }
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  setNextItemActive() {
    if (this._activeItemIndex < 0) {
      this.setFirstItemActive();
    } else {
      this._setActiveItemByDelta(1);
    }
  }
  setPreviousItemActive() {
    if (this._activeItemIndex < 0 && this._wrap) {
      this.setLastItemActive();
    } else {
      this._setActiveItemByDelta(-1);
    }
  }
  updateActiveItem(Ke) {
    const We = this._getItemsArray();
    const jt = typeof Ke == "number" ? Ke : We.indexOf(Ke);
    this._activeItem = We[jt] ?? null;
    this._activeItemIndex = jt;
  }
  _setActiveItemByDelta(Ke) {
    if (this._wrap) {
      this._setActiveInWrapMode(Ke);
    } else {
      this._setActiveInDefaultMode(Ke);
    }
  }
  _setActiveInWrapMode(Ke) {
    const We = this._getItemsArray();
    for (let jt = 1; jt <= We.length; jt++) {
      const On = (this._activeItemIndex + Ke * jt + We.length) % We.length;
      if (!this._skipPredicateFn(We[On])) {
        this.setActiveItem(On);
        return;
      }
    }
  }
  _setActiveInDefaultMode(Ke) {
    this._setActiveItemByIndex(this._activeItemIndex + Ke, Ke);
  }
  _setActiveItemByIndex(Ke, We) {
    const jt = this._getItemsArray();
    if (jt[Ke]) {
      for (; this._skipPredicateFn(jt[Ke]);) {
        if (!jt[Ke += We]) {
          return;
        }
      }
      this.setActiveItem(Ke);
    }
  }
  _getItemsArray() {
    if (this._items instanceof i.n_E) {
      return this._items.toArray();
    } else {
      return this._items;
    }
  }
} {
  setActiveItem(Ke) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }
    super.setActiveItem(Ke);
    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;
let je = (() => {
  class Nt {
    constructor(We) {
      this._elementRef = We;
      this.menuDirectives = [];
      this.menuClass = "";
      this.isLeaf = false;
      this.execute = new i.vpe();
      this.openSubMenu = new i.vpe();
      this.closeLeafMenu = new i.vpe();
      this.closeAllMenus = new i.vpe();
      this.subscription = new Tr.w0();
    }
    ngOnInit() {
      this.setupDirectives();
    }
    ngAfterViewInit() {
      var We;
      if ((We = this.overlayRef) !== null && We !== undefined) {
        We.updatePosition();
      }
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    onKeyArrowDownOrUp(We) {
      if (!!this.isLeaf) {
        this.keyManager.onKeydown(We);
      }
    }
    onKeyArrowRight(We) {
      if (this.isLeaf) {
        if (this.dir === "rtl") {
          this.closeActiveItemSubMenu(We);
          return;
        }
        this.openActiveItemSubMenu(We);
      }
    }
    onKeyArrowLeft(We) {
      if (this.isLeaf) {
        if (this.dir === "rtl") {
          this.openActiveItemSubMenu(We);
          return;
        }
        this.closeActiveItemSubMenu(We);
      }
    }
    onKeyEnterOrSpace(We) {
      if (!!this.isLeaf && !!this.keyManager.activeItem) {
        this.onMenuItemSelect(this.keyManager.activeItem, We);
      }
    }
    onKeyArrowEscape(We) {
      if (!!this.isLeaf) {
        this.closeActiveItemSubMenu(We);
      }
    }
    onClickOrRightClick(We) {
      if ((We.type !== "click" || We.button !== 2) && !this._elementRef.nativeElement.contains(We.target)) {
        this.closeAllMenus.emit({
          event: We
        });
      }
    }
    stopEvent(We) {
      We.stopPropagation();
    }
    isMenuItemDisabled(We) {
      return ll(We.disabled, this.value);
    }
    isMenuItemVisible(We) {
      return ll(We.visible, this.value);
    }
    onOpenSubMenu(We, jt) {
      if (this.keyManager.activeItemIndex === null || !We.subMenu) {
        return;
      }
      const On = this.liElementRefs.toArray()[this.keyManager.activeItemIndex];
      const ri = On && On.nativeElement;
      if (ri && jt instanceof KeyboardEvent) {
        this.openSubMenu.emit({
          anchoredTo: "element",
          anchorElement: ri,
          contextMenu: We.subMenu,
          value: this.value,
          parentContextMenu: this
        });
      } else {
        this.openSubMenu.emit(jt.currentTarget ? {
          anchoredTo: "element",
          anchorElement: jt.currentTarget,
          contextMenu: We.subMenu,
          value: this.value,
          parentContextMenu: this
        } : {
          anchoredTo: "position",
          x: jt.clientX,
          y: jt.clientY,
          contextMenu: We.subMenu,
          value: this.value
        });
      }
    }
    onMenuItemSelect(We, jt) {
      this.cancelEvent(jt);
      this.onOpenSubMenu(We, jt);
      if (!We.subMenu) {
        this.triggerExecute(We, jt);
      }
    }
    triggerExecute(We, jt) {
      We.triggerExecute(jt, this.value);
    }
    setupDirectives() {
      this.menuDirectives.forEach(jt => {
        jt.value = this.value;
        this.subscription.add(jt.execute.subscribe(On => this.execute.emit({
          ...On,
          menuDirective: jt
        })));
      });
      const We = new i.n_E();
      We.reset(this.menuDirectives);
      this.keyManager = new Dc_ActiveDescendantKeyManager(We).withWrap();
    }
    openActiveItemSubMenu(We) {
      if (this.keyManager.activeItemIndex !== null) {
        this.cancelEvent(We);
        if (this.keyManager.activeItem) {
          this.onOpenSubMenu(this.keyManager.activeItem, We);
        }
      }
    }
    closeActiveItemSubMenu(We) {
      if (this.keyManager.activeItemIndex !== null) {
        this.cancelEvent(We);
        this.closeLeafMenu.emit({
          excludeRootMenu: this.dir === "rtl" ? We.keyCode === 39 : We.keyCode === 37,
          event: We
        });
      }
    }
    cancelEvent(We) {
      if (!We || !We.target) {
        return;
      }
      const jt = We.target;
      if (!["INPUT", "TEXTAREA", "SELECT"].includes(jt.tagName) && !jt.isContentEditable) {
        We.preventDefault();
        We.stopPropagation();
      }
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.Y36(i.SBq));
  };
  Nt.ɵcmp = i.Xpm({
    type: Nt,
    selectors: [["context-menu-content"]],
    viewQuery: function (We, jt) {
      if (We & 1) {
        i.Gf(Il, 5);
      }
      if (We & 2) {
        let On;
        if (i.iGM(On = i.CRH())) {
          jt.liElementRefs = On;
        }
      }
    },
    hostVars: 1,
    hostBindings: function (We, jt) {
      if (We & 1) {
        i.NdJ("keydown.ArrowDown", function (ri) {
          return jt.onKeyArrowDownOrUp(ri);
        }, false, i.Jf7)("keydown.ArrowUp", function (ri) {
          return jt.onKeyArrowDownOrUp(ri);
        }, false, i.Jf7)("keydown.ArrowRight", function (ri) {
          return jt.onKeyArrowRight(ri);
        }, false, i.Jf7)("keydown.ArrowLeft", function (ri) {
          return jt.onKeyArrowLeft(ri);
        }, false, i.Jf7)("keydown.Enter", function (ri) {
          return jt.onKeyEnterOrSpace(ri);
        }, false, i.Jf7)("keydown.Space", function (ri) {
          return jt.onKeyEnterOrSpace(ri);
        }, false, i.Jf7)("keydown.Escape", function (ri) {
          return jt.onKeyArrowEscape(ri);
        }, false, i.Jf7)("click", function (ri) {
          return jt.onClickOrRightClick(ri);
        }, false, i.evT)("contextmenu", function (ri) {
          return jt.onClickOrRightClick(ri);
        }, false, i.evT);
      }
      if (We & 2) {
        i.uIk("dir", jt.dir);
      }
    },
    inputs: {
      menuDirectives: "menuDirectives",
      value: "value",
      dir: "dir",
      parentContextMenu: "parentContextMenu",
      menuClass: "menuClass",
      overlayRef: "overlayRef",
      isLeaf: "isLeaf"
    },
    outputs: {
      execute: "execute",
      openSubMenu: "openSubMenu",
      closeLeafMenu: "closeLeafMenu",
      closeAllMenus: "closeAllMenus"
    },
    decls: 4,
    vars: 3,
    consts: [[1, "ngx-contextmenu", 3, "ngClass"], ["role", "menu", "aria-labelledby", "menubutton", "tabindex", "0", 1, "ngx-contextmenu--dropdown-menu"], ["menu", ""], ["role", "none", 3, "disabled", "divider", "active", 4, "ngFor", "ngForOf"], ["role", "none"], ["li", ""], ["role", "separator", 4, "ngIf"], ["type", "button", "role", "menuitem", "class", "ngx-contextmenu--item-content", 3, "ngx-contextmenu--parent-menu", "active", "disabled", "click", "mouseenter", 4, "ngIf"], ["class", "ngx-contextmenu--item-content ngx-contextmenu--item-content-passive", "role", "menuitem", 3, "disabled", "click", "contextmenu", 4, "ngIf"], ["role", "separator"], ["type", "button", "role", "menuitem", 1, "ngx-contextmenu--item-content", 3, "click", "mouseenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "menuitem", 1, "ngx-contextmenu--item-content", "ngx-contextmenu--item-content-passive", 3, "click", "contextmenu"]],
    template: function (We, jt) {
      if (We & 1) {
        i.TgZ(0, "div", 0)(1, "ul", 1, 2);
        i.YNc(3, Pl, 5, 10, "li", 3);
        i.qZA()();
      }
      if (We & 2) {
        i.Q6J("ngClass", jt.menuClass);
        i.uIk("dir", jt.dir);
        i.xp6(3);
        i.Q6J("ngForOf", jt.menuDirectives);
      }
    },
    dependencies: [F.mk, F.sg, F.O5, F.tP, De],
    encapsulation: 2,
    changeDetection: 0
  });
  return Nt;
})();
var Ie;
export class n5 {
  constructor(Ke) {
    this.template = Ke;
    this.divider = false;
    this.passive = false;
    this.visible = true;
    this.execute = new i.vpe();
    this.isActive = false;
    Ie.set(this, false);
  }
  set disabled(Ke) {
    (0, Qa.YH)(this, Ie, Ke, "f");
  }
  get disabled() {
    return this.passive || this.divider || ll((0, Qa.Q_)(this, Ie, "f"), this.value);
  }
  setActiveStyles() {
    this.isActive = true;
  }
  setInactiveStyles() {
    this.isActive = false;
  }
  triggerExecute(Ke, We) {
    if (!ll((0, Qa.Q_)(this, Ie, "f"), We)) {
      this.execute.emit({
        event: Ke,
        value: We
      });
    }
  }
}
Ie = new WeakMap();
n5.ɵfac = function (Ke) {
  return new (Ke || n5)(i.Y36(i.Rgc, 8));
};
n5.ɵdir = i.lG2({
  type: n5,
  selectors: [["", "contextMenuItem", ""]],
  inputs: {
    subMenu: "subMenu",
    divider: "divider",
    disabled: "disabled",
    passive: "passive",
    visible: "visible"
  },
  outputs: {
    execute: "execute"
  }
});
let fn = (() => {
  class Nt {
    constructor() {
      this.stack = [];
    }
    push(We) {
      this.stack.push(We);
    }
    size() {
      return this.stack.length;
    }
    isEmpty() {
      return this.size() === 0;
    }
    closeAll() {
      this.stack.forEach(We => this.dispose(We));
      this.stack = [];
    }
    destroySubMenus(We) {
      if (!We) {
        return;
      }
      const jt = this.stack.findIndex(({
        overlayRef: On
      }) => On === We.overlayRef);
      this.stack.slice(jt + 1).forEach(On => {
        this.dispose(On);
      });
    }
    closeLeafMenu(We) {
      const jt = this.disposeLastDetached();
      if (!jt) {
        return false;
      }
      const On = this.size() > 1;
      const ri = !We && !this.isEmpty();
      if (On || ri) {
        this.dispose(jt);
      }
      if (ri) {
        return true;
      }
      const Bi = this.disposeLastDetached();
      if (Bi) {
        Bi.contextMenuContentComponent.isLeaf = true;
      }
      return false;
    }
    disposeLastDetached() {
      let We = this.last();
      if (We) {
        for (; We && this.size() > 1 && We.overlayRef && this.isDetached(We);) {
          this.dispose(We);
          this.pop();
          We = this.last();
        }
        return We;
      }
    }
    last() {
      if (!this.isEmpty()) {
        return this.stack[this.stack.length - 1];
      }
    }
    pop() {
      const We = this.stack.pop();
      return this.dispose(We);
    }
    isDetached(We) {
      return !We.overlayRef.hasAttached();
    }
    dispose(We) {
      if (We) {
        We.overlayRef.detach();
        We.overlayRef.dispose();
      }
      return We;
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
let Nn = (() => {
  class Nt {
    constructor() {
      this.onShow = new S.x();
    }
    show(We) {
      this.onShow.next(We);
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();
export let GI = (() => {
  class Nt {
    constructor(We, jt, On, ri) {
      this.overlay = We;
      this.scrollStrategy = jt;
      this.contextMenuStack = On;
      this.contextMenuEventService = ri;
      this.menuClass = "";
      this.disabled = false;
      this.open = new i.vpe();
      this.close = new i.vpe();
      this.visibleMenuItems = [];
      this.subscription = new Tr.w0();
    }
    ngOnInit() {
      const We = this.contextMenuEventService.onShow.subscribe(jt => {
        this.onMenuEvent(jt);
      });
      this.subscription.add(We);
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    openContextMenu(We) {
      let jt;
      if (We.anchoredTo === "position") {
        jt = this.overlay.position().flexibleConnectedTo({
          x: We.x,
          y: We.y
        }).withPositions(((Nt = "ltr") => Nt === "ltr" ? [{
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top"
        }, {
          originX: "start",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom"
        }, {
          originX: "end",
          originY: "top",
          overlayX: "start",
          overlayY: "top"
        }, {
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top"
        }, {
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center"
        }, {
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center"
        }] : [{
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top"
        }, {
          originX: "end",
          originY: "top",
          overlayX: "end",
          overlayY: "bottom"
        }, {
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top"
        }, {
          originX: "end",
          originY: "top",
          overlayX: "start",
          overlayY: "top"
        }, {
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center"
        }, {
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center"
        }])(We.dir));
        this.closeAllContextMenus();
      } else {
        const {
          anchorElement: ri,
          parentContextMenu: Bi
        } = We;
        jt = this.overlay.position().flexibleConnectedTo(new i.SBq(ri)).withPositions(((Nt = "ltr") => Nt === "ltr" ? [{
          originX: "end",
          originY: "top",
          overlayX: "start",
          overlayY: "top"
        }, {
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top"
        }, {
          originX: "end",
          originY: "bottom",
          overlayX: "start",
          overlayY: "bottom"
        }, {
          originX: "start",
          originY: "bottom",
          overlayX: "end",
          overlayY: "bottom"
        }] : [{
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top"
        }, {
          originX: "end",
          originY: "top",
          overlayX: "start",
          overlayY: "top"
        }, {
          originX: "start",
          originY: "bottom",
          overlayX: "end",
          overlayY: "bottom"
        }, {
          originX: "end",
          originY: "bottom",
          overlayX: "start",
          overlayY: "bottom"
        }])(Bi.dir));
        this.contextMenuStack.destroySubMenus(Bi);
      }
      const On = this.overlay.create({
        positionStrategy: jt,
        panelClass: "ngx-contextmenu",
        scrollStrategy: this.scrollStrategy.close()
      });
      this.attachContextMenu(On, We);
    }
    onMenuEvent(We) {
      if (this.disabled) {
        return;
      }
      const {
        contextMenu: jt,
        value: On
      } = We;
      if (!jt || jt === this) {
        this.value = On;
        this.setVisibleMenuItems();
        this.openContextMenu({
          ...We,
          menuItemDirectives: this.visibleMenuItems,
          menuClass: this.menuClass,
          dir: this.dir
        });
        this.open.next(We);
      }
    }
    attachContextMenu(We, jt) {
      const {
        value: On,
        menuItemDirectives: ri
      } = jt;
      const Bi = We.attach(new $i(je));
      const {
        instance: wr
      } = Bi;
      wr.value = On;
      wr.menuDirectives = ri;
      wr.overlayRef = We;
      wr.isLeaf = true;
      wr.menuClass = this.getMenuClass(jt);
      wr.dir = this.getDir(jt);
      this.contextMenuStack.push({
        overlayRef: We,
        contextMenuContentComponent: wr
      });
      const Kr = new Tr.w0();
      Kr.add(wr.execute.subscribe(() => this.closeAllContextMenus()));
      Kr.add(wr.closeAllMenus.subscribe(() => this.closeAllContextMenus()));
      Kr.add(wr.closeLeafMenu.subscribe(oe => this.destroyLeafMenu(!!oe.excludeRootMenu)));
      Kr.add(wr.openSubMenu.subscribe(oe => {
        this.contextMenuStack.destroySubMenus(wr);
        if (oe.contextMenu) {
          wr.isLeaf = false;
          this.contextMenuEventService.show(oe);
        } else {
          wr.isLeaf = true;
        }
      }));
      Bi.onDestroy(() => {
        this.close.next();
        ri.forEach(oe => oe.isActive = false);
        Kr.unsubscribe();
      });
      Bi.changeDetectorRef.detectChanges();
    }
    getMenuClass(We) {
      var jt;
      return We.menuClass || We.anchoredTo === "element" && (We == null || (jt = We.parentContextMenu) === null || jt === undefined ? undefined : jt.menuClass) || "";
    }
    getDir(We) {
      var jt;
      return We.dir || We.anchoredTo === "element" && (We == null || (jt = We.parentContextMenu) === null || jt === undefined ? undefined : jt.dir) || undefined;
    }
    closeAllContextMenus() {
      this.contextMenuStack.closeAll();
    }
    destroyLeafMenu(We) {
      this.contextMenuStack.closeLeafMenu(We);
    }
    isMenuItemVisible(We) {
      return ll(We.visible, this.value);
    }
    setVisibleMenuItems() {
      this.visibleMenuItems = this.menuItems.filter(We => this.isMenuItemVisible(We));
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.Y36(Es), i.Y36(Vr), i.Y36(fn), i.Y36(Nn));
  };
  Nt.ɵcmp = i.Xpm({
    type: Nt,
    selectors: [["context-menu"]],
    contentQueries: function (We, jt, On) {
      if (We & 1) {
        i.Suo(On, n5, 4);
      }
      if (We & 2) {
        let ri;
        if (i.iGM(ri = i.CRH())) {
          jt.menuItems = ri;
        }
      }
    },
    inputs: {
      menuClass: "menuClass",
      disabled: "disabled",
      dir: "dir"
    },
    outputs: {
      open: "open",
      close: "close"
    },
    decls: 0,
    vars: 0,
    template: function (We, jt) {},
    encapsulation: 2
  });
  return Nt;
})();
export let lB = (() => {
  class Nt {
    constructor(We, jt, On) {
      this.contextMenuEventService = We;
      this.elementRef = jt;
      this.contextMenuStackService = On;
      this.tabindex = "0";
      this.ariaHasPopup = "true";
    }
    open(We) {
      if (!this.canOpen()) {
        return;
      }
      if (We instanceof MouseEvent) {
        this.onContextMenu(We);
        return;
      }
      const {
        x: jt,
        y: On,
        height: ri
      } = this.elementRef.nativeElement.getBoundingClientRect();
      this.contextMenuEventService.show({
        anchoredTo: "position",
        x: jt,
        y: On + ri,
        contextMenu: this.contextMenu,
        value: this.contextMenuValue
      });
    }
    close() {
      this.contextMenuStackService.closeAll();
    }
    onContextMenu(We) {
      if (!!this.canOpen()) {
        this.contextMenuEventService.show({
          anchoredTo: "position",
          contextMenu: this.contextMenu,
          x: We.clientX,
          y: We.clientY,
          value: this.contextMenuValue
        });
        We.preventDefault();
        We.stopPropagation();
      }
    }
    canOpen() {
      return this.contextMenu && !this.contextMenu.disabled;
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.Y36(Nn), i.Y36(i.SBq), i.Y36(fn));
  };
  Nt.ɵdir = i.lG2({
    type: Nt,
    selectors: [["", "contextMenu", ""]],
    hostVars: 2,
    hostBindings: function (We, jt) {
      if (We & 1) {
        i.NdJ("contextmenu", function (ri) {
          return jt.onContextMenu(ri);
        });
      }
      if (We & 2) {
        i.uIk("tabindex", jt.tabindex)("aria-haspopup", jt.ariaHasPopup);
      }
    },
    inputs: {
      contextMenuValue: "contextMenuValue",
      contextMenu: "contextMenu",
      tabindex: "tabindex"
    },
    exportAs: ["ngxContextMenu"]
  });
  return Nt;
})();
export let vI = (() => {
  class Nt {}
  Nt.ɵfac = function (We) {
    return new (We || Nt)();
  };
  Nt.ɵmod = i.oAB({
    type: Nt
  });
  Nt.ɵinj = i.cJS({
    providers: [{
      provide: Gs,
      useClass: Ca
    }],
    imports: [F.ez, ha]
  });
  return Nt;
})();
export let Lk = (() => {
  class Nt {
    constructor(We) {
      this.contextMenuEventService = We;
    }
    show(We, jt = {
      x: 0,
      y: 0
    }) {
      this.contextMenuEventService.show({
        anchoredTo: "position",
        contextMenu: We,
        value: jt.value,
        x: jt.x,
        y: jt.y
      });
    }
  }
  Nt.ɵfac = function (We) {
    return new (We || Nt)(i.LFG(Nn));
  };
  Nt.ɵprov = i.Yz7({
    token: Nt,
    factory: Nt.ɵfac,
    providedIn: "root"
  });
  return Nt;
})();