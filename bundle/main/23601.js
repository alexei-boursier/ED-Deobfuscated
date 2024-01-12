import * as k from "25403";
export function e(w, S = i.z) {
  return function M(w) {
    return (0, t.e)((S, L) => {
      let I = false;
      let E = null;
      let O = null;
      let x = false;
      const U = () => {
        O?.unsubscribe();
        O = null;
        if (I) {
          I = false;
          const F = E;
          E = null;
          L.next(F);
        }
        if (x) {
          L.complete();
        }
      };
      const B = () => {
        O = null;
        if (x) {
          L.complete();
        }
      };
      S.subscribe((0, k.x)(L, F => {
        I = true;
        E = F;
        if (!O) {
          (0, b.Xf)(w(F)).subscribe(O = (0, k.x)(L, U, B));
        }
      }, () => {
        x = true;
        if (!I || !O || O.closed) {
          L.complete();
        }
      }));
    });
  }(() => (0, v.H)(w, S));
}