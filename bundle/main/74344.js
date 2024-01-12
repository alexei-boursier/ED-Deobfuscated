import * as i from "94650";
import * as t from "24006";
import * as b from "36895";
const v = ["inputElement"];
function C(E, O) {
  if (E & 1) {
    const x = i.EpF();
    i.TgZ(0, "div", 6);
    i._uU(1);
    i.TgZ(2, "button", 7);
    i.NdJ("click", function (B) {
      const Z = i.CHM(x).$implicit;
      const X = i.oxw();
      return i.KtG(X.removeTag(Z, B));
    });
    i._UZ(3, "i", 8);
    i.qZA()();
  }
  if (E & 2) {
    const x = O.$implicit;
    i.xp6(1);
    i.hij(" ", x, " ");
    i.xp6(1);
    i.MGl("title", "Supprimer '", x, "'");
  }
}
function w(E, O) {
  if (E & 1) {
    const x = i.EpF();
    i.TgZ(0, "button", 11);
    i.NdJ("click", function () {
      const F = i.CHM(x).$implicit;
      const Z = i.oxw(2);
      return i.KtG(Z.addSuggestedTag(F));
    });
    i._uU(1);
    i.qZA();
  }
  if (E & 2) {
    const x = O.$implicit;
    i.xp6(1);
    i.hij(" ", x, " ");
  }
}
function S(E, O) {
  if (E & 1) {
    i.TgZ(0, "div", 9);
    i.YNc(1, w, 2, 1, "button", 10);
    i.ALo(2, "trackByProperty");
    i.qZA();
  }
  if (E & 2) {
    const x = i.oxw();
    i.xp6(1);
    i.Q6J("ngForOf", x.tagSuggestions)("ngForTrackBy", i.lcZ(2, 2, "$index"));
  }
}
var L = (() => {
  (E = L ||= {})[E.Backspace = 8] = "Backspace";
  E[E.Tab = 9] = "Tab";
  E[E.Enter = 13] = "Enter";
  E[E.Escape = 27] = "Escape";
  E[E.LeftArrow = 37] = "LeftArrow";
  E[E.UpArrow = 38] = "UpArrow";
  E[E.RightArrow = 39] = "RightArrow";
  E[E.DownArrow = 40] = "DownArrow";
  E[E.Comma = 188] = "Comma";
  return L;
  var E;
})();
export let $ = (() => {
  class E {
    constructor() {
      this.tagSuggestions = [];
      this.maxTagLength = 100;
      this.maxNumberOfTags = 50;
      this.textChange = new i.vpe();
      this._value = [];
      this.prevTagInput = "";
      this.currentNumberOfTags = 0;
      this.tagError = null;
    }
    get value() {
      return this._value;
    }
    set value(x) {
      this._value = x;
      if (typeof this.onChange == "function") {
        this.onChange(x);
      }
      if (typeof this.onTouched == "function") {
        this.onTouched();
      }
    }
    registerOnChange(x) {
      this.onChange = x;
    }
    registerOnTouched(x) {
      this.onTouched = x;
    }
    writeValue(x) {
      if (Array.isArray(x ?? [])) {
        this.value = x;
        this.setCurrentNumberOfTags();
      }
    }
    validate() {
      return this.tagError;
    }
    onEnter(x) {
      if (x.key === "Enter" || x.code === "Enter") {
        this.addTagClick(x, this.inputElement.nativeElement.value);
      }
    }
    handleClick(x) {
      if (this.inputElement && !this.inputElement.nativeElement.contains(x.target) && this.inputElement.nativeElement.value) {
        this.addTag(this.inputElement.nativeElement.value);
      }
    }
    addTag(x) {
      const U = x.length === 0;
      const B = !x.length || this.maxTagLength && x.length > this.maxTagLength;
      const F = this.value.indexOf(x) > -1;
      const Z = this.currentNumberOfTags >= this.maxNumberOfTags;
      if (!U && B) {
        this.tagError = {
          message: `Le mot ne peut pas d\xe9passer ${this.maxTagLength} caract\xe8res`
        };
      }
      if (F) {
        this.tagError = {
          message: "Impossible d'ajouter 2 fois le même mot"
        };
      }
      if (Z) {
        this.tagError = {
          message: `Vous ne pouvez ajouter qu'au maximum ${this.maxNumberOfTags} mot${this.maxNumberOfTags === 1 ? "" : "s"}`
        };
      }
      if (!U && !B && !F && !Z && this.inputElement) {
        this.tagError = null;
        this.value.push(x);
        this.setCurrentNumberOfTags();
        this.inputElement.nativeElement.value = "";
      }
      this.value = this._value;
      this.focus();
    }
    addTagEvent(x) {
      const U = x.target;
      this.tagError = null;
      this.value = this._value;
      this.textChange.emit(U.value);
      if (x.keyCode === L.Backspace && this.prevTagInput.length === 0) {
        this._value.pop();
        this.setCurrentNumberOfTags();
      } else if (x.keyCode === L.Enter || x.keyCode === L.Comma || x.keyCode === L.Tab) {
        this.addTag(U.value);
      }
      this.prevTagInput = U.value;
    }
    preventDefaultTabBehavior(x) {
      if (x.keyCode === L.Tab && this.prevTagInput.length > 0) {
        x.preventDefault();
      }
    }
    addTagClick(x, U) {
      x.preventDefault();
      if (U.length > 0) {
        this.addTag(U);
      }
    }
    addSuggestedTag(x) {
      this.addTag(x);
    }
    removeTag(x, U) {
      if (U.keyCode !== L.Enter) {
        this.value = this._value.filter(B => B !== x);
        this.setCurrentNumberOfTags();
      }
    }
    focus() {
      this.inputElement?.nativeElement.focus();
    }
    setCurrentNumberOfTags() {
      this.currentNumberOfTags = this.value.length ? this.value.toString().split(",").length : 0;
    }
  }
  E.ɵfac = function (x) {
    return new (x || E)();
  };
  E.ɵcmp = i.Xpm({
    type: E,
    selectors: [["ed-input-tags"]],
    viewQuery: function (x, U) {
      if (x & 1) {
        i.Gf(v, 5);
      }
      if (x & 2) {
        let B;
        if (i.iGM(B = i.CRH())) {
          U.inputElement = B.first;
        }
      }
    },
    hostBindings: function (x, U) {
      if (x & 1) {
        i.NdJ("keydown.Enter", function (F) {
          return U.onEnter(F);
        })("click", function (F) {
          return U.handleClick(F);
        }, false, i.evT);
      }
    },
    inputs: {
      tagSuggestions: "tagSuggestions",
      maxTagLength: "maxTagLength",
      maxNumberOfTags: "maxNumberOfTags"
    },
    outputs: {
      textChange: "textChange"
    },
    features: [i._Bn([{
      provide: t.JU,
      useExisting: (0, i.Gpc)(() => E),
      multi: true
    }, {
      provide: t.Cf,
      useExisting: (0, i.Gpc)(() => E),
      multi: true
    }])],
    decls: 8,
    vars: 7,
    consts: [["aria-hidden", "true", 1, "ed-input-tags", 3, "click"], ["class", "ed-input-tags__tag", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["edAutofocus", "", "type", "text", "aria-label", "Tags", 1, "ed-input-tags__input", 3, "keyup", "keydown"], ["inputElement", ""], ["type", "button", "aria-label", "Add Tag", "title", "Ajouter un élément", 1, "ed-input-tags__btn", "btn-primary", 3, "click"], ["class", "ed-input-tags-suggestions", 4, "ngIf"], [1, "ed-input-tags__tag"], ["type", "button", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-close", "text-danger"], [1, "ed-input-tags-suggestions"], ["type", "button", "title", "Ajouter l'élément suggéré", "class", "ed-input-tags-suggestions__tag", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "title", "Ajouter l'élément suggéré", 1, "ed-input-tags-suggestions__tag", 3, "click"]],
    template: function (x, U) {
      if (x & 1) {
        const B = i.EpF();
        i.TgZ(0, "div", 0);
        i.NdJ("click", function () {
          return U.focus();
        });
        i.YNc(1, C, 4, 2, "div", 1);
        i.ALo(2, "trackByProperty");
        i.TgZ(3, "input", 2, 3);
        i.NdJ("keyup", function (Z) {
          return U.addTagEvent(Z);
        })("keydown", function (Z) {
          return U.preventDefaultTabBehavior(Z);
        });
        i.qZA();
        i.TgZ(5, "button", 4);
        i.NdJ("click", function (Z) {
          i.CHM(B);
          const X = i.MAs(4);
          return i.KtG(U.addTagClick(Z, X.value));
        });
        i._uU(6, " + ");
        i.qZA()();
        i.YNc(7, S, 3, 4, "div", 5);
      }
      if (x & 2) {
        const B = i.MAs(4);
        i.xp6(1);
        i.Q6J("ngForOf", U.value)("ngForTrackBy", i.lcZ(2, 5, "$index"));
        i.xp6(2);
        i.Udp("width", B.value.length * 10 + 10 + "px");
        i.xp6(4);
        i.Q6J("ngIf", B.value.length && U.tagSuggestions && U.tagSuggestions.length);
      }
    },
    dependencies: [b.sg, b.O5, k.U, M.$],
    styles: ["[_nghost-%COMP%]{display:inline-block;margin-bottom:12px;width:100%}.ed-input-tags[_ngcontent-%COMP%]{padding:5px 80px 4.5px 4px;position:relative;margin-bottom:0;border:1px solid #dbdbdb;border-radius:.5rem;background-color:#fff;font-size:16px}.ed-input-tags[_ngcontent-%COMP%]:focus{outline:initial}.ed-input-tags__input[_ngcontent-%COMP%]{border:0;padding:4px 0;outline:none;width:8px;max-width:calc(100% + 70px);margin-left:4px;min-width:4px;margin-bottom:0;font-size:16px;min-height:29px}.ed-input-tags__tag[_ngcontent-%COMP%]{display:inline-block;background-color:#eceff1;padding:4px;margin-right:4px;border-radius:.5rem;height:29px;line-height:18px}.ed-input-tags__tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{opacity:.5;background:transparent;border:0;cursor:pointer;color:#ccc}.ed-input-tags__tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1}.ed-input-tags__btn[_ngcontent-%COMP%]{position:absolute;width:50px;color:#fff;background-color:var(--light-primary-color);top:-1px;right:-1px;cursor:pointer;border-radius:.5rem;font-size:30px}.ed-input-tags-suggestions[_ngcontent-%COMP%]{border:1px solid #dbdbdb;background-color:#fff;border-radius:.5rem}.ed-input-tags-suggestions__tag[_ngcontent-%COMP%]{padding:10px 14px;border:0;background:transparent;display:block;cursor:pointer;width:100%;text-align:left}.ed-input-tags-suggestions__tag[_ngcontent-%COMP%]:hover{background:#f2f2f2}"],
    changeDetection: 0
  });
  return E;
})();