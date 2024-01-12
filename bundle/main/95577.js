import * as t from "38421";
import * as M from "25403";
export function z(S, L, I = Infinity) {
  if ((0, C.m)(L)) {
    return z((E, O) => (0, i.U)((x, U) => L(E, x, O, U))((0, t.Xf)(S(E, O))), I);
  } else {
    if (typeof L == "number") {
      I = L;
    }
    return (0, b.e)((E, O) => function v(S, L, I, E, O, x, U, B) {
      const F = [];
      let Z = 0;
      let X = 0;
      let le = false;
      const fe = () => {
        if (le && !F.length && !Z) {
          L.complete();
        }
      };
      const q = G => Z < E ? j(G) : F.push(G);
      const j = G => {
        if (x) {
          L.next(G);
        }
        Z++;
        let se = false;
        (0, t.Xf)(I(G, X++)).subscribe((0, M.x)(L, W => {
          O?.(W);
          if (x) {
            q(W);
          } else {
            L.next(W);
          }
        }, () => {
          se = true;
        }, undefined, () => {
          if (se) {
            try {
              for (Z--; F.length && Z < E;) {
                const W = F.shift();
                if (U) {
                  (0, k.f)(L, U, () => j(W));
                } else {
                  j(W);
                }
              }
              fe();
            } catch (W) {
              L.error(W);
            }
          }
        }));
      };
      S.subscribe((0, M.x)(L, q, () => {
        le = true;
        fe();
      }));
      return () => {
        B?.();
      };
    }(E, O, S, I));
  }
}