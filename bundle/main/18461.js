require("24603");
require("74916");
require("39714");
require("69600");
require("21249");
require("47941");
require("15306");
require("41539");
require("92222");
require("40561");
require("4723");
require("94986");
require("85827");
require("91038");
require("78783");
require("57327");
require("34553");
require("26699");
require("32023");
require("82526");
require("41817");
require("32165");
require("66992");
require("33948");
require("47042");
require("68309");
import * as Pe from "6868";
function Le(ke) {
  return function Re(ke) {
    if (Array.isArray(ke)) {
      return Ge(ke);
    }
  }(ke) || function re(ke) {
    if (typeof Symbol !== "undefined" && ke[Symbol.iterator] != null || ke["@@iterator"] != null) {
      return Array.from(ke);
    }
  }(ke) || function pe(ke, Be) {
    if (ke) {
      if (typeof ke == "string") {
        return Ge(ke, Be);
      }
      var De = Object.prototype.toString.call(ke).slice(8, -1);
      if (De === "Object" && ke.constructor) {
        De = ke.constructor.name;
      }
      if (De === "Map" || De === "Set") {
        return Array.from(ke);
      }
      if (De === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(De)) {
        return Ge(ke, Be);
      }
    }
  }(ke) || function he() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ge(ke, Be) {
  if (Be == null || Be > ke.length) {
    Be = ke.length;
  }
  for (var De = 0, Qe = new Array(Be); De < Be; De++) {
    Qe[De] = ke[De];
  }
  return Qe;
}
var Ue = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">"
};
var ot = new RegExp(Object.keys(Ue).map(function (ke) {
  return `(${ke})`;
}).join("|"), "gi");
function st(ke) {
  return (ke && ke.nodeName || "") === "TABLE";
}
export function vo(ke) {
  for (var Be = ke.hasColHeaders(), De = ke.hasRowHeaders(), Qe = [Be ? -1 : 0, De ? -1 : 0, ke.countRows() - 1, ke.countCols() - 1], It = ke.getData.apply(ke, Qe), Yt = It.length, Dn = Yt > 0 ? It[0].length : 0, Et = ["<table>", "</table>"], lt = Be ? ["<thead>", "</thead>"] : [], et = ["<tbody>", "</tbody>"], St = De ? 1 : 0, ve = Be ? 1 : 0, Lt = 0; Lt < Yt; Lt += 1) {
    for (var ft = Be && Lt === 0, qe = [], Me = 0; Me < Dn; Me += 1) {
      var ne = !ft && De && Me === 0;
      var me = "";
      if (ft) {
        me = `<th>${ke.getColHeader(Me - St)}</th>`;
      } else if (ne) {
        me = `<th>${ke.getRowHeader(Lt - ve)}</th>`;
      } else {
        var it = It[Lt][Me];
        var bt = ke.getCellMeta(Lt - ve, Me - St);
        var Ze = bt.rowspan;
        var pt = bt.colspan;
        if (!bt.hidden) {
          var yt = [];
          if (Ze) {
            yt.push(`rowspan="${Ze}"`);
          }
          if (pt) {
            yt.push(`colspan="${pt}"`);
          }
          if ((0, Pe.xb)(it)) {
            me = `<td ${yt.join(" ")}></td>`;
          } else {
            var Wt = it.toString().replace("<", "&lt;").replace(">", "&gt;").replace(/(<br(\s*|\/)>(\r\n|\n)?|\r\n|\n)/g, "<br>\r\n").replace(/\x20/gi, "&nbsp;").replace(/\t/gi, "&#9;");
            me = `<td ${yt.join(" ")}>${Wt}</td>`;
          }
        }
      }
      qe.push(me);
    }
    var hn = ["<tr>"].concat(qe, ["</tr>"]).join("");
    if (ft) {
      lt.splice(1, 0, hn);
    } else {
      et.splice(-1, 0, hn);
    }
  }
  Et.splice(1, 0, lt.join(""), et.join(""));
  return Et.join("");
}
export function bt(ke) {
  for (var Be = ke.length, De = ["<table>"], Qe = 0; Qe < Be; Qe += 1) {
    var It = ke[Qe];
    var Yt = It.length;
    var Dn = [];
    if (Qe === 0) {
      De.push("<tbody>");
    }
    for (var Et = 0; Et < Yt; Et += 1) {
      var lt = It[Et];
      var et = (0, Pe.xb)(lt) ? "" : lt.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(<br(\s*|\/)>(\r\n|\n)?|\r\n|\n)/g, "<br>\r\n").replace(/\x20/gi, "&nbsp;").replace(/\t/gi, "&#9;");
      Dn.push(`<td>${et}</td>`);
    }
    De.push.apply(De, ["<tr>"].concat(Dn, ["</tr>"]));
    if (Qe + 1 === Be) {
      De.push("</tbody>");
    }
  }
  De.push("</table>");
  return De.join("");
}
export function BU(ke) {
  var Be = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var De = {};
  var Qe = Be.createDocumentFragment();
  var It = Be.createElement("div");
  Qe.appendChild(It);
  var Yt = ke;
  if (typeof Yt == "string") {
    var Dn = Yt.replace(/<td\b[^>]*?>([\s\S]*?)<\/\s*td>/g, function (Ur) {
      var Br = Ur.match(/<td\b[^>]*?>/g)[0];
      var rs = Ur.substring(Br.length, Ur.lastIndexOf("<")).replace(/(<(?!br)([^>]+)>)/gi, "");
      return `${Br}${rs}</td>`;
    });
    It.insertAdjacentHTML("afterbegin", `${Dn}`);
    Yt = It.querySelector("table");
  }
  if (Yt && st(Yt)) {
    var Et = It.querySelector("meta[name$=\"enerator\"]");
    var lt = Yt.querySelector("tbody th") !== null;
    var et = Yt.querySelector("tr");
    var St = et ? Array.from(et.cells).reduce(function (Ur, Br) {
      return Ur + Br.colSpan;
    }, 0) - (lt ? 1 : 0) : 0;
    var ve = Yt.tFoot && Array.from(Yt.tFoot.rows) || [];
    var Lt = [];
    var ft = false;
    var qe = 0;
    var Me = 0;
    if (Yt.tHead) {
      var ne = Array.from(Yt.tHead.rows).filter(function (Ur) {
        var Br = Ur.querySelector("td") !== null;
        if (Br) {
          Lt.push(Ur);
        }
        return !Br;
      });
      ft = (qe = ne.length) > 0;
      if (qe > 1) {
        De.nestedHeaders = Array.from(ne).reduce(function (Ur, Br) {
          var rs = Array.from(Br.cells).reduce(function (vs, wo, so) {
            if (lt && so === 0) {
              return vs;
            }
            var sa = wo.colSpan;
            var js = wo.innerHTML;
            vs.push(sa > 1 ? {
              label: js,
              colspan: sa
            } : js);
            return vs;
          }, []);
          Ur.push(rs);
          return Ur;
        }, []);
      } else if (ft) {
        De.colHeaders = Array.from(ne[0].children).reduce(function (Ur, Br, rs) {
          if (!lt || rs !== 0) {
            Ur.push(Br.innerHTML);
          }
          return Ur;
        }, []);
      }
    }
    if (Lt.length) {
      De.fixedRowsTop = Lt.length;
    }
    if (ve.length) {
      De.fixedRowsBottom = ve.length;
    }
    var me = [].concat(Lt, Le(Array.from(Yt.tBodies).reduce(function (Ur, Br) {
      Ur.push.apply(Ur, Le(Array.from(Br.rows)));
      return Ur;
    }, [])), Le(ve));
    Me = me.length;
    for (var it = new Array(Me), bt = 0; bt < Me; bt++) {
      it[bt] = new Array(St);
    }
    for (var Ut = [], Ze = [], pt = 0; pt < Me; pt++) {
      for (var yt = me[pt], Wt = Array.from(yt.cells), hn = Wt.length, Kt = 0; Kt < hn; Kt++) {
        var on = Wt[Kt];
        var Rn = on.nodeName;
        var In = on.innerHTML;
        var di = on.rowSpan;
        var Si = on.colSpan;
        var Zi = it[pt].findIndex(function (Ur) {
          return Ur === undefined;
        });
        if (Rn === "TD") {
          if (di > 1 || Si > 1) {
            for (var $i = pt; $i < pt + di; $i++) {
              if ($i < Me) {
                for (var Qi = Zi; Qi < Zi + Si; Qi++) {
                  it[$i][Qi] = null;
                }
              }
            }
            var br = on.getAttribute("style");
            var Ar = br && br.includes("mso-ignore:colspan");
            if (!Ar) {
              Ut.push({
                col: Zi,
                row: pt,
                rowspan: di,
                colspan: Si
              });
            }
          }
          var vr = "";
          vr = Et && /excel/gi.test(Et.content) ? In.replace(/[\r\n][\x20]{0,2}/g, " ").replace(/<br(\s*|\/)>[\r\n]?[\x20]{0,3}/gim, "\r\n") : In.replace(/<br(\s*|\/)>[\r\n]?/gim, "\r\n");
          it[pt][Zi] = vr.replace(ot, function (Ur) {
            return Ue[Ur];
          });
        } else {
          Ze.push(In);
        }
      }
    }
    if (Ut.length) {
      De.mergeCells = Ut;
    }
    if (Ze.length) {
      De.rowHeaders = Ze;
    }
    if (it.length) {
      De.data = it;
    }
    return De;
  }
}