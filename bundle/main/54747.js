import * as i from "17854";
import * as t from "48324";
import * as k from "18533";
function v(w) {
  if (w && w.forEach !== k) {
    try {
      M(w, "forEach", k);
    } catch {
      w.forEach = k;
    }
  }
}
for (var C in t) {
  if (t[C]) {
    v(i[C] && i[C].prototype);
  }
}
v(b);