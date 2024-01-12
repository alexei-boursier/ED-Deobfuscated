import * as y from "0";
require("4");
var C = function () {
  function t() {
    (function (j, a) {
      if (!(j instanceof a)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, t);
    this._silent_mode = false;
    this.listeners = {};
  }
  if (a = [{
    key: "_silentStart",
    value: function () {
      this._silent_mode = true;
    }
  }, {
    key: "_silentEnd",
    value: function () {
      this._silent_mode = false;
    }
  }]) {
    (function R(t, j) {
      for (var a = 0; a < j.length; a++) {
        var v = j[a];
        v.enumerable = v.enumerable || false;
        v.configurable = true;
        if ("value" in v) {
          v.writable = true;
        }
        Object.defineProperty(t, v.key, v);
      }
    })(t.prototype, a);
  }
  return t;
  var a;
}();
function x(t) {
  var j = new C();
  t.attachEvent = function (a, v, _) {
    a = "ev_" + a.toLowerCase();
    j.listeners[a] ||= function (t) {
      var j = {};
      var a = 0;
      function v() {
        var _ = true;
        for (var i in j) {
          var o = j[i].apply(t, arguments);
          _ = _ && o;
        }
        return _;
      }
      v.addEvent = function (_, i) {
        if (typeof _ == "function") {
          var o;
          if (i && i.id) {
            o = i.id;
          } else {
            o = a;
            a++;
          }
          if (i && i.once) {
            var c = _;
            _ = function () {
              c();
              v.removeEvent(o);
            };
          }
          j[o] = _;
          return o;
        }
        return false;
      };
      v.removeEvent = function (_) {
        delete j[_];
      };
      v.clear = function () {
        j = {};
      };
      return v;
    }(this);
    if (_ && _.thisObject) {
      v = v.bind(_.thisObject);
    }
    var i = a + ":" + j.listeners[a].addEvent(v, _);
    if (_ && _.id) {
      i = _.id;
    }
    return i;
  };
  t.attachAll = function (a) {
    this.attachEvent("listen_all", a);
  };
  t.callEvent = function (a, v) {
    if (j._silent_mode) {
      return true;
    }
    var _ = "ev_" + a.toLowerCase();
    var i = j.listeners;
    if (i.ev_listen_all) {
      i.ev_listen_all.apply(this, [a].concat(v));
    }
    return !i[_] || i[_].apply(this, v);
  };
  t.checkEvent = function (a) {
    return !!j.listeners["ev_" + a.toLowerCase()];
  };
  t.detachEvent = function (a) {
    if (a) {
      var v = j.listeners;
      for (var _ in v) {
        v[_].removeEvent(a);
      }
      var i = a.split(":");
      v = j.listeners;
      if (i.length === 2) {
        var o = i[0];
        if (v[o]) {
          v[o].removeEvent(i[1]);
        }
      }
    }
  };
  t.detachAllEvents = function () {
    for (var a in j.listeners) {
      j.listeners[a].clear();
    }
  };
}
function S(t) {
  return (S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
var s = {
  event: function (t, j, a) {
    if (t.addEventListener) {
      t.addEventListener(j, a, false);
    } else if (t.attachEvent) {
      t.attachEvent("on" + j, a);
    }
  },
  eventRemove: function (t, j, a) {
    if (t.removeEventListener) {
      t.removeEventListener(j, a, false);
    } else if (t.detachEvent) {
      t.detachEvent("on" + j, a);
    }
  }
};
function m(t) {
  return (m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function l(t) {
  return (l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function M(t) {
  return (M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
var O = Date.now();
function q(t) {
  return !!t && M(t) === "object" && !!t.getFullYear && !!t.getMonth && !!t.getDate;
}
var ee = {
  uid: function () {
    return O++;
  },
  mixin: function (t, j, a) {
    for (var v in j) {
      if (t[v] === undefined || a) {
        t[v] = j[v];
      }
    }
    return t;
  },
  copy: function t(j) {
    var a;
    var v;
    var _;
    if (j && M(j) == "object") {
      switch (true) {
        case q(j):
          v = new Date(j);
          break;
        case (_ = j, Array.isArray ? Array.isArray(_) : _ && _.length !== undefined && _.pop && _.push):
          v = new Array(j.length);
          a = 0;
          for (; a < j.length; a++) {
            v[a] = t(j[a]);
          }
          break;
        case function (_) {
          return _ && M(_) === "object" && Function.prototype.toString.call(_.constructor) === "function String() { [native code] }";
        }(j):
          v = new String(j);
          break;
        case function (_) {
          return _ && M(_) === "object" && Function.prototype.toString.call(_.constructor) === "function Number() { [native code] }";
        }(j):
          v = new Number(j);
          break;
        case function (_) {
          return _ && M(_) === "object" && Function.prototype.toString.call(_.constructor) === "function Boolean() { [native code] }";
        }(j):
          v = new Boolean(j);
          break;
        default:
          v = {};
          for (a in j) {
            if (Object.prototype.hasOwnProperty.apply(j, [a])) {
              v[a] = t(j[a]);
            }
          }
      }
    }
    return v || j;
  },
  defined: function (t) {
    return t !== undefined;
  },
  isDate: q
};
function G(t) {
  if (!t) {
    return "";
  }
  var j = t.className || "";
  if (j.baseVal) {
    j = j.baseVal;
  }
  if (!j.indexOf) {
    j = "";
  }
  return j || "";
}
function B(t, j, a) {
  if (a === undefined) {
    a = true;
  }
  for (var v = t.target || t.srcElement, _ = ""; v;) {
    if (_ = G(v)) {
      var i = _.indexOf(j);
      if (i >= 0) {
        if (!a) {
          return v;
        }
        var o = i === 0 || !(_.charAt(i - 1) || "").trim();
        var c = i + j.length >= _.length || !_.charAt(i + j.length).trim();
        if (o && c) {
          return v;
        }
      }
    }
    v = v.parentNode;
  }
  return null;
}
function A(t) {
  var j = false;
  var a = false;
  if (window.getComputedStyle) {
    var v = window.getComputedStyle(t, null);
    j = v.display;
    a = v.visibility;
  } else if (t.currentStyle) {
    j = t.currentStyle.display;
    a = t.currentStyle.visibility;
  }
  var _ = false;
  var i = B({
    target: t
  }, "dhx_form_repeat", false);
  if (i) {
    _ = i.style.height == "0px";
  }
  _ = _ || !t.offsetHeight;
  return j != "none" && a != "hidden" && !_;
}
function H(t) {
  return !isNaN(t.getAttribute("tabindex")) && t.getAttribute("tabindex") * 1 >= 0;
}
function $(t) {
  return !{
    a: true,
    area: true
  }[t.nodeName.loLowerCase()] || !!t.getAttribute("href");
}
function J(t) {
  return !{
    input: true,
    select: true,
    textarea: true,
    button: true,
    object: true
  }[t.nodeName.toLowerCase()] || !t.hasAttribute("disabled");
}
function Q() {
  return document.head.createShadowRoot || document.head.attachShadow;
}
function U(t) {
  if (!t || !Q()) {
    return document.body;
  }
  for (; t.parentNode && (t = t.parentNode);) {
    if (t instanceof ShadowRoot) {
      return t.host;
    }
  }
  return document.body;
}
var K;
var F = {
  getAbsoluteLeft: function (t) {
    return this.getOffset(t).left;
  },
  getAbsoluteTop: function (t) {
    return this.getOffset(t).top;
  },
  getOffsetSum: function (t) {
    for (var j = 0, a = 0; t;) {
      j += parseInt(t.offsetTop);
      a += parseInt(t.offsetLeft);
      t = t.offsetParent;
    }
    return {
      top: j,
      left: a
    };
  },
  getOffsetRect: function (t) {
    var j = t.getBoundingClientRect();
    var a = 0;
    var v = 0;
    if (/Mobi/.test(navigator.userAgent)) {
      var _ = document.createElement("div");
      _.style.position = "absolute";
      _.style.left = "0px";
      _.style.top = "0px";
      _.style.width = "1px";
      _.style.height = "1px";
      document.body.appendChild(_);
      var i = _.getBoundingClientRect();
      a = j.top - i.top;
      v = j.left - i.left;
      _.parentNode.removeChild(_);
    } else {
      var o = document.body;
      var c = document.documentElement;
      var h = window.pageYOffset || c.scrollTop || o.scrollTop;
      var D = window.pageXOffset || c.scrollLeft || o.scrollLeft;
      a = j.top + h - (c.clientTop || o.clientTop || 0);
      v = j.left + D - (c.clientLeft || o.clientLeft || 0);
    }
    return {
      top: Math.round(a),
      left: Math.round(v)
    };
  },
  getOffset: function (t) {
    if (t.getBoundingClientRect) {
      return this.getOffsetRect(t);
    } else {
      return this.getOffsetSum(t);
    }
  },
  closest: function (t, j) {
    if (t && j) {
      return K(t, j);
    } else {
      return null;
    }
  },
  insertAfter: function (t, j) {
    if (j.nextSibling) {
      j.parentNode.insertBefore(t, j.nextSibling);
    } else {
      j.parentNode.appendChild(t);
    }
  },
  remove: function (t) {
    if (t && t.parentNode) {
      t.parentNode.removeChild(t);
    }
  },
  getFocusableNodes: function (t) {
    for (var j = t.querySelectorAll(["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"].join(", ")), a = Array.prototype.slice.call(j, 0), v = 0; v < a.length; v++) {
      a[v].$position = v;
    }
    a.sort(function (i, o) {
      if (i.tabIndex === 0 && o.tabIndex !== 0) {
        return 1;
      } else if (i.tabIndex !== 0 && o.tabIndex === 0) {
        return -1;
      } else if (i.tabIndex === o.tabIndex) {
        return i.$position - o.$position;
      } else if (i.tabIndex < o.tabIndex) {
        return -1;
      } else {
        return 1;
      }
    });
    v = 0;
    for (; v < a.length; v++) {
      var _ = a[v];
      if (!H(_) && !J(_) && !$(_) || !A(_)) {
        a.splice(v, 1);
        v--;
      }
    }
    return a;
  },
  getClassName: G,
  locateCss: B,
  getRootNode: U,
  hasShadowParent: function (t) {
    return !!U(t);
  },
  isShadowDomSupported: Q,
  getActiveElement: function () {
    var t = document.activeElement;
    if (t.shadowRoot) {
      t = t.shadowRoot.activeElement;
    }
    if (t === document.body && document.getSelection) {
      t = document.getSelection().focusNode || document.body;
    }
    return t;
  },
  getRelativeEventPosition: function (t, j) {
    var a = document.documentElement;
    var v = function (_) {
      var i = 0;
      var o = 0;
      var c = 0;
      var h = 0;
      if (_.getBoundingClientRect) {
        var D = _.getBoundingClientRect();
        var V = document.body;
        var T = document.documentElement || document.body.parentNode || document.body;
        var W = window.pageYOffset || T.scrollTop || V.scrollTop;
        var z = window.pageXOffset || T.scrollLeft || V.scrollLeft;
        i = D.top + W - (T.clientTop || V.clientTop || 0);
        o = D.left + z - (T.clientLeft || V.clientLeft || 0);
        c = document.body.offsetWidth - D.right;
        h = document.body.offsetHeight - D.bottom;
      } else {
        for (; _;) {
          i += parseInt(_.offsetTop, 10);
          o += parseInt(_.offsetLeft, 10);
          _ = _.offsetParent;
        }
        c = document.body.offsetWidth - _.offsetWidth - o;
        h = document.body.offsetHeight - _.offsetHeight - i;
      }
      return {
        y: Math.round(i),
        x: Math.round(o),
        width: _.offsetWidth,
        height: _.offsetHeight,
        right: Math.round(c),
        bottom: Math.round(h)
      };
    }(j);
    return {
      x: t.clientX + a.scrollLeft - a.clientLeft - v.x + j.scrollLeft,
      y: t.clientY + a.scrollTop - a.clientTop - v.y + j.scrollTop
    };
  }
};
if (Element.prototype.closest) {
  K = function (t, j) {
    return t.closest(j);
  };
} else {
  var L = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  K = function (t, j) {
    var a = t;
    do {
      if (L.call(a, j)) {
        return a;
      }
      a = a.parentElement || a.parentNode;
    } while (a !== null && a.nodeType === 1);
    return null;
  };
}
var ie = typeof window !== "undefined";
var Y = {
  isIE: ie && (navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0),
  isIE6: ie && !XMLHttpRequest && navigator.userAgent.indexOf("MSIE") >= 0,
  isIE7: ie && navigator.userAgent.indexOf("MSIE 7.0") >= 0 && navigator.userAgent.indexOf("Trident") < 0,
  isIE8: ie && navigator.userAgent.indexOf("MSIE 8.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0,
  isOpera: ie && navigator.userAgent.indexOf("Opera") >= 0,
  isChrome: ie && navigator.userAgent.indexOf("Chrome") >= 0,
  isKHTML: ie && (navigator.userAgent.indexOf("Safari") >= 0 || navigator.userAgent.indexOf("Konqueror") >= 0),
  isFF: ie && navigator.userAgent.indexOf("Firefox") >= 0,
  isIPad: ie && navigator.userAgent.search(/iPad/gi) >= 0,
  isEdge: ie && navigator.userAgent.indexOf("Edge") != -1,
  isNode: !ie || typeof navigator === "undefined"
};
var ne = require("6").Promise;
import _default from "3";
function Ee(t) {
  return (Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function Qe(t) {
  return (Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function ae(t) {
  return (ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
import _default2 from "2";
function je(t) {
  return (je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function ye(t) {
  return (ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function $e(t) {
  this.serverProcessor = t;
  this.action_param = "!nativeeditor_status";
  this.object = null;
  this.updatedRows = [];
  this.autoUpdate = true;
  this.updateMode = "cell";
  this._tMode = "GET";
  this._headers = null;
  this._payload = null;
  this.post_delim = "_";
  this._waitMode = 0;
  this._in_progress = {};
  this._invalid = {};
  this.messages = [];
  this.styles = {
    updated: "font-weight:bold;",
    inserted: "font-weight:bold;",
    deleted: "text-decoration : line-through;",
    invalid: "background-color:FFE0E0;",
    invalid_cell: "border-bottom:2px solid red;",
    error: "color:red;",
    clear: "font-weight:normal;text-decoration:none;"
  };
  this.enableUTFencoding(true);
  x(this);
  return this;
}
function qe(t) {
  return (qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
$e.prototype = {
  setTransactionMode: function (t, j) {
    if (ye(t) == "object") {
      this._tMode = t.mode || this._tMode;
      if (t.headers !== undefined) {
        this._headers = t.headers;
      }
      if (t.payload !== undefined) {
        this._payload = t.payload;
      }
      this._tSend = !!j;
    } else {
      this._tMode = t;
      this._tSend = j;
    }
    if (this._tMode == "REST") {
      this._tSend = false;
      this._endnm = true;
    }
    if (this._tMode === "JSON" || this._tMode === "REST-JSON") {
      this._tSend = false;
      this._endnm = true;
      this._serializeAsJson = true;
      this._headers = this._headers || {};
      this._headers["Content-Type"] = "application/json";
    } else if (this._headers && !this._headers["Content-Type"]) {
      this._headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (this._tMode === "CUSTOM") {
      this._tSend = false;
      this._endnm = true;
      this._router = t.router;
    }
  },
  escape: function (t) {
    function j(a) {
      return t.apply(this, arguments);
    }
    j.toString = function () {
      return t.toString();
    };
    return j;
  }(function (t) {
    if (this._utf) {
      return encodeURIComponent(t);
    } else {
      return escape(t);
    }
  }),
  enableUTFencoding: function (t) {
    this._utf = !!t;
  },
  setDataColumns: function (t) {
    this._columns = typeof t == "string" ? t.split(",") : t;
  },
  getSyncState: function () {
    return !this.updatedRows.length;
  },
  enableDataNames: function (t) {
    this._endnm = !!t;
  },
  enablePartialDataSend: function (t) {
    this._changed = !!t;
  },
  setUpdateMode: function (t, j) {
    this.autoUpdate = t == "cell";
    this.updateMode = t;
    this.dnd = j;
  },
  ignore: function (t, j) {
    this._silent_mode = true;
    t.call(j || window);
    this._silent_mode = false;
  },
  setUpdated: function (t, j, a) {
    if (!this._silent_mode) {
      var v = this.findRow(t);
      a = a || "updated";
      var _ = this.$scheduler.getUserData(t, this.action_param);
      if (_ && a == "updated") {
        a = _;
      }
      if (j) {
        this.set_invalid(t, false);
        this.updatedRows[v] = t;
        this.$scheduler.setUserData(t, this.action_param, a);
        this._in_progress[t] &&= "wait";
      } else if (!this.is_invalid(t)) {
        this.updatedRows.splice(v, 1);
        this.$scheduler.setUserData(t, this.action_param, "");
      }
      this.markRow(t, j, a);
      if (j && this.autoUpdate) {
        this.sendData(t);
      }
    }
  },
  markRow: function (t, j, a) {
    var v = "";
    var _ = this.is_invalid(t);
    if (_) {
      v = this.styles[_];
      j = true;
    }
    if (this.callEvent("onRowMark", [t, j, a, _]) && (this.$scheduler[this._methods[0]](t, v = this.styles[j ? a : "clear"] + v), _ && _.details)) {
      v += this.styles[_ + "_cell"];
      for (var i = 0; i < _.details.length; i++) {
        if (_.details[i]) {
          this.$scheduler[this._methods[1]](t, i, v);
        }
      }
    }
  },
  getActionByState: function (t) {
    if (t === "inserted") {
      return "create";
    } else if (t === "updated") {
      return "update";
    } else if (t === "deleted") {
      return "delete";
    } else {
      return "update";
    }
  },
  getState: function (t) {
    return this.$scheduler.getUserData(t, this.action_param);
  },
  is_invalid: function (t) {
    return this._invalid[t];
  },
  set_invalid: function (t, j, a) {
    if (a) {
      j = {
        value: j,
        details: a,
        toString: function () {
          return this.value.toString();
        }
      };
    }
    this._invalid[t] = j;
  },
  checkBeforeUpdate: function (t) {
    return true;
  },
  sendData: function (t) {
    if (this.$scheduler.editStop) {
      this.$scheduler.editStop();
    }
    if (t === undefined || this._tSend) {
      return this.sendAllData();
    } else {
      return !this._in_progress[t] && (this.messages = [], (!!this.checkBeforeUpdate(t) || !this.callEvent("onValidationError", [t, this.messages])) && void this._beforeSendData(this._getRowData(t), t));
    }
  },
  _beforeSendData: function (t, j) {
    if (!this.callEvent("onBeforeUpdate", [j, this.getState(j), t])) {
      return false;
    }
    this._sendData(t, j);
  },
  serialize: function (t, j) {
    if (this._serializeAsJson) {
      return this._serializeAsJSON(t);
    }
    if (typeof t == "string") {
      return t;
    }
    if (j !== undefined) {
      return this.serialize_one(t, "");
    }
    var a = [];
    var v = [];
    for (var _ in t) {
      if (t.hasOwnProperty(_)) {
        a.push(this.serialize_one(t[_], _ + this.post_delim));
        v.push(_);
      }
    }
    a.push("ids=" + this.escape(v.join(",")));
    if (this.$scheduler.security_key) {
      a.push("dhx_security=" + this.$scheduler.security_key);
    }
    return a.join("&");
  },
  serialize_one: function (t, j) {
    if (typeof t == "string") {
      return t;
    }
    var a = [];
    var v = "";
    for (var _ in t) {
      if (t.hasOwnProperty(_)) {
        if ((_ == "id" || _ == this.action_param) && this._tMode == "REST") {
          continue;
        }
        v = typeof t[_] == "string" || typeof t[_] == "number" ? t[_] : JSON.stringify(t[_]);
        a.push(this.escape((j || "") + _) + "=" + this.escape(v));
      }
    }
    return a.join("&");
  },
  _applyPayload: function (t) {
    var j = this.$scheduler.ajax;
    if (this._payload) {
      for (var a in this._payload) {
        t = t + j.urlSeparator(t) + this.escape(a) + "=" + this.escape(this._payload[a]);
      }
    }
    return t;
  },
  _sendData: function (t, j) {
    if (t) {
      if (!this.callEvent("onBeforeDataSending", j ? [j, this.getState(j), t] : [null, null, t])) {
        return false;
      }
      if (j) {
        this._in_progress[j] = new Date().valueOf();
      }
      var a = this;
      var v = this.$scheduler.ajax;
      if (this._tMode !== "CUSTOM") {
        var _;
        var i = {
          callback: function (Z) {
            var re = [];
            if (j) {
              re.push(j);
            } else if (t) {
              for (var oe in t) {
                re.push(oe);
              }
            }
            return a.afterUpdate(a, Z, re);
          },
          headers: a._headers
        };
        var o = this.serverProcessor + (this._user ? v.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + this.$scheduler.getUserData(0, "version")].join("&") : "");
        var c = this._applyPayload(o);
        switch (this._tMode) {
          case "GET":
            _ = this._cleanupArgumentsBeforeSend(t);
            i.url = c + v.urlSeparator(c) + this.serialize(_, j);
            i.method = "GET";
            break;
          case "POST":
            _ = this._cleanupArgumentsBeforeSend(t);
            i.url = c;
            i.method = "POST";
            i.data = this.serialize(_, j);
            break;
          case "JSON":
            _ = {};
            var h = this._cleanupItemBeforeSend(t);
            for (var D in h) {
              if (D !== this.action_param && D !== "id" && D !== "gr_id") {
                _[D] = h[D];
              }
            }
            i.url = c;
            i.method = "POST";
            i.data = JSON.stringify({
              id: j,
              action: t[this.action_param],
              data: _
            });
            break;
          case "REST":
          case "REST-JSON":
            c = o.replace(/(&|\?)editing=true/, "");
            _ = "";
            switch (this.getState(j)) {
              case "inserted":
                i.method = "POST";
                i.data = this.serialize(t, j);
                break;
              case "deleted":
                i.method = "DELETE";
                c = c + (c.slice(-1) === "/" ? "" : "/") + j;
                break;
              default:
                i.method = "PUT";
                i.data = this.serialize(t, j);
                c = c + (c.slice(-1) === "/" ? "" : "/") + j;
            }
            i.url = this._applyPayload(c);
        }
        this._waitMode++;
        return v.query(i);
      }
      var V;
      var T = this.getState(j);
      var W = this.getActionByState(T);
      function z(Z) {
        var re = T;
        if (Z && Z.responseText && Z.setRequestHeader) {
          if (Z.status !== 200) {
            re = "error";
          }
          try {
            Z = JSON.parse(Z.responseText);
          } catch {}
        }
        re = re || "updated";
        var oe = j;
        var _e = j;
        if (Z) {
          re = Z.action || re;
          oe = Z.sid || oe;
          _e = Z.id || Z.tid || _e;
        }
        a.afterUpdateCallback(oe, _e, re, Z);
      }
      if (this._router instanceof Function) {
        V = this._router("event", W, t, j);
      } else {
        switch (T) {
          case "inserted":
            V = this._router.event.create(t);
            break;
          case "deleted":
            V = this._router.event.delete(j);
            break;
          default:
            V = this._router.event.update(t, j);
        }
      }
      if (V) {
        if (!V.then && V.id === undefined && V.tid === undefined && V.action === undefined) {
          throw new Error("Incorrect router return value. A Promise or a response object is expected");
        }
        if (V.then) {
          V.then(z).catch(function (Z) {
            z(Z && Z.action ? Z : {
              action: "error",
              value: Z
            });
          });
        } else {
          z(V);
        }
      } else {
        z(null);
      }
    }
  },
  sendAllData: function () {
    if (this.updatedRows.length && this.updateMode !== "off") {
      this.messages = [];
      var t = true;
      this._forEachUpdatedRow(function (j) {
        t = t && this.checkBeforeUpdate(j);
      });
      if (!t && !this.callEvent("onValidationError", ["", this.messages])) {
        return false;
      }
      if (this._tSend) {
        this._sendData(this._getAllData());
      } else {
        this._forEachUpdatedRow(function (j) {
          if (!this._in_progress[j]) {
            if (this.is_invalid(j)) {
              return;
            }
            this._beforeSendData(this._getRowData(j), j);
          }
        });
      }
    }
  },
  _getAllData: function (t) {
    var j = {};
    var a = false;
    this._forEachUpdatedRow(function (v) {
      if (!this._in_progress[v] && !this.is_invalid(v)) {
        var _ = this._getRowData(v);
        if (this.callEvent("onBeforeUpdate", [v, this.getState(v), _])) {
          j[v] = _;
          a = true;
          this._in_progress[v] = new Date().valueOf();
        }
      }
    });
    if (a) {
      return j;
    } else {
      return null;
    }
  },
  findRow: function (t) {
    var j = 0;
    for (j = 0; j < this.updatedRows.length && t != this.updatedRows[j]; j++);
    return j;
  },
  defineAction: function (t, j) {
    this._uActions ||= {};
    this._uActions[t] = j;
  },
  afterUpdateCallback: function (t, j, a, v) {
    if (this.$scheduler) {
      var _ = t;
      var i = a !== "error" && a !== "invalid";
      if (!i) {
        this.set_invalid(t, a);
      }
      if (this._uActions && this._uActions[a] && !this._uActions[a](v)) {
        return delete this._in_progress[_];
      }
      if (this._in_progress[_] !== "wait") {
        this.setUpdated(t, false);
      }
      var o = t;
      switch (a) {
        case "inserted":
        case "insert":
          if (j != t) {
            this.setUpdated(t, false);
            this.$scheduler[this._methods[2]](t, j);
            t = j;
          }
          break;
        case "delete":
        case "deleted":
          this.$scheduler.setUserData(t, this.action_param, "true_deleted");
          this.$scheduler[this._methods[3]](t, j);
          delete this._in_progress[_];
          return this.callEvent("onAfterUpdate", [t, a, j, v]);
      }
      if (this._in_progress[_] !== "wait") {
        if (i) {
          this.$scheduler.setUserData(t, this.action_param, "");
        }
        delete this._in_progress[_];
      } else {
        delete this._in_progress[_];
        this.setUpdated(j, true, this.$scheduler.getUserData(t, this.action_param));
      }
      this.callEvent("onAfterUpdate", [o, a, j, v]);
    }
  },
  _errorResponse: function (t, j) {
    if (this.$scheduler && this.$scheduler.callEvent) {
      this.$scheduler.callEvent("onSaveError", [j, t.xmlDoc]);
    }
    return this.cleanUpdate(j);
  },
  _setDefaultTransactionMode: function () {
    if (this.serverProcessor) {
      this.setTransactionMode("POST", true);
      this.serverProcessor += (this.serverProcessor.indexOf("?") !== -1 ? "&" : "?") + "editing=true";
      this._serverProcessor = this.serverProcessor;
    }
  },
  afterUpdate: function (t, j, a) {
    var v = this.$scheduler.ajax;
    if (j.xmlDoc.status === 200) {
      var _;
      try {
        _ = JSON.parse(j.xmlDoc.responseText);
      } catch {
        if (!j.xmlDoc.responseText.length) {
          _ = {};
        }
      }
      if (_) {
        var i = _.action || this.getState(a) || "updated";
        var o = _.sid || a[0];
        var c = _.tid || a[0];
        t.afterUpdateCallback(o, c, i, _);
        t.finalizeUpdate();
        return;
      }
      var h = v.xmltop("data", j.xmlDoc);
      if (!h) {
        return this._errorResponse(j, a);
      }
      var D = v.xpath("//data/action", h);
      if (!D.length) {
        return this._errorResponse(j, a);
      }
      for (var V = 0; V < D.length; V++) {
        var T = D[V];
        i = T.getAttribute("type");
        o = T.getAttribute("sid");
        c = T.getAttribute("tid");
        t.afterUpdateCallback(o, c, i, T);
      }
      t.finalizeUpdate();
    } else {
      this._errorResponse(j, a);
    }
  },
  cleanUpdate: function (t) {
    if (t) {
      for (var j = 0; j < t.length; j++) {
        delete this._in_progress[t[j]];
      }
    }
  },
  finalizeUpdate: function () {
    if (this._waitMode) {
      this._waitMode--;
    }
    this.callEvent("onAfterUpdateFinish", []);
    if (!this.updatedRows.length) {
      this.callEvent("onFullSync", []);
    }
  },
  init: function (t) {
    if (!this._initialized) {
      this.$scheduler = t;
      if (this.$scheduler._dp_init) {
        this.$scheduler._dp_init(this);
      }
      this._setDefaultTransactionMode();
      this._methods = this._methods || ["_set_event_text_style", "", "_dp_change_event_id", "_dp_hook_delete"];
      v = this;
      (a = this.$scheduler)._validId = function (_) {
        return true;
      };
      a.setUserData = function (_, i, o) {
        if (_) {
          var c = this.getEvent(_);
          if (c) {
            c[i] = o;
          }
        } else {
          this._userdata[i] = o;
        }
      };
      a.getUserData = function (_, i) {
        if (_) {
          var o = this.getEvent(_);
          if (o) {
            return o[i];
          } else {
            return null;
          }
        }
        return this._userdata[i];
      };
      a._set_event_text_style = function (_, i) {
        if (a.getEvent(_)) {
          this.for_rendered(_, function (c) {
            c.style.cssText += ";" + i;
          });
          var o = this.getEvent(_);
          o._text_style = i;
          this.event_updated(o);
        }
      };
      a._update_callback = function (_, i) {
        var o = a._xmlNodeToJSON(_.firstChild);
        if (o.rec_type == "none") {
          o.rec_pattern = "none";
        }
        o.text = o.text || o._tagvalue;
        o.start_date = a._helpers.parseDate(o.start_date);
        o.end_date = a._helpers.parseDate(o.end_date);
        a.addEvent(o);
        if (a._add_rec_marker) {
          a.setCurrentView();
        }
      };
      a._dp_change_event_id = function (_, i) {
        if (a.getEvent(_)) {
          a.changeEventId(_, i);
        }
      };
      a._dp_hook_delete = function (_, i) {
        if (a.getEvent(_)) {
          if (i && _ != i) {
            if (this.getUserData(_, v.action_param) == "true_deleted") {
              this.setUserData(_, v.action_param, "updated");
            }
            this.changeEventId(_, i);
          }
          return this.deleteEvent(i, true);
        }
      };
      a.setDp = function () {
        this._dp = v;
      };
      a.setDp();
      var j = new function (a, v) {
        this.$scheduler = a;
        this.$dp = v;
        this._dataProcessorHandlers = [];
        this.attach = function () {
          var _ = this.$dp;
          var i = this.$scheduler;
          this._dataProcessorHandlers.push(i.attachEvent("onEventAdded", function (o) {
            if (!this._loading && this._validId(o)) {
              _.setUpdated(o, true, "inserted");
            }
          }));
          this._dataProcessorHandlers.push(i.attachEvent("onConfirmedBeforeEventDelete", function (o) {
            if (this._validId(o)) {
              var c = _.getState(o);
              if (c == "inserted" || this._new_event) {
                _.setUpdated(o, false);
                return true;
              } else {
                return c != "deleted" && (c == "true_deleted" || (_.setUpdated(o, true, "deleted"), false));
              }
            }
          }));
          this._dataProcessorHandlers.push(i.attachEvent("onEventChanged", function (o) {
            if (!this._loading && this._validId(o)) {
              _.setUpdated(o, true, "updated");
            }
          }));
          this._dataProcessorHandlers.push(i.attachEvent("onClearAll", function () {
            _._in_progress = {};
            _._invalid = {};
            _.updatedRows = [];
            _._waitMode = 0;
          }));
          _.attachEvent("insertCallback", i._update_callback);
          _.attachEvent("updateCallback", i._update_callback);
          _.attachEvent("deleteCallback", function (o, c) {
            if (i.getEvent(c)) {
              i.setUserData(c, this.action_param, "true_deleted");
              i.deleteEvent(c);
            } else if (i._add_rec_marker) {
              i._update_callback(o, c);
            }
          });
        };
        this.detach = function () {
          for (var _ in this._dataProcessorHandlers) {
            this.$scheduler.detachEvent(this._dataProcessorHandlers[_]);
          }
          this._dataProcessorHandlers = [];
        };
      }(this.$scheduler, this);
      j.attach();
      this.attachEvent("onDestroy", function () {
        delete this._getRowData;
        delete this.$scheduler._dp;
        delete this.$scheduler._dataprocessor;
        delete this.$scheduler._set_event_text_style;
        delete this.$scheduler._dp_change_event_id;
        delete this.$scheduler._dp_hook_delete;
        delete this.$scheduler;
        j.detach();
      });
      this.$scheduler.callEvent("onDataProcessorReady", [this]);
      this._initialized = true;
      t._dataprocessor = this;
    }
    var a;
    var v;
  },
  setOnAfterUpdate: function (t) {
    this.attachEvent("onAfterUpdate", t);
  },
  setOnBeforeUpdateHandler: function (t) {
    this.attachEvent("onBeforeDataSending", t);
  },
  setAutoUpdate: function (t, j) {
    t = t || 2000;
    this._user = j || new Date().valueOf();
    this._need_update = false;
    this._update_busy = false;
    this.attachEvent("onAfterUpdate", function (v, _, i, o) {
      this.afterAutoUpdate(v, _, i, o);
    });
    this.attachEvent("onFullSync", function () {
      this.fullSync();
    });
    var a = this;
    y.a.setInterval(function () {
      a.loadUpdate();
    }, t);
  },
  afterAutoUpdate: function (t, j, a, v) {
    return j != "collision" || (this._need_update = true, false);
  },
  fullSync: function () {
    if (this._need_update) {
      this._need_update = false;
      this.loadUpdate();
    }
    return true;
  },
  getUpdates: function (t, j) {
    var a = this.$scheduler.ajax;
    if (this._update_busy) {
      return false;
    }
    this._update_busy = true;
    a.get(t, j);
  },
  _getXmlNodeValue: function (t) {
    if (t.firstChild) {
      return t.firstChild.nodeValue;
    } else {
      return "";
    }
  },
  loadUpdate: function () {
    var t = this;
    var j = this.$scheduler.ajax;
    var a = this.$scheduler.getUserData(0, "version");
    var v = this.serverProcessor + j.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + a].join("&");
    v = v.replace("editing=true&", "");
    this.getUpdates(v, function (_) {
      var i = j.xpath("//userdata", _);
      t.$scheduler.setUserData(0, "version", t._getXmlNodeValue(i[0]));
      var o = j.xpath("//update", _);
      if (o.length) {
        t._silent_mode = true;
        for (var c = 0; c < o.length; c++) {
          var h = o[c].getAttribute("status");
          var D = o[c].getAttribute("id");
          var V = o[c].getAttribute("parent");
          switch (h) {
            case "inserted":
              this.callEvent("insertCallback", [o[c], D, V]);
              break;
            case "updated":
              this.callEvent("updateCallback", [o[c], D, V]);
              break;
            case "deleted":
              this.callEvent("deleteCallback", [o[c], D, V]);
          }
        }
        t._silent_mode = false;
      }
      t._update_busy = false;
      t = null;
    });
  },
  destructor: function () {
    this.callEvent("onDestroy", []);
    this.detachAllEvents();
    this.updatedRows = [];
    this._in_progress = {};
    this._invalid = {};
    this._headers = null;
    this._payload = null;
    delete this._initialized;
  },
  url: function (t) {
    this.serverProcessor = this._serverProcessor = t;
  },
  _serializeAsJSON: function (t) {
    if (typeof t == "string") {
      return t;
    }
    var j = this.$scheduler.utils.copy(t);
    if (this._tMode === "REST-JSON") {
      delete j.id;
      delete j[this.action_param];
    }
    return JSON.stringify(j);
  },
  _cleanupArgumentsBeforeSend: function (t) {
    var j;
    if (t[this.action_param] === undefined) {
      j = {};
      for (var a in t) {
        j[a] = this._cleanupArgumentsBeforeSend(t[a]);
      }
    } else {
      j = this._cleanupItemBeforeSend(t);
    }
    return j;
  },
  _cleanupItemBeforeSend: function (t) {
    var j = null;
    if (t) {
      if (t[this.action_param] === "deleted") {
        (j = {}).id = t.id;
        j[this.action_param] = t[this.action_param];
      } else {
        j = t;
      }
    }
    return j;
  },
  _forEachUpdatedRow: function (t) {
    for (var j = this.updatedRows.slice(), a = 0; a < j.length; a++) {
      var v = j[a];
      if (this.$scheduler.getUserData(v, this.action_param)) {
        t.call(this, v);
      }
    }
  },
  _prepareDataItem: function (t) {
    var j = {};
    var a = this.$scheduler;
    var v = a.utils.copy(t);
    for (var _ in v) {
      if (_.indexOf("_") !== 0 && v[_]) {
        j[_] = v[_].getUTCFullYear ? a._helpers.formatDate(v[_]) : ye(v[_]) == "object" ? this._prepareDataItem(v[_]) : v[_] === null ? "" : v[_];
      }
    }
    j[this.action_param] = a.getUserData(t.id, this.action_param);
    return j;
  },
  _getRowData: function (t) {
    var j = this.$scheduler.getEvent(t);
    j ||= {
      id: t
    };
    return this._prepareDataItem(j);
  }
};
var de = {
  date: {
    month_full: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
    month_short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    day_full: ["الأحد", "الأثنين", "ألثلاثاء", "الأربعاء", "ألحميس", "ألجمعة", "السبت"],
    day_short: ["احد", "اثنين", "ثلاثاء", "اربعاء", "خميس", "جمعة", "سبت"]
  },
  labels: {
    dhx_cal_today_button: "اليوم",
    day_tab: "يوم",
    week_tab: "أسبوع",
    month_tab: "شهر",
    new_event: "حدث جديد",
    icon_save: "اخزن",
    icon_cancel: "الغاء",
    icon_details: "تفاصيل",
    icon_edit: "تحرير",
    icon_delete: "حذف",
    confirm_closing: "التغييرات سوف تضيع, هل انت متأكد؟",
    confirm_deleting: "الحدث سيتم حذفها نهائيا ، هل أنت متأكد؟",
    section_description: "الوصف",
    section_time: "الفترة الزمنية",
    full_day: "طوال اليوم",
    confirm_recurring: "هل تريد تحرير مجموعة كاملة من الأحداث المتكررة؟",
    section_recurring: "تكرار الحدث",
    button_recurring: "تعطيل",
    button_recurring_open: "تمكين",
    button_edit_series: "تحرير سلسلة",
    button_edit_occurrence: "تعديل نسخة",
    grid_tab: "جدول",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var pe = {
  date: {
    month_full: ["Студзень", "Люты", "Сакавік", "Красавік", "Maй", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"],
    month_short: ["Студз", "Лют", "Сак", "Крас", "Maй", "Чэр", "Ліп", "Жнів", "Вер", "Каст", "Ліст", "Снеж"],
    day_full: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"],
    day_short: ["Нд", "Пн", "Аўт", "Ср", "Чцв", "Пт", "Сб"]
  },
  labels: {
    dhx_cal_today_button: "Сёння",
    day_tab: "Дзень",
    week_tab: "Тыдзень",
    month_tab: "Месяц",
    new_event: "Новая падзея",
    icon_save: "Захаваць",
    icon_cancel: "Адмяніць",
    icon_details: "Дэталі",
    icon_edit: "Змяніць",
    icon_delete: "Выдаліць",
    confirm_closing: "",
    confirm_deleting: "Падзея будзе выдалена незваротна, працягнуць?",
    section_description: "Апісанне",
    section_time: "Перыяд часу",
    full_day: "Увесь дзень",
    confirm_recurring: "Вы хочаце змяніць усю серыю паўтаральных падзей?",
    section_recurring: "Паўтарэнне",
    button_recurring: "Адключана",
    button_recurring_open: "Уключана",
    button_edit_series: "Рэдагаваць серыю",
    button_edit_occurrence: "Рэдагаваць асобнік",
    agenda_tab: "Спіс",
    date: "Дата",
    description: "Апісанне",
    year_tab: "Год",
    week_agenda_tab: "Спіс",
    grid_tab: "Спic",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Дзень",
    repeat_radio_week: "Тыдзень",
    repeat_radio_month: "Месяц",
    repeat_radio_year: "Год",
    repeat_radio_day_type: "Кожны",
    repeat_text_day_count: "дзень",
    repeat_radio_day_type2: "Кожны працоўны дзень",
    repeat_week: " Паўтараць кожны",
    repeat_text_week_count: "тыдзень",
    repeat_radio_month_type: "Паўтараць",
    repeat_radio_month_start: "",
    repeat_text_month_day: " чысла кожнага",
    repeat_text_month_count: "месяцу",
    repeat_text_month_count2_before: "кожны ",
    repeat_text_month_count2_after: "месяц",
    repeat_year_label: "",
    select_year_day2: "",
    repeat_text_year_day: "день",
    select_year_month: "",
    repeat_radio_end: "Без даты заканчэння",
    repeat_text_occurences_count: "паўтораў",
    repeat_radio_end2: "",
    repeat_radio_end3: "Да ",
    month_for_recurring: ["Студзеня", "Лютага", "Сакавіка", "Красавіка", "Мая", "Чэрвеня", "Ліпeня", "Жніўня", "Верасня", "Кастрычніка", "Лістапада", "Снежня"],
    day_for_recurring: ["Нядзелю", "Панядзелак", "Аўторак", "Сераду", "Чацвер", "Пятніцу", "Суботу"]
  }
};
var xe = {
  date: {
    month_full: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
    month_short: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
    day_full: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
    day_short: ["Dg", "Dl", "Dm", "Dc", "Dj", "Dv", "Ds"]
  },
  labels: {
    dhx_cal_today_button: "Hui",
    day_tab: "Dia",
    week_tab: "Setmana",
    month_tab: "Mes",
    new_event: "Nou esdeveniment",
    icon_save: "Guardar",
    icon_cancel: "Cancel·lar",
    icon_details: "Detalls",
    icon_edit: "Editar",
    icon_delete: "Esborrar",
    confirm_closing: "",
    confirm_deleting: "L'esdeveniment s'esborrarà definitivament, continuar ?",
    section_description: "Descripció",
    section_time: "Periode de temps",
    full_day: "Tot el dia",
    confirm_recurring: "¿Desitja modificar el conjunt d'esdeveniments repetits?",
    section_recurring: "Repeteixca l'esdeveniment",
    button_recurring: "Impedit",
    button_recurring_open: "Permés",
    button_edit_series: "Edit sèrie",
    button_edit_occurrence: "Edita Instància",
    agenda_tab: "Agenda",
    date: "Data",
    description: "Descripció",
    year_tab: "Any",
    week_agenda_tab: "Agenda",
    grid_tab: "Taula",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var Xe = {
  date: {
    month_full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    day_full: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    day_short: ["日", "一", "二", "三", "四", "五", "六"]
  },
  labels: {
    dhx_cal_today_button: "今天",
    day_tab: "日",
    week_tab: "周",
    month_tab: "月",
    new_event: "新建日程",
    icon_save: "保存",
    icon_cancel: "关闭",
    icon_details: "详细",
    icon_edit: "编辑",
    icon_delete: "删除",
    confirm_closing: "请确认是否撤销修改!",
    confirm_deleting: "是否删除日程?",
    section_description: "描述",
    section_time: "时间范围",
    full_day: "整天",
    confirm_recurring: "请确认是否将日程设为重复模式?",
    section_recurring: "重复周期",
    button_recurring: "禁用",
    button_recurring_open: "启用",
    button_edit_series: "编辑系列",
    button_edit_occurrence: "编辑实例",
    agenda_tab: "议程",
    date: "日期",
    description: "说明",
    year_tab: "今年",
    week_agenda_tab: "议程",
    grid_tab: "电网",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "按天",
    repeat_radio_week: "按周",
    repeat_radio_month: "按月",
    repeat_radio_year: "按年",
    repeat_radio_day_type: "每",
    repeat_text_day_count: "天",
    repeat_radio_day_type2: "每个工作日",
    repeat_week: " 重复 每",
    repeat_text_week_count: "星期的:",
    repeat_radio_month_type: "重复",
    repeat_radio_month_start: "在",
    repeat_text_month_day: "日 每",
    repeat_text_month_count: "月",
    repeat_text_month_count2_before: "每",
    repeat_text_month_count2_after: "月",
    repeat_year_label: "在",
    select_year_day2: "的",
    repeat_text_year_day: "日",
    select_year_month: "月",
    repeat_radio_end: "无结束日期",
    repeat_text_occurences_count: "次结束",
    repeat_radio_end2: "重复",
    repeat_radio_end3: "结束于",
    month_for_recurring: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    day_for_recurring: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  }
};
var rt = {
  date: {
    month_full: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
    month_short: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čec", "Srp", "Září", "Říj", "List", "Pro"],
    day_full: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
    day_short: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
  },
  labels: {
    dhx_cal_today_button: "Dnes",
    day_tab: "Den",
    week_tab: "Týden",
    month_tab: "Měsíc",
    new_event: "Nová událost",
    icon_save: "Uložit",
    icon_cancel: "Zpět",
    icon_details: "Detail",
    icon_edit: "Edituj",
    icon_delete: "Smazat",
    confirm_closing: "",
    confirm_deleting: "Událost bude trvale smazána, opravdu?",
    section_description: "Poznámky",
    section_time: "Doba platnosti",
    confirm_recurring: "Přejete si upravit celou řadu opakovaných událostí?",
    section_recurring: "Opakování události",
    button_recurring: "Vypnuto",
    button_recurring_open: "Zapnuto",
    button_edit_series: "Edit series",
    button_edit_occurrence: "Upravit instance",
    agenda_tab: "Program",
    date: "Datum",
    description: "Poznámka",
    year_tab: "Rok",
    full_day: "Full day",
    week_agenda_tab: "Program",
    grid_tab: "Mřížka",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Denně",
    repeat_radio_week: "Týdně",
    repeat_radio_month: "Měsíčně",
    repeat_radio_year: "Ročně",
    repeat_radio_day_type: "každý",
    repeat_text_day_count: "Den",
    repeat_radio_day_type2: "pracovní dny",
    repeat_week: "Opakuje každých",
    repeat_text_week_count: "Týdnů na:",
    repeat_radio_month_type: "u každého",
    repeat_radio_month_start: "na",
    repeat_text_month_day: "Den každého",
    repeat_text_month_count: "Měsíc",
    repeat_text_month_count2_before: "každý",
    repeat_text_month_count2_after: "Měsíc",
    repeat_year_label: "na",
    select_year_day2: "v",
    repeat_text_year_day: "Den v",
    select_year_month: "",
    repeat_radio_end: "bez data ukončení",
    repeat_text_occurences_count: "Události",
    repeat_radio_end2: "po",
    repeat_radio_end3: "Konec",
    month_for_recurring: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
    day_for_recurring: ["Neděle ", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"]
  }
};
var tt = {
  date: {
    month_full: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
    day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
  },
  labels: {
    dhx_cal_today_button: "Idag",
    day_tab: "Dag",
    week_tab: "Uge",
    month_tab: "Måned",
    new_event: "Ny begivenhed",
    icon_save: "Gem",
    icon_cancel: "Fortryd",
    icon_details: "Detaljer",
    icon_edit: "Tilret",
    icon_delete: "Slet",
    confirm_closing: "Dine rettelser vil gå tabt.. Er dy sikker?",
    confirm_deleting: "Bigivenheden vil blive slettet permanent. Er du sikker?",
    section_description: "Beskrivelse",
    section_time: "Tidsperiode",
    confirm_recurring: "Vil du tilrette hele serien af gentagne begivenheder?",
    section_recurring: "Gentag begivenhed",
    button_recurring: "Frakoblet",
    button_recurring_open: "Tilkoblet",
    button_edit_series: "Rediger serien",
    button_edit_occurrence: "Rediger en kopi",
    agenda_tab: "Dagsorden",
    date: "Dato",
    description: "Beskrivelse",
    year_tab: "År",
    week_agenda_tab: "Dagsorden",
    grid_tab: "Grid",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Daglig",
    repeat_radio_week: "Ugenlig",
    repeat_radio_month: "Månedlig",
    repeat_radio_year: "Årlig",
    repeat_radio_day_type: "Hver",
    repeat_text_day_count: "dag",
    repeat_radio_day_type2: "På hver arbejdsdag",
    repeat_week: " Gentager sig hver",
    repeat_text_week_count: "uge på følgende dage:",
    repeat_radio_month_type: "Hver den",
    repeat_radio_month_start: "Den",
    repeat_text_month_day: " i hver",
    repeat_text_month_count: "måned",
    repeat_text_month_count2_before: "hver",
    repeat_text_month_count2_after: "måned",
    repeat_year_label: "Den",
    select_year_day2: "i",
    repeat_text_year_day: "dag i",
    select_year_month: "",
    repeat_radio_end: "Ingen slutdato",
    repeat_text_occurences_count: "gentagelse",
    repeat_radio_end2: "Efter",
    repeat_radio_end3: "Slut",
    month_for_recurring: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    day_for_recurring: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
  }
};
var Re = {
  date: {
    month_full: [" Januar", " Februar", " März ", " April", " Mai", " Juni", " Juli", " August", " September ", " Oktober", " November ", " Dezember"],
    month_short: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    day_full: ["Sonntag", "Montag", "Dienstag", " Mittwoch", " Donnerstag", "Freitag", "Samstag"],
    day_short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
  },
  labels: {
    dhx_cal_today_button: "Heute",
    day_tab: "Tag",
    week_tab: "Woche",
    month_tab: "Monat",
    new_event: "neuer Eintrag",
    icon_save: "Speichern",
    icon_cancel: "Abbrechen",
    icon_details: "Details",
    icon_edit: "Ändern",
    icon_delete: "Löschen",
    confirm_closing: "",
    confirm_deleting: "Der Eintrag wird gelöscht",
    section_description: "Beschreibung",
    section_time: "Zeitspanne",
    full_day: "Ganzer Tag",
    confirm_recurring: "Wollen Sie alle Einträge bearbeiten oder nur diesen einzelnen Eintrag?",
    section_recurring: "Wiederholung",
    button_recurring: "Aus",
    button_recurring_open: "An",
    button_edit_series: "Bearbeiten Sie die Serie",
    button_edit_occurrence: "Bearbeiten Sie eine Kopie",
    agenda_tab: "Agenda",
    date: "Datum",
    description: "Beschreibung",
    year_tab: "Jahre",
    week_agenda_tab: "Agenda",
    grid_tab: "Grid",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Täglich",
    repeat_radio_week: "Wöchentlich",
    repeat_radio_month: "Monatlich",
    repeat_radio_year: "Jährlich",
    repeat_radio_day_type: "jeden",
    repeat_text_day_count: "Tag",
    repeat_radio_day_type2: "an jedem Arbeitstag",
    repeat_week: " Wiederholt sich jede",
    repeat_text_week_count: "Woche am:",
    repeat_radio_month_type: "an jedem",
    repeat_radio_month_start: "am",
    repeat_text_month_day: "Tag eines jeden",
    repeat_text_month_count: "Monats",
    repeat_text_month_count2_before: "jeden",
    repeat_text_month_count2_after: "Monats",
    repeat_year_label: "am",
    select_year_day2: "im",
    repeat_text_year_day: "Tag im",
    select_year_month: "",
    repeat_radio_end: "kein Enddatum",
    repeat_text_occurences_count: "Ereignissen",
    repeat_radio_end3: "Schluß",
    repeat_radio_end2: "nach",
    month_for_recurring: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    day_for_recurring: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
  }
};
var ot = {
  date: {
    month_full: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
    month_short: ["ΙΑΝ", "ΦΕΒ", "ΜΑΡ", "ΑΠΡ", "ΜΑΙ", "ΙΟΥΝ", "ΙΟΥΛ", "ΑΥΓ", "ΣΕΠ", "ΟΚΤ", "ΝΟΕ", "ΔΕΚ"],
    day_full: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Κυριακή"],
    day_short: ["ΚΥ", "ΔΕ", "ΤΡ", "ΤΕ", "ΠΕ", "ΠΑ", "ΣΑ"]
  },
  labels: {
    dhx_cal_today_button: "Σήμερα",
    day_tab: "Ημέρα",
    week_tab: "Εβδομάδα",
    month_tab: "Μήνας",
    new_event: "Νέο έργο",
    icon_save: "Αποθήκευση",
    icon_cancel: "Άκυρο",
    icon_details: "Λεπτομέρειες",
    icon_edit: "Επεξεργασία",
    icon_delete: "Διαγραφή",
    confirm_closing: "",
    confirm_deleting: "Το έργο θα διαγραφεί οριστικά. Θέλετε να συνεχίσετε;",
    section_description: "Περιγραφή",
    section_time: "Χρονική περίοδος",
    full_day: "Πλήρης Ημέρα",
    confirm_recurring: "Θέλετε να επεξεργασθείτε ολόκληρη την ομάδα των επαναλαμβανόμενων έργων;",
    section_recurring: "Επαναλαμβανόμενο έργο",
    button_recurring: "Ανενεργό",
    button_recurring_open: "Ενεργό",
    button_edit_series: "Επεξεργαστείτε τη σειρά",
    button_edit_occurrence: "Επεξεργασία ένα αντίγραφο",
    agenda_tab: "Ημερήσια Διάταξη",
    date: "Ημερομηνία",
    description: "Περιγραφή",
    year_tab: "Έτος",
    week_agenda_tab: "Ημερήσια Διάταξη",
    grid_tab: "Πλέγμα",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Ημερησίως",
    repeat_radio_week: "Εβδομαδιαίως",
    repeat_radio_month: "Μηνιαίως",
    repeat_radio_year: "Ετησίως",
    repeat_radio_day_type: "Κάθε",
    repeat_text_day_count: "ημέρα",
    repeat_radio_day_type2: "Κάθε εργάσιμη",
    repeat_week: " Επανάληψη κάθε",
    repeat_text_week_count: "εβδομάδα τις επόμενες ημέρες:",
    repeat_radio_month_type: "Επανάληψη",
    repeat_radio_month_start: "Την",
    repeat_text_month_day: "ημέρα κάθε",
    repeat_text_month_count: "μήνα",
    repeat_text_month_count2_before: "κάθε",
    repeat_text_month_count2_after: "μήνα",
    repeat_year_label: "Την",
    select_year_day2: "του",
    repeat_text_year_day: "ημέρα",
    select_year_month: "μήνα",
    repeat_radio_end: "Χωρίς ημερομηνία λήξεως",
    repeat_text_occurences_count: "επαναλήψεις",
    repeat_radio_end3: "Λήγει την",
    repeat_radio_end2: "Μετά από",
    month_for_recurring: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
    day_for_recurring: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
  }
};
var pt = {
  date: {
    month_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    day_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    day_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  labels: {
    dhx_cal_today_button: "Today",
    day_tab: "Day",
    week_tab: "Week",
    month_tab: "Month",
    new_event: "New event",
    icon_save: "Save",
    icon_cancel: "Cancel",
    icon_details: "Details",
    icon_edit: "Edit",
    icon_delete: "Delete",
    confirm_closing: "",
    confirm_deleting: "Event will be deleted permanently, are you sure?",
    section_description: "Description",
    section_time: "Time period",
    full_day: "Full day",
    confirm_recurring: "Do you want to edit the whole set of repeated events?",
    section_recurring: "Repeat event",
    button_recurring: "Disabled",
    button_recurring_open: "Enabled",
    button_edit_series: "Edit series",
    button_edit_occurrence: "Edit occurrence",
    agenda_tab: "Agenda",
    date: "Date",
    description: "Description",
    year_tab: "Year",
    week_agenda_tab: "Agenda",
    grid_tab: "Grid",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Daily",
    repeat_radio_week: "Weekly",
    repeat_radio_month: "Monthly",
    repeat_radio_year: "Yearly",
    repeat_radio_day_type: "Every",
    repeat_text_day_count: "day",
    repeat_radio_day_type2: "Every workday",
    repeat_week: " Repeat every",
    repeat_text_week_count: "week next days:",
    repeat_radio_month_type: "Repeat",
    repeat_radio_month_start: "On",
    repeat_text_month_day: "day every",
    repeat_text_month_count: "month",
    repeat_text_month_count2_before: "every",
    repeat_text_month_count2_after: "month",
    repeat_year_label: "On",
    select_year_day2: "of",
    repeat_text_year_day: "day",
    select_year_month: "month",
    repeat_radio_end: "No end date",
    repeat_text_occurences_count: "occurrences",
    repeat_radio_end2: "After",
    repeat_radio_end3: "End by",
    month_for_recurring: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    day_for_recurring: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }
};
var ct = {
  date: {
    month_full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    month_short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    day_full: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    day_short: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
  },
  labels: {
    dhx_cal_today_button: "Hoy",
    day_tab: "Día",
    week_tab: "Semana",
    month_tab: "Mes",
    new_event: "Nuevo evento",
    icon_save: "Guardar",
    icon_cancel: "Cancelar",
    icon_details: "Detalles",
    icon_edit: "Editar",
    icon_delete: "Eliminar",
    confirm_closing: "",
    confirm_deleting: "El evento se borrará definitivamente, ¿continuar?",
    section_description: "Descripción",
    section_time: "Período",
    full_day: "Todo el día",
    confirm_recurring: "¿Desea modificar el conjunto de eventos repetidos?",
    section_recurring: "Repita el evento",
    button_recurring: "Impedido",
    button_recurring_open: "Permitido",
    button_edit_series: "Editar la serie",
    button_edit_occurrence: "Editar este evento",
    agenda_tab: "Día",
    date: "Fecha",
    description: "Descripción",
    year_tab: "Año",
    week_agenda_tab: "Día",
    grid_tab: "Reja",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Diariamente",
    repeat_radio_week: "Semanalmente",
    repeat_radio_month: "Mensualmente",
    repeat_radio_year: "Anualmente",
    repeat_radio_day_type: "Cada",
    repeat_text_day_count: "dia",
    repeat_radio_day_type2: "Cada jornada de trabajo",
    repeat_week: " Repetir cada",
    repeat_text_week_count: "semana:",
    repeat_radio_month_type: "Repita",
    repeat_radio_month_start: "El",
    repeat_text_month_day: "dia cada ",
    repeat_text_month_count: "mes",
    repeat_text_month_count2_before: "cada",
    repeat_text_month_count2_after: "mes",
    repeat_year_label: "El",
    select_year_day2: "del",
    repeat_text_year_day: "dia",
    select_year_month: "mes",
    repeat_radio_end: "Sin fecha de finalización",
    repeat_text_occurences_count: "ocurrencias",
    repeat_radio_end3: "Fin",
    repeat_radio_end2: "Después de",
    month_for_recurring: ["Enero", "Febrero", "Маrzo", "Аbril", "Mayo", "Junio", "Julio", "Аgosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
    day_for_recurring: ["Domingo", "Lunes", "Martes", "Miércoles", "Jeuves", "Viernes", "Sabado"]
  }
};
var st = {
  date: {
    month_full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
    month_short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
    day_full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
    day_short: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"]
  },
  labels: {
    dhx_cal_today_button: "Tänään",
    day_tab: "Päivä",
    week_tab: "Viikko",
    month_tab: "Kuukausi",
    new_event: "Uusi tapahtuma",
    icon_save: "Tallenna",
    icon_cancel: "Peru",
    icon_details: "Tiedot",
    icon_edit: "Muokkaa",
    icon_delete: "Poista",
    confirm_closing: "",
    confirm_deleting: "Haluatko varmasti poistaa tapahtuman?",
    section_description: "Kuvaus",
    section_time: "Aikajakso",
    full_day: "Koko päivä",
    confirm_recurring: "Haluatko varmasti muokata toistuvan tapahtuman kaikkia jaksoja?",
    section_recurring: "Toista tapahtuma",
    button_recurring: "Ei k&auml;yt&ouml;ss&auml;",
    button_recurring_open: "K&auml;yt&ouml;ss&auml;",
    button_edit_series: "Muokkaa sarja",
    button_edit_occurrence: "Muokkaa kopio",
    agenda_tab: "Esityslista",
    date: "Päivämäärä",
    description: "Kuvaus",
    year_tab: "Vuoden",
    week_agenda_tab: "Esityslista",
    grid_tab: "Ritilä",
    drag_to_create: "Luo uusi vetämällä",
    drag_to_move: "Siirrä vetämällä",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "P&auml;ivitt&auml;in",
    repeat_radio_week: "Viikoittain",
    repeat_radio_month: "Kuukausittain",
    repeat_radio_year: "Vuosittain",
    repeat_radio_day_type: "Joka",
    repeat_text_day_count: "p&auml;iv&auml;",
    repeat_radio_day_type2: "Joka arkip&auml;iv&auml;",
    repeat_week: "Toista joka",
    repeat_text_week_count: "viikko n&auml;in&auml; p&auml;ivin&auml;:",
    repeat_radio_month_type: "Toista",
    repeat_radio_month_start: "",
    repeat_text_month_day: "p&auml;iv&auml;n&auml; joka",
    repeat_text_month_count: "kuukausi",
    repeat_text_month_count2_before: "joka",
    repeat_text_month_count2_after: "kuukausi",
    repeat_year_label: "",
    select_year_day2: "",
    repeat_text_year_day: "p&auml;iv&auml;",
    select_year_month: "kuukausi",
    repeat_radio_end: "Ei loppumisaikaa",
    repeat_text_occurences_count: "Toiston j&auml;lkeen",
    repeat_radio_end3: "Loppuu",
    repeat_radio_end2: "",
    month_for_recurring: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
    day_for_recurring: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
  }
};
var Ze = {
  date: {
    month_full: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    month_short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"],
    day_full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    day_short: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  },
  labels: {
    dhx_cal_today_button: "Aujourd'hui",
    day_tab: "Jour",
    week_tab: "Semaine",
    month_tab: "Mois",
    new_event: "Nouvel événement",
    icon_save: "Enregistrer",
    icon_cancel: "Annuler",
    icon_details: "Détails",
    icon_edit: "Modifier",
    icon_delete: "Effacer",
    confirm_closing: "",
    confirm_deleting: "L'événement sera effacé sans appel, êtes-vous sûr ?",
    section_description: "Description",
    section_time: "Période",
    full_day: "Journée complète",
    confirm_recurring: "Voulez-vous éditer toute une série d'évènements répétés?",
    section_recurring: "Périodicité",
    button_recurring: "Désactivé",
    button_recurring_open: "Activé",
    button_edit_series: "Modifier la série",
    button_edit_occurrence: "Modifier une copie",
    agenda_tab: "Jour",
    date: "Date",
    description: "Description",
    year_tab: "Année",
    week_agenda_tab: "Jour",
    grid_tab: "Grille",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Quotidienne",
    repeat_radio_week: "Hebdomadaire",
    repeat_radio_month: "Mensuelle",
    repeat_radio_year: "Annuelle",
    repeat_radio_day_type: "Chaque",
    repeat_text_day_count: "jour",
    repeat_radio_day_type2: "Chaque journée de travail",
    repeat_week: " Répéter toutes les",
    repeat_text_week_count: "semaine:",
    repeat_radio_month_type: "Répéter",
    repeat_radio_month_start: "Le",
    repeat_text_month_day: "jour chaque",
    repeat_text_month_count: "mois",
    repeat_text_month_count2_before: "chaque",
    repeat_text_month_count2_after: "mois",
    repeat_year_label: "Le",
    select_year_day2: "du",
    repeat_text_year_day: "jour",
    select_year_month: "mois",
    repeat_radio_end: "Pas de date d&quot;achèvement",
    repeat_text_occurences_count: "occurrences",
    repeat_radio_end3: "Fin",
    repeat_radio_end2: "Après",
    month_for_recurring: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    day_for_recurring: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  }
};
var it = {
  date: {
    month_full: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
    month_short: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
    day_full: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
    day_short: ["א", "ב", "ג", "ד", "ה", "ו", "ש"]
  },
  labels: {
    dhx_cal_today_button: "היום",
    day_tab: "יום",
    week_tab: "שבוע",
    month_tab: "חודש",
    new_event: "ארוע חדש",
    icon_save: "שמור",
    icon_cancel: "בטל",
    icon_details: "פרטים",
    icon_edit: "ערוך",
    icon_delete: "מחק",
    confirm_closing: "",
    confirm_deleting: "ארוע ימחק סופית.להמשיך?",
    section_description: "תיאור",
    section_time: "תקופה",
    confirm_recurring: "האם ברצונך לשנות כל סדרת ארועים מתמשכים?",
    section_recurring: "להעתיק ארוע",
    button_recurring: "לא פעיל",
    button_recurring_open: "פעיל",
    full_day: "יום שלם",
    button_edit_series: "ערוך את הסדרה",
    button_edit_occurrence: "עריכת עותק",
    agenda_tab: "סדר יום",
    date: "תאריך",
    description: "תיאור",
    year_tab: "לשנה",
    week_agenda_tab: "סדר יום",
    grid_tab: "סורג",
    drag_to_create: "Drag to create",
    drag_to_move: "גרור כדי להזיז",
    message_ok: "OK",
    message_cancel: "בטל",
    next: "הבא",
    prev: "הקודם",
    year: "שנה",
    month: "חודש",
    day: "יום",
    hour: "שעה",
    minute: "דקה",
    repeat_radio_day: "יומי",
    repeat_radio_week: "שבועי",
    repeat_radio_month: "חודשי",
    repeat_radio_year: "שנתי",
    repeat_radio_day_type: "חזור כל",
    repeat_text_day_count: "ימים",
    repeat_radio_day_type2: "חזור כל יום עבודה",
    repeat_week: " חזור כל",
    repeat_text_week_count: "שבוע לפי ימים:",
    repeat_radio_month_type: "חזור כל",
    repeat_radio_month_start: "כל",
    repeat_text_month_day: "ימים כל",
    repeat_text_month_count: "חודשים",
    repeat_text_month_count2_before: "חזור כל",
    repeat_text_month_count2_after: "חודש",
    repeat_year_label: "כל",
    select_year_day2: "בחודש",
    repeat_text_year_day: "ימים",
    select_year_month: "חודש",
    repeat_radio_end: "לעולם לא מסתיים",
    repeat_text_occurences_count: "אירועים",
    repeat_radio_end3: "מסתיים ב",
    repeat_radio_end2: "אחרי",
    month_for_recurring: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
    day_for_recurring: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]
  }
};
var vt = {
  date: {
    month_full: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
    month_short: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
    day_full: ["Vasárnap", "Hétfõ", "Kedd", "Szerda", "Csütörtök", "Péntek", "szombat"],
    day_short: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"]
  },
  labels: {
    dhx_cal_today_button: "Ma",
    day_tab: "Nap",
    week_tab: "Hét",
    month_tab: "Hónap",
    new_event: "Új esemény",
    icon_save: "Mentés",
    icon_cancel: "Mégse",
    icon_details: "Részletek",
    icon_edit: "Szerkesztés",
    icon_delete: "Törlés",
    confirm_closing: "",
    confirm_deleting: "Az esemény törölve lesz, biztosan folytatja?",
    section_description: "Leírás",
    section_time: "Idõszak",
    full_day: "Egesz napos",
    confirm_recurring: "Biztosan szerkeszteni akarod az összes ismétlõdõ esemény beállítását?",
    section_recurring: "Esemény ismétlése",
    button_recurring: "Tiltás",
    button_recurring_open: "Engedélyezés",
    button_edit_series: "Edit series",
    button_edit_occurrence: "Szerkesztés bíróság",
    agenda_tab: "Napirend",
    date: "Dátum",
    description: "Leírás",
    year_tab: "Év",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var nt = {
  date: {
    month_full: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    day_full: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    day_short: ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
  },
  labels: {
    dhx_cal_today_button: "Hari Ini",
    day_tab: "Hari",
    week_tab: "Minggu",
    month_tab: "Bulan",
    new_event: "Acara Baru",
    icon_save: "Simpan",
    icon_cancel: "Batal",
    icon_details: "Detail",
    icon_edit: "Edit",
    icon_delete: "Hapus",
    confirm_closing: "",
    confirm_deleting: "Acara akan dihapus",
    section_description: "Keterangan",
    section_time: "Periode",
    full_day: "Hari penuh",
    confirm_recurring: "Apakah acara ini akan berulang?",
    section_recurring: "Acara Rutin",
    button_recurring: "Tidak Difungsikan",
    button_recurring_open: "Difungsikan",
    button_edit_series: "Mengedit seri",
    button_edit_occurrence: "Mengedit salinan",
    agenda_tab: "Agenda",
    date: "Tanggal",
    description: "Keterangan",
    year_tab: "Tahun",
    week_agenda_tab: "Agenda",
    grid_tab: "Tabel",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var gt = {
  date: {
    month_full: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    month_short: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    day_full: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    day_short: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
  },
  labels: {
    dhx_cal_today_button: "Oggi",
    day_tab: "Giorno",
    week_tab: "Settimana",
    month_tab: "Mese",
    new_event: "Nuovo evento",
    icon_save: "Salva",
    icon_cancel: "Chiudi",
    icon_details: "Dettagli",
    icon_edit: "Modifica",
    icon_delete: "Elimina",
    confirm_closing: "",
    confirm_deleting: "L'evento sarà eliminato, siete sicuri?",
    section_description: "Descrizione",
    section_time: "Periodo di tempo",
    full_day: "Intera giornata",
    confirm_recurring: "Vuoi modificare l'intera serie di eventi?",
    section_recurring: "Ripetere l'evento",
    button_recurring: "Disattivato",
    button_recurring_open: "Attivato",
    button_edit_series: "Modificare la serie",
    button_edit_occurrence: "Modificare una copia",
    agenda_tab: "Agenda",
    date: "Data",
    description: "Descrizione",
    year_tab: "Anno",
    week_agenda_tab: "Agenda",
    grid_tab: "Griglia",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Quotidiano",
    repeat_radio_week: "Settimanale",
    repeat_radio_month: "Mensile",
    repeat_radio_year: "Annuale",
    repeat_radio_day_type: "Ogni",
    repeat_text_day_count: "giorno",
    repeat_radio_day_type2: "Ogni giornata lavorativa",
    repeat_week: " Ripetere ogni",
    repeat_text_week_count: "settimana:",
    repeat_radio_month_type: "Ripetere",
    repeat_radio_month_start: "Il",
    repeat_text_month_day: "giorno ogni",
    repeat_text_month_count: "mese",
    repeat_text_month_count2_before: "ogni",
    repeat_text_month_count2_after: "mese",
    repeat_year_label: "Il",
    select_year_day2: "del",
    repeat_text_year_day: "giorno",
    select_year_month: "mese",
    repeat_radio_end: "Senza data finale",
    repeat_text_occurences_count: "occorenze",
    repeat_radio_end3: "Fine",
    repeat_radio_end2: "Dopo",
    month_for_recurring: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Jiugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    day_for_recurring: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Jovedì", "Venerdì", "Sabato"]
  }
};
var Ye = {
  date: {
    month_full: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    day_full: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    day_short: ["日", "月", "火", "水", "木", "金", "土"]
  },
  labels: {
    dhx_cal_today_button: "今日",
    day_tab: "日",
    week_tab: "週",
    month_tab: "月",
    new_event: "新イベント",
    icon_save: "保存",
    icon_cancel: "キャンセル",
    icon_details: "詳細",
    icon_edit: "編集",
    icon_delete: "削除",
    confirm_closing: "",
    confirm_deleting: "イベント完全に削除されます、宜しいですか？",
    section_description: "デスクリプション",
    section_time: "期間",
    confirm_recurring: "繰り返されているイベントを全て編集しますか？",
    section_recurring: "イベントを繰り返す",
    button_recurring: "無効",
    button_recurring_open: "有効",
    full_day: "終日",
    button_edit_series: "シリーズを編集します",
    button_edit_occurrence: "コピーを編集",
    agenda_tab: "議題は",
    date: "日付",
    description: "説明",
    year_tab: "今年",
    week_agenda_tab: "議題は",
    grid_tab: "グリッド",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var Et = function () {
  function t(j) {
    (function (v, _) {
      if (!(v instanceof _)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, t);
    this._locales = {};
    for (var a in j) {
      this._locales[a] = j[a];
    }
  }
  a = [{
    key: "addLocale",
    value: function (j, a) {
      this._locales[j] = a;
    }
  }, {
    key: "getLocale",
    value: function (j) {
      return this._locales[j];
    }
  }];
  if (a) {
    (function et(t, j) {
      for (var a = 0; a < j.length; a++) {
        var v = j[a];
        v.enumerable = v.enumerable || false;
        v.configurable = true;
        if ("value" in v) {
          v.writable = true;
        }
        Object.defineProperty(t, v.key, v);
      }
    })(t.prototype, a);
  }
  return t;
  var a;
}();
var Ct = {
  date: {
    month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
    day_short: ["Søn", "Mon", "Tir", "Ons", "Tor", "Fre", "Lør"]
  },
  labels: {
    dhx_cal_today_button: "I dag",
    day_tab: "Dag",
    week_tab: "Uke",
    month_tab: "Måned",
    new_event: "Ny hendelse",
    icon_save: "Lagre",
    icon_cancel: "Avbryt",
    icon_details: "Detaljer",
    icon_edit: "Rediger",
    icon_delete: "Slett",
    confirm_closing: "",
    confirm_deleting: "Hendelsen vil bli slettet permanent. Er du sikker?",
    section_description: "Beskrivelse",
    section_time: "Tidsperiode",
    confirm_recurring: "Vil du forandre hele dette settet av repeterende hendelser?",
    section_recurring: "Repeter hendelsen",
    button_recurring: "Av",
    button_recurring_open: "På",
    button_edit_series: "Rediger serien",
    button_edit_occurrence: "Redigere en kopi",
    agenda_tab: "Agenda",
    date: "Dato",
    description: "Beskrivelse",
    year_tab: "År",
    week_agenda_tab: "Agenda",
    grid_tab: "Grid",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Daglig",
    repeat_radio_week: "Ukentlig",
    repeat_radio_month: "Månedlig",
    repeat_radio_year: "Årlig",
    repeat_radio_day_type: "Hver",
    repeat_text_day_count: "dag",
    repeat_radio_day_type2: "Alle hverdager",
    repeat_week: " Gjentas hver",
    repeat_text_week_count: "uke på:",
    repeat_radio_month_type: "På hver",
    repeat_radio_month_start: "På",
    repeat_text_month_day: "dag hver",
    repeat_text_month_count: "måned",
    repeat_text_month_count2_before: "hver",
    repeat_text_month_count2_after: "måned",
    repeat_year_label: "på",
    select_year_day2: "i",
    repeat_text_year_day: "dag i",
    select_year_month: "",
    repeat_radio_end: "Ingen sluttdato",
    repeat_text_occurences_count: "forekomst",
    repeat_radio_end3: "Stop den",
    repeat_radio_end2: "Etter",
    month_for_recurring: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
    day_for_recurring: ["Sondag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
  }
};
var Nt = {
  date: {
    month_full: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    month_short: ["Jan", "Feb", "mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    day_full: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
    day_short: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]
  },
  labels: {
    dhx_cal_today_button: "Vandaag",
    day_tab: "Dag",
    week_tab: "Week",
    month_tab: "Maand",
    new_event: "Nieuw item",
    icon_save: "Opslaan",
    icon_cancel: "Annuleren",
    icon_details: "Details",
    icon_edit: "Bewerken",
    icon_delete: "Verwijderen",
    confirm_closing: "",
    confirm_deleting: "Item zal permanent worden verwijderd, doorgaan?",
    section_description: "Beschrijving",
    section_time: "Tijd periode",
    full_day: "Hele dag",
    confirm_recurring: "Wilt u alle terugkerende items bijwerken?",
    section_recurring: "Item herhalen",
    button_recurring: "Uit",
    button_recurring_open: "Aan",
    button_edit_series: "Bewerk de serie",
    button_edit_occurrence: "Bewerk een kopie",
    agenda_tab: "Agenda",
    date: "Datum",
    description: "Omschrijving",
    year_tab: "Jaar",
    week_agenda_tab: "Agenda",
    grid_tab: "Tabel",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Dagelijks",
    repeat_radio_week: "Wekelijks",
    repeat_radio_month: "Maandelijks",
    repeat_radio_year: "Jaarlijks",
    repeat_radio_day_type: "Elke",
    repeat_text_day_count: "dag(en)",
    repeat_radio_day_type2: "Elke werkdag",
    repeat_week: " Herhaal elke",
    repeat_text_week_count: "week op de volgende dagen:",
    repeat_radio_month_type: "Herhaal",
    repeat_radio_month_start: "Op",
    repeat_text_month_day: "dag iedere",
    repeat_text_month_count: "maanden",
    repeat_text_month_count2_before: "iedere",
    repeat_text_month_count2_after: "maanden",
    repeat_year_label: "Op",
    select_year_day2: "van",
    repeat_text_year_day: "dag",
    select_year_month: "maand",
    repeat_radio_end: "Geen eind datum",
    repeat_text_occurences_count: "keren",
    repeat_radio_end3: "Eindigd per",
    repeat_radio_end2: "Na",
    month_for_recurring: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    day_for_recurring: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
  }
};
var Ie = {
  date: {
    month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
    day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
  },
  labels: {
    dhx_cal_today_button: "Idag",
    day_tab: "Dag",
    week_tab: "Uke",
    month_tab: "Måned",
    new_event: "Ny",
    icon_save: "Lagre",
    icon_cancel: "Avbryt",
    icon_details: "Detaljer",
    icon_edit: "Endre",
    icon_delete: "Slett",
    confirm_closing: "Endringer blir ikke lagret, er du sikker?",
    confirm_deleting: "Oppføringen vil bli slettet, er du sikker?",
    section_description: "Beskrivelse",
    section_time: "Tidsperiode",
    full_day: "Full dag",
    confirm_recurring: "Vil du endre hele settet med repeterende oppføringer?",
    section_recurring: "Repeterende oppføring",
    button_recurring: "Ikke aktiv",
    button_recurring_open: "Aktiv",
    button_edit_series: "Rediger serien",
    button_edit_occurrence: "Redigere en kopi",
    agenda_tab: "Agenda",
    date: "Dato",
    description: "Beskrivelse",
    year_tab: "År",
    week_agenda_tab: "Agenda",
    grid_tab: "Grid",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var me = {
  date: {
    month_full: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    month_short: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
    day_full: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    day_short: ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"]
  },
  labels: {
    dhx_cal_today_button: "Dziś",
    day_tab: "Dzień",
    week_tab: "Tydzień",
    month_tab: "Miesiąc",
    new_event: "Nowe zdarzenie",
    icon_save: "Zapisz",
    icon_cancel: "Anuluj",
    icon_details: "Szczegóły",
    icon_edit: "Edytuj",
    icon_delete: "Usuń",
    confirm_closing: "",
    confirm_deleting: "Zdarzenie zostanie usunięte na zawsze, kontynuować?",
    section_description: "Opis",
    section_time: "Okres czasu",
    full_day: "Cały dzień",
    confirm_recurring: "Czy chcesz edytować cały zbiór powtarzających się zdarzeń?",
    section_recurring: "Powtórz zdarzenie",
    button_recurring: "Nieaktywne",
    button_recurring_open: "Aktywne",
    button_edit_series: "Edytuj serię",
    button_edit_occurrence: "Edytuj kopię",
    agenda_tab: "Agenda",
    date: "Data",
    description: "Opis",
    year_tab: "Rok",
    week_agenda_tab: "Agenda",
    grid_tab: "Tabela",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Codziennie",
    repeat_radio_week: "Co tydzie",
    repeat_radio_month: "Co miesic",
    repeat_radio_year: "Co rok",
    repeat_radio_day_type: "Kadego",
    repeat_text_day_count: "dnia",
    repeat_radio_day_type2: "Kadego dnia roboczego",
    repeat_week: " Powtarzaj kadego",
    repeat_text_week_count: "tygodnia w dni:",
    repeat_radio_month_type: "Powtrz",
    repeat_radio_month_start: "W",
    repeat_text_month_day: "dnia kadego",
    repeat_text_month_count: "miesica",
    repeat_text_month_count2_before: "kadego",
    repeat_text_month_count2_after: "miesica",
    repeat_year_label: "W",
    select_year_day2: "miesica",
    repeat_text_year_day: "dnia miesica",
    select_year_month: "",
    repeat_radio_end: "Bez daty kocowej",
    repeat_text_occurences_count: "wystpieniu/ach",
    repeat_radio_end3: "Zakocz w",
    repeat_radio_end2: "Po",
    month_for_recurring: ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Wrzenia", "Padziernka", "Listopada", "Grudnia"],
    day_for_recurring: ["Niedziela", "Poniedziaek", "Wtorek", "roda", "Czwartek", "Pitek", "Sobota"]
  }
};
var Be = {
  date: {
    month_full: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    month_short: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    day_full: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    day_short: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
  },
  labels: {
    dhx_cal_today_button: "Hoje",
    day_tab: "Dia",
    week_tab: "Semana",
    month_tab: "Mês",
    new_event: "Novo evento",
    icon_save: "Salvar",
    icon_cancel: "Cancelar",
    icon_details: "Detalhes",
    icon_edit: "Editar",
    icon_delete: "Deletar",
    confirm_closing: "",
    confirm_deleting: "Tem certeza que deseja excluir?",
    section_description: "Descrição",
    section_time: "Período de tempo",
    full_day: "Dia inteiro",
    confirm_recurring: "Deseja editar todos esses eventos repetidos?",
    section_recurring: "Repetir evento",
    button_recurring: "Desabilitar",
    button_recurring_open: "Habilitar",
    button_edit_series: "Editar a série",
    button_edit_occurrence: "Editar uma cópia",
    agenda_tab: "Dia",
    date: "Data",
    description: "Descrição",
    year_tab: "Ano",
    week_agenda_tab: "Dia",
    grid_tab: "Grade",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Diário",
    repeat_radio_week: "Semanal",
    repeat_radio_month: "Mensal",
    repeat_radio_year: "Anual",
    repeat_radio_day_type: "Cada",
    repeat_text_day_count: "dia(s)",
    repeat_radio_day_type2: "Cada trabalho diário",
    repeat_week: " Repita cada",
    repeat_text_week_count: "semana:",
    repeat_radio_month_type: "Repetir",
    repeat_radio_month_start: "Em",
    repeat_text_month_day: "todo dia",
    repeat_text_month_count: "mês",
    repeat_text_month_count2_before: "todo",
    repeat_text_month_count2_after: "mês",
    repeat_year_label: "Em",
    select_year_day2: "of",
    repeat_text_year_day: "dia",
    select_year_month: "mês",
    repeat_radio_end: "Sem data final",
    repeat_text_occurences_count: "ocorrências",
    repeat_radio_end3: "Fim",
    repeat_radio_end2: "Depois",
    month_for_recurring: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    day_for_recurring: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  }
};
var se = {
  date: {
    month_full: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "November", "December"],
    month_short: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    day_full: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"],
    day_short: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sa"]
  },
  labels: {
    dhx_cal_today_button: "Astazi",
    day_tab: "Zi",
    week_tab: "Saptamana",
    month_tab: "Luna",
    new_event: "Eveniment nou",
    icon_save: "Salveaza",
    icon_cancel: "Anuleaza",
    icon_details: "Detalii",
    icon_edit: "Editeaza",
    icon_delete: "Sterge",
    confirm_closing: "Schimbarile nu vor fi salvate, esti sigur?",
    confirm_deleting: "Evenimentul va fi sters permanent, esti sigur?",
    section_description: "Descriere",
    section_time: "Interval",
    full_day: "Toata ziua",
    confirm_recurring: "Vrei sa editezi toata seria de evenimente repetate?",
    section_recurring: "Repetare",
    button_recurring: "Dezactivata",
    button_recurring_open: "Activata",
    button_edit_series: "Editeaza serie",
    button_edit_occurrence: "Editeaza doar intrare",
    agenda_tab: "Agenda",
    date: "Data",
    description: "Descriere",
    year_tab: "An",
    week_agenda_tab: "Agenda",
    grid_tab: "Lista",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Zilnic",
    repeat_radio_week: "Saptamanal",
    repeat_radio_month: "Lunar",
    repeat_radio_year: "Anual",
    repeat_radio_day_type: "La fiecare",
    repeat_text_day_count: "zi(le)",
    repeat_radio_day_type2: "Fiecare zi lucratoare",
    repeat_week: " Repeta la fiecare",
    repeat_text_week_count: "saptamana in urmatoarele zile:",
    repeat_radio_month_type: "Repeta in",
    repeat_radio_month_start: "In a",
    repeat_text_month_day: "zi la fiecare",
    repeat_text_month_count: "luni",
    repeat_text_month_count2_before: "la fiecare",
    repeat_text_month_count2_after: "luni",
    repeat_year_label: "In",
    select_year_day2: "a lunii",
    repeat_text_year_day: "zi a lunii",
    select_year_month: "",
    repeat_radio_end: "Fara data de sfarsit",
    repeat_text_occurences_count: "evenimente",
    repeat_radio_end3: "La data",
    repeat_radio_end2: "Dupa",
    month_for_recurring: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
    day_for_recurring: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"]
  }
};
var De = {
  date: {
    month_full: ["Январь", "Февраль", "Март", "Апрель", "Maй", "Июнь", "Июль", "Август", "Сентябрь", "Oктябрь", "Ноябрь", "Декабрь"],
    month_short: ["Янв", "Фев", "Maр", "Aпр", "Maй", "Июн", "Июл", "Aвг", "Сен", "Окт", "Ноя", "Дек"],
    day_full: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    day_short: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
  },
  labels: {
    dhx_cal_today_button: "Сегодня",
    day_tab: "День",
    week_tab: "Неделя",
    month_tab: "Месяц",
    new_event: "Новое событие",
    icon_save: "Сохранить",
    icon_cancel: "Отменить",
    icon_details: "Детали",
    icon_edit: "Изменить",
    icon_delete: "Удалить",
    confirm_closing: "",
    confirm_deleting: "Событие будет удалено безвозвратно, продолжить?",
    section_description: "Описание",
    section_time: "Период времени",
    full_day: "Весь день",
    confirm_recurring: "Вы хотите изменить всю серию повторяющихся событий?",
    section_recurring: "Повторение",
    button_recurring: "Отключено",
    button_recurring_open: "Включено",
    button_edit_series: "Редактировать серию",
    button_edit_occurrence: "Редактировать экземпляр",
    agenda_tab: "Список",
    date: "Дата",
    description: "Описание",
    year_tab: "Год",
    week_agenda_tab: "Список",
    grid_tab: "Таблица",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "День",
    repeat_radio_week: "Неделя",
    repeat_radio_month: "Месяц",
    repeat_radio_year: "Год",
    repeat_radio_day_type: "Каждый",
    repeat_text_day_count: "день",
    repeat_radio_day_type2: "Каждый рабочий день",
    repeat_week: " Повторять каждую",
    repeat_text_week_count: "неделю , в:",
    repeat_radio_month_type: "Повторять",
    repeat_radio_month_start: "",
    repeat_text_month_day: " числа каждый ",
    repeat_text_month_count: "месяц",
    repeat_text_month_count2_before: "каждый ",
    repeat_text_month_count2_after: "месяц",
    repeat_year_label: "",
    select_year_day2: "",
    repeat_text_year_day: "день",
    select_year_month: "",
    repeat_radio_end: "Без даты окончания",
    repeat_text_occurences_count: "повторений",
    repeat_radio_end3: "До ",
    repeat_radio_end2: "",
    month_for_recurring: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
    day_for_recurring: ["Воскресенье", "Понедельник", "Вторник", "Среду", "Четверг", "Пятницу", "Субботу"]
  }
};
var We = {
  date: {
    month_full: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    day_full: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
    day_short: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
  },
  labels: {
    dhx_cal_today_button: "Danes",
    day_tab: "Dan",
    week_tab: "Teden",
    month_tab: "Mesec",
    new_event: "Nov dogodek",
    icon_save: "Shrani",
    icon_cancel: "Prekliči",
    icon_details: "Podrobnosti",
    icon_edit: "Uredi",
    icon_delete: "Izbriši",
    confirm_closing: "",
    confirm_deleting: "Dogodek bo izbrisan. Želite nadaljevati?",
    section_description: "Opis",
    section_time: "Časovni okvir",
    full_day: "Ves dan",
    confirm_recurring: "Želite urediti celoten set ponavljajočih dogodkov?",
    section_recurring: "Ponovi dogodek",
    button_recurring: "Onemogočeno",
    button_recurring_open: "Omogočeno",
    button_edit_series: "Edit series",
    button_edit_occurrence: "Edit occurrence",
    agenda_tab: "Zadeva",
    date: "Datum",
    description: "Opis",
    year_tab: "Leto",
    week_agenda_tab: "Zadeva",
    grid_tab: "Miza",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var ke = {
  date: {
    month_full: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sept", "Okt", "Nov", "Dec"],
    day_full: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
    day_short: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"]
  },
  labels: {
    dhx_cal_today_button: "Dnes",
    day_tab: "Deň",
    week_tab: "Týždeň",
    month_tab: "Mesiac",
    new_event: "Nová udalosť",
    icon_save: "Uložiť",
    icon_cancel: "Späť",
    icon_details: "Detail",
    icon_edit: "Edituj",
    icon_delete: "Zmazať",
    confirm_closing: "Vaše zmeny nebudú uložené. Skutočne?",
    confirm_deleting: "Udalosť bude natrvalo vymazaná. Skutočne?",
    section_description: "Poznámky",
    section_time: "Doba platnosti",
    confirm_recurring: "Prajete si upraviť celú radu opakovaných udalostí?",
    section_recurring: "Opakovanie udalosti",
    button_recurring: "Vypnuté",
    button_recurring_open: "Zapnuté",
    button_edit_series: "Upraviť opakovania",
    button_edit_occurrence: "Upraviť inštancie",
    agenda_tab: "Program",
    date: "Dátum",
    description: "Poznámka",
    year_tab: "Rok",
    full_day: "Celý deň",
    week_agenda_tab: "Program",
    grid_tab: "Mriežka",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Denne",
    repeat_radio_week: "Týždenne",
    repeat_radio_month: "Mesaène",
    repeat_radio_year: "Roène",
    repeat_radio_day_type: "Každý",
    repeat_text_day_count: "deò",
    repeat_radio_day_type2: "Každý prac. deò",
    repeat_week: "Opakova každý",
    repeat_text_week_count: "týždeò v dòoch:",
    repeat_radio_month_type: "Opakova",
    repeat_radio_month_start: "On",
    repeat_text_month_day: "deò každý",
    repeat_text_month_count: "mesiac",
    repeat_text_month_count2_before: "každý",
    repeat_text_month_count2_after: "mesiac",
    repeat_year_label: "On",
    select_year_day2: "poèas",
    repeat_text_year_day: "deò",
    select_year_month: "mesiac",
    repeat_radio_end: "Bez dátumu ukonèenia",
    repeat_text_occurences_count: "udalostiach",
    repeat_radio_end3: "Ukonèi",
    repeat_radio_end2: "Po",
    month_for_recurring: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
    day_for_recurring: ["Nede¾a", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
  }
};
var Pe = {
  date: {
    month_full: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    day_full: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
    day_short: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
  },
  labels: {
    dhx_cal_today_button: "Idag",
    day_tab: "Dag",
    week_tab: "Vecka",
    month_tab: "Månad",
    new_event: "Ny händelse",
    icon_save: "Spara",
    icon_cancel: "Ångra",
    icon_details: "Detaljer",
    icon_edit: "Ändra",
    icon_delete: "Ta bort",
    confirm_closing: "",
    confirm_deleting: "Är du säker på att du vill ta bort händelsen permanent?",
    section_description: "Beskrivning",
    section_time: "Tid",
    full_day: "Hela dagen",
    confirm_recurring: "Vill du redigera hela serien med repeterande händelser?",
    section_recurring: "Upprepa händelse",
    button_recurring: "Inaktiverat",
    button_recurring_open: "Aktiverat",
    button_edit_series: "Redigera serien",
    button_edit_occurrence: "Redigera en kopia",
    agenda_tab: "Dagordning",
    date: "Datum",
    description: "Beskrivning",
    year_tab: "År",
    week_agenda_tab: "Dagordning",
    grid_tab: "Galler",
    drag_to_create: "Dra för att skapa ny",
    drag_to_move: "Dra för att flytta",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "Dagligen",
    repeat_radio_week: "Veckovis",
    repeat_radio_month: "Månadsvis",
    repeat_radio_year: "Årligen",
    repeat_radio_day_type: "Var",
    repeat_text_day_count: "dag",
    repeat_radio_day_type2: "Varje arbetsdag",
    repeat_week: " Upprepa var",
    repeat_text_week_count: "vecka dessa dagar:",
    repeat_radio_month_type: "Upprepa",
    repeat_radio_month_start: "Den",
    repeat_text_month_day: "dagen var",
    repeat_text_month_count: "månad",
    repeat_text_month_count2_before: "var",
    repeat_text_month_count2_after: "månad",
    repeat_year_label: "Den",
    select_year_day2: "i",
    repeat_text_year_day: "dag i",
    select_year_month: "månad",
    repeat_radio_end: "Inget slutdatum",
    repeat_text_occurences_count: "upprepningar",
    repeat_radio_end3: "Sluta efter",
    repeat_radio_end2: "Efter",
    month_for_recurring: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    day_for_recurring: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
  }
};
var ce = {
  date: {
    month_full: ["Ocak", "Þubat", "Mart", "Nisan", "Mayýs", "Haziran", "Temmuz", "Aðustos", "Eylül", "Ekim", "Kasým", "Aralýk"],
    month_short: ["Oca", "Þub", "Mar", "Nis", "May", "Haz", "Tem", "Aðu", "Eyl", "Eki", "Kas", "Ara"],
    day_full: ["Pazar", "Pazartes,", "Salý", "Çarþamba", "Perþembe", "Cuma", "Cumartesi"],
    day_short: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"]
  },
  labels: {
    dhx_cal_today_button: "Bugün",
    day_tab: "Gün",
    week_tab: "Hafta",
    month_tab: "Ay",
    new_event: "Uygun",
    icon_save: "Kaydet",
    icon_cancel: "Ýptal",
    icon_details: "Detaylar",
    icon_edit: "Düzenle",
    icon_delete: "Sil",
    confirm_closing: "",
    confirm_deleting: "Etkinlik silinecek, devam?",
    section_description: "Açýklama",
    section_time: "Zaman aralýðý",
    full_day: "Tam gün",
    confirm_recurring: "Tüm tekrar eden etkinlikler silinecek, devam?",
    section_recurring: "Etkinliði tekrarla",
    button_recurring: "Pasif",
    button_recurring_open: "Aktif",
    button_edit_series: "Dizi düzenleme",
    button_edit_occurrence: "Bir kopyasını düzenleyin",
    agenda_tab: "Ajanda",
    date: "Tarih",
    description: "Açýklama",
    year_tab: "Yýl",
    week_agenda_tab: "Ajanda",
    grid_tab: "Izgara",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};
var Ge = {
  date: {
    month_full: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    month_short: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
    day_full: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
    day_short: ["Нед", "Пон", "Вів", "Сер", "Чет", "Птн", "Суб"]
  },
  labels: {
    dhx_cal_today_button: "Сьогодні",
    day_tab: "День",
    week_tab: "Тиждень",
    month_tab: "Місяць",
    new_event: "Нова подія",
    icon_save: "Зберегти",
    icon_cancel: "Відміна",
    icon_details: "Деталі",
    icon_edit: "Редагувати",
    icon_delete: "Вилучити",
    confirm_closing: "",
    confirm_deleting: "Подія вилучиться назавжди. Ви впевнені?",
    section_description: "Опис",
    section_time: "Часовий проміжок",
    full_day: "Весь день",
    confirm_recurring: "Хочете редагувати весь перелік повторюваних подій?",
    section_recurring: "Повторювана подія",
    button_recurring: "Відключено",
    button_recurring_open: "Включено",
    button_edit_series: "Редагувати серію",
    button_edit_occurrence: "Редагувати примірник",
    agenda_tab: "Перелік",
    date: "Дата",
    description: "Опис",
    year_tab: "Рік",
    week_agenda_tab: "Перелік",
    grid_tab: "Таблиця",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    repeat_radio_day: "День",
    repeat_radio_week: "Тиждень",
    repeat_radio_month: "Місяць",
    repeat_radio_year: "Рік",
    repeat_radio_day_type: "Кожний",
    repeat_text_day_count: "день",
    repeat_radio_day_type2: "Кожний робочий день",
    repeat_week: " Повторювати кожен",
    repeat_text_week_count: "тиждень , по:",
    repeat_radio_month_type: "Повторювати",
    repeat_radio_month_start: "",
    repeat_text_month_day: " числа кожний ",
    repeat_text_month_count: "місяць",
    repeat_text_month_count2_before: "кожен ",
    repeat_text_month_count2_after: "місяць",
    repeat_year_label: "",
    select_year_day2: "",
    repeat_text_year_day: "день",
    select_year_month: "",
    repeat_radio_end: "Без дати закінчення",
    repeat_text_occurences_count: "повторень",
    repeat_radio_end3: "До ",
    repeat_radio_end2: "",
    month_for_recurring: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"],
    day_for_recurring: ["Неділям", "Понеділкам", "Вівторкам", "Середам", "Четвергам", "П'ятницям", "Суботам"]
  }
};
function dt(t) {
  return (dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function te(t) {
  var i;
  var o;
  var c;
  var j = {
    version: "6.0.3"
  };
  o = {
    agenda: "https://docs.dhtmlx.com/scheduler/agenda_view.html",
    grid: "https://docs.dhtmlx.com/scheduler/grid_view.html",
    map: "https://docs.dhtmlx.com/scheduler/map_view.html",
    unit: "https://docs.dhtmlx.com/scheduler/units_view.html",
    timeline: "https://docs.dhtmlx.com/scheduler/timeline_view.html",
    week_agenda: "https://docs.dhtmlx.com/scheduler/weekagenda_view.html",
    year: "https://docs.dhtmlx.com/scheduler/year_view.html",
    anythingElse: "https://docs.dhtmlx.com/scheduler/views.html"
  };
  c = {
    agenda: "ext/dhtmlxscheduler_agenda_view.js",
    grid: "ext/dhtmlxscheduler_grid_view.js",
    map: "ext/dhtmlxscheduler_map_view.js",
    unit: "ext/dhtmlxscheduler_units.js",
    timeline: "ext/dhtmlxscheduler_timeline.js, ext/dhtmlxscheduler_treetimeline.js, ext/dhtmlxscheduler_daytimeline.js",
    week_agenda: "ext/dhtmlxscheduler_week_agenda.js",
    year: "ext/dhtmlxscheduler_year_view.js",
    limit: "ext/dhtmlxscheduler_limit.js"
  };
  (i = j)._commonErrorMessages = {
    unknownView: function (h) {
      var D = c[h] ? "You're probably missing " + c[h] + "." : "";
      return "`" + h + "` view is not defined. \nPlease check parameters you pass to `scheduler.init` or `scheduler.setCurrentView` in your code and ensure you've imported appropriate extensions. \nRelated docs: " + (o[h] || o.anythingElse) + "\n" + (D ? D + "\n" : "");
    },
    collapsedContainer: function (h) {
      return "Scheduler container height is set to *100%* but the rendered height is zero and the scheduler is not visible. \nMake sure that the container has some initial height or use different units. For example:\n<div id='scheduler_here' class='dhx_cal_container' style='width:100%; height:600px;'> \n";
    }
  };
  i.createTimelineView = function () {
    throw new Error("scheduler.createTimelineView is not implemented. Be sure to add the required extension: " + c.timeline + "\nRelated docs: " + o.timeline);
  };
  i.createUnitsView = function () {
    throw new Error("scheduler.createUnitsView is not implemented. Be sure to add the required extension: " + c.unit + "\nRelated docs: " + o.unit);
  };
  i.createGridView = function () {
    throw new Error("scheduler.createGridView is not implemented. Be sure to add the required extension: " + c.grid + "\nRelated docs: " + o.grid);
  };
  i.addMarkedTimespan = function () {
    throw new Error("scheduler.addMarkedTimespan is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_limit.js\nRelated docs: https://docs.dhtmlx.com/scheduler/limits.html");
  };
  i.renderCalendar = function () {
    throw new Error("scheduler.renderCalendar is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_minical.js\nhttps://docs.dhtmlx.com/scheduler/minicalendar.html");
  };
  i.exportToPNG = function () {
    throw new Error(["scheduler.exportToPNG is not implemented.", "This feature requires an additional module, be sure to check the related doc here https://docs.dhtmlx.com/scheduler/png.html", "Licensing info: https://dhtmlx.com/docs/products/dhtmlxScheduler/export.shtml"].join("\n"));
  };
  i.exportToPDF = function () {
    throw new Error(["scheduler.exportToPDF is not implemented.", "This feature requires an additional module, be sure to check the related doc here https://docs.dhtmlx.com/scheduler/pdf.html", "Licensing info: https://dhtmlx.com/docs/products/dhtmlxScheduler/export.shtml"].join("\n"));
  };
  (function (i) {
    var o = function t(j, a) {
      j = j || s.event;
      a = a || s.eventRemove;
      var v = [];
      var _ = {
        attach: function (i, o, c, h) {
          v.push({
            element: i,
            event: o,
            callback: c,
            capture: h
          });
          j(i, o, c, h);
        },
        detach: function (i, o, c, h) {
          a(i, o, c, h);
          for (var D = 0; D < v.length; D++) {
            var V = v[D];
            if (V.element === i && V.event === o && V.callback === c && V.capture === h) {
              v.splice(D, 1);
              D--;
            }
          }
        },
        detachAll: function () {
          for (var i = v.slice(), o = 0; o < i.length; o++) {
            var c = i[o];
            _.detach(c.element, c.event, c.callback, c.capture);
            _.detach(c.element, c.event, c.callback, undefined);
            _.detach(c.element, c.event, c.callback, false);
            _.detach(c.element, c.event, c.callback, true);
          }
          v.splice(0, v.length);
        },
        extend: function () {
          return t(this.event, this.eventRemove);
        }
      };
      return _;
    }();
    i.event = o.attach;
    i.eventRemove = o.detach;
    i._eventRemoveAll = o.detachAll;
    i._createDomEventScope = o.extend;
    i._trim = function (c) {
      return (String.prototype.trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      }).apply(c);
    };
    i._isDate = function (c) {
      return !!c && m(c) == "object" && !!c.getFullYear && !!c.getMonth && !!c.getDate;
    };
    i._isObject = function (c) {
      return c && m(c) == "object";
    };
  })(j);
  (function (i) {
    x(i);
    (function w(t) {
      function j(o) {
        var c = document.createElement("div");
        (o || "").split(" ").forEach(function (h) {
          c.classList.add(h);
        });
        return c;
      }
      function a_rows_container() {
        return j("dhx_cal_navbar_rows_container");
      }
      function a_row() {
        return j("dhx_cal_navbar_row");
      }
      function a_view(o) {
        var c = j("dhx_cal_tab");
        c.setAttribute("name", o.view + "_tab");
        c.setAttribute("data-tab", o.view);
        if (t.config.fix_tab_position) {
          if (o.$firstTab) {
            c.classList.add("dhx_cal_tab_first");
          } else if (o.$lastTab) {
            c.classList.add("dhx_cal_tab_last");
          } else if (o.view !== "week") {
            c.classList.add("dhx_cal_tab_standalone");
          }
        }
        return c;
      }
      function a_date() {
        return j("dhx_cal_date");
      }
      function a_button(o) {
        return j("dhx_cal_nav_button dhx_cal_nav_button_custom dhx_cal_tab");
      }
      function a_builtInButton(o) {
        return j("dhx_cal_" + o.view + "_button dhx_cal_nav_button");
      }
      function a_spacer() {
        return j("dhx_cal_line_spacer");
      }
      function a_minicalendarButton(o) {
        var c = j("dhx_minical_icon");
        if (!o.click && !c.$_eventAttached) {
          t.event(c, "click", function () {
            if (t.isCalendarVisible()) {
              t.destroyCalendar();
            } else {
              t.renderCalendar({
                position: this,
                date: t.getState().date,
                navigation: true,
                handler: function (h, D) {
                  t.setCurrentView(h);
                  t.destroyCalendar();
                }
              });
            }
          });
        }
        return c;
      }
      function v(o) {
        var c = function (V) {
          var T;
          if (V.view) {
            switch (V.view) {
              case "today":
              case "next":
              case "prev":
                T = a_builtInButton;
                break;
              case "date":
                T = a_date;
                break;
              case "spacer":
                T = a_spacer;
                break;
              case "button":
                T = a_button;
                break;
              case "minicalendar":
                T = a_minicalendarButton;
                break;
              default:
                T = a_view;
            }
          } else if (V.rows) {
            T = a_rows_container;
          } else if (V.cols) {
            T = a_row;
          }
          return T;
        }(o);
        if (c) {
          var h = c(o);
          if (o.css) {
            h.classList.add(o.css);
          }
          if (o.width) {
            if ((D = o.width) === D * 1) {
              D += "px";
            }
            h.style.width = D;
          }
          if (o.height) {
            if ((D = o.height) === D * 1) {
              D += "px";
            }
            h.style.height = D;
          }
          if (o.click) {
            h.addEventListener("click", o.click);
          }
          if (o.html) {
            h.innerHTML = o.html;
          }
          if (o.align) {
            var D = "";
            if (o.align == "right") {
              D = "flex-end";
            } else if (o.align == "left") {
              D = "flex-start";
            }
            h.style.justifyContent = D;
          }
          return h;
        }
      }
      function _(o) {
        if (typeof o == "string") {
          o = {
            view: o
          };
        }
        if (!o.view && !o.rows && !o.cols) {
          o.view = "button";
        }
        return o;
      }
      t._init_nav_bar = function (o) {
        var c = this.$container.querySelector(".dhx_cal_navline");
        return c || ((c = document.createElement("div")).className = "dhx_cal_navline dhx_cal_navline_flex", t._update_nav_bar(o, c), c);
      };
      var i = null;
      t._update_nav_bar = function (o, c) {
        if (o) {
          var h = false;
          var V = o.height || t.xy.nav_height;
          if (i === null || i !== V) {
            h = true;
          }
          if (h) {
            t.xy.nav_height = V;
          }
          c.innerHTML = "";
          c.appendChild(function T(W) {
            var z;
            var Z = document.createDocumentFragment();
            z = Array.isArray(W) ? W : [W];
            for (var re = 0; re < z.length; re++) {
              var oe;
              var _e = _(z[re]);
              if (_e.view === "day" && z[re + 1]) {
                if ((oe = _(z[re + 1])).view === "week" || oe.view === "month") {
                  _e.$firstTab = true;
                }
              }
              if (_e.view === "month" && z[re - 1]) {
                if ((oe = _(z[re - 1])).view === "week" || oe.view === "day") {
                  _e.$lastTab = true;
                }
              }
              var he = v(_e);
              Z.appendChild(he);
              if (_e.cols || _e.rows) {
                he.appendChild(T(_e.cols || _e.rows));
              }
            }
            return Z;
          }(o));
          t.unset_actions();
          t._els = [];
          t.get_elements();
          t.set_actions();
          c.style.display = V === 0 ? "none" : "";
          i = V;
        }
      };
    })(i);
    i._detachDomEvent = function (T, W, z) {
      if (T.removeEventListener) {
        T.removeEventListener(W, z, false);
      } else if (T.detachEvent) {
        T.detachEvent("on" + W, z);
      }
    };
    i._init_once = function () {
      (function E(t) {
        function j(i) {
          for (var o = document.body; i && i != o;) {
            i = i.parentNode;
          }
          return o == i;
        }
        function a(i) {
          return {
            w: i.innerWidth || document.documentElement.clientWidth,
            h: i.innerHeight || document.documentElement.clientHeight
          };
        }
        function v(i, o) {
          var c;
          var h = a(o);
          i.event(o, "resize", function () {
            clearTimeout(c);
            c = setTimeout(function () {
              if (j(i.$container)) {
                var D = a(o);
                if ((V = h).w != (T = D).w || V.h != T.h) {
                  h = D;
                  _(i);
                }
              }
              var V;
              var T;
            }, 150);
          });
        }
        function _(i) {
          if (!i.$destroyed && i.$root && j(i.$root) && i.callEvent("onSchedulerResize", [])) {
            i.updateView();
            i.callEvent("onAfterSchedulerResize", []);
          }
        }
        (function (i) {
          var o = i.$container;
          if (window.getComputedStyle(o).getPropertyValue("position") == "static") {
            o.style.position = "relative";
          }
          var h;
          var D;
          var V;
          var c = document.createElement("iframe");
          c.className = "scheduler_container_resize_watcher";
          c.tabIndex = -1;
          if (i.config.wai_aria_attributes) {
            c.setAttribute("role", "none");
            c.setAttribute("aria-hidden", true);
          }
          if (window.Sfdc || window.$A || window.Aura) {
            D = (h = i).$root.offsetHeight;
            V = h.$root.offsetWidth;
            (function T() {
              if (!h.$destroyed) {
                if (h.$root) {
                  if (h.$root.offsetHeight != D || h.$root.offsetWidth != V) {
                    _(h);
                  }
                  D = h.$root.offsetHeight;
                  V = h.$root.offsetWidth;
                }
                setTimeout(T, 200);
              }
            })();
          } else {
            o.appendChild(c);
            if (c.contentWindow) {
              v(i, c.contentWindow);
            } else {
              o.removeChild(c);
              v(i, window);
            }
          }
        })(t);
      })(i);
      i._init_once = function () {};
    };
    function D(T) {
      return !!T.querySelector(".dhx_cal_header") && !!T.querySelector(".dhx_cal_data") && !!T.querySelector(".dhx_cal_navline");
    }
    i.init = function (T, W, z) {
      if (!this.$destroyed) {
        W = W || i._currentDate();
        z = z || "week";
        if (this._obj) {
          this.unset_actions();
        }
        this._obj = typeof T == "string" ? document.getElementById(T) : T;
        this.$container = this._obj;
        this.$root = this._obj;
        if (!this.$container.offsetHeight && this.$container.offsetWidth && this.$container.style.height === "100%") {
          window.console.error(i._commonErrorMessages.collapsedContainer(), this.$container);
        }
        if (this.config.wai_aria_attributes && this.config.wai_aria_application_role) {
          this.$container.setAttribute("role", "application");
        }
        if (!this.config.header && !D(this.$container)) {
          this.config.header = function (Z) {
            var re = ["day", "week", "month"];
            if (Z.matrix) {
              for (var oe in Z.matrix) {
                re.push(oe);
              }
            }
            if (Z._props) {
              for (var oe in Z._props) {
                re.push(oe);
              }
            }
            if (Z._grid && Z._grid.names) {
              for (var oe in Z._grid.names) {
                re.push(oe);
              }
            }
            ["map", "agenda", "week_agenda", "year"].forEach(function (_e) {
              if (Z[_e + "_view"]) {
                re.push(_e);
              }
            });
            return re.concat(["date"]).concat(["prev", "today", "next"]);
          }(this);
          window.console.log(["Required DOM elements are missing from the scheduler container and **scheduler.config.header** is not specified.", "Using a default header configuration: ", "scheduler.config.header = " + JSON.stringify(this.config.header, null, 2), "Check this article for the details: https://docs.dhtmlx.com/scheduler/initialization.html"].join("\n"));
        }
        if (this.config.header) {
          this.$container.innerHTML = "";
          this.$container.classList.add("dhx_cal_container");
          if (this.config.header.height) {
            this.xy.nav_height = this.config.header.height;
          }
          this.$container.appendChild(function (T) {
            return i._init_nav_bar(T);
          }(this.config.header));
          this.$container.appendChild(function (T) {
            var W = document.createElement("div");
            W.className = "dhx_cal_header";
            return W;
          }());
          this.$container.appendChild(function (T) {
            var W = document.createElement("div");
            W.className = "dhx_cal_data";
            return W;
          }());
        } else if (!D(this.$container)) {
          throw new Error(["Required DOM elements are missing from the scheduler container.", "Be sure to either specify them manually in the markup: https://docs.dhtmlx.com/scheduler/initialization.html#initializingschedulerviamarkup", "Or to use **scheduler.config.header** setting so they could be created automatically: https://docs.dhtmlx.com/scheduler/initialization.html#initializingschedulerviaheaderconfig"].join("\n"));
        }
        if (this.config.rtl) {
          this.$container.className += " dhx_cal_container_rtl";
        }
        if (this._skin_init) {
          i._skin_init();
        }
        i.date.init();
        this._scroll = true;
        this._quirks = this.$env.isIE && document.compatMode == "BackCompat";
        this._quirks7 = this.$env.isIE && navigator.appVersion.indexOf("MSIE 8") == -1;
        this._els = [];
        this.get_elements();
        this.init_templates();
        this.set_actions();
        this._init_once();
        this._init_touch_events();
        this.set_sizes();
        i.callEvent("onSchedulerReady", []);
        this.setCurrentView(W, z);
      }
    };
    i.xy = {
      min_event_height: 40,
      scale_width: 50,
      scroll_width: 18,
      scale_height: 20,
      month_scale_height: 20,
      menu_width: 25,
      margin_top: 0,
      margin_left: 0,
      editor_width: 140,
      month_head_height: 22,
      event_header_height: 14
    };
    i.keys = {
      edit_save: 13,
      edit_cancel: 27
    };
    i.bind = function (T, W) {
      if (T.bind) {
        return T.bind(W);
      } else {
        return function () {
          return T.apply(W, arguments);
        };
      }
    };
    i.set_sizes = function () {
      var T = this._x = this._obj.clientWidth - this.xy.margin_left;
      var W = this._y = this._obj.clientHeight - this.xy.margin_top;
      var z = this._table_view ? 0 : this.xy.scale_width + this.xy.scroll_width;
      var Z = this._table_view ? -1 : this.xy.scale_width;
      var re = this.$container.querySelector(".dhx_cal_scale_placeholder");
      if (i._is_material_skin()) {
        if (!re) {
          (re = document.createElement("div")).className = "dhx_cal_scale_placeholder";
          this.$container.insertBefore(re, this._els.dhx_cal_header[0]);
        }
        re.style.display = "block";
        this.set_xy(re, T, this.xy.scale_height + 1, 0, this.xy.nav_height + (this._quirks ? -1 : 1));
      } else if (re) {
        re.parentNode.removeChild(re);
      }
      if (this._lightbox) {
        if (i.$container.offsetWidth >= 1200) {
          this._setLbPosition(document.querySelector(".dhx_cal_light"));
        }
      }
      this.set_xy(this._els.dhx_cal_navline[0], T, this.xy.nav_height, 0, 0);
      this.set_xy(this._els.dhx_cal_header[0], T - z, this.xy.scale_height, Z, this.xy.nav_height + (this._quirks ? -1 : 1));
      var oe = this._els.dhx_cal_navline[0].offsetHeight;
      if (oe > 0) {
        this.xy.nav_height = oe;
      }
      var _e = this.xy.scale_height + this.xy.nav_height + (this._quirks ? -2 : 0);
      this.set_xy(this._els.dhx_cal_data[0], T, W - (_e + 2), 0, _e + 2);
    };
    i.set_xy = function (T, W, z, Z, re) {
      var oe = "left";
      T.style.width = Math.max(0, W) + "px";
      T.style.height = Math.max(0, z) + "px";
      if (arguments.length > 3) {
        if (this.config.rtl) {
          oe = "right";
        }
        T.style[oe] = Z + "px";
        T.style.top = re + "px";
      }
    };
    i.get_elements = function () {
      for (var T = this._obj.getElementsByTagName("DIV"), W = 0; W < T.length; W++) {
        var z = i._getClassName(T[W]);
        var Z = T[W].getAttribute("data-tab") || T[W].getAttribute("name") || "";
        z &&= z.split(" ")[0];
        this._els[z] ||= [];
        this._els[z].push(T[W]);
        var re = i.locale.labels[Z + "_tab"] || i.locale.labels[Z || z];
        if (typeof re != "string" && Z && !T[W].innerHTML) {
          re = Z.split("_")[0];
        }
        if (re) {
          this._waiAria.labelAttr(T[W], re);
          T[W].innerHTML = re;
        }
      }
    };
    var V = i._createDomEventScope();
    i.unset_actions = function () {
      V.detachAll();
    };
    i.set_actions = function () {
      for (var T in this._els) {
        if (this._click[T]) {
          for (var W = 0; W < this._els[T].length; W++) {
            var z = this._els[T][W];
            var Z = this._click[T].bind(z);
            V.attach(z, "click", Z);
          }
        }
      }
      V.attach(this._obj, "selectstart", function (re) {
        re.preventDefault();
        return false;
      });
      V.attach(this._obj, "mousemove", function (re) {
        if (!i._temp_touch_block) {
          i._on_mouse_move(re);
        }
      });
      V.attach(this._obj, "mousedown", function (re) {
        if (!i._ignore_next_click) {
          i._on_mouse_down(re);
        }
      });
      V.attach(this._obj, "mouseup", function (re) {
        if (!i._ignore_next_click) {
          i._on_mouse_up(re);
        }
      });
      V.attach(this._obj, "dblclick", function (re) {
        i._on_dbl_click(re);
      });
      V.attach(this._obj, "contextmenu", function (re) {
        var oe = re;
        return i.callEvent("onContextMenu", [i._locate_event(oe.target || oe.srcElement), oe]);
      });
    };
    i.select = function (T) {
      if (this._select_id != T) {
        i._close_not_saved();
        this.editStop(false);
        if (this._select_id) {
          this.unselect();
        }
        this._select_id = T;
        this.updateEvent(T);
        this.callEvent("onEventSelected", [T]);
      }
    };
    i.unselect = function (T) {
      if (!T || T == this._select_id) {
        var W = this._select_id;
        this._select_id = null;
        if (W && this.getEvent(W)) {
          this.updateEvent(W);
        }
        this.callEvent("onEventUnselected", [W]);
      }
    };
    i.getState = function () {
      return {
        mode: this._mode,
        date: new Date(this._date),
        min_date: new Date(this._min_date),
        max_date: new Date(this._max_date),
        editor_id: this._edit_id,
        lightbox_id: this._lightbox_id,
        new_event: this._new_event,
        select_id: this._select_id,
        expanded: this.expanded,
        drag_id: this._drag_id,
        drag_mode: this._drag_mode
      };
    };
    i._click = {
      dhx_cal_data: function (T) {
        if (i._ignore_next_click) {
          if (T.preventDefault) {
            T.preventDefault();
          }
          T.cancelBubble = true;
          i._ignore_next_click = false;
          return false;
        }
        var W = T.target;
        var z = i._locate_event(W);
        if (z) {
          if (!i.callEvent("onClick", [z, T]) || i.config.readonly) {
            return;
          }
        } else {
          i.callEvent("onEmptyClick", [i.getActionData(T).date, T]);
        }
        if (z && i.config.select) {
          i.select(z);
          var Z = i._getClassName(W);
          if (Z.indexOf("_icon") != -1) {
            i._click.buttons[Z.split(" ")[1].replace("icon_", "")](z);
          }
        } else {
          i._close_not_saved();
          if (i.getState().select_id && new Date().valueOf() - (i._new_event || 0) > 500) {
            i.unselect();
          }
        }
      },
      dhx_cal_prev_button: function () {
        i._click.dhx_cal_next_button(0, -1);
      },
      dhx_cal_next_button: function (T, W) {
        var z = 1;
        if (i.config.rtl) {
          W = -W;
          z = -z;
        }
        i.setCurrentView(i.date.add(i.date[i._mode + "_start"](new Date(i._date)), W || z, i._mode));
      },
      dhx_cal_today_button: function () {
        if (i.callEvent("onBeforeTodayDisplayed", [])) {
          i.setCurrentView(i._currentDate());
        }
      },
      dhx_cal_tab: function () {
        var T = this.getAttribute("data-tab");
        var W = this.getAttribute("name");
        var z = T || W.substring(0, W.search("_tab"));
        i.setCurrentView(i._date, z);
      },
      buttons: {
        delete: function (T) {
          i._dhtmlx_confirm(i.locale.labels.confirm_deleting, i.locale.labels.title_confirm_deleting, function () {
            i.deleteEvent(T);
          });
        },
        edit: function (T) {
          i.edit(T);
        },
        save: function (T) {
          i.editStop(true);
        },
        details: function (T) {
          i.showLightbox(T);
        },
        cancel: function (T) {
          i.editStop(false);
        }
      }
    };
    i._dhtmlx_confirm = function (T, W, z) {
      if (!T) {
        return z();
      }
      var Z = {
        text: T
      };
      if (W) {
        Z.title = W;
      }
      if (z) {
        Z.callback = function (re) {
          if (re) {
            z();
          }
        };
      }
      i.confirm(Z);
    };
    i.addEventNow = function (T, W, z) {
      var Z = {};
      if (i._isObject(T) && !i._isDate(T)) {
        Z = T;
        T = null;
      }
      var re = (this.config.event_duration || this.config.time_step) * 60000;
      T ||= Z.start_date || Math.round(i._currentDate().valueOf() / re) * re;
      var oe = new Date(T);
      if (!W) {
        var _e = this.config.first_hour;
        if (_e > oe.getHours()) {
          oe.setHours(_e);
          T = oe.valueOf();
        }
        W = T.valueOf() + re;
      }
      var he = new Date(W);
      if (oe.valueOf() == he.valueOf()) {
        he.setTime(he.valueOf() + re);
      }
      Z.start_date = Z.start_date || oe;
      Z.end_date = Z.end_date || he;
      Z.text = Z.text || this.locale.labels.new_event;
      Z.id = this._drag_id = Z.id || this.uid();
      this._drag_mode = "new-size";
      this._loading = true;
      var be = this.addEvent(Z);
      this.callEvent("onEventCreated", [this._drag_id, z]);
      this._loading = false;
      this._drag_event = {};
      this._on_mouse_up(z);
      return be;
    };
    i._on_dbl_click = function (T, W) {
      W = W || T.target || T.srcElement;
      if (!this.config.readonly) {
        var z = i._getClassName(W).split(" ")[0];
        switch (z) {
          case "dhx_scale_holder":
          case "dhx_scale_holder_now":
          case "dhx_month_body":
          case "dhx_wa_day_data":
            if (!i.config.dblclick_create) {
              break;
            }
            this.addEventNow(this.getActionData(T).date, null, T);
            break;
          case "dhx_cal_event":
          case "dhx_wa_ev_body":
          case "dhx_agenda_line":
          case "dhx_grid_event":
          case "dhx_cal_event_line":
          case "dhx_cal_event_clear":
            var Z = this._locate_event(W);
            if (!this.callEvent("onDblClick", [Z, T])) {
              return;
            }
            if (this.config.details_on_dblclick || this._table_view || !this.getEvent(Z)._timed || !this.config.select) {
              this.showLightbox(Z);
            } else {
              this.edit(Z);
            }
            break;
          case "dhx_time_block":
          case "dhx_cal_container":
            return;
          default:
            var re = this["dblclick_" + z];
            if (re) {
              re.call(this, T);
            } else if (W.parentNode && W != this) {
              return i._on_dbl_click(T, W.parentNode);
            }
        }
      }
    };
    i._get_column_index = function (T) {
      var W = 0;
      if (this._cols) {
        for (var z = 0, Z = 0; z + this._cols[Z] < T && Z < this._cols.length;) {
          z += this._cols[Z];
          Z++;
        }
        W = Z + (this._cols[Z] ? (T - z) / this._cols[Z] : 0);
        if (this._ignores && W >= this._cols.length) {
          for (; W >= 1 && this._ignores[Math.floor(W)];) {
            W--;
          }
        }
      }
      return W;
    };
    i._week_indexes_from_pos = function (T) {
      if (this._cols) {
        var W = this._get_column_index(T.x);
        T.x = Math.min(this._cols.length - 1, Math.max(0, Math.ceil(W) - 1));
        T.y = Math.max(0, Math.ceil(T.y * 60 / (this.config.time_step * this.config.hour_size_px)) - 1) + this.config.first_hour * (60 / this.config.time_step);
        return T;
      }
      return T;
    };
    i._mouse_coords = function (T) {
      var W;
      var z = document.body;
      var Z = document.documentElement;
      W = this.$env.isIE || !T.pageX && !T.pageY ? {
        x: T.clientX + (z.scrollLeft || Z.scrollLeft || 0) - z.clientLeft,
        y: T.clientY + (z.scrollTop || Z.scrollTop || 0) - z.clientTop
      } : {
        x: T.pageX,
        y: T.pageY
      };
      if (this.config.rtl && this._colsS) {
        W.x = this.$container.querySelector(".dhx_cal_data").offsetWidth - W.x;
        if (this._mode !== "month") {
          W.x -= this.xy.scale_width;
        }
      } else {
        W.x -= this.$domHelpers.getAbsoluteLeft(this._obj) + (this._table_view ? 0 : this.xy.scale_width);
      }
      var re = this.$container.querySelector(".dhx_cal_data");
      W.y -= this.$domHelpers.getAbsoluteTop(re) - this._els.dhx_cal_data[0].scrollTop;
      W.ev = T;
      var oe = this["mouse_" + this._mode];
      if (oe) {
        W = oe.call(this, W);
      } else if (this._table_view) {
        var _e = this._get_column_index(W.x);
        if (!this._cols || !this._colsS) {
          return W;
        }
        var he = 0;
        for (he = 1; he < this._colsS.heights.length && this._colsS.heights[he] <= W.y; he++);
        W.y = Math.ceil((Math.max(0, _e) + Math.max(0, he - 1) * 7) * 24 * 60 / this.config.time_step);
        if (i._drag_mode || this._mode == "month") {
          W.y = (Math.max(0, Math.ceil(_e) - 1) + Math.max(0, he - 1) * 7) * 24 * 60 / this.config.time_step;
        }
        if (this._drag_mode == "move" && i._ignores_detected && i.config.preserve_length) {
          W._ignores = true;
          this._drag_event._event_length ||= this._get_real_event_length(this._drag_event.start_date, this._drag_event.end_date, {
            x_step: 1,
            x_unit: "day"
          });
        }
        W.x = 0;
      } else {
        W = this._week_indexes_from_pos(W);
      }
      W.timestamp = +new Date();
      return W;
    };
    i._close_not_saved = function () {
      if (new Date().valueOf() - (i._new_event || 0) > 500 && i._edit_id) {
        var T = i.locale.labels.confirm_closing;
        i._dhtmlx_confirm(T, i.locale.labels.title_confirm_closing, function () {
          i.editStop(i.config.positive_closing);
        });
        if (T) {
          this._drag_id = this._drag_pos = this._drag_mode = null;
        }
      }
    };
    i._correct_shift = function (T, W) {
      return T - (new Date(i._min_date).getTimezoneOffset() - new Date(T).getTimezoneOffset()) * 60000 * (W ? -1 : 1);
    };
    i._is_pos_changed = function (T, W) {
      function z(Z, re, oe) {
        return Math.abs(Z - re) > oe;
      }
      return !T || !this._drag_pos || !!this._drag_pos.has_moved || !!!this._drag_pos.timestamp || W.timestamp - this._drag_pos.timestamp > 100 || !!z(T.ev.clientX, W.ev.clientX, 5) || !!z(T.ev.clientY, W.ev.clientY, 5);
    };
    i._correct_drag_start_date = function (T) {
      var W;
      if (i.matrix) {
        W = i.matrix[i._mode];
      }
      W = W || {
        x_step: 1,
        x_unit: "day"
      };
      T = new Date(T);
      var z = 1;
      if (W._start_correction || W._end_correction) {
        z = (W.last_hour || 0) * 60 - (T.getHours() * 60 + T.getMinutes()) || 1;
      }
      return T * 1 + (i._get_fictional_event_length(T, z, W) - z);
    };
    i._correct_drag_end_date = function (T, W) {
      var z;
      if (i.matrix) {
        z = i.matrix[i._mode];
      }
      var Z = T * 1 + i._get_fictional_event_length(T, W, z = z || {
        x_step: 1,
        x_unit: "day"
      });
      return new Date(Z * 1 - (i._get_fictional_event_length(Z, -1, z, -1) + 1));
    };
    i._on_mouse_move = function (T) {
      if (this._drag_mode) {
        var W = this._mouse_coords(T);
        if (this._is_pos_changed(this._drag_pos, W)) {
          var z;
          var Z;
          if (this._edit_id != this._drag_id) {
            this._close_not_saved();
          }
          if (!this._drag_mode) {
            return;
          }
          var re = null;
          if (this._drag_pos && !this._drag_pos.has_moved) {
            (re = this._drag_pos).has_moved = true;
          }
          this._drag_pos = W;
          this._drag_pos.has_moved = true;
          if (this._drag_mode == "create") {
            if (re) {
              W = re;
            }
            this._close_not_saved();
            this.unselect(this._select_id);
            this._loading = true;
            z = this._get_date_from_pos(W).valueOf();
            if (!this._drag_start) {
              if (this.callEvent("onBeforeEventCreated", [T, this._drag_id])) {
                this._loading = false;
                this._drag_start = z;
                return;
              } else {
                this._loading = false;
                return;
              }
            }
            Z = z;
            var oe = new Date(this._drag_start);
            var _e = new Date(Z);
            if ((this._mode == "day" || this._mode == "week") && oe.getHours() == _e.getHours() && oe.getMinutes() == _e.getMinutes()) {
              _e = new Date(this._drag_start + 1000);
            }
            this._drag_id = this.uid();
            this.addEvent(oe, _e, this.locale.labels.new_event, this._drag_id, W.fields);
            this.callEvent("onEventCreated", [this._drag_id, T]);
            this._loading = false;
            this._drag_mode = "new-size";
          }
          var he;
          var be = this.config.time_step;
          var Ae = this.getEvent(this._drag_id);
          if (i.matrix) {
            he = i.matrix[i._mode];
          }
          he = he || {
            x_step: 1,
            x_unit: "day"
          };
          if (this._drag_mode == "move") {
            z = this._min_date.valueOf() + (W.y * this.config.time_step + W.x * 24 * 60) * 60000;
            if (!W.custom && this._table_view) {
              z += this.date.time_part(Ae.start_date) * 1000;
            }
            if (!this._table_view && this._dragEventBody && this._drag_event._move_event_shift === undefined) {
              this._drag_event._move_event_shift = z - Ae.start_date;
            }
            if (this._drag_event._move_event_shift) {
              z -= this._drag_event._move_event_shift;
            }
            z = this._correct_shift(z);
            if (W._ignores && this.config.preserve_length && this._table_view) {
              z = i._correct_drag_start_date(z);
              Z = i._correct_drag_end_date(z, this._drag_event._event_length);
            } else {
              Z = Ae.end_date.valueOf() - (Ae.start_date.valueOf() - z);
            }
          } else {
            z = Ae.start_date.valueOf();
            Z = Ae.end_date.valueOf();
            if (this._table_view) {
              var He = this._min_date.valueOf() + W.y * this.config.time_step * 60000 + (W.custom ? 0 : 86400000);
              if (this._mode == "month") {
                He = this._correct_shift(He, false);
                if (this._drag_from_start) {
                  var Ne = 86400000;
                  if (He <= i.date.date_part(new Date(Z + Ne - 1)).valueOf()) {
                    z = He - Ne;
                  }
                } else {
                  Z = He;
                }
              } else if (this.config.preserve_length) {
                if (W.resize_from_start) {
                  z = i._correct_drag_start_date(He);
                } else {
                  Z = i._correct_drag_end_date(He, 0);
                }
              } else if (W.resize_from_start) {
                z = He;
              } else {
                Z = He;
              }
            } else {
              var Ve = this.date.date_part(new Date(Ae.end_date.valueOf() - 1)).valueOf();
              var Se = new Date(Ve);
              var Oe = 60 / be * (this.config.last_hour - this.config.first_hour);
              this.config.time_step = 1;
              var at = this._mouse_coords(T);
              this.config.time_step = be;
              var ht = W.y * be * 60000;
              var lt = Math.min(W.y + 1, Oe) * be * 60000;
              var mt = at.y * 60000;
              Z = Math.abs(ht - mt) > Math.abs(lt - mt) ? Ve + lt : Ve + ht;
              Z += (new Date(Z).getTimezoneOffset() - Se.getTimezoneOffset()) * 60000;
              this._els.dhx_cal_data[0].style.cursor = "s-resize";
              if (this._mode == "week" || this._mode == "day") {
                Z = this._correct_shift(Z);
              }
            }
            if (this._drag_mode == "new-size") {
              if (Z <= this._drag_start) {
                var ft = W.shift || (this._table_view && !W.custom ? 86400000 : 0);
                z = Z - (W.shift ? 0 : ft);
                Z = this._drag_start + (ft || be * 60000);
              } else {
                z = this._drag_start;
              }
            } else if (Z <= z) {
              Z = z + be * 60000;
            }
          }
          var yt = new Date(Z - 1);
          var xt = new Date(z);
          if (this._drag_mode == "move" && i.config.limit_drag_out && (+xt < +i._min_date || +Z > +i._max_date)) {
            if (+Ae.start_date < +i._min_date || +Ae.end_date > +i._max_date) {
              xt = new Date(Ae.start_date);
              Z = new Date(Ae.end_date);
            } else {
              var wt = Z - xt;
              if (+xt < +i._min_date) {
                xt = new Date(i._min_date);
                if (W._ignores && this.config.preserve_length && this._table_view) {
                  xt = new Date(i._correct_drag_start_date(xt));
                  if (he._start_correction) {
                    xt = new Date(xt.valueOf() + he._start_correction);
                  }
                  Z = new Date(xt * 1 + this._get_fictional_event_length(xt, this._drag_event._event_length, he));
                } else {
                  Z = new Date(+xt + wt);
                }
              } else {
                Z = new Date(i._max_date);
                if (W._ignores && this.config.preserve_length && this._table_view) {
                  if (he._end_correction) {
                    Z = new Date(Z.valueOf() - he._end_correction);
                  }
                  Z = new Date(Z * 1 - this._get_fictional_event_length(Z, 0, he, true));
                  xt = new Date(Z * 1 - this._get_fictional_event_length(Z, this._drag_event._event_length, he, true));
                  if (this._ignores_detected) {
                    xt = i.date.add(xt, he.x_step, he.x_unit);
                    Z = new Date(Z * 1 - this._get_fictional_event_length(Z, 0, he, true));
                    Z = i.date.add(Z, he.x_step, he.x_unit);
                  }
                } else {
                  xt = new Date(+Z - wt);
                }
              }
            }
            yt = new Date(Z - 1);
          }
          if (!this._table_view && this._dragEventBody && !i.config.all_timed && (!i._get_section_view() && W.x != this._get_event_sday({
            start_date: new Date(z),
            end_date: new Date(z)
          }) || new Date(z).getHours() < this.config.first_hour)) {
            wt = Z - xt;
            if (this._drag_mode == "move") {
              Ne = this._min_date.valueOf() + W.x * 24 * 60 * 60000;
              (xt = new Date(Ne)).setHours(this.config.first_hour);
              Z = new Date(xt.valueOf() + wt);
              yt = new Date(Z - 1);
            }
          }
          if (!this._table_view && !i.config.all_timed && (!!!i.getView() && W.x != this._get_event_sday({
            start_date: new Date(Z),
            end_date: new Date(Z)
          }) || new Date(Z).getHours() >= this.config.last_hour)) {
            wt = Z - xt;
            Ne = this._min_date.valueOf() + W.x * 24 * 60 * 60000;
            (Z = i.date.date_part(new Date(Ne))).setHours(this.config.last_hour);
            yt = new Date(Z - 1);
            if (this._drag_mode == "move") {
              xt = new Date(+Z - wt);
            }
          }
          if (this._table_view || yt.getDate() == xt.getDate() && yt.getHours() < this.config.last_hour || i._allow_dnd) {
            Ae.start_date = xt;
            Ae.end_date = new Date(Z);
            if (this.config.update_render) {
              var Dt = i._els.dhx_cal_data[0].scrollTop;
              this.update_view();
              i._els.dhx_cal_data[0].scrollTop = Dt;
            } else {
              this.updateEvent(this._drag_id);
            }
          }
          if (this._table_view) {
            this.for_rendered(this._drag_id, function (Pt) {
              Pt.className += " dhx_in_move dhx_cal_event_drag";
            });
          }
          this.callEvent("onEventDrag", [this._drag_id, this._drag_mode, T]);
        }
      } else if (i.checkEvent("onMouseMove")) {
        var Rt = this._locate_event(T.target || T.srcElement);
        this.callEvent("onMouseMove", [Rt, T]);
      }
    };
    i._on_mouse_down = function (T, W) {
      if (T.button != 2 && !this.config.readonly && !this._drag_mode) {
        var z = i._getClassName(W = W || T.target || T.srcElement).split(" ")[0];
        if (this.config.drag_event_body && z == "dhx_body" && W.parentNode && W.parentNode.className.indexOf("dhx_cal_select_menu") === -1) {
          z = "dhx_event_move";
          this._dragEventBody = true;
        }
        switch (z) {
          case "dhx_cal_event_line":
          case "dhx_cal_event_clear":
            if (this._table_view) {
              this._drag_mode = "move";
            }
            break;
          case "dhx_event_move":
          case "dhx_wa_ev_body":
            this._drag_mode = "move";
            break;
          case "dhx_event_resize":
            this._drag_mode = "resize";
            i._drag_from_start = i._getClassName(W).indexOf("dhx_event_resize_end") < 0;
            break;
          case "dhx_scale_holder":
          case "dhx_scale_holder_now":
          case "dhx_month_body":
          case "dhx_matrix_cell":
          case "dhx_marked_timespan":
            this._drag_mode = "create";
            break;
          case "":
            if (W.parentNode) {
              return i._on_mouse_down(T, W.parentNode);
            }
            break;
          default:
            if ((!i.checkEvent("onMouseDown") || i.callEvent("onMouseDown", [z, T])) && W.parentNode && W != this && z != "dhx_body") {
              return i._on_mouse_down(T, W.parentNode);
            }
            this._drag_mode = null;
            this._drag_id = null;
        }
        if (this._drag_mode) {
          var Z = this._locate_event(W);
          if (this.config["drag_" + this._drag_mode] && this.callEvent("onBeforeDrag", [Z, this._drag_mode, T])) {
            this._drag_id = Z;
            if (this._edit_id != this._drag_id || this._edit_id && this._drag_mode == "create") {
              this._close_not_saved();
            }
            if (!this._drag_mode) {
              return;
            }
            this._drag_event = i._lame_clone(this.getEvent(this._drag_id) || {});
            this._drag_pos = this._mouse_coords(T);
          } else {
            this._drag_mode = this._drag_id = 0;
          }
        }
        this._drag_start = null;
      }
    };
    i._get_private_properties = function (T) {
      var W = {};
      for (var z in T) {
        if (z.indexOf("_") === 0) {
          W[z] = true;
        }
      }
      return W;
    };
    i._clear_temporary_properties = function (T, W) {
      var z = this._get_private_properties(T);
      var Z = this._get_private_properties(W);
      for (var re in Z) {
        if (!z[re]) {
          delete W[re];
        }
      }
    };
    i._on_mouse_up = function (T) {
      if (!T || T.button != 2 || !this._mobile) {
        if (this._drag_mode && this._drag_id) {
          this._els.dhx_cal_data[0].style.cursor = "default";
          var W = this._drag_id;
          var z = this._drag_mode;
          var Z = !this._drag_pos || this._drag_pos.has_moved;
          delete this._drag_event._move_event_shift;
          var re = this.getEvent(this._drag_id);
          if (Z && (this._drag_event._dhx_changed || !this._drag_event.start_date || re.start_date.valueOf() != this._drag_event.start_date.valueOf() || re.end_date.valueOf() != this._drag_event.end_date.valueOf())) {
            var oe = this._drag_mode == "new-size";
            if (this.callEvent("onBeforeEventChanged", [re, T, oe, this._drag_event])) {
              this._drag_id = this._drag_mode = null;
              if (oe && this.config.edit_on_create) {
                this.unselect();
                this._new_event = new Date();
                if (this._table_view || this.config.details_on_create || !this.config.select || !this.isOneDayEvent(this.getEvent(W))) {
                  i.callEvent("onDragEnd", [W, z, T]);
                  return this.showLightbox(W);
                }
                this._drag_pos = true;
                this._select_id = this._edit_id = W;
              } else if (!this._new_event) {
                this.callEvent(oe ? "onEventAdded" : "onEventChanged", [W, this.getEvent(W)]);
              }
            } else if (oe) {
              this.deleteEvent(re.id, true);
            } else {
              this._drag_event._dhx_changed = false;
              this._clear_temporary_properties(re, this._drag_event);
              i._lame_copy(re, this._drag_event);
              this.updateEvent(re.id);
            }
          }
          if (this._drag_pos && (this._drag_pos.has_moved || this._drag_pos === true)) {
            this._drag_id = this._drag_mode = null;
            this.render_view_data();
          }
          i.callEvent("onDragEnd", [W, z, T]);
        }
        this._drag_id = null;
        this._drag_mode = null;
        this._drag_pos = null;
      }
    };
    i._trigger_dyn_loading = function () {
      return !!this._load_mode && !!this._load() && !(this._render_wait = true, 0);
    };
    i.update_view = function () {
      this._reset_ignores();
      this._update_nav_bar(this.config.header, this.$container.querySelector(".dhx_cal_navline"));
      var T = this[this._mode + "_view"];
      if (T) {
        T.call(this, true);
      } else {
        this._reset_scale();
      }
      if (this._trigger_dyn_loading()) {
        return true;
      }
      this.render_view_data();
    };
    i.isViewExists = function (T) {
      return !!i[T + "_view"] || !!i.date[T + "_start"] && !!i.templates[T + "_date"] && !!i.templates[T + "_scale_date"];
    };
    i._set_aria_buttons_attrs = function () {
      for (var T = ["dhx_cal_next_button", "dhx_cal_prev_button", "dhx_cal_tab", "dhx_cal_today_button"], W = 0; W < T.length; W++) {
        for (var z = this._els[T[W]], Z = 0; z && Z < z.length; Z++) {
          var re = z[Z].getAttribute("data-tab") || z[Z].getAttribute("name");
          var oe = this.locale.labels[T[W]];
          if (re) {
            oe = this.locale.labels[re + "_tab"] || this.locale.labels[re] || oe;
          }
          if (T[W] == "dhx_cal_next_button") {
            oe = this.locale.labels.next;
          } else if (T[W] == "dhx_cal_prev_button") {
            oe = this.locale.labels.prev;
          }
          this._waiAria.headerButtonsAttributes(z[Z], oe || "");
        }
      }
    };
    i.updateView = function (T, W) {
      if (!this.$container) {
        throw new Error("The scheduler is not initialized. \n **scheduler.updateView** or **scheduler.setCurrentView** can be called only after **scheduler.init**");
      }
      T = T || this._date;
      var z = this._obj;
      var Z = "dhx_scheduler_" + this._mode;
      var re = "dhx_scheduler_" + (W = W || this._mode);
      if (this._mode && z.className.indexOf(Z) != -1) {
        z.className = z.className.replace(Z, re);
      } else {
        z.className += " " + re;
      }
      var oe;
      var _e = this._mode == W && !!this.config.preserve_scroll && this._els.dhx_cal_data[0].scrollTop;
      if (this._els.dhx_multi_day && this._els.dhx_multi_day[0]) {
        oe = this._els.dhx_multi_day[0].scrollTop;
      }
      if (this[this._mode + "_view"] && W && this._mode != W) {
        this[this._mode + "_view"](false);
      }
      this._close_not_saved();
      if (this._els.dhx_multi_day) {
        this._els.dhx_multi_day[0].parentNode.removeChild(this._els.dhx_multi_day[0]);
        this._els.dhx_multi_day = null;
      }
      this._mode = W;
      this._date = T;
      this._table_view = this._mode == "month";
      this._dy_shift = 0;
      this.update_view();
      this._set_aria_buttons_attrs();
      var he = this._els.dhx_cal_tab;
      if (he) {
        for (var be = 0; be < he.length; be++) {
          var Ae = he[be];
          if (Ae.getAttribute("data-tab") == this._mode || Ae.getAttribute("name") == this._mode + "_tab") {
            Ae.classList.add("active");
            this._waiAria.headerToggleState(Ae, true);
          } else {
            Ae.classList.remove("active");
            this._waiAria.headerToggleState(Ae, false);
          }
        }
      }
      if (typeof _e == "number") {
        this._els.dhx_cal_data[0].scrollTop = _e;
      }
      if (typeof oe == "number" && this._els.dhx_multi_day && this._els.dhx_multi_day[0]) {
        this._els.dhx_multi_day[0].scrollTop = oe;
      }
    };
    i.setCurrentView = function (T, W) {
      if (this.callEvent("onBeforeViewChange", [this._mode, this._date, W || this._mode, T || this._date])) {
        this.updateView(T, W);
        this.callEvent("onViewChange", [this._mode, this._date]);
      }
    };
    i.render = function (T, W) {
      i.setCurrentView(T, W);
    };
    i._render_x_header = function (T, W, z, Z, re) {
      re = re || 0;
      var oe = document.createElement("div");
      oe.className = "dhx_scale_bar";
      if (this.templates[this._mode + "_scalex_class"]) {
        oe.className += " " + this.templates[this._mode + "_scalex_class"](z);
      }
      var _e = this._cols[T] - 1;
      if (this._mode == "month" && T === 0 && this.config.left_border) {
        oe.className += " dhx_scale_bar_border";
        W += 1;
      }
      this.set_xy(oe, _e, this.xy.scale_height - 2, W, re);
      var he = this.templates[this._mode + "_scale_date"](z, this._mode);
      oe.innerHTML = he;
      this._waiAria.dayHeaderAttr(oe, he);
      Z.appendChild(oe);
    };
    i._get_columns_num = function (T, W) {
      var z = 7;
      if (!i._table_view) {
        var Z = i.date["get_" + i._mode + "_end"];
        if (Z) {
          W = Z(T);
        }
        z = Math.round((W.valueOf() - T.valueOf()) / 86400000);
      }
      return z;
    };
    i._get_timeunit_start = function () {
      return this.date[this._mode + "_start"](new Date(this._date.valueOf()));
    };
    i._get_view_end = function () {
      var T = this._get_timeunit_start();
      var W = i.date.add(T, 1, this._mode);
      if (!i._table_view) {
        var z = i.date["get_" + i._mode + "_end"];
        if (z) {
          W = z(T);
        }
      }
      return W;
    };
    i._calc_scale_sizes = function (T, W, z) {
      var Z = this.config.rtl;
      var re = T;
      var oe = this._get_columns_num(W, z);
      this._process_ignores(W, oe, "day", 1);
      for (var _e = oe - this._ignores_detected, he = 0; he < oe; he++) {
        if (this._ignores[he]) {
          this._cols[he] = 0;
          _e++;
        } else {
          this._cols[he] = Math.floor(re / (_e - he));
        }
        re -= this._cols[he];
        this._colsS[he] = (this._cols[he - 1] || 0) + (this._colsS[he - 1] || (this._table_view ? 0 : (Z ? this.xy.scroll_width : this.xy.scale_width) + 2));
      }
      this._colsS.col_length = oe;
      this._colsS[oe] = this._cols[oe - 1] + this._colsS[oe - 1] || 0;
    };
    i._set_scale_col_size = function (T, W, z) {
      var Z = this.config;
      this.set_xy(T, W - 1, Z.hour_size_px * (Z.last_hour - Z.first_hour), z + this.xy.scale_width + 1, 0);
    };
    i._render_scales = function (T, W) {
      var z = new Date(i._min_date);
      var Z = new Date(i._max_date);
      var re = this.date.date_part(i._currentDate());
      var oe = parseInt(T.style.width, 10);
      var _e = new Date(this._min_date);
      var he = this._get_columns_num(z, Z);
      this._calc_scale_sizes(oe, z, Z);
      var be = 0;
      T.innerHTML = "";
      for (var Ae = 0; Ae < he; Ae++) {
        if (!this._ignores[Ae]) {
          this._render_x_header(Ae, be, _e, T);
        }
        if (!this._table_view) {
          var He = document.createElement("div");
          var Ne = "dhx_scale_holder";
          if (_e.valueOf() == re.valueOf()) {
            Ne = "dhx_scale_holder_now";
          }
          He.setAttribute("data-column-index", Ae);
          if (this._ignores_detected && this._ignores[Ae]) {
            Ne += " dhx_scale_ignore";
          }
          He.className = Ne + " " + this.templates.week_date_class(_e, re);
          this._waiAria.dayColumnAttr(He, _e);
          this._set_scale_col_size(He, this._cols[Ae], be);
          W.appendChild(He);
          this.callEvent("onScaleAdd", [He, _e]);
        }
        be += this._cols[Ae];
        _e = this.date.add(_e, 1, "day");
        _e = this.date.day_start(_e);
      }
    };
    i._getNavDateElement = function () {
      return this.$container.querySelector(".dhx_cal_date");
    };
    i._reset_scale = function () {
      if (this.templates[this._mode + "_date"]) {
        var Z;
        var re;
        var T = this._els.dhx_cal_header[0];
        var W = this._els.dhx_cal_data[0];
        var z = this.config;
        T.innerHTML = "";
        W.innerHTML = "";
        W.className = "dhx_cal_data" + (z.readonly || !z.drag_resize ? " dhx_resize_denied" : "") + (z.readonly || !z.drag_move ? " dhx_move_denied" : "");
        this._scales = {};
        this._cols = [];
        this._colsS = {
          height: 0
        };
        this._dy_shift = 0;
        this.set_sizes();
        var _e = this._get_timeunit_start();
        var he = i._get_view_end();
        Z = re = this._table_view ? i.date.week_start(_e) : _e;
        this._min_date = Z;
        var be = this.templates[this._mode + "_date"](_e, he, this._mode);
        var Ae = this._getNavDateElement();
        if (Ae) {
          Ae.innerHTML = be;
          this._waiAria.navBarDateAttr(Ae, be);
        }
        this._max_date = he;
        i._render_scales(T, W);
        if (this._table_view) {
          this._reset_month_scale(W, _e, re);
        } else {
          this._reset_hours_scale(W, _e, re);
          if (z.multi_day) {
            if (this._els.dhx_multi_day) {
              this._els.dhx_multi_day[0].parentNode.removeChild(this._els.dhx_multi_day[0]);
              this._els.dhx_multi_day = null;
            }
            var He = this._els.dhx_cal_navline[0].offsetHeight + this._els.dhx_cal_header[0].offsetHeight + 1;
            var Ne = document.createElement("div");
            Ne.className = "dhx_multi_day";
            Ne.style.visibility = "hidden";
            var Fe = Math.max(this._colsS[this._colsS.col_length] + (z.rtl ? this.xy.scale_width : this.xy.scroll_width) - 2, 0);
            this.set_xy(Ne, Fe, 0, 0, He);
            W.parentNode.insertBefore(Ne, W);
            var Oe = Ne.cloneNode(true);
            Oe.className = "dhx_multi_day_icon";
            Oe.style.visibility = "hidden";
            this.set_xy(Oe, this.xy.scale_width, 0, 0, He);
            Ne.appendChild(Oe);
            this._els.dhx_multi_day = [Ne, Oe];
            i.event(this._els.dhx_multi_day[0], "click", this._click.dhx_cal_data);
          }
        }
      }
    };
    i._reset_hours_scale = function (T, W, z) {
      var Z = document.createElement("div");
      Z.className = "dhx_scale_holder";
      for (var re = new Date(1980, 1, 1, this.config.first_hour, 0, 0), oe = this.config.first_hour * 1; oe < this.config.last_hour; oe++) {
        var _e = document.createElement("div");
        _e.className = "dhx_scale_hour";
        _e.style.height = this.config.hour_size_px + "px";
        var he = this.xy.scale_width;
        if (this.config.left_border) {
          _e.className += " dhx_scale_hour_border";
        }
        _e.style.width = he + "px";
        var be = i.templates.hour_scale(re);
        _e.innerHTML = be;
        this._waiAria.hourScaleAttr(_e, be);
        Z.appendChild(_e);
        re = this.date.add(re, 1, "hour");
      }
      T.appendChild(Z);
      if (this.config.scroll_hour) {
        T.scrollTop = this.config.hour_size_px * (this.config.scroll_hour - this.config.first_hour);
      }
    };
    i._currentDate = function () {
      if (i.config.now_date) {
        return new Date(i.config.now_date);
      } else {
        return new Date();
      }
    };
    i._reset_ignores = function () {
      this._ignores = {};
      this._ignores_detected = 0;
    };
    i._process_ignores = function (T, W, z, Z, re) {
      this._reset_ignores();
      var oe = i["ignore_" + this._mode];
      if (oe) {
        for (var _e = new Date(T), he = 0; he < W; he++) {
          if (oe(_e)) {
            this._ignores_detected += 1;
            this._ignores[he] = true;
            if (re) {
              W++;
            }
          }
          _e = i.date.add(_e, Z, z);
          if (i.date[z + "_start"]) {
            _e = i.date[z + "_start"](_e);
          }
        }
      }
    };
    i._render_month_scale = function (T, W, z, Z) {
      var re = i.date.add(W, 1, "month");
      var oe = new Date(z);
      var _e = i._currentDate();
      this.date.date_part(_e);
      this.date.date_part(z);
      Z = Z || Math.ceil(Math.round((re.valueOf() - z.valueOf()) / 86400000) / 7);
      for (var he = [], be = 0; be <= 7; be++) {
        var Ae = (this._cols[be] || 0) - 1;
        if (be === 0 && this.config.left_border) {
          Ae -= 1;
        }
        he[be] = Ae + "px";
      }
      function He(Ft) {
        var Lt = i._colsS.height;
        if (i._colsS.heights[Ft + 1] !== undefined) {
          Lt = i._colsS.heights[Ft + 1] - (i._colsS.heights[Ft] || 0);
        }
        return Lt;
      }
      var Ne = 0;
      var Ve = document.createElement("table");
      Ve.setAttribute("cellpadding", "0");
      Ve.setAttribute("cellspacing", "0");
      var Se = document.createElement("tbody");
      Ve.appendChild(Se);
      var Fe = [];
      for (be = 0; be < Z; be++) {
        var Oe = document.createElement("tr");
        Se.appendChild(Oe);
        for (var at = Math.max(He(be) - i.xy.month_head_height, 0), ht = 0; ht < 7; ht++) {
          var lt = document.createElement("td");
          Oe.appendChild(lt);
          var mt = "";
          if (z < W) {
            mt = "dhx_before";
          } else if (z >= re) {
            mt = "dhx_after";
          } else if (z.valueOf() == _e.valueOf()) {
            mt = "dhx_now";
          }
          if (this._ignores_detected && this._ignores[ht]) {
            mt += " dhx_scale_ignore";
          }
          lt.className = mt + " " + this.templates.month_date_class(z, _e);
          lt.setAttribute("data-cell-date", i.templates.format_date(z));
          var ft = "dhx_month_body";
          var yt = "dhx_month_head";
          if (ht === 0 && this.config.left_border) {
            ft += " dhx_month_body_border";
            yt += " dhx_month_head_border";
          }
          if (this._ignores_detected && this._ignores[ht]) {
            lt.appendChild(document.createElement("div"));
            lt.appendChild(document.createElement("div"));
          } else {
            this._waiAria.monthCellAttr(lt, z);
            var xt = document.createElement("div");
            xt.className = yt;
            xt.innerHTML = this.templates.month_day(z);
            lt.appendChild(xt);
            var wt = document.createElement("div");
            wt.className = ft;
            wt.style.height = at + "px";
            wt.style.width = he[ht];
            lt.appendChild(wt);
          }
          Fe.push(z);
          var Dt = z.getDate();
          if ((z = this.date.add(z, 1, "day")).getDate() - Dt > 1) {
            z = new Date(z.getFullYear(), z.getMonth(), Dt + 1, 12, 0);
          }
        }
        i._colsS.heights[be] = Ne;
        Ne += He(be);
      }
      this._min_date = oe;
      this._max_date = z;
      T.innerHTML = "";
      T.appendChild(Ve);
      this._scales = {};
      var Rt = T.getElementsByTagName("div");
      for (be = 0; be < Fe.length; be++) {
        var Pt = Fe[be];
        this._scales[+Pt] = T = Rt[be * 2 + 1];
      }
      for (be = 0; be < Fe.length; be++) {
        this.callEvent("onScaleAdd", [this._scales[+(Pt = Fe[be])], Pt]);
      }
      return this._max_date;
    };
    i._reset_month_scale = function (T, W, z, Z) {
      var re = i.date.add(W, 1, "month");
      var oe = i._currentDate();
      this.date.date_part(oe);
      this.date.date_part(z);
      Z = Z || Math.ceil(Math.round((re.valueOf() - z.valueOf()) / 86400000) / 7);
      var _e = Math.floor(T.clientHeight / Z) - this.xy.month_head_height;
      this._colsS.height = _e + this.xy.month_head_height;
      this._colsS.heights = [];
      return i._render_month_scale(T, W, z, Z);
    };
    i.getView = function (T) {
      T ||= i.getState().mode;
      if (i.matrix && i.matrix[T]) {
        return i.matrix[T];
      } else if (i._props && i._props[T]) {
        return i._props[T];
      } else {
        return null;
      }
    };
    i.getLabel = function (T, W) {
      for (var z = this.config.lightbox.sections, Z = 0; Z < z.length; Z++) {
        if (z[Z].map_to == T) {
          for (var re = z[Z].options, oe = 0; oe < re.length; oe++) {
            if (re[oe].key == W) {
              return re[oe].label;
            }
          }
        }
      }
      return "";
    };
    i.updateCollection = function (T, W) {
      var z = i.serverList(T);
      return !!z && (z.splice(0, z.length), z.push.apply(z, W || []), i.callEvent("onOptionsLoad", []), i.resetLightbox(), i.hideCover(), true);
    };
    i._lame_clone = function (T, W) {
      var z;
      var Z;
      var re;
      W = W || [];
      z = 0;
      for (; z < W.length; z += 2) {
        if (T === W[z]) {
          return W[z + 1];
        }
      }
      if (T && S(T) == "object") {
        re = Object.create(T);
        Z = [Array, Date, Number, String, Boolean];
        z = 0;
        for (; z < Z.length; z++) {
          if (T instanceof Z[z]) {
            re = z ? new Z[z](T) : new Z[z]();
          }
        }
        W.push(T, re);
        for (z in T) {
          if (Object.prototype.hasOwnProperty.apply(T, [z])) {
            re[z] = i._lame_clone(T[z], W);
          }
        }
      }
      return re || T;
    };
    i._lame_copy = function (T, W) {
      for (var z in W) {
        if (W.hasOwnProperty(z)) {
          T[z] = W[z];
        }
      }
      return T;
    };
    i._get_date_from_pos = function (T) {
      var W = this._min_date.valueOf() + (T.y * this.config.time_step + (this._table_view ? 0 : T.x) * 24 * 60) * 60000;
      return new Date(this._correct_shift(W));
    };
    i.getActionData = function (T) {
      var W = this._mouse_coords(T);
      return {
        date: this._get_date_from_pos(W),
        section: W.section
      };
    };
    i._focus = function (T, W) {
      if (T && T.focus) {
        if (this._mobile) {
          window.setTimeout(function () {
            T.focus();
          }, 10);
        } else {
          try {
            if (W && T.select && T.offsetWidth) {
              T.select();
            }
            T.focus();
          } catch {}
        }
      }
    };
    i._get_real_event_length = function (T, W, z) {
      var Z;
      var re = W - T;
      var oe = z._start_correction + z._end_correction || 0;
      var _e = this["ignore_" + this._mode];
      var he = 0;
      if (z.render) {
        he = this._get_date_index(z, T);
        Z = this._get_date_index(z, W);
      } else {
        Z = Math.round(re / 60 / 60 / 1000 / 24);
      }
      for (var be = true; he < Z;) {
        var Ae = i.date.add(W, -z.x_step, z.x_unit);
        if (_e && _e(W) && (!be || be && _e(Ae))) {
          re -= W - Ae;
        } else {
          be = false;
          re -= oe;
        }
        W = Ae;
        Z--;
      }
      return re;
    };
    i._get_fictional_event_length = function (T, W, z, Z) {
      var re = new Date(T);
      var oe = Z ? -1 : 1;
      if (z._start_correction || z._end_correction) {
        var _e;
        _e = Z ? re.getHours() * 60 + re.getMinutes() - (z.first_hour || 0) * 60 : (z.last_hour || 0) * 60 - (re.getHours() * 60 + re.getMinutes());
        var he = (z.last_hour - z.first_hour) * 60;
        var be = Math.ceil((W / 60000 - _e) / he);
        if (be < 0) {
          be = 0;
        }
        W += be * (1440 - he) * 60 * 1000;
      }
      var Ae;
      var He = new Date(T * 1 + W * oe);
      var Ne = this["ignore_" + this._mode];
      var Ve = 0;
      for (z.render ? (Ve = this._get_date_index(z, re), Ae = this._get_date_index(z, He)) : Ae = Math.round(W / 60 / 60 / 1000 / 24); Ve * oe <= Ae * oe;) {
        var Se = i.date.add(re, z.x_step * oe, z.x_unit);
        if (Ne && Ne(re)) {
          W += (Se - re) * oe;
          Ae += oe;
        }
        re = Se;
        Ve += oe;
      }
      return W;
    };
    i._get_section_view = function () {
      return this.getView();
    };
    i._get_section_property = function () {
      if (this.matrix && this.matrix[this._mode]) {
        return this.matrix[this._mode].y_property;
      } else if (this._props && this._props[this._mode]) {
        return this._props[this._mode].map_to;
      } else {
        return null;
      }
    };
    i._is_initialized = function () {
      var T = this.getState();
      return this._obj && T.date && T.mode;
    };
    i._is_lightbox_open = function () {
      return this.getState().lightbox_id != null;
    };
  })(j);
  (function (i) {
    (function () {
      var o = new RegExp("<(?:.|\n)*?>", "gm");
      var c = new RegExp(" +", "gm");
      function h(W) {
        return (W + "").replace(o, " ").replace(c, " ");
      }
      var D = new RegExp("'", "gm");
      function V(W) {
        return (W + "").replace(D, "&#39;");
      }
      i._waiAria = {
        getAttributeString: function (W) {
          var z = [" "];
          for (var Z in W) {
            if (typeof W[Z] != "function" && l(W[Z]) != "object") {
              var re = V(h(W[Z]));
              z.push(Z + "='" + re + "'");
            }
          }
          z.push(" ");
          return z.join(" ");
        },
        setAttributes: function (W, z) {
          for (var Z in z) {
            W.setAttribute(Z, h(z[Z]));
          }
          return W;
        },
        labelAttr: function (W, z) {
          return this.setAttributes(W, {
            "aria-label": z
          });
        },
        label: function (W) {
          return i._waiAria.getAttributeString({
            "aria-label": W
          });
        },
        hourScaleAttr: function (W, z) {
          this.labelAttr(W, z);
        },
        monthCellAttr: function (W, z) {
          this.labelAttr(W, i.templates.day_date(z));
        },
        navBarDateAttr: function (W, z) {
          this.labelAttr(W, z);
        },
        dayHeaderAttr: function (W, z) {
          this.labelAttr(W, z);
        },
        dayColumnAttr: function (W, z) {
          this.dayHeaderAttr(W, i.templates.day_date(z));
        },
        headerButtonsAttributes: function (W, z) {
          return this.setAttributes(W, {
            role: "button",
            "aria-label": z
          });
        },
        headerToggleState: function (W, z) {
          return this.setAttributes(W, {
            "aria-pressed": z ? "true" : "false"
          });
        },
        getHeaderCellAttr: function (W) {
          return i._waiAria.getAttributeString({
            "aria-label": W
          });
        },
        eventAttr: function (W, z) {
          this._eventCommonAttr(W, z);
        },
        _eventCommonAttr: function (W, z) {
          z.setAttribute("aria-label", h(i.templates.event_text(W.start_date, W.end_date, W)));
          if (i.config.readonly) {
            z.setAttribute("aria-readonly", true);
          }
          if (W.$dataprocessor_class) {
            z.setAttribute("aria-busy", true);
          }
          z.setAttribute("aria-selected", i.getState().select_id == W.id ? "true" : "false");
        },
        setEventBarAttr: function (W, z) {
          this._eventCommonAttr(W, z);
        },
        _getAttributes: function (W, z) {
          var Z = {
            setAttribute: function (re, oe) {
              this[re] = oe;
            }
          };
          W.apply(this, [z, Z]);
          return Z;
        },
        eventBarAttrString: function (W) {
          return this.getAttributeString(this._getAttributes(this.setEventBarAttr, W));
        },
        agendaHeadAttrString: function () {
          return this.getAttributeString({
            role: "row"
          });
        },
        agendaHeadDateString: function (W) {
          return this.getAttributeString({
            role: "columnheader",
            "aria-label": W
          });
        },
        agendaHeadDescriptionString: function (W) {
          return this.agendaHeadDateString(W);
        },
        agendaDataAttrString: function () {
          return this.getAttributeString({
            role: "grid"
          });
        },
        agendaEventAttrString: function (W) {
          var z = this._getAttributes(this._eventCommonAttr, W);
          z.role = "row";
          return this.getAttributeString(z);
        },
        agendaDetailsBtnString: function () {
          return this.getAttributeString({
            role: "button",
            "aria-label": i.locale.labels.icon_details
          });
        },
        gridAttrString: function () {
          return this.getAttributeString({
            role: "grid"
          });
        },
        gridRowAttrString: function (W) {
          return this.agendaEventAttrString(W);
        },
        gridCellAttrString: function (W, z, Z) {
          return this.getAttributeString({
            role: "gridcell",
            "aria-label": [z.label === undefined ? z.id : z.label, ": ", Z]
          });
        },
        mapAttrString: function () {
          return this.gridAttrString();
        },
        mapRowAttrString: function (W) {
          return this.gridRowAttrString(W);
        },
        mapDetailsBtnString: function () {
          return this.agendaDetailsBtnString();
        },
        minicalHeader: function (W, z) {
          this.setAttributes(W, {
            id: z + "",
            "aria-live": "assertice",
            "aria-atomic": "true"
          });
        },
        minicalGrid: function (W, z) {
          this.setAttributes(W, {
            "aria-labelledby": z + "",
            role: "grid"
          });
        },
        minicalRow: function (W) {
          this.setAttributes(W, {
            role: "row"
          });
        },
        minicalDayCell: function (W, z) {
          var Z = z.valueOf() < i._max_date.valueOf() && z.valueOf() >= i._min_date.valueOf();
          this.setAttributes(W, {
            role: "gridcell",
            "aria-label": i.templates.day_date(z),
            "aria-selected": Z ? "true" : "false"
          });
        },
        minicalHeadCell: function (W) {
          this.setAttributes(W, {
            role: "columnheader"
          });
        },
        weekAgendaDayCell: function (W, z) {
          var Z = W.querySelector(".dhx_wa_scale_bar");
          var re = W.querySelector(".dhx_wa_day_data");
          var oe = i.uid() + "";
          this.setAttributes(Z, {
            id: oe
          });
          this.setAttributes(re, {
            "aria-labelledby": oe
          });
        },
        weekAgendaEvent: function (W, z) {
          this.eventAttr(z, W);
        },
        lightboxHiddenAttr: function (W) {
          W.setAttribute("aria-hidden", "true");
        },
        lightboxVisibleAttr: function (W) {
          W.setAttribute("aria-hidden", "false");
        },
        lightboxSectionButtonAttrString: function (W) {
          return this.getAttributeString({
            role: "button",
            "aria-label": W,
            tabindex: "0"
          });
        },
        yearHeader: function (W, z) {
          this.setAttributes(W, {
            id: z + ""
          });
        },
        yearGrid: function (W, z) {
          this.minicalGrid(W, z);
        },
        yearHeadCell: function (W) {
          return this.minicalHeadCell(W);
        },
        yearRow: function (W) {
          return this.minicalRow(W);
        },
        yearDayCell: function (W) {
          this.setAttributes(W, {
            role: "gridcell"
          });
        },
        lightboxAttr: function (W) {
          W.setAttribute("role", "dialog");
          W.setAttribute("aria-hidden", "true");
          W.firstChild.setAttribute("role", "heading");
        },
        lightboxButtonAttrString: function (W) {
          return this.getAttributeString({
            role: "button",
            "aria-label": i.locale.labels[W],
            tabindex: "0"
          });
        },
        eventMenuAttrString: function (W) {
          return this.getAttributeString({
            role: "button",
            "aria-label": i.locale.labels[W]
          });
        },
        lightboxHeader: function (W, z) {
          W.setAttribute("aria-label", z);
        },
        lightboxSelectAttrString: function (W) {
          var z = "";
          switch (W) {
            case "%Y":
              z = i.locale.labels.year;
              break;
            case "%m":
              z = i.locale.labels.month;
              break;
            case "%d":
              z = i.locale.labels.day;
              break;
            case "%H:%i":
              z = i.locale.labels.hour + " " + i.locale.labels.minute;
          }
          return i._waiAria.getAttributeString({
            "aria-label": z
          });
        },
        messageButtonAttrString: function (W) {
          return "tabindex='0' role='button' aria-label='" + W + "'";
        },
        messageInfoAttr: function (W) {
          W.setAttribute("role", "alert");
        },
        messageModalAttr: function (W, z) {
          W.setAttribute("role", "dialog");
          if (z) {
            W.setAttribute("aria-labelledby", z);
          }
        },
        quickInfoAttr: function (W) {
          W.setAttribute("role", "dialog");
        },
        quickInfoHeaderAttrString: function () {
          return " role='heading' ";
        },
        quickInfoHeader: function (W, z) {
          W.setAttribute("aria-label", z);
        },
        quickInfoButtonAttrString: function (W) {
          return i._waiAria.getAttributeString({
            role: "button",
            "aria-label": W,
            tabindex: "0"
          });
        },
        tooltipAttr: function (W) {
          W.setAttribute("role", "tooltip");
        },
        tooltipVisibleAttr: function (W) {
          W.setAttribute("aria-hidden", "false");
        },
        tooltipHiddenAttr: function (W) {
          W.setAttribute("aria-hidden", "true");
        }
      };
      for (var T in i._waiAria) {
        i._waiAria[T] = function (W) {
          return function () {
            if (i.config.wai_aria_attributes) {
              return W.apply(this, arguments);
            } else {
              return " ";
            }
          };
        }(i._waiAria[T]);
      }
    })();
  })(j);
  j.utils = ee;
  j.$domHelpers = F;
  j.utils.dom = F;
  j.uid = ee.uid;
  j.mixin = ee.mixin;
  j.defined = ee.defined;
  j.assert = function (i) {
    return function (o, c) {
      if (!o) {
        if (i.config.show_errors && i.callEvent("onError", [c]) !== false) {
          if (i.message) {
            i.message({
              type: "error",
              text: c,
              expire: -1
            });
          } else {
            console.log(c);
          }
        }
      }
    };
  }(j);
  j.copy = ee.copy;
  j._getFocusableNodes = F.getFocusableNodes;
  j._getClassName = F.getClassName;
  j._locate_css = F.locateCss;
  var a = function (t) {
    var j = "data-dhxbox";
    var a = null;
    function v(he, be) {
      var Ae = he.callback;
      re.hide(he.box);
      a = he.box = null;
      if (Ae) {
        Ae(be);
      }
    }
    function _(he) {
      if (a) {
        var be = he.which || he.keyCode;
        var Ae = false;
        if (oe.keyboard) {
          if (be == 13 || be == 32) {
            var He = he.target || he.srcElement;
            if (F.getClassName(He).indexOf("scheduler_popup_button") > -1 && He.click) {
              He.click();
            } else {
              v(a, true);
              Ae = true;
            }
          }
          if (be == 27) {
            v(a, false);
            Ae = true;
          }
        }
        if (Ae) {
          if (he.preventDefault) {
            he.preventDefault();
          }
          return !(he.cancelBubble = true);
        } else {
          return undefined;
        }
      }
    }
    function i(he) {
      if (!i.cover) {
        i.cover = document.createElement("div");
        t.event(i.cover, "keydown", _);
        i.cover.className = "dhx_modal_cover";
        document.body.appendChild(i.cover);
      }
      i.cover.style.display = he ? "inline-block" : "none";
    }
    function o(he, be, Ae) {
      var He = t._waiAria.messageButtonAttrString(he);
      var Ne = (be || "").toLowerCase().replace(/ /g, "_");
      var Ve = `scheduler_${Ne}_button dhtmlx_${Ne}_button`;
      return `<div ${He} class='scheduler_popup_button dhtmlx_popup_button ${Ve}' data-result='${Ae}' result='${Ae}' ><div>${he}</div></div>`;
    }
    function c(he) {
      if (!oe.area) {
        oe.area = document.createElement("div");
        oe.area.className = "scheduler_message_area dhtmlx_message_area";
        oe.area.style[oe.position] = "5px";
        document.body.appendChild(oe.area);
      }
      oe.hide(he.id);
      var be = document.createElement("div");
      be.innerHTML = "<div>" + he.text + "</div>";
      be.className = "scheduler-info dhtmlx-info scheduler-" + he.type + " dhtmlx-" + he.type;
      t.event(be, "click", function () {
        oe.hide(he.id);
        he = null;
      });
      t._waiAria.messageInfoAttr(be);
      if (oe.position == "bottom" && oe.area.firstChild) {
        oe.area.insertBefore(be, oe.area.firstChild);
      } else {
        oe.area.appendChild(be);
      }
      if (he.expire > 0) {
        oe.timers[he.id] = window.setTimeout(function () {
          if (oe) {
            oe.hide(he.id);
          }
        }, he.expire);
      }
      oe.pull[he.id] = be;
      be = null;
      return he.id;
    }
    function h() {
      for (var he = [].slice.apply(arguments, [0]), be = 0; be < he.length; be++) {
        if (he[be]) {
          return he[be];
        }
      }
    }
    function D(he, be, Ae) {
      var He = he.tagName ? he : function (Se, Fe, Oe) {
        var at = document.createElement("div");
        var ht = ee.uid();
        t._waiAria.messageModalAttr(at, ht);
        at.className = " scheduler_modal_box dhtmlx_modal_box scheduler-" + Se.type + " dhtmlx-" + Se.type;
        at.setAttribute(j, 1);
        var lt = "";
        if (Se.width) {
          at.style.width = Se.width;
        }
        if (Se.height) {
          at.style.height = Se.height;
        }
        if (Se.title) {
          lt += "<div class=\"scheduler_popup_title dhtmlx_popup_title\">" + Se.title + "</div>";
        }
        lt += "<div class=\"scheduler_popup_text dhtmlx_popup_text\" id=\"" + ht + "\"><span>" + (Se.content ? "" : Se.text) + "</span></div><div  class=\"scheduler_popup_controls dhtmlx_popup_controls\">";
        if (Fe) {
          lt += o(h(Se.ok, t.locale.labels.message_ok, "OK"), "ok", true);
        }
        if (Oe) {
          lt += o(h(Se.cancel, t.locale.labels.message_cancel, "Cancel"), "cancel", false);
        }
        if (Se.buttons) {
          for (var mt = 0; mt < Se.buttons.length; mt++) {
            var ft = Se.buttons[mt];
            if (qe(ft) == "object") {
              lt += o(ft.label, ft.css || "scheduler_" + ft.label.toLowerCase() + "_button dhtmlx_" + ft.label.toLowerCase() + "_button", ft.value || mt);
            } else {
              lt += o(ft, ft, mt);
            }
          }
        }
        at.innerHTML = lt += "</div>";
        if (Se.content) {
          var yt = Se.content;
          if (typeof yt == "string") {
            yt = document.getElementById(yt);
          }
          if (yt.style.display == "none") {
            yt.style.display = "";
          }
          at.childNodes[Se.title ? 1 : 0].appendChild(yt);
        }
        t.event(at, "click", function (xt) {
          var wt = xt.target || xt.srcElement;
          if (!wt.className) {
            wt = wt.parentNode;
          }
          if (F.closest(wt, ".scheduler_popup_button")) {
            var Dt = wt.getAttribute("data-result");
            v(Se, Dt = Dt == "true" || Dt != "false" && Dt);
          }
        });
        Se.box = at;
        if (Fe || Oe) {
          a = Se;
        }
        return at;
      }(he, be, Ae);
      if (!he.hidden) {
        i(true);
      }
      document.body.appendChild(He);
      var Ne = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - He.offsetWidth) / 2));
      var Ve = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - He.offsetHeight) / 2));
      He.style.top = he.position == "top" ? "-3px" : Ve + "px";
      He.style.left = Ne + "px";
      t.event(He, "keydown", _);
      re.focus(He);
      if (he.hidden) {
        re.hide(He);
      }
      t.callEvent("onMessagePopup", [He]);
      return He;
    }
    function V(he) {
      return D(he, true, false);
    }
    function T(he) {
      return D(he, true, true);
    }
    function W(he) {
      return D(he);
    }
    function z(he, be, Ae) {
      if (qe(he) != "object") {
        if (typeof be == "function") {
          Ae = be;
          be = "";
        }
        he = {
          text: he,
          type: be,
          callback: Ae
        };
      }
      return he;
    }
    function Z(he, be, Ae, He) {
      if (qe(he) != "object") {
        he = {
          text: he,
          type: be,
          expire: Ae,
          id: He
        };
      }
      he.id = he.id || ee.uid();
      he.expire = he.expire || oe.expire;
      return he;
    }
    t.event(document, "keydown", _, true);
    function re() {
      var he = z.apply(this, arguments);
      he.type = he.type || "alert";
      return W(he);
    }
    re.hide = function (he) {
      for (; he && he.getAttribute && !he.getAttribute(j);) {
        he = he.parentNode;
      }
      if (he) {
        he.parentNode.removeChild(he);
        i(false);
        t.callEvent("onAfterMessagePopup", [he]);
      }
    };
    re.focus = function (he) {
      setTimeout(function () {
        var be = F.getFocusableNodes(he);
        if (be.length && be[0].focus) {
          be[0].focus();
        }
      }, 1);
    };
    function oe(he, be, Ae, He) {
      (he = Z.apply(this, arguments)).type = he.type || "info";
      switch (he.type.split("-")[0]) {
        case "alert":
          return V(he);
        case "confirm":
          return T(he);
        case "modalbox":
          return W(he);
        default:
          return c(he);
      }
    }
    oe.seed = new Date().valueOf();
    oe.uid = ee.uid;
    oe.expire = 4000;
    oe.keyboard = true;
    oe.position = "top";
    oe.pull = {};
    oe.timers = {};
    oe.hideAll = function () {
      for (var he in oe.pull) {
        oe.hide(he);
      }
    };
    oe.hide = function (he) {
      var be = oe.pull[he];
      if (be && be.parentNode) {
        window.setTimeout(function () {
          be.parentNode.removeChild(be);
          be = null;
        }, 2000);
        be.className += " hidden";
        if (oe.timers[he]) {
          window.clearTimeout(oe.timers[he]);
        }
        delete oe.pull[he];
      }
    };
    var _e = [];
    t.attachEvent("onMessagePopup", function (he) {
      _e.push(he);
    });
    t.attachEvent("onAfterMessagePopup", function (he) {
      for (var be = 0; be < _e.length; be++) {
        if (_e[be] === he) {
          _e.splice(be, 1);
          be--;
        }
      }
    });
    t.attachEvent("onDestroy", function () {
      if (i.cover && i.cover.parentNode) {
        i.cover.parentNode.removeChild(i.cover);
      }
      for (var he = 0; he < _e.length; he++) {
        if (_e[he].parentNode) {
          _e[he].parentNode.removeChild(_e[he]);
        }
      }
      _e = null;
      if (oe.area && oe.area.parentNode) {
        oe.area.parentNode.removeChild(oe.area);
      }
      oe = null;
    });
    return {
      alert: function () {
        var he = z.apply(this, arguments);
        he.type = he.type || "confirm";
        return V(he);
      },
      confirm: function () {
        var he = z.apply(this, arguments);
        he.type = he.type || "alert";
        return T(he);
      },
      message: oe,
      modalbox: re
    };
  }(j);
  j.utils.mixin(j, a);
  j.env = j.$env = Y;
  j.Promise = ne;
  (function (i) {
    i.destructor = function () {
      i.callEvent("onDestroy", []);
      this.clearAll();
      if (this.$container) {
        this.$container.innerHTML = "";
      }
      if (this._eventRemoveAll) {
        this._eventRemoveAll();
      }
      if (this.resetLightbox) {
        this.resetLightbox();
      }
      if (this._dp && this._dp.destructor) {
        this._dp.destructor();
      }
      this.detachAllEvents();
      for (var o in this) {
        if (o.indexOf("$") === 0) {
          delete this[o];
        }
      }
      i.$destroyed = true;
    };
  })(j);
  (function (i) {
    function o(c, h) {
      var D = {
        method: c
      };
      if (h.length === 0) {
        throw new Error("Arguments list of query is wrong.");
      }
      if (h.length === 1) {
        if (typeof h[0] == "string") {
          D.url = h[0];
          D.async = true;
        } else {
          D.url = h[0].url;
          D.async = h[0].async || true;
          D.callback = h[0].callback;
          D.headers = h[0].headers;
        }
        D.data = h[0].data ? typeof h[0].data != "string" ? _default(h[0].data) : h[0].data : "";
        return D;
      }
      D.url = h[0];
      switch (c) {
        case "GET":
        case "DELETE":
          D.callback = h[1];
          D.headers = h[2];
          break;
        case "POST":
        case "PUT":
          D.data = h[1] ? typeof h[1] != "string" ? _default(h[1]) : h[1] : "";
          D.callback = h[2];
          D.headers = h[3];
      }
      return D;
    }
    i.Promise = ne;
    i.ajax = {
      cache: true,
      method: "get",
      serializeRequestParams: _default,
      parse: function (c) {
        if (typeof c != "string") {
          return c;
        } else {
          c = c.replace(/^[\s]+/, "");
          if (typeof DOMParser === "undefined" || i.$env.isIE) {
            if (window.ActiveXObject !== undefined) {
              (h = new window.ActiveXObject("Microsoft.XMLDOM")).async = "false";
              h.loadXML(c);
            }
          } else {
            h = new DOMParser().parseFromString(c, "text/xml");
          }
          return h;
        }
        var h;
      },
      xmltop: function (c, h, D) {
        if (h.status === undefined || h.status < 400) {
          var V = h.responseXML ? h.responseXML || h : this.parse(h.responseText || h);
          if (V && V.documentElement !== null && !V.getElementsByTagName("parsererror").length) {
            return V.getElementsByTagName(c)[0];
          }
        }
        if (D !== -1) {
          i.callEvent("onLoadXMLError", ["Incorrect XML", arguments[1], D]);
        }
        return document.createElement("DIV");
      },
      xpath: function (c, h) {
        if (!h.nodeName) {
          h = h.responseXML || h;
        }
        if (i.$env.isIE) {
          return h.selectNodes(c) || [];
        }
        for (var D, V = [], T = (h.ownerDocument || h).evaluate(c, h, null, XPathResult.ANY_TYPE, null); D = T.iterateNext();) {
          V.push(D);
        }
        return V;
      },
      query: function (c) {
        return this._call(c.method || "GET", c.url, c.data || "", c.async || true, c.callback, c.headers);
      },
      get: function (c, h, D) {
        var V = o("GET", arguments);
        return this.query(V);
      },
      getSync: function (c, h) {
        var D = o("GET", arguments);
        D.async = false;
        return this.query(D);
      },
      put: function (c, h, D, V) {
        var T = o("PUT", arguments);
        return this.query(T);
      },
      del: function (c, h, D) {
        var V = o("DELETE", arguments);
        return this.query(V);
      },
      post: function (c, h, D, V) {
        if (arguments.length == 1 || arguments.length == 2 && typeof h == "function") {
          h = "";
        }
        var T = o("POST", arguments);
        return this.query(T);
      },
      postSync: function (c, h, D) {
        h = h === null ? "" : String(h);
        var V = o("POST", arguments);
        V.async = false;
        return this.query(V);
      },
      _call: function (c, h, D, V, T, W) {
        return new i.Promise(function (z, Z) {
          var re = (typeof XMLHttpRequest === "undefined" ? "undefined" : Ee(XMLHttpRequest)) === undefined || i.$env.isIE ? new window.ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
          var oe = navigator.userAgent.match(/AppleWebKit/) !== null && navigator.userAgent.match(/Qt/) !== null && navigator.userAgent.match(/Safari/) !== null;
          if (V) {
            re.addEventListener("readystatechange", function () {
              if (re.readyState == 4 || oe && re.readyState == 3) {
                if ((re.status != 200 || re.responseText === "") && !i.callEvent("onAjaxError", [re])) {
                  return;
                }
                setTimeout(function () {
                  if (typeof T == "function") {
                    T.apply(window, [{
                      xmlDoc: re,
                      filePath: h
                    }]);
                  }
                  z(re);
                  if (typeof T == "function") {
                    T = null;
                    re = null;
                  }
                }, 0);
              }
            });
          }
          if (c == "GET" && !this.cache) {
            h += (h.indexOf("?") >= 0 ? "&" : "?") + "dhxr" + new Date().getTime() + "=1";
          }
          re.open(c, h, V);
          if (W) {
            for (var _e in W) {
              re.setRequestHeader(_e, W[_e]);
            }
          } else if (c.toUpperCase() == "POST" || c == "PUT" || c == "DELETE") {
            re.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          } else if (c == "GET") {
            D = null;
          }
          re.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          re.send(D);
          if (!V) {
            return {
              xmlDoc: re,
              filePath: h
            };
          }
        }.bind(this));
      },
      urlSeparator: function (c) {
        if (c.indexOf("?") != -1) {
          return "&";
        } else {
          return "?";
        }
      }
    };
    i.$ajax = i.ajax;
  })(j);
  (function Le(t) {
    function j(i, o) {
      for (var c = "var temp=date.match(/[a-zA-Z]+|[0-9]+/g);", h = i.match(/%[a-zA-Z]/g), D = 0; D < h.length; D++) {
        switch (h[D]) {
          case "%j":
          case "%d":
            c += "set[2]=temp[" + D + "]||1;";
            break;
          case "%n":
          case "%m":
            c += "set[1]=(temp[" + D + "]||1)-1;";
            break;
          case "%y":
            c += "set[0]=temp[" + D + "]*1+(temp[" + D + "]>50?1900:2000);";
            break;
          case "%g":
          case "%G":
          case "%h":
          case "%H":
            c += "set[3]=temp[" + D + "]||0;";
            break;
          case "%i":
            c += "set[4]=temp[" + D + "]||0;";
            break;
          case "%Y":
            c += "set[0]=temp[" + D + "]||0;";
            break;
          case "%a":
          case "%A":
            c += "set[3]=set[3]%12+((temp[" + D + "]||'').toLowerCase()=='am'?0:12);";
            break;
          case "%s":
            c += "set[5]=temp[" + D + "]||0;";
            break;
          case "%M":
            c += "set[1]=this.locale.date.month_short_hash[temp[" + D + "]]||0;";
            break;
          case "%F":
            c += "set[1]=this.locale.date.month_full_hash[temp[" + D + "]]||0;";
        }
      }
      var V = "set[0],set[1],set[2],set[3],set[4],set[5]";
      if (o) {
        V = " Date.UTC(" + V + ")";
      }
      return new Function("date", "var set=[0,0,1,0,0,0]; " + c + " return new Date(" + V + ");");
    }
    function a(i, o) {
      return function (c) {
        for (var h = [0, 0, 1, 0, 0, 0], D = c.match(/[a-zA-Z]+|[0-9]+/g), V = i.match(/%[a-zA-Z]/g), T = 0; T < V.length; T++) {
          switch (V[T]) {
            case "%j":
            case "%d":
              h[2] = D[T] || 1;
              break;
            case "%n":
            case "%m":
              h[1] = (D[T] || 1) - 1;
              break;
            case "%y":
              h[0] = D[T] * 1 + (D[T] > 50 ? 1900 : 2000);
              break;
            case "%g":
            case "%G":
            case "%h":
            case "%H":
              h[3] = D[T] || 0;
              break;
            case "%i":
              h[4] = D[T] || 0;
              break;
            case "%Y":
              h[0] = D[T] || 0;
              break;
            case "%a":
            case "%A":
              h[3] = h[3] % 12 + ((D[T] || "").toLowerCase() == "am" ? 0 : 12);
              break;
            case "%s":
              h[5] = D[T] || 0;
              break;
            case "%M":
              h[1] = t.locale.date.month_short_hash[D[T]] || 0;
              break;
            case "%F":
              h[1] = t.locale.date.month_full_hash[D[T]] || 0;
          }
        }
        if (o) {
          return new Date(Date.UTC(h[0], h[1], h[2], h[3], h[4], h[5]));
        } else {
          return new Date(h[0], h[1], h[2], h[3], h[4], h[5]);
        }
      };
    }
    var v = false;
    function _() {
      if (t.config.csp === "auto") {
        return v;
      } else {
        return t.config.csp;
      }
    }
    (function () {
      try {
        new Function("canUseCsp = false;");
      } catch {
        v = true;
      }
    })();
    t.date = {
      init: function () {
        for (var i = t.locale.date.month_short, o = t.locale.date.month_short_hash = {}, c = 0; c < i.length; c++) {
          o[i[c]] = c;
        }
        i = t.locale.date.month_full;
        o = t.locale.date.month_full_hash = {};
        c = 0;
        for (; c < i.length; c++) {
          o[i[c]] = c;
        }
      },
      _bind_host_object: function (i) {
        if (i.bind) {
          return i.bind(t);
        } else {
          return function () {
            return i.apply(t, arguments);
          };
        }
      },
      date_part: function (i) {
        var o = new Date(i);
        i.setHours(0);
        i.setMinutes(0);
        i.setSeconds(0);
        i.setMilliseconds(0);
        if (i.getHours() && (i.getDate() < o.getDate() || i.getMonth() < o.getMonth() || i.getFullYear() < o.getFullYear())) {
          i.setTime(i.getTime() + (24 - i.getHours()) * 3600000);
        }
        return i;
      },
      time_part: function (i) {
        return (i.valueOf() / 1000 - i.getTimezoneOffset() * 60) % 86400;
      },
      week_start: function (i) {
        var o = i.getDay();
        if (t.config.start_on_monday) {
          if (o === 0) {
            o = 6;
          } else {
            o--;
          }
        }
        return this.date_part(this.add(i, o * -1, "day"));
      },
      month_start: function (i) {
        i.setDate(1);
        return this.date_part(i);
      },
      year_start: function (i) {
        i.setMonth(0);
        return this.month_start(i);
      },
      day_start: function (i) {
        return this.date_part(i);
      },
      _add_days: function (i, o) {
        var c = new Date(i.valueOf());
        c.setDate(c.getDate() + o);
        if (o == Math.round(o) && o > 0) {
          var h = (+c - +i) % 86400000;
          if (h && i.getTimezoneOffset() == c.getTimezoneOffset()) {
            var D = h / 3600000;
            c.setTime(c.getTime() + (24 - D) * 60 * 60 * 1000);
          }
        }
        if (o >= 0 && !i.getHours() && c.getHours() && (c.getDate() < i.getDate() || c.getMonth() < i.getMonth() || c.getFullYear() < i.getFullYear())) {
          c.setTime(c.getTime() + (24 - c.getHours()) * 3600000);
        }
        return c;
      },
      add: function (i, o, c) {
        var h = new Date(i.valueOf());
        switch (c) {
          case "day":
            h = t.date._add_days(h, o);
            break;
          case "week":
            h = t.date._add_days(h, o * 7);
            break;
          case "month":
            h.setMonth(h.getMonth() + o);
            break;
          case "year":
            h.setYear(h.getFullYear() + o);
            break;
          case "hour":
            h.setTime(h.getTime() + o * 60 * 60 * 1000);
            break;
          case "minute":
            h.setTime(h.getTime() + o * 60 * 1000);
            break;
          default:
            return t.date["add_" + c](i, o, c);
        }
        return h;
      },
      to_fixed: function (i) {
        if (i < 10) {
          return "0" + i;
        } else {
          return i;
        }
      },
      copy: function (i) {
        return new Date(i.valueOf());
      },
      date_to_str: function (i, o) {
        if (_()) {
          h = i;
          D = o;
          return function (V) {
            return h.replace(/%[a-zA-Z]/g, function (T) {
              switch (T) {
                case "%d":
                  return t.date.to_fixed(D ? V.getUTCDate() : V.getDate());
                case "%m":
                  return t.date.to_fixed(D ? V.getUTCMonth() + 1 : V.getMonth() + 1);
                case "%j":
                  if (D) {
                    return V.getUTCDate();
                  } else {
                    return V.getDate();
                  }
                case "%n":
                  if (D) {
                    return V.getUTCMonth() + 1;
                  } else {
                    return V.getMonth() + 1;
                  }
                case "%y":
                  return t.date.to_fixed(D ? V.getUTCFullYear() % 100 : V.getFullYear() % 100);
                case "%Y":
                  if (D) {
                    return V.getUTCFullYear();
                  } else {
                    return V.getFullYear();
                  }
                case "%D":
                  if (D) {
                    return t.locale.date.day_short[V.getUTCDay()];
                  } else {
                    return t.locale.date.day_short[V.getDay()];
                  }
                case "%l":
                  if (D) {
                    return t.locale.date.day_full[V.getUTCDay()];
                  } else {
                    return t.locale.date.day_full[V.getDay()];
                  }
                case "%M":
                  if (D) {
                    return t.locale.date.month_short[V.getUTCMonth()];
                  } else {
                    return t.locale.date.month_short[V.getMonth()];
                  }
                case "%F":
                  if (D) {
                    return t.locale.date.month_full[V.getUTCMonth()];
                  } else {
                    return t.locale.date.month_full[V.getMonth()];
                  }
                case "%h":
                  return t.date.to_fixed(D ? (V.getUTCHours() + 11) % 12 + 1 : (V.getHours() + 11) % 12 + 1);
                case "%g":
                  if (D) {
                    return (V.getUTCHours() + 11) % 12 + 1;
                  } else {
                    return (V.getHours() + 11) % 12 + 1;
                  }
                case "%G":
                  if (D) {
                    return V.getUTCHours();
                  } else {
                    return V.getHours();
                  }
                case "%H":
                  return t.date.to_fixed(D ? V.getUTCHours() : V.getHours());
                case "%i":
                  return t.date.to_fixed(D ? V.getUTCMinutes() : V.getMinutes());
                case "%a":
                  if (D) {
                    if (V.getUTCHours() > 11) {
                      return "pm";
                    } else {
                      return "am";
                    }
                  } else if (V.getHours() > 11) {
                    return "pm";
                  } else {
                    return "am";
                  }
                case "%A":
                  if (D) {
                    if (V.getUTCHours() > 11) {
                      return "PM";
                    } else {
                      return "AM";
                    }
                  } else if (V.getHours() > 11) {
                    return "PM";
                  } else {
                    return "AM";
                  }
                case "%s":
                  return t.date.to_fixed(D ? V.getUTCSeconds() : V.getSeconds());
                case "%W":
                  return t.date.to_fixed(D ? t.date.getUTCISOWeek(V) : t.date.getISOWeek(V));
                default:
                  return T;
              }
            });
          };
        }
        var h;
        var D;
        i = i.replace(/%[a-zA-Z]/g, function (h) {
          switch (h) {
            case "%d":
              return "\"+this.date.to_fixed(date.getDate())+\"";
            case "%m":
              return "\"+this.date.to_fixed((date.getMonth()+1))+\"";
            case "%j":
              return "\"+date.getDate()+\"";
            case "%n":
              return "\"+(date.getMonth()+1)+\"";
            case "%y":
              return "\"+this.date.to_fixed(date.getFullYear()%100)+\"";
            case "%Y":
              return "\"+date.getFullYear()+\"";
            case "%D":
              return "\"+this.locale.date.day_short[date.getDay()]+\"";
            case "%l":
              return "\"+this.locale.date.day_full[date.getDay()]+\"";
            case "%M":
              return "\"+this.locale.date.month_short[date.getMonth()]+\"";
            case "%F":
              return "\"+this.locale.date.month_full[date.getMonth()]+\"";
            case "%h":
              return "\"+this.date.to_fixed((date.getHours()+11)%12+1)+\"";
            case "%g":
              return "\"+((date.getHours()+11)%12+1)+\"";
            case "%G":
              return "\"+date.getHours()+\"";
            case "%H":
              return "\"+this.date.to_fixed(date.getHours())+\"";
            case "%i":
              return "\"+this.date.to_fixed(date.getMinutes())+\"";
            case "%a":
              return "\"+(date.getHours()>11?\"pm\":\"am\")+\"";
            case "%A":
              return "\"+(date.getHours()>11?\"PM\":\"AM\")+\"";
            case "%s":
              return "\"+this.date.to_fixed(date.getSeconds())+\"";
            case "%W":
              return "\"+this.date.to_fixed(this.date.getISOWeek(date))+\"";
            default:
              return h;
          }
        });
        if (o) {
          i = i.replace(/date\.get/g, "date.getUTC");
        }
        var c = new Function("date", "return \"" + i + "\";");
        return t.date._bind_host_object(c);
      },
      str_to_date: function (i, o, c) {
        var h = _() ? a : j;
        var D = h(i, o);
        var V = /^[0-9]{4}(\-|\/)[0-9]{2}(\-|\/)[0-9]{2} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/;
        var T = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4} ?(([0-9]{1,2}:[0-9]{2})(:[0-9]{1,2})?)?$/;
        var W = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/;
        var z = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
        var Z = h("%Y-%m-%d %H:%i:%s", o);
        var re = h("%m/%d/%Y %H:%i:%s", o);
        var oe = h("%d-%m-%Y %H:%i:%s", o);
        return function (_e) {
          if (!c && !t.config.parse_exact_format) {
            if (_e && _e.getISOWeek) {
              return new Date(_e);
            }
            if (typeof _e == "number") {
              return new Date(_e);
            }
            if (V.test(String(_e))) {
              return Z(_e);
            }
            if (T.test(String(_e))) {
              return re(_e);
            }
            if (W.test(String(_e))) {
              return oe(_e);
            }
            if (function (he) {
              return z.test(he);
            }(_e)) {
              return new Date(_e);
            }
          }
          return D.call(t, _e);
        };
      },
      getISOWeek: function (i) {
        if (!i) {
          return false;
        }
        var o = (i = this.date_part(new Date(i))).getDay();
        if (o === 0) {
          o = 7;
        }
        var c = new Date(i.valueOf());
        c.setDate(i.getDate() + (4 - o));
        var h = c.getFullYear();
        var D = Math.round((c.getTime() - new Date(h, 0, 1).getTime()) / 86400000);
        return 1 + Math.floor(D / 7);
      },
      getUTCISOWeek: function (i) {
        return this.getISOWeek(this.convert_to_utc(i));
      },
      convert_to_utc: function (i) {
        return new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds());
      }
    };
  })(j);
  (function (i) {
    i.config = {
      default_date: "%j %M %Y",
      month_date: "%F %Y",
      load_date: "%Y-%m-%d",
      week_date: "%l",
      day_date: "%D, %F %j",
      hour_date: "%H:%i",
      month_day: "%d",
      date_format: "%Y-%m-%d %H:%i",
      api_date: "%d-%m-%Y %H:%i",
      parse_exact_format: false,
      preserve_length: true,
      time_step: 5,
      start_on_monday: true,
      first_hour: 0,
      last_hour: 24,
      readonly: false,
      drag_resize: true,
      drag_move: true,
      drag_create: true,
      drag_event_body: true,
      dblclick_create: true,
      edit_on_create: true,
      details_on_create: false,
      header: null,
      resize_month_events: false,
      resize_month_timed: false,
      responsive_lightbox: false,
      rtl: false,
      cascade_event_display: false,
      cascade_event_count: 4,
      cascade_event_margin: 30,
      multi_day: true,
      multi_day_height_limit: 0,
      drag_lightbox: true,
      preserve_scroll: true,
      select: true,
      server_utc: false,
      touch: true,
      touch_tip: true,
      touch_drag: 500,
      touch_swipe_dates: false,
      quick_info_detached: true,
      positive_closing: false,
      drag_highlight: true,
      limit_drag_out: false,
      icons_edit: ["icon_save", "icon_cancel"],
      icons_select: ["icon_details", "icon_edit", "icon_delete"],
      buttons_left: ["dhx_save_btn", "dhx_cancel_btn"],
      buttons_right: ["dhx_delete_btn"],
      lightbox: {
        sections: [{
          name: "description",
          map_to: "text",
          type: "textarea",
          focus: true
        }, {
          name: "time",
          height: 72,
          type: "time",
          map_to: "auto"
        }]
      },
      highlight_displayed_event: true,
      left_border: false,
      ajax_error: "alert",
      delay_render: 0,
      timeline_swap_resize: true,
      wai_aria_attributes: true,
      wai_aria_application_role: true,
      csp: "auto",
      event_attribute: "data-event-id",
      show_errors: true
    };
    i.config.buttons_left.$initial = i.config.buttons_left.join();
    i.config.buttons_right.$initial = i.config.buttons_right.join();
    i._helpers = {
      parseDate: function (o) {
        return (i.templates.xml_date || i.templates.parse_date)(o);
      },
      formatDate: function (o) {
        return (i.templates.xml_format || i.templates.format_date)(o);
      }
    };
    i.templates = {};
    i.init_templates = function () {
      var o = i.locale.labels;
      o.dhx_save_btn = o.icon_save;
      o.dhx_cancel_btn = o.icon_cancel;
      o.dhx_delete_btn = o.icon_delete;
      var c = i.date.date_to_str;
      var h = i.config;
      (function (D, V) {
        for (var T in V) {
          D[T] ||= V[T];
        }
      })(i.templates, {
        day_date: c(h.default_date),
        month_date: c(h.month_date),
        week_date: function (D, V) {
          if (h.rtl) {
            return i.templates.day_date(i.date.add(V, -1, "day")) + " &ndash; " + i.templates.day_date(D);
          } else {
            return i.templates.day_date(D) + " &ndash; " + i.templates.day_date(i.date.add(V, -1, "day"));
          }
        },
        day_scale_date: c(h.default_date),
        month_scale_date: c(h.week_date),
        week_scale_date: c(h.day_date),
        hour_scale: c(h.hour_date),
        time_picker: c(h.hour_date),
        event_date: c(h.hour_date),
        month_day: c(h.month_day),
        load_format: c(h.load_date),
        format_date: c(h.date_format, h.server_utc),
        parse_date: i.date.str_to_date(h.date_format, h.server_utc),
        api_date: i.date.str_to_date(h.api_date, false, false),
        event_header: function (D, V, T) {
          return i.templates.event_date(D) + " - " + i.templates.event_date(V);
        },
        event_text: function (D, V, T) {
          return T.text;
        },
        event_class: function (D, V, T) {
          return "";
        },
        month_date_class: function (D) {
          return "";
        },
        week_date_class: function (D) {
          return "";
        },
        event_bar_date: function (D, V, T) {
          return i.templates.event_date(D) + " ";
        },
        event_bar_text: function (D, V, T) {
          return T.text;
        },
        month_events_link: function (D, V) {
          return "<a>View more(" + V + " events)</a>";
        },
        drag_marker_class: function (D, V, T) {
          return "";
        },
        drag_marker_content: function (D, V, T) {
          return "";
        },
        tooltip_date_format: i.date.date_to_str("%Y-%m-%d %H:%i"),
        tooltip_text: function (D, V, T) {
          return "<b>Event:</b> " + T.text + "<br/><b>Start date:</b> " + i.templates.tooltip_date_format(D) + "<br/><b>End date:</b> " + i.templates.tooltip_date_format(V);
        }
      });
      this.callEvent("onTemplatesReady", []);
    };
  })(j);
  (function (i) {
    i._events = {};
    i.clearAll = function () {
      this._events = {};
      this._loaded = {};
      this._edit_id = null;
      this._select_id = null;
      this._drag_id = null;
      this._drag_mode = null;
      this._drag_pos = null;
      this._new_event = null;
      this.clear_view();
      this.callEvent("onClearAll", []);
    };
    i.addEvent = function (o, c, h, D, V) {
      if (!arguments.length) {
        return this.addEventNow();
      }
      var T = o;
      if (arguments.length != 1) {
        (T = V || {}).start_date = o;
        T.end_date = c;
        T.text = h;
        T.id = D;
      }
      T.id = T.id || i.uid();
      T.text = T.text || "";
      if (typeof T.start_date == "string") {
        T.start_date = this.templates.api_date(T.start_date);
      }
      if (typeof T.end_date == "string") {
        T.end_date = this.templates.api_date(T.end_date);
      }
      var W = (this.config.event_duration || this.config.time_step) * 60000;
      if (T.start_date.valueOf() == T.end_date.valueOf()) {
        T.end_date.setTime(T.end_date.valueOf() + W);
      }
      T.start_date.setMilliseconds(0);
      T.end_date.setMilliseconds(0);
      T._timed = this.isOneDayEvent(T);
      var z = !this._events[T.id];
      this._events[T.id] = T;
      this.event_updated(T);
      if (!this._loading) {
        this.callEvent(z ? "onEventAdded" : "onEventChanged", [T.id, T]);
      }
      return T.id;
    };
    i.deleteEvent = function (o, c) {
      var h = this._events[o];
      if (c || this.callEvent("onBeforeEventDelete", [o, h]) && this.callEvent("onConfirmedBeforeEventDelete", [o, h])) {
        if (h) {
          if (i.getState().select_id == o) {
            i.unselect();
          }
          delete this._events[o];
          this.event_updated(h);
          if (this._drag_id == h.id) {
            this._drag_id = null;
            this._drag_mode = null;
            this._drag_pos = null;
          }
        }
        this.callEvent("onEventDeleted", [o, h]);
      }
    };
    i.getEvent = function (o) {
      return this._events[o];
    };
    i.setEvent = function (o, c) {
      c.id ||= o;
      this._events[o] = c;
    };
    i.for_rendered = function (o, c) {
      for (var h = this._rendered.length - 1; h >= 0; h--) {
        if (this._rendered[h].getAttribute(this.config.event_attribute) == o) {
          c(this._rendered[h], h);
        }
      }
    };
    i.changeEventId = function (o, c) {
      if (o != c) {
        var h = this._events[o];
        if (h) {
          h.id = c;
          this._events[c] = h;
          delete this._events[o];
        }
        this.for_rendered(o, function (D) {
          D.setAttribute("event_id", c);
          D.setAttribute(i.config.event_attribute, c);
        });
        if (this._select_id == o) {
          this._select_id = c;
        }
        if (this._edit_id == o) {
          this._edit_id = c;
        }
        this.callEvent("onEventIdChange", [o, c]);
      }
    };
    (function () {
      for (var o = ["text", "Text", "start_date", "StartDate", "end_date", "EndDate"], c = function (V) {
          return function (T) {
            return i.getEvent(T)[V];
          };
        }, h = function (V) {
          return function (T, W) {
            var z = i.getEvent(T);
            z[V] = W;
            z._changed = true;
            z._timed = this.isOneDayEvent(z);
            i.event_updated(z, true);
          };
        }, D = 0; D < o.length; D += 2) {
        i["getEvent" + o[D + 1]] = c(o[D]);
        i["setEvent" + o[D + 1]] = h(o[D]);
      }
    })();
    i.event_updated = function (o, c) {
      if (this.is_visible_events(o)) {
        this.render_view_data();
      } else {
        this.clear_event(o.id);
      }
    };
    i.is_visible_events = function (o) {
      if (!this._min_date || !this._max_date) {
        return false;
      }
      if (o.start_date.valueOf() < this._max_date.valueOf() && this._min_date.valueOf() < o.end_date.valueOf()) {
        var c = o.start_date.getHours();
        var h = o.end_date.getHours() + o.end_date.getMinutes() / 60;
        var D = this.config.last_hour;
        var V = this.config.first_hour;
        return !!this._table_view || h <= D && h > V || c < D && c >= V || (o.end_date.valueOf() - o.start_date.valueOf()) / 3600000 > 24 - (this.config.last_hour - this.config.first_hour) || c < D && h > V;
      }
      return false;
    };
    i.isOneDayEvent = function (o) {
      var c = new Date(o.end_date.valueOf() - 1);
      return o.start_date.getFullYear() === c.getFullYear() && o.start_date.getMonth() === c.getMonth() && o.start_date.getDate() === c.getDate() && o.end_date.valueOf() - o.start_date.valueOf() < 86400000;
    };
    i.get_visible_events = function (o) {
      var c = [];
      for (var h in this._events) {
        if (this.is_visible_events(this._events[h])) {
          if (!o || !!this._events[h]._timed) {
            if (this.filter_event(h, this._events[h])) {
              c.push(this._events[h]);
            }
          }
        }
      }
      return c;
    };
    i.filter_event = function (o, c) {
      var h = this["filter_" + this._mode];
      return !h || h(o, c);
    };
    i._is_main_area_event = function (o) {
      return !!o._timed;
    };
    i.render_view_data = function (o, c) {
      var h = false;
      if (!o) {
        h = true;
        if (this._not_render) {
          this._render_wait = true;
          return;
        }
        this._render_wait = false;
        this.clear_view();
        o = this.get_visible_events(!this._table_view && !this.config.multi_day);
      }
      for (var D = 0, V = o.length; D < V; D++) {
        this._recalculate_timed(o[D]);
      }
      if (this.config.multi_day && !this._table_view) {
        var T = [];
        var W = [];
        for (D = 0; D < o.length; D++) {
          if (this._is_main_area_event(o[D])) {
            T.push(o[D]);
          } else {
            W.push(o[D]);
          }
        }
        if (!this._els.dhx_multi_day) {
          var z = i._commonErrorMessages.unknownView(this._mode);
          throw new Error(z);
        }
        this._rendered_location = this._els.dhx_multi_day[0];
        this._table_view = true;
        this.render_data(W, c);
        this._table_view = false;
        this._rendered_location = this._els.dhx_cal_data[0];
        this._table_view = false;
        this.render_data(T, c);
      } else {
        var Z = document.createDocumentFragment();
        var re = this._els.dhx_cal_data[0];
        this._rendered_location = Z;
        this.render_data(o, c);
        re.appendChild(Z);
        this._rendered_location = re;
      }
      if (h) {
        this.callEvent("onDataRender", []);
      }
    };
    i._view_month_day = function (o) {
      var c = i.getActionData(o).date;
      if (i.callEvent("onViewMoreClick", [c])) {
        i.setCurrentView(c, "day");
      }
    };
    i._render_month_link = function (o) {
      for (var c = this._rendered_location, h = this._lame_clone(o), D = o._sday; D < o._eday; D++) {
        h._sday = D;
        h._eday = D + 1;
        var V = i.date;
        var T = i._min_date;
        T = V.add(T, h._sweek, "week");
        T = V.add(T, h._sday, "day");
        var W = i.getEvents(T, V.add(T, 1, "day")).length;
        var z = this._get_event_bar_pos(h);
        var Z = z.x2 - z.x;
        var re = document.createElement("div");
        i.event(re, "click", function (oe) {
          i._view_month_day(oe);
        });
        re.className = "dhx_month_link";
        re.style.top = z.y + "px";
        re.style.left = z.x + "px";
        re.style.width = Z + "px";
        re.innerHTML = i.templates.month_events_link(T, W);
        this._rendered.push(re);
        c.appendChild(re);
      }
    };
    i._recalculate_timed = function (o) {
      var c;
      if (o && (c = Qe(o) != "object" ? this._events[o] : o)) {
        c._timed = i.isOneDayEvent(c);
      }
    };
    i.attachEvent("onEventChanged", i._recalculate_timed);
    i.attachEvent("onEventAdded", i._recalculate_timed);
    i.render_data = function (o, c) {
      o = this._pre_render_events(o, c);
      for (var h = {}, D = 0; D < o.length; D++) {
        if (this._table_view) {
          if (i._mode != "month") {
            this.render_event_bar(o[D]);
          } else {
            var V = i.config.max_month_events;
            if (V !== V * 1 || o[D]._sorder < V) {
              this.render_event_bar(o[D]);
            } else if (V !== undefined && o[D]._sorder == V) {
              i._render_month_link(o[D]);
            }
          }
        } else {
          var T = o[D];
          var W = i.locate_holder(T._sday);
          if (!W) {
            continue;
          }
          h[T._sday] ||= {
            real: W,
            buffer: document.createDocumentFragment(),
            width: W.clientWidth
          };
          var z = h[T._sday];
          this.render_event(T, z.buffer, z.width);
        }
      }
      for (var D in h) {
        if ((z = h[D]).real && z.buffer) {
          z.real.appendChild(z.buffer);
        }
      }
    };
    i._get_first_visible_cell = function (o) {
      for (var c = 0; c < o.length; c++) {
        if ((o[c].className || "").indexOf("dhx_scale_ignore") == -1) {
          return o[c];
        }
      }
      return o[0];
    };
    i._pre_render_events = function (o, c) {
      var h = this.xy.bar_height;
      var D = this._colsS.heights;
      var V = this._colsS.heights = [0, 0, 0, 0, 0, 0, 0];
      var T = this._els.dhx_cal_data[0];
      o = this._table_view ? this._pre_render_events_table(o, c) : this._pre_render_events_line(o, c);
      if (this._table_view) {
        if (c) {
          this._colsS.heights = D;
        } else {
          var W = T.firstChild;
          if (W.rows) {
            for (var z = 0; z < W.rows.length; z++) {
              V[z]++;
              var Z = W.rows[z].cells;
              var re = this._colsS.height - this.xy.month_head_height;
              if (V[z] * h > re) {
                var oe = re;
                if (this.config.max_month_events * 1 !== this.config.max_month_events || V[z] <= this.config.max_month_events) {
                  oe = V[z] * h;
                } else if ((this.config.max_month_events + 1) * h > re) {
                  oe = (this.config.max_month_events + 1) * h;
                }
                for (var _e = 0; _e < Z.length; _e++) {
                  Z[_e].childNodes[1].style.height = oe + "px";
                }
              }
              V[z] = (V[z - 1] || 0) + i._get_first_visible_cell(Z).offsetHeight;
            }
            V.unshift(0);
            if (W.parentNode.offsetHeight < W.parentNode.scrollHeight && !i._colsS.scroll_fix && i.xy.scroll_width) {
              var he = i._colsS;
              var be = he[he.col_length];
              var Ae = he.heights.slice();
              this._calc_scale_sizes(be -= i.xy.scroll_width || 0, this._min_date, this._max_date);
              i._colsS.heights = Ae;
              this.set_xy(this._els.dhx_cal_header[0], be, this.xy.scale_height);
              i._render_scales(this._els.dhx_cal_header[0]);
              i._render_month_scale(this._els.dhx_cal_data[0], this._get_timeunit_start(), this._min_date);
              he.scroll_fix = true;
            }
          } else {
            if (!o.length && this._els.dhx_multi_day[0].style.visibility == "visible") {
              V[0] = -1;
            }
            if (o.length || V[0] == -1) {
              var He = (V[0] + 1) * h + 1;
              var Ne = He;
              var Ve = He + "px";
              if (this.config.multi_day_height_limit) {
                Ve = (Ne = Math.min(He, this.config.multi_day_height_limit)) + "px";
              }
              T.style.top = this._els.dhx_cal_navline[0].offsetHeight + this._els.dhx_cal_header[0].offsetHeight + Ne + "px";
              T.style.height = this._obj.offsetHeight - parseInt(T.style.top, 10) - (this.xy.margin_top || 0) + "px";
              var Se = this._els.dhx_multi_day[0];
              Se.style.height = Ve;
              Se.style.visibility = V[0] == -1 ? "hidden" : "visible";
              var Fe = this._els.dhx_multi_day[1];
              Fe.style.height = Ve;
              Fe.style.visibility = V[0] == -1 ? "hidden" : "visible";
              Fe.className = V[0] ? "dhx_multi_day_icon" : "dhx_multi_day_icon_small";
              this._dy_shift = (V[0] + 1) * h;
              if (this.config.multi_day_height_limit) {
                this._dy_shift = Math.min(this.config.multi_day_height_limit, this._dy_shift);
              }
              V[0] = 0;
              if (Ne != He) {
                T.style.top = parseInt(T.style.top) + 2 + "px";
                Se.style.overflowY = "auto";
                Fe.style.position = "fixed";
                Fe.style.top = "";
                Fe.style.left = "";
              }
            }
          }
        }
      }
      return o;
    };
    i._get_event_sday = function (o) {
      var c = this.date.day_start(new Date(o.start_date));
      return Math.round((c.valueOf() - this._min_date.valueOf()) / 86400000);
    };
    i._get_event_mapped_end_date = function (o) {
      var c = o.end_date;
      if (this.config.separate_short_events) {
        var h = (o.end_date - o.start_date) / 60000;
        if (h < this._min_mapped_duration) {
          c = this.date.add(c, this._min_mapped_duration - h, "minute");
        }
      }
      return c;
    };
    i._pre_render_events_line = function (o, c) {
      o.sort(function (Se, Fe) {
        if (Se.start_date.valueOf() == Fe.start_date.valueOf()) {
          if (Se.id > Fe.id) {
            return 1;
          } else {
            return -1;
          }
        } else if (Se.start_date > Fe.start_date) {
          return 1;
        } else {
          return -1;
        }
      });
      var h = [];
      var D = [];
      this._min_mapped_duration = Math.ceil(this.xy.min_event_height * 60 / this.config.hour_size_px);
      for (var V = 0; V < o.length; V++) {
        var T = o[V];
        var z = T.end_date;
        var Z = T.start_date.getHours();
        var re = z.getHours();
        T._sday = this._get_event_sday(T);
        if (this._ignores[T._sday]) {
          o.splice(V, 1);
          V--;
        } else {
          h[T._sday] ||= [];
          if (!c) {
            T._inner = false;
            for (var oe = h[T._sday]; oe.length;) {
              var _e = oe[oe.length - 1];
              if (this._get_event_mapped_end_date(_e).valueOf() > T.start_date.valueOf()) {
                break;
              }
              oe.splice(oe.length - 1, 1);
            }
            for (var he = oe.length, be = false, Ae = 0; Ae < oe.length; Ae++) {
              if (this._get_event_mapped_end_date(_e = oe[Ae]).valueOf() <= T.start_date.valueOf()) {
                be = true;
                T._sorder = _e._sorder;
                he = Ae;
                T._inner = true;
                break;
              }
            }
            if (oe.length) {
              oe[oe.length - 1]._inner = true;
            }
            if (!be) {
              if (oe.length) {
                if (oe.length <= oe[oe.length - 1]._sorder) {
                  if (oe[oe.length - 1]._sorder) {
                    for (Ae = 0; Ae < oe.length; Ae++) {
                      for (var He = false, Ne = 0; Ne < oe.length; Ne++) {
                        if (oe[Ne]._sorder == Ae) {
                          He = true;
                          break;
                        }
                      }
                      if (!He) {
                        T._sorder = Ae;
                        break;
                      }
                    }
                  } else {
                    T._sorder = 0;
                  }
                  T._inner = true;
                } else {
                  var Ve = oe[0]._sorder;
                  for (Ae = 1; Ae < oe.length; Ae++) {
                    if (oe[Ae]._sorder > Ve) {
                      Ve = oe[Ae]._sorder;
                    }
                  }
                  T._sorder = Ve + 1;
                  T._inner = false;
                }
              } else {
                T._sorder = 0;
              }
            }
            oe.splice(he, he == oe.length ? 0 : 1, T);
            if (oe.length > (oe.max_count || 0)) {
              oe.max_count = oe.length;
              T._count = oe.length;
            } else {
              T._count = T._count ? T._count : 1;
            }
          }
          if ((Z < this.config.first_hour || re >= this.config.last_hour) && (D.push(T), o[V] = T = this._copy_event(T), Z < this.config.first_hour && (T.start_date.setHours(this.config.first_hour), T.start_date.setMinutes(0)), re >= this.config.last_hour && (T.end_date.setMinutes(0), T.end_date.setHours(this.config.last_hour)), T.start_date > T.end_date || Z == this.config.last_hour)) {
            o.splice(V, 1);
            V--;
          }
        }
      }
      if (!c) {
        for (V = 0; V < o.length; V++) {
          o[V]._count = h[o[V]._sday].max_count;
        }
        for (V = 0; V < D.length; V++) {
          D[V]._count = h[D[V]._sday].max_count;
        }
      }
      return o;
    };
    i._time_order = function (o) {
      o.sort(function (c, h) {
        if (c.start_date.valueOf() == h.start_date.valueOf()) {
          if (c._timed && !h._timed) {
            return 1;
          } else if (!c._timed && h._timed) {
            return -1;
          } else if (c.id > h.id) {
            return 1;
          } else {
            return -1;
          }
        } else if (c.start_date > h.start_date) {
          return 1;
        } else {
          return -1;
        }
      });
    };
    i._is_any_multiday_cell_visible = function (o, c, h) {
      var D = this._cols.length;
      var V = false;
      var T = o;
      var W = true;
      var z = new Date(c);
      for (i.date.day_start(new Date(c)).valueOf() != c.valueOf() && (z = i.date.day_start(z), z = i.date.add(z, 1, "day")); T < z;) {
        W = false;
        var Z = this.locate_holder_day(T, false, h) % D;
        if (!this._ignores[Z]) {
          V = true;
          break;
        }
        T = i.date.add(T, 1, "day");
      }
      return W || V;
    };
    i._pre_render_events_table = function (o, c) {
      this._time_order(o);
      for (var h, D = [], V = [[], [], [], [], [], [], []], T = this._colsS.heights, W = this._cols.length, z = {}, Z = 0; Z < o.length; Z++) {
        var re = o[Z];
        var oe = re.id;
        z[oe] ||= {
          first_chunk: true,
          last_chunk: true
        };
        var _e = z[oe];
        var he = h || re.start_date;
        var be = re.end_date;
        if (he < this._min_date) {
          _e.first_chunk = false;
          he = this._min_date;
        }
        if (be > this._max_date) {
          _e.last_chunk = false;
          be = this._max_date;
        }
        var Ae = this.locate_holder_day(he, false, re);
        re._sday = Ae % W;
        if (!this._ignores[re._sday] || !re._timed) {
          var He = this.locate_holder_day(be, true, re) || W;
          re._eday = He % W || W;
          re._length = He - Ae;
          re._sweek = Math.floor((this._correct_shift(he.valueOf(), 1) - this._min_date.valueOf()) / (W * 86400000));
          if (i._is_any_multiday_cell_visible(he, be, re)) {
            var Ne;
            var Ve = V[re._sweek];
            for (Ne = 0; Ne < Ve.length && Ve[Ne]._eday > re._sday; Ne++);
            if (!re._sorder || !c) {
              re._sorder = Ne;
            }
            if (re._sday + re._length <= W) {
              h = null;
              D.push(re);
              Ve[Ne] = re;
              T[re._sweek] = Ve.length - 1;
              re._first_chunk = _e.first_chunk;
              re._last_chunk = _e.last_chunk;
            } else {
              var Se = this._copy_event(re);
              Se.id = re.id;
              Se._length = W - re._sday;
              Se._eday = W;
              Se._sday = re._sday;
              Se._sweek = re._sweek;
              Se._sorder = re._sorder;
              Se.end_date = this.date.add(he, Se._length, "day");
              Se._first_chunk = _e.first_chunk;
              _e.first_chunk &&= false;
              D.push(Se);
              Ve[Ne] = Se;
              h = Se.end_date;
              T[re._sweek] = Ve.length - 1;
              Z--;
            }
          }
        }
      }
      return D;
    };
    i._copy_dummy = function () {
      var o = new Date(this.start_date);
      var c = new Date(this.end_date);
      this.start_date = o;
      this.end_date = c;
    };
    i._copy_event = function (o) {
      this._copy_dummy.prototype = o;
      return new this._copy_dummy();
    };
    i._rendered = [];
    i.clear_view = function () {
      for (var o = 0; o < this._rendered.length; o++) {
        var c = this._rendered[o];
        if (c.parentNode) {
          c.parentNode.removeChild(c);
        }
      }
      this._rendered = [];
    };
    i.updateEvent = function (o) {
      var c = this.getEvent(o);
      this.clear_event(o);
      if (c && this.is_visible_events(c) && this.filter_event(o, c) && (this._table_view || this.config.multi_day || c._timed)) {
        if (this.config.update_render) {
          this.render_view_data();
        } else if (this.getState().mode != "month" || this.getState().drag_id || this.isOneDayEvent(c)) {
          this.render_view_data([c], true);
        } else {
          this.render_view_data();
        }
      }
    };
    i.clear_event = function (o) {
      this.for_rendered(o, function (c, h) {
        if (c.parentNode) {
          c.parentNode.removeChild(c);
        }
        i._rendered.splice(h, 1);
      });
    };
    i._y_from_date = function (o) {
      var c = o.getHours() * 60 + o.getMinutes();
      return Math.round((c * 60 * 1000 - this.config.first_hour * 60 * 60 * 1000) * this.config.hour_size_px / 3600000) % (this.config.hour_size_px * 24);
    };
    i._calc_event_y = function (o, c) {
      c = c || 0;
      var h = o.start_date.getHours() * 60 + o.start_date.getMinutes();
      var D = o.end_date.getHours() * 60 + o.end_date.getMinutes() || i.config.last_hour * 60;
      return {
        top: this._y_from_date(o.start_date),
        height: Math.max(c, (D - h) * this.config.hour_size_px / 60)
      };
    };
    i.render_event = function (o, c, h) {
      var D = i.xy.menu_width;
      var V = this.config.use_select_menu_space ? 0 : D;
      if (o._sday >= 0) {
        var T = i.locate_holder(o._sday);
        if (T) {
          c = c || T;
          var W = this._calc_event_y(o, i.xy.min_event_height);
          var z = W.top;
          var Z = W.height;
          var re = o._count || 1;
          var oe = o._sorder || 0;
          h = h || T.clientWidth;
          var _e = Math.floor((h - V) / re);
          var he = oe * _e + 1;
          if (!o._inner) {
            _e *= re - oe;
          }
          if (this.config.cascade_event_display) {
            var be = this.config.cascade_event_count;
            var Ae = this.config.cascade_event_margin;
            he = oe % be * Ae;
            _e = Math.floor(h - V - he - (o._inner ? (re - oe - 1) % be * Ae / 2 : 0));
          }
          var Ne = this._render_v_bar(o, V + he, z, _e, Z, o._text_style, i.templates.event_header(o.start_date, o.end_date, o), i.templates.event_text(o.start_date, o.end_date, o));
          this._waiAria.eventAttr(o, Ne);
          this._rendered.push(Ne);
          c.appendChild(Ne);
          he = he + parseInt(this.config.rtl ? T.style.right : T.style.left, 10) + V;
          if (this._edit_id == o.id) {
            Ne.style.zIndex = 1;
            _e = Math.max(_e - 4, i.xy.editor_width);
            (Ne = document.createElement("div")).setAttribute("event_id", o.id);
            Ne.setAttribute(this.config.event_attribute, o.id);
            this._waiAria.eventAttr(o, Ne);
            Ne.className = "dhx_cal_event dhx_cal_editor";
            if (this.config.rtl) {
              he++;
            }
            this.set_xy(Ne, _e, Z - 20, he, z + (i.xy.event_header_height || 14));
            if (o.color) {
              Ne.style.backgroundColor = o.color;
            }
            var Ve = i.templates.event_class(o.start_date, o.end_date, o);
            if (Ve) {
              Ne.className += " " + Ve;
            }
            var Se = document.createElement("div");
            this.set_xy(Se, _e - 6, Z - 26);
            Se.style.cssText += ";margin:2px 2px 2px 2px;overflow:hidden;";
            Ne.appendChild(Se);
            this._els.dhx_cal_data[0].appendChild(Ne);
            this._rendered.push(Ne);
            Se.innerHTML = "<textarea class='dhx_cal_editor'>" + o.text + "</textarea>";
            this._editor = Se.querySelector("textarea");
            if (this._quirks7) {
              this._editor.style.height = Z - 12 + "px";
            }
            i.event(this._editor, "keydown", function (yt) {
              if (yt.shiftKey) {
                return true;
              }
              var xt = yt.keyCode;
              if (xt == i.keys.edit_save) {
                i.editStop(true);
              }
              if (xt == i.keys.edit_cancel) {
                i.editStop(false);
              }
              if (xt == i.keys.edit_save || xt == i.keys.edit_cancel) {
                if (yt.preventDefault) {
                  yt.preventDefault();
                }
              }
            });
            i.event(this._editor, "selectstart", function (yt) {
              yt.cancelBubble = true;
              return true;
            });
            i._focus(this._editor, true);
            this._els.dhx_cal_data[0].scrollLeft = 0;
          }
          if (this.xy.menu_width !== 0 && this._select_id == o.id) {
            if (this.config.cascade_event_display && this._drag_mode) {
              Ne.style.zIndex = 1;
            }
            for (var Fe, Oe = this.config["icons_" + (this._edit_id == o.id ? "edit" : "select")], at = "", ht = o.color ? "background-color: " + o.color + ";" : "", lt = o.textColor ? "color: " + o.textColor + ";" : "", mt = 0; mt < Oe.length; mt++) {
              Fe = this._waiAria.eventMenuAttrString(Oe[mt]);
              at += "<div class='dhx_menu_icon " + Oe[mt] + "' style='" + ht + lt + "' title='" + this.locale.labels[Oe[mt]] + "'" + Fe + "></div>";
            }
            var ft = this._render_v_bar(o, he - D + 1, z, D, Oe.length * 20 + 26 - 2, "", "<div style='" + ht + lt + "' class='dhx_menu_head'></div>", at, true);
            ft.style.left = he - D + 1;
            this._els.dhx_cal_data[0].appendChild(ft);
            this._rendered.push(ft);
          }
          if (this.config.drag_highlight && this._drag_id == o.id) {
            this.highlightEventPosition(o);
          }
        }
      }
    };
    i._render_v_bar = function (o, c, h, D, V, T, W, z, Z) {
      var re = document.createElement("div");
      var oe = o.id;
      var _e = Z ? "dhx_cal_event dhx_cal_select_menu" : "dhx_cal_event";
      var he = i.getState();
      if (he.drag_id == o.id) {
        _e += " dhx_cal_event_drag";
      }
      if (he.select_id == o.id) {
        _e += " dhx_cal_event_selected";
      }
      var be = i.templates.event_class(o.start_date, o.end_date, o);
      if (be) {
        _e = _e + " " + be;
      }
      if (this.config.cascade_event_display) {
        _e += " dhx_cal_event_cascade";
      }
      var Ae = o.color ? "background-color:" + o.color + ";" : "";
      var He = o.textColor ? "color:" + o.textColor + ";" : "";
      var Ne = i._border_box_events();
      var Ve = D - 2;
      var Fe = Ne ? Ve : D - 6;
      var Oe = Ne ? Ve : D - (this._quirks ? 4 : 14);
      var at = Ne ? Ve - 2 : D - 8;
      var ht = Ne ? V - this.xy.event_header_height - 1 : V - (this._quirks ? 20 : 30) + 1;
      re.innerHTML = "<div event_id=\"" + oe + "\" " + this.config.event_attribute + "=\"" + oe + "\" class=\"" + _e + "\" style=\"position:absolute; top:" + h + "px; " + (this.config.rtl ? "right:" : "left:") + c + "px; width:" + (Ne ? Ve : D - 4) + "px; height:" + V + "px;" + (T || "") + "\"></div>";
      var mt = re.cloneNode(true).firstChild;
      if (!Z && i.renderEvent(mt, o, D, V, W, z)) {
        return mt;
      }
      var ft = "<div class=\"dhx_event_move dhx_header\" style=\" width:" + Fe + "px;" + Ae + "\" >&nbsp;</div>";
      ft += "<div class=\"dhx_event_move dhx_title\" style=\"" + Ae + He + "\">" + W + "</div>";
      ft += "<div class=\"dhx_body\" style=\" width:" + Oe + "px; height:" + ht + "px;" + Ae + He + "\">" + z + "</div>";
      var yt = "dhx_event_resize dhx_footer";
      if (Z || o._drag_resize === false) {
        yt = "dhx_resize_denied " + yt;
      }
      (mt = re.firstChild).innerHTML = ft += "<div class=\"" + yt + "\" style=\" width:" + at + "px;" + (Z ? " margin-top:-1px;" : "") + Ae + He + "\" ></div>";
      return mt;
    };
    i.renderEvent = function () {
      return false;
    };
    i.locate_holder = function (o) {
      if (this._mode == "day") {
        return this._els.dhx_cal_data[0].firstChild;
      } else {
        return this._els.dhx_cal_data[0].childNodes[o];
      }
    };
    i.locate_holder_day = function (o, c) {
      var h = Math.floor((this._correct_shift(o, 1) - this._min_date) / 86400000);
      if (c && this.date.time_part(o)) {
        h++;
      }
      return h;
    };
    i._get_dnd_order = function (o, c, h) {
      if (!this._drag_event) {
        return o;
      }
      if (this._drag_event._orig_sorder) {
        o = this._drag_event._orig_sorder;
      } else {
        this._drag_event._orig_sorder = o;
      }
      for (var D = c * o; D + c > h;) {
        o--;
        D -= c;
      }
      return Math.max(o, 0);
    };
    i._get_event_bar_pos = function (o) {
      var h = this._colsS;
      var D = h[o._sday];
      var V = h[o._eday];
      if (this.config.rtl) {
        D = h[h.col_length] - h[o._eday] + h[0];
        V = h[h.col_length] - h[o._sday] + h[0];
      }
      if (V == D) {
        V = h[o._eday + 1];
      }
      var T = this.xy.bar_height;
      var W = o._sorder;
      if (o.id == this._drag_id) {
        W = i._get_dnd_order(W, T, h.heights[o._sweek + 1] - h.heights[o._sweek] - this.xy.month_head_height);
      }
      return {
        x: D,
        x2: V,
        y: h.heights[o._sweek] + (h.height ? this.xy.month_scale_height + 2 : 2) + W * T
      };
    };
    i.render_event_bar = function (o) {
      var c = this._rendered_location;
      var h = this._get_event_bar_pos(o);
      var D = h.y;
      var V = h.x;
      var T = h.x2;
      var W = "";
      if (T) {
        var z = i.config.resize_month_events && this._mode == "month" && (!o._timed || i.config.resize_month_timed);
        var Z = document.createElement("div");
        var re = o.hasOwnProperty("_first_chunk") && o._first_chunk;
        var oe = o.hasOwnProperty("_last_chunk") && o._last_chunk;
        var be = true;
        var Ae = "dhx_cal_event_clear";
        if (!o._timed || !!z) {
          be = false;
          Ae = "dhx_cal_event_line";
        }
        if (re) {
          Ae += " dhx_cal_event_line_start";
        }
        if (oe) {
          Ae += " dhx_cal_event_line_end";
        }
        if (z && (o._timed || re)) {
          W += "<div class='dhx_event_resize dhx_event_resize_start'></div>";
        }
        if (z && (o._timed || oe)) {
          W += "<div class='dhx_event_resize dhx_event_resize_end'></div>";
        }
        var He = i.templates.event_class(o.start_date, o.end_date, o);
        if (He) {
          Ae += " " + He;
        }
        var Se = ["position:absolute", "top:" + D + "px", "left:" + V + "px", "width:" + (T - V - 3 - (be ? 1 : 0)) + "px", o.textColor ? "color:" + o.textColor + ";" : "", o.color ? "background:" + o.color + ";" : "", o._text_style || ""].join(";");
        var Fe = "<div event_id='" + o.id + "' " + this.config.event_attribute + "='" + o.id + "' class='" + Ae + "' style='" + Se + "'" + this._waiAria.eventBarAttrString(o) + ">";
        if (z) {
          Fe += W;
        }
        if (i.getState().mode == "month") {
          o = i.getEvent(o.id);
        }
        if (o._timed) {
          Fe += i.templates.event_bar_date(o.start_date, o.end_date, o);
        }
        Fe += i.templates.event_bar_text(o.start_date, o.end_date, o) + "</div>";
        Z.innerHTML = Fe += "</div>";
        this._rendered.push(Z.firstChild);
        c.appendChild(Z.firstChild);
      }
    };
    i._locate_event = function (o) {
      for (var c = null; o && !c && o.getAttribute;) {
        c = o.getAttribute(this.config.event_attribute);
        o = o.parentNode;
      }
      return c;
    };
    i.edit = function (o) {
      if (this._edit_id != o) {
        this.editStop(false, o);
        this._edit_id = o;
        this.updateEvent(o);
      }
    };
    i.editStop = function (o, c) {
      if (!c || this._edit_id != c) {
        var h = this.getEvent(this._edit_id);
        if (h) {
          if (o) {
            h.text = this._editor.value;
          }
          this._edit_id = null;
          this._editor = null;
          this.updateEvent(h.id);
          this._edit_stop_event(h, o);
        }
      }
    };
    i._edit_stop_event = function (o, c) {
      if (this._new_event) {
        if (c) {
          this.callEvent("onEventAdded", [o.id, o]);
        } else if (o) {
          this.deleteEvent(o.id, true);
        }
        this._new_event = null;
      } else if (c) {
        this.callEvent("onEventChanged", [o.id, o]);
      }
    };
    i.getEvents = function (o, c) {
      var h = [];
      for (var D in this._events) {
        var V = this._events[D];
        if (V && (!o && !c || V.start_date < c && V.end_date > o)) {
          h.push(V);
        }
      }
      return h;
    };
    i.getRenderedEvent = function (o) {
      if (o) {
        for (var c = i._rendered, h = 0; h < c.length; h++) {
          var D = c[h];
          if (D.getAttribute(i.config.event_attribute) == o) {
            return D;
          }
        }
        return null;
      }
    };
    i.showEvent = function (o, c) {
      if (o && Qe(o) === "object") {
        c = o.mode;
        oe = o.section;
        o = o.section;
      }
      var h = typeof o == "number" || typeof o == "string" ? i.getEvent(o) : o;
      c = c || i._mode;
      if (h && (!this.checkEvent("onBeforeEventDisplay") || this.callEvent("onBeforeEventDisplay", [h, c]))) {
        var D = i.config.scroll_hour;
        i.config.scroll_hour = h.start_date.getHours();
        var V = i.config.preserve_scroll;
        i.config.preserve_scroll = false;
        var T = h.color;
        var W = h.textColor;
        if (i.config.highlight_displayed_event) {
          h.color = i.config.displayed_event_color;
          h.textColor = i.config.displayed_event_text_color;
        }
        i.setCurrentView(new Date(h.start_date), c);
        i.config.scroll_hour = D;
        i.config.preserve_scroll = V;
        if (i.matrix && i.matrix[c]) {
          var z = i.getView();
          var Z = z.y_property;
          var re = i.getEvent(h.id);
          if (re) {
            if (!oe) {
              var oe = re[Z];
              if (Array.isArray(oe)) {
                oe = oe[0];
              } else if (typeof oe == "string" && i.config.section_delimiter && oe.indexOf(i.config.section_delimiter) > -1) {
                oe = oe.split(i.config.section_delimiter)[0];
              }
            }
            var _e = z.getSectionTop(oe);
            var he = z.posFromDate(re.start_date);
            var be = i.$container.querySelector(".dhx_timeline_data_wrapper");
            he -= (be.offsetWidth - z.dx) / 2;
            _e = _e - be.offsetHeight / 2 + z.dy / 2;
            if (z._smartRenderingEnabled()) {
              var Ae = z.attachEvent("onScroll", function () {
                He();
                z.detachEvent(Ae);
              });
            }
            z.scrollTo({
              left: he,
              top: _e
            });
            if (!z._smartRenderingEnabled()) {
              He();
            }
          }
        } else {
          He();
        }
        i.callEvent("onAfterEventDisplay", [h, c]);
      }
      function He() {
        h.color = T;
        h.textColor = W;
      }
    };
  })(j);
  (function (i) {
    i._append_drag_marker = function (o) {
      if (!o.parentNode) {
        var c = i._els.dhx_cal_data[0].lastChild;
        var h = i._getClassName(c);
        if (h.indexOf("dhx_scale_holder") < 0 && c.previousSibling) {
          c = c.previousSibling;
        }
        h = i._getClassName(c);
        if (c && h.indexOf("dhx_scale_holder") === 0) {
          c.appendChild(o);
        }
      }
    };
    i._update_marker_position = function (o, c) {
      var h = i._calc_event_y(c, 0);
      o.style.top = h.top + "px";
      o.style.height = h.height + "px";
    };
    i.highlightEventPosition = function (o) {
      var c = document.createElement("div");
      c.setAttribute("event_id", o.id);
      c.setAttribute(this.config.event_attribute, o.id);
      this._rendered.push(c);
      this._update_marker_position(c, o);
      var h = this.templates.drag_marker_class(o.start_date, o.end_date, o);
      var D = this.templates.drag_marker_content(o.start_date, o.end_date, o);
      c.className = "dhx_drag_marker";
      if (h) {
        c.className += " " + h;
      }
      if (D) {
        c.innerHTML = D;
      }
      this._append_drag_marker(c);
    };
  })(j);
  (function ze(t) {
    var a;
    t._loaded = {};
    t._load = function (a, v) {
      if (a = a || this._load_url) {
        var _;
        a += (a.indexOf("?") == -1 ? "?" : "&") + "timeshift=" + new Date().getTimezoneOffset();
        if (this.config.prevent_cache) {
          a += "&uid=" + this.uid();
        }
        v = v || this._date;
        if (this._load_mode) {
          var i = this.templates.load_format;
          for (v = this.date[this._load_mode + "_start"](new Date(v.valueOf())); v > this._min_date;) {
            v = this.date.add(v, -1, this._load_mode);
          }
          _ = v;
          for (var o = true; _ < this._max_date;) {
            _ = this.date.add(_, 1, this._load_mode);
            if (this._loaded[i(v)] && o) {
              v = this.date.add(v, 1, this._load_mode);
            } else {
              o = false;
            }
          }
          var c = _;
          do {
            c = this.date.add(_ = c, -1, this._load_mode);
          } while (c > v && this._loaded[i(c)]);
          if (_ <= v) {
            return false;
          }
          for (t.ajax.get(a + "&from=" + i(v) + "&to=" + i(_), h); v < _;) {
            this._loaded[i(v)] = true;
            v = this.date.add(v, 1, this._load_mode);
          }
        } else {
          t.ajax.get(a, h);
        }
        this.callEvent("onXLS", []);
        this.callEvent("onLoadStart", []);
        return true;
      }
      function h(D) {
        t.on_load(D);
        t.callEvent("onLoadEnd", []);
      }
    };
    t._parsers = {};
    (a = t)._parsers.xml = {
      canParse: function (v, _) {
        if (_.responseXML && _.responseXML.firstChild) {
          return true;
        }
        try {
          var i = a.ajax.parse(_.responseText);
          var o = a.ajax.xmltop("data", i);
          if (o && o.tagName === "data") {
            return true;
          }
        } catch {}
        return false;
      },
      parse: function (v) {
        var _;
        v.xmlDoc.responseXML ||= a.ajax.parse(v.xmlDoc.responseText);
        if ((_ = a.ajax.xmltop("data", v.xmlDoc)).tagName != "data") {
          return null;
        }
        var i = _.getAttribute("dhx_security");
        if (i) {
          if (window.dhtmlx) {
            window.dhtmlx.security_key = i;
          }
          a.security_key = i;
        }
        for (var o = a.ajax.xpath("//coll_options", v.xmlDoc), c = 0; c < o.length; c++) {
          var h = o[c].getAttribute("for");
          var D = a.serverList[h];
          if (!D) {
            a.serverList[h] = D = [];
          }
          D.splice(0, D.length);
          for (var V = a.ajax.xpath(".//item", o[c]), T = 0; T < V.length; T++) {
            for (var W = V[T].attributes, z = {
                key: V[T].getAttribute("value"),
                label: V[T].getAttribute("label")
              }, Z = 0; Z < W.length; Z++) {
              var re = W[Z];
              if (re.nodeName != "value" && re.nodeName != "label") {
                z[re.nodeName] = re.nodeValue;
              }
            }
            D.push(z);
          }
        }
        if (o.length) {
          a.callEvent("onOptionsLoad", []);
        }
        var oe = a.ajax.xpath("//userdata", v.xmlDoc);
        for (c = 0; c < oe.length; c++) {
          var _e = a._xmlNodeToJSON(oe[c]);
          a._userdata[_e.name] = _e.text;
        }
        var he = [];
        _ = a.ajax.xpath("//event", v.xmlDoc);
        c = 0;
        for (; c < _.length; c++) {
          var be = he[c] = a._xmlNodeToJSON(_[c]);
          a._init_event(be);
        }
        return he;
      }
    };
    (function (a) {
      a.json = a._parsers.json = {
        canParse: function (v) {
          if (v && ae(v) === "object") {
            return true;
          }
          if (typeof v == "string") {
            try {
              var _ = JSON.parse(v);
              return Object.prototype.toString.call(_) === "[object Object]" || Object.prototype.toString.call(_) === "[object Array]";
            } catch {
              return false;
            }
          }
          return false;
        },
        parse: function (v) {
          var _ = [];
          if (typeof v == "string") {
            v = JSON.parse(v);
          }
          if (Object.prototype.toString.call(v) === "[object Array]") {
            _ = v;
          } else if (v) {
            if (v.events) {
              _ = v.events;
            } else if (v.data) {
              _ = v.data;
            }
          }
          _ = _ || [];
          if (v.dhx_security) {
            if (window.dhtmlx) {
              window.dhtmlx.security_key = v.dhx_security;
            }
            a.security_key = v.dhx_security;
          }
          var i = v && v.collections ? v.collections : {};
          var o = false;
          for (var c in i) {
            if (i.hasOwnProperty(c)) {
              o = true;
              var h = i[c];
              var D = a.serverList[c];
              if (!D) {
                a.serverList[c] = D = [];
              }
              D.splice(0, D.length);
              for (var V = 0; V < h.length; V++) {
                var T = h[V];
                var W = {
                  key: T.value,
                  label: T.label
                };
                for (var z in T) {
                  if (T.hasOwnProperty(z)) {
                    if (z == "value" || z == "label") {
                      continue;
                    }
                    W[z] = T[z];
                  }
                }
                D.push(W);
              }
            }
          }
          if (o) {
            a.callEvent("onOptionsLoad", []);
          }
          for (var Z = [], re = 0; re < _.length; re++) {
            var oe = _[re];
            a._init_event(oe);
            Z.push(oe);
          }
          return Z;
        }
      };
    })(t);
    (function (a) {
      a.ical = a._parsers.ical = {
        canParse: function (v) {
          return typeof v == "string" && new RegExp("^BEGIN:VCALENDAR").test(v);
        },
        parse: function (v) {
          var _ = v.match(RegExp(this.c_start + "[^\f]*" + this.c_end, ""));
          if (_.length) {
            _[0] = _[0].replace(/[\r\n]+ /g, "");
            _[0] = _[0].replace(/[\r\n]+(?=[a-z \t])/g, " ");
            _[0] = _[0].replace(/;[^:\r\n]*:/g, ":");
            for (var i, o = [], c = RegExp("(?:" + this.e_start + ")([^\f]*?)(?:" + this.e_end + ")", "g"); (i = c.exec(_)) !== null;) {
              for (var h, D = {}, V = /[^\r\n]+[\r\n]+/g; (h = V.exec(i[1])) !== null;) {
                this.parse_param(h.toString(), D);
              }
              if (D.uid && !D.id) {
                D.id = D.uid;
              }
              o.push(D);
            }
            return o;
          }
        },
        parse_param: function (v, _) {
          var i = v.indexOf(":");
          if (i != -1) {
            var o = v.substr(0, i).toLowerCase();
            var c = v.substr(i + 1).replace(/\\,/g, ",").replace(/[\r\n]+$/, "");
            if (o == "summary") {
              o = "text";
            } else if (o == "dtstart") {
              o = "start_date";
              c = this.parse_date(c, 0, 0);
            } else if (o == "dtend") {
              o = "end_date";
              c = this.parse_date(c, 0, 0);
            }
            _[o] = c;
          }
        },
        parse_date: function (v, _, i) {
          var o = v.split("T");
          var c = false;
          if (o[1]) {
            _ = o[1].substr(0, 2);
            i = o[1].substr(2, 2);
            c = o[1][6] == "Z";
          }
          var h = o[0].substr(0, 4);
          var D = parseInt(o[0].substr(4, 2), 10) - 1;
          var V = o[0].substr(6, 2);
          if (a.config.server_utc || c) {
            return new Date(Date.UTC(h, D, V, _, i));
          } else {
            return new Date(h, D, V, _, i);
          }
        },
        c_start: "BEGIN:VCALENDAR",
        e_start: "BEGIN:VEVENT",
        e_end: "END:VEVENT",
        c_end: "END:VCALENDAR"
      };
    })(t);
    t.on_load = function (a) {
      var v;
      this.callEvent("onBeforeParse", []);
      var _ = false;
      var i = false;
      for (var o in this._parsers) {
        var c = this._parsers[o];
        if (c.canParse(a.xmlDoc.responseText, a.xmlDoc)) {
          try {
            var h = a.xmlDoc.responseText;
            if (o === "xml") {
              h = a;
            }
            if (!(v = c.parse(h))) {
              _ = true;
            }
          } catch {
            _ = true;
          }
          i = true;
          break;
        }
      }
      if (!i) {
        if (this._process && this[this._process]) {
          try {
            v = this[this._process].parse(a.xmlDoc.responseText);
          } catch {
            _ = true;
          }
        } else {
          _ = true;
        }
      }
      if (_ || a.xmlDoc.status && a.xmlDoc.status >= 400) {
        this.callEvent("onLoadError", [a.xmlDoc]);
        v = [];
      }
      this._process_loading(v);
      this.callEvent("onXLE", []);
      this.callEvent("onParse", []);
    };
    t._process_loading = function (a) {
      this._loading = true;
      this._not_render = true;
      for (var v = 0; v < a.length; v++) {
        if (this.callEvent("onEventLoading", [a[v]])) {
          this.addEvent(a[v]);
        }
      }
      this._not_render = false;
      if (this._render_wait) {
        this.render_view_data();
      }
      this._loading = false;
      if (this._after_call) {
        this._after_call();
      }
      this._after_call = null;
    };
    t._init_event = function (a) {
      a.text = a.text || a._tagvalue || "";
      a.start_date = t._init_date(a.start_date);
      a.end_date = t._init_date(a.end_date);
    };
    t._init_date = function (a) {
      if (a) {
        if (typeof a == "string") {
          return t._helpers.parseDate(a);
        } else {
          return new Date(a);
        }
      } else {
        return null;
      }
    };
    var j = _default2(t);
    t.serialize = function () {
      var a = [];
      var v = j();
      for (var _ in v) {
        var i = {};
        var o = v[_];
        for (var c in o) {
          if (c.charAt(0) != "$" && c.charAt(0) != "_") {
            var h;
            var D = o[c];
            h = t.utils.isDate(D) ? t.defined(t.templates.xml_format) ? t.templates.xml_format(D) : t.templates.format_date(D) : D;
            i[c] = h;
          }
        }
        a.push(i);
      }
      return a;
    };
    t.parse = function (a, v) {
      this._process = v;
      this.on_load({
        xmlDoc: {
          responseText: a
        }
      });
    };
    t.load = function (a, v) {
      if (typeof v == "string") {
        this._process = v;
        v = arguments[2];
      }
      this._load_url = a;
      this._after_call = v;
      this._load(a, this._date);
    };
    t.setLoadMode = function (a) {
      if (a == "all") {
        a = "";
      }
      this._load_mode = a;
    };
    t.serverList = function (a, v) {
      if (v) {
        this.serverList[a] = v.slice(0);
        return this.serverList[a];
      } else {
        this.serverList[a] = this.serverList[a] || [];
        return this.serverList[a];
      }
    };
    t._userdata = {};
    t._xmlNodeToJSON = function (a) {
      for (var v = {}, _ = 0; _ < a.attributes.length; _++) {
        v[a.attributes[_].name] = a.attributes[_].value;
      }
      for (_ = 0; _ < a.childNodes.length; _++) {
        var i = a.childNodes[_];
        if (i.nodeType == 1) {
          v[i.tagName] = i.firstChild ? i.firstChild.nodeValue : "";
        }
      }
      v.text ||= a.firstChild ? a.firstChild.nodeValue : "";
      return v;
    };
    t.attachEvent("onXLS", function () {
      var a;
      if (this.config.show_loading === true) {
        (a = this.config.show_loading = document.createElement("div")).className = "dhx_loading";
        a.style.left = Math.round((this._x - 128) / 2) + "px";
        a.style.top = Math.round((this._y - 15) / 2) + "px";
        this._obj.appendChild(a);
      }
    });
    t.attachEvent("onXLE", function () {
      var a = this.config.show_loading;
      if (a && je(a) == "object") {
        if (a.parentNode) {
          a.parentNode.removeChild(a);
        }
        this.config.show_loading = true;
      }
    });
  })(j);
  (function (i) {
    i._lightbox_controls = {};
    i.formSection = function (o) {
      for (var c = this.config.lightbox.sections, h = 0; h < c.length && c[h].name != o; h++);
      if (h === c.length) {
        return null;
      }
      var D = c[h];
      if (!i._lightbox) {
        i.getLightbox();
      }
      var V = document.getElementById(D.id);
      var T = V.nextSibling;
      var W = {
        section: D,
        header: V,
        node: T,
        getValue: function (Z) {
          return i.form_blocks[D.type].get_value(T, Z || {}, D);
        },
        setValue: function (Z, re) {
          return i.form_blocks[D.type].set_value(T, Z, re || {}, D);
        }
      };
      var z = i._lightbox_controls["get_" + D.type + "_control"];
      if (z) {
        return z(W);
      } else {
        return W;
      }
    };
    i._lightbox_controls.get_template_control = function (o) {
      o.control = o.node;
      return o;
    };
    i._lightbox_controls.get_select_control = function (o) {
      o.control = o.node.getElementsByTagName("select")[0];
      return o;
    };
    i._lightbox_controls.get_textarea_control = function (o) {
      o.control = o.node.getElementsByTagName("textarea")[0];
      return o;
    };
    i._lightbox_controls.get_time_control = function (o) {
      o.control = o.node.getElementsByTagName("select");
      return o;
    };
    i._lightbox_controls.defaults = {
      template: {
        height: 30
      },
      textarea: {
        height: 200
      },
      select: {
        height: 23
      },
      time: {
        height: 20
      }
    };
    i.form_blocks = {
      template: {
        render: function (o) {
          var c = i._lightbox_controls.defaults.template;
          return "<div class='dhx_cal_ltext dhx_cal_template' style='height:" + (o.height || (c ? c.height : 30) || 30) + "px;'></div>";
        },
        set_value: function (o, c, h, D) {
          o.innerHTML = c || "";
        },
        get_value: function (o, c, h) {
          return o.innerHTML || "";
        },
        focus: function (o) {}
      },
      textarea: {
        render: function (o) {
          var c = i._lightbox_controls.defaults.textarea;
          return "<div class='dhx_cal_ltext' style='height:" + (o.height || (c ? c.height : 200) || "130") + "px;'><textarea></textarea></div>";
        },
        set_value: function (o, c, h) {
          i.form_blocks.textarea._get_input(o).value = c || "";
        },
        get_value: function (o, c) {
          return i.form_blocks.textarea._get_input(o).value;
        },
        focus: function (o) {
          var c = i.form_blocks.textarea._get_input(o);
          i._focus(c, true);
        },
        _get_input: function (o) {
          return o.getElementsByTagName("textarea")[0];
        }
      },
      select: {
        render: function (o) {
          for (var c = i._lightbox_controls.defaults.select, D = "<div class='dhx_cal_ltext' style='height:" + (o.height || (c ? c.height : 23) || "23") + "px;'><select style='width:100%;'>", V = 0; V < o.options.length; V++) {
            D += "<option value='" + o.options[V].key + "'>" + o.options[V].label + "</option>";
          }
          return D + "</select></div>";
        },
        set_value: function (o, c, h, D) {
          var V = o.firstChild;
          if (!V._dhx_onchange && D.onchange) {
            i.event(V, "change", D.onchange);
            V._dhx_onchange = true;
          }
          if (c === undefined) {
            c = (V.options[0] || {}).value;
          }
          V.value = c || "";
        },
        get_value: function (o, c) {
          return o.firstChild.value;
        },
        focus: function (o) {
          i._focus(o.firstChild, true);
        }
      },
      time: {
        render: function (o) {
          o.time_format ||= ["%H:%i", "%d", "%m", "%Y"];
          o._time_format_order = {};
          var c = o.time_format;
          var h = i.config;
          var D = i.date.date_part(i._currentDate());
          var V = 1440;
          var T = 0;
          if (i.config.limit_time_select) {
            V = h.last_hour * 60 + 1;
            T = h.first_hour * 60;
            D.setHours(h.first_hour);
          }
          for (var W = "", z = 0; z < c.length; z++) {
            var Z = c[z];
            if (z > 0) {
              W += " ";
            }
            var re = "";
            var oe = "";
            switch (Z) {
              case "%Y":
                var _e;
                var he;
                var be;
                re = "dhx_lightbox_year_select";
                o._time_format_order[3] = z;
                if (o.year_range) {
                  if (isNaN(o.year_range)) {
                    if (o.year_range.push) {
                      he = o.year_range[0];
                      be = o.year_range[1];
                    }
                  } else {
                    _e = o.year_range;
                  }
                }
                _e = _e || 10;
                var Ae = Ae || Math.floor(_e / 2);
                he = he || D.getFullYear() - Ae;
                be = be || he + _e;
                for (var He = he; He < be; He++) {
                  oe += "<option value='" + He + "'>" + He + "</option>";
                }
                break;
              case "%m":
                re = "dhx_lightbox_month_select";
                o._time_format_order[2] = z;
                He = 0;
                for (; He < 12; He++) {
                  oe += "<option value='" + He + "'>" + this.locale.date.month_full[He] + "</option>";
                }
                break;
              case "%d":
                re = "dhx_lightbox_day_select";
                o._time_format_order[1] = z;
                He = 1;
                for (; He < 32; He++) {
                  oe += "<option value='" + He + "'>" + He + "</option>";
                }
                break;
              case "%H:%i":
                re = "dhx_lightbox_time_select";
                o._time_format_order[0] = z;
                He = T;
                var Ne = D.getDate();
                for (o._time_values = []; He < V;) {
                  oe += "<option value='" + He + "'>" + this.templates.time_picker(D) + "</option>";
                  o._time_values.push(He);
                  D.setTime(D.valueOf() + this.config.time_step * 60 * 1000);
                  He = (D.getDate() != Ne ? 1 : 0) * 24 * 60 + D.getHours() * 60 + D.getMinutes();
                }
            }
            if (oe) {
              var Ve = i._waiAria.lightboxSelectAttrString(Z);
              W += "<select class='" + re + "' " + (o.readonly ? "disabled='disabled'" : "") + Ve + ">" + oe + "</select> ";
            }
          }
          var Se = i._lightbox_controls.defaults.select;
          return "<div style='height:" + (o.height || (Se ? Se.height : 23) || 23) + "px;padding-top:0px;font-size:inherit;' class='dhx_section_time'>" + W + "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>" + W + "</div>";
        },
        set_value: function (o, c, h, D) {
          var V;
          var T;
          var W = i.config;
          var z = o.getElementsByTagName("select");
          var Z = D._time_format_order;
          if (W.full_day) {
            if (!o._full_day) {
              var re = "<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> " + i.locale.labels.full_day + "&nbsp;</label></input>";
              if (!i.config.wide_form) {
                re = o.previousSibling.innerHTML + re;
              }
              o.previousSibling.innerHTML = re;
              o._full_day = true;
            }
            var oe = o.previousSibling.getElementsByTagName("input")[0];
            oe.checked = i.date.time_part(h.start_date) === 0 && i.date.time_part(h.end_date) === 0;
            z[Z[0]].disabled = oe.checked;
            z[Z[0] + z.length / 2].disabled = oe.checked;
            if (!oe.$_eventAttached) {
              oe.$_eventAttached = true;
              i.event(oe, "click", function () {
                if (oe.checked) {
                  var Ae = {};
                  i.form_blocks.time.get_value(o, Ae, D);
                  V = i.date.date_part(Ae.start_date);
                  if (+(T = i.date.date_part(Ae.end_date)) == +V || +T >= +V && (h.end_date.getHours() !== 0 || h.end_date.getMinutes() !== 0)) {
                    T = i.date.add(T, 1, "day");
                  }
                } else {
                  V = null;
                  T = null;
                }
                z[Z[0]].disabled = oe.checked;
                z[Z[0] + z.length / 2].disabled = oe.checked;
                be(z, 0, V || h.start_date);
                be(z, 4, T || h.end_date);
              });
            }
          }
          if (W.auto_end_date && W.event_duration) {
            for (var _e = function () {
                if (W.auto_end_date && W.event_duration) {
                  V = new Date(z[Z[3]].value, z[Z[2]].value, z[Z[1]].value, 0, z[Z[0]].value);
                  T = new Date(V.getTime() + i.config.event_duration * 60 * 1000);
                  be(z, 4, T);
                }
              }, he = 0; he < 4; he++) {
              if (!z[he].$_eventAttached) {
                z[he].$_eventAttached = true;
                i.event(z[he], "change", _e);
              }
            }
          }
          function be(Ae, He, Ne) {
            for (var Ve = D._time_values, Se = Ne.getHours() * 60 + Ne.getMinutes(), Fe = Se, Oe = false, at = 0; at < Ve.length; at++) {
              var ht = Ve[at];
              if (ht === Se) {
                Oe = true;
                break;
              }
              if (ht < Se) {
                Fe = ht;
              }
            }
            Ae[He + Z[0]].value = Oe ? Se : Fe;
            if (!Oe && !Fe) {
              Ae[He + Z[0]].selectedIndex = -1;
            }
            Ae[He + Z[1]].value = Ne.getDate();
            Ae[He + Z[2]].value = Ne.getMonth();
            Ae[He + Z[3]].value = Ne.getFullYear();
          }
          be(z, 0, h.start_date);
          be(z, 4, h.end_date);
        },
        get_value: function (o, c, h) {
          var D = o.getElementsByTagName("select");
          var V = h._time_format_order;
          c.start_date = new Date(D[V[3]].value, D[V[2]].value, D[V[1]].value, 0, D[V[0]].value);
          c.end_date = new Date(D[V[3] + 4].value, D[V[2] + 4].value, D[V[1] + 4].value, 0, D[V[0] + 4].value);
          if (!D[V[3]].value || !D[V[3] + 4].value) {
            var T = i.getEvent(i._lightbox_id);
            if (T) {
              c.start_date = T.start_date;
              c.end_date = T.end_date;
            }
          }
          if (c.end_date <= c.start_date) {
            c.end_date = i.date.add(c.start_date, i.config.time_step, "minute");
          }
          return {
            start_date: new Date(c.start_date),
            end_date: new Date(c.end_date)
          };
        },
        focus: function (o) {
          i._focus(o.getElementsByTagName("select")[0]);
        }
      }
    };
    i._setLbPosition = function (o) {
      if (o) {
        var c = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        var h = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft;
        var D = window.innerHeight || document.documentElement.clientHeight;
        o.style.top = c ? Math.round(c + Math.max((D - o.offsetHeight) / 2, 0)) + "px" : Math.round(Math.max((D - o.offsetHeight) / 2, 0) + 9) + "px";
        o.style.left = document.documentElement.scrollWidth > document.body.offsetWidth ? Math.round(h + (document.body.offsetWidth - o.offsetWidth) / 2) + "px" : Math.round((document.body.offsetWidth - o.offsetWidth) / 2) + "px";
      }
    };
    i.showCover = function (o) {
      if (o) {
        o.style.display = "block";
        this._setLbPosition(o);
      }
      if (i.config.responsive_lightbox) {
        document.documentElement.classList.add("dhx_cal_overflow_container");
        document.body.classList.add("dhx_cal_overflow_container");
      }
      this.show_cover();
    };
    i.showLightbox = function (o) {
      if (o) {
        if (this.callEvent("onBeforeLightbox", [o])) {
          var c = this.getLightbox();
          this.showCover(c);
          this._fill_lightbox(o, c);
          this._waiAria.lightboxVisibleAttr(c);
          this.callEvent("onLightbox", [o]);
        } else {
          this._new_event &&= null;
        }
      }
    };
    i._fill_lightbox = function (o, c) {
      var h = this.getEvent(o);
      var D = c.getElementsByTagName("span");
      var V = [];
      if (i.templates.lightbox_header) {
        V.push("");
        var T = i.templates.lightbox_header(h.start_date, h.end_date, h);
        V.push(T);
        D[1].innerHTML = "";
        D[2].innerHTML = T;
      } else {
        var W = this.templates.event_header(h.start_date, h.end_date, h);
        var z = (this.templates.event_bar_text(h.start_date, h.end_date, h) || "").substr(0, 70);
        V.push(W);
        V.push(z);
        D[1].innerHTML = W;
        D[2].innerHTML = z;
      }
      this._waiAria.lightboxHeader(c, V.join(" "));
      for (var Z = this.config.lightbox.sections, re = 0; re < Z.length; re++) {
        var oe = Z[re];
        var _e = i._get_lightbox_section_node(oe);
        var he = this.form_blocks[oe.type];
        he.set_value.call(this, _e, h[oe.map_to] !== undefined ? h[oe.map_to] : oe.default_value, h, oe);
        if (Z[re].focus) {
          he.focus.call(this, _e);
        }
      }
      i._lightbox_id = o;
    };
    i._get_lightbox_section_node = function (o) {
      return document.getElementById(o.id).nextSibling;
    };
    i._lightbox_out = function (o) {
      for (var c = this.config.lightbox.sections, h = 0; h < c.length; h++) {
        var D = document.getElementById(c[h].id);
        var V = this.form_blocks[c[h].type].get_value.call(this, D = D && D.nextSibling, o, c[h]);
        if (c[h].map_to != "auto") {
          o[c[h].map_to] = V;
        }
      }
      return o;
    };
    i._empty_lightbox = function (o) {
      var h = this.getEvent(i._lightbox_id);
      this._lame_copy(h, o);
      this.setEvent(h.id, h);
      this._edit_stop_event(h, true);
      this.render_view_data();
    };
    i.hide_lightbox = function (o) {
      i.endLightbox(false, this.getLightbox());
    };
    i.hideCover = function (o) {
      if (o) {
        o.style.display = "none";
      }
      this.hide_cover();
      if (i.config.responsive_lightbox) {
        document.documentElement.classList.remove("dhx_cal_overflow_container");
        document.body.classList.remove("dhx_cal_overflow_container");
      }
    };
    i.hide_cover = function () {
      if (this._cover) {
        this._cover.parentNode.removeChild(this._cover);
      }
      this._cover = null;
    };
    i.show_cover = function () {
      if (!this._cover) {
        this._cover = document.createElement("div");
        this._cover.className = "dhx_cal_cover";
        document.body.appendChild(this._cover);
      }
    };
    i.save_lightbox = function () {
      var o = this._lightbox_out({}, this._lame_copy(this.getEvent(this._lightbox_id)));
      if (!this.checkEvent("onEventSave") || !!this.callEvent("onEventSave", [this._lightbox_id, o, this._new_event])) {
        this._empty_lightbox(o);
        this.hide_lightbox();
      }
    };
    i.startLightbox = function (o, c) {
      this._lightbox_id = o;
      this._custom_lightbox = true;
      this._temp_lightbox = this._lightbox;
      this._lightbox = c;
      this.showCover(c);
    };
    i.endLightbox = function (o, c) {
      c = c || i.getLightbox();
      var h = i.getEvent(this._lightbox_id);
      if (h) {
        this._edit_stop_event(h, o);
      }
      if (o) {
        i.render_view_data();
      }
      this.hideCover(c);
      if (this._custom_lightbox) {
        this._lightbox = this._temp_lightbox;
        this._custom_lightbox = false;
      }
      this._temp_lightbox = this._lightbox_id = null;
      this._waiAria.lightboxHiddenAttr(c);
      this.callEvent("onAfterLightbox", []);
    };
    i.resetLightbox = function () {
      if (i._lightbox && !i._custom_lightbox) {
        i._lightbox.parentNode.removeChild(i._lightbox);
      }
      i._lightbox = null;
    };
    i.cancel_lightbox = function () {
      if (this._lightbox_id) {
        this.callEvent("onEventCancel", [this._lightbox_id, !!this._new_event]);
      }
      this.hide_lightbox();
    };
    i.hideLightbox = i.cancel_lightbox;
    i._init_lightbox_events = function () {
      if (!this.getLightbox().$_eventAttached) {
        var o = this.getLightbox();
        o.$_eventAttached = true;
        i.event(o, "click", function (c) {
          var h = i.$domHelpers.closest(c.target, ".dhx_btn_set");
          if (h) {
            var D = h ? h.getAttribute("data-action") : null;
            switch (D) {
              case "dhx_save_btn":
              case "save":
                if (i.config.readonly_active) {
                  return;
                }
                i.save_lightbox();
                break;
              case "dhx_delete_btn":
              case "delete":
                if (i.config.readonly_active) {
                  return;
                }
                i._dhtmlx_confirm(i.locale.labels.confirm_deleting, i.locale.labels.title_confirm_deleting, function () {
                  i.deleteEvent(i._lightbox_id);
                  i._new_event = null;
                  i.hide_lightbox();
                });
                break;
              case "dhx_cancel_btn":
              case "cancel":
                i.cancel_lightbox();
                break;
              default:
                i.callEvent("onLightboxButton", [D, h, c]);
            }
          } else {
            var T = i.$domHelpers.closest(c.target, ".dhx_custom_button[data-section-index]");
            if (T) {
              var W = Number(T.getAttribute("data-section-index"));
              i.form_blocks[i.config.lightbox.sections[W].type].button_click(i.$domHelpers.closest(T, ".dhx_cal_lsection"), T, c);
            }
          }
        });
        i.event(o, "keydown", function (c) {
          var h = c || window.event;
          var D = c.target || c.srcElement;
          var V = D.querySelector("[dhx_button]");
          V ||= D.parentNode.querySelector(".dhx_custom_button, .dhx_readonly");
          switch ((c || h).keyCode) {
            case 32:
              if ((c || h).shiftKey) {
                return;
              }
              if (V && V.click) {
                V.click();
              }
              break;
            case i.keys.edit_save:
              if ((c || h).shiftKey) {
                return;
              }
              if (V && V.click) {
                V.click();
              } else {
                if (i.config.readonly_active) {
                  return;
                }
                i.save_lightbox();
              }
              break;
            case i.keys.edit_cancel:
              i.cancel_lightbox();
          }
        });
      }
    };
    i.setLightboxSize = function () {
      var o = this._lightbox;
      if (o) {
        var c = o.childNodes[1];
        c.style.height = "0px";
        c.style.height = c.scrollHeight + "px";
        o.style.height = c.scrollHeight + i.xy.lightbox_additional_height + "px";
        c.style.height = c.scrollHeight + "px";
      }
    };
    i._init_dnd_events = function () {
      i.event(document.body, "mousemove", i._move_while_dnd);
      i.event(document.body, "mouseup", i._finish_dnd);
      i._init_dnd_events = function () {};
    };
    i._move_while_dnd = function (o) {
      if (i._dnd_start_lb) {
        if (!document.dhx_unselectable) {
          document.body.className += " dhx_unselectable";
          document.dhx_unselectable = true;
        }
        var c = i.getLightbox();
        var h = [o.pageX, o.pageY];
        c.style.top = i._lb_start[1] + h[1] - i._dnd_start_lb[1] + "px";
        c.style.left = i._lb_start[0] + h[0] - i._dnd_start_lb[0] + "px";
      }
    };
    i._ready_to_dnd = function (o) {
      var c = i.getLightbox();
      i._lb_start = [parseInt(c.style.left, 10), parseInt(c.style.top, 10)];
      i._dnd_start_lb = [o.pageX, o.pageY];
    };
    i._finish_dnd = function () {
      if (i._lb_start) {
        i._lb_start = i._dnd_start_lb = false;
        document.body.className = document.body.className.replace(" dhx_unselectable", "");
        document.dhx_unselectable = false;
      }
    };
    i.getLightbox = function () {
      if (!this._lightbox) {
        var o = document.createElement("div");
        o.className = "dhx_cal_light";
        if (i.config.wide_form) {
          o.className += " dhx_cal_light_wide";
        }
        if (i.form_blocks.recurring) {
          o.className += " dhx_cal_light_rec";
        }
        if (i.config.rtl) {
          o.className += " dhx_cal_light_rtl";
        }
        if (i.config.responsive_lightbox) {
          o.className += " dhx_cal_light_responsive";
        }
        o.style.visibility = "hidden";
        for (var c = this._lightbox_template, h = this.config.buttons_left, D = 0; D < h.length; D++) {
          c += "<div " + this._waiAria.lightboxButtonAttrString(h[D]) + " data-action='" + h[D] + "' class='dhx_btn_set dhx_" + (i.config.rtl ? "right" : "left") + "_btn_set " + h[D] + "_set'><div class='" + h[D] + "'></div><div>" + i.locale.labels[h[D]] + "</div></div>";
        }
        h = this.config.buttons_right;
        var V = i.config.rtl;
        for (D = 0; D < h.length; D++) {
          c += "<div " + this._waiAria.lightboxButtonAttrString(h[D]) + " data-action='" + h[D] + "' class='dhx_btn_set dhx_" + (V ? "left" : "right") + "_btn_set " + h[D] + "_set' style='float:" + (V ? "left" : "right") + ";'><div class='" + h[D] + "'></div><div>" + i.locale.labels[h[D]] + "</div></div>";
        }
        o.innerHTML = c += "</div>";
        if (i.config.drag_lightbox) {
          i.event(o.firstChild, "mousedown", i._ready_to_dnd);
          i.event(o.firstChild, "selectstart", function (_e) {
            _e.preventDefault();
            return false;
          });
          o.firstChild.style.cursor = "move";
          i._init_dnd_events();
        }
        this._waiAria.lightboxAttr(o);
        document.body.insertBefore(o, document.body.firstChild);
        this._lightbox = o;
        var T = this.config.lightbox.sections;
        c = "";
        D = 0;
        for (; D < T.length; D++) {
          var W = this.form_blocks[T[D].type];
          if (W) {
            T[D].id = "area_" + this.uid();
            var z = "";
            if (T[D].button) {
              z = "<div " + i._waiAria.lightboxSectionButtonAttrString(this.locale.labels["button_" + T[D].button]) + " class='dhx_custom_button' data-section-index='" + D + "' index='" + D + "'><div class='dhx_custom_button_" + T[D].button + "'></div><div>" + this.locale.labels["button_" + T[D].button] + "</div></div>";
            }
            if (this.config.wide_form) {
              c += "<div class='dhx_wrap_section'>";
            }
            var Z = this.locale.labels["section_" + T[D].name];
            if (typeof Z != "string") {
              Z = T[D].name;
            }
            c += "<div id='" + T[D].id + "' class='dhx_cal_lsection'>" + z + "<label>" + Z + "</label></div>" + W.render.call(this, T[D]);
            c += "</div>";
          }
        }
        var re = o.getElementsByTagName("div");
        for (D = 0; D < re.length; D++) {
          var oe = re[D];
          if (i._getClassName(oe) == "dhx_cal_larea") {
            oe.innerHTML = c;
            break;
          }
        }
        i._bindLightboxLabels(T);
        this.setLightboxSize();
        this._init_lightbox_events(this);
        o.style.display = "none";
        o.style.visibility = "visible";
      }
      return this._lightbox;
    };
    i._bindLightboxLabels = function (o) {
      for (var c = 0; c < o.length; c++) {
        var h = o[c];
        if (h.id && document.getElementById(h.id)) {
          for (var D = document.getElementById(h.id).querySelector("label"), V = i._get_lightbox_section_node(h); V && !V.querySelector;) {
            V = V.nextSibling;
          }
          var T = true;
          if (V) {
            var W = V.querySelector("input, select, textarea");
            if (W) {
              h.inputId = W.id || "input_" + i.uid();
              W.id ||= h.inputId;
              D.setAttribute("for", h.inputId);
              T = false;
            }
          }
          if (T && i.form_blocks[h.type].focus) {
            i.event(D, "click", function (z) {
              return function () {
                var Z = i.form_blocks[z.type];
                var re = i._get_lightbox_section_node(z);
                if (Z && Z.focus) {
                  Z.focus.call(i, re);
                }
              };
            }(h));
          }
        }
      }
    };
    i.attachEvent("onEventIdChange", function (o, c) {
      if (this._lightbox_id == o) {
        this._lightbox_id = c;
      }
    });
    i._lightbox_template = "<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div>";
  })(j);
  (function we(t) {
    t._init_touch_events = function () {
      if (this.config.touch && (navigator.userAgent.indexOf("Mobile") != -1 || navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1 || navigator.userAgent.indexOf("Touch") != -1) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
        this.xy.scroll_width = 0;
        this._mobile = true;
      }
      if (this.config.touch) {
        var j = true;
        try {
          document.createEvent("TouchEvent");
        } catch {
          j = false;
        }
        if (j) {
          this._touch_events(["touchmove", "touchstart", "touchend"], function (a) {
            if (a.touches && a.touches.length > 1) {
              return null;
            } else if (a.touches[0]) {
              return {
                target: a.target,
                pageX: a.touches[0].pageX,
                pageY: a.touches[0].pageY,
                clientX: a.touches[0].clientX,
                clientY: a.touches[0].clientY
              };
            } else {
              return a;
            }
          }, function () {
            return false;
          });
        } else if (window.PointerEvent || window.navigator.pointerEnabled) {
          this._touch_events(["pointermove", "pointerdown", "pointerup"], function (a) {
            if (a.pointerType == "mouse") {
              return null;
            } else {
              return a;
            }
          }, function (a) {
            return !a || a.pointerType == "mouse";
          });
        } else if (window.navigator.msPointerEnabled) {
          this._touch_events(["MSPointerMove", "MSPointerDown", "MSPointerUp"], function (a) {
            if (a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
              return null;
            } else {
              return a;
            }
          }, function (a) {
            return !a || a.pointerType == a.MSPOINTER_TYPE_MOUSE;
          });
        }
      }
    };
    t._touch_events = function (j, a, v) {
      var _;
      var i;
      var o;
      var c;
      var h;
      var D;
      var V = 0;
      function T(z, Z, re) {
        z.addEventListener(Z, function (oe) {
          return !!t._is_lightbox_open() || (v(oe) ? undefined : re(oe));
        }, {
          passive: false
        });
      }
      function W(z) {
        if (!v(z)) {
          t._hide_global_tip();
          if (c) {
            t._on_mouse_up(a(z));
            t._temp_touch_block = false;
          }
          t._drag_id = null;
          t._drag_mode = null;
          t._drag_pos = null;
          t._pointerDragId = null;
          clearTimeout(o);
          c = D = false;
          h = true;
        }
      }
      T(document.body, j[0], function (z) {
        if (!v(z)) {
          var Z = a(z);
          if (Z) {
            if (c) {
              (function (re) {
                if (!v(re)) {
                  var oe = t.getState().drag_mode;
                  var _e = !!t.matrix && t.matrix[t._mode];
                  var he = t.render_view_data;
                  if (oe == "create" && _e) {
                    t.render_view_data = function () {
                      for (var be = t.getState().drag_id, Ae = t.getEvent(be), He = _e.y_property, Ne = t.getEvents(Ae.start_date, Ae.end_date), Ve = 0; Ve < Ne.length; Ve++) {
                        if (Ne[Ve][He] != Ae[He]) {
                          Ne.splice(Ve, 1);
                          Ve--;
                        }
                      }
                      Ae._sorder = Ne.length - 1;
                      Ae._count = Ne.length;
                      this.render_data([Ae], t.getState().mode);
                    };
                  }
                  t._on_mouse_move(re);
                  if (oe == "create" && _e) {
                    t.render_view_data = he;
                  }
                  if (re.preventDefault) {
                    re.preventDefault();
                  }
                  re.cancelBubble = true;
                }
              })(Z);
              if (z.preventDefault) {
                z.preventDefault();
              }
              z.cancelBubble = true;
              t._update_global_tip();
              return false;
            }
            i = a(z);
            if (D) {
              if (i) {
                if (_.target != i.target || Math.abs(_.pageX - i.pageX) > 5 || Math.abs(_.pageY - i.pageY) > 5) {
                  h = true;
                  clearTimeout(o);
                }
              } else {
                h = true;
              }
            }
          }
        }
      });
      T(this._els.dhx_cal_data[0], "touchcancel", W);
      T(this._els.dhx_cal_data[0], "contextmenu", function (z) {
        if (!v(z)) {
          if (D) {
            if (z && z.preventDefault) {
              z.preventDefault();
            }
            z.cancelBubble = true;
            return false;
          } else {
            return undefined;
          }
        }
      });
      T(this._obj, j[1], function (z) {
        var Z;
        if (document && document.body) {
          document.body.classList.add("dhx_cal_touch_active");
        }
        if (!v(z)) {
          t._pointerDragId = z.pointerId;
          c = h = false;
          D = true;
          if (Z = i = a(z)) {
            var re = new Date();
            if (!h && !c && re - V < 250) {
              t._click.dhx_cal_data(Z);
              window.setTimeout(function () {
                Z.type = "dblclick";
                t._on_dbl_click(Z);
              }, 50);
              if (z.preventDefault) {
                z.preventDefault();
              }
              z.cancelBubble = true;
              t._block_next_stop = true;
              return false;
            }
            V = re;
            if (!h && !c && t.config.touch_drag) {
              var oe = t._locate_event(document.activeElement);
              var _e = t._locate_event(Z.target);
              var he = _ ? t._locate_event(_.target) : null;
              if (oe && _e && oe == _e && oe != he) {
                if (z.preventDefault) {
                  z.preventDefault();
                }
                z.cancelBubble = true;
                t._ignore_next_click = false;
                t._click.dhx_cal_data(Z);
                _ = Z;
                return false;
              }
              o = setTimeout(function () {
                c = true;
                var be = _.target;
                var Ae = t._getClassName(be);
                if (be && Ae.indexOf("dhx_body") != -1) {
                  be = be.previousSibling;
                }
                t._on_mouse_down(_, be);
                if (t._drag_mode && t._drag_mode != "create") {
                  t.for_rendered(t._drag_id, function (He, Ne) {
                    He.style.display = "none";
                    t._rendered.splice(Ne, 1);
                  });
                }
                if (t.config.touch_tip) {
                  t._show_global_tip();
                }
                t.updateEvent(t._drag_id);
              }, t.config.touch_drag);
              _ = Z;
            }
          } else {
            h = true;
          }
        }
      });
      T(this._els.dhx_cal_data[0], j[2], function (z) {
        if (document && document.body) {
          document.body.classList.remove("dhx_cal_touch_active");
        }
        if (!v(z)) {
          if (t.config.touch_swipe_dates && !c && function (Z, re, oe, _e) {
            if (!Z || !re) {
              return false;
            }
            for (var he = Z.target; he && he != t._obj;) {
              he = he.parentNode;
            }
            if (he != t._obj || t.matrix && t.matrix[t.getState().mode] && t.matrix[t.getState().mode].scrollable) {
              return false;
            }
            var be = Math.abs(Z.pageY - re.pageY);
            var Ae = Math.abs(Z.pageX - re.pageX);
            return be < 100 && Ae > 200 && (!be || Ae / be > 3) && (Z.pageX > re.pageX ? t._click.dhx_cal_next_button() : t._click.dhx_cal_prev_button(), true);
          }(_, i)) {
            t._block_next_stop = true;
          }
          if (c) {
            t._ignore_next_click = true;
            setTimeout(function () {
              t._ignore_next_click = false;
            }, 100);
          }
          W(z);
          if (t._block_next_stop) {
            t._block_next_stop = false;
            if (z.preventDefault) {
              z.preventDefault();
            }
            z.cancelBubble = true;
            return false;
          } else {
            return undefined;
          }
        }
      });
      t.event(document.body, j[2], W);
    };
    t._show_global_tip = function () {
      t._hide_global_tip();
      var j = t._global_tip = document.createElement("div");
      j.className = "dhx_global_tip";
      t._update_global_tip(1);
      document.body.appendChild(j);
    };
    t._update_global_tip = function (j) {
      var a = t._global_tip;
      if (a) {
        var v = "";
        if (t._drag_id && !j) {
          var _ = t.getEvent(t._drag_id);
          if (_) {
            v = "<div>" + (_._timed ? t.templates.event_header(_.start_date, _.end_date, _) : t.templates.day_date(_.start_date, _.end_date, _)) + "</div>";
          }
        }
        a.innerHTML = t._drag_mode == "create" || t._drag_mode == "new-size" ? (t.locale.labels.drag_to_create || "Drag to create") + v : (t.locale.labels.drag_to_move || "Drag to move") + v;
      }
    };
    t._hide_global_tip = function () {
      var j = t._global_tip;
      if (j && j.parentNode) {
        j.parentNode.removeChild(j);
        t._global_tip = 0;
      }
    };
  })(j);
  (function (i) {
    i.getRootView = function () {
      return {
        view: {
          render: function () {
            return {
              tag: "div",
              type: 1,
              attrs: {
                style: "width:100%;height:100%;"
              },
              hooks: {
                didInsert: function () {
                  i.setCurrentView();
                }
              },
              body: [{
                el: this.el,
                type: 1
              }]
            };
          },
          init: function () {
            var o = document.createElement("DIV");
            o.id = "scheduler_" + i.uid();
            o.style.width = "100%";
            o.style.height = "100%";
            o.classList.add("dhx_cal_container");
            o.cmp = "grid";
            o.innerHTML = "<div class=\"dhx_cal_navline\"><div class=\"dhx_cal_prev_button\">&nbsp;</div><div class=\"dhx_cal_next_button\">&nbsp;</div><div class=\"dhx_cal_today_button\"></div><div class=\"dhx_cal_date\"></div><div class=\"dhx_cal_tab\" data-tab=\"day\"></div><div class=\"dhx_cal_tab\" data-tab=\"week\"></div><div class=\"dhx_cal_tab\" data-tab=\"month\"></div></div><div class=\"dhx_cal_header\"></div><div class=\"dhx_cal_data\"></div>";
            i.init(o);
            this.el = o;
          }
        },
        type: 4
      };
    };
  })(j);
  (function Ce(t) {
    var j;
    var a;
    function v() {
      if (t._is_material_skin()) {
        return true;
      }
      if (a !== undefined) {
        return a;
      }
      var i = document.createElement("div");
      i.style.position = "absolute";
      i.style.left = "-9999px";
      i.style.top = "-9999px";
      i.innerHTML = "<div class='dhx_cal_container'><div class='dhx_cal_data'><div class='dhx_cal_event'><div class='dhx_body'></div></div><div>";
      document.body.appendChild(i);
      var o = window.getComputedStyle(i.querySelector(".dhx_body")).getPropertyValue("box-sizing");
      document.body.removeChild(i);
      if (!(a = o === "border-box")) {
        setTimeout(function () {
          a = undefined;
        }, 1000);
      }
    }
    function _() {
      if (!t._is_material_skin() && !t._border_box_events()) {
        var i = a;
        a = undefined;
        j = undefined;
        if (i !== v() && t.$container && t.getState().mode) {
          t.setCurrentView();
        }
      }
    }
    t._skin_settings = {
      fix_tab_position: [1, 0],
      use_select_menu_space: [1, 0],
      wide_form: [1, 0],
      hour_size_px: [44, 42],
      displayed_event_color: ["#ff4a4a", "ffc5ab"],
      displayed_event_text_color: ["#ffef80", "7e2727"]
    };
    t._skin_xy = {
      lightbox_additional_height: [90, 50],
      nav_height: [59, 22],
      bar_height: [24, 20]
    };
    t._is_material_skin = function () {
      if (t.skin) {
        return (t.skin + "").indexOf("material") > -1;
      } else {
        return function () {
          if (j === undefined) {
            var i = document.createElement("div");
            i.style.position = "absolute";
            i.style.left = "-9999px";
            i.style.top = "-9999px";
            i.innerHTML = "<div class='dhx_cal_container'><div class='dhx_cal_scale_placeholder'></div><div>";
            document.body.appendChild(i);
            var c = window.getComputedStyle(i.querySelector(".dhx_cal_scale_placeholder")).getPropertyValue("position");
            j = c === "absolute";
            setTimeout(function () {
              j = null;
            }, 500);
          }
          return j;
        }();
      }
    };
    window.addEventListener("DOMContentLoaded", _);
    window.addEventListener("load", _);
    t._border_box_events = function () {
      return v();
    };
    t._configure = function (i, o, c) {
      for (var h in o) {
        if (i[h] === undefined) {
          i[h] = o[h][c];
        }
      }
    };
    t._skin_init = function () {
      if (!t.skin) {
        for (var i = document.getElementsByTagName("link"), o = 0; o < i.length; o++) {
          var c = i[o].href.match("dhtmlxscheduler_([a-z]+).css");
          if (c) {
            t.skin = c[1];
            break;
          }
        }
      }
      var h = 0;
      if (!!t.skin && (t.skin === "classic" || t.skin === "glossy")) {
        h = 1;
      }
      if (t._is_material_skin()) {
        var D = t.config.buttons_left.$initial;
        var V = t.config.buttons_right.$initial;
        if (D && t.config.buttons_left.slice().join() == D && V && t.config.buttons_right.slice().join() == V) {
          var T = t.config.buttons_left.slice();
          t.config.buttons_left = t.config.buttons_right.slice();
          t.config.buttons_right = T;
        }
        t.xy.event_header_height = 18;
        t.xy.week_agenda_scale_height = 35;
        t.xy.map_icon_width = 38;
        t._lightbox_controls.defaults.textarea.height = 64;
        t._lightbox_controls.defaults.time.height = "auto";
      }
      this._configure(t.config, t._skin_settings, h);
      this._configure(t.xy, t._skin_xy, h);
      if (t.skin === "flat") {
        t.xy.scale_height = 35;
        t.templates.hour_scale = function (z) {
          var Z = z.getMinutes();
          Z = Z < 10 ? "0" + Z : Z;
          return "<span class='dhx_scale_h'>" + z.getHours() + "</span><span class='dhx_scale_m'>&nbsp;" + Z + "</span>";
        };
      }
      if (!h) {
        var W = t.config.minicalendar;
        if (W) {
          W.padding = 14;
        }
        t.templates.event_bar_date = function (z, Z, re) {
          return "• <b>" + t.templates.event_date(z) + "</b> ";
        };
        t.attachEvent("onTemplatesReady", function () {
          var z = t.date.date_to_str("%d");
          t.templates._old_month_day ||= t.templates.month_day;
          var Z = t.templates._old_month_day;
          t.templates.month_day = function (Ve) {
            if (this._mode == "month") {
              var Se = z(Ve);
              if (Ve.getDate() == 1) {
                Se = t.locale.date.month_full[Ve.getMonth()] + " " + Se;
              }
              if (+Ve == +t.date.date_part(this._currentDate())) {
                Se = t.locale.labels.dhx_cal_today_button + " " + Se;
              }
              return Se;
            }
            return Z.call(this, Ve);
          };
          if (t.config.fix_tab_position) {
            var re = t._els.dhx_cal_navline[0].getElementsByTagName("div");
            var oe = null;
            var _e = 211;
            var he = [14, 75, 136];
            var be = 14;
            if (t._is_material_skin()) {
              he = [16, 103, 192];
              _e = 294;
              be = -1;
            }
            for (var Ae = 0; Ae < re.length; Ae++) {
              var He = re[Ae];
              var Ne = He.getAttribute("data-tab") || He.getAttribute("name");
              if (Ne) {
                He.style.right = "auto";
                switch (Ne) {
                  case "day":
                  case "day_tab":
                    He.style.left = he[0] + "px";
                    He.className += " dhx_cal_tab_first";
                    break;
                  case "week":
                  case "week_tab":
                    He.style.left = he[1] + "px";
                    break;
                  case "month":
                  case "month_tab":
                    He.style.left = he[2] + "px";
                    He.className += " dhx_cal_tab_last";
                    break;
                  default:
                    He.style.left = _e + "px";
                    He.className += " dhx_cal_tab_standalone";
                    _e = _e + be + He.offsetWidth;
                }
                He.className += " " + Ne;
              } else if ((He.className || "").indexOf("dhx_minical_icon") === 0 && He.parentNode == t._els.dhx_cal_navline[0]) {
                oe = He;
              }
            }
            if (oe) {
              oe.style.left = _e + "px";
            }
          }
        });
        t._skin_init = function () {};
      }
    };
  })(j);
  if (window.jQuery) {
    (function (i) {
      var o = 0;
      var c = [];
      i.fn.dhx_scheduler = function (h) {
        if (typeof h != "string") {
          var D = [];
          this.each(function () {
            if (this && this.getAttribute) {
              if (this.getAttribute("dhxscheduler")) {
                D.push(window[this.getAttribute("dhxscheduler")]);
              } else {
                var V = "scheduler";
                if (o) {
                  V = "scheduler" + (o + 1);
                  window[V] = Scheduler.getSchedulerInstance();
                }
                var T = window[V];
                this.setAttribute("dhxscheduler", V);
                for (var W in h) {
                  if (W != "data") {
                    T.config[W] = h[W];
                  }
                }
                if (!this.getElementsByTagName("div").length) {
                  this.innerHTML = "<div class=\"dhx_cal_navline\"><div class=\"dhx_cal_prev_button\">&nbsp;</div><div class=\"dhx_cal_next_button\">&nbsp;</div><div class=\"dhx_cal_today_button\"></div><div class=\"dhx_cal_date\"></div><div class=\"dhx_cal_tab\" name=\"day_tab\" data-tab=\"day\" style=\"right:204px;\"></div><div class=\"dhx_cal_tab\" name=\"week_tab\" data-tab=\"week\" style=\"right:140px;\"></div><div class=\"dhx_cal_tab\" name=\"month_tab\" data-tab=\"month\" style=\"right:76px;\"></div></div><div class=\"dhx_cal_header\"></div><div class=\"dhx_cal_data\"></div>";
                  this.className += " dhx_cal_container";
                }
                T.init(this, T.config.date, T.config.mode);
                if (h.data) {
                  T.parse(h.data);
                }
                D.push(T);
                o++;
              }
            }
          });
          if (D.length === 1) {
            return D[0];
          } else {
            return D;
          }
        }
        if (c[h]) {
          return c[h].apply(this, []);
        }
        i.error("Method " + h + " does not exist on jQuery.dhx_scheduler");
      };
    })(window.jQuery);
  }
  (function (i) {
    (function () {
      var o = i.setCurrentView;
      var c = i.updateView;
      var h = null;
      var D = null;
      function V(z, Z) {
        var re = this;
        y.a.clearTimeout(D);
        y.a.clearTimeout(h);
        var oe = re._date;
        var _e = re._mode;
        W(this, z, Z);
        D = setTimeout(function () {
          if (re.callEvent("onBeforeViewChange", [_e, oe, Z || re._mode, z || re._date])) {
            c.call(re, z, Z);
            re.callEvent("onViewChange", [re._mode, re._date]);
            y.a.clearTimeout(h);
            D = 0;
          } else {
            W(re, oe, _e);
          }
        }, i.config.delay_render);
      }
      function T(z, Z) {
        var re = this;
        var oe = arguments;
        W(this, z, Z);
        y.a.clearTimeout(h);
        h = setTimeout(function () {
          if (!D) {
            c.apply(re, oe);
          }
        }, i.config.delay_render);
      }
      function W(z, Z, re) {
        if (Z) {
          z._date = Z;
        }
        if (re) {
          z._mode = re;
        }
      }
      i.attachEvent("onSchedulerReady", function () {
        if (i.config.delay_render) {
          i.setCurrentView = V;
          i.updateView = T;
        } else {
          i.setCurrentView = o;
          i.updateView = c;
        }
      });
    })();
  })(j);
  (function (i) {
    i.createDataProcessor = function (o) {
      var c;
      var h;
      if (o instanceof Function) {
        c = o;
      } else if (o.hasOwnProperty("router")) {
        c = o.router;
      } else if (o.hasOwnProperty("event")) {
        c = o;
      }
      h = c ? "CUSTOM" : o.mode || "REST-JSON";
      var D = new $e(o.url);
      D.init(i);
      D.setTransactionMode({
        mode: h,
        router: c
      }, o.batchUpdate);
      return D;
    };
    i.DataProcessor = $e;
  })(j);
  (function (i) {
    i.attachEvent("onSchedulerReady", function () {
      if (typeof dhtmlxError !== "undefined") {
        window.dhtmlxError.catchError("LoadXML", function (o, c, h) {
          var D = h[0].responseText;
          switch (i.config.ajax_error) {
            case "alert":
              y.a.alert(D);
              break;
            case "console":
              y.a.console.log(D);
          }
        });
      }
    });
  })(j);
  var v = new Et({
    en: pt,
    ar: de,
    be: pe,
    ca: xe,
    cn: Xe,
    cs: rt,
    da: tt,
    de: Re,
    el: ot,
    es: ct,
    fi: st,
    fr: Ze,
    he: it,
    hu: vt,
    id: nt,
    it: gt,
    jp: Ye,
    nb: Ct,
    nl: Nt,
    no: Ie,
    pl: me,
    pt: Be,
    ro: se,
    ru: De,
    si: We,
    sk: ke,
    sv: Pe,
    tr: ce,
    ua: Ge
  });
  j.i18n = {
    addLocale: v.addLocale,
    setLocale: function (i) {
      if (typeof i == "string") {
        var o = v.getLocale(i);
        o ||= v.getLocale("en");
        j.locale = o;
      } else if (i) {
        if (j.locale) {
          for (var c in i) {
            if (i[c] && dt(i[c]) === "object") {
              j.locale[c] ||= {};
              j.mixin(j.locale[c], i[c], true);
            } else {
              j.locale[c] = i[c];
            }
          }
        } else {
          j.locale = i;
        }
      }
    },
    getLocale: v.getLocale
  };
  j.i18n.setLocale("en");
  j.ext = {};
  var _ = {};
  j.plugins = function (i) {
    (function (o, c, h) {
      var D = [];
      for (var V in o) {
        if (o[V]) {
          var T = V.toLowerCase();
          if (c[T]) {
            c[T].forEach(function (W) {
              var z = W.toLowerCase();
              if (!o[z]) {
                D.push(z);
              }
            });
          }
          D.push(T);
        }
      }
      D.sort(function (W, z) {
        var Z = h[W] || 0;
        var re = h[z] || 0;
        if (Z > re) {
          return 1;
        } else if (Z < re) {
          return -1;
        } else {
          return 0;
        }
      });
      return D;
    })(i, {
      treetimeline: ["timeline"],
      daytimeline: ["timeline"],
      outerdrag: ["legacy"]
    }, {
      legacy: 1,
      limit: 1,
      timeline: 2,
      daytimeline: 3,
      treetimeline: 3,
      outerdrag: 6
    }).forEach(function (o) {
      if (!_[o]) {
        var c = t.getExtension(o);
        if (!c) {
          throw new Error("unknown plugin " + o);
        }
        c(j);
        _[o] = true;
      }
    });
  };
  return j;
}
var Ke = function () {
  function t(j) {
    (function (v, _) {
      if (!(v instanceof _)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, t);
    this._extensions = {};
    for (var a in j) {
      this._extensions[a] = j[a];
    }
  }
  a = [{
    key: "addExtension",
    value: function (j, a) {
      this._extensions[j] = a;
    }
  }, {
    key: "getExtension",
    value: function (j) {
      return this._extensions[j];
    }
  }];
  if (a) {
    (function Ue(t, j) {
      for (var a = 0; a < j.length; a++) {
        var v = j[a];
        v.enumerable = v.enumerable || false;
        v.configurable = true;
        if ("value" in v) {
          v.writable = true;
        }
        Object.defineProperty(t, v.key, v);
      }
    })(t.prototype, a);
  }
  return t;
  var a;
}();
if (typeof dhtmlx !== "undefined" && dhtmlx.attaches) {
  dhtmlx.attaches.attachScheduler = function (t, j, a, v) {
    a = a || "<div class=\"dhx_cal_tab\" name=\"day_tab\" data-tab=\"day\" style=\"right:204px;\"></div><div class=\"dhx_cal_tab\" name=\"week_tab\" data-tab=\"week\" style=\"right:140px;\"></div><div class=\"dhx_cal_tab\" name=\"month_tab\" data-tab=\"month\" style=\"right:76px;\"></div>";
    var _ = document.createElement("DIV");
    _.id = "dhxSchedObj_" + this._genStr(12);
    _.innerHTML = "<div id=\"" + _.id + "\" class=\"dhx_cal_container\" style=\"width:100%; height:100%;\"><div class=\"dhx_cal_navline\"><div class=\"dhx_cal_prev_button\">&nbsp;</div><div class=\"dhx_cal_next_button\">&nbsp;</div><div class=\"dhx_cal_today_button\"></div><div class=\"dhx_cal_date\"></div>" + a + "</div><div class=\"dhx_cal_header\"></div><div class=\"dhx_cal_data\"></div></div>";
    document.body.appendChild(_.firstChild);
    this.attachObject(_.id, false, true);
    this.vs[this.av].sched = v;
    this.vs[this.av].schedId = _.id;
    v.setSizes = v.updateView;
    v.destructor = function () {};
    v.init(_.id, t, j);
    return this.vs[this._viewRestore()].sched;
  };
}
function Te(t, j) {
  j(false, `The ${t} extension is not included in this version of dhtmlxScheduler.<br>
\t\tYou may need a <a href="https://docs.dhtmlx.com/scheduler/editions_comparison.html" target="_blank">Professional version of the component</a>.<br>
\t\tContact us at <a href="https://dhtmlx.com/docs/contact.shtml" target="_blank">https://dhtmlx.com/docs/contact.shtml</a> if you have any questions.`);
}
function _t(t) {
  return (_t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function kt(t) {
  return (kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function It(t) {
  return (It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function Tt(t) {
  return (Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
function St(t) {
  return (St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (j) {
    return typeof j;
  } : function (j) {
    if (j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof j;
    }
  })(t);
}
var At = new (function () {
  function t(j) {
    (function (a, v) {
      if (!(a instanceof v)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, t);
    this._seed = 0;
    this._schedulerPlugins = [];
    this._bundledExtensions = j;
    this._extensionsManager = new Ke(j);
  }
  a = [{
    key: "plugin",
    value: function (j) {
      this._schedulerPlugins.push(j);
      if (y.a.scheduler) {
        j(y.a.scheduler);
      }
    }
  }, {
    key: "getSchedulerInstance",
    value: function (j) {
      for (var a = te(this._extensionsManager), v = 0; v < this._schedulerPlugins.length; v++) {
        this._schedulerPlugins[v](a);
      }
      a._internal_id = this._seed++;
      if (this.$syncFactory) {
        this.$syncFactory(a);
      }
      if (j) {
        this._initFromConfig(a, j);
      }
      return a;
    }
  }, {
    key: "_initFromConfig",
    value: function (j, a) {
      if (a.plugins) {
        j.plugins(a.plugins);
      }
      if (a.config) {
        j.mixin(j.config, a.config, true);
      }
      if (a.templates) {
        j.attachEvent("onTemplatesReady", function () {
          j.mixin(j.templates, a.templates, true);
        }, {
          once: true
        });
      }
      if (a.events) {
        for (var v in a.events) {
          j.attachEvent(v, a.events[v]);
        }
      }
      if (a.locale) {
        j.i18n.setLocale(a.locale);
      }
      if (Array.isArray(a.calendars)) {
        a.calendars.forEach(function (_) {
          j.addCalendar(_);
        });
      }
      if (a.container) {
        j.init(a.container);
      } else {
        j.init();
      }
      if (a.data) {
        if (typeof a.data == "string") {
          j.load(a.data);
        } else {
          j.parse(a.data);
        }
      }
    }
  }];
  if (a) {
    (function ve(t, j) {
      for (var a = 0; a < j.length; a++) {
        var v = j[a];
        v.enumerable = v.enumerable || false;
        v.configurable = true;
        if ("value" in v) {
          v.writable = true;
        }
        Object.defineProperty(t, v.key, v);
      }
    })(t.prototype, a);
  }
  return t;
  var a;
}())({
  active_links: function (t) {
    t.config.active_link_view = "day";
    t._active_link_click = function (j) {
      var a = j.target.getAttribute("data-link-date");
      var v = t.date.str_to_date(t.config.api_date, false, true);
      if (a) {
        t.setCurrentView(v(a), t.config.active_link_view);
        if (j && j.preventDefault) {
          j.preventDefault();
        }
        return false;
      }
    };
    t.attachEvent("onTemplatesReady", function () {
      function j(v, _) {
        if (!t.templates["_active_links_old_" + (_ = _ || v + "_scale_date")]) {
          t.templates["_active_links_old_" + _] = t.templates[_];
        }
        var i = t.templates["_active_links_old_" + _];
        var o = t.date.date_to_str(t.config.api_date);
        t.templates[_] = function (c) {
          return "<a data-link-date='" + o(c) + "' href='#'>" + i(c) + "</a>";
        };
      }
      j("week");
      j("", "month_day");
      if (this.matrix) {
        for (var a in this.matrix) {
          j(a);
        }
      }
      this._detachDomEvent(this._obj, "click", t._active_link_click);
      t.event(this._obj, "click", t._active_link_click);
    });
  },
  agenda_view: function (t) {
    t.date.add_agenda = function (j) {
      return t.date.add(j, 1, "year");
    };
    t.templates.agenda_time = function (j, a, v) {
      if (v._timed) {
        return this.day_date(v.start_date, v.end_date, v) + " " + this.event_date(j);
      } else {
        return t.templates.day_date(j) + " &ndash; " + t.templates.day_date(a);
      }
    };
    t.templates.agenda_text = function (j, a, v) {
      return v.text;
    };
    t.templates.agenda_date = function () {
      return "";
    };
    t.date.agenda_start = function () {
      return t.date.date_part(t._currentDate());
    };
    t.attachEvent("onTemplatesReady", function () {
      var j = t.dblclick_dhx_cal_data;
      t.dblclick_dhx_cal_data = function () {
        if (this._mode == "agenda") {
          if (!this.config.readonly && this.config.dblclick_create) {
            this.addEventNow();
          }
        } else if (j) {
          return j.apply(this, arguments);
        }
      };
      var a = t.render_data;
      t.render_data = function (i) {
        if (this._mode != "agenda") {
          return a.apply(this, arguments);
        }
        _();
      };
      var v = t.render_view_data;
      function _() {
        var i = t.get_visible_events();
        i.sort(function (_e, he) {
          if (_e.start_date > he.start_date) {
            return 1;
          } else {
            return -1;
          }
        });
        for (var o, c = "<div class='dhx_agenda_area' " + t._waiAria.agendaDataAttrString() + ">", h = 0; h < i.length; h++) {
          var D = i[h];
          var V = D.color ? "background:" + D.color + ";" : "";
          var T = D.textColor ? "color:" + D.textColor + ";" : "";
          var W = t.templates.event_class(D.start_date, D.end_date, D);
          o = t._waiAria.agendaEventAttrString(D);
          var z = t._waiAria.agendaDetailsBtnString();
          c += "<div " + o + " class='dhx_agenda_line" + (W ? " " + W : "") + "' event_id='" + D.id + "' " + t.config.event_attribute + "='" + D.id + "' style='" + T + V + (D._text_style || "") + "'><div class='dhx_agenda_event_time'>" + (t.config.rtl ? t.templates.agenda_time(D.end_date, D.start_date, D) : t.templates.agenda_time(D.start_date, D.end_date, D)) + "</div>";
          c += "<div " + z + " class='dhx_event_icon icon_details'>&nbsp;</div>";
          c += "<span>" + t.templates.agenda_text(D.start_date, D.end_date, D) + "</span></div>";
        }
        t._els.dhx_cal_data[0].innerHTML = c += "<div class='dhx_v_border'></div></div>";
        t._els.dhx_cal_data[0].childNodes[0].scrollTop = t._agendaScrollTop || 0;
        var Z = t._els.dhx_cal_data[0].childNodes[0];
        Z.childNodes[Z.childNodes.length - 1].style.height = Z.offsetHeight < t._els.dhx_cal_data[0].offsetHeight ? "100%" : Z.offsetHeight + "px";
        var re = t._els.dhx_cal_data[0].firstChild.childNodes;
        var oe = t._getNavDateElement();
        if (oe) {
          oe.innerHTML = t.templates.agenda_date(t._min_date, t._max_date, t._mode);
        }
        t._rendered = [];
        h = 0;
        for (; h < re.length - 1; h++) {
          t._rendered[h] = re[h];
        }
      }
      t.render_view_data = function () {
        if (this._mode == "agenda") {
          t._agendaScrollTop = t._els.dhx_cal_data[0].childNodes[0].scrollTop;
          t._els.dhx_cal_data[0].childNodes[0].scrollTop = 0;
        }
        return v.apply(this, arguments);
      };
      t.agenda_view = function (i) {
        t._min_date = t.config.agenda_start || t.date.agenda_start(t._date);
        t._max_date = t.config.agenda_end || t.date.add_agenda(t._min_date, 1);
        (function (o) {
          if (o) {
            var c = t.locale.labels;
            var h = t._waiAria.agendaHeadAttrString();
            var D = t._waiAria.agendaHeadDateString(c.date);
            var V = t._waiAria.agendaHeadDescriptionString(c.description);
            t._els.dhx_cal_header[0].innerHTML = "<div " + h + " class='dhx_agenda_line'><div " + D + ">" + c.date + "</div><span class = 'description_header' style='padding-left:25px' " + V + ">" + c.description + "</span></div>";
            t._table_view = true;
            t.set_sizes();
          }
        })(i);
        if (i) {
          t._cols = null;
          t._colsS = null;
          t._table_view = true;
          _();
        } else {
          t._table_view = false;
        }
      };
    });
  },
  all_timed: function (t) {
    t.config.all_timed = "short";
    t.config.all_timed_month = false;
    function j(c) {
      return (c.end_date - c.start_date) / 3600000 < 24 || t._drag_mode == "resize" && t._drag_id == c.id;
    }
    t._safe_copy = function (c) {
      var h = null;
      var D = t._copy_event(c);
      if (c.event_pid) {
        h = t.getEvent(c.event_pid);
      }
      if (h && h.isPrototypeOf(c)) {
        delete D.event_length;
        delete D.event_pid;
        delete D.rec_pattern;
        delete D.rec_type;
      }
      return D;
    };
    var a = t._pre_render_events_line;
    var v = t._pre_render_events_table;
    function _(c, h) {
      if (this._table_view) {
        return v.call(this, c, h);
      } else {
        return a.call(this, c, h);
      }
    }
    t._pre_render_events_line = t._pre_render_events_table = function (c, h) {
      if (!this.config.all_timed || this._table_view && this._mode != "month" || this._mode == "month" && !this.config.all_timed_month) {
        return _.call(this, c, h);
      }
      for (var D = 0; D < c.length; D++) {
        var V = c[D];
        if (!V._timed) {
          if (this.config.all_timed != "short" || j(V)) {
            var T = this._safe_copy(V);
            T._first_chunk = !V._virtual;
            T._drag_resize = false;
            T._virtual = true;
            T.start_date = new Date(T.start_date);
            undefined;
            be = oe((he = V).start_date);
            if (+he.end_date > +be) {
              T.end_date = oe(T.start_date);
              if (this.config.last_hour != 24) {
                T.end_date = _e(T.start_date, this.config.last_hour);
              }
            } else {
              T.end_date = new Date(V.end_date);
            }
            var W = false;
            if (T.start_date < this._max_date && T.end_date > this._min_date && T.start_date < T.end_date) {
              c[D] = T;
              W = true;
            }
            var z = this._safe_copy(V);
            z._virtual = true;
            z.end_date = new Date(z.end_date);
            z.start_date = _e(z.start_date < this._min_date ? this._min_date : oe(V.start_date), this.config.first_hour);
            if (z.start_date < this._max_date && z.start_date < z.end_date) {
              if (!W) {
                c[D--] = z;
                continue;
              }
              c.splice(D + 1, 0, z);
              z._last_chunk = false;
            } else {
              T._last_chunk = true;
              T._drag_resize = true;
            }
          } else if (this._mode != "month") {
            c.splice(D--, 1);
          }
        }
      }
      var he;
      var be;
      return _.call(this, c, this._drag_mode != "move" && h);
      function oe(he) {
        var be = t.date.add(he, 1, "day");
        return t.date.date_part(be);
      }
      function _e(he, be) {
        var Ae = t.date.date_part(new Date(he));
        Ae.setHours(be);
        return Ae;
      }
    };
    var i = t.get_visible_events;
    t.get_visible_events = function (c) {
      return i.call(this, (!this.config.all_timed || !this.config.multi_day) && c);
    };
    t.attachEvent("onBeforeViewChange", function (c, h, D, V) {
      t._allow_dnd = D == "day" || D == "week";
      return true;
    });
    t._is_main_area_event = function (c) {
      return !!c._timed || this.config.all_timed === true || this.config.all_timed == "short" && !!j(c);
    };
    var o = t.updateEvent;
    t.updateEvent = function (c) {
      var h;
      var D;
      var V = t.getEvent(c);
      if (V && (h = t.config.all_timed && !t.isOneDayEvent(t._events[c]) && !t.getState().drag_id)) {
        D = t.config.update_render;
        t.config.update_render = true;
      }
      o.apply(t, arguments);
      if (V && h) {
        t.config.update_render = D;
      }
    };
  },
  collision: function (t) {
    var j;
    var a;
    function v(_) {
      if (t._get_section_view() && _) {
        j = t.getEvent(_)[t._get_section_property()];
      }
    }
    t.config.collision_limit = 1;
    t.attachEvent("onBeforeDrag", function (_) {
      v(_);
      return true;
    });
    t.attachEvent("onBeforeLightbox", function (_) {
      var i = t.getEvent(_);
      a = [i.start_date, i.end_date];
      v(_);
      return true;
    });
    t.attachEvent("onEventChanged", function (_) {
      if (!_ || !t.getEvent(_)) {
        return true;
      }
      var i = t.getEvent(_);
      if (!t.checkCollision(i)) {
        if (!a) {
          return false;
        }
        i.start_date = a[0];
        i.end_date = a[1];
        i._timed = this.isOneDayEvent(i);
      }
      return true;
    });
    t.attachEvent("onBeforeEventChanged", function (_, i, o) {
      return t.checkCollision(_);
    });
    t.attachEvent("onEventAdded", function (_, i) {
      if (!t.checkCollision(i)) {
        t.deleteEvent(_);
      }
    });
    t.attachEvent("onEventSave", function (_, i, o) {
      (i = t._lame_clone(i)).id = _;
      if (!i.start_date || !i.end_date) {
        var c = t.getEvent(_);
        i.start_date = new Date(c.start_date);
        i.end_date = new Date(c.end_date);
      }
      if (i.rec_type) {
        t._roll_back_dates(i);
      }
      return t.checkCollision(i);
    });
    t._check_sections_collision = function (_, i) {
      var o = t._get_section_property();
      return _[o] == i[o] && _.id != i.id;
    };
    t.checkCollision = function (_) {
      var i = [];
      var o = t.config.collision_limit;
      if (_.rec_type) {
        for (var c = t.getRecDates(_), h = 0; h < c.length; h++) {
          for (var D = t.getEvents(c[h].start_date, c[h].end_date), V = 0; V < D.length; V++) {
            if ((D[V].event_pid || D[V].id) != _.id) {
              i.push(D[V]);
            }
          }
        }
      } else {
        i = t.getEvents(_.start_date, _.end_date);
        for (var T = 0; T < i.length; T++) {
          var W = i[T];
          if (W.id == _.id || W.event_length && [W.event_pid, W.event_length].join("#") == _.id) {
            i.splice(T, 1);
            break;
          }
        }
      }
      var z = t._get_section_view();
      var Z = t._get_section_property();
      var re = true;
      if (z) {
        var oe = 0;
        for (T = 0; T < i.length; T++) {
          if (i[T].id != _.id && this._check_sections_collision(i[T], _)) {
            oe++;
          }
        }
        if (oe >= o) {
          re = false;
        }
      } else if (i.length >= o) {
        re = false;
      }
      if (!re) {
        var _e = !t.callEvent("onEventCollision", [_, i]);
        if (!_e) {
          _[Z] = j || _[Z];
        }
        return _e;
      }
      return re;
    };
  },
  container_autoresize: function (t) {
    t.config.container_autoresize = true;
    t.config.month_day_min_height = 90;
    t.config.min_grid_size = 25;
    t.config.min_map_size = 400;
    var j = t._pre_render_events;
    var a = true;
    var v = 0;
    var _ = 0;
    t._pre_render_events = function (V, T) {
      if (!t.config.container_autoresize || !a) {
        return j.apply(this, arguments);
      }
      var W = this.xy.bar_height;
      var z = this._colsS.heights;
      var Z = this._colsS.heights = [0, 0, 0, 0, 0, 0, 0];
      var re = this._els.dhx_cal_data[0];
      V = this._table_view ? this._pre_render_events_table(V, T) : this._pre_render_events_line(V, T);
      if (this._table_view) {
        if (T) {
          this._colsS.heights = z;
        } else {
          var oe = re.firstChild;
          if (oe.rows) {
            for (var _e = 0; _e < oe.rows.length; _e++) {
              Z[_e]++;
              if (Z[_e] * W > this._colsS.height - this.xy.month_head_height) {
                var he = oe.rows[_e].cells;
                var be = this._colsS.height - this.xy.month_head_height;
                if (this.config.max_month_events * 1 !== this.config.max_month_events || Z[_e] <= this.config.max_month_events) {
                  be = Z[_e] * W;
                } else if ((this.config.max_month_events + 1) * W > this._colsS.height - this.xy.month_head_height) {
                  be = (this.config.max_month_events + 1) * W;
                }
                for (var Ae = 0; Ae < he.length; Ae++) {
                  he[Ae].childNodes[1].style.height = be + "px";
                }
                Z[_e] = (Z[_e - 1] || 0) + he[0].offsetHeight;
              }
              Z[_e] = (Z[_e - 1] || 0) + oe.rows[_e].cells[0].offsetHeight;
            }
            Z.unshift(0);
          } else {
            if (!V.length && this._els.dhx_multi_day[0].style.visibility == "visible") {
              Z[0] = -1;
            }
            if (V.length || Z[0] == -1) {
              var He = (Z[0] + 1) * W + 1;
              if (_ != He + 1) {
                this._obj.style.height = v - _ + He - 1 + "px";
              }
              He += "px";
              re.style.top = this._els.dhx_cal_navline[0].offsetHeight + this._els.dhx_cal_header[0].offsetHeight + parseInt(He, 10) + "px";
              re.style.height = this._obj.offsetHeight - parseInt(re.style.top, 10) - (this.xy.margin_top || 0) + "px";
              var Ne = this._els.dhx_multi_day[0];
              Ne.style.height = He;
              Ne.style.visibility = Z[0] == -1 ? "hidden" : "visible";
              (Ne = this._els.dhx_multi_day[1]).style.height = He;
              Ne.style.visibility = Z[0] == -1 ? "hidden" : "visible";
              Ne.className = Z[0] ? "dhx_multi_day_icon" : "dhx_multi_day_icon_small";
              this._dy_shift = (Z[0] + 1) * W;
              Z[0] = 0;
            }
          }
        }
      }
      return V;
    };
    var i = ["dhx_cal_navline", "dhx_cal_header", "dhx_multi_day", "dhx_cal_data"];
    function o(V) {
      v = 0;
      for (var T = 0; T < i.length; T++) {
        var W = i[T];
        var z = t._els[W] ? t._els[W][0] : null;
        var Z = 0;
        switch (W) {
          case "dhx_cal_navline":
          case "dhx_cal_header":
            Z = parseInt(z.style.height, 10);
            break;
          case "dhx_multi_day":
            _ = Z = z ? z.offsetHeight - 1 : 0;
            break;
          case "dhx_cal_data":
            var re = t.getState().mode;
            Z = z.childNodes[1] && re != "month" ? z.childNodes[1].offsetHeight : Math.max(z.offsetHeight - 1, z.scrollHeight);
            if (re == "month") {
              if (t.config.month_day_min_height && !V) {
                Z = z.getElementsByTagName("tr").length * t.config.month_day_min_height;
              }
              if (V) {
                z.style.height = Z + "px";
              }
            } else if (re == "year") {
              Z = t.config.year_y * 190;
            } else if (re == "agenda") {
              Z = 0;
              if (z.childNodes && z.childNodes.length) {
                for (var oe = 0; oe < z.childNodes.length; oe++) {
                  Z += z.childNodes[oe].offsetHeight;
                }
              }
              if (Z + 2 < t.config.min_grid_size) {
                Z = t.config.min_grid_size;
              } else {
                Z += 2;
              }
            } else if (re == "week_agenda") {
              for (var _e, he, be = t.xy.week_agenda_scale_height + t.config.min_grid_size, Ae = 0; Ae < z.childNodes.length; Ae++) {
                he = z.childNodes[Ae];
                oe = 0;
                he = z.childNodes[Ae];
                oe = 0;
                for (; oe < he.childNodes.length; oe++) {
                  for (var He = 0, Ne = he.childNodes[oe].childNodes[1], Ve = 0; Ve < Ne.childNodes.length; Ve++) {
                    He += Ne.childNodes[Ve].offsetHeight;
                  }
                  _e = He + t.xy.week_agenda_scale_height;
                  if ((_e = Ae != 1 || oe != 2 && oe != 3 ? _e : _e * 2) > be) {
                    be = _e;
                  }
                }
              }
              Z = be * 3;
            } else if (re == "map") {
              Z = 0;
              var Se = z.querySelectorAll(".dhx_map_line");
              for (oe = 0; oe < Se.length; oe++) {
                Z += Se[oe].offsetHeight;
              }
              if (Z + 2 < t.config.min_map_size) {
                Z = t.config.min_map_size;
              } else {
                Z += 2;
              }
            } else if (t._gridView) {
              Z = 0;
              if (z.childNodes[1].childNodes[0].childNodes && z.childNodes[1].childNodes[0].childNodes.length) {
                Se = z.childNodes[1].childNodes[0].childNodes[0].childNodes;
                oe = 0;
                for (; oe < Se.length; oe++) {
                  Z += Se[oe].offsetHeight;
                }
                if ((Z += 2) < t.config.min_grid_size) {
                  Z = t.config.min_grid_size;
                }
              } else {
                Z = t.config.min_grid_size;
              }
            }
            if (t.matrix && t.matrix[re]) {
              if (V) {
                z.style.height = (Z += 0) + "px";
              } else {
                Z = 0;
                for (var Fe = t.matrix[re], Oe = Fe.y_unit, at = 0; at < Oe.length; at++) {
                  Z += Fe.getSectionHeight(Oe[at].key);
                }
                if (t.$container.clientWidth != t.$container.scrollWidth) {
                  Z += D();
                }
              }
              Z -= 1;
            }
            if (re == "day" || re == "week" || t._props && t._props[re]) {
              Z += 2;
            }
        }
        v += Z += 1;
      }
      t._obj.style.height = v + "px";
      if (!V) {
        t.updateView();
      }
    }
    function c() {
      a = false;
      t.callEvent("onAfterSchedulerResize", []);
      a = true;
    }
    function h() {
      if (!t.config.container_autoresize || !a) {
        return true;
      }
      var V = t.getState().mode;
      if (!V) {
        return true;
      }
      var T = window.requestAnimationFrame || window.setTimeout;
      var W = document.documentElement.scrollTop;
      T(function () {
        o();
      });
      if (t.matrix && t.matrix[V] || V == "month") {
        T(function () {
          o(true);
          document.documentElement.scrollTop = W;
          c();
        }, 1);
      } else {
        c();
      }
    }
    function D() {
      var V = document.createElement("div");
      V.style.cssText = "visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;";
      document.body.appendChild(V);
      var T = V.offsetWidth - V.clientWidth;
      document.body.removeChild(V);
      return T;
    }
    t.attachEvent("onBeforeViewChange", function () {
      var V = t.config.container_autoresize;
      t.xy.$original_scroll_width ||= t.xy.scroll_width;
      t.xy.scroll_width = V ? 0 : t.xy.$original_scroll_width;
      if (t.matrix) {
        for (var T in t.matrix) {
          var W = t.matrix[T];
          W.$original_section_autoheight ||= W.section_autoheight;
          W.section_autoheight = !V && W.$original_section_autoheight;
        }
      }
      return true;
    });
    t.attachEvent("onViewChange", h);
    t.attachEvent("onXLE", h);
    t.attachEvent("onEventChanged", h);
    t.attachEvent("onEventCreated", h);
    t.attachEvent("onEventAdded", h);
    t.attachEvent("onEventDeleted", h);
    t.attachEvent("onAfterSchedulerResize", h);
    t.attachEvent("onClearAll", h);
    t.attachEvent("onBeforeExpand", function () {
      a = false;
      return true;
    });
    t.attachEvent("onBeforeCollapse", function () {
      a = true;
      return true;
    });
  },
  cookie: function (t) {
    function j(_) {
      return (_._obj.id || "scheduler") + "_settings";
    }
    var a = true;
    t.attachEvent("onBeforeViewChange", function (_, i, o, c) {
      if (a && t._get_url_nav) {
        var h = t._get_url_nav();
        if (h.date || h.mode || h.event) {
          a = false;
        }
      }
      var D = j(t);
      if (a) {
        a = false;
        var V = function (W) {
          var z = W + "=";
          if (document.cookie.length > 0) {
            var Z = document.cookie.indexOf(z);
            if (Z != -1) {
              Z += z.length;
              var re = document.cookie.indexOf(";", Z);
              if (re == -1) {
                re = document.cookie.length;
              }
              return document.cookie.substring(Z, re);
            }
          }
          return "";
        }(D);
        if (V) {
          t._min_date ||= c;
          (V = unescape(V).split("@"))[0] = this._helpers.parseDate(V[0]);
          var T = this.isViewExists(V[1]) ? V[1] : o;
          c = isNaN(+V[0]) ? c : V[0];
          window.setTimeout(function () {
            t.setCurrentView(c, T);
          }, 1);
          return false;
        }
      }
      return true;
    });
    t.attachEvent("onViewChange", function (_, i) {
      var o;
      var h;
      o = j(t);
      h = escape(this._helpers.formatDate(i) + "@" + _);
      document.cookie = o + "=" + h + "; expires=Sun, 31 Jan 9999 22:00:00 GMT";
    });
    var v = t._load;
    t._load = function () {
      var _ = arguments;
      if (t._date) {
        v.apply(this, _);
      } else {
        var i = this;
        window.setTimeout(function () {
          v.apply(i, _);
        }, 1);
      }
    };
  },
  daytimeline: function (t) {
    Te("Day Timeline", t.assert);
  },
  drag_between: function (t) {
    Te("Drag Between", t.assert);
  },
  editors: function (t) {
    t.form_blocks.combo = {
      render: function (j) {
        j.cached_options ||= {};
        return "<div class='" + j.type + "' style='height:" + (j.height || 20) + "px;' ></div>";
      },
      set_value: function (j, a, v, _) {
        (function () {
          z();
          var W = t.attachEvent("onAfterLightbox", function () {
            z();
            t.detachEvent(W);
          });
          function z() {
            if (j._combo && j._combo.DOMParent) {
              var Z = j._combo;
              if (Z.unload) {
                Z.unload();
              } else if (Z.destructor) {
                Z.destructor();
              }
              Z.DOMParent = Z.DOMelem = null;
            }
          }
        })();
        window.dhx_globalImgPath = _.image_path || "/";
        j._combo = new dhtmlXCombo(j, _.name, j.offsetWidth - 8);
        if (_.onchange) {
          j._combo.attachEvent("onChange", _.onchange);
        }
        if (_.options_height) {
          j._combo.setOptionHeight(_.options_height);
        }
        var i = j._combo;
        i.enableFilteringMode(_.filtering, _.script_path || null, !!_.cache);
        if (_.script_path) {
          var o = v[_.map_to];
          if (o) {
            if (_.cached_options[o]) {
              i.addOption(o, _.cached_options[o]);
              i.disable(1);
              i.selectOption(0);
              i.disable(0);
            } else {
              t.ajax.get(_.script_path + "?id=" + o + "&uid=" + t.uid(), function (W) {
                var z;
                var Z = W.xmlDoc.responseText;
                try {
                  z = JSON.parse(Z).options[0].text;
                } catch {
                  z = t.ajax.xpath("//option", W.xmlDoc)[0].childNodes[0].nodeValue;
                }
                _.cached_options[o] = z;
                i.addOption(o, z);
                i.disable(1);
                i.selectOption(0);
                i.disable(0);
              });
            }
          } else {
            i.setComboValue("");
          }
        } else {
          for (var c = [], h = 0; h < _.options.length; h++) {
            var D = _.options[h];
            c.push([D.key, D.label, D.css]);
          }
          i.addOption(c);
          if (v[_.map_to]) {
            var T = i.getIndexByValue(v[_.map_to]);
            i.selectOption(T);
          }
        }
      },
      get_value: function (j, a, v) {
        var _ = j._combo.getSelectedValue();
        if (v.script_path) {
          v.cached_options[_] = j._combo.getSelectedText();
        }
        return _;
      },
      focus: function (j) {}
    };
    t.form_blocks.radio = {
      render: function (j) {
        var a = "";
        a += "<div class='dhx_cal_ltext dhx_cal_radio' style='height:" + j.height + "px;' >";
        for (var v = 0; v < j.options.length; v++) {
          var _ = t.uid();
          a += "<input id='" + _ + "' type='radio' name='" + j.name + "' value='" + j.options[v].key + "'><label for='" + _ + "'> " + j.options[v].label + "</label>";
          if (j.vertical) {
            a += "<br/>";
          }
        }
        return a + "</div>";
      },
      set_value: function (j, a, v, _) {
        for (var i = j.getElementsByTagName("input"), o = 0; o < i.length; o++) {
          i[o].checked = false;
          if (i[o].value == (v[_.map_to] || a)) {
            i[o].checked = true;
          }
        }
      },
      get_value: function (j, a, v) {
        for (var _ = j.getElementsByTagName("input"), i = 0; i < _.length; i++) {
          if (_[i].checked) {
            return _[i].value;
          }
        }
      },
      focus: function (j) {}
    };
    t.form_blocks.checkbox = {
      render: function (j) {
        if (t.config.wide_form) {
          return "<div class=\"dhx_cal_wide_checkbox\" " + (j.height ? "style='height:" + j.height + "px;'" : "") + "></div>";
        } else {
          return "";
        }
      },
      set_value: function (j, a, v, _) {
        j = document.getElementById(_.id);
        var i = t.uid();
        var o = _.checked_value !== undefined ? a == _.checked_value : !!a;
        j.className += " dhx_cal_checkbox";
        var c = "<input id='" + i + "' type='checkbox' value='true' name='" + _.name + "'" + (o ? "checked='true'" : "") + "'>";
        var h = "<label for='" + i + "'>" + (t.locale.labels["section_" + _.name] || _.name) + "</label>";
        if (t.config.wide_form) {
          j.innerHTML = h;
          j.nextSibling.innerHTML = c;
        } else {
          j.innerHTML = c + h;
        }
        if (_.handler) {
          var D = j.getElementsByTagName("input")[0];
          if (D.$_eventAttached) {
            return;
          }
          D.$_eventAttached = true;
          t.event(D, "click", _.handler);
        }
      },
      get_value: function (j, a, v) {
        var _ = (j = document.getElementById(v.id)).getElementsByTagName("input")[0];
        _ ||= j.nextSibling.getElementsByTagName("input")[0];
        if (_.checked) {
          return v.checked_value || true;
        } else {
          return v.unchecked_value || false;
        }
      },
      focus: function (j) {}
    };
  },
  expand: function (t) {
    t.ext.fullscreen = {
      toggleIcon: null
    };
    t.expand = function () {
      if (t.callEvent("onBeforeExpand", [])) {
        var j = t._obj;
        do {
          j._position = j.style.position || "";
          j.style.position = "static";
        } while ((j = j.parentNode) && j.style);
        (j = t._obj).style.position = "absolute";
        j._width = j.style.width;
        j._height = j.style.height;
        j.style.width = j.style.height = "100%";
        j.style.top = j.style.left = "0px";
        var a = document.body;
        a.scrollTop = 0;
        if (a = a.parentNode) {
          a.scrollTop = 0;
        }
        document.body._overflow = document.body.style.overflow || "";
        document.body.style.overflow = "hidden";
        t._maximize();
        t.callEvent("onExpand", []);
      }
    };
    t.collapse = function () {
      if (t.callEvent("onBeforeCollapse", [])) {
        var j = t._obj;
        do {
          j.style.position = j._position;
        } while ((j = j.parentNode) && j.style);
        (j = t._obj).style.width = j._width;
        j.style.height = j._height;
        document.body.style.overflow = document.body._overflow;
        t._maximize();
        t.callEvent("onCollapse", []);
      }
    };
    t.attachEvent("onTemplatesReady", function () {
      var j = document.createElement("div");
      j.className = "dhx_expand_icon";
      t.ext.fullscreen.toggleIcon = j;
      t._obj.appendChild(j);
      t.event(j, "click", function () {
        if (t.expanded) {
          t.collapse();
        } else {
          t.expand();
        }
      });
    });
    t._maximize = function () {
      this.expanded = !this.expanded;
      t.ext.fullscreen.toggleIcon.style.backgroundPosition = "0 " + (this.expanded ? "0" : "18") + "px";
      for (var j = ["left", "top"], a = 0; a < j.length; a++) {
        var v = t["_prev_margin_" + j[a]];
        if (t.xy["margin_" + j[a]]) {
          t["_prev_margin_" + j[a]] = t.xy["margin_" + j[a]];
          t.xy["margin_" + j[a]] = 0;
        } else if (v) {
          t.xy["margin_" + j[a]] = t["_prev_margin_" + j[a]];
          delete t["_prev_margin_" + j[a]];
        }
      }
      t.setCurrentView();
    };
  },
  grid_view: function (t) {
    Te("Grid", t.assert);
  },
  html_templates: function (t) {
    t.attachEvent("onTemplatesReady", function () {
      for (var j = document.body.getElementsByTagName("DIV"), a = 0; a < j.length; a++) {
        var v = j[a].className || "";
        if ((v = v.split(":")).length == 2 && v[0] == "template") {
          var _ = "return \"" + (j[a].innerHTML || "").replace(/"/g, "\\\"").replace(/[\n\r]+/g, "") + "\";";
          _ = unescape(_).replace(/\{event\.([a-z]+)\}/g, function (i, o) {
            return "\"+ev." + o + "+\"";
          });
          t.templates[v[1]] = Function("start", "end", "ev", _);
          j[a].style.display = "none";
        }
      }
    });
  },
  key_nav: function (t) {
    function j(a) {
      var v = {
        minicalButton: t.$keyboardNavigation.MinicalButton,
        minicalDate: t.$keyboardNavigation.MinicalCell,
        scheduler: t.$keyboardNavigation.SchedulerNode,
        dataArea: t.$keyboardNavigation.DataArea,
        timeSlot: t.$keyboardNavigation.TimeSlot,
        event: t.$keyboardNavigation.Event
      };
      var _ = {};
      for (var i in v) {
        _[i.toLowerCase()] = v[i];
      }
      return _[a = (a + "").toLowerCase()] || v.scheduler;
    }
    var a;
    t.config.key_nav = true;
    t.config.key_nav_step = 30;
    t.addShortcut = function (a, v, _) {
      var i = j(_);
      if (i) {
        i.prototype.bind(a, v);
      }
    };
    t.getShortcutHandler = function (a, v) {
      var _ = j(v);
      if (_) {
        var i = t.$keyboardNavigation.shortcuts.parse(a);
        if (i.length) {
          return _.prototype.findHandler(i[0]);
        }
      }
    };
    t.removeShortcut = function (a, v) {
      var _ = j(v);
      if (_) {
        _.prototype.unbind(a);
      }
    };
    t.focus = function () {
      if (t.config.key_nav) {
        var a = t.$keyboardNavigation.dispatcher;
        a.enable();
        var v = a.getActiveNode();
        if (!v || v instanceof t.$keyboardNavigation.MinicalButton || v instanceof t.$keyboardNavigation.MinicalCell) {
          a.setDefaultNode();
        } else {
          a.focusNode(a.getActiveNode());
        }
      }
    };
    t.$keyboardNavigation = {};
    t._compose = function () {
      for (var a = Array.prototype.slice.call(arguments, 0), v = {}, _ = 0; _ < a.length; _++) {
        var i = a[_];
        if (typeof i == "function") {
          i = new i();
        }
        for (var o in i) {
          v[o] = i[o];
        }
      }
      return v;
    };
    t.$keyboardNavigation.shortcuts = {
      createCommand: function () {
        return {
          modifiers: {
            shift: false,
            alt: false,
            ctrl: false,
            meta: false
          },
          keyCode: null
        };
      },
      parse: function (v) {
        for (var _ = [], i = this.getExpressions(this.trim(v)), o = 0; o < i.length; o++) {
          for (var c = this.getWords(i[o]), h = this.createCommand(), D = 0; D < c.length; D++) {
            if (this.commandKeys[c[D]]) {
              h.modifiers[c[D]] = true;
            } else {
              h.keyCode = this.specialKeys[c[D]] ? this.specialKeys[c[D]] : c[D].charCodeAt(0);
            }
          }
          _.push(h);
        }
        return _;
      },
      getCommandFromEvent: function (v) {
        var _ = this.createCommand();
        _.modifiers.shift = !!v.shiftKey;
        _.modifiers.alt = !!v.altKey;
        _.modifiers.ctrl = !!v.ctrlKey;
        _.modifiers.meta = !!v.metaKey;
        _.keyCode = v.which || v.keyCode;
        if (_.keyCode >= 96 && _.keyCode <= 105) {
          _.keyCode -= 48;
        }
        var i = String.fromCharCode(_.keyCode);
        if (i) {
          _.keyCode = i.toLowerCase().charCodeAt(0);
        }
        return _;
      },
      getHashFromEvent: function (v) {
        return this.getHash(this.getCommandFromEvent(v));
      },
      getHash: function (v) {
        var _ = [];
        for (var i in v.modifiers) {
          if (v.modifiers[i]) {
            _.push(i);
          }
        }
        _.push(v.keyCode);
        return _.join(this.junctionChar);
      },
      getExpressions: function (v) {
        return v.split(this.junctionChar);
      },
      getWords: function (v) {
        return v.split(this.combinationChar);
      },
      trim: function (v) {
        return v.replace(/\s/g, "");
      },
      junctionChar: ",",
      combinationChar: "+",
      commandKeys: {
        shift: 16,
        alt: 18,
        ctrl: 17,
        meta: true
      },
      specialKeys: {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        delete: 46,
        insert: 45,
        plus: 107,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123
      }
    };
    (a = t).$keyboardNavigation.EventHandler = {
      _handlers: null,
      findHandler: function (v) {
        this._handlers ||= {};
        var _ = a.$keyboardNavigation.shortcuts.getHash(v);
        return this._handlers[_];
      },
      doAction: function (v, _) {
        var i = this.findHandler(v);
        if (i) {
          i.call(this, _);
          if (_.preventDefault) {
            _.preventDefault();
          } else {
            _.returnValue = false;
          }
        }
      },
      bind: function (v, _) {
        this._handlers ||= {};
        for (var i = a.$keyboardNavigation.shortcuts, o = i.parse(v), c = 0; c < o.length; c++) {
          this._handlers[i.getHash(o[c])] = _;
        }
      },
      unbind: function (v) {
        for (var _ = a.$keyboardNavigation.shortcuts, i = _.parse(v), o = 0; o < i.length; o++) {
          if (this._handlers[_.getHash(i[o])]) {
            delete this._handlers[_.getHash(i[o])];
          }
        }
      },
      bindAll: function (v) {
        for (var _ in v) {
          this.bind(_, v[_]);
        }
      },
      initKeys: function () {
        this._handlers ||= {};
        if (this.keys) {
          this.bindAll(this.keys);
        }
      }
    };
    (function (a) {
      a.$keyboardNavigation.getFocusableNodes = a._getFocusableNodes;
      a.$keyboardNavigation.trapFocus = function (v, _) {
        if (_.keyCode != 9) {
          return false;
        }
        for (var i, o = a.$keyboardNavigation.getFocusableNodes(v), c = document.activeElement, h = -1, D = 0; D < o.length; D++) {
          if (o[D] == c) {
            h = D;
            break;
          }
        }
        if (_.shiftKey) {
          if (i = o[h <= 0 ? o.length - 1 : h - 1]) {
            i.focus();
            _.preventDefault();
            return true;
          }
        } else if (i = o[h >= o.length - 1 ? 0 : h + 1]) {
          i.focus();
          _.preventDefault();
          return true;
        }
        return false;
      };
    })(t);
    (function (a) {
      a.$keyboardNavigation.marker = {
        clear: function () {
          for (var v = a.$container.querySelectorAll(".dhx_focus_slot"), _ = 0; _ < v.length; _++) {
            v[_].parentNode.removeChild(v[_]);
          }
        },
        createElement: function () {
          var v = document.createElement("div");
          v.setAttribute("tabindex", -1);
          v.className = "dhx_focus_slot";
          return v;
        },
        renderMultiple: function (v, _, i) {
          for (var o = [], c = new Date(v), h = new Date(Math.min(_.valueOf(), a.date.add(a.date.day_start(new Date(v)), 1, "day").valueOf())); c.valueOf() < _.valueOf();) {
            o = o.concat(i.call(this, c, new Date(Math.min(h.valueOf(), _.valueOf()))));
            c = a.date.day_start(a.date.add(c, 1, "day"));
            h = a.date.day_start(a.date.add(c, 1, "day"));
            h = new Date(Math.min(h.valueOf(), _.valueOf()));
          }
          return o;
        },
        render: function (v, _, i) {
          this.clear();
          var o = [];
          var c = a.$keyboardNavigation.TimeSlot.prototype._modes;
          switch (a.$keyboardNavigation.TimeSlot.prototype._getMode()) {
            case c.units:
              o = this.renderVerticalMarker(v, _, i);
              break;
            case c.timeline:
              o = this.renderTimelineMarker(v, _, i);
              break;
            case c.year:
              o = o.concat(this.renderMultiple(v, _, this.renderYearMarker));
              break;
            case c.month:
              o = this.renderMonthMarker(v, _);
              break;
            case c.weekAgenda:
              o = o.concat(this.renderMultiple(v, _, this.renderWeekAgendaMarker));
              break;
            case c.list:
              o = this.renderAgendaMarker(v, _);
              break;
            case c.dayColumns:
              o = o.concat(this.renderMultiple(v, _, this.renderVerticalMarker));
          }
          this.addWaiAriaLabel(o, v, _, i);
          this.addDataAttributes(o, v, _, i);
          for (var h = o.length - 1; h >= 0; h--) {
            if (o[h].offsetWidth) {
              return o[h];
            }
          }
          return null;
        },
        addDataAttributes: function (v, _, i, o) {
          for (var c = a.date.date_to_str(a.config.api_date), h = c(_), D = c(i), V = 0; V < v.length; V++) {
            v[V].setAttribute("data-start-date", h);
            v[V].setAttribute("data-end-date", D);
            if (o) {
              v[V].setAttribute("data-section", o);
            }
          }
        },
        addWaiAriaLabel: function (v, _, i, o) {
          var c = "";
          var h = a.getState().mode;
          var D = false;
          c += a.templates.day_date(_);
          if (a.date.day_start(new Date(_)).valueOf() != _.valueOf()) {
            c += " " + a.templates.hour_scale(_);
            D = true;
          }
          if (a.date.day_start(new Date(_)).valueOf() != a.date.day_start(new Date(i)).valueOf()) {
            c += " - " + a.templates.day_date(i);
            if (D || a.date.day_start(new Date(i)).valueOf() != i.valueOf()) {
              c += " " + a.templates.hour_scale(i);
            }
          }
          if (o) {
            if (a.matrix && a.matrix[h]) {
              c += ", " + a.templates[h + "_scale_label"](o.key, o.label, o);
            } else if (a._props && a._props[h]) {
              c += ", " + a.templates[h + "_scale_text"](o.key, o.label, o);
            }
          }
          for (var V = 0; V < v.length; V++) {
            a._waiAria.setAttributes(v[V], {
              "aria-label": c,
              "aria-live": "polite"
            });
          }
        },
        renderWeekAgendaMarker: function (v, _) {
          for (var i = a.$container.querySelectorAll(".dhx_wa_day_cont .dhx_wa_scale_bar"), o = a.date.week_start(new Date(a.getState().min_date)), c = -1, h = a.date.day_start(new Date(v)), D = 0; D < i.length && (c++, a.date.day_start(new Date(o)).valueOf() != h.valueOf()); D++) {
            o = a.date.add(o, 1, "day");
          }
          if (c != -1) {
            return this._wrapDiv(i[c]);
          } else {
            return [];
          }
        },
        _wrapDiv: function (v) {
          var _ = this.createElement();
          _.style.top = v.offsetTop + "px";
          _.style.left = v.offsetLeft + "px";
          _.style.width = v.offsetWidth + "px";
          _.style.height = v.offsetHeight + "px";
          v.appendChild(_);
          return [_];
        },
        renderYearMarker: function (v, _) {
          var i = a._get_year_cell(v);
          i.style.position = "relative";
          var o = this.createElement();
          o.style.top = "0px";
          o.style.left = "0px";
          o.style.width = "100%";
          o.style.height = "100%";
          i.appendChild(o);
          return [o];
        },
        renderAgendaMarker: function (v, _) {
          var i = this.createElement();
          i.style.height = "1px";
          i.style.width = "100%";
          i.style.opacity = 1;
          i.style.top = "0px";
          i.style.left = "0px";
          a.$container.querySelector(".dhx_cal_data").appendChild(i);
          return [i];
        },
        renderTimelineMarker: function (v, _, i) {
          var o = a._lame_copy({}, a.matrix[a._mode]);
          var c = o._scales;
          o.round_position = false;
          var h = [];
          var D = v ? new Date(v) : a._min_date;
          var V = _ ? new Date(_) : a._max_date;
          if (D.valueOf() < a._min_date.valueOf()) {
            D = new Date(a._min_date);
          }
          if (V.valueOf() > a._max_date.valueOf()) {
            V = new Date(a._max_date);
          }
          if (!o._trace_x) {
            return h;
          }
          for (var T = 0; T < o._trace_x.length && !a._is_column_visible(o._trace_x[T]); T++);
          if (T == o._trace_x.length) {
            return h;
          }
          var W = c[i];
          if (D >= _ || V <= v) {
            return h;
          }
          var z = this.createElement();
          var Z = a._timeline_getX({
            start_date: v
          }, false, o) - 1;
          var re = a._timeline_getX({
            start_date: _
          }, false, o) - 1;
          var oe = o._section_height[i] - 1 || o.dy - 1;
          var _e = 0;
          if (a._isRender("cell")) {
            _e = W.offsetTop;
            Z += o.dx;
            re += o.dx;
            W = a.$container.querySelector(".dhx_cal_data");
          }
          var he = Math.max(1, re - Z - 1);
          z.style.cssText = "height: " + oe + "px; left: " + Z + "px; width: " + he + "px; top: " + _e + "px;";
          if (W) {
            W.appendChild(z);
            h.push(z);
          }
          return h;
        },
        renderMonthCell: function (v) {
          for (var _ = a.$container.querySelectorAll(".dhx_month_head"), i = [], o = 0; o < _.length; o++) {
            i.push(_[o].parentNode);
          }
          var c = -1;
          var h = 0;
          var D = -1;
          var V = a.date.week_start(new Date(a.getState().min_date));
          var T = a.date.day_start(new Date(v));
          for (o = 0; o < i.length && (c++, D == 6 ? (h++, D = 0) : D++, a.date.day_start(new Date(V)).valueOf() != T.valueOf()); o++) {
            V = a.date.add(V, 1, "day");
          }
          if (c == -1) {
            return [];
          }
          var W = a._colsS[D];
          var z = a._colsS.heights[h];
          var Z = this.createElement();
          Z.style.top = z + "px";
          Z.style.left = W + "px";
          Z.style.width = a._cols[D] + "px";
          Z.style.height = (a._colsS.heights[h + 1] - z || a._colsS.height) + "px";
          var re = a.$container.querySelector(".dhx_cal_data");
          var oe = re.querySelector("table");
          if (oe.nextSibling) {
            re.insertBefore(Z, oe.nextSibling);
          } else {
            re.appendChild(Z);
          }
          return Z;
        },
        renderMonthMarker: function (v, _) {
          for (var i = [], o = v; o.valueOf() < _.valueOf();) {
            i.push(this.renderMonthCell(o));
            o = a.date.add(o, 1, "day");
          }
          return i;
        },
        renderVerticalMarker: function (v, _, i) {
          var o = a.locate_holder_day(v);
          var c = [];
          var h = null;
          var D = a.config;
          if (a._ignores[o]) {
            return c;
          }
          if (a._props && a._props[a._mode] && i) {
            var V = a._props[a._mode];
            o = V.order[i];
            var T = V.order[i];
            if (V.days > 1) {
              o = a.locate_holder_day(v) + T;
            } else {
              o = T;
              if (V.size && o > V.position + V.size) {
                o = 0;
              }
            }
          }
          if (!(h = a.locate_holder(o)) || h.querySelector(".dhx_scale_hour")) {
            return document.createElement("div");
          }
          var W = Math.max(v.getHours() * 60 + v.getMinutes(), D.first_hour * 60);
          var z = Math.min(_.getHours() * 60 + _.getMinutes(), D.last_hour * 60);
          if (!z && a.date.day_start(new Date(_)).valueOf() > a.date.day_start(new Date(v)).valueOf()) {
            z = D.last_hour * 60;
          }
          if (z <= W) {
            return [];
          }
          var Z = this.createElement();
          var re = a.config.hour_size_px * D.last_hour + 1;
          Z.style.top = Math.round((W * 60 * 1000 - a.config.first_hour * 3600000) * a.config.hour_size_px / 3600000) % re + "px";
          Z.style.lineHeight = Z.style.height = Math.max(Math.round((z - W) * 60 * 1000 * a.config.hour_size_px / 3600000) % re, 1) + "px";
          Z.style.width = "100%";
          h.appendChild(Z);
          c.push(Z);
          return c[0];
        }
      };
    })(t);
    (function (a) {
      a.$keyboardNavigation.SchedulerNode = function () {};
      a.$keyboardNavigation.SchedulerNode.prototype = a._compose(a.$keyboardNavigation.EventHandler, {
        getDefaultNode: function () {
          var v = new a.$keyboardNavigation.TimeSlot();
          if (!v.isValid()) {
            v = v.fallback();
          }
          return v;
        },
        _modes: {
          month: "month",
          year: "year",
          dayColumns: "dayColumns",
          timeline: "timeline",
          units: "units",
          weekAgenda: "weekAgenda",
          list: "list"
        },
        getMode: function () {
          var v = a.getState().mode;
          if (a.matrix && a.matrix[v]) {
            return this._modes.timeline;
          } else if (a._props && a._props[v]) {
            return this._modes.units;
          } else if (v == "month") {
            return this._modes.month;
          } else if (v == "year") {
            return this._modes.year;
          } else if (v == "week_agenda") {
            return this._modes.weekAgenda;
          } else if (v == "map" || v == "agenda" || a._grid && a["grid_" + v]) {
            return this._modes.list;
          } else {
            return this._modes.dayColumns;
          }
        },
        focus: function () {
          a.focus();
        },
        blur: function () {},
        disable: function () {
          a.$container.setAttribute("tabindex", "0");
        },
        enable: function () {
          if (a.$container) {
            a.$container.removeAttribute("tabindex");
          }
        },
        isEnabled: function () {
          return a.$container.hasAttribute("tabindex");
        },
        _compareEvents: function (v, _) {
          if (v.start_date.valueOf() == _.start_date.valueOf()) {
            if (v.id > _.id) {
              return 1;
            } else {
              return -1;
            }
          } else if (v.start_date.valueOf() > _.start_date.valueOf()) {
            return 1;
          } else {
            return -1;
          }
        },
        _pickEvent: function (v, _, i, o) {
          var c = a.getState();
          v = new Date(Math.max(c.min_date.valueOf(), v.valueOf()));
          _ = new Date(Math.min(c.max_date.valueOf(), _.valueOf()));
          var h = a.getEvents(v, _);
          h.sort(this._compareEvents);
          if (o) {
            h = h.reverse();
          }
          for (var D = !!i, V = 0; V < h.length && D; V++) {
            if (h[V].id == i) {
              D = false;
            }
            h.splice(V, 1);
            V--;
          }
          for (V = 0; V < h.length; V++) {
            if (new a.$keyboardNavigation.Event(h[V].id).getNode()) {
              return h[V];
            }
          }
          return null;
        },
        nextEventHandler: function (v) {
          var _ = a.$keyboardNavigation.dispatcher.activeNode;
          var i = v || _ && _.eventId;
          var o = null;
          if (i && a.getEvent(i)) {
            var c = a.getEvent(i);
            o = a.$keyboardNavigation.SchedulerNode.prototype._pickEvent(c.start_date, a.date.add(c.start_date, 1, "year"), c.id, false);
          }
          if (!o && !v) {
            var h = a.getState();
            o = a.$keyboardNavigation.SchedulerNode.prototype._pickEvent(h.min_date, a.date.add(h.min_date, 1, "year"), null, false);
          }
          if (o) {
            var D = new a.$keyboardNavigation.Event(o.id);
            if (D.isValid()) {
              if (_) {
                _.blur();
              }
              a.$keyboardNavigation.dispatcher.setActiveNode(D);
            } else {
              this.nextEventHandler(o.id);
            }
          }
        },
        prevEventHandler: function (v) {
          var _ = a.$keyboardNavigation.dispatcher.activeNode;
          var i = v || _ && _.eventId;
          var o = null;
          if (i && a.getEvent(i)) {
            var c = a.getEvent(i);
            o = a.$keyboardNavigation.SchedulerNode.prototype._pickEvent(a.date.add(c.end_date, -1, "year"), c.end_date, c.id, true);
          }
          if (!o && !v) {
            var h = a.getState();
            o = a.$keyboardNavigation.SchedulerNode.prototype._pickEvent(a.date.add(h.max_date, -1, "year"), h.max_date, null, true);
          }
          if (o) {
            var D = new a.$keyboardNavigation.Event(o.id);
            if (D.isValid()) {
              if (_) {
                _.blur();
              }
              a.$keyboardNavigation.dispatcher.setActiveNode(D);
            } else {
              this.prevEventHandler(o.id);
            }
          }
        },
        keys: {
          "alt+1, alt+2, alt+3, alt+4, alt+5, alt+6, alt+7, alt+8, alt+9": function (v) {
            var _ = a.$keyboardNavigation.HeaderCell.prototype.getNodes(".dhx_cal_navline .dhx_cal_tab");
            var i = v.key;
            if (i === undefined) {
              i = v.keyCode - 48;
            }
            if (_[i * 1 - 1]) {
              _[i * 1 - 1].click();
            }
          },
          "ctrl+left,meta+left": function (v) {
            a._click.dhx_cal_prev_button();
          },
          "ctrl+right,meta+right": function (v) {
            a._click.dhx_cal_next_button();
          },
          "ctrl+up,meta+up": function (v) {
            a.$container.querySelector(".dhx_cal_data").scrollTop -= 20;
          },
          "ctrl+down,meta+down": function (v) {
            a.$container.querySelector(".dhx_cal_data").scrollTop += 20;
          },
          e: function () {
            this.nextEventHandler();
          },
          home: function () {
            a.setCurrentView(new Date());
          },
          "shift+e": function () {
            this.prevEventHandler();
          },
          "ctrl+enter,meta+enter": function () {
            a.addEventNow({
              start_date: new Date(a.getState().date)
            });
          },
          "ctrl+c,meta+c": function (v) {
            a._key_nav_copy_paste(v);
          },
          "ctrl+v,meta+v": function (v) {
            a._key_nav_copy_paste(v);
          },
          "ctrl+x,meta+x": function (v) {
            a._key_nav_copy_paste(v);
          }
        }
      });
      a.$keyboardNavigation.SchedulerNode.prototype.bindAll(a.$keyboardNavigation.SchedulerNode.prototype.keys);
    })(t);
    (function (a) {
      a.$keyboardNavigation.KeyNavNode = function () {};
      a.$keyboardNavigation.KeyNavNode.prototype = a._compose(a.$keyboardNavigation.EventHandler, {
        isValid: function () {
          return true;
        },
        fallback: function () {
          return null;
        },
        moveTo: function (v) {
          a.$keyboardNavigation.dispatcher.setActiveNode(v);
        },
        compareTo: function (v) {
          if (!v) {
            return false;
          }
          for (var _ in this) {
            if (!!this[_] != !!v[_]) {
              return false;
            }
            var i = !!this[_] && !!this[_].toString;
            var o = !!v[_] && !!v[_].toString;
            if (o != i) {
              return false;
            }
            if (o && i) {
              if (v[_].toString() != this[_].toString()) {
                return false;
              }
            } else if (v[_] != this[_]) {
              return false;
            }
          }
          return true;
        },
        getNode: function () {},
        focus: function () {
          var v = this.getNode();
          if (v) {
            v.setAttribute("tabindex", "-1");
            if (v.focus) {
              v.focus();
            }
          }
        },
        blur: function () {
          var v = this.getNode();
          if (v) {
            v.setAttribute("tabindex", "-1");
          }
        }
      });
    })(t);
    (function (a) {
      a.$keyboardNavigation.HeaderCell = function (v) {
        this.index = v || 0;
      };
      a.$keyboardNavigation.HeaderCell.prototype = a._compose(a.$keyboardNavigation.KeyNavNode, {
        getNode: function (v) {
          v = v || this.index || 0;
          var _ = this.getNodes();
          if (_[v]) {
            return _[v];
          }
        },
        getNodes: function (v) {
          v = v || [".dhx_cal_navline .dhx_cal_prev_button", ".dhx_cal_navline .dhx_cal_next_button", ".dhx_cal_navline .dhx_cal_today_button", ".dhx_cal_navline .dhx_cal_tab"].join(", ");
          var _ = Array.prototype.slice.call(a.$container.querySelectorAll(v));
          _.sort(function (i, o) {
            return i.offsetLeft - o.offsetLeft;
          });
          return _;
        },
        _handlers: null,
        isValid: function () {
          return !!this.getNode(this.index);
        },
        fallback: function () {
          var v = this.getNode(0);
          v ||= new a.$keyboardNavigation.TimeSlot();
          return v;
        },
        keys: {
          left: function () {
            var v = this.index - 1;
            if (v < 0) {
              v = this.getNodes().length - 1;
            }
            this.moveTo(new a.$keyboardNavigation.HeaderCell(v));
          },
          right: function () {
            var v = this.index + 1;
            if (v >= this.getNodes().length) {
              v = 0;
            }
            this.moveTo(new a.$keyboardNavigation.HeaderCell(v));
          },
          down: function () {
            this.moveTo(new a.$keyboardNavigation.TimeSlot());
          },
          enter: function () {
            var v = this.getNode();
            if (v) {
              v.click();
            }
          }
        }
      });
      a.$keyboardNavigation.HeaderCell.prototype.bindAll(a.$keyboardNavigation.HeaderCell.prototype.keys);
    })(t);
    (function (a) {
      a.$keyboardNavigation.Event = function (v) {
        this.eventId = null;
        if (a.getEvent(v)) {
          var _ = a.getEvent(v);
          this.start = new Date(_.start_date);
          this.end = new Date(_.end_date);
          this.section = this._getSection(_);
          this.eventId = v;
        }
      };
      a.$keyboardNavigation.Event.prototype = a._compose(a.$keyboardNavigation.KeyNavNode, {
        _getNodes: function () {
          return Array.prototype.slice.call(a.$container.querySelectorAll("[" + a.config.event_attribute + "]"));
        },
        _modes: a.$keyboardNavigation.SchedulerNode.prototype._modes,
        getMode: a.$keyboardNavigation.SchedulerNode.prototype.getMode,
        _handlers: null,
        isValid: function () {
          return !!a.getEvent(this.eventId) && !!this.getNode();
        },
        fallback: function () {
          var v = this._getNodes()[0];
          var _ = null;
          if (v && a._locate_event(v)) {
            var i = a._locate_event(v);
            _ = new a.$keyboardNavigation.Event(i);
          } else {
            _ = new a.$keyboardNavigation.TimeSlot();
          }
          return _;
        },
        isScrolledIntoView: function (v) {
          var _ = v.getBoundingClientRect();
          var i = a.$container.querySelector(".dhx_cal_data").getBoundingClientRect();
          return _.bottom >= i.top && _.top <= i.bottom;
        },
        getNode: function () {
          var v = "[" + a.config.event_attribute + "='" + this.eventId + "']";
          var _ = a.$keyboardNavigation.dispatcher.getInlineEditor(this.eventId);
          if (_) {
            return _;
          }
          if (a.isMultisectionEvent && a.isMultisectionEvent(a.getEvent(this.eventId))) {
            for (var i = a.$container.querySelectorAll(v), o = 0; o < i.length; o++) {
              if (this.isScrolledIntoView(i[o])) {
                return i[o];
              }
            }
            return i[0];
          }
          return a.$container.querySelector(v);
        },
        focus: function () {
          var v = a.getEvent(this.eventId);
          var _ = a.getState();
          if (v.start_date.valueOf() > _.max_date.valueOf() || v.end_date.valueOf() <= _.min_date.valueOf()) {
            a.setCurrentView(v.start_date);
          }
          var i = this.getNode();
          if (this.isScrolledIntoView(i)) {
            a.$keyboardNavigation.dispatcher.keepScrollPosition(function () {
              a.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this);
            }.bind(this));
          } else {
            a.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this);
          }
        },
        blur: function () {
          a.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this);
        },
        _getSection: function (v) {
          var _ = null;
          var i = a.getState().mode;
          if (a.matrix && a.matrix[i]) {
            _ = v[a.matrix[a.getState().mode].y_property];
          } else if (a._props && a._props[i]) {
            _ = v[a._props[i].map_to];
          }
          return _;
        },
        _moveToSlot: function (v) {
          var _ = a.getEvent(this.eventId);
          if (_) {
            var i = this._getSection(_);
            var o = new a.$keyboardNavigation.TimeSlot(_.start_date, null, i);
            this.moveTo(o.nextSlot(o, v));
          } else {
            this.moveTo(new a.$keyboardNavigation.TimeSlot());
          }
        },
        keys: {
          left: function () {
            this._moveToSlot("left");
          },
          right: function () {
            this._moveToSlot("right");
          },
          down: function () {
            if (this.getMode() == this._modes.list) {
              a.$keyboardNavigation.SchedulerNode.prototype.nextEventHandler();
            } else {
              this._moveToSlot("down");
            }
          },
          space: function () {
            var v = this.getNode();
            if (v && v.click) {
              v.click();
            } else {
              this.moveTo(new a.$keyboardNavigation.TimeSlot());
            }
          },
          up: function () {
            if (this.getMode() == this._modes.list) {
              a.$keyboardNavigation.SchedulerNode.prototype.prevEventHandler();
            } else {
              this._moveToSlot("up");
            }
          },
          delete: function () {
            if (a.getEvent(this.eventId)) {
              a._click.buttons.delete(this.eventId);
            } else {
              this.moveTo(new a.$keyboardNavigation.TimeSlot());
            }
          },
          enter: function () {
            if (a.getEvent(this.eventId)) {
              a.showLightbox(this.eventId);
            } else {
              this.moveTo(new a.$keyboardNavigation.TimeSlot());
            }
          }
        }
      });
      a.$keyboardNavigation.Event.prototype.bindAll(a.$keyboardNavigation.Event.prototype.keys);
    })(t);
    (function (a) {
      a.$keyboardNavigation.TimeSlot = function (v, _, i, o) {
        var c = a.getState();
        var h = a.matrix && a.matrix[c.mode];
        v ||= this.getDefaultDate();
        _ ||= h ? a.date.add(v, h.x_step, h.x_unit) : a.date.add(v, a.config.key_nav_step, "minute");
        this.section = i || this._getDefaultSection();
        this.start_date = new Date(v);
        this.end_date = new Date(_);
        this.movingDate = o || null;
      };
      a.$keyboardNavigation.TimeSlot.prototype = a._compose(a.$keyboardNavigation.KeyNavNode, {
        _handlers: null,
        getDefaultDate: function () {
          var v;
          var _ = a.getState();
          var i = new Date(_.date);
          i.setSeconds(0);
          i.setMilliseconds(0);
          var o = new Date();
          o.setSeconds(0);
          o.setMilliseconds(0);
          var c = a.matrix && a.matrix[_.mode];
          var h = false;
          if (i.valueOf() === o.valueOf()) {
            h = true;
          }
          if (c) {
            if (h) {
              if (c.x_unit === "day") {
                o.setHours(0);
                o.setMinutes(0);
              } else if (c.x_unit === "hour") {
                o.setMinutes(0);
              }
              v = o;
            } else {
              v = a.date[c.name + "_start"](new Date(_.date));
            }
            v = this.findVisibleColumn(v);
          } else {
            v = new Date(a.getState().min_date);
            if (h) {
              v = o;
            }
            v = this.findVisibleColumn(v);
            if (!h) {
              v.setHours(a.config.first_hour);
            }
            if (!a._table_view) {
              var D = a.$container.querySelector(".dhx_cal_data");
              if (D.scrollTop) {
                v.setHours(a.config.first_hour + Math.ceil(D.scrollTop / a.config.hour_size_px));
              }
            }
          }
          return v;
        },
        clone: function (v) {
          return new a.$keyboardNavigation.TimeSlot(v.start_date, v.end_date, v.section, v.movingDate);
        },
        _getMultisectionView: function () {
          var v;
          var _ = a.getState();
          if (a._props && a._props[_.mode]) {
            v = a._props[_.mode];
          } else if (a.matrix && a.matrix[_.mode]) {
            v = a.matrix[_.mode];
          }
          return v;
        },
        _getDefaultSection: function () {
          var v = null;
          if (this._getMultisectionView() && !v) {
            v = this._getNextSection();
          }
          return v;
        },
        _getNextSection: function (v, _) {
          var i = this._getMultisectionView();
          var o = i.order[v];
          var c = o;
          if ((c = o !== undefined ? o + _ : i.size && i.position ? i.position : 0) < 0) {
            c = 0;
          }
          var h = i.options || i.y_unit;
          if (c >= h.length) {
            c = h.length - 1;
          }
          if (h[c]) {
            return h[c].key;
          } else {
            return null;
          }
        },
        isValid: function () {
          var v = a.getState();
          if (this.start_date.valueOf() < v.min_date.valueOf() || this.start_date.valueOf() >= v.max_date.valueOf() || !this.isVisible(this.start_date, this.end_date)) {
            return false;
          }
          var _ = this._getMultisectionView();
          return !_ || _.order[this.section] !== undefined;
        },
        fallback: function () {
          var v = new a.$keyboardNavigation.TimeSlot();
          if (v.isValid()) {
            return v;
          } else {
            return new a.$keyboardNavigation.DataArea();
          }
        },
        getNodes: function () {
          return Array.prototype.slice.call(a.$container.querySelectorAll(".dhx_focus_slot"));
        },
        getNode: function () {
          return this.getNodes()[0];
        },
        focus: function () {
          if (this.section && a.getView() && a.getView().smart_rendering && a.getView().scrollTo && !a.$container.querySelector(`[data-section-id="${this.section}"]`)) {
            a.getView().scrollTo({
              section: this.section
            });
          }
          a.$keyboardNavigation.marker.render(this.start_date, this.end_date, this.section);
          a.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this);
          a.$keyboardNavigation._pasteDate = this.start_date;
          a.$keyboardNavigation._pasteSection = this.section;
        },
        blur: function () {
          a.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this);
          a.$keyboardNavigation.marker.clear();
        },
        _modes: a.$keyboardNavigation.SchedulerNode.prototype._modes,
        _getMode: a.$keyboardNavigation.SchedulerNode.prototype.getMode,
        addMonthDate: function (v, _, i) {
          var o;
          switch (_) {
            case "up":
              o = a.date.add(v, -1, "week");
              break;
            case "down":
              o = a.date.add(v, 1, "week");
              break;
            case "left":
              o = a.date.day_start(a.date.add(v, -1, "day"));
              o = this.findVisibleColumn(o, -1);
              break;
            case "right":
              o = a.date.day_start(a.date.add(v, 1, "day"));
              o = this.findVisibleColumn(o, 1);
              break;
            default:
              o = a.date.day_start(new Date(v));
          }
          var c = a.getState();
          if (v.valueOf() < c.min_date.valueOf() || !i && v.valueOf() >= c.max_date.valueOf()) {
            o = new Date(c.min_date);
          }
          return o;
        },
        nextMonthSlot: function (v, _, i) {
          var o;
          var c;
          (o = this.addMonthDate(v.start_date, _, i)).setHours(a.config.first_hour);
          (c = new Date(o)).setHours(a.config.last_hour);
          return {
            start_date: o,
            end_date: c
          };
        },
        _alignTimeSlot: function (v, _, i, o) {
          for (var c = new Date(_); c.valueOf() < v.valueOf();) {
            c = a.date.add(c, o, i);
          }
          if (c.valueOf() > v.valueOf()) {
            c = a.date.add(c, -o, i);
          }
          return c;
        },
        nextTimelineSlot: function (v, _, i) {
          var o = a.getState();
          var c = a.matrix[o.mode];
          var h = this._alignTimeSlot(v.start_date, a.date[c.name + "_start"](new Date(v.start_date)), c.x_unit, c.x_step);
          var D = this._alignTimeSlot(v.end_date, a.date[c.name + "_start"](new Date(v.end_date)), c.x_unit, c.x_step);
          if (D.valueOf() <= h.valueOf()) {
            D = a.date.add(h, c.x_step, c.x_unit);
          }
          var V = this.clone(v);
          V.start_date = h;
          V.end_date = D;
          V.section = v.section || this._getNextSection();
          switch (_) {
            case "up":
              V.section = this._getNextSection(v.section, -1);
              break;
            case "down":
              V.section = this._getNextSection(v.section, 1);
              break;
            case "left":
              V.start_date = this.findVisibleColumn(a.date.add(V.start_date, -c.x_step, c.x_unit), -1);
              V.end_date = a.date.add(V.start_date, c.x_step, c.x_unit);
              break;
            case "right":
              V.start_date = this.findVisibleColumn(a.date.add(V.start_date, c.x_step, c.x_unit), 1);
              V.end_date = a.date.add(V.start_date, c.x_step, c.x_unit);
          }
          if (V.start_date.valueOf() < o.min_date.valueOf() || V.start_date.valueOf() >= o.max_date.valueOf()) {
            if (i && V.start_date.valueOf() >= o.max_date.valueOf()) {
              V.start_date = new Date(o.max_date);
            } else {
              V.start_date = a.date[o.mode + "_start"](a.date.add(o.date, _ == "left" ? -1 : 1, o.mode));
              V.end_date = a.date.add(V.start_date, c.x_step, c.x_unit);
            }
          }
          return V;
        },
        nextUnitsSlot: function (v, _, i) {
          var o = this.clone(v);
          o.section = v.section || this._getNextSection();
          var c = v.section || this._getNextSection();
          var h = a.getState();
          var D = a._props[h.mode];
          switch (_) {
            case "left":
              c = this._getNextSection(v.section, -1);
              if (D.days > 1 && D.order[c] == (D.size ? D.size - 1 : D.options.length) - 1 && a.date.add(v.start_date, -1, "day").valueOf() >= h.min_date.valueOf()) {
                o = this.nextDaySlot(v, _, i);
              }
              break;
            case "right":
              c = this._getNextSection(v.section, 1);
              if (D.days > 1 && !D.order[c] && a.date.add(v.start_date, 1, "day").valueOf() < h.max_date.valueOf()) {
                o = this.nextDaySlot(v, _, i);
              }
              break;
            default:
              o = this.nextDaySlot(v, _, i);
              c = v.section;
          }
          o.section = c;
          return o;
        },
        _moveDate: function (v, _) {
          var i = this.findVisibleColumn(a.date.add(v, _, "day"), _);
          i.setHours(v.getHours());
          i.setMinutes(v.getMinutes());
          return i;
        },
        isBeforeLastHour: function (v, _) {
          var i = v.getMinutes();
          var o = v.getHours();
          var c = a.config.last_hour;
          return o < c || !_ && (c == 24 || o == c) && !i;
        },
        isAfterFirstHour: function (v, _) {
          var i = v.getMinutes();
          var o = v.getHours();
          var h = a.config.last_hour;
          return o >= a.config.first_hour || !_ && !i && (!o && h == 24 || o == h);
        },
        isInVisibleDayTime: function (v, _) {
          return this.isBeforeLastHour(v, _) && this.isAfterFirstHour(v, _);
        },
        nextDaySlot: function (v, _, i) {
          var o;
          var c;
          var h = a.config.key_nav_step;
          var D = this._alignTimeSlot(v.start_date, a.date.day_start(new Date(v.start_date)), "minute", h);
          var V = v.start_date;
          switch (_) {
            case "up":
              o = a.date.add(D, -h, "minute");
              if (!this.isInVisibleDayTime(o, true) && (!i || this.isInVisibleDayTime(V, true))) {
                var T = true;
                if (i && a.date.date_part(new Date(o)).valueOf() != a.date.date_part(new Date(V)).valueOf()) {
                  T = false;
                }
                if (T) {
                  o = this.findVisibleColumn(a.date.add(v.start_date, -1, "day"), -1);
                }
                o.setHours(a.config.last_hour);
                o.setMinutes(0);
                o = a.date.add(o, -h, "minute");
              }
              c = a.date.add(o, h, "minute");
              break;
            case "down":
              o = a.date.add(D, h, "minute");
              var W = i ? o : a.date.add(o, h, "minute");
              if (!this.isInVisibleDayTime(W, false) && (!i || !!this.isInVisibleDayTime(V, false))) {
                if (i) {
                  T = true;
                  if (a.date.date_part(new Date(V)).valueOf() == V.valueOf()) {
                    T = false;
                  }
                  if (T) {
                    o = this.findVisibleColumn(a.date.add(v.start_date, 1, "day"), 1);
                  }
                  o.setHours(a.config.first_hour);
                  o.setMinutes(0);
                  o = a.date.add(o, h, "minute");
                } else {
                  (o = this.findVisibleColumn(a.date.add(v.start_date, 1, "day"), 1)).setHours(a.config.first_hour);
                  o.setMinutes(0);
                }
              }
              c = a.date.add(o, h, "minute");
              break;
            case "left":
              o = this._moveDate(v.start_date, -1);
              c = this._moveDate(v.end_date, -1);
              break;
            case "right":
              o = this._moveDate(v.start_date, 1);
              c = this._moveDate(v.end_date, 1);
              break;
            default:
              c = a.date.add(o = D, h, "minute");
          }
          return {
            start_date: o,
            end_date: c
          };
        },
        nextWeekAgendaSlot: function (v, _) {
          var i;
          var o;
          var c = a.getState();
          switch (_) {
            case "down":
            case "left":
              i = a.date.day_start(a.date.add(v.start_date, -1, "day"));
              i = this.findVisibleColumn(i, -1);
              break;
            case "up":
            case "right":
              i = a.date.day_start(a.date.add(v.start_date, 1, "day"));
              i = this.findVisibleColumn(i, 1);
              break;
            default:
              i = a.date.day_start(v.start_date);
          }
          if (v.start_date.valueOf() < c.min_date.valueOf() || v.start_date.valueOf() >= c.max_date.valueOf()) {
            i = new Date(c.min_date);
          }
          (o = new Date(i)).setHours(a.config.last_hour);
          return {
            start_date: i,
            end_date: o
          };
        },
        nextAgendaSlot: function (v, _) {
          return {
            start_date: v.start_date,
            end_date: v.end_date
          };
        },
        isDateVisible: function (v) {
          if (!a._ignores_detected) {
            return true;
          }
          var _;
          var i = a.matrix && a.matrix[a.getState().mode];
          _ = i ? a._get_date_index(i, v) : a.locate_holder_day(v);
          return !a._ignores[_];
        },
        findVisibleColumn: function (v, _) {
          var i = v;
          _ = _ || 1;
          for (var o = a.getState(); !this.isDateVisible(i) && (_ > 0 && i.valueOf() <= o.max_date.valueOf() || _ < 0 && i.valueOf() >= o.min_date.valueOf());) {
            i = this.nextDateColumn(i, _);
          }
          return i;
        },
        nextDateColumn: function (v, _) {
          _ = _ || 1;
          var i = a.matrix && a.matrix[a.getState().mode];
          if (i) {
            return a.date.add(v, _ * i.x_step, i.x_unit);
          } else {
            return a.date.day_start(a.date.add(v, _, "day"));
          }
        },
        isVisible: function (v, _) {
          if (!a._ignores_detected) {
            return true;
          }
          for (var i = new Date(v); i.valueOf() < _.valueOf();) {
            if (this.isDateVisible(i)) {
              return true;
            }
            i = this.nextDateColumn(i);
          }
          return false;
        },
        nextSlot: function (v, _, i, o) {
          var c;
          i = i || this._getMode();
          var h = a.$keyboardNavigation.TimeSlot.prototype.clone(v);
          switch (i) {
            case this._modes.units:
              c = this.nextUnitsSlot(h, _, o);
              break;
            case this._modes.timeline:
              c = this.nextTimelineSlot(h, _, o);
              break;
            case this._modes.year:
            case this._modes.month:
              c = this.nextMonthSlot(h, _, o);
              break;
            case this._modes.weekAgenda:
              c = this.nextWeekAgendaSlot(h, _, o);
              break;
            case this._modes.list:
              c = this.nextAgendaSlot(h, _, o);
              break;
            case this._modes.dayColumns:
              c = this.nextDaySlot(h, _, o);
          }
          if (c.start_date.valueOf() >= c.end_date.valueOf()) {
            c = this.nextSlot(c, _, i);
          }
          return a.$keyboardNavigation.TimeSlot.prototype.clone(c);
        },
        extendSlot: function (v, _) {
          var i;
          switch (this._getMode()) {
            case this._modes.units:
              i = _ == "left" || _ == "right" ? this.nextUnitsSlot(v, _) : this.extendUnitsSlot(v, _);
              break;
            case this._modes.timeline:
              i = _ == "down" || _ == "up" ? this.nextTimelineSlot(v, _) : this.extendTimelineSlot(v, _);
              break;
            case this._modes.year:
            case this._modes.month:
              i = this.extendMonthSlot(v, _);
              break;
            case this._modes.dayColumns:
              i = this.extendDaySlot(v, _);
              break;
            case this._modes.weekAgenda:
              i = this.extendWeekAgendaSlot(v, _);
              break;
            default:
              i = v;
          }
          var o = a.getState();
          if (i.start_date.valueOf() < o.min_date.valueOf()) {
            i.start_date = this.findVisibleColumn(o.min_date);
            i.start_date.setHours(a.config.first_hour);
          }
          if (i.end_date.valueOf() > o.max_date.valueOf()) {
            i.end_date = this.findVisibleColumn(o.max_date, -1);
          }
          return a.$keyboardNavigation.TimeSlot.prototype.clone(i);
        },
        extendTimelineSlot: function (v, _) {
          return this.extendGenericSlot({
            left: "start_date",
            right: "end_date"
          }, v, _, "timeline");
        },
        extendWeekAgendaSlot: function (v, _) {
          return this.extendGenericSlot({
            left: "start_date",
            right: "end_date"
          }, v, _, "weekAgenda");
        },
        extendGenericSlot: function (v, _, i, o) {
          var c;
          var h = _.movingDate;
          h ||= v[i];
          if (!h || !v[i]) {
            return _;
          }
          if (!i) {
            return a.$keyboardNavigation.TimeSlot.prototype.clone(_);
          }
          if ((c = this.nextSlot({
            start_date: _[h],
            section: _.section
          }, i, o, true)).start_date.valueOf() == _.start_date.valueOf()) {
            c = this.nextSlot({
              start_date: c.start_date,
              section: c.section
            }, i, o, true);
          }
          c.movingDate = h;
          var D = this.extendSlotDates(_, c, c.movingDate);
          if (D.end_date.valueOf() <= D.start_date.valueOf()) {
            c.movingDate = c.movingDate == "end_date" ? "start_date" : "end_date";
          }
          D = this.extendSlotDates(_, c, c.movingDate);
          c.start_date = D.start_date;
          c.end_date = D.end_date;
          return c;
        },
        extendSlotDates: function (v, _, i) {
          var o = {
            start_date: null,
            end_date: null
          };
          if (i == "start_date") {
            o.start_date = _.start_date;
            o.end_date = v.end_date;
          } else {
            o.start_date = v.start_date;
            o.end_date = _.start_date;
          }
          return o;
        },
        extendMonthSlot: function (v, _) {
          (v = this.extendGenericSlot({
            up: "start_date",
            down: "end_date",
            left: "start_date",
            right: "end_date"
          }, v, _, "month")).start_date.setHours(a.config.first_hour);
          v.end_date = a.date.add(v.end_date, -1, "day");
          v.end_date.setHours(a.config.last_hour);
          return v;
        },
        extendUnitsSlot: function (v, _) {
          var i;
          switch (_) {
            case "down":
            case "up":
              i = this.extendDaySlot(v, _);
              break;
            default:
              i = v;
          }
          i.section = v.section;
          return i;
        },
        extendDaySlot: function (v, _) {
          return this.extendGenericSlot({
            up: "start_date",
            down: "end_date",
            left: "start_date",
            right: "end_date"
          }, v, _, "dayColumns");
        },
        scrollSlot: function (v) {
          var _ = a.getState();
          var i = this.nextSlot(this, v);
          if (i.start_date.valueOf() < _.min_date.valueOf() || i.start_date.valueOf() >= _.max_date.valueOf()) {
            a.setCurrentView(new Date(i.start_date));
          }
          this.moveTo(i);
        },
        keys: {
          left: function () {
            this.scrollSlot("left");
          },
          right: function () {
            this.scrollSlot("right");
          },
          down: function () {
            if (this._getMode() == this._modes.list) {
              a.$keyboardNavigation.SchedulerNode.prototype.nextEventHandler();
            } else {
              this.scrollSlot("down");
            }
          },
          up: function () {
            if (this._getMode() == this._modes.list) {
              a.$keyboardNavigation.SchedulerNode.prototype.prevEventHandler();
            } else {
              this.scrollSlot("up");
            }
          },
          "shift+down": function () {
            this.moveTo(this.extendSlot(this, "down"));
          },
          "shift+up": function () {
            this.moveTo(this.extendSlot(this, "up"));
          },
          "shift+right": function () {
            this.moveTo(this.extendSlot(this, "right"));
          },
          "shift+left": function () {
            this.moveTo(this.extendSlot(this, "left"));
          },
          enter: function () {
            var v = {
              start_date: new Date(this.start_date),
              end_date: new Date(this.end_date)
            };
            var _ = a.getState().mode;
            if (a.matrix && a.matrix[_]) {
              v[a.matrix[a.getState().mode].y_property] = this.section;
            } else if (a._props && a._props[_]) {
              v[a._props[_].map_to] = this.section;
            }
            a.addEventNow(v);
          }
        }
      });
      a.$keyboardNavigation.TimeSlot.prototype.bindAll(a.$keyboardNavigation.TimeSlot.prototype.keys);
    })(t);
    (function (a) {
      a.$keyboardNavigation.MinicalButton = function (v, _) {
        this.container = v;
        this.index = _ || 0;
      };
      a.$keyboardNavigation.MinicalButton.prototype = a._compose(a.$keyboardNavigation.KeyNavNode, {
        isValid: function () {
          return !!this.container.offsetWidth;
        },
        fallback: function () {
          var v = new a.$keyboardNavigation.TimeSlot();
          if (v.isValid()) {
            return v;
          } else {
            return new a.$keyboardNavigation.DataArea();
          }
        },
        focus: function () {
          a.$keyboardNavigation.dispatcher.globalNode.disable();
          this.container.removeAttribute("tabindex");
          a.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this);
        },
        blur: function () {
          this.container.setAttribute("tabindex", "0");
          a.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this);
        },
        getNode: function () {
          return this.container.querySelector(this.index ? ".dhx_cal_next_button" : ".dhx_cal_prev_button");
        },
        keys: {
          right: function (v) {
            this.moveTo(new a.$keyboardNavigation.MinicalButton(this.container, this.index ? 0 : 1));
          },
          left: function (v) {
            this.moveTo(new a.$keyboardNavigation.MinicalButton(this.container, this.index ? 0 : 1));
          },
          down: function () {
            var v = new a.$keyboardNavigation.MinicalCell(this.container, 0, 0);
            if (v && !v.isValid()) {
              v = v.fallback();
            }
            this.moveTo(v);
          },
          enter: function (v) {
            this.getNode().click();
          }
        }
      });
      a.$keyboardNavigation.MinicalButton.prototype.bindAll(a.$keyboardNavigation.MinicalButton.prototype.keys);
    })(t);
    (function (a) {
      a.$keyboardNavigation.MinicalCell = function (v, _, i) {
        this.container = v;
        this.row = _ || 0;
        this.col = i || 0;
      };
      a.$keyboardNavigation.MinicalCell.prototype = a._compose(a.$keyboardNavigation.KeyNavNode, {
        isValid: function () {
          var v = this._getGrid();
          return !!v[this.row] && !!v[this.row][this.col];
        },
        fallback: function () {
          var v = this.row;
          var _ = this.col;
          var i = this._getGrid();
          if (!i[v]) {
            v = 0;
          }
          var o = true;
          if (v > i.length / 2) {
            o = false;
          }
          if (!i[v]) {
            var c = new a.$keyboardNavigation.TimeSlot();
            if (c.isValid()) {
              return c;
            } else {
              return new a.$keyboardNavigation.DataArea();
            }
          }
          if (o) {
            for (var h = _; i[v] && h < i[v].length; h++) {
              if (!i[v][h] && h == i[v].length - 1) {
                v++;
                _ = 0;
              }
              if (i[v][h]) {
                return new a.$keyboardNavigation.MinicalCell(this.container, v, h);
              }
            }
          } else {
            for (h = _; i[v] && h < i[v].length; h--) {
              if (!i[v][h] && !h) {
                _ = i[--v].length - 1;
              }
              if (i[v][h]) {
                return new a.$keyboardNavigation.MinicalCell(this.container, v, h);
              }
            }
          }
          return new a.$keyboardNavigation.MinicalButton(this.container, 0);
        },
        focus: function () {
          a.$keyboardNavigation.dispatcher.globalNode.disable();
          this.container.removeAttribute("tabindex");
          a.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this);
        },
        blur: function () {
          this.container.setAttribute("tabindex", "0");
          a.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this);
        },
        _getNode: function (v, _) {
          return this.container.querySelector(".dhx_year_body tr:nth-child(" + (v + 1) + ") td:nth-child(" + (_ + 1) + ")");
        },
        getNode: function () {
          return this._getNode(this.row, this.col);
        },
        _getGrid: function () {
          for (var v = this.container.querySelectorAll(".dhx_year_body tr"), _ = [], i = 0; i < v.length; i++) {
            _[i] = [];
            for (var o = v[i].querySelectorAll("td"), c = 0; c < o.length; c++) {
              var D = true;
              var V = a._getClassName(o[c]);
              if (V.indexOf("dhx_after") > -1 || V.indexOf("dhx_before") > -1 || V.indexOf("dhx_scale_ignore") > -1) {
                D = false;
              }
              _[i][c] = D;
            }
          }
          return _;
        },
        keys: {
          right: function (v) {
            var _ = this._getGrid();
            var i = this.row;
            var o = this.col + 1;
            if (!_[i] || !_[i][o]) {
              if (_[i + 1]) {
                i += 1;
                o = 0;
              } else {
                o = this.col;
              }
            }
            var c = new a.$keyboardNavigation.MinicalCell(this.container, i, o);
            if (!c.isValid()) {
              c = c.fallback();
            }
            this.moveTo(c);
          },
          left: function (v) {
            var _ = this._getGrid();
            var i = this.row;
            var o = this.col - 1;
            if (!_[i] || !_[i][o]) {
              o = _[i - 1] ? _[i -= 1].length - 1 : this.col;
            }
            var c = new a.$keyboardNavigation.MinicalCell(this.container, i, o);
            if (!c.isValid()) {
              c = c.fallback();
            }
            this.moveTo(c);
          },
          down: function () {
            var v = this._getGrid();
            var _ = this.row + 1;
            var i = this.col;
            if (!v[_] || !v[_][i]) {
              _ = this.row;
            }
            var o = new a.$keyboardNavigation.MinicalCell(this.container, _, i);
            if (!o.isValid()) {
              o = o.fallback();
            }
            this.moveTo(o);
          },
          up: function () {
            var v = this._getGrid();
            var _ = this.row - 1;
            var i = this.col;
            if (v[_] && v[_][i]) {
              var o = new a.$keyboardNavigation.MinicalCell(this.container, _, i);
              if (!o.isValid()) {
                o = o.fallback();
              }
              this.moveTo(o);
            } else {
              var c = 0;
              if (this.col > v[this.row].length / 2) {
                c = 1;
              }
              this.moveTo(new a.$keyboardNavigation.MinicalButton(this.container, c));
            }
          },
          enter: function (v) {
            this.getNode().querySelector(".dhx_month_head").click();
          }
        }
      });
      a.$keyboardNavigation.MinicalCell.prototype.bindAll(a.$keyboardNavigation.MinicalCell.prototype.keys);
    })(t);
    (function (a) {
      a.$keyboardNavigation.DataArea = function (v) {
        this.index = v || 0;
      };
      a.$keyboardNavigation.DataArea.prototype = a._compose(a.$keyboardNavigation.KeyNavNode, {
        getNode: function (v) {
          return a.$container.querySelector(".dhx_cal_data");
        },
        _handlers: null,
        isValid: function () {
          return true;
        },
        fallback: function () {
          return this;
        },
        keys: {
          "up,down,right,left": function () {
            this.moveTo(new a.$keyboardNavigation.TimeSlot());
          }
        }
      });
      a.$keyboardNavigation.DataArea.prototype.bindAll(a.$keyboardNavigation.DataArea.prototype.keys);
    })(t);
    (function (t) {
      (function () {
        var j = [];
        function a() {
          return !!j.length;
        }
        function v(h) {
          setTimeout(function () {
            if (!a() && !function (D, V) {
              for (; D && D != V;) {
                D = D.parentNode;
              }
              return D == V;
            }(document.activeElement, t.$container)) {
              t.focus();
            }
          }, 1);
        }
        function _(h) {
          var D = (h = h || window.event).currentTarget;
          if (D == j[j.length - 1]) {
            t.$keyboardNavigation.trapFocus(D, h);
          }
        }
        t.attachEvent("onLightbox", function () {
          var h;
          h = t.getLightbox();
          t.eventRemove(h, "keydown", _);
          t.event(h, "keydown", _);
          j.push(h);
        });
        t.attachEvent("onAfterLightbox", function () {
          var h = j.pop();
          if (h) {
            t.eventRemove(h, "keydown", _);
          }
          v();
        });
        t.attachEvent("onAfterQuickInfo", function () {
          v();
        });
        if (!t._keyNavMessagePopup) {
          t._keyNavMessagePopup = true;
          var i = null;
          var o = null;
          var c = [];
          t.attachEvent("onMessagePopup", function (h) {
            i = document.activeElement;
            o = i;
            for (; o && t._getClassName(o).indexOf("dhx_cal_data") < 0;) {
              o = o.parentNode;
            }
            o &&= o.parentNode;
            t.eventRemove(h, "keydown", _);
            t.event(h, "keydown", _);
            c.push(h);
          });
          t.attachEvent("onAfterMessagePopup", function () {
            var h = c.pop();
            if (h) {
              t.eventRemove(h, "keydown", _);
            }
            setTimeout(function () {
              for (var D = document.activeElement; D && t._getClassName(D).indexOf("dhx_cal_light") < 0;) {
                D = D.parentNode;
              }
              if (!D) {
                if (i && i.parentNode) {
                  i.focus();
                } else if (o && o.parentNode) {
                  o.focus();
                }
                i = null;
                o = null;
              }
            }, 1);
          });
        }
        t.$keyboardNavigation.isModal = a;
      })();
    })(t);
    (function (a) {
      a.$keyboardNavigation.dispatcher = {
        isActive: false,
        activeNode: null,
        globalNode: new a.$keyboardNavigation.SchedulerNode(),
        keepScrollPosition: function (v) {
          var _;
          var i;
          var o = a.$container.querySelector(".dhx_timeline_scrollable_data");
          o ||= a.$container.querySelector(".dhx_cal_data");
          if (o) {
            _ = o.scrollTop;
            i = o.scrollLeft;
          }
          v();
          if (o) {
            o.scrollTop = _;
            o.scrollLeft = i;
          }
        },
        enable: function () {
          if (a.$container) {
            this.isActive = true;
            var v = this;
            this.keepScrollPosition(function () {
              v.globalNode.enable();
              v.setActiveNode(v.getActiveNode());
            });
          }
        },
        disable: function () {
          this.isActive = false;
          this.globalNode.disable();
        },
        isEnabled: function () {
          return !!this.isActive;
        },
        getDefaultNode: function () {
          return this.globalNode.getDefaultNode();
        },
        setDefaultNode: function () {
          this.setActiveNode(this.getDefaultNode());
        },
        getActiveNode: function () {
          var v = this.activeNode;
          if (v && !v.isValid()) {
            v = v.fallback();
          }
          return v;
        },
        focusGlobalNode: function () {
          this.blurNode(this.globalNode);
          this.focusNode(this.globalNode);
        },
        setActiveNode: function (v) {
          if (v && v.isValid()) {
            if (!this.activeNode || !this.activeNode.compareTo(v)) {
              if (this.isEnabled()) {
                this.blurNode(this.activeNode);
                this.activeNode = v;
                this.focusNode(this.activeNode);
              }
            }
          }
        },
        focusNode: function (v) {
          if (v && v.focus) {
            v.focus();
            if (v.getNode && document.activeElement != v.getNode()) {
              this.setActiveNode(new a.$keyboardNavigation.DataArea());
            }
          }
        },
        blurNode: function (v) {
          if (v && v.blur) {
            v.blur();
          }
        },
        getInlineEditor: function (v) {
          var _ = a.$container.querySelector(".dhx_cal_editor[" + a.config.event_attribute + "='" + v + "'] textarea");
          if (_ && _.offsetWidth) {
            return _;
          } else {
            return null;
          }
        },
        keyDownHandler: function (v) {
          if (!v.defaultPrevented) {
            var _ = this.getActiveNode();
            if ((!a.$keyboardNavigation.isModal() || _ && _.container && a.utils.dom.locateCss({
              target: _.container
            }, "dhx_minical_popup", false)) && (!a.getState().editor_id || !this.getInlineEditor(a.getState().editor_id)) && this.isEnabled()) {
              v = v || window.event;
              var i = this.globalNode;
              var o = a.$keyboardNavigation.shortcuts.getCommandFromEvent(v);
              if (_) {
                if (_.findHandler(o)) {
                  _.doAction(o, v);
                } else if (i.findHandler(o)) {
                  i.doAction(o, v);
                }
              } else {
                this.setDefaultNode();
              }
            }
          }
        },
        _timeout: null,
        delay: function (v, _) {
          clearTimeout(this._timeout);
          this._timeout = setTimeout(v, _ || 1);
        }
      };
    })(t);
    (function (t) {
      t._temp_key_scope = function () {
        t.config.key_nav = true;
        t.$keyboardNavigation._pasteDate = null;
        t.$keyboardNavigation._pasteSection = null;
        var j = null;
        var a = {};
        function v(o) {
          o = o || window.event;
          a.x = o.clientX;
          a.y = o.clientY;
        }
        function _() {
          for (var o, c, h = document.elementFromPoint(a.x, a.y); h && h != t._obj;) {
            h = h.parentNode;
          }
          o = h == t._obj;
          c = t.$keyboardNavigation.dispatcher.isEnabled();
          return o || c;
        }
        function i(o) {
          return t._lame_copy({}, o);
        }
        if (document.body) {
          t.event(document.body, "mousemove", v);
        } else {
          t.event(window, "load", function () {
            t.event(document.body, "mousemove", v);
          });
        }
        t.attachEvent("onMouseMove", function (o, c) {
          var h = t.getState();
          if (h.mode && h.min_date) {
            var D = t.getActionData(c);
            t.$keyboardNavigation._pasteDate = D.date;
            t.$keyboardNavigation._pasteSection = D.section;
          }
        });
        t._make_pasted_event = function (o) {
          var W;
          var c = t.$keyboardNavigation._pasteDate;
          var h = t.$keyboardNavigation._pasteSection;
          var D = o.end_date - o.start_date;
          var V = i(o);
          delete (W = V).rec_type;
          delete W.rec_pattern;
          delete W.event_pid;
          delete W.event_length;
          V.start_date = new Date(c);
          V.end_date = new Date(V.start_date.valueOf() + D);
          if (h) {
            var T = t._get_section_property();
            V[T] = t.config.multisection ? o[T] : h;
          }
          return V;
        };
        t._do_paste = function (o, c, h) {
          if (t.callEvent("onBeforeEventPasted", [o, c, h]) !== false) {
            t.addEvent(c);
            t.callEvent("onEventPasted", [o, c, h]);
          }
        };
        t._is_key_nav_active = function () {
          return !!this._is_initialized() && !this._is_lightbox_open() && !!this.config.key_nav;
        };
        t.event(document, "keydown", function (o) {
          if ((o.ctrlKey || o.metaKey) && o.keyCode == 86 && t._buffer_event && !t.$keyboardNavigation.dispatcher.isEnabled()) {
            t.$keyboardNavigation.dispatcher.isActive = _();
          }
        });
        t._key_nav_copy_paste = function (o) {
          if (!t._is_key_nav_active()) {
            return true;
          }
          if (o.keyCode == 37 || o.keyCode == 39) {
            o.cancelBubble = true;
            var c = t.date.add(t._date, o.keyCode == 37 ? -1 : 1, t._mode);
            t.setCurrentView(c);
            return true;
          }
          var T;
          var h = (T = t.$keyboardNavigation.dispatcher.getActiveNode()) && T.eventId ? T.eventId : t._select_id;
          if ((o.ctrlKey || o.metaKey) && o.keyCode == 67) {
            if (h) {
              t._buffer_event = i(t.getEvent(h));
              j = true;
              t.callEvent("onEventCopied", [t.getEvent(h)]);
            }
            return true;
          }
          if ((o.ctrlKey || o.metaKey) && o.keyCode == 88 && h) {
            j = false;
            var D = t._buffer_event = i(t.getEvent(h));
            t.updateEvent(D.id);
            t.callEvent("onEventCut", [D]);
          }
          if ((o.ctrlKey || o.metaKey) && o.keyCode == 86 && _()) {
            if (D = (D = t._buffer_event ? t.getEvent(t._buffer_event.id) : t._buffer_event) || t._buffer_event) {
              var V = t._make_pasted_event(D);
              if (j) {
                V.id = t.uid();
                t._do_paste(j, V, D);
              } else if (t.callEvent("onBeforeEventChanged", [V, o, false, D])) {
                t._do_paste(j, V, D);
                j = true;
              }
            }
            return true;
          }
        };
      };
      t._temp_key_scope();
    })(t);
    (function () {
      var o;
      (function (t) {
        t.$keyboardNavigation.attachSchedulerHandlers = function () {
          var j;
          var a = t.$keyboardNavigation.dispatcher;
          function v(h) {
            if (t.config.key_nav) {
              return a.keyDownHandler(h);
            }
          }
          function _() {
            a.keepScrollPosition(function () {
              a.focusGlobalNode();
            });
          }
          t.attachEvent("onDataRender", function () {
            if (t.config.key_nav && a.isEnabled() && !t.getState().editor_id) {
              clearTimeout(j);
              j = setTimeout(function () {
                if (!a.isEnabled()) {
                  a.enable();
                }
                i();
              });
            }
          });
          function i() {
            if (a.isEnabled()) {
              var h = a.getActiveNode();
              if (h) {
                if (!h.isValid()) {
                  h = h.fallback();
                }
                if (!!h && !(h instanceof t.$keyboardNavigation.MinicalButton) && !(h instanceof t.$keyboardNavigation.MinicalCell)) {
                  a.keepScrollPosition(function () {
                    h.focus(true);
                  });
                }
              }
            }
          }
          function o(h) {
            if (!t.config.key_nav) {
              return true;
            }
            var D;
            var V = t.$keyboardNavigation.isChildOf(h.target || h.srcElement, t.$container.querySelector(".dhx_cal_data"));
            var T = t.getActionData(h);
            if (t._locate_event(h.target || h.srcElement)) {
              D = new t.$keyboardNavigation.Event(t._locate_event(h.target || h.srcElement));
            } else if (V) {
              D = new t.$keyboardNavigation.TimeSlot();
              if (T.date && V) {
                D = D.nextSlot(new t.$keyboardNavigation.TimeSlot(T.date, null, T.section));
              }
            }
            if (D) {
              if (a.isEnabled()) {
                if (T.date && V) {
                  a.delay(function () {
                    a.setActiveNode(D);
                  });
                }
              } else {
                a.activeNode = D;
              }
            }
          }
          t.attachEvent("onSchedulerReady", function () {
            var h = t.$container;
            t.eventRemove(document, "keydown", v);
            t.eventRemove(h, "mousedown", o);
            t.eventRemove(h, "focus", _);
            if (t.config.key_nav) {
              t.event(document, "keydown", v);
              t.event(h, "mousedown", o);
              t.event(h, "focus", _);
              h.setAttribute("tabindex", "0");
            } else {
              h.removeAttribute("tabindex");
            }
          });
          var c = t.updateEvent;
          t.updateEvent = function (h) {
            var D = c.apply(this, arguments);
            if (t.config.key_nav && a.isEnabled() && t.getState().select_id == h) {
              var V = new t.$keyboardNavigation.Event(h);
              if (!t.getState().lightbox_id) {
                (function (T) {
                  if (t.config.key_nav && a.isEnabled()) {
                    var W = T;
                    var z = new t.$keyboardNavigation.Event(W.eventId);
                    if (!z.isValid() && !(z = new t.$keyboardNavigation.TimeSlot(z.start || W.start, z.end || W.end, z.section || W.section)).isValid()) {
                      z = new t.$keyboardNavigation.TimeSlot();
                    }
                    a.setActiveNode(z);
                    var _e = a.getActiveNode();
                    if (_e && _e.getNode && document.activeElement != _e.getNode()) {
                      a.focusNode(a.getActiveNode());
                    }
                  }
                })(V);
              }
            }
            return D;
          };
          t.attachEvent("onEventDeleted", function (h) {
            if (t.config.key_nav && a.isEnabled() && a.getActiveNode().eventId == h) {
              a.setActiveNode(new t.$keyboardNavigation.TimeSlot());
            }
            return true;
          });
          t.attachEvent("onClearAll", function () {
            if (!t.config.key_nav) {
              return true;
            }
            if (a.isEnabled() && a.getActiveNode() instanceof t.$keyboardNavigation.Event) {
              a.setActiveNode(new t.$keyboardNavigation.TimeSlot());
            }
          });
        };
      })(t);
      (o = t).$keyboardNavigation._minicalendars = [];
      o.$keyboardNavigation.isMinical = function (c) {
        for (var h = o.$keyboardNavigation._minicalendars, D = 0; D < h.length; D++) {
          if (this.isChildOf(c, h[D])) {
            return true;
          }
        }
        return false;
      };
      o.$keyboardNavigation.isChildOf = function (c, h) {
        for (; c && c !== h;) {
          c = c.parentNode;
        }
        return c === h;
      };
      o.$keyboardNavigation.patchMinicalendar = function () {
        var c = o.$keyboardNavigation.dispatcher;
        function h(W) {
          var z = W.target;
          c.enable();
          c.setActiveNode(new o.$keyboardNavigation.MinicalButton(z, 0));
        }
        function D(W) {
          var z = W.target || W.srcElement;
          var Z = o.utils.dom.locateCss(W, "dhx_cal_prev_button", false);
          var re = o.utils.dom.locateCss(W, "dhx_cal_next_button", false);
          var oe = o.utils.dom.locateCss(W, "dhx_year_body", false);
          var _e = 0;
          var he = 0;
          if (oe) {
            for (var be, Ae, He = z; He && He.tagName.toLowerCase() != "td";) {
              He = He.parentNode;
            }
            if (He) {
              be = (Ae = He).parentNode;
            }
            if (be && Ae) {
              for (var Ne = be.parentNode.querySelectorAll("tr"), Ve = 0; Ve < Ne.length; Ve++) {
                if (Ne[Ve] == be) {
                  _e = Ve;
                  break;
                }
              }
              var Se = be.querySelectorAll("td");
              for (Ve = 0; Ve < Se.length; Ve++) {
                if (Se[Ve] == Ae) {
                  he = Ve;
                  break;
                }
              }
            }
          }
          var Fe = W.currentTarget;
          c.delay(function () {
            var Oe;
            if (Z || re || oe) {
              if (Z) {
                Oe = new o.$keyboardNavigation.MinicalButton(Fe, 0);
                c.setActiveNode(new o.$keyboardNavigation.MinicalButton(Fe, 0));
              } else if (re) {
                Oe = new o.$keyboardNavigation.MinicalButton(Fe, 1);
              } else if (oe) {
                Oe = new o.$keyboardNavigation.MinicalCell(Fe, _e, he);
              }
              if (Oe) {
                c.enable();
                if (Oe.isValid()) {
                  c.activeNode = null;
                  c.setActiveNode(Oe);
                }
              }
            }
          });
        }
        if (o.renderCalendar) {
          var V = o.renderCalendar;
          o.renderCalendar = function () {
            var W = V.apply(this, arguments);
            var z = o.$keyboardNavigation._minicalendars;
            o.eventRemove(W, "click", D);
            o.event(W, "click", D);
            o.eventRemove(W, "focus", h);
            o.event(W, "focus", h);
            for (var Z = false, re = 0; re < z.length; re++) {
              if (z[re] == W) {
                Z = true;
                break;
              }
            }
            if (!Z) {
              z.push(W);
            }
            if (c.isEnabled()) {
              var oe = c.getActiveNode();
              if (oe && oe.container == W) {
                c.focusNode(oe);
              } else {
                W.setAttribute("tabindex", "0");
              }
            } else {
              W.setAttribute("tabindex", "0");
            }
            return W;
          };
        }
        if (o.destroyCalendar) {
          var T = o.destroyCalendar;
          o.destroyCalendar = function (W, z) {
            W = W || (o._def_count ? o._def_count.firstChild : null);
            var Z = T.apply(this, arguments);
            if (!W || !W.parentNode) {
              for (var re = o.$keyboardNavigation._minicalendars, oe = 0; oe < re.length; oe++) {
                if (re[oe] == W) {
                  o.eventRemove(re[oe], "focus", h);
                  re.splice(oe, 1);
                  oe--;
                }
              }
            }
            return Z;
          };
        }
      };
      var a = t.$keyboardNavigation.dispatcher;
      t.$keyboardNavigation.attachSchedulerHandlers();
      if (t.renderCalendar) {
        t.$keyboardNavigation.patchMinicalendar();
      } else {
        var v = t.attachEvent("onSchedulerReady", function () {
          t.detachEvent(v);
          t.$keyboardNavigation.patchMinicalendar();
        });
      }
      function _() {
        if (t.config.key_nav) {
          var o = document.activeElement;
          return !!o && !t.utils.dom.locateCss(o, "dhx_cal_quick_info", false) && (t.$keyboardNavigation.isChildOf(o, t.$container) || t.$keyboardNavigation.isMinical(o));
        }
      }
      function i(o) {
        if (o && !a.isEnabled()) {
          a.enable();
        } else if (!o && a.isEnabled()) {
          a.disable();
        }
      }
      setInterval(function () {
        if (t.$container && t.$keyboardNavigation.isChildOf(t.$container, document.body)) {
          var o = _();
          if (o) {
            i(o);
          } else if (!o && a.isEnabled()) {
            setTimeout(function () {
              if (t.config.key_nav) {
                i(_());
              } else {
                t.$container.removeAttribute("tabindex");
              }
            }, 100);
          }
        }
      }, 500);
    })();
  },
  layer: function (t) {
    t.attachEvent("onTemplatesReady", function () {
      this.layers.sort(function (a, v) {
        return a.zIndex - v.zIndex;
      });
      t._dp_init = function (a) {
        a._methods = ["_set_event_text_style", "", "changeEventId", "deleteEvent"];
        this.attachEvent("onEventAdded", function (v) {
          if (!this._loading && this.validId(v) && this.getEvent(v) && this.getEvent(v).layer == a.layer) {
            a.setUpdated(v, true, "inserted");
          }
        });
        this.attachEvent("onBeforeEventDelete", function (v) {
          if (this.getEvent(v) && this.getEvent(v).layer == a.layer) {
            if (!this.validId(v)) {
              return;
            }
            var _ = a.getState(v);
            if (_ == "inserted" || this._new_event) {
              a.setUpdated(v, false);
              return true;
            } else {
              return _ != "deleted" && (_ == "true_deleted" || (a.setUpdated(v, true, "deleted"), false));
            }
          }
          return true;
        });
        this.attachEvent("onEventChanged", function (v) {
          if (!this._loading && this.validId(v) && this.getEvent(v) && this.getEvent(v).layer == a.layer) {
            a.setUpdated(v, true, "updated");
          }
        });
        a._getRowData = function (v, _) {
          var i = this.obj.getEvent(v);
          var o = {};
          for (var c in i) {
            if (c.indexOf("_") !== 0) {
              o[c] = i[c] && i[c].getUTCFullYear ? this.obj._helpers.formatDate(i[c]) : i[c];
            }
          }
          return o;
        };
        a._clearUpdateFlag = function () {};
        a.attachEvent("insertCallback", t._update_callback);
        a.attachEvent("updateCallback", t._update_callback);
        a.attachEvent("deleteCallback", function (v, _) {
          this.obj.setUserData(_, this.action_param, "true_deleted");
          this.obj.deleteEvent(_);
        });
      };
      (function () {
        var a = function i(o) {
          if (o === null || _t(o) != "object") {
            return o;
          }
          var c = new o.constructor();
          for (var h in o) {
            c[h] = i(o[h]);
          }
          return c;
        };
        t._dataprocessors = [];
        t._layers_zindex = {};
        for (var v = 0; v < t.layers.length; v++) {
          t.config["lightbox_" + t.layers[v].name] = {};
          t.config["lightbox_" + t.layers[v].name].sections = a(t.config.lightbox.sections);
          t._layers_zindex[t.layers[v].name] = t.config.initial_layer_zindex || 5 + v * 3;
          if (t.layers[v].url) {
            var _ = t.createDataProcessor({
              url: t.layers[v].url
            });
            _.layer = t.layers[v].name;
            t._dataprocessors.push(_);
            t._dataprocessors[v].init(t);
          }
          if (t.layers[v].isDefault) {
            t.defaultLayer = t.layers[v].name;
          }
        }
      })();
      t.showLayer = function (a) {
        this.toggleLayer(a, true);
      };
      t.hideLayer = function (a) {
        this.toggleLayer(a, false);
      };
      t.toggleLayer = function (a, v) {
        var _ = this.getLayer(a);
        _.visible = v !== undefined ? !!v : !_.visible;
        this.setCurrentView(this._date, this._mode);
      };
      t.getLayer = function (a) {
        var v;
        var _;
        if (typeof a == "string") {
          _ = a;
        }
        if (_t(a) == "object") {
          _ = a.layer;
        }
        for (var i = 0; i < t.layers.length; i++) {
          if (t.layers[i].name == _) {
            v = t.layers[i];
          }
        }
        return v;
      };
      t.attachEvent("onBeforeLightbox", function (a) {
        var v = this.getEvent(a);
        this.config.lightbox.sections = this.config["lightbox_" + v.layer].sections;
        t.resetLightbox();
        return true;
      });
      t.attachEvent("onClick", function (a, v) {
        var _ = t.getEvent(a);
        return !t.getLayer(_.layer).noMenu;
      });
      t.attachEvent("onEventCollision", function (a, v) {
        var _ = this.getLayer(a);
        if (!_.checkCollision) {
          return false;
        }
        for (var i = 0, o = 0; o < v.length; o++) {
          if (v[o].layer == _.name && v[o].id != a.id) {
            i++;
          }
        }
        return i >= t.config.collision_limit;
      });
      t.addEvent = function (a, v, _, i, o) {
        var c = a;
        if (arguments.length != 1) {
          (c = o || {}).start_date = a;
          c.end_date = v;
          c.text = _;
          c.id = i;
          c.layer = this.defaultLayer;
        }
        c.id = c.id || t.uid();
        c.text = c.text || "";
        if (typeof c.start_date == "string") {
          c.start_date = this.templates.api_date(c.start_date);
        }
        if (typeof c.end_date == "string") {
          c.end_date = this.templates.api_date(c.end_date);
        }
        c._timed = this.isOneDayEvent(c);
        var h = !this._events[c.id];
        this._events[c.id] = c;
        this.event_updated(c);
        if (!this._loading) {
          this.callEvent(h ? "onEventAdded" : "onEventChanged", [c.id, c]);
        }
      };
      this._evs_layer = {};
      for (var j = 0; j < this.layers.length; j++) {
        this._evs_layer[this.layers[j].name] = [];
      }
      t.addEventNow = function (a, v, _) {
        var i = {};
        if (_t(a) == "object") {
          i = a;
          a = null;
        }
        var o = (this.config.event_duration || this.config.time_step) * 60000;
        a ||= Math.round(t._currentDate().valueOf() / o) * o;
        var c = new Date(a);
        if (!v) {
          var h = this.config.first_hour;
          if (h > c.getHours()) {
            c.setHours(h);
            a = c.valueOf();
          }
          v = a + o;
        }
        i.start_date = i.start_date || c;
        i.end_date = i.end_date || new Date(v);
        i.text = i.text || this.locale.labels.new_event;
        i.id = this._drag_id = this.uid();
        i.layer = this.defaultLayer;
        this._drag_mode = "new-size";
        this._loading = true;
        this.addEvent(i);
        this.callEvent("onEventCreated", [this._drag_id, _]);
        this._loading = false;
        this._drag_event = {};
        this._on_mouse_up(_);
      };
      t._t_render_view_data = function (a) {
        if (this.config.multi_day && !this._table_view) {
          for (var v = [], _ = [], i = 0; i < a.length; i++) {
            if (a[i]._timed) {
              v.push(a[i]);
            } else {
              _.push(a[i]);
            }
          }
          this._table_view = true;
          this.render_data(_);
          this._table_view = false;
          this.render_data(v);
        } else {
          this.render_data(a);
        }
      };
      t.render_view_data = function () {
        if (this._not_render) {
          this._render_wait = true;
        } else {
          this._render_wait = false;
          this.clear_view();
          this._evs_layer = {};
          for (var a = 0; a < this.layers.length; a++) {
            this._evs_layer[this.layers[a].name] = [];
          }
          var v = this.get_visible_events();
          for (a = 0; a < v.length; a++) {
            if (this._evs_layer[v[a].layer]) {
              this._evs_layer[v[a].layer].push(v[a]);
            }
          }
          if (this._mode == "month") {
            var _ = [];
            for (a = 0; a < this.layers.length; a++) {
              if (this.layers[a].visible) {
                _ = _.concat(this._evs_layer[this.layers[a].name]);
              }
            }
            this._t_render_view_data(_);
          } else {
            for (a = 0; a < this.layers.length; a++) {
              if (this.layers[a].visible) {
                this._t_render_view_data(this._evs_layer[this.layers[a].name]);
              }
            }
          }
        }
      };
      t._render_v_bar = function (a, v, _, i, o, c, h, D, V) {
        var T = a.id;
        if (h.indexOf("<div class=") == -1) {
          h = t.templates["event_header_" + a.layer] ? t.templates["event_header_" + a.layer](a.start_date, a.end_date, a) : h;
        }
        if (D.indexOf("<div class=") == -1) {
          D = t.templates["event_text_" + a.layer] ? t.templates["event_text_" + a.layer](a.start_date, a.end_date, a) : D;
        }
        var W = document.createElement("div");
        var z = "dhx_cal_event";
        var Z = t.templates["event_class_" + a.layer] ? t.templates["event_class_" + a.layer](a.start_date, a.end_date, a) : t.templates.event_class(a.start_date, a.end_date, a);
        if (Z) {
          z = z + " " + Z;
        }
        var re = t._border_box_events();
        var oe = i - 2;
        var Ne = "<div event_id=\"" + T + "\" " + t.config.event_attribute + "=\"" + T + "\" class=\"" + z + "\" style=\"position:absolute; top:" + _ + "px; left:" + v + "px; width:" + (re ? oe : i - 4) + "px; height:" + o + "px;" + (c || "") + "\">";
        Ne += "<div class=\"dhx_header\" style=\" width:" + (re ? oe : i - 6) + "px;\" >&nbsp;</div>";
        Ne += "<div class=\"dhx_title\">" + h + "</div>";
        Ne += "<div class=\"dhx_body\" style=\" width:" + (re ? oe : i - (this._quirks ? 4 : 14)) + "px; height:" + (re ? o - this.xy.event_header_height : o - (this._quirks ? 20 : 30) + 1) + "px;\">" + D + "</div>";
        W.innerHTML = Ne += "<div class=\"dhx_footer\" style=\" width:" + (re ? oe - 2 : i - 8) + "px;" + (V ? " margin-top:-1px;" : "") + "\" ></div></div>";
        W.style.zIndex = 100;
        return W.firstChild;
      };
      t.render_event_bar = function (a) {
        var v = this._els.dhx_cal_data[0];
        var _ = this._colsS[a._sday];
        var i = this._colsS[a._eday];
        if (i == _) {
          i = this._colsS[a._eday + 1];
        }
        var c = this._colsS.heights[a._sweek] + (this._colsS.height ? this.xy.month_scale_height + 2 : 2) + a._sorder * this.xy.bar_height;
        var h = document.createElement("div");
        var D = a._timed ? "dhx_cal_event_clear" : "dhx_cal_event_line";
        var V = t.templates["event_class_" + a.layer] ? t.templates["event_class_" + a.layer](a.start_date, a.end_date, a) : t.templates.event_class(a.start_date, a.end_date, a);
        if (V) {
          D = D + " " + V;
        }
        var T = "<div event_id=\"" + a.id + "\" " + this.config.event_attribute + "=\"" + a.id + "\" class=\"" + D + "\" style=\"position:absolute; top:" + c + "px; left:" + _ + "px; width:" + (i - _ - 15) + "px;" + (a._text_style || "") + "\">";
        if (a._timed) {
          T += t.templates["event_bar_date_" + a.layer] ? t.templates["event_bar_date_" + a.layer](a.start_date, a.end_date, a) : t.templates.event_bar_date(a.start_date, a.end_date, a);
        }
        T += t.templates["event_bar_text_" + a.layer] ? t.templates["event_bar_text_" + a.layer](a.start_date, a.end_date, a) : t.templates.event_bar_text(a.start_date, a.end_date, a) + "</div>)";
        h.innerHTML = T += "</div>";
        this._rendered.push(h.firstChild);
        v.appendChild(h.firstChild);
      };
      t.render_event = function (a) {
        var v = t.xy.menu_width;
        if (t.getLayer(a.layer).noMenu) {
          v = 0;
        }
        if (a._sday >= 0) {
          var _ = t.locate_holder(a._sday);
          if (_) {
            var i = a.start_date.getHours() * 60 + a.start_date.getMinutes();
            var o = a.end_date.getHours() * 60 + a.end_date.getMinutes() || t.config.last_hour * 60;
            var c = Math.round((i * 60 * 1000 - this.config.first_hour * 60 * 60 * 1000) * this.config.hour_size_px / 3600000) % (this.config.hour_size_px * 24) + 1;
            var h = Math.max(t.xy.min_event_height, (o - i) * this.config.hour_size_px / 60) + 1;
            var D = Math.floor((_.clientWidth - v) / a._count);
            var V = a._sorder * D + 1;
            if (!a._inner) {
              D *= a._count - a._sorder;
            }
            var T = this._render_v_bar(a.id, v + V, c, D, h, a._text_style, t.templates.event_header(a.start_date, a.end_date, a), t.templates.event_text(a.start_date, a.end_date, a));
            this._rendered.push(T);
            _.appendChild(T);
            V = V + parseInt(_.style.left, 10) + v;
            c += this._dy_shift;
            T.style.zIndex = this._layers_zindex[a.layer];
            if (this._edit_id == a.id) {
              T.style.zIndex = parseInt(T.style.zIndex) + 1;
              var W = T.style.zIndex;
              D = Math.max(D - 4, t.xy.editor_width);
              (T = document.createElement("div")).setAttribute("event_id", a.id);
              T.setAttribute(this.config.event_attribute, a.id);
              this.set_xy(T, D, h - 20, V, c + 14);
              T.className = "dhx_cal_editor";
              T.style.zIndex = W;
              var z = document.createElement("div");
              this.set_xy(z, D - 6, h - 26);
              z.style.cssText += ";margin:2px 2px 2px 2px;overflow:hidden;";
              z.style.zIndex = W;
              T.appendChild(z);
              this._els.dhx_cal_data[0].appendChild(T);
              this._rendered.push(T);
              z.innerHTML = "<textarea class='dhx_cal_editor'>" + a.text + "</textarea>";
              if (this._quirks7) {
                z.firstChild.style.height = h - 12 + "px";
              }
              this._editor = z.firstChild;
              this._editor.addEventListener("keypress", function (he) {
                if (he.shiftKey) {
                  return true;
                }
                var be = he.keyCode;
                if (be == t.keys.edit_save) {
                  t.editStop(true);
                }
                if (be == t.keys.edit_cancel) {
                  t.editStop(false);
                }
              });
              this._editor.addEventListener("selectstart", function (he) {
                he.cancelBubble = true;
                return true;
              });
              z.firstChild.focus();
              this._els.dhx_cal_data[0].scrollLeft = 0;
              z.firstChild.select();
            }
            if (this._select_id == a.id) {
              T.style.zIndex = parseInt(T.style.zIndex) + 1;
              for (var Z = this.config["icons_" + (this._edit_id == a.id ? "edit" : "select")], re = "", oe = 0; oe < Z.length; oe++) {
                re += "<div class='dhx_menu_icon " + Z[oe] + "' title='" + this.locale.labels[Z[oe]] + "'></div>";
              }
              var _e = this._render_v_bar(a.id, V - v + 1, c, v, Z.length * 20 + 26, "", "<div class='dhx_menu_head'></div>", re, true);
              _e.style.left = V - v + 1;
              _e.style.zIndex = T.style.zIndex;
              this._els.dhx_cal_data[0].appendChild(_e);
              this._rendered.push(_e);
            }
          }
        }
      };
      t.filter_agenda = function (a, v) {
        var _ = t.getLayer(v.layer);
        return _ && _.visible;
      };
    });
  },
  limit: function (t) {
    t.config.limit_start = null;
    t.config.limit_end = null;
    t.config.limit_view = false;
    t.config.check_limits = true;
    t.config.mark_now = true;
    t.config.display_marked_timespans = true;
    t.config.overwrite_marked_timespans = true;
    t._temp_limit_scope = function () {
      var j = null;
      function a(i, o, c) {
        var D;
        var V;
        var T;
        var h = kt(i) == "object" ? i : {
          days: i
        };
        h.type = "dhx_time_block";
        h.css = "";
        if (o) {
          if (c) {
            h.sections = c;
          }
          D = h;
          T = o;
          if ((V = i) instanceof Date && T instanceof Date) {
            D.start_date = V;
            D.end_date = T;
          } else {
            D.days = V;
            D.zones = T;
          }
          h = D;
        }
        return h;
      }
      t.blockTime = function (i, o, c) {
        var h = a(i, o, c);
        return t.addMarkedTimespan(h);
      };
      t.unblockTime = function (i, o, c) {
        var h = a(i, o = o || "fullday", c);
        return t.deleteMarkedTimespan(h);
      };
      t.attachEvent("onBeforeViewChange", function (i, o, c, h) {
        function D(V, T) {
          var W = t.config.limit_start;
          var z = t.config.limit_end;
          var Z = t.date.add(V, 1, T);
          return V.valueOf() > z.valueOf() || Z <= W.valueOf();
        }
        return !t.config.limit_view || !D(h = h || o, c = c || i) || o.valueOf() == h.valueOf() || (setTimeout(function () {
          var V = D(o, c) ? t.config.limit_start : o;
          t.setCurrentView(D(V, c) ? null : V, c);
        }, 1), false);
      });
      t.checkInMarkedTimespan = function (i, o, c) {
        o = o || "default";
        for (var h = true, D = new Date(i.start_date.valueOf()), V = t.date.add(D, 1, "day"), T = t._marked_timespans; D < i.end_date; D = t.date.date_part(V), V = t.date.add(D, 1, "day")) {
          var W = +t.date.date_part(new Date(D));
          var z = _(i, T, D.getDay(), W, o);
          if (z) {
            for (var Z = 0; Z < z.length; Z += 2) {
              var re = t._get_zone_minutes(D);
              var oe = i.end_date > V || i.end_date.getDate() != D.getDate() ? 1440 : t._get_zone_minutes(i.end_date);
              var _e = z[Z];
              var he = z[Z + 1];
              if (_e < oe && he > re && !(h = typeof c == "function" && c(i, re, oe, _e, he))) {
                break;
              }
            }
          }
        }
        return !h;
      };
      var v = t.checkLimitViolation = function (i) {
        if (!i || !t.config.check_limits) {
          return true;
        }
        var o = t;
        var c = o.config;
        var h = [];
        if (i.rec_type) {
          for (var D = t.getRecDates(i), V = 0; V < D.length; V++) {
            var T = t._copy_event(i);
            t._lame_copy(T, D[V]);
            h.push(T);
          }
        } else {
          h = [i];
        }
        for (var W = true, z = 0; z < h.length; z++) {
          var Z = true;
          (T = h[z])._timed = t.isOneDayEvent(T);
          if (Z = !c.limit_start || !c.limit_end || T.start_date.valueOf() >= c.limit_start.valueOf() && T.end_date.valueOf() <= c.limit_end.valueOf()) {
            Z = !t.checkInMarkedTimespan(T, "dhx_time_block", function (re, oe, _e, he, be) {
              var Ae = true;
              if (oe <= be && oe >= he) {
                if (be == 1440 || _e <= be) {
                  Ae = false;
                }
                if (re._timed && o._drag_id && o._drag_mode == "new-size") {
                  re.start_date.setHours(0);
                  re.start_date.setMinutes(be);
                } else {
                  Ae = false;
                }
              }
              if (_e >= he && _e <= be || oe < he && _e > be) {
                if (re._timed && o._drag_id && o._drag_mode == "new-size") {
                  re.end_date.setHours(0);
                  re.end_date.setMinutes(he);
                } else {
                  Ae = false;
                }
              }
              return Ae;
            });
          }
          Z ||= o.checkEvent("onLimitViolation") ? o.callEvent("onLimitViolation", [T.id, T]) : Z;
          W = W && Z;
        }
        if (!W) {
          o._drag_id = null;
          o._drag_mode = null;
        }
        return W;
      };
      function _(i, o, c, h, D) {
        var V = t;
        var T = [];
        var W = {
          _props: "map_to",
          matrix: "y_property"
        };
        for (var z in W) {
          var Z = W[z];
          if (V[z]) {
            for (var re in V[z]) {
              var oe = V[z][re][Z];
              if (i[oe]) {
                T = V._add_timespan_zones(T, t._get_blocked_zones(o[re], i[oe], c, h, D));
              }
            }
          }
        }
        return V._add_timespan_zones(T, t._get_blocked_zones(o, "global", c, h, D));
      }
      t._get_blocked_zones = function (i, o, c, h, D) {
        var V = [];
        if (i && i[o]) {
          for (var W = this._get_relevant_blocked_zones(c, h, i[o], D), z = 0; z < W.length; z++) {
            V = this._add_timespan_zones(V, W[z].zones);
          }
        }
        return V;
      };
      t._get_relevant_blocked_zones = function (i, o, c, h) {
        var D;
        if (t.config.overwrite_marked_timespans) {
          D = c[o] && c[o][h] ? c[o][h] : c[i] && c[i][h] ? c[i][h] : [];
        } else {
          D = [];
          if (c[o] && c[o][h]) {
            D = D.concat(c[o][h]);
          }
          if (c[i] && c[i][h]) {
            D = D.concat(c[i][h]);
          }
        }
        return D;
      };
      t.attachEvent("onMouseDown", function (i) {
        return i != "dhx_time_block";
      });
      t.attachEvent("onBeforeDrag", function (i) {
        return !i || v(t.getEvent(i));
      });
      t.attachEvent("onClick", function (i, o) {
        return v(t.getEvent(i));
      });
      t.attachEvent("onBeforeLightbox", function (i) {
        var o = t.getEvent(i);
        j = [o.start_date, o.end_date];
        return v(o);
      });
      t.attachEvent("onEventSave", function (i, o, c) {
        if (!o.start_date || !o.end_date) {
          var h = t.getEvent(i);
          o.start_date = new Date(h.start_date);
          o.end_date = new Date(h.end_date);
        }
        if (o.rec_type) {
          var D = t._lame_clone(o);
          t._roll_back_dates(D);
          return v(D);
        }
        return v(o);
      });
      t.attachEvent("onEventAdded", function (i) {
        if (!i) {
          return true;
        }
        var o = t.getEvent(i);
        if (!v(o) && t.config.limit_start && t.config.limit_end) {
          if (o.start_date < t.config.limit_start) {
            o.start_date = new Date(t.config.limit_start);
          }
          if (o.start_date.valueOf() >= t.config.limit_end.valueOf()) {
            o.start_date = this.date.add(t.config.limit_end, -1, "day");
          }
          if (o.end_date < t.config.limit_start) {
            o.end_date = new Date(t.config.limit_start);
          }
          if (o.end_date.valueOf() >= t.config.limit_end.valueOf()) {
            o.end_date = this.date.add(t.config.limit_end, -1, "day");
          }
          if (o.start_date.valueOf() >= o.end_date.valueOf()) {
            o.end_date = this.date.add(o.start_date, this.config.event_duration || this.config.time_step, "minute");
          }
          o._timed = this.isOneDayEvent(o);
        }
        return true;
      });
      t.attachEvent("onEventChanged", function (i) {
        if (!i) {
          return true;
        }
        var o = t.getEvent(i);
        if (!v(o)) {
          if (!j) {
            return false;
          }
          o.start_date = j[0];
          o.end_date = j[1];
          o._timed = this.isOneDayEvent(o);
        }
        return true;
      });
      t.attachEvent("onBeforeEventChanged", function (i, o, c) {
        return v(i);
      });
      t.attachEvent("onBeforeEventCreated", function (i) {
        var o = t.getActionData(i).date;
        var c = {
          _timed: true,
          start_date: o,
          end_date: t.date.add(o, t.config.time_step, "minute")
        };
        return v(c);
      });
      t.attachEvent("onViewChange", function () {
        t._mark_now();
      });
      t.attachEvent("onAfterSchedulerResize", function () {
        window.setTimeout(function () {
          t._mark_now();
        }, 1);
        return true;
      });
      t.attachEvent("onTemplatesReady", function () {
        t._mark_now_timer = window.setInterval(function () {
          if (t._is_initialized()) {
            t._mark_now();
          }
        }, 60000);
      });
      t._mark_now = function (i) {
        this._els.dhx_now_time ||= [];
        var o = t._currentDate();
        var c = this.config;
        t._remove_mark_now();
        if (!i && c.mark_now && o < this._max_date && o > this._min_date && o.getHours() >= c.first_hour && o.getHours() < c.last_hour) {
          var h = this.locate_holder_day(o);
          this._els.dhx_now_time = t._append_mark_now(h, o);
        }
      };
      t._append_mark_now = function (i, o) {
        var c = t._get_zone_minutes(o);
        var h = {
          zones: [c, c + 1],
          css: "dhx_now_time",
          type: "dhx_now_time"
        };
        if (!this._table_view) {
          if (this._props && this._props[this._mode]) {
            var D;
            var V;
            var T = this._props[this._mode];
            var W = T.size || T.options.length;
            if (T.days > 1) {
              if (T.size && T.options.length) {
                i = (T.position + i) / T.options.length * T.size;
              }
              D = i;
              V = i + W;
            } else {
              V = (D = 0) + W;
            }
            for (var z = [], Z = D; Z < V; Z++) {
              var re = Z;
              h.days = re;
              var oe = t._render_marked_timespan(h, null, re)[0];
              z.push(oe);
            }
            return z;
          }
          h.days = i;
          return t._render_marked_timespan(h, null, i);
        }
        if (this._mode == "month") {
          h.days = +t.date.date_part(o);
          return t._render_marked_timespan(h, null, null);
        }
      };
      t._remove_mark_now = function () {
        for (var i = this._els.dhx_now_time, o = 0; o < i.length; o++) {
          var c = i[o];
          var h = c.parentNode;
          if (h) {
            h.removeChild(c);
          }
        }
        this._els.dhx_now_time = [];
      };
      t._marked_timespans = {
        global: {}
      };
      t._get_zone_minutes = function (i) {
        return i.getHours() * 60 + i.getMinutes();
      };
      t._prepare_timespan_options = function (i) {
        var o = [];
        var c = [];
        if (i.days == "fullweek") {
          i.days = [0, 1, 2, 3, 4, 5, 6];
        }
        if (i.days instanceof Array) {
          for (var h = i.days.slice(), D = 0; D < h.length; D++) {
            var V = t._lame_clone(i);
            V.days = h[D];
            o.push.apply(o, t._prepare_timespan_options(V));
          }
          return o;
        }
        if (!i || (!i.start_date || !i.end_date || i.end_date <= i.start_date) && (i.days === undefined || !i.zones) && !i.type) {
          return o;
        }
        if (i.zones == "fullday") {
          i.zones = [0, 1440];
        }
        if (i.zones && i.invert_zones) {
          i.zones = t.invertZones(i.zones);
        }
        i.id = t.uid();
        i.css = i.css || "";
        i.type = i.type || "default";
        var T = i.sections;
        if (T) {
          for (var W in T) {
            if (T.hasOwnProperty(W)) {
              var z = T[W];
              if (!(z instanceof Array)) {
                z = [z];
              }
              D = 0;
              for (; D < z.length; D++) {
                (Ae = t._lame_copy({}, i)).sections = {};
                Ae.sections[W] = z[D];
                c.push(Ae);
              }
            }
          }
        } else {
          c.push(i);
        }
        for (var Z = 0; Z < c.length; Z++) {
          var re = c[Z];
          var oe = re.start_date;
          var _e = re.end_date;
          if (oe && _e) {
            for (var he = t.date.date_part(new Date(oe)), be = t.date.add(he, 1, "day"); he < _e;) {
              var Ae;
              delete (Ae = t._lame_copy({}, re)).start_date;
              delete Ae.end_date;
              Ae.days = he.valueOf();
              var He = oe > he ? t._get_zone_minutes(oe) : 0;
              var Ne = _e > be || _e.getDate() != he.getDate() ? 1440 : t._get_zone_minutes(_e);
              Ae.zones = [He, Ne];
              o.push(Ae);
              he = be;
              be = t.date.add(be, 1, "day");
            }
          } else {
            if (re.days instanceof Date) {
              re.days = t.date.date_part(re.days).valueOf();
            }
            re.zones = i.zones.slice();
            o.push(re);
          }
        }
        return o;
      };
      t._get_dates_by_index = function (i, o, c) {
        var h = [];
        o = t.date.date_part(new Date(o || t._min_date));
        c = new Date(c || t._max_date);
        for (var D = o.getDay(), V = i - D >= 0 ? i - D : 7 - o.getDay() + i, T = t.date.add(o, V, "day"); T < c; T = t.date.add(T, 1, "week")) {
          h.push(T);
        }
        return h;
      };
      t._get_css_classes_by_config = function (i) {
        var o = [];
        if (i.type == "dhx_time_block") {
          o.push("dhx_time_block");
          if (i.css) {
            o.push("dhx_time_block_reset");
          }
        }
        o.push("dhx_marked_timespan", i.css);
        return o.join(" ");
      };
      t._get_block_by_config = function (i) {
        var o = document.createElement("div");
        if (i.html) {
          if (typeof i.html == "string") {
            o.innerHTML = i.html;
          } else {
            o.appendChild(i.html);
          }
        }
        return o;
      };
      t._render_marked_timespan = function (i, o, c) {
        var h = [];
        var D = t.config;
        var V = this._min_date;
        var T = this._max_date;
        var W = false;
        if (!D.display_marked_timespans) {
          return h;
        }
        if (!c && c !== 0) {
          if (i.days < 7) {
            c = i.days;
          } else {
            var z = new Date(i.days);
            W = +z;
            if (+T <= +z || +V > +z) {
              return h;
            }
            c = z.getDay();
          }
          var Z = V.getDay();
          if (Z > c) {
            c = 7 - (Z - c);
          } else {
            c -= Z;
          }
        }
        var re = i.zones;
        var oe = t._get_css_classes_by_config(i);
        if (t._table_view && t._mode == "month") {
          var _e = [];
          var he = [];
          if (o) {
            _e.push(o);
            he.push(c);
          } else {
            he = W ? [W] : t._get_dates_by_index(c);
            for (var be = 0; be < he.length; be++) {
              _e.push(this._scales[he[be]]);
            }
          }
          for (be = 0; be < _e.length; be++) {
            o = _e[be];
            c = he[be];
            var Ae = Math.floor((this._correct_shift(c, 1) - V.valueOf()) / (this._cols.length * 86400000));
            var He = this.locate_holder_day(c, false) % this._cols.length;
            if (!this._ignores[He]) {
              var Ne = this.config.rtl ? this._colsS.col_length - 1 - He : He;
              var Ve = t._get_block_by_config(i);
              var Se = Math.max(o.offsetHeight - 1, 0);
              var Fe = Math.max(o.offsetWidth - 1, 0);
              var Oe = this._colsS[Ne];
              var at = this._colsS.heights[Ae] + (this._colsS.height ? this.xy.month_scale_height + 2 : 2) - 1;
              Ve.className = oe;
              Ve.style.top = at + "px";
              Ve.style.lineHeight = Ve.style.height = Se + "px";
              for (var ht = 0; ht < re.length; ht += 2) {
                var lt = re[be];
                if ((xt = re[be + 1]) <= lt) {
                  return [];
                }
                (wt = Ve.cloneNode(true)).style.left = Oe + Math.round(lt / 1440 * Fe) + "px";
                wt.style.width = Math.round((xt - lt) / 1440 * Fe) + "px";
                o.appendChild(wt);
                h.push(wt);
              }
            }
          }
        } else {
          var mt = c;
          if (this._ignores[this.locate_holder_day(c, false)]) {
            return h;
          }
          if (this._props && this._props[this._mode] && i.sections && i.sections[this._mode]) {
            var ft = this._props[this._mode];
            mt = ft.order[i.sections[this._mode]];
            var yt = ft.order[i.sections[this._mode]];
            if (ft.days > 1) {
              mt = mt * (ft.size || ft.options.length) + yt;
            } else {
              mt = yt;
              if (ft.size && mt > ft.position + ft.size) {
                mt = 0;
              }
            }
          }
          o = o || t.locate_holder(mt);
          be = 0;
          for (; be < re.length; be += 2) {
            var xt;
            var wt;
            lt = Math.max(re[be], D.first_hour * 60);
            if ((xt = Math.min(re[be + 1], D.last_hour * 60)) <= lt) {
              if (be + 2 < re.length) {
                continue;
              }
              return [];
            }
            (wt = t._get_block_by_config(i)).className = oe;
            var Dt = this.config.hour_size_px * 24 + 1;
            wt.style.top = Math.round((lt * 60 * 1000 - this.config.first_hour * 3600000) * this.config.hour_size_px / 3600000) % Dt + "px";
            wt.style.lineHeight = wt.style.height = Math.max(Math.round((xt - lt) * 60 * 1000 * this.config.hour_size_px / 3600000) % Dt, 1) + "px";
            o.appendChild(wt);
            h.push(wt);
          }
        }
        return h;
      };
      t._mark_timespans = function () {
        var i = this._els.dhx_cal_data[0];
        var o = [];
        if (t._table_view && t._mode == "month") {
          for (var c in this._scales) {
            var h = new Date(+c);
            o.push.apply(o, t._on_scale_add_marker(this._scales[c], h));
          }
        } else {
          h = new Date(t._min_date);
          for (var D = 0, V = i.childNodes.length; D < V; D++) {
            var T = i.childNodes[D];
            if (!T.firstChild || t._getClassName(T.firstChild).indexOf("dhx_scale_hour") <= -1) {
              o.push.apply(o, t._on_scale_add_marker(T, h));
              h = t.date.add(h, 1, "day");
            }
          }
        }
        return o;
      };
      t.markTimespan = function (i) {
        var o = false;
        if (!this._els.dhx_cal_data) {
          t.get_elements();
          o = true;
        }
        var c = t._marked_timespans_ids;
        var h = t._marked_timespans_types;
        var D = t._marked_timespans;
        t.deleteMarkedTimespan();
        t.addMarkedTimespan(i);
        var V = t._mark_timespans();
        if (o) {
          t._els = [];
        }
        t._marked_timespans_ids = c;
        t._marked_timespans_types = h;
        t._marked_timespans = D;
        return V;
      };
      t.unmarkTimespan = function (i) {
        if (i) {
          for (var o = 0; o < i.length; o++) {
            var c = i[o];
            if (c.parentNode) {
              c.parentNode.removeChild(c);
            }
          }
        }
      };
      t._addMarkerTimespanConfig = function (i) {
        var o = t._marked_timespans;
        var c = i.id;
        var h = t._marked_timespans_ids;
        h[c] ||= [];
        var D = i.days;
        var V = i.sections;
        var T = i.type;
        i.id = c;
        if (V) {
          for (var W in V) {
            if (V.hasOwnProperty(W)) {
              o[W] ||= {};
              var z = V[W];
              var Z = o[W];
              Z[z] ||= {};
              Z[z][D] ||= {};
              if (!Z[z][D][T]) {
                Z[z][D][T] = [];
                t._marked_timespans_types ||= {};
                t._marked_timespans_types[T] ||= true;
              }
              var re = Z[z][D][T];
              i._array = re;
              re.push(i);
              h[c].push(i);
            }
          }
        } else {
          o.global[D] ||= {};
          o.global[D][T] ||= [];
          t._marked_timespans_types ||= {};
          t._marked_timespans_types[T] ||= true;
          i._array = re = o.global[D][T];
          re.push(i);
          h[c].push(i);
        }
      };
      t._marked_timespans_ids = {};
      t.addMarkedTimespan = function (i) {
        var o = t._prepare_timespan_options(i);
        if (o.length) {
          for (var c = o[0].id, h = 0; h < o.length; h++) {
            t._addMarkerTimespanConfig(o[h]);
          }
          return c;
        }
      };
      t._add_timespan_zones = function (i, o) {
        var c = i.slice();
        o = o.slice();
        if (!c.length) {
          return o;
        }
        for (var h = 0; h < c.length; h += 2) {
          for (var D = c[h], V = c[h + 1], T = h + 2 == c.length, W = 0; W < o.length; W += 2) {
            var z = o[W];
            var Z = o[W + 1];
            if (Z > V && z <= V || z < D && Z >= D) {
              c[h] = Math.min(D, z);
              c[h + 1] = Math.max(V, Z);
              h -= 2;
            } else {
              if (!T) {
                continue;
              }
              c.splice(h + (D > z ? 0 : 2), 0, z, Z);
            }
            o.splice(W--, 2);
            break;
          }
        }
        return c;
      };
      t._subtract_timespan_zones = function (i, o) {
        for (var c = i.slice(), h = 0; h < c.length; h += 2) {
          for (var D = c[h], V = c[h + 1], T = 0; T < o.length; T += 2) {
            var W = o[T];
            var z = o[T + 1];
            if (z > D && W < V) {
              var Z = false;
              if (D >= W && V <= z) {
                c.splice(h, 2);
              }
              if (D < W) {
                c.splice(h, 2, D, W);
                Z = true;
              }
              if (V > z) {
                c.splice(Z ? h + 2 : h, Z ? 0 : 2, z, V);
              }
              h -= 2;
              break;
            }
          }
        }
        return c;
      };
      t.invertZones = function (i) {
        return t._subtract_timespan_zones([0, 1440], i.slice());
      };
      t._delete_marked_timespan_by_id = function (i) {
        var o = t._marked_timespans_ids[i];
        if (o) {
          for (var c = 0; c < o.length; c++) {
            for (var h = o[c], D = h._array, V = 0; V < D.length; V++) {
              if (D[V] == h) {
                D.splice(V, 1);
                break;
              }
            }
          }
        }
      };
      t._delete_marked_timespan_by_config = function (i) {
        var o;
        var c = t._marked_timespans;
        var h = i.sections;
        var D = i.days;
        var V = i.type || "default";
        if (h) {
          for (var T in h) {
            if (h.hasOwnProperty(T) && c[T]) {
              var W = h[T];
              if (c[T][W]) {
                o = c[T][W];
              }
            }
          }
        } else {
          o = c.global;
        }
        if (o) {
          if (D !== undefined) {
            if (o[D] && o[D][V]) {
              t._addMarkerTimespanConfig(i);
              t._delete_marked_timespans_list(o[D][V], i);
            }
          } else {
            for (var z in o) {
              if (o[z][V]) {
                var Z = t._lame_clone(i);
                i.days = z;
                t._addMarkerTimespanConfig(Z);
                t._delete_marked_timespans_list(o[z][V], i);
              }
            }
          }
        }
      };
      t._delete_marked_timespans_list = function (i, o) {
        for (var c = 0; c < i.length; c++) {
          var h = i[c];
          var D = t._subtract_timespan_zones(h.zones, o.zones);
          if (D.length) {
            h.zones = D;
          } else {
            i.splice(c, 1);
            c--;
            for (var V = t._marked_timespans_ids[h.id], T = 0; T < V.length; T++) {
              if (V[T] == h) {
                V.splice(T, 1);
                break;
              }
            }
          }
        }
      };
      t.deleteMarkedTimespan = function (i) {
        if (!arguments.length) {
          t._marked_timespans = {
            global: {}
          };
          t._marked_timespans_ids = {};
          t._marked_timespans_types = {};
        }
        if (kt(i) != "object") {
          t._delete_marked_timespan_by_id(i);
        } else {
          if (!i.start_date || !i.end_date) {
            if (i.days === undefined && !i.type) {
              i.days = "fullweek";
            }
            i.zones ||= "fullday";
          }
          var o = [];
          if (i.type) {
            o.push(i.type);
          } else {
            for (var c in t._marked_timespans_types) {
              o.push(c);
            }
          }
          for (var h = t._prepare_timespan_options(i), D = 0; D < h.length; D++) {
            for (var V = h[D], T = 0; T < o.length; T++) {
              var W = t._lame_clone(V);
              W.type = o[T];
              t._delete_marked_timespan_by_config(W);
            }
          }
        }
      };
      t._get_types_to_render = function (i, o) {
        var c = i ? t._lame_copy({}, i) : {};
        for (var h in o || {}) {
          if (o.hasOwnProperty(h)) {
            c[h] = o[h];
          }
        }
        return c;
      };
      t._get_configs_to_render = function (i) {
        var o = [];
        for (var c in i) {
          if (i.hasOwnProperty(c)) {
            o.push.apply(o, i[c]);
          }
        }
        return o;
      };
      t._on_scale_add_marker = function (i, o) {
        if (!t._table_view || t._mode == "month") {
          var c = o.getDay();
          var h = o.valueOf();
          var D = this._mode;
          var V = t._marked_timespans;
          var T = [];
          var W = [];
          if (this._props && this._props[D]) {
            var z = this._props[D];
            var Z = z.options;
            var re = Z[t._get_unit_index(z, o)];
            if (z.days > 1) {
              var oe = Math.round((o - t._min_date) / 86400000);
              o = t.date.add(t._min_date, Math.floor(oe / (z.size || Z.length)), "day");
              o = t.date.date_part(o);
            } else {
              o = t.date.date_part(new Date(this._date));
            }
            c = o.getDay();
            h = o.valueOf();
            if (V[D] && V[D][re.key]) {
              var he = V[D][re.key];
              var be = t._get_types_to_render(he[c], he[h]);
              T.push.apply(T, t._get_configs_to_render(be));
            }
          }
          var Ae = V.global;
          if (t.config.overwrite_marked_timespans) {
            T.push.apply(T, t._get_configs_to_render(Ae[h] || Ae[c]));
          } else {
            if (Ae[h]) {
              T.push.apply(T, t._get_configs_to_render(Ae[h]));
            }
            if (Ae[c]) {
              T.push.apply(T, t._get_configs_to_render(Ae[c]));
            }
          }
          for (var Ne = 0; Ne < T.length; Ne++) {
            W.push.apply(W, t._render_marked_timespan(T[Ne], i, o));
          }
          return W;
        }
      };
      t.attachEvent("onScaleAdd", function () {
        t._on_scale_add_marker.apply(t, arguments);
      });
      t.dblclick_dhx_marked_timespan = function (i, o) {
        t.callEvent("onScaleDblClick", [t.getActionData(i).date, o, i]);
        if (t.config.dblclick_create) {
          t.addEventNow(t.getActionData(i).date, null, i);
        }
      };
    };
    t._temp_limit_scope();
  },
  map_view: function (t) {
    var j;
    t.xy.map_date_width = 188;
    t.xy.map_icon_width = 25;
    t.xy.map_description_width = 400;
    t.config.map_resolve_event_location = true;
    t.config.map_resolve_user_location = true;
    t.config.map_initial_position = new google.maps.LatLng(48.724, 8.215);
    t.config.map_error_position = new google.maps.LatLng(15, 15);
    t.config.map_infowindow_max_width = 300;
    t.config.map_type = google.maps.MapTypeId.ROADMAP;
    t.config.map_zoom_after_resolve = 15;
    t.locale.labels.marker_geo_success = "It seems you are here.";
    t.locale.labels.marker_geo_fail = "Sorry, could not get your current position using geolocation.";
    t.templates.marker_date = t.date.date_to_str("%Y-%m-%d %H:%i");
    t.templates.marker_text = function (a, v, _) {
      return "<div><b>" + _.text + "</b><br/><br/>" + (_.event_location || "") + "<br/><br/>" + t.templates.marker_date(a) + " - " + t.templates.marker_date(v) + "</div>";
    };
    t.dblclick_dhx_map_area = function () {
      if (!this.config.readonly && this.config.dblclick_create) {
        this.addEventNow({
          start_date: t._date,
          end_date: t.date.add(t._date, t.config.time_step, "minute")
        });
      }
    };
    t.templates.map_time = function (a, v, _) {
      if (t.config.rtl && !_._timed) {
        return t.templates.day_date(v) + " &ndash; " + t.templates.day_date(a);
      } else if (_._timed) {
        return this.day_date(_.start_date, _.end_date, _) + " " + this.event_date(a);
      } else {
        return t.templates.day_date(a) + " &ndash; " + t.templates.day_date(v);
      }
    };
    t.templates.map_text = function (a, v, _) {
      return _.text;
    };
    t.date.map_start = function (a) {
      return a;
    };
    t.date.add_map = function (a, v, _) {
      return new Date(a.valueOf());
    };
    t.templates.map_date = function (a, v, _) {
      return "";
    };
    t._latLngUpdate = false;
    t.attachEvent("onSchedulerReady", function () {
      t._isMapPositionSet = false;
      var a = document.createElement("div");
      a.className = "dhx_map";
      a.id = "dhx_gmap";
      a.style.display = "none";
      t._obj.appendChild(a);
      t._els.dhx_gmap = [];
      t._els.dhx_gmap.push(a);
      h("dhx_gmap");
      var v = {
        zoom: t.config.map_initial_zoom || 10,
        center: t.config.map_initial_position,
        mapTypeId: t.config.map_type || google.maps.MapTypeId.ROADMAP
      };
      var _ = new google.maps.Map(document.getElementById("dhx_gmap"), v);
      _.disableDefaultUI = false;
      _.disableDoubleClickZoom = !t.config.readonly;
      google.maps.event.addListener(_, "dblclick", function (z) {
        if (!t.config.readonly && t.config.dblclick_create) {
          var Z = z.latLng;
          j.geocode({
            latLng: Z
          }, function (re, oe) {
            if (oe == google.maps.GeocoderStatus.OK) {
              t.addEventNow({
                lat: (Z = re[0].geometry.location).lat(),
                lng: Z.lng(),
                event_location: re[0].formatted_address,
                start_date: t._date,
                end_date: t.date.add(t._date, t.config.time_step, "minute")
              });
            }
          });
        }
      });
      var i = {
        content: ""
      };
      if (t.config.map_infowindow_max_width) {
        i.maxWidth = t.config.map_infowindow_max_width;
      }
      t.map = {
        _points: [],
        _markers: [],
        _infowindow: new google.maps.InfoWindow(i),
        _infowindows_content: [],
        _initialization_count: -1,
        _obj: _
      };
      j = new google.maps.Geocoder();
      if (t.config.map_resolve_user_location && navigator.geolocation) {
        if (!t._isMapPositionSet) {
          navigator.geolocation.getCurrentPosition(function (z) {
            var Z = new google.maps.LatLng(z.coords.latitude, z.coords.longitude);
            _.setCenter(Z);
            _.setZoom(t.config.map_zoom_after_resolve || 10);
            t.map._infowindow.setContent(t.locale.labels.marker_geo_success);
            t.map._infowindow.position = _.getCenter();
            t.map._infowindow.open(_);
            t._isMapPositionSet = true;
          }, function () {
            t.map._infowindow.setContent(t.locale.labels.marker_geo_fail);
            t.map._infowindow.setPosition(_.getCenter());
            t.map._infowindow.open(_);
            t._isMapPositionSet = true;
          });
        }
      }
      google.maps.event.addListener(_, "resize", function (z) {
        a.style.zIndex = "5";
        _.setZoom(_.getZoom());
      });
      google.maps.event.addListener(_, "tilesloaded", function (z) {
        a.style.zIndex = "5";
      });
      a.style.display = "none";
      var o = t.render_data;
      function c() {
        var z = t.get_visible_events();
        z.sort(function (Se, Fe) {
          if (Se.start_date.valueOf() == Fe.start_date.valueOf()) {
            if (Se.id > Fe.id) {
              return 1;
            } else {
              return -1;
            }
          } else if (Se.start_date > Fe.start_date) {
            return 1;
          } else {
            return -1;
          }
        });
        for (var Z = "<div " + (Ae = t._waiAria.mapAttrString()) + " class='dhx_map_area'>", re = 0; re < z.length; re++) {
          var oe = z[re];
          var _e = oe.id == t._selected_event_id ? "dhx_map_line highlight" : "dhx_map_line";
          var he = oe.color ? "background:" + oe.color + ";" : "";
          var be = oe.textColor ? "color:" + oe.textColor + ";" : "";
          var Ae = t._waiAria.mapRowAttrString(oe);
          var He = t._waiAria.mapDetailsBtnString();
          Z += "<div " + Ae + " class='" + _e + "' event_id='" + oe.id + "' " + t.config.event_attribute + "='" + oe.id + "' style='" + he + be + (oe._text_style || "") + " width: " + (t.xy.map_date_width + t.xy.map_description_width + 2) + "px;'><div class='dhx_map_event_time' style='width: " + t.xy.map_date_width + "px;' >" + t.templates.map_time(oe.start_date, oe.end_date, oe) + "</div>";
          Z += "<div " + He + " class='dhx_event_icon icon_details'>&nbsp;</div>";
          Z += "<div class='line_description' style='width:" + (t.xy.map_description_width - t.xy.map_icon_width) + "px;'>" + t.templates.map_text(oe.start_date, oe.end_date, oe) + "</div></div>";
        }
        Z += "<div class='dhx_v_border' style=" + (t.config.rtl ? "'right: " : "'left: ") + (t.xy.map_date_width - 2) + "px;'></div><div class='dhx_v_border_description'></div></div>";
        t._els.dhx_cal_data[0].scrollTop = 0;
        t._els.dhx_cal_data[0].innerHTML = Z;
        t._els.dhx_cal_data[0].style.width = t.xy.map_date_width + t.xy.map_description_width + 1 + "px";
        var Ne = t._els.dhx_cal_data[0].firstChild.childNodes;
        var Ve = t._getNavDateElement();
        if (Ve) {
          Ve.innerHTML = t.templates[t._mode + "_date"](t._min_date, t._max_date, t._mode);
        }
        t._rendered = [];
        re = 0;
        for (; re < Ne.length - 2; re++) {
          t._rendered[re] = Ne[re];
        }
      }
      function h(z) {
        var Z = document.getElementById(z);
        var re = t._y - t.xy.nav_height;
        if (re < 0) {
          re = 0;
        }
        var oe = t._x - t.xy.map_date_width - t.xy.map_description_width - 1;
        if (oe < 0) {
          oe = 0;
        }
        Z.style.height = re + "px";
        Z.style.width = oe + "px";
        if (t.config.rtl) {
          Z.style.marginRight = t.xy.map_date_width + t.xy.map_description_width + 1 + "px";
        } else {
          Z.style.marginLeft = t.xy.map_date_width + t.xy.map_description_width + 1 + "px";
        }
        Z.style.marginTop = t.xy.nav_height + 2 + "px";
      }
      t.render_data = function (z, Z) {
        if (this._mode != "map") {
          return o.apply(this, arguments);
        }
        c();
        for (var re = t.get_visible_events(), oe = 0; oe < re.length; oe++) {
          if (!t.map._markers[re[oe].id]) {
            V(re[oe], false, false);
          }
        }
      };
      t.map_view = function (z) {
        t.map._initialization_count++;
        var Z;
        var re = t._els.dhx_gmap[0];
        t._els.dhx_cal_data[0].style.width = t.xy.map_date_width + t.xy.map_description_width + 1 + "px";
        t._min_date = t.config.map_start || t._currentDate();
        t._max_date = t.config.map_end || t.date.add(t._currentDate(), 1, "year");
        t._table_view = true;
        (function (he) {
          if (he) {
            var be = t.locale.labels;
            t._els.dhx_cal_header[0].innerHTML = "<div class='dhx_map_line' style='width: " + (t.xy.map_date_width + t.xy.map_description_width + 2) + "px;' ><div class='headline_date' style='width: " + t.xy.map_date_width + "px;'>" + be.date + "</div><div class='headline_description' style='width: " + t.xy.map_description_width + "px;'>" + be.description + "</div></div>";
            t._table_view = true;
            t.set_sizes();
          }
        })(z);
        if (z) {
          (function () {
            t._selected_event_id = null;
            t.map._infowindow.close();
            var he = t.map._markers;
            for (var be in he) {
              if (he.hasOwnProperty(be)) {
                he[be].setMap(null);
                delete t.map._markers[be];
                if (t.map._infowindows_content[be]) {
                  delete t.map._infowindows_content[be];
                }
              }
            }
          })();
          c();
          re.style.display = "block";
          h("dhx_gmap");
          Z = t.map._obj.getCenter();
          for (var oe = t.get_visible_events(), _e = 0; _e < oe.length; _e++) {
            if (!t.map._markers[oe[_e].id]) {
              V(oe[_e]);
            }
          }
        } else {
          re.style.display = "none";
        }
        google.maps.event.trigger(t.map._obj, "resize");
        if (t.map._initialization_count === 0 && Z) {
          t.map._obj.setCenter(Z);
        }
        if (t._selected_event_id) {
          D(t._selected_event_id);
        }
      };
      function D(z) {
        t.map._obj.setCenter(t.map._points[z]);
        t.callEvent("onClick", [z]);
      }
      function V(z, Z, re) {
        var oe = t.config.map_error_position;
        if (z.lat && z.lng) {
          oe = new google.maps.LatLng(z.lat, z.lng);
        }
        var _e = t.templates.marker_text(z.start_date, z.end_date, z);
        if (!t._new_event) {
          t.map._infowindows_content[z.id] = _e;
          if (t.map._markers[z.id]) {
            t.map._markers[z.id].setMap(null);
          }
          t.map._markers[z.id] = new google.maps.Marker({
            position: oe,
            map: t.map._obj
          });
          google.maps.event.addListener(t.map._markers[z.id], "click", function () {
            t.map._infowindow.setContent(t.map._infowindows_content[z.id]);
            t.map._infowindow.open(t.map._obj, t.map._markers[z.id]);
            t._selected_event_id = z.id;
            t.render_data();
          });
          t.map._points[z.id] = oe;
          if (Z) {
            t.map._obj.setCenter(t.map._points[z.id]);
          }
          if (re) {
            t.callEvent("onClick", [z.id]);
          }
        }
      }
      t.attachEvent("onClick", function (z, Z) {
        if (this._mode == "map") {
          t._selected_event_id = z;
          for (var re = 0; re < t._rendered.length; re++) {
            t._rendered[re].className = "dhx_map_line";
            if (t._rendered[re].getAttribute(t.config.event_attribute) == z) {
              t._rendered[re].className += " highlight";
            }
          }
          if (t.map._points[z] && t.map._markers[z]) {
            t.map._obj.setCenter(t.map._points[z]);
            google.maps.event.trigger(t.map._markers[z], "click");
          }
        }
        return true;
      });
      function T(z) {
        if (z.event_location && j) {
          j.geocode({
            address: z.event_location,
            language: t.uid().toString()
          }, function (Z, re) {
            var oe = {};
            if (re != google.maps.GeocoderStatus.OK) {
              if (!(oe = t.callEvent("onLocationError", [z.id])) || oe === true) {
                oe = t.config.map_error_position;
              }
            } else {
              oe = Z[0].geometry.location;
            }
            z.lat = oe.lat();
            z.lng = oe.lng();
            t._selected_event_id = z.id;
            t._latLngUpdate = true;
            t.callEvent("onEventChanged", [z.id, z]);
            V(z, true, true);
          });
        } else {
          V(z, true, true);
        }
      }
      function W(z) {
        if (z.event_location && j) {
          j.geocode({
            address: z.event_location,
            language: t.uid().toString()
          }, function (Z, re) {
            var oe = {};
            if (re != google.maps.GeocoderStatus.OK) {
              if (!(oe = t.callEvent("onLocationError", [z.id])) || oe === true) {
                oe = t.config.map_error_position;
              }
            } else {
              oe = Z[0].geometry.location;
            }
            z.lat = oe.lat();
            z.lng = oe.lng();
            t._latLngUpdate = true;
            t.callEvent("onEventChanged", [z.id, z]);
          });
        }
      }
      t.attachEvent("onEventChanged", function (z, Z) {
        if (this._latLngUpdate) {
          this._latLngUpdate = false;
        } else {
          var re = t.getEvent(z);
          if (re.start_date < t._min_date && re.end_date > t._min_date || re.start_date < t._max_date && re.end_date > t._max_date || re.start_date.valueOf() >= t._min_date && re.end_date.valueOf() <= t._max_date) {
            if (t.map._markers[z]) {
              t.map._markers[z].setMap(null);
            }
            T(re);
          } else {
            t._selected_event_id = null;
            t.map._infowindow.close();
            if (t.map._markers[z]) {
              t.map._markers[z].setMap(null);
            }
          }
        }
        return true;
      });
      t.attachEvent("onEventIdChange", function (z, Z) {
        var re = t.getEvent(Z);
        if (re.start_date < t._min_date && re.end_date > t._min_date || re.start_date < t._max_date && re.end_date > t._max_date || re.start_date.valueOf() >= t._min_date && re.end_date.valueOf() <= t._max_date) {
          if (t.map._markers[z]) {
            t.map._markers[z].setMap(null);
            delete t.map._markers[z];
          }
          if (t.map._infowindows_content[z]) {
            delete t.map._infowindows_content[z];
          }
          T(re);
        }
        return true;
      });
      t.attachEvent("onEventAdded", function (z, Z) {
        if (!t._dataprocessor) {
          if (Z.start_date < t._min_date && Z.end_date > t._min_date || Z.start_date < t._max_date && Z.end_date > t._max_date || Z.start_date.valueOf() >= t._min_date && Z.end_date.valueOf() <= t._max_date) {
            if (t.map._markers[z]) {
              t.map._markers[z].setMap(null);
            }
            T(Z);
          }
        }
        return true;
      });
      t.attachEvent("onBeforeEventDelete", function (z, Z) {
        if (t.map._markers[z]) {
          t.map._markers[z].setMap(null);
        }
        t._selected_event_id = null;
        t.map._infowindow.close();
        return true;
      });
      t._event_resolve_delay = 1500;
      t.attachEvent("onEventLoading", function (z) {
        if (t.config.map_resolve_event_location && z.event_location && !z.lat && !z.lng) {
          t._event_resolve_delay += 1500;
          Z = W;
          re = this;
          oe = [z];
          setTimeout(function () {
            var he = Z.apply(re, oe);
            Z = re = oe = null;
            return he;
          }, t._event_resolve_delay || 1);
        }
        return true;
        var Z;
        var re;
        var oe;
      });
      t.attachEvent("onEventCancel", function (z, Z) {
        if (Z) {
          if (t.map._markers[z]) {
            t.map._markers[z].setMap(null);
          }
          t.map._infowindow.close();
        }
        return true;
      });
    });
  },
  minical: function (t) {
    var j = t._createDomEventScope();
    t.templates.calendar_month = t.date.date_to_str("%F %Y");
    t.templates.calendar_scale_date = t.date.date_to_str("%D");
    t.templates.calendar_date = t.date.date_to_str("%d");
    t.config.minicalendar = {
      mark_events: true
    };
    t._synced_minicalendars = [];
    t.renderCalendar = function (a, v, _) {
      var i = null;
      var o = a.date || t._currentDate();
      if (typeof o == "string") {
        o = this.templates.api_date(o);
      }
      if (v) {
        i = this._render_calendar(v.parentNode, o, a, v);
        t.unmarkCalendar(i);
      } else {
        var c = a.container;
        var h = a.position;
        if (typeof c == "string") {
          c = document.getElementById(c);
        }
        if (typeof h == "string") {
          h = document.getElementById(h);
        }
        if (h && h.left === undefined && h.right === undefined) {
          var D = t.$domHelpers.getOffset(h);
          h = {
            top: D.top + h.offsetHeight,
            left: D.left
          };
        }
        c ||= t._get_def_cont(h);
        if (!(i = this._render_calendar(c, o, a)).$_eventAttached) {
          i.$_eventAttached = true;
          j.attach(i, "click", function (he) {
            var be = he.target || he.srcElement;
            var Ae = t.$domHelpers;
            if (Ae.closest(be, ".dhx_month_head") && !Ae.closest(be, ".dhx_after") && !Ae.closest(be, ".dhx_before")) {
              var He = Ae.closest(be, "[data-cell-date]").getAttribute("data-cell-date");
              var Ne = t.templates.parse_date(He);
              t.unmarkCalendar(this);
              t.markCalendar(this, Ne, "dhx_calendar_click");
              this._last_date = Ne;
              if (this.conf.handler) {
                this.conf.handler.call(t, Ne, this);
              }
            }
          }.bind(i));
        }
      }
      if (t.config.minicalendar.mark_events) {
        for (var V = t.date.month_start(o), T = t.date.add(V, 1, "month"), W = this.getEvents(V, T), z = this["filter_" + this._mode], Z = {}, re = 0; re < W.length; re++) {
          var oe = W[re];
          if (!z || z(oe.id, oe)) {
            var _e = oe.start_date;
            if (_e.valueOf() < V.valueOf()) {
              _e = V;
            }
            _e = t.date.date_part(new Date(_e.valueOf()));
            for (; _e < oe.end_date && (Z[+_e] || (Z[+_e] = true, this.markCalendar(i, _e, "dhx_year_event")), (_e = this.date.add(_e, 1, "day")).valueOf() < T.valueOf()););
          }
        }
      }
      this._markCalendarCurrentDate(i);
      i.conf = a;
      if (a.sync && !_) {
        this._synced_minicalendars.push(i);
      }
      i.conf._on_xle_handler ||= t.attachEvent("onXLE", function () {
        t.updateCalendar(i, i.conf.date);
      });
      if (this.config.wai_aria_attributes && this.config.wai_aria_application_role) {
        i.setAttribute("role", "application");
      }
      return i;
    };
    t._get_def_cont = function (a) {
      if (!this._def_count) {
        this._def_count = document.createElement("div");
        this._def_count.className = "dhx_minical_popup";
        t.event(this._def_count, "click", function (v) {
          v.cancelBubble = true;
        });
        document.body.appendChild(this._def_count);
      }
      if (a.left) {
        this._def_count.style.left = a.left + "px";
      }
      if (a.right) {
        this._def_count.style.right = a.right + "px";
      }
      if (a.top) {
        this._def_count.style.top = a.top + "px";
      }
      if (a.bottom) {
        this._def_count.style.bottom = a.bottom + "px";
      }
      this._def_count._created = new Date();
      return this._def_count;
    };
    t._locateCalendar = function (a, v) {
      if (typeof v == "string") {
        v = t.templates.api_date(v);
      }
      if (+v > +a._max_date || +v < +a._min_date) {
        return null;
      }
      for (var _ = a.querySelector(".dhx_year_body").childNodes[0], i = 0, o = new Date(a._min_date); +this.date.add(o, 1, "week") <= +v;) {
        o = this.date.add(o, 1, "week");
        i++;
      }
      var c = t.config.start_on_monday;
      var h = (v.getDay() || (c ? 7 : 0)) - (c ? 1 : 0);
      return _.rows[i].cells[h].firstChild;
    };
    t.markCalendar = function (a, v, _) {
      var i = this._locateCalendar(a, v);
      if (i) {
        i.className += " " + _;
      }
    };
    t.unmarkCalendar = function (a, v, _) {
      _ = _ || "dhx_calendar_click";
      if (v = v || a._last_date) {
        var i = this._locateCalendar(a, v);
        if (i) {
          i.className = (i.className || "").replace(RegExp(_, "g"));
        }
      }
    };
    t._week_template = function (a) {
      for (var v = a || 250, _ = 0, i = document.createElement("div"), o = this.date.week_start(t._currentDate()), c = 0; c < 7; c++) {
        this._cols[c] = Math.floor(v / (7 - c));
        this._render_x_header(c, _, o, i);
        o = this.date.add(o, 1, "day");
        v -= this._cols[c];
        _ += this._cols[c];
      }
      i.lastChild.className += " dhx_scale_bar_last";
      return i;
    };
    t.updateCalendar = function (a, v) {
      a.conf.date = v;
      this.renderCalendar(a.conf, a, true);
    };
    t._mini_cal_arrows = ["&nbsp;", "&nbsp;"];
    t._render_calendar = function (a, v, _, i) {
      var o = t.templates;
      var c = this._cols;
      this._cols = [];
      var h = this._mode;
      this._mode = "calendar";
      var D = this._colsS;
      this._colsS = {
        height: 0
      };
      var V = new Date(this._min_date);
      var T = new Date(this._max_date);
      var W = new Date(t._date);
      var z = o.month_day;
      var Z = this._ignores_detected;
      this._ignores_detected = 0;
      o.month_day = o.calendar_date;
      v = this.date.month_start(v);
      var re;
      var oe = this._week_template(a.offsetWidth - 1 - this.config.minicalendar.padding);
      if (i) {
        re = i;
      } else {
        (re = document.createElement("div")).className = "dhx_cal_container dhx_mini_calendar";
      }
      re.setAttribute("date", this._helpers.formatDate(v));
      re.innerHTML = "<div class='dhx_year_month'></div><div class='dhx_year_grid" + (t.config.rtl ? " dhx_grid_rtl'>" : "'>") + "<div class='dhx_year_week'>" + (oe ? oe.innerHTML : "") + "</div><div class='dhx_year_body'></div></div>";
      var _e = re.querySelector(".dhx_year_month");
      var he = re.querySelector(".dhx_year_week");
      var be = re.querySelector(".dhx_year_body");
      _e.innerHTML = this.templates.calendar_month(v);
      if (_.navigation) {
        for (var Ae = function (wt, Dt) {
            var Rt = t.date.add(wt._date, Dt, "month");
            t.updateCalendar(wt, Rt);
            if (t._date.getMonth() == wt._date.getMonth() && t._date.getFullYear() == wt._date.getFullYear()) {
              t._markCalendarCurrentDate(wt);
            }
          }, He = ["dhx_cal_prev_button", "dhx_cal_next_button"], Ne = ["left:1px;top:2px;position:absolute;", "left:auto; right:1px;top:2px;position:absolute;"], Ve = [-1, 1], Se = function (wt) {
            return function () {
              if (_.sync) {
                for (var Dt = t._synced_minicalendars, Rt = 0; Rt < Dt.length; Rt++) {
                  Ae(Dt[Rt], wt);
                }
              } else {
                if (t.config.rtl) {
                  wt = -wt;
                }
                Ae(re, wt);
              }
            };
          }, Fe = [t.locale.labels.prev, t.locale.labels.next], Oe = 0; Oe < 2; Oe++) {
          var at = document.createElement("div");
          at.className = He[Oe];
          t._waiAria.headerButtonsAttributes(at, Fe[Oe]);
          at.style.cssText = Ne[Oe];
          at.innerHTML = this._mini_cal_arrows[Oe];
          _e.appendChild(at);
          j.attach(at, "click", Se(Ve[Oe]));
        }
      }
      re._date = new Date(v);
      re.week_start = (v.getDay() - (this.config.start_on_monday ? 1 : 0) + 7) % 7;
      var ht = re._min_date = this.date.week_start(v);
      re._max_date = this.date.add(re._min_date, 6, "week");
      this._reset_month_scale(be, v, ht, 6);
      if (!i) {
        a.appendChild(re);
      }
      he.style.height = he.childNodes[0].offsetHeight - 1 + "px";
      var lt = t.uid();
      t._waiAria.minicalHeader(_e, lt);
      t._waiAria.minicalGrid(re.querySelector(".dhx_year_grid"), lt);
      t._waiAria.minicalRow(he);
      for (var mt = he.querySelectorAll(".dhx_scale_bar"), ft = 0; ft < mt.length; ft++) {
        t._waiAria.minicalHeadCell(mt[ft]);
      }
      var yt = be.querySelectorAll("td");
      var xt = new Date(ht);
      for (ft = 0; ft < yt.length; ft++) {
        t._waiAria.minicalDayCell(yt[ft], new Date(xt));
        xt = t.date.add(xt, 1, "day");
      }
      t._waiAria.minicalHeader(_e, lt);
      this._cols = c;
      this._mode = h;
      this._colsS = D;
      this._min_date = V;
      this._max_date = T;
      t._date = W;
      o.month_day = z;
      this._ignores_detected = Z;
      return re;
    };
    t.destroyCalendar = function (a, v) {
      if (!a && this._def_count && this._def_count.firstChild && (v || new Date().valueOf() - this._def_count._created.valueOf() > 500)) {
        a = this._def_count.firstChild;
      }
      if (a) {
        j.detachAll();
        a.innerHTML = "";
        if (a.parentNode) {
          a.parentNode.removeChild(a);
        }
        if (this._def_count) {
          this._def_count.style.top = "-1000px";
        }
        if (a.conf && a.conf._on_xle_handler) {
          t.detachEvent(a.conf._on_xle_handler);
        }
      }
    };
    t.isCalendarVisible = function () {
      return !!this._def_count && parseInt(this._def_count.style.top, 10) > 0 && this._def_count;
    };
    t.attachEvent("onTemplatesReady", function () {
      t.event(document.body, "click", function () {
        t.destroyCalendar();
      });
    }, {
      once: true
    });
    t.templates.calendar_time = t.date.date_to_str("%d-%m-%Y");
    t.form_blocks.calendar_time = {
      render: function (a) {
        var v = "<input class='dhx_readonly' type='text' readonly='true'>";
        var _ = t.config;
        var i = this.date.date_part(t._currentDate());
        var o = 1440;
        var c = 0;
        if (_.limit_time_select) {
          c = _.first_hour * 60;
          o = _.last_hour * 60 + 1;
        }
        i.setHours(c / 60);
        a._time_values = [];
        v += " <select class='dhx_lightbox_time_select'>";
        for (var h = c; h < o; h += this.config.time_step * 1) {
          v += "<option value='" + h + "'>" + this.templates.time_picker(i) + "</option>";
          a._time_values.push(h);
          i = this.date.add(i, this.config.time_step, "minute");
        }
        return "<div style='height:30px;padding-top:0; font-size:inherit;' class='dhx_section_time dhx_lightbox_minical'>" + (v += "</select>") + "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>" + v + "</div>";
      },
      set_value: function (a, v, _, i) {
        var o;
        var c;
        var h = a.getElementsByTagName("input");
        var D = a.getElementsByTagName("select");
        function V(_e, he, be) {
          t.event(_e, "click", function () {
            t.destroyCalendar(null, true);
            t.renderCalendar({
              position: _e,
              date: new Date(this._date),
              navigation: true,
              handler: function (Ae) {
                _e.value = t.templates.calendar_time(Ae);
                _e._date = new Date(Ae);
                t.destroyCalendar();
                if (t.config.event_duration && t.config.auto_end_date && be === 0) {
                  Z();
                }
              }
            });
          });
        }
        if (t.config.full_day) {
          if (!a._full_day) {
            var T = "<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> " + t.locale.labels.full_day + "&nbsp;</label></input>";
            if (!t.config.wide_form) {
              T = a.previousSibling.innerHTML + T;
            }
            a.previousSibling.innerHTML = T;
            a._full_day = true;
          }
          var W = a.previousSibling.getElementsByTagName("input")[0];
          var z = t.date.time_part(_.start_date) === 0 && t.date.time_part(_.end_date) === 0;
          W.checked = z;
          D[0].disabled = W.checked;
          D[1].disabled = W.checked;
          if (!W.$_eventAttached) {
            W.$_eventAttached = true;
            t.event(W, "click", function () {
              if (W.checked === true) {
                var _e = {};
                t.form_blocks.calendar_time.get_value(a, _e);
                o = t.date.date_part(_e.start_date);
                if (+(c = t.date.date_part(_e.end_date)) == +o || +c >= +o && (_.end_date.getHours() !== 0 || _.end_date.getMinutes() !== 0)) {
                  c = t.date.add(c, 1, "day");
                }
              }
              var he = o || _.start_date;
              var be = c || _.end_date;
              re(h[0], he);
              re(h[1], be);
              D[0].value = he.getHours() * 60 + he.getMinutes();
              D[1].value = be.getHours() * 60 + be.getMinutes();
              D[0].disabled = W.checked;
              D[1].disabled = W.checked;
            });
          }
        }
        if (t.config.event_duration && t.config.auto_end_date) {
          function Z() {
            if (t.config.auto_end_date && t.config.event_duration) {
              o = t.date.add(h[0]._date, D[0].value, "minute");
              c = new Date(o.getTime() + t.config.event_duration * 60 * 1000);
              h[1].value = t.templates.calendar_time(c);
              h[1]._date = t.date.date_part(new Date(c));
              D[1].value = c.getHours() * 60 + c.getMinutes();
            }
          }
          if (!D[0].$_eventAttached) {
            D[0].addEventListener("change", Z);
          }
        }
        function re(_e, he, be) {
          V(_e, he, be);
          _e.value = t.templates.calendar_time(he);
          _e._date = t.date.date_part(new Date(he));
        }
        function oe(_e) {
          for (var he = i._time_values, be = _e.getHours() * 60 + _e.getMinutes(), Ae = be, He = false, Ne = 0; Ne < he.length; Ne++) {
            var Ve = he[Ne];
            if (Ve === be) {
              He = true;
              break;
            }
            if (Ve < be) {
              Ae = Ve;
            }
          }
          if (He || Ae) {
            if (He) {
              return be;
            } else {
              return Ae;
            }
          } else {
            return -1;
          }
        }
        re(h[0], _.start_date, 0);
        re(h[1], _.end_date, 1);
        V = function () {};
        D[0].value = oe(_.start_date);
        D[1].value = oe(_.end_date);
      },
      get_value: function (a, v) {
        var _ = a.getElementsByTagName("input");
        var i = a.getElementsByTagName("select");
        v.start_date = t.date.add(_[0]._date, i[0].value, "minute");
        v.end_date = t.date.add(_[1]._date, i[1].value, "minute");
        if (v.end_date <= v.start_date) {
          v.end_date = t.date.add(v.start_date, t.config.time_step, "minute");
        }
        return {
          start_date: new Date(v.start_date),
          end_date: new Date(v.end_date)
        };
      },
      focus: function (a) {}
    };
    t.linkCalendar = function (a, v) {
      function _() {
        var o = new Date(t._date.valueOf());
        if (v) {
          o = v(o);
        }
        o.setDate(1);
        t.updateCalendar(a, o);
        return true;
      }
      t.attachEvent("onViewChange", _);
      t.attachEvent("onXLE", _);
      t.attachEvent("onEventAdded", _);
      t.attachEvent("onEventChanged", _);
      t.attachEvent("onEventDeleted", _);
      _();
    };
    t._markCalendarCurrentDate = function (a) {
      var v = t.getState();
      var _ = v.min_date;
      var i = v.max_date;
      var o = v.mode;
      var c = t.date.month_start(new Date(a._date));
      var h = t.date.add(c, 1, "month");
      if (!{
        month: true,
        year: true,
        agenda: true,
        grid: true
      }[o] && (_.valueOf() > c.valueOf() || i.valueOf() < h.valueOf())) {
        for (var D = _; D.valueOf() < i.valueOf();) {
          if (c.valueOf() <= D.valueOf() && h > D) {
            t.markCalendar(a, D, "dhx_calendar_click");
          }
          D = t.date.add(D, 1, "day");
        }
      }
    };
    t.attachEvent("onEventCancel", function () {
      t.destroyCalendar(null, true);
    });
    t.attachEvent("onDestroy", function () {
      t.destroyCalendar();
    });
  },
  monthheight: function (t) {
    t.attachEvent("onTemplatesReady", function () {
      t.xy.scroll_width = 0;
      var j = t.render_view_data;
      t.render_view_data = function () {
        var v = this._els.dhx_cal_data[0];
        v.firstChild._h_fix = true;
        j.apply(t, arguments);
        var _ = parseInt(v.style.height);
        v.style.height = "1px";
        v.style.height = v.scrollHeight + "px";
        this._obj.style.height = this._obj.clientHeight + v.scrollHeight - _ + "px";
      };
      var a = t._reset_month_scale;
      t._reset_month_scale = function (v, _, i, o) {
        var c = {
          clientHeight: 100
        };
        a.apply(t, [c, _, i, o]);
        v.innerHTML = c.innerHTML;
      };
    });
  },
  multisection: function (t) {
    Te("Multisection", t.assert);
  },
  multisource: function (t) {
    var j = t._load;
    t._load = function (a, v) {
      if (It(a = a || this._load_url) == "object") {
        for (var _ = (c = undefined, (c = function () {}).prototype = this._loaded, c), i = 0; i < a.length; i++) {
          this._loaded = new _();
          j.call(this, a[i], v);
        }
      } else {
        j.apply(this, arguments);
      }
      var c;
    };
  },
  mvc: function (t) {
    var j;
    var a = {
      use_id: false
    };
    function v(o) {
      var c = {};
      for (var h in o) {
        if (h.indexOf("_") !== 0) {
          c[h] = o[h];
        }
      }
      if (!a.use_id) {
        delete c.id;
      }
      return c;
    }
    function _(o) {
      o._not_render = false;
      if (o._render_wait) {
        o.render_view_data();
      }
      o._loading = false;
      o.callEvent("onXLE", []);
    }
    function i(o) {
      if (a.use_id) {
        return o.id;
      } else {
        return o.cid;
      }
    }
    t.backbone = function (o, c) {
      if (c) {
        a = c;
      }
      o.bind("change", function (V, T) {
        var W = i(V);
        var z = t._events[W] = V.toJSON();
        z.id = W;
        t._init_event(z);
        clearTimeout(j);
        j = setTimeout(function () {
          t.updateView();
        }, 1);
      });
      o.bind("remove", function (V, T) {
        var W = i(V);
        if (t._events[W]) {
          t.deleteEvent(W);
        }
      });
      var h = [];
      function D() {
        if (h.length) {
          t.parse(h, "json");
          h = [];
        }
      }
      o.bind("add", function (V, T) {
        var W = i(V);
        if (!t._events[W]) {
          var z = V.toJSON();
          z.id = W;
          t._init_event(z);
          h.push(z);
          if (h.length == 1) {
            setTimeout(D, 1);
          }
        }
      });
      o.bind("request", function (V) {
        var T;
        if (V instanceof Backbone.Collection) {
          (T = t)._loading = true;
          T._not_render = true;
          T.callEvent("onXLS", []);
        }
      });
      o.bind("sync", function (V) {
        if (V instanceof Backbone.Collection) {
          _(t);
        }
      });
      o.bind("error", function (V) {
        if (V instanceof Backbone.Collection) {
          _(t);
        }
      });
      t.attachEvent("onEventCreated", function (V) {
        var T = new o.model(t.getEvent(V));
        t._events[V] = T.toJSON();
        t._events[V].id = V;
        return true;
      });
      t.attachEvent("onEventAdded", function (V) {
        if (!o.get(V)) {
          var T = v(t.getEvent(V));
          var W = new o.model(T);
          var z = i(W);
          if (z != V) {
            this.changeEventId(V, z);
          }
          o.add(W);
          o.trigger("scheduler:add", W);
        }
        return true;
      });
      t.attachEvent("onEventChanged", function (V) {
        var T = o.get(V);
        var W = v(t.getEvent(V));
        T.set(W);
        o.trigger("scheduler:change", T);
        return true;
      });
      t.attachEvent("onEventDeleted", function (V) {
        var T = o.get(V);
        if (T) {
          o.trigger("scheduler:remove", T);
          o.remove(V);
        }
        return true;
      });
    };
  },
  outerdrag: function (t) {
    t.attachEvent("onTemplatesReady", function () {
      var j;
      var a = new dhtmlDragAndDropObject();
      var v = a.stopDrag;
      function _(i, o, c, h) {
        if (!t.checkEvent("onBeforeExternalDragIn") || t.callEvent("onBeforeExternalDragIn", [i, o, c, h, j])) {
          var D = t.attachEvent("onEventCreated", function (Z) {
            if (!t.callEvent("onExternalDragIn", [Z, i, j])) {
              this._drag_mode = this._drag_id = null;
              this.deleteEvent(Z);
            }
          });
          var V = t.getActionData(j);
          var T = {
            start_date: new Date(V.date)
          };
          if (t.matrix && t.matrix[t._mode]) {
            var W = t.matrix[t._mode];
            T[W.y_property] = V.section;
            var z = t._locate_cell_timeline(j);
            T.start_date = W._trace_x[z.x];
            T.end_date = t.date.add(T.start_date, W.x_step, W.x_unit);
          }
          if (t._props && t._props[t._mode]) {
            T[t._props[t._mode].map_to] = V.section;
          }
          t.addEventNow(T);
          t.detachEvent(D);
        }
      }
      a.stopDrag = function (i) {
        j = i;
        return v.apply(this, arguments);
      };
      a.addDragLanding(t._els.dhx_cal_data[0], {
        _drag: function (i, o, c, h) {
          _(i, o, c, h);
        },
        _dragIn: function (i, o) {
          return i;
        },
        _dragOut: function (i) {
          return this;
        }
      });
      if (dhtmlx.DragControl) {
        dhtmlx.DragControl.addDrop(t._els.dhx_cal_data[0], {
          onDrop: function (i, o, c, h) {
            var D = dhtmlx.DragControl.getMaster(i);
            j = h;
            _(i, D, o, h.target || h.srcElement);
          },
          onDragIn: function (i, o, c) {
            return o;
          }
        }, true);
      }
    });
  },
  pdf: function (t) {
    var j;
    var a;
    var v = new RegExp("<[^>]*>", "g");
    var _ = new RegExp("<br[^>]*>", "g");
    function i(Ne) {
      return Ne.replace(_, "\n").replace(v, "");
    }
    function o(Ne, Ve) {
      Ne = parseFloat(Ne);
      Ve = parseFloat(Ve);
      if (!isNaN(Ve)) {
        Ne -= Ve;
      }
      var Se = h(Ne);
      Ne = Ne - Se.width + Se.cols * j;
      if (isNaN(Ne)) {
        return "auto";
      } else {
        return Ne * 100 / j;
      }
    }
    function c(Ne, Ve, Se) {
      Ne = parseFloat(Ne);
      Ve = parseFloat(Ve);
      if (!isNaN(Ve) && Se) {
        Ne -= Ve;
      }
      var Fe = h(Ne);
      Ne = Ne - Fe.width + Fe.cols * j;
      if (isNaN(Ne)) {
        return "auto";
      } else {
        return Ne * 100 / (j - (isNaN(Ve) ? 0 : Ve));
      }
    }
    function h(Ne) {
      for (var Ve = 0, Se = t._els.dhx_cal_header[0].childNodes, Fe = Se[1] ? Se[1].childNodes : Se[0].childNodes, Oe = 0; Oe < Fe.length; Oe++) {
        var ht = parseFloat((Fe[Oe].style ? Fe[Oe] : Fe[Oe].parentNode).style.width);
        if (Ne <= ht) {
          break;
        }
        Ne -= ht + 1;
        Ve += ht + 1;
      }
      return {
        width: Ve,
        cols: Oe
      };
    }
    function D(Ne) {
      Ne = parseFloat(Ne);
      if (isNaN(Ne)) {
        return "auto";
      } else {
        return Ne * 100 / a;
      }
    }
    function V(Ne, Ve) {
      return (window.getComputedStyle ? window.getComputedStyle(Ne, null)[Ve] : Ne.currentStyle ? Ne.currentStyle[Ve] : null) || "";
    }
    function T(Ne, Ve) {
      for (var Se = parseInt(Ne.style.left, 10), Fe = 0; Fe < t._cols.length; Fe++) {
        if ((Se -= t._cols[Fe]) < 0) {
          return Fe;
        }
      }
      return Ve;
    }
    function W(Ne, Ve) {
      for (var Se = parseInt(Ne.style.top, 10), Fe = 0; Fe < t._colsS.heights.length; Fe++) {
        if (t._colsS.heights[Fe] > Se) {
          return Fe;
        }
      }
      return Ve;
    }
    function z(Ne) {
      if (Ne) {
        return "<" + Ne + ">";
      } else {
        return "";
      }
    }
    function Z(Ne) {
      if (Ne) {
        return "</" + Ne + ">";
      } else {
        return "";
      }
    }
    function re(Ne, Ve, Se, Fe) {
      var Oe = "<" + Ne + " profile='" + Ve + "'";
      if (Se) {
        Oe += " header='" + Se + "'";
      }
      if (Fe) {
        Oe += " footer='" + Fe + "'";
      }
      return Oe + ">";
    }
    function oe() {
      var Ne = "";
      var Ve = t._mode;
      if (t.matrix && t.matrix[t._mode]) {
        Ve = t.matrix[t._mode].render == "cell" ? "matrix" : "timeline";
      }
      Ne += "<scale mode='" + Ve + "' today='" + t._els.dhx_cal_date[0].innerHTML + "'>";
      if (t._mode == "week_agenda") {
        for (var Se = t._els.dhx_cal_data[0].getElementsByTagName("DIV"), Fe = 0; Fe < Se.length; Fe++) {
          if (Se[Fe].className == "dhx_wa_scale_bar") {
            Ne += "<column>" + i(Se[Fe].innerHTML) + "</column>";
          }
        }
      } else if (t._mode == "agenda" || t._mode == "map") {
        Ne += "<column>" + i((Se = t._els.dhx_cal_header[0].childNodes[0].childNodes)[0].innerHTML) + "</column><column>" + i(Se[1].innerHTML) + "</column>";
      } else if (t._mode == "year") {
        Se = t._els.dhx_cal_data[0].childNodes;
        Fe = 0;
        Se = t._els.dhx_cal_data[0].childNodes;
        Fe = 0;
        for (; Fe < Se.length; Fe++) {
          Ne += "<month label='" + i(Se[Fe].querySelector(".dhx_year_month").innerHTML) + "'>";
          Ne += he(Se[Fe].querySelector(".dhx_year_week").childNodes);
          Ne += _e(Se[Fe].querySelector(".dhx_year_body"));
          Ne += "</month>";
        }
      } else {
        Ne += "<x>";
        Ne += he(Se = t._els.dhx_cal_header[0].childNodes);
        Ne += "</x>";
        var Oe = t._els.dhx_cal_data[0];
        if (t.matrix && t.matrix[t._mode]) {
          Ne += "<y>";
          Fe = 0;
          for (; Fe < Oe.firstChild.rows.length; Fe++) {
            Ne += "<row><![CDATA[" + i(Oe.firstChild.rows[Fe].cells[0].innerHTML) + "]]></row>";
          }
          Ne += "</y>";
          a = Oe.firstChild.rows[0].cells[0].offsetHeight;
        } else if (Oe.firstChild.tagName == "TABLE") {
          Ne += _e(Oe);
        } else {
          for (Oe = Oe.childNodes[Oe.childNodes.length - 1]; Oe.className.indexOf("dhx_scale_holder") == -1;) {
            Oe = Oe.previousSibling;
          }
          Oe = Oe.childNodes;
          Ne += "<y>";
          Fe = 0;
          for (; Fe < Oe.length; Fe++) {
            Ne += "\n<row><![CDATA[" + i(Oe[Fe].innerHTML) + "]]></row>";
          }
          Ne += "</y>";
          a = Oe[0].offsetHeight;
        }
      }
      return Ne + "</scale>";
    }
    function _e(Ne) {
      for (var Ve = "", Se = Ne.querySelectorAll("tr"), Fe = 0; Fe < Se.length; Fe++) {
        for (var Oe = [], at = Se[Fe].querySelectorAll("td"), ht = 0; ht < at.length; ht++) {
          Oe.push(at[ht].querySelector(".dhx_month_head").innerHTML);
        }
        Ve += "\n<row height='" + at[0].offsetHeight + "'><![CDATA[" + i(Oe.join("|")) + "]]></row>";
        a = at[0].offsetHeight;
      }
      return Ve;
    }
    function he(Ne) {
      var Ve;
      var Se = "";
      if (t.matrix && t.matrix[t._mode]) {
        if (t.matrix[t._mode].second_scale) {
          Ve = Ne[1].childNodes;
        }
        Ne = Ne[0].childNodes;
      }
      for (var Fe = 0; Fe < Ne.length; Fe++) {
        Se += "\n<column><![CDATA[" + i(Ne[Fe].innerHTML) + "]]></column>";
      }
      j = Ne[0].offsetWidth;
      if (Ve) {
        var Oe = 0;
        var at = Ne[0].offsetWidth;
        var ht = 1;
        for (Fe = 0; Fe < Ve.length; Fe++) {
          Se += "\n<column second_scale='" + ht + "'><![CDATA[" + i(Ve[Fe].innerHTML) + "]]></column>";
          if ((Oe += Ve[Fe].offsetWidth) >= at) {
            at += Ne[ht] ? Ne[ht].offsetWidth : 0;
            ht++;
          }
          j = Ve[0].offsetWidth;
        }
      }
      return Se;
    }
    function be(Ne) {
      var Ve = "";
      var Se = t._rendered;
      var Fe = t.matrix && t.matrix[t._mode];
      if (t._mode == "agenda" || t._mode == "map") {
        for (var Oe = 0; Oe < Se.length; Oe++) {
          Ve += "<event><head><![CDATA[" + i(Se[Oe].childNodes[0].innerHTML) + "]]></head><body><![CDATA[" + i(Se[Oe].childNodes[2].innerHTML) + "]]></body></event>";
        }
      } else if (t._mode == "week_agenda") {
        for (Oe = 0; Oe < Se.length; Oe++) {
          Ve += "<event day='" + Se[Oe].parentNode.getAttribute("day") + "'><body>" + i(Se[Oe].innerHTML) + "</body></event>";
        }
      } else if (t._mode == "year") {
        Se = t.get_visible_events();
        Oe = 0;
        Se = t.get_visible_events();
        Oe = 0;
        for (; Oe < Se.length; Oe++) {
          var at = Se[Oe].start_date;
          for (at.valueOf() < t._min_date.valueOf() && (at = t._min_date); at < Se[Oe].end_date;) {
            var ht = at.getMonth() + (at.getFullYear() - t._min_date.getFullYear()) * 12 - t.week_starts._month;
            var lt = t.week_starts[ht] + at.getDate() - 1;
            var mt = Ne ? V(t._get_year_cell(at), "color") : "";
            var ft = Ne ? V(t._get_year_cell(at), "backgroundColor") : "";
            Ve += "<event day='" + lt % 7 + "' week='" + Math.floor(lt / 7) + "' month='" + ht + "' backgroundColor='" + ft + "' color='" + mt + "'></event>";
            if ((at = t.date.add(at, 1, "day")).valueOf() >= t._max_date.valueOf()) {
              break;
            }
          }
        }
      } else if (Fe && Fe.render == "cell") {
        Se = t._els.dhx_cal_data[0].getElementsByTagName("TD");
        Oe = 0;
        Se = t._els.dhx_cal_data[0].getElementsByTagName("TD");
        Oe = 0;
        for (; Oe < Se.length; Oe++) {
          mt = Ne ? V(Se[Oe], "color") : "";
          Ve += "\n<event><body backgroundColor='" + (ft = Ne ? V(Se[Oe], "backgroundColor") : "") + "' color='" + mt + "'><![CDATA[" + i(Se[Oe].innerHTML) + "]]></body></event>";
        }
      } else {
        for (Oe = 0; Oe < Se.length; Oe++) {
          var yt;
          var xt;
          if (t.matrix && t.matrix[t._mode]) {
            yt = o(Se[Oe].style.left);
            xt = o(Se[Oe].offsetWidth) - 1;
          } else {
            var wt = t.config.use_select_menu_space ? 0 : 26;
            yt = c(Se[Oe].style.left, wt, true);
            xt = c(Se[Oe].style.width, wt) - 1;
          }
          if (!isNaN(xt * 1)) {
            var Dt = D(Se[Oe].style.top);
            var Rt = D(Se[Oe].style.height);
            var Pt = Se[Oe].className.split(" ")[0].replace("dhx_cal_", "");
            if (Pt !== "dhx_tooltip_line") {
              var Ft = t.getEvent(Se[Oe].getAttribute(t.config.event_attribute));
              if (Ft) {
                lt = Ft._sday;
                var Lt = Ft._sweek;
                var Bt = Ft._length || 0;
                if (t._mode == "month") {
                  Rt = parseInt(Se[Oe].offsetHeight, 10);
                  Dt = parseInt(Se[Oe].style.top, 10) - t.xy.month_head_height;
                  lt = T(Se[Oe], lt);
                  Lt = W(Se[Oe], Lt);
                } else if (t.matrix && t.matrix[t._mode]) {
                  lt = 0;
                  Lt = Se[Oe].parentNode.parentNode.parentNode.rowIndex;
                  var Ut = a;
                  a = Se[Oe].parentNode.offsetHeight;
                  Dt = D(Se[Oe].style.top);
                  Dt -= Dt * 0.2;
                  a = Ut;
                } else {
                  if (Se[Oe].parentNode == t._els.dhx_cal_data[0]) {
                    continue;
                  }
                  var zt = t._els.dhx_cal_data[0].childNodes[0];
                  var Ht = parseFloat(zt.className.indexOf("dhx_scale_holder") != -1 ? zt.style.left : 0);
                  yt += o(Se[Oe].parentNode.style.left, Ht);
                }
                Ve += "\n<event week='" + Lt + "' day='" + lt + "' type='" + Pt + "' x='" + yt + "' y='" + Dt + "' width='" + xt + "' height='" + Rt + "' len='" + Bt + "'>";
                if (Pt == "event") {
                  Ve += "<header><![CDATA[" + i(Se[Oe].childNodes[1].innerHTML) + "]]></header>";
                  mt = Ne ? V(Se[Oe].childNodes[2], "color") : "";
                  Ve += "<body backgroundColor='" + (ft = Ne ? V(Se[Oe].childNodes[2], "backgroundColor") : "") + "' color='" + mt + "'><![CDATA[" + i(Se[Oe].childNodes[2].innerHTML) + "]]></body>";
                } else {
                  mt = Ne ? V(Se[Oe], "color") : "";
                  Ve += "<body backgroundColor='" + (ft = Ne ? V(Se[Oe], "backgroundColor") : "") + "' color='" + mt + "'><![CDATA[" + i(Se[Oe].innerHTML) + "]]></body>";
                }
                Ve += "</event>";
              }
            }
          }
        }
      }
      return Ve;
    }
    function Ae(Ne, Ve, Se, Fe, Oe, at) {
      var ht = false;
      if (Fe == "fullcolor") {
        ht = true;
        Fe = "color";
      }
      Fe = Fe || "color";
      var lt = "";
      if (Ne) {
        var mt = t._date;
        var ft = t._mode;
        Ve = t.date[Se + "_start"](Ve);
        Ve = t.date["get_" + Se + "_end"] ? t.date["get_" + Se + "_end"](Ve) : t.date.add(Ve, 1, Se);
        lt = re("pages", Fe, Oe, at);
        for (var yt = new Date(Ne); +yt < +Ve; yt = this.date.add(yt, 1, Se)) {
          this.setCurrentView(yt, Se);
          lt += z("page") + oe().replace("–", "-") + be(ht) + Z("page");
        }
        lt += Z("pages");
        this.setCurrentView(mt, ft);
      } else {
        lt = re("data", Fe, Oe, at) + oe().replace("–", "-") + be(ht) + Z("data");
      }
      return lt;
    }
    function He(Ne, Ve, Se, Fe, Oe, at, ht) {
      var lt;
      var mt;
      var ft;
      var yt;
      lt = Tt(Oe) == "object" ? function (lt) {
        for (var mt = "<data>", ft = 0; ft < lt.length; ft++) {
          mt += lt[ft].source.getPDFData(lt[ft].start, lt[ft].end, lt[ft].view, lt[ft].mode, lt[ft].header, lt[ft].footer);
        }
        return mt + "</data>";
      }(Oe) : Ae.apply(this, [Ne, Ve, Se, Oe, at, ht]);
      mt = Fe;
      ft = t.uid();
      (yt = document.createElement("div")).style.display = "none";
      document.body.appendChild(yt);
      yt.innerHTML = "<form id=\"" + ft + "\" method=\"post\" target=\"_blank\" action=\"" + mt + "\" accept-charset=\"utf-8\" enctype=\"application/x-www-form-urlencoded\"><input type=\"hidden\" name=\"mycoolxmlbody\"/> </form>";
      document.getElementById(ft).firstChild.value = encodeURIComponent(lt);
      document.getElementById(ft).submit();
      yt.parentNode.removeChild(yt);
    }
    t.getPDFData = Ae;
    t.toPDF = function (Ne, Ve, Se, Fe) {
      return He.apply(this, [null, null, null, Ne, Ve, Se, Fe]);
    };
    t.toPDFRange = function (Ne, Ve, Se, Fe, Oe, at, ht) {
      if (typeof Ne == "string") {
        Ne = t.templates.api_date(Ne);
        Ve = t.templates.api_date(Ve);
      }
      return He.apply(this, arguments);
    };
  },
  quick_info: function (t) {
    t.config.icons_select = ["icon_details", "icon_delete"];
    t.config.details_on_create = true;
    t.config.show_quick_info = true;
    t.xy.menu_width = 0;
    t.attachEvent("onClick", function (j) {
      if (t.config.show_quick_info) {
        t.showQuickInfo(j);
        return true;
      }
    });
    (function () {
      for (var j = ["onEmptyClick", "onViewChange", "onLightbox", "onBeforeEventDelete", "onBeforeDrag"], a = function () {
          t.hideQuickInfo(true);
          return true;
        }, v = 0; v < j.length; v++) {
        t.attachEvent(j[v], a);
      }
    })();
    t.templates.quick_info_title = function (j, a, v) {
      return v.text.substr(0, 50);
    };
    t.templates.quick_info_content = function (j, a, v) {
      return v.details || v.text;
    };
    t.templates.quick_info_date = function (j, a, v) {
      if (t.isOneDayEvent(v) && t.config.rtl) {
        return t.templates.day_date(j, a, v) + " " + t.templates.event_header(a, j, v);
      } else if (t.isOneDayEvent(v)) {
        return t.templates.day_date(j, a, v) + " " + t.templates.event_header(j, a, v);
      } else if (t.config.rtl) {
        return t.templates.week_date(a, j, v);
      } else {
        return t.templates.week_date(j, a, v);
      }
    };
    t.showQuickInfo = function (j) {
      if (j != this._quick_info_box_id && (this.hideQuickInfo(true), this.callEvent("onBeforeQuickInfo", [j]) !== false)) {
        var a = this._get_event_counter_part(j);
        if (a) {
          this._quick_info_box = this._init_quick_info(a);
          this._fill_quick_data(j);
          this._show_quick_info(a);
          this.callEvent("onQuickInfo", [j]);
        }
      }
    };
    (function () {
      function j(a) {
        a = a || "";
        var v;
        var _ = parseFloat(a);
        var i = a.match(/m?s/);
        i &&= i[0];
        switch (i) {
          case "s":
            v = _ * 1000;
            break;
          case "ms":
            v = _;
            break;
          default:
            v = 0;
        }
        return v;
      }
      t.hideQuickInfo = function (a) {
        var v = this._quick_info_box;
        var _ = this._quick_info_box_id;
        this._quick_info_box_id = 0;
        if (v && v.parentNode) {
          var i = v.offsetWidth;
          if (t.config.quick_info_detached) {
            this.callEvent("onAfterQuickInfo", [_]);
            return v.parentNode.removeChild(v);
          }
          if (v.style.right == "auto") {
            v.style.left = -i + "px";
          } else {
            v.style.right = -i + "px";
          }
          if (a) {
            v.parentNode.removeChild(v);
          } else {
            var o;
            if (window.getComputedStyle) {
              o = window.getComputedStyle(v, null);
            } else if (v.currentStyle) {
              o = v.currentStyle;
            }
            var c = j(o["transition-delay"]) + j(o["transition-duration"]);
            setTimeout(function () {
              if (v.parentNode) {
                v.parentNode.removeChild(v);
              }
            }, c);
          }
          this.callEvent("onAfterQuickInfo", [_]);
        }
      };
    })();
    t.event(window, "keydown", function (j) {
      if (j.keyCode == 27) {
        t.hideQuickInfo();
      }
    });
    t._show_quick_info = function (j) {
      var a = t._quick_info_box;
      t._obj.appendChild(a);
      var v = a.offsetWidth;
      var _ = a.offsetHeight;
      if (t.config.quick_info_detached) {
        var i = j.left - j.dx * (v - j.width);
        if (i + v > window.innerWidth) {
          i = window.innerWidth - v;
        }
        i = Math.max(0, i);
        a.style.left = i + "px";
        a.style.top = j.top - (j.dy ? _ : -j.height) + "px";
      } else {
        a.style.top = this.xy.scale_height + this.xy.nav_height + 20 + "px";
        if (j.dx == 1) {
          a.style.right = "auto";
          a.style.left = -v + "px";
          setTimeout(function () {
            a.style.left = "-10px";
          }, 1);
        } else {
          a.style.left = "auto";
          a.style.right = -v + "px";
          setTimeout(function () {
            a.style.right = "-10px";
          }, 1);
        }
        a.className = a.className.replace(" dhx_qi_left", "").replace(" dhx_qi_right", "") + " dhx_qi_" + (j.dx == 1 ? "left" : "right");
      }
    };
    t.attachEvent("onTemplatesReady", function () {
      t.hideQuickInfo();
      if (this._quick_info_box) {
        var j = this._quick_info_box;
        if (j.parentNode) {
          j.parentNode.removeChild(j);
        }
        this._quick_info_box = null;
      }
    });
    t._quick_info_onscroll_handler = function (j) {
      t.hideQuickInfo();
    };
    t._init_quick_info = function () {
      if (!this._quick_info_box) {
        var j = t.xy;
        var a = this._quick_info_box = document.createElement("div");
        this._waiAria.quickInfoAttr(a);
        a.className = "dhx_cal_quick_info";
        if (t.$testmode) {
          a.className += " dhx_no_animate";
        }
        if (t.config.rtl) {
          a.className += " dhx_quick_info_rtl";
        }
        var v = this._waiAria.quickInfoHeaderAttrString();
        var _ = "<div class=\"dhx_cal_qi_title\" style=\"height:" + j.quick_info_title + "px\" " + v + "><div class=\"dhx_cal_qi_tcontent\"></div><div  class=\"dhx_cal_qi_tdate\"></div></div><div class=\"dhx_cal_qi_content\"></div>";
        _ += "<div class=\"dhx_cal_qi_controls\" style=\"height:" + j.quick_info_buttons + "px\">";
        for (var i = t.config.icons_select, o = 0; o < i.length; o++) {
          _ += "<div " + (v = this._waiAria.quickInfoButtonAttrString(this.locale.labels[i[o]])) + " class=\"dhx_qi_big_icon " + i[o] + "\" title=\"" + t.locale.labels[i[o]] + "\"><div class='dhx_menu_icon " + i[o] + "'></div><div>" + t.locale.labels[i[o]] + "</div></div>";
        }
        a.innerHTML = _ += "</div>";
        t.event(a, "click", function (c) {
          t._qi_button_click(c.target || c.srcElement);
        });
        if (t.config.quick_info_detached) {
          t._detachDomEvent(t._els.dhx_cal_data[0], "scroll", t._quick_info_onscroll_handler);
          t.event(t._els.dhx_cal_data[0], "scroll", t._quick_info_onscroll_handler);
        }
      }
      return this._quick_info_box;
    };
    t._qi_button_click = function (j) {
      if (j && j != t._quick_info_box) {
        var v = t._getClassName(j);
        if (v.indexOf("_icon") != -1) {
          var _ = t._quick_info_box_id;
          t._click.buttons[v.split(" ")[1].replace("icon_", "")](_);
        } else {
          t._qi_button_click(j.parentNode);
        }
      }
    };
    t._get_event_counter_part = function (j) {
      for (var a = t.getRenderedEvent(j), v = 0, _ = 0, i = a; i && i != t._obj;) {
        v += i.offsetLeft;
        _ += i.offsetTop - i.scrollTop;
        i = i.offsetParent;
      }
      if (i) {
        return {
          left: v,
          top: _,
          dx: v + a.offsetWidth / 2 > t._x / 2 ? 1 : 0,
          dy: _ + a.offsetHeight / 2 > t._y / 2 ? 1 : 0,
          width: a.offsetWidth,
          height: a.offsetHeight
        };
      } else {
        return 0;
      }
    };
    t._fill_quick_data = function (j) {
      var a = t.getEvent(j);
      var v = t._quick_info_box;
      t._quick_info_box_id = j;
      var _ = {
        content: t.templates.quick_info_title(a.start_date, a.end_date, a),
        date: t.templates.quick_info_date(a.start_date, a.end_date, a)
      };
      var i = v.firstChild.firstChild;
      i.innerHTML = _.content;
      i.nextSibling.innerHTML = _.date;
      t._waiAria.quickInfoHeader(v, [_.content, _.date].join(" "));
      v.firstChild.nextSibling.innerHTML = t.templates.quick_info_content(a.start_date, a.end_date, a);
    };
  },
  readonly: function (t) {
    t.attachEvent("onTemplatesReady", function () {
      var j;
      if (t.form_blocks.recurring) {
        j = t.form_blocks.recurring.set_value;
      }
      var a = t.config.buttons_left.slice();
      var v = t.config.buttons_right.slice();
      function _(h, D, V, T) {
        for (var W = D.getElementsByTagName(h), z = V.getElementsByTagName(h), Z = z.length - 1; Z >= 0; Z--) {
          V = z[Z];
          if (T) {
            var re = document.createElement("span");
            re.className = "dhx_text_disabled";
            re.innerHTML = T(W[Z]);
            V.parentNode.insertBefore(re, V);
            V.parentNode.removeChild(V);
          } else {
            V.disabled = true;
            if (D.checked) {
              V.checked = true;
            }
          }
        }
      }
      t.attachEvent("onBeforeLightbox", function (h) {
        if (this.config.readonly_form || this.getEvent(h).readonly) {
          this.config.readonly_active = true;
        } else {
          this.config.readonly_active = false;
          t.config.buttons_left = a.slice();
          t.config.buttons_right = v.slice();
          if (t.form_blocks.recurring) {
            t.form_blocks.recurring.set_value = j;
          }
        }
        var D = this.config.lightbox.sections;
        if (this.config.readonly_active) {
          for (var V = 0; V < D.length; V++) {
            if (D[V].type == "recurring" && this.config.readonly_active && t.form_blocks.recurring) {
              t.form_blocks.recurring.set_value = function (he, be, Ae) {
                var He = t.$domHelpers.closest(he, ".dhx_wrap_section");
                He.querySelector(".dhx_cal_lsection").display = "none";
                He.querySelector(".dhx_form_repeat").display = "none";
                He.style.display = "none";
                t.setLightboxSize();
              };
            }
          }
          var T = ["dhx_delete_btn", "dhx_save_btn"];
          var W = [t.config.buttons_left, t.config.buttons_right];
          for (V = 0; V < T.length; V++) {
            for (var z = T[V], Z = 0; Z < W.length; Z++) {
              for (var re = W[Z], oe = -1, _e = 0; _e < re.length; _e++) {
                if (re[_e] == z) {
                  oe = _e;
                  break;
                }
              }
              if (oe != -1) {
                re.splice(oe, 1);
              }
            }
          }
        }
        this.resetLightbox();
        return true;
      });
      var i = t._fill_lightbox;
      t._fill_lightbox = function () {
        var h = this.getLightbox();
        if (this.config.readonly_active) {
          h.style.visibility = "hidden";
          h.style.display = "block";
        }
        var D = i.apply(this, arguments);
        if (this.config.readonly_active) {
          h.style.visibility = "";
          h.style.display = "none";
        }
        if (this.config.readonly_active) {
          var V = this.getLightbox();
          var T = this._lightbox_r = V.cloneNode(true);
          T.id = t.uid();
          T.className += " dhx_cal_light_readonly";
          _("textarea", V, T, function (W) {
            return W.value;
          });
          _("input", V, T, false);
          _("select", V, T, function (W) {
            if (W.options.length) {
              return W.options[Math.max(W.selectedIndex || 0, 0)].text;
            } else {
              return "";
            }
          });
          V.parentNode.insertBefore(T, V);
          o.call(this, T);
          if (t._lightbox) {
            t._lightbox.parentNode.removeChild(t._lightbox);
          }
          this._lightbox = T;
          if (t.config.drag_lightbox) {
            t.event(T.firstChild, "mousedown", t._ready_to_dnd);
          }
          t._init_lightbox_events();
          this.setLightboxSize();
        }
        return D;
      };
      var o = t.showCover;
      t.showCover = function () {
        if (!this.config.readonly_active) {
          o.apply(this, arguments);
        }
      };
      var c = t.hide_lightbox;
      t.hide_lightbox = function () {
        if (this._lightbox_r) {
          this._lightbox_r.parentNode.removeChild(this._lightbox_r);
          this._lightbox_r = this._lightbox = null;
        }
        return c.apply(this, arguments);
      };
    });
  },
  recurring: function (t) {
    function j() {
      var _ = t.formSection("recurring");
      _ ||= a("recurring");
      if (!_) {
        throw new Error(["Can't locate the Recurring form section.", "Make sure that you have the recurring control on the lightbox configuration https://docs.dhtmlx.com/scheduler/recurring_events.html#recurringlightbox ", "and that the recurring control has name \"recurring\":", "", "scheduler.config.lightbox.sections = [", "\t{name:\"recurring\", ... }", "];"].join("\n"));
      }
      return _;
    }
    function a(_) {
      for (var i = 0; i < t.config.lightbox.sections.length; i++) {
        var o = t.config.lightbox.sections[i];
        if (o.type === _) {
          return t.formSection(o.name);
        }
      }
      return null;
    }
    function v(_) {
      return new Date(_.getFullYear(), _.getMonth(), _.getDate(), _.getHours(), _.getMinutes(), _.getSeconds(), 0);
    }
    var _;
    t.config.occurrence_timestamp_in_utc = false;
    t.config.recurring_workdays = [1, 2, 3, 4, 5];
    t.form_blocks.recurring = {
      _get_node: function (_) {
        if (typeof _ == "string") {
          _ = document.getElementById(_);
        }
        if (_.style.display == "none") {
          _.style.display = "";
        }
        return _;
      },
      _outer_html: function (_) {
        return _.outerHTML || (i = _, (c = document.createElement("div")).appendChild(i.cloneNode(true)), o = c.innerHTML, c = null, o);
        var i;
        var o;
        var c;
      },
      render: function (_) {
        if (_.form) {
          var i = t.form_blocks.recurring;
          var o = i._get_node(_.form);
          var c = i._outer_html(o);
          o.style.display = "none";
          return c;
        }
        var h = t.locale.labels;
        return "<div class=\"dhx_form_repeat\"> <form> <div class=\"dhx_repeat_left\"> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"repeat\" value=\"day\" />" + h.repeat_radio_day + "</label><br /> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"repeat\" value=\"week\"/>" + h.repeat_radio_week + "</label><br /> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"repeat\" value=\"month\" checked />" + h.repeat_radio_month + "</label><br /> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"repeat\" value=\"year\" />" + h.repeat_radio_year + "</label> </div> <div class=\"dhx_repeat_divider\"></div> <div class=\"dhx_repeat_center\"> <div style=\"display:none;\" id=\"dhx_repeat_day\"> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"day_type\" value=\"d\"/>" + h.repeat_radio_day_type + "</label><label><input class=\"dhx_repeat_text\" type=\"text\" name=\"day_count\" value=\"1\" />" + h.repeat_text_day_count + "</label><br /> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"day_type\" checked value=\"w\"/>" + h.repeat_radio_day_type2 + "</label> </div> <div style=\"display:none;\" id=\"dhx_repeat_week\"><label>" + h.repeat_week + "<input class=\"dhx_repeat_text\" type=\"text\" name=\"week_count\" value=\"1\" /></label><span>" + h.repeat_text_week_count + "</span><br /> <table class=\"dhx_repeat_days\"> <tr> <td> <label><input class=\"dhx_repeat_checkbox\" type=\"checkbox\" name=\"week_day\" value=\"1\" />" + h.day_for_recurring[1] + "</label><br /> <label><input class=\"dhx_repeat_checkbox\" type=\"checkbox\" name=\"week_day\" value=\"4\" />" + h.day_for_recurring[4] + "</label> </td> <td> <label><input class=\"dhx_repeat_checkbox\" type=\"checkbox\" name=\"week_day\" value=\"2\" />" + h.day_for_recurring[2] + "</label><br /> <label><input class=\"dhx_repeat_checkbox\" type=\"checkbox\" name=\"week_day\" value=\"5\" />" + h.day_for_recurring[5] + "</label> </td> <td> <label><input class=\"dhx_repeat_checkbox\" type=\"checkbox\" name=\"week_day\" value=\"3\" />" + h.day_for_recurring[3] + "</label><br /> <label><input class=\"dhx_repeat_checkbox\" type=\"checkbox\" name=\"week_day\" value=\"6\" />" + h.day_for_recurring[6] + "</label> </td> <td> <label><input class=\"dhx_repeat_checkbox\" type=\"checkbox\" name=\"week_day\" value=\"0\" />" + h.day_for_recurring[0] + "</label><br /><br /> </td> </tr> </table> </div> <div id=\"dhx_repeat_month\"> <label class = \"dhx_repeat_month_label\"><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"month_type\" value=\"d\"/>" + h.repeat_radio_month_type + "</label><label><input class=\"dhx_repeat_text\" type=\"text\" name=\"month_day\" value=\"1\" />" + h.repeat_text_month_day + "</label><label><input class=\"dhx_repeat_text\" type=\"text\" name=\"month_count\" value=\"1\" />" + h.repeat_text_month_count + "</label><br /> <label class = \"dhx_repeat_month_label\"><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"month_type\" checked value=\"w\"/>" + h.repeat_radio_month_start + "</label><input class=\"dhx_repeat_text\" type=\"text\" name=\"month_week2\" value=\"1\" /><label><select name=\"month_day2\">\t<option value=\"1\" selected >" + t.locale.date.day_full[1] + "<option value=\"2\">" + t.locale.date.day_full[2] + "<option value=\"3\">" + t.locale.date.day_full[3] + "<option value=\"4\">" + t.locale.date.day_full[4] + "<option value=\"5\">" + t.locale.date.day_full[5] + "<option value=\"6\">" + t.locale.date.day_full[6] + "<option value=\"0\">" + t.locale.date.day_full[0] + "</select>" + h.repeat_text_month_count2_before + "</label><label><input class=\"dhx_repeat_text\" type=\"text\" name=\"month_count2\" value=\"1\" />" + h.repeat_text_month_count2_after + "</label><br /> </div> <div style=\"display:none;\" id=\"dhx_repeat_year\"> <label class = \"dhx_repeat_year_label\"><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"year_type\" value=\"d\"/>" + h.repeat_radio_day_type + "</label><label><input class=\"dhx_repeat_text\" type=\"text\" name=\"year_day\" value=\"1\" />" + h.repeat_text_year_day + "</label><label><select name=\"year_month\"><option value=\"0\" selected >" + h.month_for_recurring[0] + "<option value=\"1\">" + h.month_for_recurring[1] + "<option value=\"2\">" + h.month_for_recurring[2] + "<option value=\"3\">" + h.month_for_recurring[3] + "<option value=\"4\">" + h.month_for_recurring[4] + "<option value=\"5\">" + h.month_for_recurring[5] + "<option value=\"6\">" + h.month_for_recurring[6] + "<option value=\"7\">" + h.month_for_recurring[7] + "<option value=\"8\">" + h.month_for_recurring[8] + "<option value=\"9\">" + h.month_for_recurring[9] + "<option value=\"10\">" + h.month_for_recurring[10] + "<option value=\"11\">" + h.month_for_recurring[11] + "</select>" + h.select_year_month + "</label><br /> <label class = \"dhx_repeat_year_label\"><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"year_type\" checked value=\"w\"/>" + h.repeat_year_label + "</label><input class=\"dhx_repeat_text\" type=\"text\" name=\"year_week2\" value=\"1\" /><select name=\"year_day2\"><option value=\"1\" selected >" + t.locale.date.day_full[1] + "<option value=\"2\">" + t.locale.date.day_full[2] + "<option value=\"3\">" + t.locale.date.day_full[3] + "<option value=\"4\">" + t.locale.date.day_full[4] + "<option value=\"5\">" + t.locale.date.day_full[5] + "<option value=\"6\">" + t.locale.date.day_full[6] + "<option value=\"7\">" + t.locale.date.day_full[0] + "</select>" + h.select_year_day2 + "<select name=\"year_month2\"><option value=\"0\" selected >" + h.month_for_recurring[0] + "<option value=\"1\">" + h.month_for_recurring[1] + "<option value=\"2\">" + h.month_for_recurring[2] + "<option value=\"3\">" + h.month_for_recurring[3] + "<option value=\"4\">" + h.month_for_recurring[4] + "<option value=\"5\">" + h.month_for_recurring[5] + "<option value=\"6\">" + h.month_for_recurring[6] + "<option value=\"7\">" + h.month_for_recurring[7] + "<option value=\"8\">" + h.month_for_recurring[8] + "<option value=\"9\">" + h.month_for_recurring[9] + "<option value=\"10\">" + h.month_for_recurring[10] + "<option value=\"11\">" + h.month_for_recurring[11] + "</select><br /> </div> </div> <div class=\"dhx_repeat_divider\"></div> <div class=\"dhx_repeat_right\"> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"end\" checked/>" + h.repeat_radio_end + "</label><br /> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"end\" />" + h.repeat_radio_end2 + "</label><input class=\"dhx_repeat_text\" type=\"text\" name=\"occurences_count\" value=\"1\" />" + h.repeat_text_occurences_count + "<br /> <label><input class=\"dhx_repeat_radio\" type=\"radio\" name=\"end\" />" + h.repeat_radio_end3 + "</label><input class=\"dhx_repeat_date\" type=\"text\" name=\"date_of_end\" value=\"" + t.config.repeat_date_of_end + "\" /><br /> </div> </form> </div> <div style=\"clear:both\"> </div>";
      },
      _ds: {},
      _get_form_node: function (_, i, o) {
        var c = _[i];
        if (!c) {
          return null;
        }
        if (c.nodeName) {
          return c;
        }
        if (c.length) {
          for (var h = 0; h < c.length; h++) {
            if (c[h].value == o) {
              return c[h];
            }
          }
        }
      },
      _get_node_value: function (_, i, o) {
        var c = _[i];
        if (!c) {
          return "";
        }
        if (c.length) {
          if (o) {
            for (var h = [], D = 0; D < c.length; D++) {
              if (c[D].checked) {
                h.push(c[D].value);
              }
            }
            return h;
          }
          for (D = 0; D < c.length; D++) {
            if (c[D].checked) {
              return c[D].value;
            }
          }
        }
        if (c.value) {
          if (o) {
            return [c.value];
          } else {
            return c.value;
          }
        } else {
          return undefined;
        }
      },
      _get_node_numeric_value: function (_, i) {
        return t.form_blocks.recurring._get_node_value(_, i) * 1 || 0;
      },
      _set_node_value: function (_, i, o) {
        var c = _[i];
        if (c) {
          if (c.name == i) {
            c.value = o;
          } else if (c.length) {
            for (var h = St(o) == "object", D = 0; D < c.length; D++) {
              if (h || c[D].value == o) {
                c[D].checked = h ? !!o[c[D].value] : !!o;
              }
            }
          }
        }
      },
      _init_set_value: function (_, i, o) {
        var c = t.form_blocks.recurring;
        var h = c._get_node_value;
        var D = c._set_node_value;
        t.form_blocks.recurring._ds = {
          start: o.start_date,
          end: o._end_date
        };
        var V = t.date.str_to_date(t.config.repeat_date, false, true);
        var W = t.date.date_to_str(t.config.repeat_date);
        var z = _.getElementsByTagName("FORM")[0];
        var Z = {};
        function re(Se) {
          for (var Fe = 0; Fe < Se.length; Fe++) {
            var Oe = Se[Fe];
            if (Oe.name) {
              if (Z[Oe.name]) {
                if (Z[Oe.name].nodeType) {
                  Z[Oe.name] = [Z[Oe.name], Oe];
                } else {
                  Z[Oe.name].push(Oe);
                }
              } else {
                Z[Oe.name] = Oe;
              }
            }
          }
        }
        re(z.getElementsByTagName("INPUT"));
        re(z.getElementsByTagName("SELECT"));
        if (!t.config.repeat_date_of_end) {
          var oe = t.date.date_to_str(t.config.repeat_date);
          t.config.repeat_date_of_end = oe(t.date.add(t._currentDate(), 30, "day"));
        }
        D(Z, "date_of_end", t.config.repeat_date_of_end);
        function _e(Se) {
          return document.getElementById(Se) || {
            style: {}
          };
        }
        function he() {
          _e("dhx_repeat_day").style.display = "none";
          _e("dhx_repeat_week").style.display = "none";
          _e("dhx_repeat_month").style.display = "none";
          _e("dhx_repeat_year").style.display = "none";
          _e("dhx_repeat_" + this.value).style.display = "block";
          t.setLightboxSize();
        }
        function be(Se, Fe) {
          var Oe = Se.end;
          if (Oe.length) {
            if (Oe[0].value && Oe[0].value != "on") {
              for (var at = 0; at < Oe.length; at++) {
                if (Oe[at].value == Fe) {
                  Oe[at].checked = true;
                }
              }
            } else {
              var ht = 0;
              switch (Fe) {
                case "no":
                  ht = 0;
                  break;
                case "date_of_end":
                  ht = 2;
                  break;
                default:
                  ht = 1;
              }
              Oe[ht].checked = true;
            }
          } else {
            Oe.value = Fe;
          }
        }
        t.form_blocks.recurring._get_repeat_code = function (Se) {
          var Fe = [h(Z, "repeat")];
          for (Ae[Fe[0]](Fe, Se); Fe.length < 5;) {
            Fe.push("");
          }
          var Oe = "";
          var at = function (ht) {
            var lt = ht.end;
            if (lt.length) {
              for (var mt = 0; mt < lt.length; mt++) {
                if (lt[mt].checked) {
                  if (lt[mt].value && lt[mt].value != "on") {
                    return lt[mt].value;
                  } else if (mt) {
                    if (mt == 2) {
                      return "date_of_end";
                    } else {
                      return "occurences_count";
                    }
                  } else {
                    return "no";
                  }
                }
              }
            } else if (lt.value) {
              return lt.value;
            }
            return "no";
          }(Z);
          if (at == "no") {
            Se.end = new Date(9999, 1, 1);
            Oe = "no";
          } else if (at == "date_of_end") {
            Se.end = function (Se) {
              var Fe = V(Se);
              if (t.config.include_end_by) {
                Fe = t.date.add(Fe, 1, "day");
              }
              return Fe;
            }(h(Z, "date_of_end"));
          } else {
            t.transpose_type(Fe.join("_"));
            Oe = Math.max(1, h(Z, "occurences_count"));
            Se.end = t.date["add_" + Fe.join("_")](new Date(Se.start), Oe + 0, {
              start_date: Se.start
            }) || Se.start;
          }
          return Fe.join("_") + "#" + Oe;
        };
        var Ae = {
          month: function (Se, Fe) {
            var Oe = t.form_blocks.recurring._get_node_value;
            var at = t.form_blocks.recurring._get_node_numeric_value;
            if (Oe(Z, "month_type") == "d") {
              Se.push(Math.max(1, at(Z, "month_count")));
              Fe.start.setDate(Oe(Z, "month_day"));
            } else {
              Se.push(Math.max(1, at(Z, "month_count2")));
              Se.push(Oe(Z, "month_day2"));
              Se.push(Math.max(1, at(Z, "month_week2")));
              if (!t.config.repeat_precise) {
                Fe.start.setDate(1);
              }
            }
            Fe._start = true;
          },
          week: function (Se, Fe) {
            var Oe = t.form_blocks.recurring._get_node_value;
            Se.push(Math.max(1, (0, t.form_blocks.recurring._get_node_numeric_value)(Z, "week_count")));
            Se.push("");
            Se.push("");
            for (var ht = [], lt = Oe(Z, "week_day", true), mt = Fe.start.getDay(), ft = false, yt = 0; yt < lt.length; yt++) {
              ht.push(lt[yt]);
              ft = ft || lt[yt] == mt;
            }
            if (!ht.length) {
              ht.push(mt);
              ft = true;
            }
            ht.sort();
            if (t.config.repeat_precise) {
              if (!ft) {
                t.transpose_day_week(Fe.start, ht, 1, 7);
                Fe._start = true;
              }
            } else {
              Fe.start = t.date.week_start(Fe.start);
              Fe._start = true;
            }
            Se.push(ht.join(","));
          },
          day: function (Se) {
            var Oe = t.form_blocks.recurring._get_node_numeric_value;
            if ((0, t.form_blocks.recurring._get_node_value)(Z, "day_type") == "d") {
              Se.push(Math.max(1, Oe(Z, "day_count")));
            } else {
              Se.push("week");
              Se.push(1);
              Se.push("");
              Se.push("");
              Se.push(t.config.recurring_workdays.join(","));
              Se.splice(0, 1);
            }
          },
          year: function (Se, Fe) {
            var Oe = t.form_blocks.recurring._get_node_value;
            if (Oe(Z, "year_type") == "d") {
              Se.push("1");
              Fe.start.setMonth(0);
              Fe.start.setDate(Oe(Z, "year_day"));
              Fe.start.setMonth(Oe(Z, "year_month"));
            } else {
              Se.push("1");
              Se.push(Oe(Z, "year_day2"));
              Se.push(Oe(Z, "year_week2"));
              Fe.start.setDate(1);
              Fe.start.setMonth(Oe(Z, "year_month2"));
            }
            Fe._start = true;
          }
        };
        var He = {
          week: function (Se, Fe) {
            var Oe = t.form_blocks.recurring._set_node_value;
            Oe(Z, "week_count", Se[1]);
            for (var at = Se[4].split(","), ht = {}, lt = 0; lt < at.length; lt++) {
              ht[at[lt]] = true;
            }
            Oe(Z, "week_day", ht);
          },
          month: function (Se, Fe) {
            var Oe = t.form_blocks.recurring._set_node_value;
            if (Se[2] === "") {
              Oe(Z, "month_type", "d");
              Oe(Z, "month_count", Se[1]);
              Oe(Z, "month_day", Fe.start.getDate());
            } else {
              Oe(Z, "month_type", "w");
              Oe(Z, "month_count2", Se[1]);
              Oe(Z, "month_week2", Se[3]);
              Oe(Z, "month_day2", Se[2]);
            }
          },
          day: function (Se, Fe) {
            var Oe = t.form_blocks.recurring._set_node_value;
            Oe(Z, "day_type", "d");
            Oe(Z, "day_count", Se[1]);
          },
          year: function (Se, Fe) {
            var Oe = t.form_blocks.recurring._set_node_value;
            if (Se[2] === "") {
              Oe(Z, "year_type", "d");
              Oe(Z, "year_day", Fe.start.getDate());
              Oe(Z, "year_month", Fe.start.getMonth());
            } else {
              Oe(Z, "year_type", "w");
              Oe(Z, "year_week2", Se[3]);
              Oe(Z, "year_day2", Se[2]);
              Oe(Z, "year_month2", Fe.start.getMonth());
            }
          }
        };
        t.form_blocks.recurring._set_repeat_code = function (Se, Fe) {
          var Oe = t.form_blocks.recurring._set_node_value;
          var at = Se.split("#");
          Se = at[0].split("_");
          He[Se[0]](Se, Fe);
          switch (at[1]) {
            case "no":
              be(Z, "no");
              break;
            case "":
              be(Z, "date_of_end");
              var ht = Fe.end;
              if (t.config.include_end_by) {
                ht = t.date.add(ht, -1, "day");
              }
              Oe(Z, "date_of_end", W(ht));
              break;
            default:
              be(Z, "occurences_count");
              Oe(Z, "occurences_count", at[1]);
          }
          Oe(Z, "repeat", Se[0]);
          var lt = t.form_blocks.recurring._get_form_node(Z, "repeat", Se[0]);
          if (lt.nodeName == "SELECT") {
            lt.dispatchEvent(new Event("change"));
            lt.dispatchEvent(new MouseEvent("click"));
          } else {
            lt.dispatchEvent(new MouseEvent("click"));
          }
        };
        for (var Ne = 0; Ne < z.elements.length; Ne++) {
          var Ve = z.elements[Ne];
          if (Ve.name === "repeat") {
            if (Ve.nodeName != "SELECT" || Ve.$_eventAttached) {
              if (!Ve.$_eventAttached) {
                Ve.$_eventAttached = true;
                Ve.addEventListener("click", he);
              }
            } else {
              Ve.$_eventAttached = true;
              Ve.addEventListener("change", he);
            }
          }
        }
        t._lightbox._rec_init_done = true;
      },
      set_value: function (_, i, o) {
        var c = t.form_blocks.recurring;
        if (!t._lightbox._rec_init_done) {
          c._init_set_value(_, i, o);
        }
        _.open = !o.rec_type;
        _.blocked = this._is_modified_occurence(o);
        var h = c._ds;
        h.start = o.start_date;
        h.end = o._end_date;
        c._toggle_block();
        if (i) {
          c._set_repeat_code(i, h);
        }
      },
      get_value: function (_, i) {
        if (_.open) {
          var o = t.form_blocks.recurring._ds;
          var c = {};
          (function () {
            var h = t.formSection("time");
            h ||= a("time");
            h ||= a("calendar_time");
            if (!h) {
              throw new Error(["Can't calculate the recurring rule, the Recurring form block can't find the Time control. Make sure you have the time control in 'scheduler.config.lightbox.sections' config.", "You can use either the default time control https://docs.dhtmlx.com/scheduler/time.html, or the datepicker https://docs.dhtmlx.com/scheduler/minicalendar.html, or a custom control. ", "In the latter case, make sure the control is named \"time\":", "", "scheduler.config.lightbox.sections = [", "{name:\"time\", height:72, type:\"YOU CONTROL\", map_to:\"auto\" }];"].join("\n"));
            }
            return h;
          })().getValue(c);
          o.start = c.start_date;
          i.rec_type = t.form_blocks.recurring._get_repeat_code(o);
          if (o._start) {
            i.start_date = new Date(o.start);
            i._start_date = new Date(o.start);
            o._start = false;
          } else {
            i._start_date = null;
          }
          i._end_date = o.end;
          i.rec_pattern = i.rec_type.split("#")[0];
        } else {
          i.rec_type = i.rec_pattern = "";
          i._end_date = i.end_date;
        }
        return i.rec_type;
      },
      _get_button: function () {
        return j().header.firstChild.firstChild;
      },
      _get_form: function () {
        return j().node;
      },
      open: function () {
        var _ = t.form_blocks.recurring;
        if (!_._get_form().open) {
          _._toggle_block();
        }
      },
      close: function () {
        var _ = t.form_blocks.recurring;
        if (_._get_form().open) {
          _._toggle_block();
        }
      },
      _toggle_block: function () {
        var _ = t.form_blocks.recurring;
        var i = _._get_form();
        var o = _._get_button();
        if (i.open || i.blocked) {
          i.style.height = "0px";
          if (o) {
            o.style.backgroundPosition = "-5px 20px";
            o.nextSibling.innerHTML = t.locale.labels.button_recurring;
          }
        } else {
          i.style.height = "auto";
          if (o) {
            o.style.backgroundPosition = "-5px 0px";
            o.nextSibling.innerHTML = t.locale.labels.button_recurring_open;
          }
        }
        i.open = !i.open;
        t.setLightboxSize();
      },
      focus: function (_) {},
      button_click: function (_, i, o) {
        if (!t.form_blocks.recurring._get_form().blocked) {
          t.form_blocks.recurring._toggle_block();
        }
      }
    };
    t._rec_markers = {};
    t._rec_markers_pull = {};
    t._add_rec_marker = function (_, i) {
      _._pid_time = i;
      this._rec_markers[_.id] = _;
      this._rec_markers_pull[_.event_pid] ||= {};
      this._rec_markers_pull[_.event_pid][i] = _;
    };
    t._get_rec_marker = function (_, i) {
      var o = this._rec_markers_pull[i];
      if (o) {
        return o[_];
      } else {
        return null;
      }
    };
    t._get_rec_markers = function (_) {
      return this._rec_markers_pull[_] || [];
    };
    t._rec_temp = [];
    _ = t.addEvent;
    t.addEvent = function (i, o, c, h, D) {
      var V = _.apply(this, arguments);
      if (V && t.getEvent(V)) {
        var T = t.getEvent(V);
        T.start_date &&= v(T.start_date);
        T.end_date &&= v(T.end_date);
        if (this._is_modified_occurence(T)) {
          t._add_rec_marker(T, T.event_length * 1000);
        }
        if (T.rec_type) {
          T.rec_pattern = T.rec_type.split("#")[0];
        }
      }
      return V;
    };
    t.attachEvent("onEventIdChange", function (_, i) {
      if (!this._ignore_call) {
        this._ignore_call = true;
        if (t._rec_markers[_]) {
          t._rec_markers[i] = t._rec_markers[_];
          delete t._rec_markers[_];
        }
        if (t._rec_markers_pull[_]) {
          t._rec_markers_pull[i] = t._rec_markers_pull[_];
          delete t._rec_markers_pull[_];
        }
        for (var o = 0; o < this._rec_temp.length; o++) {
          if ((c = this._rec_temp[o]).event_pid == _) {
            c.event_pid = i;
            this.changeEventId(c.id, i + "#" + c.id.split("#")[1]);
          }
        }
        for (var o in this._rec_markers) {
          var c;
          if ((c = this._rec_markers[o]).event_pid == _) {
            c.event_pid = i;
            c._pid_changed = true;
          }
        }
        var h = t._rec_markers[i];
        if (h && h._pid_changed) {
          delete h._pid_changed;
          setTimeout(function () {
            t.callEvent("onEventChanged", [i, t.getEvent(i)]);
          }, 1);
        }
        delete this._ignore_call;
      }
    });
    t.attachEvent("onConfirmedBeforeEventDelete", function (_) {
      var i = this.getEvent(_);
      if (this._is_virtual_event(_) || this._is_modified_occurence(i) && i.rec_type && i.rec_type != "none") {
        _ = _.split("#");
        var o = this.uid();
        var c = _[1] ? _[1] : Math.round(i._pid_time / 1000);
        var h = this._copy_event(i);
        h.id = o;
        h.event_pid = i.event_pid || _[0];
        var D = c;
        h.event_length = D;
        h.rec_type = h.rec_pattern = "none";
        this.addEvent(h);
        this._add_rec_marker(h, D * 1000);
      } else {
        if (i.rec_type && this._lightbox_id) {
          this._roll_back_dates(i);
        }
        var V = this._get_rec_markers(_);
        for (var T in V) {
          if (V.hasOwnProperty(T) && this.getEvent(_ = V[T].id)) {
            this.deleteEvent(_, true);
          }
        }
      }
      return true;
    });
    t.attachEvent("onEventDeleted", function (_, i) {
      if (!this._is_virtual_event(_) && this._is_modified_occurence(i)) {
        if (!t._events[_]) {
          i.rec_type = i.rec_pattern = "none";
          this.setEvent(_, i);
        }
      }
    });
    t.attachEvent("onEventChanged", function (_, i) {
      if (this._loading) {
        return true;
      }
      var o = this.getEvent(_);
      if (this._is_virtual_event(_)) {
        _ = _.split("#");
        var c = this.uid();
        this._not_render = true;
        var h = this._copy_event(i);
        h.id = c;
        h.event_pid = _[0];
        var D = _[1];
        h.event_length = D;
        h.rec_type = h.rec_pattern = "";
        this._add_rec_marker(h, D * 1000);
        this.addEvent(h);
        this._not_render = false;
      } else {
        o.start_date &&= v(o.start_date);
        o.end_date &&= v(o.end_date);
        if (o.rec_type && this._lightbox_id) {
          this._roll_back_dates(o);
        }
        var V = this._get_rec_markers(_);
        for (var T in V) {
          if (V.hasOwnProperty(T)) {
            delete this._rec_markers[V[T].id];
            this.deleteEvent(V[T].id, true);
          }
        }
        delete this._rec_markers_pull[_];
        for (var W = false, z = 0; z < this._rendered.length; z++) {
          if (this._rendered[z].getAttribute(this.config.event_attribute) == _) {
            W = true;
          }
        }
        if (!W) {
          this._select_id = null;
        }
      }
      return true;
    });
    t.attachEvent("onEventAdded", function (_) {
      if (!this._loading) {
        var i = this.getEvent(_);
        if (i.rec_type && !i.event_length) {
          this._roll_back_dates(i);
        }
      }
      return true;
    });
    t.attachEvent("onEventSave", function (_, i, o) {
      if (!this.getEvent(_).rec_type && !!i.rec_type && !this._is_virtual_event(_)) {
        this._select_id = null;
      }
      return true;
    });
    t.attachEvent("onEventCreated", function (_) {
      var i = this.getEvent(_);
      i.rec_type ||= i.rec_pattern = i.event_length = i.event_pid = "";
      return true;
    });
    t.attachEvent("onEventCancel", function (_) {
      var i = this.getEvent(_);
      if (i.rec_type) {
        this._roll_back_dates(i);
        this.render_view_data();
      }
    });
    t._roll_back_dates = function (_) {
      _.start_date &&= v(_.start_date);
      _.end_date &&= v(_.end_date);
      _.event_length = Math.round((_.end_date.valueOf() - _.start_date.valueOf()) / 1000);
      _.end_date = _._end_date;
      if (_._start_date) {
        _.start_date.setMonth(0);
        _.start_date.setDate(_._start_date.getDate());
        _.start_date.setMonth(_._start_date.getMonth());
        _.start_date.setFullYear(_._start_date.getFullYear());
      }
    };
    t._is_virtual_event = function (_) {
      return _.toString().indexOf("#") != -1;
    };
    t._is_modified_occurence = function (_) {
      return _.event_pid && _.event_pid != "0";
    };
    t._validId = function (_) {
      return !this._is_virtual_event(_);
    };
    t.showLightbox_rec = t.showLightbox;
    t.showLightbox = function (_) {
      var i = this.locale;
      var o = t.config.lightbox_recurring;
      var c = this.getEvent(_);
      var h = c.event_pid;
      var D = this._is_virtual_event(_);
      if (D) {
        h = _.split("#")[0];
      }
      function V(W) {
        var z = t.getEvent(W);
        z._end_date = z.end_date;
        z.end_date = new Date(z.start_date.valueOf() + z.event_length * 1000);
        return t.showLightbox_rec(W);
      }
      if ((h || h * 1 == 0) && c.rec_type) {
        return V(_);
      }
      if (!h || h === "0" || !i.labels.confirm_recurring || o == "instance" || o == "series" && !D) {
        return this.showLightbox_rec(_);
      }
      if (o == "ask") {
        var T = this;
        t.modalbox({
          text: i.labels.confirm_recurring,
          title: i.labels.title_confirm_recurring,
          width: "500px",
          position: "middle",
          buttons: [i.labels.button_edit_series, i.labels.button_edit_occurrence, i.labels.icon_cancel],
          callback: function (W) {
            switch (+W) {
              case 0:
                return V(h);
              case 1:
                return T.showLightbox_rec(_);
              case 2:
                return;
            }
          }
        });
      } else {
        V(h);
      }
    };
    t.get_visible_events_rec = t.get_visible_events;
    t.get_visible_events = function (_) {
      for (var i = 0; i < this._rec_temp.length; i++) {
        delete this._events[this._rec_temp[i].id];
      }
      this._rec_temp = [];
      var o = this.get_visible_events_rec(_);
      var c = [];
      for (i = 0; i < o.length; i++) {
        if (o[i].rec_type) {
          if (o[i].rec_pattern != "none") {
            this.repeat_date(o[i], c);
          }
        } else {
          c.push(o[i]);
        }
      }
      return c;
    };
    (function () {
      var _ = t.isOneDayEvent;
      t.isOneDayEvent = function (o) {
        return !!o.rec_type || _.call(this, o);
      };
      var i = t.updateEvent;
      t.updateEvent = function (o) {
        var c = t.getEvent(o);
        if (c && c.rec_type) {
          c.rec_pattern = (c.rec_type || "").split("#")[0];
        }
        if (c && c.rec_type && !this._is_virtual_event(o)) {
          t.update_view();
        } else {
          i.call(this, o);
        }
      };
    })();
    t.transponse_size = {
      day: 1,
      week: 7,
      month: 1,
      year: 12
    };
    t.date.day_week = function (_, i, o) {
      _.setDate(1);
      var c = t.date.month_start(new Date(_));
      var h = i * 1 + (o = (o - 1) * 7) - _.getDay() + 1;
      _.setDate(h <= o ? h + 7 : h);
      var D = t.date.month_start(new Date(_));
      return c.valueOf() === D.valueOf();
    };
    t.transpose_day_week = function (_, i, o, c, h) {
      for (var D = (_.getDay() || (t.config.start_on_monday ? 7 : 0)) - o, V = 0; V < i.length; V++) {
        if (i[V] > D) {
          return _.setDate(_.getDate() + i[V] * 1 - D - (c ? o : h));
        }
      }
      this.transpose_day_week(_, i, o + c, null, o);
    };
    t.transpose_type = function (_) {
      var i = "transpose_" + _;
      if (!this.date[i]) {
        var o = _.split("_");
        var c = "add_" + _;
        var h = this.transponse_size[o[0]] * o[1];
        if (o[0] == "day" || o[0] == "week") {
          var D = null;
          if (o[4] && (D = o[4].split(","), t.config.start_on_monday)) {
            for (var V = 0; V < D.length; V++) {
              D[V] = D[V] * 1 || 7;
            }
            D.sort();
          }
          this.date[i] = function (T, W) {
            var z = Math.floor((W.valueOf() - T.valueOf()) / (h * 86400000));
            if (z > 0) {
              T.setDate(T.getDate() + z * h);
            }
            if (D) {
              t.transpose_day_week(T, D, 1, h);
            }
            return T;
          };
          this.date[c] = function (T, W) {
            var z = new Date(T.valueOf());
            if (D) {
              for (var Z = 0; Z < W; Z++) {
                t.transpose_day_week(z, D, 0, h);
              }
            } else {
              z.setDate(z.getDate() + W * h);
            }
            return z;
          };
        } else if (o[0] == "month" || o[0] == "year") {
          this.date[i] = function (T, W, z) {
            var Z = Math.ceil((W.getFullYear() * 12 + W.getMonth() * 1 + 1 - (T.getFullYear() * 12 + T.getMonth() * 1 + 1)) / h - 1);
            if (Z >= 0) {
              T.setDate(1);
              T.setMonth(T.getMonth() + Z * h);
            }
            return t.date[c](T, 0, z);
          };
          this.date[c] = function (T, W, z, Z) {
            if (Z) {
              Z++;
            } else {
              Z = 1;
            }
            if (Z > 12) {
              return null;
            }
            var re = new Date(T.valueOf());
            re.setDate(1);
            re.setMonth(re.getMonth() + W * h);
            var oe = re.getMonth();
            var _e = re.getFullYear();
            re.setDate(z.start_date.getDate());
            if (o[3]) {
              t.date.day_week(re, o[2], o[3]);
            }
            var he = t.config.recurring_overflow_instances;
            if (re.getMonth() != oe && he != "none") {
              re = he === "lastDay" ? new Date(_e, oe + 1, 0, re.getHours(), re.getMinutes(), re.getSeconds(), re.getMilliseconds()) : t.date[c](new Date(_e, oe + 1, 0), W || 1, z, Z);
            }
            return re;
          };
        }
      }
    };
    t.repeat_date = function (_, i, o, c, h, D) {
      c = c || this._min_date;
      h = h || this._max_date;
      var V = D || -1;
      var T = new Date(_.start_date.valueOf());
      var W = T.getHours();
      var z = 0;
      if (!_.rec_pattern && _.rec_type) {
        _.rec_pattern = _.rec_type.split("#")[0];
      }
      this.transpose_type(_.rec_pattern);
      T = t.date["transpose_" + _.rec_pattern](T, c, _);
      for (; T && (T < _.start_date || t._fix_daylight_saving_date(T, c, _, T, new Date(T.valueOf() + _.event_length * 1000)).valueOf() <= c.valueOf() || T.valueOf() + _.event_length * 1000 <= c.valueOf());) {
        T = this.date["add_" + _.rec_pattern](T, 1, _);
      }
      for (; T && T < h && T < _.end_date && (V < 0 || z < V);) {
        T.setHours(W);
        var Z = t.config.occurrence_timestamp_in_utc ? Date.UTC(T.getFullYear(), T.getMonth(), T.getDate(), T.getHours(), T.getMinutes(), T.getSeconds()) : T.valueOf();
        var re = this._get_rec_marker(Z, _.id);
        if (re) {
          if (o) {
            if (re.rec_type != "none") {
              z++;
            }
            i.push(re);
          }
        } else {
          var oe = new Date(T.valueOf() + _.event_length * 1000);
          var _e = this._copy_event(_);
          _e.text = _.text;
          _e.start_date = T;
          _e.event_pid = _.id;
          _e.id = _.id + "#" + Math.round(Z / 1000);
          _e.end_date = oe;
          _e.end_date = t._fix_daylight_saving_date(_e.start_date, _e.end_date, _, T, _e.end_date);
          _e._timed = this.isOneDayEvent(_e);
          if (!_e._timed && !this._table_view && !this.config.multi_day) {
            return;
          }
          i.push(_e);
          if (!o) {
            this._events[_e.id] = _e;
            this._rec_temp.push(_e);
          }
          z++;
        }
        T = this.date["add_" + _.rec_pattern](T, 1, _);
      }
    };
    t._fix_daylight_saving_date = function (_, i, o, c, h) {
      var D = _.getTimezoneOffset() - i.getTimezoneOffset();
      if (D) {
        if (D > 0) {
          return new Date(c.valueOf() + o.event_length * 1000 - D * 60 * 1000);
        } else {
          return new Date(i.valueOf() - D * 60 * 1000);
        }
      } else {
        return new Date(h.valueOf());
      }
    };
    t.getRecDates = function (_, i) {
      var o = St(_) == "object" ? _ : t.getEvent(_);
      var c = [];
      if (!o.rec_type) {
        return [{
          start_date: o.start_date,
          end_date: o.end_date
        }];
      }
      if (o.rec_type == "none") {
        return [];
      }
      t.repeat_date(o, c, true, o.start_date, o.end_date, i = i || 100);
      for (var h = [], D = 0; D < c.length; D++) {
        if (c[D].rec_type != "none") {
          h.push({
            start_date: c[D].start_date,
            end_date: c[D].end_date
          });
        }
      }
      return h;
    };
    t.getEvents = function (_, i) {
      var o = [];
      for (var c in this._events) {
        var h = this._events[c];
        if (h && h.start_date < i && h.end_date > _) {
          if (h.rec_pattern) {
            if (h.rec_pattern == "none") {
              continue;
            }
            var D = [];
            this.repeat_date(h, D, true, _, i);
            for (var V = 0; V < D.length; V++) {
              if (!D[V].rec_pattern && D[V].start_date < i && D[V].end_date > _ && !this._rec_markers[D[V].id]) {
                o.push(D[V]);
              }
            }
          } else if (!this._is_virtual_event(h.id)) {
            o.push(h);
          }
        }
      }
      return o;
    };
    t.config.repeat_date = "%m.%d.%Y";
    t.config.lightbox.sections = [{
      name: "description",
      map_to: "text",
      type: "textarea",
      focus: true
    }, {
      name: "recurring",
      type: "recurring",
      map_to: "rec_type",
      button: "recurring"
    }, {
      name: "time",
      height: 72,
      type: "time",
      map_to: "auto"
    }];
    t._copy_dummy = function (_) {
      var i = new Date(this.start_date);
      var o = new Date(this.end_date);
      this.start_date = i;
      this.end_date = o;
      this.event_length = this.event_pid = this.rec_pattern = this.rec_type = null;
    };
    t.config.include_end_by = false;
    t.config.lightbox_recurring = "ask";
    t.attachEvent("onClearAll", function () {
      t._rec_markers = {};
      t._rec_markers_pull = {};
      t._rec_temp = [];
    });
  },
  serialize: function (t) {
    var j = _default2(t);
    t.data_attributes = function () {
      var a = [];
      var v = t._helpers.formatDate;
      var _ = j();
      for (var i in _) {
        var o = _[i];
        for (var c in o) {
          if (c.substr(0, 1) != "_") {
            a.push([c, c == "start_date" || c == "end_date" ? v : null]);
          }
        }
        break;
      }
      return a;
    };
    t.toXML = function (a) {
      var v = [];
      var _ = this.data_attributes();
      var i = j();
      for (var o in i) {
        var c = i[o];
        v.push("<event>");
        for (var h = 0; h < _.length; h++) {
          v.push("<" + _[h][0] + "><![CDATA[" + (_[h][1] ? _[h][1](c[_[h][0]]) : c[_[h][0]]) + "]]></" + _[h][0] + ">");
        }
        v.push("</event>");
      }
      return (a || "") + "<data>" + v.join("\n") + "</data>";
    };
    t._serialize_json_value = function (a) {
      if (a === null || typeof a == "boolean") {
        a = "" + a;
      } else {
        if (!a && a !== 0) {
          a = "";
        }
        a = "\"" + a.toString().replace(/\n/g, "").replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
      }
      return a;
    };
    t.toJSON = function () {
      return JSON.stringify(this.serialize());
    };
    t.toICal = function (a) {
      var v = t.date.date_to_str("%Y%m%dT%H%i%s");
      var _ = t.date.date_to_str("%Y%m%d");
      var i = [];
      var o = j();
      for (var c in o) {
        var h = o[c];
        i.push("BEGIN:VEVENT");
        if (h._timed && (h.start_date.getHours() || h.start_date.getMinutes())) {
          i.push("DTSTART:" + v(h.start_date));
        } else {
          i.push("DTSTART:" + _(h.start_date));
        }
        if (h._timed && (h.end_date.getHours() || h.end_date.getMinutes())) {
          i.push("DTEND:" + v(h.end_date));
        } else {
          i.push("DTEND:" + _(h.end_date));
        }
        i.push("SUMMARY:" + h.text);
        i.push("END:VEVENT");
      }
      return "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//dhtmlXScheduler//NONSGML v2.2//EN\nDESCRIPTION:" + (a || "") + "\n" + i.join("\n") + "\nEND:VCALENDAR";
    };
  },
  timeline: function (t) {
    Te("Timeline", t.assert);
  },
  tooltip: function (t) {
    var j = t._createDomEventScope();
    var a = {};
    t.ext.tooltip = t.dhtmlXTooltip = t.tooltip = a;
    a.config = {
      className: "dhtmlXTooltip scheduler_tooltip tooltip",
      timeout_to_display: 50,
      timeout_to_hide: 50,
      delta_x: 15,
      delta_y: -20
    };
    a.tooltip = document.createElement("div");
    a.tooltip.className = a.config.className;
    t._waiAria.tooltipAttr(a.tooltip);
    a.show = function (v, _) {
      if (!this._mobile || t.config.touch_tooltip) {
        var i = a;
        var o = this.tooltip;
        var c = o.style;
        i.tooltip.className = i.config.className;
        var h = this.position(v);
        if (!this.isTooltip(v.target || v.srcElement)) {
          var V = h.x + (i.config.delta_x || 0);
          var T = h.y - (i.config.delta_y || 0);
          c.visibility = "hidden";
          c.right = "";
          c.bottom = "";
          c.left = "0";
          c.top = "0";
          if (t.config.rtl) {
            o.className += " dhtmlXTooltip_rtl";
          }
          this.tooltip.innerHTML = _;
          document.body.appendChild(this.tooltip);
          var z = this.tooltip.offsetHeight;
          if (document.documentElement.clientWidth - V - this.tooltip.offsetWidth < 0) {
            c.left = "";
            c.right = document.documentElement.clientWidth - V + (i.config.delta_x || 0) * 2 + "px";
          } else {
            c.left = V < 0 ? h.x + Math.abs(i.config.delta_x || 0) + "px" : V + "px";
          }
          if (document.documentElement.clientHeight - T - z < 0) {
            var Z = document.documentElement.clientHeight - T - (i.config.delta_y || 0) * 2;
            if (Z + z > document.documentElement.clientHeight) {
              T -= Math.abs(document.documentElement.clientHeight - T - z);
              T = Math.max(T, 0);
              c.top = T + "px";
            } else {
              c.bottom = Z + "px";
              c.top = "";
            }
          } else {
            c.top = T < 0 ? h.y + Math.abs(i.config.delta_y || 0) + "px" : T + "px";
          }
          t._waiAria.tooltipVisibleAttr(this.tooltip);
          c.visibility = "visible";
          j.attach(this.tooltip, "mouseleave", function (re) {
            for (var oe = t.dhtmlXTooltip, _e = re.relatedTarget; _e != t._obj && _e;) {
              _e = _e.parentNode;
            }
            if (_e != t._obj) {
              oe.delay(oe.hide, oe, [], oe.config.timeout_to_hide);
            }
          });
          t.callEvent("onTooltipDisplayed", [this.tooltip, this.tooltip.event_id]);
        }
      }
    };
    a._clearTimeout = function () {
      if (this.tooltip._timeout_id) {
        clearTimeout(this.tooltip._timeout_id);
      }
    };
    a.hide = function () {
      if (this.tooltip.parentNode) {
        t._waiAria.tooltipHiddenAttr(this.tooltip);
        var v = this.tooltip.event_id;
        this.tooltip.event_id = null;
        j.detachAll();
        this.tooltip.parentNode.removeChild(this.tooltip);
        t.callEvent("onAfterTooltip", [v]);
      }
      this._clearTimeout();
    };
    a.delay = function (v, _, i, o) {
      this._clearTimeout();
      this.tooltip._timeout_id = setTimeout(function () {
        var c = v.apply(_, i);
        v = _ = i = null;
        return c;
      }, o || this.config.timeout_to_display);
    };
    a.isTooltip = function (v) {
      for (var _ = false; v && !_;) {
        _ = v.className == this.tooltip.className;
        v = v.parentNode;
      }
      return _;
    };
    a.position = function (v) {
      return {
        x: v.clientX,
        y: v.clientY
      };
    };
    t.attachEvent("onMouseMove", function (v, _) {
      var i = _.target || _.srcElement;
      var o = a;
      var c = o.isTooltip(i);
      var h = o.isTooltipTarget && o.isTooltipTarget(i);
      if (v && t.getState().editor_id != v || c || h) {
        var D;
        var V;
        if (v || o.tooltip.event_id) {
          var T = t.getEvent(v) || t.getEvent(o.tooltip.event_id);
          if (!T) {
            return;
          }
          o.tooltip.event_id = T.id;
          if (!(D = t.templates.tooltip_text(T.start_date, T.end_date, T))) {
            return o.hide();
          }
        }
        if (h) {
          D = "";
        }
        if (t.$env.isIE) {
          for (var W in V = {
            pageX: undefined,
            pageY: undefined,
            clientX: undefined,
            clientY: undefined,
            target: undefined,
            srcElement: undefined
          }) {
            V[W] = _[W];
          }
        }
        if (!t.callEvent("onBeforeTooltip", [v]) || !D) {
          return;
        }
        o.delay(o.show, o, [V || _, D]);
      } else {
        o.delay(o.hide, o, [], o.config.timeout_to_hide);
      }
    });
    t.attachEvent("onBeforeDrag", function () {
      a.hide();
      return true;
    });
    t.attachEvent("onEventDeleted", function () {
      a.hide();
      return true;
    });
    t.attachEvent("onDestroy", function () {
      a.hide();
    });
  },
  treetimeline: function (t) {
    Te("Tree Timeline", t.assert);
  },
  units: function (t) {
    Te("Units", t.assert);
  },
  url: function (t) {
    t._get_url_nav = function () {
      for (var j = {}, a = (document.location.hash || "").replace("#", "").split(","), v = 0; v < a.length; v++) {
        var _ = a[v].split("=");
        if (_.length == 2) {
          j[_[0]] = _[1];
        }
      }
      return j;
    };
    t.attachEvent("onTemplatesReady", function () {
      var j = true;
      var a = t.date.str_to_date("%Y-%m-%d");
      var v = t.date.date_to_str("%Y-%m-%d");
      var _ = t._get_url_nav().event || null;
      function i(o) {
        _ = o;
        if (t.getEvent(o)) {
          t.showEvent(o);
        }
      }
      t.attachEvent("onAfterEventDisplay", function (o) {
        _ = null;
        return true;
      });
      t.attachEvent("onBeforeViewChange", function (o, c, h, D) {
        if (j) {
          j = false;
          var V = t._get_url_nav();
          if (V.event) {
            try {
              if (t.getEvent(V.event)) {
                setTimeout(function () {
                  i(V.event);
                });
                return false;
              }
              var T = t.attachEvent("onXLE", function () {
                setTimeout(function () {
                  i(V.event);
                });
                t.detachEvent(T);
              });
            } catch {}
          }
          if (V.date || V.mode) {
            try {
              this.setCurrentView(V.date ? a(V.date) : null, V.mode || null);
            } catch {
              this.setCurrentView(V.date ? a(V.date) : null, h);
            }
            return false;
          }
        }
        var W = ["date=" + v(D || c), "mode=" + (h || o)];
        if (_) {
          W.push("event=" + _);
        }
        var z = "#" + W.join(",");
        document.location.hash = z;
        return true;
      });
    });
  },
  week_agenda: function (t) {
    Te("Week Agenda", t.assert);
  },
  wp: function (t) {
    t.attachEvent("onLightBox", function () {
      if (this._cover) {
        try {
          this._cover.style.height = this.expanded ? "100%" : (document.body.parentNode || document.body).scrollHeight + "px";
        } catch {}
      }
    });
    t.form_blocks.select.set_value = function (j, a, v) {
      if (a === undefined || a === "") {
        a = (j.firstChild.options[0] || {}).value;
      }
      j.firstChild.value = a || "";
    };
  },
  year_view: function (t) {
    t.config.year_x = 4;
    t.config.year_y = 3;
    t.xy.year_top = 0;
    t.templates.year_date = function (h) {
      return t.date.date_to_str(t.locale.labels.year_tab + " %Y")(h);
    };
    t.templates.year_month = t.date.date_to_str("%F");
    t.templates.year_scale_date = t.date.date_to_str("%D");
    t.templates.year_tooltip = function (h, D, V) {
      return V.text;
    };
    function j() {
      return t._mode == "year";
    }
    function a(h) {
      var D = t.$domHelpers.closest(h, "[data-cell-date]");
      if (D && D.hasAttribute("data-cell-date")) {
        return t.templates.parse_date(D.getAttribute("data-cell-date"));
      } else {
        return null;
      }
    }
    t.dblclick_dhx_month_head = function (h) {
      if (j()) {
        var D = h.target;
        if (t.$domHelpers.closest(D, ".dhx_before") || t.$domHelpers.closest(D, ".dhx_after")) {
          return false;
        }
        var V = a(D);
        if (V) {
          var T = V;
          var W = this.date.add(T, 1, "day");
          if (!this.config.readonly && this.config.dblclick_create) {
            this.addEventNow(T.valueOf(), W.valueOf(), h);
          }
        }
      }
    };
    var v = t.changeEventId;
    t.changeEventId = function () {
      v.apply(this, arguments);
      if (j()) {
        this.year_view(true);
      }
    };
    var _ = t.render_data;
    t.render_data = function (h) {
      if (!j()) {
        return _.apply(this, arguments);
      }
      for (var D = 0; D < h.length; D++) {
        this._year_render_event(h[D]);
      }
    };
    var i = t.clear_view;
    t.clear_view = function () {
      if (!j()) {
        return i.apply(this, arguments);
      }
      var h = t._year_marked_cells;
      var D = null;
      for (var V in h) {
        if (h.hasOwnProperty(V)) {
          (D = h[V]).className = "dhx_month_head";
          D.removeAttribute("date");
          D.removeAttribute("data-year-date");
        }
      }
      t._year_marked_cells = {};
    };
    t._hideToolTip = function () {
      if (this._tooltip) {
        this._tooltip.style.display = "none";
        this._tooltip.date = new Date(9999, 1, 1);
      }
    };
    t._showToolTip = function (h, D, V, T) {
      if (this._tooltip) {
        if (this._tooltip.date.valueOf() == h.valueOf()) {
          return;
        }
        this._tooltip.innerHTML = "";
      } else {
        var W = this._tooltip = document.createElement("div");
        W.className = "dhx_year_tooltip";
        if (this.config.rtl) {
          W.className += " dhx_tooltip_rtl";
        }
        document.body.appendChild(W);
        W.addEventListener("click", t._click.dhx_cal_data);
      }
      for (var z = this.getEvents(h, this.date.add(h, 1, "day")), Z = "", re = 0; re < z.length; re++) {
        var oe = z[re];
        if (this.filter_event(oe.id, oe)) {
          var _e = oe.color ? "background:" + oe.color + ";" : "";
          var he = oe.textColor ? "color:" + oe.textColor + ";" : "";
          Z += "<div class='dhx_tooltip_line' style='" + _e + he + "' event_id='" + z[re].id + "' " + this.config.event_attribute + "='" + z[re].id + "'>";
          Z += "<div class='dhx_tooltip_date' style='" + _e + he + "'>" + (z[re]._timed ? this.templates.event_date(z[re].start_date) : "") + "</div>";
          Z += "<div class='dhx_event_icon icon_details'>&nbsp;</div>";
          Z += this.templates.year_tooltip(z[re].start_date, z[re].end_date, z[re]) + "</div>";
        }
      }
      this._tooltip.style.display = "";
      this._tooltip.style.top = "0px";
      this._tooltip.style.left = document.body.offsetWidth - D.left - this._tooltip.offsetWidth < 0 ? D.left - this._tooltip.offsetWidth + "px" : D.left + T.offsetWidth + "px";
      this._tooltip.date = h;
      this._tooltip.innerHTML = Z;
      this._tooltip.style.top = document.body.offsetHeight - D.top - this._tooltip.offsetHeight < 0 ? D.top - this._tooltip.offsetHeight + T.offsetHeight + "px" : D.top + "px";
    };
    t._year_view_tooltip_handler = function (h) {
      if (j()) {
        var D = h.target || h.srcElement;
        if (D.tagName.toLowerCase() == "a") {
          D = D.parentNode;
        }
        if (t._getClassName(D).indexOf("dhx_year_event") != -1) {
          t._showToolTip(t.templates.parse_date(D.getAttribute("data-year-date")), t.$domHelpers.getOffset(D), h, D);
        } else {
          t._hideToolTip();
        }
      }
    };
    t._init_year_tooltip = function () {
      t._detachDomEvent(t._els.dhx_cal_data[0], "mouseover", t._year_view_tooltip_handler);
      t.event(t._els.dhx_cal_data[0], "mouseover", t._year_view_tooltip_handler);
    };
    t._get_year_cell = function (h) {
      for (var D = t.templates.format_date(h), V = this.$root.querySelectorAll(`.dhx_cal_data [data-cell-date="${D}"] .dhx_month_head`), T = 0; T < V.length; T++) {
        if (!t.$domHelpers.closest(V[T], ".dhx_after, .dhx_before")) {
          return V[T];
        }
      }
      return null;
    };
    t._year_marked_cells = {};
    t._mark_year_date = function (h, D) {
      var V = t.templates.format_date(h);
      var T = this._get_year_cell(h);
      if (T) {
        var W = this.templates.event_class(D.start_date, D.end_date, D);
        if (!t._year_marked_cells[V]) {
          T.classList.add("dhx_year_event");
          T.setAttribute("data-year-date", V);
          T.setAttribute("date", V);
          t._year_marked_cells[V] = T;
        }
        T.className += W ? " " + W : "";
      }
    };
    t._unmark_year_date = function (h) {
      var D = this._get_year_cell(h);
      if (D) {
        D.className = "dhx_month_head";
      }
    };
    t._year_render_event = function (h) {
      var D = h.start_date;
      for (D = D.valueOf() < this._min_date.valueOf() ? this._min_date : this.date.date_part(new Date(D)); D < h.end_date;) {
        this._mark_year_date(D, h);
        if ((D = this.date.add(D, 1, "day")).valueOf() >= this._max_date.valueOf()) {
          return;
        }
      }
    };
    t.year_view = function (h) {
      var D;
      if (h) {
        D = t.xy.scale_height;
        t.xy.scale_height = -1;
      }
      t._els.dhx_cal_header[0].style.display = h ? "none" : "";
      t.set_sizes();
      if (h) {
        t.xy.scale_height = D;
      }
      t._table_view = h;
      if (!this._load_mode || !this._load()) {
        if (h) {
          t._init_year_tooltip();
          t._reset_year_scale();
          if (t._load_mode && t._load()) {
            t._render_wait = true;
            return;
          }
          t.render_view_data();
        } else {
          t._hideToolTip();
        }
      }
    };
    t._reset_year_scale = function () {
      this._cols = [];
      this._colsS = {};
      var h = [];
      var D = this._els.dhx_cal_data[0];
      var V = this.config;
      D.scrollTop = 0;
      D.innerHTML = "";
      var T = Math.floor(parseInt(D.style.width) / V.year_x);
      var W = Math.floor((parseInt(D.style.height) - t.xy.year_top) / V.year_y);
      if (W < 190) {
        W = 190;
        T = Math.floor((parseInt(D.style.width) - t.xy.scroll_width) / V.year_x);
      }
      var z = T - 11;
      var Z = 0;
      var re = document.createElement("div");
      var oe = this.date.week_start(t._currentDate());
      this._process_ignores(oe, 7, "day", 1);
      for (var _e = 7 - (this._ignores_detected || 0), he = 0, be = 0; be < 7; be++) {
        if (!this._ignores || !this._ignores[be]) {
          this._cols[be] = Math.floor(z / (_e - he));
          this._render_x_header(be, Z, oe, re);
          z -= this._cols[be];
          Z += this._cols[be];
          he++;
        }
        oe = this.date.add(oe, 1, "day");
      }
      re.lastChild.className += " dhx_scale_bar_last";
      be = 0;
      for (; be < re.childNodes.length; be++) {
        this._waiAria.yearHeadCell(re.childNodes[be]);
      }
      var Ae = this.date[this._mode + "_start"](this.date.copy(this._date));
      var He = Ae;
      var Ne = null;
      for (be = 0; be < V.year_y; be++) {
        for (var Ve = 0; Ve < V.year_x; Ve++) {
          (Ne = document.createElement("div")).className = "dhx_year_box";
          Ne.style.cssText = "position:absolute;";
          Ne.setAttribute("date", this._helpers.formatDate(Ae));
          Ne.setAttribute("data-month-date", this._helpers.formatDate(Ae));
          Ne.innerHTML = "<div class='dhx_year_month'></div><div class='dhx_year_grid'><div class='dhx_year_week'>" + re.innerHTML + "</div><div class='dhx_year_body'></div></div>";
          var Se = Ne.querySelector(".dhx_year_month");
          var Fe = Ne.querySelector(".dhx_year_grid");
          var Oe = Ne.querySelector(".dhx_year_week");
          var at = Ne.querySelector(".dhx_year_body");
          var ht = t.uid();
          this._waiAria.yearHeader(Se, ht);
          this._waiAria.yearGrid(Fe, ht);
          Se.innerHTML = this.templates.year_month(Ae);
          var lt = this.date.week_start(Ae);
          this._reset_month_scale(at, Ae, lt, 6);
          for (var mt = at.querySelectorAll("td"), ft = 0; ft < mt.length; ft++) {
            this._waiAria.yearDayCell(mt[ft]);
          }
          D.appendChild(Ne);
          Oe.style.height = Oe.childNodes[0].offsetHeight + "px";
          var yt = Math.round((W - 190) / 2);
          Ne.style.marginTop = yt + "px";
          this.set_xy(Ne, T - 10, W - yt - 10, T * Ve + 5, W * be + 5 + t.xy.year_top);
          h[be * V.year_x + Ve] = (Ae.getDay() - (this.config.start_on_monday ? 1 : 0) + 7) % 7;
          Ae = this.date.add(Ae, 1, "month");
        }
      }
      var xt = this._getNavDateElement();
      if (xt) {
        xt.innerHTML = this.templates[this._mode + "_date"](He, Ae, this._mode);
      }
      this.week_starts = h;
      h._month = He.getMonth();
      this._min_date = He;
      this._max_date = Ae;
    };
    var o = t.getActionData;
    t.getActionData = function (h) {
      if (j()) {
        return {
          date: a(h.target),
          section: null
        };
      } else {
        return o.apply(t, arguments);
      }
    };
    var c = t._locate_event;
    t._locate_event = function (h) {
      var D = c.apply(t, arguments);
      if (!D) {
        var V = a(h);
        if (!V) {
          return null;
        }
        var T = t.getEvents(V, t.date.add(V, 1, "day"));
        if (!T.length) {
          return null;
        }
        D = T[0].id;
      }
      return D;
    };
    t.attachEvent("onDestroy", function () {
      t._hideToolTip();
    });
  }
});
export var scheduler = At.getSchedulerInstance();
export var Scheduler = {
  plugin: scheduler.bind(At.plugin, At)
};
window.scheduler = scheduler;
window.Scheduler = Scheduler;
export default scheduler;