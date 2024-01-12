export function z(...k) {
  return U(k);
}
export function U(k) {
  if (k.length === 0) {
    return i.y;
  } else if (k.length === 1) {
    return k[0];
  } else {
    return function (v) {
      return k.reduce((C, w) => w(C), v);
    };
  }
}