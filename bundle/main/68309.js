var t = require("76530").EXISTS;
import * as b from "1702";
var M = Function.prototype;
var v = b(M.toString);
var C = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var w = b(C.exec);
if (i && !t) {
  k(M, "name", {
    configurable: true,
    get: function () {
      try {
        return w(C, v(this))[1];
      } catch {
        return "";
      }
    }
  });
}