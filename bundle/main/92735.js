/*! @license DOMPurify 3.0.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.4/LICENSE */
__webpack_module__.exports = function () {
  "use strict";

  const {
    entries: xe,
    setPrototypeOf: a,
    isFrozen: i,
    getPrototypeOf: t,
    getOwnPropertyDescriptor: b
  } = Object;
  let {
    freeze: k,
    seal: M,
    create: v
  } = Object;
  let {
    apply: C,
    construct: w
  } = typeof Reflect !== "undefined" && Reflect;
  C ||= function (ve, Lt, ft) {
    return ve.apply(Lt, ft);
  };
  k ||= function (ve) {
    return ve;
  };
  M ||= function (ve) {
    return ve;
  };
  w ||= function (ve, Lt) {
    return new ve(...Lt);
  };
  const S = le(Array.prototype.forEach);
  const L = le(Array.prototype.pop);
  const I = le(Array.prototype.push);
  const E = le(String.prototype.toLowerCase);
  const O = le(String.prototype.toString);
  const x = le(String.prototype.match);
  const U = le(String.prototype.replace);
  const B = le(String.prototype.indexOf);
  const F = le(String.prototype.trim);
  const Z = le(RegExp.prototype.test);
  const X = function fe(St) {
    return function () {
      for (var ve = arguments.length, Lt = new Array(ve), ft = 0; ft < ve; ft++) {
        Lt[ft] = arguments[ft];
      }
      return w(St, Lt);
    };
  }(TypeError);
  function le(St) {
    return function (ve) {
      for (var Lt = arguments.length, ft = new Array(Lt > 1 ? Lt - 1 : 0), qe = 1; qe < Lt; qe++) {
        ft[qe - 1] = arguments[qe];
      }
      return C(St, ve, ft);
    };
  }
  function q(St, ve, Lt) {
    Lt = Lt ?? E;
    if (a) {
      a(St, null);
    }
    let qe = ve.length;
    for (; qe--;) {
      let Me = ve[qe];
      if (typeof Me == "string") {
        const ne = Lt(Me);
        if (ne !== Me) {
          if (!i(ve)) {
            ve[qe] = ne;
          }
          Me = ne;
        }
      }
      St[Me] = true;
    }
    return St;
  }
  function j(St) {
    const ve = v(null);
    for (const [Lt, ft] of xe(St)) {
      ve[Lt] = ft;
    }
    return ve;
  }
  function G(St, ve) {
    for (; St !== null;) {
      const ft = b(St, ve);
      if (ft) {
        if (ft.get) {
          return le(ft.get);
        }
        if (typeof ft.value == "function") {
          return le(ft.value);
        }
      }
      St = t(St);
    }
    return function Lt(ft) {
      console.warn("fallback value for", ft);
      return null;
    };
  }
  const se = k(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  const W = k(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  const Pe = k(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  const Le = k(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  const he = k(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
  const pe = k(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  const re = k(["#text"]);
  const Re = k(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
  const Ge = k(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  const Ue = k(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  const ot = k(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  const st = M(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  const rt = M(/<%[\w\W]*|[\w\W]*%>/gm);
  const Oe = M(/\${[\w\W]*}/gm);
  const Ee = M(/^data-[\-\w.\u00B7-\uFFFF]/);
  const ke = M(/^aria-[\-\w]+$/);
  const Be = M(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  const De = M(/^(?:\w+script|data):/i);
  const Qe = M(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  const It = M(/^html$/i);
  var Yt = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: st,
    ERB_EXPR: rt,
    TMPLIT_EXPR: Oe,
    DATA_ATTR: Ee,
    ARIA_ATTR: ke,
    IS_ALLOWED_URI: Be,
    IS_SCRIPT_OR_DATA: De,
    ATTR_WHITESPACE: Qe,
    DOCTYPE_NAME: It
  });
  const Dn = () => typeof window === "undefined" ? null : window;
  const Et = function (ve, Lt) {
    if (typeof ve != "object" || typeof ve.createPolicy != "function") {
      return null;
    }
    let ft = null;
    const qe = "data-tt-policy-suffix";
    if (Lt && Lt.hasAttribute(qe)) {
      ft = Lt.getAttribute(qe);
    }
    const Me = "dompurify" + (ft ? "#" + ft : "");
    try {
      return ve.createPolicy(Me, {
        createHTML: ne => ne,
        createScriptURL: ne => ne
      });
    } catch {
      console.warn("TrustedTypes policy " + Me + " could not be created.");
      return null;
    }
  };
  return function lt() {
    let St = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Dn();
    const ve = _r => lt(_r);
    ve.version = "3.0.4";
    ve.removed = [];
    if (!St || !St.document || St.document.nodeType !== 9) {
      ve.isSupported = false;
      return ve;
    }
    const Lt = St.document;
    const ft = Lt.currentScript;
    let {
      document: qe
    } = St;
    const {
      DocumentFragment: Me,
      HTMLTemplateElement: ne,
      Node: me,
      Element: it,
      NodeFilter: bt,
      NamedNodeMap: Ut = St.NamedNodeMap || St.MozNamedAttrMap,
      HTMLFormElement: Ze,
      DOMParser: pt,
      trustedTypes: yt
    } = St;
    const Wt = it.prototype;
    const hn = G(Wt, "cloneNode");
    const Kt = G(Wt, "nextSibling");
    const on = G(Wt, "childNodes");
    const Rn = G(Wt, "parentNode");
    if (typeof ne == "function") {
      const _r = qe.createElement("template");
      if (_r.content && _r.content.ownerDocument) {
        qe = _r.content.ownerDocument;
      }
    }
    let In;
    let di = "";
    const {
      implementation: Si,
      createNodeIterator: Zi,
      createDocumentFragment: $i,
      getElementsByTagName: Qi
    } = qe;
    const {
      importNode: br
    } = Lt;
    let Ar = {};
    ve.isSupported = typeof xe == "function" && typeof Rn == "function" && Si && Si.createHTMLDocument !== undefined;
    const {
      MUSTACHE_EXPR: vr,
      ERB_EXPR: Ur,
      TMPLIT_EXPR: Br,
      DATA_ATTR: rs,
      ARIA_ATTR: vs,
      IS_SCRIPT_OR_DATA: wo,
      ATTR_WHITESPACE: so
    } = Yt;
    let {
      IS_ALLOWED_URI: sa
    } = Yt;
    let js = null;
    const Tr = q({}, [...se, ...W, ...Pe, ...he, ...re]);
    let ns = null;
    const pr = q({}, [...Re, ...Ge, ...Ue, ...ot]);
    let Bn = Object.seal(Object.create(null, {
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
    let oi = null;
    let fi = null;
    let bn = true;
    let pn = true;
    let An = false;
    let si = true;
    let Di = false;
    let dr = false;
    let Vr = false;
    let Or = false;
    let is = false;
    let _o = false;
    let kr = false;
    let Zs = true;
    let No = false;
    const fa = "user-content-";
    let bo = true;
    let ks = false;
    let Gs = {};
    let Zr = null;
    const ho = q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let ya = null;
    const Ko = q({}, ["audio", "video", "img", "source", "image", "track"]);
    let qi = null;
    const qo = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    const ea = "http://www.w3.org/1998/Math/MathML";
    const Oa = "http://www.w3.org/2000/svg";
    const qa = "http://www.w3.org/1999/xhtml";
    let ja = qa;
    let la = false;
    let ta = null;
    const Fr = q({}, [ea, Oa, qa], O);
    let Es;
    const Ao = ["application/xhtml+xml", "text/html"];
    const Pa = "text/html";
    let Po;
    let dl = null;
    const qs = qe.createElement("form");
    const Fo = function (at) {
      return at instanceof RegExp || at instanceof Function;
    };
    const ha = function (at) {
      if (!dl || dl !== at) {
        if (!at || typeof at != "object") {
          at = {};
        }
        at = j(at);
        Es = Es = Ao.indexOf(at.PARSER_MEDIA_TYPE) === -1 ? Pa : at.PARSER_MEDIA_TYPE;
        Po = Es === "application/xhtml+xml" ? O : E;
        js = "ALLOWED_TAGS" in at ? q({}, at.ALLOWED_TAGS, Po) : Tr;
        ns = "ALLOWED_ATTR" in at ? q({}, at.ALLOWED_ATTR, Po) : pr;
        ta = "ALLOWED_NAMESPACES" in at ? q({}, at.ALLOWED_NAMESPACES, O) : Fr;
        qi = "ADD_URI_SAFE_ATTR" in at ? q(j(qo), at.ADD_URI_SAFE_ATTR, Po) : qo;
        ya = "ADD_DATA_URI_TAGS" in at ? q(j(Ko), at.ADD_DATA_URI_TAGS, Po) : Ko;
        Zr = "FORBID_CONTENTS" in at ? q({}, at.FORBID_CONTENTS, Po) : ho;
        oi = "FORBID_TAGS" in at ? q({}, at.FORBID_TAGS, Po) : {};
        fi = "FORBID_ATTR" in at ? q({}, at.FORBID_ATTR, Po) : {};
        Gs = "USE_PROFILES" in at && at.USE_PROFILES;
        bn = at.ALLOW_ARIA_ATTR !== false;
        pn = at.ALLOW_DATA_ATTR !== false;
        An = at.ALLOW_UNKNOWN_PROTOCOLS || false;
        si = at.ALLOW_SELF_CLOSE_IN_ATTR !== false;
        Di = at.SAFE_FOR_TEMPLATES || false;
        dr = at.WHOLE_DOCUMENT || false;
        is = at.RETURN_DOM || false;
        _o = at.RETURN_DOM_FRAGMENT || false;
        kr = at.RETURN_TRUSTED_TYPE || false;
        Or = at.FORCE_BODY || false;
        Zs = at.SANITIZE_DOM !== false;
        No = at.SANITIZE_NAMED_PROPS || false;
        bo = at.KEEP_CONTENT !== false;
        ks = at.IN_PLACE || false;
        sa = at.ALLOWED_URI_REGEXP || Be;
        ja = at.NAMESPACE || qa;
        Bn = at.CUSTOM_ELEMENT_HANDLING || {};
        if (at.CUSTOM_ELEMENT_HANDLING && Fo(at.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
          Bn.tagNameCheck = at.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (at.CUSTOM_ELEMENT_HANDLING && Fo(at.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
          Bn.attributeNameCheck = at.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (at.CUSTOM_ELEMENT_HANDLING && typeof at.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean") {
          Bn.allowCustomizedBuiltInElements = at.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        if (Di) {
          pn = false;
        }
        if (_o) {
          is = true;
        }
        if (Gs) {
          js = q({}, [...re]);
          ns = [];
          if (Gs.html === true) {
            q(js, se);
            q(ns, Re);
          }
          if (Gs.svg === true) {
            q(js, W);
            q(ns, Ge);
            q(ns, ot);
          }
          if (Gs.svgFilters === true) {
            q(js, Pe);
            q(ns, Ge);
            q(ns, ot);
          }
          if (Gs.mathMl === true) {
            q(js, he);
            q(ns, Ue);
            q(ns, ot);
          }
        }
        if (at.ADD_TAGS) {
          if (js === Tr) {
            js = j(js);
          }
          q(js, at.ADD_TAGS, Po);
        }
        if (at.ADD_ATTR) {
          if (ns === pr) {
            ns = j(ns);
          }
          q(ns, at.ADD_ATTR, Po);
        }
        if (at.ADD_URI_SAFE_ATTR) {
          q(qi, at.ADD_URI_SAFE_ATTR, Po);
        }
        if (at.FORBID_CONTENTS) {
          if (Zr === ho) {
            Zr = j(Zr);
          }
          q(Zr, at.FORBID_CONTENTS, Po);
        }
        if (bo) {
          js["#text"] = true;
        }
        if (dr) {
          q(js, ["html", "head", "body"]);
        }
        if (js.table) {
          q(js, ["tbody"]);
          delete oi.tbody;
        }
        if (at.TRUSTED_TYPES_POLICY) {
          if (typeof at.TRUSTED_TYPES_POLICY.createHTML != "function") {
            throw X("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
          }
          if (typeof at.TRUSTED_TYPES_POLICY.createScriptURL != "function") {
            throw X("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
          }
          In = at.TRUSTED_TYPES_POLICY;
          di = In.createHTML("");
        } else {
          if (In === undefined) {
            In = Et(yt, ft);
          }
          if (In !== null && typeof di == "string") {
            di = In.createHTML("");
          }
        }
        if (k) {
          k(at);
        }
        dl = at;
      }
    };
    const Ca = q({}, ["mi", "mo", "mn", "ms", "mtext"]);
    const Za = q({}, ["foreignobject", "desc", "title", "annotation-xml"]);
    const fl = q({}, ["title", "style", "font", "a", "script"]);
    const Ml = q({}, W);
    q(Ml, Pe);
    q(Ml, Le);
    const ko = q({}, he);
    q(ko, pe);
    const So = function (at) {
      let Je = Rn(at);
      if (!Je || !Je.tagName) {
        Je = {
          namespaceURI: ja,
          tagName: "template"
        };
      }
      const be = E(at.tagName);
      const Bt = E(Je.tagName);
      return !!ta[at.namespaceURI] && (at.namespaceURI === Oa ? Je.namespaceURI === qa ? be === "svg" : Je.namespaceURI === ea ? be === "svg" && (Bt === "annotation-xml" || Ca[Bt]) : Boolean(Ml[be]) : at.namespaceURI === ea ? Je.namespaceURI === qa ? be === "math" : Je.namespaceURI === Oa ? be === "math" && Za[Bt] : Boolean(ko[be]) : at.namespaceURI === qa ? (Je.namespaceURI !== Oa || !!Za[Bt]) && (Je.namespaceURI !== ea || !!Ca[Bt]) && !ko[be] && (fl[be] || !Ml[be]) : Es === "application/xhtml+xml" && !!ta[at.namespaceURI]);
    };
    const pa = function (at) {
      I(ve.removed, {
        element: at
      });
      try {
        at.parentNode.removeChild(at);
      } catch {
        at.remove();
      }
    };
    const Ia = function (at, Je) {
      try {
        I(ve.removed, {
          attribute: Je.getAttributeNode(at),
          from: Je
        });
      } catch {
        I(ve.removed, {
          attribute: null,
          from: Je
        });
      }
      Je.removeAttribute(at);
      if (at === "is" && !ns[at]) {
        if (is || _o) {
          try {
            pa(Je);
          } catch {}
        } else {
          try {
            Je.setAttribute(at, "");
          } catch {}
        }
      }
    };
    const po = function (at) {
      let Je;
      let be;
      if (Or) {
        at = "<remove></remove>" + at;
      } else {
        const Gn = x(at, /^[\r\n\t ]+/);
        be = Gn && Gn[0];
      }
      if (Es === "application/xhtml+xml" && ja === qa) {
        at = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + at + "</body></html>";
      }
      const Bt = In ? In.createHTML(at) : at;
      if (ja === qa) {
        try {
          Je = new pt().parseFromString(Bt, Es);
        } catch {}
      }
      if (!Je || !Je.documentElement) {
        Je = Si.createDocument(ja, "template", null);
        try {
          Je.documentElement.innerHTML = la ? di : Bt;
        } catch {}
      }
      const an = Je.body || Je.documentElement;
      if (at && be) {
        an.insertBefore(qe.createTextNode(be), an.childNodes[0] || null);
      }
      if (ja === qa) {
        return Qi.call(Je, dr ? "html" : "body")[0];
      } else if (dr) {
        return Je.documentElement;
      } else {
        return an;
      }
    };
    const zs = function (at) {
      return Zi.call(at.ownerDocument || at, at, bt.SHOW_ELEMENT | bt.SHOW_COMMENT | bt.SHOW_TEXT, null, false);
    };
    const hs = function (at) {
      return at instanceof Ze && (typeof at.nodeName != "string" || typeof at.textContent != "string" || typeof at.removeChild != "function" || !(at.attributes instanceof Ut) || typeof at.removeAttribute != "function" || typeof at.setAttribute != "function" || typeof at.namespaceURI != "string" || typeof at.insertBefore != "function" || typeof at.hasChildNodes != "function");
    };
    const Rs = function (at) {
      if (typeof me == "object") {
        return at instanceof me;
      } else {
        return at && typeof at == "object" && typeof at.nodeType == "number" && typeof at.nodeName == "string";
      }
    };
    const eo = function (at, Je, be) {
      if (!!Ar[at]) {
        S(Ar[at], Bt => {
          Bt.call(ve, Je, be, dl);
        });
      }
    };
    const Vs = function (at) {
      let Je;
      eo("beforeSanitizeElements", at, null);
      if (hs(at)) {
        pa(at);
        return true;
      }
      const be = Po(at.nodeName);
      eo("uponSanitizeElement", at, {
        tagName: be,
        allowedTags: js
      });
      if (at.hasChildNodes() && !Rs(at.firstElementChild) && (!Rs(at.content) || !Rs(at.content.firstElementChild)) && Z(/<[/\w]/g, at.innerHTML) && Z(/<[/\w]/g, at.textContent)) {
        pa(at);
        return true;
      }
      if (!js[be] || oi[be]) {
        if (!oi[be] && Wo(be) && (Bn.tagNameCheck instanceof RegExp && Z(Bn.tagNameCheck, be) || Bn.tagNameCheck instanceof Function && Bn.tagNameCheck(be))) {
          return false;
        }
        if (bo && !Zr[be]) {
          const Bt = Rn(at) || at.parentNode;
          const an = on(at) || at.childNodes;
          if (an && Bt) {
            for (let Ki = an.length - 1; Ki >= 0; --Ki) {
              Bt.insertBefore(hn(an[Ki], true), Kt(at));
            }
          }
        }
        pa(at);
        return true;
      }
      if (at instanceof it && !So(at) || (be === "noscript" || be === "noembed" || be === "noframes") && Z(/<\/no(script|embed|frames)/i, at.innerHTML)) {
        pa(at);
        return true;
      } else {
        if (Di && at.nodeType === 3) {
          Je = at.textContent;
          Je = U(Je, vr, " ");
          Je = U(Je, Ur, " ");
          Je = U(Je, Br, " ");
          if (at.textContent !== Je) {
            I(ve.removed, {
              element: at.cloneNode()
            });
            at.textContent = Je;
          }
        }
        eo("afterSanitizeElements", at, null);
        return false;
      }
    };
    const Qs = function (at, Je, be) {
      if (Zs && (Je === "id" || Je === "name") && (be in qe || be in qs)) {
        return false;
      }
      if ((!pn || fi[Je] || !Z(rs, Je)) && (!bn || !Z(vs, Je))) {
        if (!ns[Je] || fi[Je]) {
          if ((!Wo(at) || (!(Bn.tagNameCheck instanceof RegExp) || !Z(Bn.tagNameCheck, at)) && (!(Bn.tagNameCheck instanceof Function) || !Bn.tagNameCheck(at)) || (!(Bn.attributeNameCheck instanceof RegExp) || !Z(Bn.attributeNameCheck, Je)) && (!(Bn.attributeNameCheck instanceof Function) || !Bn.attributeNameCheck(Je))) && (Je !== "is" || !Bn.allowCustomizedBuiltInElements || (!(Bn.tagNameCheck instanceof RegExp) || !Z(Bn.tagNameCheck, be)) && (!(Bn.tagNameCheck instanceof Function) || !Bn.tagNameCheck(be)))) {
            return false;
          }
        } else if (!qi[Je] && !Z(sa, U(be, so, "")) && (Je !== "src" && Je !== "xlink:href" && Je !== "href" || at === "script" || B(be, "data:") !== 0 || !ya[at]) && (!An || Z(wo, U(be, so, ""))) && be) {
          return false;
        }
      }
      return true;
    };
    const Wo = function (at) {
      return at.indexOf("-") > 0;
    };
    const Ra = function (at) {
      let Je;
      let be;
      let Bt;
      let an;
      eo("beforeSanitizeAttributes", at, null);
      const {
        attributes: Gn
      } = at;
      if (!Gn) {
        return;
      }
      const Ki = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: ns
      };
      for (an = Gn.length; an--;) {
        Je = Gn[an];
        const {
          name: Lr,
          namespaceURI: Gr
        } = Je;
        be = Lr === "value" ? Je.value : F(Je.value);
        Bt = Po(Lr);
        Ki.attrName = Bt;
        Ki.attrValue = be;
        Ki.keepAttr = true;
        Ki.forceKeepAttr = undefined;
        eo("uponSanitizeAttribute", at, Ki);
        be = Ki.attrValue;
        if (Ki.forceKeepAttr || (Ia(Lr, at), !Ki.keepAttr)) {
          continue;
        }
        if (!si && Z(/\/>/i, be)) {
          Ia(Lr, at);
          continue;
        }
        if (Di) {
          be = U(be, vr, " ");
          be = U(be, Ur, " ");
          be = U(be, Br, " ");
        }
        const zr = Po(at.nodeName);
        if (Qs(zr, Bt, be)) {
          if (No && (Bt === "id" || Bt === "name")) {
            Ia(Lr, at);
            be = fa + be;
          }
          if (In && typeof yt == "object" && typeof yt.getAttributeType == "function" && !Gr) {
            switch (yt.getAttributeType(zr, Bt)) {
              case "TrustedHTML":
                be = In.createHTML(be);
                break;
              case "TrustedScriptURL":
                be = In.createScriptURL(be);
            }
          }
          try {
            if (Gr) {
              at.setAttributeNS(Gr, Lr, be);
            } else {
              at.setAttribute(Lr, be);
            }
            L(ve.removed);
          } catch {}
        }
      }
      eo("afterSanitizeAttributes", at, null);
    };
    const Uo = function _r(at) {
      let Je;
      const be = zs(at);
      for (eo("beforeSanitizeShadowDOM", at, null); Je = be.nextNode();) {
        eo("uponSanitizeShadowNode", Je, null);
        if (!Vs(Je)) {
          if (Je.content instanceof Me) {
            _r(Je.content);
          }
          Ra(Je);
        }
      }
      eo("afterSanitizeShadowDOM", at, null);
    };
    ve.sanitize = function (_r) {
      let Je;
      let be;
      let Bt;
      let an;
      let at = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      la = !_r;
      if (la) {
        _r = "<!-->";
      }
      if (typeof _r != "string" && !Rs(_r)) {
        if (typeof _r.toString != "function") {
          throw X("toString is not a function");
        }
        if (typeof (_r = _r.toString()) != "string") {
          throw X("dirty is not a string, aborting");
        }
      }
      if (!ve.isSupported) {
        return _r;
      }
      if (!Vr) {
        ha(at);
      }
      ve.removed = [];
      if (typeof _r == "string") {
        ks = false;
      }
      if (ks) {
        if (_r.nodeName) {
          const Lr = Po(_r.nodeName);
          if (!js[Lr] || oi[Lr]) {
            throw X("root node is forbidden and cannot be sanitized in-place");
          }
        }
      } else if (_r instanceof me) {
        Je = po("<!---->");
        be = Je.ownerDocument.importNode(_r, true);
        if (be.nodeType === 1 && be.nodeName === "BODY" || be.nodeName === "HTML") {
          Je = be;
        } else {
          Je.appendChild(be);
        }
      } else {
        if (!is && !Di && !dr && _r.indexOf("<") === -1) {
          if (In && kr) {
            return In.createHTML(_r);
          } else {
            return _r;
          }
        }
        Je = po(_r);
        if (!Je) {
          if (is) {
            return null;
          } else if (kr) {
            return di;
          } else {
            return "";
          }
        }
      }
      if (Je && Or) {
        pa(Je.firstChild);
      }
      const Gn = zs(ks ? _r : Je);
      for (; Bt = Gn.nextNode();) {
        if (!Vs(Bt)) {
          if (Bt.content instanceof Me) {
            Uo(Bt.content);
          }
          Ra(Bt);
        }
      }
      if (ks) {
        return _r;
      }
      if (is) {
        if (_o) {
          for (an = $i.call(Je.ownerDocument); Je.firstChild;) {
            an.appendChild(Je.firstChild);
          }
        } else {
          an = Je;
        }
        if (ns.shadowroot || ns.shadowrootmode) {
          an = br.call(Lt, an, true);
        }
        return an;
      }
      let Ki = dr ? Je.outerHTML : Je.innerHTML;
      if (dr && js["!doctype"] && Je.ownerDocument && Je.ownerDocument.doctype && Je.ownerDocument.doctype.name && Z(It, Je.ownerDocument.doctype.name)) {
        Ki = "<!DOCTYPE " + Je.ownerDocument.doctype.name + ">\n" + Ki;
      }
      if (Di) {
        Ki = U(Ki, vr, " ");
        Ki = U(Ki, Ur, " ");
        Ki = U(Ki, Br, " ");
      }
      if (In && kr) {
        return In.createHTML(Ki);
      } else {
        return Ki;
      }
    };
    ve.setConfig = function (_r) {
      ha(_r);
      Vr = true;
    };
    ve.clearConfig = function () {
      dl = null;
      Vr = false;
    };
    ve.isValidAttribute = function (_r, at, Je) {
      if (!dl) {
        ha({});
      }
      const be = Po(_r);
      const Bt = Po(at);
      return Qs(be, Bt, Je);
    };
    ve.addHook = function (_r, at) {
      if (typeof at == "function") {
        Ar[_r] = Ar[_r] || [];
        I(Ar[_r], at);
      }
    };
    ve.removeHook = function (_r) {
      if (Ar[_r]) {
        return L(Ar[_r]);
      }
    };
    ve.removeHooks = function (_r) {
      Ar[_r] &&= [];
    };
    ve.removeAllHooks = function () {
      Ar = {};
    };
    return ve;
  }();
}();