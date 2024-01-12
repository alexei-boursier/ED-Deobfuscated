import * as k from "1702";
var I = b.Symbol;
var E = I && I.prototype;
if (t && v(I) && (!("description" in E) || I().description !== undefined)) {
  var O = {};
  function x() {
    var q = arguments.length < 1 || arguments[0] === undefined ? undefined : w(arguments[0]);
    var j = C(E, this) ? new I(q) : q === undefined ? I() : I(q);
    if (q === "") {
      O[j] = true;
    }
    return j;
  }
  L(x, I);
  x.prototype = E;
  E.constructor = x;
  var U = String(I("test")) == "Symbol(test)";
  var B = k(E.valueOf);
  var F = k(E.toString);
  var Z = /^Symbol\((.*)\)[^)]+$/;
  var X = k("".replace);
  var le = k("".slice);
  S(E, "description", {
    configurable: true,
    get: function () {
      var q = B(this);
      if (M(O, q)) {
        return "";
      }
      var j = F(q);
      var G = U ? le(j, 7, -1) : X(j, Z, "$1");
      if (G === "") {
        return undefined;
      } else {
        return G;
      }
    }
  });
  i({
    global: true,
    constructor: true,
    forced: true
  }, {
    Symbol: x
  });
}