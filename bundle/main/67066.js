__webpack_module__.exports = function () {
  var t = i(this);
  var b = "";
  if (t.hasIndices) {
    b += "d";
  }
  if (t.global) {
    b += "g";
  }
  if (t.ignoreCase) {
    b += "i";
  }
  if (t.multiline) {
    b += "m";
  }
  if (t.dotAll) {
    b += "s";
  }
  if (t.unicode) {
    b += "u";
  }
  if (t.unicodeSets) {
    b += "v";
  }
  if (t.sticky) {
    b += "y";
  }
  return b;
};