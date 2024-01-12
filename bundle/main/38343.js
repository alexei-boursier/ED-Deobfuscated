export function x() {
  return (0, i.e)((k, M) => {
    let v = null;
    k._refCount++;
    const C = (0, t.x)(M, undefined, undefined, undefined, () => {
      if (!k || k._refCount <= 0 || --k._refCount > 0) {
        v = null;
        return;
      }
      const w = k._connection;
      const S = v;
      v = null;
      if (w && (!S || w === S)) {
        w.unsubscribe();
      }
      M.unsubscribe();
    });
    k.subscribe(C);
    if (!C.closed) {
      v = k.connect();
    }
  });
}