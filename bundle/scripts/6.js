var y = __webpack_require__(5);
var w = __webpack_require__(1);
var E = require("7").setImmediate;
var R;
var N;
var S;
function x(S) {
  return (x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) {
    return typeof s;
  } : function (s) {
    if (s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof s;
    }
  })(S);
}
/* @preserve
       * The MIT License (MIT)
       * 
       * Copyright (c) 2013-2018 Petka Antonov
       * 
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       * 
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       * 
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       * 
       */
S = function () {
  return function m(l, M, O) {
    function q(B, A) {
      if (!M[B]) {
        if (!l[B]) {
          var H = typeof _dereq_ == "function" && _dereq_;
          if (!A && H) {
            return H(B, true);
          }
          if (ee) {
            return ee(B, true);
          }
          var $ = new Error("Cannot find module '" + B + "'");
          $.code = "MODULE_NOT_FOUND";
          throw $;
        }
        var J = M[B] = {
          exports: {}
        };
        l[B][0].call(J.exports, function (Q) {
          return q(l[B][1][Q] || Q);
        }, J, J.exports, m, l, M, O);
      }
      return M[B].exports;
    }
    for (var ee = typeof _dereq_ == "function" && _dereq_, G = 0; G < O.length; G++) {
      q(O[G]);
    }
    return q;
  }({
    1: [function (m, l, M) {
      "use strict";

      var O;
      try {
        throw new Error();
      } catch (H) {
        O = H;
      }
      var q = m("./schedule");
      var ee = m("./queue");
      function G() {
        this._customScheduler = false;
        this._isTickUsed = false;
        this._lateQueue = new ee(16);
        this._normalQueue = new ee(16);
        this._haveDrainedQueues = false;
        var H = this;
        this.drainQueues = function () {
          H._drainQueues();
        };
        this._schedule = q;
      }
      function B(H) {
        for (; H.length() > 0;) {
          A(H);
        }
      }
      function A(H) {
        var $ = H.shift();
        if (typeof $ != "function") {
          $._settlePromises();
        } else {
          var J = H.shift();
          var Q = H.shift();
          $.call(J, Q);
        }
      }
      G.prototype.setScheduler = function (H) {
        var $ = this._schedule;
        this._schedule = H;
        this._customScheduler = true;
        return $;
      };
      G.prototype.hasCustomScheduler = function () {
        return this._customScheduler;
      };
      G.prototype.haveItemsQueued = function () {
        return this._isTickUsed || this._haveDrainedQueues;
      };
      G.prototype.fatalError = function (H, $) {
        if ($) {
          y.stderr.write("Fatal " + (H instanceof Error ? H.stack : H) + "\n");
          y.exit(2);
        } else {
          this.throwLater(H);
        }
      };
      G.prototype.throwLater = function (H, $) {
        if (arguments.length === 1) {
          $ = H;
          H = function () {
            throw $;
          };
        }
        if (typeof setTimeout !== "undefined") {
          setTimeout(function () {
            H($);
          }, 0);
        } else {
          try {
            this._schedule(function () {
              H($);
            });
          } catch {
            throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
          }
        }
      };
      G.prototype.invokeLater = function (H, $, J) {
        this._lateQueue.push(H, $, J);
        this._queueTick();
      };
      G.prototype.invoke = function (H, $, J) {
        this._normalQueue.push(H, $, J);
        this._queueTick();
      };
      G.prototype.settlePromises = function (H) {
        this._normalQueue._pushOne(H);
        this._queueTick();
      };
      G.prototype._drainQueues = function () {
        B(this._normalQueue);
        this._reset();
        this._haveDrainedQueues = true;
        B(this._lateQueue);
      };
      G.prototype._queueTick = function () {
        if (!this._isTickUsed) {
          this._isTickUsed = true;
          this._schedule(this.drainQueues);
        }
      };
      G.prototype._reset = function () {
        this._isTickUsed = false;
      };
      l.exports = G;
      l.exports.firstLineError = O;
    }, {
      "./queue": 17,
      "./schedule": 18
    }],
    2: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q, ee, G) {
        var B = false;
        function A(Q, U) {
          this._reject(U);
        }
        function H(Q, U) {
          U.promiseRejectionQueued = true;
          U.bindingPromise._then(A, A, null, this, Q);
        }
        function $(Q, U) {
          if ((this._bitField & 50397184) == 0) {
            this._resolveCallback(U.target);
          }
        }
        function J(Q, U) {
          if (!U.promiseRejectionQueued) {
            this._reject(Q);
          }
        }
        O.prototype.bind = function (Q) {
          if (!B) {
            B = true;
            O.prototype._propagateFrom = G.propagateFromFunction();
            O.prototype._boundValue = G.boundValueFunction();
          }
          var U = ee(Q);
          var K = new O(q);
          K._propagateFrom(this, 1);
          var F = this._target();
          K._setBoundTo(U);
          if (U instanceof O) {
            var L = {
              promiseRejectionQueued: false,
              promise: K,
              target: F,
              bindingPromise: U
            };
            F._then(q, H, undefined, K, L);
            U._then($, J, undefined, K, L);
            K._setOnCancel(U);
          } else {
            K._resolveCallback(F);
          }
          return K;
        };
        O.prototype._setBoundTo = function (Q) {
          if (Q !== undefined) {
            this._bitField = this._bitField | 2097152;
            this._boundTo = Q;
          } else {
            this._bitField = this._bitField & -2097153;
          }
        };
        O.prototype._isBound = function () {
          return (this._bitField & 2097152) == 2097152;
        };
        O.bind = function (Q, U) {
          return O.resolve(U).bind(Q);
        };
      };
    }, {}],
    3: [function (m, l, M) {
      "use strict";

      var O;
      if (typeof Promise !== "undefined") {
        O = Promise;
      }
      var q = m("./promise")();
      q.noConflict = function () {
        try {
          if (Promise === q) {
            Promise = O;
          }
        } catch {}
        return q;
      };
      l.exports = q;
    }, {
      "./promise": 15
    }],
    4: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q, ee, G) {
        var B = m("./util");
        var A = B.tryCatch;
        var H = B.errorObj;
        var $ = O._async;
        O.prototype.break = O.prototype.cancel = function () {
          if (!G.cancellation()) {
            return this._warn("cancellation is disabled");
          }
          for (var J = this, Q = J; J._isCancellable();) {
            if (!J._cancelBy(Q)) {
              if (Q._isFollowing()) {
                Q._followee().cancel();
              } else {
                Q._cancelBranched();
              }
              break;
            }
            var U = J._cancellationParent;
            if (U == null || !U._isCancellable()) {
              if (J._isFollowing()) {
                J._followee().cancel();
              } else {
                J._cancelBranched();
              }
              break;
            }
            if (J._isFollowing()) {
              J._followee().cancel();
            }
            J._setWillBeCancelled();
            Q = J;
            J = U;
          }
        };
        O.prototype._branchHasCancelled = function () {
          this._branchesRemainingToCancel--;
        };
        O.prototype._enoughBranchesHaveCancelled = function () {
          return this._branchesRemainingToCancel === undefined || this._branchesRemainingToCancel <= 0;
        };
        O.prototype._cancelBy = function (J) {
          if (J === this) {
            this._branchesRemainingToCancel = 0;
            this._invokeOnCancel();
            return true;
          } else {
            this._branchHasCancelled();
            return !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), true);
          }
        };
        O.prototype._cancelBranched = function () {
          if (this._enoughBranchesHaveCancelled()) {
            this._cancel();
          }
        };
        O.prototype._cancel = function () {
          if (this._isCancellable()) {
            this._setCancelled();
            $.invoke(this._cancelPromises, this, undefined);
          }
        };
        O.prototype._cancelPromises = function () {
          if (this._length() > 0) {
            this._settlePromises();
          }
        };
        O.prototype._unsetOnCancel = function () {
          this._onCancelField = undefined;
        };
        O.prototype._isCancellable = function () {
          return this.isPending() && !this._isCancelled();
        };
        O.prototype.isCancellable = function () {
          return this.isPending() && !this.isCancelled();
        };
        O.prototype._doInvokeOnCancel = function (J, Q) {
          if (B.isArray(J)) {
            for (var U = 0; U < J.length; ++U) {
              this._doInvokeOnCancel(J[U], Q);
            }
          } else if (J !== undefined) {
            if (typeof J == "function") {
              if (!Q) {
                var K = A(J).call(this._boundValue());
                if (K === H) {
                  this._attachExtraTrace(K.e);
                  $.throwLater(K.e);
                }
              }
            } else {
              J._resultCancelled(this);
            }
          }
        };
        O.prototype._invokeOnCancel = function () {
          var J = this._onCancel();
          this._unsetOnCancel();
          $.invoke(this._doInvokeOnCancel, this, J);
        };
        O.prototype._invokeInternalOnCancel = function () {
          if (this._isCancellable()) {
            this._doInvokeOnCancel(this._onCancel(), true);
            this._unsetOnCancel();
          }
        };
        O.prototype._resultCancelled = function () {
          this.cancel();
        };
      };
    }, {
      "./util": 21
    }],
    5: [function (m, l, M) {
      "use strict";

      l.exports = function (O) {
        var q = m("./util");
        var ee = m("./es5").keys;
        var G = q.tryCatch;
        var B = q.errorObj;
        return function (A, H, $) {
          return function (J) {
            var Q = $._boundValue();
            e: for (var U = 0; U < A.length; ++U) {
              var K = A[U];
              if (K === Error || K != null && K.prototype instanceof Error) {
                if (J instanceof K) {
                  return G(H).call(Q, J);
                }
              } else if (typeof K == "function") {
                var F = G(K).call(Q, J);
                if (F === B) {
                  return F;
                }
                if (F) {
                  return G(H).call(Q, J);
                }
              } else if (q.isObject(J)) {
                for (var L = ee(K), ie = 0; ie < L.length; ++ie) {
                  var Y = L[ie];
                  if (K[Y] != J[Y]) {
                    continue e;
                  }
                }
                return G(H).call(Q, J);
              }
            }
            return O;
          };
        };
      };
    }, {
      "./es5": 10,
      "./util": 21
    }],
    6: [function (m, l, M) {
      "use strict";

      l.exports = function (O) {
        var q = false;
        var ee = [];
        function G() {
          this._trace = new G.CapturedTrace(B());
        }
        function B() {
          var A = ee.length - 1;
          if (A >= 0) {
            return ee[A];
          }
        }
        O.prototype._promiseCreated = function () {};
        O.prototype._pushContext = function () {};
        O.prototype._popContext = function () {
          return null;
        };
        O._peekContext = O.prototype._peekContext = function () {};
        G.prototype._pushContext = function () {
          if (this._trace !== undefined) {
            this._trace._promiseCreated = null;
            ee.push(this._trace);
          }
        };
        G.prototype._popContext = function () {
          if (this._trace !== undefined) {
            var A = ee.pop();
            var H = A._promiseCreated;
            A._promiseCreated = null;
            return H;
          }
          return null;
        };
        G.CapturedTrace = null;
        G.create = function () {
          if (q) {
            return new G();
          }
        };
        G.deactivateLongStackTraces = function () {};
        G.activateLongStackTraces = function () {
          var A = O.prototype._pushContext;
          var H = O.prototype._popContext;
          var $ = O._peekContext;
          var J = O.prototype._peekContext;
          var Q = O.prototype._promiseCreated;
          G.deactivateLongStackTraces = function () {
            O.prototype._pushContext = A;
            O.prototype._popContext = H;
            O._peekContext = $;
            O.prototype._peekContext = J;
            O.prototype._promiseCreated = Q;
            q = false;
          };
          q = true;
          O.prototype._pushContext = G.prototype._pushContext;
          O.prototype._popContext = G.prototype._popContext;
          O._peekContext = O.prototype._peekContext = B;
          O.prototype._promiseCreated = function () {
            var U = this._peekContext();
            if (U && U._promiseCreated == null) {
              U._promiseCreated = this;
            }
          };
        };
        return G;
      };
    }, {}],
    7: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q, ee, G) {
        var B;
        var A;
        var H;
        var $;
        var J = O._async;
        var Q = m("./errors").Warning;
        var U = m("./util");
        var K = m("./es5");
        var F = U.canAttachTrace;
        var L = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
        var ie = /\((?:timers\.js):\d+:\d+\)/;
        var Y = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
        var ne = null;
        var le = null;
        var ge = false;
        var Ee = U.env("BLUEBIRD_DEBUG") != 0;
        var Le = U.env("BLUEBIRD_WARNINGS") != 0 && (!!Ee || !!U.env("BLUEBIRD_WARNINGS"));
        var Qe = U.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (!!Ee || !!U.env("BLUEBIRD_LONG_STACK_TRACES"));
        var ae = U.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (Le || !!U.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
        (function () {
          var me = [];
          function Be() {
            for (var De = 0; De < me.length; ++De) {
              me[De]._notifyUnhandledRejection();
            }
            se();
          }
          function se() {
            me.length = 0;
          }
          $ = function (De) {
            me.push(De);
            setTimeout(Be, 1);
          };
          K.defineProperty(O, "_unhandledRejectionCheck", {
            value: Be
          });
          K.defineProperty(O, "_unhandledRejectionClear", {
            value: se
          });
        })();
        O.prototype.suppressUnhandledRejections = function () {
          var me = this._target();
          me._bitField = me._bitField & -1048577 | 524288;
        };
        O.prototype._ensurePossibleRejectionHandled = function () {
          if ((this._bitField & 524288) == 0) {
            this._setRejectionIsUnhandled();
            $(this);
          }
        };
        O.prototype._notifyUnhandledRejectionIsHandled = function () {
          vt("rejectionHandled", B, undefined, this);
        };
        O.prototype._setReturnedNonUndefined = function () {
          this._bitField = this._bitField | 268435456;
        };
        O.prototype._returnedNonUndefined = function () {
          return (this._bitField & 268435456) != 0;
        };
        O.prototype._notifyUnhandledRejection = function () {
          if (this._isRejectionUnhandled()) {
            var me = this._settledValue();
            this._setUnhandledRejectionIsNotified();
            vt("unhandledRejection", A, me, this);
          }
        };
        O.prototype._setUnhandledRejectionIsNotified = function () {
          this._bitField = this._bitField | 262144;
        };
        O.prototype._unsetUnhandledRejectionIsNotified = function () {
          this._bitField = this._bitField & -262145;
        };
        O.prototype._isUnhandledRejectionNotified = function () {
          return (this._bitField & 262144) > 0;
        };
        O.prototype._setRejectionIsUnhandled = function () {
          this._bitField = this._bitField | 1048576;
        };
        O.prototype._unsetRejectionIsUnhandled = function () {
          this._bitField = this._bitField & -1048577;
          if (this._isUnhandledRejectionNotified()) {
            this._unsetUnhandledRejectionIsNotified();
            this._notifyUnhandledRejectionIsHandled();
          }
        };
        O.prototype._isRejectionUnhandled = function () {
          return (this._bitField & 1048576) > 0;
        };
        O.prototype._warn = function (me, Be, se) {
          return ct(me, Be, se || this);
        };
        O.onPossiblyUnhandledRejection = function (me) {
          var Be = O._getContext();
          A = U.contextBind(Be, me);
        };
        O.onUnhandledRejectionHandled = function (me) {
          var Be = O._getContext();
          B = U.contextBind(Be, me);
        };
        function fe() {}
        O.longStackTraces = function () {
          if (J.haveItemsQueued() && !Ie.longStackTraces) {
            throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
          }
          if (!Ie.longStackTraces && gt()) {
            var me = O.prototype._captureStackTrace;
            var Be = O.prototype._attachExtraTrace;
            var se = O.prototype._dereferenceTrace;
            Ie.longStackTraces = true;
            fe = function () {
              if (J.haveItemsQueued() && !Ie.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
              }
              O.prototype._captureStackTrace = me;
              O.prototype._attachExtraTrace = Be;
              O.prototype._dereferenceTrace = se;
              q.deactivateLongStackTraces();
              Ie.longStackTraces = false;
            };
            O.prototype._captureStackTrace = Re;
            O.prototype._attachExtraTrace = ot;
            O.prototype._dereferenceTrace = pt;
            q.activateLongStackTraces();
          }
        };
        O.hasLongStackTraces = function () {
          return Ie.longStackTraces && gt();
        };
        var Me = {
          unhandledrejection: {
            before: function () {
              var me = U.global.onunhandledrejection;
              U.global.onunhandledrejection = null;
              return me;
            },
            after: function (me) {
              U.global.onunhandledrejection = me;
            }
          },
          rejectionhandled: {
            before: function () {
              var me = U.global.onrejectionhandled;
              U.global.onrejectionhandled = null;
              return me;
            },
            after: function (me) {
              U.global.onrejectionhandled = me;
            }
          }
        };
        var je = function () {
          function me(se, De) {
            if (!se) {
              return !U.global.dispatchEvent(De);
            }
            var We;
            try {
              We = se.before();
              return !U.global.dispatchEvent(De);
            } finally {
              se.after(We);
            }
          }
          try {
            if (typeof CustomEvent == "function") {
              var Be = new CustomEvent("CustomEvent");
              U.global.dispatchEvent(Be);
              return function (se, De) {
                se = se.toLowerCase();
                var We = new CustomEvent(se, {
                  detail: De,
                  cancelable: true
                });
                K.defineProperty(We, "promise", {
                  value: De.promise
                });
                K.defineProperty(We, "reason", {
                  value: De.reason
                });
                return me(Me[se], We);
              };
            }
            if (typeof Event == "function") {
              Be = new Event("CustomEvent");
              U.global.dispatchEvent(Be);
              return function (se, De) {
                se = se.toLowerCase();
                var We = new Event(se, {
                  cancelable: true
                });
                We.detail = De;
                K.defineProperty(We, "promise", {
                  value: De.promise
                });
                K.defineProperty(We, "reason", {
                  value: De.reason
                });
                return me(Me[se], We);
              };
            } else {
              (Be = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", false, true, {});
              U.global.dispatchEvent(Be);
              return function (se, De) {
                se = se.toLowerCase();
                var We = document.createEvent("CustomEvent");
                We.initCustomEvent(se, false, true, De);
                return me(Me[se], We);
              };
            }
          } catch {}
          return function () {
            return false;
          };
        }();
        var ze = U.isNode ? function () {
          return y.emit.apply(y, arguments);
        } : U.global ? function (me) {
          var Be = "on" + me.toLowerCase();
          var se = U.global[Be];
          return !!se && (se.apply(U.global, [].slice.call(arguments, 1)), true);
        } : function () {
          return false;
        };
        function we(me, Be) {
          return {
            promise: Be
          };
        }
        var Ce = {
          promiseCreated: we,
          promiseFulfilled: we,
          promiseRejected: we,
          promiseResolved: we,
          promiseCancelled: we,
          promiseChained: function (me, Be, se) {
            return {
              promise: Be,
              child: se
            };
          },
          warning: function (me, Be) {
            return {
              warning: Be
            };
          },
          unhandledRejection: function (me, Be, se) {
            return {
              reason: Be,
              promise: se
            };
          },
          rejectionHandled: we
        };
        function ye(me) {
          var Be = false;
          try {
            Be = ze.apply(null, arguments);
          } catch (De) {
            J.throwLater(De);
            Be = true;
          }
          var se = false;
          try {
            se = je(me, Ce[me].apply(null, arguments));
          } catch (De) {
            J.throwLater(De);
            se = true;
          }
          return se || Be;
        }
        function $e() {
          return false;
        }
        function qe(me, Be, se) {
          var De = this;
          try {
            me(Be, se, function (We) {
              if (typeof We != "function") {
                throw new TypeError("onCancel must be a function, got: " + U.toString(We));
              }
              De._attachCancellationCallback(We);
            });
          } catch (We) {
            return We;
          }
        }
        function ue(me) {
          if (!this._isCancellable()) {
            return this;
          }
          var Be = this._onCancel();
          if (Be !== undefined) {
            if (U.isArray(Be)) {
              Be.push(me);
            } else {
              this._setOnCancel([Be, me]);
            }
          } else {
            this._setOnCancel(me);
          }
        }
        function de() {
          return this._onCancelField;
        }
        function pe(me) {
          this._onCancelField = me;
        }
        function xe() {
          this._cancellationParent = undefined;
          this._onCancelField = undefined;
        }
        function Xe(me, Be) {
          if ((Be & 1) != 0) {
            this._cancellationParent = me;
            var se = me._branchesRemainingToCancel;
            if (se === undefined) {
              se = 0;
            }
            me._branchesRemainingToCancel = se + 1;
          }
          if ((Be & 2) != 0 && me._isBound()) {
            this._setBoundTo(me._boundTo);
          }
        }
        O.config = function (me) {
          if ("longStackTraces" in (me = Object(me))) {
            if (me.longStackTraces) {
              O.longStackTraces();
            } else if (!me.longStackTraces && O.hasLongStackTraces()) {
              fe();
            }
          }
          if ("warnings" in me) {
            var Be = me.warnings;
            Ie.warnings = !!Be;
            ae = Ie.warnings;
            if (U.isObject(Be) && "wForgottenReturn" in Be) {
              ae = !!Be.wForgottenReturn;
            }
          }
          if ("cancellation" in me && me.cancellation && !Ie.cancellation) {
            if (J.haveItemsQueued()) {
              throw new Error("cannot enable cancellation after promises are in use");
            }
            O.prototype._clearCancellationData = xe;
            O.prototype._propagateFrom = Xe;
            O.prototype._onCancel = de;
            O.prototype._setOnCancel = pe;
            O.prototype._attachCancellationCallback = ue;
            O.prototype._execute = qe;
            rt = Xe;
            Ie.cancellation = true;
          }
          if ("monitoring" in me) {
            if (me.monitoring && !Ie.monitoring) {
              Ie.monitoring = true;
              O.prototype._fireEvent = ye;
            } else if (!me.monitoring && Ie.monitoring) {
              Ie.monitoring = false;
              O.prototype._fireEvent = $e;
            }
          }
          if ("asyncHooks" in me && U.nodeSupportsAsyncResource) {
            var De = !!me.asyncHooks;
            if (Ie.asyncHooks !== De) {
              Ie.asyncHooks = De;
              if (De) {
                ee();
              } else {
                G();
              }
            }
          }
          return O;
        };
        O.prototype._fireEvent = $e;
        O.prototype._execute = function (me, Be, se) {
          try {
            me(Be, se);
          } catch (De) {
            return De;
          }
        };
        O.prototype._onCancel = function () {};
        O.prototype._setOnCancel = function (me) {};
        O.prototype._attachCancellationCallback = function (me) {};
        O.prototype._captureStackTrace = function () {};
        O.prototype._attachExtraTrace = function () {};
        O.prototype._dereferenceTrace = function () {};
        O.prototype._clearCancellationData = function () {};
        O.prototype._propagateFrom = function (me, Be) {};
        function rt(me, Be) {
          if ((Be & 2) != 0 && me._isBound()) {
            this._setBoundTo(me._boundTo);
          }
        }
        function tt() {
          var me = this._boundTo;
          if (me !== undefined && me instanceof O) {
            if (me.isFulfilled()) {
              return me.value();
            } else {
              return undefined;
            }
          } else {
            return me;
          }
        }
        function Re() {
          this._trace = new Ct(this._peekContext());
        }
        function ot(me, Be) {
          if (F(me)) {
            var se = this._trace;
            if (se !== undefined && Be) {
              se = se._parent;
            }
            if (se !== undefined) {
              se.attachExtraTrace(me);
            } else if (!me.__stackCleaned__) {
              var De = Ze(me);
              U.notEnumerableProp(me, "stack", De.message + "\n" + De.stack.join("\n"));
              U.notEnumerableProp(me, "__stackCleaned__", true);
            }
          }
        }
        function pt() {
          this._trace = undefined;
        }
        function ct(me, Be, se) {
          if (Ie.warnings) {
            var De;
            var We = new Q(me);
            if (Be) {
              se._attachExtraTrace(We);
            } else if (Ie.longStackTraces && (De = O._peekContext())) {
              De.attachExtraTrace(We);
            } else {
              var ke = Ze(We);
              We.stack = ke.message + "\n" + ke.stack.join("\n");
            }
            if (!ye("warning", We)) {
              it(We, "", true);
            }
          }
        }
        function st(me) {
          for (var Be = [], se = 0; se < me.length; ++se) {
            var De = me[se];
            var We = De === "    (No stack trace)" || ne.test(De);
            var ke = We && Ye(De);
            if (We && !ke) {
              if (ge && De.charAt(0) !== " ") {
                De = "    " + De;
              }
              Be.push(De);
            }
          }
          return Be;
        }
        function Ze(me) {
          var Be = me.stack;
          var se = me.toString();
          Be = typeof Be == "string" && Be.length > 0 ? function (De) {
            for (var We = De.stack.replace(/\s+$/g, "").split("\n"), ke = 0; ke < We.length; ++ke) {
              var Pe = We[ke];
              if (Pe === "    (No stack trace)" || ne.test(Pe)) {
                break;
              }
            }
            if (ke > 0 && De.name != "SyntaxError") {
              We = We.slice(ke);
            }
            return We;
          }(me) : ["    (No stack trace)"];
          return {
            message: se,
            stack: me.name == "SyntaxError" ? Be : st(Be)
          };
        }
        function it(me, Be, se) {
          var De;
          if (typeof console !== "undefined") {
            De = U.isObject(me) ? Be + le(me.stack, me) : Be + String(me);
            if (typeof H == "function") {
              H(De, se);
            } else if (typeof console.log == "function" || x(console.log) === "object") {
              console.log(De);
            }
          }
        }
        function vt(me, Be, se, De) {
          var We = false;
          try {
            if (typeof Be == "function") {
              We = true;
              if (me === "rejectionHandled") {
                Be(De);
              } else {
                Be(se, De);
              }
            }
          } catch (ke) {
            J.throwLater(ke);
          }
          if (me === "unhandledRejection") {
            if (!ye(me, se, De) && !We) {
              it(se, "Unhandled rejection ");
            }
          } else {
            ye(me, De);
          }
        }
        function nt(me) {
          var Be;
          var se;
          if (typeof me == "function") {
            Be = "[function " + (me.name || "anonymous") + "]";
          } else {
            Be = me && typeof me.toString == "function" ? me.toString() : U.toString(me);
            if (/\[object [a-zA-Z0-9$_]+\]/.test(Be)) {
              try {
                Be = JSON.stringify(me);
              } catch {}
            }
            if (Be.length === 0) {
              Be = "(empty array)";
            }
          }
          return "(<" + ((se = Be).length < 41 ? se : se.substr(0, 38) + "...") + ">, no stack trace)";
        }
        function gt() {
          return typeof Nt == "function";
        }
        function Ye() {
          return false;
        }
        var et = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
        function Et(me) {
          var Be = me.match(et);
          if (Be) {
            return {
              fileName: Be[1],
              line: parseInt(Be[2], 10)
            };
          }
        }
        function Ct(me) {
          this._parent = me;
          this._promisesCreated = 0;
          var Be = this._length = 1 + (me === undefined ? 0 : me._length);
          Nt(this, Ct);
          if (Be > 32) {
            this.uncycle();
          }
        }
        U.inherits(Ct, Error);
        q.CapturedTrace = Ct;
        Ct.prototype.uncycle = function () {
          var me = this._length;
          if (me >= 2) {
            for (var Be = [], se = {}, De = 0, We = this; We !== undefined; ++De) {
              Be.push(We);
              We = We._parent;
            }
            for (De = (me = this._length = De) - 1; De >= 0; --De) {
              var ke = Be[De].stack;
              if (se[ke] === undefined) {
                se[ke] = De;
              }
            }
            for (De = 0; De < me; ++De) {
              var Pe = se[Be[De].stack];
              if (Pe !== undefined && Pe !== De) {
                if (Pe > 0) {
                  Be[Pe - 1]._parent = undefined;
                  Be[Pe - 1]._length = 1;
                }
                Be[De]._parent = undefined;
                Be[De]._length = 1;
                var ce = De > 0 ? Be[De - 1] : this;
                if (Pe < me - 1) {
                  ce._parent = Be[Pe + 1];
                  ce._parent.uncycle();
                  ce._length = ce._parent._length + 1;
                } else {
                  ce._parent = undefined;
                  ce._length = 1;
                }
                for (var Ge = ce._length + 1, dt = De - 2; dt >= 0; --dt) {
                  Be[dt]._length = Ge;
                  Ge++;
                }
                return;
              }
            }
          }
        };
        Ct.prototype.attachExtraTrace = function (me) {
          if (!me.__stackCleaned__) {
            this.uncycle();
            for (var Be = Ze(me), se = Be.message, De = [Be.stack], We = this; We !== undefined;) {
              De.push(st(We.stack.split("\n")));
              We = We._parent;
            }
            (function (ke) {
              for (var Pe = ke[0], ce = 1; ce < ke.length; ++ce) {
                for (var Ge = ke[ce], dt = Pe.length - 1, te = Pe[dt], Ue = -1, Ke = Ge.length - 1; Ke >= 0; --Ke) {
                  if (Ge[Ke] === te) {
                    Ue = Ke;
                    break;
                  }
                }
                for (Ke = Ue; Ke >= 0 && Pe[dt] === Ge[Ke]; --Ke) {
                  Pe.pop();
                  dt--;
                }
                Pe = Ge;
              }
            })(De);
            (function (ke) {
              for (var Pe = 0; Pe < ke.length; ++Pe) {
                if (ke[Pe].length === 0 || Pe + 1 < ke.length && ke[Pe][0] === ke[Pe + 1][0]) {
                  ke.splice(Pe, 1);
                  Pe--;
                }
              }
            })(De);
            U.notEnumerableProp(me, "stack", function (ke, Pe) {
              for (var ce = 0; ce < Pe.length - 1; ++ce) {
                Pe[ce].push("From previous event:");
                Pe[ce] = Pe[ce].join("\n");
              }
              if (ce < Pe.length) {
                Pe[ce] = Pe[ce].join("\n");
              }
              return ke + "\n" + Pe.join("\n");
            }(se, De));
            U.notEnumerableProp(me, "__stackCleaned__", true);
          }
        };
        var Nt = function () {
          var me = /^\s*at\s*/;
          function Be(ke, Pe) {
            if (typeof ke == "string") {
              return ke;
            } else if (Pe.name !== undefined && Pe.message !== undefined) {
              return Pe.toString();
            } else {
              return nt(Pe);
            }
          }
          if (typeof Error.stackTraceLimit == "number" && typeof Error.captureStackTrace == "function") {
            Error.stackTraceLimit += 6;
            ne = me;
            le = Be;
            var se = Error.captureStackTrace;
            Ye = function (ke) {
              return L.test(ke);
            };
            return function (ke, Pe) {
              Error.stackTraceLimit += 6;
              se(ke, Pe);
              Error.stackTraceLimit -= 6;
            };
          }
          var De;
          var We = new Error();
          if (typeof We.stack == "string" && We.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
            ne = /@/;
            le = Be;
            ge = true;
            return function (ke) {
              ke.stack = new Error().stack;
            };
          }
          try {
            throw new Error();
          } catch (ke) {
            De = "stack" in ke;
          }
          if ("stack" in We || !De || typeof Error.stackTraceLimit != "number") {
            le = function (ke, Pe) {
              if (typeof ke == "string") {
                return ke;
              } else if (x(Pe) !== "object" && typeof Pe != "function" || Pe.name === undefined || Pe.message === undefined) {
                return nt(Pe);
              } else {
                return Pe.toString();
              }
            };
            return null;
          } else {
            ne = me;
            le = Be;
            return function (ke) {
              Error.stackTraceLimit += 6;
              try {
                throw new Error();
              } catch (Pe) {
                ke.stack = Pe.stack;
              }
              Error.stackTraceLimit -= 6;
            };
          }
        }();
        if (typeof console !== "undefined" && console.warn !== undefined) {
          H = function (me) {
            console.warn(me);
          };
          if (U.isNode && y.stderr.isTTY) {
            H = function (me, Be) {
              console.warn((Be ? "[33m" : "[31m") + me + "[0m\n");
            };
          } else if (!U.isNode && typeof new Error().stack == "string") {
            H = function (me, Be) {
              console.warn("%c" + me, Be ? "color: darkorange" : "color: red");
            };
          }
        }
        var Ie = {
          warnings: Le,
          longStackTraces: false,
          cancellation: false,
          monitoring: false,
          asyncHooks: false
        };
        if (Qe) {
          O.longStackTraces();
        }
        return {
          asyncHooks: function () {
            return Ie.asyncHooks;
          },
          longStackTraces: function () {
            return Ie.longStackTraces;
          },
          warnings: function () {
            return Ie.warnings;
          },
          cancellation: function () {
            return Ie.cancellation;
          },
          monitoring: function () {
            return Ie.monitoring;
          },
          propagateFromFunction: function () {
            return rt;
          },
          boundValueFunction: function () {
            return tt;
          },
          checkForgottenReturns: function (me, Be, se, De, We) {
            if (me === undefined && Be !== null && ae) {
              if (We !== undefined && We._returnedNonUndefined() || (De._bitField & 65535) == 0) {
                return;
              }
              if (se) {
                se += " ";
              }
              var ke = "";
              var Pe = "";
              if (Be._trace) {
                for (var ce = Be._trace.stack.split("\n"), Ge = st(ce), dt = Ge.length - 1; dt >= 0; --dt) {
                  var te = Ge[dt];
                  if (!ie.test(te)) {
                    var Ue = te.match(Y);
                    if (Ue) {
                      ke = "at " + Ue[1] + ":" + Ue[2] + ":" + Ue[3] + " ";
                    }
                    break;
                  }
                }
                if (Ge.length > 0) {
                  var Ke = Ge[0];
                  for (dt = 0; dt < ce.length; ++dt) {
                    if (ce[dt] === Ke) {
                      if (dt > 0) {
                        Pe = "\n" + ce[dt - 1];
                      }
                      break;
                    }
                  }
                }
              }
              De._warn("a promise was created in a " + se + "handler " + ke + "but was not returned from it, see http://goo.gl/rRqMUw" + Pe, true, Be);
            }
          },
          setBounds: function (me, Be) {
            if (gt()) {
              for (var se, De, We = (me.stack || "").split("\n"), ke = (Be.stack || "").split("\n"), Pe = -1, ce = -1, Ge = 0; Ge < We.length; ++Ge) {
                if (dt = Et(We[Ge])) {
                  se = dt.fileName;
                  Pe = dt.line;
                  break;
                }
              }
              for (Ge = 0; Ge < ke.length; ++Ge) {
                var dt;
                if (dt = Et(ke[Ge])) {
                  De = dt.fileName;
                  ce = dt.line;
                  break;
                }
              }
              if (Pe >= 0 && ce >= 0 && !!se && !!De && se === De && Pe < ce) {
                Ye = function (te) {
                  if (L.test(te)) {
                    return true;
                  }
                  var Ue = Et(te);
                  return !!Ue && Ue.fileName === se && Pe <= Ue.line && Ue.line <= ce;
                };
              }
            }
          },
          warn: ct,
          deprecated: function (me, Be) {
            var se = me + " is deprecated and will be removed in a future version.";
            if (Be) {
              se += " Use " + Be + " instead.";
            }
            return ct(se);
          },
          CapturedTrace: Ct,
          fireDomEvent: je,
          fireGlobalEvent: ze
        };
      };
    }, {
      "./errors": 9,
      "./es5": 10,
      "./util": 21
    }],
    8: [function (m, l, M) {
      "use strict";

      l.exports = function (O) {
        function q() {
          return this.value;
        }
        function ee() {
          throw this.reason;
        }
        O.prototype.return = O.prototype.thenReturn = function (G) {
          if (G instanceof O) {
            G.suppressUnhandledRejections();
          }
          return this._then(q, undefined, undefined, {
            value: G
          }, undefined);
        };
        O.prototype.throw = O.prototype.thenThrow = function (G) {
          return this._then(ee, undefined, undefined, {
            reason: G
          }, undefined);
        };
        O.prototype.catchThrow = function (G) {
          if (arguments.length <= 1) {
            return this._then(undefined, ee, undefined, {
              reason: G
            }, undefined);
          }
          var B = arguments[1];
          return this.caught(G, function () {
            throw B;
          });
        };
        O.prototype.catchReturn = function (G) {
          if (arguments.length <= 1) {
            if (G instanceof O) {
              G.suppressUnhandledRejections();
            }
            return this._then(undefined, q, undefined, {
              value: G
            }, undefined);
          }
          var B = arguments[1];
          if (B instanceof O) {
            B.suppressUnhandledRejections();
          }
          return this.caught(G, function () {
            return B;
          });
        };
      };
    }, {}],
    9: [function (m, l, M) {
      "use strict";

      var O;
      var q;
      var ee = m("./es5");
      var G = ee.freeze;
      var B = m("./util");
      var A = B.inherits;
      var H = B.notEnumerableProp;
      function $(le, ge) {
        function Ee(Le) {
          if (!(this instanceof Ee)) {
            return new Ee(Le);
          }
          H(this, "message", typeof Le == "string" ? Le : ge);
          H(this, "name", le);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          } else {
            Error.call(this);
          }
        }
        A(Ee, Error);
        return Ee;
      }
      var J = $("Warning", "warning");
      var Q = $("CancellationError", "cancellation error");
      var U = $("TimeoutError", "timeout error");
      var K = $("AggregateError", "aggregate error");
      try {
        O = TypeError;
        q = RangeError;
      } catch {
        O = $("TypeError", "type error");
        q = $("RangeError", "range error");
      }
      for (var F = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), L = 0; L < F.length; ++L) {
        if (typeof Array.prototype[F[L]] == "function") {
          K.prototype[F[L]] = Array.prototype[F[L]];
        }
      }
      ee.defineProperty(K.prototype, "length", {
        value: 0,
        configurable: false,
        writable: true,
        enumerable: true
      });
      K.prototype.isOperational = true;
      var ie = 0;
      function Y(le) {
        if (!(this instanceof Y)) {
          return new Y(le);
        }
        H(this, "name", "OperationalError");
        H(this, "message", le);
        this.cause = le;
        this.isOperational = true;
        if (le instanceof Error) {
          H(this, "message", le.message);
          H(this, "stack", le.stack);
        } else if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }
      K.prototype.toString = function () {
        var le = Array(ie * 4 + 1).join(" ");
        var ge = "\n" + le + "AggregateError of:\n";
        ie++;
        le = Array(ie * 4 + 1).join(" ");
        for (var Ee = 0; Ee < this.length; ++Ee) {
          for (var Le = this[Ee] === this ? "[Circular AggregateError]" : this[Ee] + "", Qe = Le.split("\n"), ae = 0; ae < Qe.length; ++ae) {
            Qe[ae] = le + Qe[ae];
          }
          ge += (Le = Qe.join("\n")) + "\n";
        }
        ie--;
        return ge;
      };
      A(Y, Error);
      var ne = Error.__BluebirdErrorTypes__;
      if (!ne) {
        ne = G({
          CancellationError: Q,
          TimeoutError: U,
          OperationalError: Y,
          RejectionError: Y,
          AggregateError: K
        });
        ee.defineProperty(Error, "__BluebirdErrorTypes__", {
          value: ne,
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
      l.exports = {
        Error,
        TypeError: O,
        RangeError: q,
        CancellationError: ne.CancellationError,
        OperationalError: ne.OperationalError,
        TimeoutError: ne.TimeoutError,
        AggregateError: ne.AggregateError,
        Warning: J
      };
    }, {
      "./es5": 10,
      "./util": 21
    }],
    10: [function (m, l, M) {
      var O = function () {
        "use strict";

        return this === undefined;
      }();
      if (O) {
        l.exports = {
          freeze: Object.freeze,
          defineProperty: Object.defineProperty,
          getDescriptor: Object.getOwnPropertyDescriptor,
          keys: Object.keys,
          names: Object.getOwnPropertyNames,
          getPrototypeOf: Object.getPrototypeOf,
          isArray: Array.isArray,
          isES5: O,
          propertyIsWritable: function (A, H) {
            var $ = Object.getOwnPropertyDescriptor(A, H);
            return !$ || !!$.writable || !!$.set;
          }
        };
      } else {
        var q = {}.hasOwnProperty;
        var ee = {}.toString;
        var G = {}.constructor.prototype;
        function B(A) {
          var H = [];
          for (var $ in A) {
            if (q.call(A, $)) {
              H.push($);
            }
          }
          return H;
        }
        l.exports = {
          isArray: function (A) {
            try {
              return ee.call(A) === "[object Array]";
            } catch {
              return false;
            }
          },
          keys: B,
          names: B,
          defineProperty: function (A, H, $) {
            A[H] = $.value;
            return A;
          },
          getDescriptor: function (A, H) {
            return {
              value: A[H]
            };
          },
          freeze: function (A) {
            return A;
          },
          getPrototypeOf: function (A) {
            try {
              return Object(A).constructor.prototype;
            } catch {
              return G;
            }
          },
          isES5: O,
          propertyIsWritable: function () {
            return true;
          }
        };
      }
    }, {}],
    11: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q, ee) {
        var G = m("./util");
        var B = O.CancellationError;
        var A = G.errorObj;
        var H = m("./catch_filter")(ee);
        function $(L, ie, Y) {
          this.promise = L;
          this.type = ie;
          this.handler = Y;
          this.called = false;
          this.cancelPromise = null;
        }
        function J(L) {
          this.finallyHandler = L;
        }
        function Q(L, ie) {
          return L.cancelPromise != null && (arguments.length > 1 ? L.cancelPromise._reject(ie) : L.cancelPromise._cancel(), L.cancelPromise = null, true);
        }
        function U() {
          return F.call(this, this.promise._target()._settledValue());
        }
        function K(L) {
          if (!Q(this, L)) {
            A.e = L;
            return A;
          }
        }
        function F(L) {
          var ie = this.promise;
          var Y = this.handler;
          if (!this.called) {
            this.called = true;
            var ne = this.isFinallyHandler() ? Y.call(ie._boundValue()) : Y.call(ie._boundValue(), L);
            if (ne === ee) {
              return ne;
            }
            if (ne !== undefined) {
              ie._setReturnedNonUndefined();
              var le = q(ne, ie);
              if (le instanceof O) {
                if (this.cancelPromise != null) {
                  if (le._isCancelled()) {
                    var ge = new B("late cancellation observer");
                    ie._attachExtraTrace(ge);
                    A.e = ge;
                    return A;
                  }
                  if (le.isPending()) {
                    le._attachCancellationCallback(new J(this));
                  }
                }
                return le._then(U, K, undefined, this, undefined);
              }
            }
          }
          if (ie.isRejected()) {
            Q(this);
            A.e = L;
            return A;
          } else {
            Q(this);
            return L;
          }
        }
        $.prototype.isFinallyHandler = function () {
          return this.type === 0;
        };
        J.prototype._resultCancelled = function () {
          Q(this.finallyHandler);
        };
        O.prototype._passThrough = function (L, ie, Y, ne) {
          if (typeof L != "function") {
            return this.then();
          } else {
            return this._then(Y, ne, undefined, new $(this, ie, L), undefined);
          }
        };
        O.prototype.lastly = O.prototype.finally = function (L) {
          return this._passThrough(L, 0, F, F);
        };
        O.prototype.tap = function (L) {
          return this._passThrough(L, 1, F);
        };
        O.prototype.tapCatch = function (L) {
          var ie = arguments.length;
          if (ie === 1) {
            return this._passThrough(L, 1, undefined, F);
          }
          var Y;
          var ne = new Array(ie - 1);
          var le = 0;
          for (Y = 0; Y < ie - 1; ++Y) {
            var ge = arguments[Y];
            if (!G.isObject(ge)) {
              return O.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + G.classString(ge)));
            }
            ne[le++] = ge;
          }
          ne.length = le;
          var Ee = arguments[Y];
          return this._passThrough(H(ne, Ee, this), 1, undefined, F);
        };
        return $;
      };
    }, {
      "./catch_filter": 5,
      "./util": 21
    }],
    12: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q, ee, G, B) {
        m("./util");
        O.join = function () {
          var H;
          var $ = arguments.length - 1;
          if ($ > 0 && typeof arguments[$] == "function") {
            H = arguments[$];
          }
          var J = [].slice.call(arguments);
          if (H) {
            J.pop();
          }
          var Q = new q(J).promise();
          if (H !== undefined) {
            return Q.spread(H);
          } else {
            return Q;
          }
        };
      };
    }, {
      "./util": 21
    }],
    13: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q, ee, G, B) {
        var A = m("./util");
        var H = A.tryCatch;
        O.method = function ($) {
          if (typeof $ != "function") {
            throw new O.TypeError("expecting a function but got " + A.classString($));
          }
          return function () {
            var J = new O(q);
            J._captureStackTrace();
            J._pushContext();
            var Q = H($).apply(this, arguments);
            var U = J._popContext();
            B.checkForgottenReturns(Q, U, "Promise.method", J);
            J._resolveFromSyncValue(Q);
            return J;
          };
        };
        O.attempt = O.try = function ($) {
          if (typeof $ != "function") {
            return G("expecting a function but got " + A.classString($));
          }
          var J;
          var Q = new O(q);
          Q._captureStackTrace();
          Q._pushContext();
          if (arguments.length > 1) {
            B.deprecated("calling Promise.try with more than 1 argument");
            var U = arguments[1];
            var K = arguments[2];
            J = A.isArray(U) ? H($).apply(K, U) : H($).call(K, U);
          } else {
            J = H($)();
          }
          var F = Q._popContext();
          B.checkForgottenReturns(J, F, "Promise.try", Q);
          Q._resolveFromSyncValue(J);
          return Q;
        };
        O.prototype._resolveFromSyncValue = function ($) {
          if ($ === A.errorObj) {
            this._rejectCallback($.e, false);
          } else {
            this._resolveCallback($, true);
          }
        };
      };
    }, {
      "./util": 21
    }],
    14: [function (m, l, M) {
      "use strict";

      var O = m("./util");
      var q = O.maybeWrapAsError;
      var ee = m("./errors").OperationalError;
      var G = m("./es5");
      var B = /^(?:name|message|stack|cause)$/;
      function A(H) {
        var $;
        var K;
        if ((K = H) instanceof Error && G.getPrototypeOf(K) === Error.prototype) {
          ($ = new ee(H)).name = H.name;
          $.message = H.message;
          $.stack = H.stack;
          for (var J = G.keys(H), Q = 0; Q < J.length; ++Q) {
            var U = J[Q];
            if (!B.test(U)) {
              $[U] = H[U];
            }
          }
          return $;
        }
        O.markAsOriginatingFromRejection(H);
        return H;
      }
      l.exports = function (H, $) {
        return function (J, Q) {
          if (H !== null) {
            if (J) {
              var U = A(q(J));
              H._attachExtraTrace(U);
              H._reject(U);
            } else if ($) {
              var K = [].slice.call(arguments, 1);
              H._fulfill(K);
            } else {
              H._fulfill(Q);
            }
            H = null;
          }
        };
      };
    }, {
      "./errors": 9,
      "./es5": 10,
      "./util": 21
    }],
    15: [function (m, l, M) {
      "use strict";

      l.exports = function () {
        function O() {
          return new Y("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
        }
        function q() {
          return new ye.PromiseInspection(this._target());
        }
        function ee(de) {
          return ye.reject(new Y(de));
        }
        function G() {}
        var B = {};
        var A = m("./util");
        A.setReflectHandler(q);
        function H() {
          var de = y.domain;
          if (de === undefined) {
            return null;
          } else {
            return de;
          }
        }
        function $() {
          return {
            domain: H(),
            async: null
          };
        }
        var J = A.isNode && A.nodeSupportsAsyncResource ? m("async_hooks").AsyncResource : null;
        function Q() {
          return {
            domain: H(),
            async: new J("Bluebird::Promise")
          };
        }
        var U = A.isNode ? $ : function () {
          return null;
        };
        A.notEnumerableProp(ye, "_getContext", U);
        var K = m("./es5");
        var F = m("./async");
        var L = new F();
        K.defineProperty(ye, "_async", {
          value: L
        });
        var ie = m("./errors");
        var Y = ye.TypeError = ie.TypeError;
        ye.RangeError = ie.RangeError;
        var ne = ye.CancellationError = ie.CancellationError;
        ye.TimeoutError = ie.TimeoutError;
        ye.OperationalError = ie.OperationalError;
        ye.RejectionError = ie.OperationalError;
        ye.AggregateError = ie.AggregateError;
        function le() {}
        var ge = {};
        var Ee = {};
        var Le = m("./thenables")(ye, le);
        var Qe = m("./promise_array")(ye, le, Le, ee, G);
        var ae = m("./context")(ye);
        var fe = m("./debuggability")(ye, ae, function () {
          U = Q;
          A.notEnumerableProp(ye, "_getContext", Q);
        }, function () {
          U = $;
          A.notEnumerableProp(ye, "_getContext", $);
        });
        var Me = m("./finally")(ye, Le, Ee);
        var je = m("./catch_filter")(Ee);
        var ze = m("./nodeback");
        var we = A.errorObj;
        var Ce = A.tryCatch;
        function ye(de) {
          if (de !== le) {
            (function (pe, xe) {
              if (pe == null || pe.constructor !== ye) {
                throw new Y("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
              }
              if (typeof xe != "function") {
                throw new Y("expecting a function but got " + A.classString(xe));
              }
            })(this, de);
          }
          this._bitField = 0;
          this._fulfillmentHandler0 = undefined;
          this._rejectionHandler0 = undefined;
          this._promise0 = undefined;
          this._receiver0 = undefined;
          this._resolveFromExecutor(de);
          this._promiseCreated();
          this._fireEvent("promiseCreated", this);
        }
        function $e(de) {
          this.promise._resolveCallback(de);
        }
        function qe(de) {
          this.promise._rejectCallback(de, false);
        }
        function ue(de) {
          var pe = new ye(le);
          pe._fulfillmentHandler0 = de;
          pe._rejectionHandler0 = de;
          pe._promise0 = de;
          pe._receiver0 = de;
        }
        ye.prototype.toString = function () {
          return "[object Promise]";
        };
        ye.prototype.caught = ye.prototype.catch = function (de) {
          var pe = arguments.length;
          if (pe > 1) {
            var xe;
            var Xe = new Array(pe - 1);
            var rt = 0;
            for (xe = 0; xe < pe - 1; ++xe) {
              var tt = arguments[xe];
              if (!A.isObject(tt)) {
                return ee("Catch statement predicate: expecting an object but got " + A.classString(tt));
              }
              Xe[rt++] = tt;
            }
            Xe.length = rt;
            if (typeof (de = arguments[xe]) != "function") {
              throw new Y("The last argument to .catch() must be a function, got " + A.toString(de));
            }
            return this.then(undefined, je(Xe, de, this));
          }
          return this.then(undefined, de);
        };
        ye.prototype.reflect = function () {
          return this._then(q, q, undefined, this, undefined);
        };
        ye.prototype.then = function (de, pe) {
          if (fe.warnings() && arguments.length > 0 && typeof de != "function" && typeof pe != "function") {
            var xe = ".then() only accepts functions but was passed: " + A.classString(de);
            if (arguments.length > 1) {
              xe += ", " + A.classString(pe);
            }
            this._warn(xe);
          }
          return this._then(de, pe, undefined, undefined, undefined);
        };
        ye.prototype.done = function (de, pe) {
          this._then(de, pe, undefined, undefined, undefined)._setIsFinal();
        };
        ye.prototype.spread = function (de) {
          if (typeof de != "function") {
            return ee("expecting a function but got " + A.classString(de));
          } else {
            return this.all()._then(de, undefined, undefined, ge, undefined);
          }
        };
        ye.prototype.toJSON = function () {
          var de = {
            isFulfilled: false,
            isRejected: false,
            fulfillmentValue: undefined,
            rejectionReason: undefined
          };
          if (this.isFulfilled()) {
            de.fulfillmentValue = this.value();
            de.isFulfilled = true;
          } else if (this.isRejected()) {
            de.rejectionReason = this.reason();
            de.isRejected = true;
          }
          return de;
        };
        ye.prototype.all = function () {
          if (arguments.length > 0) {
            this._warn(".all() was passed arguments but it does not take any");
          }
          return new Qe(this).promise();
        };
        ye.prototype.error = function (de) {
          return this.caught(A.originatesFromRejection, de);
        };
        ye.getNewLibraryCopy = l.exports;
        ye.is = function (de) {
          return de instanceof ye;
        };
        ye.fromNode = ye.fromCallback = function (de) {
          var pe = new ye(le);
          pe._captureStackTrace();
          var xe = arguments.length > 1 && !!Object(arguments[1]).multiArgs;
          var Xe = Ce(de)(ze(pe, xe));
          if (Xe === we) {
            pe._rejectCallback(Xe.e, true);
          }
          if (!pe._isFateSealed()) {
            pe._setAsyncGuaranteed();
          }
          return pe;
        };
        ye.all = function (de) {
          return new Qe(de).promise();
        };
        ye.cast = function (de) {
          var pe = Le(de);
          if (!(pe instanceof ye)) {
            (pe = new ye(le))._captureStackTrace();
            pe._setFulfilled();
            pe._rejectionHandler0 = de;
          }
          return pe;
        };
        ye.resolve = ye.fulfilled = ye.cast;
        ye.reject = ye.rejected = function (de) {
          var pe = new ye(le);
          pe._captureStackTrace();
          pe._rejectCallback(de, true);
          return pe;
        };
        ye.setScheduler = function (de) {
          if (typeof de != "function") {
            throw new Y("expecting a function but got " + A.classString(de));
          }
          return L.setScheduler(de);
        };
        ye.prototype._then = function (de, pe, xe, Xe, rt) {
          var tt = rt !== undefined;
          var Re = tt ? rt : new ye(le);
          var ot = this._target();
          var pt = ot._bitField;
          if (!tt) {
            Re._propagateFrom(this, 3);
            Re._captureStackTrace();
            if (Xe === undefined && (this._bitField & 2097152) != 0) {
              Xe = (pt & 50397184) != 0 ? this._boundValue() : ot === this ? undefined : this._boundTo;
            }
            this._fireEvent("promiseChained", this, Re);
          }
          var ct = U();
          if ((pt & 50397184) != 0) {
            var st;
            var Ze;
            var it = ot._settlePromiseCtx;
            if ((pt & 33554432) != 0) {
              Ze = ot._rejectionHandler0;
              st = de;
            } else if ((pt & 16777216) != 0) {
              Ze = ot._fulfillmentHandler0;
              st = pe;
              ot._unsetRejectionIsUnhandled();
            } else {
              it = ot._settlePromiseLateCancellationObserver;
              Ze = new ne("late cancellation observer");
              ot._attachExtraTrace(Ze);
              st = pe;
            }
            L.invoke(it, ot, {
              handler: A.contextBind(ct, st),
              promise: Re,
              receiver: Xe,
              value: Ze
            });
          } else {
            ot._addCallbacks(de, pe, Re, Xe, ct);
          }
          return Re;
        };
        ye.prototype._length = function () {
          return this._bitField & 65535;
        };
        ye.prototype._isFateSealed = function () {
          return (this._bitField & 117506048) != 0;
        };
        ye.prototype._isFollowing = function () {
          return (this._bitField & 67108864) == 67108864;
        };
        ye.prototype._setLength = function (de) {
          this._bitField = this._bitField & -65536 | de & 65535;
        };
        ye.prototype._setFulfilled = function () {
          this._bitField = this._bitField | 33554432;
          this._fireEvent("promiseFulfilled", this);
        };
        ye.prototype._setRejected = function () {
          this._bitField = this._bitField | 16777216;
          this._fireEvent("promiseRejected", this);
        };
        ye.prototype._setFollowing = function () {
          this._bitField = this._bitField | 67108864;
          this._fireEvent("promiseResolved", this);
        };
        ye.prototype._setIsFinal = function () {
          this._bitField = this._bitField | 4194304;
        };
        ye.prototype._isFinal = function () {
          return (this._bitField & 4194304) > 0;
        };
        ye.prototype._unsetCancelled = function () {
          this._bitField = this._bitField & -65537;
        };
        ye.prototype._setCancelled = function () {
          this._bitField = this._bitField | 65536;
          this._fireEvent("promiseCancelled", this);
        };
        ye.prototype._setWillBeCancelled = function () {
          this._bitField = this._bitField | 8388608;
        };
        ye.prototype._setAsyncGuaranteed = function () {
          if (!L.hasCustomScheduler()) {
            var de = this._bitField;
            this._bitField = de | (de & 536870912) >> 2 ^ 134217728;
          }
        };
        ye.prototype._setNoAsyncGuarantee = function () {
          this._bitField = (this._bitField | 536870912) & -134217729;
        };
        ye.prototype._receiverAt = function (de) {
          var pe = de === 0 ? this._receiver0 : this[de * 4 - 4 + 3];
          if (pe !== B) {
            if (pe === undefined && this._isBound()) {
              return this._boundValue();
            } else {
              return pe;
            }
          }
        };
        ye.prototype._promiseAt = function (de) {
          return this[de * 4 - 4 + 2];
        };
        ye.prototype._fulfillmentHandlerAt = function (de) {
          return this[de * 4 - 4 + 0];
        };
        ye.prototype._rejectionHandlerAt = function (de) {
          return this[de * 4 - 4 + 1];
        };
        ye.prototype._boundValue = function () {};
        ye.prototype._migrateCallback0 = function (de) {
          var pe = de._fulfillmentHandler0;
          var xe = de._rejectionHandler0;
          var Xe = de._promise0;
          var rt = de._receiverAt(0);
          if (rt === undefined) {
            rt = B;
          }
          this._addCallbacks(pe, xe, Xe, rt, null);
        };
        ye.prototype._migrateCallbackAt = function (de, pe) {
          var xe = de._fulfillmentHandlerAt(pe);
          var Xe = de._rejectionHandlerAt(pe);
          var rt = de._promiseAt(pe);
          var tt = de._receiverAt(pe);
          if (tt === undefined) {
            tt = B;
          }
          this._addCallbacks(xe, Xe, rt, tt, null);
        };
        ye.prototype._addCallbacks = function (de, pe, xe, Xe, rt) {
          var tt = this._length();
          if (tt >= 65531) {
            tt = 0;
            this._setLength(0);
          }
          if (tt === 0) {
            this._promise0 = xe;
            this._receiver0 = Xe;
            if (typeof de == "function") {
              this._fulfillmentHandler0 = A.contextBind(rt, de);
            }
            if (typeof pe == "function") {
              this._rejectionHandler0 = A.contextBind(rt, pe);
            }
          } else {
            var Re = tt * 4 - 4;
            this[Re + 2] = xe;
            this[Re + 3] = Xe;
            if (typeof de == "function") {
              this[Re + 0] = A.contextBind(rt, de);
            }
            if (typeof pe == "function") {
              this[Re + 1] = A.contextBind(rt, pe);
            }
          }
          this._setLength(tt + 1);
          return tt;
        };
        ye.prototype._proxy = function (de, pe) {
          this._addCallbacks(undefined, undefined, pe, de, null);
        };
        ye.prototype._resolveCallback = function (de, pe) {
          if ((this._bitField & 117506048) == 0) {
            if (de === this) {
              return this._rejectCallback(O(), false);
            }
            var xe = Le(de, this);
            if (!(xe instanceof ye)) {
              return this._fulfill(de);
            }
            if (pe) {
              this._propagateFrom(xe, 2);
            }
            var Xe = xe._target();
            if (Xe !== this) {
              var rt = Xe._bitField;
              if ((rt & 50397184) == 0) {
                var tt = this._length();
                if (tt > 0) {
                  Xe._migrateCallback0(this);
                }
                for (var Re = 1; Re < tt; ++Re) {
                  Xe._migrateCallbackAt(this, Re);
                }
                this._setFollowing();
                this._setLength(0);
                this._setFollowee(xe);
              } else if ((rt & 33554432) != 0) {
                this._fulfill(Xe._value());
              } else if ((rt & 16777216) != 0) {
                this._reject(Xe._reason());
              } else {
                var ot = new ne("late cancellation observer");
                Xe._attachExtraTrace(ot);
                this._reject(ot);
              }
            } else {
              this._reject(O());
            }
          }
        };
        ye.prototype._rejectCallback = function (de, pe, xe) {
          var Xe = A.ensureErrorObject(de);
          var rt = Xe === de;
          if (!rt && !xe && fe.warnings()) {
            var tt = "a promise was rejected with a non-error: " + A.classString(de);
            this._warn(tt, true);
          }
          this._attachExtraTrace(Xe, !!pe && rt);
          this._reject(de);
        };
        ye.prototype._resolveFromExecutor = function (de) {
          if (de !== le) {
            var pe = this;
            this._captureStackTrace();
            this._pushContext();
            var xe = true;
            var Xe = this._execute(de, function (rt) {
              pe._resolveCallback(rt);
            }, function (rt) {
              pe._rejectCallback(rt, xe);
            });
            xe = false;
            this._popContext();
            if (Xe !== undefined) {
              pe._rejectCallback(Xe, true);
            }
          }
        };
        ye.prototype._settlePromiseFromHandler = function (de, pe, xe, Xe) {
          var rt = Xe._bitField;
          if ((rt & 65536) == 0) {
            var tt;
            Xe._pushContext();
            if (pe === ge) {
              if (xe && typeof xe.length == "number") {
                tt = Ce(de).apply(this._boundValue(), xe);
              } else {
                (tt = we).e = new Y("cannot .spread() a non-array: " + A.classString(xe));
              }
            } else {
              tt = Ce(de).call(pe, xe);
            }
            var Re = Xe._popContext();
            if (((rt = Xe._bitField) & 65536) == 0) {
              if (tt === Ee) {
                Xe._reject(xe);
              } else if (tt === we) {
                Xe._rejectCallback(tt.e, false);
              } else {
                fe.checkForgottenReturns(tt, Re, "", Xe, this);
                Xe._resolveCallback(tt);
              }
            }
          }
        };
        ye.prototype._target = function () {
          for (var de = this; de._isFollowing();) {
            de = de._followee();
          }
          return de;
        };
        ye.prototype._followee = function () {
          return this._rejectionHandler0;
        };
        ye.prototype._setFollowee = function (de) {
          this._rejectionHandler0 = de;
        };
        ye.prototype._settlePromise = function (de, pe, xe, Xe) {
          var rt = de instanceof ye;
          var tt = this._bitField;
          var Re = (tt & 134217728) != 0;
          if ((tt & 65536) != 0) {
            if (rt) {
              de._invokeInternalOnCancel();
            }
            if (xe instanceof Me && xe.isFinallyHandler()) {
              xe.cancelPromise = de;
              if (Ce(pe).call(xe, Xe) === we) {
                de._reject(we.e);
              }
            } else if (pe === q) {
              de._fulfill(q.call(xe));
            } else if (xe instanceof G) {
              xe._promiseCancelled(de);
            } else if (rt || de instanceof Qe) {
              de._cancel();
            } else {
              xe.cancel();
            }
          } else if (typeof pe == "function") {
            if (rt) {
              if (Re) {
                de._setAsyncGuaranteed();
              }
              this._settlePromiseFromHandler(pe, xe, Xe, de);
            } else {
              pe.call(xe, Xe, de);
            }
          } else if (xe instanceof G) {
            if (!xe._isResolved()) {
              if ((tt & 33554432) != 0) {
                xe._promiseFulfilled(Xe, de);
              } else {
                xe._promiseRejected(Xe, de);
              }
            }
          } else if (rt) {
            if (Re) {
              de._setAsyncGuaranteed();
            }
            if ((tt & 33554432) != 0) {
              de._fulfill(Xe);
            } else {
              de._reject(Xe);
            }
          }
        };
        ye.prototype._settlePromiseLateCancellationObserver = function (de) {
          var pe = de.handler;
          var xe = de.promise;
          var Xe = de.receiver;
          var rt = de.value;
          if (typeof pe == "function") {
            if (xe instanceof ye) {
              this._settlePromiseFromHandler(pe, Xe, rt, xe);
            } else {
              pe.call(Xe, rt, xe);
            }
          } else if (xe instanceof ye) {
            xe._reject(rt);
          }
        };
        ye.prototype._settlePromiseCtx = function (de) {
          this._settlePromise(de.promise, de.handler, de.receiver, de.value);
        };
        ye.prototype._settlePromise0 = function (de, pe, xe) {
          var Xe = this._promise0;
          var rt = this._receiverAt(0);
          this._promise0 = undefined;
          this._receiver0 = undefined;
          this._settlePromise(Xe, de, rt, pe);
        };
        ye.prototype._clearCallbackDataAtIndex = function (de) {
          var pe = de * 4 - 4;
          this[pe + 2] = this[pe + 3] = this[pe + 0] = this[pe + 1] = undefined;
        };
        ye.prototype._fulfill = function (de) {
          var pe = this._bitField;
          if (!((pe & 117506048) >>> 16)) {
            if (de === this) {
              var xe = O();
              this._attachExtraTrace(xe);
              return this._reject(xe);
            }
            this._setFulfilled();
            this._rejectionHandler0 = de;
            if ((pe & 65535) > 0) {
              if ((pe & 134217728) != 0) {
                this._settlePromises();
              } else {
                L.settlePromises(this);
              }
              this._dereferenceTrace();
            }
          }
        };
        ye.prototype._reject = function (de) {
          var pe = this._bitField;
          if (!((pe & 117506048) >>> 16)) {
            this._setRejected();
            this._fulfillmentHandler0 = de;
            if (this._isFinal()) {
              return L.fatalError(de, A.isNode);
            }
            if ((pe & 65535) > 0) {
              L.settlePromises(this);
            } else {
              this._ensurePossibleRejectionHandled();
            }
          }
        };
        ye.prototype._fulfillPromises = function (de, pe) {
          for (var xe = 1; xe < de; xe++) {
            var Xe = this._fulfillmentHandlerAt(xe);
            var rt = this._promiseAt(xe);
            var tt = this._receiverAt(xe);
            this._clearCallbackDataAtIndex(xe);
            this._settlePromise(rt, Xe, tt, pe);
          }
        };
        ye.prototype._rejectPromises = function (de, pe) {
          for (var xe = 1; xe < de; xe++) {
            var Xe = this._rejectionHandlerAt(xe);
            var rt = this._promiseAt(xe);
            var tt = this._receiverAt(xe);
            this._clearCallbackDataAtIndex(xe);
            this._settlePromise(rt, Xe, tt, pe);
          }
        };
        ye.prototype._settlePromises = function () {
          var de = this._bitField;
          var pe = de & 65535;
          if (pe > 0) {
            if ((de & 16842752) != 0) {
              var xe = this._fulfillmentHandler0;
              this._settlePromise0(this._rejectionHandler0, xe, de);
              this._rejectPromises(pe, xe);
            } else {
              var Xe = this._rejectionHandler0;
              this._settlePromise0(this._fulfillmentHandler0, Xe, de);
              this._fulfillPromises(pe, Xe);
            }
            this._setLength(0);
          }
          this._clearCancellationData();
        };
        ye.prototype._settledValue = function () {
          var de = this._bitField;
          if ((de & 33554432) != 0) {
            return this._rejectionHandler0;
          } else if ((de & 16777216) != 0) {
            return this._fulfillmentHandler0;
          } else {
            return undefined;
          }
        };
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          K.defineProperty(ye.prototype, Symbol.toStringTag, {
            get: function () {
              return "Object";
            }
          });
        }
        ye.defer = ye.pending = function () {
          fe.deprecated("Promise.defer", "new Promise");
          return {
            promise: new ye(le),
            resolve: $e,
            reject: qe
          };
        };
        A.notEnumerableProp(ye, "_makeSelfResolutionError", O);
        m("./method")(ye, le, Le, ee, fe);
        m("./bind")(ye, le, Le, fe);
        m("./cancel")(ye, Qe, ee, fe);
        m("./direct_resolve")(ye);
        m("./synchronous_inspection")(ye);
        m("./join")(ye, Qe, Le, le, L);
        ye.Promise = ye;
        ye.version = "3.7.2";
        A.toFastProperties(ye);
        A.toFastProperties(ye.prototype);
        ue({
          a: 1
        });
        ue({
          b: 2
        });
        ue({
          c: 3
        });
        ue(1);
        ue(function () {});
        ue(undefined);
        ue(false);
        ue(new ye(le));
        fe.setBounds(F.firstLineError, A.lastLineError);
        return ye;
      };
    }, {
      "./async": 1,
      "./bind": 2,
      "./cancel": 4,
      "./catch_filter": 5,
      "./context": 6,
      "./debuggability": 7,
      "./direct_resolve": 8,
      "./errors": 9,
      "./es5": 10,
      "./finally": 11,
      "./join": 12,
      "./method": 13,
      "./nodeback": 14,
      "./promise_array": 16,
      "./synchronous_inspection": 19,
      "./thenables": 20,
      "./util": 21,
      async_hooks: undefined
    }],
    16: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q, ee, G, B) {
        var A = m("./util");
        function H($) {
          var J = this._promise = new O(q);
          if ($ instanceof O) {
            J._propagateFrom($, 3);
            $.suppressUnhandledRejections();
          }
          J._setOnCancel(this);
          this._values = $;
          this._length = 0;
          this._totalResolved = 0;
          this._init(undefined, -2);
        }
        A.inherits(H, B);
        H.prototype.length = function () {
          return this._length;
        };
        H.prototype.promise = function () {
          return this._promise;
        };
        H.prototype._init = function $(J, Q) {
          var U = ee(this._values, this._promise);
          if (U instanceof O) {
            var K = (U = U._target())._bitField;
            this._values = U;
            if ((K & 50397184) == 0) {
              this._promise._setAsyncGuaranteed();
              return U._then($, this._reject, undefined, this, Q);
            }
            if ((K & 33554432) == 0) {
              if ((K & 16777216) != 0) {
                return this._reject(U._reason());
              } else {
                return this._cancel();
              }
            }
            U = U._value();
          }
          if ((U = A.asArray(U)) !== null) {
            if (U.length !== 0) {
              this._iterate(U);
            } else if (Q === -5) {
              this._resolveEmptyArray();
            } else {
              this._resolve(function (L) {
                switch (L) {
                  case -2:
                    return [];
                  case -3:
                    return {};
                  case -6:
                    return new Map();
                }
              }(Q));
            }
          } else {
            var F = G("expecting an array or an iterable object but got " + A.classString(U)).reason();
            this._promise._rejectCallback(F, false);
          }
        };
        H.prototype._iterate = function ($) {
          var J = this.getActualLength($.length);
          this._length = J;
          this._values = this.shouldCopyValues() ? new Array(J) : this._values;
          for (var Q = this._promise, U = false, K = null, F = 0; F < J; ++F) {
            var L = ee($[F], Q);
            K = L instanceof O ? (L = L._target())._bitField : null;
            if (U) {
              if (K !== null) {
                L.suppressUnhandledRejections();
              }
            } else if (K !== null) {
              if ((K & 50397184) == 0) {
                L._proxy(this, F);
                this._values[F] = L;
              } else {
                U = (K & 33554432) != 0 ? this._promiseFulfilled(L._value(), F) : (K & 16777216) != 0 ? this._promiseRejected(L._reason(), F) : this._promiseCancelled(F);
              }
            } else {
              U = this._promiseFulfilled(L, F);
            }
          }
          if (!U) {
            Q._setAsyncGuaranteed();
          }
        };
        H.prototype._isResolved = function () {
          return this._values === null;
        };
        H.prototype._resolve = function ($) {
          this._values = null;
          this._promise._fulfill($);
        };
        H.prototype._cancel = function () {
          if (!this._isResolved() && this._promise._isCancellable()) {
            this._values = null;
            this._promise._cancel();
          }
        };
        H.prototype._reject = function ($) {
          this._values = null;
          this._promise._rejectCallback($, false);
        };
        H.prototype._promiseFulfilled = function ($, J) {
          this._values[J] = $;
          return ++this._totalResolved >= this._length && (this._resolve(this._values), true);
        };
        H.prototype._promiseCancelled = function () {
          this._cancel();
          return true;
        };
        H.prototype._promiseRejected = function ($) {
          this._totalResolved++;
          this._reject($);
          return true;
        };
        H.prototype._resultCancelled = function () {
          if (!this._isResolved()) {
            var $ = this._values;
            this._cancel();
            if ($ instanceof O) {
              $.cancel();
            } else {
              for (var J = 0; J < $.length; ++J) {
                if ($[J] instanceof O) {
                  $[J].cancel();
                }
              }
            }
          }
        };
        H.prototype.shouldCopyValues = function () {
          return true;
        };
        H.prototype.getActualLength = function ($) {
          return $;
        };
        return H;
      };
    }, {
      "./util": 21
    }],
    17: [function (m, l, M) {
      "use strict";

      function O(q) {
        this._capacity = q;
        this._length = 0;
        this._front = 0;
      }
      O.prototype._willBeOverCapacity = function (q) {
        return this._capacity < q;
      };
      O.prototype._pushOne = function (q) {
        var ee = this.length();
        this._checkCapacity(ee + 1);
        this[this._front + ee & this._capacity - 1] = q;
        this._length = ee + 1;
      };
      O.prototype.push = function (q, ee, G) {
        var B = this.length() + 3;
        if (this._willBeOverCapacity(B)) {
          this._pushOne(q);
          this._pushOne(ee);
          this._pushOne(G);
          return;
        }
        var A = this._front + B - 3;
        this._checkCapacity(B);
        var H = this._capacity - 1;
        this[A + 0 & H] = q;
        this[A + 1 & H] = ee;
        this[A + 2 & H] = G;
        this._length = B;
      };
      O.prototype.shift = function () {
        var q = this._front;
        var ee = this[q];
        this[q] = undefined;
        this._front = q + 1 & this._capacity - 1;
        this._length--;
        return ee;
      };
      O.prototype.length = function () {
        return this._length;
      };
      O.prototype._checkCapacity = function (q) {
        if (this._capacity < q) {
          this._resizeTo(this._capacity << 1);
        }
      };
      O.prototype._resizeTo = function (q) {
        var ee = this._capacity;
        this._capacity = q;
        (function (G, B, A, H, $) {
          for (var J = 0; J < $; ++J) {
            A[J + H] = G[J + 0];
            G[J + 0] = undefined;
          }
        })(this, 0, this, ee, this._front + this._length & ee - 1);
      };
      l.exports = O;
    }, {}],
    18: [function (m, l, M) {
      "use strict";

      var O;
      var H;
      var $;
      var J;
      var Q;
      var q = m("./util");
      var ee = q.getNativePromise();
      if (q.isNode && typeof MutationObserver === "undefined") {
        var G = w.setImmediate;
        var B = y.nextTick;
        O = q.isRecentNode ? function (H) {
          G.call(w, H);
        } : function (H) {
          B.call(y, H);
        };
      } else if (typeof ee == "function" && typeof ee.resolve == "function") {
        var A = ee.resolve();
        O = function (H) {
          A.then(H);
        };
      } else {
        O = typeof MutationObserver !== "undefined" && (typeof window === "undefined" || !window.navigator || !window.navigator.standalone && !window.cordova) && "classList" in document.documentElement ? (H = document.createElement("div"), $ = {
          attributes: true
        }, J = false, Q = document.createElement("div"), new MutationObserver(function () {
          H.classList.toggle("foo");
          J = false;
        }).observe(Q, $), function (U) {
          var K = new MutationObserver(function () {
            K.disconnect();
            U();
          });
          K.observe(H, $);
          if (!J) {
            J = true;
            Q.classList.toggle("foo");
          }
        }) : E !== undefined ? function (H) {
          E(H);
        } : typeof setTimeout !== "undefined" ? function (H) {
          setTimeout(H, 0);
        } : function () {
          throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
        };
      }
      l.exports = O;
    }, {
      "./util": 21
    }],
    19: [function (m, l, M) {
      "use strict";

      l.exports = function (O) {
        function q(J) {
          if (J !== undefined) {
            J = J._target();
            this._bitField = J._bitField;
            this._settledValueField = J._isFateSealed() ? J._settledValue() : undefined;
          } else {
            this._bitField = 0;
            this._settledValueField = undefined;
          }
        }
        q.prototype._settledValue = function () {
          return this._settledValueField;
        };
        var ee = q.prototype.value = function () {
          if (!this.isFulfilled()) {
            throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
          }
          return this._settledValue();
        };
        var G = q.prototype.error = q.prototype.reason = function () {
          if (!this.isRejected()) {
            throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
          }
          return this._settledValue();
        };
        var B = q.prototype.isFulfilled = function () {
          return (this._bitField & 33554432) != 0;
        };
        var A = q.prototype.isRejected = function () {
          return (this._bitField & 16777216) != 0;
        };
        var H = q.prototype.isPending = function () {
          return (this._bitField & 50397184) == 0;
        };
        var $ = q.prototype.isResolved = function () {
          return (this._bitField & 50331648) != 0;
        };
        q.prototype.isCancelled = function () {
          return (this._bitField & 8454144) != 0;
        };
        O.prototype.__isCancelled = function () {
          return (this._bitField & 65536) == 65536;
        };
        O.prototype._isCancelled = function () {
          return this._target().__isCancelled();
        };
        O.prototype.isCancelled = function () {
          return (this._target()._bitField & 8454144) != 0;
        };
        O.prototype.isPending = function () {
          return H.call(this._target());
        };
        O.prototype.isRejected = function () {
          return A.call(this._target());
        };
        O.prototype.isFulfilled = function () {
          return B.call(this._target());
        };
        O.prototype.isResolved = function () {
          return $.call(this._target());
        };
        O.prototype.value = function () {
          return ee.call(this._target());
        };
        O.prototype.reason = function () {
          var J = this._target();
          J._unsetRejectionIsUnhandled();
          return G.call(J);
        };
        O.prototype._value = function () {
          return this._settledValue();
        };
        O.prototype._reason = function () {
          this._unsetRejectionIsUnhandled();
          return this._settledValue();
        };
        O.PromiseInspection = q;
      };
    }, {}],
    20: [function (m, l, M) {
      "use strict";

      l.exports = function (O, q) {
        var ee = m("./util");
        var G = ee.errorObj;
        var B = ee.isObject;
        var A = {}.hasOwnProperty;
        return function (H, $) {
          if (B(H)) {
            if (H instanceof O) {
              return H;
            }
            var J = function (U) {
              try {
                return (K = U).then;
              } catch (K) {
                G.e = K;
                return G;
              }
              var K;
            }(H);
            if (J === G) {
              if ($) {
                $._pushContext();
              }
              var Q = O.reject(J.e);
              if ($) {
                $._popContext();
              }
              return Q;
            }
            if (typeof J == "function") {
              if (function (U) {
                try {
                  return A.call(U, "_promise0");
                } catch {
                  return false;
                }
              }(H)) {
                Q = new O(q);
                H._then(Q._fulfill, Q._reject, undefined, Q, null);
                return Q;
              } else {
                return function (U, K, F) {
                  var L = new O(q);
                  var ie = L;
                  if (F) {
                    F._pushContext();
                  }
                  L._captureStackTrace();
                  if (F) {
                    F._popContext();
                  }
                  var Y = true;
                  var ne = ee.tryCatch(K).call(U, function (le) {
                    if (L) {
                      L._resolveCallback(le);
                      L = null;
                    }
                  }, function (le) {
                    if (L) {
                      L._rejectCallback(le, Y, true);
                      L = null;
                    }
                  });
                  Y = false;
                  if (L && ne === G) {
                    L._rejectCallback(ne.e, true, true);
                    L = null;
                  }
                  return ie;
                }(H, J, $);
              }
            }
          }
          return H;
        };
      };
    }, {
      "./util": 21
    }],
    21: [function (m, l, M) {
      "use strict";

      var G;
      var O = m("./es5");
      var q = typeof navigator === "undefined";
      var ee = {
        e: {}
      };
      var B = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : w !== undefined ? w : this !== undefined ? this : null;
      function A() {
        try {
          var Re = G;
          G = null;
          return Re.apply(this, arguments);
        } catch (ot) {
          ee.e = ot;
          return ee;
        }
      }
      function J(Re) {
        return Re == null || Re === true || Re === false || typeof Re == "string" || typeof Re == "number";
      }
      function L(Re, ot, pt) {
        if (!J(Re)) {
          O.defineProperty(Re, ot, {
            value: pt,
            configurable: true,
            enumerable: false,
            writable: true
          });
        }
        return Re;
      }
      var Y = function () {
        var Re = [Array.prototype, Object.prototype, Function.prototype];
        function ot(st) {
          for (var Ze = 0; Ze < Re.length; ++Ze) {
            if (Re[Ze] === st) {
              return true;
            }
          }
          return false;
        }
        if (O.isES5) {
          var pt = Object.getOwnPropertyNames;
          return function (st) {
            for (var Ze = [], it = Object.create(null); st != null && !ot(st);) {
              var vt;
              try {
                vt = pt(st);
              } catch {
                return Ze;
              }
              for (var nt = 0; nt < vt.length; ++nt) {
                var gt = vt[nt];
                if (!it[gt]) {
                  it[gt] = true;
                  var Ye = Object.getOwnPropertyDescriptor(st, gt);
                  if (Ye != null && Ye.get == null && Ye.set == null) {
                    Ze.push(gt);
                  }
                }
              }
              st = O.getPrototypeOf(st);
            }
            return Ze;
          };
        }
        var ct = {}.hasOwnProperty;
        return function (st) {
          if (ot(st)) {
            return [];
          }
          var Ze = [];
          e: for (var it in st) {
            if (ct.call(st, it)) {
              Ze.push(it);
            } else {
              for (var vt = 0; vt < Re.length; ++vt) {
                if (ct.call(Re[vt], it)) {
                  continue e;
                }
              }
              Ze.push(it);
            }
          }
          return Ze;
        };
      }();
      var ne = /this\s*\.\s*\S+\s*=/;
      var Ee = /^[a-z$_][a-z$_0-9]*$/i;
      function ae(Re) {
        try {
          return Re + "";
        } catch {
          return "[no string representation]";
        }
      }
      function fe(Re) {
        return Re instanceof Error || Re !== null && x(Re) === "object" && typeof Re.message == "string" && typeof Re.name == "string";
      }
      function ze(Re) {
        return fe(Re) && O.propertyIsWritable(Re, "stack");
      }
      var we = "stack" in new Error() ? function (Re) {
        if (ze(Re)) {
          return Re;
        } else {
          return new Error(ae(Re));
        }
      } : function (Re) {
        if (ze(Re)) {
          return Re;
        }
        try {
          throw new Error(ae(Re));
        } catch (ot) {
          return ot;
        }
      };
      function Ce(Re) {
        return {}.toString.call(Re);
      }
      function $e(Re) {
        if (O.isArray(Re)) {
          return Re;
        } else {
          return null;
        }
      }
      if (typeof Symbol !== "undefined" && Symbol.iterator) {
        var qe = typeof Array.from == "function" ? function (Re) {
          return Array.from(Re);
        } : function (Re) {
          for (var ot, pt = [], ct = Re[Symbol.iterator](); !(ot = ct.next()).done;) {
            pt.push(ot.value);
          }
          return pt;
        };
        $e = function (Re) {
          if (O.isArray(Re)) {
            return Re;
          } else if (Re != null && typeof Re[Symbol.iterator] == "function") {
            return qe(Re);
          } else {
            return null;
          }
        };
      }
      var pe;
      var Re;
      var ue = y !== undefined && Ce(y).toLowerCase() === "[object process]";
      var de = y !== undefined && y.env !== undefined;
      var tt = {
        setReflectHandler: function (Re) {
          pe = Re;
        },
        isClass: function le(Re) {
          try {
            if (typeof Re == "function") {
              var ot = O.names(Re.prototype);
              var pt = O.isES5 && ot.length > 1;
              var ct = ot.length > 0 && (ot.length !== 1 || ot[0] !== "constructor");
              var st = ne.test(Re + "") && O.names(Re).length > 0;
              if (pt || ct || st) {
                return true;
              }
            }
            return false;
          } catch {
            return false;
          }
        },
        isIdentifier: function Le(Re) {
          return Ee.test(Re);
        },
        inheritedDataKeys: Y,
        getDataPropertyOrDefault: function F(Re, ot, pt) {
          if (!O.isES5) {
            if ({}.hasOwnProperty.call(Re, ot)) {
              return Re[ot];
            } else {
              return undefined;
            }
          }
          var ct = Object.getOwnPropertyDescriptor(Re, ot);
          if (ct != null) {
            if (ct.get == null && ct.set == null) {
              return ct.value;
            } else {
              return pt;
            }
          } else {
            return undefined;
          }
        },
        thrower: function ie(Re) {
          throw Re;
        },
        isArray: O.isArray,
        asArray: $e,
        notEnumerableProp: L,
        isPrimitive: J,
        isObject: function Q(Re) {
          return typeof Re == "function" || x(Re) === "object" && Re !== null;
        },
        isError: fe,
        canEvaluate: q,
        errorObj: ee,
        tryCatch: function H(Re) {
          G = Re;
          return A;
        },
        inherits: function (Re, ot) {
          var pt = {}.hasOwnProperty;
          function ct() {
            this.constructor = Re;
            this.constructor$ = ot;
            for (var st in ot.prototype) {
              if (pt.call(ot.prototype, st) && st.charAt(st.length - 1) !== "$") {
                this[st + "$"] = ot.prototype[st];
              }
            }
          }
          ct.prototype = ot.prototype;
          Re.prototype = new ct();
          return Re.prototype;
        },
        withAppended: function K(Re, ot) {
          var pt;
          var ct = Re.length;
          var st = new Array(ct + 1);
          for (pt = 0; pt < ct; ++pt) {
            st[pt] = Re[pt];
          }
          st[pt] = ot;
          return st;
        },
        maybeWrapAsError: function U(Re) {
          if (J(Re)) {
            return new Error(ae(Re));
          } else {
            return Re;
          }
        },
        toFastProperties: function ge(Re) {
          function ot() {}
          ot.prototype = Re;
          var pt = new ot();
          function ct() {
            return x(pt.foo);
          }
          ct();
          ct();
          return Re;
        },
        filledRange: function Qe(Re, ot, pt) {
          for (var ct = new Array(Re), st = 0; st < Re; ++st) {
            ct[st] = ot + st + pt;
          }
          return ct;
        },
        toString: ae,
        canAttachTrace: ze,
        ensureErrorObject: we,
        originatesFromRejection: function je(Re) {
          return Re != null && (Re instanceof Error.__BluebirdErrorTypes__.OperationalError || Re.isOperational === true);
        },
        markAsOriginatingFromRejection: function Me(Re) {
          try {
            L(Re, "isOperational", true);
          } catch {}
        },
        classString: Ce,
        copyDescriptors: function ye(Re, ot, pt) {
          for (var ct = O.names(Re), st = 0; st < ct.length; ++st) {
            var Ze = ct[st];
            if (pt(Ze)) {
              try {
                O.defineProperty(ot, Ze, O.getDescriptor(Re, Ze));
              } catch {}
            }
          }
        },
        isNode: ue,
        hasEnvVariables: de,
        env: function xe(Re) {
          if (de) {
            return y.env[Re];
          } else {
            return undefined;
          }
        },
        global: B,
        getNativePromise: function Xe() {
          if (typeof Promise == "function") {
            try {
              if (Ce(new Promise(function () {})) === "[object Promise]") {
                return Promise;
              }
            } catch {}
          }
        },
        contextBind: function rt(Re, ot) {
          if (Re === null || typeof ot != "function" || ot === pe) {
            return ot;
          }
          if (Re.domain !== null) {
            ot = Re.domain.bind(ot);
          }
          var pt = Re.async;
          if (pt !== null) {
            var ct = ot;
            ot = function () {
              var st = new Array(2).concat([].slice.call(arguments));
              st[0] = ct;
              st[1] = this;
              return pt.runInAsyncScope.apply(pt, st);
            };
          }
          return ot;
        }
      };
      tt.isRecentNode = tt.isNode && (y.versions && y.versions.node ? Re = y.versions.node.split(".").map(Number) : y.version && (Re = y.version.split(".").map(Number)), Re[0] === 0 && Re[1] > 10 || Re[0] > 0);
      tt.nodeSupportsAsyncResource = tt.isNode && function () {
        var Re = false;
        try {
          Re = typeof m("async_hooks").AsyncResource.prototype.runInAsyncScope == "function";
        } catch {
          Re = false;
        }
        return Re;
      }();
      if (tt.isNode) {
        tt.toFastProperties(y);
      }
      try {
        throw new Error();
      } catch (Re) {
        tt.lastLineError = Re;
      }
      l.exports = tt;
    }, {
      "./es5": 10,
      async_hooks: undefined
    }]
  }, {}, [3])(3);
};
if (x(__webpack_exports__) == "object" && __webpack_module__ !== undefined) {
  __webpack_module__.exports = S();
} else if ((N = typeof (R = S) == "function" ? R.apply(__webpack_exports__, []) : R) !== undefined) {
  __webpack_module__.exports = N;
}
if (typeof window !== "undefined" && window !== null) {
  window.P = window.Promise;
} else if (typeof self !== "undefined" && self !== null) {
  self.P = self.Promise;
}