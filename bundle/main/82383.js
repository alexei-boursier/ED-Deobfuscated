import * as t from "94650";
import * as b from "36895";
const k = ["edAutocompleteMenu"];
function M(w, S) {
  if (w & 1) {
    const L = t.EpF();
    t.TgZ(0, "li", 4)(1, "button", 5);
    t.NdJ("click", function (E) {
      const x = t.CHM(L).$implicit;
      t.oxw(2).selectChoice.next(x);
      return t.KtG(E.preventDefault());
    });
    t._UZ(2, "span", 6);
    t.qZA()();
  }
  if (w & 2) {
    const L = S.$implicit;
    const I = t.oxw(2);
    t.ekj("active", I.activeChoice === L);
    t.xp6(2);
    t.Q6J("innerHTML", L.innerHTML, t.oJD);
  }
}
function v(w, S) {
  if (w & 1) {
    t.ynx(0);
    t.TgZ(1, "ul", 1, 2);
    t.YNc(3, M, 3, 3, "li", 3);
    t.qZA();
    t.BQk();
  }
  if (w & 2) {
    const L = t.oxw();
    t.xp6(1);
    t.Udp("width", L.position == null ? null : L.position.width, "px")("top", L.position == null ? null : L.position.top, "px")("left", L.position == null ? null : L.position.left, "px");
    t.xp6(2);
    t.Q6J("ngForOf", L.choices)("ngForTrackBy", L.trackById);
  }
}
export let a = (() => {
  class w {
    constructor() {
      this.selectChoice = new i.x();
      this.choiceLoading = false;
      this.trackById = (L, I) => typeof I.id !== "undefined" ? I.id : I;
    }
    set choices(L) {
      this._choices = L;
      if (L.indexOf(this.activeChoice) === -1 && L.length > 0) {
        this.activeChoice = L[0];
      }
    }
    get choices() {
      return this._choices;
    }
    onArrowDown(L) {
      L.preventDefault();
      const I = this.choices.indexOf(this.activeChoice);
      if (this.choices[I + 1]) {
        this.scrollToChoice(I + 1);
      }
    }
    onArrowUp(L) {
      L.preventDefault();
      const I = this.choices.indexOf(this.activeChoice);
      if (this.choices[I - 1]) {
        this.scrollToChoice(I - 1);
      }
    }
    onEnter(L) {
      if (Object.isExists(this.choices) && this.choices.length > 0) {
        L.preventDefault();
        if (this.choices.indexOf(this.activeChoice) > -1) {
          this.selectChoice.next(this.activeChoice);
        }
      }
    }
    scrollToChoice(L) {
      this.activeChoice = this._choices[L];
      if (this.dropdownMenuElement) {
        const I = this.dropdownMenuElement.nativeElement.getBoundingClientRect();
        const E = this.dropdownMenuElement.nativeElement.children[L];
        const O = E.getBoundingClientRect();
        if (O.top < I.top || O.bottom > I.bottom) {
          E.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }
      }
    }
  }
  w.ɵfac = function (L) {
    return new (L || w)();
  };
  w.ɵcmp = t.Xpm({
    type: w,
    selectors: [["ed-text-input-autocomplete-menu"]],
    viewQuery: function (L, I) {
      if (L & 1) {
        t.Gf(k, 5);
      }
      if (L & 2) {
        let E;
        if (t.iGM(E = t.CRH())) {
          I.dropdownMenuElement = E.first;
        }
      }
    },
    hostBindings: function (L, I) {
      if (L & 1) {
        t.NdJ("keydown.ArrowDown", function (O) {
          return I.onArrowDown(O);
        })("keydown.ArrowUp", function (O) {
          return I.onArrowUp(O);
        })("keydown.Enter", function (O) {
          return I.onEnter(O);
        });
      }
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["role", "menu", 1, "dropdown-menu", "autocomplete"], ["edAutocompleteMenu", ""], ["role", "menuitem", 3, "active", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "menuitem"], ["type", "button", 1, "btn", "btn-link", "w-100", 3, "click"], [3, "innerHTML"]],
    template: function (L, I) {
      if (L & 1) {
        t.YNc(0, v, 4, 8, "ng-container", 0);
      }
      if (L & 2) {
        t.Q6J("ngIf", (I.choices == null ? null : I.choices.length) > 0);
      }
    },
    dependencies: [b.sg, b.O5],
    styles: [".autocomplete[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 14px #0003;display:block;max-height:200px;overflow-y:auto;padding:0}.autocomplete[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{cursor:pointer;border-bottom:1px solid var(--dark-placeholder-color);padding:10px}.autocomplete[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{white-space:normal}.autocomplete[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child{border-bottom:none}.autocomplete[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > button[_ngcontent-%COMP%], .autocomplete[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:focus, .autocomplete[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{color:#000;background-color:#ededed}"]
  });
  return w;
})();