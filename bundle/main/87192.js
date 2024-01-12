import * as i from "52497";
import * as t from "45007";
import * as b from "94650";
import * as k from "20388";
const v = function (w, S, L, I, E) {
  return {
    "btn-warning": w,
    "btn-primary": S,
    "float-start": L,
    "float-end": I,
    "margin-whitespace": E
  };
};
export let z = (() => {
  class w {
    constructor(L, I) {
      this.modalService = L;
      this.modalRef = I;
      this.invertButtons = false;
      this.isLastChance = false;
    }
    ngOnInit() {
      this.warningButton = typeof this.warningButton !== "undefined" ? this.warningButton : "CANCEL";
      this.btnConfirm = typeof this.btnConfirm !== "undefined" ? this.btnConfirm : "Oui";
      this.btnCancel = typeof this.btnCancel !== "undefined" ? this.btnCancel : "Non";
    }
    okFn() {
      if (t.FSr.isNotEmptyString(this.lastChanceMessage) && !this.isLastChance) {
        this.isLastChance = true;
      } else {
        this.modalService.setDismissReason(i.G.validation);
        this.modalRef.hide();
      }
    }
    cancelFn() {
      this.modalService.setDismissReason(i.G.cancel);
      this.modalRef.hide();
    }
  }
  w.ɵfac = function (L) {
    return new (L || w)(b.Y36(k.tT), b.Y36(k.UZ));
  };
  w.ɵcmp = b.Xpm({
    type: w,
    selectors: [["ed-confirm-modal"]],
    inputs: {
      title: "title",
      message: "message",
      lastChanceMessage: "lastChanceMessage",
      btnConfirm: "btnConfirm",
      btnCancel: "btnCancel",
      warningButton: "warningButton",
      invertButtons: "invertButtons"
    },
    decls: 11,
    vars: 20,
    consts: [[1, "modal-header"], [1, "modal-title", 3, "innerHTML"], [1, "modal-body"], [3, "innerHTML"], [1, "modal-footer"], [1, "w-100"], ["type", "button", 1, "btn", 3, "ngClass", "click"]],
    template: function (L, I) {
      if (L & 1) {
        b.TgZ(0, "div", 0);
        b._UZ(1, "h3", 1);
        b.qZA();
        b.TgZ(2, "div", 2);
        b._UZ(3, "p", 3);
        b.ALo(4, "nl2br");
        b.qZA();
        b.TgZ(5, "div", 4)(6, "div", 5)(7, "button", 6);
        b.NdJ("click", function () {
          return I.cancelFn();
        });
        b._uU(8);
        b.qZA();
        b.TgZ(9, "button", 6);
        b.NdJ("click", function () {
          return I.okFn();
        });
        b._uU(10);
        b.qZA()()();
      }
      if (L & 2) {
        b.xp6(1);
        b.Q6J("innerHTML", I.title, b.oJD);
        b.xp6(2);
        b.Q6J("innerHTML", b.lcZ(4, 6, I.isLastChance ? I.lastChanceMessage : I.message), b.oJD);
        b.xp6(4);
        b.Q6J("ngClass", b.qbA(8, v, I.warningButton === "CANCEL", I.warningButton !== "CANCEL", !I.invertButtons, I.invertButtons, I.invertButtons));
        b.xp6(1);
        b.hij(" ", I.btnCancel, " ");
        b.xp6(1);
        b.Q6J("ngClass", b.qbA(14, v, I.warningButton !== "CANCEL", I.warningButton === "CANCEL", I.invertButtons, !I.invertButtons, !I.invertButtons));
        b.xp6(1);
        b.hij(" ", I.btnConfirm, " ");
      }
    },
    dependencies: [M.mk, t.kM_],
    styles: [".modal-body[_ngcontent-%COMP%]{word-break:break-word}"]
  });
  return w;
})();