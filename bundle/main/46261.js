import * as i from "94650";
import * as b from "77521";
export class qm {
  constructor(U, B, F, Z, X, le) {
    this.combo = U;
    this.callback = B;
    this.allowIn = F;
    this.description = Z;
    this.action = X;
    this.persistent = le;
    this.combo = Array.isArray(U) ? U : [U];
    this.allowIn = F || [];
    this.description = Z || "";
  }
  static symbolize(U) {
    const B = {
      command: "⌘",
      shift: "⇧",
      left: "←",
      right: "→",
      up: "↑",
      down: "↓",
      return: "⏎",
      backspace: "⌫"
    };
    const F = U.split("+");
    for (let Z = 0; Z < F.length; Z++) {
      if (F[Z] === "mod") {
        F[Z] = window.navigator && window.navigator.platform.indexOf("Mac") >= 0 ? "command" : "ctrl";
      }
      F[Z] = B[F[Z]] || F[Z];
    }
    return F.join(" + ");
  }
  get formatted() {
    if (!this.formattedHotkey) {
      const U = this.combo;
      for (let B = 0; B < U.length; B++) {
        U[B] = qm.symbolize(U[B]);
      }
      this.formattedHotkey = U;
    }
    return this.formattedHotkey;
  }
}
const S = new i.OlP("HotkeyOptions");
export let tm = (() => {
  class x {
    constructor(B) {
      this.options = B;
      this.hotkeys = [];
      this.pausedHotkeys = [];
      this.cheatSheetToggle = new t.x();
      this.preventIn = ["INPUT", "SELECT", "TEXTAREA"];
      b.prototype.stopCallback = (F, Z, X, le) => (" " + Z.className + " ").indexOf(" mousetrap ") <= -1 && Z.contentEditable && Z.contentEditable === "true";
      this.mousetrap = new b();
      this.initCheatSheet();
    }
    initCheatSheet() {
      if (!this.options.disableCheatSheet) {
        this.add(new qm(this.options.cheatSheetHotkey || "?", function (B) {
          this.cheatSheetToggle.next();
        }.bind(this), [], this.options.cheatSheetDescription || "Show / hide this help menu"));
      }
      if (this.options.cheatSheetCloseEsc) {
        this.add(new qm("esc", function (B) {
          this.cheatSheetToggle.next(false);
        }.bind(this), ["HOTKEYS-CHEATSHEET"], this.options.cheatSheetCloseEscDescription || "Hide this help menu"));
      }
    }
    add(B, F) {
      if (Array.isArray(B)) {
        const Z = [];
        for (const X of B) {
          Z.push(this.add(X, F));
        }
        return Z;
      }
      this.remove(B);
      this.hotkeys.push(B);
      this.mousetrap.bind(B.combo, (Z, X) => {
        let le = true;
        if (Z) {
          const fe = Z.target || Z.srcElement;
          const q = fe.nodeName.toUpperCase();
          if ((" " + fe.className + " ").indexOf(" mousetrap ") > -1) {
            le = true;
          } else if (this.preventIn.indexOf(q) > -1 && B.allowIn.map(j => j.toUpperCase()).indexOf(q) === -1) {
            le = false;
          }
        }
        if (le) {
          return B.callback.apply(this, [Z, X]);
        }
      }, F);
      return B;
    }
    remove(B, F) {
      const Z = [];
      if (!B) {
        for (const le of this.hotkeys) {
          Z.push(this.remove(le, F));
        }
        return Z;
      }
      if (Array.isArray(B)) {
        for (const le of B) {
          Z.push(this.remove(le));
        }
        return Z;
      }
      const X = this.findHotkey(B);
      if (X > -1) {
        this.hotkeys.splice(X, 1);
        this.mousetrap.unbind(B.combo, F);
        return B;
      } else {
        return null;
      }
    }
    get(B) {
      if (!B) {
        return this.hotkeys;
      }
      if (Array.isArray(B)) {
        const F = [];
        for (const Z of B) {
          F.push(this.get(Z));
        }
        return F;
      }
      for (const F of this.hotkeys) {
        if (F.combo.indexOf(B) > -1) {
          return F;
        }
      }
      return null;
    }
    pause(B) {
      if (!B) {
        return this.pause(this.hotkeys);
      }
      if (Array.isArray(B)) {
        const F = [];
        for (const Z of B) {
          F.push(this.pause(Z));
        }
        return F;
      }
      this.remove(B);
      this.pausedHotkeys.push(B);
      return B;
    }
    unpause(B) {
      if (!B) {
        return this.unpause(this.pausedHotkeys);
      }
      if (Array.isArray(B)) {
        const Z = [];
        for (const X of B) {
          Z.push(this.unpause(X));
        }
        return Z;
      }
      const F = this.pausedHotkeys.indexOf(B);
      if (F > -1) {
        this.add(B);
        return this.pausedHotkeys.splice(F, 1);
      } else {
        return null;
      }
    }
    reset() {
      this.mousetrap.reset();
      this.hotkeys = [];
      this.pausedHotkeys = [];
      this.initCheatSheet();
    }
    findHotkey(B) {
      return this.hotkeys.indexOf(B);
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)(i.LFG(S));
  };
  x.ɵprov = i.Yz7({
    token: x,
    factory: x.ɵfac,
    providedIn: "root"
  });
  return x;
})();
export let mb = (() => {
  class x {
    static forRoot(B = {}) {
      return {
        ngModule: x,
        providers: [tm, {
          provide: S,
          useValue: B
        }]
      };
    }
  }
  x.ɵfac = function (B) {
    return new (B || x)();
  };
  x.ɵmod = i.oAB({
    type: x
  });
  x.ɵinj = i.cJS({
    imports: [[k.ez]]
  });
  return x;
})();