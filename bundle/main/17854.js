function xe(a) {
  return a && a.Math == Math && a;
}
__webpack_module__.exports = xe(typeof globalThis == "object" && globalThis) || xe(typeof window == "object" && window) || xe(typeof self == "object" && self) || xe(typeof global == "object" && global) || function () {
  return this;
}() || this || Function("return this")();