(function (t) {
  function b(v) {
    var C = k(v);
    return {
      left: window.scrollX + v.getBoundingClientRect().left + C.left,
      top: window.scrollY + v.getBoundingClientRect().top + C.top,
      absolute: true,
      height: C.height
    };
  }
  function k(v, C) {
    if (C === undefined) {
      C = {
        debug: false,
        useSelectionEnd: false,
        checkWidthOverflow: true
      };
    }
    var L = C.useSelectionEnd ? v.selectionEnd !== null ? v.selectionEnd : 0 : v.selectionStart !== null ? v.selectionStart : 0;
    var E = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    if (typeof window === "undefined") {
      throw new Error("textarea-caret-position#getCaretPosition should only be called in a browser");
    }
    var x = C && C.debug || false;
    if (x) {
      var U = document.querySelector("#input-textarea-caret-position-mirror-div");
      if (U && U.parentNode) {
        U.parentNode.removeChild(U);
      }
    }
    var B = document.createElement("div");
    B.id = "input-textarea-caret-position-mirror-div";
    document.body.appendChild(B);
    var F = B.style;
    var Z = window.getComputedStyle ? window.getComputedStyle(v) : v.currentStyle;
    var X = v.nodeName === "INPUT";
    F.whiteSpace = "pre-wrap";
    if (!X) {
      F.wordWrap = "break-word";
    }
    F.position = "absolute";
    if (!x) {
      F.visibility = "hidden";
    }
    ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"].forEach(function (q) {
      if (X && q === "lineHeight") {
        if (Z.boxSizing === "border-box") {
          var j = parseInt(Z.height);
          var G = parseInt(Z.paddingTop) + parseInt(Z.paddingBottom) + parseInt(Z.borderTopWidth) + parseInt(Z.borderBottomWidth);
          var se = G + parseInt(Z.lineHeight);
          F.lineHeight = j > se ? j - G + "px" : j === se ? Z.lineHeight : "0";
        } else {
          F.lineHeight = Z.height;
        }
      } else {
        F[q] = Z[q];
      }
    });
    if (E) {
      if (v.scrollHeight > parseInt(Z.height)) {
        F.overflowY = "scroll";
      }
    } else {
      F.overflow = "hidden";
    }
    B.textContent = v.value.substring(0, L);
    if (X && B.textContent) {
      B.textContent = B.textContent.replace(/\s/g, " ");
    }
    var le = document.createElement("span");
    le.textContent = v.value.substring(L) || ".";
    B.appendChild(le);
    var fe = {
      top: le.offsetTop + parseInt(Z.borderTopWidth),
      left: le.offsetLeft + parseInt(Z.borderLeftWidth),
      absolute: false,
      height: parseInt(Z.lineHeight)
    };
    if (x) {
      le.style.backgroundColor = "#aaa";
    } else {
      document.body.removeChild(B);
    }
    if (fe.left >= v.clientWidth && C.checkWidthOverflow) {
      fe.left = v.clientWidth;
    }
    return fe;
  }
  t.getAbsolutePosition = b;
  t.getRelativePosition = k;
  t.setElementPositionBasedOnCaret = function M(v, C, w, S, L, I) {
    if (w === undefined) {
      w = {
        top: 0,
        left: 0
      };
    }
    if (S === undefined) {
      S = 2;
    }
    if (L === undefined) {
      L = true;
    }
    if (I === undefined) {
      I = false;
    }
    var E = b(C);
    if (L) {
      E.left = E.left + (v.clientWidth + S) + w.left > window.scrollX + window.innerWidth ? E.left = window.scrollX + window.innerWidth - (v.clientWidth + S) : E.left += w.left;
      E.top = E.top + (v.clientWidth + S) + w.top > window.scrollY + window.innerHeight ? E.top -= v.clientWidth + S : E.top += w.top;
    } else {
      E.top += w.top;
      E.left += w.left;
    }
    if (!I) {
      v.style.top = E.top + "px";
      v.style.left = E.left + "px";
    }
    return E;
  };
})(__webpack_exports__.Fj ||= {});