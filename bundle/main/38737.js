export function P(t, b) {
  if (t) {
    const k = t.indexOf(b);
    if (k >= 0) {
      t.splice(k, 1);
    }
  }
}