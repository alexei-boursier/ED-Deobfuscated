var t = (0, require("84130").Z)("validators");
var b = t.register;
var k = t.getItem;
export var oh = t.hasItem;
export function Te(L) {
  if (typeof L == "function") {
    return L;
  }
  if (!oh(L)) {
    throw Error(`No registered validator found under "${L}" name`);
  }
  return k(L);
}
export function Ie(L, I) {
  if (typeof L != "string") {
    L = (I = L).VALIDATOR_TYPE;
  }
  b(L, I);
}