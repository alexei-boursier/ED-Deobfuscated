var i = require("28710").charAt;
import * as b from "29909";
import * as M from "76178";
var v = "String Iterator";
var C = b.set;
var w = b.getterFor(v);
k(String, "String", function (S) {
  C(this, {
    type: v,
    string: t(S),
    index: 0
  });
}, function () {
  var O;
  var L = w(this);
  var I = L.string;
  var E = L.index;
  if (E >= I.length) {
    return M(undefined, true);
  } else {
    O = i(I, E);
    L.index += O.length;
    return M(O, false);
  }
});