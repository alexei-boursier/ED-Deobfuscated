import * as t from "35005";
import * as b from "22104";
import * as M from "1702";
import * as v from "47293";
import * as C from "60614";
import * as w from "52190";
import * as S from "50206";
var E = String;
var O = t("JSON", "stringify");
var x = M(/./.exec);
var U = M("".charAt);
var B = M("".charCodeAt);
var F = M("".replace);
var Z = M(1 .toString);
var X = /[\uD800-\uDFFF]/g;
var le = /^[\uD800-\uDBFF]$/;
var fe = /^[\uDC00-\uDFFF]$/;
var q = !I || v(function () {
  var W = t("Symbol")();
  return O([W]) != "[null]" || O({
    a: W
  }) != "{}" || O(Object(W)) != "{}";
});
var j = v(function () {
  return O("��") !== "\"\\udf06\\ud834\"" || O("�") !== "\"\\udead\"";
});
function G(W, Pe) {
  var Le = S(arguments);
  var he = L(Pe);
  if (C(he) || W !== undefined && !w(W)) {
    Le[1] = function (pe, re) {
      if (C(he)) {
        re = k(he, this, E(pe), re);
      }
      if (!w(re)) {
        return re;
      }
    };
    return b(O, null, Le);
  }
}
function se(W, Pe, Le) {
  var he = U(Le, Pe - 1);
  var pe = U(Le, Pe + 1);
  if (x(le, W) && !x(fe, pe) || x(fe, W) && !x(le, he)) {
    return "\\u" + Z(B(W, 0), 16);
  } else {
    return W;
  }
}
if (O) {
  i({
    target: "JSON",
    stat: true,
    arity: 3,
    forced: q || j
  }, {
    stringify: function (Pe, Le, he) {
      var pe = S(arguments);
      var re = b(q ? G : O, null, pe);
      if (j && typeof re == "string") {
        return F(re, X, se);
      } else {
        return re;
      }
    }
  });
}