import * as i from "94650";
export let l = (() => {
  class C {
    constructor(S) {
      this.modalService = S;
      this.listFiles = [];
      this.readonly = true;
      this.canModifyPdf = false;
      this.canExportToCloud = false;
      this.otherTypeDL = false;
      this.completeTeleversement = new i.vpe();
    }
    onClick(S) {
      if (Object.isExists(this.beforeClick)) {
        this.beforeClick().pipe((0, t.b)(() => {
          this.loadData(S);
        })).subscribe();
      } else {
        this.loadData(S);
      }
      return false;
    }
    loadData(S) {
      const L = "modal-xlg modal-lightbox";
      const I = {
        listFiles: this.listFiles,
        file: this.file,
        typeFichier: this.typeFichier,
        typeModule: this.typeModule,
        additionalData: this.additionalData,
        otherTypeDL: this.otherTypeDL,
        readonly: this.readonly,
        canModifyPdf: this.canModifyPdf,
        canExportToCloud: this.canExportToCloud,
        modalClassCSS: L
      };
      const E = {
        id: this.modalService.getModalsCount() + 1,
        initialState: I,
        ignoreBackdropClick: true,
        class: L
      };
      this.modalService.show(k.i, E).content._onTeleversement$.pipe((0, b.q)(1)).subscribe(x => {
        if (Object.isExists(x)) {
          this.completeTeleversement.emit(x);
        }
      });
      S.stopPropagation();
      S.preventDefault();
    }
  }
  C.ɵfac = function (S) {
    return new (S || C)(i.Y36(M.tT));
  };
  C.ɵdir = i.lG2({
    type: C,
    selectors: [["", "edLightbox", ""]],
    hostBindings: function (S, L) {
      if (S & 1) {
        i.NdJ("click", function (E) {
          return L.onClick(E);
        });
      }
    },
    inputs: {
      file: "file",
      typeFichier: "typeFichier",
      typeModule: "typeModule",
      listFiles: "listFiles",
      additionalData: "additionalData",
      readonly: "readonly",
      canModifyPdf: "canModifyPdf",
      canExportToCloud: "canExportToCloud",
      otherTypeDL: "otherTypeDL",
      beforeClick: "beforeClick"
    },
    outputs: {
      completeTeleversement: "completeTeleversement"
    }
  });
  return C;
})();