var I;
var y;
var w = __webpack_module__.exports = {};
function E() {
  throw new Error("setTimeout has not been defined");
}
function R() {
  throw new Error("clearTimeout has not been defined");
}
function C(O) {
  if (I === setTimeout) {
    return setTimeout(O, 0);
  }
  if ((I === E || !I) && setTimeout) {
    I = setTimeout;
    return setTimeout(O, 0);
  }
  try {
    return I(O, 0);
  } catch {
    try {
      return I.call(null, O, 0);
    } catch {
      return I.call(this, O, 0);
    }
  }
}
(function () {
  try {
    I = typeof setTimeout == "function" ? setTimeout : E;
  } catch {
    I = E;
  }
  try {
    y = typeof clearTimeout == "function" ? clearTimeout : R;
  } catch {
    y = R;
  }
})();
var N;
var x = [];
var S = false;
var s = -1;
function u() {
  if (S && N) {
    S = false;
    if (N.length) {
      x = N.concat(x);
    } else {
      s = -1;
    }
    if (x.length) {
      m();
    }
  }
}
function m() {
  if (!S) {
    var O = C(u);
    S = true;
    for (var q = x.length; q;) {
      N = x;
      x = [];
      for (; ++s < q;) {
        if (N) {
          N[s].run();
        }
      }
      s = -1;
      q = x.length;
    }
    N = null;
    S = false;
    (function (ee) {
      if (y === clearTimeout) {
        return clearTimeout(ee);
      }
      if ((y === R || !y) && clearTimeout) {
        y = clearTimeout;
        return clearTimeout(ee);
      }
      try {
        y(ee);
      } catch {
        try {
          return y.call(null, ee);
        } catch {
          return y.call(this, ee);
        }
      }
    })(O);
  }
}
function l(O, q) {
  this.fun = O;
  this.array = q;
}
function M() {}
w.nextTick = function (O) {
  var q = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var ee = 1; ee < arguments.length; ee++) {
      q[ee - 1] = arguments[ee];
    }
  }
  x.push(new l(O, q));
  if (x.length === 1 && !S) {
    C(m);
  }
};
l.prototype.run = function () {
  this.fun.apply(null, this.array);
};
w.title = "browser";
w.browser = true;
w.env = {};
w.argv = [];
w.version = "";
w.versions = {};
w.on = M;
w.addListener = M;
w.once = M;
w.off = M;
w.removeListener = M;
w.removeAllListeners = M;
w.emit = M;
w.prependListener = M;
w.prependOnceListener = M;
w.listeners = function (O) {
  return [];
};
w.binding = function (O) {
  throw new Error("process.binding is not supported");
};
w.cwd = function () {
  return "/";
};
w.chdir = function (O) {
  throw new Error("process.chdir is not supported");
};
w.umask = function () {
  return 0;
};