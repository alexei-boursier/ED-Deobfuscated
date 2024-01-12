import * as i from "45007";
import * as I from "94650";
import * as U from "36895";
function Z(W, Pe) {
  if (W & 1) {
    const Le = I.EpF();
    I.TgZ(0, "div")(1, "button", 3);
    I.NdJ("click", function () {
      I.CHM(Le);
      const pe = I.oxw();
      return I.KtG(pe.agendaHelperService.openCreateDialog(pe.idEntity, pe.typeEntity, pe.selectedTargets));
    });
    I._UZ(2, "i", 4);
    I._uU(3, " Ajouter un événement ");
    I.qZA()();
  }
}
function X(W, Pe) {
  if (W & 1) {
    I.TgZ(0, "b");
    I._uU(1);
    I.qZA();
  }
  if (W & 2) {
    const Le = I.oxw().$implicit;
    I.xp6(1);
    I.Oqu(Le.sousTitre);
  }
}
function le(W, Pe) {
  if (W & 1) {
    I.TgZ(0, "span");
    I._uU(1);
    I.qZA();
  }
  if (W & 2) {
    const Le = I.oxw().$implicit;
    I.xp6(1);
    I.Oqu(Le.titre);
  }
}
function fe(W, Pe) {
  if (W & 1) {
    const Le = I.EpF();
    I.TgZ(0, "button", 14);
    I.NdJ("click", function () {
      I.CHM(Le);
      const pe = I.oxw(2).$implicit;
      const re = I.oxw();
      return I.KtG(re.agendaHelperService.openUpdateDialog(re.idEntity, re.typeEntity, pe, re.displayTargets, false));
    });
    I._UZ(1, "i", 15);
    I.qZA();
  }
}
function q(W, Pe) {
  if (W & 1) {
    const Le = I.EpF();
    I.TgZ(0, "button", 16);
    I.NdJ("click", function () {
      I.CHM(Le);
      const pe = I.oxw(2).$implicit;
      const re = I.oxw();
      return I.KtG(re.deleteEventAgenda(pe));
    });
    I._UZ(1, "i", 17);
    I.qZA();
  }
}
function j(W, Pe) {
  if (W & 1) {
    I.TgZ(0, "div", 11);
    I.YNc(1, fe, 2, 0, "button", 12);
    I.YNc(2, q, 2, 0, "button", 13);
    I.qZA();
  }
  if (W & 2) {
    const Le = I.oxw().$implicit;
    const he = I.oxw();
    I.xp6(1);
    I.Q6J("ngIf", he.droitsAgenda.CAN_UPDATE && he.isAuteurOrAdmin(Le));
    I.xp6(1);
    I.Q6J("ngIf", he.droitsAgenda.CAN_DELETE);
  }
}
function G(W, Pe) {
  if (W & 1) {
    const Le = I.EpF();
    I.TgZ(0, "li", 5)(1, "button", 6);
    I.NdJ("click", function () {
      const re = I.CHM(Le).$implicit;
      const Re = I.oxw();
      return I.KtG(Re.openDetailEvent(re));
    });
    I.YNc(2, X, 2, 1, "b", 0);
    I.TgZ(3, "em");
    I._UZ(4, "i", 7);
    I._uU(5);
    I.qZA();
    I.YNc(6, le, 2, 1, "span", 0);
    I.qZA();
    I._UZ(7, "ed-visio-btn-group", 8);
    I.YNc(8, j, 3, 2, "div", 9);
    I._UZ(9, "div", 10);
    I.qZA();
  }
  if (W & 2) {
    const Le = Pe.$implicit;
    const he = I.oxw();
    I.xp6(2);
    I.Q6J("ngIf", Le.sousTitre !== "");
    I.xp6(3);
    I.lnq(" ", !he.needToday || he.isFouE || he.isPersonnel ? "" : "De " + Le.heureDebut + " à " + Le.heureFin, " ", he.needToday && (he.isFouE || he.isPersonnel) ? Le.dateFormatee : "", " ", he.needToday ? "" : Le.dateFormatee, " ");
    I.xp6(1);
    I.Q6J("ngIf", Le.titre !== "");
    I.xp6(1);
    I.Q6J("visio", Le == null ? null : Le.visio)("idRPP", Le.id)("idProf", Le.idAuteur)("userSuffix", Le.typeEvenement === he.typeEVENEMENTSMESRDV.RPPFamille ? Le.heureDebut + " (" + (Le.eleve == null ? null : Le.eleve.prenom) + " " + (Le.eleve == null ? null : Le.eleve.nom) + " " + (Le.eleve == null || Le.eleve.classe == null ? null : Le.eleve.classe.code) + ")" : "")("disable", !Le.isToday)("typeVisio", Le.typeVisio);
    I.xp6(1);
    I.Q6J("ngIf", he.droitsAgenda.CAN_UPDATE || he.droitsAgenda.CAN_DELETE);
  }
}
export let F = (() => {
  class W {
    constructor(Le, he, pe, re, Re, Ge) {
      this.modalService = Le;
      this.agendaHelperService = he;
      this.authStore = pe;
      this.loaderService = re;
      this.agendaService = Re;
      this.uiService = Ge;
      this.needToday = false;
      this.typeEVENEMENTSMESRDV = i.iUh;
      this.isFouE = false;
      this.isPersonnel = false;
      this.idCurrentUser = this.authStore.currentUser.id;
      this.isFouE = this.authStore.isFouE();
      this.isPersonnel = this.authStore.isPersonnel();
    }
    ngOnInit() {
      if (this.idEntity === undefined) {
        this.idEntity = this.authStore.currentUser.id;
      }
      if (!i.FSr.isNotEmptyString(this.typeEntity)) {
        this.typeEntity = this.authStore.currentUser.typeCompte;
      }
      if (!Object.isExists(this.selectedTargets)) {
        this.selectedTargets = [];
      }
      this.isVisioEnable = i.Kg5.getModuleParametre(i.qzA.CLOUD, "visiosActif", this.authStore.currentUser) === "1";
    }
    openDetailEvent(Le) {
      const he = {
        evenement: Le
      };
      const pe = {
        id: this.modalService.getModalsCount() + 1,
        initialState: he
      };
      this.modalService.show(L.l, pe);
    }
    deleteEventAgenda(Le) {
      const pe = {
        id: this.modalService.getModalsCount() + 1,
        initialState: {
          title: "Suppression d'un événement",
          message: "Confirmer la suppression de l'événement ?"
        }
      };
      this.modalService.show(w.z, pe);
      this.modalService.onHide.pipe((0, t.q)(1), (0, b.h)(re => re === S.G.validation), (0, k.w)(re => {
        this.loader = this.loaderService.show(this);
        return this.agendaService.deleteEvent(this.authStore.currentUser.codeOgec, this.authStore.currentUser.typeCompte, this.authStore.currentUser.id, Le);
      }), (0, M.b)(re => {
        this.uiService.notifyEvent(i.DOJ.genericSuccess, "Votre événement a bien été supprimé !", "Agenda", "fa fa-calendar-o");
      }), (0, v.x)(() => this.loaderService.hide(this)), (0, C.K)(re => this.uiService.notifyErrorThenEmpty(re, true, "Agenda", "fa fa-warning"))).subscribe();
    }
    isAuteurOrAdmin(Le) {
      const he = new i.gBp(Le);
      return Object.isExists(this.espaceTravail) && this.espaceTravail.estAdmin || he.idAuteur === this.authStore.currentUser.id && he.typeAuteur === this.authStore.currentUser.typeCompte || this.authStore.isPersonnel();
    }
    onAccessVisio(Le) {
      if (Le) {
        this.loader = this.loaderService.show(this);
      } else {
        this.loaderService.hide(this);
      }
    }
  }
  W.ɵfac = function (Le) {
    return new (Le || W)(I.Y36(E.tT), I.Y36(O.U), I.Y36(i.CnD), I.Y36(x.S), I.Y36(i.img), I.Y36(i.VLf));
  };
  W.ɵcmp = I.Xpm({
    type: W,
    selectors: [["ed-agenda-evenements"]],
    inputs: {
      events: "events",
      droitsAgenda: "droitsAgenda",
      displayTargets: "displayTargets",
      idEntity: "idEntity",
      typeEntity: "typeEntity",
      selectedTargets: "selectedTargets",
      espaceTravail: "espaceTravail",
      needToday: "needToday"
    },
    decls: 4,
    vars: 5,
    consts: [[4, "ngIf"], [1, "ed-agenda-evenements"], ["class", "agenda-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "btn-ajouter-agenda", "type", "button", 1, "btn", "btn-secondary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "agenda-item"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar-o", "i-small"], [3, "visio", "idRPP", "idProf", "userSuffix", "disable", "typeVisio"], ["class", "float-end cliquable d-print-none", 4, "ngIf"], [1, "clearfix"], [1, "float-end", "cliquable", "d-print-none"], ["type", "button", "class", "btn active no-padding no-background", "title", "Modifier cet événement", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn active no-padding no-background", "title", "Supprimer cet événement", 3, "click", 4, "ngIf"], ["type", "button", "title", "Modifier cet événement", 1, "btn", "active", "no-padding", "no-background", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil", "margin-whitespace", "i-small"], ["type", "button", "title", "Supprimer cet événement", 1, "btn", "active", "no-padding", "no-background", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", "text-danger", "margin-whitespace", "i-small"]],
    template: function (Le, he) {
      if (Le & 1) {
        I.YNc(0, Z, 4, 0, "div", 0);
        I.TgZ(1, "ul", 1);
        I.YNc(2, G, 10, 12, "li", 2);
        I.ALo(3, "trackByProperty");
        I.qZA();
      }
      if (Le & 2) {
        I.Q6J("ngIf", he.droitsAgenda.CAN_CREATE);
        I.xp6(2);
        I.Q6J("ngForOf", he.events)("ngForTrackBy", I.lcZ(3, 3, "$index"));
      }
    },
    dependencies: [U.sg, U.O5, B.e, _F.$],
    styles: [".ed-agenda-evenements[_ngcontent-%COMP%]   .agenda-item[_ngcontent-%COMP%]{position:relative;padding-left:20px}.ed-agenda-evenements[_ngcontent-%COMP%]   .agenda-item[_ngcontent-%COMP%] + .agenda-item[_ngcontent-%COMP%]{margin-top:25px}.ed-agenda-evenements[_ngcontent-%COMP%]   .agenda-item[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;left:0;bottom:0;width:5px;background:#0c9ed0;border-radius:5px}.ed-agenda-evenements[_ngcontent-%COMP%]   .agenda-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.ed-agenda-evenements[_ngcontent-%COMP%]   .agenda-item[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{display:block;font-size:11px;font-weight:700}.ed-agenda-evenements[_ngcontent-%COMP%]   .agenda-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin:5px 0 0;font-size:15px;font-weight:400}"]
  });
  return W;
})();