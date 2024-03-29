/**
       * @license Angular v15.1.0-next.0
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
(function (t) {
  const n = t.performance;
  function i(M) {
    if (n && n.mark) {
      n.mark(M);
    }
  }
  function o(M, T) {
    if (n && n.measure) {
      n.measure(M, T);
    }
  }
  i("Zone");
  const c = t.__Zone_symbol_prefix || "__zone_symbol__";
  function a(M) {
    return c + M;
  }
  const p = t[a("forceDuplicateZoneCheck")] === true;
  if (t.Zone) {
    if (p || typeof t.Zone.__symbol__ != "function") {
      throw new Error("Zone already loaded.");
    }
    return t.Zone;
  }
  let d = (() => {
    class M {
      constructor(e, r) {
        this._parent = e;
        this._name = r ? r.name || "unnamed" : "<root>";
        this._properties = r && r.properties || {};
        this._zoneDelegate = new v(this, this._parent && this._parent._zoneDelegate, r);
      }
      static assertZonePatched() {
        if (t.Promise !== oe.ZoneAwarePromise) {
          throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
        }
      }
      static get root() {
        let e = M.current;
        for (; e.parent;) {
          e = e.parent;
        }
        return e;
      }
      static get current() {
        return U.zone;
      }
      static get currentTask() {
        return re;
      }
      static __load_patch(e, r, k = false) {
        if (oe.hasOwnProperty(e)) {
          if (!k && p) {
            throw Error("Already loaded patch: " + e);
          }
        } else if (!t["__Zone_disable_" + e]) {
          const C = "Zone:" + e;
          i(C);
          oe[e] = r(t, M, z);
          o(C, C);
        }
      }
      get parent() {
        return this._parent;
      }
      get name() {
        return this._name;
      }
      get(e) {
        const r = this.getZoneWith(e);
        if (r) {
          return r._properties[e];
        }
      }
      getZoneWith(e) {
        let r = this;
        for (; r;) {
          if (r._properties.hasOwnProperty(e)) {
            return r;
          }
          r = r._parent;
        }
        return null;
      }
      fork(e) {
        if (!e) {
          throw new Error("ZoneSpec required!");
        }
        return this._zoneDelegate.fork(this, e);
      }
      wrap(e, r) {
        if (typeof e != "function") {
          throw new Error("Expecting function got: " + e);
        }
        const k = this._zoneDelegate.intercept(this, e, r);
        const C = this;
        return function () {
          return C.runGuarded(k, this, arguments, r);
        };
      }
      run(e, r, k, C) {
        U = {
          parent: U,
          zone: this
        };
        try {
          return this._zoneDelegate.invoke(this, e, r, k, C);
        } finally {
          U = U.parent;
        }
      }
      runGuarded(e, r = null, k, C) {
        U = {
          parent: U,
          zone: this
        };
        try {
          try {
            return this._zoneDelegate.invoke(this, e, r, k, C);
          } catch ($) {
            if (this._zoneDelegate.handleError(this, $)) {
              throw $;
            }
          }
        } finally {
          U = U.parent;
        }
      }
      runTask(e, r, k) {
        if (e.zone != this) {
          throw new Error("A task can only be run in the zone of creation! (Creation: " + (e.zone || K).name + "; Execution: " + this.name + ")");
        }
        if (e.state === x && (e.type === Q || e.type === w)) {
          return;
        }
        const C = e.state != E;
        if (C) {
          e._transitionTo(E, j);
        }
        e.runCount++;
        const $ = re;
        re = e;
        U = {
          parent: U,
          zone: this
        };
        try {
          if (e.type == w && e.data && !e.data.isPeriodic) {
            e.cancelFn = undefined;
          }
          try {
            return this._zoneDelegate.invokeTask(this, e, r, k);
          } catch (l) {
            if (this._zoneDelegate.handleError(this, l)) {
              throw l;
            }
          }
        } finally {
          if (e.state !== x && e.state !== h) {
            if (e.type == Q || e.data && e.data.isPeriodic) {
              if (C) {
                e._transitionTo(j, E);
              }
            } else {
              e.runCount = 0;
              this._updateTaskCount(e, -1);
              if (C) {
                e._transitionTo(x, E, x);
              }
            }
          }
          U = U.parent;
          re = $;
        }
      }
      scheduleTask(e) {
        if (e.zone && e.zone !== this) {
          let k = this;
          for (; k;) {
            if (k === e.zone) {
              throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);
            }
            k = k.parent;
          }
        }
        e._transitionTo(X, x);
        const r = [];
        e._zoneDelegates = r;
        e._zone = this;
        try {
          e = this._zoneDelegate.scheduleTask(this, e);
        } catch (k) {
          e._transitionTo(h, X, x);
          this._zoneDelegate.handleError(this, k);
          throw k;
        }
        if (e._zoneDelegates === r) {
          this._updateTaskCount(e, 1);
        }
        if (e.state == X) {
          e._transitionTo(j, X);
        }
        return e;
      }
      scheduleMicroTask(e, r, k, C) {
        return this.scheduleTask(new m(I, e, r, k, C, undefined));
      }
      scheduleMacroTask(e, r, k, C, $) {
        return this.scheduleTask(new m(w, e, r, k, C, $));
      }
      scheduleEventTask(e, r, k, C, $) {
        return this.scheduleTask(new m(Q, e, r, k, C, $));
      }
      cancelTask(e) {
        if (e.zone != this) {
          throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (e.zone || K).name + "; Execution: " + this.name + ")");
        }
        if (e.state === j || e.state === E) {
          e._transitionTo(G, j, E);
          try {
            this._zoneDelegate.cancelTask(this, e);
          } catch (r) {
            e._transitionTo(h, G);
            this._zoneDelegate.handleError(this, r);
            throw r;
          }
          this._updateTaskCount(e, -1);
          e._transitionTo(x, G);
          e.runCount = 0;
          return e;
        }
      }
      _updateTaskCount(e, r) {
        const k = e._zoneDelegates;
        if (r == -1) {
          e._zoneDelegates = null;
        }
        for (let C = 0; C < k.length; C++) {
          k[C]._updateTaskCount(e.type, r);
        }
      }
    }
    M.__symbol__ = a;
    return M;
  })();
  const P = {
    name: "",
    onHasTask: (M, T, e, r) => M.hasTask(e, r),
    onScheduleTask: (M, T, e, r) => M.scheduleTask(e, r),
    onInvokeTask: (M, T, e, r, k, C) => M.invokeTask(e, r, k, C),
    onCancelTask: (M, T, e, r) => M.cancelTask(e, r)
  };
  class v {
    constructor(T, e, r) {
      this._taskCounts = {
        microTask: 0,
        macroTask: 0,
        eventTask: 0
      };
      this.zone = T;
      this._parentDelegate = e;
      this._forkZS = r && (r && r.onFork ? r : e._forkZS);
      this._forkDlgt = r && (r.onFork ? e : e._forkDlgt);
      this._forkCurrZone = r && (r.onFork ? this.zone : e._forkCurrZone);
      this._interceptZS = r && (r.onIntercept ? r : e._interceptZS);
      this._interceptDlgt = r && (r.onIntercept ? e : e._interceptDlgt);
      this._interceptCurrZone = r && (r.onIntercept ? this.zone : e._interceptCurrZone);
      this._invokeZS = r && (r.onInvoke ? r : e._invokeZS);
      this._invokeDlgt = r && (r.onInvoke ? e : e._invokeDlgt);
      this._invokeCurrZone = r && (r.onInvoke ? this.zone : e._invokeCurrZone);
      this._handleErrorZS = r && (r.onHandleError ? r : e._handleErrorZS);
      this._handleErrorDlgt = r && (r.onHandleError ? e : e._handleErrorDlgt);
      this._handleErrorCurrZone = r && (r.onHandleError ? this.zone : e._handleErrorCurrZone);
      this._scheduleTaskZS = r && (r.onScheduleTask ? r : e._scheduleTaskZS);
      this._scheduleTaskDlgt = r && (r.onScheduleTask ? e : e._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = r && (r.onScheduleTask ? this.zone : e._scheduleTaskCurrZone);
      this._invokeTaskZS = r && (r.onInvokeTask ? r : e._invokeTaskZS);
      this._invokeTaskDlgt = r && (r.onInvokeTask ? e : e._invokeTaskDlgt);
      this._invokeTaskCurrZone = r && (r.onInvokeTask ? this.zone : e._invokeTaskCurrZone);
      this._cancelTaskZS = r && (r.onCancelTask ? r : e._cancelTaskZS);
      this._cancelTaskDlgt = r && (r.onCancelTask ? e : e._cancelTaskDlgt);
      this._cancelTaskCurrZone = r && (r.onCancelTask ? this.zone : e._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const k = r && r.onHasTask;
      if (k || e && e._hasTaskZS) {
        this._hasTaskZS = k ? r : P;
        this._hasTaskDlgt = e;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = T;
        if (!r.onScheduleTask) {
          this._scheduleTaskZS = P;
          this._scheduleTaskDlgt = e;
          this._scheduleTaskCurrZone = this.zone;
        }
        if (!r.onInvokeTask) {
          this._invokeTaskZS = P;
          this._invokeTaskDlgt = e;
          this._invokeTaskCurrZone = this.zone;
        }
        if (!r.onCancelTask) {
          this._cancelTaskZS = P;
          this._cancelTaskDlgt = e;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }
    fork(T, e) {
      if (this._forkZS) {
        return this._forkZS.onFork(this._forkDlgt, this.zone, T, e);
      } else {
        return new d(T, e);
      }
    }
    intercept(T, e, r) {
      if (this._interceptZS) {
        return this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, T, e, r);
      } else {
        return e;
      }
    }
    invoke(T, e, r, k, C) {
      if (this._invokeZS) {
        return this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, T, e, r, k, C);
      } else {
        return e.apply(r, k);
      }
    }
    handleError(T, e) {
      return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, T, e);
    }
    scheduleTask(T, e) {
      let r = e;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          r._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        r = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, T, e);
        r ||= e;
      } else if (e.scheduleFn) {
        e.scheduleFn(e);
      } else {
        if (e.type != I) {
          throw new Error("Task is missing scheduleFn.");
        }
        R(e);
      }
      return r;
    }
    invokeTask(T, e, r, k) {
      if (this._invokeTaskZS) {
        return this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, T, e, r, k);
      } else {
        return e.callback.apply(r, k);
      }
    }
    cancelTask(T, e) {
      let r;
      if (this._cancelTaskZS) {
        r = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, T, e);
      } else {
        if (!e.cancelFn) {
          throw Error("Task is not cancelable");
        }
        r = e.cancelFn(e);
      }
      return r;
    }
    hasTask(T, e) {
      try {
        if (this._hasTaskZS) {
          this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, T, e);
        }
      } catch (r) {
        this.handleError(T, r);
      }
    }
    _updateTaskCount(T, e) {
      const r = this._taskCounts;
      const k = r[T];
      const C = r[T] = k + e;
      if (C < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (k == 0 || C == 0) {
        this.hasTask(this.zone, {
          microTask: r.microTask > 0,
          macroTask: r.macroTask > 0,
          eventTask: r.eventTask > 0,
          change: T
        });
      }
    }
  }
  class m {
    constructor(T, e, r, k, C, $) {
      this._zone = null;
      this.runCount = 0;
      this._zoneDelegates = null;
      this._state = "notScheduled";
      this.type = T;
      this.source = e;
      this.data = k;
      this.scheduleFn = C;
      this.cancelFn = $;
      if (!r) {
        throw new Error("callback is not defined");
      }
      this.callback = r;
      const l = this;
      this.invoke = T === Q && k && k.useG ? m.invokeTask : function () {
        return m.invokeTask.call(t, l, this, arguments);
      };
    }
    static invokeTask(T, e, r) {
      T ||= this;
      ee++;
      try {
        T.runCount++;
        return T.zone.runTask(T, e, r);
      } finally {
        if (ee == 1) {
          _();
        }
        ee--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(x, X);
    }
    _transitionTo(T, e, r) {
      if (this._state !== e && this._state !== r) {
        throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${e}'${r ? " or '" + r + "'" : ""}, was '${this._state}'.`);
      }
      this._state = T;
      if (T == x) {
        this._zoneDelegates = null;
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const L = a("setTimeout");
  const Z = a("Promise");
  const N = a("then");
  let J;
  let B = [];
  let H = false;
  function q(M) {
    if (!J) {
      if (t[Z]) {
        J = t[Z].resolve(0);
      }
    }
    if (J) {
      let T = J[N];
      T ||= J.then;
      T.call(J, M);
    } else {
      t[L](M, 0);
    }
  }
  function R(M) {
    if (ee === 0 && B.length === 0) {
      q(_);
    }
    if (M) {
      B.push(M);
    }
  }
  function _() {
    if (!H) {
      for (H = true; B.length;) {
        const M = B;
        B = [];
        for (let T = 0; T < M.length; T++) {
          const e = M[T];
          try {
            e.zone.runTask(e, null, null);
          } catch (r) {
            z.onUnhandledError(r);
          }
        }
      }
      z.microtaskDrainDone();
      H = false;
    }
  }
  const K = {
    name: "NO ZONE"
  };
  const x = "notScheduled";
  const X = "scheduling";
  const j = "scheduled";
  const E = "running";
  const G = "canceling";
  const h = "unknown";
  const I = "microTask";
  const w = "macroTask";
  const Q = "eventTask";
  const oe = {};
  const z = {
    symbol: a,
    currentZoneFrame: () => U,
    onUnhandledError: W,
    microtaskDrainDone: W,
    scheduleMicroTask: R,
    showUncaughtError: () => !d[a("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: W,
    patchMethod: () => W,
    bindArguments: () => [],
    patchThen: () => W,
    patchMacroTask: () => W,
    patchEventPrototype: () => W,
    isIEOrEdge: () => false,
    getGlobalObjects: () => {},
    ObjectDefineProperty: () => W,
    ObjectGetOwnPropertyDescriptor: () => {},
    ObjectCreate: () => {},
    ArraySlice: () => [],
    patchClass: () => W,
    wrapWithCurrentZone: () => W,
    filterProperties: () => [],
    attachOriginToPatched: () => W,
    _redefineProperty: () => W,
    patchCallbacks: () => W,
    nativeScheduleMicroTask: q
  };
  let U = {
    parent: null,
    zone: new d(null, null)
  };
  let re = null;
  let ee = 0;
  function W() {}
  o("Zone", "Zone");
  t.Zone = d;
})(typeof window !== "undefined" && window || typeof self !== "undefined" && self || global);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ie = Object.getOwnPropertyDescriptor;
const Ee = Object.defineProperty;
const de = Object.getPrototypeOf;
const ge = Object.create;
const Ve = Array.prototype.slice;
const Oe = "addEventListener";
const Se = "removeEventListener";
const Ze = Zone.__symbol__(Oe);
const Ne = Zone.__symbol__(Se);
const ce = "true";
const ae = "false";
const ke = Zone.__symbol__("");
function Ie(t, n) {
  return Zone.current.wrap(t, n);
}
function Me(t, n, i, o, c) {
  return Zone.current.scheduleMacroTask(t, n, i, o, c);
}
const A = Zone.__symbol__;
const Pe = typeof window !== "undefined";
const Te = Pe ? window : undefined;
const Y = Pe && Te || typeof self == "object" && self || global;
function Le(t, n) {
  for (let i = t.length - 1; i >= 0; i--) {
    if (typeof t[i] == "function") {
      t[i] = Ie(t[i], n + "_" + i);
    }
  }
  return t;
}
function Fe(t) {
  return !t || t.writable !== false && (typeof t.get != "function" || typeof t.set !== "undefined");
}
const Be = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
const we = !("nw" in Y) && typeof Y.process !== "undefined" && {}.toString.call(Y.process) === "[object process]";
const je = !we && !Be && !!Pe && !!Te.HTMLElement;
const Ue = typeof Y.process !== "undefined" && {}.toString.call(Y.process) === "[object process]" && !Be && !!Pe && !!Te.HTMLElement;
const Re = {};
const We = function (t) {
  if (!(t = t || Y.event)) {
    return;
  }
  let n = Re[t.type];
  n ||= Re[t.type] = A("ON_PROPERTY" + t.type);
  const i = this || t.target || Y;
  const o = i[n];
  let c;
  if (je && i === Te && t.type === "error") {
    const a = t;
    c = o && o.call(this, a.message, a.filename, a.lineno, a.colno, a.error);
    if (c === true) {
      t.preventDefault();
    }
  } else {
    c = o && o.apply(this, arguments);
    if (c != null && !c) {
      t.preventDefault();
    }
  }
  return c;
};
function qe(t, n, i) {
  let o = ie(t, n);
  if (!o && i && ie(i, n)) {
    o = {
      enumerable: true,
      configurable: true
    };
  }
  if (!o || !o.configurable) {
    return;
  }
  const c = A("on" + n + "patched");
  if (t.hasOwnProperty(c) && t[c]) {
    return;
  }
  delete o.writable;
  delete o.value;
  const a = o.get;
  const p = o.set;
  const d = n.slice(2);
  let P = Re[d];
  P ||= Re[d] = A("ON_PROPERTY" + d);
  o.set = function (v) {
    let m = this;
    if (!m && t === Y) {
      m = Y;
    }
    if (m) {
      if (typeof m[P] == "function") {
        m.removeEventListener(d, We);
      }
      if (p) {
        p.call(m, null);
      }
      m[P] = v;
      if (typeof v == "function") {
        m.addEventListener(d, We, false);
      }
    }
  };
  o.get = function () {
    let v = this;
    if (!v && t === Y) {
      v = Y;
    }
    if (!v) {
      return null;
    }
    const m = v[P];
    if (m) {
      return m;
    }
    if (a) {
      let L = a.call(this);
      if (L) {
        o.set.call(this, L);
        if (typeof v.removeAttribute == "function") {
          v.removeAttribute(n);
        }
        return L;
      }
    }
    return null;
  };
  Ee(t, n, o);
  t[c] = true;
}
function Xe(t, n, i) {
  if (n) {
    for (let o = 0; o < n.length; o++) {
      qe(t, "on" + n[o], i);
    }
  } else {
    const o = [];
    for (const c in t) {
      if (c.slice(0, 2) == "on") {
        o.push(c);
      }
    }
    for (let c = 0; c < o.length; c++) {
      qe(t, o[c], i);
    }
  }
}
const ne = A("originalInstance");
function ve(t) {
  const n = Y[t];
  if (!n) {
    return;
  }
  Y[A(t)] = n;
  Y[t] = function () {
    const c = Le(arguments, t);
    switch (c.length) {
      case 0:
        this[ne] = new n();
        break;
      case 1:
        this[ne] = new n(c[0]);
        break;
      case 2:
        this[ne] = new n(c[0], c[1]);
        break;
      case 3:
        this[ne] = new n(c[0], c[1], c[2]);
        break;
      case 4:
        this[ne] = new n(c[0], c[1], c[2], c[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  ue(Y[t], n);
  const i = new n(function () {});
  let o;
  for (o in i) {
    if (t !== "XMLHttpRequest" || o !== "responseBlob") {
      (function (c) {
        if (typeof i[c] == "function") {
          Y[t].prototype[c] = function () {
            return this[ne][c].apply(this[ne], arguments);
          };
        } else {
          Ee(Y[t].prototype, c, {
            set: function (a) {
              if (typeof a == "function") {
                this[ne][c] = Ie(a, t + "." + c);
                ue(this[ne][c], a);
              } else {
                this[ne][c] = a;
              }
            },
            get: function () {
              return this[ne][c];
            }
          });
        }
      })(o);
    }
  }
  for (o in n) {
    if (o !== "prototype" && n.hasOwnProperty(o)) {
      Y[t][o] = n[o];
    }
  }
}
function le(t, n, i) {
  let o = t;
  for (; o && !o.hasOwnProperty(n);) {
    o = de(o);
  }
  if (!o && t[n]) {
    o = t;
  }
  const c = A(n);
  let a = null;
  if (o && (!(a = o[c]) || !o.hasOwnProperty(c)) && (a = o[c] = o[n], Fe(o && ie(o, n)))) {
    const d = i(a, c, n);
    o[n] = function () {
      return d(this, arguments);
    };
    ue(o[n], a);
  }
  return a;
}
function lt(t, n, i) {
  let o = null;
  function c(a) {
    const p = a.data;
    p.args[p.cbIdx] = function () {
      a.invoke.apply(this, arguments);
    };
    o.apply(p.target, p.args);
    return a;
  }
  o = le(t, n, a => function (p, d) {
    const P = i(p, d);
    if (P.cbIdx >= 0 && typeof d[P.cbIdx] == "function") {
      return Me(P.name, d[P.cbIdx], P, c);
    } else {
      return a.apply(p, d);
    }
  });
}
function ue(t, n) {
  t[A("OriginalDelegate")] = n;
}
let ze = false;
let Ae = false;
function ft() {
  if (ze) {
    return Ae;
  }
  ze = true;
  try {
    const t = Te.navigator.userAgent;
    if (t.indexOf("MSIE ") !== -1 || t.indexOf("Trident/") !== -1 || t.indexOf("Edge/") !== -1) {
      Ae = true;
    }
  } catch {}
  return Ae;
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("ZoneAwarePromise", (t, n, i) => {
  const o = Object.getOwnPropertyDescriptor;
  const c = Object.defineProperty;
  const p = i.symbol;
  const d = [];
  const P = t[p("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] === true;
  const v = p("Promise");
  const m = p("then");
  i.onUnhandledError = l => {
    if (i.showUncaughtError()) {
      const u = l && l.rejection;
      if (u) {
        console.error("Unhandled Promise rejection:", u instanceof Error ? u.message : u, "; Zone:", l.zone.name, "; Task:", l.task && l.task.source, "; Value:", u, u instanceof Error ? u.stack : undefined);
      } else {
        console.error(l);
      }
    }
  };
  i.microtaskDrainDone = () => {
    for (; d.length;) {
      const l = d.shift();
      try {
        l.zone.runGuarded(() => {
          throw l.throwOriginal ? l.rejection : l;
        });
      } catch (u) {
        N(u);
      }
    }
  };
  const Z = p("unhandledPromiseRejectionHandler");
  function N(l) {
    i.onUnhandledError(l);
    try {
      const u = n[Z];
      if (typeof u == "function") {
        u.call(this, l);
      }
    } catch {}
  }
  function B(l) {
    return l && l.then;
  }
  function H(l) {
    return l;
  }
  function J(l) {
    return e.reject(l);
  }
  const q = p("state");
  const R = p("value");
  const _ = p("finally");
  const K = p("parentPromiseValue");
  const x = p("parentPromiseState");
  const j = null;
  const E = true;
  const G = false;
  function I(l, u) {
    return s => {
      try {
        z(l, u, s);
      } catch (f) {
        z(l, false, f);
      }
    };
  }
  const w = function () {
    let l = false;
    return function (s) {
      return function () {
        if (!l) {
          l = true;
          s.apply(null, arguments);
        }
      };
    };
  };
  const oe = p("currentTaskTrace");
  function z(l, u, s) {
    const f = w();
    if (l === s) {
      throw new TypeError("Promise resolved with itself");
    }
    if (l[q] === j) {
      let g = null;
      try {
        if (typeof s == "object" || typeof s == "function") {
          g = s && s.then;
        }
      } catch (b) {
        f(() => {
          z(l, false, b);
        })();
        return l;
      }
      if (u !== G && s instanceof e && s.hasOwnProperty(q) && s.hasOwnProperty(R) && s[q] !== j) {
        re(s);
        z(l, s[q], s[R]);
      } else if (u !== G && typeof g == "function") {
        try {
          g.call(s, f(I(l, u)), f(I(l, false)));
        } catch (b) {
          f(() => {
            z(l, false, b);
          })();
        }
      } else {
        l[q] = u;
        const b = l[R];
        l[R] = s;
        if (l[_] === _ && u === E) {
          l[q] = l[x];
          l[R] = l[K];
        }
        if (u === G && s instanceof Error) {
          const y = n.currentTask && n.currentTask.data && n.currentTask.data.__creationTrace__;
          if (y) {
            c(s, oe, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: y
            });
          }
        }
        for (let y = 0; y < b.length;) {
          ee(l, b[y++], b[y++], b[y++], b[y++]);
        }
        if (b.length == 0 && u == G) {
          l[q] = 0;
          let y = s;
          try {
            throw new Error("Uncaught (in promise): " + function a(l) {
              if (l && l.toString === Object.prototype.toString) {
                return (l.constructor && l.constructor.name || "") + ": " + JSON.stringify(l);
              } else if (l) {
                return l.toString();
              } else {
                return Object.prototype.toString.call(l);
              }
            }(s) + (s && s.stack ? "\n" + s.stack : ""));
          } catch (D) {
            y = D;
          }
          if (P) {
            y.throwOriginal = true;
          }
          y.rejection = s;
          y.promise = l;
          y.zone = n.current;
          y.task = n.currentTask;
          d.push(y);
          i.scheduleMicroTask();
        }
      }
    }
    return l;
  }
  const U = p("rejectionHandledHandler");
  function re(l) {
    if (l[q] === 0) {
      try {
        const u = n[U];
        if (u && typeof u == "function") {
          u.call(this, {
            rejection: l[R],
            promise: l
          });
        }
      } catch {}
      l[q] = G;
      for (let u = 0; u < d.length; u++) {
        if (l === d[u].promise) {
          d.splice(u, 1);
        }
      }
    }
  }
  function ee(l, u, s, f, g) {
    re(l);
    const b = l[q];
    const y = b ? typeof f == "function" ? f : H : typeof g == "function" ? g : J;
    u.scheduleMicroTask("Promise.then", () => {
      try {
        const D = l[R];
        const O = !!s && _ === s[_];
        if (O) {
          s[K] = D;
          s[x] = b;
        }
        const S = u.run(y, undefined, O && y !== J && y !== H ? [] : [D]);
        z(s, true, S);
      } catch (D) {
        z(s, false, D);
      }
    }, s);
  }
  const M = function () {};
  const T = t.AggregateError;
  class e {
    static toString() {
      return "function ZoneAwarePromise() { [native code] }";
    }
    static resolve(u) {
      return z(new this(null), E, u);
    }
    static reject(u) {
      return z(new this(null), G, u);
    }
    static any(u) {
      if (!u || typeof u[Symbol.iterator] != "function") {
        return Promise.reject(new T([], "All promises were rejected"));
      }
      const s = [];
      let f = 0;
      try {
        for (let y of u) {
          f++;
          s.push(e.resolve(y));
        }
      } catch {
        return Promise.reject(new T([], "All promises were rejected"));
      }
      if (f === 0) {
        return Promise.reject(new T([], "All promises were rejected"));
      }
      let g = false;
      const b = [];
      return new e((y, D) => {
        for (let O = 0; O < s.length; O++) {
          s[O].then(S => {
            if (!g) {
              g = true;
              y(S);
            }
          }, S => {
            b.push(S);
            f--;
            if (f === 0) {
              g = true;
              D(new T(b, "All promises were rejected"));
            }
          });
        }
      });
    }
    static race(u) {
      let s;
      let f;
      let g = new this((D, O) => {
        s = D;
        f = O;
      });
      function b(D) {
        s(D);
      }
      function y(D) {
        f(D);
      }
      for (let D of u) {
        if (!B(D)) {
          D = this.resolve(D);
        }
        D.then(b, y);
      }
      return g;
    }
    static all(u) {
      return e.allWithCallback(u);
    }
    static allSettled(u) {
      return (this && this.prototype instanceof e ? this : e).allWithCallback(u, {
        thenCallback: f => ({
          status: "fulfilled",
          value: f
        }),
        errorCallback: f => ({
          status: "rejected",
          reason: f
        })
      });
    }
    static allWithCallback(u, s) {
      let f;
      let g;
      let b = new this((S, V) => {
        f = S;
        g = V;
      });
      let y = 2;
      let D = 0;
      const O = [];
      for (let S of u) {
        if (!B(S)) {
          S = this.resolve(S);
        }
        const V = D;
        try {
          S.then(F => {
            O[V] = s ? s.thenCallback(F) : F;
            y--;
            if (y === 0) {
              f(O);
            }
          }, F => {
            if (s) {
              O[V] = s.errorCallback(F);
              y--;
              if (y === 0) {
                f(O);
              }
            } else {
              g(F);
            }
          });
        } catch (F) {
          g(F);
        }
        y++;
        D++;
      }
      y -= 2;
      if (y === 0) {
        f(O);
      }
      return b;
    }
    constructor(u) {
      const s = this;
      if (!(s instanceof e)) {
        throw new Error("Must be an instanceof Promise.");
      }
      s[q] = j;
      s[R] = [];
      try {
        const f = w();
        if (u) {
          u(f(I(s, E)), f(I(s, G)));
        }
      } catch (f) {
        z(s, false, f);
      }
    }
    get [Symbol.toStringTag]() {
      return "Promise";
    }
    get [Symbol.species]() {
      return e;
    }
    then(u, s) {
      let g = this.constructor?.[Symbol.species];
      if (!g || typeof g != "function") {
        g = this.constructor || e;
      }
      const b = new g(M);
      const y = n.current;
      if (this[q] == j) {
        this[R].push(y, b, u, s);
      } else {
        ee(this, y, b, u, s);
      }
      return b;
    }
    catch(u) {
      return this.then(null, u);
    }
    finally(u) {
      let f = this.constructor?.[Symbol.species];
      if (!f || typeof f != "function") {
        f = e;
      }
      const g = new f(M);
      g[_] = _;
      const b = n.current;
      if (this[q] == j) {
        this[R].push(b, g, u, u);
      } else {
        ee(this, b, g, u, u);
      }
      return g;
    }
  }
  e.resolve = e.resolve;
  e.reject = e.reject;
  e.race = e.race;
  e.all = e.all;
  const r = t[v] = t.Promise;
  t.Promise = e;
  const k = p("thenPatched");
  function C(l) {
    const u = l.prototype;
    const s = o(u, "then");
    if (s && (s.writable === false || !s.configurable)) {
      return;
    }
    const f = u.then;
    u[m] = f;
    l.prototype.then = function (g, b) {
      return new e((D, O) => {
        f.call(this, D, O);
      }).then(g, b);
    };
    l[k] = true;
  }
  i.patchThen = C;
  if (r) {
    C(r);
    le(t, "fetch", l => function $(l) {
      return function (u, s) {
        let f = l.apply(u, s);
        if (f instanceof e) {
          return f;
        }
        let g = f.constructor;
        if (!g[k]) {
          C(g);
        }
        return f;
      };
    }(l));
  }
  Promise[n.__symbol__("uncaughtPromiseErrors")] = d;
  return e;
});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("toString", t => {
  const n = Function.prototype.toString;
  const i = A("OriginalDelegate");
  const o = A("Promise");
  const c = A("Error");
  const a = function () {
    if (typeof this == "function") {
      const v = this[i];
      if (v) {
        if (typeof v == "function") {
          return n.call(v);
        } else {
          return Object.prototype.toString.call(v);
        }
      }
      if (this === Promise) {
        const m = t[o];
        if (m) {
          return n.call(m);
        }
      }
      if (this === Error) {
        const m = t[c];
        if (m) {
          return n.call(m);
        }
      }
    }
    return n.call(this);
  };
  a[i] = n;
  Function.prototype.toString = a;
  const p = Object.prototype.toString;
  Object.prototype.toString = function () {
    if (typeof Promise == "function" && this instanceof Promise) {
      return "[object Promise]";
    } else {
      return p.call(this);
    }
  };
});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ye = false;
if (typeof window !== "undefined") {
  try {
    const t = Object.defineProperty({}, "passive", {
      get: function () {
        ye = true;
      }
    });
    window.addEventListener("test", t, t);
    window.removeEventListener("test", t, t);
  } catch {
    ye = false;
  }
}
const ht = {
  useG: true
};
const te = {};
const Ye = {};
const $e = new RegExp("^" + ke + "(\\w+)(true|false)$");
const Ke = A("propagationStopped");
function Je(t, n) {
  const i = (n ? n(t) : t) + ae;
  const o = (n ? n(t) : t) + ce;
  const c = ke + i;
  const a = ke + o;
  te[t] = {};
  te[t][ae] = c;
  te[t][ce] = a;
}
function dt(t, n, i, o) {
  const c = o && o.add || Oe;
  const a = o && o.rm || Se;
  const p = o && o.listeners || "eventListeners";
  const d = o && o.rmAll || "removeAllListeners";
  const P = A(c);
  const v = "." + c + ":";
  const Z = function (R, _, K) {
    if (R.isRemoved) {
      return;
    }
    const x = R.callback;
    let X;
    if (typeof x == "object" && x.handleEvent) {
      R.callback = E => x.handleEvent(E);
      R.originalDelegate = x;
    }
    try {
      R.invoke(R, _, [K]);
    } catch (E) {
      X = E;
    }
    const j = R.options;
    if (j && typeof j == "object" && j.once) {
      _[a].call(_, K.type, R.originalDelegate ? R.originalDelegate : R.callback, j);
    }
    return X;
  };
  function N(R, _, K) {
    if (!(_ = _ || t.event)) {
      return;
    }
    const x = R || _.target || t;
    const X = x[te[_.type][K ? ce : ae]];
    if (X) {
      const j = [];
      if (X.length === 1) {
        const E = Z(X[0], x, _);
        if (E) {
          j.push(E);
        }
      } else {
        const E = X.slice();
        for (let G = 0; G < E.length && (!_ || _[Ke] !== true); G++) {
          const h = Z(E[G], x, _);
          if (h) {
            j.push(h);
          }
        }
      }
      if (j.length === 1) {
        throw j[0];
      }
      for (let E = 0; E < j.length; E++) {
        const G = j[E];
        n.nativeScheduleMicroTask(() => {
          throw G;
        });
      }
    }
  }
  const B = function (R) {
    return N(this, R, false);
  };
  const H = function (R) {
    return N(this, R, true);
  };
  function J(R, _) {
    if (!R) {
      return false;
    }
    let K = true;
    if (_ && _.useG !== undefined) {
      K = _.useG;
    }
    const x = _ && _.vh;
    let X = true;
    if (_ && _.chkDup !== undefined) {
      X = _.chkDup;
    }
    let j = false;
    if (_ && _.rt !== undefined) {
      j = _.rt;
    }
    let E = R;
    for (; E && !E.hasOwnProperty(c);) {
      E = de(E);
    }
    if (!E && R[c]) {
      E = R;
    }
    if (!E || E[P]) {
      return false;
    }
    const G = _ && _.eventNameToString;
    const h = {};
    const I = E[P] = E[c];
    const w = E[A(a)] = E[a];
    const Q = E[A(p)] = E[p];
    const oe = E[A(d)] = E[d];
    let z;
    function U(s, f) {
      if (!ye && typeof s == "object" && s) {
        return !!s.capture;
      } else if (ye && f) {
        if (typeof s == "boolean") {
          return {
            capture: s,
            passive: true
          };
        } else if (s) {
          if (typeof s == "object" && s.passive !== false) {
            return Object.assign(Object.assign({}, s), {
              passive: true
            });
          } else {
            return s;
          }
        } else {
          return {
            passive: true
          };
        }
      } else {
        return s;
      }
    }
    if (_ && _.prepend) {
      z = E[A(_.prepend)] = E[_.prepend];
    }
    const e = K ? function (s) {
      if (!h.isExisting) {
        return I.call(h.target, h.eventName, h.capture ? H : B, h.options);
      }
    } : function (s) {
      return I.call(h.target, h.eventName, s.invoke, h.options);
    };
    const r = K ? function (s) {
      if (!s.isRemoved) {
        const f = te[s.eventName];
        let g;
        if (f) {
          g = f[s.capture ? ce : ae];
        }
        const b = g && s.target[g];
        if (b) {
          for (let y = 0; y < b.length; y++) {
            if (b[y] === s) {
              b.splice(y, 1);
              s.isRemoved = true;
              if (b.length === 0) {
                s.allRemoved = true;
                s.target[g] = null;
              }
              break;
            }
          }
        }
      }
      if (s.allRemoved) {
        return w.call(s.target, s.eventName, s.capture ? H : B, s.options);
      }
    } : function (s) {
      return w.call(s.target, s.eventName, s.invoke, s.options);
    };
    const C = _ && _.diff ? _.diff : function (s, f) {
      const g = typeof f;
      return g === "function" && s.callback === f || g === "object" && s.originalDelegate === f;
    };
    const $ = Zone[A("UNPATCHED_EVENTS")];
    const l = t[A("PASSIVE_EVENTS")];
    const u = function (s, f, g, b, y = false, D = false) {
      return function () {
        const O = this || t;
        let S = arguments[0];
        if (_ && _.transferEventName) {
          S = _.transferEventName(S);
        }
        let V = arguments[1];
        if (!V) {
          return s.apply(this, arguments);
        }
        if (we && S === "uncaughtException") {
          return s.apply(this, arguments);
        }
        let F = false;
        if (typeof V != "function") {
          if (!V.handleEvent) {
            return s.apply(this, arguments);
          }
          F = true;
        }
        if (x && !x(s, V, O, arguments)) {
          return;
        }
        const fe = ye && !!l && l.indexOf(S) !== -1;
        const se = U(arguments[2], fe);
        if ($) {
          for (let _e = 0; _e < $.length; _e++) {
            if (S === $[_e]) {
              if (fe) {
                return s.call(O, S, V, se);
              } else {
                return s.apply(this, arguments);
              }
            }
          }
        }
        const xe = !!se && (typeof se == "boolean" || se.capture);
        const nt = !!se && typeof se == "object" && se.once;
        const gt = Zone.current;
        let Ge = te[S];
        if (!Ge) {
          Je(S, G);
          Ge = te[S];
        }
        const rt = Ge[xe ? ce : ae];
        let De;
        let me = O[rt];
        let ot = false;
        if (me) {
          ot = true;
          if (X) {
            for (let _e = 0; _e < me.length; _e++) {
              if (C(me[_e], V)) {
                return;
              }
            }
          }
        } else {
          me = O[rt] = [];
        }
        const st = O.constructor.name;
        const it = Ye[st];
        if (it) {
          De = it[S];
        }
        De ||= st + f + (G ? G(S) : S);
        h.options = se;
        if (nt) {
          h.options.once = false;
        }
        h.target = O;
        h.capture = xe;
        h.eventName = S;
        h.isExisting = ot;
        const be = K ? ht : undefined;
        if (be) {
          be.taskData = h;
        }
        const he = gt.scheduleEventTask(De, V, be, g, b);
        h.target = null;
        if (be) {
          be.taskData = null;
        }
        if (nt) {
          se.once = true;
        }
        if (!!ye || typeof he.options != "boolean") {
          he.options = se;
        }
        he.target = O;
        he.capture = xe;
        he.eventName = S;
        if (F) {
          he.originalDelegate = V;
        }
        if (D) {
          me.unshift(he);
        } else {
          me.push(he);
        }
        if (y) {
          return O;
        } else {
          return undefined;
        }
      };
    };
    E[c] = u(I, v, e, r, j);
    if (z) {
      E.prependListener = u(z, ".prependListener:", function (s) {
        return z.call(h.target, h.eventName, s.invoke, h.options);
      }, r, j, true);
    }
    E[a] = function () {
      const s = this || t;
      let f = arguments[0];
      if (_ && _.transferEventName) {
        f = _.transferEventName(f);
      }
      const g = arguments[2];
      const b = !!g && (typeof g == "boolean" || g.capture);
      const y = arguments[1];
      if (!y) {
        return w.apply(this, arguments);
      }
      if (x && !x(w, y, s, arguments)) {
        return;
      }
      const D = te[f];
      let O;
      if (D) {
        O = D[b ? ce : ae];
      }
      const S = O && s[O];
      if (S) {
        for (let V = 0; V < S.length; V++) {
          const F = S[V];
          if (C(F, y)) {
            S.splice(V, 1);
            F.isRemoved = true;
            if (S.length === 0 && (F.allRemoved = true, s[O] = null, typeof f == "string")) {
              s[ke + "ON_PROPERTY" + f] = null;
            }
            F.zone.cancelTask(F);
            if (j) {
              return s;
            } else {
              return undefined;
            }
          }
        }
      }
      return w.apply(this, arguments);
    };
    E[p] = function () {
      const s = this || t;
      let f = arguments[0];
      if (_ && _.transferEventName) {
        f = _.transferEventName(f);
      }
      const g = [];
      const b = Qe(s, G ? G(f) : f);
      for (let y = 0; y < b.length; y++) {
        const D = b[y];
        g.push(D.originalDelegate ? D.originalDelegate : D.callback);
      }
      return g;
    };
    E[d] = function () {
      const s = this || t;
      let f = arguments[0];
      if (f) {
        if (_ && _.transferEventName) {
          f = _.transferEventName(f);
        }
        const g = te[f];
        if (g) {
          const D = s[g[ae]];
          const O = s[g[ce]];
          if (D) {
            const S = D.slice();
            for (let V = 0; V < S.length; V++) {
              const F = S[V];
              this[a].call(this, f, F.originalDelegate ? F.originalDelegate : F.callback, F.options);
            }
          }
          if (O) {
            const S = O.slice();
            for (let V = 0; V < S.length; V++) {
              const F = S[V];
              this[a].call(this, f, F.originalDelegate ? F.originalDelegate : F.callback, F.options);
            }
          }
        }
      } else {
        const g = Object.keys(s);
        for (let b = 0; b < g.length; b++) {
          const D = $e.exec(g[b]);
          let O = D && D[1];
          if (O && O !== "removeListener") {
            this[d].call(this, O);
          }
        }
        this[d].call(this, "removeListener");
      }
      if (j) {
        return this;
      }
    };
    ue(E[c], I);
    ue(E[a], w);
    if (oe) {
      ue(E[d], oe);
    }
    if (Q) {
      ue(E[p], Q);
    }
    return true;
  }
  let q = [];
  for (let R = 0; R < i.length; R++) {
    q[R] = J(i[R], o);
  }
  return q;
}
function Qe(t, n) {
  if (!n) {
    const a = [];
    for (let p in t) {
      const d = $e.exec(p);
      let P = d && d[1];
      if (P && (!n || P === n)) {
        const v = t[p];
        if (v) {
          for (let m = 0; m < v.length; m++) {
            a.push(v[m]);
          }
        }
      }
    }
    return a;
  }
  let i = te[n];
  if (!i) {
    Je(n);
    i = te[n];
  }
  const o = t[i[ae]];
  const c = t[i[ce]];
  if (o) {
    if (c) {
      return o.concat(c);
    } else {
      return o.slice();
    }
  } else if (c) {
    return c.slice();
  } else {
    return [];
  }
}
function _t(t, n) {
  const i = t.Event;
  if (i && i.prototype) {
    n.patchMethod(i.prototype, "stopImmediatePropagation", o => function (c, a) {
      c[Ke] = true;
      if (o) {
        o.apply(c, a);
      }
    });
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Et(t, n, i, o, c) {
  const a = Zone.__symbol__(o);
  if (n[a]) {
    return;
  }
  const p = n[a] = n[o];
  n[o] = function (d, P, v) {
    if (P && P.prototype) {
      c.forEach(function (m) {
        const L = `${i}.${o}::${m}`;
        const Z = P.prototype;
        try {
          if (Z.hasOwnProperty(m)) {
            const N = t.ObjectGetOwnPropertyDescriptor(Z, m);
            if (N && N.value) {
              N.value = t.wrapWithCurrentZone(N.value, L);
              t._redefineProperty(P.prototype, m, N);
            } else {
              Z[m] &&= t.wrapWithCurrentZone(Z[m], L);
            }
          } else {
            Z[m] &&= t.wrapWithCurrentZone(Z[m], L);
          }
        } catch {}
      });
    }
    return p.call(n, d, P, v);
  };
  t.attachOriginToPatched(n[o], p);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function et(t, n, i) {
  if (!i || i.length === 0) {
    return n;
  }
  const o = i.filter(a => a.target === t);
  if (!o || o.length === 0) {
    return n;
  }
  const c = o[0].ignoreProperties;
  return n.filter(a => c.indexOf(a) === -1);
}
function tt(t, n, i, o) {
  if (t) {
    Xe(t, et(t, n, i), o);
  }
}
function He(t) {
  return Object.getOwnPropertyNames(t).filter(n => n.startsWith("on") && n.length > 2).map(n => n.substring(2));
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("util", (t, n, i) => {
  const o = He(t);
  i.patchOnProperties = Xe;
  i.patchMethod = le;
  i.bindArguments = Le;
  i.patchMacroTask = lt;
  const c = n.__symbol__("BLACK_LISTED_EVENTS");
  const a = n.__symbol__("UNPATCHED_EVENTS");
  if (t[a]) {
    t[c] = t[a];
  }
  if (t[c]) {
    n[c] = n[a] = t[c];
  }
  i.patchEventPrototype = _t;
  i.patchEventTarget = dt;
  i.isIEOrEdge = ft;
  i.ObjectDefineProperty = Ee;
  i.ObjectGetOwnPropertyDescriptor = ie;
  i.ObjectCreate = ge;
  i.ArraySlice = Ve;
  i.patchClass = ve;
  i.wrapWithCurrentZone = Ie;
  i.filterProperties = et;
  i.attachOriginToPatched = ue;
  i._redefineProperty = Object.defineProperty;
  i.patchCallbacks = Et;
  i.getGlobalObjects = () => ({
    globalSources: Ye,
    zoneSymbolEventNames: te,
    eventNames: o,
    isBrowser: je,
    isMix: Ue,
    isNode: we,
    TRUE_STR: ce,
    FALSE_STR: ae,
    ZONE_SYMBOL_PREFIX: ke,
    ADD_EVENT_LISTENER_STR: Oe,
    REMOVE_EVENT_LISTENER_STR: Se
  });
});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ce = A("zoneTask");
function pe(t, n, i, o) {
  let c = null;
  let a = null;
  i += o;
  const p = {};
  function d(v) {
    const m = v.data;
    m.args[0] = function () {
      return v.invoke.apply(this, arguments);
    };
    m.handleId = c.apply(t, m.args);
    return v;
  }
  function P(v) {
    return a.call(t, v.data.handleId);
  }
  c = le(t, n += o, v => function (m, L) {
    if (typeof L[0] == "function") {
      const Z = {
        isPeriodic: o === "Interval",
        delay: o === "Timeout" || o === "Interval" ? L[1] || 0 : undefined,
        args: L
      };
      const N = L[0];
      L[0] = function () {
        try {
          return N.apply(this, arguments);
        } finally {
          if (!Z.isPeriodic) {
            if (typeof Z.handleId == "number") {
              delete p[Z.handleId];
            } else if (Z.handleId) {
              Z.handleId[Ce] = null;
            }
          }
        }
      };
      const B = Me(n, L[0], Z, d, P);
      if (!B) {
        return B;
      }
      const H = B.data.handleId;
      if (typeof H == "number") {
        p[H] = B;
      } else if (H) {
        H[Ce] = B;
      }
      if (H && H.ref && H.unref && typeof H.ref == "function" && typeof H.unref == "function") {
        B.ref = H.ref.bind(H);
        B.unref = H.unref.bind(H);
      }
      if (typeof H == "number" || H) {
        return H;
      } else {
        return B;
      }
    }
    return v.apply(t, L);
  });
  a = le(t, i, v => function (m, L) {
    const Z = L[0];
    let N;
    if (typeof Z == "number") {
      N = p[Z];
    } else {
      N = Z && Z[Ce];
      N ||= Z;
    }
    if (N && typeof N.type == "string") {
      if (N.state !== "notScheduled" && (N.cancelFn && N.data.isPeriodic || N.runCount === 0)) {
        if (typeof Z == "number") {
          delete p[Z];
        } else if (Z) {
          Z[Ce] = null;
        }
        N.zone.cancelTask(N);
      }
    } else {
      v.apply(t, L);
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
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("legacy", t => {
  const n = t[Zone.__symbol__("legacyPatch")];
  if (n) {
    n();
  }
});
Zone.__load_patch("queueMicrotask", (t, n, i) => {
  i.patchMethod(t, "queueMicrotask", o => function (c, a) {
    n.current.scheduleMicroTask("queueMicrotask", a[0]);
  });
});
Zone.__load_patch("timers", t => {
  const n = "set";
  const i = "clear";
  pe(t, n, i, "Timeout");
  pe(t, n, i, "Interval");
  pe(t, n, i, "Immediate");
});
Zone.__load_patch("requestAnimationFrame", t => {
  pe(t, "request", "cancel", "AnimationFrame");
  pe(t, "mozRequest", "mozCancel", "AnimationFrame");
  pe(t, "webkitRequest", "webkitCancel", "AnimationFrame");
});
Zone.__load_patch("blocking", (t, n) => {
  const i = ["alert", "prompt", "confirm"];
  for (let o = 0; o < i.length; o++) {
    le(t, i[o], (a, p, d) => function (P, v) {
      return n.current.run(a, t, v, d);
    });
  }
});
Zone.__load_patch("EventTarget", (t, n, i) => {
  (function mt(t, n) {
    n.patchEventPrototype(t, n);
  })(t, i);
  /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
  (function pt(t, n) {
    if (Zone[n.symbol("patchEventTarget")]) {
      return;
    }
    const {
      eventNames: i,
      zoneSymbolEventNames: o,
      TRUE_STR: c,
      FALSE_STR: a,
      ZONE_SYMBOL_PREFIX: p
    } = n.getGlobalObjects();
    for (let P = 0; P < i.length; P++) {
      const v = i[P];
      const Z = p + (v + a);
      const N = p + (v + c);
      o[v] = {};
      o[v][a] = Z;
      o[v][c] = N;
    }
    const d = t.EventTarget;
    if (d && d.prototype) {
      n.patchEventTarget(t, n, [d && d.prototype]);
    }
  })(t, i);
  const o = t.XMLHttpRequestEventTarget;
  if (o && o.prototype) {
    i.patchEventTarget(t, i, [o.prototype]);
  }
});
Zone.__load_patch("MutationObserver", (t, n, i) => {
  ve("MutationObserver");
  ve("WebKitMutationObserver");
});
Zone.__load_patch("IntersectionObserver", (t, n, i) => {
  ve("IntersectionObserver");
});
Zone.__load_patch("FileReader", (t, n, i) => {
  ve("FileReader");
});
Zone.__load_patch("on_property", (t, n, i) => {
  (function Tt(t, n) {
    if (we && !Ue || Zone[t.symbol("patchEvents")]) {
      return;
    }
    const i = n.__Zone_ignore_on_properties;
    let o = [];
    if (je) {
      const c = window;
      o = o.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
      const a = function ut() {
        try {
          const t = Te.navigator.userAgent;
          if (t.indexOf("MSIE ") !== -1 || t.indexOf("Trident/") !== -1) {
            return true;
          }
        } catch {}
        return false;
      }() ? [{
        target: c,
        ignoreProperties: ["error"]
      }] : [];
      tt(c, He(c), i && i.concat(a), de(c));
    }
    o = o.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
    for (let c = 0; c < o.length; c++) {
      const a = n[o[c]];
      if (a && a.prototype) {
        tt(a.prototype, He(a.prototype), i);
      }
    }
  })(i, t);
});
Zone.__load_patch("customElements", (t, n, i) => {
  (function yt(t, n) {
    const {
      isBrowser: i,
      isMix: o
    } = n.getGlobalObjects();
    if ((i || o) && t.customElements && "customElements" in t) {
      n.patchCallbacks(n, t.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"]);
    }
  })(t, i);
});
Zone.__load_patch("XHR", (t, n) => {
  (function P(v) {
    const m = v.XMLHttpRequest;
    if (!m) {
      return;
    }
    const L = m.prototype;
    let N = L[Ze];
    let B = L[Ne];
    if (!N) {
      const h = v.XMLHttpRequestEventTarget;
      if (h) {
        const I = h.prototype;
        N = I[Ze];
        B = I[Ne];
      }
    }
    const H = "readystatechange";
    const J = "scheduled";
    function q(h) {
      const I = h.data;
      const w = I.target;
      w[a] = false;
      w[d] = false;
      const Q = w[c];
      if (!N) {
        N = w[Ze];
        B = w[Ne];
      }
      if (Q) {
        B.call(w, H, Q);
      }
      const oe = w[c] = () => {
        if (w.readyState === w.DONE) {
          if (!I.aborted && w[a] && h.state === J) {
            const U = w[n.__symbol__("loadfalse")];
            if (w.status !== 0 && U && U.length > 0) {
              const re = h.invoke;
              h.invoke = function () {
                const ee = w[n.__symbol__("loadfalse")];
                for (let W = 0; W < ee.length; W++) {
                  if (ee[W] === h) {
                    ee.splice(W, 1);
                  }
                }
                if (!I.aborted && h.state === J) {
                  re.call(h);
                }
              };
              U.push(h);
            } else {
              h.invoke();
            }
          } else if (!I.aborted && w[a] === false) {
            w[d] = true;
          }
        }
      };
      N.call(w, H, oe);
      w[i] ||= h;
      E.apply(w, I.args);
      w[a] = true;
      return h;
    }
    function R() {}
    function _(h) {
      const I = h.data;
      I.aborted = true;
      return G.apply(I.target, I.args);
    }
    const K = le(L, "open", () => function (h, I) {
      h[o] = I[2] == 0;
      h[p] = I[1];
      return K.apply(h, I);
    });
    const X = A("fetchTaskAborting");
    const j = A("fetchTaskScheduling");
    const E = le(L, "send", () => function (h, I) {
      if (n.current[j] === true || h[o]) {
        return E.apply(h, I);
      }
      {
        const w = {
          target: h,
          url: h[p],
          isPeriodic: false,
          args: I,
          aborted: false
        };
        const Q = Me("XMLHttpRequest.send", R, w, q, _);
        if (h && h[d] === true && !w.aborted && Q.state === J) {
          Q.invoke();
        }
      }
    });
    const G = le(L, "abort", () => function (h, I) {
      const w = function Z(h) {
        return h[i];
      }(h);
      if (w && typeof w.type == "string") {
        if (w.cancelFn == null || w.data && w.data.aborted) {
          return;
        }
        w.zone.cancelTask(w);
      } else if (n.current[X] === true) {
        return G.apply(h, I);
      }
    });
  })(t);
  const i = A("xhrTask");
  const o = A("xhrSync");
  const c = A("xhrListener");
  const a = A("xhrScheduled");
  const p = A("xhrURL");
  const d = A("xhrErrorBeforeScheduled");
});
Zone.__load_patch("geolocation", t => {
  if (t.navigator && t.navigator.geolocation) {
    (function at(t, n) {
      const i = t.constructor.name;
      for (let o = 0; o < n.length; o++) {
        const c = n[o];
        const a = t[c];
        if (a) {
          if (!Fe(ie(t, c))) {
            continue;
          }
          t[c] = (d => {
            const P = function () {
              return d.apply(this, Le(arguments, i + "." + c));
            };
            ue(P, d);
            return P;
          })(a);
        }
      }
    })(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
  }
});
Zone.__load_patch("PromiseRejectionEvent", (t, n) => {
  function i(o) {
    return function (c) {
      Qe(t, o).forEach(p => {
        const d = t.PromiseRejectionEvent;
        if (d) {
          const P = new d(o, {
            promise: c.promise,
            reason: c.rejection
          });
          p.invoke(P);
        }
      });
    };
  }
  if (t.PromiseRejectionEvent) {
    n[A("unhandledPromiseRejectionHandler")] = i("unhandledrejection");
    n[A("rejectionHandledHandler")] = i("rejectionhandled");
  }
});