import * as i from "94650";
import * as t from "36895";
import * as b from "82805";
import * as v from "37340";
function C(q, j) {
  if (q & 1) {
    i.TgZ(0, "div");
    i.Hsn(1);
    i.qZA();
  }
  if (q & 2) {
    const G = i.oxw();
    i.Tol(G.wrapperClass);
    i.Q6J("@flyInOut", undefined)("@.disabled", G.disableAnimation);
  }
}
function w(q, j) {
  if (q & 1) {
    i._UZ(0, "div", 2);
  }
  if (q & 2) {
    const G = i.oxw();
    i.Q6J("@flyInOut", undefined)("@.disabled", G.disableAnimation);
  }
}
const S = ["*"];
let L = (() => {
  class q {
    constructor() {}
  }
  q.ɵfac = function (G) {
    return new (G || q)();
  };
  q.ɵprov = i.Yz7({
    token: q,
    factory: q.ɵfac,
    providedIn: "root"
  });
  return q;
})();
class I {
  constructor(j = {}) {
    for (const G of Object.keys(O)) {
      this[G] = j[G] !== undefined ? j[G] : O[G];
    }
  }
}
const O = {
  template: (() => {
    class q {
      constructor(G) {
        this.instanceConfigHolder = G;
      }
      get message() {
        return this.instanceConfigHolder.config.message;
      }
    }
    q.ɵfac = function (G) {
      return new (G || q)(i.Y36("instanceConfigHolder"));
    };
    q.ɵcmp = i.Xpm({
      type: q,
      selectors: [["default-busy"]],
      decls: 17,
      vars: 1,
      consts: [[1, "ng-busy-default-wrapper"], [1, "ng-busy-default-sign"], [1, "ng-busy-default-spinner"], [1, "bar1"], [1, "bar2"], [1, "bar3"], [1, "bar4"], [1, "bar5"], [1, "bar6"], [1, "bar7"], [1, "bar8"], [1, "bar9"], [1, "bar10"], [1, "bar11"], [1, "bar12"], [1, "ng-busy-default-text"]],
      template: function (G, se) {
        if (G & 1) {
          i.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2);
          i._UZ(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14);
          i.qZA();
          i.TgZ(15, "div", 15);
          i._uU(16);
          i.qZA()()();
        }
        if (G & 2) {
          i.xp6(16);
          i.Oqu(se.message);
        }
      },
      encapsulation: 2
    });
    return q;
  })(),
  templateNgStyle: {},
  delay: 0,
  minDuration: 0,
  backdrop: true,
  message: "Please wait...",
  wrapperClass: "ng-busy",
  disableAnimation: false
};
function x(q) {
  return q && typeof q.subscribe != "function" && typeof q.then == "function";
}
let U = (() => {
  class q {
    constructor() {
      this.isDelayProcessing = false;
      this.isDurationProcessing = false;
      this.isBusiesProcessing = false;
      this.busyQueue = [];
      this.__isActive = false;
      this.onStartBusy = new i.vpe();
      this.onStopBusy = new i.vpe();
    }
    get isActive() {
      return this.__isActive;
    }
    set isActive(G) {
      if (this.__isActive === false && G === true && this.onStartBusy) {
        this.onStartBusy.emit();
      }
      if (this.__isActive === true && G === false && this.onStopBusy) {
        this.isBusiesProcessing = false;
        this.onStopBusy.emit();
      }
      this.__isActive = G;
    }
    get busyList() {
      return this.busyQueue;
    }
    load(G) {
      this.loadBusyQueue(G.busyList);
      this.startLoading(G);
    }
    updateActiveStatus() {
      this.isActive = this.isBusiesProcessing && !this.isDelayProcessing && (this.isDurationProcessing || this.busyQueue.length > 0);
    }
    startLoading(G) {
      if (!this.isBusiesProcessing && this.busyList.length > 0) {
        this.isBusiesProcessing = true;
        this.isDelayProcessing = true;
        this.updateActiveStatus();
        (0, b.H)(G.delay).subscribe(() => {
          this.isDelayProcessing = false;
          this.isDurationProcessing = true;
          this.updateActiveStatus();
          (0, b.H)(G.minDuration).subscribe(() => {
            this.isDurationProcessing = false;
            this.updateActiveStatus();
          });
        });
      }
    }
    loadBusyQueue(G) {
      G.filter(se => se && !se.hasOwnProperty("__loaded_mark_by_ng_busy")).forEach(se => {
        let W;
        Object.defineProperty(se, "__loaded_mark_by_ng_busy", {
          value: true,
          configurable: false,
          enumerable: false,
          writable: false
        });
        W = x(se) ? (0, k.D)(se).subscribe() : se;
        this.appendToQueue(W);
      });
    }
    appendToQueue(G) {
      this.busyQueue.push(G);
      G.add(() => {
        this.busyQueue = this.busyQueue.filter(se => !se.closed);
        this.updateActiveStatus();
      });
    }
    ngOnDestroy() {}
  }
  q.ɵfac = function (G) {
    return new (G || q)();
  };
  q.ɵprov = i.Yz7({
    token: q,
    factory: q.ɵfac,
    providedIn: "root"
  });
  return q;
})();
let B = (() => {
  class q {
    constructor(G) {
      this.config = Object.assign({}, O, G || new I());
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)(i.LFG(I, 8));
  };
  q.ɵprov = i.Yz7({
    token: q,
    factory: q.ɵfac,
    providedIn: "root"
  });
  return q;
})();
const F = (0, v.oB)({
  opacity: 0,
  transform: "translateY(-40px)"
});
const Z = ".3s ease";
let X = (() => {
  class q {
    constructor(G, se, W) {
      this.instanceConfigHolder = G;
      this.busyEmitter = se;
      this.cdr = W;
      this.disableAnimation = false;
      this.showBackdrop = true;
      this.isActive = false;
      this.busyMonitor = this.busyEmitter.subscribe(Pe => {
        const Le = this.instanceConfigHolder.config;
        this.isActive = Pe;
        this.wrapperClass = Le.wrapperClass;
        this.showBackdrop = Le.backdrop;
        this.disableAnimation = Le.disableAnimation;
        if (this.cdr) {
          this.cdr.markForCheck();
        }
      });
    }
    ngOnDestroy() {
      if (this.busyMonitor) {
        this.busyMonitor.unsubscribe();
      }
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)(i.Y36("instanceConfigHolder"), i.Y36("busyEmitter"), i.Y36(i.sBO));
  };
  q.ɵcmp = i.Xpm({
    type: q,
    selectors: [["lib-ng-busy"]],
    ngContentSelectors: S,
    decls: 2,
    vars: 2,
    consts: [[3, "class", 4, "ngIf"], ["class", "ng-busy-backdrop", 4, "ngIf"], [1, "ng-busy-backdrop"]],
    template: function (G, se) {
      if (G & 1) {
        i.F$t();
        i.YNc(0, C, 2, 4, "div", 0);
        i.YNc(1, w, 1, 2, "div", 1);
      }
      if (G & 2) {
        i.Q6J("ngIf", se.isActive);
        i.xp6(1);
        i.Q6J("ngIf", se.showBackdrop && se.isActive);
      }
    },
    dependencies: [t.O5],
    data: {
      animation: [(0, v.X$)("flyInOut", [(0, v.eR)("void => *", [F, (0, v.jt)(Z)]), (0, v.eR)("* => void", [(0, v.jt)(Z, F)])])]
    }
  });
  return q;
})();
export let DC = (() => {
  class q {
    constructor(G, se, W, Pe, Le, he, pe, re, Re) {
      this.configHolder = G;
      this.instanceConfigHolder = se;
      this.resolver = W;
      this.tracker = Pe;
      this.appRef = Le;
      this.vcr = he;
      this.element = pe;
      this.renderer = re;
      this.injector = Re;
      this.busyStart = new i.vpe();
      this.busyStop = new i.vpe();
      this.isLoading = false;
      this.busyEmitter = new i.vpe();
      this.onStartSubscription = Pe.onStartBusy.subscribe(() => {
        setTimeout(() => {
          this.recreateBusyIfNecessary();
          this.isLoading = true;
          this.busyEmitter.emit(this.isLoading);
          this.busyStart.emit();
        }, 0);
      });
      this.onStopSubscription = Pe.onStopBusy.subscribe(() => {
        this.isLoading = false;
        this.busyEmitter.emit(this.isLoading);
        this.busyStop.emit();
        if (this.componentViewRef) {
          this.appRef.detachView(this.componentViewRef);
          this.componentViewRef.destroy();
        }
      });
    }
    set options(G) {
      this._option = G;
    }
    get options() {
      return this._option;
    }
    ngDoCheck() {
      this.optionsNorm = this.normalizeOptions(this.options);
      this.instanceConfigHolder.config = this.optionsNorm;
      this.tracker.load({
        busyList: this.optionsNorm.busy,
        delay: this.optionsNorm.delay,
        minDuration: this.optionsNorm.minDuration
      });
    }
    ngOnDestroy() {
      this.destroyComponents();
      this.onStartSubscription.unsubscribe();
      this.onStopSubscription.unsubscribe();
    }
    recreateBusyIfNecessary() {
      if (!this.busyRef || this.template !== this.optionsNorm.template || this.templateNgStyle !== this.optionsNorm.templateNgStyle) {
        this.destroyComponents();
        this.template = this.optionsNorm.template;
        this.templateNgStyle = this.optionsNorm.templateNgStyle;
        this.createBusy();
        this.busyEmitter.emit(this.isLoading);
      }
    }
    normalizeOptions(G) {
      if (G) {
        if (Array.isArray(G) || x(G) || G instanceof M.w0) {
          G = {
            busy: G
          };
        }
      } else {
        G = {
          busy: []
        };
      }
      G = Object.assign({}, this.configHolder.config, G);
      if (!Array.isArray(G.busy)) {
        G.busy = [G.busy];
      }
      return G;
    }
    destroyComponents() {
      if (this.busyRef) {
        this.busyRef.destroy();
      }
      if (this.componentViewRef) {
        this.appRef.detachView(this.componentViewRef);
      }
    }
    createBusy() {
      const G = this.resolver.resolveComponentFactory(X);
      const se = i.zs3.create({
        providers: [{
          provide: "instanceConfigHolder",
          useValue: this.instanceConfigHolder
        }, {
          provide: "busyEmitter",
          useValue: this.busyEmitter
        }],
        parent: this.injector
      });
      this.template = this.optionsNorm.template;
      this.busyRef = this.vcr.createComponent(G, 0, se, this.generateNgContent(se));
    }
    generateNgContent(G) {
      if (typeof this.template == "string") {
        return [[this.renderer.createText(this.template)]];
      }
      if (this.template instanceof i.Rgc) {
        return [this.template.createEmbeddedView({}).rootNodes];
      }
      const W = this.resolver.resolveComponentFactory(this.template).create(G);
      W.instance.templateNgStyle = this.options.templateNgStyle;
      this.componentViewRef = W.hostView;
      this.appRef.attachView(this.componentViewRef);
      return [[W.location.nativeElement]];
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)(i.Y36(B), i.Y36(L), i.Y36(i._Vd), i.Y36(U), i.Y36(i.z2F), i.Y36(i.s_b), i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(i.zs3));
  };
  q.ɵdir = i.lG2({
    type: q,
    selectors: [["", "ngBusy", ""]],
    inputs: {
      options: ["ngBusy", "options"]
    },
    outputs: {
      busyStart: "busyStart",
      busyStop: "busyStop"
    },
    features: [i._Bn([U, L])]
  });
  return q;
})();
export let E9 = (() => {
  class q {
    static forRoot(G) {
      return {
        ngModule: q,
        providers: [{
          provide: I,
          useValue: G
        }]
      };
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)();
  };
  q.ɵmod = i.oAB({
    type: q
  });
  q.ɵinj = i.cJS({
    providers: [B, U],
    imports: [t.ez]
  });
  return q;
})();