require("74916");
import * as i from "21470";
import * as t from "98052";
import * as k from "47293";
import * as M from "5112";
var C = M("species");
var w = RegExp.prototype;
__webpack_module__.exports = function (S, L, I, E) {
  var O = M(S);
  var x = !k(function () {
    var Z = {
      [O]: function () {
        return 7;
      }
    };
    return ""[S](Z) != 7;
  });
  var U = x && !k(function () {
    var Z = false;
    var X = /a/;
    if (S === "split") {
      (X = {}).constructor = {};
      X.constructor[C] = function () {
        return X;
      };
      X.flags = "";
      X[O] = /./[O];
    }
    X.exec = function () {
      Z = true;
      return null;
    };
    X[O]("");
    return !Z;
  });
  if (!x || !U || I) {
    var B = i(/./[O]);
    var F = L(O, ""[S], function (Z, X, le, fe, q) {
      var j = i(Z);
      var G = X.exec;
      if (G === b || G === w.exec) {
        if (x && !q) {
          return {
            done: true,
            value: B(X, le, fe)
          };
        } else {
          return {
            done: true,
            value: j(le, X, fe)
          };
        }
      } else {
        return {
          done: false
        };
      }
    });
    t(String.prototype, S, F[0]);
    t(w, O, F[1]);
  }
  if (E) {
    v(w[O], "sham", true);
  }
};