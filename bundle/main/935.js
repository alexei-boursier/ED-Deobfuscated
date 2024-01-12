export let p = (() => {
  class b {
    transform(M) {
      const v = /([^">])(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_.~#;+?/&=]*))/g;
      const C = /(p>(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_.~#;+?/&=]*)))/g;
      const w = /([^/])(www\.[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_.~#+?/&=]*))/g;
      if (v.test(M)) {
        M = M.replace(v, " <a target='_blank' href='$2'>$2</a> ");
      }
      if (C.test(M)) {
        M = M.replace(C, "p> <a target='_blank' href='$2'>$2</a> ");
      }
      if (w.test(M)) {
        M = M.replace(w, " <a target='_blank' href='https://$2'>$2</a> ");
      }
      return M;
    }
  }
  b.ɵfac = function (M) {
    return new (M || b)();
  };
  b.ɵpipe = i.Yjl({
    name: "detectUrl",
    type: b,
    pure: true
  });
  return b;
})();