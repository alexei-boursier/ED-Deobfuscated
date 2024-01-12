import * as b from "50457";
import * as k from "44671";
import * as v from "63269";
export function a(...O) {
  const x = (0, v.yG)(O);
  const U = (0, v.jO)(O);
  const {
    args: B,
    keys: F
  } = (0, t.D)(O);
  if (B.length === 0) {
    return (0, b.D)([], x);
  }
  const Z = new i.y(function I(O, x, U = k.y) {
    return B => {
      E(x, () => {
        const {
          length: F
        } = O;
        const Z = new Array(F);
        let X = F;
        let le = F;
        for (let fe = 0; fe < F; fe++) {
          E(x, () => {
            const q = (0, b.D)(O[fe], x);
            let j = false;
            q.subscribe((0, w.x)(B, G => {
              Z[fe] = G;
              if (!j) {
                j = true;
                le--;
              }
              if (!le) {
                B.next(U(Z.slice()));
              }
            }, () => {
              if (! --X) {
                B.complete();
              }
            }));
          }, B);
        }
      }, B);
    };
  }(B, x, F ? X => (0, C.n)(F, X) : k.y));
  if (U) {
    return Z.pipe((0, M.Z)(U));
  } else {
    return Z;
  }
}
function E(O, x, U) {
  if (O) {
    (0, S.f)(U, O, x);
  } else {
    x();
  }
}