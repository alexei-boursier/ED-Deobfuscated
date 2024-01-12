var fe;
var W;
require("32564");
require("82526");
require("41817");
require("41539");
require("32165");
require("66992");
require("78783");
require("33948");
for (var L = 0, I = ["ms", "moz", "webkit", "o"], E = window.requestAnimationFrame, O = window.cancelAnimationFrame, x = 0; x < I.length && !E; ++x) {
  E = window[`${I[x]}RequestAnimationFrame`];
  O = window[`${I[x]}CancelAnimationFrame`] || window[`${I[x]}CancelRequestAnimationFrame`];
}
export function U7(Le) {
  return E.call(window, Le);
}
export function mp() {
  return !!document.documentElement.classList;
}
export function tt() {
  return !!document.createTextNode("test").textContent;
}
export function mI() {
  return !!window.getComputedStyle;
}
export function Wx(Le) {
  O.call(window, Le);
}
export function JS() {
  return "ontouchstart" in window;
}
export function ZF() {
  if (fe === undefined) {
    (function q() {
      var Le = document.createElement("TABLE");
      Le.style.borderSpacing = "0";
      Le.style.borderWidth = "0";
      Le.style.padding = "0";
      var he = document.createElement("TBODY");
      Le.appendChild(he);
      he.appendChild(document.createElement("TR"));
      he.firstChild.appendChild(document.createElement("TD"));
      he.firstChild.firstChild.innerHTML = "<tr><td>t<br>t</td></tr>";
      var pe = document.createElement("CAPTION");
      pe.innerHTML = "c<br>c<br>c<br>c";
      pe.style.padding = "0";
      pe.style.margin = "0";
      Le.insertBefore(pe, he);
      document.body.appendChild(Le);
      fe = Le.offsetHeight < Le.lastChild.offsetHeight * 2;
      document.body.removeChild(Le);
    })();
  }
  return fe;
}
export function by() {
  if (W !== undefined) {
    return W;
  }
  try {
    var Le = {
      get passive() {
        W = true;
      }
    };
    window.addEventListener("test", Le, Le);
    window.removeEventListener("test", Le, Le);
  } catch {
    W = false;
  }
  return W;
}
E ||= function (he) {
  var pe = new Date().getTime();
  var re = Math.max(0, 16 - (pe - L));
  var Re = window.setTimeout(function () {
    he(pe + re);
  }, re);
  L = pe + re;
  return Re;
};
O ||= function (he) {
  clearTimeout(he);
};