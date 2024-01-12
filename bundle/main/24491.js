import * as i from "94650";
import * as t from "61135";
import * as b from "77579";
import * as v from "25403";
const w = {
  leading: true,
  trailing: false
};
function I(G, se = k.z, W = w) {
  const Pe = (0, L.H)(G, se);
  return function S(G, se = w) {
    return (0, M.e)((W, Pe) => {
      const {
        leading: Le,
        trailing: he
      } = se;
      let pe = false;
      let re = null;
      let Re = null;
      let Ge = false;
      const Ue = () => {
        Re?.unsubscribe();
        Re = null;
        if (he) {
          rt();
          if (Ge) {
            Pe.complete();
          }
        }
      };
      const ot = () => {
        Re = null;
        if (Ge) {
          Pe.complete();
        }
      };
      const st = Oe => Re = (0, C.Xf)(G(Oe)).subscribe((0, v.x)(Pe, Ue, ot));
      const rt = () => {
        if (pe) {
          pe = false;
          const Oe = re;
          re = null;
          Pe.next(Oe);
          if (!Ge) {
            st(Oe);
          }
        }
      };
      W.subscribe((0, v.x)(Pe, Oe => {
        pe = true;
        re = Oe;
        if (!Re || Re.closed) {
          if (Le) {
            rt();
          } else {
            st(Oe);
          }
        }
      }, () => {
        Ge = true;
        if (!he || !pe || !Re || Re.closed) {
          Pe.complete();
        }
      }));
    });
  }(() => Pe, W);
}
import * as E from "66406";
import * as O from "13099";
import * as B from "89635";
import * as Z from "36895";
import * as fe from "82722";
export let z = (() => {
  class G {
    constructor(W, Pe) {
      this.stickyElement = W;
      this.platformId = Pe;
      this.filterGate = false;
      this.marginTop$ = new t.X(0);
      this.marginBottom$ = new t.X(0);
      this.enable$ = new t.X(true);
      this.auditTime = 0;
      this.sticky = false;
      this.isSticky = false;
      this.boundaryReached = false;
      this.upperBoundReached = false;
      this.stickyStatus = new i.vpe();
      this.stickyPosition = new i.vpe();
      this.scroll$ = new b.x();
      this.target = this.getScrollTarget();
      this.resize$ = new b.x();
      this.extraordinaryChange$ = new t.X(undefined);
      this.componentDestroyed = new b.x();
      this.listener = Le => {
        const he = Le.target.scrollTop || window.scrollY;
        this.scroll$.next(he);
      };
      this.scrollThrottled$ = this.scroll$.pipe(I(0, E.Z), (0, O.B)());
      this.resizeThrottled$ = this.resize$.pipe(I(0, E.Z), (0, X.O)(null), (0, O.B)());
      this.status$ = (0, x.a)([this.enable$, this.scrollThrottled$, this.marginTop$, this.marginBottom$, this.extraordinaryChange$, this.resizeThrottled$]).pipe((0, le.h)(([Le]) => this.checkEnabled(Le)), (0, U.U)(([Le, he, pe, re]) => this.determineStatus(this.determineElementOffsets(), he, pe, re, Le)), (0, O.B)());
    }
    set marginTop(W) {
      this.marginTop$.next(W);
    }
    set marginBottom(W) {
      this.marginBottom$.next(W);
    }
    set enable(W) {
      this.enable$.next(W);
    }
    ngAfterViewInit() {
      const W = this.scrollContainer ? (0, B.z)((0, fe.R)(this.componentDestroyed)) : (0, B.z)((0, F.e)(this.auditTime), (0, fe.R)(this.componentDestroyed));
      this.status$.pipe(W).subscribe(Pe => {
        this.setSticky(Pe);
        this.setStatus(Pe);
      });
    }
    recalculate() {
      if ((0, Z.NF)(this.platformId)) {
        setTimeout(() => {
          this.extraordinaryChange$.next(undefined);
        }, 0);
      }
    }
    checkEnabled(W) {
      return !!(0, Z.NF)(this.platformId) && !(W ? (this.filterGate = false, 0) : this.filterGate || (this.filterGate = true, 0));
    }
    onWindowResize() {
      if ((0, Z.NF)(this.platformId)) {
        this.resize$.next();
      }
    }
    setupListener() {
      if ((0, Z.NF)(this.platformId)) {
        this.getScrollTarget().addEventListener("scroll", this.listener);
      }
    }
    ngOnInit() {
      this.setupListener();
    }
    ngOnDestroy() {
      this.target.removeEventListener("scroll", this.listener);
      this.componentDestroyed.next();
    }
    getScrollTarget() {
      let W;
      if (this.scrollContainer && typeof this.scrollContainer == "string") {
        W = document.querySelector(this.scrollContainer);
        this.marginTop$.next(Infinity);
        this.auditTime = 0;
      } else if (this.scrollContainer && this.scrollContainer instanceof HTMLElement) {
        W = this.scrollContainer;
        this.marginTop$.next(Infinity);
        this.auditTime = 0;
      } else {
        W = window;
      }
      return W;
    }
    getComputedStyle(W) {
      return W.getBoundingClientRect();
    }
    determineStatus(W, Pe, Le, he, pe) {
      const re = this.determineElementOffsets();
      let Re = pe && Pe > W.offsetY;
      if (Pe < re.offsetY) {
        Re = false;
      }
      const Ge = this.getComputedStyle(this.stickyElement.nativeElement).height;
      const Ue = this.boundaryElement != null ? this.boundaryElement && window.scrollY + Ge + he >= W.bottomBoundary - Le : undefined;
      const ot = this.boundaryElement != null ? window.scrollY < this.boundaryElement.offsetTop + Le : undefined;
      this.stickyPosition.emit({
        ...re,
        upperScreenEdgeAt: Pe,
        marginBottom: he,
        marginTop: Le
      });
      return {
        isSticky: Re,
        reachedUpperEdge: ot,
        reachedLowerEdge: Ue
      };
    }
    determineElementOffsets() {
      if (this.sticky) {
        this.removeSticky();
      }
      let W = null;
      if (this.boundaryElement) {
        W = this.getComputedStyle(this.boundaryElement).height + j(this.boundaryElement).y;
      }
      return {
        offsetY: j(this.stickyElement.nativeElement).y - this.marginTop$.value,
        bottomBoundary: W
      };
    }
    makeSticky(W = false, Pe, Le) {
      const {
        width: he,
        height: pe,
        left: re
      } = this.getComputedStyle(this.stickyElement.nativeElement);
      const Re = W ? this.getComputedStyle(this.boundaryElement).bottom - pe - this.marginBottom$.value : this.marginTop$.value;
      if (this.scrollContainer && !this.sticky) {
        this.stickyElement.nativeElement.style.position = "sticky";
        this.stickyElement.nativeElement.style.top = "0px";
        this.sticky = true;
      } else {
        this.stickyElement.nativeElement.style.position = "fixed";
        this.stickyElement.nativeElement.style.top = Re + "px";
        this.stickyElement.nativeElement.style.left = re + "px";
        this.stickyElement.nativeElement.style.width = `${he}px`;
      }
      if (this.spacerElement) {
        this.spacerElement.style.height = `${Le + pe + Pe}px`;
      }
    }
    setSticky(W) {
      if (W.isSticky) {
        if (this.upperBoundReached) {
          this.removeSticky();
          this.isSticky = false;
        } else {
          this.makeSticky(W.reachedLowerEdge, W.marginTop, W.marginBottom);
          this.isSticky = true;
        }
      } else {
        this.removeSticky();
      }
    }
    setStatus(W) {
      this.upperBoundReached = W.reachedUpperEdge;
      this.boundaryReached = W.reachedLowerEdge;
      this.stickyStatus.next(W);
    }
    removeSticky() {
      this.boundaryReached = false;
      this.sticky = false;
      this.stickyElement.nativeElement.style.position = "";
      this.stickyElement.nativeElement.style.width = "auto";
      this.stickyElement.nativeElement.style.left = "auto";
      this.stickyElement.nativeElement.style.top = "auto";
      if (this.spacerElement) {
        this.spacerElement.style.height = "0";
      }
    }
  }
  G.ɵfac = function (W) {
    return new (W || G)(i.Y36(i.SBq), i.Y36(i.Lbi));
  };
  G.ɵdir = i.lG2({
    type: G,
    selectors: [["", "edSticky", ""]],
    hostVars: 6,
    hostBindings: function (W, Pe) {
      if (W & 1) {
        i.NdJ("resize", function () {
          return Pe.onWindowResize();
        }, false, i.Jf7);
      }
      if (W & 2) {
        i.ekj("is-sticky", Pe.isSticky)("boundary-reached", Pe.boundaryReached)("upper-bound-reached", Pe.upperBoundReached);
      }
    },
    inputs: {
      scrollContainer: "scrollContainer",
      auditTime: "auditTime",
      marginTop: "marginTop",
      marginBottom: "marginBottom",
      enable: "enable",
      spacerElement: "spacerElement",
      boundaryElement: "boundaryElement"
    },
    outputs: {
      stickyStatus: "stickyStatus",
      stickyPosition: "stickyPosition"
    }
  });
  return G;
})();
function j(G) {
  let se = 0;
  let W = 0;
  let Pe = G;
  do {
    se += Pe.offsetTop || 0;
    W += Pe.offsetLeft || 0;
    Pe = Pe.offsetParent;
  } while (Pe);
  return {
    y: se,
    x: W
  };
}