/* Webpack Module: 3 (scripts) */
export default function (I) {
  /* Webpack Export: exports = function () {...} */
  if (typeof I == "string" || typeof I == "number") {
    return I;
  }
  var y = "";
  for (var w in I) {
    var E = "";
    if (I.hasOwnProperty(w)) {
      E =
        w +
        "=" +
        (E =
          typeof I[w] == "string"
            ? encodeURIComponent(I[w])
            : typeof I[w] == "number"
            ? I[w]
            : encodeURIComponent(JSON.stringify(I[w])));
      if (y.length) {
        E = "&" + E;
      }
      y += E;
    }
  }
  return y;
}
