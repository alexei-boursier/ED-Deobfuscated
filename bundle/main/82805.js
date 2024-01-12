export function H(v = 0, C, w = t.P) {
  let S = -1;
  if (C != null) {
    if ((0, b.K)(C)) {
      w = C;
    } else {
      S = C;
    }
  }
  return new i.y(L => {
    let I = (0, k.q)(v) ? +v - w.now() : v;
    if (I < 0) {
      I = 0;
    }
    let E = 0;
    return w.schedule(function () {
      if (!L.closed) {
        L.next(E++);
        if (S >= 0) {
          this.schedule(undefined, S);
        } else {
          L.complete();
        }
      }
    }, I);
  });
}