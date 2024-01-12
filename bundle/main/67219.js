export function PI(Re) {
  for (var Ge = Re.length, Ue = 0; Ue < Ge;) {
    Re[Ue] = [Re[Ue]];
    Ue += 1;
  }
}
export function g9(Re, Ge) {
  for (var Ue = Ge.length, ot = 0; ot < Ue;) {
    Re.push(Ge[ot]);
    ot += 1;
  }
}
export function jz(Re) {
  var Ge = [];
  if (!Re || Re.length === 0 || !Re[0] || Re[0].length === 0) {
    return Ge;
  }
  for (var Ue = Re.length, ot = Re[0].length, st = 0; st < Ue; st++) {
    for (var rt = 0; rt < ot; rt++) {
      Ge[rt] ||= [];
      Ge[rt][st] = Re[st][rt];
    }
  }
  return Ge;
}
export function k$(Re, Ge, Ue, ot) {
  var st = -1;
  var rt = Re;
  var Oe = Ue;
  if (!Array.isArray(Re)) {
    rt = Array.from(Re);
  }
  var Ee = rt.length;
  if (ot && Ee) {
    Oe = rt[st += 1];
  }
  st += 1;
  for (; st < Ee;) {
    Oe = Ge(Oe, rt[st], st, rt);
    st += 1;
  }
  return Oe;
}
export function w7(Re, Ge) {
  var Ue = 0;
  var ot = Re;
  if (!Array.isArray(Re)) {
    ot = Array.from(Re);
  }
  for (var st = ot.length, rt = [], Oe = -1; Ue < st;) {
    var Ee = ot[Ue];
    if (Ge(Ee, Ue, ot)) {
      rt[Oe += 1] = Ee;
    }
    Ue += 1;
  }
  return rt;
}
export function Sc(Re, Ge) {
  var Ue = 0;
  var ot = Re;
  if (!Array.isArray(Re)) {
    ot = Array.from(Re);
  }
  for (var st = ot.length, rt = [], Oe = -1; Ue < st;) {
    rt[Oe += 1] = Ge(ot[Ue], Ue, ot);
    Ue += 1;
  }
  return rt;
}
export function Bk(Re, Ge) {
  var Ue = 0;
  var ot = Re;
  if (!Array.isArray(Re)) {
    ot = Array.from(Re);
  }
  for (var st = ot.length; Ue < st && Ge(ot[Ue], Ue, ot) !== false;) {
    Ue += 1;
  }
  return Re;
}
export function o0() {
  for (var Re = arguments.length, Ge = new Array(Re), Ue = 0; Ue < Re; Ue++) {
    Ge[Ue] = arguments[Ue];
  }
  var ot = [].concat(Ge);
  var st = ot[0];
  var rt = ot.slice(1);
  var Oe = st;
  Bk(rt, function (Ee) {
    Oe = Oe.filter(function (ke) {
      return !Ee.includes(ke);
    });
  });
  return Oe;
}
export function W7(Re) {
  var Ge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " ";
  return Re.split(Ge);
}
require("91038");
require("78783");
require("92222");
require("82772");
require("47042");
require("57327");
require("41539");
require("26699");
require("32023");
require("66992");
require("70189");
require("33948");
require("74916");
require("23123");