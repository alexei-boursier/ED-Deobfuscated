import * as v from "41340";
import * as L from "97651";
t("match", function (I, E, O) {
  return [function (U) {
    var B = C(this);
    var F = k(U) ? undefined : w(U, I);
    if (F) {
      return i(F, U, B);
    } else {
      return new RegExp(U)[I](v(B));
    }
  }, function (x) {
    var U = b(this);
    var B = v(x);
    var F = O(E, U, B);
    if (F.done) {
      return F.value;
    }
    if (!U.global) {
      return L(U, B);
    }
    var Z = U.unicode;
    U.lastIndex = 0;
    for (var fe, X = [], le = 0; (fe = L(U, B)) !== null;) {
      var q = v(fe[0]);
      X[le] = q;
      if (q === "") {
        U.lastIndex = S(B, M(U.lastIndex), Z);
      }
      le++;
    }
    if (le === 0) {
      return null;
    } else {
      return X;
    }
  }];
});