export function o(k, M = false) {
  return (0, i.e)((v, C) => {
    let w = 0;
    v.subscribe((0, t.x)(C, S => {
      const L = k(S, w++);
      if (L || M) {
        C.next(S);
      }
      if (!L) {
        C.complete();
      }
    }));
  });
}