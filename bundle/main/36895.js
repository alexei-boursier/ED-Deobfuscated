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
import * as i from "94650";
let t = null;
export function q() {
  return t;
}
export function HT(mt) {
  t ||= mt;
}
export class w_ {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const K0 = new i.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let lw = (() => {
  class mt {
    historyGo(Ct) {
      throw new Error("Not implemented");
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)();
  };
  mt.ɵprov = i.Yz7({
    token: mt,
    factory: function () {
      return function S() {
        return (0, i.LFG)(I);
      }();
    },
    providedIn: "platform"
  });
  return mt;
})();
export const V_ = new i.OlP("Location Initialized");
let I = (() => {
  class mt extends lw {
    constructor(Ct) {
      super();
      this._doc = Ct;
      this._init();
    }
    _init() {
      this.location = window.location;
      this._history = window.history;
    }
    getBaseHrefFromDOM() {
      return q().getBaseHref(this._doc);
    }
    onPopState(Ct) {
      const Gt = q().getGlobalEventTarget(this._doc, "window");
      Gt.addEventListener("popstate", Ct, false);
      return () => Gt.removeEventListener("popstate", Ct);
    }
    onHashChange(Ct) {
      const Gt = q().getGlobalEventTarget(this._doc, "window");
      Gt.addEventListener("hashchange", Ct, false);
      return () => Gt.removeEventListener("hashchange", Ct);
    }
    get href() {
      return this.location.href;
    }
    get protocol() {
      return this.location.protocol;
    }
    get hostname() {
      return this.location.hostname;
    }
    get port() {
      return this.location.port;
    }
    get pathname() {
      return this.location.pathname;
    }
    get search() {
      return this.location.search;
    }
    get hash() {
      return this.location.hash;
    }
    set pathname(Ct) {
      this.location.pathname = Ct;
    }
    pushState(Ct, Gt, Sn) {
      if (E()) {
        this._history.pushState(Ct, Gt, Sn);
      } else {
        this.location.hash = Sn;
      }
    }
    replaceState(Ct, Gt, Sn) {
      if (E()) {
        this._history.replaceState(Ct, Gt, Sn);
      } else {
        this.location.hash = Sn;
      }
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(Ct = 0) {
      this._history.go(Ct);
    }
    getState() {
      return this._history.state;
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.LFG(K0));
  };
  mt.ɵprov = i.Yz7({
    token: mt,
    factory: function () {
      return function O() {
        return new I((0, i.LFG)(K0));
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
             */();
    },
    providedIn: "platform"
  });
  return mt;
})();
function E() {
  return !!window.history.pushState;
}
function x(mt, qt) {
  if (mt.length == 0) {
    return qt;
  }
  if (qt.length == 0) {
    return mt;
  }
  let Ct = 0;
  if (mt.endsWith("/")) {
    Ct++;
  }
  if (qt.startsWith("/")) {
    Ct++;
  }
  if (Ct == 2) {
    return mt + qt.substring(1);
  } else if (Ct == 1) {
    return mt + qt;
  } else {
    return mt + "/" + qt;
  }
}
function U(mt) {
  const qt = mt.match(/#|\?|$/);
  const Ct = qt && qt.index || mt.length;
  return mt.slice(0, Ct - (mt[Ct - 1] === "/" ? 1 : 0)) + mt.slice(Ct);
}
function B(mt) {
  if (mt && mt[0] !== "?") {
    return "?" + mt;
  } else {
    return mt;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let S$ = (() => {
  class mt {
    historyGo(Ct) {
      throw new Error("Not implemented");
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)();
  };
  mt.ɵprov = i.Yz7({
    token: mt,
    factory: function () {
      return (0, i.f3M)(b0);
    },
    providedIn: "root"
  });
  return mt;
})();
export const mr = new i.OlP("appBaseHref");
export let b0 = (() => {
  class mt extends S$ {
    constructor(Ct, Gt) {
      super();
      this._platformLocation = Ct;
      this._removeListenerFns = [];
      this._baseHref = Gt ?? this._platformLocation.getBaseHrefFromDOM() ?? (0, i.f3M)(K0).location?.origin ?? "";
    }
    ngOnDestroy() {
      for (; this._removeListenerFns.length;) {
        this._removeListenerFns.pop()();
      }
    }
    onPopState(Ct) {
      this._removeListenerFns.push(this._platformLocation.onPopState(Ct), this._platformLocation.onHashChange(Ct));
    }
    getBaseHref() {
      return this._baseHref;
    }
    prepareExternalUrl(Ct) {
      return x(this._baseHref, Ct);
    }
    path(Ct = false) {
      const Gt = this._platformLocation.pathname + B(this._platformLocation.search);
      const Sn = this._platformLocation.hash;
      if (Sn && Ct) {
        return `${Gt}${Sn}`;
      } else {
        return Gt;
      }
    }
    pushState(Ct, Gt, Sn, ki) {
      const Ui = this.prepareExternalUrl(Sn + B(ki));
      this._platformLocation.pushState(Ct, Gt, Ui);
    }
    replaceState(Ct, Gt, Sn, ki) {
      const Ui = this.prepareExternalUrl(Sn + B(ki));
      this._platformLocation.replaceState(Ct, Gt, Ui);
    }
    forward() {
      this._platformLocation.forward();
    }
    back() {
      this._platformLocation.back();
    }
    getState() {
      return this._platformLocation.getState();
    }
    historyGo(Ct = 0) {
      var Gt;
      var Sn;
      if ((Gt = (Sn = this._platformLocation).historyGo) !== null && Gt !== undefined) {
        Gt.call(Sn, Ct);
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.LFG(lw), i.LFG(mr, 8));
  };
  mt.ɵprov = i.Yz7({
    token: mt,
    factory: mt.ɵfac,
    providedIn: "root"
  });
  return mt;
})();
export let Do = (() => {
  class mt extends S$ {
    constructor(Ct, Gt) {
      super();
      this._platformLocation = Ct;
      this._baseHref = "";
      this._removeListenerFns = [];
      if (Gt != null) {
        this._baseHref = Gt;
      }
    }
    ngOnDestroy() {
      for (; this._removeListenerFns.length;) {
        this._removeListenerFns.pop()();
      }
    }
    onPopState(Ct) {
      this._removeListenerFns.push(this._platformLocation.onPopState(Ct), this._platformLocation.onHashChange(Ct));
    }
    getBaseHref() {
      return this._baseHref;
    }
    path(Ct = false) {
      let Gt = this._platformLocation.hash;
      if (Gt == null) {
        Gt = "#";
      }
      if (Gt.length > 0) {
        return Gt.substring(1);
      } else {
        return Gt;
      }
    }
    prepareExternalUrl(Ct) {
      const Gt = x(this._baseHref, Ct);
      if (Gt.length > 0) {
        return "#" + Gt;
      } else {
        return Gt;
      }
    }
    pushState(Ct, Gt, Sn, ki) {
      let Ui = this.prepareExternalUrl(Sn + B(ki));
      if (Ui.length == 0) {
        Ui = this._platformLocation.pathname;
      }
      this._platformLocation.pushState(Ct, Gt, Ui);
    }
    replaceState(Ct, Gt, Sn, ki) {
      let Ui = this.prepareExternalUrl(Sn + B(ki));
      if (Ui.length == 0) {
        Ui = this._platformLocation.pathname;
      }
      this._platformLocation.replaceState(Ct, Gt, Ui);
    }
    forward() {
      this._platformLocation.forward();
    }
    back() {
      this._platformLocation.back();
    }
    getState() {
      return this._platformLocation.getState();
    }
    historyGo(Ct = 0) {
      var Gt;
      var Sn;
      if ((Gt = (Sn = this._platformLocation).historyGo) !== null && Gt !== undefined) {
        Gt.call(Sn, Ct);
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.LFG(lw), i.LFG(mr, 8));
  };
  mt.ɵprov = i.Yz7({
    token: mt,
    factory: mt.ɵfac
  });
  return mt;
})();
export let Ye = (() => {
  class mt {
    constructor(Ct) {
      this._subject = new i.vpe();
      this._urlChangeListeners = [];
      this._urlChangeSubscription = null;
      this._locationStrategy = Ct;
      const Gt = this._locationStrategy.getBaseHref();
      this._baseHref = U(G(Gt));
      this._locationStrategy.onPopState(Sn => {
        this._subject.emit({
          url: this.path(true),
          pop: true,
          state: Sn.state,
          type: Sn.type
        });
      });
    }
    ngOnDestroy() {
      var Ct;
      if ((Ct = this._urlChangeSubscription) !== null && Ct !== undefined) {
        Ct.unsubscribe();
      }
      this._urlChangeListeners = [];
    }
    path(Ct = false) {
      return this.normalize(this._locationStrategy.path(Ct));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(Ct, Gt = "") {
      return this.path() == this.normalize(Ct + B(Gt));
    }
    normalize(Ct) {
      return mt.stripTrailingSlash(function j(mt, qt) {
        if (mt && qt.startsWith(mt)) {
          return qt.substring(mt.length);
        } else {
          return qt;
        }
      }(this._baseHref, G(Ct)));
    }
    prepareExternalUrl(Ct) {
      if (Ct && Ct[0] !== "/") {
        Ct = "/" + Ct;
      }
      return this._locationStrategy.prepareExternalUrl(Ct);
    }
    go(Ct, Gt = "", Sn = null) {
      this._locationStrategy.pushState(Sn, "", Ct, Gt);
      this._notifyUrlChangeListeners(this.prepareExternalUrl(Ct + B(Gt)), Sn);
    }
    replaceState(Ct, Gt = "", Sn = null) {
      this._locationStrategy.replaceState(Sn, "", Ct, Gt);
      this._notifyUrlChangeListeners(this.prepareExternalUrl(Ct + B(Gt)), Sn);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(Ct = 0) {
      var Gt;
      var Sn;
      if ((Gt = (Sn = this._locationStrategy).historyGo) !== null && Gt !== undefined) {
        Gt.call(Sn, Ct);
      }
    }
    onUrlChange(Ct) {
      this._urlChangeListeners.push(Ct);
      this._urlChangeSubscription ||= this.subscribe(Gt => {
        this._notifyUrlChangeListeners(Gt.url, Gt.state);
      });
      return () => {
        const Gt = this._urlChangeListeners.indexOf(Ct);
        var Sn;
        this._urlChangeListeners.splice(Gt, 1);
        if (this._urlChangeListeners.length === 0) {
          if ((Sn = this._urlChangeSubscription) !== null && Sn !== undefined) {
            Sn.unsubscribe();
          }
          this._urlChangeSubscription = null;
        }
      };
    }
    _notifyUrlChangeListeners(Ct = "", Gt) {
      this._urlChangeListeners.forEach(Sn => Sn(Ct, Gt));
    }
    subscribe(Ct, Gt, Sn) {
      return this._subject.subscribe({
        next: Ct,
        error: Gt,
        complete: Sn
      });
    }
  }
  mt.normalizeQueryParams = B;
  mt.joinWithSlash = x;
  mt.stripTrailingSlash = U;
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.LFG(S$));
  };
  mt.ɵprov = i.Yz7({
    token: mt,
    factory: function () {
      return function q() {
        return new Ye((0, i.LFG)(S$));
      }();
    },
    providedIn: "root"
  });
  return mt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function G(mt) {
  return mt.replace(/\/index.html$/, "");
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
const se = {
  ADP: [undefined, undefined, 0],
  AFN: [undefined, "؋", 0],
  ALL: [undefined, undefined, 0],
  AMD: [undefined, "֏", 2],
  AOA: [undefined, "Kz"],
  ARS: [undefined, "$"],
  AUD: ["A$", "$"],
  AZN: [undefined, "₼"],
  BAM: [undefined, "KM"],
  BBD: [undefined, "$"],
  BDT: [undefined, "৳"],
  BHD: [undefined, undefined, 3],
  BIF: [undefined, undefined, 0],
  BMD: [undefined, "$"],
  BND: [undefined, "$"],
  BOB: [undefined, "Bs"],
  BRL: ["R$"],
  BSD: [undefined, "$"],
  BWP: [undefined, "P"],
  BYN: [undefined, undefined, 2],
  BYR: [undefined, undefined, 0],
  BZD: [undefined, "$"],
  CAD: ["CA$", "$", 2],
  CHF: [undefined, undefined, 2],
  CLF: [undefined, undefined, 4],
  CLP: [undefined, "$", 0],
  CNY: ["CN¥", "¥"],
  COP: [undefined, "$", 2],
  CRC: [undefined, "₡", 2],
  CUC: [undefined, "$"],
  CUP: [undefined, "$"],
  CZK: [undefined, "Kč", 2],
  DJF: [undefined, undefined, 0],
  DKK: [undefined, "kr", 2],
  DOP: [undefined, "$"],
  EGP: [undefined, "E£"],
  ESP: [undefined, "₧", 0],
  EUR: ["€"],
  FJD: [undefined, "$"],
  FKP: [undefined, "£"],
  GBP: ["£"],
  GEL: [undefined, "₾"],
  GHS: [undefined, "GH₵"],
  GIP: [undefined, "£"],
  GNF: [undefined, "FG", 0],
  GTQ: [undefined, "Q"],
  GYD: [undefined, "$", 2],
  HKD: ["HK$", "$"],
  HNL: [undefined, "L"],
  HRK: [undefined, "kn"],
  HUF: [undefined, "Ft", 2],
  IDR: [undefined, "Rp", 2],
  ILS: ["₪"],
  INR: ["₹"],
  IQD: [undefined, undefined, 0],
  IRR: [undefined, undefined, 0],
  ISK: [undefined, "kr", 0],
  ITL: [undefined, undefined, 0],
  JMD: [undefined, "$"],
  JOD: [undefined, undefined, 3],
  JPY: ["¥", undefined, 0],
  KHR: [undefined, "៛"],
  KMF: [undefined, "CF", 0],
  KPW: [undefined, "₩", 0],
  KRW: ["₩", undefined, 0],
  KWD: [undefined, undefined, 3],
  KYD: [undefined, "$"],
  KZT: [undefined, "₸"],
  LAK: [undefined, "₭", 0],
  LBP: [undefined, "L£", 0],
  LKR: [undefined, "Rs"],
  LRD: [undefined, "$"],
  LTL: [undefined, "Lt"],
  LUF: [undefined, undefined, 0],
  LVL: [undefined, "Ls"],
  LYD: [undefined, undefined, 3],
  MGA: [undefined, "Ar", 0],
  MGF: [undefined, undefined, 0],
  MMK: [undefined, "K", 0],
  MNT: [undefined, "₮", 2],
  MRO: [undefined, undefined, 0],
  MUR: [undefined, "Rs", 2],
  MXN: ["MX$", "$"],
  MYR: [undefined, "RM"],
  NAD: [undefined, "$"],
  NGN: [undefined, "₦"],
  NIO: [undefined, "C$"],
  NOK: [undefined, "kr", 2],
  NPR: [undefined, "Rs"],
  NZD: ["NZ$", "$"],
  OMR: [undefined, undefined, 3],
  PHP: ["₱"],
  PKR: [undefined, "Rs", 2],
  PLN: [undefined, "zł"],
  PYG: [undefined, "₲", 0],
  RON: [undefined, "lei"],
  RSD: [undefined, undefined, 0],
  RUB: [undefined, "₽"],
  RWF: [undefined, "RF", 0],
  SBD: [undefined, "$"],
  SEK: [undefined, "kr", 2],
  SGD: [undefined, "$"],
  SHP: [undefined, "£"],
  SLE: [undefined, undefined, 2],
  SLL: [undefined, undefined, 0],
  SOS: [undefined, undefined, 0],
  SRD: [undefined, "$"],
  SSP: [undefined, "£"],
  STD: [undefined, undefined, 0],
  STN: [undefined, "Db"],
  SYP: [undefined, "£", 0],
  THB: [undefined, "฿"],
  TMM: [undefined, undefined, 0],
  TND: [undefined, undefined, 3],
  TOP: [undefined, "T$"],
  TRL: [undefined, undefined, 0],
  TRY: [undefined, "₺"],
  TTD: [undefined, "$"],
  TWD: ["NT$", "$", 2],
  TZS: [undefined, undefined, 2],
  UAH: [undefined, "₴"],
  UGX: [undefined, undefined, 0],
  USD: ["$"],
  UYI: [undefined, undefined, 0],
  UYU: [undefined, "$"],
  UYW: [undefined, undefined, 4],
  UZS: [undefined, undefined, 2],
  VEF: [undefined, "Bs", 2],
  VND: ["₫", undefined, 0],
  VUV: [undefined, undefined, 0],
  XAF: ["FCFA", undefined, 0],
  XCD: ["EC$", "$"],
  XOF: ["F CFA", undefined, 0],
  XPF: ["CFPF", undefined, 0],
  XXX: ["¤"],
  YER: [undefined, undefined, 0],
  ZAR: [undefined, "R"],
  ZMK: [undefined, undefined, 0],
  ZMW: [undefined, "ZK"],
  ZWD: [undefined, undefined, 0]
};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var W = (() => {
  (W = W || {})[W.Decimal = 0] = "Decimal";
  W[W.Percent = 1] = "Percent";
  W[W.Currency = 2] = "Currency";
  W[W.Scientific = 3] = "Scientific";
  return W;
})();
var Le = (() => {
  (Le = Le || {})[Le.Format = 0] = "Format";
  Le[Le.Standalone = 1] = "Standalone";
  return Le;
})();
var he = (() => {
  (he = he || {})[he.Narrow = 0] = "Narrow";
  he[he.Abbreviated = 1] = "Abbreviated";
  he[he.Wide = 2] = "Wide";
  he[he.Short = 3] = "Short";
  return he;
})();
var pe = (() => {
  (pe = pe || {})[pe.Short = 0] = "Short";
  pe[pe.Medium = 1] = "Medium";
  pe[pe.Long = 2] = "Long";
  pe[pe.Full = 3] = "Full";
  return pe;
})();
var re = (() => {
  (re = re || {})[re.Decimal = 0] = "Decimal";
  re[re.Group = 1] = "Group";
  re[re.List = 2] = "List";
  re[re.PercentSign = 3] = "PercentSign";
  re[re.PlusSign = 4] = "PlusSign";
  re[re.MinusSign = 5] = "MinusSign";
  re[re.Exponential = 6] = "Exponential";
  re[re.SuperscriptingExponent = 7] = "SuperscriptingExponent";
  re[re.PerMille = 8] = "PerMille";
  re[re.Infinity = 9] = "Infinity";
  re[re.NaN = 10] = "NaN";
  re[re.TimeSeparator = 11] = "TimeSeparator";
  re[re.CurrencyDecimal = 12] = "CurrencyDecimal";
  re[re.CurrencyGroup = 13] = "CurrencyGroup";
  return re;
})();
function ke(mt, qt) {
  return qe((0, i.cg1)(mt)[i.wAp.DateFormat], qt);
}
function Be(mt, qt) {
  return qe((0, i.cg1)(mt)[i.wAp.TimeFormat], qt);
}
function De(mt, qt) {
  return qe((0, i.cg1)(mt)[i.wAp.DateTimeFormat], qt);
}
function Qe(mt, qt) {
  const Ct = (0, i.cg1)(mt);
  const Gt = Ct[i.wAp.NumberSymbols][qt];
  if (typeof Gt === "undefined") {
    if (qt === re.CurrencyDecimal) {
      return Ct[i.wAp.NumberSymbols][re.Decimal];
    }
    if (qt === re.CurrencyGroup) {
      return Ct[i.wAp.NumberSymbols][re.Group];
    }
  }
  return Gt;
}
function It(mt, qt) {
  return (0, i.cg1)(mt)[i.wAp.NumberFormats][qt];
}
function St(mt) {
  if (!mt[i.wAp.ExtraData]) {
    throw new Error(`Missing extra locale data for the locale "${mt[i.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
  }
}
function qe(mt, qt) {
  for (let Ct = qt; Ct > -1; Ct--) {
    if (typeof mt[Ct] !== "undefined") {
      return mt[Ct];
    }
  }
  throw new Error("Locale data API: locale data undefined");
}
function Me(mt) {
  const [qt, Ct] = mt.split(":");
  return {
    hours: +qt,
    minutes: +Ct
  };
}
export function jK(mt, qt, Ct = "en") {
  const Gt = function lt(mt) {
    return (0, i.cg1)(mt)[i.wAp.Currencies];
  }(Ct)[mt] || se[mt] || [];
  const Sn = Gt[1];
  if (qt === "narrow" && typeof Sn == "string") {
    return Sn;
  } else {
    return Gt[0] || mt;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const bt = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
const Ut = {};
const Ze = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
var pt = (() => {
  (pt = pt || {})[pt.Short = 0] = "Short";
  pt[pt.ShortGMT = 1] = "ShortGMT";
  pt[pt.Long = 2] = "Long";
  pt[pt.Extended = 3] = "Extended";
  return pt;
})();
var yt = (() => {
  (yt = yt || {})[yt.FullYear = 0] = "FullYear";
  yt[yt.Month = 1] = "Month";
  yt[yt.Date = 2] = "Date";
  yt[yt.Hours = 3] = "Hours";
  yt[yt.Minutes = 4] = "Minutes";
  yt[yt.Seconds = 5] = "Seconds";
  yt[yt.FractionalSeconds = 6] = "FractionalSeconds";
  yt[yt.Day = 7] = "Day";
  return yt;
})();
var Wt = (() => {
  (Wt = Wt || {})[Wt.DayPeriods = 0] = "DayPeriods";
  Wt[Wt.Days = 1] = "Days";
  Wt[Wt.Months = 2] = "Months";
  Wt[Wt.Eras = 3] = "Eras";
  return Wt;
})();
function hn(mt, qt, Ct, Gt) {
  let Sn = function ns(mt) {
    if (Bn(mt)) {
      return mt;
    }
    if (typeof mt == "number" && !isNaN(mt)) {
      return new Date(mt);
    }
    if (typeof mt == "string") {
      mt = mt.trim();
      if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(mt)) {
        const [Sn, ki = 1, Ui = 1] = mt.split("-").map(cs => +cs);
        return Kt(Sn, ki - 1, Ui);
      }
      const Ct = parseFloat(mt);
      if (!isNaN(mt - Ct)) {
        return new Date(Ct);
      }
      let Gt;
      if (Gt = mt.match(bt)) {
        return function pr(mt) {
          const qt = new Date(0);
          let Ct = 0;
          let Gt = 0;
          const Sn = mt[8] ? qt.setUTCFullYear : qt.setFullYear;
          const ki = mt[8] ? qt.setUTCHours : qt.setHours;
          if (mt[9]) {
            Ct = Number(mt[9] + mt[10]);
            Gt = Number(mt[9] + mt[11]);
          }
          Sn.call(qt, Number(mt[1]), Number(mt[2]) - 1, Number(mt[3]));
          const Ui = Number(mt[4] || 0) - Ct;
          const cs = Number(mt[5] || 0) - Gt;
          const La = Number(mt[6] || 0);
          const Yo = Math.floor(parseFloat("0." + (mt[7] || 0)) * 1000);
          ki.call(qt, Ui, cs, La, Yo);
          return qt;
        }(Gt);
      }
    }
    const qt = new Date(mt);
    if (!Bn(qt)) {
      throw new Error(`Unable to convert "${mt}" into a date`);
    }
    return qt;
  }(mt);
  qt = on(Ct, qt) || qt;
  let cs;
  let Ui = [];
  for (; qt;) {
    cs = Ze.exec(qt);
    if (!cs) {
      Ui.push(qt);
      break;
    }
    {
      Ui = Ui.concat(cs.slice(1));
      const Ts = Ui.pop();
      if (!Ts) {
        break;
      }
      qt = Ts;
    }
  }
  let La = Sn.getTimezoneOffset();
  if (Gt) {
    La = sa(Gt, La);
    Sn = function Tr(mt, qt, Ct) {
      const Gt = Ct ? -1 : 1;
      const Sn = mt.getTimezoneOffset();
      return function js(mt, qt) {
        (mt = new Date(mt.getTime())).setMinutes(mt.getMinutes() + qt);
        return mt;
      }(mt, Gt * (sa(qt, Sn) - Sn));
    }(Sn, Gt, true);
  }
  let Yo = "";
  Ui.forEach(Ts => {
    const Os = function so(mt) {
      if (wo[mt]) {
        return wo[mt];
      }
      let qt;
      switch (mt) {
        case "G":
        case "GG":
        case "GGG":
          qt = $i(Wt.Eras, he.Abbreviated);
          break;
        case "GGGG":
          qt = $i(Wt.Eras, he.Wide);
          break;
        case "GGGGG":
          qt = $i(Wt.Eras, he.Narrow);
          break;
        case "y":
          qt = Si(yt.FullYear, 1, 0, false, true);
          break;
        case "yy":
          qt = Si(yt.FullYear, 2, 0, true, true);
          break;
        case "yyy":
          qt = Si(yt.FullYear, 3, 0, false, true);
          break;
        case "yyyy":
          qt = Si(yt.FullYear, 4, 0, false, true);
          break;
        case "Y":
          qt = vs(1);
          break;
        case "YY":
          qt = vs(2, true);
          break;
        case "YYY":
          qt = vs(3);
          break;
        case "YYYY":
          qt = vs(4);
          break;
        case "M":
        case "L":
          qt = Si(yt.Month, 1, 1);
          break;
        case "MM":
        case "LL":
          qt = Si(yt.Month, 2, 1);
          break;
        case "MMM":
          qt = $i(Wt.Months, he.Abbreviated);
          break;
        case "MMMM":
          qt = $i(Wt.Months, he.Wide);
          break;
        case "MMMMM":
          qt = $i(Wt.Months, he.Narrow);
          break;
        case "LLL":
          qt = $i(Wt.Months, he.Abbreviated, Le.Standalone);
          break;
        case "LLLL":
          qt = $i(Wt.Months, he.Wide, Le.Standalone);
          break;
        case "LLLLL":
          qt = $i(Wt.Months, he.Narrow, Le.Standalone);
          break;
        case "w":
          qt = rs(1);
          break;
        case "ww":
          qt = rs(2);
          break;
        case "W":
          qt = rs(1, true);
          break;
        case "d":
          qt = Si(yt.Date, 1);
          break;
        case "dd":
          qt = Si(yt.Date, 2);
          break;
        case "c":
        case "cc":
          qt = Si(yt.Day, 1);
          break;
        case "ccc":
          qt = $i(Wt.Days, he.Abbreviated, Le.Standalone);
          break;
        case "cccc":
          qt = $i(Wt.Days, he.Wide, Le.Standalone);
          break;
        case "ccccc":
          qt = $i(Wt.Days, he.Narrow, Le.Standalone);
          break;
        case "cccccc":
          qt = $i(Wt.Days, he.Short, Le.Standalone);
          break;
        case "E":
        case "EE":
        case "EEE":
          qt = $i(Wt.Days, he.Abbreviated);
          break;
        case "EEEE":
          qt = $i(Wt.Days, he.Wide);
          break;
        case "EEEEE":
          qt = $i(Wt.Days, he.Narrow);
          break;
        case "EEEEEE":
          qt = $i(Wt.Days, he.Short);
          break;
        case "a":
        case "aa":
        case "aaa":
          qt = $i(Wt.DayPeriods, he.Abbreviated);
          break;
        case "aaaa":
          qt = $i(Wt.DayPeriods, he.Wide);
          break;
        case "aaaaa":
          qt = $i(Wt.DayPeriods, he.Narrow);
          break;
        case "b":
        case "bb":
        case "bbb":
          qt = $i(Wt.DayPeriods, he.Abbreviated, Le.Standalone, true);
          break;
        case "bbbb":
          qt = $i(Wt.DayPeriods, he.Wide, Le.Standalone, true);
          break;
        case "bbbbb":
          qt = $i(Wt.DayPeriods, he.Narrow, Le.Standalone, true);
          break;
        case "B":
        case "BB":
        case "BBB":
          qt = $i(Wt.DayPeriods, he.Abbreviated, Le.Format, true);
          break;
        case "BBBB":
          qt = $i(Wt.DayPeriods, he.Wide, Le.Format, true);
          break;
        case "BBBBB":
          qt = $i(Wt.DayPeriods, he.Narrow, Le.Format, true);
          break;
        case "h":
          qt = Si(yt.Hours, 1, -12);
          break;
        case "hh":
          qt = Si(yt.Hours, 2, -12);
          break;
        case "H":
          qt = Si(yt.Hours, 1);
          break;
        case "HH":
          qt = Si(yt.Hours, 2);
          break;
        case "m":
          qt = Si(yt.Minutes, 1);
          break;
        case "mm":
          qt = Si(yt.Minutes, 2);
          break;
        case "s":
          qt = Si(yt.Seconds, 1);
          break;
        case "ss":
          qt = Si(yt.Seconds, 2);
          break;
        case "S":
          qt = Si(yt.FractionalSeconds, 1);
          break;
        case "SS":
          qt = Si(yt.FractionalSeconds, 2);
          break;
        case "SSS":
          qt = Si(yt.FractionalSeconds, 3);
          break;
        case "Z":
        case "ZZ":
        case "ZZZ":
          qt = br(pt.Short);
          break;
        case "ZZZZZ":
          qt = br(pt.Extended);
          break;
        case "O":
        case "OO":
        case "OOO":
        case "z":
        case "zz":
        case "zzz":
          qt = br(pt.ShortGMT);
          break;
        case "OOOO":
        case "ZZZZ":
        case "zzzz":
          qt = br(pt.Long);
          break;
        default:
          return null;
      }
      wo[mt] = qt;
      return qt;
    }(Ts);
    Yo += Os ? Os(Sn, Ct, La) : Ts === "''" ? "'" : Ts.replace(/(^'|'$)/g, "").replace(/''/g, "'");
  });
  return Yo;
}
function Kt(mt, qt, Ct) {
  const Gt = new Date(0);
  Gt.setFullYear(mt, qt, Ct);
  Gt.setHours(0, 0, 0);
  return Gt;
}
function on(mt, qt) {
  const Ct = function Ge(mt) {
    return (0, i.cg1)(mt)[i.wAp.LocaleId];
  }(mt);
  Ut[Ct] = Ut[Ct] || {};
  if (Ut[Ct][qt]) {
    return Ut[Ct][qt];
  }
  let Gt = "";
  switch (qt) {
    case "shortDate":
      Gt = ke(mt, pe.Short);
      break;
    case "mediumDate":
      Gt = ke(mt, pe.Medium);
      break;
    case "longDate":
      Gt = ke(mt, pe.Long);
      break;
    case "fullDate":
      Gt = ke(mt, pe.Full);
      break;
    case "shortTime":
      Gt = Be(mt, pe.Short);
      break;
    case "mediumTime":
      Gt = Be(mt, pe.Medium);
      break;
    case "longTime":
      Gt = Be(mt, pe.Long);
      break;
    case "fullTime":
      Gt = Be(mt, pe.Full);
      break;
    case "short":
      const Sn = on(mt, "shortTime");
      const ki = on(mt, "shortDate");
      Gt = Rn(De(mt, pe.Short), [Sn, ki]);
      break;
    case "medium":
      const Ui = on(mt, "mediumTime");
      const cs = on(mt, "mediumDate");
      Gt = Rn(De(mt, pe.Medium), [Ui, cs]);
      break;
    case "long":
      const La = on(mt, "longTime");
      const Yo = on(mt, "longDate");
      Gt = Rn(De(mt, pe.Long), [La, Yo]);
      break;
    case "full":
      const Ts = on(mt, "fullTime");
      const Os = on(mt, "fullDate");
      Gt = Rn(De(mt, pe.Full), [Ts, Os]);
  }
  if (Gt) {
    Ut[Ct][qt] = Gt;
  }
  return Gt;
}
function Rn(mt, qt) {
  if (qt) {
    mt = mt.replace(/\{([^}]+)}/g, function (Ct, Gt) {
      if (qt != null && Gt in qt) {
        return qt[Gt];
      } else {
        return Ct;
      }
    });
  }
  return mt;
}
function In(mt, qt, Ct = "-", Gt, Sn) {
  let ki = "";
  if (mt < 0 || Sn && mt <= 0) {
    if (Sn) {
      mt = 1 - mt;
    } else {
      mt = -mt;
      ki = Ct;
    }
  }
  let Ui = String(mt);
  for (; Ui.length < qt;) {
    Ui = "0" + Ui;
  }
  if (Gt) {
    Ui = Ui.slice(Ui.length - qt);
  }
  return ki + Ui;
}
function Si(mt, qt, Ct = 0, Gt = false, Sn = false) {
  return function (ki, Ui) {
    let cs = function Zi(mt, qt) {
      switch (mt) {
        case yt.FullYear:
          return qt.getFullYear();
        case yt.Month:
          return qt.getMonth();
        case yt.Date:
          return qt.getDate();
        case yt.Hours:
          return qt.getHours();
        case yt.Minutes:
          return qt.getMinutes();
        case yt.Seconds:
          return qt.getSeconds();
        case yt.FractionalSeconds:
          return qt.getMilliseconds();
        case yt.Day:
          return qt.getDay();
        default:
          throw new Error(`Unknown DateType value "${mt}".`);
      }
    }(mt, ki);
    if (Ct > 0 || cs > -Ct) {
      cs += Ct;
    }
    if (mt === yt.Hours) {
      if (cs === 0 && Ct === -12) {
        cs = 12;
      }
    } else if (mt === yt.FractionalSeconds) {
      return function di(mt, qt) {
        return In(mt, 3).substring(0, qt);
      }(cs, qt);
    }
    const La = Qe(Ui, re.MinusSign);
    return In(cs, qt, La, Gt, Sn);
  };
}
function $i(mt, qt, Ct = Le.Format, Gt = false) {
  return function (Sn, ki) {
    return function Qi(mt, qt, Ct, Gt, Sn, ki) {
      switch (Ct) {
        case Wt.Months:
          return function st(mt, qt, Ct) {
            const Gt = (0, i.cg1)(mt);
            const ki = qe([Gt[i.wAp.MonthsFormat], Gt[i.wAp.MonthsStandalone]], qt);
            return qe(ki, Ct);
          }(qt, Sn, Gt)[mt.getMonth()];
        case Wt.Days:
          return function ot(mt, qt, Ct) {
            const Gt = (0, i.cg1)(mt);
            const ki = qe([Gt[i.wAp.DaysFormat], Gt[i.wAp.DaysStandalone]], qt);
            return qe(ki, Ct);
          }(qt, Sn, Gt)[mt.getDay()];
        case Wt.DayPeriods:
          const Ui = mt.getHours();
          const cs = mt.getMinutes();
          if (ki) {
            const Yo = function ve(mt) {
              const qt = (0, i.cg1)(mt);
              St(qt);
              return (qt[i.wAp.ExtraData][2] || []).map(Gt => typeof Gt == "string" ? Me(Gt) : [Me(Gt[0]), Me(Gt[1])]);
            }(qt);
            const Ts = function Lt(mt, qt, Ct) {
              const Gt = (0, i.cg1)(mt);
              St(Gt);
              const ki = qe([Gt[i.wAp.ExtraData][0], Gt[i.wAp.ExtraData][1]], qt) || [];
              return qe(ki, Ct) || [];
            }(qt, Sn, Gt);
            const Os = Yo.findIndex(Ga => {
              if (Array.isArray(Ga)) {
                const [Zo, lo] = Ga;
                const gl = Ui >= Zo.hours && cs >= Zo.minutes;
                const Hs = Ui < lo.hours || Ui === lo.hours && cs < lo.minutes;
                if (Zo.hours < lo.hours) {
                  if (gl && Hs) {
                    return true;
                  }
                } else if (gl || Hs) {
                  return true;
                }
              } else if (Ga.hours === Ui && Ga.minutes === cs) {
                return true;
              }
              return false;
            });
            if (Os !== -1) {
              return Ts[Os];
            }
          }
          return function Ue(mt, qt, Ct) {
            const Gt = (0, i.cg1)(mt);
            const ki = qe([Gt[i.wAp.DayPeriodsFormat], Gt[i.wAp.DayPeriodsStandalone]], qt);
            return qe(ki, Ct);
          }(qt, Sn, Gt)[Ui < 12 ? 0 : 1];
        case Wt.Eras:
          return function rt(mt, qt) {
            return qe((0, i.cg1)(mt)[i.wAp.Eras], qt);
          }(qt, Gt)[mt.getFullYear() <= 0 ? 0 : 1];
        default:
          throw new Error(`unexpected translation type ${Ct}`);
      }
    }(Sn, ki, mt, qt, Ct, Gt);
  };
}
function br(mt) {
  return function (qt, Ct, Gt) {
    const Sn = Gt * -1;
    const ki = Qe(Ct, re.MinusSign);
    const Ui = Sn > 0 ? Math.floor(Sn / 60) : Math.ceil(Sn / 60);
    switch (mt) {
      case pt.Short:
        return (Sn >= 0 ? "+" : "") + In(Ui, 2, ki) + In(Math.abs(Sn % 60), 2, ki);
      case pt.ShortGMT:
        return "GMT" + (Sn >= 0 ? "+" : "") + In(Ui, 1, ki);
      case pt.Long:
        return "GMT" + (Sn >= 0 ? "+" : "") + In(Ui, 2, ki) + ":" + In(Math.abs(Sn % 60), 2, ki);
      case pt.Extended:
        if (Gt === 0) {
          return "Z";
        } else {
          return (Sn >= 0 ? "+" : "") + In(Ui, 2, ki) + ":" + In(Math.abs(Sn % 60), 2, ki);
        }
      default:
        throw new Error(`Unknown zone width "${mt}"`);
    }
  };
}
function Br(mt) {
  return Kt(mt.getFullYear(), mt.getMonth(), mt.getDate() + (4 - mt.getDay()));
}
function rs(mt, qt = false) {
  return function (Ct, Gt) {
    let Sn;
    if (qt) {
      const ki = new Date(Ct.getFullYear(), Ct.getMonth(), 1).getDay() - 1;
      const Ui = Ct.getDate();
      Sn = 1 + Math.floor((Ui + ki) / 7);
    } else {
      const ki = Br(Ct);
      const Ui = function Ur(mt) {
        const qt = Kt(mt, 0, 1).getDay();
        return Kt(mt, 0, 1 + (qt <= 4 ? 4 : 11) - qt);
      }(ki.getFullYear());
      const cs = ki.getTime() - Ui.getTime();
      Sn = 1 + Math.round(cs / 604800000);
    }
    return In(Sn, mt, Qe(Gt, re.MinusSign));
  };
}
function vs(mt, qt = false) {
  return function (Ct, Gt) {
    return In(Br(Ct).getFullYear(), mt, Qe(Gt, re.MinusSign), qt);
  };
}
const wo = {};
function sa(mt, qt) {
  mt = mt.replace(/:/g, "");
  const Ct = Date.parse("Jan 01, 1970 00:00:00 " + mt) / 60000;
  if (isNaN(Ct)) {
    return qt;
  } else {
    return Ct;
  }
}
function Bn(mt) {
  return mt instanceof Date && !isNaN(mt.valueOf());
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oi = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
function Or(mt, qt, Ct, Gt, Sn, ki, Ui = false) {
  let cs = "";
  let La = false;
  if (isFinite(mt)) {
    let Yo = function fa(mt) {
      let Gt;
      let Sn;
      let ki;
      let Ui;
      let cs;
      let qt = Math.abs(mt) + "";
      let Ct = 0;
      if ((Sn = qt.indexOf(".")) > -1) {
        qt = qt.replace(".", "");
      }
      if ((ki = qt.search(/e/i)) > 0) {
        if (Sn < 0) {
          Sn = ki;
        }
        Sn += +qt.slice(ki + 1);
        qt = qt.substring(0, ki);
      } else if (Sn < 0) {
        Sn = qt.length;
      }
      ki = 0;
      for (; qt.charAt(ki) === "0"; ki++);
      if (ki === (cs = qt.length)) {
        Gt = [0];
        Sn = 1;
      } else {
        for (cs--; qt.charAt(cs) === "0";) {
          cs--;
        }
        Sn -= ki;
        Gt = [];
        Ui = 0;
        for (; ki <= cs; ki++, Ui++) {
          Gt[Ui] = Number(qt.charAt(ki));
        }
      }
      if (Sn > 22) {
        Gt = Gt.splice(0, 21);
        Ct = Sn - 1;
        Sn = 1;
      }
      return {
        digits: Gt,
        exponent: Ct,
        integerLen: Sn
      };
    }(mt);
    if (Ui) {
      Yo = function No(mt) {
        if (mt.digits[0] === 0) {
          return mt;
        }
        const qt = mt.digits.length - mt.integerLen;
        if (mt.exponent) {
          mt.exponent += 2;
        } else {
          if (qt === 0) {
            mt.digits.push(0, 0);
          } else if (qt === 1) {
            mt.digits.push(0);
          }
          mt.integerLen += 2;
        }
        return mt;
      }(Yo);
    }
    let Ts = qt.minInt;
    let Os = qt.minFrac;
    let Ga = qt.maxFrac;
    if (ki) {
      const Io = ki.match(oi);
      if (Io === null) {
        throw new Error(`${ki} is not a valid digit info`);
      }
      const Sa = Io[1];
      const hl = Io[3];
      const Kc = Io[5];
      if (Sa != null) {
        Ts = ks(Sa);
      }
      if (hl != null) {
        Os = ks(hl);
      }
      if (Kc != null) {
        Ga = ks(Kc);
      } else if (hl != null && Os > Ga) {
        Ga = Os;
      }
    }
    (function bo(mt, qt, Ct) {
      if (qt > Ct) {
        throw new Error(`The minimum number of digits after fraction (${qt}) is higher than the maximum (${Ct}).`);
      }
      let Gt = mt.digits;
      let Sn = Gt.length - mt.integerLen;
      const ki = Math.min(Math.max(qt, Sn), Ct);
      let Ui = ki + mt.integerLen;
      let cs = Gt[Ui];
      if (Ui > 0) {
        Gt.splice(Math.max(mt.integerLen, Ui));
        for (let Os = Ui; Os < Gt.length; Os++) {
          Gt[Os] = 0;
        }
      } else {
        Sn = Math.max(0, Sn);
        mt.integerLen = 1;
        Gt.length = Math.max(1, Ui = ki + 1);
        Gt[0] = 0;
        for (let Os = 1; Os < Ui; Os++) {
          Gt[Os] = 0;
        }
      }
      if (cs >= 5) {
        if (Ui - 1 < 0) {
          for (let Os = 0; Os > Ui; Os--) {
            Gt.unshift(0);
            mt.integerLen++;
          }
          Gt.unshift(1);
          mt.integerLen++;
        } else {
          Gt[Ui - 1]++;
        }
      }
      for (; Sn < Math.max(0, ki); Sn++) {
        Gt.push(0);
      }
      let La = ki !== 0;
      const Yo = qt + mt.integerLen;
      const Ts = Gt.reduceRight(function (Os, Ga, Zo, lo) {
        lo[Zo] = (Ga += Os) < 10 ? Ga : Ga - 10;
        if (La) {
          if (lo[Zo] === 0 && Zo >= Yo) {
            lo.pop();
          } else {
            La = false;
          }
        }
        if (Ga >= 10) {
          return 1;
        } else {
          return 0;
        }
      }, 0);
      if (Ts) {
        Gt.unshift(Ts);
        mt.integerLen++;
      }
    })(Yo, Os, Ga);
    let Zo = Yo.digits;
    let lo = Yo.integerLen;
    const gl = Yo.exponent;
    let Hs = [];
    for (La = Zo.every(Io => !Io); lo < Ts; lo++) {
      Zo.unshift(0);
    }
    for (; lo < 0; lo++) {
      Zo.unshift(0);
    }
    if (lo > 0) {
      Hs = Zo.splice(lo, Zo.length);
    } else {
      Hs = Zo;
      Zo = [0];
    }
    const As = [];
    for (Zo.length >= qt.lgSize && As.unshift(Zo.splice(-qt.lgSize, Zo.length).join("")); Zo.length > qt.gSize;) {
      As.unshift(Zo.splice(-qt.gSize, Zo.length).join(""));
    }
    if (Zo.length) {
      As.unshift(Zo.join(""));
    }
    cs = As.join(Qe(Ct, Gt));
    if (Hs.length) {
      cs += Qe(Ct, Sn) + Hs.join("");
    }
    if (gl) {
      cs += Qe(Ct, re.Exponential) + "+" + gl;
    }
  } else {
    cs = Qe(Ct, re.Infinity);
  }
  cs = mt < 0 && !La ? qt.negPre + cs + qt.negSuf : qt.posPre + cs + qt.posSuf;
  return cs;
}
export function xG(mt, qt, Ct, Gt, Sn) {
  const Ui = Zs(It(qt, W.Currency), Qe(qt, re.MinusSign));
  Ui.minFrac = function it(mt) {
    let qt;
    const Ct = se[mt];
    if (Ct) {
      qt = Ct[2];
    }
    if (typeof qt == "number") {
      return qt;
    } else {
      return 2;
    }
  }(Gt);
  Ui.maxFrac = Ui.minFrac;
  return Or(mt, Ui, qt, re.CurrencyGroup, re.CurrencyDecimal, Sn).replace("¤", Ct).replace("¤", "").trim();
}
function Zs(mt, qt = "-") {
  const Ct = {
    minInt: 1,
    minFrac: 0,
    maxFrac: 0,
    posPre: "",
    posSuf: "",
    negPre: "",
    negSuf: "",
    gSize: 0,
    lgSize: 0
  };
  const Gt = mt.split(";");
  const Sn = Gt[0];
  const ki = Gt[1];
  const Ui = Sn.indexOf(".") !== -1 ? Sn.split(".") : [Sn.substring(0, Sn.lastIndexOf("0") + 1), Sn.substring(Sn.lastIndexOf("0") + 1)];
  const cs = Ui[0];
  const La = Ui[1] || "";
  Ct.posPre = cs.substring(0, cs.indexOf("#"));
  for (let Ts = 0; Ts < La.length; Ts++) {
    const Os = La.charAt(Ts);
    if (Os === "0") {
      Ct.minFrac = Ct.maxFrac = Ts + 1;
    } else if (Os === "#") {
      Ct.maxFrac = Ts + 1;
    } else {
      Ct.posSuf += Os;
    }
  }
  const Yo = cs.split(",");
  Ct.gSize = Yo[1] ? Yo[1].length : 0;
  Ct.lgSize = Yo[2] || Yo[1] ? (Yo[2] || Yo[1]).length : 0;
  if (ki) {
    const Ts = Sn.length - Ct.posPre.length - Ct.posSuf.length;
    const Os = ki.indexOf("#");
    Ct.negPre = ki.substring(0, Os).replace(/'/g, "");
    Ct.negSuf = ki.slice(Os + Ts).replace(/'/g, "");
  } else {
    Ct.negPre = qt + Ct.posPre;
    Ct.negSuf = Ct.posSuf;
  }
  return Ct;
}
function ks(mt) {
  const qt = parseInt(mt);
  if (isNaN(qt)) {
    throw new Error("Invalid integer literal when parsing " + mt);
  }
  return qt;
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
export function qS(mt, qt, Ct) {
  return (0, i.dwT)(mt, qt, Ct);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Mx(mt, qt) {
  qt = encodeURIComponent(qt);
  for (const Ct of mt.split(";")) {
    const Gt = Ct.indexOf("=");
    const [Sn, ki] = Gt == -1 ? [Ct, ""] : [Ct.slice(0, Gt), Ct.slice(Gt + 1)];
    if (Sn.trim() === qt) {
      return decodeURIComponent(ki);
    }
  }
  return null;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let mk = (() => {
  class mt {
    constructor(Ct, Gt, Sn, ki) {
      this._iterableDiffers = Ct;
      this._keyValueDiffers = Gt;
      this._ngEl = Sn;
      this._renderer = ki;
      this._iterableDiffer = null;
      this._keyValueDiffer = null;
      this._initialClasses = [];
      this._rawClass = null;
    }
    set klass(Ct) {
      this._removeClasses(this._initialClasses);
      this._initialClasses = typeof Ct == "string" ? Ct.split(/\s+/) : [];
      this._applyClasses(this._initialClasses);
      this._applyClasses(this._rawClass);
    }
    set ngClass(Ct) {
      this._removeClasses(this._rawClass);
      this._applyClasses(this._initialClasses);
      this._iterableDiffer = null;
      this._keyValueDiffer = null;
      this._rawClass = typeof Ct == "string" ? Ct.split(/\s+/) : Ct;
      if (this._rawClass) {
        if ((0, i.sIi)(this._rawClass)) {
          this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
        } else {
          this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
        }
      }
    }
    ngDoCheck() {
      if (this._iterableDiffer) {
        const Ct = this._iterableDiffer.diff(this._rawClass);
        if (Ct) {
          this._applyIterableChanges(Ct);
        }
      } else if (this._keyValueDiffer) {
        const Ct = this._keyValueDiffer.diff(this._rawClass);
        if (Ct) {
          this._applyKeyValueChanges(Ct);
        }
      }
    }
    _applyKeyValueChanges(Ct) {
      Ct.forEachAddedItem(Gt => this._toggleClass(Gt.key, Gt.currentValue));
      Ct.forEachChangedItem(Gt => this._toggleClass(Gt.key, Gt.currentValue));
      Ct.forEachRemovedItem(Gt => {
        if (Gt.previousValue) {
          this._toggleClass(Gt.key, false);
        }
      });
    }
    _applyIterableChanges(Ct) {
      Ct.forEachAddedItem(Gt => {
        if (typeof Gt.item != "string") {
          throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0, i.AaK)(Gt.item)}`);
        }
        this._toggleClass(Gt.item, true);
      });
      Ct.forEachRemovedItem(Gt => this._toggleClass(Gt.item, false));
    }
    _applyClasses(Ct) {
      if (Ct) {
        if (Array.isArray(Ct) || Ct instanceof Set) {
          Ct.forEach(Gt => this._toggleClass(Gt, true));
        } else {
          Object.keys(Ct).forEach(Gt => this._toggleClass(Gt, !!Ct[Gt]));
        }
      }
    }
    _removeClasses(Ct) {
      if (Ct) {
        if (Array.isArray(Ct) || Ct instanceof Set) {
          Ct.forEach(Gt => this._toggleClass(Gt, false));
        } else {
          Object.keys(Ct).forEach(Gt => this._toggleClass(Gt, false));
        }
      }
    }
    _toggleClass(Ct, Gt) {
      if (Ct = Ct.trim()) {
        Ct.split(/\s+/g).forEach(Sn => {
          if (Gt) {
            this._renderer.addClass(this._ngEl.nativeElement, Sn);
          } else {
            this._renderer.removeClass(this._ngEl.nativeElement, Sn);
          }
        });
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.ZZ4), i.Y36(i.aQg), i.Y36(i.SBq), i.Y36(i.Qsj));
  };
  mt.ɵdir = i.lG2({
    type: mt,
    selectors: [["", "ngClass", ""]],
    inputs: {
      klass: ["class", "klass"],
      ngClass: "ngClass"
    },
    standalone: true
  });
  return mt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class qa {
  constructor(qt, Ct, Gt, Sn) {
    this.$implicit = qt;
    this.ngForOf = Ct;
    this.index = Gt;
    this.count = Sn;
  }
  get first() {
    return this.index === 0;
  }
  get last() {
    return this.index === this.count - 1;
  }
  get even() {
    return this.index % 2 == 0;
  }
  get odd() {
    return !this.even;
  }
}
export let sg = (() => {
  class mt {
    constructor(Ct, Gt, Sn) {
      this._viewContainer = Ct;
      this._template = Gt;
      this._differs = Sn;
      this._ngForOf = null;
      this._ngForOfDirty = true;
      this._differ = null;
    }
    set ngForOf(Ct) {
      this._ngForOf = Ct;
      this._ngForOfDirty = true;
    }
    set ngForTrackBy(Ct) {
      this._trackByFn = Ct;
    }
    get ngForTrackBy() {
      return this._trackByFn;
    }
    set ngForTemplate(Ct) {
      if (Ct) {
        this._template = Ct;
      }
    }
    ngDoCheck() {
      if (this._ngForOfDirty) {
        this._ngForOfDirty = false;
        const Ct = this._ngForOf;
        if (!this._differ && Ct) {
          this._differ = this._differs.find(Ct).create(this.ngForTrackBy);
        }
      }
      if (this._differ) {
        const Ct = this._differ.diff(this._ngForOf);
        if (Ct) {
          this._applyChanges(Ct);
        }
      }
    }
    _applyChanges(Ct) {
      const Gt = this._viewContainer;
      Ct.forEachOperation((Sn, ki, Ui) => {
        if (Sn.previousIndex == null) {
          Gt.createEmbeddedView(this._template, new qa(Sn.item, this._ngForOf, -1, -1), Ui === null ? undefined : Ui);
        } else if (Ui == null) {
          Gt.remove(ki === null ? undefined : ki);
        } else if (ki !== null) {
          const cs = Gt.get(ki);
          Gt.move(cs, Ui);
          la(cs, Sn);
        }
      });
      for (let Sn = 0, ki = Gt.length; Sn < ki; Sn++) {
        const cs = Gt.get(Sn).context;
        cs.index = Sn;
        cs.count = ki;
        cs.ngForOf = this._ngForOf;
      }
      Ct.forEachIdentityChange(Sn => {
        la(Gt.get(Sn.currentIndex), Sn);
      });
    }
    static ngTemplateContextGuard(Ct, Gt) {
      return true;
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.s_b), i.Y36(i.Rgc), i.Y36(i.ZZ4));
  };
  mt.ɵdir = i.lG2({
    type: mt,
    selectors: [["", "ngFor", "", "ngForOf", ""]],
    inputs: {
      ngForOf: "ngForOf",
      ngForTrackBy: "ngForTrackBy",
      ngForTemplate: "ngForTemplate"
    },
    standalone: true
  });
  return mt;
})();
function la(mt, qt) {
  mt.context.$implicit = qt.item;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let O5 = (() => {
  class mt {
    constructor(Ct, Gt) {
      this._viewContainer = Ct;
      this._context = new Es();
      this._thenTemplateRef = null;
      this._elseTemplateRef = null;
      this._thenViewRef = null;
      this._elseViewRef = null;
      this._thenTemplateRef = Gt;
    }
    set ngIf(Ct) {
      this._context.$implicit = this._context.ngIf = Ct;
      this._updateView();
    }
    set ngIfThen(Ct) {
      Ao("ngIfThen", Ct);
      this._thenTemplateRef = Ct;
      this._thenViewRef = null;
      this._updateView();
    }
    set ngIfElse(Ct) {
      Ao("ngIfElse", Ct);
      this._elseTemplateRef = Ct;
      this._elseViewRef = null;
      this._updateView();
    }
    _updateView() {
      if (this._context.$implicit) {
        if (!this._thenViewRef) {
          this._viewContainer.clear();
          this._elseViewRef = null;
          if (this._thenTemplateRef) {
            this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
          }
        }
      } else if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      }
    }
    static ngTemplateContextGuard(Ct, Gt) {
      return true;
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.s_b), i.Y36(i.Rgc));
  };
  mt.ɵdir = i.lG2({
    type: mt,
    selectors: [["", "ngIf", ""]],
    inputs: {
      ngIf: "ngIf",
      ngIfThen: "ngIfThen",
      ngIfElse: "ngIfElse"
    },
    standalone: true
  });
  return mt;
})();
class Es {
  constructor() {
    this.$implicit = null;
    this.ngIf = null;
  }
}
function Ao(mt, qt) {
  if (qt && !qt.createEmbeddedView) {
    throw new Error(`${mt} must be a TemplateRef, but received '${(0, i.AaK)(qt)}'.`);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Pa {
  constructor(qt, Ct) {
    this._viewContainerRef = qt;
    this._templateRef = Ct;
    this._created = false;
  }
  create() {
    this._created = true;
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }
  destroy() {
    this._created = false;
    this._viewContainerRef.clear();
  }
  enforceState(qt) {
    if (qt && !this._created) {
      this.create();
    } else if (!qt && this._created) {
      this.destroy();
    }
  }
}
export let RF = (() => {
  class mt {
    constructor() {
      this._defaultUsed = false;
      this._caseCount = 0;
      this._lastCaseCheckIndex = 0;
      this._lastCasesMatched = false;
    }
    set ngSwitch(Ct) {
      this._ngSwitch = Ct;
      if (this._caseCount === 0) {
        this._updateDefaultCases(true);
      }
    }
    _addCase() {
      return this._caseCount++;
    }
    _addDefault(Ct) {
      this._defaultViews ||= [];
      this._defaultViews.push(Ct);
    }
    _matchCase(Ct) {
      const Gt = Ct == this._ngSwitch;
      this._lastCasesMatched = this._lastCasesMatched || Gt;
      this._lastCaseCheckIndex++;
      if (this._lastCaseCheckIndex === this._caseCount) {
        this._updateDefaultCases(!this._lastCasesMatched);
        this._lastCaseCheckIndex = 0;
        this._lastCasesMatched = false;
      }
      return Gt;
    }
    _updateDefaultCases(Ct) {
      if (this._defaultViews && Ct !== this._defaultUsed) {
        this._defaultUsed = Ct;
        for (let Gt = 0; Gt < this._defaultViews.length; Gt++) {
          this._defaultViews[Gt].enforceState(Ct);
        }
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)();
  };
  mt.ɵdir = i.lG2({
    type: mt,
    selectors: [["", "ngSwitch", ""]],
    inputs: {
      ngSwitch: "ngSwitch"
    },
    standalone: true
  });
  return mt;
})();
export let n9 = (() => {
  class mt {
    constructor(Ct, Gt, Sn) {
      this.ngSwitch = Sn;
      Sn._addCase();
      this._view = new Pa(Ct, Gt);
    }
    ngDoCheck() {
      this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.s_b), i.Y36(i.Rgc), i.Y36(RF, 9));
  };
  mt.ɵdir = i.lG2({
    type: mt,
    selectors: [["", "ngSwitchCase", ""]],
    inputs: {
      ngSwitchCase: "ngSwitchCase"
    },
    standalone: true
  });
  return mt;
})();
export let PC = (() => {
  class mt {
    constructor(Ct, Gt, Sn) {
      this._ngEl = Ct;
      this._differs = Gt;
      this._renderer = Sn;
      this._ngStyle = null;
      this._differ = null;
    }
    set ngStyle(Ct) {
      this._ngStyle = Ct;
      if (!this._differ && Ct) {
        this._differ = this._differs.find(Ct).create();
      }
    }
    ngDoCheck() {
      if (this._differ) {
        const Ct = this._differ.diff(this._ngStyle);
        if (Ct) {
          this._applyChanges(Ct);
        }
      }
    }
    _setStyle(Ct, Gt) {
      const [Sn, ki] = Ct.split(".");
      const Ui = Sn.indexOf("-") === -1 ? undefined : i.JOm.DashCase;
      if (Gt != null) {
        this._renderer.setStyle(this._ngEl.nativeElement, Sn, ki ? `${Gt}${ki}` : Gt, Ui);
      } else {
        this._renderer.removeStyle(this._ngEl.nativeElement, Sn, Ui);
      }
    }
    _applyChanges(Ct) {
      Ct.forEachRemovedItem(Gt => this._setStyle(Gt.key, null));
      Ct.forEachAddedItem(Gt => this._setStyle(Gt.key, Gt.currentValue));
      Ct.forEachChangedItem(Gt => this._setStyle(Gt.key, Gt.currentValue));
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.SBq), i.Y36(i.aQg), i.Y36(i.Qsj));
  };
  mt.ɵdir = i.lG2({
    type: mt,
    selectors: [["", "ngStyle", ""]],
    inputs: {
      ngStyle: "ngStyle"
    },
    standalone: true
  });
  return mt;
})();
export let tP = (() => {
  class mt {
    constructor(Ct) {
      this._viewContainerRef = Ct;
      this._viewRef = null;
      this.ngTemplateOutletContext = null;
      this.ngTemplateOutlet = null;
      this.ngTemplateOutletInjector = null;
    }
    ngOnChanges(Ct) {
      if (Ct.ngTemplateOutlet || Ct.ngTemplateOutletInjector) {
        const Gt = this._viewContainerRef;
        if (this._viewRef) {
          Gt.remove(Gt.indexOf(this._viewRef));
        }
        if (this.ngTemplateOutlet) {
          const {
            ngTemplateOutlet: Sn,
            ngTemplateOutletContext: ki,
            ngTemplateOutletInjector: Ui
          } = this;
          this._viewRef = Gt.createEmbeddedView(Sn, ki, Ui ? {
            injector: Ui
          } : undefined);
        } else {
          this._viewRef = null;
        }
      } else if (this._viewRef && Ct.ngTemplateOutletContext && this.ngTemplateOutletContext) {
        this._viewRef.context = this.ngTemplateOutletContext;
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.s_b));
  };
  mt.ɵdir = i.lG2({
    type: mt,
    selectors: [["", "ngTemplateOutlet", ""]],
    inputs: {
      ngTemplateOutletContext: "ngTemplateOutletContext",
      ngTemplateOutlet: "ngTemplateOutlet",
      ngTemplateOutletInjector: "ngTemplateOutletInjector"
    },
    standalone: true,
    features: [i.TTD]
  });
  return mt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ko(mt, qt) {
  return new i.vHH(2100, false);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class So {
  createSubscription(qt, Ct) {
    return qt.subscribe({
      next: Ct,
      error: Gt => {
        throw Gt;
      }
    });
  }
  dispose(qt) {
    qt.unsubscribe();
  }
}
class pa {
  createSubscription(qt, Ct) {
    return qt.then(Ct, Gt => {
      throw Gt;
    });
  }
  dispose(qt) {}
}
const Ia = new pa();
const po = new So();
export let Ov = (() => {
  class mt {
    constructor(Ct) {
      this._latestValue = null;
      this._subscription = null;
      this._obj = null;
      this._strategy = null;
      this._ref = Ct;
    }
    ngOnDestroy() {
      if (this._subscription) {
        this._dispose();
      }
      this._ref = null;
    }
    transform(Ct) {
      if (this._obj) {
        if (Ct !== this._obj) {
          this._dispose();
          return this.transform(Ct);
        } else {
          return this._latestValue;
        }
      } else {
        if (Ct) {
          this._subscribe(Ct);
        }
        return this._latestValue;
      }
    }
    _subscribe(Ct) {
      this._obj = Ct;
      this._strategy = this._selectStrategy(Ct);
      this._subscription = this._strategy.createSubscription(Ct, Gt => this._updateLatestValue(Ct, Gt));
    }
    _selectStrategy(Ct) {
      if ((0, i.QGY)(Ct)) {
        return Ia;
      }
      if ((0, i.F4k)(Ct)) {
        return po;
      }
      throw ko();
    }
    _dispose() {
      this._strategy.dispose(this._subscription);
      this._latestValue = null;
      this._subscription = null;
      this._obj = null;
    }
    _updateLatestValue(Ct, Gt) {
      if (Ct === this._obj) {
        this._latestValue = Gt;
        this._ref.markForCheck();
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.sBO, 16));
  };
  mt.ɵpipe = i.Yjl({
    name: "async",
    type: mt,
    pure: false,
    standalone: true
  });
  return mt;
})();
export let i8 = (() => {
  class mt {
    transform(Ct) {
      if (Ct == null) {
        return null;
      }
      if (typeof Ct != "string") {
        throw ko();
      }
      return Ct.toLowerCase();
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)();
  };
  mt.ɵpipe = i.Yjl({
    name: "lowercase",
    type: mt,
    pure: true,
    standalone: true
  });
  return mt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Rs = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
export let rS = (() => {
  class mt {
    transform(Ct) {
      if (Ct == null) {
        return null;
      }
      if (typeof Ct != "string") {
        throw ko();
      }
      return Ct.replace(Rs, Gt => Gt[0].toUpperCase() + Gt.slice(1).toLowerCase());
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)();
  };
  mt.ɵpipe = i.Yjl({
    name: "titlecase",
    type: mt,
    pure: true,
    standalone: true
  });
  return mt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qs = new i.OlP("DATE_PIPE_DEFAULT_TIMEZONE");
export let uU = (() => {
  class mt {
    constructor(Ct, Gt) {
      this.locale = Ct;
      this.defaultTimezone = Gt;
    }
    transform(Ct, Gt = "mediumDate", Sn, ki) {
      if (Ct == null || Ct === "" || Ct != Ct) {
        return null;
      }
      try {
        return hn(Ct, Gt, ki || this.locale, Sn ?? this.defaultTimezone ?? undefined);
      } catch (cs) {
        throw ko();
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.soG, 16), i.Y36(Qs, 24));
  };
  mt.ɵpipe = i.Yjl({
    name: "date",
    type: mt,
    pure: true,
    standalone: true
  });
  return mt;
})();
export let Nd = (() => {
  class mt {
    constructor(Ct) {
      this.differs = Ct;
      this.keyValues = [];
      this.compareFn = Bt;
    }
    transform(Ct, Gt = Bt) {
      if (!Ct || !(Ct instanceof Map) && typeof Ct != "object") {
        return null;
      }
      this.differ ||= this.differs.find(Ct).create();
      const Sn = this.differ.diff(Ct);
      const ki = Gt !== this.compareFn;
      if (Sn) {
        this.keyValues = [];
        Sn.forEachItem(Ui => {
          this.keyValues.push(
          /**
                 * @license
                 * Copyright Google LLC All Rights Reserved.
                 *
                 * Use of this source code is governed by an MIT-style license that can be
                 * found in the LICENSE file at https://angular.io/license
                 */
          function Je(mt, qt) {
            return {
              key: mt,
              value: qt
            };
          }(Ui.key, Ui.currentValue));
        });
      }
      if (Sn || ki) {
        this.keyValues.sort(Gt);
        this.compareFn = Gt;
      }
      return this.keyValues;
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.aQg, 16));
  };
  mt.ɵpipe = i.Yjl({
    name: "keyvalue",
    type: mt,
    pure: false,
    standalone: true
  });
  return mt;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bt(mt, qt) {
  const Ct = mt.key;
  const Gt = qt.key;
  if (Ct === Gt) {
    return 0;
  }
  if (Ct === undefined) {
    return 1;
  }
  if (Gt === undefined) {
    return -1;
  }
  if (Ct === null) {
    return 1;
  }
  if (Gt === null) {
    return -1;
  }
  if (typeof Ct == "string" && typeof Gt == "string") {
    if (Ct < Gt) {
      return -1;
    } else {
      return 1;
    }
  }
  if (typeof Ct == "number" && typeof Gt == "number") {
    return Ct - Gt;
  }
  if (typeof Ct == "boolean" && typeof Gt == "boolean") {
    if (Ct < Gt) {
      return -1;
    } else {
      return 1;
    }
  }
  const Sn = String(Ct);
  const ki = String(Gt);
  if (Sn == ki) {
    return 0;
  } else if (Sn < ki) {
    return -1;
  } else {
    return 1;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let JJ = (() => {
  class mt {
    constructor(Ct) {
      this._locale = Ct;
    }
    transform(Ct, Gt, Sn) {
      if (!Lr(Ct)) {
        return null;
      }
      Sn = Sn || this._locale;
      try {
        return function kr(mt, qt, Ct) {
          return Or(mt, Zs(It(qt, W.Decimal), Qe(qt, re.MinusSign)), qt, re.Group, re.Decimal, Ct);
        }(Gr(Ct), Sn, Gt);
      } catch (ki) {
        throw ko();
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.soG, 16));
  };
  mt.ɵpipe = i.Yjl({
    name: "number",
    type: mt,
    pure: true,
    standalone: true
  });
  return mt;
})();
export let H9 = (() => {
  class mt {
    constructor(Ct, Gt = "USD") {
      this._locale = Ct;
      this._defaultCurrencyCode = Gt;
    }
    transform(Ct, Gt = this._defaultCurrencyCode, Sn = "symbol", ki, Ui) {
      if (!Lr(Ct)) {
        return null;
      }
      Ui = Ui || this._locale;
      if (typeof Sn == "boolean") {
        Sn = Sn ? "symbol" : "code";
      }
      let cs = Gt || this._defaultCurrencyCode;
      if (Sn !== "code") {
        cs = Sn === "symbol" || Sn === "symbol-narrow" ? jK(cs, Sn === "symbol" ? "wide" : "narrow", Ui) : Sn;
      }
      try {
        return xG(Gr(Ct), Ui, cs, Gt, ki);
      } catch (La) {
        throw ko();
      }
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)(i.Y36(i.soG, 16), i.Y36(i.EJc, 16));
  };
  mt.ɵpipe = i.Yjl({
    name: "currency",
    type: mt,
    pure: true,
    standalone: true
  });
  return mt;
})();
function Lr(mt) {
  return mt != null && mt !== "" && mt == mt;
}
function Gr(mt) {
  if (typeof mt == "string" && !isNaN(Number(mt) - parseFloat(mt))) {
    return Number(mt);
  }
  if (typeof mt != "number") {
    throw new Error(`${mt} is not a number`);
  }
  return mt;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let OU = (() => {
  class mt {
    transform(Ct, Gt, Sn) {
      if (Ct == null) {
        return null;
      }
      if (!this.supports(Ct)) {
        throw ko();
      }
      return Ct.slice(Gt, Sn);
    }
    supports(Ct) {
      return typeof Ct == "string" || Array.isArray(Ct);
    }
  }
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)();
  };
  mt.ɵpipe = i.Yjl({
    name: "slice",
    type: mt,
    pure: false,
    standalone: true
  });
  return mt;
})();
export let ez = (() => {
  class mt {}
  mt.ɵfac = function (Ct) {
    return new (Ct || mt)();
  };
  mt.ɵmod = i.oAB({
    type: mt
  });
  mt.ɵinj = i.cJS({});
  return mt;
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
export const bD = "browser";
export function NF(mt) {
  return mt === bD;
}
export function PM(mt) {
  return mt === "server";
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let EM = (() => {
  class mt {}
  mt.ɵprov = (0, i.Yz7)({
    token: mt,
    providedIn: "root",
    factory: () => new _mr((0, i.LFG)(K0), window)
  });
  return mt;
})();
class _mr {
  constructor(qt, Ct) {
    this.document = qt;
    this.window = Ct;
    this.offset = () => [0, 0];
  }
  setOffset(qt) {
    this.offset = Array.isArray(qt) ? () => qt : qt;
  }
  getScrollPosition() {
    if (this.supportsScrolling()) {
      return [this.window.pageXOffset, this.window.pageYOffset];
    } else {
      return [0, 0];
    }
  }
  scrollToPosition(qt) {
    if (this.supportsScrolling()) {
      this.window.scrollTo(qt[0], qt[1]);
    }
  }
  scrollToAnchor(qt) {
    if (!this.supportsScrolling()) {
      return;
    }
    const Ct = function Ss(mt, qt) {
      const Ct = mt.getElementById(qt) || mt.getElementsByName(qt)[0];
      if (Ct) {
        return Ct;
      }
      if (typeof mt.createTreeWalker == "function" && mt.body && (mt.body.createShadowRoot || mt.body.attachShadow)) {
        const Gt = mt.createTreeWalker(mt.body, NodeFilter.SHOW_ELEMENT);
        let Sn = Gt.currentNode;
        for (; Sn;) {
          const ki = Sn.shadowRoot;
          if (ki) {
            const Ui = ki.getElementById(qt) || ki.querySelector(`[name="${qt}"]`);
            if (Ui) {
              return Ui;
            }
          }
          Sn = Gt.nextNode();
        }
      }
      return null;
    }(this.document, qt);
    if (Ct) {
      this.scrollToElement(Ct);
      Ct.focus();
    }
  }
  setHistoryScrollRestoration(qt) {
    if (this.supportScrollRestoration()) {
      const Ct = this.window.history;
      if (Ct && Ct.scrollRestoration) {
        Ct.scrollRestoration = qt;
      }
    }
  }
  scrollToElement(qt) {
    const Ct = qt.getBoundingClientRect();
    const Gt = Ct.left + this.window.pageXOffset;
    const Sn = Ct.top + this.window.pageYOffset;
    const ki = this.offset();
    this.window.scrollTo(Gt - ki[0], Sn - ki[1]);
  }
  supportScrollRestoration() {
    try {
      if (!this.supportsScrolling()) {
        return false;
      }
      const qt = Jr(this.window.history) || Jr(Object.getPrototypeOf(this.window.history));
      return !!qt && (!!qt.writable || !!qt.set);
    } catch {
      return false;
    }
  }
  supportsScrolling() {
    try {
      return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window;
    } catch {
      return false;
    }
  }
}
function Jr(mt) {
  return Object.getOwnPropertyDescriptor(mt, "scrollRestoration");
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class JF {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */