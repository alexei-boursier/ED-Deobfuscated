import * as i from "42416";
let t = null;
export function x(M) {
  if (i.v.useDeprecatedSynchronousErrorHandling) {
    const v = !t;
    if (v) {
      t = {
        errorThrown: false,
        error: null
      };
    }
    M();
    if (v) {
      const {
        errorThrown: C,
        error: w
      } = t;
      t = null;
      if (C) {
        throw w;
      }
    }
  } else {
    M();
  }
}
export function O(M) {
  if (i.v.useDeprecatedSynchronousErrorHandling && t) {
    t.errorThrown = true;
    t.error = M;
  }
}