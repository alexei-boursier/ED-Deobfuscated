import * as i from "77902";
export function W(b) {
  return function (k, M) {
    const v = b || M;
    Object.defineProperty(k, M, {
      get: function () {
        const C = localStorage.getItem(v);
        return i.u.decode(C);
      },
      set: function (C) {
        localStorage.setItem(v, i.u.encode(C));
      }
    });
  };
}