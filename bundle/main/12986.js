import * as t from "17854";
var b = require("20261").set;
var M = t.setImmediate ? k(b, false) : b;
i({
  global: true,
  bind: true,
  enumerable: true,
  forced: t.setImmediate !== M
}, {
  setImmediate: M
});