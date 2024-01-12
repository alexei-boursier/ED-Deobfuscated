require("43371");
require("73210");
require("68309");
require("26699");
require("68304");
require("30489");
require("41539");
require("12419");
require("82526");
require("41817");
require("32165");
require("66992");
require("78783");
require("33948");
require("47042");
require("91038");
require("74916");
import * as Z from "6868";
import * as X from "94079";
var j = {
  _hooksStorage: Object.create(null),
  addHook: function (lt, et) {
    this._hooksStorage[lt] ||= [];
    this.hot.addHook(lt, et);
    this._hooksStorage[lt].push(et);
    return this;
  },
  removeHooksByKey: function (lt) {
    var et = this;
    (0, fe.Bk)(this._hooksStorage[lt] || [], function (St) {
      et.hot.removeHook(lt, St);
    });
  },
  clearHooks: function () {
    var lt = this;
    (0, X._l)(this._hooksStorage, function (et, St) {
      return lt.removeHooksByKey(St);
    });
    this._hooksStorage = {};
  }
};
(0, X.jW)(j, "MIXIN_NAME", "hooksRefRegisterer", {
  writable: false,
  enumerable: false
});
const G = j;
import * as se from "57969";
function W(Et) {
  return (W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (lt) {
    return typeof lt;
  } : function (lt) {
    if (lt && typeof Symbol == "function" && lt.constructor === Symbol && lt !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof lt;
    }
  })(Et);
}
function pe(Et, lt) {
  if (lt == null || lt > Et.length) {
    lt = Et.length;
  }
  for (var et = 0, St = new Array(lt); et < lt; et++) {
    St[et] = Et[et];
  }
  return St;
}
function Ue(Et, lt) {
  return (Ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (St, ve) {
    St.__proto__ = ve;
    return St;
  })(Et, lt);
}
function st(Et, lt) {
  if (lt && (W(lt) === "object" || typeof lt == "function")) {
    return lt;
  }
  if (lt !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function rt(Et) {
    if (Et === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return Et;
  }(Et);
}
function Ee(Et) {
  return (Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (et) {
    return et.__proto__ || Object.getPrototypeOf(et);
  })(Et);
}
function ke(Et, lt) {
  if (!(Et instanceof lt)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Be(Et, lt) {
  for (var et = 0; et < lt.length; et++) {
    var St = lt[et];
    St.enumerable = St.enumerable || false;
    St.configurable = true;
    if ("value" in St) {
      St.writable = true;
    }
    Object.defineProperty(Et, St.key, St);
  }
}
function De(Et, lt, et) {
  if (lt) {
    Be(Et.prototype, lt);
  }
  if (et) {
    Be(Et, et);
  }
  Object.defineProperty(Et, "prototype", {
    writable: false
  });
  return Et;
}
export var ed = Object.freeze({
  VIRGIN: "STATE_VIRGIN",
  EDITING: "STATE_EDITING",
  WAITING: "STATE_WAITING",
  FINISHED: "STATE_FINISHED"
});
export var PP = "baseEditor";
export var Hf = function () {
  function Et(lt) {
    ke(this, Et);
    this.hot = lt;
    this.instance = lt;
    this.state = ed.VIRGIN;
    this._opened = false;
    this._fullEditMode = false;
    this._closeCallback = null;
    this.TD = null;
    this.row = null;
    this.col = null;
    this.prop = null;
    this.originalValue = null;
    this.cellProperties = null;
    this.init();
  }
  De(Et, [{
    key: "_fireCallbacks",
    value: function (et) {
      if (this._closeCallback) {
        this._closeCallback(et);
        this._closeCallback = null;
      }
    }
  }, {
    key: "init",
    value: function () {}
  }, {
    key: "getValue",
    value: function () {
      throw Error("Editor getValue() method unimplemented");
    }
  }, {
    key: "setValue",
    value: function () {
      throw Error("Editor setValue() method unimplemented");
    }
  }, {
    key: "open",
    value: function () {
      throw Error("Editor open() method unimplemented");
    }
  }, {
    key: "close",
    value: function () {
      throw Error("Editor close() method unimplemented");
    }
  }, {
    key: "prepare",
    value: function (et, St, ve, Lt, ft, qe) {
      this.TD = Lt;
      this.row = et;
      this.col = St;
      this.prop = ve;
      this.originalValue = ft;
      this.cellProperties = qe;
      this.state = ed.VIRGIN;
    }
  }, {
    key: "extend",
    value: function () {
      return function (et) {
        (function Ge(Et, lt) {
          if (typeof lt != "function" && lt !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          Et.prototype = Object.create(lt && lt.prototype, {
            constructor: {
              value: Et,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(Et, "prototype", {
            writable: false
          });
          if (lt) {
            Ue(Et, lt);
          }
        })(ve, et);
        var St = function ot(Et) {
          var lt = function Oe() {
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
            var ve;
            var St = Ee(Et);
            if (lt) {
              var Lt = Ee(this).constructor;
              ve = Reflect.construct(St, arguments, Lt);
            } else {
              ve = St.apply(this, arguments);
            }
            return st(this, ve);
          };
        }(ve);
        function ve() {
          ke(this, ve);
          return St.apply(this, arguments);
        }
        return De(ve);
      }(this.constructor);
    }
  }, {
    key: "saveValue",
    value: function (et, St) {
      var Lt;
      var ft;
      var qe;
      var Me;
      var ve = this;
      if (St) {
        var ne = this.hot.getSelectedLast();
        Lt = Math.max(Math.min(ne[0], ne[2]), 0);
        ft = Math.max(Math.min(ne[1], ne[3]), 0);
        qe = Math.max(ne[0], ne[2]);
        Me = Math.max(ne[1], ne[3]);
      } else {
        var me = [this.row, this.col, null, null];
        Lt = me[0];
        ft = me[1];
        qe = me[2];
        Me = me[3];
      }
      var it = this.hot.runHooks("modifyGetCellCoords", Lt, ft);
      if (Array.isArray(it)) {
        var bt = function Pe(Et, lt) {
          return function Re(Et) {
            if (Array.isArray(Et)) {
              return Et;
            }
          }(Et) || function re(Et, lt) {
            var et = Et == null ? null : typeof Symbol !== "undefined" && Et[Symbol.iterator] || Et["@@iterator"];
            if (et != null) {
              var ft;
              var qe;
              var St = [];
              var ve = true;
              var Lt = false;
              try {
                for (et = et.call(Et); !(ve = (ft = et.next()).done) && (St.push(ft.value), !lt || St.length !== lt); ve = true);
              } catch (Me) {
                Lt = true;
                qe = Me;
              } finally {
                try {
                  if (!ve && et.return != null) {
                    et.return();
                  }
                } finally {
                  if (Lt) {
                    throw qe;
                  }
                }
              }
              return St;
            }
          }(Et, lt) || function he(Et, lt) {
            if (Et) {
              if (typeof Et == "string") {
                return pe(Et, lt);
              }
              var et = Object.prototype.toString.call(Et).slice(8, -1);
              if (et === "Object" && Et.constructor) {
                et = Et.constructor.name;
              }
              if (et === "Map" || et === "Set") {
                return Array.from(Et);
              }
              if (et === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(et)) {
                return pe(Et, lt);
              }
            }
          }(Et, lt) || function Le() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(it, 2);
        Lt = bt[0];
        ft = bt[1];
      }
      var Ze = this.hot.getShortcutManager().getContext("editor");
      var pt = {
        runOnlyIf: function () {
          return (0, Z.$K)(ve.hot.getSelected());
        },
        group: PP
      };
      if (this.isInFullEditMode()) {
        Ze.addShortcuts([{
          keys: [["ArrowUp"]],
          callback: function () {
            ve.hot.selection.transformStart(-1, 0);
          }
        }, {
          keys: [["ArrowDown"]],
          callback: function () {
            ve.hot.selection.transformStart(1, 0);
          }
        }, {
          keys: [["ArrowLeft"]],
          callback: function () {
            ve.hot.selection.transformStart(0, ve.hot.getDirectionFactor() * -1);
          }
        }, {
          keys: [["ArrowRight"]],
          callback: function () {
            ve.hot.selection.transformStart(0, ve.hot.getDirectionFactor());
          }
        }], pt);
      }
      this.hot.populateFromArray(Lt, ft, et, qe, Me, "edit");
    }
  }, {
    key: "beginEditing",
    value: function (et, St) {
      if (this.state === ed.VIRGIN) {
        var ve = this.hot;
        var Lt = ve.rowIndexMapper.getRenderableFromVisualIndex(this.row);
        var ft = ve.columnIndexMapper.getRenderableFromVisualIndex(this.col);
        ve.view.scrollViewport(ve._createCellCoords(Lt, ft));
        this.state = ed.EDITING;
        if (this.isInFullEditMode()) {
          var qe = typeof et == "string" ? et : (0, Z.Pz)(this.originalValue);
          this.setValue(qe);
        }
        this.open(St);
        this._opened = true;
        this.focus();
        ve.view.render();
        ve.runHooks("afterBeginEditing", this.row, this.col);
      }
    }
  }, {
    key: "finishEditing",
    value: function (et, St, ve) {
      var ft;
      var Lt = this;
      if (ve) {
        var qe = this._closeCallback;
        this._closeCallback = function (it) {
          if (qe) {
            qe(it);
          }
          ve(it);
          Lt.hot.view.render();
        };
      }
      if (!this.isWaiting()) {
        var ne = this.hot.getShortcutManager().getContext("editor");
        ne.removeShortcutsByGroup(PP);
        ne.removeShortcutsByGroup(le.HJ);
        if (this.state === ed.VIRGIN) {
          this.hot._registerTimeout(function () {
            Lt._fireCallbacks(true);
          });
          return;
        }
        if (this.state === ed.EDITING) {
          if (et) {
            this.cancelChanges();
            this.hot.view.render();
            return;
          }
          var me = this.getValue();
          ft = this.cellProperties.trimWhitespace ? [[typeof me == "string" ? String.prototype.trim.call(me || "") : me]] : [[me]];
          this.state = ed.WAITING;
          this.saveValue(ft, St);
          if (this.hot.getCellValidator(this.cellProperties)) {
            this.hot.addHookOnce("postAfterValidate", function (it) {
              Lt.state = ed.FINISHED;
              Lt.discardEditor(it);
            });
          } else {
            this.state = ed.FINISHED;
            this.discardEditor(true);
          }
        }
      }
    }
  }, {
    key: "cancelChanges",
    value: function () {
      this.state = ed.FINISHED;
      this.discardEditor();
    }
  }, {
    key: "discardEditor",
    value: function (et) {
      if (this.state === ed.FINISHED) {
        if (et === false && this.cellProperties.allowInvalid !== true) {
          this.hot.selectCell(this.row, this.col);
          this.focus();
          this.state = ed.EDITING;
          this._fireCallbacks(false);
        } else {
          this.close();
          this._opened = false;
          this._fullEditMode = false;
          this.state = ed.VIRGIN;
          this._fireCallbacks(true);
          this.hot.getShortcutManager().setActiveContextName("grid");
        }
      }
    }
  }, {
    key: "enableFullEditMode",
    value: function () {
      this._fullEditMode = true;
    }
  }, {
    key: "isInFullEditMode",
    value: function () {
      return this._fullEditMode;
    }
  }, {
    key: "isOpened",
    value: function () {
      return this._opened;
    }
  }, {
    key: "isWaiting",
    value: function () {
      return this.state === ed.WAITING;
    }
  }, {
    key: "getEditedCellRect",
    value: function () {
      var St = this.getEditedCell();
      if (St) {
        var ve = this.hot.view._wt;
        var Lt = ve.wtOverlays;
        var ft = ve.wtViewport;
        var qe = this.hot.rootWindow;
        var Me = (0, se.cv)(St);
        var ne = (0, se.iO)(St);
        var me = (0, se.cv)(this.hot.rootElement);
        var it = (0, se.iO)(this.hot.rootElement);
        var bt = Lt.topOverlay.holder;
        var Ut = Lt.inlineStartOverlay.holder;
        var Ze = bt !== qe ? bt.scrollTop : 0;
        var pt = Ut !== qe ? Ut.scrollLeft : 0;
        var yt = qe.innerWidth - me.left - it;
        var hn = (Lt.getParentOverlay(St) ?? this.hot.view._wt).wtTable;
        var Kt = hn.name;
        var on = ["master", "inline_start"].includes(Kt) ? Ze : 0;
        var Rn = ["master", "top", "bottom"].includes(Kt) ? pt : 0;
        var di = Me.top - me.top - (Me.top === me.top ? 0 : 1) - on;
        var Si = 0;
        Si = this.hot.isRtl() ? qe.innerWidth - Me.left - ne - yt - 1 + Rn : Me.left - me.left - 1 - Rn;
        if (["top", "top_inline_start_corner"].includes(Kt)) {
          di += Lt.topOverlay.getOverlayOffset();
        }
        if (["inline_start", "top_inline_start_corner"].includes(Kt)) {
          Si += Math.abs(Lt.inlineStartOverlay.getOverlayOffset());
        }
        var Zi = this.hot.hasColHeaders();
        var $i = this.hot.rowIndexMapper.getRenderableFromVisualIndex(this.row);
        var Qi = this.hot.columnIndexMapper.getRenderableFromVisualIndex(this.col);
        var Ar = this.hot.rowIndexMapper.getRenderableIndexesLength() - this.hot.view._wt.getSetting("fixedRowsBottom");
        if (Zi && $i <= 0 || $i === Ar) {
          di += 1;
        }
        if (Qi <= 0) {
          Si += 1;
        }
        var vr = ft.rowsRenderCalculator.startPosition;
        var Ur = ft.columnsRenderCalculator.startPosition;
        var Br = Math.abs(Lt.inlineStartOverlay.getScrollPosition());
        var rs = Lt.topOverlay.getScrollPosition();
        var vs = (0, se.np)(this.hot.rootDocument);
        var wo = St.offsetTop + vr - rs;
        var so = 0;
        if (this.hot.isRtl()) {
          var sa = St.offsetLeft;
          so = sa >= 0 ? hn.getWidth() - St.offsetLeft : Math.abs(sa);
          so += Ur - Br - ne;
        } else {
          so = St.offsetLeft + Ur - Br;
        }
        var js = (0, se.Dx)(this.TD, this.hot.rootWindow);
        var Tr = this.hot.isRtl() ? "borderRightWidth" : "borderLeftWidth";
        var ns = parseInt(js[Tr], 10) > 0 ? 0 : 1;
        var pr = parseInt(js.borderTopWidth, 10) > 0 ? 0 : 1;
        var Bn = (0, se.iO)(St) + ns;
        var oi = (0, se.Pb)(St) + pr;
        var fi = (0, se.do)(bt) ? vs : 0;
        var bn = (0, se.vw)(Ut) ? vs : 0;
        var pn = this.hot.view.maximumVisibleElementWidth(so) - fi + ns;
        return {
          top: di,
          start: Si,
          height: oi,
          maxHeight: Math.max(this.hot.view.maximumVisibleElementHeight(wo) - bn + pr, 23),
          width: Bn,
          maxWidth: pn
        };
      }
    }
  }, {
    key: "getEditedCellsLayerClass",
    value: function () {
      switch (this.checkEditorSection()) {
        case "inline-start":
          return "ht_clone_left ht_clone_inline_start";
        case "bottom":
          return "ht_clone_bottom";
        case "bottom-inline-start-corner":
          return "ht_clone_bottom_left_corner ht_clone_bottom_inline_start_corner";
        case "top":
          return "ht_clone_top";
        case "top-inline-start-corner":
          return "ht_clone_top_left_corner ht_clone_top_inline_start_corner";
        default:
          return "ht_clone_master";
      }
    }
  }, {
    key: "getEditedCell",
    value: function () {
      return this.hot.getCell(this.row, this.col, true);
    }
  }, {
    key: "checkEditorSection",
    value: function () {
      var et = this.hot.countRows();
      var St = "";
      if (this.row < this.hot.getSettings().fixedRowsTop) {
        St = this.col < this.hot.getSettings().fixedColumnsStart ? "top-inline-start-corner" : "top";
      } else if (this.hot.getSettings().fixedRowsBottom && this.row >= et - this.hot.getSettings().fixedRowsBottom) {
        St = this.col < this.hot.getSettings().fixedColumnsStart ? "bottom-inline-start-corner" : "bottom";
      } else if (this.col < this.hot.getSettings().fixedColumnsStart) {
        St = "inline-start";
      }
      return St;
    }
  }], [{
    key: "EDITOR_TYPE",
    get: function () {
      return "base";
    }
  }]);
  return Et;
}();
(0, X.jB)(Hf, G);