import * as i from "94650";
import * as t from "24006";
import * as b from "36895";
const k = function (G, se) {
  return {
    "pull-left": G,
    "float-left": se
  };
};
const M = function (G, se) {
  return {
    "pull-right": G,
    "float-right": se
  };
};
const v = function (G, se) {
  return {
    disabled: G,
    currentPage: se
  };
};
function C(G, se) {
  if (G & 1) {
    const W = i.EpF();
    i.TgZ(0, "li", 11)(1, "a", 12);
    i.NdJ("click", function (Le) {
      i.CHM(W);
      const he = i.oxw();
      return i.KtG(he.selectPage(1, Le));
    });
    i.GkF(2, 13);
    i.qZA()();
  }
  if (G & 2) {
    const W = i.oxw();
    const Pe = i.MAs(13);
    i.ekj("disabled", W.noPrevious() || W.disabled);
    i.xp6(2);
    i.Q6J("ngTemplateOutlet", W.customFirstTemplate || Pe)("ngTemplateOutletContext", i.WLB(4, v, W.noPrevious() || W.disabled, W.page));
  }
}
function w(G, se) {
  if (G & 1) {
    const W = i.EpF();
    i.TgZ(0, "li", 14)(1, "a", 12);
    i.NdJ("click", function (Le) {
      i.CHM(W);
      const he = i.oxw();
      return i.KtG(he.selectPage(he.page - 1, Le));
    });
    i.GkF(2, 13);
    i.qZA()();
  }
  if (G & 2) {
    const W = i.oxw();
    const Pe = i.MAs(11);
    i.ekj("disabled", W.noPrevious() || W.disabled);
    i.xp6(2);
    i.Q6J("ngTemplateOutlet", W.customPreviousTemplate || Pe)("ngTemplateOutletContext", i.WLB(4, v, W.noPrevious() || W.disabled, W.page));
  }
}
const S = function (G, se, W) {
  return {
    disabled: G,
    $implicit: se,
    currentPage: W
  };
};
function L(G, se) {
  if (G & 1) {
    const W = i.EpF();
    i.TgZ(0, "li", 15)(1, "a", 12);
    i.NdJ("click", function (Le) {
      const pe = i.CHM(W).$implicit;
      const re = i.oxw();
      return i.KtG(re.selectPage(pe.number, Le));
    });
    i.GkF(2, 13);
    i.qZA()();
  }
  if (G & 2) {
    const W = se.$implicit;
    const Pe = i.oxw();
    const Le = i.MAs(7);
    i.ekj("active", W.active)("disabled", Pe.disabled && !W.active);
    i.xp6(2);
    i.Q6J("ngTemplateOutlet", Pe.customPageTemplate || Le)("ngTemplateOutletContext", i.kEZ(6, S, Pe.disabled, W, Pe.page));
  }
}
function I(G, se) {
  if (G & 1) {
    const W = i.EpF();
    i.TgZ(0, "li", 16)(1, "a", 12);
    i.NdJ("click", function (Le) {
      i.CHM(W);
      const he = i.oxw();
      return i.KtG(he.selectPage(he.page + 1, Le));
    });
    i.GkF(2, 13);
    i.qZA()();
  }
  if (G & 2) {
    const W = i.oxw();
    const Pe = i.MAs(9);
    i.ekj("disabled", W.noNext() || W.disabled);
    i.xp6(2);
    i.Q6J("ngTemplateOutlet", W.customNextTemplate || Pe)("ngTemplateOutletContext", i.WLB(4, v, W.noNext() || W.disabled, W.page));
  }
}
function E(G, se) {
  if (G & 1) {
    const W = i.EpF();
    i.TgZ(0, "li", 17)(1, "a", 12);
    i.NdJ("click", function (Le) {
      i.CHM(W);
      const he = i.oxw();
      return i.KtG(he.selectPage(he.totalPages, Le));
    });
    i.GkF(2, 13);
    i.qZA()();
  }
  if (G & 2) {
    const W = i.oxw();
    const Pe = i.MAs(15);
    i.ekj("disabled", W.noNext() || W.disabled);
    i.xp6(2);
    i.Q6J("ngTemplateOutlet", W.customLastTemplate || Pe)("ngTemplateOutletContext", i.WLB(4, v, W.noNext() || W.disabled, W.page));
  }
}
function O(G, se) {
  if (G & 1) {
    i._uU(0);
  }
  if (G & 2) {
    i.Oqu(se.$implicit.text);
  }
}
function x(G, se) {
  if (G & 1) {
    i._uU(0);
  }
  if (G & 2) {
    const W = i.oxw();
    i.Oqu(W.getText("next"));
  }
}
function U(G, se) {
  if (G & 1) {
    i._uU(0);
  }
  if (G & 2) {
    const W = i.oxw();
    i.Oqu(W.getText("previous"));
  }
}
function B(G, se) {
  if (G & 1) {
    i._uU(0);
  }
  if (G & 2) {
    const W = i.oxw();
    i.Oqu(W.getText("first"));
  }
}
function F(G, se) {
  if (G & 1) {
    i._uU(0);
  }
  if (G & 2) {
    const W = i.oxw();
    i.Oqu(W.getText("last"));
  }
}
let Z = (() => {
  class G {
    constructor() {
      this.main = {
        itemsPerPage: 10,
        boundaryLinks: false,
        directionLinks: true,
        firstText: "First",
        previousText: "Previous",
        nextText: "Next",
        lastText: "Last",
        pageBtnClass: "",
        rotate: true
      };
      this.pager = {
        itemsPerPage: 15,
        previousText: "« Previous",
        nextText: "Next »",
        pageBtnClass: "",
        align: true
      };
    }
  }
  G.ɵfac = function (W) {
    return new (W || G)();
  };
  G.ɵprov = i.Yz7({
    token: G,
    factory: G.ɵfac,
    providedIn: "root"
  });
  return G;
})();
const X = {
  provide: t.JU,
  useExisting: (0, i.Gpc)(() => le),
  multi: true
};
let le = (() => {
  class G {
    constructor(W, Pe, Le) {
      this.elementRef = W;
      this.changeDetection = Le;
      this.align = false;
      this.boundaryLinks = false;
      this.directionLinks = true;
      this.firstText = "First";
      this.previousText = "« Previous";
      this.nextText = "Next »";
      this.lastText = "Last";
      this.rotate = true;
      this.pageBtnClass = "";
      this.disabled = false;
      this.numPages = new i.vpe();
      this.pageChanged = new i.vpe();
      this.onChange = Function.prototype;
      this.onTouched = Function.prototype;
      this.classMap = "";
      this.inited = false;
      this._itemsPerPage = 15;
      this._totalItems = 0;
      this._totalPages = 0;
      this._page = 1;
      this.elementRef = W;
      if (!this.config) {
        this.configureOptions(Object.assign({}, Pe.main, Pe.pager));
      }
    }
    get itemsPerPage() {
      return this._itemsPerPage;
    }
    set itemsPerPage(W) {
      this._itemsPerPage = W;
      this.totalPages = this.calculateTotalPages();
    }
    get totalItems() {
      return this._totalItems;
    }
    set totalItems(W) {
      this._totalItems = W;
      this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
      return this._totalPages;
    }
    set totalPages(W) {
      this._totalPages = W;
      this.numPages.emit(W);
      if (this.inited) {
        this.selectPage(this.page);
      }
    }
    get page() {
      return this._page;
    }
    set page(W) {
      const Pe = this._page;
      this._page = W > this.totalPages ? this.totalPages : W || 1;
      this.changeDetection.markForCheck();
      if (Pe !== this._page && typeof Pe !== "undefined") {
        this.pageChanged.emit({
          page: this._page,
          itemsPerPage: this.itemsPerPage
        });
      }
    }
    configureOptions(W) {
      this.config = Object.assign({}, W);
    }
    ngOnInit() {
      var Pe;
      var Le;
      var he;
      if (typeof window !== "undefined") {
        this.classMap = this.elementRef.nativeElement.getAttribute("class") || "";
      }
      if (typeof this.maxSize === "undefined") {
        this.maxSize = this.config?.maxSize || 0;
      }
      if (typeof this.rotate === "undefined") {
        this.rotate = (Pe = this.config) !== null && Pe !== undefined && !!Pe.rotate;
      }
      if (typeof this.boundaryLinks === "undefined") {
        this.boundaryLinks = (Le = this.config) !== null && Le !== undefined && !!Le.boundaryLinks;
      }
      if (typeof this.directionLinks === "undefined") {
        this.directionLinks = (he = this.config) !== null && he !== undefined && !!he.directionLinks;
      }
      if (typeof this.pageBtnClass === "undefined") {
        this.pageBtnClass = this.config?.pageBtnClass || "";
      }
      if (typeof this.itemsPerPage === "undefined") {
        this.itemsPerPage = this.config?.itemsPerPage || 0;
      }
      this.totalPages = this.calculateTotalPages();
      this.pages = this.getPages(this.page, this.totalPages);
      this.inited = true;
    }
    writeValue(W) {
      this.page = W;
      this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(W) {
      return this[`${W}Text`] || this.config[`${W}Text`];
    }
    noPrevious() {
      return this.page === 1;
    }
    noNext() {
      return this.page === this.totalPages;
    }
    registerOnChange(W) {
      this.onChange = W;
    }
    registerOnTouched(W) {
      this.onTouched = W;
    }
    selectPage(W, Pe) {
      if (Pe) {
        Pe.preventDefault();
      }
      if (!this.disabled) {
        if (Pe && Pe.target) {
          Pe.target.blur();
        }
        this.writeValue(W);
        this.onChange(this.page);
      }
    }
    makePage(W, Pe, Le) {
      return {
        text: Pe,
        number: W,
        active: Le
      };
    }
    getPages(W, Pe) {
      const Le = [];
      let he = 1;
      let pe = Pe;
      const re = typeof this.maxSize !== "undefined" && this.maxSize < Pe;
      if (re && this.maxSize) {
        if (this.rotate) {
          he = Math.max(W - Math.floor(this.maxSize / 2), 1);
          pe = he + this.maxSize - 1;
          if (pe > Pe) {
            pe = Pe;
            he = pe - this.maxSize + 1;
          }
        } else {
          he = (Math.ceil(W / this.maxSize) - 1) * this.maxSize + 1;
          pe = Math.min(he + this.maxSize - 1, Pe);
        }
      }
      for (let Re = he; Re <= pe; Re++) {
        const Ge = this.makePage(Re, Re.toString(), Re === W);
        Le.push(Ge);
      }
      if (re && !this.rotate) {
        if (he > 1) {
          const Re = this.makePage(he - 1, "...", false);
          Le.unshift(Re);
        }
        if (pe < Pe) {
          const Re = this.makePage(pe + 1, "...", false);
          Le.push(Re);
        }
      }
      return Le;
    }
    calculateTotalPages() {
      const W = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(W || 0, 1);
    }
  }
  G.ɵfac = function (W) {
    return new (W || G)(i.Y36(i.SBq), i.Y36(Z), i.Y36(i.sBO));
  };
  G.ɵcmp = i.Xpm({
    type: G,
    selectors: [["pager"]],
    inputs: {
      align: "align",
      maxSize: "maxSize",
      boundaryLinks: "boundaryLinks",
      directionLinks: "directionLinks",
      firstText: "firstText",
      previousText: "previousText",
      nextText: "nextText",
      lastText: "lastText",
      rotate: "rotate",
      pageBtnClass: "pageBtnClass",
      disabled: "disabled",
      itemsPerPage: "itemsPerPage",
      totalItems: "totalItems"
    },
    outputs: {
      numPages: "numPages",
      pageChanged: "pageChanged"
    },
    features: [i._Bn([X])],
    decls: 7,
    vars: 24,
    consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
    template: function (W, Pe) {
      if (W & 1) {
        i.TgZ(0, "ul", 0)(1, "li", 1)(2, "a", 2);
        i.NdJ("click", function (he) {
          return Pe.selectPage(Pe.page - 1, he);
        });
        i._uU(3);
        i.qZA()();
        i.TgZ(4, "li", 1)(5, "a", 2);
        i.NdJ("click", function (he) {
          return Pe.selectPage(Pe.page + 1, he);
        });
        i._uU(6);
        i.qZA()()();
      }
      if (W & 2) {
        i.xp6(1);
        i.Tol(Pe.pageBtnClass);
        i.ekj("disabled", Pe.noPrevious())("previous", Pe.align);
        i.Q6J("ngClass", i.WLB(18, k, Pe.align, Pe.align));
        i.xp6(2);
        i.Oqu(Pe.getText("previous"));
        i.xp6(1);
        i.Tol(Pe.pageBtnClass);
        i.ekj("disabled", Pe.noNext())("next", Pe.align);
        i.Q6J("ngClass", i.WLB(21, M, Pe.align, Pe.align));
        i.xp6(2);
        i.Oqu(Pe.getText("next"));
      }
    },
    dependencies: [b.mk],
    encapsulation: 2
  });
  return G;
})();
const fe = {
  provide: t.JU,
  useExisting: (0, i.Gpc)(() => q),
  multi: true
};
let q = (() => {
  class G {
    constructor(W, Pe, Le) {
      this.elementRef = W;
      this.changeDetection = Le;
      this.align = true;
      this.boundaryLinks = false;
      this.directionLinks = true;
      this.rotate = true;
      this.pageBtnClass = "";
      this.disabled = false;
      this.numPages = new i.vpe();
      this.pageChanged = new i.vpe();
      this.onChange = Function.prototype;
      this.onTouched = Function.prototype;
      this.classMap = "";
      this.inited = false;
      this._itemsPerPage = 10;
      this._totalItems = 0;
      this._totalPages = 0;
      this._page = 1;
      this.elementRef = W;
      if (!this.config) {
        this.configureOptions(Pe.main);
      }
    }
    get itemsPerPage() {
      return this._itemsPerPage;
    }
    set itemsPerPage(W) {
      this._itemsPerPage = W;
      this.totalPages = this.calculateTotalPages();
    }
    get totalItems() {
      return this._totalItems;
    }
    set totalItems(W) {
      this._totalItems = W;
      this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
      return this._totalPages;
    }
    set totalPages(W) {
      this._totalPages = W;
      this.numPages.emit(W);
      if (this.inited) {
        this.selectPage(this.page);
      }
    }
    get page() {
      return this._page;
    }
    set page(W) {
      const Pe = this._page;
      this._page = W > this.totalPages ? this.totalPages : W || 1;
      this.changeDetection.markForCheck();
      if (Pe !== this._page && typeof Pe !== "undefined") {
        this.pageChanged.emit({
          page: this._page,
          itemsPerPage: this.itemsPerPage
        });
      }
    }
    configureOptions(W) {
      this.config = Object.assign({}, W);
    }
    ngOnInit() {
      var Pe;
      var Le;
      var he;
      if (typeof window !== "undefined") {
        this.classMap = this.elementRef.nativeElement.getAttribute("class") || "";
      }
      if (typeof this.maxSize === "undefined") {
        this.maxSize = this.config?.maxSize || 0;
      }
      if (typeof this.rotate === "undefined") {
        this.rotate = (Pe = this.config) !== null && Pe !== undefined && !!Pe.rotate;
      }
      if (typeof this.boundaryLinks === "undefined") {
        this.boundaryLinks = (Le = this.config) !== null && Le !== undefined && !!Le.boundaryLinks;
      }
      if (typeof this.directionLinks === "undefined") {
        this.directionLinks = (he = this.config) !== null && he !== undefined && !!he.directionLinks;
      }
      if (typeof this.pageBtnClass === "undefined") {
        this.pageBtnClass = this.config?.pageBtnClass || "";
      }
      if (typeof this.itemsPerPage === "undefined") {
        this.itemsPerPage = this.config?.itemsPerPage || 0;
      }
      this.totalPages = this.calculateTotalPages();
      this.pages = this.getPages(this.page, this.totalPages);
      this.inited = true;
    }
    writeValue(W) {
      this.page = W;
      this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(W) {
      return this[`${W}Text`] || this.config[`${W}Text`];
    }
    noPrevious() {
      return this.page === 1;
    }
    noNext() {
      return this.page === this.totalPages;
    }
    registerOnChange(W) {
      this.onChange = W;
    }
    registerOnTouched(W) {
      this.onTouched = W;
    }
    selectPage(W, Pe) {
      if (Pe) {
        Pe.preventDefault();
      }
      if (!this.disabled) {
        if (Pe && Pe.target) {
          Pe.target.blur();
        }
        this.writeValue(W);
        this.onChange(this.page);
      }
    }
    makePage(W, Pe, Le) {
      return {
        text: Pe,
        number: W,
        active: Le
      };
    }
    getPages(W, Pe) {
      const Le = [];
      let he = 1;
      let pe = Pe;
      const re = typeof this.maxSize !== "undefined" && this.maxSize < Pe;
      if (re && this.maxSize) {
        if (this.rotate) {
          he = Math.max(W - Math.floor(this.maxSize / 2), 1);
          pe = he + this.maxSize - 1;
          if (pe > Pe) {
            pe = Pe;
            he = pe - this.maxSize + 1;
          }
        } else {
          he = (Math.ceil(W / this.maxSize) - 1) * this.maxSize + 1;
          pe = Math.min(he + this.maxSize - 1, Pe);
        }
      }
      for (let Re = he; Re <= pe; Re++) {
        const Ge = this.makePage(Re, Re.toString(), Re === W);
        Le.push(Ge);
      }
      if (re && !this.rotate) {
        if (he > 1) {
          const Re = this.makePage(he - 1, "...", false);
          Le.unshift(Re);
        }
        if (pe < Pe) {
          const Re = this.makePage(pe + 1, "...", false);
          Le.push(Re);
        }
      }
      return Le;
    }
    calculateTotalPages() {
      const W = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(W || 0, 1);
    }
  }
  G.ɵfac = function (W) {
    return new (W || G)(i.Y36(i.SBq), i.Y36(Z), i.Y36(i.sBO));
  };
  G.ɵcmp = i.Xpm({
    type: G,
    selectors: [["pagination"]],
    inputs: {
      align: "align",
      maxSize: "maxSize",
      boundaryLinks: "boundaryLinks",
      directionLinks: "directionLinks",
      firstText: "firstText",
      previousText: "previousText",
      nextText: "nextText",
      lastText: "lastText",
      rotate: "rotate",
      pageBtnClass: "pageBtnClass",
      disabled: "disabled",
      customPageTemplate: "customPageTemplate",
      customNextTemplate: "customNextTemplate",
      customPreviousTemplate: "customPreviousTemplate",
      customFirstTemplate: "customFirstTemplate",
      customLastTemplate: "customLastTemplate",
      itemsPerPage: "itemsPerPage",
      totalItems: "totalItems"
    },
    outputs: {
      numPages: "numPages",
      pageChanged: "pageChanged"
    },
    features: [i._Bn([fe])],
    decls: 16,
    vars: 6,
    consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
    template: function (W, Pe) {
      if (W & 1) {
        i.TgZ(0, "ul", 0);
        i.YNc(1, C, 3, 7, "li", 1);
        i.YNc(2, w, 3, 7, "li", 2);
        i.YNc(3, L, 3, 10, "li", 3);
        i.YNc(4, I, 3, 7, "li", 4);
        i.YNc(5, E, 3, 7, "li", 5);
        i.qZA();
        i.YNc(6, O, 1, 1, "ng-template", null, 6, i.W1O);
        i.YNc(8, x, 1, 1, "ng-template", null, 7, i.W1O);
        i.YNc(10, U, 1, 1, "ng-template", null, 8, i.W1O);
        i.YNc(12, B, 1, 1, "ng-template", null, 9, i.W1O);
        i.YNc(14, F, 1, 1, "ng-template", null, 10, i.W1O);
      }
      if (W & 2) {
        i.Q6J("ngClass", Pe.classMap);
        i.xp6(1);
        i.Q6J("ngIf", Pe.boundaryLinks);
        i.xp6(1);
        i.Q6J("ngIf", Pe.directionLinks);
        i.xp6(1);
        i.Q6J("ngForOf", Pe.pages);
        i.xp6(1);
        i.Q6J("ngIf", Pe.directionLinks);
        i.xp6(1);
        i.Q6J("ngIf", Pe.boundaryLinks);
      }
    },
    dependencies: [b.mk, b.sg, b.O5, b.tP],
    encapsulation: 2
  });
  return G;
})();
export let u3 = (() => {
  class G {
    static forRoot() {
      return {
        ngModule: G,
        providers: []
      };
    }
  }
  G.ɵfac = function (W) {
    return new (W || G)();
  };
  G.ɵmod = i.oAB({
    type: G
  });
  G.ɵinj = i.cJS({
    imports: [b.ez]
  });
  return G;
})();