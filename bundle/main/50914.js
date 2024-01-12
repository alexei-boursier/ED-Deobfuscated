var k = {
  _localHooks: Object.create(null),
  addLocalHook: function (C, w) {
    this._localHooks[C] ||= [];
    this._localHooks[C].push(w);
    return this;
  },
  runLocalHooks: function (C, w, S, L, I, E, O) {
    if (this._localHooks[C]) {
      for (var x = this._localHooks[C].length, U = 0; U < x; U++) {
        (0, t.$Z)(this._localHooks[C][U], this, w, S, L, I, E, O);
      }
    }
  },
  clearLocalHooks: function () {
    this._localHooks = {};
    return this;
  }
};
(0, i.jW)(k, "MIXIN_NAME", "localHooks", {
  writable: false,
  enumerable: false
});
export const Z = k;