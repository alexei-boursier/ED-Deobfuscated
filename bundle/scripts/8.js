var y = __webpack_require__(1);
var w = __webpack_require__(5);
(function (E, R) {
  "use strict";

  if (!E.setImmediate) {
    var C;
    var N = 1;
    var x = {};
    var S = false;
    var s = E.document;
    var u = Object.getPrototypeOf && Object.getPrototypeOf(E);
    u = u && u.setTimeout ? u : E;
    if ({}.toString.call(E.process) === "[object process]") {
      C = function (M) {
        w.nextTick(function () {
          l(M);
        });
      };
    } else if (function () {
      if (E.postMessage && !E.importScripts) {
        var M = true;
        var O = E.onmessage;
        E.onmessage = function () {
          M = false;
        };
        E.postMessage("", "*");
        E.onmessage = O;
        return M;
      }
    }()) {
      M = "setImmediate$" + Math.random() + "$";
      O = function (q) {
        if (q.source === E && typeof q.data == "string" && q.data.indexOf(M) === 0) {
          l(+q.data.slice(M.length));
        }
      };
      if (E.addEventListener) {
        E.addEventListener("message", O, false);
      } else {
        E.attachEvent("onmessage", O);
      }
      C = function (q) {
        E.postMessage(M + q, "*");
      };
    } else if (E.MessageChannel) {
      (function () {
        var M = new MessageChannel();
        M.port1.onmessage = function (O) {
          l(O.data);
        };
        C = function (O) {
          M.port2.postMessage(O);
        };
      })();
    } else if (s && "onreadystatechange" in s.createElement("script")) {
      (function () {
        var M = s.documentElement;
        C = function (O) {
          var q = s.createElement("script");
          q.onreadystatechange = function () {
            l(O);
            q.onreadystatechange = null;
            M.removeChild(q);
            q = null;
          };
          M.appendChild(q);
        };
      })();
    } else {
      C = function (M) {
        setTimeout(l, 0, M);
      };
    }
    u.setImmediate = function (M) {
      if (typeof M != "function") {
        M = new Function("" + M);
      }
      for (var O = new Array(arguments.length - 1), q = 0; q < O.length; q++) {
        O[q] = arguments[q + 1];
      }
      var ee = {
        callback: M,
        args: O
      };
      x[N] = ee;
      C(N);
      return N++;
    };
    u.clearImmediate = m;
  }
  var M;
  var O;
  function m(M) {
    delete x[M];
  }
  function l(M) {
    if (S) {
      setTimeout(l, 0, M);
    } else {
      var O = x[M];
      if (O) {
        S = true;
        try {
          (function (q) {
            var ee = q.callback;
            var G = q.args;
            switch (G.length) {
              case 0:
                ee();
                break;
              case 1:
                ee(G[0]);
                break;
              case 2:
                ee(G[0], G[1]);
                break;
              case 3:
                ee(G[0], G[1], G[2]);
                break;
              default:
                ee.apply(undefined, G);
            }
          })(O);
        } finally {
          m(M);
          S = false;
        }
      }
    }
  }
})(typeof self === "undefined" ? y === undefined ? this : y : self);