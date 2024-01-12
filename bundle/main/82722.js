export function R(v) {
  return (0, i.e)((C, w) => {
    (0, b.Xf)(v).subscribe((0, t.x)(w, () => w.complete(), k.Z));
    if (!w.closed) {
      C.subscribe(w);
    }
  });
}