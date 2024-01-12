var t = require("5112")("iterator");
var b = false;
try {
  var k = 0;
  var M = {
    next: function () {
      return {
        done: !!k++
      };
    },
    return: function () {
      b = true;
    }
  };
  M[t] = function () {
    return this;
  };
  Array.from(M, function () {
    throw 2;
  });
} catch {}
__webpack_module__.exports = function (v, C) {
  if (!C && !b) {
    return false;
  }
  var w = false;
  try {
    var S = {
      [t]: function () {
        return {
          next: function () {
            return {
              done: w = true
            };
          }
        };
      }
    };
    v(S);
  } catch {}
  return w;
};