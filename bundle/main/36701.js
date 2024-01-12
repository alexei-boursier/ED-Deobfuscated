require("82772");
require("41539");
require("39714");
require("74916");
require("15306");
export function ct(x) {
  return x[0].toUpperCase() + x.substr(1);
}
export function O1() {
  function x() {
    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  }
  return x() + x() + x() + x();
}
export function wK(x) {
  return /^([0-9][0-9]?%$)|(^100%$)/.test(x);
}
export function ng(x) {
  var U = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return `${x}`.replace(/(?:\\)?\[([^[\]]+)]/g, function (B, F) {
    if (B.charAt(0) === "\\") {
      return B.substr(1, B.length - 1);
    } else if (U[F] === undefined) {
      return "";
    } else {
      return U[F];
    }
  });
}
export function Nw(x, U) {
  return v.sanitize(x, U);
}