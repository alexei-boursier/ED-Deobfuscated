export function h(k) {
  t.z.setTimeout(() => {
    const {
      onUnhandledError: M
    } = i.v;
    if (!M) {
      throw k;
    }
    M(k);
  });
}