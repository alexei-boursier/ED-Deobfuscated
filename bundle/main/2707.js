import * as t from "1702";
import * as M from "26244";
import * as C from "41340";
import * as w from "47293";
import * as I from "68886";
import * as O from "7392";
import * as x from "98008";
var U = [];
var B = t(U.sort);
var F = t(U.push);
var Z = w(function () {
  U.sort(undefined);
});
var X = w(function () {
  U.sort(null);
});
var le = L("sort");
var fe = !w(function () {
  if (O) {
    return O < 70;
  }
  if (!I || I <= 3) {
    if (E) {
      return true;
    }
    if (x) {
      return x < 603;
    }
    var se;
    var W;
    var Pe;
    var Le;
    var G = "";
    for (se = 65; se < 76; se++) {
      W = String.fromCharCode(se);
      switch (se) {
        case 66:
        case 69:
        case 70:
        case 72:
          Pe = 3;
          break;
        case 68:
        case 71:
          Pe = 4;
          break;
        default:
          Pe = 2;
      }
      for (Le = 0; Le < 47; Le++) {
        U.push({
          k: W + Le,
          v: Pe
        });
      }
    }
    U.sort(function (he, pe) {
      return pe.v - he.v;
    });
    Le = 0;
    for (; Le < U.length; Le++) {
      W = U[Le].k.charAt(0);
      if (G.charAt(G.length - 1) !== W) {
        G += W;
      }
    }
    return G !== "DGBEFHACIJK";
  }
});
i({
  target: "Array",
  proto: true,
  forced: Z || !X || !le || !fe
}, {
  sort: function (se) {
    if (se !== undefined) {
      b(se);
    }
    var W = k(this);
    if (fe) {
      if (se === undefined) {
        return B(W);
      } else {
        return B(W, se);
      }
    }
    var he;
    var pe;
    var Pe = [];
    var Le = M(W);
    for (pe = 0; pe < Le; pe++) {
      if (pe in W) {
        F(Pe, W[pe]);
      }
    }
    S(Pe, function (G) {
      return function (se, W) {
        if (W === undefined) {
          return -1;
        } else if (se === undefined) {
          return 1;
        } else if (G !== undefined) {
          return +G(se, W) || 0;
        } else if (C(se) > C(W)) {
          return 1;
        } else {
          return -1;
        }
      };
    }(se));
    he = M(Pe);
    pe = 0;
    for (; pe < he;) {
      W[pe] = Pe[pe++];
    }
    for (; pe < Le;) {
      v(W, pe++);
    }
    return W;
  }
});