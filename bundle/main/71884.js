export function x(v, C = i.y) {
  v = v ?? M;
  return (0, t.e)((w, S) => {
    let L;
    let I = true;
    w.subscribe((0, b.x)(S, E => {
      const O = C(E);
      if (I || !v(L, O)) {
        I = false;
        L = O;
        S.next(E);
      }
    }));
  });
}
function M(v, C) {
  return v === C;
}