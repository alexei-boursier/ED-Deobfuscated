var t = (0, require("84130").Z)("renderers");
var b = t.register;
var k = t.getItem;
export var Y3 = t.hasItem;
export function Bp(L) {
  if (typeof L == "function") {
    return L;
  }
  if (!Y3(L)) {
    throw Error(`No registered renderer found under "${L}" name`);
  }
  return k(L);
}
export function zn(L, I) {
  if (typeof L != "string") {
    L = (I = L).RENDERER_TYPE;
  }
  b(L, I);
}