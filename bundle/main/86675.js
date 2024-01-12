require("74916");
import * as t from "94079";
function b(se) {
  var W = {
    value: false,
    test: function (Pe, Le) {
      W.value = se(Pe, Le);
    }
  };
  return W;
}
var k = {
  chrome: b(function (G, se) {
    return /Chrome/.test(G) && /Google/.test(se);
  }),
  chromeWebKit: b(function (G) {
    return /CriOS/.test(G);
  }),
  edge: b(function (G) {
    return /Edge/.test(G);
  }),
  edgeWebKit: b(function (G) {
    return /EdgiOS/.test(G);
  }),
  firefox: b(function (G) {
    return /Firefox/.test(G);
  }),
  firefoxWebKit: b(function (G) {
    return /FxiOS/.test(G);
  }),
  ie: b(function (G) {
    return /Trident/.test(G);
  }),
  ie9: b(function () {
    return !!document.documentMode;
  }),
  mobile: b(function (G) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(G);
  }),
  safari: b(function (G, se) {
    return /Safari/.test(G) && /Apple Computer/.test(se);
  })
};
var M = {
  mac: b(function (G) {
    return /^Mac/.test(G);
  }),
  win: b(function (G) {
    return /^Win/.test(G);
  }),
  linux: b(function (G) {
    return /^Linux/.test(G);
  }),
  ios: b(function (G) {
    return /iPhone|iPad|iPod/i.test(G);
  })
};
export function i7() {
  return k.chrome.value;
}
export function E6() {
  return k.chromeWebKit.value;
}
export function vU() {
  return k.firefox.value;
}
export function iF() {
  return k.firefoxWebKit.value;
}
export function G6() {
  return k.safari.value;
}
export function un() {
  return k.edge.value;
}
export function w1() {
  return k.ie.value;
}
export function D8() {
  return k.ie9.value;
}
export function K1() {
  return k.mobile.value;
}
export function gn() {
  return M.ios.value;
}
export function L() {
  var G = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator;
  var se = G.maxTouchPoints;
  return se > 2 && M.mac.value;
}
export function uM() {
  return M.win.value;
}
export function eE() {
  return M.mac.value;
}
(function v() {
  var G = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var se = G.userAgent;
  var W = se === undefined ? navigator.userAgent : se;
  var Pe = G.vendor;
  var Le = Pe === undefined ? navigator.vendor : Pe;
  (0, t._l)(k, function (he) {
    (0, he.test)(W, Le);
  });
})();
(function C() {
  var G = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var se = G.platform;
  var W = se === undefined ? navigator.platform : se;
  (0, t._l)(M, function (Pe) {
    (0, Pe.test)(W);
  });
})();