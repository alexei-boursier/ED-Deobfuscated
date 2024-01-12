import * as M from "45007";
import * as v from "94650";
export let T = (() => {
  class w {
    constructor(L, I, E, O) {
      this.authStore = L;
      this.etablissementStore = I;
      this.etablissementService = E;
      this.uiService = O;
    }
    resolve(L, I) {
      if (this.authStore.isProfOuPersonnel()) {
        return this.etablissementStore.ready().pipe((0, b.b)(E => {
          this.etablissementService.getNiveauxListe().pipe((0, k.K)(O => {
            const x = M.FSr.isNotEmptyString(O.message) ? O.message : "Le chargement de vos classes et de vos groupes a échoué.";
            this.uiService.notifyEvent(M.DOJ.genericError, x, "Erreur");
            return i.E;
          })).subscribe();
        }));
      } else {
        return (0, t.of)(true);
      }
    }
  }
  w.ɵfac = function (L) {
    return new (L || w)(v.LFG(M.CnD), v.LFG(M.VD2), v.LFG(M.Xmb), v.LFG(M.VLf));
  };
  w.ɵprov = v.Yz7({
    token: w,
    factory: w.ɵfac,
    providedIn: "root"
  });
  return w;
})();