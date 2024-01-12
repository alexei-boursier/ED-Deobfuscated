import * as i from "36895";
/**
       * @license Angular v14.2.11
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
import * as t from "94650";
class b extends i.w_ {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class k extends b {
  static makeCurrent() {
    (0, i.HT)(new k());
  }
  onAndCancel(pn, An, si) {
    pn.addEventListener(An, si, false);
    return () => {
      pn.removeEventListener(An, si, false);
    };
  }
  dispatchEvent(pn, An) {
    pn.dispatchEvent(An);
  }
  remove(pn) {
    if (pn.parentNode) {
      pn.parentNode.removeChild(pn);
    }
  }
  createElement(pn, An) {
    return (An = An || this.getDefaultDocument()).createElement(pn);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument("fakeTitle");
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(pn) {
    return pn.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(pn) {
    return pn instanceof DocumentFragment;
  }
  getGlobalEventTarget(pn, An) {
    if (An === "window") {
      return window;
    } else if (An === "document") {
      return pn;
    } else if (An === "body") {
      return pn.body;
    } else {
      return null;
    }
  }
  getBaseHref(pn) {
    const An = function v() {
      M = M || document.querySelector("base");
      if (M) {
        return M.getAttribute("href");
      } else {
        return null;
      }
    }();
    if (An == null) {
      return null;
    } else {
      return function w(bn) {
        C = C || document.createElement("a");
        C.setAttribute("href", bn);
        const pn = C.pathname;
        if (pn.charAt(0) === "/") {
          return pn;
        } else {
          return `/${pn}`;
        }
      }
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */(An);
    }
  }
  resetBaseElement() {
    M = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(pn) {
    return (0, i.Mx)(document.cookie, pn);
  }
}
let C;
let M = null;
const S = new t.OlP("TRANSITION_ID");
const I = [{
  provide: t.ip1,
  useFactory: function L(bn, pn, An) {
    return () => {
      An.get(t.CZH).donePromise.then(() => {
        const si = (0, i.q)();
        const Di = pn.querySelectorAll(`style[ng-transition="${bn}"]`);
        for (let dr = 0; dr < Di.length; dr++) {
          si.remove(Di[dr]);
        }
      });
    };
  },
  deps: [S, i.K0, t.zs3],
  multi: true
}];
let O = (() => {
  class bn {
    build() {
      return new XMLHttpRequest();
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)();
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: bn.ɵfac
  });
  return bn;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const x = new t.OlP("EventManagerPlugins");
let U = (() => {
  class bn {
    constructor(An, si) {
      this._zone = si;
      this._eventNameToPlugin = new Map();
      An.forEach(Di => Di.manager = this);
      this._plugins = An.slice().reverse();
    }
    addEventListener(An, si, Di) {
      return this._findPluginFor(si).addEventListener(An, si, Di);
    }
    addGlobalEventListener(An, si, Di) {
      return this._findPluginFor(si).addGlobalEventListener(An, si, Di);
    }
    getZone() {
      return this._zone;
    }
    _findPluginFor(An) {
      const si = this._eventNameToPlugin.get(An);
      if (si) {
        return si;
      }
      const Di = this._plugins;
      for (let dr = 0; dr < Di.length; dr++) {
        const Vr = Di[dr];
        if (Vr.supports(An)) {
          this._eventNameToPlugin.set(An, Vr);
          return Vr;
        }
      }
      throw new Error(`No event manager plugin found for event ${An}`);
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(x), t.LFG(t.R0b));
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: bn.ɵfac
  });
  return bn;
})();
class B {
  constructor(pn) {
    this._doc = pn;
  }
  addGlobalEventListener(pn, An, si) {
    const Di = (0, i.q)().getGlobalEventTarget(this._doc, pn);
    if (!Di) {
      throw new Error(`Unsupported event target ${Di} for event ${An}`);
    }
    return this.addEventListener(Di, An, si);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let F = (() => {
  class bn {
    constructor() {
      this._stylesSet = new Set();
    }
    addStyles(An) {
      const si = new Set();
      An.forEach(Di => {
        if (!this._stylesSet.has(Di)) {
          this._stylesSet.add(Di);
          si.add(Di);
        }
      });
      this.onStylesAdded(si);
    }
    onStylesAdded(An) {}
    getAllStyles() {
      return Array.from(this._stylesSet);
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)();
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: bn.ɵfac
  });
  return bn;
})();
let Z = (() => {
  class bn extends F {
    constructor(An) {
      super();
      this._doc = An;
      this._hostNodes = new Map();
      this._hostNodes.set(An.head, []);
    }
    _addStylesToHost(An, si, Di) {
      An.forEach(dr => {
        const Vr = this._doc.createElement("style");
        Vr.textContent = dr;
        Di.push(si.appendChild(Vr));
      });
    }
    addHost(An) {
      const si = [];
      this._addStylesToHost(this._stylesSet, An, si);
      this._hostNodes.set(An, si);
    }
    removeHost(An) {
      const si = this._hostNodes.get(An);
      if (si) {
        si.forEach(X);
      }
      this._hostNodes.delete(An);
    }
    onStylesAdded(An) {
      this._hostNodes.forEach((si, Di) => {
        this._addStylesToHost(An, Di, si);
      });
    }
    ngOnDestroy() {
      this._hostNodes.forEach(An => An.forEach(X));
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(i.K0));
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: bn.ɵfac
  });
  return bn;
})();
function X(bn) {
  (0, i.q)().remove(bn);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const le = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
  math: "http://www.w3.org/1998/MathML/"
};
const fe = /%COMP%/g;
const j = "%COMP%";
const G = `_nghost-${j}`;
const _se = `_ngcontent-${j}`;
function Le(bn, pn, An) {
  for (let si = 0; si < pn.length; si++) {
    let Di = pn[si];
    if (Array.isArray(Di)) {
      Le(bn, Di, An);
    } else {
      Di = Di.replace(fe, bn);
      An.push(Di);
    }
  }
  return An;
}
function he(bn) {
  return pn => {
    if (pn === "__ngUnwrap__") {
      return bn;
    }
    if (bn(pn) === false) {
      pn.preventDefault();
      pn.returnValue = false;
    }
  };
}
export let se = (() => {
  class bn {
    constructor(An, si, Di) {
      this.eventManager = An;
      this.sharedStylesHost = si;
      this.appId = Di;
      this.rendererByCompId = new Map();
      this.defaultRenderer = new Re(An);
    }
    createRenderer(An, si) {
      if (!An || !si) {
        return this.defaultRenderer;
      }
      switch (si.encapsulation) {
        case t.ifc.Emulated:
          {
            let Di = this.rendererByCompId.get(si.id);
            if (!Di) {
              Di = new st(this.eventManager, this.sharedStylesHost, si, this.appId);
              this.rendererByCompId.set(si.id, Di);
            }
            Di.applyToHost(An);
            return Di;
          }
        case 1:
        case t.ifc.ShadowDom:
          return new rt(this.eventManager, this.sharedStylesHost, An, si);
        default:
          if (!this.rendererByCompId.has(si.id)) {
            const Di = Le(si.id, si.styles, []);
            this.sharedStylesHost.addStyles(Di);
            this.rendererByCompId.set(si.id, this.defaultRenderer);
          }
          return this.defaultRenderer;
      }
    }
    begin() {}
    end() {}
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(U), t.LFG(Z), t.LFG(t.AFp));
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: bn.ɵfac
  });
  return bn;
})();
class Re {
  constructor(pn) {
    this.eventManager = pn;
    this.data = Object.create(null);
    this.destroyNode = null;
  }
  destroy() {}
  createElement(pn, An) {
    if (An) {
      return document.createElementNS(le[An] || An, pn);
    } else {
      return document.createElement(pn);
    }
  }
  createComment(pn) {
    return document.createComment(pn);
  }
  createText(pn) {
    return document.createTextNode(pn);
  }
  appendChild(pn, An) {
    (ot(pn) ? pn.content : pn).appendChild(An);
  }
  insertBefore(pn, An, si) {
    if (pn) {
      (ot(pn) ? pn.content : pn).insertBefore(An, si);
    }
  }
  removeChild(pn, An) {
    if (pn) {
      pn.removeChild(An);
    }
  }
  selectRootElement(pn, An) {
    let si = typeof pn == "string" ? document.querySelector(pn) : pn;
    if (!si) {
      throw new Error(`The selector "${pn}" did not match any elements`);
    }
    if (!An) {
      si.textContent = "";
    }
    return si;
  }
  parentNode(pn) {
    return pn.parentNode;
  }
  nextSibling(pn) {
    return pn.nextSibling;
  }
  setAttribute(pn, An, si, Di) {
    if (Di) {
      An = Di + ":" + An;
      const dr = le[Di];
      if (dr) {
        pn.setAttributeNS(dr, An, si);
      } else {
        pn.setAttribute(An, si);
      }
    } else {
      pn.setAttribute(An, si);
    }
  }
  removeAttribute(pn, An, si) {
    if (si) {
      const Di = le[si];
      if (Di) {
        pn.removeAttributeNS(Di, An);
      } else {
        pn.removeAttribute(`${si}:${An}`);
      }
    } else {
      pn.removeAttribute(An);
    }
  }
  addClass(pn, An) {
    pn.classList.add(An);
  }
  removeClass(pn, An) {
    pn.classList.remove(An);
  }
  setStyle(pn, An, si, Di) {
    if (Di & (t.JOm.DashCase | t.JOm.Important)) {
      pn.style.setProperty(An, si, Di & t.JOm.Important ? "important" : "");
    } else {
      pn.style[An] = si;
    }
  }
  removeStyle(pn, An, si) {
    if (si & t.JOm.DashCase) {
      pn.style.removeProperty(An);
    } else {
      pn.style[An] = "";
    }
  }
  setProperty(pn, An, si) {
    pn[An] = si;
  }
  setValue(pn, An) {
    pn.nodeValue = An;
  }
  listen(pn, An, si) {
    if (typeof pn == "string") {
      return this.eventManager.addGlobalEventListener(pn, An, he(si));
    } else {
      return this.eventManager.addEventListener(pn, An, he(si));
    }
  }
}
function ot(bn) {
  return bn.tagName === "TEMPLATE" && bn.content !== undefined;
}
class st extends Re {
  constructor(pn, An, si, Di) {
    super(pn);
    this.component = si;
    const dr = Le(Di + "-" + si.id, si.styles, []);
    An.addStyles(dr);
    this.contentAttr = function W(bn) {
      return _se.replace(fe, bn);
    }(Di + "-" + si.id);
    this.hostAttr = function Pe(bn) {
      return G.replace(fe, bn);
    }(Di + "-" + si.id);
  }
  applyToHost(pn) {
    super.setAttribute(pn, this.hostAttr, "");
  }
  createElement(pn, An) {
    const si = super.createElement(pn, An);
    super.setAttribute(si, this.contentAttr, "");
    return si;
  }
}
class rt extends Re {
  constructor(pn, An, si, Di) {
    super(pn);
    this.sharedStylesHost = An;
    this.hostEl = si;
    this.shadowRoot = si.attachShadow({
      mode: "open"
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const dr = Le(Di.id, Di.styles, []);
    for (let Vr = 0; Vr < dr.length; Vr++) {
      const Or = document.createElement("style");
      Or.textContent = dr[Vr];
      this.shadowRoot.appendChild(Or);
    }
  }
  nodeOrShadowRoot(pn) {
    if (pn === this.hostEl) {
      return this.shadowRoot;
    } else {
      return pn;
    }
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
  appendChild(pn, An) {
    return super.appendChild(this.nodeOrShadowRoot(pn), An);
  }
  insertBefore(pn, An, si) {
    return super.insertBefore(this.nodeOrShadowRoot(pn), An, si);
  }
  removeChild(pn, An) {
    return super.removeChild(this.nodeOrShadowRoot(pn), An);
  }
  parentNode(pn) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(pn)));
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Oe = (() => {
  class bn extends B {
    constructor(An) {
      super(An);
    }
    supports(An) {
      return true;
    }
    addEventListener(An, si, Di) {
      An.addEventListener(si, Di, false);
      return () => this.removeEventListener(An, si, Di);
    }
    removeEventListener(An, si, Di) {
      return An.removeEventListener(si, Di);
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(i.K0));
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: bn.ɵfac
  });
  return bn;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ee = ["alt", "control", "meta", "shift"];
const ke = {
  "\b": "Backspace",
  "\t": "Tab",
  "": "Delete",
  "": "Escape",
  Del: "Delete",
  Esc: "Escape",
  Left: "ArrowLeft",
  Right: "ArrowRight",
  Up: "ArrowUp",
  Down: "ArrowDown",
  Menu: "ContextMenu",
  Scroll: "ScrollLock",
  Win: "OS"
};
const Be = {
  alt: bn => bn.altKey,
  control: bn => bn.ctrlKey,
  meta: bn => bn.metaKey,
  shift: bn => bn.shiftKey
};
let De = (() => {
  class bn extends B {
    constructor(An) {
      super(An);
    }
    supports(An) {
      return bn.parseEventName(An) != null;
    }
    addEventListener(An, si, Di) {
      const dr = bn.parseEventName(si);
      const Vr = bn.eventCallback(dr.fullKey, Di, this.manager.getZone());
      return this.manager.getZone().runOutsideAngular(() => (0, i.q)().onAndCancel(An, dr.domEventName, Vr));
    }
    static parseEventName(An) {
      const si = An.toLowerCase().split(".");
      const Di = si.shift();
      if (si.length === 0 || Di !== "keydown" && Di !== "keyup") {
        return null;
      }
      const dr = bn._normalizeKey(si.pop());
      let Vr = "";
      let Or = si.indexOf("code");
      if (Or > -1) {
        si.splice(Or, 1);
        Vr = "code.";
      }
      Ee.forEach(_o => {
        const kr = si.indexOf(_o);
        if (kr > -1) {
          si.splice(kr, 1);
          Vr += _o + ".";
        }
      });
      Vr += dr;
      if (si.length != 0 || dr.length === 0) {
        return null;
      }
      const is = {
        domEventName: Di,
        fullKey: Vr
      };
      return is;
    }
    static matchEventFullKeyCode(An, si) {
      let Di = ke[An.key] || An.key;
      let dr = "";
      if (si.indexOf("code.") > -1) {
        Di = An.code;
        dr = "code.";
      }
      return Di != null && !!Di && (Di = Di.toLowerCase(), Di === " " ? Di = "space" : Di === "." && (Di = "dot"), Ee.forEach(Vr => {
        if (Vr !== Di && (0, Be[Vr])(An)) {
          dr += Vr + ".";
        }
      }), dr += Di, dr === si);
    }
    static eventCallback(An, si, Di) {
      return dr => {
        if (bn.matchEventFullKeyCode(dr, An)) {
          Di.runGuarded(() => si(dr));
        }
      };
    }
    static _normalizeKey(An) {
      if (An === "esc") {
        return "escape";
      } else {
        return An;
      }
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(i.K0));
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: bn.ɵfac
  });
  return bn;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const q6 = (0, t.eFA)(t._c5, "browser", [{
  provide: t.Lbi,
  useValue: i.bD
}, {
  provide: t.g9A,
  useValue: function lt() {
    k.makeCurrent();
  },
  multi: true
}, {
  provide: i.K0,
  useFactory: function St() {
    (0, t.RDi)(document);
    return document;
  },
  deps: []
}]);
const ft = new t.OlP("");
const qe = [{
  provide: t.rWj,
  useClass:
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
  class E {
    addToWindow(pn) {
      t.dqk.getAngularTestability = (si, Di = true) => {
        const dr = pn.findTestabilityInTree(si, Di);
        if (dr == null) {
          throw new Error("Could not find testability for element.");
        }
        return dr;
      };
      t.dqk.getAllAngularTestabilities = () => pn.getAllTestabilities();
      t.dqk.getAllAngularRootElements = () => pn.getAllRootElements();
      t.dqk.frameworkStabilizers ||= [];
      t.dqk.frameworkStabilizers.push(si => {
        const Di = t.dqk.getAllAngularTestabilities();
        let dr = Di.length;
        let Vr = false;
        const Or = function (is) {
          Vr = Vr || is;
          dr--;
          if (dr == 0) {
            si(Vr);
          }
        };
        Di.forEach(function (is) {
          is.whenStable(Or);
        });
      });
    }
    findTestabilityInTree(pn, An, si) {
      if (An == null) {
        return null;
      } else {
        return pn.getTestability(An) ?? (si ? (0, i.q)().isShadowRoot(An) ? this.findTestabilityInTree(pn, An.host, true) : this.findTestabilityInTree(pn, An.parentElement, true) : null);
      }
    }
  },
  deps: []
}, {
  provide: t.lri,
  useClass: t.dDg,
  deps: [t.R0b, t.eoX, t.rWj]
}, {
  provide: t.dDg,
  useClass: t.dDg,
  deps: [t.R0b, t.eoX, t.rWj]
}];
const Me = [{
  provide: t.zSh,
  useValue: "root"
}, {
  provide: t.qLn,
  useFactory: function et() {
    return new t.qLn();
  },
  deps: []
}, {
  provide: x,
  useClass: Oe,
  multi: true,
  deps: [i.K0, t.R0b, t.Lbi]
}, {
  provide: x,
  useClass: De,
  multi: true,
  deps: [i.K0]
}, {
  provide: se,
  useClass: se,
  deps: [U, Z, t.AFp]
}, {
  provide: t.FYo,
  useExisting: se
}, {
  provide: F,
  useExisting: Z
}, {
  provide: Z,
  useClass: Z,
  deps: [i.K0]
}, {
  provide: U,
  useClass: U,
  deps: [x, t.R0b]
}, {
  provide: i.JF,
  useClass: O,
  deps: []
}, []];
export let b2 = (() => {
  class bn {
    constructor(An) {}
    static withServerTransition(An) {
      return {
        ngModule: bn,
        providers: [{
          provide: t.AFp,
          useValue: An.appId
        }, {
          provide: S,
          useExisting: t.AFp
        }, I]
      };
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(ft, 12));
  };
  bn.ɵmod = t.oAB({
    type: bn
  });
  bn.ɵinj = t.cJS({
    providers: [...Me, ...qe],
    imports: [i.ez, t.hGG]
  });
  return bn;
})();
export let Dx = (() => {
  class bn {
    constructor(An) {
      this._doc = An;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(An) {
      this._doc.title = An || "";
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(i.K0));
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: function (An) {
      let si = null;
      si = An ? new An() :
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
      function Ut() {
        return new Dx((0, t.LFG)(i.K0));
      }();
      return si;
    },
    providedIn: "root"
  });
  return bn;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
if (typeof window !== "undefined") {
  window;
}
export let H7 = (() => {
  class bn {}
  bn.ɵfac = function (An) {
    return new (An || bn)();
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: function (An) {
      let si = null;
      si = An ? new (An || bn)() : t.LFG(oi);
      return si;
    },
    providedIn: "root"
  });
  return bn;
})();
let oi = (() => {
  class bn extends H7 {
    constructor(An) {
      super();
      this._doc = An;
    }
    sanitize(An, si) {
      if (si == null) {
        return null;
      }
      switch (An) {
        case t.q3G.NONE:
          return si;
        case t.q3G.HTML:
          if ((0, t.qzn)(si, "HTML")) {
            return (0, t.z3N)(si);
          } else {
            return (0, t.EiD)(this._doc, String(si)).toString();
          }
        case t.q3G.STYLE:
          if ((0, t.qzn)(si, "Style")) {
            return (0, t.z3N)(si);
          } else {
            return si;
          }
        case t.q3G.SCRIPT:
          if ((0, t.qzn)(si, "Script")) {
            return (0, t.z3N)(si);
          }
          throw new Error("unsafe value used in a script context");
        case t.q3G.URL:
          if ((0, t.qzn)(si, "URL")) {
            return (0, t.z3N)(si);
          } else {
            return (0, t.mCW)(String(si));
          }
        case t.q3G.RESOURCE_URL:
          if ((0, t.qzn)(si, "ResourceURL")) {
            return (0, t.z3N)(si);
          }
          throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");
        default:
          throw new Error(`Unexpected SecurityContext ${An} (see https://g.co/ng/security#xss)`);
      }
    }
    bypassSecurityTrustHtml(An) {
      return (0, t.JVY)(An);
    }
    bypassSecurityTrustStyle(An) {
      return (0, t.L6k)(An);
    }
    bypassSecurityTrustScript(An) {
      return (0, t.eBb)(An);
    }
    bypassSecurityTrustUrl(An) {
      return (0, t.LAX)(An);
    }
    bypassSecurityTrustResourceUrl(An) {
      return (0, t.pB0)(An);
    }
  }
  bn.ɵfac = function (An) {
    return new (An || bn)(t.LFG(i.K0));
  };
  bn.ɵprov = t.Yz7({
    token: bn,
    factory: function (An) {
      let si = null;
      si = An ? new An() : function Bn(bn) {
        return new oi(bn.get(i.K0));
      }(t.LFG(t.zs3));
      return si;
    },
    providedIn: "root"
  });
  return bn;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */