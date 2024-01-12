import * as i from "94650";
import * as t from "36895";
function b(oe, we) {
  return (b = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (ce, nt) {
    ce.__proto__ = nt;
  } || function (ce, nt) {
    for (var sn in nt) {
      if (nt.hasOwnProperty(sn)) {
        ce[sn] = nt[sn];
      }
    }
  })(oe, we);
}
/*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
      
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
      
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */
function k(oe, we) {
  function ce() {
    this.constructor = oe;
  }
  b(oe, we);
  oe.prototype = we === null ? Object.create(we) : (ce.prototype = we.prototype, new ce());
}
function M() {
  M = Object.assign || function (we) {
    for (var ce, nt = 1, sn = arguments.length; nt < sn; nt++) {
      for (var Pn in ce = arguments[nt]) {
        if (Object.prototype.hasOwnProperty.call(ce, Pn)) {
          we[Pn] = ce[Pn];
        }
      }
    }
    return we;
  };
  return M.apply(this, arguments);
}
function v(oe, we) {
  var ce = typeof Symbol == "function" && oe[Symbol.iterator];
  if (!ce) {
    return oe;
  }
  var sn;
  var Ei;
  var nt = ce.call(oe);
  var Pn = [];
  try {
    for (; (we === undefined || we-- > 0) && !(sn = nt.next()).done;) {
      Pn.push(sn.value);
    }
  } catch (Hi) {
    Ei = {
      error: Hi
    };
  } finally {
    try {
      if (sn && !sn.done && (ce = nt.return)) {
        ce.call(nt);
      }
    } finally {
      if (Ei) {
        throw Ei.error;
      }
    }
  }
  return Pn;
}
function C() {
  for (var oe = [], we = 0; we < arguments.length; we++) {
    oe = oe.concat(v(arguments[we]));
  }
  return oe;
}
var S = [];
Object.freeze(S);
var L = {};
Object.freeze(L);
var I = {};
function E() {
  if (typeof window !== "undefined") {
    return window;
  } else if (typeof global !== "undefined") {
    return global;
  } else {
    return I;
  }
}
function O() {
  return ++qi.mobxGuid;
}
function x(oe) {
  U(false, oe);
  throw "X";
}
function U(oe, we) {
  if (!oe) {
    throw new Error("[mobx] " + (we || "An invariant failed, however the error is obfuscated because this is an production build."));
  }
}
function Z(oe) {
  var we = false;
  return function () {
    if (!we) {
      we = true;
      return oe.apply(this, arguments);
    }
  };
}
function X() {}
function fe(oe) {
  return oe !== null && typeof oe == "object";
}
function q(oe) {
  if (oe === null || typeof oe != "object") {
    return false;
  }
  var we = Object.getPrototypeOf(oe);
  return we === Object.prototype || we === null;
}
function se(oe, we, ce) {
  Object.defineProperty(oe, we, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: ce
  });
}
function W(oe, we, ce) {
  Object.defineProperty(oe, we, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: ce
  });
}
function he(oe, we) {
  var ce = "isMobX" + oe;
  we.prototype[ce] = true;
  return function (nt) {
    return fe(nt) && nt[ce] === true;
  };
}
function Re(oe) {
  return E().Map !== undefined && oe instanceof E().Map;
}
function Ge(oe) {
  return oe instanceof Set;
}
function Ue(oe) {
  for (var we = [];;) {
    var ce = oe.next();
    if (ce.done) {
      break;
    }
    we.push(ce.value);
  }
  return we;
}
function ot() {
  return typeof Symbol == "function" && Symbol.toPrimitive || "@@toPrimitive";
}
function st(oe) {
  if (oe === null) {
    return null;
  } else if (typeof oe == "object") {
    return "" + oe;
  } else {
    return oe;
  }
}
function rt() {
  return typeof Symbol == "function" && Symbol.iterator || "@@iterator";
}
function Oe(oe, we) {
  W(oe, rt(), we);
}
function Ee(oe) {
  oe[rt()] = Be;
  return oe;
}
function ke() {
  return typeof Symbol == "function" && Symbol.toStringTag || "@@toStringTag";
}
function Be() {
  return this;
}
var De = function () {
  function oe(we) {
    if (we === undefined) {
      we = "Atom@" + O();
    }
    this.name = we;
    this.isPendingUnobservation = false;
    this.isBeingObserved = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = vr.NOT_TRACKING;
  }
  oe.prototype.onBecomeUnobserved = function () {};
  oe.prototype.onBecomeObserved = function () {};
  oe.prototype.reportObserved = function () {
    return Pa(this);
  };
  oe.prototype.reportChanged = function () {
    Es();
    (function Po(oe) {
      if (oe.lowestObserverState !== vr.STALE) {
        oe.lowestObserverState = vr.STALE;
        for (var we = oe.observers, ce = we.length; ce--;) {
          var nt = we[ce];
          if (nt.dependenciesState === vr.UP_TO_DATE) {
            if (nt.isTracing !== Ur.NONE) {
              Fo(nt, oe);
            }
            nt.onBecomeStale();
          }
          nt.dependenciesState = vr.STALE;
        }
      }
    })(this);
    Ao();
  };
  oe.prototype.toString = function () {
    return this.name;
  };
  return oe;
}();
var Qe = he("Atom", De);
function Yt(oe, we) {
  return oe === we;
}
var et = {
  identity: Yt,
  structural: function Dn(oe, we) {
    return As(oe, we);
  },
  default: function lt(oe, we) {
    return function pe(oe, we) {
      return typeof oe == "number" && typeof we == "number" && isNaN(oe) && isNaN(we);
    }(oe, we) || Yt(oe, we);
  },
  shallow: function Et(oe, we) {
    return As(oe, we, 1);
  }
};
var St = {};
var ve = {};
function Lt(oe, we) {
  var ce = we ? St : ve;
  return ce[oe] ||= {
    configurable: true,
    enumerable: we,
    get: function () {
      ft(this);
      return this[oe];
    },
    set: function (nt) {
      ft(this);
      this[oe] = nt;
    }
  };
}
function ft(oe) {
  if (oe.__mobxDidRunLazyInitializers !== true) {
    var we = oe.__mobxDecorators;
    if (we) {
      se(oe, "__mobxDidRunLazyInitializers", true);
      for (var ce in we) {
        var nt = we[ce];
        nt.propertyCreator(oe, nt.prop, nt.descriptor, nt.decoratorTarget, nt.decoratorArguments);
      }
    }
  }
}
function qe(oe, we) {
  return function () {
    var nt;
    function sn(Ei, Hi, xs, _a) {
      if (_a === true) {
        we(Ei, Hi, xs, Ei, nt);
        return null;
      } else {
        if (!Object.prototype.hasOwnProperty.call(Ei, "__mobxDecorators")) {
          se(Ei, "__mobxDecorators", M({}, Ei.__mobxDecorators));
        }
        Ei.__mobxDecorators[Hi] = {
          prop: Hi,
          propertyCreator: we,
          descriptor: xs,
          decoratorTarget: Ei,
          decoratorArguments: nt
        };
        return Lt(Hi, oe);
      }
    }
    if (Me(arguments)) {
      nt = S;
      return sn.apply(null, arguments);
    } else {
      nt = Array.prototype.slice.call(arguments);
      return sn;
    }
  };
}
function Me(oe) {
  return (oe.length === 2 || oe.length === 3) && typeof oe[1] == "string" || oe.length === 4 && oe[3] === true;
}
function ne(oe, we, ce) {
  if (ao(oe)) {
    return oe;
  } else if (Array.isArray(oe)) {
    return Zi.array(oe, {
      name: ce
    });
  } else if (q(oe)) {
    return Zi.object(oe, undefined, {
      name: ce
    });
  } else if (Re(oe)) {
    return Zi.map(oe, {
      name: ce
    });
  } else if (Ge(oe)) {
    return Zi.set(oe, {
      name: ce
    });
  } else {
    return oe;
  }
}
function it(oe) {
  return oe;
}
function Ut(oe) {
  var we = qe(true, function (nt, sn, Pn, Ei, Hi) {
    (function Gt(oe, we, ce, nt) {
      var sn = Ct(oe);
      if (dn(sn)) {
        var Pn = $r(sn, {
          object: oe,
          name: we,
          type: "add",
          newValue: ce
        });
        if (!Pn) {
          return;
        }
        ce = Pn.newValue;
      }
      ce = (sn.values[we] = new fa(ce, nt, sn.name + "." + we, false)).value;
      Object.defineProperty(oe, we, function cs(oe) {
        return ki[oe] ||= {
          configurable: true,
          enumerable: true,
          get: function () {
            return this.$mobx.read(this, oe);
          },
          set: function (we) {
            this.$mobx.write(this, oe, we);
          }
        };
      }(we));
      if (sn.keys) {
        sn.keys.push(we);
      }
      (function Ts(oe, we, ce, nt) {
        var sn = wi(oe);
        var Pn = po();
        var Ei = sn || Pn ? {
          type: "add",
          object: we,
          name: ce,
          newValue: nt
        } : null;
        if (Pn) {
          hs(M({}, Ei, {
            name: oe.name,
            key: ce
          }));
        }
        if (sn) {
          Hr(oe, Ei);
        }
        if (Pn) {
          eo();
        }
      })(sn, oe, we, ce);
    })(nt, sn, Pn ? Pn.initializer ? Pn.initializer.call(nt) : Pn.value : undefined, oe);
  });
  if (typeof process !== "undefined") {
    process;
  }
  var ce = we;
  ce.enhancer = oe;
  return ce;
}
var Ze = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined
};
function Wt(oe) {
  if (oe == null) {
    return Ze;
  } else if (typeof oe == "string") {
    return {
      name: oe,
      deep: true
    };
  } else {
    return oe;
  }
}
function hn(oe) {
  if (oe.defaultDecorator) {
    return oe.defaultDecorator.enhancer;
  } else if (oe.deep === false) {
    return it;
  } else {
    return ne;
  }
}
Object.freeze(Ze);
Object.freeze({
  deep: false,
  name: undefined,
  defaultDecorator: undefined
});
var Kt = Ut(ne);
var on = Ut(function me(oe, we, ce) {
  if (oe == null || Ga(oe) || Bl(oe) || bs(oe) || mt(oe)) {
    return oe;
  } else if (Array.isArray(oe)) {
    return Zi.array(oe, {
      name: ce,
      deep: false
    });
  } else if (q(oe)) {
    return Zi.object(oe, undefined, {
      name: ce,
      deep: false
    });
  } else if (Re(oe)) {
    return Zi.map(oe, {
      name: ce,
      deep: false
    });
  } else if (Ge(oe)) {
    return Zi.set(oe, {
      name: ce,
      deep: false
    });
  } else {
    return x(false);
  }
});
var Rn = Ut(it);
var In = Ut(function bt(oe, we, ce) {
  if (As(oe, we)) {
    return we;
  } else {
    return oe;
  }
});
var Si = {
  box: function (oe, we) {
    if (arguments.length > 2) {
      $i("box");
    }
    var ce = Wt(we);
    return new fa(oe, hn(ce), ce.name, true, ce.equals);
  },
  shallowBox: function (oe, we) {
    if (arguments.length > 2) {
      $i("shallowBox");
    }
    return Zi.box(oe, {
      name: we,
      deep: false
    });
  },
  array: function (oe, we) {
    if (arguments.length > 2) {
      $i("array");
    }
    var ce = Wt(we);
    return new lr(oe, hn(ce), ce.name);
  },
  shallowArray: function (oe, we) {
    if (arguments.length > 2) {
      $i("shallowArray");
    }
    return Zi.array(oe, {
      name: we,
      deep: false
    });
  },
  map: function (oe, we) {
    if (arguments.length > 2) {
      $i("map");
    }
    var ce = Wt(we);
    return new Wa(oe, hn(ce), ce.name);
  },
  shallowMap: function (oe, we) {
    if (arguments.length > 2) {
      $i("shallowMap");
    }
    return Zi.map(oe, {
      name: we,
      deep: false
    });
  },
  set: function (oe, we) {
    if (arguments.length > 2) {
      $i("set");
    }
    var ce = Wt(we);
    return new gc(oe, hn(ce), ce.name);
  },
  object: function (oe, we, ce) {
    if (typeof arguments[1] == "string") {
      $i("object");
    }
    var nt = Wt(ce);
    return vt({}, oe, we, nt);
  },
  shallowObject: function (oe, we) {
    if (typeof arguments[1] == "string") {
      $i("shallowObject");
    }
    return Zi.object(oe, {}, {
      name: we,
      deep: false
    });
  },
  ref: Rn,
  shallow: on,
  deep: Kt,
  struct: In
};
var Zi = function di(oe, we, ce) {
  if (typeof arguments[1] == "string") {
    return Kt.apply(null, arguments);
  }
  if (ao(oe)) {
    return oe;
  }
  var nt = q(oe) ? Zi.object(oe, we, ce) : Array.isArray(oe) ? Zi.array(oe, we) : Re(oe) ? Zi.map(oe, we) : Ge(oe) ? Zi.set(oe, we) : oe;
  if (nt !== oe) {
    return nt;
  }
  x(false);
};
function $i(oe) {
  x("Expected one or two arguments to observable." + oe + ". Did you accidentally try to use observable." + oe + " as decorator?");
}
Object.keys(Si).forEach(function (oe) {
  return Zi[oe] = Si[oe];
});
var Qi = qe(false, function (oe, we, ce, nt, sn) {
  (function Sn(oe, we, ce) {
    var nt = Ct(oe);
    ce.name = nt.name + "." + we;
    ce.context = oe;
    nt.values[we] = new ks(ce);
    Object.defineProperty(oe, we, function Yo(oe) {
      return Ui[oe] ||= {
        configurable: qi.computedConfigurable,
        enumerable: false,
        get: function () {
          return La(this).read(this, oe);
        },
        set: function (we) {
          La(this).write(this, oe, we);
        }
      };
    }(we));
  })(oe, we, M({
    get: ce.get,
    set: ce.set
  }, sn[0] || {}));
});
var br = Qi({
  equals: et.structural
});
function Ar(we, ce, nt) {
  if (typeof ce == "string" || we !== null && typeof we == "object" && arguments.length === 1) {
    return Qi.apply(null, arguments);
  }
  var sn = typeof ce == "object" ? ce : {};
  sn.get = we;
  sn.set = typeof ce == "function" ? ce : sn.set;
  sn.name = sn.name || we.name || "";
  return new ks(sn);
}
Ar.struct = br;
var vr = (() => {
  (oe = vr ||= {})[oe.NOT_TRACKING = -1] = "NOT_TRACKING";
  oe[oe.UP_TO_DATE = 0] = "UP_TO_DATE";
  oe[oe.POSSIBLY_STALE = 1] = "POSSIBLY_STALE";
  oe[oe.STALE = 2] = "STALE";
  return vr;
  var oe;
})();
var Ur = (() => {
  (oe = Ur ||= {})[oe.NONE = 0] = "NONE";
  oe[oe.LOG = 1] = "LOG";
  oe[oe.BREAK = 2] = "BREAK";
  return Ur;
  var oe;
})();
var Br = function oe(we) {
  this.cause = we;
};
function rs(oe) {
  return oe instanceof Br;
}
function vs(oe) {
  switch (oe.dependenciesState) {
    case vr.UP_TO_DATE:
      return false;
    case vr.NOT_TRACKING:
    case vr.STALE:
      return true;
    case vr.POSSIBLY_STALE:
      for (var we = oi(), ce = oe.observing, nt = ce.length, sn = 0; sn < nt; sn++) {
        var Pn = ce[sn];
        if (Gs(Pn)) {
          if (qi.disableErrorBoundaries) {
            Pn.get();
          } else {
            try {
              Pn.get();
            } catch {
              fi(we);
              return true;
            }
          }
          if (oe.dependenciesState === vr.STALE) {
            fi(we);
            return true;
          }
        }
      }
      An(oe);
      fi(we);
      return false;
  }
}
function so(oe) {
  var we = oe.observers.length > 0;
  if (qi.computationDepth > 0 && we) {
    x(false);
  }
  if (!qi.allowStateChanges && (we || qi.enforceActions === "strict")) {
    x(false);
  }
}
function js(oe, we, ce) {
  var nt = bn(true);
  An(oe);
  oe.newObserving = new Array(oe.observing.length + 100);
  oe.unboundDepsCount = 0;
  oe.runId = ++qi.runId;
  var Pn;
  var sn = qi.trackingDerivation;
  qi.trackingDerivation = oe;
  if (qi.disableErrorBoundaries === true) {
    Pn = we.call(ce);
  } else {
    try {
      Pn = we.call(ce);
    } catch (Ei) {
      Pn = new Br(Ei);
    }
  }
  qi.trackingDerivation = sn;
  (function ns(oe) {
    for (var we = oe.observing, ce = oe.observing = oe.newObserving, nt = vr.UP_TO_DATE, sn = 0, Pn = oe.unboundDepsCount, Ei = 0; Ei < Pn; Ei++) {
      if ((Hi = ce[Ei]).diffValue === 0) {
        Hi.diffValue = 1;
        if (sn !== Ei) {
          ce[sn] = Hi;
        }
        sn++;
      }
      if (Hi.dependenciesState > nt) {
        nt = Hi.dependenciesState;
      }
    }
    ce.length = sn;
    oe.newObserving = null;
    Pn = we.length;
    for (; Pn--;) {
      if ((Hi = we[Pn]).diffValue === 0) {
        ta(Hi, oe);
      }
      Hi.diffValue = 0;
    }
    for (; sn--;) {
      var Hi;
      if ((Hi = ce[sn]).diffValue === 1) {
        Hi.diffValue = 0;
        la(Hi, oe);
      }
    }
    if (nt !== vr.UP_TO_DATE) {
      oe.dependenciesState = nt;
      oe.onBecomeStale();
    }
  })(oe);
  pn(nt);
  return Pn;
}
function pr(oe) {
  var we = oe.observing;
  oe.observing = [];
  for (var ce = we.length; ce--;) {
    ta(we[ce], oe);
  }
  oe.dependenciesState = vr.NOT_TRACKING;
}
function Bn(oe) {
  var we = oi();
  var ce = oe();
  fi(we);
  return ce;
}
function oi() {
  var oe = qi.trackingDerivation;
  qi.trackingDerivation = null;
  return oe;
}
function fi(oe) {
  qi.trackingDerivation = oe;
}
function bn(oe) {
  var we = qi.allowStateReads;
  qi.allowStateReads = oe;
  return we;
}
function pn(oe) {
  qi.allowStateReads = oe;
}
function An(oe) {
  if (oe.dependenciesState !== vr.UP_TO_DATE) {
    oe.dependenciesState = vr.UP_TO_DATE;
    for (var we = oe.observing, ce = we.length; ce--;) {
      we[ce].lowestObserverState = vr.UP_TO_DATE;
    }
  }
}
var si = 0;
var Di = 1;
function dr(oe, we) {
  function ce() {
    return Vr(oe, we, this, arguments);
  }
  ce.isMobxAction = true;
  return ce;
}
function Vr(oe, we, ce, nt) {
  var sn = function Or(oe, we, ce) {
    var nt = po() && !!oe;
    var sn = 0;
    if (nt) {
      sn = Date.now();
      var Pn = ce && ce.length || 0;
      var Ei = new Array(Pn);
      if (Pn > 0) {
        for (var Hi = 0; Hi < Pn; Hi++) {
          Ei[Hi] = ce[Hi];
        }
      }
      hs({
        type: "action",
        name: oe,
        object: we,
        arguments: Ei
      });
    }
    var xs = oi();
    Es();
    var Ja = {
      prevDerivation: xs,
      prevAllowStateChanges: kr(true),
      prevAllowStateReads: bn(true),
      notifySpy: nt,
      startTime: sn,
      actionId: Di++,
      parentActionId: si
    };
    si = Ja.actionId;
    return Ja;
  }(oe, ce, nt);
  try {
    return we.apply(ce, nt);
  } catch (Pn) {
    sn.error = Pn;
    throw Pn;
  } finally {
    (function is(oe) {
      if (si !== oe.actionId) {
        x("invalid action stack. did you forget to finish an action?");
      }
      si = oe.parentActionId;
      if (oe.error !== undefined) {
        qi.suppressReactionErrors = true;
      }
      Zs(oe.prevAllowStateChanges);
      pn(oe.prevAllowStateReads);
      Ao();
      fi(oe.prevDerivation);
      if (oe.notifySpy) {
        eo({
          time: Date.now() - oe.startTime
        });
      }
      qi.suppressReactionErrors = false;
    })(sn);
  }
}
function kr(oe) {
  var we = qi.allowStateChanges;
  qi.allowStateChanges = oe;
  return we;
}
function Zs(oe) {
  qi.allowStateChanges = oe;
}
var fa = function (oe) {
  function we(ce, nt, sn, Pn, Ei) {
    if (sn === undefined) {
      sn = "ObservableValue@" + O();
    }
    if (Pn === undefined) {
      Pn = true;
    }
    if (Ei === undefined) {
      Ei = et.default;
    }
    var Hi = oe.call(this, sn) || this;
    Hi.enhancer = nt;
    Hi.name = sn;
    Hi.equals = Ei;
    Hi.hasUnreportedChange = false;
    Hi.value = nt(ce, undefined, sn);
    if (Pn && po()) {
      zs({
        type: "create",
        name: Hi.name,
        newValue: "" + Hi.value
      });
    }
    return Hi;
  }
  k(we, oe);
  we.prototype.dehanceValue = function (ce) {
    if (this.dehancer !== undefined) {
      return this.dehancer(ce);
    } else {
      return ce;
    }
  };
  we.prototype.set = function (ce) {
    var nt = this.value;
    if ((ce = this.prepareNewValue(ce)) !== qi.UNCHANGED) {
      var sn = po();
      if (sn) {
        hs({
          type: "update",
          name: this.name,
          newValue: ce,
          oldValue: nt
        });
      }
      this.setNewValue(ce);
      if (sn) {
        eo();
      }
    }
  };
  we.prototype.prepareNewValue = function (ce) {
    so(this);
    if (dn(this)) {
      var nt = $r(this, {
        object: this,
        type: "update",
        newValue: ce
      });
      if (!nt) {
        return qi.UNCHANGED;
      }
      ce = nt.newValue;
    }
    ce = this.enhancer(ce, this.value, this.name);
    if (this.equals(this.value, ce)) {
      return qi.UNCHANGED;
    } else {
      return ce;
    }
  };
  we.prototype.setNewValue = function (ce) {
    var nt = this.value;
    this.value = ce;
    this.reportChanged();
    if (wi(this)) {
      Hr(this, {
        type: "update",
        object: this,
        newValue: ce,
        oldValue: nt
      });
    }
  };
  we.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };
  we.prototype.intercept = function (ce) {
    return Yi(this, ce);
  };
  we.prototype.observe = function (ce, nt) {
    if (nt) {
      ce({
        object: this,
        type: "update",
        newValue: this.value,
        oldValue: undefined
      });
    }
    return Aa(this, ce);
  };
  we.prototype.toJSON = function () {
    return this.get();
  };
  we.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };
  we.prototype.valueOf = function () {
    return st(this.get());
  };
  return we;
}(De);
fa.prototype[ot()] = fa.prototype.valueOf;
he("ObservableValue", fa);
var ks = function () {
  function oe(we) {
    this.dependenciesState = vr.NOT_TRACKING;
    this.observing = [];
    this.newObserving = null;
    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = vr.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + O();
    this.value = new Br(null);
    this.isComputing = false;
    this.isRunningSetter = false;
    this.isTracing = Ur.NONE;
    this.derivation = we.get;
    this.name = we.name || "ComputedValue@" + O();
    if (we.set) {
      this.setter = dr(this.name + "-setter", we.set);
    }
    this.equals = we.equals || (we.compareStructural || we.struct ? et.structural : et.default);
    this.scope = we.context;
    this.requiresReaction = !!we.requiresReaction;
    this.keepAlive = !!we.keepAlive;
  }
  oe.prototype.onBecomeStale = function () {
    (function qs(oe) {
      if (oe.lowestObserverState === vr.UP_TO_DATE) {
        oe.lowestObserverState = vr.POSSIBLY_STALE;
        for (var we = oe.observers, ce = we.length; ce--;) {
          var nt = we[ce];
          if (nt.dependenciesState === vr.UP_TO_DATE) {
            nt.dependenciesState = vr.POSSIBLY_STALE;
            if (nt.isTracing !== Ur.NONE) {
              Fo(nt, oe);
            }
            nt.onBecomeStale();
          }
        }
      }
    })(this);
  };
  oe.prototype.onBecomeUnobserved = function () {};
  oe.prototype.onBecomeObserved = function () {};
  oe.prototype.get = function () {
    if (this.isComputing) {
      x("Cycle detected in computation " + this.name + ": " + this.derivation);
    }
    if (qi.inBatch !== 0 || this.observers.length !== 0 || this.keepAlive) {
      Pa(this);
      if (vs(this) && this.trackAndCompute()) {
        (function dl(oe) {
          if (oe.lowestObserverState !== vr.STALE) {
            oe.lowestObserverState = vr.STALE;
            for (var we = oe.observers, ce = we.length; ce--;) {
              var nt = we[ce];
              if (nt.dependenciesState === vr.POSSIBLY_STALE) {
                nt.dependenciesState = vr.STALE;
              } else if (nt.dependenciesState === vr.UP_TO_DATE) {
                oe.lowestObserverState = vr.UP_TO_DATE;
              }
            }
          }
        })(this);
      }
    } else if (vs(this)) {
      this.warnAboutUntrackedRead();
      Es();
      this.value = this.computeValue(false);
      Ao();
    }
    var we = this.value;
    if (rs(we)) {
      throw we.cause;
    }
    return we;
  };
  oe.prototype.peek = function () {
    var we = this.computeValue(false);
    if (rs(we)) {
      throw we.cause;
    }
    return we;
  };
  oe.prototype.set = function (we) {
    if (this.setter) {
      U(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;
      try {
        this.setter.call(this.scope, we);
      } finally {
        this.isRunningSetter = false;
      }
    } else {
      U(false, false);
    }
  };
  oe.prototype.trackAndCompute = function () {
    if (po()) {
      zs({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }
    var we = this.value;
    var ce = this.dependenciesState === vr.NOT_TRACKING;
    var nt = this.computeValue(true);
    var sn = ce || rs(we) || rs(nt) || !this.equals(we, nt);
    if (sn) {
      this.value = nt;
    }
    return sn;
  };
  oe.prototype.computeValue = function (we) {
    var ce;
    this.isComputing = true;
    qi.computationDepth++;
    if (we) {
      ce = js(this, this.derivation, this.scope);
    } else if (qi.disableErrorBoundaries === true) {
      ce = this.derivation.call(this.scope);
    } else {
      try {
        ce = this.derivation.call(this.scope);
      } catch (nt) {
        ce = new Br(nt);
      }
    }
    qi.computationDepth--;
    this.isComputing = false;
    return ce;
  };
  oe.prototype.suspend = function () {
    if (!this.keepAlive) {
      pr(this);
      this.value = undefined;
    }
  };
  oe.prototype.observe = function (we, ce) {
    var nt = this;
    var sn = true;
    var Pn = undefined;
    return Bt(function () {
      var Ei = nt.get();
      if (!sn || ce) {
        var Hi = oi();
        we({
          type: "update",
          object: nt,
          newValue: Ei,
          oldValue: Pn
        });
        fi(Hi);
      }
      sn = false;
      Pn = Ei;
    });
  };
  oe.prototype.warnAboutUntrackedRead = function () {};
  oe.prototype.toJSON = function () {
    return this.get();
  };
  oe.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };
  oe.prototype.valueOf = function () {
    return st(this.get());
  };
  return oe;
}();
ks.prototype[ot()] = ks.prototype.valueOf;
var oe;
var Gs = he("ComputedValue", ks);
var ho = function oe() {
  this.version = 5;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.computationDepth = 0;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = true;
  this.allowStateReads = true;
  this.enforceActions = false;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.computedConfigurable = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
};
var ya = true;
if ((oe = E()).__mobxInstanceCount > 0 && !oe.__mobxGlobals) {
  ya = false;
}
if (oe.__mobxGlobals && oe.__mobxGlobals.version !== new ho().version) {
  ya = false;
}
var qi = ya ? oe.__mobxGlobals ? (oe.__mobxInstanceCount += 1, oe.__mobxGlobals.UNCHANGED ||= {}, oe.__mobxGlobals) : (oe.__mobxInstanceCount = 1, oe.__mobxGlobals = new ho()) : (setTimeout(function () {
  x("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
}, 1), new ho());
function la(oe, we) {
  var ce = oe.observers.length;
  if (ce) {
    oe.observersIndexes[we.__mapid] = ce;
  }
  oe.observers[ce] = we;
  if (oe.lowestObserverState > we.dependenciesState) {
    oe.lowestObserverState = we.dependenciesState;
  }
}
function ta(oe, we) {
  if (oe.observers.length === 1) {
    oe.observers.length = 0;
    Fr(oe);
  } else {
    var ce = oe.observers;
    var nt = oe.observersIndexes;
    var sn = ce.pop();
    if (sn !== we) {
      var Pn = nt[we.__mapid] || 0;
      if (Pn) {
        nt[sn.__mapid] = Pn;
      } else {
        delete nt[sn.__mapid];
      }
      ce[Pn] = sn;
    }
    delete nt[we.__mapid];
  }
}
function Fr(oe) {
  if (oe.isPendingUnobservation === false) {
    oe.isPendingUnobservation = true;
    qi.pendingUnobservations.push(oe);
  }
}
function Es() {
  qi.inBatch++;
}
function Ao() {
  if (--qi.inBatch == 0) {
    ko();
    for (var oe = qi.pendingUnobservations, we = 0; we < oe.length; we++) {
      var ce = oe[we];
      ce.isPendingUnobservation = false;
      if (ce.observers.length === 0) {
        if (ce.isBeingObserved) {
          ce.isBeingObserved = false;
          ce.onBecomeUnobserved();
        }
        if (ce instanceof ks) {
          ce.suspend();
        }
      }
    }
    qi.pendingUnobservations = [];
  }
}
function Pa(oe) {
  var we = qi.trackingDerivation;
  if (we !== null) {
    if (we.runId !== oe.lastAccessedBy) {
      oe.lastAccessedBy = we.runId;
      we.newObserving[we.unboundDepsCount++] = oe;
      if (!oe.isBeingObserved) {
        oe.isBeingObserved = true;
        oe.onBecomeObserved();
      }
    }
    return true;
  } else {
    if (oe.observers.length === 0 && qi.inBatch > 0) {
      Fr(oe);
    }
    return false;
  }
}
function Fo(oe, we) {
  console.log("[mobx.trace] '" + oe.name + "' is invalidated due to a change in: '" + we.name + "'");
  if (oe.isTracing === Ur.BREAK) {
    var ce = [];
    ha(function Zt(oe, we) {
      return kn(Zo(oe, we));
    }(oe), ce, 1);
    new Function("debugger;\n/*\nTracing '" + oe.name + "'\n\nYou are entering this break point because derivation '" + oe.name + "' is being traced and '" + we.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (oe instanceof ks ? oe.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + ce.join("\n") + "\n*/\n    ")();
  }
}
function ha(oe, we, ce) {
  if (we.length >= 1000) {
    we.push("(and many more)");
  } else {
    we.push("" + new Array(ce).join("\t") + oe.name);
    if (oe.dependencies) {
      oe.dependencies.forEach(function (nt) {
        return ha(nt, we, ce + 1);
      });
    }
  }
}
var Ca = function () {
  function oe(we, ce, nt, sn) {
    if (we === undefined) {
      we = "Reaction@" + O();
    }
    if (sn === undefined) {
      sn = false;
    }
    this.name = we;
    this.onInvalidate = ce;
    this.errorHandler = nt;
    this.requiresObservable = sn;
    this.observing = [];
    this.newObserving = [];
    this.dependenciesState = vr.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + O();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = Ur.NONE;
  }
  oe.prototype.onBecomeStale = function () {
    this.schedule();
  };
  oe.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      qi.pendingReactions.push(this);
      ko();
    }
  };
  oe.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  oe.prototype.runReaction = function () {
    if (!this.isDisposed) {
      Es();
      this._isScheduled = false;
      if (vs(this)) {
        this._isTrackPending = true;
        try {
          this.onInvalidate();
          if (this._isTrackPending && po()) {
            zs({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (we) {
          this.reportExceptionInDerivation(we);
        }
      }
      Ao();
    }
  };
  oe.prototype.track = function (we) {
    Es();
    var nt;
    var ce = po();
    if (ce) {
      nt = Date.now();
      hs({
        name: this.name,
        type: "reaction"
      });
    }
    this._isRunning = true;
    var sn = js(this, we, undefined);
    this._isRunning = false;
    this._isTrackPending = false;
    if (this.isDisposed) {
      pr(this);
    }
    if (rs(sn)) {
      this.reportExceptionInDerivation(sn.cause);
    }
    if (ce) {
      eo({
        time: Date.now() - nt
      });
    }
    Ao();
  };
  oe.prototype.reportExceptionInDerivation = function (we) {
    var ce = this;
    if (this.errorHandler) {
      this.errorHandler(we, this);
    } else {
      if (qi.disableErrorBoundaries) {
        throw we;
      }
      var nt = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
      if (qi.suppressReactionErrors) {
        console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)");
      } else {
        console.error(nt, we);
      }
      if (po()) {
        zs({
          type: "error",
          name: this.name,
          message: nt,
          error: "" + we
        });
      }
      qi.globalReactionErrorHandlers.forEach(function (sn) {
        return sn(we, ce);
      });
    }
  };
  oe.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this._isRunning) {
        Es();
        pr(this);
        Ao();
      }
    }
  };
  oe.prototype.getDisposer = function () {
    var we = this.dispose.bind(this);
    we.$mobx = this;
    return we;
  };
  oe.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };
  oe.prototype.trace = function (we) {
    if (we === undefined) {
      we = false;
    }
    (function oa() {
      for (var oe = [], we = 0; we < arguments.length; we++) {
        oe[we] = arguments[we];
      }
      var ce = false;
      if (typeof oe[oe.length - 1] == "boolean") {
        ce = oe.pop();
      }
      var nt = Ns(oe);
      if (!nt) {
        return x(false);
      }
      if (nt.isTracing === Ur.NONE) {
        console.log("[mobx.trace] '" + nt.name + "' tracing enabled");
      }
      nt.isTracing = ce ? Ur.BREAK : Ur.LOG;
    })(this, we);
  };
  return oe;
}();
function ko() {
  if (qi.inBatch <= 0 && !qi.isRunningReactions) {
    (function (oe) {
      oe();
    })(So);
  }
}
function So() {
  qi.isRunningReactions = true;
  for (var oe = qi.pendingReactions, we = 0; oe.length > 0;) {
    if (++we == 100) {
      console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + oe[0]);
      oe.splice(0);
    }
    for (var ce = oe.splice(0), nt = 0, sn = ce.length; nt < sn; nt++) {
      ce[nt].runReaction();
    }
  }
  qi.isRunningReactions = false;
}
var pa = he("Reaction", Ca);
function po() {
  return !!qi.spyListeners.length;
}
function zs(oe) {
  if (qi.spyListeners.length) {
    for (var we = qi.spyListeners, ce = 0, nt = we.length; ce < nt; ce++) {
      we[ce](oe);
    }
  }
}
function hs(oe) {
  zs(M({}, oe, {
    spyReportStart: true
  }));
}
var Rs = {
  spyReportEnd: true
};
function eo(oe) {
  zs(oe ? M({}, oe, {
    spyReportEnd: true
  }) : Rs);
}
function Qs() {
  x(false);
}
function Wo(oe) {
  return function (we, ce, nt) {
    if (nt) {
      if (nt.value) {
        return {
          value: dr(oe, nt.value),
          enumerable: false,
          configurable: true,
          writable: true
        };
      }
      var sn = nt.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function () {
          return dr(oe, sn.call(this));
        }
      };
    }
    return Ra(oe).apply(this, arguments);
  };
}
function Ra(oe) {
  return function (we, ce, nt) {
    Object.defineProperty(we, ce, {
      configurable: true,
      enumerable: false,
      get: function () {},
      set: function (sn) {
        se(this, ce, _r(oe, sn));
      }
    });
  };
}
function _r(we, ce, nt, sn) {
  if (arguments.length === 1 && typeof we == "function") {
    return dr(we.name || "<unnamed action>", we);
  } else if (arguments.length === 2 && typeof ce == "function") {
    return dr(we, ce);
  } else if (arguments.length === 1 && typeof we == "string") {
    return Wo(we);
  } else if (sn !== true) {
    return Wo(ce).apply(null, arguments);
  } else {
    we[ce] = dr(we.name || ce, nt.value);
    return;
  }
}
function be(oe, we, ce) {
  se(oe, we, dr(we, ce.bind(oe)));
}
function Bt(oe, we) {
  if (we === undefined) {
    we = L;
  }
  var sn;
  var ce = we && we.name || oe.name || "Autorun@" + O();
  if (we.scheduler || we.delay) {
    var Pn = Gn(we);
    var Ei = false;
    sn = new Ca(ce, function () {
      if (!Ei) {
        Ei = true;
        Pn(function () {
          Ei = false;
          if (!sn.isDisposed) {
            sn.track(Hi);
          }
        });
      }
    }, we.onError, we.requiresObservable);
  } else {
    sn = new Ca(ce, function () {
      this.track(Hi);
    }, we.onError, we.requiresObservable);
  }
  function Hi() {
    oe(sn);
  }
  sn.schedule();
  return sn.getDisposer();
}
_r.bound = function Uo(oe, we, ce, nt) {
  if (nt === true) {
    be(oe, we, ce.value);
    return null;
  } else if (ce) {
    return {
      configurable: true,
      enumerable: false,
      get: function () {
        be(this, we, ce.value || ce.initializer.call(this));
        return this[we];
      },
      set: Qs
    };
  } else {
    return {
      enumerable: false,
      configurable: true,
      set: function (sn) {
        be(this, we, sn);
      },
      get: function () {}
    };
  }
};
function an(oe) {
  return oe();
}
function Gn(oe) {
  if (oe.scheduler) {
    return oe.scheduler;
  } else if (oe.delay) {
    return function (we) {
      return setTimeout(we, oe.delay);
    };
  } else {
    return an;
  }
}
function Ki(oe, we, ce) {
  if (ce === undefined) {
    ce = L;
  }
  if (typeof ce == "boolean") {
    ce = {
      fireImmediately: ce
    };
  }
  var _a;
  var nt = ce.name || "Reaction@" + O();
  var sn = _r(nt, ce.onError ? function Lr(oe, we) {
    return function () {
      try {
        return we.apply(this, arguments);
      } catch (ce) {
        oe.call(this, ce);
      }
    };
  }(ce.onError, we) : we);
  var Pn = !ce.scheduler && !ce.delay;
  var Ei = Gn(ce);
  var Hi = true;
  var xs = false;
  var go = ce.compareStructural ? et.structural : ce.equals || et.default;
  var Ja = new Ca(nt, function () {
    if (Hi || Pn) {
      oc();
    } else if (!xs) {
      xs = true;
      Ei(oc);
    }
  }, ce.onError, ce.requiresObservable);
  function oc() {
    xs = false;
    if (!Ja.isDisposed) {
      var ou = false;
      Ja.track(function () {
        var Cl = oe(Ja);
        ou = Hi || !go(_a, Cl);
        _a = Cl;
      });
      if (Hi && ce.fireImmediately) {
        sn(_a, Ja);
      }
      if (!Hi && ou === true) {
        sn(_a, Ja);
      }
      Hi &&= false;
    }
  }
  Ja.schedule();
  return Ja.getDisposer();
}
function zr(oe, we, ce) {
  return Ks("onBecomeUnobserved", oe, we, ce);
}
function Ks(oe, we, ce, nt) {
  var sn = typeof nt == "function" ? Zo(we, ce) : Zo(we);
  var Pn = typeof nt == "function" ? nt : ce;
  var Ei = sn[oe];
  if (typeof Ei != "function") {
    return x(false);
  } else {
    sn[oe] = function () {
      Ei.call(this);
      Pn.call(this);
    };
    return function () {
      sn[oe] = Ei;
    };
  }
}
function vt(oe, we, ce, nt) {
  var Pn = (nt = Wt(nt)).defaultDecorator || (nt.deep === false ? Rn : Kt);
  ft(oe);
  Ct(oe, nt.name, Pn.enhancer);
  Es();
  try {
    for (var sn in we) {
      var Ei = Object.getOwnPropertyDescriptor(we, sn);
      var xs = (ce && sn in ce ? ce[sn] : Ei.get ? Qi : Pn)(oe, sn, Ei, true);
      if (xs) {
        Object.defineProperty(oe, sn, xs);
      }
    }
  } finally {
    Ao();
  }
  return oe;
}
function kn(oe) {
  var we = {
    name: oe.name
  };
  if (oe.observing && oe.observing.length > 0) {
    we.dependencies = function le(oe) {
      var we = [];
      oe.forEach(function (ce) {
        if (we.indexOf(ce) === -1) {
          we.push(ce);
        }
      });
      return we;
    }(oe.observing).map(kn);
  }
  return we;
}
function wa(oe, we) {
  if (oe == null) {
    return false;
  }
  if (we !== undefined) {
    if (Ga(oe)) {
      var ce = oe.$mobx;
      return ce.values && !!ce.values[we];
    }
    return false;
  }
  return Ga(oe) || !!oe.$mobx || Qe(oe) || pa(oe) || Gs(oe);
}
function ao(oe) {
  if (arguments.length !== 1) {
    x(false);
  }
  return wa(oe);
}
function Ns(oe) {
  switch (oe.length) {
    case 0:
      return qi.trackingDerivation;
    case 1:
      return Zo(oe[0]);
    case 2:
      return Zo(oe[0], oe[1]);
  }
}
function ys(oe, we) {
  if (we === undefined) {
    we = undefined;
  }
  Es();
  try {
    return oe.apply(we);
  } finally {
    Ao();
  }
}
function dn(oe) {
  return oe.interceptors !== undefined && oe.interceptors.length > 0;
}
function Yi(oe, we) {
  var ce = oe.interceptors ||= [];
  ce.push(we);
  return Z(function () {
    var nt = ce.indexOf(we);
    if (nt !== -1) {
      ce.splice(nt, 1);
    }
  });
}
function $r(oe, we) {
  var ce = oi();
  try {
    var nt = oe.interceptors;
    if (nt) {
      for (var sn = 0, Pn = nt.length; sn < Pn && (U(!(we = nt[sn](we)) || we.type, "Intercept handlers should return nothing or a change object"), we); sn++);
    }
    return we;
  } finally {
    fi(ce);
  }
}
function wi(oe) {
  return oe.changeListeners !== undefined && oe.changeListeners.length > 0;
}
function Aa(oe, we) {
  var ce = oe.changeListeners ||= [];
  ce.push(we);
  return Z(function () {
    var nt = ce.indexOf(we);
    if (nt !== -1) {
      ce.splice(nt, 1);
    }
  });
}
function Hr(oe, we) {
  var ce = oi();
  var nt = oe.changeListeners;
  if (nt) {
    for (var sn = 0, Pn = (nt = nt.slice()).length; sn < Pn; sn++) {
      nt[sn](we);
    }
    fi(ce);
  }
}
var mn = function () {
  var oe = false;
  var we = {};
  Object.defineProperty(we, "0", {
    set: function () {
      oe = true;
    }
  });
  Object.create(we)[0] = 1;
  return oe === false;
}();
var zn = 0;
var Fn = function oe() {};
(function ci(oe, we) {
  if (typeof Object.setPrototypeOf !== "undefined") {
    Object.setPrototypeOf(oe.prototype, we);
  } else if (typeof oe.prototype.__proto__ !== "undefined") {
    oe.prototype.__proto__ = we;
  } else {
    oe.prototype = we;
  }
})(Fn, Array.prototype);
if (Object.isFrozen(Array)) {
  ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (oe) {
    Object.defineProperty(Fn.prototype, oe, {
      configurable: true,
      writable: true,
      value: Array.prototype[oe]
    });
  });
}
var pi = function () {
  function oe(we, ce, nt, sn) {
    this.array = nt;
    this.owned = sn;
    this.values = [];
    this.lastKnownLength = 0;
    this.atom = new De(we || "ObservableArray@" + O());
    this.enhancer = function (Pn, Ei) {
      return ce(Pn, Ei, we + "[..]");
    };
  }
  oe.prototype.dehanceValue = function (we) {
    if (this.dehancer !== undefined) {
      return this.dehancer(we);
    } else {
      return we;
    }
  };
  oe.prototype.dehanceValues = function (we) {
    if (this.dehancer !== undefined && we.length > 0) {
      return we.map(this.dehancer);
    } else {
      return we;
    }
  };
  oe.prototype.intercept = function (we) {
    return Yi(this, we);
  };
  oe.prototype.observe = function (we, ce) {
    if (ce === undefined) {
      ce = false;
    }
    if (ce) {
      we({
        object: this.array,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }
    return Aa(this, we);
  };
  oe.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };
  oe.prototype.setArrayLength = function (we) {
    if (typeof we != "number" || we < 0) {
      throw new Error("[mobx.array] Out of range: " + we);
    }
    var ce = this.values.length;
    if (we !== ce) {
      if (we > ce) {
        for (var nt = new Array(we - ce), sn = 0; sn < we - ce; sn++) {
          nt[sn] = undefined;
        }
        this.spliceWithArray(ce, 0, nt);
      } else {
        this.spliceWithArray(we, ce - we);
      }
    }
  };
  oe.prototype.updateArrayLength = function (we, ce) {
    if (we !== this.lastKnownLength) {
      throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
    }
    this.lastKnownLength += ce;
    if (ce > 0 && we + ce + 1 > zn) {
      Ha(we + ce + 1);
    }
  };
  oe.prototype.spliceWithArray = function (we, ce, nt) {
    var sn = this;
    so(this.atom);
    var Pn = this.values.length;
    if (we === undefined) {
      we = 0;
    } else if (we > Pn) {
      we = Pn;
    } else if (we < 0) {
      we = Math.max(0, Pn + we);
    }
    ce = arguments.length === 1 ? Pn - we : ce == null ? 0 : Math.max(0, Math.min(ce, Pn - we));
    if (nt === undefined) {
      nt = S;
    }
    if (dn(this)) {
      var Ei = $r(this, {
        object: this.array,
        type: "splice",
        index: we,
        removedCount: ce,
        added: nt
      });
      if (!Ei) {
        return S;
      }
      ce = Ei.removedCount;
      nt = Ei.added;
    }
    var Hi = (nt = nt.length === 0 ? nt : nt.map(function (_a) {
      return sn.enhancer(_a, undefined);
    })).length - ce;
    this.updateArrayLength(Pn, Hi);
    var xs = this.spliceItemsIntoValues(we, ce, nt);
    if (ce !== 0 || nt.length !== 0) {
      this.notifyArraySplice(we, nt, xs);
    }
    return this.dehanceValues(xs);
  };
  oe.prototype.spliceItemsIntoValues = function (we, ce, nt) {
    var sn;
    if (nt.length < 10000) {
      return (sn = this.values).splice.apply(sn, C([we, ce], nt));
    }
    var Pn = this.values.slice(we, we + ce);
    this.values = this.values.slice(0, we).concat(nt, this.values.slice(we + ce));
    return Pn;
  };
  oe.prototype.notifyArrayChildUpdate = function (we, ce, nt) {
    var sn = !this.owned && po();
    var Pn = wi(this);
    var Ei = Pn || sn ? {
      object: this.array,
      type: "update",
      index: we,
      newValue: ce,
      oldValue: nt
    } : null;
    if (sn) {
      hs(M({}, Ei, {
        name: this.atom.name
      }));
    }
    this.atom.reportChanged();
    if (Pn) {
      Hr(this, Ei);
    }
    if (sn) {
      eo();
    }
  };
  oe.prototype.notifyArraySplice = function (we, ce, nt) {
    var sn = !this.owned && po();
    var Pn = wi(this);
    var Ei = Pn || sn ? {
      object: this.array,
      type: "splice",
      index: we,
      removed: nt,
      added: ce,
      removedCount: nt.length,
      addedCount: ce.length
    } : null;
    if (sn) {
      hs(M({}, Ei, {
        name: this.atom.name
      }));
    }
    this.atom.reportChanged();
    if (Pn) {
      Hr(this, Ei);
    }
    if (sn) {
      eo();
    }
  };
  return oe;
}();
var lr = function (oe) {
  function we(ce, nt, sn, Pn) {
    if (sn === undefined) {
      sn = "ObservableArray@" + O();
    }
    if (Pn === undefined) {
      Pn = false;
    }
    var Ei = oe.call(this) || this;
    var Hi = new pi(sn, nt, Ei, Pn);
    W(Ei, "$mobx", Hi);
    if (ce && ce.length) {
      var xs = kr(true);
      Ei.spliceWithArray(0, 0, ce);
      Zs(xs);
    }
    if (mn) {
      Object.defineProperty(Hi.array, "0", xi);
    }
    return Ei;
  }
  k(we, oe);
  we.prototype.intercept = function (ce) {
    return this.$mobx.intercept(ce);
  };
  we.prototype.observe = function (ce, nt) {
    if (nt === undefined) {
      nt = false;
    }
    return this.$mobx.observe(ce, nt);
  };
  we.prototype.clear = function () {
    return this.splice(0);
  };
  we.prototype.concat = function () {
    for (var ce = [], nt = 0; nt < arguments.length; nt++) {
      ce[nt] = arguments[nt];
    }
    this.$mobx.atom.reportObserved();
    return Array.prototype.concat.apply(this.peek(), ce.map(function (sn) {
      if (Bl(sn)) {
        return sn.peek();
      } else {
        return sn;
      }
    }));
  };
  we.prototype.replace = function (ce) {
    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, ce);
  };
  we.prototype.toJS = function () {
    return this.slice();
  };
  we.prototype.toJSON = function () {
    return this.toJS();
  };
  we.prototype.peek = function () {
    this.$mobx.atom.reportObserved();
    return this.$mobx.dehanceValues(this.$mobx.values);
  };
  we.prototype.find = function (ce, nt, sn) {
    if (sn === undefined) {
      sn = 0;
    }
    var Pn = this.findIndex.apply(this, arguments);
    if (Pn === -1) {
      return undefined;
    } else {
      return this.get(Pn);
    }
  };
  we.prototype.findIndex = function (ce, nt, sn) {
    if (sn === undefined) {
      sn = 0;
    }
    for (var Pn = this.peek(), Ei = Pn.length, Hi = sn; Hi < Ei; Hi++) {
      if (ce.call(nt, Pn[Hi], Hi, this)) {
        return Hi;
      }
    }
    return -1;
  };
  we.prototype.splice = function (ce, nt) {
    for (var sn = [], Pn = 2; Pn < arguments.length; Pn++) {
      sn[Pn - 2] = arguments[Pn];
    }
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return this.$mobx.spliceWithArray(ce);
      case 2:
        return this.$mobx.spliceWithArray(ce, nt);
    }
    return this.$mobx.spliceWithArray(ce, nt, sn);
  };
  we.prototype.spliceWithArray = function (ce, nt, sn) {
    return this.$mobx.spliceWithArray(ce, nt, sn);
  };
  we.prototype.push = function () {
    for (var ce = [], nt = 0; nt < arguments.length; nt++) {
      ce[nt] = arguments[nt];
    }
    var sn = this.$mobx;
    sn.spliceWithArray(sn.values.length, 0, ce);
    return sn.values.length;
  };
  we.prototype.pop = function () {
    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
  };
  we.prototype.shift = function () {
    return this.splice(0, 1)[0];
  };
  we.prototype.unshift = function () {
    for (var ce = [], nt = 0; nt < arguments.length; nt++) {
      ce[nt] = arguments[nt];
    }
    var sn = this.$mobx;
    sn.spliceWithArray(0, 0, ce);
    return sn.values.length;
  };
  we.prototype.reverse = function () {
    var ce = this.slice();
    return ce.reverse.apply(ce, arguments);
  };
  we.prototype.sort = function (ce) {
    var nt = this.slice();
    return nt.sort.apply(nt, arguments);
  };
  we.prototype.remove = function (ce) {
    var nt = this.$mobx.dehanceValues(this.$mobx.values).indexOf(ce);
    return nt > -1 && (this.splice(nt, 1), true);
  };
  we.prototype.move = function (ce, nt) {
    function sn(Hi) {
      if (Hi < 0) {
        throw new Error("[mobx.array] Index out of bounds: " + Hi + " is negative");
      }
      var xs = this.$mobx.values.length;
      if (Hi >= xs) {
        throw new Error("[mobx.array] Index out of bounds: " + Hi + " is not smaller than " + xs);
      }
    }
    sn.call(this, ce);
    sn.call(this, nt);
    if (ce !== nt) {
      var Ei;
      var Pn = this.$mobx.values;
      Ei = ce < nt ? C(Pn.slice(0, ce), Pn.slice(ce + 1, nt + 1), [Pn[ce]], Pn.slice(nt + 1)) : C(Pn.slice(0, nt), [Pn[ce]], Pn.slice(nt, ce), Pn.slice(ce + 1));
      this.replace(Ei);
    }
  };
  we.prototype.get = function (ce) {
    var nt = this.$mobx;
    if (nt) {
      if (ce < nt.values.length) {
        nt.atom.reportObserved();
        return nt.dehanceValue(nt.values[ce]);
      }
      console.warn("[mobx.array] Attempt to read an array index (" + ce + ") that is out of bounds (" + nt.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }
  };
  we.prototype.set = function (ce, nt) {
    var sn = this.$mobx;
    var Pn = sn.values;
    if (ce < Pn.length) {
      so(sn.atom);
      var Ei = Pn[ce];
      if (dn(sn)) {
        var Hi = $r(sn, {
          type: "update",
          object: this,
          index: ce,
          newValue: nt
        });
        if (!Hi) {
          return;
        }
        nt = Hi.newValue;
      }
      if ((nt = sn.enhancer(nt, Ei)) !== Ei) {
        Pn[ce] = nt;
        sn.notifyArrayChildUpdate(ce, nt, Ei);
      }
    } else {
      if (ce !== Pn.length) {
        throw new Error("[mobx.array] Index out of bounds, " + ce + " is larger than " + Pn.length);
      }
      sn.spliceWithArray(ce, 0, [nt]);
    }
  };
  return we;
}(Fn);
Oe(lr.prototype, function () {
  this.$mobx.atom.reportObserved();
  var oe = this;
  var we = 0;
  return Ee({
    next: function () {
      if (we < oe.length) {
        return {
          value: oe[we++],
          done: false
        };
      } else {
        return {
          done: true,
          value: undefined
        };
      }
    }
  });
});
Object.defineProperty(lr.prototype, "length", {
  enumerable: false,
  configurable: true,
  get: function () {
    return this.$mobx.getArrayLength();
  },
  set: function (oe) {
    this.$mobx.setArrayLength(oe);
  }
});
se(lr.prototype, ke(), "Array");
["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (oe) {
  var we = Array.prototype[oe];
  U(typeof we == "function", "Base function not defined on Array prototype: '" + oe + "'");
  se(lr.prototype, oe, function () {
    return we.apply(this.peek(), arguments);
  });
});
(function G(oe, we) {
  for (var ce = 0; ce < we.length; ce++) {
    se(oe, we[ce], oe[we[ce]]);
  }
})(lr.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
var xi = Bo(0);
function Bo(oe) {
  return {
    enumerable: false,
    configurable: false,
    get: function () {
      return this.get(oe);
    },
    set: function (we) {
      this.set(oe, we);
    }
  };
}
function to(oe) {
  Object.defineProperty(lr.prototype, "" + oe, Bo(oe));
}
function Ha(oe) {
  for (var we = zn; we < oe; we++) {
    to(we);
  }
  zn = oe;
}
Ha(1000);
var Kl = he("ObservableArrayAdministration", pi);
function Bl(oe) {
  return fe(oe) && Kl(oe.$mobx);
}
var iu = {};
var Wa = function () {
  function oe(we, ce, nt) {
    if (ce === undefined) {
      ce = ne;
    }
    if (nt === undefined) {
      nt = "ObservableMap@" + O();
    }
    this.enhancer = ce;
    this.name = nt;
    this.$mobx = iu;
    this._keys = new lr(undefined, it, this.name + ".keys()", true);
    if (typeof Map != "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }
    this._data = new Map();
    this._hasMap = new Map();
    this.merge(we);
  }
  oe.prototype._has = function (we) {
    return this._data.has(we);
  };
  oe.prototype.has = function (we) {
    var ce = this;
    if (!qi.trackingDerivation) {
      return this._has(we);
    }
    var nt = this._hasMap.get(we);
    if (!nt) {
      var sn = nt = new fa(this._has(we), it, this.name + "." + ls(we) + "?", false);
      this._hasMap.set(we, sn);
      zr(sn, function () {
        return ce._hasMap.delete(we);
      });
    }
    return nt.get();
  };
  oe.prototype.set = function (we, ce) {
    var nt = this._has(we);
    if (dn(this)) {
      var sn = $r(this, {
        type: nt ? "update" : "add",
        object: this,
        newValue: ce,
        name: we
      });
      if (!sn) {
        return this;
      }
      ce = sn.newValue;
    }
    if (nt) {
      this._updateValue(we, ce);
    } else {
      this._addValue(we, ce);
    }
    return this;
  };
  oe.prototype.delete = function (we) {
    var ce = this;
    if (dn(this) && !(nt = $r(this, {
      type: "delete",
      object: this,
      name: we
    }))) {
      return false;
    }
    if (this._has(we)) {
      var sn = po();
      var Pn = wi(this);
      var nt = Pn || sn ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(we).value,
        name: we
      } : null;
      if (sn) {
        hs(M({}, nt, {
          name: this.name,
          key: we
        }));
      }
      ys(function () {
        ce._keys.remove(we);
        ce._updateHasMapEntry(we, false);
        ce._data.get(we).setNewValue(undefined);
        ce._data.delete(we);
      });
      if (Pn) {
        Hr(this, nt);
      }
      if (sn) {
        eo();
      }
      return true;
    }
    return false;
  };
  oe.prototype._updateHasMapEntry = function (we, ce) {
    var nt = this._hasMap.get(we);
    if (nt) {
      nt.setNewValue(ce);
    }
  };
  oe.prototype._updateValue = function (we, ce) {
    var nt = this._data.get(we);
    if ((ce = nt.prepareNewValue(ce)) !== qi.UNCHANGED) {
      var sn = po();
      var Pn = wi(this);
      var Ei = Pn || sn ? {
        type: "update",
        object: this,
        oldValue: nt.value,
        name: we,
        newValue: ce
      } : null;
      if (sn) {
        hs(M({}, Ei, {
          name: this.name,
          key: we
        }));
      }
      nt.setNewValue(ce);
      if (Pn) {
        Hr(this, Ei);
      }
      if (sn) {
        eo();
      }
    }
  };
  oe.prototype._addValue = function (we, ce) {
    var nt = this;
    ys(function () {
      var Hi = new fa(ce, nt.enhancer, nt.name + "." + ls(we), false);
      nt._data.set(we, Hi);
      ce = Hi.value;
      nt._updateHasMapEntry(we, true);
      nt._keys.push(we);
    });
    var sn = po();
    var Pn = wi(this);
    var Ei = Pn || sn ? {
      type: "add",
      object: this,
      name: we,
      newValue: ce
    } : null;
    if (sn) {
      hs(M({}, Ei, {
        name: this.name,
        key: we
      }));
    }
    if (Pn) {
      Hr(this, Ei);
    }
    if (sn) {
      eo();
    }
  };
  oe.prototype.get = function (we) {
    if (this.has(we)) {
      return this.dehanceValue(this._data.get(we).get());
    } else {
      return this.dehanceValue(undefined);
    }
  };
  oe.prototype.dehanceValue = function (we) {
    if (this.dehancer !== undefined) {
      return this.dehancer(we);
    } else {
      return we;
    }
  };
  oe.prototype.keys = function () {
    return this._keys[rt()]();
  };
  oe.prototype.values = function () {
    var we = this;
    var ce = 0;
    return Ee({
      next: function () {
        if (ce < we._keys.length) {
          return {
            value: we.get(we._keys[ce++]),
            done: false
          };
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    });
  };
  oe.prototype.entries = function () {
    var we = this;
    var ce = 0;
    return Ee({
      next: function () {
        if (ce < we._keys.length) {
          var nt = we._keys[ce++];
          return {
            value: [nt, we.get(nt)],
            done: false
          };
        }
        return {
          done: true
        };
      }
    });
  };
  oe.prototype.forEach = function (we, ce) {
    var nt = this;
    this._keys.forEach(function (sn) {
      return we.call(ce, nt.get(sn), sn, nt);
    });
  };
  oe.prototype.merge = function (we) {
    var ce = this;
    if (bs(we)) {
      we = we.toJS();
    }
    ys(function () {
      if (q(we)) {
        Object.keys(we).forEach(function (nt) {
          return ce.set(nt, we[nt]);
        });
      } else if (Array.isArray(we)) {
        we.forEach(function (nt) {
          var sn = v(nt, 2);
          return ce.set(sn[0], sn[1]);
        });
      } else if (Re(we)) {
        if (we.constructor !== Map) {
          x("Cannot initialize from classes that inherit from Map: " + we.constructor.name);
        } else {
          we.forEach(function (nt, sn) {
            return ce.set(sn, nt);
          });
        }
      } else if (we != null) {
        x("Cannot initialize map from " + we);
      }
    });
    return this;
  };
  oe.prototype.clear = function () {
    var we = this;
    ys(function () {
      Bn(function () {
        we._keys.slice().forEach(function (ce) {
          return we.delete(ce);
        });
      });
    });
  };
  oe.prototype.replace = function (we) {
    var ce = this;
    ys(function () {
      for (var nt = function j(oe) {
          if (Re(oe) || bs(oe)) {
            return oe;
          } else if (Array.isArray(oe)) {
            return new Map(oe);
          } else if (q(oe)) {
            return new Map(Object.entries(oe));
          } else {
            return x("Cannot convert to map from '" + oe + "'");
          }
        }(we), sn = ce._keys, Pn = Array.from(nt.keys()), Ei = false, Hi = 0; Hi < sn.length; Hi++) {
        var xs = sn[Hi];
        if (sn.length === Pn.length && xs !== Pn[Hi]) {
          Ei = true;
        }
        if (!nt.has(xs)) {
          Ei = true;
          ce.delete(xs);
        }
      }
      nt.forEach(function (_a, go) {
        if (!ce._data.has(go)) {
          Ei = true;
        }
        ce.set(go, _a);
      });
      if (Ei) {
        ce._keys.replace(Pn);
      }
    });
    return this;
  };
  Object.defineProperty(oe.prototype, "size", {
    get: function () {
      return this._keys.length;
    },
    enumerable: true,
    configurable: true
  });
  oe.prototype.toPOJO = function () {
    var we = this;
    var ce = {};
    this._keys.forEach(function (nt) {
      return ce[typeof nt == "symbol" ? nt : ls(nt)] = we.get(nt);
    });
    return ce;
  };
  oe.prototype.toJS = function () {
    var we = this;
    var ce = new Map();
    this._keys.forEach(function (nt) {
      return ce.set(nt, we.get(nt));
    });
    return ce;
  };
  oe.prototype.toJSON = function () {
    return this.toPOJO();
  };
  oe.prototype.toString = function () {
    var we = this;
    return this.name + "[{ " + this._keys.map(function (ce) {
      return ls(ce) + ": " + we.get(ce);
    }).join(", ") + " }]";
  };
  oe.prototype.observe = function (we, ce) {
    return Aa(this, we);
  };
  oe.prototype.intercept = function (we) {
    return Yi(this, we);
  };
  return oe;
}();
function ls(oe) {
  if (oe && oe.toString) {
    return oe.toString();
  } else {
    return new String(oe).toString();
  }
}
Oe(Wa.prototype, function () {
  return this.entries();
});
W(Wa.prototype, ke(), "Map");
var bs = he("ObservableMap", Wa);
var Cc = {};
var gc = function () {
  function oe(we, ce, nt) {
    if (ce === undefined) {
      ce = ne;
    }
    if (nt === undefined) {
      nt = "ObservableSet@" + O();
    }
    this.name = nt;
    this.$mobx = Cc;
    this._data = new Set();
    this._atom = function It(oe, we, ce) {
      if (we === undefined) {
        we = X;
      }
      if (ce === undefined) {
        ce = X;
      }
      var nt = new De(oe);
      (function Gr(oe, we, ce) {
        Ks("onBecomeObserved", oe, we, ce);
      })(nt, we);
      zr(nt, ce);
      return nt;
    }(this.name);
    if (typeof Set != "function") {
      throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
    }
    this.enhancer = function (sn, Pn) {
      return ce(sn, Pn, nt);
    };
    if (we) {
      this.replace(we);
    }
  }
  oe.prototype.dehanceValue = function (we) {
    if (this.dehancer !== undefined) {
      return this.dehancer(we);
    } else {
      return we;
    }
  };
  oe.prototype.clear = function () {
    var we = this;
    ys(function () {
      Bn(function () {
        we._data.forEach(function (ce) {
          we.delete(ce);
        });
      });
    });
  };
  oe.prototype.forEach = function (we, ce) {
    var nt = this;
    this._data.forEach(function (sn) {
      we.call(ce, sn, sn, nt);
    });
  };
  Object.defineProperty(oe.prototype, "size", {
    get: function () {
      this._atom.reportObserved();
      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  oe.prototype.add = function (we) {
    var ce = this;
    so(this._atom);
    if (dn(this) && !(nt = $r(this, {
      type: "add",
      object: this,
      newValue: we
    }))) {
      return this;
    }
    if (!this.has(we)) {
      ys(function () {
        ce._data.add(ce.enhancer(we, undefined));
        ce._atom.reportChanged();
      });
      var sn = po();
      var Pn = wi(this);
      var nt = Pn || sn ? {
        type: "add",
        object: this,
        newValue: we
      } : null;
      if (Pn) {
        Hr(this, nt);
      }
    }
    return this;
  };
  oe.prototype.delete = function (we) {
    var ce = this;
    if (dn(this) && !(nt = $r(this, {
      type: "delete",
      object: this,
      oldValue: we
    }))) {
      return false;
    }
    if (this.has(we)) {
      var sn = po();
      var Pn = wi(this);
      var nt = Pn || sn ? {
        type: "delete",
        object: this,
        oldValue: we
      } : null;
      ys(function () {
        ce._atom.reportChanged();
        ce._data.delete(we);
      });
      if (Pn) {
        Hr(this, nt);
      }
      return true;
    }
    return false;
  };
  oe.prototype.has = function (we) {
    this._atom.reportObserved();
    return this._data.has(this.dehanceValue(we));
  };
  oe.prototype.entries = function () {
    var we = 0;
    var ce = Ue(this.keys());
    var nt = Ue(this.values());
    return Ee({
      next: function () {
        var sn = we;
        we += 1;
        if (sn < nt.length) {
          return {
            value: [ce[sn], nt[sn]],
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    });
  };
  oe.prototype.keys = function () {
    return this.values();
  };
  oe.prototype.values = function () {
    this._atom.reportObserved();
    var nt;
    var we = this;
    var ce = 0;
    if (this._data.values !== undefined) {
      nt = Ue(this._data.values());
    } else {
      nt = [];
      this._data.forEach(function (sn) {
        return nt.push(sn);
      });
    }
    return Ee({
      next: function () {
        if (ce < nt.length) {
          return {
            value: we.dehanceValue(nt[ce++]),
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    });
  };
  oe.prototype.replace = function (we) {
    var ce = this;
    if (mt(we)) {
      we = we.toJS();
    }
    ys(function () {
      if (Array.isArray(we) || Ge(we)) {
        ce.clear();
        we.forEach(function (nt) {
          return ce.add(nt);
        });
      } else if (we != null) {
        x("Cannot initialize set from " + we);
      }
    });
    return this;
  };
  oe.prototype.observe = function (we, ce) {
    return Aa(this, we);
  };
  oe.prototype.intercept = function (we) {
    return Yi(this, we);
  };
  oe.prototype.toJS = function () {
    return new Set(this);
  };
  oe.prototype.toString = function () {
    return this.name + "[ " + Ue(this.keys()).join(", ") + " ]";
  };
  return oe;
}();
Oe(gc.prototype, function () {
  return this.values();
});
W(gc.prototype, ke(), "Set");
var mt = he("ObservableSet", gc);
var qt = function () {
  function oe(we, ce, nt) {
    this.target = we;
    this.name = ce;
    this.defaultEnhancer = nt;
    this.values = {};
  }
  oe.prototype.read = function (we, ce) {
    if (this.target === we || (this.illegalAccess(we, ce), this.values[ce])) {
      return this.values[ce].get();
    }
  };
  oe.prototype.write = function (we, ce, nt) {
    var sn = this.target;
    if (sn !== we) {
      this.illegalAccess(we, ce);
    }
    var Pn = this.values[ce];
    if (Pn instanceof ks) {
      Pn.set(nt);
    } else {
      if (dn(this)) {
        if (!(Ei = $r(this, {
          type: "update",
          object: sn,
          name: ce,
          newValue: nt
        }))) {
          return;
        }
        nt = Ei.newValue;
      }
      if ((nt = Pn.prepareNewValue(nt)) !== qi.UNCHANGED) {
        var Hi = wi(this);
        var xs = po();
        var Ei = Hi || xs ? {
          type: "update",
          object: sn,
          oldValue: Pn.value,
          name: ce,
          newValue: nt
        } : null;
        if (xs) {
          hs(M({}, Ei, {
            name: this.name,
            key: ce
          }));
        }
        Pn.setNewValue(nt);
        if (Hi) {
          Hr(this, Ei);
        }
        if (xs) {
          eo();
        }
      }
    }
  };
  oe.prototype.remove = function (we) {
    if (this.values[we]) {
      var ce = this.target;
      if (dn(this) && !(nt = $r(this, {
        object: ce,
        name: we,
        type: "remove"
      }))) {
        return;
      }
      try {
        Es();
        var sn = wi(this);
        var Pn = po();
        var Ei = this.values[we].get();
        if (this.keys) {
          this.keys.remove(we);
        }
        delete this.values[we];
        delete this.target[we];
        var nt = sn || Pn ? {
          type: "remove",
          object: ce,
          oldValue: Ei,
          name: we
        } : null;
        if (Pn) {
          hs(M({}, nt, {
            name: this.name,
            key: we
          }));
        }
        if (sn) {
          Hr(this, nt);
        }
        if (Pn) {
          eo();
        }
      } finally {
        Ao();
      }
    }
  };
  oe.prototype.illegalAccess = function (we, ce) {
    console.warn("Property '" + ce + "' of '" + we + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  oe.prototype.observe = function (we, ce) {
    return Aa(this, we);
  };
  oe.prototype.intercept = function (we) {
    return Yi(this, we);
  };
  oe.prototype.getKeys = function () {
    var we = this;
    if (this.keys === undefined) {
      this.keys = new lr(Object.keys(this.values).filter(function (ce) {
        return we.values[ce] instanceof fa;
      }), it, "keys(" + this.name + ")", true);
    }
    return this.keys.slice();
  };
  return oe;
}();
function Ct(oe, we, ce) {
  if (we === undefined) {
    we = "";
  }
  if (ce === undefined) {
    ce = ne;
  }
  var nt = oe.$mobx;
  return nt || (q(oe) || (we = (oe.constructor.name || "ObservableObject") + "@" + O()), we ||= "ObservableObject@" + O(), W(oe, "$mobx", nt = new qt(oe, we, ce)), nt);
}
var ki = Object.create(null);
var Ui = Object.create(null);
function La(oe) {
  return oe.$mobx || (ft(oe), oe.$mobx);
}
var Os = he("ObservableObjectAdministration", qt);
function Ga(oe) {
  return !!fe(oe) && (ft(oe), Os(oe.$mobx));
}
function Zo(oe, we) {
  if (typeof oe == "object" && oe !== null) {
    if (Bl(oe)) {
      if (we !== undefined) {
        x(false);
      }
      return oe.$mobx.atom;
    }
    if (mt(oe)) {
      return oe.$mobx;
    }
    if (bs(oe)) {
      var ce = oe;
      if (we === undefined) {
        return Zo(ce._keys);
      } else {
        if (!(nt = ce._data.get(we) || ce._hasMap.get(we))) {
          x(false);
        }
        return nt;
      }
    }
    var nt;
    ft(oe);
    if (Ga(oe)) {
      if (we) {
        if (!(nt = oe.$mobx.values[we])) {
          x(false);
        }
        return nt;
      } else {
        return x(false);
      }
    }
    if (Qe(oe) || Gs(oe) || pa(oe)) {
      return oe;
    }
  } else if (typeof oe == "function" && pa(oe.$mobx)) {
    return oe.$mobx;
  }
  return x(false);
}
function lo(oe, we) {
  if (!oe) {
    x("Expecting some object");
  }
  if (we !== undefined) {
    return lo(Zo(oe, we));
  } else if (Qe(oe) || Gs(oe) || pa(oe) || bs(oe) || mt(oe)) {
    return oe;
  } else {
    ft(oe);
    if (oe.$mobx) {
      return oe.$mobx;
    } else {
      x(false);
      return;
    }
  }
}
var Hs = Object.prototype.toString;
function As(oe, we, ce) {
  if (ce === undefined) {
    ce = -1;
  }
  return Io(oe, we, ce);
}
function Io(oe, we, ce, nt, sn) {
  if (oe === we) {
    return oe !== 0 || 1 / oe == 1 / we;
  }
  if (oe == null || we == null) {
    return false;
  }
  if (oe != oe) {
    return we != we;
  }
  var Pn = typeof oe;
  if (Pn !== "function" && Pn !== "object" && typeof we != "object") {
    return false;
  }
  oe = Sa(oe);
  we = Sa(we);
  var Ei = Hs.call(oe);
  if (Ei !== Hs.call(we)) {
    return false;
  }
  switch (Ei) {
    case "[object RegExp]":
    case "[object String]":
      return "" + oe == "" + we;
    case "[object Number]":
      if (+oe != +oe) {
        return +we != +we;
      } else if (+oe == 0) {
        return 1 / +oe == 1 / we;
      } else {
        return +oe == +we;
      }
    case "[object Date]":
    case "[object Boolean]":
      return +oe == +we;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(oe) === Symbol.valueOf.call(we);
  }
  var Hi = Ei === "[object Array]";
  if (!Hi) {
    if (typeof oe != "object" || typeof we != "object") {
      return false;
    }
    var xs = oe.constructor;
    var _a = we.constructor;
    if (xs !== _a && (typeof xs != "function" || !(xs instanceof xs) || typeof _a != "function" || !(_a instanceof _a)) && "constructor" in oe && "constructor" in we) {
      return false;
    }
  }
  if (ce === 0) {
    return false;
  }
  if (ce < 0) {
    ce = -1;
  }
  sn = sn || [];
  for (var go = (nt = nt || []).length; go--;) {
    if (nt[go] === oe) {
      return sn[go] === we;
    }
  }
  nt.push(oe);
  sn.push(we);
  if (Hi) {
    if ((go = oe.length) !== we.length) {
      return false;
    }
    for (; go--;) {
      if (!Io(oe[go], we[go], ce - 1, nt, sn)) {
        return false;
      }
    }
  } else {
    var Ja = Object.keys(oe);
    var oc = undefined;
    go = Ja.length;
    if (Object.keys(we).length !== go) {
      return false;
    }
    for (; go--;) {
      if (!hl(we, oc = Ja[go]) || !Io(oe[oc], we[oc], ce - 1, nt, sn)) {
        return false;
      }
    }
  }
  nt.pop();
  sn.pop();
  return true;
}
function Sa(oe) {
  if (Bl(oe)) {
    return oe.peek();
  } else if (Re(oe) || bs(oe) || Ge(oe) || mt(oe)) {
    return Ue(oe.entries());
  } else {
    return oe;
  }
}
function hl(oe, we) {
  return Object.prototype.hasOwnProperty.call(oe, we);
}
function gd(oe, we) {
  if (oe & 1) {
    i.TgZ(0, "span");
    i._uU(1, "loading...");
    i.qZA();
  }
}
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: function Vs(oe) {
      qi.spyListeners.push(oe);
      return Z(function () {
        qi.spyListeners = qi.spyListeners.filter(function (we) {
          return we !== oe;
        });
      });
    },
    extras: {
      getDebugName: function gl(oe, we) {
        return (we !== undefined ? Zo(oe, we) : Ga(oe) || bs(oe) || mt(oe) ? lo(oe) : Zo(oe)).name;
      }
    },
    $mobx: "$mobx"
  });
}
const Vl = function (oe) {
  return {
    $implicit: oe
  };
};
function kl(oe, we) {
  if (oe & 1) {
    i.ynx(0);
    i.TgZ(1, "div");
    i.Hsn(2);
    i.qZA();
    i.BQk();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.xp6(1);
    i.Udp("height", ce.getTotalHeight());
  }
}
const Gi = function () {
  return {
    dontDetach: true
  };
};
const ic = ["*"];
const tl = ["loadingTemplate"];
const gr = ["treeNodeTemplate"];
const ro = ["treeNodeWrapperTemplate"];
const Vu = ["treeNodeFullTemplate"];
const Zl = ["viewport"];
const $l = function (oe, we, ce, nt) {
  return {
    loadingTemplate: oe,
    treeNodeTemplate: we,
    treeNodeWrapperTemplate: ce,
    treeNodeFullTemplate: nt
  };
};
function Nc(oe, we) {
  if (oe & 1) {
    i._UZ(0, "tree-node-collection", 4);
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.Q6J("nodes", ce.treeModel.roots)("treeModel", ce.treeModel)("templates", i.l5B(3, $l, ce.loadingTemplate, ce.treeNodeTemplate, ce.treeNodeWrapperTemplate, ce.treeNodeFullTemplate));
  }
}
function Da(oe, we) {
  if (oe & 1) {
    i._UZ(0, "tree-node-drop-slot", 5);
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.Q6J("dropIndex", 0)("node", ce.treeModel.virtualRoot);
  }
}
function td(oe, we) {
  if (oe & 1) {
    i._UZ(0, "tree-node-drop-slot", 6);
  }
  if (oe & 2) {
    const ce = i.oxw(3);
    i.Q6J("dropIndex", ce.node.index)("node", ce.node.parent);
  }
}
function Bd(oe, we) {
  if (oe & 1) {
    i.TgZ(0, "div");
    i.YNc(1, td, 1, 2, "tree-node-drop-slot", 3);
    i._UZ(2, "tree-node-wrapper", 4)(3, "tree-node-children", 5)(4, "tree-node-drop-slot", 6);
    i.qZA();
  }
  if (oe & 2) {
    const ce = i.oxw(2);
    i.Tol(ce.node.getClass());
    i.ekj("tree-node", true)("tree-node-expanded", ce.node.isExpanded && ce.node.hasChildren)("tree-node-collapsed", ce.node.isCollapsed && ce.node.hasChildren)("tree-node-leaf", ce.node.isLeaf)("tree-node-active", ce.node.isActive)("tree-node-focused", ce.node.isFocused);
    i.xp6(1);
    i.Q6J("ngIf", ce.index === 0);
    i.xp6(1);
    i.Q6J("node", ce.node)("index", ce.index)("templates", ce.templates);
    i.xp6(1);
    i.Q6J("node", ce.node)("templates", ce.templates);
    i.xp6(1);
    i.Q6J("dropIndex", ce.node.index + 1)("node", ce.node.parent);
  }
}
const mu = function (oe, we, ce, nt) {
  return {
    $implicit: oe,
    node: we,
    index: ce,
    templates: nt
  };
};
function jo(oe, we) {
  if (oe & 1) {
    i.ynx(0);
    i.YNc(1, Bd, 5, 22, "div", 1);
    i.GkF(2, 2);
    i.BQk();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.xp6(1);
    i.Q6J("ngIf", !ce.templates.treeNodeFullTemplate);
    i.xp6(1);
    i.Q6J("ngTemplateOutlet", ce.templates.treeNodeFullTemplate)("ngTemplateOutletContext", i.l5B(3, mu, ce.node, ce.node, ce.index, ce.templates));
  }
}
function nd(oe, we) {
  if (oe & 1) {
    i.TgZ(0, "span");
    i._uU(1);
    i.qZA();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.xp6(1);
    i.Oqu(ce.node.displayField);
  }
}
const bl = function (oe, we, ce) {
  return {
    $implicit: oe,
    node: we,
    index: ce
  };
};
function Ol(oe, we) {
  if (oe & 1) {
    const ce = i.EpF();
    i.TgZ(0, "span", 3);
    i.NdJ("click", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw(2);
      return i.KtG(Pn.node.mouseAction("expanderClick", sn));
    });
    i._UZ(1, "span", 4);
    i.qZA();
  }
  if (oe & 2) {
    const ce = i.oxw(2);
    i.ekj("toggle-children-wrapper-expanded", ce.node.isExpanded)("toggle-children-wrapper-collapsed", ce.node.isCollapsed);
  }
}
function Qo(oe, we) {
  if (oe & 1) {
    i._UZ(0, "span", 5);
  }
}
function Eo(oe, we) {
  if (oe & 1) {
    i.ynx(0);
    i.YNc(1, Ol, 2, 4, "span", 1);
    i.YNc(2, Qo, 1, 0, "span", 2);
    i.BQk();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.xp6(1);
    i.Q6J("ngIf", ce.node.hasChildren);
    i.xp6(1);
    i.Q6J("ngIf", !ce.node.hasChildren);
  }
}
function ml(oe, we) {
  if (oe & 1) {
    i._UZ(0, "tree-node-collection", 4);
  }
  if (oe & 2) {
    const ce = i.oxw(3);
    i.Q6J("nodes", ce.node.children)("templates", ce.templates)("treeModel", ce.node.treeModel);
  }
}
function $o(oe, we) {
  if (oe & 1) {
    i._UZ(0, "tree-loading-component", 5);
  }
  if (oe & 2) {
    const ce = i.oxw(3);
    i.Udp("padding-left", ce.node.getNodePadding());
    i.Q6J("template", ce.templates.loadingTemplate)("node", ce.node);
  }
}
function Su(oe, we) {
  if (oe & 1) {
    i.TgZ(0, "div");
    i.YNc(1, ml, 1, 3, "tree-node-collection", 2);
    i.YNc(2, $o, 1, 4, "tree-loading-component", 3);
    i.qZA();
  }
  if (oe & 2) {
    const ce = i.oxw(2);
    i.ekj("tree-children", true)("tree-children-no-padding", ce.node.options.levelPadding);
    i.xp6(1);
    i.Q6J("ngIf", ce.node.children);
    i.xp6(1);
    i.Q6J("ngIf", !ce.node.children);
  }
}
function mc(oe, we) {
  if (oe & 1) {
    i.ynx(0);
    i.YNc(1, Su, 3, 6, "div", 1);
    i.BQk();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.xp6(1);
    i.Q6J("treeAnimateOpen", ce.node.isExpanded)("treeAnimateOpenSpeed", ce.node.options.animateSpeed)("treeAnimateOpenAcceleration", ce.node.options.animateAcceleration)("treeAnimateOpenEnabled", ce.node.options.animateExpand);
  }
}
function Ps(oe, we) {
  if (oe & 1) {
    i._UZ(0, "tree-node", 2);
  }
  if (oe & 2) {
    const ce = we.$implicit;
    const nt = we.index;
    const sn = i.oxw(2);
    i.Q6J("node", ce)("index", nt)("templates", sn.templates);
  }
}
function Ii(oe, we) {
  if (oe & 1) {
    i.ynx(0);
    i.TgZ(1, "div");
    i.YNc(2, Ps, 1, 3, "tree-node", 1);
    i.qZA();
    i.BQk();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.xp6(1);
    i.Udp("margin-top", ce.marginTop);
    i.xp6(1);
    i.Q6J("ngForOf", ce.viewportNodes)("ngForTrackBy", ce.trackNode);
  }
}
function lc(oe, we) {
  if (oe & 1) {
    i._UZ(0, "tree-node-checkbox", 4);
  }
  if (oe & 2) {
    const ce = i.oxw(2);
    i.Q6J("node", ce.node);
  }
}
function cc(oe, we) {
  if (oe & 1) {
    const ce = i.EpF();
    i.TgZ(0, "div", 2);
    i.YNc(1, lc, 1, 1, "tree-node-checkbox", 3);
    i._UZ(2, "tree-node-expander", 4);
    i.TgZ(3, "div", 5);
    i.NdJ("click", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("click", sn));
    })("dblclick", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("dblClick", sn));
    })("mouseover", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("mouseOver", sn));
    })("mouseout", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("mouseOut", sn));
    })("contextmenu", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("contextMenu", sn));
    })("treeDrop", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.onDrop(sn));
    })("treeDropDragOver", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("dragOver", sn));
    })("treeDropDragLeave", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("dragLeave", sn));
    })("treeDropDragEnter", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("dragEnter", sn));
    });
    i._UZ(4, "tree-node-content", 6);
    i.qZA()();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.Udp("padding-left", ce.node.getNodePadding());
    i.xp6(1);
    i.Q6J("ngIf", ce.node.options.useCheckbox);
    i.xp6(1);
    i.Q6J("node", ce.node);
    i.xp6(1);
    i.ekj("node-content-wrapper-active", ce.node.isActive)("node-content-wrapper-focused", ce.node.isFocused);
    i.Q6J("treeAllowDrop", ce.node.allowDrop)("allowDragoverStyling", ce.node.allowDragoverStyling())("treeDrag", ce.node)("treeDragEnabled", ce.node.allowDrag());
    i.xp6(1);
    i.Q6J("node", ce.node)("index", ce.index)("template", ce.templates.treeNodeTemplate);
  }
}
function ir(oe, we) {
  if (oe & 1) {
    const ce = i.EpF();
    i.ynx(0);
    i.TgZ(1, "input", 1);
    i.NdJ("click", function (sn) {
      i.CHM(ce);
      const Pn = i.oxw();
      return i.KtG(Pn.node.mouseAction("checkboxClick", sn));
    });
    i.qZA();
    i.BQk();
  }
  if (oe & 2) {
    const ce = i.oxw();
    i.xp6(1);
    i.Q6J("checked", ce.node.isSelected)("indeterminate", ce.node.isPartiallySelected);
  }
}
let uc = (() => {
  class oe {
    constructor(ce, nt) {
      this.templateRef = ce;
      this.viewContainer = nt;
      this.templateBindings = {};
    }
    ngOnInit() {
      this.view = this.viewContainer.createEmbeddedView(this.templateRef);
      if (this.dispose) {
        this.dispose();
      }
      if (this.shouldDetach()) {
        this.view.detach();
      }
      this.autoDetect(this.view);
    }
    shouldDetach() {
      return this.treeMobxAutorun && this.treeMobxAutorun.detach;
    }
    autoDetect(ce) {
      this.dispose = Bt(() => ce.detectChanges());
    }
    ngOnDestroy() {
      if (this.dispose) {
        this.dispose();
      }
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)(i.Y36(i.Rgc), i.Y36(i.s_b));
  };
  oe.ɵdir = i.lG2({
    type: oe,
    selectors: [["", "treeMobxAutorun", ""]],
    inputs: {
      treeMobxAutorun: "treeMobxAutorun"
    }
  });
  return oe;
})();
export const iM = {
  TOGGLE_ACTIVE: (oe, we, ce) => we && we.toggleActivated(),
  TOGGLE_ACTIVE_MULTI: (oe, we, ce) => we && we.toggleActivated(true),
  TOGGLE_SELECTED: (oe, we, ce) => we && we.toggleSelected(),
  ACTIVATE: (oe, we, ce) => we.setIsActive(true),
  DEACTIVATE: (oe, we, ce) => we.setIsActive(false),
  SELECT: (oe, we, ce) => we.setIsSelected(true),
  DESELECT: (oe, we, ce) => we.setIsSelected(false),
  FOCUS: (oe, we, ce) => we.focus(),
  TOGGLE_EXPANDED: (oe, we, ce) => we.hasChildren && we.toggleExpanded(),
  EXPAND: (oe, we, ce) => we.expand(),
  COLLAPSE: (oe, we, ce) => we.collapse(),
  DRILL_DOWN: (oe, we, ce) => oe.focusDrillDown(),
  DRILL_UP: (oe, we, ce) => oe.focusDrillUp(),
  NEXT_NODE: (oe, we, ce) => oe.focusNextNode(),
  PREVIOUS_NODE: (oe, we, ce) => oe.focusPreviousNode(),
  MOVE_NODE: (oe, we, ce, {
    from: nt,
    to: sn
  }) => {
    if (ce.ctrlKey) {
      oe.copyNode(nt, sn);
    } else {
      oe.moveNode(nt, sn);
    }
  }
};
const yc = {
  mouse: {
    click: iM.TOGGLE_ACTIVE,
    dblClick: null,
    contextMenu: null,
    expanderClick: iM.TOGGLE_EXPANDED,
    checkboxClick: iM.TOGGLE_SELECTED,
    drop: iM.MOVE_NODE
  },
  keys: {
    39: iM.DRILL_DOWN,
    37: iM.DRILL_UP,
    40: iM.NEXT_NODE,
    38: iM.PREVIOUS_NODE,
    32: iM.TOGGLE_ACTIVE,
    13: iM.TOGGLE_ACTIVE
  }
};
class Vd {
  constructor(we = {}) {
    var zl;
    var wl;
    var _u;
    this.options = we;
    this.actionMapping = {
      mouse: {
        click: this.options?.actionMapping?.mouse?.click ?? yc.mouse.click,
        dblClick: this.options?.actionMapping?.mouse?.dblClick ?? yc.mouse.dblClick,
        contextMenu: this.options?.actionMapping?.mouse?.contextMenu ?? yc.mouse.contextMenu,
        expanderClick: this.options?.actionMapping?.mouse?.expanderClick ?? yc.mouse.expanderClick,
        checkboxClick: this.options?.actionMapping?.mouse?.checkboxClick ?? yc.mouse.checkboxClick,
        drop: this.options?.actionMapping?.mouse?.drop ?? yc.mouse.drop,
        dragStart: this.options?.actionMapping?.mouse?.dragStart ?? undefined,
        drag: this.options?.actionMapping?.mouse?.drag ?? undefined,
        dragEnd: this.options?.actionMapping?.mouse?.dragEnd ?? undefined,
        dragOver: this.options?.actionMapping?.mouse?.dragOver ?? undefined,
        dragLeave: this.options?.actionMapping?.mouse?.dragLeave ?? undefined,
        dragEnter: this.options?.actionMapping?.mouse?.dragEnter ?? undefined,
        mouseOver: this.options?.actionMapping?.mouse?.mouseOver ?? undefined,
        mouseOut: this.options?.actionMapping?.mouse?.mouseOut ?? undefined
      },
      keys: {
        39: iM.DRILL_DOWN,
        37: iM.DRILL_UP,
        40: iM.NEXT_NODE,
        38: iM.PREVIOUS_NODE,
        32: iM.TOGGLE_ACTIVE,
        13: iM.TOGGLE_ACTIVE
      }
    };
    if ((zl = this.options?.actionMapping) !== null && zl !== undefined && zl.keys) {
      this.actionMapping.keys = Object.assign(Object.assign({}, this.actionMapping.keys), this.options.actionMapping.keys);
    }
    if (we.rtl) {
      this.actionMapping.keys[39] = ((wl = we.actionMapping) === null || wl === undefined ? undefined : wl.keys[39]) || iM.DRILL_UP;
      this.actionMapping.keys[37] = ((_u = we.actionMapping) === null || _u === undefined ? undefined : _u.keys[37]) || iM.DRILL_DOWN;
    }
  }
  get hasChildrenField() {
    return this.options.hasChildrenField || "hasChildren";
  }
  get childrenField() {
    return this.options.childrenField || "children";
  }
  get displayField() {
    return this.options.displayField || "name";
  }
  get idField() {
    return this.options.idField || "id";
  }
  get isExpandedField() {
    return this.options.isExpandedField || "isExpanded";
  }
  get getChildren() {
    return this.options.getChildren;
  }
  get levelPadding() {
    return this.options.levelPadding || 0;
  }
  get useVirtualScroll() {
    return this.options.useVirtualScroll;
  }
  get animateExpand() {
    return this.options.animateExpand;
  }
  get animateSpeed() {
    return this.options.animateSpeed || 1;
  }
  get animateAcceleration() {
    return this.options.animateAcceleration || 1.2;
  }
  get scrollOnActivate() {
    return this.options.scrollOnActivate === undefined || this.options.scrollOnActivate;
  }
  get rtl() {
    return !!this.options.rtl;
  }
  get rootId() {
    return this.options.rootId;
  }
  get useCheckbox() {
    return this.options.useCheckbox;
  }
  get useTriState() {
    return this.options.useTriState === undefined || this.options.useTriState;
  }
  get scrollContainer() {
    return this.options.scrollContainer;
  }
  get allowDragoverStyling() {
    return this.options.allowDragoverStyling === undefined || this.options.allowDragoverStyling;
  }
  getNodeClone(we) {
    if (this.options.getNodeClone) {
      return this.options.getNodeClone(we);
    }
    const ce = Object.assign({}, we.data);
    if (ce.id) {
      delete ce.id;
    }
    return ce;
  }
  allowDrop(we, ce, nt) {
    if (this.options.allowDrop instanceof Function) {
      return this.options.allowDrop(we, ce, nt);
    } else {
      return this.options.allowDrop === undefined || this.options.allowDrop;
    }
  }
  allowDrag(we) {
    if (this.options.allowDrag instanceof Function) {
      return this.options.allowDrag(we);
    } else {
      return this.options.allowDrag;
    }
  }
  nodeClass(we) {
    if (this.options.nodeClass) {
      return this.options.nodeClass(we);
    } else {
      return "";
    }
  }
  nodeHeight(we) {
    if (we.data.virtual) {
      return 0;
    }
    let ce = this.options.nodeHeight || 22;
    if (typeof ce == "function") {
      ce = ce(we);
    }
    return ce + (we.index === 0 ? 2 : 1) * this.dropSlotHeight;
  }
  get dropSlotHeight() {
    if (typeof this.options.dropSlotHeight == "number") {
      return this.options.dropSlotHeight;
    } else {
      return 2;
    }
  }
}
const vl = {
  toggleExpanded: "toggleExpanded",
  activate: "activate",
  deactivate: "deactivate",
  nodeActivate: "nodeActivate",
  nodeDeactivate: "nodeDeactivate",
  select: "select",
  deselect: "deselect",
  focus: "focus",
  blur: "blur",
  initialized: "initialized",
  updateData: "updateData",
  moveNode: "moveNode",
  copyNode: "copyNode",
  event: "event",
  loadNodeChildren: "loadNodeChildren",
  changeFilter: "changeFilter",
  stateChange: "stateChange"
};
function Mo(oe, we, ce, nt) {
  var Ei;
  var sn = arguments.length;
  var Pn = sn < 3 ? we : nt === null ? nt = Object.getOwnPropertyDescriptor(we, ce) : nt;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    Pn = Reflect.decorate(oe, we, ce, nt);
  } else {
    for (var Hi = oe.length - 1; Hi >= 0; Hi--) {
      if (Ei = oe[Hi]) {
        Pn = (sn < 3 ? Ei(Pn) : sn > 3 ? Ei(we, ce, Pn) : Ei(we, ce)) || Pn;
      }
    }
  }
  if (sn > 3 && Pn) {
    Object.defineProperty(we, ce, Pn);
  }
  return Pn;
}
function ol(oe, we) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
    return Reflect.metadata(oe, we);
  }
}
let Sd = (() => {
  class oe {
    constructor(ce, nt, sn, Pn) {
      this.data = ce;
      this.parent = nt;
      this.treeModel = sn;
      this.position = 0;
      this.allowDrop = (Ei, Hi) => this.options.allowDrop(Ei, {
        parent: this,
        index: 0
      }, Hi);
      this.allowDragoverStyling = () => this.options.allowDragoverStyling;
      if (this.id == null) {
        this.id = function mf() {
          return Math.floor(Math.random() * 10000000000000);
        }();
      }
      this.index = Pn;
      if (this.getField("children")) {
        this._initChildren();
      }
      this.autoLoadChildren();
    }
    get isHidden() {
      return this.treeModel.isHidden(this);
    }
    get isExpanded() {
      return this.treeModel.isExpanded(this);
    }
    get isActive() {
      return this.treeModel.isActive(this);
    }
    get isFocused() {
      return this.treeModel.isNodeFocused(this);
    }
    get isSelected() {
      if (this.isSelectable()) {
        return this.treeModel.isSelected(this);
      } else {
        return this.children.some(ce => ce.isSelected);
      }
    }
    get isAllSelected() {
      if (this.isSelectable()) {
        return this.treeModel.isSelected(this);
      } else {
        return this.children.every(ce => ce.isAllSelected);
      }
    }
    get isPartiallySelected() {
      return this.isSelected && !this.isAllSelected;
    }
    get level() {
      if (this.parent) {
        return this.parent.level + 1;
      } else {
        return 0;
      }
    }
    get path() {
      if (this.parent) {
        return [...this.parent.path, this.id];
      } else {
        return [];
      }
    }
    get elementRef() {
      throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element";
    }
    get originalNode() {
      return this._originalNode;
    }
    get hasChildren() {
      return !!this.getField("hasChildren") || !!this.children && this.children.length > 0;
    }
    get isCollapsed() {
      return !this.isExpanded;
    }
    get isLeaf() {
      return !this.hasChildren;
    }
    get isRoot() {
      return this.parent.data.virtual;
    }
    get realParent() {
      if (this.isRoot) {
        return null;
      } else {
        return this.parent;
      }
    }
    get options() {
      return this.treeModel.options;
    }
    fireEvent(ce) {
      this.treeModel.fireEvent(ce);
    }
    get displayField() {
      return this.getField("display");
    }
    get id() {
      return this.getField("id");
    }
    set id(ce) {
      this.setField("id", ce);
    }
    getField(ce) {
      return this.data[this.options[`${ce}Field`]];
    }
    setField(ce, nt) {
      this.data[this.options[`${ce}Field`]] = nt;
    }
    _findAdjacentSibling(ce, nt = false) {
      const sn = this._getParentsChildren(nt);
      const Pn = sn.indexOf(this);
      if (sn.length > Pn + ce) {
        return sn[Pn + ce];
      } else {
        return null;
      }
    }
    findNextSibling(ce = false) {
      return this._findAdjacentSibling(1, ce);
    }
    findPreviousSibling(ce = false) {
      return this._findAdjacentSibling(-1, ce);
    }
    getVisibleChildren() {
      return this.visibleChildren;
    }
    get visibleChildren() {
      return (this.children || []).filter(ce => !ce.isHidden);
    }
    getFirstChild(ce = false) {
      let nt = ce ? this.visibleChildren : this.children;
      if (nt != null && nt.length) {
        return nt[0];
      } else {
        return null;
      }
    }
    getLastChild(ce = false) {
      let nt = ce ? this.visibleChildren : this.children;
      if (nt != null && nt.length) {
        return nt[nt.length - 1];
      } else {
        return null;
      }
    }
    findNextNode(ce = true, nt = false) {
      return ce && this.isExpanded && this.getFirstChild(nt) || this.findNextSibling(nt) || this.parent && this.parent.findNextNode(false, nt);
    }
    findPreviousNode(ce = false) {
      let nt = this.findPreviousSibling(ce);
      if (nt) {
        return nt._getLastOpenDescendant(ce);
      } else {
        return this.realParent;
      }
    }
    _getLastOpenDescendant(ce = false) {
      const nt = this.getLastChild(ce);
      if (this.isCollapsed || !nt) {
        return this;
      } else {
        return nt._getLastOpenDescendant(ce);
      }
    }
    _getParentsChildren(ce = false) {
      return this.parent && (ce ? this.parent.getVisibleChildren() : this.parent.children) || [];
    }
    getIndexInParent(ce = false) {
      return this._getParentsChildren(ce).indexOf(this);
    }
    isDescendantOf(ce) {
      return this === ce || this.parent && this.parent.isDescendantOf(ce);
    }
    getNodePadding() {
      return this.options.levelPadding * (this.level - 1) + "px";
    }
    getClass() {
      return [this.options.nodeClass(this), `tree-node-level-${this.level}`].join(" ");
    }
    onDrop(ce) {
      this.mouseAction("drop", ce.event, {
        from: ce.element,
        to: {
          parent: this,
          index: 0,
          dropOnNode: true
        }
      });
    }
    allowDrag() {
      return this.options.allowDrag(this);
    }
    loadNodeChildren() {
      if (this.options.getChildren) {
        return Promise.resolve(this.options.getChildren(this)).then(ce => {
          if (ce) {
            this.setField("children", ce);
            this._initChildren();
            if (this.options.useTriState && this.treeModel.isSelected(this)) {
              this.setIsSelected(true);
            }
            this.children.forEach(nt => {
              if (nt.getField("isExpanded") && nt.hasChildren) {
                nt.expand();
              }
            });
          }
        }).then(() => {
          this.fireEvent({
            eventName: vl.loadNodeChildren,
            node: this
          });
        });
      } else {
        return Promise.resolve();
      }
    }
    expand() {
      if (!this.isExpanded) {
        this.toggleExpanded();
      }
      return this;
    }
    collapse() {
      if (this.isExpanded) {
        this.toggleExpanded();
      }
      return this;
    }
    doForAll(ce) {
      Promise.resolve(ce(this)).then(() => {
        if (this.children) {
          this.children.forEach(nt => nt.doForAll(ce));
        }
      });
    }
    expandAll() {
      this.doForAll(ce => ce.expand());
    }
    collapseAll() {
      this.doForAll(ce => ce.collapse());
    }
    ensureVisible() {
      if (this.realParent) {
        this.realParent.expand();
        this.realParent.ensureVisible();
      }
      return this;
    }
    toggleExpanded() {
      this.setIsExpanded(!this.isExpanded);
      return this;
    }
    setIsExpanded(ce) {
      if (this.hasChildren) {
        this.treeModel.setExpandedNode(this, ce);
      }
      return this;
    }
    autoLoadChildren() {
      this.handler = Ki(() => this.isExpanded, ce => {
        if (!this.children && this.hasChildren && ce) {
          this.loadNodeChildren();
        }
      }, {
        fireImmediately: true
      });
    }
    dispose() {
      if (this.children) {
        this.children.forEach(ce => ce.dispose());
      }
      if (this.handler) {
        this.handler();
      }
      this.parent = null;
      this.children = null;
    }
    setIsActive(ce, nt = false) {
      this.treeModel.setActiveNode(this, ce, nt);
      if (ce) {
        this.focus(this.options.scrollOnActivate);
      }
      return this;
    }
    isSelectable() {
      return this.isLeaf || !this.children || !this.options.useTriState;
    }
    setIsSelected(ce) {
      if (this.isSelectable()) {
        this.treeModel.setSelectedNode(this, ce);
      } else {
        this.visibleChildren.forEach(nt => nt.setIsSelected(ce));
      }
      return this;
    }
    toggleSelected() {
      this.setIsSelected(!this.isSelected);
      return this;
    }
    toggleActivated(ce = false) {
      this.setIsActive(!this.isActive, ce);
      return this;
    }
    setActiveAndVisible(ce = false) {
      this.setIsActive(true, ce).ensureVisible();
      setTimeout(this.scrollIntoView.bind(this));
      return this;
    }
    scrollIntoView(ce = false) {
      this.treeModel.virtualScroll.scrollIntoView(this, ce);
    }
    focus(ce = true) {
      let nt = this.treeModel.getFocusedNode();
      this.treeModel.setFocusedNode(this);
      if (ce) {
        this.scrollIntoView();
      }
      if (nt) {
        this.fireEvent({
          eventName: vl.blur,
          node: nt
        });
      }
      this.fireEvent({
        eventName: vl.focus,
        node: this
      });
      return this;
    }
    blur() {
      let ce = this.treeModel.getFocusedNode();
      this.treeModel.setFocusedNode(null);
      if (ce) {
        this.fireEvent({
          eventName: vl.blur,
          node: this
        });
      }
      return this;
    }
    setIsHidden(ce) {
      this.treeModel.setIsHidden(this, ce);
    }
    hide() {
      this.setIsHidden(true);
    }
    show() {
      this.setIsHidden(false);
    }
    mouseAction(ce, nt, sn = null) {
      this.treeModel.setFocus(true);
      const Ei = this.options.actionMapping.mouse[ce];
      if (Ei) {
        Ei(this.treeModel, this, nt, sn);
      }
    }
    getSelfHeight() {
      return this.options.nodeHeight(this);
    }
    _initChildren() {
      this.children = this.getField("children").map((ce, nt) => new oe(ce, this, this.treeModel, nt));
    }
  }
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "isHidden", null);
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "isExpanded", null);
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "isActive", null);
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "isFocused", null);
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "isSelected", null);
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "isAllSelected", null);
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "isPartiallySelected", null);
  Mo([Zi, ol("design:type", Array)], oe.prototype, "children", undefined);
  Mo([Zi, ol("design:type", Number)], oe.prototype, "index", undefined);
  Mo([Zi, ol("design:type", Object)], oe.prototype, "position", undefined);
  Mo([Zi, ol("design:type", Number)], oe.prototype, "height", undefined);
  Mo([Ar, ol("design:type", Number), ol("design:paramtypes", [])], oe.prototype, "level", null);
  Mo([Ar, ol("design:type", Array), ol("design:paramtypes", [])], oe.prototype, "path", null);
  Mo([Ar, ol("design:type", Object), ol("design:paramtypes", [])], oe.prototype, "visibleChildren", null);
  Mo([_r, ol("design:type", Function), ol("design:paramtypes", [Object]), ol("design:returntype", undefined)], oe.prototype, "setIsSelected", null);
  Mo([_r, ol("design:type", Function), ol("design:paramtypes", []), ol("design:returntype", undefined)], oe.prototype, "_initChildren", null);
  return oe;
})();
function za(oe, we, ce, nt) {
  var Ei;
  var sn = arguments.length;
  var Pn = sn < 3 ? we : nt === null ? nt = Object.getOwnPropertyDescriptor(we, ce) : nt;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    Pn = Reflect.decorate(oe, we, ce, nt);
  } else {
    for (var Hi = oe.length - 1; Hi >= 0; Hi--) {
      if (Ei = oe[Hi]) {
        Pn = (sn < 3 ? Ei(Pn) : sn > 3 ? Ei(we, ce, Pn) : Ei(we, ce)) || Pn;
      }
    }
  }
  if (sn > 3 && Pn) {
    Object.defineProperty(we, ce, Pn);
  }
  return Pn;
}
function ts(oe, we) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
    return Reflect.metadata(oe, we);
  }
}
let Ta = (() => {
  class oe {
    constructor() {
      this.options = new Vd();
      this.eventNames = Object.keys(vl);
      this.expandedNodeIds = {};
      this.selectedLeafNodeIds = {};
      this.activeNodeIds = {};
      this.hiddenNodeIds = {};
      this.focusedNodeId = null;
      this.firstUpdate = true;
      this.subscriptions = [];
    }
    fireEvent(ce) {
      ce.treeModel = this;
      this.events[ce.eventName].emit(ce);
      this.events.event.emit(ce);
    }
    subscribe(ce, nt) {
      const sn = this.events[ce].subscribe(nt);
      this.subscriptions.push(sn);
    }
    getFocusedNode() {
      return this.focusedNode;
    }
    getActiveNode() {
      return this.activeNodes[0];
    }
    getActiveNodes() {
      return this.activeNodes;
    }
    getVisibleRoots() {
      return this.virtualRoot.visibleChildren;
    }
    getFirstRoot(ce = false) {
      const nt = ce ? this.getVisibleRoots() : this.roots;
      if (nt != null && nt.length) {
        return nt[0];
      } else {
        return null;
      }
    }
    getLastRoot(ce = false) {
      const nt = ce ? this.getVisibleRoots() : this.roots;
      if (nt != null && nt.length) {
        return nt[nt.length - 1];
      } else {
        return null;
      }
    }
    get isFocused() {
      return oe.focusedTree === this;
    }
    isNodeFocused(ce) {
      return this.focusedNode === ce;
    }
    isEmptyTree() {
      return this.roots && this.roots.length === 0;
    }
    get focusedNode() {
      if (this.focusedNodeId) {
        return this.getNodeById(this.focusedNodeId);
      } else {
        return null;
      }
    }
    get expandedNodes() {
      return Object.keys(this.expandedNodeIds).filter(nt => this.expandedNodeIds[nt]).map(nt => this.getNodeById(nt)).filter(Boolean);
    }
    get activeNodes() {
      return Object.keys(this.activeNodeIds).filter(nt => this.activeNodeIds[nt]).map(nt => this.getNodeById(nt)).filter(Boolean);
    }
    get hiddenNodes() {
      return Object.keys(this.hiddenNodeIds).filter(nt => this.hiddenNodeIds[nt]).map(nt => this.getNodeById(nt)).filter(Boolean);
    }
    get selectedLeafNodes() {
      return Object.keys(this.selectedLeafNodeIds).filter(nt => this.selectedLeafNodeIds[nt]).map(nt => this.getNodeById(nt)).filter(Boolean);
    }
    getNodeByPath(ce, nt = null) {
      if (!ce) {
        return null;
      }
      nt = nt || this.virtualRoot;
      if (ce.length === 0) {
        return nt;
      }
      if (!nt.children) {
        return null;
      }
      const sn = ce.shift();
      const Pn = nt.children.find(Ei => Ei.id === sn);
      if (Pn) {
        return this.getNodeByPath(ce, Pn);
      } else {
        return null;
      }
    }
    getNodeById(ce) {
      const nt = ce.toString();
      return this.getNodeBy(sn => sn.id.toString() === nt);
    }
    getNodeBy(ce, nt = null) {
      if (!(nt = nt || this.virtualRoot).children) {
        return null;
      }
      const sn = nt.children.find(ce);
      if (sn) {
        return sn;
      }
      for (let Pn of nt.children) {
        const Ei = this.getNodeBy(ce, Pn);
        if (Ei) {
          return Ei;
        }
      }
    }
    isExpanded(ce) {
      return this.expandedNodeIds[ce.id];
    }
    isHidden(ce) {
      return this.hiddenNodeIds[ce.id];
    }
    isActive(ce) {
      return this.activeNodeIds[ce.id];
    }
    isSelected(ce) {
      return this.selectedLeafNodeIds[ce.id];
    }
    ngOnDestroy() {
      this.dispose();
      this.unsubscribeAll();
    }
    dispose() {
      if (this.virtualRoot) {
        this.virtualRoot.dispose();
      }
    }
    unsubscribeAll() {
      this.subscriptions.forEach(ce => ce.unsubscribe());
      this.subscriptions = [];
    }
    setData({
      nodes: ce,
      options: nt = null,
      events: sn = null
    }) {
      if (nt) {
        this.options = new Vd(nt);
      }
      if (sn) {
        this.events = sn;
      }
      if (ce) {
        this.nodes = ce;
      }
      this.update();
    }
    update() {
      let ce = {
        id: this.options.rootId,
        virtual: true,
        [this.options.childrenField]: this.nodes
      };
      this.dispose();
      this.virtualRoot = new Sd(ce, null, this, 0);
      this.roots = this.virtualRoot.children;
      if (this.firstUpdate) {
        if (this.roots) {
          this.firstUpdate = false;
          this._calculateExpandedNodes();
        }
      } else {
        this.fireEvent({
          eventName: vl.updateData
        });
      }
    }
    setFocusedNode(ce) {
      this.focusedNodeId = ce ? ce.id : null;
    }
    setFocus(ce) {
      oe.focusedTree = ce ? this : null;
    }
    doForAll(ce) {
      this.roots.forEach(nt => nt.doForAll(ce));
    }
    focusNextNode() {
      let ce = this.getFocusedNode();
      let nt = ce ? ce.findNextNode(true, true) : this.getFirstRoot(true);
      if (nt) {
        nt.focus();
      }
    }
    focusPreviousNode() {
      let ce = this.getFocusedNode();
      let nt = ce ? ce.findPreviousNode(true) : this.getLastRoot(true);
      if (nt) {
        nt.focus();
      }
    }
    focusDrillDown() {
      let ce = this.getFocusedNode();
      if (ce && ce.isCollapsed && ce.hasChildren) {
        ce.toggleExpanded();
      } else {
        let nt = ce ? ce.getFirstChild(true) : this.getFirstRoot(true);
        if (nt) {
          nt.focus();
        }
      }
    }
    focusDrillUp() {
      let ce = this.getFocusedNode();
      if (ce) {
        if (ce.isExpanded) {
          ce.toggleExpanded();
        } else {
          let nt = ce.realParent;
          if (nt) {
            nt.focus();
          }
        }
      }
    }
    setActiveNode(ce, nt, sn = false) {
      if (sn) {
        this._setActiveNodeMulti(ce, nt);
      } else {
        this._setActiveNodeSingle(ce, nt);
      }
      if (nt) {
        ce.focus(this.options.scrollOnActivate);
        this.fireEvent({
          eventName: vl.activate,
          node: ce
        });
        this.fireEvent({
          eventName: vl.nodeActivate,
          node: ce
        });
      } else {
        this.fireEvent({
          eventName: vl.deactivate,
          node: ce
        });
        this.fireEvent({
          eventName: vl.nodeDeactivate,
          node: ce
        });
      }
    }
    setSelectedNode(ce, nt) {
      this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, {
        [ce.id]: nt
      });
      if (nt) {
        ce.focus();
        this.fireEvent({
          eventName: vl.select,
          node: ce
        });
      } else {
        this.fireEvent({
          eventName: vl.deselect,
          node: ce
        });
      }
    }
    setExpandedNode(ce, nt) {
      this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, {
        [ce.id]: nt
      });
      this.fireEvent({
        eventName: vl.toggleExpanded,
        node: ce,
        isExpanded: nt
      });
    }
    expandAll() {
      this.roots.forEach(ce => ce.expandAll());
    }
    collapseAll() {
      this.roots.forEach(ce => ce.collapseAll());
    }
    setIsHidden(ce, nt) {
      this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, {
        [ce.id]: nt
      });
    }
    setHiddenNodeIds(ce) {
      this.hiddenNodeIds = ce.reduce((nt, sn) => Object.assign(nt, {
        [sn]: true
      }), {});
    }
    performKeyAction(ce, nt) {
      const sn = this.options.actionMapping.keys[nt.keyCode];
      return !!sn && (nt.preventDefault(), sn(this, ce, nt), true);
    }
    filterNodes(ce, nt = true) {
      let sn;
      if (!ce) {
        return this.clearFilter();
      }
      if (ce && typeof ce.valueOf() == "string") {
        sn = Ei => Ei.displayField.toLowerCase().indexOf(ce.toLowerCase()) !== -1;
      } else {
        if (!ce || typeof ce != "function") {
          console.error("Don't know what to do with filter", ce);
          console.error("Should be either a string or function");
          return;
        }
        sn = ce;
      }
      const Pn = {};
      this.roots.forEach(Ei => this._filterNode(Pn, Ei, sn, nt));
      this.hiddenNodeIds = Pn;
      this.fireEvent({
        eventName: vl.changeFilter
      });
    }
    clearFilter() {
      this.hiddenNodeIds = {};
      this.fireEvent({
        eventName: vl.changeFilter
      });
    }
    moveNode(ce, nt) {
      const sn = ce.getIndexInParent();
      const Pn = ce.parent;
      if (!this.canMoveNode(ce, nt, sn)) {
        return;
      }
      const Ei = Pn.getField("children");
      if (!nt.parent.getField("children")) {
        nt.parent.setField("children", []);
      }
      const Hi = nt.parent.getField("children");
      const xs = Ei.splice(sn, 1)[0];
      let _a = Pn === nt.parent && nt.index > sn ? nt.index - 1 : nt.index;
      Hi.splice(_a, 0, xs);
      Pn.treeModel.update();
      if (nt.parent.treeModel !== Pn.treeModel) {
        nt.parent.treeModel.update();
      }
      this.fireEvent({
        eventName: vl.moveNode,
        node: xs,
        to: {
          parent: nt.parent.data,
          index: _a
        },
        from: {
          parent: Pn.data,
          index: sn
        }
      });
    }
    copyNode(ce, nt) {
      const sn = ce.getIndexInParent();
      if (!this.canMoveNode(ce, nt, sn)) {
        return;
      }
      if (!nt.parent.getField("children")) {
        nt.parent.setField("children", []);
      }
      const Pn = nt.parent.getField("children");
      const Ei = this.options.getNodeClone(ce);
      Pn.splice(nt.index, 0, Ei);
      ce.treeModel.update();
      if (nt.parent.treeModel !== ce.treeModel) {
        nt.parent.treeModel.update();
      }
      this.fireEvent({
        eventName: vl.copyNode,
        node: Ei,
        to: {
          parent: nt.parent.data,
          index: nt.index
        }
      });
    }
    getState() {
      return {
        expandedNodeIds: this.expandedNodeIds,
        selectedLeafNodeIds: this.selectedLeafNodeIds,
        activeNodeIds: this.activeNodeIds,
        hiddenNodeIds: this.hiddenNodeIds,
        focusedNodeId: this.focusedNodeId
      };
    }
    setState(ce) {
      if (!!ce) {
        Object.assign(this, {
          expandedNodeIds: ce.expandedNodeIds || {},
          selectedLeafNodeIds: ce.selectedLeafNodeIds || {},
          activeNodeIds: ce.activeNodeIds || {},
          hiddenNodeIds: ce.hiddenNodeIds || {},
          focusedNodeId: ce.focusedNodeId
        });
      }
    }
    subscribeToState(ce) {
      Bt(() => ce(this.getState()));
    }
    canMoveNode(ce, nt, sn) {
      if (!sn) {
        ce.getIndexInParent();
      }
      return (ce.parent !== nt.parent || sn !== nt.index) && !nt.parent.isDescendantOf(ce);
    }
    calculateExpandedNodes() {
      this._calculateExpandedNodes();
    }
    _filterNode(ce, nt, sn, Pn) {
      let Ei = sn(nt);
      if (nt.children) {
        nt.children.forEach(Hi => {
          if (this._filterNode(ce, Hi, sn, Pn)) {
            Ei = true;
          }
        });
      }
      if (!Ei) {
        ce[nt.id] = true;
      }
      if (Pn && Ei) {
        nt.ensureVisible();
      }
      return Ei;
    }
    _calculateExpandedNodes(ce = null) {
      if ((ce = ce || this.virtualRoot).data[this.options.isExpandedField]) {
        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, {
          [ce.id]: true
        });
      }
      if (ce.children) {
        ce.children.forEach(nt => this._calculateExpandedNodes(nt));
      }
    }
    _setActiveNodeSingle(ce, nt) {
      this.activeNodes.filter(sn => sn !== ce).forEach(sn => {
        this.fireEvent({
          eventName: vl.deactivate,
          node: sn
        });
        this.fireEvent({
          eventName: vl.nodeDeactivate,
          node: sn
        });
      });
      this.activeNodeIds = nt ? {
        [ce.id]: true
      } : {};
    }
    _setActiveNodeMulti(ce, nt) {
      this.activeNodeIds = Object.assign({}, this.activeNodeIds, {
        [ce.id]: nt
      });
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵprov = i.Yz7({
    token: oe,
    factory: oe.ɵfac
  });
  oe.focusedTree = null;
  return oe;
})();
za([Zi, ts("design:type", Array)], Ta.prototype, "roots", undefined);
za([Zi, ts("design:type", Object)], Ta.prototype, "expandedNodeIds", undefined);
za([Zi, ts("design:type", Object)], Ta.prototype, "selectedLeafNodeIds", undefined);
za([Zi, ts("design:type", Object)], Ta.prototype, "activeNodeIds", undefined);
za([Zi, ts("design:type", Object)], Ta.prototype, "hiddenNodeIds", undefined);
za([Zi, ts("design:type", Object)], Ta.prototype, "focusedNodeId", undefined);
za([Zi, ts("design:type", Sd)], Ta.prototype, "virtualRoot", undefined);
za([Ar, ts("design:type", Object), ts("design:paramtypes", [])], Ta.prototype, "focusedNode", null);
za([Ar, ts("design:type", Object), ts("design:paramtypes", [])], Ta.prototype, "expandedNodes", null);
za([Ar, ts("design:type", Object), ts("design:paramtypes", [])], Ta.prototype, "activeNodes", null);
za([Ar, ts("design:type", Object), ts("design:paramtypes", [])], Ta.prototype, "hiddenNodes", null);
za([Ar, ts("design:type", Object), ts("design:paramtypes", [])], Ta.prototype, "selectedLeafNodes", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object]), ts("design:returntype", undefined)], Ta.prototype, "setData", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "update", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object]), ts("design:returntype", undefined)], Ta.prototype, "setFocusedNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object]), ts("design:returntype", undefined)], Ta.prototype, "setFocus", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object]), ts("design:returntype", undefined)], Ta.prototype, "doForAll", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "focusNextNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "focusPreviousNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "focusDrillDown", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "focusDrillUp", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object, Object, Object]), ts("design:returntype", undefined)], Ta.prototype, "setActiveNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object, Object]), ts("design:returntype", undefined)], Ta.prototype, "setSelectedNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object, Object]), ts("design:returntype", undefined)], Ta.prototype, "setExpandedNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "expandAll", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "collapseAll", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object, Object]), ts("design:returntype", undefined)], Ta.prototype, "setIsHidden", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object]), ts("design:returntype", undefined)], Ta.prototype, "setHiddenNodeIds", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object, Object]), ts("design:returntype", undefined)], Ta.prototype, "filterNodes", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", []), ts("design:returntype", undefined)], Ta.prototype, "clearFilter", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object, Object]), ts("design:returntype", undefined)], Ta.prototype, "moveNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object, Object]), ts("design:returntype", undefined)], Ta.prototype, "copyNode", null);
za([_r, ts("design:type", Function), ts("design:paramtypes", [Object]), ts("design:returntype", undefined)], Ta.prototype, "setState", null);
let Dl = (() => {
  class oe {
    constructor() {
      this._draggedElement = null;
    }
    set(ce) {
      this._draggedElement = ce;
    }
    get() {
      return this._draggedElement;
    }
    isDragging() {
      return !!this.get();
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵprov = (0, i.Yz7)({
    factory: function () {
      return new oe();
    },
    token: oe,
    providedIn: "root"
  });
  return oe;
})();
function Qa(oe, we, ce, nt) {
  var Ei;
  var sn = arguments.length;
  var Pn = sn < 3 ? we : nt === null ? nt = Object.getOwnPropertyDescriptor(we, ce) : nt;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    Pn = Reflect.decorate(oe, we, ce, nt);
  } else {
    for (var Hi = oe.length - 1; Hi >= 0; Hi--) {
      if (Ei = oe[Hi]) {
        Pn = (sn < 3 ? Ei(Pn) : sn > 3 ? Ei(we, ce, Pn) : Ei(we, ce)) || Pn;
      }
    }
  }
  if (sn > 3 && Pn) {
    Object.defineProperty(we, ce, Pn);
  }
  return Pn;
}
function Il(oe, we) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
    return Reflect.metadata(oe, we);
  }
}
let pl = (() => {
  class oe {
    constructor(ce) {
      this.treeModel = ce;
      this.yBlocks = 0;
      this.x = 0;
      this.viewportHeight = null;
      this.viewport = null;
      ce.virtualScroll = this;
      this._dispose = [Bt(() => this.fixScroll())];
    }
    get y() {
      return this.yBlocks * 150;
    }
    get totalHeight() {
      if (this.treeModel.virtualRoot) {
        return this.treeModel.virtualRoot.height;
      } else {
        return 0;
      }
    }
    fireEvent(ce) {
      this.treeModel.fireEvent(ce);
    }
    init() {
      const ce = this.recalcPositions.bind(this);
      ce();
      this._dispose = [...this._dispose, Ki(() => this.treeModel.roots, ce), Ki(() => this.treeModel.expandedNodeIds, ce), Ki(() => this.treeModel.hiddenNodeIds, ce)];
      this.treeModel.subscribe(vl.loadNodeChildren, ce);
    }
    isEnabled() {
      return this.treeModel.options.useVirtualScroll;
    }
    _setYBlocks(ce) {
      this.yBlocks = ce;
    }
    recalcPositions() {
      this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    }
    _getPositionAfter(ce, nt) {
      let sn = nt;
      ce.forEach(Pn => {
        Pn.position = sn;
        sn = this._getPositionAfterNode(Pn, sn);
      });
      return sn;
    }
    _getPositionAfterNode(ce, nt) {
      let sn = ce.getSelfHeight() + nt;
      if (ce.children && ce.isExpanded) {
        sn = this._getPositionAfter(ce.visibleChildren, sn);
      }
      ce.height = sn - nt;
      return sn;
    }
    clear() {
      this._dispose.forEach(ce => ce());
    }
    setViewport(ce) {
      Object.assign(this, {
        viewport: ce,
        x: ce.scrollLeft,
        yBlocks: Math.round(ce.scrollTop / 150),
        viewportHeight: ce.getBoundingClientRect ? ce.getBoundingClientRect().height : 0
      });
    }
    scrollIntoView(ce, nt, sn = true) {
      if (ce.options.scrollContainer) {
        const Pn = ce.options.scrollContainer;
        const Ei = Pn.getBoundingClientRect().height;
        const Hi = Pn.getBoundingClientRect().top;
        const xs = this.viewport.getBoundingClientRect().top + ce.position - Hi;
        if (nt || xs < Pn.scrollTop || xs + ce.getSelfHeight() > Pn.scrollTop + Ei) {
          Pn.scrollTop = sn ? xs - Ei / 2 : xs;
        }
      } else if ((nt || ce.position < this.y || ce.position + ce.getSelfHeight() > this.y + this.viewportHeight) && this.viewport) {
        this.viewport.scrollTop = sn ? ce.position - this.viewportHeight / 2 : ce.position;
        this._setYBlocks(Math.floor(this.viewport.scrollTop / 150));
      }
    }
    getViewportNodes(ce) {
      if (!ce) {
        return [];
      }
      const nt = ce.filter(xs => !xs.isHidden);
      if (!this.isEnabled()) {
        return nt;
      }
      if (!this.viewportHeight || !nt.length) {
        return [];
      }
      const sn = nt.slice(-1)[0];
      if (!sn.height && sn.position === 0) {
        return [];
      }
      const Pn = Bc(nt, xs => xs.position + 500 > this.y || xs.position + xs.height > this.y);
      const Ei = Bc(nt, xs => xs.position - 500 > this.y + this.viewportHeight, Pn);
      const Hi = [];
      for (let xs = Pn; xs <= Ei; xs++) {
        Hi.push(nt[xs]);
      }
      return Hi;
    }
    fixScroll() {
      const ce = Math.max(0, this.totalHeight - this.viewportHeight);
      if (this.y < 0) {
        this._setYBlocks(0);
      }
      if (this.y > ce) {
        this._setYBlocks(ce / 150);
      }
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)(i.LFG(Ta));
  };
  oe.ɵprov = i.Yz7({
    token: oe,
    factory: oe.ɵfac
  });
  return oe;
})();
function Bc(oe, we, ce = 0) {
  let nt = ce;
  let sn = oe.length - 1;
  for (; nt !== sn;) {
    let Pn = Math.floor((nt + sn) / 2);
    if (we(oe[Pn])) {
      sn = Pn;
    } else {
      nt = nt === Pn ? sn : Pn;
    }
  }
  return nt;
}
Qa([Zi, Il("design:type", Object)], pl.prototype, "yBlocks", undefined);
Qa([Zi, Il("design:type", Object)], pl.prototype, "x", undefined);
Qa([Zi, Il("design:type", Object)], pl.prototype, "viewportHeight", undefined);
Qa([Ar, Il("design:type", Object), Il("design:paramtypes", [])], pl.prototype, "y", null);
Qa([Ar, Il("design:type", Object), Il("design:paramtypes", [])], pl.prototype, "totalHeight", null);
Qa([_r, Il("design:type", Function), Il("design:paramtypes", [Object]), Il("design:returntype", undefined)], pl.prototype, "_setYBlocks", null);
Qa([_r, Il("design:type", Function), Il("design:paramtypes", []), Il("design:returntype", undefined)], pl.prototype, "recalcPositions", null);
Qa([_r, Il("design:type", Function), Il("design:paramtypes", [Object]), Il("design:returntype", undefined)], pl.prototype, "setViewport", null);
Qa([_r, Il("design:type", Function), Il("design:paramtypes", [Object, Object, Object]), Il("design:returntype", undefined)], pl.prototype, "scrollIntoView", null);
let Hd = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-loading-component"]],
    inputs: {
      template: "template",
      node: "node"
    },
    decls: 2,
    vars: 5,
    consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, gd, 2, 0, "span", 0);
        i.GkF(1, 1);
      }
      if (ce & 2) {
        i.Q6J("ngIf", !nt.template);
        i.xp6(1);
        i.Q6J("ngTemplateOutlet", nt.template)("ngTemplateOutletContext", i.VKq(3, Vl, nt.node));
      }
    },
    dependencies: [t.O5, t.tP],
    encapsulation: 2
  });
  return oe;
})();
let ru = (() => {
  class oe {
    constructor(ce, nt) {
      this.elementRef = ce;
      this.virtualScroll = nt;
      this.setViewport = this.throttle(() => {
        this.virtualScroll.setViewport(this.elementRef.nativeElement);
      }, 17);
      this.scrollEventHandler = this.setViewport.bind(this);
    }
    ngOnInit() {
      this.virtualScroll.init();
    }
    ngAfterViewInit() {
      setTimeout(() => {
        this.setViewport();
        this.virtualScroll.fireEvent({
          eventName: vl.initialized
        });
      });
      this.elementRef.nativeElement.addEventListener("scroll", this.scrollEventHandler);
    }
    ngOnDestroy() {
      this.virtualScroll.clear();
      this.elementRef.nativeElement.removeEventListener("scroll", this.scrollEventHandler);
    }
    getTotalHeight() {
      return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + "px" || "auto";
    }
    throttle(ce, nt) {
      let sn = 0;
      return function () {
        let Pn = Date.now();
        if (Pn - sn >= nt) {
          ce();
          sn = Pn;
        }
      };
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)(i.Y36(i.SBq), i.Y36(pl));
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-viewport"]],
    features: [i._Bn([pl])],
    ngContentSelectors: ic,
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.F$t();
        i.YNc(0, kl, 3, 2, "ng-container", 0);
      }
      if (ce & 2) {
        i.Q6J("treeMobxAutorun", i.DdM(1, Gi));
      }
    },
    dependencies: [uc],
    encapsulation: 2
  });
  return oe;
})();
export let qr = (() => {
  class oe {
    constructor(ce, nt) {
      this.treeModel = ce;
      this.treeDraggedElement = nt;
      ce.eventNames.forEach(sn => this[sn] = new i.vpe());
      ce.subscribeToState(sn => this.stateChange.emit(sn));
    }
    set nodes(ce) {}
    set options(ce) {}
    set focused(ce) {
      this.treeModel.setFocus(ce);
    }
    set state(ce) {
      this.treeModel.setState(ce);
    }
    onKeydown(ce) {
      if (!this.treeModel.isFocused || ["input", "textarea"].includes(document.activeElement.tagName.toLowerCase())) {
        return;
      }
      const nt = this.treeModel.getFocusedNode();
      this.treeModel.performKeyAction(nt, ce);
    }
    onMousedown(ce) {
      if (function nt(sn, Pn) {
        return !sn || sn.localName !== Pn && nt(sn.parentElement, Pn);
      }(ce.target, "tree-root")) {
        this.treeModel.setFocus(false);
      }
    }
    ngOnChanges(ce) {
      if (ce.options || ce.nodes) {
        this.treeModel.setData({
          options: ce.options && ce.options.currentValue,
          nodes: ce.nodes && ce.nodes.currentValue,
          events: this.pick(this, this.treeModel.eventNames)
        });
      }
    }
    sizeChanged() {
      this.viewportComponent.setViewport();
    }
    pick(ce, nt) {
      return nt.reduce((sn, Pn) => {
        if (ce && ce.hasOwnProperty(Pn)) {
          sn[Pn] = ce[Pn];
        }
        return sn;
      }, {});
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)(i.Y36(Ta), i.Y36(Dl));
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["Tree"], ["tree-root"]],
    contentQueries: function (ce, nt, sn) {
      if (ce & 1) {
        i.Suo(sn, tl, 5);
        i.Suo(sn, gr, 5);
        i.Suo(sn, ro, 5);
        i.Suo(sn, Vu, 5);
      }
      if (ce & 2) {
        let Pn;
        if (i.iGM(Pn = i.CRH())) {
          nt.loadingTemplate = Pn.first;
        }
        if (i.iGM(Pn = i.CRH())) {
          nt.treeNodeTemplate = Pn.first;
        }
        if (i.iGM(Pn = i.CRH())) {
          nt.treeNodeWrapperTemplate = Pn.first;
        }
        if (i.iGM(Pn = i.CRH())) {
          nt.treeNodeFullTemplate = Pn.first;
        }
      }
    },
    viewQuery: function (ce, nt) {
      if (ce & 1) {
        i.Gf(Zl, 5);
      }
      if (ce & 2) {
        let sn;
        if (i.iGM(sn = i.CRH())) {
          nt.viewportComponent = sn.first;
        }
      }
    },
    hostBindings: function (ce, nt) {
      if (ce & 1) {
        i.NdJ("keydown", function (Pn) {
          return nt.onKeydown(Pn);
        }, false, i.pYS)("mousedown", function (Pn) {
          return nt.onMousedown(Pn);
        }, false, i.pYS);
      }
    },
    inputs: {
      nodes: "nodes",
      options: "options",
      focused: "focused",
      state: "state"
    },
    outputs: {
      toggleExpanded: "toggleExpanded",
      activate: "activate",
      deactivate: "deactivate",
      nodeActivate: "nodeActivate",
      nodeDeactivate: "nodeDeactivate",
      select: "select",
      deselect: "deselect",
      focus: "focus",
      blur: "blur",
      updateData: "updateData",
      initialized: "initialized",
      moveNode: "moveNode",
      copyNode: "copyNode",
      loadNodeChildren: "loadNodeChildren",
      changeFilter: "changeFilter",
      event: "event",
      stateChange: "stateChange"
    },
    features: [i._Bn([Ta]), i.TTD],
    decls: 5,
    vars: 6,
    consts: [["viewport", ""], [1, "angular-tree-component"], [3, "nodes", "treeModel", "templates", 4, "ngIf"], ["class", "empty-tree-drop-slot", 3, "dropIndex", "node", 4, "ngIf"], [3, "nodes", "treeModel", "templates"], [1, "empty-tree-drop-slot", 3, "dropIndex", "node"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.TgZ(0, "tree-viewport", null, 0)(2, "div", 1);
        i.YNc(3, Nc, 1, 8, "tree-node-collection", 2);
        i.YNc(4, Da, 1, 2, "tree-node-drop-slot", 3);
        i.qZA()();
      }
      if (ce & 2) {
        i.xp6(2);
        i.ekj("node-dragging", nt.treeDraggedElement.isDragging())("angular-tree-component-rtl", nt.treeModel.options.rtl);
        i.xp6(1);
        i.Q6J("ngIf", nt.treeModel.roots);
        i.xp6(1);
        i.Q6J("ngIf", nt.treeModel.isEmptyTree());
      }
    },
    dependencies: function () {
      return [t.O5, su, Yr, ru];
    },
    encapsulation: 2
  });
  return oe;
})();
let ll = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["TreeNode"], ["tree-node"]],
    inputs: {
      node: "node",
      index: "index",
      templates: "templates"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], [3, "class", "tree-node", "tree-node-expanded", "tree-node-collapsed", "tree-node-leaf", "tree-node-active", "tree-node-focused", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "dropIndex", "node", 4, "ngIf"], [3, "node", "index", "templates"], [3, "node", "templates"], [3, "dropIndex", "node"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, jo, 3, 8, "ng-container", 0);
      }
      if (ce & 2) {
        i.Q6J("treeMobxAutorun", i.DdM(1, Gi));
      }
    },
    dependencies: function () {
      return [t.O5, t.tP, je, su, Bs, uc];
    },
    encapsulation: 2
  });
  return oe;
})();
let Wc = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-node-content"]],
    inputs: {
      node: "node",
      index: "index",
      template: "template"
    },
    decls: 2,
    vars: 7,
    consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, nd, 2, 1, "span", 0);
        i.GkF(1, 1);
      }
      if (ce & 2) {
        i.Q6J("ngIf", !nt.template);
        i.xp6(1);
        i.Q6J("ngTemplateOutlet", nt.template)("ngTemplateOutletContext", i.kEZ(3, bl, nt.node, nt.node, nt.index));
      }
    },
    dependencies: [t.O5, t.tP],
    encapsulation: 2
  });
  return oe;
})();
let su = (() => {
  class oe {
    onDrop(ce) {
      this.node.mouseAction("drop", ce.event, {
        from: ce.element,
        to: {
          parent: this.node,
          index: this.dropIndex
        }
      });
    }
    allowDrop(ce, nt) {
      return this.node.options.allowDrop(ce, {
        parent: this.node,
        index: this.dropIndex
      }, nt);
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["TreeNodeDropSlot"], ["tree-node-drop-slot"]],
    inputs: {
      node: "node",
      dropIndex: "dropIndex"
    },
    decls: 1,
    vars: 2,
    consts: [[1, "node-drop-slot", 3, "treeAllowDrop", "allowDragoverStyling", "treeDrop"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.TgZ(0, "div", 0);
        i.NdJ("treeDrop", function (Pn) {
          return nt.onDrop(Pn);
        });
        i.qZA();
      }
      if (ce & 2) {
        i.Q6J("treeAllowDrop", nt.allowDrop.bind(nt))("allowDragoverStyling", true);
      }
    },
    dependencies: function () {
      return [jt];
    },
    encapsulation: 2
  });
  return oe;
})();
let Dc = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-node-expander"]],
    inputs: {
      node: "node"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], ["class", "toggle-children-wrapper", 3, "toggle-children-wrapper-expanded", "toggle-children-wrapper-collapsed", "click", 4, "ngIf"], ["class", "toggle-children-placeholder", 4, "ngIf"], [1, "toggle-children-wrapper", 3, "click"], [1, "toggle-children"], [1, "toggle-children-placeholder"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, Eo, 3, 2, "ng-container", 0);
      }
      if (ce & 2) {
        i.Q6J("treeMobxAutorun", i.DdM(1, Gi));
      }
    },
    dependencies: [t.O5, uc],
    encapsulation: 2
  });
  return oe;
})();
let je = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-node-children"]],
    inputs: {
      node: "node",
      templates: "templates"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], [3, "tree-children", "tree-children-no-padding", 4, "treeAnimateOpen", "treeAnimateOpenSpeed", "treeAnimateOpenAcceleration", "treeAnimateOpenEnabled"], [3, "nodes", "templates", "treeModel", 4, "ngIf"], ["class", "tree-node-loading", 3, "padding-left", "template", "node", 4, "ngIf"], [3, "nodes", "templates", "treeModel"], [1, "tree-node-loading", 3, "template", "node"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, mc, 2, 4, "ng-container", 0);
      }
      if (ce & 2) {
        i.Q6J("treeMobxAutorun", i.DdM(1, Gi));
      }
    },
    dependencies: function () {
      return [t.O5, Hd, Yr, wr, uc];
    },
    encapsulation: 2
  });
  return oe;
})();
const ye = Object.assign(function Ie(...oe) {
  return _r(...oe);
}, _r);
const kt = Object.assign(function gt(...oe) {
  return Ar(...oe);
}, Ar);
const Nn = Object.assign(function fn(...oe) {
  return Zi(...oe);
}, Zi);
function Tn(oe, we, ce, nt) {
  var Ei;
  var sn = arguments.length;
  var Pn = sn < 3 ? we : nt === null ? nt = Object.getOwnPropertyDescriptor(we, ce) : nt;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    Pn = Reflect.decorate(oe, we, ce, nt);
  } else {
    for (var Hi = oe.length - 1; Hi >= 0; Hi--) {
      if (Ei = oe[Hi]) {
        Pn = (sn < 3 ? Ei(Pn) : sn > 3 ? Ei(we, ce, Pn) : Ei(we, ce)) || Pn;
      }
    }
  }
  if (sn > 3 && Pn) {
    Object.defineProperty(we, ce, Pn);
  }
  return Pn;
}
function Ri(oe, we) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
    return Reflect.metadata(oe, we);
  }
}
let Yr = (() => {
  class oe {
    constructor() {
      this._dispose = [];
    }
    get nodes() {
      return this._nodes;
    }
    set nodes(ce) {
      this.setNodes(ce);
    }
    get marginTop() {
      const ce = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
      return (ce && ce.parent ? ce.position - ce.parent.position - ce.parent.getSelfHeight() : 0) + "px";
    }
    setNodes(ce) {
      this._nodes = ce;
    }
    ngOnInit() {
      this.virtualScroll = this.treeModel.virtualScroll;
      this._dispose = [Ki(() => this.virtualScroll.getViewportNodes(this.nodes).map(ce => ce.index), ce => {
        this.viewportNodes = ce.map(nt => this.nodes[nt]);
      }, {
        compareStructural: true,
        fireImmediately: true
      }), Ki(() => this.nodes, ce => {
        this.viewportNodes = this.virtualScroll.getViewportNodes(ce);
      })];
    }
    ngOnDestroy() {
      this._dispose.forEach(ce => ce());
    }
    trackNode(ce, nt) {
      return nt.id;
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-node-collection"]],
    inputs: {
      nodes: "nodes",
      treeModel: "treeModel",
      templates: "templates"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], [3, "node", "index", "templates", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "index", "templates"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, Ii, 3, 4, "ng-container", 0);
      }
      if (ce & 2) {
        i.Q6J("treeMobxAutorun", i.DdM(1, Gi));
      }
    },
    dependencies: [t.sg, ll, uc],
    encapsulation: 2
  });
  return oe;
})();
Tn([Nn, Ri("design:type", Object)], Yr.prototype, "_nodes", undefined);
Tn([Nn, Ri("design:type", Array)], Yr.prototype, "viewportNodes", undefined);
Tn([kt, Ri("design:type", String), Ri("design:paramtypes", [])], Yr.prototype, "marginTop", null);
Tn([ye, Ri("design:type", Function), Ri("design:paramtypes", [Object]), Ri("design:returntype", undefined)], Yr.prototype, "setNodes", null);
let Bs = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-node-wrapper"]],
    inputs: {
      node: "node",
      index: "index",
      templates: "templates"
    },
    decls: 2,
    vars: 8,
    consts: [["class", "node-wrapper", 3, "padding-left", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "node-wrapper"], [3, "node", 4, "ngIf"], [3, "node"], [1, "node-content-wrapper", 3, "treeAllowDrop", "allowDragoverStyling", "treeDrag", "treeDragEnabled", "click", "dblclick", "mouseover", "mouseout", "contextmenu", "treeDrop", "treeDropDragOver", "treeDropDragLeave", "treeDropDragEnter"], [3, "node", "index", "template"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, cc, 5, 15, "div", 0);
        i.GkF(1, 1);
      }
      if (ce & 2) {
        i.Q6J("ngIf", !nt.templates.treeNodeWrapperTemplate);
        i.xp6(1);
        i.Q6J("ngTemplateOutlet", nt.templates.treeNodeWrapperTemplate)("ngTemplateOutletContext", i.l5B(3, mu, nt.node, nt.node, nt.index, nt.templates));
      }
    },
    dependencies: function () {
      return [t.O5, t.tP, Wc, jt, ri, Dc, Nt];
    },
    encapsulation: 2
  });
  return oe;
})();
let Nt = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵcmp = i.Xpm({
    type: oe,
    selectors: [["tree-node-checkbox"]],
    inputs: {
      node: "node"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], ["type", "checkbox", 1, "tree-node-checkbox", 3, "checked", "indeterminate", "click"]],
    template: function (ce, nt) {
      if (ce & 1) {
        i.YNc(0, ir, 2, 2, "ng-container", 0);
      }
      if (ce & 2) {
        i.Q6J("treeMobxAutorun", i.DdM(1, Gi));
      }
    },
    dependencies: [uc],
    encapsulation: 2
  });
  return oe;
})();
const Ke = "is-dragging-over";
const We = "is-dragging-over-disabled";
let jt = (() => {
  class oe {
    constructor(ce, nt, sn, Pn) {
      this.el = ce;
      this.renderer = nt;
      this.treeDraggedElement = sn;
      this.ngZone = Pn;
      this.allowDragoverStyling = true;
      this.onDropCallback = new i.vpe();
      this.onDragOverCallback = new i.vpe();
      this.onDragLeaveCallback = new i.vpe();
      this.onDragEnterCallback = new i.vpe();
      this._allowDrop = (Ei, Hi) => true;
      this.dragOverEventHandler = this.onDragOver.bind(this);
      this.dragEnterEventHandler = this.onDragEnter.bind(this);
      this.dragLeaveEventHandler = this.onDragLeave.bind(this);
    }
    set treeAllowDrop(ce) {
      this._allowDrop = ce instanceof Function ? ce : (nt, sn) => ce;
    }
    allowDrop(ce) {
      return this._allowDrop(this.treeDraggedElement.get(), ce);
    }
    ngAfterViewInit() {
      let ce = this.el.nativeElement;
      this.ngZone.runOutsideAngular(() => {
        ce.addEventListener("dragover", this.dragOverEventHandler);
        ce.addEventListener("dragenter", this.dragEnterEventHandler);
        ce.addEventListener("dragleave", this.dragLeaveEventHandler);
      });
    }
    ngOnDestroy() {
      let ce = this.el.nativeElement;
      ce.removeEventListener("dragover", this.dragOverEventHandler);
      ce.removeEventListener("dragenter", this.dragEnterEventHandler);
      ce.removeEventListener("dragleave", this.dragLeaveEventHandler);
    }
    onDragOver(ce) {
      if (!this.allowDrop(ce)) {
        if (this.allowDragoverStyling) {
          return this.addDisabledClass();
        } else {
          return undefined;
        }
      }
      this.onDragOverCallback.emit({
        event: ce,
        element: this.treeDraggedElement.get()
      });
      ce.preventDefault();
      if (this.allowDragoverStyling) {
        this.addClass();
      }
    }
    onDragEnter(ce) {
      if (!!this.allowDrop(ce)) {
        ce.preventDefault();
        this.onDragEnterCallback.emit({
          event: ce,
          element: this.treeDraggedElement.get()
        });
      }
    }
    onDragLeave(ce) {
      if (!this.allowDrop(ce)) {
        if (this.allowDragoverStyling) {
          return this.removeDisabledClass();
        } else {
          return undefined;
        }
      }
      this.onDragLeaveCallback.emit({
        event: ce,
        element: this.treeDraggedElement.get()
      });
      if (this.allowDragoverStyling) {
        this.removeClass();
      }
    }
    onDrop(ce) {
      if (!!this.allowDrop(ce)) {
        ce.preventDefault();
        this.onDropCallback.emit({
          event: ce,
          element: this.treeDraggedElement.get()
        });
        if (this.allowDragoverStyling) {
          this.removeClass();
        }
        this.treeDraggedElement.set(null);
      }
    }
    addClass() {
      this.renderer.addClass(this.el.nativeElement, Ke);
    }
    removeClass() {
      this.renderer.removeClass(this.el.nativeElement, Ke);
    }
    addDisabledClass() {
      this.renderer.addClass(this.el.nativeElement, We);
    }
    removeDisabledClass() {
      this.renderer.removeClass(this.el.nativeElement, We);
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)(i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(Dl), i.Y36(i.R0b));
  };
  oe.ɵdir = i.lG2({
    type: oe,
    selectors: [["", "treeDrop", ""]],
    hostBindings: function (ce, nt) {
      if (ce & 1) {
        i.NdJ("drop", function (Pn) {
          return nt.onDrop(Pn);
        });
      }
    },
    inputs: {
      allowDragoverStyling: "allowDragoverStyling",
      treeAllowDrop: "treeAllowDrop"
    },
    outputs: {
      onDropCallback: "treeDrop",
      onDragOverCallback: "treeDropDragOver",
      onDragLeaveCallback: "treeDropDragLeave",
      onDragEnterCallback: "treeDropDragEnter"
    }
  });
  return oe;
})();
let ri = (() => {
  class oe {
    constructor(ce, nt, sn, Pn) {
      this.el = ce;
      this.renderer = nt;
      this.treeDraggedElement = sn;
      this.ngZone = Pn;
      this.dragEventHandler = this.onDrag.bind(this);
    }
    ngAfterViewInit() {
      let ce = this.el.nativeElement;
      this.ngZone.runOutsideAngular(() => {
        ce.addEventListener("drag", this.dragEventHandler);
      });
    }
    ngDoCheck() {
      this.renderer.setAttribute(this.el.nativeElement, "draggable", this.treeDragEnabled ? "true" : "false");
    }
    ngOnDestroy() {
      this.el.nativeElement.removeEventListener("drag", this.dragEventHandler);
    }
    onDragStart(ce) {
      ce.dataTransfer.setData("text", ce.target.id);
      this.treeDraggedElement.set(this.draggedElement);
      if (this.draggedElement.mouseAction) {
        this.draggedElement.mouseAction("dragStart", ce);
      }
    }
    onDrag(ce) {
      if (this.draggedElement.mouseAction) {
        this.draggedElement.mouseAction("drag", ce);
      }
    }
    onDragEnd() {
      if (this.draggedElement.mouseAction) {
        this.draggedElement.mouseAction("dragEnd");
      }
      this.treeDraggedElement.set(null);
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)(i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(Dl), i.Y36(i.R0b));
  };
  oe.ɵdir = i.lG2({
    type: oe,
    selectors: [["", "treeDrag", ""]],
    hostBindings: function (ce, nt) {
      if (ce & 1) {
        i.NdJ("dragstart", function (Pn) {
          return nt.onDragStart(Pn);
        })("dragend", function () {
          return nt.onDragEnd();
        });
      }
    },
    inputs: {
      draggedElement: ["treeDrag", "draggedElement"],
      treeDragEnabled: "treeDragEnabled"
    }
  });
  return oe;
})();
let wr = (() => {
  class oe {
    constructor(ce, nt, sn) {
      this.renderer = ce;
      this.templateRef = nt;
      this.viewContainerRef = sn;
    }
    set isOpen(ce) {
      if (ce) {
        this._show();
        if (this.isEnabled && this._isOpen === false) {
          this._animateOpen();
        }
      } else if (this.isEnabled) {
        this._animateClose();
      } else {
        this._hide();
      }
      this._isOpen = !!ce;
    }
    _show() {
      this.innerElement ||= this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    }
    _hide() {
      this.viewContainerRef.clear();
      this.innerElement = null;
    }
    _animateOpen() {
      let ce = this.animateSpeed;
      let nt = this.animateAcceleration;
      let sn = 0;
      this.renderer.setStyle(this.innerElement, "max-height", "0");
      setTimeout(() => {
        const Pn = setInterval(() => {
          if (!this._isOpen || !this.innerElement) {
            return clearInterval(Pn);
          }
          sn += ce;
          const Ei = Math.round(sn);
          this.renderer.setStyle(this.innerElement, "max-height", `${Ei}px`);
          const Hi = this.innerElement.getBoundingClientRect ? this.innerElement.getBoundingClientRect().height : 0;
          ce *= nt;
          nt *= 1.005;
          if (Hi < Ei) {
            this.renderer.setStyle(this.innerElement, "max-height", null);
            clearInterval(Pn);
          }
        }, 17);
      });
    }
    _animateClose() {
      if (!this.innerElement) {
        return;
      }
      let ce = this.animateSpeed;
      let nt = this.animateAcceleration;
      let sn = this.innerElement.getBoundingClientRect().height;
      const Pn = setInterval(() => {
        if (this._isOpen || !this.innerElement) {
          return clearInterval(Pn);
        }
        sn -= ce;
        this.renderer.setStyle(this.innerElement, "max-height", `${sn}px`);
        ce *= nt;
        nt *= 1.005;
        if (sn <= 0) {
          this.viewContainerRef.clear();
          this.innerElement = null;
          clearInterval(Pn);
        }
      }, 17);
    }
  }
  oe.ɵfac = function (ce) {
    return new (ce || oe)(i.Y36(i.Qsj), i.Y36(i.Rgc), i.Y36(i.s_b));
  };
  oe.ɵdir = i.lG2({
    type: oe,
    selectors: [["", "treeAnimateOpen", ""]],
    inputs: {
      isOpen: ["treeAnimateOpen", "isOpen"],
      animateSpeed: ["treeAnimateOpenSpeed", "animateSpeed"],
      animateAcceleration: ["treeAnimateOpenAcceleration", "animateAcceleration"],
      isEnabled: ["treeAnimateOpenEnabled", "isEnabled"]
    }
  });
  return oe;
})();
export let xc = (() => {
  class oe {}
  oe.ɵfac = function (ce) {
    return new (ce || oe)();
  };
  oe.ɵmod = i.oAB({
    type: oe
  });
  oe.ɵinj = i.cJS({
    imports: [t.ez]
  });
  return oe;
})();