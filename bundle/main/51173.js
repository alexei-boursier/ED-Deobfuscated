require("40561");
function k(E, O) {
  if (!(E instanceof O)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function M(E, O) {
  for (var x = 0; x < O.length; x++) {
    var U = O[x];
    U.enumerable = U.enumerable || false;
    U.configurable = true;
    if ("value" in U) {
      U.writable = true;
    }
    Object.defineProperty(E, U.key, U);
  }
}
function S(E) {
  var O = E.stopImmediatePropagation;
  E.stopImmediatePropagation = function () {
    O.apply(this);
    (0, b.mM)(this);
  };
  return E;
}
export const Z = function () {
  function E() {
    var O = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    k(this, E);
    this.context = O || this;
    this.context.eventListeners ||= [];
  }
  (function v(E, O, x) {
    if (O) {
      M(E.prototype, O);
    }
    if (x) {
      M(E, x);
    }
    Object.defineProperty(E, "prototype", {
      writable: false
    });
  })(E, [{
    key: "addEventListener",
    value: function (x, U, B) {
      var F = this;
      var Z = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
      function X(le) {
        B.call(this, S(le));
      }
      if (typeof Z != "boolean" && !(0, t.by)()) {
        Z = false;
      }
      this.context.eventListeners.push({
        element: x,
        event: U,
        callback: B,
        callbackProxy: X,
        options: Z,
        eventManager: this
      });
      x.addEventListener(U, X, Z);
      return function () {
        F.removeEventListener(x, U, B);
      };
    }
  }, {
    key: "removeEventListener",
    value: function (x, U, B) {
      for (var X, F = arguments.length > 3 && arguments[3] !== undefined && arguments[3], Z = this.context.eventListeners.length; Z;) {
        if ((X = this.context.eventListeners[Z -= 1]).event === U && X.element === x) {
          if (B && B !== X.callback || F && X.eventManager !== this) {
            continue;
          }
          this.context.eventListeners.splice(Z, 1);
          X.element.removeEventListener(X.event, X.callbackProxy, X.options);
        }
      }
    }
  }, {
    key: "clearEvents",
    value: function () {
      var x = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (this.context) {
        for (var U = this.context.eventListeners.length; U;) {
          var B = this.context.eventListeners[U -= 1];
          if (!x || B.eventManager === this) {
            this.context.eventListeners.splice(U, 1);
            B.element.removeEventListener(B.event, B.callbackProxy, B.options);
          }
        }
      }
    }
  }, {
    key: "clear",
    value: function () {
      this.clearEvents();
    }
  }, {
    key: "destroy",
    value: function () {
      this.clearEvents();
      this.context = null;
    }
  }, {
    key: "destroyWithOwnEventsOnly",
    value: function () {
      this.clearEvents(true);
      this.context = null;
    }
  }, {
    key: "fireEvent",
    value: function (x, U) {
      var B = x.document;
      var F = x;
      if (!B) {
        F = (B = x.ownerDocument ? x.ownerDocument : x).defaultView;
      }
      var X;
      var Z = {
        bubbles: true,
        cancelable: U !== "mousemove",
        view: F,
        detail: 0,
        screenX: 0,
        screenY: 0,
        clientX: 1,
        clientY: 1,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: undefined
      };
      if (B.createEvent) {
        (X = B.createEvent("MouseEvents")).initMouseEvent(U, Z.bubbles, Z.cancelable, Z.view, Z.detail, Z.screenX, Z.screenY, Z.clientX, Z.clientY, Z.ctrlKey, Z.altKey, Z.shiftKey, Z.metaKey, Z.button, Z.relatedTarget || B.body.parentNode);
      } else {
        X = B.createEventObject();
      }
      if (x.dispatchEvent) {
        x.dispatchEvent(X);
      } else {
        x.fireEvent(`on${U}`, X);
      }
    }
  }]);
  return E;
}();