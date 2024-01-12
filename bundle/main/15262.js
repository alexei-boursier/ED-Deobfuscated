require("73210");
import * as t from "57969";
function k(w, S, L, I, E, O, x) {
  var U = [];
  var B = [];
  if (x.className) {
    (0, t.cn)(S, x.className);
  }
  if (x.readOnly) {
    U.push(x.readOnlyCellClassName);
  }
  if (x.valid === false && x.invalidCellClassName) {
    U.push(x.invalidCellClassName);
  } else {
    B.push(x.invalidCellClassName);
  }
  if (x.wordWrap === false && x.noWordWrapClassName) {
    U.push(x.noWordWrapClassName);
  }
  if (!O && x.placeholder) {
    U.push(x.placeholderCellClassName);
  }
  (0, t.IV)(S, B);
  (0, t.cn)(S, U);
}
k.RENDERER_TYPE = "base";
export function V(w, S, L, I, E, O, x) {
  k.apply(this, [w, S, L, I, E, O, x]);
  var U = O;
  if (!U && x.placeholder) {
    U = x.placeholder;
  }
  U = (0, M.Pz)(U);
  if (x.trimWhitespace) {
    U = U.trim();
  }
  if (x.rendererTemplate) {
    (0, t.cS)(S);
    var B = w.rootDocument.createElement("TEMPLATE");
    B.setAttribute("bind", "{{}}");
    B.innerHTML = x.rendererTemplate;
    HTMLTemplateElement.decorate(B);
    B.model = w.getSourceDataAtRow(L);
    S.appendChild(B);
  } else {
    (0, t.tT)(S, U);
  }
}
V.RENDERER_TYPE = "text";