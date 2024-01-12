import * as i from "94650";
import * as t from "24006";
import * as k from "45007";
import * as w from "71884";
import * as S from "18505";
import * as L from "82722";
import * as E from "63900";
import * as B from "36895";
import * as Z from "81058";
function q(pe, re) {
  if (pe & 1) {
    i.TgZ(0, "div", 38);
    i._UZ(1, "br");
    i.TgZ(2, "span", 39);
    i._uU(3, "Ce nom d'utilisateur est déjà utilisé. Veuillez en choisir un autre");
    i.qZA()();
  }
}
function j(pe, re) {
  if (pe & 1) {
    i.TgZ(0, "span", 39);
    i._uU(1);
    i.qZA();
  }
  if (pe & 2) {
    const Re = i.oxw();
    i.xp6(1);
    i.Oqu(Re.getLibelleErreurMdp());
  }
}
function G(pe, re) {
  if (pe & 1) {
    i.TgZ(0, "span", 39);
    i._uU(1, "La longueur du mot de passe est limitée à 50 caractères.");
    i.qZA();
  }
}
function se(pe, re) {
  if (pe & 1) {
    i.TgZ(0, "option", 40);
    i._uU(1);
    i.qZA();
  }
  if (pe & 2) {
    const Re = re.$implicit;
    i.Q6J("value", Re);
    i.xp6(1);
    i.Oqu(Re);
  }
}
const W = function (pe) {
  return {
    "has-error": pe
  };
};
function Pe(pe, re) {
  if (pe & 1) {
    i.TgZ(0, "div", 6)(1, "label", 41);
    i._uU(2, "Saisissez votre question *");
    i.qZA();
    i.TgZ(3, "div");
    i._UZ(4, "input", 42);
    i.qZA()();
  }
  if (pe & 2) {
    const Re = i.oxw();
    i.Q6J("ngClass", i.VKq(7, W, Re.formCompte.controls.autreQuestionSecrete.invalid));
    i.xp6(1);
    i.Tol(Re.cssLabel);
    i.xp6(2);
    i.Tol(Re.cssControl);
  }
}
const Le = function (pe, re) {
  return {
    "has-error": pe,
    "has-success": re
  };
};
export let K = (() => {
  class pe extends (0, k.kCV)() {
    constructor(Re, Ge, Ue, ot, st) {
      super();
      this.authService = Re;
      this.uiService = Ge;
      this.loaderService = Ue;
      this.formBuilder = ot;
      this.cd = st;
      this.isInModal = false;
      this.updateSuccess = new i.vpe();
      this.cancel = new i.vpe();
      this.isPasswordVisible = false;
      this.isPasswordConfirmVisible = false;
      this.formCompte = this.formBuilder.group({
        identifiant: new t.NI("", t.kI.required),
        nouveauMotDePasse: new t.NI(""),
        confirmationMotDePasse: new t.NI(""),
        email: new t.NI("", t.kI.required),
        portable: new t.NI(""),
        questionSecrete: new t.NI(""),
        reponse: new t.NI("", t.kI.required)
      });
      this.formCompte.controls.questionSecrete.valueChanges.pipe((0, w.x)(), (0, S.b)(rt => {
        if (rt === "Autre") {
          this.formCompte.setControl("autreQuestionSecrete", new t.NI(this.utilisateurInfosPassword.autreQuestionSecrete || "", t.kI.required));
        } else {
          this.formCompte.removeControl("autreQuestionSecrete");
        }
      }), (0, L.R)(this.componentDestroyed$)).subscribe();
      this.formCompte.controls.nouveauMotDePasse.valueChanges.pipe((0, I.b)(500), (0, w.x)(), (0, S.b)(rt => {
        this.cd.detectChanges();
      }), (0, L.R)(this.componentDestroyed$)).subscribe();
    }
    get cssLabel() {
      if (this.isInModal) {
        return "col-lg-10 form-label";
      } else {
        return "col-lg-3 col-form-label";
      }
    }
    get cssControl() {
      if (this.isInModal) {
        return "col-lg-10";
      } else {
        return "col-lg-5";
      }
    }
    ngOnInit() {
      this.formCompte.addValidators(this.mdpValidator());
    }
    checkMDPValid() {
      return M.h.comparePwd(this.formCompte.controls.nouveauMotDePasse.value, this.formCompte.controls.confirmationMotDePasse.value) && !this.mdpTooLong();
    }
    mdpTooLong() {
      return this.formCompte.controls.nouveauMotDePasse.value.length > 50;
    }
    mdpValidator() {
      return Re => this.origineAction === k.Mmy.CREATION_SIMPLE || this.origineAction === k.Mmy.CREATION_ASSOCIATION_COMPTE ? k.FSr.isNotEmptyString(Re.get("nouveauMotDePasse").value) && this.checkMDPValid() ? null : {
        badMdp: true
      } : this.checkMDPValid() ? null : {
        badMdp: true
      };
    }
    ngOnChanges(Re) {
      if (Re.utilisateurInfosPassword || Re.origineAction) {
        this.formCompte.patchValue({
          nouveauMotDePasse: "",
          confirmationMotDePasse: "",
          identifiant: this.origineAction === k.Mmy.UPDATE ? this.utilisateurInfosPassword.loginOrigine : "",
          email: this.utilisateurInfosPassword.email || "",
          portable: this.utilisateurInfosPassword.portable || "",
          questionSecrete: this.utilisateurInfosPassword.questionSecrete || "",
          reponse: this.utilisateurInfosPassword.reponse || ""
        });
        if (Object.isExists(this.formCompte.controls.autreQuestionSecrete)) {
          this.formCompte.controls.autreQuestionSecrete.setValue(this.utilisateurInfosPassword.autreQuestionSecrete || "");
        }
      }
    }
    cancelForm() {
      this.formCompte.patchValue({
        nouveauMotDePasse: "",
        confirmationMotDePasse: "",
        identifiant: this.origineAction === k.Mmy.UPDATE ? this.utilisateurInfosPassword.loginOrigine : "",
        email: this.utilisateurInfosPassword.email || "",
        portable: this.utilisateurInfosPassword.portable || "",
        questionSecrete: this.utilisateurInfosPassword.questionSecrete || "",
        reponse: this.utilisateurInfosPassword.reponse || ""
      });
      if (Object.isExists(this.formCompte.controls.autreQuestionSecrete)) {
        this.formCompte.controls.autreQuestionSecrete.setValue(this.utilisateurInfosPassword.autreQuestionSecrete || "");
      }
      this.cancel.emit(true);
    }
    save() {
      let Re;
      if (this.origineAction === k.Mmy.CREATION_SIMPLE) {
        Re = this.authService.doCreationCompte(this.formCompte.value, this.utilisateurInfosPassword.loginOrigine, this.utilisateurInfosPassword.motPasseOrigine);
      } else if (this.origineAction === k.Mmy.UPDATE) {
        Re = this.authService.doUpdateInfosAccount(this.formCompte.value);
      } else {
        if (this.origineAction !== k.Mmy.CREATION_ASSOCIATION_COMPTE) {
          return;
        }
        Re = this.authService.doLogin({
          identifiant: this.utilisateurInfosPassword.loginOrigine,
          motdepasse: this.utilisateurInfosPassword.motPasseOrigine,
          isReLogin: false
        }).pipe((0, E.w)(Ue => Object.isExists(Ue) && Ue instanceof k.lZ0 ? (this.utilisateurInfosPassword.loginOrigine = Ue.login, this.utilisateurInfosPassword.motPasseOrigine = Ue.motDePasse, this.authService.doCreationCompte(this.formCompte.value, this.utilisateurInfosPassword.loginOrigine, this.utilisateurInfosPassword.motPasseOrigine)) : (0, v._)(() => new k.FwQ("Erreur lors de la création de votre compte, merci de réessayer !", 517))), (0, E.w)(() => this.authService.associer({
          newIdentifiant: this.formCompte.value.identifiant,
          newPassword: this.formCompte.value.nouveauMotDePasse
        })));
      }
      this.loader = this.loaderService.show(this);
      Re.pipe((0, O.K)(Ge => {
        this.codeError = Ge.status;
        this.uiService.notifyError(Ge, true, "Echec lors de l'enregistrement");
        return C.E;
      }), (0, S.b)(Ge => {
        this.updateSuccess.emit(Ge);
      }), (0, x.x)(() => this.loaderService.hide(this))).subscribe();
    }
    getLibelleErreurMdp() {
      return b.V.getLibelleErreurMdp(this.utilisateurInfosPassword.niveauMdp);
    }
    showPassword(Re) {
      if (Re === 1) {
        this.isPasswordVisible = !this.isPasswordVisible;
      } else {
        this.isPasswordConfirmVisible = !this.isPasswordConfirmVisible;
      }
    }
  }
  pe.ɵfac = function (Re) {
    return new (Re || pe)(i.Y36(k.e80), i.Y36(k.VLf), i.Y36(U.S), i.Y36(t.qu), i.Y36(i.sBO));
  };
  pe.ɵcmp = i.Xpm({
    type: pe,
    selectors: [["ed-account-personnalisation"]],
    inputs: {
      utilisateurInfosPassword: "utilisateurInfosPassword",
      origineAction: "origineAction",
      isInModal: "isInModal"
    },
    outputs: {
      updateSuccess: "updateSuccess",
      cancel: "cancel"
    },
    features: [i.qOj, i.TTD],
    decls: 74,
    vars: 83,
    consts: [["id", "formCreationCompte", "name", "formCreationCompte", "novalidate", "", 3, "formGroup", "ngBusy", "ngSubmit"], [1, "row", 3, "ngClass"], ["for", "username"], ["id", "username", "name", "username", "type", "text", "placeholder", "", "formControlName", "identifiant", "required", "", 1, "form-control"], ["class", "clearfix", 4, "ngIf"], [1, "form-text"], [1, "row", "mt-3", 3, "ngClass"], ["for", "pass"], [1, "input-group"], ["aria-hidden", "true", 1, "input-group-text"], [1, "fa", "fa-lock"], ["id", "pass", "name", "pass", "placeholder", "****", "autocomplete", "new-password", "formControlName", "nouveauMotDePasse", "edMaxlength", "50", 1, "form-control", 3, "type"], [3, "controlToValidate", "niveauMDP"], ["controlName", "nouveauMotDePasse"], ["valError", "niveau"], ["valError", "maxlength"], [1, "col-lg-1"], ["type", "button", "aria-hidden", "true", "tabindex", "-1", 1, "btn", "no-background", "hov-transparent", "btn-secondary", 3, "click"], [1, "fa", "fa-eye"], ["for", "passConfirm"], ["id", "passConfirm", "name", "passConfirm", "placeholder", "****", "formControlName", "confirmationMotDePasse", "edMaxlength", "50", 1, "form-control", 3, "type"], ["for", "mailUser"], [1, "fa", "fa-at", "icone"], ["id", "mailUser", "name", "mailUser", "type", "text", "placeholder", "", "required", "", "pattern", "^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,15}$", "formControlName", "email", 1, "form-control"], ["for", "telUser"], [1, "input-group-text"], [1, "fa", "fa-mobile"], ["id", "telUser", "name", "telUser", "type", "text", "placeholder", "", "formControlName", "portable", 1, "form-control"], ["for", "selectbasic"], ["id", "selectbasic", "name", "selectbasic", "formControlName", "questionSecrete", "required", "", 1, "form-control", "form-select"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "row mt-3", 3, "ngClass", 4, "ngIf"], ["for", "reponse"], ["id", "reponse", "name", "reponse", "type", "text", "placeholder", "", "formControlName", "reponse", 1, "form-control"], [1, "row", "my-3"], ["for", "button1id"], ["type", "submit", "id", "button1id", "name", "button1id", "value", "Valider", 1, "btn", "btn-success", "float-end", 3, "disabled"], ["type", "button", "id", "button2id", "name", "button2id", 1, "btn", "btn-danger", "float-start", 3, "click"], [1, "clearfix"], [1, "form-text", "text-danger"], [3, "value"], ["for", "autreQuestion"], ["id", "autreQuestion", "name", "autreQuestion", "type", "text", "placeholder", "", "formControlName", "autreQuestionSecrete", "required", "", 1, "form-control"]],
    template: function (Re, Ge) {
      if (Re & 1) {
        i.TgZ(0, "form", 0);
        i.NdJ("ngSubmit", function () {
          return Ge.save();
        });
        i.TgZ(1, "div", 1)(2, "label", 2);
        i._uU(3, "Choisissez un nom d'utilisateur");
        i.qZA();
        i.TgZ(4, "div");
        i._UZ(5, "input", 3);
        i.YNc(6, q, 4, 0, "div", 4);
        i.TgZ(7, "span", 5);
        i._uU(8, "Attention aux Majuscules/Minuscules");
        i.qZA()()();
        i.TgZ(9, "div", 6)(10, "label", 7);
        i._uU(11, "Choisissez un mot de passe");
        i.qZA();
        i.TgZ(12, "div")(13, "div", 8)(14, "span", 9);
        i._UZ(15, "i", 10);
        i.qZA();
        i._UZ(16, "input", 11);
        i.qZA();
        i._UZ(17, "ed-password-strength-bar", 12);
        i.TgZ(18, "val-errors", 13);
        i.YNc(19, j, 2, 1, "ng-template", 14);
        i.YNc(20, G, 2, 0, "ng-template", 15);
        i.qZA()();
        i.TgZ(21, "div", 16)(22, "button", 17);
        i.NdJ("click", function () {
          return Ge.showPassword(1);
        });
        i._UZ(23, "i", 18);
        i.qZA()()();
        i.TgZ(24, "div", 6)(25, "label", 19);
        i._uU(26, "Confirmez le mot de passe");
        i.qZA();
        i.TgZ(27, "div")(28, "div", 8)(29, "span", 9);
        i._UZ(30, "i", 10);
        i.qZA();
        i._UZ(31, "input", 20);
        i.qZA()();
        i.TgZ(32, "div", 16)(33, "button", 17);
        i.NdJ("click", function () {
          return Ge.showPassword(2);
        });
        i._UZ(34, "i", 18);
        i.qZA()()();
        i.TgZ(35, "div", 6)(36, "label", 21);
        i._uU(37, "Adresse Email");
        i.qZA();
        i.TgZ(38, "div")(39, "div", 8)(40, "span", 9);
        i._UZ(41, "i", 22);
        i.qZA();
        i._UZ(42, "input", 23);
        i.qZA();
        i.TgZ(43, "span", 5);
        i._uU(44, "En cas d'oubli du mot de passe");
        i.qZA()()();
        i.TgZ(45, "div", 6)(46, "label", 24);
        i._uU(47, "Téléphone mobile (facultatif)");
        i.qZA();
        i.TgZ(48, "div")(49, "div", 8)(50, "span", 25);
        i._UZ(51, "i", 26);
        i.qZA();
        i._UZ(52, "input", 27);
        i.qZA();
        i.TgZ(53, "span", 5);
        i._uU(54, "En cas d'oubli du mot de passe");
        i.qZA()()();
        i.TgZ(55, "div", 6)(56, "label", 28);
        i._uU(57, "Question secrète");
        i.qZA();
        i.TgZ(58, "div")(59, "select", 29);
        i.YNc(60, se, 2, 2, "option", 30);
        i.ALo(61, "trackByProperty");
        i.qZA()()();
        i.YNc(62, Pe, 5, 9, "div", 31);
        i.TgZ(63, "div", 6)(64, "label", 32);
        i._uU(65, "Réponse");
        i.qZA();
        i.TgZ(66, "div");
        i._UZ(67, "input", 33);
        i.qZA()();
        i.TgZ(68, "div", 34);
        i._UZ(69, "label", 35);
        i.TgZ(70, "div");
        i._UZ(71, "input", 36);
        i.TgZ(72, "button", 37);
        i.NdJ("click", function () {
          return Ge.cancelForm();
        });
        i._uU(73, "Annuler");
        i.qZA()()()();
      }
      if (Re & 2) {
        i.Q6J("formGroup", Ge.formCompte)("ngBusy", Ge.loader);
        i.xp6(1);
        i.Q6J("ngClass", i.VKq(68, W, Ge.codeError === 235 || Ge.formCompte.controls.identifiant.invalid));
        i.xp6(1);
        i.Tol(Ge.cssLabel);
        i.xp6(2);
        i.Tol(Ge.cssControl);
        i.xp6(2);
        i.Q6J("ngIf", Ge.codeError === 235);
        i.xp6(3);
        i.Q6J("ngClass", i.VKq(70, W, Ge.formCompte.hasError("badMdp")));
        i.xp6(1);
        i.Tol(Ge.cssLabel);
        i.xp6(2);
        i.Tol(Ge.cssControl);
        i.xp6(4);
        i.Q6J("type", Ge.isPasswordVisible ? "text" : "password");
        i.xp6(1);
        i.Q6J("controlToValidate", Ge.formCompte.controls.nouveauMotDePasse)("niveauMDP", Ge.utilisateurInfosPassword.niveauMdp);
        i.xp6(7);
        i.Q6J("ngClass", i.WLB(72, Le, Ge.formCompte.controls.nouveauMotDePasse.value !== "" && Ge.formCompte.hasError("badMdp"), Ge.formCompte.controls.nouveauMotDePasse.value !== "" && !Ge.formCompte.hasError("badMdp")));
        i.xp6(1);
        i.Tol(Ge.cssLabel);
        i.xp6(2);
        i.Tol(Ge.cssControl);
        i.xp6(4);
        i.Q6J("type", Ge.isPasswordConfirmVisible ? "text" : "password");
        i.xp6(4);
        i.Q6J("ngClass", i.VKq(75, W, Ge.formCompte.controls.email.invalid));
        i.xp6(1);
        i.Tol(Ge.cssLabel);
        i.xp6(2);
        i.Tol(Ge.cssControl);
        i.xp6(7);
        i.Q6J("ngClass", i.VKq(77, W, Ge.formCompte.controls.portable.invalid));
        i.xp6(1);
        i.Tol(Ge.cssLabel);
        i.xp6(2);
        i.Tol(Ge.cssControl);
        i.xp6(7);
        i.Q6J("ngClass", i.VKq(79, W, Ge.formCompte.controls.questionSecrete.invalid));
        i.xp6(1);
        i.Tol(Ge.cssLabel);
        i.xp6(2);
        i.Tol(Ge.cssControl);
        i.xp6(2);
        i.Q6J("ngForOf", Ge.utilisateurInfosPassword.questionsPossibles)("ngForTrackBy", i.lcZ(61, 66, "$index"));
        i.xp6(2);
        i.Q6J("ngIf", Ge.formCompte.controls.autreQuestionSecrete);
        i.xp6(1);
        i.Q6J("ngClass", i.VKq(81, W, Ge.formCompte.controls.reponse.invalid));
        i.xp6(1);
        i.Tol(Ge.cssLabel);
        i.xp6(2);
        i.Tol(Ge.cssControl);
        i.xp6(3);
        i.Tol(Ge.cssLabel);
        i.xp6(1);
        i.Tol(Ge.cssControl);
        i.xp6(1);
        i.Q6J("disabled", Ge.formCompte.invalid);
      }
    },
    dependencies: [B.mk, B.sg, B.O5, t._Y, t.YN, t.Kr, t.Fj, t.EJ, t.JJ, t.JL, t.Q7, t.c5, t.sg, t.u, F.DC, Z.tM, Z.HY, X.v, le.I, fe.$],
    styles: [".input-group[_ngcontent-%COMP%]   #pass[_ngcontent-%COMP%]{border-radius:0 .5rem .5rem 0}"],
    changeDetection: 0
  });
  return pe;
})();