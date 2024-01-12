import * as k from "94650";
export let I = (() => {
  class v extends (0, i.kCV)() {
    constructor() {
      super();
      this.colors = ["#F00", "#F90", "#FF0", "#9F0", "#0F0"];
    }
    measureStrength(w) {
      if (typeof w === "undefined") {
        return 0;
      }
      let S = 0;
      const B = [/[a-z]+/.test(w), /[A-Z]+/.test(w), /[0-9]+/.test(w), /[$-/:-?{-~!"^_`\[\]]/g.test(w)].filter(Z => Z).length;
      S += w.length * 2 + (w.length >= 10 ? 1 : 0);
      S += B * 10;
      S = w.length <= 4 ? Math.min(S, 10) : S;
      const F = this.niveauMDP === 2 ? 8 : 10;
      S = B === 2 && w.length < 8 ? Math.min(S, 10) : S;
      S = B >= 3 && w.length < F ? Math.min(S, 10) : S;
      S = B === 1 ? Math.min(S, 10) : S;
      S = B === 2 ? Math.min(S, 20) : S;
      S = B === 3 ? Math.min(S, 40) : S;
      return S;
    }
    removeFormError(w, S) {
      if (w.hasError(S)) {
        delete w.errors[S];
        w.updateValueAndValidity();
      }
    }
    addFormError(w, S) {
      if (!w.hasError(S)) {
        w.setErrors({
          ...w.errors,
          [S]: true
        }, {
          emitEvent: true
        });
      }
    }
    ngOnChanges(w) {
      if (w.controlToValidate) {
        if (this._sub) {
          this._sub.unsubscribe();
        }
        if (Object.isExists(this.controlToValidate)) {
          this._sub = this.controlToValidate.valueChanges.pipe((0, t.b)(300), (0, b.R)(this.componentDestroyed$)).subscribe(S => this.passwordToCheck(S));
        }
      }
    }
    passwordToCheck(w) {
      this.setBarColors(5, "#DDD");
      if (w) {
        const S = this.getColor(this.measureStrength(w));
        this.setBarColors(S.idx, S.col);
        if (S.idx >= this.niveauMDP) {
          this.removeFormError(this.controlToValidate, "niveau");
        } else {
          this.addFormError(this.controlToValidate, "niveau");
        }
      }
    }
    getColor(w) {
      let S = 0;
      S = w <= 10 ? 0 : w <= 20 ? 1 : w <= 30 ? 2 : w <= 40 ? 3 : 4;
      return {
        idx: S + 1,
        col: this.colors[S]
      };
    }
    setBarColors(w, S) {
      for (let L = 0; L < w; L++) {
        this["bar" + L] = S;
      }
    }
  }
  v.ɵfac = function (w) {
    return new (w || v)();
  };
  v.ɵcmp = k.Xpm({
    type: v,
    selectors: [["ed-password-strength-bar"]],
    inputs: {
      controlToValidate: "controlToValidate",
      niveauMDP: "niveauMDP"
    },
    features: [k.qOj, k.TTD],
    decls: 8,
    vars: 10,
    consts: [["id", "strength"], ["strength", ""], ["id", "strengthBar"], [1, "point"]],
    template: function (w, S) {
      if (w & 1) {
        k.TgZ(0, "div", 0, 1)(2, "ul", 2);
        k._UZ(3, "li", 3)(4, "li", 3)(5, "li", 3)(6, "li", 3)(7, "li", 3);
        k.qZA()();
      }
      if (w & 2) {
        k.xp6(3);
        k.Udp("background-color", S.bar0);
        k.xp6(1);
        k.Udp("background-color", S.bar1);
        k.xp6(1);
        k.Udp("background-color", S.bar2);
        k.xp6(1);
        k.Udp("background-color", S.bar3);
        k.xp6(1);
        k.Udp("background-color", S.bar4);
      }
    },
    styles: ["ul#strengthBar[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0 0 0 15px;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]:last-child{margin:0!important}.point[_ngcontent-%COMP%]{background:#DDD;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:20px}"]
  });
  return v;
})();