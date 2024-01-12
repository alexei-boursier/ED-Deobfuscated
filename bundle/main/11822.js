import * as i from "94650";
import * as t from "45007";
import * as k from "28746";
import * as M from "18505";
import * as v from "82722";
import * as S from "36895";
import * as L from "59245";
function O(Ee, ke) {
  if (Ee & 1) {
    const Be = i.EpF();
    i.TgZ(0, "li", 6)(1, "button", 7);
    i.NdJ("click", function () {
      i.CHM(Be);
      const Qe = i.oxw(3);
      return i.KtG(Qe.selectEntity(Qe.selectAllValue));
    });
    i._uU(2);
    i.qZA()();
  }
  if (Ee & 2) {
    const Be = i.oxw(3);
    i.xp6(1);
    i.s9C("title", Be.selectAllValue.libelle);
    i.xp6(1);
    i.hij(" ", Be.selectAllValue.libelle, " ");
  }
}
function x(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "li", 12)(1, "button", 13);
    i._UZ(2, "i", 14);
    i.TgZ(3, "strong", 15);
    i._uU(4);
    i.qZA()()();
  }
  if (Ee & 2) {
    const Be = i.oxw().$implicit;
    i.xp6(4);
    i.Oqu(Be.etabLibelle);
  }
}
function U(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "span", 16);
    i._uU(1);
    i.qZA();
  }
  if (Ee & 2) {
    const Be = ke.ngIf;
    i.xp6(1);
    i.Oqu(Be);
  }
}
function B(Ee, ke) {
  if (Ee & 1) {
    const Be = i.EpF();
    i.ynx(0);
    i.YNc(1, x, 5, 1, "li", 9);
    i.TgZ(2, "li", 10)(3, "button", 7);
    i.NdJ("click", function () {
      const It = i.CHM(Be).$implicit;
      const Yt = i.oxw(4);
      return i.KtG(Yt.selectEntity(It));
    });
    i._uU(4);
    i.YNc(5, U, 2, 1, "span", 11);
    i.qZA()();
    i.BQk();
  }
  if (Ee & 2) {
    const Be = ke.$implicit;
    const De = i.oxw(4);
    i.xp6(1);
    i.Q6J("ngIf", Be.group_by_CHANGED && De.displayClassesEtabsLibelle);
    i.xp6(2);
    i.s9C("title", Be.code);
    i.xp6(1);
    i.hij(" ", Be.libelle, " ");
    i.xp6(1);
    i.Q6J("ngIf", De.badgesClasses[Be.code]);
  }
}
const F = function () {
  return ["etabLibelle"];
};
function Z(Ee, ke) {
  if (Ee & 1) {
    i.ynx(0);
    i.YNc(1, B, 6, 4, "ng-container", 8);
    i.ALo(2, "groupBy");
    i.ALo(3, "orderBy");
    i.ALo(4, "trackByProperty");
    i.BQk();
  }
  if (Ee & 2) {
    const Be = i.oxw(3);
    i.xp6(1);
    i.Q6J("ngForOf", i.xi3(2, 2, i.xi3(3, 5, Be.listeClasses, i.DdM(10, F)), i.DdM(11, F)))("ngForTrackBy", i.lcZ(4, 8, "id"));
  }
}
function X(Ee, ke) {
  if (Ee & 1) {
    const Be = i.EpF();
    i.TgZ(0, "li", 10)(1, "button", 19);
    i.NdJ("click", function () {
      i.CHM(Be);
      const Qe = i.oxw(4);
      return i.KtG(Qe.selectEntity(Qe.groupeOfClasses));
    });
    i._uU(2, "Le groupe uniquement");
    i.qZA()();
  }
}
function le(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "span", 16);
    i._uU(1);
    i.qZA();
  }
  if (Ee & 2) {
    const Be = ke.ngIf;
    i.xp6(1);
    i.Oqu(Be);
  }
}
function fe(Ee, ke) {
  if (Ee & 1) {
    const Be = i.EpF();
    i.TgZ(0, "li", 10)(1, "button", 7);
    i.NdJ("click", function () {
      const It = i.CHM(Be).$implicit;
      const Yt = i.oxw(4);
      return i.KtG(Yt.selectEntity(It));
    });
    i._uU(2);
    i.YNc(3, le, 2, 1, "span", 11);
    i.qZA()();
  }
  if (Ee & 2) {
    const Be = ke.$implicit;
    const De = i.oxw(4);
    i.xp6(1);
    i.s9C("title", Be.code);
    i.xp6(1);
    i.hij(" ", Be.libelle, " ");
    i.xp6(1);
    i.Q6J("ngIf", De.badgesClasses[Be.code]);
  }
}
function q(Ee, ke) {
  if (Ee & 1) {
    i.ynx(0);
    i.YNc(1, X, 3, 0, "li", 17);
    i.YNc(2, fe, 4, 3, "li", 18);
    i.ALo(3, "trackByProperty");
    i.BQk();
  }
  if (Ee & 2) {
    const Be = i.oxw(3);
    i.xp6(1);
    i.Q6J("ngIf", Be.showGroupeOfClasses);
    i.xp6(1);
    i.Q6J("ngForOf", Be.listeClasses)("ngForTrackBy", i.lcZ(3, 3, "id"));
  }
}
function j(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "li", 22)(1, "button", 13);
    i._UZ(2, "i", 23);
    i.TgZ(3, "strong", 15);
    i._uU(4, "Groupes");
    i.qZA()()();
  }
}
function G(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "span", 16);
    i._uU(1);
    i.qZA();
  }
  if (Ee & 2) {
    const Be = ke.ngIf;
    i.xp6(1);
    i.Oqu(Be);
  }
}
function se(Ee, ke) {
  if (Ee & 1) {
    const Be = i.EpF();
    i.TgZ(0, "li", 6)(1, "button", 7);
    i.NdJ("click", function () {
      const It = i.CHM(Be).$implicit;
      const Yt = i.oxw(4);
      return i.KtG(Yt.selectEntity(It));
    });
    i._uU(2);
    i.YNc(3, G, 2, 1, "span", 11);
    i.qZA()();
  }
  if (Ee & 2) {
    const Be = ke.$implicit;
    const De = i.oxw(4);
    i.xp6(1);
    i.s9C("title", Be.code);
    i.xp6(1);
    i.hij(" ", Be.libelle, " ");
    i.xp6(1);
    i.Q6J("ngIf", De.badgesGroupes[Be.code]);
  }
}
const W = function () {
  return ["libelle"];
};
function Pe(Ee, ke) {
  if (Ee & 1) {
    i.ynx(0);
    i.YNc(1, j, 5, 0, "li", 20);
    i.YNc(2, se, 4, 3, "li", 21);
    i.ALo(3, "groupBy");
    i.ALo(4, "trackByProperty");
    i.BQk();
  }
  if (Ee & 2) {
    const Be = i.oxw(3);
    i.xp6(1);
    i.Q6J("ngIf", Be.listeGroupes.length > 0);
    i.xp6(1);
    i.Q6J("ngForOf", i.xi3(3, 3, Be.listeGroupes, i.DdM(8, W)))("ngForTrackBy", i.lcZ(4, 6, "id"));
  }
}
function Le(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "li", 22)(1, "button", 13);
    i._UZ(2, "i", 24);
    i.TgZ(3, "strong", 15);
    i._uU(4, "Salles");
    i.qZA()()();
  }
}
function he(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "li", 22)(1, "button", 13);
    i._UZ(2, "i", 24);
    i.TgZ(3, "strong", 15);
    i._uU(4);
    i.qZA()()();
  }
  if (Ee & 2) {
    const Be = i.oxw().$implicit;
    i.xp6(4);
    i.Oqu(Be.localisation);
  }
}
function pe(Ee, ke) {
  if (Ee & 1) {
    const Be = i.EpF();
    i.ynx(0);
    i.YNc(1, he, 5, 1, "li", 20);
    i.TgZ(2, "li", 6)(3, "button", 7);
    i.NdJ("click", function () {
      const It = i.CHM(Be).$implicit;
      const Yt = i.oxw(4);
      return i.KtG(Yt.selectEntity(It));
    });
    i._uU(4);
    i.qZA()();
    i.BQk();
  }
  if (Ee & 2) {
    const Be = ke.$implicit;
    i.xp6(1);
    i.Q6J("ngIf", Be.group_by_CHANGED && Be.localisation !== "");
    i.xp6(2);
    i.s9C("title", Be.code);
    i.xp6(1);
    i.Oqu(Be.libelle);
  }
}
const re = function () {
  return ["localisation", "libelle"];
};
const Re = function () {
  return ["localisation"];
};
function Ge(Ee, ke) {
  if (Ee & 1) {
    i.ynx(0);
    i.YNc(1, Le, 5, 0, "li", 20);
    i.YNc(2, pe, 5, 3, "ng-container", 8);
    i.ALo(3, "groupBy");
    i.ALo(4, "orderBy");
    i.ALo(5, "trackByProperty");
    i.BQk();
  }
  if (Ee & 2) {
    const Be = i.oxw(3);
    i.xp6(1);
    i.Q6J("ngIf", Be.displayClasses || Be.displayGroupes);
    i.xp6(1);
    i.Q6J("ngForOf", i.xi3(3, 3, i.xi3(4, 6, Be.listeSalles, i.DdM(11, re)), i.DdM(12, Re)))("ngForTrackBy", i.lcZ(5, 9, "id"));
  }
}
function Ue(Ee, ke) {
  if (Ee & 1) {
    const Be = i.EpF();
    i.TgZ(0, "li", 10)(1, "button", 25);
    i.NdJ("click", function () {
      const It = i.CHM(Be).$implicit;
      const Yt = i.oxw(4);
      return i.KtG(Yt.selectEntity(It));
    });
    i._UZ(2, "i", 14);
    i.TgZ(3, "strong", 15);
    i._uU(4);
    i.qZA()()();
  }
  if (Ee & 2) {
    const Be = ke.$implicit;
    i.xp6(1);
    i.s9C("title", Be.code);
    i.xp6(3);
    i.Oqu(Be.libelle);
  }
}
function ot(Ee, ke) {
  if (Ee & 1) {
    i.ynx(0);
    i.YNc(1, Ue, 5, 2, "li", 18);
    i.ALo(2, "orderBy");
    i.ALo(3, "trackByProperty");
    i.BQk();
  }
  if (Ee & 2) {
    const Be = i.oxw(3);
    i.xp6(1);
    i.Q6J("ngForOf", i.xi3(2, 2, Be.listeEtablissements, i.DdM(7, W)))("ngForTrackBy", i.lcZ(3, 5, "id"));
  }
}
function st(Ee, ke) {
  if (Ee & 1) {
    i.TgZ(0, "ul", 4);
    i.YNc(1, O, 3, 2, "li", 5);
    i.YNc(2, Z, 5, 12, "ng-container", 2);
    i.YNc(3, q, 4, 5, "ng-container", 2);
    i.YNc(4, Pe, 5, 9, "ng-container", 2);
    i.YNc(5, Ge, 6, 13, "ng-container", 2);
    i.YNc(6, ot, 4, 8, "ng-container", 2);
    i.qZA();
  }
  if (Ee & 2) {
    const Be = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngIf", Be.enableSelectAll);
    i.xp6(1);
    i.Q6J("ngIf", Be.displayClasses);
    i.xp6(1);
    i.Q6J("ngIf", Be.displayClassesOfGroupe > 0);
    i.xp6(1);
    i.Q6J("ngIf", Be.displayGroupes);
    i.xp6(1);
    i.Q6J("ngIf", Be.displaySalles);
    i.xp6(1);
    i.Q6J("ngIf", Be.displayEtablissements);
  }
}
function rt(Ee, ke) {
  if (Ee & 1) {
    i.ynx(0);
    i.YNc(1, st, 7, 6, "ul", 3);
    i.BQk();
  }
}
export let h = (() => {
  class Ee extends (0, t.kCV)() {
    constructor(Be, De, Qe, It, Yt, Dn) {
      super();
      this.loaderService = Be;
      this.etablissementStore = De;
      this.etablissementService = Qe;
      this.sallesStore = It;
      this.sallesService = Yt;
      this.cd = Dn;
      this.placeholder = "Classe";
      this.displayClasses = true;
      this.displayClassesEtabsLibelle = true;
      this.displayClassesOfGroupe = 0;
      this.displayGroupes = true;
      this.displayEtablissements = false;
      this.displaySalles = false;
      this.displayAllClasses = false;
      this.disabled = false;
      this.customClass = "";
      this.addToLibelle = "";
      this.autoSelect = false;
      this.enableSelectAll = false;
      this.listeClassesChange = new i.vpe();
      this.listeGroupesChange = new i.vpe();
      this.listeSallesChange = new i.vpe();
      this.listeEtablissementsChange = new i.vpe();
      this.listeClasses = [];
      this.listeGroupes = [];
      this.listeEtablissements = [];
      this.listeSalles = [];
      this.badgesClasses = {};
      this.badgesGroupes = {};
      this.showGroupeOfClasses = false;
      this.entityChange = new i.vpe();
      this.listeClassesChange = new i.vpe();
      this.listeGroupesChange = new i.vpe();
      this.listeSallesChange = new i.vpe();
      this.listeEtablissementsChange = new i.vpe();
    }
    ngOnInit() {
      this.initObservablesSubscription();
      if (this.displayAllClasses) {
        this.getNiveauListeAll();
      } else {
        this.getNiveauListe();
      }
      if (this.enableSelectAll) {
        this.selectAllValue = {
          id: 0,
          code: "ALL",
          libelle: "Toutes les classes"
        };
        if (this.displayEtablissements) {
          this.selectAllValue.libelle = "Tous les établissements";
        } else if (this.displaySalles) {
          this.selectAllValue.libelle = "Toutes les salles";
        } else if (this.displayGroupes) {
          this.selectAllValue.libelle = "Tous les groupes";
        }
      }
      if (Object.isExists(this.entity)) {
        this.selectEntity(this.entity);
      }
    }
    ngOnChanges(Be) {
      if (Be.displayAllClasses && Be.displayAllClasses.previousValue !== Be.displayAllClasses.currentValue && !Be.displayAllClasses.isFirstChange()) {
        if (Be.displayAllClasses.currentValue === false) {
          this.getNiveauListe();
        } else {
          this.getNiveauListeAll();
        }
      }
      if (this.displaySalles) {
        if (Array.isArray(this.sallesEtude)) {
          if (Be.sallesEtude && Array.isArray(Be.sallesEtude.currentValue)) {
            this.listeSalles = Be.sallesEtude.currentValue.map(De => new t.Px8(De));
            this.listeSallesChange.emit(this.listeSalles);
          }
        } else {
          this.loader = this.loaderService.show(this);
          this.sallesService.listeSalles().pipe((0, k.x)(() => this.loaderService.hide(this))).subscribe();
        }
      }
    }
    selectEntity(Be) {
      let De;
      De = Object.isExists(this.canEntityChangeFn) ? this.canEntityChangeFn() : (0, b.of)(true);
      De.pipe((0, M.b)(Qe => {
        if (!!Qe) {
          this.entity = Be;
          if (this.displayClassesOfGroupe > 0) {
            this.showGroupeOfClasses = Be instanceof t.Mn7;
          }
          this.entityChange.emit(Be);
          this.cd.markForCheck();
        }
      })).subscribe();
    }
    getLibelleButtonDropdown() {
      if (Object.isExists(this.entity) && (this.enableSelectAll || this.entity.id > 0)) {
        if (this.displayClassesOfGroupe) {
          if (this.showGroupeOfClasses) {
            return this.entity.libelle;
          } else {
            return "Classes du groupe";
          }
        } else {
          return this.entity.libelle + this.addToLibelle;
        }
      } else {
        return this.placeholder;
      }
    }
    initObservablesSubscription() {
      this.etablissementStore.select$().pipe((0, M.b)(Be => this.updateListeNiveaux(new t.jIb(Be))), (0, v.R)(this.componentDestroyed$)).subscribe();
      this.sallesStore.select$().pipe((0, M.b)(Be => {
        this.listeSalles = Be.salles.map(De => new t.Px8(De));
        this.listeSallesChange.emit(this.listeSalles);
      }), (0, v.R)(this.componentDestroyed$)).subscribe();
      if (Object.isExists(this.badges$)) {
        this.badges$.pipe((0, M.b)(Be => {
          if (Object.isExists(Be.classes)) {
            Object.keys(Be.classes).forEach(De => {
              if (this.listeClasses.findIndex(Qe => Qe.code === De) > -1) {
                this.badgesClasses[De] = Be.classes[De];
              }
            });
          }
          if (Object.isExists(Be.groupes)) {
            Object.keys(Be.groupes).forEach(De => {
              if (this.listeGroupes.findIndex(Qe => Qe.code === De) > -1) {
                this.badgesGroupes[De] = Be.groupes[De];
              }
            });
          }
        }), (0, v.R)(this.componentDestroyed$)).subscribe();
      }
    }
    getNiveauListe() {
      this.loader = this.loaderService.show(this);
      this.etablissementService.getNiveauxListe().pipe((0, C.d)(null), (0, M.b)(Be => {
        if (Be === null) {
          this.updateListeNiveaux(new t.jIb(this.etablissementStore.snapshot));
        }
      }), (0, k.x)(() => this.loaderService.hide(this))).subscribe();
    }
    getNiveauListeAll() {
      this.loader = this.loaderService.show(this);
      this.etablissementService.getNiveauxListeAll().pipe((0, M.b)(Be => {
        Be.etablissements.forEach(De => {
          De.niveaux.edPluckFlatten("classes").map(Qe => {
            Qe.etabId = De.id;
          });
        });
        this.updateListeNiveaux(Be);
      }), (0, k.x)(() => this.loaderService.hide(this))).subscribe();
    }
    updateListeNiveaux(Be) {
      this.listeEtablissements = Be.etablissements.filter(Qe => !Object.isExists(this.filterFn) || this.filterFn(Qe));
      let De = [];
      if (this.displayClasses || this.displayGroupes || this.displayClassesOfGroupe > 0) {
        De = t.uKw.getProfClassesGroupesTreeConcatUnique(Be);
      }
      if (this.displayClasses) {
        this.listeClasses = De.filter(Qe => Qe.typeEntity === t.JBS.CLASSE && (!Object.isExists(this.filterFn) || this.filterFn(Qe)));
      } else if (this.displayClassesOfGroupe > 0) {
        this.groupeOfClasses = De.find(Qe => Qe.typeEntity === t.JBS.GROUPE && Qe.id === this.displayClassesOfGroupe);
        this.listeClasses = Object.isExists(this.groupeOfClasses) ? [...this.groupeOfClasses.classes] : [];
        this.placeholder = "Classes du groupe";
      } else {
        this.listeClasses = [];
      }
      this.listeGroupes = this.displayGroupes ? De.filter(Qe => Qe.typeEntity === t.JBS.GROUPE && (!Object.isExists(this.filterFn) || this.filterFn(Qe))) : [];
      if (this.autoSelect) {
        if (this.displayEtablissements) {
          if (this.listeEtablissements.length === 1) {
            this.selectEntity(this.listeEtablissements[0]);
          }
        } else if (this.displayClasses || this.displayClassesOfGroupe) {
          if (this.listeClasses.length === 1) {
            this.selectEntity(this.listeClasses[0]);
          }
        } else if (this.displayGroupes && this.listeGroupes.length === 1) {
          this.selectEntity(this.listeGroupes[0]);
        }
      }
      this.listeClassesChange.emit(this.listeClasses);
      this.listeGroupesChange.emit(this.listeGroupes);
      this.listeEtablissementsChange.emit(this.listeEtablissements);
      this.cd.markForCheck();
    }
  }
  Ee.ɵfac = function (Be) {
    return new (Be || Ee)(i.Y36(w.S), i.Y36(t.VD2), i.Y36(t.Xmb), i.Y36(t.pGx), i.Y36(t.FrG), i.Y36(i.sBO));
  };
  Ee.ɵcmp = i.Xpm({
    type: Ee,
    selectors: [["ed-select-entity"]],
    inputs: {
      entity: "entity",
      placeholder: "placeholder",
      displayClasses: "displayClasses",
      displayClassesEtabsLibelle: "displayClassesEtabsLibelle",
      displayClassesOfGroupe: "displayClassesOfGroupe",
      displayGroupes: "displayGroupes",
      displayEtablissements: "displayEtablissements",
      displaySalles: "displaySalles",
      displayAllClasses: "displayAllClasses",
      disabled: "disabled",
      sallesEtude: "sallesEtude",
      badges$: "badges$",
      customClass: "customClass",
      addToLibelle: "addToLibelle",
      filterFn: "filterFn",
      canEntityChangeFn: "canEntityChangeFn",
      autoSelect: "autoSelect",
      enableSelectAll: "enableSelectAll"
    },
    outputs: {
      entityChange: "entityChange",
      listeClassesChange: "listeClassesChange",
      listeGroupesChange: "listeGroupesChange",
      listeSallesChange: "listeSallesChange",
      listeEtablissementsChange: "listeEtablissementsChange"
    },
    features: [i.qOj, i.TTD],
    decls: 4,
    vars: 8,
    consts: [["dropdown", "", 3, "isAnimated", "ngBusy", "isDisabled"], ["dropdownToggle", "", "type", "button", "id", "dropdownSelectEntity", "aria-controls", "dropdown-select-entity", 1, "btn", "btn-secondary", "dropdown-toggle"], [4, "ngIf"], ["aria-labelledby", "dropdownSelectEntity", "class", "dropdown-menu", "id", "dropdown-select-entity", "role", "menu", 4, "dropdownMenu"], ["aria-labelledby", "dropdownSelectEntity", "id", "dropdown-select-entity", "role", "menu", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngIf"], ["role", "menuitem"], ["type", "button", 1, "btn", "dropdown-item", "classe-option", 3, "title", "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "list-elem-classe disabled", "role", "menuitem", 4, "ngIf"], ["role", "menuitem", 1, "list-elem-classe"], ["class", "badge alert-danger", 4, "ngIf"], ["role", "menuitem", 1, "list-elem-classe", "disabled"], ["type", "button", "disabled", "", 1, "btn", "dropdown-item", "etab-option", "without-opacity"], ["aria-hidden", "true", 1, "i-small", "fa", "fa-institution"], [1, "margin-whitespace"], [1, "badge", "alert-danger"], ["class", "list-elem-classe", "role", "menuitem", 4, "ngIf"], ["class", "list-elem-classe", "role", "menuitem", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "btn", "dropdown-item", "classe-option", 3, "click"], ["class", "disabled", "role", "menuitem", 4, "ngIf"], ["role", "menuitem", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "menuitem", 1, "disabled"], ["aria-hidden", "true", 1, "i-small", "fa", "fa-bars"], ["aria-hidden", "true", 1, "i-small", "fa", "fa-map-marker"], ["type", "button", 1, "btn", "dropdown-item", "etab-option", "without-opacity", 3, "title", "click"]],
    template: function (Be, De) {
      if (Be & 1) {
        i.TgZ(0, "div", 0)(1, "button", 1);
        i._uU(2);
        i.qZA();
        i.YNc(3, rt, 2, 0, "ng-container", 2);
        i.qZA();
      }
      if (Be & 2) {
        i.Gre("btn-group ", De.customClass, "");
        i.Q6J("isAnimated", false)("ngBusy", De.loader)("isDisabled", De.disabled);
        i.xp6(2);
        i.hij(" ", De.getLibelleButtonDropdown(), " ");
        i.xp6(1);
        i.Q6J("ngIf", De.displayClasses || De.displayGroupes || De.displaySalles || De.displayEtablissements || De.displayClassesOfGroupe);
      }
    },
    dependencies: [S.sg, S.O5, L.Hz, L.Mq, L.TO, I.DC, t.d0N, t.lfJ, E.$],
    styles: [".btn-group[_ngcontent-%COMP%]   .etab-option[_ngcontent-%COMP%]{color:var(--light-primary-color)}.btn-group[_ngcontent-%COMP%]   .classe-option[_ngcontent-%COMP%]{padding-left:35px}"],
    changeDetection: 0
  });
  return Ee;
})();