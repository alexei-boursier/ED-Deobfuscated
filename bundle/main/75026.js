function b(M, v, C, w, S) {
  return (L, I) => {
    let E = C;
    let O = v;
    let x = 0;
    L.subscribe((0, t.x)(I, U => {
      const B = x++;
      O = E ? M(O, U, B) : (E = true, U);
      if (w) {
        I.next(O);
      }
    }, S && (() => {
      if (E) {
        I.next(O);
      }
      I.complete();
    })));
  };
}
export function R(M, v) {
  return (0, i.e)(b(M, v, arguments.length >= 2, true));
}