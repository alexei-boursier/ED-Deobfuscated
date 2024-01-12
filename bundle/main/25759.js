import * as _t from "18505";
import * as b from "82722";
import * as k from "95715";
import * as v from "94650";
export let t = (() => {
  class L extends (0, M.kCV)() {
    constructor(E, O, x, U) {
      super();
      this.router = E;
      this.activatedRoute = O;
      this.tab = x;
      this.location = U;
      this.tabRouterLink = "";
    }
    ngOnInit() {
      if (this.router.url.includes(this.tabRouterLink)) {
        this.tab.active = true;
      }
      this.router.events.pipe((0, i.h)(E => E instanceof k.m2), (0, _t.b)(() => {
        if (this.location.path().includes(this.tabRouterLink)) {
          this.tab.active = true;
        }
      }), (0, b.R)(this.componentDestroyed$)).subscribe();
    }
    ngOnChanges() {
      this.tab.selectTab.pipe((0, _t.b)(() => {
        this._changeRoute(this.tabRouterLink);
      }), (0, b.R)(this.componentDestroyed$)).subscribe();
    }
    _changeRoute(E) {
      this.router.navigate([E], {
        relativeTo: this.activatedRoute
      }).catch(() => console.error("impossible"));
    }
  }
  L.ɵfac = function (E) {
    return new (E || L)(v.Y36(k.F0), v.Y36(k.gz), v.Y36(C.wW), v.Y36(w.Ye));
  };
  L.ɵdir = v.lG2({
    type: L,
    selectors: [["", "edTabRouterLink", ""]],
    inputs: {
      tabRouterLink: ["edTabRouterLink", "tabRouterLink"]
    },
    features: [v.qOj, v.TTD]
  });
  return L;
})();