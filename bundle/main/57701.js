import * as i from "11302";
import * as t from "45007";
export class V {
  static isMobile() {
    const M = navigator.userAgent.toLowerCase();
    return /iphone|ipad|android|mobile|mobi/i.exec(M) !== null;
  }
  static strip(M) {
    return new DOMParser().parseFromString(M, "text/html").body.textContent || "";
  }
  static goToService(M, v, C, w, S, L) {
    let I = `${i.sX.production ? (0, i.Je)() : "https://api.ecoledirecte.com/v3"}/${t.AEj}`;
    if (C === t.AEj) {
      C = `${(0, i.Je)()}/${t.AEj}`;
    } else if (!C.startsWith(I)) {
      I = I.replace("https://apip.", "https://api.");
      if (!C.startsWith(I)) {
        C = `${I}?service=${C}`;
      }
    }
    const E = S.createElement("form");
    S.setAttribute(E, "method", "POST");
    S.setAttribute(E, "target", v);
    S.setAttribute(E, "action", C);
    const O = S.createElement("input");
    S.setAttribute(O, "name", "token");
    S.setAttribute(O, "type", "hidden");
    S.setAttribute(O, "value", M);
    S.appendChild(E, O);
    if (Object.isExists(L)) {
      Object.keys(L).forEach(U => {
        const B = S.createElement("input");
        S.setAttribute(B, "name", U);
        S.setAttribute(B, "type", "hidden");
        S.setAttribute(B, "value", `${L[U]}`);
        S.appendChild(E, B);
      });
    }
    const x = w.nativeElement.closest("body");
    S.appendChild(x, E);
    E.submit();
    S.removeChild(x, E);
  }
  static getLibelleErreurMdp(M) {
    let v = "Le niveau de sécurité du mot de passe n'est pas suffisant. Pour complexifier votre mot de passe, pensez à mélanger les minuscules, majuscules,";
    v += "chiffres et autres caractères spéciaux. ";
    v += this.getTexteNbMaxCaract(M);
    return v;
  }
  static getTexteNbMaxCaract(M) {
    return {
      1: "",
      2: "Minimum 8 caractères.",
      3: "Minimum 10 caractères."
    }[M];
  }
}