import * as i from "94650";
function k(I, E) {
  if (I & 1) {
    const O = i.EpF();
    i.TgZ(0, "button", 3);
    i.NdJ("click", function () {
      i.CHM(O);
      const U = i.oxw();
      return i.KtG(U.composeSelection.emit("P"));
    });
    i._UZ(1, "i", 4)(2, "i", 5);
    i.qZA();
  }
  if (I & 2) {
    const O = i.oxw();
    i.MGl("title", "", O.tooltipAction, " des enseignants");
    i.Q2q("aria-label", "", O.tooltipAction, " des enseignants");
  }
}
function M(I, E) {
  if (I & 1) {
    const O = i.EpF();
    i.TgZ(0, "button", 3);
    i.NdJ("click", function () {
      i.CHM(O);
      const U = i.oxw();
      return i.KtG(U.composeSelection.emit("A"));
    });
    i._UZ(1, "i", 4)(2, "i", 6);
    i.qZA();
  }
  if (I & 2) {
    const O = i.oxw();
    i.MGl("title", "", O.tooltipAction, " des personnels");
    i.Q2q("aria-label", "", O.tooltipAction, " des personnels");
  }
}
function v(I, E) {
  if (I & 1) {
    const O = i.EpF();
    i.TgZ(0, "button", 3);
    i.NdJ("click", function () {
      i.CHM(O);
      const U = i.oxw();
      return i.KtG(U.composeSelection.emit("E"));
    });
    i._UZ(1, "i", 4)(2, "i", 7);
    i.qZA();
  }
  if (I & 2) {
    const O = i.oxw();
    i.MGl("title", "", O.tooltipAction, " des élèves");
    i.Q2q("aria-label", "", O.tooltipAction, " des élèves");
  }
}
function C(I, E) {
  if (I & 1) {
    const O = i.EpF();
    i.TgZ(0, "button", 3);
    i.NdJ("click", function () {
      i.CHM(O);
      const U = i.oxw();
      return i.KtG(U.composeSelection.emit("F"));
    });
    i._UZ(1, "i", 4)(2, "i", 8);
    i.qZA();
  }
  if (I & 2) {
    const O = i.oxw();
    i.MGl("title", "", O.tooltipAction, " des familles");
    i.Q2q("aria-label", "", O.tooltipAction, " des familles");
  }
}
function w(I, E) {
  if (I & 1) {
    const O = i.EpF();
    i.TgZ(0, "button", 3);
    i.NdJ("click", function () {
      i.CHM(O);
      const U = i.oxw();
      return i.KtG(U.composeSelection.emit("W"));
    });
    i._UZ(1, "i", 4)(2, "i", 9);
    i.qZA();
  }
  if (I & 2) {
    const O = i.oxw();
    i.MGl("title", "", O.tooltipAction, " des membres d'un espace de travail");
    i.Q2q("aria-label", "", O.tooltipAction, " des membres d'un espace de travail");
  }
}
function S(I, E) {
  if (I & 1) {
    const O = i.EpF();
    i.TgZ(0, "button", 3);
    i.NdJ("click", function () {
      i.CHM(O);
      const U = i.oxw();
      return i.KtG(U.composeSelectionListeContacts.emit());
    });
    i._UZ(1, "i", 4)(2, "i", 10);
    i.qZA();
  }
  if (I & 2) {
    const O = i.oxw();
    i.MGl("title", "", O.tooltipAction, " une liste de contacts");
    i.Q2q("aria-label", "", O.tooltipAction, " une liste de contacts");
  }
}
export let G = (() => {
  class I {
    constructor(O) {
      this.authStore = O;
      this.tooltipAction = "Sélectionner";
      this.composeSelection = new i.vpe();
      this.composeSelectionListeContacts = new i.vpe();
    }
    ngOnChanges(O) {
      if (O.parametrages) {
        this.displayListesContacts = (typeof this.parametrages.hideListesContacts === "undefined" || !this.parametrages.hideListesContacts) && this.authStore.isProfOuPersonnel();
      }
    }
  }
  I.ɵfac = function (O) {
    return new (O || I)(i.Y36(t.CnD));
  };
  I.ɵcmp = i.Xpm({
    type: I,
    selectors: [["ed-choose-destinataire-tag"]],
    inputs: {
      parametrages: "parametrages",
      tooltipAction: "tooltipAction"
    },
    outputs: {
      composeSelection: "composeSelection",
      composeSelectionListeContacts: "composeSelectionListeContacts"
    },
    features: [i.TTD],
    decls: 8,
    vars: 6,
    consts: [[1, "float-end"], [1, "btn-group", "float-end", "btn-destinataires", "btn-tocccci"], ["type", "button", "class", "btn btn-primary", "container", "body", 3, "title", "click", 4, "ngIf"], ["type", "button", "container", "body", 1, "btn", "btn-primary", 3, "title", "click"], ["aria-hidden", "true", 1, "icon-ed_plus", "i-small"], ["aria-hidden", "true", 1, "icon-ed_enseignant"], ["aria-hidden", "true", 1, "icon-ed_personnel"], ["aria-hidden", "true", 1, "icon-ed_eleve"], ["aria-hidden", "true", 1, "icon-ed_famille"], ["aria-hidden", "true", 1, "fa", "icon-ed_espacedetravail"], ["aria-hidden", "true", 1, "fa", "icon-ed_save"]],
    template: function (O, x) {
      if (O & 1) {
        i.TgZ(0, "div", 0)(1, "div", 1);
        i.YNc(2, k, 3, 2, "button", 2);
        i.YNc(3, M, 3, 2, "button", 2);
        i.YNc(4, v, 3, 2, "button", 2);
        i.YNc(5, C, 3, 2, "button", 2);
        i.YNc(6, w, 3, 2, "button", 2);
        i.YNc(7, S, 3, 2, "button", 2);
        i.qZA()();
      }
      if (O & 2) {
        i.xp6(2);
        i.Q6J("ngIf", x.parametrages.destProf);
        i.xp6(1);
        i.Q6J("ngIf", x.parametrages.destAdmin);
        i.xp6(1);
        i.Q6J("ngIf", x.parametrages.destEleve);
        i.xp6(1);
        i.Q6J("ngIf", x.parametrages.destFamille);
        i.xp6(1);
        i.Q6J("ngIf", x.parametrages.destEspTravail);
        i.xp6(1);
        i.Q6J("ngIf", x.displayListesContacts);
      }
    },
    dependencies: [b.O5],
    encapsulation: 2,
    changeDetection: 0
  });
  return I;
})();