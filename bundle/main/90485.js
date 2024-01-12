import * as i from "94650";
export let o = (() => {
  class k {
    constructor(v, C) {
      this.el = v;
      this.router = C;
    }
    onClick(v) {
      const C = this.el.nativeElement.href;
      if (!!C) {
        this.router.navigate(["/externalRedirect", {
          externalUrl: C
        }], {
          skipLocationChange: true
        }).catch(() => console.error("ExternalUrlDirective navigate to /externalRedirect"));
        v.preventDefault();
      }
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)(i.Y36(i.SBq), i.Y36(t.F0));
  };
  k.ɵdir = i.lG2({
    type: k,
    selectors: [["a", "edExternalUrl", ""]],
    hostBindings: function (v, C) {
      if (v & 1) {
        i.NdJ("click", function (S) {
          return C.onClick(S);
        });
      }
    }
  });
  return k;
})();