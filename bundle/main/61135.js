export class X extends i.x {
  constructor(k) {
    super();
    this._value = k;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(k) {
    const M = super._subscribe(k);
    if (!M.closed) {
      k.next(this._value);
    }
    return M;
  }
  getValue() {
    const {
      hasError: k,
      thrownError: M,
      _value: v
    } = this;
    if (k) {
      throw M;
    }
    this._throwIfClosed();
    return v;
  }
  next(k) {
    super.next(this._value = k);
  }
}