require("82772");
require("68304");
require("30489");
require("41539");
require("12419");
require("74819");
require("38880");
require("82526");
require("41817");
require("32165");
require("66992");
require("78783");
require("33948");
require("47042");
require("68309");
require("91038");
require("74916");
import * as Z from "83486";
import * as le from "86675";
import * as fe from "57969";
import * as j from "9387";
function se() {
  var qe;
  var ft = {
    minHeight: 200,
    maxHeight: 300,
    minWidth: 100,
    maxWidth: 300
  };
  var Me = document.body;
  var ne = document.createTextNode("");
  var me = document.createElement("SPAN");
  function it(Kt, on, Rn) {
    Kt.addEventListener(on, Rn, false);
  }
  function bt(Kt, on, Rn) {
    Kt.removeEventListener(on, Rn, false);
  }
  function Ut(Kt) {
    var on;
    var Rn;
    if (Kt) {
      if (!/^[a-zA-Z \.,\\\/\|0-9]$/.test(Kt)) {
        Kt = ".";
      }
    } else {
      Kt = "";
    }
    if (ne.textContent !== undefined) {
      ne.textContent = qe.value + Kt;
    } else {
      ne.data = qe.value + Kt;
    }
    me.style.position = "absolute";
    me.style.fontSize = Wt(qe).fontSize;
    me.style.fontFamily = Wt(qe).fontFamily;
    me.style.whiteSpace = "pre";
    Me.appendChild(me);
    on = me.clientWidth + 2;
    Me.removeChild(me);
    qe.style.height = ft.minHeight + "px";
    qe.style.width = ft.minWidth > on ? ft.minWidth + "px" : on > ft.maxWidth ? ft.maxWidth + "px" : on + "px";
    if (ft.minHeight > (Rn = qe.scrollHeight ? qe.scrollHeight - 1 : 0)) {
      qe.style.height = ft.minHeight + "px";
    } else if (ft.maxHeight < Rn) {
      qe.style.height = ft.maxHeight + "px";
      qe.style.overflowY = "visible";
    } else {
      qe.style.height = Rn + "px";
    }
  }
  function Ze() {
    window.setTimeout(Ut, 0);
  }
  function Wt(hn) {
    return hn.currentStyle || document.defaultView.getComputedStyle(hn);
  }
  return {
    init: function (Kt, on, Rn) {
      (function (Kt, on, Rn) {
        qe = Kt;
        (function (Kt) {
          if (Kt && Kt.minHeight) {
            if (Kt.minHeight == "inherit") {
              ft.minHeight = qe.clientHeight;
            } else {
              var on = parseInt(Kt.minHeight);
              if (!isNaN(on)) {
                ft.minHeight = on;
              }
            }
          }
          if (Kt && Kt.maxHeight) {
            if (Kt.maxHeight == "inherit") {
              ft.maxHeight = qe.clientHeight;
            } else {
              var Rn = parseInt(Kt.maxHeight);
              if (!isNaN(Rn)) {
                ft.maxHeight = Rn;
              }
            }
          }
          if (Kt && Kt.minWidth) {
            if (Kt.minWidth == "inherit") {
              ft.minWidth = qe.clientWidth;
            } else {
              var In = parseInt(Kt.minWidth);
              if (!isNaN(In)) {
                ft.minWidth = In;
              }
            }
          }
          if (Kt && Kt.maxWidth) {
            if (Kt.maxWidth == "inherit") {
              ft.maxWidth = qe.clientWidth;
            } else {
              var di = parseInt(Kt.maxWidth);
              if (!isNaN(di)) {
                ft.maxWidth = di;
              }
            }
          }
          if (!me.firstChild) {
            me.className = "autoResize";
            me.style.display = "inline-block";
            me.appendChild(ne);
          }
        })(on);
        if (qe.nodeName == "TEXTAREA") {
          qe.style.resize = "none";
          qe.style.overflowY = "";
          qe.style.height = ft.minHeight + "px";
          qe.style.minWidth = ft.minWidth + "px";
          qe.style.maxWidth = ft.maxWidth + "px";
          qe.style.overflowY = "hidden";
        }
        if (Rn) {
          it(qe, "change", Ut);
          it(qe, "cut", Ze);
          it(qe, "paste", Ze);
          it(qe, "drop", Ze);
          it(qe, "keydown", Ze);
          it(qe, "focus", Ut);
          it(qe, "compositionstart", Ze);
          it(qe, "compositionupdate", Ze);
          it(qe, "compositionend", Ze);
        }
        Ut();
      })(Kt, on, Rn);
    },
    unObserve: function () {
      bt(qe, "change", Ut);
      bt(qe, "cut", Ze);
      bt(qe, "paste", Ze);
      bt(qe, "drop", Ze);
      bt(qe, "keydown", Ze);
      bt(qe, "focus", Ut);
      bt(qe, "compositionstart", Ze);
      bt(qe, "compositionupdate", Ze);
      bt(qe, "compositionend", Ze);
    },
    resize: Ut
  };
}
require("32564");
import * as Pe from "7597";
function Le(ft, qe) {
  for (var Me = (0, fe.qK)(qe), ne = qe.value.split("\n"), me = Me, it = 0, bt = 0; bt < ne.length; bt++) {
    if (bt !== 0) {
      it += ne[bt - 1].length + 1;
    }
    var Ze = it + ne[bt].length;
    if (ft === "home") {
      me = it;
    } else if (ft === "end") {
      me = Ze;
    }
    if (Me <= Ze) {
      break;
    }
  }
  (0, fe.Mq)(qe, me);
}
function he(ft) {
  return (he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (qe) {
    return typeof qe;
  } : function (qe) {
    if (qe && typeof Symbol == "function" && qe.constructor === Symbol && qe !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof qe;
    }
  })(ft);
}
function pe(ft, qe) {
  return function ot(ft) {
    if (Array.isArray(ft)) {
      return ft;
    }
  }(ft) || function Ue(ft, qe) {
    var Me = ft == null ? null : typeof Symbol !== "undefined" && ft[Symbol.iterator] || ft["@@iterator"];
    if (Me != null) {
      var bt;
      var Ut;
      var ne = [];
      var me = true;
      var it = false;
      try {
        for (Me = Me.call(ft); !(me = (bt = Me.next()).done) && (ne.push(bt.value), !qe || ne.length !== qe); me = true);
      } catch (Ze) {
        it = true;
        Ut = Ze;
      } finally {
        try {
          if (!me && Me.return != null) {
            Me.return();
          }
        } finally {
          if (it) {
            throw Ut;
          }
        }
      }
      return ne;
    }
  }(ft, qe) || function Re(ft, qe) {
    if (ft) {
      if (typeof ft == "string") {
        return Ge(ft, qe);
      }
      var Me = Object.prototype.toString.call(ft).slice(8, -1);
      if (Me === "Object" && ft.constructor) {
        Me = ft.constructor.name;
      }
      if (Me === "Map" || Me === "Set") {
        return Array.from(ft);
      }
      if (Me === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Me)) {
        return Ge(ft, qe);
      }
    }
  }(ft, qe) || function re() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ge(ft, qe) {
  if (qe == null || qe > ft.length) {
    qe = ft.length;
  }
  for (var Me = 0, ne = new Array(qe); Me < qe; Me++) {
    ne[Me] = ft[Me];
  }
  return ne;
}
function rt(ft, qe) {
  for (var Me = 0; Me < qe.length; Me++) {
    var ne = qe[Me];
    ne.enumerable = ne.enumerable || false;
    ne.configurable = true;
    if ("value" in ne) {
      ne.writable = true;
    }
    Object.defineProperty(ft, ne.key, ne);
  }
}
function Ee() {
  Ee = typeof Reflect !== "undefined" && Reflect.get ? Reflect.get.bind() : function (qe, Me, ne) {
    var me = ke(qe, Me);
    if (me) {
      var it = Object.getOwnPropertyDescriptor(me, Me);
      if (it.get) {
        return it.get.call(arguments.length < 3 ? qe : ne);
      } else {
        return it.value;
      }
    }
  };
  return Ee.apply(this, arguments);
}
function ke(ft, qe) {
  for (; !Object.prototype.hasOwnProperty.call(ft, qe) && (ft = Et(ft)) !== null;);
  return ft;
}
function De(ft, qe) {
  return (De = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (ne, me) {
    ne.__proto__ = me;
    return ne;
  })(ft, qe);
}
function It(ft, qe) {
  if (qe && (he(qe) === "object" || typeof qe == "function")) {
    return qe;
  }
  if (qe !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return Yt(ft);
}
function Yt(ft) {
  if (ft === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return ft;
}
function Et(ft) {
  return (Et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (Me) {
    return Me.__proto__ || Object.getPrototypeOf(Me);
  })(ft);
}
var et = "ht_editor_hidden";
var St = "textEditor";
export var H = function (ft) {
  (function Be(ft, qe) {
    if (typeof qe != "function" && qe !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    ft.prototype = Object.create(qe && qe.prototype, {
      constructor: {
        value: ft,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(ft, "prototype", {
      writable: false
    });
    if (qe) {
      De(ft, qe);
    }
  })(Me, ft);
  var qe = function Qe(ft) {
    var qe = function Dn() {
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
    }();
    return function () {
      var me;
      var ne = Et(ft);
      if (qe) {
        var it = Et(this).constructor;
        me = Reflect.construct(ne, arguments, it);
      } else {
        me = ne.apply(this, arguments);
      }
      return It(this, me);
    };
  }(Me);
  function Me(ne) {
    var me;
    (function st(ft, qe) {
      if (!(ft instanceof qe)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, Me);
    (me = qe.call(this, ne)).eventManager = new X.Z(Yt(me));
    me.autoResize = se();
    me.TEXTAREA = undefined;
    me.textareaStyle = undefined;
    me.TEXTAREA_PARENT = undefined;
    me.textareaParentStyle = undefined;
    me.layerClass = undefined;
    me.createElements();
    me.bindEvents();
    me.hot.addHookOnce("afterDestroy", function () {
      return me.destroy();
    });
    return me;
  }
  (function Oe(ft, qe, Me) {
    if (qe) {
      rt(ft.prototype, qe);
    }
    if (Me) {
      rt(ft, Me);
    }
    Object.defineProperty(ft, "prototype", {
      writable: false
    });
  })(Me, [{
    key: "getValue",
    value: function () {
      return this.TEXTAREA.value;
    }
  }, {
    key: "setValue",
    value: function (me) {
      this.TEXTAREA.value = me;
    }
  }, {
    key: "open",
    value: function () {
      var me = this;
      this.refreshDimensions();
      this.showEditableElement();
      this.hot.getShortcutManager().setActiveContextName("editor");
      this.addHook("afterDocumentKeyDown", function (bt) {
        return me.onAfterDocumentKeyDown(bt);
      });
      this.registerShortcuts();
    }
  }, {
    key: "close",
    value: function () {
      this.autoResize.unObserve();
      if (this.hot.rootDocument.activeElement === this.TEXTAREA) {
        this.hot.listen();
      }
      this.hideEditableElement();
      this.unregisterShortcuts();
      this.removeHooksByKey("afterDocumentKeyDown");
    }
  }, {
    key: "prepare",
    value: function (me, it, bt, Ut, Ze, pt) {
      var yt = this.state;
      Ee(Et(Me.prototype), "prepare", this).call(this, me, it, bt, Ut, Ze, pt);
      if (!pt.readOnly) {
        this.refreshDimensions(true);
        var hn = pt.fragmentSelection;
        if (pt.allowInvalid) {
          this.TEXTAREA.value = "";
        }
        if (yt !== Z.ed.FINISHED) {
          this.hideEditableElement();
        }
        if (!hn && !(0, le.K1)()) {
          this.focus();
        }
      }
    }
  }, {
    key: "beginEditing",
    value: function (me, it) {
      if (this.state === Z.ed.VIRGIN) {
        this.TEXTAREA.value = "";
        Ee(Et(Me.prototype), "beginEditing", this).call(this, me, it);
      }
    }
  }, {
    key: "focus",
    value: function () {
      this.TEXTAREA.select();
      (0, fe.Mq)(this.TEXTAREA, this.TEXTAREA.value.length);
    }
  }, {
    key: "createElements",
    value: function () {
      var me = this.hot.rootDocument;
      this.TEXTAREA = me.createElement("TEXTAREA");
      this.TEXTAREA.setAttribute("data-hot-input", "");
      this.TEXTAREA.tabIndex = -1;
      (0, fe.cn)(this.TEXTAREA, "handsontableInput");
      this.textareaStyle = this.TEXTAREA.style;
      this.textareaStyle.width = 0;
      this.textareaStyle.height = 0;
      this.textareaStyle.overflowY = "visible";
      this.TEXTAREA_PARENT = me.createElement("DIV");
      (0, fe.cn)(this.TEXTAREA_PARENT, "handsontableInputHolder");
      if ((0, fe.pv)(this.TEXTAREA_PARENT, this.layerClass)) {
        (0, fe.IV)(this.TEXTAREA_PARENT, this.layerClass);
      }
      (0, fe.cn)(this.TEXTAREA_PARENT, et);
      this.textareaParentStyle = this.TEXTAREA_PARENT.style;
      this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
      this.hot.rootElement.appendChild(this.TEXTAREA_PARENT);
    }
  }, {
    key: "hideEditableElement",
    value: function () {
      if ((0, le.w1)() || (0, le.un)()) {
        this.textareaStyle.textIndent = "-99999px";
      }
      this.textareaStyle.overflowY = "visible";
      this.textareaParentStyle.opacity = "0";
      this.textareaParentStyle.height = "1px";
      (0, fe.IV)(this.TEXTAREA_PARENT, this.layerClass);
      (0, fe.cn)(this.TEXTAREA_PARENT, et);
    }
  }, {
    key: "showEditableElement",
    value: function () {
      this.textareaParentStyle.height = "";
      this.textareaParentStyle.overflow = "";
      this.textareaParentStyle.position = "";
      this.textareaParentStyle[this.hot.isRtl() ? "left" : "right"] = "auto";
      this.textareaParentStyle.opacity = "1";
      this.textareaStyle.textIndent = "";
      this.textareaStyle.overflowY = "hidden";
      var me = this.TEXTAREA_PARENT.childNodes;
      var it = false;
      (0, q.q4)(me.length - 1, function (bt) {
        if ((0, fe.pv)(me[bt], "handsontableEditor")) {
          it = true;
          return false;
        }
      });
      if ((0, fe.pv)(this.TEXTAREA_PARENT, et)) {
        (0, fe.IV)(this.TEXTAREA_PARENT, et);
      }
      if (it) {
        this.layerClass = "ht_editor_visible";
        (0, fe.cn)(this.TEXTAREA_PARENT, this.layerClass);
      } else {
        this.layerClass = this.getEditedCellsLayerClass();
        (0, fe.cn)(this.TEXTAREA_PARENT, this.layerClass);
      }
    }
  }, {
    key: "refreshValue",
    value: function () {
      var me = this.hot.toPhysicalRow(this.row);
      var it = this.hot.getSourceDataAtCell(me, this.col);
      this.originalValue = it;
      this.setValue(it);
      this.refreshDimensions();
    }
  }, {
    key: "refreshDimensions",
    value: function () {
      var me = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (this.state === Z.ed.EDITING || me) {
        this.TD = this.getEditedCell();
        if (!this.TD) {
          if (!me) {
            this.close();
          }
          return;
        }
        var it = this.getEditedCellRect();
        var bt = it.top;
        var Ut = it.start;
        var Ze = it.width;
        var pt = it.maxWidth;
        var yt = it.height;
        var Wt = it.maxHeight;
        this.textareaParentStyle.top = `${bt}px`;
        this.textareaParentStyle[this.hot.isRtl() ? "right" : "left"] = `${Ut}px`;
        this.showEditableElement();
        var hn = (0, fe.Dx)(this.TD, this.hot.rootWindow);
        this.TEXTAREA.style.fontSize = hn.fontSize;
        this.TEXTAREA.style.fontFamily = hn.fontFamily;
        this.TEXTAREA.style.backgroundColor = this.TD.style.backgroundColor;
        var Kt = (0, fe.Dx)(this.TEXTAREA);
        var on = parseInt(Kt.paddingLeft, 10) + parseInt(Kt.paddingRight, 10);
        var Rn = parseInt(Kt.paddingTop, 10) + parseInt(Kt.paddingBottom, 10);
        var In = Ze - on;
        var di = yt - Rn;
        var Si = pt - on;
        var Zi = Wt - Rn;
        this.autoResize.init(this.TEXTAREA, {
          minWidth: Math.min(In, Si),
          minHeight: Math.min(di, Zi),
          maxWidth: Si,
          maxHeight: Zi
        }, true);
      }
    }
  }, {
    key: "bindEvents",
    value: function () {
      var me = this;
      this.eventManager.addEventListener(this.TEXTAREA, "cut", function (it) {
        return it.stopPropagation();
      });
      this.eventManager.addEventListener(this.TEXTAREA, "paste", function (it) {
        return it.stopPropagation();
      });
      if ((0, le.gn)()) {
        this.eventManager.addEventListener(this.TEXTAREA, "focusout", function () {
          return me.finishEditing(false);
        });
      }
      this.addHook("afterScrollHorizontally", function () {
        return me.refreshDimensions();
      });
      this.addHook("afterScrollVertically", function () {
        return me.refreshDimensions();
      });
      this.addHook("afterColumnResize", function () {
        me.refreshDimensions();
        me.focus();
      });
      this.addHook("afterRowResize", function () {
        me.refreshDimensions();
        me.focus();
      });
    }
  }, {
    key: "allowKeyEventPropagation",
    value: function () {}
  }, {
    key: "destroy",
    value: function () {
      this.eventManager.destroy();
      this.clearHooks();
    }
  }, {
    key: "registerShortcuts",
    value: function () {
      var me = this;
      var bt = this.hot.getShortcutManager().getContext("editor");
      function Ze() {
        me.hot.rootDocument.execCommand("insertText", false, "\n");
      }
      bt.addShortcuts([{
        keys: [["Tab"]],
        callback: function (yt) {
          var Wt = me.hot.getSettings();
          var hn = typeof Wt.tabMoves == "function" ? Wt.tabMoves(yt) : Wt.tabMoves;
          me.hot.selection.transformStart(hn.row, hn.col, true);
        }
      }, {
        keys: [["Shift", "Tab"]],
        callback: function (yt) {
          var Wt = me.hot.getSettings();
          var hn = typeof Wt.tabMoves == "function" ? Wt.tabMoves(yt) : Wt.tabMoves;
          me.hot.selection.transformStart(-hn.row, -hn.col);
        }
      }, {
        keys: [["Control", "Enter"]],
        callback: function () {
          Ze();
          return false;
        },
        runOnlyIf: function (yt) {
          return !me.hot.selection.isMultiple() && !yt.altKey;
        },
        relativeToGroup: Pe.PP,
        position: "before"
      }, {
        keys: [["Meta", "Enter"]],
        callback: function () {
          Ze();
          return false;
        },
        runOnlyIf: function () {
          return !me.hot.selection.isMultiple();
        },
        relativeToGroup: Pe.PP,
        position: "before"
      }, {
        keys: [["Alt", "Enter"]],
        callback: function () {
          Ze();
          return false;
        },
        relativeToGroup: Pe.PP,
        position: "before"
      }, {
        keys: [["PageUp"]],
        callback: function () {
          me.hot.selection.transformStart(-me.hot.countVisibleRows(), 0);
        }
      }, {
        keys: [["PageDown"]],
        callback: function () {
          me.hot.selection.transformStart(me.hot.countVisibleRows(), 0);
        }
      }, {
        keys: [["Home"]],
        callback: function (yt, Wt) {
          Le(pe(Wt, 1)[0], me.TEXTAREA);
        }
      }, {
        keys: [["End"]],
        callback: function (yt, Wt) {
          Le(pe(Wt, 1)[0], me.TEXTAREA);
        }
      }, {
        keys: [["Control/Meta", "Z"]],
        preventDefault: false,
        callback: function () {
          me.hot._registerTimeout(function () {
            me.autoResize.resize();
          }, 10);
        }
      }, {
        keys: [["Control/Meta", "Shift", "Z"]],
        preventDefault: false,
        callback: function () {
          me.hot._registerTimeout(function () {
            me.autoResize.resize();
          }, 10);
        }
      }], {
        runOnlyIf: function () {
          return (0, W.$K)(me.hot.getSelected());
        },
        group: St
      });
    }
  }, {
    key: "unregisterShortcuts",
    value: function () {
      var it = this.hot.getShortcutManager().getContext("editor");
      it.removeShortcutsByGroup(Pe.HJ);
      it.removeShortcutsByGroup(St);
      it.removeShortcutsByGroup(Z.PP);
    }
  }, {
    key: "onAfterDocumentKeyDown",
    value: function (me) {
      if ([j.nx.ARROW_UP, j.nx.ARROW_RIGHT, j.nx.ARROW_DOWN, j.nx.ARROW_LEFT].indexOf(me.keyCode) === -1) {
        this.autoResize.resize(String.fromCharCode(me.keyCode));
      }
    }
  }], [{
    key: "EDITOR_TYPE",
    get: function () {
      return "text";
    }
  }]);
  return Me;
}(Z.Hf);