export function A(k) {
  return (0, i.m)(k?.lift);
}
export function e(k) {
  return M => {
    if (A(M)) {
      return M.lift(function (v) {
        try {
          return k(v, this);
        } catch (C) {
          this.error(C);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}