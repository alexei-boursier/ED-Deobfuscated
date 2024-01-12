import * as b from "69751";
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
function v(u) {
  for (let f in u) {
    if (u[f] === v) {
      return f;
    }
  }
  throw Error("Could not find renamed property on target object.");
}
function C(u, f) {
  for (const y in f) {
    if (f.hasOwnProperty(y) && !u.hasOwnProperty(y)) {
      u[y] = f[y];
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
export function AaK(u) {
  if (typeof u == "string") {
    return u;
  }
  if (Array.isArray(u)) {
    return "[" + u.map(AaK).join(", ") + "]";
  }
  if (u == null) {
    return "" + u;
  }
  if (u.overriddenName) {
    return `${u.overriddenName}`;
  }
  if (u.name) {
    return `${u.name}`;
  }
  const f = u.toString();
  if (f == null) {
    return "" + f;
  }
  const y = f.indexOf("\n");
  if (y === -1) {
    return f;
  } else {
    return f.substring(0, y);
  }
}
function S(u, f) {
  if (u == null || u === "") {
    if (f === null) {
      return "";
    } else {
      return f;
    }
  } else if (f == null || f === "") {
    return u;
  } else {
    return u + " " + f;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const L = v({
  __forward_ref__: v
});
export function Gpc(u) {
  u.__forward_ref__ = Gpc;
  u.toString = function () {
    return AaK(this());
  };
  return u;
}
function E(u) {
  if (O(u)) {
    return u();
  } else {
    return u;
  }
}
function O(u) {
  return typeof u == "function" && u.hasOwnProperty(L) && u.__forward_ref__ === Gpc;
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
export class vHH extends Error {
  constructor(f, y) {
    super(function B(u, f) {
      return `NG0${Math.abs(u)}${f ? ": " + f.trim() : ""}`;
    }
    /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */(f, y));
    this.code = f;
  }
}
function F(u) {
  if (typeof u == "string") {
    return u;
  } else if (u == null) {
    return "";
  } else {
    return String(u);
  }
}
function q(u, f) {
  throw new vHH(-201, false);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function st(u, f) {
  if (u == null) {
    (function rt(u, f, y, N) {
      throw new Error(`ASSERTION ERROR: ${u}${N == null ? "" : ` [Expected=> ${y} ${N} ${f} <=Actual]`}`);
    })(f, u, null, "!=");
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Yz7(u) {
  return {
    token: u.token,
    providedIn: u.providedIn || null,
    factory: u.factory,
    value: undefined
  };
}
export function cJS(u) {
  return {
    providers: u.providers || [],
    imports: u.imports || []
  };
}
function It(u) {
  return Dn(u, St) || Dn(u, Lt);
}
export function Z0I(u) {
  return It(u) !== null;
}
function Dn(u, f) {
  if (u.hasOwnProperty(f)) {
    return u[f];
  } else {
    return null;
  }
}
function et(u) {
  if (u && (u.hasOwnProperty(ve) || u.hasOwnProperty(ft))) {
    return u[ve];
  } else {
    return null;
  }
}
const St = v({
  ɵprov: v
});
const ve = v({
  ɵinj: v
});
const Lt = v({
  ngInjectableDef: v
});
const ft = v({
  ngInjectorDef: v
});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export var XFs = (() => {
  (XFs = XFs || {})[XFs.Default = 0] = "Default";
  XFs[XFs.Host = 1] = "Host";
  XFs[XFs.Self = 2] = "Self";
  XFs[XFs.SkipSelf = 4] = "SkipSelf";
  XFs[XFs.Optional = 8] = "Optional";
  return XFs;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Me;
function me(u) {
  const f = Me;
  Me = u;
  return f;
}
function it(u, f, y) {
  const N = It(u);
  if (N && N.providedIn == "root") {
    if (N.value === undefined) {
      return N.value = N.factory();
    } else {
      return N.value;
    }
  } else if (y & XFs.Optional) {
    return null;
  } else if (f !== undefined) {
    return f;
  } else {
    q(AaK(u));
    return;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ut(u) {
  return {
    toString: u
  }.toString();
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Ze = (() => {
  (Ze = Ze || {})[Ze.OnPush = 0] = "OnPush";
  Ze[Ze.Default = 1] = "Default";
  return Ze;
})();
export var ifc = (() => {
  (u = ifc ||= {})[u.Emulated = 0] = "Emulated";
  u[u.None = 2] = "None";
  u[u.ShadowDom = 3] = "ShadowDom";
  return ifc;
  var u;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const dqk = (() => typeof globalThis !== "undefined" && globalThis || typeof global !== "undefined" && global || typeof window !== "undefined" && window || typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && self)();
const Rn = {};
const In = [];
const di = v({
  ɵcmp: v
});
const Si = v({
  ɵdir: v
});
const Zi = v({
  ɵpipe: v
});
const $i = v({
  ɵmod: v
});
const Qi = v({
  ɵfac: v
});
const br = v({
  __NG_ELEMENT_ID__: v
});
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
let Ar = 0;
export function Xpm(u) {
  return Ut(() => {
    const y = u.standalone === true;
    const N = {};
    const K = {
      type: u.type,
      providersResolver: null,
      decls: u.decls,
      vars: u.vars,
      factory: null,
      template: u.template || null,
      consts: u.consts || null,
      ngContentSelectors: u.ngContentSelectors,
      hostBindings: u.hostBindings || null,
      hostVars: u.hostVars || 0,
      hostAttrs: u.hostAttrs || null,
      contentQueries: u.contentQueries || null,
      declaredInputs: N,
      inputs: null,
      outputs: null,
      exportAs: u.exportAs || null,
      onPush: u.changeDetection === Ze.OnPush,
      directiveDefs: null,
      pipeDefs: null,
      standalone: y,
      dependencies: y && u.dependencies || null,
      getStandaloneInjector: null,
      selectors: u.selectors || In,
      viewQuery: u.viewQuery || null,
      features: u.features || null,
      data: u.data || {},
      encapsulation: u.encapsulation || ifc.Emulated,
      id: "c" + Ar++,
      styles: u.styles || In,
      _: null,
      setInput: null,
      schemas: u.schemas || null,
      tView: null
    };
    const de = u.dependencies;
    const Fe = u.features;
    K.inputs = so(u.inputs, N);
    K.outputs = so(u.outputs);
    if (Fe) {
      Fe.forEach(ct => ct(K));
    }
    K.directiveDefs = de ? () => (typeof de == "function" ? de() : de).map(Br).filter(rs) : null;
    K.pipeDefs = de ? () => (typeof de == "function" ? de() : de).map(pr).filter(rs) : null;
    return K;
  });
}
export function B6R(u, f, y) {
  const N = u.ɵcmp;
  N.directiveDefs = () => (typeof f == "function" ? f() : f).map(Br);
  N.pipeDefs = () => (typeof y == "function" ? y() : y).map(pr);
}
function Br(u) {
  return Tr(u) || ns(u);
}
function rs(u) {
  return u !== null;
}
export function oAB(u) {
  return Ut(() => ({
    type: u.type,
    bootstrap: u.bootstrap || In,
    declarations: u.declarations || In,
    imports: u.imports || In,
    exports: u.exports || In,
    transitiveCompileScopes: null,
    schemas: u.schemas || null,
    id: u.id || null
  }));
}
export function kYT(u, f) {
  return Ut(() => {
    const y = oi(u, true);
    y.declarations = f.declarations || In;
    y.imports = f.imports || In;
    y.exports = f.exports || In;
  });
}
function so(u, f) {
  if (u == null) {
    return Rn;
  }
  const y = {};
  for (const N in u) {
    if (u.hasOwnProperty(N)) {
      let K = u[N];
      let de = K;
      if (Array.isArray(K)) {
        de = K[1];
        K = K[0];
      }
      y[K] = N;
      if (f) {
        f[K] = de;
      }
    }
  }
  return y;
}
export const lG2 = Xpm;
export function Yjl(u) {
  return {
    type: u.type,
    name: u.name,
    factory: null,
    pure: u.pure !== false,
    standalone: u.standalone === true,
    onDestroy: u.type.prototype.ngOnDestroy || null
  };
}
function Tr(u) {
  return u[di] || null;
}
function ns(u) {
  return u[Si] || null;
}
function pr(u) {
  return u[Zi] || null;
}
export function QP$(u) {
  const f = Tr(u) || ns(u) || pr(u);
  return f !== null && f.standalone;
}
function oi(u, f) {
  const y = u[$i] || null;
  if (!y && f === true) {
    throw new Error(`Type ${AaK(u)} does not have '\u0275mod' property.`);
  }
  return y;
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
function Ao(u) {
  return Array.isArray(u) && typeof u[1] == "object";
}
function Pa(u) {
  return Array.isArray(u) && u[1] === true;
}
function Po(u) {
  return (u.flags & 8) != 0;
}
function dl(u) {
  return (u.flags & 2) == 2;
}
function qs(u) {
  return (u.flags & 1) == 1;
}
function Fo(u) {
  return u.template !== null;
}
function ha(u) {
  return (u[2] & 256) != 0;
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
function Bt(u, f) {
  if (u.hasOwnProperty(Qi)) {
    return u[Qi];
  } else {
    return null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class WD2 {
  constructor(f, y, N) {
    this.previousValue = f;
    this.currentValue = y;
    this.firstChange = N;
  }
  isFirstChange() {
    return this.firstChange;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function TTD() {
  return Ki;
}
function Ki(u) {
  if (u.type.prototype.ngOnChanges) {
    u.setInput = Gr;
  }
  return Lr;
}
function Lr() {
  const u = Ks(this);
  const f = u?.current;
  if (f) {
    const y = u.previous;
    if (y === Rn) {
      u.previous = f;
    } else {
      for (let N in f) {
        y[N] = f[N];
      }
    }
    u.current = null;
    this.ngOnChanges(f);
  }
}
function Gr(u, f, y, N) {
  const K = Ks(u) || function Js(u, f) {
    return u[zr] = f;
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */(u, {
    previous: Rn,
    current: null
  });
  const de = K.current ||= {};
  const Fe = K.previous;
  const ct = this.declaredInputs[y];
  const At = Fe[ct];
  de[ct] = new WD2(At && At.currentValue, f, Fe === Rn);
  u[N] = f;
}
TTD.ngInherit = true;
const zr = "__ngSimpleChanges__";
function Ks(u) {
  return u[zr] || null;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Xi(u) {
  for (; Array.isArray(u);) {
    u = u[0];
  }
  return u;
}
function Jr(u, f) {
  return Xi(f[u]);
}
function Ss(u, f) {
  return Xi(f[u.index]);
}
function xo(u, f) {
  return u.data[f];
}
function Ls(u, f) {
  return u[f];
}
function sr(u, f) {
  const y = f[u];
  if (Ao(y)) {
    return y;
  } else {
    return y[0];
  }
}
function ao(u) {
  return (u[2] & 64) == 64;
}
function Rr(u, f) {
  if (f == null) {
    return null;
  } else {
    return u[f];
  }
}
function el(u) {
  u[18] = 0;
}
function Fa(u, f) {
  u[5] += f;
  let y = u;
  let N = u[3];
  for (; N !== null && (f === 1 && y[5] === 1 || f === -1 && y[5] === 0);) {
    N[5] += f;
    y = N;
    N = N[3];
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
}
const Mr = {
  lFrame: Cc(null),
  bindingsEnabled: true
};
function wn() {
  return Mr.bindingsEnabled;
}
function Ji() {
  return Mr.lFrame.lView;
}
function hi() {
  return Mr.lFrame.tView;
}
export function CHM(u) {
  Mr.lFrame.contextLView = u;
  return u[8];
}
export function KtG(u) {
  Mr.lFrame.contextLView = null;
  return u;
}
function ys() {
  let u = ht();
  for (; u !== null && u.type === 64;) {
    u = u.parent;
  }
  return u;
}
function ht() {
  return Mr.lFrame.currentTNode;
}
function He(u, f) {
  const y = Mr.lFrame;
  y.currentTNode = u;
  y.isParent = f;
}
function dn() {
  return Mr.lFrame.isParent;
}
function Yi() {
  Mr.lFrame.isParent = false;
}
function wt() {
  const u = Mr.lFrame;
  let f = u.bindingRootIndex;
  if (f === -1) {
    f = u.bindingRootIndex = u.tView.bindingStartIndex;
  }
  return f;
}
function mn() {
  return Mr.lFrame.bindingIndex;
}
function Fn() {
  return Mr.lFrame.bindingIndex++;
}
function ci(u) {
  const f = Mr.lFrame;
  const y = f.bindingIndex;
  f.bindingIndex = f.bindingIndex + u;
  return y;
}
function xi(u, f) {
  const y = Mr.lFrame;
  y.bindingIndex = y.bindingRootIndex = u;
  to(f);
}
function to(u) {
  Mr.lFrame.currentDirectiveIndex = u;
}
function Ha(u) {
  const f = Mr.lFrame.currentDirectiveIndex;
  if (f === -1) {
    return null;
  } else {
    return u[f];
  }
}
function Kl() {
  return Mr.lFrame.currentQueryIndex;
}
function Bl(u) {
  Mr.lFrame.currentQueryIndex = u;
}
function iu(u) {
  const f = u[1];
  if (f.type === 2) {
    return f.declTNode;
  } else if (f.type === 1) {
    return u[6];
  } else {
    return null;
  }
}
function Wa(u, f, y) {
  if (y & XFs.SkipSelf) {
    let K = f;
    let de = u;
    for (; !(K = K.parent, K !== null || y & XFs.Host || (K = iu(de), K === null || (de = de[15], K.type & 10))););
    if (K === null) {
      return false;
    }
    f = K;
    u = de;
  }
  const N = Mr.lFrame = bs();
  N.currentTNode = f;
  N.lView = u;
  return true;
}
function ls(u) {
  const f = bs();
  const y = u[1];
  Mr.lFrame = f;
  f.currentTNode = y.firstChild;
  f.lView = u;
  f.tView = y;
  f.contextLView = u;
  f.bindingIndex = y.bindingStartIndex;
  f.inI18n = false;
}
function bs() {
  const u = Mr.lFrame;
  const f = u === null ? null : u.child;
  if (f === null) {
    return Cc(u);
  } else {
    return f;
  }
}
function Cc(u) {
  const f = {
    currentTNode: null,
    isParent: true,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: u,
    child: null,
    inI18n: false
  };
  if (u !== null) {
    u.child = f;
  }
  return f;
}
function gc() {
  const u = Mr.lFrame;
  Mr.lFrame = u.parent;
  u.currentTNode = null;
  u.lView = null;
  return u;
}
const mt = gc;
function qt() {
  const u = gc();
  u.isParent = true;
  u.tView = null;
  u.selectedIndex = -1;
  u.contextLView = null;
  u.elementDepthCount = 0;
  u.currentDirectiveIndex = -1;
  u.currentNamespace = null;
  u.bindingRootIndex = -1;
  u.bindingIndex = -1;
  u.currentQueryIndex = 0;
}
function Sn() {
  return Mr.lFrame.selectedIndex;
}
function ki(u) {
  Mr.lFrame.selectedIndex = u;
}
function Ui() {
  const u = Mr.lFrame;
  return xo(u.tView, u.selectedIndex);
}
export function O4$() {
  Mr.lFrame.currentNamespace = "svg";
}
export function kcU() {
  (function Ts() {
    Mr.lFrame.currentNamespace = null;
  })();
}
function Zo(u, f) {
  for (let y = f.directiveStart, N = f.directiveEnd; y < N; y++) {
    const de = u.data[y].type.prototype;
    const {
      ngAfterContentInit: Fe,
      ngAfterContentChecked: ct,
      ngAfterViewInit: At,
      ngAfterViewChecked: Jt,
      ngOnDestroy: xn
    } = de;
    if (Fe) {
      (u.contentHooks ||= []).push(-y, Fe);
    }
    if (ct) {
      (u.contentHooks ||= []).push(y, ct);
      (u.contentCheckHooks ||= []).push(y, ct);
    }
    if (At) {
      (u.viewHooks ||= []).push(-y, At);
    }
    if (Jt) {
      (u.viewHooks ||= []).push(y, Jt);
      (u.viewCheckHooks ||= []).push(y, Jt);
    }
    if (xn != null) {
      (u.destroyHooks ||= []).push(y, xn);
    }
  }
}
function lo(u, f, y) {
  As(u, f, 3, y);
}
function gl(u, f, y, N) {
  if ((u[2] & 3) === y) {
    As(u, f, y, N);
  }
}
function Hs(u, f) {
  let y = u[2];
  if ((y & 3) === f) {
    y &= 2047;
    y += 1;
    u[2] = y;
  }
}
function As(u, f, y, N) {
  const de = N ?? -1;
  const Fe = f.length - 1;
  let ct = 0;
  for (let At = N !== undefined ? u[18] & 65535 : 0; At < Fe; At++) {
    if (typeof f[At + 1] == "number") {
      ct = f[At];
      if (N != null && ct >= N) {
        break;
      }
    } else {
      if (f[At] < 0) {
        u[18] += 65536;
      }
      if (ct < de || de == -1) {
        Io(u, y, f, At);
        u[18] = (u[18] & 4294901760) + At + 2;
      }
      At++;
    }
  }
}
function Io(u, f, y, N) {
  const K = y[N] < 0;
  const de = y[N + 1];
  const ct = u[K ? -y[N] : y[N]];
  if (K) {
    if (u[2] >> 11 < u[18] >> 16 && (u[2] & 3) === f) {
      u[2] += 2048;
      try {
        de.call(ct);
      } finally {}
    }
  } else {
    try {
      de.call(ct);
    } finally {}
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class hl {
  constructor(f, y, N) {
    this.factory = f;
    this.resolving = false;
    this.canSeeViewProviders = y;
    this.injectImpl = N;
  }
}
function tl(u, f, y) {
  let N = 0;
  for (; N < y.length;) {
    const K = y[N];
    if (typeof K == "number") {
      if (K !== 0) {
        break;
      }
      N++;
      const de = y[N++];
      const Fe = y[N++];
      const ct = y[N++];
      u.setAttribute(f, Fe, ct, de);
    } else {
      const de = K;
      const Fe = y[++N];
      if (ro(de)) {
        u.setProperty(f, de, Fe);
      } else {
        u.setAttribute(f, de, Fe);
      }
      N++;
    }
  }
  return N;
}
function gr(u) {
  return u === 3 || u === 4 || u === 6;
}
function ro(u) {
  return u.charCodeAt(0) === 64;
}
function Vu(u, f) {
  if (f !== null && f.length !== 0) {
    if (u === null || u.length === 0) {
      u = f.slice();
    } else {
      let y = -1;
      for (let N = 0; N < f.length; N++) {
        const K = f[N];
        if (typeof K == "number") {
          y = K;
        } else if (y !== 0) {
          Zl(u, y, K, null, y === -1 || y === 2 ? f[++N] : null);
        }
      }
    }
  }
  return u;
}
function Zl(u, f, y, N, K) {
  let de = 0;
  let Fe = u.length;
  if (f === -1) {
    Fe = -1;
  } else {
    for (; de < u.length;) {
      const ct = u[de++];
      if (typeof ct == "number") {
        if (ct === f) {
          Fe = -1;
          break;
        }
        if (ct > f) {
          Fe = de - 1;
          break;
        }
      }
    }
  }
  for (; de < u.length;) {
    const ct = u[de];
    if (typeof ct == "number") {
      break;
    }
    if (ct === y) {
      if (N === null) {
        if (K !== null) {
          u[de + 1] = K;
        }
        return;
      }
      if (N === u[de + 1]) {
        u[de + 2] = K;
        return;
      }
    }
    de++;
    if (N !== null) {
      de++;
    }
    if (K !== null) {
      de++;
    }
  }
  if (Fe !== -1) {
    u.splice(Fe, 0, f);
    de = Fe + 1;
  }
  u.splice(de++, 0, y);
  if (N !== null) {
    u.splice(de++, 0, N);
  }
  if (K !== null) {
    u.splice(de++, 0, K);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $l(u) {
  return u !== -1;
}
function Nc(u) {
  return u & 32767;
}
function td(u, f) {
  let y = function Da(u) {
    return u >> 16;
  }(u);
  let N = f;
  for (; y > 0;) {
    N = N[15];
    y--;
  }
  return N;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Bd = true;
function mu(u) {
  const f = Bd;
  Bd = u;
  return f;
}
let Ol = 0;
const Qo = {};
function ml(u, f) {
  const y = Su(u, f);
  if (y !== -1) {
    return y;
  }
  const N = f[1];
  if (N.firstCreatePass) {
    u.injectorIndex = f.length;
    $o(N.data, u);
    $o(f, null);
    $o(N.blueprint, null);
  }
  const K = mc(u, f);
  const de = u.injectorIndex;
  if ($l(K)) {
    const Fe = Nc(K);
    const ct = td(K, f);
    const At = ct[1].data;
    for (let Jt = 0; Jt < 8; Jt++) {
      f[de + Jt] = ct[Fe + Jt] | At[Fe + Jt];
    }
  }
  f[de + 8] = K;
  return de;
}
function $o(u, f) {
  u.push(0, 0, 0, 0, 0, 0, 0, 0, f);
}
function Su(u, f) {
  if (u.injectorIndex === -1 || u.parent && u.parent.injectorIndex === u.injectorIndex || f[u.injectorIndex + 8] === null) {
    return -1;
  } else {
    return u.injectorIndex;
  }
}
function mc(u, f) {
  if (u.parent && u.parent.injectorIndex !== -1) {
    return u.parent.injectorIndex;
  }
  let y = 0;
  let N = null;
  let K = f;
  for (; K !== null;) {
    N = Ll(K);
    if (N === null) {
      return -1;
    }
    y++;
    K = K[15];
    if (N.injectorIndex !== -1) {
      return N.injectorIndex | y << 16;
    }
  }
  return -1;
}
function Ps(u, f, y) {
  (function Eo(u, f, y) {
    let N;
    if (typeof y == "string") {
      N = y.charCodeAt(0) || 0;
    } else if (y.hasOwnProperty(br)) {
      N = y[br];
    }
    if (N == null) {
      N = y[br] = Ol++;
    }
    const K = N & 255;
    f.data[u + (K >> 5)] |= 1 << K;
  })(u, f, y);
}
function lc(u, f, y) {
  if (y & XFs.Optional || u !== undefined) {
    return u;
  }
  q();
}
function cc(u, f, y, N) {
  if (y & XFs.Optional && N === undefined) {
    N = null;
  }
  if ((y & (XFs.Self | XFs.Host)) == 0) {
    const K = u[9];
    const de = me(undefined);
    try {
      if (K) {
        return K.get(f, N, y & XFs.Optional);
      } else {
        return it(f, N, y & XFs.Optional);
      }
    } finally {
      me(de);
    }
  }
  return lc(N, 0, y);
}
function ir(u, f, y, N = XFs.Default, K) {
  if (u !== null) {
    if (f[2] & 1024) {
      const Fe = function id(u, f, y, N, K) {
        let de = u;
        let Fe = f;
        for (; de !== null && Fe !== null && Fe[2] & 1024 && !(Fe[2] & 256);) {
          const ct = uc(de, Fe, y, N | XFs.Self, Qo);
          if (ct !== Qo) {
            return ct;
          }
          let At = de.parent;
          if (!At) {
            const Jt = Fe[21];
            if (Jt) {
              const xn = Jt.get(y, Qo, N);
              if (xn !== Qo) {
                return xn;
              }
            }
            At = Ll(Fe);
            Fe = Fe[15];
          }
          de = At;
        }
        return K;
      }(u, f, y, N, Qo);
      if (Fe !== Qo) {
        return Fe;
      }
    }
    const de = uc(u, f, y, N, Qo);
    if (de !== Qo) {
      return de;
    }
  }
  return cc(f, y, N, K);
}
function uc(u, f, y, N, K) {
  const de = function Gl(u) {
    if (typeof u == "string") {
      return u.charCodeAt(0) || 0;
    }
    const f = u.hasOwnProperty(br) ? u[br] : undefined;
    if (typeof f == "number") {
      if (f >= 0) {
        return f & 255;
      } else {
        return Xl;
      }
    } else {
      return f;
    }
  }(y);
  if (typeof de == "function") {
    if (!Wa(f, u, N)) {
      if (N & XFs.Host) {
        return lc(K, 0, N);
      } else {
        return cc(f, y, N, K);
      }
    }
    try {
      const Fe = de(N);
      if (Fe != null || N & XFs.Optional) {
        return Fe;
      }
      q();
    } finally {
      mt();
    }
  } else if (typeof de == "number") {
    let Fe = null;
    let ct = Su(u, f);
    let At = -1;
    let Jt = N & XFs.Host ? f[16][6] : null;
    for ((ct === -1 || N & XFs.SkipSelf) && (At = ct === -1 ? mc(u, f) : f[ct + 8], At !== -1 && wd(N, false) ? (Fe = f[1], ct = Nc(At), f = td(At, f)) : ct = -1); ct !== -1;) {
      const xn = f[1];
      if (Al(de, ct, xn.data)) {
        const Yn = To(ct, f, y, Fe, N, Jt);
        if (Yn !== Qo) {
          return Yn;
        }
      }
      At = f[ct + 8];
      if (At !== -1 && wd(N, f[1].data[ct + 8] === Jt) && Al(de, ct, f)) {
        Fe = xn;
        ct = Nc(At);
        f = td(At, f);
      } else {
        ct = -1;
      }
    }
  }
  return K;
}
function To(u, f, y, N, K, de) {
  const Fe = f[1];
  const ct = Fe.data[u + 8];
  const xn = vu(ct, Fe, y, N == null ? dl(ct) && Bd : N != Fe && (ct.type & 3) != 0, K & XFs.Host && de === ct);
  if (xn !== null) {
    return rc(f, Fe, xn, ct);
  } else {
    return Qo;
  }
}
function vu(u, f, y, N, K) {
  const de = u.providerIndexes;
  const Fe = f.data;
  const ct = de & 1048575;
  const At = u.directiveStart;
  const xn = de >> 20;
  const Ai = K ? ct + xn : u.directiveEnd;
  for (let er = N ? ct : ct + xn; er < Ai; er++) {
    const Nr = Fe[er];
    if (er < At && y === Nr || er >= At && Nr.type === y) {
      return er;
    }
  }
  if (K) {
    const er = Fe[At];
    if (er && Fo(er) && er.type === y) {
      return At;
    }
  }
  return null;
}
function rc(u, f, y, N) {
  let K = u[y];
  const de = f.data;
  if (function Kc(u) {
    return u instanceof hl;
  }(K)) {
    const Fe = K;
    if (Fe.resolving) {
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
      (function X(u, f) {
        const y = f ? `. Dependency path: ${f.join(" > ")} > ${u}` : "";
        throw new vHH(-200, `Circular dependency in DI detected for ${u}${y}`);
      })(function Z(u) {
        if (typeof u == "function") {
          return u.name || u.toString();
        } else if (typeof u == "object" && u != null && typeof u.type == "function") {
          return u.type.name || u.type.toString();
        } else {
          return F(u);
        }
      }(de[y]));
    }
    const ct = mu(Fe.canSeeViewProviders);
    Fe.resolving = true;
    const At = Fe.injectImpl ? me(Fe.injectImpl) : null;
    Wa(u, N, XFs.Default);
    try {
      K = u[y] = Fe.factory(undefined, de, u, N);
      if (f.firstCreatePass && y >= N.directiveStart) {
        /**
               * @license
               * Copyright Google LLC All Rights Reserved.
               *
               * Use of this source code is governed by an MIT-style license that can be
               * found in the LICENSE file at https://angular.io/license
               */
        (function Ga(u, f, y) {
          const {
            ngOnChanges: N,
            ngOnInit: K,
            ngDoCheck: de
          } = f.type.prototype;
          if (N) {
            const Fe = Ki(f);
            (y.preOrderHooks ||= []).push(u, Fe);
            (y.preOrderCheckHooks ||= []).push(u, Fe);
          }
          if (K) {
            (y.preOrderHooks ||= []).push(0 - u, K);
          }
          if (de) {
            (y.preOrderHooks ||= []).push(u, de);
            (y.preOrderCheckHooks ||= []).push(u, de);
          }
        })(y, de[y], f);
      }
    } finally {
      if (At !== null) {
        me(At);
      }
      mu(ct);
      Fe.resolving = false;
      mt();
    }
  }
  return K;
}
function Al(u, f, y) {
  return !!(y[f + (u >> 5)] & 1 << u);
}
function wd(u, f) {
  return !(u & XFs.Self) && (!(u & XFs.Host) || !f);
}
class Xc {
  constructor(f, y) {
    this._tNode = f;
    this._lView = y;
  }
  get(f, y, N) {
    return ir(this._tNode, this._lView, f, N, y);
  }
}
function Xl() {
  return new Xc(ys(), Ji());
}
export function n5z(u) {
  return Ut(() => {
    const f = u.prototype.constructor;
    const y = f[Qi] || md(f);
    const N = Object.prototype;
    let K = Object.getPrototypeOf(u.prototype).constructor;
    for (; K && K !== N;) {
      const de = K[Qi] || md(K);
      if (de && de !== y) {
        return de;
      }
      K = Object.getPrototypeOf(K);
    }
    return de => new de();
  });
}
function md(u) {
  if (O(u)) {
    return () => {
      const f = md(E(u));
      return f && f();
    };
  } else {
    return Bt(u);
  }
}
function Ll(u) {
  const f = u[1];
  const y = f.type;
  if (y === 2) {
    return f.declTNode;
  } else if (y === 1) {
    return u[6];
  } else {
    return null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function $8M(u) {
  return function Ii(u, f) {
    if (f === "class") {
      return u.classes;
    }
    if (f === "style") {
      return u.styles;
    }
    const y = u.attrs;
    if (y) {
      const N = y.length;
      let K = 0;
      for (; K < N;) {
        const de = y[K];
        if (gr(de)) {
          break;
        }
        if (de === 0) {
          K += 2;
        } else if (typeof de == "number") {
          for (K++; K < N && typeof y[K] == "string";) {
            K++;
          }
        } else {
          if (de === f) {
            return y[K + 1];
          }
          K += 2;
        }
      }
    }
    return null;
  }(ys(), u);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Uc = "__parameters__";
function yc(u, f, y) {
  return Ut(() => {
    const N = function xl(u) {
      return function (...y) {
        if (u) {
          const N = u(...y);
          for (const K in N) {
            this[K] = N[K];
          }
        }
      };
    }(f);
    function K(...de) {
      if (this instanceof K) {
        N.apply(this, de);
        return this;
      }
      const Fe = new K(...de);
      ct.annotation = Fe;
      return ct;
      function ct(At, Jt, xn) {
        const Yn = At.hasOwnProperty(Uc) ? At[Uc] : Object.defineProperty(At, Uc, {
          value: []
        })[Uc];
        for (; Yn.length <= xn;) {
          Yn.push(null);
        }
        (Yn[xn] = Yn[xn] || []).push(Fe);
        return At;
      }
    }
    if (y) {
      K.prototype = Object.create(y.prototype);
    }
    K.prototype.ngMetadataName = u;
    K.annotationCls = K;
    return K;
  });
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class OlP {
  constructor(f, y) {
    this._desc = f;
    this.ngMetadataName = "InjectionToken";
    this.ɵprov = undefined;
    if (typeof y == "number") {
      this.__NG_ELEMENT_ID__ = y;
    } else if (y !== undefined) {
      this.ɵprov = Yz7({
        token: this,
        providedIn: y.providedIn || "root",
        factory: y.factory
      });
    }
  }
  get multi() {
    return this;
  }
  toString() {
    return `InjectionToken ${this._desc}`;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Pl(u, f) {
  if (f === undefined) {
    f = u;
  }
  for (let y = 0; y < u.length; y++) {
    let N = u[y];
    if (Array.isArray(N)) {
      if (f === u) {
        f = u.slice(0, y);
      }
      Pl(N, f);
    } else if (f !== u) {
      f.push(N);
    }
  }
  return f;
}
function ll(u, f) {
  u.forEach(y => Array.isArray(y) ? ll(y, f) : f(y));
}
function Wc(u, f, y) {
  if (f >= u.length) {
    u.push(y);
  } else {
    u.splice(f, 0, y);
  }
}
function su(u, f) {
  if (f >= u.length - 1) {
    return u.pop();
  } else {
    return u.splice(f, 1)[0];
  }
}
function Dc(u, f) {
  const y = [];
  for (let N = 0; N < u; N++) {
    y.push(f);
  }
  return y;
}
function Nn(u, f, y) {
  let N = Ri(u, f);
  if (N >= 0) {
    u[N | 1] = y;
  } else {
    N = ~N;
    (function ye(u, f, y, N) {
      let K = u.length;
      if (K == f) {
        u.push(y, N);
      } else if (K === 1) {
        u.push(N, u[0]);
        u[0] = y;
      } else {
        K--;
        u.push(u[K - 1], u[K]);
        for (; K > f;) {
          u[K] = u[K - 2];
          K--;
        }
        u[f] = y;
        u[f + 1] = N;
      }
    })(u, N, f, y);
  }
  return N;
}
function Tn(u, f) {
  const y = Ri(u, f);
  if (y >= 0) {
    return u[y | 1];
  }
}
function Ri(u, f) {
  return function Bs(u, f, y) {
    let N = 0;
    let K = u.length >> y;
    for (; K !== N;) {
      const de = N + (K - N >> 1);
      const Fe = u[de << y];
      if (f === Fe) {
        return de << y;
      }
      if (Fe > f) {
        K = de;
      } else {
        N = de + 1;
      }
    }
    return ~(K << y);
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */(u, f, 1);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oe = {};
const we = "__NG_DI_FLAG__";
const ce = "ngTempTokenPath";
const sn = /\n/gm;
const Ei = "__source";
let Hi;
function xs(u) {
  const f = Hi;
  Hi = u;
  return f;
}
function _a(u, f = XFs.Default) {
  if (Hi === undefined) {
    throw new vHH(-203, false);
  }
  if (Hi === null) {
    return it(u, undefined, f);
  } else {
    return Hi.get(u, f & XFs.Optional ? null : undefined, f);
  }
}
export function LFG(u, f = XFs.Default) {
  return (function ne() {
    return Me;
  }() || _a)(E(u), f);
}
export function f3M(u, f = XFs.Default) {
  if (typeof f != "number") {
    f = (f.optional && 8) | 0 | (f.host && 1) | (f.self && 2) | (f.skipSelf && 4);
  }
  return LFG(u, f);
}
function ou(u) {
  const f = [];
  for (let y = 0; y < u.length; y++) {
    const N = E(u[y]);
    if (Array.isArray(N)) {
      if (N.length === 0) {
        throw new vHH(900, false);
      }
      let K;
      let de = XFs.Default;
      for (let Fe = 0; Fe < N.length; Fe++) {
        const ct = N[Fe];
        const At = yl(ct);
        if (typeof At == "number") {
          if (At === -1) {
            K = ct.token;
          } else {
            de |= At;
          }
        } else {
          K = ct;
        }
      }
      f.push(LFG(K, de));
    } else {
      f.push(LFG(N));
    }
  }
  return f;
}
function Cl(u, f) {
  u[we] = f;
  u.prototype[we] = f;
  return u;
}
function yl(u) {
  return u[we];
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const tBr = Cl(yc("Inject", u => ({
  token: u
})), -1);
export const FiY = Cl(yc("Optional"), 8);
export const tp0 = Cl(yc("SkipSelf"), 4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Qt;
let J;
let Mi;
export function RDi(u) {
  Qt = u;
}
function tt(u) {
  var f;
  return ((f = function Ce() {
    if (J === undefined && (J = null, dqk.trustedTypes)) {
      try {
        J = dqk.trustedTypes.createPolicy("angular", {
          createHTML: u => u,
          createScript: u => u,
          createScriptURL: u => u
        });
      } catch {}
    }
    return J;
  }()) === null || f === undefined ? undefined : f.createHTML(u)) || u;
}
function yr() {
  if (Mi === undefined && (Mi = null, dqk.trustedTypes)) {
    try {
      Mi = dqk.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: u => u,
        createScript: u => u,
        createScriptURL: u => u
      });
    } catch {}
  }
  return Mi;
}
function $s(u) {
  var f;
  return ((f = yr()) === null || f === undefined ? undefined : f.createHTML(u)) || u;
}
function zl(u) {
  var f;
  return ((f = yr()) === null || f === undefined ? undefined : f.createScriptURL(u)) || u;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class wl {
  constructor(f) {
    this.changingThisBreaksApplicationSecurity = f;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
  }
}
class _u extends wl {
  getTypeName() {
    return "HTML";
  }
}
class Oh extends wl {
  getTypeName() {
    return "Style";
  }
}
class Wm extends wl {
  getTypeName() {
    return "Script";
  }
}
class ch extends wl {
  getTypeName() {
    return "URL";
  }
}
class yf extends wl {
  getTypeName() {
    return "ResourceURL";
  }
}
export function z3N(u) {
  if (u instanceof wl) {
    return u.changingThisBreaksApplicationSecurity;
  } else {
    return u;
  }
}
export function qzn(u, f) {
  const y = function Bf(u) {
    return u instanceof wl && u.getTypeName() || null;
  }(u);
  if (y != null && y !== f) {
    if (y === "ResourceURL" && f === "URL") {
      return true;
    }
    throw new Error(`Required a safe ${f}, got a ${y} (see https://g.co/ng/security#xss)`);
  }
  return y === f;
}
export function JVY(u) {
  return new _u(u);
}
export function L6k(u) {
  return new Oh(u);
}
export function eBb(u) {
  return new Wm(u);
}
export function LAX(u) {
  return new ch(u);
}
export function pB0(u) {
  return new yf(u);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Yg {
  constructor(f) {
    this.inertDocumentHelper = f;
  }
  getInertBodyElement(f) {
    f = "<body><remove></remove>" + f;
    try {
      const y = new window.DOMParser().parseFromString(tt(f), "text/html").body;
      if (y === null) {
        return this.inertDocumentHelper.getInertBodyElement(f);
      } else {
        y.removeChild(y.firstChild);
        return y;
      }
    } catch {
      return null;
    }
  }
}
class up {
  constructor(f) {
    this.defaultDoc = f;
    this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
    if (this.inertDocument.body == null) {
      const y = this.inertDocument.createElement("html");
      this.inertDocument.appendChild(y);
      const N = this.inertDocument.createElement("body");
      y.appendChild(N);
    }
  }
  getInertBodyElement(f) {
    const y = this.inertDocument.createElement("template");
    if ("content" in y) {
      y.innerHTML = tt(f);
      return y;
    }
    const N = this.inertDocument.createElement("body");
    N.innerHTML = tt(f);
    if (this.defaultDoc.documentMode) {
      this.stripCustomNsAttrs(N);
    }
    return N;
  }
  stripCustomNsAttrs(f) {
    const y = f.attributes;
    for (let K = y.length - 1; K > 0; K--) {
      const Fe = y.item(K).name;
      if (Fe === "xmlns:ns1" || Fe.indexOf("ns1:") === 0) {
        f.removeAttribute(Fe);
      }
    }
    let N = f.firstChild;
    for (; N;) {
      if (N.nodeType === Node.ELEMENT_NODE) {
        this.stripCustomNsAttrs(N);
      }
      N = N.nextSibling;
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
const $0 = /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
export function mCW(u) {
  if ((u = String(u)).match($0)) {
    return u;
  } else {
    return "unsafe:" + u;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zd(u) {
  const f = {};
  for (const y of u.split(",")) {
    f[y] = true;
  }
  return f;
}
function _f(...u) {
  const f = {};
  for (const y of u) {
    for (const N in y) {
      if (y.hasOwnProperty(N)) {
        f[N] = true;
      }
    }
  }
  return f;
}
const ad = Zd("area,br,col,hr,img,wbr");
const uh = Zd("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
const Ym = Zd("rp,rt");
const dp = _f(ad, _f(uh, Zd("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), _f(Ym, Zd("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), _f(Ym, uh));
const dh = Zd("background,cite,href,itemtype,longdesc,poster,src,xlink:href");
const ld = _f(dh, Zd("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Zd("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"));
const Pr = Zd("script,style,template");
class zg {
  constructor() {
    this.sanitizedSomething = false;
    this.buf = [];
  }
  sanitizeChildren(f) {
    let y = f.firstChild;
    let N = true;
    for (; y;) {
      if (y.nodeType === Node.ELEMENT_NODE) {
        N = this.startElement(y);
      } else if (y.nodeType === Node.TEXT_NODE) {
        this.chars(y.nodeValue);
      } else {
        this.sanitizedSomething = true;
      }
      if (N && y.firstChild) {
        y = y.firstChild;
      } else {
        for (; y;) {
          if (y.nodeType === Node.ELEMENT_NODE) {
            this.endElement(y);
          }
          let K = this.checkClobberedElement(y, y.nextSibling);
          if (K) {
            y = K;
            break;
          }
          y = this.checkClobberedElement(y, y.parentNode);
        }
      }
    }
    return this.buf.join("");
  }
  startElement(f) {
    const y = f.nodeName.toLowerCase();
    if (!dp.hasOwnProperty(y)) {
      this.sanitizedSomething = true;
      return !Pr.hasOwnProperty(y);
    }
    this.buf.push("<");
    this.buf.push(y);
    const N = f.attributes;
    for (let K = 0; K < N.length; K++) {
      const de = N.item(K);
      const Fe = de.name;
      const ct = Fe.toLowerCase();
      if (!ld.hasOwnProperty(ct)) {
        this.sanitizedSomething = true;
        continue;
      }
      let At = de.value;
      if (dh[ct]) {
        At = mCW(At);
      }
      this.buf.push(" ", Fe, "=\"", Kg(At), "\"");
    }
    this.buf.push(">");
    return true;
  }
  endElement(f) {
    const y = f.nodeName.toLowerCase();
    if (dp.hasOwnProperty(y) && !ad.hasOwnProperty(y)) {
      this.buf.push("</");
      this.buf.push(y);
      this.buf.push(">");
    }
  }
  chars(f) {
    this.buf.push(Kg(f));
  }
  checkClobberedElement(f, y) {
    if (y && (f.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) {
      throw new Error(`Failed to sanitize html because the element is clobbered: ${f.outerHTML}`);
    }
    return y;
  }
}
const Yy = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
const bu = /([^\#-~ |!])/g;
function Kg(u) {
  return u.replace(/&/g, "&amp;").replace(Yy, function (f) {
    return "&#" + ((f.charCodeAt(0) - 55296) * 1024 + (f.charCodeAt(1) - 56320) + 65536) + ";";
  }).replace(bu, function (f) {
    return "&#" + f.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
let Gm;
export function EiD(u, f) {
  let y = null;
  try {
    Gm = Gm || function Wg(u) {
      const f = new up(u);
      if (function u0() {
        try {
          return !!new window.DOMParser().parseFromString(tt(""), "text/html");
        } catch {
          return false;
        }
      }()) {
        return new Yg(f);
      } else {
        return f;
      }
    }(u);
    let N = f ? String(f) : "";
    y = Gm.getInertBodyElement(N);
    let K = 5;
    let de = N;
    do {
      if (K === 0) {
        throw new Error("Failed to sanitize html because the input is unstable");
      }
      K--;
      N = de;
      de = y.innerHTML;
      y = Gm.getInertBodyElement(N);
    } while (N !== de);
    return tt(new zg().sanitizeChildren(Td(y) || y));
  } finally {
    if (y) {
      const N = Td(y) || y;
      for (; N.firstChild;) {
        N.removeChild(N.firstChild);
      }
    }
  }
}
function Td(u) {
  if ("content" in u && function ef(u) {
    return u.nodeType === Node.ELEMENT_NODE && u.nodeName === "TEMPLATE";
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */(u)) {
    return u.content;
  } else {
    return null;
  }
}
export var q3G = (() => {
  (q3G = q3G || {})[q3G.NONE = 0] = "NONE";
  q3G[q3G.HTML = 1] = "HTML";
  q3G[q3G.STYLE = 2] = "STYLE";
  q3G[q3G.SCRIPT = 3] = "SCRIPT";
  q3G[q3G.URL = 4] = "URL";
  q3G[q3G.RESOURCE_URL = 5] = "RESOURCE_URL";
  return q3G;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function oJD(u) {
  const f = Md();
  if (f) {
    return $s(f.sanitize(q3G.HTML, u) || "");
  } else if (qzn(u, "HTML")) {
    return $s(z3N(u));
  } else {
    return EiD(function gi() {
      if (Qt !== undefined) {
        return Qt;
      } else if (typeof document !== "undefined") {
        return document;
      } else {
        return undefined;
      }
    }
    /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */(), F(u));
  }
}
export function LSH(u) {
  const f = Md();
  if (f) {
    return f.sanitize(q3G.URL, u) || "";
  } else if (qzn(u, "URL")) {
    return z3N(u);
  } else {
    return mCW(F(u));
  }
}
export function uOi(u) {
  const f = Md();
  if (f) {
    return zl(f.sanitize(q3G.RESOURCE_URL, u) || "");
  }
  if (qzn(u, "ResourceURL")) {
    return zl(z3N(u));
  }
  throw new vHH(904, false);
}
function Md() {
  const u = Ji();
  return u && u[12];
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const Xts = new OlP("ENVIRONMENT_INITIALIZER");
const h0 = new OlP("INJECTOR", -1);
const jm = new OlP("INJECTOR_DEF_TYPES");
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
class Qm {
  get(f, y = oe) {
    if (y === oe) {
      const N = new Error(`NullInjectorError: No provider for ${AaK(f)}!`);
      N.name = "NullInjectorError";
      throw N;
    }
    return y;
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
function gp(...u) {
  return {
    ɵproviders: mp(0, u)
  };
}
function mp(u, ...f) {
  const y = [];
  const N = new Set();
  let K;
  ll(f, de => {
    const Fe = de;
    if (Ph(Fe, y, [], N)) {
      K ||= [];
      K.push(Fe);
    }
  });
  if (K !== undefined) {
    zp(K, y);
  }
  return y;
}
function zp(u, f) {
  for (let y = 0; y < u.length; y++) {
    const {
      providers: K
    } = u[y];
    ll(K, de => {
      f.push(de);
    });
  }
}
function Ph(u, f, y, N) {
  if (!(u = E(u))) {
    return false;
  }
  let K = null;
  let de = et(u);
  const Fe = !de && Tr(u);
  if (de || Fe) {
    if (Fe && !Fe.standalone) {
      return false;
    }
    K = u;
  } else {
    const At = u.ngModule;
    de = et(At);
    if (!de) {
      return false;
    }
    K = At;
  }
  const ct = N.has(K);
  if (Fe) {
    if (ct) {
      return false;
    }
    N.add(K);
    if (Fe.dependencies) {
      const At = typeof Fe.dependencies == "function" ? Fe.dependencies() : Fe.dependencies;
      for (const Jt of At) {
        Ph(Jt, f, y, N);
      }
    }
  } else {
    if (!de) {
      return false;
    }
    {
      if (de.imports != null && !ct) {
        let Jt;
        N.add(K);
        try {
          ll(de.imports, xn => {
            if (Ph(xn, f, y, N)) {
              Jt ||= [];
              Jt.push(xn);
            }
          });
        } finally {}
        if (Jt !== undefined) {
          zp(Jt, f);
        }
      }
      if (!ct) {
        const Jt = Bt(K) || (() => new K());
        f.push({
          provide: K,
          useFactory: Jt,
          deps: In
        }, {
          provide: jm,
          useValue: K,
          multi: true
        }, {
          provide: Xts,
          useValue: () => LFG(K),
          multi: true
        });
      }
      const At = de.providers;
      if (At != null && !ct) {
        ll(At, xn => {
          f.push(xn);
        });
      }
    }
  }
  return K !== u && u.providers !== undefined;
}
const Gy = v({
  provide: String,
  useValue: v
});
function p0(u) {
  return u !== null && typeof u == "object" && Gy in u;
}
function vp(u) {
  return typeof u == "function";
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const zSh = new OlP("Set Injector scope.");
const Jm = {};
const Od = {};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let $g;
function Kp() {
  if ($g === undefined) {
    $g = new Qm();
  }
  return $g;
}
export class lqb {}
class $m extends lqb {
  constructor(f, y, N, K) {
    super();
    this.parent = y;
    this.source = N;
    this.scopes = K;
    this.records = new Map();
    this._ngOnDestroyHooks = new Set();
    this._onDestroyHooks = [];
    this._destroyed = false;
    hh(f, Fe => this.processProvider(Fe));
    this.records.set(h0, Rh(undefined, this));
    if (K.has("environment")) {
      this.records.set(lqb, Rh(undefined, this));
    }
    const de = this.records.get(zSh);
    if (de != null && typeof de.value == "string") {
      this.scopes.add(de.value);
    }
    this.injectorDefTypes = new Set(this.get(jm.multi, In, XFs.Self));
  }
  get destroyed() {
    return this._destroyed;
  }
  destroy() {
    this.assertNotDestroyed();
    this._destroyed = true;
    try {
      for (const f of this._ngOnDestroyHooks) {
        f.ngOnDestroy();
      }
      for (const f of this._onDestroyHooks) {
        f();
      }
    } finally {
      this.records.clear();
      this._ngOnDestroyHooks.clear();
      this.injectorDefTypes.clear();
      this._onDestroyHooks.length = 0;
    }
  }
  onDestroy(f) {
    this._onDestroyHooks.push(f);
  }
  runInContext(f) {
    this.assertNotDestroyed();
    const y = xs(this);
    const N = me(undefined);
    try {
      return f();
    } finally {
      xs(y);
      me(N);
    }
  }
  get(f, y = oe, N = XFs.Default) {
    this.assertNotDestroyed();
    const K = xs(this);
    const de = me(undefined);
    try {
      if (!(N & XFs.SkipSelf)) {
        let ct = this.records.get(f);
        if (ct === undefined) {
          const At = function yp(u) {
            return typeof u == "function" || typeof u == "object" && u instanceof OlP;
          }(f) && It(f);
          ct = At && this.injectableDefInScope(At) ? Rh(Xg(f), Jm) : null;
          this.records.set(f, ct);
        }
        if (ct != null) {
          return this.hydrate(f, ct);
        }
      }
      return (N & XFs.Self ? Kp() : this.parent).get(f, y = N & XFs.Optional && y === oe ? null : y);
    } catch (Fe) {
      if (Fe.name === "NullInjectorError") {
        (Fe[ce] = Fe[ce] || []).unshift(AaK(f));
        if (K) {
          throw Fe;
        }
        return function Hl(u, f, y, N) {
          const K = u[ce];
          if (f[Ei]) {
            K.unshift(f[Ei]);
          }
          u.message = function _c(u, f, y, N = null) {
            u = u && u.charAt(0) === "\n" && u.charAt(1) == "ɵ" ? u.slice(2) : u;
            let K = AaK(f);
            if (Array.isArray(f)) {
              K = f.map(AaK).join(" -> ");
            } else if (typeof f == "object") {
              let de = [];
              for (let Fe in f) {
                if (f.hasOwnProperty(Fe)) {
                  let ct = f[Fe];
                  de.push(Fe + ":" + (typeof ct == "string" ? JSON.stringify(ct) : AaK(ct)));
                }
              }
              K = `{${de.join(", ")}}`;
            }
            return `${y}${N ? "(" + N + ")" : ""}[${K}]: ${u.replace(sn, "\n  ")}`;
          }("\n" + u.message, K, y, N);
          u.ngTokenPath = K;
          u[ce] = null;
          throw u;
        }(Fe, f, "R3InjectorError", this.source);
      }
      throw Fe;
    } finally {
      me(de);
      xs(K);
    }
  }
  resolveInjectorInitializers() {
    const f = xs(this);
    const y = me(undefined);
    try {
      const N = this.get(Xts.multi, In, XFs.Self);
      for (const K of N) {
        K();
      }
    } finally {
      xs(f);
      me(y);
    }
  }
  toString() {
    const f = [];
    const y = this.records;
    for (const N of y.keys()) {
      f.push(AaK(N));
    }
    return `R3Injector[${f.join(", ")}]`;
  }
  assertNotDestroyed() {
    if (this._destroyed) {
      throw new vHH(205, false);
    }
  }
  processProvider(f) {
    let y = vp(f = E(f)) ? f : E(f && f.provide);
    const N = function m0(u) {
      if (p0(u)) {
        return Rh(undefined, u.useValue);
      } else {
        return Rh(qg(u), Jm);
      }
    }(f);
    if (vp(f) || f.multi !== true) {
      this.records.get(y);
    } else {
      let K = this.records.get(y);
      if (!K) {
        K = Rh(undefined, Jm, true);
        K.factory = () => ou(K.multi);
        this.records.set(y, K);
      }
      y = f;
      K.multi.push(f);
    }
    this.records.set(y, N);
  }
  hydrate(f, y) {
    if (y.value === Jm) {
      y.value = Od;
      y.value = y.factory();
    }
    if (typeof y.value == "object" && y.value && function qm(u) {
      return u !== null && typeof u == "object" && typeof u.ngOnDestroy == "function";
    }(y.value)) {
      this._ngOnDestroyHooks.add(y.value);
    }
    return y.value;
  }
  injectableDefInScope(f) {
    if (!f.providedIn) {
      return false;
    }
    const y = E(f.providedIn);
    if (typeof y == "string") {
      return y === "any" || this.scopes.has(y);
    } else {
      return this.injectorDefTypes.has(y);
    }
  }
}
function Xg(u) {
  const f = It(u);
  const y = f !== null ? f.factory : Bt(u);
  if (y !== null) {
    return y;
  }
  if (u instanceof OlP) {
    throw new vHH(204, false);
  }
  if (u instanceof Function) {
    return function zy(u) {
      const f = u.length;
      if (f > 0) {
        Dc(f, "?");
        throw new vHH(204, false);
      }
      const y = function Et(u) {
        const f = u && (u[St] || u[Lt]);
        if (f) {
          const y = function lt(u) {
            if (u.hasOwnProperty("name")) {
              return u.name;
            }
            const f = ("" + u).match(/^function\s*([^\s(]+)/);
            if (f === null) {
              return "";
            } else {
              return f[1];
            }
          }(u);
          console.warn(`DEPRECATED: DI is instantiating a token "${y}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${y}" class.`);
          return f;
        }
        return null;
      }(u);
      if (y !== null) {
        return () => y.factory(u);
      } else {
        return () => new u();
      }
    }(u);
  }
  throw new vHH(204, false);
}
function qg(u, f, y) {
  let N;
  if (vp(u)) {
    const K = E(u);
    return Bt(K) || Xg(K);
  }
  if (p0(u)) {
    N = () => E(u.useValue);
  } else if (function fh(u) {
    return !!u && !!u.useFactory;
  }(u)) {
    N = () => u.useFactory(...ou(u.deps || []));
  } else if (function ey(u) {
    return !!u && !!u.useExisting;
  }(u)) {
    N = () => LFG(E(u.useExisting));
  } else {
    const K = E(u && (u.useClass || u.provide));
    if (!function Xm(u) {
      return !!u.deps;
    }(u)) {
      return Bt(K) || Xg(K);
    }
    N = () => new K(...ou(u.deps));
  }
  return N;
}
function Rh(u, f, y = false) {
  return {
    factory: u,
    value: f,
    multi: y ? [] : undefined
  };
}
function em(u) {
  return !!u.ɵproviders;
}
function hh(u, f) {
  for (const y of u) {
    if (Array.isArray(y)) {
      hh(y, f);
    } else if (em(y)) {
      hh(y.ɵproviders, f);
    } else {
      f(y);
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
class ph {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class tv {
  resolveComponentFactory(f) {
    throw function v0(u) {
      const f = Error(`No component factory found for ${AaK(u)}. Did you add it to @NgModule.entryComponents?`);
      f.ngComponent = u;
      return f;
    }(f);
  }
}
export let _Vd = (() => {
  class u {}
  /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
  u.NULL = new tv();
  return u;
})();
function jp() {
  return mh(ys(), Ji());
}
function mh(u, f) {
  return new SBq(Ss(u, f));
}
export let SBq = (() => {
  class u {
    constructor(y) {
      this.nativeElement = y;
    }
  }
  u.__NG_ELEMENT_ID__ = jp;
  return u;
})();
function Jp(u) {
  if (u instanceof SBq) {
    return u.nativeElement;
  } else {
    return u;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class FYo {}
export let Qsj = (() => {
  class u {}
  u.__NG_ELEMENT_ID__ = () => function iy() {
    const u = Ji();
    const y = sr(ys().index, u);
    return (Ao(y) ? y : u)[11];
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */();
  return u;
})();
let iv = (() => {
  class u {}
  /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
  u.ɵprov = Yz7({
    token: u,
    providedIn: "root",
    factory: () => null
  });
  return u;
})();
export class GfV {
  constructor(f) {
    this.full = f;
    this.major = f.split(".")[0];
    this.minor = f.split(".")[1];
    this.patch = f.split(".").slice(2).join(".");
  }
}
const ry = new GfV("14.2.11");
const Wf = {};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lv(u) {
  return u.ngOriginalError;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class qLn {
  constructor() {
    this._console = console;
  }
  handleError(f) {
    const y = this._findOriginalError(f);
    this._console.error("ERROR", f);
    if (y) {
      this._console.error("ORIGINAL ERROR", y);
    }
  }
  _findOriginalError(f) {
    let y = f && lv(f);
    for (; y && lv(y);) {
      y = lv(y);
    }
    return y || null;
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
const cv = new Map();
let x0 = 0;
const zf = "__ngContext__";
function Ou(u, f) {
  if (Ao(f)) {
    u[zf] = f[20];
    (function vh(u) {
      cv.set(u[20], u);
    })(f);
  } else {
    u[zf] = f;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Jf7(u) {
  return u.ownerDocument.defaultView;
}
export function evT(u) {
  return u.ownerDocument;
}
export function pYS(u) {
  return u.ownerDocument.body;
}
function tf(u) {
  if (u instanceof Function) {
    return u();
  } else {
    return u;
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
export var JOm = (() => {
  (JOm = JOm || {})[JOm.Important = 1] = "Important";
  JOm[JOm.DashCase = 2] = "DashCase";
  return JOm;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gv(u, f) {
  return undefined(u, f);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yh(u) {
  const f = u[3];
  if (Pa(f)) {
    return f[3];
  } else {
    return f;
  }
}
function ig(u) {
  return lm(u[13]);
}
function am(u) {
  return lm(u[4]);
}
function lm(u) {
  for (; u !== null && !Pa(u);) {
    u = u[4];
  }
  return u;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bh(u, f, y, N, K) {
  if (N != null) {
    let de;
    let Fe = false;
    if (Pa(N)) {
      de = N;
    } else if (Ao(N)) {
      Fe = true;
      N = N[0];
    }
    const ct = Xi(N);
    if (u === 0 && y !== null) {
      if (K == null) {
        wf(f, y, ct);
      } else {
        cd(f, y, ct, K || null, true);
      }
    } else if (u === 1 && y !== null) {
      cd(f, y, ct, K || null, true);
    } else if (u === 2) {
      (function Pu(u, f, y) {
        const N = bh(u, f);
        if (N) {
          (function sg(u, f, y, N) {
            u.removeChild(f, y, N);
          })(u, N, f, y);
        }
      })(f, ct, Fe);
    } else if (u === 3) {
      f.destroyNode(ct);
    }
    if (de != null) {
      (function lg(u, f, y, N, K) {
        const de = y[7];
        if (de !== Xi(y)) {
          Bh(f, u, N, de, K);
        }
        for (let ct = 10; ct < y.length; ct++) {
          const At = y[ct];
          Hh(At[1], At, u, f, N, de);
        }
      })(f, u, de, y, K);
    }
  }
}
function vv(u, f, y) {
  return u.createElement(f, y);
}
function Zu(u, f) {
  const y = u[9];
  const N = y.indexOf(f);
  const K = f[3];
  if (f[2] & 512) {
    f[2] &= -513;
    Fa(K, -1);
  }
  y.splice(N, 1);
}
function Cf(u, f) {
  if (u.length <= 10) {
    return;
  }
  const y = 10 + f;
  const N = u[y];
  if (N) {
    const K = N[17];
    if (K !== null && K !== u) {
      Zu(K, N);
    }
    if (f > 0) {
      u[y - 1][4] = N[4];
    }
    const de = su(u, 10 + f);
    (function yv(u, f) {
      Hh(u, f, f[11], 2, null, null);
      f[0] = null;
      f[6] = null;
    })(N[1], N);
    const Fe = de[19];
    if (Fe !== null) {
      Fe.detachView(de[1]);
    }
    N[3] = null;
    N[4] = null;
    N[2] &= -65;
  }
  return N;
}
function Eh(u, f) {
  if (!(f[2] & 128)) {
    const y = f[11];
    if (y.destroyNode) {
      Hh(u, f, y, 3, null, null);
    }
    (function S0(u) {
      let f = u[13];
      if (!f) {
        return dc(u[1], u);
      }
      for (; f;) {
        let y = null;
        if (Ao(f)) {
          y = f[13];
        } else {
          const N = f[10];
          if (N) {
            y = N;
          }
        }
        if (!y) {
          for (; f && !f[4] && f !== u;) {
            if (Ao(f)) {
              dc(f[1], f);
            }
            f = f[3];
          }
          if (f === null) {
            f = u;
          }
          if (Ao(f)) {
            dc(f[1], f);
          }
          y = f && f[4];
        }
        f = y;
      }
    })(f);
  }
}
function dc(u, f) {
  if (!(f[2] & 128)) {
    f[2] &= -65;
    f[2] |= 128;
    (function Qf(u, f) {
      let y;
      if (u != null && (y = u.destroyHooks) != null) {
        for (let N = 0; N < y.length; N += 2) {
          const K = f[y[N]];
          if (!(K instanceof hl)) {
            const de = y[N + 1];
            if (Array.isArray(de)) {
              for (let Fe = 0; Fe < de.length; Fe += 2) {
                const ct = K[de[Fe]];
                const At = de[Fe + 1];
                try {
                  At.call(ct);
                } finally {}
              }
            } else {
              try {
                de.call(K);
              } finally {}
            }
          }
        }
      }
    })(u, f);
    (function _v(u, f) {
      const y = u.cleanup;
      const N = f[7];
      let K = -1;
      if (y !== null) {
        for (let de = 0; de < y.length - 1; de += 2) {
          if (typeof y[de] == "string") {
            const Fe = y[de + 1];
            const ct = typeof Fe == "function" ? Fe(f) : Xi(f[Fe]);
            const At = N[K = y[de + 2]];
            const Jt = y[de + 3];
            if (typeof Jt == "boolean") {
              ct.removeEventListener(y[de], At, Jt);
            } else if (Jt >= 0) {
              N[K = Jt]();
            } else {
              N[K = -Jt].unsubscribe();
            }
            de += 2;
          } else {
            const Fe = N[K = y[de + 1]];
            y[de].call(Fe);
          }
        }
      }
      if (N !== null) {
        for (let de = K + 1; de < N.length; de++) {
          (0, N[de])();
        }
        f[7] = null;
      }
    })(u, f);
    if (f[1].type === 1) {
      f[11].destroy();
    }
    const y = f[17];
    if (y !== null && Pa(f[3])) {
      if (y !== f[3]) {
        Zu(y, f);
      }
      const N = f[19];
      if (N !== null) {
        N.detachView(u);
      }
    }
    (function Gf(u) {
      cv.delete(u[20]);
    }
    /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */)(f);
  }
}
function Ec(u, f, y) {
  return function Rd(u, f, y) {
    let N = f;
    for (; N !== null && N.type & 40;) {
      N = (f = N).parent;
    }
    if (N === null) {
      return y[0];
    }
    if (N.flags & 2) {
      const K = u.data[N.directiveStart].encapsulation;
      if (K === ifc.None || K === ifc.Emulated) {
        return null;
      }
    }
    return Ss(N, y);
  }(u, f.parent, y);
}
function cd(u, f, y, N, K) {
  u.insertBefore(f, y, N, K);
}
function wf(u, f, y) {
  u.appendChild(f, y);
}
function Sf(u, f, y, N, K) {
  if (N !== null) {
    cd(u, f, y, N, K);
  } else {
    wf(u, f, y);
  }
}
function bh(u, f) {
  return u.parentNode(f);
}
function Jf(u, f, y) {
  return Ev(u, f, y);
}
let Ev = function zd(u, f, y) {
  if (u.type & 40) {
    return Ss(u, y);
  } else {
    return null;
  }
};
function og(u, f, y, N) {
  const K = Ec(u, N, f);
  const de = f[11];
  const ct = Jf(N.parent || f[6], N, f);
  if (K != null) {
    if (Array.isArray(y)) {
      for (let At = 0; At < y.length; At++) {
        Sf(de, K, y[At], ct, false);
      }
    } else {
      Sf(de, K, y, ct, false);
    }
  }
}
function fm(u, f) {
  if (f !== null) {
    const y = f.type;
    if (y & 3) {
      return Ss(f, u);
    }
    if (y & 4) {
      return $f(-1, u[f.index]);
    }
    if (y & 8) {
      const N = f.child;
      if (N !== null) {
        return fm(u, N);
      }
      {
        const K = u[f.index];
        if (Pa(K)) {
          return $f(-1, K);
        } else {
          return Xi(K);
        }
      }
    }
    if (y & 32) {
      return gv(f, u)() || Xi(u[f.index]);
    }
    {
      const N = bv(u, f);
      if (N !== null) {
        if (Array.isArray(N)) {
          return N[0];
        } else {
          return fm(yh(u[16]), N);
        }
      } else {
        return fm(u, f.next);
      }
    }
  }
  return null;
}
function bv(u, f) {
  if (f !== null) {
    return u[16][6].projection[f.projection];
  } else {
    return null;
  }
}
function $f(u, f) {
  const y = 10 + u + 1;
  if (y < f.length) {
    const N = f[y];
    const K = N[1].firstChild;
    if (K !== null) {
      return fm(N, K);
    }
  }
  return f[7];
}
function ag(u, f, y, N, K, de, Fe) {
  for (; y != null;) {
    const ct = N[y.index];
    const At = y.type;
    if (Fe && f === 0) {
      if (ct) {
        Ou(Xi(ct), N);
      }
      y.flags |= 4;
    }
    if ((y.flags & 64) != 64) {
      if (At & 8) {
        ag(u, f, y.child, N, K, de, false);
        Bh(f, u, K, ct, de);
      } else if (At & 32) {
        const Jt = gv(y, N);
        let xn;
        for (; xn = Jt();) {
          Bh(f, u, K, xn, de);
        }
        Bh(f, u, K, ct, de);
      } else if (At & 16) {
        Wh(u, f, N, y, K, de);
      } else {
        Bh(f, u, K, ct, de);
      }
    }
    y = Fe ? y.projectionNext : y.next;
  }
}
function Hh(u, f, y, N, K, de) {
  ag(y, N, u.firstChild, f, K, de, false);
}
function Wh(u, f, y, N, K, de) {
  const Fe = y[16];
  const At = Fe[6].projection[N.projection];
  if (Array.isArray(At)) {
    for (let Jt = 0; Jt < At.length; Jt++) {
      Bh(f, u, K, At[Jt], de);
    }
  } else {
    ag(u, f, At, Fe[3], K, de, true);
  }
}
function cg(u, f, y) {
  u.setAttribute(f, "style", y);
}
function ug(u, f, y) {
  if (y === "") {
    u.removeAttribute(f, "class");
  } else {
    u.setAttribute(f, "class", y);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pm(u, f, y) {
  let N = u.length;
  for (;;) {
    const K = u.indexOf(f, y);
    if (K === -1) {
      return K;
    }
    if (K === 0 || u.charCodeAt(K - 1) <= 32) {
      const de = f.length;
      if (K + de === N || u.charCodeAt(K + de) <= 32) {
        return K;
      }
    }
    y = K + 1;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qy = "ng-template";
function fy(u, f, y) {
  let N = 0;
  for (; N < u.length;) {
    let K = u[N++];
    if (y && K === "class") {
      K = u[N];
      if (pm(K.toLowerCase(), f, 0) !== -1) {
        return true;
      }
    } else if (K === 1) {
      for (; N < u.length && typeof (K = u[N++]) == "string";) {
        if (K.toLowerCase() === f) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
}
function Yh(u) {
  return u.type === 4 && u.value !== Qy;
}
function hy(u, f, y) {
  return f === (u.type !== 4 || y ? u.value : Qy);
}
function mm(u, f, y) {
  let N = 4;
  const K = u.attrs || [];
  const de = function Cv(u) {
    for (let f = 0; f < u.length; f++) {
      if (gr(u[f])) {
        return f;
      }
    }
    return u.length;
  }(K);
  let Fe = false;
  for (let ct = 0; ct < f.length; ct++) {
    const At = f[ct];
    if (typeof At != "number") {
      if (!Fe) {
        if (N & 4) {
          N = N & 1 | 2;
          if (At !== "" && !hy(u, At, y) || At === "" && f.length === 1) {
            if (_d(N)) {
              return false;
            }
            Fe = true;
          }
        } else {
          const Jt = N & 8 ? At : f[++ct];
          if (N & 8 && u.attrs !== null) {
            if (!fy(u.attrs, Jt, y)) {
              if (_d(N)) {
                return false;
              }
              Fe = true;
            }
            continue;
          }
          const Yn = Av(N & 8 ? "class" : At, K, Yh(u), y);
          if (Yn === -1) {
            if (_d(N)) {
              return false;
            }
            Fe = true;
            continue;
          }
          if (Jt !== "") {
            let Ai;
            Ai = Yn > de ? "" : K[Yn + 1].toLowerCase();
            const er = N & 8 ? Ai : null;
            if (er && pm(er, Jt, 0) !== -1 || N & 2 && Jt !== Ai) {
              if (_d(N)) {
                return false;
              }
              Fe = true;
            }
          }
        }
      }
    } else {
      if (!Fe && !_d(N) && !_d(At)) {
        return false;
      }
      if (Fe && _d(At)) {
        continue;
      }
      Fe = false;
      N = At | N & 1;
    }
  }
  return _d(N) || Fe;
}
function _d(u) {
  return (u & 1) == 0;
}
function Av(u, f, y, N) {
  if (f === null) {
    return -1;
  }
  let K = 0;
  if (N || !y) {
    let de = false;
    for (; K < f.length;) {
      const Fe = f[K];
      if (Fe === u) {
        return K;
      }
      if (Fe === 3 || Fe === 6) {
        de = true;
      } else {
        if (Fe === 1 || Fe === 2) {
          let ct = f[++K];
          for (; typeof ct == "string";) {
            ct = f[++K];
          }
          continue;
        }
        if (Fe === 4) {
          break;
        }
        if (Fe === 0) {
          K += 4;
          continue;
        }
      }
      K += de ? 1 : 2;
    }
    return -1;
  }
  return function wv(u, f) {
    let y = u.indexOf(4);
    if (y > -1) {
      for (y++; y < u.length;) {
        const N = u[y];
        if (typeof N == "number") {
          return -1;
        }
        if (N === f) {
          return y;
        }
        y++;
      }
    }
    return -1;
  }(f, u);
}
function xv(u, f, y = false) {
  for (let N = 0; N < f.length; N++) {
    if (mm(u, f[N], y)) {
      return true;
    }
  }
  return false;
}
function dg(u, f) {
  e: for (let y = 0; y < f.length; y++) {
    const N = f[y];
    if (u.length === N.length) {
      for (let K = 0; K < u.length; K++) {
        if (u[K] !== N[K]) {
          continue e;
        }
      }
      return true;
    }
  }
  return false;
}
function Sv(u, f) {
  if (u) {
    return ":not(" + f.trim() + ")";
  } else {
    return f;
  }
}
function py(u) {
  let f = u[0];
  let y = 1;
  let N = 2;
  let K = "";
  let de = false;
  for (; y < u.length;) {
    let Fe = u[y];
    if (typeof Fe == "string") {
      if (N & 2) {
        const ct = u[++y];
        K += "[" + Fe + (ct.length > 0 ? "=\"" + ct + "\"" : "") + "]";
      } else if (N & 8) {
        K += "." + Fe;
      } else if (N & 4) {
        K += " " + Fe;
      }
    } else {
      if (K !== "" && !_d(Fe)) {
        f += Sv(de, K);
        K = "";
      }
      N = Fe;
      de = de || !_d(N);
    }
    y++;
  }
  if (K !== "") {
    f += Sv(de, K);
  }
  return f;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ya = {};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function xp6(u) {
  Mf(hi(), Ji(), Sn() + u, false);
}
function Mf(u, f, y, N) {
  if (!N) {
    if ((f[2] & 3) == 3) {
      const de = u.preOrderCheckHooks;
      if (de !== null) {
        lo(f, de, y);
      }
    } else {
      const de = u.preOrderHooks;
      if (de !== null) {
        gl(f, de, 0, y);
      }
    }
  }
  ki(y);
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
function Ap(u, f = null, y = null, N) {
  const K = Gh(u, f, y, N);
  K.resolveInjectorInitializers();
  return K;
}
function Gh(u, f = null, y = null, N, K = new Set()) {
  const de = [y || In, gp(u)];
  N = N || (typeof u == "object" ? undefined : AaK(u));
  return new $m(de, f || Kp(), N || null, K);
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
}
export let zs3 = (() => {
  class u {
    static create(y, N) {
      if (Array.isArray(y)) {
        return Ap({
          name: ""
        }, N, y, "");
      }
      {
        const de = y.name ?? "";
        return Ap({
          name: de
        }, y.parent, y.providers, de);
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
  u.THROW_IF_NOT_FOUND = oe;
  u.NULL = new Qm();
  u.ɵprov = Yz7({
    token: u,
    providedIn: "any",
    factory: () => LFG(h0)
  });
  u.__NG_ELEMENT_ID__ = -1;
  return u;
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
export function Y36(u, f = XFs.Default) {
  const y = Ji();
  if (y === null) {
    return LFG(u, f);
  } else {
    return ir(ys(), y, E(u), f);
  }
}
export function $Z() {
  throw new Error("invalid");
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
function Ch(u, f) {
  return u << 17 | f << 2;
}
function Kd(u) {
  return u >> 17 & 32767;
}
function Rf(u) {
  return u | 2;
}
function eh(u) {
  return (u & 131068) >> 2;
}
function vg(u, f) {
  return u & -131069 | f << 2;
}
function wh(u) {
  return u | 1;
}
function bg(u, f) {
  const y = u.contentQueries;
  if (y !== null) {
    for (let N = 0; N < y.length; N += 2) {
      const K = y[N];
      const de = y[N + 1];
      if (de !== -1) {
        const Fe = u.data[de];
        Bl(K);
        Fe.contentQueries(2, f[de], de);
      }
    }
  }
}
function ia(u, f, y, N, K, de, Fe, ct, At, Jt, xn) {
  const Yn = f.blueprint.slice();
  Yn[0] = K;
  Yn[2] = N | 76;
  if (xn !== null || u && u[2] & 1024) {
    Yn[2] |= 1024;
  }
  el(Yn);
  Yn[3] = Yn[15] = u;
  Yn[8] = y;
  Yn[10] = Fe || u && u[10];
  Yn[11] = ct || u && u[11];
  Yn[12] = At || u && u[12] || null;
  Yn[9] = Jt || u && u[9] || null;
  Yn[6] = de;
  Yn[20] = function uv() {
    return x0++;
  }();
  Yn[21] = xn;
  Yn[16] = f.type == 2 ? u[16] : Yn;
  return Yn;
}
function il(u, f, y, N, K) {
  let de = u.data[f];
  if (de === null) {
    de = function Oc(u, f, y, N, K) {
      const de = ht();
      const Fe = dn();
      const At = u.data[f] = function I0(u, f, y, N, K, de) {
        return {
          type: y,
          index: N,
          insertBeforeIndex: null,
          injectorIndex: f ? f.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          value: K,
          attrs: de,
          mergedAttrs: null,
          localNames: null,
          initialInputs: undefined,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: f,
          projection: null,
          styles: null,
          stylesWithoutHost: null,
          residualStyles: undefined,
          classes: null,
          classesWithoutHost: null,
          residualClasses: undefined,
          classBindings: 0,
          styleBindings: 0
        };
      }(0, Fe ? de : de && de.parent, y, f, N, K);
      if (u.firstChild === null) {
        u.firstChild = At;
      }
      if (de !== null) {
        if (Fe) {
          if (de.child == null && At.parent !== null) {
            de.child = At;
          }
        } else if (de.next === null) {
          de.next = At;
        }
      }
      return At;
    }(u, f, y, N, K);
    if (function pi() {
      return Mr.lFrame.inI18n;
    }()) {
      de.flags |= 64;
    }
  } else if (de.type & 64) {
    de.type = y;
    de.value = N;
    de.attrs = K;
    const Fe = function dt() {
      const u = Mr.lFrame;
      const f = u.currentTNode;
      if (u.isParent) {
        return f;
      } else {
        return f.parent;
      }
    }();
    de.injectorIndex = Fe === null ? -1 : Fe.injectorIndex;
  }
  He(de, true);
  return de;
}
function ud(u, f, y, N) {
  if (y === 0) {
    return -1;
  }
  const K = f.length;
  for (let de = 0; de < y; de++) {
    f.push(N);
    u.blueprint.push(N);
    u.data.push(null);
  }
  return K;
}
function zu(u, f, y) {
  ls(f);
  try {
    const N = u.viewQuery;
    if (N !== null) {
      U0(1, N, y);
    }
    const K = u.template;
    if (K !== null) {
      Pc(u, f, K, 1, y);
    }
    u.firstCreatePass &&= false;
    if (u.staticContentQueries) {
      bg(u, f);
    }
    if (u.staticViewQueries) {
      U0(2, u.viewQuery, y);
    }
    const de = u.components;
    if (de !== null) {
      (function mo(u, f) {
        for (let y = 0; y < f.length; y++) {
          N0(u, f[y]);
        }
      })(f, de);
    }
  } catch (N) {
    if (u.firstCreatePass) {
      u.incompleteFirstPass = true;
      u.firstCreatePass = false;
    }
    throw N;
  } finally {
    f[2] &= -5;
    qt();
  }
}
function df(u, f, y, N) {
  const K = f[2];
  if ((K & 128) != 128) {
    ls(f);
    try {
      el(f);
      (function zn(u) {
        return Mr.lFrame.bindingIndex = u;
      })(u.bindingStartIndex);
      if (y !== null) {
        Pc(u, f, y, 2, N);
      }
      const Fe = (K & 3) == 3;
      if (Fe) {
        const Jt = u.preOrderCheckHooks;
        if (Jt !== null) {
          lo(f, Jt, null);
        }
      } else {
        const Jt = u.preOrderHooks;
        if (Jt !== null) {
          gl(f, Jt, 0, null);
        }
        Hs(f, 0);
      }
      (function Bv(u) {
        for (let f = ig(u); f !== null; f = am(f)) {
          if (!f[2]) {
            continue;
          }
          const y = f[9];
          for (let N = 0; N < y.length; N++) {
            const K = y[N];
            const de = K[3];
            if ((K[2] & 512) == 0) {
              Fa(de, 1);
            }
            K[2] |= 512;
          }
        }
      })(f);
      (function Sg(u) {
        for (let f = ig(u); f !== null; f = am(f)) {
          for (let y = 10; y < f.length; y++) {
            const N = f[y];
            const K = N[1];
            if (ao(N)) {
              df(K, N, K.template, N[8]);
            }
          }
        }
      })(f);
      if (u.contentQueries !== null) {
        bg(u, f);
      }
      if (Fe) {
        const Jt = u.contentCheckHooks;
        if (Jt !== null) {
          lo(f, Jt);
        }
      } else {
        const Jt = u.contentHooks;
        if (Jt !== null) {
          gl(f, Jt, 1);
        }
        Hs(f, 1);
      }
      /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
      (function Xh(u, f) {
        const y = u.hostBindingOpCodes;
        if (y !== null) {
          try {
            for (let N = 0; N < y.length; N++) {
              const K = y[N];
              if (K < 0) {
                ki(~K);
              } else {
                const de = K;
                const Fe = y[++N];
                const ct = y[++N];
                xi(Fe, de);
                ct(2, f[de]);
              }
            }
          } finally {
            ki(-1);
          }
        }
      })(u, f);
      const ct = u.components;
      if (ct !== null) {
        (function Oo(u, f) {
          for (let y = 0; y < f.length; y++) {
            w_(u, f[y]);
          }
        })(f, ct);
      }
      const At = u.viewQuery;
      if (At !== null) {
        U0(2, At, N);
      }
      if (Fe) {
        const Jt = u.viewCheckHooks;
        if (Jt !== null) {
          lo(f, Jt);
        }
      } else {
        const Jt = u.viewHooks;
        if (Jt !== null) {
          gl(f, Jt, 2);
        }
        Hs(f, 2);
      }
      if (u.firstUpdatePass === true) {
        u.firstUpdatePass = false;
      }
      f[2] &= -41;
      if (f[2] & 512) {
        f[2] &= -513;
        Fa(f[3], -1);
      }
    } finally {
      qt();
    }
  }
}
function Pc(u, f, y, N, K) {
  const de = Sn();
  const Fe = N & 2;
  try {
    ki(-1);
    if (Fe && f.length > 22) {
      Mf(u, f, 22, false);
    }
    y(N, K);
  } finally {
    ki(de);
  }
}
function Nv(u, f, y) {
  if (Po(f)) {
    const K = f.directiveEnd;
    for (let de = f.directiveStart; de < K; de++) {
      const Fe = u.data[de];
      if (Fe.contentQueries) {
        Fe.contentQueries(1, y[de], de);
      }
    }
  }
}
function Ff(u, f, y) {
  if (!!wn()) {
    (function F0(u, f, y, N) {
      const K = y.directiveStart;
      const de = y.directiveEnd;
      if (!u.firstCreatePass) {
        ml(y, f);
      }
      Ou(N, f);
      const Fe = y.initialInputs;
      for (let ct = K; ct < de; ct++) {
        const At = u.data[ct];
        const Jt = Fo(At);
        if (Jt) {
          wg(f, y, At);
        }
        const xn = rc(f, u, ct, y);
        Ou(xn, f);
        if (Fe !== null) {
          n_(0, ct - K, xn, At, 0, Fe);
        }
        if (Jt) {
          sr(y.index, f)[8] = xn;
        }
      }
    })(u, f, y, Ss(y, f));
    if ((y.flags & 128) == 128) {
      (function Xy(u, f, y) {
        const N = y.directiveStart;
        const K = y.directiveEnd;
        const de = y.index;
        const Fe = function Bo() {
          return Mr.lFrame.currentDirectiveIndex;
        }();
        try {
          ki(de);
          for (let ct = N; ct < K; ct++) {
            const At = u.data[ct];
            const Jt = f[ct];
            to(ct);
            if (At.hostBindings !== null || At.hostVars !== 0 || At.hostAttrs !== null) {
              k0(At, Jt);
            }
          }
        } finally {
          ki(-1);
          to(Fe);
        }
      })(u, f, y);
    }
  }
}
function du(u, f, y = Ss) {
  const N = f.localNames;
  if (N !== null) {
    let K = f.index + 1;
    for (let de = 0; de < N.length; de += 2) {
      const Fe = N[de + 1];
      const ct = Fe === -1 ? y(f, u) : u[Fe];
      u[K++] = ct;
    }
  }
}
function Sh(u) {
  const f = u.tView;
  if (f === null || f.incompleteFirstPass) {
    return u.tView = Fu(1, null, u.template, u.decls, u.vars, u.directiveDefs, u.pipeDefs, u.viewQuery, u.schemas, u.consts);
  } else {
    return f;
  }
}
function Fu(u, f, y, N, K, de, Fe, ct, At, Jt) {
  const xn = 22 + N;
  const Yn = xn + K;
  const Ai = function Tm(u, f) {
    const y = [];
    for (let N = 0; N < f; N++) {
      y.push(N < u ? null : Ya);
    }
    return y;
  }(xn, Yn);
  const er = typeof Jt == "function" ? Jt() : Jt;
  return Ai[1] = {
    type: u,
    blueprint: Ai,
    template: y,
    queries: null,
    viewQuery: ct,
    declTNode: f,
    data: Ai.slice().fill(null, xn),
    bindingStartIndex: xn,
    expandoStartIndex: Yn,
    hostBindingOpCodes: null,
    firstCreatePass: true,
    firstUpdatePass: true,
    staticViewQueries: false,
    staticContentQueries: false,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof de == "function" ? de() : de,
    pipeRegistry: typeof Fe == "function" ? Fe() : Fe,
    firstChild: null,
    schemas: At,
    consts: er,
    incompleteFirstPass: false
  };
}
function Mp(u, f, y, N) {
  const K = Sy(f);
  if (y === null) {
    K.push(N);
  } else {
    K.push(y);
    if (u.firstCreatePass) {
      s_(u).push(N, K.length - 1);
    }
  }
}
function Mm(u, f, y) {
  for (let N in u) {
    if (u.hasOwnProperty(N)) {
      const K = u[N];
      if ((y = y === null ? {} : y).hasOwnProperty(N)) {
        y[N].push(f, K);
      } else {
        y[N] = [f, K];
      }
    }
  }
  return y;
}
function Jy(u, f) {
  const N = f.directiveEnd;
  const K = u.data;
  const de = f.attrs;
  const Fe = [];
  let ct = null;
  let At = null;
  for (let Jt = f.directiveStart; Jt < N; Jt++) {
    const xn = K[Jt];
    const Yn = xn.inputs;
    const Ai = de === null || Yh(f) ? null : C_(Yn, de);
    Fe.push(Ai);
    ct = Mm(Yn, Jt, ct);
    At = Mm(xn.outputs, Jt, At);
  }
  if (ct !== null) {
    if (ct.hasOwnProperty("class")) {
      f.flags |= 16;
    }
    if (ct.hasOwnProperty("style")) {
      f.flags |= 32;
    }
  }
  f.initialInputs = Fe;
  f.inputs = ct;
  f.outputs = At;
}
function ku(u, f, y, N, K, de, Fe, ct) {
  const At = Ss(f, y);
  let xn;
  let Jt = f.inputs;
  if (!ct && Jt != null && (xn = Jt[N])) {
    Pm(u, y, xn, N, K);
    if (dl(f)) {
      Op(y, f.index);
    }
  } else if (f.type & 3) {
    N = function $y(u) {
      if (u === "class") {
        return "className";
      } else if (u === "for") {
        return "htmlFor";
      } else if (u === "formaction") {
        return "formAction";
      } else if (u === "innerHtml") {
        return "innerHTML";
      } else if (u === "readonly") {
        return "readOnly";
      } else if (u === "tabindex") {
        return "tabIndex";
      } else {
        return u;
      }
    }(N);
    K = Fe != null ? Fe(K, f.value || "", N) : K;
    de.setProperty(At, N, K);
  }
}
function Op(u, f) {
  const y = sr(f, u);
  if (!(y[2] & 16)) {
    y[2] |= 32;
  }
}
function Uv(u, f, y, N) {
  let K = false;
  if (wn()) {
    const de = function qy(u, f, y) {
      const N = u.directiveRegistry;
      let K = null;
      if (N) {
        for (let de = 0; de < N.length; de++) {
          const Fe = N[de];
          if (xv(y, Fe.selectors, false)) {
            K ||= [];
            Ps(ml(y, f), u, Fe.type);
            if (Fo(Fe)) {
              xg(u, y);
              K.unshift(Fe);
            } else {
              K.push(Fe);
            }
          }
        }
      }
      return K;
    }(u, f, y);
    const Fe = N === null ? null : {
      "": -1
    };
    if (de !== null) {
      K = true;
      e_(y, u.data.length, de.length);
      for (let xn = 0; xn < de.length; xn++) {
        const Yn = de[xn];
        if (Yn.providersResolver) {
          Yn.providersResolver(Yn);
        }
      }
      let ct = false;
      let At = false;
      let Jt = ud(u, f, de.length, null);
      for (let xn = 0; xn < de.length; xn++) {
        const Yn = de[xn];
        y.mergedAttrs = Vu(y.mergedAttrs, Yn.hostAttrs);
        t_(u, y, f, Jt, Yn);
        Cg(Jt, Yn, Fe);
        if (Yn.contentQueries !== null) {
          y.flags |= 8;
        }
        if (Yn.hostBindings !== null || Yn.hostAttrs !== null || Yn.hostVars !== 0) {
          y.flags |= 128;
        }
        const Ai = Yn.type.prototype;
        if (!ct && (Ai.ngOnChanges || Ai.ngOnInit || Ai.ngDoCheck)) {
          (u.preOrderHooks ||= []).push(y.index);
          ct = true;
        }
        if (!At && (Ai.ngOnChanges || Ai.ngDoCheck)) {
          (u.preOrderCheckHooks ||= []).push(y.index);
          At = true;
        }
        Jt++;
      }
      Jy(u, y);
    }
    if (Fe) {
      (function xy(u, f, y) {
        if (f) {
          const N = u.localNames = [];
          for (let K = 0; K < f.length; K += 2) {
            const de = y[f[K + 1]];
            if (de == null) {
              throw new vHH(-301, false);
            }
            N.push(f[K], de);
          }
        }
      })(y, N, Fe);
    }
  }
  y.mergedAttrs = Vu(y.mergedAttrs, y.attrs);
  return K;
}
function by(u, f, y, N, K, de) {
  const Fe = de.hostBindings;
  if (Fe) {
    let ct = u.hostBindingOpCodes;
    if (ct === null) {
      ct = u.hostBindingOpCodes = [];
    }
    const At = ~f.index;
    if (function Ay(u) {
      let f = u.length;
      for (; f > 0;) {
        const y = u[--f];
        if (typeof y == "number" && y < 0) {
          return y;
        }
      }
      return 0;
    }(ct) != At) {
      ct.push(At);
    }
    ct.push(N, K, Fe);
  }
}
function k0(u, f) {
  if (u.hostBindings !== null) {
    u.hostBindings(1, f);
  }
}
function xg(u, f) {
  f.flags |= 2;
  (u.components ||= []).push(f.index);
}
function Cg(u, f, y) {
  if (y) {
    if (f.exportAs) {
      for (let N = 0; N < f.exportAs.length; N++) {
        y[f.exportAs[N]] = u;
      }
    }
    if (Fo(f)) {
      y[""] = u;
    }
  }
}
function e_(u, f, y) {
  u.flags |= 1;
  u.directiveStart = f;
  u.directiveEnd = f + y;
  u.providerIndexes = f;
}
function t_(u, f, y, N, K) {
  u.data[N] = K;
  const de = K.factory ||= Bt(K.type);
  const Fe = new hl(de, Fo(K), Y36);
  u.blueprint[N] = Fe;
  y[N] = Fe;
  by(u, f, 0, N, ud(u, y, K.hostVars, Ya), K);
}
function wg(u, f, y) {
  const N = Ss(f, u);
  const K = Sh(y);
  const de = u[10];
  const Fe = Om(u, ia(u, K, null, y.onPush ? 32 : 16, N, f, de, de.createRenderer(N, y), null, null, null));
  u[f.index] = Fe;
}
function Dh(u, f, y, N, K, de) {
  const Fe = Ss(u, f);
  (function L0(u, f, y, N, K, de, Fe) {
    if (de == null) {
      u.removeAttribute(f, K, y);
    } else {
      const ct = Fe == null ? F(de) : Fe(de, N || "", K);
      u.setAttribute(f, K, ct, y);
    }
  })(f[11], Fe, de, u.value, y, N, K);
}
function n_(u, f, y, N, K, de) {
  const Fe = de[f];
  if (Fe !== null) {
    const ct = N.setInput;
    for (let At = 0; At < Fe.length;) {
      const Jt = Fe[At++];
      const xn = Fe[At++];
      const Yn = Fe[At++];
      if (ct !== null) {
        N.setInput(y, Yn, Jt, xn);
      } else {
        y[xn] = Yn;
      }
    }
  }
}
function C_(u, f) {
  let y = null;
  let N = 0;
  for (; N < f.length;) {
    const K = f[N];
    if (K !== 0) {
      if (K !== 5) {
        if (typeof K == "number") {
          break;
        }
        if (u.hasOwnProperty(K)) {
          if (y === null) {
            y = [];
          }
          y.push(K, u[K], f[N + 1]);
        }
        N += 2;
      } else {
        N += 2;
      }
    } else {
      N += 4;
    }
  }
  return y;
}
function Cy(u, f, y, N) {
  return new Array(u, true, false, f, null, 0, N, y, null, null);
}
function w_(u, f) {
  const y = sr(f, u);
  if (ao(y)) {
    const N = y[1];
    if (y[2] & 48) {
      df(N, y, N.template, y[8]);
    } else if (y[5] > 0) {
      wy(y);
    }
  }
}
function wy(u) {
  for (let N = ig(u); N !== null; N = am(N)) {
    for (let K = 10; K < N.length; K++) {
      const de = N[K];
      if (ao(de)) {
        if (de[2] & 512) {
          const Fe = de[1];
          df(Fe, de, Fe.template, de[8]);
        } else if (de[5] > 0) {
          wy(de);
        }
      }
    }
  }
  const y = u[1].components;
  if (y !== null) {
    for (let N = 0; N < y.length; N++) {
      const K = sr(y[N], u);
      if (ao(K) && K[5] > 0) {
        wy(K);
      }
    }
  }
}
function N0(u, f) {
  const y = sr(f, u);
  const N = y[1];
  (function r_(u, f) {
    for (let y = f.length; y < u.blueprint.length; y++) {
      f.push(u.blueprint[y]);
    }
  })(N, y);
  zu(N, y, y[8]);
}
function Om(u, f) {
  if (u[13]) {
    u[14][4] = f;
  } else {
    u[13] = f;
  }
  u[14] = f;
  return f;
}
function eu(u) {
  for (; u;) {
    u[2] |= 32;
    const f = yh(u);
    if (ha(u) && !f) {
      return u;
    }
    u = f;
  }
  return null;
}
function nh(u, f, y, N = true) {
  const K = f[10];
  if (K.begin) {
    K.begin();
  }
  try {
    df(u, f, u.template, y);
  } catch (Fe) {
    if (N) {
      Dy(f, Fe);
    }
    throw Fe;
  } finally {
    if (K.end) {
      K.end();
    }
  }
}
function U0(u, f, y) {
  Bl(0);
  f(u, y);
}
function Sy(u) {
  return u[7] ||= [];
}
function s_(u) {
  return u.cleanup ||= [];
}
function Dy(u, f) {
  const y = u[9];
  const N = y ? y.get(qLn, null) : null;
  if (N) {
    N.handleError(f);
  }
}
function Pm(u, f, y, N, K) {
  for (let de = 0; de < y.length;) {
    const Fe = y[de++];
    const ct = y[de++];
    const At = f[Fe];
    const Jt = u.data[Fe];
    if (Jt.setInput !== null) {
      Jt.setInput(At, K, N, ct);
    } else {
      At[ct] = K;
    }
  }
}
function Ad(u, f, y) {
  const N = Jr(f, u);
  (function uy(u, f, y) {
    u.setValue(f, y);
  })(u[11], N, y);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Pp(u, f, y) {
  let N = y ? u.styles : null;
  let K = y ? u.classes : null;
  let de = 0;
  if (f !== null) {
    for (let Fe = 0; Fe < f.length; Fe++) {
      const ct = f[Fe];
      if (typeof ct == "number") {
        de = ct;
      } else if (de == 1) {
        K = S(K, ct);
      } else if (de == 2) {
        N = S(N, ct + ": " + f[++Fe] + ";");
      }
    }
  }
  if (y) {
    u.styles = N;
  } else {
    u.stylesWithoutHost = N;
  }
  if (y) {
    u.classes = K;
  } else {
    u.classesWithoutHost = K;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vv(u, f, y, N, K = false) {
  for (; y !== null;) {
    const de = f[y.index];
    if (de !== null) {
      N.push(Xi(de));
    }
    if (Pa(de)) {
      for (let ct = 10; ct < de.length; ct++) {
        const At = de[ct];
        const Jt = At[1].firstChild;
        if (Jt !== null) {
          Vv(At[1], At, Jt, N);
        }
      }
    }
    const Fe = y.type;
    if (Fe & 8) {
      Vv(u, f, y.child, N);
    } else if (Fe & 32) {
      const ct = gv(y, f);
      let At;
      for (; At = ct();) {
        N.push(At);
      }
    } else if (Fe & 16) {
      const ct = bv(f, y);
      if (Array.isArray(ct)) {
        N.push(...ct);
      } else {
        const At = yh(f[16]);
        Vv(At[1], At, ct, N, true);
      }
    }
    y = K ? y.projectionNext : y.next;
  }
  return N;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Hv {
  constructor(f, y) {
    this._lView = f;
    this._cdRefInjectingView = y;
    this._appRef = null;
    this._attachedToViewContainer = false;
  }
  get rootNodes() {
    const f = this._lView;
    const y = f[1];
    return Vv(y, f, y.firstChild, []);
  }
  get context() {
    return this._lView[8];
  }
  set context(f) {
    this._lView[8] = f;
  }
  get destroyed() {
    return (this._lView[2] & 128) == 128;
  }
  destroy() {
    if (this._appRef) {
      this._appRef.detachView(this);
    } else if (this._attachedToViewContainer) {
      const f = this._lView[3];
      if (Pa(f)) {
        const y = f[8];
        const N = y ? y.indexOf(this) : -1;
        if (N > -1) {
          Cf(f, N);
          su(y, N);
        }
      }
      this._attachedToViewContainer = false;
    }
    Eh(this._lView[1], this._lView);
  }
  onDestroy(f) {
    Mp(this._lView[1], this._lView, null, f);
  }
  markForCheck() {
    eu(this._cdRefInjectingView || this._lView);
  }
  detach() {
    this._lView[2] &= -65;
  }
  reattach() {
    this._lView[2] |= 64;
  }
  detectChanges() {
    nh(this._lView[1], this._lView, this.context);
  }
  checkNoChanges() {}
  attachToViewContainerRef() {
    if (this._appRef) {
      throw new vHH(902, false);
    }
    this._attachedToViewContainer = true;
  }
  detachFromAppRef() {
    this._appRef = null;
    (function Vh(u, f) {
      Hh(u, f, f[11], 2, null, null);
    })(this._lView[1], this._lView);
  }
  attachToAppRef(f) {
    if (this._attachedToViewContainer) {
      throw new vHH(902, false);
    }
    this._appRef = f;
  }
}
class Wv extends Hv {
  constructor(f) {
    super(f);
    this._view = f;
  }
  detectChanges() {
    const f = this._view;
    nh(f[1], f, f[8], false);
  }
  checkNoChanges() {}
  get context() {
    return null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Im extends _Vd {
  constructor(f) {
    super();
    this.ngModule = f;
  }
  resolveComponentFactory(f) {
    const y = Tr(f);
    return new Yv(y, this.ngModule);
  }
}
function o_(u) {
  const f = [];
  for (let y in u) {
    if (u.hasOwnProperty(y)) {
      f.push({
        propName: u[y],
        templateName: y
      });
    }
  }
  return f;
}
class D_ {
  constructor(f, y) {
    this.injector = f;
    this.parentInjector = y;
  }
  get(f, y, N) {
    const K = this.injector.get(f, Wf, N);
    if (K !== Wf || y === Wf) {
      return K;
    } else {
      return this.parentInjector.get(f, y, N);
    }
  }
}
class Yv extends ph {
  constructor(f, y) {
    super();
    this.componentDef = f;
    this.ngModule = y;
    this.componentType = f.type;
    this.selector = function T0(u) {
      return u.map(py).join(",");
    }(f.selectors);
    this.ngContentSelectors = f.ngContentSelectors ? f.ngContentSelectors : [];
    this.isBoundToModule = !!y;
  }
  get inputs() {
    return o_(this.componentDef.inputs);
  }
  get outputs() {
    return o_(this.componentDef.outputs);
  }
  create(f, y, N, K) {
    let Fe = (K = K || this.ngModule) instanceof lqb ? K : K?.injector;
    if (Fe && this.componentDef.getStandaloneInjector !== null) {
      Fe = this.componentDef.getStandaloneInjector(Fe) || Fe;
    }
    const ct = Fe ? new D_(f, Fe) : f;
    const At = ct.get(FYo, null);
    if (At === null) {
      throw new vHH(407, false);
    }
    const Jt = ct.get(iv, null);
    const xn = At.createRenderer(null, this.componentDef);
    const Yn = this.componentDef.selectors[0][0] || "div";
    const Ai = N ? function Ag(u, f, y) {
      return u.selectRootElement(f, y === ifc.ShadowDom);
    }(xn, N, this.componentDef.encapsulation) : vv(xn, Yn, function a_(u) {
      const f = u.toLowerCase();
      if (f === "svg") {
        return "svg";
      } else if (f === "math") {
        return "math";
      } else {
        return null;
      }
    }(Yn));
    const er = this.componentDef.onPush ? 288 : 272;
    const Nr = Fu(0, null, null, 1, 0, null, null, null, null, null);
    const ms = ia(null, Nr, null, er, null, null, At, xn, Jt, ct, null);
    let io;
    let Ho;
    ls(ms);
    try {
      const rl = function Ty(u, f, y, N, K, de) {
        const Fe = y[1];
        y[22] = u;
        const At = il(Fe, 22, 2, "#host", null);
        const Jt = At.mergedAttrs = f.hostAttrs;
        if (Jt !== null) {
          Pp(At, Jt, true);
          if (u !== null) {
            tl(K, u, Jt);
            if (At.classes !== null) {
              ug(K, u, At.classes);
            }
            if (At.styles !== null) {
              cg(K, u, At.styles);
            }
          }
        }
        const xn = N.createRenderer(u, f);
        const Yn = ia(y, Sh(f), null, f.onPush ? 32 : 16, y[22], At, N, xn, de || null, null, null);
        if (Fe.firstCreatePass) {
          Ps(ml(At, y), Fe, f.type);
          xg(Fe, At);
          e_(At, y.length, 1);
        }
        Om(y, Yn);
        return y[22] = Yn;
      }(Ai, this.componentDef, ms, At, xn);
      if (Ai) {
        if (N) {
          tl(xn, Ai, ["ng-version", ry.full]);
        } else {
          const {
            attrs: es,
            classes: Va
          } = function gy(u) {
            const f = [];
            const y = [];
            let N = 1;
            let K = 2;
            for (; N < u.length;) {
              let de = u[N];
              if (typeof de == "string") {
                if (K === 2) {
                  if (de !== "") {
                    f.push(de, u[++N]);
                  }
                } else if (K === 8) {
                  y.push(de);
                }
              } else {
                if (!_d(K)) {
                  break;
                }
                K = de;
              }
              N++;
            }
            return {
              attrs: f,
              classes: y
            };
          }(this.componentDef.selectors[0]);
          if (es) {
            tl(xn, Ai, es);
          }
          if (Va && Va.length > 0) {
            ug(xn, Ai, Va.join(" "));
          }
        }
      }
      Ho = xo(Nr, 22);
      if (y !== undefined) {
        const es = Ho.projection = [];
        for (let Va = 0; Va < this.ngContentSelectors.length; Va++) {
          const Jl = y[Va];
          es.push(Jl != null ? Array.from(Jl) : null);
        }
      }
      io = function Zv(u, f, y, N) {
        const K = y[1];
        const de = function R0(u, f, y) {
          const N = ys();
          if (u.firstCreatePass) {
            if (y.providersResolver) {
              y.providersResolver(y);
            }
            t_(u, N, f, ud(u, f, 1, null), y);
            Jy(u, N);
          }
          const K = rc(f, u, N.directiveStart, N);
          Ou(K, f);
          const de = Ss(N, f);
          if (de) {
            Ou(de, f);
          }
          return K;
        }(K, y, f);
        u[8] = y[8] = de;
        if (N !== null) {
          for (const ct of N) {
            ct(de, f);
          }
        }
        if (f.contentQueries) {
          const ct = ys();
          f.contentQueries(1, de, ct.directiveStart);
        }
        const Fe = ys();
        if (!!K.firstCreatePass && (f.hostBindings !== null || f.hostAttrs !== null)) {
          ki(Fe.index);
          by(y[1], Fe, 0, Fe.directiveStart, Fe.directiveEnd, f);
          k0(f, de);
        }
        return de;
      }(rl, this.componentDef, ms, [ff]);
      zu(Nr, ms, null);
    } finally {
      qt();
    }
    return new T_(this.componentType, io, mh(Ho, ms), ms, Ho);
  }
}
class T_ extends class ev {} {
  constructor(f, y, N, K, de) {
    super();
    this.location = N;
    this._rootLView = K;
    this._tNode = de;
    this.instance = y;
    this.hostView = this.changeDetectorRef = new Wv(K);
    this.componentType = f;
  }
  setInput(f, y) {
    const N = this._tNode.inputs;
    let K;
    if (N !== null && (K = N[f])) {
      const de = this._rootLView;
      Pm(de[1], de, K, f, y);
      Op(de, this._tNode.index);
    }
  }
  get injector() {
    return new Xc(this._tNode, this._rootLView);
  }
  destroy() {
    this.hostView.destroy();
  }
  onDestroy(f) {
    this.hostView.onDestroy(f);
  }
}
function ff() {
  const u = ys();
  Zo(Ji()[1], u);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function qOj(u) {
  let f = function c_(u) {
    return Object.getPrototypeOf(u.prototype).constructor;
  }(u.type);
  let y = true;
  const N = [u];
  for (; f;) {
    let K;
    if (Fo(u)) {
      K = f.ɵcmp || f.ɵdir;
    } else {
      if (f.ɵcmp) {
        throw new vHH(903, false);
      }
      K = f.ɵdir;
    }
    if (K) {
      if (y) {
        N.push(K);
        const Fe = u;
        Fe.inputs = Tg(u.inputs);
        Fe.declaredInputs = Tg(u.declaredInputs);
        Fe.outputs = Tg(u.outputs);
        const ct = K.hostBindings;
        if (ct) {
          qh(u, ct);
        }
        const At = K.viewQuery;
        const Jt = K.contentQueries;
        if (At) {
          Fm(u, At);
        }
        if (Jt) {
          Mg(u, Jt);
        }
        C(u.inputs, K.inputs);
        C(u.declaredInputs, K.declaredInputs);
        C(u.outputs, K.outputs);
        if (Fo(K) && K.data.animation) {
          const xn = u.data;
          xn.animation = (xn.animation || []).concat(K.data.animation);
        }
      }
      const de = K.features;
      if (de) {
        for (let Fe = 0; Fe < de.length; Fe++) {
          const ct = de[Fe];
          if (ct && ct.ngInherit) {
            ct(u);
          }
          if (ct === qOj) {
            y = false;
          }
        }
      }
    }
    f = Object.getPrototypeOf(f);
  }
  (function My(u) {
    let f = 0;
    let y = null;
    for (let N = u.length - 1; N >= 0; N--) {
      const K = u[N];
      K.hostVars = f += K.hostVars;
      K.hostAttrs = Vu(K.hostAttrs, y = Vu(y, K.hostAttrs));
    }
  })(N);
}
function Tg(u) {
  if (u === Rn) {
    return {};
  } else if (u === In) {
    return [];
  } else {
    return u;
  }
}
function Fm(u, f) {
  const y = u.viewQuery;
  u.viewQuery = y ? (N, K) => {
    f(N, K);
    y(N, K);
  } : f;
}
function Mg(u, f) {
  const y = u.contentQueries;
  u.contentQueries = y ? (N, K, de) => {
    f(N, K, de);
    y(N, K, de);
  } : f;
}
function qh(u, f) {
  const y = u.hostBindings;
  u.hostBindings = y ? (N, K) => {
    f(N, K);
    y(N, K);
  } : f;
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
let Ip = null;
function hf() {
  if (!Ip) {
    const u = dqk.Symbol;
    if (u && u.iterator) {
      Ip = u.iterator;
    } else {
      const f = Object.getOwnPropertyNames(Map.prototype);
      for (let y = 0; y < f.length; ++y) {
        const N = f[y];
        if (N !== "entries" && N !== "size" && Map.prototype[N] === Map.prototype.entries) {
          Ip = N;
        }
      }
    }
  }
  return Ip;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function sIi(u) {
  return !!Ig(u) && (Array.isArray(u) || !(u instanceof Map) && hf() in u);
}
function Ig(u) {
  return u !== null && (typeof u == "function" || typeof u == "object");
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
function ih(u, f, y) {
  return u[f] = y;
}
function Kv(u, f) {
  return u[f];
}
function Ku(u, f, y) {
  return !Object.is(u[f], y) && (u[f] = y, true);
}
function Rg(u, f, y, N) {
  const K = Ku(u, f, y);
  return Ku(u, f + 1, N) || K;
}
function jv(u, f, y, N, K) {
  const de = Rg(u, f, y, N);
  return Ku(u, f + 2, K) || de;
}
function dd(u, f, y, N, K, de) {
  const Fe = Rg(u, f, y, N);
  return Rg(u, f + 2, K, de) || Fe;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function uIk(u, f, y, N) {
  const K = Ji();
  if (Ku(K, Fn(), f)) {
    hi();
    Dh(Ui(), K, u, f, y, N);
  }
  return uIk;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ep(u, f, y, N) {
  if (Ku(u, Fn(), y)) {
    return f + F(y) + N;
  } else {
    return Ya;
  }
}
function kg(u, f, y, N, K, de) {
  const ct = Rg(u, mn(), y, K);
  ci(2);
  if (ct) {
    return f + F(y) + N + F(K) + de;
  } else {
    return Ya;
  }
}
function Jc(u, f, y, N, K, de, Fe, ct) {
  const Jt = jv(u, mn(), y, K, Fe);
  ci(3);
  if (Jt) {
    return f + F(y) + N + F(K) + de + F(Fe) + ct;
  } else {
    return Ya;
  }
}
function Fp(u, f, y, N, K, de, Fe, ct, At, Jt) {
  const Yn = dd(u, mn(), y, K, Fe, At);
  ci(4);
  if (Yn) {
    return f + F(y) + N + F(K) + de + F(Fe) + ct + F(At) + Jt;
  } else {
    return Ya;
  }
}
export function Q2q(u, f, y, N, K, de) {
  const Fe = Ji();
  const ct = ep(Fe, f, y, N);
  if (ct !== Ya) {
    Dh(Ui(), Fe, u, ct, K, de);
  }
  return Q2q;
}
export function zWS(u, f, y, N, K, de, Fe, ct) {
  const At = Ji();
  const Jt = kg(At, f, y, N, K, de);
  if (Jt !== Ya) {
    Dh(Ui(), At, u, Jt, Fe, ct);
  }
  return zWS;
}
export function bQe(u, f, y, N, K, de, Fe, ct, At, Jt) {
  const xn = Ji();
  const Yn = Jc(xn, f, y, N, K, de, Fe, ct);
  if (Yn !== Ya) {
    Dh(Ui(), xn, u, Yn, At, Jt);
  }
  return bQe;
}
export function YNc(u, f, y, N, K, de, Fe, ct) {
  const At = Ji();
  const Jt = hi();
  const xn = u + 22;
  const Yn = Jt.firstCreatePass ?
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
  function D(u, f, y, N, K, de, Fe, ct, At) {
    const Jt = f.consts;
    const xn = il(f, u, 4, Fe || null, Rr(Jt, ct));
    Uv(f, y, xn, Rr(Jt, At));
    Zo(f, xn);
    const Yn = xn.tViews = Fu(2, xn, N, K, de, f.directiveRegistry, f.pipeRegistry, null, f.schemas, Jt);
    if (f.queries !== null) {
      f.queries.template(f, xn);
      Yn.queries = f.queries.embeddedTView(xn);
    }
    return xn;
  }(xn, Jt, At, f, y, N, K, de, Fe) : Jt.data[xn];
  He(Yn, false);
  const Ai = At[11].createComment("");
  og(Jt, At, Ai, Yn);
  Ou(Ai, At);
  Om(At, At[xn] = Cy(Ai, At, Ai, Yn));
  if (qs(Yn)) {
    Ff(Jt, At, Yn);
  }
  if (Fe != null) {
    du(At, Yn, ct);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function MAs(u) {
  return Ls(function wi() {
    return Mr.lFrame.contextLView;
  }(), 22 + u);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Q6J(u, f, y) {
  const N = Ji();
  if (Ku(N, Fn(), f)) {
    ku(hi(), Ui(), N, u, f, N[11], y, false);
  }
  return Q6J;
}
function Se(u, f, y, N, K) {
  const Fe = K ? "class" : "style";
  Pm(u, y, f.inputs[Fe], Fe, N);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function TgZ(u, f, y, N) {
  const K = Ji();
  const de = hi();
  const Fe = 22 + u;
  const ct = K[11];
  const At = K[Fe] = vv(ct, f, function Os() {
    return Mr.lFrame.currentNamespace;
  }());
  const Jt = de.firstCreatePass ? function ge(u, f, y, N, K, de, Fe) {
    const ct = f.consts;
    const Jt = il(f, u, 2, K, Rr(ct, de));
    Uv(f, y, Jt, Rr(ct, Fe));
    if (Jt.attrs !== null) {
      Pp(Jt, Jt.attrs, false);
    }
    if (Jt.mergedAttrs !== null) {
      Pp(Jt, Jt.mergedAttrs, true);
    }
    if (f.queries !== null) {
      f.queries.elementStart(f, Jt);
    }
    return Jt;
  }(Fe, de, K, 0, f, y, N) : de.data[Fe];
  He(Jt, true);
  const xn = Jt.mergedAttrs;
  if (xn !== null) {
    tl(ct, At, xn);
  }
  const Yn = Jt.classes;
  if (Yn !== null) {
    ug(ct, At, Yn);
  }
  const Ai = Jt.styles;
  if (Ai !== null) {
    cg(ct, At, Ai);
  }
  if ((Jt.flags & 64) != 64) {
    og(de, K, At, Jt);
  }
  if (function _e() {
    return Mr.lFrame.elementDepthCount;
  }() === 0) {
    Ou(At, K);
  }
  (function xt() {
    Mr.lFrame.elementDepthCount++;
  })();
  if (qs(Jt)) {
    Ff(de, K, Jt);
    Nv(de, Jt, K);
  }
  if (N !== null) {
    du(K, Jt);
  }
  return TgZ;
}
export function qZA() {
  let u = ys();
  if (dn()) {
    Yi();
  } else {
    u = u.parent;
    He(u, false);
  }
  const f = u;
  (function gn() {
    Mr.lFrame.elementDepthCount--;
  })();
  const y = hi();
  if (y.firstCreatePass) {
    Zo(y, u);
    if (Po(u)) {
      y.queries.elementEnd(u);
    }
  }
  if (f.classesWithoutHost != null && function Vl(u) {
    return (u.flags & 16) != 0;
  }(f)) {
    Se(y, f, Ji(), f.classesWithoutHost, true);
  }
  if (f.stylesWithoutHost != null && function kl(u) {
    return (u.flags & 32) != 0;
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */(f)) {
    Se(y, f, Ji(), f.stylesWithoutHost, false);
  }
  return qZA;
}
export function _UZ(u, f, y, N) {
  TgZ(u, f, y, N);
  qZA();
  return _UZ;
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
}
export function ynx(u, f, y) {
  const N = Ji();
  const K = hi();
  const de = u + 22;
  const Fe = K.firstCreatePass ? function vn(u, f, y, N, K) {
    const de = f.consts;
    const Fe = Rr(de, N);
    const ct = il(f, u, 8, "ng-container", Fe);
    if (Fe !== null) {
      Pp(ct, Fe, true);
    }
    Uv(f, y, ct, Rr(de, K));
    if (f.queries !== null) {
      f.queries.elementStart(f, ct);
    }
    return ct;
  }(de, K, N, f, y) : K.data[de];
  He(Fe, true);
  const ct = N[de] = N[11].createComment("");
  og(K, N, ct, Fe);
  Ou(ct, N);
  if (qs(Fe)) {
    Ff(K, N, Fe);
    Nv(K, Fe, N);
  }
  if (y != null) {
    du(N, Fe);
  }
  return ynx;
}
export function BQk() {
  let u = ys();
  const f = hi();
  if (dn()) {
    Yi();
  } else {
    u = u.parent;
    He(u, false);
  }
  if (f.firstCreatePass) {
    Zo(f, u);
    if (Po(u)) {
      f.queries.elementEnd(u);
    }
  }
  return BQk;
}
export function GkF(u, f, y) {
  ynx(u, f, y);
  BQk();
  return GkF;
}
export function EpF() {
  return Ji();
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function QGY(u) {
  return !!u && typeof u.then == "function";
}
export function F4k(u) {
  return !!u && typeof u.subscribe == "function";
}
export const CqO = F4k;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function NdJ(u, f, y, N) {
  const K = Ji();
  const de = hi();
  const Fe = ys();
  (function jr(u, f, y, N, K, de, Fe, ct) {
    const At = qs(N);
    const xn = u.firstCreatePass && s_(u);
    const Yn = f[8];
    const Ai = Sy(f);
    let er = true;
    if (N.type & 3 || ct) {
      const io = Ss(N, f);
      const Ho = ct ? ct(io) : io;
      const rl = Ai.length;
      const es = ct ? Jl => ct(Xi(Jl[N.index])) : N.index;
      let Va = null;
      if (!ct && At) {
        Va = function Co(u, f, y, N) {
          const K = u.cleanup;
          if (K != null) {
            for (let de = 0; de < K.length - 1; de += 2) {
              const Fe = K[de];
              if (Fe === y && K[de + 1] === N) {
                const ct = f[7];
                const At = K[de + 2];
                if (ct.length > At) {
                  return ct[At];
                } else {
                  return null;
                }
              }
              if (typeof Fe == "string") {
                de += 2;
              }
            }
          }
          return null;
        }(u, f, K, N.index);
      }
      if (Va !== null) {
        (Va.__ngLastListenerFn__ || Va).__ngNextListenerFn__ = de;
        Va.__ngLastListenerFn__ = de;
        er = false;
      } else {
        de = _l(N, f, Yn, de, false);
        const Jl = y.listen(Ho, K, de);
        Ai.push(de, Jl);
        if (xn) {
          xn.push(K, es, rl, rl + 1);
        }
      }
    } else {
      de = _l(N, f, Yn, de, false);
    }
    const Nr = N.outputs;
    let ms;
    if (er && Nr !== null && (ms = Nr[K])) {
      const io = ms.length;
      if (io) {
        for (let Ho = 0; Ho < io; Ho += 2) {
          const ed = f[ms[Ho]][ms[Ho + 1]].subscribe(de);
          const r1 = Ai.length;
          Ai.push(de, ed);
          if (xn) {
            xn.push(K, N.index, r1, -(r1 + 1));
          }
        }
      }
    }
  })(de, K, K[11], Fe, u, f, 0, N);
  return NdJ;
}
function nc(u, f, y, N) {
  try {
    return y(N) !== false;
  } catch (K) {
    Dy(u, K);
    return false;
  }
}
function _l(u, f, y, N, K) {
  return function de(Fe) {
    if (Fe === Function) {
      return N;
    }
    eu(u.flags & 2 ? sr(u.index, f) : f);
    let At = nc(f, 0, N, Fe);
    let Jt = de.__ngNextListenerFn__;
    for (; Jt;) {
      At = nc(f, 0, Jt, Fe) && At;
      Jt = Jt.__ngNextListenerFn__;
    }
    if (K && At === false) {
      Fe.preventDefault();
      Fe.returnValue = false;
    }
    return At;
  };
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
export function oxw(u = 1) {
  return function Ct(u) {
    return (Mr.lFrame.contextLView = function Gt(u, f) {
      for (; u > 0;) {
        f = f[15];
        u--;
      }
      return f;
    }(u, Mr.lFrame.contextLView))[8];
  }(u);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Lu(u, f) {
  let y = null;
  const N = function D0(u) {
    const f = u.attrs;
    if (f != null) {
      const y = f.indexOf(5);
      if ((y & 1) == 0) {
        return f[y + 1];
      }
    }
    return null;
  }(u);
  for (let K = 0; K < f.length; K++) {
    const de = f[K];
    if (de !== "*") {
      if (N === null ? xv(u, de, true) : dg(N, de)) {
        return K;
      }
    } else {
      y = K;
    }
  }
  return y;
}
export function F$t(u) {
  const f = Ji()[16][6];
  if (!f.projection) {
    const N = f.projection = Dc(u ? u.length : 1, null);
    const K = N.slice();
    let de = f.child;
    for (; de !== null;) {
      const Fe = u ? Lu(de, u) : 0;
      if (Fe !== null) {
        if (K[Fe]) {
          K[Fe].projectionNext = de;
        } else {
          N[Fe] = de;
        }
        K[Fe] = de;
      }
      de = de.next;
    }
  }
}
export function Hsn(u, f = 0, y) {
  const N = Ji();
  const K = hi();
  const de = il(K, 22 + u, 16, null, y || null);
  if (de.projection === null) {
    de.projection = f;
  }
  Yi();
  if ((de.flags & 64) != 64) {
    (function jy(u, f, y) {
      Wh(f[11], 0, f, y, Ec(u, y, f), Jf(y.parent || f[6], y, f));
    })(K, N, de);
  }
}
export function s9C(u, f, y) {
  MGl(u, "", f, "", y);
  return s9C;
}
export function MGl(u, f, y, N, K) {
  const de = Ji();
  const Fe = ep(de, f, y, N);
  if (Fe !== Ya) {
    ku(hi(), Ui(), de, u, Fe, de[11], K, false);
  }
  return MGl;
}
export function hYB(u, f, y, N, K, de, Fe) {
  const ct = Ji();
  const At = kg(ct, f, y, N, K, de);
  if (At !== Ya) {
    ku(hi(), Ui(), ct, u, At, ct[11], Fe, false);
  }
  return hYB;
}
export function cQ8(u, f, y, N, K, de, Fe, ct, At) {
  const Jt = Ji();
  const xn = Jc(Jt, f, y, N, K, de, Fe, ct);
  if (xn !== Ya) {
    ku(hi(), Ui(), Jt, u, xn, Jt[11], At, false);
  }
  return cQ8;
}
export function FAE(u, f, y, N, K, de, Fe, ct, At, Jt, xn) {
  const Yn = Ji();
  const Ai = Fp(Yn, f, y, N, K, de, Fe, ct, At, Jt);
  if (Ai !== Ya) {
    ku(hi(), Ui(), Yn, u, Ai, Yn[11], xn, false);
  }
  return FAE;
}
function Wi(u, f, y, N, K) {
  const de = u[y + 1];
  const Fe = f === null;
  let ct = N ? Kd(de) : eh(de);
  let At = false;
  for (; ct !== 0 && (At === false || Fe);) {
    const xn = u[ct + 1];
    if (Sr(u[ct], f)) {
      At = true;
      u[ct + 1] = N ? wh(xn) : Rf(xn);
    }
    ct = N ? Kd(xn) : eh(xn);
  }
  if (At) {
    u[y + 1] = N ? Rf(de) : wh(de);
  }
}
function Sr(u, f) {
  return u === null || f == null || (Array.isArray(u) ? u[1] : u) === f || !!Array.isArray(u) && typeof f == "string" && Ri(u, f) >= 0;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const xr = {
  textEnd: 0,
  key: 0,
  keyEnd: 0,
  value: 0,
  valueEnd: 0
};
function qr(u) {
  return u.substring(xr.key, xr.keyEnd);
}
function ws(u) {
  return u.substring(xr.value, xr.valueEnd);
}
function Xs(u, f) {
  const y = xr.textEnd;
  if (y === f) {
    return -1;
  } else {
    f = xr.keyEnd = function Ac(u, f, y) {
      for (; f < y && u.charCodeAt(f) > 32;) {
        f++;
      }
      return f;
    }(u, xr.key = f, y);
    return El(u, f, y);
  }
}
function Fl(u, f) {
  const y = xr.textEnd;
  let N = xr.key = El(u, f, y);
  if (y === N) {
    return -1;
  } else {
    N = xr.keyEnd = function Ic(u, f, y) {
      let N;
      for (; f < y && ((N = u.charCodeAt(f)) === 45 || N === 95 || (N & -33) >= 65 && (N & -33) <= 90 || N >= 48 && N <= 57);) {
        f++;
      }
      return f;
    }(u, N, y);
    N = Au(u, N, y);
    N = xr.value = El(u, N, y);
    N = xr.valueEnd = function hd(u, f, y) {
      let N = -1;
      let K = -1;
      let de = -1;
      let Fe = f;
      let ct = Fe;
      for (; Fe < y;) {
        const At = u.charCodeAt(Fe++);
        if (At === 59) {
          return ct;
        }
        if (At === 34 || At === 39) {
          ct = Fe = pu(u, At, Fe, y);
        } else if (f === Fe - 4 && de === 85 && K === 82 && N === 76 && At === 40) {
          ct = Fe = pu(u, 41, Fe, y);
        } else if (At > 32) {
          ct = Fe;
        }
        de = K;
        K = N;
        N = At & -33;
      }
      return ct;
    }(u, N, y);
    return Au(u, N, y);
  }
}
function ma(u) {
  xr.key = 0;
  xr.keyEnd = 0;
  xr.value = 0;
  xr.valueEnd = 0;
  xr.textEnd = u.length;
}
function El(u, f, y) {
  for (; f < y && u.charCodeAt(f) <= 32;) {
    f++;
  }
  return f;
}
function Au(u, f, y, N) {
  if ((f = El(u, f, y)) < y) {
    f++;
  }
  return f;
}
function pu(u, f, y, N) {
  let K = -1;
  let de = y;
  for (; de < N;) {
    const Fe = u.charCodeAt(de++);
    if (Fe == f && K !== 92) {
      return de;
    }
    K = Fe == 92 && K === 92 ? 0 : Fe;
  }
  throw new Error();
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Udp(u, f, y) {
  $u(u, f, y, false);
  return Udp;
}
export function ekj(u, f) {
  $u(u, f, null, true);
  return ekj;
}
export function Akn(u) {
  Xu(Qd, jd, u, false);
}
function jd(u, f) {
  for (let y = function ka(u) {
    ma(u);
    return Fl(u, El(u, 0, xr.textEnd));
  }(f); y >= 0; y = Fl(f, y)) {
    Qd(u, qr(f), ws(f));
  }
}
export function Tol(u) {
  Xu(Nn, Ju, u, true);
}
function Ju(u, f) {
  for (let y = function co(u) {
    ma(u);
    return Xs(u, El(u, 0, xr.textEnd));
  }(f); y >= 0; y = Xs(f, y)) {
    Nn(u, qr(f), true);
  }
}
function $u(u, f, y, N) {
  const K = Ji();
  const de = hi();
  const Fe = ci(2);
  if (de.firstUpdatePass) {
    $v(de, u, Fe, N);
  }
  if (f !== Ya && Ku(K, Fe, f)) {
    rp(de, de.data[Sn()], K, K[11], u, K[Fe + 1] = function xu(u, f) {
      if (u != null) {
        if (typeof f == "string") {
          u += f;
        } else if (typeof u == "object") {
          u = AaK(z3N(u));
        }
      }
      return u;
    }(f, y), N, Fe);
  }
}
function Xu(u, f, y, N) {
  const K = hi();
  const de = ci(2);
  if (K.firstUpdatePass) {
    $v(K, null, de, N);
  }
  const Fe = Ji();
  if (y !== Ya && Ku(Fe, de, y)) {
    const ct = K.data[Sn()];
    if (kc(ct, N) && !Um(K, de)) {
      let At = N ? ct.classesWithoutHost : ct.stylesWithoutHost;
      if (At !== null) {
        y = S(At, y || "");
      }
      Se(K, ct, Fe, y, N);
    } else {
      (function Ld(u, f, y, N, K, de, Fe, ct) {
        if (K === Ya) {
          K = In;
        }
        let At = 0;
        let Jt = 0;
        let xn = K.length > 0 ? K[0] : null;
        let Yn = de.length > 0 ? de[0] : null;
        for (; xn !== null || Yn !== null;) {
          const Ai = At < K.length ? K[At + 1] : undefined;
          const er = Jt < de.length ? de[Jt + 1] : undefined;
          let ms;
          let Nr = null;
          if (xn === Yn) {
            At += 2;
            Jt += 2;
            if (Ai !== er) {
              Nr = Yn;
              ms = er;
            }
          } else if (Yn === null || xn !== null && xn < Yn) {
            At += 2;
            Nr = xn;
          } else {
            Jt += 2;
            Nr = Yn;
            ms = er;
          }
          if (Nr !== null) {
            rp(u, f, y, N, Nr, ms, Fe, ct);
          }
          xn = At < K.length ? K[At] : null;
          Yn = Jt < de.length ? de[Jt] : null;
        }
      })(K, ct, Fe, Fe[11], Fe[de + 1], Fe[de + 1] = function Ug(u, f, y) {
        if (y == null || y === "") {
          return In;
        }
        const N = [];
        const K = z3N(y);
        if (Array.isArray(K)) {
          for (let de = 0; de < K.length; de++) {
            u(N, K[de], true);
          }
        } else if (typeof K == "object") {
          for (const de in K) {
            if (K.hasOwnProperty(de)) {
              u(N, de, K[de]);
            }
          }
        } else if (typeof K == "string") {
          f(N, K);
        }
        return N;
      }(u, f, y), N, de);
    }
  }
}
function Um(u, f) {
  return f >= u.expandoStartIndex;
}
function $v(u, f, y, N) {
  const K = u.data;
  if (K[y + 1] === null) {
    const de = K[Sn()];
    const Fe = Um(u, y);
    if (kc(de, N) && f === null && !Fe) {
      f = false;
    }
    f = function Ng(u, f, y, N) {
      const K = Ha(u);
      let de = N ? f.residualClasses : f.residualStyles;
      if (K === null) {
        if ((N ? f.classBindings : f.styleBindings) === 0) {
          y = ip(y = Up(null, u, f, y, N), f.attrs, N);
          de = null;
        }
      } else {
        const Fe = f.directiveStylingLast;
        if (Fe === -1 || u[Fe] !== K) {
          y = Up(K, u, f, y, N);
          if (de === null) {
            let At = function np(u, f, y) {
              const N = y ? f.classBindings : f.styleBindings;
              if (eh(N) !== 0) {
                return u[Kd(N)];
              }
            }(u, f, N);
            if (At !== undefined && Array.isArray(At)) {
              At = Up(null, u, f, At[1], N);
              At = ip(At, f.attrs, N);
              (function Np(u, f, y, N) {
                u[Kd(y ? f.classBindings : f.styleBindings)] = N;
              })(u, f, N, At);
            }
          } else {
            de = function Xv(u, f, y) {
              let N;
              const K = f.directiveEnd;
              for (let de = 1 + f.directiveStylingLast; de < K; de++) {
                N = ip(N, u[de].hostAttrs, y);
              }
              return ip(N, f.attrs, y);
            }(u, f, N);
          }
        }
      }
      if (de !== undefined) {
        if (N) {
          f.residualClasses = de;
        } else {
          f.residualStyles = de;
        }
      }
      return y;
    }(K, de, f, N);
    (function $n(u, f, y, N, K, de) {
      let Fe = de ? f.classBindings : f.styleBindings;
      let ct = Kd(Fe);
      let At = eh(Fe);
      u[N] = y;
      let xn;
      let Jt = false;
      if (Array.isArray(y)) {
        const Yn = y;
        xn = Yn[1];
        if (xn === null || Ri(Yn, xn) > 0) {
          Jt = true;
        }
      } else {
        xn = y;
      }
      if (K) {
        if (At !== 0) {
          const Ai = Kd(u[ct + 1]);
          u[N + 1] = Ch(Ai, ct);
          if (Ai !== 0) {
            u[Ai + 1] = vg(u[Ai + 1], N);
          }
          u[ct + 1] = function kv(u, f) {
            return u & 131071 | f << 17;
          }(u[ct + 1], N);
        } else {
          u[N + 1] = Ch(ct, 0);
          if (ct !== 0) {
            u[ct + 1] = vg(u[ct + 1], N);
          }
          ct = N;
        }
      } else {
        u[N + 1] = Ch(At, 0);
        if (ct === 0) {
          ct = N;
        } else {
          u[At + 1] = vg(u[At + 1], N);
        }
        At = N;
      }
      if (Jt) {
        u[N + 1] = Rf(u[N + 1]);
      }
      Wi(u, xn, N, true);
      Wi(u, xn, N, false);
      (function Ti(u, f, y, N, K) {
        const de = K ? u.residualClasses : u.residualStyles;
        if (de != null && typeof f == "string" && Ri(de, f) >= 0) {
          y[N + 1] = wh(y[N + 1]);
        }
      })(f, xn, u, N, de);
      Fe = Ch(ct, At);
      if (de) {
        f.classBindings = Fe;
      } else {
        f.styleBindings = Fe;
      }
    })(K, de, f, y, Fe, N);
  }
}
function Up(u, f, y, N, K) {
  let de = null;
  const Fe = y.directiveEnd;
  let ct = y.directiveStylingLast;
  for (ct === -1 ? ct = y.directiveStart : ct++; ct < Fe && (de = f[ct], N = ip(N, de.hostAttrs, K), de !== u);) {
    ct++;
  }
  if (u !== null) {
    y.directiveStylingLast = ct;
  }
  return N;
}
function ip(u, f, y) {
  const N = y ? 1 : 2;
  let K = -1;
  if (f !== null) {
    for (let de = 0; de < f.length; de++) {
      const Fe = f[de];
      if (typeof Fe == "number") {
        K = Fe;
      } else if (K === N) {
        if (!Array.isArray(u)) {
          u = u === undefined ? [] : ["", u];
        }
        Nn(u, Fe, !!y || f[++de]);
      }
    }
  }
  if (u === undefined) {
    return null;
  } else {
    return u;
  }
}
function Qd(u, f, y) {
  Nn(u, f, z3N(y));
}
function rp(u, f, y, N, K, de, Fe, ct) {
  if (!(f.type & 3)) {
    return;
  }
  const At = u.data;
  const Jt = At[ct + 1];
  if (!Ql(function Ed(u) {
    return (u & 1) == 1;
  }(Jt) ? Fc(At, f, y, K, eh(Jt), Fe) : undefined)) {
    if (!Ql(de)) {
      if (function Cp(u) {
        return (u & 2) == 2;
      }(Jt)) {
        de = Fc(At, null, y, K, ct, Fe);
      }
    }
    (function hm(u, f, y, N, K) {
      if (f) {
        if (K) {
          u.addClass(y, N);
        } else {
          u.removeClass(y, N);
        }
      } else {
        let de = N.indexOf("-") === -1 ? undefined : JOm.DashCase;
        if (K == null) {
          u.removeStyle(y, N, de);
        } else {
          if (typeof K == "string" && K.endsWith("!important")) {
            K = K.slice(0, -10);
            de |= JOm.Important;
          }
          u.setStyle(y, N, K, de);
        }
      }
    })(N, Fe, Jr(Sn(), y), K, de);
  }
}
function Fc(u, f, y, N, K, de) {
  const Fe = f === null;
  let ct;
  for (; K > 0;) {
    const At = u[K];
    const Jt = Array.isArray(At);
    const xn = Jt ? At[1] : At;
    const Yn = xn === null;
    let Ai = y[K + 1];
    if (Ai === Ya) {
      Ai = Yn ? In : undefined;
    }
    let er = Yn ? Tn(Ai, N) : xn === N ? Ai : undefined;
    if (Jt && !Ql(er)) {
      er = Tn(At, N);
    }
    if (Ql(er) && (ct = er, Fe)) {
      return ct;
    }
    const Nr = u[K + 1];
    K = Fe ? Kd(Nr) : eh(Nr);
  }
  if (f !== null) {
    let At = de ? f.residualClasses : f.residualStyles;
    if (At != null) {
      ct = Tn(At, N);
    }
  }
  return ct;
}
function Ql(u) {
  return u !== undefined;
}
function kc(u, f) {
  return (u.flags & (f ? 16 : 32)) != 0;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function _uU(u, f = "") {
  const y = Ji();
  const N = hi();
  const K = u + 22;
  const de = N.firstCreatePass ? il(N, K, 1, f, null) : N.data[K];
  const Fe = y[K] = function mv(u, f) {
    return u.createText(f);
  }(y[11], f);
  og(N, y, Fe, de);
  He(de, false);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Oqu(u) {
  hij("", u, "");
  return Oqu;
}
export function hij(u, f, y) {
  const N = Ji();
  const K = ep(N, u, f, y);
  if (K !== Ya) {
    Ad(N, Sn(), K);
  }
  return hij;
}
export function AsE(u, f, y, N, K) {
  const de = Ji();
  const Fe = kg(de, u, f, y, N, K);
  if (Fe !== Ya) {
    Ad(de, Sn(), Fe);
  }
  return AsE;
}
export function lnq(u, f, y, N, K, de, Fe) {
  const ct = Ji();
  const At = Jc(ct, u, f, y, N, K, de, Fe);
  if (At !== Ya) {
    Ad(ct, Sn(), At);
  }
  return lnq;
}
export function HOy(u, f, y, N, K, de, Fe, ct, At) {
  const Jt = Ji();
  const xn = Fp(Jt, u, f, y, N, K, de, Fe, ct, At);
  if (xn !== Ya) {
    Ad(Jt, Sn(), xn);
  }
  return HOy;
}
export function xDo(u, f, y, N, K, de, Fe, ct, At, Jt, xn) {
  const Yn = Ji();
  const Ai = function xd(u, f, y, N, K, de, Fe, ct, At, Jt, xn, Yn) {
    const Ai = mn();
    let er = dd(u, Ai, y, K, Fe, At);
    er = Ku(u, Ai + 4, xn) || er;
    ci(5);
    if (er) {
      return f + F(y) + N + F(K) + de + F(Fe) + ct + F(At) + Jt + F(xn) + Yn;
    } else {
      return Ya;
    }
  }(Yn, u, f, y, N, K, de, Fe, ct, At, Jt, xn);
  if (Ai !== Ya) {
    Ad(Yn, Sn(), Ai);
  }
  return xDo;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Gre(u, f, y) {
  Xu(Nn, Ju, ep(Ji(), u, f, y), true);
}
export function d8E(u, f, y) {
  const N = Ji();
  if (Ku(N, Fn(), f)) {
    const de = hi();
    const Fe = Ui();
    ku(de, Fe, N, u, f, function Dg(u, f, y) {
      if (u === null || Fo(u)) {
        y = function nr(u) {
          for (; Array.isArray(u);) {
            if (typeof u[1] == "object") {
              return u;
            }
            u = u[0];
          }
          return null;
        }(y[f.index]);
      }
      return y[11];
    }(Ha(de.data), Fe, N), y, true);
  }
  return d8E;
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
const qv = undefined;
var e = ["en", [["a", "p"], ["AM", "PM"], qv], [["AM", "PM"], qv, qv], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], qv, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], qv, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", qv, "{1} 'at' {0}", qv], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function R(u) {
  const y = Math.floor(Math.abs(u));
  const N = u.toString().replace(/^[^.]*\.?/, "").length;
  if (y === 1 && N === 0) {
    return 1;
  } else {
    return 5;
  }
}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let n = {};
export function dwT(u, f, y) {
  if (typeof f != "string") {
    y = f;
    f = u[wAp.LocaleId];
  }
  f = f.toLowerCase().replace(/_/g, "-");
  n[f] = u;
  if (y) {
    n[f][wAp.ExtraData] = y;
  }
}
export function cg1(u) {
  const f = function Tt(u) {
    return u.toLowerCase().replace(/_/g, "-");
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */(u);
  let y = z(f);
  if (y) {
    return y;
  }
  const N = f.split("-")[0];
  y = z(N);
  if (y) {
    return y;
  }
  if (N === "en") {
    return e;
  }
  throw new vHH(701, false);
}
export function kL8(u) {
  return cg1(u)[wAp.PluralCase];
}
function z(u) {
  if (!(u in n)) {
    n[u] = dqk.ng && dqk.ng.common && dqk.ng.common.locales && dqk.ng.common.locales[u];
  }
  return n[u];
}
export var wAp = (() => {
  (wAp = wAp || {})[wAp.LocaleId = 0] = "LocaleId";
  wAp[wAp.DayPeriodsFormat = 1] = "DayPeriodsFormat";
  wAp[wAp.DayPeriodsStandalone = 2] = "DayPeriodsStandalone";
  wAp[wAp.DaysFormat = 3] = "DaysFormat";
  wAp[wAp.DaysStandalone = 4] = "DaysStandalone";
  wAp[wAp.MonthsFormat = 5] = "MonthsFormat";
  wAp[wAp.MonthsStandalone = 6] = "MonthsStandalone";
  wAp[wAp.Eras = 7] = "Eras";
  wAp[wAp.FirstDayOfWeek = 8] = "FirstDayOfWeek";
  wAp[wAp.WeekendRange = 9] = "WeekendRange";
  wAp[wAp.DateFormat = 10] = "DateFormat";
  wAp[wAp.TimeFormat = 11] = "TimeFormat";
  wAp[wAp.DateTimeFormat = 12] = "DateTimeFormat";
  wAp[wAp.NumberSymbols = 13] = "NumberSymbols";
  wAp[wAp.NumberFormats = 14] = "NumberFormats";
  wAp[wAp.CurrencyCode = 15] = "CurrencyCode";
  wAp[wAp.CurrencySymbol = 16] = "CurrencySymbol";
  wAp[wAp.CurrencyName = 17] = "CurrencyName";
  wAp[wAp.Currencies = 18] = "Currencies";
  wAp[wAp.Directionality = 19] = "Directionality";
  wAp[wAp.PluralCase = 20] = "PluralCase";
  wAp[wAp.ExtraData = 21] = "ExtraData";
  return wAp;
})();
const Ci = "en-US";
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
let Bm = Ci;
function By(u, f, y, N, K) {
  u = E(u);
  if (Array.isArray(u)) {
    for (let de = 0; de < u.length; de++) {
      By(u[de], f, y, N, K);
    }
  } else {
    const de = hi();
    const Fe = Ji();
    let ct = vp(u) ? u : E(u.provide);
    let At = qg(u);
    const Jt = ys();
    const xn = Jt.providerIndexes & 1048575;
    const Yn = Jt.directiveStart;
    const Ai = Jt.providerIndexes >> 20;
    if (vp(u) || !u.multi) {
      const er = new hl(At, K, Y36);
      const Nr = Vy(ct, f, K ? xn : xn + Ai, Yn);
      if (Nr === -1) {
        Ps(ml(Jt, Fe), de, ct);
        z0(de, u, f.length);
        f.push(ct);
        Jt.directiveStart++;
        Jt.directiveEnd++;
        if (K) {
          Jt.providerIndexes += 1048576;
        }
        y.push(er);
        Fe.push(er);
      } else {
        y[Nr] = er;
        Fe[Nr] = er;
      }
    } else {
      const er = Vy(ct, f, xn + Ai, Yn);
      const Nr = Vy(ct, f, xn, xn + Ai);
      const ms = er >= 0 && y[er];
      const io = Nr >= 0 && y[Nr];
      if (K && !io || !K && !ms) {
        Ps(ml(Jt, Fe), de, ct);
        const Ho = function eA(u, f, y, N, K) {
          const de = new hl(u, y, Y36);
          de.multi = [];
          de.index = f;
          de.componentProviders = 0;
          YE(de, K, N && !y);
          return de;
        }(K ? qb : m_, y.length, K, N, At);
        if (!K && io) {
          y[Nr].providerFactory = Ho;
        }
        z0(de, u, f.length, 0);
        f.push(ct);
        Jt.directiveStart++;
        Jt.directiveEnd++;
        if (K) {
          Jt.providerIndexes += 1048576;
        }
        y.push(Ho);
        Fe.push(Ho);
      } else {
        z0(de, u, er > -1 ? er : Nr, YE(y[K ? Nr : er], At, !K && N));
      }
      if (!K && N && io) {
        y[Nr].componentProviders++;
      }
    }
  }
}
function z0(u, f, y, N) {
  const K = vp(f);
  const de = function g0(u) {
    return !!u.useClass;
  }(f);
  if (K || de) {
    const At = (de ? E(f.useClass) : f).prototype.ngOnDestroy;
    if (At) {
      const Jt = u.destroyHooks ||= [];
      if (!K && f.multi) {
        const xn = Jt.indexOf(y);
        if (xn === -1) {
          Jt.push(y, [N, At]);
        } else {
          Jt[xn + 1].push(N, At);
        }
      } else {
        Jt.push(y, At);
      }
    }
  }
}
function YE(u, f, y) {
  if (y) {
    u.componentProviders++;
  }
  return u.multi.push(f) - 1;
}
function Vy(u, f, y, N) {
  for (let K = y; K < N; K++) {
    if (f[K] === u) {
      return K;
    }
  }
  return -1;
}
function m_(u, f, y, N) {
  return D1(this.multi, []);
}
function qb(u, f, y, N) {
  const K = this.multi;
  let de;
  if (this.providerFactory) {
    const Fe = this.providerFactory.componentProviders;
    const ct = rc(y, y[1], this.providerFactory.index, N);
    de = ct.slice(0, Fe);
    D1(K, de);
    for (let At = Fe; At < ct.length; At++) {
      de.push(ct[At]);
    }
  } else {
    de = [];
    D1(K, de);
  }
  return de;
}
function D1(u, f) {
  for (let y = 0; y < u.length; y++) {
    f.push((0, u[y])());
  }
  return f;
}
export function _Bn(u, f = []) {
  return y => {
    y.providersResolver = (N, K) =>
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
    function Uy(u, f, y) {
      const N = hi();
      if (N.firstCreatePass) {
        const K = Fo(u);
        By(y, N.data, N.blueprint, K, true);
        By(f, N.data, N.blueprint, K, false);
      }
    }(N, K ? K(u) : u, f);
  };
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class h0i {}
export class YKP {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function Lck(u, f) {
  return new gf(u, f ?? null);
}
class gf extends h0i {
  constructor(f, y) {
    super();
    this._parent = y;
    this._bootstrapComponents = [];
    this.destroyCbs = [];
    this.componentFactoryResolver = new Im(this);
    const N = oi(f);
    this._bootstrapComponents = tf(N.bootstrap);
    this._r3Injector = Gh(f, y, [{
      provide: h0i,
      useValue: this
    }, {
      provide: _Vd,
      useValue: this.componentFactoryResolver
    }], AaK(f), new Set(["environment"]));
    this._r3Injector.resolveInjectorInitializers();
    this.instance = this._r3Injector.get(f);
  }
  get injector() {
    return this._r3Injector;
  }
  destroy() {
    const f = this._r3Injector;
    if (!f.destroyed) {
      f.destroy();
    }
    this.destroyCbs.forEach(y => y());
    this.destroyCbs = null;
  }
  onDestroy(f) {
    this.destroyCbs.push(f);
  }
}
class $d extends YKP {
  constructor(f) {
    super();
    this.moduleType = f;
  }
  create(f) {
    return new gf(this.moduleType, f);
  }
}
class r0 extends h0i {
  constructor(f, y, N) {
    super();
    this.componentFactoryResolver = new Im(this);
    this.instance = null;
    const K = new $m([...f, {
      provide: h0i,
      useValue: this
    }, {
      provide: _Vd,
      useValue: this.componentFactoryResolver
    }], y || Kp(), N, new Set(["environment"]));
    this.injector = K;
    K.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(f) {
    this.injector.onDestroy(f);
  }
}
export function MMx(u, f, y = null) {
  return new r0(u, f, y).injector;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let nA = (() => {
  class u {
    constructor(y) {
      this._injector = y;
      this.cachedInjectors = new Map();
    }
    getOrCreateStandaloneInjector(y) {
      if (!y.standalone) {
        return null;
      }
      if (!this.cachedInjectors.has(y.id)) {
        const N = mp(0, y.type);
        const K = N.length > 0 ? MMx([N], this._injector, `Standalone[${y.type.name}]`) : null;
        this.cachedInjectors.set(y.id, K);
      }
      return this.cachedInjectors.get(y.id);
    }
    ngOnDestroy() {
      try {
        for (const y of this.cachedInjectors.values()) {
          if (y !== null) {
            y.destroy();
          }
        }
      } finally {
        this.cachedInjectors.clear();
      }
    }
  }
  u.ɵprov = Yz7({
    token: u,
    providedIn: "environment",
    factory: () => new u(LFG(lqb))
  });
  return u;
})();
export function jDz(u) {
  u.getStandaloneInjector = f => f.get(nA).getOrCreateStandaloneInjector(u);
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
export function DdM(u, f, y) {
  const N = wt() + u;
  const K = Ji();
  if (K[N] === Ya) {
    return ih(K, N, y ? f.call(y) : f());
  } else {
    return Kv(K, N);
  }
}
export function VKq(u, f, y, N) {
  return nb(Ji(), wt(), u, f, y, N);
}
export function WLB(u, f, y, N, K) {
  return ib(Ji(), wt(), u, f, y, N, K);
}
export function kEZ(u, f, y, N, K, de) {
  return rb(Ji(), wt(), u, f, y, N, K, de);
}
export function l5B(u, f, y, N, K, de, Fe) {
  return op(Ji(), wt(), u, f, y, N, K, de, Fe);
}
export function qbA(u, f, y, N, K, de, Fe, ct) {
  const At = wt() + u;
  const Jt = Ji();
  const xn = dd(Jt, At, y, N, K, de);
  if (Ku(Jt, At + 4, Fe) || xn) {
    return ih(Jt, At + 5, ct ? f.call(ct, y, N, K, de, Fe) : f(y, N, K, de, Fe));
  } else {
    return Kv(Jt, At + 5);
  }
}
export function HTZ(u, f, y, N, K, de, Fe, ct, At) {
  const Jt = wt() + u;
  const xn = Ji();
  const Yn = dd(xn, Jt, y, N, K, de);
  if (Rg(xn, Jt + 4, Fe, ct) || Yn) {
    return ih(xn, Jt + 6, At ? f.call(At, y, N, K, de, Fe, ct) : f(y, N, K, de, Fe, ct));
  } else {
    return Kv(xn, Jt + 6);
  }
}
export function Hh0(u, f, y, N, K, de, Fe, ct, At, Jt) {
  const xn = wt() + u;
  const Yn = Ji();
  let Ai = dd(Yn, xn, y, N, K, de);
  if (jv(Yn, xn + 4, Fe, ct, At) || Ai) {
    return ih(Yn, xn + 7, Jt ? f.call(Jt, y, N, K, de, Fe, ct, At) : f(y, N, K, de, Fe, ct, At));
  } else {
    return Kv(Yn, xn + 7);
  }
}
export function qlk(u, f, y, N, K, de, Fe, ct, At, Jt, xn) {
  const Yn = wt() + u;
  const Ai = Ji();
  const er = dd(Ai, Yn, y, N, K, de);
  if (dd(Ai, Yn + 4, Fe, ct, At, Jt) || er) {
    return ih(Ai, Yn + 8, xn ? f.call(xn, y, N, K, de, Fe, ct, At, Jt) : f(y, N, K, de, Fe, ct, At, Jt));
  } else {
    return Kv(Ai, Yn + 8);
  }
}
function Y_(u, f) {
  const y = u[f];
  if (y === Ya) {
    return undefined;
  } else {
    return y;
  }
}
function nb(u, f, y, N, K, de) {
  const Fe = f + y;
  if (Ku(u, Fe, K)) {
    return ih(u, Fe + 1, de ? N.call(de, K) : N(K));
  } else {
    return Y_(u, Fe + 1);
  }
}
function ib(u, f, y, N, K, de, Fe) {
  const ct = f + y;
  if (Rg(u, ct, K, de)) {
    return ih(u, ct + 2, Fe ? N.call(Fe, K, de) : N(K, de));
  } else {
    return Y_(u, ct + 2);
  }
}
function rb(u, f, y, N, K, de, Fe, ct) {
  const At = f + y;
  if (jv(u, At, K, de, Fe)) {
    return ih(u, At + 3, ct ? N.call(ct, K, de, Fe) : N(K, de, Fe));
  } else {
    return Y_(u, At + 3);
  }
}
function op(u, f, y, N, K, de, Fe, ct, At) {
  const Jt = f + y;
  if (dd(u, Jt, K, de, Fe, ct)) {
    return ih(u, Jt + 4, At ? N.call(At, K, de, Fe, ct) : N(K, de, Fe, ct));
  } else {
    return Y_(u, Jt + 4);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function ALo(u, f) {
  const y = hi();
  let N;
  const K = u + 22;
  if (y.firstCreatePass) {
    N = function oA(u, f) {
      if (f) {
        for (let y = f.length - 1; y >= 0; y--) {
          const N = f[y];
          if (u === N.name) {
            return N;
          }
        }
      }
    }(f, y.pipeRegistry);
    y.data[K] = N;
    if (N.onDestroy) {
      (y.destroyHooks ||= []).push(K, N.onDestroy);
    }
  } else {
    N = y.data[K];
  }
  const de = N.factory ||= Bt(N.type);
  const Fe = me(Y36);
  try {
    const ct = mu(false);
    const At = de();
    mu(ct);
    (function m(u, f, y, N) {
      if (y >= u.data.length) {
        u.data[y] = null;
        u.blueprint[y] = null;
      }
      f[y] = N;
    })(y, Ji(), K, At);
    return At;
  } finally {
    me(Fe);
  }
}
export function lcZ(u, f, y) {
  const N = u + 22;
  const K = Ji();
  const de = Ls(K, N);
  if (Z_(K, N)) {
    return nb(K, wt(), f, de.transform, y, de);
  } else {
    return de.transform(y);
  }
}
export function xi3(u, f, y, N) {
  const K = u + 22;
  const de = Ji();
  const Fe = Ls(de, K);
  if (Z_(de, K)) {
    return ib(de, wt(), f, Fe.transform, y, N, Fe);
  } else {
    return Fe.transform(y, N);
  }
}
export function Dn7(u, f, y, N, K) {
  const de = u + 22;
  const Fe = Ji();
  const ct = Ls(Fe, de);
  if (Z_(Fe, de)) {
    return rb(Fe, wt(), f, ct.transform, y, N, K, ct);
  } else {
    return ct.transform(y, N, K);
  }
}
export function gM2(u, f, y, N, K, de) {
  const Fe = u + 22;
  const ct = Ji();
  const At = Ls(ct, Fe);
  if (Z_(ct, Fe)) {
    return op(ct, wt(), f, At.transform, y, N, K, de, At);
  } else {
    return At.transform(y, N, K, de);
  }
}
function Z_(u, f) {
  return u[1].data[f].pure;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function G_(u) {
  return f => {
    setTimeout(u, undefined, f);
  };
}
export const vpe = class cA extends i.x {
  constructor(f = false) {
    super();
    this.__isAsync = f;
  }
  emit(f) {
    super.next(f);
  }
  subscribe(f, y, N) {
    let K = f;
    let de = y || (() => null);
    let Fe = N;
    if (f && typeof f == "object") {
      var ct;
      var At;
      var Jt;
      const Yn = f;
      K = (ct = Yn.next) === null || ct === undefined ? undefined : ct.bind(Yn);
      de = (At = Yn.error) === null || At === undefined ? undefined : At.bind(Yn);
      Fe = (Jt = Yn.complete) === null || Jt === undefined ? undefined : Jt.bind(Yn);
    }
    if (this.__isAsync) {
      de = G_(de);
      K &&= G_(K);
      Fe &&= G_(Fe);
    }
    const xn = super.subscribe({
      next: K,
      error: de,
      complete: Fe
    });
    if (f instanceof t.w0) {
      f.add(xn);
    }
    return xn;
  }
};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lb() {
  return this._results[hf()]();
}
export class n_E {
  constructor(f = false) {
    this._emitDistinctChangesOnly = f;
    this.dirty = true;
    this._results = [];
    this._changesDetected = false;
    this._changes = null;
    this.length = 0;
    this.first = undefined;
    this.last = undefined;
    const y = hf();
    const N = n_E.prototype;
    N[y] ||= lb;
  }
  get changes() {
    return this._changes ||= new vpe();
  }
  get(f) {
    return this._results[f];
  }
  map(f) {
    return this._results.map(f);
  }
  filter(f) {
    return this._results.filter(f);
  }
  find(f) {
    return this._results.find(f);
  }
  reduce(f, y) {
    return this._results.reduce(f, y);
  }
  forEach(f) {
    this._results.forEach(f);
  }
  some(f) {
    return this._results.some(f);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(f, y) {
    const N = this;
    N.dirty = false;
    const K = Pl(f);
    if (this._changesDetected = !function ru(u, f, y) {
      if (u.length !== f.length) {
        return false;
      }
      for (let N = 0; N < u.length; N++) {
        let K = u[N];
        let de = f[N];
        if (y) {
          K = y(K);
          de = y(de);
        }
        if (de !== K) {
          return false;
        }
      }
      return true;
    }(N._results, K, y)) {
      N._results = K;
      N.length = K.length;
      N.last = K[this.length - 1];
      N.first = K[0];
    }
  }
  notifyOnChanges() {
    if (this._changes && (this._changesDetected || !this._emitDistinctChangesOnly)) {
      this._changes.emit(this);
    }
  }
  setDirty() {
    this.dirty = true;
  }
  destroy() {
    this.changes.complete();
    this.changes.unsubscribe();
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let Rgc = (() => {
  class u {}
  u.__NG_ELEMENT_ID__ = cb;
  return u;
})();
const uA = Rgc;
const dA = class extends uA {
  constructor(f, y, N) {
    super();
    this._declarationLView = f;
    this._declarationTContainer = y;
    this.elementRef = N;
  }
  createEmbeddedView(f, y) {
    const N = this._declarationTContainer.tViews;
    const K = ia(this._declarationLView, N, f, 16, null, N.declTNode, null, null, null, null, y || null);
    K[17] = this._declarationLView[this._declarationTContainer.index];
    const Fe = this._declarationLView[19];
    if (Fe !== null) {
      K[19] = Fe.createEmbeddedView(N);
    }
    zu(N, K, f);
    return new Hv(K);
  }
};
function cb() {
  return F1(ys(), Ji());
}
function F1(u, f) {
  if (u.type & 4) {
    return new dA(f, u, mh(u, f));
  } else {
    return null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let s_b = (() => {
  class u {}
  u.__NG_ELEMENT_ID__ = fA;
  return u;
})();
function fA() {
  return uE(ys(), Ji());
}
const k1 = s_b;
const L1 = class extends k1 {
  constructor(f, y, N) {
    super();
    this._lContainer = f;
    this._hostTNode = y;
    this._hostLView = N;
  }
  get element() {
    return mh(this._hostTNode, this._hostLView);
  }
  get injector() {
    return new Xc(this._hostTNode, this._hostLView);
  }
  get parentInjector() {
    const f = mc(this._hostTNode, this._hostLView);
    if ($l(f)) {
      const y = td(f, this._hostLView);
      const N = Nc(f);
      return new Xc(y[1].data[N + 8], y);
    }
    return new Xc(null, this._hostLView);
  }
  clear() {
    for (; this.length > 0;) {
      this.remove(this.length - 1);
    }
  }
  get(f) {
    const y = v_(this._lContainer);
    return y !== null && y[f] || null;
  }
  get length() {
    return this._lContainer.length - 10;
  }
  createEmbeddedView(f, y, N) {
    let K;
    let de;
    if (typeof N == "number") {
      K = N;
    } else if (N != null) {
      K = N.index;
      de = N.injector;
    }
    const Fe = f.createEmbeddedView(y || {}, de);
    this.insert(Fe, K);
    return Fe;
  }
  createComponent(f, y, N, K, de) {
    const Fe = f && !function Bc(u) {
      return typeof u == "function";
    }
    /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */(f);
    let ct;
    if (Fe) {
      ct = y;
    } else {
      const Yn = y || {};
      ct = Yn.index;
      N = Yn.injector;
      K = Yn.projectableNodes;
      de = Yn.environmentInjector || Yn.ngModuleRef;
    }
    const At = Fe ? f : new Yv(Tr(f));
    const Jt = N || this.parentInjector;
    if (!de && At.ngModule == null) {
      const Ai = (Fe ? Jt : this.parentInjector).get(lqb, null);
      if (Ai) {
        de = Ai;
      }
    }
    const xn = At.create(Jt, K, undefined, de);
    this.insert(xn.hostView, ct);
    return xn;
  }
  insert(f, y) {
    const N = f._lView;
    const K = N[1];
    if (function sl(u) {
      return Pa(u[3]);
    }(N)) {
      const xn = this.indexOf(f);
      if (xn !== -1) {
        this.detach(xn);
      } else {
        const Yn = N[3];
        const Ai = new L1(Yn, Yn[6], Yn[3]);
        Ai.detach(Ai.indexOf(f));
      }
    }
    const de = this._adjustIndex(y);
    const Fe = this._lContainer;
    (function _h(u, f, y, N) {
      const K = 10 + N;
      const de = y.length;
      if (N > 0) {
        y[K - 1][4] = f;
      }
      if (N < de - 10) {
        f[4] = y[K];
        Wc(y, 10 + N, f);
      } else {
        y.push(f);
        f[4] = null;
      }
      f[3] = y;
      const Fe = f[17];
      if (Fe !== null && y !== Fe) {
        (function Id(u, f) {
          const y = u[9];
          if (f[16] !== f[3][3][16]) {
            u[2] = true;
          }
          if (y === null) {
            u[9] = [f];
          } else {
            y.push(f);
          }
        })(Fe, f);
      }
      const ct = f[19];
      if (ct !== null) {
        ct.insertView(u);
      }
      f[2] |= 64;
    })(K, N, Fe, de);
    const ct = $f(de, Fe);
    const At = N[11];
    const Jt = bh(At, Fe[7]);
    if (Jt !== null) {
      (function um(u, f, y, N, K, de) {
        N[0] = K;
        N[6] = f;
        Hh(u, N, y, 1, K, de);
      })(K, Fe[6], At, N, Jt, ct);
    }
    f.attachToViewContainerRef();
    Wc(j_(Fe), de, f);
    return f;
  }
  move(f, y) {
    return this.insert(f, y);
  }
  indexOf(f) {
    const y = v_(this._lContainer);
    if (y !== null) {
      return y.indexOf(f);
    } else {
      return -1;
    }
  }
  remove(f) {
    const y = this._adjustIndex(f, -1);
    const N = Cf(this._lContainer, y);
    if (N) {
      su(j_(this._lContainer), y);
      Eh(N[1], N);
    }
  }
  detach(f) {
    const y = this._adjustIndex(f, -1);
    const N = Cf(this._lContainer, y);
    if (N && su(j_(this._lContainer), y) != null) {
      return new Hv(N);
    } else {
      return null;
    }
  }
  _adjustIndex(f, y = 0) {
    return f ?? this.length + y;
  }
};
function v_(u) {
  return u[8];
}
function j_(u) {
  return u[8] ||= [];
}
function uE(u, f) {
  let y;
  const N = f[u.index];
  if (Pa(N)) {
    y = N;
  } else {
    let K;
    if (u.type & 8) {
      K = Xi(N);
    } else {
      const de = f[11];
      K = de.createComment("");
      const Fe = Ss(u, f);
      cd(de, bh(de, Fe), K, function Tf(u, f) {
        return u.nextSibling(f);
      }(de, Fe), false);
    }
    f[u.index] = y = Cy(N, f, K, u);
    Om(f, y);
  }
  return new L1(y, u, f);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Q_ {
  constructor(f) {
    this.queryList = f;
    this.matches = null;
  }
  clone() {
    return new Q_(this.queryList);
  }
  setDirty() {
    this.queryList.setDirty();
  }
}
class N1 {
  constructor(f = []) {
    this.queries = f;
  }
  createEmbeddedView(f) {
    const y = f.queries;
    if (y !== null) {
      const N = f.contentQueries !== null ? f.contentQueries[0] : y.length;
      const K = [];
      for (let de = 0; de < N; de++) {
        const Fe = y.getByIndex(de);
        K.push(this.queries[Fe.indexInDeclarationView].clone());
      }
      return new N1(K);
    }
    return null;
  }
  insertView(f) {
    this.dirtyQueriesWithMatches(f);
  }
  detachView(f) {
    this.dirtyQueriesWithMatches(f);
  }
  dirtyQueriesWithMatches(f) {
    for (let y = 0; y < this.queries.length; y++) {
      if (q_(f, y).matches !== null) {
        this.queries[y].setDirty();
      }
    }
  }
}
class dE {
  constructor(f, y, N = null) {
    this.predicate = f;
    this.flags = y;
    this.read = N;
  }
}
class J_ {
  constructor(f = []) {
    this.queries = f;
  }
  elementStart(f, y) {
    for (let N = 0; N < this.queries.length; N++) {
      this.queries[N].elementStart(f, y);
    }
  }
  elementEnd(f) {
    for (let y = 0; y < this.queries.length; y++) {
      this.queries[y].elementEnd(f);
    }
  }
  embeddedTView(f) {
    let y = null;
    for (let N = 0; N < this.length; N++) {
      const K = y !== null ? y.length : 0;
      const de = this.getByIndex(N).embeddedTView(f, K);
      if (de) {
        de.indexInDeclarationView = N;
        if (y !== null) {
          y.push(de);
        } else {
          y = [de];
        }
      }
    }
    if (y !== null) {
      return new J_(y);
    } else {
      return null;
    }
  }
  template(f, y) {
    for (let N = 0; N < this.queries.length; N++) {
      this.queries[N].template(f, y);
    }
  }
  getByIndex(f) {
    return this.queries[f];
  }
  get length() {
    return this.queries.length;
  }
  track(f) {
    this.queries.push(f);
  }
}
class U1 {
  constructor(f, y = -1) {
    this.metadata = f;
    this.matches = null;
    this.indexInDeclarationView = -1;
    this.crossesNgTemplate = false;
    this._appliesToNextNode = true;
    this._declarationNodeIndex = y;
  }
  elementStart(f, y) {
    if (this.isApplyingToNode(y)) {
      this.matchTNode(f, y);
    }
  }
  elementEnd(f) {
    if (this._declarationNodeIndex === f.index) {
      this._appliesToNextNode = false;
    }
  }
  template(f, y) {
    this.elementStart(f, y);
  }
  embeddedTView(f, y) {
    if (this.isApplyingToNode(f)) {
      this.crossesNgTemplate = true;
      this.addMatch(-f.index, y);
      return new U1(this.metadata);
    } else {
      return null;
    }
  }
  isApplyingToNode(f) {
    if (this._appliesToNextNode && (this.metadata.flags & 1) != 1) {
      const y = this._declarationNodeIndex;
      let N = f.parent;
      for (; N !== null && N.type & 8 && N.index !== y;) {
        N = N.parent;
      }
      return y === (N !== null ? N.index : -1);
    }
    return this._appliesToNextNode;
  }
  matchTNode(f, y) {
    const N = this.metadata.predicate;
    if (Array.isArray(N)) {
      for (let K = 0; K < N.length; K++) {
        const de = N[K];
        this.matchTNodeWithReadOption(f, y, mA(y, de));
        this.matchTNodeWithReadOption(f, y, vu(y, f, de, false, false));
      }
    } else if (N === Rgc) {
      if (y.type & 4) {
        this.matchTNodeWithReadOption(f, y, -1);
      }
    } else {
      this.matchTNodeWithReadOption(f, y, vu(y, f, N, false, false));
    }
  }
  matchTNodeWithReadOption(f, y, N) {
    if (N !== null) {
      const K = this.metadata.read;
      if (K !== null) {
        if (K === SBq || K === s_b || K === Rgc && y.type & 4) {
          this.addMatch(y.index, -2);
        } else {
          const de = vu(y, f, K, false, false);
          if (de !== null) {
            this.addMatch(y.index, de);
          }
        }
      } else {
        this.addMatch(y.index, N);
      }
    }
  }
  addMatch(f, y) {
    if (this.matches === null) {
      this.matches = [f, y];
    } else {
      this.matches.push(f, y);
    }
  }
}
function mA(u, f) {
  const y = u.localNames;
  if (y !== null) {
    for (let N = 0; N < y.length; N += 2) {
      if (y[N] === f) {
        return y[N + 1];
      }
    }
  }
  return null;
}
function vA(u, f, y, N) {
  if (y === -1) {
    return function ub(u, f) {
      if (u.type & 11) {
        return mh(u, f);
      } else if (u.type & 4) {
        return F1(u, f);
      } else {
        return null;
      }
    }(f, u);
  } else if (y === -2) {
    return function $_(u, f, y) {
      if (y === SBq) {
        return mh(f, u);
      } else if (y === Rgc) {
        return F1(f, u);
      } else if (y === s_b) {
        return uE(f, u);
      } else {
        return undefined;
      }
    }(u, f, N);
  } else {
    return rc(u, u[1], y, f);
  }
}
function db(u, f, y, N) {
  const K = f[19].queries[N];
  if (K.matches === null) {
    const de = u.data;
    const Fe = y.matches;
    const ct = [];
    for (let At = 0; At < Fe.length; At += 2) {
      const Jt = Fe[At];
      ct.push(Jt < 0 ? null : vA(f, de[Jt], Fe[At + 1], y.metadata.read));
    }
    K.matches = ct;
  }
  return K.matches;
}
function X_(u, f, y, N) {
  const K = u.queries.getByIndex(y);
  const de = K.matches;
  if (de !== null) {
    const Fe = db(u, f, K, y);
    for (let ct = 0; ct < de.length; ct += 2) {
      const At = de[ct];
      if (At > 0) {
        N.push(Fe[ct / 2]);
      } else {
        const Jt = de[ct + 1];
        const xn = f[-At];
        for (let Yn = 10; Yn < xn.length; Yn++) {
          const Ai = xn[Yn];
          if (Ai[17] === Ai[3]) {
            X_(Ai[1], Ai, Jt, N);
          }
        }
        if (xn[9] !== null) {
          const Yn = xn[9];
          for (let Ai = 0; Ai < Yn.length; Ai++) {
            const er = Yn[Ai];
            X_(er[1], er, Jt, N);
          }
        }
      }
    }
  }
  return N;
}
export function iGM(u) {
  const f = Ji();
  const y = hi();
  const N = Kl();
  Bl(N + 1);
  const K = q_(y, N);
  if (u.dirty && function wa(u) {
    return (u[2] & 4) == 4;
  }(f) === ((K.metadata.flags & 2) == 2)) {
    if (K.matches === null) {
      u.reset([]);
    } else {
      const de = K.crossesNgTemplate ? X_(y, f, N, []) : db(y, f, K, N);
      u.reset(de, Jp);
      u.notifyOnChanges();
    }
    return true;
  }
  return false;
}
export function Gf(u, f, y) {
  const N = hi();
  if (N.firstCreatePass) {
    gb(N, new dE(u, f, y), -1);
    if ((f & 2) == 2) {
      N.staticViewQueries = true;
    }
  }
  pb(N, Ji(), f);
}
export function Suo(u, f, y, N) {
  const K = hi();
  if (K.firstCreatePass) {
    const de = ys();
    gb(K, new dE(f, y, N), de.index);
    (function _A(u, f) {
      const y = u.contentQueries ||= [];
      if (f !== (y.length ? y[y.length - 1] : -1)) {
        y.push(u.queries.length - 1, f);
      }
    })(K, u);
    if ((y & 2) == 2) {
      K.staticContentQueries = true;
    }
  }
  pb(K, Ji(), y);
}
export function CRH() {
  return function yA(u, f) {
    return u[19].queries[f].queryList;
  }(Ji(), Kl());
}
function pb(u, f, y) {
  const N = new n_E((y & 4) == 4);
  Mp(u, f, N, N.destroy);
  if (f[19] === null) {
    f[19] = new N1();
  }
  f[19].queries.push(new Q_(N));
}
function gb(u, f, y) {
  if (u.queries === null) {
    u.queries = new J_();
  }
  u.queries.track(new U1(f, y));
}
function q_(u, f) {
  return u.queries.getByIndex(f);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function W1O(u, f) {
  return F1(u, f);
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
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Te(...u) {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const ip1 = new OlP("Application Initializer");
export let CZH = (() => {
  class u {
    constructor(y) {
      this.appInits = y;
      this.resolve = Te;
      this.reject = Te;
      this.initialized = false;
      this.done = false;
      this.donePromise = new Promise((N, K) => {
        this.resolve = N;
        this.reject = K;
      });
    }
    runInitializers() {
      if (this.initialized) {
        return;
      }
      const y = [];
      const N = () => {
        this.done = true;
        this.resolve();
      };
      if (this.appInits) {
        for (let K = 0; K < this.appInits.length; K++) {
          const de = this.appInits[K]();
          if (QGY(de)) {
            y.push(de);
          } else if (CqO(de)) {
            const Fe = new Promise((ct, At) => {
              de.subscribe({
                complete: ct,
                error: At
              });
            });
            y.push(Fe);
          }
        }
      }
      Promise.all(y).then(() => {
        N();
      }).catch(K => {
        this.reject(K);
      });
      if (y.length === 0) {
        N();
      }
      this.initialized = true;
    }
  }
  u.ɵfac = function (y) {
    return new (y || u)(LFG(ip1, 8));
  };
  u.ɵprov = Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "root"
  });
  return u;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const AFp = new OlP("AppId", {
  providedIn: "root",
  factory: function Ot() {
    return `${nn()}${nn()}${nn()}`;
  }
});
function nn() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
export const g9A = new OlP("Platform Initializer");
export const Lbi = new OlP("Platform ID", {
  providedIn: "platform",
  factory: () => "unknown"
});
export const tb = new OlP("appBootstrapListener");
export const QbO = new OlP("AnimationModuleType");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export let c2e = (() => {
  class u {
    log(y) {
      console.log(y);
    }
    warn(y) {
      console.warn(y);
    }
  }
  u.ɵfac = function (y) {
    return new (y || u)();
  };
  u.ɵprov = Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "platform"
  });
  return u;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const soG = new OlP("LocaleId", {
  providedIn: "root",
  factory: () => f3M(soG, XFs.Optional | XFs.SkipSelf) || function or() {
    return typeof $localize !== "undefined" && $localize.locale || Ci;
  }()
});
export const EJc = new OlP("DefaultCurrencyCode", {
  providedIn: "root",
  factory: () => "USD"
});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ji {
  constructor(f, y) {
    this.ngModuleFactory = f;
    this.componentFactories = y;
  }
}
export let Sil = (() => {
  class u {
    compileModuleSync(y) {
      return new $d(y);
    }
    compileModuleAsync(y) {
      return Promise.resolve(this.compileModuleSync(y));
    }
    compileModuleAndAllComponentsSync(y) {
      const N = this.compileModuleSync(y);
      const de = tf(oi(y).declarations).reduce((Fe, ct) => {
        const At = Tr(ct);
        if (At) {
          Fe.push(new Yv(At));
        }
        return Fe;
      }, []);
      return new ji(N, de);
    }
    compileModuleAndAllComponentsAsync(y) {
      return Promise.resolve(this.compileModuleAndAllComponentsSync(y));
    }
    clearCache() {}
    clearCacheFor(y) {}
    getModuleId(y) {}
  }
  u.ɵfac = function (y) {
    return new (y || u)();
  };
  u.ɵprov = Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "root"
  });
  return u;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ba = (() => Promise.resolve(0))();
function hr(u) {
  if (typeof Zone === "undefined") {
    Ba.then(() => {
      if (u) {
        u.apply(null, null);
      }
    });
  } else {
    Zone.current.scheduleMicroTask("scheduleMicrotask", u);
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
export class R0b {
  constructor({
    enableLongStackTrace: f = false,
    shouldCoalesceEventChangeDetection: y = false,
    shouldCoalesceRunChangeDetection: N = false
  }) {
    this.hasPendingMacrotasks = false;
    this.hasPendingMicrotasks = false;
    this.isStable = true;
    this.onUnstable = new vpe(false);
    this.onMicrotaskEmpty = new vpe(false);
    this.onStable = new vpe(false);
    this.onError = new vpe(false);
    if (typeof Zone === "undefined") {
      throw new vHH(908, false);
    }
    Zone.assertZonePatched();
    const K = this;
    K._nesting = 0;
    K._outer = K._inner = Zone.current;
    if (Zone.AsyncStackTaggingZoneSpec) {
      const de = Zone.AsyncStackTaggingZoneSpec;
      K._inner = K._inner.fork(new de("Angular"));
    }
    if (Zone.TaskTrackingZoneSpec) {
      K._inner = K._inner.fork(new Zone.TaskTrackingZoneSpec());
    }
    if (f && Zone.longStackTraceZoneSpec) {
      K._inner = K._inner.fork(Zone.longStackTraceZoneSpec);
    }
    K.shouldCoalesceEventChangeDetection = !N && y;
    K.shouldCoalesceRunChangeDetection = N;
    K.lastRequestAnimationFrameId = -1;
    K.nativeRequestAnimationFrame = function oo() {
      let u = dqk.requestAnimationFrame;
      let f = dqk.cancelAnimationFrame;
      if (typeof Zone !== "undefined" && u && f) {
        const y = u[Zone.__symbol__("OriginalDelegate")];
        if (y) {
          u = y;
        }
        const N = f[Zone.__symbol__("OriginalDelegate")];
        if (N) {
          f = N;
        }
      }
      return {
        nativeRequestAnimationFrame: u,
        nativeCancelAnimationFrame: f
      };
    }().nativeRequestAnimationFrame;
    (function Xn(u) {
      const f = () => {
        (function va(u) {
          if (!u.isCheckStableRunning && u.lastRequestAnimationFrameId === -1) {
            u.lastRequestAnimationFrameId = u.nativeRequestAnimationFrame.call(dqk, () => {
              u.fakeTopEventTask ||= Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                u.lastRequestAnimationFrameId = -1;
                Pi(u);
                u.isCheckStableRunning = true;
                Ro(u);
                u.isCheckStableRunning = false;
              }, undefined, () => {}, () => {});
              u.fakeTopEventTask.invoke();
            });
            Pi(u);
          }
        })(u);
      };
      u._inner = u._inner.fork({
        name: "angular",
        properties: {
          isAngularZone: true
        },
        onInvokeTask: (y, N, K, de, Fe, ct) => {
          try {
            bi(u);
            return y.invokeTask(K, de, Fe, ct);
          } finally {
            if (u.shouldCoalesceEventChangeDetection && de.type === "eventTask" || u.shouldCoalesceRunChangeDetection) {
              f();
            }
            vi(u);
          }
        },
        onInvoke: (y, N, K, de, Fe, ct, At) => {
          try {
            bi(u);
            return y.invoke(K, de, Fe, ct, At);
          } finally {
            if (u.shouldCoalesceRunChangeDetection) {
              f();
            }
            vi(u);
          }
        },
        onHasTask: (y, N, K, de) => {
          y.hasTask(K, de);
          if (N === K) {
            if (de.change == "microTask") {
              u._hasPendingMicrotasks = de.microTask;
              Pi(u);
              Ro(u);
            } else if (de.change == "macroTask") {
              u.hasPendingMacrotasks = de.macroTask;
            }
          }
        },
        onHandleError: (y, N, K, de) => {
          y.handleError(K, de);
          u.runOutsideAngular(() => u.onError.emit(de));
          return false;
        }
      });
    })(K);
  }
  static isInAngularZone() {
    return typeof Zone !== "undefined" && Zone.current.get("isAngularZone") === true;
  }
  static assertInAngularZone() {
    if (!R0b.isInAngularZone()) {
      throw new vHH(909, false);
    }
  }
  static assertNotInAngularZone() {
    if (R0b.isInAngularZone()) {
      throw new vHH(909, false);
    }
  }
  run(f, y, N) {
    return this._inner.run(f, y, N);
  }
  runTask(f, y, N, K) {
    const de = this._inner;
    const Fe = de.scheduleEventTask("NgZoneEvent: " + K, f, Lo, Te, Te);
    try {
      return de.runTask(Fe, y, N);
    } finally {
      de.cancelTask(Fe);
    }
  }
  runGuarded(f, y, N) {
    return this._inner.runGuarded(f, y, N);
  }
  runOutsideAngular(f) {
    return this._outer.run(f);
  }
}
const Lo = {};
function Ro(u) {
  if (u._nesting == 0 && !u.hasPendingMicrotasks && !u.isStable) {
    try {
      u._nesting++;
      u.onMicrotaskEmpty.emit(null);
    } finally {
      u._nesting--;
      if (!u.hasPendingMicrotasks) {
        try {
          u.runOutsideAngular(() => u.onStable.emit(null));
        } finally {
          u.isStable = true;
        }
      }
    }
  }
}
function Pi(u) {
  u.hasPendingMicrotasks = !!u._hasPendingMicrotasks || (!!u.shouldCoalesceEventChangeDetection || !!u.shouldCoalesceRunChangeDetection) && u.lastRequestAnimationFrameId !== -1;
}
function bi(u) {
  u._nesting++;
  if (u.isStable) {
    u.isStable = false;
    u.onUnstable.emit(null);
  }
}
function vi(u) {
  u._nesting--;
  Ro(u);
}
class Cr {
  constructor() {
    this.hasPendingMicrotasks = false;
    this.hasPendingMacrotasks = false;
    this.isStable = true;
    this.onUnstable = new vpe();
    this.onMicrotaskEmpty = new vpe();
    this.onStable = new vpe();
    this.onError = new vpe();
  }
  run(f, y, N) {
    return f.apply(y, N);
  }
  runGuarded(f, y, N) {
    return f.apply(y, N);
  }
  runOutsideAngular(f) {
    return f();
  }
  runTask(f, y, N, K) {
    return f.apply(y, N);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const lri = new OlP("");
export const rWj = new OlP("");
let ul;
export let dDg = (() => {
  class u {
    constructor(y, N, K) {
      this._ngZone = y;
      this.registry = N;
      this._pendingCount = 0;
      this._isZoneStable = true;
      this._didWork = false;
      this._callbacks = [];
      this.taskTrackingZone = null;
      if (!ul) {
        (function $a(u) {
          ul = u;
        })(K);
        K.addToWindow(N);
      }
      this._watchAngularEvents();
      y.run(() => {
        this.taskTrackingZone = typeof Zone === "undefined" ? null : Zone.current.get("TaskTrackingZone");
      });
    }
    _watchAngularEvents() {
      this._ngZone.onUnstable.subscribe({
        next: () => {
          this._didWork = true;
          this._isZoneStable = false;
        }
      });
      this._ngZone.runOutsideAngular(() => {
        this._ngZone.onStable.subscribe({
          next: () => {
            R0b.assertNotInAngularZone();
            hr(() => {
              this._isZoneStable = true;
              this._runCallbacksIfReady();
            });
          }
        });
      });
    }
    increasePendingRequestCount() {
      this._pendingCount += 1;
      this._didWork = true;
      return this._pendingCount;
    }
    decreasePendingRequestCount() {
      this._pendingCount -= 1;
      if (this._pendingCount < 0) {
        throw new Error("pending async requests below zero");
      }
      this._runCallbacksIfReady();
      return this._pendingCount;
    }
    isStable() {
      return this._isZoneStable && this._pendingCount === 0 && !this._ngZone.hasPendingMacrotasks;
    }
    _runCallbacksIfReady() {
      if (this.isStable()) {
        hr(() => {
          for (; this._callbacks.length !== 0;) {
            let y = this._callbacks.pop();
            clearTimeout(y.timeoutId);
            y.doneCb(this._didWork);
          }
          this._didWork = false;
        });
      } else {
        let y = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(N => !N.updateCb || !N.updateCb(y) || (clearTimeout(N.timeoutId), false));
        this._didWork = true;
      }
    }
    getPendingTasks() {
      if (this.taskTrackingZone) {
        return this.taskTrackingZone.macroTasks.map(y => ({
          source: y.source,
          creationLocation: y.creationLocation,
          data: y.data
        }));
      } else {
        return [];
      }
    }
    addCallback(y, N, K) {
      let de = -1;
      if (N && N > 0) {
        de = setTimeout(() => {
          this._callbacks = this._callbacks.filter(Fe => Fe.timeoutId !== de);
          y(this._didWork, this.getPendingTasks());
        }, N);
      }
      this._callbacks.push({
        doneCb: y,
        timeoutId: de,
        updateCb: K
      });
    }
    whenStable(y, N, K) {
      if (K && !this.taskTrackingZone) {
        throw new Error("Task tracking zone is required when passing an update callback to whenStable(). Is \"zone.js/plugins/task-tracking\" loaded?");
      }
      this.addCallback(y, N, K);
      this._runCallbacksIfReady();
    }
    getPendingRequestCount() {
      return this._pendingCount;
    }
    registerApplication(y) {
      this.registry.registerApplication(y, this);
    }
    unregisterApplication(y) {
      this.registry.unregisterApplication(y);
    }
    findProviders(y, N, K) {
      return [];
    }
  }
  u.ɵfac = function (y) {
    return new (y || u)(LFG(R0b), LFG(eoX), LFG(rWj));
  };
  u.ɵprov = Yz7({
    token: u,
    factory: u.ɵfac
  });
  return u;
})();
export let eoX = (() => {
  class u {
    constructor() {
      this._applications = new Map();
    }
    registerApplication(y, N) {
      this._applications.set(y, N);
    }
    unregisterApplication(y) {
      this._applications.delete(y);
    }
    unregisterAllApplications() {
      this._applications.clear();
    }
    getTestability(y) {
      return this._applications.get(y) || null;
    }
    getAllTestabilities() {
      return Array.from(this._applications.values());
    }
    getAllRootElements() {
      return Array.from(this._applications.keys());
    }
    findTestabilityInTree(y, N = true) {
      var de;
      return ((de = ul) === null || de === undefined ? undefined : de.findTestabilityInTree(this, y, N)) ?? null;
    }
  }
  u.ɵfac = function (y) {
    return new (y || u)();
  };
  u.ɵprov = Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "platform"
  });
  return u;
})();
let no = null;
const Lc = new OlP("AllowMultipleToken");
const xc = new OlP("PlatformDestroyListeners");
export class PXZ {
  constructor(f, y) {
    this.name = f;
    this.token = y;
  }
}
export function eFA(u, f, y = []) {
  const N = `Platform: ${f}`;
  const K = new OlP(N);
  return (de = []) => {
    let Fe = Hg();
    if (!Fe || Fe.injector.get(Lc, false)) {
      const ct = [...y, ...de, {
        provide: K,
        useValue: true
      }];
      if (u) {
        u(ct);
      } else {
        (function Nf(u) {
          if (no && !no.get(Lc, false)) {
            throw new vHH(400, false);
          }
          no = u;
          const f = u.get(a0);
          (function Uf(u) {
            const f = u.get(g9A, null);
            if (f) {
              f.forEach(y => y());
            }
          })(u);
        })(function nu(u = [], f) {
          return zs3.create({
            name: f,
            providers: [{
              provide: zSh,
              useValue: "platform"
            }, {
              provide: xc,
              useValue: new Set([() => no = null])
            }, ...u]
          });
        }(ct, N));
      }
    }
    return function Xa(u) {
      const f = Hg();
      if (!f) {
        throw new vHH(401, false);
      }
      return f;
    }();
  };
}
function Hg() {
  var f;
  return ((f = no) === null || f === undefined ? undefined : f.get(a0)) ?? null;
}
let a0 = (() => {
  class u {
    constructor(y) {
      this._injector = y;
      this._modules = [];
      this._destroyListeners = [];
      this._destroyed = false;
    }
    bootstrapModuleFactory(y, N) {
      const K = function b_(u, f) {
        let y;
        y = u === "noop" ? new Cr() : (u === "zone.js" ? undefined : u) || new R0b(f);
        return y;
      }(N?.ngZone, function Q0(u) {
        return {
          enableLongStackTrace: false,
          shouldCoalesceEventChangeDetection: !!u && !!u.ngZoneEventCoalescing || false,
          shouldCoalesceRunChangeDetection: !!u && !!u.ngZoneRunCoalescing || false
        };
      }(N));
      const de = [{
        provide: R0b,
        useValue: K
      }];
      return K.run(() => {
        const Fe = zs3.create({
          providers: de,
          parent: this.injector,
          name: y.moduleType.name
        });
        const ct = y.create(Fe);
        const At = ct.injector.get(qLn, null);
        if (!At) {
          throw new vHH(402, false);
        }
        K.runOutsideAngular(() => {
          const Jt = K.onError.subscribe({
            next: xn => {
              At.handleError(xn);
            }
          });
          ct.onDestroy(() => {
            H1(this._modules, ct);
            Jt.unsubscribe();
          });
        });
        return function _E(u, f, y) {
          try {
            const N = y();
            if (QGY(N)) {
              return N.catch(K => {
                f.runOutsideAngular(() => u.handleError(K));
                throw K;
              });
            } else {
              return N;
            }
          } catch (N) {
            f.runOutsideAngular(() => u.handleError(N));
            throw N;
          }
        }(At, K, () => {
          const Jt = ct.injector.get(CZH);
          Jt.runInitializers();
          return Jt.donePromise.then(() => {
            (function e0(u) {
              st(u, "Expected localeId to be defined");
              if (typeof u == "string") {
                Bm = u.toLowerCase().replace(/_/g, "-");
              }
            })(ct.injector.get(soG, Ci) || Ci);
            this._moduleDoBootstrap(ct);
            return ct;
          });
        });
      });
    }
    bootstrapModule(y, N = []) {
      const K = EE({}, N);
      return function lh(u, f, y) {
        const N = new $d(y);
        return Promise.resolve(N);
      }(0, 0, y).then(de => this.bootstrapModuleFactory(de, K));
    }
    _moduleDoBootstrap(y) {
      const N = y.injector.get(z2F);
      if (y._bootstrapComponents.length > 0) {
        y._bootstrapComponents.forEach(K => N.bootstrap(K));
      } else {
        if (!y.instance.ngDoBootstrap) {
          throw new vHH(403, false);
        }
        y.instance.ngDoBootstrap(N);
      }
      this._modules.push(y);
    }
    onDestroy(y) {
      this._destroyListeners.push(y);
    }
    get injector() {
      return this._injector;
    }
    destroy() {
      if (this._destroyed) {
        throw new vHH(404, false);
      }
      this._modules.slice().forEach(N => N.destroy());
      this._destroyListeners.forEach(N => N());
      const y = this._injector.get(xc, null);
      if (y) {
        y.forEach(N => N());
        y.clear();
      }
      this._destroyed = true;
    }
    get destroyed() {
      return this._destroyed;
    }
  }
  u.ɵfac = function (y) {
    return new (y || u)(LFG(zs3));
  };
  u.ɵprov = Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "platform"
  });
  return u;
})();
function EE(u, f) {
  if (Array.isArray(f)) {
    return f.reduce(EE, u);
  } else {
    return {
      ...u,
      ...f
    };
  }
}
export let z2F = (() => {
  class u {
    constructor(y, N, K) {
      this._zone = y;
      this._injector = N;
      this._exceptionHandler = K;
      this._bootstrapListeners = [];
      this._views = [];
      this._runningTick = false;
      this._stable = true;
      this._destroyed = false;
      this._destroyListeners = [];
      this.componentTypes = [];
      this.components = [];
      this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
        next: () => {
          this._zone.run(() => {
            this.tick();
          });
        }
      });
      const de = new b.y(ct => {
        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks;
        this._zone.runOutsideAngular(() => {
          ct.next(this._stable);
          ct.complete();
        });
      });
      const Fe = new b.y(ct => {
        let At;
        this._zone.runOutsideAngular(() => {
          At = this._zone.onStable.subscribe(() => {
            R0b.assertNotInAngularZone();
            hr(() => {
              if (!this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks) {
                this._stable = true;
                ct.next(true);
              }
            });
          });
        });
        const Jt = this._zone.onUnstable.subscribe(() => {
          R0b.assertInAngularZone();
          if (this._stable) {
            this._stable = false;
            this._zone.runOutsideAngular(() => {
              ct.next(false);
            });
          }
        });
        return () => {
          At.unsubscribe();
          Jt.unsubscribe();
        };
      });
      this.isStable = (0, k.T)(de, Fe.pipe((0, M.B)()));
    }
    get destroyed() {
      return this._destroyed;
    }
    get injector() {
      return this._injector;
    }
    bootstrap(y, N) {
      const K = y instanceof ph;
      if (!this._injector.get(CZH).done) {
        if (!K) {
          QP$(y);
        }
        throw new vHH(405, false);
      }
      let Fe;
      Fe = K ? y : this._injector.get(_Vd).resolveComponentFactory(y);
      this.componentTypes.push(Fe.componentType);
      const ct = function Us(u) {
        return u.isBoundToModule;
      }(Fe) ? undefined : this._injector.get(h0i);
      const Jt = Fe.create(zs3.NULL, [], N || Fe.selector, ct);
      const xn = Jt.location.nativeElement;
      const Yn = Jt.injector.get(lri, null);
      Yn?.registerApplication(xn);
      Jt.onDestroy(() => {
        this.detachView(Jt.hostView);
        H1(this.components, Jt);
        Yn?.unregisterApplication(xn);
      });
      this._loadComponent(Jt);
      return Jt;
    }
    tick() {
      if (this._runningTick) {
        throw new vHH(101, false);
      }
      try {
        this._runningTick = true;
        for (let y of this._views) {
          y.detectChanges();
        }
      } catch (y) {
        this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(y));
      } finally {
        this._runningTick = false;
      }
    }
    attachView(y) {
      const N = y;
      this._views.push(N);
      N.attachToAppRef(this);
    }
    detachView(y) {
      const N = y;
      H1(this._views, N);
      N.detachFromAppRef();
    }
    _loadComponent(y) {
      this.attachView(y.hostView);
      this.tick();
      this.components.push(y);
      this._injector.get(tb, []).concat(this._bootstrapListeners).forEach(K => K(y));
    }
    ngOnDestroy() {
      if (!this._destroyed) {
        try {
          this._destroyListeners.forEach(y => y());
          this._views.slice().forEach(y => y.destroy());
          this._onMicrotaskEmptySubscription.unsubscribe();
        } finally {
          this._destroyed = true;
          this._views = [];
          this._bootstrapListeners = [];
          this._destroyListeners = [];
        }
      }
    }
    onDestroy(y) {
      this._destroyListeners.push(y);
      return () => H1(this._destroyListeners, y);
    }
    destroy() {
      if (this._destroyed) {
        throw new vHH(406, false);
      }
      const y = this._injector;
      if (y.destroy && !y.destroyed) {
        y.destroy();
      }
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  }
  u.ɵfac = function (y) {
    return new (y || u)(LFG(R0b), LFG(lqb), LFG(qLn));
  };
  u.ɵprov = Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "root"
  });
  return u;
})();
function H1(u, f) {
  const y = u.indexOf(f);
  if (y > -1) {
    u.splice(y, 1);
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Fb = true;
let kb = false;
export function X6Q() {
  kb = true;
  return Fb;
}
export function G48() {
  if (kb) {
    throw new Error("Cannot enable prod mode after platform setup.");
  }
  Fb = false;
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
export let sBO = (() => {
  class u {}
  u.__NG_ELEMENT_ID__ = HA;
  return u;
})();
function HA(u) {
  return function WA(u, f, y) {
    if (dl(u) && !y) {
      const N = sr(u.index, f);
      return new Hv(N, N);
    }
    if (u.type & 47) {
      return new Hv(f[16], f);
    } else {
      return null;
    }
  }
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */(ys(), Ji(), (u & 16) == 16);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class A_ {
  constructor() {}
  supports(f) {
    return sIi(f);
  }
  create(f) {
    return new Wy(f);
  }
}
const n1 = (u, f) => f;
class Wy {
  constructor(f) {
    this.length = 0;
    this._linkedRecords = null;
    this._unlinkedRecords = null;
    this._previousItHead = null;
    this._itHead = null;
    this._itTail = null;
    this._additionsHead = null;
    this._additionsTail = null;
    this._movesHead = null;
    this._movesTail = null;
    this._removalsHead = null;
    this._removalsTail = null;
    this._identityChangesHead = null;
    this._identityChangesTail = null;
    this._trackByFn = f || n1;
  }
  forEachItem(f) {
    let y;
    for (y = this._itHead; y !== null; y = y._next) {
      f(y);
    }
  }
  forEachOperation(f) {
    let y = this._itHead;
    let N = this._removalsHead;
    let K = 0;
    let de = null;
    for (; y || N;) {
      const Fe = !N || y && y.currentIndex < fx(N, K, de) ? y : N;
      const ct = fx(Fe, K, de);
      const At = Fe.currentIndex;
      if (Fe === N) {
        K--;
        N = N._nextRemoved;
      } else {
        y = y._next;
        if (Fe.previousIndex == null) {
          K++;
        } else {
          de ||= [];
          const Jt = ct - K;
          const xn = At - K;
          if (Jt != xn) {
            for (let Ai = 0; Ai < Jt; Ai++) {
              const er = Ai < de.length ? de[Ai] : de[Ai] = 0;
              const Nr = er + Ai;
              if (xn <= Nr && Nr < Jt) {
                de[Ai] = er + 1;
              }
            }
            de[Fe.previousIndex] = xn - Jt;
          }
        }
      }
      if (ct !== At) {
        f(Fe, ct, At);
      }
    }
  }
  forEachPreviousItem(f) {
    let y;
    for (y = this._previousItHead; y !== null; y = y._nextPrevious) {
      f(y);
    }
  }
  forEachAddedItem(f) {
    let y;
    for (y = this._additionsHead; y !== null; y = y._nextAdded) {
      f(y);
    }
  }
  forEachMovedItem(f) {
    let y;
    for (y = this._movesHead; y !== null; y = y._nextMoved) {
      f(y);
    }
  }
  forEachRemovedItem(f) {
    let y;
    for (y = this._removalsHead; y !== null; y = y._nextRemoved) {
      f(y);
    }
  }
  forEachIdentityChange(f) {
    let y;
    for (y = this._identityChangesHead; y !== null; y = y._nextIdentityChange) {
      f(y);
    }
  }
  diff(f) {
    if (f == null) {
      f = [];
    }
    if (!sIi(f)) {
      throw new vHH(900, false);
    }
    if (this.check(f)) {
      return this;
    } else {
      return null;
    }
  }
  onDestroy() {}
  check(f) {
    this._reset();
    let K;
    let de;
    let Fe;
    let y = this._itHead;
    let N = false;
    if (Array.isArray(f)) {
      this.length = f.length;
      for (let ct = 0; ct < this.length; ct++) {
        de = f[ct];
        Fe = this._trackByFn(ct, de);
        if (y !== null && Object.is(y.trackById, Fe)) {
          if (N) {
            y = this._verifyReinsertion(y, de, Fe, ct);
          }
          if (!Object.is(y.item, de)) {
            this._addIdentityChange(y, de);
          }
        } else {
          y = this._mismatch(y, de, Fe, ct);
          N = true;
        }
        y = y._next;
      }
    } else {
      K = 0;
      (function km(u, f) {
        if (Array.isArray(u)) {
          for (let y = 0; y < u.length; y++) {
            f(u[y]);
          }
        } else {
          const y = u[hf()]();
          let N;
          for (; !(N = y.next()).done;) {
            f(N.value);
          }
        }
      })(f, ct => {
        Fe = this._trackByFn(K, ct);
        if (y !== null && Object.is(y.trackById, Fe)) {
          if (N) {
            y = this._verifyReinsertion(y, ct, Fe, K);
          }
          if (!Object.is(y.item, ct)) {
            this._addIdentityChange(y, ct);
          }
        } else {
          y = this._mismatch(y, ct, Fe, K);
          N = true;
        }
        y = y._next;
        K++;
      });
      this.length = K;
    }
    this._truncate(y);
    this.collection = f;
    return this.isDirty;
  }
  get isDirty() {
    return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
  }
  _reset() {
    if (this.isDirty) {
      let f;
      for (f = this._previousItHead = this._itHead; f !== null; f = f._next) {
        f._nextPrevious = f._next;
      }
      for (f = this._additionsHead; f !== null; f = f._nextAdded) {
        f.previousIndex = f.currentIndex;
      }
      this._additionsHead = this._additionsTail = null;
      f = this._movesHead;
      for (; f !== null; f = f._nextMoved) {
        f.previousIndex = f.currentIndex;
      }
      this._movesHead = this._movesTail = null;
      this._removalsHead = this._removalsTail = null;
      this._identityChangesHead = this._identityChangesTail = null;
    }
  }
  _mismatch(f, y, N, K) {
    let de;
    if (f === null) {
      de = this._itTail;
    } else {
      de = f._prev;
      this._remove(f);
    }
    if ((f = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(N, null)) !== null) {
      if (!Object.is(f.item, y)) {
        this._addIdentityChange(f, y);
      }
      this._reinsertAfter(f, de, K);
    } else if ((f = this._linkedRecords === null ? null : this._linkedRecords.get(N, K)) !== null) {
      if (!Object.is(f.item, y)) {
        this._addIdentityChange(f, y);
      }
      this._moveAfter(f, de, K);
    } else {
      f = this._addAfter(new AE(y, N), de, K);
    }
    return f;
  }
  _verifyReinsertion(f, y, N, K) {
    let de = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(N, null);
    if (de !== null) {
      f = this._reinsertAfter(de, f._prev, K);
    } else if (f.currentIndex != K) {
      f.currentIndex = K;
      this._addToMoves(f, K);
    }
    return f;
  }
  _truncate(f) {
    for (; f !== null;) {
      const y = f._next;
      this._addToRemovals(this._unlink(f));
      f = y;
    }
    if (this._unlinkedRecords !== null) {
      this._unlinkedRecords.clear();
    }
    if (this._additionsTail !== null) {
      this._additionsTail._nextAdded = null;
    }
    if (this._movesTail !== null) {
      this._movesTail._nextMoved = null;
    }
    if (this._itTail !== null) {
      this._itTail._next = null;
    }
    if (this._removalsTail !== null) {
      this._removalsTail._nextRemoved = null;
    }
    if (this._identityChangesTail !== null) {
      this._identityChangesTail._nextIdentityChange = null;
    }
  }
  _reinsertAfter(f, y, N) {
    if (this._unlinkedRecords !== null) {
      this._unlinkedRecords.remove(f);
    }
    const K = f._prevRemoved;
    const de = f._nextRemoved;
    if (K === null) {
      this._removalsHead = de;
    } else {
      K._nextRemoved = de;
    }
    if (de === null) {
      this._removalsTail = K;
    } else {
      de._prevRemoved = K;
    }
    this._insertAfter(f, y, N);
    this._addToMoves(f, N);
    return f;
  }
  _moveAfter(f, y, N) {
    this._unlink(f);
    this._insertAfter(f, y, N);
    this._addToMoves(f, N);
    return f;
  }
  _addAfter(f, y, N) {
    this._insertAfter(f, y, N);
    this._additionsTail = this._additionsTail === null ? this._additionsHead = f : this._additionsTail._nextAdded = f;
    return f;
  }
  _insertAfter(f, y, N) {
    const K = y === null ? this._itHead : y._next;
    f._next = K;
    f._prev = y;
    if (K === null) {
      this._itTail = f;
    } else {
      K._prev = f;
    }
    if (y === null) {
      this._itHead = f;
    } else {
      y._next = f;
    }
    if (this._linkedRecords === null) {
      this._linkedRecords = new dx();
    }
    this._linkedRecords.put(f);
    f.currentIndex = N;
    return f;
  }
  _remove(f) {
    return this._addToRemovals(this._unlink(f));
  }
  _unlink(f) {
    if (this._linkedRecords !== null) {
      this._linkedRecords.remove(f);
    }
    const y = f._prev;
    const N = f._next;
    if (y === null) {
      this._itHead = N;
    } else {
      y._next = N;
    }
    if (N === null) {
      this._itTail = y;
    } else {
      N._prev = y;
    }
    return f;
  }
  _addToMoves(f, y) {
    if (f.previousIndex !== y) {
      this._movesTail = this._movesTail === null ? this._movesHead = f : this._movesTail._nextMoved = f;
    }
    return f;
  }
  _addToRemovals(f) {
    if (this._unlinkedRecords === null) {
      this._unlinkedRecords = new dx();
    }
    this._unlinkedRecords.put(f);
    f.currentIndex = null;
    f._nextRemoved = null;
    if (this._removalsTail === null) {
      this._removalsTail = this._removalsHead = f;
      f._prevRemoved = null;
    } else {
      f._prevRemoved = this._removalsTail;
      this._removalsTail = this._removalsTail._nextRemoved = f;
    }
    return f;
  }
  _addIdentityChange(f, y) {
    f.item = y;
    this._identityChangesTail = this._identityChangesTail === null ? this._identityChangesHead = f : this._identityChangesTail._nextIdentityChange = f;
    return f;
  }
}
class AE {
  constructor(f, y) {
    this.item = f;
    this.trackById = y;
    this.currentIndex = null;
    this.previousIndex = null;
    this._nextPrevious = null;
    this._prev = null;
    this._next = null;
    this._prevDup = null;
    this._nextDup = null;
    this._prevRemoved = null;
    this._nextRemoved = null;
    this._nextAdded = null;
    this._nextMoved = null;
    this._nextIdentityChange = null;
  }
}
class l0 {
  constructor() {
    this._head = null;
    this._tail = null;
  }
  add(f) {
    if (this._head === null) {
      this._head = this._tail = f;
      f._nextDup = null;
      f._prevDup = null;
    } else {
      this._tail._nextDup = f;
      f._prevDup = this._tail;
      f._nextDup = null;
      this._tail = f;
    }
  }
  get(f, y) {
    let N;
    for (N = this._head; N !== null; N = N._nextDup) {
      if ((y === null || y <= N.currentIndex) && Object.is(N.trackById, f)) {
        return N;
      }
    }
    return null;
  }
  remove(f) {
    const y = f._prevDup;
    const N = f._nextDup;
    if (y === null) {
      this._head = N;
    } else {
      y._nextDup = N;
    }
    if (N === null) {
      this._tail = y;
    } else {
      N._prevDup = y;
    }
    return this._head === null;
  }
}
class dx {
  constructor() {
    this.map = new Map();
  }
  put(f) {
    const y = f.trackById;
    let N = this.map.get(y);
    if (!N) {
      N = new l0();
      this.map.set(y, N);
    }
    N.add(f);
  }
  get(f, y) {
    const K = this.map.get(f);
    if (K) {
      return K.get(f, y);
    } else {
      return null;
    }
  }
  remove(f) {
    const y = f.trackById;
    if (this.map.get(y).remove(f)) {
      this.map.delete(y);
    }
    return f;
  }
  get isEmpty() {
    return this.map.size === 0;
  }
  clear() {
    this.map.clear();
  }
}
function fx(u, f, y) {
  const N = u.previousIndex;
  if (N === null) {
    return N;
  }
  let K = 0;
  if (y && N < y.length) {
    K = y[N];
  }
  return N + f + K;
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
}
class hx {
  constructor() {}
  supports(f) {
    return f instanceof Map || Ig(f);
  }
  create() {
    return new yx();
  }
}
class yx {
  constructor() {
    this._records = new Map();
    this._mapHead = null;
    this._appendAfter = null;
    this._previousMapHead = null;
    this._changesHead = null;
    this._changesTail = null;
    this._additionsHead = null;
    this._additionsTail = null;
    this._removalsHead = null;
    this._removalsTail = null;
  }
  get isDirty() {
    return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
  }
  forEachItem(f) {
    let y;
    for (y = this._mapHead; y !== null; y = y._next) {
      f(y);
    }
  }
  forEachPreviousItem(f) {
    let y;
    for (y = this._previousMapHead; y !== null; y = y._nextPrevious) {
      f(y);
    }
  }
  forEachChangedItem(f) {
    let y;
    for (y = this._changesHead; y !== null; y = y._nextChanged) {
      f(y);
    }
  }
  forEachAddedItem(f) {
    let y;
    for (y = this._additionsHead; y !== null; y = y._nextAdded) {
      f(y);
    }
  }
  forEachRemovedItem(f) {
    let y;
    for (y = this._removalsHead; y !== null; y = y._nextRemoved) {
      f(y);
    }
  }
  diff(f) {
    if (f) {
      if (!(f instanceof Map) && !Ig(f)) {
        throw new vHH(900, false);
      }
    } else {
      f = new Map();
    }
    if (this.check(f)) {
      return this;
    } else {
      return null;
    }
  }
  onDestroy() {}
  check(f) {
    this._reset();
    let y = this._mapHead;
    this._appendAfter = null;
    this._forEach(f, (N, K) => {
      if (y && y.key === K) {
        this._maybeAddToChanges(y, N);
        this._appendAfter = y;
        y = y._next;
      } else {
        const de = this._getOrCreateRecordForKey(K, N);
        y = this._insertBeforeOrAppend(y, de);
      }
    });
    if (y) {
      if (y._prev) {
        y._prev._next = null;
      }
      this._removalsHead = y;
      for (let N = y; N !== null; N = N._nextRemoved) {
        if (N === this._mapHead) {
          this._mapHead = null;
        }
        this._records.delete(N.key);
        N._nextRemoved = N._next;
        N.previousValue = N.currentValue;
        N.currentValue = null;
        N._prev = null;
        N._next = null;
      }
    }
    if (this._changesTail) {
      this._changesTail._nextChanged = null;
    }
    if (this._additionsTail) {
      this._additionsTail._nextAdded = null;
    }
    return this.isDirty;
  }
  _insertBeforeOrAppend(f, y) {
    if (f) {
      const N = f._prev;
      y._next = f;
      y._prev = N;
      f._prev = y;
      if (N) {
        N._next = y;
      }
      if (f === this._mapHead) {
        this._mapHead = y;
      }
      this._appendAfter = f;
      return f;
    }
    if (this._appendAfter) {
      this._appendAfter._next = y;
      y._prev = this._appendAfter;
    } else {
      this._mapHead = y;
    }
    this._appendAfter = y;
    return null;
  }
  _getOrCreateRecordForKey(f, y) {
    if (this._records.has(f)) {
      const K = this._records.get(f);
      this._maybeAddToChanges(K, y);
      const de = K._prev;
      const Fe = K._next;
      if (de) {
        de._next = Fe;
      }
      if (Fe) {
        Fe._prev = de;
      }
      K._next = null;
      K._prev = null;
      return K;
    }
    const N = new _x(f);
    this._records.set(f, N);
    N.currentValue = y;
    this._addToAdditions(N);
    return N;
  }
  _reset() {
    if (this.isDirty) {
      let f;
      this._previousMapHead = this._mapHead;
      f = this._previousMapHead;
      for (; f !== null; f = f._next) {
        f._nextPrevious = f._next;
      }
      for (f = this._changesHead; f !== null; f = f._nextChanged) {
        f.previousValue = f.currentValue;
      }
      for (f = this._additionsHead; f != null; f = f._nextAdded) {
        f.previousValue = f.currentValue;
      }
      this._changesHead = this._changesTail = null;
      this._additionsHead = this._additionsTail = null;
      this._removalsHead = null;
    }
  }
  _maybeAddToChanges(f, y) {
    if (!Object.is(y, f.currentValue)) {
      f.previousValue = f.currentValue;
      f.currentValue = y;
      this._addToChanges(f);
    }
  }
  _addToAdditions(f) {
    if (this._additionsHead === null) {
      this._additionsHead = this._additionsTail = f;
    } else {
      this._additionsTail._nextAdded = f;
      this._additionsTail = f;
    }
  }
  _addToChanges(f) {
    if (this._changesHead === null) {
      this._changesHead = this._changesTail = f;
    } else {
      this._changesTail._nextChanged = f;
      this._changesTail = f;
    }
  }
  _forEach(f, y) {
    if (f instanceof Map) {
      f.forEach(y);
    } else {
      Object.keys(f).forEach(N => y(f[N], N));
    }
  }
}
class _x {
  constructor(f) {
    this.key = f;
    this.previousValue = null;
    this.currentValue = null;
    this._nextPrevious = null;
    this._next = null;
    this._prev = null;
    this._nextAdded = null;
    this._nextRemoved = null;
    this._nextChanged = null;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function px() {
  return new ZZ4([new A_()]);
}
export let ZZ4 = (() => {
  class u {
    constructor(y) {
      this.factories = y;
    }
    static create(y, N) {
      if (N != null) {
        const K = N.factories.slice();
        y = y.concat(K);
      }
      return new u(y);
    }
    static extend(y) {
      return {
        provide: u,
        useFactory: N => u.create(y, N || px()),
        deps: [[u, new tp0(), new FiY()]]
      };
    }
    find(y) {
      const N = this.factories.find(K => K.supports(y));
      if (N != null) {
        return N;
      }
      throw new vHH(901, false);
    }
  }
  u.ɵprov = Yz7({
    token: u,
    providedIn: "root",
    factory: px
  });
  return u;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gx() {
  return new aQg([new hx()]);
}
export let aQg = (() => {
  class u {
    constructor(y) {
      this.factories = y;
    }
    static create(y, N) {
      if (N) {
        const K = N.factories.slice();
        y = y.concat(K);
      }
      return new u(y);
    }
    static extend(y) {
      return {
        provide: u,
        useFactory: N => u.create(y, N || gx()),
        deps: [[u, new tp0(), new FiY()]]
      };
    }
    find(y) {
      const N = this.factories.find(K => K.supports(y));
      if (N) {
        return N;
      }
      throw new vHH(901, false);
    }
  }
  /**
           * @license
           * Copyright Google LLC All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
  u.ɵprov = Yz7({
    token: u,
    providedIn: "root",
    factory: gx
  });
  return u;
})();
export const _c5 = eFA(null, "core", []);
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
export let hGG = (() => {
  class u {
    constructor(y) {}
  }
  u.ɵfac = function (y) {
    return new (y || u)(LFG(z2F));
  };
  u.ɵmod = oAB({
    type: u
  });
  u.ɵinj = cJS({});
  return u;
})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export function D6c(u) {
  if (typeof u == "boolean") {
    return u;
  } else {
    return u != null && u !== "false";
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */