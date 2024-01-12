import * as i from "94650";
import * as t from "36895";
const k = function (w) {
  return {
    "background-color": w
  };
};
const M = function (w, S) {
  return {
    "palette-selected-color": w,
    "transparent-color": S
  };
};
function v(w, S) {
  if (w & 1) {
    const L = i.EpF();
    i.TgZ(0, "div", 4);
    i.NdJ("click", function () {
      const O = i.CHM(L).$implicit;
      const x = i.oxw();
      return i.KtG(x.changeColor(O));
    });
    i.qZA();
  }
  if (w & 2) {
    const L = S.$implicit;
    const I = i.oxw();
    i.Akn(i.VKq(3, k, L));
    i.Q6J("ngClass", i.WLB(5, M, L === I.currentColor, L === "transparent"));
  }
}
export let h = (() => {
  class w {
    constructor() {
      this.currentColorChange = new i.vpe();
    }
    changeColor(L) {
      if (this.currentColor !== L) {
        this.currentColorChange.emit(L);
      }
    }
  }
  w.ɵfac = function (L) {
    return new (L || w)();
  };
  w.ɵcmp = i.Xpm({
    type: w,
    selectors: [["ed-color-picker"]],
    inputs: {
      currentColor: "currentColor",
      tabColors: "tabColors"
    },
    outputs: {
      currentColorChange: "currentColorChange"
    },
    decls: 5,
    vars: 8,
    consts: [[1, "color-picker"], [1, "selected-color"], [1, "color-palette"], ["class", "tappable", 3, "ngClass", "style", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tappable", 3, "ngClass", "click"]],
    template: function (L, I) {
      if (L & 1) {
        i.TgZ(0, "div", 0);
        i._UZ(1, "div", 1);
        i.TgZ(2, "div", 2);
        i.YNc(3, v, 1, 8, "div", 3);
        i.ALo(4, "trackByProperty");
        i.qZA()();
      }
      if (L & 2) {
        i.xp6(1);
        i.Akn(i.VKq(6, k, I.currentColor));
        i.xp6(2);
        i.Q6J("ngForOf", I.tabColors)("ngForTrackBy", i.lcZ(4, 4, "$index"));
      }
    },
    dependencies: [t.mk, t.sg, b.$],
    styles: [".color-palette{background-color:#fff;box-sizing:border-box;box-shadow:0 1px 4px #0003;opacity:0;padding:5px 7px 3px;position:absolute;transition:visibility 0s ease .218s,opacity .218s linear;visibility:hidden;width:224px;height:115px;bottom:10px;z-index:4011}.color-palette div.transparent-color{border-color:#e0e0e0}.color-palette div{box-sizing:border-box;border-radius:50%;height:26px;width:26px;margin:2px;opacity:1;cursor:pointer;display:inline-block;border:2px solid transparent;outline:none!important}.color-palette div:hover{border-color:#0006}.color-palette div.palette-selected-color{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC41NCIgdmlld0JveD0iMCAwIDE4IDE4IiBoZWlnaHQ9IjE4cHgiPgogIDxwYXRoIGQ9Im0wIDBoMTh2MThoLTE4eiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Im02LjYxIDExLjg5bC0zLjExLTMuMTEtMS4wNiAxLjA2IDQuMTcgNC4xNiA4Ljk1LTguOTUtMS4wNi0xLjA1eiIvPgo8L3N2Zz4K);background-position:center;background-repeat:no-repeat;background-size:16px 16px}.color-picker:hover .color-palette{visibility:visible;opacity:1}.selected-color{box-sizing:border-box;border-radius:50%;height:26px;width:26px;margin:2px;opacity:1;cursor:pointer;display:inline-block;border:2px solid rgba(0,0,0,.4);outline:none!important}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return w;
})();