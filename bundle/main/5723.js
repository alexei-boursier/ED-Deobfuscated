import * as M from "45007";
import * as v from "94650";
import * as _S from "36895";
function O(ft, qe) {
  if (ft & 1) {
    v._UZ(0, "img", 14);
  }
}
function x(ft, qe) {
  if (ft & 1) {
    v._UZ(0, "img", 15);
  }
}
function U(ft, qe) {
  if (ft & 1) {
    v._UZ(0, "img", 16);
  }
}
function B(ft, qe) {
  if (ft & 1) {
    v._UZ(0, "img", 17);
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.s9C("src", Me.user.photo, v.LSH);
  }
}
function F(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "li", 26);
    v._uU(1);
    v.ALo(2, "displayNom");
    v.TgZ(3, "span", 27);
    v._uU(4);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = qe.$implicit;
    v.xp6(1);
    v.hij(" ", v.lcZ(2, 2, Me), " - ");
    v.xp6(3);
    v.Oqu(Me.classe.libelle);
  }
}
function Z(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 22)(1, "div", 23)(2, "h3");
    v._uU(3, "Enfants");
    v.qZA()();
    v.TgZ(4, "div", 24)(5, "ul");
    v.YNc(6, F, 5, 4, "li", 25);
    v.ALo(7, "trackByProperty");
    v.qZA()()();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(6);
    v.Q6J("ngForOf", Me.user.enfants)("ngForTrackBy", v.lcZ(7, 2, "id"));
  }
}
function X(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 18)(1, "div", 19);
    v._uU(2);
    v.ALo(3, "displayNom");
    v.qZA();
    v.TgZ(4, "div", 20);
    v._uU(5, "Responsable");
    v.qZA();
    v.YNc(6, Z, 8, 4, "div", 21);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.xp6(2);
    v.Oqu(v.lcZ(3, 2, Me.user));
    v.xp6(4);
    v.Q6J("ngIf", (Me.user.enfants == null ? null : Me.user.enfants.length) > 0);
  }
}
function le(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 20);
    v._uU(1, "Administratif");
    v.qZA();
  }
}
function fe(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 20);
    v._uU(1);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(1);
    v.Oqu(Me.user.fonction.libelle);
  }
}
function q(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 18)(1, "div", 19);
    v._uU(2);
    v.ALo(3, "displayNom");
    v.qZA();
    v.YNc(4, le, 2, 0, "div", 28);
    v.YNc(5, fe, 2, 1, "div", 28);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.xp6(2);
    v.Oqu(v.gM2(3, 3, Me.user, false, true, Me.authStore.isFouE()));
    v.xp6(2);
    v.Q6J("ngIf", Me.user.fonction.libelle === "");
    v.xp6(1);
    v.Q6J("ngIf", Me.user.fonction.libelle !== "");
  }
}
function j(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "b");
    v._uU(1);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw().$implicit;
    v.xp6(1);
    v.Oqu(Me.libelle + "*");
  }
}
function G(ft, qe) {
  if (ft & 1) {
    v._uU(0);
  }
  if (ft & 2) {
    const Me = v.oxw().$implicit;
    v.hij(" ", Me.libelle, " ");
  }
}
function se(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "tr")(1, "td");
    v.YNc(2, j, 2, 1, "b", 36);
    v.YNc(3, G, 1, 1, "ng-template", null, 37, v.W1O);
    v.qZA();
    v.TgZ(5, "td");
    v._uU(6);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = qe.$implicit;
    const ne = v.MAs(4);
    v.xp6(2);
    v.Q6J("ngIf", Me.isPP)("ngIfElse", ne);
    v.xp6(4);
    v.hij(" ", Me.matiere, " ");
  }
}
function W(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 30)(1, "div", 24)(2, "table", 31)(3, "thead")(4, "tr")(5, "th");
    v._uU(6, "Classe");
    v.qZA();
    v.TgZ(7, "th");
    v._uU(8, "Matière");
    v.qZA()()();
    v.TgZ(9, "tbody");
    v.YNc(10, se, 7, 3, "tr", 32);
    v.ALo(11, "trackByProperty");
    v.qZA()();
    v.TgZ(12, "div", 33)(13, "div", 34)(14, "div", 35)(15, "span")(16, "strong");
    v._uU(17, "*");
    v.qZA()();
    v.TgZ(18, "span")(19, "strong");
    v._uU(20, "Prof Principal");
    v.qZA()()()()()()();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(10);
    v.Q6J("ngForOf", Me.user.classes)("ngForTrackBy", v.lcZ(11, 2, "$index"));
  }
}
function Pe(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "li", 26)(1, "strong");
    v._uU(2, "Téléphone");
    v.qZA();
    v._uU(3, " - ");
    v.TgZ(4, "span", 27);
    v._uU(5);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw(4);
    v.xp6(5);
    v.Oqu(Me.user.telephone);
  }
}
function Le(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "li", 26)(1, "strong");
    v._uU(2, "Email");
    v.qZA();
    v._uU(3, " - ");
    v.TgZ(4, "span", 27);
    v._uU(5);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw(4);
    v.xp6(5);
    v.Oqu(Me.user.email);
  }
}
function he(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 22)(1, "div", 24)(2, "ul");
    v.YNc(3, Pe, 6, 1, "li", 38);
    v.YNc(4, Le, 6, 1, "li", 38);
    v.qZA()()();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(3);
    v.Q6J("ngIf", Me.user.telephone);
    v.xp6(1);
    v.Q6J("ngIf", Me.user.email);
  }
}
function pe(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 18)(1, "div", 19);
    v._uU(2);
    v.ALo(3, "displayNom");
    v.qZA();
    v._UZ(4, "br");
    v.YNc(5, W, 21, 4, "div", 29);
    v.YNc(6, he, 5, 2, "div", 21);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.xp6(2);
    v.Oqu(v.gM2(3, 3, Me.user, false, true, Me.authStore.isFouE()));
    v.xp6(3);
    v.Q6J("ngIf", (Me.user.classes == null ? null : Me.user.classes.length) > 0);
    v.xp6(1);
    v.Q6J("ngIf", Me.user.telephone || Me.user.email);
  }
}
function re(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "b");
    v._uU(1);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw().$implicit;
    v.xp6(1);
    v.Oqu(Me.libelle + "*");
  }
}
function Re(ft, qe) {
  if (ft & 1) {
    v._uU(0);
  }
  if (ft & 2) {
    const Me = v.oxw().$implicit;
    v.hij(" ", Me.libelle, " ");
  }
}
function Ge(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "tr")(1, "td");
    v.YNc(2, re, 2, 1, "b", 36);
    v.YNc(3, Re, 1, 1, "ng-template", null, 37, v.W1O);
    v.qZA();
    v.TgZ(5, "td");
    v._uU(6);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = qe.$implicit;
    const ne = v.MAs(4);
    v.xp6(2);
    v.Q6J("ngIf", Me.isPP)("ngIfElse", ne);
    v.xp6(4);
    v.hij(" ", Me.matiere, " ");
  }
}
function Ue(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 41)(1, "div", 24)(2, "table", 31)(3, "thead")(4, "tr")(5, "th");
    v._uU(6, "Classe");
    v.qZA();
    v.TgZ(7, "th");
    v._uU(8, "Matière");
    v.qZA()()();
    v.TgZ(9, "tbody");
    v.YNc(10, Ge, 7, 3, "tr", 32);
    v.ALo(11, "trackByProperty");
    v.qZA()();
    v.TgZ(12, "div", 33)(13, "div", 34)(14, "div", 35)(15, "span")(16, "strong");
    v._uU(17, "*");
    v.qZA()();
    v.TgZ(18, "span")(19, "strong");
    v._uU(20, "Prof Principal");
    v.qZA()()()()()()();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(10);
    v.Q6J("ngForOf", Me.classesToDisplaySpecialEleve)("ngForTrackBy", v.lcZ(11, 2, "$index"));
  }
}
function ot(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "li", 26)(1, "strong");
    v._uU(2, "Téléphone");
    v.qZA();
    v._uU(3, " - ");
    v.TgZ(4, "span", 27);
    v._uU(5);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw(4);
    v.xp6(5);
    v.Oqu(Me.user.telephone);
  }
}
function st(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "li", 26)(1, "strong");
    v._uU(2, "Email");
    v.qZA();
    v._uU(3, " - ");
    v.TgZ(4, "span", 27);
    v._uU(5);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw(4);
    v.xp6(5);
    v.Oqu(Me.user.email);
  }
}
function rt(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 42)(1, "div", 24)(2, "ul");
    v.YNc(3, ot, 6, 1, "li", 38);
    v.YNc(4, st, 6, 1, "li", 38);
    v.qZA()()();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(3);
    v.Q6J("ngIf", Me.user.telephone);
    v.xp6(1);
    v.Q6J("ngIf", Me.user.email);
  }
}
function Oe(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 18)(1, "div", 19);
    v._uU(2);
    v.ALo(3, "displayNom");
    v.qZA();
    v._UZ(4, "br");
    v.YNc(5, Ue, 21, 4, "div", 39);
    v.YNc(6, rt, 5, 2, "div", 40);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.xp6(2);
    v.Oqu(v.gM2(3, 3, Me.user, false, true, Me.authStore.isFouE()));
    v.xp6(3);
    v.Q6J("ngIf", (Me.classesToDisplaySpecialEleve == null ? null : Me.classesToDisplaySpecialEleve.length) > 0);
    v.xp6(1);
    v.Q6J("ngIf", Me.user.telephone || Me.user.email);
  }
}
function Ee(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "b");
    v._uU(1);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw().$implicit;
    v.xp6(1);
    v.Oqu(Me.libelle + "*");
  }
}
function ke(ft, qe) {
  if (ft & 1) {
    v._uU(0);
  }
  if (ft & 2) {
    const Me = v.oxw().$implicit;
    v.hij(" ", Me.libelle, " ");
  }
}
function Be(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "tr")(1, "td");
    v.YNc(2, Ee, 2, 1, "b", 36);
    v.YNc(3, ke, 1, 1, "ng-template", null, 37, v.W1O);
    v.qZA();
    v.TgZ(5, "td");
    v._uU(6);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = qe.$implicit;
    const ne = v.MAs(4);
    v.xp6(2);
    v.Q6J("ngIf", Me.isPP)("ngIfElse", ne);
    v.xp6(4);
    v.hij(" ", Me.matiere, " ");
  }
}
function De(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 41)(1, "div", 24)(2, "table", 31)(3, "thead")(4, "tr")(5, "th");
    v._uU(6, "Classe");
    v.qZA();
    v.TgZ(7, "th");
    v._uU(8, "Matière");
    v.qZA()()();
    v.TgZ(9, "tbody");
    v.YNc(10, Be, 7, 3, "tr", 32);
    v.ALo(11, "trackByProperty");
    v.qZA()();
    v.TgZ(12, "div", 33)(13, "div", 34)(14, "div", 35)(15, "span")(16, "strong");
    v._uU(17, "*");
    v.qZA()();
    v.TgZ(18, "span")(19, "strong");
    v._uU(20, "Prof Principal");
    v.qZA()()()()()()();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(10);
    v.Q6J("ngForOf", Me.classesToDisplaySpecialFamille)("ngForTrackBy", v.lcZ(11, 2, "$index"));
  }
}
function Qe(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "li", 26)(1, "strong");
    v._uU(2, "Téléphone");
    v.qZA();
    v._uU(3, " - ");
    v.TgZ(4, "span", 27);
    v._uU(5);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw(4);
    v.xp6(5);
    v.Oqu(Me.user.telephone);
  }
}
function It(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "li", 26)(1, "strong");
    v._uU(2, "Email");
    v.qZA();
    v._uU(3, " - ");
    v.TgZ(4, "span", 27);
    v._uU(5);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw(4);
    v.xp6(5);
    v.Oqu(Me.user.email);
  }
}
function Yt(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 42)(1, "div", 24)(2, "ul");
    v.YNc(3, Qe, 6, 1, "li", 38);
    v.YNc(4, It, 6, 1, "li", 38);
    v.qZA()()();
  }
  if (ft & 2) {
    const Me = v.oxw(3);
    v.xp6(3);
    v.Q6J("ngIf", Me.user.telephone);
    v.xp6(1);
    v.Q6J("ngIf", Me.user.email);
  }
}
function Dn(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 18)(1, "div", 19);
    v._uU(2);
    v.ALo(3, "displayNom");
    v.qZA();
    v._UZ(4, "br");
    v.YNc(5, De, 21, 4, "div", 39);
    v.YNc(6, Yt, 5, 2, "div", 40);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.xp6(2);
    v.Oqu(v.gM2(3, 3, Me.user, false, true, Me.authStore.isFouE()));
    v.xp6(3);
    v.Q6J("ngIf", (Me.classesToDisplaySpecialFamille == null ? null : Me.classesToDisplaySpecialFamille.length) > 0);
    v.xp6(1);
    v.Q6J("ngIf", Me.user.telephone || Me.user.email);
  }
}
function Et(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 18)(1, "div", 19);
    v._uU(2);
    v.ALo(3, "displayNom");
    v.qZA();
    v.TgZ(4, "div", 20);
    v._uU(5);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.xp6(2);
    v.Oqu(v.lcZ(3, 2, Me.user));
    v.xp6(3);
    v.Oqu(Me.user.classe.libelle);
  }
}
function lt(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div")(1, "div", 7)(2, "div", 8);
    v.YNc(3, O, 1, 0, "img", 9);
    v.YNc(4, x, 1, 0, "img", 10);
    v.YNc(5, U, 1, 0, "img", 11);
    v.YNc(6, B, 1, 1, "img", 12);
    v.qZA();
    v.YNc(7, X, 7, 4, "div", 13);
    v.YNc(8, q, 6, 8, "div", 13);
    v.YNc(9, pe, 7, 8, "div", 13);
    v.YNc(10, Oe, 7, 8, "div", 13);
    v.YNc(11, Dn, 7, 8, "div", 13);
    v.YNc(12, Et, 6, 4, "div", 13);
    v.qZA()();
  }
  if (ft & 2) {
    const Me = v.oxw();
    v.xp6(3);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.FAMILLE_RESPONSABLE || Me.typeUser === Me.edTypeUser.FAMILLE_CONJOINT);
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.PERSONNEL);
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.ENSEIGNANT);
    v.xp6(1);
    v.Q6J("ngIf", (Me.authStore.isPersonnel() || Me.authStore.isProfesseur()) && Me.typeUser === Me.edTypeUser.ELEVE);
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.FAMILLE_RESPONSABLE || Me.typeUser === Me.edTypeUser.FAMILLE_CONJOINT);
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.PERSONNEL);
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.ENSEIGNANT && !Me.authStore.isEleve() && !Me.authStore.isFamille());
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.ENSEIGNANT && Me.authStore.isEleve());
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.ENSEIGNANT && Me.authStore.isFamille());
    v.xp6(1);
    v.Q6J("ngIf", Me.typeUser === Me.edTypeUser.ELEVE);
  }
}
const et = function (ft) {
  return [ft];
};
function St(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "button", 45);
    v._UZ(1, "span", 46);
    v._uU(2, " Ecrire un message EcoleDirecte ");
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw(2);
    v.Q6J("typeContact", Me.typeUser)("listContact", v.VKq(2, et, Me.contactUser));
  }
}
function ve(ft, qe) {
  if (ft & 1) {
    v.TgZ(0, "div", 43);
    v.YNc(1, St, 3, 4, "button", 44);
    v.qZA();
  }
  if (ft & 2) {
    const Me = v.oxw();
    v.xp6(1);
    v.Q6J("ngIf", !Me.user.estBlackList && Me.messagerieStore.canSendMessageUser(Me.typeUser) && (Me.typeUser !== "A" || (Me.user.fonction == null ? null : Me.user.fonction.id) > 0));
  }
}
export let S = (() => {
  class ft {
    constructor(Me, ne, me, it, bt, Ut) {
      this.modalRef = Me;
      this.loaderService = ne;
      this.etablissementService = me;
      this.uiService = it;
      this.authStore = bt;
      this.messagerieStore = Ut;
      this.edTypeUser = M.dcH;
      this.classesToDisplaySpecialEleve = [];
      this.classesToDisplaySpecialFamille = [];
    }
    ngOnInit() {
      this.loadUserInfos(this.idUser, this.typeUser);
    }
    loadUserInfos(Me, ne) {
      this.loader = this.loaderService.show(this);
      this.etablissementService.getUserDetails(Me, ne).pipe((0, t.b)(me => {
        this.user = me;
        if (this.authStore.isEleve() && this.typeUser === M.dcH.ENSEIGNANT) {
          this.classesToDisplaySpecialEleve = this.user.classes.filter(it => it.id === this.authStore.currentUser.profile.classe.id);
        } else if (this.authStore.isFamille() && this.typeUser === M.dcH.ENSEIGNANT) {
          this.authStore.currentUser.profile.eleves.forEach(it => {
            const bt = this.user.classes.find(Ut => Ut.id === it.classe.id);
            if (Object.isExists(bt)) {
              this.classesToDisplaySpecialFamille.push(bt);
            }
          });
        }
        if (this.user.messagerieActive) {
          this.contactUser = M.tHm.convertUserToContactMessagerie(me);
        }
      }), (0, b.K)(() => {
        this.uiService.notifyEvent(M.DOJ.genericError, "Récupération des informations de l'utilisateur impossible", "Détail utilisateur");
        return i.E;
      }), (0, k.x)(() => this.loaderService.hide(this))).subscribe();
    }
  }
  ft.ɵfac = function (Me) {
    return new (Me || ft)(v.Y36(C.UZ), v.Y36(w.S), v.Y36(M.Xmb), v.Y36(M.VLf), v.Y36(M.CnD), v.Y36(M.q0O));
  };
  ft.ɵcmp = v.Xpm({
    type: ft,
    selectors: [["ed-user-detail-modal"]],
    inputs: {
      title: "title",
      idUser: "idUser",
      typeUser: "typeUser"
    },
    decls: 8,
    vars: 4,
    consts: [["id", "user-detail", 3, "ngBusy"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body"], [4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "card", "hovercard"], [1, "avatar"], ["alt", "image famille", "src", "/assets/images/famille.png", 4, "ngIf"], ["alt", "image personnel", "src", "/assets/images/personnel-with-libelle.png", 4, "ngIf"], ["alt", "image enseignant", "src", "/assets/images/teacher-with-libelle.png", 4, "ngIf"], ["alt", "photo élève", 3, "src", 4, "ngIf"], ["class", "info", 4, "ngIf"], ["alt", "image famille", "src", "/assets/images/famille.png"], ["alt", "image personnel", "src", "/assets/images/personnel-with-libelle.png"], ["alt", "image enseignant", "src", "/assets/images/teacher-with-libelle.png"], ["alt", "photo élève", 3, "src"], [1, "info"], [1, "title"], [1, "desc"], ["class", "ed-card card with-epingle without-margin-top text-start", 4, "ngIf"], [1, "ed-card", "card", "with-epingle", "without-margin-top", "text-start"], [1, "card-header"], [1, "card-body"], ["class", "ed-info", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ed-info"], [1, "ed-info-secondaire"], ["class", "desc", 4, "ngIf"], ["class", "ed-card card with-epingle without-margin-top", 4, "ngIf"], [1, "ed-card", "card", "with-epingle", "without-margin-top"], [1, "table", "ed-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row"], [1, "col-lg-8", "text-start"], [1, "legende"], [4, "ngIf", "ngIfElse"], ["noGrass", ""], ["class", "ed-info", 4, "ngIf"], ["class", "card ed-card with-epingle without-margin-top", 4, "ngIf"], ["class", "card ed-card with-epingle without-margin-top text-start", 4, "ngIf"], [1, "card", "ed-card", "with-epingle", "without-margin-top"], [1, "card", "ed-card", "with-epingle", "without-margin-top", "text-start"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary", "edMessageTo", "", 3, "typeContact", "listContact", 4, "ngIf"], ["type", "button", "edMessageTo", "", 1, "btn", "btn-primary", 3, "typeContact", "listContact"], [1, "fa", "fa-2x", "icon-ed_messagerie"]],
    template: function (Me, ne) {
      if (Me & 1) {
        v.TgZ(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        v._uU(3);
        v.qZA();
        v.TgZ(4, "button", 3);
        v.NdJ("click", function () {
          return ne.modalRef.hide();
        });
        v.qZA()();
        v.TgZ(5, "div", 4);
        v.YNc(6, lt, 13, 10, "div", 5);
        v.qZA();
        v.YNc(7, ve, 2, 1, "div", 6);
        v.qZA();
      }
      if (Me & 2) {
        v.Q6J("ngBusy", ne.loader);
        v.xp6(3);
        v.Oqu(ne.title);
        v.xp6(3);
        v.Q6J("ngIf", ne.user);
        v.xp6(1);
        v.Q6J("ngIf", ne.contactUser);
      }
    },
    dependencies: [_S.sg, _S.O5, L.DC, I.x, M.$t3, E.$],
    styles: ["#user-detail[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{margin-top:-12px}#user-detail[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:none}#user-detail[_ngcontent-%COMP%]   .card.hovercard[_ngcontent-%COMP%]{text-align:center}#user-detail[_ngcontent-%COMP%]   .card.hovercard[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px;max-width:100px;max-height:100px;border-radius:50%;border:5px solid rgba(255,255,255,.5)}#user-detail[_ngcontent-%COMP%]   .card.hovercard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:4px 8px 10px}#user-detail[_ngcontent-%COMP%]   .card.hovercard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:4px;font-size:17px}#user-detail[_ngcontent-%COMP%]   .card.hovercard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{overflow:hidden;font-size:12px;text-overflow:ellipsis;margin-bottom:15px}#user-detail[_ngcontent-%COMP%]   .card.hovercard[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{padding:0 20px;margin-bottom:17px}#user-detail[_ngcontent-%COMP%]   .ed-info-secondaire[_ngcontent-%COMP%]{font-style:italic}#user-detail[_ngcontent-%COMP%]   table.table.ed-table[_ngcontent-%COMP%]{text-align:left}"],
    changeDetection: 0
  });
  return ft;
})();