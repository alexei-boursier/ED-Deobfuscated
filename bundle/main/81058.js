import * as i from "94650";
import * as b from "36895";
function k(le, fe) {
  if (le & 1) {
    i.GkF(0);
  }
}
const M = function (le, fe) {
  return {
    $implicit: le,
    error: fe
  };
};
function v(le, fe) {
  if (le & 1) {
    i.TgZ(0, "div");
    i.YNc(1, k, 1, 0, "ng-container", 2);
    i.qZA();
  }
  if (le & 2) {
    const q = fe.$implicit;
    const j = i.oxw(3);
    i.Tol(j.errorClasses);
    i.xp6(1);
    i.Q6J("ngTemplateOutlet", q.templateRef)("ngTemplateOutletContext", i.WLB(4, M, j.label, j.actualControl.errors[q.type]));
  }
}
function C(le, fe) {
  if (le & 1) {
    i.GkF(0);
  }
}
const w = function (le, fe, q) {
  return {
    $implicit: le,
    type: fe,
    error: q
  };
};
function S(le, fe) {
  if (le & 1) {
    i.TgZ(0, "div");
    i.YNc(1, C, 1, 0, "ng-container", 2);
    i.qZA();
  }
  if (le & 2) {
    const q = fe.$implicit;
    const j = i.oxw().ngIf;
    const G = i.oxw(2);
    i.Tol(G.errorClasses);
    i.xp6(1);
    i.Q6J("ngTemplateOutlet", j.fallback.templateRef)("ngTemplateOutletContext", i.kEZ(4, w, G.label, q.type, q.value));
  }
}
function L(le, fe) {
  if (le & 1) {
    i.ynx(0);
    i.YNc(1, v, 2, 7, "div", 1);
    i.YNc(2, S, 2, 8, "div", 1);
    i.BQk();
  }
  if (le & 2) {
    const q = fe.ngIf;
    i.xp6(1);
    i.Q6J("ngForOf", q.errors);
    i.xp6(1);
    i.Q6J("ngForOf", q.fallbackErrors);
  }
}
function I(le, fe) {
  if (le & 1) {
    i.ynx(0);
    i.YNc(1, L, 3, 2, "ng-container", 0);
    i.BQk();
  }
  if (le & 2) {
    const q = i.oxw();
    i.xp6(1);
    i.Q6J("ngIf", q.errorsToDisplay);
  }
}
export let HY = (() => {
  class le {
    constructor(q) {
      this.templateRef = q;
      this.type = "";
    }
    static ngTemplateContextGuard(q, j) {
      return true;
    }
  }
  le.ɵfac = function (q) {
    return new (q || le)(i.Y36(i.Rgc));
  };
  le.ɵdir = i.lG2({
    type: le,
    selectors: [["ng-template", "valError", ""]],
    inputs: {
      type: ["valError", "type"]
    }
  });
  return le;
})();
let O = (() => {
  class le {
    constructor(q) {
      this.templateRef = q;
    }
    static ngTemplateContextGuard(q, j) {
      return true;
    }
  }
  le.ɵfac = function (q) {
    return new (q || le)(i.Y36(i.Rgc));
  };
  le.ɵdir = i.lG2({
    type: le,
    selectors: [["ng-template", "valFallback", ""]]
  });
  return le;
})();
let x = (() => {
  class le {
    constructor() {
      this.directives = [];
    }
  }
  le.ɵfac = function (q) {
    return new (q || le)();
  };
  le.ɵprov = i.Yz7({
    token: le,
    factory: le.ɵfac,
    providedIn: "root"
  });
  return le;
})();
var B = (() => {
  (le = B ||= {})[le.ALL = 0] = "ALL";
  le[le.ONE = 1] = "ONE";
  return B;
  var le;
})();
export let nL = (() => {
  class le {
    constructor() {
      this.displayMode = B.ALL;
      this.errorsClasses = null;
      this.errorClasses = null;
      this.shouldDisplayErrors = (q, j) => q.touched || !!j && j.submitted;
      this.shouldThrowOnMissingControl = () => false;
    }
  }
  le.ɵfac = function (q) {
    return new (q || le)();
  };
  le.ɵprov = i.Yz7({
    token: le,
    factory: le.ɵfac,
    providedIn: "root"
  });
  return le;
})();
export let tM = (() => {
  class le {
    constructor(q, j, G) {
      this.config = q;
      this.defaultValidationErrors = j;
      this.controlContainer = G;
      this.control = null;
      this.controlName = null;
      this.label = null;
    }
    get shouldDisplayErrors() {
      const q = this.actualControl;
      return !!q && !!q.invalid && !!this.hasDisplayableError(q) && this.config.shouldDisplayErrors(q, this.controlContainer && this.controlContainer.formDirective);
    }
    get errorsClasses() {
      return this.config.errorsClasses || "";
    }
    get errorClasses() {
      return this.config.errorClasses || "";
    }
    get errorsToDisplay() {
      const j = [];
      const G = [];
      const se = new Set();
      const W = () => this.config.displayMode === B.ALL || j.length === 0 && G.length === 0;
      const Pe = this.actualControl;
      for (let he = 0; he < this.defaultValidationErrors.directives.length && W(); he++) {
        const pe = this.defaultValidationErrors.directives[he];
        if (Pe.hasError(pe.type)) {
          const re = this.errorDirectives.find(Re => Re.type === pe.type);
          j.push(re || pe);
        }
        se.add(pe.type);
      }
      if (W()) {
        const he = this.errorDirectives.toArray();
        for (let pe = 0; pe < he.length && W(); pe++) {
          const re = he[pe];
          if (Pe.hasError(re.type) && !se.has(re.type)) {
            j.push(re);
          }
          se.add(re.type);
        }
      }
      if (W() && (this.fallbackDirective || this.defaultValidationErrors.fallback)) {
        const he = Object.entries(Pe.errors ?? []);
        for (let pe = 0; pe < he.length && W(); pe++) {
          const [re, Re] = he[pe];
          if (!se.has(re)) {
            G.push({
              type: re,
              value: Re
            });
          }
        }
      }
      return {
        errors: j,
        fallback: this.fallbackDirective ?? this.defaultValidationErrors.fallback,
        fallbackErrors: G
      };
    }
    get actualControl() {
      var q;
      if (this.control) {
        return this.control;
      }
      if ((this.controlName || this.controlName === 0) && (q = this.controlContainer.control) !== null && q !== undefined && q.controls) {
        const G = this.controlContainer.control.controls[this.controlName];
        if (this.config.shouldThrowOnMissingControl() && !G && Object.keys(this.controlContainer.control?.controls).length > 0) {
          throw new Error(`ngx-valdemort: no control found for controlName: '${this.controlName}'.`);
        }
        return G;
      }
      return null;
    }
    hasDisplayableError(q) {
      return q.errors && (this.fallbackDirective || this.defaultValidationErrors.fallback || Object.keys(q.errors).some(j => this.defaultValidationErrors.directives.some(G => G.type === j) || this.errorDirectives.some(G => G.type === j)));
    }
  }
  le.ɵfac = function (q) {
    return new (q || le)(i.Y36(nL), i.Y36(x), i.Y36(t.gN, 8));
  };
  le.ɵcmp = i.Xpm({
    type: le,
    selectors: [["val-errors"]],
    contentQueries: function (q, j, G) {
      if (q & 1) {
        i.Suo(G, O, 5);
        i.Suo(G, HY, 4);
      }
      if (q & 2) {
        let se;
        if (i.iGM(se = i.CRH())) {
          j.fallbackDirective = se.first;
        }
        if (i.iGM(se = i.CRH())) {
          j.errorDirectives = se;
        }
      }
    },
    hostVars: 4,
    hostBindings: function (q, j) {
      if (q & 2) {
        i.Tol(j.errorsClasses);
        i.Udp("display", j.shouldDisplayErrors ? "" : "none");
      }
    },
    inputs: {
      control: "control",
      controlName: "controlName",
      label: "label"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function (q, j) {
      if (q & 1) {
        i.YNc(0, I, 2, 1, "ng-container", 0);
      }
      if (q & 2) {
        i.Q6J("ngIf", j.shouldDisplayErrors);
      }
    },
    dependencies: [b.sg, b.O5, b.tP],
    encapsulation: 2
  });
  return le;
})();
export let bQ = (() => {
  class le {}
  le.ɵfac = function (q) {
    return new (q || le)();
  };
  le.ɵmod = i.oAB({
    type: le
  });
  le.ɵinj = i.cJS({
    imports: [b.ez]
  });
  return le;
})();