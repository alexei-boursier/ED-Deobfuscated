import * as t from "45007";
import * as b from "39646";
import * as k from "54004";
import * as M from "94650";
export let c = class extends t.yh4 {
  constructor(w, S, L, I) {
    super(S);
    this.authStore = w;
    this.devTool = S;
    this.etablissementService = L;
    this.sallesService = I;
    this._displayNomPipe = new t.$t3();
  }
  get tabAgendaEdtToDisplay() {
    return this.snapshot.tabAgendaEdtToDisplay;
  }
  set tabAgendaEdtToDisplay(w) {
    this.store = {
      tabAgendaEdtToDisplay: w
    };
  }
  addAgendaFiltreToDisplay(w) {
    const S = [...this.tabAgendaEdtToDisplay];
    S.edInsertUpdate(w, L => L.idEntity === w.idEntity && L.typeEntity === w.typeEntity && L.typeEntity === w.typeEntity);
    this.tabAgendaEdtToDisplay = S;
  }
  listeAgendasToDisplay(w, S, L) {
    const I = [];
    return this.convertEntityToAgendaFiltre(S, L).pipe((0, k.U)(E => {
      const O = I.find(B => B.typeEntity === this.authStore.currentUser.typeCompte && B.idEntity === this.authStore.currentUser.id && B.typeAgenda === t.eTt.GENERAL);
      if (!Object.isExists(O)) {
        I.push(new t.b9O({
          typeEntity: this.authStore.currentUser.typeCompte,
          idEntity: this.authStore.currentUser.id,
          typeAgenda: t.eTt.GENERAL,
          libelle: "Agenda général",
          couleurAgenda: this.authStore.currentUser.couleurAgendaEtablissement,
          selected: this.authStore.isPersonnel() && S === t.dcH.PERSONNEL,
          edtCourant: false
        }));
      }
      if (Array.isArray(E)) {
        E.forEach(B => {
          const F = I.find(Z => Z.typeEntity === B.typeEntity && Z.idEntity === B.idEntity && Z.typeAgenda === B.typeAgenda);
          if (!Object.isExists(F)) {
            I.push(B);
          }
        });
      }
      if (t.Kg5.isModuleEnabled(this.authStore.currentUser, t.qzA.EDT) && (this.authStore.isProfesseur() || this.authStore.isEleve())) {
        const B = I.find(F => F.typeEntity === this.authStore.currentUser.typeCompte && F.idEntity === this.authStore.currentUser.id && F.typeAgenda === t.eTt.EDT);
        if (!Object.isExists(B)) {
          I.push(new t.b9O({
            typeEntity: this.authStore.currentUser.typeCompte,
            idEntity: this.authStore.currentUser.id,
            typeAgenda: t.eTt.EDT,
            libelle: "Mon emploi du temps",
            couleurAgenda: "",
            selected: false,
            edtCourant: false
          }));
        }
      }
      if (t.Kg5.isModuleEnabled(this.authStore.currentUser, t.qzA.RDVPP, this.authStore.isFamille() ? L : 0)) {
        const B = this.authStore.isProfOuPersonnel() || this.authStore.isEleve() ? this.authStore.currentUser.id : L;
        const F = I.find(Z => Z.typeEntity === t.eTt.RDVPP && Z.idEntity === B && Z.typeAgenda === t.eTt.RDVPP);
        if (!Object.isExists(F)) {
          I.push(new t.b9O({
            typeEntity: t.eTt.RDVPP,
            idEntity: this.authStore.isProfOuPersonnel() ? this.authStore.currentUser.id : L,
            typeAgenda: t.eTt.RDVPP,
            libelle: "Mes rendez-vous et visios",
            couleurAgenda: "",
            selected: false,
            edtCourant: false
          }));
        }
      }
      if (this.authStore.isFamille() && this.authStore.currentUser.id === L) {
        I.push(this.getRDVPPAgendaFiltre());
      }
      w.forEach(B => {
        const F = I.find(Z => Z.typeEntity === t.dcH.ESPACE_TRAVAIL && Z.idEntity === B.id && Z.typeAgenda === t.eTt.ESPACE_TRAVAIL);
        if (Object.isExists(F) || B.agenda !== true) {
          if (Object.isExists(F) && B.agenda === false) {
            const Z = I.findIndex(X => X.typeEntity === t.dcH.ESPACE_TRAVAIL && X.idEntity === B.id && X.typeAgenda === t.eTt.ESPACE_TRAVAIL);
            if (Z > -1) {
              I.splice(Z, 1);
            }
          }
        } else {
          I.push(new t.b9O({
            typeEntity: t.dcH.ESPACE_TRAVAIL,
            idEntity: B.id,
            typeAgenda: t.eTt.ESPACE_TRAVAIL,
            libelle: B.titre,
            couleurAgenda: B.couleurEvenementAgenda,
            selected: false,
            edtCourant: false
          }));
        }
      });
      return I;
    }));
  }
  getRDVPPAgendaFiltre() {
    const w = this.tabAgendaEdtToDisplay.find(S => S.typeAgenda === t.eTt.RDVPP && S.typeEntity === t.eTt.RDVPP && S.idEntity === this.authStore.currentUser.id);
    if (Object.isExists(w)) {
      return new t.b9O(w);
    } else {
      return new t.b9O({
        typeEntity: t.eTt.RDVPP,
        idEntity: this.authStore.currentUser.id,
        typeAgenda: t.eTt.RDVPP,
        libelle: "Mes rendez-vous et visios",
        couleurAgenda: "",
        selected: false,
        edtCourant: false
      });
    }
  }
  convertEntityToAgendaFiltre(w, S) {
    const L = t.Kg5.isModuleEnabled(this.authStore.currentUser, t.qzA.EDT);
    let I = (0, b.of)(undefined);
    if (this.authStore.isHimself(w, S)) {
      if (L && (w === t.meW.ENSEIGNANT || w === t.meW.ELEVE)) {
        I = (0, b.of)(new t.o$F({
          id: this.authStore.currentUser.id,
          civilite: this.authStore.currentUser.civilite,
          nom: this.authStore.currentUser.nom,
          prenom: this.authStore.currentUser.prenom,
          profil: this.authStore.currentUser.typeCompte
        }));
      }
    } else if (w === t.meW.CLASSE || w === t.meW.GROUPE) {
      I = this.etablissementService.getClasseGroupeById(S, w);
    } else if (w === t.meW.SALLE) {
      I = this.sallesService.getSalleById(S);
    } else if (w === t.meW.ENSEIGNANT) {
      I = this.etablissementService.getUtilisateurEDById(S, w);
    } else if (w === t.meW.ELEVE) {
      I = this.authStore.getEleve(S);
    }
    return I.pipe((0, k.U)(E => {
      if (!Object.isExists(E)) {
        return;
      }
      const O = [];
      let x = "Emploi du temps ";
      if (w === t.meW.CLASSE || w === t.meW.GROUPE) {
        x += E.libelle;
      } else if (w === t.meW.SALLE) {
        x += `Salle ${E.libelle}`;
      } else if (w === t.meW.ENSEIGNANT) {
        x += this._displayNomPipe.transform(E, false);
      } else if (w === t.meW.ELEVE) {
        x += this.authStore.isFamille() ? E.prenom : this._displayNomPipe.transform(E, false);
      }
      if ((this.authStore.isProfesseur() || this.authStore.isEleve()) && this.authStore.isHimself(w, S)) {
        x = "Mon emploi du temps";
      }
      O.push(new t.b9O({
        typeEntity: w,
        idEntity: S,
        typeAgenda: t.eTt.EDT,
        libelle: x,
        couleurAgenda: "",
        edtCourant: true,
        selected: false
      }));
      if (w === t.meW.ELEVE && !this.authStore.isHimself(w, S)) {
        O.push(new t.b9O({
          typeEntity: t.eTt.RDVPP,
          idEntity: S,
          typeAgenda: t.eTt.RDVPP,
          libelle: "Rendez-vous " + (this.authStore.isFamille() ? E.prenom : this._displayNomPipe.transform(E, false)),
          couleurAgenda: "",
          selected: false,
          edtCourant: false
        }));
      }
      return O;
    }));
  }
  selectAgenda(w) {
    const S = this.tabAgendaEdtToDisplay.map(I => new t.b9O(I));
    const L = S.findIndex(I => I.idEntity === w.idEntity && I.typeEntity === w.typeEntity && I.typeAgenda === w.typeAgenda);
    S[L].selected = !w.selected;
    this.tabAgendaEdtToDisplay = S;
  }
  getIndexEdtCourant() {
    return this.tabAgendaEdtToDisplay.findIndex(w => w.edtCourant);
  }
  selectTabAgendaEdtToDisplay() {
    return this.select$(w => w.tabAgendaEdtToDisplay);
  }
  selectTabAgendaEdtToLoad() {
    return this.select$(w => w.tabAgendaEdtToDisplay.filter(S => S.selected));
  }
  getTabAgendaEdtToDisplay() {
    return this.snapshot.tabAgendaEdtToDisplay;
  }
  getTabAgendaEdtToLoad() {
    return this.snapshot.tabAgendaEdtToDisplay.filter(w => w.selected);
  }
  cleanDatas() {
    const w = this.tabAgendaEdtToDisplay.map(L => new t.b9O(L));
    const S = this.getIndexEdtCourant();
    if (S > -1) {
      const L = w[S];
      if (L.typeEntity !== this.authStore.currentUser.typeCompte || L.idEntity !== this.authStore.currentUser.id) {
        w.splice(S, 1);
      }
    }
    w.forEach(L => {
      L.selected = L.typeEntity === this.authStore.currentUser.typeCompte && L.idEntity === this.authStore.currentUser.id && L.typeAgenda === t.eTt.EDT;
    });
    this.tabAgendaEdtToDisplay = w;
  }
};
c.ɵfac = function (w) {
  return new (w || c)(M.LFG(t.CnD), M.LFG(t.lbX), M.LFG(t.Xmb), M.LFG(t.FrG));
};
c.ɵprov = M.Yz7({
  token: c,
  factory: c.ɵfac,
  providedIn: "root"
});
c = (0, i.gn)([(0, t.pcA)({
  classInstanceRef: t.hxO,
  resetWhenSwipe: true,
  className: "FiltresAgendaEdtUserStore"
})], c);