require("92222");
require("74916");
require("47042");
require("43371");
var S;
import * as M from "6868";
export function eb(U, B) {
  (0, v._l)(B, function (F, Z) {
    if ((0, M.o8)(U[Z])) {
      U[Z] = F;
    }
  });
  return U;
}
export function TH(U) {
  var F = /^([a-zA-Z]{2})-([a-zA-Z]{2})$/.exec(U);
  if (F) {
    return `${F[1].toLowerCase()}-${F[2].toUpperCase()}`;
  } else {
    return U;
  }
}
export function Vn(U) {
  if ((0, M.$K)(U)) {
    (0, C.vU)((0, w.e)(S ||= function L(U, B) {
      B ||= U.slice(0);
      return Object.freeze(Object.defineProperties(U, {
        raw: {
          value: Object.freeze(B)
        }
      }));
    }(["Language with code \"", "\" was not found. You should register particular language \n    before using it. Read more about this issue at: https://docs.handsontable.com/i18n/missing-language-code."], ["Language with code \"", "\" was not found. You should register particular language\\x20\n    before using it. Read more about this issue at: https://docs.handsontable.com/i18n/missing-language-code."]), U));
  }
}