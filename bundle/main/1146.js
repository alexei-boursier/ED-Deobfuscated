import * as i from "94650";
import * as t from "45007";
export let B = (() => {
  class v {
    constructor(w, S, L, I, E) {
      this.authService = w;
      this.authStore = S;
      this.router = L;
      this.resetService = I;
      this.modalService = E;
    }
    swipeReset() {
      this.resetService.swipeReset();
      this.resetLocalsServices();
      this.router.navigate(["/"], {
        state: {
          canDeactivate: true
        }
      }).catch(() => console.error("swipeReset navigate to /"));
    }
    logout() {
      if (Object.isExists(this.authStore.currentUser)) {
        if (this.authStore.currentUser.isLoggedInFromOAuth) {
          const w = this.authStore.currentUser.oAuthParams.urlLogout;
          this.authService.logout();
          this.router.navigate(["/externalRedirect", {
            externalUrl: w,
            state: {
              canDeactivate: true
            }
          }]).finally(() => {
            this.resetService.resetAll();
            this.resetLocalsServices();
          });
        } else {
          this.authService.logout();
          const w = this.modalService.getModalsCount();
          for (let S = 1; S <= w; S++) {
            this.modalService.hide(S);
          }
          this.router.navigate(["/login"], {
            state: {
              canDeactivate: true
            }
          }).finally(() => {
            this.resetService.resetAll();
            this.resetLocalsServices();
          });
        }
      }
    }
    resetLocalsServices() {}
  }
  v.ɵfac = function (w) {
    return new (w || v)(i.LFG(t.e80), i.LFG(t.CnD), i.LFG(b.F0), i.LFG(t.zFY), i.LFG(k.tT));
  };
  v.ɵprov = i.Yz7({
    token: v,
    factory: v.ɵfac,
    providedIn: "root"
  });
  return v;
})();