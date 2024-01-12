export function f(t, b, k, M = 0, v = false) {
  const C = b.schedule(function () {
    k();
    if (v) {
      t.add(this.schedule(null, M));
    } else {
      this.unsubscribe();
    }
  }, M);
  t.add(C);
  if (!v) {
    return C;
  }
}