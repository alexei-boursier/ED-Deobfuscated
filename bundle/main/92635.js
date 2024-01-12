export let S = (() => {
  class k {
    constructor() {
      this._infosLoaders = {};
    }
    show(v) {
      const C = typeof v == "string" ? v : v.constructor.name;
      let w = this._infosLoaders[C];
      if (!Object.isExists(w)) {
        w = {
          nbShow: 0,
          loader$: new i.x(),
          loader: undefined
        };
        this._infosLoaders[C] = w;
      }
      if (w.nbShow === 0) {
        w.loader = w.loader$.asObservable().subscribe();
      }
      w.nbShow++;
      return w.loader;
    }
    hide(v) {
      const C = typeof v == "string" ? v : v.constructor.name;
      const w = this._infosLoaders[C];
      if (Object.isExists(w) && w.nbShow > 0) {
        w.nbShow--;
        if (w.nbShow === 0) {
          w.loader$.complete();
          w.loader.unsubscribe();
          w.loader = null;
          delete this._infosLoaders[C];
        }
      }
    }
  }
  k.ɵfac = function (v) {
    return new (v || k)();
  };
  k.ɵprov = t.Yz7({
    token: k,
    factory: k.ɵfac,
    providedIn: "root"
  });
  return k;
})();