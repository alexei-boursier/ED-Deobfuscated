import * as i from "37340";
import * as t from "94650";
const b = "400ms cubic-bezier(0.4,0.0,0.2,1)";
const k = [(0, i.oB)({
  height: 0,
  visibility: "hidden"
}), (0, i.jt)(b, (0, i.oB)({
  height: "*",
  visibility: "visible"
}))];
const M = [(0, i.oB)({
  height: "*",
  visibility: "visible"
}), (0, i.jt)(b, (0, i.oB)({
  height: 0,
  visibility: "hidden"
}))];
export let Y = (() => {
  class w {
    constructor(L, I, E) {
      this._el = L;
      this._renderer = I;
      this.collapsed = new t.vpe();
      this.collapses = new t.vpe();
      this.expanded = new t.vpe();
      this.expands = new t.vpe();
      this.isExpanded = true;
      this.collapseNewValue = true;
      this.isCollapsed = false;
      this.isCollapse = true;
      this.isCollapsing = false;
      this.isAnimated = false;
      this._display = "block";
      this._stylesLoaded = false;
      this._COLLAPSE_ACTION_NAME = "collapse";
      this._EXPAND_ACTION_NAME = "expand";
      this._factoryCollapseAnimation = E.build(M);
      this._factoryExpandAnimation = E.build(k);
    }
    set display(L) {
      this._display = L;
      if (L !== "none") {
        if (this.isAnimated) {
          this.toggle();
        } else {
          this.show();
        }
      } else {
        this.hide();
      }
    }
    set collapse(L) {
      this.collapseNewValue = L;
      if (!this._player || this._isAnimationDone) {
        this.isExpanded = L;
        this.toggle();
      }
    }
    get collapse() {
      return this.isExpanded;
    }
    ngAfterViewChecked() {
      this._stylesLoaded = true;
      if (this._player && this._isAnimationDone) {
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, "height", "*");
      }
    }
    toggle() {
      if (this.isExpanded) {
        this.hide();
      } else {
        this.show();
      }
    }
    hide() {
      this.isCollapsing = true;
      this.isExpanded = false;
      this.isCollapsed = true;
      this.isCollapsing = false;
      this.collapses.emit(this);
      this._isAnimationDone = false;
      this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
        this._isAnimationDone = true;
        if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
          this.show();
        } else {
          this.collapsed.emit(this);
          this._renderer.setStyle(this._el.nativeElement, "display", "none");
        }
      });
    }
    show() {
      this._renderer.setStyle(this._el.nativeElement, "display", this._display);
      this.isCollapsing = true;
      this.isExpanded = true;
      this.isCollapsed = false;
      this.isCollapsing = false;
      this.expands.emit(this);
      this._isAnimationDone = false;
      this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
        this._isAnimationDone = true;
        if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
          this.hide();
        } else {
          this.expanded.emit(this);
          this._renderer.removeStyle(this._el.nativeElement, "overflow");
        }
      });
    }
    animationRun(L, I) {
      if (!L || !this._stylesLoaded) {
        return O => O();
      }
      this._renderer.setStyle(this._el.nativeElement, "overflow", "hidden");
      this._renderer.addClass(this._el.nativeElement, "collapse");
      const E = I === this._EXPAND_ACTION_NAME ? this._factoryExpandAnimation : this._factoryCollapseAnimation;
      if (this._player) {
        this._player.reset();
      }
      this._player = E.create(this._el.nativeElement);
      this._player.play();
      return O => {
        var x;
        if ((x = this._player) === null || x === undefined) {
          return undefined;
        } else {
          return x.onDone(O);
        }
      };
    }
  }
  w.ɵfac = function (L) {
    return new (L || w)(t.Y36(t.SBq), t.Y36(t.Qsj), t.Y36(i._j));
  };
  w.ɵdir = t.lG2({
    type: w,
    selectors: [["", "collapse", ""]],
    hostVars: 9,
    hostBindings: function (L, I) {
      if (L & 2) {
        t.uIk("aria-hidden", I.isCollapsed);
        t.ekj("collapse", I.isCollapse)("in", I.isExpanded)("show", I.isExpanded)("collapsing", I.isCollapsing);
      }
    },
    inputs: {
      display: "display",
      isAnimated: "isAnimated",
      collapse: "collapse"
    },
    outputs: {
      collapsed: "collapsed",
      collapses: "collapses",
      expanded: "expanded",
      expands: "expands"
    },
    exportAs: ["bs-collapse"]
  });
  return w;
})();
export let f = (() => {
  class w {
    static forRoot() {
      return {
        ngModule: w,
        providers: []
      };
    }
  }
  w.ɵfac = function (L) {
    return new (L || w)();
  };
  w.ɵmod = t.oAB({
    type: w
  });
  w.ɵinj = t.cJS({});
  return w;
})();