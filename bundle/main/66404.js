require("82526");
require("41817");
require("41539");
require("32165");
require("66992");
require("78783");
require("33948");
import * as w from "6868";
function L(E) {
  return (L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (O) {
    return typeof O;
  } : function (O) {
    if (O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof O;
    }
  })(E);
}
export const Z = function () {
  return {
    _automaticallyAssignedMetaProps: {},
    activeHeaderClassName: "ht__active_highlight",
    allowEmpty: true,
    allowHtml: false,
    allowInsertColumn: true,
    allowInsertRow: true,
    allowInvalid: true,
    allowRemoveColumn: true,
    allowRemoveRow: true,
    autoColumnSize: undefined,
    autoRowSize: undefined,
    autoWrapCol: false,
    autoWrapRow: false,
    bindRowsWithHeaders: undefined,
    cell: [],
    cells: undefined,
    checkedTemplate: undefined,
    className: undefined,
    colHeaders: null,
    collapsibleColumns: undefined,
    columnHeaderHeight: undefined,
    columns: undefined,
    columnSorting: undefined,
    columnSummary: undefined,
    colWidths: undefined,
    commentedCellClassName: "htCommentCell",
    comments: false,
    contextMenu: undefined,
    copyable: true,
    copyPaste: true,
    correctFormat: false,
    currentColClassName: undefined,
    currentHeaderClassName: "ht__highlight",
    currentRowClassName: undefined,
    customBorders: false,
    data: undefined,
    dataSchema: undefined,
    dateFormat: "DD/MM/YYYY",
    datePickerConfig: undefined,
    defaultDate: undefined,
    disableVisualSelection: false,
    dragToScroll: true,
    dropdownMenu: undefined,
    editor: undefined,
    enterBeginsEditing: true,
    enterMoves: {
      col: 0,
      row: 1
    },
    fillHandle: {
      autoInsertRow: false
    },
    filter: true,
    filteringCaseSensitive: false,
    filters: undefined,
    fixedColumnsLeft: 0,
    fixedColumnsStart: 0,
    fixedRowsBottom: 0,
    fixedRowsTop: 0,
    formulas: undefined,
    fragmentSelection: false,
    height: undefined,
    hiddenColumns: undefined,
    hiddenRows: undefined,
    invalidCellClassName: "htInvalid",
    isEmptyCol: function (O) {
      var x;
      var U;
      var B;
      x = 0;
      U = this.countRows();
      for (; x < U; x++) {
        B = this.getDataAtCell(x, O);
        if ((0, w.xb)(B) === false) {
          return false;
        }
      }
      return true;
    },
    isEmptyRow: function (O) {
      var x;
      var U;
      var B;
      var F;
      x = 0;
      U = this.countCols();
      for (; x < U; x++) {
        B = this.getDataAtCell(O, x);
        if ((0, w.xb)(B) === false) {
          return L(B) === "object" && (F = this.getCellMeta(O, x), (0, S.Z1)(this.getSchema()[F.prop], B));
        }
      }
      return true;
    },
    label: undefined,
    language: "en-US",
    layoutDirection: "inherit",
    licenseKey: undefined,
    locale: "en-US",
    manualColumnFreeze: undefined,
    manualColumnMove: undefined,
    manualColumnResize: undefined,
    manualRowMove: undefined,
    manualRowResize: undefined,
    maxCols: Infinity,
    maxRows: Infinity,
    mergeCells: false,
    minCols: 0,
    minRows: 0,
    minSpareCols: 0,
    minSpareRows: 0,
    multiColumnSorting: undefined,
    nestedHeaders: undefined,
    nestedRows: undefined,
    noWordWrapClassName: "htNoWrap",
    numericFormat: undefined,
    observeDOMVisibility: true,
    outsideClickDeselects: true,
    persistentState: undefined,
    placeholder: undefined,
    placeholderCellClassName: "htPlaceholder",
    preventOverflow: false,
    preventWheel: false,
    readOnly: false,
    readOnlyCellClassName: "htDimmed",
    renderAllRows: undefined,
    renderer: undefined,
    rowHeaders: undefined,
    rowHeaderWidth: undefined,
    rowHeights: undefined,
    search: false,
    selectionMode: "multiple",
    selectOptions: undefined,
    skipColumnOnPaste: false,
    skipRowOnPaste: false,
    sortByRelevance: true,
    source: undefined,
    startCols: 5,
    startRows: 5,
    stretchH: "none",
    strict: undefined,
    tableClassName: undefined,
    tabMoves: {
      row: 0,
      col: 1
    },
    title: undefined,
    trimDropdown: true,
    trimRows: undefined,
    trimWhitespace: true,
    type: "text",
    uncheckedTemplate: undefined,
    undo: undefined,
    validator: undefined,
    viewportColumnRenderingOffset: "auto",
    viewportRowRenderingOffset: "auto",
    visibleRows: 10,
    width: undefined,
    wordWrap: true
  };
};