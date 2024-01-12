import * as t from "17854";
var k = require("17152")(t.setInterval, true);
i({
  global: true,
  bind: true,
  forced: t.setInterval !== k
}, {
  setInterval: k
});