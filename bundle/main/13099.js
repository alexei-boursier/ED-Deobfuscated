import * as b from "70930";
export function B(C = {}) {
  const {
    connector: w = () => new t.x(),
    resetOnError: S = true,
    resetOnComplete: L = true,
    resetOnRefCountZero: I = true
  } = C;
  return E => {
    let O;
    let x;
    let U;
    let B = 0;
    let F = false;
    let Z = false;
    const X = () => {
      x?.unsubscribe();
      x = undefined;
    };
    const le = () => {
      X();
      O = U = undefined;
      F = Z = false;
    };
    const fe = () => {
      const q = O;
      le();
      q?.unsubscribe();
    };
    return (0, k.e)((q, j) => {
      B++;
      if (!Z && !F) {
        X();
      }
      const G = U = U ?? w();
      j.add(() => {
        B--;
        if (B === 0 && !Z && !F) {
          x = v(fe, I);
        }
      });
      G.subscribe(j);
      if (!O && B > 0) {
        O = new b.Hp({
          next: se => G.next(se),
          error: se => {
            Z = true;
            X();
            x = v(le, S, se);
            G.error(se);
          },
          complete: () => {
            F = true;
            X();
            x = v(le, L);
            G.complete();
          }
        });
        (0, i.Xf)(q).subscribe(O);
      }
    })(E);
  };
}
function v(C, w, ...S) {
  if (w === true) {
    C();
    return;
  }
  if (w === false) {
    return;
  }
  const L = new b.Hp({
    next: () => {
      L.unsubscribe();
      C();
    }
  });
  return w(...S).subscribe(L);
}