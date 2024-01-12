import * as _i from "94650";
export let i = (() => {
  class b {
    constructor() {}
  }
  b.ɵfac = function (M) {
    return new (M || b)();
  };
  b.ɵcmp = _i.Xpm({
    type: b,
    selectors: [["ed-custom-busy"]],
    decls: 6,
    vars: 0,
    consts: [[1, "ng-busy-default-wrapper"], [1, "ng-busy-default-sign"], [1, "ng-busy-default-spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]],
    template: function (M, v) {
      if (M & 1) {
        _i.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2);
        _i._UZ(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _i.qZA()()();
      }
    },
    styles: ["@keyframes sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.ng-busy-default-wrapper[_ngcontent-%COMP%]{position:relative;top:50%}.ng-busy-default-wrapper[_ngcontent-%COMP%] > .ng-busy-default-sign[_ngcontent-%COMP%]{margin:0;padding:0;border:0 none;background:transparent;box-shadow:none}.ng-busy-default-wrapper[_ngcontent-%COMP%] > .ng-busy-default-sign[_ngcontent-%COMP%] > .ng-busy-default-spinner[_ngcontent-%COMP%]{margin:0;width:auto;height:auto}.ng-busy-default-wrapper[_ngcontent-%COMP%] > .ng-busy-default-sign[_ngcontent-%COMP%] > .ng-busy-default-spinner[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;top:0;left:0;width:18px;height:18px;margin:0 2px;background-color:#333;border-radius:100%;opacity:1;display:inline-block;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.ng-busy-default-wrapper[_ngcontent-%COMP%] > .ng-busy-default-sign[_ngcontent-%COMP%] > .ng-busy-default-spinner[_ngcontent-%COMP%] > div.bounce1[_ngcontent-%COMP%]{animation-delay:-.32s}.ng-busy-default-wrapper[_ngcontent-%COMP%] > .ng-busy-default-sign[_ngcontent-%COMP%] > .ng-busy-default-spinner[_ngcontent-%COMP%] > div.bounce2[_ngcontent-%COMP%]{animation-delay:-.16s}"]
  });
  return b;
})();