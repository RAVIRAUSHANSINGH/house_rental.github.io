(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [569], {
        6929: function() {},
        4233: function() {},
        4256: function() {},
        4950: function() {},
        2546: function(e, t, i) {
            "use strict";
            i.d(t, {
                tq: function() {
                    return b
                },
                o5: function() {
                    return S
                }
            });
            var s = i(7294),
                r = i(6523);

            function a(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function l(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : a(t[i]) && a(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : l(e[i], t[i]) : e[i] = t[i]
                })
            }

            function n(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function o(e = {}) {
                return e.pagination && void 0 === e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function c(e = "") {
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let p = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function u(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }
            let f = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function h(e, t) {
                return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
            }
            let m = (0, s.createContext)(null),
                g = (0, s.createContext)(null);

            function v() {
                return (v = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            let b = (0, s.forwardRef)(function(e, t) {
                let {
                    className: i,
                    tag: m = "div",
                    wrapperTag: b = "div",
                    children: w,
                    onSwiper: S,
                    ...y
                } = void 0 === e ? {} : e, E = !1, [T, x] = (0, s.useState)("swiper"), [C, M] = (0, s.useState)(null), [P, L] = (0, s.useState)(!1), k = (0, s.useRef)(!1), O = (0, s.useRef)(null), A = (0, s.useRef)(null), _ = (0, s.useRef)(null), z = (0, s.useRef)(null), I = (0, s.useRef)(null), $ = (0, s.useRef)(null), B = (0, s.useRef)(null), D = (0, s.useRef)(null), {
                    params: G,
                    passedParams: N,
                    rest: j,
                    events: R
                } = function(e = {}, t = !0) {
                    let i = {
                            on: {}
                        },
                        s = {},
                        n = {};
                    l(i, r.ZP.defaults), l(i, r.ZP.extendedDefaults), i._emitClasses = !0, i.init = !1;
                    let o = {},
                        d = p.map(e => e.replace(/_/, "")),
                        c = Object.assign({}, e);
                    return Object.keys(c).forEach(r => {
                        void 0 !== e[r] && (d.indexOf(r) >= 0 ? a(e[r]) ? (i[r] = {}, n[r] = {}, l(i[r], e[r]), l(n[r], e[r])) : (i[r] = e[r], n[r] = e[r]) : 0 === r.search(/on[A-Z]/) && "function" == typeof e[r] ? t ? s[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : o[r] = e[r])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {
                        params: i,
                        passedParams: n,
                        rest: o,
                        events: s
                    }
                }(y), {
                    slides: F,
                    slots: H
                } = function(e) {
                    let t = [],
                        i = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return s.Children.toArray(e).forEach(e => {
                        if (u(e)) t.push(e);
                        else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            let r = function e(t) {
                                let i = [];
                                return s.Children.toArray(t).forEach(t => {
                                    u(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                }), i
                            }(e.props.children);
                            r.length > 0 ? r.forEach(e => t.push(e)) : i["container-end"].push(e)
                        } else i["container-end"].push(e)
                    }), {
                        slides: t,
                        slots: i
                    }
                }(w), V = () => {
                    L(!P)
                };
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        x(t)
                    }
                });
                let q = () => {
                    Object.assign(G.on, R), E = !0;
                    let e = { ...G
                    };
                    if (delete e.wrapperClass, A.current = new r.ZP(e), A.current.virtual && A.current.params.virtual.enabled) {
                        A.current.virtual.slides = F;
                        let e = {
                            cache: !1,
                            slides: F,
                            renderExternal: M,
                            renderExternalUpdate: !1
                        };
                        l(A.current.params.virtual, e), l(A.current.originalParams.virtual, e)
                    }
                };
                O.current || q(), A.current && A.current.on("_beforeBreakpoint", V);
                let W = () => {
                        !E && R && A.current && Object.keys(R).forEach(e => {
                            A.current.on(e, R[e])
                        })
                    },
                    X = () => {
                        R && A.current && Object.keys(R).forEach(e => {
                            A.current.off(e, R[e])
                        })
                    };
                return (0, s.useEffect)(() => () => {
                    A.current && A.current.off("_beforeBreakpoint", V)
                }), (0, s.useEffect)(() => {
                    !k.current && A.current && (A.current.emitSlidesClasses(), k.current = !0)
                }), h(() => {
                    if (t && (t.current = O.current), O.current) return A.current.destroyed && q(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: i,
                            paginationEl: s,
                            scrollbarEl: r,
                            swiper: a
                        }, l) {
                            n(l) && t && i && (a.params.navigation.nextEl = t, a.originalParams.navigation.nextEl = t, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), o(l) && s && (a.params.pagination.el = s, a.originalParams.pagination.el = s), d(l) && r && (a.params.scrollbar.el = r, a.originalParams.scrollbar.el = r), a.init(e)
                        }({
                            el: O.current,
                            nextEl: I.current,
                            prevEl: $.current,
                            paginationEl: B.current,
                            scrollbarEl: D.current,
                            swiper: A.current
                        }, G), S && S(A.current), () => {
                            A.current && !A.current.destroyed && A.current.destroy(!0, !1)
                        }
                }, []), h(() => {
                    W();
                    let e = function(e, t, i, s, r) {
                        let l = [];
                        if (!t) return l;
                        let n = e => {
                            0 > l.indexOf(e) && l.push(e)
                        };
                        if (i && s) {
                            let e = s.map(r),
                                t = i.map(r);
                            e.join("") !== t.join("") && n("children"), s.length !== i.length && n("children")
                        }
                        let o = p.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                        return o.forEach(i => {
                            if (i in e && i in t) {
                                if (a(e[i]) && a(t[i])) {
                                    let s = Object.keys(e[i]),
                                        r = Object.keys(t[i]);
                                    s.length !== r.length ? n(i) : (s.forEach(s => {
                                        e[i][s] !== t[i][s] && n(i)
                                    }), r.forEach(s => {
                                        e[i][s] !== t[i][s] && n(i)
                                    }))
                                } else e[i] !== t[i] && n(i)
                            }
                        }), l
                    }(N, _.current, F, z.current, e => e.key);
                    return _.current = N, z.current = F, e.length && A.current && !A.current.destroyed && function({
                        swiper: e,
                        slides: t,
                        passedParams: i,
                        changedParams: s,
                        nextEl: r,
                        prevEl: n,
                        scrollbarEl: o,
                        paginationEl: d
                    }) {
                        let c, p, u, f, h, m, g, v;
                        let b = s.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                            {
                                params: w,
                                pagination: S,
                                navigation: y,
                                scrollbar: E,
                                virtual: T,
                                thumbs: x
                            } = e;
                        s.includes("thumbs") && i.thumbs && i.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (c = !0), s.includes("controller") && i.controller && i.controller.control && w.controller && !w.controller.control && (p = !0), s.includes("pagination") && i.pagination && (i.pagination.el || d) && (w.pagination || !1 === w.pagination) && S && !S.el && (u = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (w.scrollbar || !1 === w.scrollbar) && E && !E.el && (f = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || n) && (i.navigation.nextEl || r) && (w.navigation || !1 === w.navigation) && y && !y.prevEl && !y.nextEl && (h = !0);
                        let C = t => {
                            e[t] && (e[t].destroy(), "navigation" === t ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()), w[t].prevEl = void 0, w[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (e.isElement && e[t].el.remove(), w[t].el = void 0, e[t].el = void 0))
                        };
                        if (s.includes("loop") && e.isElement && (w.loop && !i.loop ? m = !0 : !w.loop && i.loop ? g = !0 : v = !0), b.forEach(e => {
                                if (a(w[e]) && a(i[e])) l(w[e], i[e]);
                                else {
                                    let t = i[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && C(e): w[e] = i[e]
                                }
                            }), b.includes("controller") && !p && e.controller && e.controller.control && w.controller && w.controller.control && (e.controller.control = w.controller.control), s.includes("children") && t && T && w.virtual.enabled && (T.slides = t, T.update(!0)), s.includes("children") && t && w.loop && (v = !0), c) {
                            let e = x.init();
                            e && x.update(!0)
                        }
                        p && (e.controller.control = w.controller.control), u && (e.isElement && (!d || "string" == typeof d) && ((d = document.createElement("div")).classList.add("swiper-pagination"), e.el.shadowEl.appendChild(d)), d && (w.pagination.el = d), S.init(), S.render(), S.update()), f && (e.isElement && (!o || "string" == typeof o) && ((o = document.createElement("div")).classList.add("swiper-scrollbar"), e.el.shadowEl.appendChild(o)), o && (w.scrollbar.el = o), E.init(), E.updateSize(), E.setTranslate()), h && (e.isElement && (r && "string" != typeof r || ((r = document.createElement("div")).classList.add("swiper-button-next"), e.el.shadowEl.appendChild(r)), n && "string" != typeof n || ((n = document.createElement("div")).classList.add("swiper-button-prev"), e.el.shadowEl.appendChild(n))), r && (w.navigation.nextEl = r), n && (w.navigation.prevEl = n), y.init(), y.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), (m || v) && e.loopDestroy(), (g || v) && e.loopCreate(), e.update()
                    }({
                        swiper: A.current,
                        slides: F,
                        passedParams: N,
                        changedParams: e,
                        nextEl: I.current,
                        prevEl: $.current,
                        scrollbarEl: D.current,
                        paginationEl: B.current
                    }), () => {
                        X()
                    }
                }), h(() => {
                    f(A.current)
                }, [C]), s.createElement(m, v({
                    ref: O,
                    className: c(`${T}${i?` ${i}`:""}`)
                }, j), s.createElement(g.Provider, {
                    value: A.current
                }, H["container-start"], s.createElement(b, {
                    className: function(e = "") {
                        return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
                    }(G.wrapperClass)
                }, H["wrapper-start"], G.virtual ? function(e, t, i) {
                    if (!i) return null;
                    let r = e => {
                            let i = e;
                            return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                        },
                        a = e.isHorizontal() ? {
                            [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                        } : {
                            top: `${i.offset}px`
                        },
                        {
                            from: l,
                            to: n
                        } = i,
                        o = e.params.loop ? -t.length : 0,
                        d = e.params.loop ? 2 * t.length : t.length,
                        c = [];
                    for (let e = o; e < d; e += 1) e >= l && e <= n && c.push(t[r(e)]);
                    return c.map((t, i) => s.cloneElement(t, {
                        swiper: e,
                        style: a,
                        key: `slide-${i}`
                    }))
                }(A.current, F, C) : F.map((e, t) => s.cloneElement(e, {
                    swiper: A.current,
                    swiperSlideIndex: t
                })), H["wrapper-end"]), n(G) && s.createElement(s.Fragment, null, s.createElement("div", {
                    ref: $,
                    className: "swiper-button-prev"
                }), s.createElement("div", {
                    ref: I,
                    className: "swiper-button-next"
                })), d(G) && s.createElement("div", {
                    ref: D,
                    className: "swiper-scrollbar"
                }), o(G) && s.createElement("div", {
                    ref: B,
                    className: "swiper-pagination"
                }), H["container-end"]))
            });

            function w() {
                return (w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            b.displayName = "Swiper";
            let S = (0, s.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: r,
                    className: a = "",
                    swiper: l,
                    zoom: n,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: p,
                    ...u
                } = void 0 === e ? {} : e, f = (0, s.useRef)(null), [g, v] = (0, s.useState)("swiper-slide"), [b, S] = (0, s.useState)(!1);

                function y(e, t, i) {
                    t === f.current && v(i)
                }
                h(() => {
                    if (void 0 !== p && (f.current.swiperSlideIndex = p), t && (t.current = f.current), f.current && l) {
                        if (l.destroyed) {
                            "swiper-slide" !== g && v("swiper-slide");
                            return
                        }
                        return l.on("_slideClass", y), () => {
                            l && l.off("_slideClass", y)
                        }
                    }
                }), h(() => {
                    l && f.current && !l.destroyed && v(l.getSlideClasses(f.current))
                }, [l]);
                let E = {
                        isActive: g.indexOf("swiper-slide-active") >= 0,
                        isVisible: g.indexOf("swiper-slide-visible") >= 0,
                        isPrev: g.indexOf("swiper-slide-prev") >= 0,
                        isNext: g.indexOf("swiper-slide-next") >= 0
                    },
                    T = () => "function" == typeof r ? r(E) : r,
                    x = () => {
                        S(!0)
                    };
                return s.createElement(i, w({
                    ref: f,
                    className: c(`${g}${a?` ${a}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: x
                }, u), n && s.createElement(m.Provider, {
                    value: E
                }, s.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, T(), o && !b && s.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !n && s.createElement(m.Provider, {
                    value: E
                }, T(), o && !b && s.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            S.displayName = "SwiperSlide"
        },
        6523: function(e, t, i) {
            "use strict";
            let s, r, a;

            function l(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function n(e = {}, t = {}) {
                Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i])
                })
            }
            i.d(t, {
                s5: function() {
                    return K
                },
                Rv: function() {
                    return Z
                },
                W_: function() {
                    return X
                },
                tl: function() {
                    return U
                },
                ZP: function() {
                    return q
                }
            });
            let o = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function d() {
                let e = "undefined" != typeof document ? document : {};
                return n(e, o), e
            }
            let c = {
                document: o,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function p() {
                let e = "undefined" != typeof window ? window : {};
                return n(e, c), e
            }

            function u(e, t = 0) {
                return setTimeout(e, t)
            }

            function f() {
                return Date.now()
            }

            function h(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function m(...e) {
                let t = Object(e[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < e.length; s += 1) {
                    let r = e[s];
                    if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                        let e = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                        for (let i = 0, s = e.length; i < s; i += 1) {
                            let s = e[i],
                                a = Object.getOwnPropertyDescriptor(r, s);
                            void 0 !== a && a.enumerable && (h(t[s]) && h(r[s]) ? r[s].__swiper__ ? t[s] = r[s] : m(t[s], r[s]) : !h(t[s]) && h(r[s]) ? (t[s] = {}, r[s].__swiper__ ? t[s] = r[s] : m(t[s], r[s])) : t[s] = r[s])
                        }
                    }
                }
                return t
            }

            function g(e, t, i) {
                e.style.setProperty(t, i)
            }

            function v({
                swiper: e,
                targetPosition: t,
                side: i
            }) {
                let s;
                let r = p(),
                    a = -e.translate,
                    l = null,
                    n = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > a ? "next" : "prev",
                    d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
                    c = () => {
                        s = new Date().getTime(), null === l && (l = s);
                        let o = Math.max(Math.min((s - l) / n, 1), 0),
                            p = a + (.5 - Math.cos(o * Math.PI) / 2) * (t - a);
                        if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                                [i]: p
                            }), d(p, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [i]: p
                                })
                            }), r.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = r.requestAnimationFrame(c)
                    };
                c()
            }

            function b(e, t = "") {
                return [...e.children].filter(e => e.matches(t))
            }

            function w(e, t = []) {
                let i = document.createElement(e);
                return i.classList.add(...Array.isArray(t) ? t : [t]), i
            }

            function S(e, t) {
                let i = p();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function y(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function E(e, t) {
                let i = [],
                    s = e.parentElement;
                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                return i
            }

            function T(e, t) {
                t && e.addEventListener("transitionend", function i(s) {
                    s.target === e && (t.call(e, s), e.removeEventListener("transitionend", i))
                })
            }

            function x(e, t, i) {
                let s = p();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function C() {
                return s || (s = function() {
                    let e = p(),
                        t = d();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }
            let M = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        t && t.remove()
                    }
                },
                P = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                L = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex,
                        a = r + s - 1;
                    if (e.params.rewind)
                        for (let s = r - t; s <= a + t; s += 1) {
                            let t = (s % i + i) % i;
                            t !== r && t > a && P(e, t)
                        } else
                            for (let s = Math.max(a - t, 0); s <= Math.min(a + t, i - 1); s += 1) s !== r && s > a && P(e, s)
                };

            function k({
                swiper: e,
                runCallbacks: t,
                direction: i,
                step: s
            }) {
                let {
                    activeIndex: r,
                    previousIndex: a
                } = e, l = i;
                if (l || (l = r > a ? "next" : r < a ? "prev" : "reset"), e.emit(`transition${s}`), t && r !== a) {
                    if ("reset" === l) {
                        e.emit(`slideResetTransition${s}`);
                        return
                    }
                    e.emit(`slideChangeTransition${s}`), "next" === l ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
                }
            }

            function O(e) {
                let t = this,
                    i = d(),
                    s = p(),
                    r = t.touchEventsData;
                r.evCache.push(e);
                let {
                    params: a,
                    touches: l,
                    enabled: n
                } = t;
                if (!n || !a.simulateTouch && "mouse" === e.pointerType || t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let o = e;
                o.originalEvent && (o = o.originalEvent);
                let c = o.target;
                if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(c) || "which" in o && 3 === o.which || "button" in o && o.button > 0 || r.isTouched && r.isMoved) return;
                let u = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    h = e.composedPath ? e.composedPath() : e.path;
                u && o.target && o.target.shadowRoot && h && (c = h[0]);
                let m = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    g = !!(o.target && o.target.shadowRoot);
                if (a.noSwiping && (g ? function(e, t = this) {
                        return function t(i) {
                            if (!i || i === d() || i === p()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            let s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                    }(m, c) : c.closest(m))) {
                    t.allowClick = !0;
                    return
                }
                if (a.swipeHandler && !c.closest(a.swipeHandler)) return;
                l.currentX = o.pageX, l.currentY = o.pageY;
                let v = l.currentX,
                    b = l.currentY,
                    w = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    S = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (w && (v <= S || v >= s.innerWidth - S)) {
                    if ("prevent" !== w) return;
                    e.preventDefault()
                }
                Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = v, l.startY = b, r.touchStartTime = f(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1);
                let y = !0;
                c.matches(r.focusableElements) && (y = !1, "SELECT" === c.nodeName && (r.isTouched = !1)), i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== c && i.activeElement.blur();
                let E = y && t.allowTouchMove && a.touchStartPreventDefault;
                (a.touchStartForcePreventDefault || E) && !c.isContentEditable && o.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
            }

            function A(e) {
                let t;
                let i = d(),
                    s = this,
                    r = s.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        rtlTranslate: n,
                        enabled: o
                    } = s;
                if (!o || !a.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), !r.isTouched) {
                    r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", c);
                    return
                }
                let p = r.evCache.findIndex(e => e.pointerId === c.pointerId);
                p >= 0 && (r.evCache[p] = c);
                let u = r.evCache.length > 1 ? r.evCache[0] : c,
                    h = u.pageX,
                    m = u.pageY;
                if (c.preventedByNestedSwiper) {
                    l.startX = h, l.startY = m;
                    return
                }
                if (!s.allowTouchMove) {
                    c.target.matches(r.focusableElements) || (s.allowClick = !1), r.isTouched && (Object.assign(l, {
                        startX: h,
                        startY: m,
                        prevX: s.touches.currentX,
                        prevY: s.touches.currentY,
                        currentX: h,
                        currentY: m
                    }), r.touchStartTime = f());
                    return
                }
                if (a.touchReleaseOnEdges && !a.loop) {
                    if (s.isVertical()) {
                        if (m < l.startY && s.translate <= s.maxTranslate() || m > l.startY && s.translate >= s.minTranslate()) {
                            r.isTouched = !1, r.isMoved = !1;
                            return
                        }
                    } else if (h < l.startX && s.translate <= s.maxTranslate() || h > l.startX && s.translate >= s.minTranslate()) return
                }
                if (i.activeElement && c.target === i.activeElement && c.target.matches(r.focusableElements)) {
                    r.isMoved = !0, s.allowClick = !1;
                    return
                }
                if (r.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
                l.currentX = h, l.currentY = m;
                let g = l.currentX - l.startX,
                    v = l.currentY - l.startY;
                if (s.params.threshold && Math.sqrt(g ** 2 + v ** 2) < s.params.threshold) return;
                if (void 0 === r.isScrolling) {
                    let e;
                    s.isHorizontal() && l.currentY === l.startY || s.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : g * g + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(g)) / Math.PI, r.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (r.isScrolling && s.emit("touchMoveOpposite", c), void 0 === r.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0), r.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && r.evCache.length > 1) {
                    r.isTouched = !1;
                    return
                }
                if (!r.startMoving) return;
                s.allowClick = !1, !a.cssMode && c.cancelable && c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
                let b = s.isHorizontal() ? g : v,
                    w = s.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                a.oneWayMovement && (b = Math.abs(b) * (n ? 1 : -1), w = Math.abs(w) * (n ? 1 : -1)), l.diff = b, b *= a.touchRatio, n && (b = -b, w = -w);
                let S = s.touchesDirection;
                s.swipeDirection = b > 0 ? "prev" : "next", s.touchesDirection = w > 0 ? "prev" : "next";
                let y = s.params.loop && !a.cssMode;
                if (!r.isMoved) {
                    if (y && s.loopFix({
                            direction: s.swipeDirection
                        }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        s.wrapperEl.dispatchEvent(e)
                    }
                    r.allowMomentumBounce = !1, a.grabCursor && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!0), s.emit("sliderFirstMove", c)
                }
                r.isMoved && S !== s.touchesDirection && y && Math.abs(b) >= 1 && (s.loopFix({
                    direction: s.swipeDirection,
                    setTranslate: !0
                }), t = !0), s.emit("sliderMove", c), r.isMoved = !0, r.currentTranslate = b + r.startTranslate;
                let E = !0,
                    T = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (T = 0), b > 0 ? (y && !t && r.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), r.currentTranslate > s.minTranslate() && (E = !1, a.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + b) ** T))) : b < 0 && (y && !t && r.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), r.currentTranslate < s.maxTranslate() && (E = !1, a.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - b) ** T))), E && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                    if (Math.abs(b) > a.threshold || r.allowThresholdMove) {
                        if (!r.allowThresholdMove) {
                            r.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, r.currentTranslate = r.startTranslate, l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                            return
                        }
                    } else {
                        r.currentTranslate = r.startTranslate;
                        return
                    }
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate))
            }

            function _(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    r = s.evCache.findIndex(t => t.pointerId === e.pointerId);
                if (r >= 0 && s.evCache.splice(r, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
                    let t = "pointercancel" === e.type && (i.browser.isSafari || i.browser.isWebView);
                    if (!t) return
                }
                let {
                    params: a,
                    touches: l,
                    rtlTranslate: n,
                    slidesGrid: o,
                    enabled: d
                } = i;
                if (!d || !a.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", c), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && a.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                a.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let p = f(),
                    h = p - s.touchStartTime;
                if (i.allowClick) {
                    let e = c.path || c.composedPath && c.composedPath();
                    i.updateClickedSlide(e && e[0] || c.target), i.emit("tap click", c), h < 300 && p - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", c)
                }
                if (s.lastClickTime = f(), u(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === l.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = a.followFinger ? n ? i.translate : -i.translate : -s.currentTranslate, a.cssMode) return;
                if (i.params.freeMode && a.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let m = 0,
                    g = i.slidesSizesGrid[0];
                for (let e = 0; e < o.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                    let i = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    void 0 !== o[e + i] ? t >= o[e] && t < o[e + i] && (m = e, g = o[e + i] - o[e]) : t >= o[e] && (m = e, g = o[o.length - 1] - o[o.length - 2])
                }
                let v = null,
                    b = null;
                a.rewind && (i.isBeginning ? b = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (v = 0));
                let w = (t - o[m]) / g,
                    S = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                if (h > a.longSwipesMs) {
                    if (!a.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (w >= a.longSwipesRatio ? i.slideTo(a.rewind && i.isEnd ? v : m + S) : i.slideTo(m)), "prev" === i.swipeDirection && (w > 1 - a.longSwipesRatio ? i.slideTo(m + S) : null !== b && w < 0 && Math.abs(w) > a.longSwipesRatio ? i.slideTo(b) : i.slideTo(m))
                } else {
                    if (!a.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let e = i.navigation && (c.target === i.navigation.nextEl || c.target === i.navigation.prevEl);
                    e ? c.target === i.navigation.nextEl ? i.slideTo(m + S) : i.slideTo(m) : ("next" === i.swipeDirection && i.slideTo(null !== v ? v : m + S), "prev" === i.swipeDirection && i.slideTo(null !== b ? b : m))
                }
            }

            function z() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e, l = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let n = l && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function I(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function $() {
                let e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: i,
                        enabled: s
                    } = e;
                if (!s) return;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                let r = e.maxTranslate() - e.minTranslate();
                (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function B(e) {
                M(this, e.target), this.update()
            }
            let D = !1;

            function G() {}
            let N = (e, t) => {
                    let i = d(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            device: l
                        } = e,
                        n = !!s.nested,
                        o = "on" === t ? "addEventListener" : "removeEventListener";
                    r[o]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[o]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: n
                    }), i[o]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[o]("click", e.onClick, !0), s.cssMode && a[o]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[t]("observerUpdate", z, !0), r[o]("load", e.onLoad, {
                        capture: !0
                    })
                },
                j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var R = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let F = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r(...i) {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(s, i)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit(...e) {
                            let t, i, s;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = r) : (t = e[0].events, i = e[0].data, s = e[0].context || r), i.unshift(s);
                            let a = Array.isArray(t) ? t : t.split(" ");
                            return a.forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t => {
                                    t.apply(s, [e, ...i])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(s, i)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(S(i, "padding-left") || 0, 10) - parseInt(S(i, "padding-right") || 0, 10), t = t - parseInt(S(i, "padding-top") || 0, 10) - parseInt(S(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function s(e, t) {
                                return parseFloat(e.getPropertyValue(i(t)) || 0)
                            }
                            let r = t.params,
                                {
                                    wrapperEl: a,
                                    slidesEl: l,
                                    size: n,
                                    rtlTranslate: o,
                                    wrongRTL: d
                                } = t,
                                c = t.virtual && r.virtual.enabled,
                                p = c ? t.virtual.slides.length : t.slides.length,
                                u = b(l, `.${t.params.slideClass}, swiper-slide`),
                                f = c ? t.virtual.slides.length : u.length,
                                h = [],
                                m = [],
                                v = [],
                                w = r.slidesOffsetBefore;
                            "function" == typeof w && (w = r.slidesOffsetBefore.call(t));
                            let y = r.slidesOffsetAfter;
                            "function" == typeof y && (y = r.slidesOffsetAfter.call(t));
                            let E = t.snapGrid.length,
                                T = t.slidesGrid.length,
                                C = r.spaceBetween,
                                M = -w,
                                P = 0,
                                L = 0;
                            if (void 0 === n) return;
                            "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * n), t.virtualSize = -C, u.forEach(e => {
                                o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), r.centeredSlides && r.cssMode && (g(a, "--swiper-centered-offset-before", ""), g(a, "--swiper-centered-offset-after", ""));
                            let k = r.grid && r.grid.rows > 1 && t.grid;
                            k && t.grid.initSlides(f);
                            let O = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let a = 0; a < f; a += 1) {
                                let l;
                                if (e = 0, u[a] && (l = u[a]), k && t.grid.updateSlide(a, l, f, i), !u[a] || "none" !== S(l, "display")) {
                                    if ("auto" === r.slidesPerView) {
                                        O && (u[a].style[i("width")] = "");
                                        let n = getComputedStyle(l),
                                            o = l.style.transform,
                                            d = l.style.webkitTransform;
                                        if (o && (l.style.transform = "none"), d && (l.style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? x(l, "width", !0) : x(l, "height", !0);
                                        else {
                                            let t = s(n, "width"),
                                                i = s(n, "padding-left"),
                                                r = s(n, "padding-right"),
                                                a = s(n, "margin-left"),
                                                o = s(n, "margin-right"),
                                                d = n.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + a + o;
                                            else {
                                                let {
                                                    clientWidth: s,
                                                    offsetWidth: n
                                                } = l;
                                                e = t + i + r + a + o + (n - s)
                                            }
                                        }
                                        o && (l.style.transform = o), d && (l.style.webkitTransform = d), r.roundLengths && (e = Math.floor(e))
                                    } else e = (n - (r.slidesPerView - 1) * C) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), u[a] && (u[a].style[i("width")] = `${e}px`);
                                    u[a] && (u[a].swiperSlideSize = e), v.push(e), r.centeredSlides ? (M = M + e / 2 + P / 2 + C, 0 === P && 0 !== a && (M = M - n / 2 - C), 0 === a && (M = M - n / 2 - C), .001 > Math.abs(M) && (M = 0), r.roundLengths && (M = Math.floor(M)), L % r.slidesPerGroup == 0 && h.push(M), m.push(M)) : (r.roundLengths && (M = Math.floor(M)), (L - Math.min(t.params.slidesPerGroupSkip, L)) % t.params.slidesPerGroup == 0 && h.push(M), m.push(M), M = M + e + C), t.virtualSize += e + C, P = e, L += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, n) + y, o && d && ("slide" === r.effect || "coverflow" === r.effect) && (a.style.width = `${t.virtualSize+r.spaceBetween}px`), r.setWrapperSize && (a.style[i("width")] = `${t.virtualSize+r.spaceBetween}px`), k && t.grid.updateWrapperSize(e, h, i), !r.centeredSlides) {
                                let e = [];
                                for (let i = 0; i < h.length; i += 1) {
                                    let s = h[i];
                                    r.roundLengths && (s = Math.floor(s)), h[i] <= t.virtualSize - n && e.push(s)
                                }
                                h = e, Math.floor(t.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - n)
                            }
                            if (c && r.loop) {
                                let e = v[0] + C;
                                if (r.slidesPerGroup > 1) {
                                    let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                                        s = e * r.slidesPerGroup;
                                    for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + s)
                                }
                                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && h.push(h[h.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === h.length && (h = [0]), 0 !== r.spaceBetween) {
                                let e = t.isHorizontal() && o ? "marginLeft" : i("marginRight");
                                u.filter((e, t) => !r.cssMode || !!r.loop || t !== u.length - 1).forEach(t => {
                                    t.style[e] = `${C}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (r.spaceBetween ? r.spaceBetween : 0)
                                }), e -= r.spaceBetween;
                                let t = e - n;
                                h = h.map(e => e < 0 ? -w : e > t ? t + y : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let e = 0;
                                if (v.forEach(t => {
                                        e += t + (r.spaceBetween ? r.spaceBetween : 0)
                                    }), (e -= r.spaceBetween) < n) {
                                    let t = (n - e) / 2;
                                    h.forEach((e, i) => {
                                        h[i] = e - t
                                    }), m.forEach((e, i) => {
                                        m[i] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: u,
                                    snapGrid: h,
                                    slidesGrid: m,
                                    slidesSizesGrid: v
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                g(a, "--swiper-centered-offset-before", `${-h[0]}px`), g(a, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (f !== p && t.emit("slidesLengthChange"), h.length !== E && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== T && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), !c && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let e = `${r.containerModifierClass}backface-hidden`,
                                    i = t.el.classList.contains(e);
                                f <= r.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => r ? i.getSlideIndexByData(e) : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(l(e))
                                    }
                            } else s.push(l(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    a = e > a ? e : a
                                }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this,
                                i = t.params,
                                {
                                    slides: s,
                                    rtlTranslate: r,
                                    snapGrid: a
                                } = t;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                            let l = -e;
                            r && (l = e), s.forEach(e => {
                                e.classList.remove(i.slideVisibleClass)
                            }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let e = 0; e < s.length; e += 1) {
                                let n = s[e],
                                    o = n.swiperSlideOffset;
                                i.cssMode && i.centeredSlides && (o -= s[0].swiperSlideOffset);
                                let d = (l + (i.centeredSlides ? t.minTranslate() : 0) - o) / (n.swiperSlideSize + i.spaceBetween),
                                    c = (l - a[0] + (i.centeredSlides ? t.minTranslate() : 0) - o) / (n.swiperSlideSize + i.spaceBetween),
                                    p = -(l - o),
                                    u = p + t.slidesSizesGrid[e],
                                    f = p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size;
                                f && (t.visibleSlides.push(n), t.visibleSlidesIndexes.push(e), s[e].classList.add(i.slideVisibleClass)), n.progress = r ? -d : d, n.originalProgress = r ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: a,
                                    progressLoop: l
                                } = this,
                                n = r,
                                o = a;
                            if (0 === i) s = 0, r = !0, a = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    l = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, a = l || s >= 1, t && (s = 0), l && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    a = this.slidesGrid[this.slidesGrid.length - 1],
                                    n = Math.abs(e);
                                (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: l,
                                isBeginning: r,
                                isEnd: a
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !n && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (n && !r || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                slidesEl: s,
                                activeIndex: r
                            } = this, a = this.virtual && i.virtual.enabled, l = e => b(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                            if (t.forEach(e => {
                                    e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                                }), a) {
                                if (i.loop) {
                                    let t = r - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = l(`[data-swiper-slide-index="${t}"]`)
                                } else e = l(`[data-swiper-slide-index="${r}"]`)
                            } else e = t[r];
                            if (e) {
                                e.classList.add(i.slideActiveClass);
                                let s = function(e, t) {
                                    let i = [];
                                    for (; e.nextElementSibling;) {
                                        let s = e.nextElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop && !s && (s = t[0]), s && s.classList.add(i.slideNextClass);
                                let r = function(e, t) {
                                    let i = [];
                                    for (; e.previousElementSibling;) {
                                        let s = e.previousElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop, r && r.classList.add(i.slidePrevClass)
                            }
                            this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: a,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                c = e,
                                p = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === c && (c = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), a.indexOf(r) >= 0) t = a.indexOf(r);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, c);
                                t = e + Math.floor((c - e) / l.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), c === n) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange")), s.params.loop && s.virtual && s.params.virtual.enabled && (s.realIndex = p(c));
                                return
                            }
                            i = s.virtual && l.virtual.enabled && l.loop ? p(c) : s.slides[c] ? parseInt(s.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: n,
                                activeIndex: c
                            }), s.initialized && L(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), o !== i && s.emit("realIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && s.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t;
                            let i = this,
                                s = i.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`),
                                a = !1;
                            if (r) {
                                for (let e = 0; e < i.slides.length; e += 1)
                                    if (i.slides[e] === r) {
                                        a = !0, t = e;
                                        break
                                    }
                            }
                            if (r && a) i.clickedSlide = r, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = t;
                            else {
                                i.clickedSlide = void 0, i.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = function(e, t = "x") {
                                let i, s, r;
                                let a = p(),
                                    l = function(e) {
                                        let t;
                                        let i = p();
                                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e, null);
                                return a.WebKitCSSMatrix ? ((s = l.transform || l.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                            }(r, e);
                            return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let i = this,
                                {
                                    rtlTranslate: s,
                                    params: r,
                                    wrapperEl: a,
                                    progress: l
                                } = i,
                                n = 0,
                                o = 0;
                            i.isHorizontal() ? n = s ? -e : e : o = e, r.roundLengths && (n = Math.floor(n), o = Math.floor(o)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? n : o, r.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -n : -o : r.virtualTranslate || (i.isHorizontal() ? n -= i.cssOverflowAdjustment() : o -= i.cssOverflowAdjustment(), a.style.transform = `translate3d(${n}px, ${o}px, 0px)`);
                            let d = i.maxTranslate() - i.minTranslate();
                            (0 === d ? 0 : (e - i.minTranslate()) / d) !== l && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                            let a;
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: o
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let d = l.minTranslate(),
                                c = l.maxTranslate();
                            if (a = s && e > d ? d : s && e < c ? c : e, l.updateProgress(a), n.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!l.support.smoothScroll) return v({
                                        swiper: l,
                                        targetPosition: -a,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, i && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            let i = this;
                            i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`), i.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), k({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let i = this,
                                {
                                    params: s
                                } = i;
                            i.animating = !1, s.cssMode || (i.setTransition(0), k({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s, r) {
                            let a;
                            "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: o,
                                snapGrid: d,
                                slidesGrid: c,
                                previousIndex: p,
                                activeIndex: u,
                                rtlTranslate: f,
                                wrapperEl: h,
                                enabled: m
                            } = l;
                            if (l.animating && o.preventInteractionOnTransition || !m && !s && !r) return !1;
                            let g = Math.min(l.params.slidesPerGroupSkip, n),
                                b = g + Math.floor((n - g) / l.params.slidesPerGroup);
                            b >= d.length && (b = d.length - 1);
                            let w = -d[b];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < c.length; e += 1) {
                                    let t = -Math.floor(100 * w),
                                        i = Math.floor(100 * c[e]),
                                        s = Math.floor(100 * c[e + 1]);
                                    void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? n = e : t >= i && t < s && (n = e + 1) : t >= i && (n = e)
                                }
                            if (l.initialized && n !== u && (!l.allowSlideNext && w < l.translate && w < l.minTranslate() || !l.allowSlidePrev && w > l.translate && w > l.maxTranslate() && (u || 0) !== n)) return !1;
                            if (n !== (p || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(w), a = n > u ? "next" : n < u ? "prev" : "reset", f && -w === l.translate || !f && w === l.translate) return l.updateActiveIndex(n), o.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== o.effect && l.setTranslate(w), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                            if (o.cssMode) {
                                let e = l.isHorizontal(),
                                    i = f ? w : -w;
                                if (0 === t) {
                                    let t = l.virtual && l.params.virtual.enabled;
                                    t && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        h[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : h[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return v({
                                        swiper: l,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    h.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(w), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let r = e;
                            return this.params.loop && (this.virtual && this.params.virtual.enabled ? r += this.virtual.slidesBefore : r = this.getSlideIndexByData(r)), this.slideTo(r, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    enabled: r,
                                    params: a,
                                    animating: l
                                } = s;
                            if (!r) return s;
                            let n = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                                d = s.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (l && !d && a.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "next"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }
                            return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: n,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o) return s;
                            let c = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !c && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }
                            let p = n ? s.translate : -s.translate;

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let f = u(p),
                                h = a.map(e => u(e)),
                                m = a[h.indexOf(f) - 1];
                            if (void 0 === m && r.cssMode) {
                                let e;
                                a.forEach((t, i) => {
                                    f >= t && (e = i)
                                }), void 0 !== e && (m = a[e > 0 ? e - 1 : e])
                            }
                            let g = 0;
                            if (void 0 !== m && ((g = l.indexOf(m)) < 0 && (g = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return s.slideTo(g, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let e = this.snapGrid[l],
                                    t = this.snapGrid[l + 1];
                                n - e > (t - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1],
                                    t = this.snapGrid[l];
                                n - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                a = t.clickedIndex,
                                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = t.getSlideIndex(b(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), u(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = t.getSlideIndex(b(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), u(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let {
                                params: t,
                                slidesEl: i
                            } = this;
                            if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                            let s = b(i, `.${t.slideClass}, swiper-slide`);
                            s.forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), this.loopFix({
                                slideRealIndex: e,
                                direction: t.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function({
                            slideRealIndex: e,
                            slideTo: t = !0,
                            direction: i,
                            setTranslate: s,
                            activeSlideIndex: r,
                            byController: a,
                            byMousewheel: l
                        } = {}) {
                            let n = this;
                            if (!n.params.loop) return;
                            n.emit("beforeLoopFix");
                            let {
                                slides: o,
                                allowSlidePrev: d,
                                allowSlideNext: c,
                                slidesEl: p,
                                params: u
                            } = n;
                            if (n.allowSlidePrev = !0, n.allowSlideNext = !0, n.virtual && u.virtual.enabled) {
                                t && (u.centeredSlides || 0 !== n.snapIndex ? u.centeredSlides && n.snapIndex < u.slidesPerView ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0) : n.snapIndex === n.snapGrid.length - 1 && n.slideTo(n.virtual.slidesBefore, 0, !1, !0) : n.slideTo(n.virtual.slides.length, 0, !1, !0)), n.allowSlidePrev = d, n.allowSlideNext = c, n.emit("loopFix");
                                return
                            }
                            let f = "auto" === u.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10)),
                                h = u.loopedSlides || f;
                            h % u.slidesPerGroup != 0 && (h += u.slidesPerGroup - h % u.slidesPerGroup), n.loopedSlides = h;
                            let m = [],
                                g = [],
                                v = n.activeIndex;
                            void 0 === r ? r = n.getSlideIndex(n.slides.filter(e => e.classList.contains(u.slideActiveClass))[0]) : v = r;
                            let b = "next" === i || !i,
                                w = "prev" === i || !i,
                                S = 0,
                                y = 0;
                            if (r < h) {
                                S = Math.max(h - r, u.slidesPerGroup);
                                for (let e = 0; e < h - r; e += 1) {
                                    let t = e - Math.floor(e / o.length) * o.length;
                                    m.push(o.length - t - 1)
                                }
                            } else if (r > n.slides.length - 2 * h) {
                                y = Math.max(r - (n.slides.length - 2 * h), u.slidesPerGroup);
                                for (let e = 0; e < y; e += 1) {
                                    let t = e - Math.floor(e / o.length) * o.length;
                                    g.push(t)
                                }
                            }
                            if (w && m.forEach(e => {
                                    p.prepend(n.slides[e])
                                }), b && g.forEach(e => {
                                    p.append(n.slides[e])
                                }), n.recalcSlides(), u.watchSlidesProgress && n.updateSlidesOffset(), t) {
                                if (m.length > 0 && w) {
                                    if (void 0 === e) {
                                        let e = n.slidesGrid[v],
                                            t = n.slidesGrid[v + S],
                                            i = t - e;
                                        l ? n.setTranslate(n.translate - i) : (n.slideTo(v + S, 0, !1, !0), s && (n.touches[n.isHorizontal() ? "startX" : "startY"] += i))
                                    } else s && n.slideToLoop(e, 0, !1, !0)
                                } else if (g.length > 0 && b) {
                                    if (void 0 === e) {
                                        let e = n.slidesGrid[v],
                                            t = n.slidesGrid[v - y],
                                            i = t - e;
                                        l ? n.setTranslate(n.translate - i) : (n.slideTo(v - y, 0, !1, !0), s && (n.touches[n.isHorizontal() ? "startX" : "startY"] += i))
                                    } else n.slideToLoop(e, 0, !1, !0)
                                }
                            }
                            if (n.allowSlidePrev = d, n.allowSlideNext = c, n.controller && n.controller.control && !a) {
                                let t = {
                                    slideRealIndex: e,
                                    slideTo: !1,
                                    direction: i,
                                    setTranslate: s,
                                    activeSlideIndex: r,
                                    byController: !0
                                };
                                Array.isArray(n.controller.control) ? n.controller.control.forEach(e => {
                                    !e.destroyed && e.params.loop && e.loopFix(t)
                                }) : n.controller.control instanceof n.constructor && n.controller.control.params.loop && n.controller.control.loopFix(t)
                            }
                            n.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                i[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = this,
                                t = d(),
                                {
                                    params: i
                                } = e;
                            e.onTouchStart = O.bind(e), e.onTouchMove = A.bind(e), e.onTouchEnd = _.bind(e), i.cssMode && (e.onScroll = $.bind(e)), e.onClick = I.bind(e), e.onLoad = B.bind(e), D || (t.addEventListener("touchstart", G), D = !0), N(e, "on")
                        },
                        detachEvents: function() {
                            N(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                a = s.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            let l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let n = l in a ? a[l] : void 0,
                                o = n || e.originalParams,
                                d = j(e, s),
                                c = j(e, o),
                                p = s.enabled;
                            d && !c ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.classList.add(`${s.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                let i = s[t] && s[t].enabled,
                                    r = o[t] && o[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let u = o.direction && o.direction !== s.direction,
                                f = s.loop && (o.slidesPerView !== s.slidesPerView || u);
                            u && i && e.changeDirection(), m(e.params, o);
                            let h = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), f && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t = "window", i) {
                            if (!e || "container" === t && !i) return;
                            let s = !1,
                                r = p(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: a,
                                    value: n
                                } = l[e];
                                "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let e = this,
                                {
                                    isLocked: t,
                                    params: i
                                } = e,
                                {
                                    slidesOffsetBefore: s
                                } = i;
                            if (s) {
                                let t = e.slides.length - 1,
                                    i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                                e.isLocked = e.size > i
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, a = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...a), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                H = {};
            class V {
                constructor(...e) {
                    let t, i;
                    1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = m({}, i), t && !i.el && (i.el = t);
                    let s = d();
                    if (i.el && "string" == typeof i.el && s.querySelectorAll(i.el).length > 1) {
                        let e = [];
                        return s.querySelectorAll(i.el).forEach(t => {
                            let s = m({}, i, {
                                el: t
                            });
                            e.push(new V(s))
                        }), e
                    }
                    let l = this;
                    l.__swiper__ = !0, l.support = C(), l.device = function(e = {}) {
                        return r || (r = function({
                            userAgent: e
                        } = {}) {
                            let t = C(),
                                i = p(),
                                s = i.navigator.platform,
                                r = e || i.navigator.userAgent,
                                a = {
                                    ios: !1,
                                    android: !1
                                },
                                l = i.screen.width,
                                n = i.screen.height,
                                o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                d = r.match(/(iPad).*OS\s([\d_]+)/),
                                c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                f = "MacIntel" === s;
                            return !d && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${n}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), f = !1), o && "Win32" !== s && (a.os = "android", a.android = !0), (d || u || c) && (a.os = "ios", a.ios = !0), a
                        }(e)), r
                    }({
                        userAgent: i.userAgent
                    }), l.browser = (a || (a = function() {
                        let e = p(),
                            t = !1;

                        function i() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (i()) {
                            let i = String(e.navigator.userAgent);
                            if (i.includes("Version/")) {
                                let [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && s < 2
                            }
                        }
                        return {
                            isSafari: t || i(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), a), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
                    let n = {};
                    l.modules.forEach(e => {
                        var t;
                        e({
                            params: i,
                            swiper: l,
                            extendParams: (t = i, function(e = {}) {
                                let i = Object.keys(e)[0],
                                    s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                        auto: !0
                                    }), !(i in t && "enabled" in s))) {
                                    m(n, e);
                                    return
                                }!0 === t[i] && (t[i] = {
                                    enabled: !0
                                }), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                                    enabled: !1
                                }), m(n, e)
                            }),
                            on: l.on.bind(l),
                            once: l.once.bind(l),
                            off: l.off.bind(l),
                            emit: l.emit.bind(l)
                        })
                    });
                    let o = m({}, R, n);
                    return l.params = m({}, o, H, i), l.originalParams = m({}, l.params), l.passedParams = m({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
                        l.on(e, l.params.on[e])
                    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                        enabled: l.params.enabled,
                        el: t,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.emit("_swiper"), l.params.init && l.init(), l
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = b(t, `.${i.slideClass}, swiper-slide`), r = y(s[0]);
                    return y(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let e = this,
                        {
                            slidesEl: t,
                            params: i
                        } = e;
                    e.slides = b(t, `.${i.slideClass}, swiper-slide`)
                }
                enable() {
                    let e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    let e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if (i.centeredSlides) {
                        let e, t = s[n].swiperSlideSize;
                        for (let i = n + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0));
                        for (let i = n - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < s.length; e += 1) {
                            let i = t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l;
                            i && (o += 1)
                        } else
                            for (let e = n - 1; e >= 0; e -= 1) {
                                let t = r[n] - r[e] < l;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: i
                    } = e;

                    function s() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
                        t.complete && M(e, t)
                    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this,
                        s = i.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }
                changeLanguageDirection(e) {
                    let t = this;
                    (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.shadowEl && (t.isElement = !0);
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                let e = i.shadowRoot.querySelector(s());
                                return e
                            }
                            return b(i, s())[0]
                        })();
                    return !r && t.params.createElements && (r = w("div", t.params.wrapperClass), i.append(r), b(i, `.${t.params.slideClass}`).forEach(e => {
                        r.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement ? i : r,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction")),
                        wrongRTL: "-webkit-box" === S(r, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                        e.complete ? M(t, e) : e.addEventListener("load", e => {
                            M(t, e.target)
                        })
                    }), L(t), t.initialized = !0, L(t), t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el.swiper = null, function(e) {
                        let t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null
                            } catch (e) {}
                            try {
                                delete t[e]
                            } catch (e) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    m(H, e)
                }
                static get extendedDefaults() {
                    return H
                }
                static get defaults() {
                    return R
                }
                static installModule(e) {
                    V.prototype.__modules__ || (V.prototype.__modules__ = []);
                    let t = V.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => V.installModule(e)), V) : (V.installModule(e), V)
                }
            }
            Object.keys(F).forEach(e => {
                Object.keys(F[e]).forEach(t => {
                    V.prototype[t] = F[e][t]
                })
            }), V.use([function({
                swiper: e,
                on: t,
                emit: i
            }) {
                let s = p(),
                    r = null,
                    a = null,
                    l = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
                    },
                    n = () => {
                        e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                            a = s.requestAnimationFrame(() => {
                                let {
                                    width: i,
                                    height: s
                                } = e, r = i, a = s;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: i,
                                    target: s
                                }) => {
                                    s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, a = i ? i.height : (t[0] || t).blockSize)
                                }), (r !== i || a !== s) && l()
                            })
                        })).observe(e.el)
                    },
                    o = () => {
                        a && s.cancelAnimationFrame(a), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
                    },
                    d = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        n();
                        return
                    }
                    s.addEventListener("resize", l), s.addEventListener("orientationchange", d)
                }), t("destroy", () => {
                    o(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = [],
                    a = p(),
                    l = (t, i = {}) => {
                        let l = a.MutationObserver || a.WebkitMutationObserver,
                            n = new l(t => {
                                if (e.__preventObserver__) return;
                                if (1 === t.length) {
                                    s("observerUpdate", t[0]);
                                    return
                                }
                                let i = function() {
                                    s("observerUpdate", t[0])
                                };
                                a.requestAnimationFrame ? a.requestAnimationFrame(i) : a.setTimeout(i, 0)
                            });
                        n.observe(t, {
                            attributes: void 0 === i.attributes || i.attributes,
                            childList: void 0 === i.childList || i.childList,
                            characterData: void 0 === i.characterData || i.characterData
                        }), r.push(n)
                    },
                    n = () => {
                        if (e.params.observer) {
                            if (e.params.observeParents) {
                                let t = E(e.el);
                                for (let e = 0; e < t.length; e += 1) l(t[e])
                            }
                            l(e.el, {
                                childList: e.params.observeSlideChildren
                            }), l(e.wrapperEl, {
                                attributes: !1
                            })
                        }
                    },
                    o = () => {
                        r.forEach(e => {
                            e.disconnect()
                        }), r.splice(0, r.length)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", n), i("destroy", o)
            }]);
            var q = V;

            function W(e, t, i, s) {
                return e.params.createElements && Object.keys(s).forEach(r => {
                    if (!i[r] && !0 === i.auto) {
                        let a = b(e.el, `.${s[r]}`)[0];
                        a || ((a = w("div", s[r])).className = s[r], e.el.append(a)), i[r] = a, t[r] = a
                    }
                }), i
            }

            function X({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                let r = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

                function a(t) {
                    let i;
                    return t && "string" == typeof t && e.isElement && (i = e.el.shadowRoot.querySelector(t)) ? i : (t && ("string" == typeof t && (i = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.el.querySelectorAll(t).length && (i = e.el.querySelector(t))), t && !i) ? t : i
                }

                function l(t, i) {
                    let s = e.params.navigation;
                    (t = r(t)).forEach(t => {
                        t && (t.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = i), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](s.lockClass))
                    })
                }

                function n() {
                    let {
                        nextEl: t,
                        prevEl: i
                    } = e.navigation;
                    if (e.params.loop) {
                        l(i, !1), l(t, !1);
                        return
                    }
                    l(i, e.isBeginning && !e.params.rewind), l(t, e.isEnd && !e.params.rewind)
                }

                function o(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
                }

                function d(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
                }

                function c() {
                    let t = e.params.navigation;
                    if (e.params.navigation = W(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(t.nextEl || t.prevEl)) return;
                    let i = a(t.nextEl),
                        s = a(t.prevEl);
                    Object.assign(e.navigation, {
                        nextEl: i,
                        prevEl: s
                    }), i = r(i), s = r(s);
                    let l = (i, s) => {
                        i && i.addEventListener("click", "next" === s ? d : o), !e.enabled && i && i.classList.add(...t.lockClass.split(" "))
                    };
                    i.forEach(e => l(e, "next")), s.forEach(e => l(e, "prev"))
                }

                function p() {
                    let {
                        nextEl: t,
                        prevEl: i
                    } = e.navigation;
                    t = r(t), i = r(i);
                    let s = (t, i) => {
                        t.removeEventListener("click", "next" === i ? d : o), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
                    };
                    t.forEach(e => s(e, "next")), i.forEach(e => s(e, "prev"))
                }
                i("init", () => {
                    !1 === e.params.navigation.enabled ? f() : (c(), n())
                }), i("toEdge fromEdge lock unlock", () => {
                    n()
                }), i("destroy", () => {
                    p()
                }), i("enable disable", () => {
                    let {
                        nextEl: t,
                        prevEl: i
                    } = e.navigation;
                    [...t = r(t), ...i = r(i)].filter(e => !!e).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass))
                }), i("click", (t, i) => {
                    let {
                        nextEl: a,
                        prevEl: l
                    } = e.navigation;
                    a = r(a), l = r(l);
                    let n = i.target;
                    if (e.params.navigation.hideOnClick && !l.includes(n) && !a.includes(n)) {
                        let t;
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                        a.length ? t = a[0].classList.contains(e.params.navigation.hiddenClass) : l.length && (t = l[0].classList.contains(e.params.navigation.hiddenClass)), !0 === t ? s("navigationShow") : s("navigationHide"), [...a, ...l].filter(e => !!e).forEach(t => t.classList.toggle(e.params.navigation.hiddenClass))
                    }
                });
                let u = () => {
                        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), n()
                    },
                    f = () => {
                        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), p()
                    };
                Object.assign(e.navigation, {
                    enable: u,
                    disable: f,
                    update: n,
                    init: c,
                    destroy: p
                })
            }

            function Y(e = "") {
                return `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function U({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r;
                let a = "swiper-pagination";
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${a}-bullet`,
                        bulletActiveClass: `${a}-bullet-active`,
                        modifierClass: `${a}-`,
                        currentClass: `${a}-current`,
                        totalClass: `${a}-total`,
                        hiddenClass: `${a}-hidden`,
                        progressbarFillClass: `${a}-progressbar-fill`,
                        progressbarOppositeClass: `${a}-progressbar-opposite`,
                        clickableClass: `${a}-clickable`,
                        lockClass: `${a}-lock`,
                        horizontalClass: `${a}-horizontal`,
                        verticalClass: `${a}-vertical`,
                        paginationDisabledClass: `${a}-disabled`
                    }
                }), e.pagination = {
                    el: null,
                    bullets: []
                };
                let l = 0,
                    n = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

                function o() {
                    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
                }

                function d(t, i) {
                    let {
                        bulletActiveClass: s
                    } = e.params.pagination;
                    t && (t = t[`${"prev"===i?"previous":"next"}ElementSibling`]) && (t.classList.add(`${s}-${i}`), (t = t[`${"prev"===i?"previous":"next"}ElementSibling`]) && t.classList.add(`${s}-${i}-${i}`))
                }

                function c(t) {
                    let i = t.target.closest(Y(e.params.pagination.bulletClass));
                    if (!i) return;
                    t.preventDefault();
                    let s = y(i) * e.params.slidesPerGroup;
                    if (e.params.loop) {
                        if (e.realIndex === s) return;
                        let t = e.getSlideIndexByData(s),
                            i = e.getSlideIndexByData(e.realIndex);
                        t > e.slides.length - e.loopedSlides && e.loopFix({
                            direction: t > i ? "next" : "prev",
                            activeSlideIndex: t,
                            slideTo: !1
                        }), e.slideToLoop(s)
                    } else e.slideTo(s)
                }

                function p() {
                    let t, i;
                    let a = e.rtl,
                        c = e.params.pagination;
                    if (o()) return;
                    let p = e.pagination.el;
                    p = n(p);
                    let u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        f = e.params.loop ? Math.ceil(u / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (i = e.previousRealIndex || 0, t = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (t = e.snapIndex, i = e.previousSnapIndex) : (i = e.previousIndex || 0, t = e.activeIndex || 0), "bullets" === c.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        let s, n, o;
                        let u = e.pagination.bullets;
                        if (c.dynamicBullets && (r = x(u[0], e.isHorizontal() ? "width" : "height", !0), p.forEach(t => {
                                t.style[e.isHorizontal() ? "width" : "height"] = `${r*(c.dynamicMainBullets+4)}px`
                            }), c.dynamicMainBullets > 1 && void 0 !== i && ((l += t - (i || 0)) > c.dynamicMainBullets - 1 ? l = c.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = ((n = (s = Math.max(t - l, 0)) + (Math.min(u.length, c.dynamicMainBullets) - 1)) + s) / 2), u.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${c.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), p.length > 1) u.forEach(e => {
                            let i = y(e);
                            i === t && e.classList.add(...c.bulletActiveClass.split(" ")), c.dynamicBullets && (i >= s && i <= n && e.classList.add(...`${c.bulletActiveClass}-main`.split(" ")), i === s && d(e, "prev"), i === n && d(e, "next"))
                        });
                        else {
                            let e = u[t];
                            if (e && e.classList.add(...c.bulletActiveClass.split(" ")), c.dynamicBullets) {
                                let e = u[s],
                                    t = u[n];
                                for (let e = s; e <= n; e += 1) u[e] && u[e].classList.add(...`${c.bulletActiveClass}-main`.split(" "));
                                d(e, "prev"), d(t, "next")
                            }
                        }
                        if (c.dynamicBullets) {
                            let t = Math.min(u.length, c.dynamicMainBullets + 4),
                                i = (r * t - r) / 2 - o * r,
                                s = a ? "right" : "left";
                            u.forEach(t => {
                                t.style[e.isHorizontal() ? s : "top"] = `${i}px`
                            })
                        }
                    }
                    p.forEach((i, r) => {
                        if ("fraction" === c.type && (i.querySelectorAll(Y(c.currentClass)).forEach(e => {
                                e.textContent = c.formatFractionCurrent(t + 1)
                            }), i.querySelectorAll(Y(c.totalClass)).forEach(e => {
                                e.textContent = c.formatFractionTotal(f)
                            })), "progressbar" === c.type) {
                            let s;
                            s = c.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                            let r = (t + 1) / f,
                                a = 1,
                                l = 1;
                            "horizontal" === s ? a = r : l = r, i.querySelectorAll(Y(c.progressbarFillClass)).forEach(t => {
                                t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${l})`, t.style.transitionDuration = `${e.params.speed}ms`
                            })
                        }
                        "custom" === c.type && c.renderCustom ? (i.innerHTML = c.renderCustom(e, t + 1, f), 0 === r && s("paginationRender", i)) : (0 === r && s("paginationRender", i), s("paginationUpdate", i)), e.params.watchOverflow && e.enabled && i.classList[e.isLocked ? "add" : "remove"](c.lockClass)
                    })
                }

                function u() {
                    let t = e.params.pagination;
                    if (o()) return;
                    let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.el;
                    r = n(r);
                    let a = "";
                    if ("bullets" === t.type) {
                        let s = e.params.loop ? Math.ceil(i / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && s > i && (s = i);
                        for (let i = 0; i < s; i += 1) t.renderBullet ? a += t.renderBullet.call(e, i, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`
                    }
                    "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], r.forEach(i => {
                        "custom" !== t.type && (i.innerHTML = a || ""), "bullets" === t.type && e.pagination.bullets.push(...i.querySelectorAll(Y(t.bulletClass)))
                    }), "custom" !== t.type && s("paginationRender", r[0])
                }

                function f() {
                    let t;
                    e.params.pagination = W(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let i = e.params.pagination;
                    i.el && ("string" == typeof i.el && e.isElement && (t = e.el.shadowRoot.querySelector(i.el)), t || "string" != typeof i.el || (t = [...document.querySelectorAll(i.el)]), t || (t = i.el), t && 0 !== t.length && (e.params.uniqueNavElements && "string" == typeof i.el && Array.isArray(t) && t.length > 1 && (t = [...e.el.querySelectorAll(i.el)]).length > 1 && (t = t.filter(t => E(t, ".swiper")[0] === e.el)[0]), Array.isArray(t) && 1 === t.length && (t = t[0]), Object.assign(e.pagination, {
                        el: t
                    }), (t = n(t)).forEach(t => {
                        "bullets" === i.type && i.clickable && t.classList.add(i.clickableClass), t.classList.add(i.modifierClass + i.type), t.classList.add(e.isHorizontal() ? i.horizontalClass : i.verticalClass), "bullets" === i.type && i.dynamicBullets && (t.classList.add(`${i.modifierClass}${i.type}-dynamic`), l = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && t.classList.add(i.progressbarOppositeClass), i.clickable && t.addEventListener("click", c), e.enabled || t.classList.add(i.lockClass)
                    })))
                }

                function h() {
                    let t = e.params.pagination;
                    if (o()) return;
                    let i = e.pagination.el;
                    i && (i = n(i)).forEach(i => {
                        i.classList.remove(t.hiddenClass), i.classList.remove(t.modifierClass + t.type), i.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && i.removeEventListener("click", c)
                    }), e.pagination.bullets && e.pagination.bullets.forEach(e => e.classList.remove(...t.bulletActiveClass.split(" ")))
                }
                i("changeDirection", () => {
                    if (!e.pagination || !e.pagination.el) return;
                    let t = e.params.pagination,
                        {
                            el: i
                        } = e.pagination;
                    (i = n(i)).forEach(i => {
                        i.classList.remove(t.horizontalClass, t.verticalClass), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
                    })
                }), i("init", () => {
                    !1 === e.params.pagination.enabled ? g() : (f(), u(), p())
                }), i("activeIndexChange", () => {
                    void 0 === e.snapIndex && p()
                }), i("snapIndexChange", () => {
                    p()
                }), i("snapGridLengthChange", () => {
                    u(), p()
                }), i("destroy", () => {
                    h()
                }), i("enable disable", () => {
                    let {
                        el: t
                    } = e.pagination;
                    t && (t = n(t)).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))
                }), i("lock unlock", () => {
                    p()
                }), i("click", (t, i) => {
                    let r = i.target,
                        {
                            el: a
                        } = e.pagination;
                    if (Array.isArray(a) || (a = [a].filter(e => !!e)), e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !r.classList.contains(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && r === e.navigation.nextEl || e.navigation.prevEl && r === e.navigation.prevEl)) return;
                        let t = a[0].classList.contains(e.params.pagination.hiddenClass);
                        !0 === t ? s("paginationShow") : s("paginationHide"), a.forEach(t => t.classList.toggle(e.params.pagination.hiddenClass))
                    }
                });
                let m = () => {
                        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                        let {
                            el: t
                        } = e.pagination;
                        t && (t = n(t)).forEach(t => t.classList.remove(e.params.pagination.paginationDisabledClass)), f(), u(), p()
                    },
                    g = () => {
                        e.el.classList.add(e.params.pagination.paginationDisabledClass);
                        let {
                            el: t
                        } = e.pagination;
                        t && (t = n(t)).forEach(t => t.classList.add(e.params.pagination.paginationDisabledClass)), h()
                    };
                Object.assign(e.pagination, {
                    enable: m,
                    disable: g,
                    render: u,
                    update: p,
                    init: f,
                    destroy: h
                })
            }

            function K({
                swiper: e,
                extendParams: t,
                on: i
            }) {
                t({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                }), e.a11y = {
                    clicked: !1
                };
                let s = null;

                function r(e) {
                    let t = s;
                    0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
                }
                let a = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

                function l(e) {
                    (e = a(e)).forEach(e => {
                        e.setAttribute("tabIndex", "0")
                    })
                }

                function n(e) {
                    (e = a(e)).forEach(e => {
                        e.setAttribute("tabIndex", "-1")
                    })
                }

                function o(e, t) {
                    (e = a(e)).forEach(e => {
                        e.setAttribute("role", t)
                    })
                }

                function d(e, t) {
                    (e = a(e)).forEach(e => {
                        e.setAttribute("aria-roledescription", t)
                    })
                }

                function c(e, t) {
                    (e = a(e)).forEach(e => {
                        e.setAttribute("aria-label", t)
                    })
                }

                function p(e) {
                    (e = a(e)).forEach(e => {
                        e.setAttribute("aria-disabled", !0)
                    })
                }

                function u(e) {
                    (e = a(e)).forEach(e => {
                        e.setAttribute("aria-disabled", !1)
                    })
                }

                function f(t) {
                    if (13 !== t.keyCode && 32 !== t.keyCode) return;
                    let i = e.params.a11y,
                        s = t.target;
                    (!(e.pagination && e.pagination.el && (s === e.pagination.el || e.pagination.el.contains(t.target))) || t.target.matches(Y(e.params.pagination.bulletClass))) && (e.navigation && e.navigation.nextEl && s === e.navigation.nextEl && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? r(i.lastSlideMessage) : r(i.nextSlideMessage)), e.navigation && e.navigation.prevEl && s === e.navigation.prevEl && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? r(i.firstSlideMessage) : r(i.prevSlideMessage)), e.pagination && s.matches(Y(e.params.pagination.bulletClass)) && s.click())
                }

                function h() {
                    return e.pagination && e.pagination.bullets && e.pagination.bullets.length
                }

                function m() {
                    return h() && e.params.pagination.clickable
                }
                let g = (e, t, i) => {
                        l(e), "BUTTON" !== e.tagName && (o(e, "button"), e.addEventListener("keydown", f)), c(e, i),
                            function(e, t) {
                                (e = a(e)).forEach(e => {
                                    e.setAttribute("aria-controls", t)
                                })
                            }(e, t)
                    },
                    v = () => {
                        e.a11y.clicked = !0
                    },
                    b = () => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e.destroyed || (e.a11y.clicked = !1)
                            })
                        })
                    },
                    S = t => {
                        if (e.a11y.clicked) return;
                        let i = t.target.closest(`.${e.params.slideClass}, swiper-slide`);
                        if (!i || !e.slides.includes(i)) return;
                        let s = e.slides.indexOf(i) === e.activeIndex,
                            r = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(i);
                        !s && !r && (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, e.slideTo(e.slides.indexOf(i), 0)))
                    },
                    E = () => {
                        let t = e.params.a11y;
                        t.itemRoleDescriptionMessage && d(e.slides, t.itemRoleDescriptionMessage), t.slideRole && o(e.slides, t.slideRole);
                        let i = e.slides.length;
                        t.slideLabelMessage && e.slides.forEach((s, r) => {
                            let a = e.params.loop ? parseInt(s.getAttribute("data-swiper-slide-index"), 10) : r,
                                l = t.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, i);
                            c(s, l)
                        })
                    },
                    T = () => {
                        let t = e.params.a11y;
                        e.el.append(s);
                        let i = e.el;
                        t.containerRoleDescriptionMessage && d(i, t.containerRoleDescriptionMessage), t.containerMessage && c(i, t.containerMessage);
                        let r = e.wrapperEl,
                            l = t.id || r.getAttribute("id") || `swiper-wrapper-${function(e=16){let t=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(e).replace(/x/g,t)}(16)}`,
                            n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                        ! function(e, t) {
                            (e = a(e)).forEach(e => {
                                e.setAttribute("id", t)
                            })
                        }(r, l),
                        function(e, t) {
                            (e = a(e)).forEach(e => {
                                e.setAttribute("aria-live", t)
                            })
                        }(r, n), E();
                        let {
                            nextEl: o,
                            prevEl: p
                        } = e.navigation ? e.navigation : {};
                        if (o = a(o), p = a(p), o && o.forEach(e => g(e, l, t.nextSlideMessage)), p && p.forEach(e => g(e, l, t.prevSlideMessage)), m()) {
                            let t = Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el];
                            t.forEach(e => {
                                e.addEventListener("keydown", f)
                            })
                        }
                        e.el.addEventListener("focus", S, !0), e.el.addEventListener("pointerdown", v, !0), e.el.addEventListener("pointerup", b, !0)
                    };
                i("beforeInit", () => {
                    (s = w("span", e.params.a11y.notificationClass)).setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), e.isElement && s.setAttribute("slot", "container-end")
                }), i("afterInit", () => {
                    e.params.a11y.enabled && T()
                }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
                    e.params.a11y.enabled && E()
                }), i("fromEdge toEdge afterInit lock unlock", () => {
                    e.params.a11y.enabled && function() {
                        if (e.params.loop || e.params.rewind || !e.navigation) return;
                        let {
                            nextEl: t,
                            prevEl: i
                        } = e.navigation;
                        i && (e.isBeginning ? (p(i), n(i)) : (u(i), l(i))), t && (e.isEnd ? (p(t), n(t)) : (u(t), l(t)))
                    }()
                }), i("paginationUpdate", () => {
                    e.params.a11y.enabled && function() {
                        let t = e.params.a11y;
                        h() && e.pagination.bullets.forEach(i => {
                            e.params.pagination.clickable && (l(i), e.params.pagination.renderBullet || (o(i, "button"), c(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, y(i) + 1)))), i.matches(Y(e.params.pagination.bulletActiveClass)) ? i.setAttribute("aria-current", "true") : i.removeAttribute("aria-current")
                        })
                    }()
                }), i("destroy", () => {
                    e.params.a11y.enabled && function() {
                        s && s.length > 0 && s.remove();
                        let {
                            nextEl: t,
                            prevEl: i
                        } = e.navigation ? e.navigation : {};
                        if (t = a(t), i = a(i), t && t.forEach(e => e.removeEventListener("keydown", f)), i && i.forEach(e => e.removeEventListener("keydown", f)), m()) {
                            let t = Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el];
                            t.forEach(e => {
                                e.removeEventListener("keydown", f)
                            })
                        }
                        e.el.removeEventListener("focus", S, !0), e.el.removeEventListener("pointerdown", v, !0), e.el.removeEventListener("pointerup", b, !0)
                    }()
                })
            }

            function Z({
                swiper: e,
                extendParams: t,
                emit: i,
                once: s
            }) {
                t({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(e, {
                    freeMode: {
                        onTouchStart: function() {
                            let t = e.getTranslate();
                            e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
                                currentPos: e.rtl ? e.translate : -e.translate
                            })
                        },
                        onTouchMove: function() {
                            let {
                                touchEventsData: t,
                                touches: i
                            } = e;
                            0 === t.velocities.length && t.velocities.push({
                                position: i[e.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }), t.velocities.push({
                                position: i[e.isHorizontal() ? "currentX" : "currentY"],
                                time: f()
                            })
                        },
                        onTouchEnd: function({
                            currentPos: t
                        }) {
                            let {
                                params: r,
                                wrapperEl: a,
                                rtlTranslate: l,
                                snapGrid: n,
                                touchEventsData: o
                            } = e, d = f(), c = d - o.touchStartTime;
                            if (t < -e.minTranslate()) {
                                e.slideTo(e.activeIndex);
                                return
                            }
                            if (t > -e.maxTranslate()) {
                                e.slides.length < n.length ? e.slideTo(n.length - 1) : e.slideTo(e.slides.length - 1);
                                return
                            }
                            if (r.freeMode.momentum) {
                                let t, d;
                                if (o.velocities.length > 1) {
                                    let t = o.velocities.pop(),
                                        i = o.velocities.pop(),
                                        s = t.position - i.position,
                                        a = t.time - i.time;
                                    e.velocity = s / a, e.velocity /= 2, Math.abs(e.velocity) < r.freeMode.minimumVelocity && (e.velocity = 0), (a > 150 || f() - t.time > 300) && (e.velocity = 0)
                                } else e.velocity = 0;
                                e.velocity *= r.freeMode.momentumVelocityRatio, o.velocities.length = 0;
                                let c = 1e3 * r.freeMode.momentumRatio,
                                    p = e.velocity * c,
                                    u = e.translate + p;
                                l && (u = -u);
                                let h = !1,
                                    m = 20 * Math.abs(e.velocity) * r.freeMode.momentumBounceRatio;
                                if (u < e.maxTranslate()) r.freeMode.momentumBounce ? (u + e.maxTranslate() < -m && (u = e.maxTranslate() - m), t = e.maxTranslate(), h = !0, o.allowMomentumBounce = !0) : u = e.maxTranslate(), r.loop && r.centeredSlides && (d = !0);
                                else if (u > e.minTranslate()) r.freeMode.momentumBounce ? (u - e.minTranslate() > m && (u = e.minTranslate() + m), t = e.minTranslate(), h = !0, o.allowMomentumBounce = !0) : u = e.minTranslate(), r.loop && r.centeredSlides && (d = !0);
                                else if (r.freeMode.sticky) {
                                    let t;
                                    for (let e = 0; e < n.length; e += 1)
                                        if (n[e] > -u) {
                                            t = e;
                                            break
                                        }
                                    u = -(u = Math.abs(n[t] - u) < Math.abs(n[t - 1] - u) || "next" === e.swipeDirection ? n[t] : n[t - 1])
                                }
                                if (d && s("transitionEnd", () => {
                                        e.loopFix()
                                    }), 0 !== e.velocity) {
                                    if (c = l ? Math.abs((-u - e.translate) / e.velocity) : Math.abs((u - e.translate) / e.velocity), r.freeMode.sticky) {
                                        let t = Math.abs((l ? -u : u) - e.translate),
                                            i = e.slidesSizesGrid[e.activeIndex];
                                        c = t < i ? r.speed : t < 2 * i ? 1.5 * r.speed : 2.5 * r.speed
                                    }
                                } else if (r.freeMode.sticky) {
                                    e.slideToClosest();
                                    return
                                }
                                r.freeMode.momentumBounce && h ? (e.updateProgress(t), e.setTransition(c), e.setTranslate(u), e.transitionStart(!0, e.swipeDirection), e.animating = !0, T(a, () => {
                                    e && !e.destroyed && o.allowMomentumBounce && (i("momentumBounce"), e.setTransition(r.speed), setTimeout(() => {
                                        e.setTranslate(t), T(a, () => {
                                            e && !e.destroyed && e.transitionEnd()
                                        })
                                    }, 0))
                                })) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(u), e.setTransition(c), e.setTranslate(u), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, T(a, () => {
                                    e && !e.destroyed && e.transitionEnd()
                                }))) : e.updateProgress(u), e.updateActiveIndex(), e.updateSlidesClasses()
                            } else if (r.freeMode.sticky) {
                                e.slideToClosest();
                                return
                            } else r.freeMode && i("_freeModeNoMomentumRelease");
                            (!r.freeMode.momentum || c >= r.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                        }
                    }
                })
            }
        }
    }
]);