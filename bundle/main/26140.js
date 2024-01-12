import * as t from "95698";
import * as b from "18505";
import * as k from "52497";
import * as M from "45007";
import * as v from "11302";
import * as w from "56776";
import * as L from "28746";
import * as O from "70262";
import * as x from "94650";
import * as _U from "20388";
import * as Z from "36895";
import * as X from "24006";
import * as fe from "94702";
const W = ["ckeditor"];
const Pe = function (et) {
  return {
    "has-error": et
  };
};
function Le(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "div")(1, "div", 44);
    x._uU(2, "Heure de début");
    x.qZA();
    x.TgZ(3, "div", 45)(4, "timepicker", 46, 47);
    x.NdJ("ngModelChange", function (ft) {
      x.CHM(ve);
      const qe = x.oxw();
      return x.KtG(qe.currentEvenement.start_date = ft);
    });
    x.qZA()()();
  }
  if (et & 2) {
    const ve = x.MAs(5);
    const Lt = x.oxw();
    x.Tol(x.VKq(4, Pe, ve.invalid));
    x.xp6(4);
    x.Q6J("required", true)("ngModel", Lt.currentEvenement.start_date);
  }
}
function he(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "div", 48)(1, "div", 44);
    x._uU(2, "Heure de fin");
    x.qZA();
    x.TgZ(3, "div", 49)(4, "timepicker", 50, 51);
    x.NdJ("ngModelChange", function (ft) {
      x.CHM(ve);
      const qe = x.oxw();
      return x.KtG(qe.currentEvenement.end_date = ft);
    });
    x.qZA()()();
  }
  if (et & 2) {
    const ve = x.MAs(5);
    const Lt = x.oxw();
    x.Q6J("ngClass", x.VKq(3, Pe, ve.invalid));
    x.xp6(4);
    x.Q6J("required", true)("ngModel", Lt.currentEvenement.end_date);
  }
}
function pe(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "div", 56)(1, "input", 57);
    x.NdJ("click", function () {
      const qe = x.CHM(ve).$implicit;
      const Me = x.oxw(2);
      return x.KtG(Me.updateCible(Me.CIBLES_AGENDA[qe].code, Me.currentEvenement));
    });
    x.qZA();
    x.TgZ(2, "label", 58);
    x._uU(3);
    x.qZA()();
  }
  if (et & 2) {
    const ve = St.$implicit;
    const Lt = x.oxw(2);
    x.xp6(1);
    x.MGl("id", "Cible-", Lt.CIBLES_AGENDA[ve].code, "");
    x.s9C("value", Lt.CIBLES_AGENDA[ve].code);
    x.Q6J("checked", Lt.currentEvenement.cibles.indexOf(Lt.CIBLES_AGENDA[ve].code) > -1);
    x.xp6(1);
    x.MGl("for", "Cible-", Lt.CIBLES_AGENDA[ve].code, "");
    x.xp6(1);
    x.Oqu(Lt.CIBLES_AGENDA[ve].libelle);
  }
}
function re(et, St) {
  if (et & 1) {
    x.TgZ(0, "p", 59);
    x._uU(1, "Veuillez sélectionner au minimum une cible");
    x.qZA();
  }
}
function Re(et, St) {
  if (et & 1) {
    x.TgZ(0, "div", 52)(1, "div", 32)(2, "div", 53);
    x._uU(3, "Cible");
    x.qZA();
    x.YNc(4, pe, 4, 5, "div", 54);
    x.ALo(5, "trackByProperty");
    x.qZA();
    x.TgZ(6, "div", 32);
    x.YNc(7, re, 2, 0, "p", 55);
    x.qZA()();
  }
  if (et & 2) {
    const ve = x.oxw();
    x.Q6J("ngClass", x.VKq(6, Pe, !ve.currentEvenement.cibles.length));
    x.xp6(4);
    x.Q6J("ngForOf", ve.tabTypesUser)("ngForTrackBy", x.lcZ(5, 4, "$index"));
    x.xp6(3);
    x.Q6J("ngIf", !ve.currentEvenement.cibles.length);
  }
}
function Ge(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "div", 56)(1, "input", 61);
    x.NdJ("click", function () {
      const qe = x.CHM(ve).$implicit;
      const Me = x.oxw(2);
      return x.KtG(Me.updateCiblesEtab(qe.id, Me.currentEvenement));
    });
    x.qZA();
    x.TgZ(2, "label", 58);
    x._uU(3);
    x.qZA()();
  }
  if (et & 2) {
    const ve = St.$implicit;
    const Lt = x.oxw(2);
    x.xp6(1);
    x.MGl("id", "Etab-", ve.id, "");
    x.s9C("value", ve.id);
    x.Q6J("checked", Lt.currentEvenement.ciblesEtab.indexOf(ve.id) > -1);
    x.xp6(1);
    x.MGl("for", "Etab-", ve.id, "");
    x.xp6(1);
    x.Oqu(ve.libelle);
  }
}
function Ue(et, St) {
  if (et & 1) {
    x.TgZ(0, "p", 59);
    x._uU(1, "Veuillez sélectionner au minimum un établissement (pour les familles et les élèves)");
    x.qZA();
  }
}
function ot(et, St) {
  if (et & 1) {
    x.TgZ(0, "div", 60)(1, "div", 32)(2, "div", 53);
    x._uU(3, "Etablissement");
    x.qZA();
    x.YNc(4, Ge, 4, 5, "div", 54);
    x.ALo(5, "trackByProperty");
    x.TgZ(6, "div", 32);
    x.YNc(7, Ue, 2, 0, "p", 55);
    x.qZA()()();
  }
  if (et & 2) {
    const ve = x.oxw();
    x.Q6J("ngClass", x.VKq(6, Pe, ve.currentEvenement.ciblesEtab.length <= 0));
    x.xp6(4);
    x.Q6J("ngForOf", ve.etablissements)("ngForTrackBy", x.lcZ(5, 4, "$index"));
    x.xp6(3);
    x.Q6J("ngIf", ve.currentEvenement.ciblesEtab.length <= 0);
  }
}
function st(et, St) {
  if (et & 1) {
    x.TgZ(0, "span");
    x._uU(1, "(*)");
    x.qZA();
  }
}
function rt(et, St) {
  if (et & 1) {
    x._UZ(0, "ed-visio-btn-group", 67);
  }
  if (et & 2) {
    const ve = x.oxw(2);
    x.Q6J("visio", ve.currentEvenement.visio)("disable", ve.evenement == null || !ve.evenement.isToday)("typeVisio", ve.currentEvenement.typeVisio);
  }
}
function Oe(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "div", 6)(1, "div", 14)(2, "div", 53);
    x._uU(3, "Visio");
    x.qZA();
    x.TgZ(4, "div", 62)(5, "input", 63);
    x.NdJ("ngModelChange", function (ft) {
      x.CHM(ve);
      const qe = x.oxw();
      return x.KtG(qe.currentEvenement.addVisio = ft);
    });
    x.qZA();
    x.TgZ(6, "label", 64);
    x._uU(7, " Associer une visio à cet évènement ");
    x.YNc(8, st, 2, 0, "span", 65);
    x.qZA()()();
    x.TgZ(9, "div", 14);
    x.YNc(10, rt, 1, 3, "ed-visio-btn-group", 66);
    x.qZA()();
  }
  if (et & 2) {
    const ve = x.oxw();
    x.xp6(5);
    x.Q6J("disabled", !ve.isVisioEnable)("ngModel", ve.currentEvenement.addVisio);
    x.xp6(1);
    x.Q6J("title", ve.isVisioEnable ? "" : "Cette option n'est pas disponible, contactez votre établissement");
    x.xp6(2);
    x.Q6J("ngIf", ve.visios == null ? null : ve.visios.length);
    x.xp6(2);
    x.Q6J("ngIf", ve.isVisioEnable && ve.currentEvenement.visio);
  }
}
function Ee(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "button", 68);
    x.NdJ("click", function () {
      x.CHM(ve);
      const ft = x.oxw();
      return x.KtG(ft.delete());
    });
    x._UZ(1, "i", 69);
    x.TgZ(2, "span", 70);
    x._uU(3, "Supprimer");
    x.qZA()();
  }
}
function ke(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "button", 71);
    x.NdJ("click", function () {
      x.CHM(ve);
      const ft = x.oxw();
      const qe = x.MAs(6);
      return x.KtG(ft.update(ft.currentEvenement, qe));
    });
    x._uU(1, " Enregistrer ");
    x.qZA();
  }
  if (et & 2) {
    x.oxw();
    const ve = x.MAs(6);
    x.Q6J("disabled", ve.invalid);
  }
}
function Be(et, St) {
  if (et & 1) {
    const ve = x.EpF();
    x.TgZ(0, "button", 72);
    x.NdJ("click", function () {
      x.CHM(ve);
      const ft = x.oxw();
      const qe = x.MAs(6);
      return x.KtG(ft.save(ft.currentEvenement, qe));
    });
    x._uU(1, " Enregistrer ");
    x.qZA();
  }
  if (et & 2) {
    x.oxw();
    const ve = x.MAs(6);
    x.Q6J("disabled", ve.invalid);
  }
}
function De(et, St) {
  if (et & 1) {
    x.TgZ(0, "li");
    x._uU(1);
    x.qZA();
  }
  if (et & 2) {
    const ve = St.$implicit;
    x.xp6(1);
    x.Oqu(ve);
  }
}
function Qe(et, St) {
  if (et & 1) {
    x.TgZ(0, "alert", 73);
    x._uU(1, " (*) Visios disponible pour : ");
    x.TgZ(2, "ul");
    x.YNc(3, De, 2, 1, "li", 74);
    x.ALo(4, "trackByProperty");
    x.qZA()();
  }
  if (et & 2) {
    const ve = x.oxw();
    x.xp6(3);
    x.Q6J("ngForOf", ve.visios)("ngForTrackBy", x.lcZ(4, 2, "$index"));
  }
}
const It = () => Object.assign(new w.Sm(), {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: false
});
let Yt = (() => {
  class et {
    constructor(ve, Lt, ft, qe, Me, ne, me, it, bt) {
      this.modalRef = ve;
      this.loaderService = Lt;
      this.ciblesEvenementService = ft;
      this.etablissementStore = qe;
      this.etablissementService = Me;
      this.authStore = ne;
      this.modalService = me;
      this.agendaService = it;
      this.uiService = bt;
      this.CIBLES_AGENDA = M.viF;
      this.isVisioEnable = false;
      this._datePipe = new M.ifA();
      this.configDatePicker = v.gL;
      this.tabTypesUser = Object.keys(this.CIBLES_AGENDA);
      this.onClose$ = new S.x();
      this.hasBeenSubmitted = false;
    }
    ngOnInit() {
      this.ckeditorOptions = {
        ...v.x$,
        height: 150,
        extraPlugins: "font",
        toolbar: [{
          name: "basicstyles,deselect",
          items: ["Bold", "Italic", "Strike", "Underline"]
        }, {
          name: "paragraph",
          items: ["BulletedList", "NumberedList"]
        }, {
          name: "editing",
          items: ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"]
        }, {
          name: "styles",
          items: ["FontSize", "TextColor", "PasteText", "PasteFromWord"]
        }, {
          name: "links",
          items: ["Link", "Unlink"]
        }],
        removePlugins: "elementspath"
      };
      this.currentEvenement = Object.isExists(this.evenement) ? new M.gBp(this.evenement) : new M.gBp();
      this.currentEvenement.dateDebut = M.C_1.formatDate(this.currentEvenement.dateDebut.split("-").reverse().join("-"));
      this.currentEvenement.dateFin = M.C_1.formatDate(this.currentEvenement.dateFin.split("-").reverse().join("-"));
      this.currentEvenement.description = this.currentEvenement.descriptionDecode;
      this.currentEvenement.addVisio = Object.isExists(this.currentEvenement.visio);
      this.isAllDay = this.currentEvenement.heureDebut === this._datePipe.transform(M.C_1.getStartOfDay(), "HH:mm") && this.currentEvenement.heureFin === this._datePipe.transform(M.C_1.getEndOfDay(), "HH:mm");
      this.ciblesEvenementService.isCibleFamilleOrEleve = this.ciblesEvenementService.checkCiblesSelected(this.currentEvenement);
      if (!Object.isExists(this.currentEvenement.start_date)) {
        this.currentEvenement.start_date = this._datePipe.transform(new Date(), "y-MM-dd HH:mm:ss");
        this.currentEvenement.end_date = this._datePipe.transform(new Date(), "y-MM-dd HH:mm:ss");
      }
      if (this.modaleParams.selectedTargets.length > 0) {
        this.currentEvenement.cibles = Array.isArray(this.modaleParams.selectedTargets) ? this.modaleParams.selectedTargets.map(ve => ve) : [];
      }
      this.isVisioEnable = M.Kg5.getModuleParametre(M.qzA.CLOUD, "visiosActif", this.authStore.currentUser) === "1" && this.modaleParams.typeUser === M.dcH.ESPACE_TRAVAIL && this.authStore.isProfOuPersonnel();
      this.visios = this.etablissementStore.snapshot?.visiosDisposPour();
      if (this.authStore.isPersonnel()) {
        this.doRefreshEtablissements();
      }
    }
    ngOnDestroy() {
      this.onClose$.complete();
    }
    doRefreshEtablissements() {
      this.loader = this.loaderService.show(this);
      this.etablissementService.getNiveauxListeAll().pipe((0, b.b)(ve => {
        this.etablissements = ve.etablissements;
        if (Object.isExists(this.currentEvenement) && this.currentEvenement.ciblesEtab.length <= 0) {
          this.etablissements.forEach(Lt => {
            this.currentEvenement.ciblesEtab.push(Lt.id);
          });
        }
        this.visios = ve.visiosDisposPour();
      }), (0, L.x)(() => this.loaderService.hide(this))).subscribe();
    }
    updateCiblesEtab(ve, Lt) {
      Lt.ciblesEtab = this.ciblesEvenementService.updateCiblesEtab(ve, Lt);
    }
    updateCible(ve, Lt) {
      this.currentEvenement = new M.gBp(this.ciblesEvenementService.updateCible(ve, Lt));
    }
    toggleIsAllDay(ve, Lt) {
      if (ve) {
        Lt.start_date = this._datePipe.transform(M.C_1.getStartOfDay(), "y-MM-dd HH:mm:ss");
        Lt.end_date = this._datePipe.transform(M.C_1.getEndOfDay(), "y-MM-dd HH:mm:ss");
      }
    }
    updateChangeDateDebut(ve, Lt) {
      this.currentEvenement = new M.gBp(ve);
      this.currentEvenement.dateFin = Lt;
    }
    convertToDate(ve) {
      if (typeof ve == "string") {
        return new Date(ve.split("/").reverse().join("/"));
      } else {
        return ve;
      }
    }
    delete() {
      const ve = {
        id: this.modalService.getModalsCount() + 1,
        initialState: {
          title: "Suppression d'un événement",
          message: "Confirmer la suppression de l'événement ?"
        }
      };
      this.modalService.show(C.z, ve);
      this.modalService.onHide.pipe((0, t.q)(1), (0, I.h)(Lt => Lt === k.G.validation), (0, E.w)(Lt => {
        this.loader = this.loaderService.show(this);
        this.hasBeenSubmitted = true;
        if (M.C_1.isDate(this.currentEvenement.dateDebut)) {
          this.currentEvenement.dateDebut = this._datePipe.transform(this.currentEvenement.dateDebut, "dd/MM/yyyy");
        }
        if (M.C_1.isDate(this.currentEvenement.dateFin)) {
          this.currentEvenement.dateFin = this._datePipe.transform(this.currentEvenement.dateFin, "dd/MM/yyyy");
        }
        this.currentEvenement.dateDebut = M.C_1.formatDate(this.currentEvenement.dateDebut.split("/").reverse().join("/"), "-", "/");
        this.currentEvenement.dateFin = M.C_1.formatDate(this.currentEvenement.dateFin.split("/").reverse().join("/"), "-", "/");
        return this.agendaService.deleteEvent(this.authStore.currentUser.codeOgec, this.modaleParams.typeUser, this.modaleParams.idUser, this.currentEvenement);
      }), (0, b.b)(Lt => {
        this.uiService.notifyEvent(M.DOJ.genericSuccess, "Votre événement a bien été supprimé !", "Agenda", "fa fa-calendar-o");
        this.onClose$.next({
          data: this.currentEvenement,
          reason: k.G.suppression
        });
        this.close();
      }), (0, L.x)(() => this.loaderService.hide(this)), (0, O.K)(Lt => this.uiService.notifyErrorThenEmpty(Lt, true, "Erreur", "fa fa-warning"))).subscribe();
    }
    update(ve, Lt) {
      this.hasBeenSubmitted = true;
      if (Lt.invalid || !ve.cibles.length || !ve.ciblesEtab.length && this.ciblesEvenementService.isCibleFamilleOrEleve) {
        this.uiService.notifyEvent(M.DOJ.genericError, "Veuillez vérifier la saisie de votre formulaire ! ", "Agenda", "fa fa-warning");
        return;
      }
      const ft = this.formateEvenement(ve);
      this.loader = this.loaderService.show(this);
      this.agendaService.updateEvent(this.authStore.currentUser.codeOgec, this.modaleParams.typeUser, this.modaleParams.idUser, ft).pipe((0, b.b)(() => {
        this.uiService.notifyEvent(M.DOJ.genericSuccess, "Votre événement a bien été modifié !", "Agenda", "fa fa-calendar-o");
        this.onClose$.next({
          data: ft,
          reason: k.G.modification
        });
        this.close();
      }), (0, L.x)(() => this.loaderService.hide(this)), (0, O.K)(qe => this.uiService.notifyErrorThenEmpty(qe, true, "Erreur", "fa fa-warning"))).subscribe();
    }
    save(ve, Lt) {
      this.hasBeenSubmitted = true;
      if (Lt.invalid || !ve.cibles.length || !ve.ciblesEtab.length && this.ciblesEvenementService.isCibleFamilleOrEleve) {
        this.uiService.notifyEvent(M.DOJ.genericError, "Veuillez vérifier la saisie de votre formulaire ! ", "Agenda", "fa fa-warning");
        return;
      }
      const ft = this.formateEvenement(ve);
      this.loader = this.loaderService.show(this);
      this.agendaService.addEvent(this.authStore.currentUser.codeOgec, this.modaleParams.typeUser, this.modaleParams.idUser, ft).pipe((0, b.b)(() => {
        this.uiService.notifyEvent(M.DOJ.genericSuccess, "Votre événement a bien été enregistré", "Agenda", "fa fa-calendar-o");
        this.onClose$.next({
          data: ft,
          reason: k.G.modification
        });
        this.close();
      }), (0, L.x)(() => this.loaderService.hide(this)), (0, O.K)(qe => this.uiService.notifyErrorThenEmpty(qe, true, "Erreur", "fa fa-warning"))).subscribe();
    }
    formateEvenement(ve) {
      const Lt = [];
      const ft = new M.gBp(ve);
      ft.cibles.forEach(qe => {
        Lt.push(qe);
      });
      ft.cibles = Lt;
      if (M.C_1.isDate(ft.dateDebut)) {
        ft.dateDebut = this._datePipe.transform(ft.dateDebut, "dd/MM/yyyy");
      }
      if (M.C_1.isDate(ft.dateFin)) {
        ft.dateFin = this._datePipe.transform(ft.dateFin, "dd/MM/yyyy");
      }
      ft.dateDebut = M.C_1.formatDate(ft.dateDebut.split("/").reverse().join("/"), "-", "/");
      ft.dateFin = M.C_1.formatDate(ft.dateFin.split("/").reverse().join("/"), "-", "/");
      ft.description = M.YC.base64encode(ft.description);
      ft.heureDebut = this._datePipe.transform(ft.start_date, "HH:mm");
      ft.heureFin = this._datePipe.transform(ft.end_date, "HH:mm");
      return ft;
    }
    close() {
      this.modalRef.hide();
    }
  }
  et.ɵfac = function (ve) {
    return new (ve || et)(x.Y36(_U.UZ), x.Y36(B.S), x.Y36(F.p), x.Y36(M.VD2), x.Y36(M.Xmb), x.Y36(M.CnD), x.Y36(_U.tT), x.Y36(M.img), x.Y36(M.VLf));
  };
  et.ɵcmp = x.Xpm({
    type: et,
    selectors: [["ed-modal-ajout-modif-evenement-scheduler"]],
    viewQuery: function (ve, Lt) {
      if (ve & 1) {
        x.Gf(W, 5);
      }
      if (ve & 2) {
        let ft;
        if (x.iGM(ft = x.CRH())) {
          Lt.ckEditor = ft.first;
        }
      }
    },
    inputs: {
      modaleParams: "modaleParams",
      evenement: "evenement"
    },
    features: [x._Bn([{
      provide: w.Sm,
      useFactory: It
    }])],
    decls: 62,
    vars: 45,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body", "row"], ["method", "post", "name", "agendaForm", "novalidate", "", 1, "form-agenda", 3, "ngBusy"], ["agendaForm", "ngForm"], [1, "row"], [1, "col-lg-6", 3, "ngClass"], ["for", "inputLibelle", 1, "col-form-label"], ["id", "inputLibelle", "name", "libelle", "placeholder", "Libellé", "type", "text", 1, "form-control", 3, "ngModel", "required", "ngModelChange"], ["libelle", "ngModel"], [1, "form-check", "col-lg-6"], ["type", "checkbox", "name", "checkboxAllDay", "id", "checkboxAllDay", 1, "form-check-input", 3, "ngModel", "change", "ngModelChange"], ["for", "checkboxAllDay", 1, "form-check-label"], [1, "col-lg-6"], ["for", "dateDebut", 1, "col-form-label"], [1, "input-group"], ["bsDatepicker", "", "id", "dateDebut", "name", "dateDebut", "type", "text", 1, "form-control", 3, "ngModel", "bsConfig", "required", "ngModelChange"], ["dateDebut", "ngModel", "datePickerDateDebut", "bsDatepicker"], [1, "input-group-text", "input-group-md", "no-background"], ["type", "button", "aria-label", "Ouvrir le calendrier pour choisir la date de début de l'événement", 1, "btn", "btn-secondary", "no-background", "input-group-text", "input-group-md", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [3, "class", 4, "ngIf"], ["for", "dateFin", 1, "col-form-label"], ["bsDatepicker", "", "id", "dateFin", "name", "dateFin", "type", "text", 1, "form-control", 3, "ngModel", "bsConfig", "minDate", "required", "ngModelChange"], ["dateFin", "ngModel", "datePickerDateFin", "bsDatepicker"], ["type", "button", "aria-label", "Ouvrir le calendrier pour choisir la date de fin de l'événement", 1, "btn", "btn-secondary", "no-background", 3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "row", "id", "cible-event", 3, "ngClass", 4, "ngIf"], ["class", "row", "id", "cible-etabs", 3, "ngClass", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", 3, "ngClass"], [1, "col-lg-12"], ["for", "description", 1, "col-form-label"], [1, "controls"], ["id", "description", "name", "description", 3, "ngModel", "config", "required", "ngModelChange"], ["ckeditor", "", "description", "ngModel"], [1, "modal-footer"], [1, "w-100"], ["id", "button2id", "name", "button2id", "type", "button", 1, "btn", "btn-danger", "float-start", 3, "click"], ["class", "btn btn-warning float-start", "id", "buttonSupprimer", "name", "button1id", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-success float-end", "id", "buttonAjout", "name", "button1id", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success float-end", "id", "buttonModif", "name", "button1id", 3, "disabled", "click", 4, "ngIf"], ["type", "info", "class", "text-start", 4, "ngIf"], [1, "text-bold", "form-label", "mt-3"], [1, "input-group", "heureDebut"], ["name", "heureDebut", 3, "required", "ngModel", "ngModelChange"], ["heureDebut", "ngModel"], [3, "ngClass"], [1, "input-group", "heureFin"], ["name", "heureFin", 3, "required", "ngModel", "ngModelChange"], ["heureFin", "ngModel"], ["id", "cible-event", 1, "row", 3, "ngClass"], [1, "text-bold", "form-label"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "form-text", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "id", "value", "click"], [1, "form-check-label", "fw-normal", 3, "for"], [1, "form-text"], ["id", "cible-etabs", 1, "row", 3, "ngClass"], ["name", "Cible", "type", "checkbox", 1, "form-check-input", 3, "id", "value", "checked", "click"], [1, "form-check"], ["type", "checkbox", "id", "addVisio", "name", "addVisio", 1, "form-check-input", 3, "disabled", "ngModel", "ngModelChange"], ["for", "addVisio", 1, "form-check-label", "fw-normal", 3, "title"], [4, "ngIf"], [3, "visio", "disable", "typeVisio", 4, "ngIf"], [3, "visio", "disable", "typeVisio"], ["id", "buttonSupprimer", "name", "button1id", "type", "button", 1, "btn", "btn-warning", "float-start", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", "i-small"], [1, "margin-whitespace"], ["id", "buttonAjout", "name", "button1id", "type", "button", 1, "btn", "btn-success", "float-end", 3, "disabled", "click"], ["type", "button", "id", "buttonModif", "name", "button1id", 1, "btn", "btn-success", "float-end", 3, "disabled", "click"], ["type", "info", 1, "text-start"], [4, "ngFor", "ngForOf", "ngForTrackBy"]],
    template: function (ve, Lt) {
      if (ve & 1) {
        const ft = x.EpF();
        x.TgZ(0, "div", 0)(1, "h3", 1);
        x._uU(2);
        x.qZA();
        x.TgZ(3, "button", 2);
        x.NdJ("click", function () {
          return Lt.close();
        });
        x.qZA()();
        x.TgZ(4, "div", 3)(5, "form", 4, 5)(7, "div", 6)(8, "div", 7)(9, "label", 8);
        x._uU(10, "Libellé");
        x.qZA();
        x.TgZ(11, "input", 9, 10);
        x.NdJ("ngModelChange", function (Me) {
          return Lt.currentEvenement.libelle = Me;
        });
        x.qZA()();
        x.TgZ(13, "div", 11)(14, "input", 12);
        x.NdJ("change", function () {
          return Lt.toggleIsAllDay(Lt.isAllDay, Lt.currentEvenement);
        })("ngModelChange", function (Me) {
          return Lt.isAllDay = Me;
        });
        x.qZA();
        x.TgZ(15, "label", 13);
        x._uU(16);
        x.qZA()()();
        x.TgZ(17, "div", 6)(18, "div", 14)(19, "div")(20, "label", 15);
        x._uU(21, "Date de début");
        x.qZA();
        x.TgZ(22, "div", 16)(23, "input", 17, 18);
        x.NdJ("ngModelChange", function () {
          x.CHM(ft);
          const Me = x.MAs(24);
          return x.KtG(Lt.updateChangeDateDebut(Lt.currentEvenement, Me.value));
        })("ngModelChange", function (Me) {
          return Lt.currentEvenement.dateDebut = Me;
        });
        x.qZA();
        x.TgZ(26, "span", 19)(27, "button", 20);
        x.NdJ("click", function () {
          x.CHM(ft);
          const Me = x.MAs(25);
          return x.KtG(Me.toggle());
        });
        x._UZ(28, "i", 21);
        x.qZA()()()();
        x.YNc(29, Le, 6, 6, "div", 22);
        x.qZA();
        x.TgZ(30, "div", 14)(31, "div")(32, "label", 23);
        x._uU(33, "Date de fin");
        x.qZA();
        x.TgZ(34, "div", 16)(35, "input", 24, 25);
        x.NdJ("ngModelChange", function (Me) {
          return Lt.currentEvenement.dateFin = Me;
        });
        x.qZA();
        x.TgZ(38, "span", 19)(39, "button", 26);
        x.NdJ("click", function () {
          x.CHM(ft);
          const Me = x.MAs(37);
          return x.KtG(Me.toggle());
        });
        x._UZ(40, "i", 21);
        x.qZA()()()();
        x.YNc(41, he, 6, 5, "div", 27);
        x.qZA()();
        x.YNc(42, Re, 8, 8, "div", 28);
        x.YNc(43, ot, 8, 8, "div", 29);
        x.YNc(44, Oe, 11, 5, "div", 30);
        x.TgZ(45, "div", 31)(46, "div", 32)(47, "label", 33);
        x._uU(48, "Description");
        x.qZA();
        x.TgZ(49, "div", 34)(50, "ckeditor", 35, 36);
        x.NdJ("ngModelChange", function (Me) {
          return Lt.currentEvenement.description = Me;
        });
        x.qZA()()()()()();
        x.TgZ(53, "div", 37)(54, "div", 38)(55, "button", 39);
        x.NdJ("click", function () {
          return Lt.close();
        });
        x._uU(56, "Annuler");
        x.qZA();
        x.YNc(57, Ee, 4, 0, "button", 40);
        x.YNc(58, ke, 2, 1, "button", 41);
        x.YNc(59, Be, 2, 1, "button", 42);
        x.qZA();
        x.TgZ(60, "div", 38);
        x.YNc(61, Qe, 5, 4, "alert", 43);
        x.qZA()();
      }
      if (ve & 2) {
        const ft = x.MAs(12);
        const qe = x.MAs(24);
        const Me = x.MAs(25);
        const ne = x.MAs(36);
        const me = x.MAs(37);
        const it = x.MAs(52);
        x.xp6(2);
        x.Oqu(Lt.modaleParams.title);
        x.xp6(3);
        x.Q6J("ngBusy", Lt.loader);
        x.xp6(3);
        x.Q6J("ngClass", x.VKq(35, Pe, ft.invalid || ft.pristine && !ft.value));
        x.xp6(3);
        x.Q6J("ngModel", Lt.currentEvenement.libelle)("required", true);
        x.xp6(3);
        x.Q6J("ngModel", Lt.isAllDay);
        x.xp6(2);
        x.hij("", Lt.modaleParams.isReservationSalle ? "Réservation" : "Evénement", " sur toute la journée");
        x.xp6(3);
        x.Tol(x.VKq(37, Pe, qe.invalid || qe.pristine && !qe.value));
        x.xp6(4);
        x.Q6J("ngModel", Lt.currentEvenement.dateDebut)("bsConfig", Lt.configDatePicker)("required", true);
        x.uIk("aria-expanded", Me.isOpen);
        x.xp6(6);
        x.Q6J("ngIf", !Lt.isAllDay);
        x.xp6(2);
        x.Tol(x.VKq(39, Pe, ne.invalid || ne.pristine && !ne.value));
        x.xp6(4);
        x.Q6J("ngModel", Lt.currentEvenement.dateFin)("bsConfig", Lt.configDatePicker)("minDate", Lt.convertToDate(Lt.currentEvenement.dateDebut))("required", true);
        x.uIk("aria-expanded", me.isOpen);
        x.xp6(6);
        x.Q6J("ngIf", !Lt.isAllDay);
        x.xp6(1);
        x.Q6J("ngIf", Lt.modaleParams.displayTargets);
        x.xp6(1);
        x.Q6J("ngIf", Lt.modaleParams.displayTargets && Lt.currentEvenement.cibles.length > 0);
        x.xp6(1);
        x.Q6J("ngIf", Lt.isVisioEnable);
        x.xp6(1);
        x.Q6J("ngClass", x.VKq(41, Pe, it.invalid));
        x.xp6(5);
        x.Tol(x.VKq(43, Pe, it.invalid));
        x.Q6J("ngModel", Lt.currentEvenement.description)("config", Lt.ckeditorOptions)("required", true);
        x.xp6(7);
        x.Q6J("ngIf", Lt.currentEvenement.id > 0 && Lt.modaleParams.canDelete);
        x.xp6(1);
        x.Q6J("ngIf", Lt.currentEvenement.id > 0);
        x.xp6(1);
        x.Q6J("ngIf", Lt.currentEvenement.id === 0);
        x.xp6(2);
        x.Q6J("ngIf", (Lt.visios == null ? null : Lt.visios.length) && Lt.isVisioEnable);
      }
    },
    dependencies: [Z.mk, Z.sg, Z.O5, X._Y, X.Fj, X.Wl, X.JJ, X.JL, X.Q7, X.On, X.F, le.wx, fe.Np, fe.Y5, q.u, j.DC, w.EV, G.e, se.$],
    encapsulation: 2
  });
  return et;
})();
export let U = (() => {
  class et {
    constructor(ve, Lt, ft, qe, Me, ne) {
      this.modalService = ve;
      this.authStore = Lt;
      this.schedulerService = ft;
      this.agendaService = qe;
      this.edtService = Me;
      this.filtresAgendaEdtUserStore = ne;
      this._datePipe = new M.ifA();
    }
    openCreateDialog(ve, Lt, ft = [], qe = true, Me = "Création d'un événement") {
      const me = {
        modaleParams: {
          title: Me,
          idUser: ve,
          typeUser: Lt,
          canDelete: false,
          displayTargets: qe,
          isReservationSalle: Lt === M.meW.SALLE,
          selectedTargets: ft
        }
      };
      const it = {
        id: this.modalService.getModalsCount() + 1,
        ignoreBackdropClick: true,
        initialState: me
      };
      this.modalService.show(Yt, it);
      this.modalService.onHide.pipe((0, t.q)(1)).subscribe(bt => {});
    }
    openUpdateDialog(ve, Lt, ft, qe, Me) {
      const ne = Me !== undefined && ft.estSupprimable;
      const me = ft.cibles.find(yt => yt.search(M.meW.SALLE) !== -1);
      const Ut = {
        modaleParams: {
          title: me ? "Formulaire de modification d'une réservation" : "Formulaire d'édition d'un événement",
          idUser: ve,
          typeUser: Lt,
          canDelete: ne,
          displayTargets: qe,
          isReservationSalle: M.FSr.isNotEmptyString(me),
          selectedTargets: []
        },
        evenement: ft
      };
      const Ze = {
        id: this.modalService.getModalsCount() + 1,
        ignoreBackdropClick: true,
        initialState: Ut
      };
      this.modalService.show(Yt, Ze).content.onClose$.pipe((0, t.q)(1), (0, b.b)(yt => {
        switch (yt.reason) {
          case k.G.suppression:
            if (Object.isExists(yt.data) && Object.isExists(this.schedulerService.schedulerCurrent)) {
              this.schedulerService.schedulerCurrent.deleteEvent(ft.id);
            }
            break;
          case k.G.modification:
            if (Object.isExists(yt.data)) {
              let Wt = new M.gBp(yt.data);
              if (Object.isExists(this.schedulerService.schedulerCurrent)) {
                let hn = this.schedulerService.schedulerCurrent.getState();
                if (Wt.dateDebut < this._datePipe.transform(hn.min_date, "yyyy-MM-dd") && Wt.dateFin < this._datePipe.transform(hn.min_date, "yyyy-MM-dd") || Wt.dateFin > this._datePipe.transform(hn.max_date, "yyyy-MM-dd") && Wt.dateDebut > this._datePipe.transform(hn.max_date, "yyyy-MM-dd")) {
                  this.schedulerService.schedulerCurrent.deleteEvent(ft.id);
                }
                this.schedulerService.schedulerCurrent.setCurrentView(hn.date, hn.mode);
              }
            }
            break;
          default:
            return;
        }
      })).subscribe();
    }
    loadEvenementsAgendaOrEDT(ve, Lt, ft = false) {
      let qe;
      qe = ve.typeAgenda === M.eTt.EDT ? this.edtService.searchEvents(Lt, this.authStore.currentUser.codeOgec, ve.typeEntity, ve.idEntity, ft) : this.agendaService.searchEvents(Lt, this.authStore.currentUser.codeOgec, ve.typeEntity, ve.idEntity, ft);
      return qe;
    }
    refreshAgendaEDTEntity(ve, Lt, ft, qe) {
      const Me = this.filtresAgendaEdtUserStore.getTabAgendaEdtToDisplay().find(ne => ne.typeEntity === ve && ne.idEntity === Lt && ne.typeAgenda === qe);
      if (Object.isExists(Me)) {
        return this.loadEvenementsAgendaOrEDT(Me, ft, true);
      } else {
        return (0, i.of)(undefined);
      }
    }
  }
  et.ɵfac = function (ve) {
    return new (ve || et)(x.LFG(_U.tT), x.LFG(M.CnD), x.LFG(Dn.G), x.LFG(M.img), x.LFG(M.Hhl), x.LFG(Et.c));
  };
  et.ɵprov = x.Yz7({
    token: et,
    factory: et.ɵfac,
    providedIn: "root"
  });
  return et;
})();