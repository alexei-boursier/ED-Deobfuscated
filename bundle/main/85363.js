import * as i from "39672";
export function Q(M, v = 0) {
  return (0, t.e)((C, w) => {
    C.subscribe((0, b.x)(w, S => (0, i.f)(w, M, () => w.next(S), v), () => (0, i.f)(w, M, () => w.complete(), v), S => (0, i.f)(w, M, () => w.error(S), v)));
  });
}