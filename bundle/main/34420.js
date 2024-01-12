import * as i from "94650";
export let v = (() => {
  class k {
    constructor(v) {
      this.tab = v;
      this.tabOrder = "0";
    }
    ngOnChanges() {
      this.tab.__tabOrder = +this.tabOrder;
      this.tab.tabset.tabs.sort((v, C) => v.__tabOrder - C.__tabOrder);
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)(i.Y36(t.wW));
  };
  k.ɵdir = i.lG2({
    type: k,
    selectors: [["", "edTabOrder", ""]],
    inputs: {
      tabOrder: ["edTabOrder", "tabOrder"]
    },
    features: [i.TTD]
  });
  return k;
})();