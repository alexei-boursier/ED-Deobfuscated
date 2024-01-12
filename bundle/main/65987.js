import * as i from "21607";
import * as t from "94650";
import * as v from "54968";
var S = (() => {
  (ne = S ||= {}).top = "top";
  ne.bottom = "bottom";
  ne.left = "left";
  ne.right = "right";
  ne.auto = "auto";
  ne.end = "right";
  ne.start = "left";
  ne["top left"] = "top left";
  ne["top right"] = "top right";
  ne["right top"] = "right top";
  ne["right bottom"] = "right bottom";
  ne["bottom right"] = "bottom right";
  ne["bottom left"] = "bottom left";
  ne["left bottom"] = "left bottom";
  ne["left top"] = "left top";
  ne["top start"] = "top left";
  ne["top end"] = "top right";
  ne["end top"] = "right top";
  ne["end bottom"] = "right bottom";
  ne["bottom end"] = "bottom right";
  ne["bottom start"] = "bottom left";
  ne["start bottom"] = "start bottom";
  ne["start top"] = "left top";
  return S;
  var ne;
})();
export var Bz = (() => {
  (ne = Bz ||= {}).top = "top";
  ne.bottom = "bottom";
  ne.left = "start";
  ne.right = "end";
  ne.auto = "auto";
  ne.end = "end";
  ne.start = "start";
  ne["top left"] = "top start";
  ne["top right"] = "top end";
  ne["right top"] = "end top";
  ne["right bottom"] = "end bottom";
  ne["bottom right"] = "bottom end";
  ne["bottom left"] = "bottom start";
  ne["left bottom"] = "start bottom";
  ne["left top"] = "start top";
  ne["top start"] = "top start";
  ne["top end"] = "top end";
  ne["end top"] = "end top";
  ne["end bottom"] = "end bottom";
  ne["bottom end"] = "bottom end";
  ne["bottom start"] = "bottom start";
  ne["start bottom"] = "start bottom";
  ne["start top"] = "start top";
  return Bz;
  var ne;
})();
function I(ne, me) {
  if (ne.nodeType !== 1) {
    return [];
  }
  const bt = ne.ownerDocument.defaultView?.getComputedStyle(ne, null);
  if (me) {
    return bt && bt[me];
  } else {
    return bt;
  }
}
function E(ne) {
  if (!ne) {
    return document.documentElement;
  }
  let bt;
  let it = ne?.offsetParent;
  for (; it === null && ne.nextElementSibling && bt !== ne.nextElementSibling;) {
    bt = ne.nextElementSibling;
    it = bt.offsetParent;
  }
  const Ut = it && it.nodeName;
  if (Ut && Ut !== "BODY" && Ut !== "HTML") {
    if (it && ["TH", "TD", "TABLE"].indexOf(it.nodeName) !== -1 && I(it, "position") === "static") {
      return E(it);
    } else {
      return it;
    }
  } else if (bt) {
    return bt.ownerDocument.documentElement;
  } else {
    return document.documentElement;
  }
}
function x(ne) {
  if (ne.parentNode !== null) {
    return x(ne.parentNode);
  } else {
    return ne;
  }
}
function U(ne, me) {
  if (!ne || !ne.nodeType || !me || !me.nodeType) {
    return document.documentElement;
  }
  const it = ne.compareDocumentPosition(me) & Node.DOCUMENT_POSITION_FOLLOWING;
  const bt = it ? ne : me;
  const Ut = it ? me : ne;
  const Ze = document.createRange();
  Ze.setStart(bt, 0);
  Ze.setEnd(Ut, 0);
  const pt = Ze.commonAncestorContainer;
  if (ne !== pt && me !== pt || bt.contains(Ut)) {
    if (function O(ne) {
      const {
        nodeName: me
      } = ne;
      return me !== "BODY" && (me === "HTML" || E(ne.firstElementChild) === ne);
    }(pt)) {
      return pt;
    } else {
      return E(pt);
    }
  }
  const yt = x(ne);
  if (yt.host) {
    return U(yt.host, me);
  } else {
    return U(ne, x(me).host);
  }
}
function B(ne) {
  if (!ne || !ne.parentElement) {
    return document.documentElement;
  }
  let me = ne.parentElement;
  for (; (it = me) !== null && it !== undefined && it.parentElement && I(me, "transform") === "none";) {
    var it;
    me = me.parentElement;
  }
  return me || document.documentElement;
}
function F(ne, me) {
  const it = me === "x" ? "Left" : "Top";
  const bt = it === "Left" ? "Right" : "Bottom";
  return parseFloat(ne[`border${it}Width`]) + parseFloat(ne[`border${bt}Width`]);
}
function Z(ne, me, it, bt) {
  return Math.max(me[`offset${ne}`], me[`scroll${ne}`], it[`client${ne}`], it[`offset${ne}`], it[`scroll${ne}`], 0);
}
function X(ne) {
  const me = ne.body;
  const it = ne.documentElement;
  return {
    height: Z("Height", me, it),
    width: Z("Width", me, it)
  };
}
function le(ne) {
  return {
    ...ne,
    right: (ne.left || 0) + ne.width,
    bottom: (ne.top || 0) + ne.height
  };
}
function q(ne) {
  return typeof ne == "number" || Object.prototype.toString.call(ne) === "[object Number]";
}
function j(ne) {
  const me = ne.getBoundingClientRect();
  if (!me || !q(me.top) || !q(me.left) || !q(me.bottom) || !q(me.right)) {
    return me;
  }
  const it = {
    left: me.left,
    top: me.top,
    width: me.right - me.left,
    height: me.bottom - me.top
  };
  const bt = ne.nodeName === "HTML" ? X(ne.ownerDocument) : undefined;
  const Ut = bt?.width || ne.clientWidth || q(me.right) && q(it.left) && me.right - it.left || 0;
  const Ze = bt?.height || ne.clientHeight || q(me.bottom) && q(it.top) && me.bottom - it.top || 0;
  let pt = ne.offsetWidth - Ut;
  let yt = ne.offsetHeight - Ze;
  if (pt || yt) {
    const Wt = I(ne);
    pt -= F(Wt, "x");
    yt -= F(Wt, "y");
    it.width -= pt;
    it.height -= yt;
  }
  return le(it);
}
function G(ne) {
  if (ne.nodeName === "HTML") {
    return ne;
  } else {
    return ne.parentNode || ne.host;
  }
}
function se(ne) {
  if (!ne) {
    return document.body;
  }
  switch (ne.nodeName) {
    case "HTML":
    case "BODY":
      return ne.ownerDocument.body;
    case "#document":
      return ne.body;
  }
  const {
    overflow: me,
    overflowX: it,
    overflowY: bt
  } = I(ne);
  if (/(auto|scroll|overlay)/.test(String(me) + String(bt) + String(it))) {
    return ne;
  } else {
    return se(G(ne));
  }
}
function W(ne, me, it = false) {
  const yt = me.nodeName === "HTML";
  const Wt = j(ne);
  const hn = j(me);
  se(ne);
  const on = I(me);
  const Rn = parseFloat(on.borderTopWidth);
  const In = parseFloat(on.borderLeftWidth);
  if (it && yt) {
    hn.top = Math.max(hn.top ?? 0, 0);
    hn.left = Math.max(hn.left ?? 0, 0);
  }
  const Zi = le({
    top: (Wt.top ?? 0) - (hn.top ?? 0) - Rn,
    left: (Wt.left ?? 0) - (hn.left ?? 0) - In,
    width: Wt.width,
    height: Wt.height
  });
  Zi.marginTop = 0;
  Zi.marginLeft = 0;
  if (yt) {
    const $i = parseFloat(on.marginTop);
    const Qi = parseFloat(on.marginLeft);
    if (q(Zi.top)) {
      Zi.top -= Rn - $i;
    }
    if (q(Zi.bottom)) {
      Zi.bottom -= Rn - $i;
    }
    if (q(Zi.left)) {
      Zi.left -= In - Qi;
    }
    if (q(Zi.right)) {
      Zi.right -= In - Qi;
    }
    Zi.marginTop = $i;
    Zi.marginLeft = Qi;
  }
  return Zi;
}
function Pe(ne, me = "top") {
  const it = me === "top" ? "scrollTop" : "scrollLeft";
  const bt = ne.nodeName;
  if (bt === "BODY" || bt === "HTML") {
    const Ut = ne.ownerDocument.documentElement;
    return (ne.ownerDocument.scrollingElement || Ut)[it];
  }
  return ne[it];
}
function he(ne) {
  const me = ne.nodeName;
  return me !== "BODY" && me !== "HTML" && (I(ne, "position") === "fixed" || he(G(ne)));
}
function pe(ne, me, it = 0, bt, Ut = false) {
  let Ze = {
    top: 0,
    left: 0
  };
  const pt = Ut ? B(ne) : U(ne, me);
  if (bt === "viewport") {
    Ze = function Le(ne, me = false) {
      const it = ne.ownerDocument.documentElement;
      const bt = W(ne, it);
      const Ut = Math.max(it.clientWidth, window.innerWidth || 0);
      const Ze = Math.max(it.clientHeight, window.innerHeight || 0);
      const pt = me ? 0 : Pe(it);
      const yt = me ? 0 : Pe(it, "left");
      return le({
        top: pt - Number(bt?.top) + Number(bt?.marginTop),
        left: yt - Number(bt?.left) + Number(bt?.marginLeft),
        width: Ut,
        height: Ze
      });
    }(pt, Ut);
  } else {
    let yt;
    if (bt === "scrollParent") {
      yt = se(G(me));
      if (yt.nodeName === "BODY") {
        yt = ne.ownerDocument.documentElement;
      }
    } else {
      yt = bt === "window" ? ne.ownerDocument.documentElement : bt;
    }
    const Wt = W(yt, pt, Ut);
    if (Wt && yt.nodeName === "HTML" && !he(pt)) {
      const {
        height: hn,
        width: Kt
      } = X(ne.ownerDocument);
      if (q(Ze.top) && q(Wt.top) && q(Wt.marginTop)) {
        Ze.top += Wt.top - Wt.marginTop;
      }
      if (q(Ze.top)) {
        Ze.bottom = Number(hn) + Number(Wt.top);
      }
      if (q(Ze.left) && q(Wt.left) && q(Wt.marginLeft)) {
        Ze.left += Wt.left - Wt.marginLeft;
      }
      if (q(Ze.top)) {
        Ze.right = Number(Kt) + Number(Wt.left);
      }
    } else if (Wt) {
      Ze = Wt;
    }
  }
  if (q(Ze.left)) {
    Ze.left += it;
  }
  if (q(Ze.top)) {
    Ze.top += it;
  }
  if (q(Ze.right)) {
    Ze.right -= it;
  }
  if (q(Ze.bottom)) {
    Ze.bottom -= it;
  }
  return Ze;
}
function re({
  width: ne,
  height: me
}) {
  return ne * me;
}
function Re(ne, me, it, bt, Ut = ["top", "bottom", "right", "left"], Ze = "viewport", pt = 0) {
  if (ne.indexOf("auto") === -1) {
    return ne;
  }
  const br = pe(it, bt, pt, Ze);
  const Ar = {
    top: {
      width: br?.width ?? 0,
      height: (me?.top ?? 0) - (br?.top ?? 0)
    },
    right: {
      width: (br?.right ?? 0) - (me?.right ?? 0),
      height: br?.height ?? 0
    },
    bottom: {
      width: br?.width ?? 0,
      height: (br?.bottom ?? 0) - (me?.bottom ?? 0)
    },
    left: {
      width: (me.left ?? 0) - (br?.left ?? 0),
      height: br?.height ?? 0
    }
  };
  const vr = Object.keys(Ar).map(vs => ({
    position: vs,
    ...Ar[vs],
    area: re(Ar[vs])
  })).sort((vs, wo) => wo.area - vs.area);
  let Ur = vr.filter(({
    width: vs,
    height: wo
  }) => vs >= it.clientWidth && wo >= it.clientHeight);
  Ur = Ur.filter(({
    position: vs
  }) => Ut.some(wo => wo === vs));
  const Br = Ur.length > 0 ? Ur[0].position : vr[0].position;
  const rs = ne.split(" ")[1];
  it.className = it.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${(0, i.Wl)().isBs5 ? Bz[Br] : Br}`);
  return Br + (rs ? `-${rs}` : "");
}
const st = (ne, me = 0) => ne ? parseFloat(ne) : me;
function rt(ne) {
  const it = ne.ownerDocument.defaultView?.getComputedStyle(ne);
  const bt = st(it?.marginTop) + st(it?.marginBottom);
  const Ut = st(it?.marginLeft) + st(it?.marginRight);
  return {
    width: Number(ne.offsetWidth) + Ut,
    height: Number(ne.offsetHeight) + bt
  };
}
function Oe(ne, me, it) {
  return W(me, it ? B(ne) : U(ne, me), it);
}
function Ee(ne, me, it) {
  const pt = it.split(" ")[0];
  const yt = rt(ne);
  const Wt = {
    width: yt.width,
    height: yt.height
  };
  const hn = ["right", "left"].indexOf(pt) !== -1;
  const Kt = hn ? "top" : "left";
  const on = hn ? "left" : "top";
  const Rn = hn ? "height" : "width";
  const In = hn ? "width" : "height";
  Wt[Kt] = (me[Kt] ?? 0) + me[Rn] / 2 - yt[Rn] / 2;
  Wt[on] = pt === on ? (me[on] ?? 0) - yt[In] : me[function Ue(ne) {
    const me = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return ne.replace(/left|right|bottom|top/g, it => me[it]);
  }(on)] ?? 0;
  return Wt;
}
function ke(ne, me) {
  var it;
  return (it = ne.modifiers[me]) !== null && it !== undefined && !!it.enabled;
}
const Be = {
  top: ["top", "top start", "top end"],
  bottom: ["bottom", "bottom start", "bottom end"],
  start: ["start", "start top", "start bottom"],
  end: ["end", "end top", "end bottom"]
};
function De(ne, me) {
  return !!(0, i.Wl)().isBs5 && Be[me].includes(ne);
}
export function lx(ne) {
  if ((0, i.Wl)().isBs5) {
    if (De(ne, "end")) {
      return "ms-2";
    } else if (De(ne, "start")) {
      return "me-2";
    } else if (De(ne, "top")) {
      return "mb-2";
    } else if (De(ne, "bottom")) {
      return "mt-2";
    } else {
      return "";
    }
  } else {
    return "";
  }
}
function Yt(ne, me, it) {
  if (!!ne && !!me) {
    Object.keys(me).forEach(bt => {
      let Ut = "";
      if (["width", "height", "top", "right", "bottom", "left"].indexOf(bt) !== -1 && function fe(ne) {
        return ne !== "" && !isNaN(parseFloat(ne)) && isFinite(Number(ne));
      }(me[bt])) {
        Ut = "px";
      }
      if (it) {
        it.setStyle(ne, bt, `${String(me[bt])}${Ut}`);
      } else {
        ne.style[bt] = String(me[bt]) + Ut;
      }
    });
  }
}
function Dn(ne) {
  let Ze = ne.offsets.target;
  const pt = ne.instance.target.querySelector(".arrow");
  if (!pt) {
    return ne;
  }
  const yt = ["left", "right"].indexOf(ne.placement.split(" ")[0]) !== -1;
  const Wt = yt ? "height" : "width";
  const hn = yt ? "Top" : "Left";
  const Kt = hn.toLowerCase();
  const on = yt ? "left" : "top";
  const Rn = yt ? "bottom" : "right";
  const In = rt(pt)[Wt];
  const di = ne.placement.split(" ")[1];
  if ((ne.offsets.host[Rn] ?? 0) - In < (Ze[Kt] ?? 0)) {
    Ze[Kt] -= (Ze[Kt] ?? 0) - ((ne.offsets.host[Rn] ?? 0) - In);
  }
  if (Number(ne.offsets.host[Kt]) + Number(In) > (Ze[Rn] ?? 0)) {
    Ze[Kt] += Number(ne.offsets.host[Kt]) + Number(In) - Number(Ze[Rn]);
  }
  Ze = le(Ze);
  const $i = I(ne.instance.target);
  const Qi = parseFloat($i[`margin${hn}`]) || 0;
  const br = parseFloat($i[`border${hn}Width`]) || 0;
  let Ar;
  if (di) {
    const Ur = parseFloat($i.borderRadius) || 0;
    const Br = Number(Qi + br + Ur);
    Ar = Kt === di ? Number(ne.offsets.host[Kt]) + Br : Number(ne.offsets.host[Kt]) + Number(ne.offsets.host[Wt] - Br);
  } else {
    Ar = Number(ne.offsets.host[Kt]) + Number(ne.offsets.host[Wt] / 2 - In / 2);
  }
  let vr = Ar - (Ze[Kt] ?? 0) - Qi - br;
  vr = Math.max(Math.min(Ze[Wt] - (In + 5), vr), 0);
  ne.offsets.arrow = {
    [Kt]: Math.round(vr),
    [on]: ""
  };
  ne.instance.arrow = pt;
  return ne;
}
function Et(ne) {
  ne.offsets.target = le(ne.offsets.target);
  if (!ke(ne.options, "flip")) {
    ne.offsets.target = {
      ...ne.offsets.target,
      ...Ee(ne.instance.target, ne.offsets.host, ne.placement)
    };
    return ne;
  }
  const me = pe(ne.instance.target, ne.instance.host, 0, "viewport", false);
  let it = ne.placement.split(" ")[0];
  let bt = ne.placement.split(" ")[1] || "";
  const yt = Re("auto", ne.offsets.host, ne.instance.target, ne.instance.host, ne.options.allowedPositions);
  const Wt = [it, yt];
  Wt.forEach((hn, Kt) => {
    if (it !== hn || Wt.length === Kt + 1) {
      return;
    }
    it = ne.placement.split(" ")[0];
    const so = it === "left" && Math.floor(ne.offsets.target.right ?? 0) > Math.floor(ne.offsets.host.left ?? 0) || it === "right" && Math.floor(ne.offsets.target.left ?? 0) < Math.floor(ne.offsets.host.right ?? 0) || it === "top" && Math.floor(ne.offsets.target.bottom ?? 0) > Math.floor(ne.offsets.host.top ?? 0) || it === "bottom" && Math.floor(ne.offsets.target.top ?? 0) < Math.floor(ne.offsets.host.bottom ?? 0);
    const sa = Math.floor(ne.offsets.target.left ?? 0) < Math.floor(me.left ?? 0);
    const js = Math.floor(ne.offsets.target.right ?? 0) > Math.floor(me.right ?? 0);
    const Tr = Math.floor(ne.offsets.target.top ?? 0) < Math.floor(me.top ?? 0);
    const ns = Math.floor(ne.offsets.target.bottom ?? 0) > Math.floor(me.bottom ?? 0);
    const pr = it === "left" && sa || it === "right" && js || it === "top" && Tr || it === "bottom" && ns;
    const Bn = ["top", "bottom"].indexOf(it) !== -1;
    const oi = Bn && bt === "left" && sa || Bn && bt === "right" && js || !Bn && bt === "left" && Tr || !Bn && bt === "right" && ns;
    if (so || pr || oi) {
      if (so || pr) {
        it = Wt[Kt + 1];
      }
      if (oi) {
        bt = function ot(ne) {
          if (ne === "right") {
            return "left";
          } else if (ne === "left") {
            return "right";
          } else {
            return ne;
          }
        }(bt);
      }
      ne.placement = it + (bt ? ` ${bt}` : "");
      ne.offsets.target = {
        ...ne.offsets.target,
        ...Ee(ne.instance.target, ne.offsets.host, ne.placement)
      };
    }
  });
  return ne;
}
function et(ne) {
  if (!ke(ne.options, "preventOverflow")) {
    return ne;
  }
  const it = "transform";
  const bt = ne.instance.target.style;
  const {
    top: Ut,
    left: Ze,
    [it]: pt
  } = bt;
  bt.top = "";
  bt.left = "";
  bt[it] = "";
  const yt = pe(ne.instance.target, ne.instance.host, 0, ne.options.modifiers.preventOverflow?.boundariesElement || "scrollParent", false);
  bt.top = Ut;
  bt.left = Ze;
  bt[it] = pt;
  const hn = {
    primary(Kt) {
      let In = ne.offsets.target[Kt];
      if ((ne.offsets.target[Kt] ?? 0) < (yt[Kt] ?? 0)) {
        In = Math.max(ne.offsets.target[Kt] ?? 0, yt[Kt] ?? 0);
      }
      return {
        [Kt]: In
      };
    },
    secondary(Kt) {
      const In = Kt === "right";
      const di = In ? "left" : "top";
      let Zi = ne.offsets.target[di];
      if ((ne.offsets.target[Kt] ?? 0) > (yt[Kt] ?? 0)) {
        Zi = Math.min(ne.offsets.target[di] ?? 0, (yt[Kt] ?? 0) - ne.offsets.target[In ? "width" : "height"]);
      }
      return {
        [di]: Zi
      };
    }
  };
  ["left", "right", "top", "bottom"].forEach(Kt => {
    const on = ["left", "top", "start"].indexOf(Kt) !== -1 ? hn.primary : hn.secondary;
    ne.offsets.target = {
      ...ne.offsets.target,
      ...on(Kt)
    };
  });
  return ne;
}
function St(ne) {
  const me = ne.placement;
  const it = me.split(" ")[0];
  const bt = me.split(" ")[1];
  if (bt) {
    const {
      host: Ze,
      target: pt
    } = ne.offsets;
    const yt = ["bottom", "top"].indexOf(it) !== -1;
    const Wt = yt ? "left" : "top";
    const hn = yt ? "width" : "height";
    const Kt = {
      start: {
        [Wt]: Ze[Wt]
      },
      end: {
        [Wt]: (Ze[Wt] ?? 0) + Ze[hn] - pt[hn]
      }
    };
    ne.offsets.target = {
      ...pt,
      [Wt]: Wt === bt ? Kt.start[Wt] : Kt.end[Wt]
    };
  }
  return ne;
}
const Lt = new class ve {
  position(me, it) {
    return this.offset(me, it);
  }
  offset(me, it) {
    return Oe(it, me);
  }
  positionElements(me, it, bt, Ut, Ze) {
    const pt = [Et, St, et, Dn];
    const Wt = function lt(ne, me, it, bt) {
      if (!ne || !me) {
        return;
      }
      const Ut = Oe(ne, me);
      if (!it.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/) && !it.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)) {
        it = "auto";
      }
      const Ze = !!it.match(/auto/g);
      let pt = it.match(/auto\s(left|right|top|bottom|start|end)/) ? it.split(" ")[1] || "auto" : it;
      const yt = pt.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);
      if (yt) {
        pt = yt[1] + (yt[2] ? ` ${yt[2]}` : "");
      }
      if (["left right", "right left", "top bottom", "bottom top"].indexOf(pt) !== -1) {
        pt = "auto";
      }
      pt = Re(pt, Ut, ne, me, bt ? bt.allowedPositions : undefined);
      return {
        options: bt || {
          modifiers: {}
        },
        instance: {
          target: ne,
          host: me,
          arrow: undefined
        },
        offsets: {
          target: Ee(ne, Ut, pt),
          host: Ut,
          arrow: undefined
        },
        positionFixed: false,
        placement: pt,
        placementAuto: Ze
      };
    }(it, me, S[bt], Ze);
    if (Wt) {
      return pt.reduce((hn, Kt) => Kt(hn), Wt);
    }
  }
}();
export let sA = (() => {
  class ne {
    constructor(it, bt, Ut) {
      this.update$$ = new k.x();
      this.positionElements = new Map();
      this.isDisabled = false;
      if ((0, b.NF)(Ut)) {
        it.runOutsideAngular(() => {
          this.triggerEvent$ = (0, M.T)((0, v.R)(window, "scroll", {
            passive: true
          }), (0, v.R)(window, "resize", {
            passive: true
          }), (0, C.of)(0, w.Z), this.update$$);
          this.triggerEvent$.subscribe(() => {
            if (!this.isDisabled) {
              this.positionElements.forEach(Ze => {
                (function ft(ne, me, it, bt, Ut, Ze) {
                  const pt = Lt.positionElements(ne, me, it, bt, Ut);
                  if (!pt) {
                    return;
                  }
                  const yt = function Ge(ne) {
                    return {
                      width: ne.offsets.target.width,
                      height: ne.offsets.target.height,
                      left: Math.floor(ne.offsets.target.left ?? 0),
                      top: Math.round(ne.offsets.target.top ?? 0),
                      bottom: Math.round(ne.offsets.target.bottom ?? 0),
                      right: Math.floor(ne.offsets.target.right ?? 0)
                    };
                  }(pt);
                  Yt(me, {
                    "will-change": "transform",
                    top: "0px",
                    left: "0px",
                    transform: `translate3d(${yt.left}px, ${yt.top}px, 0px)`
                  }, Ze);
                  if (pt.instance.arrow) {
                    Yt(pt.instance.arrow, pt.offsets.arrow, Ze);
                  }
                  (function It(ne, me) {
                    const it = ne.instance.target;
                    let bt = it.className;
                    const Ut = (0, i.Wl)().isBs5 ? Bz[ne.placement] : ne.placement;
                    if (ne.placementAuto) {
                      bt = bt.replace(/bs-popover-auto/g, `bs-popover-${Ut}`);
                      bt = bt.replace(/ms-2|me-2|mb-2|mt-2/g, "");
                      bt = bt.replace(/bs-tooltip-auto/g, `bs-tooltip-${Ut}`);
                      bt = bt.replace(/\sauto/g, ` ${Ut}`);
                      if (bt.indexOf("popover") !== -1) {
                        bt = bt + " " + lx(Ut);
                      }
                      if (bt.indexOf("popover") !== -1 && bt.indexOf("popover-auto") === -1) {
                        bt += " popover-auto";
                      }
                      if (bt.indexOf("tooltip") !== -1 && bt.indexOf("tooltip-auto") === -1) {
                        bt += " tooltip-auto";
                      }
                    }
                    bt = bt.replace(/left|right|top|bottom|end|start/g, `${Ut.split(" ")[0]}`);
                    if (me) {
                      me.setAttribute(it, "class", bt);
                    } else {
                      it.className = bt;
                    }
                  })(pt, Ze);
                })(Me(Ze.target), Me(Ze.element), Ze.attachment, Ze.appendToBody, this.options, bt.createRenderer(null, null));
              });
            }
          });
        });
      }
    }
    position(it) {
      this.addPositionElement(it);
    }
    get event$() {
      return this.triggerEvent$;
    }
    disable() {
      this.isDisabled = true;
    }
    enable() {
      this.isDisabled = false;
    }
    addPositionElement(it) {
      this.positionElements.set(Me(it.element), it);
    }
    calcPosition() {
      this.update$$.next(null);
    }
    deletePositionElement(it) {
      this.positionElements.delete(Me(it));
    }
    setOptions(it) {
      this.options = it;
    }
  }
  ne.ɵfac = function (it) {
    return new (it || ne)(t.LFG(t.R0b), t.LFG(t.FYo), t.LFG(t.Lbi));
  };
  ne.ɵprov = t.Yz7({
    token: ne,
    factory: ne.ɵfac,
    providedIn: "root"
  });
  return ne;
})();
function Me(ne) {
  if (typeof ne == "string") {
    return document.querySelector(ne);
  } else if (ne instanceof t.SBq) {
    return ne.nativeElement;
  } else {
    return ne ?? null;
  }
}