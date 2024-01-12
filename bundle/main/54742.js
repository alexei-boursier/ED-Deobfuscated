const {
  isArray: i
} = Array;
const {
  getPrototypeOf: t,
  prototype: b,
  keys: k
} = Object;
export function D(C) {
  if (C.length === 1) {
    const w = C[0];
    if (i(w)) {
      return {
        args: w,
        keys: null
      };
    }
    if (function v(C) {
      return C && typeof C == "object" && t(C) === b;
    }(w)) {
      const S = k(w);
      return {
        args: S.map(L => w[L]),
        keys: S
      };
    }
  }
  return {
    args: C,
    keys: null
  };
}