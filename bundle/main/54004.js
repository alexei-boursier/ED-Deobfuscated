export function U(k, M) {
  return (0, i.e)((v, C) => {
    let w = 0;
    v.subscribe((0, t.x)(C, S => {
      C.next(k.call(M, S, w++));
    }));
  });
}