import * as M from "30576";
const C = ["addListener", "removeListener"];
const w = ["addEventListener", "removeEventListener"];
const S = ["on", "off"];
export function R(U, B, F, Z) {
  if ((0, M.m)(F)) {
    Z = F;
    F = undefined;
  }
  if (Z) {
    return R(U, B, F).pipe((0, v.Z)(Z));
  }
  const [X, le] = function x(U) {
    return (0, M.m)(U.addEventListener) && (0, M.m)(U.removeEventListener);
  }(U) ? w.map(fe => q => U[fe](B, q, F)) : function E(U) {
    return (0, M.m)(U.addListener) && (0, M.m)(U.removeListener);
  }(U) ? C.map(I(U, B)) : function O(U) {
    return (0, M.m)(U.on) && (0, M.m)(U.off);
  }(U) ? S.map(I(U, B)) : [];
  if (!X && (0, k.z)(U)) {
    return (0, b.z)(fe => R(fe, B, F))((0, i.Xf)(U));
  }
  if (!X) {
    throw new TypeError("Invalid event target");
  }
  return new t.y(fe => {
    const q = (...j) => fe.next(j.length > 1 ? j : j[0]);
    X(q);
    return () => le(q);
  });
}
function I(U, B) {
  return F => Z => U[F](B, Z);
}