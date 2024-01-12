var xe = new function () {
  var t = this;
  this.version = "3.3.44npm";
  this.vsakt = {
    c: "106",
    f: "105",
    s: "15.6",
    e: "106",
    i: "12",
    ios: "15.6",
    samsung: "17.0.7",
    o: "89",
    e_a: "104",
    o_a: "70",
    y: "22.7.0",
    v: "5.4",
    uc: "13.4.0"
  };
  this.vsinsecure_below = {
    c: "100.0.5195.102",
    f: "100.3",
    s: "11.1.1",
    e: 16,
    i: 11,
    ios: "12.3",
    samsung: 12,
    o: 62,
    o_a: 52,
    y: "20",
    v: "2.7",
    uc: "13.1"
  };
  this.vsdefault = {
    c: -3,
    f: -3,
    s: -1,
    e: 17,
    i: 11,
    ios: 10,
    samsung: 9.9,
    o: -3,
    o_a: -3,
    y: 20.4,
    v: 2.6,
    uc: 13,
    a: 535
  };
  this.names = {
    c: "Chrome",
    f: "Firefox",
    s: "Safari",
    e: "Edge",
    i: "Internet Explorer",
    ios: "iOS",
    samsung: "Samsung Internet",
    o: "Opera",
    o_a: "Opera",
    e_a: "Edge",
    y: "Yandex Browser",
    v: "Vivaldi",
    uc: "UC Browser",
    a: "Android Browser",
    x: "Other",
    silk: "Silk"
  };
  this.get_browser = function (M) {
    M = (M || navigator.userAgent).replace("_", ".");
    var v = {
      n: "x",
      v: 0,
      t: "other browser",
      age_years: undefined,
      no_device_update: false,
      available: t.vsakt
    };
    function C(U, B) {
      return !!new RegExp(B, "i").test(M) && U;
    }
    v.other = C("bot", "Pagespeed|pingdom|Preview|ktxn|dynatrace|Ruxit|PhantomJS|Headless|Lighthouse|bot|spider|archiver|transcoder|crawl|checker|monitoring|prerender|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Expeditor") || C("TV", "SMART-TV|SmartTV") || C("niche browser", "motorola edge|Comodo.Dragon|OculusBrowser|Falkon|Brave|Classic Browser|Dorado|LBBROWSER|Focus|waterfox|Firefox/56.2|Firefox/56.3|Whale|MIDP|k-meleon|sparrow|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|Basilisk|QupZilla|Otter|Midori|qutebrowser|slimjet") || C("mobile without upgrade path or landing page", "OPR/44.12.2246|cros|kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10");
    v.embedded = /"QtWebEngine|Teams|Electron/i.test(M);
    v.mobile = /iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(M);
    v.discontinued = /netscape|greenbrowser|camino|flot|fennec|galeon|coolnovo/i.test(M);
    for (var w = [["CriOS.VV", "c", "ios"], ["FxiOS.VV", "f", "ios"], ["Trident.*rv:VV", "i", "i"], ["Trident.VV", "i", "i"], ["UCBrowser.VV", "uc", "c"], ["MSIE.VV", "i", "i"], ["Edge.VV", "e", "e"], ["Edg.VV", "e", "c"], ["EdgA.VV", "e_a", "c"], ["Vivaldi.VV", "v", "c"], ["Android.*OPR.VV", "o_a", "c"], ["OPR.VV", "o", "c"], ["YaBrowser.VV", "y", "c"], ["SamsungBrowser.VV", "samsung", "c"], ["Silk.VV", "silk", "c"], ["Chrome.VV", "c", "c"], ["Firefox.VV", "f", "f"], [" OS.VV.*Safari", "ios", "ios"], ["Version.VV.*Safari", "s", "s"], ["Safari.VV", "s", "s"], ["Opera.*Version.VV", "o"], ["Opera.VV", "o"]], S = "(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)", L = 0; L < w.length; L++) {
      if (M.match(new RegExp(w[L][0].replace("VV", S), "i"))) {
        v.n = w[L][1];
        v.engine = w[L][2];
        break;
      }
    }
    v.fullv = RegExp.$1;
    v.v = parseFloat(v.fullv);
    if (/windows.nt.5|windows.nt.4|windows.nt.6.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5/i.test(M)) {
      v.no_device_update = true;
      v.available = {};
    }
    if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
      v.n = "ios";
      v.engine = "ios";
      v.fullv = v.v = 13;
      v.no_device_update = true;
    }
    if (/iphone|ipod|ipad|ios/i.test(M)) {
      M.match(new RegExp("OS." + S, "i"));
      v.n = "ios";
      v.fullv = RegExp.$1;
      v.v = parseFloat(v.fullv);
      v.engine = "ios";
      var I = t.available_ios(M, v.v);
      if (I < 12 && Math.round(v.v) === 11) {
        I = 12;
      }
      v.available = {
        ios: I
      };
      if (parseFloat(v.available.ios) < 11) {
        v.no_device_update = true;
      }
    }
    if (/windows.nt.5.1|windows.nt.5.2|windows.nt.6.0/i.test(M)) {
      v.available = {
        c: 49.9,
        f: 52.9
      };
      v.no_device_update = true;
    }
    if (/os x 10.6/i.test(M)) {
      v.available = {
        s: "5.1.10",
        c: 49.9,
        f: 48
      };
      v.no_device_update = true;
    }
    if (/os x 10.7|os x 10.8/i.test(M)) {
      v.available = {
        s: "6.2.8",
        c: 49.9,
        f: 48
      };
      v.no_device_update = true;
    }
    if (/os x 10.9/i.test(M)) {
      v.available.s = "9.1.3";
    }
    if (/os x 10.10/i.test(M)) {
      v.available.s = "10.1.2";
    }
    if (M.indexOf("Android") > -1 && v.n === "s") {
      var E = parseInt((/WebKit\/([0-9]+)/i.exec(M) || 0)[1], 10) || 2000;
      if (E <= 534) {
        v.n = "a";
        v.fullv = v.v = E;
        v.is_insecure = true;
      }
    }
    v.t = t.names[v.n] + " " + v.v;
    v.is_supported = v.is_latest = t.vsakt[v.n] ? t.less(v.fullv, t.vsakt[v.n]) <= 0 : undefined;
    v.vmaj = Math.round(v.v);
    v.is_insecure = v.is_insecure || !t.vsinsecure_below[v.n] ? undefined : t.less(v.fullv, t.vsinsecure_below[v.n]) === 1;
    if (v.n === "f" && v.vmaj === 102 || v.n === "i" && v.vmaj === 11) {
      v.is_supported = true;
      v.is_insecure = false;
      if (v.n === "f") {
        v.esr = true;
      }
    }
    if (v.n === "ios" && v.v > 10.3) {
      v.is_supported = true;
    }
    if (v.n === "a" || v.n === "x") {
      v.t = t.names[v.n];
    }
    if (v.n === "e") {
      v.t = t.names[v.n] + " " + v.vmaj;
      v.is_supported = t.less(v.fullv, "18.15063") != 1;
    }
    if (v.n in ["c", "f", "o", "e"] && t.less(v.fullv, parseFloat(t.vsakt[v.n]) - 1) <= 0) {
      v.is_supported = true;
    }
    var O = {
      f: 7,
      c: 8,
      o: 8,
      i: 1,
      e: 1,
      s: 1
    };
    if (O[v.n]) {
      v.age_years = Math.round((t.vsakt[v.n] - v.v) / O[v.n] * 10) / 10 || 0;
    }
    if (v.engine) {
      M.match(new RegExp({
        e: "Edge.VV",
        c: "Chrome.VV",
        f: "Firefox.VV",
        s: "Version.VV",
        i: "MSIE.VV",
        ios: " OS.VV"
      }[v.engine].replace("VV", S), "i"));
      v.engine_version = parseFloat(RegExp.$1);
    }
    return v;
  };
  this.semver = function (b) {
    if (b instanceof Array) {
      return b;
    }
    var k = (b + ".0.0.0").split(".");
    return [parseInt(k[0]) || 0, parseInt(k[1]) || 0, parseInt(k[2]) || 0, parseInt(k[3]) || 0];
  };
  this.less = function (b, k) {
    b = t.semver(b);
    k = t.semver(k);
    for (var M = 0;; M++) {
      if (M >= b.length) {
        if (M >= k.length) {
          return 0;
        } else {
          return 1;
        }
      }
      if (M >= k.length) {
        return -1;
      }
      var v = k[M] - b[M];
      if (v) {
        if (v > 0) {
          return 1;
        } else {
          return -1;
        }
      }
    }
  };
  this.available_ios = function (b, k) {
    var M = Math.max(window.screen.height, window.screen.width);
    var v = window.devicePixelRatio;
    if (/ipad/i.test(b)) {
      if (M == 1024 && v == 2) {
        return 10;
      } else if (M == 1112 || M == 1366) {
        return 15;
      } else if (M == 1024 && k < 6) {
        return 5;
      } else {
        return 9;
      }
    } else if (v == 1) {
      return 6;
    } else if (v == 3 || M == 812 || M == 736 || M == 667) {
      return 15;
    } else if (M == 568) {
      return 10;
    } else if (M == 480) {
      return 7;
    } else {
      return 6;
    }
  };
}();
window.$bu_getBrowser = xe.get_browser;
__webpack_module__.exports = function (t, b) {
  var M;
  var k = window.navigator;
  var v = (t = window._buorgres = t || {}).l || (k.languages ? k.languages[0] : null) || k.language || k.browserLanguage || k.userLanguage || document.documentElement.getAttribute("lang") || "en";
  t.llfull = v.replace("_", "-").toLowerCase().substr(0, 5);
  t.ll = t.llfull.substr(0, 2);
  t.domain = t.domain !== undefined ? t.domain : (/file:/.test(location.href) ? "https:" : "") + "//browser-update.org";
  t.apiver = t.api || t.c || -1;
  t.jsv = xe.version;
  var C = t.apiver < 2018 && {
    i: 10,
    f: 11,
    o: 21,
    s: 8,
    c: 30
  } || {};
  var w = t.notify || t.vs || {};
  if (w.e !== 0) {
    w.e = w.e || w.i;
  }
  w.i = w.i || w.e;
  var S = t.required || {};
  if (S.e !== 0) {
    S.e = S.e || S.i;
  }
  if (!S.i) {
    S.i = S.e;
    xe.vsakt.i = xe.vsakt.e;
  }
  for (M in xe.vsdefault) {
    if (w[M]) {
      S[M] = xe.less(w[M], 0) >= 0 ? parseFloat(xe.vsakt[M]) + parseFloat(w[M]) + 0.01 : parseFloat(w[M]) + 0.01;
    }
    if (!(M in S) || S[M] == null) {
      S[M] = xe.vsdefault[M];
    }
    if (xe.less(S[M], 0) >= 0) {
      S[M] = parseFloat(xe.vsakt[M]) + parseFloat(S[M]);
    }
    if (C[M] && xe.less(S[M], C[M]) === 1) {
      S[M] = C[M];
    }
  }
  S.ios = S.ios || S.s;
  if (S.i < 79 && S.i > 65) {
    S.i = S.i - 60;
  }
  if (S.e < 79 && S.e > 65) {
    S.e = S.e - 60;
  }
  t.required = S;
  t.reminder = t.reminder < 0.1 ? 0 : t.reminder || 168;
  t.reminderClosed = t.reminderClosed < 1 ? 0 : t.reminderClosed || 168;
  t.onshow = t.onshow || function (I) {};
  t.onclick = t.onclick || function (I) {};
  t.onclose = t.onclose || function (I) {};
  t.pageurl = t.pageurl || location.hostname || "x";
  t.newwindow = t.newwindow !== false;
  t.test = b || t.test || location.hash === "#test-bu" || false;
  t.ignorecookie = t.ignorecookie || location.hash === "#ignorecookie-bu";
  t.reasons = [];
  t.hide_reasons = [];
  t.notified = function L(I) {
    var E = I.browser = xe.get_browser(I.override_ua);
    I.is_below_required = S[E.n] && xe.less(E.fullv, S[E.n]) === 1;
    if (E.other !== false) {
      I.hide_reasons.push("is other browser:" + E.other);
    }
    if (E.embedded !== false) {
      I.hide_reasons.push("is embedded browser:" + E.embedded);
    }
    if (E.esr && !I.notify_esr) {
      I.hide_reasons.push("Extended support (ESR)");
    }
    if (E.mobile && I.mobile === false) {
      I.hide_reasons.push("do not notify mobile");
    }
    if (E.is_latest) {
      I.hide_reasons.push("is latest version of the browser");
    }
    if (E.no_device_update) {
      I.hide_reasons.push("no device update");
    }
    if (I.is_below_required) {
      I.reasons.push("below required");
    }
    if ((I.insecure || I.unsecure) && E.is_insecure) {
      I.reasons.push("insecure");
    }
    if (I.unsupported && !E.is_supported) {
      I.reasons.push("no vendor support");
    }
    return I.hide_reasons.length <= 0 && I.reasons.length > 0;
  }(t);
  t.already_shown = document.cookie.indexOf("browserupdateorg=pause") > -1 && !t.ignorecookie;
  if (t.test || t.notified && !t.already_shown) {
    t.setCookie = function (I) {
      document.cookie = "browserupdateorg=pause; expires=" + new Date(new Date().getTime() + I * 3600000).toGMTString() + "; path=/; SameSite=Lax" + (/https:/.test(location.href) ? "; Secure" : "");
    };
    if (t.already_shown && (t.ignorecookie || t.test)) {
      t.setCookie(-10);
    }
    if (t.reminder > 0) {
      t.setCookie(t.reminder);
    }
    if (t.nomessage) {
      t.onshow(t);
      return;
    }
    i();
  }
};
function i() {
  var t = window._buorgres;
  var b = $bu_getBrowser();
  var k = t.burl || "http" + (/MSIE/i.test(navigator.userAgent) ? "" : "s") + "://browser-update.org/";
  t.url ||= k + (t.l && t.l + "/" || "") + "update-browser.html" + (t.test ? "?force_outdated=true" : "") + "#" + t.jsv + ":" + t.pageurl;
  t.url_permanent_hide = t.url_permanent_hide || k + "block-ignore-browser-update-warning.html";
  var C;
  var v = {
    en: {
      msg: "Your web browser ({brow_name}) is out of date.",
      msgmore: "Update your browser for more security, speed and the best experience on this site.",
      bupdate: "Update browser",
      bignore: "Ignore",
      remind: "You will be reminded in {days} days.",
      bnever: "Never show again"
    },
    ar: {
      msg: "متصفح الإنترنت الخاص بك ({brow_name}) غير مُحدّث.",
      msgmore: "قم بتحديث المتصفح الخاص بك لمزيد من الأمان والسرعة ولأفضل تجربة على هذا الموقع.",
      bupdate: "تحديث المتصفح",
      bignore: "تجاهل",
      remind: "سيتم تذكيرك في غضون {days} أيام.",
      bnever: "لا تظهر مرة أخرى"
    },
    bg: {
      msg: "Вашият уеб браузър ({brow_name}) е остарял.",
      msgmore: "Актуализирайте браузъра си за повече сигурност, бързина и най-доброто изживяване на този сайт.",
      bupdate: "Актуализиране на браузъра",
      bignore: "игнорирай",
      remind: "Ще ви бъде напомнено след {days} дни.",
      bnever: "Никога повече да не се показва"
    },
    ca: {
      msg: "El teu navegador ({brow_name}) està desactualitzat.",
      msgmore: "Actualitzeu el vostre navegador per obtenir més seguretat, velocitat i una millor experiència en aquest lloc.",
      bupdate: "Actualitza el navegador",
      bignore: "Ignorar",
      remind: "T'ho recordarem d'aquí a {days} dies.",
      bnever: "No ho tornis a mostrar"
    },
    cs: {
      msg: "Váš prohlížeč ({brow_name}) je zastaralý.",
      msgmore: "Aktualizujte prohlížeč pro lepší zabezpečení, rychlost a nejlepší zážitek z tohoto webu.",
      bupdate: "Aktualizovat prohlížeč",
      bignore: "Ignorovat",
      remind: "Znovu budete upozorněni za {days} dnů.",
      bnever: "Již nezobrazovat"
    },
    cy: {
      msg: "Mae eich porwr gwe ({brow_name}) angen ei ddiweddaru.",
      msgmore: "Diweddarwch eich porwr i gael mwy o ddiogelwch, cyflymder a'r profiad gorau ar y safle hwn.",
      bupdate: "Diweddaru porwr",
      bignore: "Anwybyddu",
      remind: "Byddwn yn eich atgoffa mewn {days} diwrnod.",
      bnever: "Peidiwch â dangos eto"
    },
    da: {
      msg: "Din web browser ({brow_name}) er forældet",
      msgmore: "Opdater din browser for mere sikkerhed, hastighed og den bedste oplevelse på denne side.",
      bupdate: "Opdater browser",
      bignore: "Ignorer",
      remind: "Du vil blive påmindet om {days} dage.",
      bnever: "Vis aldrig igen"
    },
    de: {
      msg: "Ihr Webbrowser ({brow_name}) ist veraltet.",
      msgmore: "Aktualisieren Sie Ihren Browser für mehr Sicherheit, Geschwindigkeit und den besten Komfort auf dieser Seite.",
      bupdate: "Browser aktualisieren",
      bignore: "Ignorieren",
      remind: "Sie werden in {days} Tagen wieder erinnert.",
      bnever: "Nie wieder anzeigen"
    },
    el: {
      msg: "Το πρόγραμμα περιήγησής σας ({brow_name}) είναι απαρχαιωμένο.",
      msgmore: "Ενημερώστε το πρόγραμμα περιήγησής σας για περισσότερη ασφάλεια, ταχύτητα και την καλύτερη εμπειρία σ' αυτόν τον ιστότοπο.",
      bupdate: "Ενημερώστε το πρόγραμμα περιήγησης",
      bignore: "Αγνοήστε",
      remind: "Θα σας το υπενθυμίσουμε σε {days} ημέρες.",
      bnever: "Να μην εμφανιστεί ξανά"
    },
    es: {
      msg: "Su navegador web ({brow_name}) está desactualizado.",
      msgmore: "Actualice su navegador para obtener más seguridad, velocidad y para disfrutar de la mejor experiencia en este sitio.",
      bupdate: "Actualizar navegador",
      bignore: "Ignorar",
      remind: "Se le recordará en {days} días.",
      bnever: "No mostrar de nuevo"
    },
    et: {
      msg: "Teie veebilehitseja ({brow_name}) on vananenud.",
      msgmore: "Veebilehitseja uuendamisega kaasneb nii parem turvalisus, kiirus kui ka kasutusmugavus.",
      bupdate: "Uuenda veebilehitsejat",
      bignore: "Eira",
      remind: "Uus meeldetuletus {days} päeva pärast.",
      bnever: "Ära kunagi enam näita"
    },
    fa: {
      msg: "مرورگر شما ({brow_name}) قدیمی است.",
      msgmore: "برای ایمنی، سرعت و تجربه بهتر مرورگر خود را به‌روز کنید.",
      bupdate: "به‌روزرسانی مرورگر",
      bignore: "نادیده گرفتن",
      remind: "به شما تا {days} روز دیگر دوباره یاد‌آوری خواهد شد.",
      bnever: "هرگز نمایش نده"
    },
    fi: {
      msg: "Selaimesi ({brow_name}) on vanhentunut.",
      msgmore: "Päivitä selaimesi saadaksesi tietoturvapäivityksiä, nopeutta sekä parhaan käyttökokemuksen sivustolla.",
      bupdate: "Päivitä selain",
      bignore: "Ohita",
      remind: "Saat uuden muistutuksen {days} päivän päästä.",
      bnever: "Älä näytä uudestaan"
    },
    fr: {
      msg: "Votre navigateur Web ({brow_name}) n'est pas à jour.",
      msgmore: "Mettez à jour votre navigateur pour plus de sécurité et de rapidité et une meilleure expérience sur ce site.",
      bupdate: "Mettre à jour le navigateur",
      bignore: "Ignorer",
      remind: "Vous serez rappelé dans {days} jours.",
      bnever: "Ne plus afficher"
    },
    gl: {
      msg: "Tá an líonléitheoir agat ({brow_name}) as dáta.",
      msgmore: "Actualiza o teu navegador para obter máis seguridade, rapidez e mellor experiencia neste sitio.",
      bupdate: "Actualizar navegador web",
      bignore: "Ignorar",
      remind: "Lembraralle en {days} días.",
      bnever: "Non volver mostrar máis"
    },
    he: {
      msg: "דפדפן ({brow_name}) שלך אינו מעודכן.",
      msgmore: "עדכן/י את הדפדפן שלך לשיפור האבטחה והמהירות וכדי ליהנות מהחוויה הטובה ביותר באתר זה.",
      bupdate: "עדכן דפדפן",
      bignore: "התעלם",
      remind: "תקבל/י תזכורת בעוד  {days} ימים.",
      bnever: "אל תציג שוב"
    },
    hi: {
      msg: "आपका वेब ब्राउज़र ({brow_name}) पुराना है।",
      msgmore: "इस साइट पर अधिक सुरक्षा, गति और सर्वोत्तम अनुभव करने के लिए अपने ब्राउज़र को अपडेट करें ।",
      bupdate: "ब्राउज़र अपडेट करें",
      bignore: "नजरअंदाज करें",
      remind: "आपको {days} दिनों में याद दिलाया जाएगा।",
      bnever: "फिर कभी मत दिखाना"
    },
    hu: {
      msg: "Az Ön webböngészője ({brow_name}) elavult.",
      msgmore: "Frissítse böngészőjét a nagyobb biztonság, sebesség és élmény érdekében!",
      bupdate: "Böngésző frissítése",
      bignore: "Mellőzés",
      remind: "Újra emlékeztetünk {days} napon belül.",
      bnever: "Ne mutassa többet"
    },
    id: {
      msg: "Peramban web ({brow_name}) Anda sudah usang.",
      msgmore: "Perbarui peramban Anda untuk pengalaman terbaik, lebih aman, dan cepat di situs ini.",
      bupdate: "Perbarui peramban",
      bignore: "Abaikan",
      remind: "Anda akan diingatkan kembali dalam {days} hari.",
      bnever: "Jangan pernah tampilkan lagi"
    },
    it: {
      msg: "Il tuo browser ({brow_name}) non è aggiornato.",
      msgmore: "Aggiorna il browser per una maggiore sicurezza, velocità e la migliore esperienza su questo sito.",
      bupdate: "Aggiorna browser",
      bignore: "Ignora",
      remind: "Riceverai un promemoria tra {days} giorni.",
      bnever: "Non mostrare di nuovo"
    },
    ja: {
      msg: "お使いのブラウザ（{brow_name}）は最新版ではありません。",
      msgmore: "セキュリティ、スピード、そしてこのサイトでの最良の体験のためにお使いのブラウザを更新してください。",
      bupdate: "ブラウザを更新する",
      bignore: "無視する",
      remind: "{days} 日後にもう一度お知らせします。",
      bnever: "次回から表示しない"
    },
    ko: {
      msg: "귀하의 웹 브라우저({brow_name})는 오래되었습니다.",
      msgmore: "이 사이트에서 보안, 속도와 최상의 경험을 얻으려면 브라우저를 업데이트하십시오.",
      bupdate: "브라우저 업데이트하기",
      bignore: "무시하기",
      remind: "{days}일 후에 알려 드립니다.",
      bnever: "다시 표시하지 않기"
    },
    lt: {
      msg: "Jūsų naršyklė ({brow_name}) yra pasenusi.",
      msgmore: "Atsinaujinkite savo naršyklę norėdami gauti daugiau saugumo, greičio ir pačių geriausių patirčių šioje svetainėje.",
      bupdate: "Atnaujinti naršyklę",
      bignore: "Nepaisyti",
      remind: "Jums bus priminta po {days} dienų.",
      bnever: "Daugiau niekada nerodyti"
    },
    lv: {
      msg: "Jūsu pārlūkprogramma ({brow_name}) ir novecojusi.",
      msgmore: "Atjaunojiet savu pārlūkprogrammu lielākai drošībai, ātrumam un labākai pieredzei ar šo vietni.",
      bupdate: "Atjaunināt pārlūkprogrammu",
      bignore: "Ignorēt",
      remind: "Jums tiks parādīts atgādinājums pēc {days} dienām.",
      bnever: "Vairs nerādīt"
    },
    ms: {
      msg: "Pelayar web anda ({brow_name}) sudah lapuk.",
      msgmore: "Kemas kini pelayar anda untuk lebih keselamatan, kelajuan dan pengalaman terbaik di laman web ini.",
      bupdate: "Kemas kini pelayar",
      bignore: "Abaikan",
      remind: "Anda akan diingatkan dalam {days} hari.",
      bnever: "Jangan tunjukkan lagi"
    },
    nl: {
      msg: "Uw webbrowser ({brow_name}) is verouderd.",
      msgmore: "Update uw browser voor meer veiligheid, snelheid en om deze site optimaal te kunnen gebruiken.",
      bupdate: "Browser updaten",
      bignore: "Negeren",
      remind: "We zullen u er in {days} dagen aan herinneren.",
      bnever: "Nooit meer tonen"
    }
  };
  v.no = v.nn = v.nb = {
    msg: "Nettleseren din ({brow_name}) er utdatert.",
    msgmore: "Oppdater nettleseren din for økt sikkerhet, hastighet og den beste opplevelsen på dette nettstedet.",
    bupdate: "Oppdater nettleser",
    bignore: "Ignorer",
    remind: "Du vil få en påminnelse om {days} dager.",
    bnever: "Aldri vis igjen"
  };
  v.pl = {
    msg: "Twoja przeglądarka ({brow_name}) jest nieaktualna.",
    msgmore: "Zaktualizuj przeglądarkę, by korzystać z tej strony bezpieczniej, szybciej i po prostu sprawniej.",
    bupdate: "Aktualizuj przeglądarkę",
    bignore: "Ignoruj",
    remind: "Przypomnimy o tym za {days} dni.",
    bnever: "Nie pokazuj więcej"
  };
  v.pt = {
    msg: "Seu navegador da web ({brow_name}) está desatualizado.",
    msgmore: "Atualize seu navegador para ter mais segurança e velocidade, além da melhor experiência neste site.",
    bupdate: "Atualizar navegador",
    bignore: "Ignorar",
    remind: "Você será relembrado em {days} dias.",
    bnever: "Não mostrar novamente"
  };
  v.ro = {
    msg: "Browserul tău ({brow_name}) nu este actualizat.",
    msgmore: "Actualizează browserul pentru o mai mare siguranță, viteză și cea mai bună experiență pe acest site.",
    bupdate: "Actualizează browser",
    bignore: "Ignoră",
    remind: "Ți se va reaminti peste {days} zile.",
    bnever: "Nu mai arăta"
  };
  v.ru = {
    msg: "Ваш браузер ({brow_name}) устарел.",
    msgmore: "Обновите ваш браузер для повышения уровня безопасности, скорости и комфорта использования этого сайта.",
    bupdate: "Обновить браузер",
    bignore: "Игнорировать",
    remind: "Вы получите напоминание через {days} дней.",
    bnever: "Больше не показывать "
  };
  v.sk = {
    msg: "Váš internetový prehliadač ({brow_name}) je zastaraný.",
    msgmore: "Pre väčšiu bezpečnosť, rýchlosť a lepšiu skúsenosť s touto stránkou si aktualizujte svoj prehliadač.",
    bupdate: "Aktualizovať prehliadač",
    bignore: "Ignorovať",
    remind: "Bude vám to pripomenuté o {days} dní.",
    bnever: "Už nikdy viac neukazovať"
  };
  v.sl = {
    msg: "Vaš spletni brskalnik ({brow_name}) je zastarel.",
    msgmore: "Posodobite svoj brskalnik za dodatno varnost, hitrost in najboljšo izkušnjo na tem spletnem mestu.",
    bupdate: "Posodobi brskalnik",
    bignore: "Prezri",
    remind: "Opomnik boste prejeli čez toliko dni: {days}.",
    bnever: "Ne prikaži več"
  };
  v.sq = {
    msg: "Shfletuesi juaj ({brow_name}) është i vjetruar.",
    msgmore: "Përditësoni shfletuesin tuaj për më tepër siguri, shpejtësi dhe për më të mirin e funksionimeve në këtë sajt.",
    bupdate: "Përditëso shfletuesin",
    bignore: "Shpërfille",
    remind: "Do t’ju rikujtohet pas {days} ditësh.",
    bnever: "Mos e shfaq kurrë më"
  };
  v.sr = {
    msg: "Vaš pretraživač ({brow_name}) je zastareo.",
    msgmore: "Ima poznate sigurnosne probleme i najverovatnije neće prikazati sve funkcionalnisti ovog i drugih sajtova.",
    bupdate: "Nadogradi pretraživač",
    bignore: "Ignorisi",
    remind: "Zaboravićete za {days} dana.",
    bnever: "Ne prikazuj opet"
  };
  v.sv = {
    msg: "Din webbläsare ({brow_name}) är föråldrad. ",
    msgmore: "Uppdatera din webbläsare för mer säkerhet, hastighet och den bästa upplevelsen på den här sajten. ",
    bupdate: "Uppdatera webbläsaren",
    bignore: "Ignorera",
    remind: "Du får en påminnelse om {days} dagar.",
    bnever: "Visa aldrig igen"
  };
  v.th = {
    msg: "เว็บเบราว์เซอร์ของคุณ ({brow_name}) ล้าสมัยแล้ว",
    msgmore: "อัปเดทเบราว์เซอร์เพื่อเพิ่มความปลอดภัย, ความเร็ว และประสบการณ์ที่ดีที่สุดบนเว็บไซต์นี้",
    bupdate: "อัปเดทเบราว์เซอร์",
    bignore: "ข้าม",
    remind: "คุณจะได้รับการแจ้งเตือนใน {days} วัน",
    bnever: "ไม่ต้องแสดงอีก"
  };
  v.tr = {
    msg: "Web tarayıcınız ({brow_name}) güncel değil.",
    msgmore: "Daha fazla güvenlik ve hız ile bu sitede en iyi deneyim için tarayıcınızı güncelleyin.",
    bupdate: "Tarayıcıyı güncelle",
    bignore: "Yok say",
    remind: "{days} gün sonra bir hatırlatma alacaksınız.",
    bnever: "Bir daha gösterme"
  };
  v.uk = {
    msg: "Ваш браузер ({brow_name}) застарілий.",
    msgmore: "Оновіть свій браузер для більшої безпеки, швидкості та повноцінної роботи цього сайту.",
    bupdate: "Оновити браузер",
    bignore: "Пропустити",
    remind: "Ви отримаєте нагадування через {days} днів.",
    bnever: "Більше не показувати"
  };
  v.uz = {
    msg: "Sizning ({brow_name}) veb-brauzeringiz eskirgan",
    msgmore: "Xavfsizlik, tezkorlik va ushbu sayt imkoniyatlaridan to`liq foydalanish uchun brauzeringizni yangilang.",
    bupdate: "Brauzeringizni yangilang",
    bignore: "E’tibor bermaslik",
    remind: "Sizga {days} kundan so`ng eslatammiz.",
    bnever: "Hech qachon qayta ko'rsatmang"
  };
  v.vi = {
    msg: "Trình duyệt web của bạn ({brow_name}) đã lỗi thời.",
    msgmore: "Cập nhật trình duyệt của bạn để có thêm bảo mật, tốc độ và trải nghiệm tốt nhất trên trang web này.",
    bupdate: "Cập nhật trình duyệt",
    bignore: "Bỏ qua",
    remind: "Bạn sẽ được nhắc nhở sau {days} ngày.",
    bnever: "Không bao giờ hiển thị lại"
  };
  v.zh = {
    msg: "您的网页浏览器（{brow_name}）已过期。",
    msgmore: "更新您的浏览器，以便在该网站上获得更安全、更快速和最好的体验。",
    bupdate: "更新浏览器",
    bignore: "忽略",
    remind: "会在{days}天后提醒您。",
    bnever: "不再显示"
  };
  v["zh-tw"] = v["zh-hans-cn"] = {
    msg: "您的網路瀏覽器（{brow_name}）已過舊。",
    msgmore: "更新您的瀏覽器以獲得更佳的安全性、速度以及在此網站的最佳體驗。",
    bupdate: "更新瀏覽器",
    bignore: "忽略",
    remind: "您將在 {days} 天後收到提醒。",
    bnever: "不要再顯示"
  };
  var w = t["text_for_" + b.n + "_in_" + t.ll] || t["text_for_" + b.n] || t["text_" + t.llfull] || t["text_in_" + t.ll] || t["text_" + t.ll] || t.text;
  v = C = v[t.llfull] || v[t.ll] || v.en;
  if (w) {
    if (typeof w == "string") {
      v = C = w;
    } else {
      for (var S in w) {
        C[S] = w[S];
      }
    }
  }
  if (C.msg) {
    v = "<b class=\"buorg-mainmsg\">" + v.msg + "</b> <span class=\"buorg-moremsg\">" + v.msgmore + "</span> <span class=\"buorg-buttons\"><a{up_but}>" + v.bupdate + "</a> <a{ignore_but}>" + v.bignore + "</a></span>";
  }
  var L = "";
  if (t.newwindow) {
    L = " target=\"_blank\" rel=\"noopener\"";
  }
  var I = t.div = document.createElement("div");
  I.id = I.className = "buorg";
  var E = "<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block; background: no-repeat 0px center url(https://browser-update.org/static/img/small/" + b.n + ".png);}</style>";
  var O = "<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center;  color:#000; background-color: #fff8ea; font: 18px Calibri,Helvetica,sans-serif; box-shadow: 0 0 5px rgba(0,0,0,0.2);animation: buorgfly 1s ease-out 0s;}.buorg-pad { padding: 9px;  line-height: 1.7em; }.buorg-buttons { display: block; text-align: center; }#buorgig,#buorgul,#buorgpermanent { color: #fff; text-decoration: none; cursor:pointer; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}#buorgig { background-color: #edbc68;}@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}.buorg-fadeout {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>";
  if (C.msg && (t.ll == "ar" || t.ll == "he" || t.ll == "fa")) {
    O += "<style>.buorg {direction:RTL; unicode-bidi:embed;}</style>";
  }
  if (!C.msg && v.indexOf && v.indexOf("%s") !== -1) {
    v = function M() {
      for (var Z = arguments, X = Z[0], le = 1; le < Z.length; ++le) {
        X = X.replace(/%s/, Z[le]);
      }
      return X;
    }(v, b.t, " id=\"buorgul\" href=\"" + t.url + "\"" + L);
    I.innerHTML = "<div>" + v + "<div id=\"buorgclose\"><a id=\"buorga\">&times;</a></div></div>" + (E += "<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; color:#000; font: 13px Arial,sans-serif;color:#000;}.buorg div { padding:5px 36px 5px 40px; }.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}#buorga{display:block;}@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>");
    t.addmargin = true;
  } else {
    if (t.style === "bottom") {
      O += "<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>";
    } else if (t.style === "corner") {
      O += "<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg-buttons, .buorg-mainmsg, .buorg-moremsg { display: block; } .buorg-buttons a {margin: 4px 2px;} .buorg-icon {display: none;}</style>";
    } else {
      t.addmargin = true;
    }
    v = v.replace("{brow_name}", b.t).replace("{up_but}", " id=\"buorgul\" href=\"" + t.url + "\"" + L).replace("{ignore_but}", " id=\"buorgig\" role=\"button\" tabindex=\"0\"");
    I.innerHTML = "<div class=\"buorg-pad\" role=\"status\" aria-live=\"polite\"><span class=\"buorg-icon\"> </span>" + v + "</div>" + E + O;
  }
  t.text = v;
  if (t.container) {
    t.container.appendChild(I);
    t.addmargin = false;
  } else {
    document.body.insertBefore(I, document.body.firstChild);
  }
  var x = document.getElementById("buorgul");
  if (x) {
    x.onclick = function (Z) {
      I.onclick = null;
      t.onclick(t);
      if (!t.noclose) {
        t.setCookie(t.reminderClosed);
        if (!t.noclose) {
          I.style.display = "none";
          if (t.addmargin && t.shift_page_down !== false) {
            U.style.marginTop = t.bodymt;
          }
        }
      }
    };
  }
  if (!w) {
    I.style.cursor = "pointer";
    I.onclick = function () {
      if (t.newwindow) {
        window.open(t.url, "_blank");
      } else {
        window.location.href = t.url;
      }
      t.setCookie(t.reminderClosed);
      t.onclick(t);
    };
  }
  if (t.addmargin && t.shift_page_down !== false) {
    var U = document.getElementsByTagName("html")[0] || document.body;
    t.bodymt = U.style.marginTop;
    U.style.marginTop = I.clientHeight + "px";
  }
  var B = document.getElementById("buorga") || document.getElementById("buorgig");
  if (B) {
    B.onclick = function (Z) {
      I.onclick = null;
      t.onclose(t);
      if (t.addmargin && t.shift_page_down !== false) {
        U.style.marginTop = t.bodymt;
      }
      t.setCookie(t.reminderClosed);
      if (!t.no_permanent_hide && C.bnever && C.remind) {
        t.div.innerHTML = "<div class=\"buorg-pad\"><span class=\"buorg-moremsg\">" + (t.reminderClosed > 24 ? C.remind.replace("{days}", Math.round(t.reminderClosed / 24)) : "") + "</span> <span class=\"buorg-buttons\"><a id=\"buorgpermanent\" role=\"button\" tabindex=\"0\" href=\"" + t.url_permanent_hide + "\"" + L + ">" + C.bnever + "</a></span></div>" + E + O;
        I.className = "buorg buorg-fadeout";
        document.getElementById("buorgpermanent").onclick = function (X) {
          t.setCookie(8760);
          t.div.style.display = "none";
        };
        t.div.style.opacity = 0;
        t.div.style.visibility = "hidden";
        return false;
      } else {
        t.div.style.display = "none";
        return false;
      }
    };
    if (t.noclose || t.reminderClosed == 0) {
      B.parentNode.removeChild(B);
    }
  }
  t.onshow(t);
  if (t.test && !t.dont_show_debuginfo) {
    var F = document.createElement("script");
    F.src = t.domain + "/update.test.js";
    document.body.appendChild(F);
  }
}