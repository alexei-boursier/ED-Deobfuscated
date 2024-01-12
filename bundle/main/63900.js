import * as b from "25403";
export function w(M, v) {
  return (0, t.e)((C, w) => {
    let S = null;
    let L = 0;
    let I = false;
    const E = () => I && !S && w.complete();
    C.subscribe((0, b.x)(w, O => {
      S?.unsubscribe();
      let x = 0;
      const U = L++;
      (0, i.Xf)(M(O, U)).subscribe(S = (0, b.x)(w, B => w.next(v ? v(O, B, U, x++) : B), () => {
        S = null;
        E();
      }));
    }, () => {
      I = true;
      E();
    }));
  });
}