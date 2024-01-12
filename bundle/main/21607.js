class t {
  constructor(rt, Oe) {
    this.open = rt;
    this.close = Oe || rt;
  }
  isManual() {
    return this.open === "manual" || this.close === "manual";
  }
}
const b = {
  hover: ["mouseover", "mouseout"],
  focus: ["focusin", "focusout"]
};
export function AL(st, rt = b) {
  const Oe = (st || "").trim();
  if (Oe.length === 0) {
    return [];
  }
  const Ee = Oe.split(/\s+/).map(Be => Be.split(":")).map(Be => {
    const De = rt[Be[0]] || Be;
    return new t(De[0], De[1]);
  });
  const ke = Ee.filter(Be => Be.isManual());
  if (ke.length > 1) {
    throw new Error("Triggers parse error: only one manual trigger is allowed");
  }
  if (ke.length === 1 && Ee.length > 1) {
    throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");
  }
  return Ee;
}
export function wo(st, rt) {
  const Oe = AL(rt.triggers);
  const Ee = rt.target;
  if (Oe.length === 1 && Oe[0].isManual()) {
    return Function.prototype;
  }
  const ke = [];
  const Be = [];
  const De = () => {
    Be.forEach(Qe => ke.push(Qe()));
    Be.length = 0;
  };
  Oe.forEach(Qe => {
    const It = Qe.open === Qe.close;
    const Yt = It ? rt.toggle : rt.show;
    if (!It && Qe.close && rt.hide) {
      const Dn = st.listen(Ee, Qe.close, rt.hide);
      Be.push(() => Dn);
    }
    if (Yt) {
      ke.push(st.listen(Ee, Qe.open, () => Yt(De)));
    }
  });
  return () => {
    ke.forEach(Qe => Qe());
  };
}
export function Rg(st, rt) {
  if (rt.outsideClick) {
    return st.listen("document", "click", Oe => {
      if ((!rt.target || !rt.target.contains(Oe.target)) && (!rt.targets || !rt.targets.some(Ee => Ee.contains(Oe.target)))) {
        if (rt.hide) {
          rt.hide();
        }
      }
    });
  } else {
    return Function.prototype;
  }
}
export function C(st, rt) {
  if (rt.outsideEsc) {
    return st.listen("document", "keyup.esc", Oe => {
      if ((!rt.target || !rt.target.contains(Oe.target)) && (!rt.targets || !rt.targets.some(Ee => Ee.contains(Oe.target)))) {
        if (rt.hide) {
          rt.hide();
        }
      }
    });
  } else {
    return Function.prototype;
  }
}
/**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const S = typeof window !== "undefined" && window || {};
var fe = (() => {
  (st = fe ||= {}).isBs3 = "bs3";
  st.isBs4 = "bs4";
  st.isBs5 = "bs5";
  return fe;
  var st;
})();
let q;
function j() {
  if (typeof S.document === "undefined") {
    return "bs4";
  }
  const st = S.document.createElement("span");
  st.innerText = "testing bs version";
  st.classList.add("d-none");
  st.classList.add("pl-1");
  S.document.head.appendChild(st);
  const rt = st.getBoundingClientRect();
  const Oe = S.getComputedStyle(st).paddingLeft;
  if (!rt || rt && rt.top !== 0) {
    S.document.head.removeChild(st);
    return "bs3";
  } else if (Oe && parseFloat(Oe)) {
    S.document.head.removeChild(st);
    return "bs4";
  } else {
    S.document.head.removeChild(st);
    return "bs5";
  }
}
export function Dc(st) {
  q = st;
}
export function XA() {
  return typeof S === "undefined" || (typeof S.__theme === "undefined" ? (q ||= j(), q === "bs3") : S.__theme === "bs3");
}
function W() {
  return !XA() && (q ||= j(), q === "bs4");
}
export function Wl() {
  return {
    isBs3: XA(),
    isBs4: W(),
    isBs5: !XA() && !W() && (q ||= j(), q === "bs5")
  };
}
export class Su {
  constructor() {
    this.length = 0;
    this.asArray = [];
  }
  get(rt) {
    if (this.length === 0 || rt < 0 || rt >= this.length) {
      return;
    }
    let Ee = this.head;
    for (let Be = 0; Be < rt; Be++) {
      var ke;
      Ee = (ke = Ee) === null || ke === undefined ? undefined : ke.next;
    }
    return Ee?.value;
  }
  add(rt, Oe = this.length) {
    if (Oe < 0 || Oe > this.length) {
      throw new Error("Position is out of the list");
    }
    const Ee = {
      value: rt,
      next: undefined,
      previous: undefined
    };
    if (this.length === 0) {
      this.head = Ee;
      this.tail = Ee;
      this.current = Ee;
    } else if (Oe === 0 && this.head) {
      Ee.next = this.head;
      this.head.previous = Ee;
      this.head = Ee;
    } else if (Oe === this.length && this.tail) {
      this.tail.next = Ee;
      Ee.previous = this.tail;
      this.tail = Ee;
    } else {
      const ke = this.getNode(Oe - 1);
      const Be = ke?.next;
      if (ke && Be) {
        ke.next = Ee;
        Be.previous = Ee;
        Ee.previous = ke;
        Ee.next = Be;
      }
    }
    this.length++;
    this.createInternalArrayRepresentation();
  }
  remove(rt = 0) {
    var Oe;
    if (this.length === 0 || rt < 0 || rt >= this.length) {
      throw new Error("Position is out of the list");
    }
    if (rt === 0 && this.head) {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = undefined;
      } else {
        this.tail = undefined;
      }
    } else if (rt === this.length - 1 && (Oe = this.tail) !== null && Oe !== undefined && Oe.previous) {
      this.tail = this.tail.previous;
      this.tail.next = undefined;
    } else {
      const Ee = this.getNode(rt);
      if (Ee != null && Ee.next && Ee.previous) {
        Ee.next.previous = Ee.previous;
        Ee.previous.next = Ee.next;
      }
    }
    this.length--;
    this.createInternalArrayRepresentation();
  }
  set(rt, Oe) {
    if (this.length === 0 || rt < 0 || rt >= this.length) {
      throw new Error("Position is out of the list");
    }
    const Ee = this.getNode(rt);
    if (Ee) {
      Ee.value = Oe;
      this.createInternalArrayRepresentation();
    }
  }
  toArray() {
    return this.asArray;
  }
  findAll(rt) {
    let Oe = this.head;
    const Ee = [];
    if (!Oe) {
      return Ee;
    }
    for (let ke = 0; ke < this.length; ke++) {
      if (!Oe) {
        return Ee;
      }
      if (rt(Oe.value, ke)) {
        Ee.push({
          index: ke,
          value: Oe.value
        });
      }
      Oe = Oe.next;
    }
    return Ee;
  }
  push(...rt) {
    rt.forEach(Oe => {
      this.add(Oe);
    });
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const rt = this.tail;
    this.remove(this.length - 1);
    return rt?.value;
  }
  unshift(...rt) {
    rt.reverse();
    rt.forEach(Oe => {
      this.add(Oe, 0);
    });
    return this.length;
  }
  shift() {
    if (this.length === 0) {
      return;
    }
    const Oe = this.head?.value;
    this.remove();
    return Oe;
  }
  forEach(rt) {
    let Oe = this.head;
    for (let Ee = 0; Ee < this.length; Ee++) {
      if (!Oe) {
        return;
      }
      rt(Oe.value, Ee);
      Oe = Oe.next;
    }
  }
  indexOf(rt) {
    let Oe = this.head;
    let Ee = -1;
    for (let ke = 0; ke < this.length; ke++) {
      if (!Oe) {
        return Ee;
      }
      if (Oe.value === rt) {
        Ee = ke;
        break;
      }
      Oe = Oe.next;
    }
    return Ee;
  }
  some(rt) {
    let Oe = this.head;
    let Ee = false;
    for (; Oe && !Ee;) {
      if (rt(Oe.value)) {
        Ee = true;
        break;
      }
      Oe = Oe.next;
    }
    return Ee;
  }
  every(rt) {
    let Oe = this.head;
    let Ee = true;
    for (; Oe && Ee;) {
      if (!rt(Oe.value)) {
        Ee = false;
      }
      Oe = Oe.next;
    }
    return Ee;
  }
  toString() {
    return "[Linked List]";
  }
  find(rt) {
    let Oe = this.head;
    for (let Ee = 0; Ee < this.length; Ee++) {
      if (!Oe) {
        return;
      }
      if (rt(Oe.value, Ee)) {
        return Oe.value;
      }
      Oe = Oe.next;
    }
  }
  findIndex(rt) {
    let Oe = this.head;
    for (let Ee = 0; Ee < this.length; Ee++) {
      if (!Oe) {
        return -1;
      }
      if (rt(Oe.value, Ee)) {
        return Ee;
      }
      Oe = Oe.next;
    }
    return -1;
  }
  getNode(rt) {
    if (this.length === 0 || rt < 0 || rt >= this.length) {
      throw new Error("Position is out of the list");
    }
    let Oe = this.head;
    for (let ke = 0; ke < rt; ke++) {
      var Ee;
      Oe = (Ee = Oe) === null || Ee === undefined ? undefined : Ee.next;
    }
    return Oe;
  }
  createInternalArrayRepresentation() {
    const rt = [];
    let Oe = this.head;
    for (; Oe;) {
      rt.push(Oe.value);
      Oe = Oe.next;
    }
    this.asArray = rt;
  }
}
export function GU() {
  return function (Oe, Ee) {
    const ke = ` __${Ee}Value`;
    Object.defineProperty(Oe, Ee, {
      get() {
        return this[ke];
      },
      set(Be) {
        const De = this[ke];
        this[ke] = Be;
        if (De !== Be && this[Ee + "Change"]) {
          this[Ee + "Change"].emit(Be);
        }
      }
    });
  };
}
export class cQ {
  static reflow(rt) {}
  static getStyles(rt) {
    let Oe = rt.ownerDocument.defaultView;
    if (!Oe || !Oe.opener) {
      Oe = S;
    }
    return Oe.getComputedStyle(rt);
  }
  static stackOverflowConfig() {
    const rt = function he() {
      const st = Wl();
      const rt = Object.keys(st).find(Oe => st[Oe]);
      return fe[rt];
    }();
    return {
      crossorigin: rt !== "bs3" ? "anonymous" : undefined,
      integrity: rt === "bs5" ? "sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" : rt === "bs4" ? "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" : undefined,
      cdnLink: rt === "bs5" ? "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" : rt === "bs4" ? "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    };
  }
}
const Ge = {};
const Ue = typeof console === "undefined" || !("warn" in console);
export function O4(st) {
  if (!!(0, i.X6Q)() && !Ue && !(st in Ge)) {
    Ge[st] = true;
    console.warn(st);
  }
}