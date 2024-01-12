const v = new class M extends k.v {}(class b extends t.o {
  constructor(B, F) {
    super(B, F);
    this.scheduler = B;
    this.work = F;
  }
  schedule(B, F = 0) {
    if (F > 0) {
      return super.schedule(B, F);
    } else {
      this.delay = F;
      this.state = B;
      this.scheduler.flush(this);
      return this;
    }
  }
  execute(B, F) {
    if (F > 0 || this.closed) {
      return super.execute(B, F);
    } else {
      return this._execute(B, F);
    }
  }
  requestAsyncId(B, F, Z = 0) {
    if (Z != null && Z > 0 || Z == null && this.delay > 0) {
      return super.requestAsyncId(B, F, Z);
    } else {
      B.flush(this);
      return 0;
    }
  }
});
import * as w from "69751";
import * as I from "54004";
export class F extends i.X {
  constructor(B, F, Z) {
    super(B);
    F.pipe((0, S.Q)(v)).pipe((0, L.R)((fe, q) => q ? Z(fe, q) : fe, B)).subscribe(fe => this.next(fe));
  }
}
export class s extends w.y {
  constructor(B, F, Z) {
    super();
    this._dispatcher = B;
    this._reducer = F;
    this.source = Z;
  }
  select(B) {
    var F;
    return (((F = this.source) === null || F === undefined ? undefined : F.pipe((0, I.U)(B))) || new w.y().pipe((0, I.U)(B))).pipe((0, E.x)());
  }
  lift(B) {
    const F = new s(this._dispatcher, this._reducer, this);
    F.operator = B;
    return F;
  }
  dispatch(B) {
    this._dispatcher.next(B);
  }
  next(B) {
    this._dispatcher.next(B);
  }
  error(B) {
    this._dispatcher.error(B);
  }
  complete() {}
}