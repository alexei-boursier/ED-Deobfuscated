export function b(v, C, w) {
  const S = (0, i.m)(v) || C || w ? {
    next: v,
    error: C,
    complete: w
  } : v;
  if (S) {
    return (0, t.e)((L, I) => {
      var E;
      if ((E = S.subscribe) !== null && E !== undefined) {
        E.call(S);
      }
      let O = true;
      L.subscribe((0, _b.x)(I, x => {
        var U;
        if ((U = S.next) !== null && U !== undefined) {
          U.call(S, x);
        }
        I.next(x);
      }, () => {
        var x;
        O = false;
        if ((x = S.complete) !== null && x !== undefined) {
          x.call(S);
        }
        I.complete();
      }, x => {
        var U;
        O = false;
        if ((U = S.error) !== null && U !== undefined) {
          U.call(S, x);
        }
        I.error(x);
      }, () => {
        var x;
        var U;
        if (O) {
          if ((x = S.unsubscribe) !== null && x !== undefined) {
            x.call(S);
          }
        }
        if ((U = S.finalize) !== null && U !== undefined) {
          U.call(S);
        }
      }));
    });
  } else {
    return k.y;
  }
}