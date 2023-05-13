"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [385], {
        8473: function(e, s, l) {
            var a = l(5893),
                r = l(7294),
                t = l(1664),
                i = l.n(t);
            l(5675);
            var n = l(5697),
                o = l.n(n),
                c = l(3299),
                d = l(6310),
                u = l(6501),
                m = l(2175),
                x = l(4080),
                h = l(6137),
                p = l(5445),
                f = l(3854),
                g = l(8193),
                b = l(1872);
            let j = d.Ry().shape({
                    email: d.Z_().trim().email("Invalid email").required("This field is required")
                }),
                y = e => {
                    let {
                        show: s = !1,
                        email: l = ""
                    } = e;
                    return (0, a.jsx)(x.u, {
                        appear: !0,
                        show: s,
                        as: r.Fragment,
                        children: (0, a.jsxs)("div", {
                            className: "fixed inset-0 z-50",
                            children: [(0, a.jsx)(x.u.Child, {
                                as: r.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, a.jsx)("div", {
                                    className: "fixed inset-0 bg-white"
                                })
                            }), (0, a.jsx)(x.u.Child, {
                                as: r.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: (0, a.jsx)("div", {
                                    className: "flex h-full items-center justify-center p-8 text-gray-800",
                                    children: (0, a.jsxs)("div", {
                                        className: "transform overflow-hidden transition-all",
                                        children: [(0, a.jsxs)("h3", {
                                            className: "text-center text-lg font-medium leading-6",
                                            children: [(0, a.jsx)("div", {
                                                className: "flex flex-col items-center justify-center space-y-4",
                                                children: (0, a.jsx)(f.wHo, {
                                                    className: "h-12 w-12 shrink-0 text-purple-500"
                                                })
                                            }), (0, a.jsx)("p", {
                                                className: "mt-2 text-2xl font-semibold",
                                                children: "Confirm your email"
                                            })]
                                        }), (0, a.jsxs)("p", {
                                            className: "mt-4 text-center text-lg",
                                            children: ["We emailed a magic link to ", (0, a.jsx)("strong", {
                                                children: null != l ? l : ""
                                            }), ".", (0, a.jsx)("br", {}), "Check your inbox and click the link in the email to login or sign up."]
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                v = e => {
                    var s;
                    let {
                        show: l = !1,
                        onClose: t = () => null
                    } = e, [n, o] = (0, r.useState)(!1), [d, v] = (0, r.useState)(!1), [N, w] = (0, r.useState)(!1), A = async e => {
                        let s, {
                            email: l
                        } = e;
                        try {
                            s = u.Am.loading("Loading..."), o(!0);
                            let {
                                error: e
                            } = await (0, c.signIn)("email", {
                                redirect: !1,
                                callbackUrl: window.location.href,
                                email: l
                            });
                            if (e) throw Error(e);
                            v(!0), u.Am.dismiss(s)
                        } catch (e) {
                            u.Am.error("Unable to sign in", {
                                id: s
                            })
                        } finally {
                            o(!1)
                        }
                    }, k = () => {
                        u.Am.loading("Redirecting..."), o(!0), (0, c.signIn)("google", {
                            callbackUrl: window.location.href
                        })
                    }, C = () => {
                        "function" == typeof t && t()
                    };
                    return (0, r.useEffect)(() => {
                        l || setTimeout(() => {
                            o(!1), v(!1), w(!1)
                        }, 200)
                    }, [l]), (0, r.useEffect)(() => {
                        u.Am.dismiss()
                    }, []), (0, a.jsx)(x.u, {
                        appear: !0,
                        show: l,
                        as: r.Fragment,
                        children: (0, a.jsxs)(h.V, {
                            as: "div",
                            className: "fixed inset-0 z-50 overflow-y-auto",
                            onClose: C,
                            children: [(0, a.jsx)(h.V.Overlay, {
                                className: "fixed inset-0 bg-black opacity-75"
                            }), (0, a.jsxs)("div", {
                                className: "min-h-screen text-center",
                                children: [(0, a.jsx)(x.u.Child, {
                                    as: r.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, a.jsx)(h.V.Overlay, {
                                        className: "fixed inset-0"
                                    })
                                }), (0, a.jsx)("span", {
                                    className: "inline-block h-screen align-middle",
                                    "aria-hidden": "true",
                                    children: "​"
                                }), (0, a.jsx)(x.u.Child, {
                                    as: r.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: (0, a.jsxs)("div", {
                                        className: "relative my-8 inline-block w-full max-w-md transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all sm:rounded-md  ",
                                        children: [(0, a.jsx)("button", {
                                            onClick: C,
                                            "aria-label": "Close",
                                            className: "absolute right-2 top-2 shrink-0 rounded-md p-1 transition hover:bg-gray-100 focus:outline-none",
                                            children: (0, a.jsx)(g.oHP, {
                                                className: "h-5 w-5 text-black "
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "p-12",
                                            children: (0, a.jsxs)("div", {
                                                className: "",
                                                children: [(0, a.jsx)("div", {
                                                    className: "flex justify-center",
                                                    children: (0, a.jsx)(i(), {
                                                        legacyBehavior: !0,
                                                        href: "/",
                                                        children: (0, a.jsxs)("a", {
                                                            className: "flex items-center space-x-1",
                                                            children: [(0, a.jsx)(f.Moc, {
                                                                className: "h-8 w-8 shrink-0 text-purple-800"
                                                            }), (0, a.jsxs)("span", {
                                                                className: "text-xl  font-semibold tracking-wide",
                                                                children: [(0, a.jsx)("span", {
                                                                    className: "text-xl font-semibold text-black",
                                                                    children: "Rent"
                                                                }), (0, a.jsx)("span", {
                                                                    className: "text-purple-800",
                                                                    children: "House"
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                }), (0, a.jsx)(h.V.Title, {
                                                    as: "h3",
                                                    className: "mt-6 text-center text-lg font-bold text-gray-900 sm:text-2xl ",
                                                    children: N ? "Welcome back!" : "Create your account"
                                                }), N ? null : (0, a.jsx)(h.V.Description, {
                                                    className: "mt-2 text-center text-base text-gray-500",
                                                    children: "Please create an account to list your homes and bookmark your favorite ones."
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-10",
                                                    children: [(0, a.jsxs)("button", {
                                                        disabled: n,
                                                        "aria-label": "Sign in with Google",
                                                        onClick: () => k(),
                                                        className: "mx-auto flex h-[46px] w-full items-center justify-center space-x-2 rounded-md border p-2 text-gray-500 transition-colors hover:border-gray-400 hover:bg-gray-50 hover:text-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:bg-transparent disabled:hover:text-gray-500",
                                                        children: [(0, a.jsx)(b.JM8, {
                                                            className: " h-8 w-8 "
                                                        }), (0, a.jsxs)("span", {
                                                            children: ["Sign ", N ? "in" : "up", " with Google"]
                                                        })]
                                                    }), (0, a.jsx)(m.J9, {
                                                        initialValues: {
                                                            email: ""
                                                        },
                                                        validationSchema: j,
                                                        validateOnBlur: !1,
                                                        onSubmit: A,
                                                        children: e => {
                                                            let {
                                                                isSubmitting: l,
                                                                isValid: r,
                                                                values: t,
                                                                resetForm: i
                                                            } = e;
                                                            return (0, a.jsxs)(m.l0, {
                                                                className: "mt-4",
                                                                children: [(0, a.jsx)(p.Z, {
                                                                    name: "email",
                                                                    type: "email",
                                                                    placeholder: "elon@spacex.com",
                                                                    disabled: n,
                                                                    spellCheck: !1
                                                                }), (0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    "aria-label": "Submit",
                                                                    disabled: n || !r,
                                                                    className: "mt-6 w-full rounded-md bg-purple-600 px-8 py-2 text-white transition hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-600 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-purple-600",
                                                                    children: l ? "Loading..." : "Sign ".concat(N ? "in" : "up")
                                                                }), (0, a.jsx)("p", {
                                                                    className: "mt-2 text-center text-sm text-gray-500",
                                                                    children: N ? (0, a.jsxs)(a.Fragment, {
                                                                        children: ["Don't have an account yet?", " ", (0, a.jsx)("button", {
                                                                            type: "button",
                                                                            "aria-label": "Sign up",
                                                                            disabled: n,
                                                                            onClick: () => {
                                                                                w(!1), i()
                                                                            },
                                                                            className: "font-semibold text-purple-500 underline underline-offset-1 hover:text-purple-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-purple-500",
                                                                            children: "Sign up"
                                                                        }), "."]
                                                                    }) : (0, a.jsxs)(a.Fragment, {
                                                                        children: ["Already have an account?", " ", (0, a.jsx)("button", {
                                                                            type: "button",
                                                                            "aria-label": "Log in",
                                                                            disabled: n,
                                                                            onClick: () => {
                                                                                w(!0), i()
                                                                            },
                                                                            className: "font-semibold text-purple-500 underline underline-offset-1 hover:text-purple-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-purple-500",
                                                                            children: "Log in"
                                                                        }), "."]
                                                                    })
                                                                }), (0, a.jsx)(y, {
                                                                    show: d,
                                                                    email: null !== (s = null == t ? void 0 : t.email) && void 0 !== s ? s : ""
                                                                })]
                                                            })
                                                        }
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                };
            v.propTypes = {
                show: o().bool,
                onClose: o().func
            }, s.Z = v
        },
        5445: function(e, s, l) {
            var a = l(5893),
                r = l(5697),
                t = l.n(r),
                i = l(4184),
                n = l.n(i),
                o = l(2175);
            let c = e => {
                let {
                    type: s = "",
                    label: l = "",
                    className: r = "",
                    ...t
                } = e, [i, c] = (0, o.U$)(t), d = (null == c ? void 0 : c.touched) && (null == c ? void 0 : c.error);
                return (0, a.jsxs)("div", {
                    className: n()(r, "flex flex-col space-y-1"),
                    children: [l ? (0, a.jsx)("label", {
                        htmlFor: "email",
                        className: "text-gray-600",
                        children: l
                    }) : null, (0, a.jsx)("div", {
                        className: "flex-1",
                        children: "textarea" === s ? (0, a.jsx)("textarea", { ...i,
                            ...t,
                            className: n()("w-full truncate rounded-md border py-2 pl-4 shadow-sm transition focus:outline-none focus:ring-4 focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50", d ? "border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400" : "border-gray-300 focus:border-gray-400 focus:ring-gray-400")
                        }) : (0, a.jsxs)("div", {
                            className: "relative",
                            children: [(0, a.jsx)("input", { ...i,
                                ...t,
                                type: s,
                                className: n()("w-full truncate rounded-md border py-2 pl-4 shadow-sm transition focus:outline-none focus:ring-4 focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50", d ? "border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400" : "border-gray-300 focus:border-gray-400 focus:ring-gray-400")
                            }), d && "number" !== s ? (0, a.jsx)("span", {
                                className: "absolute right-0 top-1/2 -translate-y-1/2 pr-2"
                            }) : null]
                        })
                    }), d ? (0, a.jsx)("p", {
                        name: "email",
                        className: "text-sm text-red-600 first-letter:uppercase",
                        children: d
                    }) : null]
                })
            };
            c.propTypes = {
                type: t().string.isRequired,
                label: t().string,
                className: t().string
            }, s.Z = c
        },
        5385: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return k
                }
            });
            var a = l(5893),
                r = l(7294),
                t = l(1163),
                i = l(9008),
                n = l.n(i),
                o = l(1664),
                c = l.n(o),
                d = l(5675),
                u = l.n(d),
                m = l(5697),
                x = l.n(m),
                h = l(3299),
                p = l(8473),
                f = l(7158),
                g = l(4080),
                b = {
                    src: "/_next/static/media/logo.602b08ce.png",
                    height: 365,
                    width: 389,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEX///+7lNSuhM6p1erCo9rP5fHRtuLw9vvl8vi54O+zpNlvnbvj1u9Kiqu90ed5nsCtl9RQjK+FsclMd6AAT34wc5c2cJWttdEubJLb3vBlvBmoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVQImRXLxwHAIAwAsQMMtinpbf9Jk7z0EpBzVsBGi9UNxh57WRKcdxSRpBxX6KW4sj5BQnXQrc2T/w0z+3gBQuEB3fjtUfYAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                j = function() {
                    let e = new Date,
                        s = e.getFullYear();
                    return (0, a.jsxs)("footer", {
                        className: "bg-white p-4   md:px-6 md:py-8 ",
                        children: [(0, a.jsxs)("div", {
                            className: "sm:flex sm:items-center sm:justify-between",
                            children: [(0, a.jsxs)(c(), {
                                href: "/",
                                className: "mb-4 flex items-center sm:mb-0",
                                children: [(0, a.jsx)(u(), {
                                    src: b,
                                    alt: "RentHouse",
                                    width: 50,
                                    height: 50,
                                    className: "mr-2 rounded-full"
                                }), (0, a.jsx)("span", {
                                    className: "self-center whitespace-nowrap text-2xl font-semibold  text-purple-800 ",
                                    children: "RentHouse"
                                })]
                            }), (0, a.jsxs)("ul", {
                                className: "text-md mb-6 flex flex-wrap items-center  text-gray-900 sm:mb-0",
                                children: [(0, a.jsx)("li", {
                                    children: (0, a.jsx)(c(), {
                                        href: "/",
                                        className: "mr-4 line-clamp-1 hover:text-purple-700 md:mr-6 ",
                                        rel: "noreferrer",
                                        children: "About"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(c(), {
                                        href: "/",
                                        className: "mr-4 hover:text-purple-700 md:mr-6",
                                        rel: "noreferrer",
                                        children: "Privacy Policy"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(c(), {
                                        href: "/",
                                        className: "mr-4 hover:text-purple-700 md:mr-6 ",
                                        rel: "noreferrer",
                                        children: "Licensing"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(c(), {
                                        href: "mailto:renthousek@gmail.com",
                                        className: "hover:text-purple-700 ",
                                        rel: "noreferrer",
                                        children: "Contact"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("hr", {
                            className: "my-6 border-gray-700  sm:mx-auto lg:my-8"
                        }), (0, a.jsxs)("span", {
                            className: "block text-sm text-gray-900 dark:text-gray-400 text-center",
                            children: ["\xa9 ", s, " ", (0, a.jsx)(c(), {
                                href: "/",
                                className: "hover:text-purple-700",
                                rel: "noreferrer",
                                children: "RentHouse™"
                            }), ". All Rights Reserved."]
                        })]
                    })
                },
                y = l(8193),
                v = l(3854),
                N = l(7516);
            let w = [{
                    label: "List a new home",
                    icon: y.Lfi,
                    href: "/create"
                }, {
                    label: "All Listings",
                    icon: N.OQv,
                    href: "/allhouses"
                }, {
                    label: "My homes",
                    icon: y.iqr,
                    href: "/homes"
                }, {
                    label: "Favorites",
                    icon: y.lo,
                    href: "/favorites"
                }, {
                    label: "Logout",
                    icon: y.Mqe,
                    onClick: h.signOut
                }],
                A = e => {
                    let {
                        children: s = null
                    } = e, l = (0, t.useRouter)(), {
                        data: i,
                        status: o
                    } = (0, h.useSession)(), d = null == i ? void 0 : i.user, [m, x] = (0, r.useState)(!1), N = () => x(!0), A = () => x(!1);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(n(), {
                            children: [(0, a.jsx)("title", {
                                children: "RentHouse"
                            }), (0, a.jsx)("meta", {
                                name: "The Rent House web app",
                                content: "Find your next home with ease on our Rent House web app. Browse thousands of listings, from cozy apartments to spacious houses, and discover the perfect match for your lifestyle and budget."
                            }), (0, a.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.ico"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex min-h-screen flex-col",
                            children: [(0, a.jsx)("header", {
                                className: "sticky top-0 z-50 h-16 w-full bg-white shadow-md  ",
                                children: (0, a.jsx)("div", {
                                    className: "container mx-auto h-full  lg:max-w-7xl",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex h-full items-center justify-between space-x-4 px-4",
                                        children: [(0, a.jsx)(c(), {
                                            legacyBehavior: !0,
                                            href: "/",
                                            children: (0, a.jsxs)("p", {
                                                className: "flex items-center cursor-pointer  space-x-1",
                                                children: [(0, a.jsx)(u(), {
                                                    src: b,
                                                    alt: "RentHouse",
                                                    width: 50,
                                                    height: 50,
                                                    className: "rounded-full"
                                                }), (0, a.jsx)("span", {
                                                    className: "text-2xl cursor-pointer font-semibold tracking-wide text-purple-800",
                                                    children: "RentHouse"
                                                })]
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-4",
                                            children: [(0, a.jsx)("button", {
                                                "aria-label": "List your home",
                                                onClick: () => {
                                                    (null == i ? void 0 : i.user) ? l.push("/create"): N()
                                                },
                                                className: "hidden rounded-md px-3  py-2 text-center text-purple-700 outline outline-1 outline-purple-400 hover:bg-purple-200 sm:block",
                                                children: "List your home"
                                            }), "loading" === o ? (0, a.jsx)("div", {
                                                className: "h-8 w-[75px] animate-pulse rounded-md bg-gray-200"
                                            }) : d ? (0, a.jsxs)(f.v, {
                                                as: "div",
                                                className: "relative z-50 text-gray-700 ",
                                                children: [(0, a.jsxs)(f.v.Button, {
                                                    className: "group flex items-center space-x-px",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200",
                                                        children: (null == d ? void 0 : d.image) ? (0, a.jsx)(u(), {
                                                            src: null == d ? void 0 : d.image,
                                                            alt: (null == d ? void 0 : d.name) || "Avatar",
                                                            fill: !0
                                                        }) : (0, a.jsx)(y.nf1, {
                                                            className: "h-6 w-6 text-gray-400"
                                                        })
                                                    }), (0, a.jsx)(v.kzR, {
                                                        className: "h-5 w-5 shrink-0 text-gray-500 group-hover:text-current"
                                                    })]
                                                }), (0, a.jsx)(g.u, {
                                                    as: r.Fragment,
                                                    enter: "transition ease-out duration-100",
                                                    enterFrom: "opacity-0 scale-95",
                                                    enterTo: "opacity-100 scale-100",
                                                    leave: "transition ease-in duration-75",
                                                    leaveFrom: "opacity-100 scale-100",
                                                    leaveTo: "opacity-0 scale-95",
                                                    children: (0, a.jsxs)(f.v.Items, {
                                                        className: "absolute right-0 mt-1 w-72 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "mb-2 flex items-center space-x-2 px-4 py-4",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200",
                                                                children: (null == d ? void 0 : d.image) ? (0, a.jsx)(u(), {
                                                                    src: null == d ? void 0 : d.image,
                                                                    alt: (null == d ? void 0 : d.name) || "Avatar",
                                                                    layout: "fill"
                                                                }) : (0, a.jsx)(y.nf1, {
                                                                    className: "h-6 w-6 text-gray-400"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "flex flex-col truncate",
                                                                children: [(0, a.jsx)("span", {
                                                                    children: null == d ? void 0 : d.name
                                                                }), (0, a.jsx)("span", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: null == d ? void 0 : d.email
                                                                })]
                                                            })]
                                                        }), (0, a.jsx)("div", {
                                                            className: "py-2",
                                                            children: w.map(e => {
                                                                let {
                                                                    label: s,
                                                                    href: l,
                                                                    onClick: r,
                                                                    icon: t
                                                                } = e;
                                                                return (0, a.jsx)("div", {
                                                                    className: "px-2 last:mt-2 last:border-t last:pt-2",
                                                                    children: (0, a.jsx)(f.v.Item, {
                                                                        children: l ? (0, a.jsx)(c(), {
                                                                            legacyBehavior: !0,
                                                                            href: l,
                                                                            children: (0, a.jsxs)("a", {
                                                                                className: "flex items-center space-x-2 rounded-md px-4 py-2 hover:bg-purple-100",
                                                                                children: [(0, a.jsx)(t, {
                                                                                    className: "h-5 w-5 shrink-0 text-gray-500"
                                                                                }), (0, a.jsx)("span", {
                                                                                    children: s
                                                                                })]
                                                                            })
                                                                        }) : (0, a.jsxs)("button", {
                                                                            type: "button",
                                                                            "aria-label": "Name",
                                                                            className: "flex w-full items-center space-x-2 rounded-md px-4 py-2 hover:bg-purple-100",
                                                                            onClick: r,
                                                                            children: [(0, a.jsx)(t, {
                                                                                className: "h-5 w-5 shrink-0 text-gray-500"
                                                                            }), (0, a.jsx)("span", {
                                                                                children: s
                                                                            })]
                                                                        })
                                                                    })
                                                                }, s)
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }) : (0, a.jsx)("button", {
                                                type: "button",
                                                "aria-label": "Log in",
                                                onClick: N,
                                                className: "ml-4 rounded-md bg-purple-600 px-3 py-2 text-white transition hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50",
                                                children: "Log in"
                                            })]
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("main", {
                                className: "",
                                children: (0, a.jsx)("div", {
                                    className: "",
                                    children: "function" == typeof s ? s(N) : s
                                })
                            }), (0, a.jsx)(p.Z, {
                                show: m,
                                onClose: A
                            }), (0, a.jsx)("footer", {
                                children: (0, a.jsx)(j, {})
                            })]
                        })]
                    })
                };
            A.propTypes = {
                children: x().oneOfType([x().node, x().func])
            };
            var k = A
        }
    }
]);