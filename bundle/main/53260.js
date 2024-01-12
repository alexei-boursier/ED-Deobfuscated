import * as i from "70655";
export function Q(M) {
  return (0, i.FC)(this, arguments, function* () {
    const C = M.getReader();
    try {
      for (;;) {
        const {
          value: w,
          done: S
        } = yield (0, i.qq)(C.read());
        if (S) {
          return yield (0, i.qq)(undefined);
        }
        yield yield (0, i.qq)(w);
      }
    } finally {
      C.releaseLock();
    }
  });
}
export function L(M) {
  return (0, t.m)(M?.getReader);
}