Object.defineProperty(__webpack_exports__, "__esModule", {
  value: true
});
__webpack_exports__.generate = undefined;
function b(U, B) {
  return U << B | U >>> 32 - B;
}
function k(U, B) {
  var F;
  var Z;
  var X;
  var le;
  var fe;
  X = U & 2147483648;
  le = B & 2147483648;
  fe = (U & 1073741823) + (B & 1073741823);
  if ((F = U & 1073741824) & (Z = B & 1073741824)) {
    return fe ^ 2147483648 ^ X ^ le;
  } else if (F | Z) {
    if (fe & 1073741824) {
      return fe ^ 3221225472 ^ X ^ le;
    } else {
      return fe ^ 1073741824 ^ X ^ le;
    }
  } else {
    return fe ^ X ^ le;
  }
}
function S(U, B, F, Z, X, le, fe) {
  U = k(U, k(k(function M(U, B, F) {
    return U & B | ~U & F;
  }(B, F, Z), X), fe));
  return k(b(U, le), B);
}
function L(U, B, F, Z, X, le, fe) {
  U = k(U, k(k(function v(U, B, F) {
    return U & F | B & ~F;
  }(B, F, Z), X), fe));
  return k(b(U, le), B);
}
function I(U, B, F, Z, X, le, fe) {
  U = k(U, k(k(function C(U, B, F) {
    return U ^ B ^ F;
  }(B, F, Z), X), fe));
  return k(b(U, le), B);
}
function E(U, B, F, Z, X, le, fe) {
  U = k(U, k(k(function w(U, B, F) {
    return B ^ (U | ~F);
  }(B, F, Z), X), fe));
  return k(b(U, le), B);
}
function x(U) {
  var X;
  var B = "";
  var F = "";
  for (X = 0; X <= 3; X++) {
    B += (F = "0" + (U >>> X * 8 & 255).toString(16)).substr(F.length - 2, 2);
  }
  return B;
}
__webpack_exports__.generate = function t(U) {
  var B;
  var F;
  var Z;
  var X;
  var le;
  var fe;
  var q;
  var j;
  var G;
  var se;
  B = function O(U) {
    for (var B, F = U.length, Z = F + 8, le = ((Z - Z % 64) / 64 + 1) * 16, fe = Array(le - 1), q = 0, j = 0; j < F;) {
      q = j % 4 * 8;
      fe[B = (j - j % 4) / 4] = fe[B] | U.charCodeAt(j) << q;
      j++;
    }
    fe[B = (j - j % 4) / 4] = fe[B] | 128 << (q = j % 4 * 8);
    fe[le - 2] = F << 3;
    fe[le - 1] = F >>> 29;
    return fe;
  }(i.utf8.encode(U));
  q = 1732584193;
  j = 4023233417;
  G = 2562383102;
  se = 271733878;
  F = 0;
  for (; F < B.length; F += 16) {
    Z = q;
    X = j;
    le = G;
    fe = se;
    q = S(q, j, G, se, B[F + 0], 7, 3614090360);
    se = S(se, q, j, G, B[F + 1], 12, 3905402710);
    G = S(G, se, q, j, B[F + 2], 17, 606105819);
    j = S(j, G, se, q, B[F + 3], 22, 3250441966);
    q = S(q, j, G, se, B[F + 4], 7, 4118548399);
    se = S(se, q, j, G, B[F + 5], 12, 1200080426);
    G = S(G, se, q, j, B[F + 6], 17, 2821735955);
    j = S(j, G, se, q, B[F + 7], 22, 4249261313);
    q = S(q, j, G, se, B[F + 8], 7, 1770035416);
    se = S(se, q, j, G, B[F + 9], 12, 2336552879);
    G = S(G, se, q, j, B[F + 10], 17, 4294925233);
    j = S(j, G, se, q, B[F + 11], 22, 2304563134);
    q = S(q, j, G, se, B[F + 12], 7, 1804603682);
    se = S(se, q, j, G, B[F + 13], 12, 4254626195);
    G = S(G, se, q, j, B[F + 14], 17, 2792965006);
    q = L(q, j = S(j, G, se, q, B[F + 15], 22, 1236535329), G, se, B[F + 1], 5, 4129170786);
    se = L(se, q, j, G, B[F + 6], 9, 3225465664);
    G = L(G, se, q, j, B[F + 11], 14, 643717713);
    j = L(j, G, se, q, B[F + 0], 20, 3921069994);
    q = L(q, j, G, se, B[F + 5], 5, 3593408605);
    se = L(se, q, j, G, B[F + 10], 9, 38016083);
    G = L(G, se, q, j, B[F + 15], 14, 3634488961);
    j = L(j, G, se, q, B[F + 4], 20, 3889429448);
    q = L(q, j, G, se, B[F + 9], 5, 568446438);
    se = L(se, q, j, G, B[F + 14], 9, 3275163606);
    G = L(G, se, q, j, B[F + 3], 14, 4107603335);
    j = L(j, G, se, q, B[F + 8], 20, 1163531501);
    q = L(q, j, G, se, B[F + 13], 5, 2850285829);
    se = L(se, q, j, G, B[F + 2], 9, 4243563512);
    G = L(G, se, q, j, B[F + 7], 14, 1735328473);
    q = I(q, j = L(j, G, se, q, B[F + 12], 20, 2368359562), G, se, B[F + 5], 4, 4294588738);
    se = I(se, q, j, G, B[F + 8], 11, 2272392833);
    G = I(G, se, q, j, B[F + 11], 16, 1839030562);
    j = I(j, G, se, q, B[F + 14], 23, 4259657740);
    q = I(q, j, G, se, B[F + 1], 4, 2763975236);
    se = I(se, q, j, G, B[F + 4], 11, 1272893353);
    G = I(G, se, q, j, B[F + 7], 16, 4139469664);
    j = I(j, G, se, q, B[F + 10], 23, 3200236656);
    q = I(q, j, G, se, B[F + 13], 4, 681279174);
    se = I(se, q, j, G, B[F + 0], 11, 3936430074);
    G = I(G, se, q, j, B[F + 3], 16, 3572445317);
    j = I(j, G, se, q, B[F + 6], 23, 76029189);
    q = I(q, j, G, se, B[F + 9], 4, 3654602809);
    se = I(se, q, j, G, B[F + 12], 11, 3873151461);
    G = I(G, se, q, j, B[F + 15], 16, 530742520);
    q = E(q, j = I(j, G, se, q, B[F + 2], 23, 3299628645), G, se, B[F + 0], 6, 4096336452);
    se = E(se, q, j, G, B[F + 7], 10, 1126891415);
    G = E(G, se, q, j, B[F + 14], 15, 2878612391);
    j = E(j, G, se, q, B[F + 5], 21, 4237533241);
    q = E(q, j, G, se, B[F + 12], 6, 1700485571);
    se = E(se, q, j, G, B[F + 3], 10, 2399980690);
    G = E(G, se, q, j, B[F + 10], 15, 4293915773);
    j = E(j, G, se, q, B[F + 1], 21, 2240044497);
    q = E(q, j, G, se, B[F + 8], 6, 1873313359);
    se = E(se, q, j, G, B[F + 15], 10, 4264355552);
    G = E(G, se, q, j, B[F + 6], 15, 2734768916);
    j = E(j, G, se, q, B[F + 13], 21, 1309151649);
    q = E(q, j, G, se, B[F + 4], 6, 4149444226);
    se = E(se, q, j, G, B[F + 11], 10, 3174756917);
    G = E(G, se, q, j, B[F + 2], 15, 718787259);
    j = E(j, G, se, q, B[F + 9], 21, 3951481745);
    q = k(q, Z);
    j = k(j, X);
    G = k(G, le);
    se = k(se, fe);
  }
  return x(q) + x(j) + x(G) + x(se);
};