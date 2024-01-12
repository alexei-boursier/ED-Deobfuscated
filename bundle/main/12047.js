/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
__webpack_module__.exports = function () {
  "use strict";

  function xe(Ut) {
    return (xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (Ze) {
      return typeof Ze;
    } : function (Ze) {
      if (Ze && typeof Symbol == "function" && Ze.constructor === Symbol && Ze !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof Ze;
      }
    })(Ut);
  }
  function a(Ut, Ze) {
    return (a = Object.setPrototypeOf || function (yt, Wt) {
      yt.__proto__ = Wt;
      return yt;
    })(Ut, Ze);
  }
  function i() {
    if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch {
      return false;
    }
  }
  function t(Ut, Ze, pt) {
    return (t = i() ? Reflect.construct : function (Wt, hn, Kt) {
      var on = [null];
      on.push.apply(on, hn);
      var In = new (Function.bind.apply(Wt, on))();
      if (Kt) {
        a(In, Kt.prototype);
      }
      return In;
    }).apply(null, arguments);
  }
  function b(Ut) {
    return function k(Ut) {
      if (Array.isArray(Ut)) {
        return C(Ut);
      }
    }(Ut) || function M(Ut) {
      if (typeof Symbol !== "undefined" && Ut[Symbol.iterator] != null || Ut["@@iterator"] != null) {
        return Array.from(Ut);
      }
    }(Ut) || function v(Ut, Ze) {
      if (Ut) {
        if (typeof Ut == "string") {
          return C(Ut, Ze);
        }
        var pt = Object.prototype.toString.call(Ut).slice(8, -1);
        if (pt === "Object" && Ut.constructor) {
          pt = Ut.constructor.name;
        }
        if (pt === "Map" || pt === "Set") {
          return Array.from(Ut);
        }
        if (pt === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(pt)) {
          return C(Ut, Ze);
        }
      }
    }(Ut) || function w() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function C(Ut, Ze) {
    if (Ze == null || Ze > Ut.length) {
      Ze = Ut.length;
    }
    for (var pt = 0, yt = new Array(Ze); pt < Ze; pt++) {
      yt[pt] = Ut[pt];
    }
    return yt;
  }
  var S = Object.hasOwnProperty;
  var L = Object.setPrototypeOf;
  var I = Object.isFrozen;
  var E = Object.getPrototypeOf;
  var O = Object.getOwnPropertyDescriptor;
  var x = Object.freeze;
  var U = Object.seal;
  var B = Object.create;
  var F = typeof Reflect !== "undefined" && Reflect;
  var Z = F.apply;
  var X = F.construct;
  Z ||= function (Ze, pt, yt) {
    return Ze.apply(pt, yt);
  };
  x ||= function (Ze) {
    return Ze;
  };
  U ||= function (Ze) {
    return Ze;
  };
  X ||= function (Ze, pt) {
    return t(Ze, b(pt));
  };
  var le = re(Array.prototype.forEach);
  var fe = re(Array.prototype.pop);
  var q = re(Array.prototype.push);
  var j = re(String.prototype.toLowerCase);
  var G = re(String.prototype.toString);
  var se = re(String.prototype.match);
  var W = re(String.prototype.replace);
  var Pe = re(String.prototype.indexOf);
  var Le = re(String.prototype.trim);
  var he = re(RegExp.prototype.test);
  var pe = function Re(Ut) {
    return function () {
      for (var Ze = arguments.length, pt = new Array(Ze), yt = 0; yt < Ze; yt++) {
        pt[yt] = arguments[yt];
      }
      return X(Ut, pt);
    };
  }(TypeError);
  function re(Ut) {
    return function (Ze) {
      for (var pt = arguments.length, yt = new Array(pt > 1 ? pt - 1 : 0), Wt = 1; Wt < pt; Wt++) {
        yt[Wt - 1] = arguments[Wt];
      }
      return Z(Ut, Ze, yt);
    };
  }
  function Ge(Ut, Ze, pt) {
    pt = pt || j;
    if (L) {
      L(Ut, null);
    }
    for (var yt = Ze.length; yt--;) {
      var Wt = Ze[yt];
      if (typeof Wt == "string") {
        var hn = pt(Wt);
        if (hn !== Wt) {
          if (!I(Ze)) {
            Ze[yt] = hn;
          }
          Wt = hn;
        }
      }
      Ut[Wt] = true;
    }
    return Ut;
  }
  function Ue(Ut) {
    var pt;
    var Ze = B(null);
    for (pt in Ut) {
      if (Z(S, Ut, [pt]) === true) {
        Ze[pt] = Ut[pt];
      }
    }
    return Ze;
  }
  function ot(Ut, Ze) {
    for (; Ut !== null;) {
      var pt = O(Ut, Ze);
      if (pt) {
        if (pt.get) {
          return re(pt.get);
        }
        if (typeof pt.value == "function") {
          return re(pt.value);
        }
      }
      Ut = E(Ut);
    }
    return function yt(Wt) {
      console.warn("fallback value for", Wt);
      return null;
    };
  }
  var st = x(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  var rt = x(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  var Oe = x(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  var Ee = x(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  var ke = x(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
  var Be = x(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  var De = x(["#text"]);
  var Qe = x(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
  var It = x(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  var Yt = x(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  var Dn = x(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  var Et = U(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  var lt = U(/<%[\w\W]*|[\w\W]*%>/gm);
  var et = U(/\${[\w\W]*}/gm);
  var St = U(/^data-[\-\w.\u00B7-\uFFFF]/);
  var ve = U(/^aria-[\-\w]+$/);
  var Lt = U(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  var ft = U(/^(?:\w+script|data):/i);
  var qe = U(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  var Me = U(/^html$/i);
  function ne() {
    if (typeof window === "undefined") {
      return null;
    } else {
      return window;
    }
  }
  function me(Ze, pt) {
    if (xe(Ze) !== "object" || typeof Ze.createPolicy != "function") {
      return null;
    }
    var yt = null;
    var Wt = "data-tt-policy-suffix";
    if (pt.currentScript && pt.currentScript.hasAttribute(Wt)) {
      yt = pt.currentScript.getAttribute(Wt);
    }
    var hn = "dompurify" + (yt ? "#" + yt : "");
    try {
      return Ze.createPolicy(hn, {
        createHTML: function (on) {
          return on;
        },
        createScriptURL: function (on) {
          return on;
        }
      });
    } catch {
      console.warn("TrustedTypes policy " + hn + " could not be created.");
      return null;
    }
  }
  return function it() {
    var Ut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ne();
    function Ze(ut) {
      return it(ut);
    }
    Ze.version = "2.4.5";
    Ze.removed = [];
    if (!Ut || !Ut.document || Ut.document.nodeType !== 9) {
      Ze.isSupported = false;
      return Ze;
    }
    var pt = Ut.document;
    var yt = Ut.document;
    var Wt = Ut.DocumentFragment;
    var hn = Ut.HTMLTemplateElement;
    var Kt = Ut.Node;
    var on = Ut.Element;
    var Rn = Ut.NodeFilter;
    var In = Ut.NamedNodeMap;
    var di = In === undefined ? Ut.NamedNodeMap || Ut.MozNamedAttrMap : In;
    var Si = Ut.HTMLFormElement;
    var Zi = Ut.DOMParser;
    var $i = Ut.trustedTypes;
    var Qi = on.prototype;
    var br = ot(Qi, "cloneNode");
    var Ar = ot(Qi, "nextSibling");
    var vr = ot(Qi, "childNodes");
    var Ur = ot(Qi, "parentNode");
    if (typeof hn == "function") {
      var Br = yt.createElement("template");
      if (Br.content && Br.content.ownerDocument) {
        yt = Br.content.ownerDocument;
      }
    }
    var rs = me($i, pt);
    var vs = rs ? rs.createHTML("") : "";
    var so = yt.implementation;
    var sa = yt.createNodeIterator;
    var js = yt.createDocumentFragment;
    var Tr = yt.getElementsByTagName;
    var ns = pt.importNode;
    var pr = {};
    try {
      pr = Ue(yt).documentMode ? yt.documentMode : {};
    } catch {}
    var Bn = {};
    Ze.isSupported = typeof Ur == "function" && so && typeof so.createHTMLDocument !== "undefined" && pr !== 9;
    var So;
    var po;
    var oi = Et;
    var fi = lt;
    var bn = et;
    var pn = St;
    var An = ve;
    var si = ft;
    var Di = qe;
    var dr = Lt;
    var Vr = null;
    var Or = Ge({}, [].concat(b(st), b(rt), b(Oe), b(ke), b(De)));
    var is = null;
    var _o = Ge({}, [].concat(b(Qe), b(It), b(Yt), b(Dn)));
    var kr = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    var Zs = null;
    var No = null;
    var fa = true;
    var bo = true;
    var ks = false;
    var Gs = true;
    var Zr = false;
    var ho = false;
    var ya = false;
    var Ko = false;
    var qi = false;
    var qo = false;
    var ea = false;
    var Oa = true;
    var qa = false;
    var ja = "user-content-";
    var la = true;
    var ta = false;
    var Fr = {};
    var Es = null;
    var Ao = Ge({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    var Pa = null;
    var Po = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
    var dl = null;
    var qs = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    var Fo = "http://www.w3.org/1998/Math/MathML";
    var ha = "http://www.w3.org/2000/svg";
    var Ca = "http://www.w3.org/1999/xhtml";
    var Za = Ca;
    var fl = false;
    var Ml = null;
    var ko = Ge({}, [Fo, ha, Ca], G);
    var pa = ["application/xhtml+xml", "text/html"];
    var Ia = "text/html";
    var zs = null;
    var hs = yt.createElement("form");
    function Rs(ut) {
      return ut instanceof RegExp || ut instanceof Function;
    }
    function eo(ut) {
      if (!zs || zs !== ut) {
        if (!ut || xe(ut) !== "object") {
          ut = {};
        }
        ut = Ue(ut);
        So = So = pa.indexOf(ut.PARSER_MEDIA_TYPE) === -1 ? Ia : ut.PARSER_MEDIA_TYPE;
        po = So === "application/xhtml+xml" ? G : j;
        Vr = "ALLOWED_TAGS" in ut ? Ge({}, ut.ALLOWED_TAGS, po) : Or;
        is = "ALLOWED_ATTR" in ut ? Ge({}, ut.ALLOWED_ATTR, po) : _o;
        Ml = "ALLOWED_NAMESPACES" in ut ? Ge({}, ut.ALLOWED_NAMESPACES, G) : ko;
        dl = "ADD_URI_SAFE_ATTR" in ut ? Ge(Ue(qs), ut.ADD_URI_SAFE_ATTR, po) : qs;
        Pa = "ADD_DATA_URI_TAGS" in ut ? Ge(Ue(Po), ut.ADD_DATA_URI_TAGS, po) : Po;
        Es = "FORBID_CONTENTS" in ut ? Ge({}, ut.FORBID_CONTENTS, po) : Ao;
        Zs = "FORBID_TAGS" in ut ? Ge({}, ut.FORBID_TAGS, po) : {};
        No = "FORBID_ATTR" in ut ? Ge({}, ut.FORBID_ATTR, po) : {};
        Fr = "USE_PROFILES" in ut && ut.USE_PROFILES;
        fa = ut.ALLOW_ARIA_ATTR !== false;
        bo = ut.ALLOW_DATA_ATTR !== false;
        ks = ut.ALLOW_UNKNOWN_PROTOCOLS || false;
        Gs = ut.ALLOW_SELF_CLOSE_IN_ATTR !== false;
        Zr = ut.SAFE_FOR_TEMPLATES || false;
        ho = ut.WHOLE_DOCUMENT || false;
        qi = ut.RETURN_DOM || false;
        qo = ut.RETURN_DOM_FRAGMENT || false;
        ea = ut.RETURN_TRUSTED_TYPE || false;
        Ko = ut.FORCE_BODY || false;
        Oa = ut.SANITIZE_DOM !== false;
        qa = ut.SANITIZE_NAMED_PROPS || false;
        la = ut.KEEP_CONTENT !== false;
        ta = ut.IN_PLACE || false;
        dr = ut.ALLOWED_URI_REGEXP || dr;
        Za = ut.NAMESPACE || Ca;
        kr = ut.CUSTOM_ELEMENT_HANDLING || {};
        if (ut.CUSTOM_ELEMENT_HANDLING && Rs(ut.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
          kr.tagNameCheck = ut.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (ut.CUSTOM_ELEMENT_HANDLING && Rs(ut.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
          kr.attributeNameCheck = ut.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (ut.CUSTOM_ELEMENT_HANDLING && typeof ut.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean") {
          kr.allowCustomizedBuiltInElements = ut.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        if (Zr) {
          bo = false;
        }
        if (qo) {
          qi = true;
        }
        if (Fr) {
          Vr = Ge({}, b(De));
          is = [];
          if (Fr.html === true) {
            Ge(Vr, st);
            Ge(is, Qe);
          }
          if (Fr.svg === true) {
            Ge(Vr, rt);
            Ge(is, It);
            Ge(is, Dn);
          }
          if (Fr.svgFilters === true) {
            Ge(Vr, Oe);
            Ge(is, It);
            Ge(is, Dn);
          }
          if (Fr.mathMl === true) {
            Ge(Vr, ke);
            Ge(is, Yt);
            Ge(is, Dn);
          }
        }
        if (ut.ADD_TAGS) {
          if (Vr === Or) {
            Vr = Ue(Vr);
          }
          Ge(Vr, ut.ADD_TAGS, po);
        }
        if (ut.ADD_ATTR) {
          if (is === _o) {
            is = Ue(is);
          }
          Ge(is, ut.ADD_ATTR, po);
        }
        if (ut.ADD_URI_SAFE_ATTR) {
          Ge(dl, ut.ADD_URI_SAFE_ATTR, po);
        }
        if (ut.FORBID_CONTENTS) {
          if (Es === Ao) {
            Es = Ue(Es);
          }
          Ge(Es, ut.FORBID_CONTENTS, po);
        }
        if (la) {
          Vr["#text"] = true;
        }
        if (ho) {
          Ge(Vr, ["html", "head", "body"]);
        }
        if (Vr.table) {
          Ge(Vr, ["tbody"]);
          delete Zs.tbody;
        }
        if (x) {
          x(ut);
        }
        zs = ut;
      }
    }
    var Vs = Ge({}, ["mi", "mo", "mn", "ms", "mtext"]);
    var Qs = Ge({}, ["foreignobject", "desc", "title", "annotation-xml"]);
    var Wo = Ge({}, ["title", "style", "font", "a", "script"]);
    var Ra = Ge({}, rt);
    Ge(Ra, Oe);
    Ge(Ra, Ee);
    var Uo = Ge({}, ke);
    Ge(Uo, Be);
    function _r(ut) {
      var vt = Ur(ut);
      if (!vt || !vt.tagName) {
        vt = {
          namespaceURI: Za,
          tagName: "template"
        };
      }
      var Zt = j(ut.tagName);
      var kn = j(vt.tagName);
      return !!Ml[ut.namespaceURI] && (ut.namespaceURI === ha ? vt.namespaceURI === Ca ? Zt === "svg" : vt.namespaceURI === Fo ? Zt === "svg" && (kn === "annotation-xml" || Vs[kn]) : Boolean(Ra[Zt]) : ut.namespaceURI === Fo ? vt.namespaceURI === Ca ? Zt === "math" : vt.namespaceURI === ha ? Zt === "math" && Qs[kn] : Boolean(Uo[Zt]) : ut.namespaceURI === Ca ? (vt.namespaceURI !== ha || !!Qs[kn]) && (vt.namespaceURI !== Fo || !!Vs[kn]) && !Uo[Zt] && (Wo[Zt] || !Ra[Zt]) : So === "application/xhtml+xml" && !!Ml[ut.namespaceURI]);
    }
    function at(ut) {
      q(Ze.removed, {
        element: ut
      });
      try {
        ut.parentNode.removeChild(ut);
      } catch {
        try {
          ut.outerHTML = vs;
        } catch {
          ut.remove();
        }
      }
    }
    function Je(ut, vt) {
      try {
        q(Ze.removed, {
          attribute: vt.getAttributeNode(ut),
          from: vt
        });
      } catch {
        q(Ze.removed, {
          attribute: null,
          from: vt
        });
      }
      vt.removeAttribute(ut);
      if (ut === "is" && !is[ut]) {
        if (qi || qo) {
          try {
            at(vt);
          } catch {}
        } else {
          try {
            vt.setAttribute(ut, "");
          } catch {}
        }
      }
    }
    function be(ut) {
      var vt;
      var Zt;
      if (Ko) {
        ut = "<remove></remove>" + ut;
      } else {
        var kn = se(ut, /^[\r\n\t ]+/);
        Zt = kn && kn[0];
      }
      if (So === "application/xhtml+xml" && Za === Ca) {
        ut = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + ut + "</body></html>";
      }
      var Zn = rs ? rs.createHTML(ut) : ut;
      if (Za === Ca) {
        try {
          vt = new Zi().parseFromString(Zn, So);
        } catch {}
      }
      if (!vt || !vt.documentElement) {
        vt = so.createDocument(Za, "template", null);
        try {
          vt.documentElement.innerHTML = fl ? vs : Zn;
        } catch {}
      }
      var li = vt.body || vt.documentElement;
      if (ut && Zt) {
        li.insertBefore(yt.createTextNode(Zt), li.childNodes[0] || null);
      }
      if (Za === Ca) {
        return Tr.call(vt, ho ? "html" : "body")[0];
      } else if (ho) {
        return vt.documentElement;
      } else {
        return li;
      }
    }
    function Bt(ut) {
      return sa.call(ut.ownerDocument || ut, ut, Rn.SHOW_ELEMENT | Rn.SHOW_COMMENT | Rn.SHOW_TEXT, null, false);
    }
    function an(ut) {
      return ut instanceof Si && (typeof ut.nodeName != "string" || typeof ut.textContent != "string" || typeof ut.removeChild != "function" || !(ut.attributes instanceof di) || typeof ut.removeAttribute != "function" || typeof ut.setAttribute != "function" || typeof ut.namespaceURI != "string" || typeof ut.insertBefore != "function" || typeof ut.hasChildNodes != "function");
    }
    function Gn(ut) {
      if (xe(Kt) === "object") {
        return ut instanceof Kt;
      } else {
        return ut && xe(ut) === "object" && typeof ut.nodeType == "number" && typeof ut.nodeName == "string";
      }
    }
    function Ki(ut, vt, Zt) {
      if (!!Bn[ut]) {
        le(Bn[ut], function (kn) {
          kn.call(Ze, vt, Zt, zs);
        });
      }
    }
    function Lr(ut) {
      var vt;
      Ki("beforeSanitizeElements", ut, null);
      if (an(ut) || he(/[\u0080-\uFFFF]/, ut.nodeName)) {
        at(ut);
        return true;
      }
      var Zt = po(ut.nodeName);
      Ki("uponSanitizeElement", ut, {
        tagName: Zt,
        allowedTags: Vr
      });
      if (ut.hasChildNodes() && !Gn(ut.firstElementChild) && (!Gn(ut.content) || !Gn(ut.content.firstElementChild)) && he(/<[/\w]/g, ut.innerHTML) && he(/<[/\w]/g, ut.textContent) || Zt === "select" && he(/<template/i, ut.innerHTML)) {
        at(ut);
        return true;
      }
      if (!Vr[Zt] || Zs[Zt]) {
        if (!Zs[Zt] && zr(Zt) && (kr.tagNameCheck instanceof RegExp && he(kr.tagNameCheck, Zt) || kr.tagNameCheck instanceof Function && kr.tagNameCheck(Zt))) {
          return false;
        }
        if (la && !Es[Zt]) {
          var kn = Ur(ut) || ut.parentNode;
          var Zn = vr(ut) || ut.childNodes;
          if (Zn && kn) {
            for (var Oi = Zn.length - 1; Oi >= 0; --Oi) {
              kn.insertBefore(br(Zn[Oi], true), Ar(ut));
            }
          }
        }
        at(ut);
        return true;
      }
      if (ut instanceof on && !_r(ut) || (Zt === "noscript" || Zt === "noembed") && he(/<\/no(script|embed)/i, ut.innerHTML)) {
        at(ut);
        return true;
      } else {
        if (Zr && ut.nodeType === 3) {
          vt = W(vt = ut.textContent, oi, " ");
          vt = W(vt, fi, " ");
          vt = W(vt, bn, " ");
          if (ut.textContent !== vt) {
            q(Ze.removed, {
              element: ut.cloneNode()
            });
            ut.textContent = vt;
          }
        }
        Ki("afterSanitizeElements", ut, null);
        return false;
      }
    }
    function Gr(ut, vt, Zt) {
      if (Oa && (vt === "id" || vt === "name") && (Zt in yt || Zt in hs)) {
        return false;
      }
      if ((!bo || No[vt] || !he(pn, vt)) && (!fa || !he(An, vt))) {
        if (!is[vt] || No[vt]) {
          if ((!zr(ut) || (!(kr.tagNameCheck instanceof RegExp) || !he(kr.tagNameCheck, ut)) && (!(kr.tagNameCheck instanceof Function) || !kr.tagNameCheck(ut)) || (!(kr.attributeNameCheck instanceof RegExp) || !he(kr.attributeNameCheck, vt)) && (!(kr.attributeNameCheck instanceof Function) || !kr.attributeNameCheck(vt))) && (vt !== "is" || !kr.allowCustomizedBuiltInElements || (!(kr.tagNameCheck instanceof RegExp) || !he(kr.tagNameCheck, Zt)) && (!(kr.tagNameCheck instanceof Function) || !kr.tagNameCheck(Zt)))) {
            return false;
          }
        } else if (!dl[vt] && !he(dr, W(Zt, Di, "")) && (vt !== "src" && vt !== "xlink:href" && vt !== "href" || ut === "script" || Pe(Zt, "data:") !== 0 || !Pa[ut]) && (!ks || he(si, W(Zt, Di, ""))) && Zt) {
          return false;
        }
      }
      return true;
    }
    function zr(ut) {
      return ut.indexOf("-") > 0;
    }
    function Ks(ut) {
      var vt;
      var Zt;
      var kn;
      var Zn;
      Ki("beforeSanitizeAttributes", ut, null);
      var li = ut.attributes;
      if (li) {
        var Oi = {
          attrName: "",
          attrValue: "",
          keepAttr: true,
          allowedAttributes: is
        };
        for (Zn = li.length; Zn--;) {
          var nr = (vt = li[Zn]).name;
          var mr = vt.namespaceURI;
          Zt = nr === "value" ? vt.value : Le(vt.value);
          kn = po(nr);
          Oi.attrName = kn;
          Oi.attrValue = Zt;
          Oi.keepAttr = true;
          Oi.forceKeepAttr = undefined;
          Ki("uponSanitizeAttribute", ut, Oi);
          Zt = Oi.attrValue;
          if (!Oi.forceKeepAttr && (Je(nr, ut), Oi.keepAttr)) {
            if (!Gs && he(/\/>/i, Zt)) {
              Je(nr, ut);
              continue;
            }
            if (Zr) {
              Zt = W(Zt, oi, " ");
              Zt = W(Zt, fi, " ");
              Zt = W(Zt, bn, " ");
            }
            var Jr = po(ut.nodeName);
            if (Gr(Jr, kn, Zt)) {
              if (qa && (kn === "id" || kn === "name")) {
                Je(nr, ut);
                Zt = ja + Zt;
              }
              if (rs && xe($i) === "object" && typeof $i.getAttributeType == "function" && !mr) {
                switch ($i.getAttributeType(Jr, kn)) {
                  case "TrustedHTML":
                    Zt = rs.createHTML(Zt);
                    break;
                  case "TrustedScriptURL":
                    Zt = rs.createScriptURL(Zt);
                }
              }
              try {
                if (mr) {
                  ut.setAttributeNS(mr, nr, Zt);
                } else {
                  ut.setAttribute(nr, Zt);
                }
                fe(Ze.removed);
              } catch {}
            }
          }
        }
        Ki("afterSanitizeAttributes", ut, null);
      }
    }
    var Js = function Xt(ut) {
      var vt;
      var Zt = Bt(ut);
      for (Ki("beforeSanitizeShadowDOM", ut, null); vt = Zt.nextNode();) {
        Ki("uponSanitizeShadowNode", vt, null);
        if (!Lr(vt)) {
          if (vt.content instanceof Wt) {
            Xt(vt.content);
          }
          Ks(vt);
        }
      }
      Ki("afterSanitizeShadowDOM", ut, null);
    };
    Ze.sanitize = function (Xt) {
      var vt;
      var Zt;
      var kn;
      var Zn;
      var li;
      var ut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (fl = !Xt) {
        Xt = "<!-->";
      }
      if (typeof Xt != "string" && !Gn(Xt)) {
        if (typeof Xt.toString != "function") {
          throw pe("toString is not a function");
        }
        if (typeof (Xt = Xt.toString()) != "string") {
          throw pe("dirty is not a string, aborting");
        }
      }
      if (!Ze.isSupported) {
        if (xe(Ut.toStaticHTML) === "object" || typeof Ut.toStaticHTML == "function") {
          if (typeof Xt == "string") {
            return Ut.toStaticHTML(Xt);
          }
          if (Gn(Xt)) {
            return Ut.toStaticHTML(Xt.outerHTML);
          }
        }
        return Xt;
      }
      if (!ya) {
        eo(ut);
      }
      Ze.removed = [];
      if (typeof Xt == "string") {
        ta = false;
      }
      if (ta) {
        if (Xt.nodeName) {
          var Oi = po(Xt.nodeName);
          if (!Vr[Oi] || Zs[Oi]) {
            throw pe("root node is forbidden and cannot be sanitized in-place");
          }
        }
      } else if (Xt instanceof Kt) {
        if ((Zt = (vt = be("<!---->")).ownerDocument.importNode(Xt, true)).nodeType === 1 && Zt.nodeName === "BODY" || Zt.nodeName === "HTML") {
          vt = Zt;
        } else {
          vt.appendChild(Zt);
        }
      } else {
        if (!qi && !Zr && !ho && Xt.indexOf("<") === -1) {
          if (rs && ea) {
            return rs.createHTML(Xt);
          } else {
            return Xt;
          }
        }
        if (!(vt = be(Xt))) {
          if (qi) {
            return null;
          } else if (ea) {
            return vs;
          } else {
            return "";
          }
        }
      }
      if (vt && Ko) {
        at(vt.firstChild);
      }
      for (var Xi = Bt(ta ? Xt : vt); kn = Xi.nextNode();) {
        if ((kn.nodeType !== 3 || kn !== Zn) && !Lr(kn)) {
          if (kn.content instanceof Wt) {
            Js(kn.content);
          }
          Ks(kn);
          Zn = kn;
        }
      }
      Zn = null;
      if (ta) {
        return Xt;
      }
      if (qi) {
        if (qo) {
          for (li = js.call(vt.ownerDocument); vt.firstChild;) {
            li.appendChild(vt.firstChild);
          }
        } else {
          li = vt;
        }
        if (is.shadowroot || is.shadowrootmod) {
          li = ns.call(pt, li, true);
        }
        return li;
      }
      var nr = ho ? vt.outerHTML : vt.innerHTML;
      if (ho && Vr["!doctype"] && vt.ownerDocument && vt.ownerDocument.doctype && vt.ownerDocument.doctype.name && he(Me, vt.ownerDocument.doctype.name)) {
        nr = "<!DOCTYPE " + vt.ownerDocument.doctype.name + ">\n" + nr;
      }
      if (Zr) {
        nr = W(nr, oi, " ");
        nr = W(nr, fi, " ");
        nr = W(nr, bn, " ");
      }
      if (rs && ea) {
        return rs.createHTML(nr);
      } else {
        return nr;
      }
    };
    Ze.setConfig = function (Xt) {
      eo(Xt);
      ya = true;
    };
    Ze.clearConfig = function () {
      zs = null;
      ya = false;
    };
    Ze.isValidAttribute = function (Xt, ut, vt) {
      if (!zs) {
        eo({});
      }
      var Zt = po(Xt);
      var kn = po(ut);
      return Gr(Zt, kn, vt);
    };
    Ze.addHook = function (Xt, ut) {
      if (typeof ut == "function") {
        Bn[Xt] = Bn[Xt] || [];
        q(Bn[Xt], ut);
      }
    };
    Ze.removeHook = function (Xt) {
      if (Bn[Xt]) {
        return fe(Bn[Xt]);
      }
    };
    Ze.removeHooks = function (Xt) {
      Bn[Xt] &&= [];
    };
    Ze.removeAllHooks = function () {
      Bn = {};
    };
    return Ze;
  }();
}();