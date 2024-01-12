var j;
var G;
var se;
var W;
import * as i from "17854";
import * as k from "60614";
import * as v from "47293";
import * as C from "60490";
import * as S from "80317";
import * as E from "35268";
var O = i.setImmediate;
var x = i.clearImmediate;
var U = i.process;
var B = i.Dispatch;
var F = i.Function;
var Z = i.MessageChannel;
var X = i.String;
var le = 0;
var fe = {};
var q = "onreadystatechange";
v(function () {
  j = i.location;
});
function Pe(re) {
  if (M(fe, re)) {
    var Re = fe[re];
    delete fe[re];
    Re();
  }
}
function Le(re) {
  return function () {
    Pe(re);
  };
}
function he(re) {
  Pe(re.data);
}
function pe(re) {
  i.postMessage(X(re), j.protocol + "//" + j.host);
}
if (!O || !x) {
  O = function (Re) {
    L(arguments.length, 1);
    var Ge = k(Re) ? Re : F(Re);
    var Ue = w(arguments, 1);
    fe[++le] = function () {
      t(Ge, undefined, Ue);
    };
    G(le);
    return le;
  };
  x = function (Re) {
    delete fe[Re];
  };
  if (E) {
    G = function (re) {
      U.nextTick(Le(re));
    };
  } else if (B && B.now) {
    G = function (re) {
      B.now(Le(re));
    };
  } else if (Z && !I) {
    W = (se = new Z()).port2;
    se.port1.onmessage = he;
    G = b(W.postMessage, W);
  } else if (i.addEventListener && k(i.postMessage) && !i.importScripts && j && j.protocol !== "file:" && !v(pe)) {
    G = pe;
    i.addEventListener("message", he, false);
  } else {
    G = q in S("script") ? function (re) {
      C.appendChild(S("script"))[q] = function () {
        C.removeChild(this);
        Pe(re);
      };
    } : function (re) {
      setTimeout(Le(re), 0);
    };
  }
}
__webpack_module__.exports = {
  set: O,
  clear: x
};