const {
  isArray: t
} = Array;
export function Z(M) {
  return (0, i.U)(v => function b(M, v) {
    if (t(v)) {
      return M(...v);
    } else {
      return M(v);
    }
  }(M, v));
}