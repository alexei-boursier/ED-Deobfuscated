import * as i from "18505";
import * as t from "82722";
import * as b from "28746";
import * as k from "70262";
import * as w from "45007";
import * as I from "11302";
import * as E from "94650";
import * as O from "20388";
import * as x from "92635";
import * as B from "36895";
import * as F from "24006";
import * as Z from "94702";
import * as le from "80125";
import * as q from "4602";
function j(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div", 33)(1, "div", 34)(2, "p", 35);
    E._uU(3, "Veuillez saisir une date valide (au format jj/mm/aaaa)");
    E.qZA()()();
  }
}
function G(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "div", 40)(1, "input", 41);
    E.NdJ("click", function () {
      const bt = E.CHM(ne).$implicit;
      const Ut = E.oxw(2);
      return E.KtG(Ut.updateCible(Ut.CIBLES_POSTIT[bt].code, Ut.postitForm));
    });
    E.qZA();
    E.TgZ(2, "label", 42);
    E._uU(3);
    E.qZA()();
  }
  if (qe & 2) {
    const ne = Me.$implicit;
    const me = E.oxw(2);
    E.xp6(1);
    E.MGl("id", "Cible-", me.CIBLES_POSTIT[ne].code, "");
    E.s9C("value", me.CIBLES_POSTIT[ne].code);
    E.Q6J("checked", me.postit.cible.indexOf(me.CIBLES_POSTIT[ne].code) > -1);
    E.xp6(1);
    E.MGl("for", "Cible-", me.CIBLES_POSTIT[ne].code, "");
    E.xp6(1);
    E.Oqu(me.CIBLES_POSTIT[ne].libelle);
  }
}
function se(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "p", 35);
    E._uU(1, "Veuillez sélectionner au minimum une cible");
    E.qZA();
  }
}
const W = function (qe) {
  return {
    "has-error": qe
  };
};
function Pe(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div", 23)(1, "div", 36)(2, "div", 37);
    E._uU(3, "Cible");
    E.qZA();
    E.YNc(4, G, 4, 5, "div", 38);
    E.ALo(5, "trackByProperty");
    E.qZA();
    E.TgZ(6, "div", 24);
    E.YNc(7, se, 2, 0, "p", 39);
    E.qZA()();
  }
  if (qe & 2) {
    const ne = E.oxw();
    E.Q6J("ngClass", E.VKq(6, W, !ne.postitForm.cible.length));
    E.xp6(4);
    E.Q6J("ngForOf", ne.tabTypesUser)("ngForTrackBy", E.lcZ(5, 4, "$index"));
    E.xp6(3);
    E.Q6J("ngIf", !ne.postitForm.cible.length);
  }
}
function Le(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "div", 40)(1, "input", 41);
    E.NdJ("click", function () {
      const bt = E.CHM(ne).$implicit;
      const Ut = E.oxw(2);
      return E.KtG(Ut.updateCiblesEtab(bt.id, Ut.postitForm));
    });
    E.qZA();
    E.TgZ(2, "label", 42);
    E._uU(3);
    E.qZA()();
  }
  if (qe & 2) {
    const ne = Me.$implicit;
    const me = E.oxw(2);
    E.xp6(1);
    E.MGl("id", "Etab-", ne.id, "");
    E.s9C("value", ne.id);
    E.Q6J("checked", me.postitForm.ciblesEtab.indexOf(ne.id) > -1);
    E.xp6(1);
    E.MGl("for", "Etab-", ne.id, "");
    E.xp6(1);
    E.Oqu(ne.libelle);
  }
}
function he(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "p", 35);
    E._uU(1, "Veuillez sélectionner au minimum un établissement");
    E.qZA();
  }
}
function pe(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "div", 43)(1, "div", 24)(2, "div", 37);
    E._uU(3, " Etablissement ");
    E.TgZ(4, "div", 40)(5, "input", 44);
    E.NdJ("ngModelChange", function () {
      E.CHM(ne);
      const it = E.oxw();
      return E.KtG(it.updateCiblesEtab(0, it.postitForm));
    });
    E.qZA();
    E.TgZ(6, "label", 45);
    E._uU(7, "Tout sélectionner");
    E.qZA()()();
    E.YNc(8, Le, 4, 5, "div", 38);
    E.ALo(9, "trackByProperty");
    E.TgZ(10, "div", 24);
    E.YNc(11, he, 2, 0, "p", 39);
    E.qZA()()();
  }
  if (qe & 2) {
    const ne = E.oxw();
    E.Q6J("ngClass", E.VKq(7, W, !ne.postitForm.ciblesEtab.length));
    E.xp6(5);
    E.Q6J("ngModel", ne.allEtabs);
    E.xp6(3);
    E.Q6J("ngForOf", ne.etablissements)("ngForTrackBy", E.lcZ(9, 5, "$index"));
    E.xp6(3);
    E.Q6J("ngIf", !ne.postitForm.ciblesEtab.length);
  }
}
function re(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "button", 46);
    E.NdJ("click", function () {
      E.CHM(ne);
      const it = E.oxw();
      return E.KtG(it.update(it.postitForm));
    });
    E._uU(1, " Enregistrer ");
    E.qZA();
  }
  if (qe & 2) {
    E.oxw();
    const ne = E.MAs(6);
    const me = E.MAs(28);
    E.Q6J("disabled", ne.invalid && me.viewModel !== "");
  }
}
function Re(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "button", 47);
    E.NdJ("click", function () {
      E.CHM(ne);
      const it = E.oxw();
      return E.KtG(it.save(it.postitForm, it.configPostits.selectTargets));
    });
    E._uU(1, " Enregistrer ");
    E.qZA();
  }
  if (qe & 2) {
    E.oxw();
    const ne = E.MAs(6);
    E.Q6J("disabled", ne.invalid);
  }
}
let Ge = (() => {
  class qe extends (0, w.kCV)() {
    constructor(ne, me, it, bt, Ut, Ze, pt) {
      super();
      this.modalRef = ne;
      this.etablissementService = me;
      this.authStore = it;
      this.uiService = bt;
      this.postitsService = Ut;
      this.loaderService = Ze;
      this.ciblesEvenementService = pt;
      this.CIBLES_POSTIT = w.g2X;
      this.allEtabs = true;
      this.idUser = this.authStore.currentUser.id;
      this.typeUser = this.authStore.currentUser.typeCompte;
      this.datePipe = new w.ifA();
      this.today = new Date();
      this.configDatePicker = I.gL;
      this.tabColorsDispos = Object.values(w.mO$);
      this.tabTypesUser = Object.keys(this.CIBLES_POSTIT);
    }
    ngOnInit() {
      this.postitForm = new w.ZUG(this.postit);
      this.variantDefault = w.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec, this.typeUser, this.idUser);
      this.ckeditorOptions = {
        height: 150,
        extraPlugins: "font,base64image,deselect",
        toolbar: [{
          name: "basicstyles",
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
          items: ["Link", "Unlink", "base64image"]
        }],
        removePlugins: "elementspath,mathjax",
        on: {
          instanceReady: I.Ho
        }
      };
      this.libelleForm = this.postit.id > 0 ? "Modification" : "Ajout";
      this.ciblesEvenementService.isCibleFamilleOrEleve = this.ciblesEvenementService.checkCiblesSelected(this.postit);
      if (this.configPostits.displayFormTargets) {
        this.doRefreshEtablissements();
      }
    }
    doRefreshEtablissements() {
      this.loader = this.loaderService.show(this);
      this.etablissementService.getNiveauxListeAll().pipe((0, i.b)(ne => {
        this.listEtablissements(ne);
      }), (0, b.x)(() => this.loaderService.hide(this)), (0, t.R)(this.componentDestroyed$)).subscribe();
    }
    listEtablissements(ne) {
      this.etablissements = ne.etablissements;
      if (this.postitForm.id === 0) {
        if (this.configPostits.displayTargets === true) {
          this.etablissements.forEach(me => {
            this.postitForm.ciblesEtab.push(me.id);
          });
        }
      } else if (this.postitForm.ciblesEtab.length !== this.etablissements.length) {
        this.allEtabs = false;
      }
    }
    updateCiblesEtab(ne, me) {
      if (ne === 0) {
        this.allEtabs = !this.allEtabs;
        me.ciblesEtab = [];
        if (this.allEtabs) {
          this.etablissements.forEach(it => {
            me.ciblesEtab.push(it.id);
          });
        }
      } else {
        me.ciblesEtab = this.ciblesEvenementService.updateCiblesEtab(ne, me);
      }
    }
    updateCible(ne, me) {
      this.postitForm = new w.ZUG(this.ciblesEvenementService.updateCible(ne, me));
    }
    save(ne, me) {
      const it = new w.ZUG(ne);
      if (this.configPostits.displayFormTargets && it.cible.length === 0) {
        this.uiService.notifyEvent(w.DOJ.genericError, "Veuillez sélectionner au minimum une cible.", "Post-it", "fa fa-warning");
      }
      if (me.length > 0) {
        it.cible = me;
      }
      if (this.configPostits.displayFormTargets && it.ciblesEtab.length === 0) {
        this.uiService.notifyEvent(w.DOJ.genericError, "Veuillez sélectionner au minimum un établissement.", "Post-it", "fa fa-warning");
      } else if (it.contenu.length > 1572864) {
        this.uiService.notifyEvent(w.DOJ.genericWarning, "Enregistrement impossible. Votre saisie est trop grande (>1.5Mo).", "Post-it", "fa fa-warning");
      } else if (it.cible.length > 0) {
        if (this.configPostits.displayFormTargets) {
          const bt = [];
          it.ciblesEtab.forEach(Ut => {
            it.cible.forEach(Ze => {
              bt.push(Ze + Ut);
            });
          });
          it.ciblesConcatenees = bt;
        } else {
          it.ciblesConcatenees = it.cible;
        }
        it.contenu = w.YC.base64encode(ne.contenu);
        it.auteur.nom = this.authStore.currentUser.nom;
        it.auteur.id = this.authStore.currentUser.id;
        it.auteur.prenom = this.authStore.currentUser.prenom;
        it.auteur.type = this.authStore.currentUser.typeCompte;
        it.auteur.civilite = this.authStore.currentUser.civilite;
        it.ordre = 1;
        if (Object.isExists(ne.dateDebut) && !w.C_1.isDate(ne.dateDebut) && w.FSr.isNotEmptyString(ne.dateDebut)) {
          ne.dateDebut = w.C_1.convertStringFrToDate(ne.dateDebut);
        }
        if (Object.isExists(ne.dateFin) && !w.C_1.isDate(ne.dateFin) && w.FSr.isNotEmptyString(ne.dateFin)) {
          ne.dateFin = w.C_1.convertStringFrToDate(ne.dateFin);
        }
        if (w.C_1.isDate(ne.dateDebut) && w.C_1.isDate(ne.dateFin) && w.C_1.isAfter(ne.dateDebut, ne.dateFin, false)) {
          this.uiService.notifyEvent(w.DOJ.genericError, "Veuillez saisir une date de fin supérieur à la date de début.", "Post-it", "icon-ed_postit");
          return;
        }
        it.dateDebut = w.C_1.isDate(ne.dateDebut) ? this.datePipe.transform(ne.dateDebut, "yyyy/MM/dd") : "";
        it.dateFin = w.C_1.isDate(ne.dateFin) ? this.datePipe.transform(ne.dateFin, "yyyy/MM/dd") : "";
        this.loader = this.loaderService.show(this);
        this.postitsService.savePostit(it, this.authStore.currentUser.codeOgec, this.typeUser, this.idUser).pipe((0, i.b)(() => {
          this.close();
          this.uiService.notifyEvent(w.DOJ.genericSuccess, "Enregistrement de votre post-it effectué !", "Post-it", "icon-ed_postit");
        }), (0, b.x)(() => this.loaderService.hide(this)), (0, k.K)(bt => this.uiService.notifyErrorThenEmpty(bt, true, "Post-it", "fa fa-warning"))).subscribe();
      }
    }
    update(ne) {
      const me = new w.ZUG(ne);
      if (this.configPostits.displayFormTargets && me.ciblesEtab.length === 0) {
        this.uiService.notifyEvent(w.DOJ.genericError, "Veuillez sélectionner au minimum un établissement.", "Post-it", "fa fa-warning");
      } else if (me.contenu.length > 1572864) {
        this.uiService.notifyEvent(w.DOJ.genericWarning, "Enregistrement impossible. Votre saisie est trop grande (>1.5Mo).", "Post-it", "fa fa-warning");
      } else if (me.cible.length > 0) {
        if (this.configPostits.displayFormTargets) {
          const it = [];
          me.ciblesEtab.forEach(bt => {
            me.cible.forEach(Ut => {
              it.push(Ut + bt);
            });
          });
          me.ciblesConcatenees = it;
        } else {
          me.ciblesConcatenees = me.cible;
        }
        me.contenu = w.YC.base64encode(me.contenu);
        if (Object.isExists(ne.dateDebut) && !w.C_1.isDate(ne.dateDebut) && w.FSr.isNotEmptyString(ne.dateDebut)) {
          ne.dateDebut = w.C_1.convertStringFrToDate(ne.dateDebut);
        }
        if (Object.isExists(ne.dateFin) && !w.C_1.isDate(ne.dateFin) && w.FSr.isNotEmptyString(ne.dateFin)) {
          ne.dateFin = w.C_1.convertStringFrToDate(ne.dateFin);
        }
        if (w.C_1.isDate(ne.dateDebut) && w.C_1.isDate(ne.dateFin) && w.C_1.isAfter(ne.dateDebut, ne.dateFin, false)) {
          this.uiService.notifyEvent(w.DOJ.genericError, "Veuillez saisir une date de fin supérieur à la date de début.", "Post-it", "icon-ed_postit");
          return;
        }
        me.dateDebut = w.C_1.isDate(ne.dateDebut) ? this.datePipe.transform(ne.dateDebut, "dd/MM/yyyy") : "";
        me.dateFin = w.C_1.isDate(ne.dateFin) ? this.datePipe.transform(ne.dateFin, "dd/MM/yyyy") : "";
        if (w.FSr.isNotEmptyString(me.dateDebut)) {
          me.dateDebut = w.C_1.formatDate(me.dateDebut.split("/").reverse().join("/"), "-", "/");
          me.dateDebut = me.dateDebut.split("-").join("");
        }
        if (w.FSr.isNotEmptyString(me.dateFin)) {
          me.dateFin = w.C_1.formatDate(me.dateFin.split("/").reverse().join("/"), "-", "/");
          me.dateFin = me.dateFin.split("-").join("");
        }
        this.loader = this.loaderService.show(this);
        this.postitsService.updatePostit(me, this.authStore.currentUser.codeOgec, this.typeUser, this.idUser).pipe((0, i.b)(() => {
          this.uiService.notifyEvent(w.DOJ.genericSuccess, "Modification de votre post-it effectuée !", "Post-it", "icon-ed_postit");
          this.ciblesEvenementService.isCibleFamilleOrEleve = this.ciblesEvenementService.checkCiblesSelected(me);
          this.close();
        }), (0, b.x)(() => this.loaderService.hide(this)), (0, k.K)(it => this.uiService.notifyErrorThenEmpty(it, true, "Post-it", "fa fa-warning"))).subscribe();
      } else {
        this.uiService.notifyEvent(w.DOJ.genericError, "Veuillez saisir au minimum une personne cible.", "Post-it", "fa fa-warning");
      }
    }
    close() {
      this.modalRef.hide();
    }
    setTypePostit(ne) {
      ne.type = Object.getKey(w.mO$, ne.couleur);
    }
  }
  qe.ɵfac = function (ne) {
    return new (ne || qe)(E.Y36(O.UZ), E.Y36(w.Xmb), E.Y36(w.CnD), E.Y36(w.VLf), E.Y36(w.wlB), E.Y36(x.S), E.Y36(U.p));
  };
  qe.ɵcmp = E.Xpm({
    type: qe,
    selectors: [["ed-modal-ajout-modif-postit"]],
    inputs: {
      postit: "postit",
      configPostits: "configPostits",
      idUser: "idUser",
      typeUser: "typeUser"
    },
    features: [E.qOj],
    decls: 48,
    vars: 27,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body", "row", 3, "ngBusy"], ["method", "post", "name", "formPostit", "ngForm", "", "novalidate", "", 1, "formPostit"], ["formPostit", "ngForm"], [1, "row"], [1, "col-lg-6"], [3, "currentColor", "tabColors", "click", "currentColorChange"], ["for", "dateDebut", 1, "form-label"], [1, "input-group"], ["bsDatepicker", "", "id", "dateDebut", "name", "dateDebut", "placeholder", "dd/mm/yyyy", "type", "text", 1, "input-calendar", "form-control", 3, "ngModel", "bsConfig", "minDate", "ngModelChange"], ["dateDebut", "ngModel", "datePickerDateDebut", "bsDatepicker"], [1, "input-group-text", "input-group-md", "no-background"], ["aria-label", "Sélectionner une date de début", "type", "button", 1, "btn", "btn-secondary", "no-background", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], ["for", "dateLimite", 1, "form-label"], ["bsDatepicker", "", "id", "dateLimite", "name", "dateLimite", "placeholder", "dd/mm/yyyy", "type", "text", 1, "input-calendar", "form-control", 3, "ngModel", "bsConfig", "minDate", "ngModelChange"], ["dateLimite", "ngModel", "datePickerDateLimite", "bsDatepicker"], ["aria-label", "Sélectionner une date de fin", "type", "button", 1, "btn", "btn-secondary", "no-background", 3, "click"], ["class", "row has-error", 4, "ngIf"], ["class", "row", 3, "ngClass", 4, "ngIf"], ["class", "row cible-etablissement", 3, "ngClass", 4, "ngIf"], [1, "row", 3, "ngClass"], [1, "col-lg-12"], ["for", "contenuPostit", 1, "form-label"], ["id", "contenuPostit", "name", "contenuPostit", 3, "ngModel", "required", "config", "ngModelChange"], ["contenuPostit", "ngModel"], [1, "modal-footer", "modal-postit"], [1, "w-100"], ["class", "btn btn-success float-end", "type", "button", "id", "buttonAjout", "name", "button1id", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-success float-end", "type", "button", "id", "buttonModif", "name", "button1id", 3, "disabled", "click", 4, "ngIf"], ["id", "bouton-cancel", "name", "button2id", "type", "button", 1, "btn", "btn-danger", "float-start", 3, "click"], [1, "row", "has-error"], [1, "has-error", "col-lg-12"], [1, "form-text"], [1, "col-lg-12", "cible-utilisateur"], [1, "text-bold", "form-label"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "form-text", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["name", "Cible", "type", "checkbox", 1, "form-check-input", 3, "id", "value", "checked", "click"], [1, "form-check-label", "fw-normal", 3, "for"], [1, "row", "cible-etablissement", 3, "ngClass"], ["name", "ciblesAll", "id", "EtabAll", "type", "checkbox", 1, "form-check-input", "margin-whitespace", 3, "ngModel", "ngModelChange"], ["for", "EtabAll", 1, "form-check-label", "fw-normal", "margin-whitespace"], ["type", "button", "id", "buttonAjout", "name", "button1id", 1, "btn", "btn-success", "float-end", 3, "disabled", "click"], ["type", "button", "id", "buttonModif", "name", "button1id", 1, "btn", "btn-success", "float-end", 3, "disabled", "click"]],
    template: function (ne, me) {
      if (ne & 1) {
        const it = E.EpF();
        E.TgZ(0, "div", 0)(1, "h3", 1);
        E._uU(2);
        E.qZA();
        E.TgZ(3, "button", 2);
        E.NdJ("click", function () {
          return me.close();
        });
        E.qZA()();
        E.TgZ(4, "div", 3)(5, "form", 4, 5)(7, "div", 6)(8, "div", 7)(9, "strong");
        E._uU(10, "Couleur");
        E.qZA();
        E.TgZ(11, "ed-color-picker", 8);
        E.NdJ("click", function () {
          return me.setTypePostit(me.postitForm);
        })("currentColorChange", function (Ut) {
          return me.postitForm.couleur = Ut;
        });
        E.qZA()()();
        E.TgZ(12, "div", 6)(13, "div", 7)(14, "label", 9);
        E._uU(15, "Visible à partir du");
        E.qZA();
        E.TgZ(16, "div", 10)(17, "input", 11, 12);
        E.NdJ("ngModelChange", function (Ut) {
          return me.postitForm.dateDebut = Ut;
        });
        E.qZA();
        E.TgZ(20, "span", 13)(21, "button", 14);
        E.NdJ("click", function () {
          E.CHM(it);
          const Ut = E.MAs(19);
          return E.KtG(Ut.toggle());
        });
        E._UZ(22, "i", 15);
        E.qZA()()()();
        E.TgZ(23, "div", 7)(24, "label", 16);
        E._uU(25, "Visible jusqu'au");
        E.qZA();
        E.TgZ(26, "div", 10)(27, "input", 17, 18);
        E.NdJ("ngModelChange", function (Ut) {
          return me.postitForm.dateFin = Ut;
        });
        E.qZA();
        E.TgZ(30, "span", 13)(31, "button", 19);
        E.NdJ("click", function () {
          E.CHM(it);
          const Ut = E.MAs(29);
          return E.KtG(Ut.toggle());
        });
        E._UZ(32, "i", 15);
        E.qZA()()()()();
        E.YNc(33, j, 4, 0, "div", 20);
        E.YNc(34, Pe, 8, 8, "div", 21);
        E.YNc(35, pe, 12, 9, "div", 22);
        E.TgZ(36, "div", 23)(37, "div", 24)(38, "label", 25);
        E._uU(39, "Contenu");
        E.qZA();
        E.TgZ(40, "ckeditor", 26, 27);
        E.NdJ("ngModelChange", function (Ut) {
          return me.postitForm.contenu = Ut;
        });
        E.qZA()()()()();
        E.TgZ(42, "div", 28)(43, "div", 29);
        E.YNc(44, re, 2, 1, "button", 30);
        E.YNc(45, Re, 2, 1, "button", 31);
        E.TgZ(46, "button", 32);
        E.NdJ("click", function () {
          return me.close();
        });
        E._uU(47, "Annuler");
        E.qZA()()();
      }
      if (ne & 2) {
        const it = E.MAs(18);
        const bt = E.MAs(19);
        const Ut = E.MAs(28);
        const Ze = E.MAs(29);
        const pt = E.MAs(41);
        E.xp6(2);
        E.hij("", me.libelleForm, " d'un post-it");
        E.xp6(2);
        E.Q6J("ngBusy", me.loader);
        E.xp6(7);
        E.Q6J("currentColor", me.postitForm.couleur)("tabColors", me.tabColorsDispos);
        E.xp6(6);
        E.Q6J("ngModel", me.postitForm.dateDebut)("bsConfig", me.configDatePicker)("minDate", me.today);
        E.xp6(4);
        E.uIk("aria-expanded", bt.isOpen);
        E.xp6(6);
        E.Q6J("ngModel", me.postitForm.dateFin)("bsConfig", me.configDatePicker)("minDate", me.today);
        E.xp6(4);
        E.uIk("aria-expanded", Ze.isOpen);
        E.xp6(2);
        E.Q6J("ngIf", it.invalid || Ut.invalid);
        E.xp6(1);
        E.Q6J("ngIf", me.configPostits.displayFormTargets);
        E.xp6(1);
        E.Q6J("ngIf", me.configPostits.displayFormTargets && me.postitForm.cible.length > 0);
        E.xp6(1);
        E.Q6J("ngClass", E.VKq(23, W, pt.invalid));
        E.xp6(4);
        E.Tol(E.VKq(25, W, pt.invalid));
        E.Q6J("ngModel", me.postitForm.contenu)("required", true)("config", me.ckeditorOptions);
        E.xp6(4);
        E.Q6J("ngIf", me.postitForm.id > 0);
        E.xp6(1);
        E.Q6J("ngIf", me.postitForm.id === 0);
      }
    },
    dependencies: [B.mk, B.sg, B.O5, F._Y, F.Fj, F.Wl, F.JJ, F.JL, F.Q7, F.On, F.F, Z.Np, Z.Y5, X.u, le.DC, fe.h, q.$],
    styles: [".formPostit .color-palette{height:80px;width:170px;bottom:inherit}\n"],
    encapsulation: 2
  });
  return qe;
})();
function st(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "div")(1, "button", 5);
    E.NdJ("click", function () {
      E.CHM(ne);
      const it = E.oxw();
      return E.KtG(it.openDialog());
    });
    E._UZ(2, "i", 6);
    E._uU(3, " Ajouter un post-it ");
    E.qZA();
    E.TgZ(4, "p");
    E._uU(5, " Vous pouvez organiser les post-its grâce au glisser-déposer ");
    E._UZ(6, "i", 7);
    E.qZA();
    E._UZ(7, "div", 4);
    E.qZA();
  }
}
function rt(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div", 17);
    E._UZ(1, "i", 18);
    E.qZA();
  }
}
function Oe(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "em", 20);
    E._uU(1);
    E.ALo(2, "displayNom");
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw(2).$implicit;
    const me = E.oxw();
    E.xp6(1);
    E.hij("Par ", E.gM2(2, 1, ne.auteur, false, true, me.authStore.isFouE()), "");
  }
}
function Ee(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "em", 20);
    E._uU(1, "le");
    E.qZA();
  }
}
function ke(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "em", 20);
    E._uU(1);
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw(2).$implicit;
    E.xp6(1);
    E.Oqu(ne.dateCreation);
  }
}
function Be(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div");
    E.YNc(1, Oe, 3, 6, "em", 19);
    E.YNc(2, Ee, 2, 0, "em", 19);
    E.YNc(3, ke, 2, 1, "em", 19);
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw(2);
    E.xp6(1);
    E.Q6J("ngIf", ne.configPostits.displayDateCreated);
    E.xp6(1);
    E.Q6J("ngIf", ne.configPostits.displayDateCreated);
    E.xp6(1);
    E.Q6J("ngIf", ne.configPostits.displayDateCreated);
  }
}
function De(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div", 21);
    E._UZ(1, "span", 22);
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw().$implicit;
    const me = E.oxw();
    E.xp6(1);
    E.Q6J("innerHTML", me.iconeFor(ne), E.oJD);
  }
}
function Qe(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "button", 26);
    E.NdJ("click", function () {
      E.CHM(ne);
      const it = E.oxw(2).$implicit;
      const bt = E.oxw();
      return E.KtG(bt.openDialog(it));
    });
    E._UZ(1, "i", 27);
    E.qZA();
  }
}
function It(qe, Me) {
  if (qe & 1) {
    const ne = E.EpF();
    E.TgZ(0, "button", 28);
    E.NdJ("click", function () {
      E.CHM(ne);
      const it = E.oxw(2).$implicit;
      const bt = E.oxw();
      return E.KtG(bt.effacer(it));
    });
    E._UZ(1, "i", 29);
    E.qZA();
  }
}
function Yt(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div", 23);
    E.YNc(1, Qe, 2, 0, "button", 24);
    E.YNc(2, It, 2, 0, "button", 25);
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw().$implicit;
    const me = E.oxw();
    E.xp6(1);
    E.Q6J("ngIf", me.configPostits.updatePostit && me.isAuteurOrAdmin(ne));
    E.xp6(1);
    E.Q6J("ngIf", me.configPostits.deletePostit);
  }
}
function Dn(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "span", 30);
    E._uU(1);
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw().$implicit;
    E.xp6(1);
    E.hij(" Visible du ", ne.dateDebut, " ");
  }
}
function Et(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "span", 30);
    E._uU(1);
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw().$implicit;
    E.xp6(1);
    E.hij(" Visible jusqu'au ", ne.dateFin, " ");
  }
}
function lt(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "span", 30);
    E._uU(1);
    E.qZA();
  }
  if (qe & 2) {
    const ne = E.oxw().$implicit;
    E.xp6(1);
    E.AsE(" Visible du ", ne.dateDebut, " au ", ne.dateFin, " ");
  }
}
function et(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div", 31)(1, "p");
    E._uU(2, " Espace de travail: ");
    E.TgZ(3, "b");
    E._uU(4);
    E.qZA();
    E._UZ(5, "i", 32);
    E.qZA()();
  }
  if (qe & 2) {
    const ne = E.oxw().$implicit;
    E.xp6(4);
    E.Oqu(ne.titreEspaceTravail);
  }
}
const St = function (qe) {
  return {
    "background-color": qe
  };
};
const ve = function (qe) {
  return {
    anterieur: qe
  };
};
function Lt(qe, Me) {
  if (qe & 1) {
    E.TgZ(0, "div", 8);
    E._UZ(1, "span", 9);
    E.TgZ(2, "div", 10);
    E.YNc(3, rt, 2, 0, "div", 11);
    E._UZ(4, "div", 4)(5, "p", 12);
    E.ALo(6, "filterHtml");
    E.ALo(7, "base64");
    E.YNc(8, Be, 4, 3, "div", 0);
    E.YNc(9, De, 2, 1, "div", 13);
    E.YNc(10, Yt, 3, 2, "div", 14);
    E._UZ(11, "div", 4);
    E.YNc(12, Dn, 2, 1, "span", 15);
    E.YNc(13, Et, 2, 1, "span", 15);
    E.YNc(14, lt, 2, 2, "span", 15);
    E.YNc(15, et, 6, 1, "div", 16);
    E._UZ(16, "span", 4);
    E.qZA()();
  }
  if (qe & 2) {
    const ne = Me.$implicit;
    const me = E.oxw();
    E.xp6(1);
    E.Akn(E.VKq(19, St, me.tabCouleurs[ne.type]));
    E.xp6(1);
    E.Akn(E.VKq(21, St, me.tabCouleurs[ne.type]));
    E.Q6J("ngClass", E.VKq(23, ve, ne.isPast(ne) && me.configPostits.visibilityPostitPast));
    E.xp6(1);
    E.Q6J("ngIf", me.configPostits.addPostit);
    E.xp6(2);
    E.Q6J("innerHTML", E.lcZ(6, 14, E.xi3(7, 16, ne.contenu, "decode")), E.oJD);
    E.xp6(3);
    E.Q6J("ngIf", me.authStore.isPersonnel() || me.espaceTravail);
    E.xp6(1);
    E.Q6J("ngIf", me.configPostits.displayTargets);
    E.xp6(1);
    E.Q6J("ngIf", me.configPostits.updatePostit || me.configPostits.deletePostit);
    E.xp6(2);
    E.Q6J("ngIf", me.authStore.isPersonnel() && ne.dateDebut && !ne.dateFin && me.configPostits.displayDateLimit);
    E.xp6(1);
    E.Q6J("ngIf", me.authStore.isPersonnel() && ne.dateFin && !ne.dateDebut && me.configPostits.displayDateLimit);
    E.xp6(1);
    E.Q6J("ngIf", me.authStore.isPersonnel() && ne.dateFin && ne.dateDebut && me.configPostits.displayDateLimit);
    E.xp6(1);
    E.Q6J("ngIf", me.showTitle);
  }
}
export let a = (() => {
  class qe extends (0, w.kCV)() {
    constructor(ne, me, it, bt, Ut, Ze) {
      super();
      this.authStore = ne;
      this.postitsStore = me;
      this.postitsService = it;
      this.modalService = bt;
      this.uiService = Ut;
      this.loaderService = Ze;
      this.tabCouleurs = w.mO$;
      this.CIBLES_POSTIT = w.g2X;
      this.showTitle = false;
      this.datePipe = new w.ifA();
      this.idUser = this.authStore.currentUser.id;
      this.typeUser = this.authStore.currentUser.typeCompte;
    }
    ngOnInit() {
      this.variantDefault = w.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec, this.typeUser, this.idUser);
      this.initFromStorage();
      this.sortableConfig = {
        animation: 150,
        draggable: this.configPostits.addPostit ? ".item-postit" : "",
        onUpdate: ne => {
          this.updatePostitOrder(ne.newIndex);
        }
      };
      if (this.configPostits?.contexte === w.M$6.ACCUEIL_ESPACE_TRAVAIL) {
        this.showTitle = true;
      }
    }
    ngOnChanges(ne) {
      if (ne.idUser && !ne.idUser.isFirstChange() && ne.idUser.currentValue !== ne.idUser.previousValue || ne.typeUser && !ne.typeUser.isFirstChange() && ne.typeUser.currentValue !== ne.typeUser.previousValue) {
        this.variantDefault = w.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec, this.typeUser, this.idUser);
        this.initFromStorage();
      }
    }
    initFromStorage() {
      if (this.configPostits.contexte === w.M$6.ACCUEIL || this.configPostits.contexte === w.M$6.ACCUEIL_ESPACE_TRAVAIL) {
        this.tabPostitsInitial = Array.isArray(this.tabPostIts) ? this.tabPostIts.map(ne => new w.ZUG(ne)) : [];
        this.tabPostitsForSortable = Array.isArray(this.tabPostIts) ? this.tabPostIts.map(ne => new w.ZUG(ne)) : [];
      } else {
        this.postitsStore.selectListePostits(this.variantDefault).pipe((0, i.b)(ne => {
          this.tabPostitsInitial = Array.isArray(ne) ? ne.map(me => new w.ZUG(me)) : [];
          this.tabPostitsForSortable = Array.isArray(ne) ? ne.map(me => new w.ZUG(me)) : [];
        }), (0, t.R)(this.componentDestroyed$)).subscribe();
        this.refreshData();
      }
    }
    refreshData() {
      const ne = this.configPostits.addPostit === true || this.authStore.isPersonnel();
      const me = this.authStore.isPersonnel() && this.configPostits.contexte === w.M$6.GESTION;
      this.loader = this.loaderService.show(this);
      this.postitsService.listePostits(this.authStore.currentUser.codeOgec, this.typeUser, this.idUser, ne, me).pipe((0, b.x)(() => this.loaderService.hide(this)), (0, k.K)(it => this.uiService.notifyErrorThenEmpty(it, true, "Post-it", "fa fa-warning"))).subscribe();
    }
    iconeFor(ne) {
      let me = "";
      let it = false;
      let bt = false;
      let Ut = false;
      let Ze = false;
      ne.cible.forEach(pt => {
        if ((pt.indexOf(this.CIBLES_POSTIT.ELEVE.code) > -1 || this.CIBLES_POSTIT.ELEVE.code === pt) && !it) {
          me += "<i class=\"fa icon-ed_eleve fa-2x text-eleve\" title=\"Élève\"></i> ";
          it = true;
        }
        if ((pt.indexOf(this.CIBLES_POSTIT.FAMILLE.code) > -1 || this.CIBLES_POSTIT.FAMILLE.code === pt) && !Ze) {
          Ze = true;
          me += "<i class=\"fa icon-ed_famille fa-2x text-famille\" title=\"Famille\"></i>";
        }
        if ((pt.indexOf(this.CIBLES_POSTIT.PERSONNEL.code) > -1 || this.CIBLES_POSTIT.PERSONNEL.code === pt) && !Ut) {
          Ut = true;
          me += "<i class=\"fa icon-ed_personnel fa-2x text-personnel\" title=\"Personnel\"></i>";
        }
        if ((pt.indexOf(this.CIBLES_POSTIT.PROF.code) > -1 || this.CIBLES_POSTIT.PROF.code === pt) && !bt) {
          bt = true;
          me += "<i class=\"fa icon-ed_enseignant fa-2x text-enseignant\" title=\"Enseignant\"></i>";
        }
      });
      return me;
    }
    isAuteurOrAdmin(ne) {
      const me = new w.ZUG(ne);
      return Object.isExists(this.espaceTravail) && this.espaceTravail.estAdmin || +me.auteur.id === this.authStore.currentUser.id && me.auteur.type === this.authStore.currentUser.typeCompte || this.authStore.isPersonnel();
    }
    effacer(ne) {
      const me = {
        id: this.modalService.getModalsCount() + 1,
        class: "modal-sm",
        initialState: {
          title: "Suppression d'un post-it",
          message: "Êtes-vous sûr de vouloir supprimer ce post-it ?"
        }
      };
      this.modalService.show(S.z, me);
      this.modalService.onHide.pipe((0, M.q)(1), (0, v.h)(it => it === L.G.validation), (0, C.w)(it => {
        this.loader = this.loaderService.show(this);
        return this.postitsService.deletePostit(ne, this.authStore.currentUser.codeOgec, this.typeUser, this.idUser);
      }), (0, i.b)(it => {
        this.uiService.notifyEvent(w.DOJ.genericSuccess, "Suppression de votre post-it effectuée !", "Post-it", "icon-ed_postit");
      }), (0, b.x)(() => this.loaderService.hide(this)), (0, k.K)(it => this.uiService.notifyErrorThenEmpty(it, true, "Erreur", "fa fa-warning"))).subscribe();
    }
    openDialog(ne) {
      let me = ne;
      if (Object.isExists(me)) {
        me = new w.ZUG(ne);
        me.contenu = w.YC.base64decode(ne.contenu);
        me.couleur = this.tabCouleurs[ne.type];
      } else {
        me = new w.ZUG();
        me.type = "info";
        me.couleur = this.tabCouleurs.info;
      }
      const it = {
        postit: me,
        configPostits: this.configPostits,
        idUser: this.idUser,
        typeUser: this.typeUser
      };
      const bt = {
        id: this.modalService.getModalsCount() + 1,
        ignoreBackdropClick: true,
        initialState: it
      };
      this.modalService.show(Ge, bt);
    }
    updatePostitOrder(ne) {
      this.tabPostitsForSortable[ne].ordre = ne + 1;
      const me = new w.ZUG(this.tabPostitsForSortable[ne]);
      let it = me.dateDebut;
      let bt = me.dateFin;
      if (me.dateFin === null) {
        me.dateFin = "";
      }
      if (me.dateDebut === null) {
        me.dateDebut = "";
      }
      if (me.dateFin !== "") {
        if (typeof me.dateFin == "string") {
          bt = me.dateFin.split("/").reverse().join("/");
        }
        me.dateFin = this.datePipe.transform(bt, "yyyyMMdd");
      }
      if (me.dateDebut !== "") {
        if (typeof me.dateDebut == "string") {
          it = me.dateDebut.split("/").reverse().join("/");
        }
        me.dateDebut = this.datePipe.transform(it, "yyyyMMdd");
      }
      this.loader = this.loaderService.show(this);
      this.postitsService.updateOrdrePostit(me).pipe((0, i.b)(() => {
        this.refreshData();
        this.uiService.notifyEvent(w.DOJ.genericSuccess, "Modification de votre post-it effectuée !", "Post-it", "icon-ed_postit");
      }), (0, b.x)(() => this.loaderService.hide(this)), (0, k.K)(Ut => {
        this.tabPostitsForSortable = Array.isArray(this.tabPostitsInitial) ? this.tabPostitsInitial.map(Ze => new w.ZUG(Ze)) : [];
        return this.uiService.notifyErrorThenEmpty(Ut, true, "Post-it", "fa fa-warning");
      })).subscribe();
    }
  }
  qe.ɵfac = function (ne) {
    return new (ne || qe)(E.Y36(w.CnD), E.Y36(w.XQ5), E.Y36(w.wlB), E.Y36(O.tT), E.Y36(w.VLf), E.Y36(x.S));
  };
  qe.ɵcmp = E.Xpm({
    type: qe,
    selectors: [["ed-postits"]],
    inputs: {
      configPostits: "configPostits",
      idUser: "idUser",
      typeUser: "typeUser",
      espaceTravail: "espaceTravail",
      tabPostIts: "tabPostIts"
    },
    features: [E.qOj, E.TTD],
    decls: 6,
    vars: 8,
    consts: [[4, "ngIf"], [3, "ngBusy"], [1, "liste-postit", "row", 3, "sortablejsOptions", "edSortablejs"], ["class", "item-postit col-lg-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "clearfix"], ["type", "button", "id", "btn-ajouter-postit", 1, "btn", "btn-primary", "float-end", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-arrows"], [1, "item-postit", "col-lg-4"], [1, "epingle"], [1, "note-postit", "gestion-postit", 3, "ngClass"], ["aria-hidden", "true", "class", "float-end d-print-none", 4, "ngIf"], [1, "ed-cke", 3, "innerHTML"], ["class", "postit-cibles float-start", 4, "ngIf"], ["class", "postit-actions float-end d-print-none", 4, "ngIf"], ["class", "dateFin", 4, "ngIf"], ["class", "float-end d-print-none", 4, "ngIf"], ["aria-hidden", "true", 1, "float-end", "d-print-none"], [1, "fa", "fa-arrows", "draggable"], ["class", "margin-whitespace", 4, "ngIf"], [1, "margin-whitespace"], [1, "postit-cibles", "float-start"], [3, "innerHTML"], [1, "postit-actions", "float-end", "d-print-none"], ["type", "button", "class", "btn text-normal no-padding no-background", "title", "Modifier ce postit", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn text-normal no-padding no-background", "title", "Supprimer ce postit", 3, "click", 4, "ngIf"], ["type", "button", "title", "Modifier ce postit", 1, "btn", "text-normal", "no-padding", "no-background", 3, "click"], [1, "fa", "fa-pencil", "i-small", "cliquable", "margin-whitespace"], ["type", "button", "title", "Supprimer ce postit", 1, "btn", "text-normal", "no-padding", "no-background", 3, "click"], [1, "fa", "fa-trash", "i-small", "text-danger", "cliquable", "margin-whitespace"], [1, "dateFin"], [1, "float-end", "d-print-none"], ["aria-hidden", "true", 1, "margin-whitespace", "fa", "icon-ed_espacedetravail"]],
    template: function (ne, me) {
      if (ne & 1) {
        E.YNc(0, st, 8, 0, "div", 0);
        E.TgZ(1, "div", 1)(2, "div", 2);
        E.YNc(3, Lt, 17, 25, "div", 3);
        E.ALo(4, "trackByProperty");
        E.qZA();
        E._UZ(5, "div", 4);
        E.qZA();
      }
      if (ne & 2) {
        E.Q6J("ngIf", me.configPostits.addPostit);
        E.xp6(1);
        E.Q6J("ngBusy", me.loader);
        E.xp6(1);
        E.Q6J("sortablejsOptions", me.sortableConfig)("edSortablejs", me.tabPostitsForSortable);
        E.xp6(1);
        E.Q6J("ngForOf", me.tabPostitsInitial)("ngForTrackBy", E.lcZ(4, 6, "id"));
      }
    },
    dependencies: [B.mk, B.sg, B.O5, le.DC, Ue.Q, w.$t3, w.YC, ot.w, q.$],
    styles: [".item-postit{word-wrap:break-word;position:relative;padding-top:40px}.item-postit:first-child{margin-top:0}.item-postit .epingle{position:absolute;top:25px;left:80px;width:5px;height:30px;background:#000;border-radius:5px;overflow:hidden}.item-postit .epingle:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.3)}.draggable{cursor:grab;cursor:-moz-grab}.note-postit{padding:25px;box-shadow:0 0 30px #00000070;border-radius:5px}.note-postit span.dateFin{font-size:12px;display:block;width:100%;clear:both;margin-top:10px}.note-postit em{font-size:10px}.note-postit p a{color:#00f;text-decoration:underline}.note-postit p em{font-size:14px}.note-postit p img{max-width:100%;height:auto!important}.note-postit.anterieur{opacity:.5;transition:opacity 1s}.note-postit.anterieur:hover{opacity:1;zoom:0}.postit-actions{color:#000;margin:0 10px 0 0}.postit-actions i:not(.i-small){margin:0 2px;cursor:pointer;font-size:20px}#btn-ajouter-postit{margin-bottom:10px}.liste-postit{display:flex;flex-wrap:wrap}\n"],
    encapsulation: 2
  });
  return qe;
})();