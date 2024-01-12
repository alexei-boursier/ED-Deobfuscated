var M = (0, i.Z)("cellTypes");
var v = M.register;
var C = M.getItem;
export var V1 = M.hasItem;
export function DA(O) {
  if (!V1(O)) {
    throw Error(`You declared cell type "${O}" as a string that is not mapped to a known object.
                 Cell type must be an object or a string mapped to an object registered by
                 "Handsontable.cellTypes.registerCellType" method`);
  }
  return C(O);
}
export function xN(O, x) {
  if (typeof O != "string") {
    O = (x = O).CELL_TYPE;
  }
  var B = x.editor;
  var F = x.renderer;
  var Z = x.validator;
  if (B) {
    (0, t.qm)(O, B);
  }
  if (F) {
    (0, b.zn)(O, F);
  }
  if (Z) {
    (0, k.Ie)(O, Z);
  }
  v(O, x);
}