import * as t from "94650";
export let b = (() => {
  class M {
    constructor(C) {
      this.control = C;
    }
    onPaste(C) {
      C.preventDefault();
      let S = (C.clipboardData || window.clipboardData).getData("text");
      S = this.removeNewline(S);
      this.typeInTextarea(S, document.activeElement);
    }
    onKeyDown(C) {
      C.preventDefault();
    }
    removeNewline(C) {
      if (i.FSr.isNotEmptyString(C)) {
        return C.replace(/[\n\r]/g, "");
      } else {
        return C;
      }
    }
    typeInTextarea(C, w) {
      const [S, L] = [w.selectionStart, w.selectionEnd];
      w.setRangeText(C, S, L, "select");
      setTimeout(() => {
        this.control.control.setValue(w.value);
      }, 0);
    }
  }
  M.ɵfac = function (C) {
    return new (C || M)(t.Y36(_b.a5));
  };
  M.ɵdir = t.lG2({
    type: M,
    selectors: [["textarea", "edNoNewline", "", "ngModel", ""], ["textarea", "edNoNewline", "", "formControlName", ""], ["textarea", "edNoNewline", "", "formControl", ""]],
    hostBindings: function (C, w) {
      if (C & 1) {
        t.NdJ("paste", function (L) {
          return w.onPaste(L);
        })("keydown.Enter", function (L) {
          return w.onKeyDown(L);
        });
      }
    }
  });
  return M;
})();