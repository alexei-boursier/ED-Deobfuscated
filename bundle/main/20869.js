import * as i from "45007";
import * as t from "11302";
import * as C from "94650";
import * as I from "36895";
import * as E from "24006";
function U(j, G) {
  if (j & 1) {
    C._UZ(0, "img", 13);
  }
  if (j & 2) {
    const se = C.oxw();
    C.FAE("src", "", se.url, "?cToken=", se.authStore.cToken(), "&verbe=get&fichierId=", se.authStore.currentUser.logoEtablissement, "&leTypeDeFichier=", se.CONST_TYPE_FICHIER.FICHIER_IMPORT, "", C.LSH);
  }
}
function B(j, G) {
  if (j & 1) {
    C._UZ(0, "img", 14);
  }
}
function F(j, G) {
  if (j & 1) {
    const se = C.EpF();
    C.TgZ(0, "button", 19);
    C.NdJ("click", function () {
      C.CHM(se);
      const Pe = C.oxw(2).$implicit;
      const Le = C.oxw();
      return C.KtG(Le.swipeUser(Pe.idLogin));
    });
    C.ALo(1, "translateTypeUser");
    C._UZ(2, "img", 20);
    C.qZA();
  }
  if (j & 2) {
    const se = C.oxw(2).$implicit;
    const W = C.oxw();
    C.uIk("aria-label", "Accéder au profil " + C.Dn7(1, 5, se.typeCompte, true, true) + " " + se.nom);
    C.xp6(2);
    C.FAE("src", "", W.url, "?cToken=", W.authStore.cToken(), "&verbe=get&fichierId=", se.logoEtablissement, "&leTypeDeFichier=", W.CONST_TYPE_FICHIER.FICHIER_IMPORT, "", C.LSH);
  }
}
function Z(j, G) {
  if (j & 1) {
    const se = C.EpF();
    C.TgZ(0, "button", 19);
    C.NdJ("click", function () {
      C.CHM(se);
      const Pe = C.oxw(2).$implicit;
      const Le = C.oxw();
      return C.KtG(Le.swipeUser(Pe.idLogin));
    });
    C.ALo(1, "translateTypeUser");
    C._UZ(2, "img", 21);
    C.qZA();
  }
  if (j & 2) {
    const se = C.oxw(2).$implicit;
    C.uIk("aria-label", "Accéder au profil " + C.Dn7(1, 1, se.typeCompte, true, true) + " " + se.nom);
  }
}
function X(j, G) {
  if (j & 1) {
    const se = C.EpF();
    C.TgZ(0, "div");
    C.YNc(1, F, 3, 9, "button", 16);
    C.YNc(2, Z, 3, 5, "button", 16);
    C.TgZ(3, "button", 17);
    C.NdJ("click", function () {
      C.CHM(se);
      const Pe = C.oxw().$implicit;
      const Le = C.oxw();
      return C.KtG(Le.swipeUser(Pe.idLogin));
    });
    C.TgZ(4, "i", 18);
    C._uU(5);
    C.ALo(6, "translateTypeUser");
    C.qZA();
    C._UZ(7, "br");
    C.TgZ(8, "strong");
    C._uU(9);
    C.qZA()()();
  }
  if (j & 2) {
    const se = C.oxw().$implicit;
    C.xp6(1);
    C.Q6J("ngIf", se.logoEtablissement);
    C.xp6(1);
    C.Q6J("ngIf", !se.logoEtablissement);
    C.xp6(3);
    C.AsE("", C.Dn7(6, 5, se.typeCompte, true, true), " ", se.nom, "");
    C.xp6(4);
    C.Oqu(se.nomEtablissement);
  }
}
const le = function (j) {
  return {
    active: j
  };
};
function fe(j, G) {
  if (j & 1) {
    C.TgZ(0, "div", 5);
    C.YNc(1, X, 10, 9, "div", 15);
    C.qZA();
  }
  if (j & 2) {
    const se = G.$implicit;
    C.Q6J("ngClass", C.VKq(2, le, se.current));
    C.xp6(1);
    C.Q6J("ngIf", !se.current);
  }
}
export let _ = (() => {
  class j {
    constructor(se, W, Pe, Le, he, pe) {
      this.authStore = se;
      this.modalRef = W;
      this.authService = Pe;
      this.accountService = Le;
      this.uiService = he;
      this.loaderService = pe;
      this.coreSettings = t.sX;
      this.getEDApiUri = t.Je;
      this.CONST_TYPE_FICHIER = i.Vav;
    }
    swipeUser(se) {
      this.loader = this.loaderService.show(this);
      this.authService.swipeUser(se).pipe((0, k.K)(() => {
        this.uiService.notifyEvent(i.DOJ.genericError, i.K3B.swipeUserError, "Changement de compte");
        return b.E;
      }), (0, M.b)(() => {
        this.accountService.swipeReset();
      }), (0, v.x)(() => {
        this.modalRef.hide();
        this.loaderService.hide(this);
      })).subscribe();
    }
    ngOnInit() {
      this.url = `${(0, t.Je)()}/telechargement.awp`;
    }
  }
  j.ɵfac = function (se) {
    return new (se || j)(C.Y36(i.CnD), C.Y36(w.UZ), C.Y36(i.e80), C.Y36(S.B), C.Y36(i.VLf), C.Y36(L.S));
  };
  j.ɵcmp = C.Xpm({
    type: j,
    selectors: [["ed-account-selector-modal"]],
    decls: 24,
    vars: 17,
    consts: [[1, "accountswitcher", 3, "ngBusy"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "row", "text-center", "modal-body"], [1, "col-lg-3", "col-md-4", "col-sm-6", 3, "ngClass"], ["class", "img-fluid", "alt", "logo établissement", "aria-label", "logo établissement de votre profil en cours", 3, "src", 4, "ngIf"], ["class", "img-fluid", "aria-label", "logo établissement de votre profil en cours", "alt", "logo établissement", "src", "/assets/images/school_placeholder.png", 4, "ngIf"], ["class", "col-lg-3 col-md-4 col-sm-6", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row", "modal-footer"], [1, "col-lg-12", "w-100"], ["id", "", "name", "", 1, "btn", "btn-danger", "float-start", 3, "click"], [1, "clearfix"], ["alt", "logo établissement", "aria-label", "logo établissement de votre profil en cours", 1, "img-fluid", 3, "src"], ["aria-label", "logo établissement de votre profil en cours", "alt", "logo établissement", "src", "/assets/images/school_placeholder.png", 1, "img-fluid"], [4, "ngIf"], ["type", "button", "class", "btn text-normal no-background p-1", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "text-normal", "no-padding", "no-background", 3, "click"], [1, "i-small"], ["type", "button", 1, "btn", "text-normal", "no-background", "p-1", 3, "click"], ["aria-label", "logo établissement du profil", "alt", "logo établissement", 1, "img-fluid", 3, "src"], ["aria-label", "logo établissement du profil", "alt", "logo établissement", "src", "/assets/images/school_placeholder.png", 1, "img-fluid"]],
    template: function (se, W) {
      if (se & 1) {
        C.TgZ(0, "form", 0)(1, "fieldset")(2, "div", 1)(3, "h3", 2);
        C._uU(4, "Choisissez le compte");
        C.qZA();
        C.TgZ(5, "button", 3);
        C.NdJ("click", function () {
          return W.modalRef.hide();
        });
        C.qZA()();
        C.TgZ(6, "div", 4)(7, "div", 5)(8, "div");
        C.YNc(9, U, 1, 4, "img", 6);
        C.YNc(10, B, 1, 0, "img", 7);
        C.TgZ(11, "i");
        C._uU(12);
        C.ALo(13, "translateTypeUser");
        C.qZA();
        C._UZ(14, "br");
        C.TgZ(15, "strong");
        C._uU(16);
        C.qZA()()();
        C.YNc(17, fe, 2, 4, "div", 8);
        C.ALo(18, "trackByProperty");
        C.qZA();
        C.TgZ(19, "div", 9)(20, "div", 10)(21, "button", 11);
        C.NdJ("click", function () {
          return W.modalRef.hide();
        });
        C._uU(22, "Annuler");
        C.qZA()();
        C._UZ(23, "div", 12);
        C.qZA()()();
      }
      if (se & 2) {
        C.Q6J("ngBusy", W.loader);
        C.xp6(7);
        C.Q6J("ngClass", C.VKq(15, le, W.authStore.currentUser));
        C.xp6(2);
        C.Q6J("ngIf", W.authStore.currentUser.logoEtablissement);
        C.xp6(1);
        C.Q6J("ngIf", !W.authStore.currentUser.logoEtablissement);
        C.xp6(2);
        C.AsE("", C.Dn7(13, 9, W.authStore.currentUser.typeCompte, true, true), " ", W.authStore.currentUser.nom, "");
        C.xp6(4);
        C.Oqu(W.authStore.currentUser.nomEtablissement);
        C.xp6(1);
        C.Q6J("ngForOf", W.authStore.linkingUsers)("ngForTrackBy", C.lcZ(18, 13, "idLogin"));
      }
    },
    dependencies: [I.mk, I.sg, I.O5, E._Y, E.JL, E.F, O.DC, i.EGL, x.$],
    styles: [".accountswitcher[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{opacity:.3}.accountswitcher[_ngcontent-%COMP%] > fieldset[_ngcontent-%COMP%] > div.modal-body[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.active){cursor:pointer}.accountswitcher[_ngcontent-%COMP%] > fieldset[_ngcontent-%COMP%] > div.modal-body[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%]{cursor:not-allowed}"],
    changeDetection: 0
  });
  return j;
})();