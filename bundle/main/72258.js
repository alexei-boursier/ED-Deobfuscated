import * as i from "45007";
export let p = (() => {
  class k {
    constructor() {
      this.CIBLES_POSTIT = i.g2X;
      this.isCibleFamilleOrEleve = false;
    }
    checkCiblesSelected(v) {
      let C;
      return !!Object.isExists(v) && (C = v instanceof i.ZUG ? v.cible : v.cibles, typeof C.find(S => S === this.CIBLES_POSTIT.FAMILLE.code || S === this.CIBLES_POSTIT.ELEVE.code) !== "undefined");
    }
    updateCiblesEtab(v, C) {
      const w = C.ciblesEtab.indexOf(v);
      let S = C.ciblesEtab;
      if (w > -1) {
        S.splice(w, 1);
      } else {
        S.push(v);
      }
      return S;
    }
    updateCible(v, C) {
      if (!Object.isExists(C)) {
        return;
      }
      let w;
      let S;
      if (C instanceof i.ZUG) {
        S = new i.ZUG(C);
        w = S.cible;
      } else {
        S = new i.gBp(C);
        w = S.cibles;
        this.isCibleFamilleOrEleve = this.checkCiblesSelected(S);
      }
      const L = w.findIndex(I => I === v);
      if (L > -1) {
        w.splice(L, 1);
      } else {
        w.push(v);
      }
      return S;
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵprov = t.Yz7({
    token: k,
    factory: k.ɵfac,
    providedIn: "any"
  });
  return k;
})();