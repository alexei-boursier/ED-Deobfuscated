import * as i from "94650";
export let C = (() => {
  class b {
    constructor() {}
  }
  b.ɵfac = function (M) {
    return new (M || b)();
  };
  b.ɵcmp = i.Xpm({
    type: b,
    selectors: [["ed-connecteur-robert-dico-en-ligne"]],
    decls: 13,
    vars: 0,
    consts: [[1, "row", "dico-le-robert"], ["action", "https://dictionnaire.lerobert.com/search", "method", "get", "ngNoForm", "", "role", "search", "target", "_blank", 1, "margin-top-10"], [1, "row"], [1, "bloc-robert-dico-en-ligne", "col-lg-10", "offset-lg-1", "col-md-10", "offset-md-1"], [1, "titre-robert-dico"], ["href", "https://dictionnaire.lerobert.com/", "target", "_blank"], ["id", "bloc-recherche"], ["name", "t", "type", "hidden", "value", "def"], ["autocapitalize", "off", "autocomplete", "off", "name", "q", "placeholder", "Rechercher un mot", "spellcheck", "false", "title", "Rechercher un mot", "type", "text", 1, "zone-recherche", "form-control"], ["type", "submit", 1, "btn-submit"], ["focusable", "false", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"]],
    template: function (M, v) {
      if (M & 1) {
        i.TgZ(0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        i._uU(6, " ");
        i.qZA()();
        i.TgZ(7, "div", 6);
        i._UZ(8, "input", 7)(9, "input", 8);
        i.TgZ(10, "button", 9);
        i.O4$();
        i.TgZ(11, "svg", 10);
        i._UZ(12, "path", 11);
        i.qZA()()()()()()();
      }
    },
    styles: [".bloc-robert-dico-en-ligne[_ngcontent-%COMP%]{font:400 12px Calibri,Helvetica,sans-serif;background:linear-gradient(var(--dark-primary-color),var(--light-primary-color));border-radius:5px}.bloc-robert-dico-en-ligne[_ngcontent-%COMP%]   .titre-robert-dico[_ngcontent-%COMP%]{padding:0;background:none;border:none}.bloc-robert-dico-en-ligne[_ngcontent-%COMP%]   .titre-robert-dico[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;background:transparent url(logo-Robert-dico.140c66f559d4e891.svg) no-repeat 5px 6px;height:70px}.bloc-robert-dico-en-ligne[_ngcontent-%COMP%]   .zone-recherche[_ngcontent-%COMP%]{padding:0 6px;border-radius:5px 0 0 5px;background:#fff;outline:none;height:36px;line-height:36px;border:none;cursor:text;flex-grow:2}.bloc-robert-dico-en-ligne[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]{width:36px;color:#227dab;padding:5px;border-radius:0 5px 5px 0;background:#ddd;outline:none;height:36px;border:none;cursor:pointer}.bloc-robert-dico-en-ligne[_ngcontent-%COMP%]   #bloc-recherche[_ngcontent-%COMP%]{background:none;border:none;padding:10px;display:flex}.row.dico-le-robert[_ngcontent-%COMP%]{max-width:350px;margin:auto}"],
    changeDetection: 0
  });
  return b;
})();