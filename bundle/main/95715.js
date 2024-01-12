import * as i from "94650";
import * as t from "50457";
import * as b from "39646";
import * as k from "61135";
const v = (0, require("83888").d)(je => function () {
  je(this);
  this.name = "EmptyError";
  this.message = "no elements in sequence";
});
import * as C from "39841";
import * as S from "49770";
import * as I from "62843";
import * as O from "60515";
import * as x from "94033";
import * as U from "77579";
import * as B from "36895";
import * as F from "54004";
import * as Z from "63900";
import * as X from "95698";
import * as fe from "39300";
import * as q from "95577";
import * as j from "46590";
import * as G from "54482";
import * as se from "25403";
function W(je = Pe) {
  return (0, G.e)((Ie, ye) => {
    let gt = false;
    Ie.subscribe((0, se.x)(ye, kt => {
      gt = true;
      ye.next(kt);
    }, () => gt ? ye.complete() : ye.error(je())));
  });
}
function Pe() {
  return new v();
}
import * as Le from "44671";
function he(je, Ie) {
  const ye = arguments.length >= 2;
  return gt => gt.pipe(je ? (0, fe.h)((kt, fn) => je(kt, fn, gt)) : Le.y, (0, X.q)(1), ye ? (0, j.d)(Ie) : W(() => new v()));
}
import * as pe from "24351";
import * as re from "18505";
import * as Re from "70262";
import * as Ge from "75026";
function Ue(je) {
  if (je <= 0) {
    return () => O.E;
  } else {
    return (0, G.e)((Ie, ye) => {
      let gt = [];
      Ie.subscribe((0, se.x)(ye, kt => {
        gt.push(kt);
        if (je < gt.length) {
          gt.shift();
        }
      }, () => {
        for (const kt of gt) {
          ye.next(kt);
        }
        ye.complete();
      }, undefined, () => {
        gt = null;
      }));
    });
  }
}
function ot(je, Ie) {
  const ye = arguments.length >= 2;
  return gt => gt.pipe(je ? (0, fe.h)((kt, fn) => je(kt, fn, gt)) : Le.y, Ue(1), ye ? (0, j.d)(Ie) : W(() => new v()));
}
import * as Oe from "28746";
import * as Ee from "38343";
import * as ke from "8189";
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
const De = "primary";
const Qe = Symbol("RouteTitle");
class It {
  constructor(Ie) {
    this.params = Ie || {};
  }
  has(Ie) {
    return Object.prototype.hasOwnProperty.call(this.params, Ie);
  }
  get(Ie) {
    if (this.has(Ie)) {
      const ye = this.params[Ie];
      if (Array.isArray(ye)) {
        return ye[0];
      } else {
        return ye;
      }
    }
    return null;
  }
  getAll(Ie) {
    if (this.has(Ie)) {
      const ye = this.params[Ie];
      if (Array.isArray(ye)) {
        return ye;
      } else {
        return [ye];
      }
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
}
function Yt(je) {
  return new It(je);
}
function Dn(je, Ie, ye) {
  const gt = ye.path.split("/");
  if (gt.length > je.length || ye.pathMatch === "full" && (Ie.hasChildren() || gt.length < je.length)) {
    return null;
  }
  const kt = {};
  for (let fn = 0; fn < gt.length; fn++) {
    const Nn = gt[fn];
    const Tn = je[fn];
    if (Nn.startsWith(":")) {
      kt[Nn.substring(1)] = Tn;
    } else if (Nn !== Tn.path) {
      return null;
    }
  }
  return {
    consumed: je.slice(0, gt.length),
    posParams: kt
  };
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lt(je, Ie) {
  const ye = je ? Object.keys(je) : undefined;
  const gt = Ie ? Object.keys(Ie) : undefined;
  if (!ye || !gt || ye.length != gt.length) {
    return false;
  }
  let kt;
  for (let fn = 0; fn < ye.length; fn++) {
    kt = ye[fn];
    if (!et(je[kt], Ie[kt])) {
      return false;
    }
  }
  return true;
}
function et(je, Ie) {
  if (Array.isArray(je) && Array.isArray(Ie)) {
    if (je.length !== Ie.length) {
      return false;
    }
    const ye = [...je].sort();
    const gt = [...Ie].sort();
    return ye.every((kt, fn) => gt[fn] === kt);
  }
  return je === Ie;
}
function St(je) {
  return Array.prototype.concat.apply([], je);
}
function ve(je) {
  if (je.length > 0) {
    return je[je.length - 1];
  } else {
    return null;
  }
}
function ft(je, Ie) {
  for (const ye in je) {
    if (je.hasOwnProperty(ye)) {
      Ie(je[ye], ye);
    }
  }
}
function qe(je) {
  if ((0, i.CqO)(je)) {
    return je;
  } else if ((0, i.QGY)(je)) {
    return (0, t.D)(Promise.resolve(je));
  } else {
    return (0, b.of)(je);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const me = {
  exact: function Ze(je, Ie, ye) {
    if (!di(je.segments, Ie.segments) || !hn(je.segments, Ie.segments, ye) || je.numberOfChildren !== Ie.numberOfChildren) {
      return false;
    }
    for (const gt in Ie.children) {
      if (!je.children[gt] || !Ze(je.children[gt], Ie.children[gt], ye)) {
        return false;
      }
    }
    return true;
  },
  subset: yt
};
const it = {
  exact: function Ut(je, Ie) {
    return lt(je, Ie);
  },
  subset: function pt(je, Ie) {
    return Object.keys(Ie).length <= Object.keys(je).length && Object.keys(Ie).every(ye => et(je[ye], Ie[ye]));
  },
  ignored: () => true
};
function bt(je, Ie, ye) {
  return me[ye.paths](je.root, Ie.root, ye.matrixParams) && it[ye.queryParams](je.queryParams, Ie.queryParams) && (ye.fragment !== "exact" || je.fragment === Ie.fragment);
}
function yt(je, Ie, ye) {
  return Wt(je, Ie, Ie.segments, ye);
}
function Wt(je, Ie, ye, gt) {
  if (je.segments.length > ye.length) {
    const kt = je.segments.slice(0, ye.length);
    return !!di(kt, ye) && !Ie.hasChildren() && !!hn(kt, ye, gt);
  }
  if (je.segments.length === ye.length) {
    if (!di(je.segments, ye) || !hn(je.segments, ye, gt)) {
      return false;
    }
    for (const kt in Ie.children) {
      if (!je.children[kt] || !yt(je.children[kt], Ie.children[kt], gt)) {
        return false;
      }
    }
    return true;
  }
  {
    const kt = ye.slice(0, je.segments.length);
    const fn = ye.slice(je.segments.length);
    return !!di(je.segments, kt) && !!hn(je.segments, kt, gt) && !!je.children[De] && Wt(je.children[De], Ie, fn, gt);
  }
}
function hn(je, Ie, ye) {
  return Ie.every((gt, kt) => it[ye](je[kt].parameters, gt.parameters));
}
class Kt {
  constructor(Ie, ye, gt) {
    this.root = Ie;
    this.queryParams = ye;
    this.fragment = gt;
  }
  get queryParamMap() {
    this._queryParamMap ||= Yt(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    return Qi.serialize(this);
  }
}
class on {
  constructor(Ie, ye) {
    this.segments = Ie;
    this.children = ye;
    this.parent = null;
    ft(ye, (gt, kt) => gt.parent = this);
  }
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  toString() {
    return br(this);
  }
}
class Rn {
  constructor(Ie, ye) {
    this.path = Ie;
    this.parameters = ye;
  }
  get parameterMap() {
    this._parameterMap ||= Yt(this.parameters);
    return this._parameterMap;
  }
  toString() {
    return so(this);
  }
}
function di(je, Ie) {
  return je.length === Ie.length && je.every((ye, gt) => ye.path === Ie[gt].path);
}
let Zi = (() => {
  class je {}
  je.ɵfac = function (ye) {
    return new (ye || je)();
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: function () {
      return new $i();
    },
    providedIn: "root"
  });
  return je;
})();
class $i {
  parse(Ie) {
    const ye = new bn(Ie);
    return new Kt(ye.parseRootSegment(), ye.parseQueryParams(), ye.parseFragment());
  }
  serialize(Ie) {
    const ye = `/${Ar(Ie.root, true)}`;
    const gt = function js(je) {
      const Ie = Object.keys(je).map(ye => {
        const gt = je[ye];
        if (Array.isArray(gt)) {
          return gt.map(kt => `${Ur(ye)}=${Ur(kt)}`).join("&");
        } else {
          return `${Ur(ye)}=${Ur(gt)}`;
        }
      }).filter(ye => !!ye);
      if (Ie.length) {
        return `?${Ie.join("&")}`;
      } else {
        return "";
      }
    }(Ie.queryParams);
    return `${ye}${gt}${typeof Ie.fragment == "string" ? `#${function Br(je) {
      return encodeURI(je);
    }(Ie.fragment)}` : ""}`;
  }
}
const Qi = new $i();
function br(je) {
  return je.segments.map(Ie => so(Ie)).join("/");
}
function Ar(je, Ie) {
  if (!je.hasChildren()) {
    return br(je);
  }
  if (Ie) {
    const ye = je.children[De] ? Ar(je.children[De], false) : "";
    const gt = [];
    ft(je.children, (kt, fn) => {
      if (fn !== De) {
        gt.push(`${fn}:${Ar(kt, false)}`);
      }
    });
    if (gt.length > 0) {
      return `${ye}(${gt.join("//")})`;
    } else {
      return ye;
    }
  }
  {
    const ye = function Si(je, Ie) {
      let ye = [];
      ft(je.children, (gt, kt) => {
        if (kt === De) {
          ye = ye.concat(Ie(gt, kt));
        }
      });
      ft(je.children, (gt, kt) => {
        if (kt !== De) {
          ye = ye.concat(Ie(gt, kt));
        }
      });
      return ye;
    }(je, (gt, kt) => kt === De ? [Ar(je.children[De], false)] : [`${kt}:${Ar(gt, false)}`]);
    if (Object.keys(je.children).length === 1 && je.children[De] != null) {
      return `${br(je)}/${ye[0]}`;
    } else {
      return `${br(je)}/(${ye.join("//")})`;
    }
  }
}
function vr(je) {
  return encodeURIComponent(je).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function Ur(je) {
  return vr(je).replace(/%3B/gi, ";");
}
function rs(je) {
  return vr(je).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function vs(je) {
  return decodeURIComponent(je);
}
function wo(je) {
  return vs(je.replace(/\+/g, "%20"));
}
function so(je) {
  return `${rs(je.path)}${function sa(je) {
    return Object.keys(je).map(Ie => `;${rs(Ie)}=${rs(je[Ie])}`).join("");
  }(je.parameters)}`;
}
const Tr = /^[^\/()?;=#]+/;
function ns(je) {
  const Ie = je.match(Tr);
  if (Ie) {
    return Ie[0];
  } else {
    return "";
  }
}
const pr = /^[^=?&#]+/;
const oi = /^[^&#]+/;
class bn {
  constructor(Ie) {
    this.url = Ie;
    this.remaining = Ie;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new on([], {});
    } else {
      return new on([], this.parseChildren());
    }
  }
  parseQueryParams() {
    const Ie = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(Ie);
      } while (this.consumeOptional("&"));
    }
    return Ie;
  }
  parseFragment() {
    if (this.consumeOptional("#")) {
      return decodeURIComponent(this.remaining);
    } else {
      return null;
    }
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const Ie = [];
    for (this.peekStartsWith("(") || Ie.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) {
      this.capture("/");
      Ie.push(this.parseSegment());
    }
    let ye = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      ye = this.parseParens(true);
    }
    let gt = {};
    if (this.peekStartsWith("(")) {
      gt = this.parseParens(false);
    }
    if (Ie.length > 0 || Object.keys(ye).length > 0) {
      gt[De] = new on(Ie, ye);
    }
    return gt;
  }
  parseSegment() {
    const Ie = ns(this.remaining);
    if (Ie === "" && this.peekStartsWith(";")) {
      throw new i.vHH(4009, false);
    }
    this.capture(Ie);
    return new Rn(vs(Ie), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const Ie = {};
    for (; this.consumeOptional(";");) {
      this.parseParam(Ie);
    }
    return Ie;
  }
  parseParam(Ie) {
    const ye = ns(this.remaining);
    if (!ye) {
      return;
    }
    this.capture(ye);
    let gt = "";
    if (this.consumeOptional("=")) {
      const kt = ns(this.remaining);
      if (kt) {
        gt = kt;
        this.capture(gt);
      }
    }
    Ie[vs(ye)] = vs(gt);
  }
  parseQueryParam(Ie) {
    const ye = function Bn(je) {
      const Ie = je.match(pr);
      if (Ie) {
        return Ie[0];
      } else {
        return "";
      }
    }(this.remaining);
    if (!ye) {
      return;
    }
    this.capture(ye);
    let gt = "";
    if (this.consumeOptional("=")) {
      const Nn = function fi(je) {
        const Ie = je.match(oi);
        if (Ie) {
          return Ie[0];
        } else {
          return "";
        }
      }(this.remaining);
      if (Nn) {
        gt = Nn;
        this.capture(gt);
      }
    }
    const kt = wo(ye);
    const fn = wo(gt);
    if (Ie.hasOwnProperty(kt)) {
      let Nn = Ie[kt];
      if (!Array.isArray(Nn)) {
        Nn = [Nn];
        Ie[kt] = Nn;
      }
      Nn.push(fn);
    } else {
      Ie[kt] = fn;
    }
  }
  parseParens(Ie) {
    const ye = {};
    for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
      const gt = ns(this.remaining);
      const kt = this.remaining[gt.length];
      if (kt !== "/" && kt !== ")" && kt !== ";") {
        throw new i.vHH(4010, false);
      }
      let fn;
      if (gt.indexOf(":") > -1) {
        fn = gt.slice(0, gt.indexOf(":"));
        this.capture(fn);
        this.capture(":");
      } else if (Ie) {
        fn = De;
      }
      const Nn = this.parseChildren();
      ye[fn] = Object.keys(Nn).length === 1 ? Nn[De] : new on([], Nn);
      this.consumeOptional("//");
    }
    return ye;
  }
  peekStartsWith(Ie) {
    return this.remaining.startsWith(Ie);
  }
  consumeOptional(Ie) {
    return !!this.peekStartsWith(Ie) && (this.remaining = this.remaining.substring(Ie.length), true);
  }
  capture(Ie) {
    if (!this.consumeOptional(Ie)) {
      throw new i.vHH(4011, false);
    }
  }
}
function pn(je) {
  if (je.segments.length > 0) {
    return new on([], {
      [De]: je
    });
  } else {
    return je;
  }
}
function An(je) {
  const Ie = {};
  for (const gt of Object.keys(je.children)) {
    const fn = An(je.children[gt]);
    if (fn.segments.length > 0 || fn.hasChildren()) {
      Ie[gt] = fn;
    }
  }
  return function si(je) {
    if (je.numberOfChildren === 1 && je.children[De]) {
      const Ie = je.children[De];
      return new on(je.segments.concat(Ie.segments), Ie.children);
    }
    return je;
  }(new on(je.segments, Ie));
}
function Di(je) {
  return je instanceof Kt;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _o(je, Ie, ye, gt, kt) {
  if (ye.length === 0) {
    return No(Ie.root, Ie.root, Ie.root, gt, kt);
  }
  const Nn = function ks(je) {
    if (typeof je[0] == "string" && je.length === 1 && je[0] === "/") {
      return new bo(true, 0, je);
    }
    let Ie = 0;
    let ye = false;
    const gt = je.reduce((kt, fn, Nn) => {
      if (typeof fn == "object" && fn != null) {
        if (fn.outlets) {
          const Tn = {};
          ft(fn.outlets, (Ri, Yr) => {
            Tn[Yr] = typeof Ri == "string" ? Ri.split("/") : Ri;
          });
          return [...kt, {
            outlets: Tn
          }];
        }
        if (fn.segmentPath) {
          return [...kt, fn.segmentPath];
        }
      }
      if (typeof fn != "string") {
        return [...kt, fn];
      } else if (Nn === 0) {
        fn.split("/").forEach((Tn, Ri) => {
          if (Ri != 0 || Tn !== ".") {
            if (Ri == 0 && Tn === "") {
              ye = true;
            } else if (Tn === "..") {
              Ie++;
            } else if (Tn != "") {
              kt.push(Tn);
            }
          }
        });
        return kt;
      } else {
        return [...kt, fn];
      }
    }, []);
    return new bo(ye, Ie, gt);
  }(ye);
  if (Nn.toRoot()) {
    return No(Ie.root, Ie.root, new on([], {}), gt, kt);
  }
  const Ri = function Tn(Bs) {
    const Ke = function ho(je, Ie, ye, gt) {
      if (je.isAbsolute) {
        return new Gs(Ie.root, true, 0);
      }
      if (gt === -1) {
        return new Gs(ye, ye === Ie.root, 0);
      }
      return function ya(je, Ie, ye) {
        let gt = je;
        let kt = Ie;
        let fn = ye;
        for (; fn > kt;) {
          fn -= kt;
          gt = gt.parent;
          if (!gt) {
            throw new i.vHH(4005, false);
          }
          kt = gt.segments.length;
        }
        return new Gs(gt, false, kt - fn);
      }(ye, gt + (kr(je.commands[0]) ? 0 : 1), je.numberOfDoubleDots);
    }(Nn, Ie, je.snapshot?._urlSegment, Bs);
    const We = Ke.processChildren ? qo(Ke.segmentGroup, Ke.index, Nn.commands) : qi(Ke.segmentGroup, Ke.index, Nn.commands);
    return No(Ie.root, Ke.segmentGroup, We, gt, kt);
  }(je.snapshot?._lastPathIndex);
  return Ri;
}
function kr(je) {
  return typeof je == "object" && je != null && !je.outlets && !je.segmentPath;
}
function Zs(je) {
  return typeof je == "object" && je != null && je.outlets;
}
function No(je, Ie, ye, gt, kt) {
  let Nn;
  let fn = {};
  if (gt) {
    ft(gt, (Ri, Yr) => {
      fn[Yr] = Array.isArray(Ri) ? Ri.map(Bs => `${Bs}`) : `${Ri}`;
    });
  }
  Nn = je === Ie ? ye : fa(je, Ie, ye);
  const Tn = pn(An(Nn));
  return new Kt(Tn, fn, kt);
}
function fa(je, Ie, ye) {
  const gt = {};
  ft(je.children, (kt, fn) => {
    gt[fn] = kt === Ie ? ye : fa(kt, Ie, ye);
  });
  return new on(je.segments, gt);
}
class bo {
  constructor(Ie, ye, gt) {
    this.isAbsolute = Ie;
    this.numberOfDoubleDots = ye;
    this.commands = gt;
    if (Ie && gt.length > 0 && kr(gt[0])) {
      throw new i.vHH(4003, false);
    }
    const kt = gt.find(Zs);
    if (kt && kt !== ve(gt)) {
      throw new i.vHH(4004, false);
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
}
class Gs {
  constructor(Ie, ye, gt) {
    this.segmentGroup = Ie;
    this.processChildren = ye;
    this.index = gt;
  }
}
function qi(je, Ie, ye) {
  je ||= new on([], {});
  if (je.segments.length === 0 && je.hasChildren()) {
    return qo(je, Ie, ye);
  }
  const gt = function ea(je, Ie, ye) {
    let gt = 0;
    let kt = Ie;
    const fn = {
      match: false,
      pathIndex: 0,
      commandIndex: 0
    };
    for (; kt < je.segments.length;) {
      if (gt >= ye.length) {
        return fn;
      }
      const Nn = je.segments[kt];
      const Tn = ye[gt];
      if (Zs(Tn)) {
        break;
      }
      const Ri = `${Tn}`;
      const Yr = gt < ye.length - 1 ? ye[gt + 1] : null;
      if (kt > 0 && Ri === undefined) {
        break;
      }
      if (Ri && Yr && typeof Yr == "object" && Yr.outlets === undefined) {
        if (!la(Ri, Yr, Nn)) {
          return fn;
        }
        gt += 2;
      } else {
        if (!la(Ri, {}, Nn)) {
          return fn;
        }
        gt++;
      }
      kt++;
    }
    return {
      match: true,
      pathIndex: kt,
      commandIndex: gt
    };
  }(je, Ie, ye);
  const kt = ye.slice(gt.commandIndex);
  if (gt.match && gt.pathIndex < je.segments.length) {
    const fn = new on(je.segments.slice(0, gt.pathIndex), {});
    fn.children[De] = new on(je.segments.slice(gt.pathIndex), je.children);
    return qo(fn, 0, kt);
  }
  if (gt.match && kt.length === 0) {
    return new on(je.segments, {});
  } else if (gt.match && !je.hasChildren()) {
    return Oa(je, Ie, ye);
  } else if (gt.match) {
    return qo(je, 0, kt);
  } else {
    return Oa(je, Ie, ye);
  }
}
function qo(je, Ie, ye) {
  if (ye.length === 0) {
    return new on(je.segments, {});
  }
  {
    const gt = function Ko(je) {
      if (Zs(je[0])) {
        return je[0].outlets;
      } else {
        return {
          [De]: je
        };
      }
    }(ye);
    const kt = {};
    ft(gt, (fn, Nn) => {
      if (typeof fn == "string") {
        fn = [fn];
      }
      if (fn !== null) {
        kt[Nn] = qi(je.children[Nn], Ie, fn);
      }
    });
    ft(je.children, (fn, Nn) => {
      if (gt[Nn] === undefined) {
        kt[Nn] = fn;
      }
    });
    return new on(je.segments, kt);
  }
}
function Oa(je, Ie, ye) {
  const gt = je.segments.slice(0, Ie);
  let kt = 0;
  for (; kt < ye.length;) {
    const fn = ye[kt];
    if (Zs(fn)) {
      const Ri = qa(fn.outlets);
      return new on(gt, Ri);
    }
    if (kt === 0 && kr(ye[0])) {
      gt.push(new Rn(je.segments[Ie].path, ja(ye[0])));
      kt++;
      continue;
    }
    const Nn = Zs(fn) ? fn.outlets[De] : `${fn}`;
    const Tn = kt < ye.length - 1 ? ye[kt + 1] : null;
    if (Nn && Tn && kr(Tn)) {
      gt.push(new Rn(Nn, ja(Tn)));
      kt += 2;
    } else {
      gt.push(new Rn(Nn, {}));
      kt++;
    }
  }
  return new on(gt, {});
}
function qa(je) {
  const Ie = {};
  ft(je, (ye, gt) => {
    if (typeof ye == "string") {
      ye = [ye];
    }
    if (ye !== null) {
      Ie[gt] = Oa(new on([], {}), 0, ye);
    }
  });
  return Ie;
}
function ja(je) {
  const Ie = {};
  ft(je, (ye, gt) => Ie[gt] = `${ye}`);
  return Ie;
}
function la(je, Ie, ye) {
  return je == ye.path && lt(Ie, ye.parameters);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ta {
  constructor(Ie, ye) {
    this.id = Ie;
    this.url = ye;
  }
}
class Fr extends ta {
  constructor(Ie, ye, gt = "imperative", kt = null) {
    super(Ie, ye);
    this.type = 0;
    this.navigationTrigger = gt;
    this.restoredState = kt;
  }
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
}
export class m2 extends ta {
  constructor(Ie, ye, gt) {
    super(Ie, ye);
    this.urlAfterRedirects = gt;
    this.type = 1;
  }
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
}
class Ao extends ta {
  constructor(Ie, ye, gt, kt) {
    super(Ie, ye);
    this.reason = gt;
    this.code = kt;
    this.type = 2;
  }
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
}
class Pa extends ta {
  constructor(Ie, ye, gt, kt) {
    super(Ie, ye);
    this.error = gt;
    this.target = kt;
    this.type = 3;
  }
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
}
class Po extends ta {
  constructor(Ie, ye, gt, kt) {
    super(Ie, ye);
    this.urlAfterRedirects = gt;
    this.state = kt;
    this.type = 4;
  }
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
class dl extends ta {
  constructor(Ie, ye, gt, kt) {
    super(Ie, ye);
    this.urlAfterRedirects = gt;
    this.state = kt;
    this.type = 7;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
class qs extends ta {
  constructor(Ie, ye, gt, kt, fn) {
    super(Ie, ye);
    this.urlAfterRedirects = gt;
    this.state = kt;
    this.shouldActivate = fn;
    this.type = 8;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
}
class Fo extends ta {
  constructor(Ie, ye, gt, kt) {
    super(Ie, ye);
    this.urlAfterRedirects = gt;
    this.state = kt;
    this.type = 5;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
class ha extends ta {
  constructor(Ie, ye, gt, kt) {
    super(Ie, ye);
    this.urlAfterRedirects = gt;
    this.state = kt;
    this.type = 6;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
class Ca {
  constructor(Ie) {
    this.route = Ie;
    this.type = 9;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
}
class Za {
  constructor(Ie) {
    this.route = Ie;
    this.type = 10;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
}
class fl {
  constructor(Ie) {
    this.snapshot = Ie;
    this.type = 11;
  }
  toString() {
    return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
  }
}
class Ml {
  constructor(Ie) {
    this.snapshot = Ie;
    this.type = 12;
  }
  toString() {
    return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
  }
}
class ko {
  constructor(Ie) {
    this.snapshot = Ie;
    this.type = 13;
  }
  toString() {
    return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
  }
}
class So {
  constructor(Ie) {
    this.snapshot = Ie;
    this.type = 14;
  }
  toString() {
    return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
  }
}
class pa {
  constructor(Ie, ye, gt) {
    this.routerEvent = Ie;
    this.position = ye;
    this.anchor = gt;
    this.type = 15;
  }
  toString() {
    return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class po {
  constructor(Ie) {
    this._root = Ie;
  }
  get root() {
    return this._root.value;
  }
  parent(Ie) {
    const ye = this.pathFromRoot(Ie);
    if (ye.length > 1) {
      return ye[ye.length - 2];
    } else {
      return null;
    }
  }
  children(Ie) {
    const ye = zs(Ie, this._root);
    if (ye) {
      return ye.children.map(gt => gt.value);
    } else {
      return [];
    }
  }
  firstChild(Ie) {
    const ye = zs(Ie, this._root);
    if (ye && ye.children.length > 0) {
      return ye.children[0].value;
    } else {
      return null;
    }
  }
  siblings(Ie) {
    const ye = hs(Ie, this._root);
    if (ye.length < 2) {
      return [];
    } else {
      return ye[ye.length - 2].children.map(kt => kt.value).filter(kt => kt !== Ie);
    }
  }
  pathFromRoot(Ie) {
    return hs(Ie, this._root).map(ye => ye.value);
  }
}
function zs(je, Ie) {
  if (je === Ie.value) {
    return Ie;
  }
  for (const ye of Ie.children) {
    const gt = zs(je, ye);
    if (gt) {
      return gt;
    }
  }
  return null;
}
function hs(je, Ie) {
  if (je === Ie.value) {
    return [Ie];
  }
  for (const ye of Ie.children) {
    const gt = hs(je, ye);
    if (gt.length) {
      gt.unshift(Ie);
      return gt;
    }
  }
  return [];
}
class Rs {
  constructor(Ie, ye) {
    this.value = Ie;
    this.children = ye;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
}
function eo(je) {
  const Ie = {};
  if (je) {
    je.children.forEach(ye => Ie[ye.value.outlet] = ye);
  }
  return Ie;
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
}
class Vs extends po {
  constructor(Ie, ye) {
    super(Ie);
    this.snapshot = ye;
    be(this, Ie);
  }
  toString() {
    return this.snapshot.toString();
  }
}
function Qs(je, Ie) {
  const ye = function Wo(je, Ie) {
    const Nn = new at([], {}, {}, "", {}, De, Ie, null, je.root, -1, {});
    return new Je("", new Rs(Nn, []));
  }(je, Ie);
  const gt = new k.X([new Rn("", {})]);
  const kt = new k.X({});
  const fn = new k.X({});
  const Nn = new k.X({});
  const Tn = new k.X("");
  const Ri = new gz(gt, kt, Nn, Tn, fn, De, Ie, ye.root);
  Ri.snapshot = ye.root;
  return new Vs(new Rs(Ri, []), ye);
}
export class gz {
  constructor(Ie, ye, gt, kt, fn, Nn, Tn, Ri) {
    var Bs;
    this.url = Ie;
    this.params = ye;
    this.queryParams = gt;
    this.fragment = kt;
    this.data = fn;
    this.outlet = Nn;
    this.component = Tn;
    this.title = ((Bs = this.data) === null || Bs === undefined ? undefined : Bs.pipe((0, F.U)(Nt => Nt[Qe]))) ?? (0, b.of)(undefined);
    this._futureSnapshot = Ri;
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ||= this.params.pipe((0, F.U)(Ie => Yt(Ie)));
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ||= this.queryParams.pipe((0, F.U)(Ie => Yt(Ie)));
    return this._queryParamMap;
  }
  toString() {
    if (this.snapshot) {
      return this.snapshot.toString();
    } else {
      return `Future(${this._futureSnapshot})`;
    }
  }
}
function Uo(je, Ie = "emptyOnly") {
  const ye = je.pathFromRoot;
  let gt = 0;
  if (Ie !== "always") {
    for (gt = ye.length - 1; gt >= 1;) {
      const kt = ye[gt];
      const fn = ye[gt - 1];
      if (kt.routeConfig && kt.routeConfig.path === "") {
        gt--;
      } else {
        if (fn.component) {
          break;
        }
        gt--;
      }
    }
  }
  return function _r(je) {
    return je.reduce((Ie, ye) => {
      return {
        params: {
          ...Ie.params,
          ...ye.params
        },
        data: {
          ...Ie.data,
          ...ye.data
        },
        resolve: {
          ...ye.data,
          ...Ie.resolve,
          ...ye.routeConfig?.data,
          ...ye._resolvedData
        }
      };
    }, {
      params: {},
      data: {},
      resolve: {}
    });
  }(ye.slice(gt));
}
class at {
  constructor(Ie, ye, gt, kt, fn, Nn, Tn, Ri, Yr, Bs, Nt, Ke) {
    this.url = Ie;
    this.params = ye;
    this.queryParams = gt;
    this.fragment = kt;
    this.data = fn;
    this.outlet = Nn;
    this.component = Tn;
    this.title = this.data?.[Qe];
    this.routeConfig = Ri;
    this._urlSegment = Yr;
    this._lastPathIndex = Bs;
    this._correctedLastPathIndex = Ke ?? Bs;
    this._resolve = Nt;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ||= Yt(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ||= Yt(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    return `Route(url:'${this.url.map(gt => gt.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`;
  }
}
class Je extends po {
  constructor(Ie, ye) {
    super(ye);
    this.url = Ie;
    be(this, ye);
  }
  toString() {
    return Bt(this._root);
  }
}
function be(je, Ie) {
  Ie.value._routerState = je;
  Ie.children.forEach(ye => be(je, ye));
}
function Bt(je) {
  const Ie = je.children.length > 0 ? ` { ${je.children.map(Bt).join(", ")} } ` : "";
  return `${je.value}${Ie}`;
}
function an(je) {
  if (je.snapshot) {
    const Ie = je.snapshot;
    const ye = je._futureSnapshot;
    je.snapshot = ye;
    if (!lt(Ie.queryParams, ye.queryParams)) {
      je.queryParams.next(ye.queryParams);
    }
    if (Ie.fragment !== ye.fragment) {
      je.fragment.next(ye.fragment);
    }
    if (!lt(Ie.params, ye.params)) {
      je.params.next(ye.params);
    }
    if (!function Et(je, Ie) {
      if (je.length !== Ie.length) {
        return false;
      }
      for (let ye = 0; ye < je.length; ++ye) {
        if (!lt(je[ye], Ie[ye])) {
          return false;
        }
      }
      return true;
    }(Ie.url, ye.url)) {
      je.url.next(ye.url);
    }
    if (!lt(Ie.data, ye.data)) {
      je.data.next(ye.data);
    }
  } else {
    je.snapshot = je._futureSnapshot;
    je.data.next(je._futureSnapshot.data);
  }
}
function Gn(je, Ie) {
  const ye = lt(je.params, Ie.params) && function In(je, Ie) {
    return di(je, Ie) && je.every((ye, gt) => lt(ye.parameters, Ie[gt].parameters));
  }(je.url, Ie.url);
  return ye && !je.parent == !Ie.parent && (!je.parent || Gn(je.parent, Ie.parent));
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Lr(je, Ie, ye) {
  if (ye && je.shouldReuseRoute(Ie.value, ye.value.snapshot)) {
    const gt = ye.value;
    gt._futureSnapshot = Ie.value;
    const kt = function Gr(je, Ie, ye) {
      return Ie.children.map(gt => {
        for (const kt of ye.children) {
          if (je.shouldReuseRoute(gt.value, kt.value.snapshot)) {
            return Lr(je, gt, kt);
          }
        }
        return Lr(je, gt);
      });
    }(je, Ie, ye);
    return new Rs(gt, kt);
  }
  {
    if (je.shouldAttach(Ie.value)) {
      const fn = je.retrieve(Ie.value);
      if (fn !== null) {
        const Nn = fn.route;
        Nn.value._futureSnapshot = Ie.value;
        Nn.children = Ie.children.map(Tn => Lr(je, Tn));
        return Nn;
      }
    }
    const gt = function zr(je) {
      return new gz(new k.X(je.url), new k.X(je.params), new k.X(je.queryParams), new k.X(je.fragment), new k.X(je.data), je.outlet, je.component, je);
    }
    /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */(Ie.value);
    const kt = Ie.children.map(fn => Lr(je, fn));
    return new Rs(gt, kt);
  }
}
const Ks = "ngNavigationCancelingError";
function Js(je, Ie) {
  const {
    redirectTo: ye,
    navigationBehaviorOptions: gt
  } = Di(Ie) ? {
    redirectTo: Ie,
    navigationBehaviorOptions: undefined
  } : Ie;
  const kt = Xt(false, 0, Ie);
  kt.url = ye;
  kt.navigationBehaviorOptions = gt;
  return kt;
}
function Xt(je, Ie, ye) {
  const gt = new Error("NavigationCancelingError: " + (je || ""));
  gt[Ks] = true;
  gt.cancellationCode = Ie;
  if (ye) {
    gt.url = ye;
  }
  return gt;
}
function ut(je) {
  return vt(je) && Di(je.url);
}
function vt(je) {
  return je && je[Ks];
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Zt {
  constructor() {
    this.outlet = null;
    this.route = null;
    this.resolver = null;
    this.injector = null;
    this.children = new kn();
    this.attachRef = null;
  }
}
let kn = (() => {
  class je {
    constructor() {
      this.contexts = new Map();
    }
    onChildOutletCreated(ye, gt) {
      const kt = this.getOrCreateContext(ye);
      kt.outlet = gt;
      this.contexts.set(ye, kt);
    }
    onChildOutletDestroyed(ye) {
      const gt = this.getContext(ye);
      if (gt) {
        gt.outlet = null;
        gt.attachRef = null;
      }
    }
    onOutletDeactivated() {
      const ye = this.contexts;
      this.contexts = new Map();
      return ye;
    }
    onOutletReAttached(ye) {
      this.contexts = ye;
    }
    getOrCreateContext(ye) {
      let gt = this.getContext(ye);
      if (!gt) {
        gt = new Zt();
        this.contexts.set(ye, gt);
      }
      return gt;
    }
    getContext(ye) {
      return this.contexts.get(ye) || null;
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)();
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: je.ɵfac,
    providedIn: "root"
  });
  return je;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Zn = false;
export let lC = (() => {
  class je {
    constructor(ye, gt, kt, fn, Nn) {
      this.parentContexts = ye;
      this.location = gt;
      this.changeDetector = fn;
      this.environmentInjector = Nn;
      this.activated = null;
      this._activatedRoute = null;
      this.activateEvents = new i.vpe();
      this.deactivateEvents = new i.vpe();
      this.attachEvents = new i.vpe();
      this.detachEvents = new i.vpe();
      this.name = kt || De;
      ye.onChildOutletCreated(this.name, this);
    }
    ngOnDestroy() {
      if (this.parentContexts.getContext(this.name)?.outlet === this) {
        this.parentContexts.onChildOutletDestroyed(this.name);
      }
    }
    ngOnInit() {
      if (!this.activated) {
        const ye = this.parentContexts.getContext(this.name);
        if (ye && ye.route) {
          if (ye.attachRef) {
            this.attach(ye.attachRef, ye.route);
          } else {
            this.activateWith(ye.route, ye.injector);
          }
        }
      }
    }
    get isActivated() {
      return !!this.activated;
    }
    get component() {
      if (!this.activated) {
        throw new i.vHH(4012, Zn);
      }
      return this.activated.instance;
    }
    get activatedRoute() {
      if (!this.activated) {
        throw new i.vHH(4012, Zn);
      }
      return this._activatedRoute;
    }
    get activatedRouteData() {
      if (this._activatedRoute) {
        return this._activatedRoute.snapshot.data;
      } else {
        return {};
      }
    }
    detach() {
      if (!this.activated) {
        throw new i.vHH(4012, Zn);
      }
      this.location.detach();
      const ye = this.activated;
      this.activated = null;
      this._activatedRoute = null;
      this.detachEvents.emit(ye.instance);
      return ye;
    }
    attach(ye, gt) {
      this.activated = ye;
      this._activatedRoute = gt;
      this.location.insert(ye.hostView);
      this.attachEvents.emit(ye.instance);
    }
    deactivate() {
      if (this.activated) {
        const ye = this.component;
        this.activated.destroy();
        this.activated = null;
        this._activatedRoute = null;
        this.deactivateEvents.emit(ye);
      }
    }
    activateWith(ye, gt) {
      if (this.isActivated) {
        throw new i.vHH(4013, Zn);
      }
      this._activatedRoute = ye;
      const kt = this.location;
      const Nn = ye._futureSnapshot.component;
      const Tn = this.parentContexts.getOrCreateContext(this.name).children;
      const Ri = new Oi(ye, Tn, kt.injector);
      if (gt && function Xi(je) {
        return !!je.resolveComponentFactory;
      }
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */(gt)) {
        const Yr = gt.resolveComponentFactory(Nn);
        this.activated = kt.createComponent(Yr, kt.length, Ri);
      } else {
        this.activated = kt.createComponent(Nn, {
          index: kt.length,
          injector: Ri,
          environmentInjector: gt ?? this.environmentInjector
        });
      }
      this.changeDetector.markForCheck();
      this.activateEvents.emit(this.activated.instance);
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.Y36(kn), i.Y36(i.s_b), i.$8M("name"), i.Y36(i.sBO), i.Y36(i.lqb));
  };
  je.ɵdir = i.lG2({
    type: je,
    selectors: [["router-outlet"]],
    outputs: {
      activateEvents: "activate",
      deactivateEvents: "deactivate",
      attachEvents: "attach",
      detachEvents: "detach"
    },
    exportAs: ["outlet"],
    standalone: true
  });
  return je;
})();
class Oi {
  constructor(Ie, ye, gt) {
    this.route = Ie;
    this.childContexts = ye;
    this.parent = gt;
  }
  get(Ie, ye) {
    if (Ie === gz) {
      return this.route;
    } else if (Ie === kn) {
      return this.childContexts;
    } else {
      return this.parent.get(Ie, ye);
    }
  }
}
let nr = (() => {
  class je {}
  je.ɵfac = function (ye) {
    return new (ye || je)();
  };
  je.ɵcmp = i.Xpm({
    type: je,
    selectors: [["ng-component"]],
    standalone: true,
    features: [i.jDz],
    decls: 1,
    vars: 0,
    template: function (ye, gt) {
      if (ye & 1) {
        i._UZ(0, "router-outlet");
      }
    },
    dependencies: [lC],
    encapsulation: 2
  });
  return je;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function mr(je, Ie) {
  if (je.providers && !je._injector) {
    je._injector = (0, i.MMx)(je.providers, Ie, `Route: ${je.path}`);
  }
  return je._injector ?? Ie;
}
function sl(je) {
  const Ie = je.children && je.children.map(sl);
  const ye = Ie ? {
    ...je,
    children: Ie
  } : {
    ...je
  };
  if (!ye.component && !ye.loadComponent && (Ie || ye.loadChildren) && ye.outlet && ye.outlet !== De) {
    ye.component = nr;
  }
  return ye;
}
function Rr(je) {
  return je.outlet || De;
}
function el(je, Ie) {
  const ye = je.filter(gt => Rr(gt) === Ie);
  ye.push(...je.filter(gt => Rr(gt) !== Ie));
  return ye;
}
function Fa(je) {
  var Ie;
  if (!je) {
    return null;
  }
  if ((Ie = je.routeConfig) !== null && Ie !== undefined && Ie._injector) {
    return je.routeConfig._injector;
  }
  for (let ye = je.parent; ye; ye = ye.parent) {
    const gt = ye.routeConfig;
    if (gt != null && gt._loadedInjector) {
      return gt._loadedInjector;
    }
    if (gt != null && gt._injector) {
      return gt._injector;
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
class Xe {
  constructor(Ie, ye, gt, kt) {
    this.routeReuseStrategy = Ie;
    this.futureState = ye;
    this.currState = gt;
    this.forwardEvent = kt;
  }
  activate(Ie) {
    const ye = this.futureState._root;
    const gt = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(ye, gt, Ie);
    an(this.futureState.root);
    this.activateChildRoutes(ye, gt, Ie);
  }
  deactivateChildRoutes(Ie, ye, gt) {
    const kt = eo(ye);
    Ie.children.forEach(fn => {
      const Nn = fn.value.outlet;
      this.deactivateRoutes(fn, kt[Nn], gt);
      delete kt[Nn];
    });
    ft(kt, (fn, Nn) => {
      this.deactivateRouteAndItsChildren(fn, gt);
    });
  }
  deactivateRoutes(Ie, ye, gt) {
    const kt = Ie.value;
    const fn = ye ? ye.value : null;
    if (kt === fn) {
      if (kt.component) {
        const Nn = gt.getContext(kt.outlet);
        if (Nn) {
          this.deactivateChildRoutes(Ie, ye, Nn.children);
        }
      } else {
        this.deactivateChildRoutes(Ie, ye, gt);
      }
    } else if (fn) {
      this.deactivateRouteAndItsChildren(ye, gt);
    }
  }
  deactivateRouteAndItsChildren(Ie, ye) {
    if (Ie.value.component && this.routeReuseStrategy.shouldDetach(Ie.value.snapshot)) {
      this.detachAndStoreRouteSubtree(Ie, ye);
    } else {
      this.deactivateRouteAndOutlet(Ie, ye);
    }
  }
  detachAndStoreRouteSubtree(Ie, ye) {
    const gt = ye.getContext(Ie.value.outlet);
    const kt = gt && Ie.value.component ? gt.children : ye;
    const fn = eo(Ie);
    for (const Nn of Object.keys(fn)) {
      this.deactivateRouteAndItsChildren(fn[Nn], kt);
    }
    if (gt && gt.outlet) {
      const Nn = gt.outlet.detach();
      const Tn = gt.children.onOutletDeactivated();
      this.routeReuseStrategy.store(Ie.value.snapshot, {
        componentRef: Nn,
        route: Ie,
        contexts: Tn
      });
    }
  }
  deactivateRouteAndOutlet(Ie, ye) {
    const gt = ye.getContext(Ie.value.outlet);
    const kt = gt && Ie.value.component ? gt.children : ye;
    const fn = eo(Ie);
    for (const Nn of Object.keys(fn)) {
      this.deactivateRouteAndItsChildren(fn[Nn], kt);
    }
    if (gt && gt.outlet) {
      gt.outlet.deactivate();
      gt.children.onOutletDeactivated();
      gt.attachRef = null;
      gt.resolver = null;
      gt.route = null;
    }
  }
  activateChildRoutes(Ie, ye, gt) {
    const kt = eo(ye);
    Ie.children.forEach(fn => {
      this.activateRoutes(fn, kt[fn.value.outlet], gt);
      this.forwardEvent(new So(fn.value.snapshot));
    });
    if (Ie.children.length) {
      this.forwardEvent(new Ml(Ie.value.snapshot));
    }
  }
  activateRoutes(Ie, ye, gt) {
    const kt = Ie.value;
    const fn = ye ? ye.value : null;
    an(kt);
    if (kt === fn) {
      if (kt.component) {
        const Tn = gt.getOrCreateContext(kt.outlet);
        this.activateChildRoutes(Ie, ye, Tn.children);
      } else {
        this.activateChildRoutes(Ie, ye, gt);
      }
    } else if (kt.component) {
      const Tn = gt.getOrCreateContext(kt.outlet);
      if (this.routeReuseStrategy.shouldAttach(kt.snapshot)) {
        const Ri = this.routeReuseStrategy.retrieve(kt.snapshot);
        this.routeReuseStrategy.store(kt.snapshot, null);
        Tn.children.onOutletReAttached(Ri.contexts);
        Tn.attachRef = Ri.componentRef;
        Tn.route = Ri.route.value;
        if (Tn.outlet) {
          Tn.outlet.attach(Ri.componentRef, Ri.route.value);
        }
        an(Ri.route.value);
        this.activateChildRoutes(Ie, null, Tn.children);
      } else {
        const Ri = Fa(kt.snapshot);
        const Yr = Ri?.get(i._Vd) ?? null;
        Tn.attachRef = null;
        Tn.route = kt;
        Tn.resolver = Yr;
        Tn.injector = Ri;
        if (Tn.outlet) {
          Tn.outlet.activateWith(kt, Tn.injector);
        }
        this.activateChildRoutes(Ie, null, Tn.children);
      }
    } else {
      this.activateChildRoutes(Ie, null, gt);
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
class $t {
  constructor(Ie) {
    this.path = Ie;
    this.route = this.path[this.path.length - 1];
  }
}
class _e {
  constructor(Ie, ye) {
    this.component = Ie;
    this.route = ye;
  }
}
function xt(je, Ie, ye) {
  const gt = je._root;
  return tr(gt, Ie ? Ie._root : null, ye, [gt.value]);
}
function wn(je, Ie) {
  const ye = Symbol();
  const gt = Ie.get(je, ye);
  if (gt === ye) {
    if (typeof je != "function" || (0, i.Z0I)(je)) {
      return Ie.get(je);
    } else {
      return je;
    }
  } else {
    return gt;
  }
}
function tr(je, Ie, ye, gt, kt = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const fn = eo(Ie);
  je.children.forEach(Nn => {
    (function Do(je, Ie, ye, gt, kt = {
      canDeactivateChecks: [],
      canActivateChecks: []
    }) {
      const fn = je.value;
      const Nn = Ie ? Ie.value : null;
      const Tn = ye ? ye.getContext(je.value.outlet) : null;
      if (Nn && fn.routeConfig === Nn.routeConfig) {
        const Ri = function Ji(je, Ie, ye) {
          if (typeof ye == "function") {
            return ye(je, Ie);
          }
          switch (ye) {
            case "pathParamsChange":
              return !di(je.url, Ie.url);
            case "pathParamsOrQueryParamsChange":
              return !di(je.url, Ie.url) || !lt(je.queryParams, Ie.queryParams);
            case "always":
              return true;
            case "paramsOrQueryParamsChange":
              return !Gn(je, Ie) || !lt(je.queryParams, Ie.queryParams);
            default:
              return !Gn(je, Ie);
          }
        }(Nn, fn, fn.routeConfig.runGuardsAndResolvers);
        if (Ri) {
          kt.canActivateChecks.push(new $t(gt));
        } else {
          fn.data = Nn.data;
          fn._resolvedData = Nn._resolvedData;
        }
        tr(je, Ie, fn.component ? Tn ? Tn.children : null : ye, gt, kt);
        if (Ri && Tn && Tn.outlet && Tn.outlet.isActivated) {
          kt.canDeactivateChecks.push(new _e(Tn.outlet.component, Nn));
        }
      } else {
        if (Nn) {
          hi(Ie, Tn, kt);
        }
        kt.canActivateChecks.push(new $t(gt));
        tr(je, null, fn.component ? Tn ? Tn.children : null : ye, gt, kt);
      }
    })(Nn, fn[Nn.value.outlet], ye, gt.concat([Nn.value]), kt);
    delete fn[Nn.value.outlet];
  });
  ft(fn, (Nn, Tn) => hi(Nn, ye.getContext(Tn), kt));
  return kt;
}
function hi(je, Ie, ye) {
  const gt = eo(je);
  const kt = je.value;
  ft(gt, (fn, Nn) => {
    hi(fn, kt.component ? Ie ? Ie.children.getContext(Nn) : null : Ie, ye);
  });
  ye.canDeactivateChecks.push(new _e(kt.component && Ie && Ie.outlet && Ie.outlet.isActivated ? Ie.outlet.component : null, kt));
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oa(je) {
  return typeof je == "function";
}
function wi(je) {
  return je instanceof v || je?.name === "EmptyError";
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Aa = Symbol("INITIAL_VALUE");
function Hr() {
  return (0, Z.w)(je => (0, C.a)(je.map(Ie => Ie.pipe((0, X.q)(1), (0, le.O)(Aa)))).pipe((0, F.U)(Ie => {
    for (const ye of Ie) {
      if (ye !== true) {
        if (ye === Aa) {
          return Aa;
        }
        if (ye === false || ye instanceof Kt) {
          return ye;
        }
      }
    }
    return true;
  }), (0, fe.h)(Ie => Ie !== Aa), (0, X.q)(1)));
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function to(je) {
  return (0, L.z)((0, re.b)(Ie => {
    if (Di(Ie)) {
      throw Js(0, Ie);
    }
  }), (0, F.U)(Ie => Ie === true));
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Kl = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function Bl(je, Ie, ye, gt, kt) {
  const fn = iu(je, Ie, ye);
  if (fn.matched) {
    return function Ha(je, Ie, ye, gt) {
      const kt = Ie.canMatch;
      if (!kt || kt.length === 0) {
        return (0, b.of)(true);
      }
      const fn = kt.map(Nn => {
        const Tn = wn(Nn, je);
        return qe(function dn(je) {
          return je && oa(je.canMatch);
        }(Tn) ? Tn.canMatch(Ie, ye) : je.runInContext(() => Tn(Ie, ye)));
      });
      return (0, b.of)(fn).pipe(Hr(), to());
    }(gt = mr(Ie, gt), Ie, ye).pipe((0, F.U)(Nn => Nn === true ? fn : {
      ...Kl
    }));
  } else {
    return (0, b.of)(fn);
  }
}
function iu(je, Ie, ye) {
  if (Ie.path === "") {
    if (Ie.pathMatch === "full" && (je.hasChildren() || ye.length > 0)) {
      return {
        ...Kl
      };
    } else {
      return {
        matched: true,
        consumedSegments: [],
        remainingSegments: ye,
        parameters: {},
        positionalParamSegments: {}
      };
    }
  }
  const fn = (Ie.matcher || Dn)(ye, je, Ie);
  if (!fn) {
    return {
      ...Kl
    };
  }
  const Nn = {};
  ft(fn.posParams, (Ri, Yr) => {
    Nn[Yr] = Ri.path;
  });
  const Tn = fn.consumed.length > 0 ? {
    ...Nn,
    ...fn.consumed[fn.consumed.length - 1].parameters
  } : Nn;
  return {
    matched: true,
    consumedSegments: fn.consumed,
    remainingSegments: ye.slice(fn.consumed.length),
    parameters: Tn,
    positionalParamSegments: fn.posParams ?? {}
  };
}
function Wa(je, Ie, ye, gt, kt = "corrected") {
  if (ye.length > 0 && function Cc(je, Ie, ye) {
    return ye.some(gt => mt(je, Ie, gt) && Rr(gt) !== De);
  }(je, ye, gt)) {
    const Nn = new on(Ie, function bs(je, Ie, ye, gt) {
      const kt = {
        [De]: gt
      };
      gt._sourceSegment = je;
      gt._segmentIndexShift = Ie.length;
      for (const fn of ye) {
        if (fn.path === "" && Rr(fn) !== De) {
          const Nn = new on([], {});
          Nn._sourceSegment = je;
          Nn._segmentIndexShift = Ie.length;
          kt[Rr(fn)] = Nn;
        }
      }
      return kt;
    }(je, Ie, gt, new on(ye, je.children)));
    Nn._sourceSegment = je;
    Nn._segmentIndexShift = Ie.length;
    return {
      segmentGroup: Nn,
      slicedSegments: []
    };
  }
  if (ye.length === 0 && function gc(je, Ie, ye) {
    return ye.some(gt => mt(je, Ie, gt));
  }(je, ye, gt)) {
    const Nn = new on(je.segments, function ls(je, Ie, ye, gt, kt, fn) {
      const Nn = {};
      for (const Tn of gt) {
        if (mt(je, ye, Tn) && !kt[Rr(Tn)]) {
          const Ri = new on([], {});
          Ri._sourceSegment = je;
          Ri._segmentIndexShift = fn === "legacy" ? je.segments.length : Ie.length;
          Nn[Rr(Tn)] = Ri;
        }
      }
      return {
        ...kt,
        ...Nn
      };
    }(je, Ie, ye, gt, je.children, kt));
    Nn._sourceSegment = je;
    Nn._segmentIndexShift = Ie.length;
    return {
      segmentGroup: Nn,
      slicedSegments: ye
    };
  }
  const fn = new on(je.segments, je.children);
  fn._sourceSegment = je;
  fn._segmentIndexShift = Ie.length;
  return {
    segmentGroup: fn,
    slicedSegments: ye
  };
}
function mt(je, Ie, ye) {
  return (!je.hasChildren() && Ie.length <= 0 || ye.pathMatch !== "full") && ye.path === "";
}
function qt(je, Ie, ye, gt) {
  return (Rr(je) === gt || gt !== De && !!mt(Ie, ye, je)) && (je.path === "**" || iu(Ie, je, ye).matched);
}
function Ct(je, Ie, ye) {
  return Ie.length === 0 && !je.children[ye];
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Gt = false;
class Sn {
  constructor(Ie) {
    this.segmentGroup = Ie || null;
  }
}
class ki {
  constructor(Ie) {
    this.urlTree = Ie;
  }
}
function Ui(je) {
  return (0, I._)(new Sn(je));
}
function cs(je) {
  return (0, I._)(new ki(je));
}
class Os {
  constructor(Ie, ye, gt, kt, fn) {
    this.injector = Ie;
    this.configLoader = ye;
    this.urlSerializer = gt;
    this.urlTree = kt;
    this.config = fn;
    this.allowRedirects = true;
  }
  apply() {
    const Ie = Wa(this.urlTree.root, [], [], this.config).segmentGroup;
    const ye = new on(Ie.segments, Ie.children);
    return this.expandSegmentGroup(this.injector, this.config, ye, De).pipe((0, F.U)(fn => this.createUrlTree(An(fn), this.urlTree.queryParams, this.urlTree.fragment))).pipe((0, Re.K)(fn => {
      if (fn instanceof ki) {
        this.allowRedirects = false;
        return this.match(fn.urlTree);
      }
      throw fn instanceof Sn ? this.noMatchError(fn) : fn;
    }));
  }
  match(Ie) {
    return this.expandSegmentGroup(this.injector, this.config, Ie.root, De).pipe((0, F.U)(kt => this.createUrlTree(An(kt), Ie.queryParams, Ie.fragment))).pipe((0, Re.K)(kt => {
      throw kt instanceof Sn ? this.noMatchError(kt) : kt;
    }));
  }
  noMatchError(Ie) {
    return new i.vHH(4002, Gt);
  }
  createUrlTree(Ie, ye, gt) {
    const kt = pn(Ie);
    return new Kt(kt, ye, gt);
  }
  expandSegmentGroup(Ie, ye, gt, kt) {
    if (gt.segments.length === 0 && gt.hasChildren()) {
      return this.expandChildren(Ie, ye, gt).pipe((0, F.U)(fn => new on([], fn)));
    } else {
      return this.expandSegment(Ie, gt, ye, gt.segments, kt, true);
    }
  }
  expandChildren(Ie, ye, gt) {
    const kt = [];
    for (const fn of Object.keys(gt.children)) {
      if (fn === "primary") {
        kt.unshift(fn);
      } else {
        kt.push(fn);
      }
    }
    return (0, t.D)(kt).pipe((0, pe.b)(fn => {
      const Nn = gt.children[fn];
      const Tn = el(ye, fn);
      return this.expandSegmentGroup(Ie, Tn, Nn, fn).pipe((0, F.U)(Ri => ({
        segment: Ri,
        outlet: fn
      })));
    }), (0, Ge.R)((fn, Nn) => {
      fn[Nn.outlet] = Nn.segment;
      return fn;
    }, {}), ot());
  }
  expandSegment(Ie, ye, gt, kt, fn, Nn) {
    return (0, t.D)(gt).pipe((0, pe.b)(Tn => this.expandSegmentAgainstRoute(Ie, ye, gt, Tn, kt, fn, Nn).pipe((0, Re.K)(Yr => {
      if (Yr instanceof Sn) {
        return (0, b.of)(null);
      }
      throw Yr;
    }))), he(Tn => !!Tn), (0, Re.K)((Tn, Ri) => {
      if (wi(Tn)) {
        if (Ct(ye, kt, fn)) {
          return (0, b.of)(new on([], {}));
        } else {
          return Ui(ye);
        }
      }
      throw Tn;
    }));
  }
  expandSegmentAgainstRoute(Ie, ye, gt, kt, fn, Nn, Tn) {
    if (qt(kt, ye, fn, Nn)) {
      if (kt.redirectTo === undefined) {
        return this.matchSegmentAgainstRoute(Ie, ye, kt, fn, Nn);
      } else if (Tn && this.allowRedirects) {
        return this.expandSegmentAgainstRouteUsingRedirect(Ie, ye, gt, kt, fn, Nn);
      } else {
        return Ui(ye);
      }
    } else {
      return Ui(ye);
    }
  }
  expandSegmentAgainstRouteUsingRedirect(Ie, ye, gt, kt, fn, Nn) {
    if (kt.path === "**") {
      return this.expandWildCardWithParamsAgainstRouteUsingRedirect(Ie, gt, kt, Nn);
    } else {
      return this.expandRegularSegmentAgainstRouteUsingRedirect(Ie, ye, gt, kt, fn, Nn);
    }
  }
  expandWildCardWithParamsAgainstRouteUsingRedirect(Ie, ye, gt, kt) {
    const fn = this.applyRedirectCommands([], gt.redirectTo, {});
    if (gt.redirectTo.startsWith("/")) {
      return cs(fn);
    } else {
      return this.lineralizeSegments(gt, fn).pipe((0, q.z)(Nn => {
        const Tn = new on(Nn, {});
        return this.expandSegment(Ie, Tn, ye, Nn, kt, false);
      }));
    }
  }
  expandRegularSegmentAgainstRouteUsingRedirect(Ie, ye, gt, kt, fn, Nn) {
    const {
      matched: Tn,
      consumedSegments: Ri,
      remainingSegments: Yr,
      positionalParamSegments: Bs
    } = iu(ye, kt, fn);
    if (!Tn) {
      return Ui(ye);
    }
    const Nt = this.applyRedirectCommands(Ri, kt.redirectTo, Bs);
    if (kt.redirectTo.startsWith("/")) {
      return cs(Nt);
    } else {
      return this.lineralizeSegments(kt, Nt).pipe((0, q.z)(Ke => this.expandSegment(Ie, ye, gt, Ke.concat(Yr), Nn, false)));
    }
  }
  matchSegmentAgainstRoute(Ie, ye, gt, kt, fn) {
    if (gt.path === "**") {
      Ie = mr(gt, Ie);
      if (gt.loadChildren) {
        return (gt._loadedRoutes ? (0, b.of)({
          routes: gt._loadedRoutes,
          injector: gt._loadedInjector
        }) : this.configLoader.loadChildren(Ie, gt)).pipe((0, F.U)(Tn => {
          gt._loadedRoutes = Tn.routes;
          gt._loadedInjector = Tn.injector;
          return new on(kt, {});
        }));
      } else {
        return (0, b.of)(new on(kt, {}));
      }
    } else {
      return Bl(ye, gt, kt, Ie).pipe((0, Z.w)(({
        matched: Nn,
        consumedSegments: Tn,
        remainingSegments: Ri
      }) => {
        if (Nn) {
          Ie = gt._injector ?? Ie;
          return this.getChildConfig(Ie, gt, kt).pipe((0, q.z)(Nt => {
            const We = Nt.injector ?? Ie;
            const jt = Nt.routes;
            const {
              segmentGroup: On,
              slicedSegments: ri
            } = Wa(ye, Tn, Ri, jt);
            const Bi = new on(On.segments, On.children);
            if (ri.length === 0 && Bi.hasChildren()) {
              return this.expandChildren(We, jt, Bi).pipe((0, F.U)(we => new on(Tn, we)));
            }
            if (jt.length === 0 && ri.length === 0) {
              return (0, b.of)(new on(Tn, {}));
            }
            const wr = Rr(gt) === fn;
            return this.expandSegment(We, Bi, jt, ri, wr ? De : fn, true).pipe((0, F.U)(oe => new on(Tn.concat(oe.segments), oe.children)));
          }));
        } else {
          return Ui(ye);
        }
      }));
    }
  }
  getChildConfig(Ie, ye, gt) {
    if (ye.children) {
      return (0, b.of)({
        routes: ye.children,
        injector: Ie
      });
    } else if (ye.loadChildren) {
      if (ye._loadedRoutes !== undefined) {
        return (0, b.of)({
          routes: ye._loadedRoutes,
          injector: ye._loadedInjector
        });
      } else {
        return function Bo(je, Ie, ye, gt) {
          const kt = Ie.canLoad;
          if (kt === undefined || kt.length === 0) {
            return (0, b.of)(true);
          }
          const fn = kt.map(Nn => {
            const Tn = wn(Nn, je);
            return qe(function ys(je) {
              return je && oa(je.canLoad);
            }(Tn) ? Tn.canLoad(Ie, ye) : je.runInContext(() => Tn(Ie, ye)));
          });
          return (0, b.of)(fn).pipe(Hr(), to());
        }(Ie, ye, gt).pipe((0, q.z)(kt => kt ? this.configLoader.loadChildren(Ie, ye).pipe((0, re.b)(fn => {
          ye._loadedRoutes = fn.routes;
          ye._loadedInjector = fn.injector;
        })) : function Yo(je) {
          return (0, I._)(Xt(Gt, 3));
        }()));
      }
    } else {
      return (0, b.of)({
        routes: [],
        injector: Ie
      });
    }
  }
  lineralizeSegments(Ie, ye) {
    let gt = [];
    let kt = ye.root;
    for (;;) {
      gt = gt.concat(kt.segments);
      if (kt.numberOfChildren === 0) {
        return (0, b.of)(gt);
      }
      if (kt.numberOfChildren > 1 || !kt.children[De]) {
        return (0, I._)(new i.vHH(4000, Gt));
      }
      kt = kt.children[De];
    }
  }
  applyRedirectCommands(Ie, ye, gt) {
    return this.applyRedirectCreateUrlTree(ye, this.urlSerializer.parse(ye), Ie, gt);
  }
  applyRedirectCreateUrlTree(Ie, ye, gt, kt) {
    const fn = this.createSegmentGroup(Ie, ye.root, gt, kt);
    return new Kt(fn, this.createQueryParams(ye.queryParams, this.urlTree.queryParams), ye.fragment);
  }
  createQueryParams(Ie, ye) {
    const gt = {};
    ft(Ie, (kt, fn) => {
      if (typeof kt == "string" && kt.startsWith(":")) {
        const Tn = kt.substring(1);
        gt[fn] = ye[Tn];
      } else {
        gt[fn] = kt;
      }
    });
    return gt;
  }
  createSegmentGroup(Ie, ye, gt, kt) {
    const fn = this.createSegments(Ie, ye.segments, gt, kt);
    let Nn = {};
    ft(ye.children, (Tn, Ri) => {
      Nn[Ri] = this.createSegmentGroup(Ie, Tn, gt, kt);
    });
    return new on(fn, Nn);
  }
  createSegments(Ie, ye, gt, kt) {
    return ye.map(fn => fn.path.startsWith(":") ? this.findPosParam(Ie, fn, kt) : this.findOrReturn(fn, gt));
  }
  findPosParam(Ie, ye, gt) {
    const kt = gt[ye.path.substring(1)];
    if (!kt) {
      throw new i.vHH(4001, Gt);
    }
    return kt;
  }
  findOrReturn(Ie, ye) {
    let gt = 0;
    for (const kt of ye) {
      if (kt.path === Ie.path) {
        ye.splice(gt);
        return kt;
      }
      gt++;
    }
    return Ie;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class lo {}
class As {
  constructor(Ie, ye, gt, kt, fn, Nn, Tn, Ri) {
    this.injector = Ie;
    this.rootComponentType = ye;
    this.config = gt;
    this.urlTree = kt;
    this.url = fn;
    this.paramsInheritanceStrategy = Nn;
    this.relativeLinkResolution = Tn;
    this.urlSerializer = Ri;
  }
  recognize() {
    const Ie = Wa(this.urlTree.root, [], [], this.config.filter(ye => ye.redirectTo === undefined), this.relativeLinkResolution).segmentGroup;
    return this.processSegmentGroup(this.injector, this.config, Ie, De).pipe((0, F.U)(ye => {
      if (ye === null) {
        return null;
      }
      const gt = new at([], Object.freeze({}), Object.freeze({
        ...this.urlTree.queryParams
      }), this.urlTree.fragment, {}, De, this.rootComponentType, null, this.urlTree.root, -1, {});
      const kt = new Rs(gt, ye);
      const fn = new Je(this.url, kt);
      this.inheritParamsAndData(fn._root);
      return fn;
    }));
  }
  inheritParamsAndData(Ie) {
    const ye = Ie.value;
    const gt = Uo(ye, this.paramsInheritanceStrategy);
    ye.params = Object.freeze(gt.params);
    ye.data = Object.freeze(gt.data);
    Ie.children.forEach(kt => this.inheritParamsAndData(kt));
  }
  processSegmentGroup(Ie, ye, gt, kt) {
    if (gt.segments.length === 0 && gt.hasChildren()) {
      return this.processChildren(Ie, ye, gt);
    } else {
      return this.processSegment(Ie, ye, gt, gt.segments, kt);
    }
  }
  processChildren(Ie, ye, gt) {
    return (0, t.D)(Object.keys(gt.children)).pipe((0, pe.b)(kt => {
      const fn = gt.children[kt];
      const Nn = el(ye, kt);
      return this.processSegmentGroup(Ie, Nn, fn, kt);
    }), (0, Ge.R)((kt, fn) => kt && fn ? (kt.push(...fn), kt) : null), (0, st.o)(kt => kt !== null), (0, j.d)(null), ot(), (0, F.U)(kt => {
      if (kt === null) {
        return null;
      }
      const fn = Kc(kt);
      (function Io(je) {
        je.sort((Ie, ye) => Ie.value.outlet === De ? -1 : ye.value.outlet === De ? 1 : Ie.value.outlet.localeCompare(ye.value.outlet));
      })(fn);
      return fn;
    }));
  }
  processSegment(Ie, ye, gt, kt, fn) {
    return (0, t.D)(ye).pipe((0, pe.b)(Nn => {
      return this.processSegmentAgainstRoute(Nn._injector ?? Ie, Nn, gt, kt, fn);
    }), he(Nn => !!Nn), (0, Re.K)(Nn => {
      if (wi(Nn)) {
        if (Ct(gt, kt, fn)) {
          return (0, b.of)([]);
        } else {
          return (0, b.of)(null);
        }
      }
      throw Nn;
    }));
  }
  processSegmentAgainstRoute(Ie, ye, gt, kt, fn) {
    if (ye.redirectTo || !qt(ye, gt, kt, fn)) {
      return (0, b.of)(null);
    }
    let Nn;
    if (ye.path === "**") {
      const Yr = kt.length > 0 ? ve(kt).parameters : {};
      const Bs = gd(gt) + kt.length;
      const Nt = new at(kt, Yr, Object.freeze({
        ...this.urlTree.queryParams
      }), this.urlTree.fragment, kl(ye), Rr(ye), ye.component ?? ye._loadedComponent ?? null, ye, Sc(gt), Bs, Gi(ye), Bs);
      Nn = (0, b.of)({
        snapshot: Nt,
        consumedSegments: [],
        remainingSegments: []
      });
    } else {
      Nn = Bl(gt, ye, kt, Ie).pipe((0, F.U)(({
        matched: Yr,
        consumedSegments: Bs,
        remainingSegments: Nt,
        parameters: Ke
      }) => {
        if (!Yr) {
          return null;
        }
        const On = gd(gt) + Bs.length;
        return {
          snapshot: new at(Bs, Ke, Object.freeze({
            ...this.urlTree.queryParams
          }), this.urlTree.fragment, kl(ye), Rr(ye), ye.component ?? ye._loadedComponent ?? null, ye, Sc(gt), On, Gi(ye), On),
          consumedSegments: Bs,
          remainingSegments: Nt
        };
      }));
    }
    return Nn.pipe((0, Z.w)(Yr => {
      if (Yr === null) {
        return (0, b.of)(null);
      }
      const {
        snapshot: Ke,
        consumedSegments: We,
        remainingSegments: jt
      } = Yr;
      Ie = ye._injector ?? Ie;
      const On = ye._loadedInjector ?? Ie;
      const ri = function Sa(je) {
        if (je.children) {
          return je.children;
        } else if (je.loadChildren) {
          return je._loadedRoutes;
        } else {
          return [];
        }
      }(ye);
      const {
        segmentGroup: Bi,
        slicedSegments: wr
      } = Wa(gt, We, jt, ri.filter(oe => oe.redirectTo === undefined), this.relativeLinkResolution);
      if (wr.length === 0 && Bi.hasChildren()) {
        return this.processChildren(On, ri, Bi).pipe((0, F.U)(oe => oe === null ? null : [new Rs(Ke, oe)]));
      }
      if (ri.length === 0 && wr.length === 0) {
        return (0, b.of)([new Rs(Ke, [])]);
      }
      const Kr = Rr(ye) === fn;
      return this.processSegment(On, ri, Bi, wr, Kr ? De : fn).pipe((0, F.U)(oe => oe === null ? null : [new Rs(Ke, oe)]));
    }));
  }
}
function hl(je) {
  const Ie = je.value.routeConfig;
  return Ie && Ie.path === "" && Ie.redirectTo === undefined;
}
function Kc(je) {
  const Ie = [];
  const ye = new Set();
  for (const gt of je) {
    if (!hl(gt)) {
      Ie.push(gt);
      continue;
    }
    const kt = Ie.find(fn => gt.value.routeConfig === fn.value.routeConfig);
    if (kt !== undefined) {
      kt.children.push(...gt.children);
      ye.add(kt);
    } else {
      Ie.push(gt);
    }
  }
  for (const gt of ye) {
    const kt = Kc(gt.children);
    Ie.push(new Rs(gt.value, kt));
  }
  return Ie.filter(gt => !ye.has(gt));
}
function Sc(je) {
  let Ie = je;
  for (; Ie._sourceSegment;) {
    Ie = Ie._sourceSegment;
  }
  return Ie;
}
function gd(je) {
  let ye = je;
  let gt = ye._segmentIndexShift ?? 0;
  for (; ye._sourceSegment;) {
    var kt;
    ye = ye._sourceSegment;
    gt += (kt = ye._segmentIndexShift) !== null && kt !== undefined ? kt : 0;
  }
  return gt - 1;
}
function kl(je) {
  return je.data || {};
}
function Gi(je) {
  return je.resolve || {};
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $l(je) {
  return typeof je.title == "string" || je.title === null;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Nc(je) {
  return (0, Z.w)(Ie => {
    const ye = je(Ie);
    if (ye) {
      return (0, t.D)(ye).pipe((0, F.U)(() => Ie));
    } else {
      return (0, b.of)(Ie);
    }
  });
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Da = (() => {
  class je {
    buildTitle(ye) {
      let gt;
      let kt = ye.root;
      for (; kt !== undefined;) {
        var fn;
        gt = (fn = this.getResolvedTitleForRoute(kt)) !== null && fn !== undefined ? fn : gt;
        kt = kt.children.find(Nn => Nn.outlet === De);
      }
      return gt;
    }
    getResolvedTitleForRoute(ye) {
      return ye.data[Qe];
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)();
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: function () {
      return (0, i.f3M)(td);
    },
    providedIn: "root"
  });
  return je;
})();
let td = (() => {
  class je extends Da {
    constructor(ye) {
      super();
      this.title = ye;
    }
    updateTitle(ye) {
      const gt = this.buildTitle(ye);
      if (gt !== undefined) {
        this.title.setTitle(gt);
      }
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.LFG(Be.Dx));
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: je.ɵfac,
    providedIn: "root"
  });
  return je;
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
class mu {}
class nd extends class jo {
  shouldDetach(Ie) {
    return false;
  }
  store(Ie, ye) {}
  shouldAttach(Ie) {
    return false;
  }
  retrieve(Ie) {
    return null;
  }
  shouldReuseRoute(Ie, ye) {
    return Ie.routeConfig === ye.routeConfig;
  }
} {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ol = new i.OlP("", {
  providedIn: "root",
  factory: () => ({})
});
const Eo = new i.OlP("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ml = (() => {
  class je {
    constructor(ye, gt) {
      this.injector = ye;
      this.compiler = gt;
      this.componentLoaders = new WeakMap();
      this.childrenLoaders = new WeakMap();
    }
    loadComponent(ye) {
      if (this.componentLoaders.get(ye)) {
        return this.componentLoaders.get(ye);
      }
      if (ye._loadedComponent) {
        return (0, b.of)(ye._loadedComponent);
      }
      if (this.onLoadStartListener) {
        this.onLoadStartListener(ye);
      }
      const gt = qe(ye.loadComponent()).pipe((0, re.b)(fn => {
        if (this.onLoadEndListener) {
          this.onLoadEndListener(ye);
        }
        ye._loadedComponent = fn;
      }), (0, Oe.x)(() => {
        this.componentLoaders.delete(ye);
      }));
      const kt = new x.c(gt, () => new U.x()).pipe((0, Ee.x)());
      this.componentLoaders.set(ye, kt);
      return kt;
    }
    loadChildren(ye, gt) {
      if (this.childrenLoaders.get(gt)) {
        return this.childrenLoaders.get(gt);
      }
      if (gt._loadedRoutes) {
        return (0, b.of)({
          routes: gt._loadedRoutes,
          injector: gt._loadedInjector
        });
      }
      if (this.onLoadStartListener) {
        this.onLoadStartListener(gt);
      }
      const fn = this.loadModuleFactoryOrRoutes(gt.loadChildren).pipe((0, F.U)(Tn => {
        if (this.onLoadEndListener) {
          this.onLoadEndListener(gt);
        }
        let Ri;
        let Yr;
        let Bs = false;
        if (Array.isArray(Tn)) {
          Yr = Tn;
        } else {
          Ri = Tn.create(ye).injector;
          Yr = St(Ri.get(Eo, [], i.XFs.Self | i.XFs.Optional));
        }
        return {
          routes: Yr.map(sl),
          injector: Ri
        };
      }), (0, Oe.x)(() => {
        this.childrenLoaders.delete(gt);
      }));
      const Nn = new x.c(fn, () => new U.x()).pipe((0, Ee.x)());
      this.childrenLoaders.set(gt, Nn);
      return Nn;
    }
    loadModuleFactoryOrRoutes(ye) {
      return qe(ye()).pipe((0, q.z)(gt => gt instanceof i.YKP || Array.isArray(gt) ? (0, b.of)(gt) : (0, t.D)(this.compiler.compileModuleAsync(gt))));
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.LFG(i.zs3), i.LFG(i.Sil));
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: je.ɵfac,
    providedIn: "root"
  });
  return je;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class $o {}
class Su {
  shouldProcessUrl(Ie) {
    return true;
  }
  extract(Ie) {
    return Ie;
  }
  merge(Ie, ye) {
    return Ie;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ps(je) {
  throw je;
}
function Ii(je, Ie, ye) {
  return Ie.parse("/");
}
const lc = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
const cc = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
function uc() {
  const ye = (0, i.f3M)(Zi);
  const gt = (0, i.f3M)(kn);
  const kt = (0, i.f3M)(B.Ye);
  const fn = (0, i.f3M)(i.zs3);
  const Nn = (0, i.f3M)(i.Sil);
  const Tn = (0, i.f3M)(Eo, {
    optional: true
  }) ?? [];
  const Ri = (0, i.f3M)(Ol, {
    optional: true
  }) ?? {};
  const Yr = (0, i.f3M)(td);
  const Bs = (0, i.f3M)(Da, {
    optional: true
  });
  const Nt = (0, i.f3M)($o, {
    optional: true
  });
  const Ke = (0, i.f3M)(mu, {
    optional: true
  });
  const We = new F0(null, ye, gt, kt, fn, Nn, St(Tn));
  if (Nt) {
    We.urlHandlingStrategy = Nt;
  }
  if (Ke) {
    We.routeReuseStrategy = Ke;
  }
  We.titleStrategy = Bs ?? Yr;
  (function ir(je, Ie) {
    if (je.errorHandler) {
      Ie.errorHandler = je.errorHandler;
    }
    if (je.malformedUriErrorHandler) {
      Ie.malformedUriErrorHandler = je.malformedUriErrorHandler;
    }
    if (je.onSameUrlNavigation) {
      Ie.onSameUrlNavigation = je.onSameUrlNavigation;
    }
    if (je.paramsInheritanceStrategy) {
      Ie.paramsInheritanceStrategy = je.paramsInheritanceStrategy;
    }
    if (je.relativeLinkResolution) {
      Ie.relativeLinkResolution = je.relativeLinkResolution;
    }
    if (je.urlUpdateStrategy) {
      Ie.urlUpdateStrategy = je.urlUpdateStrategy;
    }
    if (je.canceledNavigationResolution) {
      Ie.canceledNavigationResolution = je.canceledNavigationResolution;
    }
  })(Ri, We);
  return We;
}
export let F0 = (() => {
  class je {
    constructor(ye, gt, kt, fn, Nn, Tn, Ri) {
      this.rootComponentType = ye;
      this.urlSerializer = gt;
      this.rootContexts = kt;
      this.location = fn;
      this.config = Ri;
      this.lastSuccessfulNavigation = null;
      this.currentNavigation = null;
      this.disposed = false;
      this.navigationId = 0;
      this.currentPageId = 0;
      this.isNgZoneEnabled = false;
      this.events = new U.x();
      this.errorHandler = Ps;
      this.malformedUriErrorHandler = Ii;
      this.navigated = false;
      this.lastSuccessfulId = -1;
      this.afterPreactivation = () => (0, b.of)(undefined);
      this.urlHandlingStrategy = new Su();
      this.routeReuseStrategy = new nd();
      this.onSameUrlNavigation = "ignore";
      this.paramsInheritanceStrategy = "emptyOnly";
      this.urlUpdateStrategy = "deferred";
      this.relativeLinkResolution = "corrected";
      this.canceledNavigationResolution = "replace";
      this.configLoader = Nn.get(ml);
      this.configLoader.onLoadEndListener = Ke => this.triggerEvent(new Za(Ke));
      this.configLoader.onLoadStartListener = Ke => this.triggerEvent(new Ca(Ke));
      this.ngModule = Nn.get(i.h0i);
      this.console = Nn.get(i.c2e);
      const Nt = Nn.get(i.R0b);
      this.isNgZoneEnabled = Nt instanceof i.R0b && i.R0b.isInAngularZone();
      this.resetConfig(Ri);
      this.currentUrlTree = function ne() {
        return new Kt(new on([], {}), {}, null);
      }();
      this.rawUrlTree = this.currentUrlTree;
      this.browserUrlTree = this.currentUrlTree;
      this.routerState = Qs(this.currentUrlTree, this.rootComponentType);
      this.transitions = new k.X({
        id: 0,
        targetPageId: 0,
        currentUrlTree: this.currentUrlTree,
        currentRawUrl: this.currentUrlTree,
        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
        rawUrl: this.currentUrlTree,
        extras: {},
        resolve: null,
        reject: null,
        promise: Promise.resolve(true),
        source: "imperative",
        restoredState: null,
        currentSnapshot: this.routerState.snapshot,
        targetSnapshot: null,
        currentRouterState: this.routerState,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null
      });
      this.navigations = this.setupNavigations(this.transitions);
      this.processNavigations();
    }
    get browserPageId() {
      return this.location.getState()?.ɵrouterPageId;
    }
    setupNavigations(ye) {
      const gt = this.events;
      return ye.pipe((0, fe.h)(kt => kt.id !== 0), (0, F.U)(kt => ({
        ...kt,
        extractedUrl: this.urlHandlingStrategy.extract(kt.rawUrl)
      })), (0, Z.w)(kt => {
        let fn = false;
        let Nn = false;
        return (0, b.of)(kt).pipe((0, re.b)(Tn => {
          this.currentNavigation = {
            id: Tn.id,
            initialUrl: Tn.rawUrl,
            extractedUrl: Tn.extractedUrl,
            trigger: Tn.source,
            extras: Tn.extras,
            previousNavigation: this.lastSuccessfulNavigation ? {
              ...this.lastSuccessfulNavigation,
              previousNavigation: null
            } : null
          };
        }), (0, Z.w)(Tn => {
          const Ri = this.browserUrlTree.toString();
          const Yr = !this.navigated || Tn.extractedUrl.toString() !== Ri || Ri !== this.currentUrlTree.toString();
          if ((this.onSameUrlNavigation === "reload" || Yr) && this.urlHandlingStrategy.shouldProcessUrl(Tn.rawUrl)) {
            if (rc(Tn.source)) {
              this.browserUrlTree = Tn.extractedUrl;
            }
            return (0, b.of)(Tn).pipe((0, Z.w)(Nt => {
              const Ke = this.transitions.getValue();
              gt.next(new Fr(Nt.id, this.serializeUrl(Nt.extractedUrl), Nt.source, Nt.restoredState));
              if (Ke !== this.transitions.getValue()) {
                return O.E;
              } else {
                return Promise.resolve(Nt);
              }
            }), function Ga(je, Ie, ye, gt) {
              return (0, Z.w)(kt => function Ts(je, Ie, ye, gt, kt) {
                return new Os(je, Ie, ye, gt, kt).apply();
              }(je, Ie, ye, kt.extractedUrl, gt).pipe((0, F.U)(fn => ({
                ...kt,
                urlAfterRedirects: fn
              }))));
            }
            /**
                   * @license
                   * Copyright Google LLC All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), (0, re.b)(Nt => {
              this.currentNavigation = {
                ...this.currentNavigation,
                finalUrl: Nt.urlAfterRedirects
              };
              kt.urlAfterRedirects = Nt.urlAfterRedirects;
            }), function ic(je, Ie, ye, gt, kt, fn) {
              return (0, q.z)(Nn => function Hs(je, Ie, ye, gt, kt, fn, Nn = "emptyOnly", Tn = "legacy") {
                return new As(je, Ie, ye, gt, kt, Nn, Tn, fn).recognize().pipe((0, Z.w)(Ri => Ri === null ? function gl(je) {
                  return new E.y(Ie => Ie.error(je));
                }(new lo()) : (0, b.of)(Ri)));
              }(je, Ie, ye, Nn.urlAfterRedirects, gt.serialize(Nn.urlAfterRedirects), gt, kt, fn).pipe((0, F.U)(Tn => ({
                ...Nn,
                targetSnapshot: Tn
              }))));
            }
            /**
                   * @license
                   * Copyright Google LLC All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */(this.ngModule.injector, this.rootComponentType, this.config, this.urlSerializer, this.paramsInheritanceStrategy, this.relativeLinkResolution), (0, re.b)(Nt => {
              kt.targetSnapshot = Nt.targetSnapshot;
              if (this.urlUpdateStrategy === "eager") {
                if (!Nt.extras.skipLocationChange) {
                  const We = this.urlHandlingStrategy.merge(Nt.urlAfterRedirects, Nt.rawUrl);
                  this.setBrowserUrl(We, Nt);
                }
                this.browserUrlTree = Nt.urlAfterRedirects;
              }
              const Ke = new Po(Nt.id, this.serializeUrl(Nt.extractedUrl), this.serializeUrl(Nt.urlAfterRedirects), Nt.targetSnapshot);
              gt.next(Ke);
            }));
          }
          if (Yr && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
            const {
              id: Ke,
              extractedUrl: We,
              source: jt,
              restoredState: On,
              extras: ri
            } = Tn;
            const Bi = new Fr(Ke, this.serializeUrl(We), jt, On);
            gt.next(Bi);
            const wr = Qs(We, this.rootComponentType).snapshot;
            kt = {
              ...Tn,
              targetSnapshot: wr,
              urlAfterRedirects: We,
              extras: {
                ...ri,
                skipLocationChange: false,
                replaceUrl: false
              }
            };
            return (0, b.of)(kt);
          }
          this.rawUrlTree = Tn.rawUrl;
          Tn.resolve(null);
          return O.E;
        }), (0, re.b)(Tn => {
          const Ri = new dl(Tn.id, this.serializeUrl(Tn.extractedUrl), this.serializeUrl(Tn.urlAfterRedirects), Tn.targetSnapshot);
          this.triggerEvent(Ri);
        }), (0, F.U)(Tn => kt = {
          ...Tn,
          guards: xt(Tn.targetSnapshot, Tn.currentSnapshot, this.rootContexts)
        }), function wt(je, Ie) {
          return (0, q.z)(ye => {
            const {
              targetSnapshot: gt,
              currentSnapshot: kt,
              guards: {
                canActivateChecks: fn,
                canDeactivateChecks: Nn
              }
            } = ye;
            if (Nn.length === 0 && fn.length === 0) {
              return (0, b.of)({
                ...ye,
                guardsResult: true
              });
            } else {
              return function mn(je, Ie, ye, gt) {
                return (0, t.D)(je).pipe((0, q.z)(kt => function xi(je, Ie, ye, gt, kt) {
                  const fn = Ie && Ie.routeConfig ? Ie.routeConfig.canDeactivate : null;
                  if (!fn || fn.length === 0) {
                    return (0, b.of)(true);
                  }
                  const Nn = fn.map(Tn => {
                    const Yr = Fa(Ie) ?? kt;
                    const Bs = wn(Tn, Yr);
                    return qe(function He(je) {
                      return je && oa(je.canDeactivate);
                    }(Bs) ? Bs.canDeactivate(je, Ie, ye, gt) : Yr.runInContext(() => Bs(je, Ie, ye, gt))).pipe(he());
                  });
                  return (0, b.of)(Nn).pipe(Hr());
                }(kt.component, kt.route, ye, Ie, gt)), he(kt => kt !== true, true));
              }(Nn, gt, kt, je).pipe((0, q.z)(Tn => Tn && function Ns(je) {
                return typeof je == "boolean";
              }(Tn) ? function zn(je, Ie, ye, gt) {
                return (0, t.D)(Ie).pipe((0, pe.b)(kt => (0, w.z)(function ci(je, Ie) {
                  if (je !== null && Ie) {
                    Ie(new fl(je));
                  }
                  return (0, b.of)(true);
                }(kt.route.parent, gt), function Fn(je, Ie) {
                  if (je !== null && Ie) {
                    Ie(new ko(je));
                  }
                  return (0, b.of)(true);
                }(kt.route, gt), function lr(je, Ie, ye) {
                  const gt = Ie[Ie.length - 1];
                  const fn = Ie.slice(0, Ie.length - 1).reverse().map(Nn => function gn(je) {
                    const Ie = je.routeConfig ? je.routeConfig.canActivateChild : null;
                    if (Ie && Ie.length !== 0) {
                      return {
                        node: je,
                        guards: Ie
                      };
                    } else {
                      return null;
                    }
                  }(Nn)).filter(Nn => Nn !== null).map(Nn => (0, S.P)(() => {
                    const Tn = Nn.guards.map(Ri => {
                      const Bs = Fa(Nn.node) ?? ye;
                      const Nt = wn(Ri, Bs);
                      return qe(function dt(je) {
                        return je && oa(je.canActivateChild);
                      }(Nt) ? Nt.canActivateChild(gt, je) : Bs.runInContext(() => Nt(gt, je))).pipe(he());
                    });
                    return (0, b.of)(Tn).pipe(Hr());
                  }));
                  return (0, b.of)(fn).pipe(Hr());
                }(je, kt.path, ye), function pi(je, Ie, ye) {
                  const gt = Ie.routeConfig ? Ie.routeConfig.canActivate : null;
                  if (!gt || gt.length === 0) {
                    return (0, b.of)(true);
                  }
                  const kt = gt.map(fn => (0, S.P)(() => {
                    const Tn = Fa(Ie) ?? ye;
                    const Ri = wn(fn, Tn);
                    return qe(function ht(je) {
                      return je && oa(je.canActivate);
                    }(Ri) ? Ri.canActivate(Ie, je) : Tn.runInContext(() => Ri(Ie, je))).pipe(he());
                  }));
                  return (0, b.of)(kt).pipe(Hr());
                }(je, kt.route, ye))), he(kt => kt !== true, true));
              }(gt, fn, je, Ie) : (0, b.of)(Tn)), (0, F.U)(Tn => ({
                ...ye,
                guardsResult: Tn
              })));
            }
          });
        }(this.ngModule.injector, Tn => this.triggerEvent(Tn)), (0, re.b)(Tn => {
          kt.guardsResult = Tn.guardsResult;
          if (Di(Tn.guardsResult)) {
            throw Js(0, Tn.guardsResult);
          }
          const Ri = new qs(Tn.id, this.serializeUrl(Tn.extractedUrl), this.serializeUrl(Tn.urlAfterRedirects), Tn.targetSnapshot, !!Tn.guardsResult);
          this.triggerEvent(Ri);
        }), (0, fe.h)(Tn => !!Tn.guardsResult || (this.restoreHistory(Tn), this.cancelNavigationTransition(Tn, "", 3), false)), Nc(Tn => {
          if (Tn.guards.canActivateChecks.length) {
            return (0, b.of)(Tn).pipe((0, re.b)(Ri => {
              const Yr = new Fo(Ri.id, this.serializeUrl(Ri.extractedUrl), this.serializeUrl(Ri.urlAfterRedirects), Ri.targetSnapshot);
              this.triggerEvent(Yr);
            }), (0, Z.w)(Ri => {
              let Yr = false;
              return (0, b.of)(Ri).pipe(function tl(je, Ie) {
                return (0, q.z)(ye => {
                  const {
                    targetSnapshot: gt,
                    guards: {
                      canActivateChecks: kt
                    }
                  } = ye;
                  if (!kt.length) {
                    return (0, b.of)(ye);
                  }
                  let fn = 0;
                  return (0, t.D)(kt).pipe((0, pe.b)(Nn => function gr(je, Ie, ye, gt) {
                    const kt = je.routeConfig;
                    const fn = je._resolve;
                    if (kt?.title !== undefined && !$l(kt)) {
                      fn[Qe] = kt.title;
                    }
                    return function ro(je, Ie, ye, gt) {
                      const kt = function Vu(je) {
                        return [...Object.keys(je), ...Object.getOwnPropertySymbols(je)];
                      }(je);
                      if (kt.length === 0) {
                        return (0, b.of)({});
                      }
                      const fn = {};
                      return (0, t.D)(kt).pipe((0, q.z)(Nn => function Zl(je, Ie, ye, gt) {
                        const fn = Fa(Ie) ?? gt;
                        const Nn = wn(je, fn);
                        return qe(Nn.resolve ? Nn.resolve(Ie, ye) : fn.runInContext(() => Nn(Ie, ye)));
                      }(je[Nn], Ie, ye, gt).pipe(he(), (0, re.b)(Tn => {
                        fn[Nn] = Tn;
                      }))), Ue(1), (0, rt.h)(fn), (0, Re.K)(Nn => wi(Nn) ? O.E : (0, I._)(Nn)));
                    }(fn, je, Ie, gt).pipe((0, F.U)(Nn => {
                      je._resolvedData = Nn;
                      je.data = Uo(je, ye).resolve;
                      if (kt && $l(kt)) {
                        je.data[Qe] = kt.title;
                      }
                      return null;
                    }));
                  }(Nn.route, gt, je, Ie)), (0, re.b)(() => fn++), Ue(1), (0, q.z)(Nn => fn === kt.length ? (0, b.of)(ye) : O.E));
                });
              }(this.paramsInheritanceStrategy, this.ngModule.injector), (0, re.b)({
                next: () => Yr = true,
                complete: () => {
                  if (!Yr) {
                    this.restoreHistory(Ri);
                    this.cancelNavigationTransition(Ri, "", 2);
                  }
                }
              }));
            }), (0, re.b)(Ri => {
              const Yr = new ha(Ri.id, this.serializeUrl(Ri.extractedUrl), this.serializeUrl(Ri.urlAfterRedirects), Ri.targetSnapshot);
              this.triggerEvent(Yr);
            }));
          }
        }), Nc(Tn => {
          const Ri = Yr => {
            var Bs;
            const Nt = [];
            if ((Bs = Yr.routeConfig) !== null && Bs !== undefined && Bs.loadComponent && !Yr.routeConfig._loadedComponent) {
              Nt.push(this.configLoader.loadComponent(Yr.routeConfig).pipe((0, re.b)(Ke => {
                Yr.component = Ke;
              }), (0, F.U)(() => {})));
            }
            for (const Ke of Yr.children) {
              Nt.push(...Ri(Ke));
            }
            return Nt;
          };
          return (0, C.a)(Ri(Tn.targetSnapshot.root)).pipe((0, j.d)(), (0, X.q)(1));
        }), Nc(() => this.afterPreactivation()), (0, F.U)(Tn => {
          const Ri = function Ki(je, Ie, ye) {
            const gt = Lr(je, Ie._root, ye ? ye._root : undefined);
            return new Vs(gt, Ie);
          }(this.routeReuseStrategy, Tn.targetSnapshot, Tn.currentRouterState);
          return kt = {
            ...Tn,
            targetRouterState: Ri
          };
        }), (0, re.b)(Tn => {
          this.currentUrlTree = Tn.urlAfterRedirects;
          this.rawUrlTree = this.urlHandlingStrategy.merge(Tn.urlAfterRedirects, Tn.rawUrl);
          this.routerState = Tn.targetRouterState;
          if (this.urlUpdateStrategy === "deferred") {
            if (!Tn.extras.skipLocationChange) {
              this.setBrowserUrl(this.rawUrlTree, Tn);
            }
            this.browserUrlTree = Tn.urlAfterRedirects;
          }
        }), ((je, Ie, ye) => (0, F.U)(gt => {
          new Xe(Ie, gt.targetRouterState, gt.currentRouterState, ye).activate(je);
          return gt;
        }))(this.rootContexts, this.routeReuseStrategy, Tn => this.triggerEvent(Tn)), (0, re.b)({
          next() {
            fn = true;
          },
          complete() {
            fn = true;
          }
        }), (0, Oe.x)(() => {
          if (!fn && !Nn) {
            this.cancelNavigationTransition(kt, "", 1);
          }
          if (this.currentNavigation?.id === kt.id) {
            this.currentNavigation = null;
          }
        }), (0, Re.K)(Tn => {
          Nn = true;
          if (vt(Tn)) {
            if (!ut(Tn)) {
              this.navigated = true;
              this.restoreHistory(kt, true);
            }
            const Yr = new Ao(kt.id, this.serializeUrl(kt.extractedUrl), Tn.message, Tn.cancellationCode);
            gt.next(Yr);
            if (ut(Tn)) {
              const Bs = this.urlHandlingStrategy.merge(Tn.url, this.rawUrlTree);
              const Nt = {
                skipLocationChange: kt.extras.skipLocationChange,
                replaceUrl: this.urlUpdateStrategy === "eager" || rc(kt.source)
              };
              this.scheduleNavigation(Bs, "imperative", null, Nt, {
                resolve: kt.resolve,
                reject: kt.reject,
                promise: kt.promise
              });
            } else {
              kt.resolve(false);
            }
          } else {
            this.restoreHistory(kt, true);
            const Yr = new Pa(kt.id, this.serializeUrl(kt.extractedUrl), Tn, kt.targetSnapshot ?? undefined);
            gt.next(Yr);
            try {
              kt.resolve(this.errorHandler(Tn));
            } catch (Bs) {
              kt.reject(Bs);
            }
          }
          return O.E;
        }));
      }));
    }
    resetRootComponentType(ye) {
      this.rootComponentType = ye;
      this.routerState.root.component = this.rootComponentType;
    }
    setTransition(ye) {
      this.transitions.next({
        ...this.transitions.value,
        ...ye
      });
    }
    initialNavigation() {
      this.setUpLocationChangeListener();
      if (this.navigationId === 0) {
        this.navigateByUrl(this.location.path(true), {
          replaceUrl: true
        });
      }
    }
    setUpLocationChangeListener() {
      this.locationSubscription ||= this.location.subscribe(ye => {
        const gt = ye.type === "popstate" ? "popstate" : "hashchange";
        if (gt === "popstate") {
          setTimeout(() => {
            var kt;
            const fn = {
              replaceUrl: true
            };
            const Nn = (kt = ye.state) !== null && kt !== undefined && kt.navigationId ? ye.state : null;
            if (Nn) {
              const Ri = {
                ...Nn
              };
              delete Ri.navigationId;
              delete Ri.ɵrouterPageId;
              if (Object.keys(Ri).length !== 0) {
                fn.state = Ri;
              }
            }
            const Tn = this.parseUrl(ye.url);
            this.scheduleNavigation(Tn, gt, Nn, fn);
          }, 0);
        }
      });
    }
    get url() {
      return this.serializeUrl(this.currentUrlTree);
    }
    getCurrentNavigation() {
      return this.currentNavigation;
    }
    triggerEvent(ye) {
      this.events.next(ye);
    }
    resetConfig(ye) {
      this.config = ye.map(sl);
      this.navigated = false;
      this.lastSuccessfulId = -1;
    }
    ngOnDestroy() {
      this.dispose();
    }
    dispose() {
      this.transitions.complete();
      if (this.locationSubscription) {
        this.locationSubscription.unsubscribe();
        this.locationSubscription = undefined;
      }
      this.disposed = true;
    }
    createUrlTree(ye, gt = {}) {
      const {
        relativeTo: kt,
        queryParams: fn,
        fragment: Nn,
        queryParamsHandling: Tn,
        preserveFragment: Ri
      } = gt;
      const Yr = kt || this.routerState.root;
      const Bs = Ri ? this.currentUrlTree.fragment : Nn;
      let Nt = null;
      switch (Tn) {
        case "merge":
          Nt = {
            ...this.currentUrlTree.queryParams,
            ...fn
          };
          break;
        case "preserve":
          Nt = this.currentUrlTree.queryParams;
          break;
        default:
          Nt = fn || null;
      }
      if (Nt !== null) {
        Nt = this.removeEmptyProps(Nt);
      }
      return _o(Yr, this.currentUrlTree, ye, Nt, Bs ?? null);
    }
    navigateByUrl(ye, gt = {
      skipLocationChange: false
    }) {
      const kt = Di(ye) ? ye : this.parseUrl(ye);
      const fn = this.urlHandlingStrategy.merge(kt, this.rawUrlTree);
      return this.scheduleNavigation(fn, "imperative", null, gt);
    }
    navigate(ye, gt = {
      skipLocationChange: false
    }) {
      (function vu(je) {
        for (let Ie = 0; Ie < je.length; Ie++) {
          if (je[Ie] == null) {
            throw new i.vHH(4008, false);
          }
        }
      })(ye);
      return this.navigateByUrl(this.createUrlTree(ye, gt), gt);
    }
    serializeUrl(ye) {
      return this.urlSerializer.serialize(ye);
    }
    parseUrl(ye) {
      let gt;
      try {
        gt = this.urlSerializer.parse(ye);
      } catch (kt) {
        gt = this.malformedUriErrorHandler(kt, this.urlSerializer, ye);
      }
      return gt;
    }
    isActive(ye, gt) {
      let kt;
      kt = gt === true ? {
        ...lc
      } : gt === false ? {
        ...cc
      } : gt;
      if (Di(ye)) {
        return bt(this.currentUrlTree, ye, kt);
      }
      const fn = this.parseUrl(ye);
      return bt(this.currentUrlTree, fn, kt);
    }
    removeEmptyProps(ye) {
      return Object.keys(ye).reduce((gt, kt) => {
        const fn = ye[kt];
        if (fn != null) {
          gt[kt] = fn;
        }
        return gt;
      }, {});
    }
    processNavigations() {
      this.navigations.subscribe(ye => {
        var gt;
        this.navigated = true;
        this.lastSuccessfulId = ye.id;
        this.currentPageId = ye.targetPageId;
        this.events.next(new m2(ye.id, this.serializeUrl(ye.extractedUrl), this.serializeUrl(this.currentUrlTree)));
        this.lastSuccessfulNavigation = this.currentNavigation;
        if ((gt = this.titleStrategy) !== null && gt !== undefined) {
          gt.updateTitle(this.routerState.snapshot);
        }
        ye.resolve(true);
      }, ye => {
        this.console.warn(`Unhandled Navigation Error: ${ye}`);
      });
    }
    scheduleNavigation(ye, gt, kt, fn, Nn) {
      if (this.disposed) {
        return Promise.resolve(false);
      }
      let Tn;
      let Ri;
      let Yr;
      if (Nn) {
        Tn = Nn.resolve;
        Ri = Nn.reject;
        Yr = Nn.promise;
      } else {
        Yr = new Promise((jt, On) => {
          Tn = jt;
          Ri = On;
        });
      }
      const Bs = ++this.navigationId;
      let Nt;
      if (this.canceledNavigationResolution === "computed") {
        if (this.currentPageId === 0) {
          kt = this.location.getState();
        }
        if (kt && kt.ɵrouterPageId) {
          Nt = kt.ɵrouterPageId;
        } else if (fn.replaceUrl || fn.skipLocationChange) {
          Nt = this.browserPageId ?? 0;
        } else {
          Nt = (this.browserPageId ?? 0) + 1;
        }
      } else {
        Nt = 0;
      }
      this.setTransition({
        id: Bs,
        targetPageId: Nt,
        source: gt,
        restoredState: kt,
        currentUrlTree: this.currentUrlTree,
        currentRawUrl: this.rawUrlTree,
        rawUrl: ye,
        extras: fn,
        resolve: Tn,
        reject: Ri,
        promise: Yr,
        currentSnapshot: this.routerState.snapshot,
        currentRouterState: this.routerState
      });
      return Yr.catch(jt => Promise.reject(jt));
    }
    setBrowserUrl(ye, gt) {
      const kt = this.urlSerializer.serialize(ye);
      const fn = {
        ...gt.extras.state,
        ...this.generateNgRouterState(gt.id, gt.targetPageId)
      };
      if (this.location.isCurrentPathEqualTo(kt) || gt.extras.replaceUrl) {
        this.location.replaceState(kt, "", fn);
      } else {
        this.location.go(kt, "", fn);
      }
    }
    restoreHistory(ye, gt = false) {
      if (this.canceledNavigationResolution === "computed") {
        const Nn = this.currentPageId - ye.targetPageId;
        if (ye.source !== "popstate" && this.urlUpdateStrategy !== "eager" && this.currentUrlTree !== this.currentNavigation?.finalUrl || Nn === 0) {
          if (this.currentUrlTree === this.currentNavigation?.finalUrl && Nn === 0) {
            this.resetState(ye);
            this.browserUrlTree = ye.currentUrlTree;
            this.resetUrlToCurrentUrlTree();
          }
        } else {
          this.location.historyGo(Nn);
        }
      } else if (this.canceledNavigationResolution === "replace") {
        if (gt) {
          this.resetState(ye);
        }
        this.resetUrlToCurrentUrlTree();
      }
    }
    resetState(ye) {
      this.routerState = ye.currentRouterState;
      this.currentUrlTree = ye.currentUrlTree;
      this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, ye.rawUrl);
    }
    resetUrlToCurrentUrlTree() {
      this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
    }
    cancelNavigationTransition(ye, gt, kt) {
      const fn = new Ao(ye.id, this.serializeUrl(ye.extractedUrl), gt, kt);
      this.triggerEvent(fn);
      ye.resolve(false);
    }
    generateNgRouterState(ye, gt) {
      if (this.canceledNavigationResolution === "computed") {
        return {
          navigationId: ye,
          ɵrouterPageId: gt
        };
      } else {
        return {
          navigationId: ye
        };
      }
    }
  }
  je.ɵfac = function (ye) {
    i.$Z();
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: function () {
      return uc();
    },
    providedIn: "root"
  });
  return je;
})();
function rc(je) {
  return je !== "imperative";
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let rH = (() => {
  class je {
    constructor(ye, gt, kt, fn, Nn) {
      this.router = ye;
      this.route = gt;
      this.tabIndexAttribute = kt;
      this.renderer = fn;
      this.el = Nn;
      this._preserveFragment = false;
      this._skipLocationChange = false;
      this._replaceUrl = false;
      this.commands = null;
      this.onChanges = new U.x();
      this.setTabIndexIfNotOnNativeEl("0");
    }
    set preserveFragment(ye) {
      this._preserveFragment = (0, i.D6c)(ye);
    }
    get preserveFragment() {
      return this._preserveFragment;
    }
    set skipLocationChange(ye) {
      this._skipLocationChange = (0, i.D6c)(ye);
    }
    get skipLocationChange() {
      return this._skipLocationChange;
    }
    set replaceUrl(ye) {
      this._replaceUrl = (0, i.D6c)(ye);
    }
    get replaceUrl() {
      return this._replaceUrl;
    }
    setTabIndexIfNotOnNativeEl(ye) {
      if (this.tabIndexAttribute != null) {
        return;
      }
      const gt = this.renderer;
      const kt = this.el.nativeElement;
      if (ye !== null) {
        gt.setAttribute(kt, "tabindex", ye);
      } else {
        gt.removeAttribute(kt, "tabindex");
      }
    }
    ngOnChanges(ye) {
      this.onChanges.next(this);
    }
    set routerLink(ye) {
      if (ye != null) {
        this.commands = Array.isArray(ye) ? ye : [ye];
        this.setTabIndexIfNotOnNativeEl("0");
      } else {
        this.commands = null;
        this.setTabIndexIfNotOnNativeEl(null);
      }
    }
    onClick() {
      if (this.urlTree !== null) {
        this.router.navigateByUrl(this.urlTree, {
          skipLocationChange: this.skipLocationChange,
          replaceUrl: this.replaceUrl,
          state: this.state
        });
      }
      return true;
    }
    get urlTree() {
      if (this.commands === null) {
        return null;
      } else {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.relativeTo !== undefined ? this.relativeTo : this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: this.preserveFragment
        });
      }
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.Y36(F0), i.Y36(gz), i.$8M("tabindex"), i.Y36(i.Qsj), i.Y36(i.SBq));
  };
  je.ɵdir = i.lG2({
    type: je,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    hostBindings: function (ye, gt) {
      if (ye & 1) {
        i.NdJ("click", function () {
          return gt.onClick();
        });
      }
    },
    inputs: {
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      relativeTo: "relativeTo",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      routerLink: "routerLink"
    },
    standalone: true,
    features: [i.TTD]
  });
  return je;
})();
export let yS = (() => {
  class je {
    constructor(ye, gt, kt) {
      this.router = ye;
      this.route = gt;
      this.locationStrategy = kt;
      this._preserveFragment = false;
      this._skipLocationChange = false;
      this._replaceUrl = false;
      this.commands = null;
      this.href = null;
      this.onChanges = new U.x();
      this.subscription = ye.events.subscribe(fn => {
        if (fn instanceof m2) {
          this.updateTargetUrlAndHref();
        }
      });
    }
    set preserveFragment(ye) {
      this._preserveFragment = (0, i.D6c)(ye);
    }
    get preserveFragment() {
      return this._preserveFragment;
    }
    set skipLocationChange(ye) {
      this._skipLocationChange = (0, i.D6c)(ye);
    }
    get skipLocationChange() {
      return this._skipLocationChange;
    }
    set replaceUrl(ye) {
      this._replaceUrl = (0, i.D6c)(ye);
    }
    get replaceUrl() {
      return this._replaceUrl;
    }
    set routerLink(ye) {
      this.commands = ye != null ? Array.isArray(ye) ? ye : [ye] : null;
    }
    ngOnChanges(ye) {
      this.updateTargetUrlAndHref();
      this.onChanges.next(this);
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    onClick(ye, gt, kt, fn, Nn) {
      return ye !== 0 || !!gt || !!kt || !!fn || !!Nn || typeof this.target == "string" && this.target != "_self" || this.urlTree === null || (this.router.navigateByUrl(this.urlTree, {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state
      }), false);
    }
    updateTargetUrlAndHref() {
      this.href = this.urlTree !== null ? this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null;
    }
    get urlTree() {
      if (this.commands === null) {
        return null;
      } else {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.relativeTo !== undefined ? this.relativeTo : this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: this.preserveFragment
        });
      }
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.Y36(F0), i.Y36(gz), i.Y36(B.S$));
  };
  je.ɵdir = i.lG2({
    type: je,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    hostVars: 2,
    hostBindings: function (ye, gt) {
      if (ye & 1) {
        i.NdJ("click", function (fn) {
          return gt.onClick(fn.button, fn.ctrlKey, fn.shiftKey, fn.altKey, fn.metaKey);
        });
      }
      if (ye & 2) {
        i.uIk("target", gt.target)("href", gt.href, i.LSH);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      relativeTo: "relativeTo",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      routerLink: "routerLink"
    },
    standalone: true,
    features: [i.TTD]
  });
  return je;
})();
export let Od = (() => {
  class je {
    constructor(ye, gt, kt, fn, Nn, Tn) {
      this.router = ye;
      this.element = gt;
      this.renderer = kt;
      this.cdr = fn;
      this.link = Nn;
      this.linkWithHref = Tn;
      this.classes = [];
      this.isActive = false;
      this.routerLinkActiveOptions = {
        exact: false
      };
      this.isActiveChange = new i.vpe();
      this.routerEventsSubscription = ye.events.subscribe(Ri => {
        if (Ri instanceof m2) {
          this.update();
        }
      });
    }
    ngAfterContentInit() {
      (0, b.of)(this.links.changes, this.linksWithHrefs.changes, (0, b.of)(null)).pipe((0, ke.J)()).subscribe(ye => {
        this.update();
        this.subscribeToEachLinkOnChanges();
      });
    }
    subscribeToEachLinkOnChanges() {
      var ye;
      if ((ye = this.linkInputChangesSubscription) !== null && ye !== undefined) {
        ye.unsubscribe();
      }
      const gt = [...this.links.toArray(), ...this.linksWithHrefs.toArray(), this.link, this.linkWithHref].filter(kt => !!kt).map(kt => kt.onChanges);
      this.linkInputChangesSubscription = (0, t.D)(gt).pipe((0, ke.J)()).subscribe(kt => {
        if (this.isActive !== this.isLinkActive(this.router)(kt)) {
          this.update();
        }
      });
    }
    set routerLinkActive(ye) {
      const gt = Array.isArray(ye) ? ye : ye.split(" ");
      this.classes = gt.filter(kt => !!kt);
    }
    ngOnChanges(ye) {
      this.update();
    }
    ngOnDestroy() {
      var ye;
      this.routerEventsSubscription.unsubscribe();
      if ((ye = this.linkInputChangesSubscription) !== null && ye !== undefined) {
        ye.unsubscribe();
      }
    }
    update() {
      if (!!this.links && !!this.linksWithHrefs && !!this.router.navigated) {
        Promise.resolve().then(() => {
          const ye = this.hasActiveLinks();
          if (this.isActive !== ye) {
            this.isActive = ye;
            this.cdr.markForCheck();
            this.classes.forEach(gt => {
              if (ye) {
                this.renderer.addClass(this.element.nativeElement, gt);
              } else {
                this.renderer.removeClass(this.element.nativeElement, gt);
              }
            });
            if (ye && this.ariaCurrentWhenActive !== undefined) {
              this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
            } else {
              this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
            }
            this.isActiveChange.emit(ye);
          }
        });
      }
    }
    isLinkActive(ye) {
      const gt = function Xc(je) {
        return !!je.paths;
      }
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || false;
      return kt => !!kt.urlTree && ye.isActive(kt.urlTree, gt);
    }
    hasActiveLinks() {
      const ye = this.isLinkActive(this.router);
      return this.link && ye(this.link) || this.linkWithHref && ye(this.linkWithHref) || this.links.some(ye) || this.linksWithHrefs.some(ye);
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.Y36(F0), i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(i.sBO), i.Y36(rH, 8), i.Y36(yS, 8));
  };
  je.ɵdir = i.lG2({
    type: je,
    selectors: [["", "routerLinkActive", ""]],
    contentQueries: function (ye, gt, kt) {
      if (ye & 1) {
        i.Suo(kt, rH, 5);
        i.Suo(kt, yS, 5);
      }
      if (ye & 2) {
        let fn;
        if (i.iGM(fn = i.CRH())) {
          gt.links = fn;
        }
        if (i.iGM(fn = i.CRH())) {
          gt.linksWithHrefs = fn;
        }
      }
    },
    inputs: {
      routerLinkActiveOptions: "routerLinkActiveOptions",
      ariaCurrentWhenActive: "ariaCurrentWhenActive",
      routerLinkActive: "routerLinkActive"
    },
    outputs: {
      isActiveChange: "isActiveChange"
    },
    exportAs: ["routerLinkActive"],
    standalone: true,
    features: [i.TTD]
  });
  return je;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xl {}
let id = (() => {
  class je {
    constructor(ye, gt, kt, fn, Nn) {
      this.router = ye;
      this.injector = kt;
      this.preloadingStrategy = fn;
      this.loader = Nn;
    }
    setUpPreloading() {
      this.subscription = this.router.events.pipe((0, fe.h)(ye => ye instanceof m2), (0, pe.b)(() => this.preload())).subscribe(() => {});
    }
    preload() {
      return this.processRoutes(this.injector, this.router.config);
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    processRoutes(ye, gt) {
      const kt = [];
      for (const Ri of gt) {
        var fn;
        var Nn;
        if (Ri.providers && !Ri._injector) {
          Ri._injector = (0, i.MMx)(Ri.providers, ye, `Route: ${Ri.path}`);
        }
        const Yr = (fn = Ri._injector) !== null && fn !== undefined ? fn : ye;
        const Bs = (Nn = Ri._loadedInjector) !== null && Nn !== undefined ? Nn : Yr;
        if (Ri.loadChildren && !Ri._loadedRoutes && Ri.canLoad === undefined || Ri.loadComponent && !Ri._loadedComponent) {
          kt.push(this.preloadConfig(Yr, Ri));
        } else if (Ri.children || Ri._loadedRoutes) {
          var Tn;
          kt.push(this.processRoutes(Bs, (Tn = Ri.children) !== null && Tn !== undefined ? Tn : Ri._loadedRoutes));
        }
      }
      return (0, t.D)(kt).pipe((0, ke.J)());
    }
    preloadConfig(ye, gt) {
      return this.preloadingStrategy.preload(gt, () => {
        let kt;
        kt = gt.loadChildren && gt.canLoad === undefined ? this.loader.loadChildren(ye, gt) : (0, b.of)(null);
        const fn = kt.pipe((0, q.z)(Nn => {
          if (Nn === null) {
            return (0, b.of)(undefined);
          } else {
            gt._loadedRoutes = Nn.routes;
            gt._loadedInjector = Nn.injector;
            return this.processRoutes(Nn.injector ?? ye, Nn.routes);
          }
        }));
        if (gt.loadComponent && !gt._loadedComponent) {
          const Nn = this.loader.loadComponent(gt);
          return (0, t.D)([fn, Nn]).pipe((0, ke.J)());
        }
        return fn;
      });
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.LFG(F0), i.LFG(i.Sil), i.LFG(i.lqb), i.LFG(Xl), i.LFG(ml));
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: je.ɵfac,
    providedIn: "root"
  });
  return je;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ll = new i.OlP("");
let Hc = (() => {
  class je {
    constructor(ye, gt, kt = {}) {
      this.router = ye;
      this.viewportScroller = gt;
      this.options = kt;
      this.lastId = 0;
      this.lastSource = "imperative";
      this.restoredId = 0;
      this.store = {};
      kt.scrollPositionRestoration = kt.scrollPositionRestoration || "disabled";
      kt.anchorScrolling = kt.anchorScrolling || "disabled";
    }
    init() {
      if (this.options.scrollPositionRestoration !== "disabled") {
        this.viewportScroller.setHistoryScrollRestoration("manual");
      }
      this.routerEventsSubscription = this.createScrollEvents();
      this.scrollEventsSubscription = this.consumeScrollEvents();
    }
    createScrollEvents() {
      return this.router.events.subscribe(ye => {
        if (ye instanceof Fr) {
          this.store[this.lastId] = this.viewportScroller.getScrollPosition();
          this.lastSource = ye.navigationTrigger;
          this.restoredId = ye.restoredState ? ye.restoredState.navigationId : 0;
        } else if (ye instanceof m2) {
          this.lastId = ye.id;
          this.scheduleScrollEvent(ye, this.router.parseUrl(ye.urlAfterRedirects).fragment);
        }
      });
    }
    consumeScrollEvents() {
      return this.router.events.subscribe(ye => {
        if (ye instanceof pa) {
          if (ye.position) {
            if (this.options.scrollPositionRestoration === "top") {
              this.viewportScroller.scrollToPosition([0, 0]);
            } else if (this.options.scrollPositionRestoration === "enabled") {
              this.viewportScroller.scrollToPosition(ye.position);
            }
          } else if (ye.anchor && this.options.anchorScrolling === "enabled") {
            this.viewportScroller.scrollToAnchor(ye.anchor);
          } else if (this.options.scrollPositionRestoration !== "disabled") {
            this.viewportScroller.scrollToPosition([0, 0]);
          }
        }
      });
    }
    scheduleScrollEvent(ye, gt) {
      this.router.triggerEvent(new pa(ye, this.lastSource === "popstate" ? this.store[this.restoredId] : null, gt));
    }
    ngOnDestroy() {
      if (this.routerEventsSubscription) {
        this.routerEventsSubscription.unsubscribe();
      }
      if (this.scrollEventsSubscription) {
        this.scrollEventsSubscription.unsubscribe();
      }
    }
  }
  je.ɵfac = function (ye) {
    i.$Z();
  };
  je.ɵprov = i.Yz7({
    token: je,
    factory: je.ɵfac
  });
  return je;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function vc(je, Ie) {
  return {
    ɵkind: je,
    ɵproviders: Ie
  };
}
function xl(je) {
  return [{
    provide: Eo,
    multi: true,
    useValue: je
  }];
}
function Vd() {
  const je = (0, i.f3M)(i.zs3);
  return Ie => {
    var ye;
    var gt;
    const kt = je.get(i.z2F);
    if (Ie !== kt.components[0]) {
      return;
    }
    const fn = je.get(F0);
    const Nn = je.get(vl);
    if (je.get(Mo) === 1) {
      fn.initialNavigation();
    }
    if ((ye = je.get(za, null, i.XFs.Optional)) !== null && ye !== undefined) {
      ye.setUpPreloading();
    }
    if ((gt = je.get(Ll, null, i.XFs.Optional)) !== null && gt !== undefined) {
      gt.init();
    }
    fn.resetRootComponentType(kt.componentTypes[0]);
    if (!Nn.closed) {
      Nn.next();
      Nn.unsubscribe();
    }
  };
}
const vl = new i.OlP("", {
  factory: () => new U.x()
});
const Mo = new i.OlP("", {
  providedIn: "root",
  factory: () => 1
});
const za = new i.OlP("");
function ts(je) {
  return vc(0, [{
    provide: za,
    useExisting: id
  }, {
    provide: Xl,
    useExisting: je
  }]);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Il = new i.OlP("ROUTER_FORROOT_GUARD");
const yu = [B.Ye, {
  provide: Zi,
  useClass: $i
}, {
  provide: F0,
  useFactory: uc
}, kn, {
  provide: gz,
  useFactory: function Du(je) {
    return je.routerState.root;
  },
  deps: [F0]
}, ml];
function Rl() {
  return new i.PXZ("Router", F0);
}
export let Bz = (() => {
  class je {
    constructor(ye) {}
    static forRoot(ye, gt) {
      return {
        ngModule: je,
        providers: [yu, [], xl(ye), {
          provide: Il,
          useFactory: Pl,
          deps: [[F0, new i.FiY(), new i.tp0()]]
        }, {
          provide: Ol,
          useValue: gt || {}
        }, gt != null && gt.useHash ? {
          provide: B.S$,
          useClass: B.Do
        } : {
          provide: B.S$,
          useClass: B.b0
        }, {
          provide: Ll,
          useFactory: () => {
            const je = (0, i.f3M)(F0);
            const Ie = (0, i.f3M)(B.EM);
            const ye = (0, i.f3M)(Ol);
            if (ye.scrollOffset) {
              Ie.setOffset(ye.scrollOffset);
            }
            return new Hc(je, Ie, ye);
          }
        }, gt != null && gt.preloadingStrategy ? ts(gt.preloadingStrategy).ɵproviders : [], {
          provide: i.PXZ,
          multi: true,
          useFactory: Rl
        }, gt != null && gt.initialNavigation ? ll(gt) : [], [{
          provide: Wc,
          useFactory: Vd
        }, {
          provide: i.tb,
          multi: true,
          useExisting: Wc
        }]]
      };
    }
    static forChild(ye) {
      return {
        ngModule: je,
        providers: [xl(ye)]
      };
    }
  }
  je.ɵfac = function (ye) {
    return new (ye || je)(i.LFG(Il, 8));
  };
  je.ɵmod = i.oAB({
    type: je
  });
  je.ɵinj = i.cJS({
    imports: [nr]
  });
  return je;
})();
function Pl(je) {
  return "guarded";
}
function ll(je) {
  return [je.initialNavigation === "disabled" ? vc(3, [{
    provide: i.ip1,
    multi: true,
    useFactory: () => {
      const Ie = (0, i.f3M)(F0);
      return () => {
        Ie.setUpLocationChangeListener();
      };
    }
  }, {
    provide: Mo,
    useValue: 2
  }]).ɵproviders : [], je.initialNavigation === "enabledBlocking" ? vc(2, [{
    provide: Mo,
    useValue: 0
  }, {
    provide: i.ip1,
    multi: true,
    deps: [i.zs3],
    useFactory: Ie => {
      const ye = Ie.get(B.V_, Promise.resolve());
      let gt = false;
      return () => ye.then(() => new Promise(fn => {
        const Nn = Ie.get(F0);
        const Tn = Ie.get(vl);
        (function kt(fn) {
          Ie.get(F0).events.pipe((0, fe.h)(Tn => Tn instanceof m2 || Tn instanceof Ao || Tn instanceof Pa), (0, F.U)(Tn => Tn instanceof m2 || Tn instanceof Ao && (Tn.code === 0 || Tn.code === 1) && null), (0, fe.h)(Tn => Tn !== null), (0, X.q)(1)).subscribe(() => {
            fn();
          });
        })(() => {
          fn(true);
          gt = true;
        });
        Nn.afterPreactivation = () => {
          fn(true);
          if (gt || Tn.closed) {
            return (0, b.of)(undefined);
          } else {
            return Tn;
          }
        };
        Nn.initialNavigation();
      }));
    }
  }]).ɵproviders : []];
}
const Wc = new i.OlP("");