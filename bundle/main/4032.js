import * as i from "82109";
import * as t from "17854";
import * as b from "46916";
import * as M from "31913";
import * as v from "19781";
import * as C from "36293";
import * as S from "92597";
import * as I from "19670";
import * as E from "45656";
import * as O from "34948";
import * as U from "79114";
import * as B from "70030";
import * as F from "81956";
import * as X from "1156";
import * as fe from "31236";
import * as q from "3070";
import * as G from "55296";
import * as se from "98052";
import * as Pe from "72309";
import * as he from "3501";
import * as pe from "69711";
import * as st from "29909";
var rt = require("42092").forEach;
var Oe = Le("hidden");
var Ee = "Symbol";
var ke = "prototype";
var Be = st.set;
var De = st.getterFor(Ee);
var Qe = Object[ke];
var It = t.Symbol;
var Yt = It && It[ke];
var Dn = t.TypeError;
var Et = t.QObject;
var lt = fe.f;
var et = q.f;
var St = X.f;
var ve = G.f;
var Lt = k([].push);
var ft = Pe("symbols");
var qe = Pe("op-symbols");
var Me = Pe("wks");
var ne = !Et || !Et[ke] || !Et[ke].findChild;
var me = v && w(function () {
  return B(et({}, "a", {
    get: function () {
      return et(this, "a", {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (Kt, on, Rn) {
  var In = lt(Qe, on);
  if (In) {
    delete Qe[on];
  }
  et(Kt, on, Rn);
  if (In && Kt !== Qe) {
    et(Qe, on, In);
  }
} : et;
function it(Kt, on) {
  var Rn = ft[Kt] = B(Yt);
  Be(Rn, {
    type: Ee,
    tag: Kt,
    description: on
  });
  if (!v) {
    Rn.description = on;
  }
  return Rn;
}
function bt(on, Rn, In) {
  if (on === Qe) {
    bt(qe, Rn, In);
  }
  I(on);
  var di = O(Rn);
  I(In);
  if (S(ft, di)) {
    if (In.enumerable) {
      if (S(on, Oe) && on[Oe][di]) {
        on[Oe][di] = false;
      }
      In = B(In, {
        enumerable: U(0, false)
      });
    } else {
      if (!S(on, Oe)) {
        et(on, Oe, U(1, {}));
      }
      on[Oe][di] = true;
    }
    return me(on, di, In);
  } else {
    return et(on, di, In);
  }
}
function Ut(on, Rn) {
  I(on);
  var In = E(Rn);
  var di = F(In).concat(hn(In));
  rt(di, function (Si) {
    if (!v || b(pt, In, Si)) {
      bt(on, Si, In[Si]);
    }
  });
  return on;
}
function pt(on) {
  var Rn = O(on);
  var In = b(ve, this, Rn);
  return (this !== Qe || !S(ft, Rn) || !!S(qe, Rn)) && (!In && !!S(this, Rn) && !!S(ft, Rn) && (!S(this, Oe) || !this[Oe][Rn]) || In);
}
function yt(on, Rn) {
  var In = E(on);
  var di = O(Rn);
  if (In !== Qe || !S(ft, di) || S(qe, di)) {
    var Si = lt(In, di);
    if (Si && S(ft, di) && (!S(In, Oe) || !In[Oe][di])) {
      Si.enumerable = true;
    }
    return Si;
  }
}
function Wt(on) {
  var Rn = St(E(on));
  var In = [];
  rt(Rn, function (di) {
    if (!S(ft, di) && !S(he, di)) {
      Lt(In, di);
    }
  });
  return In;
}
function hn(Kt) {
  var on = Kt === Qe;
  var Rn = St(on ? qe : E(Kt));
  var In = [];
  rt(Rn, function (di) {
    if (S(ft, di) && (!on || S(Qe, di))) {
      Lt(In, ft[di]);
    }
  });
  return In;
}
if (!C) {
  se(Yt = (It = function () {
    if (L(Yt, this)) {
      throw Dn("Symbol is not a constructor");
    }
    var on = arguments.length && arguments[0] !== undefined ? x(arguments[0]) : undefined;
    var Rn = pe(on);
    function In(di) {
      if (this === Qe) {
        b(In, qe, di);
      }
      if (S(this, Oe) && S(this[Oe], Rn)) {
        this[Oe][Rn] = false;
      }
      me(this, Rn, U(1, di));
    }
    if (v && ne) {
      me(Qe, Rn, {
        configurable: true,
        set: In
      });
    }
    return it(Rn, on);
  })[ke], "toString", function () {
    return De(this).tag;
  });
  se(It, "withoutSetter", function (Kt) {
    return it(pe(Kt), Kt);
  });
  G.f = pt;
  q.f = bt;
  j.f = Ut;
  fe.f = yt;
  Z.f = X.f = Wt;
  le.f = hn;
  Re.f = function (Kt) {
    return it(re(Kt), Kt);
  };
  if (v) {
    W(Yt, "description", {
      configurable: true,
      get: function () {
        return De(this).description;
      }
    });
    if (!M) {
      se(Qe, "propertyIsEnumerable", pt, {
        unsafe: true
      });
    }
  }
}
i({
  global: true,
  constructor: true,
  wrap: true,
  forced: !C,
  sham: !C
}, {
  Symbol: It
});
rt(F(Me), function (Kt) {
  Ge(Kt);
});
i({
  target: Ee,
  stat: true,
  forced: !C
}, {
  useSetter: function () {
    ne = true;
  },
  useSimple: function () {
    ne = false;
  }
});
i({
  target: "Object",
  stat: true,
  forced: !C,
  sham: !v
}, {
  create: function (on, Rn) {
    if (Rn === undefined) {
      return B(on);
    } else {
      return Ut(B(on), Rn);
    }
  },
  defineProperty: bt,
  defineProperties: Ut,
  getOwnPropertyDescriptor: yt
});
i({
  target: "Object",
  stat: true,
  forced: !C
}, {
  getOwnPropertyNames: Wt
});
Ue();
ot(It, Ee);
he[Oe] = true;