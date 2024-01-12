import * as i from "30576";
const b = (0, require("83888").d)(S => function (I) {
  S(this);
  this.message = I ? `${I.length} errors occurred during unsubscription:\n${I.map((E, O) => `${O + 1}) ${E.toString()}`).join("\n  ")}` : "";
  this.name = "UnsubscriptionError";
  this.errors = I;
});
import * as k from "38737";
export class w0 {
  constructor(L) {
    this.initialTeardown = L;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let L;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage: I
      } = this;
      if (I) {
        this._parentage = null;
        if (Array.isArray(I)) {
          for (const x of I) {
            x.remove(this);
          }
        } else {
          I.remove(this);
        }
      }
      const {
        initialTeardown: E
      } = this;
      if ((0, i.m)(E)) {
        try {
          E();
        } catch (x) {
          L = x instanceof b ? x.errors : [x];
        }
      }
      const {
        _finalizers: O
      } = this;
      if (O) {
        this._finalizers = null;
        for (const x of O) {
          try {
            w(x);
          } catch (U) {
            L = L ?? [];
            if (U instanceof b) {
              L = [...L, ...U.errors];
            } else {
              L.push(U);
            }
          }
        }
      }
      if (L) {
        throw new b(L);
      }
    }
  }
  add(L) {
    if (L && L !== this) {
      if (this.closed) {
        w(L);
      } else {
        if (L instanceof w0) {
          if (L.closed || L._hasParent(this)) {
            return;
          }
          L._addParent(this);
        }
        (this._finalizers = this._finalizers ?? []).push(L);
      }
    }
  }
  _hasParent(L) {
    const {
      _parentage: I
    } = this;
    return I === L || Array.isArray(I) && I.includes(L);
  }
  _addParent(L) {
    const {
      _parentage: I
    } = this;
    this._parentage = Array.isArray(I) ? (I.push(L), I) : I ? [I, L] : L;
  }
  _removeParent(L) {
    const {
      _parentage: I
    } = this;
    if (I === L) {
      this._parentage = null;
    } else if (Array.isArray(I)) {
      (0, k.P)(I, L);
    }
  }
  remove(L) {
    const {
      _finalizers: I
    } = this;
    if (I) {
      (0, k.P)(I, L);
    }
    if (L instanceof w0) {
      L._removeParent(this);
    }
  }
}
w0.EMPTY = (() => {
  const S = new w0();
  S.closed = true;
  return S;
})();
export const Lc = w0.EMPTY;
export function Nn(S) {
  return S instanceof w0 || S && "closed" in S && (0, i.m)(S.remove) && (0, i.m)(S.add) && (0, i.m)(S.unsubscribe);
}
function w(S) {
  if ((0, i.m)(S)) {
    S();
  } else {
    S.unsubscribe();
  }
}