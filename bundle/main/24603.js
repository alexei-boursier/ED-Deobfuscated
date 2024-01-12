import * as t from "17854";
import * as b from "1702";
var C = require("8006").f;
import * as w from "47976";
import * as L from "41340";
import * as E from "52999";
var F = require("29909").enforce;
import * as le from "9441";
import * as fe from "38173";
var q = X("match");
var j = t.RegExp;
var G = j.prototype;
var se = t.SyntaxError;
var W = b(G.exec);
var Pe = b("".charAt);
var Le = b("".replace);
var he = b("".indexOf);
var pe = b("".slice);
var re = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var Re = /a/g;
var Ge = /a/g;
var Ue = new j(Re) !== Re;
var ot = E.MISSED_STICKY;
var st = E.UNSUPPORTED_Y;
if (k("RegExp", i && (!Ue || ot || le || fe || U(function () {
  Ge[q] = false;
  return j(Re) != Re || j(Ge) == Ge || j(Re, "i") != "/a/i";
})))) {
  for (var ke = function (It, Yt) {
      var ve;
      var Lt;
      var ft;
      var qe;
      var Me;
      var ne;
      var Dn = w(G, this);
      var Et = S(It);
      var lt = Yt === undefined;
      var et = [];
      var St = It;
      if (!Dn && Et && lt && It.constructor === ke) {
        return It;
      }
      if (Et || w(G, It)) {
        It = It.source;
        if (lt) {
          Yt = I(St);
        }
      }
      It = It === undefined ? "" : L(It);
      Yt = Yt === undefined ? "" : L(Yt);
      St = It;
      if (le && ("dotAll" in Re) && (Lt = !!Yt && he(Yt, "s") > -1)) {
        Yt = Le(Yt, /s/g, "");
      }
      ve = Yt;
      if (ot && ("sticky" in Re) && (ft = !!Yt && he(Yt, "y") > -1) && st) {
        Yt = Le(Yt, /y/g, "");
      }
      if (fe) {
        qe = function (Qe) {
          for (var ft, It = Qe.length, Yt = 0, Dn = "", Et = [], lt = {}, et = false, St = false, ve = 0, Lt = ""; Yt <= It; Yt++) {
            if ((ft = Pe(Qe, Yt)) === "\\") {
              ft += Pe(Qe, ++Yt);
            } else if (ft === "]") {
              et = false;
            } else if (!et) {
              switch (true) {
                case ft === "[":
                  et = true;
                  break;
                case ft === "(":
                  if (W(re, pe(Qe, Yt + 1))) {
                    Yt += 2;
                    St = true;
                  }
                  Dn += ft;
                  ve++;
                  continue;
                case ft === ">" && St:
                  if (Lt === "" || B(lt, Lt)) {
                    throw new se("Invalid capture group name");
                  }
                  lt[Lt] = true;
                  Et[Et.length] = [Lt, ve];
                  St = false;
                  Lt = "";
                  continue;
              }
            }
            if (St) {
              Lt += ft;
            } else {
              Dn += ft;
            }
          }
          return [Dn, Et];
        }(It);
        It = qe[0];
        et = qe[1];
      }
      Me = M(j(It, Yt), Dn ? this : G, ke);
      if (Lt || ft || et.length) {
        ne = F(Me);
        if (Lt) {
          ne.dotAll = true;
          ne.raw = ke(function (Qe) {
            for (var lt, It = Qe.length, Yt = 0, Dn = "", Et = false; Yt <= It; Yt++) {
              if ((lt = Pe(Qe, Yt)) !== "\\") {
                if (Et || lt !== ".") {
                  if (lt === "[") {
                    Et = true;
                  } else if (lt === "]") {
                    Et = false;
                  }
                  Dn += lt;
                } else {
                  Dn += "[\\s\\S]";
                }
              } else {
                Dn += lt + Pe(Qe, ++Yt);
              }
            }
            return Dn;
          }(It), ve);
        }
        if (ft) {
          ne.sticky = true;
        }
        if (et.length) {
          ne.groups = et;
        }
      }
      if (It !== St) {
        try {
          v(Me, "source", St === "" ? "(?:)" : St);
        } catch {}
      }
      return Me;
    }, Be = C(j), De = 0; Be.length > De;) {
    O(ke, j, Be[De++]);
  }
  G.constructor = ke;
  ke.prototype = G;
  x(t, "RegExp", ke, {
    constructor: true
  });
}
Z("RegExp");