export function d(k) {
  return (0, i.e)((M, v) => {
    let C = false;
    M.subscribe((0, t.x)(v, w => {
      C = true;
      v.next(w);
    }, () => {
      if (!C) {
        v.next(k);
      }
      v.complete();
    }));
  });
}