import * as i from "94650";
import * as t from "45007";
import * as _M from "52497";
import * as C from "36895";
import * as w from "24006";
function S(fe, q) {
  if (fe & 1) {
    i.TgZ(0, "span");
    i._UZ(1, "i", 9);
    i.TgZ(2, "span", 10);
    i._uU(3, "Commentaires");
    i.qZA()();
  }
}
function L(fe, q) {
  if (fe & 1) {
    const j = i.EpF();
    i.TgZ(0, "span")(1, "button", 11);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw();
      return i.KtG(se.setModeEditable());
    });
    i._UZ(2, "i", 9);
    i.TgZ(3, "span", 10);
    i._uU(4, "Commentaires");
    i.qZA()()();
  }
}
function I(fe, q) {
  if (fe & 1) {
    const j = i.EpF();
    i.TgZ(0, "button", 12);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw();
      return i.KtG(se.setModeEditable(true));
    });
    i._UZ(1, "i", 13);
    i.qZA();
  }
}
function E(fe, q) {
  if (fe & 1) {
    const j = i.EpF();
    i.TgZ(0, "button", 14);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw();
      return i.KtG(se.setModeEditable(false));
    });
    i._UZ(1, "i", 15);
    i.qZA();
  }
}
function O(fe, q) {
  if (fe & 1) {
    const j = i.EpF();
    i.TgZ(0, "button", 24);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw().$implicit;
      const W = i.oxw();
      return i.KtG(W.archiverCommentaire(se));
    });
    i._UZ(1, "i", 25);
    i.qZA();
  }
}
function x(fe, q) {
  if (fe & 1) {
    const j = i.EpF();
    i.TgZ(0, "button", 26);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw().$implicit;
      const W = i.oxw();
      return i.KtG(W.setModeEditable(true, se));
    });
    i._UZ(1, "i", 27);
    i.qZA();
  }
}
function U(fe, q) {
  if (fe & 1) {
    const j = i.EpF();
    i.TgZ(0, "button", 28);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw().$implicit;
      const W = i.oxw();
      return i.KtG(W.setModeEditable(false, se));
    });
    i._UZ(1, "i", 29);
    i.qZA();
  }
}
function B(fe, q) {
  if (fe & 1) {
    i.TgZ(0, "span", 30);
    i._uU(1);
    i.ALo(2, "edDate");
    i.qZA();
  }
  if (fe & 2) {
    const j = i.oxw().$implicit;
    i.xp6(1);
    i.hij("le ", i.xi3(2, 1, j.date, "d MMMM y"), "");
  }
}
const F = function (fe, q, j, G, se, W, Pe, Le) {
  return {
    "icon-ed_personnel": fe,
    "text-personnel": q,
    "icon-ed_enseignant": j,
    "text-enseignant": G,
    "icon-ed_famille": se,
    "text-famille": W,
    "icon-ed_eleve": Pe,
    "text-eleve": Le
  };
};
function Z(fe, q) {
  if (fe & 1) {
    i.TgZ(0, "li")(1, "div", 16);
    i.YNc(2, O, 2, 0, "button", 17);
    i.YNc(3, x, 2, 0, "button", 18);
    i.YNc(4, U, 2, 0, "button", 19);
    i.qZA();
    i.TgZ(5, "div", 20)(6, "strong");
    i._uU(7);
    i.qZA();
    i._UZ(8, "i", 21);
    i.YNc(9, B, 3, 4, "span", 22);
    i._UZ(10, "p", 23);
    i.ALo(11, "nl2br");
    i.ALo(12, "base64");
    i.qZA()();
  }
  if (fe & 2) {
    const j = q.$implicit;
    const G = i.oxw();
    i.xp6(2);
    i.Q6J("ngIf", G.isModerateur && !j.supprime || j.idAuteur === G.authStore.currentUser.id && j.profilAuteur === G.authStore.currentUser.typeCompte && G.authStore.isProfesseur());
    i.xp6(1);
    i.Q6J("ngIf", (!G.modeEditableActif || G.commentaireCourant.id !== j.id) && j.idAuteur === G.authStore.currentUser.id && j.profilAuteur === G.authStore.currentUser.typeCompte && G.authStore.isProfesseur());
    i.xp6(1);
    i.Q6J("ngIf", G.modeEditableActif && G.commentaireCourant.id === j.id);
    i.xp6(3);
    i.hij("Par ", j.auteur, "");
    i.xp6(1);
    i.Q6J("ngClass", i.qlk(11, F, G.authUtilHelper.isPersonnel(j.profilAuteur), G.authUtilHelper.isPersonnel(j.profilAuteur), G.authUtilHelper.isProfesseur(j.profilAuteur), G.authUtilHelper.isProfesseur(j.profilAuteur), G.authUtilHelper.isFamille(j.profilAuteur), G.authUtilHelper.isFamille(j.profilAuteur), G.authUtilHelper.isEleve(j.profilAuteur), G.authUtilHelper.isEleve(j.profilAuteur)));
    i.xp6(1);
    i.Q6J("ngIf", j.date && j.date !== "");
    i.xp6(1);
    i.Q6J("innerHTML", i.lcZ(11, 7, i.lcZ(12, 9, j.message)), i.oJD);
  }
}
function X(fe, q) {
  if (fe & 1) {
    const j = i.EpF();
    i.TgZ(0, "form", 31, 32)(2, "div", 33)(3, "label", 34);
    i._uU(4, "Votre message");
    i.qZA();
    i.TgZ(5, "textarea", 35);
    i.NdJ("ngModelChange", function (se) {
      i.CHM(j);
      const W = i.oxw();
      return i.KtG(W.commentaireCourant.message = se);
    });
    i.qZA()();
    i.TgZ(6, "div", 36)(7, "div", 37)(8, "div", 38)(9, "button", 39);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw();
      return i.KtG(se.addOrEditComent());
    });
    i._uU(10, " Enregistrer ");
    i.qZA();
    i.TgZ(11, "button", 40);
    i.NdJ("click", function () {
      i.CHM(j);
      const se = i.oxw();
      return i.KtG(se.setModeEditable(false));
    });
    i._uU(12, " Annuler ");
    i.qZA()();
    i._UZ(13, "div", 4);
    i.qZA()()();
  }
  if (fe & 2) {
    const j = i.oxw();
    i.xp6(5);
    i.Q6J("ngModel", j.commentaireCourant.message);
    i.xp6(4);
    i.Q6J("disabled", j.commentaireCourant.message === "");
  }
}
export let M = (() => {
  class fe {
    constructor(j, G) {
      this.authStore = j;
      this.modalService = G;
      this.commentaireAdded = new i.vpe();
      this.commentaireDeleted = new i.vpe();
      this.authUtilHelper = t.IDb;
      this.modeEditableActif = false;
      this.commentaireCourant = new t.j2C();
    }
    ngOnChanges(j) {
      this.isModerateur = !!Object.isExists(this.isModerateur) && this.isModerateur;
      if (Array.isArray(this.tabCommentaires)) {
        this.tabCommentairesEditable = this.tabCommentaires.map(G => new t.j2C(G));
      }
    }
    setModeEditable(j, G) {
      this.modeEditableActif = Object.isExists(j) ? j : !this.modeEditableActif;
      this.commentaireCourant = Object.isExists(G) ? new t.j2C({
        ...G,
        message: G.commentaireDecode
      }) : new t.j2C();
    }
    archiverCommentaire(j) {
      const G = this.authStore.currentUser.id === j.idAuteur && this.authStore.currentUser.typeCompte === j.profilAuteur ? "<strong>de votre commentaire</strong>" : `du commentaire \xe9crit par <strong>${j.auteur}</strong>`;
      const se = {
        id: this.modalService.getModalsCount() + 1,
        initialState: {
          title: "Supprimer le commentaire",
          message: `Confirmez-vous la suppression ${G} ?`
        }
      };
      this.modalService.show(b.z, se);
      this.modalService.onHide.pipe((0, k.q)(1)).subscribe(W => {
        switch (W) {
          case _M.G.backdrop:
          case _M.G.cancel:
            break;
          case _M.G.validation:
            this.commentaireDeleted.emit(j);
        }
      });
    }
    addOrEditComent() {
      const j = new t.j2C(this.commentaireCourant);
      j.message = t.YC.base64encode(this.commentaireCourant.message);
      this.setModeEditable(false, j);
      this.commentaireAdded.emit(j);
    }
    trackByCommentaireFn(j) {
      return j;
    }
  }
  fe.ɵfac = function (j) {
    return new (j || fe)(i.Y36(t.CnD), i.Y36(v.tT));
  };
  fe.ɵcmp = i.Xpm({
    type: fe,
    selectors: [["ed-bloc-commentaires"]],
    inputs: {
      tabCommentaires: "tabCommentaires",
      idSupport: "idSupport",
      typeSupport: "typeSupport",
      afficherFormulaireCommentaires: "afficherFormulaireCommentaires",
      afficherCommentaires: "afficherCommentaires",
      isModerateur: "isModerateur"
    },
    outputs: {
      commentaireAdded: "commentaireAdded",
      commentaireDeleted: "commentaireDeleted"
    },
    features: [i.TTD],
    decls: 10,
    vars: 7,
    consts: [[1, "d-print-none", "commentaires"], [4, "ngIf"], ["type", "button", "class", "btn float-end btn-action-rounded", "title", "Ajouter un commentaire", "aria-label", "Afficher le bloc pour ajouter un commentaire", 3, "click", 4, "ngIf"], ["class", "btn float-end btn-action-rounded", "title", "Annuler", "aria-label", "Masquer le bloc pour ajouter un commentaire", "type", "button", 3, "click", 4, "ngIf"], [1, "clearfix"], [1, "encart-commentaires"], [1, "cahierdetexte-commentaire", "list-elem", "d-print-none"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["method", "post", "name", "formCommentaire", "ngForm", "", "novalidate", "", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-comments"], [1, "margin-whitespace"], ["type", "button", 1, "btn", "active", "no-background", "no-padding", 3, "click"], ["type", "button", "title", "Ajouter un commentaire", "aria-label", "Afficher le bloc pour ajouter un commentaire", 1, "btn", "float-end", "btn-action-rounded", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "btn-primary-color"], ["title", "Annuler", "aria-label", "Masquer le bloc pour ajouter un commentaire", "type", "button", 1, "btn", "float-end", "btn-action-rounded", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle", "btn-primary-color"], [1, "float-end"], ["type", "button", "aria-label", "Supprimer le commentaire", "class", "btn btn-danger-color no-padding no-background", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Modifier le commentaire", "class", "btn btn-primary-color no-padding no-background", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Annuler la modification du commentaire", "class", "btn btn-primary-color no-padding no-background", 3, "click", 4, "ngIf"], [1, "comment-text"], [1, "margin-whitespace", "fa", "icon-auteur", "material-icons", "size-17", 3, "ngClass"], ["class", "date sub-text", 4, "ngIf"], [1, "text-breaked-word", 3, "innerHTML"], ["type", "button", "aria-label", "Supprimer le commentaire", 1, "btn", "btn-danger-color", "no-padding", "no-background", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", "size-17"], ["type", "button", "aria-label", "Modifier le commentaire", 1, "btn", "btn-primary-color", "no-padding", "no-background", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil", "size-17", "margin-whitespace"], ["type", "button", "aria-label", "Annuler la modification du commentaire", 1, "btn", "btn-primary-color", "no-padding", "no-background", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-close", "size-17", "margin-whitespace"], [1, "date", "sub-text"], ["method", "post", "name", "formCommentaire", "ngForm", "", "novalidate", ""], ["formCommentaire", "ngForm"], [1, "row"], ["for", "commentaire", 1, "form-label"], ["id", "commentaire", "name", "commentaire", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "modal-footer", "mt-3"], [1, "w-100"], [1, "col-lg-12"], ["type", "button", "id", "add", "name", "add", 1, "btn", "btn-success", "float-end", "small-text", 3, "disabled", "click"], ["type", "button", "id", "buttonSaveComment", "name", "buttonSaveComment", 1, "btn", "btn-danger", "float-start", "small-text", 3, "click"]],
    template: function (j, G) {
      if (j & 1) {
        i.TgZ(0, "h4", 0);
        i.YNc(1, S, 4, 0, "span", 1);
        i.YNc(2, L, 5, 0, "span", 1);
        i.YNc(3, I, 2, 0, "button", 2);
        i.YNc(4, E, 2, 0, "button", 3);
        i._UZ(5, "span", 4);
        i.qZA();
        i.TgZ(6, "div", 5)(7, "ul", 6);
        i.YNc(8, Z, 13, 20, "li", 7);
        i.qZA()();
        i.YNc(9, X, 14, 2, "form", 8);
      }
      if (j & 2) {
        i.xp6(1);
        i.Q6J("ngIf", G.afficherCommentaires && !G.afficherFormulaireCommentaires);
        i.xp6(1);
        i.Q6J("ngIf", G.idSupport > 0 && G.afficherFormulaireCommentaires);
        i.xp6(1);
        i.Q6J("ngIf", !G.modeEditableActif && G.afficherFormulaireCommentaires);
        i.xp6(1);
        i.Q6J("ngIf", G.modeEditableActif);
        i.xp6(4);
        i.Q6J("ngForOf", G.tabCommentairesEditable)("ngForTrackBy", G.trackByCommentaireFn);
        i.xp6(1);
        i.Q6J("ngIf", G.modeEditableActif);
      }
    },
    dependencies: [C.mk, C.sg, C.O5, w._Y, w.Fj, w.JJ, w.JL, w.On, w.F, t.YC, t.kM_, t.ifA],
    styles: [".encart-commentaires[_ngcontent-%COMP%]{margin-top:10px}.encart-commentaires[_ngcontent-%COMP%]   div.comment-text[_ngcontent-%COMP%]   span.date.sub-text[_ngcontent-%COMP%]{font-style:italic;font-size:13px;margin-bottom:5px;display:block;margin-top:5px}.btn-action-rounded[_ngcontent-%COMP%]{padding:0}"],
    changeDetection: 0
  });
  return fe;
})();