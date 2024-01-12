export function D(...S) {
  const L = (0, k.jO)(S);
  const {
    args: I,
    keys: E
  } = (0, t.D)(S);
  const O = new i.y(x => {
    const {
      length: U
    } = I;
    if (!U) {
      x.complete();
      return;
    }
    const B = new Array(U);
    let F = U;
    let Z = U;
    for (let X = 0; X < U; X++) {
      let le = false;
      (0, b.Xf)(I[X]).subscribe((0, M.x)(x, fe => {
        if (!le) {
          le = true;
          Z--;
        }
        B[X] = fe;
      }, () => F--, undefined, () => {
        if (!F || !le) {
          if (!Z) {
            x.next(E ? (0, C.n)(E, B) : B);
          }
          x.complete();
        }
      }));
    }
  });
  if (L) {
    return O.pipe((0, v.Z)(L));
  } else {
    return O;
  }
}