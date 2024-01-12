import * as i from "24006";
import * as t from "52497";
import * as k from "94650";
import * as M from "20388";
import * as v from "36895";
function w(I, E) {
  if (I & 1) {
    k._UZ(0, "p", 12);
  }
  if (I & 2) {
    const O = k.oxw();
    k.Q6J("innerHTML", O.helpMessage, k.oJD);
  }
}
const S = function (I) {
  return {
    "has-error": I
  };
};
export let I = (() => {
  class I {
    constructor(O, x) {
      this.modalService = O;
      this.modalRef = x;
    }
    static afterClosed(O, x) {
      let U;
      try {
        U = JSON.parse(O);
      } catch {
        return;
      }
      if (U.reason !== t.G.validation) {
        return {
          saisie: "",
          reason: U.reason
        };
      }
      const B = U.data;
      const F = x || new RegExp(/[\\:/\*\?"<>|]/);
      const Z = F.toString().replace("/[", "").replace("]/", "").replace(/\\(.)/gm, "$1").replace(/(.)/gm, " $1");
      if (!b.FSr.isNotEmptyString(B, true) || F.test(B)) {
        return {
          saisie: B,
          error: "Nom invalide <br> caractères interdits " + Z
        };
      } else {
        return {
          saisie: B,
          reason: U.reason
        };
      }
    }
    ngOnInit() {
      this.promptForm = new i.cw({
        valeur: new i.NI(this.initialValue, i.kI.required)
      });
      if (Object.isExists(this.inputValidator) && typeof this.inputValidator == "function") {
        this.promptForm.get("valeur").addValidators(this.inputValidator);
      }
      this.btnConfirm = typeof this.btnConfirm !== "undefined" ? this.btnConfirm : "Valider";
      this.btnCancel = typeof this.btnCancel !== "undefined" ? this.btnCancel : "Annuler";
      this.helpMessage = typeof this.helpMessage !== "undefined" ? this.helpMessage : "";
    }
    get valeur() {
      return this.promptForm.get("valeur");
    }
    noValeurError() {
      return this.valeur.touched && this.valeur.hasError("required");
    }
    okFn() {
      if (!this.promptForm.invalid) {
        this.modalService.setDismissReason(JSON.stringify({
          reason: t.G.validation,
          data: this.valeur.value
        }));
        this.modalRef.hide();
      }
    }
    cancelFn() {
      this.modalService.setDismissReason(JSON.stringify({
        reason: t.G.cancel
      }));
      this.modalRef.hide();
    }
  }
  I.ɵfac = function (O) {
    return new (O || I)(k.Y36(M.tT), k.Y36(M.UZ));
  };
  I.ɵcmp = k.Xpm({
    type: I,
    selectors: [["ed-prompt-modal"]],
    inputs: {
      title: "title",
      message: "message",
      initialValue: "initialValue",
      btnConfirm: "btnConfirm",
      btnCancel: "btnCancel",
      helpMessage: "helpMessage",
      inputValidator: "inputValidator"
    },
    decls: 15,
    vars: 10,
    consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body", 3, "ngClass"], ["for", "valeur", 1, "form-label", 3, "innerHTML"], ["edAutofocus", "", "formControlName", "valeur", "id", "valeur", "required", "", "type", "text", 1, "form-control"], ["class", "form-text", 3, "innerHTML", 4, "ngIf"], [1, "modal-footer"], [1, "w-100"], ["type", "button", 1, "btn", "btn-warning", "float-start", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "float-end", 3, "disabled"], [1, "form-text", 3, "innerHTML"]],
    template: function (O, x) {
      if (O & 1) {
        k.TgZ(0, "form", 0);
        k.NdJ("ngSubmit", function () {
          return x.okFn();
        });
        k.TgZ(1, "div", 1)(2, "h3", 2);
        k._uU(3);
        k.qZA();
        k.TgZ(4, "button", 3);
        k.NdJ("click", function () {
          return x.modalRef.hide();
        });
        k.qZA()();
        k.TgZ(5, "div", 4);
        k._UZ(6, "label", 5)(7, "input", 6);
        k.YNc(8, w, 1, 1, "p", 7);
        k.qZA();
        k.TgZ(9, "div", 8)(10, "div", 9)(11, "button", 10);
        k.NdJ("click", function () {
          return x.cancelFn();
        });
        k._uU(12);
        k.qZA();
        k.TgZ(13, "button", 11);
        k._uU(14);
        k.qZA()()()();
      }
      if (O & 2) {
        k.Q6J("formGroup", x.promptForm);
        k.xp6(3);
        k.Oqu(x.title);
        k.xp6(2);
        k.Q6J("ngClass", k.VKq(8, S, x.noValeurError()));
        k.xp6(1);
        k.Q6J("innerHTML", x.message, k.oJD);
        k.xp6(2);
        k.Q6J("ngIf", x.helpMessage !== "");
        k.xp6(4);
        k.Oqu(x.btnCancel);
        k.xp6(1);
        k.Q6J("disabled", !x.promptForm.valid);
        k.xp6(1);
        k.Oqu(x.btnConfirm);
      }
    },
    dependencies: [v.mk, v.O5, i._Y, i.Fj, i.JJ, i.JL, i.Q7, i.sg, i.u, C.U],
    encapsulation: 2
  });
  return I;
})();