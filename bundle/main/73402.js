import * as t from "94650";
export let B = (() => {
  class M {
    constructor(C) {
      this.modalService = C;
    }
    onClick(C) {
      const w = {
        eleve: this.eleve
      };
      const S = {
        id: this.modalService.getModalsCount() + 1,
        keyboard: false,
        ignoreBackdropClick: true,
        initialState: w,
        class: "modal-lg"
      };
      this.modalService.show(i.l, S);
      C.stopPropagation();
      return false;
    }
  }
  M.ɵfac = function (C) {
    return new (C || M)(t.Y36(b.tT));
  };
  M.ɵdir = t.lG2({
    type: M,
    selectors: [["", "edOpenEmploiDuTempsEleve", ""]],
    hostBindings: function (C, w) {
      if (C & 1) {
        t.NdJ("click", function (L) {
          return w.onClick(L);
        });
      }
    },
    inputs: {
      eleve: "eleve"
    }
  });
  return M;
})();