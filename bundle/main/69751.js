import * as i from "70930";
import * as v from "30576";
export let y = (() => {
  class E {
    constructor(x) {
      if (x) {
        this._subscribe = x;
      }
    }
    lift(x) {
      const U = new E();
      U.source = this;
      U.operator = x;
      return U;
    }
    subscribe(x, U, B) {
      const F = function I(E) {
        return E && E instanceof i.Lv || function L(E) {
          return E && (0, v.m)(E.next) && (0, v.m)(E.error) && (0, v.m)(E.complete);
        }(E) && (0, t.Nn)(E);
      }(x) ? x : new i.Hp(x, U, B);
      (0, C.x)(() => {
        const {
          operator: Z,
          source: X
        } = this;
        F.add(Z ? Z.call(F, X) : X ? this._subscribe(F) : this._trySubscribe(F));
      });
      return F;
    }
    _trySubscribe(x) {
      try {
        return this._subscribe(x);
      } catch (U) {
        x.error(U);
      }
    }
    forEach(x, U) {
      return new (U = S(U))((B, F) => {
        const Z = new i.Hp({
          next: X => {
            try {
              x(X);
            } catch (le) {
              F(le);
              Z.unsubscribe();
            }
          },
          error: F,
          complete: B
        });
        this.subscribe(Z);
      });
    }
    _subscribe(x) {
      var U;
      if ((U = this.source) === null || U === undefined) {
        return undefined;
      } else {
        return U.subscribe(x);
      }
    }
    [b.L]() {
      return this;
    }
    pipe(...x) {
      return (0, k.U)(x)(this);
    }
    toPromise(x) {
      return new (x = S(x))((U, B) => {
        let F;
        this.subscribe(Z => F = Z, Z => B(Z), () => U(F));
      });
    }
  }
  E.create = O => new E(O);
  return E;
})();
function S(E) {
  return E ?? M.v.Promise ?? Promise;
}