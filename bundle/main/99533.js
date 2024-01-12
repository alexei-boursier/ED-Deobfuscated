import * as t from "94650";
export let L = (() => {
  class k {
    constructor(v, C) {
      this.element = v;
      this.cd = C;
      this._isDestroying = false;
      this.loading = false;
    }
    ngOnChanges(v) {
      if (!Object.isExists(this.compile)) {
        this.compile = true;
      }
      if (this.compile === true && (!Object.isExists(v.content) || v.content.currentValue !== v.content.previousValue)) {
        this.processMathjax();
      }
    }
    ngOnDestroy() {
      this._isDestroying = true;
    }
    processMathjax() {
      const v = this.element.nativeElement.innerHTML;
      if (!!i.FSr.isNotEmptyString(v) && v.search("math-tex") !== -1) {
        this.loading = !this._isDestroying;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement], () => {
          if (!this._isDestroying) {
            this.loading = false;
            this.cd.detectChanges();
          }
        });
      }
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)(t.Y36(t.SBq), t.Y36(t.sBO));
  };
  k.ɵdir = t.lG2({
    type: k,
    selectors: [["", "edMathjax", ""]],
    hostVars: 2,
    hostBindings: function (v, C) {
      if (v & 2) {
        t.ekj("loading-mathjax", C.loading);
      }
    },
    inputs: {
      compile: "compile",
      content: "content"
    },
    features: [t.TTD]
  });
  return k;
})();