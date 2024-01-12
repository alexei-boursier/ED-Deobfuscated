function a(t, b) {
  t.onload = function () {
    this.onerror = this.onload = null;
    b(null, t);
  };
  t.onerror = function () {
    this.onerror = this.onload = null;
    b(new Error("Failed to load " + this.src), t);
  };
}
function i(t, b) {
  t.onreadystatechange = function () {
    if (this.readyState == "complete" || this.readyState == "loaded") {
      this.onreadystatechange = null;
      b(null, t);
    }
  };
}
__webpack_module__.exports = function (b, k, M) {
  var v = document.head || document.getElementsByTagName("head")[0];
  var C = document.createElement("script");
  if (typeof k == "function") {
    M = k;
    k = {};
  }
  M = M || function () {};
  C.type = (k = k || {}).type || "text/javascript";
  C.charset = k.charset || "utf8";
  C.async = !("async" in k) || !!k.async;
  C.src = b;
  if (k.attrs) {
    (function xe(t, b) {
      for (var k in b) {
        t.setAttribute(k, b[k]);
      }
    })(C, k.attrs);
  }
  if (k.text) {
    C.text = "" + k.text;
  }
  ("onload" in C ? a : i)(C, M);
  if (!C.onload) {
    a(C, M);
  }
  v.appendChild(C);
};