import * as t from "50727";
export class c extends i.y {
  constructor(w, S) {
    super();
    this.source = w;
    this.subjectFactory = S;
    this._subject = null;
    this._refCount = 0;
    this._connection = null;
    if ((0, M.A)(w)) {
      this.lift = w.lift;
    }
  }
  _subscribe(w) {
    return this.getSubject().subscribe(w);
  }
  getSubject() {
    const w = this._subject;
    if (!w || w.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  }
  _teardown() {
    this._refCount = 0;
    const {
      _connection: w
    } = this;
    this._subject = this._connection = null;
    w?.unsubscribe();
  }
  connect() {
    let w = this._connection;
    if (!w) {
      w = this._connection = new t.w0();
      const S = this.getSubject();
      w.add(this.source.subscribe((0, k.x)(S, undefined, () => {
        this._teardown();
        S.complete();
      }, L => {
        this._teardown();
        S.error(L);
      }, () => this._teardown())));
      if (w.closed) {
        this._connection = null;
        w = t.w0.EMPTY;
      }
    }
    return w;
  }
  refCount() {
    return (0, b.x)()(this);
  }
}