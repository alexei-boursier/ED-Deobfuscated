export function _(k, M) {
  const v = (0, t.m)(k) ? k : () => k;
  const C = w => w.error(v());
  return new i.y(M ? w => M.schedule(C, 0, w) : C);
}