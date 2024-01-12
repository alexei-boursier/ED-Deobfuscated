export function x(k, M, v, C, w) {
  return new b(k, M, v, C, w);
}
class b extends i.Lv {
  constructor(M, v, C, w, S, L) {
    super(M);
    this.onFinalize = S;
    this.shouldUnsubscribe = L;
    this._next = v ? function (I) {
      try {
        v(I);
      } catch (E) {
        M.error(E);
      }
    } : super._next;
    this._error = w ? function (I) {
      try {
        w(I);
      } catch (E) {
        M.error(E);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = C ? function () {
      try {
        C();
      } catch (I) {
        M.error(I);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var M;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed: v
      } = this;
      super.unsubscribe();
      if (!v) {
        if ((M = this.onFinalize) !== null && M !== undefined) {
          M.call(this);
        }
      }
    }
  }
}