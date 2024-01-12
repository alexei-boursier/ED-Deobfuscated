import * as t from "94650";
export let x = (() => {
  class M {
    constructor(C) {
      this.modalService = C;
    }
    onClick(C) {
      const w = {
        typeContact: this.typeContact,
        listContact: this.listContact
      };
      const S = {
        id: this.modalService.getModalsCount() + 1,
        initialState: w
      };
      this.modalService.show(i.D, S);
      C.stopPropagation();
      C.preventDefault();
      return false;
    }
  }
  M.ɵfac = function (C) {
    return new (C || M)(t.Y36(b.tT));
  };
  M.ɵdir = t.lG2({
    type: M,
    selectors: [["", "edMessageTo", ""]],
    hostBindings: function (C, w) {
      if (C & 1) {
        t.NdJ("click", function (L) {
          return w.onClick(L);
        });
      }
    },
    inputs: {
      typeContact: "typeContact",
      listContact: "listContact"
    }
  });
  return M;
})();