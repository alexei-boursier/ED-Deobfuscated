import * as t from "17854";
var k = require("17152")(t.setTimeout, true);
i({
  global: true,
  bind: true,
  forced: t.setTimeout !== k
}, {
  setTimeout: k
});