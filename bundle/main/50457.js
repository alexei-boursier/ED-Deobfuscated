import * as i from "38421";
import * as t from "85363";
function k(G, se = 0) {
  return (0, b.e)((W, Pe) => {
    Pe.add(G.schedule(() => W.subscribe(Pe), se));
  });
}
import * as C from "69751";
import * as I from "39672";
function O(G, se) {
  if (!G) {
    throw new Error("Iterable cannot be null");
  }
  return new C.y(W => {
    (0, I.f)(W, se, () => {
      const Pe = G[Symbol.asyncIterator]();
      (0, I.f)(W, se, () => {
        Pe.next().then(Le => {
          if (Le.done) {
            W.complete();
          } else {
            W.next(Le.value);
          }
        });
      }, 0, true);
    });
  });
}
import * as le from "53260";
export function D(G, se) {
  if (se) {
    return function q(G, se) {
      if (G != null) {
        if ((0, x.c)(G)) {
          return function M(G, se) {
            return (0, i.Xf)(G).pipe(k(se), (0, t.Q)(se));
          }(G, se);
        }
        if ((0, B.z)(G)) {
          return function w(G, se) {
            return new C.y(W => {
              let Pe = 0;
              return se.schedule(function () {
                if (Pe === G.length) {
                  W.complete();
                } else {
                  W.next(G[Pe++]);
                  if (!W.closed) {
                    this.schedule();
                  }
                }
              });
            });
          }(G, se);
        }
        if ((0, U.t)(G)) {
          return function v(G, se) {
            return (0, i.Xf)(G).pipe(k(se), (0, t.Q)(se));
          }(G, se);
        }
        if ((0, Z.D)(G)) {
          return O(G, se);
        }
        if ((0, F.T)(G)) {
          return function E(G, se) {
            return new C.y(W => {
              let Pe;
              (0, I.f)(W, se, () => {
                Pe = G[S.h]();
                (0, I.f)(W, se, () => {
                  let Le;
                  let he;
                  try {
                    ({
                      value: Le,
                      done: he
                    } = Pe.next());
                  } catch (pe) {
                    W.error(pe);
                    return;
                  }
                  if (he) {
                    W.complete();
                  } else {
                    W.next(Le);
                  }
                }, 0, true);
              });
              return () => (0, L.m)(Pe?.return) && Pe.return();
            });
          }(G, se);
        }
        if ((0, le.L)(G)) {
          return function fe(G, se) {
            return O((0, le.Q)(G), se);
          }(G, se);
        }
      }
      throw (0, X.z)(G);
    }(G, se);
  } else {
    return (0, i.Xf)(G);
  }
}