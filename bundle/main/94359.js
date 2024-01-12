import * as i from "45007";
import * as M from "94650";
import * as w from "36895";
function E(F, Z) {
  if (F & 1) {
    M.TgZ(0, "p");
    M._uU(1);
    M.qZA();
  }
  if (F & 2) {
    const X = M.oxw();
    M.xp6(1);
    M.Oqu(X.sousTitre);
  }
}
function O(F, Z) {
  if (F & 1) {
    M.TgZ(0, "em");
    M._uU(1);
    M.qZA();
  }
  if (F & 2) {
    const X = M.oxw().$implicit;
    const le = M.oxw(2);
    M.xp6(1);
    M.hij("(Pour ", le.getPersonnePiece(X.idPersonne) + ")", "");
  }
}
function x(F, Z) {
  if (F & 1) {
    M.TgZ(0, "li");
    M._uU(1);
    M.YNc(2, O, 2, 1, "em", 4);
    M.qZA();
  }
  if (F & 2) {
    const X = Z.$implicit;
    const le = M.oxw(2);
    M.xp6(1);
    M.hij(" ", "- " + le.getLibellePiece(X.idPiece), " ");
    M.xp6(1);
    M.Q6J("ngIf", le.getPersonnePiece(X.idPersonne) !== "");
  }
}
function U(F, Z) {
  if (F & 1) {
    M.ynx(0);
    M.TgZ(1, "h4");
    M._uU(2, "Les pièces téléversées à signer");
    M.qZA();
    M.TgZ(3, "ul");
    M.YNc(4, x, 3, 2, "li", 16);
    M.ALo(5, "trackByProperty");
    M.qZA();
    M._UZ(6, "br");
    M.BQk();
  }
  if (F & 2) {
    const X = M.oxw();
    M.xp6(4);
    M.Q6J("ngForOf", X.piecesNoSigned)("ngForTrackBy", M.lcZ(5, 2, "$index"));
  }
}
export let a = (() => {
  class F {
    constructor(X, le, fe) {
      this.modalRef = X;
      this.authStore = le;
      this.loaderService = fe;
      this.titre = "Confirmation de signature";
      this.sousTitre = "";
      this.customMessage = "Pour valider <b>vos modifications</b>,";
      this.piecesNoSigned = [];
      this.pieces = [];
      this.personnes = [];
      this.avecChangementTelephone = false;
      this.onClose$ = new t.x();
    }
    ngOnInit() {
      if (!Array.isArray(this.contacts)) {
        this.contacts = [new i.eH4({
          idSignataire: this.authStore.currentUser.id,
          typeSignataire: this.authStore.currentUser.typeCompte,
          telephone: this.authStore.currentUser.profile.telPortable
        })];
        if (this.authStore.currentUser.profile.telPortableConjoint !== "") {
          this.contacts.push(new i.eH4({
            idSignataire: this.authStore.currentUser.id,
            typeSignataire: this.authStore.currentUser.typeCompte,
            telephone: this.authStore.currentUser.profile.telPortableConjoint
          }));
        }
      }
    }
    ngOnDestroy() {
      this.onClose$.complete();
      this.loaderService.hide(this);
    }
    onCodeSMSChanged(X) {
      this.loader = this.loaderService.show(this);
      this.send3DSecureAuth(X.codeSMS, X.signataire).pipe((0, b.b)(le => {
        if (le) {
          this.close(X.codeSMS);
        }
      }), (0, k.x)(() => this.loaderService.hide(this))).subscribe();
    }
    onCodeSMSLoading(X) {
      if (X) {
        this.loader = this.loaderService.show(this);
      } else {
        this.loaderService.hide(this);
      }
    }
    close(X = 0) {
      this.onClose$.next(X);
      this.modalRef.hide();
    }
    getLibellePiece(X) {
      const le = this.pieces.find(fe => fe.id === X);
      if (Object.isExists(le)) {
        return le.libelle;
      } else {
        return "";
      }
    }
    getPersonnePiece(X) {
      const le = this.personnes.find(fe => fe.id === X);
      if (Object.isExists(le)) {
        return le.prenom;
      } else {
        return "";
      }
    }
  }
  F.ɵfac = function (X) {
    return new (X || F)(M.Y36(v.UZ), M.Y36(i.CnD), M.Y36(C.S));
  };
  F.ɵcmp = M.Xpm({
    type: F,
    selectors: [["ed-auth-secure-modal"]],
    inputs: {
      titre: "titre",
      sousTitre: "sousTitre",
      customMessage: "customMessage",
      contacts: "contacts",
      piecesNoSigned: "piecesNoSigned",
      pieces: "pieces",
      personnes: "personnes",
      avecChangementTelephone: "avecChangementTelephone",
      send3DSecureAuth: "send3DSecureAuth"
    },
    decls: 26,
    vars: 9,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "clearfix"], [4, "ngIf"], [1, "signe", 3, "ngBusy"], [1, "modal-body", 2, "text-align", "justify"], [3, "contacts", "avecChangementTelephone", "codeSMSChange", "codeSMSloading"], ["authSecure", ""], ["id", "description", 1, "margin-bottom-20"], ["descriptionContent", ""], [3, "innerHTML"], ["id", "formButtons", 1, "margin-top-20"], [1, "control-group", "boutonsJustif"], ["id", "button1id", "type", "submit", "name", "button1id", 1, "btn", "btn-success", "float-end", 3, "disabled"], ["id", "button2id", "type", "button", "name", "button2id", 1, "btn", "btn-danger", "float-start", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"]],
    template: function (X, le) {
      if (X & 1) {
        M.TgZ(0, "div", 0)(1, "h3", 1);
        M._uU(2);
        M.qZA();
        M.TgZ(3, "button", 2);
        M.NdJ("click", function () {
          return le.close();
        });
        M.qZA();
        M._UZ(4, "div", 3);
        M.YNc(5, E, 2, 1, "p", 4);
        M.qZA();
        M.TgZ(6, "div", 5)(7, "div", 6)(8, "ed-auth-secure", 7, 8);
        M.NdJ("codeSMSChange", function (q) {
          return le.onCodeSMSChanged(q);
        })("codeSMSloading", function (q) {
          return le.onCodeSMSLoading(q);
        });
        M.TgZ(10, "div", 9, 10);
        M.YNc(12, U, 7, 4, "ng-container", 4);
        M.TgZ(13, "p");
        M._UZ(14, "span", 11);
        M._uU(15, " nous vous demandons de ");
        M.TgZ(16, "b");
        M._uU(17, "confirmer votre identité par SMS");
        M.qZA();
        M._uU(18, " via le bouton 'Authentification' ci-dessous ");
        M.qZA()();
        M.TgZ(19, "div", 12)(20, "div", 13)(21, "button", 14);
        M._uU(22);
        M.qZA();
        M.TgZ(23, "button", 15);
        M.NdJ("click", function () {
          return le.close();
        });
        M._uU(24, "Annuler");
        M.qZA()();
        M._UZ(25, "div", 3);
        M.qZA()()()();
      }
      if (X & 2) {
        const fe = M.MAs(9);
        M.xp6(2);
        M.Oqu(le.titre);
        M.xp6(3);
        M.Q6J("ngIf", le.sousTitre !== "");
        M.xp6(1);
        M.Q6J("ngBusy", le.loader);
        M.xp6(2);
        M.Q6J("contacts", le.contacts)("avecChangementTelephone", le.avecChangementTelephone);
        M.xp6(4);
        M.Q6J("ngIf", le.piecesNoSigned.length > 0 && le.authStore.isFamille());
        M.xp6(2);
        M.Q6J("innerHTML", le.customMessage, M.oJD);
        M.xp6(7);
        M.Q6J("disabled", fe.etape === 2 && fe.D3SecureForm.invalid);
        M.xp6(1);
        M.hij(" ", fe.etape === 1 ? "Authentification" : "Confirmer", " ");
      }
    },
    dependencies: [w.sg, w.O5, S.DC, L.p, I.$]
  });
  return F;
})();