import * as i from "94650";
const C = ["dynamicContentContainer"];
function w(x, U) {
  if (x & 1) {
    i.TgZ(0, "div", 9);
    i.ALo(1, "filterHtml");
    i.ALo(2, "nl2br");
    i._uU(3, "message");
    i.qZA();
  }
  if (x & 2) {
    const B = i.oxw();
    i.Q6J("content", B.message)("innerHTML", i.lcZ(1, 2, i.lcZ(2, 4, B.message)), i.oJD);
  }
}
function S(x, U) {
  if (x & 1) {
    i._UZ(0, "hr", 10);
  }
}
function L(x, U) {}
function I(x, U) {
  if (x & 1) {
    i.YNc(0, L, 0, 0, "ng-template", null, 11, i.W1O);
  }
}
function E(x, U) {
  if (x & 1) {
    const B = i.EpF();
    i.TgZ(0, "button", 12);
    i.NdJ("click", function () {
      i.CHM(B);
      const Z = i.oxw();
      return i.KtG(Z.modalRef.hide());
    });
    i._uU(1);
    i.qZA();
  }
  if (x & 2) {
    const B = i.oxw();
    i.xp6(1);
    i.Oqu(B.close);
  }
}
export let z = (() => {
  class x {
    constructor(B) {
      this.modalRef = B;
      this.close = "";
    }
    ngAfterViewInit() {
      if (!!Object.isExists(this.injectComponentClass)) {
        setTimeout(() => {
          this.dynamicContentContainer.clear();
          this._componentRef = this.dynamicContentContainer.createComponent(this.injectComponentClass);
          const B = {};
          if (Object.isExists(this.injectComponentInputs)) {
            Object.keys(this.injectComponentInputs).forEach(F => {
              this._componentRef.instance[F] = this.injectComponentInputs[F];
              B[F] = new i.WD2(undefined, this.injectComponentInputs[F], true);
            });
          }
          if (typeof this._componentRef.instance.ngOnChanges == "function") {
            this._componentRef.instance.ngOnChanges(B);
          }
          this._componentRef.changeDetectorRef.detectChanges();
        }, 0);
      }
    }
    ngOnDestroy() {
      if (Object.isExists(this._componentRef)) {
        this._componentRef.destroy();
      }
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)(i.Y36(t.UZ));
  };
  x.ɵcmp = i.Xpm({
    type: x,
    selectors: [["ed-dialog-modal"]],
    viewQuery: function (B, F) {
      if (B & 1) {
        i.Gf(C, 5, i.s_b);
      }
      if (B & 2) {
        let Z;
        if (i.iGM(Z = i.CRH())) {
          F.dynamicContentContainer = Z.first;
        }
      }
    },
    inputs: {
      title: "title",
      close: "close",
      message: "message",
      injectComponentInputs: "injectComponentInputs",
      injectComponentClass: "injectComponentClass"
    },
    decls: 10,
    vars: 5,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body"], ["edMathjax", "", 3, "content", "innerHTML", 4, "ngIf"], ["role", "separator", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-primary float-end", "type", "button", 3, "click", 4, "ngIf"], ["edMathjax", "", 3, "content", "innerHTML"], ["role", "separator"], ["dynamicContentContainer", ""], ["type", "button", 1, "btn", "btn-primary", "float-end", 3, "click"]],
    template: function (B, F) {
      if (B & 1) {
        i.TgZ(0, "div", 0)(1, "h3", 1);
        i._uU(2);
        i.qZA();
        i.TgZ(3, "button", 2);
        i.NdJ("click", function () {
          return F.modalRef.hide();
        });
        i.qZA()();
        i.TgZ(4, "div", 3);
        i.YNc(5, w, 4, 6, "div", 4);
        i.YNc(6, S, 1, 0, "hr", 5);
        i.YNc(7, I, 2, 0, null, 6);
        i.qZA();
        i.TgZ(8, "div", 7);
        i.YNc(9, E, 2, 1, "button", 8);
        i.qZA();
      }
      if (B & 2) {
        i.xp6(2);
        i.Oqu(F.title);
        i.xp6(3);
        i.Q6J("ngIf", F.message);
        i.xp6(1);
        i.Q6J("ngIf", F.message && F.injectComponentClass);
        i.xp6(1);
        i.Q6J("ngIf", F.injectComponentClass);
        i.xp6(2);
        i.Q6J("ngIf", F.close !== "");
      }
    },
    dependencies: [b.O5, k.L, M.kM_, v.w],
    encapsulation: 2,
    changeDetection: 0
  });
  return x;
})();