import * as t from "51223";
import * as b from "97497";
import * as k from "29909";
var M = require("3070").f;
import * as C from "76178";
var L = "Array Iterator";
var I = k.set;
var E = k.getterFor(L);
__webpack_module__.exports = v(Array, "Array", function (x, U) {
  I(this, {
    type: L,
    target: i(x),
    index: 0,
    kind: U
  });
}, function () {
  var x = E(this);
  var U = x.target;
  var B = x.kind;
  var F = x.index++;
  if (!U || F >= U.length) {
    x.target = undefined;
    return C(undefined, true);
  } else {
    return C(B == "keys" ? F : B == "values" ? U[F] : [F, U[F]], false);
  }
}, "values");
var O = b.Arguments = b.Array;
t("keys");
t("values");
t("entries");
if (!w && S && O.name !== "values") {
  try {
    M(O, "name", {
      value: "values"
    });
  } catch {}
}