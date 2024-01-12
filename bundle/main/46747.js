import * as i from "24985";
__webpack_module__.exports = M;
var t = k("in", document.body);
function b(v, C) {
  var w = i(getComputedStyle(v).getPropertyValue(C));
  return w[0] * M(w[1], v);
}
function k(v, C) {
  var w = document.createElement("div");
  w.style.height = "128" + v;
  C.appendChild(w);
  var S = b(w, "height") / 128;
  C.removeChild(w);
  return S;
}
function M(v, C) {
  if (!v) {
    return null;
  }
  C = C || document.body;
  v = (v + "" || "px").trim().toLowerCase();
  if (C === window || C === document) {
    C = document.body;
  }
  switch (v) {
    case "%":
      return C.clientHeight / 100;
    case "ch":
    case "ex":
      return k(v, C);
    case "em":
      return b(C, "font-size");
    case "rem":
      return b(document.body, "font-size");
    case "vw":
      return window.innerWidth / 100;
    case "vh":
      return window.innerHeight / 100;
    case "vmin":
      return Math.min(window.innerWidth, window.innerHeight) / 100;
    case "vmax":
      return Math.max(window.innerWidth, window.innerHeight) / 100;
    case "in":
      return t;
    case "cm":
      return t / 2.54;
    case "mm":
      return t / 25.4;
    case "pt":
      return t / 72;
    case "pc":
      return t / 6;
    case "px":
      return 1;
  }
  var w = i(v);
  if (!isNaN(w[0]) && w[1]) {
    var S = M(w[1], C);
    if (typeof S == "number") {
      return w[0] * S;
    } else {
      return null;
    }
  }
  return null;
}