var i;
(function (t, b, k) {
  if (t) {
    for (var S, M = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
      }, v = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
      }, C = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        "\"": "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
      }, w = {
        option: "alt",
        command: "meta",
        return: "enter",
        escape: "esc",
        plus: "+",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
      }, L = 1; L < 20; ++L) {
      M[111 + L] = "f" + L;
    }
    for (L = 0; L <= 9; ++L) {
      M[L + 96] = L.toString();
    }
    j.prototype.bind = function (G, se, W) {
      this._bindMultiple.call(this, G = G instanceof Array ? G : [G], se, W);
      return this;
    };
    j.prototype.unbind = function (G, se) {
      return this.bind.call(this, G, function () {}, se);
    };
    j.prototype.trigger = function (G, se) {
      var W = this;
      if (W._directMap[G + ":" + se]) {
        W._directMap[G + ":" + se]({}, G);
      }
      return W;
    };
    j.prototype.reset = function () {
      var G = this;
      G._callbacks = {};
      G._directMap = {};
      return G;
    };
    j.prototype.stopCallback = function (G, se) {
      if ((" " + se.className + " ").indexOf(" mousetrap ") > -1 || q(se, this.target)) {
        return false;
      }
      if ("composedPath" in G && typeof G.composedPath == "function") {
        var Pe = G.composedPath()[0];
        if (Pe !== G.target) {
          se = Pe;
        }
      }
      return se.tagName == "INPUT" || se.tagName == "SELECT" || se.tagName == "TEXTAREA" || se.isContentEditable;
    };
    j.prototype.handleKey = function () {
      var G = this;
      return G._handleKey.apply(G, arguments);
    };
    j.addKeycodes = function (G) {
      for (var se in G) {
        if (G.hasOwnProperty(se)) {
          M[se] = G[se];
        }
      }
      S = null;
    };
    j.init = function () {
      var G = j(b);
      for (var se in G) {
        if (se.charAt(0) !== "_") {
          j[se] = function (W) {
            return function () {
              return G[W].apply(G, arguments);
            };
          }(se);
        }
      }
    };
    j.init();
    t.Mousetrap = j;
    __webpack_module__.exports &&= j;
    if ((i = function () {
      return j;
    }.call(__webpack_exports__, __webpack_require__, __webpack_exports__, __webpack_module__)) !== undefined) {
      __webpack_module__.exports = i;
    }
  }
  function I(G, se, W) {
    if (G.addEventListener) {
      G.addEventListener(se, W, false);
    } else {
      G.attachEvent("on" + se, W);
    }
  }
  function E(G) {
    if (G.type == "keypress") {
      var se = String.fromCharCode(G.which);
      if (!G.shiftKey) {
        se = se.toLowerCase();
      }
      return se;
    }
    if (M[G.which]) {
      return M[G.which];
    } else if (v[G.which]) {
      return v[G.which];
    } else {
      return String.fromCharCode(G.which).toLowerCase();
    }
  }
  function O(G, se) {
    return G.sort().join(",") === se.sort().join(",");
  }
  function F(G) {
    return G == "shift" || G == "ctrl" || G == "alt" || G == "meta";
  }
  function X(G, se, W) {
    W ||= function Z() {
      if (!S) {
        S = {};
        for (var G in M) {
          if (G <= 95 || G >= 112) {
            if (M.hasOwnProperty(G)) {
              S[M[G]] = G;
            }
          }
        }
      }
      return S;
    }()[G] ? "keydown" : "keypress";
    if (W == "keypress" && se.length) {
      W = "keydown";
    }
    return W;
  }
  function fe(G, se) {
    var W;
    var Pe;
    var Le;
    var he = [];
    W = function le(G) {
      if (G === "+") {
        return ["+"];
      } else {
        return (G = G.replace(/\+{2}/g, "+plus")).split("+");
      }
    }(G);
    Le = 0;
    for (; Le < W.length; ++Le) {
      if (w[Pe = W[Le]]) {
        Pe = w[Pe];
      }
      if (se && se != "keypress" && C[Pe]) {
        Pe = C[Pe];
        he.push("shift");
      }
      if (F(Pe)) {
        he.push(Pe);
      }
    }
    return {
      key: Pe,
      modifiers: he,
      action: se = X(Pe, he, se)
    };
  }
  function q(G, se) {
    return G !== null && G !== b && (G === se || q(G.parentNode, se));
  }
  function j(G) {
    var se = this;
    G = G || b;
    if (!(se instanceof j)) {
      return new j(G);
    }
    se.target = G;
    se._callbacks = {};
    se._directMap = {};
    var Pe;
    var W = {};
    var Le = false;
    var he = false;
    var pe = false;
    function re(Oe) {
      Oe = Oe || {};
      var ke;
      var Ee = false;
      for (ke in W) {
        if (Oe[ke]) {
          Ee = true;
        } else {
          W[ke] = 0;
        }
      }
      if (!Ee) {
        pe = false;
      }
    }
    function Re(Oe, Ee, ke, Be, De, Qe) {
      var It;
      var Yt;
      var Dn = [];
      var Et = ke.type;
      if (!se._callbacks[Oe]) {
        return [];
      }
      if (Et == "keyup" && F(Oe)) {
        Ee = [Oe];
      }
      It = 0;
      for (; It < se._callbacks[Oe].length; ++It) {
        Yt = se._callbacks[Oe][It];
        if ((!!Be || !Yt.seq || W[Yt.seq] == Yt.level) && Et == Yt.action && (Et == "keypress" && !ke.metaKey && !ke.ctrlKey || !!O(Ee, Yt.modifiers))) {
          if (!Be && Yt.combo == De || Be && Yt.seq == Be && Yt.level == Qe) {
            se._callbacks[Oe].splice(It, 1);
          }
          Dn.push(Yt);
        }
      }
      return Dn;
    }
    function Ge(Oe, Ee, ke, Be) {
      if (!se.stopCallback(Ee, Ee.target || Ee.srcElement, ke, Be)) {
        if (Oe(Ee, ke) === false) {
          (function U(G) {
            if (G.preventDefault) {
              G.preventDefault();
            } else {
              G.returnValue = false;
            }
          })(Ee);
          (function B(G) {
            if (G.stopPropagation) {
              G.stopPropagation();
            } else {
              G.cancelBubble = true;
            }
          })(Ee);
        }
      }
    }
    function Ue(Oe) {
      if (typeof Oe.which != "number") {
        Oe.which = Oe.keyCode;
      }
      var Ee = E(Oe);
      if (Ee) {
        if (Oe.type == "keyup" && Le === Ee) {
          Le = false;
          return;
        }
        se.handleKey(Ee, function x(G) {
          var se = [];
          if (G.shiftKey) {
            se.push("shift");
          }
          if (G.altKey) {
            se.push("alt");
          }
          if (G.ctrlKey) {
            se.push("ctrl");
          }
          if (G.metaKey) {
            se.push("meta");
          }
          return se;
        }(Oe), Oe);
      }
    }
    function rt(Oe, Ee, ke, Be, De) {
      se._directMap[Oe + ":" + ke] = Ee;
      var It;
      var Qe = (Oe = Oe.replace(/\s+/g, " ")).split(" ");
      if (Qe.length > 1) {
        (function st(Oe, Ee, ke, Be) {
          function De(Et) {
            return function () {
              pe = Et;
              ++W[Oe];
              (function ot() {
                clearTimeout(Pe);
                Pe = setTimeout(re, 1000);
              })();
            };
          }
          function Qe(Et) {
            Ge(ke, Et, Oe);
            if (Be !== "keyup") {
              Le = E(Et);
            }
            setTimeout(re, 10);
          }
          W[Oe] = 0;
          for (var It = 0; It < Ee.length; ++It) {
            var Dn = It + 1 === Ee.length ? Qe : De(Be || fe(Ee[It + 1]).action);
            rt(Ee[It], Dn, Be, Oe, It);
          }
        })(Oe, Qe, Ee, ke);
      } else {
        It = fe(Oe, ke);
        se._callbacks[It.key] = se._callbacks[It.key] || [];
        Re(It.key, It.modifiers, {
          type: It.action
        }, Be, Oe, De);
        se._callbacks[It.key][Be ? "unshift" : "push"]({
          callback: Ee,
          modifiers: It.modifiers,
          action: It.action,
          seq: Be,
          level: De,
          combo: Oe
        });
      }
    }
    se._handleKey = function (Oe, Ee, ke) {
      var De;
      var Be = Re(Oe, Ee, ke);
      var Qe = {};
      var It = 0;
      var Yt = false;
      for (De = 0; De < Be.length; ++De) {
        if (Be[De].seq) {
          It = Math.max(It, Be[De].level);
        }
      }
      for (De = 0; De < Be.length; ++De) {
        if (Be[De].seq) {
          if (Be[De].level != It) {
            continue;
          }
          Yt = true;
          Qe[Be[De].seq] = 1;
          Ge(Be[De].callback, ke, Be[De].combo, Be[De].seq);
        } else if (!Yt) {
          Ge(Be[De].callback, ke, Be[De].combo);
        }
      }
      var Dn = ke.type == "keypress" && he;
      if (ke.type == pe && !F(Oe) && !Dn) {
        re(Qe);
      }
      he = Yt && ke.type == "keydown";
    };
    se._bindMultiple = function (Oe, Ee, ke) {
      for (var Be = 0; Be < Oe.length; ++Be) {
        rt(Oe[Be], Ee, ke);
      }
    };
    I(G, "keypress", Ue);
    I(G, "keydown", Ue);
    I(G, "keyup", Ue);
  }
})(typeof window !== "undefined" ? window : null, typeof window !== "undefined" ? document : null);