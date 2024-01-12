var C;
var w;
import * as i from "17854";
import * as t from "88113";
var b = i.process;
var k = i.Deno;
var M = b && b.versions || k && k.version;
var v = M && M.v8;
if (v) {
  w = (C = v.split("."))[0] > 0 && C[0] < 4 ? 1 : +(C[0] + C[1]);
}
if (!w && t && (!(C = t.match(/Edge\/(\d+)/)) || C[1] >= 74) && (C = t.match(/Chrome\/(\d+)/))) {
  w = +C[1];
}
__webpack_module__.exports = w;