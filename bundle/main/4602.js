const t = Object.create(null);
export let $ = (() => {
  class k {
    transform(v) {
      let C = v;
      if (Array.isArray(v)) {
        C = v.join("->");
        t[C] ||= function (S, L) {
          const I = [];
          for (const E of v) {
            I.push(L[E]);
          }
          return I.join("->");
        };
      } else if (v === "$index") {
        t[C] ||= (w, S) => w;
      } else if (!t[C]) {
        const w = v.indexOf(".");
        t[C] = (S, L) => w > -1 ? L[v.substring(0, w)][v.substring(w + 1, v.length)] : L[v];
      }
      return t[C];
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵpipe = i.Yjl({
    name: "trackByProperty",
    type: k,
    pure: true
  });
  return k;
})();