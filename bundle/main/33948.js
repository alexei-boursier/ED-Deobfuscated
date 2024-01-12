import * as i from "17854";
import * as t from "48324";
import * as k from "66992";
import * as M from "68880";
import * as v from "5112";
var C = v("iterator");
var w = v("toStringTag");
var S = k.values;
function L(E, O) {
  if (E) {
    if (E[C] !== S) {
      try {
        M(E, C, S);
      } catch {
        E[C] = S;
      }
    }
    if (!E[w]) {
      M(E, w, O);
    }
    if (t[O]) {
      for (var x in k) {
        if (E[x] !== k[x]) {
          try {
            M(E, x, k[x]);
          } catch {
            E[x] = k[x];
          }
        }
      }
    }
  }
}
for (var I in t) {
  L(i[I] && i[I].prototype, I);
}
L(b, "DOMTokenList");