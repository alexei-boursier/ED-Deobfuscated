function i(Le, he) {
  return (i = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (pe, re) {
    pe.__proto__ = re;
  } || function (pe, re) {
    for (var Re in re) {
      if (Object.prototype.hasOwnProperty.call(re, Re)) {
        pe[Re] = re[Re];
      }
    }
  })(Le, he);
}
export function ZT(Le, he) {
  if (typeof he != "function" && he !== null) {
    throw new TypeError("Class extends value " + String(he) + " is not a constructor or null");
  }
  function pe() {
    this.constructor = Le;
  }
  i(Le, he);
  Le.prototype = he === null ? Object.create(he) : (pe.prototype = he.prototype, new pe());
}
export function pi() {
  pi = Object.assign || function (he) {
    for (var pe, re = 1, Re = arguments.length; re < Re; re++) {
      for (var Ge in pe = arguments[re]) {
        if (Object.prototype.hasOwnProperty.call(pe, Ge)) {
          he[Ge] = pe[Ge];
        }
      }
    }
    return he;
  };
  return pi.apply(this, arguments);
}
export function gn(Le, he, pe, re) {
  var Ue;
  var Re = arguments.length;
  var Ge = Re < 3 ? he : re === null ? re = Object.getOwnPropertyDescriptor(he, pe) : re;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    Ge = Reflect.decorate(Le, he, pe, re);
  } else {
    for (var ot = Le.length - 1; ot >= 0; ot--) {
      if (Ue = Le[ot]) {
        Ge = (Re < 3 ? Ue(Ge) : Re > 3 ? Ue(he, pe, Ge) : Ue(he, pe)) || Ge;
      }
    }
  }
  if (Re > 3 && Ge) {
    Object.defineProperty(he, pe, Ge);
  }
  return Ge;
}
export function fM(Le, he) {
  return function (pe, re) {
    he(pe, re, Le);
  };
}
export function w6(Le, he) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
    return Reflect.metadata(Le, he);
  }
}
export function mG(Le, he, pe, re) {
  return new (pe ||= Promise)(function (Ge, Ue) {
    function ot(Oe) {
      try {
        rt(re.next(Oe));
      } catch (Ee) {
        Ue(Ee);
      }
    }
    function st(Oe) {
      try {
        rt(re.throw(Oe));
      } catch (Ee) {
        Ue(Ee);
      }
    }
    function rt(Oe) {
      if (Oe.done) {
        Ge(Oe.value);
      } else {
        (function Re(Ge) {
          if (Ge instanceof pe) {
            return Ge;
          } else {
            return new pe(function (Ue) {
              Ue(Ge);
            });
          }
        })(Oe.value).then(ot, st);
      }
    }
    rt((re = re.apply(Le, he || [])).next());
  });
}
export function qq(Le) {
  if (this instanceof qq) {
    this.v = Le;
    return this;
  } else {
    return new qq(Le);
  }
}
export function FC(Le, he, pe) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var Re;
  var re = pe.apply(Le, he || []);
  var Ge = [];
  Re = {};
  Ue("next");
  Ue("throw");
  Ue("return");
  Re[Symbol.asyncIterator] = function () {
    return this;
  };
  return Re;
  function Ue(ke) {
    if (re[ke]) {
      Re[ke] = function (Be) {
        return new Promise(function (De, Qe) {
          if (Ge.push([ke, Be, De, Qe]) <= 1) {
            ot(ke, Be);
          }
        });
      };
    }
  }
  function ot(ke, Be) {
    try {
      (function st(ke) {
        if (ke.value instanceof qq) {
          Promise.resolve(ke.value.v).then(rt, Oe);
        } else {
          Ee(Ge[0][2], ke);
        }
      })(re[ke](Be));
    } catch (De) {
      Ee(Ge[0][3], De);
    }
  }
  function rt(ke) {
    ot("next", ke);
  }
  function Oe(ke) {
    ot("throw", ke);
  }
  function Ee(ke, Be) {
    ke(Be);
    Ge.shift();
    if (Ge.length) {
      ot(Ge[0][0], Ge[0][1]);
    }
  }
}
export function KL(Le) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var pe;
  var he = Le[Symbol.asyncIterator];
  if (he) {
    return he.call(Le);
  } else {
    Le = function E(Le) {
      var he = typeof Symbol == "function" && Symbol.iterator;
      var pe = he && Le[he];
      var re = 0;
      if (pe) {
        return pe.call(Le);
      }
      if (Le && typeof Le.length == "number") {
        return {
          next: function () {
            if (Le && re >= Le.length) {
              Le = undefined;
            }
            return {
              value: Le && Le[re++],
              done: !Le
            };
          }
        };
      }
      throw new TypeError(he ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }(Le);
    pe = {};
    re("next");
    re("throw");
    re("return");
    pe[Symbol.asyncIterator] = function () {
      return this;
    };
    return pe;
  }
  function re(Ge) {
    pe[Ge] = Le[Ge] && function (Ue) {
      return new Promise(function (ot, st) {
        (function Re(Ge, Ue, ot, st) {
          Promise.resolve(st).then(function (rt) {
            Ge({
              value: rt,
              done: ot
            });
          }, Ue);
        })(ot, st, (Ue = Le[Ge](Ue)).done, Ue.value);
      });
    };
  }
}
export function Q_(Le, he, pe, re) {
  if (pe === "a" && !re) {
    throw new TypeError("Private accessor was defined without a getter");
  }
  if (typeof he == "function" ? Le !== he || !re : !he.has(Le)) {
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  }
  if (pe === "m") {
    return re;
  } else if (pe === "a") {
    return re.call(Le);
  } else if (re) {
    return re.value;
  } else {
    return he.get(Le);
  }
}
export function YH(Le, he, pe, re, Re) {
  if (re === "m") {
    throw new TypeError("Private method is not writable");
  }
  if (re === "a" && !Re) {
    throw new TypeError("Private accessor was defined without a setter");
  }
  if (typeof he == "function" ? Le !== he || !Re : !he.has(Le)) {
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  }
  if (re === "a") {
    Re.call(Le, pe);
  } else if (Re) {
    Re.value = pe;
  } else {
    he.set(Le, pe);
  }
  return pe;
}