import * as i from "94650";
import * as t from "45007";
import * as b from "36895";
import * as k from "17493";
function v(L, I) {
  if (L & 1) {
    const E = i.EpF();
    i.TgZ(0, "span")(1, "button", 3);
    i.NdJ("click", function () {
      i.CHM(E);
      const x = i.oxw();
      return i.KtG(x.editDestinataires.emit(x.destinataires));
    });
    i._uU(2);
    i.qZA();
    i.TgZ(3, "button", 4);
    i.NdJ("click", function () {
      i.CHM(E);
      const x = i.oxw();
      return i.KtG(x.removeDestinataires.emit(x.destinataires));
    });
    i._UZ(4, "i", 5);
    i.qZA()();
  }
  if (L & 2) {
    const E = i.oxw();
    const O = i.MAs(2);
    i.Tol(E.getIconTypeUser());
    i.xp6(1);
    i.Q6J("contextMenu", O);
    i.xp6(1);
    i.Oqu(E.libelle);
  }
}
function C(L, I) {
  if (L & 1) {
    i._uU(0);
  }
  if (L & 2) {
    const E = i.oxw().$implicit;
    i.hij(" ", E.libelle, " ");
  }
}
function w(L, I) {
  if (L & 1) {
    const E = i.EpF();
    i.YNc(0, C, 1, 1, "ng-template", 6);
    i.NdJ("execute", function () {
      const U = i.CHM(E).$implicit;
      return i.KtG(U.execute());
    });
  }
}
export let F = (() => {
  class L {
    constructor(E) {
      this.authStore = E;
      this.libelle = "";
      this.editDestinataires = new i.vpe();
      this.moveDestinataires = new i.vpe();
      this.removeDestinataires = new i.vpe();
      this._displayNomPipe = new t.$t3();
    }
    ngOnChanges(E) {
      if (E.destinataires?.previousValue !== E.destinataires?.currentValue) {
        this.destinataires = this.destinataires.filter(U => U.to_cc_cci === this.toCcCci);
        let O = t.qYR[this.type] || this.type;
        if (this.type === t.dcH.ESPACE_TRAVAIL) {
          O = "membre";
        } else if (this.type === t.qzA.RDVPP) {
          O = "invité";
        } else if (this.type === t.qzA.MESSAGERIE) {
          O = "destinataire";
        }
        let x = `${this.destinataires.length} ${O}s`;
        if (this.destinataires.length <= 2) {
          const U = [];
          this.destinataires.forEach(B => {
            if (this.type === t.dcH.FAMILLE_RESPONSABLE || this.type === t.dcH.FAMILLE_CONJOINT) {
              const F = B.prenom;
              B.prenom = "Famille";
              U.push(this._displayNomPipe.transform(B, false, false, this.authStore.isFouE()));
              B.prenom = F;
            } else {
              U.push(this._displayNomPipe.transform(B, false, true, this.authStore.isFouE()));
            }
          });
          x = U.join(", ");
        }
        this.libelle = x;
      }
    }
    menuOptions() {
      const E = [];
      if (this.toCcCci !== t.tHm.TYPE_MESSAGERIE_DEST.TO) {
        E.push({
          execute: () => this.moveDestinataires.emit(t.tHm.TYPE_MESSAGERIE_DEST.TO),
          libelle: "Déplacer dans les 'à'"
        });
      }
      if (this.toCcCci !== t.tHm.TYPE_MESSAGERIE_DEST.CC) {
        E.push({
          execute: () => this.moveDestinataires.emit(t.tHm.TYPE_MESSAGERIE_DEST.CC),
          libelle: "Déplacer dans les 'cc'"
        });
      }
      if (this.toCcCci !== t.tHm.TYPE_MESSAGERIE_DEST.CCI && !this.authStore.isFouE()) {
        E.push({
          execute: () => this.moveDestinataires.emit(t.tHm.TYPE_MESSAGERIE_DEST.CCI),
          libelle: "Déplacer dans les 'cci'"
        });
      }
      return E;
    }
    getIconTypeUser() {
      return `ed-tags ed-tags-${t.FSr.getIconTypePersonne(this.type)}`;
    }
  }
  L.ɵfac = function (E) {
    return new (E || L)(i.Y36(t.CnD));
  };
  L.ɵcmp = i.Xpm({
    type: L,
    selectors: [["ed-groupe-destinataire"]],
    inputs: {
      toCcCci: "toCcCci",
      type: "type",
      destinataires: "destinataires"
    },
    outputs: {
      editDestinataires: "editDestinataires",
      moveDestinataires: "moveDestinataires",
      removeDestinataires: "removeDestinataires"
    },
    features: [i.TTD],
    decls: 5,
    vars: 5,
    consts: [[3, "class", 4, "ngIf"], ["menu", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "btn", "active", "no-background", "no-padding", 3, "contextMenu", "click"], ["type", "button", "aria-label", "Supprimer le groupe de destinataires", 1, "btn", "active", "no-padding", "no-background", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-close", "i-small", "margin-whitespace"], ["contextMenuItem", "", 3, "execute"]],
    template: function (E, O) {
      if (E & 1) {
        i.YNc(0, v, 5, 4, "span", 0);
        i.TgZ(1, "context-menu", null, 1);
        i.YNc(3, w, 1, 0, null, 2);
        i.ALo(4, "trackByProperty");
        i.qZA();
      }
      if (E & 2) {
        i.Q6J("ngIf", O.destinataires.length);
        i.xp6(3);
        i.Q6J("ngForOf", O.menuOptions())("ngForTrackBy", i.lcZ(4, 3, "$index"));
      }
    },
    dependencies: [b.sg, b.O5, k.lB, k.GI, k.n5, M.$],
    styles: [".ed-tags[_ngcontent-%COMP%]{background-color:#fff;color:#06b;cursor:pointer;border-radius:25px;padding:5px 10px;display:block;float:left;margin:1px 5px}.ed-tags.ed-tags-enseignant[_ngcontent-%COMP%]{background-color:#234ca5;color:#fff}.ed-tags.ed-tags-personnel[_ngcontent-%COMP%]{background-color:#457dbb;color:#fff}.ed-tags.ed-tags-famille[_ngcontent-%COMP%], .ed-tags.ed-tags-invite-rdvpp[_ngcontent-%COMP%]{background-color:#4d664a;color:#fff}.ed-tags.ed-tags-espace-travail[_ngcontent-%COMP%], .ed-tags.ed-tags-messagerie-nonLu[_ngcontent-%COMP%]{background-color:#3c404a;color:#fff}.ed-tags.ed-tags-eleve[_ngcontent-%COMP%]{background-color:#132959;color:#fff}"],
    changeDetection: 0
  });
  return L;
})();