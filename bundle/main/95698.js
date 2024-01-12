export function q(M) {
  if (M <= 0) {
    return () => i.E;
  } else {
    return (0, t.e)((v, C) => {
      let w = 0;
      v.subscribe((0, b.x)(C, S => {
        if (++w <= M) {
          C.next(S);
          if (M <= w) {
            C.complete();
          }
        }
      }));
    });
  }
}