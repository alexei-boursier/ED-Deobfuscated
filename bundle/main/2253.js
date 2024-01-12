import * as i from "45007";
import * as t from "94650";
export let _ = (() => {
  class k {
    constructor(v, C, w) {
      this.renderer = v;
      this.elementRef = C;
      this.uiService = w;
    }
    onClick(v) {
      const C = this.renderer.createElement("textarea");
      this.elemCopied = i.FSr.isNotEmptyString(this.elemCopied) ? this.elemCopied : "vide";
      C.style.position = "fixed";
      C.style.left = "0";
      C.style.top = "0";
      C.style.opacity = "0";
      C.value = this.elemCopied;
      const w = this.elementRef.nativeElement.closest("body");
      this.renderer.appendChild(w, C);
      C.focus();
      C.select();
      if (document.execCommand("copy")) {
        this.uiService.notifyEvent(i.DOJ.genericSuccess, "Le contenu a été ajouté dans le presse-papier", "Copie effectuée", "fa fa-check");
      } else {
        this.uiService.notifyEvent(i.DOJ.genericError, "Copie dans le presse-papier impossible", "Copie impossible", "fa fa-warning");
      }
      this.renderer.removeChild(w, C);
      v.preventDefault();
      return false;
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)(t.Y36(t.Qsj), t.Y36(t.SBq), t.Y36(i.VLf));
  };
  k.ɵdir = t.lG2({
    type: k,
    selectors: [["", "edCopyFromClipboard", ""]],
    hostBindings: function (v, C) {
      if (v & 1) {
        t.NdJ("click", function (S) {
          return C.onClick(S);
        });
      }
    },
    inputs: {
      elemCopied: ["edCopyFromClipboard", "elemCopied"]
    }
  });
  return k;
})();