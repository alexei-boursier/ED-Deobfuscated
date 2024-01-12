export class t extends i.x {
  constructor(M = Infinity, v = Infinity, C = _t.l) {
    super();
    this._bufferSize = M;
    this._windowTime = v;
    this._timestampProvider = C;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = v === Infinity;
    this._bufferSize = Math.max(1, M);
    this._windowTime = Math.max(1, v);
  }
  next(M) {
    const {
      isStopped: v,
      _buffer: C,
      _infiniteTimeWindow: w,
      _timestampProvider: S,
      _windowTime: L
    } = this;
    if (!v) {
      C.push(M);
      if (!w) {
        C.push(S.now() + L);
      }
    }
    this._trimBuffer();
    super.next(M);
  }
  _subscribe(M) {
    this._throwIfClosed();
    this._trimBuffer();
    const v = this._innerSubscribe(M);
    const {
      _infiniteTimeWindow: C,
      _buffer: w
    } = this;
    const S = w.slice();
    for (let L = 0; L < S.length && !M.closed; L += C ? 1 : 2) {
      M.next(S[L]);
    }
    this._checkFinalizedStatuses(M);
    return v;
  }
  _trimBuffer() {
    const {
      _bufferSize: M,
      _timestampProvider: v,
      _buffer: C,
      _infiniteTimeWindow: w
    } = this;
    const S = (w ? 1 : 2) * M;
    if (M < Infinity && S < C.length) {
      C.splice(0, C.length - S);
    }
    if (!w) {
      const L = v.now();
      let I = 0;
      for (let E = 1; E < C.length && C[E] <= L; E += 2) {
        I = E;
      }
      if (I) {
        C.splice(0, I + 1);
      }
    }
  }
}