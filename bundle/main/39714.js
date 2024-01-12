var i = require("76530").PROPER;
import * as k from "41340";
var C = "toString";
var S = RegExp.prototype[C];
if (M(function () {
  return S.call({
    source: "a",
    flags: "b"
  }) != "/a/b";
}) || i && S.name != C) {
  t(RegExp.prototype, C, function () {
    var O = b(this);
    return "/" + k(O.source) + "/" + k(v(O));
  }, {
    unsafe: true
  });
}