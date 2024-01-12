import * as i from "94650";
import * as t from "21607";
class v {
  constructor(L, I, E) {
    this.nodes = L;
    this.viewRef = I;
    this.componentRef = E;
  }
}
class C {
  constructor(L, I, E, O, x, U, B, F, Z) {
    this._viewContainerRef = L;
    this._renderer = I;
    this._elementRef = E;
    this._injector = O;
    this._componentFactoryResolver = x;
    this._ngZone = U;
    this._applicationRef = B;
    this._posService = F;
    this._document = Z;
    this.onBeforeShow = new i.vpe();
    this.onShown = new i.vpe();
    this.onBeforeHide = new i.vpe();
    this.onHidden = new i.vpe();
    this._providers = [];
    this._isHiding = false;
    this.containerDefaultSelector = "body";
    this._listenOpts = {};
    this._globalListener = Function.prototype;
  }
  get isShown() {
    return !this._isHiding && !!this._componentRef;
  }
  attach(L) {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(L);
    return this;
  }
  to(L) {
    this.container = L || this.container;
    return this;
  }
  position(L) {
    if (L) {
      this.attachment = L.attachment || this.attachment;
      this._elementRef = L.target || this._elementRef;
      return this;
    } else {
      return this;
    }
  }
  provide(L) {
    this._providers.push(L);
    return this;
  }
  show(L = {}) {
    this._subscribePositioning();
    this._innerComponent = undefined;
    if (!this._componentRef) {
      this.onBeforeShow.emit();
      this._contentRef = this._getContentRef(L.content, L.context, L.initialState);
      const I = i.zs3.create({
        providers: this._providers,
        parent: this._injector
      });
      if (!this._componentFactory) {
        return;
      }
      this._componentRef = this._componentFactory.create(I, this._contentRef.nodes);
      this._applicationRef.attachView(this._componentRef.hostView);
      this.instance = this._componentRef.instance;
      Object.assign(this._componentRef.instance, L);
      if (this.container instanceof i.SBq) {
        this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (typeof this.container == "string" && typeof this._document !== "undefined") {
        const E = this._document.querySelector(this.container) || this._document.querySelector(this.containerDefaultSelector);
        if (!E) {
          return;
        }
        E.appendChild(this._componentRef.location.nativeElement);
      }
      if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
        this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (this._contentRef.componentRef) {
        this._innerComponent = this._contentRef.componentRef.instance;
        this._contentRef.componentRef.changeDetectorRef.markForCheck();
        this._contentRef.componentRef.changeDetectorRef.detectChanges();
      }
      this._componentRef.changeDetectorRef.markForCheck();
      this._componentRef.changeDetectorRef.detectChanges();
      this.onShown.emit(L.id ? {
        id: L.id
      } : this._componentRef.instance);
    }
    this._registerOutsideClick();
    return this._componentRef;
  }
  hide(L) {
    var I;
    var E;
    var O;
    var x;
    var U;
    var B;
    if (!this._componentRef) {
      return this;
    }
    this._posService.deletePositionElement(this._componentRef.location);
    this.onBeforeHide.emit(this._componentRef.instance);
    const F = this._componentRef.location.nativeElement;
    if ((I = F.parentNode) !== null && I !== undefined) {
      I.removeChild(F);
    }
    if ((E = this._contentRef) !== null && E !== undefined && (O = E.componentRef) !== null && O !== undefined) {
      O.destroy();
    }
    if (this._viewContainerRef && (x = this._contentRef) !== null && x !== undefined && x.viewRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
    }
    if ((U = this._contentRef) !== null && U !== undefined && (B = U.viewRef) !== null && B !== undefined) {
      B.destroy();
    }
    this._contentRef = undefined;
    this._componentRef = undefined;
    this._removeGlobalListener();
    this.onHidden.emit(L ? {
      id: L
    } : null);
    return this;
  }
  toggle() {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  }
  dispose() {
    if (this.isShown) {
      this.hide();
    }
    this._unsubscribePositioning();
    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }
  }
  listen(L) {
    this.triggers = L.triggers || this.triggers;
    this._listenOpts.outsideClick = L.outsideClick;
    this._listenOpts.outsideEsc = L.outsideEsc;
    L.target = L.target || this._elementRef?.nativeElement;
    const E = this._listenOpts.hide = () => L.hide ? L.hide() : void this.hide();
    const O = this._listenOpts.show = U => {
      if (L.show) {
        L.show(U);
      } else {
        this.show(U);
      }
      U();
    };
    if (this._renderer) {
      this._unregisterListenersFn = (0, t.wo)(this._renderer, {
        target: L.target,
        triggers: L.triggers,
        show: O,
        hide: E,
        toggle: U => {
          if (this.isShown) {
            E();
          } else {
            O(U);
          }
        }
      });
    }
    return this;
  }
  _removeGlobalListener() {
    if (this._globalListener) {
      this._globalListener();
      this._globalListener = Function.prototype;
    }
  }
  attachInline(L, I) {
    if (L && I) {
      this._inlineViewRef = L.createEmbeddedView(I);
    }
    return this;
  }
  _registerOutsideClick() {
    if (this._componentRef && this._componentRef.location) {
      if (this._listenOpts.outsideClick) {
        const L = this._componentRef.location.nativeElement;
        setTimeout(() => {
          if (this._renderer && this._elementRef) {
            this._globalListener = (0, t.Rg)(this._renderer, {
              targets: [L, this._elementRef.nativeElement],
              outsideClick: this._listenOpts.outsideClick,
              hide: () => this._listenOpts.hide && this._listenOpts.hide()
            });
          }
        });
      }
      if (this._listenOpts.outsideEsc && this._renderer && this._elementRef) {
        this._globalListener = (0, t.C)(this._renderer, {
          targets: [this._componentRef.location.nativeElement, this._elementRef.nativeElement],
          outsideEsc: this._listenOpts.outsideEsc,
          hide: () => this._listenOpts.hide && this._listenOpts.hide()
        });
      }
    }
  }
  getInnerComponent() {
    return this._innerComponent;
  }
  _subscribePositioning() {
    if (!this._zoneSubscription && !!this.attachment) {
      this.onShown.subscribe(() => {
        this._posService.position({
          element: this._componentRef?.location,
          target: this._elementRef,
          attachment: this.attachment,
          appendToBody: this.container === "body"
        });
      });
      this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
        if (!!this._componentRef) {
          this._posService.calcPosition();
        }
      });
    }
  }
  _unsubscribePositioning() {
    if (!!this._zoneSubscription) {
      this._zoneSubscription.unsubscribe();
      this._zoneSubscription = undefined;
    }
  }
  _getContentRef(L, I, E) {
    if (!L) {
      return new v([]);
    }
    if (L instanceof i.Rgc) {
      if (this._viewContainerRef) {
        const U = this._viewContainerRef.createEmbeddedView(L, I);
        U.markForCheck();
        return new v([U.rootNodes], U);
      }
      const x = L.createEmbeddedView({});
      this._applicationRef.attachView(x);
      return new v([x.rootNodes], x);
    }
    if (typeof L == "function") {
      const x = this._componentFactoryResolver.resolveComponentFactory(L);
      const U = i.zs3.create({
        providers: this._providers,
        parent: this._injector
      });
      const B = x.create(U);
      Object.assign(B.instance, E);
      this._applicationRef.attachView(B.hostView);
      return new v([[B.location.nativeElement]], B.hostView, B);
    }
    const O = this._renderer ? [this._renderer.createText(`${L}`)] : [];
    return new v([O]);
  }
}
export let oj = (() => {
  class S {
    constructor(I, E, O, x, U, B) {
      this._componentFactoryResolver = I;
      this._ngZone = E;
      this._injector = O;
      this._posService = x;
      this._applicationRef = U;
      this._document = B;
    }
    createLoader(I, E, O) {
      return new C(E, O, I, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService, this._document);
    }
  }
  S.ɵfac = function (I) {
    return new (I || S)(i.LFG(i._Vd), i.LFG(i.R0b), i.LFG(i.zs3), i.LFG(b.sA), i.LFG(i.z2F), i.LFG(k.K0));
  };
  S.ɵprov = i.Yz7({
    token: S,
    factory: S.ɵfac,
    providedIn: "root"
  });
  return S;
})();