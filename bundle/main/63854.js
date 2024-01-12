import * as i from "11481";
import * as t from "94650";
import * as b from "45007";
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
import * as k from "37340";
function v(H) {
  return new t.vHH(3000, false);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Qe() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}
function It() {
  return typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
}
function Yt(H) {
  switch (H.length) {
    case 0:
      return new k.ZN();
    case 1:
      return H[0];
    default:
      return new k.ZE(H);
  }
}
function Dn(H, Q, g, ie, $e = new Map(), Ht = new Map()) {
  const _n = [];
  const Un = [];
  let ui = -1;
  let Vi = null;
  ie.forEach(Wr => {
    const Cs = Wr.get("offset");
    const Ea = Cs == ui;
    const ga = Ea && Vi || new Map();
    Wr.forEach((aa, Ma) => {
      let Tl = Ma;
      let fc = aa;
      if (Ma !== "offset") {
        Tl = Q.normalizePropertyName(Tl, _n);
        switch (fc) {
          case k.k1:
            fc = $e.get(Ma);
            break;
          case k.l3:
            fc = Ht.get(Ma);
            break;
          default:
            fc = Q.normalizeStyleValue(Ma, Tl, fc, _n);
        }
      }
      ga.set(Tl, fc);
    });
    if (!Ea) {
      Un.push(ga);
    }
    Vi = ga;
    ui = Cs;
  });
  if (_n.length) {
    throw function pe(H) {
      return new t.vHH(3502, false);
    }();
  }
  return Un;
}
function Et(H, Q, g, ie) {
  switch (Q) {
    case "start":
      H.onStart(() => ie(g && lt(g, "start", H)));
      break;
    case "done":
      H.onDone(() => ie(g && lt(g, "done", H)));
      break;
    case "destroy":
      H.onDestroy(() => ie(g && lt(g, "destroy", H)));
  }
}
function lt(H, Q, g) {
  const Ht = et(H.element, H.triggerName, H.fromState, H.toState, Q || H.phaseName, g.totalTime ?? H.totalTime, !!g.disabled);
  const _n = H._data;
  if (_n != null) {
    Ht._data = _n;
  }
  return Ht;
}
function et(H, Q, g, ie, $e = "", Ht = 0, _n) {
  return {
    element: H,
    triggerName: Q,
    fromState: g,
    toState: ie,
    phaseName: $e,
    totalTime: Ht,
    disabled: !!_n
  };
}
function St(H, Q, g) {
  let ie = H.get(Q);
  if (!ie) {
    H.set(Q, ie = g);
  }
  return ie;
}
function ve(H) {
  const Q = H.indexOf(":");
  return [H.substring(1, Q), H.slice(Q + 1)];
}
let Lt = (H, Q) => false;
let ft = (H, Q, g) => [];
let qe = null;
function Me(H) {
  const Q = H.parentNode || H.host;
  if (Q === qe) {
    return null;
  } else {
    return Q;
  }
}
if (It() || typeof Element !== "undefined") {
  if (Qe()) {
    qe = (() => document.documentElement)();
    Lt = (H, Q) => {
      for (; Q;) {
        if (Q === H) {
          return true;
        }
        Q = Me(Q);
      }
      return false;
    };
  } else {
    Lt = (H, Q) => H.contains(Q);
  }
  ft = (H, Q, g) => {
    if (g) {
      return Array.from(H.querySelectorAll(Q));
    }
    const ie = H.querySelector(Q);
    if (ie) {
      return [ie];
    } else {
      return [];
    }
  };
}
let it = null;
let bt = false;
const yt = Lt;
const Wt = ft;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Kt = (() => {
  class H {
    validateStyleProperty(g) {
      return function Ut(H) {
        if (!it) {
          it = function pt() {
            if (typeof document !== "undefined") {
              return document.body;
            } else {
              return null;
            }
          }() || {};
          bt = !!it.style && "WebkitAppearance" in it.style;
        }
        let Q = true;
        if (it.style && !function me(H) {
          return H.substring(1, 6) == "ebkit";
        }(H)) {
          Q = H in it.style;
          if (!Q && bt) {
            Q = "Webkit" + H.charAt(0).toUpperCase() + H.slice(1) in it.style;
          }
        }
        return Q;
      }(g);
    }
    matchesElement(g, ie) {
      return false;
    }
    containsElement(g, ie) {
      return yt(g, ie);
    }
    getParentElement(g) {
      return Me(g);
    }
    query(g, ie, $e) {
      return Wt(g, ie, $e);
    }
    computeStyle(g, ie, $e) {
      return $e || "";
    }
    animate(g, ie, $e, Ht, _n, Un = [], ui) {
      return new k.ZN($e, Ht);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac
  });
  return H;
})();
let on = (() => {
  class H {}
  /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
  H.NOOP = new Kt();
  return H;
})();
const Si = "ng-enter";
const Zi = "ng-leave";
const $i = "ng-trigger";
const Qi = ".ng-trigger";
const br = "ng-animating";
const Ar = ".ng-animating";
function vr(H) {
  if (typeof H == "number") {
    return H;
  }
  const Q = H.match(/^(-?[\.\d]+)(m?s)/);
  if (!Q || Q.length < 2) {
    return 0;
  } else {
    return Ur(parseFloat(Q[1]), Q[2]);
  }
}
function Ur(H, Q) {
  if (Q === "s") {
    return H * 1000;
  } else {
    return H;
  }
}
function Br(H, Q, g) {
  if (H.hasOwnProperty("duration")) {
    return H;
  } else {
    return function rs(H, Q, g) {
      let $e;
      let Ht = 0;
      let _n = "";
      if (typeof H == "string") {
        const Un = H.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
        if (Un === null) {
          Q.push(v());
          return {
            duration: 0,
            delay: 0,
            easing: ""
          };
        }
        $e = Ur(parseFloat(Un[1]), Un[2]);
        const ui = Un[3];
        if (ui != null) {
          Ht = Ur(parseFloat(ui), Un[4]);
        }
        const Vi = Un[5];
        if (Vi) {
          _n = Vi;
        }
      } else {
        $e = H;
      }
      if (!g) {
        let Un = false;
        let ui = Q.length;
        if ($e < 0) {
          Q.push(function C() {
            return new t.vHH(3100, false);
          }());
          Un = true;
        }
        if (Ht < 0) {
          Q.push(function w() {
            return new t.vHH(3101, false);
          }());
          Un = true;
        }
        if (Un) {
          Q.splice(ui, 0, v());
        }
      }
      return {
        duration: $e,
        delay: Ht,
        easing: _n
      };
    }(H, Q, g);
  }
}
function vs(H, Q = {}) {
  Object.keys(H).forEach(g => {
    Q[g] = H[g];
  });
  return Q;
}
function wo(H) {
  const Q = new Map();
  Object.keys(H).forEach(g => {
    Q.set(g, H[g]);
  });
  return Q;
}
function js(H, Q = new Map(), g) {
  if (g) {
    for (let [ie, $e] of g) {
      Q.set(ie, $e);
    }
  }
  for (let [ie, $e] of H) {
    Q.set(ie, $e);
  }
  return Q;
}
function Tr(H, Q, g) {
  if (g) {
    return Q + ":" + g + ";";
  } else {
    return "";
  }
}
function ns(H) {
  let Q = "";
  for (let g = 0; g < H.style.length; g++) {
    const ie = H.style.item(g);
    Q += Tr(0, ie, H.style.getPropertyValue(ie));
  }
  for (const g in H.style) {
    if (H.style.hasOwnProperty(g) && !g.startsWith("_")) {
      Q += Tr(0, Vr(g), H.style[g]);
    }
  }
  H.setAttribute("style", Q);
}
function pr(H, Q, g) {
  if (H.style) {
    Q.forEach((ie, $e) => {
      const Ht = dr($e);
      if (g && !g.has($e)) {
        g.set($e, H.style[Ht]);
      }
      H.style[Ht] = ie;
    });
    if (It()) {
      ns(H);
    }
  }
}
function Bn(H, Q) {
  if (H.style) {
    Q.forEach((g, ie) => {
      const $e = dr(ie);
      H.style[$e] = "";
    });
    if (It()) {
      ns(H);
    }
  }
}
function oi(H) {
  if (Array.isArray(H)) {
    if (H.length == 1) {
      return H[0];
    } else {
      return (0, k.vP)(H);
    }
  } else {
    return H;
  }
}
const bn = new RegExp("{{\\s*(.+?)\\s*}}", "g");
function pn(H) {
  let Q = [];
  if (typeof H == "string") {
    let g;
    for (; g = bn.exec(H);) {
      Q.push(g[1]);
    }
    bn.lastIndex = 0;
  }
  return Q;
}
function An(H, Q, g) {
  const ie = H.toString();
  const $e = ie.replace(bn, (Ht, _n) => {
    let Un = Q[_n];
    if (Un == null) {
      g.push(function L(H) {
        return new t.vHH(3003, false);
      }());
      Un = "";
    }
    return Un.toString();
  });
  if ($e == ie) {
    return H;
  } else {
    return $e;
  }
}
function si(H) {
  const Q = [];
  let g = H.next();
  for (; !g.done;) {
    Q.push(g.value);
    g = H.next();
  }
  return Q;
}
const Di = /-+([a-z0-9])/g;
function dr(H) {
  return H.replace(Di, (...Q) => Q[1].toUpperCase());
}
function Vr(H) {
  return H.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function _o(H, Q, g) {
  switch (Q.type) {
    case 7:
      return H.visitTrigger(Q, g);
    case 0:
      return H.visitState(Q, g);
    case 1:
      return H.visitTransition(Q, g);
    case 2:
      return H.visitSequence(Q, g);
    case 3:
      return H.visitGroup(Q, g);
    case 4:
      return H.visitAnimate(Q, g);
    case 5:
      return H.visitKeyframes(Q, g);
    case 6:
      return H.visitStyle(Q, g);
    case 8:
      return H.visitReference(Q, g);
    case 9:
      return H.visitAnimateChild(Q, g);
    case 10:
      return H.visitAnimateRef(Q, g);
    case 11:
      return H.visitQuery(Q, g);
    case 12:
      return H.visitStagger(Q, g);
    default:
      throw function I(H) {
        return new t.vHH(3004, false);
      }();
  }
}
function kr(H, Q) {
  return window.getComputedStyle(H)[Q];
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ya(H, Q) {
  const g = [];
  if (typeof H == "string") {
    H.split(/\s*,\s*/).forEach(ie => function Ko(H, Q, g) {
      if (H[0] == ":") {
        const ui = function qi(H, Q) {
          switch (H) {
            case ":enter":
              return "void => *";
            case ":leave":
              return "* => void";
            case ":increment":
              return (g, ie) => parseFloat(ie) > parseFloat(g);
            case ":decrement":
              return (g, ie) => parseFloat(ie) < parseFloat(g);
            default:
              Q.push(function W(H) {
                return new t.vHH(3016, false);
              }());
              return "* => *";
          }
        }(H, g);
        if (typeof ui == "function") {
          Q.push(ui);
          return;
        }
        H = ui;
      }
      const ie = H.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
      if (ie == null || ie.length < 4) {
        g.push(function se(H) {
          return new t.vHH(3015, false);
        }());
        return Q;
      }
      const $e = ie[1];
      const Ht = ie[2];
      const _n = ie[3];
      Q.push(Oa($e, _n));
      if (Ht[0] == "<" && ($e != "*" || _n != "*")) {
        Q.push(Oa(_n, $e));
      }
    }(ie, g, Q));
  } else {
    g.push(H);
  }
  return g;
}
const qo = new Set(["true", "1"]);
const ea = new Set(["false", "0"]);
function Oa(H, Q) {
  const g = qo.has(H) || ea.has(H);
  const ie = qo.has(Q) || ea.has(Q);
  return ($e, Ht) => {
    let _n = H == "*" || H == $e;
    let Un = Q == "*" || Q == Ht;
    if (!_n && g && typeof $e == "boolean") {
      _n = $e ? qo.has(H) : ea.has(H);
    }
    if (!Un && ie && typeof Ht == "boolean") {
      Un = Ht ? qo.has(Q) : ea.has(Q);
    }
    return _n && Un;
  };
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ja = new RegExp("s*:selfs*,?", "g");
function la(H, Q, g, ie) {
  return new Fr(H).build(Q, g, ie);
}
class Fr {
  constructor(Q) {
    this._driver = Q;
  }
  build(Q, g, ie) {
    const $e = new Pa(g);
    this._resetContextStyleTimingState($e);
    return _o(this, oi(Q), $e);
  }
  _resetContextStyleTimingState(Q) {
    Q.currentQuerySelector = "";
    Q.collectedStyles = new Map();
    Q.collectedStyles.set("", new Map());
    Q.currentTime = 0;
  }
  visitTrigger(Q, g) {
    let ie = g.queryCount = 0;
    let $e = g.depCount = 0;
    const Ht = [];
    const _n = [];
    if (Q.name.charAt(0) == "@") {
      g.errors.push(function O() {
        return new t.vHH(3006, false);
      }());
    }
    Q.definitions.forEach(Un => {
      this._resetContextStyleTimingState(g);
      if (Un.type == 0) {
        const ui = Un;
        const Vi = ui.name;
        Vi.toString().split(/\s*,\s*/).forEach(Wr => {
          ui.name = Wr;
          Ht.push(this.visitState(ui, g));
        });
        ui.name = Vi;
      } else if (Un.type == 1) {
        const ui = this.visitTransition(Un, g);
        ie += ui.queryCount;
        $e += ui.depCount;
        _n.push(ui);
      } else {
        g.errors.push(function x() {
          return new t.vHH(3007, false);
        }());
      }
    });
    return {
      type: 7,
      name: Q.name,
      states: Ht,
      transitions: _n,
      queryCount: ie,
      depCount: $e,
      options: null
    };
  }
  visitState(Q, g) {
    const ie = this.visitStyle(Q.styles, g);
    const $e = Q.options && Q.options.params || null;
    if (ie.containsDynamicStyles) {
      const Ht = new Set();
      const _n = $e || {};
      ie.styles.forEach(Un => {
        if (Un instanceof Map) {
          Un.forEach(ui => {
            pn(ui).forEach(Vi => {
              if (!_n.hasOwnProperty(Vi)) {
                Ht.add(Vi);
              }
            });
          });
        }
      });
      if (Ht.size) {
        si(Ht.values());
        g.errors.push(function U(H, Q) {
          return new t.vHH(3008, false);
        }());
      }
    }
    return {
      type: 0,
      name: Q.name,
      style: ie,
      options: $e ? {
        params: $e
      } : null
    };
  }
  visitTransition(Q, g) {
    g.queryCount = 0;
    g.depCount = 0;
    const ie = _o(this, oi(Q.animation), g);
    return {
      type: 1,
      matchers: ya(Q.expr, g.errors),
      animation: ie,
      queryCount: g.queryCount,
      depCount: g.depCount,
      options: qs(Q.options)
    };
  }
  visitSequence(Q, g) {
    return {
      type: 2,
      steps: Q.steps.map(ie => _o(this, ie, g)),
      options: qs(Q.options)
    };
  }
  visitGroup(Q, g) {
    const ie = g.currentTime;
    let $e = 0;
    const Ht = Q.steps.map(_n => {
      g.currentTime = ie;
      const Un = _o(this, _n, g);
      $e = Math.max($e, g.currentTime);
      return Un;
    });
    g.currentTime = $e;
    return {
      type: 3,
      steps: Ht,
      options: qs(Q.options)
    };
  }
  visitAnimate(Q, g) {
    const ie = function dl(H, Q) {
      if (H.hasOwnProperty("duration")) {
        return H;
      }
      if (typeof H == "number") {
        return Fo(Br(H, Q).duration, 0, "");
      }
      const g = H;
      if (g.split(/\s+/).some(Ht => Ht.charAt(0) == "{" && Ht.charAt(1) == "{")) {
        const Ht = Fo(0, 0, "");
        Ht.dynamic = true;
        Ht.strValue = g;
        return Ht;
      }
      const $e = Br(g, Q);
      return Fo($e.duration, $e.delay, $e.easing);
    }(Q.timings, g.errors);
    g.currentAnimateTimings = ie;
    let $e;
    let Ht = Q.styles ? Q.styles : (0, k.oB)({});
    if (Ht.type == 5) {
      $e = this.visitKeyframes(Ht, g);
    } else {
      let _n = Q.styles;
      let Un = false;
      if (!_n) {
        Un = true;
        const Vi = {};
        if (ie.easing) {
          Vi.easing = ie.easing;
        }
        _n = (0, k.oB)(Vi);
      }
      g.currentTime += ie.duration + ie.delay;
      const ui = this.visitStyle(_n, g);
      ui.isEmptyStep = Un;
      $e = ui;
    }
    g.currentAnimateTimings = null;
    return {
      type: 4,
      timings: ie,
      style: $e,
      options: null
    };
  }
  visitStyle(Q, g) {
    const ie = this._makeStyleAst(Q, g);
    this._validateStyleAst(ie, g);
    return ie;
  }
  _makeStyleAst(Q, g) {
    const ie = [];
    const $e = Array.isArray(Q.styles) ? Q.styles : [Q.styles];
    for (let Un of $e) {
      if (typeof Un == "string") {
        if (Un === k.l3) {
          ie.push(Un);
        } else {
          g.errors.push(new t.vHH(3002, false));
        }
      } else {
        ie.push(wo(Un));
      }
    }
    let Ht = false;
    let _n = null;
    ie.forEach(Un => {
      if (Un instanceof Map && (Un.has("easing") && (_n = Un.get("easing"), Un.delete("easing")), !Ht)) {
        for (let ui of Un.values()) {
          if (ui.toString().indexOf("{{") >= 0) {
            Ht = true;
            break;
          }
        }
      }
    });
    return {
      type: 6,
      styles: ie,
      easing: _n,
      offset: Q.offset,
      containsDynamicStyles: Ht,
      options: null
    };
  }
  _validateStyleAst(Q, g) {
    const ie = g.currentAnimateTimings;
    let $e = g.currentTime;
    let Ht = g.currentTime;
    if (ie && Ht > 0) {
      Ht -= ie.duration + ie.delay;
    }
    Q.styles.forEach(_n => {
      if (typeof _n != "string") {
        _n.forEach((Un, ui) => {
          const Vi = g.collectedStyles.get(g.currentQuerySelector);
          const Wr = Vi.get(ui);
          let Cs = true;
          if (Wr) {
            if (Ht != $e && Ht >= Wr.startTime && $e <= Wr.endTime) {
              g.errors.push(function Z(H, Q, g, ie, $e) {
                return new t.vHH(3010, false);
              }());
              Cs = false;
            }
            Ht = Wr.startTime;
          }
          if (Cs) {
            Vi.set(ui, {
              startTime: Ht,
              endTime: $e
            });
          }
          if (g.options) {
            (function fi(H, Q, g) {
              const ie = Q.params || {};
              const $e = pn(H);
              if ($e.length) {
                $e.forEach(Ht => {
                  if (!ie.hasOwnProperty(Ht)) {
                    g.push(function S(H) {
                      return new t.vHH(3001, false);
                    }());
                  }
                });
              }
            })(Un, g.options, g.errors);
          }
        });
      }
    });
  }
  visitKeyframes(Q, g) {
    const ie = {
      type: 5,
      styles: [],
      options: null
    };
    if (!g.currentAnimateTimings) {
      g.errors.push(function X() {
        return new t.vHH(3011, false);
      }());
      return ie;
    }
    let Ht = 0;
    const _n = [];
    let Un = false;
    let ui = false;
    let Vi = 0;
    const Wr = Q.steps.map(fc => {
      const Iu = this._makeStyleAst(fc, g);
      let hc = Iu.offset ?? function Po(H) {
        if (typeof H == "string") {
          return null;
        }
        let Q = null;
        if (Array.isArray(H)) {
          H.forEach(g => {
            if (g instanceof Map && g.has("offset")) {
              const ie = g;
              Q = parseFloat(ie.get("offset"));
              ie.delete("offset");
            }
          });
        } else if (H instanceof Map && H.has("offset")) {
          const g = H;
          Q = parseFloat(g.get("offset"));
          g.delete("offset");
        }
        return Q;
      }(Iu.styles);
      let qc = 0;
      if (hc != null) {
        Ht++;
        qc = Iu.offset = hc;
      }
      ui = ui || qc < 0 || qc > 1;
      Un = Un || qc < Vi;
      Vi = qc;
      _n.push(qc);
      return Iu;
    });
    if (ui) {
      g.errors.push(function le() {
        return new t.vHH(3012, false);
      }());
    }
    if (Un) {
      g.errors.push(function fe() {
        return new t.vHH(3200, false);
      }());
    }
    const Cs = Q.steps.length;
    let Ea = 0;
    if (Ht > 0 && Ht < Cs) {
      g.errors.push(function q() {
        return new t.vHH(3202, false);
      }());
    } else if (Ht == 0) {
      Ea = 1 / (Cs - 1);
    }
    const ga = Cs - 1;
    const aa = g.currentTime;
    const Ma = g.currentAnimateTimings;
    const Tl = Ma.duration;
    Wr.forEach((fc, Iu) => {
      const hc = Ea > 0 ? Iu == ga ? 1 : Ea * Iu : _n[Iu];
      const qc = hc * Tl;
      g.currentTime = aa + Ma.delay + qc;
      Ma.duration = qc;
      this._validateStyleAst(fc, g);
      fc.offset = hc;
      ie.styles.push(fc);
    });
    return ie;
  }
  visitReference(Q, g) {
    return {
      type: 8,
      animation: _o(this, oi(Q.animation), g),
      options: qs(Q.options)
    };
  }
  visitAnimateChild(Q, g) {
    g.depCount++;
    return {
      type: 9,
      options: qs(Q.options)
    };
  }
  visitAnimateRef(Q, g) {
    return {
      type: 10,
      animation: this.visitReference(Q.animation, g),
      options: qs(Q.options)
    };
  }
  visitQuery(Q, g) {
    const ie = g.currentQuerySelector;
    const $e = Q.options || {};
    g.queryCount++;
    g.currentQuery = Q;
    const [Ht, _n] = function Es(H) {
      const Q = !!H.split(/\s*,\s*/).find(g => g == ":self");
      if (Q) {
        H = H.replace(ja, "");
      }
      H = H.replace(/@\*/g, Qi).replace(/@\w+/g, g => Qi + "-" + g.slice(1)).replace(/:animating/g, Ar);
      return [H, Q];
    }(Q.selector);
    g.currentQuerySelector = ie.length ? ie + " " + Ht : Ht;
    St(g.collectedStyles, g.currentQuerySelector, new Map());
    const Un = _o(this, oi(Q.animation), g);
    g.currentQuery = null;
    g.currentQuerySelector = ie;
    return {
      type: 11,
      selector: Ht,
      limit: $e.limit || 0,
      optional: !!$e.optional,
      includeSelf: _n,
      animation: Un,
      originalSelector: Q.selector,
      options: qs(Q.options)
    };
  }
  visitStagger(Q, g) {
    if (!g.currentQuery) {
      g.errors.push(function j() {
        return new t.vHH(3013, false);
      }());
    }
    const ie = Q.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : Br(Q.timings, g.errors, true);
    return {
      type: 12,
      animation: _o(this, oi(Q.animation), g),
      timings: ie,
      options: null
    };
  }
}
class Pa {
  constructor(Q) {
    this.errors = Q;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = new Map();
    this.options = null;
    this.unsupportedCSSPropertiesFound = new Set();
  }
}
function qs(H) {
  if (H) {
    if ((H = vs(H)).params) {
      H.params = function Ao(H) {
        if (H) {
          return vs(H);
        } else {
          return null;
        }
      }(H.params);
    }
  } else {
    H = {};
  }
  return H;
}
function Fo(H, Q, g) {
  return {
    duration: H,
    delay: Q,
    easing: g
  };
}
function ha(H, Q, g, ie, $e, Ht, _n = null, Un = false) {
  return {
    type: 1,
    element: H,
    keyframes: Q,
    preStyleProps: g,
    postStyleProps: ie,
    duration: $e,
    delay: Ht,
    totalTime: $e + Ht,
    easing: _n,
    subTimeline: Un
  };
}
class Ca {
  constructor() {
    this._map = new Map();
  }
  get(Q) {
    return this._map.get(Q) || [];
  }
  append(Q, g) {
    let ie = this._map.get(Q);
    if (!ie) {
      this._map.set(Q, ie = []);
    }
    ie.push(...g);
  }
  has(Q) {
    return this._map.has(Q);
  }
  clear() {
    this._map.clear();
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ml = new RegExp(":enter", "g");
const So = new RegExp(":leave", "g");
function pa(H, Q, g, ie, $e, Ht = new Map(), _n = new Map(), Un, ui, Vi = []) {
  return new Ia().buildKeyframes(H, Q, g, ie, $e, Ht, _n, Un, ui, Vi);
}
class Ia {
  buildKeyframes(Q, g, ie, $e, Ht, _n, Un, ui, Vi, Wr = []) {
    Vi = Vi || new Ca();
    const Cs = new zs(Q, g, Vi, $e, Ht, Wr, []);
    Cs.options = ui;
    const Ea = ui.delay ? vr(ui.delay) : 0;
    Cs.currentTimeline.delayNextStep(Ea);
    Cs.currentTimeline.setStyles([_n], null, Cs.errors, ui);
    _o(this, ie, Cs);
    const ga = Cs.timelines.filter(aa => aa.containsAnimation());
    if (ga.length && Un.size) {
      let aa;
      for (let Ma = ga.length - 1; Ma >= 0; Ma--) {
        const Tl = ga[Ma];
        if (Tl.element === g) {
          aa = Tl;
          break;
        }
      }
      if (aa && !aa.allowOnlyTimelineStyles()) {
        aa.setStyles([Un], null, Cs.errors, ui);
      }
    }
    if (ga.length) {
      return ga.map(aa => aa.buildKeyframes());
    } else {
      return [ha(g, [], [], [], 0, Ea, "", false)];
    }
  }
  visitTrigger(Q, g) {}
  visitState(Q, g) {}
  visitTransition(Q, g) {}
  visitAnimateChild(Q, g) {
    const ie = g.subInstructions.get(g.element);
    if (ie) {
      const $e = g.createSubContext(Q.options);
      const Ht = g.currentTimeline.currentTime;
      const _n = this._visitSubInstructions(ie, $e, $e.options);
      if (Ht != _n) {
        g.transformIntoNewTimeline(_n);
      }
    }
    g.previousNode = Q;
  }
  visitAnimateRef(Q, g) {
    const ie = g.createSubContext(Q.options);
    ie.transformIntoNewTimeline();
    this._applyAnimationRefDelays([Q.options, Q.animation.options], g, ie);
    this.visitReference(Q.animation, ie);
    g.transformIntoNewTimeline(ie.currentTimeline.currentTime);
    g.previousNode = Q;
  }
  _applyAnimationRefDelays(Q, g, ie) {
    for (const Ht of Q) {
      const _n = Ht?.delay;
      if (_n) {
        var $e;
        const Un = typeof _n == "number" ? _n : vr(An(_n, ($e = Ht?.params) !== null && $e !== undefined ? $e : {}, g.errors));
        ie.delayNextStep(Un);
      }
    }
  }
  _visitSubInstructions(Q, g, ie) {
    let Ht = g.currentTimeline.currentTime;
    const _n = ie.duration != null ? vr(ie.duration) : null;
    const Un = ie.delay != null ? vr(ie.delay) : null;
    if (_n !== 0) {
      Q.forEach(ui => {
        const Vi = g.appendInstructionToTimeline(ui, _n, Un);
        Ht = Math.max(Ht, Vi.duration + Vi.delay);
      });
    }
    return Ht;
  }
  visitReference(Q, g) {
    g.updateOptions(Q.options, true);
    _o(this, Q.animation, g);
    g.previousNode = Q;
  }
  visitSequence(Q, g) {
    const ie = g.subContextCount;
    let $e = g;
    const Ht = Q.options;
    if (Ht && (Ht.params || Ht.delay) && ($e = g.createSubContext(Ht), $e.transformIntoNewTimeline(), Ht.delay != null)) {
      if ($e.previousNode.type == 6) {
        $e.currentTimeline.snapshotCurrentStyles();
        $e.previousNode = po;
      }
      const _n = vr(Ht.delay);
      $e.delayNextStep(_n);
    }
    if (Q.steps.length) {
      Q.steps.forEach(_n => _o(this, _n, $e));
      $e.currentTimeline.applyStylesToKeyframe();
      if ($e.subContextCount > ie) {
        $e.transformIntoNewTimeline();
      }
    }
    g.previousNode = Q;
  }
  visitGroup(Q, g) {
    const ie = [];
    let $e = g.currentTimeline.currentTime;
    const Ht = Q.options && Q.options.delay ? vr(Q.options.delay) : 0;
    Q.steps.forEach(_n => {
      const Un = g.createSubContext(Q.options);
      if (Ht) {
        Un.delayNextStep(Ht);
      }
      _o(this, _n, Un);
      $e = Math.max($e, Un.currentTimeline.currentTime);
      ie.push(Un.currentTimeline);
    });
    ie.forEach(_n => g.currentTimeline.mergeTimelineCollectedStyles(_n));
    g.transformIntoNewTimeline($e);
    g.previousNode = Q;
  }
  _visitTiming(Q, g) {
    if (Q.dynamic) {
      const ie = Q.strValue;
      return Br(g.params ? An(ie, g.params, g.errors) : ie, g.errors);
    }
    return {
      duration: Q.duration,
      delay: Q.delay,
      easing: Q.easing
    };
  }
  visitAnimate(Q, g) {
    const ie = g.currentAnimateTimings = this._visitTiming(Q.timings, g);
    const $e = g.currentTimeline;
    if (ie.delay) {
      g.incrementTime(ie.delay);
      $e.snapshotCurrentStyles();
    }
    const Ht = Q.style;
    if (Ht.type == 5) {
      this.visitKeyframes(Ht, g);
    } else {
      g.incrementTime(ie.duration);
      this.visitStyle(Ht, g);
      $e.applyStylesToKeyframe();
    }
    g.currentAnimateTimings = null;
    g.previousNode = Q;
  }
  visitStyle(Q, g) {
    const ie = g.currentTimeline;
    const $e = g.currentAnimateTimings;
    if (!$e && ie.hasCurrentStyleProperties()) {
      ie.forwardFrame();
    }
    const Ht = $e && $e.easing || Q.easing;
    if (Q.isEmptyStep) {
      ie.applyEmptyStep(Ht);
    } else {
      ie.setStyles(Q.styles, Ht, g.errors, g.options);
    }
    g.previousNode = Q;
  }
  visitKeyframes(Q, g) {
    const ie = g.currentAnimateTimings;
    const $e = g.currentTimeline.duration;
    const Ht = ie.duration;
    const Un = g.createSubContext().currentTimeline;
    Un.easing = ie.easing;
    Q.styles.forEach(ui => {
      Un.forwardTime((ui.offset || 0) * Ht);
      Un.setStyles(ui.styles, ui.easing, g.errors, g.options);
      Un.applyStylesToKeyframe();
    });
    g.currentTimeline.mergeTimelineCollectedStyles(Un);
    g.transformIntoNewTimeline($e + Ht);
    g.previousNode = Q;
  }
  visitQuery(Q, g) {
    const ie = g.currentTimeline.currentTime;
    const $e = Q.options || {};
    const Ht = $e.delay ? vr($e.delay) : 0;
    if (Ht && (g.previousNode.type === 6 || ie == 0 && g.currentTimeline.hasCurrentStyleProperties())) {
      g.currentTimeline.snapshotCurrentStyles();
      g.previousNode = po;
    }
    let _n = ie;
    const Un = g.invokeQuery(Q.selector, Q.originalSelector, Q.limit, Q.includeSelf, !!$e.optional, g.errors);
    g.currentQueryTotal = Un.length;
    let ui = null;
    Un.forEach((Vi, Wr) => {
      g.currentQueryIndex = Wr;
      const Cs = g.createSubContext(Q.options, Vi);
      if (Ht) {
        Cs.delayNextStep(Ht);
      }
      if (Vi === g.element) {
        ui = Cs.currentTimeline;
      }
      _o(this, Q.animation, Cs);
      Cs.currentTimeline.applyStylesToKeyframe();
      _n = Math.max(_n, Cs.currentTimeline.currentTime);
    });
    g.currentQueryIndex = 0;
    g.currentQueryTotal = 0;
    g.transformIntoNewTimeline(_n);
    if (ui) {
      g.currentTimeline.mergeTimelineCollectedStyles(ui);
      g.currentTimeline.snapshotCurrentStyles();
    }
    g.previousNode = Q;
  }
  visitStagger(Q, g) {
    const ie = g.parentContext;
    const $e = g.currentTimeline;
    const Ht = Q.timings;
    const _n = Math.abs(Ht.duration);
    const Un = _n * (g.currentQueryTotal - 1);
    let ui = _n * g.currentQueryIndex;
    switch (Ht.duration < 0 ? "reverse" : Ht.easing) {
      case "reverse":
        ui = Un - ui;
        break;
      case "full":
        ui = ie.currentStaggerTime;
    }
    const Wr = g.currentTimeline;
    if (ui) {
      Wr.delayNextStep(ui);
    }
    const Cs = Wr.currentTime;
    _o(this, Q.animation, g);
    g.previousNode = Q;
    ie.currentStaggerTime = $e.currentTime - Cs + ($e.startTime - ie.currentTimeline.startTime);
  }
}
const po = {};
class zs {
  constructor(Q, g, ie, $e, Ht, _n, Un, ui) {
    this._driver = Q;
    this.element = g;
    this.subInstructions = ie;
    this._enterClassName = $e;
    this._leaveClassName = Ht;
    this.errors = _n;
    this.timelines = Un;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = po;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = ui || new hs(this._driver, g, 0);
    Un.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(Q, g) {
    if (!Q) {
      return;
    }
    const ie = Q;
    let $e = this.options;
    if (ie.duration != null) {
      $e.duration = vr(ie.duration);
    }
    if (ie.delay != null) {
      $e.delay = vr(ie.delay);
    }
    const Ht = ie.params;
    if (Ht) {
      let _n = $e.params;
      _n ||= this.options.params = {};
      Object.keys(Ht).forEach(Un => {
        if (!g || !_n.hasOwnProperty(Un)) {
          _n[Un] = An(Ht[Un], _n, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const Q = {};
    if (this.options) {
      const g = this.options.params;
      if (g) {
        const ie = Q.params = {};
        Object.keys(g).forEach($e => {
          ie[$e] = g[$e];
        });
      }
    }
    return Q;
  }
  createSubContext(Q = null, g, ie) {
    const $e = g || this.element;
    const Ht = new zs(this._driver, $e, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork($e, ie || 0));
    Ht.previousNode = this.previousNode;
    Ht.currentAnimateTimings = this.currentAnimateTimings;
    Ht.options = this._copyOptions();
    Ht.updateOptions(Q);
    Ht.currentQueryIndex = this.currentQueryIndex;
    Ht.currentQueryTotal = this.currentQueryTotal;
    Ht.parentContext = this;
    this.subContextCount++;
    return Ht;
  }
  transformIntoNewTimeline(Q) {
    this.previousNode = po;
    this.currentTimeline = this.currentTimeline.fork(this.element, Q);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(Q, g, ie) {
    const $e = {
      duration: g ?? Q.duration,
      delay: this.currentTimeline.currentTime + (ie ?? 0) + Q.delay,
      easing: ""
    };
    const Ht = new Rs(this._driver, Q.element, Q.keyframes, Q.preStyleProps, Q.postStyleProps, $e, Q.stretchStartingKeyframe);
    this.timelines.push(Ht);
    return $e;
  }
  incrementTime(Q) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + Q);
  }
  delayNextStep(Q) {
    if (Q > 0) {
      this.currentTimeline.delayNextStep(Q);
    }
  }
  invokeQuery(Q, g, ie, $e, Ht, _n) {
    let Un = [];
    if ($e) {
      Un.push(this.element);
    }
    if (Q.length > 0) {
      Q = (Q = Q.replace(Ml, "." + this._enterClassName)).replace(So, "." + this._leaveClassName);
      let Vi = this._driver.query(this.element, Q, ie != 1);
      if (ie !== 0) {
        Vi = ie < 0 ? Vi.slice(Vi.length + ie, Vi.length) : Vi.slice(0, ie);
      }
      Un.push(...Vi);
    }
    if (!Ht && Un.length == 0) {
      _n.push(function G(H) {
        return new t.vHH(3014, false);
      }());
    }
    return Un;
  }
}
class hs {
  constructor(Q, g, ie, $e) {
    this._driver = Q;
    this.element = g;
    this.startTime = ie;
    this._elementTimelineStylesLookup = $e;
    this.duration = 0;
    this._previousKeyframe = new Map();
    this._currentKeyframe = new Map();
    this._keyframes = new Map();
    this._styleSummary = new Map();
    this._localTimelineStyles = new Map();
    this._pendingStyles = new Map();
    this._backFill = new Map();
    this._currentEmptyStepKeyframe = null;
    this._elementTimelineStylesLookup ||= new Map();
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(g);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(g, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(Q) {
    const g = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || g) {
      this.forwardTime(this.currentTime + Q);
      if (g) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += Q;
    }
  }
  fork(Q, g) {
    this.applyStylesToKeyframe();
    return new hs(this._driver, Q, g || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += 1;
    this._loadKeyframe();
  }
  forwardTime(Q) {
    this.applyStylesToKeyframe();
    this.duration = Q;
    this._loadKeyframe();
  }
  _updateStyle(Q, g) {
    this._localTimelineStyles.set(Q, g);
    this._globalTimelineStyles.set(Q, g);
    this._styleSummary.set(Q, {
      time: this.currentTime,
      value: g
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(Q) {
    if (Q) {
      this._previousKeyframe.set("easing", Q);
    }
    for (let [g, ie] of this._globalTimelineStyles) {
      this._backFill.set(g, ie || k.l3);
      this._currentKeyframe.set(g, k.l3);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(Q, g, ie, $e) {
    if (g) {
      this._previousKeyframe.set("easing", g);
    }
    const Ht = $e && $e.params || {};
    const _n = function Vs(H, Q) {
      const g = new Map();
      let ie;
      H.forEach($e => {
        if ($e === "*") {
          ie = ie || Q.keys();
          for (let Ht of ie) {
            g.set(Ht, k.l3);
          }
        } else {
          js($e, g);
        }
      });
      return g;
    }(Q, this._globalTimelineStyles);
    for (let [ui, Vi] of _n) {
      const Wr = An(Vi, Ht, ie);
      var Un;
      this._pendingStyles.set(ui, Wr);
      if (!this._localTimelineStyles.has(ui)) {
        this._backFill.set(ui, (Un = this._globalTimelineStyles.get(ui)) !== null && Un !== undefined ? Un : k.l3);
      }
      this._updateStyle(ui, Wr);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size != 0) {
      this._pendingStyles.forEach((Q, g) => {
        this._currentKeyframe.set(g, Q);
      });
      this._pendingStyles.clear();
      this._localTimelineStyles.forEach((Q, g) => {
        if (!this._currentKeyframe.has(g)) {
          this._currentKeyframe.set(g, Q);
        }
      });
    }
  }
  snapshotCurrentStyles() {
    for (let [Q, g] of this._localTimelineStyles) {
      this._pendingStyles.set(Q, g);
      this._updateStyle(Q, g);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const Q = [];
    for (let g in this._currentKeyframe) {
      Q.push(g);
    }
    return Q;
  }
  mergeTimelineCollectedStyles(Q) {
    Q._styleSummary.forEach((g, ie) => {
      const $e = this._styleSummary.get(ie);
      if (!$e || g.time > $e.time) {
        this._updateStyle(ie, g.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const Q = new Set();
    const g = new Set();
    const ie = this._keyframes.size === 1 && this.duration === 0;
    let $e = [];
    this._keyframes.forEach((Un, ui) => {
      const Vi = js(Un, new Map(), this._backFill);
      Vi.forEach((Wr, Cs) => {
        if (Wr === k.k1) {
          Q.add(Cs);
        } else if (Wr === k.l3) {
          g.add(Cs);
        }
      });
      if (!ie) {
        Vi.set("offset", ui / this.duration);
      }
      $e.push(Vi);
    });
    const Ht = Q.size ? si(Q.values()) : [];
    const _n = g.size ? si(g.values()) : [];
    if (ie) {
      const Un = $e[0];
      const ui = new Map(Un);
      Un.set("offset", 0);
      ui.set("offset", 1);
      $e = [Un, ui];
    }
    return ha(this.element, $e, Ht, _n, this.duration, this.startTime, this.easing, false);
  }
}
class Rs extends hs {
  constructor(Q, g, ie, $e, Ht, _n, Un = false) {
    super(Q, g, _n.delay);
    this.keyframes = ie;
    this.preStyleProps = $e;
    this.postStyleProps = Ht;
    this._stretchStartingKeyframe = Un;
    this.timings = {
      duration: _n.duration,
      delay: _n.delay,
      easing: _n.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let Q = this.keyframes;
    let {
      delay: g,
      duration: ie,
      easing: $e
    } = this.timings;
    if (this._stretchStartingKeyframe && g) {
      const Ht = [];
      const _n = ie + g;
      const Un = g / _n;
      const ui = js(Q[0]);
      ui.set("offset", 0);
      Ht.push(ui);
      const Vi = js(Q[0]);
      Vi.set("offset", eo(Un));
      Ht.push(Vi);
      const Wr = Q.length - 1;
      for (let Cs = 1; Cs <= Wr; Cs++) {
        let Ea = js(Q[Cs]);
        const ga = Ea.get("offset");
        Ea.set("offset", eo((g + ga * ie) / _n));
        Ht.push(Ea);
      }
      ie = _n;
      g = 0;
      $e = "";
      Q = Ht;
    }
    return ha(this.element, Q, this.preStyleProps, this.postStyleProps, ie, g, $e, true);
  }
}
function eo(H, Q = 3) {
  const g = Math.pow(10, Q - 1);
  return Math.round(H * g) / g;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Wo {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Uo = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
class _r extends Wo {
  normalizePropertyName(Q, g) {
    return dr(Q);
  }
  normalizeStyleValue(Q, g, ie, $e) {
    let Ht = "";
    const _n = ie.toString().trim();
    if (Uo.has(g) && ie !== 0 && ie !== "0") {
      if (typeof ie == "number") {
        Ht = "px";
      } else {
        const Un = ie.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (Un && Un[1].length == 0) {
          $e.push(function E(H, Q) {
            return new t.vHH(3005, false);
          }());
        }
      }
    }
    return _n + Ht;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function at(H, Q, g, ie, $e, Ht, _n, Un, ui, Vi, Wr, Cs, Ea) {
  return {
    type: 0,
    element: H,
    triggerName: Q,
    isRemovalTransition: $e,
    fromState: g,
    fromStyles: Ht,
    toState: ie,
    toStyles: _n,
    timelines: Un,
    queriedElements: ui,
    preStyleProps: Vi,
    postStyleProps: Wr,
    totalTime: Cs,
    errors: Ea
  };
}
const Je = {};
class be {
  constructor(Q, g, ie) {
    this._triggerName = Q;
    this.ast = g;
    this._stateStyles = ie;
  }
  match(Q, g, ie, $e) {
    return function an(H, Q, g, ie, $e) {
      return H.some(Ht => Ht(Q, g, ie, $e));
    }(this.ast.matchers, Q, g, ie, $e);
  }
  buildStyles(Q, g, ie) {
    let $e = this._stateStyles.get("*");
    if (Q !== undefined) {
      $e = this._stateStyles.get(Q?.toString()) || $e;
    }
    if ($e) {
      return $e.buildStyles(g, ie);
    } else {
      return new Map();
    }
  }
  build(Q, g, ie, $e, Ht, _n, Un, ui, Vi, Wr) {
    const Ea = [];
    const ga = this.ast.options && this.ast.options.params || Je;
    const Ma = this.buildStyles(ie, Un && Un.params || Je, Ea);
    const Tl = ui && ui.params || Je;
    const fc = this.buildStyles($e, Tl, Ea);
    const Iu = new Set();
    const hc = new Map();
    const qc = new Map();
    const th = $e === "void";
    const cf = {
      params: Gn(Tl, ga),
      delay: this.ast.options?.delay
    };
    const Ru = Wr ? [] : pa(Q, g, this.ast.animation, Ht, _n, Ma, fc, cf, Vi, Ea);
    let bd = 0;
    Ru.forEach(uf => {
      bd = Math.max(uf.duration + uf.delay, bd);
    });
    if (Ea.length) {
      return at(g, this._triggerName, ie, $e, th, Ma, fc, [], [], hc, qc, bd, Ea);
    }
    Ru.forEach(uf => {
      const Fd = uf.element;
      const Dp = St(hc, Fd, new Set());
      uf.preStyleProps.forEach(Xh => Dp.add(Xh));
      const $h = St(qc, Fd, new Set());
      uf.postStyleProps.forEach(Xh => $h.add(Xh));
      if (Fd !== g) {
        Iu.add(Fd);
      }
    });
    const Jh = si(Iu.values());
    return at(g, this._triggerName, ie, $e, th, Ma, fc, Ru, Jh, hc, qc, bd);
  }
}
function Gn(H, Q) {
  const g = vs(Q);
  for (const ie in H) {
    if (H.hasOwnProperty(ie) && H[ie] != null) {
      g[ie] = H[ie];
    }
  }
  return g;
}
class Ki {
  constructor(Q, g, ie) {
    this.styles = Q;
    this.defaultParams = g;
    this.normalizer = ie;
  }
  buildStyles(Q, g) {
    const ie = new Map();
    const $e = vs(this.defaultParams);
    Object.keys(Q).forEach(Ht => {
      const _n = Q[Ht];
      if (_n !== null) {
        $e[Ht] = _n;
      }
    });
    this.styles.styles.forEach(Ht => {
      if (typeof Ht != "string") {
        Ht.forEach((_n, Un) => {
          _n &&= An(_n, $e, g);
          const ui = this.normalizer.normalizePropertyName(Un, g);
          _n = this.normalizer.normalizeStyleValue(Un, ui, _n, g);
          ie.set(ui, _n);
        });
      }
    });
    return ie;
  }
}
class Gr {
  constructor(Q, g, ie) {
    this.name = Q;
    this.ast = g;
    this._normalizer = ie;
    this.transitionFactories = [];
    this.states = new Map();
    g.states.forEach($e => {
      this.states.set($e.name, new Ki($e.style, $e.options && $e.options.params || {}, ie));
    });
    Ks(this.states, "true", "1");
    Ks(this.states, "false", "0");
    g.transitions.forEach($e => {
      this.transitionFactories.push(new be(Q, $e, this.states));
    });
    this.fallbackTransition = function zr(H, Q, g) {
      return new be(H, {
        type: 1,
        animation: {
          type: 2,
          steps: [],
          options: null
        },
        matchers: [(_n, Un) => true],
        options: null,
        queryCount: 0,
        depCount: 0
      }, Q);
    }(Q, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(Q, g, ie, $e) {
    return this.transitionFactories.find(_n => _n.match(Q, g, ie, $e)) || null;
  }
  matchStyles(Q, g, ie) {
    return this.fallbackTransition.buildStyles(Q, g, ie);
  }
}
function Ks(H, Q, g) {
  if (H.has(Q)) {
    if (!H.has(g)) {
      H.set(g, H.get(Q));
    }
  } else if (H.has(g)) {
    H.set(Q, H.get(g));
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Js = new Ca();
class Xt {
  constructor(Q, g, ie) {
    this.bodyNode = Q;
    this._driver = g;
    this._normalizer = ie;
    this._animations = new Map();
    this._playersById = new Map();
    this.players = [];
  }
  register(Q, g) {
    const ie = [];
    const Ht = la(this._driver, g, ie, []);
    if (ie.length) {
      throw function re(H) {
        return new t.vHH(3503, false);
      }();
    }
    this._animations.set(Q, Ht);
  }
  _buildPlayer(Q, g, ie) {
    const $e = Q.element;
    const Ht = Dn(0, this._normalizer, 0, Q.keyframes, g, ie);
    return this._driver.animate($e, Ht, Q.duration, Q.delay, Q.easing, [], true);
  }
  create(Q, g, ie = {}) {
    const $e = [];
    const Ht = this._animations.get(Q);
    let _n;
    const Un = new Map();
    if (Ht) {
      _n = pa(this._driver, g, Ht, Si, Zi, new Map(), new Map(), ie, Js, $e);
      _n.forEach(Wr => {
        const Cs = St(Un, Wr.element, new Map());
        Wr.postStyleProps.forEach(Ea => Cs.set(Ea, null));
      });
    } else {
      $e.push(function Re() {
        return new t.vHH(3300, false);
      }());
      _n = [];
    }
    if ($e.length) {
      throw function Ge(H) {
        return new t.vHH(3504, false);
      }();
    }
    Un.forEach((Wr, Cs) => {
      Wr.forEach((Ea, ga) => {
        Wr.set(ga, this._driver.computeStyle(Cs, ga, k.l3));
      });
    });
    const Vi = Yt(_n.map(Wr => {
      const Cs = Un.get(Wr.element);
      return this._buildPlayer(Wr, new Map(), Cs);
    }));
    this._playersById.set(Q, Vi);
    Vi.onDestroy(() => this.destroy(Q));
    this.players.push(Vi);
    return Vi;
  }
  destroy(Q) {
    const g = this._getPlayer(Q);
    g.destroy();
    this._playersById.delete(Q);
    const ie = this.players.indexOf(g);
    if (ie >= 0) {
      this.players.splice(ie, 1);
    }
  }
  _getPlayer(Q) {
    const g = this._playersById.get(Q);
    if (!g) {
      throw function Ue(H) {
        return new t.vHH(3301, false);
      }();
    }
    return g;
  }
  listen(Q, g, ie, $e) {
    const Ht = et(g, "", "", "");
    Et(this._getPlayer(Q), ie, Ht, $e);
    return () => {};
  }
  command(Q, g, ie, $e) {
    if (ie == "register") {
      this.register(Q, $e[0]);
      return;
    }
    if (ie == "create") {
      this.create(Q, g, $e[0] || {});
      return;
    }
    const Ht = this._getPlayer(Q);
    switch (ie) {
      case "play":
        Ht.play();
        break;
      case "pause":
        Ht.pause();
        break;
      case "reset":
        Ht.reset();
        break;
      case "restart":
        Ht.restart();
        break;
      case "finish":
        Ht.finish();
        break;
      case "init":
        Ht.init();
        break;
      case "setPosition":
        Ht.setPosition(parseFloat($e[0]));
        break;
      case "destroy":
        this.destroy(Q);
    }
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ut = "ng-animate-queued";
const Zt = "ng-animate-disabled";
const Oi = [];
const Xi = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
const nr = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
const mr = "__ng_removed";
class Jr {
  constructor(Q, g = "") {
    this.namespaceId = g;
    const ie = Q && Q.hasOwnProperty("value");
    this.value = function ao(H) {
      return H ?? null;
    }(ie ? Q.value : Q);
    if (ie) {
      const Ht = vs(Q);
      delete Ht.value;
      this.options = Ht;
    } else {
      this.options = {};
    }
    this.options.params ||= {};
  }
  get params() {
    return this.options.params;
  }
  absorbOptions(Q) {
    const g = Q.params;
    if (g) {
      const ie = this.options.params;
      Object.keys(g).forEach($e => {
        if (ie[$e] == null) {
          ie[$e] = g[$e];
        }
      });
    }
  }
}
const Ss = "void";
const Ys = new Jr(Ss);
class xo {
  constructor(Q, g, ie) {
    this.id = Q;
    this.hostElement = g;
    this._engine = ie;
    this.players = [];
    this._triggers = new Map();
    this._queue = [];
    this._elementListeners = new Map();
    this._hostClassName = "ng-tns-" + Q;
    Xe(g, this._hostClassName);
  }
  listen(Q, g, ie, $e) {
    if (!this._triggers.has(g)) {
      throw function ot(H, Q) {
        return new t.vHH(3302, false);
      }();
    }
    if (ie == null || ie.length == 0) {
      throw function st(H) {
        return new t.vHH(3303, false);
      }();
    }
    if (!function Rr(H) {
      return H == "start" || H == "done";
    }(ie)) {
      throw function rt(H, Q) {
        return new t.vHH(3400, false);
      }();
    }
    const Ht = St(this._elementListeners, Q, []);
    const _n = {
      name: g,
      phase: ie,
      callback: $e
    };
    Ht.push(_n);
    const Un = St(this._engine.statesByElement, Q, new Map());
    if (!Un.has(g)) {
      Xe(Q, $i);
      Xe(Q, $i + "-" + g);
      Un.set(g, Ys);
    }
    return () => {
      this._engine.afterFlush(() => {
        const ui = Ht.indexOf(_n);
        if (ui >= 0) {
          Ht.splice(ui, 1);
        }
        if (!this._triggers.has(g)) {
          Un.delete(g);
        }
      });
    };
  }
  register(Q, g) {
    return !this._triggers.has(Q) && (this._triggers.set(Q, g), true);
  }
  _getTrigger(Q) {
    const g = this._triggers.get(Q);
    if (!g) {
      throw function Oe(H) {
        return new t.vHH(3401, false);
      }();
    }
    return g;
  }
  trigger(Q, g, ie, $e = true) {
    const Ht = this._getTrigger(g);
    const _n = new sr(this.id, g, Q);
    let Un = this._engine.statesByElement.get(Q);
    if (!Un) {
      Xe(Q, $i);
      Xe(Q, $i + "-" + g);
      this._engine.statesByElement.set(Q, Un = new Map());
    }
    let ui = Un.get(g);
    const Vi = new Jr(ie, this.id);
    if ((!ie || !ie.hasOwnProperty("value")) && ui) {
      Vi.absorbOptions(ui.options);
    }
    Un.set(g, Vi);
    ui ||= Ys;
    if (Vi.value !== Ss && ui.value === Vi.value) {
      if (!function wn(H, Q) {
        const g = Object.keys(H);
        const ie = Object.keys(Q);
        if (g.length != ie.length) {
          return false;
        }
        for (let $e = 0; $e < g.length; $e++) {
          const Ht = g[$e];
          if (!Q.hasOwnProperty(Ht) || H[Ht] !== Q[Ht]) {
            return false;
          }
        }
        return true;
      }(ui.params, Vi.params)) {
        const Ma = [];
        const Tl = Ht.matchStyles(ui.value, ui.params, Ma);
        const fc = Ht.matchStyles(Vi.value, Vi.params, Ma);
        if (Ma.length) {
          this._engine.reportError(Ma);
        } else {
          this._engine.afterFlush(() => {
            Bn(Q, Tl);
            pr(Q, fc);
          });
        }
      }
      return;
    }
    const Ea = St(this._engine.playersByElement, Q, []);
    Ea.forEach(Ma => {
      if (Ma.namespaceId == this.id && Ma.triggerName == g && Ma.queued) {
        Ma.destroy();
      }
    });
    let ga = Ht.matchTransition(ui.value, Vi.value, Q, Vi.params);
    let aa = false;
    if (!ga) {
      if (!$e) {
        return;
      }
      ga = Ht.fallbackTransition;
      aa = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element: Q,
      triggerName: g,
      transition: ga,
      fromState: ui,
      toState: Vi,
      player: _n,
      isFallbackTransition: aa
    });
    if (!aa) {
      Xe(Q, ut);
      _n.onStart(() => {
        $t(Q, ut);
      });
    }
    _n.onDone(() => {
      let Ma = this.players.indexOf(_n);
      if (Ma >= 0) {
        this.players.splice(Ma, 1);
      }
      const Tl = this._engine.playersByElement.get(Q);
      if (Tl) {
        let fc = Tl.indexOf(_n);
        if (fc >= 0) {
          Tl.splice(fc, 1);
        }
      }
    });
    this.players.push(_n);
    Ea.push(_n);
    return _n;
  }
  deregister(Q) {
    this._triggers.delete(Q);
    this._engine.statesByElement.forEach(g => g.delete(Q));
    this._elementListeners.forEach((g, ie) => {
      this._elementListeners.set(ie, g.filter($e => $e.name != Q));
    });
  }
  clearElementCache(Q) {
    this._engine.statesByElement.delete(Q);
    this._elementListeners.delete(Q);
    const g = this._engine.playersByElement.get(Q);
    if (g) {
      g.forEach(ie => ie.destroy());
      this._engine.playersByElement.delete(Q);
    }
  }
  _signalRemovalForInnerTriggers(Q, g) {
    const ie = this._engine.driver.query(Q, Qi, true);
    ie.forEach($e => {
      if ($e[mr]) {
        return;
      }
      const Ht = this._engine.fetchNamespacesByElement($e);
      if (Ht.size) {
        Ht.forEach(_n => _n.triggerLeaveAnimation($e, g, false, true));
      } else {
        this.clearElementCache($e);
      }
    });
    this._engine.afterFlushAnimationsDone(() => ie.forEach($e => this.clearElementCache($e)));
  }
  triggerLeaveAnimation(Q, g, ie, $e) {
    const Ht = this._engine.statesByElement.get(Q);
    const _n = new Map();
    if (Ht) {
      const Un = [];
      Ht.forEach((ui, Vi) => {
        _n.set(Vi, ui.value);
        if (this._triggers.has(Vi)) {
          const Wr = this.trigger(Q, Vi, Ss, $e);
          if (Wr) {
            Un.push(Wr);
          }
        }
      });
      if (Un.length) {
        this._engine.markElementAsRemoved(this.id, Q, true, g, _n);
        if (ie) {
          Yt(Un).onDone(() => this._engine.processLeaveNode(Q));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(Q) {
    const g = this._elementListeners.get(Q);
    const ie = this._engine.statesByElement.get(Q);
    if (g && ie) {
      const $e = new Set();
      g.forEach(Ht => {
        const _n = Ht.name;
        if ($e.has(_n)) {
          return;
        }
        $e.add(_n);
        const ui = this._triggers.get(_n).fallbackTransition;
        const Vi = ie.get(_n) || Ys;
        const Wr = new Jr(Ss);
        const Cs = new sr(this.id, _n, Q);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element: Q,
          triggerName: _n,
          transition: ui,
          fromState: Vi,
          toState: Wr,
          player: Cs,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(Q, g) {
    const ie = this._engine;
    if (Q.childElementCount) {
      this._signalRemovalForInnerTriggers(Q, g);
    }
    if (this.triggerLeaveAnimation(Q, g, true)) {
      return;
    }
    let $e = false;
    if (ie.totalAnimations) {
      const Ht = ie.players.length ? ie.playersByQueriedElement.get(Q) : [];
      if (Ht && Ht.length) {
        $e = true;
      } else {
        let _n = Q;
        for (; _n = _n.parentNode;) {
          if (ie.statesByElement.get(_n)) {
            $e = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(Q);
    if ($e) {
      ie.markElementAsRemoved(this.id, Q, false, g);
    } else {
      const Ht = Q[mr];
      if (!Ht || Ht === Xi) {
        ie.afterFlush(() => this.clearElementCache(Q));
        ie.destroyInnerAnimations(Q);
        ie._onRemovalComplete(Q, g);
      }
    }
  }
  insertNode(Q, g) {
    Xe(Q, this._hostClassName);
  }
  drainQueuedTransitions(Q) {
    const g = [];
    this._queue.forEach(ie => {
      const $e = ie.player;
      if ($e.destroyed) {
        return;
      }
      const Ht = ie.element;
      const _n = this._elementListeners.get(Ht);
      if (_n) {
        _n.forEach(Un => {
          if (Un.name == ie.triggerName) {
            const ui = et(Ht, ie.triggerName, ie.fromState.value, ie.toState.value);
            ui._data = Q;
            Et(ie.player, Un.phase, ui, Un.callback);
          }
        });
      }
      if ($e.markedForDestroy) {
        this._engine.afterFlush(() => {
          $e.destroy();
        });
      } else {
        g.push(ie);
      }
    });
    this._queue = [];
    return g.sort((ie, $e) => {
      const Ht = ie.transition.ast.depCount;
      const _n = $e.transition.ast.depCount;
      if (Ht == 0 || _n == 0) {
        return Ht - _n;
      } else if (this._engine.driver.containsElement(ie.element, $e.element)) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  destroy(Q) {
    this.players.forEach(g => g.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, Q);
  }
  elementContainsData(Q) {
    let g = false;
    if (this._elementListeners.has(Q)) {
      g = true;
    }
    g = !!this._queue.find(ie => ie.element === Q) || g;
    return g;
  }
}
class Ls {
  constructor(Q, g, ie) {
    this.bodyNode = Q;
    this.driver = g;
    this._normalizer = ie;
    this.players = [];
    this.newHostElements = new Map();
    this.playersByElement = new Map();
    this.playersByQueriedElement = new Map();
    this.statesByElement = new Map();
    this.disabledNodes = new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = [];
    this.onRemovalComplete = ($e, Ht) => {};
  }
  _onRemovalComplete(Q, g) {
    this.onRemovalComplete(Q, g);
  }
  get queuedPlayers() {
    const Q = [];
    this._namespaceList.forEach(g => {
      g.players.forEach(ie => {
        if (ie.queued) {
          Q.push(ie);
        }
      });
    });
    return Q;
  }
  createNamespace(Q, g) {
    const ie = new xo(Q, g, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, g)) {
      this._balanceNamespaceList(ie, g);
    } else {
      this.newHostElements.set(g, ie);
      this.collectEnterElement(g);
    }
    return this._namespaceLookup[Q] = ie;
  }
  _balanceNamespaceList(Q, g) {
    const ie = this._namespaceList;
    const $e = this.namespacesByHostElement;
    if (ie.length - 1 >= 0) {
      let _n = false;
      let Un = this.driver.getParentElement(g);
      for (; Un;) {
        const ui = $e.get(Un);
        if (ui) {
          const Vi = ie.indexOf(ui);
          ie.splice(Vi + 1, 0, Q);
          _n = true;
          break;
        }
        Un = this.driver.getParentElement(Un);
      }
      if (!_n) {
        ie.unshift(Q);
      }
    } else {
      ie.push(Q);
    }
    $e.set(g, Q);
    return Q;
  }
  register(Q, g) {
    let ie = this._namespaceLookup[Q];
    ie ||= this.createNamespace(Q, g);
    return ie;
  }
  registerTrigger(Q, g, ie) {
    let $e = this._namespaceLookup[Q];
    if ($e && $e.register(g, ie)) {
      this.totalAnimations++;
    }
  }
  destroy(Q, g) {
    if (!Q) {
      return;
    }
    const ie = this._fetchNamespace(Q);
    this.afterFlush(() => {
      this.namespacesByHostElement.delete(ie.hostElement);
      delete this._namespaceLookup[Q];
      const $e = this._namespaceList.indexOf(ie);
      if ($e >= 0) {
        this._namespaceList.splice($e, 1);
      }
    });
    this.afterFlushAnimationsDone(() => ie.destroy(g));
  }
  _fetchNamespace(Q) {
    return this._namespaceLookup[Q];
  }
  fetchNamespacesByElement(Q) {
    const g = new Set();
    const ie = this.statesByElement.get(Q);
    if (ie) {
      for (let $e of ie.values()) {
        if ($e.namespaceId) {
          const Ht = this._fetchNamespace($e.namespaceId);
          if (Ht) {
            g.add(Ht);
          }
        }
      }
    }
    return g;
  }
  trigger(Q, g, ie, $e) {
    if (sl(g)) {
      const Ht = this._fetchNamespace(Q);
      if (Ht) {
        Ht.trigger(g, ie, $e);
        return true;
      }
    }
    return false;
  }
  insertNode(Q, g, ie, $e) {
    if (!sl(g)) {
      return;
    }
    const Ht = g[mr];
    if (Ht && Ht.setForRemoval) {
      Ht.setForRemoval = false;
      Ht.setForMove = true;
      const _n = this.collectedLeaveElements.indexOf(g);
      if (_n >= 0) {
        this.collectedLeaveElements.splice(_n, 1);
      }
    }
    if (Q) {
      const _n = this._fetchNamespace(Q);
      if (_n) {
        _n.insertNode(g, ie);
      }
    }
    if ($e) {
      this.collectEnterElement(g);
    }
  }
  collectEnterElement(Q) {
    this.collectedEnterElements.push(Q);
  }
  markElementAsDisabled(Q, g) {
    if (g) {
      if (!this.disabledNodes.has(Q)) {
        this.disabledNodes.add(Q);
        Xe(Q, Zt);
      }
    } else if (this.disabledNodes.has(Q)) {
      this.disabledNodes.delete(Q);
      $t(Q, Zt);
    }
  }
  removeNode(Q, g, ie, $e) {
    if (sl(g)) {
      const Ht = Q ? this._fetchNamespace(Q) : null;
      if (Ht) {
        Ht.removeNode(g, $e);
      } else {
        this.markElementAsRemoved(Q, g, false, $e);
      }
      if (ie) {
        const _n = this.namespacesByHostElement.get(g);
        if (_n && _n.id !== Q) {
          _n.removeNode(g, $e);
        }
      }
    } else {
      this._onRemovalComplete(g, $e);
    }
  }
  markElementAsRemoved(Q, g, ie, $e, Ht) {
    this.collectedLeaveElements.push(g);
    g[mr] = {
      namespaceId: Q,
      setForRemoval: $e,
      hasAnimation: ie,
      removedBeforeQueried: false,
      previousTriggersValues: Ht
    };
  }
  listen(Q, g, ie, $e, Ht) {
    if (sl(g)) {
      return this._fetchNamespace(Q).listen(g, ie, $e, Ht);
    } else {
      return () => {};
    }
  }
  _buildInstruction(Q, g, ie, $e, Ht) {
    return Q.transition.build(this.driver, Q.element, Q.fromState.value, Q.toState.value, ie, $e, Q.fromState.options, Q.toState.options, g, Ht);
  }
  destroyInnerAnimations(Q) {
    let g = this.driver.query(Q, Qi, true);
    g.forEach(ie => this.destroyActiveAnimationsForElement(ie));
    if (this.playersByQueriedElement.size != 0) {
      g = this.driver.query(Q, Ar, true);
      g.forEach(ie => this.finishActiveQueriedAnimationOnElement(ie));
    }
  }
  destroyActiveAnimationsForElement(Q) {
    const g = this.playersByElement.get(Q);
    if (g) {
      g.forEach(ie => {
        if (ie.queued) {
          ie.markedForDestroy = true;
        } else {
          ie.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(Q) {
    const g = this.playersByQueriedElement.get(Q);
    if (g) {
      g.forEach(ie => ie.finish());
    }
  }
  whenRenderingDone() {
    return new Promise(Q => {
      if (this.players.length) {
        return Yt(this.players).onDone(() => Q());
      }
      Q();
    });
  }
  processLeaveNode(Q) {
    var g;
    const ie = Q[mr];
    if (ie && ie.setForRemoval) {
      Q[mr] = Xi;
      if (ie.namespaceId) {
        this.destroyInnerAnimations(Q);
        const $e = this._fetchNamespace(ie.namespaceId);
        if ($e) {
          $e.clearElementCache(Q);
        }
      }
      this._onRemovalComplete(Q, ie.setForRemoval);
    }
    if ((g = Q.classList) !== null && g !== undefined && g.contains(Zt)) {
      this.markElementAsDisabled(Q, false);
    }
    this.driver.query(Q, ".ng-animate-disabled", true).forEach($e => {
      this.markElementAsDisabled($e, false);
    });
  }
  flush(Q = -1) {
    let g = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ie, $e) => this._balanceNamespaceList(ie, $e));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let ie = 0; ie < this.collectedEnterElements.length; ie++) {
        Xe(this.collectedEnterElements[ie], "ng-star-inserted");
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const ie = [];
      try {
        g = this._flushAnimations(ie, Q);
      } finally {
        for (let $e = 0; $e < ie.length; $e++) {
          ie[$e]();
        }
      }
    } else {
      for (let ie = 0; ie < this.collectedLeaveElements.length; ie++) {
        this.processLeaveNode(this.collectedLeaveElements[ie]);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach(ie => ie());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const ie = this._whenQuietFns;
      this._whenQuietFns = [];
      if (g.length) {
        Yt(g).onDone(() => {
          ie.forEach($e => $e());
        });
      } else {
        ie.forEach($e => $e());
      }
    }
  }
  reportError(Q) {
    throw function Ee(H) {
      return new t.vHH(3402, false);
    }();
  }
  _flushAnimations(Q, g) {
    const ie = new Ca();
    const $e = [];
    const Ht = new Map();
    const _n = [];
    const Un = new Map();
    const ui = new Map();
    const Vi = new Map();
    const Wr = new Set();
    this.disabledNodes.forEach(Oo => {
      Wr.add(Oo);
      const mo = this.driver.query(Oo, ".ng-animate-queued", true);
      for (let ia = 0; ia < mo.length; ia++) {
        Wr.add(mo[ia]);
      }
    });
    const Cs = this.bodyNode;
    const Ea = Array.from(this.statesByElement.keys());
    const ga = Mr(Ea, this.collectedEnterElements);
    const aa = new Map();
    let Ma = 0;
    ga.forEach((Oo, mo) => {
      const ia = Si + Ma++;
      aa.set(mo, ia);
      Oo.forEach(il => Xe(il, ia));
    });
    const Tl = [];
    const fc = new Set();
    const Iu = new Set();
    for (let Oo = 0; Oo < this.collectedLeaveElements.length; Oo++) {
      const mo = this.collectedLeaveElements[Oo];
      const ia = mo[mr];
      if (ia && ia.setForRemoval) {
        Tl.push(mo);
        fc.add(mo);
        if (ia.hasAnimation) {
          this.driver.query(mo, ".ng-star-inserted", true).forEach(il => fc.add(il));
        } else {
          Iu.add(mo);
        }
      }
    }
    const hc = new Map();
    const qc = Mr(Ea, Array.from(fc));
    qc.forEach((Oo, mo) => {
      const ia = Zi + Ma++;
      hc.set(mo, ia);
      Oo.forEach(il => Xe(il, ia));
    });
    Q.push(() => {
      ga.forEach((Oo, mo) => {
        const ia = aa.get(mo);
        Oo.forEach(il => $t(il, ia));
      });
      qc.forEach((Oo, mo) => {
        const ia = hc.get(mo);
        Oo.forEach(il => $t(il, ia));
      });
      Tl.forEach(Oo => {
        this.processLeaveNode(Oo);
      });
    });
    const th = [];
    const cf = [];
    for (let Oo = this._namespaceList.length - 1; Oo >= 0; Oo--) {
      this._namespaceList[Oo].drainQueuedTransitions(g).forEach(ia => {
        const il = ia.player;
        const Oc = ia.element;
        th.push(il);
        if (this.collectedEnterElements.length) {
          const du = Oc[mr];
          if (du && du.setForMove) {
            if (du.previousTriggersValues && du.previousTriggersValues.has(ia.triggerName)) {
              const Sh = du.previousTriggersValues.get(ia.triggerName);
              const Fu = this.statesByElement.get(ia.element);
              if (Fu && Fu.has(ia.triggerName)) {
                const Tm = Fu.get(ia.triggerName);
                Tm.value = Sh;
                Fu.set(ia.triggerName, Tm);
              }
            }
            il.destroy();
            return;
          }
        }
        const ud = !Cs || !this.driver.containsElement(Cs, Oc);
        const zu = hc.get(Oc);
        const df = aa.get(Oc);
        const Pc = this._buildInstruction(ia, ie, df, zu, ud);
        if (Pc.errors && Pc.errors.length) {
          cf.push(Pc);
          return;
        }
        if (ud) {
          il.onStart(() => Bn(Oc, Pc.fromStyles));
          il.onDestroy(() => pr(Oc, Pc.toStyles));
          $e.push(il);
          return;
        }
        if (ia.isFallbackTransition) {
          il.onStart(() => Bn(Oc, Pc.fromStyles));
          il.onDestroy(() => pr(Oc, Pc.toStyles));
          $e.push(il);
          return;
        }
        const Nv = [];
        Pc.timelines.forEach(du => {
          du.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(du.element)) {
            Nv.push(du);
          }
        });
        Pc.timelines = Nv;
        ie.append(Oc, Pc.timelines);
        _n.push({
          instruction: Pc,
          player: il,
          element: Oc
        });
        Pc.queriedElements.forEach(du => St(Un, du, []).push(il));
        Pc.preStyleProps.forEach((du, Sh) => {
          if (du.size) {
            let Fu = ui.get(Sh);
            if (!Fu) {
              ui.set(Sh, Fu = new Set());
            }
            du.forEach((Tm, Tp) => Fu.add(Tp));
          }
        });
        Pc.postStyleProps.forEach((du, Sh) => {
          let Fu = Vi.get(Sh);
          if (!Fu) {
            Vi.set(Sh, Fu = new Set());
          }
          du.forEach((Tm, Tp) => Fu.add(Tp));
        });
      });
    }
    if (cf.length) {
      const Oo = [];
      cf.forEach(mo => {
        Oo.push(function Be(H, Q) {
          return new t.vHH(3505, false);
        }
        /**
               * @license
               * Copyright Google LLC All Rights Reserved.
               *
               * Use of this source code is governed by an MIT-style license that can be
               * found in the LICENSE file at https://angular.io/license
               */());
      });
      th.forEach(mo => mo.destroy());
      this.reportError(Oo);
    }
    const Ru = new Map();
    const bd = new Map();
    _n.forEach(Oo => {
      const mo = Oo.element;
      if (ie.has(mo)) {
        bd.set(mo, mo);
        this._beforeAnimationBuild(Oo.player.namespaceId, Oo.instruction, Ru);
      }
    });
    $e.forEach(Oo => {
      const mo = Oo.element;
      this._getPreviousPlayers(mo, false, Oo.namespaceId, Oo.triggerName, null).forEach(il => {
        St(Ru, mo, []).push(il);
        il.destroy();
      });
    });
    const Jh = Tl.filter(Oo => tr(Oo, ui, Vi));
    const uf = new Map();
    Fa(uf, this.driver, Iu, Vi, k.l3).forEach(Oo => {
      if (tr(Oo, ui, Vi)) {
        Jh.push(Oo);
      }
    });
    const Dp = new Map();
    ga.forEach((Oo, mo) => {
      Fa(Dp, this.driver, new Set(Oo), ui, k.k1);
    });
    Jh.forEach(Oo => {
      const il = uf.get(Oo);
      const Oc = Dp.get(Oo);
      uf.set(Oo, new Map([...Array.from(il?.entries() ?? []), ...Array.from(Oc?.entries() ?? [])]));
    });
    const $h = [];
    const Xh = [];
    const bg = {};
    _n.forEach(Oo => {
      const {
        element: mo,
        player: ia,
        instruction: il
      } = Oo;
      if (ie.has(mo)) {
        if (Wr.has(mo)) {
          ia.onDestroy(() => pr(mo, il.toStyles));
          ia.disabled = true;
          ia.overrideTotalTime(il.totalTime);
          $e.push(ia);
          return;
        }
        let Oc = bg;
        if (bd.size > 1) {
          let zu = mo;
          const df = [];
          for (; zu = zu.parentNode;) {
            const Pc = bd.get(zu);
            if (Pc) {
              Oc = Pc;
              break;
            }
            df.push(zu);
          }
          df.forEach(Pc => bd.set(Pc, Oc));
        }
        const ud = this._buildAnimation(ia.namespaceId, il, Ru, Ht, Dp, uf);
        ia.setRealPlayer(ud);
        if (Oc === bg) {
          $h.push(ia);
        } else {
          const zu = this.playersByElement.get(Oc);
          if (zu && zu.length) {
            ia.parentPlayer = Yt(zu);
          }
          $e.push(ia);
        }
      } else {
        Bn(mo, il.fromStyles);
        ia.onDestroy(() => pr(mo, il.toStyles));
        Xh.push(ia);
        if (Wr.has(mo)) {
          $e.push(ia);
        }
      }
    });
    Xh.forEach(Oo => {
      const mo = Ht.get(Oo.element);
      if (mo && mo.length) {
        const ia = Yt(mo);
        Oo.setRealPlayer(ia);
      }
    });
    $e.forEach(Oo => {
      if (Oo.parentPlayer) {
        Oo.syncPlayerEvents(Oo.parentPlayer);
      } else {
        Oo.destroy();
      }
    });
    for (let Oo = 0; Oo < Tl.length; Oo++) {
      const mo = Tl[Oo];
      const ia = mo[mr];
      $t(mo, Zi);
      if (ia && ia.hasAnimation) {
        continue;
      }
      let il = [];
      if (Un.size) {
        let ud = Un.get(mo);
        if (ud && ud.length) {
          il.push(...ud);
        }
        let zu = this.driver.query(mo, Ar, true);
        for (let df = 0; df < zu.length; df++) {
          let Pc = Un.get(zu[df]);
          if (Pc && Pc.length) {
            il.push(...Pc);
          }
        }
      }
      const Oc = il.filter(ud => !ud.destroyed);
      if (Oc.length) {
        _e(this, mo, Oc);
      } else {
        this.processLeaveNode(mo);
      }
    }
    Tl.length = 0;
    $h.forEach(Oo => {
      this.players.push(Oo);
      Oo.onDone(() => {
        Oo.destroy();
        const mo = this.players.indexOf(Oo);
        this.players.splice(mo, 1);
      });
      Oo.play();
    });
    return $h;
  }
  elementContainsData(Q, g) {
    let ie = false;
    const $e = g[mr];
    if ($e && $e.setForRemoval) {
      ie = true;
    }
    if (this.playersByElement.has(g)) {
      ie = true;
    }
    if (this.playersByQueriedElement.has(g)) {
      ie = true;
    }
    if (this.statesByElement.has(g)) {
      ie = true;
    }
    return this._fetchNamespace(Q).elementContainsData(g) || ie;
  }
  afterFlush(Q) {
    this._flushFns.push(Q);
  }
  afterFlushAnimationsDone(Q) {
    this._whenQuietFns.push(Q);
  }
  _getPreviousPlayers(Q, g, ie, $e, Ht) {
    let _n = [];
    if (g) {
      const Un = this.playersByQueriedElement.get(Q);
      if (Un) {
        _n = Un;
      }
    } else {
      const Un = this.playersByElement.get(Q);
      if (Un) {
        const ui = !Ht || Ht == Ss;
        Un.forEach(Vi => {
          if (!Vi.queued && (!!ui || Vi.triggerName == $e)) {
            _n.push(Vi);
          }
        });
      }
    }
    if (ie || $e) {
      _n = _n.filter(Un => (!ie || ie == Un.namespaceId) && (!$e || $e == Un.triggerName));
    }
    return _n;
  }
  _beforeAnimationBuild(Q, g, ie) {
    const Ht = g.element;
    const _n = g.isRemovalTransition ? undefined : Q;
    const Un = g.isRemovalTransition ? undefined : g.triggerName;
    for (const ui of g.timelines) {
      const Vi = ui.element;
      const Wr = Vi !== Ht;
      const Cs = St(ie, Vi, []);
      this._getPreviousPlayers(Vi, Wr, _n, Un, g.toState).forEach(ga => {
        const aa = ga.getRealPlayer();
        if (aa.beforeDestroy) {
          aa.beforeDestroy();
        }
        ga.destroy();
        Cs.push(ga);
      });
    }
    Bn(Ht, g.fromStyles);
  }
  _buildAnimation(Q, g, ie, $e, Ht, _n) {
    const Un = g.triggerName;
    const ui = g.element;
    const Vi = [];
    const Wr = new Set();
    const Cs = new Set();
    const Ea = g.timelines.map(aa => {
      const Ma = aa.element;
      Wr.add(Ma);
      const Tl = Ma[mr];
      if (Tl && Tl.removedBeforeQueried) {
        return new k.ZN(aa.duration, aa.delay);
      }
      const fc = Ma !== ui;
      const Iu = function xt(H) {
        const Q = [];
        gn(H, Q);
        return Q;
      }((ie.get(Ma) || Oi).map(Ru => Ru.getRealPlayer())).filter(Ru => !!Ru.element && Ru.element === Ma);
      const hc = Ht.get(Ma);
      const qc = _n.get(Ma);
      const th = Dn(0, this._normalizer, 0, aa.keyframes, hc, qc);
      const cf = this._buildPlayer(aa, th, Iu);
      if (aa.subTimeline && $e) {
        Cs.add(Ma);
      }
      if (fc) {
        const Ru = new sr(Q, Un, Ma);
        Ru.setRealPlayer(cf);
        Vi.push(Ru);
      }
      return cf;
    });
    Vi.forEach(aa => {
      St(this.playersByQueriedElement, aa.element, []).push(aa);
      aa.onDone(() => function wa(H, Q, g) {
        let ie = H.get(Q);
        if (ie) {
          if (ie.length) {
            const $e = ie.indexOf(g);
            ie.splice($e, 1);
          }
          if (ie.length == 0) {
            H.delete(Q);
          }
        }
        return ie;
      }(this.playersByQueriedElement, aa.element, aa));
    });
    Wr.forEach(aa => Xe(aa, br));
    const ga = Yt(Ea);
    ga.onDestroy(() => {
      Wr.forEach(aa => $t(aa, br));
      pr(ui, g.toStyles);
    });
    Cs.forEach(aa => {
      St($e, aa, []).push(ga);
    });
    return ga;
  }
  _buildPlayer(Q, g, ie) {
    if (g.length > 0) {
      return this.driver.animate(Q.element, g, Q.duration, Q.delay, Q.easing, ie);
    } else {
      return new k.ZN(Q.duration, Q.delay);
    }
  }
}
class sr {
  constructor(Q, g, ie) {
    this.namespaceId = Q;
    this.triggerName = g;
    this.element = ie;
    this._player = new k.ZN();
    this._containsRealPlayer = false;
    this._queuedCallbacks = new Map();
    this.destroyed = false;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }
  setRealPlayer(Q) {
    if (!this._containsRealPlayer) {
      this._player = Q;
      this._queuedCallbacks.forEach((g, ie) => {
        g.forEach($e => Et(Q, ie, undefined, $e));
      });
      this._queuedCallbacks.clear();
      this._containsRealPlayer = true;
      this.overrideTotalTime(Q.totalTime);
      this.queued = false;
    }
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(Q) {
    this.totalTime = Q;
  }
  syncPlayerEvents(Q) {
    const g = this._player;
    if (g.triggerCallback) {
      Q.onStart(() => g.triggerCallback("start"));
    }
    Q.onDone(() => this.finish());
    Q.onDestroy(() => this.destroy());
  }
  _queueEvent(Q, g) {
    St(this._queuedCallbacks, Q, []).push(g);
  }
  onDone(Q) {
    if (this.queued) {
      this._queueEvent("done", Q);
    }
    this._player.onDone(Q);
  }
  onStart(Q) {
    if (this.queued) {
      this._queueEvent("start", Q);
    }
    this._player.onStart(Q);
  }
  onDestroy(Q) {
    if (this.queued) {
      this._queueEvent("destroy", Q);
    }
    this._player.onDestroy(Q);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return !this.queued && this._player.hasStarted();
  }
  play() {
    if (!this.queued) {
      this._player.play();
    }
  }
  pause() {
    if (!this.queued) {
      this._player.pause();
    }
  }
  restart() {
    if (!this.queued) {
      this._player.restart();
    }
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    if (!this.queued) {
      this._player.reset();
    }
  }
  setPosition(Q) {
    if (!this.queued) {
      this._player.setPosition(Q);
    }
  }
  getPosition() {
    if (this.queued) {
      return 0;
    } else {
      return this._player.getPosition();
    }
  }
  triggerCallback(Q) {
    const g = this._player;
    if (g.triggerCallback) {
      g.triggerCallback(Q);
    }
  }
}
function sl(H) {
  return H && H.nodeType === 1;
}
function el(H, Q) {
  const g = H.style.display;
  H.style.display = Q ?? "none";
  return g;
}
function Fa(H, Q, g, ie, $e) {
  const Ht = [];
  g.forEach(ui => Ht.push(el(ui)));
  const _n = [];
  ie.forEach((ui, Vi) => {
    const Wr = new Map();
    ui.forEach(Cs => {
      const Ea = Q.computeStyle(Vi, Cs, $e);
      Wr.set(Cs, Ea);
      if (!Ea || Ea.length == 0) {
        Vi[mr] = nr;
        _n.push(Vi);
      }
    });
    H.set(Vi, Wr);
  });
  let Un = 0;
  g.forEach(ui => el(ui, Ht[Un++]));
  return _n;
}
function Mr(H, Q) {
  const g = new Map();
  H.forEach(Un => g.set(Un, []));
  if (Q.length == 0) {
    return g;
  }
  const $e = new Set(Q);
  const Ht = new Map();
  function _n(Un) {
    if (!Un) {
      return 1;
    }
    let ui = Ht.get(Un);
    if (ui) {
      return ui;
    }
    const Vi = Un.parentNode;
    ui = g.has(Vi) ? Vi : $e.has(Vi) ? 1 : _n(Vi);
    Ht.set(Un, ui);
    return ui;
  }
  Q.forEach(Un => {
    const ui = _n(Un);
    if (ui !== 1) {
      g.get(ui).push(Un);
    }
  });
  return g;
}
function Xe(H, Q) {
  var g;
  if ((g = H.classList) !== null && g !== undefined) {
    g.add(Q);
  }
}
function $t(H, Q) {
  var g;
  if ((g = H.classList) !== null && g !== undefined) {
    g.remove(Q);
  }
}
function _e(H, Q, g) {
  Yt(g).onDone(() => H.processLeaveNode(Q));
}
function gn(H, Q) {
  for (let g = 0; g < H.length; g++) {
    const ie = H[g];
    if (ie instanceof k.ZE) {
      gn(ie.players, Q);
    } else {
      Q.push(ie);
    }
  }
}
function tr(H, Q, g) {
  const ie = g.get(H);
  if (!ie) {
    return false;
  }
  let $e = Q.get(H);
  if ($e) {
    ie.forEach(Ht => $e.add(Ht));
  } else {
    Q.set(H, ie);
  }
  g.delete(H);
  return true;
}
class Do {
  constructor(Q, g, ie) {
    this.bodyNode = Q;
    this._driver = g;
    this._normalizer = ie;
    this._triggerCache = {};
    this.onRemovalComplete = ($e, Ht) => {};
    this._transitionEngine = new Ls(Q, g, ie);
    this._timelineEngine = new Xt(Q, g, ie);
    this._transitionEngine.onRemovalComplete = ($e, Ht) => this.onRemovalComplete($e, Ht);
  }
  registerTrigger(Q, g, ie, $e, Ht) {
    const _n = Q + "-" + $e;
    let Un = this._triggerCache[_n];
    if (!Un) {
      const ui = [];
      const Wr = la(this._driver, Ht, ui, []);
      if (ui.length) {
        throw function he(H, Q) {
          return new t.vHH(3404, false);
        }();
      }
      Un = function Lr(H, Q, g) {
        return new Gr(H, Q, g);
      }($e, Wr, this._normalizer);
      this._triggerCache[_n] = Un;
    }
    this._transitionEngine.registerTrigger(g, $e, Un);
  }
  register(Q, g) {
    this._transitionEngine.register(Q, g);
  }
  destroy(Q, g) {
    this._transitionEngine.destroy(Q, g);
  }
  onInsert(Q, g, ie, $e) {
    this._transitionEngine.insertNode(Q, g, ie, $e);
  }
  onRemove(Q, g, ie, $e) {
    this._transitionEngine.removeNode(Q, g, $e || false, ie);
  }
  disableAnimations(Q, g) {
    this._transitionEngine.markElementAsDisabled(Q, g);
  }
  process(Q, g, ie, $e) {
    if (ie.charAt(0) == "@") {
      const [Ht, _n] = ve(ie);
      this._timelineEngine.command(Ht, g, _n, $e);
    } else {
      this._transitionEngine.trigger(Q, g, ie, $e);
    }
  }
  listen(Q, g, ie, $e, Ht) {
    if (ie.charAt(0) == "@") {
      const [_n, Un] = ve(ie);
      return this._timelineEngine.listen(_n, g, Un, Ht);
    }
    return this._transitionEngine.listen(Q, g, ie, $e, Ht);
  }
  flush(Q = -1) {
    this._transitionEngine.flush(Q);
  }
  get players() {
    return this._transitionEngine.players.concat(this._timelineEngine.players);
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
}
let hi = (() => {
  class H {
    constructor(g, ie, $e) {
      this._element = g;
      this._startStyles = ie;
      this._endStyles = $e;
      this._state = 0;
      let Ht = H.initialStylesByElement.get(g);
      if (!Ht) {
        H.initialStylesByElement.set(g, Ht = new Map());
      }
      this._initialStyles = Ht;
    }
    start() {
      if (this._state < 1) {
        if (this._startStyles) {
          pr(this._element, this._startStyles, this._initialStyles);
        }
        this._state = 1;
      }
    }
    finish() {
      this.start();
      if (this._state < 2) {
        pr(this._element, this._initialStyles);
        if (this._endStyles) {
          pr(this._element, this._endStyles);
          this._endStyles = null;
        }
        this._state = 1;
      }
    }
    destroy() {
      this.finish();
      if (this._state < 3) {
        H.initialStylesByElement.delete(this._element);
        if (this._startStyles) {
          Bn(this._element, this._startStyles);
          this._endStyles = null;
        }
        if (this._endStyles) {
          Bn(this._element, this._endStyles);
          this._endStyles = null;
        }
        pr(this._element, this._initialStyles);
        this._state = 3;
      }
    }
  }
  H.initialStylesByElement = new WeakMap();
  return H;
})();
function oa(H) {
  let Q = null;
  H.forEach((g, ie) => {
    if (function Ns(H) {
      return H === "display" || H === "position";
    }(ie)) {
      Q = Q || new Map();
      Q.set(ie, g);
    }
  });
  return Q;
}
class ys {
  constructor(Q, g, ie, $e) {
    this.element = Q;
    this.keyframes = g;
    this.options = ie;
    this._specialStyles = $e;
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._initialized = false;
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this.time = 0;
    this.parentPlayer = null;
    this.currentSnapshot = new Map();
    this._duration = ie.duration;
    this._delay = ie.delay || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(Q => Q());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;
    const Q = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, Q, this.options);
    this._finalKeyframe = Q.length ? Q[Q.length - 1] : new Map();
    this.domPlayer.addEventListener("finish", () => this._onFinish());
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(Q) {
    const g = [];
    Q.forEach(ie => {
      g.push(Object.fromEntries(ie));
    });
    return g;
  }
  _triggerWebAnimation(Q, g, ie) {
    return Q.animate(this._convertKeyframesToObject(g), ie);
  }
  onStart(Q) {
    this._originalOnStartFns.push(Q);
    this._onStartFns.push(Q);
  }
  onDone(Q) {
    this._originalOnDoneFns.push(Q);
    this._onDoneFns.push(Q);
  }
  onDestroy(Q) {
    this._onDestroyFns.push(Q);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach(Q => Q());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach(Q => Q());
      this._onDestroyFns = [];
    }
  }
  setPosition(Q) {
    if (this.domPlayer === undefined) {
      this.init();
    }
    this.domPlayer.currentTime = Q * this.time;
  }
  getPosition() {
    return this.domPlayer.currentTime / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const Q = new Map();
    if (this.hasStarted()) {
      this._finalKeyframe.forEach((ie, $e) => {
        if ($e !== "offset") {
          Q.set($e, this._finished ? ie : kr(this.element, $e));
        }
      });
    }
    this.currentSnapshot = Q;
  }
  triggerCallback(Q) {
    const g = Q === "start" ? this._onStartFns : this._onDoneFns;
    g.forEach(ie => ie());
    g.length = 0;
  }
}
class ht {
  validateStyleProperty(Q) {
    return true;
  }
  validateAnimatableStyleProperty(Q) {
    return true;
  }
  matchesElement(Q, g) {
    return false;
  }
  containsElement(Q, g) {
    return yt(Q, g);
  }
  getParentElement(Q) {
    return Me(Q);
  }
  query(Q, g, ie) {
    return Wt(Q, g, ie);
  }
  computeStyle(Q, g, ie) {
    return window.getComputedStyle(Q)[g];
  }
  animate(Q, g, ie, $e, Ht, _n = []) {
    const ui = {
      duration: ie,
      delay: $e,
      fill: $e == 0 ? "both" : "forwards"
    };
    if (Ht) {
      ui.easing = Ht;
    }
    const Vi = new Map();
    const Wr = _n.filter(ga => ga instanceof ys);
    if (function Or(H, Q) {
      return H === 0 || Q === 0;
    }(ie, $e)) {
      Wr.forEach(ga => {
        ga.currentSnapshot.forEach((aa, Ma) => Vi.set(Ma, aa));
      });
    }
    let Cs = function so(H) {
      if (H.length) {
        if (H[0] instanceof Map) {
          return H;
        } else {
          return H.map(Q => wo(Q));
        }
      } else {
        return [];
      }
    }(g).map(ga => js(ga));
    Cs = function is(H, Q, g) {
      if (g.size && Q.length) {
        let ie = Q[0];
        let $e = [];
        g.forEach((Ht, _n) => {
          if (!ie.has(_n)) {
            $e.push(_n);
          }
          ie.set(_n, Ht);
        });
        if ($e.length) {
          for (let Ht = 1; Ht < Q.length; Ht++) {
            let _n = Q[Ht];
            $e.forEach(Un => _n.set(Un, kr(H, Un)));
          }
        }
      }
      return Q;
    }(Q, Cs, Vi);
    const Ea = function Ji(H, Q) {
      let g = null;
      let ie = null;
      if (Array.isArray(Q) && Q.length) {
        g = oa(Q[0]);
        if (Q.length > 1) {
          ie = oa(Q[Q.length - 1]);
        }
      } else if (Q instanceof Map) {
        g = oa(Q);
      }
      if (g || ie) {
        return new hi(H, g, ie);
      } else {
        return null;
      }
    }(Q, Cs);
    return new ys(Q, Cs, ui, Ea);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
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
import * as dt from "36895";
let He = (() => {
  class H extends k._j {
    constructor(g, ie) {
      super();
      this._nextAnimationId = 0;
      this._renderer = g.createRenderer(ie.body, {
        id: "0",
        encapsulation: t.ifc.None,
        styles: [],
        data: {
          animation: []
        }
      });
    }
    build(g) {
      const ie = this._nextAnimationId.toString();
      this._nextAnimationId++;
      const $e = Array.isArray(g) ? (0, k.vP)(g) : g;
      $r(this._renderer, null, ie, "register", [$e]);
      return new dn(ie, this._renderer);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(t.FYo), t.LFG(dt.K0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac
  });
  return H;
})();
class dn extends k.LC {
  constructor(Q, g) {
    super();
    this._id = Q;
    this._renderer = g;
  }
  create(Q, g) {
    return new Yi(this._id, Q, g || {}, this._renderer);
  }
}
class Yi {
  constructor(Q, g, ie, $e) {
    this.id = Q;
    this.element = g;
    this._renderer = $e;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", ie);
  }
  _listen(Q, g) {
    return this._renderer.listen(this.element, `@@${this.id}:${Q}`, g);
  }
  _command(Q, ...g) {
    return $r(this._renderer, this.element, this.id, Q, g);
  }
  onDone(Q) {
    this._listen("done", Q);
  }
  onStart(Q) {
    this._listen("start", Q);
  }
  onDestroy(Q) {
    this._listen("destroy", Q);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(Q) {
    this._command("setPosition", Q);
  }
  getPosition() {
    var g;
    return ((g = this._renderer.engine.players[+this.id]) === null || g === undefined ? undefined : g.getPosition()) ?? 0;
  }
}
function $r(H, Q, g, ie, $e) {
  return H.setProperty(Q, `@@${g}:${ie}`, $e);
}
const Aa = "@.disabled";
let Hr = (() => {
  class H {
    constructor(g, ie, $e) {
      this.delegate = g;
      this.engine = ie;
      this._zone = $e;
      this._currentId = 0;
      this._microtaskId = 1;
      this._animationCallbacksBuffer = [];
      this._rendererCache = new Map();
      this._cdRecurDepth = 0;
      this.promise = Promise.resolve(0);
      ie.onRemovalComplete = (Ht, _n) => {
        const Un = _n?.parentNode(Ht);
        if (Un) {
          _n.removeChild(Un, Ht);
        }
      };
    }
    createRenderer(g, ie) {
      const Ht = this.delegate.createRenderer(g, ie);
      if (!g || !ie || !ie.data || !ie.data.animation) {
        let Wr = this._rendererCache.get(Ht);
        if (!Wr) {
          Wr = new wt("", Ht, this.engine, () => this._rendererCache.delete(Ht));
          this._rendererCache.set(Ht, Wr);
        }
        return Wr;
      }
      const _n = ie.id;
      const Un = ie.id + "-" + this._currentId;
      this._currentId++;
      this.engine.register(Un, g);
      const ui = Wr => {
        if (Array.isArray(Wr)) {
          Wr.forEach(ui);
        } else {
          this.engine.registerTrigger(_n, Un, g, Wr.name, Wr);
        }
      };
      ie.data.animation.forEach(ui);
      return new mn(this, Un, Ht, this.engine);
    }
    begin() {
      this._cdRecurDepth++;
      if (this.delegate.begin) {
        this.delegate.begin();
      }
    }
    _scheduleCountTask() {
      this.promise.then(() => {
        this._microtaskId++;
      });
    }
    scheduleListenerCallback(g, ie, $e) {
      if (g >= 0 && g < this._microtaskId) {
        this._zone.run(() => ie($e));
      } else {
        if (this._animationCallbacksBuffer.length == 0) {
          Promise.resolve(null).then(() => {
            this._zone.run(() => {
              this._animationCallbacksBuffer.forEach(Ht => {
                const [_n, Un] = Ht;
                _n(Un);
              });
              this._animationCallbacksBuffer = [];
            });
          });
        }
        this._animationCallbacksBuffer.push([ie, $e]);
      }
    }
    end() {
      this._cdRecurDepth--;
      if (this._cdRecurDepth == 0) {
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask();
          this.engine.flush(this._microtaskId);
        });
      }
      if (this.delegate.end) {
        this.delegate.end();
      }
    }
    whenRenderingDone() {
      return this.engine.whenRenderingDone();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(t.FYo), t.LFG(Do), t.LFG(t.R0b));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac
  });
  return H;
})();
class wt {
  constructor(Q, g, ie, $e) {
    this.namespaceId = Q;
    this.delegate = g;
    this.engine = ie;
    this._onDestroy = $e;
    this.destroyNode = this.delegate.destroyNode ? Ht => g.destroyNode(Ht) : null;
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    var Q;
    this.engine.destroy(this.namespaceId, this.delegate);
    this.delegate.destroy();
    if ((Q = this._onDestroy) !== null && Q !== undefined) {
      Q.call(this);
    }
  }
  createElement(Q, g) {
    return this.delegate.createElement(Q, g);
  }
  createComment(Q) {
    return this.delegate.createComment(Q);
  }
  createText(Q) {
    return this.delegate.createText(Q);
  }
  appendChild(Q, g) {
    this.delegate.appendChild(Q, g);
    this.engine.onInsert(this.namespaceId, g, Q, false);
  }
  insertBefore(Q, g, ie, $e = true) {
    this.delegate.insertBefore(Q, g, ie);
    this.engine.onInsert(this.namespaceId, g, Q, $e);
  }
  removeChild(Q, g, ie) {
    this.engine.onRemove(this.namespaceId, g, this.delegate, ie);
  }
  selectRootElement(Q, g) {
    return this.delegate.selectRootElement(Q, g);
  }
  parentNode(Q) {
    return this.delegate.parentNode(Q);
  }
  nextSibling(Q) {
    return this.delegate.nextSibling(Q);
  }
  setAttribute(Q, g, ie, $e) {
    this.delegate.setAttribute(Q, g, ie, $e);
  }
  removeAttribute(Q, g, ie) {
    this.delegate.removeAttribute(Q, g, ie);
  }
  addClass(Q, g) {
    this.delegate.addClass(Q, g);
  }
  removeClass(Q, g) {
    this.delegate.removeClass(Q, g);
  }
  setStyle(Q, g, ie, $e) {
    this.delegate.setStyle(Q, g, ie, $e);
  }
  removeStyle(Q, g, ie) {
    this.delegate.removeStyle(Q, g, ie);
  }
  setProperty(Q, g, ie) {
    if (g.charAt(0) == "@" && g == Aa) {
      this.disableAnimations(Q, !!ie);
    } else {
      this.delegate.setProperty(Q, g, ie);
    }
  }
  setValue(Q, g) {
    this.delegate.setValue(Q, g);
  }
  listen(Q, g, ie) {
    return this.delegate.listen(Q, g, ie);
  }
  disableAnimations(Q, g) {
    this.engine.disableAnimations(Q, g);
  }
}
class mn extends wt {
  constructor(Q, g, ie, $e, Ht) {
    super(g, ie, $e, Ht);
    this.factory = Q;
    this.namespaceId = g;
  }
  setProperty(Q, g, ie) {
    if (g.charAt(0) == "@") {
      if (g.charAt(1) == "." && g == Aa) {
        this.disableAnimations(Q, ie = ie === undefined || !!ie);
      } else {
        this.engine.process(this.namespaceId, Q, g.slice(1), ie);
      }
    } else {
      this.delegate.setProperty(Q, g, ie);
    }
  }
  listen(Q, g, ie) {
    if (g.charAt(0) == "@") {
      const $e = function zn(H) {
        switch (H) {
          case "body":
            return document.body;
          case "document":
            return document;
          case "window":
            return window;
          default:
            return H;
        }
      }(Q);
      let Ht = g.slice(1);
      let _n = "";
      if (Ht.charAt(0) != "@") {
        [Ht, _n] = function Fn(H) {
          const Q = H.indexOf(".");
          return [H.substring(0, Q), H.slice(Q + 1)];
        }
        /**
               * @license
               * Copyright Google LLC All Rights Reserved.
               *
               * Use of this source code is governed by an MIT-style license that can be
               * found in the LICENSE file at https://angular.io/license
               */(Ht);
      }
      return this.engine.listen(this.namespaceId, $e, Ht, _n, Un => {
        this.factory.scheduleListenerCallback(Un._data || -1, ie, Un);
      });
    }
    return this.delegate.listen(Q, g, ie);
  }
}
let ci = (() => {
  class H extends Do {
    constructor(g, ie, $e, Ht) {
      super(g.body, ie, $e);
    }
    ngOnDestroy() {
      this.flush();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(dt.K0), t.LFG(on), t.LFG(Wo), t.LFG(t.z2F));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac
  });
  return H;
})();
const xi = [{
  provide: k._j,
  useClass: He
}, {
  provide: Wo,
  useFactory: function pi() {
    return new _r();
  }
}, {
  provide: Do,
  useClass: ci
}, {
  provide: t.FYo,
  useFactory: function lr(H, Q, g) {
    return new Hr(H, Q, g);
  },
  deps: [i.se, Do, t.R0b]
}];
const Bo = [{
  provide: on,
  useFactory: () => new ht()
}, {
  provide: t.QbO,
  useValue: "BrowserAnimations"
}, ...xi];
const to = [{
  provide: on,
  useClass: Kt
}, {
  provide: t.QbO,
  useValue: "NoopAnimations"
}, ...xi];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ha = (() => {
  class H {
    static withConfig(g) {
      return {
        ngModule: H,
        providers: g.disableAnimations ? to : Bo
      };
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    providers: Bo,
    imports: [i.b2]
  });
  return H;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
import * as Wa from "80125";
import * as ls from "15861";
import * as bs from "95715";
let Cc = (() => {
  class H {
    constructor(g, ie) {
      this.authStore = g;
      this.router = ie;
    }
    canActivate(g, ie) {
      return this.checkProfil();
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      return this.checkProfil();
    }
    checkProfil() {
      const g = this.authStore.isProfesseur();
      if (!g) {
        this.router.navigate(["/Accueil"]);
      }
      return g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD), t.LFG(bs.F0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let gc = (() => {
  class H {
    constructor(g, ie) {
      this.authStore = g;
      this.router = ie;
    }
    canActivate(g, ie) {
      return this.checkProfil();
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      return this.checkProfil();
    }
    checkProfil() {
      const g = this.authStore.isEntreprise();
      if (!g) {
        this.router.navigate(["/Accueil"]);
      }
      return g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD), t.LFG(bs.F0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let mt = (() => {
  class H {
    constructor(g, ie) {
      this.authStore = g;
      this.router = ie;
    }
    canActivate(g, ie) {
      return this.checkProfil();
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      return this.checkProfil();
    }
    checkProfil() {
      const g = this.authStore.isFouE();
      if (!g) {
        this.router.navigate(["/Accueil"]);
      }
      return g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD), t.LFG(bs.F0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let qt = (() => {
  class H {
    constructor(g, ie) {
      this.authStore = g;
      this.router = ie;
    }
    canActivate(g, ie) {
      return this.checkProfil();
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      return this.checkProfil();
    }
    checkProfil() {
      const g = this.authStore.isFamille();
      if (!g) {
        this.router.navigate(["/Accueil"]);
      }
      return g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD), t.LFG(bs.F0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let Ct = (() => {
  class H {
    constructor(g, ie) {
      this.authStore = g;
      this.router = ie;
    }
    canActivate(g, ie) {
      return this.checkProfil();
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      return this.checkProfil();
    }
    checkProfil() {
      const g = this.authStore.isPersonnel();
      if (!g) {
        this.router.navigate(["/Accueil"]);
      }
      return g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD), t.LFG(bs.F0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
import * as Gt from "27574";
let Sn = (() => {
  class H {
    constructor(g, ie, $e, Ht) {
      this.authStore = g;
      this.menuStore = ie;
      this.activatedRoute = $e;
      this.router = Ht;
    }
    canLoad(g, ie) {
      const $e = g.data && Array.isArray(g.data.accessModules) ? g.data.accessModules : [];
      const Ht = !!g.data && !!g.data.checkByPath && g.data.checkByPath;
      const _n = !!g.data && !!g.data.hasRedirectModuleRoute && g.data.hasRedirectModuleRoute;
      const Un = ie.reduce((ui, Vi) => `${ui}/${Vi.path}`, "");
      return this.checkModule(Un, $e, Ht, _n);
    }
    checkModule(g, ie, $e, Ht = false) {
      let _n;
      _n = $e || ie.length !== 1 ? b.Kg5.canAccessPath(this.menuStore.snapshot.entries, ie, g, Ht) : b.Kg5.isModuleEnabled(this.authStore.currentUser, ie[0]);
      if (!_n) {
        if (this.authStore.isLoggedIn()) {
          this.router.navigate(["/Accueil"]);
        } else {
          this.router.navigate(["/login"], {
            queryParams: {
              cameFrom: g
            }
          }).catch(() => console.error("checkLogin navigate to /login"));
        }
      }
      return _n;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD), t.LFG(b.wbX), t.LFG(bs.gz), t.LFG(bs.F0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let ki = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
    }
    canActivate(g, ie) {
      let $e = 0;
      if (g.paramMap.get("typeUser") === b.dcH.ELEVE && this.authStore.isFamille()) {
        $e = parseInt(g.paramMap.get("idUser"), 10);
      }
      return this.checkProfil($e);
    }
    canLoad(g, ie) {
      let $e = 0;
      const Ht = b.FSr.isNotEmptyString(g.path) ? g.path.split("/") : [];
      const _n = Ht.findIndex(Un => Un === ":typeUser");
      if (_n > -1 && ie.length > _n && ie[_n].path === b.dcH.ELEVE && !this.authStore.isEleve()) {
        const ui = Ht.findIndex(Vi => Vi === ":idUser");
        if (ui > -1 && ie.length > ui) {
          $e = parseInt(ie[ui].path, 10);
        }
      }
      return this.checkProfil($e);
    }
    checkProfil(g) {
      return !!this.authStore.isFouE() && !!b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.CARNET_CORRESPONDANCE, g) || this.authStore.isProfOuPersonnel() && b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.CARNET_CORRESPONDANCE);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
import * as Ui from "39646";
import * as cs from "54004";
let La = (() => {
  class H {
    constructor(g, ie) {
      this.authStore = g;
      this.etablissementService = ie;
    }
    canActivate(g, ie) {
      return this.isPP(+g.paramMap.get("idEntity"));
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      const Ht = (b.FSr.isNotEmptyString(g.path) ? g.path.split("/") : []).findIndex(_n => _n === ":idEntity");
      if (Ht > -1 && ie.length > Ht) {
        const _n = parseInt(ie[Ht].path, 10);
        if (_n > 0) {
          return this.isPP(_n);
        }
      }
      return false;
    }
    isPP(g) {
      if (this.authStore.isProfOuPersonnel()) {
        if (this.authStore.isPersonnel() || b.Kg5.getModuleParametre(b.qzA.CARNET_NOTES, "seulPPVoieToutesLesNotes", this.authStore.currentUser) !== "1") {
          return (0, Ui.of)(true);
        } else {
          return this.etablissementService.getClasseGroupeById(g, b.JBS.CLASSE).pipe((0, cs.U)($e => $e.isPP));
        }
      } else {
        return (0, Ui.of)(false);
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD), t.LFG(b.Xmb));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
import * as Yo from "1146";
let Ts = (() => {
  class H {
    constructor(g) {
      this.accountService = g;
    }
    canActivate(g, ie) {
      this.accountService.logout();
      return true;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(Yo.B));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let Os = (() => {
  class H {
    constructor(g) {
      this.badgesStore = g;
    }
    resolve(g, ie) {
      return this.badgesStore.ready();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.et7));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let Zo = (() => {
  class H {
    constructor(g) {
      this.paiementStore = g;
    }
    resolve(g, ie) {
      return this.paiementStore.ready();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.dwh));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
import * as lo from "70262";
import * as gl from "82722";
import * as Hs from "18505";
import * as As from "28746";
import * as Io from "95698";
import * as Sa from "39300";
import * as hl from "63900";
import * as Kc from "69248";
import * as wc from "11302";
import * as Sc from "4128";
import _default3 from "76829";
import * as kl from "60515";
import * as Gi from "87192";
import * as ic from "52497";
import * as tl from "20388";
import * as gr from "92635";
import * as ro from "24006";
import * as Zl from "4602";
function $l(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 11);
    t.ALo(1, "nl2br");
    t.ALo(2, "base64");
    t._uU(3, "detail");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.Q6J("innerHTML", t.lcZ(1, 1, t.xi3(2, 3, g.sondageBack.detail, "decode")), t.oJD);
  }
}
function Nc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h3", 18);
    t._uU(1);
    t.ALo(2, "displayNom");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw();
    t.xp6(1);
    t.Oqu(t.Dn7(2, 1, ie.getSondageEleve(g.id), false, false));
  }
}
function Da(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span");
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.hij("vous devez choisir ", g.sondageBack.nbChoix, " option(s) !");
  }
}
function td(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span");
    t._uU(1, "vous devez choisir une option !");
    t.qZA();
  }
}
const Bd = function (H) {
  return {
    "alert alert-danger": H
  };
};
function mu(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 19)(1, "strong");
    t._uU(2, "Attention :");
    t.qZA();
    t.YNc(3, Da, 2, 1, "span", 20);
    t.YNc(4, td, 2, 0, "span", 20);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw();
    t.Q6J("ngClass", t.VKq(3, Bd, !ie.elevehaveAnswered(g)));
    t.xp6(3);
    t.Q6J("ngIf", ie.sondageBack.parcours.length === 0);
    t.xp6(1);
    t.Q6J("ngIf", ie.sondageBack.parcours.length > 0);
  }
}
function jo(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 23)(1, "input", 24);
    t.NdJ("ngModelChange", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(2).$implicit;
      const Un = t.oxw();
      return t.KtG(Un.toggleSelectedReponse(_n, Ht.codeMatiere));
    });
    t.qZA();
    t.TgZ(2, "label", 25);
    t._uU(3);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw(2).$implicit;
    t.xp6(1);
    t.hYB("name", "specialite_", ie.id, "_", g.codeMatiere, "")("id", "specialite_", ie.id, "_", g.codeMatiere, "");
    t.Q6J("ngModel", ie.specialites.indexOf(g.codeMatiere) > -1);
    t.xp6(1);
    t.hYB("for", "specialite_", ie.id, "_", g.codeMatiere, "");
    t.xp6(1);
    t.Oqu(g.libelle);
  }
}
function nd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 21);
    t.YNc(1, jo, 4, 8, "div", 22);
    t.ALo(2, "trackByProperty");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngForOf", g.sondageBack.specialites)("ngForTrackBy", t.lcZ(2, 2, "$index"));
  }
}
function bl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li");
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(1);
    t.Oqu(g.libelle);
  }
}
function Ol(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 23)(1, "input", 26);
    t.NdJ("change", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(2).$implicit;
      const Un = t.oxw();
      return t.KtG(Un.toggleSelectedParcours(_n, Ht));
    });
    t.qZA();
    t.TgZ(2, "label", 25)(3, "ul");
    t.YNc(4, bl, 2, 1, "li", 27);
    t.ALo(5, "trackByProperty");
    t.qZA()()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = Q.index;
    const $e = t.oxw(2).$implicit;
    const Ht = t.oxw();
    t.xp6(1);
    t.hYB("name", "parcours_", $e.id, "_", ie, "")("id", "parcours_", $e.id, "_", ie, "");
    t.Q6J("checked", Ht.isParcoursCochee($e, g));
    t.xp6(1);
    t.hYB("for", "parcours_", $e.id, "_", ie, "");
    t.xp6(2);
    t.Q6J("ngForOf", g)("ngForTrackBy", t.lcZ(5, 9, "codeMatiere"));
  }
}
function Qo(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 21);
    t.YNc(1, Ol, 6, 11, "div", 22);
    t.ALo(2, "trackByProperty");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngForOf", g.sondageBack.parcours)("ngForTrackBy", t.lcZ(2, 2, "$index"));
  }
}
const Eo = function (H) {
  return {
    "has-error": H
  };
};
function ml(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 12)(1, "div", 13);
    t.YNc(2, Nc, 3, 5, "h3", 14);
    t.YNc(3, mu, 5, 5, "div", 15);
    t.TgZ(4, "div", 16);
    t.YNc(5, nd, 3, 4, "div", 17);
    t.YNc(6, Qo, 3, 4, "div", 17);
    t.qZA()()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw();
    t.xp6(1);
    t.MGl("id", "eleve_", g.id, "");
    t.Q6J("ngClass", t.VKq(7, Eo, !ie.elevehaveAnswered(g)))("combien", ie.sondageBack.nbChoix);
    t.xp6(1);
    t.Q6J("ngIf", ie.authStore.isFamille());
    t.xp6(1);
    t.Q6J("ngIf", !ie.elevehaveAnswered(g));
    t.xp6(2);
    t.Q6J("ngIf", ie.sondageBack.specialites.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", ie.sondageBack.parcours.length > 0);
  }
}
let $o = (() => {
  class H {
    constructor(g, ie, $e, Ht, _n, Un) {
      this.authStore = g;
      this.modalRef = ie;
      this.uiService = $e;
      this.loaderService = Ht;
      this.rdtService = _n;
      this.modalService = Un;
      this.enCours = false;
    }
    ngOnInit() {
      this.sondageBack = new b.WBj(this.sondage);
    }
    save() {
      if (this.enCours || !this.allElevesHaveAnswered()) {
        return;
      }
      this.enCours = true;
      let g = true;
      this.sondageBack.eleves.forEach(ie => {
        if (!ie.specialites || ie.specialites.length !== this.sondageBack.nbChoix) {
          g = false;
        }
      });
      if (!g) {
        this.uiService.notifyEvent(b.DOJ.genericError, "Enregistrement impossible. Vérifiez le nombre d'options cochées", "Sondage", "fa fa-list-alt");
        this.enCours = false;
        return;
      }
      this.showConfirmationModal();
    }
    showConfirmationModal() {
      const ie = {
        id: this.modalService.getModalsCount() + 1,
        initialState: {
          title: "Valider vos choix",
          message: "<p>Êtes-vous sûr de vouloir envoyer <strong>définitivement</strong> vos choix <strong> ?</p>",
          btnConfirm: "Oui",
          btnCancel: "Non"
        },
        ignoreBackdropClick: true
      };
      this.modalService.show(Gi.z, ie);
      this.modalService.onHide.pipe((0, Io.q)(1), (0, Sa.h)($e => $e === ic.G.validation), (0, hl.w)($e => {
        this.loader = this.loaderService.show(this);
        const Ht = this.sondageBack.eleves.map(_n => this.rdtService.updateSondage(this.sondageBack.id, _n));
        return (0, Sc.D)(Ht);
      }), (0, Hs.b)(() => {
        this.uiService.notifyEvent(b.DOJ.genericSuccess, "Vos choix ont bien été envoyés", "Sondage", "fa fa-list-alt");
        this.close();
      }), (0, As.x)(() => {
        this.enCours = false;
        this.loaderService.hide(this);
      }), (0, lo.K)($e => {
        this.uiService.notifyEvent(b.DOJ.genericError, "Une erreur s'est produite lors de l'envoi de vos choix", "Sondage", "fa fa-list-alt");
        return kl.E;
      })).subscribe();
    }
    getSondageEleve(g) {
      let ie = this.authStore.currentUser;
      if (this.authStore.isFamille()) {
        ie = ie.profile.eleves.find($e => $e.id === g);
      }
      return ie;
    }
    toggleSelectedReponse(g, ie) {
      const $e = g.specialites.indexOf(ie);
      if ($e > -1) {
        g.specialites.splice($e, 1);
      } else {
        g.specialites.push(ie);
      }
    }
    toggleSelectedParcours(g, ie) {
      g.specialites = ie.map($e => $e.codeMatiere);
    }
    isParcoursCochee(g, ie) {
      const $e = ie.map(Ht => Ht.codeMatiere);
      return _default3($e, g.specialites);
    }
    close() {
      this.modalRef.hide();
    }
    allElevesHaveAnswered() {
      return this.sondageBack.eleves.every(g => g.specialites.length === this.sondageBack.nbChoix);
    }
    elevehaveAnswered(g) {
      return this.sondageBack.eleves.find($e => $e.id == g.id)?.specialites.length === this.sondageBack.nbChoix;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(tl.UZ), t.Y36(b.VLf), t.Y36(gr.S), t.Y36(b.Bwr), t.Y36(tl.tT));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-modal-rdt-sondage"]],
    inputs: {
      sondage: "sondage"
    },
    decls: 15,
    vars: 8,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], ["name", "formSondageEleve", "id", "formSondageEleve", "method", "post", 3, "ngSubmit"], [1, "modal-body", 3, "ngBusy"], ["class", "alert alert-info", 3, "innerHTML", 4, "ngIf"], ["class", "ed-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "modal-footer"], [1, "w-100"], ["type", "button", 1, "btn", "btn-danger", "float-start", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "float-end", 3, "disabled"], [1, "alert", "alert-info", 3, "innerHTML"], [1, "ed-card"], ["edCheckboxEqual", "", 1, "p-3", 3, "id", "ngClass", "combien"], ["class", "mt-0", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "row"], ["class", "col-lg-8", 4, "ngIf"], [1, "mt-0"], [3, "ngClass"], [4, "ngIf"], [1, "col-lg-8"], ["class", "form-check", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "name", "id", "ngModel", "ngModelChange"], [1, "form-check-label", "fw-normal", 3, "for"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "checked", "change"], [4, "ngFor", "ngForOf", "ngForTrackBy"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "h3", 1);
        t._uU(2);
        t.qZA();
        t.TgZ(3, "button", 2);
        t.NdJ("click", function () {
          return ie.close();
        });
        t.qZA()();
        t.TgZ(4, "form", 3);
        t.NdJ("ngSubmit", function () {
          return ie.save();
        });
        t.TgZ(5, "div", 4);
        t.YNc(6, $l, 4, 6, "div", 5);
        t.YNc(7, ml, 7, 9, "div", 6);
        t.ALo(8, "trackByProperty");
        t.qZA();
        t.TgZ(9, "div", 7)(10, "div", 8)(11, "button", 9);
        t.NdJ("click", function () {
          return ie.close();
        });
        t._uU(12, "Annuler");
        t.qZA();
        t.TgZ(13, "button", 10);
        t._uU(14, "Sauvegarder");
        t.qZA()()()();
      }
      if (g & 2) {
        t.xp6(2);
        t.Oqu(ie.sondageBack.libelle);
        t.xp6(3);
        t.Q6J("ngBusy", ie.loader);
        t.xp6(1);
        t.Q6J("ngIf", ie.sondageBack.detail !== "");
        t.xp6(1);
        t.Q6J("ngForOf", ie.sondageBack.eleves)("ngForTrackBy", t.lcZ(8, 6, "$index"));
        t.xp6(6);
        t.Q6J("disabled", !ie.allElevesHaveAnswered());
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, ro._Y, ro.Wl, ro.JJ, ro.JL, ro.On, ro.F, Wa.DC, Vu.m, b.$t3, b.YC, b.kM_, Zl.$],
    styles: ["#formSondageEleve[_ngcontent-%COMP%]   .ed-card[_ngcontent-%COMP%]{margin-top:20px}"]
  });
  return H;
})();
function Su(H, Q) {
  if (H & 1) {
    t._UZ(0, "span", 7);
  }
}
function mc(H, Q) {
  if (H & 1) {
    t._UZ(0, "span", 7);
  }
}
const Ps = function (H) {
  return {
    active: H
  };
};
var Ii = (() => {
  (H = Ii ||= {}).OJD = "Aujourd'hui";
  H.Demain = "Demain";
  return Ii;
  var H;
})();
let lc = (() => {
  class H {
    constructor() {
      this.ongletSelectedEvent = new t.vpe();
      this.typeTabAccueilEDT = Ii;
    }
    setOnglet(g) {
      this.ongletSelectedEvent.emit(g);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-tab-edt"]],
    inputs: {
      ongletSelected: "ongletSelected"
    },
    outputs: {
      ongletSelectedEvent: "ongletSelectedEvent"
    },
    decls: 10,
    vars: 12,
    consts: [[1, "form-check", "form-check-inline", "radio-custom-ed", "d-block"], [1, "text-center"], ["id", "btnRadioEDTA", "name", "ongletEDT", "type", "radio", 1, "form-check-input", 3, "checked", "value", "change"], ["for", "btnRadioEDTA", 1, "form-check-label", "fw-normal", "btn", "btn-secondary", 3, "ngClass"], ["class", "fa fa-check margin-whitespace", 4, "ngIf"], ["id", "btnRadioEDTD", "name", "ongletEDT", "type", "radio", 1, "form-check-input", 3, "checked", "value", "change"], ["for", "btnRadioEDTD", 1, "form-check-label", "fw-normal", "btn", "btn-secondary", 3, "ngClass"], [1, "fa", "fa-check", "margin-whitespace"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2);
        t.NdJ("change", function () {
          return ie.setOnglet(ie.typeTabAccueilEDT.OJD);
        });
        t.qZA();
        t.TgZ(3, "label", 3);
        t._uU(4, " Aujourd'hui ");
        t.YNc(5, Su, 1, 0, "span", 4);
        t.qZA();
        t.TgZ(6, "input", 5);
        t.NdJ("change", function () {
          return ie.setOnglet(ie.typeTabAccueilEDT.Demain);
        });
        t.qZA();
        t.TgZ(7, "label", 6);
        t._uU(8, " Demain ");
        t.YNc(9, mc, 1, 0, "span", 4);
        t.qZA()()();
      }
      if (g & 2) {
        t.xp6(2);
        t.Q6J("checked", ie.ongletSelected === ie.typeTabAccueilEDT.OJD)("value", ie.typeTabAccueilEDT.OJD);
        t.xp6(1);
        t.Q6J("ngClass", t.VKq(8, Ps, ie.ongletSelected === ie.typeTabAccueilEDT.OJD));
        t.xp6(2);
        t.Q6J("ngIf", ie.ongletSelected === ie.typeTabAccueilEDT.OJD);
        t.xp6(1);
        t.Q6J("checked", ie.ongletSelected === ie.typeTabAccueilEDT.Demain)("value", ie.typeTabAccueilEDT.Demain);
        t.xp6(1);
        t.Q6J("ngClass", t.VKq(10, Ps, ie.ongletSelected === ie.typeTabAccueilEDT.Demain));
        t.xp6(2);
        t.Q6J("ngIf", ie.ongletSelected === ie.typeTabAccueilEDT.Demain);
      }
    },
    dependencies: [dt.mk, dt.O5],
    encapsulation: 2,
    changeDetection: 0
  });
  return H;
})();
import * as cc from "1618";
import * as ir from "46707";
import * as uc from "12383";
import * as To from "70655";
import * as vu from "5763";
function rc(H, Q) {
  if (H & 1) {
    t._UZ(0, "span", 13);
  }
}
function Gl(H, Q) {
  if (H & 1) {
    t._UZ(0, "span", 13);
  }
}
function Al(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 14);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.Oqu(+g.nbBadgesPostits);
  }
}
function wd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 15)(1, "h3", 16);
    t._uU(2, "Aucun post-it pour votre établissement");
    t.qZA()();
  }
}
function Xc(H, Q) {
  if (H & 1) {
    t._UZ(0, "ed-postits", 10);
  }
  if (H & 2) {
    const g = t.oxw().ngIf;
    const ie = t.oxw(2);
    t.Q6J("configPostits", ie.postitConfigW)("idUser", ie.idUser)("typeUser", ie.typeUser)("tabPostIts", g);
  }
}
function Xl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 15)(1, "h3", 16);
    t._uU(2, "Aucun post-it pour vos espaces de travail.");
    t.qZA()();
  }
}
function Xd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t.YNc(1, Xc, 1, 4, "ed-postits", 17);
    t.YNc(2, Xl, 3, 0, "div", 11);
    t.qZA();
  }
  if (H & 2) {
    const g = Q.ngIf;
    t.xp6(1);
    t.Q6J("ngIf", (g == null ? null : g.length) > 0);
    t.xp6(1);
    t.Q6J("ngIf", (g == null ? null : g.length) === 0);
  }
}
const md = function (H) {
  return {
    active: H
  };
};
function id(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 1)(1, "div", 2)(2, "input", 3);
    t.NdJ("change", function () {
      t.CHM(g);
      const $e = t.oxw();
      return t.KtG($e.setOnglet($e.typeOngletTabPostit.GENERAL));
    });
    t.qZA();
    t.TgZ(3, "label", 4);
    t._uU(4, " Post-its établissement ");
    t.YNc(5, rc, 1, 0, "span", 5);
    t.qZA();
    t.TgZ(6, "input", 6);
    t.NdJ("change", function () {
      t.CHM(g);
      const $e = t.oxw();
      $e.setOnglet($e.typeOngletTabPostit.ESPACE_TRAVAIL);
      return t.KtG($e.showPostIts());
    });
    t.qZA();
    t.TgZ(7, "label", 7);
    t._uU(8, " Post-its de vos espaces de travail ");
    t.YNc(9, Gl, 1, 0, "span", 5);
    t.YNc(10, Al, 2, 1, "span", 8);
    t.qZA()();
    t.TgZ(11, "div", 9);
    t._UZ(12, "ed-postits", 10);
    t.YNc(13, wd, 3, 0, "div", 11);
    t.qZA();
    t.YNc(14, Xd, 3, 2, "div", 12);
    t.ALo(15, "async");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.Q6J("ngBusy", g.loader);
    t.xp6(2);
    t.Q6J("checked", g.ongletSelected === g.typeOngletTabPostit.GENERAL);
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(17, md, g.ongletSelected === g.typeOngletTabPostit.GENERAL));
    t.xp6(2);
    t.Q6J("ngIf", g.ongletSelected === g.typeOngletTabPostit.GENERAL);
    t.xp6(1);
    t.Q6J("checked", g.ongletSelected === g.typeOngletTabPostit.ESPACE_TRAVAIL);
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(19, md, g.ongletSelected === g.typeOngletTabPostit.ESPACE_TRAVAIL));
    t.xp6(2);
    t.Q6J("ngIf", g.ongletSelected === g.typeOngletTabPostit.ESPACE_TRAVAIL);
    t.xp6(1);
    t.Q6J("ngIf", g.nbBadgesPostits > 0);
    t.xp6(1);
    t.Q6J("hidden", g.ongletSelected !== g.typeOngletTabPostit.GENERAL);
    t.xp6(1);
    t.Q6J("configPostits", g.postitConfig)("idUser", g.idUser)("typeUser", g.typeUser)("tabPostIts", g.tabPostits);
    t.xp6(1);
    t.Q6J("ngIf", (g.tabPostits == null ? null : g.tabPostits.length) === 0);
    t.xp6(1);
    t.Q6J("ngIf", t.lcZ(15, 15, g.ongletSelected === g.typeOngletTabPostit.ESPACE_TRAVAIL && g.listePostItsW$));
  }
}
class Ll {
  constructor(Q, g, ie) {
    this.espaceDeTravailService = Q;
    this.loaderService = g;
    this.authStore = ie;
    this.tabPostits = [];
    this.typeUser = this.authStore.currentUser.typeCompte;
    this.idUser = this.authStore.currentUser.id;
    this.postitConfig = {
      addPostit: false,
      updatePostit: false,
      deletePostit: false,
      displayDateCreated: true,
      displayDateLimit: false,
      displayTargets: false,
      displayFormTargets: false,
      selectTargets: [],
      visibilityPostitPast: false,
      displayLibelleAuteur: false,
      contexte: b.M$6.ACCUEIL
    };
    this.postitConfigW = {
      addPostit: false,
      updatePostit: false,
      deletePostit: false,
      displayDateCreated: true,
      displayDateLimit: false,
      displayTargets: false,
      displayFormTargets: false,
      selectTargets: [],
      visibilityPostitPast: false,
      displayLibelleAuteur: false,
      contexte: b.M$6.ACCUEIL_ESPACE_TRAVAIL
    };
    this.typeOngletTabPostit = {
      GENERAL: "G",
      ESPACE_TRAVAIL: "W"
    };
    this.ongletSelected = this.typeOngletTabPostit.GENERAL;
    if (!Object.isExists(this.nbBadgesPostits)) {
      this.nbBadgesPostits = +b.Kg5.getModuleParametre(b.qzA.CLOUD, "nbBadgePostits", this.authStore.currentUser);
    }
  }
  ngOnInit() {
    this.listePostItsW$ = this.espaceDeTravailService.listeAgendaOuPostItsEspacesTravail("postits").pipe((0, cs.U)(Q => Array.isArray(Q) ? Q.map(g => new b.ZUG(g)) : undefined), (0, As.x)(() => this.loaderService.hide(this)));
  }
  showPostIts() {
    this.loader = this.loaderService.show(this);
    this.nbBadgesPostits = 0;
  }
  setOnglet(Q) {
    this.ongletSelected = Q;
  }
}
Ll.ɵfac = function (Q) {
  return new (Q || Ll)(t.Y36(b.AUs), t.Y36(gr.S), t.Y36(b.CnD));
};
Ll.ɵcmp = t.Xpm({
  type: Ll,
  selectors: [["ed-tab-postits"]],
  inputs: {
    tabPostits: "tabPostits",
    isActifPostitsEspacesTravail: "isActifPostitsEspacesTravail"
  },
  decls: 1,
  vars: 1,
  consts: [["id", "encart-postit", "class", "mt-4 form-check form-check-inline radio-custom-ed", 3, "ngBusy", 4, "ngIf"], ["id", "encart-postit", 1, "mt-4", "form-check", "form-check-inline", "radio-custom-ed", 3, "ngBusy"], [1, "text-center"], ["id", "btnRadioGen", "name", "ongletPostit", "type", "radio", "value", "G", 1, "form-check-input", 3, "checked", "change"], ["for", "btnRadioGen", 1, "form-check-label", "fw-normal", "btn", "btn-secondary", 3, "ngClass"], ["class", "fa fa-check margin-whitespace", 4, "ngIf"], ["id", "btnRadioEspaceT", "name", "ongletPostit", "type", "radio", "value", "W", 1, "form-check-input", 3, "checked", "change"], ["for", "btnRadioEspaceT", 1, "form-check-label", "fw-normal", "btn", "btn-secondary", 3, "ngClass"], ["class", "badge alert-danger margin-whitespace", 4, "ngIf"], [3, "hidden"], [3, "configPostits", "idUser", "typeUser", "tabPostIts"], ["class", "jumbotron", 4, "ngIf"], [4, "ngIf"], [1, "fa", "fa-check", "margin-whitespace"], [1, "badge", "alert-danger", "margin-whitespace"], [1, "jumbotron"], [1, "default"], [3, "configPostits", "idUser", "typeUser", "tabPostIts", 4, "ngIf"]],
  template: function (Q, g) {
    if (Q & 1) {
      t.YNc(0, id, 16, 21, "div", 0);
    }
    if (Q & 2) {
      t.Q6J("ngIf", g.authStore.currentUser.messageMaintenance && g.authStore.currentUser.messageMaintenance.length > 0 || g.tabPostits.length > 0 || g.isActifPostitsEspacesTravail);
    }
  },
  dependencies: [dt.mk, dt.O5, Wa.DC, uc.a, dt.Ov],
  encapsulation: 2,
  changeDetection: 0
});
(0, To.gn)([(0, vu.v)()], Ll.prototype, "nbBadgesPostits", undefined);
import * as Hc from "56038";
const Uc = function (H) {
  return [H];
};
const Du = function (H) {
  return {
    auxiliaryModal: H
  };
};
const vc = function (H) {
  return {
    outlets: H
  };
};
const xl = function (H) {
  return ["", H];
};
function yc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 20);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.Q6J("routerLink", t.VKq(10, xl, t.VKq(8, vc, t.VKq(6, Du, t.VKq(4, Uc, g.href.route)))))("skipLocationChange", true)("queryParams", g.href.queryParams);
    t.xp6(1);
    t.hij(" ", g.titre, " ");
  }
}
function Vd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 21);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.Q6J("routerLink", t.VKq(3, Uc, g.href.route))("queryParams", g.href.queryParams);
    t.xp6(1);
    t.Oqu(g.titre);
  }
}
function vl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span");
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.xp6(1);
    t.Oqu(" " + g.soustitre);
  }
}
function Mo(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 17);
    t._uU(1);
    t.ALo(2, "edDate");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.xp6(1);
    t.AsE("", " ", "", t.xi3(2, 2, g.date, "shortTime"), "");
  }
}
function ol(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "div", 22);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw(2);
    t.xp6(1);
    t.Q6J("innerHTML", ie.display(g), t.oJD);
  }
}
function Sd(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "div", 22)(2, "i", 23);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw(2);
    t.xp6(1);
    t.Q6J("innerHTML", ie.displayReu(g, "first"), t.oJD);
    t.xp6(1);
    t.Q6J("innerHTML", ie.displayReu(g, "second"), t.oJD);
  }
}
function mf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "button", 24);
    t._UZ(1, "i", 25);
    t._uU(2, " Visualiser ");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.Q6J("otherTypeDL", true)("file", g.fileFormated)("typeFichier", g.soustitre);
  }
}
const za = function (H) {
  return {
    "message-item-new": H
  };
};
function ts(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 3)(1, "div", 4)(2, "div");
    t._UZ(3, "i", 5);
    t.qZA()();
    t.TgZ(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h5", 9);
    t.YNc(8, yc, 2, 12, "a", 10);
    t.YNc(9, Vd, 2, 5, "a", 11);
    t.YNc(10, vl, 2, 1, "span", 12);
    t.qZA();
    t.TgZ(11, "div", 13)(12, "div", 14);
    t._UZ(13, "span", 15);
    t.TgZ(14, "span", 16)(15, "span", 17);
    t._uU(16);
    t.ALo(17, "edDate");
    t.qZA();
    t.YNc(18, Mo, 3, 5, "span", 18);
    t.qZA()()()()();
    t.YNc(19, ol, 2, 1, "ng-container", 12);
    t.YNc(20, Sd, 3, 2, "ng-container", 12);
    t.YNc(21, mf, 3, 3, "button", 19);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw(2);
    t.Q6J("ngClass", t.VKq(13, za, g.date >= ie.authStore.currentUser.lastConnexion));
    t.xp6(3);
    t.Q6J("ngClass", g.icon + " " + g.bgFor);
    t.xp6(5);
    t.Q6J("ngIf", g.typeElement === "Messagerie");
    t.xp6(1);
    t.Q6J("ngIf", g.typeElement !== "Messagerie");
    t.xp6(1);
    t.Q6J("ngIf", g.soustitre);
    t.xp6(6);
    t.Oqu(t.xi3(17, 10, g.date, "EEEE d MMMM"));
    t.xp6(2);
    t.Q6J("ngIf", g.afficherHeure);
    t.xp6(1);
    t.Q6J("ngIf", g.typeElement !== "ReunionPPFamille");
    t.xp6(1);
    t.Q6J("ngIf", g.typeElement === "ReunionPPFamille");
    t.xp6(1);
    t.Q6J("ngIf", g.typeElement === "Document");
  }
}
const Ta = function () {
  return ["date|desc"];
};
function Dl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 1);
    t.YNc(1, ts, 22, 15, "div", 2);
    t.ALo(2, "orderBy");
    t.ALo(3, "trackByProperty");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("ngForOf", t.xi3(2, 2, g.timelineEvents, t.DdM(7, Ta)))("ngForTrackBy", t.lcZ(3, 5, "$index"));
  }
}
let Qa = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
      this.timelineEvents = [];
      this.isActuHidden = false;
      this.isNoteEnabled = false;
      this.isVSEnabled = false;
    }
    ngOnInit() {
      if (this.authStore.isFamille()) {
        this.isNoteEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.NOTES, this.idUser);
        this.isVSEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.VIE_SCOLAIRE, this.idUser);
      } else {
        this.isNoteEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.NOTES);
        this.isVSEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.VIE_SCOLAIRE);
      }
      this.timelineEvents = this.timelineEvents.filter(g => this.filterTimeline(g));
    }
    filterTimeline(g) {
      return (g.typeElement !== "VieScolaire" || !!this.isVSEnabled) && (g.typeElement !== "Note" || !!this.isNoteEnabled) && (!g.typeElement.startsWith("ReunionPP") || !b.C_1.isDatePassee(g.date));
    }
    display(g) {
      if (Object.isExists(g.description)) {
        let ie = "";
        ie = g.description.split(" / ").join("<br/>");
        return ie;
      }
      return "";
    }
    displayReu(g, ie) {
      if (g.typeElement === "ReunionPPFamille") {
        let $e;
        $e = g.description.split(" / ");
        if (ie === "first") {
          return $e[0];
        } else {
          return $e[1];
        }
      }
      return "";
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-timeline"]],
    inputs: {
      idUser: "idUser",
      timelineEvents: "timelineEvents",
      isActuHidden: "isActuHidden"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "qa-message-list", "id", "wallmessages", 4, "ngIf"], ["id", "wallmessages", 1, "qa-message-list"], ["class", "message-item", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "message-item", 3, "ngClass"], [1, "message-overlay"], [1, "fa-2x", 3, "ngClass"], [1, "message-inner"], [1, "message-head", "clearfix"], [1, "user-detail"], [1, "handle"], [3, "routerLink", "skipLocationChange", "queryParams", 4, "ngIf"], [3, "routerLink", "queryParams", 4, "ngIf"], [4, "ngIf"], [1, "post-meta"], [1, "asker-meta"], [1, "qa-message-what"], [1, "qa-message-when"], [1, "qa-message-when-data"], ["class", "qa-message-when-data", 4, "ngIf"], ["edLightbox", "", "type", "button", "class", "btn btn-link", 3, "otherTypeDL", "file", "typeFichier", 4, "ngIf"], [3, "routerLink", "skipLocationChange", "queryParams"], [3, "routerLink", "queryParams"], [1, "qa-message-content", 3, "innerHTML"], [1, "form-text", 3, "innerHTML"], ["edLightbox", "", "type", "button", 1, "btn", "btn-link", 3, "otherTypeDL", "file", "typeFichier"], ["aria-hidden", "true", 1, "fa", "fa-search", "i-small"]],
    template: function (g, ie) {
      if (g & 1) {
        t.YNc(0, Dl, 4, 8, "div", 0);
      }
      if (g & 2) {
        t.Q6J("ngIf", ie.timelineEvents && ie.timelineEvents.length > 0 && !ie.isActuHidden);
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, bs.yS, sc.l, b.d0N, b.ifA, Zl.$],
    styles: ["#wallmessages[_ngcontent-%COMP%]{margin-left:20px;padding:1px 0 0;border-left:2px solid #e2e7ed}#wallmessages[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]{position:relative;margin:40px 0 0;padding:0 0 0 30px}#wallmessages[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:-20px;width:40px;height:40px;background:#fff;border:2px solid #e2e7ed;border-radius:100%;text-align:center;line-height:35px}#wallmessages[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{font-size:13px;font-weight:700;text-transform:uppercase;line-height:1.2}#wallmessages[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .qa-message-when-data[_ngcontent-%COMP%]{font-size:11px;font-weight:700;font-style:italic}#wallmessages[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .qa-message-content[_ngcontent-%COMP%]{font-size:13px}#wallmessages[_ngcontent-%COMP%]   .message-item.message-item-new[_ngcontent-%COMP%]   .message-overlay[_ngcontent-%COMP%]{border-color:var(--light-primary-color)}"]
  });
  return H;
})();
function Il(H, Q) {
  if (H & 1) {
    t._UZ(0, "span", 12);
  }
}
function yu(H, Q) {
  if (H & 1) {
    t._UZ(0, "span", 12);
  }
}
function Rl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 13);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Oqu(+g.nbAgendaEvenements);
  }
}
const pl = function (H) {
  return [H];
};
function Bc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 14)(1, "a", 15);
    t._uU(2, "Tout l'agenda");
    t.qZA();
    t._UZ(3, "ed-agenda-evenements", 16);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("routerLink", t.VKq(6, pl, "/" + g.typeUser + "/" + g.idUser + "/Agenda"));
    t.xp6(2);
    t.Q6J("displayTargets", false)("droitsAgenda", g.agendaConfig)("events", g.agendaEvents)("idEntity", g.idUser)("typeEntity", g.typeUser);
  }
}
function Hd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 17)(1, "h3", 18);
    t._uU(2, "Aucun événement pour votre établissement");
    t.qZA()();
  }
}
function ru(H, Q) {
  if (H & 1) {
    t._UZ(0, "ed-agenda-evenements", 16);
  }
  if (H & 2) {
    const g = t.oxw(2).ngIf;
    const ie = t.oxw();
    t.Q6J("displayTargets", false)("droitsAgenda", ie.agendaConfig)("events", g)("idEntity", ie.idUser)("typeEntity", ie.typeUser);
  }
}
function Pl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 14);
    t.YNc(1, ru, 1, 5, "ed-agenda-evenements", 19);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().ngIf;
    t.xp6(1);
    t.Q6J("ngIf", (g == null ? null : g.length) > 0);
  }
}
function ll(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 17)(1, "h3", 18);
    t._uU(2, "Aucun événement pour les espaces de travail");
    t.qZA()();
  }
}
function Wc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t.YNc(1, Pl, 2, 1, "div", 9);
    t.YNc(2, ll, 3, 0, "div", 10);
    t.qZA();
  }
  if (H & 2) {
    const g = Q.ngIf;
    t.xp6(1);
    t.Q6J("ngIf", (g == null ? null : g.length) > 0);
    t.xp6(1);
    t.Q6J("ngIf", (g == null ? null : g.length) === 0);
  }
}
const su = function (H) {
  return {
    active: H
  };
};
class Dc {
  constructor(Q, g, ie) {
    this.authStore = Q;
    this.espaceDeTravailService = g;
    this.loaderService = ie;
    this.typeUser = this.authStore.currentUser.typeCompte;
    this.idUser = this.authStore.currentUser.id;
    this.agendaConfig = {
      CAN_CREATE: false,
      CAN_UPDATE: false,
      CAN_DELETE: false
    };
    this.typeOngletTabAgenda = {
      GENERAL: "G",
      ESPACE_TRAVAIL: "W"
    };
    this.ongletSelected = this.typeOngletTabAgenda.GENERAL;
    if (!Object.isExists(this.nbAgendaEvenements)) {
      this.nbAgendaEvenements = +b.Kg5.getModuleParametre(b.qzA.CLOUD, "nbBadgeAgendaEvenements", this.authStore.currentUser);
    }
  }
  ngOnInit() {
    this.listeEvenementsW$ = this.espaceDeTravailService.listeAgendaOuPostItsEspacesTravail("agenda").pipe((0, cs.U)(Q => Array.isArray(Q) ? Q.map(g => new b.gBp(g)) : undefined), (0, As.x)(() => this.loaderService.hide(this)));
  }
  showAgendaW() {
    this.loader = this.loaderService.show(this);
    this.nbAgendaEvenements = 0;
  }
  setOnglet(Q) {
    this.ongletSelected = Q;
  }
}
function je(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 10);
  }
}
Dc.ɵfac = function (Q) {
  return new (Q || Dc)(t.Y36(b.CnD), t.Y36(b.AUs), t.Y36(gr.S));
};
Dc.ɵcmp = t.Xpm({
  type: Dc,
  selectors: [["ed-tab-agenda"]],
  inputs: {
    agendaEvents: "agendaEvents"
  },
  decls: 16,
  vars: 18,
  consts: [[1, "mt-4", "form-check", "form-check-inline", "radio-custom-ed", "d-block", 3, "ngBusy"], [1, "text-center"], ["id", "btnRadioAgendaGen", "name", "ongletAgenda", "type", "radio", "value", "G", 1, "form-check-input", 3, "checked", "change"], ["for", "btnRadioAgendaGen", 1, "form-check-label", "fw-normal", "btn", "btn-secondary", 3, "ngClass"], ["class", "fa fa-check margin-whitespace", 4, "ngIf"], ["id", "btnRadioaAgendaEspaceT", "name", "ongletAgenda", "type", "radio", "value", "W", 1, "form-check-input", 3, "checked", "change"], ["for", "btnRadioaAgendaEspaceT", 1, "form-check-label", "fw-normal", "btn", "btn-secondary", 3, "ngClass"], ["class", "badge alert-danger margin-whitespace", 4, "ngIf"], [3, "hidden"], ["class", "encart-agenda mt-4", 4, "ngIf"], ["class", "jumbotron", 4, "ngIf"], [4, "ngIf"], [1, "fa", "fa-check", "margin-whitespace"], [1, "badge", "alert-danger", "margin-whitespace"], [1, "encart-agenda", "mt-4"], ["href", "", 1, "mb-4", "ms-1", 3, "routerLink"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity"], [1, "jumbotron"], [1, "default"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity", 4, "ngIf"]],
  template: function (Q, g) {
    if (Q & 1) {
      t.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2);
      t.NdJ("change", function () {
        return g.setOnglet(g.typeOngletTabAgenda.GENERAL);
      });
      t.qZA();
      t.TgZ(3, "label", 3);
      t._uU(4, " Agenda établissement ");
      t.YNc(5, Il, 1, 0, "span", 4);
      t.qZA();
      t.TgZ(6, "input", 5);
      t.NdJ("change", function () {
        g.setOnglet(g.typeOngletTabAgenda.ESPACE_TRAVAIL);
        return g.showAgendaW();
      });
      t.qZA();
      t.TgZ(7, "label", 6);
      t._uU(8, " Agenda de vos espaces de travail ");
      t.YNc(9, yu, 1, 0, "span", 4);
      t.YNc(10, Rl, 2, 1, "span", 7);
      t.qZA()();
      t.TgZ(11, "div", 8);
      t.YNc(12, Bc, 4, 8, "div", 9);
      t.YNc(13, Hd, 3, 0, "div", 10);
      t.qZA();
      t.YNc(14, Wc, 3, 2, "div", 11);
      t.ALo(15, "async");
      t.qZA();
    }
    if (Q & 2) {
      t.Q6J("ngBusy", g.loader);
      t.xp6(2);
      t.Q6J("checked", g.ongletSelected === g.typeOngletTabAgenda.GENERAL);
      t.xp6(1);
      t.Q6J("ngClass", t.VKq(14, su, g.ongletSelected === g.typeOngletTabAgenda.GENERAL));
      t.xp6(2);
      t.Q6J("ngIf", g.ongletSelected === g.typeOngletTabAgenda.GENERAL);
      t.xp6(1);
      t.Q6J("checked", g.ongletSelected === g.typeOngletTabAgenda.ESPACE_TRAVAIL);
      t.xp6(1);
      t.Q6J("ngClass", t.VKq(16, su, g.ongletSelected === g.typeOngletTabAgenda.ESPACE_TRAVAIL));
      t.xp6(2);
      t.Q6J("ngIf", g.ongletSelected === g.typeOngletTabAgenda.ESPACE_TRAVAIL);
      t.xp6(1);
      t.Q6J("ngIf", g.nbAgendaEvenements > 0);
      t.xp6(1);
      t.Q6J("hidden", g.ongletSelected !== g.typeOngletTabAgenda.GENERAL);
      t.xp6(1);
      t.Q6J("ngIf", g.agendaEvents && g.agendaEvents.length > 0);
      t.xp6(1);
      t.Q6J("ngIf", (g.agendaEvents == null ? null : g.agendaEvents.length) === 0);
      t.xp6(1);
      t.Q6J("ngIf", t.lcZ(15, 12, g.ongletSelected === g.typeOngletTabAgenda.ESPACE_TRAVAIL && g.listeEvenementsW$));
    }
  },
  dependencies: [dt.mk, dt.O5, bs.yS, Wa.DC, ir.F, dt.Ov],
  styles: ["ed-agenda-evenements[_ngcontent-%COMP%]{width:100%}"],
  changeDetection: 0
});
(0, To.gn)([(0, vu.v)()], Dc.prototype, "nbAgendaEvenements", undefined);
const Ie = function (H) {
  return {
    customTimeline: H
  };
};
function ye(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 11)(1, "div", 12)(2, "h2", 13);
    t._uU(3, "Quoi de neuf ?");
    t.qZA();
    t._UZ(4, "ed-timeline", 14);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(3, Ie, g.tabPostits.length === 0 && g.agendaEvents.length === 0));
    t.xp6(3);
    t.Q6J("idUser", g.idUser)("timelineEvents", g.timelineEvents);
  }
}
function gt(H, Q) {
  if (H & 1) {
    t._UZ(0, "img", 18);
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.Q6J("src", g.urlTelechargementLogoEtab, t.LSH);
  }
}
function kt(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 15)(1, "div", 16);
    t._uU(2);
    t.YNc(3, gt, 1, 1, "img", 17);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(2);
    t.hij(" ", g.currentUser == null ? null : g.currentUser.nomEtablissement, " ");
    t.xp6(1);
    t.Q6J("ngIf", g.currentUser == null ? null : g.currentUser.logoEtablissement);
  }
}
function fn(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "ed-tab-postits", 23);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.xp6(1);
    t.Q6J("isActifPostitsEspacesTravail", g.isActifPostitsEspacesTravail)("tabPostits", g.tabPostits);
  }
}
function Nn(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2");
    t._uU(1, " Informations ");
    t.qZA();
  }
}
function Tn(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 27)(1, "h3");
    t._uU(2);
    t.qZA();
    t._UZ(3, "p", 28);
    t.ALo(4, "nl2br");
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(2);
    t.Oqu(g.titre);
    t.xp6(1);
    t.Q6J("innerHTML", t.lcZ(4, 2, g.contenu), t.oJD);
  }
}
function Ri(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 24);
    t.YNc(1, Nn, 2, 0, "h2", 1);
    t.YNc(2, Tn, 5, 4, "div", 25);
    t.ALo(3, "trackByProperty");
    t._UZ(4, "ed-postits", 26);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.messageMaintenance && g.authStore.currentUser.messageMaintenance.length > 0 || (g.tabPostits == null ? null : g.tabPostits.length) > 0);
    t.xp6(1);
    t.Q6J("ngForOf", g.authStore.currentUser.messageMaintenance)("ngForTrackBy", t.lcZ(3, 7, "$index"));
    t.xp6(2);
    t.Q6J("configPostits", g.postitConfig)("idUser", g.idUser)("typeUser", g.typeUser)("tabPostIts", g.tabPostits);
  }
}
function Yr(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t.YNc(1, fn, 2, 2, "ng-container", 21);
    t.YNc(2, Ri, 5, 9, "ng-template", null, 22, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifPostitsEspacesTravail)("ngIfElse", g);
  }
}
function Bs(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 38);
    t._uU(1);
    t.ALo(2, "base64");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.xp6(1);
    t.Oqu(t.xi3(2, 1, g.detail, "decode"));
  }
}
function Nt(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "li", 35)(1, "p")(2, "strong");
    t._uU(3);
    t.qZA()();
    t.YNc(4, Bs, 3, 4, "div", 36);
    t.TgZ(5, "button", 37);
    t.NdJ("click", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(5);
      return t.KtG(_n.openSondageEleve(Ht));
    });
    t._uU(6, "Répondre au sondage");
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(3);
    t.Oqu(g.libelle);
    t.xp6(1);
    t.Q6J("ngIf", g.detail !== "");
  }
}
const Ke = function (H) {
  return {
    "col-lg-5": H
  };
};
function We(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 32)(1, "h2", 33);
    t._uU(2, "Sondages");
    t.qZA();
    t.TgZ(3, "ul");
    t.YNc(4, Nt, 7, 2, "li", 34);
    t.ALo(5, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.Q6J("ngClass", t.VKq(5, Ke, (g.tabPostits == null ? null : g.tabPostits.length) === 0 && !g.isActifPostitsEspacesTravail));
    t.xp6(4);
    t.Q6J("ngForOf", g.tabRDTSondages)("ngForTrackBy", t.lcZ(5, 3, "$index"));
  }
}
function jt(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "li", 35)(1, "p")(2, "strong");
    t._uU(3);
    t.qZA()();
    t.TgZ(4, "button", 37);
    t.NdJ("click", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(5);
      return t.KtG(_n.openEDForms(Ht));
    });
    t._uU(5);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(3);
    t.Oqu(g.titre);
    t.xp6(2);
    t.hij("Répondre au ", g.typeToLibelleEDForms, "");
  }
}
function On(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 39)(1, "h2", 33);
    t._uU(2, "Formulaires");
    t.qZA();
    t.TgZ(3, "ul");
    t.YNc(4, jt, 6, 2, "li", 34);
    t.ALo(5, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.Q6J("ngClass", t.VKq(5, Ke, (g.tabPostits == null ? null : g.tabPostits.length) === 0 && !g.isActifPostitsEspacesTravail));
    t.xp6(4);
    t.Q6J("ngForOf", g.tabEDForms)("ngForTrackBy", t.lcZ(5, 3, "idParticipant"));
  }
}
function ri(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 29);
    t.YNc(1, We, 6, 7, "div", 30);
    t.YNc(2, On, 6, 7, "div", 31);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", g.tabRDTSondages && g.tabRDTSondages.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.tabEDForms && g.tabEDForms.length > 0);
  }
}
function Bi(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "ed-tab-agenda", 41);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.xp6(1);
    t.Q6J("agendaEvents", g.agendaEvents);
  }
}
function wr(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 42)(1, "h2", 33);
    t._uU(2, "Agenda");
    t.qZA();
    t.TgZ(3, "a", 43);
    t._uU(4, "Tout l'agenda");
    t.qZA();
    t._UZ(5, "ed-agenda-evenements", 44);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.xp6(3);
    t.hYB("href", "/", g.typeUser, "/", g.idUser, "/Agenda", t.LSH);
    t.xp6(2);
    t.Q6J("idEntity", g.idUser)("events", g.agendaEvents)("typeEntity", g.typeUser)("droitsAgenda", g.agendaConfig)("displayTargets", false);
  }
}
function Kr(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 40);
    t.YNc(1, Bi, 2, 1, "ng-container", 21);
    t.YNc(2, wr, 6, 7, "ng-template", null, 22, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(3);
    t.Q6J("ngClass", t.VKq(3, Ke, (ie.tabPostits == null ? null : ie.tabPostits.length) === 0 && !ie.isActifPostitsEspacesTravail));
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifAgendaEvenementsEspacesTravail)("ngIfElse", g);
  }
}
const oe = function (H) {
  return {
    "col-lg-6": H
  };
};
function we(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 12);
    t.YNc(1, Yr, 4, 2, "div", 1);
    t.YNc(2, ri, 3, 2, "div", 19);
    t.YNc(3, Kr, 4, 5, "div", 20);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.Q6J("ngClass", t.VKq(4, oe, (g.tabEDForms == null ? null : g.tabEDForms.length) > 0 || (g.tabPostits == null ? null : g.tabPostits.length) > 0 || g.isActifPostitsEspacesTravail || g.isActifAgendaEvenementsEspacesTravail || g.agendaEvents.length > 0 || g.tabRDTSondages && g.tabRDTSondages.length > 0));
    t.xp6(1);
    t.Q6J("ngIf", (g.tabPostits == null ? null : g.tabPostits.length) > 0 || g.espacesTravailActif && g.isActifPostitsEspacesTravail);
    t.xp6(1);
    t.Q6J("ngIf", (g.tabRDTSondages == null ? null : g.tabRDTSondages.length) > 0 || (g.tabEDForms == null ? null : g.tabEDForms.length) > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.agendaEvents.length > 0 || g.espacesTravailActif && g.isActifAgendaEvenementsEspacesTravail);
  }
}
function ce(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 51)(1, "h2");
    t._uU(2, "Mes Rendez-vous");
    t.qZA();
    t._UZ(3, "ed-agenda-evenements", 52);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(3);
    t.Q6J("displayTargets", false)("droitsAgenda", g.agendaConfig)("events", g.tabTodayVisio)("idEntity", g.idUser)("typeEntity", g.typeUser)("needToday", true);
  }
}
const nt = function (H, Q) {
  return {
    "col-lg-12": H,
    "col-lg-6": Q
  };
};
function sn(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 45);
    t.YNc(1, ce, 4, 6, "div", 46);
    t.TgZ(2, "h2", 47);
    t._uU(3, "Emploi du temps");
    t.qZA();
    t.TgZ(4, "ed-tab-edt", 48);
    t.NdJ("ongletSelectedEvent", function ($e) {
      t.CHM(g);
      const Ht = t.oxw(2);
      return t.KtG(Ht.selectTabEDT($e));
    });
    t.qZA();
    t.TgZ(5, "div", 49);
    t._UZ(6, "ed-emploi-du-temps-scheduler", 50);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.Q6J("ngClass", t.WLB(7, nt, (g.tabPostits == null ? null : g.tabPostits.length) === 0 && !g.isActifPostitsEspacesTravail && g.agendaEvents.length === 0 && !g.isActifAgendaEvenementsEspacesTravail, (g.tabPostits == null ? null : g.tabPostits.length) > 0 || g.isActifPostitsEspacesTravail || g.agendaEvents.length > 0 || g.isActifAgendaEvenementsEspacesTravail));
    t.xp6(1);
    t.Q6J("ngIf", (g.tabTodayVisio == null ? null : g.tabTodayVisio.length) > 0);
    t.xp6(3);
    t.Q6J("ongletSelected", g.tabEDTSelected);
    t.xp6(2);
    t.Q6J("idEntity", g.idUser)("schedulerConfig", g.schedulerConfig)("schedulerTemplateConfig", g.schedulerTemplateConfig)("typeEntity", g.typeUser);
  }
}
const Pn = function (H) {
  return {
    "col-lg-12 col-md-12": H
  };
};
function Ei(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t.YNc(1, je, 1, 0, "div", 2);
    t.TgZ(2, "div", 3);
    t.YNc(3, ye, 5, 5, "div", 4);
    t.TgZ(4, "div", 5)(5, "div", 6);
    t.YNc(6, kt, 4, 2, "div", 7);
    t.YNc(7, we, 4, 6, "div", 8);
    t.YNc(8, sn, 7, 10, "div", 9);
    t.qZA()()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("ngIf", g.timelineEvents && g.timelineEvents.length > 0);
    t.xp6(2);
    t.Q6J("ngIf", g.timelineEvents && g.timelineEvents.length > 0);
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(6, Pn, !g.timelineEvents));
    t.xp6(2);
    t.Q6J("ngIf", (g.currentUser == null ? null : g.currentUser.logoEtablissement) || (g.currentUser == null ? null : g.currentUser.nomEtablissement));
    t.xp6(1);
    t.Q6J("ngIf", (g.tabEDForms == null ? null : g.tabEDForms.length) > 0 || g.tabPostits.length > 0 || g.isActifPostitsEspacesTravail || g.isActifAgendaEvenementsEspacesTravail || g.agendaEvents.length > 0 || g.tabRDTSondages && g.tabRDTSondages.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.isEDTEnabled);
  }
}
const Hi = function (H) {
  return {
    "ed-container": H
  };
};
let xs = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n, Un, ui, Vi, Wr, Cs, Ea, ga) {
      super();
      this.activatedRoute = g;
      this.uiService = ie;
      this.authStore = $e;
      this.loaderService = Ht;
      this.timelineService = _n;
      this.rdtService = Un;
      this.modalService = ui;
      this.edfService = Vi;
      this.router = Wr;
      this.events = Cs;
      this.filtresAgendaEdtUserStore = Ea;
      this.cloudService = ga;
      this.edTypeUser = b.dcH;
      this.tabPostits = [];
      this.agendaEvents = [];
      this.timelineEvents = [];
      this.tabRDTSondages = [];
      this.tabEDForms = [];
      this.isEDTEnabled = false;
      this.isMessagerieEnabled = false;
      this.todayDate = new Date();
      this.tabTodayVisio = [];
      this.tabEDTSelected = Ii.OJD;
      this.espacesTravailActif = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.CLOUD);
      this.urlTelechargementLogoEtab = `${(0, wc.Je)()}/telechargement${wc.sX.apiExtension}?cToken=${$e.cToken()}&verbe=get&fichierId=${$e.currentUser.logoEtablissement}&leTypeDeFichier=IMPORT_FTP`;
      this.isEDTEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.EDT);
      this.isMessagerieEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.MESSAGERIE);
      this.isActifPostitsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifPostitsEspacesTravail", this.authStore.currentUser) > 0;
      this.isActifAgendaEvenementsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifAgendaEvenementsEspacesTravail", this.authStore.currentUser) > 0;
      this.schedulerTemplateConfig = {
        weekButton: false,
        monthButton: false,
        todayButton: false,
        prevButton: false,
        nextButton: false,
        dateTitle: false,
        exportPdf: false,
        exportIcal: false
      };
      this.schedulerConfig = {
        mode: Kc.e.day
      };
      this.postitConfig = {
        addPostit: false,
        updatePostit: false,
        deletePostit: false,
        displayDateCreated: true,
        displayDateLimit: false,
        displayTargets: false,
        displayFormTargets: false,
        selectTargets: [],
        visibilityPostitPast: false,
        displayLibelleAuteur: false,
        contexte: b.M$6.ACCUEIL
      };
      this.agendaConfig = {
        CAN_CREATE: false,
        CAN_UPDATE: false,
        CAN_DELETE: false
      };
    }
    get currentUser() {
      return this.authStore.currentUser;
    }
    ngOnInit() {
      if (this.authStore.isEleve()) {
        this.typeUser = this.authStore.currentUser.typeCompte;
        this.idUser = this.authStore.currentUser.id;
        this.refreshData();
      } else {
        this.activatedRoute.paramMap.pipe((0, cs.U)(g => {
          this.typeUser = b.dcH.ELEVE;
          this.idUser = +g.get("idUser");
          this.isEDTEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.EDT, this.idUser);
          this.isMessagerieEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.MESSAGERIE, this.idUser);
          this.espacesTravailActif = false;
          this.isActifAgendaEvenementsEspacesTravail = false;
          this.isActifPostitsEspacesTravail = false;
          this.refreshData();
        }), (0, lo.K)(g => this.uiService.notifyErrorThenEmpty(g, true, "Erreur", "fa fa-warning")), (0, gl.R)(this.componentDestroyed$)).subscribe();
      }
      this.events.select$("array:removeEntityById").pipe((0, gl.R)(this.componentDestroyed$)).subscribe(g => {
        if (g > 0 && Array.isArray(this.tabEDForms)) {
          this.tabEDForms = this.tabEDForms.filter(ie => g !== ie.idParticipant);
        }
      });
    }
    refreshData() {
      let g;
      this.filtresAgendaEdtUserStore.cleanDatas();
      this.timelineEvents = [];
      let ie = this.typeUser;
      let $e = this.idUser;
      if (this.authStore.isFamille()) {
        ie = this.authStore.currentUser.typeCompte;
        $e = this.authStore.currentUser.id;
      }
      g = [this.timelineService.eleveTimeline(this.idUser), this.timelineService.communTimeline(ie, $e), this.rdtService.getSondages(), this.edfService.getFS(this.typeUser, this.idUser), this.cloudService.getVisioToday(this.authStore.currentUser.id, this.authStore.currentUser.typeCompte)];
      this.loader = this.loaderService.show(this);
      this.datasAccueil$ = (0, Sc.D)(g).pipe((0, Hs.b)(Ht => {
        const _n = [];
        Ht[0].forEach(Un => {
          const ui = new b.j9y({
            date: Un.date,
            description: Un.contenu,
            typeElement: Un.typeElement,
            idElement: Un.idElement,
            titre: Un.titre,
            soustitre: Un.soustitre,
            idUser: this.idUser,
            typeUser: this.typeUser,
            contenu: Un.contenu
          });
          _n.push(ui);
        });
        this.timelineEvents = [...this.timelineEvents, ..._n];
        this.tabPostits = Ht[1].postits?.map(Un => new b.ZUG(Un));
        this.agendaEvents = Ht[1].evenements?.map(Un => b.h0G.cleanEvent(new b.gBp(Un)));
        this.tabRDTSondages = Ht[2];
        this.tabEDForms = Ht[3];
        this.tabTodayVisio = [...Ht[4].filter(Un => this.authStore.isEleve() || Un.idEleve === this.idUser)];
      }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(Ht => this.uiService.notifyErrorThenEmpty(Ht, true, "Erreur", "fa fa-warning")));
    }
    openSondageEleve(g) {
      const ie = {
        id: this.modalService.getModalsCount() + 1,
        initialState: {
          sondage: g
        },
        class: "modal-lg"
      };
      this.modalService.show($o, ie);
      this.modalService.onHide.pipe((0, Io.q)(1), (0, Sa.h)($e => $e === ic.G.validation), (0, hl.w)($e => {
        this.loader = this.loaderService.show(this);
        return this.rdtService.getSondages();
      }), (0, Hs.b)($e => {
        this.tabRDTSondages = $e;
      }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)($e => this.uiService.notifyErrorThenEmpty($e, true, "Erreur", "fa fa-warning"))).subscribe();
    }
    openEDForms(g) {
      this.router.navigate(["", {
        outlets: {
          auxiliaryModal: ["repondre-au-fs"]
        }
      }], {
        skipLocationChange: true,
        queryParams: {
          idFS: g.id,
          idParticipant: g.idParticipant,
          titre: g.titre
        }
      }).catch(() => console.error("AccueilEleveComponent.openEDForms navigate to fs form"));
    }
    selectTabEDT(g) {
      this.tabEDTSelected = g;
      this.schedulerConfig = g === Ii.OJD ? {
        ...this.schedulerConfig,
        dateStart: new Date()
      } : {
        ...this.schedulerConfig,
        dateStart: b.C_1.addNbHoursToDate(new Date(), 24)
      };
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(bs.gz), t.Y36(b.VLf), t.Y36(b.CnD), t.Y36(gr.S), t.Y36(b.uSF), t.Y36(b.Bwr), t.Y36(tl.tT), t.Y36(b.i4Q), t.Y36(bs.F0), t.Y36(b.eq2), t.Y36(cc.c), t.Y36(b.eyc));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-accueil-eleve"]],
    features: [t.qOj],
    decls: 3,
    vars: 7,
    consts: [[1, "accueileleve", "accueiluserauth", "container-fluid", 3, "ngBusy", "ngClass"], [4, "ngIf"], ["class", "d-none d-lg-block d-print-none separator", 4, "ngIf"], [1, "row"], ["class", "d-none d-lg-block col-lg-3 timeline-famille padding-home double-padding", 4, "ngIf"], [1, "col-lg-9", 3, "ngClass"], [1, "row", "padding-home"], ["class", "col-lg-12", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "double-padding blocs-colonne margin-bottom col-lg-6", 3, "ngClass", 4, "ngIf"], [1, "d-none", "d-lg-block", "d-print-none", "separator"], [1, "d-none", "d-lg-block", "col-lg-3", "timeline-famille", "padding-home", "double-padding"], [3, "ngClass"], ["id", "quoi-de-neuf"], [3, "idUser", "timelineEvents"], [1, "col-lg-12"], ["id", "nom-etb"], ["class", "float-end rounded logo-etab", "alt", "logo établissement", 3, "src", 4, "ngIf"], ["alt", "logo établissement", 1, "float-end", "rounded", "logo-etab", 3, "src"], ["class", "margin-bottom", 4, "ngIf"], ["class", "card ed-card px-3 pb-3", 3, "ngClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["onlyPostIts", ""], [3, "isActifPostitsEspacesTravail", "tabPostits"], ["id", "encart-postit"], ["class", "jumbotron msg-maintenance", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "configPostits", "idUser", "typeUser", "tabPostIts"], [1, "jumbotron", "msg-maintenance"], [3, "innerHTML"], [1, "margin-bottom"], ["class", "encart-sondages card ed-card px-3 pb-3", 3, "ngClass", 4, "ngIf"], ["class", "encart-questionnaires card ed-card px-3 pb-3", 3, "ngClass", 4, "ngIf"], [1, "encart-sondages", "card", "ed-card", "px-3", "pb-3", 3, "ngClass"], [1, "text-center", "w-100"], ["class", "btn-action btn-action-needed light-color icon-ed_attention", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn-action", "btn-action-needed", "light-color", "icon-ed_attention"], ["class", "alert alert-info", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "alert", "alert-info"], [1, "encart-questionnaires", "card", "ed-card", "px-3", "pb-3", 3, "ngClass"], [1, "card", "ed-card", "px-3", "pb-3", 3, "ngClass"], [3, "agendaEvents"], [1, "encart-agenda"], [1, "mb-4", 3, "href"], [3, "idEntity", "events", "typeEntity", "selectedTargets", "droitsAgenda", "displayTargets", "espaceTravail"], [1, "double-padding", "blocs-colonne", "margin-bottom", "col-lg-6", 3, "ngClass"], ["class", "encart-visio", 4, "ngIf"], [1, "text-center", "w-100", "d-print-none", "hidden-xs"], [1, "hidden-xs", 3, "ongletSelected", "ongletSelectedEvent"], ["id", "emploi-du-temps-jour", "role", "complementary", 1, "bs-docs-sidebar", "d-print-none", "hidden-xs"], [3, "idEntity", "schedulerConfig", "schedulerTemplateConfig", "typeEntity"], [1, "encart-visio"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity", "needToday"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0);
        t.YNc(1, Ei, 9, 8, "div", 1);
        t.ALo(2, "async");
        t.qZA();
      }
      if (g & 2) {
        t.Q6J("ngBusy", ie.loader)("ngClass", t.VKq(5, Hi, ie.tabPostits.length === 0 && !ie.isActifPostitsEspacesTravail && ie.agendaEvents.length === 0 && !ie.isActifAgendaEvenementsEspacesTravail));
        t.xp6(1);
        t.Q6J("ngIf", t.lcZ(2, 3, ie.datasAccueil$));
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, Wa.DC, ir.F, uc.a, Ll, Hc.R, Qa, Dc, lc, dt.Ov, b.YC, b.kM_, Zl.$],
    styles: [".accueileleve[_ngcontent-%COMP%]   .padding-home[_ngcontent-%COMP%]{min-height:100vh}.accueileleve[_ngcontent-%COMP%]   .liste-postit[_ngcontent-%COMP%]{margin:0}.accueileleve[_ngcontent-%COMP%]   ed-agenda-evenements[_ngcontent-%COMP%]{width:100%}.accueileleve[_ngcontent-%COMP%]   .encart-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .accueileleve[_ngcontent-%COMP%]   .encart-questionnaires[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.accueileleve[_ngcontent-%COMP%]   .encart-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .accueileleve[_ngcontent-%COMP%]   .encart-questionnaires[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px;width:100%;border-radius:5px;color:#fff;margin-top:5px}.accueileleve[_ngcontent-%COMP%]   .encart-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], .accueileleve[_ngcontent-%COMP%]   .encart-questionnaires[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:0 0 5px;padding:3px}"]
  });
  return H;
})();
function _a(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 12);
  }
}
function go(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 18);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(3);
      return t.KtG($e.hideBlocActu(true));
    });
    t._UZ(1, "i", 19);
    t.qZA();
  }
}
function Ja(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 20);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(3);
      return t.KtG($e.hideBlocActu(false));
    });
    t._UZ(1, "i", 21);
    t.qZA();
  }
}
function oc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 13)(1, "h3", 14);
    t._uU(2, " Quoi de neuf ? ");
    t.YNc(3, go, 2, 0, "button", 15);
    t.YNc(4, Ja, 2, 0, "button", 16);
    t.qZA();
    t._UZ(5, "ed-timeline", 17);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(3);
    t.Q6J("ngIf", !g.isActuHidden);
    t.xp6(1);
    t.Q6J("ngIf", g.isActuHidden);
    t.xp6(1);
    t.Q6J("idUser", g.idUser)("timelineEvents", g.events)("isActuHidden", g.isActuHidden);
  }
}
function ou(H, Q) {
  if (H & 1) {
    t._UZ(0, "img", 25);
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.Q6J("src", g.urlTelechargementLogoEtab, t.LSH);
  }
}
function Cl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 22)(1, "div", 23);
    t._uU(2);
    t.YNc(3, ou, 1, 1, "img", 24);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(2);
    t.hij(" ", g.authStore.currentUser.nomEtablissement, " ");
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.logoEtablissement);
  }
}
function yl(H, Q) {
  if (H & 1) {
    t._UZ(0, "ed-tab-postits", 29);
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.Q6J("isActifPostitsEspacesTravail", g.isActifPostitsEspacesTravail)("tabPostits", g.tabPostits);
  }
}
function Hl(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t.YNc(1, yl, 1, 2, "ed-tab-postits", 28);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", g.tabPostits);
  }
}
function _c(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2");
    t._uU(1, " Informations ");
    t.qZA();
  }
}
function Go(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 33)(1, "h3");
    t._uU(2);
    t.qZA();
    t._UZ(3, "p", 34);
    t.ALo(4, "nl2br");
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(2);
    t.Oqu(g.titre);
    t.xp6(1);
    t.Q6J("innerHTML", t.lcZ(4, 2, g.contenu), t.oJD);
  }
}
function Wl(H, Q) {
  if (H & 1) {
    t._UZ(0, "ed-postits", 35);
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.Q6J("configPostits", g.postitConfig)("idUser", g.idUser)("typeUser", g.typeUser)("tabPostIts", g.tabPostits);
  }
}
function Yc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 30);
    t.YNc(1, _c, 2, 0, "h2", 1);
    t.YNc(2, Go, 5, 4, "div", 31);
    t.ALo(3, "trackByProperty");
    t.YNc(4, Wl, 1, 4, "ed-postits", 32);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.messageMaintenance && g.authStore.currentUser.messageMaintenance.length > 0 || (g.tabPostits == null ? null : g.tabPostits.length) > 0);
    t.xp6(1);
    t.Q6J("ngForOf", g.authStore.currentUser.messageMaintenance)("ngForTrackBy", t.lcZ(3, 4, "$index"));
    t.xp6(2);
    t.Q6J("ngIf", g.tabPostits);
  }
}
function Tu(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t.YNc(1, Hl, 2, 1, "ng-container", 26);
    t.YNc(2, Yc, 5, 6, "ng-template", null, 27, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifPostitsEspacesTravail)("ngIfElse", g);
  }
}
function qd(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "ed-tab-agenda", 37);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("agendaEvents", g.agendaEvents);
  }
}
function Zc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 38)(1, "h2", 39);
    t._uU(2, "Agenda");
    t.qZA();
    t.TgZ(3, "a", 40);
    t._uU(4, "Tout l'agenda");
    t.qZA();
    t._UZ(5, "ed-agenda-evenements", 41);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(3);
    t.hYB("href", "/", g.typeUser, "/", g.idUser, "/Agenda", t.LSH);
    t.xp6(2);
    t.Q6J("idEntity", g.idUser)("events", g.agendaEvents)("typeEntity", g.typeUser)("droitsAgenda", g.agendaConfig)("displayTargets", false);
  }
}
function Tc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 36);
    t.YNc(1, qd, 2, 1, "ng-container", 26);
    t.YNc(2, Zc, 6, 7, "ng-template", null, 27, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifAgendaEvenementsEspacesTravail)("ngIfElse", g);
  }
}
function jl(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 46);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(4);
      return t.KtG($e.hideBlocPorteMonnaie(true));
    });
    t._UZ(1, "i", 19);
    t.qZA();
  }
}
function na(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 47);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(4);
      return t.KtG($e.hideBlocPorteMonnaie(false));
    });
    t._UZ(1, "i", 21);
    t.qZA();
  }
}
function rd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2", 39);
    t._uU(1, " Porte-monnaie ");
    t.YNc(2, jl, 2, 0, "button", 44);
    t.YNc(3, na, 2, 0, "button", 45);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(2);
    t.Q6J("ngIf", !g.isPorteMonnaieHidden);
    t.xp6(1);
    t.Q6J("ngIf", g.isPorteMonnaieHidden);
  }
}
const au = function () {
  return ["/Paiements"];
};
const jc = function (H) {
  return {
    badgedebiteur: H
  };
};
function sd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 52)(1, "span", 53);
    t._UZ(2, "span", 54);
    t._uU(3);
    t.ALo(4, "number");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw(4);
    t.Q6J("routerLink", t.DdM(7, au));
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(8, jc, g.solde < 0));
    t.xp6(1);
    t.Q6J("textContent", g.solde < 0 ? "" : "+");
    t.xp6(1);
    t.hij(" ", t.xi3(4, 4, g.solde, ie.digitsInfo), " ");
  }
}
function od(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 53);
    t._UZ(1, "span", 54);
    t._uU(2);
    t.ALo(3, "number");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw(4);
    t.Q6J("ngClass", t.VKq(6, jc, g.solde < 0));
    t.xp6(1);
    t.Q6J("textContent", g.solde < 0 ? "" : "+");
    t.xp6(1);
    t.hij(" ", t.xi3(3, 3, g.solde, ie.digitsInfo), " ");
  }
}
function ql(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li");
    t.YNc(1, sd, 5, 10, "a", 49);
    t.YNc(2, od, 4, 8, "span", 50);
    t.TgZ(3, "strong", 51);
    t._uU(4);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw(4);
    t.xp6(1);
    t.Q6J("ngIf", ie.isPaiementEnable);
    t.xp6(1);
    t.Q6J("ngIf", !ie.isPaiementEnable);
    t.xp6(2);
    t.Oqu(g.libelle);
  }
}
function lu(H, Q) {
  if (H & 1) {
    t.TgZ(0, "ul");
    t.YNc(1, ql, 5, 3, "li", 48);
    t.ALo(2, "trackByProperty");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngForOf", g.lesSoldes)("ngForTrackBy", t.lcZ(2, 2, "$index"));
  }
}
function Qc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 42);
    t.YNc(1, rd, 4, 2, "h2", 43);
    t.YNc(2, lu, 3, 4, "ul", 1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngIf", g.lesSoldes.length >= 1);
    t.xp6(1);
    t.Q6J("ngIf", !g.isPorteMonnaieHidden);
  }
}
function vf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 59)(1, "h2", 39);
    t._uU(2);
    t.ALo(3, "edDate");
    t.qZA();
    t._UZ(4, "ed-agenda-evenements", 60);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(2);
    t.hij("Mes visios du ", t.xi3(3, 7, g.todayDate, "EEEE d LLLL"), "");
    t.xp6(2);
    t.Q6J("displayTargets", false)("droitsAgenda", g.agendaConfig)("events", g.tabRDVTodayVisio)("idEntity", g.idUser)("typeEntity", g.typeUser)("needToday", true);
  }
}
function vd(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "li", 63)(1, "p")(2, "strong");
    t._uU(3);
    t.qZA()();
    t.TgZ(4, "button", 64);
    t.NdJ("click", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(4);
      return t.KtG(_n.openEDForms(Ht));
    });
    t._uU(5);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(3);
    t.Oqu(g.titre);
    t.xp6(2);
    t.hij("Répondre au ", g.typeToLibelleEDForms, "");
  }
}
function Wd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 61)(1, "h2", 39);
    t._uU(2, "Formulaires");
    t.qZA();
    t.TgZ(3, "ul");
    t.YNc(4, vd, 6, 2, "li", 62);
    t.ALo(5, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(4);
    t.Q6J("ngForOf", g.tabEDForms)("ngForTrackBy", t.lcZ(5, 2, "idParticipant"));
  }
}
function yd(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 65)(1, "h2", 39);
    t._uU(2, "Emploi du temps");
    t.qZA();
    t.TgZ(3, "ed-tab-edt", 66);
    t.NdJ("ongletSelectedEvent", function ($e) {
      t.CHM(g);
      const Ht = t.oxw(3);
      return t.KtG(Ht.selectTabEDT($e));
    });
    t.qZA();
    t.TgZ(4, "div", 67);
    t._UZ(5, "ed-emploi-du-temps-scheduler", 68);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(3);
    t.Q6J("ongletSelected", g.tabEDTSelected);
    t.xp6(2);
    t.Q6J("idEntity", g.idUser)("schedulerConfig", g.schedulerConfig)("schedulerTemplateConfig", g.schedulerTemplateConfig)("typeEntity", g.typeUser);
  }
}
const Hu = function (H) {
  return {
    "col-md-12": H
  };
};
function Mc(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 55);
    t.YNc(1, vf, 5, 10, "div", 56);
    t.YNc(2, Wd, 6, 4, "div", 57);
    t.YNc(3, yd, 6, 5, "div", 58);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.Q6J("ngClass", t.VKq(4, Hu, (g.tabPostits == null ? null : g.tabPostits.length) === 0 && !g.isActifPostitsEspacesTravail && (g.agendaEvents == null ? null : g.agendaEvents.length) === 0 && !g.isActifAgendaEvenementsEspacesTravail && (g.lesSoldes == null ? null : g.lesSoldes.length) === 0));
    t.xp6(1);
    t.Q6J("ngIf", (g.tabRDVTodayVisio == null ? null : g.tabRDVTodayVisio.length) > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.tabEDForms && g.tabEDForms.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.isEDTEnabled);
  }
}
const Yd = function (H, Q) {
  return {
    "col-lg-9": H,
    "col-lg-12": Q
  };
};
const xa = function (H) {
  return {
    "col-lg-6": H
  };
};
function ue(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t.YNc(1, _a, 1, 0, "div", 2);
    t.TgZ(2, "div", 3);
    t.YNc(3, oc, 6, 5, "div", 4);
    t.TgZ(4, "div", 5)(5, "div", 6);
    t.YNc(6, Cl, 4, 2, "div", 7);
    t.TgZ(7, "div", 8);
    t.YNc(8, Tu, 4, 2, "div", 1);
    t.YNc(9, Tc, 4, 2, "div", 9);
    t.YNc(10, Qc, 3, 2, "div", 10);
    t.qZA();
    t.YNc(11, Mc, 4, 6, "div", 11);
    t.qZA()()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("ngIf", (g.events == null ? null : g.events.length) > 0);
    t.xp6(2);
    t.Q6J("ngIf", g.events && (g.events == null ? null : g.events.length) > 0);
    t.xp6(1);
    t.Q6J("ngClass", t.WLB(10, Yd, g.events && (g.events == null ? null : g.events.length) > 0, (g.events == null ? null : g.events.length) === 0))("ngBusy", g.loader);
    t.xp6(2);
    t.Q6J("ngIf", g.authStore.currentUser.logoEtablissement || g.authStore.currentUser.nomEtablissement);
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(13, xa, g.tabPostits.length > 0 || g.isActifPostitsEspacesTravail || g.isActifAgendaEvenementsEspacesTravail || (g.agendaEvents == null ? null : g.agendaEvents.length) > 0 || g.lesSoldes.length > 0));
    t.xp6(1);
    t.Q6J("ngIf", g.tabPostits || g.espacesTravailActif && g.isActifPostitsEspacesTravail);
    t.xp6(1);
    t.Q6J("ngIf", (g.agendaEvents == null ? null : g.agendaEvents.length) > 0 || g.espacesTravailActif && g.isActifAgendaEvenementsEspacesTravail);
    t.xp6(1);
    t.Q6J("ngIf", g.lesSoldes.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.isEDTEnabled || g.tabEDForms && g.tabEDForms.length > 0 || (g.tabRDVTodayVisio == null ? null : g.tabRDVTodayVisio.length) > 0);
  }
}
let Ye = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n, Un, ui, Vi, Wr, Cs, Ea) {
      super();
      this.messageService = g;
      this.uiService = ie;
      this.loaderService = $e;
      this.timelineService = Ht;
      this.edfService = _n;
      this.authService = Un;
      this.authStore = ui;
      this.router = Vi;
      this.eventService = Wr;
      this.cloudService = Cs;
      this.filtresAgendaEdtUserStore = Ea;
      this.events = [];
      this.tabEDForms = [];
      this.isEDTEnabled = false;
      this.tabRDVTodayVisio = [];
      this.tabRDV = [];
      this.todayDate = new Date();
      this.lesSoldes = [];
      this.tabEDTSelected = Ii.OJD;
      this.espacesTravailActif = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.CLOUD);
      this.urlTelechargementLogoEtab = `${(0, wc.Je)()}/telechargement${wc.sX.apiExtension}?cToken=${ui.cToken()}&verbe=get&fichierId=${ui.currentUser.logoEtablissement}&leTypeDeFichier=IMPORT_FTP`;
      this.isActifPostitsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifPostitsEspacesTravail", this.authStore.currentUser) > 0;
      this.isActifAgendaEvenementsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifAgendaEvenementsEspacesTravail", this.authStore.currentUser) > 0;
      this.postitConfig = {
        addPostit: false,
        updatePostit: false,
        deletePostit: false,
        displayDateCreated: true,
        displayDateLimit: false,
        displayTargets: false,
        displayFormTargets: false,
        selectTargets: [],
        visibilityPostitPast: false,
        displayLibelleAuteur: false,
        contexte: b.M$6.ACCUEIL
      };
      this.agendaConfig = {
        CAN_CREATE: false,
        CAN_UPDATE: false,
        CAN_DELETE: false
      };
      this.url = `${(0, wc.Je)()}/telechargement.awp`;
      this.schedulerConfig = {
        mode: Kc.e.day
      };
      this.schedulerTemplateConfig = {
        weekButton: false,
        monthButton: false,
        todayButton: false,
        prevButton: false,
        nextButton: false,
        dateTitle: false,
        exportPdf: false,
        exportIcal: false
      };
      this.isEDTEnabled = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.EDT);
      const ga = b.Kg5.getModuleParametre(b.qzA.PAIEMENT_EN_LIGNE, "codeDevise", this.authStore.currentUser);
      this.digitsInfo = b.wtJ.infosDevise(ga).digitsInfo;
      this.isPaiementEnable = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.PAIEMENT_EN_LIGNE);
    }
    get typeUser() {
      return this.authStore.currentUser.typeCompte;
    }
    get idUser() {
      return this.authStore.currentUser.id;
    }
    ngOnInit() {
      this.isActuHidden = this.authStore.currentUser.listParametresIndividuels(b.IL.AFFICHER_BLOC_ACTU_ACCUEIL) === false;
      this.isPorteMonnaieHidden = this.authStore.currentUser.listParametresIndividuels(b.IL.AFFICHER_BLOC_PORTE_MONNAIE_ACCUEIL) === false;
      this.refreshData();
      this.eventService.select$("array:removeEntityById").pipe((0, gl.R)(this.componentDestroyed$)).subscribe(g => {
        if (g > 0 && Array.isArray(this.tabEDForms)) {
          this.tabEDForms = this.tabEDForms.filter(ie => g !== ie.idParticipant);
        }
      });
    }
    hideBlocActu(g) {
      this.loader = this.authService.updateParametrageIndividuel(this.authStore.currentUser.typeCompte, this.authStore.currentUser.id, "Accueil/Actu", !g).subscribe({
        next: ie => {
          this.isActuHidden = g;
          this.uiService.notifyEvent(b.DOJ.genericSuccess, `Le bloc "Quoi de neuf" est maintenant ${g ? "masqué" : "visible"} sur votre page d'accueil.`, "Accueil");
          this.authService.setParametresIndividuel(this.authStore.currentUser.typeCompte, this.authStore.currentUser.id, b.IL.AFFICHER_BLOC_ACTU_ACCUEIL, !this.isActuHidden);
        },
        error: ie => this.uiService.notifyEvent(ie.action, "La modification de votre affichage du bloc \"Quoi de neuf\" sur la page d'accueil n'a pas pu être enregistré.", "Erreur")
      });
    }
    hideBlocPorteMonnaie(g) {
      this.loader = this.authService.updateParametrageIndividuel(this.authStore.currentUser.typeCompte, this.authStore.currentUser.id, "Accueil/PM", !g).subscribe({
        next: ie => {
          this.isPorteMonnaieHidden = g;
          this.uiService.notifyEvent(b.DOJ.genericSuccess, `Le bloc "Porte-monnaie" est maintenant ${g ? "masqué" : "visible"} sur votre page d'accueil.`, "Accueil");
          this.authService.setParametresIndividuel(this.authStore.currentUser.typeCompte, this.authStore.currentUser.id, b.IL.AFFICHER_BLOC_PORTE_MONNAIE_ACCUEIL, !this.isPorteMonnaieHidden);
        },
        error: ie => this.uiService.notifyEvent(ie.action, "La modification de votre affichage du bloc \"Porte-monnaie\" sur la page d'accueil n'a pas pu être enregistré.", "Erreur")
      });
    }
    refreshData() {
      this.loader = this.loaderService.show(this);
      this.datasAccueil$ = (0, Sc.D)([this.timelineService.communTimeline(this.typeUser, this.idUser), this.edfService.getFS(this.typeUser, this.idUser), this.messageService.getUnreadMessages(this.typeUser, this.idUser), this.cloudService.getVisioToday(this.idUser, this.typeUser)]).pipe((0, Hs.b)(g => {
        const ie = [];
        this.filtresAgendaEdtUserStore.cleanDatas();
        this.tabPostits = g[0].postits?.map(_n => new b.ZUG(_n));
        this.agendaEvents = g[0].evenements?.map(_n => b.h0G.cleanEvent(new b.gBp(_n)));
        this.tabReunion = g[0].reunions || [];
        this.tabReunion.forEach(_n => {
          if (!this.isPast(_n.parametrage.date)) {
            const Un = new b.j9y({
              typeElement: "ReunionPP",
              idElement: _n.parametrage.id,
              soustitre: "",
              contenu: "",
              description: _n.parametrage.libelle,
              date: _n.parametrage.date + " " + _n.parametrage.heureDebut + ":00",
              titre: "Nouvelle réunion parents/prof disponible",
              idUser: this.idUser,
              typeUser: this.typeUser,
              afficherHeure: true
            });
            ie.push(Un);
          }
        });
        this.events = [...this.events, ...ie];
        this.events = [...this.events, ...g[2].slice(0, 10).map(_n => new b.j9y({
          date: _n.date,
          contenu: _n.content,
          description: _n.subject,
          titre: _n.from.civilite + " " + _n.from.prenom + " " + _n.from.nom,
          idElement: _n.id,
          typeElement: "Messagerie",
          idUser: this.idUser,
          typeUser: this.typeUser,
          afficherHeure: false
        }))];
        this.tabEDForms = g[1];
        this.tabRDV = [...g[3]];
        this.tabRDVTodayVisio = [...this.tabRDV.filter(_n => _n.isVisio === true)];
        if (b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.SITUATION_FINANCIERE)) {
          this.lesSoldes = Object.isExists(g[0].comptes) ? g[0].comptes.comptes.filter(_n => _n.typeCompte === b.f3K.pm && _n.solde !== 0 || _n.typeCompte === b.f3K.pmactivite && _n.solde < 0).map(_n => new b.ind(_n)) : [];
        }
        const Ht = this.filtresAgendaEdtUserStore.getRDVPPAgendaFiltre();
        Ht.selected = true;
        this.filtresAgendaEdtUserStore.addAgendaFiltreToDisplay(Ht);
      }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(g => this.uiService.notifyErrorThenEmpty(g, true, "Erreur", "fa fa-warning")));
    }
    isPast(g) {
      return b.C_1.isAfter(new Date(), b.C_1.stringToDate(g));
    }
    openEDForms(g) {
      this.router.navigate(["", {
        outlets: {
          auxiliaryModal: ["repondre-au-fs"]
        }
      }], {
        skipLocationChange: true,
        queryParams: {
          idFS: g.id,
          idParticipant: g.idParticipant,
          titre: g.titre
        }
      }).catch(() => console.error("AccueilEnseignantComponent.openEDForms navigate to fs form"));
    }
    selectTabEDT(g) {
      this.tabEDTSelected = g;
      this.schedulerConfig = g === Ii.OJD ? {
        ...this.schedulerConfig,
        dateStart: new Date()
      } : {
        ...this.schedulerConfig,
        dateStart: b.C_1.addNbHoursToDate(new Date(), 24)
      };
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.KRh), t.Y36(b.VLf), t.Y36(gr.S), t.Y36(b.uSF), t.Y36(b.i4Q), t.Y36(b.e80), t.Y36(b.CnD), t.Y36(bs.F0), t.Y36(b.eq2), t.Y36(b.eyc), t.Y36(cc.c));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-accueil-enseignant"]],
    features: [t.qOj],
    decls: 3,
    vars: 4,
    consts: [[1, "accueilenseignant", "accueiluserauth", "container-fluid", 3, "ngBusy"], [4, "ngIf"], ["class", "d-none d-lg-block d-print-none separator", 4, "ngIf"], [1, "row"], ["class", "col-lg-3 timeline-famille padding-home sticky simple-padding d-none d-lg-block", 4, "ngIf"], [3, "ngClass", "ngBusy"], [1, "row", "padding-home"], ["class", "col-lg-12", 4, "ngIf"], [3, "ngClass"], ["class", "card ed-card px-3 pb-3", 4, "ngIf"], ["class", "hidden-xs card ed-card px-3 pb-3", "id", "soldes", 4, "ngIf"], ["class", "double-padding blocs-colonne margin-bottom col-lg-6", 3, "ngClass", 4, "ngIf"], [1, "d-none", "d-lg-block", "d-print-none", "separator"], [1, "col-lg-3", "timeline-famille", "padding-home", "sticky", "simple-padding", "d-none", "d-lg-block"], ["id", "quoi-de-neuf"], ["type", "button", "class", "btn btn-link float-end text-dark me-2", "title", "Masquer les messages", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-link float-end text-dark me-2", "title", "Afficher les messages", 3, "click", 4, "ngIf"], [3, "idUser", "timelineEvents", "isActuHidden"], ["type", "button", "title", "Masquer les messages", 1, "btn", "btn-link", "float-end", "text-dark", "me-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-close"], ["type", "button", "title", "Afficher les messages", 1, "btn", "btn-link", "float-end", "text-dark", "me-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-square"], [1, "col-lg-12"], ["id", "nom-etb"], ["class", "float-end rounded logo-etab logo-etab-prof", "alt", "logo établissement", 3, "src", 4, "ngIf"], ["alt", "logo établissement", 1, "float-end", "rounded", "logo-etab", "logo-etab-prof", 3, "src"], [4, "ngIf", "ngIfElse"], ["onlyPostIts", ""], [3, "isActifPostitsEspacesTravail", "tabPostits", 4, "ngIf"], [3, "isActifPostitsEspacesTravail", "tabPostits"], ["id", "encart-postit"], ["class", "jumbotron msg-maintenance", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "configPostits", "idUser", "typeUser", "tabPostIts", 4, "ngIf"], [1, "jumbotron", "msg-maintenance"], [3, "innerHTML"], [3, "configPostits", "idUser", "typeUser", "tabPostIts"], [1, "card", "ed-card", "px-3", "pb-3"], [3, "agendaEvents"], [1, "encart-agenda"], [1, "text-center", "w-100"], [1, "mb-4", 3, "href"], [3, "idEntity", "events", "typeEntity", "selectedTargets", "droitsAgenda", "displayTargets", "espaceTravail"], ["id", "soldes", 1, "hidden-xs", "card", "ed-card", "px-3", "pb-3"], ["class", "text-center w-100", 4, "ngIf"], ["type", "button", "class", "btn btn-link float-end text-dark me-2", "title", "Masquer les porte-monnaie", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-link float-end text-dark me-2", "title", "Afficher les porte-monnaie", 3, "click", 4, "ngIf"], ["type", "button", "title", "Masquer les porte-monnaie", 1, "btn", "btn-link", "float-end", "text-dark", "me-2", 3, "click"], ["type", "button", "title", "Afficher les porte-monnaie", 1, "btn", "btn-link", "float-end", "text-dark", "me-2", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "", 3, "routerLink", 4, "ngIf"], ["class", "badge-solde", 3, "ngClass", 4, "ngIf"], [1, "libelle"], ["href", "", 3, "routerLink"], [1, "badge-solde", 3, "ngClass"], [3, "textContent"], [1, "double-padding", "blocs-colonne", "margin-bottom", "col-lg-6", 3, "ngClass"], ["class", "encart-visio card ed-card px-3 pb-3", 4, "ngIf"], ["class", "encart-edforms card ed-card px-3 pb-3", 4, "ngIf"], ["class", "bs-docs-sidebar d-print-none hidden-xs", "id", "emploi-temps", 4, "ngIf"], [1, "encart-visio", "card", "ed-card", "px-3", "pb-3"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity", "needToday"], [1, "encart-edforms", "card", "ed-card", "px-3", "pb-3"], ["class", "btn-action btn-action-needed light-color icon-ed_attention", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn-action", "btn-action-needed", "light-color", "icon-ed_attention"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["id", "emploi-temps", 1, "bs-docs-sidebar", "d-print-none", "hidden-xs"], [1, "hidden-xs", 3, "ongletSelected", "ongletSelectedEvent"], ["id", "emploi-du-temps-jour", "role", "complementary", 1, "bs-docs-sidebar", "d-print-none", "hidden-xs"], [3, "idEntity", "schedulerConfig", "schedulerTemplateConfig", "typeEntity"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0);
        t.YNc(1, ue, 12, 15, "div", 1);
        t.ALo(2, "async");
        t.qZA();
      }
      if (g & 2) {
        t.Q6J("ngBusy", ie.loader);
        t.xp6(1);
        t.Q6J("ngIf", t.lcZ(2, 2, ie.datasAccueil$));
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, bs.yS, Wa.DC, ir.F, uc.a, Ll, Hc.R, Qa, Dc, lc, dt.Ov, dt.JJ, b.kM_, b.ifA, Zl.$],
    styles: [".accueilenseignant[_ngcontent-%COMP%]   .dhx_cal_container[_ngcontent-%COMP%]{background:none}.accueilenseignant[_ngcontent-%COMP%]   .encart-edforms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.accueilenseignant[_ngcontent-%COMP%]   .encart-edforms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px;width:49%;border-radius:5px;color:#fff;margin-top:5px}.accueilenseignant[_ngcontent-%COMP%]   .encart-edforms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:0 0 5px;padding:3px}ed-agenda-evenements[_ngcontent-%COMP%]{width:100%}@media screen and (max-width: 990px){.blocs-colonne[_ngcontent-%COMP%]{padding:1px 10px}}#soldes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none}#soldes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 10px;overflow:hidden}#soldes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{line-height:1.1}#soldes[_ngcontent-%COMP%]   .badge-solde[_ngcontent-%COMP%]{float:left;margin:0 15px 0 0;padding:10px 0;min-width:75px;background:var(--light-primary-color);border-radius:50px;font-size:15px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;text-align:center}#soldes[_ngcontent-%COMP%]   .badge-solde.badgedebiteur[_ngcontent-%COMP%]{background:var(--secondary-color)}"]
  });
  return H;
})();
function Mt(H, Q) {
  if (H & 1) {
    t._UZ(0, "img", 7);
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.Q6J("src", g.urlTelechargementLogoEtab, t.LSH);
  }
}
function Qt(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 2)(1, "div", 5);
    t._uU(2);
    t.YNc(3, Mt, 1, 1, "img", 6);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(2);
    t.hij(" ", g.authStore.currentUser.nomEtablissement, " ");
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.logoEtablissement);
  }
}
function Cn(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2", 2);
    t._uU(1, " Bienvenue sur votre espace EcoleDirecte ");
    t.qZA();
  }
}
let gi = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
      this.urlTelechargementLogoEtab = `${(0, wc.Je)()}/telechargement${wc.sX.apiExtension}?cToken=${g.cToken()}&verbe=get&fichierId=${g.currentUser.logoEtablissement}&leTypeDeFichier=IMPORT_FTP`;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-accueil-entreprise"]],
    decls: 6,
    vars: 2,
    consts: [[1, "accueilentreprise", "accueiluserauth", "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "row", "padding-home"], ["class", "col-md-12", 4, "ngIf"], ["id", "nom-etb"], ["alt", "logo établissement", "class", "pull-right img-rounded logo-etab", 3, "src", 4, "ngIf"], ["alt", "logo établissement", 1, "pull-right", "img-rounded", "logo-etab", 3, "src"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        t.YNc(4, Qt, 4, 2, "div", 4);
        t.YNc(5, Cn, 2, 0, "h2", 4);
        t.qZA()()()();
      }
      if (g & 2) {
        t.xp6(4);
        t.Q6J("ngIf", ie.authStore.currentUser.logoEtablissement || ie.authStore.currentUser.nomEtablissement);
        t.xp6(1);
        t.Q6J("ngIf", (!ie.authStore.currentUser.messageMaintenance || ie.authStore.currentUser.messageMaintenance.length <= 0) && ie.needThis);
      }
    },
    dependencies: [dt.O5],
    changeDetection: 0
  });
  return H;
})();
function J(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 16);
  }
}
function Ce(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 17)(1, "h2", 18);
    t._uU(2, "Quoi de neuf ?");
    t.qZA();
    t._UZ(3, "ed-timeline", 19);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(3);
    t.Q6J("idUser", g.idUser)("timelineEvents", g.timelineEvents);
  }
}
function tt(H, Q) {
  if (H & 1) {
    t._UZ(0, "img", 23);
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.Q6J("src", g.urlTelechargementLogoEtab, t.LSH);
  }
}
function Rt(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 20)(1, "div", 21);
    t._uU(2);
    t.YNc(3, tt, 1, 1, "img", 22);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(2);
    t.hij(" ", g.authStore.currentUser.nomEtablissement, " ");
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.logoEtablissement);
  }
}
function ln(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2", 20);
    t._uU(1, " Bienvenue sur votre espace EcoleDirecte ");
    t.qZA();
  }
}
function ni(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "ed-tab-postits", 27);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("isActifPostitsEspacesTravail", g.isActifPostitsEspacesTravail)("tabPostits", g.tabPostits);
  }
}
function Mi(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2");
    t._uU(1, " Informations ");
    t.qZA();
  }
}
function yr(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 32)(1, "h3");
    t._uU(2);
    t.qZA();
    t._UZ(3, "p", 33);
    t.ALo(4, "nl2br");
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(2);
    t.Oqu(g.titre);
    t.xp6(1);
    t.Q6J("innerHTML", t.lcZ(4, 2, g.contenu), t.oJD);
  }
}
function $s(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 28)(1, "div", 29);
    t.YNc(2, Mi, 2, 0, "h2", 1);
    t.YNc(3, yr, 5, 4, "div", 30);
    t.ALo(4, "trackByProperty");
    t._UZ(5, "ed-postits", 31);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(2);
    t.Q6J("ngIf", g.authStore.currentUser.messageMaintenance && g.authStore.currentUser.messageMaintenance.length > 0 || (g.tabPostits == null ? null : g.tabPostits.length) > 0);
    t.xp6(1);
    t.Q6J("ngForOf", g.authStore.currentUser.messageMaintenance)("ngForTrackBy", t.lcZ(4, 7, "$index"));
    t.xp6(2);
    t.Q6J("configPostits", g.postitConfig)("idUser", g.idUser)("typeUser", g.typeUser)("tabPostIts", g.tabPostits);
  }
}
const ca = function (H) {
  return {
    "col-lg-6": H
  };
};
function zl(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 24);
    t.YNc(1, ni, 2, 2, "ng-container", 25);
    t.YNc(2, $s, 6, 9, "ng-template", null, 26, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(2);
    t.Q6J("ngClass", t.VKq(3, ca, (ie.tabPostits == null ? null : ie.tabPostits.length) > 0 || ie.isActifPostitsEspacesTravail));
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifPostitsEspacesTravail)("ngIfElse", g);
  }
}
function wl(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 34)(1, "h2", 35);
    t._uU(2, "Mes Rendez-vous");
    t.qZA();
    t.TgZ(3, "button", 36);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(2);
      return t.KtG($e.openAgenda());
    });
    t._uU(4, "Tous les rdv");
    t.qZA();
    t._UZ(5, "ed-agenda-evenements", 37);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(5);
    t.Q6J("displayTargets", false)("droitsAgenda", g.agendaConfig)("events", g.tabRDVToday)("idEntity", g.idUser)("typeEntity", g.typeUser)("needToday", true);
  }
}
function _u(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 43);
    t._uU(1);
    t.ALo(2, "base64");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.xp6(1);
    t.Oqu(t.xi3(2, 1, g.detail, "decode"));
  }
}
function Oh(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "li", 41)(1, "p")(2, "strong");
    t._uU(3);
    t.qZA()();
    t.YNc(4, _u, 3, 4, "div", 42);
    t.TgZ(5, "button", 36);
    t.NdJ("click", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(3);
      return t.KtG(_n.openSondageEleve(Ht));
    });
    t._uU(6, "Répondre au sondage");
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(3);
    t.Oqu(g.libelle);
    t.xp6(1);
    t.Q6J("ngIf", g.detail !== "");
  }
}
function Wm(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 38)(1, "h2", 35);
    t._uU(2, "Sondages");
    t.qZA();
    t.TgZ(3, "ul", 39);
    t.YNc(4, Oh, 7, 2, "li", 40);
    t.ALo(5, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(4);
    t.Q6J("ngForOf", g.tabRDTSondages)("ngForTrackBy", t.lcZ(5, 2, "$index"));
  }
}
function ch(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "li", 41)(1, "p")(2, "strong");
    t._uU(3);
    t.qZA()();
    t.TgZ(4, "button", 36);
    t.NdJ("click", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(3);
      return t.KtG(_n.openEDForms(Ht));
    });
    t._uU(5);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(3);
    t.Oqu(g.titre);
    t.xp6(2);
    t.hij("Répondre au ", g.typeToLibelleEDForms, "");
  }
}
function yf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 38)(1, "h2", 35);
    t._uU(2, "Formulaires");
    t.qZA();
    t.TgZ(3, "ul");
    t.YNc(4, ch, 6, 2, "li", 40);
    t.ALo(5, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(4);
    t.Q6J("ngForOf", g.tabEDForms)("ngForTrackBy", t.lcZ(5, 2, "idParticipant"));
  }
}
function Wu(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 48);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Oqu(g.commentaireDossierInsFamille);
  }
}
function cu(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li", 49)(1, "p")(2, "strong");
    t._uU(3, "Dossier famille");
    t.qZA()();
    t.TgZ(4, "a", 50)(5, "span", 51);
    t._uU(6);
    t.qZA()()();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(6);
    t.Oqu(g.LIBELLE_DOSSIER_A_COMPLETER);
  }
}
function Bf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 48);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    t.xp6(1);
    t.hij(" ", g.commentaire, " ");
  }
}
function cp(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 36);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw().$implicit;
      const Ht = t.oxw(3);
      return t.KtG(Ht.openDossierEleve($e.id));
    });
    t.TgZ(1, "span", 51);
    t._uU(2);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw(3);
    t.xp6(2);
    t.Oqu(ie.getLibelleEtapeInscription(g));
  }
}
function Vf(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 36);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(5);
      return t.KtG($e.openSuiviSignaturesInsReins());
    });
    t.TgZ(1, "span", 56);
    t._uU(2);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2).$implicit;
    const ie = t.oxw(3);
    t.xp6(2);
    t.Oqu(ie.getLibelleEtapeInscription(g));
  }
}
function Zp(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 36);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(2).$implicit;
      const Ht = t.oxw(3);
      return t.KtG(Ht.openDossierEleve($e.id, true));
    });
    t.TgZ(1, "span", 56);
    t._uU(2);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2).$implicit;
    const ie = t.oxw(3);
    t.xp6(2);
    t.Oqu(ie.getLibelleEtapeInscription(g));
  }
}
function J0(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t.YNc(1, Vf, 3, 1, "button", 54);
    t.YNc(2, Zp, 3, 1, "ng-template", null, 55, t.W1O);
    t.BQk();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw().$implicit;
    const $e = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", ie.isSignatairesManquants && ie.etapeInscription === $e.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE2_REMPLIE)("ngIfElse", g);
  }
}
const c0 = function (H, Q, g) {
  return {
    "btn-action-needed": H,
    "icon-ed_attention": Q,
    "icon-ed_aide": g
  };
};
function Wg(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li", 52)(1, "p")(2, "strong");
    t._uU(3);
    t.ALo(4, "displayNom");
    t.qZA()();
    t.YNc(5, Bf, 2, 1, "div", 45);
    t.YNc(6, cp, 3, 1, "button", 53);
    t.YNc(7, J0, 4, 2, "ng-container", 1);
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw(3);
    t.Q6J("ngClass", t.kEZ(9, c0, g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE2_VIDE || g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE2_REMPLIE && !g.isReglementOK || g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE1_VIDE, g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE2_VIDE || g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE2_REMPLIE && !g.isReglementOK, g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE1_VIDE));
    t.xp6(3);
    t.Oqu(t.Dn7(4, 5, g, false, false));
    t.xp6(2);
    t.Q6J("ngIf", g.commentaire !== "" && (g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE1_VIDE || g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE2_VIDE));
    t.xp6(1);
    t.Q6J("ngIf", g.etapeInscription === ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE1_VIDE);
    t.xp6(1);
    t.Q6J("ngIf", g.etapeInscription !== ie.CONST_INSCRIPTION_ETAPES.INSCR_ETAPE1_VIDE);
  }
}
function Yg(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 44)(1, "h2", 35);
    t._uU(2);
    t.qZA();
    t.YNc(3, Wu, 2, 1, "div", 45);
    t.TgZ(4, "ul");
    t.YNc(5, cu, 7, 1, "li", 46);
    t.YNc(6, Wg, 8, 13, "li", 47);
    t.ALo(7, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(2);
    t.hij(" Dossier", g.tabInscriptions.length > 1 ? "s" : "", " d'inscription ou de ré-inscription ");
    t.xp6(1);
    t.Q6J("ngIf", g.commentaireDossierInsFamille);
    t.xp6(2);
    t.Q6J("ngIf", g.displayEtatFamille === true && g.etatDossierInsFamille !== g.CONST_INSCRIPTION_ETAPES.INSCR_FAMILLE_VALIDE);
    t.xp6(1);
    t.Q6J("ngForOf", g.tabInscriptions)("ngForTrackBy", t.lcZ(7, 5, "$index"));
  }
}
function up(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "ed-tab-agenda", 59);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("agendaEvents", g.agendaEvents);
  }
}
const u0 = function (H) {
  return [H];
};
function $0(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 60)(1, "h2", 35);
    t._uU(2, "Agenda");
    t.qZA();
    t.TgZ(3, "a", 61);
    t._uU(4, "Tout l'agenda");
    t.qZA();
    t._UZ(5, "ed-agenda-evenements", 62);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(3);
    t.Q6J("routerLink", t.VKq(6, u0, "/" + g.typeUser + "/" + g.idUser + "/Agenda"));
    t.xp6(2);
    t.Q6J("displayTargets", false)("droitsAgenda", g.agendaConfig)("events", g.agendaEvents)("idEntity", g.idUser)("typeEntity", g.typeUser);
  }
}
function Zg(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 57);
    t.YNc(1, up, 2, 1, "ng-container", 25);
    t.YNc(2, $0, 6, 8, "ng-template", null, 58, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(2);
    t.Q6J("ngClass", t.VKq(3, ca, (ie.tabPostits == null ? null : ie.tabPostits.length) === 0 && !ie.isActifPostitsEspacesTravail));
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifAgendaEvenementsEspacesTravail)("ngIfElse", g);
  }
}
function Zd(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2", 35);
    t._uU(1, "Porte-monnaie");
    t.qZA();
  }
}
const _f = function () {
  return ["/Paiements"];
};
const ad = function (H) {
  return {
    badgedebiteur: H
  };
};
function uh(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 69)(1, "span", 70);
    t._UZ(2, "span", 71);
    t._uU(3);
    t.ALo(4, "number");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw(3);
    t.Q6J("routerLink", t.DdM(7, _f));
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(8, ad, g.solde < 0));
    t.xp6(1);
    t.Q6J("textContent", g.solde < 0 ? "" : "+");
    t.xp6(1);
    t.hij(" ", t.xi3(4, 4, g.solde, ie.digitsInfo), " ");
  }
}
function Ym(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 70);
    t._UZ(1, "span", 71);
    t._uU(2);
    t.ALo(3, "number");
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw().$implicit;
    const ie = t.oxw(3);
    t.Q6J("ngClass", t.VKq(6, ad, g.solde < 0));
    t.xp6(1);
    t.Q6J("textContent", g.solde < 0 ? "" : "+");
    t.xp6(1);
    t.hij(" ", t.xi3(3, 3, g.solde, ie.digitsInfo), " ");
  }
}
function Gg(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li");
    t.YNc(1, uh, 5, 10, "a", 66);
    t.YNc(2, Ym, 4, 8, "span", 67);
    t.TgZ(3, "strong", 68);
    t._uU(4);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", ie.isPaiementEnable);
    t.xp6(1);
    t.Q6J("ngIf", !ie.isPaiementEnable);
    t.xp6(2);
    t.Oqu(g.libelle);
  }
}
function Zm(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 63);
    t.YNc(1, Zd, 2, 0, "h2", 64);
    t.TgZ(2, "ul");
    t.YNc(3, Gg, 5, 3, "li", 65);
    t.ALo(4, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.Q6J("ngClass", t.VKq(6, ca, (g.tabPostits == null ? null : g.tabPostits.length) === 0 && !g.isActifPostitsEspacesTravail));
    t.xp6(1);
    t.Q6J("ngIf", g.lesSoldes.length >= 1);
    t.xp6(2);
    t.Q6J("ngForOf", g.lesSoldes)("ngForTrackBy", t.lcZ(4, 4, "$index"));
  }
}
const X0 = function (H, Q) {
  return {
    "col-lg-9": H,
    "col-lg-12": Q
  };
};
const dp = function (H, Q) {
  return {
    "col-lg-12": H,
    "col-lg-6": Q
  };
};
const dh = function (H) {
  return {
    row: H
  };
};
function Eu(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t.YNc(1, J, 1, 0, "div", 2);
    t.TgZ(2, "div", 3);
    t.YNc(3, Ce, 4, 2, "div", 4);
    t.TgZ(4, "div", 5)(5, "div", 6);
    t.YNc(6, Rt, 4, 2, "div", 7);
    t.YNc(7, ln, 2, 0, "h2", 7);
    t.YNc(8, zl, 4, 5, "div", 8);
    t.TgZ(9, "div", 9)(10, "div", 10);
    t.YNc(11, wl, 6, 6, "div", 11);
    t.YNc(12, Wm, 6, 4, "div", 12);
    t.YNc(13, yf, 6, 4, "div", 12);
    t.YNc(14, Yg, 8, 7, "div", 13);
    t.YNc(15, Zg, 4, 5, "div", 14);
    t.YNc(16, Zm, 5, 8, "div", 15);
    t.qZA()()()()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("ngIf", g.timelineEvents && g.timelineEvents.length > 0);
    t.xp6(2);
    t.Q6J("ngIf", g.timelineEvents && g.timelineEvents.length > 0);
    t.xp6(1);
    t.Q6J("ngClass", t.WLB(14, X0, g.timelineEvents && g.timelineEvents.length > 0, g.timelineEvents.length === 0));
    t.xp6(2);
    t.Q6J("ngIf", g.authStore.currentUser.logoEtablissement || g.authStore.currentUser.nomEtablissement);
    t.xp6(1);
    t.Q6J("ngIf", (!g.authStore.currentUser.messageMaintenance || g.authStore.currentUser.messageMaintenance.length <= 0) && (!g.tabPostits || g.tabPostits.length <= 0));
    t.xp6(1);
    t.Q6J("ngIf", g.tabPostits || g.isActifPostitsEspacesTravail && g.espacesTravailActif);
    t.xp6(1);
    t.Q6J("ngClass", t.WLB(17, dp, (g.tabPostits == null ? null : g.tabPostits.length) === 0 && !g.isActifPostitsEspacesTravail, (g.tabPostits == null ? null : g.tabPostits.length) > 0 || g.isActifPostitsEspacesTravail));
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(20, dh, (g.tabPostits == null ? null : g.tabPostits.length) === 0 && !g.isActifPostitsEspacesTravail));
    t.xp6(1);
    t.Q6J("ngIf", (g.tabRDVToday == null ? null : g.tabRDVToday.length) > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.tabRDTSondages && g.tabRDTSondages.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.tabEDForms && g.tabEDForms.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.isDossierInscriptionActif && g.tabInscriptions.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", (g.agendaEvents == null ? null : g.agendaEvents.length) > 0 || g.espacesTravailActif && g.isActifAgendaEvenementsEspacesTravail);
    t.xp6(1);
    t.Q6J("ngIf", g.lesSoldes.length > 0);
  }
}
let q0 = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n, Un, ui, Vi, Wr, Cs, Ea, ga) {
      super();
      this.uiService = g;
      this.authStore = ie;
      this.loaderService = $e;
      this.timelineService = Ht;
      this.rdtService = _n;
      this.modalService = Un;
      this.messageService = ui;
      this.dossierInscriptionFamilleService = Vi;
      this.edfService = Wr;
      this.router = Cs;
      this.events = Ea;
      this.cloudService = ga;
      this.tabPostits = [];
      this.tabEDForms = [];
      this.agendaEvents = [];
      this.timelineEvents = [];
      this.tabRDTSondages = [];
      this.tabInscriptions = [];
      this.tabReunions = [];
      this.lesSoldes = [];
      this.isMessagerieActive = false;
      this.isDocumentsActifs = false;
      this.isSituationFinanciereActive = false;
      this.isPaiementEnable = false;
      this.isDossierInscriptionActif = false;
      this.displayEtatFamille = false;
      this.CONST_INSCRIPTION_ETAPES = b.HU;
      this.LIBELLE_DOSSIER_A_COMPLETER = b.FcY;
      this.tabRDVToday = [];
      this.agendaConfig = {
        CAN_CREATE: false,
        CAN_UPDATE: false,
        CAN_DELETE: false
      };
      this.postitConfig = {
        addPostit: false,
        updatePostit: false,
        deletePostit: false,
        displayDateCreated: true,
        displayDateLimit: false,
        displayTargets: false,
        displayFormTargets: false,
        selectTargets: [],
        visibilityPostitPast: false,
        displayLibelleAuteur: false,
        contexte: b.M$6.ACCUEIL
      };
    }
    ngOnInit() {
      this.typeUser = this.authStore.currentUser.typeCompte;
      this.idUser = this.authStore.currentUser.id;
      this.espacesTravailActif = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.CLOUD);
      this.urlTelechargementLogoEtab = `${(0, wc.Je)()}/telechargement${wc.sX.apiExtension}?cToken=${this.authStore.cToken()}&verbe=get&fichierId=${this.authStore.currentUser.logoEtablissement}&leTypeDeFichier=IMPORT_FTP`;
      this.isMessagerieActive = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.MESSAGERIE);
      this.isDocumentsActifs = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.DOCUMENTS);
      this.isSituationFinanciereActive = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.SITUATION_FINANCIERE);
      this.isPaiementEnable = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.PAIEMENT_EN_LIGNE);
      this.isDossierInscriptionActif = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.DOSSIER_INSCRIPTION);
      this.isActifPostitsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifPostitsEspacesTravail", this.authStore.currentUser) > 0;
      this.isActifAgendaEvenementsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifAgendaEvenementsEspacesTravail", this.authStore.currentUser) > 0;
      const g = b.Kg5.getModuleParametre(b.qzA.PAIEMENT_EN_LIGNE, "codeDevise", this.authStore.currentUser);
      this.digitsInfo = b.wtJ.infosDevise(g).digitsInfo;
      this.refreshData();
      this.events.select$("array:removeEntityById").pipe((0, gl.R)(this.componentDestroyed$)).subscribe(ie => {
        if (ie > 0 && Array.isArray(this.tabEDForms)) {
          this.tabEDForms = this.tabEDForms.filter($e => ie !== $e.idParticipant);
        }
      });
    }
    getLibelleEtapeInscription(g) {
      return b.GRg.getLibelleEtapeInscription(g);
    }
    openSondageEleve(g) {
      const ie = {
        sondage: g
      };
      const $e = {
        id: this.modalService.getModalsCount() + 1,
        initialState: ie,
        ignoreBackdropClick: true,
        class: "modal-lg"
      };
      this.modalService.show($o, $e);
      this.modalService.onHide.pipe((0, Io.q)(1), (0, Sa.h)(Ht => Ht === ic.G.validation), (0, hl.w)(Ht => {
        this.loader = this.loaderService.show(this);
        return this.rdtService.getSondages();
      }), (0, Hs.b)(Ht => {
        this.tabRDTSondages = Ht.filter(_n => _n.id !== g.id);
      }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(Ht => this.uiService.notifyErrorThenEmpty(Ht, true, "Erreur", "fa fa-warning"))).subscribe();
    }
    isPast(g) {
      return b.C_1.isAfter(new Date(), b.C_1.stringToDate(g));
    }
    refreshData() {
      this.loader = this.loaderService.show(this);
      this.datasAccueil$ = (0, Sc.D)([this.timelineService.communTimeline(this.typeUser, this.idUser), this.dossierInscriptionFamilleService.getDossierInscription(this.authStore.currentUser.codeOgec, this.typeUser, this.idUser, true, true), this.rdtService.getSondages(), this.edfService.getFS(this.typeUser, this.idUser), this.messageService.getUnreadMessages(this.typeUser, this.idUser), this.cloudService.getVisioToday(this.idUser, this.typeUser)]).pipe((0, Hs.b)(g => {
        let ie = [];
        this.tabPostits = g[0].postits?.map($e => new b.ZUG($e));
        this.agendaEvents = g[0].evenements?.map($e => b.h0G.cleanEvent(new b.gBp($e)));
        this.tabReunions = g[0].reunions || [];
        this.tabReunions.forEach(($e, Ht) => {
          if (!this.isPast($e.dateReunion)) {
            const _n = new b.j9y({
              date: $e.dateReunion + " " + $e.heureDebut + ":00",
              description: $e.libelleReunion + " / (pour " + $e.eleve.prenom + ")",
              typeElement: "ReunionPPFamille",
              idElement: Ht,
              titre: "Nouvelle réunion parents/prof disponible",
              soustitre: "",
              idUser: $e.eleve.id,
              typeUser: b.dcH.ELEVE,
              contenu: "",
              afficherHeure: false
            });
            ie.push(_n);
          }
        });
        if (this.isDocumentsActifs) {
          const $e = ["documentsFacture", "documentsNote", "documentsVS", "documentsAdm"];
          for (let Ht = 0; Ht < $e.length; Ht++) {
            if (g[0].hasOwnProperty($e[Ht])) {
              g[0][$e[Ht]].forEach(Un => {
                const ui = new b.j9y({
                  date: Un.date,
                  typeElement: "DocumentFamille",
                  idElement: Ht,
                  titre: "Nouveau document disponible",
                  soustitre: "",
                  contenu: "",
                  idUser: this.idUser,
                  typeUser: this.typeUser,
                  description: Un.libelle,
                  afficherHeure: false
                });
                ie.push(ui);
              });
            }
          }
        }
        if (this.isSituationFinanciereActive) {
          this.lesSoldes = Object.isExists(g[0].comptes) ? g[0].comptes.comptes.filter($e => $e.typeCompte === b.f3K.pm && $e.solde !== 0 || $e.typeCompte === b.f3K.pmactivite && $e.solde < 0).map($e => new b.ind($e)) : [];
        }
        ie = [...ie, ...g[4].slice(0, 10).map($e => new b.j9y({
          date: $e.date,
          contenu: $e.content,
          description: $e.subject,
          titre: $e.from.civilite + " " + $e.from.prenom + " " + $e.from.nom,
          idElement: $e.id,
          typeElement: "Messagerie",
          idUser: this.idUser,
          typeUser: this.typeUser,
          afficherHeure: false
        }))];
        this.timelineEvents = [...this.timelineEvents, ...ie];
        this.tabInscriptions = g[1].inscriptions;
        this.commentaireDossierInsFamille = g[1].commentaireFamille;
        this.etatDossierInsFamille = g[1].etatFamille;
        if (Object.isExists(this.tabInscriptions)) {
          this.displayEtatFamille = this.tabInscriptions.filter($e => $e.etapeInscription >= b.HU.INSCR_ETAPE2_REMPLIE).length === this.tabInscriptions.length;
        }
        this.tabRDTSondages = g[2];
        this.tabEDForms = g[3];
        if (g[5]?.length > 0) {
          g[5].forEach($e => {
            if ($e.typeEvenement !== b.iUh.RPPFamille || $e.isVisio) {
              this.tabRDVToday.push($e);
            } else {
              const Ht = this.tabRDVToday.find(_n => _n.id === $e.id && _n.libelle === $e.libelle);
              if (Object.isExists(Ht)) {
                if ($e.heureDebut < Ht.heureDebut) {
                  Ht.heureDebut = $e.heureDebut;
                }
                if ($e.heureFin > Ht.heureFin) {
                  Ht.heureFin = $e.heureFin;
                }
                Ht.nomAuteur = "";
              } else {
                this.tabRDVToday.push($e);
              }
            }
          });
        }
      }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(g => this.uiService.notifyErrorThenEmpty(g, true, "Erreur", "fa fa-warning")));
    }
    openEDForms(g) {
      this.router.navigate(["", {
        outlets: {
          auxiliaryModal: ["repondre-au-fs"]
        }
      }], {
        skipLocationChange: true,
        queryParams: {
          idFS: g.id,
          idParticipant: g.idParticipant,
          titre: g.titre
        }
      }).catch(() => console.error("AccueilFamilleComponent.openEDForms navigate to fs form"));
    }
    openDossierEleve(g, ie = false) {
      if (ie) {
        this.router.navigate(["/F/DossierInscription"]).catch(() => console.error("AccueilFamilleComponent.openDossierEleve navigate to dossier eleve"));
      } else {
        this.router.navigate(["/F/DossierInscription/dossiersEleves"], {
          queryParams: {
            idEleve: g
          }
        }).catch(() => console.error("AccueilFamilleComponent.openDossierEleve navigate to dossier eleve"));
      }
    }
    openAgenda() {
      this.router.navigate(["/" + this.authStore.currentUser.typeCompte + "/" + this.authStore.currentUser.id + "/Agenda"], {
        queryParams: {
          selectAgendaRDV: true
        }
      }).catch(() => console.error("AccueilFamilleComponent.openAgenda"));
    }
    openSuiviSignaturesInsReins() {
      this.router.navigate(["/F/DossierInscription/signatures"]).catch(() => console.error("AccueilFamilleComponent.openSuiviSignaturesInsReins navigate to suivi signatures"));
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.VLf), t.Y36(b.CnD), t.Y36(gr.S), t.Y36(b.uSF), t.Y36(b.Bwr), t.Y36(tl.tT), t.Y36(b.KRh), t.Y36(b.hmA), t.Y36(b.i4Q), t.Y36(bs.F0), t.Y36(b.eq2), t.Y36(b.eyc));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-accueil-famille"]],
    features: [t.qOj],
    decls: 3,
    vars: 4,
    consts: [[1, "accueilfamille", "accueiluserauth", "container-fluid", 3, "ngBusy"], [4, "ngIf"], ["class", "d-none d-lg-block d-print-none separator", 4, "ngIf"], [1, "row"], ["class", "d-none d-lg-block col-lg-3 timeline-famille double-padding padding-home", 4, "ngIf"], [1, "", 3, "ngClass"], [1, "row", "padding-home"], ["class", "col-lg-12", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "double-padding", 3, "ngClass"], [1, "blocs-colonne", "margin-bottom", 3, "ngClass"], ["class", "encart-agenda card ed-card px-3 pb-3", 4, "ngIf"], ["class", "encart-rdt-sondages card ed-card px-3 pb-3", 4, "ngIf"], ["class", "hidden-xs card ed-card px-3 pb-3", "id", "dossierInscription", 4, "ngIf"], ["class", "card ed-card px-3 pb-3", 3, "ngClass", 4, "ngIf"], ["class", "hidden-xs card ed-card px-3 pb-3", "id", "soldes", 3, "ngClass", 4, "ngIf"], [1, "d-none", "d-lg-block", "d-print-none", "separator"], [1, "d-none", "d-lg-block", "col-lg-3", "timeline-famille", "double-padding", "padding-home"], ["id", "quoi-de-neuf"], [3, "idUser", "timelineEvents"], [1, "col-lg-12"], ["id", "nom-etb"], ["alt", "logo établissement", "class", "float-end rounded logo-etab", 3, "src", 4, "ngIf"], ["alt", "logo établissement", 1, "float-end", "rounded", "logo-etab", 3, "src"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["onlyPostIts", ""], [3, "isActifPostitsEspacesTravail", "tabPostits"], ["id", "encart-postit"], [1, "no-padding", "blocs-colonne", "margin-bottom"], ["class", "jumbotron msg-maintenance", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "configPostits", "idUser", "typeUser", "tabPostIts"], [1, "jumbotron", "msg-maintenance"], [3, "innerHTML"], [1, "encart-agenda", "card", "ed-card", "px-3", "pb-3"], [1, "text-center", "w-100"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity", "needToday"], [1, "encart-rdt-sondages", "card", "ed-card", "px-3", "pb-3"], [1, "rdt"], ["class", "btn-action btn-action-needed light-color icon-ed_attention", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn-action", "btn-action-needed", "light-color", "icon-ed_attention"], ["class", "alert alert-info", 4, "ngIf"], [1, "alert", "alert-info"], ["id", "dossierInscription", 1, "hidden-xs", "card", "ed-card", "px-3", "pb-3"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "btn-action btn-action-ok icon-ed_valider etape-en-attente btn-action-needed icon-ed_attention", 4, "ngIf"], ["class", "btn-action btn-action-ok icon-ed_valider etape-en-attente", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "alert", "alert-warning"], [1, "btn-action", "btn-action-ok", "icon-ed_valider", "etape-en-attente", "btn-action-needed", "icon-ed_attention"], ["routerLink", "/F/DossierInscription"], [1, "danger"], [1, "btn-action", "btn-action-ok", "icon-ed_valider", "etape-en-attente", 3, "ngClass"], ["type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf", "ngIfElse"], ["btnLinkDossierEleve", ""], [1, ""], [1, "card", "ed-card", "px-3", "pb-3", 3, "ngClass"], ["onlyAgendaEtab", ""], [3, "agendaEvents"], [1, "encart-agenda"], ["href", "", 1, "mb-4", 3, "routerLink"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity"], ["id", "soldes", 1, "hidden-xs", "card", "ed-card", "px-3", "pb-3", 3, "ngClass"], ["class", "text-center w-100", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "", 3, "routerLink", 4, "ngIf"], ["class", "badge-solde", 3, "ngClass", 4, "ngIf"], [1, "libelle"], ["href", "", 3, "routerLink"], [1, "badge-solde", 3, "ngClass"], [3, "textContent"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0);
        t.YNc(1, Eu, 17, 22, "div", 1);
        t.ALo(2, "async");
        t.qZA();
      }
      if (g & 2) {
        t.Q6J("ngBusy", ie.loader);
        t.xp6(1);
        t.Q6J("ngIf", t.lcZ(2, 2, ie.datasAccueil$));
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, bs.yS, Wa.DC, ir.F, uc.a, Ll, Qa, Dc, dt.Ov, dt.JJ, b.$t3, b.YC, b.kM_, Zl.$],
    styles: ["ed-agenda-evenements[_ngcontent-%COMP%]{width:100%}.encart-rdt-sondages[_ngcontent-%COMP%]   li.btn-action.btn-action-ok.icon-ed_valider.etape-en-attente.icon-ed_attention.ng-star-inserted[_ngcontent-%COMP%]{background:linear-gradient(var(--ultradark-primary-color),var(--dark-primary-color));color:#fff}.encart-rdt-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.encart-rdt-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px;width:49%;border-radius:5px;color:#fff;margin-top:5px}.encart-rdt-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:0 0 5px;padding:3px}.encart-rdt-sondages[_ngcontent-%COMP%]   ul.rdt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}.encart-rdt-sondages[_ngcontent-%COMP%]   li.btn-action.btn-action-needed.light-color.icon-ed_attention.ng-star-inserted[_ngcontent-%COMP%]{padding:20px;border-radius:5px;color:#fff;background:linear-gradient(var(--smalldark-primary-color),var(--dark-primary-color))}#dossierInscription[_ngcontent-%COMP%]   li.btn-action.btn-action-ok.icon-ed_valider.etape-en-attente.icon-ed_attention.ng-star-inserted[_ngcontent-%COMP%]{background:linear-gradient(var(--ultradark-primary-color),var(--dark-primary-color));color:#fff}#dossierInscription[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}#dossierInscription[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px;width:49%;border-radius:5px;color:#fff}#dossierInscription[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) ~ li[_ngcontent-%COMP%]{margin-top:5px}#dossierInscription[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:0 0 5px;padding:3px}#soldes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none}#soldes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 10px;overflow:hidden}#soldes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{line-height:1.1}#soldes[_ngcontent-%COMP%]   .badge-solde[_ngcontent-%COMP%]{float:left;margin:0 15px 0 0;padding:10px 0;min-width:90px;background:var(--light-primary-color);border-radius:50px;font-size:15px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;text-align:center}#soldes[_ngcontent-%COMP%]   .badge-solde.badgedebiteur[_ngcontent-%COMP%]{background:var(--secondary-color)}"]
  });
  return H;
})();
function ld(H, Q) {
  if (H & 1) {
    t._UZ(0, "img", 12);
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.Q6J("src", g.urlTelechargementLogoEtab, t.LSH);
  }
}
function Pr(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 9)(1, "div", 10);
    t._uU(2);
    t.YNc(3, ld, 1, 1, "img", 11);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(2);
    t.hij(" ", g.authStore.currentUser.nomEtablissement, " ");
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.logoEtablissement);
  }
}
function zg(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "ed-tab-postits", 16);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("isActifPostitsEspacesTravail", g.isActifPostitsEspacesTravail)("tabPostits", g.tabPostits);
  }
}
function Yy(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2");
    t._uU(1, "Informations");
    t.qZA();
  }
}
function bu(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 21)(1, "h3");
    t._uU(2);
    t.qZA();
    t._UZ(3, "p", 22);
    t.ALo(4, "nl2br");
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(2);
    t.Oqu(g.titre);
    t.xp6(1);
    t.Q6J("innerHTML", t.lcZ(4, 2, g.contenu), t.oJD);
  }
}
function Kg(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 17);
    t.YNc(1, Yy, 2, 0, "h2", 18);
    t.YNc(2, bu, 5, 4, "div", 19);
    t.ALo(3, "trackByProperty");
    t._UZ(4, "ed-postits", 20);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.messageMaintenance && g.authStore.currentUser.messageMaintenance.length > 0 || (g.tabPostits == null ? null : g.tabPostits.length) > 0);
    t.xp6(1);
    t.Q6J("ngForOf", g.authStore.currentUser.messageMaintenance)("ngForTrackBy", t.lcZ(3, 7, "$index"));
    t.xp6(2);
    t.Q6J("configPostits", g.postitConfig)("idUser", g.idUser)("typeUser", g.typeUser)("tabPostIts", g.tabPostits);
  }
}
function Gm(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 13);
    t.YNc(1, zg, 2, 2, "ng-container", 14);
    t.YNc(2, Kg, 5, 9, "ng-template", null, 15, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifPostitsEspacesTravail)("ngIfElse", g);
  }
}
function Dd(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 23)(1, "h2", 24);
    t._uU(2, "Mes Rendez-vous");
    t.qZA();
    t.TgZ(3, "button", 25);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(2);
      return t.KtG($e.openAgenda());
    });
    t._uU(4, "Tous les rdv");
    t.qZA();
    t._UZ(5, "ed-agenda-evenements", 26);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(5);
    t.Q6J("displayTargets", false)("droitsAgenda", g.agendaConfig)("events", g.tabRDVToday)("idEntity", g.idUser)("typeEntity", g.typeUser)("needToday", true);
  }
}
function Td(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "li", 29)(1, "p")(2, "strong");
    t._uU(3);
    t.qZA()();
    t.TgZ(4, "button", 25);
    t.NdJ("click", function () {
      const Ht = t.CHM(g).$implicit;
      const _n = t.oxw(3);
      return t.KtG(_n.openEDForms(Ht));
    });
    t._uU(5);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.xp6(3);
    t.Oqu(g.titre);
    t.xp6(2);
    t.hij("Répondre au ", g.typeToLibelleEDForms, "");
  }
}
function ef(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 27)(1, "h2", 24);
    t._uU(2, "Formulaires");
    t.qZA();
    t.TgZ(3, "ul");
    t.YNc(4, Td, 6, 2, "li", 28);
    t.ALo(5, "trackByProperty");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(4);
    t.Q6J("ngForOf", g.tabEDForms)("ngForTrackBy", t.lcZ(5, 2, "idParticipant"));
  }
}
function ec(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._UZ(1, "ed-tab-agenda", 31);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("agendaEvents", g.agendaEvents);
  }
}
function d0(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 32)(1, "h2", 24);
    t._uU(2, "Agenda");
    t.qZA();
    t.TgZ(3, "a", 33);
    t._uU(4, "Tout l'agenda");
    t.qZA();
    t._UZ(5, "ed-agenda-evenements", 34);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(3);
    t.hYB("href", "/", g.typeUser, "/", g.idUser, "/Agenda", t.LSH);
    t.xp6(2);
    t.Q6J("displayTargets", false)("droitsAgenda", g.agendaConfig)("events", g.agendaEvents)("idEntity", g.idUser)("typeEntity", g.typeUser);
  }
}
function f0(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 30);
    t.YNc(1, ec, 2, 1, "ng-container", 14);
    t.YNc(2, d0, 6, 7, "ng-template", null, 15, t.W1O);
    t.qZA();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngIf", ie.espacesTravailActif && ie.isActifAgendaEvenementsEspacesTravail)("ngIfElse", g);
  }
}
function Gp(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 2);
    t.YNc(1, Pr, 4, 2, "div", 3);
    t.YNc(2, Gm, 4, 2, "div", 4);
    t.TgZ(3, "div", 5);
    t.YNc(4, Dd, 6, 6, "div", 6);
    t.YNc(5, ef, 6, 4, "div", 7);
    t.YNc(6, f0, 4, 2, "div", 8);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.currentUser.logoEtablissement || g.authStore.currentUser.nomEtablissement);
    t.xp6(1);
    t.Q6J("ngIf", (g.tabPostits == null ? null : g.tabPostits.length) > 0 || g.espacesTravailActif && g.isActifPostitsEspacesTravail);
    t.xp6(2);
    t.Q6J("ngIf", (g.tabRDVToday == null ? null : g.tabRDVToday.length) > 0);
    t.xp6(1);
    t.Q6J("ngIf", g.tabEDForms && g.tabEDForms.length > 0);
    t.xp6(1);
    t.Q6J("ngIf", (g.agendaEvents == null ? null : g.agendaEvents.length) > 0 || g.espacesTravailActif && g.isActifAgendaEvenementsEspacesTravail);
  }
}
let zm = (() => {
  class H {
    constructor(g, ie, $e, Ht, _n, Un, ui, Vi) {
      this.uiService = g;
      this.authStore = ie;
      this.timelineService = $e;
      this.loaderService = Ht;
      this.edfService = _n;
      this.router = Un;
      this.events = ui;
      this.cloudService = Vi;
      this.tabEDForms = [];
      this.tabRDVToday = [];
      this.urlTelechargementLogoEtab = `${(0, wc.Je)()}/telechargement${wc.sX.apiExtension}?cToken=${ie.cToken()}&verbe=get&fichierId=${ie.currentUser.logoEtablissement}&leTypeDeFichier=${b.Vav.FICHIER_IMPORT}`;
      this.idUser = this.authStore.currentUser.id;
      this.typeUser = this.authStore.currentUser.typeCompte;
      this.espacesTravailActif = b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.CLOUD);
      this.isActifPostitsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifPostitsEspacesTravail", this.authStore.currentUser) > 0;
      this.isActifAgendaEvenementsEspacesTravail = b.Kg5.getModuleParametre(b.qzA.CLOUD, "isActifAgendaEvenementsEspacesTravail", this.authStore.currentUser) > 0;
      this.postitConfig = {
        addPostit: false,
        updatePostit: false,
        deletePostit: false,
        displayDateCreated: true,
        displayDateLimit: false,
        displayTargets: false,
        displayFormTargets: false,
        selectTargets: [],
        visibilityPostitPast: false,
        displayLibelleAuteur: false,
        contexte: b.M$6.ACCUEIL
      };
      this.agendaConfig = {
        CAN_CREATE: false,
        CAN_UPDATE: false,
        CAN_DELETE: false
      };
    }
    ngOnInit() {
      this.loader = this.loaderService.show(this);
      this.listeTimelineCommun$ = (0, Sc.D)([this.timelineService.communTimeline(this.typeUser, this.idUser), this.edfService.getFS(this.typeUser, this.idUser), this.cloudService.getVisioToday(this.idUser, this.typeUser)]).pipe((0, Hs.b)(g => {
        this.tabPostits = g[0].postits?.map(ie => new b.ZUG(ie));
        this.agendaEvents = g[0].evenements?.map(ie => b.h0G.cleanEvent(new b.gBp(ie)));
        this.tabEDForms = g[1];
        this.tabRDVToday = Array.isArray(g[2]) ? [...g[2]] : [];
      }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(g => this.uiService.notifyErrorThenEmpty(g, true, "Erreur", "fa fa-warning")));
      this.events.subscribe("array:removeEntityById", g => {
        if (g > 0 && Array.isArray(this.tabEDForms)) {
          this.tabEDForms = this.tabEDForms.filter(ie => g !== ie.idParticipant);
        }
      });
    }
    ngOnDestroy() {
      this.events.unsubscribe("array:removeEntityById");
    }
    openEDForms(g) {
      this.router.navigate(["", {
        outlets: {
          auxiliaryModal: ["repondre-au-fs"]
        }
      }], {
        skipLocationChange: true,
        queryParams: {
          idFS: g.id,
          idParticipant: g.idParticipant,
          titre: g.titre
        }
      }).catch(() => console.error("AccueilFamilleComponent.openEDForms navigate to fs form"));
    }
    openAgenda() {
      this.router.navigate(["/" + this.authStore.currentUser.typeCompte + "/" + this.authStore.currentUser.id + "/Agenda"], {
        queryParams: {
          selectAgendaRDV: true
        }
      }).catch(() => console.error("AccueilFamilleComponent.openDossierEleve navigate to dossier eleve"));
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.VLf), t.Y36(b.CnD), t.Y36(b.uSF), t.Y36(gr.S), t.Y36(b.i4Q), t.Y36(bs.F0), t.Y36(b.eq2), t.Y36(b.eyc));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-accueil-personnel"]],
    decls: 3,
    vars: 4,
    consts: [[1, "ed-container", "accueil-personnel", "accueiluserauth", "container-fluid", "padding-home", 3, "ngBusy"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-6", "py-1", "px-3"], ["class", "encart-agenda card ed-card px-3 pb-3", 4, "ngIf"], ["class", "encart-edforms card ed-card px-3 pb-3", 4, "ngIf"], ["class", "card ed-card px-3 pb-3", 4, "ngIf"], [1, "col-lg-12"], ["id", "nom-etb"], ["class", "rounded logo-etab logo-etab-prof", "alt", "logo établissement", 3, "src", 4, "ngIf"], ["alt", "logo établissement", 1, "rounded", "logo-etab", "logo-etab-prof", 3, "src"], [1, "col-lg-6"], [4, "ngIf", "ngIfElse"], ["onlyPostIts", ""], [3, "isActifPostitsEspacesTravail", "tabPostits"], ["id", "encart-postit"], [4, "ngIf"], ["class", "jumbotron msg-maintenance", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "configPostits", "idUser", "typeUser", "tabPostIts"], [1, "jumbotron", "msg-maintenance"], [3, "innerHTML"], [1, "encart-agenda", "card", "ed-card", "px-3", "pb-3"], [1, "text-center", "w-100"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity", "needToday"], [1, "encart-edforms", "card", "ed-card", "px-3", "pb-3"], ["class", "btn-action btn-action-needed light-color icon-ed_attention", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn-action", "btn-action-needed", "light-color", "icon-ed_attention"], [1, "card", "ed-card", "px-3", "pb-3"], [3, "agendaEvents"], [1, "encart-agenda"], [1, "mb-4", 3, "href"], [3, "displayTargets", "droitsAgenda", "espaceTravail", "events", "idEntity", "selectedTargets", "typeEntity"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0);
        t.YNc(1, Gp, 7, 5, "div", 1);
        t.ALo(2, "async");
        t.qZA();
      }
      if (g & 2) {
        t.Q6J("ngBusy", ie.loader);
        t.xp6(1);
        t.Q6J("ngIf", t.lcZ(2, 2, ie.listeTimelineCommun$));
      }
    },
    dependencies: [dt.sg, dt.O5, Wa.DC, ir.F, uc.a, Ll, Dc, dt.Ov, b.kM_, Zl.$],
    styles: ["ed-agenda-evenements[_ngcontent-%COMP%]{width:100%}.accueil-personnel[_ngcontent-%COMP%]   .encart-edforms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.accueil-personnel[_ngcontent-%COMP%]   .encart-edforms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px;width:49%;border-radius:5px;color:#fff;margin-top:5px}.accueil-personnel[_ngcontent-%COMP%]   .encart-edforms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:0 0 5px;padding:3px}.accueil-personnel[_ngcontent-%COMP%]   .encart-rdt-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.accueil-personnel[_ngcontent-%COMP%]   .encart-rdt-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px;width:100%;border-radius:5px;color:#fff}.accueil-personnel[_ngcontent-%COMP%]   .encart-rdt-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1n) ~ li[_ngcontent-%COMP%]{margin-top:5px}.accueil-personnel[_ngcontent-%COMP%]   .encart-rdt-sondages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:0 0 5px;padding:3px}"]
  });
  return H;
})();
let jg = (() => {
  class H {
    constructor(g, ie, $e, Ht) {
      this.authStore = g;
      this.activatedRoute = ie;
      this.accountService = $e;
      this.router = Ht;
    }
    ngOnInit() {
      if (this.authStore.isLoggedIn()) {
        if (this.authStore.isFamille()) {
          this.router.navigate(["/Famille"]).catch(() => console.error("accueil navigate to /Famille"));
        } else if (this.authStore.isEleve()) {
          this.router.navigate(["/Eleves", this.authStore.currentUser.id]).catch(() => console.error("accueil navigate to /Eleves"));
        } else if (this.authStore.isPersonnel()) {
          this.router.navigate(["/Personnel"]).catch(() => console.error("accueil navigate to /Personnel"));
        } else if (this.authStore.isProfesseur()) {
          this.router.navigate(["/Enseignant"]).catch(() => console.error("accueil navigate to /Enseignant"));
        } else if (this.authStore.isEntreprise()) {
          this.router.navigate(["/Entreprise"]).catch(() => console.error("accueil navigate to /Entreprise"));
        } else {
          this.accountService.logout();
        }
      } else {
        this.router.navigate(["/login"]).catch(() => console.error("accueil navigate to /login"));
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(bs.gz), t.Y36(Yo.B), t.Y36(bs.F0));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ng-component"]],
    decls: 0,
    vars: 0,
    template: function (g, ie) {},
    encapsulation: 2
  });
  return H;
})();
let Qg = (() => {
  class H {
    constructor(g, ie) {
      this.authStore = g;
      this.router = ie;
    }
    ngOnInit() {
      if (this.authStore.isLoggedIn()) {
        this.router.navigate(["/accueil"]).catch(() => console.error("layout navigate to /accueil"));
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(bs.F0));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ng-component"]],
    decls: 3,
    vars: 0,
    consts: [["id", "main-part"], ["id", "main"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1);
        t._UZ(2, "router-outlet");
        t.qZA()();
      }
    },
    dependencies: [bs.lC],
    encapsulation: 2
  });
  return H;
})();
import * as fp from "46590";
class hp {
  constructor(Q = {
    selectedMenuId: ""
  }) {
    this.selectedMenuId = Q.selectedMenuId;
  }
  static initialState() {
    return {};
  }
}
let Ef = class extends b.yh4 {
  constructor(Q) {
    super(Q);
    this.devTool = Q;
  }
  updateSelectedMenu(Q) {
    this.store = new hp({
      selectedMenuId: Q
    });
  }
};
Ef.ɵfac = function (Q) {
  return new (Q || Ef)(t.LFG(b.lbX));
};
Ef.ɵprov = t.Yz7({
  token: Ef,
  factory: Ef.ɵfac,
  providedIn: "root"
});
Ef = (0, To.gn)([(0, b.pcA)({
  classInstanceRef: hp,
  resetWhenSwipe: true,
  className: "MenuUserStore"
})], Ef);
function Hf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 6);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Oqu(g.badgesProfil[g.blockItem.code].valeur);
  }
}
function Md(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "a", 3);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(2);
      return t.KtG($e.setActif());
    });
    t._UZ(1, "i");
    t.TgZ(2, "span", 4);
    t._uU(3);
    t.qZA();
    t.YNc(4, Hf, 2, 1, "span", 5);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.ekj("item-actif", g.isActif);
    t.Q6J("routerLink", g.blockItem.action.route)("queryParams", g.blockItem.action.queryParams);
    t.xp6(1);
    t.Tol(g.blockItem.leftIcon);
    t.xp6(2);
    t.Oqu(g.blockItem.titre);
    t.xp6(1);
    t.Q6J("ngIf", g.shouldDisplayBadge(g.blockItem.code));
  }
}
function Km(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 9);
    t._UZ(1, "i");
    t.TgZ(2, "span", 4);
    t._uU(3);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.Q6J("target", g.blockItem.action.links[0].target)("href", g.blockItem.action.links[0].url, t.LSH)("needAuth", g.blockItem.action.links[0].needAuth)("queryParams", g.blockItem.action.links[0].queryParams);
    t.xp6(1);
    t.Tol(g.blockItem.leftIcon);
    t.xp6(2);
    t.Oqu(g.blockItem.action.links[0].title);
  }
}
function h0(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 13);
    t._UZ(1, "i", 14);
    t.TgZ(2, "span", 4);
    t._uU(3);
    t.qZA()();
  }
  if (H & 2) {
    const g = Q.$implicit;
    t.Q6J("target", g.target)("href", g.url, t.LSH)("needAuth", g.needAuth)("queryParams", g.queryParams);
    t.xp6(3);
    t.Oqu(g.title);
  }
}
function jm(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t.YNc(1, h0, 4, 5, "a", 12);
    t.ALo(2, "trackByProperty");
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(4);
    t.xp6(1);
    t.Q6J("ngForOf", g.blockItem.action.links)("ngForTrackBy", t.lcZ(2, 2, "url"));
  }
}
const Qm = function (H, Q) {
  return {
    "fa-chevron-right": H,
    "fa-chevron-up": Q
  };
};
function gp(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "a", 10);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(3);
      return t.KtG($e.toggleIsOpen());
    });
    t._UZ(1, "i");
    t.TgZ(2, "span", 4);
    t._uU(3);
    t.qZA();
    t._UZ(4, "i", 11);
    t.qZA();
    t.YNc(5, jm, 3, 4, "ng-container", 1);
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Tol(g.blockItem.leftIcon);
    t.xp6(2);
    t.Oqu(g.blockItem.titre);
    t.xp6(1);
    t.Q6J("ngClass", t.WLB(5, Qm, !g.isOpen, g.isOpen));
    t.xp6(1);
    t.Q6J("ngIf", g.isOpen);
  }
}
function mp(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t.YNc(1, Km, 4, 7, "a", 7);
    t.YNc(2, gp, 6, 8, "ng-template", null, 8, t.W1O);
    t.BQk();
  }
  if (H & 2) {
    const g = t.MAs(3);
    const ie = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngIf", !ie.isMultiple)("ngIfElse", g);
  }
}
function zp(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t.YNc(1, Md, 5, 8, "a", 2);
    t.YNc(2, mp, 4, 2, "ng-container", 1);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("ngIf", g.blockItem.action == null ? null : g.blockItem.action.route);
    t.xp6(1);
    t.Q6J("ngIf", (g.blockItem.action == null ? null : g.blockItem.action.links.length) > 0);
  }
}
let Ph = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n, Un, ui, Vi) {
      super();
      this.authStore = g;
      this.cd = ie;
      this.etablissementService = $e;
      this.etablissementStore = Ht;
      this.loaderService = _n;
      this.location = Un;
      this.menuUserStore = ui;
      this.router = Vi;
      this.isActif = false;
      this.isOpen = false;
    }
    get isMultiple() {
      return this.blockItem.action.links.length > 1;
    }
    ngOnInit() {
      this.uniqueID = `${this.menuBlockUID}_${this.menuBlockItem.code}`;
      this.router.events.pipe((0, Hs.b)(g => {
        if (g instanceof bs.m2 && Object.isExists(this.blockItem)) {
          this.isActif = this.isActiveMenu();
          this.cd.markForCheck();
        }
      }), (0, gl.R)(this.componentDestroyed$)).subscribe();
      if (this.menuBlockItem.callNiveauxListe && b.FSr.isNotEmptyString(this.menuBlockItem.staticCall)) {
        this.loader = this.loaderService.show(this);
        this.etablissementService.getNiveauxListe().pipe((0, fp.d)(null), (0, Hs.b)(g => {
          this.blockItem = b.q9$[this.menuBlockItem.staticCall](this.menuBlockItem, b.Kg5.getModuleParams(this.menuBlockItem.code, this.authStore.currentUser), true, this.etablissementStore.snapshot.etablissements);
          this.isActif = this.isActiveMenu();
          this.cd.markForCheck();
        }), (0, lo.K)(g => kl.E), (0, As.x)(() => this.loaderService.hide(this))).subscribe();
      } else {
        this.blockItem = this.menuBlockItem;
        this.isActif = this.isActiveMenu();
      }
      this.menuUserStore.select$().pipe((0, Hs.b)(g => {
        if (!!Object.isExists(g.selectedMenuId)) {
          this.isActif = this.isOpen = g.selectedMenuId === this.uniqueID;
          this.cd.markForCheck();
        }
      }), (0, gl.R)(this.componentDestroyed$)).subscribe();
    }
    shouldDisplayBadge(g) {
      return Object.isExists(this.badgesProfil) && Object.isExists(this.badgesProfil[g]) && this.badgesProfil[g].valeur > 0;
    }
    isActiveMenu() {
      const g = this.location.path();
      if (!Object.isExists(this.blockItem.action.route)) {
        return false;
      }
      const ie = ["/", "/Accueil", "/Famille", "/Eleve", "/Personnel", "/Enseignant"];
      if (ie.indexOf(this.blockItem.action.route) > -1) {
        return ie.indexOf(g) > -1;
      } else {
        return g === this.blockItem.action.route || g.startsWith(this.blockItem.action.route + "/");
      }
    }
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.setActif();
      }
    }
    setActif() {
      this.menuUserStore.updateSelectedMenu(this.uniqueID);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(t.sBO), t.Y36(b.Xmb), t.Y36(b.VD2), t.Y36(gr.S), t.Y36(dt.Ye), t.Y36(Ef), t.Y36(bs.F0));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-menu-block-item"]],
    inputs: {
      menuBlockItem: "menuBlockItem",
      badgesProfil: "badgesProfil",
      menuBlockUID: "menuBlockUID"
    },
    features: [t.qOj],
    decls: 2,
    vars: 2,
    consts: [[3, "ngBusy"], [4, "ngIf"], [3, "routerLink", "queryParams", "item-actif", "click", 4, "ngIf"], [3, "routerLink", "queryParams", "click"], [1, "item-name"], ["class", "badge alert-danger ed-menu-badge", 4, "ngIf"], [1, "badge", "alert-danger", "ed-menu-badge"], ["class", "connecteur-externe", "edGoToService", "", 3, "target", "href", "needAuth", "queryParams", 4, "ngIf", "ngIfElse"], ["multipleMenus", ""], ["edGoToService", "", 1, "connecteur-externe", 3, "target", "href", "needAuth", "queryParams"], [3, "click"], [1, "fa", 3, "ngClass"], ["class", "external", "edGoToService", "", 3, "target", "href", "needAuth", "queryParams", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["edGoToService", "", 1, "external", 3, "target", "href", "needAuth", "queryParams"], ["aria-hidden", "true", 1, "fa", "fa-external-link"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0);
        t.YNc(1, zp, 3, 2, "ng-container", 1);
        t.qZA();
      }
      if (g & 2) {
        t.Q6J("ngBusy", ie.loader);
        t.xp6(1);
        t.Q6J("ngIf", ie.blockItem);
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, bs.yS, Wa.DC, pp.R, Zl.$],
    styles: ["ed-menu-block-item>div{min-height:30px}ed-menu-block-item .ng-busy-default-wrapper{transform:scale(.5)}ed-menu-block-item .ng-busy-default-wrapper>.ng-busy-default-sign>.ng-busy-default-spinner>div{background-color:#fff!important}ed-menu-block-item .ng-busy-backdrop{opacity:0}ed-menu-block-item .fa.fa-chevron-down,ed-menu-block-item .fa.fa-chevron-right,ed-menu-block-item .fa.fa-chevron-up,ed-menu-block-item .fa.fa-external-link{font-size:.5em}ed-menu-block-item a.external{left:70px}ed-menu-block-item a.external span.item-name{left:20px!important;top:25px}ed-menu-block-item a.external i{width:15px}ed-menu-block-item a:not([href]):not([class]),ed-menu-block-item a:not([href]):not([class]):hover{color:#fff}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return H;
})();
function Zy(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 12);
  }
}
function Gy(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 13);
  }
}
function p0(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 14);
  }
  if (H & 2) {
    const g = t.oxw();
    t.Udp("background-image", "url(" + g.authStore.currentUser.profile.photo + ")");
  }
}
function ey(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 18)(1, "span", 19);
    t._uU(2);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(2);
    t.Oqu(g.badges.calculTotalBadgesUser(g.menuBlock.id, g.menuBlock.type));
  }
}
const fh = function () {
  return [25, "..."];
};
function vp(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 15);
    t.YNc(1, ey, 3, 1, "div", 16);
    t.TgZ(2, "div", 17)(3, "p");
    t._uU(4);
    t.ALo(5, "truncate");
    t.qZA()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.Udp("background-image", "url(" + g.menuBlock.picture + ")");
    t.s9C("title", g.menuBlock.titre);
    t.xp6(1);
    t.Q6J("ngIf", g.menuBlock.type === "famille-eleve" && !g.menuBlock.isOpen && g.badges.calculTotalBadgesUser(g.menuBlock.id, g.menuBlock.type) !== "");
    t.xp6(3);
    t.Oqu(t.xi3(5, 5, g.menuBlock.titre, t.DdM(8, fh)));
  }
}
function g0(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 23)(1, "span", 19);
    t._uU(2);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(2);
    t.Oqu(g.badges.calculTotalBadgesUser(g.menuBlock.id, g.menuBlock.type));
  }
}
function Jg(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 20)(1, "span", 21);
    t._uU(2);
    t.qZA();
    t.YNc(3, g0, 3, 1, "div", 22);
    t.TgZ(4, "div", 17)(5, "p");
    t._uU(6);
    t.ALo(7, "truncate");
    t.qZA()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.s9C("title", g.menuBlock.titre);
    t.xp6(2);
    t.Oqu(g.menuBlock.titre);
    t.xp6(1);
    t.Q6J("ngIf", g.menuBlock.type === "famille-eleve" && !g.menuBlock.isOpen && g.badges.calculTotalBadgesUser(g.menuBlock.id, g.menuBlock.type) !== "");
    t.xp6(3);
    t.Oqu(t.xi3(7, 4, g.menuBlock.titre, t.DdM(7, fh)));
  }
}
function Jm(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 24);
  }
}
function Od(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 25);
    t._UZ(1, "div", 26);
    t.TgZ(2, "span", 27)(3, "span");
    t._uU(4);
    t.ALo(5, "truncate");
    t.qZA()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.s9C("title", g.menuBlock.titre);
    t.xp6(4);
    t.Oqu(t.xi3(5, 2, g.menuBlock.titre, t.DdM(5, fh)));
  }
}
function $g(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 24);
  }
}
function Kp(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li");
    t._UZ(1, "ed-menu-block-item", 28);
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw();
    t.xp6(1);
    t.Q6J("menuBlockItem", g)("badgesProfil", ie.badges[ie.menuBlock.id + "" + ie.menuBlock.type])("menuBlockUID", ie.menuBlock.type + "_" + ie.menuBlock.id);
  }
}
const Ih = function (H, Q, g, ie, $e, Ht, _n) {
  return {
    "ed-menu-parent": H,
    "ed-menu-entreprise": Q,
    "ed-menu-eleve": g,
    "ed-menu-eleve-seul": ie,
    "ed-menu-prof": $e,
    "ed-menu-classe": Ht,
    "ed-menu-prof-eleve": _n
  };
};
const $m = function (H) {
  return {
    active: H
  };
};
const Xg = function (H) {
  return {
    "menu-active": H
  };
};
let zy = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e) {
      super();
      this.authStore = g;
      this.badgesStore = ie;
      this.cd = $e;
      this.menuOpen = new t.vpe();
      this.menuProfilsUser = b.o2q;
      this.badges = new b.WwR();
    }
    ngOnInit() {
      this.badgesStore.select$().pipe((0, Hs.b)(g => {
        this.badges = g;
        this.cd.markForCheck();
      }), (0, gl.R)(this.componentDestroyed$)).subscribe();
    }
    handleClickMenu(g = false) {
      this.menuOpen.emit(this.menuBlock);
      this.menuBlock.isOpen = !!g || !this.menuBlock.isOpen;
    }
    closeMenu() {
      this.menuBlock.isOpen = false;
      this.cd.markForCheck();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(b.et7), t.Y36(t.sBO));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-menu"]],
    inputs: {
      menuBlock: "menuBlock"
    },
    outputs: {
      menuOpen: "menuOpen"
    },
    features: [t.qOj],
    decls: 15,
    vars: 29,
    consts: [[1, "ed-menu", 3, "ngClass"], [1, "ed-menu-image-wrapper", 3, "click"], ["id", "menu-famille", 4, "ngIf"], ["id", "menu-entreprise", 4, "ngIf"], ["class", "profile", 3, "backgroundImage", 4, "ngIf"], ["class", "circular text-center rond-menu-eleve", 3, "title", "backgroundImage", 4, "ngIf"], ["class", "circular rond-menu-eleve no-photo", 3, "title", 4, "ngIf"], ["class", "circular", 4, "ngIf"], ["class", "circular", 3, "title", 4, "ngIf"], [1, "ed-menu-list-wrapper", 3, "hidden", "ngClass"], ["role", "menu", 1, "dn-ease", "ed-menu-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "menu-famille"], ["id", "menu-entreprise"], [1, "profile"], [1, "circular", "text-center", "rond-menu-eleve", 3, "title"], ["class", "all-badge", 4, "ngIf"], [1, "overlay"], [1, "all-badge"], [1, "badge", "alert-danger", "ed-menu-badge"], [1, "circular", "rond-menu-eleve", "no-photo", 3, "title"], [1, "prenom-placeholder", "prenom-eleve"], ["class", "float-end all-badge", 4, "ngIf"], [1, "float-end", "all-badge"], [1, "circular"], [1, "circular", 3, "title"], [1, "picto-classe-groupe"], [1, "libelle"], [3, "menuBlockItem", "badgesProfil", "menuBlockUID"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div")(1, "div", 0)(2, "a", 1);
        t.NdJ("click", function () {
          return ie.handleClickMenu(false);
        });
        t.YNc(3, Zy, 1, 0, "div", 2);
        t.YNc(4, Gy, 1, 0, "div", 3);
        t.YNc(5, p0, 1, 2, "div", 4);
        t.YNc(6, vp, 6, 9, "div", 5);
        t.YNc(7, Jg, 8, 8, "div", 6);
        t.YNc(8, Jm, 1, 0, "div", 7);
        t.YNc(9, Od, 6, 6, "div", 8);
        t.YNc(10, $g, 1, 0, "div", 7);
        t.qZA();
        t.TgZ(11, "div", 9)(12, "ul", 10);
        t.YNc(13, Kp, 2, 3, "li", 11);
        t.ALo(14, "trackByProperty");
        t.qZA()()()();
      }
      if (g & 2) {
        t.Tol(t.Hh0(17, Ih, ie.menuBlock.type === ie.menuProfilsUser[1] || ie.menuBlock.type === ie.menuProfilsUser[2] || ie.menuBlock.type === ie.menuProfilsUser.T, ie.menuBlock.type === ie.menuProfilsUser.T, ie.menuBlock.type === ie.menuProfilsUser.FE || ie.menuBlock.type === ie.menuProfilsUser.TE, ie.menuBlock.type === ie.menuProfilsUser.E, ie.menuBlock.type === ie.menuProfilsUser.P || ie.menuBlock.type === ie.menuProfilsUser.A, ie.menuBlock.type === ie.menuProfilsUser.C || ie.menuBlock.type === ie.menuProfilsUser.G, ie.menuBlock.type === ie.menuProfilsUser.PE || ie.menuBlock.type === ie.menuProfilsUser.AE));
        t.xp6(1);
        t.Q6J("ngClass", t.VKq(25, $m, ie.menuBlock.isOpen));
        t.xp6(2);
        t.Q6J("ngIf", ie.menuBlock.type === ie.menuProfilsUser[1] || ie.menuBlock.type === ie.menuProfilsUser[2]);
        t.xp6(1);
        t.Q6J("ngIf", ie.menuBlock.type === ie.menuProfilsUser.T);
        t.xp6(1);
        t.Q6J("ngIf", ie.menuBlock.type === ie.menuProfilsUser.E && ie.authStore.currentUser.profile.photo !== "");
        t.xp6(1);
        t.Q6J("ngIf", (ie.menuBlock.type === "famille-eleve" || ie.menuBlock.type === "personnel-eleve" || ie.menuBlock.type === "prof-eleve" || ie.menuBlock.type === "entreprise-eleve") && ie.menuBlock.picture !== "");
        t.xp6(1);
        t.Q6J("ngIf", (ie.menuBlock.type === "famille-eleve" || ie.menuBlock.type === "personnel-eleve" || ie.menuBlock.type === "prof-eleve" || ie.menuBlock.type === "entreprise-eleve") && ie.menuBlock.picture === "");
        t.xp6(1);
        t.Q6J("ngIf", ie.menuBlock.type === ie.menuProfilsUser.A);
        t.xp6(1);
        t.Q6J("ngIf", ie.menuBlock.type === "classe" || ie.menuBlock.type === "groupe");
        t.xp6(1);
        t.Q6J("ngIf", ie.menuBlock.type === ie.menuProfilsUser.P);
        t.xp6(1);
        t.Q6J("hidden", !ie.menuBlock.isOpen)("ngClass", t.VKq(27, Xg, ie.menuBlock.isOpen));
        t.xp6(2);
        t.Q6J("ngForOf", ie.menuBlock.items)("ngForTrackBy", t.lcZ(14, 15, "$index"));
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, Ph, b.W70, Zl.$],
    styles: [".menu-bar{text-align:center}.ed-menu{margin:0 -50px;min-height:100px;border-bottom:5px solid var(--light-placeholder-color);border-radius:0 0 200px 200px;background:linear-gradient(to bottom,var(--dark-primary-color),var(--light-primary-color));box-shadow:0 2px 5px #0000004d;overflow:hidden;transition:all .5s}.ed-menu .profile{background:no-repeat center center/100% white}.ed-menu .rond-menu-eleve:not(.no-photo){background:no-repeat center center #f3f5f8}.ed-menu .rond-menu-eleve.no-photo{background-color:#fff}.ed-menu .rond-menu-eleve.no-photo .overlay{color:var(--dark-primary-color);opacity:1;background-color:#fff}.ed-menu:not(.active) .ed-menu-image-wrapper>div:before{content:\"+\";position:absolute;top:80%;left:80%;z-index:2;transform:translate(-50%);width:50px;height:40px;background:var(--light-placeholder-color);border-radius:100%;font-size:19px;font-weight:700;line-height:.9}.ed-menu-prof{display:block;position:relative;z-index:100}.ed-menu-prof .ed-menu:not(.active){margin-top:-80px;background:none}.ed-menu-prof .ed-menu:not(.active) .ed-menu-image-wrapper>div:after{content:\"\";position:absolute;top:70%;right:0;left:0;width:100%;height:50px;background:var(--dark-primary-color)}.ed-menu-prof .active .ed-menu-image-wrapper{display:none}.ed-menu-parent{display:block;position:relative;z-index:100}.ed-menu-parent .ed-menu:not(.active){margin-top:-80px;background:none}.ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after{content:\"\";position:absolute;top:70%;right:0;left:0;width:100%;height:50px;background:var(--dark-primary-color)}.ed-menu-parent .active .ed-menu-image-wrapper{display:none}.ed-menu-classe{position:relative;z-index:20;display:block;margin-top:-15px}.ed-menu-classe .ed-menu-image-wrapper>div>div.picto-classe-groupe{min-height:100px;background-image:url(classroom.3bdcf85287881e66.png);background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-color:#fff}.ed-menu-classe .ed-menu-image-wrapper>div>span{background:white;width:100%;display:block;height:55px;margin-top:-30px;color:var(--dark-primary-color)}.ed-menu-classe .ed-menu-image-wrapper>div span.libelle:first-letter{text-transform:uppercase}.ed-menu-classe .ed-menu.active .ed-menu-image-wrapper>div>div.picto-classe-groupe{background-color:#0d66ab;background-image:url(classroom-white.43edb19a9225ba64.png)}.ed-menu-classe .ed-menu.active .ed-menu-image-wrapper>div>span{color:#fff;background:#0e589e;width:100%;display:block;margin-top:-23px;opacity:.9}.ed-menu-classe .ed-menu.active .ed-menu-image-wrapper>div span.libelle span{font-weight:700}.ed-menu-classe a:hover{text-decoration:none}.ed-menu-classe .active .ed-menu-image-wrapper>div:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;display:flex;background:linear-gradient(rgba(13,79,147,0),rgb(13,79,147));opacity:.9;text-align:center;color:#fff}.ed-menu-eleve{position:relative;z-index:20;display:block;margin-top:-15px}.ed-menu-eleve .active .ed-menu-image-wrapper{position:relative}.ed-menu-prof-eleve{position:relative;z-index:19;display:block;margin-top:-15px}.ed-menu-eleve-seul .active .ed-menu-image-wrapper{position:relative}.ed-menu-eleve-seul .active .ed-menu-image-wrapper div:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(rgba(13,79,147,0),rgb(13,79,147))}.ed-menu-image-wrapper>div{position:relative;margin:0 50px;min-height:100px}.rond-menu-eleve{background-size:110px auto!important}.overlay{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;background:rgba(13,79,147,.5);text-align:center;color:#fff;opacity:0;transition:all .5s}.overlay:hover{opacity:1}.overlay p{margin:30px auto}.active .overlay{background:linear-gradient(rgba(13,79,147,0),rgb(13,79,147));opacity:1}.ed-menu.active .rond-menu-eleve.no-photo .overlay{color:#fff;font-weight:700}.ed-menu-list-wrapper{margin:0 50px 20px}.ed-menu-list-wrapper li{position:relative;padding:3px 0;text-align:left}.ed-menu-list-wrapper li a.item-actif{background-color:#fff;color:var(--dark-primary-color);margin-left:10px;border-radius:10px 0 0 10px}.ed-menu-list-wrapper li a.item-actif i{opacity:1;width:90px}.ed-menu-list-wrapper li a.item-actif .ed-menu-badge{left:50px}.ed-menu-list-wrapper li a{position:relative;display:inline-block;width:100%;color:#fff;font-size:30px}.ed-menu-list-wrapper li a:hover{text-decoration:none}.ed-menu-list-wrapper li a:hover i{opacity:1}.ed-menu-list-wrapper li a:hover:before{content:\"\";position:absolute;top:10px;right:0;bottom:5px;width:5px;background:#fff}.ed-menu-list-wrapper li a:focus{text-decoration:none}.ed-menu-list-wrapper li a:focus i{opacity:1}.ed-menu-list-wrapper li a i{display:inline-block;width:110px;text-align:center;opacity:.9;transition:all .5s}.ed-menu-list-wrapper li a span.item-name{position:absolute;top:50%;left:150px;transform:translateY(-50%);width:100px;font-size:.4em;opacity:0;transition:all .5s;cursor:pointer}.ed-menu-list-wrapper li a i[class*=fa-chevron]{width:10px;position:absolute;right:-40px;top:11px}.all-badge{position:absolute;bottom:25px;z-index:3}.ed-menu-badge{position:absolute;top:0;left:60px;padding:5px;background:var(--secondary-color);color:#fff;font-size:11px;transition:all .5s}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return H;
})();
function m0(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "ed-menu", 4);
    t.NdJ("menuOpen", function ($e) {
      t.CHM(g);
      const Ht = t.oxw(2);
      return t.KtG(Ht.onMenuOpen($e));
    });
    t.qZA();
  }
  if (H & 2) {
    t.Q6J("menuBlock", Q.$implicit);
  }
}
const qg = function () {
  return ["id", "type"];
};
function Rh(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 1)(1, "strong", 2);
    t._uU(2);
    t.qZA();
    t.YNc(3, m0, 1, 1, "ed-menu", 3);
    t.ALo(4, "trackByProperty");
    t.qZA();
  }
  if (H & 2) {
    const g = Q.ngIf;
    t.xp6(2);
    t.Oqu(g.header.espace);
    t.xp6(1);
    t.Q6J("ngForOf", g.entries)("ngForTrackBy", t.lcZ(4, 3, t.DdM(5, qg)));
  }
}
let Xm = (() => {
  class H extends (0, b.kCV)() {
    constructor(g) {
      super();
      this.menuStore = g;
    }
    ngOnInit() {
      this.menu$ = this.menuStore.select$().pipe((0, cs.U)(g => new b.XmW(g)));
    }
    onMenuOpen(g) {
      this.menus.forEach(ie => {
        if (ie.menuBlock.id !== g.id || ie.menuBlock.type !== g.type) {
          ie.closeMenu();
        }
      });
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.wbX));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-menu-container"]],
    viewQuery: function (g, ie) {
      if (g & 1) {
        t.Gf(zy, 5);
      }
      if (g & 2) {
        let $e;
        if (t.iGM($e = t.CRH())) {
          ie.menus = $e;
        }
      }
    },
    features: [t.qOj],
    decls: 2,
    vars: 3,
    consts: [["id", "container-menu", 4, "ngIf"], ["id", "container-menu"], [1, "ed-espace-title"], [3, "menuBlock", "menuOpen", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "menuBlock", "menuOpen"]],
    template: function (g, ie) {
      if (g & 1) {
        t.YNc(0, Rh, 5, 6, "div", 0);
        t.ALo(1, "async");
      }
      if (g & 2) {
        t.Q6J("ngIf", t.lcZ(1, 1, ie.menu$));
      }
    },
    dependencies: [dt.sg, dt.O5, zy, dt.Ov, Zl.$],
    styles: ["#container-menu{position:absolute;top:0;z-index:3000;width:110px;min-height:100%;background:linear-gradient(var(--dark-primary-color) 0%,var(--light-primary-color) 100%);overflow:hidden;text-align:center;transition:all .5s}#container-menu a.external{display:none}#container-menu:hover{width:220px;box-shadow:0 0 10px #000c}#container-menu:hover a.external{display:block}#container-menu:hover .ed-menu{border-radius:0 0 105px 105px}#container-menu:hover .ed-menu-list-wrapper li a span.item-name{left:90px;opacity:1}#container-menu:hover .ed-menu-list-wrapper li a i[class*=fa-chevron]{opacity:1;right:15px}#container-menu:hover .ed-menu-list-wrapper li a.item-actif span.item-name,#container-menu:hover .ed-menu-list-wrapper li a.item-actif i[class*=fa-chevron],#container-menu:hover .ed-menu-list-wrapper li a:hover span.item-name,#container-menu:hover .ed-menu-list-wrapper li a:hover i[class*=fa-chevron]{opacity:1}#container-menu:hover .ed-menu-list-wrapper li a:focus span.item-name{opacity:1}#container-menu:hover .ed-menu-list-wrapper li a:focus i[class*=fa-chevron]{opacity:1}#container-menu:hover .all-badge .ed-menu-badge{left:135px}#container-menu ed-menu:nth-child(1) .ed-menu-eleve{z-index:20}#container-menu ed-menu:nth-child(2) .ed-menu-eleve{z-index:19}#container-menu ed-menu:nth-child(3) .ed-menu-eleve{z-index:18}#container-menu ed-menu:nth-child(4) .ed-menu-eleve{z-index:17}#container-menu ed-menu:nth-child(5) .ed-menu-eleve{z-index:16}#container-menu ed-menu:nth-child(6) .ed-menu-eleve{z-index:15}#container-menu ed-menu:nth-child(7) .ed-menu-eleve{z-index:14}#container-menu ed-menu:nth-child(8) .ed-menu-eleve{z-index:13}#container-menu ed-menu:nth-child(9) .ed-menu-eleve{z-index:12}#container-menu ed-menu:nth-child(10) .ed-menu-eleve{z-index:11}#container-menu ed-menu:nth-child(11) .ed-menu-eleve{z-index:10}#container-menu ed-menu:nth-child(12) .ed-menu-eleve{z-index:9}#container-menu ed-menu:nth-child(13) .ed-menu-eleve{z-index:8}#container-menu ed-menu:nth-child(14) .ed-menu-eleve{z-index:7}#container-menu ed-menu:nth-child(15) .ed-menu-eleve{z-index:6}#container-menu ed-menu:nth-child(16) .ed-menu-eleve{z-index:5}#container-menu ed-menu:nth-child(17) .ed-menu-eleve{z-index:4}#container-menu ed-menu:nth-child(18) .ed-menu-eleve{z-index:3}#container-menu ed-menu:nth-child(19) .ed-menu-eleve{z-index:2}#container-menu ed-menu:nth-child(20) .ed-menu-eleve{z-index:1}#container-menu .ed-espace-title{position:relative;z-index:99;display:block;margin:13px auto;max-width:110px;color:#fff;text-transform:uppercase;font-size:14px;line-height:1}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return H;
})();
function em(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 16);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(3);
      return t.KtG($e.switchProfil());
    });
    t._UZ(1, "i", 17);
    t.TgZ(2, "strong", 18);
    t._uU(3);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.Q6J("ngClass", g.profilsCSS.text);
    t.xp6(3);
    t.hij("", g.authStore.isPersonnel() ? "Personnel" : "Enseignant", " : Changer de profil");
  }
}
function hh(H, Q) {
  if (H & 1) {
    t.TgZ(0, "button", 19);
    t._UZ(1, "i", 17);
    t.TgZ(2, "strong", 18);
    t._uU(3);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.Q6J("ngClass", g.profilsCSS.text);
    t.xp6(3);
    t.hij("", g.authStore.isPersonnel() ? "Personnel" : "Enseignant", " : Changer de profil");
  }
}
function ev(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li", 11);
    t.YNc(1, em, 4, 2, "button", 14);
    t.YNc(2, hh, 4, 2, "button", 15);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngIf", !g.authStore.isModeSupervision() && !g.authStore.isEphemere());
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.isModeSupervision() || g.authStore.isEphemere());
  }
}
function ph(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 23);
    t._UZ(1, "i", 24);
    t.TgZ(2, "span", 18);
    t._uU(3, "Votre panier");
    t.qZA();
    t.TgZ(4, "span", 25);
    t._uU(5);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2).ngIf;
    t.xp6(5);
    t.Oqu(g.listePaiementPanier.length);
  }
}
function v0(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 23);
    t._UZ(1, "i", 24);
    t.TgZ(2, "span", 18);
    t._uU(3, "Votre panier");
    t.qZA();
    t.TgZ(4, "span", 25);
    t._uU(5);
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2).ngIf;
    t.xp6(5);
    t.Oqu(g.listePaiementPanier.length);
  }
}
function Fh(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li", 21);
    t.YNc(1, ph, 6, 1, "a", 22);
    t.YNc(2, v0, 6, 1, "a", 22);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(3);
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.isProfOuPersonnel());
    t.xp6(1);
    t.Q6J("ngIf", g.authStore.isFamille());
  }
}
function ty(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t.YNc(1, Fh, 3, 2, "li", 20);
    t.BQk();
  }
  if (H & 2) {
    const g = Q.ngIf;
    t.xp6(1);
    t.Q6J("ngIf", g.listePaiementPanier.length > 0);
  }
}
function tv(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "li", 11)(1, "button", 16);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw(2);
      return t.KtG($e.accountSelector());
    });
    t._UZ(2, "i", 26);
    t._uU(3, " Changer de compte ");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.Q6J("ngClass", g.profilsCSS.text);
  }
}
const gh = function (H) {
  return {
    "bg-transparent": H
  };
};
const jp = function (H) {
  return {
    invisible: H
  };
};
function mh(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 1)(1, "nav", 2)(2, "div", 3)(3, "strong", 4);
    t._uU(4);
    t.qZA();
    t.TgZ(5, "ul", 5);
    t.YNc(6, ev, 3, 2, "li", 6);
    t.YNc(7, ty, 2, 1, "ng-container", 7);
    t.ALo(8, "async");
    t.TgZ(9, "li", 8)(10, "a", 9);
    t._UZ(11, "i", 10);
    t._uU(12);
    t.ALo(13, "displayNom");
    t.qZA()();
    t.YNc(14, tv, 4, 1, "li", 6);
    t.ALo(15, "async");
    t.TgZ(16, "li", 11)(17, "button", 12);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw();
      return t.KtG($e.accountService.logout());
    });
    t._UZ(18, "i", 13);
    t.qZA()()()()()();
  }
  if (H & 2) {
    const g = Q.ngIf;
    const ie = t.oxw();
    let $e;
    t.xp6(1);
    t.Q6J("ngClass", t.VKq(17, gh, ie.isHome));
    t.xp6(2);
    t.Q6J("ngClass", t.VKq(19, jp, ie.isHome));
    t.xp6(1);
    t.Oqu(g.nomEtablissement);
    t.xp6(2);
    t.Q6J("ngIf", ie.authStore.isProfEtPersonnel() && !ie.authStore.currentUser.isLoggedInFromOAuth);
    t.xp6(1);
    t.Q6J("ngIf", t.lcZ(8, 11, ie.panier$));
    t.xp6(3);
    t.Q6J("ngClass", ie.profilsCSS.text)("title", ie.getTooltipInfosConnexion());
    t.xp6(1);
    t.Tol(ie.profilsCSS.icon);
    t.xp6(1);
    t.hij(" ", t.lcZ(13, 13, g), " ");
    t.xp6(2);
    t.Q6J("ngIf", !ie.authStore.currentUser.isLoggedInFromOAuth && (($e = t.lcZ(15, 15, ie.authStore.linkingUsers$)) == null ? null : $e.length) > 0);
  }
}
let Qp = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n) {
      super();
      this.authStore = g;
      this.paiementStore = ie;
      this.accountService = $e;
      this.modalService = Ht;
      this.document = _n;
      this.profilsCSS = {
        icon: "",
        text: ""
      };
    }
    get lastConnexion() {
      if (!Object.isExists(this.authStore.currentUser.lastConnexion)) {
        return "";
      }
      let g = this.authStore.currentUser.lastConnexion.split(" ");
      return g[0].split("-").reverse().join("-") + " " + g[1];
    }
    ngOnInit() {
      this.switchCSS();
      this.panier$ = this.paiementStore.selectPanier(this.authStore.variantForCurrentUser);
    }
    switchProfil() {
      if (this.authStore.currentUser.isLoggedInFromOAuth) {
        return;
      }
      const g = {
        id: this.modalService.getModalsCount() + 1
      };
      this.modalService.show(qm.c, g);
      this.modalService.onHide.pipe((0, Io.q)(1), (0, Hs.b)(ie => this.switchCSS())).subscribe();
    }
    accountSelector() {
      if (this.authStore.currentUser.isLoggedInFromOAuth) {
        return;
      }
      const g = {
        id: this.modalService.getModalsCount() + 1
      };
      this.modalService.show(yp._, g);
      this.modalService.onHide.pipe((0, Io.q)(1), (0, Hs.b)(ie => this.switchCSS())).subscribe();
    }
    switchCSS() {
      if (this.authStore.currentUser.isModeAccessibiliteVisuelle) {
        this.document.body.classList.add("visuel-malvoyant");
      } else if (this.document.body.classList.contains("visuel-malvoyant")) {
        this.document.body.classList.remove("visuel-malvoyant");
      }
      const g = b.FSr.getIconTypePersonne(this.authStore.currentUser?.typeCompte);
      this.profilsCSS = {
        icon: `icon-ed_${g}`,
        text: `text-${g}`
      };
    }
    getTooltipInfosConnexion() {
      return `Date de derni\xe8re connexion :  le ${this.lastConnexion}`;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(b.dwh), t.Y36(Yo.B), t.Y36(tl.tT), t.Y36(dt.K0));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-header"]],
    inputs: {
      isHome: "isHome"
    },
    features: [t.qOj],
    decls: 2,
    vars: 3,
    consts: [["class", "d-print-none", "id", "header-commun", 4, "ngIf"], ["id", "header-commun", 1, "d-print-none"], [1, "navbar", "navbar-expand-lg", "navbar-light", "double-padding", 3, "ngClass"], [1, "container-fluid"], [3, "ngClass"], [1, "navbar-nav", "ms-auto"], ["class", "nav-item", 4, "ngIf"], [4, "ngIf"], ["id", "item-compteUtilisateur", 1, "nav-item"], ["role", "button", "id", "user-account-link", "routerLink", "/utilisateur", 1, "nav-link", 3, "ngClass", "title"], ["aria-hidden", "true"], [1, "nav-item"], ["type", "button", "title", "Déconnexion", "aria-label", "Se déconnecter", 1, "nav-link", "btn", "border", "border-0", "logout", 3, "click"], ["aria-hidden", "true", 1, "icon-ed_deconnexion"], ["class", "nav-link btn border border-0", "type", "button", 3, "ngClass", "click", 4, "ngIf"], ["class", "nav-link btn border border-0", "title", "Non disponible en mode supervision", "type", "button", 3, "ngClass", 4, "ngIf"], ["type", "button", 1, "nav-link", "btn", "border", "border-0", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-external-link", "header-link"], [1, "margin-whitespace"], ["title", "Non disponible en mode supervision", "type", "button", 1, "nav-link", "btn", "border", "border-0", 3, "ngClass"], ["class", "nav-item animation-header", 4, "ngIf"], [1, "nav-item", "animation-header"], ["role", "button", "class", "nav-link btn btn-danger", "routerLink", "/Paiements", 4, "ngIf"], ["role", "button", "routerLink", "/Paiements", 1, "nav-link", "btn", "btn-danger"], ["aria-hidden", "true", 1, "icon-ed_panier"], [1, "badge-panier"], ["aria-hidden", "true", 1, "icon-ed_change"]],
    template: function (g, ie) {
      if (g & 1) {
        t.YNc(0, mh, 19, 21, "div", 0);
        t.ALo(1, "async");
      }
      if (g & 2) {
        t.Q6J("ngIf", t.lcZ(1, 1, ie.authStore.currentUser$));
      }
    },
    dependencies: [dt.mk, dt.O5, bs.yS, dt.Ov, b.$t3],
    styles: ["#header-commun[_ngcontent-%COMP%]   [class^=icon-][_ngcontent-%COMP%]{font-size:19px;line-height:.8;vertical-align:bottom}#header-commun[_ngcontent-%COMP%]   .header-link[_ngcontent-%COMP%]{font-size:19px;vertical-align:bottom}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:0;background:linear-gradient(var(--dark-primary-color) 0%,#0e488e 100%);border-radius:0;min-height:30px;color:#fff}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:5px 0}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]:before{display:none}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]:after{display:none}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 0 5px}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:2px 8px 5px;background:#fff;border-radius:50px;box-shadow:0 0 5px #0003;color:var(--light-primary-color);font-weight:700;font-size:11px;line-height:1.5}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logout[_ngcontent-%COMP%], #header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%]{background:var(--secondary-color);color:#fff;text-align:center}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li.animation-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li.animation-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:relative;padding:2px 28px 2px 8px;display:inline-flex;vertical-align:middle;background:#fff;border-radius:50px;box-shadow:0 0 5px #0003;color:var(--secondary-color);font-weight:700;font-size:11px;line-height:1;overflow:hidden}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li.animation-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge-panier[_ngcontent-%COMP%], #header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li.animation-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .badge-panier[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;width:20px;background:var(--secondary-color);color:#fff;text-align:center;line-height:2}#header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li.animation-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #header-commun[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   li.animation-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto}.page-accueil[_nghost-%COMP%]   #header-commun[_ngcontent-%COMP%], .page-accueil   [_nghost-%COMP%]   #header-commun[_ngcontent-%COMP%]{background:linear-gradient(var(--dark-primary-color) 0%,#0e488e 100%);color:#fff}.page-accueil[_nghost-%COMP%]   #header-commun[_ngcontent-%COMP%]   .navbar.double-padding[_ngcontent-%COMP%], .page-accueil   [_nghost-%COMP%]   #header-commun[_ngcontent-%COMP%]   .navbar.double-padding[_ngcontent-%COMP%]{background:none}"]
  });
  return H;
})();
function Jp(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li", 10)(1, "a", 11)(2, "span");
    t._uU(3, "Contact");
    t.qZA()()();
  }
}
function ny(H, Q) {
  if (H & 1) {
    t.TgZ(0, "li", 12)(1, "a", 11)(2, "span");
    t._uU(3, "Contact");
    t.qZA()()();
  }
}
function y0(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 13);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw();
      return t.KtG($e.scrollToTop());
    });
    t._UZ(1, "span", 14);
    t.qZA();
  }
}
let nv = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
      this.showScroll = false;
    }
    ngOnInit() {
      this.showScroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 0;
    }
    onWindowScroll() {
      this.showScroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 0;
    }
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-footer"]],
    hostBindings: function (g, ie) {
      if (g & 1) {
        t.NdJ("scroll", function () {
          return ie.onWindowScroll();
        }, false, t.Jf7);
      }
    },
    decls: 12,
    vars: 3,
    consts: [[1, "d-print-none"], ["id", "footer", 1, "double-padding"], [1, "list-inline"], [1, "list-inline-item", "hidden-xs", "hidden-sm"], ["href", "", "routerLink", "/about"], ["class", "list-inline-item hidden-xs", "id", "item-contact-famille-eleve", 4, "ngIf"], ["class", "list-inline-item hidden-xs", "id", "item-contact-prof-personnel", 4, "ngIf"], [1, "list-inline-item"], ["href", "", "routerLink", "/Aides"], ["id", "menu-retour-haut", "title", "Remonter en haut de la page", "type", "button", "class", "btn btn-primary btn-lg back-to-top", 3, "click", 4, "ngIf"], ["id", "item-contact-famille-eleve", 1, "list-inline-item", "hidden-xs"], ["href", "", "routerLink", "/contactEtablissement", 1, "envelope-size"], ["id", "item-contact-prof-personnel", 1, "list-inline-item", "hidden-xs"], ["id", "menu-retour-haut", "title", "Remonter en haut de la page", "type", "button", 1, "btn", "btn-primary", "btn-lg", "back-to-top", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-up"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
        t._uU(5, "Mentions légales");
        t.qZA()();
        t.YNc(6, Jp, 4, 0, "li", 5);
        t.YNc(7, ny, 4, 0, "li", 6);
        t.TgZ(8, "li", 7)(9, "a", 8);
        t._uU(10, "Aide");
        t.qZA()()()();
        t.YNc(11, y0, 2, 0, "button", 9);
        t.qZA();
      }
      if (g & 2) {
        t.xp6(6);
        t.Q6J("ngIf", !ie.authStore.isPersonnel() && !ie.authStore.isProfesseur());
        t.xp6(1);
        t.Q6J("ngIf", ie.authStore.isPersonnel() || ie.authStore.isProfesseur());
        t.xp6(4);
        t.Q6J("ngIf", ie.showScroll);
      }
    },
    dependencies: [dt.O5, bs.yS],
    styles: ["#footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{text-align:right}#footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;margin:15px 0;padding:5px;background:#e2e7ed;border-radius:3px}#menu-retour-haut[_ngcontent-%COMP%]{position:fixed;bottom:45px;right:15px;z-index:10}#menu-retour-haut[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}"]
  });
  return H;
})();
const iy = function (H) {
  return {
    "page-accueil": H
  };
};
let iv = (() => {
  class H {
    constructor(g) {
      this.router = g;
    }
    isHomePage() {
      const g = this.router.url;
      const ie = g.split("/")[2];
      const Ht = ["/(auxiliaryModal:", "/Famille(auxiliaryModal:", "/Enseignant(auxiliaryModal:", "/Entreprise(auxiliaryModal:", "/Personnel(auxiliaryModal:", `/Eleves/${ie}(auxiliaryModal:`];
      return ["/", "/Famille", "/Enseignant", "/Entreprise", "/Personnel", `/Eleves/${ie}`].some(_n => g === _n) || Ht.some(_n => g.startsWith(_n));
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(bs.F0));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-authenticated-layout"]],
    decls: 9,
    vars: 4,
    consts: [["id", "menu-part", 1, "d-print-none"], ["id", "main-part", 3, "ngClass"], ["id", "header"], [3, "isHome"], ["id", "main"], ["id", "footer"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0);
        t._UZ(1, "ed-menu-container");
        t.qZA();
        t.TgZ(2, "div", 1)(3, "div", 2);
        t._UZ(4, "ed-header", 3);
        t.qZA();
        t.TgZ(5, "div", 4);
        t._UZ(6, "router-outlet");
        t.qZA();
        t.TgZ(7, "div", 5);
        t._UZ(8, "ed-footer");
        t.qZA()();
      }
      if (g & 2) {
        t.xp6(2);
        t.Q6J("ngClass", t.VKq(2, iy, ie.isHomePage()));
        t.xp6(2);
        t.Q6J("isHome", ie.isHomePage());
      }
    },
    dependencies: [dt.mk, bs.lC, Xm, Qp, nv],
    styles: ["#menu-part[_ngcontent-%COMP%] + #main-part[_ngcontent-%COMP%]{margin-left:110px;width:calc(100vw - 110px);overflow-x:hidden}#main-part[_ngcontent-%COMP%]{flex:1;min-height:100vh}#main-part.page-accueil[_ngcontent-%COMP%]{position:relative}"]
  });
  return H;
})();
import * as rv from "34813";
let ry = (() => {
  class H {
    constructor(g) {
      this.modalRef = g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(tl.UZ));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-modal-aide-connexion"]],
    decls: 19,
    vars: 0,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body"], ["href", "https://api.ecoledirecte.com/mot-de-passe-oublie.awp"], [1, "modal-footer"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "h3", 1);
        t._uU(2, "Des difficultés pour vous connecter ?");
        t.qZA();
        t.TgZ(3, "button", 2);
        t.NdJ("click", function () {
          return ie.modalRef.hide();
        });
        t.qZA()();
        t.TgZ(4, "div", 3)(5, "h4");
        t._uU(6, "Si vous avez déjà personnalisé votre compte d'accès");
        t.qZA();
        t._uU(7, " Vous pouvez utiliser le lien ");
        t.TgZ(8, "a", 4);
        t._uU(9, "'mot de passe oublié'");
        t.qZA();
        t._uU(10, " en indiquant l'email ou le numéro de téléphone que vous avez fourni lors de la création de votre compte. ");
        t._UZ(11, "br");
        t._uU(12, " Si cette procédure échoue, vous devez contacter directement votre établissement afin qu'il réinitialise votre compte d'accès. ");
        t.TgZ(13, "h4");
        t._uU(14, "Si vous n'avez jamais personnalisé votre compte d'accès");
        t.qZA();
        t._uU(15, " Dans ce cas, le lien 'mot de passe oublié' ne fonctionnera pas. ");
        t._UZ(16, "br");
        t._uU(17, " Vous devez utiliser votre code de première connexion fourni par votre établissement.\n");
        t.qZA();
        t._UZ(18, "div", 5);
      }
    }
  });
  return H;
})();
function Wf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 5);
    t._uU(1, "Retour à l'accueil du site");
    t.qZA();
  }
}
let sv = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-about"]],
    decls: 33,
    vars: 1,
    consts: [[1, "double-padding"], [1, "container-bg", "double-padding", 2, "padding-top", "40px"], ["href", "https://luciole-vision.com/", "title", "Lien vers le site Luciole", "target", "_blank", 1, "text-primary"], ["href", "https://creativecommons.org/licenses/by/4.0/legalcode.fr", "title", "Lien vers le site Creative Commons", "target", "_blank", 1, "text-primary"], ["href", "", "routerLink", "/", "class", "btn btn-primary margin-bottom", 4, "ngIf"], ["href", "", "routerLink", "/", 1, "btn", "btn-primary", "margin-bottom"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "h2");
        t._uU(2, "Dispositions générales applicables au site EcoleDirecte");
        t.qZA();
        t.TgZ(3, "div", 1)(4, "p");
        t._uU(5, " Les données personnelles sécurisées figurant sur ce site Internet concernent des élèves et les familles, et sont fournies par le logiciel Charlemagne des établissements scolaires au sein desquels ceux-ci sont scolarisés. ");
        t.qZA();
        t.TgZ(6, "p");
        t._uU(7, " EcoleDirecte ne collecte aucune donnée personnelle directement sur le site Internet, ni cookie, à l’exception des email et téléphone mobile, utilisés EXCLUSIVEMENT pour la récupération des identifiants. ");
        t.qZA();
        t.TgZ(8, "p");
        t._uU(9, " Ces établissements scolaires se sont engagés à apporter tous leurs soins dans la qualité des informations diffusées. Il s’agit toutefois d’indications qui, en aucun cas, ne pourraient faire foi en lieu et place des documents usuels (bulletins de notes, relevés de notes, relevés d’absences et de sanctions). ");
        t.qZA();
        t.TgZ(10, "p");
        t._uU(11, " Ces informations ne sont disponibles qu’après saisie d’un mot de passe fourni exclusivement par l’établissement soit au responsable juridique de l’élève s’il est mineur, soit à l’élève lui même s’il est majeur. Le détenteur d’un mot de passe ne peut accéder qu’aux seules informations le concernant lui ou les personnes dont il est responsable juridiquement. ");
        t.qZA();
        t.TgZ(12, "p");
        t._uU(13, " Pour optimiser la confidentialité de vos consultations, nous vous conseillons de choisir un mot de passe sécurisé. Le site internet et ses données associées sont hébergés sur des serveurs situés sur le territoire français. ");
        t.qZA();
        t.TgZ(14, "p");
        t._uU(15, " La société APLIM, hébergeur du site, s’engage dans tous les cas à ne pas utiliser, louer, vendre, céder ou mettre à disposition d’un tiers à fin d’autres usages le contenu du présent site Internet. ");
        t.qZA();
        t.TgZ(16, "p");
        t._uU(17, " Les données présentes sur ce site pourront être divulguées en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire ou judiciaire compétente ou encore, si cela s'avère nécessaire, aux fins de maintenance, par l'éditeur ou l’établissement scolaire. ");
        t.qZA();
        t.TgZ(18, "p");
        t._uU(19, " Le responsable du traitement de ces données est l’établissement scolaire qui a procédé à leur saisie. Le responsable de leur sécurisation sur notre plateforme EcoleDirecte en qualité de sous-traitant est : Société Aplim ZA Les Côtes 73190 Saint Jeoire Prieuré, rgpd@aplim.fr. ");
        t.qZA();
        t.TgZ(20, "p");
        t._uU(21, " En application des articles 15, 16, 17 et 18 du Règlement du Parlement européen et du Conseil du 27 avril 2016, et de la Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification, d'effacement des données collectées, et d'un droit de limitation du traitement des données personnelles que vous pouvez exercer auprès du responsable du traitement (à savoir l’établissement scolaire responsable du traitement) qui nous répercutera votre demande à fins d’exécution sur le site EcoleDirecte. ");
        t.qZA();
        t.TgZ(22, "p");
        t._uU(23, " En toute hypothèse, il vous est possible d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés si vous vous estimez lésé par le traitement de vos données personnelles par l’établissement scolaire. ");
        t.qZA();
        t.TgZ(24, "p");
        t._uU(25, " L'activation de l'amélioration de l'accessibilité des personnes déficientes visuelles utilise la police de caractères ");
        t.TgZ(26, "a", 2);
        t._uU(27, "Luciole");
        t.qZA();
        t._uU(28, " . Cette police de caractères est distribuée gratuitement sous Licence publique ");
        t.TgZ(29, "a", 3);
        t._uU(30, " Creative Commons Attribution 4.0 International ");
        t.qZA();
        t._uU(31, " : Luciole © Laurent Bourcellier & Jonathan Perez ");
        t.qZA();
        t.YNc(32, Wf, 2, 0, "a", 4);
        t.qZA()();
      }
      if (g & 2) {
        t.xp6(32);
        t.Q6J("ngIf", ie.authStore.isLoggedIn());
      }
    },
    dependencies: [dt.O5, bs.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return H;
})();
import * as Gc from "57701";
function av(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 13);
  }
  if (H & 2) {
    const g = t.oxw();
    t.Q6J("innerHTML", g.errorMessage, t.oJD);
  }
}
function oy(H, Q) {
  if (H & 1) {
    t.TgZ(0, "h2", 14);
    t._uU(1, "Connectez-vous");
    t.qZA();
  }
}
function tm(H, Q) {
  if (H & 1) {
    t.TgZ(0, "a", 15);
    t._uU(1, "Mot de passe oublié ?");
    t.qZA();
  }
}
function ay(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 16)(1, "input", 17);
    t.NdJ("ngModelChange", function ($e) {
      t.CHM(g);
      const Ht = t.oxw();
      return t.KtG(Ht.loginForm.loginStored = $e);
    });
    t.qZA();
    t.TgZ(2, "label", 18);
    t._uU(3, "Se souvenir de moi");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Q6J("ngModel", g.loginForm.loginStored);
  }
}
class _p {
  constructor(Q, g, ie, $e, Ht, _n, Un, ui, Vi, Wr, Cs, Ea, ga) {
    this.authStore = Q;
    this.authService = g;
    this.accountService = ie;
    this.httpAccessFailedService = $e;
    this.router = Ht;
    this.uiService = _n;
    this.modalService = Un;
    this.cd = ui;
    this.loaderService = Vi;
    this.activatedRoute = Wr;
    this.credentialsStore = Cs;
    this.elementRef = Ea;
    this.renderer = ga;
    this.redirEnCours = new t.vpe();
    this.loginError = new t.vpe();
    this.isPasswordVisible = false;
    this.errorMessage = "";
    this._loginFormDefault = {
      username: "",
      password: "",
      loginStored: false
    };
  }
  ngOnInit() {
    this.loginForm = {
      ...this._loginFormDefault
    };
    if (Object.isExists(this.authStore.currentUser)) {
      this.loginForm.username = this.authStore.currentUser.identifiant;
    }
    if (!Object.isExists(this.authStore.currentUser) && b.FSr.isNotEmptyString(this._pseudo)) {
      this.loginForm.username = this._pseudo;
    }
  }
  openModalCreationCompte(Q) {
    const g = {
      loginOrigine: Q.login,
      motPasseOrigine: Q.motDePasse,
      niveauMdp: Q.niveauMdp,
      questionsPossibles: Q.questionsPossibles
    };
    const ie = {
      id: this.modalService.getModalsCount() + 1,
      keyboard: false,
      ignoreBackdropClick: true,
      initialState: {
        utilisateurInfosPassword: g,
        origineAction: b.Mmy.CREATION_SIMPLE
      }
    };
    this.modalService.show(Ky.w, ie);
    this.modalService.onHide.pipe((0, Io.q)(1), (0, As.x)(() => {
      this.loginForm = {
        ...this._loginFormDefault
      };
      this.cd.detectChanges();
    })).subscribe();
  }
  login() {
    this.errorMessage = "";
    this.doLogin({
      identifiant: this.loginForm.username,
      motdepasse: this.loginForm.password,
      isReLogin: false
    });
  }
  doLogin(Q) {
    const g = this.authStore.currentUser ? this.authStore.currentUser.identifiant : "";
    const ie = this.activatedRoute.snapshot.queryParamMap.has("cameFrom") ? this.activatedRoute.snapshot.queryParamMap.get("cameFrom") : "";
    const $e = this.activatedRoute.snapshot.queryParamMap.has("service") ? this.activatedRoute.snapshot.queryParamMap.get("service") : "";
    this.loader = this.loaderService.show(this);
    this.cd.markForCheck();
    this.authService.doLogin(Q).pipe((0, hl.w)(Ht => {
      if (Object.isExists(Ht) && Ht instanceof b.lZ0) {
        this.openModalCreationCompte(Ht);
        return (0, Ui.of)(undefined);
      }
      if (Object.isExists(Ht) && Ht instanceof b.xrB) {
        this.loaderService.hide(this);
        const _n = {
          id: this.modalService.getModalsCount() + 1,
          initialState: {
            title: "Pour continuer merci d'accepter la charte d'utilisation",
            message: Ht.charte,
            btnCancel: "Je n'accepte pas",
            btnConfirm: "J'accepte"
          },
          class: "modal-lg"
        };
        this.modalService.show(Gi.z, _n);
        return this.modalService.onHide.pipe((0, Io.q)(1), (0, Hs.b)(Un => {
          if (Un === ic.G.validation) {
            this.doLogin({
              ...Q,
              acceptationCharte: true
            });
          }
        }));
      }
      if (this.authStore.snapshot.changementMDP && !this.isRelogin) {
        this.loaderService.hide(this);
        const _n = {
          id: this.modalService.getModalsCount() + 1,
          initialState: {
            title: "Votre mot de passe est expiré",
            message: "Pour des raisons de sécurité, merci de mettre à jour votre mot de passe.",
            btnCancel: "Annuler",
            btnConfirm: "Continuer"
          },
          class: "modal-lg"
        };
        this.modalService.show(Gi.z, _n);
        return this.modalService.onHide.pipe((0, Io.q)(1), (0, Hs.b)(Un => {
          if (Un === ic.G.validation) {
            this.router.navigate(["utilisateur/personnalisation"]);
          } else {
            this.accountService.logout();
          }
        }));
      }
      if (ie !== "") {
        this.router.navigate([ie]);
        return (0, Ui.of)(undefined);
      }
      if ($e !== "") {
        Gc.V.goToService(this.credentialsStore.snapshot.authToken, "_self", $e, this.elementRef, this.renderer);
        return (0, Ui.of)(undefined);
      }
      if (this.isRelogin && g === this.loginForm.username) {
        this.loaderService.hide(this);
        const _n = this.modalService.getModalsCount();
        this.modalService.hide(_n > 1 ? _n : null);
        this.httpAccessFailedService.retryFailedRequests();
      } else {
        if (this.isRelogin) {
          this.loaderService.hide(this);
          const _n = this.modalService.getModalsCount();
          this.modalService.hide(_n > 1 ? _n : null);
          this.accountService.logout();
        }
        if (this.loginForm.loginStored) {
          this._pseudo = this.loginForm.username;
        } else {
          this._pseudo = undefined;
          localStorage.removeItem("pseudo");
        }
        this.router.navigate(["/"]);
      }
      return (0, Ui.of)(undefined);
    }), (0, lo.K)(Ht => {
      switch (Ht.status) {
        case 516:
        case 535:
          this.errorMessage = "";
          break;
        case 518:
          this.errorMessage = "<b>Votre fiche utilisateur n'existe pas sur EcoleDirecte</b><br/> Veuillez contacter votre établissement";
          break;
        case 221:
          this.errorMessage = "<b>Identifiant déjà personnalisé</b><br/> L'identifiant et le mot de passe que vous avez saisis ont déjà été personnalisés.\n                  Veuillez vérifier et réessayer <br/>\n                Si le problème persiste, veuillez cliquer sur le lien 'Mot de passe oublié ?'\n                ou contacter votre établissement pour obtenir de nouveaux identifiants";
          break;
        case 517:
          this.errorMessage = Ht.message;
          break;
        default:
          this.errorMessage = "<b>Identifiant ou Mot de passe invalide</b><br/>\n                L'identifiant et le mot de passe que vous avez entrés ne correspondent pas à ceux présents dans nos fichiers.\n                Veuillez vérifier et réessayer <br/> Si le problème persiste, veuillez cliquer sur le lien 'Mot de passe oublié ?'\n                ou contacter votre établissement pour obtenir de nouveaux identifiants";
      }
      this.loginError.emit(Ht);
      return this.uiService.notifyErrorThenEmpty(Ht, true, "Authentification impossible", "fa fa-warning");
    }), (0, As.x)(() => this.loaderService.hide(this))).subscribe();
  }
  showPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
_p.ɵfac = function (Q) {
  return new (Q || _p)(t.Y36(b.CnD), t.Y36(b.e80), t.Y36(Yo.B), t.Y36(b.Lo), t.Y36(bs.F0), t.Y36(b.VLf), t.Y36(tl.tT), t.Y36(t.sBO), t.Y36(gr.S), t.Y36(bs.gz), t.Y36(b.dSF), t.Y36(t.SBq), t.Y36(t.Qsj));
};
_p.ɵcmp = t.Xpm({
  type: _p,
  selectors: [["ed-login-form"]],
  inputs: {
    isRelogin: "isRelogin"
  },
  outputs: {
    redirEnCours: "redirEnCours",
    loginError: "loginError"
  },
  decls: 14,
  vars: 11,
  consts: [["id", "output", "class", "animated fadeInUp alert alert-danger", 3, "innerHTML", 4, "ngIf"], ["id", "bloc-connexion"], ["class", "text-center", 4, "ngIf"], [3, "ngBusy", "ngSubmit"], ["id", "username", "type", "text", "name", "username", "placeholder", "Identifiant", "autocapitalize", "off", 1, "log", "form-control", 3, "ngModel", "disabled", "edAutofocus", "ngModelChange"], ["type", "button", "aria-hidden", "true", "id", "show-password", "tabindex", "-1", 1, "btn", "no-background", "hov-transparent", "btn-secondary", "float-end", 3, "click"], [1, "fa", "fa-eye"], ["id", "password", "name", "password", "placeholder", "Mot de passe", 1, "log", "form-control", 3, "type", "ngModel", "edAutofocus", "ngModelChange"], ["href", "https://api.ecoledirecte.com/mot-de-passe-oublie.awp", "class", "mdp-lost", "tabindex", "-1", 4, "ngIf"], ["class", "form-check text-bold", 4, "ngIf"], [1, "clearfix"], [1, "d-grid", "gap-2"], ["id", "connexion", "type", "submit", 1, "btn", "btn-info", "login"], ["id", "output", 1, "animated", "fadeInUp", "alert", "alert-danger", 3, "innerHTML"], [1, "text-center"], ["href", "https://api.ecoledirecte.com/mot-de-passe-oublie.awp", "tabindex", "-1", 1, "mdp-lost"], [1, "form-check", "text-bold"], ["type", "checkbox", "name", "loginStored", "id", "seSouvenirDeMoi", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "seSouvenirDeMoi", 1, "form-check-label"]],
  template: function (Q, g) {
    if (Q & 1) {
      t.YNc(0, av, 1, 1, "div", 0);
      t.TgZ(1, "div", 1);
      t.YNc(2, oy, 2, 0, "h2", 2);
      t.TgZ(3, "form", 3);
      t.NdJ("ngSubmit", function () {
        return g.login();
      });
      t.TgZ(4, "input", 4);
      t.NdJ("ngModelChange", function ($e) {
        return g.loginForm.username = $e;
      });
      t.qZA();
      t.TgZ(5, "button", 5);
      t.NdJ("click", function () {
        return g.showPassword();
      });
      t._UZ(6, "i", 6);
      t.qZA();
      t.TgZ(7, "input", 7);
      t.NdJ("ngModelChange", function ($e) {
        return g.loginForm.password = $e;
      });
      t.qZA();
      t.YNc(8, tm, 2, 0, "a", 8);
      t.YNc(9, ay, 4, 1, "div", 9);
      t._UZ(10, "div", 10);
      t.TgZ(11, "div", 11)(12, "button", 12);
      t._uU(13, "Connexion");
      t.qZA()()()();
    }
    if (Q & 2) {
      t.Q6J("ngIf", g.errorMessage);
      t.xp6(2);
      t.Q6J("ngIf", !g.isRelogin);
      t.xp6(1);
      t.Q6J("ngBusy", g.loader);
      t.xp6(1);
      t.Q6J("ngModel", g.loginForm.username)("disabled", g.isRelogin)("edAutofocus", !g.isRelogin);
      t.xp6(3);
      t.Q6J("type", g.isPasswordVisible ? "text" : "password")("ngModel", g.loginForm.password)("edAutofocus", g.isRelogin);
      t.xp6(1);
      t.Q6J("ngIf", !g.isRelogin);
      t.xp6(1);
      t.Q6J("ngIf", !g.isRelogin);
    }
  },
  dependencies: [dt.O5, ro._Y, ro.Fj, ro.Wl, ro.JJ, ro.JL, ro.On, ro.F, Wa.DC, sy.U],
  styles: ["#bloc-connexion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px}#bloc-connexion[_ngcontent-%COMP%]   button#connexion[_ngcontent-%COMP%]{font-size:20px}#bloc-connexion[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #bloc-connexion[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{height:50px}.log[_ngcontent-%COMP%]{margin:4vh 0}#show-password[_ngcontent-%COMP%]{position:relative;float:right;bottom:-43px;left:-2px}.mdp-lost[_ngcontent-%COMP%]{float:right;margin:-3vh 0 4vh;font-style:italic;color:#999}@media screen and (max-width: 1280px){#bloc-connexion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}#bloc-connexion[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], #bloc-connexion[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{height:30px}.log[_ngcontent-%COMP%]{margin:0}#show-password[_ngcontent-%COMP%]{bottom:-33px}.mdp-lost[_ngcontent-%COMP%]{margin:1vh 0 4vh}}", ".login-container[_ngcontent-%COMP%]{padding:50px!important}.login-container[_ngcontent-%COMP%]   .titre[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:10px}.login-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{float:none;margin:0 auto 10px}.login-container[_ngcontent-%COMP%]:not(.session-expire){display:flex;flex-direction:column;justify-content:space-between;position:relative;padding:80px!important;min-height:100vh}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:100px 0 5vh}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:15px;color:var(--dark-primary-color);margin-top:5px}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:0 auto}.login-container[_ngcontent-%COMP%]   #site-closed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:20px;text-align:center}.form-box[_ngcontent-%COMP%]{flex:1}.tel[_ngcontent-%COMP%]{margin:0}input[type=text].with-border[_ngcontent-%COMP%]{border:1px solid var(--dark-placeholder-color)}button[_ngcontent-%COMP%]:not(#show-password):not(.btn-link){margin:2vh 0;padding:10px;background:var(--light-primary-color)}#pb-connexion[_ngcontent-%COMP%]{position:absolute;left:-95px;top:50vh;padding:10px 20px;color:#000;transform:rotate(-90deg);-webkit-transform:rotate(-90deg);background:#fff;box-shadow:0 5px 4px #00000080;text-transform:uppercase;font-size:13px;font-weight:700}#pb-connexion[_ngcontent-%COMP%]:hover{text-decoration:none;color:var(--dark-primary-color)}.info-container[_ngcontent-%COMP%]{position:relative;display:flex;min-height:100vh;background:linear-gradient(var(--dark-primary-color) 0%,var(--light-primary-color) 100%)}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:auto;text-align:center}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;margin:0 100px 20px;font-size:20px;font-weight:300;color:#fff;text-align:left}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.version-site[_ngcontent-%COMP%]{color:transparent}@media screen and (max-width: 1280px){.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:0}}"],
  changeDetection: 0
});
(0, To.gn)([(0, ov.W)("pseudo")], _p.prototype, "_pseudo", undefined);
let bf = (() => {
  class H {
    constructor(g) {
      this.modalService = g;
      this.appVersionCode = wc.sX.packageVersion;
      this.siteClosed = false;
      this.redirEnCours = false;
    }
    openModalMentionsLegales() {
      const g = {
        id: this.modalService.getModalsCount() + 1,
        class: "modal-lg",
        initialState: {
          title: "Mentions légales",
          injectComponentClass: sv
        }
      };
      this.modalService.show(rv.z, g);
    }
    openModalAideConnexion() {
      const g = {
        id: this.modalService.getModalsCount() + 1
      };
      this.modalService.show(ry, g);
    }
    onLoginError(g) {
      if (g.status === b.GL1.CompteInvalide || g.status === b.GL1.NotExported) {
        this.siteClosed = true;
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(tl.tT));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-login"]],
    decls: 50,
    vars: 4,
    consts: [["id", "login", 1, "container-fluid", "no-padding"], [1, "row"], [1, "col-lg-4", "col-md-5", "login-container"], [1, "text-center"], ["src", "/assets/images/logoEcoleDirecte.png", "alt", "Logo du site EcoleDirecte"], ["id", "site-closed", 1, "form-box", 3, "hidden"], ["id", "outputbis", 1, "animated", "fadeInUp", "alert", "alert-danger"], [1, "form-text"], [1, "form-box", 3, "hidden"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-pulse"], [1, "form-box", 3, "hidden", "loginError", "redirEnCours"], ["id", "item-mentions"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "float-start", "version-site"], [1, "col-lg-8", "col-md-7", "info-container"], ["id", "pb-connexion", "type", "button", 1, "btn", "btn-link", 3, "click"], [1, "autopromo"], [1, "list-inline"], [1, "list-inline-item"], ["href", "https://play.google.com/store/apps/developer?id=Aplim", "target", "_blank"], ["alt", "Get it on Google Play", "src", "/assets/images/play-store.png"], ["href", "https://itunes.apple.com/fr/developer/aplim/id466797731", "target", "_blank"], ["alt", "Get it on AppStore", "src", "/assets/images/appstore.png"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "header", 3);
        t._UZ(4, "img", 4);
        t.TgZ(5, "h1");
        t._uU(6, "EcoleDirecte");
        t.qZA()();
        t.TgZ(7, "div", 5)(8, "h3", 6);
        t._uU(9, " Ce site est ");
        t._UZ(10, "br");
        t._uU(11, " actuellement fermé ");
        t.qZA();
        t._UZ(12, "br");
        t.TgZ(13, "p", 7);
        t._uU(14, " Vous ne pouvez pas vous connecter pour le moment. ");
        t._UZ(15, "br");
        t._uU(16, " Contactez votre établissement pour plus d'informations. ");
        t.qZA()();
        t.TgZ(17, "div", 8)(18, "h2");
        t._uU(19, "Redirection en cours");
        t.qZA();
        t._UZ(20, "br")(21, "i", 9)(22, "br")(23, "br")(24, "br")(25, "br")(26, "br")(27, "br")(28, "br")(29, "br");
        t.qZA();
        t.TgZ(30, "ed-login-form", 10);
        t.NdJ("loginError", function (Ht) {
          return ie.onLoginError(Ht);
        })("redirEnCours", function (Ht) {
          return ie.redirEnCours = Ht;
        });
        t.qZA();
        t.TgZ(31, "div", 11)(32, "button", 12);
        t.NdJ("click", function () {
          return ie.openModalMentionsLegales();
        });
        t._uU(33, "Mentions légales");
        t.qZA()();
        t.TgZ(34, "span", 13);
        t._uU(35);
        t.qZA()();
        t.TgZ(36, "div", 14)(37, "button", 15);
        t.NdJ("click", function () {
          return ie.openModalAideConnexion();
        });
        t._uU(38, "Problème de connexion ?");
        t.qZA();
        t.TgZ(39, "div", 16)(40, "p")(41, "span");
        t._uU(42, "Retrouvez EcoleDirecte aussi sur votre mobile");
        t.qZA()();
        t.TgZ(43, "ul", 17)(44, "li", 18)(45, "a", 19);
        t._UZ(46, "img", 20);
        t.qZA()();
        t.TgZ(47, "li", 18)(48, "a", 21);
        t._UZ(49, "img", 22);
        t.qZA()()()()()()();
      }
      if (g & 2) {
        t.xp6(7);
        t.Q6J("hidden", !ie.siteClosed);
        t.xp6(10);
        t.Q6J("hidden", ie.siteClosed || !ie.redirEnCours);
        t.xp6(13);
        t.Q6J("hidden", ie.siteClosed || ie.redirEnCours);
        t.xp6(5);
        t.hij("v", ie.appVersionCode, "");
      }
    },
    dependencies: [_p],
    styles: [".login-container[_ngcontent-%COMP%]{padding:50px!important}.login-container[_ngcontent-%COMP%]   .titre[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:10px}.login-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{float:none;margin:0 auto 10px}.login-container[_ngcontent-%COMP%]:not(.session-expire){display:flex;flex-direction:column;justify-content:space-between;position:relative;padding:80px!important;min-height:100vh}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:100px 0 5vh}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:15px;color:var(--dark-primary-color);margin-top:5px}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:0 auto}.login-container[_ngcontent-%COMP%]   #site-closed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:20px;text-align:center}.form-box[_ngcontent-%COMP%]{flex:1}.tel[_ngcontent-%COMP%]{margin:0}input[type=text].with-border[_ngcontent-%COMP%]{border:1px solid var(--dark-placeholder-color)}button[_ngcontent-%COMP%]:not(#show-password):not(.btn-link){margin:2vh 0;padding:10px;background:var(--light-primary-color)}#pb-connexion[_ngcontent-%COMP%]{position:absolute;left:-95px;top:50vh;padding:10px 20px;color:#000;transform:rotate(-90deg);-webkit-transform:rotate(-90deg);background:#fff;box-shadow:0 5px 4px #00000080;text-transform:uppercase;font-size:13px;font-weight:700}#pb-connexion[_ngcontent-%COMP%]:hover{text-decoration:none;color:var(--dark-primary-color)}.info-container[_ngcontent-%COMP%]{position:relative;display:flex;min-height:100vh;background:linear-gradient(var(--dark-primary-color) 0%,var(--light-primary-color) 100%)}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:auto;text-align:center}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;margin:0 100px 20px;font-size:20px;font-weight:300;color:#fff;text-align:left}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.version-site[_ngcontent-%COMP%]{color:transparent}@media screen and (max-width: 1280px){.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:0}}"]
  });
  return H;
})();
import * as _0 from "4358";
const Yf = function (H) {
  return {
    "has-error": H
  };
};
let $p = (() => {
  class H {
    constructor(g, ie, $e, Ht) {
      this.authService = g;
      this.filtresAgendaEdtUserStore = ie;
      this.router = $e;
      this.uiService = Ht;
      this.provider = "sso";
    }
    ngOnChanges(g) {
      if (Object.isExists(this.identifiant) && Object.isExists(this.password)) {
        this.associerCompte();
      }
    }
    associerCompte() {
      this.authService.loginExterne(this.provider, this.token, {
        idSSOToken: this.idToken,
        identifiantSSO: this.identifiant,
        passwordSSO: this.password
      }).pipe((0, Hs.b)(g => {
        if (g === b.GL1.OK) {
          this.filtresAgendaEdtUserStore.reset();
          this.router.navigate([this.cameFrom], {
            queryParams: {
              camefrom: null
            }
          }).catch(() => console.error("AssociationSsoFormComponent navigate to cameFrom"));
        } else if (g !== 203) {
          throw new b.FwQ("L'authentification ne peut pas être assurée");
        }
      }), (0, lo.K)(g => {
        if (g.status === 516) {
          this.uiService.notifyEvent(b.DOJ.genericError, "Veuillez vérifier votre saisie", "Identifiant/mot de passe invalide", "fa fa-warning");
        } else {
          this.uiService.notifyEvent(b.DOJ.genericError, "Vous devez relancer la procédure depuis le site d'origine", "Association impossible", "fa fa-warning");
        }
        return kl.E;
      })).subscribe();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.e80), t.Y36(cc.c), t.Y36(bs.F0), t.Y36(b.VLf));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-association-sso-form"]],
    inputs: {
      provider: "provider",
      token: "token",
      idToken: "idToken",
      cameFrom: "cameFrom",
      identifiant: "identifiant",
      password: "password"
    },
    features: [t.TTD],
    decls: 28,
    vars: 9,
    consts: [["name", "formAssociationCompte", "novalidate", "", 1, "alert", "alert-dark", 3, "ngSubmit"], ["formAssociationCompte", "ngForm"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "row", 3, "ngClass"], ["for", "newIdentifiant", 1, "col-xl-4", "col-form-label"], [1, "col-xl-4"], ["id", "newIdentifiant", "name", "newIdentifiant", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["newIdentifiant", "ngModel"], [1, "form-text"], [1, "row", "mt-2", 3, "ngClass"], ["for", "newPassword", 1, "col-xl-4", "col-form-label"], [1, "col-xl-8"], ["id", "newPassword", "name", "newPassword", "type", "password", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], [1, "control-group", "modal-footer"], [1, "controls", "mt-2", "w-100"], ["type", "submit", "id", "association", 1, "btn", "btn-success", "float-end", 3, "disabled"], [1, "clearfix"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "form", 0, 1);
        t.NdJ("ngSubmit", function () {
          return ie.associerCompte();
        });
        t.TgZ(2, "fieldset")(3, "div", 2)(4, "h3", 3);
        t._uU(5, "Associez votre compte utilisateur EcoleDirecte");
        t.qZA()();
        t.TgZ(6, "div", 4)(7, "div", 5)(8, "label", 6);
        t._uU(9, "Votre identifiant EcoleDirecte");
        t.qZA();
        t.TgZ(10, "div", 7)(11, "input", 8, 9);
        t.NdJ("ngModelChange", function (Ht) {
          return ie.identifiant = Ht;
        });
        t.qZA();
        t.TgZ(13, "p", 10);
        t._uU(14, "Cet identifiant vous a été fourni par votre établissement scolaire");
        t.qZA()()();
        t.TgZ(15, "div", 11)(16, "label", 12);
        t._uU(17, "Mot de passe EcoleDirecte");
        t.qZA();
        t.TgZ(18, "div", 13)(19, "input", 14, 15);
        t.NdJ("ngModelChange", function (Ht) {
          return ie.password = Ht;
        });
        t.qZA();
        t.TgZ(21, "p", 10);
        t._uU(22, "Ce mot de passe vous a été fourni par votre établissement scolaire");
        t.qZA()()()();
        t.TgZ(23, "div", 16)(24, "div", 17)(25, "button", 18);
        t._uU(26, " Associer mon compte ");
        t.qZA();
        t._UZ(27, "div", 19);
        t.qZA()()()();
      }
      if (g & 2) {
        const $e = t.MAs(1);
        const Ht = t.MAs(12);
        const _n = t.MAs(20);
        t.xp6(7);
        t.Q6J("ngClass", t.VKq(5, Yf, Ht.invalid));
        t.xp6(4);
        t.Q6J("ngModel", ie.identifiant);
        t.xp6(4);
        t.Q6J("ngClass", t.VKq(7, Yf, _n.invalid && !_n.pristine));
        t.xp6(4);
        t.Q6J("ngModel", ie.password);
        t.xp6(6);
        t.Q6J("disabled", $e.invalid || $e.pristine);
      }
    },
    dependencies: [dt.mk, ro._Y, ro.Fj, ro.JJ, ro.JL, ro.Q7, ro.On, ro.F],
    encapsulation: 2,
    changeDetection: 0
  });
  return H;
})();
function E0(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 2);
    t._UZ(1, "i", 3);
    t._uU(2, " Veuillez patienter ...\n");
    t.qZA();
  }
}
function Ka(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 2)(1, "a", 4);
    t._UZ(2, "img", 5);
    t.qZA();
    t._UZ(3, "br");
    t.TgZ(4, "alert", 6)(5, "h5");
    t._uU(6, "Une erreur est survenue !");
    t.qZA();
    t.TgZ(7, "p");
    t._uU(8, "L'authentification ne peut pas être assurée");
    t.qZA();
    t.TgZ(9, "strong");
    t._uU(10);
    t.qZA()();
    t.TgZ(11, "a", 7);
    t._uU(12, "Retour à la page d'accueil d'EcoleDirecte");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(4);
    t.Q6J("dismissible", true);
    t.xp6(6);
    t.Oqu(g.erreurMessage);
  }
}
function Xp(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 8)(1, "div", 9)(2, "div", 10);
    t._UZ(3, "ed-association-sso-form", 11);
    t.qZA()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(3);
    t.Q6J("cameFrom", g.cameFrom)("provider", g.provider)("token", g.token)("idToken", g.idToken)("identifiant", g.dataAssociation.identifiant)("password", g.dataAssociation.password);
  }
}
let qp = (() => {
  class H {
    constructor(g, ie, $e, Ht, _n) {
      this.authStore = g;
      this.authService = ie;
      this.route = $e;
      this.filtresAgendaEdtUserStore = Ht;
      this.router = _n;
      this.displayAssociation = false;
      this.dataAssociation = {};
      this.token = "";
      this.idToken = null;
    }
    ngOnInit() {
      if (this.authStore.isLoggedIn()) {
        this.router.navigate(["/"]).catch(() => console.error("OAuthComponent navigate to /"));
        return;
      }
      this.cameFrom = this.route.snapshot.queryParamMap.has("cameFrom") ? this.route.snapshot.queryParamMap.get("cameFrom") : "/";
      this.provider = this.route.snapshot.paramMap.get("provider");
      let g = null;
      this.idToken = this.route.snapshot.paramMap.get("idToken");
      if (this.route.snapshot.queryParamMap.has("token")) {
        this.token = this.route.snapshot.queryParamMap.get("token");
        this.provider = "ssoCharly";
      } else if (this.route.snapshot.queryParamMap.has("atoken")) {
        this.token = this.route.snapshot.queryParamMap.get("atoken");
        g = this.route.snapshot.queryParamMap.get("i");
        this.provider = "supervision";
      } else if (this.route.snapshot.queryParamMap.has("idunique")) {
        this.token = this.route.snapshot.queryParamMap.get("key");
        this.idToken = this.route.snapshot.queryParamMap.get("idunique");
        this.provider = "sso";
      }
      this.authService.loginExterne(this.provider, this.token, {
        idSSOToken: this.idToken,
        i: g
      }).pipe((0, Hs.b)(ie => {
        this.erreur = false;
        if (ie === b.GL1.OK) {
          this.filtresAgendaEdtUserStore.reset();
          this.router.navigate([this.cameFrom], {
            queryParams: {
              camefrom: null
            }
          }).catch(() => console.error("OAuthComponent navigate to cameFrom"));
        } else {
          if (ie !== 203) {
            throw new b.FwQ("L'authentification ne peut pas être assurée");
          }
          this.displayAssociation = true;
          if (this.idToken !== null && this.idToken.split(";").length > 3) {
            this.dataAssociation.identifiant = this.idToken.split(";")[2];
            this.dataAssociation.password = this.idToken.split(";")[3];
          }
        }
      }), (0, lo.K)(ie => {
        this.erreur = true;
        this.erreurMessage = ie.message;
        return kl.E;
      })).subscribe();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(b.e80), t.Y36(bs.gz), t.Y36(cc.c), t.Y36(bs.F0));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-oauth"]],
    decls: 3,
    vars: 3,
    consts: [["class", "jumbotron", 4, "ngIf"], ["class", "ed-container", 4, "ngIf"], [1, "jumbotron"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-pulse"], ["routerLink", "/", "href", ""], ["src", "/assets/images/logoEcoleDirecte.png", "alt", "Logo du site EcoleDirecte", "id", "logoed"], ["type", "info", 3, "dismissible"], ["routerLink", "/", "href", "", 1, "btn", "btn-primary", 2, "text-transform", "none"], [1, "ed-container"], [1, "row"], [1, "col-md-offset-2", "col-lg-8"], [3, "cameFrom", "provider", "token", "idToken", "identifiant", "password"]],
    template: function (g, ie) {
      if (g & 1) {
        t.YNc(0, E0, 3, 0, "div", 0);
        t.YNc(1, Ka, 13, 2, "div", 0);
        t.YNc(2, Xp, 4, 6, "div", 1);
      }
      if (g & 2) {
        t.Q6J("ngIf", !ie.erreur && !ie.displayAssociation);
        t.xp6(1);
        t.Q6J("ngIf", ie.erreur);
        t.xp6(1);
        t.Q6J("ngIf", ie.displayAssociation);
      }
    },
    dependencies: [dt.O5, bs.yS, _0.wx, $p],
    encapsulation: 2
  });
  return H;
})();
import * as b0 from "61473";
import * as cl from "81058";
function ly(H, Q) {
  if (H & 1) {
    t.TgZ(0, "option", 17);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = Q.$implicit;
    const ie = t.oxw(2);
    t.Q6J("value", g.idLogin);
    t.xp6(1);
    t.hij(" ", g.nomCompte + " " + g.prenomCompte + " (" + ie.getTypePersonne(g.typeCompte) + " - " + g.libelleEtab + ")", " ");
  }
}
function A0(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 12)(1, "div", 13)(2, "h3", 14);
    t._uU(3, "Choisissez un établissement pour modifier vos données de connexion");
    t.qZA()();
    t.TgZ(4, "div", 15)(5, "div", 3)(6, "select", 16);
    t.NdJ("ngModelChange", function ($e) {
      t.CHM(g);
      const Ht = t.oxw();
      return t.KtG(Ht.searchIdLogin = $e);
    })("change", function () {
      t.CHM(g);
      const $e = t.oxw();
      return t.KtG($e.chooseCompte());
    });
    t.TgZ(7, "option", 17);
    t._uU(8, "Sélectionnez un compte");
    t.qZA();
    t.YNc(9, ly, 2, 2, "option", 18);
    t.ALo(10, "trackByProperty");
    t.qZA()()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(6);
    t.Q6J("ngModel", g.searchIdLogin);
    t.xp6(1);
    t.s9C("value", 0);
    t.xp6(2);
    t.Q6J("ngForOf", g.recupLogin.comptes)("ngForTrackBy", t.lcZ(10, 4, "ogec"));
  }
}
const Zf = function (H) {
  return {
    "has-error": H
  };
};
function nl(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 19)(1, "div", 13)(2, "div", 20)(3, "div", 3)(4, "form", 21, 22);
    t.NdJ("ngSubmit", function () {
      t.CHM(g);
      const $e = t.oxw();
      return t.KtG($e.giveInfo());
    });
    t.TgZ(6, "div", 23)(7, "div", 0)(8, "div", 24);
    t._UZ(9, "label", 25);
    t.TgZ(10, "div", 26)(11, "div", 27)(12, "span", 28);
    t._UZ(13, "i", 29);
    t.qZA();
    t.TgZ(14, "input", 30, 31);
    t.NdJ("ngModelChange", function ($e) {
      t.CHM(g);
      const Ht = t.oxw();
      return t.KtG(Ht.compteChoose.reponse = $e);
    });
    t.qZA()()()()();
    t._UZ(16, "br");
    t.TgZ(17, "div", 32);
    t._uU(18, " Merci de répondre à la question secrète que vous avez complétée lors de la modification de vos identifiants de première connexion. ");
    t.qZA();
    t._UZ(19, "input", 33);
    t.qZA()()()()()();
  }
  if (H & 2) {
    const g = t.MAs(5);
    const ie = t.MAs(15);
    const $e = t.oxw();
    t.xp6(8);
    t.Q6J("ngClass", t.VKq(4, Zf, ie.invalid));
    t.xp6(1);
    t.Q6J("innerHTML", $e.compteChoose.questionSecrete, t.oJD);
    t.xp6(5);
    t.Q6J("ngModel", $e.compteChoose.reponse);
    t.xp6(5);
    t.Q6J("disabled", g.invalid || $e.compteChoose.reponse === "");
  }
}
function nm(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 37)(1, "label", 51);
    t._uU(2, "Choisissez un nom d'utilisateur");
    t.qZA();
    t.TgZ(3, "div", 39)(4, "div", 27)(5, "span", 28);
    t._UZ(6, "i", 52);
    t.qZA();
    t._UZ(7, "input", 53);
    t.qZA();
    t.TgZ(8, "span", 54);
    t._uU(9, "Attention aux Majuscules/Minuscules");
    t.qZA()()();
  }
}
function Ep(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 55);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.hij(" ", g.getLibelleErreurMdp(), " ");
  }
}
function cv(H, Q) {
  if (H & 1) {
    t.TgZ(0, "span", 55);
    t._uU(1, "La longueur du mot de passe est limitée à 50 caractères.");
    t.qZA();
  }
}
const x0 = function (H, Q) {
  return {
    "has-error": H,
    "has-success": Q
  };
};
function uv(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "div", 12)(1, "div", 13)(2, "h3", 14);
    t._uU(3, "Remplissez les informations suivantes pour modifier vos données de connexion");
    t.qZA()();
    t.TgZ(4, "div", 20)(5, "div", 3)(6, "form", 34);
    t.NdJ("ngSubmit", function () {
      t.CHM(g);
      const $e = t.oxw();
      return t.KtG($e.save());
    });
    t.TgZ(7, "div", 35);
    t.YNc(8, nm, 10, 0, "div", 36);
    t._UZ(9, "br");
    t.TgZ(10, "div", 37)(11, "label", 38);
    t._uU(12, "Nouveau mot de passe");
    t.qZA();
    t.TgZ(13, "div", 39)(14, "div", 27)(15, "span", 28);
    t._UZ(16, "i", 40);
    t.qZA();
    t._UZ(17, "input", 41);
    t.qZA();
    t._UZ(18, "ed-password-strength-bar", 42);
    t.qZA();
    t.TgZ(19, "val-errors", 43);
    t.YNc(20, Ep, 2, 1, "ng-template", 44);
    t.YNc(21, cv, 2, 0, "ng-template", 45);
    t.qZA()()();
    t._UZ(22, "br");
    t.TgZ(23, "div", 46)(24, "label", 47);
    t._uU(25, "Confirmez votre nouveau mot de passe");
    t.qZA();
    t.TgZ(26, "div", 39)(27, "div", 27)(28, "span", 28);
    t._UZ(29, "i", 40);
    t.qZA();
    t._UZ(30, "input", 48);
    t.qZA()()();
    t._UZ(31, "br");
    t.TgZ(32, "a", 49);
    t._uU(33, "Retour à l'accueil");
    t.qZA();
    t._UZ(34, "input", 50);
    t.qZA()()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(6);
    t.Q6J("formGroup", g.formCompte);
    t.xp6(2);
    t.Q6J("ngIf", g.recupLogin.typeReinit === "global");
    t.xp6(10);
    t.Q6J("controlToValidate", g.formCompte.controls.nouveauMotDePasse)("niveauMDP", g.compteChoose.niveauSecuriteMDPEtab);
    t.xp6(5);
    t.Q6J("ngClass", t.WLB(7, x0, g.formCompte.controls.nouveauMotDePasse.value !== "" && !g.mdpIdentiques() && g.isPasswordTooLong, g.formCompte.controls.nouveauMotDePasse.value !== "" && g.mdpIdentiques() && !g.isPasswordTooLong));
    t.xp6(7);
    t.Q6J("compareWith", g.formCompte.controls.nouveauMotDePasse);
    t.xp6(4);
    t.Q6J("disabled", g.formCompte.invalid);
  }
}
function vh(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 56)(1, "div", 13)(2, "h3", 14);
    t._uU(3, "Attention");
    t.qZA()();
    t.TgZ(4, "div", 20)(5, "div", 3)(6, "h1");
    t._uU(7, "Cette demande de réinitialisation a expiré.");
    t.qZA();
    t.TgZ(8, "p");
    t._uU(9, "Veuillez recommencer la procédure depuis la page d'accueil");
    t.qZA();
    t.TgZ(10, "a", 57);
    t._uU(11, "Retour à l'accueil");
    t.qZA()()()();
  }
}
let Mu = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n, Un, ui) {
      super();
      this.route = g;
      this.router = ie;
      this.uiService = $e;
      this.authService = Ht;
      this.recupLoginStore = _n;
      this.loaderService = Un;
      this.formBuilder = ui;
      this.invalidKey = false;
      this.etape = 1;
      this.searchIdLogin = 0;
      this.getTypePersonne = b.FSr.getTypePersonne;
      this.isPasswordTooLong = false;
      this.formCompte = this.formBuilder.group({
        identifiant: new ro.NI("", ro.kI.required),
        nouveauMotDePasse: new ro.NI("", ro.kI.required),
        confirmationMotDePasse: new ro.NI("", ro.kI.required)
      });
      this.formCompte.controls.nouveauMotDePasse.valueChanges.pipe((0, lv.b)(500), (0, Hs.b)(Vi => {
        this.isPasswordTooLong = this.mdpTooLong();
        if (this.mdpIdentiques()) {
          this.removeFormError(this.formCompte.controls.confirmationMotDePasse, "mdpIdentiques");
        } else {
          this.addFormError(this.formCompte.controls.confirmationMotDePasse, "mdpIdentiques");
        }
      }), (0, gl.R)(this.componentDestroyed$)).subscribe();
    }
    ngOnInit() {
      this.recupLogin = new b.I$6(this.recupLoginStore.snapshot);
      this.recupLogin.typeReinit = this.route.snapshot.paramMap.get("typeReinit");
      if (this.route.snapshot.queryParamMap.has("key")) {
        this.recupLogin.key = this.route.snapshot.queryParamMap.get("key");
      }
      if (this.route.snapshot.queryParamMap.has("urlC")) {
        this.recupLogin.urlC = this.route.snapshot.queryParamMap.get("urlC");
      }
      if (Object.isExists(this.recupLogin.key) || Object.isExists(this.recupLogin.urlC)) {
        this.loader = this.loaderService.show(this);
        this.authService.getInfosEtabWithSecretsQuestions(this.recupLogin).pipe((0, Hs.b)(g => {
          if (Object.isExists(g)) {
            this.recupLogin.mailOrTel = g.mailOrTel;
            this.recupLogin.modeReception = g.modeReception;
            this.recupLogin.comptes = [...g.comptes];
            if (g.comptes.length === 1) {
              this.chooseCompte(true);
            }
          }
        }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(g => this.uiService.notifyErrorThenEmpty(g, true, "Consultation", "fa fa-warning"))).subscribe();
      }
    }
    removeFormError(g, ie) {
      if (g.hasError(ie)) {
        delete g.errors[ie];
        g.updateValueAndValidity();
      }
    }
    addFormError(g, ie) {
      if (!g.hasError(ie)) {
        g.setErrors({
          ...g.errors,
          [ie]: true
        }, {
          emitEvent: true
        });
      }
    }
    save() {
      if (!Object.isExists(this.recupLogin.urlC) && !Object.isExists(this.recupLogin.key) || this.formCompte.invalid) {
        this.uiService.notifyEvent(b.DOJ.genericError, "Impossible de mettre à jour vos identifants !", "Modification de vos identifiants de connexion", "fa fa-warning");
      } else {
        if (this.formCompte.controls.nouveauMotDePasse.value !== "" && this.formCompte.controls.confirmationMotDePasse.value !== "") {
          this.recupLogin.motDePasse = this.formCompte.controls.nouveauMotDePasse.value;
          this.recupLogin.motDePasseConfirm = this.formCompte.controls.confirmationMotDePasse.value;
        }
        if (Object.isExists(this.formCompte.controls.identifiant) && this.formCompte.controls.identifiant.value !== "") {
          this.recupLogin.login = this.formCompte.controls.identifiant.value;
        }
        this.loader = this.loaderService.show(this);
        this.authService.doReinitialisationPWD(this.recupLogin).pipe((0, lo.K)(g => {
          if (g.status === 521) {
            this.invalidKey = true;
          }
          this.loaderService.hide(this);
          this.uiService.notifyEvent(b.DOJ.genericError, g.status === 521 ? "Cette demande de réinitialisation a expiré" : g.message, "Modification de vos identifiants de connexion", "fa fa-warning");
          return kl.E;
        }), (0, Hs.b)(g => {
          this.loaderService.hide(this);
          this.router.navigate(["/"], {
            queryParams: {}
          }).catch(() => console.error("UpdateLoginComponent navigate to /"));
          this.uiService.notifyEvent(b.DOJ.genericSuccess, "Vos identifiants de connexion ont bien été mis à jour !", "Modification de vos identifiants de connexion", "fa fa-check");
        })).subscribe();
      }
    }
    chooseCompte(g = false) {
      if (g) {
        this.etape = 2;
        this.compteChoose = this.recupLogin.comptes[0];
      } else {
        this.formCompte.patchValue({
          nouveauMotDePasse: "",
          confirmationMotDePasse: "",
          identifiant: ""
        });
        if (+this.searchIdLogin == 0) {
          this.etape = 1;
        } else {
          this.compteChoose = this.recupLogin.comptes.find(ie => ie.idLogin === +this.searchIdLogin);
          if (Object.isExists(this.compteChoose) && this.compteChoose.questionSecrete !== "") {
            this.etape = 2;
          }
        }
      }
    }
    giveInfo() {
      if (this.compteChoose.reponse !== "") {
        if (Object.isExists(this.compteChoose)) {
          this.recupLogin.question = this.compteChoose.questionSecrete;
          this.recupLogin.reponse = this.compteChoose.reponse;
          this.recupLogin.ogec = this.compteChoose.ogecEtab;
          this.recupLogin.idLogin = this.compteChoose.idLogin;
        }
        this.loader = this.loaderService.show(this);
        this.authService.doRecuperationMotDePasse(this.recupLogin).pipe((0, lo.K)(g => {
          this.uiService.notifyEvent(b.DOJ.genericError, g.status === 220 ? "Votre réponse est incorrecte !" : "Nous n'avons pas réussi à vous identifier !", "Récupération de mot de passe", "fa fa-warning");
          this.etape = 2;
          return kl.E;
        }), (0, Hs.b)(() => {
          this.uiService.notifyEvent(b.DOJ.genericSuccess, "La réponse est bonne!", "Récupération de mot de passe", "fa fa-check");
          this.etape = 3;
        }), (0, As.x)(() => this.loaderService.hide(this))).subscribe();
      }
    }
    mdpIdentiques() {
      return b0.h.comparePwd(this.formCompte.controls.nouveauMotDePasse.value, this.formCompte.controls.confirmationMotDePasse.value);
    }
    mdpTooLong() {
      return this.formCompte.controls.nouveauMotDePasse.value.length > 50;
    }
    getLibelleErreurMdp() {
      return Gc.V.getLibelleErreurMdp(this.compteChoose.niveauSecuriteMDPEtab);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(bs.gz), t.Y36(bs.F0), t.Y36(b.VLf), t.Y36(b.e80), t.Y36(b.luj), t.Y36(gr.S), t.Y36(ro.qu));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-update-login"]],
    features: [t.qOj],
    decls: 15,
    vars: 5,
    consts: [[1, "row"], [1, "col-lg-6", "mybodyleft"], [1, "col-lg-6", "alignmiddle"], [1, "text-center"], [1, "login-container", "recup-login", 3, "ngBusy"], [1, "titre"], [1, "logo"], ["src", "/assets/images/logoEcoleDirecte.png", "alt", "Logo du site EcoleDirecte", 1, "rounded-circle"], ["class", "card ed-card with-epingle", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "card", "id", "panel-error", 4, "ngIf"], ["id", "bloc-bas"], [1, "card", "ed-card", "with-epingle"], [1, "card-header", "text-center"], [1, "card-title"], [1, "card-body", "margin-top-10"], ["id", "etablissement", "name", "chooseCompte", 1, "form-control", "form-select", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card"], [1, "card-body"], ["name", "formQuestionSecrete", "novalidate", "", 3, "ngSubmit"], ["formQuestionSecrete", "ngForm"], [1, "ed-card", "with-epingle"], [1, "control-group", 3, "ngClass"], ["for", "question", 1, "col-lg-11", "center", "form-label", 3, "innerHTML"], [1, "col-lg-10", "center"], [1, "input-group"], ["aria-hidden", "true", 1, "input-group-text"], [1, "fa", "fa-question"], ["id", "question", "name", "questionUser", "type", "text", "placeholder", "", "required", "", 1, "form-control", "question", 3, "ngModel", "ngModelChange"], ["questionUser", "ngModel"], ["role", "alert", 1, "alert", "alert-info"], ["type", "submit", "value", "Valider", 1, "btn", "btn-success", 3, "disabled"], ["name", "formRecupGlobal", "id", "formRecupGlobal", "novalidate", "", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "row", "center"], ["class", "control-group", 4, "ngIf"], [1, "control-group"], ["for", "passwordUser", 1, "col-lg-7", "center", "form-label"], [1, "col-lg-7", "center"], [1, "fa", "fa-lock"], ["id", "passwordUser", "name", "passwordUser", "type", "password", "placeholder", "", "autocomplete", "new-password", "formControlName", "nouveauMotDePasse", "edMaxlength", "50", 1, "form-control"], [3, "controlToValidate", "niveauMDP"], ["controlName", "nouveauMotDePasse"], ["valError", "niveau"], ["valError", "maxlength"], [3, "ngClass"], ["for", "passwordConfirmUser", 1, "col-lg-7", "center", "form-label"], ["id", "passwordConfirmUser", "name", "passwordConfirmUser", "type", "password", "placeholder", "", "formControlName", "confirmationMotDePasse", "edSamePasswordValidator", "", 1, "form-control", 3, "compareWith"], ["href", "", "routerLink", "/login", 1, "btn", "btn-primary"], ["type", "submit", "value", "Valider", 1, "btn", "btn-primary", "margin-whitespace", 3, "disabled"], ["for", "username", 1, "col-lg-7", "center", "form-label"], [1, "fa", "fa-user"], ["id", "username", "name", "username", "type", "text", "placeholder", "", "formControlName", "identifiant", 1, "form-control"], [1, "form-text"], [1, "form-text", "text-danger"], ["id", "panel-error", 1, "card"], ["href", "", "routerLink", "/login", 1, "btn", "btn-primary", "margin-top-20"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h1", 5);
        t._uU(7, "EcoleDirecte");
        t.qZA()();
        t.TgZ(8, "div", 6);
        t._UZ(9, "img", 7);
        t.qZA();
        t.YNc(10, A0, 11, 6, "div", 8);
        t.YNc(11, nl, 20, 6, "div", 9);
        t.YNc(12, uv, 35, 10, "div", 8);
        t.YNc(13, vh, 12, 0, "div", 10);
        t._UZ(14, "div", 11);
        t.qZA()()()()();
      }
      if (g & 2) {
        t.xp6(4);
        t.Q6J("ngBusy", ie.loader);
        t.xp6(6);
        t.Q6J("ngIf", !ie.invalidKey && ie.etape > 0 && ie.recupLogin.comptes.length > 1);
        t.xp6(1);
        t.Q6J("ngIf", !ie.invalidKey && ie.etape > 1 && (ie.compteChoose == null ? null : ie.compteChoose.questionSecrete) !== "");
        t.xp6(1);
        t.Q6J("ngIf", !ie.invalidKey && ie.etape > 2);
        t.xp6(1);
        t.Q6J("ngIf", ie.invalidKey);
      }
    },
    dependencies: [dt.mk, dt.sg, dt.O5, ro._Y, ro.YN, ro.Kr, ro.Fj, ro.EJ, ro.JJ, ro.JL, ro.Q7, ro.On, ro.F, ro.sg, ro.u, bs.yS, Wa.DC, cl.tM, cl.HY, b0.h, Gd.v, Ir.I, Zl.$],
    styles: ["div#panel-error[_ngcontent-%COMP%]{height:50vh}#bloc-bas[_ngcontent-%COMP%]{min-height:45vh}", ".login-container[_ngcontent-%COMP%]{padding:50px!important}.login-container[_ngcontent-%COMP%]   .titre[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:10px}.login-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{float:none;margin:0 auto 10px}.login-container[_ngcontent-%COMP%]:not(.session-expire){display:flex;flex-direction:column;justify-content:space-between;position:relative;padding:80px!important;min-height:100vh}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:100px 0 5vh}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:15px;color:var(--dark-primary-color);margin-top:5px}.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:0 auto}.login-container[_ngcontent-%COMP%]   #site-closed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:20px;text-align:center}.form-box[_ngcontent-%COMP%]{flex:1}.tel[_ngcontent-%COMP%]{margin:0}input[type=text].with-border[_ngcontent-%COMP%]{border:1px solid var(--dark-placeholder-color)}button[_ngcontent-%COMP%]:not(#show-password):not(.btn-link){margin:2vh 0;padding:10px;background:var(--light-primary-color)}#pb-connexion[_ngcontent-%COMP%]{position:absolute;left:-95px;top:50vh;padding:10px 20px;color:#000;transform:rotate(-90deg);-webkit-transform:rotate(-90deg);background:#fff;box-shadow:0 5px 4px #00000080;text-transform:uppercase;font-size:13px;font-weight:700}#pb-connexion[_ngcontent-%COMP%]:hover{text-decoration:none;color:var(--dark-primary-color)}.info-container[_ngcontent-%COMP%]{position:relative;display:flex;min-height:100vh;background:linear-gradient(var(--dark-primary-color) 0%,var(--light-primary-color) 100%)}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:auto;text-align:center}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;margin:0 100px 20px;font-size:20px;font-weight:300;color:#fff;text-align:left}.info-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.version-site[_ngcontent-%COMP%]{color:transparent}@media screen and (max-width: 1280px){.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:0}}"]
  });
  return H;
})();
let Gf = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
    }
    ngOnInit() {
      this.message = "Vous n'avez pas les droits nécessaires pour consulter cette page.";
      if (this.authStore.isModeSupervision() || this.authStore.isEphemere()) {
        this.message = "En mode supervision vous n'avez pas accès à toutes les fonctions de l'utilisateur.";
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-access-denied"]],
    decls: 13,
    vars: 1,
    consts: [[1, "ed-container", "double-padding", "page403"], [1, "entete-page"], [1, "container-bg", "error-template"], [1, "error-details"], [1, "error-actions"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg"], ["aria-hidden", "true", 1, "icon-ed_accueil"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "header", 1)(2, "h2");
        t._uU(3, "Erreur 403");
        t.qZA()();
        t.TgZ(4, "div", 2)(5, "h3");
        t._uU(6, "Accès non autorisé");
        t.qZA();
        t.TgZ(7, "div", 3);
        t._uU(8);
        t.qZA();
        t.TgZ(9, "div", 4)(10, "a", 5);
        t._UZ(11, "i", 6);
        t._uU(12, " Accueil ");
        t.qZA()()()();
      }
      if (g & 2) {
        t.xp6(8);
        t.Oqu(ie.message);
      }
    },
    dependencies: [bs.yS],
    styles: [".error-template[_ngcontent-%COMP%]{padding:40px 15px;text-align:center}.error-actions[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:10px}"]
  });
  return H;
})();
const ac = ["formEC"];
function Xo(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div")(1, "div", 9)(2, "h5");
    t._uU(3, "Une erreur est survenue !");
    t.qZA();
    t.TgZ(4, "p", 10);
    t._uU(5);
    t.qZA()();
    t.TgZ(6, "a", 11);
    t._uU(7, "Retour à la page d'accueil d'EcoleDirecte");
    t.qZA()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(5);
    t.Oqu(g.errMessage);
  }
}
function dv(H, Q) {
  if (H & 1) {
    t._UZ(0, "input", 19);
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.s9C("value", g.educonnect.relayState);
  }
}
function zf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 12)(1, "div", 13)(2, "h2");
    t._uU(3, " Je me connecte avec ");
    t.TgZ(4, "b");
    t._uU(5, "EduConnect");
    t.qZA()();
    t.TgZ(6, "form", 14, 15);
    t.ALo(8, "safe");
    t._UZ(9, "input", 16);
    t.YNc(10, dv, 1, 1, "input", 17);
    t.TgZ(11, "button", 18);
    t._uU(12, "S'identifier avec EduConnect");
    t.qZA()()()();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(6);
    t.Q6J("action", t.xi3(8, 3, g.educonnect.action, "url"), t.LSH);
    t.xp6(3);
    t.s9C("value", g.educonnect.samlRequest);
    t.xp6(1);
    t.Q6J("ngIf", g.educonnect.relayState);
  }
}
let Ou = (() => {
  class H {
    constructor(g, ie, $e, Ht) {
      this.authStore = g;
      this.authService = ie;
      this.modalService = $e;
      this.router = Ht;
    }
    ngOnInit() {
      if (this.authStore.isLoggedIn()) {
        this.router.navigate(["/"]).catch(() => console.error("EduconnectComponent navigate to /"));
      } else {
        this.loader = this.authService.educonnect().pipe((0, lo.K)(g => {
          if (g.status === 235) {
            this.router.navigate(["/"]).catch(() => console.error("EduconnectComponent navigate to /"));
          }
          this.erreur = true;
          this.educonnect = undefined;
          this.errMessage = `La redirection vers le site EduConnect ne peut pas \xeatre r\xe9alis\xe9e ${g.message}`;
          return kl.E;
        }), (0, Hs.b)(g => {
          this.educonnect = new b.NcW(g);
          this.erreur = false;
          setTimeout(() => {
            if (Object.isExists(this.formECElement)) {
              this.formECElement.submit();
            }
          }, 200);
        })).subscribe();
      }
    }
    openModalMentionsLegales() {
      const g = {
        id: this.modalService.getModalsCount() + 1,
        class: "modal-lg",
        initialState: {
          title: "Mentions légales",
          injectComponentClass: sv
        }
      };
      this.modalService.show(rv.z, g);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(b.e80), t.Y36(tl.tT), t.Y36(bs.F0));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-educonnect"]],
    viewQuery: function (g, ie) {
      if (g & 1) {
        t.Gf(ac, 5);
      }
      if (g & 2) {
        let $e;
        if (t.iGM($e = t.CRH())) {
          ie.formECElement = $e.first;
        }
      }
    },
    decls: 13,
    vars: 3,
    consts: [[1, "ed-container", "educonnect", 3, "ngBusy"], [1, "jumbotron"], ["routerLink", "/", "href", ""], ["src", "/assets/images/logoEcoleDirecte.png", "alt", "Logo du site EcoleDirecte", "id", "logoed"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "item-mentions"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["href", "https://educonnect.education.gouv.fr/educt-aide/aide/", "target", "_blank"], [1, "alert", "alert-dismissable", "alert-warning"], [2, "font-size", "12px"], ["routerLink", "/", "href", "", 1, "btn", "btn-primary", 2, "text-transform", "none"], [1, "row"], [1, "offset-md-3", "col-lg-6"], ["id", "formEC", "name", "educonnect", "method", "post", "target", "_self", "novalidate", "", 3, "action"], ["formEC", ""], ["type", "hidden", "name", "SAMLRequest", 3, "value"], ["type", "hidden", "name", "RelayState", 3, "value", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-info"], ["type", "hidden", "name", "RelayState", 3, "value"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1)(2, "a", 2);
        t._UZ(3, "img", 3);
        t.qZA();
        t.YNc(4, Xo, 8, 1, "div", 4);
        t.qZA();
        t.YNc(5, zf, 13, 6, "div", 5);
        t.TgZ(6, "div", 1)(7, "div", 6)(8, "button", 7);
        t.NdJ("click", function () {
          return ie.openModalMentionsLegales();
        });
        t._uU(9, "Mentions légales");
        t.qZA();
        t._uU(10, " | ");
        t.TgZ(11, "a", 8);
        t._uU(12, "Aide EduConnect");
        t.qZA()()()();
      }
      if (g & 2) {
        t.Q6J("ngBusy", ie.loader);
        t.xp6(4);
        t.Q6J("ngIf", ie.erreur);
        t.xp6(1);
        t.Q6J("ngIf", !ie.erreur);
      }
    },
    dependencies: [dt.O5, ro._Y, ro.JL, ro.F, bs.yS, Wa.DC, eg.y],
    styles: ["h2[_ngcontent-%COMP%]{color:inherit}h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#ff0082}button[type=submit][_ngcontent-%COMP%]{margin:2vh 0;padding:10px;background:var(--light-primary-color)}.row[_ngcontent-%COMP%]{background:none;text-align:center;margin-top:-50px}"]
  });
  return H;
})();
let Kf = (() => {
  class H {
    constructor() {}
  }
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-not-found"]],
    decls: 13,
    vars: 0,
    consts: [[1, "ed-container", "double-padding", "page404"], [1, "entete-page"], [1, "container-bg", "error-template"], [1, "error-details"], [1, "error-actions"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg"], ["aria-hidden", "true", 1, "icon-ed_accueil"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "header", 1)(2, "h2");
        t._uU(3, "Erreur 404");
        t.qZA()();
        t.TgZ(4, "div", 2)(5, "h3");
        t._uU(6, "Oups !");
        t.qZA();
        t.TgZ(7, "div", 3);
        t._uU(8, "La page que vous recherchez ne semble pas exister.");
        t.qZA();
        t.TgZ(9, "div", 4)(10, "a", 5);
        t._UZ(11, "i", 6);
        t._uU(12, " Accueil ");
        t.qZA()()()();
      }
    },
    dependencies: [bs.yS],
    styles: [".error-template[_ngcontent-%COMP%]{padding:40px 15px;text-align:center}.error-actions[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:10px}"]
  });
  return H;
})();
let fv = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
    }
    canActivate(g, ie) {
      let $e = 0;
      if (g.paramMap.get("typeEntity") === b.dcH.ELEVE && !this.authStore.isEleve()) {
        $e = parseInt(g.paramMap.get("idEntity"), 10);
      }
      return this.checkProfil($e);
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      let $e = 0;
      const Ht = b.FSr.isNotEmptyString(g.path) ? g.path.split("/") : [];
      const _n = Ht.findIndex(Un => Un === ":typeEntity");
      if (_n > -1 && ie.length > _n && ie[_n].path === b.dcH.ELEVE && !this.authStore.isEleve()) {
        const ui = Ht.findIndex(Vi => Vi === ":idEntity");
        if (ui > -1 && ie.length > ui) {
          $e = parseInt(ie[ui].path, 10);
        }
      }
      return this.checkProfil($e);
    }
    checkProfil(g) {
      if (this.authStore.isProfOuPersonnel()) {
        if (b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.CAHIER_DE_TEXTES)) {
          return true;
        }
      } else if (b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.VIE_DE_LA_CLASSE, g)) {
        return true;
      }
      return false;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let im = (() => {
  class H {
    constructor(g) {
      this.authStore = g;
    }
    canActivate(g, ie) {
      let $e = 0;
      return (!g.paramMap.get("typeEntity") || !g.paramMap.get("idEntity") || !this.authStore.isEntrepriseOuE() && !this.authStore.isFouE()) && (g.paramMap.get("typeUser") === b.dcH.ELEVE && (this.authStore.isEntreprise() || this.authStore.isFamille()) && ($e = parseInt(g.paramMap.get("idUser"), 10)), this.checkProfil($e));
    }
    canActivateChild(g, ie) {
      return this.canActivate(g, ie);
    }
    canLoad(g, ie) {
      const $e = b.FSr.isNotEmptyString(g.path) ? g.path.split("/") : [];
      if ($e.findIndex(ui => ui === ":typeEntity") > -1 && (this.authStore.isEntrepriseOuE() || this.authStore.isFouE())) {
        return false;
      }
      let _n = 0;
      const Un = $e.findIndex(ui => ui === ":typeUser");
      if (Un > -1 && ie.length > Un && ie[Un].path === b.dcH.ELEVE && (this.authStore.isFamille() || this.authStore.isEntreprise())) {
        const Vi = $e.findIndex(Wr => Wr === ":idUser");
        if (Vi > -1 && ie.length > Vi) {
          _n = parseInt(ie[Vi].path, 10);
        }
      }
      return this.checkProfil(_n);
    }
    checkProfil(g) {
      return (!!this.authStore.isEntrepriseOuE() || !!this.authStore.isFouE()) && !!b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.VIE_SCOLAIRE, g) || this.authStore.isProfOuPersonnel() && b.Kg5.isModuleEnabled(this.authStore.currentUser, b.qzA.VIE_SCOLAIRE);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(b.CnD));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
const rm = new t.OlP("externalUrlRedirectResolver");
const Af = [{
  path: "",
  pathMatch: "full",
  redirectTo: "Accueil"
}, {
  path: "",
  component: Qg,
  children: [{
    path: "login",
    component: bf
  }, {
    path: "logout",
    canActivate: [Ts],
    component: bf
  }, {
    path: "changementMotDePasse/:typeReinit",
    component: Mu
  }, {
    path: "oauth/:provider/:token",
    redirectTo: "oauth/:provider/:token/",
    pathMatch: "full"
  }, {
    path: "oauth/:provider/:token/:idToken",
    component: qp
  }, {
    path: "educonnect",
    component: Ou
  }, {
    path: "externalRedirect",
    canActivate: [rm],
    component: Kf
  }, {
    path: "loginExterne",
    component: qp
  }, {
    path: "visioconference/:vid",
    loadChildren: (H = (0, ls.Z)(function* () {
      return (yield __webpack_require__.e(1494).then(__webpack_require__.bind(__webpack_require__, 61494))).VisioconferenceModule;
    }), function () {
      return H.apply(this, arguments);
    })
  }]
}, {
  path: "",
  canActivate: [Gt.a],
  component: iv,
  resolve: {
    etablissementStoreReady: Ga.T,
    paiementStoreReady: Zo,
    badgesStoreReady: Os
  },
  runGuardsAndResolvers: "always",
  children: [{
    path: "403",
    component: Gf
  }, {
    path: "404",
    component: Kf
  }, {
    path: "about",
    component: sv
  }, {
    path: "Accueil",
    component: jg
  }, {
    path: "Eleves/:idUser",
    canActivate: [mt],
    component: xs
  }, {
    path: "Enseignant",
    canActivate: [Cc],
    component: Ye
  }, {
    path: "Famille",
    canActivate: [qt],
    component: q0
  }, {
    path: "Personnel",
    canActivate: [Ct],
    component: zm
  }, {
    path: "Entreprise",
    canActivate: [gc],
    component: gi
  }, {
    path: "Classes/:idEntity/CarnetDeNotes",
    redirectTo: "C/:idEntity/ConseilDeClasse",
    pathMatch: "full"
  }, {
    path: "Eleves/:idUser/Notes",
    redirectTo: "E/:idUser/Notes",
    pathMatch: "full"
  }, {
    path: "Enseignant/Appel",
    redirectTo: "Appel",
    pathMatch: "full"
  }, {
    path: ":typeEntity/AppelEtude",
    redirectTo: "AppelEtude",
    pathMatch: "full"
  }, {
    path: ":typeEntity/AppelPrimaire",
    redirectTo: "AppelPrimaire",
    pathMatch: "full"
  }, {
    path: "Eleves/:idEntity/EmploiDuTemps",
    redirectTo: "E/:idEntity/EmploiDuTemps",
    pathMatch: "full"
  }, {
    path: "Enseignants/:idEntity/EmploiDuTemps",
    redirectTo: "P/:idEntity/EmploiDuTemps"
  }, {
    path: "Eleves/:idUser/VieScolaire",
    redirectTo: "E/:idUser/VieScolaire",
    pathMatch: "full"
  }, {
    path: "Eleve/Documents",
    redirectTo: "Documents",
    pathMatch: "full"
  }, {
    path: "Famille/Documents",
    redirectTo: "Documents",
    pathMatch: "full"
  }, {
    path: "Adulte/Documents",
    redirectTo: "Documents",
    pathMatch: "full"
  }, {
    path: "Eleves/:idUser/ReunionParentProf",
    redirectTo: "E/:idUser/RPP",
    pathMatch: "full"
  }, {
    path: "Enseignants/:idUser/RPP",
    redirectTo: "P/:idUser/RPP",
    pathMatch: "full"
  }, {
    path: "Famille/FamilleCoordonnees",
    redirectTo: "F/FamilleCoordonnees",
    pathMatch: "full"
  }, {
    path: "Eleves/:idEntity/CahierDeTexte",
    redirectTo: "E/:idEntity/CahierDeTexte",
    pathMatch: "full"
  }, {
    path: "CahierDeTextePrimaire",
    redirectTo: "CahierDeTexte",
    pathMatch: "full"
  }, {
    path: "Aides",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(9722).then(__webpack_require__.bind(__webpack_require__, 49722))).AidesEnLigneModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Appel",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.APPEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(5772)]).then(__webpack_require__.bind(__webpack_require__, 55772))).AppelModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "AppelEtude",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.APPEL_ETUDE],
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(2819).then(__webpack_require__.bind(__webpack_require__, 2819))).AppelEtudeModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "AppelPrimaire",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.APPEL_PRIMAIRE],
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(8854)]).then(__webpack_require__.bind(__webpack_require__, 78854))).AppelPrimaireModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "CahierDeTexte",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CAHIER_DE_TEXTES],
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(1535), __webpack_require__.e(8024), __webpack_require__.e(8262), __webpack_require__.e(9415), __webpack_require__.e(8592), __webpack_require__.e(2268)]).then(__webpack_require__.bind(__webpack_require__, 72268))).CahierDeTexteModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/CahierDeTexte",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CAHIER_DE_TEXTES],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(1535), __webpack_require__.e(8024), __webpack_require__.e(8262), __webpack_require__.e(9415), __webpack_require__.e(8592), __webpack_require__.e(2268)]).then(__webpack_require__.bind(__webpack_require__, 72268))).CahierDeTexteModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/E/:idEleve/CahierDeTexte",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CAHIER_DE_TEXTES],
      checkByPath: true,
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(1535), __webpack_require__.e(8024), __webpack_require__.e(8262), __webpack_require__.e(9415), __webpack_require__.e(8592), __webpack_require__.e(2268)]).then(__webpack_require__.bind(__webpack_require__, 72268))).CahierDeTexteModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "CarnetDeNotes",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CARNET_NOTES]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(1655), __webpack_require__.e(2297), __webpack_require__.e(8558), __webpack_require__.e(867), __webpack_require__.e(60), __webpack_require__.e(8024), __webpack_require__.e(7589)]).then(__webpack_require__.bind(__webpack_require__, 67589))).CarnetDeNotesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "contactEtablissement",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(3049).then(__webpack_require__.bind(__webpack_require__, 23049))).ContactEtablissementModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "ConseilDeClasse",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CONSEIL_DE_CLASSE_NG]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(1655), __webpack_require__.e(2297), __webpack_require__.e(8558), __webpack_require__.e(867), __webpack_require__.e(60), __webpack_require__.e(9246)]).then(__webpack_require__.bind(__webpack_require__, 69246))).ConseilDeClasseModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "C/:idEntity/ConseilDeClasse",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CONSEIL_DE_CLASSE_NG]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(1655), __webpack_require__.e(2297), __webpack_require__.e(8558), __webpack_require__.e(867), __webpack_require__.e(60), __webpack_require__.e(9246)]).then(__webpack_require__.bind(__webpack_require__, 69246))).ConseilDeClasseModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Consultation",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CONSULTATION_ETABLISSEMENT],
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(9951)]).then(__webpack_require__.bind(__webpack_require__, 99951))).ConsultationClassesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "groupesFlexibles",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.GROUPE_FLEX]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(1314)]).then(__webpack_require__.bind(__webpack_require__, 21314))).GroupesFlexiblesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "F/DossierInscription",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.DOSSIER_INSCRIPTION],
      guardTypes: [b.dcH.FAMILLE_RESPONSABLE, b.dcH.FAMILLE_CONJOINT]
    },
    loadChildren: () => __webpack_require__.e(4013).then(__webpack_require__.bind(__webpack_require__, 14013)).then(H => H.DossierInscriptionModule)
  }, {
    path: "F/FamilleCoordonnees",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.COORDONNEES],
      guardTypes: [b.dcH.FAMILLE_RESPONSABLE, b.dcH.FAMILLE_CONJOINT]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(9477).then(__webpack_require__.bind(__webpack_require__, 49477))).CoordonneesFamilleModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "LSL",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.LSL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(1655), __webpack_require__.e(2297), __webpack_require__.e(8558), __webpack_require__.e(8634)]).then(__webpack_require__.bind(__webpack_require__, 18634))).LSLModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "PassageWeb",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.PASSAGEWEB],
      guardTypes: [b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(5488)]).then(__webpack_require__.bind(__webpack_require__, 5488))).PassagesWebModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Portails/:connecteur",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(7879)]).then(__webpack_require__.bind(__webpack_require__, 27879))).PortailsCASModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Postits",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.POSTIT]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(9765).then(__webpack_require__.bind(__webpack_require__, 39765))).PostitsModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "utilisateur",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(5699)]).then(__webpack_require__.bind(__webpack_require__, 85699))).ComptesUtilisateurModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "retourPaiement/:code",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(207).then(__webpack_require__.bind(__webpack_require__, 70207))).RetourPaiementModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/Activites",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.COMMANDE_PASSAGE, b.qzA.RESERVATIONS],
      checkByPath: true,
      guardTypes: [b.dcH.FAMILLE_RESPONSABLE, b.dcH.FAMILLE_CONJOINT, b.dcH.ELEVE]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(2361), __webpack_require__.e(6436)]).then(__webpack_require__.bind(__webpack_require__, 86436))).ActivitesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/Agenda",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(1791)]).then(__webpack_require__.bind(__webpack_require__, 31791))).AgendaModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/CarnetCorrespondance",
    canLoad: [Gt.a, Sn, ki],
    canActivate: [Gt.a, ki],
    data: {
      accessModules: [b.qzA.CARNET_CORRESPONDANCE],
      checkByPath: true,
      hasRedirectModuleRoute: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(1655), __webpack_require__.e(2297), __webpack_require__.e(9379), __webpack_require__.e(8558), __webpack_require__.e(9586), __webpack_require__.e(8947), __webpack_require__.e(6922), __webpack_require__.e(7286)]).then(__webpack_require__.bind(__webpack_require__, 97286))).CarnetCorrespondanceModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/:typeUser/:idUser/CarnetCorrespondance",
    canLoad: [Gt.a, ki],
    canActivate: [Gt.a, ki],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(1655), __webpack_require__.e(2297), __webpack_require__.e(9379), __webpack_require__.e(8558), __webpack_require__.e(9586), __webpack_require__.e(8947), __webpack_require__.e(6922), __webpack_require__.e(7286)]).then(__webpack_require__.bind(__webpack_require__, 97286))).CarnetCorrespondanceModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Compte",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.SITUATION_FINANCIERE]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(2033)]).then(__webpack_require__.bind(__webpack_require__, 52033))).FinanceModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Paiements",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.PAIEMENT_EN_LIGNE]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(8960).then(__webpack_require__.bind(__webpack_require__, 8960))).PaiementEnLigneModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/E/:idEleve/CoordonneesFamille",
    canLoad: [La],
    canActivate: [La],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(1293).then(__webpack_require__.bind(__webpack_require__, 21293))).ConsultationCoordonneesFamilleModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "E/:idEleve/CoordonneesFamille",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    data: {
      guardTypes: [b.dcH.ENTREPRISE]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(1293).then(__webpack_require__.bind(__webpack_require__, 21293))).ConsultationCoordonneesFamilleModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Documents",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(8238).then(__webpack_require__.bind(__webpack_require__, 58238))).DocumentsModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/editions",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(9347)]).then(__webpack_require__.bind(__webpack_require__, 59347))).EditionsModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/E/:idEleve/EmploiDuTemps",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.EDT]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(5300)]).then(__webpack_require__.bind(__webpack_require__, 5300))).EmploiDuTempsModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/EmploiDuTemps",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.EDT],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(5300)]).then(__webpack_require__.bind(__webpack_require__, 5300))).EmploiDuTempsModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/SalleDesProfs",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    data: {
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(9379), __webpack_require__.e(9586), __webpack_require__.e(3374), __webpack_require__.e(1535), __webpack_require__.e(8592), __webpack_require__.e(5701)]).then(__webpack_require__.bind(__webpack_require__, 55701))).EspacesTravailModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/EspacesTravail",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CLOUD, b.qzA.SALLE_DES_PROFS],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(9379), __webpack_require__.e(9586), __webpack_require__.e(3374), __webpack_require__.e(1535), __webpack_require__.e(8592), __webpack_require__.e(5701)]).then(__webpack_require__.bind(__webpack_require__, 55701))).EspacesTravailModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/Messagerie",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.MESSAGERIE],
      checkByPath: false
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(9379), __webpack_require__.e(9586), __webpack_require__.e(3374), __webpack_require__.e(3569), __webpack_require__.e(8262), __webpack_require__.e(5887), __webpack_require__.e(8592), __webpack_require__.e(6119)]).then(__webpack_require__.bind(__webpack_require__, 86119))).MessagerieModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/:typeUser/:idUser/MonCloud",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CLOUD]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(1535), __webpack_require__.e(9266)]).then(__webpack_require__.bind(__webpack_require__, 44678))).CloudModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/MonCloud",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.CLOUD],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(1535), __webpack_require__.e(9266)]).then(__webpack_require__.bind(__webpack_require__, 44678))).CloudModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/RPP",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.REUNIONS_PP],
      checkByPath: true,
      guardTypes: [b.dcH.FAMILLE_RESPONSABLE, b.dcH.FAMILLE_CONJOINT, b.dcH.ENSEIGNANT]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield __webpack_require__.e(9889).then(__webpack_require__.bind(__webpack_require__, 39889))).RPPModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "Stages",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.SUIVI_STAGE]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(9379), __webpack_require__.e(2166)]).then(__webpack_require__.bind(__webpack_require__, 2166))).SuiviStageModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/stages",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.SUIVI_STAGE],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(9379), __webpack_require__.e(2166)]).then(__webpack_require__.bind(__webpack_require__, 2166))).SuiviStageModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/VieDeLaClasse",
    canLoad: [Gt.a, fv, Sn],
    canActivate: [Gt.a, fv],
    data: {
      accessModules: [b.qzA.VIE_DE_LA_CLASSE, b.qzA.CAHIER_DE_TEXTES],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(8592), __webpack_require__.e(5098)]).then(__webpack_require__.bind(__webpack_require__, 21056))).VieDeLaClasseModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/:typeUser/:idUser/VieScolaire",
    canLoad: [Gt.a, im, Sn],
    canActivate: [Gt.a, im],
    data: {
      accessModules: [b.qzA.VIE_SCOLAIRE]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(2297), __webpack_require__.e(8637)]).then(__webpack_require__.bind(__webpack_require__, 78637))).VieScolaireModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/VieScolaire",
    canLoad: [Gt.a, im],
    canActivate: [Gt.a, im],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(2297), __webpack_require__.e(8637)]).then(__webpack_require__.bind(__webpack_require__, 78637))).VieScolaireModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/Commandes",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.COMMANDE_PASSAGE, b.qzA.RESERVATIONS],
      checkByPath: true,
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(2361), __webpack_require__.e(2602)]).then(__webpack_require__.bind(__webpack_require__, 2602))).CommandesPassageModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "CompetencesNumeriques",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.COMP_NUM],
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.PERSONNEL]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(1655), __webpack_require__.e(2297), __webpack_require__.e(8558), __webpack_require__.e(867), __webpack_require__.e(1235)]).then(__webpack_require__.bind(__webpack_require__, 1235))).CompetencesNumeriquesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/qcms",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.QCM],
      guardTypes: [b.dcH.ENSEIGNANT, b.dcH.FAMILLE_CONJOINT, b.dcH.FAMILLE_RESPONSABLE, b.dcH.ELEVE]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(6026)]).then(__webpack_require__.bind(__webpack_require__, 46026))).QCMModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/formulaires-et-sondages",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.EDFORMS]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(9379), __webpack_require__.e(9586), __webpack_require__.e(3374), __webpack_require__.e(8947), __webpack_require__.e(5887), __webpack_require__.e(8592), __webpack_require__.e(5317)]).then(__webpack_require__.bind(__webpack_require__, 75317))).EDFormsModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "E/:idUser/Notes",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.NOTES],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(6035)]).then(__webpack_require__.bind(__webpack_require__, 86035))).NotesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeEntity/:idEntity/E/:idUser/Notes",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(8232), __webpack_require__.e(6035)]).then(__webpack_require__.bind(__webpack_require__, 86035))).NotesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/ManuelsScolaires",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.MANUELS_SCOLAIRES],
      checkByPath: true
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(9415), __webpack_require__.e(6206)]).then(__webpack_require__.bind(__webpack_require__, 96206))).ManuelsScolairesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: "ManuelsScolaires",
    canLoad: [Gt.a, Sn],
    canActivate: [Gt.a],
    data: {
      accessModules: [b.qzA.MANUELS_SCOLAIRES],
      guardTypes: [b.dcH.ENSEIGNANT]
    },
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(9415), __webpack_require__.e(6206)]).then(__webpack_require__.bind(__webpack_require__, 96206))).ManuelsScolairesModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }, {
    path: ":typeUser/:idUser/rendez-vous",
    canLoad: [Gt.a],
    canActivate: [Gt.a],
    loadChildren: function () {
      var H = (0, ls.Z)(function* () {
        return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(1655), __webpack_require__.e(9379), __webpack_require__.e(9586), __webpack_require__.e(3374), __webpack_require__.e(8947), __webpack_require__.e(6922), __webpack_require__.e(8592), __webpack_require__.e(3609)]).then(__webpack_require__.bind(__webpack_require__, 43609))).RDVModule;
      });
      return function () {
        return H.apply(this, arguments);
      };
    }()
  }]
}, {
  path: "repondre-au-qcm",
  outlet: "auxiliaryModal",
  canLoad: [Gt.a],
  canActivate: [Gt.a],
  data: {
    guardTypes: [b.dcH.ENSEIGNANT, b.dcH.FAMILLE_CONJOINT, b.dcH.FAMILLE_RESPONSABLE, b.dcH.ELEVE]
  },
  loadChildren: function () {
    var H = (0, ls.Z)(function* () {
      return (yield __webpack_require__.e(6913).then(__webpack_require__.bind(__webpack_require__, 36913))).QcmRepondreModule;
    });
    return function () {
      return H.apply(this, arguments);
    };
  }()
}, {
  path: "repondre-au-fs",
  outlet: "auxiliaryModal",
  canLoad: [Gt.a],
  canActivate: [Gt.a],
  loadChildren: function () {
    var H = (0, ls.Z)(function* () {
      return (yield __webpack_require__.e(4262).then(__webpack_require__.bind(__webpack_require__, 34262))).EDFormsRepondreModule;
    });
    return function () {
      return H.apply(this, arguments);
    };
  }()
}, {
  path: "open-message",
  outlet: "auxiliaryModal",
  canLoad: [Gt.a],
  canActivate: [Gt.a],
  loadChildren: function () {
    var H = (0, ls.Z)(function* () {
      return (yield Promise.all([__webpack_require__.e(3970), __webpack_require__.e(3569), __webpack_require__.e(5559)]).then(__webpack_require__.bind(__webpack_require__, 7571))).MessagerieViewMessageModule;
    });
    return function () {
      return H.apply(this, arguments);
    };
  }()
}, {
  path: "**",
  redirectTo: "/Accueil"
}];
var H;
let tg = (() => {
  class H {}
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    providers: [{
      provide: rm,
      useValue: Q => {
        const g = Q.paramMap.get("externalUrl");
        window.location.href = g;
      }
    }],
    imports: [bs.Bz.forRoot(Af, {
      onSameUrlNavigation: "reload",
      scrollPositionRestoration: "disabled",
      anchorScrolling: "disabled",
      enableTracing: false,
      relativeLinkResolution: "corrected"
    }), bs.Bz]
  });
  return H;
})();
import * as xf from "71441";
import * as kh from "77579";
const jf = ["toast-component", ""];
function Lh(H, Q) {
  if (H & 1) {
    const g = t.EpF();
    t.TgZ(0, "button", 5);
    t.NdJ("click", function () {
      t.CHM(g);
      const $e = t.oxw();
      return t.KtG($e.remove());
    });
    t.TgZ(1, "span", 6);
    t._uU(2, "×");
    t.qZA()();
  }
}
function Pd(H, Q) {
  if (H & 1) {
    t.ynx(0);
    t._uU(1);
    t.BQk();
  }
  if (H & 2) {
    const g = t.oxw(2);
    t.xp6(1);
    t.hij("[", g.duplicatesCount + 1, "]");
  }
}
function nf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t._uU(1);
    t.YNc(2, Pd, 2, 1, "ng-container", 4);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.Tol(g.options.titleClass);
    t.uIk("aria-label", g.title);
    t.xp6(1);
    t.hij(" ", g.title, " ");
    t.xp6(1);
    t.Q6J("ngIf", g.duplicatesCount);
  }
}
function cy(H, Q) {
  if (H & 1) {
    t._UZ(0, "div", 7);
  }
  if (H & 2) {
    const g = t.oxw();
    t.Tol(g.options.messageClass);
    t.Q6J("innerHTML", g.message, t.oJD);
  }
}
function pv(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 8);
    t._uU(1);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.Tol(g.options.messageClass);
    t.uIk("aria-label", g.message);
    t.xp6(1);
    t.hij(" ", g.message, " ");
  }
}
function Na(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div");
    t._UZ(1, "div", 9);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.xp6(1);
    t.Udp("width", g.width + "%");
  }
}
let rf = (() => {
  class H {
    constructor(g) {
      this.el = g;
    }
    getContainerElement() {
      return this.el.nativeElement;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(t.SBq));
  };
  H.ɵdir = t.lG2({
    type: H,
    selectors: [["", "toastContainer", ""]],
    exportAs: ["toastContainer"]
  });
  return H;
})();
let sm = (() => {
  class H {}
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({});
  return H;
})();
class gv {
  constructor(Q, g) {
    this.component = Q;
    this.injector = g;
  }
  attach(Q, g) {
    this._attachedHost = Q;
    return Q.attach(this, g);
  }
  detach() {
    const Q = this._attachedHost;
    if (Q) {
      this._attachedHost = undefined;
      return Q.detach();
    }
  }
  get isAttached() {
    return this._attachedHost != null;
  }
  setAttachedHost(Q) {
    this._attachedHost = Q;
  }
}
class Uh {
  constructor(Q) {
    this._overlayRef = Q;
    this.duplicatesCount = 0;
    this._afterClosed = new kh.x();
    this._activate = new kh.x();
    this._manualClose = new kh.x();
    this._resetTimeout = new kh.x();
    this._countDuplicate = new kh.x();
  }
  manualClose() {
    this._manualClose.next();
    this._manualClose.complete();
  }
  manualClosed() {
    return this._manualClose.asObservable();
  }
  timeoutReset() {
    return this._resetTimeout.asObservable();
  }
  countDuplicate() {
    return this._countDuplicate.asObservable();
  }
  close() {
    this._overlayRef.detach();
    this._afterClosed.next();
    this._manualClose.next();
    this._afterClosed.complete();
    this._manualClose.complete();
    this._activate.complete();
    this._resetTimeout.complete();
    this._countDuplicate.complete();
  }
  afterClosed() {
    return this._afterClosed.asObservable();
  }
  isInactive() {
    return this._activate.isStopped;
  }
  activate() {
    this._activate.next();
    this._activate.complete();
  }
  afterActivate() {
    return this._activate.asObservable();
  }
  onDuplicate(Q, g) {
    if (Q) {
      this._resetTimeout.next();
    }
    if (g) {
      this._countDuplicate.next(++this.duplicatesCount);
    }
  }
}
class bp {
  constructor(Q, g, ie, $e, Ht, _n) {
    this.toastId = Q;
    this.config = g;
    this.message = ie;
    this.title = $e;
    this.toastType = Ht;
    this.toastRef = _n;
    this._onTap = new kh.x();
    this._onAction = new kh.x();
    this.toastRef.afterClosed().subscribe(() => {
      this._onAction.complete();
      this._onTap.complete();
    });
  }
  triggerTap() {
    this._onTap.next();
    if (this.config.tapToDismiss) {
      this._onTap.complete();
    }
  }
  onTap() {
    return this._onTap.asObservable();
  }
  triggerAction(Q) {
    this._onAction.next(Q);
  }
  onAction() {
    return this._onAction.asObservable();
  }
}
const om = new t.OlP("ToastConfig");
class w0 extends class Nh {
  attach(Q, g) {
    this._attachedPortal = Q;
    return this.attachComponentPortal(Q, g);
  }
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost();
    }
    this._attachedPortal = undefined;
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = undefined;
    }
  }
  setDisposeFn(Q) {
    this._disposeFn = Q;
  }
} {
  constructor(Q, g, ie) {
    super();
    this._hostDomElement = Q;
    this._componentFactoryResolver = g;
    this._appRef = ie;
  }
  attachComponentPortal(Q, g) {
    const ie = this._componentFactoryResolver.resolveComponentFactory(Q.component);
    let $e;
    $e = ie.create(Q.injector);
    this._appRef.attachView($e.hostView);
    this.setDisposeFn(() => {
      this._appRef.detachView($e.hostView);
      $e.destroy();
    });
    if (g) {
      this._hostDomElement.insertBefore(this._getComponentRootNode($e), this._hostDomElement.firstChild);
    } else {
      this._hostDomElement.appendChild(this._getComponentRootNode($e));
    }
    return $e;
  }
  _getComponentRootNode(Q) {
    return Q.hostView.rootNodes[0];
  }
}
class ig {
  constructor(Q) {
    this._portalHost = Q;
  }
  attach(Q, g = true) {
    return this._portalHost.attach(Q, g);
  }
  detach() {
    return this._portalHost.detach();
  }
}
let am = (() => {
  class H {
    constructor(g) {
      this._document = g;
    }
    ngOnDestroy() {
      if (this._containerElement && this._containerElement.parentNode) {
        this._containerElement.parentNode.removeChild(this._containerElement);
      }
    }
    getContainerElement() {
      if (!this._containerElement) {
        this._createContainer();
      }
      return this._containerElement;
    }
    _createContainer() {
      const g = this._document.createElement("div");
      g.classList.add("overlay-container");
      g.setAttribute("aria-live", "polite");
      this._document.body.appendChild(g);
      this._containerElement = g;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(dt.K0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let lm = (() => {
  class H {
    constructor(g, ie, $e, Ht) {
      this._overlayContainer = g;
      this._componentFactoryResolver = ie;
      this._appRef = $e;
      this._document = Ht;
      this._paneElements = new Map();
    }
    create(g, ie) {
      return this._createOverlayRef(this.getPaneElement(g, ie));
    }
    getPaneElement(g = "", ie) {
      if (!this._paneElements.get(ie)) {
        this._paneElements.set(ie, {});
      }
      this._paneElements.get(ie)[g] ||= this._createPaneElement(g, ie);
      return this._paneElements.get(ie)[g];
    }
    _createPaneElement(g, ie) {
      const $e = this._document.createElement("div");
      $e.id = "toast-container";
      $e.classList.add(g);
      $e.classList.add("toast-container");
      if (ie) {
        ie.getContainerElement().appendChild($e);
      } else {
        this._overlayContainer.getContainerElement().appendChild($e);
      }
      return $e;
    }
    _createPortalHost(g) {
      return new w0(g, this._componentFactoryResolver, this._appRef);
    }
    _createOverlayRef(g) {
      return new ig(this._createPortalHost(g));
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(am), t.LFG(t._Vd), t.LFG(t.z2F), t.LFG(dt.K0));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let rg = (() => {
  class H {
    constructor(g, ie, $e, Ht, _n) {
      this.overlay = ie;
      this._injector = $e;
      this.sanitizer = Ht;
      this.ngZone = _n;
      this.currentlyActive = 0;
      this.toasts = [];
      this.index = 0;
      this.toastrConfig = {
        ...g.default,
        ...g.config
      };
      if (g.config.iconClasses) {
        this.toastrConfig.iconClasses = {
          ...g.default.iconClasses,
          ...g.config.iconClasses
        };
      }
    }
    show(g, ie, $e = {}, Ht = "") {
      return this._preBuildNotification(Ht, g, ie, this.applyConfig($e));
    }
    success(g, ie, $e = {}) {
      return this._preBuildNotification(this.toastrConfig.iconClasses.success || "", g, ie, this.applyConfig($e));
    }
    error(g, ie, $e = {}) {
      return this._preBuildNotification(this.toastrConfig.iconClasses.error || "", g, ie, this.applyConfig($e));
    }
    info(g, ie, $e = {}) {
      return this._preBuildNotification(this.toastrConfig.iconClasses.info || "", g, ie, this.applyConfig($e));
    }
    warning(g, ie, $e = {}) {
      return this._preBuildNotification(this.toastrConfig.iconClasses.warning || "", g, ie, this.applyConfig($e));
    }
    clear(g) {
      for (const ie of this.toasts) {
        if (g !== undefined) {
          if (ie.toastId === g) {
            ie.toastRef.manualClose();
            return;
          }
        } else {
          ie.toastRef.manualClose();
        }
      }
    }
    remove(g) {
      const ie = this._findToast(g);
      if (!ie || (ie.activeToast.toastRef.close(), this.toasts.splice(ie.index, 1), this.currentlyActive = this.currentlyActive - 1, !this.toastrConfig.maxOpened || !this.toasts.length)) {
        return false;
      }
      if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
        const $e = this.toasts[this.currentlyActive].toastRef;
        if (!$e.isInactive()) {
          this.currentlyActive = this.currentlyActive + 1;
          $e.activate();
        }
      }
      return true;
    }
    findDuplicate(g = "", ie = "", $e, Ht) {
      const {
        includeTitleDuplicates: _n
      } = this.toastrConfig;
      for (const Un of this.toasts) {
        const ui = _n && Un.title === g;
        if ((!_n || ui) && Un.message === ie) {
          Un.toastRef.onDuplicate($e, Ht);
          return Un;
        }
      }
      return null;
    }
    applyConfig(g = {}) {
      return {
        ...this.toastrConfig,
        ...g
      };
    }
    _findToast(g) {
      for (let ie = 0; ie < this.toasts.length; ie++) {
        if (this.toasts[ie].toastId === g) {
          return {
            index: ie,
            activeToast: this.toasts[ie]
          };
        }
      }
      return null;
    }
    _preBuildNotification(g, ie, $e, Ht) {
      if (Ht.onActivateTick) {
        return this.ngZone.run(() => this._buildNotification(g, ie, $e, Ht));
      } else {
        return this._buildNotification(g, ie, $e, Ht);
      }
    }
    _buildNotification(g, ie, $e, Ht) {
      if (!Ht.toastComponent) {
        throw new Error("toastComponent required");
      }
      const _n = this.findDuplicate($e, ie, this.toastrConfig.resetTimeoutOnDuplicate && Ht.timeOut > 0, this.toastrConfig.countDuplicates);
      if ((this.toastrConfig.includeTitleDuplicates && $e || ie) && this.toastrConfig.preventDuplicates && _n !== null) {
        return _n;
      }
      this.previousToastMessage = ie;
      let Un = false;
      if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
        Un = true;
        if (this.toastrConfig.autoDismiss) {
          this.clear(this.toasts[0].toastId);
        }
      }
      const ui = this.overlay.create(Ht.positionClass, this.overlayContainer);
      this.index = this.index + 1;
      let Vi = ie;
      if (ie && Ht.enableHtml) {
        Vi = this.sanitizer.sanitize(t.q3G.HTML, ie);
      }
      const Wr = new Uh(ui);
      const Cs = new bp(this.index, Ht, Vi, $e, g, Wr);
      const ga = t.zs3.create({
        providers: [{
          provide: bp,
          useValue: Cs
        }],
        parent: this._injector
      });
      const aa = new gv(Ht.toastComponent, ga);
      const Ma = ui.attach(aa, Ht.newestOnTop);
      Wr.componentInstance = Ma.instance;
      const Tl = {
        toastId: this.index,
        title: $e || "",
        message: ie || "",
        toastRef: Wr,
        onShown: Wr.afterActivate(),
        onHidden: Wr.afterClosed(),
        onTap: Cs.onTap(),
        onAction: Cs.onAction(),
        portal: Ma
      };
      if (!Un) {
        this.currentlyActive = this.currentlyActive + 1;
        setTimeout(() => {
          Tl.toastRef.activate();
        });
      }
      this.toasts.push(Tl);
      return Tl;
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(om), t.LFG(lm), t.LFG(t.zs3), t.LFG(i.H7), t.LFG(t.R0b));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
const yv = {
  maxOpened: 0,
  autoDismiss: false,
  newestOnTop: true,
  preventDuplicates: false,
  countDuplicates: false,
  resetTimeoutOnDuplicate: false,
  includeTitleDuplicates: false,
  iconClasses: {
    error: "toast-error",
    info: "toast-info",
    success: "toast-success",
    warning: "toast-warning"
  },
  closeButton: false,
  disableTimeOut: false,
  timeOut: 5000,
  extendedTimeOut: 1000,
  enableHtml: false,
  progressBar: false,
  toastClass: "ngx-toastr",
  positionClass: "toast-top-right",
  titleClass: "toast-title",
  messageClass: "toast-message",
  easing: "ease-in",
  easeTime: 300,
  tapToDismiss: true,
  onActivateTick: false,
  progressAnimation: "decreasing",
  payload: null,
  toastComponent: (() => {
    class H {
      constructor(g, ie, $e) {
        this.toastrService = g;
        this.toastPackage = ie;
        this.appRef = $e;
        this.width = -1;
        this.toastClasses = "";
        this.state = "inactive";
        this.message = ie.message;
        this.title = ie.title;
        this.options = ie.config;
        this.originalTimeout = ie.config.timeOut;
        this.toastClasses = `${ie.toastType} ${ie.config.toastClass}`;
        this.sub = ie.toastRef.afterActivate().subscribe(() => {
          this.activateToast();
        });
        this.sub1 = ie.toastRef.manualClosed().subscribe(() => {
          this.remove();
        });
        this.sub2 = ie.toastRef.timeoutReset().subscribe(() => {
          this.resetTimeout();
        });
        this.sub3 = ie.toastRef.countDuplicate().subscribe(Ht => {
          this.duplicatesCount = Ht;
        });
      }
      get displayStyle() {
        if (this.state === "inactive") {
          return "none";
        }
      }
      ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
      }
      activateToast() {
        this.state = "active";
        if (this.options.disableTimeOut !== true && this.options.disableTimeOut !== "timeOut" && this.options.timeOut) {
          this.timeout = setTimeout(() => {
            this.remove();
          }, this.options.timeOut);
          this.hideTime = new Date().getTime() + this.options.timeOut;
          if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
          }
        }
        if (this.options.onActivateTick) {
          this.appRef.tick();
        }
      }
      updateProgress() {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
          return;
        }
        const g = new Date().getTime();
        this.width = (this.hideTime - g) / this.options.timeOut * 100;
        if (this.options.progressAnimation === "increasing") {
          this.width = 100 - this.width;
        }
        if (this.width <= 0) {
          this.width = 0;
        }
        if (this.width >= 100) {
          this.width = 100;
        }
      }
      resetTimeout() {
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = "active";
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
        this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
        this.width = -1;
        if (this.options.progressBar) {
          this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
      }
      remove() {
        if (this.state !== "removed") {
          clearTimeout(this.timeout);
          this.state = "removed";
          this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
        }
      }
      tapToast() {
        if (this.state !== "removed") {
          this.toastPackage.triggerTap();
          if (this.options.tapToDismiss) {
            this.remove();
          }
        }
      }
      stickAround() {
        if (this.state !== "removed") {
          clearTimeout(this.timeout);
          this.options.timeOut = 0;
          this.hideTime = 0;
          clearInterval(this.intervalId);
          this.width = 0;
        }
      }
      delayedHideToast() {
        if (this.options.disableTimeOut !== true && this.options.disableTimeOut !== "extendedTimeOut" && this.options.extendedTimeOut !== 0 && this.state !== "removed") {
          this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
          this.options.timeOut = this.options.extendedTimeOut;
          this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
          this.width = -1;
          if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
          }
        }
      }
    }
    H.ɵfac = function (g) {
      return new (g || H)(t.Y36(rg), t.Y36(bp), t.Y36(t.z2F));
    };
    H.ɵcmp = t.Xpm({
      type: H,
      selectors: [["", "toast-component", ""]],
      hostVars: 4,
      hostBindings: function (g, ie) {
        if (g & 1) {
          t.NdJ("click", function () {
            return ie.tapToast();
          })("mouseenter", function () {
            return ie.stickAround();
          })("mouseleave", function () {
            return ie.delayedHideToast();
          });
        }
        if (g & 2) {
          t.Tol(ie.toastClasses);
          t.Udp("display", ie.displayStyle);
        }
      },
      attrs: jf,
      decls: 5,
      vars: 5,
      consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
      template: function (g, ie) {
        if (g & 1) {
          t.YNc(0, Lh, 3, 0, "button", 0);
          t.YNc(1, nf, 3, 5, "div", 1);
          t.YNc(2, cy, 1, 3, "div", 2);
          t.YNc(3, pv, 2, 4, "div", 3);
          t.YNc(4, Na, 2, 2, "div", 4);
        }
        if (g & 2) {
          t.Q6J("ngIf", ie.options.closeButton);
          t.xp6(1);
          t.Q6J("ngIf", ie.title);
          t.xp6(1);
          t.Q6J("ngIf", ie.message && ie.options.enableHtml);
          t.xp6(1);
          t.Q6J("ngIf", ie.message && !ie.options.enableHtml);
          t.xp6(1);
          t.Q6J("ngIf", ie.options.progressBar);
        }
      },
      dependencies: [dt.O5],
      encapsulation: 2
    });
    return H;
  })()
};
let um = (() => {
  class H {
    static forRoot(g = {}) {
      return {
        ngModule: H,
        providers: [{
          provide: om,
          useValue: {
            default: yv,
            config: g
          }
        }]
      };
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    imports: [dt.ez]
  });
  return H;
})();
let Vh = (() => {
  class H {
    constructor(g, ie) {
      this.modalService = g;
      this.modalRef = ie;
    }
    redirectToLogin() {
      this.modalService.setDismissReason("backLogin");
      this.modalRef.hide();
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(tl.tT), t.Y36(tl.UZ));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["ed-modal-reconnexion"]],
    decls: 16,
    vars: 1,
    consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-subtitle"], [1, "modal-body"], [1, "login-container", "session-expire"], [1, "text-center"], ["src", "/assets/images/logoEcoleDirecte.png", "alt", "Logo du site EcoleDirecte"], ["id", "bloc-connexion", 1, "form-box", 3, "isRelogin"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-link", 3, "click"]],
    template: function (g, ie) {
      if (g & 1) {
        t.TgZ(0, "div", 0)(1, "div")(2, "h3", 1);
        t._uU(3, "Votre session a expiré");
        t.qZA();
        t.TgZ(4, "p", 2);
        t._uU(5, "Vous devez vous reconnecter pour poursuivre");
        t.qZA()()();
        t.TgZ(6, "div", 3)(7, "div", 4)(8, "header", 5);
        t._UZ(9, "img", 6);
        t.TgZ(10, "h1");
        t._uU(11, "EcoleDirecte");
        t.qZA()();
        t._UZ(12, "ed-login-form", 7);
        t.qZA()();
        t.TgZ(13, "div", 8)(14, "button", 9);
        t.NdJ("click", function () {
          return ie.redirectToLogin();
        });
        t._uU(15, "Retour à l'accueil");
        t.qZA()();
      }
      if (g & 2) {
        t.xp6(12);
        t.Q6J("isRelogin", true);
      }
    },
    dependencies: [_p]
  });
  return H;
})();
let S0 = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n, Un, ui) {
      super();
      this.accountService = g;
      this.authStore = ie;
      this.httpAccessFailedService = $e;
      this.modalService = Ht;
      this.router = _n;
      this.toastr = Un;
      this.uiService = ui;
    }
    startObserving() {
      this.uiService.select$().pipe((0, Sa.h)(g => g.typeUiState === b.G5n.event), (0, gl.R)(this.componentDestroyed$)).subscribe(g => this.displayEvent(g));
    }
    presentNotification(g) {
      this.toastr.show(g.message, g.title, {
        ...g.custom
      }, this.toastr.toastrConfig.iconClasses[g.type]);
    }
    openModalReconnexion() {
      if (Object.isExists(this.authStore.currentUser) && this.authStore.currentUser.isLoggedInFromOAuth) {
        this.uiService.notifyEvent(b.DOJ.genericSuccess, `La session d'authentification depuis "${this.authStore.currentUser.oAuthParams.libelle}" a expir\xe9`, "Votre session est expirée");
        this.accountService.logout();
        return;
      }
      if (this.httpAccessFailedService.nbFailedRequests <= 1) {
        const g = {
          id: this.modalService.getModalsCount() + 1,
          keyboard: false,
          ignoreBackdropClick: true
        };
        this.modalService.show(Vh, g);
        this.modalService.onHide.pipe((0, Io.q)(1)).subscribe(ie => {
          if (ie === "backLogin") {
            this.accountService.logout();
          }
        });
      }
    }
    displayEvent(g) {
      let ie = {
        type: "error",
        title: g.title,
        message: g.message,
        custom: {
          toastClass: "ngx-toastr fa fa-warning",
          timeOut: 5000
        }
      };
      switch (g.action) {
        case b.DOJ.userAccessTokenInvalid:
          this.openModalReconnexion();
          return;
        case b.DOJ.e403:
          this.router.navigateByUrl("/403").catch($e => console.error("displayEvent navigate to /403"));
          break;
        case b.DOJ.e404:
          this.router.navigateByUrl("/404").catch($e => console.error("displayEvent navigate to /404"));
          break;
        case b.DOJ.genericInfo:
          ie = {
            type: "info",
            title: g.title,
            message: g.message,
            custom: {
              toastClass: "ngx-toastr " + g.icon,
              timeOut: 5000
            }
          };
          break;
        case b.DOJ.genericSuccess:
          ie = {
            type: "success",
            title: g.title,
            message: g.message,
            custom: {
              toastClass: "ngx-toastr " + (g.icon !== "" ? g.icon : "fa fa-check")
            }
          };
          break;
        case b.DOJ.genericWarning:
          ie = {
            type: "warning",
            title: g.title,
            message: g.message,
            custom: {
              toastClass: "ngx-toastr " + g.icon,
              timeOut: 5000
            }
          };
          break;
        case b.DOJ.ePersistant:
          ie = {
            type: "error",
            title: g.title,
            message: g.message,
            custom: {
              toastClass: "ngx-toastr fa fa-warning",
              closeButton: true,
              disableTimeOut: true
            }
          };
          break;
        case b.DOJ.genericError:
          break;
        default:
          console.error(new Error(g.message));
          return;
      }
      this.presentNotification(ie);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(Yo.B), t.LFG(b.CnD), t.LFG(b.Lo), t.LFG(tl.tT), t.LFG(bs.F0), t.LFG(rg), t.LFG(b.VLf));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
import * as _h from "94702";
function Id(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 4);
    t._UZ(1, "router-outlet")(2, "router-outlet", 5);
    t.qZA();
  }
  if (H & 2) {
    const g = t.oxw();
    t.Q6J("ngBusy", g.loader);
  }
}
const Zu = function () {
  return [];
};
function Cf(H, Q) {
  if (H & 1) {
    t.TgZ(0, "div", 6)(1, "div", 7)(2, "header");
    t._UZ(3, "img", 8);
    t.TgZ(4, "h1");
    t._uU(5, "EcoleDirecte");
    t.qZA()();
    t.TgZ(6, "strong");
    t._uU(7, "Bienvenue sur le portail EcoleDirecte. Espace famille, élève, personnel, enseignant ...");
    t.qZA()();
    t.TgZ(8, "div", 9)(9, "p");
    t._UZ(10, "i", 10);
    t.TgZ(11, "strong");
    t._uU(12, "Veuillez patienter pendant le chargement du site EcoleDirecte");
    t.qZA();
    t.TgZ(13, "em");
    t._uU(14, " Si au bout de quelques minutes cette page reste affichée, ");
    t.TgZ(15, "a", 11);
    t._uU(16, "cliquez ici");
    t.qZA()()()()();
  }
  if (H & 2) {
    t.xp6(15);
    t.Q6J("routerLink", t.DdM(1, Zu));
  }
}
let Eh = (() => {
  class H extends (0, b.kCV)() {
    constructor(g, ie, $e, Ht, _n, Un, ui, Vi, Wr, Cs, Ea, ga) {
      super();
      this.authStore = g;
      this.credentialsStore = ie;
      this.uiNotifierService = $e;
      this.uiService = Ht;
      this.router = _n;
      this.activatedRoute = Un;
      this.location = ui;
      this.etablissementService = Vi;
      this.loaderService = Wr;
      this.menuStore = Cs;
      this.localeService = Ea;
      this.toastrService = ga;
      (0, hv.Dc)("bs5");
      xf.cn.invalidDate = "";
      this.localeService.use("fr");
      (0, xf.Wf)("fr", xf.cn);
      this.router.events.pipe((0, Sa.h)(aa => aa instanceof bs.m2), (0, Hs.b)(aa => {
        if (this.authStore.isLoggedIn()) {
          this.manageSubMenus();
        }
      }), (0, gl.R)(this.componentDestroyed$)).subscribe();
    }
    ngOnInit() {
      this.toastrService.overlayContainer = this.toastContainer;
      this.uiNotifierService.startObserving();
      this.isAppReady = (0, Sc.D)([this.credentialsStore.ready(), this.authStore.ready()]).subscribe();
    }
    manageSubMenus() {
      let g;
      let ie;
      let $e;
      let Ht = false;
      const _n = this.location.path();
      const Un = [b.qzA.CARNET_CORRESPONDANCE];
      for (const Wr of Un) {
        const Cs = this.menuStore.getMenuBlockItem(this.authStore.currentUser.id, this.authStore.currentUser.typeCompte, Wr);
        if (Object.isExists(Cs) && _n.startsWith(Cs.action.route)) {
          this.authStore.removeSubMenu();
          return;
        }
      }
      let ui = /\/(C|G)\/(\d+)\/E\/(\d+)\/|(C|G|E)\/(\d+)/;
      let Vi = ui.exec(_n);
      if (Array.isArray(Vi)) {
        if (Object.isExists(Vi[4]) && Object.isExists(Vi[5])) {
          if (Vi[4] === b.dcH.ELEVE) {
            ie = +Vi[5];
          } else {
            $e = Vi[4];
            g = +Vi[5];
          }
        } else if (Object.isExists(Vi[1]) && Object.isExists(Vi[2]) && Object.isExists(Vi[3])) {
          $e = Vi[1];
          g = +Vi[2];
          ie = +Vi[3];
        }
        if (Object.isExists(g) && Object.isExists($e)) {
          Ht = true;
        }
      }
      if (!Ht) {
        ui = /\/Consultation\?(?:.*&)?idEntity=[^&]*/;
        Vi = ui.exec(_n);
        if (Array.isArray(Vi) && Vi.length >= 1) {
          ui = /([^?]+)(\?.*)?/;
          const Wr = ui.exec(Vi[0]);
          if (Array.isArray(Wr) && Wr.length >= 2) {
            const Cs = new URLSearchParams(Wr[2]);
            $e = Cs.get("typeEntity");
            g = +Cs.get("idEntity");
          }
        }
        if (Object.isExists(g) && Object.isExists($e)) {
          Ht = true;
        }
      }
      if (Ht) {
        if (g > 0 && ($e === b.JBS.CLASSE || $e === b.JBS.GROUPE)) {
          this.loader = this.loaderService.show(this);
          this.etablissementService.getClasseGroupeById(g, $e).pipe((0, Hs.b)(Wr => {
            this.authStore.toggleMenuClasseOuGroupe(g, b.o2q[$e], Wr, true);
            this.authStore.removeSubMenu(this.authStore.isProfesseur() ? b.o2q.PE : b.o2q.AE);
          }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(Wr => this.uiService.notifyErrorThenEmpty(Wr, true, "Consultation", "fa fa-warning"))).subscribe();
          if (Object.isExists(ie)) {
            this.etablissementService.getEleveById(ie).pipe((0, Hs.b)(Wr => {
              this.authStore.toggleMenuProfOuPersonnelEleve(this.authStore.currentUser, g, b.o2q[$e], Wr, true);
            }), (0, As.x)(() => this.loaderService.hide(this)), (0, lo.K)(Wr => this.uiService.notifyErrorThenEmpty(Wr, true, "Consultation", "fa fa-warning"))).subscribe();
          }
        }
      } else if (Object.isExists(ie)) {
        this.authStore.toggleMenuFamilleEleve(this.authStore.currentUser, ie);
      } else {
        this.authStore.removeSubMenu();
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.Y36(b.CnD), t.Y36(b.dSF), t.Y36(S0), t.Y36(b.VLf), t.Y36(bs.F0), t.Y36(bs.gz), t.Y36(dt.Ye), t.Y36(b.Xmb), t.Y36(gr.S), t.Y36(b.wbX), t.Y36(_h.vL), t.Y36(rg));
  };
  H.ɵcmp = t.Xpm({
    type: H,
    selectors: [["app-root"]],
    viewQuery: function (g, ie) {
      if (g & 1) {
        t.Gf(rf, 7);
      }
      if (g & 2) {
        let $e;
        if (t.iGM($e = t.CRH())) {
          ie.toastContainer = $e.first;
        }
      }
    },
    features: [t.qOj],
    decls: 6,
    vars: 2,
    consts: [["class", "container-principal", 3, "ngBusy", 4, "ngIf", "ngIfElse"], ["aria-live", "polite", "toastContainer", ""], ["id", "preloadfont"], ["chargementencours", ""], [1, "container-principal", 3, "ngBusy"], ["name", "auxiliaryModal"], ["id", "chargementencours", 1, "row"], [1, "col-xl-4", "col-lg-5", "load-container", "login-container"], ["alt", "Logo du site EcoleDirecte", "src", "/assets/images/logoEcoleDirecte.png"], [1, "col-xl-8", "col-lg-7", "info-container"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-pulse"], ["href", "", "onclick", "window.location.href='/?t='+Math.random()", "aria-label", "Actualiser le site", 3, "routerLink"]],
    template: function (g, ie) {
      if (g & 1) {
        t.YNc(0, Id, 3, 1, "div", 0);
        t._UZ(1, "div", 1);
        t.TgZ(2, "div", 2);
        t._uU(3, ".");
        t.qZA();
        t.YNc(4, Cf, 17, 2, "ng-template", null, 3, t.W1O);
      }
      if (g & 2) {
        const $e = t.MAs(5);
        t.Q6J("ngIf", ie.isAppReady)("ngIfElse", $e);
      }
    },
    dependencies: [dt.O5, bs.lC, bs.yS, rf, Wa.DC],
    styles: ["#chargementencours[_ngcontent-%COMP%]   .load-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;position:relative;padding:80px!important;min-height:100vh}#chargementencours[_ngcontent-%COMP%]   .load-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:18px}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:100px 0 5vh}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:15px;color:var(--dark-primary-color);margin-top:5px;text-align:center}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:0 auto}#chargementencours[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{position:relative;display:flex;min-height:100vh;background:linear-gradient(var(--dark-primary-color) 0%,var(--light-primary-color) 100%)}#chargementencours[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:auto;color:#fff;text-align:center}#chargementencours[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:60px}#chargementencours[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin:30px 0;font-size:20px}#chargementencours[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:18px}@media screen and (max-width: 1280px){#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin:0}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   #bloc-connexion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   #bloc-connexion[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], #chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   #bloc-connexion[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{height:30px}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%]{margin:0}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   .mdp-lost[_ngcontent-%COMP%]{margin:1vh 0 4vh}#chargementencours[_ngcontent-%COMP%]   .load-container.login-container[_ngcontent-%COMP%]   span#show-password[_ngcontent-%COMP%]{bottom:-33px}}#preloadfont[_ngcontent-%COMP%]{font-family:Bahagia;opacity:0;height:0;width:0}"]
  });
  return H;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const dc = undefined;
const Qf = ["fr", [["AM", "PM"], dc, dc], dc, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], dc, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]], dc, [["av. J.-C.", "ap. J.-C."], dc, ["avant Jésus-Christ", "après Jésus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'à' {0}", dc], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", {
  ARS: ["$AR", "$"],
  AUD: ["$AU", "$"],
  BEF: ["FB"],
  BMD: ["$BM", "$"],
  BND: ["$BN", "$"],
  BYN: [dc, "р."],
  BZD: ["$BZ", "$"],
  CAD: ["$CA", "$"],
  CLP: ["$CL", "$"],
  CNY: [dc, "¥"],
  COP: ["$CO", "$"],
  CYP: ["£CY"],
  EGP: [dc, "£E"],
  FJD: ["$FJ", "$"],
  FKP: ["£FK", "£"],
  FRF: ["F"],
  GBP: ["£GB", "£"],
  GIP: ["£GI", "£"],
  HKD: [dc, "$"],
  IEP: ["£IE"],
  ILP: ["£IL"],
  ITL: ["₤IT"],
  JPY: [dc, "¥"],
  KMF: [dc, "FC"],
  LBP: ["£LB", "£L"],
  MTP: ["£MT"],
  MXN: ["$MX", "$"],
  NAD: ["$NA", "$"],
  NIO: [dc, "$C"],
  NZD: ["$NZ", "$"],
  PHP: [dc, "₱"],
  RHD: ["$RH"],
  RON: [dc, "L"],
  RWF: [dc, "FR"],
  SBD: ["$SB", "$"],
  SGD: ["$SG", "$"],
  SRD: ["$SR", "$"],
  TOP: [dc, "$T"],
  TTD: ["$TT", "$"],
  TWD: [dc, "NT$"],
  USD: ["$US", "$"],
  UYU: ["$UY", "$"],
  WST: ["$WS"],
  XCD: [dc, "$"],
  XPF: ["FCFP"],
  ZMW: [dc, "Kw"]
}, "ltr", function _v(H) {
  const g = Math.floor(Math.abs(H));
  const ie = H.toString().replace(/^[^.]*\.?/, "").length;
  const $e = parseInt(H.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (g === 0 || g === 1) {
    return 1;
  } else if ($e === 0 && g !== 0 && g % 1000000 == 0 && ie === 0 || $e < 0 || $e > 5) {
    return 4;
  } else {
    return 5;
  }
}];
function Sf(H, Q) {
  if (H == null) {
    throw new Error("Unexpected " + H + " value: " + Q);
  }
  return H;
}
const bh = new t.OlP("MATOMO_CONFIGURATION");
const Tf = new t.OlP("INTERNAL_MATOMO_CONFIGURATION", {
  factory: () => ({
    disabled: false,
    enableLinkTracking: true,
    trackAppInitialLoad: false,
    requireConsent: zd.NONE,
    enableJSErrorTracking: false,
    ...Sf((0, t.f3M)(bh, t.XFs.Optional), "No Matomo configuration found! Have you included Matomo module using NgxMatomoTrackerModule.forRoot() ?")
  })
});
var Jf = (() => {
  (function (H) {
    H[H.AUTO = 0] = "AUTO";
    H[H.MANUAL = 1] = "MANUAL";
    H[H.AUTO_DEFERRED = 2] = "AUTO_DEFERRED";
  })(Jf ||= {});
  return Jf;
})();
var zd = (() => {
  (function (H) {
    H[H.NONE = 0] = "NONE";
    H[H.COOKIE = 1] = "COOKIE";
    H[H.TRACKING = 2] = "TRACKING";
  })(zd ||= {});
  return zd;
})();
function dm(H) {
  return H.siteId != null && H.trackerUrl != null;
}
function fm(H) {
  return Array.isArray(H.trackers);
}
function $f() {
  window._paq = window._paq || [];
}
let Wh = (() => {
  class H {
    trackPageView(g) {
      this.push(["trackPageView", g]);
    }
    trackEvent(g, ie, $e, Ht) {
      this.push(["trackEvent", g, ie, $e, Ht]);
    }
    trackSiteSearch(g, ie, $e) {
      this.push(["trackSiteSearch", g, ie, $e]);
    }
    trackGoal(g, ie) {
      this.push(["trackGoal", g, ie]);
    }
    trackLink(g, ie) {
      this.push(["trackLink", g, ie]);
    }
    trackAllContentImpressions() {
      this.push(["trackAllContentImpressions"]);
    }
    trackVisibleContentImpressions(g, ie) {
      this.push(["trackVisibleContentImpressions", g, ie]);
    }
    trackContentImpressionsWithinNode(g) {
      this.push(["trackContentImpressionsWithinNode", g]);
    }
    trackContentInteractionNode(g, ie) {
      this.push(["trackContentInteractionNode", g, ie]);
    }
    trackContentImpression(g, ie, $e) {
      this.push(["trackContentImpression", g, ie, $e]);
    }
    trackContentInteraction(g, ie, $e, Ht) {
      this.push(["trackContentInteraction", g, ie, $e, Ht]);
    }
    logAllContentBlocksOnPage() {
      this.push(["logAllContentBlocksOnPage"]);
    }
    ping() {
      this.push(["ping"]);
    }
    enableHeartBeatTimer(g) {
      this.push(["enableHeartBeatTimer", g]);
    }
    enableLinkTracking(g = false) {
      this.push(["enableLinkTracking", g]);
    }
    disablePerformanceTracking() {
      this.push(["disablePerformanceTracking"]);
    }
    enableCrossDomainLinking() {
      this.push(["enableCrossDomainLinking"]);
    }
    setCrossDomainLinkingTimeout(g) {
      this.push(["setCrossDomainLinkingTimeout", g]);
    }
    getCrossDomainLinkingUrlParameter() {
      return this.get("getCrossDomainLinkingUrlParameter");
    }
    setDocumentTitle(g) {
      this.push(["setDocumentTitle", g]);
    }
    setDomains(g) {
      this.push(["setDomains", g]);
    }
    setCustomUrl(g) {
      this.push(["setCustomUrl", g]);
    }
    setReferrerUrl(g) {
      this.push(["setReferrerUrl", g]);
    }
    setSiteId(g) {
      this.push(["setSiteId", g]);
    }
    setApiUrl(g) {
      this.push(["setApiUrl", g]);
    }
    setTrackerUrl(g) {
      this.push(["setTrackerUrl", g]);
    }
    addTracker(g, ie) {
      this.push(["addTracker", g, ie]);
    }
    getMatomoUrl() {
      return this.get("getMatomoUrl");
    }
    getCurrentUrl() {
      return this.get("getCurrentUrl");
    }
    setDownloadClasses(g) {
      this.push(["setDownloadClasses", g]);
    }
    setDownloadExtensions(g) {
      this.push(["setDownloadExtensions", g]);
    }
    addDownloadExtensions(g) {
      this.push(["addDownloadExtensions", g]);
    }
    removeDownloadExtensions(g) {
      this.push(["removeDownloadExtensions", g]);
    }
    setIgnoreClasses(g) {
      this.push(["setIgnoreClasses", g]);
    }
    setLinkClasses(g) {
      this.push(["setLinkClasses", g]);
    }
    setLinkTrackingTimer(g) {
      this.push(["setLinkTrackingTimer", g]);
    }
    getLinkTrackingTimer() {
      return this.get("getLinkTrackingTimer");
    }
    discardHashTag(g) {
      this.push(["discardHashTag", g]);
    }
    setGenerationTimeMs(g) {
      this.push(["setGenerationTimeMs", g]);
    }
    setPagePerformanceTiming(g, ie, $e, Ht, _n, Un) {
      let ui;
      if (typeof g == "object" && g) {
        ui = g.networkTimeInMs;
        ie = g.serverTimeInMs;
        $e = g.transferTimeInMs;
        Ht = g.domProcessingTimeInMs;
        _n = g.domCompletionTimeInMs;
        Un = g.onloadTimeInMs;
      } else {
        ui = g;
      }
      this.push(["setPagePerformanceTiming", ui, ie, $e, Ht, _n, Un]);
    }
    appendToTrackingUrl(g) {
      this.push(["appendToTrackingUrl", g]);
    }
    setDoNotTrack(g) {
      this.push(["setDoNotTrack", g]);
    }
    killFrame() {
      this.push(["killFrame"]);
    }
    redirectFile(g) {
      this.push(["redirectFile", g]);
    }
    setHeartBeatTimer(g, ie) {
      this.push(["setHeartBeatTimer", g, ie]);
    }
    getVisitorId() {
      return this.get("getVisitorId");
    }
    setVisitorId(g) {
      this.push(["setVisitorId", g]);
    }
    getVisitorInfo() {
      return this.get("getVisitorInfo");
    }
    getAttributionInfo() {
      return this.get("getAttributionInfo");
    }
    getAttributionCampaignName() {
      return this.get("getAttributionCampaignName");
    }
    getAttributionCampaignKeyword() {
      return this.get("getAttributionCampaignKeyword");
    }
    getAttributionReferrerTimestamp() {
      return this.get("getAttributionReferrerTimestamp");
    }
    getAttributionReferrerUrl() {
      return this.get("getAttributionReferrerUrl");
    }
    getUserId() {
      return this.get("getUserId");
    }
    setUserId(g) {
      this.push(["setUserId", g]);
    }
    resetUserId() {
      this.push(["resetUserId"]);
    }
    setCustomVariable(g, ie, $e, Ht) {
      this.push(["setCustomVariable", g, ie, $e, Ht]);
    }
    deleteCustomVariable(g, ie) {
      this.push(["deleteCustomVariable", g, ie]);
    }
    deleteCustomVariables(g) {
      this.push(["deleteCustomVariables", g]);
    }
    getCustomVariable(g, ie) {
      return this.pushFn($e => $e.getCustomVariable(g, ie));
    }
    storeCustomVariablesInCookie() {
      this.push(["storeCustomVariablesInCookie"]);
    }
    setCustomDimension(g, ie) {
      this.push(["setCustomDimension", g, ie]);
    }
    deleteCustomDimension(g) {
      this.push(["deleteCustomDimension", g]);
    }
    getCustomDimension(g) {
      return this.pushFn(ie => ie.getCustomDimension(g));
    }
    setCampaignNameKey(g) {
      this.push(["setCampaignNameKey", g]);
    }
    setCampaignKeywordKey(g) {
      this.push(["setCampaignKeywordKey", g]);
    }
    setConversionAttributionFirstReferrer(g) {
      this.push(["setConversionAttributionFirstReferrer", g]);
    }
    setEcommerceView(g, ie, $e, Ht) {
      if (!function ag(H) {
        return typeof H == "object" && Object.keys(H).length === 1 && H.productCategory != null;
      }(g)) {
        if (function Hh(H) {
          return typeof H == "object" && "productSKU" in H;
        }(g)) {
          this.push(["setEcommerceView", g.productSKU, g.productName, g.productCategory, g.price]);
        } else {
          this.push(["setEcommerceView", g, ie, $e, Ht]);
        }
      } else {
        this.push(["setEcommerceView", false, false, g.productCategory]);
      }
    }
    addEcommerceItem(g, ie, $e, Ht, _n) {
      this.push(typeof g == "string" ? ["addEcommerceItem", g, ie, $e, Ht, _n] : ["addEcommerceItem", g.productSKU, g.productName, g.productCategory, g.price, g.quantity]);
    }
    removeEcommerceItem(g) {
      this.push(["removeEcommerceItem", g]);
    }
    clearEcommerceCart() {
      this.push(["clearEcommerceCart"]);
    }
    getEcommerceItems() {
      return this.get("getEcommerceItems");
    }
    trackEcommerceCartUpdate(g) {
      this.push(["trackEcommerceCartUpdate", g]);
    }
    trackEcommerceOrder(g, ie, $e, Ht, _n, Un) {
      this.push(["trackEcommerceOrder", g, ie, $e, Ht, _n, Un]);
    }
    requireConsent() {
      this.push(["requireConsent"]);
    }
    setConsentGiven() {
      this.push(["setConsentGiven"]);
    }
    rememberConsentGiven(g) {
      this.push(["rememberConsentGiven", g]);
    }
    forgetConsentGiven() {
      this.push(["forgetConsentGiven"]);
    }
    hasRememberedConsent() {
      return this.get("hasRememberedConsent");
    }
    getRememberedConsent() {
      return this.get("getRememberedConsent");
    }
    isConsentRequired() {
      return this.get("isConsentRequired");
    }
    requireCookieConsent() {
      this.push(["requireCookieConsent"]);
    }
    setCookieConsentGiven() {
      this.push(["setCookieConsentGiven"]);
    }
    rememberCookieConsentGiven(g) {
      this.push(["rememberCookieConsentGiven", g]);
    }
    forgetCookieConsentGiven() {
      this.push(["forgetCookieConsentGiven"]);
    }
    areCookiesEnabled() {
      return this.get("areCookiesEnabled");
    }
    optUserOut() {
      this.push(["optUserOut"]);
    }
    forgetUserOptOut() {
      this.push(["forgetUserOptOut"]);
    }
    isUserOptedOut() {
      return this.get("isUserOptedOut");
    }
    disableCookies() {
      this.push(["disableCookies"]);
    }
    deleteCookies() {
      this.push(["deleteCookies"]);
    }
    hasCookies() {
      return this.get("hasCookies");
    }
    setCookieNamePrefix(g) {
      this.push(["setCookieNamePrefix", g]);
    }
    setCookieDomain(g) {
      this.push(["setCookieDomain", g]);
    }
    setCookiePath(g) {
      this.push(["setCookiePath", g]);
    }
    setSecureCookie(g) {
      this.push(["setSecureCookie", g]);
    }
    setCookieSameSite(g) {
      this.push(["setCookieSameSite", g]);
    }
    setVisitorCookieTimeout(g) {
      this.push(["setVisitorCookieTimeout", g]);
    }
    setReferralCookieTimeout(g) {
      this.push(["setReferralCookieTimeout", g]);
    }
    setSessionCookieTimeout(g) {
      this.push(["setSessionCookieTimeout", g]);
    }
    addListener(g) {
      this.push(["addListener", g]);
    }
    setRequestMethod(g) {
      this.push(["setRequestMethod", g]);
    }
    setCustomRequestProcessing(g) {
      this.push(["setCustomRequestProcessing", g]);
    }
    setRequestContentType(g) {
      this.push(["setRequestContentType", g]);
    }
    disableQueueRequest() {
      this.push(["disableQueueRequest"]);
    }
    setRequestQueueInterval(g) {
      this.push(["setRequestQueueInterval", g]);
    }
    disableAlwaysUseSendBeacon() {
      this.push(["disableAlwaysUseSendBeacon"]);
    }
    alwaysUseSendBeacon() {
      this.push(["alwaysUseSendBeacon"]);
    }
    enableJSErrorTracking() {
      this.push(["enableJSErrorTracking"]);
    }
    get(g) {
      return this.pushFn(ie => ie[g]());
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: function (g) {
      let ie = null;
      ie = g ? new g() : function jy(H, Q) {
        if (H.disabled || !(0, dt.NF)(Q)) {
          return new hm();
        } else {
          return new lg();
        }
      }(t.LFG(Tf), t.LFG(t.Lbi));
      return ie;
    },
    providedIn: "root"
  });
  return H;
})();
class lg extends Wh {
  constructor() {
    super();
    $f();
  }
  pushFn(Q) {
    return new Promise(g => {
      this.push([function () {
        g(Q(this));
      }]);
    });
  }
  push(Q) {
    window._paq.push(function Pu(H) {
      const Q = [...H];
      for (; Q.length > 0 && Q[Q.length - 1] === undefined;) {
        Q.pop();
      }
      return Q;
    }(Q));
  }
}
class hm extends Wh {
  push(Q) {}
  pushFn(Q) {
    return Promise.reject("MatomoTracker is disabled");
  }
}
const _d = (H, Q) => {
  const g = Q.createElement("script");
  g.type = "text/javascript";
  g.defer = true;
  g.async = true;
  g.src = H;
  return g;
};
const Av = new t.OlP("MATOMO_SCRIPT_FACTORY", {
  providedIn: "root",
  factory: () => _d
});
function Cv(H) {
  return `${H}`;
}
function wv(H) {
  if (H.endsWith("/")) {
    return H;
  } else {
    return `${H}/`;
  }
}
function dg(H, Q) {
  if (Q == null) {
    return wv(H) + Sv;
  } else {
    return H + Q;
  }
}
const Sv = "matomo.php";
class gy {
  initialize() {}
  initializeTracker(Q) {}
}
let Ya = (() => {
  class H {
    constructor(g, ie, $e, Ht) {
      this.config = g;
      this.tracker = ie;
      this.scriptFactory = $e;
      this.document = Ht;
      this.initialized = false;
      this.injected = false;
      $f();
    }
    init() {
      this.initialize();
    }
    initialize() {
      this.runPreInitTasks();
      if (this.initialized) {
        throw new Error("Matomo has already been initialized");
      }
      if (function Ev(H) {
        return H.mode == null || H.mode === Jf.AUTO;
      }(this.config)) {
        this.injectMatomoScript(this.config);
      }
      this.initialized = true;
    }
    initializeTracker(g) {
      this.injectMatomoScript(g);
    }
    injectMatomoScript(g) {
      if (this.injected) {
        throw new Error("Matomo trackers have already been initialized");
      }
      if (function og(H) {
        return dm(H) || fm(H);
      }(g)) {
        const {
          scriptUrl: ie
        } = g;
        const [$e, ...Ht] = function bv(H) {
          if (fm(H)) {
            return H.trackers;
          } else {
            return [{
              trackerUrl: H.trackerUrl,
              siteId: H.siteId,
              trackerUrlSuffix: H.trackerUrlSuffix
            }];
          }
        }(g);
        const _n = ie ?? wv($e.trackerUrl) + "matomo.js";
        this.registerMainTracker($e);
        this.registerAdditionalTrackers(Ht);
        this.injectDOMScript(_n);
      } else if (function dy(H) {
        return H.scriptUrl != null && !dm(H);
      }(g)) {
        const {
          scriptUrl: ie,
          trackers: $e
        } = {
          trackers: [],
          ...g
        };
        this.registerAdditionalTrackers($e);
        this.injectDOMScript(ie);
      }
      this.injected = true;
    }
    registerMainTracker(g) {
      const ie = dg(g.trackerUrl, g.trackerUrlSuffix);
      const $e = Cv(g.siteId);
      this.tracker.setTrackerUrl(ie);
      this.tracker.setSiteId($e);
    }
    registerAdditionalTrackers(g) {
      g.forEach(({
        trackerUrl: ie,
        siteId: $e,
        trackerUrlSuffix: Ht
      }) => {
        const _n = dg(ie, Ht);
        const Un = Cv($e);
        this.tracker.addTracker(_n, Un);
      });
    }
    injectDOMScript(g) {
      const ie = this.scriptFactory(g, this.document);
      const $e = Sf(this.document.getElementsByTagName("script")[0], "no existing script found");
      Sf($e.parentNode, "no script's parent node found").insertBefore(ie, $e);
    }
    runPreInitTasks() {
      if (this.config.acceptDoNotTrack) {
        this.tracker.setDoNotTrack(true);
      }
      if (this.config.requireConsent === zd.COOKIE) {
        this.tracker.requireCookieConsent();
      } else if (this.config.requireConsent === zd.TRACKING) {
        this.tracker.requireConsent();
      }
      if (this.config.enableJSErrorTracking) {
        this.tracker.enableJSErrorTracking();
      }
      if (this.config.trackAppInitialLoad) {
        this.tracker.trackPageView();
      }
      if (this.config.enableLinkTracking) {
        this.tracker.enableLinkTracking();
      }
    }
  }
  H.ɵfac = function (g) {
    t.$Z();
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: function (g) {
      let ie = null;
      ie = g ? new g() : function T0(H, Q, g, ie, $e) {
        if (H.disabled || !(0, dt.NF)($e)) {
          return new gy();
        } else {
          return new Ya(H, Q, g, ie);
        }
      }(t.LFG(Tf), t.LFG(Wh), t.LFG(Av), t.LFG(dt.K0), t.LFG(t.Lbi));
      return ie;
    },
    providedIn: "root"
  });
  return H;
})();
let fg = (() => {
  class H {
    constructor(g, ie) {
      this.initializer = g;
      if (!ie) {
        this.initializer.initialize();
      }
    }
    static forRoot(g, ie) {
      const $e = [{
        provide: bh,
        useValue: g
      }];
      if (ie) {
        $e.push({
          provide: Av,
          useValue: ie
        });
      }
      return {
        ngModule: H,
        providers: $e
      };
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(Ya), t.LFG(H, 12));
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({});
  return H;
})();
import * as ym from "69718";
function Gh(H, Q) {
  if (Q) {
    return g => (0, Dv.z)(Q.pipe((0, Io.q)(1), function vy() {
      return (0, hg.e)((H, Q) => {
        H.subscribe((0, Ah.x)(Q, sf.Z));
      });
    }()), g.pipe(Gh(H)));
  } else {
    return (0, Ap.z)((g, ie) => H(g, ie).pipe((0, Io.q)(1), (0, ym.h)(g)));
  }
}
const Tv = new t.OlP("MATOMO_ROUTER_CONFIGURATION");
const Mv = {
  prependBaseHref: true,
  trackPageTitle: true,
  delay: 0,
  exclude: []
};
const Of = new t.OlP("INTERNAL_ROUTER_CONFIGURATION", {
  factory: () => {
    const {
      disabled: H,
      enableLinkTracking: Q
    } = (0, t.f3M)(Tf);
    const g = (0, t.f3M)(Tv, t.XFs.Optional) || {};
    return {
      ...Mv,
      ...g,
      enableLinkTracking: Q,
      disabled: H
    };
  }
});
const zh = new t.OlP("MATOMO_ROUTER_INTERCEPTORS");
function Em(H) {
  return {
    provide: zh,
    multi: true,
    useClass: H
  };
}
function tc(H) {
  if (H) {
    return H.map(Em);
  } else {
    return [];
  }
}
const Kh = new t.OlP("MATOMO_PAGE_TITLE_PROVIDER", {
  factory: () => new yy((0, t.f3M)(i.Dx))
});
class yy {
  constructor(Q) {
    this.title = Q;
  }
  getCurrentPageTitle(Q) {
    return (0, Ui.of)(this.title.getTitle());
  }
}
const _y = new t.OlP("MATOMO_PAGE_URL_PROVIDER", {
  factory: () => new Ov((0, t.f3M)(Of), (0, t.f3M)(dt.mr, t.XFs.Optional), (0, t.f3M)(dt.lw))
});
let Ov = (() => {
  let H = class {
    constructor(g, ie, $e) {
      this.config = g;
      this.baseHref = ie;
      this.platformLocation = $e;
    }
    getCurrentPageUrl(g) {
      const ie = this.config.prependBaseHref ? this.getBaseHrefWithoutTrailingSlash() + g.urlAfterRedirects : g.urlAfterRedirects;
      return (0, Ui.of)(ie);
    }
    getBaseHrefWithoutTrailingSlash() {
      return function bm(H) {
        if (H.endsWith("/")) {
          return H.slice(0, -1);
        } else {
          return H;
        }
      }(this.baseHref ?? this.platformLocation.getBaseHrefFromDOM());
    }
  };
  H = (0, To.gn)([(0, To.fM)(0, (0, t.FiY)()), (0, To.fM)(0, (0, t.tBr)(Of)), (0, To.fM)(1, (0, t.FiY)()), (0, To.fM)(1, (0, t.tBr)(dt.mr))], H);
  return H;
})();
function Pv(H) {
  return H instanceof bs.m2;
}
function Iv(H) {
  if (typeof H == "string") {
    return new RegExp(H);
  } else {
    return H;
  }
}
let Am = (() => {
  class H {
    constructor(g, ie, $e, Ht, _n, Un) {
      this.router = g;
      this.config = ie;
      this.pageTitleProvider = $e;
      this.pageUrlProvider = Ht;
      this.tracker = _n;
      this.interceptors = Un;
      if (Un && !Array.isArray(Un)) {
        throw function uu() {
          return new Error("An invalid MATOMO_ROUTER_INTERCEPTORS provider was configured. Did you forget to set \"multi: true\" ?");
        }();
      }
    }
    init() {
      if (this.config.disabled) {
        return;
      }
      const g = this.config.delay === -1 ? Mf.y : function pg(H, Q = vm.z) {
        const g = (0, Gu.H)(H, Q);
        return Gh(() => g);
      }(this.config.delay);
      this.router.events.pipe((0, Sa.h)(Pv), (0, Sa.h)(function Xf(H) {
        const Q = function jh(H) {
          if (H) {
            if (Array.isArray(H)) {
              return H.map(Iv);
            } else {
              return [Iv(H)];
            }
          } else {
            return [];
          }
        }(H);
        return g => !Q.some(ie => g.urlAfterRedirects.match(ie));
      }(this.config.exclude)), function _m(H, Q) {
        return (0, xp.x)((g, ie) => Q ? Q(g[H], ie[H]) : g[H] === ie[H]);
      }("urlAfterRedirects"), g, (0, hl.w)(ie => this.presetPageTitleAndUrl(ie).pipe((0, cs.U)(({
        pageUrl: $e
      }) => ({
        pageUrl: $e,
        event: ie
      })))), (0, gg.b)(({
        event: ie,
        pageUrl: $e
      }) => this.callInterceptors(ie).pipe((0, Hs.b)(() => this.trackPageView($e))))).subscribe();
    }
    callInterceptors(g) {
      if (this.interceptors) {
        return (0, Sc.D)(this.interceptors.map(ie => {
          const $e = ie.beforePageTrack(g);
          return ($e == null ? (0, Ui.of)(undefined) : (0, Zh.D)($e)).pipe((0, Io.q)(1), (0, fp.d)(undefined));
        })).pipe((0, ym.h)(undefined), (0, fp.d)(undefined));
      } else {
        return (0, Ui.of)(undefined);
      }
    }
    presetPageTitleAndUrl(g) {
      const ie = this.config.trackPageTitle ? this.pageTitleProvider.getCurrentPageTitle(g).pipe((0, Hs.b)(Ht => this.tracker.setDocumentTitle(Ht))) : (0, Ui.of)(undefined);
      const $e = this.pageUrlProvider.getCurrentPageUrl(g).pipe((0, Hs.b)(Ht => this.tracker.setCustomUrl(Ht)));
      return (0, my.a)([ie, $e]).pipe((0, cs.U)(([Ht, _n]) => ({
        pageUrl: _n
      })));
    }
    trackPageView(g) {
      this.tracker.trackPageView();
      if (this.config.enableLinkTracking) {
        this.tracker.enableLinkTracking(true);
      }
      this.tracker.setReferrerUrl(g);
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(bs.F0), t.LFG(Of), t.LFG(Kh), t.LFG(_y), t.LFG(Wh), t.LFG(zh, 8));
  };
  H.ɵprov = t.Yz7({
    token: H,
    factory: H.ɵfac,
    providedIn: "root"
  });
  return H;
})();
let af = (() => {
  class H {
    constructor(g, ie) {
      this.router = g;
      if (!ie) {
        this.router.init();
      }
    }
    static forRoot({
      interceptors: g,
      ...ie
    } = {}) {
      return {
        ngModule: H,
        providers: [{
          provide: Tv,
          useValue: ie
        }, tc(g)]
      };
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(Am), t.LFG(H, 12));
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({});
  return H;
})();
import * as vg from "92340";
(0, dt.qS)(Qf, "fr-FR", [[["minuit", "midi", "mat.", "ap.m.", "soir", "nuit"], undefined, ["minuit", "midi", "du matin", "de l’après-midi", "du soir", "du matin"]], [["minuit", "midi", "mat.", "ap.m.", "soir", "nuit"], undefined, ["minuit", "midi", "matin", "après-midi", "soir", "nuit"]], ["00:00", "12:00", ["04:00", "12:00"], ["12:00", "18:00"], ["18:00", "24:00"], ["00:00", "04:00"]]]);
let Ed = (() => {
  class H {
    constructor(g) {
      if (g) {
        throw new Error("EDWebCoreModule has already been loaded. Import it in the AppModule only.");
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(H, 12));
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    providers: [{
      provide: t.soG,
      useValue: "fr-FR"
    }, {
      provide: "StorageService",
      useClass: eh.u
    }],
    imports: [dt.ez, fg.forRoot({
      disabled: !vg.N.production,
      siteId: "1",
      trackerUrl: "https://piwik.ecoledirecte.com/"
    }), af.forRoot({
      delay: 1000
    }), wf.UP, cd.mb.forRoot(), Ey.fx.forRoot(), _0.nM.forRoot(), _h.kn.forRoot(), xh.mr.forRoot(), If.bB.forRoot(), xm.f.forRoot(), kv.KL.forRoot(), tl.zk.forRoot(), Wa.E9.forRoot(ic.X), lf.u3.forRoot(), mg.HC.forRoot(), O0.P4.forRoot(), Ch.Db.forRoot(), Kd.z8.forRoot(), Cp.Xt.forRoot(), Rf.b.forRoot({}), um.forRoot(wc.fI), sm, b.Awd.forRoot(wc.sX), sm]
  });
  return H;
})();
import * as wh from "99658";
let P0 = (() => {
  class H {}
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    imports: [wh.m]
  });
  return H;
})();
let Lv = (() => {
  class H {}
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    imports: [wh.m, P0]
  });
  return H;
})();
let wp = (() => {
  class H {
    constructor(g) {
      if (g) {
        throw new Error("PagesModule has already been loaded. Import it in the AppModule only.");
      }
    }
  }
  H.ɵfac = function (g) {
    return new (g || H)(t.LFG(H, 12));
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    imports: [wh.m]
  });
  return H;
})();
let Cm = (() => {
  class H {}
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    imports: [wh.m, wp]
  });
  return H;
})();
let Qh = (() => {
  class H {}
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H
  });
  H.ɵinj = t.cJS({
    imports: [wh.m, yg.N, _g.G, wm.A, Sm.Q]
  });
  return H;
})();
let Dm = (() => {
  class H {}
  H.ɵfac = function (g) {
    return new (g || H)();
  };
  H.ɵmod = t.oAB({
    type: H,
    bootstrap: [Eh]
  });
  H.ɵinj = t.cJS({
    imports: [i.b2, Ha, tg, Ed, Lv, wp, Cm, Qh, Wa.E9]
  });
  return H;
})();
import _default4 from "84036";
_default4({
  required: {
    e: 80,
    f: 74,
    o: 91,
    o_a: 91,
    s: 13,
    c: 80,
    samsung: 16
  },
  insecure: true,
  unsupported: true,
  api: 2021.1,
  reminder: 1,
  reminderClosed: 1,
  text: {
    msg: "Votre navigateur ({brow_name}) n'est peut être pas compatible.",
    msgmore: "Cette version ne vous permet pas d'utiliser correctement ce site et ses fonctionnalités avancées.",
    bupdate: "Mettre à jour le navigateur",
    bignore: "Ignorer",
    remind: "Une nouvelle alerte sera affichée dans {days} jour(s).",
    bnever: "Ne plus afficher"
  }
});
if (vg.N.production) {
  (0, b._j$)();
  (0, t.G48)();
}
i.q6().bootstrapModule(Dm).catch(H => console.error(H));