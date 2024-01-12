/**
       * @license Angular v14.2.11
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
export class _j {}
export class LC {}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const l3 = "*";
export function X$(fe, q) {
  return {
    type: 7,
    name: fe,
    definitions: q,
    options: {}
  };
}
export function jt(fe, q = null) {
  return {
    type: 4,
    styles: q,
    timings: fe
  };
}
export function vP(fe, q = null) {
  return {
    type: 2,
    steps: fe,
    options: q
  };
}
export function oB(fe) {
  return {
    type: 6,
    styles: fe,
    offset: null
  };
}
export function SB(fe, q, j) {
  return {
    type: 0,
    name: fe,
    styles: q,
    options: j
  };
}
export function eR(fe, q, j = null) {
  return {
    type: 1,
    expr: fe,
    animation: q,
    options: j
  };
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function F(fe) {
  Promise.resolve().then(fe);
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class ZN {
  constructor(q = 0, j = 0) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this._started = false;
    this._destroyed = false;
    this._finished = false;
    this._position = 0;
    this.parentPlayer = null;
    this.totalTime = q + j;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(q => q());
      this._onDoneFns = [];
    }
  }
  onStart(q) {
    this._originalOnStartFns.push(q);
    this._onStartFns.push(q);
  }
  onDone(q) {
    this._originalOnDoneFns.push(q);
    this._onDoneFns.push(q);
  }
  onDestroy(q) {
    this._onDestroyFns.push(q);
  }
  hasStarted() {
    return this._started;
  }
  init() {}
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  triggerMicrotask() {
    F(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach(q => q());
    this._onStartFns = [];
  }
  pause() {}
  restart() {}
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach(q => q());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(q) {
    this._position = this.totalTime ? q * this.totalTime : 1;
  }
  getPosition() {
    if (this.totalTime) {
      return this._position / this.totalTime;
    } else {
      return 1;
    }
  }
  triggerCallback(q) {
    const j = q == "start" ? this._onStartFns : this._onDoneFns;
    j.forEach(G => G());
    j.length = 0;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export class ZE {
  constructor(q) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._onDestroyFns = [];
    this.parentPlayer = null;
    this.totalTime = 0;
    this.players = q;
    let j = 0;
    let G = 0;
    let se = 0;
    const W = this.players.length;
    if (W == 0) {
      F(() => this._onFinish());
    } else {
      this.players.forEach(Pe => {
        Pe.onDone(() => {
          if (++j == W) {
            this._onFinish();
          }
        });
        Pe.onDestroy(() => {
          if (++G == W) {
            this._onDestroy();
          }
        });
        Pe.onStart(() => {
          if (++se == W) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((Pe, Le) => Math.max(Pe, Le.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(q => q());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach(q => q.init());
  }
  onStart(q) {
    this._onStartFns.push(q);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach(q => q());
      this._onStartFns = [];
    }
  }
  onDone(q) {
    this._onDoneFns.push(q);
  }
  onDestroy(q) {
    this._onDestroyFns.push(q);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach(q => q.play());
  }
  pause() {
    this.players.forEach(q => q.pause());
  }
  restart() {
    this.players.forEach(q => q.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach(q => q.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach(q => q.destroy());
      this._onDestroyFns.forEach(q => q());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach(q => q.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(q) {
    const j = q * this.totalTime;
    this.players.forEach(G => {
      const se = G.totalTime ? Math.min(1, j / G.totalTime) : 1;
      G.setPosition(se);
    });
  }
  getPosition() {
    const q = this.players.reduce((j, G) => j === null || G.totalTime > j.totalTime ? G : j, null);
    if (q != null) {
      return q.getPosition();
    } else {
      return 0;
    }
  }
  beforeDestroy() {
    this.players.forEach(q => {
      if (q.beforeDestroy) {
        q.beforeDestroy();
      }
    });
  }
  triggerCallback(q) {
    const j = q == "start" ? this._onStartFns : this._onDoneFns;
    j.forEach(G => G());
    j.length = 0;
  }
}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
export const k1 = "!";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */