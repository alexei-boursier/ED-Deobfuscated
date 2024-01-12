import * as i from "94650";
import * as t from "39300";
import * as k from "95698";
import * as M from "82722";
import * as v from "71884";
import * as C from "71441";
import * as w from "65987";
import * as S from "56776";
import * as L from "37340";
import * as I from "50727";
import * as E from "61135";
import * as x from "77579";
import * as U from "13620";
import * as B from "36895";
import * as F from "32320";
import * as Z from "82381";
import * as X from "24006";
function le(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "button", 2);
    i.NdJ("click", function () {
      const wn = i.CHM(_e).$implicit;
      const tr = i.oxw();
      return i.KtG(tr.selectFromRanges(wn));
    });
    i._uU(1);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw();
    i.ekj("selected", _e.value === xt.selectedRange);
    i.xp6(1);
    i.hij(" ", _e.label, " ");
  }
}
function fe(Xe, $t) {
  if (Xe & 1) {
    i._UZ(0, "bs-current-date", 4);
  }
}
function q(Xe, $t) {
  if (Xe & 1) {
    i._UZ(0, "bs-timepicker");
  }
}
const j = [[["bs-datepicker-navigation-view"]], "*"];
const G = ["bs-datepicker-navigation-view", "*"];
const se = ["bsDatepickerDayDecorator", ""];
function W(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.ynx(0);
    i._uU(1, " ​ ");
    i.TgZ(2, "button", 2);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw();
      return i.KtG(gn.view("month"));
    });
    i.TgZ(3, "span");
    i._uU(4);
    i.qZA()();
    i.BQk();
  }
  if (Xe & 2) {
    const _e = i.oxw();
    i.xp6(4);
    i.Oqu(_e.calendar.monthTitle);
  }
}
function Pe(Xe, $t) {
  if (Xe & 1) {
    i._UZ(0, "th");
  }
}
function Le(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "th", 5);
    i._uU(1);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.index;
    const xt = i.oxw();
    i.xp6(1);
    i.hij("", xt.calendar.weekdays[_e], " ");
  }
}
function he(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "span", 11);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(2).$implicit;
      const wn = i.oxw();
      return i.KtG(wn.selectWeek(gn));
    });
    i._uU(1);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2).index;
    const xt = i.oxw();
    i.xp6(1);
    i.Oqu(xt.calendar.weekNumbers[_e]);
  }
}
function pe(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "span", 12);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(2).$implicit;
      const wn = i.oxw();
      return i.KtG(wn.selectWeek(gn));
    })("mouseenter", function () {
      i.CHM(_e);
      const gn = i.oxw(2).$implicit;
      const wn = i.oxw();
      return i.KtG(wn.weekHoverHandler(gn, true));
    })("mouseleave", function () {
      i.CHM(_e);
      const gn = i.oxw(2).$implicit;
      const wn = i.oxw();
      return i.KtG(wn.weekHoverHandler(gn, false));
    });
    i._uU(1);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2).index;
    const xt = i.oxw();
    i.xp6(1);
    i.Oqu(xt.calendar.weekNumbers[_e]);
  }
}
function re(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "td", 8);
    i.YNc(1, he, 2, 1, "span", 9);
    i.YNc(2, pe, 2, 1, "span", 10);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.ekj("active-week", _e.isWeekHovered);
    i.xp6(1);
    i.Q6J("ngIf", _e.isiOS);
    i.xp6(1);
    i.Q6J("ngIf", !_e.isiOS);
  }
}
function Re(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "span", 17);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw().$implicit;
      const wn = i.oxw(2);
      return i.KtG(wn.selectDay(gn));
    })("mouseenter", function () {
      i.CHM(_e);
      const gn = i.oxw().$implicit;
      const wn = i.oxw(2);
      return i.KtG(wn.hoverDay(gn, true));
    })("mouseleave", function () {
      i.CHM(_e);
      const gn = i.oxw().$implicit;
      const wn = i.oxw(2);
      return i.KtG(wn.hoverDay(gn, false));
    });
    i._uU(1);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw().$implicit;
    i.s9C("tooltip", _e.tooltipText);
    i.Q6J("day", _e);
    i.xp6(1);
    i.hij("", _e.label, " 3");
  }
}
function Ge(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "span", 18);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw().$implicit;
      const wn = i.oxw(2);
      return i.KtG(wn.selectDay(gn));
    })("mouseenter", function () {
      i.CHM(_e);
      const gn = i.oxw().$implicit;
      const wn = i.oxw(2);
      return i.KtG(wn.hoverDay(gn, true));
    })("mouseleave", function () {
      i.CHM(_e);
      const gn = i.oxw().$implicit;
      const wn = i.oxw(2);
      return i.KtG(wn.hoverDay(gn, false));
    });
    i._uU(1);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw().$implicit;
    i.Q6J("day", _e);
    i.xp6(1);
    i.hij("", _e.label, " 2");
  }
}
function Ue(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "span", 19);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw().$implicit;
      const wn = i.oxw(2);
      return i.KtG(wn.selectDay(gn));
    });
    i._uU(1);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw().$implicit;
    i.Q6J("day", _e);
    i.xp6(1);
    i.hij("", _e.label, " 1");
  }
}
function ot(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "td", 13);
    i.YNc(1, Re, 2, 3, "span", 14);
    i.YNc(2, Ge, 2, 2, "span", 15);
    i.YNc(3, Ue, 2, 2, "span", 16);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngIf", !_e.isiOS && _e.isShowTooltip);
    i.xp6(1);
    i.Q6J("ngIf", !_e.isiOS && !_e.isShowTooltip);
    i.xp6(1);
    i.Q6J("ngIf", _e.isiOS);
  }
}
function st(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "tr");
    i.YNc(1, re, 3, 4, "td", 6);
    i.YNc(2, ot, 4, 3, "td", 7);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw();
    i.xp6(1);
    i.Q6J("ngIf", xt.options && xt.options.showWeekNumbers);
    i.xp6(1);
    i.Q6J("ngForOf", _e.days);
  }
}
function rt(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "td", 4);
    i.NdJ("click", function () {
      const wn = i.CHM(_e).$implicit;
      const tr = i.oxw(2);
      return i.KtG(tr.viewMonth(wn));
    })("mouseenter", function () {
      const wn = i.CHM(_e).$implicit;
      const tr = i.oxw(2);
      return i.KtG(tr.hoverMonth(wn, true));
    })("mouseleave", function () {
      const wn = i.CHM(_e).$implicit;
      const tr = i.oxw(2);
      return i.KtG(tr.hoverMonth(wn, false));
    });
    i.TgZ(1, "span");
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    i.ekj("disabled", _e.isDisabled)("is-highlighted", _e.isHovered);
    i.xp6(1);
    i.ekj("selected", _e.isSelected);
    i.xp6(1);
    i.Oqu(_e.label);
  }
}
function Oe(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "tr");
    i.YNc(1, rt, 3, 7, "td", 3);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    i.xp6(1);
    i.Q6J("ngForOf", _e);
  }
}
function Ee(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "td", 4);
    i.NdJ("click", function () {
      const wn = i.CHM(_e).$implicit;
      const tr = i.oxw(2);
      return i.KtG(tr.viewYear(wn));
    })("mouseenter", function () {
      const wn = i.CHM(_e).$implicit;
      const tr = i.oxw(2);
      return i.KtG(tr.hoverYear(wn, true));
    })("mouseleave", function () {
      const wn = i.CHM(_e).$implicit;
      const tr = i.oxw(2);
      return i.KtG(tr.hoverYear(wn, false));
    });
    i.TgZ(1, "span");
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    i.ekj("disabled", _e.isDisabled)("is-highlighted", _e.isHovered);
    i.xp6(1);
    i.ekj("selected", _e.isSelected);
    i.xp6(1);
    i.Oqu(_e.label);
  }
}
function ke(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "tr");
    i.YNc(1, Ee, 3, 7, "td", 3);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    i.xp6(1);
    i.Q6J("ngForOf", _e);
  }
}
const Be = ["startTP"];
function De(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-days-calendar-view", 11);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.dayHoverHandler(gn));
    })("onHoverWeek", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.weekHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.daySelectHandler(gn));
    });
    i.ALo(1, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e)("options", i.lcZ(1, 4, xt.options$));
  }
}
function Qe(Xe, $t) {
  if (Xe & 1) {
    i._UZ(0, "timepicker", null, 15);
  }
}
function It(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 12);
    i._UZ(1, "timepicker", null, 13);
    i.YNc(3, Qe, 2, 0, "timepicker", 14);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.xp6(3);
    i.Q6J("ngIf", _e.isRangePicker);
  }
}
function Yt(Xe, $t) {
  if (Xe & 1) {
    i.ynx(0);
    i.TgZ(1, "div", 8);
    i.YNc(2, De, 2, 6, "bs-days-calendar-view", 9);
    i.ALo(3, "async");
    i.qZA();
    i.YNc(4, It, 4, 1, "div", 10);
    i.BQk();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(2);
    i.Q6J("ngForOf", i.lcZ(3, 2, _e.daysCalendar$));
    i.xp6(2);
    i.Q6J("ngIf", _e.withTimepicker);
  }
}
function Dn(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-month-calendar-view", 17);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.monthHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.monthSelectHandler(gn));
    });
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e);
  }
}
function Et(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 8);
    i.YNc(1, Dn, 1, 3, "bs-month-calendar-view", 16);
    i.ALo(2, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngForOf", i.lcZ(2, 1, _e.monthsCalendar));
  }
}
function lt(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-years-calendar-view", 17);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.yearHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.yearSelectHandler(gn));
    });
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e);
  }
}
function et(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 8);
    i.YNc(1, lt, 1, 3, "bs-years-calendar-view", 16);
    i.ALo(2, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngForOf", i.lcZ(2, 1, _e.yearsCalendar));
  }
}
function St(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 18)(1, "button", 19);
    i._uU(2, "Apply");
    i.qZA();
    i.TgZ(3, "button", 20);
    i._uU(4, "Cancel");
    i.qZA()();
  }
}
function ve(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 23)(1, "button", 24);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(3);
      return i.KtG(gn.setToday());
    });
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.ekj("today-left", _e.todayPos === "left")("today-right", _e.todayPos === "right")("today-center", _e.todayPos === "center");
    i.xp6(2);
    i.Oqu(_e.todayBtnLbl);
  }
}
function Lt(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 25)(1, "button", 24);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(3);
      return i.KtG(gn.clearDate());
    });
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.ekj("clear-left", _e.clearPos === "left")("clear-right", _e.clearPos === "right")("clear-center", _e.clearPos === "center");
    i.xp6(2);
    i.Oqu(_e.clearBtnLbl);
  }
}
function ft(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 18);
    i.YNc(1, ve, 3, 7, "div", 21);
    i.YNc(2, Lt, 3, 7, "div", 22);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngIf", _e.showTodayBtn);
    i.xp6(1);
    i.Q6J("ngIf", _e.showClearBtn);
  }
}
function qe(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 26)(1, "bs-custom-date-view", 27);
    i.NdJ("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(2);
      return i.KtG(wn.setRangeOnCalendar(gn));
    });
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("selectedRange", _e.chosenRange)("ranges", _e.customRanges)("customRangeLabel", _e.customRangeBtnLbl);
  }
}
function Me(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 1)(1, "div", 2);
    i.NdJ("@datepickerAnimation.done", function () {
      i.CHM(_e);
      const gn = i.oxw();
      return i.KtG(gn.positionServiceEnable());
    });
    i.TgZ(2, "div", 3);
    i.ALo(3, "async");
    i.YNc(4, Yt, 5, 4, "ng-container", 4);
    i.YNc(5, Et, 3, 3, "div", 5);
    i.YNc(6, et, 3, 3, "div", 5);
    i.qZA();
    i.YNc(7, St, 5, 0, "div", 6);
    i.YNc(8, ft, 3, 2, "div", 6);
    i.qZA();
    i.YNc(9, qe, 2, 3, "div", 7);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw();
    i.Q6J("ngClass", _e.containerClass);
    i.xp6(1);
    i.Q6J("@datepickerAnimation", _e.animationState);
    i.xp6(1);
    i.Q6J("ngSwitch", i.lcZ(3, 9, _e.viewMode));
    i.xp6(2);
    i.Q6J("ngSwitchCase", "day");
    i.xp6(1);
    i.Q6J("ngSwitchCase", "month");
    i.xp6(1);
    i.Q6J("ngSwitchCase", "year");
    i.xp6(1);
    i.Q6J("ngIf", false);
    i.xp6(1);
    i.Q6J("ngIf", _e.showTodayBtn || _e.showClearBtn);
    i.xp6(1);
    i.Q6J("ngIf", _e.customRanges && _e.customRanges.length > 0);
  }
}
function ne(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-days-calendar-view", 11);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.dayHoverHandler(gn));
    })("onHoverWeek", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.weekHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.daySelectHandler(gn));
    });
    i.ALo(1, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e)("options", i.lcZ(1, 4, xt.options$));
  }
}
function me(Xe, $t) {
  if (Xe & 1) {
    i._UZ(0, "timepicker", null, 15);
  }
}
function it(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 12);
    i._UZ(1, "timepicker", null, 13);
    i.YNc(3, me, 2, 0, "timepicker", 14);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.xp6(3);
    i.Q6J("ngIf", _e.isRangePicker);
  }
}
function bt(Xe, $t) {
  if (Xe & 1) {
    i.ynx(0);
    i.TgZ(1, "div", 8);
    i.YNc(2, ne, 2, 6, "bs-days-calendar-view", 9);
    i.ALo(3, "async");
    i.qZA();
    i.YNc(4, it, 4, 1, "div", 10);
    i.BQk();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(2);
    i.Q6J("ngForOf", i.lcZ(3, 2, _e.daysCalendar$));
    i.xp6(2);
    i.Q6J("ngIf", _e.withTimepicker);
  }
}
function Ut(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-month-calendar-view", 17);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.monthHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.monthSelectHandler(gn));
    });
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e);
  }
}
function Ze(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 8);
    i.YNc(1, Ut, 1, 3, "bs-month-calendar-view", 16);
    i.ALo(2, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngForOf", i.lcZ(2, 1, _e.monthsCalendar));
  }
}
function pt(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-years-calendar-view", 17);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.yearHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.yearSelectHandler(gn));
    });
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e);
  }
}
function yt(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 8);
    i.YNc(1, pt, 1, 3, "bs-years-calendar-view", 16);
    i.ALo(2, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngForOf", i.lcZ(2, 1, _e.yearsCalendar));
  }
}
function Wt(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 18)(1, "button", 19);
    i._uU(2, "Apply");
    i.qZA();
    i.TgZ(3, "button", 20);
    i._uU(4, "Cancel");
    i.qZA()();
  }
}
function hn(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 23)(1, "button", 24);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(3);
      return i.KtG(gn.setToday());
    });
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.ekj("today-left", _e.todayPos === "left")("today-right", _e.todayPos === "right")("today-center", _e.todayPos === "center");
    i.xp6(2);
    i.Oqu(_e.todayBtnLbl);
  }
}
function Kt(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 25)(1, "button", 24);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(3);
      return i.KtG(gn.clearDate());
    });
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.ekj("clear-left", _e.clearPos === "left")("clear-right", _e.clearPos === "right")("clear-center", _e.clearPos === "center");
    i.xp6(2);
    i.Oqu(_e.clearBtnLbl);
  }
}
function on(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 18);
    i.YNc(1, hn, 3, 7, "div", 21);
    i.YNc(2, Kt, 3, 7, "div", 22);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngIf", _e.showTodayBtn);
    i.xp6(1);
    i.Q6J("ngIf", _e.showClearBtn);
  }
}
function Rn(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 26)(1, "bs-custom-date-view", 27);
    i.NdJ("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(2);
      return i.KtG(wn.setRangeOnCalendar(gn));
    });
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("selectedRange", _e.chosenRange)("ranges", _e.customRanges)("customRangeLabel", _e.customRangeBtnLbl);
  }
}
function In(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 1)(1, "div", 2);
    i.NdJ("@datepickerAnimation.done", function () {
      i.CHM(_e);
      const gn = i.oxw();
      return i.KtG(gn.positionServiceEnable());
    });
    i.TgZ(2, "div", 3);
    i.ALo(3, "async");
    i.YNc(4, bt, 5, 4, "ng-container", 4);
    i.YNc(5, Ze, 3, 3, "div", 5);
    i.YNc(6, yt, 3, 3, "div", 5);
    i.qZA();
    i.YNc(7, Wt, 5, 0, "div", 6);
    i.YNc(8, on, 3, 2, "div", 6);
    i.qZA();
    i.YNc(9, Rn, 2, 3, "div", 7);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw();
    i.Q6J("ngClass", _e.containerClass);
    i.xp6(1);
    i.Q6J("@datepickerAnimation", _e.animationState);
    i.xp6(1);
    i.Q6J("ngSwitch", i.lcZ(3, 9, _e.viewMode));
    i.xp6(2);
    i.Q6J("ngSwitchCase", "day");
    i.xp6(1);
    i.Q6J("ngSwitchCase", "month");
    i.xp6(1);
    i.Q6J("ngSwitchCase", "year");
    i.xp6(1);
    i.Q6J("ngIf", false);
    i.xp6(1);
    i.Q6J("ngIf", _e.showTodayBtn || _e.showClearBtn);
    i.xp6(1);
    i.Q6J("ngIf", _e.customRanges && _e.customRanges.length > 0);
  }
}
const di = ["endTP"];
function Si(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-days-calendar-view", 11);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.dayHoverHandler(gn));
    })("onHoverWeek", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.weekHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.daySelectHandler(gn));
    });
    i.ALo(1, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e)("options", i.lcZ(1, 4, xt.options$));
  }
}
function Zi(Xe, $t) {
  if (Xe & 1) {
    i._UZ(0, "timepicker", null, 15);
  }
}
function $i(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 12);
    i._UZ(1, "timepicker", null, 13);
    i.YNc(3, Zi, 2, 0, "timepicker", 14);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.xp6(3);
    i.Q6J("ngIf", _e.isRangePicker);
  }
}
function Qi(Xe, $t) {
  if (Xe & 1) {
    i.ynx(0);
    i.TgZ(1, "div", 8);
    i.YNc(2, Si, 2, 6, "bs-days-calendar-view", 9);
    i.ALo(3, "async");
    i.qZA();
    i.YNc(4, $i, 4, 1, "div", 10);
    i.BQk();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(2);
    i.Q6J("ngForOf", i.lcZ(3, 2, _e.daysCalendar$));
    i.xp6(2);
    i.Q6J("ngIf", _e.withTimepicker);
  }
}
function br(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-month-calendar-view", 17);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.monthHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.monthSelectHandler(gn));
    });
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e);
  }
}
function Ar(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 8);
    i.YNc(1, br, 1, 3, "bs-month-calendar-view", 16);
    i.ALo(2, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngForOf", i.lcZ(2, 1, _e.monthsCalendar));
  }
}
function vr(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "bs-years-calendar-view", 17);
    i.NdJ("onNavigate", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.navigateTo(gn));
    })("onViewMode", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.setViewMode(gn));
    })("onHover", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.yearHoverHandler(gn));
    })("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(3);
      return i.KtG(wn.yearSelectHandler(gn));
    });
    i.qZA();
  }
  if (Xe & 2) {
    const _e = $t.$implicit;
    const xt = i.oxw(3);
    i.ekj("bs-datepicker-multiple", xt.multipleCalendars);
    i.Q6J("calendar", _e);
  }
}
function Ur(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 8);
    i.YNc(1, vr, 1, 3, "bs-years-calendar-view", 16);
    i.ALo(2, "async");
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngForOf", i.lcZ(2, 1, _e.yearsCalendar));
  }
}
function Br(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 18)(1, "button", 19);
    i._uU(2, "Apply");
    i.qZA();
    i.TgZ(3, "button", 20);
    i._uU(4, "Cancel");
    i.qZA()();
  }
}
function rs(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 23)(1, "button", 24);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(3);
      return i.KtG(gn.setToday());
    });
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.ekj("today-left", _e.todayPos === "left")("today-right", _e.todayPos === "right")("today-center", _e.todayPos === "center");
    i.xp6(2);
    i.Oqu(_e.todayBtnLbl);
  }
}
function vs(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 25)(1, "button", 24);
    i.NdJ("click", function () {
      i.CHM(_e);
      const gn = i.oxw(3);
      return i.KtG(gn.clearDate());
    });
    i._uU(2);
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(3);
    i.ekj("clear-left", _e.clearPos === "left")("clear-right", _e.clearPos === "right")("clear-center", _e.clearPos === "center");
    i.xp6(2);
    i.Oqu(_e.clearBtnLbl);
  }
}
function wo(Xe, $t) {
  if (Xe & 1) {
    i.TgZ(0, "div", 18);
    i.YNc(1, rs, 3, 7, "div", 21);
    i.YNc(2, vs, 3, 7, "div", 22);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("ngIf", _e.showTodayBtn);
    i.xp6(1);
    i.Q6J("ngIf", _e.showClearBtn);
  }
}
function so(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 26)(1, "bs-custom-date-view", 27);
    i.NdJ("onSelect", function (gn) {
      i.CHM(_e);
      const wn = i.oxw(2);
      return i.KtG(wn.setRangeOnCalendar(gn));
    });
    i.qZA()();
  }
  if (Xe & 2) {
    const _e = i.oxw(2);
    i.xp6(1);
    i.Q6J("selectedRange", _e.chosenRange)("ranges", _e.customRanges)("customRangeLabel", _e.customRangeBtnLbl);
  }
}
function sa(Xe, $t) {
  if (Xe & 1) {
    const _e = i.EpF();
    i.TgZ(0, "div", 1)(1, "div", 2);
    i.NdJ("@datepickerAnimation.done", function () {
      i.CHM(_e);
      const gn = i.oxw();
      return i.KtG(gn.positionServiceEnable());
    });
    i.TgZ(2, "div", 3);
    i.ALo(3, "async");
    i.YNc(4, Qi, 5, 4, "ng-container", 4);
    i.YNc(5, Ar, 3, 3, "div", 5);
    i.YNc(6, Ur, 3, 3, "div", 5);
    i.qZA();
    i.YNc(7, Br, 5, 0, "div", 6);
    i.YNc(8, wo, 3, 2, "div", 6);
    i.qZA();
    i.YNc(9, so, 2, 3, "div", 7);
    i.qZA();
  }
  if (Xe & 2) {
    const _e = i.oxw();
    i.Q6J("ngClass", _e.containerClass);
    i.xp6(1);
    i.Q6J("@datepickerAnimation", _e.animationState);
    i.xp6(1);
    i.Q6J("ngSwitch", i.lcZ(3, 9, _e.viewMode));
    i.xp6(2);
    i.Q6J("ngSwitchCase", "day");
    i.xp6(1);
    i.Q6J("ngSwitchCase", "month");
    i.xp6(1);
    i.Q6J("ngSwitchCase", "year");
    i.xp6(1);
    i.Q6J("ngIf", false);
    i.xp6(1);
    i.Q6J("ngIf", _e.showTodayBtn || _e.showClearBtn);
    i.xp6(1);
    i.Q6J("ngIf", _e.customRanges && _e.customRanges.length > 0);
  }
}
let Or = (() => {
  class Xe {
    constructor() {
      this.adaptivePosition = false;
      this.useUtc = false;
      this.isAnimated = false;
      this.startView = "day";
      this.returnFocusToInput = false;
      this.containerClass = "theme-green";
      this.displayMonths = 1;
      this.showWeekNumbers = true;
      this.dateInputFormat = "L";
      this.rangeSeparator = " - ";
      this.rangeInputFormat = "L";
      this.monthTitle = "MMMM";
      this.yearTitle = "YYYY";
      this.dayLabel = "D";
      this.monthLabel = "MMMM";
      this.yearLabel = "YYYY";
      this.weekNumbers = "w";
      this.showTodayButton = false;
      this.showClearButton = false;
      this.todayPosition = "center";
      this.clearPosition = "right";
      this.todayButtonLabel = "Today";
      this.clearButtonLabel = "Clear";
      this.customRangeButtonLabel = "Custom Range";
      this.withTimepicker = false;
      this.allowedPositions = ["top", "bottom"];
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵprov = i.Yz7({
    token: Xe,
    factory: Xe.ɵfac,
    providedIn: "root"
  });
  return Xe;
})();
const is = "220ms cubic-bezier(0, 0, 0.2, 1)";
const _o = (0, L.X$)("datepickerAnimation", [(0, L.SB)("animated-down", (0, L.oB)({
  height: "*",
  overflow: "hidden"
})), (0, L.eR)("* => animated-down", [(0, L.oB)({
  height: 0,
  overflow: "hidden"
}), (0, L.jt)(is)]), (0, L.SB)("animated-up", (0, L.oB)({
  height: "*",
  overflow: "hidden"
})), (0, L.eR)("* => animated-up", [(0, L.oB)({
  height: "*",
  overflow: "hidden"
}), (0, L.jt)(is)]), (0, L.eR)("* => unanimated", (0, L.jt)("0s"))]);
class kr {
  constructor() {
    this.containerClass = "";
    this.customRanges = [];
    this.chosenRange = [];
    this._daysCalendarSub = new I.w0();
    this.selectedTimeSub = new I.w0();
  }
  set minDate($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setMinDate($t);
    }
  }
  set maxDate($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setMaxDate($t);
    }
  }
  set daysDisabled($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setDaysDisabled($t);
    }
  }
  set datesDisabled($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setDatesDisabled($t);
    }
  }
  set datesEnabled($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setDatesEnabled($t);
    }
  }
  set isDisabled($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setDisabled($t);
    }
  }
  set dateCustomClasses($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setDateCustomClasses($t);
    }
  }
  set dateTooltipTexts($t) {
    var _e;
    if ((_e = this._effects) !== null && _e !== undefined) {
      _e.setDateTooltipTexts($t);
    }
  }
  set daysCalendar$($t) {
    this._daysCalendar$ = $t;
    this._daysCalendarSub.unsubscribe();
    this._daysCalendarSub.add(this._daysCalendar$.subscribe(_e => {
      this.multipleCalendars = !!_e && _e.length > 1;
    }));
  }
  get daysCalendar$() {
    return this._daysCalendar$;
  }
  setViewMode($t) {}
  navigateTo($t) {}
  dayHoverHandler($t) {}
  weekHoverHandler($t) {}
  monthHoverHandler($t) {}
  yearHoverHandler($t) {}
  timeSelectHandler($t, _e) {}
  daySelectHandler($t) {}
  monthSelectHandler($t) {}
  yearSelectHandler($t) {}
  setRangeOnCalendar($t) {}
  setToday() {}
  clearDate() {}
  _stopPropagation($t) {
    $t.stopPropagation();
  }
}
let Zs = (() => {
  class Xe {
    calculate() {
      return {
        type: Xe.CALCULATE
      };
    }
    format() {
      return {
        type: Xe.FORMAT
      };
    }
    flag() {
      return {
        type: Xe.FLAG
      };
    }
    select(_e) {
      return {
        type: Xe.SELECT,
        payload: _e
      };
    }
    selectTime(_e, xt) {
      return {
        type: Xe.SELECT_TIME,
        payload: {
          date: _e,
          index: xt
        }
      };
    }
    changeViewMode(_e) {
      return {
        type: Xe.CHANGE_VIEWMODE,
        payload: _e
      };
    }
    navigateTo(_e) {
      return {
        type: Xe.NAVIGATE_TO,
        payload: _e
      };
    }
    navigateStep(_e) {
      return {
        type: Xe.NAVIGATE_OFFSET,
        payload: _e
      };
    }
    setOptions(_e) {
      return {
        type: Xe.SET_OPTIONS,
        payload: _e
      };
    }
    selectRange(_e) {
      return {
        type: Xe.SELECT_RANGE,
        payload: _e
      };
    }
    hoverDay(_e) {
      return {
        type: Xe.HOVER,
        payload: _e.isHovered ? _e.cell.date : null
      };
    }
    minDate(_e) {
      return {
        type: Xe.SET_MIN_DATE,
        payload: _e
      };
    }
    maxDate(_e) {
      return {
        type: Xe.SET_MAX_DATE,
        payload: _e
      };
    }
    daysDisabled(_e) {
      return {
        type: Xe.SET_DAYSDISABLED,
        payload: _e
      };
    }
    datesDisabled(_e) {
      return {
        type: Xe.SET_DATESDISABLED,
        payload: _e
      };
    }
    datesEnabled(_e) {
      return {
        type: Xe.SET_DATESENABLED,
        payload: _e
      };
    }
    isDisabled(_e) {
      return {
        type: Xe.SET_IS_DISABLED,
        payload: _e
      };
    }
    setDateCustomClasses(_e) {
      return {
        type: Xe.SET_DATE_CUSTOM_CLASSES,
        payload: _e
      };
    }
    setDateTooltipTexts(_e) {
      return {
        type: Xe.SET_DATE_TOOLTIP_TEXTS,
        payload: _e
      };
    }
    setLocale(_e) {
      return {
        type: Xe.SET_LOCALE,
        payload: _e
      };
    }
  }
  Xe.CALCULATE = "[datepicker] calculate dates matrix";
  Xe.FORMAT = "[datepicker] format datepicker values";
  Xe.FLAG = "[datepicker] set flags";
  Xe.SELECT = "[datepicker] select date";
  Xe.NAVIGATE_OFFSET = "[datepicker] shift view date";
  Xe.NAVIGATE_TO = "[datepicker] change view date";
  Xe.SET_OPTIONS = "[datepicker] update render options";
  Xe.HOVER = "[datepicker] hover date";
  Xe.CHANGE_VIEWMODE = "[datepicker] switch view mode";
  Xe.SET_MIN_DATE = "[datepicker] set min date";
  Xe.SET_MAX_DATE = "[datepicker] set max date";
  Xe.SET_DAYSDISABLED = "[datepicker] set days disabled";
  Xe.SET_DATESDISABLED = "[datepicker] set dates disabled";
  Xe.SET_DATESENABLED = "[datepicker] set dates enabled";
  Xe.SET_IS_DISABLED = "[datepicker] set is disabled";
  Xe.SET_DATE_CUSTOM_CLASSES = "[datepicker] set date custom classes";
  Xe.SET_DATE_TOOLTIP_TEXTS = "[datepicker] set date tooltip texts";
  Xe.SET_LOCALE = "[datepicker] set datepicker locale";
  Xe.SELECT_TIME = "[datepicker] select time";
  Xe.SELECT_RANGE = "[daterangepicker] select dates range";
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵprov = i.Yz7({
    token: Xe,
    factory: Xe.ɵfac,
    providedIn: "platform"
  });
  return Xe;
})();
export let vL = (() => {
  class Xe {
    constructor() {
      this._defaultLocale = "en";
      this._locale = new E.X(this._defaultLocale);
      this._localeChange = this._locale.asObservable();
    }
    get locale() {
      return this._locale;
    }
    get localeChange() {
      return this._localeChange;
    }
    get currentLocale() {
      return this._locale.getValue();
    }
    use(_e) {
      if (_e !== this.currentLocale) {
        this._locale.next(_e);
      }
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵprov = i.Yz7({
    token: Xe,
    factory: Xe.ɵfac,
    providedIn: "platform"
  });
  return Xe;
})();
let fa = (() => {
  class Xe {
    constructor(_e, xt) {
      this._actions = _e;
      this._localeService = xt;
      this._subs = [];
    }
    init(_e) {
      this._store = _e;
      return this;
    }
    setValue(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.select(_e));
      }
    }
    setRangeValue(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.selectRange(_e));
      }
    }
    setMinDate(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.minDate(_e));
      }
      return this;
    }
    setMaxDate(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.maxDate(_e));
      }
      return this;
    }
    setDaysDisabled(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.daysDisabled(_e));
      }
      return this;
    }
    setDatesDisabled(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.datesDisabled(_e));
      }
      return this;
    }
    setDatesEnabled(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.datesEnabled(_e));
      }
      return this;
    }
    setDisabled(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.isDisabled(_e));
      }
      return this;
    }
    setDateCustomClasses(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.setDateCustomClasses(_e));
      }
      return this;
    }
    setDateTooltipTexts(_e) {
      var xt;
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.setDateTooltipTexts(_e));
      }
      return this;
    }
    setOptions(_e) {
      var xt;
      const gn = Object.assign({
        locale: this._localeService.currentLocale
      }, _e);
      if ((xt = this._store) !== null && xt !== undefined) {
        xt.dispatch(this._actions.setOptions(gn));
      }
      return this;
    }
    setBindings(_e) {
      if (this._store) {
        _e.selectedTime = this._store.select(xt => xt.selectedTime).pipe((0, t.h)(xt => !!xt));
        _e.daysCalendar$ = this._store.select(xt => xt.flaggedMonths).pipe((0, t.h)(xt => !!xt));
        _e.monthsCalendar = this._store.select(xt => xt.flaggedMonthsCalendar).pipe((0, t.h)(xt => !!xt));
        _e.yearsCalendar = this._store.select(xt => xt.yearsCalendarFlagged).pipe((0, t.h)(xt => !!xt));
        _e.viewMode = this._store.select(xt => {
          return xt.view?.mode;
        });
        _e.options$ = (0, O.a)([this._store.select(xt => xt.showWeekNumbers), this._store.select(xt => xt.displayMonths)]).pipe((0, b.U)(xt => ({
          showWeekNumbers: xt[0],
          displayMonths: xt[1]
        })));
        return this;
      } else {
        return this;
      }
    }
    setEventHandlers(_e) {
      _e.setViewMode = xt => {
        var gn;
        if ((gn = this._store) !== null && gn !== undefined) {
          gn.dispatch(this._actions.changeViewMode(xt));
        }
      };
      _e.navigateTo = xt => {
        var gn;
        if ((gn = this._store) !== null && gn !== undefined) {
          gn.dispatch(this._actions.navigateStep(xt.step));
        }
      };
      _e.dayHoverHandler = xt => {
        var gn;
        const wn = xt.cell;
        if (!wn.isOtherMonth && !wn.isDisabled) {
          if ((gn = this._store) !== null && gn !== undefined) {
            gn.dispatch(this._actions.hoverDay(xt));
          }
          wn.isHovered = xt.isHovered;
        }
      };
      _e.monthHoverHandler = xt => {
        xt.cell.isHovered = xt.isHovered;
      };
      _e.yearHoverHandler = xt => {
        xt.cell.isHovered = xt.isHovered;
      };
      return this;
    }
    registerDatepickerSideEffects() {
      if (this._store) {
        this._subs.push(this._store.select(_e => _e.view).subscribe(() => {
          var _e;
          if ((_e = this._store) !== null && _e !== undefined) {
            _e.dispatch(this._actions.calculate());
          }
        }));
        this._subs.push(this._store.select(_e => _e.monthsModel).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.format());
          }
        }));
        this._subs.push(this._store.select(_e => _e.formattedMonths).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._store.select(_e => _e.selectedDate).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._store.select(_e => _e.selectedRange).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._store.select(_e => _e.monthsCalendar).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._store.select(_e => _e.yearsCalendarModel).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._store.select(_e => _e.hoveredDate).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._store.select(_e => _e.dateCustomClasses).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._store.select(_e => _e.dateTooltipTexts).pipe((0, t.h)(_e => !!_e)).subscribe(() => {
          var _e;
          if ((_e = this._store) === null || _e === undefined) {
            return undefined;
          } else {
            return _e.dispatch(this._actions.flag());
          }
        }));
        this._subs.push(this._localeService.localeChange.subscribe(_e => {
          var xt;
          if ((xt = this._store) === null || xt === undefined) {
            return undefined;
          } else {
            return xt.dispatch(this._actions.setLocale(_e));
          }
        }));
        return this;
      } else {
        return this;
      }
    }
    destroy() {
      for (const _e of this._subs) {
        _e.unsubscribe();
      }
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.LFG(Zs), i.LFG(vL));
  };
  Xe.ɵprov = i.Yz7({
    token: Xe,
    factory: Xe.ɵfac,
    providedIn: "platform"
  });
  return Xe;
})();
const Zr = {
  date: new Date(),
  mode: "day"
};
const ho = Object.assign(new Or(), {
  locale: "en",
  view: Zr,
  selectedRange: [],
  selectedTime: [],
  monthViewOptions: {
    width: 7,
    height: 6
  }
});
function qi(Xe, $t, _e) {
  const xt = $t && (0, C.RR)((0, C.Dz)(Xe, "month"), $t, "day");
  const gn = _e && (0, C.Ax)((0, C.gl)(Xe, "month"), _e, "day");
  return xt || gn || false;
}
function qo(Xe, $t, _e) {
  const xt = $t && (0, C.RR)((0, C.Dz)(Xe, "year"), $t, "day");
  const gn = _e && (0, C.Ax)((0, C.gl)(Xe, "year"), _e, "day");
  return xt || gn || false;
}
function ea(Xe, $t, _e) {
  return !!$t && !!(0, C.kJ)($t) && !!$t.length && (_e && _e === "year" && !$t[0].getDate() ? $t.some(xt => (0, C.ZG)(Xe, xt, "year")) : $t.some(xt => (0, C.ZG)(Xe, xt, "date")));
}
function Oa(Xe, $t, _e) {
  return !!$t && !!(0, C.kJ)($t) && !!$t.length && !$t.some(xt => (0, C.ZG)(Xe, xt, _e || "date"));
}
function qa(Xe, $t = 0) {
  const _e = Xe && Xe.yearsCalendarModel && Xe.yearsCalendarModel[$t];
  return _e?.years[0] && _e.years[0][0] && _e.years[0][0].date;
}
function ja(Xe, $t) {
  if (!!Xe && !!$t && (!!Xe.length || !!Xe[0].value)) {
    Xe.forEach(_e => {
      if (!!_e && !!_e.value && !(_e.value instanceof Date) && !!(_e.value instanceof Array) && !!_e.value.length) {
        _e.value = ta(_e.value, $t);
      }
      return Xe;
    });
  }
  return Xe;
}
function la(Xe, $t) {
  if (!Xe || !$t || Xe instanceof Array && !Xe.length || Xe instanceof Date) {
    return Xe;
  } else {
    return ta(Xe, $t);
  }
}
function ta(Xe, $t) {
  if (Xe instanceof Array) {
    return Xe.map(xt => xt && ((0, C.Ax)(xt, $t, "date") && (xt = $t), xt));
  } else {
    return Xe;
  }
}
function Fr(Xe) {
  return Xe && Ao(Xe);
}
function Es(Xe) {
  if (Xe != null && Xe.length) {
    Xe.map($t => $t && Ao($t));
  }
  return Xe;
}
function Ao(Xe) {
  const $t = new Date();
  Xe.setMilliseconds($t.getMilliseconds());
  Xe.setSeconds($t.getSeconds());
  Xe.setMinutes($t.getMinutes());
  Xe.setHours($t.getHours());
  return Xe;
}
function Pa(Xe, $t) {
  let _e = Xe.initialDate;
  const xt = new Array(Xe.height);
  for (let gn = 0; gn < Xe.height; gn++) {
    xt[gn] = new Array(Xe.width);
    for (let wn = 0; wn < Xe.width; wn++) {
      xt[gn][wn] = $t(_e);
      _e = (0, C.rg)(_e, Xe.shift);
    }
  }
  return xt;
}
function Po(Xe, $t) {
  const _e = (0, C.nr)(Xe);
  const xt = function ya(Xe, $t) {
    if ((0, C.AZ)(Xe, $t.firstDayOfWeek)) {
      return Xe;
    }
    const xt = function Ko(Xe, $t) {
      const _e = Number($t);
      if (isNaN(_e)) {
        return 0;
      }
      if (_e === 0) {
        return Xe;
      }
      const xt = Xe - _e % 7;
      if (xt < 0) {
        return xt + 7;
      } else {
        return xt;
      }
    }((0, C.wf)(Xe), $t.firstDayOfWeek);
    return (0, C.rg)(Xe, {
      day: -xt
    });
  }(_e, $t);
  return {
    daysMatrix: Pa({
      width: $t.width || 0,
      height: $t.height || 0,
      initialDate: xt,
      shift: {
        day: 1
      }
    }, tr => tr),
    month: _e
  };
}
function qs(Xe, $t, _e) {
  return Xe.map(xt => xt[0] ? (0, C.p6)(xt[0], $t, _e) : "");
}
function Fo(Xe) {
  const $t = (0, C.Kd)(Xe);
  const _e = $t.weekdaysShort();
  const xt = $t.firstDayOfWeek();
  return [..._e.slice(xt), ..._e.slice(0, xt)];
}
function Za(Xe, $t) {
  return !$t || Xe >= $t;
}
const ko = {
  month: 1
};
function So(Xe, $t) {
  return {
    months: Pa({
      width: 3,
      height: 4,
      initialDate: (0, C.gl)(Xe, "year"),
      shift: ko
    }, wn => ({
      date: wn,
      label: (0, C.p6)(wn, $t.monthLabel, $t.locale)
    })),
    monthTitle: "",
    yearTitle: (0, C.p6)(Xe, $t.yearTitle, $t.locale),
    hideRightArrow: false,
    hideLeftArrow: false,
    disableRightArrow: false,
    disableLeftArrow: false
  };
}
const hs = (Math.floor(8) - 1) * -1;
const Rs = {
  year: 1
};
function eo(Xe, $t, _e) {
  const xt = function Vs(Xe, $t) {
    if ($t && Xe.getFullYear() >= $t.getFullYear() && Xe.getFullYear() < $t.getFullYear() + 16) {
      return $t;
    } else {
      return (0, C.rg)(Xe, {
        year: hs
      });
    }
  }(Xe, _e);
  const wn = Pa({
    width: 4,
    height: 4,
    initialDate: xt,
    shift: Rs
  }, Do => ({
    date: Do,
    label: (0, C.p6)(Do, $t.yearLabel, $t.locale)
  }));
  const tr = function Qs(Xe, $t) {
    return `${(0, C.p6)(Xe[0][0].date, $t.yearTitle, $t.locale)} - ${(0, C.p6)(Xe[3][3].date, $t.yearTitle, $t.locale)}`;
  }(wn, $t);
  return {
    years: wn,
    monthTitle: "",
    yearTitle: tr,
    hideLeftArrow: false,
    hideRightArrow: false,
    disableLeftArrow: false,
    disableRightArrow: false
  };
}
function Ra(Xe, $t) {
  if (!!Xe && !!isNaN(Xe.getTime())) {
    Xe.setHours($t.getHours());
    Xe.setMinutes($t.getMinutes());
    Xe.setSeconds($t.getSeconds());
    Xe.setMilliseconds($t.getMilliseconds());
  }
}
function Uo(Xe = ho, $t) {
  switch ($t.type) {
    case Zs.CALCULATE:
      return function _r(Xe) {
        if (!Xe.view) {
          return Xe;
        }
        let $t;
        $t = Xe.displayOneMonthRange && Ki(Xe.view.date, Xe.minDate, Xe.maxDate) ? 1 : Xe.displayMonths || 1;
        let _e = Xe.view.date;
        if (Xe.view.mode === "day" && Xe.monthViewOptions) {
          if (Xe.showPreviousMonth && Xe.selectedRange && Xe.selectedRange.length === 0) {
            _e = (0, C.rg)(_e, {
              month: -1
            });
          }
          Xe.monthViewOptions.firstDayOfWeek = (0, C.Kd)(Xe.locale).firstDayOfWeek();
          let xt = new Array($t);
          for (let gn = 0; gn < $t; gn++) {
            xt[gn] = Po(_e, Xe.monthViewOptions);
            _e = (0, C.rg)(_e, {
              month: 1
            });
          }
          if (Xe.preventChangeToNextMonth && Xe.flaggedMonths && Xe.hoveredDate) {
            const gn = Po(Xe.view.date, Xe.monthViewOptions);
            if (Xe.flaggedMonths.length && Xe.flaggedMonths[1].month.getMonth() === gn.month.getMonth()) {
              xt = Xe.flaggedMonths.map(wn => Xe.monthViewOptions ? Po(wn.month, Xe.monthViewOptions) : null).filter(wn => wn !== null);
            }
          }
          return Object.assign({}, Xe, {
            monthsModel: xt
          });
        }
        if (Xe.view.mode === "month") {
          const xt = new Array($t);
          for (let gn = 0; gn < $t; gn++) {
            xt[gn] = So(_e, an(Xe));
            _e = (0, C.rg)(_e, {
              year: 1
            });
          }
          return Object.assign({}, Xe, {
            monthsCalendar: xt
          });
        }
        if (Xe.view.mode === "year") {
          const xt = new Array($t);
          for (let gn = 0; gn < $t; gn++) {
            xt[gn] = eo(_e, an(Xe), Xe.minMode === "year" ? qa(Xe, gn) : undefined);
            _e = (0, C.rg)(_e, {
              year: 16
            });
          }
          return Object.assign({}, Xe, {
            yearsCalendarModel: xt
          });
        }
        return Xe;
      }(Xe);
    case Zs.FORMAT:
      return function at(Xe) {
        if (!Xe.view) {
          return Xe;
        }
        if (Xe.view.mode === "day" && Xe.monthsModel) {
          const xt = Xe.monthsModel.map((gn, wn) => function dl(Xe, $t, _e) {
            return {
              month: Xe.month,
              monthTitle: (0, C.p6)(Xe.month, $t.monthTitle, $t.locale),
              yearTitle: (0, C.p6)(Xe.month, $t.yearTitle, $t.locale),
              weekNumbers: qs(Xe.daysMatrix, $t.weekNumbers, $t.locale),
              weekdays: Fo($t.locale),
              weeks: Xe.daysMatrix.map((xt, gn) => ({
                days: xt.map((wn, tr) => ({
                  date: wn,
                  label: (0, C.p6)(wn, $t.dayLabel, $t.locale),
                  monthIndex: _e,
                  weekIndex: gn,
                  dayIndex: tr
                }))
              })),
              hideLeftArrow: false,
              hideRightArrow: false,
              disableLeftArrow: false,
              disableRightArrow: false
            };
          }(gn, an(Xe), wn));
          return Object.assign({}, Xe, {
            formattedMonths: xt
          });
        }
        const $t = Xe.displayMonths || 1;
        let _e = Xe.view.date;
        if (Xe.view.mode === "month") {
          const xt = new Array($t);
          for (let gn = 0; gn < $t; gn++) {
            xt[gn] = So(_e, an(Xe));
            _e = (0, C.rg)(_e, {
              year: 1
            });
          }
          return Object.assign({}, Xe, {
            monthsCalendar: xt
          });
        }
        if (Xe.view.mode === "year") {
          const xt = new Array($t);
          for (let gn = 0; gn < $t; gn++) {
            xt[gn] = eo(_e, an(Xe));
            _e = (0, C.rg)(_e, {
              year: 16
            });
          }
          return Object.assign({}, Xe, {
            yearsCalendarModel: xt
          });
        }
        return Xe;
      }(Xe);
    case Zs.FLAG:
      return function Je(Xe) {
        if (!Xe.view) {
          return Xe;
        }
        const $t = Ki(Xe.view.date, Xe.minDate, Xe.maxDate) ? 1 : Xe.displayMonths;
        if (Xe.formattedMonths && Xe.view.mode === "day") {
          const _e = Xe.formattedMonths.map((xt, gn) => function ha(Xe, $t) {
            Xe.weeks.forEach(_e => {
              _e.days.forEach((xt, gn) => {
                const wn = !(0, C.xj)(xt.date, Xe.month);
                const tr = !wn && (0, C.KC)(xt.date, $t.hoveredDate);
                const Do = !wn && $t.selectedRange && (0, C.KC)(xt.date, $t.selectedRange[0]);
                const Ji = !wn && $t.selectedRange && (0, C.KC)(xt.date, $t.selectedRange[1]);
                const hi = !wn && (0, C.KC)(xt.date, $t.selectedDate) || Do || Ji;
                const oa = !wn && $t.selectedRange && function Ca(Xe, $t, _e) {
                  return !!Xe && !!$t && !!$t[0] && ($t[1] ? Xe > $t[0] && Xe <= $t[1] : !!_e && Xe > $t[0] && Xe <= _e);
                }(xt.date, $t.selectedRange, $t.hoveredDate);
                const Ns = $t.isDisabled || (0, C.RR)(xt.date, $t.minDate, "day") || (0, C.Ax)(xt.date, $t.maxDate, "day") || (0, C.DB)(xt.date, $t.daysDisabled) || ea(xt.date, $t.datesDisabled) || Oa(xt.date, $t.datesEnabled);
                const ys = new Date();
                const ht = !wn && (0, C.KC)(xt.date, ys);
                const dt = $t.dateCustomClasses && $t.dateCustomClasses.map(Yi => (0, C.KC)(xt.date, Yi.date) ? Yi.classes : []).reduce((Yi, $r) => Yi.concat($r), []).join(" ") || "";
                const He = $t.dateTooltipTexts && $t.dateTooltipTexts.map(Yi => (0, C.KC)(xt.date, Yi.date) ? Yi.tooltipText : "").reduce((Yi, $r) => {
                  Yi.push($r);
                  return Yi;
                }, []).join(" ") || "";
                const dn = Object.assign({}, xt, {
                  isOtherMonth: wn,
                  isHovered: tr,
                  isSelected: hi,
                  isSelectionStart: Do,
                  isSelectionEnd: Ji,
                  isInRange: oa,
                  isDisabled: Ns,
                  isToday: ht,
                  customClasses: dt,
                  tooltipText: He
                });
                if (xt.isOtherMonth !== dn.isOtherMonth || xt.isHovered !== dn.isHovered || xt.isSelected !== dn.isSelected || xt.isSelectionStart !== dn.isSelectionStart || xt.isSelectionEnd !== dn.isSelectionEnd || xt.isDisabled !== dn.isDisabled || xt.isInRange !== dn.isInRange || xt.customClasses !== dn.customClasses || xt.tooltipText !== dn.tooltipText) {
                  _e.days[gn] = dn;
                }
              });
            });
            Xe.hideLeftArrow = $t.isDisabled || !!$t.monthIndex && $t.monthIndex > 0 && $t.monthIndex !== $t.displayMonths;
            Xe.hideRightArrow = $t.isDisabled || (!!$t.monthIndex || $t.monthIndex === 0) && !!$t.displayMonths && $t.monthIndex < $t.displayMonths && $t.monthIndex + 1 !== $t.displayMonths;
            Xe.disableLeftArrow = qi((0, C.rg)(Xe.month, {
              month: -1
            }), $t.minDate, $t.maxDate);
            Xe.disableRightArrow = qi((0, C.rg)(Xe.month, {
              month: 1
            }), $t.minDate, $t.maxDate);
            return Xe;
          }(xt, {
            isDisabled: Xe.isDisabled,
            minDate: Xe.minDate,
            maxDate: Xe.maxDate,
            daysDisabled: Xe.daysDisabled,
            datesDisabled: Xe.datesDisabled,
            datesEnabled: Xe.datesEnabled,
            hoveredDate: Xe.hoveredDate,
            selectedDate: Xe.selectedDate,
            selectedRange: Xe.selectedRange,
            displayMonths: $t,
            dateCustomClasses: Xe.dateCustomClasses,
            dateTooltipTexts: Xe.dateTooltipTexts,
            monthIndex: gn
          }));
          return Object.assign({}, Xe, {
            flaggedMonths: _e
          });
        }
        if (Xe.view.mode === "month" && Xe.monthsCalendar) {
          const _e = Xe.monthsCalendar.map((xt, gn) => function pa(Xe, $t) {
            Xe.months.forEach((_e, xt) => {
              _e.forEach((gn, wn) => {
                let tr;
                const Do = (0, C.xj)(gn.date, $t.hoveredMonth);
                const Ji = $t.isDisabled || ea(gn.date, $t.datesDisabled) || Oa(gn.date, $t.datesEnabled, "month") || qi(gn.date, $t.minDate, $t.maxDate);
                if (!$t.selectedDate && $t.selectedRange) {
                  tr = (0, C.xj)(gn.date, $t.selectedRange[0]);
                  tr ||= (0, C.xj)(gn.date, $t.selectedRange[1]);
                } else {
                  tr = (0, C.xj)(gn.date, $t.selectedDate);
                }
                const hi = Object.assign(gn, {
                  isHovered: Do,
                  isDisabled: Ji,
                  isSelected: tr
                });
                if (gn.isHovered !== hi.isHovered || gn.isDisabled !== hi.isDisabled || gn.isSelected !== hi.isSelected) {
                  Xe.months[xt][wn] = hi;
                }
              });
            });
            Xe.hideLeftArrow = !!$t.monthIndex && $t.monthIndex > 0 && $t.monthIndex !== $t.displayMonths;
            Xe.hideRightArrow = (!!$t.monthIndex || $t.monthIndex === 0) && (!!$t.displayMonths || $t.displayMonths === 0) && $t.monthIndex < $t.displayMonths && $t.monthIndex + 1 !== $t.displayMonths;
            Xe.disableLeftArrow = qo((0, C.rg)(Xe.months[0][0].date, {
              year: -1
            }), $t.minDate, $t.maxDate);
            Xe.disableRightArrow = qo((0, C.rg)(Xe.months[0][0].date, {
              year: 1
            }), $t.minDate, $t.maxDate);
            return Xe;
          }(xt, {
            isDisabled: Xe.isDisabled,
            minDate: Xe.minDate,
            maxDate: Xe.maxDate,
            hoveredMonth: Xe.hoveredMonth,
            selectedDate: Xe.selectedDate,
            datesDisabled: Xe.datesDisabled,
            datesEnabled: Xe.datesEnabled,
            selectedRange: Xe.selectedRange,
            displayMonths: $t,
            monthIndex: gn
          }));
          return Object.assign({}, Xe, {
            flaggedMonthsCalendar: _e
          });
        }
        if (Xe.view.mode === "year" && Xe.yearsCalendarModel) {
          const _e = Xe.yearsCalendarModel.map((xt, gn) => function Wo(Xe, $t) {
            Xe.years.forEach((gn, wn) => {
              gn.forEach((tr, Do) => {
                let Ji;
                const hi = (0, C.FT)(tr.date, $t.hoveredYear);
                const oa = $t.isDisabled || ea(tr.date, $t.datesDisabled, "year") || Oa(tr.date, $t.datesEnabled, "year") || qo(tr.date, $t.minDate, $t.maxDate);
                if (!$t.selectedDate && $t.selectedRange) {
                  Ji = (0, C.FT)(tr.date, $t.selectedRange[0]);
                  Ji ||= (0, C.FT)(tr.date, $t.selectedRange[1]);
                } else {
                  Ji = (0, C.FT)(tr.date, $t.selectedDate);
                }
                const Ns = Object.assign(tr, {
                  isHovered: hi,
                  isDisabled: oa,
                  isSelected: Ji
                });
                if (tr.isHovered !== Ns.isHovered || tr.isDisabled !== Ns.isDisabled || tr.isSelected !== Ns.isSelected) {
                  Xe.years[wn][Do] = Ns;
                }
              });
            });
            Xe.hideLeftArrow = !!$t.yearIndex && $t.yearIndex > 0 && $t.yearIndex !== $t.displayMonths;
            Xe.hideRightArrow = !!$t.yearIndex && !!$t.displayMonths && $t.yearIndex < $t.displayMonths && $t.yearIndex + 1 !== $t.displayMonths;
            Xe.disableLeftArrow = qo((0, C.rg)(Xe.years[0][0].date, {
              year: -1
            }), $t.minDate, $t.maxDate);
            const _e = Xe.years.length - 1;
            Xe.disableRightArrow = qo((0, C.rg)(Xe.years[_e][Xe.years[_e].length - 1].date, {
              year: 1
            }), $t.minDate, $t.maxDate);
            return Xe;
          }(xt, {
            isDisabled: Xe.isDisabled,
            minDate: Xe.minDate,
            maxDate: Xe.maxDate,
            hoveredYear: Xe.hoveredYear,
            selectedDate: Xe.selectedDate,
            datesDisabled: Xe.datesDisabled,
            datesEnabled: Xe.datesEnabled,
            selectedRange: Xe.selectedRange,
            displayMonths: $t,
            yearIndex: gn
          }));
          return Object.assign({}, Xe, {
            yearsCalendarFlagged: _e
          });
        }
        return Xe;
      }(Xe);
    case Zs.NAVIGATE_OFFSET:
      return function be(Xe, $t) {
        if (!Xe.view) {
          return Xe;
        }
        const _e = function Bt(Xe, $t) {
          if (Xe.view) {
            if (Xe.view.mode === "year" && Xe.minMode === "year") {
              const _e = qa(Xe, 0);
              if (_e) {
                const xt = (0, C.rg)(_e, {
                  year: -hs
                });
                return (0, C.rg)(xt, $t.payload);
              }
            }
            return (0, C.rg)((0, C.gl)(Xe.view.date, "month"), $t.payload);
          }
        }(Xe, $t);
        if (_e) {
          return Object.assign({}, Xe, {
            view: {
              mode: Xe.view.mode,
              date: _e
            }
          });
        } else {
          return Xe;
        }
      }(Xe, $t);
    case Zs.NAVIGATE_TO:
      {
        const xt = $t.payload;
        if (!Xe.view || !xt.unit) {
          return Xe;
        }
        const gn = (0, C.Rw)(Xe.view.date, xt.unit);
        let wn;
        let tr;
        if (Za(xt.viewMode, Xe.minMode)) {
          tr = xt.viewMode;
          wn = {
            view: {
              date: gn,
              mode: tr
            }
          };
        } else {
          tr = Xe.view.mode;
          wn = {
            selectedDate: gn,
            view: {
              date: gn,
              mode: tr
            }
          };
        }
        return Object.assign({}, Xe, wn);
      }
    case Zs.CHANGE_VIEWMODE:
      if (Za($t.payload, Xe.minMode) && Xe.view) {
        return Object.assign({}, Xe, {
          view: {
            date: Xe.view.date,
            mode: $t.payload
          }
        });
      } else {
        return Xe;
      }
    case Zs.HOVER:
      return Object.assign({}, Xe, {
        hoveredDate: $t.payload
      });
    case Zs.SELECT:
      {
        if (!Xe.view) {
          return Xe;
        }
        const xt = {
          selectedDate: $t.payload,
          view: Xe.view
        };
        if (Array.isArray(Xe.selectedTime)) {
          const Do = Xe.selectedTime[0];
          if (xt.selectedDate && Do) {
            Ra(xt.selectedDate, Do);
          }
        }
        const gn = Xe.view.mode;
        const tr = Gn($t.payload || Xe.view.date, Xe.minDate, Xe.maxDate);
        xt.view = {
          mode: gn,
          date: tr
        };
        return Object.assign({}, Xe, xt);
      }
    case Zs.SELECT_TIME:
      {
        const {
          date: xt,
          index: gn
        } = $t.payload;
        const wn = Xe.selectedTime ? [...Xe.selectedTime] : [];
        wn[gn] = xt;
        return Object.assign({}, Xe, {
          selectedTime: wn
        });
      }
    case Zs.SET_OPTIONS:
      {
        if (!Xe.view) {
          return Xe;
        }
        const xt = $t.payload;
        const gn = xt.minMode ? xt.minMode : Xe.view.mode;
        const tr = Gn((0, C.Rp)(xt.value) && xt.value || (0, C.kJ)(xt.value) && (0, C.Rp)(xt.value[0]) && xt.value[0] || Xe.view.date, xt.minDate, xt.maxDate);
        xt.view = {
          mode: gn,
          date: tr
        };
        if (xt.value) {
          if ((0, C.kJ)(xt.value)) {
            xt.selectedRange = xt.value;
            xt.selectedTime = xt.value.map(Do => Do);
          }
          if (xt.value instanceof Date) {
            xt.selectedDate = xt.value;
            xt.selectedTime = [xt.value];
          }
        }
        return Object.assign({}, Xe, xt);
      }
    case Zs.SELECT_RANGE:
      {
        var _e;
        if (!Xe.view) {
          return Xe;
        }
        const xt = {
          selectedRange: $t.payload,
          view: Xe.view
        };
        if ((_e = xt.selectedRange) !== null && _e !== undefined) {
          _e.forEach((Do, Ji) => {
            if (Array.isArray(Xe.selectedTime)) {
              const hi = Xe.selectedTime[Ji];
              if (hi) {
                Ra(Do, hi);
              }
            }
          });
        }
        const gn = Xe.view.mode;
        const tr = Gn($t.payload && $t.payload[0] || Xe.view.date, Xe.minDate, Xe.maxDate);
        xt.view = {
          mode: gn,
          date: tr
        };
        return Object.assign({}, Xe, xt);
      }
    case Zs.SET_MIN_DATE:
      return Object.assign({}, Xe, {
        minDate: $t.payload
      });
    case Zs.SET_MAX_DATE:
      return Object.assign({}, Xe, {
        maxDate: $t.payload
      });
    case Zs.SET_IS_DISABLED:
      return Object.assign({}, Xe, {
        isDisabled: $t.payload
      });
    case Zs.SET_DATE_CUSTOM_CLASSES:
      return Object.assign({}, Xe, {
        dateCustomClasses: $t.payload
      });
    case Zs.SET_DATE_TOOLTIP_TEXTS:
      return Object.assign({}, Xe, {
        dateTooltipTexts: $t.payload
      });
    default:
      return Xe;
  }
}
function an(Xe) {
  return {
    locale: Xe.locale,
    monthTitle: Xe.monthTitle,
    yearTitle: Xe.yearTitle,
    dayLabel: Xe.dayLabel,
    monthLabel: Xe.monthLabel,
    yearLabel: Xe.yearLabel,
    weekNumbers: Xe.weekNumbers
  };
}
function Gn(Xe, $t, _e) {
  const xt = Array.isArray(Xe) ? Xe[0] : Xe;
  if ($t && (0, C.Ax)($t, xt, "day")) {
    return $t;
  } else if (_e && (0, C.RR)(_e, xt, "day")) {
    return _e;
  } else {
    return xt;
  }
}
function Ki(Xe, $t, _e) {
  return !!_e && !!(0, C.ZG)(_e, Xe, "day") || $t && _e && $t.getMonth() === _e.getMonth();
}
let Lr = (() => {
  class Xe extends U.s {
    constructor() {
      const _e = new E.X({
        type: "[datepicker] dispatcher init"
      });
      super(_e, Uo, new U.F(ho, _e, Uo));
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵprov = i.Yz7({
    token: Xe,
    factory: Xe.ɵfac,
    providedIn: "platform"
  });
  return Xe;
})();
let Gr = (() => {
  class Xe {
    constructor() {
      this.onSelect = new i.vpe();
    }
    selectFromRanges(_e) {
      this.onSelect.emit(_e);
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-custom-date-view"]],
    inputs: {
      ranges: "ranges",
      selectedRange: "selectedRange",
      customRangeLabel: "customRangeLabel"
    },
    outputs: {
      onSelect: "onSelect"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", "class", "btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.TgZ(0, "div", 0);
        i.YNc(1, le, 2, 3, "button", 1);
        i.qZA();
      }
      if (_e & 2) {
        i.xp6(1);
        i.Q6J("ngForOf", xt.ranges);
      }
    },
    dependencies: [B.sg],
    encapsulation: 2,
    changeDetection: 0
  });
  return Xe;
})();
var zr = (() => {
  (Xe = zr ||= {})[Xe.UP = 0] = "UP";
  Xe[Xe.DOWN = 1] = "DOWN";
  return zr;
  var Xe;
})();
let Ks = (() => {
  class Xe {}
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-current-date"]],
    inputs: {
      title: "title"
    },
    decls: 3,
    vars: 1,
    consts: [[1, "current-timedate"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.TgZ(0, "div", 0)(1, "span");
        i._uU(2);
        i.qZA()();
      }
      if (_e & 2) {
        i.xp6(2);
        i.Oqu(xt.title);
      }
    },
    encapsulation: 2
  });
  return Xe;
})();
let Js = (() => {
  class Xe {
    constructor() {
      this.ampm = "ok";
      this.hours = 0;
      this.minutes = 0;
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-timepicker"]],
    decls: 16,
    vars: 3,
    consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.TgZ(0, "div", 0)(1, "div", 1)(2, "button", 2);
        i._uU(3, "-");
        i.qZA();
        i._UZ(4, "input", 3);
        i.TgZ(5, "button", 4);
        i._uU(6, "+");
        i.qZA()();
        i.TgZ(7, "div", 1)(8, "button", 2);
        i._uU(9, "-");
        i.qZA();
        i._UZ(10, "input", 3);
        i.TgZ(11, "button", 4);
        i._uU(12, "+");
        i.qZA()();
        i.TgZ(13, "button", 5);
        i._uU(14);
        i._UZ(15, "img", 6);
        i.qZA()();
      }
      if (_e & 2) {
        i.xp6(4);
        i.Q6J("value", xt.hours);
        i.xp6(6);
        i.Q6J("value", xt.minutes);
        i.xp6(4);
        i.hij("", xt.ampm, " ");
      }
    },
    encapsulation: 2
  });
  return Xe;
})();
let Xt = (() => {
  class Xe {}
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-calendar-layout"]],
    ngContentSelectors: G,
    decls: 6,
    vars: 2,
    consts: [["title", "hey there", 4, "ngIf"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"], [4, "ngIf"], ["title", "hey there"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.F$t(j);
        i.YNc(0, fe, 1, 0, "bs-current-date", 0);
        i.TgZ(1, "div", 1);
        i.Hsn(2);
        i.qZA();
        i.TgZ(3, "div", 2);
        i.Hsn(4, 1);
        i.qZA();
        i.YNc(5, q, 1, 0, "bs-timepicker", 3);
      }
      if (_e & 2) {
        i.Q6J("ngIf", false);
        i.xp6(5);
        i.Q6J("ngIf", false);
      }
    },
    dependencies: [B.O5, Ks, Js],
    encapsulation: 2
  });
  return Xe;
})();
let ut = (() => {
  class Xe {
    constructor(_e, xt, gn) {
      this._config = _e;
      this._elRef = xt;
      this._renderer = gn;
      this.day = {
        date: new Date(),
        label: ""
      };
    }
    ngOnInit() {
      var _e;
      var gn;
      if ((_e = this.day) !== null && _e !== undefined && _e.isToday && this._config && this._config.customTodayClass) {
        this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
      }
      if (typeof this.day?.customClasses == "string") {
        if ((gn = this.day) !== null && gn !== undefined) {
          gn.customClasses.split(" ").filter(wn => wn).forEach(wn => {
            this._renderer.addClass(this._elRef.nativeElement, wn);
          });
        }
      }
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(Or), i.Y36(i.SBq), i.Y36(i.Qsj));
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["", "bsDatepickerDayDecorator", ""]],
    hostVars: 16,
    hostBindings: function (_e, xt) {
      if (_e & 2) {
        i.ekj("disabled", xt.day.isDisabled)("is-highlighted", xt.day.isHovered)("is-other-month", xt.day.isOtherMonth)("is-active-other-month", xt.day.isOtherMonthHovered)("in-range", xt.day.isInRange)("select-start", xt.day.isSelectionStart)("select-end", xt.day.isSelectionEnd)("selected", xt.day.isSelected);
      }
    },
    inputs: {
      day: "day"
    },
    attrs: se,
    decls: 1,
    vars: 1,
    template: function (_e, xt) {
      if (_e & 1) {
        i._uU(0);
      }
      if (_e & 2) {
        i.Oqu(xt.day && xt.day.label || "");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return Xe;
})();
let vt = (() => {
  class Xe {
    constructor() {
      this.onNavigate = new i.vpe();
      this.onViewMode = new i.vpe();
    }
    navTo(_e) {
      this.onNavigate.emit(_e ? zr.DOWN : zr.UP);
    }
    view(_e) {
      this.onViewMode.emit(_e);
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-datepicker-navigation-view"]],
    inputs: {
      calendar: "calendar"
    },
    outputs: {
      onNavigate: "onNavigate",
      onViewMode: "onViewMode"
    },
    decls: 12,
    vars: 8,
    consts: [["type", "button", 1, "previous", 3, "disabled", "click"], [4, "ngIf"], ["type", "button", 1, "current", 3, "click"], ["type", "button", 1, "next", 3, "disabled", "click"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.TgZ(0, "button", 0);
        i.NdJ("click", function () {
          return xt.navTo(true);
        });
        i.TgZ(1, "span");
        i._uU(2, "‹");
        i.qZA()();
        i.YNc(3, W, 5, 1, "ng-container", 1);
        i._uU(4, " ​ ");
        i.TgZ(5, "button", 2);
        i.NdJ("click", function () {
          return xt.view("year");
        });
        i.TgZ(6, "span");
        i._uU(7);
        i.qZA()();
        i._uU(8, " ​ ");
        i.TgZ(9, "button", 3);
        i.NdJ("click", function () {
          return xt.navTo(false);
        });
        i.TgZ(10, "span");
        i._uU(11, "›");
        i.qZA()();
      }
      if (_e & 2) {
        i.Udp("visibility", xt.calendar.hideLeftArrow ? "hidden" : "visible");
        i.Q6J("disabled", xt.calendar.disableLeftArrow);
        i.xp6(3);
        i.Q6J("ngIf", xt.calendar && xt.calendar.monthTitle);
        i.xp6(4);
        i.Oqu(xt.calendar.yearTitle);
        i.xp6(2);
        i.Udp("visibility", xt.calendar.hideRightArrow ? "hidden" : "visible");
        i.Q6J("disabled", xt.calendar.disableRightArrow);
      }
    },
    dependencies: [B.O5],
    encapsulation: 2,
    changeDetection: 0
  });
  return Xe;
})();
let Zt = (() => {
  class Xe {
    constructor(_e) {
      this._config = _e;
      this.onNavigate = new i.vpe();
      this.onViewMode = new i.vpe();
      this.onSelect = new i.vpe();
      this.onHover = new i.vpe();
      this.onHoverWeek = new i.vpe();
      this.isiOS = /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      if (this._config.dateTooltipTexts && this._config.dateTooltipTexts.length > 0) {
        this.isShowTooltip = true;
      }
    }
    navigateTo(_e) {
      this.onNavigate.emit({
        step: {
          month: zr.DOWN === _e ? -1 : 1
        }
      });
    }
    changeViewMode(_e) {
      this.onViewMode.emit(_e);
    }
    selectDay(_e) {
      this.onSelect.emit(_e);
    }
    selectWeek(_e) {
      if (!this._config.selectWeek && !this._config.selectWeekDateRange || _e.days.length === 0) {
        return;
      }
      if (this._config.selectWeek && _e.days[0] && !_e.days[0].isDisabled && this._config.selectFromOtherMonth) {
        this.onSelect.emit(_e.days[0]);
        return;
      }
      const xt = _e.days.find(gn => (this._config.selectFromOtherMonth || !gn.isOtherMonth) && !gn.isDisabled);
      this.onSelect.emit(xt);
      if (this._config.selectWeekDateRange) {
        const wn = _e.days.slice(0).reverse().find(tr => (this._config.selectFromOtherMonth || !tr.isOtherMonth) && !tr.isDisabled);
        this.onSelect.emit(wn);
      }
    }
    weekHoverHandler(_e, xt) {
      if ((this._config.selectWeek || this._config.selectWeekDateRange) && _e.days.find(wn => (this._config.selectFromOtherMonth || !wn.isOtherMonth) && !wn.isDisabled)) {
        _e.isHovered = xt;
        this.isWeekHovered = xt;
        this.onHoverWeek.emit(_e);
      }
    }
    hoverDay(_e, xt) {
      if (this._config.selectFromOtherMonth && _e.isOtherMonth) {
        _e.isOtherMonthHovered = xt;
      }
      if (this._config.dateTooltipTexts) {
        _e.tooltipText = "";
        this._config.dateTooltipTexts.forEach(gn => {
          if ((0, C.KC)(gn.date, _e.date)) {
            _e.tooltipText = gn.tooltipText;
          }
        });
      }
      this.onHover.emit({
        cell: _e,
        isHovered: xt
      });
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(Or));
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-days-calendar-view"]],
    inputs: {
      calendar: "calendar",
      options: "options"
    },
    outputs: {
      onNavigate: "onNavigate",
      onViewMode: "onViewMode",
      onSelect: "onSelect",
      onHover: "onHover",
      onHoverWeek: "onHoverWeek"
    },
    decls: 9,
    vars: 4,
    consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "days", "weeks"], [4, "ngIf"], ["aria-label", "weekday", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["aria-label", "weekday"], ["class", "week", 3, "active-week", 4, "ngIf"], ["role", "gridcell", 4, "ngFor", "ngForOf"], [1, "week"], [3, "click", 4, "ngIf"], [3, "click", "mouseenter", "mouseleave", 4, "ngIf"], [3, "click"], [3, "click", "mouseenter", "mouseleave"], ["role", "gridcell"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.TgZ(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
        i.NdJ("onNavigate", function (wn) {
          return xt.navigateTo(wn);
        })("onViewMode", function (wn) {
          return xt.changeViewMode(wn);
        });
        i.qZA();
        i.TgZ(2, "table", 1)(3, "thead")(4, "tr");
        i.YNc(5, Pe, 1, 0, "th", 2);
        i.YNc(6, Le, 2, 1, "th", 3);
        i.qZA()();
        i.TgZ(7, "tbody");
        i.YNc(8, st, 3, 2, "tr", 4);
        i.qZA()()();
      }
      if (_e & 2) {
        i.xp6(1);
        i.Q6J("calendar", xt.calendar);
        i.xp6(4);
        i.Q6J("ngIf", xt.options && xt.options.showWeekNumbers);
        i.xp6(1);
        i.Q6J("ngForOf", xt.calendar.weekdays);
        i.xp6(2);
        i.Q6J("ngForOf", xt.calendar.weeks);
      }
    },
    dependencies: [B.sg, B.O5, F.i9, Xt, ut, vt],
    encapsulation: 2
  });
  return Xe;
})();
let _kn = (() => {
  class Xe {
    constructor() {
      this.onNavigate = new i.vpe();
      this.onViewMode = new i.vpe();
      this.onSelect = new i.vpe();
      this.onHover = new i.vpe();
    }
    navigateTo(_e) {
      this.onNavigate.emit({
        step: {
          year: zr.DOWN === _e ? -1 : 1
        }
      });
    }
    viewMonth(_e) {
      this.onSelect.emit(_e);
    }
    hoverMonth(_e, xt) {
      this.onHover.emit({
        cell: _e,
        isHovered: xt
      });
    }
    changeViewMode(_e) {
      this.onViewMode.emit(_e);
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-month-calendar-view"]],
    inputs: {
      calendar: "calendar"
    },
    outputs: {
      onNavigate: "onNavigate",
      onViewMode: "onViewMode",
      onSelect: "onSelect",
      onHover: "onHover"
    },
    decls: 5,
    vars: 2,
    consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "months"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.TgZ(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
        i.NdJ("onNavigate", function (wn) {
          return xt.navigateTo(wn);
        })("onViewMode", function (wn) {
          return xt.changeViewMode(wn);
        });
        i.qZA();
        i.TgZ(2, "table", 1)(3, "tbody");
        i.YNc(4, Oe, 2, 1, "tr", 2);
        i.qZA()()();
      }
      if (_e & 2) {
        i.xp6(1);
        i.Q6J("calendar", xt.calendar);
        i.xp6(3);
        i.Q6J("ngForOf", xt.calendar == null ? null : xt.calendar.months);
      }
    },
    dependencies: [B.sg, Xt, vt],
    encapsulation: 2
  });
  return Xe;
})();
let Zn = (() => {
  class Xe {
    constructor() {
      this.onNavigate = new i.vpe();
      this.onViewMode = new i.vpe();
      this.onSelect = new i.vpe();
      this.onHover = new i.vpe();
    }
    navigateTo(_e) {
      this.onNavigate.emit({
        step: {
          year: (zr.DOWN === _e ? -1 : 1) * 16
        }
      });
    }
    viewYear(_e) {
      this.onSelect.emit(_e);
    }
    hoverYear(_e, xt) {
      this.onHover.emit({
        cell: _e,
        isHovered: xt
      });
    }
    changeViewMode(_e) {
      this.onViewMode.emit(_e);
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-years-calendar-view"]],
    inputs: {
      calendar: "calendar"
    },
    outputs: {
      onNavigate: "onNavigate",
      onViewMode: "onViewMode",
      onSelect: "onSelect",
      onHover: "onHover"
    },
    decls: 5,
    vars: 2,
    consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "years"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.TgZ(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
        i.NdJ("onNavigate", function (wn) {
          return xt.navigateTo(wn);
        })("onViewMode", function (wn) {
          return xt.changeViewMode(wn);
        });
        i.qZA();
        i.TgZ(2, "table", 1)(3, "tbody");
        i.YNc(4, ke, 2, 1, "tr", 2);
        i.qZA()()();
      }
      if (_e & 2) {
        i.xp6(1);
        i.Q6J("calendar", xt.calendar);
        i.xp6(3);
        i.Q6J("ngForOf", xt.calendar == null ? null : xt.calendar.years);
      }
    },
    dependencies: [B.sg, Xt, vt],
    encapsulation: 2
  });
  return Xe;
})();
let li = (() => {
  class Xe extends kr {
    constructor(_e, xt, gn, wn, tr, Do, Ji) {
      super();
      this._config = xt;
      this._store = gn;
      this._element = wn;
      this._actions = tr;
      this._positionService = Ji;
      this.valueChange = new i.vpe();
      this.animationState = "void";
      this.isRangePicker = false;
      this._subs = [];
      this._effects = Do;
      _e.setStyle(wn.nativeElement, "display", "block");
      _e.setStyle(wn.nativeElement, "position", "absolute");
    }
    set value(_e) {
      var xt;
      if ((xt = this._effects) !== null && xt !== undefined) {
        xt.setValue(_e);
      }
    }
    ngOnInit() {
      var _e;
      var xt;
      let gn;
      this._positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this._config.adaptivePosition
          },
          preventOverflow: {
            enabled: this._config.adaptivePosition
          }
        },
        allowedPositions: this._config.allowedPositions
      });
      if ((_e = this._positionService.event$) !== null && _e !== undefined) {
        _e.pipe((0, k.q)(1)).subscribe(() => {
          this._positionService.disable();
          this.animationState = this._config.isAnimated ? this.isTopPosition ? "animated-up" : "animated-down" : "unanimated";
        });
      }
      this.isOtherMonthsActive = this._config.selectFromOtherMonth;
      this.containerClass = this._config.containerClass;
      this.showTodayBtn = this._config.showTodayButton;
      this.todayBtnLbl = this._config.todayButtonLabel;
      this.todayPos = this._config.todayPosition;
      this.showClearBtn = this._config.showClearButton;
      this.clearBtnLbl = this._config.clearButtonLabel;
      this.clearPos = this._config.clearPosition;
      this.customRangeBtnLbl = this._config.customRangeButtonLabel;
      this.withTimepicker = this._config.withTimepicker;
      if ((xt = this._effects) !== null && xt !== undefined) {
        xt.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
      }
      this._subs.push(this._store.select(wn => wn.selectedDate).subscribe(wn => {
        gn = wn;
        this.valueChange.emit(wn);
      }));
      this._subs.push(this._store.select(wn => wn.selectedTime).subscribe(wn => {
        if (!!wn[0] && !!(wn[0] instanceof Date) && wn[0] !== gn) {
          this.valueChange.emit(wn[0]);
        }
      }));
      this._store.dispatch(this._actions.changeViewMode(this._config.startView));
    }
    ngAfterViewInit() {
      var _e;
      var xt;
      this.selectedTimeSub.add((_e = this.selectedTime) === null || _e === undefined ? undefined : _e.subscribe(gn => {
        var wn;
        if (Array.isArray(gn) && gn.length >= 1) {
          if ((wn = this.startTimepicker) !== null && wn !== undefined) {
            wn.writeValue(gn[0]);
          }
        }
      }));
      if ((xt = this.startTimepicker) !== null && xt !== undefined) {
        xt.registerOnChange(gn => {
          this.timeSelectHandler(gn, 0);
        });
      }
    }
    get isTopPosition() {
      return this._element.nativeElement.classList.contains("top");
    }
    positionServiceEnable() {
      this._positionService.enable();
    }
    timeSelectHandler(_e, xt) {
      this._store.dispatch(this._actions.selectTime(_e, xt));
    }
    daySelectHandler(_e) {
      if (!!_e && !(this.isOtherMonthsActive ? _e.isDisabled : _e.isOtherMonth || _e.isDisabled)) {
        this._store.dispatch(this._actions.select(_e.date));
      }
    }
    monthSelectHandler(_e) {
      if (!!_e && !_e.isDisabled) {
        this._store.dispatch(this._actions.navigateTo({
          unit: {
            month: (0, C.jw)(_e.date),
            year: (0, C.D$)(_e.date)
          },
          viewMode: "day"
        }));
      }
    }
    yearSelectHandler(_e) {
      if (!!_e && !_e.isDisabled) {
        this._store.dispatch(this._actions.navigateTo({
          unit: {
            year: (0, C.D$)(_e.date)
          },
          viewMode: "month"
        }));
      }
    }
    setToday() {
      this._store.dispatch(this._actions.select(new Date()));
    }
    clearDate() {
      this._store.dispatch(this._actions.select(undefined));
    }
    ngOnDestroy() {
      var _e;
      for (const xt of this._subs) {
        xt.unsubscribe();
      }
      this.selectedTimeSub.unsubscribe();
      if ((_e = this._effects) !== null && _e !== undefined) {
        _e.destroy();
      }
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(i.Qsj), i.Y36(Or), i.Y36(Lr), i.Y36(i.SBq), i.Y36(Zs), i.Y36(fa), i.Y36(w.sA));
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-datepicker-container"]],
    viewQuery: function (_e, xt) {
      if (_e & 1) {
        i.Gf(Be, 5);
      }
      if (_e & 2) {
        let gn;
        if (i.iGM(gn = i.CRH())) {
          xt.startTimepicker = gn.first;
        }
      }
    },
    hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
    hostBindings: function (_e, xt) {
      if (_e & 1) {
        i.NdJ("click", function (wn) {
          return xt._stopPropagation(wn);
        });
      }
    },
    features: [i._Bn([Lr, fa]), i.qOj],
    decls: 2,
    vars: 3,
    consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.YNc(0, Me, 10, 11, "div", 0);
        i.ALo(1, "async");
      }
      if (_e & 2) {
        i.Q6J("ngIf", i.lcZ(1, 1, xt.viewMode));
      }
    },
    dependencies: [B.mk, B.sg, B.O5, B.RF, B.n9, S.EV, Gr, Zt, _kn, Zn, B.Ov],
    encapsulation: 2,
    data: {
      animation: [_o]
    }
  });
  return Xe;
})();
export let Np = (() => {
  class Xe {
    constructor(_e, xt, gn, wn, tr) {
      this._config = _e;
      this._elementRef = xt;
      this._renderer = gn;
      this.placement = "bottom";
      this.triggers = "click";
      this.outsideClick = true;
      this.container = "body";
      this.outsideEsc = true;
      this.isDestroy$ = new x.x();
      this.isDisabled = false;
      this.bsValueChange = new i.vpe();
      this._subs = [];
      this._dateInputFormat$ = new x.x();
      Object.assign(this, this._config);
      this._datepicker = tr.createLoader(xt, wn, gn);
      this.onShown = this._datepicker.onShown;
      this.onHidden = this._datepicker.onHidden;
      this.isOpen$ = new E.X(this.isOpen);
    }
    get isOpen() {
      return this._datepicker.isShown;
    }
    set isOpen(_e) {
      this.isOpen$.next(_e);
    }
    set bsValue(_e) {
      var xt;
      if (!this._bsValue || !_e || this._bsValue.getTime() !== _e.getTime()) {
        if (!this._bsValue && !!_e && !this._config.withTimepicker) {
          Ra(_e, new Date());
        }
        if (_e && (xt = this.bsConfig) !== null && xt !== undefined && xt.initCurrentTime) {
          _e = Fr(_e);
        }
        this._bsValue = _e;
        this.bsValueChange.emit(_e);
      }
    }
    get dateInputFormat$() {
      return this._dateInputFormat$;
    }
    ngOnInit() {
      this._datepicker.listen({
        outsideClick: this.outsideClick,
        outsideEsc: this.outsideEsc,
        triggers: this.triggers,
        show: () => this.show()
      });
      this.setConfig();
    }
    ngOnChanges(_e) {
      var xt;
      var tr;
      if (_e.bsConfig) {
        if ((xt = _e.bsConfig.currentValue) !== null && xt !== undefined && xt.initCurrentTime && _e.bsConfig.currentValue?.initCurrentTime !== _e.bsConfig.previousValue?.initCurrentTime && this._bsValue) {
          this._bsValue = Fr(this._bsValue);
          this.bsValueChange.emit(this._bsValue);
        }
        this.setConfig();
        this._dateInputFormat$.next(this.bsConfig && this.bsConfig.dateInputFormat);
      }
      if (this._datepickerRef && this._datepickerRef.instance) {
        if (_e.minDate) {
          this._datepickerRef.instance.minDate = this.minDate;
        }
        if (_e.maxDate) {
          this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (_e.daysDisabled) {
          this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (_e.datesDisabled) {
          this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (_e.datesEnabled) {
          this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (_e.isDisabled) {
          if ((tr = this._elementRef) !== null && tr !== undefined && tr.nativeElement) {
            this._elementRef.nativeElement.setAttribute("readonly", this.isDisabled);
          }
          this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (_e.dateCustomClasses) {
          this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
        if (_e.dateTooltipTexts) {
          this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
        }
      }
    }
    initSubscribes() {
      this._subs.push(this.bsValueChange.subscribe(_e => {
        if (this._datepickerRef) {
          this._datepickerRef.instance.value = _e;
        }
      }));
      if (this._datepickerRef) {
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(_e => {
          this.bsValue = _e;
          this.hide();
        }));
      }
    }
    ngAfterViewInit() {
      this.isOpen$.pipe((0, t.h)(_e => _e !== this.isOpen), (0, M.R)(this.isDestroy$)).subscribe(() => this.toggle());
    }
    show() {
      if (!this._datepicker.isShown) {
        this.setConfig();
        this._datepickerRef = this._datepicker.provide({
          provide: Or,
          useValue: this._config
        }).attach(li).to(this.container).position({
          attachment: this.placement
        }).show({
          placement: this.placement
        });
        this.initSubscribes();
      }
    }
    hide() {
      if (this.isOpen) {
        this._datepicker.hide();
      }
      for (const _e of this._subs) {
        _e.unsubscribe();
      }
      if (this._config.returnFocusToInput) {
        this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
      }
    }
    toggle() {
      if (this.isOpen) {
        return this.hide();
      }
      this.show();
    }
    setConfig() {
      this._config = Object.assign({}, this._config, this.bsConfig, {
        value: la(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
        isDisabled: this.isDisabled,
        minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
        maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
        daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
        dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
        dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
        datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
        datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
        minMode: this.minMode || this.bsConfig && this.bsConfig.minMode,
        initCurrentTime: this.bsConfig?.initCurrentTime
      });
    }
    unsubscribeSubscriptions() {
      var _e;
      if ((_e = this._subs) !== null && _e !== undefined && _e.length) {
        this._subs.map(xt => xt.unsubscribe());
        this._subs.length = 0;
      }
    }
    ngOnDestroy() {
      this._datepicker.dispose();
      this.isOpen$.next(false);
      if (this.isDestroy$) {
        this.isDestroy$.next(null);
        this.isDestroy$.complete();
      }
      this.unsubscribeSubscriptions();
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(Or), i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(i.s_b), i.Y36(Z.oj));
  };
  Xe.ɵdir = i.lG2({
    type: Xe,
    selectors: [["", "bsDatepicker", ""]],
    inputs: {
      placement: "placement",
      triggers: "triggers",
      outsideClick: "outsideClick",
      container: "container",
      outsideEsc: "outsideEsc",
      isDisabled: "isDisabled",
      minDate: "minDate",
      maxDate: "maxDate",
      minMode: "minMode",
      daysDisabled: "daysDisabled",
      datesDisabled: "datesDisabled",
      datesEnabled: "datesEnabled",
      dateCustomClasses: "dateCustomClasses",
      dateTooltipTexts: "dateTooltipTexts",
      isOpen: "isOpen",
      bsValue: "bsValue",
      bsConfig: "bsConfig"
    },
    outputs: {
      onShown: "onShown",
      onHidden: "onHidden",
      bsValueChange: "bsValueChange"
    },
    exportAs: ["bsDatepicker"],
    features: [i.TTD]
  });
  return Xe;
})();
let Xi = (() => {
  class Xe extends Or {}
  Xe.ɵfac = function () {
    let $t;
    return function (xt) {
      return ($t ||= i.n5z(Xe))(xt || Xe);
    };
  }();
  Xe.ɵprov = i.Yz7({
    token: Xe,
    factory: Xe.ɵfac,
    providedIn: "root"
  });
  return Xe;
})();
let nr = (() => {
  class Xe extends li {
    constructor(_e, xt, gn, wn, tr, Do, Ji) {
      super(_e, xt, gn, wn, tr, Do, Ji);
      _e.setStyle(wn.nativeElement, "display", "inline-block");
      _e.setStyle(wn.nativeElement, "position", "static");
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(i.Qsj), i.Y36(Or), i.Y36(Lr), i.Y36(i.SBq), i.Y36(Zs), i.Y36(fa), i.Y36(w.sA));
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-datepicker-inline-container"]],
    hostBindings: function (_e, xt) {
      if (_e & 1) {
        i.NdJ("click", function (wn) {
          return xt._stopPropagation(wn);
        });
      }
    },
    features: [i._Bn([Lr, fa]), i.qOj],
    decls: 2,
    vars: 3,
    consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.YNc(0, In, 10, 11, "div", 0);
        i.ALo(1, "async");
      }
      if (_e & 2) {
        i.Q6J("ngIf", i.lcZ(1, 1, xt.viewMode));
      }
    },
    dependencies: [B.mk, B.sg, B.O5, B.RF, B.n9, S.EV, Gr, Zt, _kn, Zn, B.Ov],
    encapsulation: 2,
    data: {
      animation: [_o]
    }
  });
  return Xe;
})();
export let nf = (() => {
  class Xe {
    constructor(_e, xt, gn, wn, tr) {
      this._config = _e;
      this._elementRef = xt;
      this.isDisabled = false;
      this.bsValueChange = new i.vpe();
      this._subs = [];
      Object.assign(this, this._config);
      this._datepicker = tr.createLoader(xt, wn, gn);
    }
    set bsValue(_e) {
      var xt;
      if (this._bsValue !== _e) {
        if (!this._bsValue && !!_e && !this._config.withTimepicker) {
          Ra(_e, new Date());
        }
        if (_e && (xt = this.bsConfig) !== null && xt !== undefined && xt.initCurrentTime) {
          _e = Fr(_e);
        }
        this._bsValue = _e;
        this.bsValueChange.emit(_e);
      }
    }
    ngOnInit() {
      this.setConfig();
      this.initSubscribes();
    }
    initSubscribes() {
      this.unsubscribeSubscriptions();
      this._subs.push(this.bsValueChange.subscribe(_e => {
        if (this._datepickerRef) {
          this._datepickerRef.instance.value = _e;
        }
      }));
      if (this._datepickerRef) {
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(_e => {
          this.bsValue = _e;
        }));
      }
    }
    unsubscribeSubscriptions() {
      var _e;
      if ((_e = this._subs) !== null && _e !== undefined && _e.length) {
        this._subs.map(xt => xt.unsubscribe());
        this._subs.length = 0;
      }
    }
    ngOnChanges(_e) {
      var xt;
      if (_e.bsConfig && (xt = _e.bsConfig.currentValue) !== null && xt !== undefined && xt.initCurrentTime && _e.bsConfig.currentValue?.initCurrentTime !== _e.bsConfig.previousValue?.initCurrentTime && this._bsValue) {
        this._bsValue = Fr(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
      if (!!this._datepickerRef && !!this._datepickerRef.instance) {
        if (_e.minDate) {
          this._datepickerRef.instance.minDate = this.minDate;
        }
        if (_e.maxDate) {
          this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (_e.datesDisabled) {
          this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (_e.datesEnabled) {
          this._datepickerRef.instance.datesEnabled = this.datesEnabled;
          this._datepickerRef.instance.value = this._bsValue;
        }
        if (_e.isDisabled) {
          this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (_e.dateCustomClasses) {
          this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
        if (_e.dateTooltipTexts) {
          this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
        }
        this.setConfig();
      }
    }
    setConfig() {
      if (this._datepicker) {
        this._datepicker.hide();
      }
      this._config = Object.assign({}, this._config, this.bsConfig, {
        value: la(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
        isDisabled: this.isDisabled,
        minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
        maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
        dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
        dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
        datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
        datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
        initCurrentTime: this.bsConfig?.initCurrentTime
      });
      this._datepickerRef = this._datepicker.provide({
        provide: Or,
        useValue: this._config
      }).attach(nr).to(this._elementRef).show();
      this.initSubscribes();
    }
    ngOnDestroy() {
      this._datepicker.dispose();
      this.unsubscribeSubscriptions();
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(Xi), i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(i.s_b), i.Y36(Z.oj));
  };
  Xe.ɵdir = i.lG2({
    type: Xe,
    selectors: [["bs-datepicker-inline"]],
    inputs: {
      bsConfig: "bsConfig",
      isDisabled: "isDisabled",
      minDate: "minDate",
      maxDate: "maxDate",
      dateCustomClasses: "dateCustomClasses",
      dateTooltipTexts: "dateTooltipTexts",
      datesEnabled: "datesEnabled",
      datesDisabled: "datesDisabled",
      bsValue: "bsValue"
    },
    outputs: {
      bsValueChange: "bsValueChange"
    },
    exportAs: ["bsDatepickerInline"],
    features: [i.TTD]
  });
  return Xe;
})();
let Ss = (() => {
  class Xe extends kr {
    constructor(_e, xt, gn, wn, tr, Do, Ji) {
      super();
      this._config = xt;
      this._store = gn;
      this._element = wn;
      this._actions = tr;
      this._positionService = Ji;
      this.valueChange = new i.vpe();
      this.animationState = "void";
      this._rangeStack = [];
      this.chosenRange = [];
      this._subs = [];
      this.isRangePicker = true;
      this._effects = Do;
      this.customRanges = this._config.ranges || [];
      this.customRangeBtnLbl = this._config.customRangeButtonLabel;
      _e.setStyle(wn.nativeElement, "display", "block");
      _e.setStyle(wn.nativeElement, "position", "absolute");
    }
    set value(_e) {
      var xt;
      if ((xt = this._effects) !== null && xt !== undefined) {
        xt.setRangeValue(_e);
      }
    }
    ngOnInit() {
      var _e;
      var xt;
      let gn;
      this._positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this._config.adaptivePosition
          },
          preventOverflow: {
            enabled: this._config.adaptivePosition
          }
        },
        allowedPositions: this._config.allowedPositions
      });
      if ((_e = this._positionService.event$) !== null && _e !== undefined) {
        _e.pipe((0, k.q)(1)).subscribe(() => {
          this._positionService.disable();
          this.animationState = this._config.isAnimated ? this.isTopPosition ? "animated-up" : "animated-down" : "unanimated";
        });
      }
      this.containerClass = this._config.containerClass;
      this.isOtherMonthsActive = this._config.selectFromOtherMonth;
      this.withTimepicker = this._config.withTimepicker;
      if ((xt = this._effects) !== null && xt !== undefined) {
        xt.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
      }
      this._subs.push(this._store.select(wn => wn.selectedRange).subscribe(wn => {
        gn = wn;
        this.valueChange.emit(wn);
        this.chosenRange = wn || [];
      }));
      this._subs.push(this._store.select(wn => wn.selectedTime).subscribe(wn => {
        if (!!wn[0] && !!wn[1] && !!(wn[0] instanceof Date) && !!(wn[1] instanceof Date) && (!gn || wn[0] !== gn[0] || wn[1] !== gn[1])) {
          this.valueChange.emit(wn);
          this.chosenRange = wn || [];
        }
      }));
    }
    ngAfterViewInit() {
      var _e;
      var xt;
      var gn;
      this.selectedTimeSub.add((_e = this.selectedTime) === null || _e === undefined ? undefined : _e.subscribe(wn => {
        var tr;
        var Do;
        if (Array.isArray(wn) && wn.length >= 2) {
          if ((tr = this.startTimepicker) !== null && tr !== undefined) {
            tr.writeValue(wn[0]);
          }
          if ((Do = this.endTimepicker) !== null && Do !== undefined) {
            Do.writeValue(wn[1]);
          }
        }
      }));
      if ((xt = this.startTimepicker) !== null && xt !== undefined) {
        xt.registerOnChange(wn => {
          this.timeSelectHandler(wn, 0);
        });
      }
      if ((gn = this.endTimepicker) !== null && gn !== undefined) {
        gn.registerOnChange(wn => {
          this.timeSelectHandler(wn, 1);
        });
      }
    }
    get isTopPosition() {
      return this._element.nativeElement.classList.contains("top");
    }
    positionServiceEnable() {
      this._positionService.enable();
    }
    timeSelectHandler(_e, xt) {
      this._store.dispatch(this._actions.selectTime(_e, xt));
    }
    daySelectHandler(_e) {
      if (!!_e && !(this.isOtherMonthsActive ? _e.isDisabled : _e.isOtherMonth || _e.isDisabled)) {
        this.rangesProcessing(_e);
      }
    }
    monthSelectHandler(_e) {
      if (_e && !_e.isDisabled) {
        _e.isSelected = true;
        if (this._config.minMode !== "month") {
          if (_e.isDisabled) {
            return;
          }
          this._store.dispatch(this._actions.navigateTo({
            unit: {
              month: (0, C.jw)(_e.date),
              year: (0, C.D$)(_e.date)
            },
            viewMode: "day"
          }));
          return;
        }
        this.rangesProcessing(_e);
      }
    }
    yearSelectHandler(_e) {
      if (_e && !_e.isDisabled) {
        _e.isSelected = true;
        if (this._config.minMode !== "year") {
          if (_e.isDisabled) {
            return;
          }
          this._store.dispatch(this._actions.navigateTo({
            unit: {
              year: (0, C.D$)(_e.date)
            },
            viewMode: "month"
          }));
          return;
        }
        this.rangesProcessing(_e);
      }
    }
    rangesProcessing(_e) {
      if (this._rangeStack.length === 1) {
        this._rangeStack = _e.date >= this._rangeStack[0] ? [this._rangeStack[0], _e.date] : [_e.date];
      }
      if (this._config.maxDateRange) {
        this.setMaxDateRangeOnCalendar(_e.date);
      }
      if (this._rangeStack.length === 0) {
        this._rangeStack = [_e.date];
        if (this._config.maxDateRange) {
          this.setMaxDateRangeOnCalendar(_e.date);
        }
      }
      this._store.dispatch(this._actions.selectRange(this._rangeStack));
      if (this._rangeStack.length === 2) {
        this._rangeStack = [];
      }
    }
    ngOnDestroy() {
      var _e;
      for (const xt of this._subs) {
        xt.unsubscribe();
      }
      this.selectedTimeSub.unsubscribe();
      if ((_e = this._effects) !== null && _e !== undefined) {
        _e.destroy();
      }
    }
    setRangeOnCalendar(_e) {
      if (_e) {
        this._rangeStack = _e.value instanceof Date ? [_e.value] : _e.value;
      }
      this._store.dispatch(this._actions.selectRange(this._rangeStack));
    }
    setMaxDateRangeOnCalendar(_e) {
      var xt;
      let gn = new Date(_e);
      if (this._config.maxDate) {
        const wn = this._config.maxDate.getTime();
        const tr = _e.getTime() + (this._config.maxDateRange || 0) * 86400000;
        gn = tr > wn ? new Date(this._config.maxDate) : new Date(tr);
      } else {
        gn.setDate(_e.getDate() + (this._config.maxDateRange || 0));
      }
      if ((xt = this._effects) !== null && xt !== undefined) {
        xt.setMaxDate(gn);
      }
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(i.Qsj), i.Y36(Or), i.Y36(Lr), i.Y36(i.SBq), i.Y36(Zs), i.Y36(fa), i.Y36(w.sA));
  };
  Xe.ɵcmp = i.Xpm({
    type: Xe,
    selectors: [["bs-daterangepicker-container"]],
    viewQuery: function (_e, xt) {
      if (_e & 1) {
        i.Gf(Be, 5);
        i.Gf(di, 5);
      }
      if (_e & 2) {
        let gn;
        if (i.iGM(gn = i.CRH())) {
          xt.startTimepicker = gn.first;
        }
        if (i.iGM(gn = i.CRH())) {
          xt.endTimepicker = gn.first;
        }
      }
    },
    hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
    hostBindings: function (_e, xt) {
      if (_e & 1) {
        i.NdJ("click", function (wn) {
          return xt._stopPropagation(wn);
        });
      }
    },
    features: [i._Bn([Lr, fa]), i.qOj],
    decls: 2,
    vars: 3,
    consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]],
    template: function (_e, xt) {
      if (_e & 1) {
        i.YNc(0, sa, 10, 11, "div", 0);
        i.ALo(1, "async");
      }
      if (_e & 2) {
        i.Q6J("ngIf", i.lcZ(1, 1, xt.viewMode));
      }
    },
    dependencies: [B.mk, B.sg, B.O5, B.RF, B.n9, S.EV, Gr, Zt, _kn, Zn, B.Ov],
    encapsulation: 2,
    data: {
      animation: [_o]
    }
  });
  return Xe;
})();
const Ls = {
  provide: X.JU,
  useExisting: (0, i.Gpc)(() => Y5),
  multi: true
};
const sr = {
  provide: X.Cf,
  useExisting: (0, i.Gpc)(() => Y5),
  multi: true
};
export let Y5 = (() => {
  class Xe {
    constructor(_e, xt, gn, wn, tr) {
      this._picker = _e;
      this._localeService = xt;
      this._renderer = gn;
      this._elRef = wn;
      this.changeDetection = tr;
      this._onChange = Function.prototype;
      this._onTouched = Function.prototype;
      this._validatorChange = Function.prototype;
      this._subs = new I.w0();
    }
    ngOnInit() {
      const _e = xt => {
        this._setInputValue(xt);
        if (this._value !== xt) {
          this._value = xt;
          this._onChange(xt);
          this._onTouched();
        }
        this.changeDetection.markForCheck();
      };
      if (this._picker._bsValue) {
        _e(this._picker._bsValue);
      }
      this._subs.add(this._picker.bsValueChange.subscribe(_e));
      this._subs.add(this._localeService.localeChange.subscribe(() => {
        this._setInputValue(this._value);
      }));
      this._subs.add(this._picker.dateInputFormat$.pipe((0, v.x)()).subscribe(() => {
        this._setInputValue(this._value);
      }));
    }
    ngOnDestroy() {
      this._subs.unsubscribe();
    }
    onKeydownEvent(_e) {
      if (_e.keyCode === 13 || _e.code === "Enter") {
        this.hide();
      }
    }
    _setInputValue(_e) {
      const xt = _e ? (0, C.p6)(_e, this._picker._config.dateInputFormat, this._localeService.currentLocale) : "";
      this._renderer.setProperty(this._elRef.nativeElement, "value", xt);
    }
    onChange(_e) {
      this.writeValue(_e.target.value);
      this._onChange(this._value);
      if (this._picker._config.returnFocusToInput) {
        this._renderer.selectRootElement(this._elRef.nativeElement).focus();
      }
      this._onTouched();
    }
    validate(_e) {
      const xt = _e.value;
      if (xt == null || xt === "") {
        return null;
      }
      if ((0, C.J_)(xt)) {
        if (!(0, C.Rp)(xt)) {
          return {
            bsDate: {
              invalid: xt
            }
          };
        }
        if (this._picker && this._picker.minDate && (0, C.RR)(xt, this._picker.minDate, "date")) {
          this.writeValue(this._picker.minDate);
          return {
            bsDate: {
              minDate: this._picker.minDate
            }
          };
        }
        if (this._picker && this._picker.maxDate && (0, C.Ax)(xt, this._picker.maxDate, "date")) {
          this.writeValue(this._picker.maxDate);
          return {
            bsDate: {
              maxDate: this._picker.maxDate
            }
          };
        }
      }
      return null;
    }
    registerOnValidatorChange(_e) {
      this._validatorChange = _e;
    }
    writeValue(_e) {
      if (_e) {
        const xt = this._localeService.currentLocale;
        if (!(0, C.Kd)(xt)) {
          throw new Error(`Locale "${xt}" is not defined, please add it with "defineLocale(...)"`);
        }
        this._value = (0, C.sG)(_e, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        if (this._picker._config.useUtc) {
          this._value = (0, C.Ji)(this._value);
        }
      } else {
        this._value = undefined;
      }
      this._picker.bsValue = this._value;
    }
    setDisabledState(_e) {
      this._picker.isDisabled = _e;
      if (_e) {
        this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      } else {
        this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
      }
    }
    registerOnChange(_e) {
      this._onChange = _e;
    }
    registerOnTouched(_e) {
      this._onTouched = _e;
    }
    onBlur() {
      this._onTouched();
    }
    hide() {
      this._picker.hide();
      this._renderer.selectRootElement(this._elRef.nativeElement).blur();
      if (this._picker._config.returnFocusToInput) {
        this._renderer.selectRootElement(this._elRef.nativeElement).focus();
      }
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(Np, 1), i.Y36(vL), i.Y36(i.Qsj), i.Y36(i.SBq), i.Y36(i.sBO));
  };
  Xe.ɵdir = i.lG2({
    type: Xe,
    selectors: [["input", "bsDatepicker", ""]],
    hostBindings: function (_e, xt) {
      if (_e & 1) {
        i.NdJ("change", function (wn) {
          return xt.onChange(wn);
        })("keyup.esc", function () {
          return xt.hide();
        })("keydown", function (wn) {
          return xt.onKeydownEvent(wn);
        })("blur", function () {
          return xt.onBlur();
        });
      }
    },
    features: [i._Bn([Ls, sr])]
  });
  return Xe;
})();
let ao = (() => {
  class Xe extends Or {
    constructor() {
      super(...arguments);
      this.displayMonths = 2;
    }
  }
  Xe.ɵfac = function () {
    let $t;
    return function (xt) {
      return ($t ||= i.n5z(Xe))(xt || Xe);
    };
  }();
  Xe.ɵprov = i.Yz7({
    token: Xe,
    factory: Xe.ɵfac,
    providedIn: "root"
  });
  return Xe;
})();
let sl = (() => {
  class Xe {
    constructor(_e, xt, gn, wn, tr) {
      this._config = _e;
      this._elementRef = xt;
      this._renderer = gn;
      this.placement = "bottom";
      this.triggers = "click";
      this.outsideClick = true;
      this.container = "body";
      this.outsideEsc = true;
      this.isDestroy$ = new x.x();
      this.isDisabled = false;
      this.bsValueChange = new i.vpe();
      this._subs = [];
      this._rangeInputFormat$ = new x.x();
      this._datepicker = tr.createLoader(xt, wn, gn);
      Object.assign(this, _e);
      this.onShown = this._datepicker.onShown;
      this.onHidden = this._datepicker.onHidden;
      this.isOpen$ = new E.X(this.isOpen);
    }
    get isOpen() {
      return this._datepicker.isShown;
    }
    set isOpen(_e) {
      this.isOpen$.next(_e);
    }
    set bsValue(_e) {
      var xt;
      if (this._bsValue !== _e) {
        if (_e && (xt = this.bsConfig) !== null && xt !== undefined && xt.initCurrentTime) {
          _e = Es(_e);
        }
        this._bsValue = _e;
        this.bsValueChange.emit(_e);
      }
    }
    get rangeInputFormat$() {
      return this._rangeInputFormat$;
    }
    ngOnInit() {
      this.isDestroy$ = new x.x();
      this._datepicker.listen({
        outsideClick: this.outsideClick,
        outsideEsc: this.outsideEsc,
        triggers: this.triggers,
        show: () => this.show()
      });
      this.setConfig();
    }
    ngOnChanges(_e) {
      var xt;
      var tr;
      if (_e.bsConfig) {
        if ((xt = _e.bsConfig.currentValue) !== null && xt !== undefined && xt.initCurrentTime && _e.bsConfig.currentValue?.initCurrentTime !== _e.bsConfig.previousValue?.initCurrentTime && this._bsValue) {
          this._bsValue = Es(this._bsValue);
          this.bsValueChange.emit(this._bsValue);
        }
        this.setConfig();
        this._rangeInputFormat$.next(_e.bsConfig.currentValue && _e.bsConfig.currentValue.rangeInputFormat);
      }
      if (this._datepickerRef && this._datepickerRef.instance) {
        if (_e.minDate) {
          this._datepickerRef.instance.minDate = this.minDate;
        }
        if (_e.maxDate) {
          this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (_e.datesDisabled) {
          this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (_e.datesEnabled) {
          this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (_e.daysDisabled) {
          this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (_e.isDisabled) {
          if ((tr = this._elementRef) !== null && tr !== undefined && tr.nativeElement) {
            this._elementRef.nativeElement.setAttribute("readonly", this.isDisabled);
          }
          this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (_e.dateCustomClasses) {
          this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
      }
    }
    ngAfterViewInit() {
      this.isOpen$.pipe((0, t.h)(_e => _e !== this.isOpen), (0, M.R)(this.isDestroy$)).subscribe(() => this.toggle());
    }
    show() {
      if (!this._datepicker.isShown) {
        this.setConfig();
        this._datepickerRef = this._datepicker.provide({
          provide: Or,
          useValue: this._config
        }).attach(Ss).to(this.container).position({
          attachment: this.placement
        }).show({
          placement: this.placement
        });
        this.initSubscribes();
      }
    }
    initSubscribes() {
      this._subs.push(this.bsValueChange.subscribe(_e => {
        if (this._datepickerRef) {
          this._datepickerRef.instance.value = _e;
        }
      }));
      if (this._datepickerRef) {
        this._subs.push(this._datepickerRef.instance.valueChange.pipe((0, t.h)(_e => _e && _e[0] && !!_e[1])).subscribe(_e => {
          this.bsValue = _e;
          this.hide();
        }));
      }
    }
    setConfig() {
      this._config = Object.assign({}, this._config, this.bsConfig, {
        value: la(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
        isDisabled: this.isDisabled,
        minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
        maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
        daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
        dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
        datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
        datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
        ranges: ja(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
        maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
        initCurrentTime: this.bsConfig?.initCurrentTime
      });
    }
    hide() {
      if (this.isOpen) {
        this._datepicker.hide();
      }
      for (const _e of this._subs) {
        _e.unsubscribe();
      }
      if (this._config.returnFocusToInput) {
        this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
      }
    }
    toggle() {
      if (this.isOpen) {
        return this.hide();
      }
      this.show();
    }
    unsubscribeSubscriptions() {
      var _e;
      if ((_e = this._subs) !== null && _e !== undefined && _e.length) {
        this._subs.map(xt => xt.unsubscribe());
        this._subs.length = 0;
      }
    }
    ngOnDestroy() {
      this._datepicker.dispose();
      this.isOpen$.next(false);
      if (this.isDestroy$) {
        this.isDestroy$.next(null);
        this.isDestroy$.complete();
      }
      this.unsubscribeSubscriptions();
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(ao), i.Y36(i.SBq), i.Y36(i.Qsj), i.Y36(i.s_b), i.Y36(Z.oj));
  };
  Xe.ɵdir = i.lG2({
    type: Xe,
    selectors: [["", "bsDaterangepicker", ""]],
    inputs: {
      placement: "placement",
      triggers: "triggers",
      outsideClick: "outsideClick",
      container: "container",
      outsideEsc: "outsideEsc",
      isOpen: "isOpen",
      bsValue: "bsValue",
      bsConfig: "bsConfig",
      isDisabled: "isDisabled",
      minDate: "minDate",
      maxDate: "maxDate",
      dateCustomClasses: "dateCustomClasses",
      daysDisabled: "daysDisabled",
      datesDisabled: "datesDisabled",
      datesEnabled: "datesEnabled"
    },
    outputs: {
      onShown: "onShown",
      onHidden: "onHidden",
      bsValueChange: "bsValueChange"
    },
    exportAs: ["bsDaterangepicker"],
    features: [i.TTD]
  });
  return Xe;
})();
const Rr = {
  provide: X.JU,
  useExisting: (0, i.Gpc)(() => Fa),
  multi: true
};
const el = {
  provide: X.Cf,
  useExisting: (0, i.Gpc)(() => Fa),
  multi: true
};
let Fa = (() => {
  class Xe {
    constructor(_e, xt, gn, wn, tr) {
      this._picker = _e;
      this._localeService = xt;
      this._renderer = gn;
      this._elRef = wn;
      this.changeDetection = tr;
      this._onChange = Function.prototype;
      this._onTouched = Function.prototype;
      this._validatorChange = Function.prototype;
      this._subs = new I.w0();
    }
    ngOnInit() {
      if (this._picker._bsValue) {
        (xt => {
          this._setInputValue(xt);
          if (this._value !== xt) {
            this._value = xt;
            this._onChange(xt);
            this._onTouched();
          }
          this.changeDetection.markForCheck();
        })(this._picker._bsValue);
      }
      this._subs.add(this._picker.bsValueChange.subscribe(xt => {
        this._setInputValue(xt);
        if (this._value !== xt) {
          this._value = xt;
          this._onChange(xt);
          this._onTouched();
        }
        this.changeDetection.markForCheck();
      }));
      this._subs.add(this._localeService.localeChange.subscribe(() => {
        this._setInputValue(this._value);
      }));
      this._subs.add(this._picker.rangeInputFormat$.pipe((0, v.x)()).subscribe(() => {
        this._setInputValue(this._value);
      }));
    }
    ngOnDestroy() {
      this._subs.unsubscribe();
    }
    onKeydownEvent(_e) {
      if (_e.keyCode === 13 || _e.code === "Enter") {
        this.hide();
      }
    }
    _setInputValue(_e) {
      let xt = "";
      if (_e) {
        const gn = _e[0] ? (0, C.p6)(_e[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale) : "";
        const wn = _e[1] ? (0, C.p6)(_e[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale) : "";
        xt = gn && wn ? gn + this._picker._config.rangeSeparator + wn : "";
      }
      this._renderer.setProperty(this._elRef.nativeElement, "value", xt);
    }
    onChange(_e) {
      this.writeValue(_e.target.value);
      this._onChange(this._value);
      if (this._picker._config.returnFocusToInput) {
        this._renderer.selectRootElement(this._elRef.nativeElement).focus();
      }
      this._onTouched();
    }
    validate(_e) {
      let xt = _e.value;
      const gn = [];
      if (xt == null || !(0, C.kJ)(xt)) {
        return null;
      }
      xt = xt.slice().sort((Do, Ji) => Do.getTime() - Ji.getTime());
      const wn = (0, C.Rp)(xt[0]);
      const tr = (0, C.Rp)(xt[1]);
      if (wn) {
        if (tr) {
          if (this._picker && this._picker.minDate && (0, C.RR)(xt[0], this._picker.minDate, "date")) {
            xt[0] = this._picker.minDate;
            gn.push({
              bsDate: {
                minDate: this._picker.minDate
              }
            });
          }
          if (this._picker && this._picker.maxDate && (0, C.Ax)(xt[1], this._picker.maxDate, "date")) {
            xt[1] = this._picker.maxDate;
            gn.push({
              bsDate: {
                maxDate: this._picker.maxDate
              }
            });
          }
          if (gn.length > 0) {
            this.writeValue(xt);
            return gn;
          } else {
            return null;
          }
        } else {
          return {
            bsDate: {
              invalid: xt[1]
            }
          };
        }
      } else {
        return {
          bsDate: {
            invalid: xt[0]
          }
        };
      }
    }
    registerOnValidatorChange(_e) {
      this._validatorChange = _e;
    }
    writeValue(_e) {
      if (_e) {
        const xt = this._localeService.currentLocale;
        if (!(0, C.Kd)(xt)) {
          throw new Error(`Locale "${xt}" is not defined, please add it with "defineLocale(...)"`);
        }
        let wn = [];
        if (typeof _e == "string") {
          const tr = this._picker._config.rangeSeparator.trim();
          wn = _e.replace(/[^-]/g, "").length > 1 ? _e.split(this._picker._config.rangeSeparator) : _e.split(tr.length > 0 ? tr : this._picker._config.rangeSeparator).map(Do => Do.trim());
        }
        if (Array.isArray(_e)) {
          wn = _e;
        }
        this._value = wn.map(tr => this._picker._config.useUtc ? (0, C.Ji)((0, C.sG)(tr, this._picker._config.rangeInputFormat, this._localeService.currentLocale)) : (0, C.sG)(tr, this._picker._config.rangeInputFormat, this._localeService.currentLocale)).map(tr => isNaN(tr.valueOf()) ? undefined : tr);
      } else {
        this._value = undefined;
      }
      this._picker.bsValue = this._value;
    }
    setDisabledState(_e) {
      this._picker.isDisabled = _e;
      if (_e) {
        this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      } else {
        this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
      }
    }
    registerOnChange(_e) {
      this._onChange = _e;
    }
    registerOnTouched(_e) {
      this._onTouched = _e;
    }
    onBlur() {
      this._onTouched();
    }
    hide() {
      this._picker.hide();
      this._renderer.selectRootElement(this._elRef.nativeElement).blur();
      if (this._picker._config.returnFocusToInput) {
        this._renderer.selectRootElement(this._elRef.nativeElement).focus();
      }
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)(i.Y36(sl, 1), i.Y36(vL), i.Y36(i.Qsj), i.Y36(i.SBq), i.Y36(i.sBO));
  };
  Xe.ɵdir = i.lG2({
    type: Xe,
    selectors: [["input", "bsDaterangepicker", ""]],
    hostBindings: function (_e, xt) {
      if (_e & 1) {
        i.NdJ("change", function (wn) {
          return xt.onChange(wn);
        })("keyup.esc", function () {
          return xt.hide();
        })("keydown", function (wn) {
          return xt.onKeydownEvent(wn);
        })("blur", function () {
          return xt.onBlur();
        });
      }
    },
    features: [i._Bn([Rr, el])]
  });
  return Xe;
})();
export let kn = (() => {
  class Xe {
    static forRoot() {
      return {
        ngModule: Xe,
        providers: [Z.oj, w.sA, Lr, Zs, fa, vL, S.lx]
      };
    }
  }
  Xe.ɵfac = function (_e) {
    return new (_e || Xe)();
  };
  Xe.ɵmod = i.oAB({
    type: Xe
  });
  Xe.ɵinj = i.cJS({
    imports: [B.ez, F.z8, S.Db]
  });
  return Xe;
})();