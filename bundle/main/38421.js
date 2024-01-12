import * as i from "70655";
import * as k from "69751";
import * as S from "53260";
export function Xf(fe) {
  if (fe instanceof k.y) {
    return fe;
  }
  if (fe != null) {
    if ((0, M.c)(fe)) {
      return function x(fe) {
        return new k.y(q => {
          const j = fe[E.L]();
          if ((0, L.m)(j.subscribe)) {
            return j.subscribe(q);
          }
          throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
      }(fe);
    }
    if ((0, t.z)(fe)) {
      return function U(fe) {
        return new k.y(q => {
          for (let j = 0; j < fe.length && !q.closed; j++) {
            q.next(fe[j]);
          }
          q.complete();
        });
      }(fe);
    }
    if ((0, b.t)(fe)) {
      return function B(fe) {
        return new k.y(q => {
          fe.then(j => {
            if (!q.closed) {
              q.next(j);
              q.complete();
            }
          }, j => q.error(j)).then(null, I.h);
        });
      }(fe);
    }
    if ((0, v.D)(fe)) {
      return Z(fe);
    }
    if ((0, w.T)(fe)) {
      return function F(fe) {
        return new k.y(q => {
          for (const j of fe) {
            q.next(j);
            if (q.closed) {
              return;
            }
          }
          q.complete();
        });
      }(fe);
    }
    if ((0, S.L)(fe)) {
      return function X(fe) {
        return Z((0, S.Q)(fe));
      }(fe);
    }
  }
  throw (0, C.z)(fe);
}
function Z(fe) {
  return new k.y(q => {
    (function le(fe, q) {
      var j;
      var G;
      var se;
      var W;
      return (0, i.mG)(this, undefined, undefined, function* () {
        try {
          for (j = (0, i.KL)(fe); !(G = yield j.next()).done;) {
            q.next(G.value);
            if (q.closed) {
              return;
            }
          }
        } catch (Pe) {
          se = {
            error: Pe
          };
        } finally {
          try {
            if (G && !G.done && (W = j.return)) {
              yield W.call(j);
            }
          } finally {
            if (se) {
              throw se.error;
            }
          }
        }
        q.complete();
      });
    })(fe, q).catch(j => q.error(j));
  });
}