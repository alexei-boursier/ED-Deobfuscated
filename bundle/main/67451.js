export let T = (() => {
  class b {
    transform(M) {
      if (!M || M === "") {
        return M;
      }
      let v = M;
      const C = v.match(/#(.*?)#/g);
      if (C && C.length !== 0) {
        C.forEach((w, S) => {
          let L = w.replace(/#/g, "");
          L = `<span class="math-tex">\\(${L}\\)</span>`;
          v = v.replace(C[S], L);
          return L;
        });
        return v;
      } else {
        return M;
      }
    }
  }
  b.ɵfac = function (M) {
    return new (M || b)();
  };
  b.ɵpipe = i.Yjl({
    name: "replaceFormulaQuestionProp",
    type: b,
    pure: true
  });
  return b;
})();