import * as i from "94650";
import _default from "46747";
export let V = (() => {
  class L {
    constructor(E, O, x) {
      this.elm = E;
      this.injector = O;
      this.viewContainerRef = x;
      this.menuHidden$ = new t.x();
      this.closeMenuOnBlur = true;
      this.menuComponent = C.a;
      this.getChoiceLabel = U => U.value;
      this.menuShown = new i.vpe();
      this.menuHidden = new i.vpe();
      this.choiceSelected = new i.vpe();
    }
    ngOnDestroy() {
      this.hideMenu();
    }
    onEscape(E) {
      if ((E.key === "Escape" || E.code === "Escape") && this.menu) {
        this.hideMenu();
      }
    }
    onChange(E) {
      if (!this.menu && w.FSr.isNotEmptyString(E, true) && E.length >= 2) {
        this.showMenu();
      }
      if (this.menu) {
        if (E.length < 2) {
          this.hideMenu();
        } else {
          this.menu.instance.searchText = E;
          this.menu.instance.choices = [];
          this.menu.instance.choiceLoadError = undefined;
          this.menu.instance.choiceLoading = true;
          this.menu.changeDetectorRef.detectChanges();
          Promise.resolve(this.findChoices(E)).then(O => {
            if (this.menu) {
              this.menu.instance.choices = O;
              this.menu.instance.choiceLoading = false;
              this.menu.changeDetectorRef.detectChanges();
            }
          }).catch(O => {
            if (this.menu) {
              this.menu.instance.choiceLoading = false;
              this.menu.instance.choiceLoadError = O;
              this.menu.changeDetectorRef.detectChanges();
            }
          });
        }
      }
    }
    onBlur() {
      if (this.menu && this.closeMenuOnBlur === true) {
        setTimeout(() => this.hideMenu(), 400);
      }
    }
    showMenu() {
      if (!this.menu) {
        this.menu = this.viewContainerRef.createComponent(this.menuComponent, {
          index: 0,
          injector: this.injector
        });
        const E = this.getLineHeight(this.elm.nativeElement);
        const {
          top: O,
          left: x
        } = v.Fj.getRelativePosition(this.elm.nativeElement);
        this.menu.instance.position = {
          top: O + E,
          left: x,
          width: this.elm.nativeElement.offsetWidth
        };
        this.menu.changeDetectorRef.detectChanges();
        this.menu.instance.selectChoice.pipe((0, b.R)(this.menuHidden$)).subscribe(U => {
          const B = this.elm.nativeElement;
          B.value = this.getChoiceLabel(U);
          B.dispatchEvent(new Event("input"));
          this.hideMenu();
          B.focus();
          this.choiceSelected.emit(U);
        });
        this.menuShown.emit();
      }
    }
    getLineHeight(E) {
      const O = getComputedStyle(E).lineHeight || "";
      const x = getComputedStyle(E).fontSize || "";
      const U = +_default(x);
      const F = parseFloat(O);
      if (O === F + "") {
        return U * F;
      } else if (O.toLowerCase() === "normal") {
        return U * 1.2;
      } else {
        return _default(O);
      }
    }
    hideMenu() {
      if (this.menu) {
        this.menu.destroy();
        this.menuHidden$.next();
        this.menuHidden.emit();
        this.menu = undefined;
      }
    }
  }
  L.ɵfac = function (E) {
    return new (E || L)(i.Y36(i.SBq), i.Y36(i.zs3), i.Y36(i.s_b));
  };
  L.ɵdir = i.lG2({
    type: L,
    selectors: [["textarea", "edTextInputAutocomplete", ""], ["input", "type", "text", "edTextInputAutocomplete", ""]],
    hostBindings: function (E, O) {
      if (E & 1) {
        i.NdJ("keydown.Escape", function (U) {
          return O.onEscape(U);
        })("input", function (U) {
          return O.onChange(U.target.value);
        })("blur", function () {
          return O.onBlur();
        });
      }
    },
    inputs: {
      closeMenuOnBlur: "closeMenuOnBlur",
      menuComponent: "menuComponent",
      findChoices: "findChoices",
      getChoiceLabel: "getChoiceLabel"
    },
    outputs: {
      menuShown: "menuShown",
      menuHidden: "menuHidden",
      choiceSelected: "choiceSelected"
    }
  });
  return L;
})();