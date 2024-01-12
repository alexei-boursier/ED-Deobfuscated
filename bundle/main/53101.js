let b;
let t = 1;
const k = {};
function M(B) {
  return B in k && (delete k[B], true);
}
const v = {
  setImmediate(B) {
    const F = t++;
    k[F] = true;
    b ||= Promise.resolve();
    b.then(() => M(F) && B());
    return F;
  },
  clearImmediate(B) {
    M(B);
  }
};
const {
  setImmediate: w,
  clearImmediate: S
} = v;
const L = {
  setImmediate(...B) {
    const {
      delegate: F
    } = L;
    return (F?.setImmediate || w)(...B);
  },
  clearImmediate(B) {
    const {
      delegate: F
    } = L;
    return (F?.clearImmediate || S)(B);
  },
  delegate: undefined
};
export const E = new class O extends _E.v {
  flush(F) {
    this._active = true;
    const Z = this._scheduled;
    this._scheduled = undefined;
    const {
      actions: X
    } = this;
    let le;
    F = F || X.shift();
    do {
      if (le = F.execute(F.state, F.delay)) {
        break;
      }
    } while ((F = X[0]) && F.id === Z && X.shift());
    this._active = false;
    if (le) {
      for (; (F = X[0]) && F.id === Z && X.shift();) {
        F.unsubscribe();
      }
      throw le;
    }
  }
}(class I extends i.o {
  constructor(F, Z) {
    super(F, Z);
    this.scheduler = F;
    this.work = Z;
  }
  requestAsyncId(F, Z, X = 0) {
    if (X !== null && X > 0) {
      return super.requestAsyncId(F, Z, X);
    } else {
      F.actions.push(this);
      return F._scheduled ||= L.setImmediate(F.flush.bind(F, undefined));
    }
  }
  recycleAsyncId(F, Z, X = 0) {
    if (X != null ? X > 0 : this.delay > 0) {
      return super.recycleAsyncId(F, Z, X);
    }
    const {
      actions: fe
    } = F;
    if (Z != null && fe[fe.length - 1]?.id !== Z) {
      L.clearImmediate(Z);
      F._scheduled = undefined;
    }
  }
});