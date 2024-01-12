import * as i from "94650";
import * as v from "45007";
import * as C from "24006";
import * as w from "36895";
const L = ["descriptionContent"];
const I = ["canvas"];
function E(G, se) {
  if (G & 1) {
    i.TgZ(0, "div")(1, "p");
    i._uU(2, " Pour enregistrer ");
    i.TgZ(3, "b");
    i._uU(4, "vos modifications");
    i.qZA();
    i._uU(5, " , nous vous demandons de ");
    i.TgZ(6, "b");
    i._uU(7, "confirmer votre identité par SMS");
    i.qZA();
    i._uU(8, " via le bouton 'Authentification' ci-dessous. ");
    i.qZA()();
  }
}
function O(G, se) {
  if (G & 1) {
    i.ynx(0);
    i._uU(1);
    i.BQk();
  }
  if (G & 2) {
    const W = i.oxw().$implicit;
    i.xp6(1);
    i.Oqu(W.nom);
  }
}
function x(G, se) {
  if (G & 1) {
    i._uU(0);
  }
  if (G & 2) {
    const W = i.oxw().$implicit;
    i.Oqu(W.telephone);
  }
}
function U(G, se) {
  if (G & 1) {
    i.ynx(0);
    i.TgZ(1, "div", 18)(2, "div", 19);
    i._UZ(3, "input", 20);
    i.TgZ(4, "span", 10);
    i._uU(5, "En dehors de la France, veuillez saisir votre n° de téléphone au format international (+44 +49 etc...)");
    i.qZA()()();
    i.BQk();
  }
  if (G & 2) {
    const W = i.oxw();
    const Pe = W.index;
    const Le = W.$implicit;
    i.xp6(3);
    i.Q6J("formControlName", Pe)("value", Le.telephone);
  }
}
const B = function (G) {
  return {
    "col-md-4": G
  };
};
function F(G, se) {
  if (G & 1) {
    i.TgZ(0, "div", 12)(1, "div", 13);
    i._UZ(2, "input", 14);
    i.TgZ(3, "label", 15);
    i.YNc(4, O, 2, 1, "ng-container", 16);
    i.YNc(5, x, 1, 1, "ng-template", null, 17, i.W1O);
    i.qZA()();
    i.YNc(7, U, 6, 2, "ng-container", 0);
    i.qZA();
  }
  if (G & 2) {
    const W = se.$implicit;
    const Pe = se.index;
    const Le = i.MAs(6);
    const he = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngClass", i.VKq(7, B, he.avecChangementTelephone));
    i.xp6(1);
    i.MGl("id", "radios-", Pe, "");
    i.Q6J("value", Pe);
    i.xp6(1);
    i.MGl("for", "radios-", Pe, "");
    i.xp6(1);
    i.Q6J("ngIf", W.nom)("ngIfElse", Le);
    i.xp6(3);
    i.Q6J("ngIf", he.avecChangementTelephone);
  }
}
function Z(G, se) {
  if (G & 1) {
    i.TgZ(0, "div");
    i.YNc(1, F, 8, 9, "div", 11);
    i.qZA();
  }
  if (G & 2) {
    const W = i.oxw();
    i.xp6(1);
    i.Q6J("ngForOf", W.contacts)("ngForTrackBy", W.identifyContact);
  }
}
function X(G, se) {
  if (G & 1) {
    i.TgZ(0, "span", 21);
    i._uU(1, "Format du code incorrect");
    i.qZA();
  }
}
const le = [[["", "id", "description"]], [["", "id", "inputsspecificsauthsecure"]], [["", "id", "formbuttons"]]];
const fe = function (G) {
  return {
    "has-error": G
  };
};
const q = ["#description", "#inputsSpecificsAuthSecure", "#formButtons"];
export let p = (() => {
  class G extends (0, v.kCV)() {
    constructor(W, Pe, Le, he) {
      super();
      this._formBuilder = W;
      this.d3SecureService = Pe;
      this.uiService = Le;
      this.authStore = he;
      this.etape = 1;
      this.codeSMSloading = new i.vpe();
      this.codeSMSChange = new i.vpe();
      this.contacts = [];
      this.signataire = null;
      this.errors = {
        required: "Enter Invitation Code",
        minlength: "Fill all fields"
      };
      this.D3SecureForm = this._formBuilder.group({
        codeSMS: new C.NI("", [C.kI.required, C.kI.minLength(6)]),
        selected: new C.NI(0),
        tabTelephoneToUse: new C.Oe([])
      });
    }
    ngOnInit() {
      if (this.contacts?.length > 0) {
        if (!this.avecChangementTelephone) {
          this.contacts = this.contacts.filter(W => W.telephone !== "" && W.telephone !== undefined);
        }
      }
      this.contacts.forEach(W => {
        this.tabTelephoneToUse().push(new C.NI(W.telephone));
      });
    }
    ngAfterViewInit() {
      this.contextCanvas = this.canvasEl.nativeElement.getContext("2d");
      this.writeTextInCanvas(this.authStore.currentUser.prenom + " " + this.authStore.currentUser.nom);
    }
    tabTelephoneToUse() {
      return this.D3SecureForm.get("tabTelephoneToUse");
    }
    identifyContact(W, Pe) {
      return `${Pe.typeSignataire}-${Pe.idSignataire}-${Pe.telephone}`;
    }
    submitD3SecureForm() {
      if (this.etape === 1) {
        const W = this.D3SecureForm.value.selected;
        if (!Object.isExists(this.contacts[W])) {
          this.uiService.notifyEvent(v.DOJ.genericError, "L'authentification a échoué. Il est possible que vous n'ayez pas communiqué votre numéro de téléphone portable auprès de votre établissement.", "Authentification");
          return;
        }
        this.codeSMSloading.emit(true);
        this._infoSignataire = new v.eH4(this.contacts[W]);
        this._infoSignataire.telephone = this.D3SecureForm.value.tabTelephoneToUse[W];
        this.d3SecureService.demanderCode(this._infoSignataire).pipe((0, b.b)(() => {
          this.uiService.notifyEvent(v.DOJ.genericSuccess, "Un sms vient de vous être envoyé.", "Authentification");
          this.etape = 2;
        }), (0, k.K)(Pe => {
          this.uiService.notifyEvent(v.DOJ.genericError, "L'authentification a échouée. Il est possible que vous n'ayez pas communiqué votre numéro de téléphone portable auprès de votre établissement.", "Authentification");
          return t.E;
        }), (0, M.x)(() => this.codeSMSloading.emit(false))).subscribe();
      } else {
        this._infoSignataire.signatureCanvas = this.canvasEl.nativeElement.toDataURL("image/png");
        this.codeSMSChange.emit({
          codeSMS: +this.D3SecureForm.value.codeSMS,
          signataire: this._infoSignataire
        });
      }
    }
    writeTextInCanvas(W) {
      this.contextCanvas.font = "48px Bahagia";
      this.contextCanvas.textAlign = "center";
      this.contextCanvas.textBaseline = "middle";
      this.contextCanvas.fillText(W, this.canvasEl.nativeElement.width / 2, this.canvasEl.nativeElement.height / 2);
    }
  }
  G.ɵfac = function (W) {
    return new (W || G)(i.Y36(C.qu), i.Y36(v.$IC), i.Y36(v.VLf), i.Y36(v.CnD));
  };
  G.ɵcmp = i.Xpm({
    type: G,
    selectors: [["ed-auth-secure"]],
    contentQueries: function (W, Pe, Le) {
      if (W & 1) {
        i.Suo(Le, L, 5);
      }
      if (W & 2) {
        let he;
        if (i.iGM(he = i.CRH())) {
          Pe.descriptionContent = he.first;
        }
      }
    },
    viewQuery: function (W, Pe) {
      if (W & 1) {
        i.Gf(I, 5);
      }
      if (W & 2) {
        let Le;
        if (i.iGM(Le = i.CRH())) {
          Pe.canvasEl = Le.first;
        }
      }
    },
    inputs: {
      contacts: "contacts",
      avecChangementTelephone: "avecChangementTelephone"
    },
    outputs: {
      codeSMSloading: "codeSMSloading",
      codeSMSChange: "codeSMSChange"
    },
    features: [i.qOj],
    ngContentSelectors: q,
    decls: 18,
    vars: 13,
    consts: [[4, "ngIf"], [1, "formAuthentificationSMS"], ["name", "formD3Secure", 3, "formGroup", "ngSubmit"], [1, "padding35", 3, "hidden"], ["width", "550"], ["canvas", ""], [3, "hidden"], ["for", "codeSMS", 1, "form-label"], ["id", "codeSMS", 3, "length", "formControl"], ["class", "text-danger", 4, "ngIf"], [1, "form-text"], ["class", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row"], [1, "form-check", 3, "ngClass"], ["type", "radio", "formControlName", "selected", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [4, "ngIf", "ngIfElse"], ["noNom", ""], [1, "col-md-4"], ["formArrayName", "tabTelephoneToUse", 1, "input-group"], ["placeholder", "ex: +336 xx xx xx xx", "type", "text", 1, "form-control", 3, "formControlName", "value"], [1, "text-danger"]],
    template: function (W, Pe) {
      if (W & 1) {
        i.F$t(le);
        i.Hsn(0);
        i.YNc(1, E, 9, 0, "div", 0);
        i.TgZ(2, "div", 1)(3, "form", 2);
        i.NdJ("ngSubmit", function () {
          return Pe.submitD3SecureForm();
        });
        i.YNc(4, Z, 2, 2, "div", 0);
        i.TgZ(5, "div", 3);
        i._UZ(6, "canvas", 4, 5);
        i.qZA();
        i.TgZ(8, "div", 6)(9, "div")(10, "label", 7);
        i._uU(11);
        i.qZA();
        i._UZ(12, "ed-otp-sms", 8);
        i.YNc(13, X, 2, 0, "span", 9);
        i.TgZ(14, "span", 10);
        i._uU(15, "Saisissez le code reçu par SMS pour vous authentifier");
        i.qZA()()();
        i.Hsn(16, 1);
        i.Hsn(17, 2);
        i.qZA()();
      }
      if (W & 2) {
        i.xp6(1);
        i.Q6J("ngIf", !Pe.descriptionContent);
        i.xp6(2);
        i.Q6J("formGroup", Pe.D3SecureForm);
        i.xp6(1);
        i.Q6J("ngIf", Pe.etape === 1);
        i.xp6(1);
        i.Q6J("hidden", Pe.etape !== 2);
        i.xp6(3);
        i.Q6J("hidden", Pe.etape !== 2);
        i.xp6(1);
        i.Tol(i.VKq(11, fe, Pe.D3SecureForm.controls.codeSMS.invalid));
        i.xp6(2);
        i.hij("Code reçu par SMS au ", Pe.D3SecureForm.value.tabTelephoneToUse[Pe.D3SecureForm.value.selected], "");
        i.xp6(1);
        i.Q6J("length", 6)("formControl", Pe.D3SecureForm.controls.codeSMS);
        i.xp6(1);
        i.Q6J("ngIf", Pe.D3SecureForm.controls.codeSMS.invalid);
      }
    },
    dependencies: [w.mk, w.sg, w.O5, C._Y, C.Fj, C._, C.JJ, C.JL, C.oH, C.sg, C.u, C.CE, S.e],
    styles: ["form[name=formD3Secure][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-style:italic;color:#737373}form[name=formD3Secure][_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.padding35[_ngcontent-%COMP%]{padding-bottom:35px}canvas[_ngcontent-%COMP%]{border:1px solid rgb(187,178,178);background-color:var(--ion-color-success)}"]
  });
  return G;
})();