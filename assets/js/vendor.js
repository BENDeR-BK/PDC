"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function (e, n, t) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function s() {
    var e, n, t, s, a, i, r;

    for (var l in c) {
      if (c.hasOwnProperty(l)) {
        if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }

        for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        t = Modernizr._config.classPrefix || "";

    if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n);
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function r() {
    var e = n.body;
    return e || (e = i(p ? "svg" : "body"), e.fake = !0), e;
  }

  function l(e, t, o, s) {
    var a,
        l,
        f,
        c,
        d = "modernizr",
        p = i("div"),
        h = r();
    if (parseInt(o, 10)) for (; o--;) {
      f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
    }
    return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l;
  }

  var f = [],
      c = [],
      d = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      c.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      c.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = d, Modernizr = new Modernizr();
  var u = n.documentElement,
      p = "svg" === u.nodeName.toLowerCase(),
      h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  d._prefixes = h;
  var m = d.testStyles = l;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;else {
      var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      m(o, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }), s(), a(f), delete d.addTest, delete d.addAsyncTest;

  for (var v = 0; v < Modernizr._q.length; v++) {
    Modernizr._q[v]();
  }

  e.Modernizr = Modernizr;
}(window, document);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap util.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) : typeof define === 'function' && define.amd ? define(['jquery'], factory) : (global = global || self, global.Util = factory(global.jQuery));
})(void 0, function ($) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();
  return Util;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap modal.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) : typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) : (global = global || self, global.Modal = factory(global.jQuery, global.Util));
})(void 0, function ($, Util) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME = 'modal';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);
      $(this._element).removeClass(ClassName.SHOW);
      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event.FOCUSIN);
      $.removeData(this._element, DATA_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName.SCROLLABLE)) {
        this._dialog.querySelector(Selector.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _objectSpread({}, Default, $(this).data(), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
});
"use strict";

;

(function (window, document, $, undefined) {
  'use strict';

  if (!$) {
    return;
  }

  if ($.fn.fancybox) {
    $.error('fancyBox already initialized');
    return;
  }

  var defaults = {
    loop: false,
    margin: [44, 0],
    gutter: 50,
    keyboard: true,
    arrows: true,
    infobar: false,
    toolbar: true,
    buttons: ['slideShow', 'fullScreen', 'thumbs', 'close'],
    idleTime: 4,
    smallBtn: 'auto',
    protect: false,
    modal: false,
    image: {
      preload: "auto"
    },
    ajax: {
      settings: {
        data: {
          fancybox: true
        }
      }
    },
    iframe: {
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
      preload: true,
      css: {},
      attr: {
        scrolling: 'auto'
      }
    },
    animationEffect: "zoom",
    animationDuration: 366,
    zoomOpacity: 'auto',
    transitionEffect: "fade",
    transitionDuration: 366,
    slideClass: '',
    baseClass: '',
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar">' + '<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' + '<div class="fancybox-infobar__body">' + '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' + '</div>' + '<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' + '</div>' + '<div class="fancybox-toolbar">' + '{{BUTTONS}}' + '</div>' + '<div class="fancybox-navigation">' + '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' + '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' + '</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption-wrap">' + '<div class="fancybox-caption"></div>' + '</div>' + '</div>' + '</div>',
    spinnerTpl: '<div class="fancybox-loading"></div>',
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
      fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
      smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
    },
    parentEl: 'body',
    autoFocus: true,
    backFocus: true,
    trapFocus: true,
    fullScreen: {
      autoStart: false
    },
    touch: {
      vertical: true,
      momentum: true
    },
    hash: null,
    media: {},
    slideShow: {
      autoStart: false,
      speed: 4000
    },
    thumbs: {
      autoStart: false,
      hideOnClose: true
    },
    onInit: $.noop,
    beforeLoad: $.noop,
    afterLoad: $.noop,
    beforeShow: $.noop,
    afterShow: $.noop,
    beforeClose: $.noop,
    afterClose: $.noop,
    onActivate: $.noop,
    onDeactivate: $.noop,
    clickContent: function clickContent(current, event) {
      return current.type === 'image' ? 'zoom' : false;
    },
    clickSlide: 'close',
    clickOutside: 'close',
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,
    mobile: {
      clickContent: function clickContent(current, event) {
        return current.type === 'image' ? 'toggleControls' : false;
      },
      clickSlide: function clickSlide(current, event) {
        return current.type === 'image' ? 'toggleControls' : "close";
      },
      dblclickContent: function dblclickContent(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
      dblclickSlide: function dblclickSlide(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      }
    },
    lang: 'en',
    i18n: {
      'en': {
        CLOSE: 'Close',
        NEXT: 'Next',
        PREV: 'Previous',
        ERROR: 'The requested content cannot be loaded. <br/> Please try again later.',
        PLAY_START: 'Start slideshow',
        PLAY_STOP: 'Pause slideshow',
        FULL_SCREEN: 'Full screen',
        THUMBS: 'Thumbnails'
      },
      'de': {
        CLOSE: 'Schliessen',
        NEXT: 'Weiter',
        PREV: 'Zurück',
        ERROR: 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
        PLAY_START: 'Diaschau starten',
        PLAY_STOP: 'Diaschau beenden',
        FULL_SCREEN: 'Vollbild',
        THUMBS: 'Vorschaubilder'
      }
    }
  };
  var $W = $(window);
  var $D = $(document);
  var called = 0;

  var isQuery = function isQuery(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();

  var transitionEnd = function () {
    var t,
        el = document.createElement("fakeelement");
    var transitions = {
      "transition": "transitionend",
      "OTransition": "oTransitionEnd",
      "MozTransition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }();

  var forceRedraw = function forceRedraw($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  var FancyBox = function FancyBox(content, opts, index) {
    var self = this;
    self.opts = $.extend(true, {
      index: index
    }, defaults, opts || {});

    if (opts && $.isArray(opts.buttons)) {
      self.opts.buttons = opts.buttons;
    }

    self.id = self.opts.id || ++called;
    self.group = [];
    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;
    self.prevPos = null;
    self.currPos = 0;
    self.firstRun = null;
    self.createGroup(content);

    if (!self.group.length) {
      return;
    }

    self.$lastFocus = $(document.activeElement).blur();
    self.slides = {};
    self.init(content);
  };

  $.extend(FancyBox.prototype, {
    init: function init() {
      var self = this;
      var testWidth, $container, buttonStr;
      var firstItemOpts = self.group[self.currIndex].opts;
      self.scrollTop = $D.scrollTop();
      self.scrollLeft = $D.scrollLeft();

      if (!$.fancybox.getInstance() && !$.fancybox.isMobile && $('body').css('overflow') !== 'hidden') {
        testWidth = $('body').width();
        $('html').addClass('fancybox-enabled');
        testWidth = $('body').width() - testWidth;

        if (testWidth > 1) {
          $('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + testWidth + 'px; }</style>');
        }
      }

      buttonStr = '';
      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || '';
      });
      $container = $(self.translate(self, firstItemOpts.baseTpl.replace('\{\{BUTTONS\}\}', buttonStr))).addClass('fancybox-is-hidden').attr('id', 'fancybox-container-' + self.id).addClass(firstItemOpts.baseClass).data('FancyBox', self).prependTo(firstItemOpts.parentEl);
      self.$refs = {
        container: $container
      };
      ['bg', 'inner', 'infobar', 'toolbar', 'stage', 'caption'].forEach(function (item) {
        self.$refs[item] = $container.find('.fancybox-' + item);
      });

      if (!firstItemOpts.arrows || self.group.length < 2) {
        $container.find('.fancybox-navigation').remove();
      }

      if (!firstItemOpts.infobar) {
        self.$refs.infobar.remove();
      }

      if (!firstItemOpts.toolbar) {
        self.$refs.toolbar.remove();
      }

      self.trigger('onInit');
      self.activate();
      self.jumpTo(self.currIndex);
    },
    translate: function translate(obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang];
      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        var value = arr[n];

        if (value === undefined) {
          return match;
        }

        return value;
      });
    },
    createGroup: function createGroup(content) {
      var self = this;
      var items = $.makeArray(content);
      $.each(items, function (i, item) {
        var obj = {},
            opts = {},
            data = [],
            $item,
            type,
            src,
            srcParts;

        if ($.isPlainObject(item)) {
          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === 'object' && $(item).length) {
          $item = $(item);
          data = $item.data();
          opts = 'options' in data ? data.options : {};
          opts = $.type(opts) === 'object' ? opts : {};
          obj.src = 'src' in data ? data.src : opts.src || $item.attr('href');
          ['width', 'height', 'thumb', 'type', 'filter'].forEach(function (item) {
            if (item in data) {
              opts[item] = data[item];
            }
          });

          if ('srcset' in data) {
            opts.image = {
              srcset: data.srcset
            };
          }

          opts.$orig = $item;

          if (!obj.type && !obj.src) {
            obj.type = 'inline';
            obj.src = item;
          }
        } else {
          obj = {
            type: 'html',
            src: item + ''
          };
        }

        obj.opts = $.extend(true, {}, self.opts, opts);

        if ($.fancybox.isMobile) {
          obj.opts = $.extend(true, {}, obj.opts, obj.opts.mobile);
        }

        type = obj.type || obj.opts.type;
        src = obj.src || '';

        if (!type && src) {
          if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = 'image';
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = 'pdf';
          } else if (src.charAt(0) === '#') {
            type = 'inline';
          }
        }

        obj.type = type;
        obj.index = self.group.length;

        if (obj.opts.$orig && !obj.opts.$orig.length) {
          delete obj.opts.$orig;
        }

        if (!obj.opts.$thumb && obj.opts.$orig) {
          obj.opts.$thumb = obj.opts.$orig.find('img:first');
        }

        if (obj.opts.$thumb && !obj.opts.$thumb.length) {
          delete obj.opts.$thumb;
        }

        if ($.type(obj.opts.caption) === 'function') {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        } else if ('caption' in data) {
          obj.opts.caption = data.caption;
        }

        obj.opts.caption = obj.opts.caption === undefined ? '' : obj.opts.caption + '';

        if (type === 'ajax') {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();
            obj.opts.filter = srcParts.shift();
          }
        }

        if (obj.opts.smallBtn == 'auto') {
          if ($.inArray(type, ['html', 'inline', 'ajax']) > -1) {
            obj.opts.toolbar = false;
            obj.opts.smallBtn = true;
          } else {
            obj.opts.smallBtn = false;
          }
        }

        if (type === 'pdf') {
          obj.type = 'iframe';
          obj.opts.iframe.preload = false;
        }

        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        self.group.push(obj);
      });
    },
    addEvents: function addEvents() {
      var self = this;
      self.removeEvents();
      self.$refs.container.on('click.fb-close', '[data-fancybox-close]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.close(e);
      }).on('click.fb-prev touchend.fb-prev', '[data-fancybox-prev]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.previous();
      }).on('click.fb-next touchend.fb-next', '[data-fancybox-next]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.next();
      });
      $W.on('orientationchange.fb resize.fb', function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          requestAFrame(function () {
            self.update();
          });
        } else {
          self.$refs.stage.hide();
          setTimeout(function () {
            self.$refs.stage.show();
            self.update();
          }, 500);
        }
      });
      $D.on('focusin.fb', function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null;

        if (instance.isClosing || !instance.current || !instance.current.opts.trapFocus || $(e.target).hasClass('fancybox-container') || $(e.target).is(document)) {
          return;
        }

        if (instance && $(e.target).css('position') !== 'fixed' && !instance.$refs.container.has(e.target).length) {
          e.stopPropagation();
          instance.focus();
          $W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);
        }
      });
      $D.on('keydown.fb', function (e) {
        var current = self.current,
            keycode = e.keyCode || e.which;

        if (!current || !current.opts.keyboard) {
          return;
        }

        if ($(e.target).is('input') || $(e.target).is('textarea')) {
          return;
        }

        if (keycode === 8 || keycode === 27) {
          e.preventDefault();
          self.close(e);
          return;
        }

        if (keycode === 37 || keycode === 38) {
          e.preventDefault();
          self.previous();
          return;
        }

        if (keycode === 39 || keycode === 40) {
          e.preventDefault();
          self.next();
          return;
        }

        self.trigger('afterKeydown', e, keycode);
      });

      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;
        $D.on('mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle', function () {
          self.idleSecondsCounter = 0;

          if (self.isIdle) {
            self.showControls();
          }

          self.isIdle = false;
        });
        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;
            self.hideControls();
          }
        }, 1000);
      }
    },
    removeEvents: function removeEvents() {
      var self = this;
      $W.off('orientationchange.fb resize.fb');
      $D.off('focusin.fb keydown.fb .fb-idle');
      this.$refs.container.off('.fb-close .fb-prev .fb-next');

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);
        self.idleInterval = null;
      }
    },
    previous: function previous(duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },
    next: function next(duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },
    jumpTo: function jumpTo(pos, duration, slide) {
      var self = this,
          firstRun,
          loop,
          current,
          previous,
          canvasWidth,
          currentPos,
          transitionProps;
      var groupLen = self.group.length;

      if (self.isSliding || self.isClosing || self.isAnimating && self.firstRun) {
        return;
      }

      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      firstRun = self.firstRun = self.firstRun === null;

      if (groupLen < 2 && !firstRun && !!self.isSliding) {
        return;
      }

      previous = self.current;
      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;
      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }

        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;
      self.trigger('beforeShow', firstRun);
      self.updateControls();
      currentPos = $.fancybox.getTranslate(current.$slide);
      current.isMoved = (currentPos.left !== 0 || currentPos.top !== 0) && !current.$slide.hasClass('fancybox-animated');
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? 'animationDuration' : 'transitionDuration'];
      }

      duration = parseInt(duration, 10);

      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css('transition-duration', duration + 'ms');
        }

        self.$refs.container.removeClass('fancybox-is-hidden');
        forceRedraw(self.$refs.container);
        self.$refs.container.addClass('fancybox-is-open');
        current.$slide.addClass('fancybox-slide--current');
        self.loadSlide(current);
        self.preload();
        return;
      }

      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide);
      });
      current.$slide.removeClass('fancybox-slide--next fancybox-slide--previous').addClass('fancybox-slide--current');

      if (current.isMoved) {
        canvasWidth = Math.round(current.$slide.width());
        $.each(self.slides, function (index, slide) {
          var pos = slide.pos - current.pos;
          $.fancybox.animate(slide.$slide, {
            top: 0,
            left: pos * canvasWidth + pos * slide.opts.gutter
          }, duration, function () {
            slide.$slide.removeAttr('style').removeClass('fancybox-slide--next fancybox-slide--previous');

            if (slide.pos === self.currPos) {
              current.isMoved = false;
              self.complete();
            }
          });
        });
      } else {
        self.$refs.stage.children().removeAttr('style');
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload();

      if (previous.pos === current.pos) {
        return;
      }

      transitionProps = 'fancybox-slide--' + (previous.pos > current.pos ? 'next' : 'previous');
      previous.$slide.removeClass('fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous');
      previous.isComplete = false;

      if (!duration || !current.isMoved && !current.opts.transitionEffect) {
        return;
      }

      if (current.isMoved) {
        previous.$slide.addClass(transitionProps);
      } else {
        transitionProps = 'fancybox-animated ' + transitionProps + ' fancybox-fx-' + current.opts.transitionEffect;
        $.fancybox.animate(previous.$slide, transitionProps, duration, function () {
          previous.$slide.removeClass(transitionProps).removeAttr('style');
        });
      }
    },
    createSlide: function createSlide(pos) {
      var self = this;
      var $slide;
      var index;
      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });
        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },
    scaleToActual: function scaleToActual(x, y, duration) {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var imgPos, posX, posY, scaleX, scaleY;
      var canvasWidth = parseInt(current.$slide.width(), 10);
      var canvasHeight = parseInt(current.$slide.height(), 10);
      var newImgWidth = current.width;
      var newImgHeight = current.height;

      if (!(current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
        return;
      }

      $.fancybox.stop($what);
      self.isAnimating = true;
      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;
      imgPos = $.fancybox.getTranslate($what);
      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);
      $.fancybox.animate($what, {
        top: posY,
        left: posX,
        scaleX: scaleX,
        scaleY: scaleY
      }, duration || 330, function () {
        self.isAnimating = false;
      });

      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },
    scaleToFit: function scaleToFit(duration) {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var end;

      if (!(current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
        return;
      }

      $.fancybox.stop($what);
      self.isAnimating = true;
      end = self.getFitPos(current);
      self.updateCursor(end.width, end.height);
      $.fancybox.animate($what, {
        top: end.top,
        left: end.left,
        scaleX: end.width / $what.width(),
        scaleY: end.height / $what.height()
      }, duration || 330, function () {
        self.isAnimating = false;
      });
    },
    getFitPos: function getFitPos(slide) {
      var self = this;
      var $what = slide.$content;
      var imgWidth = slide.width;
      var imgHeight = slide.height;
      var margin = slide.opts.margin;
      var canvasWidth, canvasHeight, minRatio, width, height;

      if (!$what || !$what.length || !imgWidth && !imgHeight) {
        return false;
      }

      if ($.type(margin) === "number") {
        margin = [margin, margin];
      }

      if (margin.length == 2) {
        margin = [margin[0], margin[1], margin[0], margin[1]];
      }

      if ($W.width() < 800) {
        margin = [0, 0, 0, 0];
      }

      canvasWidth = parseInt(self.$refs.stage.width(), 10) - (margin[1] + margin[3]);
      canvasHeight = parseInt(self.$refs.stage.height(), 10) - (margin[0] + margin[2]);
      minRatio = Math.min(1, canvasWidth / imgWidth, canvasHeight / imgHeight);
      width = Math.floor(minRatio * imgWidth);
      height = Math.floor(minRatio * imgHeight);
      return {
        top: Math.floor((canvasHeight - height) * 0.5) + margin[0],
        left: Math.floor((canvasWidth - width) * 0.5) + margin[3],
        width: width,
        height: height
      };
    },
    update: function update() {
      var self = this;
      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide);
      });
    },
    updateSlide: function updateSlide(slide) {
      var self = this;
      var $what = slide.$content;

      if ($what && (slide.width || slide.height)) {
        $.fancybox.stop($what);
        $.fancybox.setTranslate($what, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.updateCursor();
        }
      }

      slide.$slide.trigger('refresh');
      self.trigger('onUpdate', slide);
    },
    updateCursor: function updateCursor(nextWidth, nextHeight) {
      var self = this;
      var isScaledDown;
      var $container = self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');

      if (!self.current || self.isClosing) {
        return;
      }

      if (self.isZoomable()) {
        $container.addClass('fancybox-is-zoomable');

        if (nextWidth !== undefined && nextHeight !== undefined) {
          isScaledDown = nextWidth < self.current.width && nextHeight < self.current.height;
        } else {
          isScaledDown = self.isScaledDown();
        }

        if (isScaledDown) {
          $container.addClass('fancybox-can-zoomIn');
        } else {
          if (self.current.opts.touch) {
            $container.addClass('fancybox-can-drag');
          } else {
            $container.addClass('fancybox-can-zoomOut');
          }
        }
      } else if (self.current.opts.touch) {
        $container.addClass('fancybox-can-drag');
      }
    },
    isZoomable: function isZoomable() {
      var self = this;
      var current = self.current;
      var fitPos;

      if (!current || self.isClosing) {
        return;
      }

      if (current.type === 'image' && current.isLoaded && !current.hasError && (current.opts.clickContent === 'zoom' || $.isFunction(current.opts.clickContent) && current.opts.clickContent(current) === "zoom")) {
        fitPos = self.getFitPos(current);

        if (current.width > fitPos.width || current.height > fitPos.height) {
          return true;
        }
      }

      return false;
    },
    isScaledDown: function isScaledDown() {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var rez = false;

      if ($what) {
        rez = $.fancybox.getTranslate($what);
        rez = rez.width < current.width || rez.height < current.height;
      }

      return rez;
    },
    canPan: function canPan() {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var rez = false;

      if ($what) {
        rez = self.getFitPos(current);
        rez = Math.abs($what.width() - rez.width) > 1 || Math.abs($what.height() - rez.height) > 1;
      }

      return rez;
    },
    loadSlide: function loadSlide(slide) {
      var self = this,
          type,
          $slide;
      var ajaxLoad;

      if (slide.isLoading) {
        return;
      }

      if (slide.isLoaded) {
        return;
      }

      slide.isLoading = true;
      self.trigger('beforeLoad', slide);
      type = slide.type;
      $slide = slide.$slide;
      $slide.off('refresh').trigger('onReset').addClass('fancybox-slide--' + (type || 'unknown')).addClass(slide.opts.slideClass);

      switch (type) {
        case 'image':
          self.setImage(slide);
          break;

        case 'iframe':
          self.setIframe(slide);
          break;

        case 'html':
          self.setContent(slide, slide.src || slide.content);
          break;

        case 'inline':
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case 'ajax':
          self.showLoading(slide);
          ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
            url: slide.src,
            success: function success(data, textStatus) {
              if (textStatus === 'success') {
                self.setContent(slide, data);
              }
            },
            error: function error(jqXHR, textStatus) {
              if (jqXHR && textStatus !== 'abort') {
                self.setError(slide);
              }
            }
          }));
          $slide.one('onReset', function () {
            ajaxLoad.abort();
          });
          break;

        default:
          self.setError(slide);
          break;
      }

      return true;
    },
    setImage: function setImage(slide) {
      var self = this;
      var srcset = slide.opts.image.srcset;
      var found, temp, pxRatio, windowWidth;

      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;
        temp = srcset.split(',').map(function (el) {
          var ret = {};
          el.trim().split(/\s+/).forEach(function (el, i) {
            var value = parseInt(el.substring(0, el.length - 1), 10);

            if (i === 0) {
              return ret.url = el;
            }

            if (value) {
              ret.value = value;
              ret.postfix = el[el.length - 1];
            }
          });
          return ret;
        });
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if (el.postfix === 'w' && el.value >= windowWidth || el.postfix === 'x' && el.value >= pxRatio) {
            found = el;
            break;
          }
        }

        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          if (slide.width && slide.height && found.postfix == 'w') {
            slide.height = slide.width / slide.height * found.value;
            slide.width = found.value;
          }
        }
      }

      slide.$content = $('<div class="fancybox-image-wrap"></div>').addClass('fancybox-is-hidden').appendTo(slide.$slide);

      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && (slide.opts.thumb || slide.opts.$thumb)) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;
        slide.$ghost = $('<img />').one('error', function () {
          $(this).remove();
          slide.$ghost = null;
          self.setBigImage(slide);
        }).one('load', function () {
          self.afterLoad(slide);
          self.setBigImage(slide);
        }).addClass('fancybox-image').appendTo(slide.$content).attr('src', slide.opts.thumb || slide.opts.$thumb.attr('src'));
      } else {
        self.setBigImage(slide);
      }
    },
    setBigImage: function setBigImage(slide) {
      var self = this;
      var $img = $('<img />');
      slide.$image = $img.one('error', function () {
        self.setError(slide);
      }).one('load', function () {
        clearTimeout(slide.timouts);
        slide.timouts = null;

        if (self.isClosing) {
          return;
        }

        slide.width = this.naturalWidth;
        slide.height = this.naturalHeight;

        if (slide.opts.image.srcset) {
          $img.attr('sizes', '100vw').attr('srcset', slide.opts.image.srcset);
        }

        self.hideLoading(slide);

        if (slide.$ghost) {
          slide.timouts = setTimeout(function () {
            slide.timouts = null;
            slide.$ghost.hide();
          }, Math.min(300, Math.max(1000, slide.height / 1600)));
        } else {
          self.afterLoad(slide);
        }
      }).addClass('fancybox-image').attr('src', slide.src).appendTo(slide.$content);

      if ($img[0].complete) {
        $img.trigger('load');
      } else if ($img[0].error) {
        $img.trigger('error');
      } else {
        slide.timouts = setTimeout(function () {
          if (!$img[0].complete && !slide.hasError) {
            self.showLoading(slide);
          }
        }, 100);
      }
    },
    setIframe: function setIframe(slide) {
      var self = this,
          opts = slide.opts.iframe,
          $slide = slide.$slide,
          $iframe;
      slide.$content = $('<div class="fancybox-content' + (opts.preload ? ' fancybox-is-hidden' : '') + '"></div>').css(opts.css).appendTo($slide);
      $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(opts.attr).appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);
        $iframe.on('load.fb error.fb', function (e) {
          this.isReady = 1;
          slide.$slide.trigger('refresh');
          self.afterLoad(slide);
        });
        $slide.on('refresh.fb', function () {
          var $wrap = slide.$content,
              $contents,
              $body,
              scrollWidth,
              frameWidth,
              frameHeight;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find('body');
          } catch (ignore) {}

          if ($body && $body.length && !(opts.css.width !== undefined && opts.css.height !== undefined)) {
            scrollWidth = $iframe[0].contentWindow.document.documentElement.scrollWidth;
            frameWidth = Math.ceil($body.outerWidth(true) + ($wrap.width() - scrollWidth));
            frameHeight = Math.ceil($body.outerHeight(true));
            $wrap.css({
              'width': opts.css.width === undefined ? frameWidth + ($wrap.outerWidth() - $wrap.innerWidth()) : opts.css.width,
              'height': opts.css.height === undefined ? frameHeight + ($wrap.outerHeight() - $wrap.innerHeight()) : opts.css.height
            });
          }

          $wrap.removeClass('fancybox-is-hidden');
        });
      } else {
        this.afterLoad(slide);
      }

      $iframe.attr('src', slide.src);

      if (slide.opts.smallBtn === true) {
        slide.$content.prepend(self.translate(slide, slide.opts.btnTpl.smallBtn));
      }

      $slide.one('onReset', function () {
        try {
          $(this).find('iframe').hide().attr('src', '//about:blank');
        } catch (ignore) {}

        $(this).empty();
        slide.isLoaded = false;
      });
    },
    setContent: function setContent(slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);
      slide.$slide.empty();

      if (isQuery(content) && content.parent().length) {
        content.parent('.fancybox-slide--inline').trigger('onReset');
        slide.$placeholder = $('<div></div>').hide().insertAfter(content);
        content.css('display', 'inline-block');
      } else if (!slide.hasError) {
        if ($.type(content) === 'string') {
          content = $('<div>').append($.trim(content)).contents();

          if (content[0].nodeType === 3) {
            content = $('<div>').html(content);
          }
        }

        if (slide.opts.filter) {
          content = $('<div>').html(content).find(slide.opts.filter);
        }
      }

      slide.$slide.one('onReset', function () {
        if (slide.$placeholder) {
          slide.$placeholder.after(content.hide()).remove();
          slide.$placeholder = null;
        }

        if (slide.$smallBtn) {
          slide.$smallBtn.remove();
          slide.$smallBtn = null;
        }

        if (!slide.hasError) {
          $(this).empty();
          slide.isLoaded = false;
        }
      });
      slide.$content = $(content).appendTo(slide.$slide);

      if (slide.opts.smallBtn && !slide.$smallBtn) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      this.afterLoad(slide);
    },
    setError: function setError(slide) {
      slide.hasError = true;
      slide.$slide.removeClass('fancybox-slide--' + slide.type);
      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
    },
    showLoading: function showLoading(slide) {
      var self = this;
      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.opts.spinnerTpl).appendTo(slide.$slide);
      }
    },
    hideLoading: function hideLoading(slide) {
      var self = this;
      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.remove();
        delete slide.$spinner;
      }
    },
    afterLoad: function afterLoad(slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;
      self.trigger('afterLoad', slide);
      self.hideLoading(slide);

      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on('contextmenu.fb', function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        if (slide.type === 'image') {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.revealContent(slide);
    },
    revealContent: function revealContent(slide) {
      var self = this;
      var $slide = slide.$slide;
      var effect,
          effectClassName,
          duration,
          opacity,
          end,
          start = false;
      effect = slide.opts[self.firstRun ? 'animationEffect' : 'transitionEffect'];
      duration = slide.opts[self.firstRun ? 'animationDuration' : 'transitionDuration'];
      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (slide.isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      if (effect === 'zoom' && !(slide.pos === self.currPos && duration && slide.type === 'image' && !slide.hasError && (start = self.getThumbPos(slide)))) {
        effect = 'fade';
      }

      if (effect === 'zoom') {
        end = self.getFitPos(slide);
        end.scaleX = Math.round(end.width / start.width * 100) / 100;
        end.scaleY = Math.round(end.height / start.height * 100) / 100;
        delete end.width;
        delete end.height;
        opacity = slide.opts.zoomOpacity;

        if (opacity == 'auto') {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        $.fancybox.setTranslate(slide.$content.removeClass('fancybox-is-hidden'), start);
        forceRedraw(slide.$content);
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.complete();
        });
        return;
      }

      self.updateSlide(slide);

      if (!effect) {
        forceRedraw($slide);
        slide.$content.removeClass('fancybox-is-hidden');

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      $.fancybox.stop($slide);
      effectClassName = 'fancybox-animated fancybox-slide--' + (slide.pos > self.prevPos ? 'next' : 'previous') + ' fancybox-fx-' + effect;
      $slide.removeAttr('style').removeClass('fancybox-slide--current fancybox-slide--next fancybox-slide--previous').addClass(effectClassName);
      slide.$content.removeClass('fancybox-is-hidden');
      forceRedraw($slide);
      $.fancybox.animate($slide, 'fancybox-slide--current', duration, function (e) {
        $slide.removeClass(effectClassName).removeAttr('style');

        if (slide.pos === self.currPos) {
          self.complete();
        }
      }, true);
    },
    getThumbPos: function getThumbPos(slide) {
      var self = this;
      var rez = false;

      var isElementVisible = function isElementVisible($el) {
        var element = $el[0];
        var elementRect = element.getBoundingClientRect();
        var parentRects = [];
        var visibleInAllParents;

        while (element.parentElement !== null) {
          if ($(element.parentElement).css('overflow') === 'hidden' || $(element.parentElement).css('overflow') === 'auto') {
            parentRects.push(element.parentElement.getBoundingClientRect());
          }

          element = element.parentElement;
        }

        visibleInAllParents = parentRects.every(function (parentRect) {
          var visiblePixelX = Math.min(elementRect.right, parentRect.right) - Math.max(elementRect.left, parentRect.left);
          var visiblePixelY = Math.min(elementRect.bottom, parentRect.bottom) - Math.max(elementRect.top, parentRect.top);
          return visiblePixelX > 0 && visiblePixelY > 0;
        });
        return visibleInAllParents && elementRect.bottom > 0 && elementRect.right > 0 && elementRect.left < $(window).width() && elementRect.top < $(window).height();
      };

      var $thumb = slide.opts.$thumb;
      var thumbPos = $thumb ? $thumb.offset() : 0;
      var slidePos;

      if (thumbPos && $thumb[0].ownerDocument === document && isElementVisible($thumb)) {
        slidePos = self.$refs.stage.offset();
        rez = {
          top: thumbPos.top - slidePos.top + parseFloat($thumb.css("border-top-width") || 0),
          left: thumbPos.left - slidePos.left + parseFloat($thumb.css("border-left-width") || 0),
          width: $thumb.width(),
          height: $thumb.height(),
          scaleX: 1,
          scaleY: 1
        };
      }

      return rez;
    },
    complete: function complete() {
      var self = this;
      var current = self.current;
      var slides = {};

      if (current.isMoved || !current.isLoaded || current.isComplete) {
        return;
      }

      current.isComplete = true;
      current.$slide.siblings().trigger('onReset');
      forceRedraw(current.$slide);
      current.$slide.addClass('fancybox-slide--complete');
      $.each(self.slides, function (key, slide) {
        if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
          slides[slide.pos] = slide;
        } else if (slide) {
          $.fancybox.stop(slide.$slide);
          slide.$slide.unbind().remove();
        }
      });
      self.slides = slides;
      self.updateCursor();
      self.trigger('afterShow');

      if ($(document.activeElement).is('[disabled]') || current.opts.autoFocus && !(current.type == 'image' || current.type === 'iframe')) {
        self.focus();
      }
    },
    preload: function preload() {
      var self = this;
      var next, prev;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (next && next.type === 'image') {
        self.loadSlide(next);
      }

      if (prev && prev.type === 'image') {
        self.loadSlide(prev);
      }
    },
    focus: function focus() {
      var current = this.current;
      var $el;

      if (this.isClosing) {
        return;
      }

      $el = current && current.isComplete ? current.$slide.find('button,:input,[tabindex],a').filter(':not([disabled]):visible:first') : null;
      $el = $el && $el.length ? $el : this.$refs.container;
      $el.focus();
    },
    activate: function activate() {
      var self = this;
      $('.fancybox-container').each(function () {
        var instance = $(this).data('FancyBox');

        if (instance && instance.uid !== self.uid && !instance.isClosing) {
          instance.trigger('onDeactivate');
        }
      });

      if (self.current) {
        if (self.$refs.container.index() > 0) {
          self.$refs.container.prependTo(document.body);
        }

        self.updateControls();
      }

      self.trigger('onActivate');
      self.addEvents();
    },
    close: function close(e, d) {
      var self = this;
      var current = self.current;
      var effect, duration;
      var $what, opacity, start, end;

      var done = function done() {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      if (self.trigger('beforeClose', e) === false) {
        self.isClosing = false;
        requestAFrame(function () {
          self.update();
        });
        return false;
      }

      self.removeEvents();

      if (current.timouts) {
        clearTimeout(current.timouts);
      }

      $what = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
      current.$slide.off(transitionEnd).removeClass('fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated');
      current.$slide.siblings().trigger('onReset').remove();

      if (duration) {
        self.$refs.container.removeClass('fancybox-is-open').addClass('fancybox-is-closing');
      }

      self.hideLoading(current);
      self.hideControls();
      self.updateCursor();

      if (effect === 'zoom' && !(e !== true && $what && duration && current.type === 'image' && !current.hasError && (end = self.getThumbPos(current)))) {
        effect = 'fade';
      }

      if (effect === 'zoom') {
        $.fancybox.stop($what);
        start = $.fancybox.getTranslate($what);
        start.width = start.width * start.scaleX;
        start.height = start.height * start.scaleY;
        opacity = current.opts.zoomOpacity;

        if (opacity == 'auto') {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        start.scaleX = start.width / end.width;
        start.scaleY = start.height / end.height;
        start.width = end.width;
        start.height = end.height;
        $.fancybox.setTranslate(current.$content, start);
        $.fancybox.animate(current.$content, end, duration, done);
        return true;
      }

      if (effect && duration) {
        if (e === true) {
          setTimeout(done, duration);
        } else {
          $.fancybox.animate(current.$slide.removeClass('fancybox-slide--current'), 'fancybox-animated fancybox-slide--previous fancybox-fx-' + effect, duration, done);
        }
      } else {
        done();
      }

      return true;
    },
    cleanUp: function cleanUp(e) {
      var self = this,
          instance;
      self.current.$slide.trigger('onReset');
      self.$refs.container.empty().remove();
      self.trigger('afterClose', e);

      if (self.$lastFocus && !!!self.current.focusBack) {
        self.$lastFocus.focus();
      }

      self.current = null;
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);
        $('html').removeClass('fancybox-enabled');
        $('#fancybox-style-noscroll').remove();
      }
    },
    trigger: function trigger(name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
          self = this,
          obj = slide && slide.opts ? slide : self.current,
          rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === 'afterClose') {
        $D.trigger(name + '.fb', args);
      } else {
        self.$refs.container.trigger(name + '.fb', args);
      }
    },
    updateControls: function updateControls(force) {
      var self = this;
      var current = self.current;
      var index = current.index;
      var opts = current.opts;
      var caption = opts.caption;
      var $caption = self.$refs.caption;
      current.$slide.trigger('refresh');
      self.$caption = caption && caption.length ? $caption.html(caption) : null;

      if (!self.isHiddenControls) {
        self.showControls();
      }

      $('[data-fancybox-count]').html(self.group.length);
      $('[data-fancybox-index]').html(index + 1);
      $('[data-fancybox-prev]').prop('disabled', !opts.loop && index <= 0);
      $('[data-fancybox-next]').prop('disabled', !opts.loop && index >= self.group.length - 1);
    },
    hideControls: function hideControls() {
      this.isHiddenControls = true;
      this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');
    },
    showControls: function showControls() {
      var self = this;
      var opts = self.current ? self.current.opts : self.opts;
      var $container = self.$refs.container;
      self.isHiddenControls = false;
      self.idleSecondsCounter = 0;
      $container.toggleClass('fancybox-show-toolbar', !!(opts.toolbar && opts.buttons)).toggleClass('fancybox-show-infobar', !!(opts.infobar && self.group.length > 1)).toggleClass('fancybox-show-nav', !!(opts.arrows && self.group.length > 1)).toggleClass('fancybox-is-modal', !!opts.modal);

      if (self.$caption) {
        $container.addClass('fancybox-show-caption ');
      } else {
        $container.removeClass('fancybox-show-caption');
      }
    },
    toggleControls: function toggleControls() {
      if (this.isHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });
  $.fancybox = {
    version: "3.1.20",
    defaults: defaults,
    getInstance: function getInstance(command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):first').data('FancyBox');
      var args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === 'string') {
          instance[command].apply(instance, args);
        } else if ($.type(command) === 'function') {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },
    open: function open(items, opts, index) {
      return new FancyBox(items, opts, index);
    },
    close: function close(all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        if (all === true) {
          this.close();
        }
      }
    },
    destroy: function destroy() {
      this.close(true);
      $D.off('click.fb-start');
    },
    isMobile: document.createTouch !== undefined && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
    use3d: function () {
      var div = document.createElement('div');
      return window.getComputedStyle && window.getComputedStyle(div).getPropertyValue('transform') && !(document.documentMode && document.documentMode < 11);
    }(),
    getTranslate: function getTranslate($el) {
      var matrix;

      if (!$el || !$el.length) {
        return false;
      }

      matrix = $el.eq(0).css('transform');

      if (matrix && matrix.indexOf('matrix') !== -1) {
        matrix = matrix.split('(')[1];
        matrix = matrix.split(')')[0];
        matrix = matrix.split(',');
      } else {
        matrix = [];
      }

      if (matrix.length) {
        if (matrix.length > 10) {
          matrix = [matrix[13], matrix[12], matrix[0], matrix[5]];
        } else {
          matrix = [matrix[5], matrix[4], matrix[0], matrix[3]];
        }

        matrix = matrix.map(parseFloat);
      } else {
        matrix = [0, 0, 1, 1];
        var transRegex = /\.*translate\((.*)px,(.*)px\)/i;
        var transRez = transRegex.exec($el.eq(0).attr('style'));

        if (transRez) {
          matrix[0] = parseFloat(transRez[2]);
          matrix[1] = parseFloat(transRez[1]);
        }
      }

      return {
        top: matrix[0],
        left: matrix[1],
        scaleX: matrix[2],
        scaleY: matrix[3],
        opacity: parseFloat($el.css('opacity')),
        width: $el.width(),
        height: $el.height()
      };
    },
    setTranslate: function setTranslate($el, props) {
      var str = '';
      var css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str = (props.left === undefined ? $el.position().left : props.left) + 'px, ' + (props.top === undefined ? $el.position().top : props.top) + 'px';

        if (this.use3d) {
          str = 'translate3d(' + str + ', 0px)';
        } else {
          str = 'translate(' + str + ')';
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str = (str.length ? str + ' ' : '') + 'scale(' + props.scaleX + ', ' + props.scaleY + ')';
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },
    animate: function animate($el, to, duration, callback, leaveAnimationName) {
      var event = transitionEnd || 'transitionend';

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      if (!$.isPlainObject(to)) {
        $el.removeAttr('style');
      }

      $el.on(event, function (e) {
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == 'z-index')) {
          return;
        }

        $el.off(event);

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            $el.css('transition-duration', '0ms');
            to.width = $el.width() * to.scaleX;
            to.height = $el.height() * to.scaleY;
            to.scaleX = 1;
            to.scaleY = 1;
            $.fancybox.setTranslate($el, to);
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css('transition-duration', duration + 'ms');
      }

      if ($.isPlainObject(to)) {
        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      $el.data("timer", setTimeout(function () {
        $el.trigger('transitionend');
      }, duration + 16));
    },
    stop: function stop($el) {
      clearTimeout($el.data("timer"));
      $el.off(transitionEnd);
    }
  };

  function _run(e) {
    var target = e.currentTarget,
        opts = e.data ? e.data.options : {},
        items = e.data ? e.data.items : [],
        value = $(target).attr('data-fancybox') || '',
        index = 0;
    e.preventDefault();
    e.stopPropagation();

    if (value) {
      items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      index = items.index(target);

      if (index < 0) {
        index = 0;
      }
    } else {
      items = [target];
    }

    $.fancybox.open(items, opts, index);
  }

  $.fn.fancybox = function (options) {
    var selector;
    options = options || {};
    selector = options.selector || false;

    if (selector) {
      $('body').off('click.fb-start', selector).on('click.fb-start', selector, {
        items: $(selector),
        options: options
      }, _run);
    } else {
      this.off('click.fb-start').on('click.fb-start', {
        items: this,
        options: options
      }, _run);
    }

    return this;
  };

  $D.on('click.fb-start', '[data-fancybox]', _run);
})(window, document, window.jQuery);

