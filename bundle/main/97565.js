class t {
  constructor(M, v = t.now) {
    this.schedulerActionCtor = M;
    this.now = v;
  }
  schedule(M, v = 0, C) {
    return new this.schedulerActionCtor(this, M).schedule(C, v);
  }
}
t.now = i.l.now;
export class v extends t {
  constructor(M, v = t.now) {
    super(M, v);
    this.actions = [];
    this._active = false;
  }
  flush(M) {
    const {
      actions: v
    } = this;
    if (this._active) {
      v.push(M);
      return;
    }
    let C;
    this._active = true;
    do {
      if (C = M.execute(M.state, M.delay)) {
        break;
      }
    } while (M = v.shift());
    this._active = false;
    if (C) {
      for (; M = v.shift();) {
        M.unsubscribe();
      }
      throw C;
    }
  }
}