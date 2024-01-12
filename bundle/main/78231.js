const b = typeof atob == "function";
const k = typeof btoa == "function";
const M = typeof Buffer == "function";
const v = typeof TextDecoder == "function" ? new TextDecoder() : undefined;
const C = typeof TextEncoder == "function" ? new TextEncoder() : undefined;
const S = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
const L = (De => {
  let Qe = {};
  De.forEach((It, Yt) => Qe[It] = Yt);
  return Qe;
})(S);
const I = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const E = String.fromCharCode.bind(String);
const O = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (De, Qe = It => It) => new Uint8Array(Array.prototype.slice.call(De, 0).map(Qe));
const x = De => De.replace(/=/g, "").replace(/[+\/]/g, Qe => Qe == "+" ? "-" : "_");
const U = De => De.replace(/[^A-Za-z0-9\+\/]/g, "");
const B = De => {
  let Qe;
  let It;
  let Yt;
  let Dn;
  let Et = "";
  const lt = De.length % 3;
  for (let et = 0; et < De.length;) {
    if ((It = De.charCodeAt(et++)) > 255 || (Yt = De.charCodeAt(et++)) > 255 || (Dn = De.charCodeAt(et++)) > 255) {
      throw new TypeError("invalid character found");
    }
    Qe = It << 16 | Yt << 8 | Dn;
    Et += S[Qe >> 18 & 63] + S[Qe >> 12 & 63] + S[Qe >> 6 & 63] + S[Qe & 63];
  }
  if (lt) {
    return Et.slice(0, lt - 3) + "===".substring(lt);
  } else {
    return Et;
  }
};
const F = k ? De => btoa(De) : M ? De => Buffer.from(De, "binary").toString("base64") : B;
const Z = M ? De => Buffer.from(De).toString("base64") : De => {
  let It = [];
  for (let Yt = 0, Dn = De.length; Yt < Dn; Yt += 4096) {
    It.push(E.apply(null, De.subarray(Yt, Yt + 4096)));
  }
  return F(It.join(""));
};
const X = (De, Qe = false) => Qe ? x(Z(De)) : Z(De);
const le = De => {
  if (De.length < 2) {
    if ((Qe = De.charCodeAt(0)) < 128) {
      return De;
    } else if (Qe < 2048) {
      return E(Qe >>> 6 | 192) + E(Qe & 63 | 128);
    } else {
      return E(Qe >>> 12 & 15 | 224) + E(Qe >>> 6 & 63 | 128) + E(Qe & 63 | 128);
    }
  }
  var Qe = 65536 + (De.charCodeAt(0) - 55296) * 1024 + (De.charCodeAt(1) - 56320);
  return E(Qe >>> 18 & 7 | 240) + E(Qe >>> 12 & 63 | 128) + E(Qe >>> 6 & 63 | 128) + E(Qe & 63 | 128);
};
const fe = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
const q = De => De.replace(fe, le);
const j = M ? De => Buffer.from(De, "utf8").toString("base64") : C ? De => Z(C.encode(De)) : De => F(q(De));
export const cv = (De, Qe = false) => Qe ? x(j(De)) : j(De);
const se = De => cv(De, true);
const W = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const Pe = De => {
  switch (De.length) {
    case 4:
      var It = ((De.charCodeAt(0) & 7) << 18 | (De.charCodeAt(1) & 63) << 12 | (De.charCodeAt(2) & 63) << 6 | De.charCodeAt(3) & 63) - 65536;
      return E(55296 + (It >>> 10)) + E(56320 + (It & 1023));
    case 3:
      return E((De.charCodeAt(0) & 15) << 12 | (De.charCodeAt(1) & 63) << 6 | De.charCodeAt(2) & 63);
    default:
      return E((De.charCodeAt(0) & 31) << 6 | De.charCodeAt(1) & 63);
  }
};
const Le = De => De.replace(W, Pe);
const he = De => {
  De = De.replace(/\s+/g, "");
  if (!I.test(De)) {
    throw new TypeError("malformed base64.");
  }
  De += "==".slice(2 - (De.length & 3));
  let Qe;
  let Yt;
  let Dn;
  let It = "";
  for (let Et = 0; Et < De.length;) {
    Qe = L[De.charAt(Et++)] << 18 | L[De.charAt(Et++)] << 12 | (Yt = L[De.charAt(Et++)]) << 6 | (Dn = L[De.charAt(Et++)]);
    It += Yt === 64 ? E(Qe >> 16 & 255) : Dn === 64 ? E(Qe >> 16 & 255, Qe >> 8 & 255) : E(Qe >> 16 & 255, Qe >> 8 & 255, Qe & 255);
  }
  return It;
};
const pe = b ? De => atob(U(De)) : M ? De => Buffer.from(De, "base64").toString("binary") : he;
const re = M ? De => O(Buffer.from(De, "base64")) : De => O(pe(De), Qe => Qe.charCodeAt(0));
const Re = De => re(Ue(De));
const Ge = M ? De => Buffer.from(De, "base64").toString("utf8") : v ? De => v.decode(re(De)) : De => Le(pe(De));
const Ue = De => U(De.replace(/[-_]/g, Qe => Qe == "-" ? "+" : "/"));
const ot = De => Ge(Ue(De));
const rt = De => ({
  value: De,
  enumerable: false,
  writable: true,
  configurable: true
});
const Oe = function () {
  const De = (Qe, It) => Object.defineProperty(String.prototype, Qe, rt(It));
  De("fromBase64", function () {
    return ot(this);
  });
  De("toBase64", function (Qe) {
    return cv(this, Qe);
  });
  De("toBase64URI", function () {
    return cv(this, true);
  });
  De("toBase64URL", function () {
    return cv(this, true);
  });
  De("toUint8Array", function () {
    return Re(this);
  });
};
const Ee = function () {
  const De = (Qe, It) => Object.defineProperty(Uint8Array.prototype, Qe, rt(It));
  De("toBase64", function (Qe) {
    return X(this, Qe);
  });
  De("toBase64URI", function () {
    return X(this, true);
  });
  De("toBase64URL", function () {
    return X(this, true);
  });
};
export const DS = {
  version: "3.7.3",
  VERSION: "3.7.3",
  atob: pe,
  atobPolyfill: he,
  btoa: F,
  btoaPolyfill: B,
  fromBase64: ot,
  toBase64: cv,
  encode: cv,
  encodeURI: se,
  encodeURL: se,
  utob: q,
  btou: Le,
  decode: ot,
  isValid: De => {
    if (typeof De != "string") {
      return false;
    }
    const Qe = De.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(Qe) || !/[^\s0-9a-zA-Z\-_]/.test(Qe);
  },
  fromUint8Array: X,
  toUint8Array: Re,
  extendString: Oe,
  extendUint8Array: Ee,
  extendBuiltins: () => {
    Oe();
    Ee();
  }
};