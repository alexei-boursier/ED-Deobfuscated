require("74916");
require("4723");
require("15306");
require("23157");
require("47042");
require("69600");
require("43290");
require("82772");
var S = /^(\r\n|\n\r|\r|\n)/;
var L = /^[^\t\r\n]+/;
var I = /^\t/;
export function Q(x) {
  var U = [[""]];
  if (x.length === 0) {
    return U;
  }
  for (var Z, B = 0, F = 0; x.length > 0 && Z !== x.length;) {
    Z = x.length;
    if (x.match(I)) {
      x = x.replace(I, "");
      U[F][B += 1] = "";
    } else if (x.match(S)) {
      x = x.replace(S, "");
      B = 0;
      U[F += 1] = [""];
    } else {
      var X = "";
      if (x.startsWith("\"")) {
        for (var le = 0, fe = true; fe;) {
          var q = x.slice(0, 1);
          if (q === "\"") {
            le += 1;
          }
          X += q;
          if ((x = x.slice(1)).length === 0 || x.match(/^[\t\r\n]/) && le % 2 == 0) {
            fe = false;
          }
        }
        X = X.replace(/^"/, "").replace(/"$/, "").replace(/["]*/g, function (G) {
          return new Array(Math.floor(G.length / 2)).fill("\"").join("");
        });
      } else {
        var j = x.match(L);
        x = x.slice((X = j ? j[0] : "").length);
      }
      U[F][B] = X;
    }
  }
  return U;
}
export function P(x) {
  var U;
  var B;
  var F;
  var Z;
  var le;
  var X = "";
  U = 0;
  B = x.length;
  for (; U < B; U += 1) {
    Z = x[U].length;
    F = 0;
    for (; F < Z; F += 1) {
      if (F > 0) {
        X += "\t";
      }
      if (typeof (le = x[U][F]) == "string") {
        if (le.indexOf("\n") > -1) {
          X += `"${le.replace(/"/g, "\"\"")}"`;
        } else {
          X += le;
        }
      } else {
        X += le ?? "";
      }
    }
    if (U !== B - 1) {
      X += "\n";
    }
  }
  return X;
}