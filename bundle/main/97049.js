import * as i from "94650";
import * as t from "45007";
import * as b from "95698";
import * as k from "18505";
import * as M from "24006";
import * as v from "71884";
import * as C from "82722";
import * as S from "77579";
import * as L from "20388";
let I = (() => {
  class Ue extends (0, t.kCV)() {
    constructor(st, rt) {
      super();
      this.modalRef = st;
      this.fb = rt;
      this.onClose$ = new S.x();
    }
    ngOnInit() {
      this.formParametrageVisio = this.fb.group({
        guestPolicy: new M.NI({
          value: this.parametrageVisio.guestPolicy === "ASK_MODERATOR",
          disabled: false
        }),
        lockSettingsLockOnJoin: new M.NI(this.parametrageVisio.lockSettingsLockOnJoin),
        lockSettingsDisableCam: new M.NI({
          value: this.parametrageVisio.lockSettingsDisableCam,
          disabled: !this.parametrageVisio.lockSettingsLockOnJoin
        }),
        lockSettingsDisableMic: new M.NI({
          value: this.parametrageVisio.lockSettingsDisableMic,
          disabled: !this.parametrageVisio.lockSettingsLockOnJoin
        }),
        webcamsOnlyForModerator: new M.NI({
          value: this.parametrageVisio.webcamsOnlyForModerator,
          disabled: this.parametrageVisio.lockSettingsDisableCam
        }),
        muteOnStart: new M.NI(this.parametrageVisio.muteOnStart)
      });
      this.formParametrageVisio.get("lockSettingsLockOnJoin").valueChanges.pipe((0, v.x)(), (0, k.b)(st => {
        if (st) {
          this.formParametrageVisio.get("lockSettingsDisableMic").enable();
          this.formParametrageVisio.get("lockSettingsDisableMic").setValue(true);
          this.formParametrageVisio.get("lockSettingsDisableCam").enable();
          this.formParametrageVisio.get("lockSettingsDisableCam").setValue(true);
        } else {
          this.formParametrageVisio.get("lockSettingsDisableMic").disable();
          this.formParametrageVisio.get("lockSettingsDisableMic").setValue(false);
          this.formParametrageVisio.get("lockSettingsDisableCam").disable();
          this.formParametrageVisio.get("lockSettingsDisableCam").setValue(false);
        }
      }), (0, C.R)(this.componentDestroyed$)).subscribe();
      this.formParametrageVisio.get("lockSettingsDisableCam").valueChanges.pipe((0, v.x)(), (0, k.b)(st => {
        if (st) {
          this.formParametrageVisio.get("webcamsOnlyForModerator").disable();
        } else {
          this.formParametrageVisio.get("webcamsOnlyForModerator").enable();
        }
      }), (0, C.R)(this.componentDestroyed$)).subscribe();
      this.formParametrageVisio.valueChanges.pipe((0, v.x)(), (0, w.h)(st => this.formParametrageVisio.dirty), (0, k.b)(st => {
        this.parametrageVisio = {
          ...st,
          guestPolicy: st.guestPolicy === true ? "ASK_MODERATOR" : "ALWAYS_ACCEPT"
        };
      }), (0, C.R)(this.componentDestroyed$)).subscribe();
    }
    ngOnDestroy() {
      this.onClose$.complete();
      return super.ngOnDestroy();
    }
    close() {
      this.onClose$.next(this.parametrageVisio);
      this.modalRef.hide();
    }
  }
  Ue.ɵfac = function (st) {
    return new (st || Ue)(i.Y36(L.UZ), i.Y36(M.qu));
  };
  Ue.ɵcmp = i.Xpm({
    type: Ue,
    selectors: [["ed-visio-parametrage-modal"]],
    inputs: {
      parametrageVisio: "parametrageVisio"
    },
    features: [i.qOj],
    decls: 39,
    vars: 1,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "text-bold", "form-label", "mb-0"], [1, "form-check"], ["type", "checkbox", "id", "guestPolicy", "formControlName", "guestPolicy", 1, "form-check-input"], ["for", "guestPolicy", 1, "form-check-label", "fw-normal"], ["type", "checkbox", "id", "lockSettingsLockOnJoin", "formControlName", "lockSettingsLockOnJoin", 1, "form-check-input"], ["for", "lockSettingsLockOnJoin", 1, "form-check-label", "fw-normal"], ["type", "checkbox", "id", "lockSettingsDisableCam", "formControlName", "lockSettingsDisableCam", 1, "form-check-input"], ["for", "lockSettingsDisableCam", 1, "form-check-label", "fw-normal"], ["type", "checkbox", "id", "webcamsOnlyForModerator", "formControlName", "webcamsOnlyForModerator", 1, "form-check-input"], ["for", "webcamsOnlyForModerator", 1, "form-check-label", "fw-normal"], ["type", "checkbox", "id", "lockSettingsDisableMic", "formControlName", "lockSettingsDisableMic", 1, "form-check-input"], ["for", "lockSettingsDisableMic", 1, "form-check-label", "fw-normal"], ["type", "checkbox", "id", "muteOnStart", "formControlName", "muteOnStart", 1, "form-check-input"], ["for", "muteOnStart", 1, "form-check-label", "fw-normal"], [1, "modal-footer"]],
    template: function (st, rt) {
      if (st & 1) {
        i.TgZ(0, "div", 0)(1, "h3", 1);
        i._uU(2, "Paramétrage de la visio");
        i.qZA();
        i.TgZ(3, "button", 2);
        i.NdJ("click", function () {
          return rt.close();
        });
        i.qZA()();
        i.TgZ(4, "div", 3)(5, "form", 4)(6, "div", 5);
        i._uU(7, "Salle d'attente");
        i.qZA();
        i.TgZ(8, "div", 6);
        i._UZ(9, "input", 7);
        i.TgZ(10, "label", 8);
        i._uU(11, "Activer la salle d'attente");
        i.qZA()();
        i.TgZ(12, "div", 5);
        i._uU(13, "Verrouillage");
        i.qZA();
        i.TgZ(14, "div", 6);
        i._UZ(15, "input", 9);
        i.TgZ(16, "label", 10);
        i._uU(17, "Les participants sont verrouillés par défaut");
        i.qZA()();
        i.TgZ(18, "div", 5);
        i._uU(19, "Webcam");
        i.qZA();
        i.TgZ(20, "div", 6);
        i._UZ(21, "input", 11);
        i.TgZ(22, "label", 12);
        i._uU(23, "Interdire pour les participants");
        i.qZA()();
        i.TgZ(24, "div", 6);
        i._UZ(25, "input", 13);
        i.TgZ(26, "label", 14);
        i._uU(27, "Ne pas autoriser les participants à se voir");
        i.qZA()();
        i.TgZ(28, "div", 5);
        i._uU(29, "Microphone");
        i.qZA();
        i.TgZ(30, "div", 6);
        i._UZ(31, "input", 15);
        i.TgZ(32, "label", 16);
        i._uU(33, "Interdire pour les participants");
        i.qZA()();
        i.TgZ(34, "div", 6);
        i._UZ(35, "input", 17);
        i.TgZ(36, "label", 18);
        i._uU(37, "Muet par défaut (vous + participants)");
        i.qZA()()()();
        i._UZ(38, "div", 19);
      }
      if (st & 2) {
        i.xp6(5);
        i.Q6J("formGroup", rt.formParametrageVisio);
      }
    },
    dependencies: [M._Y, M.Wl, M.JJ, M.JL, M.sg, M.u]
  });
  return Ue;
})();
import * as E from "36895";
import * as O from "39646";
import * as B from "28746";
import * as F from "70262";
function G(Ue, ot) {
  if (Ue & 1) {
    i._UZ(0, "ed-custom-busy");
  }
}
function se(Ue, ot) {
  if (Ue & 1) {
    i.TgZ(0, "div", 9)(1, "h2");
    i._uU(2);
    i.qZA();
    i.YNc(3, G, 1, 0, "ed-custom-busy", 10);
    i.qZA();
  }
  if (Ue & 2) {
    const st = i.oxw();
    i.xp6(2);
    i.Oqu(st.waitingMsg);
    i.xp6(1);
    i.Q6J("ngIf", st.loader.closed);
  }
}
function W(Ue, ot) {
  if (Ue & 1) {
    i._UZ(0, "iframe", 11);
  }
  if (Ue & 2) {
    const st = i.oxw();
    i.Q6J("src", st.urlVisioSanitized, i.uOi);
  }
}
let Pe = (() => {
  class Ue {
    constructor(st, rt, Oe, Ee, ke, Be, De) {
      this.sanitizer = st;
      this.cloudService = rt;
      this.modalService = Oe;
      this.uiLoaderService = Ee;
      this.modalRef = ke;
      this.uiService = Be;
      this.cd = De;
      this.isProprietaire = false;
      this.onClose$ = new S.x();
    }
    get isVisioEnable() {
      return Object.isExists(this.visioPublicAccess) && this.visioPublicAccess.isAccessEnable;
    }
    get urlVisioSanitized() {
      if (Object.isExists(this.visioPublicAccess)) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.visioPublicAccess.urlVisio);
      }
    }
    ngOnInit() {
      this.isProprietaire = this.visio.isProprietaire;
      if (!t.FSr.isNotEmptyString(this.waitingMsg)) {
        this.waitingMsg = "Veuillez attendre qu'un modérateur active l'accès à la conférence.";
      }
      this.openFileVisio();
    }
    ngOnDestroy() {
      if (this.timerId > 0) {
        clearTimeout(this.timerId);
      }
      this.onClose$.complete();
    }
    close() {
      this.canDeactivate().pipe((0, U.w)(st => st ? this.isProprietaire ? (this.uiService.toggleLoadingIndicator(true, "fermeture de la visio..."), this.cd.markForCheck(), this.cloudService.updateVisioPublicAccess(this.visio.id, false).pipe((0, k.b)(() => {
        this.uiService.notifyEvent(t.DOJ.genericSuccess, "L'accès publique à la visio a été désactivé avec succès");
      }), (0, B.x)(() => this.uiService.stopLoadingIndicator()))) : (0, O.of)(true) : (0, O.of)(false)), (0, k.b)(st => {
        if (st) {
          this.onClose$.complete();
          this.modalRef.hide();
        }
      }), (0, F.K)(() => this.uiService.notifyErrorThenEmpty(new t.FwQ("Une erreur s'est produite")))).subscribe();
    }
    openFileVisio() {
      if (!this.isVisioEnable) {
        this.refreshPublicAccess(false);
      }
    }
    refreshPublicAccess(st = true) {
      if (!st) {
        this.loader = this.uiLoaderService.show(this);
      }
      this.cloudService.getVisioPublicAccess(this.visio.id, this.userSuffix, this.parametrageVisio).pipe((0, k.b)(rt => {
        if (rt.isAccessEnable !== this.isVisioEnable) {
          if (rt.isAccessEnable) {
            if (!this.isVisioEnable) {
              this.visioPublicAccess = new t.ijz(rt);
              this.cd.markForCheck();
            }
          }
        } else if (!this.visioPublicAccess) {
          this.timerId = +setTimeout(() => this.refreshPublicAccess(), 5000);
        }
      }), (0, F.K)(() => this.uiService.notifyErrorThenEmpty(new t.FwQ("Une erreur s'est produite"))), (0, B.x)(() => {
        if (!st) {
          this.uiLoaderService.hide(this);
        }
      })).subscribe();
    }
    onPostMessage(st) {
      if (!!st.origin.endsWith(".ecoledirecte.com")) {
        if (st.data === "close") {
          this.close();
        }
      }
    }
    canDeactivate(st) {
      if (Object.isExists(st)) {
        return !this.isProprietaire && null;
      }
      if (!this.isProprietaire) {
        return (0, O.of)(true);
      }
      this.cd.detach();
      const rt = {
        id: this.modalService.getModalsCount() + 1,
        keyboard: false,
        ignoreBackdropClick: true,
        initialState: {
          title: "<i class=\"fa fa-2x fa-exclamation-triangle\"></i> <span class=\"margin-whitespace\">Attention</span>",
          message: "<strong>Êtes vous sûr de vouloir quitter cette visio ?</strong>",
          btnConfirm: "Quitter la visio",
          btnCancel: "Annuler",
          warningButton: "attention"
        }
      };
      this.modalService.show(x.z, rt);
      return this.modalService.onHide.pipe((0, b.q)(1), (0, Z.U)(Oe => Oe === X.G.validation));
    }
  }
  Ue.ɵfac = function (st) {
    return new (st || Ue)(i.Y36(le.H7), i.Y36(t.eyc), i.Y36(L.tT), i.Y36(fe.S), i.Y36(L.UZ), i.Y36(t.VLf), i.Y36(i.sBO));
  };
  Ue.ɵcmp = i.Xpm({
    type: Ue,
    selectors: [["ed-visio-modal"]],
    hostBindings: function (st, rt) {
      if (st & 1) {
        i.NdJ("message", function (Ee) {
          return rt.onPostMessage(Ee);
        }, false, i.Jf7)("beforeunload", function (Ee) {
          return rt.canDeactivate(Ee);
        }, false, i.Jf7);
      }
    },
    inputs: {
      visio: "visio",
      parametrageVisio: "parametrageVisio",
      userSuffix: "userSuffix",
      waitingMsg: "waitingMsg"
    },
    decls: 11,
    vars: 4,
    consts: [["id", "visio-modal", 3, "ngBusy"], [1, "modal-header"], [1, "modal-title"], ["src", "/assets/images/bbb.png", "alt", "Logo BigBlueButton"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", "ms-3", 3, "click"], [1, "modal-body", "visio"], ["class", "jumbotron", 4, "ngIf"], ["allow", "camera *; microphone *; fullscreen *;display-capture", 3, "src", 4, "ngIf"], [1, "modal-footer"], [1, "jumbotron"], [4, "ngIf"], ["allow", "camera *; microphone *; fullscreen *;display-capture", 3, "src"]],
    template: function (st, rt) {
      if (st & 1) {
        i.TgZ(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        i._uU(3);
        i.qZA();
        i.TgZ(4, "div");
        i._UZ(5, "img", 3);
        i.TgZ(6, "button", 4);
        i.NdJ("click", function () {
          return rt.close();
        });
        i.qZA()()();
        i.TgZ(7, "div", 5);
        i.YNc(8, se, 4, 2, "div", 6);
        i.YNc(9, W, 1, 1, "iframe", 7);
        i.qZA();
        i._UZ(10, "div", 8);
        i.qZA();
      }
      if (st & 2) {
        i.Q6J("ngBusy", rt.loader);
        i.xp6(3);
        i.hij(" ", rt.visio.libelle, " ");
        i.xp6(5);
        i.Q6J("ngIf", !rt.isProprietaire && !rt.isVisioEnable);
        i.xp6(1);
        i.Q6J("ngIf", rt.isVisioEnable);
      }
    },
    dependencies: [E.O5, q.DC, j.i],
    styles: ["div#visio-modal[_ngcontent-%COMP%]   div.modal-body.visio[_ngcontent-%COMP%]{height:calc(100vh - 150px)}iframe[_ngcontent-%COMP%]{height:100%;width:100%;border:0 none}"],
    changeDetection: 0
  });
  return Ue;
})();
let Le = (() => {
  class Ue {
    constructor(st) {
      this.modalService = st;
    }
    onClick(st) {
      const rt = {
        visio: this.visio,
        parametrageVisio: this.parametrageVisio,
        userSuffix: this.userSuffix,
        waitingMsg: this.waitingMsg
      };
      const Oe = {
        id: this.modalService.getModalsCount() + 1,
        initialState: rt,
        keyboard: false,
        ignoreBackdropClick: true,
        class: "modal-xlg"
      };
      this.modalService.show(Pe, Oe);
      st.stopPropagation();
      st.preventDefault();
      return false;
    }
  }
  Ue.ɵfac = function (st) {
    return new (st || Ue)(i.Y36(L.tT));
  };
  Ue.ɵdir = i.lG2({
    type: Ue,
    selectors: [["", "edVisio", ""]],
    hostBindings: function (st, rt) {
      if (st & 1) {
        i.NdJ("click", function (Ee) {
          return rt.onClick(Ee);
        });
      }
    },
    inputs: {
      visio: "visio",
      parametrageVisio: "parametrageVisio",
      userSuffix: "userSuffix",
      waitingMsg: "waitingMsg"
    }
  });
  return Ue;
})();
let he = (() => {
  class Ue {
    constructor(st, rt, Oe, Ee) {
      this.modalService = st;
      this.rppService = rt;
      this.authStore = Oe;
      this.uiService = Ee;
      this.enable = false;
      this.accessVisio = new i.vpe();
    }
    onClick(st) {
      if (this.enable) {
        let rt;
        if (this.authStore.isFamille()) {
          rt = this.rppService.getVisioRPPForFamille(this.idRPP, this.idProf);
        } else if (this.authStore.isProfesseur()) {
          rt = this.rppService.getVisioRPPForProf(this.idRPP);
        }
        if (Object.isExists(rt)) {
          this.accessVisio.emit(true);
          rt.pipe((0, k.b)(Oe => {
            const Ee = {
              visio: new t.whR(Oe),
              parametrageVisio: this.parametrageVisio,
              userSuffix: this.userSuffix,
              waitingMsg: this.waitingMsg
            };
            const ke = {
              id: this.modalService.getModalsCount() + 1,
              initialState: Ee,
              keyboard: false,
              ignoreBackdropClick: true,
              class: "modal-xlg"
            };
            this.modalService.show(Pe, ke);
          }), (0, F.K)(Oe => this.uiService.notifyErrorThenEmpty(Oe, true, "Réunions parents/professeurs", "fa fa-warning")), (0, B.x)(() => this.accessVisio.emit(false))).subscribe();
        }
      }
      st.stopPropagation();
      st.preventDefault();
      return false;
    }
  }
  Ue.ɵfac = function (st) {
    return new (st || Ue)(i.Y36(L.tT), i.Y36(t.XK$), i.Y36(t.CnD), i.Y36(t.VLf));
  };
  Ue.ɵdir = i.lG2({
    type: Ue,
    selectors: [["", "edVisioRPP", ""]],
    hostBindings: function (st, rt) {
      if (st & 1) {
        i.NdJ("click", function (Ee) {
          return rt.onClick(Ee);
        });
      }
    },
    inputs: {
      enable: "enable",
      idRPP: "idRPP",
      idProf: "idProf",
      userSuffix: "userSuffix",
      parametrageVisio: "parametrageVisio",
      waitingMsg: "waitingMsg"
    },
    outputs: {
      accessVisio: "accessVisio"
    }
  });
  return Ue;
})();
function pe(Ue, ot) {
  if (Ue & 1) {
    const st = i.EpF();
    i.TgZ(0, "button", 4);
    i.NdJ("accessVisio", function (Oe) {
      i.CHM(st);
      const Ee = i.oxw();
      return i.KtG(Ee.accessVisio.emit(Oe));
    });
    i._UZ(1, "i", 5);
    i._uU(2);
    i.qZA();
  }
  if (Ue & 2) {
    const st = i.oxw();
    i.Q6J("idRPP", st.idRPP)("idProf", st.idProf)("enable", st.isVisioEnable)("disabled", st.disable)("title", st.isVisioEnable ? st.btnTooltip : "Visio non disponible. Merci de contacter votre établissement !")("waitingMsg", st.waitingMsg)("parametrageVisio", st.parametrageVisio)("userSuffix", st.userSuffix);
    i.xp6(2);
    i.hij(" ", st.btnLabel, " ");
  }
}
function re(Ue, ot) {
  if (Ue & 1) {
    i.TgZ(0, "button", 6);
    i._UZ(1, "i", 5);
    i._uU(2);
    i.qZA();
  }
  if (Ue & 2) {
    const st = i.oxw();
    i.Q6J("visio", st.visio)("disabled", st.disable)("parametrageVisio", st.parametrageVisio)("waitingMsg", st.waitingMsg)("userSuffix", st.userSuffix)("title", st.isVisioEnable ? st.btnTooltip : "Visio non disponible. Merci de contacter votre établissement !");
    i.xp6(2);
    i.hij(" ", st.btnLabel, " ");
  }
}
function Re(Ue, ot) {
  if (Ue & 1) {
    const st = i.EpF();
    i.TgZ(0, "button", 7);
    i.NdJ("click", function () {
      i.CHM(st);
      const Oe = i.oxw();
      return i.KtG(Oe.openVisioParametrage());
    });
    i._UZ(1, "i", 8);
    i.qZA();
  }
  if (Ue & 2) {
    const st = i.oxw();
    i.Q6J("disabled", st.disable);
  }
}
export let e = (() => {
  class Ue {
    constructor(st, rt, Oe) {
      this.authStore = st;
      this.modalService = rt;
      this.cd = Oe;
      this.btnLabel = "Rejoindre la visio";
      this.disable = true;
      this.edTypeVisio = t.h40;
      this.isVisioEnable = false;
      this.shouldDisplayParametrage = false;
      this.isVisioEnable = t.Kg5.getModuleParametre(t.qzA.CLOUD, "visiosActif", this.authStore.currentUser) === "1";
      this.accessVisio = new i.vpe();
    }
    ngOnInit() {
      if (!t.FSr.isNotEmptyString(this.btnTooltip)) {
        this.btnTooltip = this.btnLabel;
      }
      this.shouldDisplayParametrage = [t.h40.RPP, t.h40.RDV_PP, t.h40.AGENDA].indexOf(this.typeVisio) > -1 && (Object.isExists(this.visio) && this.visio.isProprietaire || !Object.isExists(this.visio) && this.authStore.isProfesseur());
      if (this.shouldDisplayParametrage) {
        this.parametrageVisio = t.whR.getDefaultParametrage(this.typeVisio);
      }
    }
    openVisioParametrage() {
      const st = {
        id: this.modalService.getModalsCount() + 1,
        initialState: {
          parametrageVisio: this.parametrageVisio
        },
        keyboard: false,
        ignoreBackdropClick: true
      };
      this.modalService.show(I, st).content.onClose$.pipe((0, b.q)(1), (0, k.b)(Oe => {
        this.parametrageVisio = {
          ...Oe
        };
        this.cd.detectChanges();
      })).subscribe();
    }
  }
  Ue.ɵfac = function (st) {
    return new (st || Ue)(i.Y36(t.CnD), i.Y36(L.tT), i.Y36(i.sBO));
  };
  Ue.ɵcmp = i.Xpm({
    type: Ue,
    selectors: [["ed-visio-btn-group"]],
    inputs: {
      typeVisio: "typeVisio",
      btnLabel: "btnLabel",
      btnTooltip: "btnTooltip",
      userSuffix: "userSuffix",
      waitingMsg: "waitingMsg",
      disable: "disable",
      visio: "visio",
      idRPP: "idRPP",
      idProf: "idProf"
    },
    outputs: {
      accessVisio: "accessVisio"
    },
    decls: 4,
    vars: 3,
    consts: [["role", "group", "aria-label", "Boutons d'accès à la visio", 1, "btn-group"], ["type", "button", "edVisioRPP", "", "class", "btn btn-primary", 3, "idRPP", "idProf", "enable", "disabled", "title", "waitingMsg", "parametrageVisio", "userSuffix", "accessVisio", 4, "ngIf"], ["edVisio", "", "type", "button", "class", "btn btn-primary", 3, "visio", "disabled", "parametrageVisio", "waitingMsg", "userSuffix", "title", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", "title", "Paramétrer la visio", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "edVisioRPP", "", 1, "btn", "btn-primary", 3, "idRPP", "idProf", "enable", "disabled", "title", "waitingMsg", "parametrageVisio", "userSuffix", "accessVisio"], ["aria-hidden", "true", 1, "icon-ed_rtc"], ["edVisio", "", "type", "button", 1, "btn", "btn-primary", 3, "visio", "disabled", "parametrageVisio", "waitingMsg", "userSuffix", "title"], ["type", "button", "title", "Paramétrer la visio", 1, "btn", "btn-primary", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-gear"]],
    template: function (st, rt) {
      if (st & 1) {
        i.TgZ(0, "div", 0);
        i.YNc(1, pe, 3, 9, "button", 1);
        i.YNc(2, re, 3, 7, "button", 2);
        i.YNc(3, Re, 2, 1, "button", 3);
        i.qZA();
      }
      if (st & 2) {
        i.xp6(1);
        i.Q6J("ngIf", rt.typeVisio === rt.edTypeVisio.RPP);
        i.xp6(1);
        i.Q6J("ngIf", rt.typeVisio === rt.edTypeVisio.AGENDA || rt.typeVisio === rt.edTypeVisio.RDV_PP);
        i.xp6(1);
        i.Q6J("ngIf", rt.shouldDisplayParametrage);
      }
    },
    dependencies: [E.O5, Le, he]
  });
  return Ue;
})();