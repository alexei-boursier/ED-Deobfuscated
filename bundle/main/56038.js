import * as i from "94650";
import * as t from "45007";
import * as b from "69248";
import * as v from "18505";
import * as C from "35684";
import * as w from "70262";
import * as S from "82722";
import * as I from "46590";
const le = ["scheduler_edt"];
function fe(j, G) {
  if (j & 1) {
    i.TgZ(0, "div", 15);
    i._uU(1);
    i.qZA();
  }
  if (j & 2) {
    const se = i.oxw();
    i.xp6(1);
    i.hij("(Semaine ", " " + se.weekNumber, ")");
  }
}
export let R = (() => {
  class j extends (0, t.kCV)() {
    constructor(se, W, Pe, Le, he, pe, re, Re, Ge, Ue, ot) {
      super();
      this.agendaHelperService = se;
      this.schedulerService = W;
      this.filtresAgendaEdtUserStore = Pe;
      this._cd = Le;
      this.loaderService = he;
      this.uiService = pe;
      this.authStore = re;
      this.edtStore = Re;
      this.agendaStore = Ge;
      this.modalService = Ue;
      this.espaceDeTravailStore = ot;
      this.resetPeriode = false;
      this.schedulerConfig = {
        mode: b.e.week,
        dateStart: new Date()
      };
      this.isPeriodeChanged = false;
      this.isViewReady = false;
      this._datePipe = new t.ifA();
      this.actionOnSelect = new i.vpe();
    }
    get periode() {
      const se = Object.isExists(this.schedulerService.schedulerCurrent) ? this.schedulerService.schedulerCurrent.getState() : undefined;
      this.showWeekNumber = se?.mode === "week";
      if (!Object.isExists(se) || !Object.isExists(se.mode)) {
        const W = this.schedulerConfig.dateStart || new Date();
        switch (this.schedulerConfig.mode) {
          case b.e.day:
            return {
              dateDebut: W,
              dateFin: W,
              avecTrous: this.displayTrous || false
            };
          case b.e.month:
            return {
              dateDebut: t.C_1.getStartOfMonth(W),
              dateFin: t.C_1.getEndOfMonth(W),
              avecTrous: this.displayTrous || false
            };
          case b.e.year:
            {
              const Pe = t.C_1.getDatesAnneeScolaire(W);
              return {
                dateDebut: Pe[0],
                dateFin: Pe[1],
                avecTrous: this.displayTrous || false
              };
            }
          default:
            return {
              ...t.C_1.getWeekPeriodForADay(),
              avecTrous: this.displayTrous || false
            };
        }
      }
      this.weekNumber = this._datePipe.transform(se.min_date, "w");
      return {
        dateDebut: se.min_date,
        dateFin: t.C_1.addNbSecondesToDate(se.max_date, -1),
        avecTrous: this.displayTrous
      };
    }
    ngOnInit() {
      const se = {
        weekButton: true,
        monthButton: true,
        todayButton: true,
        yearButton: false,
        nextButton: true,
        prevButton: true,
        dateTitle: true,
        exportPdf: true,
        exportIcal: true
      };
      this.schedulerTemplateConfig = Object.isExists(this.schedulerTemplateConfig) ? {
        ...se,
        ...this.schedulerTemplateConfig
      } : se;
      this.displayTrous = !!Object.isExists(this.displayTrous) && this.displayTrous;
      this.schedulerService.schedulerCurrent = scheduler;
      this.schedulerService.initConfig();
      if (Object.isExists(this.schedulerConfig)) {
        this.schedulerService.schedulerCurrent.config.details_on_dblclick = !Object.isExists(this.schedulerConfig.dblClickEnable) || this.schedulerConfig.dblClickEnable;
        this.schedulerService.attachEvent("onDblClick", () => this.schedulerService.schedulerCurrent.config.details_on_dblclick);
        if (this.actionOnSelect.observers.length > 0) {
          this.schedulerService.attachEvent("onClick", (W, Pe) => {
            this.actionOnSelect.emit({
              evenement: this.schedulerService.schedulerCurrent.getEvent(W),
              e: Pe
            });
          });
        }
      }
      this.schedulerService.schedulerCurrent.showLightbox = this.displayModalEvent.bind(this);
      this.schedulerService.attachEvent("onTemplatesReady", () => this.onTemplateReady());
      this.schedulerService.attachEvent("onSchedulerReady", () => {
        this.initFromStorage();
      });
      this.schedulerService.attachEvent("onViewChange", W => {
        if (this.isPeriodeChanged || !this.isViewReady) {
          this.isViewReady = true;
          this.doRefreshEdt();
        }
      });
      this.schedulerService.attachEvent("onBeforeViewChange", (W, Pe, Le, he) => {
        this.isPeriodeChanged = W !== Le || !t.C_1.isSameDay(Pe, he);
        return true;
      });
      setTimeout(() => {
        if (this.schedulerConfig?.mode) {
          this.schedulerService.updateLoadMode(this.schedulerConfig.mode);
        }
        this.schedulerService.schedulerCurrent.init(this.schedulerContainer.nativeElement, this.schedulerConfig.dateStart, this.schedulerConfig.mode);
      }, 0);
    }
    ngOnChanges(se) {
      if (se.idEntity || se.typeEntity) {
        const W = this.filtresAgendaEdtUserStore.getTabAgendaEdtToDisplay().find(Pe => Pe.typeEntity === this.typeEntity && Pe.idEntity === this.idEntity && Pe.typeAgenda === t.eTt.EDT);
        if (!Object.isExists(W)) {
          const Pe = [...this.filtresAgendaEdtUserStore.getTabAgendaEdtToDisplay()];
          this.filtresAgendaEdtUserStore.convertEntityToAgendaFiltre(this.typeEntity, this.idEntity).pipe((0, v.b)(Le => {
            if (!!Array.isArray(Le)) {
              Le.forEach(he => {
                if (he.typeAgenda === t.eTt.EDT) {
                  he.selected = true;
                }
                Pe.unshift(he);
              });
              this.filtresAgendaEdtUserStore.tabAgendaEdtToDisplay = Pe;
            }
          })).subscribe();
        }
      }
      if (se.idEntity || se.typeEntity || se.schedulerConfig) {
        if (!Object.values(se).some(Pe => Pe.isFirstChange())) {
          setTimeout(() => {
            this.schedulerService.setCurrentView(this.schedulerConfig.dateStart, this.schedulerConfig.mode);
          }, 0);
        }
      }
    }
    ngOnDestroy() {
      this.schedulerService.cleanDatas();
      return super.ngOnDestroy();
    }
    initFromStorage() {
      (0, k.a)([this.edtStore.select$(), this.agendaStore.select$()]).pipe((0, C.T)(2), (0, v.b)(() => {
        this.udpdateEventsDisplayed();
      }), (0, w.K)(se => this.uiService.notifyErrorThenEmpty(se, true, "Erreur", "fa fa-warning")), (0, S.R)(this.componentDestroyed$)).subscribe();
      this.filtresAgendaEdtUserStore.selectTabAgendaEdtToLoad().pipe((0, L.x)((se, W) => se.length === W.length), (0, C.T)(1), (0, v.b)(se => {
        this.loadEventsAgendasFitres(se);
      }), (0, w.K)(se => this.uiService.notifyErrorThenEmpty(se, true, "Erreur", "fa fa-warning")), (0, S.R)(this.componentDestroyed$)).subscribe();
    }
    doRefreshEdt() {
      this.loadEventsAgendasFitres(this.filtresAgendaEdtUserStore.getTabAgendaEdtToLoad());
    }
    displayModalEvent(se) {
      const W = this.schedulerService.schedulerCurrent.getEvent(se);
      let pe;
      let re;
      let Pe = false;
      let Le = this.idEntity;
      let he = this.typeEntity;
      if (!Object.isExists(W)) {
        return window.alert("Impossible de modifier l'événement");
      }
      re = t.FSr.isNotEmptyString(W.titreEvenement) ? new t.B9I(W) : Object.isExists(W.codeMatiere) ? new t.lTZ(W) : new t.gBp(W);
      const Re = re instanceof t.gBp && re.cibles.findIndex(ot => ot.search(t.dcH.ESPACE_TRAVAIL) !== -1 && (he = t.dcH.ESPACE_TRAVAIL, Le = +re.ciblesEtab[0], true)) > -1;
      if (Re) {
        pe = this.espaceDeTravailStore.getEspaceTravail(Le, this.authStore.currentUser.codeOgec, this.authStore.currentUser.typeCompte, this.authStore.currentUser.id);
      }
      if (re.typeEvenement === t.iUh.RPPFamille && re.idEleve > 0) {
        this.authStore.getEleve(re.idEleve).pipe((0, v.b)(ot => {
          re.eleve = new t.Dfc(ot);
        })).subscribe();
      }
      const Ge = re instanceof t.gBp && re.cibles.findIndex(ot => ot.search(t.meW.SALLE) !== -1) > -1;
      let Ue = Object.isExists(W.readonly) && !W.readonly && re instanceof t.gBp;
      if (Ue && Ge) {
        Ue = this.authStore.isPersonnel() || t.Kg5.getModuleParametre(t.qzA.EDT, "reservationSallesActif", this.authStore.currentUser) === "1";
      }
      Ue &&= this.authStore.isPersonnel() || Object.isExists(pe) && pe.estAdmin || +W.idAuteur === this.authStore.currentUser.id && W.typeAuteur === this.authStore.currentUser.typeCompte;
      if (Ue) {
        Pe = !Re && !Ge;
        this.agendaHelperService.openUpdateDialog(Le, he, re, Pe, re.estSupprimable);
      } else if (re instanceof t.gBp && re.description || re instanceof t.lTZ && re.descriptionGenerate || re instanceof t.B9I) {
        const ot = {
          evenement: re
        };
        const st = {
          id: this.modalService.getModalsCount() + 1,
          initialState: ot
        };
        this.modalService.show(O.l, st);
      }
    }
    onTemplateReady() {
      this.schedulerService.schedulerCurrent.templates.event_text = this.schedulerService.renderEventText.bind(this.schedulerService);
      this.schedulerService.schedulerCurrent.templates.event_bar_text = this.schedulerService.renderEventBarText.bind(this.schedulerService);
      this.schedulerService.schedulerCurrent.templates.event_header = this.schedulerService.renderEventHeader.bind(this.schedulerService);
      this.schedulerService.schedulerCurrent.templates.tooltip_text = this.schedulerService.renderTooltip.bind(this.schedulerService);
    }
    updateScheduler(se) {
      this.schedulerService.schedulerCurrent.clearAll();
      se = se.filter(W => this.displayTrous === true || this.displayTrous === false && W.typeCours !== t.Kaf.PERMANENCE);
      se = [...this.manageRPPAndRDVPP(se)];
      this.schedulerService.tabEvenements = se;
      if (this.schedulerService.schedulerCurrent.isViewExists(this.schedulerService.mode)) {
        try {
          this.schedulerService.schedulerCurrent.parse(JSON.parse(JSON.stringify(this.schedulerService.tabEvenements)), "json");
        } catch (W) {
          console.log(W);
        }
      }
    }
    udpdateEventsDisplayed() {
      const se = [];
      let W;
      let Pe = [];
      this.filtresAgendaEdtUserStore.getTabAgendaEdtToLoad().forEach(Le => {
        let he = t.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec, Le.typeEntity, Le.idEntity);
        W = Object.getEntity(Le.typeAgenda === t.eTt.EDT ? this.edtStore.snapshot : this.agendaStore.snapshot, he);
        if (!Object.isExpired(W)) {
          Pe = Le.typeAgenda === t.eTt.EDT ? W.emploidutemps : W.evenements;
          se.push(...Pe);
        }
        if (Le.typeAgenda === t.eTt.EDT && (Le.typeEntity === t.meW.SALLE || Le.typeEntity === t.meW.ENSEIGNANT)) {
          if (Le.typeEntity === t.meW.ENSEIGNANT) {
            he = t.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec, Le.typeEntity, Le.idEntity, [t.meW.SALLE, 0]);
          }
          W = Object.getEntity(this.agendaStore.snapshot, he);
          if (Le.typeEntity === t.meW.SALLE) {
            W = new t.lSf(W);
            W.evenements.forEach(pe => pe.typeEvenement = t.meW.SALLE);
          }
          if (!Object.isExpired(W)) {
            se.push(...W.evenements);
          }
        }
      });
      this.updateScheduler(se);
    }
    loadEventsAgendasFitres(se) {
      const W = [];
      se.forEach(Le => {
        if (Le.selected) {
          W.push(this.agendaHelperService.loadEvenementsAgendaOrEDT(Le, this.periode).pipe((0, I.d)(null)));
          if (Le.typeEntity === t.meW.SALLE) {
            W.push(this.agendaHelperService.loadEvenementsAgendaOrEDT(new t.b9O({
              ...Le,
              typeAgenda: Le.typeEntity
            }), this.periode).pipe((0, I.d)(null)));
          } else if (Le.typeEntity === t.meW.ENSEIGNANT) {
            W.push(this.agendaHelperService.loadEvenementsAgendaOrEDT(new t.b9O({
              ...Le,
              typeAgenda: t.eTt.AGENDA,
              idEntity: 0,
              typeEntity: t.meW.SALLE
            }), this.periode).pipe((0, I.d)(null)));
          }
        }
      });
      if (W.length > 0) {
        this.loader = this.loaderService.show(this);
        this._cd.markForCheck();
        (0, M.D)(W).pipe((0, v.b)(() => {
          this.udpdateEventsDisplayed();
        }), (0, E.x)(() => {
          this.loaderService.hide(this);
        })).subscribe();
      } else {
        this.updateScheduler([]);
      }
    }
    manageRPPAndRDVPP(se) {
      const W = [];
      const Pe = Array.isArray(se) ? se.map(Le => new t.B9I(Le)) : [];
      if (Pe.length > 0) {
        Pe.forEach(Le => {
          if (Le instanceof t.B9I && Le.typeEvenement === t.iUh.RPPFamille) {
            const he = W.find(pe => Le.cibles[0] === pe.cibles[0] && Le.libelle === pe.libelle);
            if (Object.isExists(he)) {
              he.isVisio = false;
              if (Le.heureDebut < he.heureDebut) {
                he.heureDebut = Le.heureDebut;
                he.start_date = Le.start_date;
              }
              if (Le.heureFin > he.heureFin) {
                he.heureFin = Le.heureFin;
                he.end_date = Le.end_date;
              }
              he.nomAuteur = "";
            } else {
              W.push(Le);
            }
          }
        });
        if (W.length > 0) {
          W.forEach(Le => {
            se.edRemove(he => he.libelle === Le.libelle && he.cibles[0] === Le.cibles[0]);
          });
          return se = [...se, ...W];
        } else {
          return se;
        }
      } else {
        return se;
      }
    }
  }
  j.ɵfac = function (se) {
    return new (se || j)(i.Y36(x.U), i.Y36(b.G), i.Y36(U.c), i.Y36(i.sBO), i.Y36(B.S), i.Y36(t.VLf), i.Y36(t.CnD), i.Y36(t.hGx), i.Y36(t.Tf5), i.Y36(F.tT), i.Y36(t.EYm));
  };
  j.ɵcmp = i.Xpm({
    type: j,
    selectors: [["ed-emploi-du-temps-scheduler"]],
    viewQuery: function (se, W) {
      if (se & 1) {
        i.Gf(le, 7);
      }
      if (se & 2) {
        let Pe;
        if (i.iGM(Pe = i.CRH())) {
          W.schedulerContainer = Pe.first;
        }
      }
    },
    inputs: {
      idEntity: "idEntity",
      typeEntity: "typeEntity",
      displayTrous: "displayTrous",
      schedulerTemplateConfig: "schedulerTemplateConfig",
      resetPeriode: "resetPeriode",
      schedulerConfig: "schedulerConfig"
    },
    outputs: {
      actionOnSelect: "actionOnSelect"
    },
    features: [i.qOj, i.TTD],
    decls: 17,
    vars: 12,
    consts: [[1, "dhx_cal_container", "emploidutemps-global", 2, "height", "1062px", "width", "100%", 3, "ngBusy", "id"], ["scheduler_edt", ""], [1, "dhx_cal_navline"], [1, "dhx_cal_prev_button", 3, "hidden"], [1, "dhx_cal_next_button", 3, "hidden"], ["id", "view-today", 1, "dhx_cal_today_button", 3, "hidden"], [1, "dhx_cal_date", 3, "hidden"], ["class", "dhx_cal_weekNumber", 4, "ngIf"], ["id", "view-week", "name", "week_tab", 1, "dhx_cal_tab", "dhx_cal_tab_first", 2, "right", "140px", 3, "hidden"], ["id", "view-month", "name", "month_tab", 1, "dhx_cal_tab", 2, "right", "76px", 3, "hidden"], ["name", "year_tab", "id", "view-year", 1, "dhx_cal_tab", "dhx_cal_tab_last", 2, "right", "280px", 3, "hidden"], ["id", "export-pdf", 1, "dhx_cal_export", "pdf", 3, "hidden", "click"], ["id", "export-ical", "title", "exporter au format (.ical)", 1, "dhx_cal_export", "ical", 3, "hidden", "click"], [1, "dhx_cal_header"], [1, "dhx_cal_data"], [1, "dhx_cal_weekNumber"]],
    template: function (se, W) {
      if (se & 1) {
        i.TgZ(0, "div", 0, 1)(2, "div", 2)(3, "div", 3);
        i._uU(4, " ");
        i.qZA();
        i.TgZ(5, "div", 4);
        i._uU(6, " ");
        i.qZA();
        i._UZ(7, "div", 5)(8, "div", 6);
        i.YNc(9, fe, 2, 1, "div", 7);
        i._UZ(10, "div", 8)(11, "div", 9)(12, "div", 10);
        i.TgZ(13, "div", 11);
        i.NdJ("click", function () {
          return W.schedulerService.schedulerCurrent.exportToPDF({
            name: "emploidutemps.pdf",
            format: "A4",
            zoom: 0.7
          });
        });
        i.qZA();
        i.TgZ(14, "div", 12);
        i.NdJ("click", function () {
          return W.schedulerService.schedulerCurrent.exportToICal();
        });
        i.qZA()();
        i._UZ(15, "div", 13)(16, "div", 14);
        i.qZA();
      }
      if (se & 2) {
        i.s9C("id", W.typeEntity + "_" + W.idEntity);
        i.Q6J("ngBusy", W.loader);
        i.xp6(3);
        i.Q6J("hidden", !W.schedulerTemplateConfig.prevButton);
        i.xp6(2);
        i.Q6J("hidden", !W.schedulerTemplateConfig.nextButton);
        i.xp6(2);
        i.Q6J("hidden", !W.schedulerTemplateConfig.todayButton);
        i.xp6(1);
        i.Q6J("hidden", !W.schedulerTemplateConfig.dateTitle);
        i.xp6(1);
        i.Q6J("ngIf", W.showWeekNumber);
        i.xp6(1);
        i.Q6J("hidden", !W.schedulerTemplateConfig.weekButton);
        i.xp6(1);
        i.Q6J("hidden", !W.schedulerTemplateConfig.monthButton);
        i.xp6(1);
        i.Q6J("hidden", !W.schedulerTemplateConfig.yearButton);
        i.xp6(1);
        i.Q6J("hidden", !W.schedulerTemplateConfig.exportPdf);
        i.xp6(1);
        i.Q6J("hidden", !W.schedulerTemplateConfig.exportIcal);
      }
    },
    dependencies: [Z.O5, X.DC],
    styles: [".emploidutemps-global{margin:20px 0}.emploidutemps-global .edt-cours-header{word-break:break-all}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return j;
})();