;

(function ($) {
  'use strict';

  var format = function format(url, rez, params) {
    if (!url) {
      return;
    }

    params = params || '';

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace('$' + key, value || '');
    });

    if (params.length) {
      url += (url.indexOf('?') > 0 ? '&' : '?') + params;
    }

    return url;
  };

  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: 'transparent',
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: 'iframe',
      url: '//www.youtube.com/embed/$4',
      thumb: '//img.youtube.com/vi/$4/hqdefault.jpg'
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1,
        api: 1
      },
      paramPlace: 3,
      type: 'iframe',
      url: '//player.vimeo.com/video/$2'
    },
    metacafe: {
      matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
      type: 'iframe',
      url: '//www.metacafe.com/embed/$1/?ap=1'
    },
    dailymotion: {
      matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
      params: {
        additionalInfos: 0,
        autoStart: 1
      },
      type: 'iframe',
      url: '//www.dailymotion.com/embed/video/$1'
    },
    vine: {
      matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
      type: 'iframe',
      url: '//vine.co/v/$1/embed/simple'
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: 'image',
      url: '//$1/p/$2/media/?size=l'
    },
    google_maps: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: 'iframe',
      url: function url(rez) {
        return '//maps.google.' + rez[2] + '/?ll=' + (rez[9] ? rez[9] + '&z=' + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : '') : rez[12]) + '&output=' + (rez[12] && rez[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
      }
    }
  };
  $(document).on('onInit.fb', function (e, instance) {
    $.each(instance.group, function (i, item) {
      var url = item.src || '',
          type = false,
          media,
          thumb,
          rez,
          params,
          urlParams,
          o,
          provider;

      if (item.type) {
        return;
      }

      media = $.extend(true, {}, defaults, item.opts.media);
      $.each(media, function (n, el) {
        rez = url.match(el.matcher);
        o = {};
        provider = n;

        if (!rez) {
          return;
        }

        type = el.type;

        if (el.paramPlace && rez[el.paramPlace]) {
          urlParams = rez[el.paramPlace];

          if (urlParams[0] == '?') {
            urlParams = urlParams.substring(1);
          }

          urlParams = urlParams.split('&');

          for (var m = 0; m < urlParams.length; ++m) {
            var p = urlParams[m].split('=', 2);

            if (p.length == 2) {
              o[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
          }
        }

        params = $.extend(true, {}, el.params, item.opts[n], o);
        url = $.type(el.url) === "function" ? el.url.call(this, rez, params, item) : format(el.url, rez, params);
        thumb = $.type(el.thumb) === "function" ? el.thumb.call(this, rez, params, item) : format(el.thumb, rez);

        if (provider === 'vimeo') {
          url = url.replace('&%23', '#');
        }

        return false;
      });

      if (type) {
        item.src = url;
        item.type = type;

        if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
          item.opts.thumb = thumb;
        }

        if (type === 'iframe') {
          $.extend(true, item.opts, {
            iframe: {
              preload: false,
              attr: {
                scrolling: "no"
              }
            }
          });
          item.contentProvider = provider;
          item.opts.slideClass += ' fancybox-slide--' + (provider == 'google_maps' ? 'map' : 'video');
        }
      } else {
        item.type = 'image';
      }
    });
  });
})(window.jQuery);

