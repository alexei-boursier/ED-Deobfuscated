function b(C) {
  return C[C.length - 1];
}
export function jO(C) {
  if ((0, i.m)(b(C))) {
    return C.pop();
  } else {
    return undefined;
  }
}
export function yG(C) {
  if ((0, t.K)(b(C))) {
    return C.pop();
  } else {
    return undefined;
  }
}
export function _6(C, w) {
  if (typeof b(C) == "number") {
    return C.pop();
  } else {
    return w;
  }
}