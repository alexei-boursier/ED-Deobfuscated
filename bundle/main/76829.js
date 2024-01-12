__webpack_module__.exports = function a(i, t) {
  if (i === t) {
    return true;
  }
  if (i && t && typeof i == "object" && typeof t == "object") {
    if (i.constructor !== t.constructor) {
      return false;
    }
    var b;
    var k;
    var M;
    if (Array.isArray(i)) {
      if ((b = i.length) != t.length) {
        return false;
      }
      for (k = b; k-- != 0;) {
        if (!a(i[k], t[k])) {
          return false;
        }
      }
      return true;
    }
    if (i instanceof Map && t instanceof Map) {
      if (i.size !== t.size) {
        return false;
      }
      for (k of i.entries()) {
        if (!t.has(k[0])) {
          return false;
        }
      }
      for (k of i.entries()) {
        if (!a(k[1], t.get(k[0]))) {
          return false;
        }
      }
      return true;
    }
    if (i instanceof Set && t instanceof Set) {
      if (i.size !== t.size) {
        return false;
      }
      for (k of i.entries()) {
        if (!t.has(k[0])) {
          return false;
        }
      }
      return true;
    }
    if (ArrayBuffer.isView(i) && ArrayBuffer.isView(t)) {
      if ((b = i.length) != t.length) {
        return false;
      }
      for (k = b; k-- != 0;) {
        if (i[k] !== t[k]) {
          return false;
        }
      }
      return true;
    }
    if (i.constructor === RegExp) {
      return i.source === t.source && i.flags === t.flags;
    }
    if (i.valueOf !== Object.prototype.valueOf) {
      return i.valueOf() === t.valueOf();
    }
    if (i.toString !== Object.prototype.toString) {
      return i.toString() === t.toString();
    }
    if ((b = (M = Object.keys(i)).length) !== Object.keys(t).length) {
      return false;
    }
    for (k = b; k-- != 0;) {
      if (!Object.prototype.hasOwnProperty.call(t, M[k])) {
        return false;
      }
    }
    for (k = b; k-- != 0;) {
      var v = M[k];
      if (!a(i[v], t[v])) {
        return false;
      }
    }
    return true;
  }
  return i != i && t != t;
};