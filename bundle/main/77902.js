import * as i from "45007";
export class u extends i.V1j {
  constructor() {
    super();
    try {
      if (typeof sessionStorage !== "undefined" && sessionStorage) {
        this._db = sessionStorage;
        this._pasBon = false;
        this._enableStorage = true;
        return;
      }
    } catch {}
    this._enableStorage = false;
    this._pasBon = true;
    console.error(i.i6X[0], "sessionStorage is not available !");
  }
  static encode(k) {
    return JSON.stringify(k);
  }
  static decode(k) {
    if (k === undefined) {
      return k;
    }
    try {
      return JSON.parse(k);
    } catch {
      return;
    }
  }
  ready() {
    return Promise.resolve(true);
  }
  isEnable() {
    return this._enableStorage;
  }
  disableStorage(k = false) {
    this._enableStorage = !this._pasBon && !k;
  }
  get(k) {
    if (!this._enableStorage) {
      return Promise.reject(i.i6X[1]);
    }
    const M = this._db.getItem(k);
    return Promise.resolve(u.decode(M));
  }
  set(k, M) {
    if (this._enableStorage) {
      this._db.setItem(k, u.encode(M));
      return Promise.resolve(M);
    } else {
      return Promise.reject(i.i6X[1]);
    }
  }
  remove(k) {
    if (this._enableStorage) {
      this._db.removeItem(k);
      return Promise.resolve();
    } else {
      return Promise.reject(i.i6X[1]);
    }
  }
  clear() {
    if (this._pasBon) {
      return Promise.reject(i.i6X[1]);
    } else {
      this._db.clear();
      return Promise.resolve();
    }
  }
  length() {
    if (this._enableStorage) {
      return Promise.resolve(this._db.length);
    } else {
      return Promise.reject(i.i6X[1]);
    }
  }
  keys() {
    if (!this._enableStorage) {
      return Promise.reject(i.i6X[1]);
    }
    let k = [];
    const M = this._db.length;
    for (let v = 0; v < M; v++) {
      const C = this._db.key(v);
      if (C) {
        k.push(C);
      }
    }
    return Promise.resolve(k);
  }
  forEach(k) {
    if (!this._enableStorage) {
      return Promise.reject(i.i6X[1]);
    }
    const M = this._db.length;
    for (let v = 0; v < M; v++) {
      const C = this._db.key(v);
      if (C) {
        k(u.decode(this._db.getItem(C)), C, v + 1);
      }
    }
    return Promise.resolve();
  }
}