;

(function (window, document, $) {
  'use strict';

  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();

  var cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  var pointers = function pointers(e) {
    var result = [];
    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function distance(point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === 'x') {
      return point2.x - point1.x;
    } else if (what === 'y') {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function isClickable($el) {
    if ($el.is('a,button,input,select,textarea') || $.isFunction($el.get(0).onclick)) {
      return true;
    }

    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === 'data-fancybox-') {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function hasScrollbars(el) {
    var overflowY = window.getComputedStyle(el)['overflow-y'];
    var overflowX = window.getComputedStyle(el)['overflow-x'];
    var vertical = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
    var horizontal = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;
    return vertical || horizontal;
  };

  var isScrollable = function isScrollable($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass('fancybox-stage') || $el.is('body')) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function Guestures(instance) {
    var self = this;
    self.instance = instance;
    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;
    self.destroy();
    self.$container.on('touchstart.fb.touch mousedown.fb.touch', $.proxy(self, 'ontouchstart'));
  };

  Guestures.prototype.destroy = function () {
    this.$container.off('.fb.touch');
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this;
    var $target = $(e.target);
    var instance = self.instance;
    var current = instance.current;
    var $content = current.$content;
    var isTouchDevice = e.type == 'touchstart';

    if (isTouchDevice) {
      self.$container.off('mousedown.fb.touch');
    }

    if (!current || self.instance.isAnimating || self.instance.isClosing) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    if (!$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }

    if (e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    self.startPoints = pointers(e);

    if (!self.startPoints || self.startPoints.length > 1 && instance.isSliding) {
      return;
    }

    self.$target = $target;
    self.$content = $content;
    self.canTap = true;
    $(document).off('.fb.touch');
    $(document).on(isTouchDevice ? 'touchend.fb.touch touchcancel.fb.touch' : 'mouseup.fb.touch mouseleave.fb.touch', $.proxy(self, "ontouchend"));
    $(document).on(isTouchDevice ? 'touchmove.fb.touch' : 'mousemove.fb.touch', $.proxy(self, "ontouchmove"));
    e.stopPropagation();

    if (!(instance.current.opts.touch || instance.canPan()) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is('img')) {
        e.preventDefault();
      }

      return;
    }

    if (!($.fancybox.isMobile && (isScrollable(self.$target) || isScrollable(self.$target.parent())))) {
      e.preventDefault();
    }

    self.canvasWidth = Math.round(current.$slide[0].clientWidth);
    self.canvasHeight = Math.round(current.$slide[0].clientHeight);
    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;
    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.sliderStartPos = self.sliderLastPos || {
      top: 0,
      left: 0
    };
    self.contentStartPos = $.fancybox.getTranslate(self.$content);
    self.contentLastPos = null;

    if (self.startPoints.length === 1 && !self.isZooming) {
      self.canTap = !instance.isSliding;

      if (current.type === 'image' && (self.contentStartPos.width > self.canvasWidth + 1 || self.contentStartPos.height > self.canvasHeight + 1)) {
        $.fancybox.stop(self.$content);
        self.$content.css('transition-duration', '0ms');
        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass('fancybox-controls--isGrabbing');
    }

    if (self.startPoints.length === 2 && !instance.isAnimating && !current.hasError && current.type === 'image' && (current.isLoaded || current.$ghost)) {
      self.isZooming = true;
      self.isSwiping = false;
      self.isPanning = false;
      $.fancybox.stop(self.$content);
      self.$content.css('transition-duration', '0ms');
      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this;
    self.newPoints = pointers(e);

    if ($.fancybox.isMobile && (isScrollable(self.$target) || isScrollable(self.$target.parent()))) {
      e.stopPropagation();
      self.canTap = false;
      return;
    }

    if (!(self.instance.current.opts.touch || self.instance.canPan()) || !self.newPoints || !self.newPoints.length) {
      return;
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], 'x');
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], 'y');
    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    if (self.distance > 0) {
      if (!(self.$target.is(self.$stage) || self.$stage.find(self.$target).length)) {
        return;
      }

      e.stopPropagation();
      e.preventDefault();

      if (self.isSwiping) {
        self.onSwipe();
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function () {
    var self = this;
    var swiping = self.isSwiping;
    var left = self.sliderStartPos.left || 0;
    var angle;

    if (swiping === true) {
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (self.instance.group.length < 2 && self.instance.opts.touch.vertical) {
          self.isSwiping = 'y';
        } else if (self.instance.isSliding || self.instance.opts.touch.vertical === false || self.instance.opts.touch.vertical === 'auto' && $(window).width() > 800) {
          self.isSwiping = 'x';
        } else {
          angle = Math.abs(Math.atan2(self.distanceY, self.distanceX) * 180 / Math.PI);
          self.isSwiping = angle > 45 && angle < 135 ? 'y' : 'x';
        }

        self.instance.isSliding = self.isSwiping;
        self.startPoints = self.newPoints;
        $.each(self.instance.slides, function (index, slide) {
          $.fancybox.stop(slide.$slide);
          slide.$slide.css('transition-duration', '0ms');
          slide.inTransition = false;

          if (slide.pos === self.instance.current.pos) {
            self.sliderStartPos.left = $.fancybox.getTranslate(slide.$slide).left;
          }
        });

        if (self.instance.SlideShow && self.instance.SlideShow.isActive) {
          self.instance.SlideShow.stop();
        }
      }
    } else {
      if (swiping == 'x') {
        if (self.distanceX > 0 && (self.instance.group.length < 2 || self.instance.current.index === 0 && !self.instance.current.opts.loop)) {
          left = left + Math.pow(self.distanceX, 0.8);
        } else if (self.distanceX < 0 && (self.instance.group.length < 2 || self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop)) {
          left = left - Math.pow(-self.distanceX, 0.8);
        } else {
          left = left + self.distanceX;
        }
      }

      self.sliderLastPos = {
        top: swiping == 'x' ? 0 : self.sliderStartPos.top + self.distanceY,
        left: left
      };

      if (self.requestId) {
        cancelAFrame(self.requestId);
        self.requestId = null;
      }

      self.requestId = requestAFrame(function () {
        if (self.sliderLastPos) {
          $.each(self.instance.slides, function (index, slide) {
            var pos = slide.pos - self.instance.currPos;
            $.fancybox.setTranslate(slide.$slide, {
              top: self.sliderLastPos.top,
              left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
            });
          });
          self.$container.addClass('fancybox-is-sliding');
        }
      });
    }
  };

  Guestures.prototype.onPan = function () {
    var self = this;
    var newOffsetX, newOffsetY, newPos;
    self.canTap = false;

    if (self.contentStartPos.width > self.canvasWidth) {
      newOffsetX = self.contentStartPos.left + self.distanceX;
    } else {
      newOffsetX = self.contentStartPos.left;
    }

    newOffsetY = self.contentStartPos.top + self.distanceY;
    newPos = self.limitMovement(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
    newPos.scaleX = self.contentStartPos.scaleX;
    newPos.scaleY = self.contentStartPos.scaleY;
    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.limitMovement = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;
    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;
    var currentOffsetX = self.contentStartPos.left;
    var currentOffsetY = self.contentStartPos.top;
    var distanceX = self.distanceX;
    var distanceY = self.distanceY;
    minTranslateX = Math.max(0, canvasWidth * 0.5 - newWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - newHeight * 0.5);
    maxTranslateX = Math.min(canvasWidth - newWidth, canvasWidth * 0.5 - newWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - newHeight, canvasHeight * 0.5 - newHeight * 0.5);

    if (newWidth > canvasWidth) {
      if (distanceX > 0 && newOffsetX > minTranslateX) {
        newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
      }

      if (distanceX < 0 && newOffsetX < maxTranslateX) {
        newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
      }
    }

    if (newHeight > canvasHeight) {
      if (distanceY > 0 && newOffsetY > minTranslateY) {
        newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
      }

      if (distanceY < 0 && newOffsetY < maxTranslateY) {
        newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
      }
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this;
    var currentWidth = self.contentStartPos.width;
    var currentHeight = self.contentStartPos.height;
    var currentOffsetX = self.contentStartPos.left;
    var currentOffsetY = self.contentStartPos.top;
    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: self.contentStartPos.scaleX * pinchRatio,
      scaleY: self.contentStartPos.scaleY * pinchRatio
    };
    self.canTap = false;
    self.newWidth = newWidth;
    self.newHeight = newHeight;
    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;
    var dMs = Math.max(new Date().getTime() - self.startTime, 1);
    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    self.endPoints = pointers(e);
    self.$container.removeClass('fancybox-controls--isGrabbing');
    $(document).off('.fb.touch');

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 366;
    self.velocityX = self.distanceX / dMs * 0.5;
    self.velocityY = self.distanceY / dMs * 0.5;
    self.speedX = Math.max(self.speed * 0.5, Math.min(self.speed * 1.5, 1 / Math.abs(self.velocityX) * self.speed));

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping) {
    var self = this;
    var ret = false;
    self.instance.isSliding = false;
    self.sliderLastPos = null;

    if (swiping == 'y' && Math.abs(self.distanceY) > 50) {
      $.fancybox.animate(self.instance.current.$slide, {
        top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
        opacity: 0
      }, 150);
      ret = self.instance.close(true, 300);
    } else if (swiping == 'x' && self.distanceX > 50 && self.instance.group.length > 1) {
      ret = self.instance.previous(self.speedX);
    } else if (swiping == 'x' && self.distanceX < -50 && self.instance.group.length > 1) {
      ret = self.instance.next(self.speedX);
    }

    if (ret === false && (swiping == 'x' || swiping == 'y')) {
      self.instance.jumpTo(self.instance.current.index, 150);
    }

    self.$container.removeClass('fancybox-is-sliding');
  };

  Guestures.prototype.endPanning = function () {
    var self = this;
    var newOffsetX, newOffsetY, newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.instance.current.opts.touch.momentum === false) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      newOffsetX = self.contentLastPos.left + self.velocityX * self.speed;
      newOffsetY = self.contentLastPos.top + self.velocityY * self.speed;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;
    $.fancybox.animate(self.$content, newPos, 330);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;
    var current = self.instance.current;
    var newOffsetX, newOffsetY, newPos, reset;
    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;
    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
      $.fancybox.setTranslate(self.content, $.fancybox.getTranslate(self.$content));
      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);
    var instance = self.instance;
    var current = instance.current;
    var endPoints = e && pointers(e) || self.startPoints;
    var tapX = endPoints[0] ? endPoints[0].x - self.$stage.offset().left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - self.$stage.offset().top : 0;
    var where;

    var process = function process(prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);
          break;

        case "toggleControls":
          instance.toggleControls(true);
          break;

        case "next":
          instance.next();
          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == 'image' && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    if (instance.isSliding) {
      return;
    }

    if (tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    if ($target.is('.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container')) {
      where = 'Outside';
    } else if ($target.is('.fancybox-slide')) {
      where = 'Slide';
    } else if (instance.current.$content && instance.current.$content.has(e.target).length) {
      where = 'Content';
    } else {
      return;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;

      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50 || instance.isSliding) {
        return this;
      }

      process('dblclick' + where);
    } else {
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts['dblclick' + where] && current.opts['dblclick' + where] !== current.opts['click' + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;
          process('click' + where);
        }, 300);
      } else {
        process('click' + where);
      }
    }

    return this;
  };

  $(document).on('onActivate.fb', function (e, instance) {
    if (instance && !instance.Guestures) {
      instance.Guestures = new Guestures(instance);
    }
  });
  $(document).on('beforeClose.fb', function (e, instance) {
    if (instance && instance.Guestures) {
      instance.Guestures.destroy();
    }
  });
})(window, document, window.jQuery);

;

(function (document, $) {
  'use strict';

  var SlideShow = function SlideShow(instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,
    speed: 3000,
    init: function init() {
      var self = this;
      self.$button = self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click', function () {
        self.toggle();
      });

      if (self.instance.group.length < 2 || !self.instance.group[self.instance.currIndex].opts.slideShow) {
        self.$button.hide();
      }
    },
    set: function set() {
      var self = this;

      if (self.instance && self.instance.current && (self.instance.current.opts.loop || self.instance.currIndex < self.instance.group.length - 1)) {
        self.timer = setTimeout(function () {
          self.instance.next();
        }, self.instance.current.opts.slideShow.speed || self.speed);
      } else {
        self.stop();
        self.instance.idleSecondsCounter = 0;
        self.instance.showControls();
      }
    },
    clear: function clear() {
      var self = this;
      clearTimeout(self.timer);
      self.timer = null;
    },
    start: function start() {
      var self = this;
      var current = self.instance.current;

      if (self.instance && current && (current.opts.loop || current.index < self.instance.group.length - 1)) {
        self.isActive = true;
        self.$button.attr('title', current.opts.i18n[current.opts.lang].PLAY_STOP).addClass('fancybox-button--pause');

        if (current.isComplete) {
          self.set();
        }
      }
    },
    stop: function stop() {
      var self = this;
      var current = self.instance.current;
      self.clear();
      self.$button.attr('title', current.opts.i18n[current.opts.lang].PLAY_START).removeClass('fancybox-button--pause');
      self.isActive = false;
    },
    toggle: function toggle() {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });
  $(document).on({
    'onInit.fb': function onInitFb(e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },
    'beforeShow.fb': function beforeShowFb(e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },
    'afterShow.fb': function afterShowFb(e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },
    'afterKeydown.fb': function afterKeydownFb(e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is('button,a,input')) {
        keypress.preventDefault();
        SlideShow.toggle();
      }
    },
    'beforeClose.fb onDeactivate.fb': function beforeCloseFbOnDeactivateFb(e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance();
    var SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, window.jQuery);

;

(function (document, $) {
  'use strict';

  var fn = function () {
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var val;
    var ret = {};
    var i, j;

    for (i = 0; i < fnMap.length; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  }();

  if (!fn) {
    $.fancybox.defaults.btnTpl.fullScreen = false;
    return;
  }

  var FullScreen = {
    request: function request(elem) {
      elem = elem || document.documentElement;
      elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
    },
    exit: function exit() {
      document[fn.exitFullscreen]();
    },
    toggle: function toggle(elem) {
      elem = elem || document.documentElement;

      if (this.isFullscreen()) {
        this.exit();
      } else {
        this.request(elem);
      }
    },
    isFullscreen: function isFullscreen() {
      return Boolean(document[fn.fullscreenElement]);
    },
    enabled: function enabled() {
      return Boolean(document[fn.fullscreenEnabled]);
    }
  };
  $(document).on({
    'onInit.fb': function onInitFb(e, instance) {
      var $container;
      var $button = instance.$refs.toolbar.find('[data-fancybox-fullscreen]');

      if (instance && !instance.FullScreen && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;
        $container.on('click.fb-fullscreen', '[data-fancybox-fullscreen]', function (e) {
          e.stopPropagation();
          e.preventDefault();
          FullScreen.toggle($container[0]);
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request($container[0]);
        }

        instance.FullScreen = FullScreen;
      } else {
        $button.hide();
      }
    },
    'afterKeydown.fb': function afterKeydownFb(e, instance, current, keypress, keycode) {
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();
        instance.FullScreen.toggle(instance.$refs.container[0]);
      }
    },
    'beforeClose.fb': function beforeCloseFb(instance) {
      if (instance && instance.FullScreen) {
        FullScreen.exit();
      }
    }
  });
  $(document).on(fn.fullscreenchange, function () {
    var instance = $.fancybox.getInstance();

    if (instance.current && instance.current.type === 'image' && instance.isAnimating) {
      instance.current.$content.css('transition', 'none');
      instance.isAnimating = false;
      instance.update(true, true, 0);
    }
  });
})(document, window.jQuery);

;

(function (document, $) {
  'use strict';

  var FancyThumbs = function FancyThumbs(instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    init: function init() {
      var self = this;
      var first = self.instance.group[0],
          second = self.instance.group[1];
      self.$button = self.instance.$refs.toolbar.find('[data-fancybox-thumbs]');

      if (self.instance.group.length > 1 && self.instance.group[self.instance.currIndex].opts.thumbs && (first.type == 'image' || first.opts.thumb || first.opts.$thumb) && (second.type == 'image' || second.opts.thumb || second.opts.$thumb)) {
        self.$button.on('click', function () {
          self.toggle();
        });
        self.isActive = true;
      } else {
        self.$button.hide();
        self.isActive = false;
      }
    },
    create: function create() {
      var instance = this.instance,
          list,
          src;
      this.$grid = $('<div class="fancybox-thumbs"></div>').appendTo(instance.$refs.container);
      list = '<ul>';
      $.each(instance.group, function (i, item) {
        src = item.opts.thumb || (item.opts.$thumb ? item.opts.$thumb.attr('src') : null);

        if (!src && item.type === 'image') {
          src = item.src;
        }

        if (src && src.length) {
          list += '<li data-index="' + i + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + src + '" /></li>';
        }
      });
      list += '</ul>';
      this.$list = $(list).appendTo(this.$grid).on('click', 'li', function () {
        instance.jumpTo($(this).data('index'));
      });
      this.$list.find('img').hide().one('load', function () {
        var $parent = $(this).parent().removeClass('fancybox-thumbs-loading'),
            thumbWidth = $parent.outerWidth(),
            thumbHeight = $parent.outerHeight(),
            width,
            height,
            widthRatio,
            heightRatio;
        width = this.naturalWidth || this.width;
        height = this.naturalHeight || this.height;
        widthRatio = width / thumbWidth;
        heightRatio = height / thumbHeight;

        if (widthRatio >= 1 && heightRatio >= 1) {
          if (widthRatio > heightRatio) {
            width = width / heightRatio;
            height = thumbHeight;
          } else {
            width = thumbWidth;
            height = height / widthRatio;
          }
        }

        $(this).css({
          width: Math.floor(width),
          height: Math.floor(height),
          'margin-top': Math.min(0, Math.floor(thumbHeight * 0.3 - height * 0.3)),
          'margin-left': Math.min(0, Math.floor(thumbWidth * 0.5 - width * 0.5))
        }).show();
      }).each(function () {
        this.src = $(this).data('src');
      });
    },
    focus: function focus() {
      if (this.instance.current) {
        this.$list.children().removeClass('fancybox-thumbs-active').filter('[data-index="' + this.instance.current.index + '"]').addClass('fancybox-thumbs-active').focus();
      }
    },
    close: function close() {
      this.$grid.hide();
    },
    update: function update() {
      this.instance.$refs.container.toggleClass('fancybox-show-thumbs', this.isVisible);

      if (this.isVisible) {
        if (!this.$grid) {
          this.create();
        }

        this.instance.trigger('onThumbsShow');
        this.focus();
      } else if (this.$grid) {
        this.instance.trigger('onThumbsHide');
      }

      this.instance.update();
    },
    hide: function hide() {
      this.isVisible = false;
      this.update();
    },
    show: function show() {
      this.isVisible = true;
      this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });
  $(document).on({
    'onInit.fb': function onInitFb(e, instance) {
      if (instance && !instance.Thumbs) {
        instance.Thumbs = new FancyThumbs(instance);
      }
    },
    'beforeShow.fb': function beforeShowFb(e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (!Thumbs || !Thumbs.isActive) {
        return;
      }

      if (item.modal) {
        Thumbs.$button.hide();
        Thumbs.hide();
        return;
      }

      if (firstRun && instance.opts.thumbs.autoStart === true) {
        Thumbs.show();
      }

      if (Thumbs.isVisible) {
        Thumbs.focus();
      }
    },
    'afterKeydown.fb': function afterKeydownFb(e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();
        Thumbs.toggle();
      }
    },
    'beforeClose.fb': function beforeCloseFb(e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && instance.opts.thumbs.hideOnClose !== false) {
        Thumbs.close();
      }
    }
  });
})(document, window.jQuery);

;

(function (document, window, $) {
  'use strict';

  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

      var fcssescape = function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }

          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  var currentHash = null;
  var timerID = null;

  function parseUrl() {
    var hash = window.location.hash.substr(1);
    var rez = hash.split('-');
    var index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1;
    var gallery = rez.join('-');

    if (index < 1) {
      index = 1;
    }

    return {
      hash: hash,
      index: index,
      gallery: gallery
    };
  }

  function triggerFromUrl(url) {
    var $el;

    if (url.gallery !== '') {
      $el = $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1);

      if ($el.length) {
        $el.trigger('click');
      } else {
        $("#" + $.escapeSelector(url.gallery) + "").trigger('click');
      }
    }
  }

  function getGallery(instance) {
    var opts;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    return opts.$orig ? opts.$orig.data('fancybox') : opts.hash || '';
  }

  $(function () {
    setTimeout(function () {
      if ($.fancybox.defaults.hash === false) {
        return;
      }

      $(document).on({
        'onInit.fb': function onInitFb(e, instance) {
          var url, gallery;

          if (instance.group[instance.currIndex].opts.hash === false) {
            return;
          }

          url = parseUrl();
          gallery = getGallery(instance);

          if (gallery && url.gallery && gallery == url.gallery) {
            instance.currIndex = url.index - 1;
          }
        },
        'beforeShow.fb': function beforeShowFb(e, instance, current, firstRun) {
          var gallery;

          if (current.opts.hash === false) {
            return;
          }

          gallery = getGallery(instance);

          if (gallery && gallery !== '') {
            if (window.location.hash.indexOf(gallery) < 0) {
              instance.opts.origHash = window.location.hash;
            }

            currentHash = gallery + (instance.group.length > 1 ? '-' + (current.index + 1) : '');

            if ('replaceState' in window.history) {
              if (timerID) {
                clearTimeout(timerID);
              }

              timerID = setTimeout(function () {
                window.history[firstRun ? 'pushState' : 'replaceState']({}, document.title, window.location.pathname + window.location.search + '#' + currentHash);
                timerID = null;
              }, 300);
            } else {
              window.location.hash = currentHash;
            }
          }
        },
        'beforeClose.fb': function beforeCloseFb(e, instance, current) {
          var gallery, origHash;

          if (timerID) {
            clearTimeout(timerID);
          }

          if (current.opts.hash === false) {
            return;
          }

          gallery = getGallery(instance);
          origHash = instance && instance.opts.origHash ? instance.opts.origHash : '';

          if (gallery && gallery !== '') {
            if ('replaceState' in history) {
              window.history.replaceState({}, document.title, window.location.pathname + window.location.search + origHash);
            } else {
              window.location.hash = origHash;
              $(window).scrollTop(instance.scrollTop).scrollLeft(instance.scrollLeft);
            }
          }

          currentHash = null;
        }
      });
      $(window).on('hashchange.fb', function () {
        var url = parseUrl();

        if ($.fancybox.getInstance()) {
          if (currentHash && currentHash !== url.gallery + '-' + url.index && !(url.index === 1 && currentHash == url.gallery)) {
            currentHash = null;
            $.fancybox.close();
          }
        } else if (url.gallery !== '') {
          triggerFromUrl(url);
        }
      });
      $(window).one('unload.fb popstate.fb', function () {
        $.fancybox.getInstance('close', true, 0);
      });
      triggerFromUrl(parseUrl());
    }, 50);
  });
})(document, window, window.jQuery);
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.1-beta.8
*/
!function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: !1,
      exports: {}
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
  }

  __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
    __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
      enumerable: !0,
      get: getter
    });
  }, __webpack_require__.r = function (exports) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(exports, "__esModule", {
      value: !0
    });
  }, __webpack_require__.t = function (value, mode) {
    if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
    if (4 & mode && "object" == _typeof2(value) && value && value.__esModule) return value;
    var ns = Object.create(null);
    if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
      enumerable: !0,
      value: value
    }), 2 & mode && "string" != typeof value) for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    return ns;
  }, __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ? function () {
      return module.default;
    } : function () {
      return module;
    };
    return __webpack_require__.d(getter, "a", getter), getter;
  }, __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
}([function (module, exports, __webpack_require__) {
  "use strict";

  __webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9);

  var _inputmask2 = _interopRequireDefault(__webpack_require__(4)),
      _inputmask4 = _interopRequireDefault(__webpack_require__(2)),
      _jquery2 = _interopRequireDefault(__webpack_require__(3));

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _inputmask4.default === _jquery2.default && __webpack_require__(10), window.Inputmask = _inputmask2.default;
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    var formatCode = {
      d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
      dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
        return pad(Date.prototype.getDate.call(this), 2);
      }],
      ddd: [""],
      dddd: [""],
      m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
        return Date.prototype.getMonth.call(this) + 1;
      }],
      mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
        return pad(Date.prototype.getMonth.call(this) + 1, 2);
      }],
      mmm: [""],
      mmmm: [""],
      yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
        return pad(Date.prototype.getFullYear.call(this), 2);
      }],
      yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
        return pad(Date.prototype.getFullYear.call(this), 4);
      }],
      h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
      hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
        return pad(Date.prototype.getHours.call(this), 2);
      }],
      hhh: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
      H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
      HH: ["[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
        return pad(Date.prototype.getHours.call(this), 2);
      }],
      HHH: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
      M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
      MM: ["[0-5][0-9]", Date.prototype.setMinutes, "minutes", function () {
        return pad(Date.prototype.getMinutes.call(this), 2);
      }],
      s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
      ss: ["[0-5][0-9]", Date.prototype.setSeconds, "seconds", function () {
        return pad(Date.prototype.getSeconds.call(this), 2);
      }],
      l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
        return pad(Date.prototype.getMilliseconds.call(this), 3);
      }],
      L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
        return pad(Date.prototype.getMilliseconds.call(this), 2);
      }],
      t: ["[ap]"],
      tt: ["[ap]m"],
      T: ["[AP]"],
      TT: ["[AP]M"],
      Z: [""],
      o: [""],
      S: [""]
    },
        formatAlias = {
      isoDate: "yyyy-mm-dd",
      isoTime: "HH:MM:ss",
      isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
      isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

    function getTokenizer(opts) {
      if (!opts.tokenizer) {
        var tokens = [];

        for (var ndx in formatCode) {
          -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
        }

        opts.tokenizer = "(" + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g");
      }

      return opts.tokenizer;
    }

    function parse(format, dateObjValue, opts) {
      for (var match, mask = ""; match = getTokenizer(opts).exec(format);) {
        if (void 0 === dateObjValue) {
          if (formatCode[match[0]]) mask += "(" + formatCode[match[0]][0] + ")";else switch (match[0]) {
            case "[":
              mask += "(";
              break;

            case "]":
              mask += ")?";
              break;

            default:
              mask += Inputmask.escapeRegex(match[0]);
          }
        } else if (formatCode[match[0]]) {
          var getFn = formatCode[match[0]][3];
          mask += getFn.call(dateObjValue.date);
        } else mask += match[0];
      }

      return mask;
    }

    function pad(val, len) {
      for (val = String(val), len = len || 2; val.length < len;) {
        val = "0" + val;
      }

      return val;
    }

    function analyseMask(maskString, format, opts) {
      var targetProp,
          match,
          dateOperation,
          targetValidator,
          dateObj = {
        date: new Date(1, 0, 1)
      },
          mask = maskString;

      function extendProperty(value) {
        var correctedValue;

        if (opts.min && opts.min[targetProp] || opts.max && opts.max[targetProp]) {
          var min = opts.min && opts.min[targetProp] || opts.max[targetProp],
              max = opts.max && opts.max[targetProp] || opts.min[targetProp];

          for (correctedValue = value.replace(/[^0-9]/g, ""), correctedValue += (min.indexOf(correctedValue) < max.indexOf(correctedValue) ? max : min).toString().substr(correctedValue.length); !new RegExp(targetValidator).test(correctedValue);) {
            correctedValue--;
          }
        } else correctedValue = value.replace(/[^0-9]/g, "0");

        return correctedValue;
      }

      function setValue(dateObj, value, opts) {
        dateObj[targetProp] = extendProperty(value), dateObj["raw" + targetProp] = value, void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
      }

      if ("string" == typeof mask) {
        for (; match = getTokenizer(opts).exec(format);) {
          var value = mask.slice(0, match[0].length);
          formatCode.hasOwnProperty(match[0]) && (targetValidator = formatCode[match[0]][0], targetProp = formatCode[match[0]][2], dateOperation = formatCode[match[0]][1], setValue(dateObj, value)), mask = mask.slice(value.length);
        }

        return dateObj;
      }
    }

    return Inputmask.extendAliases({
      datetime: {
        mask: function mask(opts) {
          return formatCode.S = opts.i18n.ordinalSuffix.join("|"), opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[\[\]]/, ""), opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), opts.regex = parse(opts.inputFormat, void 0, opts), null;
        },
        placeholder: "",
        inputFormat: "isoDateTime",
        displayFormat: void 0,
        outputFormat: void 0,
        min: null,
        max: null,
        i18n: {
          dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          ordinalSuffix: ["st", "nd", "rd", "th"]
        },
        postValidation: function postValidation(buffer, currentResult, opts) {
          var result = currentResult,
              dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
          return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = (result = function (dateParts, currentResult) {
            return (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) && currentResult;
          }(dateParts, result)) && function (dateParts, opts) {
            var result = !0;

            if (opts.min) {
              if (dateParts.rawyear) {
                var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""),
                    minYear = opts.min.year.substr(0, rawYear.length);
                result = minYear <= rawYear;
              }

              dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
            }

            return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), result;
          }(dateParts, opts)), result;
        },
        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
          if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
            for (var match, today = new Date(), date = ""; match = getTokenizer(opts).exec(opts.inputFormat);) {
              "d" === match[0].charAt(0) ? date += pad(today.getDate(), match[0].length) : "m" === match[0].charAt(0) ? date += pad(today.getMonth() + 1, match[0].length) : "yyyy" === match[0] ? date += today.getFullYear().toString() : "y" === match[0].charAt(0) && (date += pad(today.getYear(), match[0].length));
            }

            this.inputmask._valueSet(date), $(this).trigger("setvalue");
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts);
        },
        casing: function casing(elem, test, pos, validPositions) {
          return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
        },
        insertMode: !1
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($) {
    return $;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports) {
  module.exports = jQuery;
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__,
      __WEBPACK_AMD_DEFINE_ARRAY__,
      __WEBPACK_AMD_DEFINE_RESULT__,
      _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(5), __webpack_require__(6)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, window, document, undefined) {
    var ua = navigator.userAgent,
        mobile = isInputEventSupported("touchstart"),
        iemobile = /iemobile/i.test(ua),
        iphone = /iphone/i.test(ua) && !iemobile;

    function Inputmask(alias, options, internal) {
      if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
      this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));
    }

    function resolveAlias(aliasStr, options, opts) {
      var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
      return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
    }

    function generateMaskSet(opts, nocache) {
      function generateMask(mask, metadata, opts) {
        var regexMask = !1;

        if (null !== mask && "" !== mask || ((regexMask = null !== opts.regex) ? mask = (mask = opts.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (regexMask = !0, mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
          var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
          mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
        }

        var masksetDefinition,
            maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
        return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {
          mask: mask,
          maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
          validPositions: {},
          _buffer: undefined,
          buffer: undefined,
          tests: {},
          excludes: {},
          metadata: metadata,
          maskLength: undefined
        }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition;
      }

      if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
        if (opts.mask.length > 1) {
          if (null === opts.keepStatic) {
            opts.keepStatic = "auto";

            for (var i = 0; i < opts.mask.length; i++) {
              if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                opts.keepStatic = !0;
                break;
              }
            }
          }

          var altMask = opts.groupmarker[0];
          return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
            altMask.length > 1 && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
          }), generateMask(altMask += opts.groupmarker[1], opts.mask, opts);
        }

        opts.mask = opts.mask.pop();
      }

      return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);
    }

    function isInputEventSupported(eventName) {
      var el = document.createElement("input"),
          evName = "on" + eventName,
          isSupported = evName in el;
      return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), el = null, isSupported;
    }

    function maskScope(actionObj, maskset, opts) {
      maskset = maskset || this.maskset, opts = opts || this.opts;
      var undoValue,
          $el,
          maxLength,
          colorMask,
          inputmask = this,
          el = this.el,
          isRTL = this.isRTL,
          skipKeyPressEvent = !1,
          skipInputEvent = !1,
          ignorable = !1,
          mouseEnter = !1,
          originalPlaceholder = "";

      function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
        var greedy = opts.greedy;
        clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
        var ndxIntlzr,
            test,
            testPos,
            maskTemplate = [],
            pos = 0,
            lvp = getLastValidPosition();

        do {
          if (!0 === baseOnInput && getMaskSet().validPositions[pos]) testPos = clearOptionalTail && !0 === getMaskSet().validPositions[pos].match.optionality && getMaskSet().validPositions[pos + 1] === undefined && (!0 === getMaskSet().validPositions[pos].generatedInput || getMaskSet().validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : getMaskSet().validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test));else {
            testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
            var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
            !1 === jitMasking || jitMasking === undefined || pos < lvp || "number" == typeof jitMasking && isFinite(jitMasking) && jitMasking > pos ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)) : test.jit && test.optionalQuantifier;
          }
          "auto" === opts.keepStatic && test.newBlockMarker && null !== test.fn && (opts.keepStatic = pos - 1), pos++;
        } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);

        return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && getMaskSet().maskLength !== undefined || (getMaskSet().maskLength = pos - 1), opts.greedy = greedy, maskTemplate;
      }

      function getMaskSet() {
        return maskset;
      }

      function resetMaskSet(soft) {
        var maskset = getMaskSet();
        maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
      }

      function getLastValidPosition(closestTo, strict, validPositions) {
        var before = -1,
            after = -1,
            valids = validPositions || getMaskSet().validPositions;

        for (var posNdx in closestTo === undefined && (closestTo = -1), valids) {
          var psNdx = parseInt(posNdx);
          valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), psNdx >= closestTo && (after = psNdx));
        }

        return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
      }

      function getDecisionTaker(tst) {
        var decisionTaker = tst.locator[tst.alternation];
        return "string" == typeof decisionTaker && decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]), decisionTaker !== undefined ? decisionTaker.toString() : "";
      }

      function getLocator(tst, align) {
        var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
        if ("" !== locator) for (; locator.length < align;) {
          locator += "0";
        }
        return locator;
      }

      function determineTestTemplate(pos, tests) {
        for (var tstLocator, closest, bestMatch, altTest = getTest(pos = pos > 0 ? pos - 1 : 0), targetLocator = getLocator(altTest), ndx = 0; ndx < tests.length; ndx++) {
          var tst = tests[ndx];
          tstLocator = getLocator(tst, targetLocator.length);
          var distance = Math.abs(tstLocator - targetLocator);
          (closest === undefined || "" !== tstLocator && distance < closest || bestMatch && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, bestMatch = tst);
        }

        return bestMatch;
      }

      function getTestTemplate(pos, ndxIntlzr, tstPs) {
        return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
      }

      function getTest(pos, tests) {
        return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : (tests || getTests(pos))[0];
      }

      function positionCanMatchDefinition(pos, def) {
        for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
          if (tests[tndx].match && tests[tndx].match.def === def) {
            valid = !0;
            break;
          }
        }

        return valid;
      }

      function getTests(pos, ndxIntlzr, tstPs) {
        var latestMatch,
            maskTokens = getMaskSet().maskToken,
            testPos = ndxIntlzr ? tstPs : 0,
            ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
            matches = [],
            insertStop = !1,
            cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

        function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
          function handleMatch(match, loopNdx, quantifierRecurse) {
            function isFirstMatch(latestMatch, tokenGroup) {
              var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
              return firstMatch || $.each(tokenGroup.matches, function (ndx, match) {
                if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : !0 === match.isOptional ? firstMatch = isFirstMatch(latestMatch, match) : !0 === match.isAlternate && (firstMatch = isFirstMatch(latestMatch, match)), firstMatch) return !1;
              }), firstMatch;
            }

            function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
              var bestMatch, indexPos;

              if ((getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
                if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
                    ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos);
              }), bestMatch) {
                var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation],
                    locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
              }

              return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
            }

            function isSubsetOf(source, target) {
              function expand(pattern) {
                for (var start, end, expanded = [], i = 0, l = pattern.length; i < l; i++) {
                  if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end;) {
                    expanded.push(String.fromCharCode(start));
                  } else start = pattern.charCodeAt(i), expanded.push(pattern.charAt(i));
                }

                return expanded.join("");
              }

              return opts.regex && null !== source.match.fn && null !== target.match.fn ? -1 !== expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) : source.match.def === target.match.nativeDef;
            }

            function setMergeLocators(targetMatch, altMatch) {
              if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && -1 === targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation])) {
                targetMatch.mloc = targetMatch.mloc || {};
                var locNdx = targetMatch.locator[targetMatch.alternation];

                if (locNdx !== undefined) {
                  if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), targetMatch.mloc[locNdx] === undefined && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), altMatch !== undefined) {
                    for (var ndx in altMatch.mloc) {
                      "string" == typeof ndx && (ndx = ndx.split(",")[0]), targetMatch.mloc[ndx] === undefined && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                    }

                    targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                  }

                  return !0;
                }

                targetMatch.alternation = undefined;
              }

              return !1;
            }

            if (testPos > 5e3) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
            if (testPos === pos && match.matches === undefined) return matches.push({
              match: match,
              locator: loopNdx.reverse(),
              cd: cacheDependency,
              mloc: {}
            }), !0;

            if (match.matches !== undefined) {
              if (match.isGroup && quantifierRecurse !== match) {
                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse)) return !0;
              } else if (match.isOptional) {
                var optionalToken = match;

                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                  if ($.each(matches, function (ndx, mtch) {
                    mtch.match.optionality = !0;
                  }), latestMatch = matches[matches.length - 1].match, quantifierRecurse !== undefined || !isFirstMatch(latestMatch, optionalToken)) return !0;
                  insertStop = !0, testPos = pos;
                }
              } else if (match.isAlternator) {
                var maltMatches,
                    alternateToken = match,
                    malternateMatches = [],
                    currentMatches = matches.slice(),
                    loopNdxCnt = loopNdx.length,
                    altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;

                if (-1 === altIndex || "string" == typeof altIndex) {
                  var amndx,
                      currentPos = testPos,
                      ndxInitializerClone = ndxInitializer.slice(),
                      altIndexArr = [];
                  if ("string" == typeof altIndex) altIndexArr = altIndex.split(",");else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                    altIndexArr.push(amndx.toString());
                  }

                  if (getMaskSet().excludes[pos]) {
                    for (var altIndexArrClone = altIndexArr.slice(), i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) {
                      altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                    }

                    0 === altIndexArr.length && (getMaskSet().excludes[pos] = undefined, altIndexArr = altIndexArrClone);
                  }

                  (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));

                  for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                    amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), maltMatches = matches.slice(), testPos = currentPos, matches = [];

                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                      var altMatch = maltMatches[ndx1],
                          dropMatch = !1;
                      altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);

                      for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                        var altMatch2 = malternateMatches[ndx2];

                        if ("string" != typeof altIndex || altMatch.alternation !== undefined && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                          if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                            dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                            break;
                          }

                          if (isSubsetOf(altMatch, altMatch2)) {
                            setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                            break;
                          }

                          if (isSubsetOf(altMatch2, altMatch)) {
                            setMergeLocators(altMatch2, altMatch);
                            break;
                          }

                          if (target = altMatch2, null === (source = altMatch).match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1)) {
                            setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                            break;
                          }
                        }
                      }

                      dropMatch || malternateMatches.push(altMatch);
                    }
                  }

                  matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();
                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);

                if (match) return !0;
              } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];

                if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)) {
                  if ((latestMatch = matches[matches.length - 1].match).optionalQuantifier = qndx > qt.quantifier.min - 1, latestMatch.jit = qndx + tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, isFirstMatch(latestMatch, tokenGroup) && qndx > qt.quantifier.min - 1) {
                    insertStop = !0, testPos = pos;
                    break;
                  }

                  if (qt.quantifier.jit !== undefined && isNaN(qt.quantifier.max) && latestMatch.optionalQuantifier && getMaskSet().validPositions[pos - 1] === undefined) {
                    matches.pop(), insertStop = !0, testPos = pos, cacheDependency = undefined;
                    break;
                  }

                  return !0;
                }
              } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
            } else testPos++;

            var source, target;
          }

          for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
            if (!0 !== maskToken.matches[tndx].isQuantifier) {
              var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
              if (match && testPos === pos) return match;
              if (testPos > pos) break;
            }
          }
        }

        if (pos > -1) {
          if (ndxIntlzr === undefined) {
            for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1;) {
              previousPos--;
            }

            test !== undefined && previousPos > -1 && (ndxInitializer = function (pos, tests) {
              var locator = [];
              return $.isArray(tests) || (tests = [tests]), tests.length > 0 && (tests[0].alternation === undefined ? 0 === (locator = determineTestTemplate(pos, tests.slice()).locator.slice()).length && (locator = tests[0].locator.slice()) : $.each(tests, function (ndx, tst) {
                if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice();else for (var i = 0; i < locator.length; i++) {
                  tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                }
              })), locator;
            }(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
          }

          if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return getMaskSet().tests[pos];

          for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
            var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
            if (match && testPos === pos || testPos > pos) break;
          }
        }

        return (0 === matches.length || insertStop) && matches.push({
          match: {
            fn: null,
            optionality: !1,
            casing: null,
            def: "",
            placeholder: ""
          },
          locator: [],
          mloc: {},
          cd: cacheDependency
        }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? $.extend(!0, [], matches) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), getMaskSet().tests[pos]);
      }

      function getBufferTemplate() {
        return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), getMaskSet()._buffer;
      }

      function getBuffer(noCache) {
        return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), getMaskSet().buffer;
      }

      function refreshFromBuffer(start, end, buffer) {
        var i, p;
        if (!0 === start) resetMaskSet(), start = 0, end = buffer.length;else for (i = start; i < end; i++) {
          delete getMaskSet().validPositions[i];
        }

        for (p = start, i = start; i < end; i++) {
          if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {
            var valResult = isValid(p, buffer[i], !0, !0);
            !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);
          }
        }
      }

      function checkAlternationMatch(altArr1, altArr2, na) {
        for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) {
          -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
        }

        for (var alndx = 0; alndx < altArr1.length; alndx++) {
          if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
            isMatch = !0;
            break;
          }
        }

        return isMatch;
      }

      function alternate(pos, c, strict, fromSetValid, rAltPos) {
        var lastAlt,
            alternation,
            altPos,
            prevAltPos,
            i,
            validPos,
            decisionPos,
            validPsClone = $.extend(!0, {}, getMaskSet().validPositions),
            isValidRslt = !1,
            lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition();
        if (-1 === lAltPos && rAltPos === undefined) prevAltPos = getTest(lastAlt = 0), alternation = prevAltPos.alternation;else for (; lAltPos >= 0; lAltPos--) {
          if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {
            if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
            lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, prevAltPos = altPos;
          }
        }

        if (alternation !== undefined) {
          decisionPos = parseInt(lastAlt), getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [], !0 !== pos && getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos));
          var validInputsClone = [],
              staticInputsBeforePos = 0;

          for (i = decisionPos; i < getLastValidPosition(undefined, !0) + 1; i++) {
            (validPos = getMaskSet().validPositions[i]) && !0 !== validPos.generatedInput ? validInputsClone.push(validPos.input) : i < pos && staticInputsBeforePos++, delete getMaskSet().validPositions[i];
          }

          for (; getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10;) {
            var posOffset = -1 * staticInputsBeforePos,
                validInputs = validInputsClone.slice();

            for (getMaskSet().tests[decisionPos] = undefined, resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0;) {
              var input = validInputs.shift();
              if (!(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;
            }

            if (isValidRslt && c !== undefined) {
              var targetLvp = getLastValidPosition(pos) + 1;

              for (i = decisionPos; i < getLastValidPosition() + 1; i++) {
                ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + posOffset && posOffset++;
              }

              isValidRslt = isValid((pos += posOffset) > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
            }

            if (isValidRslt) break;

            if (resetMaskSet(), prevAltPos = getTest(decisionPos), getMaskSet().validPositions = $.extend(!0, {}, validPsClone), !getMaskSet().excludes[decisionPos]) {
              isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
              break;
            }

            var decisionTaker = getDecisionTaker(prevAltPos);

            if (-1 !== getMaskSet().excludes[decisionPos].indexOf(decisionTaker)) {
              isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
              break;
            }

            for (getMaskSet().excludes[decisionPos].push(decisionTaker), i = decisionPos; i < getLastValidPosition(undefined, !0) + 1; i++) {
              delete getMaskSet().validPositions[i];
            }
          }
        }

        return getMaskSet().excludes[decisionPos] = undefined, isValidRslt;
      }

      function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
        function isSelection(posObj) {
          return isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;
        }

        strict = !0 === strict;
        var maskPos = pos;

        function _isValid(position, c, strict) {
          var rslt = !1;
          return $.each(getTests(position), function (ndx, tst) {
            var test = tst.match;

            if (getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
              c: getPlaceholder(position, test, !0) || test.def,
              pos: position
            })) {
              var elem = rslt.c !== undefined ? rslt.c : c,
                  validatedPos = position;
              return elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem, rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [rslt.remove]), $.each(rslt.remove.sort(function (a, b) {
                return b - a;
              }), function (ndx, lmnt) {
                revalidateMask({
                  begin: lmnt,
                  end: lmnt + 1
                });
              })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [rslt.insert]), $.each(rslt.insert.sort(function (a, b) {
                return a - b;
              }), function (ndx, lmnt) {
                isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
              })), !0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos), (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (revalidateMask(pos, $.extend({}, tst, {
                input: function (elem, test, pos) {
                  switch (opts.casing || test.casing) {
                    case "upper":
                      elem = elem.toUpperCase();
                      break;

                    case "lower":
                      elem = elem.toLowerCase();
                      break;

                    case "title":
                      var posBefore = getMaskSet().validPositions[pos - 1];
                      elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                      break;

                    default:
                      if ($.isFunction(opts.casing)) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);
                      }

                  }

                  return elem;
                }(elem, test, validatedPos)
              }), fromSetValid, validatedPos) || (rslt = !1), !1);
            }
          }), rslt;
        }

        pos.begin !== undefined && (maskPos = isRTL ? pos.end : pos.begin);
        var result = !0,
            positionsClone = $.extend(!0, {}, getMaskSet().validPositions);

        if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, getMaskSet())), !0 === result) {
          if (trackbackPositions(undefined, maskPos, !0), (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {
            var currentPosValid = getMaskSet().validPositions[maskPos];

            if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
              if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                if (!1 !== (result = _isValid(nPos, c, strict))) {
                  result = trackbackPositions(maskPos, result.pos !== undefined ? result.pos : nPos) || result, maskPos = nPos;
                  break;
                }
              }
            } else result = {
              caret: seekNext(maskPos)
            };
          }

          !1 !== result || !1 === opts.keepStatic || null != opts.regex && !isComplete(getBuffer()) || strict || !0 === fromAlternate || (result = alternate(maskPos, c, strict, fromSetValid)), !0 === result && (result = {
            pos: maskPos
          });
        }

        if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {
          var postResult = opts.postValidation(getBuffer(!0), result, opts);

          if (postResult !== undefined) {
            if (postResult.refreshFromBuffer && postResult.buffer) {
              var refresh = postResult.refreshFromBuffer;
              refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);
            }

            result = !0 === postResult ? result : postResult;
          }
        }

        return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
      }

      function trackbackPositions(originalPos, newPos, fillOnly) {
        var result;
        if (originalPos === undefined) for (originalPos = newPos - 1; originalPos > 0 && !getMaskSet().validPositions[originalPos]; originalPos--) {
          ;
        }

        for (var ps = originalPos; ps < newPos; ps++) {
          if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {
            var vp = 0 == ps ? getTest(ps) : getMaskSet().validPositions[ps - 1];

            if (vp) {
              var tests = getTests(ps).slice();
              "" === tests[tests.length - 1].match.def && tests.pop();
              var bestMatch = determineTestTemplate(ps, tests);

              if ((bestMatch = $.extend({}, bestMatch, {
                input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
              })).generatedInput = !0, revalidateMask(ps, bestMatch, !0), !0 !== fillOnly) {
                var cvpInput = getMaskSet().validPositions[newPos].input;
                getMaskSet().validPositions[newPos] = undefined, result = isValid(newPos, cvpInput, !0, !0);
              }
            }
          }
        }

        return result;
      }

      function revalidateMask(pos, validTest, fromSetValid, validatedPos) {
        function IsEnclosedStatic(pos, valids, selection) {
          var posMatch = valids[pos];

          if (posMatch !== undefined && (null === posMatch.match.fn && !0 !== posMatch.match.optionality || posMatch.input === opts.radixPoint)) {
            var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && null === valids[pos - 1].match.fn && valids[pos - 1] : valids[pos - 1],
                nextMatch = selection.end > pos + 1 ? valids[pos + 1] && null === valids[pos + 1].match.fn && valids[pos + 1] : valids[pos + 1];
            return prevMatch && nextMatch;
          }

          return !1;
        }

        var begin = pos.begin !== undefined ? pos.begin : pos,
            end = pos.end !== undefined ? pos.end : pos;

        if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = validatedPos !== undefined ? validatedPos : begin, begin !== end || opts.insertMode && getMaskSet().validPositions[validatedPos] !== undefined && fromSetValid === undefined) {
          var positionsClone = $.extend(!0, {}, getMaskSet().validPositions),
              lvp = getLastValidPosition(undefined, !0);

          for (getMaskSet().p = begin, i = lvp; i >= begin; i--) {
            getMaskSet().validPositions[i] && "+" === getMaskSet().validPositions[i].match.nativeDef && (opts.isNegative = !1), delete getMaskSet().validPositions[i];
          }

          var valid = !0,
              j = validatedPos,
              needsValidation = (getMaskSet().validPositions, !1),
              posMatch = j,
              i = j;

          for (validTest && (getMaskSet().validPositions[validatedPos] = $.extend(!0, {}, validTest), posMatch++, j++, begin < end && i++); i <= lvp; i++) {
            var t = positionsClone[i];

            if (t !== undefined && (i >= end || i >= begin && !0 !== t.generatedInput && IsEnclosedStatic(i, positionsClone, {
              begin: begin,
              end: end
            }))) {
              for (; "" !== getTest(posMatch).match.def;) {
                if (!1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.nativeDef === t.match.nativeDef) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), getMaskSet().validPositions[posMatch].input = t.input, trackbackPositions(undefined, posMatch, !0), j = posMatch + 1, valid = !0;else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                  var result = isValid(posMatch, t.input, !0, !0);
                  valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch + 1, needsValidation = !0;
                } else if (!(valid = !0 === t.generatedInput || t.input === opts.radixPoint && !0 === opts.numericInput) && "" === getTest(posMatch).match.def) break;
                if (valid) break;
                posMatch++;
              }

              "" == getTest(posMatch).match.def && (valid = !1), posMatch = j;
            }

            if (!valid) break;
          }

          if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), !1;
        } else validTest && (getMaskSet().validPositions[validatedPos] = $.extend(!0, {}, validTest));

        return resetMaskSet(!0), !0;
      }

      function isMask(pos, strict) {
        var test = getTestTemplate(pos).match;
        if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;

        if (!0 !== strict && pos > -1) {
          var tests = getTests(pos);
          return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
        }

        return !1;
      }

      function seekNext(pos, newBlock) {
        for (var position = pos + 1; "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position));) {
          position++;
        }

        return position;
      }

      function seekPrevious(pos, newBlock) {
        var tests,
            position = pos;
        if (position <= 0) return 0;

        for (; --position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && ((tests = getTests(position)).length < 2 || 2 === tests.length && "" === tests[1].match.def));) {
          ;
        }

        return position;
      }

      function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
        if (event && $.isFunction(opts.onBeforeWrite)) {
          var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);

          if (result) {
            if (result.refreshFromBuffer) {
              var refresh = result.refreshFromBuffer;
              refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = getBuffer(!0);
            }

            caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);
          }
        }

        if (input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : caret(input, caretPos), !0 === triggerEvents)) {
          var $input = $(input),
              nptVal = input.inputmask._valueGet();

          skipInputEvent = !0, $input.trigger("input"), setTimeout(function () {
            nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete");
          }, 0);
        }
      }

      function getPlaceholder(pos, test, returnPL) {
        if ((test = test || getTest(pos).match).placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;

        if (null === test.fn) {
          if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
            var prevTest,
                tests = getTests(pos),
                staticAlternations = [];
            if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) {
              if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
          }

          return test.def;
        }

        return opts.placeholder.charAt(pos % opts.placeholder.length);
      }

      var valueBuffer,
          EventRuler = {
        on: function on(input, eventName, eventHandler) {
          var ev = function ev(e) {
            var that = this;

            if (that.inputmask === undefined && "FORM" !== this.nodeName) {
              var imOpts = $.data(that, "_inputmask_opts");
              imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that);
            } else {
              if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                switch (e.type) {
                  case "input":
                    if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();

                    if (mobile) {
                      var args = arguments;
                      return setTimeout(function () {
                        eventHandler.apply(that, args), caret(that, that.inputmask.caretPos, undefined, !0);
                      }, 0), !1;
                    }

                    break;

                  case "keydown":
                    skipKeyPressEvent = !1, skipInputEvent = !1;
                    break;

                  case "keypress":
                    if (!0 === skipKeyPressEvent) return e.preventDefault();
                    skipKeyPressEvent = !0;
                    break;

                  case "click":
                    if (iemobile || iphone) {
                      var args = arguments;
                      return setTimeout(function () {
                        eventHandler.apply(that, args);
                      }, 0), !1;
                    }

                }

                var returnVal = eventHandler.apply(that, arguments);
                return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
              }

              e.preventDefault();
            }
          };

          input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
        },
        off: function off(input, event) {
          var events;
          input.inputmask && input.inputmask.events && (event ? (events = [])[event] = input.inputmask.events[event] : events = input.inputmask.events, $.each(events, function (eventName, evArr) {
            for (; evArr.length > 0;) {
              var ev = evArr.pop();
              -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
            }

            delete input.inputmask.events[eventName];
          }));
        }
      },
          EventHandlers = {
        keydownEvent: function keydownEvent(e) {
          var $input = $(this),
              k = e.keyCode,
              pos = caret(this);
          if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(), handleRemove(0, k, pos), writeBuffer(this, getBuffer(!0), getMaskSet().p, e, this.inputmask._valueGet() !== getBuffer().join(""));else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
            e.preventDefault();
            var caretPos = seekNext(getLastValidPosition());
            caret(this, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
          } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), caret(this, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(this, !0, !1, undoValue.split("")), $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB && (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(this, pos.begin, pos.end))) : (opts.insertMode = !opts.insertMode, this.setAttribute("im-insert", opts.insertMode));
          opts.onKeyDown.call(this, e, getBuffer(), caret(this).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);
        },
        keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
          var input = this,
              $input = $(input),
              k = e.which || e.charCode || e.keyCode;
          if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), setTimeout(function () {
            $input.trigger("change");
          }, 0)), !0;

          if (k) {
            46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
            var forwardPosition,
                pos = checkval ? {
              begin: ndx,
              end: ndx
            } : caret(input),
                c = String.fromCharCode(k),
                offset = 0;

            if (opts._radixDance && opts.numericInput) {
              var caretPos = getBuffer().indexOf(opts.radixPoint.charAt(0)) + 1;
              pos.begin <= caretPos && (k === opts.radixPoint.charCodeAt(0) && (offset = 1), pos.begin -= 1, pos.end -= 1);
            }

            getMaskSet().writeOutBuffer = !0;
            var valResult = isValid(pos, c, strict);

            if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), getMaskSet().p = forwardPosition), forwardPosition = (opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition) + offset, !1 !== writeOut && (setTimeout(function () {
              opts.onKeyValidation.call(input, k, valResult, opts);
            }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {
              var buffer = getBuffer();
              writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval);
            }

            if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult;
          }
        },
        pasteEvent: function pasteEvent(e) {
          var tempValue,
              ev = e.originalEvent || e,
              inputValue = ($(this), this.inputmask._valueGet(!0)),
              caretPos = caret(this);
          isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
          var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
              valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
          if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;else {
            if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
            inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
          }
          var pasteValue = inputValue;

          if ($.isFunction(opts.onBeforePaste)) {
            if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
            pasteValue || (pasteValue = inputValue);
          }

          return checkVal(this, !1, !1, pasteValue.toString().split("")), writeBuffer(this, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), e.preventDefault();
        },
        inputFallBackEvent: function inputFallBackEvent(e) {
          var input = this,
              inputValue = input.inputmask._valueGet();

          if (getBuffer().join("") !== inputValue) {
            var caretPos = caret(input);

            if (inputValue = function (input, inputValue, caretPos) {
              if (iemobile) {
                var inputChar = inputValue.replace(getBuffer().join(""), "");

                if (1 === inputChar.length) {
                  var iv = inputValue.split("");
                  iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                }
              }

              return inputValue;
            }(0, inputValue = function (input, inputValue, caretPos) {
              return "." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && ((inputValue = inputValue.split(""))[caretPos.begin - 1] = opts.radixPoint.charAt(0), inputValue = inputValue.join("")), inputValue;
            }(0, inputValue, caretPos), caretPos), getBuffer().join("") !== inputValue) {
              var buffer = getBuffer().join(""),
                  offset = !opts.numericInput && inputValue.length > buffer.length ? -1 : 0,
                  frontPart = inputValue.substr(0, caretPos.begin),
                  backPart = inputValue.substr(caretPos.begin),
                  frontBufferPart = buffer.substr(0, caretPos.begin + offset),
                  backBufferPart = buffer.substr(caretPos.begin + offset),
                  selection = caretPos,
                  entries = "",
                  isEntry = !1;

              if (frontPart !== frontBufferPart) {
                var i,
                    fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length;

                for (i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) {
                  ;
                }

                isEntry && (selection.begin = i - offset, entries += frontPart.slice(i, selection.end));
              }

              if (backPart !== backBufferPart && (backPart.length > backBufferPart.length ? entries += backPart.slice(0, 1) : backPart.length < backBufferPart.length && (selection.end += backBufferPart.length - backPart.length, isEntry || "" === opts.radixPoint || "" !== backPart || frontPart.charAt(selection.begin + offset - 1) !== opts.radixPoint || (selection.begin--, entries = opts.radixPoint))), writeBuffer(input, getBuffer(), {
                begin: selection.begin + offset,
                end: selection.end + offset
              }), entries.length > 0) $.each(entries.split(""), function (ndx, entry) {
                var keypress = new $.Event("keypress");
                keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
              });else {
                selection.begin === selection.end - 1 && (selection.begin = seekPrevious(selection.begin + 1), selection.begin === selection.end - 1 ? caret(input, selection.begin) : caret(input, selection.begin, selection.end));
                var keydown = new $.Event("keydown");
                keydown.keyCode = opts.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, keydown);
              }
              e.preventDefault();
            }
          }
        },
        beforeInputEvent: function beforeInputEvent(e) {
          if (e.cancelable) {
            var input = this;

            switch (e.inputType) {
              case "insertText":
                return $.each(e.data.split(""), function (ndx, entry) {
                  var keypress = new $.Event("keypress");
                  keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                }), e.preventDefault();

              case "deleteContentBackward":
                var keydown = new $.Event("keydown");
                return keydown.keyCode = Inputmask.keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown), e.preventDefault();

              case "deleteContentForward":
                var keydown = new $.Event("keydown");
                return keydown.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, keydown), e.preventDefault();
            }
          }
        },
        setValueEvent: function setValueEvent(e) {
          this.inputmask.refreshValue = !1;

          var value = e && e.detail ? e.detail[0] : arguments[1],
              value = value || this.inputmask._valueGet(!0);

          $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), checkVal(this, !0, !1, value = value.split("")), undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && this.inputmask._valueGet() === getBufferTemplate().join("") && this.inputmask._valueSet("");
        },
        focusEvent: function focusEvent(e) {
          var nptValue = this.inputmask._valueGet();

          opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (this.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(this, seekNext(getLastValidPosition()))), !0 === opts.positionCaretOnTab && !1 === mouseEnter && EventHandlers.clickEvent.apply(this, [e, !0]), undoValue = getBuffer().join("");
        },
        mouseleaveEvent: function mouseleaveEvent(e) {
          mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== this && (this.placeholder = originalPlaceholder);
        },
        clickEvent: function clickEvent(e, tabbed) {
          var input = this;
          setTimeout(function () {
            if (document.activeElement === input) {
              var selectedCaret = caret(input);
              if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                case "none":
                  break;

                case "select":
                  caret(input, 0, getBuffer().length);
                  break;

                case "ignore":
                  caret(input, seekNext(getLastValidPosition()));
                  break;

                case "radixFocus":
                  if (function (clickPos) {
                    if ("" !== opts.radixPoint) {
                      var vps = getMaskSet().validPositions;

                      if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                        if (clickPos < seekNext(-1)) return !0;
                        var radixPos = $.inArray(opts.radixPoint, getBuffer());

                        if (-1 !== radixPos) {
                          for (var vp in vps) {
                            if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                          }

                          return !0;
                        }
                      }
                    }

                    return !1;
                  }(selectedCaret.begin)) {
                    var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                    break;
                  }

                default:
                  var clickPosition = selectedCaret.begin,
                      lvclickPosition = getLastValidPosition(clickPosition, !0),
                      lastPosition = seekNext(lvclickPosition);
                  if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition));else {
                    var lvp = getMaskSet().validPositions[lvclickPosition],
                        tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp),
                        placeholder = getPlaceholder(lastPosition, tt.match);

                    if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                      var newPos = seekNext(lastPosition);
                      (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);
                    }

                    caret(input, lastPosition);
                  }
              }
            }
          }, 0);
        },
        cutEvent: function cutEvent(e) {
          $(this);
          var pos = caret(this),
              ev = e.originalEvent || e,
              clipboardData = window.clipboardData || ev.clipboardData,
              clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
          clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), handleRemove(0, Inputmask.keyCode.DELETE, pos), writeBuffer(this, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));
        },
        blurEvent: function blurEvent(e) {
          var $input = $(this);

          if (this.inputmask) {
            this.placeholder = originalPlaceholder;

            var nptValue = this.inputmask._valueGet(),
                buffer = getBuffer().slice();

            "" === nptValue && colorMask === undefined || (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), !1 === isComplete(buffer) && (setTimeout(function () {
              $input.trigger("incomplete");
            }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), writeBuffer(this, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), $input.trigger("change"));
          }
        },
        mouseenterEvent: function mouseenterEvent(e) {
          mouseEnter = !0, document.activeElement !== this && opts.showMaskOnHover && (this.placeholder = getBuffer().join(""));
        },
        submitEvent: function submitEvent(e) {
          undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""), opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), setTimeout(function () {
            writeBuffer(el, getBuffer());
          }, 0));
        },
        resetEvent: function resetEvent(e) {
          el.inputmask.refreshValue = !0, setTimeout(function () {
            $el.trigger("setvalue");
          }, 0);
        }
      };

      function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
        var inputmask = this || input.inputmask,
            inputValue = nptvl.slice(),
            charCodes = "",
            initialNdx = -1,
            result = undefined;
        if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx);else {
          var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
              matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
          matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), initialNdx = seekNext(initialNdx));
        }
        -1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, inputmask.caretPos = {
          begin: initialNdx
        }, $.each(inputValue, function (ndx, charCode) {
          if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++;else {
            var keypress = new $.Event("_checkval");
            keypress.which = charCode.charCodeAt(0), charCodes += charCode;
            var lvp = getLastValidPosition(undefined, !0);
            !function (ndx, charCodes) {
              return -1 !== getMaskTemplate(!0, 0, !1).slice(ndx, seekNext(ndx)).join("").replace(/'/g, "").indexOf(charCodes) && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || null === getTest(ndx).match.fn && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || null === getTest(ndx + 1).match.fn && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
            }(initialNdx, charCodes) ? (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin)) && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "") : result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1), result && (writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, !1), inputmask.caretPos = {
              begin: result.forwardPosition,
              end: result.forwardPosition
            });
          }
        }), writeOut && writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);
      }

      function unmaskedvalue(input) {
        if (input) {
          if (input.inputmask === undefined) return input.value;
          input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
        }

        var umValue = [],
            vps = getMaskSet().validPositions;

        for (var pndx in vps) {
          vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
        }

        var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");

        if ($.isFunction(opts.onUnMask)) {
          var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
          unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
        }

        return unmaskedValue;
      }

      function translatePosition(pos) {
        return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos), pos;
      }

      function caret(input, begin, end, notranslate) {
        var range;
        if (begin === undefined) return "selectionStart" in input ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), end = begin + range.text.length), {
          begin: notranslate ? begin : translatePosition(begin),
          end: notranslate ? end : translatePosition(end)
        };

        if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), begin.begin !== undefined && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), "number" == typeof begin) {
          begin = notranslate ? begin : translatePosition(begin), end = "number" == typeof (end = notranslate ? end : translatePosition(end)) ? end : begin;
          var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
          if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
            begin: begin,
            end: end
          }, "selectionStart" in input) input.selectionStart = begin, input.selectionEnd = end;else if (window.getSelection) {
            if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {
              var textNode = document.createTextNode("");
              input.appendChild(textNode);
            }

            range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
            var sel = window.getSelection();
            sel.removeAllRanges(), sel.addRange(range);
          } else input.createTextRange && ((range = input.createTextRange()).collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
          renderColorMask(input, {
            begin: begin,
            end: end
          });
        }
      }

      function determineLastRequiredPosition(returnDefinition) {
        var pos,
            testPos,
            buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0),
            bl = buffer.length,
            lvp = getLastValidPosition(),
            positions = {},
            lvTest = getMaskSet().validPositions[lvp],
            ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;

        for (pos = lvp + 1; pos < buffer.length; pos++) {
          testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
        }

        var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;

        for (pos = bl - 1; pos > lvp && ((testPos = positions[pos]).match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match); pos--) {
          bl--;
        }

        return returnDefinition ? {
          l: bl,
          def: positions[bl] ? positions[bl].match : undefined
        } : bl;
      }

      function clearOptionalTail(buffer) {
        buffer.length = 0;

        for (var lmnt, template = getMaskTemplate(!0, 0, !0, undefined, !0); (lmnt = template.shift()) !== undefined;) {
          buffer.push(lmnt);
        }

        return buffer;
      }

      function isComplete(buffer) {
        if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
        if ("*" === opts.repeat) return undefined;
        var complete = !1,
            lrp = determineLastRequiredPosition(!0),
            aml = seekPrevious(lrp.l);

        if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
          complete = !0;

          for (var i = 0; i <= aml; i++) {
            var test = getTestTemplate(i).match;

            if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
              complete = !1;
              break;
            }
          }
        }

        return complete;
      }

      function handleRemove(input, k, pos, strict, fromIsValid) {
        if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), isRTL)) {
          var pend = pos.end;
          pos.end = pos.begin, pos.begin = pend;
        }

        if (k === Inputmask.keyCode.BACKSPACE && pos.end - pos.begin < 1 ? (pos.begin = seekPrevious(pos.begin), getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), revalidateMask(pos), !0 !== strict && !1 !== opts.keepStatic || null !== opts.regex) {
          var result = alternate(!0);

          if (result) {
            var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
            (k !== Inputmask.keyCode.DELETE || pos.begin > newPos) && pos.begin;
          }
        }

        var lvp = getLastValidPosition(pos.begin, !0);
        if (lvp < pos.begin || -1 === pos.begin) getMaskSet().p = seekNext(lvp);else if (!0 !== strict && (getMaskSet().p = pos.begin, !0 !== fromIsValid)) for (; getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined;) {
          getMaskSet().p++;
        }
      }

      function initializeColorMask(input) {
        var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null),
            template = document.createElement("div");
        template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, colorMask = document.createElement("div"), input.inputmask.colorMask = colorMask, colorMask.className = "im-colormask", input.parentNode.insertBefore(colorMask, input), input.parentNode.removeChild(input), colorMask.appendChild(input), colorMask.appendChild(template), input.style.left = template.offsetLeft + "px", $(colorMask).on("mouseleave", function (e) {
          return EventHandlers.mouseleaveEvent.call(input, [e]);
        }), $(colorMask).on("mouseenter", function (e) {
          return EventHandlers.mouseenterEvent.call(input, [e]);
        }), $(colorMask).on("click", function (e) {
          return caret(input, function (clientx) {
            var caretPos,
                e = document.createElement("span");

            for (var style in computedStyle) {
              isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);
            }

            e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);

            var itl,
                inputText = input.inputmask._valueGet(),
                previousWidth = 0;

            for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
              if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                var offset1 = clientx - previousWidth,
                    offset2 = e.offsetWidth - clientx;
                e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                break;
              }

              previousWidth = e.offsetWidth;
            }

            return document.body.removeChild(e), caretPos;
          }(e.clientX)), EventHandlers.clickEvent.call(input, [e]);
        });
      }

      function renderColorMask(input, caretPos, clear) {
        var test,
            testPos,
            ndxIntlzr,
            maskTemplate = [],
            isStatic = !1,
            pos = 0;

        function setEntry(entry) {
          if (entry === undefined && (entry = ""), isStatic || null !== test.fn && testPos.input !== undefined) {
            if (isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def)) {
              isStatic = !1;
              var mtl = maskTemplate.length;
              maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>", maskTemplate.push(entry);
            } else maskTemplate.push(entry);
          } else isStatic = !0, maskTemplate.push("<span class='im-static'>" + entry);
        }

        if (colorMask !== undefined) {
          var buffer = getBuffer();

          if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {
            begin: caretPos,
            end: caretPos
          }), !0 !== clear) {
            var lvp = getLastValidPosition();

            do {
              getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), setEntry(buffer[pos])) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice(), !1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos ? setEntry(getPlaceholder(pos, test)) : isStatic = !1), pos++;
            } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);

            isStatic && setEntry(), document.activeElement === input && (maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end || caretPos.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), maskTemplate.splice(caretPos.end + 1, 0, "</mark>"));
          }

          var template = colorMask.getElementsByTagName("div")[0];
          template.innerHTML = maskTemplate.join(""), input.inputmask.positionColorMask(input, template);
        }
      }

      if (Inputmask.prototype.positionColorMask = function (input, template) {
        input.style.left = template.offsetLeft + "px";
      }, actionObj !== undefined) switch (actionObj.action) {
        case "isComplete":
          return el = actionObj.el, isComplete(getBuffer());

        case "unmaskedvalue":
          return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""), checkVal.call(this, undefined, !1, !1, valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), unmaskedvalue(el);

        case "mask":
          !function (elem) {
            EventRuler.off(elem);

            var isSupported = function (input, opts) {
              var elementType = input.getAttribute("type"),
                  isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;
              if (!isSupported) if ("INPUT" === input.tagName) {
                var el = document.createElement("input");
                el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
              } else isSupported = "partial";
              return !1 !== isSupported ? function (npt) {
                var valueGet, valueSet;

                function getter() {
                  return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                }

                function setter(value) {
                  valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue", [value]);
                }

                if (!npt.inputmask.__valueGet) {
                  if (!0 !== opts.noValuePatching) {
                    if (Object.getOwnPropertyDescriptor) {
                      "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
                        return object.__proto__;
                      } : function (object) {
                        return object.constructor.prototype;
                      });
                      var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                      valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                        get: getter,
                        set: setter,
                        configurable: !0
                      })) : "INPUT" !== npt.tagName && (valueGet = function valueGet() {
                        return this.textContent;
                      }, valueSet = function valueSet(value) {
                        this.textContent = value;
                      }, Object.defineProperty(npt, "value", {
                        get: getter,
                        set: setter,
                        configurable: !0
                      }));
                    } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));

                    npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                  }

                  npt.inputmask._valueGet = function (overruleRTL) {
                    return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                  }, npt.inputmask._valueSet = function (value, overruleRTL) {
                    valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                  }, valueGet === undefined && (valueGet = function valueGet() {
                    return this.value;
                  }, valueSet = function valueSet(value) {
                    this.value = value;
                  }, function (type) {
                    if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {
                      var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                        return elem.value;
                      },
                          valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                        return elem.value = value, elem;
                      };
                      $.valHooks[type] = {
                        get: function get(elem) {
                          if (elem.inputmask) {
                            if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                            var result = valhookGet(elem);
                            return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                          }

                          return valhookGet(elem);
                        },
                        set: function set(elem, value) {
                          var result,
                              $elem = $(elem);
                          return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue", [value]), result;
                        },
                        inputmaskpatch: !0
                      };
                    }
                  }(npt.type), function (npt) {
                    EventRuler.on(npt, "mouseenter", function (event) {
                      var $input = $(this),
                          value = this.inputmask._valueGet();

                      value !== getBuffer().join("") && $input.trigger("setvalue");
                    });
                  }(npt));
                }
              }(input) : input.inputmask = undefined, isSupported;
            }(elem, opts);

            if (!1 !== isSupported && ($el = $(el = elem), originalPlaceholder = el.placeholder, -1 === (maxLength = el !== undefined ? el.maxLength : undefined) && (maxLength = undefined), !0 === opts.colorMask && initializeColorMask(el), mobile && ("inputmode" in el && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), !0 === opts.disablePredictiveText && ("autocorrect" in el ? el.autocorrect = !1 : (!0 !== opts.colorMask && initializeColorMask(el), el.type = "password"))), !0 === isSupported && (el.setAttribute("im-insert", opts.insertMode), EventRuler.on(el, "submit", EventHandlers.submitEvent), EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), !0 !== opts.colorMask && (EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent)), EventRuler.on(el, "paste", EventHandlers.pasteEvent), EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
              var initialValue = $.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0);

              "" !== initialValue && checkVal(el, !0, !1, initialValue.split(""));
              var buffer = getBuffer().slice();
              undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && document.activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
            }
          }(el);
          break;

        case "format":
          return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, undefined, !0, !1, valueBuffer), actionObj.metadata ? {
            value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
            metadata: maskScope.call(this, {
              action: "getmetadata"
            }, maskset, opts)
          } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

        case "isValid":
          actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal.call(this, undefined, !0, !0, valueBuffer)) : actionObj.value = getBuffer().join("");

          for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) {
            ;
          }

          return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

        case "getemptymask":
          return getBufferTemplate().join("");

        case "remove":
          return el && el.inputmask && ($.data(el, "_inputmask_opts", null), $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), EventRuler.off(el), el.inputmask.colorMask && ((colorMask = el.inputmask.colorMask).removeChild(el), colorMask.parentNode.insertBefore(el, colorMask), colorMask.parentNode.removeChild(colorMask)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
            get: el.inputmask.__valueGet,
            set: el.inputmask.__valueSet,
            configurable: !0
          }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined), el;

        case "getmetadata":
          if ($.isArray(maskset.metadata)) {
            var maskTarget = getMaskTemplate(!0, 0, !1).join("");
            return $.each(maskset.metadata, function (ndx, mtdt) {
              if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
            }), maskTarget;
          }

          return maskset.metadata;
      }
    }

    return Inputmask.prototype = {
      dataAttribute: "data-inputmask",
      defaults: {
        placeholder: "_",
        optionalmarker: ["[", "]"],
        quantifiermarker: ["{", "}"],
        groupmarker: ["(", ")"],
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        regex: null,
        oncomplete: $.noop,
        onincomplete: $.noop,
        oncleared: $.noop,
        repeat: 0,
        greedy: !1,
        autoUnmask: !1,
        removeMaskOnSubmit: !1,
        clearMaskOnLostFocus: !0,
        insertMode: !0,
        clearIncomplete: !1,
        alias: null,
        onKeyDown: $.noop,
        onBeforeMask: null,
        onBeforePaste: function onBeforePaste(pastedValue, opts) {
          return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
        },
        onBeforeWrite: null,
        onUnMask: null,
        showMaskOnFocus: !0,
        showMaskOnHover: !0,
        onKeyValidation: $.noop,
        skipOptionalPartCharacter: " ",
        numericInput: !1,
        rightAlign: !1,
        undoOnEscape: !0,
        radixPoint: "",
        _radixDance: !1,
        groupSeparator: "",
        keepStatic: null,
        positionCaretOnTab: !0,
        tabThrough: !1,
        supportsInputType: ["text", "tel", "password", "search"],
        ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
        isComplete: null,
        preValidation: null,
        postValidation: null,
        staticDefinitionSymbol: undefined,
        jitMasking: !1,
        nullable: !0,
        inputEventOnly: !1,
        noValuePatching: !1,
        positionCaretOnClick: "lvp",
        casing: null,
        inputmode: "verbatim",
        colorMask: !1,
        disablePredictiveText: !1,
        importDataAttributes: !0
      },
      definitions: {
        9: {
          validator: "[0-9１-９]",
          definitionSymbol: "*"
        },
        a: {
          validator: "[A-Za-zА-яЁёÀ-ÿµ]",
          definitionSymbol: "*"
        },
        "*": {
          validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
        }
      },
      aliases: {},
      masksCache: {},
      mask: function mask(elems) {
        var that = this;
        return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
          var scopedOpts = $.extend(!0, {}, that.opts);

          if (function (npt, opts, userOptions, dataAttribute) {
            if (!0 === opts.importDataAttributes) {
              var option,
                  dataoptions,
                  optionData,
                  p,
                  importOption = function importOption(option, optionData) {
                null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData);
              },
                  attrOptions = npt.getAttribute(dataAttribute);

              if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = undefined, dataoptions) {
                if ("alias" === p.toLowerCase()) {
                  optionData = dataoptions[p];
                  break;
                }
              }

              for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), opts) {
                if (dataoptions) for (p in optionData = undefined, dataoptions) {
                  if (p.toLowerCase() === option.toLowerCase()) {
                    optionData = dataoptions[p];
                    break;
                  }
                }
                importOption(option, optionData);
              }
            }

            return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), Object.keys(userOptions).length;
          }(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
            var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
            maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
              action: "mask"
            }));
          }
        }), elems && elems[0] && elems[0].inputmask || this;
      },
      option: function option(options, noremask) {
        return "string" == typeof options ? this.opts[options] : "object" === (void 0 === options ? "undefined" : _typeof(options)) ? ($.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
      },
      unmaskedvalue: function unmaskedvalue(value) {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "unmaskedvalue",
          value: value
        });
      },
      remove: function remove() {
        return maskScope.call(this, {
          action: "remove"
        });
      },
      getemptymask: function getemptymask() {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "getemptymask"
        });
      },
      hasMaskedValue: function hasMaskedValue() {
        return !this.opts.autoUnmask;
      },
      isComplete: function isComplete() {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "isComplete"
        });
      },
      getmetadata: function getmetadata() {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "getmetadata"
        });
      },
      isValid: function isValid(value) {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "isValid",
          value: value
        });
      },
      format: function format(value, metadata) {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "format",
          value: value,
          metadata: metadata
        });
      },
      setValue: function setValue(value) {
        this.el && $(this.el).trigger("setvalue", [value]);
      },
      analyseMask: function analyseMask(mask, regexMask, opts) {
        var match,
            m,
            openingToken,
            currentOpeningToken,
            alternator,
            lastMatch,
            tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            escaped = !1,
            currentToken = new MaskToken(),
            openenings = [],
            maskTokens = [];

        function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
          this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        }

        function insertTestDefinition(mtoken, element, position) {
          position = position !== undefined ? position : mtoken.matches.length;
          var prevMatch = mtoken.matches[position - 1];
          if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
            fn: new RegExp(element, opts.casing ? "i" : ""),
            optionality: !1,
            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
            casing: null,
            def: element,
            placeholder: undefined,
            nativeDef: element
          }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function (ndx, lmnt) {
            prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
              fn: null,
              optionality: !1,
              newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && null !== prevMatch.fn,
              casing: null,
              def: opts.staticDefinitionSymbol || lmnt,
              placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
              nativeDef: (escaped ? "'" : "") + lmnt
            });
          })), escaped = !1;else {
            var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
            maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
              fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                this.test = maskdef.validator;
              }() : new RegExp("."),
              optionality: !1,
              newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
              casing: maskdef.casing,
              def: maskdef.definitionSymbol || element,
              placeholder: maskdef.placeholder,
              nativeDef: element
            }) : (mtoken.matches.splice(position++, 0, {
              fn: null,
              optionality: !1,
              newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && null !== prevMatch.fn,
              casing: null,
              def: opts.staticDefinitionSymbol || element,
              placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
              nativeDef: (escaped ? "'" : "") + element
            }), escaped = !1);
          }
        }

        function defaultCase() {
          if (openenings.length > 0) {
            if (insertTestDefinition(currentOpeningToken = openenings[openenings.length - 1], m), currentOpeningToken.isAlternator) {
              alternator = openenings.pop();

              for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
              }

              openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
            }
          } else insertTestDefinition(currentToken, m);
        }

        function groupify(matches) {
          var groupToken = new MaskToken(!0);
          return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
        }

        for (regexMask && (opts.optionalmarker[0] = undefined, opts.optionalmarker[1] = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
          if (m = match[0], regexMask) switch (m.charAt(0)) {
            case "?":
              m = "{0,1}";
              break;

            case "+":
            case "*":
              m = "{" + m + "}";
          }
          if (escaped) defaultCase();else switch (m.charAt(0)) {
            case "(?=":
            case "(?!":
            case "(?<=":
            case "(?<!":
              break;

            case opts.escapeChar:
              escaped = !0, regexMask && defaultCase();
              break;

            case opts.optionalmarker[1]:
            case opts.groupmarker[1]:
              if ((openingToken = openenings.pop()).openGroup = !1, openingToken !== undefined) {
                if (openenings.length > 0) {
                  if ((currentOpeningToken = openenings[openenings.length - 1]).matches.push(openingToken), currentOpeningToken.isAlternator) {
                    alternator = openenings.pop();

                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                      alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
                    }

                    openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                  }
                } else currentToken.matches.push(openingToken);
              } else defaultCase();
              break;

            case opts.optionalmarker[0]:
              openenings.push(new MaskToken(!1, !0));
              break;

            case opts.groupmarker[0]:
              openenings.push(new MaskToken(!0));
              break;

            case opts.quantifiermarker[0]:
              var quantifier = new MaskToken(!1, !1, !0),
                  mqj = (m = m.replace(/[{}]/g, "")).split("|"),
                  mq = mqj[0].split(","),
                  mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                  mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
              "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                min: mq0,
                max: mq1,
                jit: mqj[1]
              };
              var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;

              if ((match = matches.pop()).isAlternator) {
                matches.push(match), matches = match.matches;
                var groupToken = new MaskToken(!0),
                    tmpMatch = matches.pop();
                matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
              }

              match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
              break;

            case opts.alternatormarker:
              var groupQuantifier = function groupQuantifier(matches) {
                var lastMatch = matches.pop();
                return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch;
              };

              if (openenings.length > 0) {
                var subToken = (currentOpeningToken = openenings[openenings.length - 1]).matches[currentOpeningToken.matches.length - 1];
                lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
              } else lastMatch = groupQuantifier(currentToken.matches);

              if (lastMatch.isAlternator) openenings.push(lastMatch);else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
                lastMatch.openGroup = !1;
                var alternatorGroup = new MaskToken(!0);
                alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
              }
              break;

            default:
              defaultCase();
          }
        }

        for (; openenings.length > 0;) {
          openingToken = openenings.pop(), currentToken.matches.push(openingToken);
        }

        return currentToken.matches.length > 0 && (function verifyGroupMarker(maskToken) {
          maskToken && maskToken.matches && $.each(maskToken.matches, function (ndx, token) {
            var nextToken = maskToken.matches[ndx + 1];
            (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), verifyGroupMarker(token);
          });
        }(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && function reverseTokens(maskToken) {
          for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) {
            if (maskToken.matches.hasOwnProperty(match)) {
              var intMatch = parseInt(match);

              if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                var qt = maskToken.matches[match];
                maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
              }

              maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = ((st = maskToken.matches[match]) === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), st);
            }
          }

          var st;
          return maskToken;
        }(maskTokens[0]), maskTokens;
      }
    }, Inputmask.extendDefaults = function (options) {
      $.extend(!0, Inputmask.prototype.defaults, options);
    }, Inputmask.extendDefinitions = function (definition) {
      $.extend(!0, Inputmask.prototype.definitions, definition);
    }, Inputmask.extendAliases = function (alias) {
      $.extend(!0, Inputmask.prototype.aliases, alias);
    }, Inputmask.format = function (value, options, metadata) {
      return Inputmask(options).format(value, metadata);
    }, Inputmask.unmask = function (value, options) {
      return Inputmask(options).unmaskedvalue(value);
    }, Inputmask.isValid = function (value, options) {
      return Inputmask(options).isValid(value);
    }, Inputmask.remove = function (elems) {
      "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
        el.inputmask && el.inputmask.remove();
      });
    }, Inputmask.setValue = function (elems, value) {
      "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
        el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [value]);
      });
    }, Inputmask.escapeRegex = function (str) {
      return str.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1");
    }, Inputmask.keyCode = {
      BACKSPACE: 8,
      BACKSPACE_SAFARI: 127,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      X: 88,
      CONTROL: 17
    }, Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return window;
  }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return document;
  }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    return Inputmask.extendDefinitions({
      A: {
        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
        casing: "upper"
      },
      "&": {
        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
        casing: "upper"
      },
      "#": {
        validator: "[0-9A-Fa-f]",
        casing: "upper"
      }
    }), Inputmask.extendAliases({
      cssunit: {
        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
      },
      url: {
        regex: "(https?|ftp)//.*",
        autoUnmask: !1
      },
      ip: {
        mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
        definitions: {
          i: {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
            }
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue;
        },
        inputmode: "numeric"
      },
      email: {
        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        greedy: !1,
        casing: "lower",
        onBeforePaste: function onBeforePaste(pastedValue, opts) {
          return (pastedValue = pastedValue.toLowerCase()).replace("mailto:", "");
        },
        definitions: {
          "*": {
            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
          },
          "-": {
            validator: "[0-9A-Za-z-]"
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue;
        },
        inputmode: "email"
      },
      mac: {
        mask: "##:##:##:##:##:##"
      },
      vin: {
        mask: "V{13}9{4}",
        definitions: {
          V: {
            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
            casing: "upper"
          }
        },
        clearIncomplete: !0,
        autoUnmask: !0
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask, undefined) {
    function autoEscape(txt, opts) {
      for (var escapedTxt = "", i = 0; i < txt.length; i++) {
        Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
      }

      return escapedTxt;
    }

    return Inputmask.extendAliases({
      numeric: {
        mask: function mask(opts) {
          if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), isFinite(opts.integerDigits))) {
            var seps = Math.floor(opts.integerDigits / opts.groupSize),
                mod = opts.integerDigits % opts.groupSize;
            opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), opts.integerDigits < 1 && (opts.integerDigits = "*");
          }

          opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
          var mask = "[+]";

          if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", opts.digits !== undefined) {
            var radixDef = opts.decimalProtect ? ":" : opts.radixPoint,
                dq = opts.digits.toString().split(",");
            isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixDef + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + radixDef + ";{1," + opts.digits + "}]" : mask += radixDef + ";{" + opts.digits + "}");
          }

          return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;
        },
        placeholder: "",
        greedy: !1,
        digits: "*",
        digitsOptional: !0,
        enforceDigitsOnBlur: !1,
        radixPoint: ".",
        positionCaretOnClick: "radixFocus",
        groupSize: 3,
        groupSeparator: "",
        autoGroup: !1,
        allowMinus: !0,
        negationSymbol: {
          front: "-",
          back: ""
        },
        integerDigits: "+",
        integerOptional: !0,
        prefix: "",
        suffix: "",
        rightAlign: !0,
        decimalProtect: !0,
        min: null,
        max: null,
        step: 1,
        insertMode: !0,
        autoUnmask: !1,
        unmaskAsNumber: !1,
        inputmode: "numeric",
        preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset) {
          if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, "" === buffer.join("") || {
            caret: pos,
            dopost: !0
          });

          if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
            var radixPos = $.inArray(opts.radixPoint, buffer);
            if (-1 !== radixPos && maskset.validPositions[radixPos] !== undefined) return !0 === opts.numericInput ? pos === radixPos : {
              caret: radixPos + 1
            };
          }

          return !0;
        },
        postValidation: function postValidation(buffer, currentResult, opts) {
          var suffix = opts.suffix.split(""),
              prefix = opts.prefix.split("");
          if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;
          var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos,
              maskedValue = buffer.slice();
          opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());
          var charAtPos = maskedValue[caretPos];
          if (charAtPos === opts.groupSeparator && (charAtPos = maskedValue[caretPos += 1]), caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
          charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), prefix = prefix.join(""), suffix = suffix.join("");
          var processValue = maskedValue.join("").replace(prefix, "");

          if (processValue = (processValue = (processValue = (processValue = processValue.replace(suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "")).replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\?/g, "")), processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), "" !== processValue) {
            if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {
              var radixPosition = $.inArray(opts.radixPoint, processValue),
                  rpb = $.inArray(opts.radixPoint, maskedValue);
              -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);

              for (var i = 1; i <= opts.digits; i++) {
                opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
              }
            }

            if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join("");else {
              var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
              processValue = Inputmask(function (buffer, opts) {
                var postMask = "";

                if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {
                  var radixSplit = buffer.join("").split(opts.radixPoint);
                  radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}");
                }

                return postMask;
              }(processValue, opts), {
                numericInput: !0,
                jitMasking: !0,
                definitions: {
                  "*": {
                    validator: "[0-9?]",
                    cardinality: 1
                  }
                }
              }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);
            }
          }

          if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, processValue += opts.negationSymbol.back), processValue = processValue.split(""), charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) (caretPos = $.inArray("?", processValue)) > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0;else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
            var newCaretPos = $.inArray(charAtPos, processValue);
            -1 !== newCaretPos && (caretPos = newCaretPos);
          }
          opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());
          var rslt = {
            caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
            buffer: processValue,
            refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
          };
          return rslt.refreshFromBuffer ? rslt : currentResult;
        },
        onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
          if (e) switch (e.type) {
            case "keydown":
              return opts.postValidation(buffer, {
                caret: caretPos,
                dopost: !0
              }, opts);

            case "blur":
            case "checkval":
              var unmasked;

              if (function (opts) {
                opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done");
              }(opts), null !== opts.min || null !== opts.max) {
                if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                  unmaskAsNumber: !0
                })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {
                  caret: caretPos,
                  dopost: !0,
                  placeholder: "0"
                }, opts);
                if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {
                  caret: caretPos,
                  dopost: !0,
                  placeholder: "0"
                }, opts);
              }

              return opts.postValidation(buffer, {
                caret: caretPos,
                placeholder: "0",
                event: "blur"
              }, opts);

            case "_checkval":
              return {
                caret: caretPos
              };
          }
        },
        regex: {
          integerPart: function integerPart(opts, emptyCheck) {
            return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
          },
          integerNPart: function integerNPart(opts) {
            return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
          }
        },
        definitions: {
          "~": {
            validator: function validator(chrs, maskset, pos, strict, opts, isSelection) {
              var isValid;

              if ("k" === chrs || "m" === chrs) {
                isValid = {
                  insert: [],
                  c: 0
                };

                for (var i = 0, l = "k" === chrs ? 2 : 5; i < l; i++) {
                  isValid.insert.push({
                    pos: pos + i,
                    c: 0
                  });
                }

                return isValid.pos = pos + l, isValid;
              }

              if (!0 === (isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs))) {
                if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {
                  var processValue = maskset.buffer.join(""),
                      pvRadixSplit = (processValue = (processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).split(opts.radixPoint);
                  pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";

                  var bufferTemplate = maskset._buffer.join("");

                  for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$");) {
                    bufferTemplate = bufferTemplate.slice(1);
                  }

                  isValid = (processValue = (processValue = processValue.replace(bufferTemplate, "")).split(""))[pos] === undefined ? {
                    pos: pos,
                    remove: pos
                  } : {
                    pos: pos
                  };
                }
              } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (isValid = {
                insert: {
                  pos: pos,
                  c: 0
                },
                pos: pos + 1
              });

              return isValid;
            },
            cardinality: 1
          },
          "+": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
            },
            cardinality: 1,
            placeholder: ""
          },
          "-": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return opts.allowMinus && chrs === opts.negationSymbol.back;
            },
            cardinality: 1,
            placeholder: ""
          },
          ":": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]",
                  isValid = new RegExp(radix).test(chrs);
              return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                caret: pos + 1
              }), isValid;
            },
            cardinality: 1,
            placeholder: function placeholder(opts) {
              return opts.radixPoint;
            }
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
          var processValue = maskedValue.replace(opts.prefix, "");
          return processValue = (processValue = processValue.replace(opts.suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), processValue = (processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue;
        },
        isComplete: function isComplete(buffer, opts) {
          var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
          return maskedValue = (maskedValue = (maskedValue = (maskedValue = (maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).replace(opts.prefix, "")).replace(opts.suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts.radixPoint && (maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), isFinite(maskedValue);
        },
        onBeforeMask: function onBeforeMask(initialValue, opts) {
          if (opts.isNegative = undefined, "number" == typeof initialValue && "" !== opts.radixPoint && (initialValue = initialValue.toString().replace(".", opts.radixPoint)), initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), "" !== opts.radixPoint && isFinite(initialValue)) {
            var vs = initialValue.split("."),
                groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
            2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
          }

          var kommaMatches = initialValue.match(/,/g),
              dotMatches = initialValue.match(/\./g);

          if (initialValue = dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, "")).replace(",", opts.radixPoint) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, "")).replace(".", opts.radixPoint) : initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue.replace(/,/g, "") : initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {
            var decPart = initialValue.split(opts.radixPoint)[1].match(new RegExp("\\d*"))[0];

            if (parseInt(opts.digits) < decPart.toString().length) {
              var digitsFactor = Math.pow(10, parseInt(opts.digits));
              initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), initialValue = (initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor).toString().replace(".", opts.radixPoint);
            }
          }

          return function (buffer, opts) {
            if (opts.numericInput) {
              var radixPosition = $.inArray(opts.radixPoint, buffer);
              -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);

              for (var i = 1; i <= opts.digits; i++) {
                buffer[radixPosition + i] = buffer[radixPosition + i] || "0";
              }
            }

            return buffer;
          }(initialValue.toString().split(""), opts).join("");
        },
        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
          var $input = $(this);
          if (e.ctrlKey) switch (e.keyCode) {
            case Inputmask.keyCode.UP:
              $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
              break;

            case Inputmask.keyCode.DOWN:
              $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
          }
        }
      },
      currency: {
        prefix: "$ ",
        groupSeparator: ",",
        alias: "numeric",
        placeholder: "0",
        autoGroup: !0,
        digits: 2,
        digitsOptional: !1,
        clearMaskOnLostFocus: !1
      },
      decimal: {
        alias: "numeric"
      },
      integer: {
        alias: "numeric",
        digits: 0,
        radixPoint: ""
      },
      percentage: {
        alias: "numeric",
        digits: 2,
        digitsOptional: !0,
        radixPoint: ".",
        placeholder: "0",
        autoGroup: !1,
        min: 0,
        max: 100,
        suffix: " %",
        allowMinus: !1
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    function maskSort(a, b) {
      var maska = (a.mask || a).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""),
          maskb = (b.mask || b).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
      return maska.localeCompare(maskb);
    }

    var analyseMaskBase = Inputmask.prototype.analyseMask;
    return Inputmask.prototype.analyseMask = function (mask, regexMask, opts) {
      var maskGroups = {};
      return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (function reduceVariations(masks, previousVariation, previousmaskGroup) {
        previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, "" !== previousVariation && (previousmaskGroup[previousVariation] = {});

        for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) {
          maskGroup[variation = (mask = masks[i].mask || masks[i]).substr(0, 1)] = maskGroup[variation] || [], maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
        }

        for (var ndx in maskGroup) {
          maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
        }
      }((mask = mask.substr(1, mask.length - 2)).split(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0])), mask = function rebuild(maskGroup) {
        var mask = "",
            submasks = [];

        for (var ndx in maskGroup) {
          $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker[0] + maskGroup[ndx].join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1]) : submasks.push(ndx + rebuild(maskGroup[ndx]));
        }

        return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker[0] + submasks.join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1], mask;
      }(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
    }, Inputmask.extendAliases({
      abstractphone: {
        groupmarker: ["<", ">"],
        countrycode: "",
        phoneCodes: [],
        keepStatic: "auto",
        mask: function mask(opts) {
          return opts.definitions = {
            "#": Inputmask.prototype.definitions[9]
          }, opts.phoneCodes.sort(maskSort);
        },
        onBeforeMask: function onBeforeMask(value, opts) {
          var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
          return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), processedValue;
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue.replace(/[()#-]/g, "");
        },
        inputmode: "tel"
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__,
      __WEBPACK_AMD_DEFINE_ARRAY__,
      __WEBPACK_AMD_DEFINE_RESULT__,
      _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    return void 0 === $.fn.inputmask && ($.fn.inputmask = function (fn, options) {
      var nptmask,
          input = this[0];
      if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
        case "unmaskedvalue":
          return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

        case "remove":
          return this.each(function () {
            this.inputmask && this.inputmask.remove();
          });

        case "getemptymask":
          return input && input.inputmask ? input.inputmask.getemptymask() : "";

        case "hasMaskedValue":
          return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

        case "isComplete":
          return !input || !input.inputmask || input.inputmask.isComplete();

        case "getmetadata":
          return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

        case "setvalue":
          Inputmask.setValue(input, options);
          break;

        case "option":
          if ("string" != typeof options) return this.each(function () {
            if (void 0 !== this.inputmask) return this.inputmask.option(options);
          });
          if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
          break;

        default:
          return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
            nptmask.mask(this);
          });
      } else {
        if (Array.isArray(fn)) return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
          nptmask.mask(this);
        });
        if ("object" == (void 0 === fn ? "undefined" : _typeof(fn))) return nptmask = new Inputmask(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
          if (void 0 !== this.inputmask) return this.inputmask.option(fn);
          nptmask.mask(this);
        }) : this.each(function () {
          nptmask.mask(this);
        });
        if (void 0 === fn) return this.each(function () {
          (nptmask = new Inputmask(options)).mask(this);
        });
      }
    }), $.fn.inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}]);
