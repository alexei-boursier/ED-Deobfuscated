import * as i from "45007";
import * as v from "11302";
import * as C from "94650";
import * as L from "36895";
import * as I from "24006";
function F(fe, q) {
  if (fe & 1) {
    C.TgZ(0, "span");
    C._uU(1, "Aucun destinataire sélectionné");
    C.qZA();
  }
}
function Z(fe, q) {
  if (fe & 1) {
    const j = C.EpF();
    C.TgZ(0, "ed-groupe-destinataire", 29);
    C.NdJ("removeDestinataires", function () {
      C.CHM(j);
      const se = C.oxw();
      return C.KtG(se.modalRef.hide());
    });
    C.qZA();
  }
  if (fe & 2) {
    const j = q.$implicit;
    const G = C.oxw();
    C.Q6J("destinataires", j.destinataires)("type", G.typeContact);
  }
}
const X = function (fe) {
  return {
    "has-error": fe
  };
};
export let D = (() => {
  class fe {
    constructor(j, G, se, W, Pe, Le) {
      this.loaderService = j;
      this.modalRef = G;
      this.messagerieService = se;
      this.authStore = W;
      this.uiService = Pe;
      this.cd = Le;
      this.processingFiles = 0;
      this.dropZoneConfig = {
        parallelUploads: 3,
        maxFilesize: 100,
        timeout: 3000000,
        url: `${(0, v.Je)()}/televersement.awp?verbe=post`,
        processing: () => this.processingEvent(),
        queuecomplete: () => this.completeEvent()
      };
      this.inputFilesConfig = {
        fromCloudEnabled: false,
        keepComplete: true,
        dropzoneContainer: "#container-messagerie-compose"
      };
      this.message = {
        content: "",
        groupesDestinataires: [],
        subject: "",
        files: [],
        transfertFiles: []
      };
      this._datePipe = new i.ifA();
    }
    ngOnInit() {
      this.editorOptions = {
        ...v.x$,
        height: 300,
        extraPlugins: "colorbutton,font,mathjax,base64image",
        toolbar_full: [{
          name: "basicstyles",
          items: ["Bold", "Italic", "Strike", "Underline"]
        }, {
          name: "links",
          items: ["Link", "Unlink", "base64image"]
        }, {
          name: "paragraph",
          items: ["BulletedList", "NumberedList"]
        }, {
          name: "editing",
          items: ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"]
        }, {
          name: "styles",
          items: ["FontSize", "TextColor", "PasteText", "PasteFromWord"]
        }],
        removePlugins: "elementspath",
        startupFocus: false
      };
      delete this.editorOptions.allowedContent;
      if (this.typeContact === i.dcH.ESPACE_TRAVAIL || this.typeContact === i.qzA.RDVPP || this.typeContact === i.qzA.MESSAGERIE) {
        this.message.groupesDestinataires = [{
          destinataires: this.listContact,
          selection: {
            type: this.typeContact
          }
        }];
      } else {
        this.listContact.forEach(j => {
          let G = this.message.groupesDestinataires.find(se => se.selection.type === j.type);
          if (Object.isExists(G)) {
            G.destinataires.push(j);
          } else {
            G = {
              destinataires: [j],
              selection: {
                type: j.type
              }
            };
            this.message.groupesDestinataires.push(G);
          }
        });
      }
    }
    aucunDestinataire() {
      return this.message.groupesDestinataires.length === 0 || this.message.groupesDestinataires.edPluckFlatten("destinataires").filter(j => j.to_cc_cci === "to").length === 0;
    }
    sendMessage() {
      this.loader = this.loaderService.show(this);
      this.cd.markForCheck();
      const j = {
        ...this.message,
        content: i.YC.base64encode(i.FSr.escapeHTMLEncode(this.message.content)),
        date: this._datePipe.transform(new Date(), "y-MM-dd HH:mm:ss"),
        read: true,
        from: {
          role: this.authStore.currentUser.typeCompte,
          id: this.authStore.currentUser.id,
          read: true
        },
        files: [...this.message.files, ...this.message.transfertFiles]
      };
      this.messagerieService.sendMessage(this.authStore.currentUser.typeCompte, this.authStore.currentUser.id, j).pipe((0, b.b)(G => {
        this.uiService.notifyEvent(i.DOJ.genericSuccess, G.infos, "Message", "icon-ed_messagerie");
        this.modalRef.hide();
      }), (0, k.K)(G => {
        this.uiService.notifyEvent(i.DOJ.genericError, G.status === 575 ? G.message : "Une erreur s'est produite lors de l'envoi de votre message", "Message");
        return t.E;
      }), (0, M.x)(() => this.loaderService.hide(this))).subscribe();
    }
    trackByGroupeDestinataire(j, G) {
      return G.selection.type;
    }
    processingEvent() {
      this.processingFiles++;
    }
    completeEvent() {
      this.processingFiles = 0;
    }
    onUploadSuccess(j) {
      this.message.files.push(new i.eD9(j));
    }
    onRemovedSuccess(j) {
      this.message.files.splice(j.indice, 1);
    }
  }
  fe.ɵfac = function (j) {
    return new (j || fe)(C.Y36(w.S), C.Y36(S.UZ), C.Y36(i.KRh), C.Y36(i.CnD), C.Y36(i.VLf), C.Y36(C.sBO));
  };
  fe.ɵcmp = C.Xpm({
    type: fe,
    selectors: [["ed-message-to-modal"]],
    inputs: {
      typeContact: "typeContact",
      listContact: "listContact"
    },
    decls: 41,
    vars: 16,
    consts: [["id", "ModalEdMessageTo"], ["name", "composeForm", "novalidate", "", 3, "ngBusy", "ngSubmit"], ["composeForm", "ngForm"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body", "ed-container", "messagerie"], ["id", "container-messagerie-compose", 1, "well-lg", "dropzone-container", "row"], [1, "row"], ["title", "Destinataire à", 1, "col-md-1", "col-lg-2", "col-xl-2", "col-form-label"], [1, "col-md-5", "col-lg-5", "col-xl-6"], [1, "input-destinataires", "centpourcent"], [4, "ngIf"], ["toCcCci", "to", 3, "destinataires", "type", "removeDestinataires", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "clearfix"], [1, "row", 3, "ngClass"], ["for", "object", 1, "col-lg-2", "col-form-label"], [1, "col-lg-10"], ["id", "object", "name", "object", "type", "text", "required", "", "edAutofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["object", "ngModel"], ["for", "content", 1, "col-lg-2", "col-form-label"], ["id", "content", "name", "content", "required", "", 3, "config", "ngModel", "ngModelChange"], ["content", "ngModel"], [1, "col-lg-2", "ol-form-label"], [3, "dropzoneConfig", "config", "successUpload", "removedFile"], [1, "modal-footer"], [1, "w-100"], ["type", "button", 1, "btn", "btn-danger", "float-start", 3, "click"], ["type", "submit", "id", "btnEnvoyerMail", "value", "Envoyer", 1, "btn", "btn-primary", "float-end", 3, "disabled"], ["toCcCci", "to", 3, "destinataires", "type", "removeDestinataires"]],
    template: function (j, G) {
      if (j & 1) {
        C.TgZ(0, "div", 0)(1, "form", 1, 2);
        C.NdJ("ngSubmit", function () {
          return G.sendMessage();
        });
        C.TgZ(3, "div", 3)(4, "h3", 4);
        C._uU(5, "Nouveau Message EcoleDirecte");
        C.qZA();
        C.TgZ(6, "button", 5);
        C.NdJ("click", function () {
          return G.modalRef.hide();
        });
        C.qZA()();
        C.TgZ(7, "div", 6)(8, "div", 7)(9, "fieldset")(10, "div", 8)(11, "strong", 9);
        C._uU(12, "À");
        C.qZA();
        C.TgZ(13, "div", 10)(14, "div", 11);
        C.YNc(15, F, 2, 0, "span", 12);
        C.YNc(16, Z, 1, 2, "ed-groupe-destinataire", 13);
        C._UZ(17, "div", 14);
        C.qZA()()();
        C.TgZ(18, "div", 15)(19, "label", 16);
        C._uU(20, "Sujet");
        C.qZA();
        C.TgZ(21, "div", 17)(22, "input", 18, 19);
        C.NdJ("ngModelChange", function (W) {
          return G.message.subject = W;
        });
        C.qZA()()();
        C.TgZ(24, "div", 15)(25, "label", 20);
        C._uU(26, "Votre message");
        C.qZA();
        C.TgZ(27, "div", 17)(28, "ckeditor", 21, 22);
        C.NdJ("ngModelChange", function (W) {
          return G.message.content = W;
        });
        C.qZA()()();
        C.TgZ(30, "div", 8)(31, "strong", 23);
        C._uU(32, "Pièces jointes");
        C.qZA();
        C.TgZ(33, "div", 17)(34, "ed-input-files", 24);
        C.NdJ("successUpload", function (W) {
          return G.onUploadSuccess(W);
        })("removedFile", function (W) {
          return G.onRemovedSuccess(W);
        });
        C.qZA()()()();
        C._UZ(35, "div", 14);
        C.qZA()();
        C.TgZ(36, "div", 25)(37, "div", 26)(38, "button", 27);
        C.NdJ("click", function () {
          return G.modalRef.hide();
        });
        C._uU(39, "Annuler");
        C.qZA();
        C._UZ(40, "input", 28);
        C.qZA()()()();
      }
      if (j & 2) {
        const se = C.MAs(2);
        const W = C.MAs(23);
        const Pe = C.MAs(29);
        C.xp6(1);
        C.Q6J("ngBusy", G.loader);
        C.xp6(14);
        C.Q6J("ngIf", G.message.groupesDestinataires.length === 0);
        C.xp6(1);
        C.Q6J("ngForOf", G.message.groupesDestinataires)("ngForTrackBy", G.trackByGroupeDestinataire);
        C.xp6(2);
        C.Q6J("ngClass", C.VKq(12, X, W.invalid || W.pristine));
        C.xp6(4);
        C.Q6J("ngModel", G.message.subject);
        C.xp6(2);
        C.Q6J("ngClass", C.VKq(14, X, Pe.invalid || Pe.pristine));
        C.xp6(4);
        C.Q6J("config", G.editorOptions)("ngModel", G.message.content);
        C.xp6(6);
        C.Q6J("dropzoneConfig", G.dropZoneConfig)("config", G.inputFilesConfig);
        C.xp6(6);
        C.Q6J("disabled", se.invalid || se.pristine || G.aucunDestinataire());
      }
    },
    dependencies: [L.mk, L.sg, L.O5, I._Y, I.Fj, I.JJ, I.JL, I.Q7, I.On, I.F, E.u, O.DC, x.U, U.F, B.s],
    changeDetection: 0
  });
  return fe;
})();