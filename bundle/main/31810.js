export function n(t, b) {
  return t.reduce((k, M, v) => {
    k[M] = b[v];
    return k;
  }, {});
}