(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(3937)
            }])
        },
        6651: function(e, s, t) {
            "use strict";
            var l = t(5893),
                a = t(1664),
                n = t.n(a),
                i = t(9755),
                r = t.n(i),
                c = t(5697),
                d = t.n(c),
                o = t(8193),
                x = t(7516),
                m = t(3750),
                p = t(3299),
                u = t(8473);
            t(6501);
            var h = t(7294);
            let A = function() {
                    for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
                    return s.filter(Boolean).join(" ")
                },
                f = e => {
                    let {
                        id: s = "",
                        image: t = "",
                        title: a = "",
                        address: i = "",
                        sqfeet: c = 0,
                        guests: d = 0,
                        beds: f = 0,
                        baths: g = 0,
                        price: j = 0,
                        favorite: b = !1,
                        onClickFavorite: N = () => null
                    } = e, {
                        data: y,
                        status: v
                    } = (0, p.useSession)();
                    null == y || y.user;
                    let [w, B] = (0, h.useState)(!0), [E, k] = (0, h.useState)(!1), z = () => k(!0), S = () => k(!1);
                    return (0, l.jsx)(n(), {
                        href: "/homes/".concat(s),
                        children: (0, l.jsxs)("div", {
                            className: "relative max-w-sm rounded-lg bg-white shadow-md hover:shadow-xl md:w-full xl:w-80",
                            children: [(0, l.jsx)("div", {
                                className: " aspect-h-10 rounded-t-md aspect-w-16 overflow-hidden ",
                                children: t ? (0, l.jsx)(r(), {
                                    src: t,
                                    alt: a,
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: A("duration-700 ease-in-out group-hover:opacity-75", w ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"),
                                    onLoadingComplete: () => B(!1)
                                }) : (0, l.jsx)("div", {
                                    className: "flex h-full w-full items-center justify-center rounded-t-lg bg-gray-200",
                                    children: (0, l.jsx)(x.OQv, {
                                        className: "text-4xl text-purple-500"
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: " absolute  z-10 -ml-3 -mt-5 flex  items-center gap-x-1 rounded-br-lg rounded-tl-lg rounded-tr-md bg-purple-700 px-7 py-1 text-white ",
                                children: [" ", (0, l.jsx)(m.nfF, {}), " POPULAR"]
                            }), (0, l.jsx)(m.Ejc, {
                                className: " absolute  -ml-2.5 rotate-12  text-purple-900"
                            }), (0, l.jsxs)("div", {
                                className: "flex justify-between px-5 pt-8",
                                children: [(0, l.jsxs)("p", {
                                    className: "mb-2 text-xl font-bold tracking-tight text-purple-700 ",
                                    children: [new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR"
                                    }).format(null != j ? j : 0), " ", (0, l.jsx)("span", {
                                        className: " text-sm font-normal text-gray-500",
                                        children: "/month"
                                    })]
                                }), (0, l.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Favorite",
                                    onClick: e => {
                                        e.preventDefault(), (null == y ? void 0 : y.user) && "function" == typeof N ? N(s) : z()
                                    },
                                    className: " flex h-10 w-10 items-center justify-center  rounded-full border border-purple-700 text-xl text-purple-800 ",
                                    children: b ? (0, l.jsx)(o.M_L, {
                                        className: "h-7 w-7  text-purple-800 transition"
                                    }) : (0, l.jsx)(o.lo, {
                                        className: "h-7 w-7  text-purple-700 transition"
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "space-y-4  px-5 ",
                                children: (0, l.jsx)("h5", {
                                    className: "mb-2 line-clamp-1 text-2xl font-bold tracking-tight  text-gray-900 ",
                                    children: null != a ? a : ""
                                })
                            }), (0, l.jsxs)("div", {
                                className: "divide-y-2 px-5",
                                children: [(0, l.jsx)("p", {
                                    className: "mb-3 line-clamp-1 font-normal text-gray-700   ",
                                    children: null != i ? i : ""
                                }), (0, l.jsx)("div", {
                                    className: "",
                                    children: (0, l.jsxs)("div", {
                                        className: " flex flex-wrap justify-between py-3",
                                        children: [(0, l.jsxs)("p", {
                                            className: "flex items-center py-2   ",
                                            children: [(0, l.jsx)("span", {
                                                className: "text-xl text-purple-800  sm:text-base ",
                                                children: (0, l.jsx)(x.pWL, {})
                                            }), (0, l.jsx)("span", {
                                                className: "px-1 text-lg text-gray-700 sm:text-sm",
                                                children: null != f ? f : 0
                                            }), (0, l.jsx)("span", {
                                                className: "hidden text-sm text-gray-700 sm:block ",
                                                children: "Beds"
                                            })]
                                        }), (0, l.jsxs)("p", {
                                            className: "flex items-center   ",
                                            children: [(0, l.jsx)("span", {
                                                className: " text-xl text-purple-800  sm:text-base ",
                                                children: (0, l.jsx)(x.lc8, {})
                                            }), (0, l.jsx)("span", {
                                                className: "px-1 text-lg text-gray-700 sm:text-sm",
                                                children: null != g ? g : 0
                                            }), (0, l.jsx)("span", {
                                                className: "hidden text-sm text-gray-700 sm:block ",
                                                children: "Bathrooms"
                                            })]
                                        }), (0, l.jsxs)("p", {
                                            className: " flex items-center   ",
                                            children: [(0, l.jsx)("span", {
                                                className: " text-xl text-purple-800  sm:text-base ",
                                                children: (0, l.jsx)(x.yB9, {})
                                            }), (0, l.jsxs)("span", {
                                                className: "px-1 text-lg text-gray-700 sm:text-sm",
                                                children: [" ", null != c ? c : 0]
                                            }), (0, l.jsx)("span", {
                                                className: "hidden text-sm text-gray-700 sm:block ",
                                                children: "Sqfeet"
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, l.jsx)(u.Z, {
                                show: E,
                                onClose: S
                            })]
                        })
                    })
                };
            f.propTypes = {
                id: d().string.isRequired,
                image: d().string,
                title: d().string,
                description: d().string,
                address: d().string,
                sqfeet: d().number,
                guests: d().number,
                beds: d().number,
                baths: d().number,
                price: d().number,
                favorite: d().bool,
                onClickFavorite: d().func
            }, s.Z = f
        },
        4809: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return o
                }
            });
            var l = t(5893),
                a = t(7294),
                n = t(2546),
                i = t(6523);
            t(4950), t(6929), t(4256), t(4233);
            var r = t(6501),
                c = t(6651),
                d = t(6154);

            function o() {
                let [e, s] = (0, a.useState)([]);
                (0, a.useEffect)(() => {
                    d.Z.get("/api/get-homes").then(e => {
                        s(e.data)
                    })
                }, []);
                let [t, o] = (0, a.useState)([]);
                e.length, (0, a.useEffect)(() => {
                    (async () => {
                        try {
                            let {
                                data: e
                            } = await d.Z.get("/api/user/favorites");
                            o(e)
                        } catch (e) {
                            o([])
                        }
                    })()
                }, []);
                let x = e => {
                    try {
                        r.ZP.dismiss("updateFavorite"), o(s => {
                            let t = s.find(s => s === e);
                            return t ? (d.Z.delete("/api/homes/".concat(e, "/favorite")), s.filter(s => s !== e)) : (d.Z.put("/api/homes/".concat(e, "/favorite")), [...s, e])
                        })
                    } catch (e) {
                        r.ZP.error("Unable to update favorite", {
                            id: "updateFavorite"
                        })
                    }
                };
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(n.tq, {
                        freeMode: !0,
                        navigation: {
                            enabled: !0
                        },
                        pagination: {
                            clickable: !0,
                            dynamicBullets: !0
                        },
                        modules: [i.Rv, i.tl, i.W_, i.s5],
                        className: "mySwiper",
                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                navigation: {
                                    enabled: !1
                                }
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                navigation: {
                                    enabled: !0
                                }
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                                navigation: {
                                    enabled: !0
                                }
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                                navigation: {
                                    enabled: !0
                                }
                            }
                        },
                        children: (0, l.jsx)(l.Fragment, {
                            children: e.map(s => (0, l.jsxs)(n.o5, {
                                className: "pr-5 ",
                                children: [(0, l.jsx)("div", {
                                    children: (0, l.jsx)(c.Z, { ...s,
                                        onClickFavorite: x,
                                        favorite: !!t.find(e => e === s.id)
                                    }, s.id)
                                }), " "]
                            }, e.id))
                        })
                    })
                })
            }
        },
        3937: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return f
                }
            });
            var l = t(5893),
                a = t(5385),
                n = {
                    src: "/_next/static/media/house11.0e948bc9.jpg",
                    height: 3605,
                    width: 5408,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIDBAUSETFSYeH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAECABH/2gAMAwEAAhEDEQA/ALJLjVmZ0zpBiDkIg0BunH3ftERXd0PBxDf/2Q==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                i = {
                    src: "/_next/static/media/faq.25858b2d.png",
                    height: 7730,
                    width: 7730,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEVMaXHpzdn30NSWtPj4ko7N2/7zpaaU8Pv/dWT14N8dBnmtx/zviIefwv/H1Pmkzf/Yp7yap92tx/2+t/HjlZ+em833wMG+ptHZo7Xlpa690Pmfqduix/+Ypv3Wqb4QGTFuAAAAF3RSTlMA/f5D8Nn9BgwLJ6mHtMCSfL3g7e2v6xTmj2IAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVAiZHctHEoAgEADBAYFlTZgx//+ZFva9AWKkkMG5VoC0B5MbEJ9NOLyg82PdOSmsl33vHqjHbemq/2npH0nbAjblAQzWAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                r = t(5675),
                c = t.n(r),
                d = t(4809);

            function o() {
                return (0, l.jsx)("div", {
                    children: (0, l.jsx)("section", {
                        className: "text-gray-700",
                        children: (0, l.jsx)("div", {
                            className: "container mx-auto px-5",
                            children: (0, l.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1000",
                                className: "-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 ",
                                children: (0, l.jsxs)("div", {
                                    className: "w-full py-2 ",
                                    children: [(0, l.jsxs)("details", {
                                        className: "mb-4",
                                        children: [(0, l.jsx)("summary", {
                                            className: "rounded-md text-purple-700 outline outline-1 outline-purple-400 hover:bg-purple-200 px-5 py-5 font-semibold",
                                            children: "How do I find rental properties on the website?"
                                        }), (0, l.jsx)("p", {
                                            className: "pl-4 pt-4 text-left  ",
                                            children: "You can search for rental properties on our website by using our search bar or filtering options. You can filter by location, price range, number of bedrooms, and other amenities."
                                        })]
                                    }), (0, l.jsxs)("details", {
                                        className: "mb-4",
                                        children: [(0, l.jsx)("summary", {
                                            className: "rounded-md text-purple-700 outline outline-1 outline-purple-400 hover:bg-purple-200 px-4 py-5 font-semibold",
                                            children: "How do I list my property on Rent House?"
                                        }), (0, l.jsx)("p", {
                                            className: "pl-4 pt-4 text-left antialiased ",
                                            children: "Each rental property may have different application procedures, but typically you can apply by filling out an online application and submitting it along with any required documentation such as proof of income and a background check."
                                        })]
                                    }), (0, l.jsxs)("details", {
                                        className: "mb-4",
                                        children: [(0, l.jsx)("summary", {
                                            className: "rounded-md  text-purple-700 outline outline-1 outline-purple-400 hover:bg-purple-200 px-5 py-5 font-semibold",
                                            children: "What fees do I need to pay to rent a property?"
                                        }), (0, l.jsx)("p", {
                                            className: "pl-4 pt-4 text-left antialiased ",
                                            children: "Rental fees vary depending on the property and location. Typically, you will need to pay a security deposit, first and last month's rent, and any application fees."
                                        })]
                                    }), (0, l.jsxs)("details", {
                                        className: "mb-4",
                                        children: [(0, l.jsx)("summary", {
                                            className: "rounded-md  text-purple-700 outline outline-1 outline-purple-400 hover:bg-purple-200 px-5 py-5 font-semibold",
                                            children: "How do I contact the property owner?"
                                        }), (0, l.jsx)("p", {
                                            className: "pl-4 pt-4 text-left antialiased ",
                                            children: "You can contact the property owner or manager by filling out the contact form on the listing page or by using the phone number or email address provided in the listing. Some listings may also offer a live chat option or a scheduling tool to set up a viewing or appointment."
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
            t(7294);
            var x = t(7735),
                m = t(8193),
                p = t(7516),
                u = t(1664),
                h = t.n(u);
            p.wTD;
            let A = () => (0, l.jsx)(a.Z, {
                children: (0, l.jsxs)("div", {
                    className: "  min-h-screen bg-gray-100",
                    children: [(0, l.jsxs)("div", {
                        className: " flex flex-wrap justify-between bg-purple-100 p-5 px-5 sm:px-10 md:px-20 ",
                        children: [(0, l.jsxs)("div", {
                            className: " space-y-5",
                            children: [(0, l.jsxs)("h1", {
                                className: "text-2xl font-bold text-gray-800 sm:text-4xl md:text-6xl",
                                children: ["Discover ", (0, l.jsx)("br", {}), "Most Suitable ", (0, l.jsx)("br", {}), "Property"]
                            }), (0, l.jsxs)("p", {
                                className: "text-xs text-gray-600 sm:text-sm md:text-lg",
                                children: ["Find a variety of properties that suit you very easy, ", (0, l.jsx)("br", {}), "Forget all difficulties in finding a residence for you"]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "  ",
                            children: (0, l.jsx)(c(), {
                                className: " -mb-20 rounded-br-extraLarge rounded-tl-extraLarge pt-5",
                                src: n,
                                alt: "",
                                width: 500,
                                height: 500
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "mx-auto max-w-screen-lg",
                        children: [(0, l.jsxs)("div", {
                            className: "  mb-10 mt-20 p-5",
                            children: [(0, l.jsxs)("div", {
                                className: " flex justify-between py-2 ",
                                children: [(0, l.jsx)("p", {
                                    className: " text-2xl font-bold text-gray-700 ",
                                    children: "Similar Houses"
                                }), (0, l.jsx)(h(), {
                                    href: "/allhouses",
                                    children: (0, l.jsx)("button", {
                                        type: "button",
                                        "aria-label": "View All",
                                        className: "ml-4 rounded-md bg-purple-600 px-3 py-2 text-white transition hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50",
                                        children: "View All"
                                    })
                                })]
                            }), (0, l.jsx)(d.Z, {})]
                        }), (0, l.jsxs)("div", {
                            className: " p-5",
                            children: [(0, l.jsxs)("div", {
                                className: " mb-10 justify-between rounded-md border bg-white p-5 pb-10 shadow-md",
                                children: [(0, l.jsxs)("div", {
                                    className: "px-5",
                                    children: [(0, l.jsx)("h1", {
                                        className: "text-xl font-bold text-gray-800 sm:text-2xl md:text-4xl",
                                        children: "So, what's Rent House?"
                                    }), (0, l.jsx)("p", {
                                        className: "text-xs sm:text-sm md:text-base",
                                        children: "The goal of our website is to streamline the rental process for both landlords and tenants, making it easier and more efficient to find and manage rental properties."
                                    })]
                                }), (0, l.jsx)("hr", {
                                    className: "my-6 border-gray-700  sm:mx-auto lg:my-8"
                                }), (0, l.jsx)("div", {
                                    className: "flex flex-col-reverse px-5 sm:flex-row md:flex-row lg:flex-row",
                                    children: (0, l.jsxs)("div", {
                                        className: "",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex items-start gap-x-5 ",
                                            children: [(0, l.jsx)("div", {
                                                className: "rounded-full p-2 text-xl text-blue-500 outline outline-blue-400",
                                                children: (0, l.jsx)("span", {
                                                    className: " ",
                                                    children: (0, l.jsx)(x.xQl, {})
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "",
                                                children: [(0, l.jsx)("h2", {
                                                    className: "flex items-center gap-x-3 text-xl  font-bold text-gray-800 sm:text-2xl  md:text-xl",
                                                    children: "Register online"
                                                }), (0, l.jsx)("p", {
                                                    className: "text-xs sm:text-sm md:text-base",
                                                    children: "Submit digital rental applications and credit reports with Rent House's."
                                                })]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "flex items-start gap-x-5 py-5",
                                            children: [(0, l.jsx)("div", {
                                                className: "rounded-full p-2 text-xl text-teal-500 outline outline-teal-400",
                                                children: (0, l.jsx)("span", {
                                                    className: " ",
                                                    children: (0, l.jsx)(m.bzc, {})
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "",
                                                children: [(0, l.jsx)("h2", {
                                                    className: "flex items-center gap-x-3 text-xl  font-bold text-gray-800 sm:text-2xl  md:text-xl",
                                                    children: "Easy listings"
                                                }), (0, l.jsx)("p", {
                                                    className: "text-xs sm:text-sm md:text-base",
                                                    children: "Our inventory is updated in real-time, so you'll always see new rentals on Rent House first."
                                                })]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "flex items-start gap-x-5",
                                            children: [(0, l.jsx)("div", {
                                                className: "rounded-full p-2 text-xl text-pink-500 outline outline-pink-400",
                                                children: (0, l.jsx)("span", {
                                                    className: " ",
                                                    children: (0, l.jsx)(p.wTD, {})
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "",
                                                children: [(0, l.jsx)("h2", {
                                                    className: "flex items-center gap-x-3 text-xl  font-bold text-gray-800 sm:text-2xl  md:text-xl",
                                                    children: "Quick Searches"
                                                }), (0, l.jsx)("p", {
                                                    className: "text-xs sm:text-sm md:text-base",
                                                    children: "Filter by location, price range, bedroom count."
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "",
                                children: [(0, l.jsx)("div", {
                                    className: "mb-5 text-center",
                                    children: (0, l.jsx)("h1", {
                                        className: "title-font text-center text-2xl font-medium text-gray-900 sm:text-3xl",
                                        children: "Frequently Asked Questions"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "grid grid-cols-1  lg:grid-cols-3 ",
                                    children: [(0, l.jsx)("div", {
                                        className: " flex items-baseline  ",
                                        children: (0, l.jsx)(c(), {
                                            src: i,
                                            alt: "",
                                            width: 400,
                                            height: 400,
                                            className: " drop-shadow-md "
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-span-0 mt-5 lg:col-span-2",
                                        children: (0, l.jsx)(o, {})
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            });
            var f = A
        }
    },
    function(e) {
        e.O(0, [13, 617, 874, 994, 556, 415, 777, 569, 385, 774, 888, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);