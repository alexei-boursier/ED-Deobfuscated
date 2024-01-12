export const h = function i() {
  if (typeof Symbol == "function" && Symbol.iterator) {
    return Symbol.iterator;
  } else {
    return "@@iterator";
  }
}();