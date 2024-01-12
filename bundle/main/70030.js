var F;
import * as b from "80748";
var L = "prototype";
var I = "script";
var E = C("IE_PROTO");
function O() {}
function x(X) {
  return "<" + I + ">" + X + "</" + I + ">";
}
function U(X) {
  X.write(x(""));
  X.close();
  var le = X.parentWindow.Object;
  X = null;
  return le;
}
function Z() {
  try {
    F = new ActiveXObject("htmlfile");
  } catch {}
  Z = typeof document !== "undefined" ? document.domain && F ? U(F) : function () {
    var fe;
    var X = v("iframe");
    X.style.display = "none";
    M.appendChild(X);
    X.src = String("javascript:");
    (fe = X.contentWindow.document).open();
    fe.write(x("document.F=Object"));
    fe.close();
    return fe.F;
  }() : U(F);
  for (var X = b.length; X--;) {
    delete Z[L][b[X]];
  }
  return Z();
}
k[E] = true;
__webpack_module__.exports = Object.create || function (le, fe) {
  var q;
  if (le !== null) {
    O[L] = i(le);
    q = new O();
    O[L] = null;
    q[E] = le;
  } else {
    q = Z();
  }
  if (fe === undefined) {
    return q;
  } else {
    return t.f(q, fe);
  }
};