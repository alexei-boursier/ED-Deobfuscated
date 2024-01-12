import * as i from "45007";
import * as t from "94650";
function w(B, F) {
  if (B & 1) {
    t._UZ(0, "div", 8);
    t.ALo(1, "filterHtml");
  }
  if (B & 2) {
    const Z = t.oxw();
    t.Q6J("innerHTML", t.lcZ(1, 1, Z.evenementFormated.description), t.oJD);
  }
}
function S(B, F) {
  if (B & 1) {
    t._UZ(0, "div", 10);
  }
  if (B & 2) {
    const Z = t.oxw(2);
    t.Q6J("innerHTML", Z.evenementFormated.libelle, t.oJD);
  }
}
function L(B, F) {
  if (B & 1) {
    t.YNc(0, S, 1, 1, "div", 9);
  }
  if (B & 2) {
    const Z = t.oxw();
    t.Q6J("ngIf", Z.evenementFormated.libelle !== "");
  }
}
function I(B, F) {
  if (B & 1) {
    t._UZ(0, "ed-visio-btn-group", 15);
  }
  if (B & 2) {
    const Z = t.oxw(2);
    t.Q6J("visio", Z.evenementFormated == null ? null : Z.evenementFormated.visio)("disable", !Z.evenementFormated.isToday || !Z.isVisioEnable)("typeVisio", Z.evenement.typeVisio);
  }
}
function E(B, F) {
  if (B & 1) {
    const Z = t.EpF();
    t.TgZ(0, "ed-visio-btn-group", 16);
    t.NdJ("accessVisio", function (le) {
      t.CHM(Z);
      const fe = t.oxw(2);
      return t.KtG(fe.onAccessVisio(le));
    });
    t.qZA();
  }
  if (B & 2) {
    const Z = t.oxw(2);
    t.Q6J("idRPP", Z.evenementFormated.idRPP)("idProf", Z.evenement.idAuteur)("userSuffix", Z.evenement.heureDebut + " (" + (Z.evenement.eleve == null ? null : Z.evenement.eleve.prenom) + " " + (Z.evenement.eleve == null ? null : Z.evenement.eleve.nom) + " " + (Z.evenement.eleve.classe == null ? null : Z.evenement.eleve.classe.code) + ")")("visio", Z.evenementFormated == null ? null : Z.evenementFormated.visio)("disable", !Z.evenement.isToday || !Z.isVisioEnable)("typeVisio", Z.evenement.typeVisio);
  }
}
function O(B, F) {
  if (B & 1) {
    const Z = t.EpF();
    t.TgZ(0, "ed-visio-btn-group", 17);
    t.NdJ("accessVisio", function (le) {
      t.CHM(Z);
      const fe = t.oxw(2);
      return t.KtG(fe.onAccessVisio(le));
    });
    t.qZA();
  }
  if (B & 2) {
    const Z = t.oxw(2);
    t.Q6J("idRPP", Z.evenement.id)("btnTooltip", Z.isVisioEnable ? "Rejoindre la visio" : "Visio non disponible. Merci de contacter votre établissement !")("disable", !Z.evenement.isToday || !Z.isVisioEnable)("typeVisio", Z.evenement.typeVisio);
  }
}
function x(B, F) {
  if (B & 1) {
    t.TgZ(0, "div", 11);
    t.YNc(1, I, 1, 3, "ed-visio-btn-group", 12);
    t.YNc(2, E, 1, 6, "ed-visio-btn-group", 13);
    t.YNc(3, O, 1, 4, "ed-visio-btn-group", 14);
    t.qZA();
  }
  if (B & 2) {
    const Z = t.oxw();
    t.xp6(1);
    t.Q6J("ngIf", Z.evenementFormated.visio);
    t.xp6(1);
    t.Q6J("ngIf", Z.evenement.typeEvenement === Z.typeEVENEMENTSMESRDV.RPPFamille && Z.evenement.isVisio);
    t.xp6(1);
    t.Q6J("ngIf", Z.evenement.typeEvenement === Z.typeEVENEMENTSMESRDV.RPPProf && Z.evenement.isVisio);
  }
}
export let l = (() => {
  class B {
    constructor(Z, X, le) {
      this.authStore = Z;
      this.loaderService = X;
      this.modalRef = le;
      this.typeEVENEMENTSMESRDV = i.iUh;
      this.evenementFormated = {
        libelle: "",
        description: "",
        visio: undefined,
        isPast: undefined,
        idRPP: 0,
        prenomEleve: "",
        nomAuteur: "",
        sexeAuteur: "",
        isToday: undefined
      };
    }
    ngOnInit() {
      this.isVisioEnable = i.Kg5.getModuleParametre(i.qzA.CLOUD, "visiosActif", this.authStore.currentUser) === "1";
      if (this.evenement instanceof i.gBp) {
        this.evenementFormated.description = this.evenement.descriptionDecode;
        this.evenementFormated.libelle = this.evenement.libelle;
        this.evenementFormated.visio = this.evenement.visio;
        this.evenementFormated.isPast = this.evenement.isPast;
        this.evenementFormated.isToday = this.evenement.isToday;
        if ((this.evenement.typeEvenement === i.iUh.RDVPP || this.evenement.typeEvenement === i.iUh.RDVPPInvite || this.evenement.typeEvenement === i.iUh.RPPFamille) && Object.isExists(this.evenement.eleve)) {
          this.evenementFormated.prenomEleve = this.evenement.eleve.prenom;
          this.evenementFormated.nomAuteur = this.evenement.nomAuteur;
          this.evenementFormated.sexeAuteur = this.evenement.sexeAuteur;
        }
        if (this.evenement.typeEvenement === i.iUh.RPPFamille) {
          this.evenementFormated.idRPP = +this.evenement.cibles[0].substring(3);
        }
      } else if (this.evenement instanceof i.lTZ) {
        this.evenementFormated.description = this.evenement.descriptionGenerate;
      }
      this.evenementFormated.libelle = i.FSr.isNotEmptyString(this.evenementFormated.libelle) ? this.evenementFormated.libelle : "Détail";
    }
    onAccessVisio(Z) {
      if (Z) {
        this.loader = this.loaderService.show(this);
      } else {
        this.loaderService.hide(this);
      }
    }
    close() {
      this.modalRef.hide();
    }
  }
  B.ɵfac = function (Z) {
    return new (Z || B)(t.Y36(i.CnD), t.Y36(b.S), t.Y36(k.UZ));
  };
  B.ɵcmp = t.Xpm({
    type: B,
    selectors: [["ed-modal-details-evenement-scheduler"]],
    inputs: {
      evenement: "evenement"
    },
    decls: 10,
    vars: 4,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "clearfix"], [1, "modal-body"], ["class", "ed-cke", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["displayLibelle", ""], ["class", "modal-footer", 4, "ngIf"], [1, "ed-cke", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "modal-footer"], [3, "visio", "disable", "typeVisio", 4, "ngIf"], [3, "idRPP", "idProf", "userSuffix", "visio", "disable", "typeVisio", "accessVisio", 4, "ngIf"], [3, "idRPP", "btnTooltip", "disable", "typeVisio", "accessVisio", 4, "ngIf"], [3, "visio", "disable", "typeVisio"], [3, "idRPP", "idProf", "userSuffix", "visio", "disable", "typeVisio", "accessVisio"], [3, "idRPP", "btnTooltip", "disable", "typeVisio", "accessVisio"]],
    template: function (Z, X) {
      if (Z & 1) {
        t.TgZ(0, "div", 0)(1, "h3", 1);
        t._uU(2);
        t.qZA();
        t.TgZ(3, "button", 2);
        t.NdJ("click", function () {
          return X.close();
        });
        t.qZA();
        t._UZ(4, "div", 3);
        t.qZA();
        t.TgZ(5, "div", 4);
        t.YNc(6, w, 2, 3, "div", 5);
        t.YNc(7, L, 1, 1, "ng-template", null, 6, t.W1O);
        t.qZA();
        t.YNc(9, x, 4, 3, "div", 7);
      }
      if (Z & 2) {
        const le = t.MAs(8);
        let fe;
        t.xp6(2);
        t.hij(" ", ((fe = X.evenement) == null ? null : fe.typeEvenement) === X.typeEVENEMENTSMESRDV.RDVPP || ((fe = X.evenement) == null ? null : fe.typeEvenement) === X.typeEVENEMENTSMESRDV.RDVPPInvite || ((fe = X.evenement) == null ? null : fe.typeEvenement) === X.typeEVENEMENTSMESRDV.RPPFamille || ((fe = X.evenement) == null ? null : fe.typeEvenement) === X.typeEVENEMENTSMESRDV.RPPProf ? (fe = X.evenement) == null ? null : fe.titreEvenement : X.evenementFormated.libelle, " ");
        t.xp6(4);
        t.Q6J("ngIf", X.evenementFormated.description !== "")("ngIfElse", le);
        t.xp6(3);
        t.Q6J("ngIf", X.evenementFormated.visio || X.evenement.typeEvenement === X.typeEVENEMENTSMESRDV.RPPFamille && X.evenement.isVisio || X.evenement.typeEvenement === X.typeEVENEMENTSMESRDV.RPPProf && X.evenement.isVisio);
      }
    },
    dependencies: [M.O5, v.e, C.w]
  });
  return B;
})();