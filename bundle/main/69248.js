import * as i from "94650";
import * as t from "45007";
export const e = {
  day: "day",
  month: "month",
  week: "week",
  year: "year"
};
export let G = (() => {
  class C {
    constructor(S, L) {
      this.authStore = S;
      this.sanitizer = L;
      this._datePipe = new t.ifA();
      this._displayNomPipe = new t.$t3();
      this._tabEvents = [];
      this._schedulerEventsAttached = {};
      this._mode = e.week;
      this._filterHtml = new b.w(L);
    }
    get schedulerCurrent() {
      return this._scheduler;
    }
    set schedulerCurrent(S) {
      this._scheduler = S;
    }
    get tabEvenements() {
      return this._tabEvents;
    }
    set tabEvenements(S) {
      this._tabEvents = S;
    }
    get mode() {
      return this._mode;
    }
    ngOnDestroy() {
      this.cleanDatas();
    }
    initConfig() {
      this._scheduler.config = {
        ...this._scheduler.config,
        first_hour: 7,
        last_hour: 23,
        separate_short_events: false,
        date_format: "%Y-%m-%d %H:%i",
        start_on_monday: true,
        show_loading: true,
        load_date: "%Y-%m-%d",
        readonly_form: true,
        readonly: false,
        select: false,
        details_on_dblclick: true,
        dblclick_create: false,
        drag_create: false,
        drag_resize: false,
        drag_move: false,
        hour_size_px: 88,
        day_date: "%D %j %M",
        cascade_event_display: false,
        container_autoresize: true
      };
    }
    updateLoadMode(S = e.week) {
      this._mode = S;
    }
    attachEvent(S, L) {
      this._schedulerEventsAttached[S] = this._scheduler.attachEvent(S, L);
    }
    cleanDatas() {
      if (Object.isExists(this._scheduler) && Object.isExists(this._schedulerEventsAttached)) {
        const S = Object.keys(this._schedulerEventsAttached);
        for (const L of S) {
          this._scheduler.detachEvent(this._schedulerEventsAttached[L]);
        }
        this._schedulerEventsAttached = {};
        this._scheduler.clearAll();
      }
    }
    setCurrentView(S = new Date(), L = e.week) {
      if (Object.isExists(this._scheduler)) {
        this._scheduler.setCurrentView(S, L);
      }
    }
    getTextColor(S) {
      if (S instanceof t.B5X && this._mode === e.month) {
        return "#000";
      } else {
        return t.Fp2.getTextColor(S.color);
      }
    }
    renderEventHeader(S, L, I) {
      let x;
      let E = "";
      let O = "";
      x = Object.isExists(I.interrogation) ? new t.B5X(I) : Object.isExists(I.typeCours) ? new t.lTZ(I) : Object.isExists(I.titreEvenement) ? new t.B9I(I) : new t.gBp(I);
      E += "<span class=\"edt-cours-header\" style=\"color: " + this.getTextColor(x) + "\">";
      if (x instanceof t.gBp) {
        const B = x.cibles.find(X => X.search("W") !== -1);
        const F = typeof B !== "undefined" && B !== "";
        const Z = !F && x.isReservationSalle();
        O += F ? "<i class=\"fa icon-ed_espacedetravail\"></i>&nbsp;" : Z ? "<i class=\"fa fa-calendar\"></i>&nbsp;" : "<i class=\"fa fa-calendar-o\"></i>&nbsp;";
        if (Object.isExists(x.visio) || x instanceof t.B9I && x.isVisio) {
          O += "<i class=\"icon-ed_rtc\"></i>&nbsp;";
        }
        E += O;
        if (Z) {
          if (x.typeEvenement === t.meW.SALLE) {
            const X = new t.XsP(x.auteur);
            X.civilite = "";
            E += this._displayNomPipe.transform(X, true, true, this.authStore.isFouE());
          } else if (this.authStore.isProfesseur() && Object.isExists(x.localisation)) {
            E += x.localisation.libelle;
          } else {
            E += this.sanitizer.sanitize(i.q3G.HTML, this._filterHtml.transform(x.libelle));
          }
        } else {
          E += x.typeEvenement === t.iUh.ETVisio || x.typeEvenement === t.iUh.RPPFamille || x.typeEvenement === t.iUh.RPPProf || x.typeEvenement === t.iUh.RDVPP || x.typeEvenement === t.iUh.RDVPPInvite ? x.titreEvenement : scheduler.templates.event_date(S) + " - " + scheduler.templates.event_date(L);
        }
        E += "</span>";
      } else if (x instanceof t.lTZ) {
        if (x.isAnnule) {
          E += "ANNULÉ";
        } else {
          if (x.isFlexible) {
            E += "<i class=\"icon-ed_groupeflex\"></i> ";
          }
          E += scheduler.templates.event_date(S) + " - " + scheduler.templates.event_date(L);
          if (Object.isExists(x.salle) && x.salle.trim() !== "") {
            E += "<span class=\"float-end\">En " + this.htmlEntities(x.salle) + "</span>";
          }
        }
        E += "</span>";
      } else if (x instanceof t.B5X) {
        if (I.isFlexible) {
          E += "<i class=\"icon-ed_groupeflex\"></i> ";
        }
        E += scheduler.templates.event_date(S) + " - " + scheduler.templates.event_date(L);
        E += "</span>";
      }
      return E;
    }
    htmlEntities(S) {
      return String(S).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    renderEventText(S, L, I) {
      let O;
      let E = "";
      O = Object.isExists(I.interrogation) ? new t.B5X(I) : Object.isExists(I.typeCours) ? new t.lTZ(I) : new t.gBp(I);
      const x = this.getTextColor(O);
      if (O instanceof t.gBp) {
        E += "<div style=\"color: " + x + "\">";
        E += O.typeEvenement === t.iUh.RDVPP || O.typeEvenement === t.iUh.RDVPPInvite ? O.descriptionDecode : O.libelle ? this.sanitizer.sanitize(i.q3G.HTML, this._filterHtml.transform(O.libelle)) : O.descriptionDecode;
        E += "</div>";
      } else if (O instanceof t.lTZ) {
        if (O.isModifie) {
          E += "<i class=\"fa fa-warning float-end\" title=\"cours modifié\" style=\"color: " + x + "\"></i>";
        }
        E += "<span class=\"edt-cours-text\" style=\"color: " + x + "\">" + O.text + "</span>";
        if (this.authStore.isProfOuPersonnel()) {
          E += "<br>";
          E += "<span class=\"edt-prof\" style=\"color: " + x + "\">";
          E += O.classe + O.groupe;
          E += "</span>";
        }
        if (O.prof && O.prof.trim() !== "") {
          E += "<br>";
          E += "<span class=\"edt-prof\" style=\"color: " + x + "\">";
          E += O.prof;
          E += "</span>";
        }
        if (O.dispense > 0) {
          E += "<br>";
          E += "<span class=\"edt-prof\" style=\"color: " + x + "\">";
          E += "<i>Dispensé</i>";
          E += "</span>";
        }
        E += "<div class=\"cahier-text-icon-bar\">";
        if (O.icone) {
          E += "<div class=\"logoCoursEDT\">";
          E += "<img alt=\"icone de l' évènement\" class=\"cahier-text-icon float-end\" src=\"" + O.icone + "\"/>";
          E += "</div>";
        }
        E += "</div>";
      } else if (O instanceof t.B5X) {
        if (I.groupe) {
          I.text += " - " + I.groupe;
        }
        E += "<span class=\"edt-cours-text\" style=\"color: " + x + "\">" + I.text + "</span>";
        if (I.prof && I.prof.trim() !== "") {
          E += "<br>";
          E += "<span class=\"edt-prof\" style=\"color: " + x + "\">";
          E += I.prof;
          E += "</span>";
        }
        if (I.travailAFaire) {
          E += "<div class=\"badge travail-a-faire margin-whitespace\" tooltip=\"Travail à faire saisi\"><i class=\"fa fa-check\"></i></div>";
        }
        if (I.contenuDeSeance) {
          E += "<div class=\"badge contenu-seance margin-whitespace\" container=\"body\" placement=\"left\" tooltip=\"Contenu de séance saisi\"><i class=\"fa fa-check\"></i></div>";
        }
        E += "<div class=\"cahier-text-icon-bar\">";
        E += "</div>";
      }
      return E;
    }
    renderEventBarDate(S, L, I) {
      const E = scheduler.date.date_to_str("%H:%i");
      const O = E(S);
      const x = E(L);
      let U = "• ";
      if (O !== "00:00" || x !== "23:59") {
        U += "<b>" + O + "</b> ";
      }
      return U;
    }
    renderEventYearTooltip(S, L, I) {
      const E = I;
      let x = "";
      x += "<span class=\"edt-cours-text\" style=\"color: " + this.getTextColor(E) + "\">" + E.libelle + "</span>";
      return x;
    }
    renderEventBarText(S, L, I) {
      let O;
      let E = "";
      O = Object.isExists(I.interrogation) ? new t.B5X(I) : Object.isExists(I.typeCours) ? new t.lTZ(I) : new t.gBp(I);
      const x = this.getTextColor(O);
      if (O instanceof t.gBp) {
        E += "<span class=\"edt-cours-text\" style=\"color: " + x + "\">" + this.sanitizer.sanitize(i.q3G.HTML, this._filterHtml.transform(O.libelle)) + "</span>";
      } else if (O instanceof t.lTZ) {
        E += "<span class=\"edt-cours-text\" style=\"color: " + x + "\">" + O.text + "</span>";
      } else if (O instanceof t.B5X) {
        E += "<span class=\"edt-cours-text\" style=\"color: " + x + "\">";
        if (I.travailAFaire) {
          E += "<span class=\"badge travail-a-faire\" style=\"font-size: 5px;min-width: 0;padding: 2px;\"><i class=\"fa fa-check\"></i></span>";
        }
        if (I.contenuDeSeance) {
          E += "<span class=\"badge contenu-seance\" style=\"font-size: 5px;min-width: 0;padding: 2px;\"><i class=\"fa fa-check\"></i></span>";
        }
        E += I.text + "</span>";
      }
      return E;
    }
    renderTooltip(S, L, I) {
      const E = scheduler.date.date_to_str("%H:%i");
      let x;
      let O = "";
      x = Object.isExists(I.interrogation) ? new t.B5X(I) : Object.isExists(I.typeCours) ? new t.lTZ(I) : I?.titreEvenement !== "" ? new t.B9I(I) : new t.gBp(I);
      if (x instanceof t.gBp) {
        const U = E(S);
        const B = E(L);
        if (x.visio || x?.isVisio) {
          O += "<i class=\"icon-ed_rtc\"></i> <strong>Visio</strong><br />";
        }
        if (x instanceof t.B9I && (x.typeEvenement === t.iUh.RPPFamille || x.typeEvenement === t.iUh.RPPProf || x.typeEvenement === t.iUh.RDVPPInvite || x.typeEvenement === t.iUh.RDVPP)) {
          O += "<strong>" + x.titreEvenement + "</strong><br/>";
        } else if (x.libelle) {
          O += "<strong>" + this.sanitizer.sanitize(i.q3G.HTML, this._filterHtml.transform(x.libelle)) + "</strong><br/>";
        }
        if (U !== "00:00" || B !== "23:59") {
          O += "<b>Début:</b> " + U + "<br/><b>Fin:</b> " + B;
        }
        if (t.FSr.isNotEmptyString(x.descriptionDecode)) {
          O += "<br/><b>Description : </b>" + x.descriptionDecode;
        }
        if (x.typeEvenement !== t.iUh.RDVPP && x.typeEvenement !== t.iUh.RDVPPInvite && x.typeEvenement !== t.iUh.RPPFamille && x.typeEvenement !== t.iUh.RPPProf && x.typeEvenement !== t.iUh.ETVisio) {
          O += "<br/><b class=\"fa fa-user\"> Par </b> " + this._displayNomPipe.transform(x.auteur, false, true, this.authStore.isFouE());
        }
        if (x instanceof t.B9I && (x.typeEvenement === t.iUh.RDVPP || x.typeEvenement === t.iUh.RDVPPInvite)) {
          O += "<br/><b>Avec : </b>" + x.sexeAuteur + " " + x.nomAuteur;
        }
        if (x instanceof t.B9I && (x.typeEvenement === t.iUh.RDVPPInvite || x.typeEvenement === t.iUh.RDVPP || x.typeEvenement === t.iUh.RPPFamille) && x.prenomEleve !== "" && x.nomEleve !== "" && x.classeEleve !== "") {
          O += "<br/><b>Pour : </b>" + x.nomEleve + " " + x.prenomEleve + " (" + x.classeEleve + ")";
        }
        if (x instanceof t.B9I && x.typeEvenement === t.iUh.RDVPPInvite && x.civiliteHote !== "" && x.nomHote !== "") {
          O += "<br/><b>Invité par : </b>" + x.civiliteHote + " " + x.nomHote;
        }
        if (!x.readonly) {
          O += "<br/>";
          O += "<b>Double-cliquez sur l'événement pour le modifier</b>";
        }
      } else if (x instanceof t.lTZ) {
        O += "<b>Cours: </b> " + x.text;
        if (this.authStore.isProfOuPersonnel()) {
          O += "<br/><b>Code matière :</b>" + x.codeMatiere;
          if (x.classe !== "") {
            O += "<br/><b>Classe: </b> " + x.classe;
            O += "<br/><b>Code classe: </b> " + x.classeCode;
          }
          if (x.groupe !== "") {
            O += "<br/><b>Groupe: </b> " + x.groupe;
            O += "<br/><b>Code groupe: </b>" + x.groupeCode;
            if (x.isFlexible) {
              O += "<br/><i class=\"icon-ed_groupeflex\"></i> <i>Groupe flexible</i>";
            }
          }
        }
        if (x.prof) {
          O += "<br/><b>Enseignant: </b> " + x.prof;
        }
        O += "<br/><b>Début: </b> " + E(S) + "<br/><b>Fin: </b> " + E(L);
        if (Object.isExists(x.salle) && x.salle.trim() !== "") {
          O += "<br/><b>Salle: </b>" + this.htmlEntities(x.salle);
        }
      } else if (x instanceof t.B5X) {
        O += "<b>Cours: </b> " + I.text;
        O += "<br/> <b>Code matière: </b> " + I.matiereCode;
        if (I.prof) {
          O += "<br/><b>Enseignant: </b> " + I.prof;
        }
        O += "<br/><b>Début: </b> " + E(S) + "<br/><b>Fin: </b> " + E(L);
        if (I.groupe) {
          O += "<br/><b>Groupe: </b>" + I.groupe;
        }
        if (I.groupeCode) {
          O += "<br/><b>Code groupe: </b>" + I.groupeCode;
        }
        if (I.isFlexible) {
          O += "<br/><i class=\"icon-ed_groupeflex\"></i> <i>Groupe flexible</i>";
        }
      }
      return O;
    }
  }
  C.ɵfac = function (S) {
    return new (S || C)(i.LFG(t.CnD), i.LFG(k.H7));
  };
  C.ɵprov = i.Yz7({
    token: C,
    factory: C.ɵfac,
    providedIn: "any"
  });
  return C;
})();