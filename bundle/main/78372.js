export function b(M, v = i.z) {
  return (0, t.e)((C, w) => {
    let S = null;
    let L = null;
    let I = null;
    const E = () => {
      if (S) {
        S.unsubscribe();
        S = null;
        const x = L;
        L = null;
        w.next(x);
      }
    };
    function O() {
      const x = I + M;
      const U = v.now();
      if (U < x) {
        S = this.schedule(undefined, x - U);
        w.add(S);
        return;
      }
      E();
    }
    C.subscribe((0, _b.x)(w, x => {
      L = x;
      I = v.now();
      if (!S) {
        S = v.schedule(O, M);
        w.add(S);
      }
    }, () => {
      E();
      w.complete();
    }, undefined, () => {
      L = S = null;
    }));
  });
}