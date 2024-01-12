import _default2 from "92735";
import * as b from "94650";
export let w = (() => {
  class v {
    constructor(w) {
      this.sanitizer = w;
    }
    transform(w, S = false) {
      let L = ["iframe", "embed", "object"];
      let I = ["allow", "allowfullscreen", "frameborder", "scrolling", "data", "target"];
      if (S) {
        L = [];
        I = ["target"];
      }
      const E = _default2.sanitize(w, {
        USE_PROFILES: {
          html: true
        },
        ADD_TAGS: L,
        ADD_ATTR: I
      });
      return this.sanitizer.bypassSecurityTrustHtml(E);
    }
  }
  v.ɵfac = function (w) {
    return new (w || v)(b.Y36(k.H7, 16));
  };
  v.ɵpipe = b.Yjl({
    name: "filterHtml",
    type: v,
    pure: true
  });
  return v;
})();