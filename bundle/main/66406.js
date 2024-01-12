const b = {
  schedule(S) {
    let L = requestAnimationFrame;
    let I = cancelAnimationFrame;
    const {
      delegate: E
    } = b;
    if (E) {
      L = E.requestAnimationFrame;
      I = E.cancelAnimationFrame;
    }
    const O = L(x => {
      I = undefined;
      S(x);
    });
    return new t.w0(() => I?.(O));
  },
  requestAnimationFrame(...S) {
    const {
      delegate: L
    } = b;
    return (L?.requestAnimationFrame || requestAnimationFrame)(...S);
  },
  cancelAnimationFrame(...S) {
    const {
      delegate: L
    } = b;
    return (L?.cancelAnimationFrame || cancelAnimationFrame)(...S);
  },
  delegate: undefined
};
export const Z = new class v extends M.v {
  flush(L) {
    this._active = true;
    const I = this._scheduled;
    this._scheduled = undefined;
    const {
      actions: E
    } = this;
    let O;
    L = L || E.shift();
    do {
      if (O = L.execute(L.state, L.delay)) {
        break;
      }
    } while ((L = E[0]) && L.id === I && E.shift());
    this._active = false;
    if (O) {
      for (; (L = E[0]) && L.id === I && E.shift();) {
        L.unsubscribe();
      }
      throw O;
    }
  }
}(class k extends i.o {
  constructor(L, I) {
    super(L, I);
    this.scheduler = L;
    this.work = I;
  }
  requestAsyncId(L, I, E = 0) {
    if (E !== null && E > 0) {
      return super.requestAsyncId(L, I, E);
    } else {
      L.actions.push(this);
      return L._scheduled ||= b.requestAnimationFrame(() => L.flush(undefined));
    }
  }
  recycleAsyncId(L, I, E = 0) {
    if (E != null ? E > 0 : this.delay > 0) {
      return super.recycleAsyncId(L, I, E);
    }
    const {
      actions: x
    } = L;
    if (I != null && x[x.length - 1]?.id !== I) {
      b.cancelAnimationFrame(I);
      L._scheduled = undefined;
    }
  }
});