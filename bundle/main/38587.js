require("66992");
require("41539");
require("78783");
require("4129");
require("33948");
require("82526");
require("41817");
var w = new WeakMap();
export var mc = Symbol("rootInstance");
export function IU(O) {
  w.set(O, true);
}
export function dU(O) {
  return O === mc;
}
export function _v(O) {
  return w.has(O);
}