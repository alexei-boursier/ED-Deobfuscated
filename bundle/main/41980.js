require("66992");
require("41539");
require("78783");
require("4129");
require("33948");
var w = new WeakMap();
var S = (0, C.Z)("editors");
var L = S.register;
var I = S.getItem;
export var Wu = S.hasItem;
function U(X) {
  var le = {};
  var fe = X;
  this.getConstructor = function () {
    return X;
  };
  this.getInstance = function (q) {
    if (!(q.guid in le)) {
      le[q.guid] = new fe(q);
    }
    return le[q.guid];
  };
  v.Z.getSingleton().add("afterDestroy", function () {
    le[this.guid] = null;
  });
}
export function Jq(X, le) {
  var fe;
  if (typeof X == "function") {
    if (!w.get(X)) {
      qm(null, X);
    }
    fe = w.get(X);
  } else {
    if (typeof X != "string") {
      throw Error("Only strings and functions can be passed as \"editor\" parameter");
    }
    fe = I(X);
  }
  if (!fe) {
    throw Error(`No editor registered under name "${X}"`);
  }
  return fe.getInstance(le);
}
export function qm(X, le) {
  if (X && typeof X != "string") {
    X = (le = X).EDITOR_TYPE;
  }
  var fe = new U(le);
  if (typeof X == "string") {
    L(X, fe);
  }
  w.set(le, fe);
}