require("26699");
require("32023");
require("66992");
require("41539");
require("78783");
require("4129");
require("33948");
require("82526");
require("41817");
require("32165");
require("47042");
require("68309");
require("91038");
require("74916");
import * as U from "9387";
function j(Ue, ot) {
  if (ot == null || ot > Ue.length) {
    ot = Ue.length;
  }
  for (var st = 0, rt = new Array(ot); st < ot; st++) {
    rt[st] = Ue[st];
  }
  return rt;
}
function Pe(Ue, ot) {
  for (var st = 0; st < ot.length; st++) {
    var rt = ot[st];
    rt.enumerable = rt.enumerable || false;
    rt.configurable = true;
    if ("value" in rt) {
      rt.writable = true;
    }
    Object.defineProperty(Ue, rt.key, rt);
  }
}
export var HJ = "editorManager.navigation";
export var PP = "editorManager.handlingEditor";
var re = function () {
  function Ue(ot, st, rt) {
    var Oe = this;
    (function W(Ue, ot) {
      if (!(Ue instanceof ot)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, Ue);
    this.instance = ot;
    this.tableMeta = st;
    this.selection = rt;
    this.eventManager = new Z.Z(ot);
    this.destroyed = false;
    this.lock = false;
    this.activeEditor = undefined;
    this.cellProperties = undefined;
    this.instance.getShortcutManager().addContext("editor");
    this.registerShortcuts();
    this.instance.addHook("afterDocumentKeyDown", function (ke) {
      return Oe.onAfterDocumentKeyDown(ke);
    });
    this.eventManager.addEventListener(this.instance.rootDocument.documentElement, "compositionstart", function (ke) {
      if (!Oe.destroyed && Oe.instance.isListening()) {
        Oe.openEditor("", ke);
      }
    });
    this.instance.view._wt.update("onCellDblClick", function (ke, Be, De) {
      return Oe.onCellDblClick(ke, Be, De);
    });
  }
  (function Le(Ue, ot, st) {
    if (ot) {
      Pe(Ue.prototype, ot);
    }
    if (st) {
      Pe(Ue, st);
    }
    Object.defineProperty(Ue, "prototype", {
      writable: false
    });
  })(Ue, [{
    key: "registerShortcuts",
    value: function () {
      var st = this;
      var rt = this.instance.getShortcutManager();
      var Oe = rt.getContext("grid");
      var Ee = rt.getContext("editor");
      var ke = {
        group: PP
      };
      Ee.addShortcuts([{
        keys: [["Enter"], ["Enter", "Shift"], ["Enter", "Control/Meta"], ["Enter", "Control/Meta", "Shift"]],
        callback: function (De, Qe) {
          st.closeEditorAndSaveChanges(rt.isCtrlPressed());
          st.moveSelectionAfterEnter(Qe.includes("shift"));
        }
      }, {
        keys: [["Escape"], ["Escape", "Control/Meta"]],
        callback: function () {
          st.closeEditorAndRestoreOriginalValue(rt.isCtrlPressed());
          st.activeEditor.focus();
        }
      }], ke);
      Oe.addShortcuts([{
        keys: [["F2"]],
        callback: function (De) {
          st.openEditor(null, De, true);
        }
      }, {
        keys: [["Backspace"], ["Delete"]],
        callback: function () {
          st.instance.emptySelectedCells();
          st.prepareEditor();
        }
      }, {
        keys: [["Enter"], ["Enter", "Shift"]],
        callback: function (De, Qe) {
          if (st.instance.getSettings().enterBeginsEditing) {
            if (st.cellProperties.readOnly) {
              st.moveSelectionAfterEnter();
            } else {
              st.openEditor(null, De, true);
            }
          } else {
            st.moveSelectionAfterEnter(Qe.includes("shift"));
          }
          (0, B.mM)(De);
        }
      }], ke);
    }
  }, {
    key: "lockEditor",
    value: function () {
      this.lock = true;
    }
  }, {
    key: "unlockEditor",
    value: function () {
      this.lock = false;
    }
  }, {
    key: "destroyEditor",
    value: function (st) {
      if (!this.lock) {
        this.closeEditor(st);
      }
    }
  }, {
    key: "getActiveEditor",
    value: function () {
      return this.activeEditor;
    }
  }, {
    key: "prepareEditor",
    value: function () {
      var st = this;
      if (!this.lock) {
        if (this.activeEditor && this.activeEditor.isWaiting()) {
          this.closeEditor(false, false, function (et) {
            if (et) {
              st.prepareEditor();
            }
          });
          return;
        }
        var rt = this.instance.getSelectedRangeLast().highlight;
        var Oe = rt.row;
        var Ee = rt.col;
        var ke = this.instance.runHooks("modifyGetCellCoords", Oe, Ee);
        var Be = Oe;
        var De = Ee;
        if (Array.isArray(ke)) {
          var Qe = function le(Ue, ot) {
            return function se(Ue) {
              if (Array.isArray(Ue)) {
                return Ue;
              }
            }(Ue) || function G(Ue, ot) {
              var st = Ue == null ? null : typeof Symbol !== "undefined" && Ue[Symbol.iterator] || Ue["@@iterator"];
              if (st != null) {
                var ke;
                var Be;
                var rt = [];
                var Oe = true;
                var Ee = false;
                try {
                  for (st = st.call(Ue); !(Oe = (ke = st.next()).done) && (rt.push(ke.value), !ot || rt.length !== ot); Oe = true);
                } catch (De) {
                  Ee = true;
                  Be = De;
                } finally {
                  try {
                    if (!Oe && st.return != null) {
                      st.return();
                    }
                  } finally {
                    if (Ee) {
                      throw Be;
                    }
                  }
                }
                return rt;
              }
            }(Ue, ot) || function q(Ue, ot) {
              if (Ue) {
                if (typeof Ue == "string") {
                  return j(Ue, ot);
                }
                var st = Object.prototype.toString.call(Ue).slice(8, -1);
                if (st === "Object" && Ue.constructor) {
                  st = Ue.constructor.name;
                }
                if (st === "Map" || st === "Set") {
                  return Array.from(Ue);
                }
                if (st === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(st)) {
                  return j(Ue, ot);
                }
              }
            }(Ue, ot) || function fe() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(ke, 2);
          Be = Qe[0];
          De = Qe[1];
        }
        this.cellProperties = this.instance.getCellMeta(Be, De);
        var It = this.instance.rootDocument.activeElement;
        if (It) {
          It.blur();
        }
        if (!this.isCellEditable()) {
          this.clearActiveEditor();
          return;
        }
        var Yt = this.instance.getCell(Oe, Ee, true);
        if (Yt) {
          var Dn = this.instance.getCellEditor(this.cellProperties);
          var Et = this.instance.colToProp(De);
          var lt = this.instance.getSourceDataAtCell(this.instance.toPhysicalRow(Be), De);
          this.activeEditor = (0, F.Jq)(Dn, this.instance);
          this.activeEditor.prepare(Oe, Ee, Et, Yt, lt, this.cellProperties);
        }
      }
    }
  }, {
    key: "isEditorOpened",
    value: function () {
      return this.activeEditor && this.activeEditor.isOpened();
    }
  }, {
    key: "openEditor",
    value: function (st, rt) {
      var Oe = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      if (this.isCellEditable()) {
        if (!this.activeEditor) {
          var Ee = this.instance.getSelectedRangeLast().highlight;
          var ke = Ee.row;
          var Be = Ee.col;
          var De = this.instance.rowIndexMapper.getRenderableFromVisualIndex(ke);
          var Qe = this.instance.columnIndexMapper.getRenderableFromVisualIndex(Be);
          this.instance.view.scrollViewport(this.instance._createCellCoords(De, Qe));
          this.instance.view.render();
          this.prepareEditor();
        }
        if (this.activeEditor) {
          if (Oe) {
            this.activeEditor.enableFullEditMode();
          }
          this.activeEditor.beginEditing(st, rt);
        }
      } else {
        this.clearActiveEditor();
      }
    }
  }, {
    key: "closeEditor",
    value: function (st, rt, Oe) {
      if (this.activeEditor) {
        this.activeEditor.finishEditing(st, rt, Oe);
      } else if (Oe) {
        Oe(false);
      }
    }
  }, {
    key: "closeEditorAndSaveChanges",
    value: function (st) {
      this.closeEditor(false, st);
    }
  }, {
    key: "closeEditorAndRestoreOriginalValue",
    value: function (st) {
      this.closeEditor(true, st);
    }
  }, {
    key: "clearActiveEditor",
    value: function () {
      this.activeEditor = undefined;
    }
  }, {
    key: "isCellEditable",
    value: function () {
      var st = this.instance.getCellEditor(this.cellProperties);
      var rt = this.instance.getSelectedRangeLast().highlight;
      var Ee = rt.col;
      var ke = this.instance;
      var De = ke.columnIndexMapper;
      var Qe = ke.rowIndexMapper.isHidden(this.instance.toPhysicalRow(rt.row)) || De.isHidden(this.instance.toPhysicalColumn(Ee));
      return !this.cellProperties.readOnly && !!st && !Qe;
    }
  }, {
    key: "moveSelectionAfterEnter",
    value: function (st) {
      var rt = typeof this.tableMeta.enterMoves == "function" ? this.tableMeta.enterMoves(event) : this.tableMeta.enterMoves;
      if (st) {
        this.selection.transformStart(-rt.row, -rt.col);
      } else {
        this.selection.transformStart(rt.row, rt.col, true);
      }
    }
  }, {
    key: "onAfterDocumentKeyDown",
    value: function (st) {
      var rt = this;
      if (this.instance.isListening()) {
        var Oe = st.keyCode;
        if (this.selection.isSelected()) {
          var Ee = (st.ctrlKey || st.metaKey) && !st.altKey;
          if ((!this.activeEditor || !!this.activeEditor && !this.activeEditor.isWaiting()) && !(0, U.DC)(Oe) && !(0, U.T2)(Oe) && !Ee && !this.isEditorOpened()) {
            this.instance.getShortcutManager().getContext("editor").addShortcuts([{
              keys: [["ArrowUp"]],
              callback: function () {
                rt.instance.selection.transformStart(-1, 0);
              }
            }, {
              keys: [["ArrowDown"]],
              callback: function () {
                rt.instance.selection.transformStart(1, 0);
              }
            }, {
              keys: [["ArrowLeft"]],
              callback: function () {
                rt.instance.selection.transformStart(0, rt.instance.getDirectionFactor() * -1);
              }
            }, {
              keys: [["ArrowRight"]],
              callback: function () {
                rt.instance.selection.transformStart(0, rt.instance.getDirectionFactor());
              }
            }], {
              runOnlyIf: function () {
                return (0, X.$K)(rt.instance.getSelected());
              },
              group: HJ
            });
            this.openEditor("", st);
          }
        }
      }
    }
  }, {
    key: "onCellDblClick",
    value: function (st, rt, Oe) {
      if (Oe.nodeName === "TD") {
        this.openEditor(null, st, true);
      }
    }
  }, {
    key: "destroy",
    value: function () {
      this.destroyed = true;
      this.eventManager.destroy();
    }
  }]);
  return Ue;
}();
var Re = new WeakMap();
re.getInstance = function (Ue, ot, st) {
  var rt = Re.get(Ue);
  if (!rt) {
    rt = new re(Ue, ot, st);
    Re.set(Ue, rt);
  }
  return rt;
};
export const ZP = re;