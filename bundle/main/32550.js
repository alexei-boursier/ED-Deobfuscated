import * as i from "45007";
import * as t from "94650";
import * as b from "20388";
export let w = (() => {
  class C {
    constructor(S, L, I, E) {
      this.modalRef = S;
      this.modalService = L;
      this.router = I;
      this.uiService = E;
    }
    onUpdateSuccess(S) {
      if (this.origineAction === i.Mmy.CREATION_ASSOCIATION_COMPTE && Object.isExists(S) && S instanceof i.iuP) {
        this.modalService.setDismissReason(JSON.stringify({
          etat: "okCreation",
          compte: S
        }));
      } else if (this.origineAction === i.Mmy.CREATION_SIMPLE) {
        this.router.navigate(["/login"]).catch(() => console.error("ModalCreationCompteComponent navigate to /login"));
        this.uiService.notifyEvent(i.DOJ.genericSuccess, "Vous pouvez maintenant vous connecter avec vos nouveaux identifiants !", "Modifications effectuées", "fa fa-check");
      }
      this.modalRef.hide();
    }
    onCancel() {
      this.modalRef.hide();
    }
  }
  C.ɵfac = function (S) {
    return new (S || C)(t.Y36(b.UZ), t.Y36(b.tT), t.Y36(k.F0), t.Y36(i.VLf));
  };
  C.ɵcmp = t.Xpm({
    type: C,
    selectors: [["ed-modal-creation-compte"]],
    inputs: {
      utilisateurInfosPassword: "utilisateurInfosPassword",
      origineAction: "origineAction"
    },
    decls: 7,
    vars: 2,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body"], ["isInModal", "true", 3, "utilisateurInfosPassword", "origineAction", "updateSuccess", "cancel"]],
    template: function (S, L) {
      if (S & 1) {
        t.TgZ(0, "fieldset")(1, "div", 0)(2, "h3", 1);
        t._uU(3, "Personnalisation de votre identifiant et de votre mot de passe");
        t.qZA();
        t.TgZ(4, "button", 2);
        t.NdJ("click", function () {
          return L.modalRef.hide();
        });
        t.qZA()();
        t.TgZ(5, "div", 3)(6, "ed-account-personnalisation", 4);
        t.NdJ("updateSuccess", function (E) {
          return L.onUpdateSuccess(E);
        })("cancel", function () {
          return L.onCancel();
        });
        t.qZA()()();
      }
      if (S & 2) {
        t.xp6(6);
        t.Q6J("utilisateurInfosPassword", L.utilisateurInfosPassword)("origineAction", L.origineAction);
      }
    },
    dependencies: [M.K]
  });
  return C;
})();