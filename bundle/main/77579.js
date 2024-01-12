import * as i from "69751";
import * as t from "50727";
const k = (0, require("83888").d)(S => function () {
  S(this);
  this.name = "ObjectUnsubscribedError";
  this.message = "object unsubscribed";
});
import * as v from "72806";
export let x = (() => {
  class S extends i.y {
    constructor() {
      super();
      this.closed = false;
      this.currentObservers = null;
      this.observers = [];
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    lift(I) {
      const E = new w(this, this);
      E.operator = I;
      return E;
    }
    _throwIfClosed() {
      if (this.closed) {
        throw new k();
      }
    }
    next(I) {
      (0, v.x)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.currentObservers ||= Array.from(this.observers);
          for (const E of this.currentObservers) {
            E.next(I);
          }
        }
      });
    }
    error(I) {
      (0, v.x)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.hasError = this.isStopped = true;
          this.thrownError = I;
          const {
            observers: E
          } = this;
          for (; E.length;) {
            E.shift().error(I);
          }
        }
      });
    }
    complete() {
      (0, v.x)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.isStopped = true;
          const {
            observers: I
          } = this;
          for (; I.length;) {
            I.shift().complete();
          }
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    }
    get observed() {
      return this.observers?.length > 0;
    }
    _trySubscribe(I) {
      this._throwIfClosed();
      return super._trySubscribe(I);
    }
    _subscribe(I) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(I);
      return this._innerSubscribe(I);
    }
    _innerSubscribe(I) {
      const {
        hasError: E,
        isStopped: O,
        observers: x
      } = this;
      if (E || O) {
        return t.Lc;
      } else {
        this.currentObservers = null;
        x.push(I);
        return new t.w0(() => {
          this.currentObservers = null;
          (0, M.P)(x, I);
        });
      }
    }
    _checkFinalizedStatuses(I) {
      const {
        hasError: E,
        thrownError: O,
        isStopped: x
      } = this;
      if (E) {
        I.error(O);
      } else if (x) {
        I.complete();
      }
    }
    asObservable() {
      const I = new i.y();
      I.source = this;
      return I;
    }
  }
  S.create = (L, I) => new w(L, I);
  return S;
})();
class w extends x {
  constructor(L, I) {
    super();
    this.destination = L;
    this.source = I;
  }
  next(L) {
    var I;
    var E;
    if ((E = (I = this.destination) === null || I === undefined ? undefined : I.next) !== null && E !== undefined) {
      E.call(I, L);
    }
  }
  error(L) {
    var I;
    var E;
    if ((E = (I = this.destination) === null || I === undefined ? undefined : I.error) !== null && E !== undefined) {
      E.call(I, L);
    }
  }
  complete() {
    var L;
    var I;
    if ((I = (L = this.destination) === null || L === undefined ? undefined : L.complete) !== null && I !== undefined) {
      I.call(L);
    }
  }
  _subscribe(L) {
    var I;
    return ((I = this.source) === null || I === undefined ? undefined : I.subscribe(L)) ?? t.Lc;
  }
}