"use strict";

// progressive-image.js, v1.2
// by Craig Buckler, @craigbuckler
if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function () {
  // start
  var pItem = document.getElementsByClassName('progressive replace'),
      pCount,
      timer; // scroll and resize events

  window.addEventListener('scroll', scroller, false);
  window.addEventListener('resize', scroller, false); // DOM mutation observer

  if (MutationObserver) {
    var observer = new MutationObserver(function () {
      if (pItem.length !== pCount) inView();
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    });
  } // initial check


  inView(); // throttled scroll/resize

  function scroller() {
    timer = timer || setTimeout(function () {
      timer = null;
      inView();
    }, 300);
  } // image in view?


  function inView() {
    if (pItem.length) requestAnimationFrame(function () {
      var wT = window.pageYOffset,
          wB = wT + window.innerHeight,
          cRect,
          pT,
          pB,
          p = 0;

      while (p < pItem.length) {
        cRect = pItem[p].getBoundingClientRect();
        pT = wT + cRect.top;
        pB = pT + cRect.height;

        if (wT < pB && wB > pT) {
          loadFullImage(pItem[p]);
          pItem[p].classList.remove('replace');
        } else p++;
      }

      pCount = pItem.length;
    });
  } // replace with full image


  function loadFullImage(item) {
    var href = item && (item.getAttribute('data-href') || item.href);
    if (!href) return; // load image

    var img = new Image();

    if (item.dataset) {
      img.srcset = item.dataset.srcset || '';
      img.sizes = item.dataset.sizes || '';
    }

    img.src = href;
    img.className = 'reveal';
    if (img.complete) addImg();else img.onload = addImg; // replace image

    function addImg() {
      requestAnimationFrame(function () {
        // disable click
        if (href === item.href) {
          item.style.cursor = 'default';
          item.addEventListener('click', function (e) {
            e.preventDefault();
          }, false);
        } // preview image


        var pImg = item.querySelector && item.querySelector('img.preview'); // add full image

        item.insertBefore(img, pImg && pImg.nextSibling).addEventListener('animationend', function () {
          // remove preview image
          if (pImg) {
            img.alt = pImg.alt || '';
            item.removeChild(pImg);
          }

          img.classList.remove('reveal');
        });
      });
    }
  }
}, false);