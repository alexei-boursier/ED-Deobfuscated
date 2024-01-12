import * as t from "94650";
import * as b from "20388";
import * as k from "36895";
function v(L, I) {
  if (L & 1) {
    t.TgZ(0, "div")(1, "progressbar", 7)(2, "b");
    t._uU(3);
    t.qZA()()();
  }
  if (L & 2) {
    const E = I.ngIf;
    t.xp6(1);
    t.Q6J("value", E);
    t.xp6(2);
    t.hij("", E, "%");
  }
}
function C(L, I) {
  if (L & 1) {
    t.TgZ(0, "progressbar", 7);
    t._uU(1, " ");
    t.qZA();
  }
  if (L & 2) {
    t.Q6J("value", 100);
  }
}
function w(L, I) {
  if (L & 1) {
    const E = t.EpF();
    t.TgZ(0, "button", 8);
    t.NdJ("click", function () {
      t.CHM(E);
      const x = t.oxw();
      return t.KtG(x.cancelFn());
    });
    t._uU(1);
    t.qZA();
  }
  if (L & 2) {
    const E = t.oxw();
    t.xp6(1);
    t.Oqu(E.cancel);
  }
}
export let z = (() => {
  class L {
    constructor(E, O) {
      this.modalRef = E;
      this.modalService = O;
      this.enableCancel = true;
    }
    cancelFn() {
      this.modalService.setDismissReason(i.G.cancel);
      this.modalRef.hide();
    }
  }
  L.ɵfac = function (E) {
    return new (E || L)(t.Y36(b.UZ), t.Y36(b.tT));
  };
  L.ɵcmp = t.Xpm({
    type: L,
    selectors: [["ed-uploading-modal"]],
    inputs: {
      cancel: "cancel",
      title: "title",
      totalProgress$: "totalProgress$",
      enableCancel: "enableCancel"
    },
    decls: 12,
    vars: 6,
    consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [4, "ngIf", "ngIfElse"], ["noProgress", ""], [1, "modal-footer"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], [1, "progress", "progress-striped", "active", 3, "value"], [1, "btn", "btn-warning", 3, "click"]],
    template: function (E, O) {
      if (E & 1) {
        t.TgZ(0, "div", 0)(1, "h3", 1);
        t._uU(2);
        t.qZA()();
        t.TgZ(3, "div", 2)(4, "p");
        t._uU(5, "Téléversement en cours...");
        t.qZA();
        t.YNc(6, v, 4, 2, "div", 3);
        t.ALo(7, "async");
        t.YNc(8, C, 2, 1, "ng-template", null, 4, t.W1O);
        t.qZA();
        t.TgZ(10, "div", 5);
        t.YNc(11, w, 2, 1, "button", 6);
        t.qZA();
      }
      if (E & 2) {
        const x = t.MAs(9);
        t.xp6(2);
        t.Oqu(O.title);
        t.xp6(4);
        t.Q6J("ngIf", t.lcZ(7, 4, O.totalProgress$))("ngIfElse", x);
        t.xp6(5);
        t.Q6J("ngIf", O.enableCancel);
      }
    },
    dependencies: [k.O5, M.O1, k.Ov],
    changeDetection: 0
  });
  return L;
})();