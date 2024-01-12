Object.defineProperty(__webpack_exports__, "__esModule", {
  value: true
});
__webpack_exports__.utf8 = undefined;
__webpack_exports__.utf8 = {
  encode: function a(t) {
    t = t.replace(/\r\n/g, "\n");
    for (var b = "", k = 0; k < t.length; k++) {
      var M = t.charCodeAt(k);
      if (M < 128) {
        b += String.fromCharCode(M);
      } else if (M > 127 && M < 2048) {
        b += String.fromCharCode(M >> 6 | 192);
        b += String.fromCharCode(M & 63 | 128);
      } else {
        b += String.fromCharCode(M >> 12 | 224);
        b += String.fromCharCode(M >> 6 & 63 | 128);
        b += String.fromCharCode(M & 63 | 128);
      }
    }
    return b;
  },
  decode: function i(t) {
    for (var b = "", k = 0, M = 0, v = 0, C = 0; k < t.length;) {
      if ((M = t.charCodeAt(k)) < 128) {
        b += String.fromCharCode(M);
        k++;
      } else if (M > 191 && M < 224) {
        v = t.charCodeAt(k + 1);
        b += String.fromCharCode((M & 31) << 6 | v & 63);
        k += 2;
      } else {
        v = t.charCodeAt(k + 1);
        C = t.charCodeAt(k + 2);
        b += String.fromCharCode((M & 15) << 12 | (v & 63) << 6 | C & 63);
        k += 3;
      }
    }
    return b;
  }
};