import * as i from "45007";
import * as v from "94650";
import * as L from "36895";
import * as I from "24006";
function O(fe, q) {
  if (fe & 1) {
    v._UZ(0, "img", 12);
  }
}
function x(fe, q) {
  if (fe & 1) {
    const j = v.EpF();
    v.TgZ(0, "button", 13);
    v.NdJ("click", function () {
      v.CHM(j);
      const se = v.oxw();
      return v.KtG(se.swipeProfil("P"));
    });
    v._UZ(1, "img", 14);
    v.qZA();
  }
}
function U(fe, q) {
  if (fe & 1) {
    v.TgZ(0, "span");
    v._uU(1, "En cours");
    v.qZA();
  }
}
function B(fe, q) {
  if (fe & 1) {
    v._UZ(0, "img", 15);
  }
}
function F(fe, q) {
  if (fe & 1) {
    const j = v.EpF();
    v.TgZ(0, "button", 16);
    v.NdJ("click", function () {
      v.CHM(j);
      const se = v.oxw();
      return v.KtG(se.swipeProfil("A"));
    });
    v._UZ(1, "img", 17);
    v.qZA();
  }
}
function Z(fe, q) {
  if (fe & 1) {
    v.TgZ(0, "span");
    v._uU(1, "En cours");
    v.qZA();
  }
}
const X = function (fe) {
  return {
    active: fe
  };
};
export let c = (() => {
  class fe {
    constructor(j, G, se, W, Pe, Le) {
      this.authStore = j;
      this.modalRef = G;
      this.authService = se;
      this.uiService = W;
      this.accountService = Pe;
      this.loaderService = Le;
    }
    swipeProfil(j) {
      this.loader = this.loaderService.show(this);
      this.authService.swipeProfil(j).pipe((0, t.K)(() => {
        this.uiService.notifyEvent(i.DOJ.genericError, i.K3B.swipeProfilError, "Changement de profil");
        return M.E;
      }), (0, b.b)(() => {
        this.accountService.swipeReset();
      }), (0, k.x)(() => {
        this.modalRef.hide();
        this.loaderService.hide(this);
      })).subscribe();
    }
  }
  fe.ɵfac = function (j) {
    return new (j || fe)(v.Y36(i.CnD), v.Y36(C.UZ), v.Y36(i.e80), v.Y36(i.VLf), v.Y36(w.B), v.Y36(S.S));
  };
  fe.ɵcmp = v.Xpm({
    type: fe,
    selectors: [["ed-profil-selector-modal"]],
    decls: 23,
    vars: 13,
    consts: [[1, "profilswitcher", 3, "ngBusy"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "row", "text-center", "modal-body"], [1, "col-lg-6", 3, "ngClass"], [1, "mb-3"], ["class", "thumbnail", "alt", "photo enseignant de votre profil en cours", "src", "/assets/images/teacher.png", "style", "display: initial", 4, "ngIf"], ["type", "button", "class", "btn text-normal no-background no-padding", "aria-label", "Accéder à votre profil enseignant", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "thumbnail", "alt", "photo personnel de votre profil en cours", "src", "/assets/images/personnel.png", "style", "display: initial", 4, "ngIf"], ["type", "button", "class", "btn text-normal no-background no-padding", "aria-label", "Accéder à votre profil personnel", 3, "click", 4, "ngIf"], ["alt", "photo enseignant de votre profil en cours", "src", "/assets/images/teacher.png", 1, "thumbnail", 2, "display", "initial"], ["type", "button", "aria-label", "Accéder à votre profil enseignant", 1, "btn", "text-normal", "no-background", "no-padding", 3, "click"], ["alt", "photo enseignant", "src", "/assets/images/teacher.png", 1, "thumbnail", 2, "display", "initial"], ["alt", "photo personnel de votre profil en cours", "src", "/assets/images/personnel.png", 1, "thumbnail", 2, "display", "initial"], ["type", "button", "aria-label", "Accéder à votre profil personnel", 1, "btn", "text-normal", "no-background", "no-padding", 3, "click"], ["alt", "photo personnel", "src", "/assets/images/personnel.png", 1, "thumbnail", 2, "display", "initial"]],
    template: function (j, G) {
      if (j & 1) {
        v.TgZ(0, "form", 0)(1, "fieldset")(2, "div", 1)(3, "h3", 2);
        v._uU(4, "Choisissez le profil");
        v.qZA();
        v.TgZ(5, "button", 3);
        v.NdJ("click", function () {
          return G.modalRef.hide();
        });
        v.qZA()();
        v.TgZ(6, "div", 4)(7, "div", 5)(8, "div", 6);
        v.YNc(9, O, 1, 0, "img", 7);
        v.YNc(10, x, 2, 0, "button", 8);
        v.qZA();
        v.TgZ(11, "strong");
        v._uU(12, "Enseignant");
        v.qZA();
        v._UZ(13, "br");
        v.YNc(14, U, 2, 0, "span", 9);
        v.qZA();
        v.TgZ(15, "div", 5)(16, "div", 6);
        v.YNc(17, B, 1, 0, "img", 10);
        v.YNc(18, F, 2, 0, "button", 11);
        v.qZA();
        v.TgZ(19, "strong");
        v._uU(20, "Personnel");
        v.qZA();
        v._UZ(21, "br");
        v.YNc(22, Z, 2, 0, "span", 9);
        v.qZA()()()();
      }
      if (j & 2) {
        v.Q6J("ngBusy", G.loader);
        v.xp6(7);
        v.Q6J("ngClass", v.VKq(9, X, G.authStore.isProfesseur()));
        v.xp6(2);
        v.Q6J("ngIf", G.authStore.isProfesseur());
        v.xp6(1);
        v.Q6J("ngIf", !G.authStore.isProfesseur());
        v.xp6(4);
        v.Q6J("ngIf", G.authStore.isProfesseur());
        v.xp6(1);
        v.Q6J("ngClass", v.VKq(11, X, G.authStore.isPersonnel()));
        v.xp6(2);
        v.Q6J("ngIf", G.authStore.isPersonnel());
        v.xp6(1);
        v.Q6J("ngIf", !G.authStore.isPersonnel());
        v.xp6(4);
        v.Q6J("ngIf", G.authStore.isPersonnel());
      }
    },
    dependencies: [L.mk, L.O5, I._Y, I.JL, I.F, E.DC],
    styles: [".profilswitcher[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{opacity:.3}.profilswitcher[_ngcontent-%COMP%] > fieldset[_ngcontent-%COMP%] > div.modal-body[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.active){cursor:pointer}.profilswitcher[_ngcontent-%COMP%] > fieldset[_ngcontent-%COMP%] > div.modal-body[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%]{cursor:not-allowed}"],
    changeDetection: 0
  });
  return fe;
})();