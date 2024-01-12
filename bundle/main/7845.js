import * as i from "88081";
import * as t from "38587";
import * as v from "39824";
function L(j, G) {
  var se = new i.Z(j, G || {}, t.mc);
  se.init();
  return se;
}
(0, C.xN)(w.n);
L.editors = {
  BaseEditor: S.Hf
};
L.Core = function (j) {
  var G = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new i.Z(j, G, t.mc);
};
L.DefaultSettings = (0, b.Z)();
L.hooks = k.Z.getSingleton();
L.packageName = "handsontable";
L.buildDate = "25/10/2022 12:03:25";
L.version = "12.2.0";
L.languages = {
  dictionaryKeys: M,
  getLanguageDictionary: v.qG,
  getLanguagesDictionaries: v.vq,
  registerLanguageDictionary: v.MG,
  getTranslatedPhrase: v.vk
};
const I = L;
import * as E from "94650";
const O = ["container"];
const x = new Map();
const U = "The Handsontable instance bound to this component was destroyed and cannot be used properly.";
export let VY = (() => {
  class j {
    getInstance(se) {
      const W = x.get(se);
      if (W.isDestroyed) {
        console.warn(U);
        return null;
      } else {
        return W;
      }
    }
    registerInstance(se, W) {
      return x.set(se, W);
    }
    removeInstance(se) {
      return x.delete(se);
    }
  }
  j.ɵfac = function (se) {
    return new (se || j)();
  };
  j.ɵprov = E.Yz7({
    token: j,
    factory: j.ɵfac
  });
  return j;
})();
const F = Object.keys(I.DefaultSettings);
const Z = I.hooks.getRegistered();
let X = (() => {
  class j {
    mergeSettings(se) {
      const W = typeof se.settings == "object";
      const Pe = W ? se.settings : {};
      Z.concat(F).forEach(he => {
        const pe = Z.indexOf(he) > -1;
        let re;
        if (W && pe) {
          re = se.settings[he];
        }
        if (se[he] !== undefined) {
          re = se[he];
        }
        if (re !== undefined) {
          Pe[he] = typeof re == "function" && pe ? function (...Re) {
            return se._ngZone.run(() => re.apply(this, Re));
          } : re;
        }
      });
      return Pe;
    }
    prepareChanges(se) {
      const W = {};
      Object.keys(se).forEach(Le => {
        if (se.hasOwnProperty(Le)) {
          W[Le] = se[Le].currentValue;
        }
      });
      return W;
    }
  }
  j.ɵfac = function (se) {
    return new (se || j)();
  };
  j.ɵprov = E.Yz7({
    token: j,
    factory: j.ɵfac
  });
  return j;
})();
export let rN = (() => {
  class j {
    constructor(se, W, Pe) {
      this._ngZone = se;
      this._hotTableRegisterer = W;
      this._hotSettingsResolver = Pe;
      this.__hotInstance = null;
      this.columnsComponents = [];
      this.hotId = "";
    }
    get hotInstance() {
      if (!this.__hotInstance || this.__hotInstance && !this.__hotInstance.isDestroyed) {
        return this.__hotInstance;
      } else {
        this._hotTableRegisterer.removeInstance(this.hotId);
        console.warn(U);
        return null;
      }
    }
    set hotInstance(se) {
      this.__hotInstance = se;
    }
    ngAfterViewInit() {
      const se = this._hotSettingsResolver.mergeSettings(this);
      if (this.columnsComponents.length > 0) {
        const W = [];
        this.columnsComponents.forEach(Pe => {
          W.push(this._hotSettingsResolver.mergeSettings(Pe));
        });
        se.columns = W;
      }
      this._ngZone.runOutsideAngular(() => {
        this.hotInstance = new I.Core(this.container.nativeElement, se);
        if (this.hotId) {
          this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
        }
        this.hotInstance.init();
      });
    }
    ngOnChanges(se) {
      if (this.hotInstance === null) {
        return;
      }
      const W = this._hotSettingsResolver.prepareChanges(se);
      this.updateHotTable(W);
    }
    ngOnDestroy() {
      this._ngZone.runOutsideAngular(() => {
        if (this.hotInstance) {
          this.hotInstance.destroy();
        }
      });
      if (this.hotId) {
        this._hotTableRegisterer.removeInstance(this.hotId);
      }
    }
    updateHotTable(se) {
      if (!!this.hotInstance) {
        this._ngZone.runOutsideAngular(() => {
          this.hotInstance.updateSettings(se, false);
        });
      }
    }
    onAfterColumnsChange() {
      if (this.columnsComponents !== undefined && this.columnsComponents.length > 0) {
        const se = [];
        this.columnsComponents.forEach(Pe => {
          se.push(this._hotSettingsResolver.mergeSettings(Pe));
        });
        this.updateHotTable({
          columns: se
        });
      }
    }
    onAfterColumnsNumberChange() {
      const se = [];
      if (this.columnsComponents.length > 0) {
        this.columnsComponents.forEach(W => {
          se.push(this._hotSettingsResolver.mergeSettings(W));
        });
      }
      this.updateHotTable({
        columns: se
      });
    }
    addColumn(se) {
      this.columnsComponents.push(se);
      this.onAfterColumnsNumberChange();
    }
    removeColumn(se) {
      const W = this.columnsComponents.indexOf(se);
      this.columnsComponents.splice(W, 1);
      this.onAfterColumnsNumberChange();
    }
  }
  j.ɵfac = function (se) {
    return new (se || j)(E.Y36(E.R0b), E.Y36(VY), E.Y36(X));
  };
  j.ɵcmp = E.Xpm({
    type: j,
    selectors: [["hot-table"]],
    viewQuery: function (se, W) {
      if (se & 1) {
        E.Gf(O, 5);
      }
      if (se & 2) {
        let Pe;
        if (E.iGM(Pe = E.CRH())) {
          W.container = Pe.first;
        }
      }
    },
    inputs: {
      hotId: "hotId",
      settings: "settings",
      activeHeaderClassName: "activeHeaderClassName",
      allowEmpty: "allowEmpty",
      allowHtml: "allowHtml",
      allowInsertColumn: "allowInsertColumn",
      allowInsertRow: "allowInsertRow",
      allowInvalid: "allowInvalid",
      allowRemoveColumn: "allowRemoveColumn",
      allowRemoveRow: "allowRemoveRow",
      autoColumnSize: "autoColumnSize",
      autoRowSize: "autoRowSize",
      autoWrapCol: "autoWrapCol",
      autoWrapRow: "autoWrapRow",
      bindRowsWithHeaders: "bindRowsWithHeaders",
      cell: "cell",
      cells: "cells",
      checkedTemplate: "checkedTemplate",
      className: "className",
      colHeaders: "colHeaders",
      collapsibleColumns: "collapsibleColumns",
      columnHeaderHeight: "columnHeaderHeight",
      columns: "columns",
      columnSorting: "columnSorting",
      columnSummary: "columnSummary",
      colWidths: "colWidths",
      commentedCellClassName: "commentedCellClassName",
      comments: "comments",
      contextMenu: "contextMenu",
      copyable: "copyable",
      copyPaste: "copyPaste",
      correctFormat: "correctFormat",
      currentColClassName: "currentColClassName",
      currentHeaderClassName: "currentHeaderClassName",
      currentRowClassName: "currentRowClassName",
      customBorders: "customBorders",
      data: "data",
      dataSchema: "dataSchema",
      dateFormat: "dateFormat",
      defaultDate: "defaultDate",
      disableVisualSelection: "disableVisualSelection",
      dragToScroll: "dragToScroll",
      dropdownMenu: "dropdownMenu",
      editor: "editor",
      enterBeginsEditing: "enterBeginsEditing",
      enterMoves: "enterMoves",
      fillHandle: "fillHandle",
      filter: "filter",
      filteringCaseSensitive: "filteringCaseSensitive",
      filters: "filters",
      fixedColumnsLeft: "fixedColumnsLeft",
      fixedColumnsStart: "fixedColumnsStart",
      fixedRowsBottom: "fixedRowsBottom",
      fixedRowsTop: "fixedRowsTop",
      formulas: "formulas",
      fragmentSelection: "fragmentSelection",
      height: "height",
      hiddenColumns: "hiddenColumns",
      hiddenRows: "hiddenRows",
      invalidCellClassName: "invalidCellClassName",
      label: "label",
      language: "language",
      layoutDirection: "layoutDirection",
      licenseKey: "licenseKey",
      manualColumnFreeze: "manualColumnFreeze",
      manualColumnMove: "manualColumnMove",
      manualColumnResize: "manualColumnResize",
      manualRowMove: "manualRowMove",
      manualRowResize: "manualRowResize",
      maxCols: "maxCols",
      maxRows: "maxRows",
      mergeCells: "mergeCells",
      minCols: "minCols",
      minRows: "minRows",
      minSpareCols: "minSpareCols",
      minSpareRows: "minSpareRows",
      multiColumnSorting: "multiColumnSorting",
      nestedHeaders: "nestedHeaders",
      nestedRows: "nestedRows",
      noWordWrapClassName: "noWordWrapClassName",
      numericFormat: "numericFormat",
      observeDOMVisibility: "observeDOMVisibility",
      outsideClickDeselects: "outsideClickDeselects",
      persistentState: "persistentState",
      placeholder: "placeholder",
      placeholderCellClassName: "placeholderCellClassName",
      preventOverflow: "preventOverflow",
      preventWheel: "preventWheel",
      readOnly: "readOnly",
      readOnlyCellClassName: "readOnlyCellClassName",
      renderAllRows: "renderAllRows",
      renderer: "renderer",
      rowHeaders: "rowHeaders",
      rowHeaderWidth: "rowHeaderWidth",
      rowHeights: "rowHeights",
      search: "search",
      selectionMode: "selectionMode",
      selectOptions: "selectOptions",
      skipColumnOnPaste: "skipColumnOnPaste",
      skipRowOnPaste: "skipRowOnPaste",
      sortByRelevance: "sortByRelevance",
      source: "source",
      startCols: "startCols",
      startRows: "startRows",
      stretchH: "stretchH",
      strict: "strict",
      tableClassName: "tableClassName",
      tabMoves: "tabMoves",
      title: "title",
      trimDropdown: "trimDropdown",
      trimRows: "trimRows",
      trimWhitespace: "trimWhitespace",
      type: "type",
      uncheckedTemplate: "uncheckedTemplate",
      undo: "undo",
      validator: "validator",
      viewportColumnRenderingOffset: "viewportColumnRenderingOffset",
      viewportRowRenderingOffset: "viewportRowRenderingOffset",
      visibleRows: "visibleRows",
      width: "width",
      wordWrap: "wordWrap",
      afterAddChild: "afterAddChild",
      afterAutofill: "afterAutofill",
      afterBeginEditing: "afterBeginEditing",
      afterCellMetaReset: "afterCellMetaReset",
      afterChange: "afterChange",
      afterChangesObserved: "afterChangesObserved",
      afterColumnCollapse: "afterColumnCollapse",
      afterColumnExpand: "afterColumnExpand",
      afterColumnMove: "afterColumnMove",
      afterColumnResize: "afterColumnResize",
      afterColumnSort: "afterColumnSort",
      afterContextMenuDefaultOptions: "afterContextMenuDefaultOptions",
      afterContextMenuHide: "afterContextMenuHide",
      afterContextMenuShow: "afterContextMenuShow",
      afterCopy: "afterCopy",
      afterCopyLimit: "afterCopyLimit",
      afterCreateCol: "afterCreateCol",
      afterCreateRow: "afterCreateRow",
      afterCut: "afterCut",
      afterDeselect: "afterDeselect",
      afterDestroy: "afterDestroy",
      afterDetachChild: "afterDetachChild",
      afterDocumentKeyDown: "afterDocumentKeyDown",
      afterDrawSelection: "afterDrawSelection",
      afterDropdownMenuDefaultOptions: "afterDropdownMenuDefaultOptions",
      afterDropdownMenuHide: "afterDropdownMenuHide",
      afterDropdownMenuShow: "afterDropdownMenuShow",
      afterFilter: "afterFilter",
      afterGetCellMeta: "afterGetCellMeta",
      afterGetColHeader: "afterGetColHeader",
      afterGetColumnHeaderRenderers: "afterGetColumnHeaderRenderers",
      afterGetRowHeader: "afterGetRowHeader",
      afterGetRowHeaderRenderers: "afterGetRowHeaderRenderers",
      afterHideColumns: "afterHideColumns",
      afterHideRows: "afterHideRows",
      afterInit: "afterInit",
      afterLanguageChange: "afterLanguageChange",
      afterListen: "afterListen",
      afterLoadData: "afterLoadData",
      afterMergeCells: "afterMergeCells",
      afterModifyTransformEnd: "afterModifyTransformEnd",
      afterModifyTransformStart: "afterModifyTransformStart",
      afterMomentumScroll: "afterMomentumScroll",
      afterOnCellContextMenu: "afterOnCellContextMenu",
      afterOnCellCornerDblClick: "afterOnCellCornerDblClick",
      afterOnCellCornerMouseDown: "afterOnCellCornerMouseDown",
      afterOnCellMouseDown: "afterOnCellMouseDown",
      afterOnCellMouseOut: "afterOnCellMouseOut",
      afterOnCellMouseOver: "afterOnCellMouseOver",
      afterOnCellMouseUp: "afterOnCellMouseUp",
      afterPaste: "afterPaste",
      afterPluginsInitialized: "afterPluginsInitialized",
      afterRedo: "afterRedo",
      afterRedoStackChange: "afterRedoStackChange",
      afterRefreshDimensions: "afterRefreshDimensions",
      afterRemoveCellMeta: "afterRemoveCellMeta",
      afterRemoveCol: "afterRemoveCol",
      afterRemoveRow: "afterRemoveRow",
      afterRender: "afterRender",
      afterRenderer: "afterRenderer",
      afterRowMove: "afterRowMove",
      afterRowResize: "afterRowResize",
      afterScrollHorizontally: "afterScrollHorizontally",
      afterScrollVertically: "afterScrollVertically",
      afterSelection: "afterSelection",
      afterSelectionByProp: "afterSelectionByProp",
      afterSelectionEnd: "afterSelectionEnd",
      afterSelectionEndByProp: "afterSelectionEndByProp",
      afterSetCellMeta: "afterSetCellMeta",
      afterSetDataAtCell: "afterSetDataAtCell",
      afterSetDataAtRowProp: "afterSetDataAtRowProp",
      afterSetSourceDataAtCell: "afterSetSourceDataAtCell",
      afterTrimRow: "afterTrimRow",
      afterUndo: "afterUndo",
      afterUndoStackChange: "afterUndoStackChange",
      afterUnhideColumns: "afterUnhideColumns",
      afterUnhideRows: "afterUnhideRows",
      afterUnlisten: "afterUnlisten",
      afterUnmergeCells: "afterUnmergeCells",
      afterUntrimRow: "afterUntrimRow",
      afterUpdateSettings: "afterUpdateSettings",
      afterValidate: "afterValidate",
      afterViewportColumnCalculatorOverride: "afterViewportColumnCalculatorOverride",
      afterViewportRowCalculatorOverride: "afterViewportRowCalculatorOverride",
      afterViewRender: "afterViewRender",
      beforeAddChild: "beforeAddChild",
      beforeAutofill: "beforeAutofill",
      beforeAutofillInsidePopulate: "beforeAutofillInsidePopulate",
      beforeCellAlignment: "beforeCellAlignment",
      beforeChange: "beforeChange",
      beforeChangeRender: "beforeChangeRender",
      beforeColumnCollapse: "beforeColumnCollapse",
      beforeColumnExpand: "beforeColumnExpand",
      beforeColumnMove: "beforeColumnMove",
      beforeColumnResize: "beforeColumnResize",
      beforeColumnSort: "beforeColumnSort",
      beforeContextMenuSetItems: "beforeContextMenuSetItems",
      beforeContextMenuShow: "beforeContextMenuShow",
      beforeCopy: "beforeCopy",
      beforeCreateCol: "beforeCreateCol",
      beforeCreateRow: "beforeCreateRow",
      beforeCut: "beforeCut",
      beforeDetachChild: "beforeDetachChild",
      beforeDrawBorders: "beforeDrawBorders",
      beforeDropdownMenuSetItems: "beforeDropdownMenuSetItems",
      beforeDropdownMenuShow: "beforeDropdownMenuShow",
      beforeFilter: "beforeFilter",
      beforeGetCellMeta: "beforeGetCellMeta",
      beforeHideColumns: "beforeHideColumns",
      beforeHideRows: "beforeHideRows",
      beforeInit: "beforeInit",
      beforeInitWalkontable: "beforeInitWalkontable",
      beforeKeyDown: "beforeKeyDown",
      beforeLanguageChange: "beforeLanguageChange",
      beforeLoadData: "beforeLoadData",
      beforeMergeCells: "beforeMergeCells",
      beforeOnCellContextMenu: "beforeOnCellContextMenu",
      beforeOnCellMouseDown: "beforeOnCellMouseDown",
      beforeOnCellMouseOut: "beforeOnCellMouseOut",
      beforeOnCellMouseOver: "beforeOnCellMouseOver",
      beforeOnCellMouseUp: "beforeOnCellMouseUp",
      beforePaste: "beforePaste",
      beforeRedo: "beforeRedo",
      beforeRedoStackChange: "beforeRedoStackChange",
      beforeRefreshDimensions: "beforeRefreshDimensions",
      beforeRemoveCellClassNames: "beforeRemoveCellClassNames",
      beforeRemoveCellMeta: "beforeRemoveCellMeta",
      beforeRemoveCol: "beforeRemoveCol",
      beforeRemoveRow: "beforeRemoveRow",
      beforeRender: "beforeRender",
      beforeRenderer: "beforeRenderer",
      beforeRowMove: "beforeRowMove",
      beforeRowResize: "beforeRowResize",
      beforeSetCellMeta: "beforeSetCellMeta",
      beforeSetRangeEnd: "beforeSetRangeEnd",
      beforeSetRangeStart: "beforeSetRangeStart",
      beforeSetRangeStartOnly: "beforeSetRangeStartOnly",
      beforeStretchingColumnWidth: "beforeStretchingColumnWidth",
      beforeTouchScroll: "beforeTouchScroll",
      beforeTrimRow: "beforeTrimRow",
      beforeUndo: "beforeUndo",
      beforeUndoStackChange: "beforeUndoStackChange",
      beforeUnhideColumns: "beforeUnhideColumns",
      beforeUnhideRows: "beforeUnhideRows",
      beforeUnmergeCells: "beforeUnmergeCells",
      beforeUntrimRow: "beforeUntrimRow",
      beforeValidate: "beforeValidate",
      beforeValueRender: "beforeValueRender",
      beforeViewRender: "beforeViewRender",
      construct: "construct",
      init: "init",
      modifyAutoColumnSizeSeed: "modifyAutoColumnSizeSeed",
      modifyAutofillRange: "modifyAutofillRange",
      modifyColHeader: "modifyColHeader",
      modifyColumnHeaderHeight: "modifyColumnHeaderHeight",
      modifyColWidth: "modifyColWidth",
      modifyCopyableRange: "modifyCopyableRange",
      modifyData: "modifyData",
      modifyGetCellCoords: "modifyGetCellCoords",
      modifyRowData: "modifyRowData",
      modifyRowHeader: "modifyRowHeader",
      modifyRowHeaderWidth: "modifyRowHeaderWidth",
      modifyRowHeight: "modifyRowHeight",
      modifySourceData: "modifySourceData",
      modifyTransformEnd: "modifyTransformEnd",
      modifyTransformStart: "modifyTransformStart",
      persistentStateLoad: "persistentStateLoad",
      persistentStateReset: "persistentStateReset",
      persistentStateSave: "persistentStateSave"
    },
    features: [E._Bn([VY, X]), E.TTD],
    decls: 2,
    vars: 1,
    consts: [[3, "id"], ["container", ""]],
    template: function (se, W) {
      if (se & 1) {
        E._UZ(0, "div", 0, 1);
      }
      if (se & 2) {
        E.Q6J("id", W.hotId);
      }
    },
    encapsulation: 2
  });
  return j;
})();
export let KL = (() => {
  class j {
    static forRoot() {
      return {
        ngModule: j,
        providers: [VY]
      };
    }
  }
  j.ɵfac = function (se) {
    return new (se || j)();
  };
  j.ɵmod = E.oAB({
    type: j
  });
  j.ɵinj = E.cJS({});
  j.version = "12.2.0";
  return j;
})();