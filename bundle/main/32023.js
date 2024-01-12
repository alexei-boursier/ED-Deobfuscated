import * as M from "41340";
var C = t("".indexOf);
i({
  target: "String",
  proto: true,
  forced: !v("includes")
}, {
  includes: function (S) {
    return !!~C(M(k(this)), M(b(S)), arguments.length > 1 ? arguments[1] : undefined);
  }
});