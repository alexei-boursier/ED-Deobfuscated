import * as i from "94650";
const t = ["*"];
export let U = (() => {
  class k {}
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵcmp = i.Xpm({
    type: k,
    selectors: [["ed-text-input-autocomplete-container"]],
    ngContentSelectors: t,
    decls: 1,
    vars: 0,
    template: function (v, C) {
      if (v & 1) {
        i.F$t();
        i.Hsn(0);
      }
    },
    styles: ["[_nghost-%COMP%]{position:relative;display:block}"]
  });
  return k;
})();