import * as i from "94650";
export let y = (() => {
  class k {
    constructor(v) {
      this.sanitizer = v;
    }
    transform(v, C) {
      switch (C) {
        case "html":
          return this.sanitizer.bypassSecurityTrustHtml(v);
        case "style":
          return this.sanitizer.bypassSecurityTrustStyle(v);
        case "script":
          return this.sanitizer.bypassSecurityTrustScript(v);
        case "url":
          return this.sanitizer.bypassSecurityTrustUrl(v);
        case "resourceUrl":
          return this.sanitizer.bypassSecurityTrustResourceUrl(v);
        default:
          throw new Error(`Invalid safe type specified: ${C}`);
      }
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)(i.Y36(t.H7, 16));
  };
  k.ɵpipe = i.Yjl({
    name: "safe",
    type: k,
    pure: true
  });
  return k;
})();