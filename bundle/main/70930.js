import * as t from "50727";
import * as b from "42416";
import * as M from "25032";
const v = S("C", undefined, undefined);
function S(fe, q, j) {
  return {
    kind: fe,
    value: q,
    error: j
  };
}
export class Lv extends t.w0 {
  constructor(q) {
    super();
    this.isStopped = false;
    if (q) {
      this.destination = q;
      if ((0, t.Nn)(q)) {
        q.add(this);
      }
    } else {
      this.destination = le;
    }
  }
  static create(q, j, G) {
    return new Hp(q, j, G);
  }
  next(q) {
    if (this.isStopped) {
      X(function w(fe) {
        return S("N", fe, undefined);
      }(q), this);
    } else {
      this._next(q);
    }
  }
  error(q) {
    if (this.isStopped) {
      X(function C(fe) {
        return S("E", undefined, fe);
      }(q), this);
    } else {
      this.isStopped = true;
      this._error(q);
    }
  }
  complete() {
    if (this.isStopped) {
      X(v, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(q) {
    this.destination.next(q);
  }
  _error(q) {
    try {
      this.destination.error(q);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const O = Function.prototype.bind;
function x(fe, q) {
  return O.call(fe, q);
}
class U {
  constructor(q) {
    this.partialObserver = q;
  }
  next(q) {
    const {
      partialObserver: j
    } = this;
    if (j.next) {
      try {
        j.next(q);
      } catch (G) {
        F(G);
      }
    }
  }
  error(q) {
    const {
      partialObserver: j
    } = this;
    if (j.error) {
      try {
        j.error(q);
      } catch (G) {
        F(G);
      }
    } else {
      F(q);
    }
  }
  complete() {
    const {
      partialObserver: q
    } = this;
    if (q.complete) {
      try {
        q.complete();
      } catch (j) {
        F(j);
      }
    }
  }
}
export class Hp extends Lv {
  constructor(q, j, G) {
    let se;
    super();
    if ((0, i.m)(q) || !q) {
      se = {
        next: q ?? undefined,
        error: j ?? undefined,
        complete: G ?? undefined
      };
    } else {
      let W;
      if (this && b.v.useDeprecatedNextContext) {
        W = Object.create(q);
        W.unsubscribe = () => this.unsubscribe();
        se = {
          next: q.next && x(q.next, W),
          error: q.error && x(q.error, W),
          complete: q.complete && x(q.complete, W)
        };
      } else {
        se = q;
      }
    }
    this.destination = new U(se);
  }
}
function F(fe) {
  if (b.v.useDeprecatedSynchronousErrorHandling) {
    (0, I.O)(fe);
  } else {
    (0, k.h)(fe);
  }
}
function X(fe, q) {
  const {
    onStoppedNotification: j
  } = b.v;
  if (j) {
    L.z.setTimeout(() => j(fe, q));
  }
}
const le = {
  closed: true,
  next: M.Z,
  error: function Z(fe) {
    throw fe;
  },
  complete: M.Z
};