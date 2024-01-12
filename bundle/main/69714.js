import * as i from "94650";
export let l = (() => {
  class v {
    constructor(w, S) {
      this.modalRef = w;
      this.filtresAgendaEdtUserStore = S;
      this.typeEntityEleve = "E";
    }
    close() {
      this.modalRef.hide();
    }
    ngOnDestroy() {
      this.filtresAgendaEdtUserStore.cleanDatas();
    }
  }
  v.ɵfac = function (w) {
    return new (w || v)(i.Y36(t.UZ), i.Y36(b.c));
  };
  v.ɵcmp = i.Xpm({
    type: v,
    selectors: [["ed-modal-details-stage-eleve-v3-emploi-du-temps"]],
    inputs: {
      eleve: "eleve"
    },
    decls: 9,
    vars: 4,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "clearfix"], [1, "modal-body", "center"], [3, "typeEntity", "idEntity", "resetPeriode"]],
    template: function (w, S) {
      if (w & 1) {
        i.TgZ(0, "div", 0)(1, "h3", 1)(2, "b");
        i._uU(3, "Emploi du temps");
        i.qZA();
        i._uU(4);
        i.qZA();
        i.TgZ(5, "button", 2);
        i.NdJ("click", function () {
          return S.close();
        });
        i.qZA();
        i._UZ(6, "div", 3);
        i.qZA();
        i.TgZ(7, "div", 4);
        i._UZ(8, "ed-emploi-du-temps-scheduler", 5);
        i.qZA();
      }
      if (w & 2) {
        i.xp6(4);
        i.hij("", " - " + S.eleve.nom + " " + S.eleve.prenom + ", " + S.eleve.classeLibelle, " ");
        i.xp6(4);
        i.Q6J("typeEntity", S.typeEntityEleve)("idEntity", S.eleve.id)("resetPeriode", true);
      }
    },
    dependencies: [k.R]
  });
  return v;
})();