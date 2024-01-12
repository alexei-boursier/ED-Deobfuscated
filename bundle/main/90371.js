import * as i from "94650";
import * as t from "36895";
import * as b from "21607";
function k(q, j) {
  if (q & 1) {
    const G = i.EpF();
    i.TgZ(0, "li", 7);
    i.NdJ("click", function () {
      const Pe = i.CHM(G).index;
      const Le = i.oxw(2);
      return i.KtG(Le.selectSlide(Pe));
    });
    i.qZA();
  }
  if (q & 2) {
    i.ekj("active", j.$implicit.active === true);
  }
}
function M(q, j) {
  if (q & 1) {
    i.ynx(0);
    i.TgZ(1, "ol", 5);
    i.YNc(2, k, 1, 2, "li", 6);
    i.qZA();
    i.BQk();
  }
  if (q & 2) {
    const G = i.oxw();
    i.xp6(2);
    i.Q6J("ngForOf", G.indicatorsSlides());
  }
}
function v(q, j) {
  if (q & 1) {
    const G = i.EpF();
    i.TgZ(0, "button", 9);
    i.NdJ("click", function () {
      const Pe = i.CHM(G).index;
      const Le = i.oxw(2);
      return i.KtG(Le.selectSlide(Pe));
    });
    i.qZA();
  }
  if (q & 2) {
    const G = j.$implicit;
    const se = j.index;
    const W = i.oxw(2);
    i.ekj("active", G.active === true);
    i.uIk("data-bs-target", "#" + W.currentId)("data-bs-slide-to", se);
  }
}
function C(q, j) {
  if (q & 1) {
    i.ynx(0);
    i.TgZ(1, "div", 5);
    i.YNc(2, v, 1, 4, "button", 8);
    i.qZA();
    i.BQk();
  }
  if (q & 2) {
    const G = i.oxw();
    i.xp6(2);
    i.Q6J("ngForOf", G.indicatorsSlides());
  }
}
function w(q, j) {
  if (q & 1) {
    i.TgZ(0, "span", 13);
    i._uU(1, "Previous");
    i.qZA();
  }
}
function S(q, j) {
  if (q & 1) {
    const G = i.EpF();
    i.TgZ(0, "a", 10);
    i.NdJ("click", function () {
      i.CHM(G);
      const W = i.oxw();
      return i.KtG(W.previousSlide());
    });
    i._UZ(1, "span", 11);
    i.YNc(2, w, 2, 0, "span", 12);
    i.qZA();
  }
  if (q & 2) {
    const G = i.oxw();
    i.ekj("disabled", G.checkDisabledClass("prev"));
    i.uIk("data-bs-target", "#" + G.currentId);
    i.xp6(2);
    i.Q6J("ngIf", G.isBs4);
  }
}
function L(q, j) {
  if (q & 1) {
    const G = i.EpF();
    i.TgZ(0, "a", 14);
    i.NdJ("click", function () {
      i.CHM(G);
      const W = i.oxw();
      return i.KtG(W.nextSlide());
    });
    i._UZ(1, "span", 15);
    i.TgZ(2, "span", 13);
    i._uU(3, "Next");
    i.qZA()();
  }
  if (q & 2) {
    const G = i.oxw();
    i.ekj("disabled", G.checkDisabledClass("next"));
    i.uIk("data-bs-target", "#" + G.currentId);
  }
}
const I = function (q) {
  return {
    display: q
  };
};
const E = ["*"];
let O = (() => {
  class q {
    constructor() {
      this.interval = 5000;
      this.noPause = false;
      this.noWrap = false;
      this.showIndicators = true;
      this.pauseOnFocus = false;
      this.indicatorsByChunk = false;
      this.itemsPerSlide = 1;
      this.singleSlideOffset = false;
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)();
  };
  q.ɵprov = i.Yz7({
    token: q,
    factory: q.ɵfac,
    providedIn: "root"
  });
  return q;
})();
var F = (() => {
  (q = F ||= {})[q.UNKNOWN = 0] = "UNKNOWN";
  q[q.NEXT = 1] = "NEXT";
  q[q.PREV = 2] = "PREV";
  return F;
  var q;
})();
let Z = 1;
export let Fy = (() => {
  class q {
    constructor(G, se, W) {
      this.ngZone = se;
      this.platformId = W;
      this.noWrap = false;
      this.noPause = false;
      this.showIndicators = true;
      this.pauseOnFocus = false;
      this.indicatorsByChunk = false;
      this.itemsPerSlide = 1;
      this.singleSlideOffset = false;
      this.isAnimated = false;
      this.activeSlideChange = new i.vpe(false);
      this.slideRangeChange = new i.vpe();
      this.startFromIndex = 0;
      this._interval = 5000;
      this._slides = new b.Su();
      this._currentVisibleSlidesIndex = 0;
      this.isPlaying = false;
      this.destroyed = false;
      this.currentId = 0;
      this.getActive = Pe => Pe.active;
      this.makeSlidesConsistent = Pe => {
        Pe.forEach((Le, he) => Le.item.order = he);
      };
      Object.assign(this, G);
      this.currentId = Z++;
    }
    set activeSlide(G) {
      if (!this.multilist) {
        if (function B(q) {
          return typeof q == "number" || Object.prototype.toString.call(q) === "[object Number]";
        }(G)) {
          this.customActiveSlide = G;
        }
        if (this._slides.length && G !== this._currentActiveSlide) {
          this._select(G);
        }
      }
    }
    get activeSlide() {
      return this._currentActiveSlide || 0;
    }
    get interval() {
      return this._interval;
    }
    set interval(G) {
      this._interval = G;
      this.restartTimer();
    }
    get slides() {
      return this._slides.toArray();
    }
    get isFirstSlideVisible() {
      const G = this.getVisibleIndexes();
      return !!G && (!(G instanceof Array) || !!G.length) && G.includes(0);
    }
    get isLastSlideVisible() {
      const G = this.getVisibleIndexes();
      return !!G && (!(G instanceof Array) || !!G.length) && G.includes(this._slides.length - 1);
    }
    get isBs4() {
      return !(0, b.XA)();
    }
    get _bsVer() {
      return (0, b.Wl)();
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (this.singleSlideOffset) {
          this.indicatorsByChunk = false;
        }
        if (this.multilist) {
          this._chunkedSlides = function U(q, j) {
            const G = [];
            const se = Math.ceil(q.length / j);
            let W = 0;
            for (; W < se;) {
              const Pe = q.splice(0, W === se - 1 && j < q.length ? q.length : j);
              G.push(Pe);
              W++;
            }
            return G;
          }(this.mapSlidesAndIndexes(), this.itemsPerSlide);
          this.selectInitialSlides();
        }
        if (this.customActiveSlide && !this.multilist) {
          this._select(this.customActiveSlide);
        }
      }, 0);
    }
    ngOnDestroy() {
      this.destroyed = true;
    }
    addSlide(G) {
      this._slides.add(G);
      if (this.multilist && this._slides.length <= this.itemsPerSlide) {
        G.active = true;
      }
      if (!this.multilist && this.isAnimated) {
        G.isAnimated = true;
      }
      if (!this.multilist && this._slides.length === 1) {
        this._currentActiveSlide = undefined;
        if (!this.customActiveSlide) {
          this.activeSlide = 0;
        }
        this.play();
      }
      if (this.multilist && this._slides.length > this.itemsPerSlide) {
        this.play();
      }
    }
    removeSlide(G) {
      const se = this._slides.indexOf(G);
      if (this._currentActiveSlide === se) {
        let W;
        if (this._slides.length > 1) {
          W = this.isLast(se) ? this.noWrap ? se - 1 : 0 : se;
        }
        this._slides.remove(se);
        setTimeout(() => {
          this._select(W);
        }, 0);
      } else {
        this._slides.remove(se);
        const W = this.getCurrentSlideIndex();
        setTimeout(() => {
          this._currentActiveSlide = W;
          this.activeSlideChange.emit(this._currentActiveSlide);
        }, 0);
      }
    }
    nextSlideFromInterval(G = false) {
      this.move(F.NEXT, G);
    }
    nextSlide(G = false) {
      if (this.isPlaying) {
        this.restartTimer();
      }
      this.move(F.NEXT, G);
    }
    previousSlide(G = false) {
      if (this.isPlaying) {
        this.restartTimer();
      }
      this.move(F.PREV, G);
    }
    getFirstVisibleIndex() {
      return this.slides.findIndex(this.getActive);
    }
    getLastVisibleIndex() {
      return function x(q, j) {
        let G = q.length;
        for (; G--;) {
          if (j(q[G], G, q)) {
            return G;
          }
        }
        return -1;
      }(this.slides, this.getActive);
    }
    move(G, se = false) {
      const W = this.getFirstVisibleIndex();
      const Pe = this.getLastVisibleIndex();
      if (!this.noWrap || (G !== F.NEXT || !this.isLast(Pe)) && (G !== F.PREV || W !== 0)) {
        if (this.multilist) {
          this.moveMultilist(G);
        } else {
          this.activeSlide = this.findNextSlideIndex(G, se) || 0;
        }
      }
    }
    keydownPress(G) {
      if (G.keyCode === 13 || G.key === "Enter" || G.keyCode === 32 || G.key === "Space") {
        this.nextSlide();
        G.preventDefault();
        return;
      }
      if (G.keyCode !== 37 && G.key !== "LeftArrow") {
        if (G.keyCode === 39 || G.key === "RightArrow") {
          this.nextSlide();
        }
      } else {
        this.previousSlide();
      }
    }
    onMouseLeave() {
      if (!this.pauseOnFocus) {
        this.play();
      }
    }
    onMouseUp() {
      if (!this.pauseOnFocus) {
        this.play();
      }
    }
    pauseFocusIn() {
      if (this.pauseOnFocus) {
        this.isPlaying = false;
        this.resetTimer();
      }
    }
    pauseFocusOut() {
      this.play();
    }
    selectSlide(G) {
      if (this.isPlaying) {
        this.restartTimer();
      }
      if (this.multilist) {
        this.selectSlideRange(this.indicatorsByChunk ? G * this.itemsPerSlide : G);
      } else {
        this.activeSlide = this.indicatorsByChunk ? G * this.itemsPerSlide : G;
      }
    }
    play() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.restartTimer();
      }
    }
    pause() {
      if (!this.noPause) {
        this.isPlaying = false;
        this.resetTimer();
      }
    }
    getCurrentSlideIndex() {
      return this._slides.findIndex(this.getActive);
    }
    isLast(G) {
      return G + 1 >= this._slides.length;
    }
    isFirst(G) {
      return G === 0;
    }
    indicatorsSlides() {
      return this.slides.filter((G, se) => !this.indicatorsByChunk || se % this.itemsPerSlide == 0);
    }
    selectInitialSlides() {
      const G = this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
      this.hideSlides();
      if (this.singleSlideOffset) {
        this._slidesWithIndexes = this.mapSlidesAndIndexes();
        if (this._slides.length - G < this.itemsPerSlide) {
          const se = this._slidesWithIndexes.slice(0, G);
          this._slidesWithIndexes = [...this._slidesWithIndexes, ...se].slice(se.length).slice(0, this.itemsPerSlide);
        } else {
          this._slidesWithIndexes = this._slidesWithIndexes.slice(G, G + this.itemsPerSlide);
        }
        this._slidesWithIndexes.forEach(se => se.item.active = true);
        this.makeSlidesConsistent(this._slidesWithIndexes);
      } else {
        this.selectRangeByNestedIndex(G);
      }
      this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    findNextSlideIndex(G, se) {
      let W = 0;
      if (se || !this.isLast(this.activeSlide) || G === F.PREV || !this.noWrap) {
        switch (G) {
          case F.NEXT:
            if (typeof this._currentActiveSlide === "undefined") {
              W = 0;
              break;
            }
            if (!this.isLast(this._currentActiveSlide)) {
              W = this._currentActiveSlide + 1;
              break;
            }
            W = !se && this.noWrap ? this._currentActiveSlide : 0;
            break;
          case F.PREV:
            if (typeof this._currentActiveSlide === "undefined") {
              W = 0;
              break;
            }
            if (this._currentActiveSlide > 0) {
              W = this._currentActiveSlide - 1;
              break;
            }
            if (!se && this.noWrap) {
              W = this._currentActiveSlide;
              break;
            }
            W = this._slides.length - 1;
            break;
          default:
            throw new Error("Unknown direction");
        }
        return W;
      }
    }
    mapSlidesAndIndexes() {
      return this.slides.slice().map((G, se) => ({
        index: se,
        item: G
      }));
    }
    selectSlideRange(G) {
      if (!this.isIndexInRange(G)) {
        this.hideSlides();
        if (this.singleSlideOffset) {
          const se = this.isIndexOnTheEdges(G) ? G : G - this.itemsPerSlide + 1;
          const W = this.isIndexOnTheEdges(G) ? G + this.itemsPerSlide : G + 1;
          this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(se, W);
          this.makeSlidesConsistent(this._slidesWithIndexes);
          this._slidesWithIndexes.forEach(Pe => Pe.item.active = true);
        } else {
          this.selectRangeByNestedIndex(G);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
      }
    }
    selectRangeByNestedIndex(G) {
      if (!this._chunkedSlides) {
        return;
      }
      const se = this._chunkedSlides.map((W, Pe) => ({
        index: Pe,
        list: W
      })).find(W => W.list.find(Pe => Pe.index === G) !== undefined);
      if (!!se) {
        this._currentVisibleSlidesIndex = se.index;
        this._chunkedSlides[se.index].forEach(W => {
          W.item.active = true;
        });
      }
    }
    isIndexOnTheEdges(G) {
      return G + 1 - this.itemsPerSlide <= 0 || G + this.itemsPerSlide <= this._slides.length;
    }
    isIndexInRange(G) {
      if (this.singleSlideOffset && this._slidesWithIndexes) {
        return this._slidesWithIndexes.map(W => W.index).indexOf(G) >= 0;
      } else {
        return G <= this.getLastVisibleIndex() && G >= this.getFirstVisibleIndex();
      }
    }
    hideSlides() {
      this.slides.forEach(G => G.active = false);
    }
    isVisibleSlideListLast() {
      return !!this._chunkedSlides && this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    isVisibleSlideListFirst() {
      return this._currentVisibleSlidesIndex === 0;
    }
    moveSliderByOneItem(G) {
      let se;
      let W;
      let Pe;
      let Le;
      let he;
      if (this.noWrap) {
        se = this.getFirstVisibleIndex();
        W = this.getLastVisibleIndex();
        Pe = G === F.NEXT ? se : W;
        Le = G !== F.NEXT ? se - 1 : this.isLast(W) ? 0 : W + 1;
        const pe = this._slides.get(Pe);
        if (pe) {
          pe.active = false;
        }
        const re = this._slides.get(Le);
        if (re) {
          re.active = true;
        }
        const Re = this.mapSlidesAndIndexes().filter(Ge => Ge.item.active);
        this.makeSlidesConsistent(Re);
        if (this.singleSlideOffset) {
          this._slidesWithIndexes = Re;
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
        return;
      }
      if (this._slidesWithIndexes && this._slidesWithIndexes[0]) {
        se = this._slidesWithIndexes[0].index;
        W = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
        if (G === F.NEXT) {
          this._slidesWithIndexes.shift();
          he = this.isLast(W) ? 0 : W + 1;
          const pe = this._slides.get(he);
          if (pe) {
            this._slidesWithIndexes.push({
              index: he,
              item: pe
            });
          }
        } else {
          this._slidesWithIndexes.pop();
          he = this.isFirst(se) ? this._slides.length - 1 : se - 1;
          const pe = this._slides.get(he);
          if (pe) {
            this._slidesWithIndexes = [{
              index: he,
              item: pe
            }, ...this._slidesWithIndexes];
          }
        }
        this.hideSlides();
        this._slidesWithIndexes.forEach(pe => pe.item.active = true);
        this.makeSlidesConsistent(this._slidesWithIndexes);
        this.slideRangeChange.emit(this._slidesWithIndexes.map(pe => pe.index));
      }
    }
    moveMultilist(G) {
      if (this.singleSlideOffset) {
        this.moveSliderByOneItem(G);
      } else {
        this.hideSlides();
        this._currentVisibleSlidesIndex = this.noWrap ? G === F.NEXT ? this._currentVisibleSlidesIndex + 1 : this._currentVisibleSlidesIndex - 1 : G === F.NEXT ? this.isVisibleSlideListLast() ? 0 : this._currentVisibleSlidesIndex + 1 : this.isVisibleSlideListFirst() ? this._chunkedSlides ? this._chunkedSlides.length - 1 : 0 : this._currentVisibleSlidesIndex - 1;
        if (this._chunkedSlides) {
          this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(se => se.item.active = true);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
      }
    }
    getVisibleIndexes() {
      if (!this.singleSlideOffset && this._chunkedSlides) {
        return this._chunkedSlides[this._currentVisibleSlidesIndex].map(G => G.index);
      } else if (this._slidesWithIndexes) {
        return this._slidesWithIndexes.map(G => G.index);
      } else {
        return undefined;
      }
    }
    _select(G) {
      if (isNaN(G)) {
        this.pause();
        return;
      }
      if (!this.multilist && typeof this._currentActiveSlide !== "undefined") {
        const W = this._slides.get(this._currentActiveSlide);
        if (typeof W !== "undefined") {
          W.active = false;
        }
      }
      const se = this._slides.get(G);
      if (typeof se !== "undefined") {
        this._currentActiveSlide = G;
        se.active = true;
        this.activeSlide = G;
        this.activeSlideChange.emit(G);
      }
    }
    restartTimer() {
      this.resetTimer();
      const G = +this.interval;
      if (!isNaN(G) && G > 0 && (0, t.NF)(this.platformId)) {
        this.currentInterval = this.ngZone.runOutsideAngular(() => window.setInterval(() => {
          const se = +this.interval;
          this.ngZone.run(() => {
            if (this.isPlaying && !isNaN(this.interval) && se > 0 && this.slides.length) {
              this.nextSlideFromInterval();
            } else {
              this.pause();
            }
          });
        }, G));
      }
    }
    get multilist() {
      return this.itemsPerSlide > 1;
    }
    resetTimer() {
      if (this.currentInterval) {
        clearInterval(this.currentInterval);
        this.currentInterval = undefined;
      }
    }
    checkDisabledClass(G) {
      if (G === "prev") {
        return this.activeSlide === 0 && this.noWrap && !this.multilist || this.isFirstSlideVisible && this.noWrap && this.multilist;
      } else {
        return this.isLast(this.activeSlide) && this.noWrap && !this.multilist || this.isLastSlideVisible && this.noWrap && this.multilist;
      }
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)(i.Y36(O), i.Y36(i.R0b), i.Y36(i.Lbi));
  };
  q.ɵcmp = i.Xpm({
    type: q,
    selectors: [["carousel"]],
    inputs: {
      noWrap: "noWrap",
      noPause: "noPause",
      showIndicators: "showIndicators",
      pauseOnFocus: "pauseOnFocus",
      indicatorsByChunk: "indicatorsByChunk",
      itemsPerSlide: "itemsPerSlide",
      singleSlideOffset: "singleSlideOffset",
      isAnimated: "isAnimated",
      activeSlide: "activeSlide",
      startFromIndex: "startFromIndex",
      interval: "interval"
    },
    outputs: {
      activeSlideChange: "activeSlideChange",
      slideRangeChange: "slideRangeChange"
    },
    ngContentSelectors: E,
    decls: 7,
    vars: 8,
    consts: [["tabindex", "0", 1, "carousel", "slide", 3, "id", "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], [4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", "aria-current", "true", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-current", "true", 3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only visually-hidden", 4, "ngIf"], [1, "sr-only", "visually-hidden"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]],
    template: function (G, se) {
      if (G & 1) {
        i.F$t();
        i.TgZ(0, "div", 0);
        i.NdJ("mouseenter", function () {
          return se.pause();
        })("mouseleave", function () {
          return se.onMouseLeave();
        })("mouseup", function () {
          return se.onMouseUp();
        })("keydown", function (Pe) {
          return se.keydownPress(Pe);
        })("focusin", function () {
          return se.pauseFocusIn();
        })("focusout", function () {
          return se.pauseFocusOut();
        });
        i.YNc(1, M, 3, 1, "ng-container", 1);
        i.YNc(2, C, 3, 1, "ng-container", 1);
        i.TgZ(3, "div", 2);
        i.Hsn(4);
        i.qZA();
        i.YNc(5, S, 3, 4, "a", 3);
        i.YNc(6, L, 4, 3, "a", 4);
        i.qZA();
      }
      if (G & 2) {
        i.Q6J("id", se.currentId);
        i.xp6(1);
        i.Q6J("ngIf", !se._bsVer.isBs5 && se.showIndicators && se.slides.length > 1);
        i.xp6(1);
        i.Q6J("ngIf", se._bsVer.isBs5 && se.showIndicators && se.slides.length > 1);
        i.xp6(1);
        i.Q6J("ngStyle", i.VKq(6, I, se.multilist ? "flex" : "block"));
        i.xp6(2);
        i.Q6J("ngIf", se.slides.length > 1);
        i.xp6(1);
        i.Q6J("ngIf", se.slides.length > 1);
      }
    },
    dependencies: [t.sg, t.O5, t.PC],
    encapsulation: 2
  });
  return q;
})();
export let o6 = (() => {
  class q {
    constructor(G) {
      this.active = false;
      this.itemWidth = "100%";
      this.order = 0;
      this.isAnimated = false;
      this.addClass = true;
      this.multilist = false;
      this.carousel = G;
    }
    ngOnInit() {
      this.carousel.addSlide(this);
      this.itemWidth = 100 / this.carousel.itemsPerSlide + "%";
      this.multilist = this.carousel?.itemsPerSlide > 1;
    }
    ngOnDestroy() {
      this.carousel.removeSlide(this);
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)(i.Y36(Fy));
  };
  q.ɵcmp = i.Xpm({
    type: q,
    selectors: [["slide"]],
    hostVars: 15,
    hostBindings: function (G, se) {
      if (G & 2) {
        i.uIk("aria-hidden", !se.active);
        i.Udp("width", se.itemWidth)("order", se.order);
        i.ekj("multilist-margin", se.multilist)("active", se.active)("carousel-animation", se.isAnimated)("item", se.addClass)("carousel-item", se.addClass);
      }
    },
    inputs: {
      active: "active"
    },
    ngContentSelectors: E,
    decls: 2,
    vars: 2,
    consts: [[1, "item"]],
    template: function (G, se) {
      if (G & 1) {
        i.F$t();
        i.TgZ(0, "div", 0);
        i.Hsn(1);
        i.qZA();
      }
      if (G & 2) {
        i.ekj("active", se.active);
      }
    },
    styles: [".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"]
  });
  return q;
})();
export let bB = (() => {
  class q {
    static forRoot() {
      return {
        ngModule: q,
        providers: []
      };
    }
  }
  q.ɵfac = function (G) {
    return new (G || q)();
  };
  q.ɵmod = i.oAB({
    type: q
  });
  q.ɵinj = i.cJS({
    imports: [t.ez]
  });
  return q;
})();