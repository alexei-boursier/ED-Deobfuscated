import * as t from "45007";
import * as b from "11302";
import * as k from "94650";
export let x = (() => {
  class v {
    constructor(w, S, L) {
      this.renderer = w;
      this.credentialsStore = S;
      this.elementRef = L;
      this.fileId = "";
      this.tabFileId = [];
      this._datePipe = new t.ifA();
    }
    onClick(w) {
      if (Object.isExists(this.beforeClick)) {
        this.beforeClick().pipe((0, i.b)(() => {
          this.loadData(w);
        })).subscribe();
      } else {
        this.loadData(w);
      }
      return false;
    }
    loadData(w) {
      const S = this.url || `${(0, b.Je)()}/telechargement${b.sX.apiExtension}?verbe=get`;
      const L = this.renderer.createElement("form");
      this.renderer.setAttribute(L, "method", "POST");
      this.renderer.setAttribute(L, "target", "_blank");
      this.renderer.setAttribute(L, "action", S);
      const I = this.renderer.createElement("input");
      this.renderer.setAttribute(I, "name", "leTypeDeFichier");
      this.renderer.setAttribute(I, "type", "hidden");
      this.renderer.setAttribute(I, "value", this.fileType);
      this.renderer.appendChild(L, I);
      const E = this.renderer.createElement("input");
      this.renderer.setAttribute(E, "name", "fichierId");
      this.renderer.setAttribute(E, "type", "hidden");
      this.renderer.setAttribute(E, "value", this.fileId);
      this.renderer.appendChild(L, E);
      const O = this.renderer.createElement("input");
      this.renderer.setAttribute(O, "name", "tabFichiersIds");
      this.renderer.setAttribute(O, "type", "hidden");
      this.renderer.setAttribute(O, "value", this.tabFileId.length > 0 ? JSON.stringify(this.tabFileId) : "");
      this.renderer.appendChild(L, O);
      const x = this.renderer.createElement("input");
      this.renderer.setAttribute(x, "name", "token");
      this.renderer.setAttribute(x, "type", "hidden");
      this.renderer.setAttribute(x, "value", this.credentialsStore.snapshot.authToken);
      this.renderer.appendChild(L, x);
      if (Object.isExists(this.anneeMessages)) {
        const B = this.renderer.createElement("input");
        this.renderer.setAttribute(B, "name", "anneeMessages");
        this.renderer.setAttribute(B, "type", "hidden");
        this.renderer.setAttribute(B, "value", this.anneeMessages);
        this.renderer.appendChild(L, B);
      }
      if (Object.isExists(this.additionalData)) {
        Object.keys(this.additionalData).forEach(B => {
          let F;
          const Z = this.renderer.createElement("input");
          F = this.additionalData[B] instanceof Date ? this._datePipe.transform(this.additionalData[B], "y-MM-dd") : this.additionalData[B];
          this.renderer.setAttribute(Z, "name", B);
          this.renderer.setAttribute(Z, "type", "hidden");
          this.renderer.setAttribute(Z, "value", F);
          this.renderer.appendChild(L, Z);
        });
      }
      const U = this.elementRef.nativeElement.closest("body");
      this.renderer.appendChild(U, L);
      L.submit();
      this.renderer.removeChild(U, L);
      w.stopPropagation();
      w.preventDefault();
    }
  }
  v.ɵfac = function (w) {
    return new (w || v)(k.Y36(k.Qsj), k.Y36(t.dSF), k.Y36(k.SBq));
  };
  v.ɵdir = k.lG2({
    type: v,
    selectors: [["", "edTelechargement", ""]],
    hostBindings: function (w, S) {
      if (w & 1) {
        k.NdJ("click", function (I) {
          return S.onClick(I);
        });
      }
    },
    inputs: {
      fileId: "fileId",
      tabFileId: "tabFileId",
      fileType: "fileType",
      additionalData: "additionalData",
      url: "url",
      anneeMessages: "anneeMessages",
      beforeClick: "beforeClick"
    }
  });
  return v;
})();