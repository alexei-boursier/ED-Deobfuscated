require("47042");
require("43371");
require("66992");
require("51532");
require("41539");
require("78783");
require("33948");
require("82772");
require("40561");
var B;
import * as L from "67219";
import * as O from "35873";
import * as U from "75588";
function _Z(he, pe) {
  for (var re = 0; re < pe.length; re++) {
    var Re = pe[re];
    Re.enumerable = Re.enumerable || false;
    Re.configurable = true;
    if ("value" in Re) {
      Re.writable = true;
    }
    Object.defineProperty(he, Re.key, Re);
  }
}
var fe = ["afterCellMetaReset", "afterChange", "afterContextMenuDefaultOptions", "beforeContextMenuSetItems", "afterDropdownMenuDefaultOptions", "beforeDropdownMenuSetItems", "afterContextMenuHide", "beforeContextMenuShow", "afterContextMenuShow", "afterCopyLimit", "beforeCreateCol", "afterCreateCol", "beforeCreateRow", "afterCreateRow", "afterDeselect", "afterDestroy", "afterDocumentKeyDown", "afterDrawSelection", "beforeRemoveCellClassNames", "afterGetCellMeta", "afterGetColHeader", "afterGetRowHeader", "afterInit", "afterLoadData", "afterUpdateData", "afterMomentumScroll", "afterOnCellCornerMouseDown", "afterOnCellCornerDblClick", "afterOnCellMouseDown", "afterOnCellMouseUp", "afterOnCellContextMenu", "afterOnCellMouseOver", "afterOnCellMouseOut", "afterRemoveCol", "afterRemoveRow", "beforeRenderer", "afterRenderer", "afterScrollHorizontally", "afterScrollVertically", "afterSelection", "afterSelectionByProp", "afterSelectionEnd", "afterSelectionEndByProp", "afterSetCellMeta", "afterRemoveCellMeta", "afterSetDataAtCell", "afterSetDataAtRowProp", "afterSetSourceDataAtCell", "afterUpdateSettings", "afterValidate", "beforeLanguageChange", "afterLanguageChange", "beforeAutofill", "afterAutofill", "beforeCellAlignment", "beforeChange", "beforeChangeRender", "beforeDrawBorders", "beforeGetCellMeta", "beforeRemoveCellMeta", "beforeInit", "beforeInitWalkontable", "beforeLoadData", "beforeUpdateData", "beforeKeyDown", "beforeOnCellMouseDown", "beforeOnCellMouseUp", "beforeOnCellContextMenu", "beforeOnCellMouseOver", "beforeOnCellMouseOut", "beforeRemoveCol", "beforeRemoveRow", "beforeViewRender", "afterViewRender", "beforeRender", "afterRender", "beforeSetCellMeta", "beforeSetRangeStartOnly", "beforeSetRangeStart", "beforeSetRangeEnd", "beforeTouchScroll", "beforeValidate", "beforeValueRender", "construct", "init", "modifyColHeader", "modifyColWidth", "modifyRowHeader", "modifyRowHeight", "modifyData", "modifySourceData", "modifyRowData", "modifyGetCellCoords", "beforeHighlightingRowHeader", "beforeHighlightingColumnHeader", "persistentStateLoad", "persistentStateReset", "persistentStateSave", "beforeColumnSort", "afterColumnSort", "modifyAutofillRange", "modifyCopyableRange", "beforeCut", "afterCut", "beforeCopy", "afterCopy", "beforePaste", "afterPaste", "beforeColumnFreeze", "afterColumnFreeze", "beforeColumnMove", "afterColumnMove", "beforeColumnUnfreeze", "afterColumnUnfreeze", "beforeRowMove", "afterRowMove", "beforeColumnResize", "afterColumnResize", "beforeRowResize", "afterRowResize", "afterGetColumnHeaderRenderers", "afterGetRowHeaderRenderers", "beforeStretchingColumnWidth", "beforeFilter", "afterFilter", "afterFormulasValuesUpdate", "afterNamedExpressionAdded", "afterNamedExpressionRemoved", "afterSheetAdded", "afterSheetRenamed", "afterSheetRemoved", "modifyColumnHeaderHeight", "beforeUndo", "beforeUndoStackChange", "afterUndo", "afterUndoStackChange", "beforeRedo", "beforeRedoStackChange", "afterRedo", "afterRedoStackChange", "modifyRowHeaderWidth", "beforeAutofillInsidePopulate", "modifyTransformStart", "modifyTransformEnd", "afterModifyTransformStart", "afterModifyTransformEnd", "afterViewportRowCalculatorOverride", "afterViewportColumnCalculatorOverride", "afterPluginsInitialized", "beforeHideRows", "afterHideRows", "beforeUnhideRows", "afterUnhideRows", "beforeHideColumns", "afterHideColumns", "beforeUnhideColumns", "afterUnhideColumns", "beforeTrimRow", "afterTrimRow", "beforeUntrimRow", "afterUntrimRow", "beforeDropdownMenuShow", "afterDropdownMenuShow", "afterDropdownMenuHide", "beforeAddChild", "afterAddChild", "beforeDetachChild", "afterDetachChild", "afterBeginEditing", "beforeMergeCells", "afterMergeCells", "beforeUnmergeCells", "afterUnmergeCells", "afterListen", "afterUnlisten", "afterRefreshDimensions", "beforeRefreshDimensions", "beforeColumnCollapse", "afterColumnCollapse", "beforeColumnExpand", "afterColumnExpand", "modifyAutoColumnSizeSeed"];
var q = (0, x.e)(B ||= function le(he, pe) {
  pe ||= he.slice(0);
  return Object.freeze(Object.defineProperties(he, {
    raw: {
      value: Object.freeze(pe)
    }
  }));
}(["The plugin hook \"[hookName]\" was removed in Handsontable [removedInVersion]. \n  Please consult release notes https://github.com/handsontable/handsontable/releases/tag/[removedInVersion] to \n  learn about the migration path."], ["The plugin hook \"[hookName]\" was removed in Handsontable [removedInVersion].\\x20\n  Please consult release notes https://github.com/handsontable/handsontable/releases/tag/[removedInVersion] to\\x20\n  learn about the migration path."]));
var j = new Map([["modifyRow", "8.0.0"], ["modifyCol", "8.0.0"], ["unmodifyRow", "8.0.0"], ["unmodifyCol", "8.0.0"], ["skipLengthCache", "8.0.0"], ["hiddenColumn", "8.0.0"], ["hiddenRow", "8.0.0"]]);
var G = new Map([["beforeAutofillInsidePopulate", "The plugin hook \"beforeAutofillInsidePopulate\" is deprecated and will be removed in the next major release."]]);
var se = function () {
  function he() {
    (function F(he, pe) {
      if (!(he instanceof pe)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, he);
    this.globalBucket = this.createEmptyBucket();
  }
  (function X(he, pe, re) {
    if (pe) {
      _Z(he.prototype, pe);
    }
    if (re) {
      _Z(he, re);
    }
    Object.defineProperty(he, "prototype", {
      writable: false
    });
  })(he, [{
    key: "createEmptyBucket",
    value: function () {
      var re = Object.create(null);
      (0, L.Bk)(fe, function (Re) {
        return re[Re] = [];
      });
      return re;
    }
  }, {
    key: "getBucket",
    value: function () {
      var re = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (re) {
        re.pluginHookBucket ||= this.createEmptyBucket();
        return re.pluginHookBucket;
      } else {
        return this.globalBucket;
      }
    }
  }, {
    key: "add",
    value: function (re, Re) {
      var Ge = this;
      var Ue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (Array.isArray(Re)) {
        (0, L.Bk)(Re, function (rt) {
          return Ge.add(re, rt, Ue);
        });
      } else {
        if (j.has(re)) {
          (0, O.ZK)((0, E.ng)(q, {
            hookName: re,
            removedInVersion: j.get(re)
          }));
        }
        if (G.has(re)) {
          (0, O.ZK)(G.get(re));
        }
        var ot = this.getBucket(Ue);
        if (typeof ot[re] === "undefined") {
          this.register(re);
          ot[re] = [];
        }
        Re.skip = false;
        if (ot[re].indexOf(Re) === -1) {
          var st = false;
          if (Re.initialHook) {
            (0, L.Bk)(ot[re], function (rt, Oe) {
              if (rt.initialHook) {
                ot[re][Oe] = Re;
                st = true;
                return false;
              }
            });
          }
          if (!st) {
            ot[re].push(Re);
          }
        }
      }
      return this;
    }
  }, {
    key: "once",
    value: function (re, Re) {
      var Ge = this;
      var Ue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (Array.isArray(Re)) {
        (0, L.Bk)(Re, function (ot) {
          return Ge.once(re, ot, Ue);
        });
      } else {
        Re.runOnce = true;
        this.add(re, Re, Ue);
      }
    }
  }, {
    key: "remove",
    value: function (re, Re) {
      var Ge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var Ue = this.getBucket(Ge);
      return typeof Ue[re] !== "undefined" && Ue[re].indexOf(Re) >= 0 && (Re.skip = true, true);
    }
  }, {
    key: "has",
    value: function (re) {
      var Re = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var Ge = this.getBucket(Re);
      return Ge[re] !== undefined && !!Ge[re].length;
    }
  }, {
    key: "run",
    value: function (re, Re, Ge, Ue, ot, st, rt, Oe) {
      var Ee = this.globalBucket[Re];
      var ke = Ee ? Ee.length : 0;
      var Be = 0;
      if (ke) {
        for (; Be < ke;) {
          if (Ee[Be] && !Ee[Be].skip) {
            var De = (0, U.$Z)(Ee[Be], re, Ge, Ue, ot, st, rt, Oe);
            if (De !== undefined) {
              Ge = De;
            }
            if (Ee[Be] && Ee[Be].runOnce) {
              this.remove(Re, Ee[Be]);
            }
            Be += 1;
          } else {
            Be += 1;
          }
        }
      }
      var Qe = this.getBucket(re)[Re];
      var It = Qe ? Qe.length : 0;
      var Yt = 0;
      if (It) {
        for (; Yt < It;) {
          if (Qe[Yt] && !Qe[Yt].skip) {
            var Dn = (0, U.$Z)(Qe[Yt], re, Ge, Ue, ot, st, rt, Oe);
            if (Dn !== undefined) {
              Ge = Dn;
            }
            if (Qe[Yt] && Qe[Yt].runOnce) {
              this.remove(Re, Qe[Yt], re);
            }
            Yt += 1;
          } else {
            Yt += 1;
          }
        }
      }
      return Ge;
    }
  }, {
    key: "destroy",
    value: function () {
      var re = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      (0, I._l)(this.getBucket(re), function (Re, Ge, Ue) {
        return Ue[Ge].length = 0;
      });
    }
  }, {
    key: "register",
    value: function (re) {
      if (!this.isRegistered(re)) {
        fe.push(re);
      }
    }
  }, {
    key: "deregister",
    value: function (re) {
      if (this.isRegistered(re)) {
        fe.splice(fe.indexOf(re), 1);
      }
    }
  }, {
    key: "isDeprecated",
    value: function (re) {
      return G.has(re) || j.has(re);
    }
  }, {
    key: "isRegistered",
    value: function (re) {
      return fe.indexOf(re) >= 0;
    }
  }, {
    key: "getRegistered",
    value: function () {
      return fe;
    }
  }], [{
    key: "getSingleton",
    value: function () {
      return function Pe() {
        return W;
      }();
    }
  }]);
  return he;
}();
var W = new se();
export const Z = se;