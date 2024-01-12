function t(J) {
  if (J < 0) {
    return Math.ceil(J) || 0;
  } else {
    return Math.floor(J);
  }
}
function b(J) {
  return typeof J == "string";
}
export function J_(J) {
  return J instanceof Date || Object.prototype.toString.call(J) === "[object Date]";
}
export function Rp(J) {
  return J && J.getTime && !isNaN(J.getTime());
}
function C(J) {
  return J instanceof Function || Object.prototype.toString.call(J) === "[object Function]";
}
function w(J) {
  return typeof J == "number" || Object.prototype.toString.call(J) === "[object Number]";
}
export function kJ(J) {
  return J instanceof Array || Object.prototype.toString.call(J) === "[object Array]";
}
function L(J, Ce) {
  return Object.prototype.hasOwnProperty.call(J, Ce);
}
function I(J) {
  return J != null && Object.prototype.toString.call(J) === "[object Object]";
}
function O(J) {
  return J === undefined;
}
function x(J) {
  const Ce = +J;
  let tt = 0;
  if (Ce !== 0 && isFinite(Ce)) {
    tt = t(Ce);
  }
  return tt;
}
const U = {};
const B = {
  date: "day",
  hour: "hours",
  minute: "minutes",
  second: "seconds",
  millisecond: "milliseconds"
};
function F(J, Ce) {
  const tt = J.toLowerCase();
  let Rt = J;
  if (tt in B) {
    Rt = B[tt];
  }
  U[tt] = U[`${tt}s`] = U[Ce] = Rt;
}
function Z(J) {
  if (b(J)) {
    return U[J] || U[J.toLowerCase()];
  } else {
    return undefined;
  }
}
function he(J, Ce, tt) {
  const Rt = `${Math.abs(J)}`;
  return (J >= 0 ? tt ? "+" : "" : "-") + Math.pow(10, Math.max(0, Ce - Rt.length)).toString().substr(1) + Rt;
}
const pe = {};
const re = {};
const Re = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
function Ge(J, Ce, tt, Rt) {
  if (J) {
    re[J] = Rt;
  }
  if (Ce) {
    re[Ce[0]] = function () {
      return he(Rt.apply(null, arguments), Ce[1], Ce[2]);
    };
  }
  if (tt) {
    re[tt] = function (ln, ni) {
      return ni.locale.ordinal(Rt.apply(null, arguments), J);
    };
  }
}
function ot(J) {
  if (J.match(/\[[\s\S]/)) {
    return J.replace(/^\[|\]$/g, "");
  } else {
    return J.replace(/\\/g, "");
  }
}
function st(J, Ce, tt) {
  const Rt = new Date(Date.UTC.apply(null, arguments));
  if (J < 100 && J >= 0 && isFinite(Rt.getUTCFullYear())) {
    Rt.setUTCFullYear(J);
  }
  return Rt;
}
function rt(J, Ce = 0, tt = 1, Rt = 0, ln = 0, ni = 0, Mi = 0) {
  const yr = new Date(J, Ce, tt, Rt, ln, ni, Mi);
  if (J < 100 && J >= 0 && isFinite(yr.getFullYear())) {
    yr.setFullYear(J);
  }
  return yr;
}
function Oe(J, Ce = false) {
  if (Ce) {
    return J.getUTCHours();
  } else {
    return J.getHours();
  }
}
function Ee(J, Ce = false) {
  if (Ce) {
    return J.getUTCMinutes();
  } else {
    return J.getMinutes();
  }
}
function ke(J, Ce = false) {
  if (Ce) {
    return J.getUTCSeconds();
  } else {
    return J.getSeconds();
  }
}
function Be(J, Ce = false) {
  if (Ce) {
    return J.getUTCMilliseconds();
  } else {
    return J.getMilliseconds();
  }
}
export function wf(J, Ce = false) {
  if (Ce) {
    return J.getUTCDay();
  } else {
    return J.getDay();
  }
}
function It(J, Ce = false) {
  if (Ce) {
    return J.getUTCDate();
  } else {
    return J.getDate();
  }
}
export function jw(J, Ce = false) {
  if (Ce) {
    return J.getUTCMonth();
  } else {
    return J.getMonth();
  }
}
export function D$(J, Ce = false) {
  if (Ce) {
    return J.getUTCFullYear();
  } else {
    return J.getFullYear();
  }
}
export function nr(J) {
  return rt(J.getFullYear(), J.getMonth(), 1, J.getHours(), J.getMinutes(), J.getSeconds());
}
export function AZ(J, Ce) {
  return J.getDay() === Number(Ce);
}
export function xj(J, Ce) {
  return !!J && !!Ce && FT(J, Ce) && jw(J) === jw(Ce);
}
export function FT(J, Ce) {
  return !!J && !!Ce && D$(J) === D$(Ce);
}
export function KC(J, Ce) {
  return !!J && !!Ce && FT(J, Ce) && xj(J, Ce) && It(J) === It(Ce);
}
const ne = /\d/;
const me = /\d\d/;
const it = /\d{3}/;
const bt = /\d{4}/;
const Ut = /[+-]?\d{6}/;
const Ze = /\d\d?/;
const pt = /\d\d\d\d?/;
const yt = /\d\d\d\d\d\d?/;
const Wt = /\d{1,3}/;
const hn = /\d{1,4}/;
const Kt = /[+-]?\d{1,6}/;
const on = /\d+/;
const Rn = /[+-]?\d+/;
const di = /Z|[+-]\d\d(?::?\d\d)?/gi;
const Si = /[+-]?\d+(\.\d{1,3})?/;
const Zi = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
const $i = {};
function Qi(J, Ce, tt) {
  $i[J] = C(Ce) ? Ce : function (Rt, ln) {
    if (Rt && tt) {
      return tt;
    } else {
      return Ce;
    }
  };
}
function br(J, Ce) {
  if (L($i, J)) {
    return $i[J](false, Ce);
  } else {
    return new RegExp(function Ar(J) {
      return vr(J.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (Ce, tt, Rt, ln, ni) => tt || Rt || ln || ni));
    }(J));
  }
}
function vr(J) {
  return J.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const Ur = {};
function Br(J, Ce) {
  const tt = b(J) ? [J] : J;
  let Rt = Ce;
  if (w(Ce)) {
    Rt = function (ln, ni, Mi) {
      ni[Ce] = x(ln);
      return Mi;
    };
  }
  if (kJ(tt) && C(Rt)) {
    let ln;
    for (ln = 0; ln < tt.length; ln++) {
      Ur[tt[ln]] = Rt;
    }
  }
}
function rs(J, Ce) {
  Br(J, function (tt, Rt, ln, ni) {
    ln._w = ln._w || {};
    return Ce(tt, ln._w, ln, ni);
  });
}
function vs(J, Ce, tt) {
  if (Ce != null && L(Ur, J)) {
    Ur[J](Ce, tt._a, tt, J);
  }
  return tt;
}
const wo = {};
function so(J, Ce) {
  wo[J] = Ce;
}
function Tr(J) {
  if (J._pf == null) {
    J._pf = {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  return J._pf;
}
function ns(J, Ce) {
  if (Ce.locale.getFullYear) {
    return Ce.locale.getFullYear(J, Ce.isUTC).toString();
  } else {
    return D$(J, Ce.isUTC).toString();
  }
}
function Bn(J) {
  return x(J) + (x(J) > 68 ? 1900 : 2000);
}
function oi(J) {
  if (fi(J)) {
    return 366;
  } else {
    return 365;
  }
}
function fi(J) {
  return J % 4 == 0 && J % 100 != 0 || J % 400 == 0;
}
function bn(J, Ce) {
  if (isNaN(J) || isNaN(Ce)) {
    return NaN;
  }
  const tt = function i(J, Ce) {
    return (J % Ce + Ce) % Ce;
  }(Ce, 12);
  if (tt === 1) {
    if (fi(J + (Ce - tt) / 12)) {
      return 29;
    } else {
      return 28;
    }
  } else {
    return 31 - tt % 7 % 2;
  }
}
const An = {
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
  seconds: 0
};
export function rg(J, Ce) {
  const tt = Object.assign({}, An, Ce);
  const Rt = J.getFullYear() + (tt.year || 0);
  const ln = J.getMonth() + (tt.month || 0);
  let ni = J.getDate() + (tt.day || 0);
  if (tt.month && !tt.day) {
    ni = Math.min(ni, bn(Rt, ln));
  }
  return rt(Rt, ln, ni, J.getHours() + (tt.hour || 0), J.getMinutes() + (tt.minute || 0), J.getSeconds() + (tt.seconds || 0));
}
export function Rw(J, Ce) {
  return rt(dr(J.getFullYear(), Ce.year), dr(J.getMonth(), Ce.month), 1, dr(J.getHours(), Ce.hour), dr(J.getMinutes(), Ce.minute), dr(J.getSeconds(), Ce.seconds), dr(J.getMilliseconds(), Ce.milliseconds));
}
function dr(J, Ce) {
  if (w(Ce)) {
    return Ce;
  } else {
    return J;
  }
}
function Or(J, Ce, tt) {
  const Rt = Math.min(It(J), bn(D$(J), Ce));
  if (tt) {
    J.setUTCMonth(Ce, Rt);
  } else {
    J.setMonth(Ce, Rt);
  }
  return J;
}
function fa(J, Ce, tt) {
  if (tt) {
    J.setUTCDate(Ce);
  } else {
    J.setDate(Ce);
  }
  return J;
}
function ks(J) {
  return new Date(J.getTime());
}
export function gl(J, Ce, tt) {
  const Rt = ks(J);
  switch (Ce) {
    case "year":
      Or(Rt, 0, tt);
    case "quarter":
    case "month":
      fa(Rt, 1, tt);
    case "week":
    case "isoWeek":
    case "day":
    case "date":
      (function _o(J, Ce, tt) {
        if (tt) {
          J.setUTCHours(Ce);
        } else {
          J.setHours(Ce);
        }
      })(Rt, 0, tt);
    case "hours":
      (function kr(J, Ce, tt) {
        if (tt) {
          J.setUTCMinutes(Ce);
        } else {
          J.setMinutes(Ce);
        }
      })(Rt, 0, tt);
    case "minutes":
      (function Zs(J, Ce, tt) {
        if (tt) {
          J.setUTCSeconds(Ce);
        } else {
          J.setSeconds(Ce);
        }
      })(Rt, 0, tt);
    case "seconds":
      (function No(J, Ce, tt) {
        if (tt) {
          J.setUTCMilliseconds(Ce);
        } else {
          J.setMilliseconds(Ce);
        }
      })(Rt, 0, tt);
  }
  if (Ce === "week") {
    (function Qo(J, Ce, tt = {}) {
      $l(J, Ce - Ol(J, tt.locale, tt.isUTC), "day");
    })(Rt, 0, {
      isUTC: tt
    });
  }
  if (Ce === "isoWeek") {
    (function ml(J, Ce, tt = {}) {
      const Rt = function mu(J, Ce = Kd()) {
        if (b(J)) {
          return Ce.weekdaysParse(J) % 7 || 7;
        } else if (w(J) && isNaN(J)) {
          return null;
        } else {
          return J;
        }
      }(Ce, tt.locale);
      nd(J, function bl(J, Ce) {
        return wf(J, Ce);
      }(J) % 7 ? Rt : Rt - 7);
    }
    //! moment.js locale configuration
    //! locale : Arabic [ar]
    //! author : Abdel Said: https://github.com/abdelsaid
    //! author : Ahmed Elkhatib
    //! author : forabi https://github.com/forabi
    )(Rt, 1);
  }
  if (Ce === "quarter") {
    Or(Rt, Math.floor(jw(Rt, tt) / 3) * 3, tt);
  }
  return Rt;
}
export function Dz(J, Ce, tt) {
  let Rt = Ce;
  if (Rt === "date") {
    Rt = "day";
  }
  return function Nc(J, Ce, tt, Rt) {
    return Da(J, tl(Ce, tt), -1, Rt);
  }($l(gl(J, Rt, tt), 1, Rt === "isoWeek" ? "week" : Rt, tt), 1, "milliseconds", tt);
}
function ya(J, Ce) {
  const tt = +gl(J, "day", Ce);
  const Rt = +gl(J, "year", Ce);
  return Math.round((tt - Rt) / 86400000) + 1;
}
function qi(J, Ce, tt) {
  const Rt = Ce - tt + 7;
  return -(st(J, 0, Rt).getUTCDay() - Ce + 7) % 7 + Rt - 1;
}
function ea(J, Ce, tt, Rt) {
  const ln = qi(D$(J, Rt), Ce, tt);
  const ni = Math.floor((ya(J, Rt) - ln - 1) / 7) + 1;
  let Mi;
  let yr;
  if (ni < 1) {
    yr = D$(J, Rt) - 1;
    Mi = ni + Oa(yr, Ce, tt);
  } else if (ni > Oa(D$(J, Rt), Ce, tt)) {
    Mi = ni - Oa(D$(J, Rt), Ce, tt);
    yr = D$(J, Rt) + 1;
  } else {
    yr = D$(J, Rt);
    Mi = ni;
  }
  return {
    week: Mi,
    year: yr
  };
}
function Oa(J, Ce, tt) {
  const Rt = qi(J, Ce, tt);
  const ln = qi(J + 1, Ce, tt);
  return (oi(J) - Rt + ln) / 7;
}
const qa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
const ja = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
const la = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
const ta = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
const Fr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
const Es = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
const Ao = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
const dl = Zi;
const qs = Zi;
class Fo {
  constructor(Ce) {
    if (Ce) {
      this.set(Ce);
    }
  }
  set(Ce) {
    let tt;
    for (tt in Ce) {
      if (!Ce.hasOwnProperty(tt)) {
        continue;
      }
      const Rt = Ce[tt];
      this[C(Rt) ? tt : `_${tt}`] = Rt;
    }
    this._config = Ce;
  }
  calendar(Ce, tt, Rt) {
    const ln = this._calendar[Ce] || this._calendar.sameElse;
    if (C(ln)) {
      return ln.call(null, tt, Rt);
    } else {
      return ln;
    }
  }
  longDateFormat(Ce) {
    const tt = this._longDateFormat[Ce];
    const Rt = this._longDateFormat[Ce.toUpperCase()];
    if (tt || !Rt) {
      return tt;
    } else {
      this._longDateFormat[Ce] = Rt.replace(/MMMM|MM|DD|dddd/g, function (ln) {
        return ln.slice(1);
      });
      return this._longDateFormat[Ce];
    }
  }
  get invalidDate() {
    return this._invalidDate;
  }
  set invalidDate(Ce) {
    this._invalidDate = Ce;
  }
  ordinal(Ce, tt) {
    return this._ordinal.replace("%d", Ce.toString(10));
  }
  preparse(Ce, tt) {
    return Ce;
  }
  getFullYear(Ce, tt = false) {
    return D$(Ce, tt);
  }
  postformat(Ce) {
    return Ce;
  }
  relativeTime(Ce, tt, Rt, ln) {
    const ni = this._relativeTime[Rt];
    if (C(ni)) {
      return ni(Ce, tt, Rt, ln);
    } else {
      return ni.replace(/%d/i, Ce.toString(10));
    }
  }
  pastFuture(Ce, tt) {
    const Rt = this._relativeTime[Ce > 0 ? "future" : "past"];
    if (C(Rt)) {
      return Rt(tt);
    } else {
      return Rt.replace(/%s/i, tt);
    }
  }
  months(Ce, tt, Rt = false) {
    if (!Ce) {
      if (kJ(this._months)) {
        return this._months;
      } else {
        return this._months.standalone;
      }
    }
    if (kJ(this._months)) {
      return this._months[jw(Ce, Rt)];
    }
    const ln = (this._months.isFormat || qa).test(tt) ? "format" : "standalone";
    return this._months[ln][jw(Ce, Rt)];
  }
  monthsShort(Ce, tt, Rt = false) {
    if (!Ce) {
      if (kJ(this._monthsShort)) {
        return this._monthsShort;
      } else {
        return this._monthsShort.standalone;
      }
    }
    if (kJ(this._monthsShort)) {
      return this._monthsShort[jw(Ce, Rt)];
    }
    const ln = qa.test(tt) ? "format" : "standalone";
    return this._monthsShort[ln][jw(Ce, Rt)];
  }
  monthsParse(Ce, tt, Rt) {
    let ln;
    let ni;
    let Mi;
    if (this._monthsParseExact) {
      return this.handleMonthStrictParse(Ce, tt, Rt);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    Mi = 0;
    for (; Mi < 12; Mi++) {
      ln = new Date(Date.UTC(2000, Mi));
      if (Rt && !this._longMonthsParse[Mi]) {
        const yr = this.months(ln, "", true).replace(".", "");
        const $s = this.monthsShort(ln, "", true).replace(".", "");
        this._longMonthsParse[Mi] = new RegExp(`^${yr}$`, "i");
        this._shortMonthsParse[Mi] = new RegExp(`^${$s}$`, "i");
      }
      if (!Rt && !this._monthsParse[Mi]) {
        ni = `^${this.months(ln, "", true)}|^${this.monthsShort(ln, "", true)}`;
        this._monthsParse[Mi] = new RegExp(ni.replace(".", ""), "i");
      }
      if (Rt && tt === "MMMM" && this._longMonthsParse[Mi].test(Ce) || Rt && tt === "MMM" && this._shortMonthsParse[Mi].test(Ce) || !Rt && this._monthsParse[Mi].test(Ce)) {
        return Mi;
      }
    }
  }
  monthsRegex(Ce) {
    if (this._monthsParseExact) {
      if (!L(this, "_monthsRegex")) {
        this.computeMonthsParse();
      }
      if (Ce) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!L(this, "_monthsRegex")) {
        this._monthsRegex = qs;
      }
      if (this._monthsStrictRegex && Ce) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    }
  }
  monthsShortRegex(Ce) {
    if (this._monthsParseExact) {
      if (!L(this, "_monthsRegex")) {
        this.computeMonthsParse();
      }
      if (Ce) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!L(this, "_monthsShortRegex")) {
        this._monthsShortRegex = dl;
      }
      if (this._monthsShortStrictRegex && Ce) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    }
  }
  week(Ce, tt) {
    return ea(Ce, this._week.dow, this._week.doy, tt).week;
  }
  firstDayOfWeek() {
    return this._week.dow;
  }
  firstDayOfYear() {
    return this._week.doy;
  }
  weekdays(Ce, tt, Rt) {
    if (!Ce) {
      if (kJ(this._weekdays)) {
        return this._weekdays;
      } else {
        return this._weekdays.standalone;
      }
    }
    if (kJ(this._weekdays)) {
      return this._weekdays[wf(Ce, Rt)];
    }
    const ln = this._weekdays.isFormat.test(tt) ? "format" : "standalone";
    return this._weekdays[ln][wf(Ce, Rt)];
  }
  weekdaysMin(Ce, tt, Rt) {
    if (Ce) {
      return this._weekdaysMin[wf(Ce, Rt)];
    } else {
      return this._weekdaysMin;
    }
  }
  weekdaysShort(Ce, tt, Rt) {
    if (Ce) {
      return this._weekdaysShort[wf(Ce, Rt)];
    } else {
      return this._weekdaysShort;
    }
  }
  weekdaysParse(Ce, tt, Rt) {
    let ln;
    let ni;
    if (this._weekdaysParseExact) {
      return this.handleWeekStrictParse(Ce, tt, Rt);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    ln = 0;
    for (; ln < 7; ln++) {
      const Mi = nd(new Date(Date.UTC(2000, 1)), ln, null, true);
      if (Rt && !this._fullWeekdaysParse[ln]) {
        this._fullWeekdaysParse[ln] = new RegExp(`^${this.weekdays(Mi, "", true).replace(".", ".?")}$`, "i");
        this._shortWeekdaysParse[ln] = new RegExp(`^${this.weekdaysShort(Mi, "", true).replace(".", ".?")}$`, "i");
        this._minWeekdaysParse[ln] = new RegExp(`^${this.weekdaysMin(Mi, "", true).replace(".", ".?")}$`, "i");
      }
      if (!this._weekdaysParse[ln]) {
        ni = `^${this.weekdays(Mi, "", true)}|^${this.weekdaysShort(Mi, "", true)}|^${this.weekdaysMin(Mi, "", true)}`;
        this._weekdaysParse[ln] = new RegExp(ni.replace(".", ""), "i");
      }
      if (!kJ(this._fullWeekdaysParse) || !kJ(this._shortWeekdaysParse) || !kJ(this._minWeekdaysParse) || !kJ(this._weekdaysParse)) {
        return;
      }
      if (Rt && tt === "dddd" && this._fullWeekdaysParse[ln].test(Ce)) {
        return ln;
      }
      if (Rt && tt === "ddd" && this._shortWeekdaysParse[ln].test(Ce)) {
        return ln;
      }
      if (Rt && tt === "dd" && this._minWeekdaysParse[ln].test(Ce)) {
        return ln;
      }
      if (!Rt && this._weekdaysParse[ln].test(Ce)) {
        return ln;
      }
    }
  }
  weekdaysRegex(Ce) {
    if (this._weekdaysParseExact) {
      if (!L(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (Ce) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!L(this, "_weekdaysRegex")) {
        this._weekdaysRegex = Zi;
      }
      if (this._weekdaysStrictRegex && Ce) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    }
  }
  weekdaysShortRegex(Ce) {
    if (this._weekdaysParseExact) {
      if (!L(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (Ce) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!L(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = Zi;
      }
      if (this._weekdaysShortStrictRegex && Ce) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    }
  }
  weekdaysMinRegex(Ce) {
    if (this._weekdaysParseExact) {
      if (!L(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (Ce) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!L(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = Zi;
      }
      if (this._weekdaysMinStrictRegex && Ce) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    }
  }
  isPM(Ce) {
    return Ce.toLowerCase().charAt(0) === "p";
  }
  meridiem(Ce, tt, Rt) {
    if (Ce > 11) {
      if (Rt) {
        return "pm";
      } else {
        return "PM";
      }
    } else if (Rt) {
      return "am";
    } else {
      return "AM";
    }
  }
  formatLongDate(Ce) {
    this._longDateFormat = this._longDateFormat ? this._longDateFormat : Ao;
    const tt = this._longDateFormat[Ce];
    const Rt = this._longDateFormat[Ce.toUpperCase()];
    if (tt || !Rt) {
      return tt;
    } else {
      this._longDateFormat[Ce] = Rt.replace(/MMMM|MM|DD|dddd/g, ln => ln.slice(1));
      return this._longDateFormat[Ce];
    }
  }
  handleMonthStrictParse(Ce, tt, Rt) {
    const ln = Ce.toLocaleLowerCase();
    let ni;
    let Mi;
    let yr;
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      ni = 0;
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      ni = 0;
      for (; ni < 12; ++ni) {
        yr = new Date(2000, ni);
        this._shortMonthsParse[ni] = this.monthsShort(yr, "").toLocaleLowerCase();
        this._longMonthsParse[ni] = this.months(yr, "").toLocaleLowerCase();
      }
    }
    if (Rt) {
      if (tt === "MMM") {
        Mi = this._shortMonthsParse.indexOf(ln);
        if (Mi !== -1) {
          return Mi;
        } else {
          return null;
        }
      } else {
        Mi = this._longMonthsParse.indexOf(ln);
        if (Mi !== -1) {
          return Mi;
        } else {
          return null;
        }
      }
    } else if (tt === "MMM") {
      Mi = this._shortMonthsParse.indexOf(ln);
      if (Mi !== -1) {
        return Mi;
      } else {
        Mi = this._longMonthsParse.indexOf(ln);
        if (Mi !== -1) {
          return Mi;
        } else {
          return null;
        }
      }
    } else {
      Mi = this._longMonthsParse.indexOf(ln);
      if (Mi !== -1) {
        return Mi;
      } else {
        Mi = this._shortMonthsParse.indexOf(ln);
        if (Mi !== -1) {
          return Mi;
        } else {
          return null;
        }
      }
    }
  }
  handleWeekStrictParse(Ce, tt, Rt) {
    let ln;
    const ni = Ce.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      let Mi;
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      Mi = 0;
      for (; Mi < 7; ++Mi) {
        const yr = nd(new Date(Date.UTC(2000, 1)), Mi, null, true);
        this._minWeekdaysParse[Mi] = this.weekdaysMin(yr).toLocaleLowerCase();
        this._shortWeekdaysParse[Mi] = this.weekdaysShort(yr).toLocaleLowerCase();
        this._weekdaysParse[Mi] = this.weekdays(yr, "").toLocaleLowerCase();
      }
    }
    if (kJ(this._weekdaysParse) && kJ(this._shortWeekdaysParse) && kJ(this._minWeekdaysParse)) {
      if (Rt) {
        if (tt === "dddd") {
          ln = this._weekdaysParse.indexOf(ni);
          if (ln !== -1) {
            return ln;
          } else {
            return null;
          }
        } else if (tt === "ddd") {
          ln = this._shortWeekdaysParse.indexOf(ni);
          if (ln !== -1) {
            return ln;
          } else {
            return null;
          }
        } else {
          ln = this._minWeekdaysParse.indexOf(ni);
          if (ln !== -1) {
            return ln;
          } else {
            return null;
          }
        }
      } else if (tt === "dddd") {
        ln = this._weekdaysParse.indexOf(ni);
        if (ln !== -1 || (ln = this._shortWeekdaysParse.indexOf(ni), ln !== -1)) {
          return ln;
        } else {
          ln = this._minWeekdaysParse.indexOf(ni);
          if (ln !== -1) {
            return ln;
          } else {
            return null;
          }
        }
      } else if (tt === "ddd") {
        ln = this._shortWeekdaysParse.indexOf(ni);
        if (ln !== -1 || (ln = this._weekdaysParse.indexOf(ni), ln !== -1)) {
          return ln;
        } else {
          ln = this._minWeekdaysParse.indexOf(ni);
          if (ln !== -1) {
            return ln;
          } else {
            return null;
          }
        }
      } else {
        ln = this._minWeekdaysParse.indexOf(ni);
        if (ln !== -1 || (ln = this._weekdaysParse.indexOf(ni), ln !== -1)) {
          return ln;
        } else {
          ln = this._shortWeekdaysParse.indexOf(ni);
          if (ln !== -1) {
            return ln;
          } else {
            return null;
          }
        }
      }
    }
  }
  computeMonthsParse() {
    const Ce = [];
    const tt = [];
    const Rt = [];
    let ln;
    let ni;
    for (ni = 0; ni < 12; ni++) {
      ln = new Date(2000, ni);
      Ce.push(this.monthsShort(ln, ""));
      tt.push(this.months(ln, ""));
      Rt.push(this.months(ln, ""));
      Rt.push(this.monthsShort(ln, ""));
    }
    Ce.sort(ha);
    tt.sort(ha);
    Rt.sort(ha);
    ni = 0;
    for (; ni < 12; ni++) {
      Ce[ni] = vr(Ce[ni]);
      tt[ni] = vr(tt[ni]);
    }
    for (ni = 0; ni < 24; ni++) {
      Rt[ni] = vr(Rt[ni]);
    }
    this._monthsRegex = new RegExp(`^(${Rt.join("|")})`, "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(`^(${tt.join("|")})`, "i");
    this._monthsShortStrictRegex = new RegExp(`^(${Ce.join("|")})`, "i");
  }
  computeWeekdaysParse() {
    const Ce = [];
    const tt = [];
    const Rt = [];
    const ln = [];
    let ni;
    for (ni = 0; ni < 7; ni++) {
      const Mi = nd(new Date(Date.UTC(2000, 1)), ni, null, true);
      const yr = this.weekdaysMin(Mi);
      const $s = this.weekdaysShort(Mi);
      const ca = this.weekdays(Mi);
      Ce.push(yr);
      tt.push($s);
      Rt.push(ca);
      ln.push(yr);
      ln.push($s);
      ln.push(ca);
    }
    Ce.sort(ha);
    tt.sort(ha);
    Rt.sort(ha);
    ln.sort(ha);
    ni = 0;
    for (; ni < 7; ni++) {
      tt[ni] = vr(tt[ni]);
      Rt[ni] = vr(Rt[ni]);
      ln[ni] = vr(ln[ni]);
    }
    this._weekdaysRegex = new RegExp(`^(${ln.join("|")})`, "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(`^(${Rt.join("|")})`, "i");
    this._weekdaysShortStrictRegex = new RegExp(`^(${tt.join("|")})`, "i");
    this._weekdaysMinStrictRegex = new RegExp(`^(${Ce.join("|")})`, "i");
  }
}
function ha(J, Ce) {
  return Ce.length - J.length;
}
const So = {
  calendar: {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  },
  longDateFormat: Ao,
  invalidDate: "Invalid date",
  ordinal: "%d",
  dayOfMonthOrdinalParse: /\d{1,2}/,
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  },
  months: ja,
  monthsShort: la,
  week: {
    dow: 0,
    doy: 6
  },
  weekdays: ta,
  weekdaysMin: Es,
  weekdaysShort: Fr,
  meridiemParse: /[ap]\.?m?\.?/i
};
function pa(J, Ce, tt) {
  const Rt = Math.min(J.length, Ce.length);
  const ln = Math.abs(J.length - Ce.length);
  let Mi;
  let ni = 0;
  for (Mi = 0; Mi < Rt; Mi++) {
    if (tt && J[Mi] !== Ce[Mi] || !tt && x(J[Mi]) !== x(Ce[Mi])) {
      ni++;
    }
  }
  return ni + ln;
}
function Vs(J, Ce) {
  Ge(null, [J, J.length, false], null, Ce);
}
function Qs(J, Ce) {
  return Uo(J, Ce.locale).toString();
}
function Wo(J) {
  return at(J).toString();
}
function Uo(J, Ce = Kd(), tt) {
  return ea(J, Ce.firstDayOfWeek(), Ce.firstDayOfYear(), tt).year;
}
function at(J, Ce) {
  return ea(J, 1, 4, Ce).year;
}
function ut(J, Ce) {
  Ge(J, null, null, function (tt, Rt) {
    let ln = function Oi(J, Ce = {}) {
      if (Ce._isUTC) {
        return Ce._offset || 0;
      } else {
        return function li(J) {
          return -Math.round(J.getTimezoneOffset() / 15) * 15;
        }(J);
      }
    }(tt, {
      _isUTC: Rt.isUTC,
      _offset: Rt.offset
    });
    let ni = "+";
    if (ln < 0) {
      ln = -ln;
      ni = "-";
    }
    return ni + he(~~(ln / 60), 2) + Ce + he(~~ln % 60, 2);
  });
}
const Zt = /([\+\-]|\d\d)/gi;
const sr = {};
const wa = {};
let ao;
function sl(J) {
  return J && J.toLowerCase().replace("_", "-");
}
function Fa(J) {
  if (!sr[J]) {
    console.error(`Khronos locale error: please load locale "${J}" before using it`);
  }
  return sr[J];
}
function Mr(J, Ce) {
  let tt;
  if (J) {
    if (O(Ce)) {
      tt = Kd(J);
    } else if (b(J)) {
      tt = Wf(J, Ce);
    }
    if (tt) {
      ao = tt;
    }
  }
  return ao && ao._abbr;
}
export function Wf(J, Ce) {
  if (Ce === null) {
    delete sr[J];
    ao = Kd("en");
    return null;
  }
  if (!Ce) {
    return;
  }
  let tt = So;
  Ce.abbr = J;
  if (Ce.parentLocale != null) {
    if (sr[Ce.parentLocale] == null) {
      wa[Ce.parentLocale] ||= [];
      wa[Ce.parentLocale].push({
        name: J,
        config: Ce
      });
      return null;
    }
    tt = sr[Ce.parentLocale]._config;
  }
  sr[J] = new Fo(function el(J, Ce) {
    const tt = Object.assign({}, J);
    for (const Rt in Ce) {
      if (!!L(Ce, Rt)) {
        if (I(J[Rt]) && I(Ce[Rt])) {
          tt[Rt] = {};
          Object.assign(tt[Rt], J[Rt]);
          Object.assign(tt[Rt], Ce[Rt]);
        } else if (Ce[Rt] != null) {
          tt[Rt] = Ce[Rt];
        } else {
          delete tt[Rt];
        }
      }
    }
    for (const Rt in J) {
      if (L(J, Rt) && !L(Ce, Rt) && I(J[Rt])) {
        tt[Rt] = Object.assign({}, tt[Rt]);
      }
    }
    return tt;
  }(tt, Ce));
  if (wa[J]) {
    wa[J].forEach(function (Rt) {
      Wf(Rt.name, Rt.config);
    });
  }
  Mr(J);
  return sr[J];
}
export function Kd(J) {
  (function gn() {
    if (!sr.en) {
      Mr("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal(J) {
          const Ce = J % 10;
          return J + (x(J % 100 / 10) === 1 ? "th" : Ce === 1 ? "st" : Ce === 2 ? "nd" : Ce === 3 ? "rd" : "th");
        }
      });
      (function Ia() {
        Ge("w", ["ww", 2, false], "wo", function (J, Ce) {
          return function zs(J, Ce = Kd(), tt) {
            return Ce.week(J, tt);
          }(J, Ce.locale).toString(10);
        });
        Ge("W", ["WW", 2, false], "Wo", function (J) {
          return function Rs(J, Ce) {
            return ea(J, 1, 4, Ce).week;
          }(J).toString(10);
        });
        F("week", "w");
        F("isoWeek", "W");
        so("week", 5);
        so("isoWeek", 5);
        Qi("w", Ze);
        Qi("ww", Ze, me);
        Qi("W", Ze);
        Qi("WW", Ze, me);
        rs(["w", "ww", "W", "WW"], function (J, Ce, tt, Rt) {
          Ce[Rt.substr(0, 1)] = x(J);
          return tt;
        });
      })();
      (function eo() {
        Ge(null, ["gg", 2, false], null, function (J, Ce) {
          return (Uo(J, Ce.locale) % 100).toString();
        });
        Ge(null, ["GG", 2, false], null, function (J) {
          return (at(J) % 100).toString();
        });
        Vs("gggg", Qs);
        Vs("ggggg", Qs);
        Vs("GGGG", Wo);
        Vs("GGGGG", Wo);
        F("weekYear", "gg");
        F("isoWeekYear", "GG");
        so("weekYear", 1);
        so("isoWeekYear", 1);
        Qi("G", Rn);
        Qi("g", Rn);
        Qi("GG", Ze, me);
        Qi("gg", Ze, me);
        Qi("GGGG", hn, bt);
        Qi("gggg", hn, bt);
        Qi("GGGGG", Kt, Ut);
        Qi("ggggg", Kt, Ut);
        rs(["gggg", "ggggg", "GGGG", "GGGGG"], function (J, Ce, tt, Rt) {
          Ce[Rt.substr(0, 2)] = x(J);
          return tt;
        });
        rs(["gg", "GG"], function (J, Ce, tt, Rt) {
          Ce[Rt] = Bn(J);
          return tt;
        });
      })();
      (function pr() {
        Ge("Y", null, null, function (J, Ce) {
          const tt = D$(J, Ce.isUTC);
          if (tt <= 9999) {
            return tt.toString(10);
          } else {
            return `+${tt}`;
          }
        });
        Ge(null, ["YY", 2, false], null, function (J, Ce) {
          return (D$(J, Ce.isUTC) % 100).toString(10);
        });
        Ge(null, ["YYYY", 4, false], null, ns);
        Ge(null, ["YYYYY", 5, false], null, ns);
        Ge(null, ["YYYYYY", 6, true], null, ns);
        F("year", "y");
        so("year", 1);
        Qi("Y", Rn);
        Qi("YY", Ze, me);
        Qi("YYYY", hn, bt);
        Qi("YYYYY", Kt, Ut);
        Qi("YYYYYY", Kt, Ut);
        Br(["YYYYY", "YYYYYY"], 0);
        Br("YYYY", function (J, Ce, tt) {
          Ce[0] = J.length === 2 ? Bn(J) : x(J);
          return tt;
        });
        Br("YY", function (J, Ce, tt) {
          Ce[0] = Bn(J);
          return tt;
        });
        Br("Y", function (J, Ce, tt) {
          Ce[0] = parseInt(J, 10);
          return tt;
        });
      })();
      (function Gn() {
        Ge("z", null, null, function (J, Ce) {
          if (Ce.isUTC) {
            return "UTC";
          } else {
            return "";
          }
        });
        Ge("zz", null, null, function (J, Ce) {
          if (Ce.isUTC) {
            return "Coordinated Universal Time";
          } else {
            return "";
          }
        });
      })();
      (function Gr() {
        Ge("X", null, null, function (J) {
          return function lt(J) {
            return Math.floor(J.valueOf() / 1000);
          }(J).toString(10);
        });
        Ge("x", null, null, function (J) {
          return J.valueOf().toString(10);
        });
        Qi("x", Rn);
        Qi("X", Si);
        Br("X", function (J, Ce, tt) {
          tt._d = new Date(parseFloat(J) * 1000);
          return tt;
        });
        Br("x", function (J, Ce, tt) {
          tt._d = new Date(x(J));
          return tt;
        });
      })();
      (function zr() {
        Ge("s", ["ss", 2, false], null, function (J, Ce) {
          return ke(J, Ce.isUTC).toString(10);
        });
        F("second", "s");
        so("second", 15);
        Qi("s", Ze);
        Qi("ss", Ze, me);
        Br(["s", "ss"], 5);
      })();
      (function Ks() {
        Ge("Q", null, "Qo", function (J, Ce) {
          return function Js(J, Ce = false) {
            return Math.ceil((jw(J, Ce) + 1) / 3);
          }(J, Ce.isUTC).toString(10);
        });
        F("quarter", "Q");
        so("quarter", 7);
        Qi("Q", ne);
        Br("Q", function (J, Ce, tt) {
          Ce[1] = (x(J) - 1) * 3;
          return tt;
        });
      })();
      (function vt() {
        ut("Z", ":");
        ut("ZZ", "");
        Qi("Z", di);
        Qi("ZZ", di);
        Br(["Z", "ZZ"], function (J, Ce, tt) {
          tt._useUTC = true;
          tt._tzm = function kn(J, Ce) {
            const tt = (Ce || "").match(J);
            if (tt === null) {
              return null;
            }
            const ln = tt[tt.length - 1].match(Zt) || ["-", "0", "0"];
            const ni = parseInt(ln[1], 10) * 60 + x(ln[2]);
            if (ni === 0) {
              return 0;
            } else if (ln[0] === "+") {
              return ni;
            } else {
              return -ni;
            }
          }(di, J);
          return tt;
        });
      })();
      (function pn() {
        Ge("M", ["MM", 2, false], "Mo", function (J, Ce) {
          return (jw(J, Ce.isUTC) + 1).toString(10);
        });
        Ge("MMM", null, null, function (J, Ce) {
          return Ce.locale.monthsShort(J, Ce.format, Ce.isUTC);
        });
        Ge("MMMM", null, null, function (J, Ce) {
          return Ce.locale.months(J, Ce.format, Ce.isUTC);
        });
        F("month", "M");
        so("month", 8);
        Qi("M", Ze);
        Qi("MM", Ze, me);
        Qi("MMM", function (J, Ce) {
          return Ce.monthsShortRegex(J);
        });
        Qi("MMMM", function (J, Ce) {
          return Ce.monthsRegex(J);
        });
        Br(["M", "MM"], function (J, Ce, tt) {
          Ce[1] = x(J) - 1;
          return tt;
        });
        Br(["MMM", "MMMM"], function (J, Ce, tt, Rt) {
          const ln = tt._locale.monthsParse(J, Rt, tt._strict);
          if (ln != null) {
            Ce[1] = ln;
          } else {
            Tr(tt).invalidMonth = !!J;
          }
          return tt;
        });
      })();
      (function Ys() {
        Ge("m", ["mm", 2, false], null, function (J, Ce) {
          return Ee(J, Ce.isUTC).toString(10);
        });
        F("minute", "m");
        so("minute", 14);
        Qi("m", Ze);
        Qi("mm", Ze, me);
        Br(["m", "mm"], 4);
      })();
      (function xo() {
        let J;
        Ge("S", null, null, function (tt, Rt) {
          return (~~(Be(tt, Rt.isUTC) / 100)).toString(10);
        });
        Ge(null, ["SS", 2, false], null, function (tt, Rt) {
          return (~~(Be(tt, Rt.isUTC) / 10)).toString(10);
        });
        Ge(null, ["SSS", 3, false], null, function (tt, Rt) {
          return Be(tt, Rt.isUTC).toString(10);
        });
        Ge(null, ["SSSS", 4, false], null, function (tt, Rt) {
          return (Be(tt, Rt.isUTC) * 10).toString(10);
        });
        Ge(null, ["SSSSS", 5, false], null, function (tt, Rt) {
          return (Be(tt, Rt.isUTC) * 100).toString(10);
        });
        Ge(null, ["SSSSSS", 6, false], null, function (tt, Rt) {
          return (Be(tt, Rt.isUTC) * 1000).toString(10);
        });
        Ge(null, ["SSSSSSS", 7, false], null, function (tt, Rt) {
          return (Be(tt, Rt.isUTC) * 10000).toString(10);
        });
        Ge(null, ["SSSSSSSS", 8, false], null, function (tt, Rt) {
          return (Be(tt, Rt.isUTC) * 100000).toString(10);
        });
        Ge(null, ["SSSSSSSSS", 9, false], null, function (tt, Rt) {
          return (Be(tt, Rt.isUTC) * 1000000).toString(10);
        });
        F("millisecond", "ms");
        so("millisecond", 16);
        Qi("S", Wt, ne);
        Qi("SS", Wt, me);
        Qi("SSS", Wt, it);
        J = "SSSS";
        for (; J.length <= 9; J += "S") {
          Qi(J, on);
        }
        function Ce(tt, Rt, ln) {
          Rt[6] = x(parseFloat(`0.${tt}`) * 1000);
          return ln;
        }
        for (J = "S"; J.length <= 9; J += "S") {
          Br(J, Ce);
        }
      })();
      (function Ls() {
        function J(ln, ni) {
          return Oe(ln, ni) % 12 || 12;
        }
        function tt(ln, ni) {
          Ge(ln, null, null, function (Mi, yr) {
            return yr.locale.meridiem(Oe(Mi, yr.isUTC), Ee(Mi, yr.isUTC), ni);
          });
        }
        function Rt(ln, ni) {
          return ni._meridiemParse;
        }
        Ge("H", ["HH", 2, false], null, function (ln, ni) {
          return Oe(ln, ni.isUTC).toString(10);
        });
        Ge("h", ["hh", 2, false], null, function (ln, ni) {
          return J(ln, ni.isUTC).toString(10);
        });
        Ge("k", ["kk", 2, false], null, function (ln, ni) {
          return function Ce(ln, ni) {
            return Oe(ln, ni) || 24;
          }(ln, ni.isUTC).toString(10);
        });
        Ge("hmm", null, null, function (ln, ni) {
          return `${J(ln, ni.isUTC)}${he(Ee(ln, ni.isUTC), 2)}`;
        });
        Ge("hmmss", null, null, function (ln, ni) {
          return `${J(ln, ni.isUTC)}${he(Ee(ln, ni.isUTC), 2)}${he(ke(ln, ni.isUTC), 2)}`;
        });
        Ge("Hmm", null, null, function (ln, ni) {
          return `${Oe(ln, ni.isUTC)}${he(Ee(ln, ni.isUTC), 2)}`;
        });
        Ge("Hmmss", null, null, function (ln, ni) {
          return `${Oe(ln, ni.isUTC)}${he(Ee(ln, ni.isUTC), 2)}${he(ke(ln, ni.isUTC), 2)}`;
        });
        tt("a", true);
        tt("A", false);
        F("hour", "h");
        so("hour", 13);
        Qi("a", Rt);
        Qi("A", Rt);
        Qi("H", Ze);
        Qi("h", Ze);
        Qi("k", Ze);
        Qi("HH", Ze, me);
        Qi("hh", Ze, me);
        Qi("kk", Ze, me);
        Qi("hmm", pt);
        Qi("hmmss", yt);
        Qi("Hmm", pt);
        Qi("Hmmss", yt);
        Br(["H", "HH"], 3);
        Br(["k", "kk"], function (ln, ni, Mi) {
          const yr = x(ln);
          ni[3] = yr === 24 ? 0 : yr;
          return Mi;
        });
        Br(["a", "A"], function (ln, ni, Mi) {
          Mi._isPm = Mi._locale.isPM(ln);
          Mi._meridiem = ln;
          return Mi;
        });
        Br(["h", "hh"], function (ln, ni, Mi) {
          ni[3] = x(ln);
          Tr(Mi).bigHour = true;
          return Mi;
        });
        Br("hmm", function (ln, ni, Mi) {
          const yr = ln.length - 2;
          ni[3] = x(ln.substr(0, yr));
          ni[4] = x(ln.substr(yr));
          Tr(Mi).bigHour = true;
          return Mi;
        });
        Br("hmmss", function (ln, ni, Mi) {
          const yr = ln.length - 4;
          const $s = ln.length - 2;
          ni[3] = x(ln.substr(0, yr));
          ni[4] = x(ln.substr(yr, 2));
          ni[5] = x(ln.substr($s));
          Tr(Mi).bigHour = true;
          return Mi;
        });
        Br("Hmm", function (ln, ni, Mi) {
          const yr = ln.length - 2;
          ni[3] = x(ln.substr(0, yr));
          ni[4] = x(ln.substr(yr));
          return Mi;
        });
        Br("Hmmss", function (ln, ni, Mi) {
          const yr = ln.length - 4;
          const $s = ln.length - 2;
          ni[3] = x(ln.substr(0, yr));
          ni[4] = x(ln.substr(yr, 2));
          ni[5] = x(ln.substr($s));
          return Mi;
        });
      })();
      (function ho() {
        Ge("DDD", ["DDDD", 3, false], "DDDo", function (J) {
          return ya(J).toString(10);
        });
        F("dayOfYear", "DDD");
        so("dayOfYear", 4);
        Qi("DDD", Wt);
        Qi("DDDD", it);
        Br(["DDD", "DDDD"], function (J, Ce, tt) {
          tt._dayOfYear = x(J);
          return tt;
        });
      })();
      (function td() {
        Ge("d", null, "do", function (J, Ce) {
          return wf(J, Ce.isUTC).toString(10);
        });
        Ge("dd", null, null, function (J, Ce) {
          return Ce.locale.weekdaysMin(J, Ce.format, Ce.isUTC);
        });
        Ge("ddd", null, null, function (J, Ce) {
          return Ce.locale.weekdaysShort(J, Ce.format, Ce.isUTC);
        });
        Ge("dddd", null, null, function (J, Ce) {
          return Ce.locale.weekdays(J, Ce.format, Ce.isUTC);
        });
        Ge("e", null, null, function (J, Ce) {
          return Ol(J, Ce.locale, Ce.isUTC).toString(10);
        });
        Ge("E", null, null, function (J, Ce) {
          return function Eo(J, Ce) {
            return wf(J, Ce) || 7;
          }(J, Ce.isUTC).toString(10);
        });
        F("day", "d");
        F("weekday", "e");
        F("isoWeekday", "E");
        so("day", 11);
        so("weekday", 11);
        so("isoWeekday", 11);
        Qi("d", Ze);
        Qi("e", Ze);
        Qi("E", Ze);
        Qi("dd", function (J, Ce) {
          return Ce.weekdaysMinRegex(J);
        });
        Qi("ddd", function (J, Ce) {
          return Ce.weekdaysShortRegex(J);
        });
        Qi("dddd", function (J, Ce) {
          return Ce.weekdaysRegex(J);
        });
        rs(["dd", "ddd", "dddd"], function (J, Ce, tt, Rt) {
          const ln = tt._locale.weekdaysParse(J, Rt, tt._strict);
          if (ln != null) {
            Ce.d = ln;
          } else {
            Tr(tt).invalidWeekday = !!J;
          }
          return tt;
        });
        rs(["d", "e", "E"], function (J, Ce, tt, Rt) {
          Ce[Rt] = x(J);
          return tt;
        });
      })();
      (function sa() {
        Ge("D", ["DD", 2, false], "Do", function (J, Ce) {
          return It(J, Ce.isUTC).toString(10);
        });
        F("date", "D");
        so("date", 9);
        Qi("D", Ze);
        Qi("DD", Ze, me);
        Qi("Do", function (J, Ce) {
          return Ce._dayOfMonthOrdinalParse || Ce._ordinalParse;
        });
        Br(["D", "DD"], 2);
        Br("Do", function (J, Ce, tt) {
          Ce[2] = x(J.match(Ze)[0]);
          return tt;
        });
      })();
    }
  })();
  if (J) {
    return function Rr(J) {
      let Ce;
      let tt;
      let Rt = 0;
      for (; Rt < J.length;) {
        const ln = sl(J[Rt]).split("-");
        let ni = ln.length;
        Ce = sl(J[Rt + 1]);
        Ce = Ce ? Ce.split("-") : null;
        for (; ni > 0;) {
          tt = Fa(ln.slice(0, ni).join("-"));
          if (tt) {
            return tt;
          }
          if (Ce && Ce.length >= ni && pa(ln, Ce, true) >= ni - 1) {
            break;
          }
          ni--;
        }
        Rt++;
      }
      return null;
    }(kJ(J) ? J : [J]);
  } else {
    return ao;
  }
}
const wn = ["year", "quarter", "month", "week", "day", "hours", "minutes", "seconds", "milliseconds"];
const tr = wn.reduce((J, Ce) => {
  J[Ce] = true;
  return J;
}, {});
function _Ji(J) {
  if (J < 0) {
    return Math.floor(J);
  } else {
    return Math.ceil(J);
  }
}
function oa(J) {
  return J * 4800 / 146097;
}
function Ns(J) {
  return J * 146097 / 4800;
}
let ys = Math.round;
const ht_ss = 44;
const ht_s = 45;
const ht_m = 45;
const ht_h = 22;
const ht_d = 26;
const ht_M = 11;
function dt(J, Ce, tt, Rt, ln) {
  return ln.relativeTime(Ce || 1, !!tt, J, Rt);
}
class $r {
  constructor(Ce, tt = {}) {
    this._data = {};
    this._locale = Kd();
    this._locale = tt && tt._locale || Kd();
    const ln = Ce.year || 0;
    const ni = Ce.quarter || 0;
    const Mi = Ce.month || 0;
    const yr = Ce.week || 0;
    const $s = Ce.day || 0;
    const ca = Ce.hours || 0;
    const zl = Ce.minutes || 0;
    const wl = Ce.seconds || 0;
    const _u = Ce.milliseconds || 0;
    this._isValid = function Do(J) {
      if (Object.keys(J).some(Rt => Rt in tr && J[Rt] === null || isNaN(J[Rt]))) {
        return false;
      }
      let tt = false;
      for (let Rt = 0; Rt < wn.length; ++Rt) {
        if (J[wn[Rt]]) {
          if (tt) {
            return false;
          }
          if (J[wn[Rt]] !== x(J[wn[Rt]])) {
            tt = true;
          }
        }
      }
      return true;
    }(Ce);
    this._milliseconds = +_u + wl * 1000 + zl * 60 * 1000 + ca * 1000 * 60 * 60;
    this._days = +$s + yr * 7;
    this._months = +Mi + ni * 3 + ln * 12;
    return function hi(J) {
      let Ce = J._milliseconds;
      let tt = J._days;
      let Rt = J._months;
      const ln = J._data;
      if ((Ce < 0 || tt < 0 || Rt < 0) && (Ce > 0 || tt > 0 || Rt > 0)) {
        Ce += _Ji(Ns(Rt) + tt) * 86400000;
        tt = 0;
        Rt = 0;
      }
      ln.milliseconds = Ce % 1000;
      const ni = t(Ce / 1000);
      ln.seconds = ni % 60;
      const Mi = t(ni / 60);
      ln.minutes = Mi % 60;
      const yr = t(Mi / 60);
      ln.hours = yr % 24;
      tt += t(yr / 24);
      const $s = t(oa(tt));
      Rt += $s;
      tt -= _Ji(Ns($s));
      const ca = t(Rt / 12);
      Rt %= 12;
      ln.day = tt;
      ln.month = Rt;
      ln.year = ca;
      return J;
    }(this);
  }
  isValid() {
    return this._isValid;
  }
  humanize(Ce) {
    if (!this.isValid()) {
      return this.localeData().invalidDate;
    }
    const tt = this.localeData();
    let Rt = function He(J, Ce, tt) {
      const Rt = tl(J).abs();
      const ln = ys(Rt.as("s"));
      const ni = ys(Rt.as("m"));
      const Mi = ys(Rt.as("h"));
      const yr = ys(Rt.as("d"));
      const $s = ys(Rt.as("M"));
      const ca = ys(Rt.as("y"));
      const zl = ln <= ht_ss && ["s", ln] || ln < ht_s && ["ss", ln] || ni <= 1 && ["m"] || ni < ht_m && ["mm", ni] || Mi <= 1 && ["h"] || Mi < ht_h && ["hh", Mi] || yr <= 1 && ["d"] || yr < ht_d && ["dd", yr] || $s <= 1 && ["M"] || $s < ht_M && ["MM", $s] || ca <= 1 && ["y"] || ["yy", ca];
      return dt.apply(null, [zl[0], zl[1], Ce, +J > 0, tt]);
    }(this, !Ce, tt);
    if (Ce) {
      Rt = tt.pastFuture(+this, Rt);
    }
    return tt.postformat(Rt);
  }
  localeData() {
    return this._locale;
  }
  locale(Ce) {
    if (Ce) {
      this._locale = Kd(Ce) || this._locale;
      return this;
    } else {
      return this._locale._abbr;
    }
  }
  abs() {
    const Ce = Math.abs;
    const tt = this._data;
    this._milliseconds = Ce(this._milliseconds);
    this._days = Ce(this._days);
    this._months = Ce(this._months);
    tt.milliseconds = Ce(tt.milliseconds);
    tt.seconds = Ce(tt.seconds);
    tt.minutes = Ce(tt.minutes);
    tt.hours = Ce(tt.hours);
    tt.month = Ce(tt.month);
    tt.year = Ce(tt.year);
    return this;
  }
  as(Ce) {
    if (!this.isValid()) {
      return NaN;
    }
    let tt;
    let Rt;
    const ln = this._milliseconds;
    const ni = Z(Ce);
    if (ni === "month" || ni === "year") {
      tt = this._days + ln / 86400000;
      Rt = this._months + oa(tt);
      if (ni === "month") {
        return Rt;
      } else {
        return Rt / 12;
      }
    }
    tt = this._days + Math.round(Ns(this._months));
    switch (ni) {
      case "week":
        return tt / 7 + ln / 604800000;
      case "day":
        return tt + ln / 86400000;
      case "hours":
        return tt * 24 + ln / 3600000;
      case "minutes":
        return tt * 1440 + ln / 60000;
      case "seconds":
        return tt * 86400 + ln / 1000;
      case "milliseconds":
        return Math.floor(tt * 86400000) + ln;
      default:
        throw new Error(`Unknown unit ${ni}`);
    }
  }
  valueOf() {
    if (this.isValid()) {
      return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + x(this._months / 12) * 31536000000;
    } else {
      return NaN;
    }
  }
}
function Aa(J) {
  if (J._isValid == null) {
    const Ce = Tr(J);
    const tt = Array.prototype.some.call(Ce.parsedDateParts, function (ln) {
      return ln != null;
    });
    let Rt = !isNaN(J._d && J._d.getTime()) && Ce.overflow < 0 && !Ce.empty && !Ce.invalidMonth && !Ce.invalidWeekday && !Ce.weekdayMismatch && !Ce.nullInput && !Ce.invalidFormat && !Ce.userInvalidated && (!Ce.meridiem || Ce.meridiem && tt);
    if (J._strict) {
      Rt = Rt && Ce.charsLeftOver === 0 && Ce.unusedTokens.length === 0 && Ce.bigHour === undefined;
    }
    if (Object.isFrozen != null && Object.isFrozen(J)) {
      return Rt;
    }
    J._isValid = Rt;
  }
  return J._isValid;
}
function Hr(J, Ce) {
  J._d = new Date(NaN);
  Object.assign(Tr(J), Ce || {
    userInvalidated: true
  });
  return J;
}
const mn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
const zn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
const Fn = /Z|[+-]\d\d(?::?\d\d)?/;
const ci = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/, true], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/, true], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/, true], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/, true], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/, true], ["YYYYMMDD", /\d{8}/, true], ["GGGG[W]WWE", /\d{4}W\d{3}/, true], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/, true]];
const pi = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]];
const lr = /^\/?Date\((\-?\d+)/i;
const xi = {
  UT: 0,
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
const Bo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function to(J) {
  if (!b(J._i)) {
    return J;
  }
  const Ce = J._i;
  const tt = mn.exec(Ce) || zn.exec(Ce);
  let Rt;
  let ln;
  let ni;
  let Mi;
  let yr;
  let $s;
  if (!tt) {
    J._isValid = false;
    return J;
  }
  yr = 0;
  $s = ci.length;
  for (; yr < $s; yr++) {
    if (ci[yr][1].exec(tt[1])) {
      ln = ci[yr][0];
      Rt = ci[yr][2] !== false;
      break;
    }
  }
  if (ln == null) {
    J._isValid = false;
    return J;
  }
  if (tt[3]) {
    yr = 0;
    $s = pi.length;
    for (; yr < $s; yr++) {
      if (pi[yr][1].exec(tt[3])) {
        ni = (tt[2] || " ") + pi[yr][0];
        break;
      }
    }
    if (ni == null) {
      J._isValid = false;
      return J;
    }
  }
  if (!Rt && ni != null) {
    J._isValid = false;
    return J;
  }
  if (tt[4]) {
    if (!Fn.exec(tt[4])) {
      J._isValid = false;
      return J;
    }
    Mi = "Z";
  }
  J._f = ln + (ni || "") + (Mi || "");
  return La(J);
}
function Kl(J) {
  const Ce = parseInt(J, 10);
  if (Ce <= 49) {
    return Ce + 2000;
  } else {
    return Ce;
  }
}
function ls(J) {
  if (!b(J._i)) {
    return J;
  }
  const Ce = Bo.exec(function Bl(J) {
    return J.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  }(J._i));
  if (!Ce) {
    return function wt(J) {
      J._isValid = false;
      return J;
    }(J);
  }
  const tt = function Ha(J, Ce, tt, Rt, ln, ni) {
    const Mi = [Kl(J), la.indexOf(Ce), parseInt(tt, 10), parseInt(Rt, 10), parseInt(ln, 10)];
    if (ni) {
      Mi.push(parseInt(ni, 10));
    }
    return Mi;
  }(Ce[4], Ce[3], Ce[2], Ce[5], Ce[6], Ce[7]);
  if (function iu(J, Ce, tt) {
    return !J || Fr.indexOf(J) === new Date(Ce[0], Ce[1], Ce[2]).getDay() || (Tr(tt).weekdayMismatch = true, tt._isValid = false, false);
  }(Ce[1], tt, J)) {
    J._a = tt;
    J._tzm = function Wa(J, Ce, tt) {
      if (J) {
        return xi[J];
      }
      if (Ce) {
        return 0;
      }
      {
        const Rt = parseInt(tt, 10);
        const ln = Rt % 100;
        return (Rt - ln) / 100 * 60 + ln;
      }
    }(Ce[8], Ce[9], Ce[10]);
    J._d = st.apply(null, J._a);
    J._d.setUTCMinutes(J._d.getUTCMinutes() - J._tzm);
    Tr(J).rfc2822 = true;
  }
  return J;
}
export function p6(J, Ce, tt, Rt, ln = 0) {
  const ni = Kd(tt || "en");
  if (!ni) {
    throw new Error(`Locale "${tt}" is not defined, please add it with "defineLocale(...)"`);
  }
  const yr = function gc(J, Ce, tt, Rt, ln = 0) {
    if (!Rp(J)) {
      return tt.invalidDate;
    }
    const ni = mt(Ce, tt);
    pe[ni] = pe[ni] || function Ue(J) {
      const Ce = J.match(Re);
      const tt = Ce.length;
      const Rt = new Array(tt);
      for (let ln = 0; ln < tt; ln++) {
        Rt[ln] = re[Ce[ln]] ? re[Ce[ln]] : ot(Ce[ln]);
      }
      return function (ln, ni, Mi, yr = 0) {
        let $s = "";
        for (let ca = 0; ca < tt; ca++) {
          $s += C(Rt[ca]) ? Rt[ca].call(null, ln, {
            format: J,
            locale: ni,
            isUTC: Mi,
            offset: yr
          }) : Rt[ca];
        }
        return $s;
      };
    }(ni);
    return pe[ni](J, tt, Rt, ln);
  }(J, Ce || (Rt ? "YYYY-MM-DDTHH:mm:ss[Z]" : "YYYY-MM-DDTHH:mm:ssZ"), ni, Rt, ln);
  return yr && ni.postformat(yr);
}
function mt(J, Ce) {
  let tt = J;
  let Rt = 5;
  const ln = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  const ni = Mi => Ce.formatLongDate(Mi) || Mi;
  for (ln.lastIndex = 0; Rt >= 0 && ln.test(tt);) {
    tt = tt.replace(ln, ni);
    ln.lastIndex = 0;
    Rt -= 1;
  }
  return tt;
}
function qt(J, Ce, tt) {
  return J ?? Ce ?? tt;
}
function Gt(J) {
  const Ce = [];
  let tt;
  let Rt;
  let ln;
  if (J._d) {
    return J;
  }
  const ni = function Ct(J) {
    const Ce = new Date();
    if (J._useUTC) {
      return [Ce.getUTCFullYear(), Ce.getUTCMonth(), Ce.getUTCDate()];
    } else {
      return [Ce.getFullYear(), Ce.getMonth(), Ce.getDate()];
    }
  }(J);
  if (J._w && J._a[2] == null && J._a[1] == null) {
    (function Sn(J) {
      let Ce;
      let tt;
      let Rt;
      let ln;
      let ni;
      let Mi;
      let yr;
      const $s = J._w;
      if ($s.GG != null || $s.W != null || $s.E != null) {
        ln = 1;
        ni = 4;
        Ce = qt($s.GG, J._a[0], ea(new Date(), 1, 4).year);
        tt = qt($s.W, 1);
        Rt = qt($s.E, 1);
        if (Rt < 1 || Rt > 7) {
          yr = true;
        }
      } else {
        ln = J._locale._week.dow;
        ni = J._locale._week.doy;
        const ca = ea(new Date(), ln, ni);
        Ce = qt($s.gg, J._a[0], ca.year);
        tt = qt($s.w, ca.week);
        if ($s.d != null) {
          Rt = $s.d;
          if (Rt < 0 || Rt > 6) {
            yr = true;
          }
        } else if ($s.e != null) {
          Rt = $s.e + ln;
          if ($s.e < 0 || $s.e > 6) {
            yr = true;
          }
        } else {
          Rt = ln;
        }
      }
      if (tt < 1 || tt > Oa(Ce, ln, ni)) {
        Tr(J)._overflowWeeks = true;
      } else if (yr != null) {
        Tr(J)._overflowWeekday = true;
      } else {
        Mi = function qo(J, Ce, tt, Rt, ln) {
          const yr = 1 + (Ce - 1) * 7 + (7 + tt - Rt) % 7 + qi(J, Rt, ln);
          let $s;
          let ca;
          if (yr <= 0) {
            $s = J - 1;
            ca = oi($s) + yr;
          } else if (yr > oi(J)) {
            $s = J + 1;
            ca = yr - oi(J);
          } else {
            $s = J;
            ca = yr;
          }
          return {
            year: $s,
            dayOfYear: ca
          };
        }(Ce, tt, Rt, ln, ni);
        J._a[0] = Mi.year;
        J._dayOfYear = Mi.dayOfYear;
      }
    })(J);
  }
  if (J._dayOfYear != null) {
    ln = qt(J._a[0], ni[0]);
    if (J._dayOfYear > oi(ln) || J._dayOfYear === 0) {
      Tr(J)._overflowDayOfYear = true;
    }
    Rt = new Date(Date.UTC(ln, 0, J._dayOfYear));
    J._a[1] = Rt.getUTCMonth();
    J._a[2] = Rt.getUTCDate();
  }
  tt = 0;
  for (; tt < 3 && J._a[tt] == null; ++tt) {
    J._a[tt] = Ce[tt] = ni[tt];
  }
  for (; tt < 7; tt++) {
    J._a[tt] = Ce[tt] = J._a[tt] ?? (tt === 2 ? 1 : 0);
  }
  if (J._a[3] === 24 && J._a[4] === 0 && J._a[5] === 0 && J._a[6] === 0) {
    J._nextDay = true;
    J._a[3] = 0;
  }
  J._d = (J._useUTC ? st : rt).apply(null, Ce);
  const Mi = J._useUTC ? J._d.getUTCDay() : J._d.getDay();
  if (J._tzm != null) {
    J._d.setUTCMinutes(J._d.getUTCMinutes() - J._tzm);
  }
  if (J._nextDay) {
    J._a[3] = 24;
  }
  if (J._w && typeof J._w.d !== "undefined" && J._w.d !== Mi) {
    Tr(J).weekdayMismatch = true;
  }
  return J;
}
function ki(J) {
  let Ce;
  const tt = J._a;
  if (tt && Tr(J).overflow === -2) {
    Ce = tt[1] < 0 || tt[1] > 11 ? 1 : tt[2] < 1 || tt[2] > bn(tt[0], tt[1]) ? 2 : tt[3] < 0 || tt[3] > 24 || tt[3] === 24 && (tt[4] !== 0 || tt[5] !== 0 || tt[6] !== 0) ? 3 : tt[4] < 0 || tt[4] > 59 ? 4 : tt[5] < 0 || tt[5] > 59 ? 5 : tt[6] < 0 || tt[6] > 999 ? 6 : -1;
    if (Tr(J)._overflowDayOfYear && (Ce < 0 || Ce > 2)) {
      Ce = 2;
    }
    if (Tr(J)._overflowWeeks && Ce === -1) {
      Ce = 7;
    }
    if (Tr(J)._overflowWeekday && Ce === -1) {
      Ce = 8;
    }
    Tr(J).overflow = Ce;
  }
  return J;
}
function La(J) {
  if (J._f === "ISO_8601") {
    return to(J);
  }
  if (J._f === "RFC_2822") {
    return ls(J);
  }
  J._a = [];
  Tr(J).empty = true;
  if (kJ(J._f) || !J._i && J._i !== 0) {
    return J;
  }
  let Ce = J._i.toString();
  let tt = 0;
  const Rt = Ce.length;
  const ln = mt(J._f, J._locale).match(Re) || [];
  let ni;
  let Mi;
  let yr;
  let $s;
  for (ni = 0; ni < ln.length; ni++) {
    Mi = ln[ni];
    yr = (Ce.match(br(Mi, J._locale)) || [])[0];
    if (yr) {
      $s = Ce.substr(0, Ce.indexOf(yr));
      if ($s.length > 0) {
        Tr(J).unusedInput.push($s);
      }
      Ce = Ce.slice(Ce.indexOf(yr) + yr.length);
      tt += yr.length;
    }
    if (re[Mi]) {
      if (yr) {
        Tr(J).empty = false;
      } else {
        Tr(J).unusedTokens.push(Mi);
      }
      vs(Mi, yr, J);
    } else if (J._strict && !yr) {
      Tr(J).unusedTokens.push(Mi);
    }
  }
  Tr(J).charsLeftOver = Rt - tt;
  if (Ce.length > 0) {
    Tr(J).unusedInput.push(Ce);
  }
  if (J._a[3] <= 12 && Tr(J).bigHour === true && J._a[3] > 0) {
    Tr(J).bigHour = undefined;
  }
  Tr(J).parsedDateParts = J._a.slice(0);
  Tr(J).meridiem = J._meridiem;
  J._a[3] = function Yo(J, Ce, tt) {
    let Rt = Ce;
    if (tt == null) {
      return Rt;
    }
    if (J.meridiemHour != null) {
      return J.meridiemHour(Rt, tt);
    }
    if (J.isPM == null) {
      return Rt;
    }
    const ln = J.isPM(tt);
    if (ln && Rt < 12) {
      Rt += 12;
    }
    if (!ln && Rt === 12) {
      Rt = 0;
    }
    return Rt;
  }(J._locale, J._a[3], J._meridiem);
  Gt(J);
  return ki(J);
}
function Ga(J) {
  const Ce = ki(function Zo(J) {
    let Ce = J._i;
    const tt = J._f;
    J._locale = J._locale || Kd(J._l);
    if (Ce === null || tt === undefined && Ce === "") {
      return Hr(J, {
        nullInput: true
      });
    } else {
      if (b(Ce)) {
        J._i = Ce = J._locale.preparse(Ce, tt);
      }
      if (J_(Ce)) {
        J._d = ks(Ce);
        return J;
      } else {
        if (kJ(tt)) {
          (function Ts(J) {
            let Ce;
            let tt;
            let Rt;
            let ln;
            let ni;
            if (!J._f || J._f.length === 0) {
              Tr(J).invalidFormat = true;
              return Hr(J);
            }
            for (ni = 0; ni < J._f.length; ni++) {
              ln = 0;
              Ce = Object.assign({}, J);
              if (J._useUTC != null) {
                Ce._useUTC = J._useUTC;
              }
              Ce._f = J._f[ni];
              La(Ce);
              if (Aa(Ce)) {
                ln += Tr(Ce).charsLeftOver;
                ln += Tr(Ce).unusedTokens.length * 10;
                Tr(Ce).score = ln;
                if (Rt == null || ln < Rt) {
                  Rt = ln;
                  tt = Ce;
                }
              }
            }
            Object.assign(J, tt || Ce);
          })(J);
        } else if (tt) {
          La(J);
        } else {
          (function lo(J) {
            const Ce = J._i;
            if (O(Ce)) {
              J._d = new Date();
            } else if (J_(Ce)) {
              J._d = ks(Ce);
            } else if (b(Ce)) {
              (function bs(J) {
                if (!b(J._i)) {
                  return J;
                }
                const Ce = lr.exec(J._i);
                if (Ce !== null) {
                  J._d = new Date(+Ce[1]);
                } else {
                  to(J);
                  if (J._isValid === false) {
                    delete J._isValid;
                    ls(J);
                    if (J._isValid === false) {
                      delete J._isValid;
                      Hr(J);
                    }
                  }
                }
              })(J);
            } else if (kJ(Ce) && Ce.length) {
              const tt = Ce.slice(0);
              J._a = tt.map(Rt => b(Rt) ? parseInt(Rt, 10) : Rt);
              Gt(J);
            } else if (I(Ce)) {
              (function Os(J) {
                if (J._d) {
                  return J;
                }
                const Ce = J._i;
                if (I(Ce)) {
                  const tt = function X(J) {
                    const Ce = {};
                    let tt;
                    let Rt;
                    for (Rt in J) {
                      if (L(J, Rt)) {
                        tt = Z(Rt);
                        if (tt) {
                          Ce[tt] = J[Rt];
                        }
                      }
                    }
                    return Ce;
                  }(Ce);
                  J._a = [tt.year, tt.month, tt.day, tt.hours, tt.minutes, tt.seconds, tt.milliseconds].map(Rt => b(Rt) ? parseInt(Rt, 10) : Rt);
                }
                return Gt(J);
              })(J);
            } else {
              if (!w(Ce)) {
                return Hr(J);
              }
              J._d = new Date(Ce);
            }
          })(J);
        }
        if (!Aa(J)) {
          J._d = null;
        }
        return J;
      }
    }
  }(J));
  Ce._d = new Date(Ce._d != null ? Ce._d.getTime() : NaN);
  if (!Aa(Object.assign({}, Ce, {
    _isValid: null
  }))) {
    Ce._d = new Date(NaN);
  }
  return Ce;
}
export function sG(J, Ce, tt, Rt, ln) {
  if (J_(J)) {
    return J;
  } else {
    return function gl(J, Ce, tt, Rt, ln) {
      const ni = {};
      let Mi = J;
      if (I(Mi) && function E(J) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(J).length === 0;
        }
        let Ce;
        for (Ce in J) {
          if (J.hasOwnProperty(Ce)) {
            return false;
          }
        }
        return true;
      }(Mi) || kJ(Mi) && Mi.length === 0) {
        Mi = undefined;
      }
      ni._useUTC = ni._isUTC = ln;
      ni._l = tt;
      ni._i = Mi;
      ni._f = Ce;
      ni._strict = Rt;
      return Ga(ni);
    }(J, Ce, tt, Rt, ln)._d;
  }
}
export function Ji(J) {
  if (J instanceof Date) {
    return new Date(J.getUTCFullYear(), J.getUTCMonth(), J.getUTCDate(), J.getUTCHours(), J.getUTCMinutes(), J.getUTCSeconds(), J.getUTCMilliseconds());
  } else {
    return null;
  }
}
function Io(J) {
  if (J < 0) {
    return Math.round(J * -1) * -1;
  } else {
    return Math.round(J);
  }
}
export function Ax(J, Ce, tt = "milliseconds") {
  return !!J && !!Ce && (tt === "milliseconds" ? J.valueOf() > Ce.valueOf() : Ce.valueOf() < gl(J, tt).valueOf());
}
export function RR(J, Ce, tt = "milliseconds") {
  return !!J && !!Ce && (tt === "milliseconds" ? J.valueOf() < Ce.valueOf() : Dz(J, tt).valueOf() < Ce.valueOf());
}
export function DB(J, Ce) {
  return typeof Ce !== "undefined" && !!Ce && !!Ce.length && Ce.some(tt => tt === J.getDay());
}
export function ZG(J, Ce, tt = "milliseconds") {
  if (!J || !Ce) {
    return false;
  }
  if (tt === "milliseconds") {
    return J.valueOf() === Ce.valueOf();
  }
  const Rt = Ce.valueOf();
  return gl(J, tt).valueOf() <= Rt && Rt <= Dz(J, tt).valueOf();
}
const Gi = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
const ic = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function tl(J, Ce, tt = {}) {
  const Rt = function gr(J, Ce) {
    if (J == null) {
      return {};
    }
    if (function wi(J) {
      return J instanceof $r;
    }(J)) {
      return {
        milliseconds: J._milliseconds,
        day: J._days,
        month: J._months
      };
    }
    if (w(J)) {
      if (Ce) {
        return {
          [Ce]: J
        };
      } else {
        return {
          milliseconds: J
        };
      }
    }
    if (b(J)) {
      let tt = Gi.exec(J);
      if (tt) {
        const Rt = tt[1] === "-" ? -1 : 1;
        return {
          year: 0,
          day: x(tt[2]) * Rt,
          hours: x(tt[3]) * Rt,
          minutes: x(tt[4]) * Rt,
          seconds: x(tt[5]) * Rt,
          milliseconds: x(Io(x(tt[6]) * 1000)) * Rt
        };
      }
      tt = ic.exec(J);
      if (tt) {
        const Rt = tt[1] === "-" ? -1 : 1;
        return {
          year: ro(tt[2], Rt),
          month: ro(tt[3], Rt),
          week: ro(tt[4], Rt),
          day: ro(tt[5], Rt),
          hours: ro(tt[6], Rt),
          minutes: ro(tt[7], Rt),
          seconds: ro(tt[8], Rt)
        };
      }
    }
    if (I(J) && ("from" in J || "to" in J)) {
      const tt = function Zl(J, Ce) {
        if (!Rp(J) || !Rp(Ce)) {
          return {
            milliseconds: 0,
            months: 0
          };
        }
        let tt;
        const Rt = function Zn(J, Ce, tt = {}) {
          if (!tt._isUTC) {
            return J;
          }
          const Rt = ks(Ce);
          const ln = (tt._offset || 0) * 60000;
          const ni = J.valueOf() - Rt.valueOf() + ln;
          Rt.setTime(Rt.valueOf() + ni);
          return Rt;
        }(Ce, J, {
          _offset: J.getTimezoneOffset()
        });
        if (RR(J, Rt)) {
          tt = Vu(J, Rt);
        } else {
          tt = Vu(Rt, J);
          tt.milliseconds = -tt.milliseconds;
          tt.months = -tt.months;
        }
        return tt;
      }(sG(J.from), sG(J.to));
      return {
        milliseconds: tt.milliseconds,
        month: tt.months
      };
    }
    return J;
  }(J, Ce);
  return new $r(Rt, tt);
}
function ro(J, Ce) {
  const tt = J && parseFloat(J.replace(",", "."));
  return (isNaN(tt) ? 0 : tt) * Ce;
}
function Vu(J, Ce) {
  const tt = {
    milliseconds: 0,
    months: 0
  };
  tt.months = jw(Ce) - jw(J) + (D$(Ce) - D$(J)) * 12;
  if (Ax($l(ks(J), tt.months, "month"), Ce)) {
    --tt.months;
  }
  tt.milliseconds = +Ce - +$l(ks(J), tt.months, "month");
  return tt;
}
function $l(J, Ce, tt, Rt) {
  return Da(J, tl(Ce, tt), 1, Rt);
}
function Da(J, Ce, tt, Rt) {
  const ln = Ce._milliseconds;
  const ni = Io(Ce._days);
  const Mi = Io(Ce._months);
  if (Mi) {
    Or(J, jw(J, Rt) + Mi * tt, Rt);
  }
  if (ni) {
    fa(J, It(J, Rt) + ni * tt, Rt);
  }
  if (ln) {
    (function bo(J, Ce) {
      J.setTime(Ce);
    })(J, function De(J) {
      return J.getTime();
    }(J) + ln * tt);
  }
  return ks(J);
}
function nd(J, Ce, tt = Kd(), Rt) {
  const ln = wf(J, Rt);
  const ni = function Bd(J, Ce) {
    if (!b(J)) {
      return J;
    }
    const tt = parseInt(J, 10);
    if (!isNaN(tt)) {
      return tt;
    }
    const Rt = Ce.weekdaysParse(J);
    if (w(Rt)) {
      return Rt;
    } else {
      return null;
    }
  }(Ce, tt);
  return $l(J, ni - ln, "day");
}
function Ol(J, Ce = Kd(), tt) {
  return (wf(J, tt) + 7 - Ce.firstDayOfWeek()) % 7;
}
const mc = function (J) {
  if (J === 0) {
    return 0;
  } else if (J === 1) {
    return 1;
  } else if (J === 2) {
    return 2;
  } else if (J % 100 >= 3 && J % 100 <= 10) {
    return 3;
  } else if (J % 100 >= 11) {
    return 4;
  } else {
    return 5;
  }
};
const Ps = {
  s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
  m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
  h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
  d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
  M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
  y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
};
const Ii = function (J) {
  return function (Ce, tt) {
    const Rt = mc(Ce);
    let ln = Ps[J][mc(Ce)];
    if (Rt === 2) {
      ln = ln[tt ? 0 : 1];
    }
    return ln.replace(/%d/i, Ce.toString());
  };
}; //! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_");
"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_");
"ح_ن_ث_ر_خ_ج_س".split("_");
Ii("s");
Ii("s");
Ii("m");
Ii("m");
Ii("h");
Ii("h");
Ii("d");
Ii("d");
Ii("M");
Ii("M");
Ii("y");
Ii("y");
"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_");
"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_");
"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_");
"нед_пон_вто_сря_чет_пет_съб".split("_");
"нд_пн_вт_ср_чт_пт_сб".split("_");
"gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.".split("_");
"ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des".split("_");
"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_");
"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_");
"diu._dil._dim._dix._dij._div._dis.".split("_");
"dg_dl_dt_dc_dj_dv_ds".split("_");
const Al = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_");
const wd = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"); //! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
(function (J, Ce) {
  let tt;
  let Rt = [];
  for (tt = 0; tt < 12; tt++) {
    Rt[tt] = new RegExp("^" + J[tt] + "$|^" + Ce[tt] + "$", "i");
  }
})(Al, wd);
(function (J) {
  let Ce;
  let tt = [];
  for (Ce = 0; Ce < 12; Ce++) {
    tt[Ce] = new RegExp("^" + J[Ce] + "$", "i");
  }
})(wd);
(function (J) {
  let Ce;
  let tt = [];
  for (Ce = 0; Ce < 12; Ce++) {
    tt[Ce] = new RegExp("^" + J[Ce] + "$", "i");
  }
})(Al);
"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_");
"ne_po_út_st_čt_pá_so".split("_");
"ne_po_út_st_čt_pá_so".split("_");
"Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_");
"Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_");
"Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag".split("_");
"Søn_Man_Tir_Ons_Tor_Fre_Lør".split("_");
"Sø_Ma_Ti_On_To_Fr_Lø".split("_");
"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_");
"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_");
"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_");
"So._Mo._Di._Mi._Do._Fr._Sa.".split("_");
"So_Mo_Di_Mi_Do_Fr_Sa".split("_");
"January_February_March_April_May_June_July_August_September_October_November_December".split("_");
"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
"Su_Mo_Tu_We_Th_Fr_Sa".split("_");
"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_");
"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_");
"dom._lun._mar._mié._jue._vie._sáb.".split("_");
"do_lu_ma_mi_ju_vi_sá".split("_");
"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_");
"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_");
"dom._lun._mar._mié._jue._vie._sáb.".split("_");
"do_lu_ma_mi_ju_vi_sá".split("_");
"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_");
"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_");
"dom._lun._mar._mié._jue._vie._sáb.".split("_");
"do_lu_ma_mi_ju_vi_sá".split("_");
"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_");
"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_");
"dom._lun._mar._mié._jue._vie._sáb.".split("_");
"do_lu_ma_mi_ju_vi_sá".split("_");
"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_");
"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_");
"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_");
"P_E_T_K_N_R_L".split("_");
"P_E_T_K_N_R_L".split("_");
"nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ");
"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_");
"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_");
"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_");
"su_ma_ti_ke_to_pe_la".split("_");
"su_ma_ti_ke_to_pe_la".split("_");
export const cn = {
  abbr: "fr",
  months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
  monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
  monthsParseExact: true,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Aujourd’hui à] LT",
    nextDay: "[Demain à] LT",
    nextWeek: "dddd [à] LT",
    lastDay: "[Hier à] LT",
    lastWeek: "dddd [dernier à] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    ss: "%d secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
  ordinal(J, Ce) {
    const tt = Number(J);
    switch (Ce) {
      case "D":
        return tt + (tt === 1 ? "er" : "");
      default:
      case "M":
      case "Q":
      case "DDD":
      case "d":
        return tt + (tt === 1 ? "er" : "e");
      case "w":
      case "W":
        return tt + (tt === 1 ? "re" : "e");
    }
  },
  week: {
    dow: 1,
    doy: 4
  }
}; //! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_");
"xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec".split("_");
"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_");
"domingo_luns_martes_mércores_xoves_venres_sábado".split("_");
"dom._lun._mar._mér._xov._ven._sáb.".split("_");
"do_lu_ma_mé_xo_ve_sá".split("_");
"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_");
"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_");
"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_");
"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_");
"א_ב_ג_ד_ה_ו_ש".split("_");
"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_");
"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_");
"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_");
"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_");
"र_सो_मं_बु_गु_शु_श".split("_");
"vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_");
"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_");
"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_");
"vas_hét_kedd_sze_csüt_pén_szo".split("_");
"v_h_k_sze_cs_p_szo".split("_");
"Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac".split("_");
"Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro".split("_");
"Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota".split("_");
"Ned_Pon_Uto_Sri_Čet_Pet_Sub".split("_");
"Ne_Po_Ut_Sr_Če_Pe_Su".split("_");
"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_");
"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_");
"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_");
"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_");
"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_");
"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_");
"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_");
"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_");
"dom_lun_mar_mer_gio_ven_sab".split("_");
"do_lu_ma_me_gi_ve_sa".split("_");
"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_");
"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_");
"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_");
"日_月_火_水_木_金_土".split("_");
"日_月_火_水_木_金_土".split("_");
"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_");
"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_");
"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_");
"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_");
"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_");
"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_");
"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_");
"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_");
"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_");
"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_");
"жек_дүй_сей_сәр_бей_жұм_сен".split("_");
"жк_дй_сй_ср_бй_жм_сн".split("_");
"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_");
"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_");
"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_");
"일_월_화_수_목_금_토".split("_");
"일_월_화_수_목_금_토".split("_");
"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_");
"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_");
"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_");
"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_");
"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_");
"S_P_A_T_K_Pn_Š".split("_");
"Janvāris_Februāris_Marts_Aprīlis_Maijs_Jūnijs_Jūlijs_Augusts_Septembris_Oktobris_Novembris_Decembris".split("_");
"Jan_Feb_Mar_Apr_Mai_Jūn_Jūl_Aug_Sep_Okt_Nov_Dec".split("_");
"Svētdiena_Pirmdiena_Otrdiena_Trešdiena_Ceturtdiena_Piektdiena_Sestdiena".split("_");
"Svētd_Pirmd_Otrd_Trešd_Ceturtd_Piektd_Sestd".split("_");
"Sv_Pi_Ot_Tr_Ce_Pk_Se".split("_");
"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_");
"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_");
"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_");
"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_");
"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_");
"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_");
"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_");
"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_");
"sø._ma._ti._on._to._fr._lø.".split("_");
"sø_ma_ti_on_to_fr_lø".split("_");
"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_");
"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_");
"zo._ma._di._wo._do._vr._za.".split("_");
"zo_ma_di_wo_do_vr_za".split("_");
"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_");
"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_");
"zo._ma._di._wo._do._vr._za.".split("_");
"zo_ma_di_wo_do_vr_za".split("_");
"styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_");
"stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_");
"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_");
"ndz_pon_wt_śr_czw_pt_sob".split("_");
"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_");
"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_");
"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_");
"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_");
"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_");
"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_");
"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_");
"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_");
"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_");
"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_");
"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_");
"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_");
"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_");
"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_");
"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_");
"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_");
"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_");
"вс_пн_вт_ср_чт_пт_сб".split("_");
"вс_пн_вт_ср_чт_пт_сб".split("_");
"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_");
"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_");
"ne_po_ut_st_št_pi_so".split("_");
"ne_po_ut_st_št_pi_so".split("_");
"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_");
"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_");
"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_");
"ned._pon._tor._sre._čet._pet._sob.".split("_");
"ne_po_to_sr_če_pe_so".split("_");
"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_");
"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_");
"E Dielë_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_");
"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_");
"Di_He_Ma_Me_En_Pr_Sh".split("_");
"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_");
"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_");
"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_");
"sön_mån_tis_ons_tor_fre_lör".split("_");
"sö_må_ti_on_to_fr_lö".split("_");
"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_");
"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_");
"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_");
"อา._จ._อ._พ._พฤ._ศ._ส.".split("_");
"อา._จ._อ._พ._พฤ._ศ._ส.".split("_");
const Hu = {
  abbr: "th-be",
  months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
  monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
  monthsParseExact: true,
  weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
  weekdaysShort: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
  weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY เวลา H:mm",
    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
  },
  meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
  isPM: J => J === "หลังเที่ยง",
  meridiem: (J, Ce, tt) => J < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง",
  calendar: {
    sameDay: "[วันนี้ เวลา] LT",
    nextDay: "[พรุ่งนี้ เวลา] LT",
    nextWeek: "dddd[หน้า เวลา] LT",
    lastDay: "[เมื่อวานนี้ เวลา] LT",
    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "อีก %s",
    past: "%sที่แล้ว",
    s: "ไม่กี่วินาที",
    ss: "%d วินาที",
    m: "1 นาที",
    mm: "%d นาที",
    h: "1 ชั่วโมง",
    hh: "%d ชั่วโมง",
    d: "1 วัน",
    dd: "%d วัน",
    M: "1 เดือน",
    MM: "%d เดือน",
    y: "1 ปี",
    yy: "%d ปี"
  },
  preparse(J, Ce) {
    const tt = Hu.longDateFormat[Ce] ? Hu.longDateFormat[Ce] : Ce;
    if (tt.indexOf("YYYY", tt.length - 4) !== -1) {
      return J.substr(0, J.length - 4) + (parseInt(J.substr(J.length - 4), 10) - 543);
    } else {
      return J;
    }
  },
  getFullYear: (J, Ce = false) => 543 + (Ce ? J.getUTCFullYear() : J.getFullYear())
};
//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Agon Cecelia : https://github.com/agoncecelia
function Mt(J) {
  return function (Ce) {
    return J + "о" + (Oe(Ce) === 11 ? "б" : "") + "] LT";
  };
}
"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_");
"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_");
"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_");
"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_");
"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_");
"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_");
"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_");
"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_");
"нд_пн_вт_ср_чт_пт_сб".split("_");
"нд_пн_вт_ср_чт_пт_сб".split("_");
Mt("[Сьогодні ");
Mt("[Завтра ");
Mt("[Вчора ");
Mt("[У] dddd [");
"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_");
"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_");
"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_");
"CN_T2_T3_T4_T5_T6_T7".split("_");
"CN_T2_T3_T4_T5_T6_T7".split("_");
"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_");
"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_");
"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_");
"周日_周一_周二_周三_周四_周五_周六".split("_");
"日_一_二_三_四_五_六".split("_");