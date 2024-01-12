export function K(M) {
  return (0, b.e)((v, C) => {
    let L;
    let w = null;
    let S = false;
    w = v.subscribe((0, t.x)(C, undefined, undefined, I => {
      L = (0, i.Xf)(M(I, K(M)(v)));
      if (w) {
        w.unsubscribe();
        w = null;
        L.subscribe(C);
      } else {
        S = true;
      }
    }));
    if (S) {
      w.unsubscribe();
      w = null;
      L.subscribe(C);
    }
  });
}