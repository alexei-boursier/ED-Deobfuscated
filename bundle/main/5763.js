import * as i from "77902";
export function v(b) {
  return function (k, M) {
    const v = b || M;
    Object.defineProperty(k, M, {
      get: function () {
        const C = sessionStorage.getItem(v);
        return i.u.decode(C);
      },
      set: function (C) {
        sessionStorage.setItem(v, i.u.encode(C));
      }
    });
  };
}