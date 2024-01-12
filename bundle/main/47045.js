import * as i from "56339";
__webpack_module__.exports = function (b, k, M) {
  if (M.get) {
    i(M.get, k, {
      getter: true
    });
  }
  if (M.set) {
    i(M.set, k, {
      setter: true
    });
  }
  return t.f(b, k, M);
};