class t extends i.w0 {
  constructor(C, w) {
    super();
  }
  schedule(C, w = 0) {
    return this;
  }
}
const b = {
  setInterval(v, C, ...w) {
    const {
      delegate: S
    } = b;
    if (S?.setInterval) {
      return S.setInterval(v, C, ...w);
    } else {
      return setInterval(v, C, ...w);
    }
  },
  clearInterval(v) {
    const {
      delegate: C
    } = b;
    return (C?.clearInterval || clearInterval)(v);
  },
  delegate: undefined
};
export class o extends t {
  constructor(C, w) {
    super(C, w);
    this.scheduler = C;
    this.work = w;
    this.pending = false;
  }
  schedule(C, w = 0) {
    if (this.closed) {
      return this;
    }
    this.state = C;
    const L = this.id;
    const I = this.scheduler;
    if (L != null) {
      this.id = this.recycleAsyncId(I, L, w);
    }
    this.pending = true;
    this.delay = w;
    this.id = this.id ?? this.requestAsyncId(I, this.id, w);
    return this;
  }
  requestAsyncId(C, w, S = 0) {
    return b.setInterval(C.flush.bind(C, this), S);
  }
  recycleAsyncId(C, w, S = 0) {
    if (S != null && this.delay === S && this.pending === false) {
      return w;
    }
    if (w != null) {
      b.clearInterval(w);
    }
  }
  execute(C, w) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    const S = this._execute(C, w);
    if (S) {
      return S;
    }
    if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(C, w) {
    let L;
    let S = false;
    try {
      this.work(C);
    } catch (I) {
      S = true;
      L = I || new Error("Scheduled action threw falsy error");
    }
    if (S) {
      this.unsubscribe();
      return L;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id: C,
        scheduler: w
      } = this;
      const {
        actions: S
      } = w;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0, k.P)(S, this);
      if (C != null) {
        this.id = this.recycleAsyncId(w, C, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}