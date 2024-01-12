require("74916");
require("15306");
require("73210");
export function e(v) {
  for (var C = arguments.length, w = new Array(C > 1 ? C - 1 : 0), S = 1; S < C; S++) {
    w[S - 1] = arguments[S];
  }
  var L = (0, k.k$)(v, function (I, E, O) {
    return I + E.replace(/\r?\n\s*/g, "") + (w[O] ? w[O] : "");
  }, "");
  return L.trim();
}