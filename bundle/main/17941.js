import * as i from "94650";
export class oP {
  static validateIban(w) {
    if (w.value && !t.isValid(w.value)) {
      return {
        iban: {
          value: w.value
        }
      };
    } else {
      return null;
    }
  }
}
export let UP = (() => {
  class C {}
  C.ɵfac = function (S) {
    return new (S || C)();
  };
  C.ɵmod = i.oAB({
    type: C
  });
  C.ɵinj = i.cJS({});
  return C;
})();