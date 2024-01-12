var a;
var t;
a = function (b) {
  Array.prototype.map ||= function (B) {
    "use strict";

    if (this == null) {
      throw new TypeError();
    }
    var F = Object(this);
    var Z = F.length >>> 0;
    if (typeof B != "function") {
      throw new TypeError();
    }
    for (var X = new Array(Z), le = arguments.length >= 2 ? arguments[1] : undefined, fe = 0; fe < Z; fe++) {
      if (fe in F) {
        X[fe] = B.call(le, F[fe], fe, F);
      }
    }
    return X;
  };
  var k = "A".charCodeAt(0);
  var M = "Z".charCodeAt(0);
  function v(B) {
    return (B = (B = B.toUpperCase()).substr(4) + B.substr(0, 4)).split("").map(function (F) {
      var Z = F.charCodeAt(0);
      if (Z >= k && Z <= M) {
        return Z - k + 10;
      } else {
        return F;
      }
    }).join("");
  }
  function C(B) {
    for (var Z, F = B; F.length > 2;) {
      Z = F.slice(0, 9);
      F = parseInt(Z, 10) % 97 + F.slice(Z.length);
    }
    return parseInt(F, 10) % 97;
  }
  function S(B) {
    return B.replace(O, "").toUpperCase();
  }
  function L(B, F, Z, X) {
    this.countryCode = B;
    this.length = F;
    this.structure = Z;
    this.example = X;
  }
  L.prototype._regex = function () {
    return this._cachedRegex ||= function w(B) {
      var F = B.match(/(.{3})/g).map(function (Z) {
        var X;
        var le = Z.slice(0, 1);
        var fe = parseInt(Z.slice(1), 10);
        switch (le) {
          case "A":
            X = "0-9A-Za-z";
            break;
          case "B":
            X = "0-9A-Z";
            break;
          case "C":
            X = "A-Za-z";
            break;
          case "F":
            X = "0-9";
            break;
          case "L":
            X = "a-z";
            break;
          case "U":
            X = "A-Z";
            break;
          case "W":
            X = "0-9a-z";
        }
        return "([" + X + "]{" + fe + "})";
      });
      return new RegExp("^" + F.join("") + "$");
    }(this.structure);
  };
  L.prototype.isValid = function (B) {
    return this.length == B.length && this.countryCode === B.slice(0, 2) && this._regex().test(B.slice(4)) && C(v(B)) == 1;
  };
  L.prototype.toBBAN = function (B, F) {
    return this._regex().exec(B.slice(4)).slice(1).join(F);
  };
  L.prototype.fromBBAN = function (B) {
    if (!this.isValidBBAN(B)) {
      throw new Error("Invalid BBAN");
    }
    var Z = ("0" + (98 - C(v(this.countryCode + "00" + B)))).slice(-2);
    return this.countryCode + Z + B;
  };
  L.prototype.isValidBBAN = function (B) {
    return this.length - 4 == B.length && this._regex().test(B);
  };
  var I = {};
  function E(B) {
    I[B.countryCode] = B;
  }
  E(new L("AD", 24, "F04F04A12", "AD1200012030200359100100"));
  E(new L("AE", 23, "F03F16", "AE070331234567890123456"));
  E(new L("AL", 28, "F08A16", "AL47212110090000000235698741"));
  E(new L("AT", 20, "F05F11", "AT611904300234573201"));
  E(new L("AZ", 28, "U04A20", "AZ21NABZ00000000137010001944"));
  E(new L("BA", 20, "F03F03F08F02", "BA391290079401028494"));
  E(new L("BE", 16, "F03F07F02", "BE68539007547034"));
  E(new L("BG", 22, "U04F04F02A08", "BG80BNBG96611020345678"));
  E(new L("BH", 22, "U04A14", "BH67BMAG00001299123456"));
  E(new L("BR", 29, "F08F05F10U01A01", "BR9700360305000010009795493P1"));
  E(new L("BY", 28, "A04F04A16", "BY13NBRB3600900000002Z00AB00"));
  E(new L("CH", 21, "F05A12", "CH9300762011623852957"));
  E(new L("CR", 22, "F04F14", "CR72012300000171549015"));
  E(new L("CY", 28, "F03F05A16", "CY17002001280000001200527600"));
  E(new L("CZ", 24, "F04F06F10", "CZ6508000000192000145399"));
  E(new L("DE", 22, "F08F10", "DE89370400440532013000"));
  E(new L("DK", 18, "F04F09F01", "DK5000400440116243"));
  E(new L("DO", 28, "U04F20", "DO28BAGR00000001212453611324"));
  E(new L("EE", 20, "F02F02F11F01", "EE382200221020145685"));
  E(new L("EG", 29, "F04F04F17", "EG800002000156789012345180002"));
  E(new L("ES", 24, "F04F04F01F01F10", "ES9121000418450200051332"));
  E(new L("FI", 18, "F06F07F01", "FI2112345600000785"));
  E(new L("FO", 18, "F04F09F01", "FO6264600001631634"));
  E(new L("FR", 27, "F05F05A11F02", "FR1420041010050500013M02606"));
  E(new L("GB", 22, "U04F06F08", "GB29NWBK60161331926819"));
  E(new L("GE", 22, "U02F16", "GE29NB0000000101904917"));
  E(new L("GI", 23, "U04A15", "GI75NWBK000000007099453"));
  E(new L("GL", 18, "F04F09F01", "GL8964710001000206"));
  E(new L("GR", 27, "F03F04A16", "GR1601101250000000012300695"));
  E(new L("GT", 28, "A04A20", "GT82TRAJ01020000001210029690"));
  E(new L("HR", 21, "F07F10", "HR1210010051863000160"));
  E(new L("HU", 28, "F03F04F01F15F01", "HU42117730161111101800000000"));
  E(new L("IE", 22, "U04F06F08", "IE29AIBK93115212345678"));
  E(new L("IL", 23, "F03F03F13", "IL620108000000099999999"));
  E(new L("IS", 26, "F04F02F06F10", "IS140159260076545510730339"));
  E(new L("IT", 27, "U01F05F05A12", "IT60X0542811101000000123456"));
  E(new L("IQ", 23, "U04F03A12", "IQ98NBIQ850123456789012"));
  E(new L("JO", 30, "A04F22", "JO15AAAA1234567890123456789012"));
  E(new L("KW", 30, "U04A22", "KW81CBKU0000000000001234560101"));
  E(new L("KZ", 20, "F03A13", "KZ86125KZT5004100100"));
  E(new L("LB", 28, "F04A20", "LB62099900000001001901229114"));
  E(new L("LC", 32, "U04F24", "LC07HEMM000100010012001200013015"));
  E(new L("LI", 21, "F05A12", "LI21088100002324013AA"));
  E(new L("LT", 20, "F05F11", "LT121000011101001000"));
  E(new L("LU", 20, "F03A13", "LU280019400644750000"));
  E(new L("LV", 21, "U04A13", "LV80BANK0000435195001"));
  E(new L("MC", 27, "F05F05A11F02", "MC5811222000010123456789030"));
  E(new L("MD", 24, "U02A18", "MD24AG000225100013104168"));
  E(new L("ME", 22, "F03F13F02", "ME25505000012345678951"));
  E(new L("MK", 19, "F03A10F02", "MK07250120000058984"));
  E(new L("MR", 27, "F05F05F11F02", "MR1300020001010000123456753"));
  E(new L("MT", 31, "U04F05A18", "MT84MALT011000012345MTLCAST001S"));
  E(new L("MU", 30, "U04F02F02F12F03U03", "MU17BOMM0101101030300200000MUR"));
  E(new L("NL", 18, "U04F10", "NL91ABNA0417164300"));
  E(new L("NO", 15, "F04F06F01", "NO9386011117947"));
  E(new L("PK", 24, "U04A16", "PK36SCBL0000001123456702"));
  E(new L("PL", 28, "F08F16", "PL61109010140000071219812874"));
  E(new L("PS", 29, "U04A21", "PS92PALS000000000400123456702"));
  E(new L("PT", 25, "F04F04F11F02", "PT50000201231234567890154"));
  E(new L("QA", 29, "U04A21", "QA30AAAA123456789012345678901"));
  E(new L("RO", 24, "U04A16", "RO49AAAA1B31007593840000"));
  E(new L("RS", 22, "F03F13F02", "RS35260005601001611379"));
  E(new L("SA", 24, "F02A18", "SA0380000000608010167519"));
  E(new L("SC", 31, "U04F04F16U03", "SC18SSCB11010000000000001497USD"));
  E(new L("SE", 24, "F03F16F01", "SE4550000000058398257466"));
  E(new L("SI", 19, "F05F08F02", "SI56263300012039086"));
  E(new L("SK", 24, "F04F06F10", "SK3112000000198742637541"));
  E(new L("SM", 27, "U01F05F05A12", "SM86U0322509800000000270100"));
  E(new L("ST", 25, "F08F11F02", "ST68000100010051845310112"));
  E(new L("SV", 28, "U04F20", "SV62CENR00000000000000700025"));
  E(new L("TL", 23, "F03F14F02", "TL380080012345678910157"));
  E(new L("TN", 24, "F02F03F13F02", "TN5910006035183598478831"));
  E(new L("TR", 26, "F05F01A16", "TR330006100519786457841326"));
  E(new L("UA", 29, "F25", "UA511234567890123456789012345"));
  E(new L("VA", 22, "F18", "VA59001123000012345678"));
  E(new L("VG", 24, "U04F16", "VG96VPVG0000012345678901"));
  E(new L("XK", 20, "F04F10F02", "XK051212012345678906"));
  E(new L("AO", 25, "F21", "AO69123456789012345678901"));
  E(new L("BF", 27, "F23", "BF2312345678901234567890123"));
  E(new L("BI", 16, "F12", "BI41123456789012"));
  E(new L("BJ", 28, "F24", "BJ39123456789012345678901234"));
  E(new L("CI", 28, "U02F22", "CI70CI1234567890123456789012"));
  E(new L("CM", 27, "F23", "CM9012345678901234567890123"));
  E(new L("CV", 25, "F21", "CV30123456789012345678901"));
  E(new L("DZ", 24, "F20", "DZ8612345678901234567890"));
  E(new L("IR", 26, "F22", "IR861234568790123456789012"));
  E(new L("MG", 27, "F23", "MG1812345678901234567890123"));
  E(new L("ML", 28, "U01F23", "ML15A12345678901234567890123"));
  E(new L("MZ", 25, "F21", "MZ25123456789012345678901"));
  E(new L("SN", 28, "U01F23", "SN52A12345678901234567890123"));
  E(new L("GF", 27, "F05F05A11F02", "GF121234512345123456789AB13"));
  E(new L("GP", 27, "F05F05A11F02", "GP791234512345123456789AB13"));
  E(new L("MQ", 27, "F05F05A11F02", "MQ221234512345123456789AB13"));
  E(new L("RE", 27, "F05F05A11F02", "RE131234512345123456789AB13"));
  E(new L("PF", 27, "F05F05A11F02", "PF281234512345123456789AB13"));
  E(new L("TF", 27, "F05F05A11F02", "TF891234512345123456789AB13"));
  E(new L("YT", 27, "F05F05A11F02", "YT021234512345123456789AB13"));
  E(new L("NC", 27, "F05F05A11F02", "NC551234512345123456789AB13"));
  E(new L("BL", 27, "F05F05A11F02", "BL391234512345123456789AB13"));
  E(new L("MF", 27, "F05F05A11F02", "MF551234512345123456789AB13"));
  E(new L("PM", 27, "F05F05A11F02", "PM071234512345123456789AB13"));
  E(new L("WF", 27, "F05F05A11F02", "WF621234512345123456789AB13"));
  var O = /[^a-zA-Z0-9]/g;
  var x = /(.{4})(?!$)/g;
  function U(B) {
    return typeof B == "string" || B instanceof String;
  }
  b.isValid = function (B) {
    if (!U(B)) {
      return false;
    }
    B = S(B);
    var F = I[B.slice(0, 2)];
    return !!F && F.isValid(B);
  };
  b.toBBAN = function (B, F) {
    if (typeof F === "undefined") {
      F = " ";
    }
    B = S(B);
    var Z = I[B.slice(0, 2)];
    if (!Z) {
      throw new Error("No country with code " + B.slice(0, 2));
    }
    return Z.toBBAN(B, F);
  };
  b.fromBBAN = function (B, F) {
    var Z = I[B];
    if (!Z) {
      throw new Error("No country with code " + B);
    }
    return Z.fromBBAN(S(F));
  };
  b.isValidBBAN = function (B, F) {
    if (!U(F)) {
      return false;
    }
    var Z = I[B];
    return Z && Z.isValidBBAN(S(F));
  };
  b.printFormat = function (B, F) {
    if (typeof F === "undefined") {
      F = " ";
    }
    return S(B).replace(x, "$1" + F);
  };
  b.electronicFormat = S;
  b.countries = I;
};
if ((t = a.apply(__webpack_exports__, [__webpack_exports__])) !== undefined) {
  __webpack_module__.exports = t;
}