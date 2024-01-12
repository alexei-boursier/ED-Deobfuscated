import * as t from "94650";
export let x = (() => {
  class M {
    constructor(C, w, S) {
      this.modalService = C;
      this.elementRef = w;
      this.renderer = S;
      this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
    }
    onClick(C) {
      const w = {
        idUser: this.userId,
        typeUser: this.userProfile,
        title: "Informations"
      };
      const S = {
        id: this.modalService.getModalsCount() + 1,
        initialState: w
      };
      this.modalService.show(i.S, S);
      C.preventDefault();
      return false;
    }
  }
  M.ɵfac = function (C) {
    return new (C || M)(t.Y36(b.tT), t.Y36(t.SBq), t.Y36(t.Qsj));
  };
  M.ɵdir = t.lG2({
    type: M,
    selectors: [["", "edUserDetail", ""]],
    hostBindings: function (C, w) {
      if (C & 1) {
        t.NdJ("click", function (L) {
          return w.onClick(L);
        });
      }
    },
    inputs: {
      userId: "userId",
      userProfile: "userProfile"
    }
  });
  return M;
})();