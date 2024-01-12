import * as i from "94079";
import * as k from "72536";
import * as M from "84130";
require("33161");
require("9653");
var S = (0, M.Z)("phraseFormatters");
var L = S.register;
var I = S.getValues;
(function E(Ue, ot) {
  L(Ue, ot);
})("pluralize", function w(Ue, ot) {
  if (Array.isArray(Ue) && Number.isInteger(ot)) {
    return Ue[ot];
  } else {
    return Ue;
  }
});
var U;
import * as x from "3392";
function B(Ue, ot, st) {
  if (ot in Ue) {
    Object.defineProperty(Ue, ot, {
      value: st,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    Ue[ot] = st;
  }
  return Ue;
  /**
         * @preserve
         * Authors: Handsoncode
         * Last updated: Nov 15, 2017
         *
         * Description: Definition file for English - United States language-country.
         */
}
B(U = {
  languageCode: "en-US"
}, x.CONTEXTMENU_ITEMS_NO_ITEMS, "No available options");
B(U, x.CONTEXTMENU_ITEMS_ROW_ABOVE, "Insert row above");
B(U, x.CONTEXTMENU_ITEMS_ROW_BELOW, "Insert row below");
B(U, x.CONTEXTMENU_ITEMS_INSERT_LEFT, "Insert column left");
B(U, x.CONTEXTMENU_ITEMS_INSERT_RIGHT, "Insert column right");
B(U, x.CONTEXTMENU_ITEMS_REMOVE_ROW, ["Remove row", "Remove rows"]);
B(U, x.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ["Remove column", "Remove columns"]);
B(U, x.CONTEXTMENU_ITEMS_UNDO, "Undo");
B(U, x.CONTEXTMENU_ITEMS_REDO, "Redo");
B(U, x.CONTEXTMENU_ITEMS_READ_ONLY, "Read only");
B(U, x.CONTEXTMENU_ITEMS_CLEAR_COLUMN, "Clear column");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT, "Alignment");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, "Left");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, "Center");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, "Right");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, "Justify");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, "Top");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, "Middle");
B(U, x.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, "Bottom");
B(U, x.CONTEXTMENU_ITEMS_FREEZE_COLUMN, "Freeze column");
B(U, x.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, "Unfreeze column");
B(U, x.CONTEXTMENU_ITEMS_BORDERS, "Borders");
B(U, x.CONTEXTMENU_ITEMS_BORDERS_TOP, "Top");
B(U, x.CONTEXTMENU_ITEMS_BORDERS_RIGHT, "Right");
B(U, x.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, "Bottom");
B(U, x.CONTEXTMENU_ITEMS_BORDERS_LEFT, "Left");
B(U, x.CONTEXTMENU_ITEMS_REMOVE_BORDERS, "Remove border(s)");
B(U, x.CONTEXTMENU_ITEMS_ADD_COMMENT, "Add comment");
B(U, x.CONTEXTMENU_ITEMS_EDIT_COMMENT, "Edit comment");
B(U, x.CONTEXTMENU_ITEMS_REMOVE_COMMENT, "Delete comment");
B(U, x.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, "Read-only comment");
B(U, x.CONTEXTMENU_ITEMS_MERGE_CELLS, "Merge cells");
B(U, x.CONTEXTMENU_ITEMS_UNMERGE_CELLS, "Unmerge cells");
B(U, x.CONTEXTMENU_ITEMS_COPY, "Copy");
B(U, x.CONTEXTMENU_ITEMS_CUT, "Cut");
B(U, x.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, "Insert child row");
B(U, x.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, "Detach from parent");
B(U, x.CONTEXTMENU_ITEMS_HIDE_COLUMN, ["Hide column", "Hide columns"]);
B(U, x.CONTEXTMENU_ITEMS_SHOW_COLUMN, ["Show column", "Show columns"]);
B(U, x.CONTEXTMENU_ITEMS_HIDE_ROW, ["Hide row", "Hide rows"]);
B(U, x.CONTEXTMENU_ITEMS_SHOW_ROW, ["Show row", "Show rows"]);
B(U, x.FILTERS_CONDITIONS_NONE, "None");
B(U, x.FILTERS_CONDITIONS_EMPTY, "Is empty");
B(U, x.FILTERS_CONDITIONS_NOT_EMPTY, "Is not empty");
B(U, x.FILTERS_CONDITIONS_EQUAL, "Is equal to");
B(U, x.FILTERS_CONDITIONS_NOT_EQUAL, "Is not equal to");
B(U, x.FILTERS_CONDITIONS_BEGINS_WITH, "Begins with");
B(U, x.FILTERS_CONDITIONS_ENDS_WITH, "Ends with");
B(U, x.FILTERS_CONDITIONS_CONTAINS, "Contains");
B(U, x.FILTERS_CONDITIONS_NOT_CONTAIN, "Does not contain");
B(U, x.FILTERS_CONDITIONS_GREATER_THAN, "Greater than");
B(U, x.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, "Greater than or equal to");
B(U, x.FILTERS_CONDITIONS_LESS_THAN, "Less than");
B(U, x.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, "Less than or equal to");
B(U, x.FILTERS_CONDITIONS_BETWEEN, "Is between");
B(U, x.FILTERS_CONDITIONS_NOT_BETWEEN, "Is not between");
B(U, x.FILTERS_CONDITIONS_AFTER, "After");
B(U, x.FILTERS_CONDITIONS_BEFORE, "Before");
B(U, x.FILTERS_CONDITIONS_TODAY, "Today");
B(U, x.FILTERS_CONDITIONS_TOMORROW, "Tomorrow");
B(U, x.FILTERS_CONDITIONS_YESTERDAY, "Yesterday");
B(U, x.FILTERS_VALUES_BLANK_CELLS, "Blank cells");
B(U, x.FILTERS_DIVS_FILTER_BY_CONDITION, "Filter by condition");
B(U, x.FILTERS_DIVS_FILTER_BY_VALUE, "Filter by value");
B(U, x.FILTERS_LABELS_CONJUNCTION, "And");
B(U, x.FILTERS_LABELS_DISJUNCTION, "Or");
B(U, x.FILTERS_BUTTONS_SELECT_ALL, "Select all");
B(U, x.FILTERS_BUTTONS_CLEAR, "Clear");
B(U, x.FILTERS_BUTTONS_OK, "OK");
B(U, x.FILTERS_BUTTONS_CANCEL, "Cancel");
B(U, x.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, "Search");
B(U, x.FILTERS_BUTTONS_PLACEHOLDER_VALUE, "Value");
B(U, x.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, "Second value");
const Z = U;
var X = Z.languageCode;
var le = (0, M.Z)("languagesDictionaries");
var fe = le.register;
var q = le.getItem;
var j = le.hasItem;
var G = le.getValues;
export function MG(Ue, ot) {
  var st = Ue;
  var rt = ot;
  if ((0, i.Kn)(Ue)) {
    st = (rt = Ue).languageCode;
  }
  (function W(Ue, ot) {
    if (Ue !== X) {
      (0, k.eb)(ot, q(X));
    }
  })(st, rt);
  fe(st, (0, i.I8)(rt));
  return (0, i.I8)(rt);
}
export function qG(Ue) {
  if (RY(Ue)) {
    return (0, i.I8)(q(Ue));
  } else {
    return null;
  }
}
export function RY(Ue) {
  return j(Ue);
}
export function vq() {
  return G();
}
export function vk(Ue, ot, st) {
  var rt = qG(Ue);
  if (rt === null) {
    return null;
  }
  var Oe = rt[ot];
  if ((0, b.o8)(Oe)) {
    return null;
  }
  var Ee = function Re(Ue, ot) {
    var st = Ue;
    (0, t.Bk)(function O() {
      return I();
    }(), function (rt) {
      st = rt(Ue, ot);
    });
    return st;
  }(Oe, st);
  if (Array.isArray(Ee)) {
    return Ee[0];
  } else {
    return Ee;
  }
}
export function gr(Ue) {
  var ot = (0, k.TH)(Ue);
  if (!RY(ot)) {
    ot = X;
    (0, k.Vn)(Ue);
  }
  return ot;
}
MG(Z);