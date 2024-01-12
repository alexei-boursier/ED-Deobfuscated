import * as i from "15861";
import * as t from "94650";
import * as b from "36895";
import * as k from "24006";
import * as M from "77579";
const C = ["root"];
const w = ["pdfSecondaryToolbarComponent"];
const S = ["pdfsidebar"];
function x(at, Je) {
  if (at & 1) {
    const be = t.EpF();
    t.TgZ(0, "div", 2)(1, "div", 3)(2, "button", 4);
    t.O4$();
    t.TgZ(3, "svg", 5);
    t._UZ(4, "path", 6);
    t.qZA();
    t.kcU();
    t.TgZ(5, "span", 7);
    t._uU(6, "Presentation Mode");
    t.qZA()();
    t.TgZ(7, "button", 8);
    t.O4$();
    t.TgZ(8, "svg", 5);
    t._UZ(9, "path", 9);
    t.qZA();
    t.kcU();
    t.TgZ(10, "span", 10);
    t._uU(11, "Open");
    t.qZA()();
    t.TgZ(12, "button", 11);
    t.O4$();
    t.TgZ(13, "svg", 5);
    t._UZ(14, "path", 12);
    t.qZA();
    t.kcU();
    t.TgZ(15, "span", 13);
    t._uU(16, "Print");
    t.qZA()();
    t.TgZ(17, "button", 14);
    t.O4$();
    t.TgZ(18, "svg", 5);
    t._UZ(19, "path", 15);
    t.qZA();
    t.kcU();
    t.TgZ(20, "span", 16);
    t._uU(21, "Download");
    t.qZA()();
    t.TgZ(22, "button", 17);
    t.O4$();
    t.TgZ(23, "svg", 18);
    t._UZ(24, "path", 19);
    t.qZA();
    t.kcU();
    t.TgZ(25, "span", 20);
    t._uU(26, "Go to First Page");
    t.qZA()();
    t.TgZ(27, "button", 21);
    t.NdJ("click", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.previousPage());
    });
    t.O4$();
    t.TgZ(28, "svg", 18);
    t._UZ(29, "path", 22);
    t.qZA();
    t.kcU();
    t.TgZ(30, "span", 23);
    t._uU(31, "Go to Previous Page");
    t.qZA()();
    t.TgZ(32, "button", 24);
    t.NdJ("click", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.nextPage());
    });
    t.O4$();
    t.TgZ(33, "svg", 18);
    t._UZ(34, "path", 25);
    t.qZA();
    t.kcU();
    t.TgZ(35, "span", 26);
    t._uU(36, "Go to Next Page");
    t.qZA()();
    t.TgZ(37, "button", 27);
    t.O4$();
    t.TgZ(38, "svg", 18);
    t._UZ(39, "path", 28);
    t.qZA();
    t.kcU();
    t.TgZ(40, "span", 29);
    t._uU(41, "Go to Last Page");
    t.qZA()();
    t.TgZ(42, "button", 30);
    t.O4$();
    t.TgZ(43, "svg", 5);
    t._UZ(44, "path", 31);
    t.qZA();
    t.kcU();
    t.TgZ(45, "span", 32);
    t._uU(46, "Rotate Clockwise");
    t.qZA()();
    t.TgZ(47, "button", 33);
    t.O4$();
    t.TgZ(48, "svg", 5);
    t._UZ(49, "path", 34);
    t.qZA();
    t.kcU();
    t.TgZ(50, "span", 35);
    t._uU(51, "Rotate Counterclockwise");
    t.qZA()();
    t.TgZ(52, "button", 36);
    t.O4$();
    t.TgZ(53, "svg", 5);
    t._UZ(54, "path", 37);
    t.qZA();
    t.kcU();
    t.TgZ(55, "span", 38);
    t._uU(56, "Text Selection Tool");
    t.qZA()();
    t.TgZ(57, "button", 39);
    t.O4$();
    t.TgZ(58, "svg", 5);
    t._UZ(59, "path", 40);
    t.qZA();
    t.kcU();
    t.TgZ(60, "span", 41);
    t._uU(61, "Hand Tool");
    t.qZA()();
    t.TgZ(62, "button", 42);
    t.O4$();
    t.TgZ(63, "svg", 43);
    t._UZ(64, "path", 44);
    t.qZA();
    t.kcU();
    t.TgZ(65, "span", 45);
    t._uU(66, "Page Scrolling");
    t.qZA()();
    t.TgZ(67, "button", 46);
    t.O4$();
    t.TgZ(68, "svg", 43);
    t._UZ(69, "path", 44);
    t.qZA();
    t.kcU();
    t.TgZ(70, "span", 47);
    t._uU(71, "Vertical Scrolling");
    t.qZA()();
    t.TgZ(72, "button", 48);
    t.O4$();
    t.TgZ(73, "svg", 43);
    t._UZ(74, "path", 49);
    t.qZA();
    t.kcU();
    t.TgZ(75, "span", 50);
    t._uU(76, "Horizontal Scrolling");
    t.qZA()();
    t.TgZ(77, "button", 51);
    t.O4$();
    t.TgZ(78, "svg", 43);
    t._UZ(79, "path", 52);
    t.qZA();
    t.kcU();
    t.TgZ(80, "span", 53);
    t._uU(81, "Wrapped Scrolling");
    t.qZA()();
    t.TgZ(82, "button", 54);
    t.NdJ("click", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.onSpreadChange("off"));
    });
    t.O4$();
    t.TgZ(83, "svg", 55);
    t._UZ(84, "path", 56);
    t.qZA();
    t.kcU();
    t.TgZ(85, "span", 57);
    t._uU(86, "No Spreads");
    t.qZA()();
    t.TgZ(87, "button", 58);
    t.NdJ("click", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.onSpreadChange("odd"));
    });
    t.O4$();
    t.TgZ(88, "svg", 43);
    t._UZ(89, "path", 59);
    t.qZA();
    t.kcU();
    t.TgZ(90, "span", 60);
    t._uU(91, "Odd Spreads");
    t.qZA()();
    t.TgZ(92, "button", 61);
    t.NdJ("click", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.onSpreadChange("even"));
    });
    t.O4$();
    t.TgZ(93, "svg", 43);
    t._UZ(94, "path", 62);
    t.qZA();
    t.kcU();
    t.TgZ(95, "span", 63);
    t._uU(96, "Even Spreads");
    t.qZA()();
    t.TgZ(97, "button", 64);
    t.O4$();
    t.TgZ(98, "svg", 65);
    t._UZ(99, "path", 66)(100, "path", 67)(101, "circle", 68);
    t.qZA();
    t.kcU();
    t.TgZ(102, "span", 69);
    t._uU(103, "Document Properties…");
    t.qZA()()()();
  }
  if (at & 2) {
    const be = t.oxw();
    t.Udp("top", be.secondaryToolbarTop)("transform", "scale(" + be.mobileFriendlyZoomScale + ")")("transform-origin", "right top");
    t.xp6(2);
    t.ekj("invisible", !be.showPresentationModeButton);
    t.xp6(5);
    t.ekj("invisible", !be.showOpenFileButton);
    t.xp6(5);
    t.ekj("invisible", !be.showPrintButton);
    t.xp6(5);
    t.ekj("invisible", !be.showDownloadButton);
    t.xp6(5);
    t.ekj("invisible", !be.showPagingButtons);
    t.xp6(5);
    t.ekj("invisible", !be.showPagingButtons);
    t.Q6J("disabled", be.disablePreviousPage);
    t.xp6(5);
    t.ekj("invisible", !be.showPagingButtons);
    t.Q6J("disabled", be.disableNextPage);
    t.xp6(5);
    t.ekj("invisible", !be.showPagingButtons);
    t.xp6(5);
    t.ekj("invisible", !be.showRotateButton);
    t.xp6(5);
    t.ekj("invisible", !be.showRotateButton);
    t.xp6(5);
    t.ekj("invisible", !be.showHandToolButton);
    t.xp6(5);
    t.ekj("invisible", !be.showHandToolButton);
    t.xp6(5);
    t.ekj("invisible", !be.showScrollingButton);
    t.xp6(5);
    t.ekj("invisible", !be.showScrollingButton);
    t.xp6(5);
    t.ekj("invisible", !be.showScrollingButton);
    t.xp6(5);
    t.ekj("invisible", !be.showScrollingButton);
    t.xp6(5);
    t.ekj("invisible", !be.showSpreadButton);
    t.xp6(5);
    t.ekj("invisible", !be.showSpreadButton);
    t.xp6(5);
    t.ekj("invisible", !be.showSpreadButton);
    t.xp6(5);
    t.ekj("invisible", !be.showPropertiesButton);
  }
}
const U = ["thumbnailViewTemplate"];
function B(at, Je) {
  if (at & 1) {
    t.Hsn(0, 0, ["*ngTemplateOutlet", "customThumbnail ? customThumbnail : defaultThumbnail"]);
  }
}
function F(at, Je) {
  if (at & 1) {
    t.TgZ(0, "a", 8)(1, "div", 9);
    t._UZ(2, "div", 10);
    t.qZA()();
  }
}
const Z = ["*"];
function X(at, Je) {
  if (at & 1) {
    t.Hsn(0, 0, ["*ngTemplateOutlet", "customSidebar ? customSidebar : defaultSidebar"]);
  }
}
function le(at, Je) {
  if (at & 1) {
    const be = t.EpF();
    t.TgZ(0, "div", 2)(1, "div", 3);
    t._UZ(2, "pdf-sidebar-toolbar", 4);
    t.qZA();
    t.TgZ(3, "pdf-sidebar-content", 5);
    t.NdJ("thumbnailDrawn", function (an) {
      t.CHM(be);
      const Gn = t.oxw();
      return t.KtG(Gn.thumbnailDrawn.emit(an));
    });
    t.qZA();
    t._UZ(4, "div", 6);
    t.qZA();
  }
  if (at & 2) {
    const be = t.oxw();
    t.Udp("top", be.sidebarPositionTop);
    t.xp6(1);
    t.Udp("display", be.hideSidebarToolbar ? "none" : "");
    t.xp6(1);
    t.Q6J("mobileFriendlyZoomScale", be.mobileFriendlyZoomScale);
    t.xp6(1);
    t.Q6J("customThumbnail", be.customThumbnail)("hideSidebarToolbar", be.hideSidebarToolbar)("mobileFriendlyZoomScale", be.mobileFriendlyZoomScale);
  }
}
function fe(at, Je) {
  if (at & 1) {
    t.TgZ(0, "div", 2)(1, "button", 3)(2, "span", 4);
    t._uU(3, "Text");
    t.qZA();
    t.O4$();
    t.TgZ(4, "svg", 5);
    t._UZ(5, "path", 6);
    t.qZA()();
    t.kcU();
    t.TgZ(6, "button", 7)(7, "span", 8);
    t._uU(8, "Draw");
    t.qZA();
    t.O4$();
    t.TgZ(9, "svg", 9)(10, "g")(11, "g", 10);
    t._UZ(12, "path", 11);
    t.qZA()()()()();
  }
}
function q(at, Je) {
  if (at & 1) {
    t.TgZ(0, "div", 2);
    t._UZ(1, "pdf-search-input-field")(2, "pdf-find-previous")(3, "pdf-find-next");
    t.qZA();
  }
}
function j(at, Je) {
  if (at & 1) {
    t.TgZ(0, "div", 3);
    t.GkF(1, 0);
    t.qZA();
  }
  if (at & 2) {
    const be = t.oxw();
    const Bt = t.MAs(4);
    t.Udp("transform", "scale(" + be.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("left", be.findbarLeft)("top", be.findbarTop);
    t.ekj("invisible", !be.showFindButton);
    t.xp6(1);
    t.Q6J("ngTemplateOutlet", be.customFindbarButtons ? be.customFindbarButtons : Bt);
  }
}
function G(at, Je) {
  if (at & 1) {
    t._UZ(0, "pdf-find-input-area", 4)(1, "pdf-find-highlight-all")(2, "pdf-find-match-case")(3, "pdf-find-current-page-only")(4, "pdf-find-range")(5, "pdf-find-entire-word")(6, "pdf-find-entire-phrase")(7, "pdf-find-ignore-accents")(8, "pdf-find-fuzzily")(9, "pdf-find-results-count")(10, "pdf-findbar-message-container");
  }
  if (at & 2) {
    const be = t.oxw();
    t.Q6J("customFindbarInputArea", be.customFindbarInputArea);
    t.xp6(1);
    t.ekj("hidden", !be.showFindHighlightAll);
    t.xp6(1);
    t.ekj("hidden", !be.showFindMatchCase);
    t.xp6(1);
    t.ekj("hidden", !be.showFindCurrentPageOnly);
    t.xp6(1);
    t.ekj("hidden", !be.showFindPageRange);
    t.xp6(1);
    t.ekj("hidden", !be.showFindEntireWord);
    t.xp6(1);
    t.ekj("hidden", !be.showFindEntirePhrase);
    t.xp6(1);
    t.ekj("hidden", !be.showFindIgnoreAccents);
    t.xp6(1);
    t.ekj("hidden", !be.showFindFuzzySearch);
    t.xp6(1);
    t.ekj("hidden", !be.showFindResultsCount);
    t.xp6(1);
    t.ekj("hidden", !be.showFindMessages);
  }
}
const W = ["button"];
const Pe = "button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}";
const Le = ["button1"];
const he = ["button2"];
function pe(at, Je) {
  if (at & 1) {
    const be = t.EpF();
    t.TgZ(0, "button", 2, 3);
    t.NdJ("click", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.rotateCW());
    });
    t.O4$();
    t.TgZ(2, "svg", 4);
    t._UZ(3, "path", 5);
    t.qZA()();
  }
  if (at & 2) {
    const be = t.oxw();
    t.ekj("invisible", !be.showRotateButton);
    t.Q6J("disabled", be.disableRotate);
  }
}
function re(at, Je) {
  if (at & 1) {
    const be = t.EpF();
    t.TgZ(0, "button", 6, 7);
    t.NdJ("click", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.rotateCCW());
    });
    t.O4$();
    t.TgZ(2, "svg", 4);
    t._UZ(3, "path", 8);
    t.qZA()();
  }
  if (at & 2) {
    const be = t.oxw();
    t.ekj("invisible", !be.showRotateButton);
    t.Q6J("disabled", be.disableRotate);
  }
}
const Ue = ["sizeSelector"];
function ot(at, Je) {
  if (at & 1) {
    t.TgZ(0, "option", 5);
    t._uU(1);
    t.qZA();
  }
  if (at & 2) {
    const be = Je.$implicit;
    t.Q6J("id", be.id);
    t.uIk("value", be.value)("data-l10n-id", be.dataL10nId)("data-l10n-args", be.dataL10nArgs);
    t.xp6(1);
    t.hij(" ", be.displayValue, " ");
  }
}
function st(at, Je) {
  if (at & 1) {
    t.Hsn(0, 0, ["*ngTemplateOutlet", "customToolbar ? customToolbar : defaultToolbar"]);
  }
}
function rt(at, Je) {
  if (at & 1) {
    t.TgZ(0, "div", 7)(1, "div", 8);
    t._UZ(2, "pdf-toggle-sidebar", 9)(3, "pdf-find-button", 10)(4, "pdf-paging-area", 11);
    t.qZA();
    t._UZ(5, "pdf-zoom-toolbar", 12);
    t.TgZ(6, "div", 13);
    t._UZ(7, "pdf-hand-tool", 14)(8, "pdf-select-tool", 15)(9, "pdf-rotate-page", 16)(10, "pdf-rotate-page", 16)(11, "pdf-presentation-mode", 17)(12, "pdf-open-file", 18)(13, "pdf-print", 19)(14, "pdf-download", 20)(15, "pdf-editor", 21)(16, "pdf-toggle-secondary-toolbar", 22);
    t.qZA()();
  }
  if (at & 2) {
    const be = t.oxw();
    t.xp6(2);
    t.Q6J("showSidebarButton", be.showSidebarButton);
    t.xp6(1);
    t.Q6J("showFindButton", be.showFindButton)("textLayer", be.textLayer);
    t.xp6(1);
    t.Q6J("showPagingButtons", be.showPagingButtons);
    t.xp6(1);
    t.Q6J("showZoomButtons", be.showZoomButtons)("zoomLevels", be.zoomLevels);
    t.xp6(2);
    t.Q6J("showHandToolButton", be.showHandToolButton);
    t.xp6(1);
    t.Q6J("showSelectToolButton", be.showHandToolButton);
    t.xp6(1);
    t.Q6J("showRotateButton", be.showRotateButton)("clockwise", true)("counterClockwise", false);
    t.xp6(1);
    t.Q6J("showRotateButton", be.showRotateButton)("clockwise", false)("counterClockwise", true);
    t.xp6(1);
    t.Q6J("showPresentationModeButton", be.showPresentationModeButton);
    t.xp6(1);
    t.Q6J("showOpenFileButton", be.showOpenFileButton);
    t.xp6(1);
    t.Q6J("showPrintButton", be.showPrintButton);
    t.xp6(1);
    t.Q6J("showDownloadButton", be.showDownloadButton);
    t.xp6(1);
    t.Q6J("showEditor", be.showEditor);
    t.xp6(1);
    t.Q6J("showSecondaryToolbarButton", be.showSecondaryToolbarButton);
  }
}
function Oe(at, Je) {
  if (at & 1) {
    t._UZ(0, "pdf-dark-theme");
  }
}
function Ee(at, Je) {
  if (at & 1) {
    t._UZ(0, "pdf-light-theme");
  }
}
function ke(at, Je) {
  if (at & 1) {
    t._UZ(0, "pdf-acroform-dark-theme");
  }
}
function Be(at, Je) {
  if (at & 1) {
    t._UZ(0, "pdf-acroform-default-theme");
  }
}
function De(at, Je) {
  if (at & 1) {
    t.Hsn(0, 0, ["*ngTemplateOutlet", "customPdfViewer ? customPdfViewer : defaultPdfViewer"]);
  }
}
function Qe(at, Je) {
  if (at & 1) {
    t.Hsn(0, 1, ["*ngTemplateOutlet", "customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar"]);
  }
}
function It(at, Je) {
  if (at & 1) {
    t.TgZ(0, "div", 39);
    t.YNc(1, Qe, 1, 0, "ng-content", 2);
    t.qZA();
  }
  if (at & 2) {
    const be = t.oxw(2);
    const Bt = t.MAs(9);
    t.xp6(1);
    t.Q6J("ngTemplateOutlet", be.customFreeFloatingBar ? be.customFreeFloatingBar : Bt);
  }
}
function Yt(at, Je) {
  if (at & 1) {
    t.TgZ(0, "div", 40);
    t._uU(1);
    t.ALo(2, "async");
    t.ALo(3, "translate");
    t.qZA();
  }
  if (at & 2) {
    t.xp6(1);
    t.hij(" ", t.lcZ(2, 1, t.xi3(3, 3, "unverified_signature_warning", "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.")), " ");
  }
}
function Dn(at, Je) {
  if (at & 1) {
    t.TgZ(0, "div", 41);
    t._uU(1);
    t.ALo(2, "async");
    t.ALo(3, "translate");
    t.qZA();
  }
  if (at & 2) {
    t.xp6(1);
    t.hij(" ", t.lcZ(2, 1, t.xi3(3, 3, "modified_background_warning", "This PDF is rendered with a custom background. It does not look the way its author intended it to look.")), " ");
  }
}
function Et(at, Je) {
  if (at & 1) {
    const be = t.EpF();
    t.TgZ(0, "div", 5, 6)(2, "div", 7)(3, "div", 8)(4, "div", 9);
    t.NdJ("resize", function () {
      t.CHM(be);
      const an = t.oxw();
      return t.KtG(an.onResize());
    }, false, t.Jf7);
    t.YNc(5, It, 2, 1, "div", 10);
    t.TgZ(6, "pdf-sidebar", 11, 12);
    t.NdJ("thumbnailDrawn", function (an) {
      t.CHM(be);
      const Gn = t.oxw();
      return t.KtG(Gn.thumbnailDrawn.emit(an));
    });
    t.qZA();
    t.TgZ(8, "div", 13);
    t._UZ(9, "pdf-dummy-components");
    t.TgZ(10, "pdf-toolbar", 14);
    t.NdJ("onToolbarLoaded", function (an) {
      t.CHM(be);
      const Gn = t.oxw();
      return t.KtG(Gn.onToolbarLoaded(an));
    });
    t.qZA();
    t.TgZ(11, "div", 15)(12, "div", 16)(13, "div", 17)(14, "label", 18);
    t._uU(15, "Font Color");
    t.qZA();
    t._UZ(16, "input", 19);
    t.qZA();
    t.TgZ(17, "div", 17)(18, "label", 20);
    t._uU(19, "Font Size");
    t.qZA();
    t._UZ(20, "input", 21);
    t.qZA()()();
    t.TgZ(21, "div", 22)(22, "div", 16)(23, "div", 17)(24, "label", 23);
    t._uU(25, "Color");
    t.qZA();
    t._UZ(26, "input", 24);
    t.qZA();
    t.TgZ(27, "div", 17)(28, "label", 25);
    t._uU(29, "Thickness");
    t.qZA();
    t._UZ(30, "input", 26);
    t.qZA();
    t.TgZ(31, "div", 17)(32, "label", 27);
    t._uU(33, "Opacity");
    t.qZA();
    t._UZ(34, "input", 28);
    t.qZA()()();
    t.TgZ(35, "pdf-secondary-toolbar", 29, 30);
    t.NdJ("spreadChange", function (an) {
      t.CHM(be);
      const Gn = t.oxw();
      return t.KtG(Gn.onSpreadChange(an));
    })("secondaryMenuIsEmpty", function (an) {
      t.CHM(be);
      const Gn = t.oxw();
      return t.KtG(Gn.onSecondaryMenuIsEmpty(an));
    });
    t.qZA();
    t._UZ(37, "pdf-findbar", 31)(38, "pdf-context-menu");
    t.TgZ(39, "div", 32);
    t.YNc(40, Yt, 4, 6, "div", 33);
    t.YNc(41, Dn, 4, 6, "div", 34);
    t.TgZ(42, "div", 35);
    t.NdJ("dblclick", function (an) {
      t.CHM(be);
      const Gn = t.oxw();
      return t.KtG(Gn.zoomToPageWidth(an));
    });
    t.qZA()();
    t._UZ(43, "pdf-error-message");
    t.qZA();
    t.TgZ(44, "div", 36);
    t._UZ(45, "pdf-password-dialog")(46, "pdf-document-properties-dialog")(47, "pdf-prepare-printing-dialog");
    t.qZA()();
    t._UZ(48, "input", 37)(49, "div", 38);
    t.qZA()()();
  }
  if (at & 2) {
    const be = t.oxw();
    t.Udp("height", be.minHeight ? be.minHeight : be.height);
    t.xp6(3);
    t.Udp("background-color", be.backgroundColor);
    t.xp6(2);
    t.Q6J("ngIf", be.showFreeFloatingBar);
    t.xp6(1);
    t.Q6J("sidebarVisible", be.sidebarVisible || false)("showSidebarButton", be.showSidebarButton)("customSidebar", be.customSidebar)("customThumbnail", be.customThumbnail)("mobileFriendlyZoomScale", be.mobileFriendlyZoomScale)("sidebarPositionTop", be.sidebarPositionTop);
    t.xp6(2);
    t.ekj("toolbar-hidden", !be.primaryMenuVisible);
    t.xp6(2);
    t.Q6J("customToolbar", be.customToolbar)("mobileFriendlyZoomScale", be.mobileFriendlyZoomScale)("primaryMenuVisible", be.primaryMenuVisible)("showDownloadButton", be.showDownloadButton)("showEditor", be.showEditor)("showFindButton", be.showFindButton)("showHandToolButton", be.showHandToolButton)("showOpenFileButton", be.showOpenFileButton)("showPrintButton", be.showPrintButton && be.enablePrint)("showPagingButtons", be.showPagingButtons)("showPresentationModeButton", be.showPresentationModeButton)("showRotateButton", be.showRotateButton)("showSecondaryToolbarButton", be.showSecondaryToolbarButton && !be.hideKebabMenuForSecondaryToolbar)("showSidebarButton", be.showSidebarButton)("showZoomButtons", be.showZoomButtons)("textLayer", be.textLayer)("toolbarMarginTop", be.toolbarMarginTop)("toolbarWidth", be.toolbarWidth)("zoomLevels", be.zoomLevels);
    t.xp6(25);
    t.Q6J("customSecondaryToolbar", be.customSecondaryToolbar)("secondaryToolbarTop", be.secondaryToolbarTop)("mobileFriendlyZoomScale", be.mobileFriendlyZoomScale)("showPresentationModeButton", be.showPresentationModeButton)("showOpenFileButton", be.showOpenFileButton)("showPrintButton", be.showPrintButton && be.enablePrint)("showDownloadButton", be.showDownloadButton)("showPagingButtons", be.showPagingButtons)("showRotateButton", be.showRotateButton)("showHandToolButton", be.showHandToolButton)("showScrollingButton", be.showScrollingButton)("showSpreadButton", be.showSpreadButton)("showPropertiesButton", be.showPropertiesButton);
    t.xp6(2);
    t.Q6J("findbarLeft", be.findbarLeft)("findbarTop", be.findbarTop)("mobileFriendlyZoomScale", be.mobileFriendlyZoomScale)("showFindButton", be.showFindButton || false)("customFindbarInputArea", be.customFindbarInputArea)("customFindbarButtons", be.customFindbarButtons)("showFindCurrentPageOnly", be.showFindCurrentPageOnly)("showFindEntirePhrase", be.showFindEntirePhrase)("showFindEntireWord", be.showFindEntireWord)("showFindFuzzySearch", be.showFindFuzzySearch)("showFindHighlightAll", be.showFindHighlightAll)("showFindIgnoreAccents", be.showFindIgnoreAccents)("showFindMatchCase", be.showFindMatchCase)("showFindMessages", be.showFindMessages)("showFindPageRange", be.showFindPageRange)("showFindResultsCount", be.showFindResultsCount);
    t.xp6(2);
    t.Udp("top", be.viewerPositionTop)("background-color", be.backgroundColor);
    t.xp6(1);
    t.Q6J("ngIf", be.hasSignature && be.showUnverifiedSignatures);
    t.xp6(1);
    t.Q6J("ngIf", be.pdfBackground);
  }
}
function lt(at, Je) {}
const et = ["*", "*"];
var St = (() => {
  (at = St ||= {})[at.FOUND = 0] = "FOUND";
  at[at.NOT_FOUND = 1] = "NOT_FOUND";
  at[at.WRAPPED = 2] = "WRAPPED";
  at[at.PENDING = 3] = "PENDING";
  return St;
  var at;
})();
const ve = typeof window !== "undefined" && !!window.MSInputMethodContext && !!document.documentMode;
const Lt = typeof navigator === "undefined" || /Edge\/\d./i.test(navigator.userAgent);
const ft = typeof ReadableStream === "undefined" || typeof Promise.allSettled === "undefined";
function ne(at) {
  if (at && at.includes("bleeding-edge")) {
    return "3.4.406";
  } else {
    return "3.3.491";
  }
}
function me(at) {
  if (at.includes("://")) {
    return at;
  } else {
    return `./${at}`;
  }
}
let Ut = {
  needsES5: ve || Lt || ft,
  annotationEditorMode: 0,
  annotationMode: 2,
  defaultZoomDelay: 400,
  cursorToolOnLoad: 0,
  defaultUrl: "",
  defaultZoomValue: undefined,
  disableHistory: false,
  disablePageLabels: false,
  enablePermissions: false,
  docBaseUrl: "",
  enablePrintAutoRotate: true,
  externalLinkRel: "noopener noreferrer nofollow",
  externalLinkTarget: 0,
  historyUpdateUrl: false,
  ignoreDestinationZoom: false,
  imageResourcesPath: "./images/",
  maxCanvasPixels: 16777216,
  forcePageColors: false,
  pageColorsBackground: "Canvas",
  pageColorsForeground: "CanvasText",
  pdfBugEnabled: false,
  printResolution: 150,
  rangeChunkSize: 65536,
  removePageBorders: false,
  renderer: "canvas",
  renderForms: true,
  enableXfa: true,
  fontExtraProperties: false,
  sidebarViewOnLoad: -1,
  scrollModeOnLoad: -1,
  spreadModeOnLoad: -1,
  textLayerMode: 1,
  useOnlyCssZoom: false,
  viewOnLoad: 0,
  cMapPacked: true,
  cMapUrl: () => `../${me(Ut.assetsFolder)}/cmaps/`,
  disableAutoFetch: false,
  disableFontFace: false,
  disableRange: false,
  disableStream: false,
  isEvalSupported: true,
  isOffscreenCanvasSupported: true,
  maxImageSize: -1,
  pdfBug: false,
  postMessageTransfers: true,
  verbosity: 1,
  workerPort: null,
  assetsFolder: "assets",
  sandboxBundleSrc: () => Ut.needsES5 ? `${me(Ut.assetsFolder)}/pdf.sandbox-${ne(me(Ut.assetsFolder))}-es5.js` : `${me(Ut.assetsFolder)}/pdf.sandbox-${ne(me(Ut.assetsFolder))}.js`,
  workerSrc: () => Ut.needsES5 ? `${me(Ut.assetsFolder)}/pdf.worker-${ne(me(Ut.assetsFolder))}-es5.js` : `${me(Ut.assetsFolder)}/pdf.worker-${ne(me(Ut.assetsFolder))}.js`,
  standardFontDataUrl: () => `../${me(Ut.assetsFolder)}/standard_fonts/`,
  doubleTapZoomFactor: "page-width",
  doubleTapZoomsInHandMode: true,
  doubleTapZoomsInTextSelectionMode: false,
  doubleTapResetsZoomOnSecondDoubleTap: false,
  enableScripting: true,
  defaultCacheSize: 50,
  passwordPrompt: undefined,
  locale: navigator.language || "en-US"
};
if (typeof window !== "undefined") {
  if (window.pdfDefaultOptions) {
    Ut = window.pdfDefaultOptions;
  } else {
    window.pdfDefaultOptions = Ut;
  }
}
var Ze = (() => {
  (at = Ze ||= {})[at.THUMBS = 1] = "THUMBS";
  at[at.OUTLINE = 2] = "OUTLINE";
  at[at.ATTACHMENTS = 3] = "ATTACHMENTS";
  at[at.LAYERS = 4] = "LAYERS";
  return Ze;
  var at;
})();
var pt = (() => {
  (at = pt ||= {})[at.ERRORS = 0] = "ERRORS";
  at[at.WARNINGS = 1] = "WARNINGS";
  at[at.INFOS = 5] = "INFOS";
  return pt;
  var at;
})();
const yt = ["toolbarViewer", "numPages", "pageNumber", "scaleSelectContainer", "customScaleOption", "scaleSelect", "scrollPage", "previous", "next", "zoomIn", "zoomOut", "viewFind", "openFile", "print", "presentationMode", "download", "viewBookmark", "secondaryToolbar", "secondaryToolbarToggle", "secondaryToolbarButtonContainer", "secondaryPresentationMode", "secondaryOpenFile", "secondaryPrint", "secondaryDownload", "secondaryViewBookmark", "firstPage", "lastPage", "pageRotateCw", "pageRotateCcw", "cursorSelectTool", "cursorHandTool", "scrollVertical", "scrollHorizontal", "scrollWrapped", "spreadNone", "spreadOdd", "spreadEven", "documentProperties", "contextFirstPage", "contextLastPage", "contextPageRotateCw", "contextPageRotateCcw", "currentOutlineItem", "outerContainer", "viewerContainer", "sidebarToggle", "viewThumbnail", "viewOutline", "viewAttachments", "thumbnailView", "outlineView", "attachmentsView", "outerContainer", "sidebarResizer", "outlineOptionsContainer", "findbar", "viewFind", "findInput", "findInputMultiline", "findHighlightAll", "findCurrentPage", "findRange", "findMatchCase", "findMatchDiacritics", "findEntireWord", "findMultipleSearchTexts", "findIgnoreAccents", "findMsg", "findResultsCount", "findPrevious", "findNext", "findFuzzy", "passwordText", "password", "passwordSubmit", "passwordCancel", "documentPropertiesClose", "fileNameField", "fileSizeField", "titleField", "authorField", "subjectField", "keywordsField", "creationDateField", "modificationDateField", "creatorField", "producerField", "versionField", "pageCountField", "pageSizeField", "linearizedField", "errorWrapper", "errorMessage", "errorClose", "errorMoreInfo", "errorShowMore", "errorShowLess", "scaleSelectContainer", "viewAttachments", "viewLayers", "viewThumbnail", "viewOutline", "editorModeButtons", "editorNone", "editorFreeText", "editorInk"];
let Wt = (() => {
  class at {
    addMissingStandardWidgets() {
      this.dummyComponentsContainer = document.getElementsByClassName("dummy-pdf-viewer-components")[0];
      const be = this.dummyComponentsContainer;
      if (be) {
        for (let Bt = 0; Bt < be.children.length; Bt++) {
          const an = be.firstChild;
          if (an) {
            be.removeChild(an);
          }
        }
        yt.forEach(Bt => {
          if (this.needsDummyWidget(Bt)) {
            const an = document.createElement("span");
            an.id = Bt;
            an.className = "invisible dummy-component";
            this.dummyComponentsContainer.appendChild(an);
          }
        });
        if (this.needsDummyWidget("scaleSelect")) {
          const Bt = document.createElement("select");
          Bt.id = "scaleSelect";
          Bt.className = "invisible dummy-component";
          this.dummyComponentsContainer.appendChild(Bt);
        }
      }
    }
    needsDummyWidget(be) {
      return !document.getElementById(be);
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-dummy-components"]],
    decls: 1,
    vars: 0,
    consts: [[1, "invisible", "dummy-pdf-viewer-components"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "span", 0);
      }
    },
    encapsulation: 2
  });
  return at;
})();
function hn(at, Je) {
  const be = window;
  if (be.trustedTypes) {
    const Bt = be.trustedTypes.createPolicy("foo", {
      createHTML: an => an
    });
    at.innerHTML = Bt.createHTML(Je);
  } else {
    at.innerHTML = Je;
  }
}
let on = (() => {
  class at {
    constructor(be, Bt) {
      this.renderer = be;
      this.document = Bt;
    }
    ngOnInit() {
      this.injectStyle();
    }
    injectStyle() {
      const be = this.document.createElement("STYLE");
      be.id = "pdf-theme-css";
      hn(be, "ngx-extended-pdf-viewer .textLayer{position:absolute;text-align:initial;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1;text-size-adjust:none;forced-color-adjust:none}ngx-extended-pdf-viewer .textLayer span,ngx-extended-pdf-viewer .textLayer br{color:rgba(0,0,0,0);position:absolute;white-space:pre;cursor:text;transform-origin:0% 0%}ngx-extended-pdf-viewer .textLayer span.markedContent{top:0;height:0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:var(rgb(180, 0, 170));border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.appended{position:initial}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer br::selection{background:rgba(0,0,0,0)}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: none;--page-margin: 1px auto -8px;--page-border: 9px solid transparent;--spreadHorizontalWrapped-margin-LR: -3.5px;--zoom-factor: 1}@media screen and (forced-colors: active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: 9px;--page-margin: 9px auto 0;--page-border: none;--spreadHorizontalWrapped-margin-LR: 4.5px}}ngx-extended-pdf-viewer [data-main-rotation=\"90\"]{transform:rotate(90deg) translateY(-100%)}ngx-extended-pdf-viewer [data-main-rotation=\"180\"]{transform:rotate(180deg) translate(-100%, -100%)}ngx-extended-pdf-viewer [data-main-rotation=\"270\"]{transform:rotate(270deg) translateX(-100%)}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px auto;position:relative;overflow:visible;border:9px solid rgba(0,0,0,0);background-clip:content-box;-o-border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;background-color:#fff}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px auto;border:none}ngx-extended-pdf-viewer .pdfViewer.singlePageView .page{margin:0}ngx-extended-pdf-viewer .html .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .html .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .html .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page canvas[zooming]{width:100%;height:100%}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(\"data:image/gif;base64,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\") center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100vh !important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer select{font:message-box;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#474747 !important;color:#d9d9d9}ngx-extended-pdf-viewer .hidden{display:none !important}ngx-extended-pdf-viewer [hidden]{display:none !important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0 !important;overflow:hidden !important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#000}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:200ms;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:-200px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:350px}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:auto;position:absolute;top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:200ms;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid rgba(0,0,0,.5)}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#424242;color:#d9d9d9;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px !important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px !important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{position:relative;min-height:32px;background-color:#474747}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width 200ms}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg, rgb(187, 187, 187) 0, rgb(153, 153, 153) 5px, rgb(153, 153, 153) 45px, rgb(221, 221, 221) 55px, rgb(221, 221, 221) 95px, rgb(187, 187, 187) 100px);-webkit-animation:progressIndeterminate 950ms linear infinite;animation:progressIndeterminate 950ms linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px 0 6px;margin:4px 2px 4px 2px;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#d9d9d9}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}#findInput[data-status=notFound]{background-color:#f66}html[dir=rtl] ngx-extended-pdf-viewer ngx-extended-pdf-viewer .secondaryToolbar,html[dir=rtl] ngx-extended-pdf-viewer ngx-extended-pdf-viewer .editorParamsToolbar{padding:6px;height:auto;z-index:3000}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer{width:220px;margin-bottom:-4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer>.editorParamsSetter{min-height:26px;display:flex;align-items:center;justify-content:space-between;padding-inline:10px}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsLabel{padding-inline-end:10px;flex:none;color:var(--main-color)}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsColor{width:32px;height:32px;flex:none}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider{background-color:rgba(0,0,0,0);width:90px;flex:0 1 0}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-progress{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-runnable-track,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-track{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-thumb,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-thumb{background-color:#fff}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer{width:250px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none !important}ngx-extended-pdf-viewer #editorInkParamsToolbar{inset-inline-end:40px;background-color:var(rgb(71, 71, 71))}ngx-extended-pdf-viewer #editorFreeTextParamsToolbar{inset-inline-end:68px;background-color:var(rgb(71, 71, 71))}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid rgba(0,0,0,0);content:\" \";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#474747;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after{right:13px;margin-right:-8px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#d9d9d9;color:#474747;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findResultsCount:empty,ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *{position:relative;float:right}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:0 none;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .toolbarButton[disabled],ngx-extended-pdf-viewer .secondaryToolbarButton[disabled],ngx-extended-pdf-viewer .dialogButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:1px solid rgba(0,0,0,0);color:#d9d9d9}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{min-width:16px;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton,html[dir=ltr] ngx-extended-pdf-viewer .dialogButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton,html[dir=rtl] ngx-extended-pdf-viewer .dialogButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .dialogButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarButton.toggled,ngx-extended-pdf-viewer .secondaryToolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#d9d9d9;background-color:rgba(255,255,255,.8)}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#474747}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .toolbarButton::before,ngx-extended-pdf-viewer .secondaryToolbarButton::before{position:absolute;display:inline-block;top:4px;left:7px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{right:4px}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:\"\";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .secondaryToolbarButton{position:relative;margin:0 0 4px 0;padding:3px 0 1px 0;height:auto;min-height:25px;width:200px;white-space:normal}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}ngx-extended-pdf-viewer .html .toolbarField{padding:3px 6px;margin:4px 0 4px 0;border-radius:2px;background-color:rgba(255,255,255,.8);background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.4);color:#4d4d4d;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .html .toolbarField::placeholder,ngx-extended-pdf-viewer .html .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .html .toolbarField::-ms-input-placeholder{color:#d9d9d9}ngx-extended-pdf-viewer .html .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .html .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .html .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid rgba(0,0,0,0);border-radius:2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer .html #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer .html #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .html .thumbnail{margin:0 10px 5px 10px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px 9px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid rgba(0,0,0,0);opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer #outlineView,ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#424242;font-size:13px;line-height:15px;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a *{cursor:pointer}ngx-extended-pdf-viewer #layersView .treeItem>a>label>input{float:inline-start;margin-top:1px}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M10 13l4-7H6z'/></svg>\");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M13 9L6 5v8z'/></svg>\");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems,ngx-extended-pdf-viewer .treeItem>a:hover{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .dialogButton{width:auto;margin:3px 4px 2px !important;padding:2px 11px;color:#d9d9d9;background-color:#474747;border:#474747 !important}ngx-extended-pdf-viewer dialog{margin:auto;padding:15px;border-spacing:4px;color:#d9d9d9;font-size:12px;line-height:14px;background-color:#474747;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}ngx-extended-pdf-viewer dialog::backdrop{background-color:rgba(0,0,0,.2);user-select:none}ngx-extended-pdf-viewer dialog>.row{display:table-row}ngx-extended-pdf-viewer dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordDialog{text-align:center}ngx-extended-pdf-viewer #passwordDialog .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesDialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{min-width:100px;text-align:start}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:right}.fileInput{background:#fff;color:#000;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=\"),move !important;cursor:-webkit-grab !important;cursor:grab !important}ngx-extended-pdf-viewer .grab-to-pan-grab *:not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit !important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=\"),move !important;cursor:-webkit-grabbing !important;cursor:grabbing !important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio: 1.1),screen and (min-resolution: 1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{transform:scale(0.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{transform:scale(0.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:186px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading,ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url(\"data:image/png;base64,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\");background-size:16px 17px}ngx-extended-pdf-viewer .visibleLargeView,ngx-extended-pdf-viewer .visibleMediumView,ngx-extended-pdf-viewer .visibleSmallView{display:none}ngx-extended-pdf-viewer .html .unverified-signature-warning,ngx-extended-pdf-viewer .html .modified-background-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:bold}ngx-extended-pdf-viewer .invisible{display:none !important}ngx-extended-pdf-viewer #outerContainer{clip-path:inset(0 0 0 0)}ngx-extended-pdf-viewer .textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color0.selected{background-color:#b400aa}ngx-extended-pdf-viewer .textLayer .highlight.color1{background-color:rgba(0,100,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color1.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer .highlight.color2{background-color:rgba(0,0,255,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color2.selected{background-color:blue}ngx-extended-pdf-viewer .textLayer .highlight.color3{background-color:rgba(255,0,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color3.selected{background-color:red}ngx-extended-pdf-viewer .textLayer .highlight.color4{background-color:rgba(255,94,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] ngx-extended-pdf-viewer .dialogButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed !important;left:-9999px !important;display:block !important;width:3000px !important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px !important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px !important;margin-right:-2px !important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}ngx-extended-pdf-viewer .relative-coords #viewerContainer{overflow:hidden}ngx-extended-pdf-viewer .relative-coords #viewerContainer .pdfViewer.removePageBorders .spread .page{margin:0}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer{display:inline-block;position:relative}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .spread{margin:0}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .spread .page{display:inline-block}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .page{margin:0;border:0}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .page.stf__item{display:block}.hidden-by-fullscreen{display:none !important}:root{--scrollbar-color: rgba(121, 121, 123, 1);--scrollbar-bg-color: rgba(35, 35, 39, 1)} #printContainer{display:none}@media print{#printContainer{position:static;display:block}body[data-pdfjsprinting],html{overflow-y:visible !important;margin:0;padding:0}body[data-pdfjsprinting]{background:rgba(0,0,0,0) none;height:100%;width:100%}body[data-pdfjsprinting]>*{display:none !important;outline:0;padding:0;margin:0}body[data-pdfjsprinting] #printContainer{display:block !important;height:100%;width:100%}body[data-pdfjsprinting] #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block !important}body[data-pdfjsprinting] #printContainer>.printedPage{page-break-after:always;page-break-inside:avoid;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage .xfaPage{position:absolute}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage{page-break-after:always;page-break-inside:avoid;width:100%;height:100%;position:relative}body[data-pdfjsprinting] #printContainer>.printedPage canvas,body[data-pdfjsprinting] #printContainer>.printedPage img{max-width:100%;max-height:100%;direction:ltr;display:block}html[data-pdfjsprinting].cdk-global-scrollblock{width:initial;position:initial}}");
      this.renderer.appendChild(this.document.head, be);
    }
    ngOnDestroy() {
      const be = this.document.getElementById("pdf-theme-css");
      if (be && be.parentElement) {
        be.parentElement.removeChild(be);
      }
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.Qsj), t.Y36(b.K0));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-dark-theme"]],
    decls: 0,
    vars: 0,
    template: function (be, Bt) {},
    encapsulation: 2
  });
  return at;
})();
let In = (() => {
  class at {
    constructor(be, Bt) {
      this.renderer = be;
      this.document = Bt;
    }
    ngOnInit() {
      this.injectStyle();
    }
    injectStyle() {
      const be = this.document.createElement("STYLE");
      be.id = "pdf-theme-css";
      hn(be, "ngx-extended-pdf-viewer .textLayer{position:absolute;text-align:initial;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1;text-size-adjust:none;forced-color-adjust:none}ngx-extended-pdf-viewer .textLayer span,ngx-extended-pdf-viewer .textLayer br{color:rgba(0,0,0,0);position:absolute;white-space:pre;cursor:text;transform-origin:0% 0%}ngx-extended-pdf-viewer .textLayer span.markedContent{top:0;height:0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:var(rgb(180, 0, 170));border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.appended{position:initial}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer br::selection{background:rgba(0,0,0,0)}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: none;--page-margin: 1px auto -8px;--page-border: 9px solid transparent;--spreadHorizontalWrapped-margin-LR: -3.5px;--zoom-factor: 1}@media screen and (forced-colors: active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: 9px;--page-margin: 9px auto 0;--page-border: none;--spreadHorizontalWrapped-margin-LR: 4.5px}}ngx-extended-pdf-viewer [data-main-rotation=\"90\"]{transform:rotate(90deg) translateY(-100%)}ngx-extended-pdf-viewer [data-main-rotation=\"180\"]{transform:rotate(180deg) translate(-100%, -100%)}ngx-extended-pdf-viewer [data-main-rotation=\"270\"]{transform:rotate(270deg) translateX(-100%)}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px auto;position:relative;overflow:visible;border:9px solid rgba(0,0,0,0);background-clip:content-box;-o-border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;background-color:#fff}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px auto;border:none}ngx-extended-pdf-viewer .pdfViewer.singlePageView .page{margin:0}ngx-extended-pdf-viewer .html .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .html .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .html .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page canvas[zooming]{width:100%;height:100%}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(\"data:image/gif;base64,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\") center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100vh !important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer select{font:message-box;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#fff !important;color:#5a5a5a}ngx-extended-pdf-viewer .hidden{display:none !important}ngx-extended-pdf-viewer [hidden]{display:none !important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0 !important;overflow:hidden !important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#f9f9f9}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:200ms;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:-200px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:350px}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:#f2f2f3}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:auto;position:absolute;top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:200ms;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid #ddd}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#f2f2f3;color:#5a5a5a;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px !important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px !important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{position:relative;min-height:32px;background-color:#f9f9f9}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width 200ms}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg, rgb(187, 187, 187) 0, rgb(153, 153, 153) 5px, rgb(153, 153, 153) 45px, rgb(221, 221, 221) 55px, rgb(221, 221, 221) 95px, rgb(187, 187, 187) 100px);-webkit-animation:progressIndeterminate 950ms linear infinite;animation:progressIndeterminate 950ms linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px 0 6px;margin:4px 2px 4px 2px;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}#findInput[data-status=notFound]{background-color:#f66}html[dir=rtl] ngx-extended-pdf-viewer ngx-extended-pdf-viewer .secondaryToolbar,html[dir=rtl] ngx-extended-pdf-viewer ngx-extended-pdf-viewer .editorParamsToolbar{padding:6px;height:auto;z-index:3000}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer{width:220px;margin-bottom:-4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer>.editorParamsSetter{min-height:26px;display:flex;align-items:center;justify-content:space-between;padding-inline:10px}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsLabel{padding-inline-end:10px;flex:none;color:var(--main-color)}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsColor{width:32px;height:32px;flex:none}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider{background-color:rgba(0,0,0,0);width:90px;flex:0 1 0}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-progress{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-runnable-track,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-track{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-thumb,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-thumb{background-color:#fff}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer{width:250px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none !important}ngx-extended-pdf-viewer #editorInkParamsToolbar{inset-inline-end:40px;background-color:var(#f9f9f9)}ngx-extended-pdf-viewer #editorFreeTextParamsToolbar{inset-inline-end:68px;background-color:var(#f9f9f9)}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid rgba(0,0,0,0);content:\" \";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#f9f9f9;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after{right:13px;margin-right:-8px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#5a5a5a;color:#f9f9f9;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findResultsCount:empty,ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *{position:relative;float:right}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:0 none;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .toolbarButton[disabled],ngx-extended-pdf-viewer .secondaryToolbarButton[disabled],ngx-extended-pdf-viewer .dialogButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:1px solid rgba(0,0,0,0);color:#5a5a5a}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{min-width:16px;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton,html[dir=ltr] ngx-extended-pdf-viewer .dialogButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton,html[dir=rtl] ngx-extended-pdf-viewer .dialogButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .dialogButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarButton.toggled,ngx-extended-pdf-viewer .secondaryToolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#5a5a5a;background-color:#fff}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#f9f9f9}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .toolbarButton::before,ngx-extended-pdf-viewer .secondaryToolbarButton::before{position:absolute;display:inline-block;top:4px;left:7px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{right:4px}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:\"\";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .secondaryToolbarButton{position:relative;margin:0 0 4px 0;padding:3px 0 1px 0;height:auto;min-height:25px;width:200px;white-space:normal}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}ngx-extended-pdf-viewer .html .toolbarField{padding:3px 6px;margin:4px 0 4px 0;border-radius:2px;background-color:#fff;background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.4);color:#5a5a5a;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .html .toolbarField::placeholder,ngx-extended-pdf-viewer .html .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .html .toolbarField::-ms-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer .html .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .html .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .html .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid rgba(0,0,0,0);border-radius:2px;color:#5a5a5a;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer .html #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer .html #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .html .thumbnail{margin:0 10px 5px 10px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px 9px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid rgba(0,0,0,0);opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer #outlineView,ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#5a5a5a;font-size:13px;line-height:15px;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a *{cursor:pointer}ngx-extended-pdf-viewer #layersView .treeItem>a>label>input{float:inline-start;margin-top:1px}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M10 13l4-7H6z'/></svg>\");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M13 9L6 5v8z'/></svg>\");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems,ngx-extended-pdf-viewer .treeItem>a:hover{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .dialogButton{width:auto;margin:3px 4px 2px !important;padding:2px 11px;color:#5a5a5a;background-color:#f9f9f9;border:#f9f9f9 !important}ngx-extended-pdf-viewer dialog{margin:auto;padding:15px;border-spacing:4px;color:#5a5a5a;font-size:12px;line-height:14px;background-color:#f9f9f9;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}ngx-extended-pdf-viewer dialog::backdrop{background-color:rgba(0,0,0,.2);user-select:none}ngx-extended-pdf-viewer dialog>.row{display:table-row}ngx-extended-pdf-viewer dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordDialog{text-align:center}ngx-extended-pdf-viewer #passwordDialog .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesDialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{min-width:100px;text-align:start}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:right}.fileInput{background:#fff;color:#f9f9f9;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=\"),move !important;cursor:-webkit-grab !important;cursor:grab !important}ngx-extended-pdf-viewer .grab-to-pan-grab *:not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit !important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=\"),move !important;cursor:-webkit-grabbing !important;cursor:grabbing !important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio: 1.1),screen and (min-resolution: 1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{transform:scale(0.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{transform:scale(0.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:186px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading,ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url(\"data:image/png;base64,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\");background-size:16px 17px}ngx-extended-pdf-viewer .visibleLargeView,ngx-extended-pdf-viewer .visibleMediumView,ngx-extended-pdf-viewer .visibleSmallView{display:none}ngx-extended-pdf-viewer .html .unverified-signature-warning,ngx-extended-pdf-viewer .html .modified-background-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:bold}ngx-extended-pdf-viewer .invisible{display:none !important}ngx-extended-pdf-viewer #outerContainer{clip-path:inset(0 0 0 0)}ngx-extended-pdf-viewer .textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color0.selected{background-color:#b400aa}ngx-extended-pdf-viewer .textLayer .highlight.color1{background-color:rgba(0,100,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color1.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer .highlight.color2{background-color:rgba(0,0,255,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color2.selected{background-color:blue}ngx-extended-pdf-viewer .textLayer .highlight.color3{background-color:rgba(255,0,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color3.selected{background-color:red}ngx-extended-pdf-viewer .textLayer .highlight.color4{background-color:rgba(255,94,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] ngx-extended-pdf-viewer .dialogButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed !important;left:-9999px !important;display:block !important;width:3000px !important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px !important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px !important;margin-right:-2px !important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}ngx-extended-pdf-viewer .relative-coords #viewerContainer{overflow:hidden}ngx-extended-pdf-viewer .relative-coords #viewerContainer .pdfViewer.removePageBorders .spread .page{margin:0}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer{display:inline-block;position:relative}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .spread{margin:0}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .spread .page{display:inline-block}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .page{margin:0;border:0}ngx-extended-pdf-viewer .relative-coords #viewerContainer #viewer .page.stf__item{display:block}.hidden-by-fullscreen{display:none !important}:root{--scrollbar-color: auto;--scrollbar-bg-color: auto} #printContainer{display:none}@media print{#printContainer{position:static;display:block}body[data-pdfjsprinting],html{overflow-y:visible !important;margin:0;padding:0}body[data-pdfjsprinting]{background:rgba(0,0,0,0) none;height:100%;width:100%}body[data-pdfjsprinting]>*{display:none !important;outline:0;padding:0;margin:0}body[data-pdfjsprinting] #printContainer{display:block !important;height:100%;width:100%}body[data-pdfjsprinting] #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block !important}body[data-pdfjsprinting] #printContainer>.printedPage{page-break-after:always;page-break-inside:avoid;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage .xfaPage{position:absolute}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage{page-break-after:always;page-break-inside:avoid;width:100%;height:100%;position:relative}body[data-pdfjsprinting] #printContainer>.printedPage canvas,body[data-pdfjsprinting] #printContainer>.printedPage img{max-width:100%;max-height:100%;direction:ltr;display:block}html[data-pdfjsprinting].cdk-global-scrollblock{width:initial;position:initial}}");
      this.renderer.appendChild(this.document.head, be);
    }
    ngOnDestroy() {
      const be = this.document.getElementById("pdf-theme-css");
      if (be && be.parentElement) {
        be.parentElement.removeChild(be);
      }
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.Qsj), t.Y36(b.K0));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-light-theme"]],
    decls: 0,
    vars: 0,
    template: function (be, Bt) {},
    encapsulation: 2
  });
  return at;
})();
let di = (() => {
  class at {
    constructor(be, Bt) {
      this.renderer = be;
      this.document = Bt;
      this.zoom = 1;
      this.width = 100;
      this.xs = 490;
      this.sm = 560;
      this.md = 610;
      this.lg = 660;
      this.xl = 740;
      this.xxl = 830;
    }
    get style() {
      return `\n@media all and (max-width: ${this.xl}px) {\n  #toolbarViewerMiddle {\n    display: table;\n    margin: auto;\n    left: auto;\n    position: inherit;\n    transform: none;\n  }\n}\n\n@media all and (max-width: 840px) {\n  #sidebarContent {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {\n    left: 0px !important;\n  }\n  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {\n    right: 0px !important;\n  }\n\n  #outerContainer .hiddenLargeView,\n  #outerContainer .hiddenMediumView {\n    display: inherit;\n  }\n  #outerContainer .visibleLargeView,\n  #outerContainer .visibleMediumView {\n    display: none;\n  }\n}\n\n@media all and (max-width: ${this.lg}px) {\n  .toolbarButtonSpacer {\n    width: 15px;\n  }\n\n  #outerContainer .hiddenLargeView {\n    display: none;\n  }\n  #outerContainer .visibleLargeView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: ${this.md}px) {\n  .toolbarButtonSpacer {\n    display: none;\n  }\n  #outerContainer .hiddenMediumView {\n    display: none;\n  }\n  #outerContainer .visibleMediumView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: ${this.sm}px) {\n  #outerContainer .hiddenSmallView,\n  #outerContainer .hiddenSmallView * {\n    display: none;\n  }\n  #outerContainer .visibleSmallView {\n    display: inherit;\n  }\n  .toolbarButtonSpacer {\n    width: 0;\n  }\n  html[dir='ltr'] .findbar {\n    left: 38px;\n  }\n  html[dir='rtl'] .findbar {\n    right: 38px;\n  }\n}\n\n@media all and (max-width: ${this.xs}px) {\n  #scaleSelectContainer {\n    display: none;\n  }\n}\n\n#outerContainer .visibleXLView,\n#outerContainer .visibleXXLView,\n#outerContainer .visibleTinyView {\n  display: none;\n}\n\n#outerContainer .hiddenXLView,\n#outerContainer .hiddenXXLView {\n  display: unset;\n}\n\n@media all and (max-width: ${this.xl}px) {\n  #outerContainer .hiddenXLView {\n    display: none;\n  }\n  #outerContainer .visibleXLView {\n    display: inherit;\n  }\n\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-36%);\n    transform: translateX(-36%);\n    display: unset;\n    margin: unset;\n    left: 50%;\n    position: absolute;\n  }\n}\n\n@media all and (max-width: ${this.xxl}px) {\n  #outerContainer .hiddenXXLView {\n    display: none;\n  }\n  #outerContainer .visibleXXLView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: ${this.md}px) {\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-26%);\n    transform: translateX(-26%);\n  }\n}\n\n@media all and (max-width: ${this.xs}px) {\n  #outerContainer .hiddenTinyView,\n  #outerContainer .hiddenTinyView * {\n    display: none;\n  }\n  #outerContainer .visibleTinyView {\n    display: inherit;\n  }\n}\n  `;
    }
    ngOnInit() {
      this.injectStyle();
    }
    ngOnChanges() {
      const an = this.document.body.clientWidth / this.width * (this.zoom ? this.zoom : 1);
      this.xs = an * 490;
      this.sm = an * 560;
      this.md = an * 610;
      this.lg = an * 660;
      this.xl = an * 740;
      this.xxl = an * 830;
      const Gn = this.document.getElementById("pdf-dynamic-css");
      if (Gn) {
        hn(Gn, this.style);
      }
    }
    injectStyle() {
      const be = this.document.createElement("STYLE");
      be.id = "pdf-dynamic-css";
      hn(be, this.style);
      this.renderer.appendChild(this.document.head, be);
    }
    ngOnDestroy() {
      const be = this.document.getElementById("pdf-dynamic-css");
      if (be && be.parentElement) {
        be.parentElement.removeChild(be);
      }
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.Qsj), t.Y36(b.K0));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-dynamic-css"]],
    inputs: {
      zoom: "zoom",
      width: "width"
    },
    features: [t.TTD],
    decls: 0,
    vars: 0,
    template: function (be, Bt) {}
  });
  return at;
})();
let Zi = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-document-properties-dialog"]],
    decls: 78,
    vars: 0,
    consts: [["id", "documentPropertiesDialog"], [1, "row"], ["id", "fileNameLabel", "data-l10n-id", "document_properties_file_name"], ["id", "fileNameField", "aria-labelledby", "fileNameLabel"], ["id", "fileSizeLabel", "data-l10n-id", "document_properties_file_size"], ["id", "fileSizeField", "aria-labelledby", "fileSizeLabel"], [1, "separator"], ["id", "titleLabel", "data-l10n-id", "document_properties_title"], ["id", "titleField", "aria-labelledby", "titleLabel"], ["id", "authorLabel", "data-l10n-id", "document_properties_author"], ["id", "authorField", "aria-labelledby", "authorLabel"], ["id", "subjectLabel", "data-l10n-id", "document_properties_subject"], ["id", "subjectField", "aria-labelledby", "subjectLabel"], ["id", "keywordsLabel", "data-l10n-id", "document_properties_keywords"], ["id", "keywordsField", "aria-labelledby", "keywordsLabel"], ["id", "creationDateLabel", "data-l10n-id", "document_properties_creation_date"], ["id", "creationDateField", "aria-labelledby", "creationDateLabel"], ["id", "modificationDateLabel", "data-l10n-id", "document_properties_modification_date"], ["id", "modificationDateField", "aria-labelledby", "modificationDateLabel"], ["id", "creatorLabel", "data-l10n-id", "document_properties_creator"], ["id", "creatorField", "aria-labelledby", "creatorLabel"], ["id", "producerLabel", "data-l10n-id", "document_properties_producer"], ["id", "producerField", "aria-labelledby", "producerLabel"], ["id", "versionLabel", "data-l10n-id", "document_properties_version"], ["id", "versionField", "aria-labelledby", "versionLabel"], ["id", "pageCountLabel", "data-l10n-id", "document_properties_page_count"], ["id", "pageCountField", "aria-labelledby", "pageCountLabel"], ["id", "pageSizeLabel", "data-l10n-id", "document_properties_page_size"], ["id", "pageSizeField", "aria-labelledby", "pageSizeLabel"], ["id", "linearizedLabel", "data-l10n-id", "document_properties_linearized"], ["id", "linearizedField", "aria-labelledby", "linearizedLabel"], [1, "buttonRow"], ["id", "documentPropertiesClose", "type", "button", 1, "dialogButton"], ["data-l10n-id", "document_properties_close"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "dialog", 0)(1, "div", 1)(2, "span", 2);
        t._uU(3, "File name:");
        t.qZA();
        t.TgZ(4, "p", 3);
        t._uU(5, "-");
        t.qZA()();
        t.TgZ(6, "div", 1)(7, "span", 4);
        t._uU(8, "File size:");
        t.qZA();
        t.TgZ(9, "p", 5);
        t._uU(10, "-");
        t.qZA()();
        t._UZ(11, "div", 6);
        t.TgZ(12, "div", 1)(13, "span", 7);
        t._uU(14, "Title:");
        t.qZA();
        t.TgZ(15, "p", 8);
        t._uU(16, "-");
        t.qZA()();
        t.TgZ(17, "div", 1)(18, "span", 9);
        t._uU(19, "Author:");
        t.qZA();
        t.TgZ(20, "p", 10);
        t._uU(21, "-");
        t.qZA()();
        t.TgZ(22, "div", 1)(23, "span", 11);
        t._uU(24, "Subject:");
        t.qZA();
        t.TgZ(25, "p", 12);
        t._uU(26, "-");
        t.qZA()();
        t.TgZ(27, "div", 1)(28, "span", 13);
        t._uU(29, "Keywords:");
        t.qZA();
        t.TgZ(30, "p", 14);
        t._uU(31, "-");
        t.qZA()();
        t.TgZ(32, "div", 1)(33, "span", 15);
        t._uU(34, "Creation Date:");
        t.qZA();
        t.TgZ(35, "p", 16);
        t._uU(36, "-");
        t.qZA()();
        t.TgZ(37, "div", 1)(38, "span", 17);
        t._uU(39, "Modification Date:");
        t.qZA();
        t.TgZ(40, "p", 18);
        t._uU(41, "-");
        t.qZA()();
        t.TgZ(42, "div", 1)(43, "span", 19);
        t._uU(44, "Creator:");
        t.qZA();
        t.TgZ(45, "p", 20);
        t._uU(46, "-");
        t.qZA()();
        t._UZ(47, "div", 6);
        t.TgZ(48, "div", 1)(49, "span", 21);
        t._uU(50, "PDF Producer:");
        t.qZA();
        t.TgZ(51, "p", 22);
        t._uU(52, "-");
        t.qZA()();
        t.TgZ(53, "div", 1)(54, "span", 23);
        t._uU(55, "PDF Version:");
        t.qZA();
        t.TgZ(56, "p", 24);
        t._uU(57, "-");
        t.qZA()();
        t.TgZ(58, "div", 1)(59, "span", 25);
        t._uU(60, "Page Count:");
        t.qZA();
        t.TgZ(61, "p", 26);
        t._uU(62, "-");
        t.qZA()();
        t.TgZ(63, "div", 1)(64, "span", 27);
        t._uU(65, "Page Size:");
        t.qZA();
        t.TgZ(66, "p", 28);
        t._uU(67, "-");
        t.qZA()();
        t._UZ(68, "div", 6);
        t.TgZ(69, "div", 1)(70, "span", 29);
        t._uU(71, "Fast Web View:");
        t.qZA();
        t.TgZ(72, "p", 30);
        t._uU(73, "-");
        t.qZA()();
        t.TgZ(74, "div", 31)(75, "button", 32)(76, "span", 33);
        t._uU(77, "Close");
        t.qZA()()()();
      }
    },
    encapsulation: 2
  });
  return at;
})();
let $i = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-error-message"]],
    decls: 12,
    vars: 0,
    consts: [["id", "errorWrapper", "hidden", "true"], ["id", "errorMessageLeft"], ["id", "errorMessage"], ["type", "button", "id", "errorShowMore", "data-l10n-id", "error_more_info"], ["type", "button", "id", "errorShowLess", "data-l10n-id", "error_less_info", "hidden", "true"], ["id", "errorMessageRight"], ["type", "button", "id", "errorClose", "data-l10n-id", "error_close"], [1, "clearBoth"], ["id", "errorMoreInfo", "hidden", "true", "readonly", "readonly"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1);
        t._UZ(2, "span", 2);
        t.TgZ(3, "button", 3);
        t._uU(4, "More Information");
        t.qZA();
        t.TgZ(5, "button", 4);
        t._uU(6, "Less Information");
        t.qZA()();
        t.TgZ(7, "div", 5)(8, "button", 6);
        t._uU(9, "Close");
        t.qZA()();
        t._UZ(10, "div", 7)(11, "textarea", 8);
        t.qZA();
      }
    },
    encapsulation: 2
  });
  return at;
})();
let Qi = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-password-dialog"]],
    decls: 13,
    vars: 0,
    consts: [["id", "passwordDialog"], [1, "row"], ["for", "password", "id", "passwordText", "data-l10n-id", "password_label"], ["type", "hidden", "id", "password", 1, "toolbarField"], [1, "buttonRow"], ["id", "passwordCancel", 1, "dialogButton"], ["data-l10n-id", "password_cancel"], ["id", "passwordSubmit", 1, "dialogButton"], ["data-l10n-id", "password_ok"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "dialog", 0)(1, "div", 1)(2, "label", 2);
        t._uU(3, "Enter the password to open this PDF file:");
        t.qZA()();
        t.TgZ(4, "div", 1);
        t._UZ(5, "input", 3);
        t.qZA();
        t.TgZ(6, "div", 4)(7, "button", 5)(8, "span", 6);
        t._uU(9, "Cancel");
        t.qZA()();
        t.TgZ(10, "button", 7)(11, "span", 8);
        t._uU(12, "OK");
        t.qZA()()()();
      }
    },
    encapsulation: 2
  });
  return at;
})();
let br = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-prepare-printing-dialog"]],
    decls: 12,
    vars: 0,
    consts: [["id", "printServiceDialog", 2, "min-width", "200px"], [1, "row"], ["data-l10n-id", "print_progress_message"], ["value", "0", "max", "100"], ["data-l10n-id", "print_progress_percent", "data-l10n-args", "{ \"progress\": 0 }", 1, "relative-progress"], [1, "buttonRow"], ["id", "printCancel", "type", "button", 1, "dialogButton"], ["data-l10n-id", "print_progress_close"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "dialog", 0)(1, "div", 1)(2, "span", 2);
        t._uU(3, "Preparing document for printing…");
        t.qZA()();
        t.TgZ(4, "div", 1);
        t._UZ(5, "progress", 3);
        t.TgZ(6, "span", 4);
        t._uU(7, "0%");
        t.qZA()();
        t.TgZ(8, "div", 5)(9, "button", 6)(10, "span", 7);
        t._uU(11, "Cancel");
        t.qZA()()()();
      }
    },
    encapsulation: 2
  });
  return at;
})();
let Ar = (() => {
  class at {
    constructor() {
      this.onPDFJSInit = new M.x();
      this.pdfjsVersion = ne(Ut.assetsFolder);
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵprov = t.Yz7({
    token: at,
    factory: at.ɵfac,
    providedIn: "root"
  });
  return at;
})();
let vr = (() => {
  class at {
    constructor(be, Bt) {
      this.element = be;
      this.notificationService = Bt;
      this.showPresentationModeButton = true;
      this.showOpenFileButton = true;
      this.showPrintButton = true;
      this.showDownloadButton = true;
      this.showPagingButtons = true;
      this.showRotateButton = true;
      this.showHandToolButton = true;
      this.showScrollingButton = true;
      this.showSpreadButton = true;
      this.showPropertiesButton = true;
      this.spreadChange = new t.vpe();
      this.secondaryMenuIsEmpty = new t.vpe();
      this.disablePreviousPage = true;
      this.disableNextPage = true;
      this.notificationService.onPDFJSInit.pipe((0, v.q)(1)).subscribe(() => {
        this.onPdfJsInit();
      });
    }
    onPdfJsInit() {
      const be = window.PDFViewerApplication;
      be.eventBus.on("pagechanging", () => {
        this.updateUIState();
      });
      be.eventBus.on("pagerendered", () => {
        this.updateUIState();
      });
    }
    updateUIState() {
      setTimeout(() => {
        const be = window.PDFViewerApplication;
        const Bt = be.pdfViewer.currentPageNumber;
        const an = document.getElementById("previousPage");
        if (an) {
          this.disablePreviousPage = Number(Bt) <= 1;
          an.disabled = this.disablePreviousPage;
        }
        const Gn = document.getElementById("nextPage");
        if (Gn) {
          this.disableNextPage = Bt === be.pagesCount;
          Gn.disabled = this.disableNextPage;
        }
      });
    }
    onSpreadChange(be) {
      this.spreadChange.emit(be);
    }
    ngOnChanges(be) {
      setTimeout(() => this.checkVisibility());
    }
    onResize() {
      setTimeout(() => this.checkVisibility());
    }
    ngAfterViewInit() {
      const be = this.element.nativeElement;
      this.mutationObserver = new MutationObserver((an, Gn) => {
        for (const Ki of an) {
          if (Ki.type === "attributes" && Ki.attributeName === "class") {
            this.checkVisibility();
          }
        }
      });
      this.mutationObserver.observe(be, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }
    ngOnDestroy() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.mutationObserver = undefined;
      }
    }
    checkVisibility() {
      let be = 0;
      const an = this.element.nativeElement.children.item(0);
      if (an) {
        const Gn = an.children.item(0);
        if (Gn && Gn instanceof HTMLElement) {
          be = this.checkVisibilityRecursively(Gn);
        }
      }
      this.secondaryMenuIsEmpty.emit(be === 0);
    }
    checkVisibilityRecursively(be) {
      if (typeof window === "undefined" || be.style.display === "none" || be.classList.contains("hidden") || be.classList.contains("invisible") || window.getComputedStyle(be).display === "none") {
        return 0;
      }
      if (be instanceof HTMLButtonElement || be instanceof HTMLAnchorElement) {
        return 1;
      }
      let an = 0;
      const Gn = be.children;
      if (Gn && Gn.length) {
        for (let Ki = 0; Ki < Gn.length && an === 0; Ki++) {
          const Lr = Gn.item(Ki);
          if (Lr && Lr instanceof HTMLElement) {
            an += this.checkVisibilityRecursively(Lr);
          }
        }
      }
      return an;
    }
    previousPage() {
      window.PDFViewerApplication.eventBus.dispatch("previouspage");
    }
    nextPage() {
      window.PDFViewerApplication.eventBus.dispatch("nextpage");
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.SBq), t.Y36(Ar));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-secondary-toolbar"]],
    hostBindings: function (be, Bt) {
      if (be & 1) {
        t.NdJ("resize", function () {
          return Bt.onResize();
        }, false, t.Jf7);
      }
    },
    inputs: {
      customSecondaryToolbar: "customSecondaryToolbar",
      secondaryToolbarTop: "secondaryToolbarTop",
      mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
      showPresentationModeButton: "showPresentationModeButton",
      showOpenFileButton: "showOpenFileButton",
      showPrintButton: "showPrintButton",
      showDownloadButton: "showDownloadButton",
      showPagingButtons: "showPagingButtons",
      showRotateButton: "showRotateButton",
      showHandToolButton: "showHandToolButton",
      showScrollingButton: "showScrollingButton",
      showSpreadButton: "showSpreadButton",
      showPropertiesButton: "showPropertiesButton"
    },
    outputs: {
      spreadChange: "spreadChange",
      secondaryMenuIsEmpty: "secondaryMenuIsEmpty"
    },
    features: [t.TTD],
    decls: 3,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"], ["defaultSecondaryToolbar", ""], ["id", "secondaryToolbar", 1, "secondaryToolbar", "hidden", "doorHangerRight"], ["id", "secondaryToolbarButtonContainer"], ["type", "button", "id", "secondaryPresentationMode", "title", "Switch to Presentation Mode", "data-l10n-id", "presentation_mode", 1, "secondaryToolbarButton", "visibleLargeView"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"], ["data-l10n-id", "presentation_mode_label"], ["type", "button", "id", "secondaryOpenFile", "title", "Open File", "data-l10n-id", "open_file", 1, "secondaryToolbarButton", "visibleMediumView"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"], ["data-l10n-id", "open_file_label"], ["type", "button", "id", "secondaryPrint", "title", "Print", "data-l10n-id", "print", 1, "secondaryToolbarButton", "visibleSmallView"], ["fill", "currentColor", "d", "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"], ["data-l10n-id", "print_label"], ["type", "button", "id", "secondaryDownload", "title", "Download", "data-l10n-id", "download", 1, "secondaryToolbarButton", "visibleSmallView"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z"], ["data-l10n-id", "download_label"], ["type", "button", "id", "firstPage", "title", "Go to First Page", "data-l10n-id", "first_page", 1, "secondaryToolbarButton", "firstPage", "visibleLargeView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"], ["data-l10n-id", "first_page_label"], ["type", "button", "id", "previousPage", "title", "Go to Previous Page", "data-l10n-id", "previous", 1, "secondaryToolbarButton", "previousPage", "visibleTinyView", 3, "disabled", "click"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "previous_label"], ["type", "button", "id", "nextPage", "title", "Go to Next Page", "data-l10n-id", "next", 1, "secondaryToolbarButton", "nextPage", "visibleTinyView", 3, "disabled", "click"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "next_label"], ["type", "button", "id", "lastPage", "title", "Go to Last Page", "data-l10n-id", "last_page", 1, "secondaryToolbarButton", "lastPage", "visibleLargeView"], ["fill", "currentColor", "d", "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"], ["data-l10n-id", "last_page_label"], ["type", "button", "id", "pageRotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 1, "secondaryToolbarButton", "rotateCw", "visibleXLView"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3"], ["data-l10n-id", "page_rotate_cw_label"], ["type", "button", "id", "pageRotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 1, "secondaryToolbarButton", "rotateCcw", "visibleXLView"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3"], ["data-l10n-id", "page_rotate_ccw_label"], ["type", "button", "id", "cursorSelectTool", "title", "Enable Text Selection Tool", "data-l10n-id", "cursor_text_select_tool", 1, "secondaryToolbarButton", "toggled", "visibleXXLView"], ["fill", "currentColor", "d", "M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z"], ["data-l10n-id", "cursor_text_select_tool_label"], ["type", "button", "id", "cursorHandTool", "title", "Enable Hand Tool", "data-l10n-id", "cursor_hand_tool", 1, "secondaryToolbarButton", "visibleXXLView"], ["fill", "currentColor", "d", "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"], ["data-l10n-id", "cursor_hand_tool_label"], ["type", "button", "id", "scrollPage", "title", "Use Page Scrolling", "data-l10n-id", "scroll_page", 1, "secondaryToolbarButton", "scrollPage"], [2, "width", "24px", "height", "24px", "margin-top", "3px"], ["fill", "currentColor", "d", "M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z"], ["data-l10n-id", "scroll_page"], ["type", "button", "id", "scrollVertical", "title", "Use Vertical Scrolling", "data-l10n-id", "scroll_vertical", 1, "secondaryToolbarButton", "scrollVertical", "toggled"], ["data-l10n-id", "scroll_vertical_label"], ["type", "button", "id", "scrollHorizontal", "title", "Use Horizontal Scrolling", "data-l10n-id", "scroll_horizontal", 1, "secondaryToolbarButton", "scrollHorizontal"], ["fill", "currentColor", "d", "M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z"], ["data-l10n-id", "scroll_horizontal_label"], ["type", "button", "id", "scrollWrapped", "title", "Use Wrapped Scrolling", "data-l10n-id", "scroll_wrapped", 1, "secondaryToolbarButton", "scrollWrapped"], ["fill", "currentColor", "d", "M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z"], ["data-l10n-id", "scroll_wrapped_label"], ["type", "button", "id", "spreadNone", "title", "Do not join page spreads", "data-l10n-id", "spread_none", 1, "secondaryToolbarButton", "spreadNone", "toggled", 3, "click"], ["height", "16", "width", "16"], ["fill", "currentColor", "d", "M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z"], ["data-l10n-id", "spread_none_label"], ["type", "button", "id", "spreadOdd", "title", "Join page spreads starting with odd-numbered pages", "data-l10n-id", "spread_odd", 1, "secondaryToolbarButton", "spreadOdd", 3, "click"], ["fill", "currentColor", "d", "M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z"], ["data-l10n-id", "spread_odd_label"], ["type", "button", "id", "spreadEven", "title", "Join page spreads starting with even-numbered pages", "data-l10n-id", "spread_even", 1, "secondaryToolbarButton", "spreadEven", 3, "click"], ["fill", "currentColor", "d", "M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z"], ["data-l10n-id", "spread_even_label"], ["type", "button", "id", "documentProperties", "title", "Document Properties…", "data-l10n-id", "document_properties", "aria-controls", "documentPropertiesDialog", 1, "secondaryToolbarButton", "documentProperties"], ["viewBox", "0 0 16 16", 2, "width", "16px", "height", "16px", "margin-top", "3px"], ["fill", "currentColor", "d", "M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z"], ["fill", "currentColor", "d", "M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"], ["fill", "currentColor", "cx", "8", "cy", "5", "r", "1.188"], ["data-l10n-id", "document_properties_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.GkF(0, 0);
        t.YNc(1, x, 104, 48, "ng-template", null, 1, t.W1O);
      }
      if (be & 2) {
        const an = t.MAs(2);
        t.Q6J("ngTemplateOutlet", Bt.customSecondaryToolbar ? Bt.customSecondaryToolbar : an);
      }
    },
    dependencies: [b.tP],
    styles: ["svg[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:0;left:0}"]
  });
  return at;
})();
let Br = (() => {
  class at {
    constructor() {
      this.hideSidebarToolbar = false;
      this.mobileFriendlyZoomScale = 1;
      this.thumbnailDrawn = new t.vpe();
      if (typeof window !== "undefined") {
        window.pdfThumbnailGeneratorReady = () => this.pdfThumbnailGeneratorReady();
        window.pdfThumbnailGenerator = (be, Bt, an, Gn, Ki) => this.createThumbnail(be, Bt, an, Gn, Ki);
      }
    }
    get top() {
      let be = 0;
      if (!this.hideSidebarToolbar) {
        be = this.mobileFriendlyZoomScale * 32;
        if (be === 32) {
          be = 33;
        }
      }
      return `${be}px`;
    }
    ngOnDestroy() {
      this.linkService = undefined;
    }
    pdfThumbnailGeneratorReady() {
      if (!this.thumbnailViewTemplate) {
        return false;
      }
      const be = this.thumbnailViewTemplate.nativeElement;
      return !!be && !!be.innerHTML && be.innerHTML.length > 0;
    }
    createThumbnail(be, Bt, an, Gn, Ki) {
      this.linkService = Bt;
      const Gr = this.thumbnailViewTemplate.nativeElement.innerHTML.split(/_ng\w+-\w+-\w+=""/g).join("").split(/ng-\w+-\w+/g).join("").split(/<!--[\s\S]*?-->/g).join("");
      const Ks = `${be.canvasWidth + 2}px`;
      const Js = `${be.canvasHeight + 2}px`;
      const Xt = Gr.split("WIDTH_OF_RING").join(Ks).split("HEIGHT_OF_RING").join(Js).split("PAGE_NUMBER").join(an);
      const ut = this.createElementFromHTML(Xt);
      ut.classList.remove("pdf-viewer-template");
      const vt = ut;
      vt.href = Bt.getAnchorUrl(`#page=${an}`);
      Ki.then(Zn => {
        vt.title = Zn;
      });
      vt.onclick = () => {
        Bt.page = an;
        return false;
      };
      be.anchor = vt;
      const Zt = ut.getElementsByClassName("image-container")[0];
      be.ring = Zt;
      be.div = ut.getElementsByClassName("thumbnail")[0];
      Gn.appendChild(ut);
      this.thumbnailDrawn.emit({
        thumbnail: ut,
        container: Gn,
        pageId: an
      });
    }
    getTrustedHtml(be) {
      const Bt = window;
      if (Bt.trustedTypes) {
        return Bt.trustedTypes.createPolicy("foo", {
          createHTML: Gn => Gn
        }).createHTML(be);
      } else {
        return be;
      }
    }
    createElementFromHTML(be) {
      const Bt = document.createElement("div");
      const an = this.getTrustedHtml(be.trim());
      Bt.innerHTML = an;
      return Bt.firstChild;
    }
    onKeyDown(be) {
      if (be.code === "ArrowDown") {
        if (this.linkService) {
          if (be.ctrlKey || be.metaKey) {
            this.linkService.page = this.linkService.pagesCount;
          } else if (this.linkService.page < this.linkService.pagesCount) {
            this.linkService.page = this.linkService.page + 1;
          }
          be.preventDefault();
        }
      } else if (be.code === "ArrowUp" && this.linkService) {
        if (be.ctrlKey || be.metaKey) {
          this.linkService.page = 1;
        } else if (this.linkService.page > 1) {
          this.linkService.page = this.linkService.page - 1;
        }
        be.preventDefault();
      }
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-sidebar-content"]],
    viewQuery: function (be, Bt) {
      if (be & 1) {
        t.Gf(U, 5);
      }
      if (be & 2) {
        let an;
        if (t.iGM(an = t.CRH())) {
          Bt.thumbnailViewTemplate = an.first;
        }
      }
    },
    inputs: {
      customThumbnail: "customThumbnail",
      hideSidebarToolbar: "hideSidebarToolbar",
      mobileFriendlyZoomScale: "mobileFriendlyZoomScale"
    },
    outputs: {
      thumbnailDrawn: "thumbnailDrawn"
    },
    ngContentSelectors: Z,
    decls: 10,
    vars: 3,
    consts: [["id", "sidebarContent"], ["thumbnailViewTemplate", ""], [4, "ngTemplateOutlet"], ["id", "thumbnailView", 3, "keydown"], ["id", "outlineView", 1, "hidden"], ["id", "attachmentsView", 1, "hidden"], ["id", "layersView", 1, "hidden"], ["defaultThumbnail", ""], [1, "pdf-viewer-template"], ["data-page-number", "$page", 1, "thumbnail"], [1, "thumbnailSelectionRing", "image-container", 2, "width", "WIDTH_OF_RING", "height", "HEIGHT_OF_RING"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.F$t();
        t.TgZ(0, "div", 0)(1, "div", null, 1);
        t.YNc(3, B, 1, 0, "ng-content", 2);
        t.qZA();
        t.TgZ(4, "div", 3);
        t.NdJ("keydown", function (Gn) {
          return Bt.onKeyDown(Gn);
        });
        t.qZA();
        t._UZ(5, "div", 4)(6, "div", 5)(7, "div", 6);
        t.qZA();
        t.YNc(8, F, 3, 0, "ng-template", null, 7, t.W1O);
      }
      if (be & 2) {
        const an = t.MAs(9);
        t.Udp("top", Bt.top);
        t.xp6(3);
        t.Q6J("ngTemplateOutlet", Bt.customThumbnail ? Bt.customThumbnail : an);
      }
    },
    dependencies: [b.tP]
  });
  return at;
})();
let rs = (() => {
  class at {
    constructor() {
      this.mobileFriendlyZoomScale = 1;
    }
    get height() {
      return this.mobileFriendlyZoomScale * 32 + "px";
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-sidebar-toolbar"]],
    inputs: {
      mobileFriendlyZoomScale: "mobileFriendlyZoomScale"
    },
    decls: 31,
    vars: 12,
    consts: [["id", "toolbarSidebar"], ["id", "toolbarSidebarLeft"], ["type", "button", "id", "viewThumbnail", "title", "Show Thumbnails", "data-l10n-id", "thumbs", 1, "toolbarButton", "toggled"], ["data-l10n-id", "thumbs_label"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"], ["type", "button", "id", "viewOutline", "title", "Show Document Outline (double-click to expand/collapse all items)", "data-l10n-id", "document_outline", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "document_outline_label"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["type", "button", "id", "viewAttachments", "title", "Show Attachments", "data-l10n-id", "attachments", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "attachments_label"], ["fill", "currentColor", "d", "M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"], ["id", "viewLayers", "type", "button", "title", "Show Layers (double-click to reset all layers to the default state)", "data-l10n-id", "layers", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "layers_label"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 4.233 4.233", 2, "width", "20px", "height", "20px", "margin-left", "1px"], ["d", "M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z"], ["id", "toolbarSidebarRight"], ["id", "outlineOptionsContainer", 1, "hidden"], [1, "verticalToolbarSeparator"], ["type", "button", "id", "currentOutlineItem", "disabled", "disabled", "title", "Find Current Outline Item", "tabindex", "6", "data-l10n-id", "current_outline_item", 1, "toolbarButton"], ["data-l10n-id", "current_outline_item_label"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", 2, "width", "20px", "height", "20px"], ["d", "m14 9h-6c-1.3 0-1.3 2 0 2h6c1.3 0 1.3-2 0-2zm-5.2-8h-3.8c-1.3 0-1.3 2 0 2h1.7zm-6.8 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.3 1.7-0.7 0-0.5-0.4-1-1-1zm3 8c-1 0-1.3 1-0.7 1.7 0.6 0.6 1.7 0.2 1.7-0.7 0-0.5-0.4-1-1-1zm0.3-4h-0.3c-1.4 0-1.4 2 0 2h2.3zm-3.3 0c-0.9 0-1.4 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.7 0-0.6-0.5-1-1-1zm12 8h-9c-1.3 0-1.3 2 0 2h9c1.3 0 1.3-2 0-2zm-12 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.712 0-0.5-0.4-1-1-1z"], ["d", "m7.37 4.838 3.93-3.911v2.138h3.629v3.546h-3.629v2.138l-3.93-3.911"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "span", 3);
        t._uU(4, "Thumbnails");
        t.qZA();
        t.O4$();
        t.TgZ(5, "svg", 4);
        t._UZ(6, "path", 5);
        t.qZA()();
        t.kcU();
        t.TgZ(7, "button", 6)(8, "span", 7);
        t._uU(9, "Document Outline");
        t.qZA();
        t.O4$();
        t.TgZ(10, "svg", 4);
        t._UZ(11, "path", 8);
        t.qZA()();
        t.kcU();
        t.TgZ(12, "button", 9)(13, "span", 10);
        t._uU(14, "Attachments");
        t.qZA();
        t.O4$();
        t.TgZ(15, "svg", 4);
        t._UZ(16, "path", 11);
        t.qZA()();
        t.kcU();
        t.TgZ(17, "button", 12)(18, "span", 13);
        t._uU(19, "Layers");
        t.qZA();
        t.O4$();
        t.TgZ(20, "svg", 14);
        t._UZ(21, "path", 15);
        t.qZA()()();
        t.kcU();
        t.TgZ(22, "div", 16)(23, "div", 17);
        t._UZ(24, "div", 18);
        t.TgZ(25, "button", 19)(26, "span", 20);
        t._uU(27, "Current Outline Item");
        t.qZA();
        t.O4$();
        t.TgZ(28, "svg", 21);
        t._UZ(29, "path", 22)(30, "path", 23);
        t.qZA()()()()();
      }
      if (be & 2) {
        t.Udp("height", Bt.height);
        t.xp6(2);
        t.Udp("zoom", Bt.mobileFriendlyZoomScale);
        t.xp6(5);
        t.Udp("zoom", Bt.mobileFriendlyZoomScale);
        t.xp6(5);
        t.Udp("zoom", Bt.mobileFriendlyZoomScale);
        t.xp6(5);
        t.Udp("zoom", Bt.mobileFriendlyZoomScale);
        t.xp6(8);
        t.Udp("zoom", Bt.mobileFriendlyZoomScale);
      }
    },
    styles: ["button.toolbarButton[_ngcontent-%COMP%]{margin-right:4px!important;width:22px;height:22px}div#toolbarSidebar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:4px!important}"]
  });
  return at;
})();
let vs = (() => {
  class at {
    constructor(be, Bt) {
      this.elementRef = be;
      this.ref = Bt;
      this.sidebarVisible = true;
      this.mobileFriendlyZoomScale = 1;
      this.showSidebarButton = true;
      this.thumbnailDrawn = new t.vpe();
      this.hideSidebarToolbar = true;
    }
    showToolbarWhenNecessary() {
      const Bt = this.elementRef.nativeElement.querySelectorAll("button");
      let an = 0;
      for (let Gn = 0; Gn < Bt.length; Gn++) {
        if (!Bt.item(Gn).hidden) {
          an++;
        }
      }
      this.hideSidebarToolbar = an <= 1;
      this.ref.markForCheck();
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.SBq), t.Y36(t.sBO));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-sidebar"]],
    inputs: {
      sidebarPositionTop: "sidebarPositionTop",
      sidebarVisible: "sidebarVisible",
      mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
      showSidebarButton: "showSidebarButton",
      customSidebar: "customSidebar",
      customThumbnail: "customThumbnail"
    },
    outputs: {
      thumbnailDrawn: "thumbnailDrawn"
    },
    ngContentSelectors: Z,
    decls: 4,
    vars: 1,
    consts: [[4, "ngTemplateOutlet"], ["defaultSidebar", ""], ["id", "sidebarContainer"], ["id", "additionalSidebarContainer"], [3, "mobileFriendlyZoomScale"], [3, "customThumbnail", "hideSidebarToolbar", "mobileFriendlyZoomScale", "thumbnailDrawn"], ["id", "sidebarResizer", 1, "hidden"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.F$t();
        t.TgZ(0, "div");
        t.YNc(1, X, 1, 0, "ng-content", 0);
        t.qZA();
        t.YNc(2, le, 5, 8, "ng-template", null, 1, t.W1O);
      }
      if (be & 2) {
        const an = t.MAs(3);
        t.xp6(1);
        t.Q6J("ngTemplateOutlet", Bt.customSidebar ? Bt.customSidebar : an);
      }
    },
    dependencies: [rs, Br, b.tP]
  });
  return at;
})();
let so = (() => {
  class at {
    constructor(be, Bt) {
      this.renderer = be;
      this.document = Bt;
    }
    ngOnInit() {
      this.injectStyle();
    }
    injectStyle() {
      const be = this.document.createElement("STYLE");
      be.id = "pdf-acroform-css";
      hn(be, ":root{--form-anchor-hover-color: rgba(255, 255, 0, 1);--annotation-unfocused-field-background: unset;--form-widget-border-color: lightgrey;--form-widget-color: lightgrey;--form-widget-background-color: black;--form-check-color: lightgrey;--annotation-popup-background-color: rgba(255, 255, 153, 1);--annotation-popup-shadow-color: rgba(136, 136, 136, 1);--annotation-popup-border-top-color: lightgrey;--xfa-layer-highlight: rgba(239, 203, 237, 1);--xfa-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\");--xfa-highlight-selected-background-color: rgba(203, 223, 203, 1);--xfa-selection-background-color: rgba(0, 0, 255, 1)} :root{--annotation-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\")}@media(forced-colors: active){.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid selectedItem}}.annotationLayer{position:absolute;top:0;left:0;pointer-events:none;transform-origin:0 0}.annotationLayer section{position:absolute;text-align:initial;pointer-events:auto;box-sizing:border-box;transform-origin:0 0}.annotationLayer .linkAnnotation>a,.annotationLayer .buttonWidgetAnnotation.pushButton>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer .buttonWidgetAnnotation.pushButton>canvas{width:100%;height:100%}.annotationLayer .linkAnnotation>a:hover,.annotationLayer .buttonWidgetAnnotation.pushButton>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer;width:100%;height:100%}.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea,.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{background-image:var(--annotation-unfocused-field-background);border:1px solid rgba(0,0,0,0);box-sizing:border-box;font:calc(9px*var(--scale-factor)) sans-serif;height:100%;margin:0;vertical-align:top;width:100%}.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid red}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{resize:none}.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled]{background:none;border:1px solid rgba(0,0,0,0);cursor:not-allowed}.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,.annotationLayer .buttonWidgetAnnotation.radioButton input:hover{border:1px solid #000}.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus,.annotationLayer .choiceWidgetAnnotation select:focus{background:none;border:1px solid rgba(0,0,0,0)}.annotationLayer .textWidgetAnnotation input :focus,.annotationLayer .textWidgetAnnotation textarea :focus,.annotationLayer .choiceWidgetAnnotation select :focus,.annotationLayer .buttonWidgetAnnotation.checkBox :focus,.annotationLayer .buttonWidgetAnnotation.radioButton :focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:CanvasText;content:\"\";display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:103%}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{appearance:none}.annotationLayer .popupTriggerArea{height:100%;width:100%}.annotationLayer .popupWrapper{position:absolute;font-size:calc(9px*var(--scale-factor));width:100%;min-width:calc(180px*var(--scale-factor));pointer-events:none}.annotationLayer .popup{position:absolute;z-index:200;max-width:calc(180px*var(--scale-factor));background-color:#ff9;box-shadow:0 calc(2px*var(--scale-factor)) calc(5px*var(--scale-factor)) #888;border-radius:calc(2px*var(--scale-factor));padding:calc(6px*var(--scale-factor));margin-left:calc(5px*var(--scale-factor));cursor:pointer;font:message-box;white-space:normal;word-wrap:break-word;pointer-events:auto}.annotationLayer .popup>*{font-size:calc(9px*var(--scale-factor))}.annotationLayer .popup h1{display:inline-block}.annotationLayer .popupDate{display:inline-block;margin-left:calc(5px*var(--scale-factor))}.annotationLayer .popupContent{border-top:1px solid #333;margin-top:calc(2px*var(--scale-factor));padding-top:calc(2px*var(--scale-factor))}.annotationLayer .richText>*{white-space:pre-wrap;font-size:calc(9px*var(--scale-factor))}.annotationLayer .highlightAnnotation,.annotationLayer .underlineAnnotation,.annotationLayer .squigglyAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .lineAnnotation svg line,.annotationLayer .squareAnnotation svg rect,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .caretAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .stampAnnotation,.annotationLayer .fileAttachmentAnnotation{cursor:pointer}.annotationLayer section svg{position:absolute;width:100%;height:100%}.annotationLayer .annotationTextContent{position:absolute;width:100%;height:100%;opacity:0;color:rgba(0,0,0,0);user-select:none;pointer-events:none}.annotationLayer .annotationTextContent span{width:100%;display:inline-block} .xfaLayer .highlight{margin:-1px;padding:1px;background-color:var(--xfa-layer-highlight);border-radius:4px}.xfaLayer .highlight.appended{position:initial}.xfaLayer .highlight.begin{border-radius:4px 0 0 4px}.xfaLayer .highlight.end{border-radius:0 4px 4px 0}.xfaLayer .highlight.middle{border-radius:0}.xfaLayer .highlight.selected{background-color:var(--xfa-highlight-selected-background-color)}.xfaLayer ::selection{background:var(--xfa-selection-background-color)}.xfaPage{overflow:hidden;position:relative}.xfaContentarea{position:absolute}.xfaPrintOnly{display:none}.xfaLayer{position:absolute;text-align:initial;top:0;left:0;transform-origin:0 0;line-height:1.2}.xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;font-kerning:inherit;letter-spacing:-0.01px;text-align:inherit;text-decoration:inherit;box-sizing:border-box;background-color:rgba(0,0,0,0);padding:0;margin:0;pointer-events:auto;line-height:inherit}.xfaLayer div{pointer-events:none}.xfaLayer svg{pointer-events:none}.xfaLayer svg *{pointer-events:none}.xfaLayer a{color:blue}.xfaRich li{margin-left:3em}.xfaFont{color:#000;font-weight:normal;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}.xfaCaption{overflow:hidden;flex:0 0 auto}.xfaCaptionForCheckButton{overflow:hidden;flex:1 1 auto}.xfaLabel{height:100%;width:100%}.xfaLeft{display:flex;flex-direction:row;align-items:center}.xfaRight{display:flex;flex-direction:row-reverse;align-items:center}.xfaLeft>.xfaCaption,.xfaLeft>.xfaCaptionForCheckButton,.xfaRight>.xfaCaption,.xfaRight>.xfaCaptionForCheckButton{max-height:100%}.xfaTop{display:flex;flex-direction:column;align-items:flex-start}.xfaBottom{display:flex;flex-direction:column-reverse;align-items:flex-start}.xfaTop>.xfaCaption,.xfaTop>.xfaCaptionForCheckButton,.xfaBottom>.xfaCaption,.xfaBottom>.xfaCaptionForCheckButton{width:100%}.xfaBorder{background-color:rgba(0,0,0,0);position:absolute;pointer-events:none}.xfaWrapped{width:100%;height:100%}.xfaTextfield:focus,.xfaSelect:focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto;outline-offset:-1px}.xfaCheckbox:focus,.xfaRadio:focus{outline:auto}.xfaTextfield,.xfaSelect{height:100%;width:100%;flex:1 1 auto;border:none;resize:none;background-image:var(--xfa-unfocused-field-background)}.xfaTop>.xfaTextfield,.xfaTop>.xfaSelect,.xfaBottom>.xfaTextfield,.xfaBottom>.xfaSelect{flex:0 1 auto}.xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}.xfaLink{width:100%;height:100%;position:absolute;top:0;left:0}.xfaCheckbox,.xfaRadio{width:100%;height:100%;flex:0 0 auto;border:none}.xfaRich{white-space:pre-wrap;width:100%;height:100%}.xfaImage{object-position:left top;object-fit:contain;width:100%;height:100%}.xfaLrTb,.xfaRlTb,.xfaTb{display:flex;flex-direction:column;align-items:stretch}.xfaLr{display:flex;flex-direction:row;align-items:stretch}.xfaRl{display:flex;flex-direction:row-reverse;align-items:stretch}.xfaTb>div{justify-content:left}.xfaPosition{position:relative}.xfaArea{position:relative}.xfaValignMiddle{display:flex;align-items:center}.xfaTable{display:flex;flex-direction:column;align-items:stretch}.xfaTable .xfaRow{display:flex;flex-direction:row;align-items:stretch}.xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;align-items:stretch;flex:1}.xfaTable .xfaRlRow>div{flex:1}.xfaNonInteractive input,.xfaNonInteractive textarea,.xfaDisabled input,.xfaDisabled textarea,.xfaReadOnly input,.xfaReadOnly textarea{background:initial}@media print{.xfaTextfield,.xfaSelect{background:rgba(0,0,0,0)}.xfaSelect{appearance:none;text-indent:1px;text-overflow:\"\"}} :root{--focus-outline: solid 2px blue;--hover-outline: dashed 2px blue;--freetext-line-height: 1.35;--freetext-padding: 2px;--editorFreeText-editing-cursor: text;--editorInk-editing-cursor: url(\"data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.49913 12.6251C2.61913 12.6251 2.73913 12.6051 2.85713 12.5661L6.29013 11.4201L13.2891 4.4221C14.0191 3.6911 14.0191 2.5011 13.2891 1.7701L12.2291 0.710098C11.4971 -0.0199023 10.3091 -0.0199023 9.57713 0.710098L2.57813 7.7091L1.43313 11.1451C1.29813 11.5511 1.40213 11.9931 1.70513 12.2951C1.92113 12.5101 2.20613 12.6251 2.49913 12.6251ZM10.4611 1.5951C10.7031 1.3511 11.1021 1.3511 11.3441 1.5951L12.4051 2.6561C12.6491 2.8991 12.6491 3.2961 12.4051 3.5391L11.3401 4.6051L9.39513 2.6601L10.4611 1.5951ZM3.67013 8.3851L8.51013 3.5451L10.4541 5.4891L5.61413 10.3301L2.69713 11.3031L3.67013 8.3851Z' fill='black'/><path d='M14.8169 13.314L13.0229 13.862C12.3309 14.073 11.5909 14.111 10.8859 13.968L8.80391 13.551C7.58491 13.308 6.29791 13.48 5.18491 14.036C3.95291 14.652 2.46691 14.412 1.49191 13.436L1.44091 13.385L0.60791 14.321C1.46291 15.175 2.59991 15.625 3.75291 15.625C4.42891 15.625 5.10991 15.471 5.74391 15.153C6.60891 14.721 7.60891 14.586 8.55891 14.777L10.6409 15.194C11.5509 15.376 12.5009 15.327 13.3879 15.056L15.1819 14.508L14.8169 13.314Z' fill='black'/></svg>\") 0 16, pointer;--editorFreeText-editing-cursor: url(\"data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2.75H12.5V2.25V1V0.5H12H10.358C9.91165 0.5 9.47731 0.625661 9.09989 0.860442L9.09886 0.861087L8 1.54837L6.89997 0.860979L6.89911 0.860443C6.5218 0.625734 6.08748 0.5 5.642 0.5H4H3.5V1V2.25V2.75H4H5.642C5.66478 2.75 5.6885 2.75641 5.71008 2.76968C5.71023 2.76977 5.71038 2.76986 5.71053 2.76995L6.817 3.461C6.81704 3.46103 6.81709 3.46105 6.81713 3.46108C6.81713 3.46108 6.81713 3.46108 6.81714 3.46109C6.8552 3.48494 6.876 3.52285 6.876 3.567V8V12.433C6.876 12.4771 6.85523 12.515 6.81722 12.5389C6.81715 12.5389 6.81707 12.539 6.817 12.539L5.70953 13.23C5.70941 13.2301 5.70929 13.2302 5.70917 13.2303C5.68723 13.2438 5.6644 13.25 5.641 13.25H4H3.5V13.75V15V15.5H4H5.642C6.08835 15.5 6.52269 15.3743 6.90011 15.1396L6.90086 15.1391L8 14.4526L9.10003 15.14L9.10089 15.1406C9.47831 15.3753 9.91265 15.501 10.359 15.501H12H12.5V15.001V13.751V13.251H12H10.358C10.3352 13.251 10.3115 13.2446 10.2899 13.2313C10.2897 13.2312 10.2896 13.2311 10.2895 13.231L9.183 12.54C9.18298 12.54 9.18295 12.54 9.18293 12.54C9.18291 12.5399 9.18288 12.5399 9.18286 12.5399C9.14615 12.5169 9.125 12.4797 9.125 12.434V8V3.567C9.125 3.52266 9.14603 3.48441 9.18364 3.4606C9.18377 3.46052 9.1839 3.46043 9.18404 3.46035L10.2895 2.76995C10.2896 2.76985 10.2898 2.76975 10.2899 2.76966C10.3119 2.75619 10.3346 2.75 10.358 2.75H12Z' fill='black' stroke='white'/></svg>\") 0 16, text}@media screen and (forced-colors: active){:root{--focus-outline: solid 3px ButtonText;--hover-outline: dashed 3px ButtonText}}[data-editor-rotation=\"90\"]{transform:rotate(90deg)}[data-editor-rotation=\"180\"]{transform:rotate(180deg)}[data-editor-rotation=\"270\"]{transform:rotate(270deg)}.annotationEditorLayer{background:transparent;position:absolute;top:0;left:0;font-size:calc(100px*var(--scale-factor));transform-origin:0 0;cursor:auto;z-index:4}.annotationEditorLayer.freeTextEditing{cursor:var(--editorFreeText-editing-cursor)}.annotationEditorLayer.inkEditing{cursor:var(--editorInk-editing-cursor)}.annotationEditorLayer .selectedEditor{outline:var(--focus-outline);resize:none}.annotationEditorLayer .freeTextEditor{position:absolute;background:transparent;border-radius:3px;padding:calc(var(--freetext-padding)*var(--scale-factor));resize:none;width:auto;height:auto;z-index:1;transform-origin:0 0;touch-action:none;cursor:auto}.annotationEditorLayer .freeTextEditor .internal{background:transparent;border:none;top:0;left:0;overflow:visible;white-space:nowrap;resize:none;font:10px sans-serif;line-height:var(--freetext-line-height)}.annotationEditorLayer .freeTextEditor .overlay{position:absolute;display:none;background:transparent;top:0;left:0;width:100%;height:100%}.annotationEditorLayer .freeTextEditor .overlay.enabled{display:block}.annotationEditorLayer .freeTextEditor .internal:empty::before{content:attr(default-content);color:gray}.annotationEditorLayer .freeTextEditor .internal:focus{outline:none}.annotationEditorLayer .inkEditor.disabled{resize:none}.annotationEditorLayer .inkEditor.disabled.selectedEditor{resize:horizontal}.annotationEditorLayer .freeTextEditor:hover:not(.selectedEditor),.annotationEditorLayer .inkEditor:hover:not(.selectedEditor){outline:var(--hover-outline)}.annotationEditorLayer .inkEditor{position:absolute;background:transparent;border-radius:3px;overflow:auto;width:100%;height:100%;z-index:1;transform-origin:0 0;cursor:auto}.annotationEditorLayer .inkEditor.editing{resize:none;cursor:inherit}.annotationEditorLayer .inkEditor .inkEditorCanvas{position:absolute;top:0;left:0;width:100%;height:100%;touch-action:none}");
      this.renderer.appendChild(this.document.head, be);
    }
    ngOnDestroy() {
      const be = this.document.getElementById("pdf-acroform-css");
      if (be && be.parentElement) {
        be.parentElement.removeChild(be);
      }
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.Qsj), t.Y36(b.K0));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-acroform-dark-theme"]],
    decls: 0,
    vars: 0,
    template: function (be, Bt) {},
    encapsulation: 2
  });
  return at;
})();
let js = (() => {
  class at {
    constructor(be, Bt) {
      this.renderer = be;
      this.document = Bt;
    }
    ngOnInit() {
      this.injectStyle();
    }
    injectStyle() {
      const be = this.document.createElement("STYLE");
      be.id = "pdf-acroform-css";
      hn(be, ":root{--form-anchor-hover-color: rgba(255, 255, 0, 1);--annotation-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\");--form-widget-border-color: rgba(0, 0, 0, 1);--form-widget-color: inherit;--form-widget-background-color: inherit;--form-check-color: rgba(0, 0, 0, 1);--annotation-popup-background-color: rgba(255, 255, 153, 1);--annotation-popup-shadow-color: rgba(136, 136, 136, 1);--annotation-popup-border-top-color: rgba(51, 51, 51, 1);--xfa-layer-highlight: rgba(239, 203, 237, 1);--xfa-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\");--xfa-highlight-selected-background-color: rgba(203, 223, 203, 1);--xfa-selection-background-color: rgba(0, 0, 255, 1)} :root{--annotation-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\")}@media(forced-colors: active){.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid selectedItem}}.annotationLayer{position:absolute;top:0;left:0;pointer-events:none;transform-origin:0 0}.annotationLayer section{position:absolute;text-align:initial;pointer-events:auto;box-sizing:border-box;transform-origin:0 0}.annotationLayer .linkAnnotation>a,.annotationLayer .buttonWidgetAnnotation.pushButton>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer .buttonWidgetAnnotation.pushButton>canvas{width:100%;height:100%}.annotationLayer .linkAnnotation>a:hover,.annotationLayer .buttonWidgetAnnotation.pushButton>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer;width:100%;height:100%}.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea,.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{background-image:var(--annotation-unfocused-field-background);border:1px solid rgba(0,0,0,0);box-sizing:border-box;font:calc(9px*var(--scale-factor)) sans-serif;height:100%;margin:0;vertical-align:top;width:100%}.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid red}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{resize:none}.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled]{background:none;border:1px solid rgba(0,0,0,0);cursor:not-allowed}.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,.annotationLayer .buttonWidgetAnnotation.radioButton input:hover{border:1px solid #000}.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus,.annotationLayer .choiceWidgetAnnotation select:focus{background:none;border:1px solid rgba(0,0,0,0)}.annotationLayer .textWidgetAnnotation input :focus,.annotationLayer .textWidgetAnnotation textarea :focus,.annotationLayer .choiceWidgetAnnotation select :focus,.annotationLayer .buttonWidgetAnnotation.checkBox :focus,.annotationLayer .buttonWidgetAnnotation.radioButton :focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:CanvasText;content:\"\";display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:103%}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{appearance:none}.annotationLayer .popupTriggerArea{height:100%;width:100%}.annotationLayer .popupWrapper{position:absolute;font-size:calc(9px*var(--scale-factor));width:100%;min-width:calc(180px*var(--scale-factor));pointer-events:none}.annotationLayer .popup{position:absolute;z-index:200;max-width:calc(180px*var(--scale-factor));background-color:#ff9;box-shadow:0 calc(2px*var(--scale-factor)) calc(5px*var(--scale-factor)) #888;border-radius:calc(2px*var(--scale-factor));padding:calc(6px*var(--scale-factor));margin-left:calc(5px*var(--scale-factor));cursor:pointer;font:message-box;white-space:normal;word-wrap:break-word;pointer-events:auto}.annotationLayer .popup>*{font-size:calc(9px*var(--scale-factor))}.annotationLayer .popup h1{display:inline-block}.annotationLayer .popupDate{display:inline-block;margin-left:calc(5px*var(--scale-factor))}.annotationLayer .popupContent{border-top:1px solid #333;margin-top:calc(2px*var(--scale-factor));padding-top:calc(2px*var(--scale-factor))}.annotationLayer .richText>*{white-space:pre-wrap;font-size:calc(9px*var(--scale-factor))}.annotationLayer .highlightAnnotation,.annotationLayer .underlineAnnotation,.annotationLayer .squigglyAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .lineAnnotation svg line,.annotationLayer .squareAnnotation svg rect,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .caretAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .stampAnnotation,.annotationLayer .fileAttachmentAnnotation{cursor:pointer}.annotationLayer section svg{position:absolute;width:100%;height:100%}.annotationLayer .annotationTextContent{position:absolute;width:100%;height:100%;opacity:0;color:rgba(0,0,0,0);user-select:none;pointer-events:none}.annotationLayer .annotationTextContent span{width:100%;display:inline-block} .xfaLayer .highlight{margin:-1px;padding:1px;background-color:var(--xfa-layer-highlight);border-radius:4px}.xfaLayer .highlight.appended{position:initial}.xfaLayer .highlight.begin{border-radius:4px 0 0 4px}.xfaLayer .highlight.end{border-radius:0 4px 4px 0}.xfaLayer .highlight.middle{border-radius:0}.xfaLayer .highlight.selected{background-color:var(--xfa-highlight-selected-background-color)}.xfaLayer ::selection{background:var(--xfa-selection-background-color)}.xfaPage{overflow:hidden;position:relative}.xfaContentarea{position:absolute}.xfaPrintOnly{display:none}.xfaLayer{position:absolute;text-align:initial;top:0;left:0;transform-origin:0 0;line-height:1.2}.xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;font-kerning:inherit;letter-spacing:-0.01px;text-align:inherit;text-decoration:inherit;box-sizing:border-box;background-color:rgba(0,0,0,0);padding:0;margin:0;pointer-events:auto;line-height:inherit}.xfaLayer div{pointer-events:none}.xfaLayer svg{pointer-events:none}.xfaLayer svg *{pointer-events:none}.xfaLayer a{color:blue}.xfaRich li{margin-left:3em}.xfaFont{color:#000;font-weight:normal;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}.xfaCaption{overflow:hidden;flex:0 0 auto}.xfaCaptionForCheckButton{overflow:hidden;flex:1 1 auto}.xfaLabel{height:100%;width:100%}.xfaLeft{display:flex;flex-direction:row;align-items:center}.xfaRight{display:flex;flex-direction:row-reverse;align-items:center}.xfaLeft>.xfaCaption,.xfaLeft>.xfaCaptionForCheckButton,.xfaRight>.xfaCaption,.xfaRight>.xfaCaptionForCheckButton{max-height:100%}.xfaTop{display:flex;flex-direction:column;align-items:flex-start}.xfaBottom{display:flex;flex-direction:column-reverse;align-items:flex-start}.xfaTop>.xfaCaption,.xfaTop>.xfaCaptionForCheckButton,.xfaBottom>.xfaCaption,.xfaBottom>.xfaCaptionForCheckButton{width:100%}.xfaBorder{background-color:rgba(0,0,0,0);position:absolute;pointer-events:none}.xfaWrapped{width:100%;height:100%}.xfaTextfield:focus,.xfaSelect:focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto;outline-offset:-1px}.xfaCheckbox:focus,.xfaRadio:focus{outline:auto}.xfaTextfield,.xfaSelect{height:100%;width:100%;flex:1 1 auto;border:none;resize:none;background-image:var(--xfa-unfocused-field-background)}.xfaTop>.xfaTextfield,.xfaTop>.xfaSelect,.xfaBottom>.xfaTextfield,.xfaBottom>.xfaSelect{flex:0 1 auto}.xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}.xfaLink{width:100%;height:100%;position:absolute;top:0;left:0}.xfaCheckbox,.xfaRadio{width:100%;height:100%;flex:0 0 auto;border:none}.xfaRich{white-space:pre-wrap;width:100%;height:100%}.xfaImage{object-position:left top;object-fit:contain;width:100%;height:100%}.xfaLrTb,.xfaRlTb,.xfaTb{display:flex;flex-direction:column;align-items:stretch}.xfaLr{display:flex;flex-direction:row;align-items:stretch}.xfaRl{display:flex;flex-direction:row-reverse;align-items:stretch}.xfaTb>div{justify-content:left}.xfaPosition{position:relative}.xfaArea{position:relative}.xfaValignMiddle{display:flex;align-items:center}.xfaTable{display:flex;flex-direction:column;align-items:stretch}.xfaTable .xfaRow{display:flex;flex-direction:row;align-items:stretch}.xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;align-items:stretch;flex:1}.xfaTable .xfaRlRow>div{flex:1}.xfaNonInteractive input,.xfaNonInteractive textarea,.xfaDisabled input,.xfaDisabled textarea,.xfaReadOnly input,.xfaReadOnly textarea{background:initial}@media print{.xfaTextfield,.xfaSelect{background:rgba(0,0,0,0)}.xfaSelect{appearance:none;text-indent:1px;text-overflow:\"\"}} :root{--focus-outline: solid 2px blue;--hover-outline: dashed 2px blue;--freetext-line-height: 1.35;--freetext-padding: 2px;--editorFreeText-editing-cursor: text;--editorInk-editing-cursor: url(\"data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.49913 12.6251C2.61913 12.6251 2.73913 12.6051 2.85713 12.5661L6.29013 11.4201L13.2891 4.4221C14.0191 3.6911 14.0191 2.5011 13.2891 1.7701L12.2291 0.710098C11.4971 -0.0199023 10.3091 -0.0199023 9.57713 0.710098L2.57813 7.7091L1.43313 11.1451C1.29813 11.5511 1.40213 11.9931 1.70513 12.2951C1.92113 12.5101 2.20613 12.6251 2.49913 12.6251ZM10.4611 1.5951C10.7031 1.3511 11.1021 1.3511 11.3441 1.5951L12.4051 2.6561C12.6491 2.8991 12.6491 3.2961 12.4051 3.5391L11.3401 4.6051L9.39513 2.6601L10.4611 1.5951ZM3.67013 8.3851L8.51013 3.5451L10.4541 5.4891L5.61413 10.3301L2.69713 11.3031L3.67013 8.3851Z' fill='black'/><path d='M14.8169 13.314L13.0229 13.862C12.3309 14.073 11.5909 14.111 10.8859 13.968L8.80391 13.551C7.58491 13.308 6.29791 13.48 5.18491 14.036C3.95291 14.652 2.46691 14.412 1.49191 13.436L1.44091 13.385L0.60791 14.321C1.46291 15.175 2.59991 15.625 3.75291 15.625C4.42891 15.625 5.10991 15.471 5.74391 15.153C6.60891 14.721 7.60891 14.586 8.55891 14.777L10.6409 15.194C11.5509 15.376 12.5009 15.327 13.3879 15.056L15.1819 14.508L14.8169 13.314Z' fill='black'/></svg>\") 0 16, pointer;--editorFreeText-editing-cursor: url(\"data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2.75H12.5V2.25V1V0.5H12H10.358C9.91165 0.5 9.47731 0.625661 9.09989 0.860442L9.09886 0.861087L8 1.54837L6.89997 0.860979L6.89911 0.860443C6.5218 0.625734 6.08748 0.5 5.642 0.5H4H3.5V1V2.25V2.75H4H5.642C5.66478 2.75 5.6885 2.75641 5.71008 2.76968C5.71023 2.76977 5.71038 2.76986 5.71053 2.76995L6.817 3.461C6.81704 3.46103 6.81709 3.46105 6.81713 3.46108C6.81713 3.46108 6.81713 3.46108 6.81714 3.46109C6.8552 3.48494 6.876 3.52285 6.876 3.567V8V12.433C6.876 12.4771 6.85523 12.515 6.81722 12.5389C6.81715 12.5389 6.81707 12.539 6.817 12.539L5.70953 13.23C5.70941 13.2301 5.70929 13.2302 5.70917 13.2303C5.68723 13.2438 5.6644 13.25 5.641 13.25H4H3.5V13.75V15V15.5H4H5.642C6.08835 15.5 6.52269 15.3743 6.90011 15.1396L6.90086 15.1391L8 14.4526L9.10003 15.14L9.10089 15.1406C9.47831 15.3753 9.91265 15.501 10.359 15.501H12H12.5V15.001V13.751V13.251H12H10.358C10.3352 13.251 10.3115 13.2446 10.2899 13.2313C10.2897 13.2312 10.2896 13.2311 10.2895 13.231L9.183 12.54C9.18298 12.54 9.18295 12.54 9.18293 12.54C9.18291 12.5399 9.18288 12.5399 9.18286 12.5399C9.14615 12.5169 9.125 12.4797 9.125 12.434V8V3.567C9.125 3.52266 9.14603 3.48441 9.18364 3.4606C9.18377 3.46052 9.1839 3.46043 9.18404 3.46035L10.2895 2.76995C10.2896 2.76985 10.2898 2.76975 10.2899 2.76966C10.3119 2.75619 10.3346 2.75 10.358 2.75H12Z' fill='black' stroke='white'/></svg>\") 0 16, text}@media screen and (forced-colors: active){:root{--focus-outline: solid 3px ButtonText;--hover-outline: dashed 3px ButtonText}}[data-editor-rotation=\"90\"]{transform:rotate(90deg)}[data-editor-rotation=\"180\"]{transform:rotate(180deg)}[data-editor-rotation=\"270\"]{transform:rotate(270deg)}.annotationEditorLayer{background:transparent;position:absolute;top:0;left:0;font-size:calc(100px*var(--scale-factor));transform-origin:0 0;cursor:auto;z-index:4}.annotationEditorLayer.freeTextEditing{cursor:var(--editorFreeText-editing-cursor)}.annotationEditorLayer.inkEditing{cursor:var(--editorInk-editing-cursor)}.annotationEditorLayer .selectedEditor{outline:var(--focus-outline);resize:none}.annotationEditorLayer .freeTextEditor{position:absolute;background:transparent;border-radius:3px;padding:calc(var(--freetext-padding)*var(--scale-factor));resize:none;width:auto;height:auto;z-index:1;transform-origin:0 0;touch-action:none;cursor:auto}.annotationEditorLayer .freeTextEditor .internal{background:transparent;border:none;top:0;left:0;overflow:visible;white-space:nowrap;resize:none;font:10px sans-serif;line-height:var(--freetext-line-height)}.annotationEditorLayer .freeTextEditor .overlay{position:absolute;display:none;background:transparent;top:0;left:0;width:100%;height:100%}.annotationEditorLayer .freeTextEditor .overlay.enabled{display:block}.annotationEditorLayer .freeTextEditor .internal:empty::before{content:attr(default-content);color:gray}.annotationEditorLayer .freeTextEditor .internal:focus{outline:none}.annotationEditorLayer .inkEditor.disabled{resize:none}.annotationEditorLayer .inkEditor.disabled.selectedEditor{resize:horizontal}.annotationEditorLayer .freeTextEditor:hover:not(.selectedEditor),.annotationEditorLayer .inkEditor:hover:not(.selectedEditor){outline:var(--hover-outline)}.annotationEditorLayer .inkEditor{position:absolute;background:transparent;border-radius:3px;overflow:auto;width:100%;height:100%;z-index:1;transform-origin:0 0;cursor:auto}.annotationEditorLayer .inkEditor.editing{resize:none;cursor:inherit}.annotationEditorLayer .inkEditor .inkEditorCanvas{position:absolute;top:0;left:0;width:100%;height:100%;touch-action:none}");
      this.renderer.appendChild(this.document.head, be);
    }
    ngOnDestroy() {
      const be = this.document.getElementById("pdf-acroform-css");
      if (be && be.parentElement) {
        be.parentElement.removeChild(be);
      }
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.Qsj), t.Y36(b.K0));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-acroform-default-theme"]],
    decls: 0,
    vars: 0,
    template: function (be, Bt) {},
    encapsulation: 2
  });
  return at;
})();
let ns = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-context-menu"]],
    decls: 5,
    vars: 0,
    consts: [["type", "context", "id", "viewerContextMenu", 2, "display", "none"], ["id", "contextFirstPage", 2, "display", "none"], ["id", "contextLastPage", 2, "display", "none"], ["id", "contextPageRotateCw", 2, "display", "none"], ["id", "contextPageRotateCcw", 2, "display", "none"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "div", 0);
        t._UZ(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        t.qZA();
      }
    },
    styles: ["[_nghost-%COMP%]{margin-top:4px}"]
  });
  return at;
})();
let pr = (() => {
  class at {
    constructor() {
      this.showDownloadButton = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-download"]],
    inputs: {
      showDownloadButton: "showDownloadButton"
    },
    decls: 5,
    vars: 2,
    consts: [["type", "button", "id", "download", "title", "Download", "data-l10n-id", "download", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z"], ["data-l10n-id", "download_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Download");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showDownloadButton);
      }
    },
    styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let Bn = (() => {
  class at {
    constructor() {
      this.showEditor = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-editor"]],
    inputs: {
      showEditor: "showEditor"
    },
    decls: 2,
    vars: 1,
    consts: [["id", "editorModeButtons", "class", "splitToolbarButton toggled hiddenTinyView", "role", "radiogroup", 4, "ngIf"], ["id", "editorModeSeparator", 1, "verticalToolbarSeparator", "hiddenTinyView"], ["id", "editorModeButtons", "role", "radiogroup", 1, "splitToolbarButton", "toggled", "hiddenTinyView"], ["id", "editorFreeText", "disabled", "disabled", "title", "Text", "role", "radio", "type", "button", "aria-checked", "false", "tabindex", "34", "data-l10n-id", "editor_free_text2", 1, "toolbarButton"], ["data-l10n-id", "editor_free_text2_label"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z"], ["id", "editorInk", "disabled", "disabled", "title", "Draw", "role", "radio", "aria-checked", "false", "type", "button", "tabindex", "35", "data-l10n-id", "editor_ink2", 1, "toolbarButton"], ["data-l10n-id", "editor_ink2_label"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 16", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "enable-background", "new 0 0 16 16", 2, "width", "20px", "height", "20px"], ["transform", "scale(0.03125)"], ["d", "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.YNc(0, fe, 13, 0, "div", 0);
        t._UZ(1, "div", 1);
      }
      if (be & 2) {
        t.Q6J("ngIf", Bt.showEditor);
      }
    },
    dependencies: [b.O5],
    styles: ["button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let oi = (() => {
  class at {
    constructor() {
      this.showFindButton = undefined;
      this.textLayer = undefined;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-button"]],
    inputs: {
      showFindButton: "showFindButton",
      textLayer: "textLayer"
    },
    decls: 5,
    vars: 2,
    consts: [["type", "button", "id", "viewFind", "title", "Find in Document", "data-l10n-id", "findbar", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["data-l10n-id", "findbar_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Find");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showFindButton || !Bt.textLayer);
      }
    },
    styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let fi = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-current-page-only"]],
    decls: 3,
    vars: 0,
    consts: [["type", "checkbox", "id", "findCurrentPage", 1, "toolbarField"], ["for", "findCurrentPage", "data-l10n-id", "find_current_page", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0);
        t.TgZ(1, "label", 1);
        t._uU(2, " Current page only\n");
        t.qZA();
      }
    },
    styles: ["#findRange[_ngcontent-%COMP%]{margin-right:14px}"]
  });
  return at;
})();
let bn = (() => {
  class at {
    constructor() {
      this.multipleSearchTexts = false;
      this._individualWordsMode = true;
    }
    get individualWordsMode() {
      return this._individualWordsMode;
    }
    set individualWordsMode(be) {
      if (this._individualWordsMode != be) {
        const Bt = document.querySelector("ngx-extended-pdf-viewer #findInputMultiline");
        const an = document.querySelector("ngx-extended-pdf-viewer #findInput");
        if (be) {
          const Gn = Bt.value;
          if (Gn) {
            an.value = Gn.replace(/\n/, " ");
          }
        } else {
          const Gn = an.value;
          if (Gn) {
            Bt.value = Gn;
          }
        }
      }
      this._individualWordsMode = be;
      setTimeout(() => {
        window.PDFViewerApplication.findBar.dispatchEvent("");
      });
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵprov = t.Yz7({
    token: at,
    factory: at.ɵfac,
    providedIn: "root"
  });
  return at;
})();
let pn = (() => {
  class at {
    constructor(be) {
      this.pdfFindbarService = be;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(bn));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-search-input-field"]],
    decls: 2,
    vars: 5,
    consts: [["autocomplete", "off", "id", "findInput", "title", "Find", "data-l10n-id", "find_input", "name", "search-input-field", 1, "toolbarField", 3, "placeholder"], ["id", "findInputMultiline", "type", "checkbox", "placeholder", "Multiple search terms. Each line is a search term.", "data-l10n-id", "find_input_line_by_line", "lines", "3", 1, "toolbarField"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0)(1, "textarea", 1);
      }
      if (be & 2) {
        t.ekj("hidden", !Bt.pdfFindbarService.individualWordsMode);
        t.Q6J("placeholder", "Find in document…");
        t.xp6(1);
        t.ekj("hidden", Bt.pdfFindbarService.individualWordsMode);
      }
    },
    styles: ["textarea[_ngcontent-%COMP%]{width:200px;height:3.5em}textarea[_ngcontent-%COMP%]::placeholder{font-style:italic}"]
  });
  return at;
})();
let An = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-previous"]],
    decls: 5,
    vars: 0,
    consts: [["type", "button", "id", "findPrevious", "title", "Find the previous occurrence of the phrase", "data-l10n-id", "find_previous", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "find_previous_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Previous");
        t.qZA()();
      }
    },
    styles: ["button.toolbarButton#findPrevious[_ngcontent-%COMP%]{margin-top:0;width:24px;margin-left:1px!important}"]
  });
  return at;
})();
let si = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-next"]],
    decls: 5,
    vars: 0,
    consts: [["type", "button", "id", "findNext", "title", "Find the next occurrence of the phrase", "data-l10n-id", "find_next", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "find_next_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Next");
        t.qZA()();
      }
    },
    styles: ["button.toolbarButton#findNext[_ngcontent-%COMP%]{margin-top:0;margin-left:-4px!important;margin-right:3px!important;width:24px}"]
  });
  return at;
})();
let Di = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-input-area"]],
    inputs: {
      customFindbarInputArea: "customFindbarInputArea"
    },
    decls: 2,
    vars: 2,
    consts: [["id", "findbarInputContainer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["id", "findbarInputContainer"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.YNc(0, q, 4, 0, "div", 0);
        t.GkF(1, 1);
      }
      if (be & 2) {
        t.Q6J("ngIf", !Bt.customFindbarInputArea);
        t.xp6(1);
        t.Q6J("ngTemplateOutlet", Bt.customFindbarInputArea || null);
      }
    },
    dependencies: [pn, An, si, b.O5, b.tP]
  });
  return at;
})();
let dr = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-range"]],
    decls: 1,
    vars: 1,
    consts: [["autocomplete", "off", "id", "findRange", "title", "pages to search", "data-l10n-id", "find_range", "name", "search-range-field", 1, "toolbarField", 3, "placeholder"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0);
      }
      if (be & 2) {
        t.Q6J("placeholder", "pages (e.g. 6-10)");
      }
    },
    styles: ["#findRange[_ngcontent-%COMP%]{margin-right:14px}"]
  });
  return at;
})();
let Vr = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-findbar-message-container"]],
    decls: 2,
    vars: 0,
    consts: [["id", "findbarMessageContainer"], ["id", "findMsg", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "div", 0);
        t._UZ(1, "span", 1);
        t.qZA();
      }
    }
  });
  return at;
})();
let Or = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-highlight-all"]],
    decls: 3,
    vars: 0,
    consts: [["type", "checkbox", "id", "findHighlightAll", 1, "toolbarField"], ["for", "findHighlightAll", "data-l10n-id", "find_highlight", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0);
        t.TgZ(1, "label", 1);
        t._uU(2, " Highlight all\n");
        t.qZA();
      }
    }
  });
  return at;
})();
let is = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-match-case"]],
    decls: 3,
    vars: 0,
    consts: [["type", "checkbox", "id", "findMatchCase", 1, "toolbarField"], ["for", "findMatchCase", "data-l10n-id", "find_match_case_label", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0);
        t.TgZ(1, "label", 1);
        t._uU(2, " Match case\n");
        t.qZA();
      }
    }
  });
  return at;
})();
let kr = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-fuzzily"]],
    decls: 3,
    vars: 0,
    consts: [["type", "checkbox", "id", "findFuzzy", 1, "toolbarField"], ["for", "findFuzzy", "data-l10n-id", "find_fuzzy", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0);
        t.TgZ(1, "label", 1);
        t._uU(2, " Fuzzy search\n");
        t.qZA();
      }
    }
  });
  return at;
})();
let Zs = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-ignore-accents"]],
    decls: 3,
    vars: 0,
    consts: [["type", "checkbox", "id", "findIgnoreAccents", 1, "toolbarField"], ["for", "findIgnoreAccents", "data-l10n-id", "find_ignore_accents", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0);
        t.TgZ(1, "label", 1);
        t._uU(2, " Ignore accents and diacritics\n");
        t.qZA();
      }
    }
  });
  return at;
})();
let No = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-results-count"]],
    decls: 3,
    vars: 0,
    consts: [["id", "findbarMessageContainer", "aria-live", "polite"], ["id", "findResultsCount", 1, "toolbarLabel"], ["id", "findMsg", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "div", 0);
        t._UZ(1, "span", 1)(2, "span", 2);
        t.qZA();
      }
    }
  });
  return at;
})();
let bo = (() => {
  class at {
    constructor(be) {
      this.pdfFindbarService = be;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(bn));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-entire-phrase"]],
    decls: 6,
    vars: 6,
    consts: [["type", "checkbox", "id", "findMultipleSearchTexts", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "findMultipleSearchTexts", "data-l10n-id", "find_multiple_texts_label", 1, "toolbarLabel"], ["type", "checkbox", "id", "individualWordsMode", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "individualWordsMode", "id", "individualWordsModeLabel", "data-l10n-id", "find_individual_words_label", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "input", 0);
        t.NdJ("ngModelChange", function (Gn) {
          return Bt.pdfFindbarService.multipleSearchTexts = Gn;
        });
        t.qZA();
        t.TgZ(1, "label", 1);
        t._uU(2, " multiple search texts\n");
        t.qZA();
        t.TgZ(3, "input", 2);
        t.NdJ("ngModelChange", function (Gn) {
          return Bt.pdfFindbarService.individualWordsMode = Gn;
        });
        t.qZA();
        t.TgZ(4, "label", 3);
        t._uU(5, " separated by word boundaries\n");
        t.qZA();
      }
      if (be & 2) {
        t.Q6J("ngModel", Bt.pdfFindbarService.multipleSearchTexts);
        t.xp6(3);
        t.ekj("hidden", !Bt.pdfFindbarService.multipleSearchTexts);
        t.Q6J("ngModel", Bt.pdfFindbarService.individualWordsMode);
        t.xp6(1);
        t.ekj("hidden", !Bt.pdfFindbarService.multipleSearchTexts);
      }
    },
    dependencies: [k.Wl, k.JJ, k.On]
  });
  return at;
})();
let ks = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-find-entire-word"]],
    decls: 3,
    vars: 0,
    consts: [["type", "checkbox", "id", "findEntireWord", 1, "toolbarField"], ["for", "findEntireWord", "data-l10n-id", "find_entire_word_label", 1, "toolbarLabel"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0);
        t.TgZ(1, "label", 1);
        t._uU(2, " Whole words\n");
        t.qZA();
      }
    }
  });
  return at;
})();
let Zr = (() => {
  class at {
    constructor() {
      this.showFindButton = true;
      this.showFindHighlightAll = true;
      this.showFindMatchCase = true;
      this.showFindCurrentPageOnly = true;
      this.showFindPageRange = true;
      this.showFindEntireWord = true;
      this.showFindEntirePhrase = true;
      this.showFindIgnoreAccents = true;
      this.showFindFuzzySearch = true;
      this.showFindResultsCount = true;
      this.showFindMessages = true;
      this.pdfJsVersion = ne(Ut.assetsFolder);
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-findbar"]],
    inputs: {
      showFindButton: "showFindButton",
      mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
      findbarLeft: "findbarLeft",
      findbarTop: "findbarTop",
      customFindbarInputArea: "customFindbarInputArea",
      customFindbar: "customFindbar",
      customFindbarButtons: "customFindbarButtons",
      showFindHighlightAll: "showFindHighlightAll",
      showFindMatchCase: "showFindMatchCase",
      showFindCurrentPageOnly: "showFindCurrentPageOnly",
      showFindPageRange: "showFindPageRange",
      showFindEntireWord: "showFindEntireWord",
      showFindEntirePhrase: "showFindEntirePhrase",
      showFindIgnoreAccents: "showFindIgnoreAccents",
      showFindFuzzySearch: "showFindFuzzySearch",
      showFindResultsCount: "showFindResultsCount",
      showFindMessages: "showFindMessages"
    },
    decls: 5,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"], ["defaultFindbar", ""], ["defaultFindbarButtons", ""], ["id", "findbar", 1, "findbar", "hidden", "doorHanger"], [3, "customFindbarInputArea"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.GkF(0, 0);
        t.YNc(1, j, 2, 11, "ng-template", null, 1, t.W1O);
        t.YNc(3, G, 11, 21, "ng-template", null, 2, t.W1O);
      }
      if (be & 2) {
        const an = t.MAs(2);
        t.Q6J("ngTemplateOutlet", Bt.customFindbar ? Bt.customFindbar : an);
      }
    },
    dependencies: [Di, Or, is, fi, dr, ks, bo, Zs, kr, No, Vr, b.tP]
  });
  return at;
})();
var ho = (() => {
  (at = ho ||= {})[at.SELECT = 0] = "SELECT";
  at[at.HAND = 1] = "HAND";
  at[at.ZOOM = 2] = "ZOOM";
  return ho;
  var at;
})();
let ya = (() => {
  class at {
    constructor(be) {
      this.notificationService = be;
      this.showHandToolButton = true;
      this.isSelected = false;
      const Bt = this.notificationService.onPDFJSInit.subscribe(() => {
        this.onPdfJsInit();
        Bt.unsubscribe();
      });
    }
    onPdfJsInit() {
      window.PDFViewerApplication.eventBus.on("cursortoolchanged", ({
        tool: Bt
      }) => this.isSelected = Bt === ho.HAND);
    }
    onClick() {
      window.PDFViewerApplication.eventBus.dispatch("switchcursortool", {
        tool: ho.HAND
      });
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(Ar));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-hand-tool"]],
    inputs: {
      showHandToolButton: "showHandToolButton"
    },
    decls: 5,
    vars: 4,
    consts: [["type", "button", "id", "primaryCursorHandTool", "title", "Enable hand tool", "data-l10n-id", "cursor_hand_tool", 1, "toolbarButton", "hiddenXXLView", 3, "click"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"], ["data-l10n-id", "cursor_hand_tool_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.NdJ("click", function () {
          return Bt.onClick();
        });
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Hand Tool");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showHandToolButton)("toggled", Bt.isSelected);
      }
    },
    styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let Ko = (() => {
  class at {
    constructor() {
      this.showOpenFileButton = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-open-file"]],
    inputs: {
      showOpenFileButton: "showOpenFileButton"
    },
    decls: 5,
    vars: 2,
    consts: [["type", "button", "id", "openFile", "title", "Open File", "data-l10n-id", "open_file", 1, "toolbarButton", "hiddenMediumView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "20px"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"], ["data-l10n-id", "open_file_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Open");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showOpenFileButton);
      }
    },
    styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let qi = (() => {
  class at {
    constructor(be) {
      this.notificationService = be;
      this.disableFirstPage = true;
      const Bt = this.notificationService.onPDFJSInit.subscribe(() => {
        this.onPdfJsInit();
        Bt.unsubscribe();
      });
    }
    firstPage() {
      window.PDFViewerApplication.eventBus.dispatch("firstpage");
    }
    onPdfJsInit() {
      window.PDFViewerApplication.eventBus.on("updateuistate", Bt => this.updateUIState(Bt));
    }
    updateUIState(be) {
      this.disableFirstPage = be.pageNumber <= 1;
      this.button.nativeElement.disabled = this.disableFirstPage;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(Ar));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-first-page"]],
    viewQuery: function (be, Bt) {
      if (be & 1) {
        t.Gf(W, 5);
      }
      if (be & 2) {
        let an;
        if (t.iGM(an = t.CRH())) {
          Bt.button = an.first;
        }
      }
    },
    decls: 6,
    vars: 1,
    consts: [["type", "button", "title", "First page", "id", "primaryFirstPage", "data-l10n-id", "first_page", 1, "toolbarButton", "hiddenLargeView", 3, "disabled", "click"], ["button", ""], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"], ["data-l10n-id", "first_page_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0, 1);
        t.NdJ("click", function () {
          return Bt.firstPage();
        });
        t.O4$();
        t.TgZ(2, "svg", 2);
        t._UZ(3, "path", 3);
        t.qZA();
        t.kcU();
        t.TgZ(4, "span", 4);
        t._uU(5, "First page");
        t.qZA()();
      }
      if (be & 2) {
        t.Q6J("disabled", Bt.disableFirstPage);
      }
    },
    styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"]
  });
  return at;
})();
let qo = (() => {
  class at {
    constructor(be) {
      this.notificationService = be;
      this.disableLastPage = true;
      const Bt = this.notificationService.onPDFJSInit.subscribe(() => {
        this.onPdfJsInit();
        Bt.unsubscribe();
      });
    }
    firstPage() {
      window.PDFViewerApplication.eventBus.dispatch("firstpage");
    }
    onPdfJsInit() {
      window.PDFViewerApplication.eventBus.on("updateuistate", Bt => this.updateUIState(Bt));
    }
    updateUIState(be) {
      this.disableLastPage = be.pageNumber === be.pagesCount;
      this.button.nativeElement.disabled = this.disableLastPage;
    }
    lastPage() {
      window.PDFViewerApplication.eventBus.dispatch("lastpage");
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(Ar));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-last-page"]],
    viewQuery: function (be, Bt) {
      if (be & 1) {
        t.Gf(W, 5);
      }
      if (be & 2) {
        let an;
        if (t.iGM(an = t.CRH())) {
          Bt.button = an.first;
        }
      }
    },
    decls: 6,
    vars: 1,
    consts: [["type", "button", "title", "Last page", "id", "primaryLastPage", "data-l10n-id", "last_page", 1, "toolbarButton", "hiddenLargeView", 3, "disabled", "click"], ["button", ""], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"], ["data-l10n-id", "last_page_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0, 1);
        t.NdJ("click", function () {
          return Bt.lastPage();
        });
        t.O4$();
        t.TgZ(2, "svg", 2);
        t._UZ(3, "path", 3);
        t.qZA();
        t.kcU();
        t.TgZ(4, "span", 4);
        t._uU(5, "Last page");
        t.qZA()();
      }
      if (be & 2) {
        t.Q6J("disabled", Bt.disableLastPage);
      }
    },
    styles: [Pe]
  });
  return at;
})();
let ea = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-next-page"]],
    decls: 5,
    vars: 0,
    consts: [["type", "button", "title", "Next Page", "id", "next", "data-l10n-id", "next", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "next_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Next");
        t.qZA()();
      }
    },
    styles: [Pe]
  });
  return at;
})();
let Oa = (() => {
  class at {
    constructor() {
      this.showPagingButtons = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-page-number"]],
    inputs: {
      showPagingButtons: "showPagingButtons"
    },
    decls: 2,
    vars: 4,
    consts: [["type", "number", "id", "pageNumber", "title", "Page", "value", "1", "size", "4", "min", "1", "data-l10n-id", "page", "autocomplete", "off", 1, "toolbarField", "pageNumber"], ["id", "numPages", 1, "toolbarLabel", "hiddenXLView"]],
    template: function (be, Bt) {
      if (be & 1) {
        t._UZ(0, "input", 0)(1, "span", 1);
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showPagingButtons);
        t.xp6(1);
        t.ekj("invisible", !Bt.showPagingButtons);
      }
    },
    styles: ["button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let qa = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-previous-page"]],
    decls: 5,
    vars: 0,
    consts: [["type", "button", "title", "Previous Page", "id", "previous", "data-l10n-id", "previous", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "previous_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Previous");
        t.qZA()();
      }
    },
    styles: [Pe]
  });
  return at;
})();
let ja = (() => {
  class at {
    constructor() {
      this.showPagingButtons = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-paging-area"]],
    inputs: {
      showPagingButtons: "showPagingButtons"
    },
    decls: 7,
    vars: 5,
    consts: [[1, "paging-left", "hiddenTinyView"], [2, "margin-right", "-3px"], [2, "margin-left", "-3px"], [3, "showPagingButtons"], [1, "paging-right", "hiddenTinyView"], [2, "margin-right", "-3px", "margin-left", "-3px"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "div", 0);
        t._UZ(1, "pdf-first-page", 1)(2, "pdf-previous-page", 2);
        t.qZA();
        t._UZ(3, "pdf-page-number", 3);
        t.TgZ(4, "div", 4);
        t._UZ(5, "pdf-next-page", 5)(6, "pdf-last-page", 2);
        t.qZA();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showPagingButtons);
        t.xp6(3);
        t.Q6J("showPagingButtons", Bt.showPagingButtons);
        t.xp6(1);
        t.ekj("invisible", !Bt.showPagingButtons);
      }
    },
    dependencies: [qi, qa, Oa, ea, qo],
    styles: [".paging-right[_ngcontent-%COMP%]{float:right;display:block}.paging-left[_ngcontent-%COMP%]{float:left;display:block}"]
  });
  return at;
})();
let la = (() => {
  class at {
    constructor() {
      this.showPresentationModeButton = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-presentation-mode"]],
    inputs: {
      showPresentationModeButton: "showPresentationModeButton"
    },
    decls: 5,
    vars: 2,
    consts: [["type", "button", "id", "presentationMode", "title", "Switch to Presentation Mode", "data-l10n-id", "presentation_mode", 1, "toolbarButton", "hiddenLargeView"], ["viewBox", "0 0 24 24", 2, "width", "27px", "height", "27px"], ["fill", "currentColor", "d", "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"], ["data-l10n-id", "presentation_mode_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Presentation Mode");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showPresentationModeButton);
      }
    },
    styles: ["[_nghost-%COMP%]   button.toolbarButton[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let ta = (() => {
  class at {
    constructor() {
      this.showPrintButton = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-print"]],
    inputs: {
      showPrintButton: "showPrintButton"
    },
    decls: 5,
    vars: 2,
    consts: [["type", "button", "id", "print", "title", "Print", "data-l10n-id", "print", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"], ["data-l10n-id", "print_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Print");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showPrintButton);
      }
    },
    styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"]
  });
  return at;
})();
let Fr = (() => {
  class at {
    constructor(be) {
      this.notificationService = be;
      this.showRotateButton = true;
      this.disableRotate = true;
      this.clockwise = true;
      this.counterClockwise = true;
      const Bt = this.notificationService.onPDFJSInit.subscribe(() => {
        this.onPdfJsInit();
        Bt.unsubscribe();
      });
    }
    rotateCW() {
      window.PDFViewerApplication.eventBus.dispatch("rotatecw");
    }
    rotateCCW() {
      window.PDFViewerApplication.eventBus.dispatch("rotateccw");
    }
    onPdfJsInit() {
      window.PDFViewerApplication.eventBus.on("updateuistate", Bt => this.updateUIState(Bt));
    }
    updateUIState(be) {
      this.disableRotate = be.pagesCount === 0;
      if (this.button1) {
        this.button1.nativeElement.disabled = this.disableRotate;
      }
      if (this.button2) {
        this.button2.nativeElement.disabled = this.disableRotate;
      }
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(Ar));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-rotate-page"]],
    viewQuery: function (be, Bt) {
      if (be & 1) {
        t.Gf(Le, 5);
        t.Gf(he, 5);
      }
      if (be & 2) {
        let an;
        if (t.iGM(an = t.CRH())) {
          Bt.button1 = an.first;
        }
        if (t.iGM(an = t.CRH())) {
          Bt.button2 = an.first;
        }
      }
    },
    inputs: {
      showRotateButton: "showRotateButton",
      clockwise: "clockwise",
      counterClockwise: "counterClockwise"
    },
    decls: 2,
    vars: 2,
    consts: [["type", "button", "id", "primaryPageRotateCw", "class", "toolbarButton hiddenXLView rotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCcw", "class", "toolbarButton hiddenXLView rotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 1, "toolbarButton", "hiddenXLView", "rotateCw", 3, "disabled", "click"], ["button1", ""], ["viewBox", "0 0 24 24", 2, "width", "23px", "height", "23px"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3"], ["type", "button", "id", "primaryPageRotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 1, "toolbarButton", "hiddenXLView", "rotateCcw", 3, "disabled", "click"], ["button2", ""], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.YNc(0, pe, 4, 3, "button", 0);
        t.YNc(1, re, 4, 3, "button", 1);
      }
      if (be & 2) {
        t.Q6J("ngIf", Bt.clockwise);
        t.xp6(1);
        t.Q6J("ngIf", Bt.counterClockwise);
      }
    },
    dependencies: [b.O5],
    styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"]
  });
  return at;
})();
let Es = (() => {
  class at {
    constructor(be) {
      this.notificationService = be;
      this.showSelectToolButton = true;
      this.isSelected = true;
      const Bt = this.notificationService.onPDFJSInit.subscribe(() => {
        this.onPdfJsInit();
        Bt.unsubscribe();
      });
    }
    onPdfJsInit() {
      window.PDFViewerApplication.eventBus.on("cursortoolchanged", ({
        tool: Bt
      }) => this.isSelected = Bt === ho.SELECT);
    }
    onClick() {
      window.PDFViewerApplication.eventBus.dispatch("switchcursortool", {
        tool: ho.SELECT
      });
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(Ar));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-select-tool"]],
    inputs: {
      showSelectToolButton: "showSelectToolButton"
    },
    decls: 5,
    vars: 4,
    consts: [["type", "button", "id", "primaryCursorSelectTool", "title", "Enable text selection tool", "data-l10n-id", "cursor_text_select_tool", 1, "toolbarButton", "hiddenXXLView", 3, "click"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z"], ["data-l10n-id", "cursor_text_select_tool_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.NdJ("click", function () {
          return Bt.onClick();
        });
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Text selection tool");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showSelectToolButton)("toggled", Bt.isSelected);
      }
    },
    styles: ["[_nghost-%COMP%]{margin-top:0;margin-right:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let Ao = (() => {
  class at {
    constructor() {
      this.showSecondaryToolbarButton = true;
    }
    onClick(be) {
      be.preventDefault();
      return false;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-toggle-secondary-toolbar"]],
    inputs: {
      showSecondaryToolbarButton: "showSecondaryToolbarButton"
    },
    decls: 5,
    vars: 2,
    consts: [["type", "button", "id", "secondaryToolbarToggle", "title", "Tools", "data-l10n-id", "tools", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "27px", "height", "27px", 3, "click"], ["fill", "currentColor", "d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"], ["data-l10n-id", "tools_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t.NdJ("click", function (Gn) {
          return Bt.onClick(Gn);
        });
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Tools");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showSecondaryToolbarButton);
      }
    },
    styles: ["button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-top:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let Pa = (() => {
  class at {
    constructor() {
      this.showSidebarButton = true;
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-toggle-sidebar"]],
    inputs: {
      showSidebarButton: "showSidebarButton"
    },
    decls: 5,
    vars: 2,
    consts: [["type", "button", "id", "sidebarToggle", "title", "Toggle Sidebar", "data-l10n-id", "toggle_sidebar", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["data-l10n-id", "toggle_sidebar_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Toggle Sidebar");
        t.qZA()();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showSidebarButton);
      }
    },
    styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button#sidebarToggle[_ngcontent-%COMP%]{height:24px;width:24px;margin-right:5px!important}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let Po = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-zoom-out"]],
    decls: 5,
    vars: 0,
    consts: [["type", "button", "id", "zoomOut", "title", "Zoom Out", "data-l10n-id", "zoom_out", 1, "toolbarButton", "zoomOut"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M19,13H5V11H19V13Z"], ["data-l10n-id", "zoom_out_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Zoom Out");
        t.qZA()();
      }
    },
    styles: ["button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let dl = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-zoom-in"]],
    decls: 5,
    vars: 0,
    consts: [["type", "button", "id", "zoomIn", "title", "Zoom In", "data-l10n-id", "zoom_in", 1, "toolbarButton", "zoomIn"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"], ["data-l10n-id", "zoom_in_label"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "button", 0);
        t.O4$();
        t.TgZ(1, "svg", 1);
        t._UZ(2, "path", 2);
        t.qZA();
        t.kcU();
        t.TgZ(3, "span", 3);
        t._uU(4, "Zoom In");
        t.qZA()();
      }
    },
    styles: ["button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important}button[_ngcontent-%COMP%]{padding:0}"]
  });
  return at;
})();
let qs = (() => {
  class at {
    constructor(be) {
      this.element = be;
      this._zoomLevels = [];
    }
    set zoomLevels(be) {
      this._zoomLevels = be.map(Bt => this.valueToZoomLevel(Bt));
    }
    valueToZoomLevel(be) {
      if (be.toString().endsWith("%")) {
        be = be.toString().replace("%", "");
        be = Number(be) / 100;
      }
      const Bt = Number(be);
      if (!Bt) {
        const Gn = String(be);
        return {
          id: this.snakeToCamel(be + "Option"),
          value: Gn,
          dataL10nId: "page_scale_" + Gn.replace("page-", ""),
          dataL10nArgs: undefined,
          displayValue: Gn
        };
      }
      const an = Math.round(Bt * 100);
      return {
        id: `scale_${an}`,
        value: String(Bt),
        dataL10nId: "page_scale_percent",
        dataL10nArgs: `{ "scale": ${an} }`,
        displayValue: String(an) + "%"
      };
    }
    snakeToCamel(be) {
      return be.replace(/([-_][a-z])/g, Bt => Bt.toUpperCase().replace("-", "").replace("_", ""));
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.SBq));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-zoom-dropdown"]],
    viewQuery: function (be, Bt) {
      if (be & 1) {
        t.Gf(Ue, 5);
      }
      if (be & 2) {
        let an;
        if (t.iGM(an = t.CRH())) {
          Bt.sizeSelector = an.first;
        }
      }
    },
    inputs: {
      zoomLevels: "zoomLevels"
    },
    decls: 5,
    vars: 1,
    consts: [["id", "scaleSelectContainer"], ["id", "scaleSelect", "title", "Zoom", "data-l10n-id", "zoom"], ["sizeSelector", ""], [3, "id", 4, "ngFor", "ngForOf"], ["id", "customScaleOption", "title", "", "value", "custom", "disabled", "disabled", "hidden", "true"], [3, "id"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "span", 0)(1, "select", 1, 2);
        t.YNc(3, ot, 2, 5, "option", 3);
        t._UZ(4, "option", 4);
        t.qZA()();
      }
      if (be & 2) {
        t.xp6(3);
        t.Q6J("ngForOf", Bt._zoomLevels);
      }
    },
    dependencies: [b.sg, k.YN, k.Kr],
    styles: ["select[_ngcontent-%COMP%]{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption[_ngcontent-%COMP%]{display:none}"]
  });
  return at;
})();
let Fo = (() => {
  class at {
    constructor() {
      this.showZoomButtons = true;
      this.zoomLevels = ["auto", "page-actual", "page-fit", "page-width", 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-zoom-toolbar"]],
    inputs: {
      showZoomButtons: "showZoomButtons",
      zoomLevels: "zoomLevels"
    },
    decls: 4,
    vars: 3,
    consts: [["id", "toolbarViewerMiddle"], [2, "width", "unset", "max-width", "unset", "padding-top", "3px", 3, "zoomLevels"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.TgZ(0, "div", 0);
        t._UZ(1, "pdf-zoom-out")(2, "pdf-zoom-in")(3, "pdf-zoom-dropdown", 1);
        t.qZA();
      }
      if (be & 2) {
        t.ekj("invisible", !Bt.showZoomButtons);
        t.xp6(3);
        t.Q6J("zoomLevels", Bt.zoomLevels);
      }
    },
    dependencies: [Po, dl, qs]
  });
  return at;
})();
let ha = (() => {
  class at {
    constructor(be) {
      this.elementRef = be;
      this.mobileFriendlyZoomScale = 1;
      this.primaryMenuVisible = true;
      this.showBookmarkButton = true;
      this.showDownloadButton = true;
      this.showEditor = false;
      this.showFindButton = undefined;
      this.showHandToolButton = true;
      this.showOpenFileButton = true;
      this.showPrintButton = true;
      this.showPagingButtons = true;
      this.showPresentationModeButton = false;
      this.showRotateButton = true;
      this.showSecondaryToolbarButton = true;
      this.showSidebarButton = true;
      this.showZoomButtons = true;
      this.textLayer = undefined;
      this.toolbarMarginTop = "0px";
      this.toolbarWidth = "100%";
      this.zoomLevels = ["auto", "page-actual", "page-fit", "page-width", 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
      this.onToolbarLoaded = new t.vpe();
    }
    ngAfterViewInit() {
      this.onToolbarLoaded.emit(this.elementRef.nativeElement.getElementsByClassName("toolbar")[0]);
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)(t.Y36(t.SBq));
  };
  at.ɵcmp = t.Xpm({
    type: at,
    selectors: [["pdf-toolbar"]],
    inputs: {
      customToolbar: "customToolbar",
      mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
      primaryMenuVisible: "primaryMenuVisible",
      showBookmarkButton: "showBookmarkButton",
      showDownloadButton: "showDownloadButton",
      showEditor: "showEditor",
      showFindButton: "showFindButton",
      showHandToolButton: "showHandToolButton",
      showOpenFileButton: "showOpenFileButton",
      showPrintButton: "showPrintButton",
      showPagingButtons: "showPagingButtons",
      showPresentationModeButton: "showPresentationModeButton",
      showRotateButton: "showRotateButton",
      showSecondaryToolbarButton: "showSecondaryToolbarButton",
      showSidebarButton: "showSidebarButton",
      showZoomButtons: "showZoomButtons",
      textLayer: "textLayer",
      toolbarMarginTop: "toolbarMarginTop",
      toolbarWidth: "toolbarWidth",
      zoomLevels: "zoomLevels"
    },
    outputs: {
      onToolbarLoaded: "onToolbarLoaded"
    },
    ngContentSelectors: Z,
    decls: 8,
    vars: 11,
    consts: [[1, "toolbar"], ["id", "toolbarContainer"], [4, "ngTemplateOutlet"], ["id", "loadingBar"], [1, "progress"], [1, "glimmer"], ["defaultToolbar", ""], ["id", "toolbarViewer"], ["id", "toolbarViewerLeft"], [3, "showSidebarButton"], [3, "showFindButton", "textLayer"], [3, "showPagingButtons"], [3, "showZoomButtons", "zoomLevels"], ["id", "toolbarViewerRight"], [3, "showHandToolButton"], [3, "showSelectToolButton"], [3, "showRotateButton", "clockwise", "counterClockwise"], [3, "showPresentationModeButton"], [3, "showOpenFileButton"], [3, "showPrintButton"], [3, "showDownloadButton"], [3, "showEditor"], [3, "showSecondaryToolbarButton"]],
    template: function (be, Bt) {
      if (be & 1) {
        t.F$t();
        t.TgZ(0, "div", 0)(1, "div", 1);
        t.YNc(2, st, 1, 0, "ng-content", 2);
        t.TgZ(3, "div", 3)(4, "div", 4);
        t._UZ(5, "div", 5);
        t.qZA()()()();
        t.YNc(6, rt, 17, 20, "ng-template", null, 6, t.W1O);
      }
      if (be & 2) {
        const an = t.MAs(7);
        t.Udp("transform", "scale(" + Bt.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("width", Bt.toolbarWidth)("margin-top", Bt.toolbarMarginTop);
        t.ekj("invisible", !Bt.primaryMenuVisible);
        t.xp6(2);
        t.Q6J("ngTemplateOutlet", Bt.customToolbar ? Bt.customToolbar : an);
      }
    },
    dependencies: [Pa, oi, ja, Fo, ya, Es, Fr, la, Ko, ta, pr, Bn, Ao, b.tP]
  });
  return at;
})();
let Ca = (() => {
  class at {
    transform(be, Bt) {
      return this.translate(be, Bt);
    }
    translate(be, Bt) {
      return (0, i.Z)(function* () {
        return window.PDFViewerApplication.l10n.get(be, null, Bt);
      })();
    }
  }
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵpipe = t.Yjl({
    name: "translate",
    type: at,
    pure: true
  });
  return at;
})();
let Za = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵmod = t.oAB({
    type: at
  });
  at.ɵinj = t.cJS({
    providers: [Ar, b.Ye],
    imports: [[b.ez, k.u5]]
  });
  return at;
})();
var ko = (() => {
  (at = ko ||= {})[at.vertical = 0] = "vertical";
  at[at.horizontal = 1] = "horizontal";
  at[at.wrapped = 2] = "wrapped";
  at[at.page = 3] = "page";
  return ko;
  var at;
})();
class pa {
  static initElements() {
    if (!!document) {
      if (!this.con || !this.el) {
        this.con = document.createElement("div");
        this.el = document.createElement("div");
      }
      this.con.style.position = "absolute";
      this.con.style.width = "0";
      this.con.style.height = "0";
      this.con.style.visibility = "hidden";
      this.con.style.overflow = "hidden";
      this.con.appendChild(this.el);
    }
  }
  static pxPerUnit(Je) {
    if (!this.pxPerUnitCache[Je]) {
      if (!this.con || !this.el) {
        this.initElements();
      }
      if (!this.con || !this.el) {
        return 1;
      }
      this.el.style.width = this.sample + Je;
      document.body.appendChild(this.con);
      const be = this.el.getBoundingClientRect();
      this.con.parentNode.removeChild(this.con);
      this.pxPerUnitCache[Je] = be.width / this.sample;
    }
    return this.pxPerUnitCache[Je];
  }
  static toPx(Je) {
    const Bt = /^\s*([+-]?[\d\.]*)\s*(.*)\s*$/i.exec(Je);
    if (Bt != null && Bt.length > 2) {
      const Gn = Bt[1] === "" ? 1 : Number(Bt[1]);
      const Ki = Bt[2];
      if (!isNaN(Gn) && Ki) {
        if (Ki === "px") {
          return Gn;
        } else {
          return this.pxPerUnit(Ki) * Gn;
        }
      }
    }
    throw new TypeError("Error parsing length");
  }
}
pa.con = undefined;
pa.el = undefined;
pa.sample = 100;
pa.pxPerUnitCache = {};
export class CG {
  constructor() {
    this.recalculateSize$ = new M.x();
  }
  findMultiple(Je, be = {}) {
    be = {
      ...be,
      findMultipleSearchTexts: true
    };
    const Bt = Je.join("\n") + "\n";
    return this.find(Bt, be);
  }
  find(Je, be = {}) {
    if (S3.ngxExtendedPdfViewerInitialized) {
      const Bt = document.getElementById("findHighlightAll");
      if (Bt) {
        Bt.checked = be.highlightAll || false;
      }
      const an = document.getElementById("findRange");
      if (an) {
        an.value = be.pageRange || "";
      }
      const Gn = document.getElementById("findCurrentPage");
      if (Gn) {
        Gn.checked = be.currentPage || false;
      }
      const Ki = document.getElementById("findMatchCase");
      if (Ki) {
        Ki.checked = be.matchCase || false;
      }
      const Lr = document.getElementById("findEntireWord");
      if (Lr) {
        Lr.checked = be.wholeWords || false;
      }
      const Gr = document.getElementById("findIgnoreAccents");
      if (Gr) {
        Gr.checked = be.ignoreAccents || false;
      }
      const zr = be.findMultipleSearchTexts || Je.includes("\n") || false;
      const Ks = document.getElementById("findMultipleSearchTexts");
      if (Ks) {
        Ks.checked = zr;
      }
      const Js = document.getElementById("individualWordsMode");
      if (Js) {
        Js.checked = false;
      }
      const Xt = document.getElementById("findFuzzy");
      if (Xt) {
        Xt.checked = be.fuzzySearch || false;
      }
      const ut = zr ? document.getElementById("findInputMultiline") : document.getElementById("findInput");
      if (ut) {
        if (ut instanceof HTMLTextAreaElement) {
          ut.value = Je;
          ut.classList.remove("hidden");
          document.getElementById("findInput").classList.add("hidden");
          document.getElementById("individualWordsModeLabel").classList.remove("hidden");
          document.getElementById("individualWordsMode").classList.remove("hidden");
        } else if (ut instanceof HTMLInputElement) {
          ut.value = Je;
          ut.classList.remove("hidden");
          document.getElementById("findInputMultiline").classList.add("hidden");
          document.getElementById("individualWordsModeLabel").classList.add("hidden");
          document.getElementById("individualWordsMode").classList.add("hidden");
        }
        ut.dispatchEvent(new Event("input"));
        return true;
      } else {
        console.error("Unexpected error: the input field used to search isn't part of the DOM.");
        return false;
      }
    }
    console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
    return false;
  }
  findNext() {
    if (S3.ngxExtendedPdfViewerInitialized) {
      const Je = document.getElementById("findNext");
      return !!Je && (Je.click(), true);
    }
    console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
    return false;
  }
  findPrevious() {
    if (S3.ngxExtendedPdfViewerInitialized) {
      const Je = document.getElementById("findPrevious");
      return !!Je && (Je.click(), true);
    }
    console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
    return false;
  }
  print(Je) {
    const be = window.PDFViewerApplication;
    const Bt = !!window.isInPDFPrintRange && !Je;
    if (!Bt) {
      Je ||= {};
      this.setPrintRange(Je);
    }
    window.printPDF();
    if (!Bt) {
      be.eventBus.on("afterprint", () => {
        this.removePrintRange();
      });
    }
  }
  removePrintRange() {
    window.isInPDFPrintRange = undefined;
    window.filteredPageCount = undefined;
  }
  setPrintRange(Je) {
    const be = window.PDFViewerApplication;
    window.isInPDFPrintRange = Bt => this.isInPDFPrintRange(Bt, Je);
    window.filteredPageCount = this.filteredPageCount(be.pagesCount, Je);
  }
  filteredPageCount(Je, be) {
    let Bt = 0;
    for (let an = 1; an <= Je; an++) {
      if (this.isInPDFPrintRange(an, be)) {
        Bt++;
      }
    }
    return Bt;
  }
  isInPDFPrintRange(Je, be) {
    const Bt = Je + 1;
    return (!be.from || Bt >= be.from) && (!be.to || Bt <= be.to) && (!be.excluded || !be.excluded.some(Gn => Gn === Bt)) && (!be.included || !!be.included.some(an => an === Bt));
  }
  getPageAsText(Je) {
    return window.PDFViewerApplication.pdfDocument.getPage(Je).then(Lr => Promise.resolve(Lr.getTextContent())).then(Lr => Promise.resolve(this.convertTextInfoToText(Lr)));
  }
  convertTextInfoToText(Je) {
    if (Je) {
      return Je.items.map(be => be.str).join("");
    } else {
      return "";
    }
  }
  getPageAsImage(Je, be, Bt, an = "#FFFFFF") {
    return window.PDFViewerApplication.pdfDocument.getPage(Je).then(zr => Promise.resolve(this.draw(zr, be, Bt, an)));
  }
  draw(Je, be, Bt, an = "#FFFFFF") {
    let Gn = 1;
    if (be.scale) {
      Gn = be.scale;
    } else if (be.width) {
      Gn = be.width / Je.getViewport({
        scale: 1
      }).width;
    } else if (be.height) {
      Gn = be.height / Je.getViewport({
        scale: 1
      }).height;
    }
    const Ki = Je.getViewport({
      scale: Gn
    });
    const {
      ctx: Lr,
      canvas: Gr
    } = this.getPageDrawContext(Ki.width, Ki.height);
    const zr = Ki.clone();
    return Je.render({
      canvasContext: Lr,
      viewport: zr,
      background: Bt,
      backgroundColorToReplace: an
    }).promise.then(() => Promise.resolve(Gr.toDataURL()));
  }
  getPageDrawContext(Je, be) {
    const Bt = document.createElement("canvas");
    const an = Bt.getContext("2d", {
      alpha: true
    });
    if (!an) {
      throw new Error("Couldn't create the 2d context");
    }
    Bt.width = Je;
    Bt.height = be;
    Bt.style.width = `${Je}px`;
    Bt.style.height = `${be}px`;
    return {
      ctx: an,
      canvas: Bt
    };
  }
  getCurrentDocumentAsBlob() {
    return (0, i.Z)(function* () {
      const Je = window.PDFViewerApplication;
      const be = yield Je.pdfDocument.saveDocument(Je.pdfDocument.annotationStorage);
      return new Blob([be], {
        type: "application/pdf"
      });
    })();
  }
  getFormData(Je = true) {
    return (0, i.Z)(function* () {
      const be = window.PDFViewerApplication;
      const Bt = be.pdfDocument;
      const Gn = [];
      for (let Ki = 1; Ki <= Bt.numPages; Ki++) {
        const Lr = yield Bt.getPage(Ki);
        (yield Lr.getAnnotations()).filter(zr => zr.subtype === "Widget").map(zr => ({
          ...zr
        })).forEach(zr => {
          const Ks = Lr.getViewport({
            scale: 1.3333333333333333
          }).convertToViewportRectangle(zr.rect);
          if (Je && zr.fieldName) {
            try {
              if (zr.exportValue) {
                const Js = be.pdfDocument.annotationStorage.getValue(zr.id, zr.fieldName + "/" + zr.exportValue, "");
                zr.value = Js?.value;
              } else if (zr.radioButton) {
                const Js = be.pdfDocument.annotationStorage.getValue(zr.id, zr.fieldName + "/" + zr.fieldValue, "");
                zr.value = Js?.value;
              } else {
                const Js = be.pdfDocument.annotationStorage.getValue(zr.id, zr.fieldName, "");
                zr.value = Js?.value;
              }
            } catch {}
          }
          Gn.push({
            fieldAnnotation: zr,
            fieldRect: Ks,
            pageNumber: Ki
          });
        });
      }
      return Gn;
    })();
  }
  addPageToRenderQueue(Je) {
    return window.PDFViewerApplication.pdfViewer.addPageToRenderQueue(Je);
  }
  isRenderQueueEmpty() {
    const Bt = window.PDFViewerApplication;
    return !Bt.pdfViewer.renderingQueue.getHighestPriority(Bt.pdfViewer._getVisiblePages(), Bt.pdfViewer._pages, true, false);
  }
  hasPageBeenRendered(Je) {
    const Bt = window.PDFViewerApplication.pdfViewer._pages;
    return Bt.length > Je && Je >= 0 && !Bt[Je].div.querySelector(".loadingIcon");
  }
  currentlyRenderedPages() {
    return window.PDFViewerApplication.pdfViewer._pages.filter(Bt => !Bt.div.querySelector(".loadingIcon")).map(Bt => Bt.id);
  }
  numberOfPages() {
    return window.PDFViewerApplication.pdfViewer._pages.length;
  }
  getCurrentlyVisiblePageNumbers() {
    return window.PDFViewerApplication.pdfViewer._getVisiblePages().views?.map(Bt => Bt.id);
  }
  recalculateSize() {
    this.recalculateSize$.next();
  }
  listLayers() {
    return (0, i.Z)(function* () {
      const be = yield window.PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
      if (be) {
        const Bt = be.getOrder();
        console.log(Bt);
        return Bt.filter(Gn => typeof Gn != "object").map(Gn => {
          const Ki = be.getGroup(Gn);
          return {
            layerId: Gn,
            name: Ki.name,
            visible: Ki.visible
          };
        });
      }
    })();
  }
  toggleLayer(Je) {
    var be = this;
    return (0, i.Z)(function* () {
      const Bt = window.PDFViewerApplication;
      const an = yield Bt.pdfViewer.optionalContentConfigPromise;
      if (an) {
        let Gn = an.getGroup(Je).visible;
        const Ki = document.querySelector(`input[id='${Je}']`);
        if (Ki) {
          Gn = Ki.checked;
          Ki.checked = !Gn;
        }
        an.setVisibility(Je, !Gn);
        Bt.eventBus.dispatch("optionalcontentconfig", {
          source: be,
          promise: Promise.resolve(an)
        });
      }
    })();
  }
  scrollPageIntoView(Je, be) {
    window.PDFViewerApplication.pdfViewer.scrollPagePosIntoView(Je, be);
  }
}
function po() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
export class S3 {
  constructor(Je, be, Bt, an, Gn, Ki, Lr, Gr, zr) {
    this.ngZone = Je;
    this.platformId = be;
    this.notificationService = Bt;
    this.location = an;
    this.elementRef = Gn;
    this.platformLocation = Ki;
    this.cdr = Lr;
    this.service = Gr;
    this.renderer = zr;
    this.ngxExtendedPdfViewerIncompletelyInitialized = true;
    this.showFreeFloatingBar = true;
    this.enableDragAndDrop = true;
    this.formData = {};
    this.formIdToFieldName = {};
    this.formRadioButtonValueToId = {};
    this.formDataChange = new t.vpe();
    this._pageViewMode = "multiple";
    this.srcChangeTriggeredByUser = false;
    this.progress = new t.vpe();
    this.srcChange = new t.vpe();
    this.scrollMode = undefined;
    this.scrollModeChange = new t.vpe();
    this.authorization = undefined;
    this.httpHeaders = undefined;
    this.contextMenuAllowed = true;
    this.afterPrint = new t.vpe();
    this.beforePrint = new t.vpe();
    this.currentZoomFactor = new t.vpe();
    this.enablePrint = true;
    this.delayFirstView = 0;
    this.showEditor = true;
    this.logLevel = pt.WARNINGS;
    this.relativeCoordsOptions = {};
    this.minifiedJSLibraries = true;
    this.primaryMenuVisible = true;
    this.printResolution = null;
    this.rotationChange = new t.vpe();
    this.annotationLayerRendered = new t.vpe();
    this.annotationEditorLayerRendered = new t.vpe();
    this.xfaLayerRendered = new t.vpe();
    this.outlineLoaded = new t.vpe();
    this.attachmentsloaded = new t.vpe();
    this.layersloaded = new t.vpe();
    this.autoHeight = false;
    this.minHeight = undefined;
    this._height = "100%";
    this._useBrowserLocale = undefined;
    this.forceUsingLegacyES5 = false;
    this.backgroundColor = "#e8e8eb";
    this.pdfBackground = undefined;
    this.pdfBackgroundColorToReplace = "#ffffff";
    this.filenameForDownload = undefined;
    this.ignoreKeyboard = false;
    this.ignoreKeys = [];
    this.acceptKeys = [];
    this.imageResourcesPath = me(Ut.assetsFolder) + "/images/";
    this.localeFolderPath = me(Ut.assetsFolder) + "/locale";
    this.language = undefined;
    this.listenToURL = false;
    this.nameddest = undefined;
    this.password = undefined;
    this.replaceBrowserPrint = this.pdfJsVersion >= "3.0";
    this._showSidebarButton = true;
    this.viewerPositionTop = "32px";
    this.showUnverifiedSignatures = false;
    this.sidebarVisible = undefined;
    this.sidebarVisibleChange = new t.vpe();
    this.activeSidebarView = Ze.OUTLINE;
    this.activeSidebarViewChange = new t.vpe();
    this.showFindButton = undefined;
    this.showFindHighlightAll = true;
    this.showFindMatchCase = true;
    this.showFindCurrentPageOnly = true;
    this.showFindPageRange = true;
    this.showFindEntireWord = true;
    this.showFindEntirePhrase = true;
    this.showFindIgnoreAccents = true;
    this.showFindFuzzySearch = true;
    this.showFindResultsCount = true;
    this.showFindMessages = true;
    this.showPagingButtons = true;
    this.showZoomButtons = true;
    this.showPresentationModeButton = false;
    this.showOpenFileButton = true;
    this.showPrintButton = true;
    this.showDownloadButton = true;
    this.theme = "light";
    this.formTheme = "light";
    this.showToolbar = true;
    this.showSecondaryToolbarButton = true;
    this.hideKebabMenuForSecondaryToolbar = false;
    this.showRotateButton = true;
    this._handTool = !po();
    this.handToolChange = new t.vpe();
    this.showHandToolButton = false;
    this._showScrollingButton = true;
    this._showSpreadButton = true;
    this.showPropertiesButton = true;
    this.showBorders = true;
    this.spreadChange = new t.vpe();
    this.thumbnailDrawn = new t.vpe();
    this._page = undefined;
    this.pageChange = new t.vpe();
    this.pageLabel = undefined;
    this.pageLabelChange = new t.vpe();
    this.pagesLoaded = new t.vpe();
    this.pageRender = new t.vpe();
    this.pageRendered = new t.vpe();
    this.pdfDownloaded = new t.vpe();
    this.pdfLoaded = new t.vpe();
    this.pdfLoadingStarts = new t.vpe();
    this.pdfLoadingFailed = new t.vpe();
    this.textLayer = undefined;
    this.textLayerRendered = new t.vpe();
    this.updateFindMatchesCount = new t.vpe();
    this.updateFindState = new t.vpe();
    this.zoom = undefined;
    this.zoomChange = new t.vpe();
    this.zoomLevels = ["auto", "page-actual", "page-fit", "page-width", 0.5, 1, 1.25, 1.5, 2, 3, 4];
    this.maxZoom = 10;
    this.minZoom = 0.1;
    this._mobileFriendlyZoom = "100%";
    this.mobileFriendlyZoomScale = 1;
    this.wheelAction = "scroll";
    this.toolbarMarginTop = "0px";
    this.toolbarWidth = "100%";
    this.toolbar = undefined;
    this.toolbarWidthInPixels = 100;
    this.secondaryToolbarTop = undefined;
    this.sidebarPositionTop = undefined;
    this.findbarTop = undefined;
    this.findbarLeft = undefined;
    this.buttonValues = {};
    this.shuttingDown = false;
    this.baseHref = this.platformLocation.getBaseHrefFromDOM();
    this.service.recalculateSize$.subscribe(() => this.onResize());
  }
  get pageViewMode() {
    return this._pageViewMode;
  }
  set pageViewMode(Je) {
    this._pageViewMode = Je;
    if (Je === "infinite-scroll") {
      this.scrollMode = ko.vertical;
      this.spread = "off";
    } else if (Je !== "multiple") {
      this.scrollMode = ko.vertical;
    }
    if (Je === "single") {
      this.scrollMode = ko.page;
      this._pageViewMode = "multiple";
    }
    if (Je === "book") {
      this.showBorders = false;
    }
  }
  set src(Je) {
    var be = this;
    if (Je instanceof Uint8Array) {
      this._src = Je.buffer;
    } else if (Je instanceof URL) {
      this._src = Je.toString();
    } else if (typeof Blob !== "undefined" && Je instanceof Blob) {
      const Bt = new FileReader();
      Bt.onloadend = () => {
        setTimeout(() => {
          this.src = new Uint8Array(Bt.result);
          if (S3.ngxExtendedPdfViewerInitialized) {
            if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
              this.openPDF();
            } else {
              (0, i.Z)(function* () {
                return be.openPDF2();
              })();
            }
          }
        });
      };
      Bt.readAsArrayBuffer(Je);
    } else if (typeof Je == "string") {
      this._src = Je;
      if (Je.length > 980 && Je.length % 4 == 0 && /^[a-zA-Z\d\/+]+={0,2}$/.test(Je)) {
        console.error("The URL looks like a base64 encoded string. If so, please use the attribute [base64Src] instead of [src]");
      }
    } else {
      this._src = Je;
    }
  }
  set base64Src(Je) {
    if (Je) {
      const be = window.atob(Je);
      const Bt = be.length;
      const an = new Uint8Array(Bt);
      for (let Gn = 0; Gn < Bt; Gn++) {
        an[Gn] = be.charCodeAt(Gn);
      }
      this.src = an.buffer;
    } else {
      this._src = undefined;
    }
  }
  set height(Je) {
    this.minHeight = undefined;
    this.autoHeight = false;
    if (Je) {
      this._height = Je;
    } else {
      this.height = "100%";
    }
    setTimeout(() => {
      this.checkHeight();
    });
  }
  get height() {
    return this._height;
  }
  get useBrowserLocale() {
    return !!this._useBrowserLocale;
  }
  set useBrowserLocale(Je) {
    this._useBrowserLocale = Je;
  }
  get showSidebarButton() {
    return this._showSidebarButton;
  }
  set showSidebarButton(Je) {
    this._showSidebarButton = Je;
    let Bt = 1;
    if (/msie\s|trident\//i.test(window.navigator.userAgent)) {
      Bt = Number((this._mobileFriendlyZoom || "100").replace("%", "")) / 100;
    }
    this.findbarLeft = this._showSidebarButton ? (Bt * 68).toString() + "px" : "0px";
  }
  set handTool(Je) {
    if (po() && Je) {
      console.log("On iOS, the handtool doesn't work reliably. Plus, you don't need it because touch gestures allow you to distinguish easily between swiping and selecting text. Therefore, the library ignores your setting.");
    } else {
      this._handTool = Je;
    }
  }
  get handTool() {
    return this._handTool;
  }
  get showScrollingButton() {
    return this.pageViewMode === "multiple" && this._showScrollingButton;
  }
  set showScrollingButton(Je) {
    this._showScrollingButton = Je;
  }
  get showSpreadButton() {
    return this.pageViewMode !== "infinite-scroll" && this._showSpreadButton;
  }
  set showSpreadButton(Je) {
    this._showSpreadButton = Je;
  }
  get page() {
    return this._page;
  }
  set page(Je) {
    this._page = Je ? Number(Je) : undefined;
  }
  onToolbarLoaded(Je) {
    this.toolbar = Je;
  }
  get mobileFriendlyZoom() {
    return this._mobileFriendlyZoom;
  }
  get pdfJsVersion() {
    return ne(Ut.assetsFolder);
  }
  set mobileFriendlyZoom(Je) {
    if (Je == "true") {
      Je = "150%";
    } else if (Je == "false" || Je == null) {
      Je = "100%";
    }
    this._mobileFriendlyZoom = Je;
    let be = 1;
    if (!String(Je).includes("%")) {
      Je = Number(Je) * 100 + "%";
    }
    be = Number((Je || "100").replace("%", "")) / 100;
    this.mobileFriendlyZoomScale = be;
    this.toolbarWidth = (100 / be).toString() + "%";
    this.toolbarMarginTop = (be - 1) * 16 + "px";
    setTimeout(() => this.calcViewerPositionTop());
  }
  calcViewerPositionTop() {
    if (this.toolbar === undefined) {
      this.sidebarPositionTop = "0px";
      return;
    }
    let Je = this.toolbar.getBoundingClientRect().height;
    this.viewerPositionTop = Je < 33 ? "33px" : Je + "px";
    const be = Je / 33;
    this.sidebarPositionTop = this.primaryMenuVisible ? (33 + (be - 1) * 33).toString() + "px" : "0px";
    this.secondaryToolbarTop = (33 + (be - 1) * 38).toString() + "px";
    this.findbarTop = (34 + (be - 1) * 54).toString() + "px";
    const Bt = document.getElementById("viewFind");
    if (Bt) {
      const an = this.toolbar.getBoundingClientRect().left;
      const Ki = Bt.getBoundingClientRect().left - an;
      this.findbarLeft = Ki + "px";
    } else {
      this.findbarLeft = this.showSidebarButton ? 34 + (be * 32).toString() + "px" : "0px";
    }
  }
  iOSVersionRequiresES5() {
    const Je = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return Je != null && parseInt(Je[1], 10) < 14;
  }
  needsES5() {
    var Je = this;
    return (0, i.Z)(function* () {
      const be = !!window.MSInputMethodContext && !!document.documentMode;
      const Bt = /Edge\/\d./i.test(navigator.userAgent);
      const an = Je.iOSVersionRequiresES5();
      return typeof ReadableStream === "undefined" || typeof Promise.allSettled === "undefined" || !!be || !!Bt || !!an || !!Je.forceUsingLegacyES5 || !(yield Je.supportsOptionalChaining());
    })();
  }
  supportsOptionalChaining() {
    return new Promise(Je => {
      const be = window.supportsOptionalChaining;
      Je(be !== undefined ? be : this.addScriptOpChainingSupport());
    });
  }
  addScriptOpChainingSupport() {
    return new Promise(Je => {
      const be = this.createScriptElement(Ut.assetsFolder + "/op-chaining-support.js");
      be.onload = () => {
        be.remove();
        Je(window.supportsOptionalChaining);
      };
      be.onerror = () => {
        be.remove();
        window.supportsOptionalChaining = false;
        Je(false);
      };
      document.body.appendChild(be);
    });
  }
  createScriptElement(Je) {
    const be = document.createElement("script");
    be.async = true;
    be.type = "text/javascript";
    const Bt = window;
    if (Bt.trustedTypes) {
      const an = Bt.trustedTypes.createPolicy("foo", {
        createScriptURL: Gn => Gn
      });
      be.src = an.createScriptURL(this.location.normalize(Je));
    } else {
      be.src = this.location.normalize(Je);
    }
    return be;
  }
  getPdfJsPath(Je, be) {
    const Bt = this.minifiedJSLibraries ? ".min.js" : ".js";
    const an = Ut.assetsFolder;
    return `${an}/${Je}-${ne(an)}${be ? "-es5" : ""}${Bt}`;
  }
  loadViewer() {
    window.ngxZone = this.ngZone;
    this.ngZone.runOutsideAngular(() => {
      if (window["pdfjs-dist/build/pdf"]) {
        this.needsES5().then(Je => {
          const be = this.getPdfJsPath("viewer", Je);
          const Bt = this.createScriptElement(be);
          document.getElementsByTagName("head")[0].appendChild(Bt);
        });
      } else {
        setTimeout(() => this.loadViewer(), 25);
      }
    });
  }
  addFeatures() {
    return new Promise(Je => {
      const be = this.createScriptElement(Ut.assetsFolder + "/additional-features.js");
      be.onload = () => {
        be.remove();
      };
      be.onerror = () => {
        be.remove();
        Je();
      };
      document.body.appendChild(be);
    });
  }
  ngOnInit() {
    window.setNgxExtendedPdfViewerSource = Je => {
      this._src = Je;
      console.log(Je);
      this.srcChangeTriggeredByUser = true;
      this.srcChange.emit(Je);
    };
    if ((0, b.NF)(this.platformId)) {
      this.addTranslationsUnlessProvidedByTheUser();
      window.getFormValue = Je => this.getFormValue(Je);
      window.setFormValue = (Je, be) => this.setFormValue(Je, be);
      window.registerAcroformAnnotations = Je => this.registerAcroformAnnotations(Je);
      window.assignFormIdAndFieldName = (Je, be, Bt) => this.assignFormIdAndFieldName(Je, be, Bt);
      this.loadPdfJs();
      this.hideToolbarIfItIsEmpty();
    }
  }
  loadPdfJs() {
    window.ngxZone = this.ngZone;
    this.ngZone.runOutsideAngular(() => {
      if (!window["pdfjs-dist/build/pdf"]) {
        this.needsES5().then(Je => {
          if (Je) {
            if (!Ut.needsES5) {
              console.log("If you see the error message \"expected expression, got '='\" above: you can safely ignore it as long as you know what you're doing. It means your browser is out-of-date. Please update your browser to benefit from the latest security updates and to enjoy a faster PDF viewer.");
            }
            Ut.needsES5 = true;
            console.log("Using the ES5 version of the PDF viewer. Your PDF files show faster if you update your browser.");
          }
          window.ngxZone = this.ngZone;
          if (this.minifiedJSLibraries && !Ut.workerSrc().endsWith(".min.js")) {
            const an = Ut.workerSrc();
            Ut.workerSrc = () => an.replace(".js", ".min.js");
          }
          const be = this.getPdfJsPath("pdf", Je);
          const Bt = this.createScriptElement(be);
          document.getElementsByTagName("head")[0].appendChild(Bt);
        });
      }
      if (!window.webViewerLoad) {
        this.loadViewer();
      }
    });
  }
  ngAfterViewInit() {
    if (typeof window !== "undefined") {
      if (!this.shuttingDown) {
        if (window.webViewerLoad) {
          this.ngZone.runOutsideAngular(() => this.doInitPDFViewer());
        } else {
          setTimeout(() => this.ngAfterViewInit(), 50);
        }
      }
    }
  }
  assignTabindexes() {
    if (this.startTabindex) {
      const Je = this.root.nativeElement.cloneNode(true);
      Je.classList.add("offscreen");
      this.showElementsRecursively(Je);
      document.body.appendChild(Je);
      const be = this.collectElementPositions(Je, this.root.nativeElement, []);
      document.body.removeChild(Je);
      const Bt = be.sort((an, Gn) => an.y - Gn.y > 15 ? 1 : Gn.y - an.y > 15 ? -1 : an.x - Gn.x);
      for (let an = 0; an < Bt.length; an++) {
        Bt[an].element.tabIndex = this.startTabindex + an;
      }
    }
  }
  showElementsRecursively(Je) {
    Je.classList.remove("hidden");
    Je.classList.remove("invisible");
    Je.classList.remove("hiddenXXLView");
    Je.classList.remove("hiddenXLView");
    Je.classList.remove("hiddenLargeView");
    Je.classList.remove("hiddenMediumView");
    Je.classList.remove("hiddenSmallView");
    Je.classList.remove("hiddenTinyView");
    Je.classList.remove("visibleXXLView");
    Je.classList.remove("visibleXLView");
    Je.classList.remove("visibleLargeView");
    Je.classList.remove("visibleMediumView");
    Je.classList.remove("visibleSmallView");
    Je.classList.remove("visibleTinyView");
    if (!(Je instanceof HTMLButtonElement) && !(Je instanceof HTMLAnchorElement) && !(Je instanceof HTMLInputElement) && !(Je instanceof HTMLSelectElement) && Je.childElementCount > 0) {
      for (let be = 0; be < Je.childElementCount; be++) {
        const Bt = Je.children.item(be);
        if (Bt) {
          this.showElementsRecursively(Bt);
        }
      }
    }
  }
  collectElementPositions(Je, be, Bt) {
    if (Je instanceof HTMLButtonElement || Je instanceof HTMLAnchorElement || Je instanceof HTMLInputElement || Je instanceof HTMLSelectElement) {
      const an = Je.getBoundingClientRect();
      const Gn = {
        element: be,
        x: Math.round(an.left),
        y: Math.round(an.top)
      };
      Bt.push(Gn);
    } else if (Je.childElementCount > 0) {
      for (let an = 0; an < Je.childElementCount; an++) {
        const Gn = Je.children.item(an);
        const Ki = be.children.item(an);
        if (Gn && Ki) {
          Bt = this.collectElementPositions(Gn, Ki, Bt);
        }
      }
    }
    return Bt;
  }
  doInitPDFViewer() {
    if (typeof window === "undefined") {
      return;
    }
    const Je = () => {
      document.removeEventListener("localized", Je);
      this.initTimeout = setTimeout(() => {
        if (!this.shuttingDown) {
          this.calcViewerPositionTop();
          this.afterLibraryInit();
          this.openPDF();
          this.assignTabindexes();
          if (this.replaceBrowserPrint) {
            window.print = window.printPDF;
          }
        }
      }, this.delayFirstView);
    };
    window.addEventListener("afterprint", () => {
      this.afterPrint.emit();
    });
    window.addEventListener("beforeprint", () => {
      this.beforePrint.emit();
    });
    document.addEventListener("localized", Je);
    if (S3.ngxExtendedPdfViewerInitialized) {
      console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
    }
    const be = () => {
      this.overrideDefaultSettings();
      document.removeEventListener("webviewerloaded", be);
    };
    document.addEventListener("webviewerloaded", be);
    this.activateTextlayerIfNecessary(null);
    setTimeout(() => {
      if (!this.shuttingDown) {
        this.onResize();
        this.hideToolbarIfItIsEmpty();
        this.dummyComponents.addMissingStandardWidgets();
        this.ngZone.runOutsideAngular(() => window.webViewerLoad());
        const Bt = window.PDFViewerApplication;
        Bt.appConfig.defaultUrl = "";
        if (this.filenameForDownload) {
          Bt.appConfig.filenameForDownload = this.filenameForDownload;
        }
        const an = window.PDFViewerApplicationOptions;
        an.set("enableDragAndDrop", this.enableDragAndDrop);
        let Gn = this.language === "" ? undefined : this.language;
        Gn ||= navigator.language;
        an.set("locale", Gn);
        an.set("imageResourcesPath", this.imageResourcesPath);
        an.set("minZoom", this.minZoom);
        an.set("maxZoom", this.maxZoom);
        an.set("pageViewMode", this.pageViewMode);
        an.set("verbosity", this.logLevel);
        an.set("initialZoom", this.zoom);
        an.set("pdfBackgroundColor", this.pdfBackground);
        an.set("pdfBackgroundColorToReplace", this.pdfBackgroundColorToReplace);
        Bt.isViewerEmbedded = true;
        if (Bt.printKeyDownListener) {
          window.addEventListener("keydown", Bt.printKeyDownListener, true);
        }
        const Ki = document.getElementsByTagName("body");
        if (Ki[0]) {
          const Gr = Ki[0].children;
          for (let zr = Gr.length - 1; zr >= 0; zr--) {
            const Ks = Gr.item(zr);
            if (Ks && Ks.id === "printContainer") {
              Ki[0].removeChild(Ks);
            }
          }
        }
        const Lr = document.getElementById("printContainer");
        if (Lr) {
          document.getElementsByTagName("body")[0].appendChild(Lr);
        }
      }
    }, 0);
  }
  addTranslationsUnlessProvidedByTheUser() {
    const Je = document.querySelectorAll("link[type=\"application/l10n\"]");
    const be = Je.length;
    const Bt = document.querySelector("script[type=\"application/l10n\"]");
    const an = be > 0 || !!Bt;
    if (this._useBrowserLocale === undefined) {
      this.useBrowserLocale = !an;
    }
    if (an) {
      if (this.useBrowserLocale && be > 0) {
        const Gn = Je[0].attributes.origin;
        if (Gn && Gn.value !== "ngx-extended-pdf-viewer") {
          console.error("Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
        }
      }
    } else {
      if (!this.useBrowserLocale) {
        console.error("If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
        console.error("The easiest way to do this is to add them to the index.html.");
        console.error("The PDF viewer ignores your setting and loads the default translations.");
      }
      const Gn = this.renderer.createElement("link");
      Gn.rel = "resource";
      Gn.type = "application/l10n";
      Gn.href = this.localeFolderPath + "/locale.properties";
      Gn.setAttribute("origin", "ngx-extended-pdf-viewer");
      this.renderer.appendChild(this.elementRef.nativeElement, Gn);
    }
  }
  hideToolbarIfItIsEmpty() {
    this.primaryMenuVisible = this.showToolbar;
    if (!this.showSecondaryToolbarButton || this.hideKebabMenuForSecondaryToolbar) {
      if (!this.isPrimaryMenuVisible()) {
        this.primaryMenuVisible = false;
      }
    }
  }
  afterLibraryInit() {
    this.notificationService.onPDFJSInit.next();
  }
  checkHeight() {
    if (typeof document !== "undefined") {
      const Je = document.getElementsByClassName("zoom")[0];
      if (Je && (Je.clientHeight === 0 && (this.autoHeight || (console.warn("The height of the PDF viewer widget is zero pixels. Please check the height attribute. Is there a syntax error? Or are you using a percentage with a CSS framework that doesn't support this? The height is adjusted automatedly."), this.autoHeight = true)), this.autoHeight)) {
        let Gn = window.innerHeight - Je.getBoundingClientRect().top;
        Gn -= this.calculateBorderMarging(Je);
        Gn = Gn * Number(this._height.replace("%", "")) / 100;
        this.minHeight = Gn > 100 ? `${Gn}px` : "100px";
        this.cdr.markForCheck();
      }
    }
  }
  calculateBorderMarging(Je) {
    if (Je) {
      const be = window.getComputedStyle(Je);
      const Bt = pa.toPx(be.paddingBottom);
      const an = pa.toPx(be.marginBottom);
      if (Je.style.zIndex) {
        return Bt + an;
      } else {
        return Bt + an + this.calculateBorderMarging(Je.parentElement);
      }
    }
    return 0;
  }
  onSpreadChange(Je) {
    this.spreadChange.emit(Je);
  }
  activateTextlayerIfNecessary(Je) {
    if (this.textLayer === undefined) {
      if (this.handTool) {
        if (Je) {
          Je.set("textLayerMode", this.showHandToolButton ? Ut.textLayerMode : 0);
        }
        if (!this.showHandToolButton) {
          if (this.showFindButton || this.showFindButton === undefined) {
            this.ngZone.run(() => {
              this.showFindButton = false;
            });
            if (this.logLevel >= pt.WARNINGS) {
              console.warn("Hiding the \"find\" button because the text layer of the PDF file is not rendered. Use [textLayer]=\"true\" to enable the find button.");
            }
          }
          if (this.showHandToolButton && this.logLevel >= pt.WARNINGS) {
            console.warn("Hiding the \"hand tool / selection mode\" menu because the text layer of the PDF file is not rendered. Use [textLayer]=\"true\" to enable the the menu items.");
            this.showHandToolButton = false;
          }
        }
      } else {
        if (Je) {
          Je.set("textLayerMode", Ut.textLayerMode);
        }
        this.textLayer = true;
        if (this.showFindButton === undefined) {
          this.showFindButton = true;
          setTimeout(() => {
            const be = document.getElementById("viewFind");
            if (be) {
              be.classList.remove("invisible");
            }
            const Bt = document.getElementById("findbar");
            if (Bt) {
              Bt.classList.remove("invisible");
            }
          });
        }
      }
    } else if (this.textLayer) {
      if (Je) {
        Je.set("textLayerMode", Ut.textLayerMode);
      }
      this.textLayer = true;
      if (this.showFindButton === undefined) {
        this.showFindButton = true;
        setTimeout(() => {
          const be = document.getElementById("viewFind");
          if (be) {
            be.classList.remove("invisible");
          }
          const Bt = document.getElementById("findbar");
          if (Bt) {
            Bt.classList.remove("invisible");
          }
        });
      }
    } else {
      if (Je) {
        Je.set("textLayerMode", 0);
      }
      this.textLayer = false;
      if (this.showFindButton && this.logLevel >= pt.WARNINGS) {
        console.warn("Hiding the \"find\" button because the text layer of the PDF file is not rendered. Use [textLayer]=\"true\" to enable the find button.");
        this.ngZone.run(() => {
          this.showFindButton = false;
        });
      }
      if (this.showHandToolButton && this.logLevel >= pt.WARNINGS) {
        console.warn("Hiding the \"hand tool / selection mode\" menu because the text layer of the PDF file is not rendered. Use [textLayer]=\"true\" to enable the the menu items.");
        this.showHandToolButton = false;
      }
    }
  }
  overrideDefaultSettings() {
    var Je = this;
    return (0, i.Z)(function* () {
      const be = window.PDFViewerApplicationOptions;
      for (const Gn in Ut) {
        be.set(Gn, Ut[Gn]);
      }
      be.set("disablePreferences", true);
      yield Je.setZoom();
      be.set("ignoreKeyboard", Je.ignoreKeyboard);
      be.set("ignoreKeys", Je.ignoreKeys);
      be.set("acceptKeys", Je.acceptKeys);
      be.set("wheelAction", Je.wheelAction);
      Je.activateTextlayerIfNecessary(be);
      if (Je.scrollMode || Je.scrollMode === ko.vertical) {
        be.set("scrollModeOnLoad", Je.scrollMode);
      }
      const Bt = Je.sidebarVisible;
      const an = window.PDFViewerApplication;
      if (Bt !== undefined) {
        an.sidebarViewOnLoad = Bt ? 1 : 0;
        if (an.appConfig) {
          an.appConfig.sidebarViewOnLoad = Bt ? Je.activeSidebarView : 0;
        }
        be.set("sidebarViewOnLoad", Je.sidebarVisible ? Je.activeSidebarView : 0);
      }
      if (Je.spread === "even") {
        be.set("spreadModeOnLoad", 2);
        if (an.pdfViewer) {
          an.pdfViewer.spreadMode = 2;
        }
        Je.onSpreadChange("even");
      } else if (Je.spread === "odd") {
        be.set("spreadModeOnLoad", 1);
        if (an.pdfViewer) {
          an.pdfViewer.spreadMode = 1;
        }
        Je.onSpreadChange("odd");
      } else {
        be.set("spreadModeOnLoad", 0);
        if (an.pdfViewer) {
          an.pdfViewer.spreadMode = 0;
        }
        Je.onSpreadChange("off");
      }
      if (Je.printResolution) {
        be.set("printResolution", Je.printResolution);
      }
      if (Je.showBorders === false) {
        be.set("removePageBorders", !Je.showBorders);
      }
    })();
  }
  openPDF() {
    var Je = this;
    ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
    const be = window.PDFViewerApplication;
    be.enablePrint = this.enablePrint;
    S3.ngxExtendedPdfViewerInitialized = true;
    if (this._src) {
      this.ngxExtendedPdfViewerIncompletelyInitialized = false;
      if (!this.listenToURL) {
        be.pdfLinkService.setHash = function () {};
      }
      this.initTimeout = null;
      this.selectCursorTool();
      be.eventBus.on("textlayerrendered", an => {
        this.ngZone.run(() => this.textLayerRendered.emit(an));
      });
      be.eventBus.on("scrollmodechanged", an => {
        this.ngZone.run(() => this.scrollModeChange.emit(an.mode));
      });
      be.eventBus.on("progress", an => {
        this.ngZone.run(() => this.progress.emit(an));
      });
      be.eventBus.on("pagesloaded", function () {
        var an = (0, i.Z)(function* (Gn) {
          Je.ngZone.run(() => Je.pagesLoaded.emit(Gn));
          Je.removeScrollbarInInititeScrollMode();
          if (Je.rotation != null) {
            const Ki = Number(Je.rotation);
            if (Ki === 0 || Ki === 90 || Ki === 180 || Ki === 270) {
              be.pdfViewer.pagesRotation = Ki;
            }
          }
          setTimeout(() => {
            if (!Je.shuttingDown) {
              if (Je.nameddest) {
                be.pdfLinkService.goToDestination(Je.nameddest);
              } else if (Je.page) {
                be.page = Number(Je.page);
              } else if (Je.pageLabel) {
                be.pdfViewer.currentPageLabel = Je.pageLabel;
              }
            }
          });
          yield Je.setZoom();
        });
        return function (Gn) {
          return an.apply(this, arguments);
        };
      }());
      be.eventBus.on("pagerendered", an => {
        this.ngZone.run(() => {
          this.pageRendered.emit(an);
          this.removeScrollbarInInititeScrollMode();
        });
      });
      be.eventBus.on("pagerender", an => {
        this.ngZone.run(() => {
          this.pageRender.emit(an);
        });
      });
      be.eventBus.on("download", an => {
        this.ngZone.run(() => {
          this.pdfDownloaded.emit(an);
        });
      });
      be.eventBus.on("scalechanging", an => {
        setTimeout(() => {
          this.currentZoomFactor.emit(an.scale);
          this.cdr.markForCheck();
        });
        if (an.presetValue !== "auto" && an.presetValue !== "page-fit" && an.presetValue !== "page-actual" && an.presetValue !== "page-width") {
          if (Math.abs(an.previousScale - an.scale) > 0.000001) {
            this.zoom = an.scale * 100;
            this.zoomChange.emit(an.scale * 100);
          }
        } else if (an.previousPresetValue !== an.presetValue) {
          this.zoomChange.emit(an.presetValue);
        }
      });
      be.eventBus.on("rotationchanging", an => {
        this.ngZone.run(() => {
          this.rotationChange.emit(an.pagesRotation);
        });
      });
      be.eventBus.on("fileinputchange", an => {
        this.ngZone.run(() => {
          if (an.fileInput.files && an.fileInput.files.length >= 1) {
            this.srcChange.emit(an.fileInput.files[0].name);
          } else {
            var Gn;
            var Ki;
            const Lr = (Gn = an.fileInput) === null || Gn === undefined || (Ki = Gn.value) === null || Ki === undefined ? undefined : Ki.replace("C:\\fakepath\\", "");
            this.srcChange.emit(Lr);
          }
        });
      });
      be.eventBus.on("cursortoolchanged", an => {
        this.ngZone.run(() => {
          this.handTool = an.tool === ho.HAND;
          this.handToolChange.emit(an.tool === ho.HAND);
        });
      });
      be.eventBus.on("sidebarviewchanged", an => {
        this.ngZone.run(() => {
          this.sidebarVisibleChange.emit(an.view > 0);
          if (an.view > 0) {
            this.activeSidebarViewChange.emit(an.view);
          }
          if (this.sidebarComponent) {
            this.sidebarComponent.showToolbarWhenNecessary();
          }
        });
      });
      be.eventBus.on("documentloaded", an => {
        this.ngZone.run(() => {
          this.loadComplete(an.source.pdfDocument);
        });
      });
      const Bt = () => {
        this.ngZone.run(() => {
          if (this.sidebarComponent) {
            this.sidebarComponent.showToolbarWhenNecessary();
          }
        });
      };
      be.eventBus.on("outlineloaded", Bt);
      be.eventBus.on("attachmentsloaded", Bt);
      be.eventBus.on("layersloaded", Bt);
      be.eventBus.on("annotationlayerrendered", an => this.annotationLayerRendered.emit(an));
      be.eventBus.on("annotationeditorlayerrendered", an => this.annotationEditorLayerRendered.emit(an));
      be.eventBus.on("xfalayerrendered", an => this.xfaLayerRendered.emit(an));
      be.eventBus.on("outlineloaded", an => this.outlineLoaded.emit(an));
      be.eventBus.on("attachmentsloaded", an => this.attachmentsloaded.emit(an));
      be.eventBus.on("layersloaded", an => this.layersloaded.emit(an));
      be.eventBus.on("updatefindcontrolstate", an => {
        if (an.state === St.NOT_FOUND) {
          this.updateFindMatchesCount.emit({
            current: 0,
            total: 0
          });
        } else if (an.matchesCount.total) {
          an.matchesCount.matches = be.findController._pageMatches;
          an.matchesCount.matchesLength = be.findController._pageMatchesLength;
          an.matchesCount.matchesColor = be.findController._pageMatchesColor;
          this.updateFindMatchesCount.emit(an.matchesCount);
        }
        if (this.updateFindState) {
          this.updateFindState.emit(an.state);
        }
      });
      be.eventBus.on("updatefindmatchescount", an => {
        an.matchesCount.matches = be.findController._pageMatches;
        an.matchesCount.matchesLength = be.findController._pageMatchesLength;
        an.matchesCount.matchesColor = be.findController._pageMatchesColor;
        this.updateFindMatchesCount.emit(an.matchesCount);
      });
      be.eventBus.on("pagechanging", an => {
        if (!this.shuttingDown) {
          this.ngZone.run(() => {
            const Gn = be.pdfViewer.currentPageNumber;
            const Ki = be.pdfViewer.currentPageLabel;
            if (Gn !== this.page) {
              this.pageChange.emit(Gn);
            }
            if (Ki !== this.pageLabel) {
              this.pageLabelChange.emit(Ki);
            }
          });
        }
      });
      setTimeout((0, i.Z)(function* () {
        return Je.checkHeight();
      }), 100);
      if (this._src) {
        const an = {
          password: this.password,
          verbosity: this.logLevel
        };
        if (this._src.range) {
          an.range = this._src.range;
        }
        if (this.httpHeaders) {
          an.httpHeaders = this.httpHeaders;
        }
        if (this.authorization) {
          an.withCredentials = true;
          if (typeof this.authorization != "boolean") {
            an.httpHeaders ||= {};
            an.httpHeaders.Authorization = this.authorization;
          }
        }
        an.baseHref = this.baseHref;
        be.onError = Gn => this.pdfLoadingFailed.emit(Gn);
        this.ngZone.runOutsideAngular((0, i.Z)(function* () {
          if (typeof Je._src == "string") {
            an.url = Je._src;
          } else if (Je._src instanceof ArrayBuffer || Je._src instanceof Uint8Array) {
            an.data = Je._src;
          }
          an.rangeChunkSize = Ut.rangeChunkSize;
          yield be.open(an);
          Je.pdfLoadingStarts.emit({});
          setTimeout((0, i.Z)(function* () {
            return Je.setZoom();
          }));
        }));
      }
      setTimeout(() => {
        if (!this.shuttingDown) {
          if (this.page) {
            be.page = Number(this.page);
          }
        }
      }, 100);
    }
  }
  removeScrollbarInInititeScrollMode() {
    if (this.pageViewMode === "infinite-scroll") {
      setTimeout(() => {
        if (this.pageViewMode === "infinite-scroll") {
          const Je = document.getElementById("viewer");
          if (Je) {
            const be = Je.clientHeight + 17;
            const Bt = document.getElementsByClassName("zoom")[0];
            if (this.primaryMenuVisible) {
              this.height = be + 35 + "px";
            } else if (be > 17) {
              this.height = be + "px";
            }
            if (Bt) {
              Bt.style.height = this.height;
            }
          }
        }
      });
    }
  }
  openPDF2() {
    var Je = this;
    return (0, i.Z)(function* () {
      var be;
      var Bt;
      Je.overrideDefaultSettings();
      const an = window.PDFViewerApplication;
      if ((be = an.pdfDocument) !== null && be !== undefined && (Bt = be.annotationStorage) !== null && Bt !== undefined) {
        Bt.resetModified();
      }
      yield an.close();
      Je.formData = {};
      Je.formIdToFieldName = {};
      Je.formRadioButtonValueToId = {};
      const Gn = {
        password: Je.password,
        verbosity: Je.logLevel
      };
      if (Je._src && Je._src.range) {
        Gn.range = Je._src.range;
      }
      if (Je.httpHeaders) {
        Gn.httpHeaders = Je.httpHeaders;
      }
      if (Je.authorization) {
        Gn.withCredentials = true;
        if (typeof Je.authorization != "boolean") {
          Gn.httpHeaders ||= {};
          Gn.httpHeaders.Authorization = Je.authorization;
        }
      }
      Gn.baseHref = Je.baseHref;
      try {
        if (typeof Je._src == "string") {
          Gn.url = Je._src;
        } else if (Je._src instanceof ArrayBuffer || Je._src instanceof Uint8Array) {
          Gn.data = Je._src;
        }
        Gn.rangeChunkSize = Ut.rangeChunkSize;
        yield an.open(Gn);
        Je.pdfLoaded.emit({
          pagesCount: an.pagesCount
        });
      } catch (Ki) {
        Je.pdfLoadingFailed.emit(Ki);
      }
    })();
  }
  selectCursorTool() {
    window.PDFViewerApplication.eventBus.dispatch("switchcursortool", {
      tool: this.handTool ? 1 : 0
    });
  }
  ngOnDestroy() {
    var Je = this;
    return (0, i.Z)(function* () {
      if (typeof window === "undefined") {
        return;
      }
      const be = S3.originalPrint;
      if (window && be && !be.toString().includes("printPdf")) {
        window.print = be;
      }
      const Bt = document.querySelector("#printContainer");
      var an;
      if (Bt) {
        if ((an = Bt.parentElement) !== null && an !== undefined) {
          an.removeChild(Bt);
        }
      }
      window.getFormValue = undefined;
      window.setFormValue = undefined;
      window.registerAcroformAnnotations = undefined;
      const Gn = window.PDFViewerApplication;
      var Ki;
      var Lr;
      Je.shuttingDown = true;
      S3.ngxExtendedPdfViewerInitialized = false;
      if (Je.initTimeout) {
        clearTimeout(Je.initTimeout);
        Je.initTimeout = undefined;
      }
      if (Gn) {
        if (Je.pinchOnMobileSupport) {
          Je.pinchOnMobileSupport.destroyPinchZoom();
          Je.pinchOnMobileSupport = undefined;
        }
        if (Je.relativeCoordsSupport) {
          Je.relativeCoordsSupport.destroyRelativeCoords();
          Je.relativeCoordsSupport = undefined;
        }
        if ((Ki = Gn.pdfDocument) !== null && Ki !== undefined && (Lr = Ki.annotationStorage) !== null && Lr !== undefined) {
          Lr.resetModified();
        }
        Je.formData = {};
        Je.formIdToFieldName = {};
        Je.formRadioButtonValueToId = {};
        Gn._cleanup();
        yield Gn.close();
        if (Gn.printKeyDownListener) {
          removeEventListener("keydown", Gn.printKeyDownListener, true);
        }
        setTimeout(() => {
          if (Gn._boundEvents) {
            Gn.unbindWindowEvents();
          }
          const Gr = Gn.eventBus;
          if (Gr) {
            Gn.unbindEvents();
            for (const zr in Gr._listeners) {
              if (Gr._listeners[zr]) {
                const Ks = Gr._listeners[zr];
                for (let Js = 0; Js < Ks.length; Js++) {
                  Ks[Js] = undefined;
                }
                Gr._listeners[zr] = undefined;
              }
            }
          }
          Gn.eventBus = null;
        });
      }
    })();
  }
  isPrimaryMenuVisible() {
    return !!this.showToolbar && (!!this.showDownloadButton || !!this.showFindButton || !!this.showOpenFileButton || !!this.showPagingButtons || !!this.showPresentationModeButton || !!this.showPrintButton || !!this.showPropertiesButton || !!this.showRotateButton || !!this.showHandToolButton || !!this.showScrollingButton || !!this.showSpreadButton || !!this.showSidebarButton || !!this.showZoomButtons);
  }
  ngOnChanges(Je) {
    var be = this;
    return (0, i.Z)(function* () {
      if (typeof window === "undefined") {
        return;
      }
      const Bt = window.PDFViewerApplication;
      const an = window.PDFViewerApplicationOptions;
      if (S3.ngxExtendedPdfViewerInitialized) {
        if ("src" in Je || "base64Src" in Je) {
          if (be.srcChangeTriggeredByUser) {
            be.srcChangeTriggeredByUser = false;
          } else if (be._src) {
            if (be.ngxExtendedPdfViewerIncompletelyInitialized) {
              be.openPDF();
            } else {
              yield be.openPDF2();
            }
          } else {
            var Gn;
            var Ki;
            if ((Gn = Bt.pdfDocument) !== null && Gn !== undefined && (Ki = Gn.annotationStorage) !== null && Ki !== undefined) {
              Ki.resetModified();
            }
            be.formData = {};
            be.formIdToFieldName = {};
            be.formRadioButtonValueToId = {};
            let Gr = Bt.appConfig?.openFileInput;
            Gr ||= document.querySelector("#fileInput");
            if (Gr) {
              Gr.value = "";
            }
            yield Bt.close();
          }
        }
        if ("enableDragAndDrop" in Je) {
          an.set("enableDragAndDrop", be.enableDragAndDrop);
        }
        if ("zoom" in Je) {
          (0, i.Z)(function* () {
            return be.setZoom();
          })();
        }
        if ("maxZoom" in Je) {
          an.set("maxZoom", be.maxZoom);
        }
        if ("minZoom" in Je) {
          an.set("minZoom", be.minZoom);
        }
        if ("handTool" in Je) {
          be.selectCursorTool();
        }
        if ("page" in Je && be.page && be.page != Bt.page) {
          Bt.page = be.page;
        }
        if ("pageLabel" in Je && be.pageLabel && be.pageLabel !== Bt.pdfViewer.currentPageLabel) {
          Bt.pdfViewer.currentPageLabel = be.pageLabel;
        }
        if ("rotation" in Je) {
          if (be.rotation) {
            const Gr = Number(be.rotation);
            if (Gr === 0 || Gr === 90 || Gr === 180 || Gr === 270) {
              Bt.pdfViewer.pagesRotation = Gr;
            }
          } else {
            Bt.pdfViewer.pagesRotation = 0;
          }
        }
        if ("scrollMode" in Je && (be.scrollMode || be.scrollMode === ko.vertical) && Bt.pdfViewer.scrollMode !== Number(be.scrollMode)) {
          Bt.eventBus.dispatch("switchscrollmode", {
            mode: Number(be.scrollMode)
          });
        }
        if ("sidebarVisible" in Je || "activeSidebarView" in Je) {
          if (be.sidebarVisible) {
            const Gr = Number(be.activeSidebarView);
            if (Gr === 1 || Gr === 2 || Gr === 3 || Gr === 4) {
              Bt.pdfSidebar.switchView(Gr, true);
            } else {
              console.error("[activeSidebarView] must be an integer value between 1 and 4");
            }
          } else {
            Bt.pdfSidebar.close();
          }
        }
        if ("filenameForDownload" in Je) {
          Bt.appConfig.filenameForDownload = be.filenameForDownload;
        }
        if ("nameddest" in Je && be.nameddest) {
          Bt.pdfLinkService.goToDestination(be.nameddest);
        }
        if ("spread" in Je) {
          if (be.spread === "even") {
            Bt.spreadModeOnLoad = 2;
            Bt.pdfViewer.spreadMode = 2;
            be.onSpreadChange("even");
          } else if (be.spread === "odd") {
            Bt.spreadModeOnLoad = 1;
            Bt.pdfViewer.spreadMode = 1;
            be.onSpreadChange("odd");
          } else {
            Bt.spreadModeOnLoad = 0;
            Bt.pdfViewer.spreadMode = 0;
            be.onSpreadChange("off");
          }
        }
        if ("wheelAction" in Je) {
          an.set("wheelAction", be.wheelAction);
        }
        be.hideToolbarIfItIsEmpty();
        setTimeout(() => be.calcViewerPositionTop());
      }
      if ("printResolution" in Je) {
        const Gr = an;
        if (Gr) {
          Gr.set("printResolution", be.printResolution);
        }
      }
      if ("ignoreKeyboard" in Je && an) {
        be.overrideDefaultSettings();
      }
      if ("ignoreKeys" in Je && an) {
        be.overrideDefaultSettings();
      }
      if ("acceptKeys" in Je && an) {
        be.overrideDefaultSettings();
      }
      if ("showBorders" in Je && !Je.showBorders.isFirstChange() && an) {
        be.overrideDefaultSettings();
        const zr = document.getElementById("viewer");
        if (be.showBorders) {
          zr.classList.remove("removePageBorders");
        } else {
          zr.classList.add("removePageBorders");
        }
        if (Bt.pdfViewer) {
          Bt.pdfViewer.removePageBorders = !be.showBorders;
        }
        const Ks = {
          source: zr,
          scale: (Number(be.zoom) | 100) / 100,
          presetValue: be.zoom
        };
        Bt.eventBus.dispatch("scalechanging", Ks);
      }
      if ("showUnverifiedSignatures" in Je && Bt && Bt.pdfDocument) {
        Bt.pdfDocument._transport.messageHandler.send("showUnverifiedSignatures", be.showUnverifiedSignatures);
      }
      if ("formData" in Je) {
        if (!Je.formData.isFirstChange()) {
          be.updateFormFields(be.formData, Je.formData.previousValue);
        }
      }
      if ("enablePrint" in Je) {
        if (!Je.enablePrint.isFirstChange()) {
          Bt.enablePrint = be.enablePrint;
        }
      }
      if (("customFindbar" in Je && !Je.customFindbar.isFirstChange() || "customFindbarButtons" in Je && !Je.customFindbarButtons.isFirstChange() || "customFindbarInputArea" in Je && !Je.customFindbarInputArea.isFirstChange() || "customToolbar" in Je && !Je.customToolbar.isFirstChange()) && be.dummyComponents) {
        be.dummyComponents.addMissingStandardWidgets();
      }
      if ("pdfBackgroundColor" in Je && !Je["pdfBackgroundColor "].isFirstChange()) {
        an.set("pdfBackgroundColor", be.pdfBackground);
      }
      if ("pdfBackgroundColorToReplace" in Je && !Je.pdfBackgroundColorToReplace.isFirstChange()) {
        an.set("pdfBackgroundColorToReplace", be.pdfBackgroundColorToReplace);
      }
      if ("pageViewMode" in Je && !Je.pageViewMode.isFirstChange()) {
        be.removeScrollbarInInititeScrollMode();
      }
      if ("replaceBrowserPrint" in Je) {
        if (be.replaceBrowserPrint) {
          if (window.printPDF) {
            window.print = window.printPDF;
          }
        } else {
          const Gr = S3.originalPrint;
          if (Gr && !Gr.toString().includes("printPdf")) {
            window.print = Gr;
          }
        }
      }
      setTimeout(() => be.calcViewerPositionTop());
    })();
  }
  setZoom() {
    var Je = this;
    return (0, i.Z)(function* () {
      if (Je.root) {
        const be = window.PDFViewerApplication;
        let Bt = Je.zoom;
        if (String(Bt).endsWith("%")) {
          Bt = Number(String(Bt).replace("%", "")) / 100;
        } else if (!isNaN(Number(Bt))) {
          Bt = Number(Bt) / 100;
        }
        if (!Bt && be.store) {
          const Gn = yield be.store.get("zoom");
          Bt = Gn ? isNaN(Number(Gn)) ? Gn : Number(Gn) / 100 : "auto";
        }
        if (be) {
          window.PDFViewerApplicationOptions.set("defaultZoomValue", Bt);
        }
        const an = Je.root.nativeElement.querySelector("#scaleSelect");
        if (an) {
          if (Je.zoom === "auto" || Je.zoom === "page-fit" || Je.zoom === "page-actual" || Je.zoom === "page-width") {
            an.value = Je.zoom;
          } else {
            an.value = "custom";
            if (an.options) {
              for (const Gn of an.options) {
                if (Gn.value === "custom") {
                  Gn.textContent = Math.round(Number(Bt) * 100000) / 1000 + "%";
                }
              }
            }
          }
        }
        if (be.pdfViewer) {
          be.pdfViewer.currentScaleValue = Bt || "auto";
        }
      }
    })();
  }
  onResize() {
    const Je = document.getElementsByClassName("html");
    if (Je && Je.length > 0) {
      const be = document.getElementById("outerContainer");
      if (be) {
        this.toolbarWidthInPixels = be.clientWidth;
        if (this.secondaryToolbarComponent) {
          this.secondaryToolbarComponent.checkVisibility();
        }
      }
      this.checkHeight();
    }
    try {
      const be = new ResizeObserver(() => this.removeScrollbarInInititeScrollMode());
      const Bt = document.getElementById("viewer");
      if (Bt) {
        be.observe(Bt);
      }
    } catch {
      console.log("ResizeObserver is not supported by your browser");
    }
  }
  onContextMenu() {
    return this.contextMenuAllowed;
  }
  onSecondaryMenuIsEmpty(Je) {
    this.hideKebabMenuForSecondaryToolbar = Je;
    if (Je) {
      if (!this.isPrimaryMenuVisible()) {
        this.primaryMenuVisible = false;
      }
    }
  }
  registerAcroformAnnotations(Je) {
    let be = {};
    let Bt = {};
    for (let an of Je) {
      if (an.fieldName) {
        if (be[an.fieldName]) {
          Bt[an.fieldName] = an;
        }
        be[an.fieldName] = an;
      }
    }
    for (let an of Je) {
      if (an.fieldName && Bt[an.fieldName]) {
        this.formIdToFieldName[an.id] = an.fieldName;
      }
    }
  }
  getFormValue(Je) {
    if (this.formData[Je] === undefined && Je.includes("/")) {
      Je = Je.split("/")[0];
    }
    return {
      value: this.formData[Je]
    };
  }
  setFormValue(Je, be) {
    this.formData ||= {};
    if (this.formIdToFieldName[Je]) {
      this.formData[this.formIdToFieldName[Je]] = be;
    } else {
      this.formData[Je] = be;
    }
    this.ngZone.run(() => this.formDataChange.emit(this.formData));
  }
  assignFormIdAndFieldName(Je, be, Bt) {
    this.formIdToFieldName[Je] = be;
    if (Bt) {
      this.formRadioButtonValueToId[Bt] = Je;
    }
  }
  updateFormFields(Je, be) {
    const Bt = window.PDFViewerApplication;
    if (!Bt || !Bt.pdfDocument || !Bt.pdfDocument.annotationStorage) {
      return;
    }
    const an = Bt.pdfDocument.annotationStorage;
    for (const Gn in Je) {
      if (Je.hasOwnProperty(Gn) && Je[Gn] !== be[Gn]) {
        const Ki = document.querySelector("input[name='" + Gn + "']");
        if (Ki instanceof HTMLInputElement) {
          if (Ki.type === "radio") {
            const Lr = document.querySelectorAll("input[name='" + Gn + "']");
            const Gr = this.formRadioButtonValueToId[Je[Gn]];
            Lr.forEach(zr => {
              const Ks = zr.id.replace("pdfjs_internal_id_", "");
              zr.checked = Ks === Gr;
              for (let Js in this.formRadioButtonValueToId) {
                if (Js && this.formRadioButtonValueToId[Js] === Ks) {
                  an.setValue(Ks, Gn, {
                    value: Je[Gn] === Js,
                    emitMessage: false
                  });
                }
              }
            });
          } else if (Ki.type === "checkbox") {
            an.setValue(Ki.id, Gn, {
              value: Je[Gn],
              emitMessage: false
            });
            Ki.checked = Je[Gn];
          } else {
            an.setValue(Ki.id, Gn, {
              value: Je[Gn],
              emitMessage: false
            });
            Ki.value = Je[Gn];
          }
        } else if (Ki) ;else {
          const Lr = document.querySelector("textarea[name='" + Gn + "']");
          if (Lr) {
            an.setValue(Lr.id, Gn, {
              value: Je[Gn],
              emitMessage: false
            });
            Lr.value = Je[Gn];
          } else {
            const Gr = document.querySelector("select[name='" + Gn + "']");
            if (Gr) {
              an.setValue(Gr.id, Gn, {
                value: Je[Gn],
                emitMessage: false
              });
              if (Gr.multiple) {
                const zr = this.formData[Gn];
                for (let Ks = 0; Ks < Gr.options.length; Ks++) {
                  Gr.options[Ks].selected = zr.indexOf(Gr.options[Ks].value) >= 0;
                }
              } else {
                Gr.value = Je[Gn];
              }
            }
          }
        }
      }
    }
    for (const Gn in be) {
      if (be.hasOwnProperty(Gn) && !Je.hasOwnProperty(Gn)) {
        const Ki = document.querySelector("input[name='" + Gn + "']");
        if (Ki instanceof HTMLInputElement) {
          if (Ki.type === "checkbox") {
            an.setValue(Ki.id, Gn, {
              value: false,
              emitMessage: false
            });
            Ki.checked = false;
          } else {
            an.setValue(Ki.id, Gn, {
              value: undefined,
              emitMessage: false
            });
            Ki.value = "";
          }
        } else if (!Ki) {
          const Lr = document.querySelector("textarea[name='" + Gn + "']");
          if (Lr) {
            an.setValue(Lr.id, Gn, {
              value: undefined,
              emitMessage: false
            });
            Lr.value = "";
          }
        }
      }
    }
  }
  loadComplete(Je) {
    this.hasSignature = false;
    this.buttonValues = {};
    for (let be = 1; be <= Je.numPages; be++) {
      Je.getPage(be).then(Bt => Bt.getAnnotations()).then(Bt => {
        Bt.filter(an => an.subtype === "Widget").forEach(an => {
          if (an.checkBox) {
            this.buttonValues[an.id] = an.exportValue;
          } else if (an.radioButton) {
            this.buttonValues[an.id] = an.buttonValue;
          }
          if (an.fieldType === "Sig") {
            this.ngZone.run(() => {
              this.hasSignature = true;
              setTimeout(() => {
                document.querySelector("#viewerContainer").scrollBy(0, -32);
              });
            });
          }
        });
      });
    }
    this.pdfLoaded.emit({
      pagesCount: Je.numPages
    });
  }
  zoomToPageWidth(Je) {
    var be = this;
    return (0, i.Z)(function* () {
      if (be.handTool) {
        if (!Ut.doubleTapZoomsInHandMode) {
          return;
        }
      } else if (!Ut.doubleTapZoomsInTextSelectionMode) {
        return;
      }
      const Bt = window.PDFViewerApplication;
      const an = Je.clientY;
      const Gn = Bt.pdfViewer.currentScale;
      if (be.zoom !== Ut.doubleTapZoomFactor && be.zoom + "%" !== Ut.doubleTapZoomFactor) {
        be.previousZoom = be.zoom;
        be.zoom = Ut.doubleTapZoomFactor;
        yield be.setZoom();
      } else {
        if (!Ut.doubleTapResetsZoomOnSecondDoubleTap) {
          return;
        }
        be.zoom = be.previousZoom ? be.previousZoom : "page-width";
        yield be.setZoom();
      }
      const Lr = Bt.pdfViewer.currentScale / Gn - 1;
      const Gr = Bt.pdfViewer.container.getBoundingClientRect();
      Bt.pdfViewer.container.scrollTop += (an - Gr.top) * Lr;
    })();
  }
}
S3.originalPrint = window.print;
S3.ngxExtendedPdfViewerInitialized = false;
S3.ɵfac = function (Je) {
  return new (Je || S3)(t.Y36(t.R0b), t.Y36(t.Lbi), t.Y36(Ar), t.Y36(b.Ye), t.Y36(t.SBq), t.Y36(b.lw), t.Y36(t.sBO), t.Y36(CG), t.Y36(t.Qsj));
};
S3.ɵcmp = t.Xpm({
  type: S3,
  selectors: [["ngx-extended-pdf-viewer"]],
  viewQuery: function (Je, be) {
    if (Je & 1) {
      t.Gf(Wt, 5);
      t.Gf(C, 5);
      t.Gf(w, 5);
      t.Gf(S, 5);
    }
    if (Je & 2) {
      let Bt;
      if (t.iGM(Bt = t.CRH())) {
        be.dummyComponents = Bt.first;
      }
      if (t.iGM(Bt = t.CRH())) {
        be.root = Bt.first;
      }
      if (t.iGM(Bt = t.CRH())) {
        be.secondaryToolbarComponent = Bt.first;
      }
      if (t.iGM(Bt = t.CRH())) {
        be.sidebarComponent = Bt.first;
      }
    }
  },
  hostBindings: function (Je, be) {
    if (Je & 1) {
      t.NdJ("contextmenu", function () {
        return be.onContextMenu();
      });
    }
  },
  inputs: {
    customFindbarInputArea: "customFindbarInputArea",
    customToolbar: "customToolbar",
    customFindbar: "customFindbar",
    customFindbarButtons: "customFindbarButtons",
    customPdfViewer: "customPdfViewer",
    customSecondaryToolbar: "customSecondaryToolbar",
    customSidebar: "customSidebar",
    customThumbnail: "customThumbnail",
    customFreeFloatingBar: "customFreeFloatingBar",
    showFreeFloatingBar: "showFreeFloatingBar",
    enableDragAndDrop: "enableDragAndDrop",
    formData: "formData",
    pageViewMode: "pageViewMode",
    scrollMode: "scrollMode",
    authorization: "authorization",
    httpHeaders: "httpHeaders",
    contextMenuAllowed: "contextMenuAllowed",
    enablePrint: "enablePrint",
    delayFirstView: "delayFirstView",
    showEditor: "showEditor",
    logLevel: "logLevel",
    relativeCoordsOptions: "relativeCoordsOptions",
    minifiedJSLibraries: "minifiedJSLibraries",
    printResolution: "printResolution",
    rotation: "rotation",
    src: "src",
    base64Src: "base64Src",
    minHeight: "minHeight",
    height: "height",
    useBrowserLocale: "useBrowserLocale",
    forceUsingLegacyES5: "forceUsingLegacyES5",
    backgroundColor: "backgroundColor",
    pdfBackground: "pdfBackground",
    pdfBackgroundColorToReplace: "pdfBackgroundColorToReplace",
    filenameForDownload: "filenameForDownload",
    ignoreKeyboard: "ignoreKeyboard",
    ignoreKeys: "ignoreKeys",
    acceptKeys: "acceptKeys",
    imageResourcesPath: "imageResourcesPath",
    localeFolderPath: "localeFolderPath",
    language: "language",
    listenToURL: "listenToURL",
    nameddest: "nameddest",
    password: "password",
    replaceBrowserPrint: "replaceBrowserPrint",
    showUnverifiedSignatures: "showUnverifiedSignatures",
    startTabindex: "startTabindex",
    showSidebarButton: "showSidebarButton",
    sidebarVisible: "sidebarVisible",
    activeSidebarView: "activeSidebarView",
    showFindButton: "showFindButton",
    showFindHighlightAll: "showFindHighlightAll",
    showFindMatchCase: "showFindMatchCase",
    showFindCurrentPageOnly: "showFindCurrentPageOnly",
    showFindPageRange: "showFindPageRange",
    showFindEntireWord: "showFindEntireWord",
    showFindEntirePhrase: "showFindEntirePhrase",
    showFindIgnoreAccents: "showFindIgnoreAccents",
    showFindFuzzySearch: "showFindFuzzySearch",
    showFindResultsCount: "showFindResultsCount",
    showFindMessages: "showFindMessages",
    showPagingButtons: "showPagingButtons",
    showZoomButtons: "showZoomButtons",
    showPresentationModeButton: "showPresentationModeButton",
    showOpenFileButton: "showOpenFileButton",
    showPrintButton: "showPrintButton",
    showDownloadButton: "showDownloadButton",
    theme: "theme",
    formTheme: "formTheme",
    showToolbar: "showToolbar",
    showSecondaryToolbarButton: "showSecondaryToolbarButton",
    showRotateButton: "showRotateButton",
    handTool: "handTool",
    showHandToolButton: "showHandToolButton",
    showScrollingButton: "showScrollingButton",
    showSpreadButton: "showSpreadButton",
    showPropertiesButton: "showPropertiesButton",
    showBorders: "showBorders",
    spread: "spread",
    page: "page",
    pageLabel: "pageLabel",
    textLayer: "textLayer",
    zoom: "zoom",
    zoomLevels: "zoomLevels",
    maxZoom: "maxZoom",
    minZoom: "minZoom",
    wheelAction: "wheelAction",
    mobileFriendlyZoom: "mobileFriendlyZoom"
  },
  outputs: {
    formDataChange: "formDataChange",
    progress: "progress",
    srcChange: "srcChange",
    scrollModeChange: "scrollModeChange",
    afterPrint: "afterPrint",
    beforePrint: "beforePrint",
    currentZoomFactor: "currentZoomFactor",
    rotationChange: "rotationChange",
    annotationLayerRendered: "annotationLayerRendered",
    annotationEditorLayerRendered: "annotationEditorLayerRendered",
    xfaLayerRendered: "xfaLayerRendered",
    outlineLoaded: "outlineLoaded",
    attachmentsloaded: "attachmentsloaded",
    layersloaded: "layersloaded",
    sidebarVisibleChange: "sidebarVisibleChange",
    activeSidebarViewChange: "activeSidebarViewChange",
    handToolChange: "handToolChange",
    spreadChange: "spreadChange",
    thumbnailDrawn: "thumbnailDrawn",
    pageChange: "pageChange",
    pageLabelChange: "pageLabelChange",
    pagesLoaded: "pagesLoaded",
    pageRender: "pageRender",
    pageRendered: "pageRendered",
    pdfDownloaded: "pdfDownloaded",
    pdfLoaded: "pdfLoaded",
    pdfLoadingStarts: "pdfLoadingStarts",
    pdfLoadingFailed: "pdfLoadingFailed",
    textLayerRendered: "textLayerRendered",
    updateFindMatchesCount: "updateFindMatchesCount",
    updateFindState: "updateFindState",
    zoomChange: "zoomChange"
  },
  features: [t.TTD],
  ngContentSelectors: et,
  decls: 10,
  vars: 7,
  consts: [[4, "ngIf"], [3, "zoom", "width"], [4, "ngTemplateOutlet"], ["defaultPdfViewer", ""], ["defaultFreeFloatingBar", ""], [1, "zoom"], ["root", ""], [1, "html"], [1, "body"], ["id", "outerContainer", 3, "resize"], ["class", "free-floating-bar", 4, "ngIf"], [3, "sidebarVisible", "showSidebarButton", "customSidebar", "customThumbnail", "mobileFriendlyZoomScale", "sidebarPositionTop", "thumbnailDrawn"], ["pdfsidebar", ""], ["id", "mainContainer"], [3, "customToolbar", "mobileFriendlyZoomScale", "primaryMenuVisible", "showDownloadButton", "showEditor", "showFindButton", "showHandToolButton", "showOpenFileButton", "showPrintButton", "showPagingButtons", "showPresentationModeButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "showZoomButtons", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels", "onToolbarLoaded"], ["id", "editorFreeTextParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], [1, "editorParamsToolbarContainer"], [1, "editorParamsSetter"], ["for", "editorFreeTextColor", "data-l10n-id", "editor_free_text_font_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorFreeTextColor", "tabindex", "100", 1, "editorParamsColor"], ["for", "editorFreeTextFontSize", "data-l10n-id", "editor_free_text_font_size", 1, "editorParamsLabel"], ["type", "range", "id", "editorFreeTextFontSize", "value", "10", "min", "5", "max", "100", "step", "1", "tabindex", "101", 1, "editorParamsSlider"], ["id", "editorInkParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], ["for", "editorInkColor", "data-l10n-id", "editor_ink_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorInkColor", "tabindex", "102", 1, "editorParamsColor"], ["for", "editorInkThickness", "data-l10n-id", "editor_ink_thickness", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkThickness", "value", "1", "min", "1", "max", "20", "step", "1", "tabindex", "103", 1, "editorParamsSlider"], ["for", "editorInkOpacity", "data-l10n-id", "editor_ink_opacity", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkOpacity", "value", "100", "min", "1", "max", "100", "step", "1", "tabindex", "104", 1, "editorParamsSlider"], [3, "customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "showPresentationModeButton", "showOpenFileButton", "showPrintButton", "showDownloadButton", "showPagingButtons", "showRotateButton", "showHandToolButton", "showScrollingButton", "showSpreadButton", "showPropertiesButton", "spreadChange", "secondaryMenuIsEmpty"], ["pdfSecondaryToolbarComponent", ""], [3, "findbarLeft", "findbarTop", "mobileFriendlyZoomScale", "showFindButton", "customFindbarInputArea", "customFindbarButtons", "showFindCurrentPageOnly", "showFindEntirePhrase", "showFindEntireWord", "showFindFuzzySearch", "showFindHighlightAll", "showFindIgnoreAccents", "showFindMatchCase", "showFindMessages", "showFindPageRange", "showFindResultsCount"], ["id", "viewerContainer", "tabindex", "0"], ["class", "unverified-signature-warning", 4, "ngIf"], ["class", "modified-background-warning", 4, "ngIf"], ["id", "viewer", 1, "pdfViewer", 3, "dblclick"], ["id", "dialogContainer"], ["type", "file", "id", "fileInput", 1, "hidden"], ["id", "printContainer"], [1, "free-floating-bar"], [1, "unverified-signature-warning"], [1, "modified-background-warning"]],
  template: function (Je, be) {
    if (Je & 1) {
      t.F$t(et);
      t.YNc(0, Oe, 1, 0, "pdf-dark-theme", 0);
      t.YNc(1, Ee, 1, 0, "pdf-light-theme", 0);
      t.YNc(2, ke, 1, 0, "pdf-acroform-dark-theme", 0);
      t.YNc(3, Be, 1, 0, "pdf-acroform-default-theme", 0);
      t._UZ(4, "pdf-dynamic-css", 1);
      t.YNc(5, De, 1, 0, "ng-content", 2);
      t.YNc(6, Et, 50, 67, "ng-template", null, 3, t.W1O);
      t.YNc(8, lt, 0, 0, "ng-template", null, 4, t.W1O);
    }
    if (Je & 2) {
      const Bt = t.MAs(7);
      t.Q6J("ngIf", be.theme === "dark");
      t.xp6(1);
      t.Q6J("ngIf", be.theme === "light");
      t.xp6(1);
      t.Q6J("ngIf", be.formTheme === "dark");
      t.xp6(1);
      t.Q6J("ngIf", be.formTheme === "light");
      t.xp6(1);
      t.Q6J("zoom", be.mobileFriendlyZoomScale)("width", be.toolbarWidthInPixels);
      t.xp6(1);
      t.Q6J("ngTemplateOutlet", be.customPdfViewer ? be.customPdfViewer : Bt);
    }
  },
  dependencies: [on, In, so, js, di, vs, Wt, ha, vr, Zr, ns, $i, Qi, Zi, br, b.O5, b.tP, b.Ov, Ca],
  styles: ["#mainContainer.toolbar-hidden[_ngcontent-%COMP%]{margin-top:-30px}"],
  changeDetection: 0
});
Window.ngxConsoleFilter = (at, Je) => true;
class hs {
  log(Je) {
    if (Window.ngxConsoleFilter("log", Je)) {
      console.log(Je);
    }
  }
  error(Je) {
    if (Window.ngxConsoleFilter("error", Je)) {
      console.error(Je);
    }
  }
  warn(Je) {
    if (Window.ngxConsoleFilter("warn", Je)) {
      console.warn(Je);
    }
  }
}
function eo(at, Je, be) {
  return !at || at.some(Bt => function Vs(at, Je, be) {
    let Bt = 0;
    let an = 0;
    if ((at = at.toLowerCase()).includes("ctrl+")) {
      Bt |= 1;
      at = at.replace("ctrl+", "");
    }
    if (at.includes("cmd+")) {
      Bt |= 8;
      at = at.replace("cmd+", "");
    }
    if (at.includes("alt+")) {
      Bt |= 2;
      at = at.replace("alt+", "");
    }
    if (at.includes("shift+")) {
      Bt |= 4;
      at = at.replace("shift+", "");
    }
    if (at.includes("meta+")) {
      Bt |= 8;
      at = at.replace("meta+", "");
    }
    an = at === "up" ? 38 : at === "down" ? 40 : at === "+" || at === "\"+\"" ? 171 : at === "-" || at === "\"-\"" ? 173 : at === "esc" ? 27 : at === "enter" ? 13 : at === "space" ? 32 : at === "f4" ? 115 : at === "backspace" ? 8 : at === "home" ? 36 : at === "end" ? 35 : at === "left" ? 37 : at === "right" ? 39 : at === "pagedown" ? 34 : at === "pageup" ? 33 : at.toUpperCase().charCodeAt(0);
    if (be === "WHEEL") {
      return at === "wheel" && Je === Bt;
    } else {
      return an === be && Je === Bt;
    }
  }(Bt, Je, be));
}
Window.ngxConsole = new hs();
if (new Date().getTime() === 0) {
  new hs().log("");
}
if (!Promise.allSettled) {
  if (window.Zone && !window["__zone_symbol__Promise.allSettled"]) {
    console.error("Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version.");
  }
}
if (typeof window !== "undefined") {
  window.isKeyIgnored = function Rs(at, Je) {
    const be = window.PDFViewerApplicationOptions;
    const Bt = be.get("ignoreKeys");
    const an = be.get("acceptKeys");
    if (Je === "WHEEL") {
      return !!eo(Bt, at, "WHEEL") || !!an && an.length > 0 && !eo(an, at, "WHEEL");
    } else {
      return Je === 16 || Je === 17 || Je === 18 || Je === 224 || !!be.get("ignoreKeyboard") || !!Bt && Bt.length > 0 && !!eo(Bt, at, Je) || !!an && an.length > 0 && !eo(an, at, Je);
    }
  };
}
export let g3 = (() => {
  class at {}
  at.ɵfac = function (be) {
    return new (be || at)();
  };
  at.ɵmod = t.oAB({
    type: at
  });
  at.ɵinj = t.cJS({
    providers: [CG],
    imports: [[Za, b.ez, k.u5]]
  });
  return at;
})();