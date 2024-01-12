import * as i from "94650";
export let j = (() => {
  class k extends (0, t.kCV)() {
    constructor(v) {
      super();
      this._el = v;
      this.spiedTags = [];
      this.sectionChange = new i.vpe();
      this.onScroll = () => {
        let C;
        const w = this._el.nativeElement.children;
        const S = window.scrollY;
        for (let L = 0; L < w.length; L++) {
          const I = w[L];
          if (this.spiedTags.some(E => E === I.tagName) && I.offsetTop <= S) {
            C = I.id;
          }
        }
        if (C !== this.currentSection) {
          this.currentSection = C;
          this.sectionChange.emit(this.currentSection);
        }
      };
    }
    ngOnInit() {
      window.addEventListener("scroll", this.onScroll, true);
    }
    ngOnDestroy() {
      window.removeEventListener("scroll", this.onScroll, true);
      return super.ngOnDestroy();
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)(i.Y36(i.SBq));
  };
  k.ɵdir = i.lG2({
    type: k,
    selectors: [["", "edScrollSpy", ""]],
    inputs: {
      spiedTags: "spiedTags"
    },
    outputs: {
      sectionChange: "sectionChange"
    },
    features: [i.qOj]
  });
  return k;
})();