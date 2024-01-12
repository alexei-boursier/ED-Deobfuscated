import * as t from "45007";
import * as b from "94650";
export let R = (() => {
  class M {
    constructor(C, w, S) {
      this.credentialsStore = C;
      this.elementRef = w;
      this.renderer = S;
      this.target = "_blank";
    }
    ngOnInit() {
      if (!Object.isExists(this.needAuth) || typeof this.needAuth == "string" && !t.FSr.isNotEmptyString(this.needAuth)) {
        this.needAuth = true;
      }
    }
    onClick(C) {
      if (this.needAuth === true) {
        i.V.goToService(this.credentialsStore.snapshot.authToken, this.target, this.href, this.elementRef, this.renderer, this.queryParams);
        C.stopPropagation();
        C.preventDefault();
      } else {
        window.open(this.href, this.target, "noopener");
      }
      return false;
    }
  }
  M.ɵfac = function (C) {
    return new (C || M)(b.Y36(t.dSF), b.Y36(b.SBq), b.Y36(b.Qsj));
  };
  M.ɵdir = b.lG2({
    type: M,
    selectors: [["", "edGoToService", ""]],
    hostBindings: function (C, w) {
      if (C & 1) {
        b.NdJ("click", function (L) {
          return w.onClick(L);
        });
      }
    },
    inputs: {
      href: "href",
      target: "target",
      needAuth: "needAuth",
      queryParams: "queryParams"
    }
  });
  return M;
})();