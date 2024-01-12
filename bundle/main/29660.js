import * as k from "25181";
i({
  target: "Object",
  stat: true,
  forced: !t || b(function () {
    k.f(1);
  })
}, {
  getOwnPropertySymbols: function (w) {
    var S = k.f;
    if (S) {
      return S(M(w));
    } else {
      return [];
    }
  }
});