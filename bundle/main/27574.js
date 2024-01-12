import * as i from "45007";
import * as k from "94650";
export let a = (() => {
  class C {
    constructor(S, L, I) {
      this.authStore = S;
      this.credentialsStore = L;
      this.router = I;
    }
    canActivate(S, L) {
      const I = S.data && Array.isArray(S.data.guardTypes) ? S.data.guardTypes : [];
      return this.checkLogin(L.url, I, S.queryParams);
    }
    canActivateChild(S, L) {
      return this.canActivate(S, L);
    }
    canLoad(S, L) {
      const I = L.reduce((O, x) => `${O}/${x.path}`, "");
      const E = S.data && Array.isArray(S.data.guardTypes) ? S.data.guardTypes : [];
      return this.checkLogin(I, E);
    }
    checkLogin(S, L, I) {
      return (0, t.D)([this.credentialsStore.ready(), this.authStore.ready()]).pipe((0, b.U)(E => this.authStore.isLoggedIn() ? L.length === 0 || L.findIndex(x => this.authStore.currentUser.typeCompte === x) > -1 : (Object.isExists(I) && i.FSr.isNotEmptyString(I.idunique) ? this.router.navigate(["/loginExterne"], {
        queryParams: I
      }).catch(() => console.error("checkLogin navigate to /loginExterne")) : this.router.navigate(["/login"], {
        queryParams: {
          cameFrom: S
        }
      }).catch(() => console.error("checkLogin navigate to /login")), false)));
    }
  }
  C.ɵfac = function (S) {
    return new (S || C)(k.LFG(i.CnD), k.LFG(i.dSF), k.LFG(M.F0));
  };
  C.ɵprov = k.Yz7({
    token: C,
    factory: C.ɵfac,
    providedIn: "root"
  });
  return C;
})();