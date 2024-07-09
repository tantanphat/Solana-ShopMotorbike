/*-------------------------------------
Template Name: kiosk Bike
Author: ThemeClan
Description: eCommerce HTML Template
Version: 1.0.0
Tags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready
-------------------------------------*/

/*-------------------------------------
  Table of Content
---------------------------------------
    # jQuery
    # Bootstrap
    # Easyzoom
    # jQuery Easing
    # Lightcase
    # Owl Carousel
    # Slick
    # Wow
    # Counter
    # Waypoints
    # Tilt.js
-------------------------------------*/

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return t(e);
            })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat
            ? function (e) {
                return t.flat.call(e);
            }
            : function (e) {
                return t.concat.apply([], e);
            },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
            );
        },
        x = function (e) {
            return null != e && e === e.window;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");
        if (((o.text = e), t))
            for (r in c)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
                ? n[o.call(e)] || "object"
                : typeof e;
    }
    var f = "3.6.0",
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return (
            !m(e) &&
            !x(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (S.fn = S.prototype =
        {
            jquery: f,
            constructor: S,
            length: 0,
            toArray: function () {
                return s.call(this);
            },
            get: function (e) {
                return null == e
                    ? s.call(this)
                    : e < 0
                        ? this[e + this.length]
                        : this[e];
            },
            pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return S.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    S.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: u,
            sort: t.sort,
            splice: t.splice,
        }),
        (S.extend = S.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || m(a) || (a = {}),
                    s === u && ((a = this), s--);
                    s < u;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (r = e[t]),
                            "__proto__" !== t &&
                            a !== r &&
                            (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                                ? ((n = a[t]),
                                    (o =
                                        i && !Array.isArray(n)
                                            ? []
                                            : i || S.isPlainObject(n)
                                                ? n
                                                : {}),
                                    (i = !1),
                                    (a[t] = S.extend(l, o, r)))
                                : void 0 !== r && (a[t] = r));
                return a;
            }),
        S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return (
                    !(!e || "[object Object]" !== o.call(e)) &&
                    (!(t = r(e)) ||
                        ("function" ==
                            typeof (n = v.call(t, "constructor") && t.constructor) &&
                            a.call(n) === l))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                    (p(Object(e))
                        ? S.merge(n, "string" == typeof e ? [e] : e)
                        : u.call(n, e)),
                        n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: y,
        }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var d = (function (n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            S = "sizzle" + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function (e, t) {
                return e === t && (l = !0), 0;
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                M +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W =
                "\\[" +
                M +
                "*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
            F =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    M +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    M +
                    "*(?:([+-]|)" +
                    M +
                    "*(\\d+)|))" +
                    M +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    M +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    M +
                    "*((?:-\\d)?\\d*)" +
                    M +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                    t ||
                    (n < 0
                        ? String.fromCharCode(n + 65536)
                        : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
                );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t
                    ? "\0" === e
                        ? "\ufffd"
                        : e.slice(0, -1) +
                        "\\" +
                        e.charCodeAt(e.length - 1).toString(16) +
                        " "
                    : "\\" + e;
            },
            oe = function () {
                T();
            },
            ae = be(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes),
                t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function (e, t) {
                        L.apply(e, O.call(t));
                    }
                    : function (e, t) {
                        var n = e.length,
                            r = 0;
                        while ((e[n++] = t[r++]));
                        e.length = n - 1;
                    },
            };
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (
                ((n = n || []),
                "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
            )
                return n;
            if (!r && (T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a), n;
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if (
                            (i = u[3]) &&
                            d.getElementsByClassName &&
                            e.getElementsByClassName
                        )
                            return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (
                    d.qsa &&
                    !N[t + " "] &&
                    (!v || !v.test(t)) &&
                    (1 !== p || "object" !== e.nodeName.toLowerCase())
                ) {
                    if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
                        ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
                        ((s = e.getAttribute("id"))
                            ? (s = s.replace(re, ie))
                            : e.setAttribute("id", (s = S))),
                            (o = (l = h(t)).length);
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return (
                    r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                        (e[t + " "] = n)
                );
            };
        }
        function le(e) {
            return (e[S] = !0), e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function (o) {
                return (
                    (o = +o),
                        le(function (e, t) {
                            var n,
                                r = a([], e.length, o),
                                i = r.length;
                            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                        })
                );
            });
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
            (i = se.isXML =
                function (e) {
                    var t = e && e.namespaceURI,
                        n = e && (e.ownerDocument || e).documentElement;
                    return !Y.test(t || (n && n.nodeName) || "HTML");
                }),
            (T = se.setDocument =
                function (e) {
                    var t,
                        n,
                        r = e ? e.ownerDocument || e : p;
                    return (
                        r != C &&
                        9 === r.nodeType &&
                        r.documentElement &&
                        ((a = (C = r).documentElement),
                            (E = !i(C)),
                        p != C &&
                        (n = C.defaultView) &&
                        n.top !== n &&
                        (n.addEventListener
                            ? n.addEventListener("unload", oe, !1)
                            : n.attachEvent && n.attachEvent("onunload", oe)),
                            (d.scope = ce(function (e) {
                                return (
                                    a.appendChild(e).appendChild(C.createElement("div")),
                                    "undefined" != typeof e.querySelectorAll &&
                                    !e.querySelectorAll(":scope fieldset div").length
                                );
                            })),
                            (d.attributes = ce(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (d.getElementsByTagName = ce(function (e) {
                                return (
                                    e.appendChild(C.createComment("")),
                                        !e.getElementsByTagName("*").length
                                );
                            })),
                            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
                            (d.getById = ce(function (e) {
                                return (
                                    (a.appendChild(e).id = S),
                                    !C.getElementsByName || !C.getElementsByName(S).length
                                );
                            })),
                            d.getById
                                ? ((b.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                    (b.find.ID = function (e, t) {
                                        if ("undefined" != typeof t.getElementById && E) {
                                            var n = t.getElementById(e);
                                            return n ? [n] : [];
                                        }
                                    }))
                                : ((b.filter.ID = function (e) {
                                    var n = e.replace(te, ne);
                                    return function (e) {
                                        var t =
                                            "undefined" != typeof e.getAttributeNode &&
                                            e.getAttributeNode("id");
                                        return t && t.value === n;
                                    };
                                }),
                                    (b.find.ID = function (e, t) {
                                        if ("undefined" != typeof t.getElementById && E) {
                                            var n,
                                                r,
                                                i,
                                                o = t.getElementById(e);
                                            if (o) {
                                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                                    return [o];
                                                (i = t.getElementsByName(e)), (r = 0);
                                                while ((o = i[r++]))
                                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                                        return [o];
                                            }
                                            return [];
                                        }
                                    })),
                            (b.find.TAG = d.getElementsByTagName
                                ? function (e, t) {
                                    return "undefined" != typeof t.getElementsByTagName
                                        ? t.getElementsByTagName(e)
                                        : d.qsa
                                            ? t.querySelectorAll(e)
                                            : void 0;
                                }
                                : function (e, t) {
                                    var n,
                                        r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                        return r;
                                    }
                                    return o;
                                }),
                            (b.find.CLASS =
                                d.getElementsByClassName &&
                                function (e, t) {
                                    if ("undefined" != typeof t.getElementsByClassName && E)
                                        return t.getElementsByClassName(e);
                                }),
                            (s = []),
                            (v = []),
                        (d.qsa = K.test(C.querySelectorAll)) &&
                        (ce(function (e) {
                            var t;
                            (a.appendChild(e).innerHTML =
                                "<a id='" +
                                S +
                                "'></a><select id='" +
                                S +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push("[*^$]=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                            v.push("\\[" + M + "*(?:value|" + R + ")"),
                            e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                                (t = C.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                            v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || v.push(":checked"),
                            e.querySelectorAll("a#" + S + "+*").length ||
                            v.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                v.push("[\\r\\n\\f]");
                        }),
                            ce(function (e) {
                                e.innerHTML =
                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = C.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length &&
                                v.push("name" + M + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length &&
                                v.push(":enabled", ":disabled"),
                                    (a.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length &&
                                v.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    v.push(",.*:");
                            })),
                        (d.matchesSelector = K.test(
                            (c =
                                a.matches ||
                                a.webkitMatchesSelector ||
                                a.mozMatchesSelector ||
                                a.oMatchesSelector ||
                                a.msMatchesSelector)
                        )) &&
                        ce(function (e) {
                            (d.disconnectedMatch = c.call(e, "*")),
                                c.call(e, "[s!='']:x"),
                                s.push("!=", F);
                        }),
                            (v = v.length && new RegExp(v.join("|"))),
                            (s = s.length && new RegExp(s.join("|"))),
                            (t = K.test(a.compareDocumentPosition)),
                            (y =
                                t || K.test(a.contains)
                                    ? function (e, t) {
                                        var n = 9 === e.nodeType ? e.documentElement : e,
                                            r = t && t.parentNode;
                                        return (
                                            e === r ||
                                            !(
                                                !r ||
                                                1 !== r.nodeType ||
                                                !(n.contains
                                                    ? n.contains(r)
                                                    : e.compareDocumentPosition &&
                                                    16 & e.compareDocumentPosition(r))
                                            )
                                        );
                                    }
                                    : function (e, t) {
                                        if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                        return !1;
                                    }),
                            (j = t
                                ? function (e, t) {
                                    if (e === t) return (l = !0), 0;
                                    var n =
                                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        n ||
                                        (1 &
                                        (n =
                                            (e.ownerDocument || e) == (t.ownerDocument || t)
                                                ? e.compareDocumentPosition(t)
                                                : 1) ||
                                        (!d.sortDetached && t.compareDocumentPosition(e) === n)
                                            ? e == C || (e.ownerDocument == p && y(p, e))
                                                ? -1
                                                : t == C || (t.ownerDocument == p && y(p, t))
                                                    ? 1
                                                    : u
                                                        ? P(u, e) - P(u, t)
                                                        : 0
                                            : 4 & n
                                                ? -1
                                                : 1)
                                    );
                                }
                                : function (e, t) {
                                    if (e === t) return (l = !0), 0;
                                    var n,
                                        r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!i || !o)
                                        return e == C
                                            ? -1
                                            : t == C
                                                ? 1
                                                : i
                                                    ? -1
                                                    : o
                                                        ? 1
                                                        : u
                                                            ? P(u, e) - P(u, t)
                                                            : 0;
                                    if (i === o) return pe(e, t);
                                    n = e;
                                    while ((n = n.parentNode)) a.unshift(n);
                                    n = t;
                                    while ((n = n.parentNode)) s.unshift(n);
                                    while (a[r] === s[r]) r++;
                                    return r
                                        ? pe(a[r], s[r])
                                        : a[r] == p
                                            ? -1
                                            : s[r] == p
                                                ? 1
                                                : 0;
                                })),
                            C
                    );
                }),
            (se.matches = function (e, t) {
                return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
                if (
                    (T(e),
                    d.matchesSelector &&
                    E &&
                    !N[t + " "] &&
                    (!s || !s.test(t)) &&
                    (!v || !v.test(t)))
                )
                    try {
                        var n = c.call(e, t);
                        if (
                            n ||
                            d.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return n;
                    } catch (e) {
                        N(t, !0);
                    }
                return 0 < se(t, C, null, [e]).length;
            }),
            (se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t);
            }),
            (se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r
                    ? r
                    : d.attributes || !E
                        ? e.getAttribute(t)
                        : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
            }),
            (se.escape = function (e) {
                return (e + "").replace(re, ie);
            }),
            (se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    i = 0;
                if (
                    ((l = !d.detectDuplicates),
                        (u = !d.sortStable && e.slice(0)),
                        e.sort(j),
                        l)
                ) {
                    while ((t = e[i++])) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1);
                }
                return (u = null), e;
            }),
            (o = se.getText =
                function (e) {
                    var t,
                        n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                    } else while ((t = e[r++])) n += o(t);
                    return n;
                }),
            ((b = se.selectors =
                {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return (
                                (e[1] = e[1].replace(te, ne)),
                                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                            );
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3)
                                        ? (e[3] || se.error(e[0]),
                                            (e[4] = +(e[4]
                                                ? e[5] + (e[6] || 1)
                                                : 2 * ("even" === e[3] || "odd" === e[3]))),
                                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                        : e[3] && se.error(e[0]),
                                    e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return G.CHILD.test(e[0])
                                ? null
                                : (e[3]
                                    ? (e[2] = e[4] || e[5] || "")
                                    : n &&
                                    X.test(n) &&
                                    (t = h(n, !0)) &&
                                    (t = n.indexOf(")", n.length - t) - n.length) &&
                                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                    e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e
                                ? function () {
                                    return !0;
                                }
                                : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t;
                                };
                        },
                        CLASS: function (e) {
                            var t = m[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                    m(e, function (e) {
                                        return t.test(
                                            ("string" == typeof e.className && e.className) ||
                                            ("undefined" != typeof e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function (n, r, i) {
                            return function (e) {
                                var t = se.attr(e, n);
                                return null == t
                                    ? "!=" === r
                                    : !r ||
                                    ((t += ""),
                                        "=" === r
                                            ? t === i
                                            : "!=" === r
                                                ? t !== i
                                                : "^=" === r
                                                    ? i && 0 === t.indexOf(i)
                                                    : "*=" === r
                                                        ? i && -1 < t.indexOf(i)
                                                        : "$=" === r
                                                            ? i && t.slice(-i.length) === i
                                                            : "~=" === r
                                                                ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                                                                : "|=" === r &&
                                                                (t === i || t.slice(0, i.length + 1) === i + "-"));
                            };
                        },
                        CHILD: function (h, e, t, g, v) {
                            var y = "nth" !== h.slice(0, 3),
                                m = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === g && 0 === v
                                ? function (e) {
                                    return !!e.parentNode;
                                }
                                : function (e, t, n) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        u,
                                        l = y !== m ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        f = x && e.nodeName.toLowerCase(),
                                        p = !n && !x,
                                        d = !1;
                                    if (c) {
                                        if (y) {
                                            while (l) {
                                                a = e;
                                                while ((a = a[l]))
                                                    if (
                                                        x
                                                            ? a.nodeName.toLowerCase() === f
                                                            : 1 === a.nodeType
                                                    )
                                                        return !1;
                                                u = l = "only" === h && !u && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                                            (d =
                                                (s =
                                                    (r =
                                                        (i =
                                                            (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                                                            (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                                                    r[1]) && r[2]),
                                                (a = s && c.childNodes[s]);
                                            while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                                if (1 === a.nodeType && ++d && a === e) {
                                                    i[h] = [k, s, d];
                                                    break;
                                                }
                                        } else if (
                                            (p &&
                                            (d = s =
                                                (r =
                                                    (i =
                                                        (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                                                        (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                                            !1 === d)
                                        )
                                            while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                                if (
                                                    (x
                                                        ? a.nodeName.toLowerCase() === f
                                                        : 1 === a.nodeType) &&
                                                    ++d &&
                                                    (p &&
                                                    ((i =
                                                        (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                                                        (o[a.uniqueID] = {}))[h] = [k, d]),
                                                    a === e)
                                                )
                                                    break;
                                        return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                                    }
                                };
                        },
                        PSEUDO: function (e, o) {
                            var t,
                                a =
                                    b.pseudos[e] ||
                                    b.setFilters[e.toLowerCase()] ||
                                    se.error("unsupported pseudo: " + e);
                            return a[S]
                                ? a(o)
                                : 1 < a.length
                                    ? ((t = [e, e, "", o]),
                                        b.setFilters.hasOwnProperty(e.toLowerCase())
                                            ? le(function (e, t) {
                                                var n,
                                                    r = a(e, o),
                                                    i = r.length;
                                                while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                                            })
                                            : function (e) {
                                                return a(e, 0, t);
                                            })
                                    : a;
                        },
                    },
                    pseudos: {
                        not: le(function (e) {
                            var r = [],
                                i = [],
                                s = f(e.replace($, "$1"));
                            return s[S]
                                ? le(function (e, t, n, r) {
                                    var i,
                                        o = s(e, null, r, []),
                                        a = e.length;
                                    while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                                })
                                : function (e, t, n) {
                                    return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                                };
                        }),
                        has: le(function (t) {
                            return function (e) {
                                return 0 < se(t, e).length;
                            };
                        }),
                        contains: le(function (t) {
                            return (
                                (t = t.replace(te, ne)),
                                    function (e) {
                                        return -1 < (e.textContent || o(e)).indexOf(t);
                                    }
                            );
                        }),
                        lang: le(function (n) {
                            return (
                                V.test(n || "") || se.error("unsupported lang: " + n),
                                    (n = n.replace(te, ne).toLowerCase()),
                                    function (e) {
                                        var t;
                                        do {
                                            if (
                                                (t = E
                                                    ? e.lang
                                                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                            )
                                                return (
                                                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                                );
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1;
                                    }
                            );
                        }),
                        target: function (e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function (e) {
                            return e === a;
                        },
                        focus: function (e) {
                            return (
                                e === C.activeElement &&
                                (!C.hasFocus || C.hasFocus()) &&
                                !!(e.type || e.href || ~e.tabIndex)
                            );
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
                            );
                        },
                        selected: function (e) {
                            return (
                                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            );
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !b.pseudos.empty(e);
                        },
                        header: function (e) {
                            return J.test(e.nodeName);
                        },
                        input: function (e) {
                            return Q.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            var t;
                            return (
                                "input" === e.nodeName.toLowerCase() &&
                                "text" === e.type &&
                                (null == (t = e.getAttribute("type")) ||
                                    "text" === t.toLowerCase())
                            );
                        },
                        first: ve(function () {
                            return [0];
                        }),
                        last: ve(function (e, t) {
                            return [t - 1];
                        }),
                        eq: ve(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: ve(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: ve(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: ve(function (e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                            return e;
                        }),
                        gt: ve(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                            return e;
                        }),
                    },
                }).pseudos.nth = b.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first
                ? function (e, t, n) {
                    while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
                    return !1;
                }
                : function (e, t, n) {
                    var r,
                        i,
                        o,
                        a = [k, p];
                    if (n) {
                        while ((e = e[u]))
                            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                    } else
                        while ((e = e[u]))
                            if (1 === e.nodeType || f)
                                if (
                                    ((i =
                                        (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                                        (o[e.uniqueID] = {})),
                                    l && l === e.nodeName.toLowerCase())
                                )
                                    e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === k && r[1] === p)
                                        return (a[2] = r[2]);
                                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                                }
                    return !1;
                };
        }
        function we(i) {
            return 1 < i.length
                ? function (e, t, n) {
                    var r = i.length;
                    while (r--) if (!i[r](e, t, n)) return !1;
                    return !0;
                }
                : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return (
                v && !v[S] && (v = Ce(v)),
                y && !y[S] && (y = Ce(y, e)),
                    le(function (e, t, n, r) {
                        var i,
                            o,
                            a,
                            s = [],
                            u = [],
                            l = t.length,
                            c =
                                e ||
                                (function (e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                    return n;
                                })(h || "*", n.nodeType ? [n] : n, []),
                            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                        if ((g && g(f, p, n, r), v)) {
                            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                        }
                        if (e) {
                            if (y || d) {
                                if (y) {
                                    (i = []), (o = p.length);
                                    while (o--) (a = p[o]) && i.push((f[o] = a));
                                    y(null, (p = []), i, r);
                                }
                                o = p.length;
                                while (o--)
                                    (a = p[o]) &&
                                    -1 < (i = y ? P(e, a) : s[o]) &&
                                    (e[i] = !(t[i] = a));
                            }
                        } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
                    })
            );
        }
        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = be(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = be(
                        function (e) {
                            return -1 < P(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r =
                                (!o && (n || t !== w)) ||
                                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                        return Ce(
                            1 < s && we(c),
                            1 < s &&
                            xe(
                                e
                                    .slice(0, s - 1)
                                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                            ).replace($, "$1"),
                            t,
                            s < n && Ee(e.slice(s, n)),
                            n < r && Ee((e = e.slice(n))),
                            n < r && xe(e)
                        );
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
                (b.setFilters = new me()),
                (h = se.tokenize =
                    function (e, t) {
                        var n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l = x[e + " "];
                        if (l) return t ? 0 : l.slice(0);
                        (a = e), (s = []), (u = b.preFilter);
                        while (a) {
                            for (o in ((n && !(r = _.exec(a))) ||
                            (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                                (n = !1),
                            (r = z.exec(a)) &&
                            ((n = r.shift()),
                                i.push({ value: n, type: r[0].replace($, " ") }),
                                (a = a.slice(n.length))),
                                b.filter))
                                !(r = G[o].exec(a)) ||
                                (u[o] && !(r = u[o](r))) ||
                                ((n = r.shift()),
                                    i.push({ value: n, type: o, matches: r }),
                                    (a = a.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
                    }),
                (f = se.compile =
                    function (e, t) {
                        var n,
                            v,
                            y,
                            m,
                            x,
                            r,
                            i = [],
                            o = [],
                            a = A[e + " "];
                        if (!a) {
                            t || (t = h(e)), (n = t.length);
                            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                            (a = A(
                                e,
                                ((v = o),
                                    (m = 0 < (y = i).length),
                                    (x = 0 < v.length),
                                    (r = function (e, t, n, r, i) {
                                        var o,
                                            a,
                                            s,
                                            u = 0,
                                            l = "0",
                                            c = e && [],
                                            f = [],
                                            p = w,
                                            d = e || (x && b.find.TAG("*", i)),
                                            h = (k += null == p ? 1 : Math.random() || 0.1),
                                            g = d.length;
                                        for (
                                            i && (w = t == C || t || i);
                                            l !== g && null != (o = d[l]);
                                            l++
                                        ) {
                                            if (x && o) {
                                                (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                                                while ((s = v[a++]))
                                                    if (s(o, t || C, n)) {
                                                        r.push(o);
                                                        break;
                                                    }
                                                i && (k = h);
                                            }
                                            m && ((o = !s && o) && u--, e && c.push(o));
                                        }
                                        if (((u += l), m && l !== u)) {
                                            a = 0;
                                            while ((s = y[a++])) s(c, f, t, n);
                                            if (e) {
                                                if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                                                f = Te(f);
                                            }
                                            H.apply(r, f),
                                            i &&
                                            !e &&
                                            0 < f.length &&
                                            1 < u + y.length &&
                                            se.uniqueSort(r);
                                        }
                                        return i && ((k = h), (w = p)), c;
                                    }),
                                    m ? le(r) : r)
                            )).selector = e;
                        }
                        return a;
                    }),
                (g = se.select =
                    function (e, t, n, r) {
                        var i,
                            o,
                            a,
                            s,
                            u,
                            l = "function" == typeof e && e,
                            c = !r && h((e = l.selector || e));
                        if (((n = n || []), 1 === c.length)) {
                            if (
                                2 < (o = c[0] = c[0].slice(0)).length &&
                                "ID" === (a = o[0]).type &&
                                9 === t.nodeType &&
                                E &&
                                b.relative[o[1].type]
                            ) {
                                if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                                    return n;
                                l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                            }
                            i = G.needsContext.test(e) ? 0 : o.length;
                            while (i--) {
                                if (((a = o[i]), b.relative[(s = a.type)])) break;
                                if (
                                    (u = b.find[s]) &&
                                    (r = u(
                                        a.matches[0].replace(te, ne),
                                        (ee.test(o[0].type) && ye(t.parentNode)) || t
                                    ))
                                ) {
                                    if ((o.splice(i, 1), !(e = r.length && xe(o))))
                                        return H.apply(n, r), n;
                                    break;
                                }
                            }
                        }
                        return (
                            (l || f(e, c))(
                                r,
                                t,
                                !E,
                                n,
                                !t || (ee.test(e) && ye(t.parentNode)) || t
                            ),
                                n
                        );
                    }),
                (d.sortStable = S.split("").sort(j).join("") === S),
                (d.detectDuplicates = !!l),
                T(),
                (d.sortDetached = ce(function (e) {
                    return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
                })),
            ce(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
            fe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (d.attributes &&
                ce(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
            fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            ce(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            fe(R, function (e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t]
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
            }),
                se
        );
    })(C);
    (S.find = d),
        (S.expr = d.selectors),
        (S.expr[":"] = S.expr.pseudos),
        (S.uniqueSort = S.unique = d.uniqueSort),
        (S.text = d.getText),
        (S.isXMLDoc = d.isXML),
        (S.contains = d.contains),
        (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n)
            ? S.grep(e, function (e, t) {
                return !!n.call(e, t, e) !== r;
            })
            : n.nodeType
                ? S.grep(e, function (e) {
                    return (e === n) !== r;
                })
                : "string" != typeof n
                    ? S.grep(e, function (e) {
                        return -1 < i.call(n, e) !== r;
                    })
                    : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                    ? S.find.matchesSelector(r, e)
                        ? [r]
                        : []
                    : S.find.matches(
                        e,
                        S.grep(t, function (e) {
                            return 1 === e.nodeType;
                        })
                    )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
                    .length;
            },
        });
    var D,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || D), "string" == typeof e)) {
            if (
                !(r =
                    "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : q.exec(e)) ||
                (!r[1] && t)
            )
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (
                    ((t = t instanceof S ? t[0] : t),
                        S.merge(
                            this,
                            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
                        ),
                    N.test(r[1]) && S.isPlainObject(t))
                )
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (
                (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
                ? void 0 !== n.ready
                    ? n.ready(e)
                    : e(S)
                : S.makeArray(e, this);
    }).prototype = S.fn),
        (D = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? -1 < a.index(n)
                                : 1 === n.nodeType && S.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? i.call(S(e), this[0])
                    : i.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        S.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function (e) {
                    return O(e, "nextSibling");
                },
                prev: function (e) {
                    return O(e, "previousSibling");
                },
                nextAll: function (e) {
                    return h(e, "nextSibling");
                },
                prevAll: function (e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument)
                        ? e.contentDocument
                        : (A(e, "template") && (e = e.content || e),
                            S.merge([], e.childNodes));
                },
            },
            function (r, i) {
                S.fn[r] = function (e, t) {
                    var n = S.map(this, i, e);
                    return (
                        "Until" !== r.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = S.filter(t, n)),
                        1 < this.length &&
                        (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
                            this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                    ? i.call(e, t, n)
                    : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                    (n = {}),
                    S.each(e.match(P) || [], function (e, t) {
                        n[t] = !0;
                    }),
                    n)
                : S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) &&
                        r.stopOnFalse &&
                        ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                        (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                S.each(e, function (e, t) {
                                    m(t)
                                        ? (r.unique && f.has(t)) || s.push(t)
                                        : t && t.length && "string" !== w(t) && n(t);
                                });
                            })(arguments),
                        t && !i && c()),
                            this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n)))
                                s.splice(n, 1), n <= l && l--;
                        }),
                            this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                        ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            u.push(t),
                        i || c()),
                            this
                    );
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        S.extend({
            Deferred: function (e) {
                var o = [
                        [
                            "notify",
                            "progress",
                            S.Callbacks("memory"),
                            S.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return S.Deferred(function (r) {
                                S.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise)
                                            ? e
                                                .promise()
                                                .progress(r.notify)
                                                .done(r.resolve)
                                                .fail(r.reject)
                                            : r[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                (t =
                                                    e &&
                                                    ("object" == typeof e || "function" == typeof e) &&
                                                    e.then),
                                                    m(t)
                                                        ? s
                                                            ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                                            : (u++,
                                                                t.call(
                                                                    e,
                                                                    l(u, o, R, s),
                                                                    l(u, o, M, s),
                                                                    l(u, o, R, o.notifyWith)
                                                                ))
                                                        : (a !== R && ((n = void 0), (r = [e])),
                                                            (s || o.resolveWith)(n, r));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                try {
                                                    e();
                                                } catch (e) {
                                                    S.Deferred.exceptionHook &&
                                                    S.Deferred.exceptionHook(e, t.stackTrace),
                                                    u <= i + 1 &&
                                                    (a !== M && ((n = void 0), (r = [e])),
                                                        o.rejectWith(n, r));
                                                }
                                            };
                                    i
                                        ? t()
                                        : (S.Deferred.getStackHook &&
                                        (t.stackTrace = S.Deferred.getStackHook()),
                                            C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                                    o[1][3].add(l(0, e, m(t) ? t : R)),
                                    o[2][3].add(l(0, e, m(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    S.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                        r &&
                        n.add(
                            function () {
                                i = r;
                            },
                            o[3 - e][2].disable,
                            o[3 - e][3].disable,
                            o[0][2].lock,
                            o[0][3].lock
                        ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return (
                                    s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                                );
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                        a.promise(s),
                    e && e.call(s, s),
                        s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = S.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this),
                                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                            --n || o.resolveWith(r, i);
                        };
                    };
                if (
                    n <= 1 &&
                    (I(e, o.done(a(t)).resolve, o.reject, !n),
                    "pending" === o.state() || m(i[t] && i[t].then))
                )
                    return o.then();
                while (t--) I(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
        C.console &&
        C.console.warn &&
        e &&
        W.test(e.name) &&
        C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (S.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                S.readyException(e);
            }),
                this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
                F.resolveWith(E, [S]);
            },
        }),
        (S.ready.then = F.then),
        "complete" === E.readyState ||
        ("loading" !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(S.ready)
            : (E.addEventListener("DOMContentLoaded", B),
                C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                        (t = function (e, t, n) {
                            return l.call(S(e), n);
                        }))),
                    t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                    ((t = {}),
                    V(e) &&
                    (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                        }))),
                        t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(X)
                            : (t = X(t)) in r
                                ? [t]
                                : t.match(P) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) &&
                    (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
            },
        });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n =
                        "true" === (i = n) ||
                        ("false" !== i &&
                            ("null" === i
                                ? null
                                : i === +i + ""
                                    ? +i
                                    : J.test(i)
                                        ? JSON.parse(i)
                                        : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        },
    }),
        S.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (
                        this.length &&
                        ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
                    ) {
                        t = a.length;
                        while (t--)
                            a[t] &&
                            0 === (r = a[t].name).indexOf("data-") &&
                            ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                        Q.set(this, n);
                    })
                    : $(
                        this,
                        function (e) {
                            var t;
                            if (o && void 0 === e)
                                return void 0 !== (t = Q.get(o, n))
                                    ? t
                                    : void 0 !== (t = Z(o, n))
                                        ? t
                                        : void 0;
                            this.each(function () {
                                Q.set(this, n, e);
                            });
                        },
                        null,
                        e,
                        1 < arguments.length,
                        null,
                        !0
                    );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                            (r = Y.get(e, t)),
                        n &&
                        (!r || Array.isArray(n)
                            ? (r = Y.access(e, t, S.makeArray(n)))
                            : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                i &&
                ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                        e,
                        function () {
                            S.dequeue(e, t);
                        },
                        o
                    )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: S.Callbacks("once memory").add(function () {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                        arguments.length < e
                            ? S.queue(this[0], t)
                            : void 0 === n
                                ? this
                                : this.each(function () {
                                    var e = S.queue(this, t, n);
                                    S._queueHooks(this, t),
                                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                                })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--)
                    (n = Y.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
    (ie = function (e) {
        return (
            S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        );
    });
    var ae = function (e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
        );
    };
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                    return r.cur();
                }
                : function () {
                    return S.css(e, t, "");
                },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
            ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
                i
        );
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
            ((n = r.style.display),
                t
                    ? ("none" === n &&
                    ((l[c] = Y.get(r, "display") || null),
                    l[c] || (r.style.display = "")),
                    "" === r.style.display &&
                    ae(r) &&
                    (l[c] =
                        ((u = a = o = void 0),
                            (a = (i = r).ownerDocument),
                            (s = i.nodeName),
                        (u = ue[s]) ||
                        ((o = a.body.appendChild(a.createElement(s))),
                            (u = S.css(o, "display")),
                            o.parentNode.removeChild(o),
                        "none" === u && (u = "block"),
                            (ue[s] = u)))))
                    : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return le(this, !0);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    ae(this) ? S(this).show() : S(this).hide();
                });
        },
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (y.option = !!ce.lastChild);
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
    };
    function ve(e, t) {
        var n;
        return (
            (n =
                "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                        ? e.querySelectorAll(t || "*")
                        : []),
                void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
        );
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td),
    y.option ||
    (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))),
                        (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (
                ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
            ) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0;
    }
    function Te() {
        return !1;
    }
    function Ce(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
                Ee(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = Te;
        else if (!i) return e;
        return (
            1 === o &&
            ((a = i),
                ((i = function (e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
                e.each(function () {
                    S.event.add(this, t, i, r, n);
                })
        );
    }
    function Se(e, i, o) {
        o
            ? (Y.set(e, i, !1),
                S.event.add(e, i, {
                    namespace: !1,
                    handler: function (e) {
                        var t,
                            n,
                            r = Y.get(this, i);
                        if (1 & e.isTrigger && this[i]) {
                            if (r.length)
                                (S.event.special[i] || {}).delegateType && e.stopPropagation();
                            else if (
                                ((r = s.call(arguments)),
                                    Y.set(this, i, r),
                                    (t = o(this, i)),
                                    this[i](),
                                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                                r !== n)
                            )
                                return (
                                    e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                                );
                        } else
                            r.length &&
                            (Y.set(this, i, {
                                value: S.event.trigger(
                                    S.extend(r[0], S.Event.prototype),
                                    r.slice(1),
                                    this
                                ),
                            }),
                                e.stopImmediatePropagation());
                    },
                }))
            : void 0 === Y.get(e, i) && S.event.add(e, i, we);
    }
    (S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) ||
                (a = v.handle =
                    function (e) {
                        return "undefined" != typeof S && S.event.triggered !== e.type
                            ? S.event.dispatch.apply(t, arguments)
                            : void 0;
                    }),
                    (l = (e = (e || "").match(P) || [""]).length);
                while (l--)
                    (d = g = (s = be.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                    d &&
                    ((f = S.event.special[d] || {}),
                        (d = (i ? f.delegateType : f.bindType) || d),
                        (f = S.event.special[d] || {}),
                        (c = S.extend(
                            {
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && S.expr.match.needsContext.test(i),
                                namespace: h.join("."),
                            },
                            o
                        )),
                    (p = u[d]) ||
                    (((p = u[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                    (t.addEventListener && t.addEventListener(d, a))),
                    f.add &&
                    (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        (S.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (
                        ((d = g = (s = be.exec(t[l]) || [])[1]),
                            (h = (s[2] || "").split(".").sort()),
                            d)
                    ) {
                        (f = S.event.special[d] || {}),
                            (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                            (s =
                                s[2] &&
                                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                            (!i && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (s && !s.test(c.namespace)) ||
                            (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                            (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a &&
                        !p.length &&
                        ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                        S.removeEvent(e, d, v.handle),
                            delete u[d]);
                    } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
                (a = S.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        (u.rnamespace &&
                            !1 !== o.namespace &&
                            !u.rnamespace.test(o.namespace)) ||
                        ((u.handleObj = o),
                            (u.data = o.data),
                        void 0 !==
                        (r = (
                            (S.event.special[o.origType] || {}).handle || o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + " ")] &&
                            (a[i] = r.needsContext
                                ? -1 < S(i, this).index(l)
                                : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (
                (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                        if (this.originalEvent) return e(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                            !1
                    );
                },
                trigger: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                    );
                },
                _default: function (e) {
                    var t = e.target;
                    return (
                        (pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Y.get(t, "click")) ||
                        A(t, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                        e.defaultPrevented ||
                        (void 0 === e.defaultPrevented && !1 === e.returnValue)
                            ? we
                            : Te),
                    (this.target =
                        e.target && 3 === e.target.nodeType
                            ? e.target.parentNode
                            : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
            t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = we),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = we),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = we),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
                setup: function () {
                    return Se(this, e, Ce), !1;
                },
                trigger: function () {
                    return Se(this, e), !0;
                },
                _default: function () {
                    return !0;
                },
                delegateType: t,
            };
        }),
        S.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, i) {
                S.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (n && (n === this || S.contains(this, n))) ||
                            ((e.type = r.origType),
                                (t = r.handler.apply(this, arguments)),
                                (e.type = i)),
                                t
                        );
                    },
                };
            }
        ),
        S.fn.extend({
            on: function (e, t, n, r) {
                return Ee(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return Ee(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                            S(e.delegateTarget).off(
                                r.namespace ? r.origType + "." + r.namespace : r.origType,
                                r.selector,
                                r.handler
                            ),
                            this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Te),
                        this.each(function () {
                            S.event.remove(this, e, n, t);
                        })
                );
            },
        });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return (
            (A(e, "table") &&
                A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
            e
        );
    }
    function De(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function qe(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
                e
        );
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), s))
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
            });
        if (
            f &&
            ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
                (u = e),
                c !== p &&
                ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
                    (u = a[c]),
                    he.test(u.type || "") &&
                    !Y.access(u, "globalEval") &&
                    S.contains(l, u) &&
                    (u.src && "module" !== (u.type || "").toLowerCase()
                        ? S._evalUrl &&
                        !u.noModule &&
                        S._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            l
                        )
                        : b(u.textContent.replace(Ne, ""), u, l));
        }
        return n;
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode &&
            (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (
                !(
                    y.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    S.isXMLDoc(e)
                )
            )
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                    (s = o[r]),
                        (u = a[r]),
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                            ? (u.checked = s.checked)
                            : ("input" !== l && "textarea" !== l) ||
                            (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else Le(e, c);
            return (
                0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
            );
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if ((t = n[Y.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0;
                    }
                    n[Q.expando] && (n[Q.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (e) {
                return Oe(this, e, !0);
            },
            remove: function (e) {
                return Oe(this, e);
            },
            text: function (e) {
                return $(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return He(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                    je(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return He(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return S.clone(this, e, t);
                        })
                );
            },
            html: function (e) {
                return $(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !ke.test(e) &&
                            !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return He(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 &&
                        (S.cleanData(ve(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        S.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, a) {
                S.fn[e] = function (e) {
                    for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                        (t = o === i ? this : this.clone(!0)),
                            S(r[o])[a](t),
                            u.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        Me = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Ie = new RegExp(ne.join("|"), "i");
    function We(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || Re(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
            ie(e) ||
            (a = S.style(e, t)),
            !y.pixelBoxStyles() &&
            Pe.test(a) &&
            Ie.test(t) &&
            ((r = s.width),
                (i = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = r),
                (s.minWidth = i),
                (s.maxWidth = o))),
                void 0 !== a ? a + "" : a
        );
    }
    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = "1%" !== e.top),
                    (s = 12 === t(e.marginLeft)),
                    (l.style.right = "60%"),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (l.style.position = "absolute"),
                    (i = 12 === t(l.offsetWidth / 3)),
                    re.removeChild(u),
                    (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement("div"),
            l = E.createElement("div");
        l.style &&
        ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
            S.extend(y, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                        ((e = E.createElement("table")),
                            (t = E.createElement("tr")),
                            (n = E.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            re.appendChild(e).appendChild(t).appendChild(n),
                            (r = C.getComputedStyle(t)),
                            (a =
                                parseInt(r.height, 10) +
                                parseInt(r.borderTopWidth, 10) +
                                parseInt(r.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            re.removeChild(e)),
                            a
                    );
                },
            }));
    })();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};
    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return (
            t ||
            (e in $e
                ? e
                : (_e[e] =
                    (function (e) {
                        var t = e[0].toUpperCase() + e.slice(1),
                            n = Be.length;
                        while (n--) if ((e = Be[n] + t) in $e) return e;
                    })(e) || e))
        );
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = { position: "absolute", visibility: "hidden", display: "block" },
        Ge = { letterSpacing: "0", fontWeight: "400" };
    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
                r
                    ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
                    "margin" !== n &&
                    (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
                    : ((u += S.css(e, "padding" + ne[a], !0, i)),
                        "padding" !== n
                            ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                            : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
        return (
            !r &&
            0 <= o &&
            (u +=
                Math.max(
                    0,
                    Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
                    )
                ) || 0),
                u
        );
    }
    function Je(e, t, n) {
        var r = Re(e),
            i =
                (!y.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!y.boxSizingReliable() && i) ||
                (!y.reliableTrDimensions() && A(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
            (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
            Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
            "px"
        );
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (
                    (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) &&
                (i = te.exec(n)) &&
                i[1] &&
                ((n = se(e, t, i)), (o = "number")),
                null != n &&
                n == n &&
                ("number" !== o ||
                u ||
                (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = X(t);
            return (
                Xe.test(t) || (t = ze(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                "get" in a &&
                (i = a.get(e, !0, n)),
                void 0 === i && (i = We(e, t, r)),
                "normal" === i && t in Ge && (i = Ge[t]),
                    "" === n || n
                        ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                        : i
            );
        },
    }),
        S.each(["height", "width"], function (e, u) {
            S.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ue.test(S.css(e, "display")) ||
                        (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? Je(e, u, n)
                            : Me(e, Ve, function () {
                                return Je(e, u, n);
                            });
                },
                set: function (e, t, n) {
                    var r,
                        i = Re(e),
                        o = !y.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                        s = n ? Qe(e, u, n, a, i) : 0;
                    return (
                        a &&
                        o &&
                        (s -= Math.ceil(
                            e["offset" + u[0].toUpperCase() + u.slice(1)] -
                            parseFloat(i[u]) -
                            Qe(e, u, "border", !1, i) -
                            0.5
                        )),
                        s &&
                        (r = te.exec(t)) &&
                        "px" !== (r[3] || "px") &&
                        ((e.style[u] = t), (t = S.css(e, u))),
                            Ye(0, t, s)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(We(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        Me(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (S.cssHooks[i + o] = {
                expand: function (e) {
                    for (
                        var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
            "margin" !== i && (S.cssHooks[i + o].set = Ye);
        }),
        S.fn.extend({
            css: function (e, t) {
                return $(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Re(e), i = t.length; a < i; a++)
                                o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = Ke).prototype = {
            constructor: Ke,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Ke.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Ke.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                            S.easing[this.easing](
                                e,
                                this.options.duration * e,
                                0,
                                1,
                                this.options.duration
                            ))
                        : (this.pos = t = e),
                        (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
                        this
                );
            },
        }).init.prototype = Ke.prototype),
        ((Ke.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                            ? t
                            : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop]
                        ? S.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                        (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
                            ? (e.elem[e.prop] = e.now)
                            : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = Ke.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
            }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = Ke.prototype.init),
        (S.fx.step = {});
    var Ze,
        et,
        tt,
        nt,
        rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;
    function ot() {
        et &&
        (!1 === E.hidden && C.requestAnimationFrame
            ? C.requestAnimationFrame(ot)
            : C.setTimeout(ot, S.fx.interval),
            S.fx.tick());
    }
    function at() {
        return (
            C.setTimeout(function () {
                Ze = void 0;
            }),
                (Ze = Date.now())
        );
    }
    function st(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ut(e, t, n) {
        for (
            var r,
                i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function lt(o, e, t) {
        var n,
            a,
            r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (
                    var e = Ze || at(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = 1 - (t / l.duration || 0),
                        r = 0,
                        i = l.tweens.length;
                    r < i;
                    r++
                )
                    l.tweens[r].run(n);
                return (
                    s.notifyWith(o, [l, n, t]),
                        n < 1 && i
                            ? t
                            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
                );
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(
                        o,
                        l.opts,
                        e,
                        t,
                        l.opts.specialEasing[e] || l.opts.easing
                    );
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return (
                        e
                            ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                            : s.rejectWith(o, [l, e]),
                            this
                    );
                },
            }),
            c = l.props;
        for (
            !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (
                        ((i = t[(r = X(n))]),
                            (o = e[n]),
                        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = S.cssHooks[r]) && ("expand" in a))
                    )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
                return (
                    m(n.stop) &&
                    (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                        n
                );
        return (
            S.map(c, ut, l),
            m(l.opts.start) && l.opts.start.call(o, l),
                l
                    .progress(l.opts.progress)
                    .done(l.opts.done, l.opts.complete)
                    .fail(l.opts.fail)
                    .always(l.opts.always),
                S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
                l
        );
    }
    (S.Animation = S.extend(lt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (lt.tweeners[n] = lt.tweeners[n] || []),
                    lt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    v = Y.get(e, "fxshow");
                for (r in (n.queue ||
                (null == (a = S._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                        a.unqueued || s();
                    })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                    t))
                    if (((i = t[r]), rt.test(i))) {
                        if (
                            (delete t[r],
                                (o = o || "toggle" === i),
                            i === (g ? "hide" : "show"))
                        ) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || S.style(e, r);
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = v && v.display) && (l = Y.get(e, "display")),
                    "none" === (c = S.css(e, "display")) &&
                    (l
                        ? (c = l)
                        : (le([e], !0),
                            (l = e.style.display || l),
                            (c = S.css(e, "display")),
                            le([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === S.css(e, "float") &&
                    (u ||
                    (p.done(function () {
                        h.display = l;
                    }),
                    null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                        (h.display = "inline-block"))),
                    n.overflow &&
                    ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                        (u = !1),
                        d))
                        u ||
                        (v
                            ? "hidden" in v && (g = v.hidden)
                            : (v = Y.access(e, "fxshow", { display: l })),
                        o && (v.hidden = !g),
                        g && le([e], !0),
                            p.done(function () {
                                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                                    S.style(e, r, d[r]);
                            })),
                            (u = ut(g ? v[r] : 0, r, p)),
                        r in v ||
                        ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
        },
    })),
        (S.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? S.extend({}, e)
                    : {
                        complete: n || (!n && t) || (m(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !m(t) && t),
                    };
            return (
                S.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                    (r.duration in S.fx.speeds
                        ? (r.duration = S.fx.speeds[r.duration])
                        : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                    (r.old = r.complete),
                    (r.complete = function () {
                        m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
                    }),
                    r
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = S.isEmptyObject(t),
                    o = S.speed(e, n, r),
                    a = function () {
                        var e = lt(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                return (
                    (a.finish = a),
                        i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                        this.each(function () {
                            var e = !0,
                                t = null != i && i + "queueHooks",
                                n = S.timers,
                                r = Y.get(this);
                            if (t) r[t] && r[t].stop && a(r[t]);
                            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                            for (t = n.length; t--; )
                                n[t].elem !== this ||
                                (null != i && n[t].queue !== i) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                            (!e && o) || S.dequeue(this, i);
                        })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                        this.each(function () {
                            var e,
                                t = Y.get(this),
                                n = t[a + "queue"],
                                r = t[a + "queueHooks"],
                                i = S.timers,
                                o = n ? n.length : 0;
                            for (
                                t.finish = !0,
                                    S.queue(this, a, []),
                                r && r.stop && r.stop.call(this, !0),
                                    e = i.length;
                                e--;

                            )
                                i[e].elem === this &&
                                i[e].queue === a &&
                                (i[e].anim.stop(!0), i.splice(e, 1));
                            for (e = 0; e < o; e++)
                                n[e] && n[e].finish && n[e].finish.call(this);
                            delete t.finish;
                        })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (e, r) {
            var i = S.fn[r];
            S.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                    ? i.apply(this, arguments)
                    : this.animate(st(r, !0), e, t, n);
            };
        }),
        S.each(
            {
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, r) {
                S.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n);
                };
            }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                n = S.timers;
            for (Ze = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (Ze = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            et || ((et = !0), ot());
        }),
        (S.fx.stop = function () {
            et = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (r, e) {
            return (
                (r = (S.fx && S.fx.speeds[r]) || r),
                    (e = e || "fx"),
                    this.queue(e, function (e, t) {
                        var n = C.setTimeout(e, r);
                        t.stop = function () {
                            C.clearTimeout(n);
                        };
                    })
            );
        }),
        (tt = E.createElement("input")),
        (nt = E.createElement("select").appendChild(E.createElement("option"))),
        (tt.type = "checkbox"),
        (y.checkOn = "" !== tt.value),
        (y.optSelected = nt.selected),
        ((tt = E.createElement("input")).value = "t"),
        (tt.type = "radio"),
        (y.radioValue = "t" === tt.value);
    var ct,
        ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e);
            });
        },
    }),
        S.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? S.prop(e, t, n)
                        : ((1 === o && S.isXMLDoc(e)) ||
                        (i =
                            S.attrHooks[t.toLowerCase()] ||
                            (S.expr.match.bool.test(t) ? ct : void 0)),
                            void 0 !== n
                                ? null === n
                                    ? void S.removeAttr(e, t)
                                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                        ? r
                                        : (e.setAttribute(t, n + ""), n)
                                : i && "get" in i && null !== (r = i.get(e, t))
                                    ? r
                                    : null == (r = S.find.attr(e, t))
                                        ? void 0
                                        : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (ct = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = ft[t] || S.find.attr;
            ft[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return (
                    n ||
                    ((i = ft[o]),
                        (ft[o] = r),
                        (r = null != a(e, t, n) ? o : null),
                        (ft[o] = i)),
                        r
                );
            };
        });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P) || []).join(" ");
    }
    function gt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function vt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        },
    }),
        S.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(e)) ||
                        ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                            void 0 !== n
                                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                    ? r
                                    : (e[t] = n)
                                : i && "get" in i && null !== (r = i.get(e, t))
                                    ? r
                                    : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
                                ? 0
                                : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
    y.optSelected ||
    (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
    }),
        S.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                S.propFix[this.toLowerCase()] = this;
            }
        ),
        S.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).addClass(t.call(this, e, gt(this)));
                    });
                if ((e = vt(t)).length)
                    while ((n = this[u++]))
                        if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
                            a = 0;
                            while ((o = e[a++]))
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = ht(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).removeClass(t.call(this, e, gt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = vt(t)).length)
                    while ((n = this[u++]))
                        if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
                            a = 0;
                            while ((o = e[a++]))
                                while (-1 < r.indexOf(" " + o + " "))
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = ht(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : m(i)
                        ? this.each(function (e) {
                            S(this).toggleClass(i.call(this, e, gt(this), t), t);
                        })
                        : this.each(function () {
                            var e, t, n, r;
                            if (a) {
                                (t = 0), (n = S(this)), (r = vt(i));
                                while ((e = r[t++]))
                                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                            } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
                        });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++]))
                    if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
                        return !0;
                return !1;
            },
        });
    var yt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = m(n)),
                    this.each(function (e) {
                        var t;
                        1 === this.nodeType &&
                        (null == (t = i ? n.call(this, e, S(this).val()) : n)
                            ? (t = "")
                            : "number" == typeof t
                                ? (t += "")
                                : Array.isArray(t) &&
                                (t = S.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                        ((r =
                                S.valHooks[this.type] ||
                                S.valHooks[this.nodeName.toLowerCase()]) &&
                            "set" in r &&
                            void 0 !== r.set(this, t, "value")) ||
                        (this.value = t));
                    }))
                : t
                    ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
                    "get" in r &&
                    void 0 !== (e = r.get(t, "value"))
                        ? e
                        : "string" == typeof (e = t.value)
                            ? e.replace(yt, "")
                            : null == e
                                ? ""
                                : e
                    : void 0;
        },
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : ht(S.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                            ) {
                                if (((t = S(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = S.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected =
                                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < S.inArray(S(e).val(), t));
                },
            }),
            y.checkOn ||
            (S.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            });
        }),
        (y.focusin = "onfocusin" in C);
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function (e) {
            e.stopPropagation();
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || E),
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !mt.test(d + S.event.triggered) &&
                (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
                    (u = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[S.expando]
                        ? e
                        : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace
                        ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                        : null),
                    (e.result = void 0),
                e.target || (e.target = n),
                    (t = null == t ? [e] : S.makeArray(t, [e])),
                    (c = S.event.special[d] || {}),
                r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !x(n)) {
                    for (
                        s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
                        o;
                        o = o.parentNode
                    )
                        p.push(o), (a = o);
                    a === (n.ownerDocument || E) &&
                    p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                    (l =
                        (Y.get(o, "events") || Object.create(null))[e.type] &&
                        Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) &&
                    l.apply &&
                    V(o) &&
                    ((e.result = l.apply(o, t)),
                    !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                    e.isDefaultPrevented() ||
                    (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                    !V(n) ||
                    (u &&
                        m(n[d]) &&
                        !x(n) &&
                        ((a = n[u]) && (n[u] = null),
                            (S.event.triggered = d),
                        e.isPropagationStopped() && f.addEventListener(d, xt),
                            n[d](),
                        e.isPropagationStopped() && f.removeEventListener(d, xt),
                            (S.event.triggered = void 0),
                        a && (n[u] = a))),
                        e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
        },
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            },
        }),
    y.focusin ||
    S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t
                    ? Y.access(e, r, t)
                    : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            },
        };
    });
    var bt = C.location,
        wt = { guid: Date.now() },
        Tt = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
            S.error(
                "Invalid XML: " +
                (n
                    ? S.map(n.childNodes, function (e) {
                        return e.textContent;
                    }).join("\n")
                    : e)
            ),
                t
        );
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function (e, t) {
                r || Ct.test(n)
                    ? i(n, t)
                    : At(
                        n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                        t,
                        r,
                        i
                    );
            });
        else if (r || "object" !== w(e)) i(n, e);
        else for (t in e) At(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) At(n, e[n], t, i);
        return r.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !S(this).is(":disabled") &&
                            kt.test(this.nodeName) &&
                            !St.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = S(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                                ? S.map(n, function (e) {
                                    return { name: t.name, value: e.replace(Et, "\r\n") };
                                })
                                : { name: t.name, value: n.replace(Et, "\r\n") };
                    })
                    .get();
            },
        });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");
    function It(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while ((n = i[r++]))
                    "+" === n[0]
                        ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                    S.each(t[e] || [], function (e, t) {
                        var n = t(i, o, a);
                        return "string" != typeof n || u || s[n]
                            ? u
                                ? !(r = n)
                                : void 0
                            : (i.dataTypes.unshift(n), l(n), !1);
                    }),
                    r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Ft(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    (Mt.href = bt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        bt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
            },
            ajaxPrefilter: It(Ot),
            ajaxTransport: It(Pt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = S.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                    x = S.Deferred(),
                    b = S.Callbacks("once memory"),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = qt.exec(p)))
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == h &&
                                ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                                    (a[e] = t)),
                                    this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                        (v.url = ((e || v.url || bt.href) + "").replace(
                            Ht,
                            bt.protocol + "//"
                        )),
                        (v.type = t.method || t.type || v.method || v.type),
                        (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
                    null == v.crossDomain)
                ) {
                    r = E.createElement("a");
                    try {
                        (r.href = v.url),
                            (r.href = r.href),
                            (v.crossDomain =
                                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if (
                    (v.data &&
                    v.processData &&
                    "string" != typeof v.data &&
                    (v.data = S.param(v.data, v.traditional)),
                        Wt(Ot, v, t, T),
                        h)
                )
                    return T;
                for (i in ((g = S.event && v.global) &&
                0 == S.active++ &&
                S.event.trigger("ajaxStart"),
                    (v.type = v.type.toUpperCase()),
                    (v.hasContent = !Lt.test(v.type)),
                    (f = v.url.replace(jt, "")),
                    v.hasContent
                        ? v.data &&
                        v.processData &&
                        0 ===
                        (v.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        (v.data = v.data.replace(Nt, "+"))
                        : ((o = v.url.slice(f.length)),
                        v.data &&
                        (v.processData || "string" == typeof v.data) &&
                        ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
                        !1 === v.cache &&
                        ((f = f.replace(Dt, "$1")),
                            (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
                            (v.url = f + o)),
                v.ifModified &&
                (S.lastModified[f] &&
                T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
                S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
                T.setRequestHeader("Content-Type", v.contentType),
                    T.setRequestHeader(
                        "Accept",
                        v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                            ? v.accepts[v.dataTypes[0]] +
                            ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
                            : v.accepts["*"]
                    ),
                    v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (
                    ((u = "abort"),
                        b.add(v.complete),
                        T.done(v.success),
                        T.fail(v.error),
                        (c = Wt(Pt, v, t, T)))
                ) {
                    if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
                        return T;
                    v.async &&
                    0 < v.timeout &&
                    (d = C.setTimeout(function () {
                        T.abort("timeout");
                    }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                    ((h = !0),
                    d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                    n &&
                    (s = (function (e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s = e.contents,
                            u = e.dataTypes;
                        while ("*" === u[0])
                            u.shift(),
                            void 0 === r &&
                            (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break;
                                }
                        if (u[0] in n) o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break;
                                }
                                a || (a = i);
                            }
                            o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                    })(v, T, n)),
                    !i &&
                    -1 < S.inArray("script", v.dataTypes) &&
                    S.inArray("json", v.dataTypes) < 0 &&
                    (v.converters["text script"] = function () {}),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (
                                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                        (u = o),
                                        (o = c.shift()))
                                )
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if (
                                                    (s = i.split(" "))[1] === o &&
                                                    (a = l[u + " " + s[0]] || l["* " + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = l[i])
                                                        : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"]) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a
                                                            ? e
                                                            : "No conversion from " + u + " to " + o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified &&
                            ((u = T.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[f] = u),
                            (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                                204 === e || "HEAD" === v.type
                                    ? (l = "nocontent")
                                    : 304 === e
                                        ? (l = "notmodified")
                                        : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                            : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ""),
                        i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                    g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                        b.fireWith(y, [T, l]),
                    g &&
                    (m.trigger("ajaxComplete", [T, v]),
                    --S.active || S.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (e, i) {
            S[i] = function (e, t, n, r) {
                return (
                    m(t) && ((r = r || n), (n = t), (t = void 0)),
                        S.ajax(
                            S.extend(
                                { url: e, type: i, dataType: r, data: t, success: n },
                                S.isPlainObject(e) && e
                            )
                        )
                );
            };
        }),
        S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, n);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                    (m(e) && (e = e.call(this[0])),
                        (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                        this
                );
            },
            wrapInner: function (n) {
                return m(n)
                    ? this.each(function (e) {
                        S(this).wrapInner(n.call(this, e));
                    })
                    : this.each(function () {
                        var e = S(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n);
                    });
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                        this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var Bt = { 0: 200, 1223: 204 },
        $t = S.ajaxSettings.xhr();
    (y.cors = !!$t && "withCredentials" in $t),
        (y.ajax = $t = !!$t),
        S.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || ($t && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if (
                            (r.open(i.type, i.url, i.async, i.username, i.password),
                                i.xhrFields)
                        )
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType &&
                        r.overrideMimeType &&
                        r.overrideMimeType(i.mimeType),
                        i.crossDomain ||
                        e["X-Requested-With"] ||
                        (e["X-Requested-With"] = "XMLHttpRequest"),
                            e))
                            r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                ((o =
                                    a =
                                        r.onload =
                                            r.onerror =
                                                r.onabort =
                                                    r.ontimeout =
                                                        r.onreadystatechange =
                                                            null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                            ? "number" != typeof r.status
                                                ? t(0, "error")
                                                : t(r.status, r.statusText)
                                            : t(
                                                Bt[r.status] || r.status,
                                                r.statusText,
                                                "text" !== (r.responseType || "text") ||
                                                "string" != typeof r.responseText
                                                    ? { binary: r.response }
                                                    : { text: r.responseText },
                                                r.getAllResponseHeaders()
                                            ));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                    4 === r.readyState &&
                                    C.setTimeout(function () {
                                        o && a();
                                    });
                                }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: {
                script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(),
                                        (i = null),
                                    e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            E.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var _t,
        zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return (this[e] = !0), e;
        },
    }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a =
                    !1 !== e.jsonp &&
                    (Ut.test(e.url)
                        ? "url"
                        : "string" == typeof e.data &&
                        0 ===
                        (e.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        Ut.test(e.data) &&
                        "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback =
                        m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                        a
                            ? (e[a] = e[a].replace(Ut, "$1" + r))
                            : !1 !== e.jsonp &&
                            (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        (e.converters["script json"] = function () {
                            return o || S.error(r + " was not called"), o[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (i = C[r]),
                        (C[r] = function () {
                            o = arguments;
                        }),
                        n.always(function () {
                            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                            e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
                            o && m(i) && i(o[0]),
                                (o = i = void 0);
                        }),
                        "script"
                );
        }),
        (y.createHTMLDocument =
            (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
            2 === _t.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                (y.createHTMLDocument
                    ? (((r = (t =
                        E.implementation.createHTMLDocument("")).createElement(
                        "base"
                    )).href = E.location.href),
                        t.head.appendChild(r))
                    : (t = E)),
                    (o = !n && []),
                    (i = N.exec(e))
                        ? [t.createElement(i[1])]
                        : ((i = xe([e], t, o)),
                        o && o.length && S(o).remove(),
                            S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
                    m(t)
                        ? ((n = t), (t = void 0))
                        : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                    .done(function (e) {
                        (o = arguments),
                            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                    })
                    .always(
                        n &&
                        function (e, t) {
                            a.each(function () {
                                n.apply(this, o || [e.responseText, t, e]);
                            });
                        }
                    ),
                    this
            );
        }),
        (S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S.css(e, "position"),
                    c = S(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = S.css(e, "top")),
                    (u = S.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
                        ? ((a = (r = c.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                m(t) && (t = t.call(e, n, S.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                            S.offset.setOffset(this, t, e);
                        });
                var e,
                    n,
                    r = this[0];
                return r
                    ? r.getClientRects().length
                        ? ((e = r.getBoundingClientRect()),
                            (n = r.ownerDocument.defaultView),
                            { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === S.css(e, "position")
                            )
                            e = e.parentNode;
                        e &&
                        e !== r &&
                        1 === e.nodeType &&
                        (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
                            (i.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        S.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, i) {
                var o = "pageYOffset" === i;
                S.fn[t] = function (e) {
                    return $(
                        this,
                        function (e, t, n) {
                            var r;
                            if (
                                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                                void 0 === n)
                            )
                                return r ? r[i] : e[t];
                            r
                                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                                : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
                if (t)
                    return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
            });
        }),
        S.each({ Height: "height", Width: "width" }, function (a, s) {
            S.each(
                { padding: "inner" + a, content: s, "": "outer" + a },
                function (r, o) {
                    S.fn[o] = function (e, t) {
                        var n = arguments.length && (r || "boolean" != typeof e),
                            i = r || (!0 === e || !0 === t ? "margin" : "border");
                        return $(
                            this,
                            function (e, t, n) {
                                var r;
                                return x(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + a]
                                        : e.document.documentElement["client" + a]
                                    : 9 === e.nodeType
                                        ? ((r = e.documentElement),
                                            Math.max(
                                                e.body["scroll" + a],
                                                r["scroll" + a],
                                                e.body["offset" + a],
                                                r["offset" + a],
                                                r["client" + a]
                                            ))
                                        : void 0 === n
                                            ? S.css(e, t, i)
                                            : S.style(e, t, n, i);
                            },
                            s,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        S.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                S.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, n) {
                S.fn[n] = function (e, t) {
                    return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                };
            }
        );
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                    ((i = function () {
                        return e.apply(t || this, r.concat(s.call(arguments)));
                    }).guid = e.guid =
                        e.guid || S.guid++),
                    i
            );
    }),
        (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = A),
        (S.isFunction = m),
        (S.isWindow = x),
        (S.camelCase = X),
        (S.type = w),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Xt, "");
        }),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
        return S;
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return (
        (S.noConflict = function (e) {
            return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
        }),
        "undefined" == typeof e && (C.jQuery = C.$ = S),
            S
    );
});

/*!
 * Bootstrap v5.2.0 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e(require("@popperjs/core")))
        : "function" == typeof define && define.amd
            ? define(["@popperjs/core"], e)
            : ((t =
                "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
                e(t.Popper));
})(this, function (t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule) return t;
        const e = Object.create(null, {
            [Symbol.toStringTag]: { value: "Module" },
        });
        if (t)
            for (const i in t)
                if ("default" !== i) {
                    const s = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(
                        e,
                        i,
                        s.get ? s : { enumerable: !0, get: () => t[i] }
                    );
                }
        return (e.default = t), Object.freeze(e);
    }
    const i = e(t),
        s = "transitionend",
        n = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
                    (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
        },
        o = (t) => {
            const e = n(t);
            return e && document.querySelector(e) ? e : null;
        },
        r = (t) => {
            const e = n(t);
            return e ? document.querySelector(e) : null;
        },
        a = (t) => {
            t.dispatchEvent(new Event(s));
        },
        l = (t) =>
            !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        c = (t) =>
            l(t)
                ? t.jquery
                    ? t[0]
                    : t
                : "string" == typeof t && t.length > 0
                    ? document.querySelector(t)
                    : null,
        h = (t) => {
            if (!l(t) || 0 === t.getClientRects().length) return !1;
            const e =
                    "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1;
            }
            return e;
        },
        d = (t) =>
            !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        u = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                    ? u(t.parentNode)
                    : null;
        },
        _ = () => {},
        g = (t) => {
            t.offsetHeight;
        },
        f = () =>
            window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
        p = [],
        m = () => "rtl" === document.documentElement.dir,
        b = (t) => {
            var e;
            (e = () => {
                const e = f();
                if (e) {
                    const i = t.NAME,
                        s = e.fn[i];
                    (e.fn[i] = t.jQueryInterface),
                        (e.fn[i].Constructor = t),
                        (e.fn[i].noConflict = () => ((e.fn[i] = s), t.jQueryInterface));
                }
            }),
                "loading" === document.readyState
                    ? (p.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                        for (const t of p) t();
                    }),
                        p.push(e))
                    : e();
        },
        v = (t) => {
            "function" == typeof t && t();
        },
        y = (t, e, i = !0) => {
            if (!i) return void v(t);
            const n =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: i } =
                        window.getComputedStyle(t);
                    const s = Number.parseFloat(e),
                        n = Number.parseFloat(i);
                    return s || n
                        ? ((e = e.split(",")[0]),
                            (i = i.split(",")[0]),
                        1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                        : 0;
                })(e) + 5;
            let o = !1;
            const r = ({ target: i }) => {
                i === e && ((o = !0), e.removeEventListener(s, r), v(t));
            };
            e.addEventListener(s, r),
                setTimeout(() => {
                    o || a(e);
                }, n);
        },
        w = (t, e, i, s) => {
            const n = t.length;
            let o = t.indexOf(e);
            return -1 === o
                ? !i && s
                    ? t[n - 1]
                    : t[0]
                : ((o += i ? 1 : -1),
                s && (o = (o + n) % n),
                    t[Math.max(0, Math.min(o, n - 1))]);
        },
        A = /[^.]*(?=\..*)\.|.*/,
        T = /\..*/,
        E = /::\d+$/,
        C = {};
    let k = 1;
    const L = { mouseenter: "mouseover", mouseleave: "mouseout" },
        O = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function I(t, e) {
        return (e && `${e}::${k++}`) || t.uidEvent || k++;
    }
    function S(t) {
        const e = I(t);
        return (t.uidEvent = e), (C[e] = C[e] || {}), C[e];
    }
    function D(t, e, i = null) {
        return Object.values(t).find(
            (t) => t.callable === e && t.delegationSelector === i
        );
    }
    function N(t, e, i) {
        const s = "string" == typeof e,
            n = s ? i : e || i;
        let o = j(t);
        return O.has(o) || (o = t), [s, n, o];
    }
    function P(t, e, i, s, n) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = N(e, i, s);
        if (e in L) {
            const t = (t) =>
                function (e) {
                    if (
                        !e.relatedTarget ||
                        (e.relatedTarget !== e.delegateTarget &&
                            !e.delegateTarget.contains(e.relatedTarget))
                    )
                        return t.call(this, e);
                };
            r = t(r);
        }
        const l = S(t),
            c = l[a] || (l[a] = {}),
            h = D(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && n);
        const d = I(r, e.replace(A, "")),
            u = o
                ? (function (t, e, i) {
                    return function s(n) {
                        const o = t.querySelectorAll(e);
                        for (let { target: r } = n; r && r !== this; r = r.parentNode)
                            for (const a of o)
                                if (a === r)
                                    return (
                                        F(n, { delegateTarget: r }),
                                        s.oneOff && $.off(t, n.type, e, i),
                                            i.apply(r, [n])
                                    );
                    };
                })(t, i, r)
                : (function (t, e) {
                    return function i(s) {
                        return (
                            F(s, { delegateTarget: t }),
                            i.oneOff && $.off(t, s.type, e),
                                e.apply(t, [s])
                        );
                    };
                })(t, r);
        (u.delegationSelector = o ? i : null),
            (u.callable = r),
            (u.oneOff = n),
            (u.uidEvent = d),
            (c[d] = u),
            t.addEventListener(a, u, o);
    }
    function x(t, e, i, s, n) {
        const o = D(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
    }
    function M(t, e, i, s) {
        const n = e[i] || {};
        for (const o of Object.keys(n))
            if (o.includes(s)) {
                const s = n[o];
                x(t, e, i, s.callable, s.delegationSelector);
            }
    }
    function j(t) {
        return (t = t.replace(T, "")), L[t] || t;
    }
    const $ = {
        on(t, e, i, s) {
            P(t, e, i, s, !1);
        },
        one(t, e, i, s) {
            P(t, e, i, s, !0);
        },
        off(t, e, i, s) {
            if ("string" != typeof e || !t) return;
            const [n, o, r] = N(e, i, s),
                a = r !== e,
                l = S(t),
                c = l[r] || {},
                h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l)) M(t, l, i, e.slice(1));
                for (const i of Object.keys(c)) {
                    const s = i.replace(E, "");
                    if (!a || e.includes(s)) {
                        const e = c[i];
                        x(t, l, r, e.callable, e.delegationSelector);
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                x(t, l, r, o, n ? i : null);
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const s = f();
            let n = null,
                o = !0,
                r = !0,
                a = !1;
            e !== j(e) &&
            s &&
            ((n = s.Event(e, i)),
                s(t).trigger(n),
                (o = !n.isPropagationStopped()),
                (r = !n.isImmediatePropagationStopped()),
                (a = n.isDefaultPrevented()));
            let l = new Event(e, { bubbles: o, cancelable: !0 });
            return (
                (l = F(l, i)),
                a && l.preventDefault(),
                r && t.dispatchEvent(l),
                l.defaultPrevented && n && n.preventDefault(),
                    l
            );
        },
    };
    function F(t, e) {
        for (const [i, s] of Object.entries(e || {}))
            try {
                t[i] = s;
            } catch (e) {
                Object.defineProperty(t, i, { configurable: !0, get: () => s });
            }
        return t;
    }
    const z = new Map(),
        H = {
            set(t, e, i) {
                z.has(t) || z.set(t, new Map());
                const s = z.get(t);
                s.has(e) || 0 === s.size
                    ? s.set(e, i)
                    : console.error(
                        `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                            Array.from(s.keys())[0]
                        }.`
                    );
            },
            get: (t, e) => (z.has(t) && z.get(t).get(e)) || null,
            remove(t, e) {
                if (!z.has(t)) return;
                const i = z.get(t);
                i.delete(e), 0 === i.size && z.delete(t);
            },
        };
    function q(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function B(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const W = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${B(e)}`, i);
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${B(e)}`);
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter(
                    (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
                );
            for (const s of i) {
                let i = s.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                    (e[i] = q(t.dataset[s]));
            }
            return e;
        },
        getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${B(e)}`)),
    };
    class R {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t)),
                    (t = this._configAfterMerge(t)),
                    this._typeCheckConfig(t),
                    t
            );
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = l(e) ? W.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ...("object" == typeof i ? i : {}),
                ...(l(e) ? W.getDataAttributes(e) : {}),
                ...("object" == typeof t ? t : {}),
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const s of Object.keys(e)) {
                const n = e[s],
                    o = t[s],
                    r = l(o)
                        ? "element"
                        : null == (i = o)
                            ? `${i}`
                            : Object.prototype.toString
                                .call(i)
                                .match(/\s([a-z]+)/i)[1]
                                .toLowerCase();
                if (!new RegExp(n).test(r))
                    throw new TypeError(
                        `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`
                    );
            }
            var i;
        }
    }
    class V extends R {
        constructor(t, e) {
            super(),
            (t = c(t)) &&
            ((this._element = t),
                (this._config = this._getConfig(e)),
                H.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY),
                $.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            y(t, e, i);
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t, this._element)),
                    (t = this._configAfterMerge(t)),
                    this._typeCheckConfig(t),
                    t
            );
        }
        static getInstance(t) {
            return H.get(c(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return (
                this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
            );
        }
        static get VERSION() {
            return "5.2.0";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const K = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        $.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
            if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)))
                return;
            const n = r(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]();
        });
    };
    class Q extends V {
        static get NAME() {
            return "alert";
        }
        close() {
            if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(),
                $.trigger(this._element, "closed.bs.alert"),
                this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    K(Q, "close"), b(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends V {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    $.on(document, "click.bs.button.data-api", X, (t) => {
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle();
    }),
        b(Y);
    const U = {
            find: (t, e = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
                Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let s = t.parentNode.closest(e);
                for (; s; ) i.push(s), (s = s.parentNode.closest(e));
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "details",
                    "[tabindex]",
                    '[contenteditable="true"]',
                ]
                    .map((t) => `${t}:not([tabindex^="-"])`)
                    .join(",");
                return this.find(e, t).filter((t) => !d(t) && h(t));
            },
        },
        G = { endCallback: null, leftCallback: null, rightCallback: null },
        J = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)",
        };
    class Z extends R {
        constructor(t, e) {
            super(),
                (this._element = t),
            t &&
            Z.isSupported() &&
            ((this._config = this._getConfig(e)),
                (this._deltaX = 0),
                (this._supportPointerEvents = Boolean(window.PointerEvent)),
                this._initEvents());
        }
        static get Default() {
            return G;
        }
        static get DefaultType() {
            return J;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            $.off(this._element, ".bs.swipe");
        }
        _start(t) {
            this._supportPointerEvents
                ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
                : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) &&
            (this._deltaX = t.clientX - this._deltaX),
                this._handleSwipe(),
                v(this._config.endCallback);
        }
        _move(t) {
            this._deltaX =
                t.touches && t.touches.length > 1
                    ? 0
                    : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            (this._deltaX = 0),
            e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents
                ? ($.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)),
                    $.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)),
                    this._element.classList.add("pointer-event"))
                : ($.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)),
                    $.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)),
                    $.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return (
                this._supportPointerEvents &&
                ("pen" === t.pointerType || "touch" === t.pointerType)
            );
        }
        static isSupported() {
            return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
            );
        }
    }
    const tt = "next",
        et = "prev",
        it = "left",
        st = "right",
        nt = "slid.bs.carousel",
        ot = "carousel",
        rt = "active",
        at = { ArrowLeft: st, ArrowRight: it },
        lt = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0,
        },
        ct = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean",
        };
    class ht extends V {
        constructor(t, e) {
            super(t, e),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = U.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                this._addEventListeners(),
            this._config.ride === ot && this.cycle();
        }
        static get Default() {
            return lt;
        }
        static get DefaultType() {
            return ct;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(tt);
        }
        nextWhenVisible() {
            !document.hidden && h(this._element) && this.next();
        }
        prev() {
            this._slide(et);
        }
        pause() {
            this._isSliding && a(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                    () => this.nextWhenVisible(),
                    this._config.interval
                ));
        }
        _maybeEnableCycle() {
            this._config.ride &&
            (this._isSliding
                ? $.one(this._element, nt, () => this.cycle())
                : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding)
                return void $.one(this._element, nt, () => this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const s = t > i ? tt : et;
            this._slide(s, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
            this._config.keyboard &&
            $.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
            "hover" === this._config.pause &&
            ($.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
                $.on(this._element, "mouseleave.bs.carousel", () =>
                    this._maybeEnableCycle()
                )),
            this._config.touch && Z.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of U.find(".carousel-item img", this._element))
                $.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(it)),
                rightCallback: () => this._slide(this._directionToOrder(st)),
                endCallback: () => {
                    "hover" === this._config.pause &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                        (this.touchTimeout = setTimeout(
                            () => this._maybeEnableCycle(),
                            500 + this._config.interval
                        )));
                },
            };
            this._swipeHelper = new Z(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = at[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = U.findOne(".active", this._indicatorsElement);
            e.classList.remove(rt), e.removeAttribute("aria-current");
            const i = U.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(rt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                s = t === tt,
                n = e || w(this._getItems(), i, s, this._config.wrap);
            if (n === i) return;
            const o = this._getItemIndex(n),
                r = (e) =>
                    $.trigger(this._element, e, {
                        relatedTarget: n,
                        direction: this._orderToDirection(t),
                        from: this._getItemIndex(i),
                        to: o,
                    });
            if (r("slide.bs.carousel").defaultPrevented) return;
            if (!i || !n) return;
            const a = Boolean(this._interval);
            this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(o),
                (this._activeElement = n);
            const l = s ? "carousel-item-start" : "carousel-item-end",
                c = s ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(c),
                g(n),
                i.classList.add(l),
                n.classList.add(l),
                this._queueCallback(
                    () => {
                        n.classList.remove(l, c),
                            n.classList.add(rt),
                            i.classList.remove(rt, c, l),
                            (this._isSliding = !1),
                            r(nt);
                    },
                    i,
                    this._isAnimated()
                ),
            a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return U.findOne(".active.carousel-item", this._element);
        }
        _getItems() {
            return U.find(".carousel-item", this._element);
        }
        _clearInterval() {
            this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
            return m() ? (t === it ? et : tt) : t === it ? tt : et;
        }
        _orderToDirection(t) {
            return m() ? (t === et ? it : st) : t === et ? st : it;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ht.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    $.on(
        document,
        "click.bs.carousel.data-api",
        "[data-bs-slide], [data-bs-slide-to]",
        function (t) {
            const e = r(this);
            if (!e || !e.classList.contains(ot)) return;
            t.preventDefault();
            const i = ht.getOrCreateInstance(e),
                s = this.getAttribute("data-bs-slide-to");
            return s
                ? (i.to(s), void i._maybeEnableCycle())
                : "next" === W.getDataAttribute(this, "slide")
                    ? (i.next(), void i._maybeEnableCycle())
                    : (i.prev(), void i._maybeEnableCycle());
        }
    ),
        $.on(window, "load.bs.carousel.data-api", () => {
            const t = U.find('[data-bs-ride="carousel"]');
            for (const e of t) ht.getOrCreateInstance(e);
        }),
        b(ht);
    const dt = "show",
        ut = "collapse",
        _t = "collapsing",
        gt = '[data-bs-toggle="collapse"]',
        ft = { parent: null, toggle: !0 },
        pt = { parent: "(null|element)", toggle: "boolean" };
    class mt extends V {
        constructor(t, e) {
            super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
            const i = U.find(gt);
            for (const t of i) {
                const e = o(t),
                    i = U.find(e).filter((t) => t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(),
            this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle();
        }
        static get Default() {
            return ft;
        }
        static get DefaultType() {
            return pt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (
                (this._config.parent &&
                (t = this._getFirstLevelChildren(
                    ".collapse.show, .collapse.collapsing"
                )
                    .filter((t) => t !== this._element)
                    .map((t) => mt.getOrCreateInstance(t, { toggle: !1 }))),
                t.length && t[0]._isTransitioning)
            )
                return;
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ut),
                this._element.classList.add(_t),
                (this._element.style[e] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove(_t),
                        this._element.classList.add(ut, dt),
                        (this._element.style[e] = ""),
                        $.trigger(this._element, "shown.bs.collapse");
                },
                this._element,
                !0
            ),
                (this._element.style[e] = `${this._element[i]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = `${
                this._element.getBoundingClientRect()[t]
            }px`),
                g(this._element),
                this._element.classList.add(_t),
                this._element.classList.remove(ut, dt);
            for (const t of this._triggerArray) {
                const e = r(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
            }
            (this._isTransitioning = !0),
                (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove(_t),
                            this._element.classList.add(ut),
                            $.trigger(this._element, "hidden.bs.collapse");
                    },
                    this._element,
                    !0
                );
        }
        _isShown(t = this._element) {
            return t.classList.contains(dt);
        }
        _configAfterMerge(t) {
            return (t.toggle = Boolean(t.toggle)), (t.parent = c(t.parent)), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(gt);
            for (const e of t) {
                const t = r(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = U.find(":scope .collapse .collapse", this._config.parent);
            return U.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t)
                    i.classList.toggle("collapsed", !e),
                        i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return (
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
                    this.each(function () {
                        const i = mt.getOrCreateInstance(this, e);
                        if ("string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                            i[t]();
                        }
                    })
            );
        }
    }
    $.on(document, "click.bs.collapse.data-api", gt, function (t) {
        ("A" === t.target.tagName ||
            (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
        t.preventDefault();
        const e = o(this),
            i = U.find(e);
        for (const t of i) mt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    }),
        b(mt);
    const bt = "dropdown",
        vt = "ArrowUp",
        yt = "ArrowDown",
        wt = "click.bs.dropdown.data-api",
        At = "keydown.bs.dropdown.data-api",
        Tt = "show",
        Et = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Ct = `${Et}.show`,
        kt = ".dropdown-menu",
        Lt = m() ? "top-end" : "top-start",
        Ot = m() ? "top-start" : "top-end",
        It = m() ? "bottom-end" : "bottom-start",
        St = m() ? "bottom-start" : "bottom-end",
        Dt = m() ? "left-start" : "right-start",
        Nt = m() ? "right-start" : "left-start",
        Pt = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle",
        },
        xt = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)",
        };
    class Mt extends V {
        constructor(t, e) {
            super(t, e),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu = U.findOne(kt, this._parent)),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return Pt;
        }
        static get DefaultType() {
            return xt;
        }
        static get NAME() {
            return bt;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (d(this._element) || this._isShown()) return;
            const t = { relatedTarget: this._element };
            if (!$.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (
                    (this._createPopper(),
                    "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                    for (const t of [].concat(...document.body.children))
                        $.on(t, "mouseover", _);
                this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(Tt),
                    this._element.classList.add(Tt),
                    $.trigger(this._element, "shown.bs.dropdown", t);
            }
        }
        hide() {
            if (d(this._element) || !this._isShown()) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!$.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        $.off(t, "mouseover", _);
                this._popper && this._popper.destroy(),
                    this._menu.classList.remove(Tt),
                    this._element.classList.remove(Tt),
                    this._element.setAttribute("aria-expanded", "false"),
                    W.removeDataAttribute(this._menu, "popper"),
                    $.trigger(this._element, "hidden.bs.dropdown", t);
            }
        }
        _getConfig(t) {
            if (
                "object" == typeof (t = super._getConfig(t)).reference &&
                !l(t.reference) &&
                "function" != typeof t.reference.getBoundingClientRect
            )
                throw new TypeError(
                    `${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
            return t;
        }
        _createPopper() {
            if (void 0 === i)
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let t = this._element;
            "parent" === this._config.reference
                ? (t = this._parent)
                : l(this._config.reference)
                    ? (t = c(this._config.reference))
                    : "object" == typeof this._config.reference &&
                    (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = i.createPopper(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(Tt);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Dt;
            if (t.classList.contains("dropstart")) return Nt;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e =
                "end" ===
                getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? (e ? Ot : Lt) : e ? St : It;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                (this._inNavbar || "static" === this._config.display) &&
                (W.setDataAttribute(this._menu, "popper", "static"),
                    (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                    {
                        ...t,
                        ...("function" == typeof this._config.popperConfig
                            ? this._config.popperConfig(t)
                            : this._config.popperConfig),
                    }
            );
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = U.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu
            ).filter((t) => h(t));
            i.length && w(i, e, t === yt, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Mt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
            const e = U.find(Ct);
            for (const i of e) {
                const e = Mt.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const s = t.composedPath(),
                    n = s.includes(e._menu);
                if (
                    s.includes(e._element) ||
                    ("inside" === e._config.autoClose && !n) ||
                    ("outside" === e._config.autoClose && n)
                )
                    continue;
                if (
                    e._menu.contains(t.target) &&
                    (("keyup" === t.type && "Tab" === t.key) ||
                        /input|select|option|textarea|form/i.test(t.target.tagName))
                )
                    continue;
                const o = { relatedTarget: e._element };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                s = [vt, yt].includes(t.key);
            if (!s && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const n = U.findOne(Et, t.delegateTarget.parentNode),
                o = Mt.getOrCreateInstance(n);
            if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
        }
    }
    $.on(document, At, Et, Mt.dataApiKeydownHandler),
        $.on(document, At, kt, Mt.dataApiKeydownHandler),
        $.on(document, wt, Mt.clearMenus),
        $.on(document, "keyup.bs.dropdown.data-api", Mt.clearMenus),
        $.on(document, wt, Et, function (t) {
            t.preventDefault(), Mt.getOrCreateInstance(this).toggle();
        }),
        b(Mt);
    const jt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        $t = ".sticky-top",
        Ft = "padding-right",
        zt = "margin-right";
    class Ht {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(this._element, Ft, (e) => e + t),
                this._setElementAttributes(jt, Ft, (e) => e + t),
                this._setElementAttributes($t, zt, (e) => e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Ft),
                this._resetElementAttributes(jt, Ft),
                this._resetElementAttributes($t, zt);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (t !== this._element && window.innerWidth > t.clientWidth + s)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(n))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && W.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = W.getDataAttribute(t, e);
                null !== i
                    ? (W.removeDataAttribute(t, e), t.style.setProperty(e, i))
                    : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (l(t)) e(t);
            else for (const i of U.find(t, this._element)) e(i);
        }
    }
    const qt = "show",
        Bt = "mousedown.bs.backdrop",
        Wt = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body",
        },
        Rt = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)",
        };
    class Vt extends R {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        static get Default() {
            return Wt;
        }
        static get DefaultType() {
            return Rt;
        }
        static get NAME() {
            return "backdrop";
        }
        show(t) {
            if (!this._config.isVisible) return void v(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && g(e),
                e.classList.add(qt),
                this._emulateAnimation(() => {
                    v(t);
                });
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove(qt),
                    this._emulateAnimation(() => {
                        this.dispose(), v(t);
                    }))
                : v(t);
        }
        dispose() {
            this._isAppended &&
            ($.off(this._element, Bt),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className),
                this._config.isAnimated && t.classList.add("fade"),
                    (this._element = t);
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return (t.rootElement = c(t.rootElement)), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t),
                $.on(t, Bt, () => {
                    v(this._config.clickCallback);
                }),
                (this._isAppended = !0);
        }
        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Kt = ".bs.focustrap",
        Qt = "backward",
        Xt = { autofocus: !0, trapElement: null },
        Yt = { autofocus: "boolean", trapElement: "element" };
    class Ut extends R {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        static get Default() {
            return Xt;
        }
        static get DefaultType() {
            return Yt;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
                $.off(document, Kt),
                $.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
                $.on(document, "keydown.tab.bs.focustrap", (t) =>
                    this._handleKeydown(t)
                ),
                (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), $.off(document, Kt));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const i = U.focusableChildren(e);
            0 === i.length
                ? e.focus()
                : this._lastTabNavDirection === Qt
                    ? i[i.length - 1].focus()
                    : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key &&
            (this._lastTabNavDirection = t.shiftKey ? Qt : "forward");
        }
    }
    const Gt = "hidden.bs.modal",
        Jt = "show.bs.modal",
        Zt = "modal-open",
        te = "show",
        ee = "modal-static",
        ie = { backdrop: !0, focus: !0, keyboard: !0 },
        se = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean",
        };
    class ne extends V {
        constructor(t, e) {
            super(t, e),
                (this._dialog = U.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Ht()),
                this._addEventListeners();
        }
        static get Default() {
            return ie;
        }
        static get DefaultType() {
            return se;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
            this._isTransitioning ||
            $.trigger(this._element, Jt, { relatedTarget: t }).defaultPrevented ||
            ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(Zt),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
            this._isShown &&
            !this._isTransitioning &&
            ($.trigger(this._element, "hide.bs.modal").defaultPrevented ||
                ((this._isShown = !1),
                    (this._isTransitioning = !0),
                    this._focustrap.deactivate(),
                    this._element.classList.remove(te),
                    this._queueCallback(
                        () => this._hideModal(),
                        this._element,
                        this._isAnimated()
                    )));
        }
        dispose() {
            for (const t of [window, this._dialog]) $.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Vt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new Ut({ trapElement: this._element });
        }
        _showElement(t) {
            document.body.contains(this._element) ||
            document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
            const e = U.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
                g(this._element),
                this._element.classList.add(te),
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            $.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
                    },
                    this._dialog,
                    this._isAnimated()
                );
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.modal", (t) => {
                if ("Escape" === t.key)
                    return this._config.keyboard
                        ? (t.preventDefault(), void this.hide())
                        : void this._triggerBackdropTransition();
            }),
                $.on(window, "resize.bs.modal", () => {
                    this._isShown && !this._isTransitioning && this._adjustDialog();
                }),
                $.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
                    t.target === t.currentTarget &&
                    ("static" !== this._config.backdrop
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition());
                });
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(Zt),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        $.trigger(this._element, Gt);
                });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const t =
                    this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e ||
            this._element.classList.contains(ee) ||
            (t || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(ee),
                this._queueCallback(() => {
                    this._element.classList.remove(ee),
                        this._queueCallback(() => {
                            this._element.style.overflowY = e;
                        }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t =
                    this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = m() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = m() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = ne.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    $.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (t) {
            const e = r(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                $.one(e, Jt, (t) => {
                    t.defaultPrevented ||
                    $.one(e, Gt, () => {
                        h(this) && this.focus();
                    });
                });
            const i = U.findOne(".modal.show");
            i && ne.getInstance(i).hide(), ne.getOrCreateInstance(e).toggle(this);
        }
    ),
        K(ne),
        b(ne);
    const oe = "show",
        re = "showing",
        ae = "hiding",
        le = ".offcanvas.show",
        ce = "hidePrevented.bs.offcanvas",
        he = "hidden.bs.offcanvas",
        de = { backdrop: !0, keyboard: !0, scroll: !1 },
        ue = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean",
        };
    class _e extends V {
        constructor(t, e) {
            super(t, e),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get Default() {
            return de;
        }
        static get DefaultType() {
            return ue;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
            $.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
                .defaultPrevented ||
            ((this._isShown = !0),
                this._backdrop.show(),
            this._config.scroll || new Ht().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(re),
                this._queueCallback(
                    () => {
                        (this._config.scroll && !this._config.backdrop) ||
                        this._focustrap.activate(),
                            this._element.classList.add(oe),
                            this._element.classList.remove(re),
                            $.trigger(this._element, "shown.bs.offcanvas", {
                                relatedTarget: t,
                            });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
            ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.add(ae),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(oe, ae),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                            this._config.scroll || new Ht().reset(),
                                $.trigger(this._element, he);
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Vt({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t
                    ? () => {
                        "static" !== this._config.backdrop
                            ? this.hide()
                            : $.trigger(this._element, ce);
                    }
                    : null,
            });
        }
        _initializeFocusTrap() {
            return new Ut({ trapElement: this._element });
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
                "Escape" === t.key &&
                (this._config.keyboard ? this.hide() : $.trigger(this._element, ce));
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = _e.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    $.on(
        document,
        "click.bs.offcanvas.data-api",
        '[data-bs-toggle="offcanvas"]',
        function (t) {
            const e = r(this);
            if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)))
                return;
            $.one(e, he, () => {
                h(this) && this.focus();
            });
            const i = U.findOne(le);
            i && i !== e && _e.getInstance(i).hide(),
                _e.getOrCreateInstance(e).toggle(this);
        }
    ),
        $.on(window, "load.bs.offcanvas.data-api", () => {
            for (const t of U.find(le)) _e.getOrCreateInstance(t).show();
        }),
        $.on(window, "resize.bs.offcanvas", () => {
            for (const t of U.find("[aria-modal][class*=show][class*=offcanvas-]"))
                "fixed" !== getComputedStyle(t).position &&
                _e.getOrCreateInstance(t).hide();
        }),
        K(_e),
        b(_e);
    const ge = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        fe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        pe =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        me = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i)
                ? !ge.has(i) || Boolean(fe.test(t.nodeValue) || pe.test(t.nodeValue))
                : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
        },
        be = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        ve = {
            allowList: be,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>",
        },
        ye = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string",
        },
        we = {
            entry: "(string|element|function|null)",
            selector: "(string|element)",
        };
    class Ae extends R {
        constructor(t) {
            super(), (this._config = this._getConfig(t));
        }
        static get Default() {
            return ve;
        }
        static get DefaultType() {
            return ye;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content)
                .map((t) => this._resolvePossibleFunction(t))
                .filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return (
                this._checkContent(t),
                    (this._config.content = { ...this._config.content, ...t }),
                    this
            );
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))
                this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))
                super._typeCheckConfig({ selector: e, entry: i }, we);
        }
        _setContent(t, e, i) {
            const s = U.findOne(i, t);
            s &&
            ((e = this._resolvePossibleFunction(e))
                ? l(e)
                    ? this._putElementInTemplate(c(e), s)
                    : this._config.html
                        ? (s.innerHTML = this._maybeSanitize(e))
                        : (s.textContent = e)
                : s.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize
                ? (function (t, e, i) {
                    if (!t.length) return t;
                    if (i && "function" == typeof i) return i(t);
                    const s = new window.DOMParser().parseFromString(t, "text/html"),
                        n = [].concat(...s.body.querySelectorAll("*"));
                    for (const t of n) {
                        const i = t.nodeName.toLowerCase();
                        if (!Object.keys(e).includes(i)) {
                            t.remove();
                            continue;
                        }
                        const s = [].concat(...t.attributes),
                            n = [].concat(e["*"] || [], e[i] || []);
                        for (const e of s) me(e, n) || t.removeAttribute(e.nodeName);
                    }
                    return s.body.innerHTML;
                })(t, this._config.allowList, this._config.sanitizeFn)
                : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t;
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return (e.innerHTML = ""), void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Te = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Ee = "fade",
        Ce = "show",
        ke = ".modal",
        Le = "hide.bs.modal",
        Oe = "hover",
        Ie = "focus",
        Se = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left",
        },
        De = {
            allowList: be,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
        },
        Ne = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
        };
    class Pe extends V {
        constructor(t, e) {
            if (void 0 === i)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(t, e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = !1),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners();
        }
        static get Default() {
            return De;
        }
        static get DefaultType() {
            return Ne;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    return (
                        (e._activeTrigger.click = !e._activeTrigger.click),
                            void (e._isWithActiveTrigger() ? e._enter() : e._leave())
                    );
                }
                this._isShown() ? this._leave() : this._enter();
            }
        }
        dispose() {
            clearTimeout(this._timeout),
                $.off(this._element.closest(ke), Le, this._hideModalHandler),
            this.tip && this.tip.remove(),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = $.trigger(this._element, this.constructor.eventName("show")),
                e = (
                    u(this._element) || this._element.ownerDocument.documentElement
                ).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this.tip && (this.tip.remove(), (this.tip = null));
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: s } = this._config;
            if (
                (this._element.ownerDocument.documentElement.contains(this.tip) ||
                (s.append(i),
                    $.trigger(this._element, this.constructor.eventName("inserted"))),
                    this._popper
                        ? this._popper.update()
                        : (this._popper = this._createPopper(i)),
                    i.classList.add(Ce),
                "ontouchstart" in document.documentElement)
            )
                for (const t of [].concat(...document.body.children))
                    $.on(t, "mouseover", _);
            this._queueCallback(
                () => {
                    const t = this._isHovered;
                    (this._isHovered = !1),
                        $.trigger(this._element, this.constructor.eventName("shown")),
                    t && this._leave();
                },
                this.tip,
                this._isAnimated()
            );
        }
        hide() {
            if (!this._isShown()) return;
            if (
                $.trigger(this._element, this.constructor.eventName("hide"))
                    .defaultPrevented
            )
                return;
            const t = this._getTipElement();
            if ((t.classList.remove(Ce), "ontouchstart" in document.documentElement))
                for (const t of [].concat(...document.body.children))
                    $.off(t, "mouseover", _);
            (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                (this._isHovered = !1),
                this._queueCallback(
                    () => {
                        this._isWithActiveTrigger() ||
                        (this._isHovered || t.remove(),
                            this._element.removeAttribute("aria-describedby"),
                            $.trigger(this._element, this.constructor.eventName("hidden")),
                            this._disposePopper());
                    },
                    this.tip,
                    this._isAnimated()
                );
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return (
                this.tip ||
                (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                )),
                    this.tip
            );
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Ee, Ce),
                e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t) => {
                do {
                    t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return (
                e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ee), e
            );
        }
        setContent(t) {
            (this._newContent = t),
            this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return (
                this._templateFactory
                    ? this._templateFactory.changeContent(t)
                    : (this._templateFactory = new Ae({
                        ...this._config,
                        content: t,
                        extraClass: this._resolvePossibleFunction(
                            this._config.customClass
                        ),
                    })),
                    this._templateFactory
            );
        }
        _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
            return (
                this._resolvePossibleFunction(this._config.title) ||
                this._config.originalTitle
            );
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(
                t.delegateTarget,
                this._getDelegateConfig()
            );
        }
        _isAnimated() {
            return (
                this._config.animation || (this.tip && this.tip.classList.contains(Ee))
            );
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Ce);
        }
        _createPopper(t) {
            const e =
                    "function" == typeof this._config.placement
                        ? this._config.placement.call(this, t, this._element)
                        : this._config.placement,
                s = Se[e.toUpperCase()];
            return i.createPopper(this._element, t, this._getPopperConfig(s));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: { fallbackPlacements: this._config.fallbackPlacements },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t) => {
                            this._getTipElement().setAttribute(
                                "data-popper-placement",
                                t.state.placement
                            );
                        },
                    },
                ],
            };
            return {
                ...e,
                ...("function" == typeof this._config.popperConfig
                    ? this._config.popperConfig(e)
                    : this._config.popperConfig),
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    $.on(
                        this._element,
                        this.constructor.eventName("click"),
                        this._config.selector,
                        (t) => this.toggle(t)
                    );
                else if ("manual" !== e) {
                    const t =
                            e === Oe
                                ? this.constructor.eventName("mouseenter")
                                : this.constructor.eventName("focusin"),
                        i =
                            e === Oe
                                ? this.constructor.eventName("mouseleave")
                                : this.constructor.eventName("focusout");
                    $.on(this._element, t, this._config.selector, (t) => {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger["focusin" === t.type ? Ie : Oe] = !0), e._enter();
                    }),
                        $.on(this._element, i, this._config.selector, (t) => {
                            const e = this._initializeOnDelegatedTarget(t);
                            (e._activeTrigger["focusout" === t.type ? Ie : Oe] =
                                e._element.contains(t.relatedTarget)),
                                e._leave();
                        });
                }
            (this._hideModalHandler = () => {
                this._element && this.hide();
            }),
                $.on(this._element.closest(ke), Le, this._hideModalHandler),
                this._config.selector
                    ? (this._config = {
                        ...this._config,
                        trigger: "manual",
                        selector: "",
                    })
                    : this._fixTitle();
        }
        _fixTitle() {
            const t = this._config.originalTitle;
            t &&
            (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", t),
                this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                    this._setTimeout(() => {
                        this._isHovered && this.show();
                    }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
                this._setTimeout(() => {
                    this._isHovered || this.hide();
                }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = W.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Te.has(t) && delete e[t];
            return (
                (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
                    (t = this._mergeConfigObj(t)),
                    (t = this._configAfterMerge(t)),
                    this._typeCheckConfig(t),
                    t
            );
        }
        _configAfterMerge(t) {
            return (
                (t.container = !1 === t.container ? document.body : c(t.container)),
                "number" == typeof t.delay &&
                (t.delay = { show: t.delay, hide: t.delay }),
                    (t.originalTitle = this._element.getAttribute("title") || ""),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                    t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] &&
                (t[e] = this._config[e]);
            return t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Pe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    b(Pe);
    const xe = {
            ...Pe.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
        },
        Me = { ...Pe.DefaultType, content: "(null|string|element|function)" };
    class je extends Pe {
        static get Default() {
            return xe;
        }
        static get DefaultType() {
            return Me;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent(),
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = je.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    b(je);
    const $e = "click.bs.scrollspy",
        Fe = "active",
        ze = "[href]",
        He = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
        },
        qe = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
        };
    class Be extends V {
        constructor(t, e) {
            super(t, e),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                    "visible" === getComputedStyle(this._element).overflowY
                        ? null
                        : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
                this.refresh();
        }
        static get Default() {
            return He;
        }
        static get DefaultType() {
            return qe;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                    ? this._observer.disconnect()
                    : (this._observer = this._getNewObserver());
            for (const t of this._observableSections.values())
                this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.target = c(t.target) || document.body), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
            ($.off(this._config.target, $e),
                $.on(this._config.target, $e, ze, (t) => {
                    const e = this._observableSections.get(t.target.hash);
                    if (e) {
                        t.preventDefault();
                        const i = this._rootElement || window,
                            s = e.offsetTop - this._element.offsetTop;
                        if (i.scrollTo)
                            return void i.scrollTo({ top: s, behavior: "smooth" });
                        i.scrollTop = s;
                    }
                }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: [0.1, 0.5, 1],
                rootMargin: this._getRootMargin(),
            };
            return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t) => this._targetLinks.get(`#${t.target.id}`),
                i = (t) => {
                    (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
                        this._process(e(t));
                },
                s = (this._rootElement || document.documentElement).scrollTop,
                n = s >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = s;
            for (const o of t) {
                if (!o.isIntersecting) {
                    (this._activeTarget = null), this._clearActiveClass(e(o));
                    continue;
                }
                const t =
                    o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if ((i(o), !s)) return;
                } else n || t || i(o);
            }
        }
        _getRootMargin() {
            return this._config.offset
                ? `${this._config.offset}px 0px -30%`
                : this._config.rootMargin;
        }
        _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()), (this._observableSections = new Map());
            const t = U.find(ze, this._config.target);
            for (const e of t) {
                if (!e.hash || d(e)) continue;
                const t = U.findOne(e.hash, this._element);
                h(t) &&
                (this._targetLinks.set(e.hash, e),
                    this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t &&
            (this._clearActiveClass(this._config.target),
                (this._activeTarget = t),
                t.classList.add(Fe),
                this._activateParents(t),
                $.trigger(this._element, "activate.bs.scrollspy", {
                    relatedTarget: t,
                }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                U.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Fe);
            else
                for (const e of U.parents(t, ".nav, .list-group"))
                    for (const t of U.prev(
                        e,
                        ".nav-link, .nav-item > .nav-link, .list-group-item"
                    ))
                        t.classList.add(Fe);
        }
        _clearActiveClass(t) {
            t.classList.remove(Fe);
            const e = U.find("[href].active", t);
            for (const t of e) t.classList.remove(Fe);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Be.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", () => {
        for (const t of U.find('[data-bs-spy="scroll"]')) Be.getOrCreateInstance(t);
    }),
        b(Be);
    const We = "ArrowLeft",
        Re = "ArrowRight",
        Ve = "ArrowUp",
        Ke = "ArrowDown",
        Qe = "active",
        Xe = "fade",
        Ye = "show",
        Ue =
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Ge = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ue}`;
    class Je extends V {
        constructor(t) {
            super(t),
                (this._parent = this._element.closest(
                    '.list-group, .nav, [role="tablist"]'
                )),
            this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
                $.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e ? $.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null;
            $.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented ||
            (i && i.defaultPrevented) ||
            (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t &&
            (t.classList.add(Qe),
                this._activate(r(t)),
                this._queueCallback(
                    () => {
                        "tab" === t.getAttribute("role")
                            ? (t.focus(),
                                t.removeAttribute("tabindex"),
                                t.setAttribute("aria-selected", !0),
                                this._toggleDropDown(t, !0),
                                $.trigger(t, "shown.bs.tab", { relatedTarget: e }))
                            : t.classList.add(Ye);
                    },
                    t,
                    t.classList.contains(Xe)
                ));
        }
        _deactivate(t, e) {
            t &&
            (t.classList.remove(Qe),
                t.blur(),
                this._deactivate(r(t)),
                this._queueCallback(
                    () => {
                        "tab" === t.getAttribute("role")
                            ? (t.setAttribute("aria-selected", !1),
                                t.setAttribute("tabindex", "-1"),
                                this._toggleDropDown(t, !1),
                                $.trigger(t, "hidden.bs.tab", { relatedTarget: e }))
                            : t.classList.remove(Ye);
                    },
                    t,
                    t.classList.contains(Xe)
                ));
        }
        _keydown(t) {
            if (![We, Re, Ve, Ke].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [Re, Ke].includes(t.key),
                i = w(
                    this._getChildren().filter((t) => !d(t)),
                    t.target,
                    e,
                    !0
                );
            i && Je.getOrCreateInstance(i).show();
        }
        _getChildren() {
            return U.find(Ge, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(t, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = r(t);
            e &&
            (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id &&
            this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const s = (t, s) => {
                const n = U.findOne(t, i);
                n && n.classList.toggle(s, e);
            };
            s(".dropdown-toggle", Qe),
                s(".dropdown-menu", Ye),
                s(".dropdown-item", Qe),
                i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Qe);
        }
        _getInnerElement(t) {
            return t.matches(Ge) ? t : U.findOne(Ge, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Je.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    $.on(document, "click.bs.tab", Ue, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        d(this) || Je.getOrCreateInstance(this).show();
    }),
        $.on(window, "load.bs.tab", () => {
            for (const t of U.find(
                '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
            ))
                Je.getOrCreateInstance(t);
        }),
        b(Je);
    const Ze = "hide",
        ti = "show",
        ei = "showing",
        ii = { animation: "boolean", autohide: "boolean", delay: "number" },
        si = { animation: !0, autohide: !0, delay: 5e3 };
    class ni extends V {
        constructor(t, e) {
            super(t, e),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get Default() {
            return si;
        }
        static get DefaultType() {
            return ii;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(Ze),
                g(this._element),
                this._element.classList.add(ti, ei),
                this._queueCallback(
                    () => {
                        this._element.classList.remove(ei),
                            $.trigger(this._element, "shown.bs.toast"),
                            this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this.isShown() &&
            ($.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                (this._element.classList.add(ei),
                    this._queueCallback(
                        () => {
                            this._element.classList.add(Ze),
                                this._element.classList.remove(ei, ti),
                                $.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ti),
                super.dispose();
        }
        isShown() {
            return this._element.classList.contains(ti);
        }
        _maybeScheduleHide() {
            this._config.autohide &&
            (this._hasMouseInteraction ||
                this._hasKeyboardInteraction ||
                (this._timeout = setTimeout(() => {
                    this.hide();
                }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i ||
            this._element.contains(i) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
            $.on(this._element, "mouseover.bs.toast", (t) =>
                this._onInteraction(t, !0)
            ),
                $.on(this._element, "mouseout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                ),
                $.on(this._element, "focusin.bs.toast", (t) =>
                    this._onInteraction(t, !0)
                ),
                $.on(this._element, "focusout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return (
        K(ni),
            b(ni),
            {
                Alert: Q,
                Button: Y,
                Carousel: ht,
                Collapse: mt,
                Dropdown: Mt,
                Modal: ne,
                Offcanvas: _e,
                Popover: je,
                ScrollSpy: Be,
                Tab: Je,
                Toast: ni,
                Tooltip: Pe,
            }
    );
});
//# sourceMappingURL=bootstrap.min.js.map

/*!
 * @name        easyzoom
 * @author       <>
 * @modified    Thursday, November 22nd, 2018
 * @version     2.5.2
 */
!(function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], function (t) {
            e(t);
        })
        : "object" == typeof module && module.exports
            ? (module.exports = t.EasyZoom = e(require("jquery")))
            : (t.EasyZoom = e(t.jQuery));
})(this, function (i) {
    "use strict";
    var c,
        d,
        l,
        p,
        u,
        f,
        o = {
            loadingNotice: "Loading image",
            errorNotice: "The image could not be loaded",
            errorDuration: 2500,
            linkAttribute: "href",
            preventClicks: !0,
            beforeShow: i.noop,
            beforeHide: i.noop,
            onShow: i.noop,
            onHide: i.noop,
            onMove: i.noop,
        };
    function s(t, e) {
        (this.$target = i(t)),
            (this.opts = i.extend({}, o, e, this.$target.data())),
        void 0 === this.isOpen && this._init();
    }
    return (
        (s.prototype._init = function () {
            (this.$link = this.$target.find("a")),
                (this.$image = this.$target.find("img")),
                (this.$flyout = i('<div class="easyzoom-flyout" />')),
                (this.$notice = i('<div class="easyzoom-notice" />')),
                this.$target.on({
                    "mousemove.easyzoom touchmove.easyzoom": i.proxy(this._onMove, this),
                    "mouseleave.easyzoom touchend.easyzoom": i.proxy(this._onLeave, this),
                    "mouseenter.easyzoom touchstart.easyzoom": i.proxy(
                        this._onEnter,
                        this
                    ),
                }),
            this.opts.preventClicks &&
            this.$target.on("click.easyzoom", function (t) {
                t.preventDefault();
            });
        }),
            (s.prototype.show = function (t, e) {
                var o = this;
                if (!1 !== this.opts.beforeShow.call(this)) {
                    if (!this.isReady)
                        return this._loadImage(
                            this.$link.attr(this.opts.linkAttribute),
                            function () {
                                (!o.isMouseOver && e) || o.show(t);
                            }
                        );
                    this.$target.append(this.$flyout);
                    var i = this.$target.outerWidth(),
                        s = this.$target.outerHeight(),
                        h = this.$flyout.width(),
                        n = this.$flyout.height(),
                        a = this.$zoom.width(),
                        r = this.$zoom.height();
                    (c = a - h) < 0 && (c = 0),
                    (d = r - n) < 0 && (d = 0),
                        (l = c / i),
                        (p = d / s),
                        (this.isOpen = !0),
                        this.opts.onShow.call(this),
                    t && this._move(t);
                }
            }),
            (s.prototype._onEnter = function (t) {
                var e = t.originalEvent.touches;
                (this.isMouseOver = !0),
                (e && 1 != e.length) || (t.preventDefault(), this.show(t, !0));
            }),
            (s.prototype._onMove = function (t) {
                this.isOpen && (t.preventDefault(), this._move(t));
            }),
            (s.prototype._onLeave = function () {
                (this.isMouseOver = !1), this.isOpen && this.hide();
            }),
            (s.prototype._onLoad = function (t) {
                t.currentTarget.width &&
                ((this.isReady = !0),
                    this.$notice.detach(),
                    this.$flyout.html(this.$zoom),
                    this.$target.removeClass("is-loading").addClass("is-ready"),
                t.data.call && t.data());
            }),
            (s.prototype._onError = function () {
                var t = this;
                this.$notice.text(this.opts.errorNotice),
                    this.$target.removeClass("is-loading").addClass("is-error"),
                    (this.detachNotice = setTimeout(function () {
                        t.$notice.detach(), (t.detachNotice = null);
                    }, this.opts.errorDuration));
            }),
            (s.prototype._loadImage = function (t, e) {
                var o = new Image();
                this.$target
                    .addClass("is-loading")
                    .append(this.$notice.text(this.opts.loadingNotice)),
                    (this.$zoom = i(o)
                        .on("error", i.proxy(this._onError, this))
                        .on("load", e, i.proxy(this._onLoad, this))),
                    (o.style.position = "absolute"),
                    (o.src = t);
            }),
            (s.prototype._move = function (t) {
                if (0 === t.type.indexOf("touch")) {
                    var e = t.touches || t.originalEvent.touches;
                    (u = e[0].pageX), (f = e[0].pageY);
                } else (u = t.pageX || u), (f = t.pageY || f);
                var o = this.$target.offset(),
                    i = f - o.top,
                    s = u - o.left,
                    h = Math.ceil(i * p),
                    n = Math.ceil(s * l);
                if (n < 0 || h < 0 || c < n || d < h) this.hide();
                else {
                    var a = -1 * h,
                        r = -1 * n;
                    this.$zoom.css({ top: a, left: r }), this.opts.onMove.call(this, a, r);
                }
            }),
            (s.prototype.hide = function () {
                this.isOpen &&
                !1 !== this.opts.beforeHide.call(this) &&
                (this.$flyout.detach(),
                    (this.isOpen = !1),
                    this.opts.onHide.call(this));
            }),
            (s.prototype.swap = function (t, e, o) {
                this.hide(),
                    (this.isReady = !1),
                this.detachNotice && clearTimeout(this.detachNotice),
                this.$notice.parent().length && this.$notice.detach(),
                    this.$target.removeClass("is-loading is-ready is-error"),
                    this.$image.attr({ src: t, srcset: i.isArray(o) ? o.join() : o }),
                    this.$link.attr(this.opts.linkAttribute, e);
            }),
            (s.prototype.teardown = function () {
                this.hide(),
                    this.$target
                        .off(".easyzoom")
                        .removeClass("is-loading is-ready is-error"),
                this.detachNotice && clearTimeout(this.detachNotice),
                    delete this.$link,
                    delete this.$zoom,
                    delete this.$image,
                    delete this.$notice,
                    delete this.$flyout,
                    delete this.isOpen,
                    delete this.isReady;
            }),
            (i.fn.easyZoom = function (e) {
                return this.each(function () {
                    var t = i.data(this, "easyZoom");
                    t
                        ? void 0 === t.isOpen && t._init()
                        : i.data(this, "easyZoom", new s(this, e));
                });
            }),
            s
    );
});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a;
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a;
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f + a;
        }
        return (-h / 2) * (--f * (f - 2) - 1) + a;
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a;
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a;
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f + a;
        }
        return (h / 2) * ((f -= 2) * f * f + 2) + a;
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a;
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f * f + a;
        }
        return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a;
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f * f * f + a;
        }
        return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin((f / g) * (Math.PI / 2)) + a;
    },
    easeInOutSine: function (e, f, a, h, g) {
        return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
    },
    easeInExpo: function (e, f, a, h, g) {
        return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    },
    easeOutExpo: function (e, f, a, h, g) {
        return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a;
        }
        if (f == g) {
            return a + h;
        }
        if ((f /= g / 2) < 1) {
            return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
        }
        return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
        }
        return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        return (
            -(
                g *
                Math.pow(2, 10 * (h -= 1)) *
                Math.sin(((h * k - i) * (2 * Math.PI)) / j)
            ) + e
        );
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        return (
            g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
            l +
            e
        );
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k / 2) == 2) {
            return e + l;
        }
        if (!j) {
            j = k * (0.3 * 1.5);
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        if (h < 1) {
            return (
                -0.5 *
                (g *
                    Math.pow(2, 10 * (h -= 1)) *
                    Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
                e
            );
        }
        return (
            g *
            Math.pow(2, -10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
            0.5 +
            l +
            e
        );
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a;
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        if ((f /= h / 2) < 1) {
            return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
        }
        return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < 1 / 2.75) {
            return h * (7.5625 * f * f) + a;
        } else {
            if (f < 2 / 2.75) {
                return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
            } else {
                if (f < 2.5 / 2.75) {
                    return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
                } else {
                    return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
        }
        return (
            jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
        );
    },
});

/*-------------------------
  # Lightcase
-------------------------*/
!(function (t) {
    "use strict";
    var e = {
        cache: {},
        support: {},
        objects: {},
        init: function (e) {
            return this.each(function () {
                t(this)
                    .unbind("click.lightcase")
                    .bind("click.lightcase", function (i) {
                        i.preventDefault(), t(this).lightcase("start", e);
                    });
            });
        },
        start: function (i) {
            (e.origin = lightcase.origin = this),
                (e.settings = lightcase.settings =
                    t.extend(
                        !0,
                        {
                            idPrefix: "lightcase-",
                            classPrefix: "lightcase-",
                            attrPrefix: "lc-",
                            transition: "elastic",
                            transitionIn: null,
                            transitionOut: null,
                            cssTransitions: !0,
                            speedIn: 250,
                            speedOut: 250,
                            maxWidth: 800,
                            maxHeight: 500,
                            forceWidth: !1,
                            forceHeight: !1,
                            liveResize: !0,
                            fullScreenModeForMobile: !0,
                            mobileMatchExpression:
                                /(iphone|ipod|ipad|android|blackberry|symbian)/,
                            disableShrink: !1,
                            shrinkFactor: 0.75,
                            overlayOpacity: 0.9,
                            slideshow: !1,
                            slideshowAutoStart: !0,
                            timeout: 5e3,
                            swipe: !0,
                            useKeys: !0,
                            useCategories: !0,
                            navigateEndless: !0,
                            closeOnOverlayClick: !0,
                            title: null,
                            caption: null,
                            showTitle: !0,
                            showCaption: !0,
                            showSequenceInfo: !0,
                            inline: { width: "auto", height: "auto" },
                            ajax: {
                                width: "auto",
                                height: "auto",
                                type: "get",
                                dataType: "html",
                                data: {},
                            },
                            iframe: { width: 800, height: 500, frameborder: 0 },
                            flash: { width: 400, height: 205, wmode: "transparent" },
                            video: {
                                width: 400,
                                height: 225,
                                poster: "",
                                preload: "auto",
                                controls: !0,
                                autobuffer: !0,
                                autoplay: !0,
                                loop: !1,
                            },
                            attr: "data-rel",
                            href: null,
                            type: null,
                            typeMapping: {
                                image: "jpg,jpeg,gif,png,bmp",
                                flash: "swf",
                                video: "mp4,mov,ogv,ogg,webm",
                                iframe: "html,php",
                                ajax: "json,txt",
                                inline: "#",
                            },
                            errorMessage: function () {
                                return (
                                    '<p class="' +
                                    e.settings.classPrefix +
                                    'error">' +
                                    e.settings.labels.errorMessage +
                                    "</p>"
                                );
                            },
                            labels: {
                                errorMessage: "Source could not be found...",
                                "sequenceInfo.of": " of ",
                                close: "Close",
                                "navigator.prev": "Prev",
                                "navigator.next": "Next",
                                "navigator.play": "Play",
                                "navigator.pause": "Pause",
                            },
                            markup: function () {
                                t("body").append(
                                    (e.objects.overlay = t(
                                        '<div id="' + e.settings.idPrefix + 'overlay"></div>'
                                    )),
                                    (e.objects.loading = t(
                                        '<div id="' +
                                        e.settings.idPrefix +
                                        'loading" class="' +
                                        e.settings.classPrefix +
                                        'icon-spin"></div>'
                                    )),
                                    (e.objects.case = t(
                                        '<div id="' +
                                        e.settings.idPrefix +
                                        'case" aria-hidden="true" role="dialog"></div>'
                                    ))
                                ),
                                    e.objects.case.after(
                                        (e.objects.nav = t(
                                            '<div id="' + e.settings.idPrefix + 'nav"></div>'
                                        ))
                                    ),
                                    e.objects.nav.append(
                                        (e.objects.close = t(
                                            '<a href="#" class="' +
                                            e.settings.classPrefix +
                                            'icon-close"><span>' +
                                            e.settings.labels.close +
                                            "</span></a>"
                                        )),
                                        (e.objects.prev = t(
                                            '<a href="#" class="' +
                                            e.settings.classPrefix +
                                            'icon-prev"><span>' +
                                            e.settings.labels["navigator.prev"] +
                                            "</span></a>"
                                        ).hide()),
                                        (e.objects.next = t(
                                            '<a href="#" class="' +
                                            e.settings.classPrefix +
                                            'icon-next"><span>' +
                                            e.settings.labels["navigator.next"] +
                                            "</span></a>"
                                        ).hide()),
                                        (e.objects.play = t(
                                            '<a href="#" class="' +
                                            e.settings.classPrefix +
                                            'icon-play"><span>' +
                                            e.settings.labels["navigator.play"] +
                                            "</span></a>"
                                        ).hide()),
                                        (e.objects.pause = t(
                                            '<a href="#" class="' +
                                            e.settings.classPrefix +
                                            'icon-pause"><span>' +
                                            e.settings.labels["navigator.pause"] +
                                            "</span></a>"
                                        ).hide())
                                    ),
                                    e.objects.case.append(
                                        (e.objects.content = t(
                                            '<div id="' + e.settings.idPrefix + 'content"></div>'
                                        )),
                                        (e.objects.info = t(
                                            '<div id="' + e.settings.idPrefix + 'info"></div>'
                                        ))
                                    ),
                                    e.objects.content.append(
                                        (e.objects.contentInner = t(
                                            '<div class="' +
                                            e.settings.classPrefix +
                                            'contentInner"></div>'
                                        ))
                                    ),
                                    e.objects.info.append(
                                        (e.objects.sequenceInfo = t(
                                            '<div id="' + e.settings.idPrefix + 'sequenceInfo"></div>'
                                        )),
                                        (e.objects.title = t(
                                            '<h4 id="' + e.settings.idPrefix + 'title"></h4>'
                                        )),
                                        (e.objects.caption = t(
                                            '<p id="' + e.settings.idPrefix + 'caption"></p>'
                                        ))
                                    );
                            },
                            onInit: {},
                            onStart: {},
                            onFinish: {},
                            onClose: {},
                            onCleanup: {},
                        },
                        i,
                        e.origin.data ? e.origin.data("lc-options") : {}
                    )),
                e._callHooks(e.settings.onInit),
                (e.objectData = e._setObjectData(this)),
                e._cacheScrollPosition(),
                e._watchScrollInteraction(),
                e._addElements(),
                e._open(),
                (e.dimensions = e.getViewportDimensions());
        },
        get: function (t) {
            return e.objects[t];
        },
        getObjectData: function () {
            return e.objectData;
        },
        _setObjectData: function (i) {
            var s = t(i),
                n = {
                    title:
                        e.settings.title ||
                        s.attr(e._prefixAttributeName("title")) ||
                        s.attr("title"),
                    caption:
                        e.settings.caption ||
                        s.attr(e._prefixAttributeName("caption")) ||
                        s.children("img").attr("alt"),
                    url: e._determineUrl(),
                    requestType: e.settings.ajax.type,
                    requestData: e.settings.ajax.data,
                    requestDataType: e.settings.ajax.dataType,
                    rel: s.attr(e._determineAttributeSelector()),
                    type: e.settings.type || e._verifyDataType(e._determineUrl()),
                    isPartOfSequence: e._isPartOfSequence(s.attr(e.settings.attr), ":"),
                    isPartOfSequenceWithSlideshow: e._isPartOfSequence(
                        s.attr(e.settings.attr),
                        ":slideshow"
                    ),
                    currentIndex: t(e._determineAttributeSelector()).index(s),
                    sequenceLength: t(e._determineAttributeSelector()).length,
                };
            return (
                (n.sequenceInfo =
                    n.currentIndex +
                    1 +
                    e.settings.labels["sequenceInfo.of"] +
                    n.sequenceLength),
                    (n.prevIndex = n.currentIndex - 1),
                    (n.nextIndex = n.currentIndex + 1),
                    n
            );
        },
        _prefixAttributeName: function (t) {
            return "data-" + e.settings.attrPrefix + t;
        },
        _determineLinkTarget: function () {
            return (
                e.settings.href ||
                t(e.origin).attr(e._prefixAttributeName("href")) ||
                t(e.origin).attr("href")
            );
        },
        _determineAttributeSelector: function () {
            var i = t(e.origin),
                s = "";
            if (void 0 !== e.cache.selector) s = e.cache.selector;
            else if (
                !0 === e.settings.useCategories &&
                i.attr(e._prefixAttributeName("categories"))
            ) {
                var n = i.attr(e._prefixAttributeName("categories")).split(" ");
                t.each(n, function (t, i) {
                    t > 0 && (s += ","),
                        (s +=
                            "[" + e._prefixAttributeName("categories") + '~="' + i + '"]');
                });
            } else s = "[" + e.settings.attr + '="' + i.attr(e.settings.attr) + '"]';
            return (e.cache.selector = s), s;
        },
        _determineUrl: function () {
            var i,
                s = e._verifyDataUrl(e._determineLinkTarget()),
                n = 0,
                o = 0;
            return (
                t.each(s, function (t, s) {
                    e._devicePixelRatio() >= s.density &&
                    s.density >= o &&
                    e._matchMedia()("screen and (min-width:" + s.width + "px)")
                        .matches &&
                    s.width >= n &&
                    ((n = s.width), (o = s.density), (i = s.url));
                }),
                    i
            );
        },
        _normalizeUrl: function (t) {
            var e = /^\d+$/;
            return t.split(",").map(function (t) {
                var i = { width: 0, density: 0 };
                return (
                    t
                        .trim()
                        .split(/\s+/)
                        .forEach(function (t, s) {
                            if (0 === s) return (i.url = t);
                            var n = t.substring(0, t.length - 1),
                                o = t[t.length - 1],
                                a = parseInt(n, 10),
                                c = parseFloat(n);
                            "w" === o && e.test(n)
                                ? (i.width = a)
                                : "h" === o && e.test(n)
                                    ? (i.height = a)
                                    : "x" !== o || isNaN(c) || (i.density = c);
                        }),
                        i
                );
            });
        },
        _isPartOfSequence: function (i, s) {
            var n = t("[" + e.settings.attr + '="' + i + '"]');
            return new RegExp(s).test(i) && n.length > 1;
        },
        isSlideshowEnabled: function () {
            return (
                e.objectData.isPartOfSequence &&
                (!0 === e.settings.slideshow ||
                    !0 === e.objectData.isPartOfSequenceWithSlideshow)
            );
        },
        _loadContent: function () {
            e.cache.originalObject && e._restoreObject(), e._createObject();
        },
        _createObject: function () {
            var i;
            switch (e.objectData.type) {
                case "image":
                    (i = t(new Image())).attr({
                        src: e.objectData.url,
                        alt: e.objectData.title,
                    });
                    break;
                case "inline":
                    (i = t(
                        '<div class="' + e.settings.classPrefix + 'inlineWrap"></div>'
                    )).html(e._cloneObject(t(e.objectData.url))),
                        t.each(e.settings.inline, function (t, s) {
                            i.attr(e._prefixAttributeName(t), s);
                        });
                    break;
                case "ajax":
                    (i = t(
                        '<div class="' + e.settings.classPrefix + 'inlineWrap"></div>'
                    )),
                        t.each(e.settings.ajax, function (t, s) {
                            "data" !== t && i.attr(e._prefixAttributeName(t), s);
                        });
                    break;
                case "flash":
                    (i = t(
                        '<embed src="' +
                        e.objectData.url +
                        '" type="application/x-shockwave-flash"></embed>'
                    )),
                        t.each(e.settings.flash, function (t, e) {
                            i.attr(t, e);
                        });
                    break;
                case "video":
                    (i = t("<video></video>")).attr("src", e.objectData.url),
                        t.each(e.settings.video, function (t, e) {
                            i.attr(t, e);
                        });
                    break;
                default:
                    (i = t("<iframe></iframe>")).attr({ src: e.objectData.url }),
                        t.each(e.settings.iframe, function (t, e) {
                            i.attr(t, e);
                        });
            }
            e._addObject(i), e._loadObject(i);
        },
        _addObject: function (t) {
            e.objects.contentInner.html(t),
                e._loading("start"),
                e._callHooks(e.settings.onStart),
                !0 === e.settings.showSequenceInfo && e.objectData.isPartOfSequence
                    ? (e.objects.sequenceInfo.html(e.objectData.sequenceInfo),
                        e.objects.sequenceInfo.show())
                    : (e.objects.sequenceInfo.empty(), e.objects.sequenceInfo.hide()),
                !0 === e.settings.showTitle &&
                void 0 !== e.objectData.title &&
                "" !== e.objectData.title
                    ? (e.objects.title.html(e.objectData.title), e.objects.title.show())
                    : (e.objects.title.empty(), e.objects.title.hide()),
                !0 === e.settings.showCaption &&
                void 0 !== e.objectData.caption &&
                "" !== e.objectData.caption
                    ? (e.objects.caption.html(e.objectData.caption),
                        e.objects.caption.show())
                    : (e.objects.caption.empty(), e.objects.caption.hide());
        },
        _loadObject: function (i) {
            switch (e.objectData.type) {
                case "inline":
                    t(e.objectData.url) ? e._showContent(i) : e.error();
                    break;
                case "ajax":
                    t.ajax(
                        t.extend({}, e.settings.ajax, {
                            url: e.objectData.url,
                            type: e.objectData.requestType,
                            dataType: e.objectData.requestDataType,
                            data: e.objectData.requestData,
                            success: function (t, s, n) {
                                "json" === e.objectData.requestDataType
                                    ? (e.objectData.data = t)
                                    : i.html(t),
                                    e._showContent(i);
                            },
                            error: function (t, i, s) {
                                e.error();
                            },
                        })
                    );
                    break;
                case "flash":
                    e._showContent(i);
                    break;
                case "video":
                    "function" == typeof i.get(0).canPlayType ||
                    0 === e.objects.case.find("video").length
                        ? e._showContent(i)
                        : e.error();
                    break;
                default:
                    e.objectData.url
                        ? (i.on("load", function () {
                            e._showContent(i);
                        }),
                            i.on("error", function () {
                                e.error();
                            }))
                        : e.error();
            }
        },
        error: function () {
            e.objectData.type = "error";
            var i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>');
            i.html(e.settings.errorMessage),
                e.objects.contentInner.html(i),
                e._showContent(e.objects.contentInner);
        },
        _calculateDimensions: function (t) {
            e._cleanupDimensions();
            var i = {
                objectWidth: t.attr("width")
                    ? t.attr("width")
                    : t.attr(e._prefixAttributeName("width")),
                objectHeight: t.attr("height")
                    ? t.attr("height")
                    : t.attr(e._prefixAttributeName("height")),
            };
            if (!e.settings.disableShrink)
                switch (
                    ((i.maxWidth = parseInt(
                        e.dimensions.windowWidth * e.settings.shrinkFactor
                    )),
                        (i.maxHeight = parseInt(
                            e.dimensions.windowHeight * e.settings.shrinkFactor
                        )),
                    i.maxWidth > e.settings.maxWidth &&
                    (i.maxWidth = e.settings.maxWidth),
                    i.maxHeight > e.settings.maxHeight &&
                    (i.maxHeight = e.settings.maxHeight),
                        (i.differenceWidthAsPercent = parseInt(
                            (100 / i.maxWidth) * i.objectWidth
                        )),
                        (i.differenceHeightAsPercent = parseInt(
                            (100 / i.maxHeight) * i.objectHeight
                        )),
                        e.objectData.type)
                    ) {
                    case "image":
                    case "flash":
                    case "video":
                        i.differenceWidthAsPercent > 100 &&
                        i.differenceWidthAsPercent > i.differenceHeightAsPercent &&
                        ((i.objectWidth = i.maxWidth),
                            (i.objectHeight = parseInt(
                                (i.objectHeight / i.differenceWidthAsPercent) * 100
                            ))),
                        i.differenceHeightAsPercent > 100 &&
                        i.differenceHeightAsPercent > i.differenceWidthAsPercent &&
                        ((i.objectWidth = parseInt(
                            (i.objectWidth / i.differenceHeightAsPercent) * 100
                        )),
                            (i.objectHeight = i.maxHeight)),
                        i.differenceHeightAsPercent > 100 &&
                        i.differenceWidthAsPercent < i.differenceHeightAsPercent &&
                        ((i.objectWidth = parseInt(
                            (i.maxWidth / i.differenceHeightAsPercent) *
                            i.differenceWidthAsPercent
                        )),
                            (i.objectHeight = i.maxHeight));
                        break;
                    case "error":
                        !isNaN(i.objectWidth) &&
                        i.objectWidth > i.maxWidth &&
                        (i.objectWidth = i.maxWidth);
                        break;
                    default:
                        (isNaN(i.objectWidth) || i.objectWidth > i.maxWidth) &&
                        !e.settings.forceWidth &&
                        (i.objectWidth = i.maxWidth),
                        ((isNaN(i.objectHeight) && "auto" !== i.objectHeight) ||
                            i.objectHeight > i.maxHeight) &&
                        !e.settings.forceHeight &&
                        (i.objectHeight = i.maxHeight);
                }
            e.settings.forceWidth
                ? (i.maxWidth = i.objectWidth)
                : t.attr(e._prefixAttributeName("max-width")) &&
                (i.maxWidth = t.attr(e._prefixAttributeName("max-width"))),
                e.settings.forceHeight
                    ? (i.maxHeight = i.objectHeight)
                    : t.attr(e._prefixAttributeName("max-height")) &&
                    (i.maxHeight = t.attr(e._prefixAttributeName("max-height"))),
                e._adjustDimensions(t, i);
        },
        _adjustDimensions: function (t, i) {
            t.css({
                width: i.objectWidth,
                height: i.objectHeight,
                "max-width": i.maxWidth,
                "max-height": i.maxHeight,
            }),
                e.objects.contentInner.css({
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    "max-width": "100%",
                }),
                e.objects.case.css({ width: e.objects.contentInner.outerWidth() }),
                e.objects.case.css({
                    "margin-top": parseInt(-e.objects.case.outerHeight() / 2),
                    "margin-left": parseInt(-e.objects.case.outerWidth() / 2),
                });
        },
        _loading: function (t) {
            "start" === t
                ? (e.objects.case.addClass(e.settings.classPrefix + "loading"),
                    e.objects.loading.show())
                : "end" === t &&
                (e.objects.case.removeClass(e.settings.classPrefix + "loading"),
                    e.objects.loading.hide());
        },
        getViewportDimensions: function () {
            return {
                windowWidth: t(window).innerWidth(),
                windowHeight: t(window).innerHeight(),
            };
        },
        _verifyDataUrl: function (t) {
            return (
                !(!t || void 0 === t || "" === t) &&
                (t.indexOf("#") > -1 && (t = "#" + (t = t.split("#"))[t.length - 1]),
                    e._normalizeUrl(t.toString()))
            );
        },
        _verifyDataType: function (t) {
            var i = e.settings.typeMapping;
            if (!t) return !1;
            for (var s in i)
                if (i.hasOwnProperty(s))
                    for (var n = i[s].split(","), o = 0; o < n.length; o++) {
                        var a = n[o].toLowerCase(),
                            c = new RegExp(".(" + a + ")$", "i"),
                            r = t.toLowerCase().split("?")[0].substr(-5);
                        if (!0 === c.test(r) || ("inline" === s && t.indexOf(a) > -1))
                            return s;
                    }
            return "iframe";
        },
        _addElements: function () {
            (void 0 !== e.objects.case &&
                t("#" + e.objects.case.attr("id")).length) ||
            e.settings.markup();
        },
        _showContent: function (t) {
            switch (
                (e.objects.case.attr(e._prefixAttributeName("type"), e.objectData.type),
                    (e.cache.object = t),
                    e._calculateDimensions(t),
                    e._callHooks(e.settings.onFinish),
                    e.settings.transitionIn)
                ) {
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollHorizontal":
                case "scrollVertical":
                    e.transition.scroll(e.objects.case, "in", e.settings.speedIn),
                        e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
                    break;
                case "elastic":
                    e.objects.case.css("opacity") < 1 &&
                    (e.transition.zoom(e.objects.case, "in", e.settings.speedIn),
                        e.transition.fade(
                            e.objects.contentInner,
                            "in",
                            e.settings.speedIn
                        ));
                case "fade":
                case "fadeInline":
                    e.transition.fade(e.objects.case, "in", e.settings.speedIn),
                        e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
                    break;
                default:
                    e.transition.fade(e.objects.case, "in", 0);
            }
            e._loading("end"), (e.isBusy = !1);
        },
        _processContent: function () {
            switch (((e.isBusy = !0), e.settings.transitionOut)) {
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollVertical":
                case "scrollHorizontal":
                    e.objects.case.is(":hidden")
                        ? (e.transition.fade(e.objects.case, "out", 0, 0, function () {
                            e._loadContent();
                        }),
                            e.transition.fade(e.objects.contentInner, "out", 0))
                        : e.transition.scroll(
                            e.objects.case,
                            "out",
                            e.settings.speedOut,
                            function () {
                                e._loadContent();
                            }
                        );
                    break;
                case "fade":
                    e.objects.case.is(":hidden")
                        ? e.transition.fade(e.objects.case, "out", 0, 0, function () {
                            e._loadContent();
                        })
                        : e.transition.fade(
                            e.objects.case,
                            "out",
                            e.settings.speedOut,
                            0,
                            function () {
                                e._loadContent();
                            }
                        );
                    break;
                case "fadeInline":
                case "elastic":
                    e.objects.case.is(":hidden")
                        ? e.transition.fade(e.objects.case, "out", 0, 0, function () {
                            e._loadContent();
                        })
                        : e.transition.fade(
                            e.objects.contentInner,
                            "out",
                            e.settings.speedOut,
                            0,
                            function () {
                                e._loadContent();
                            }
                        );
                    break;
                default:
                    e.transition.fade(e.objects.case, "out", 0, 0, function () {
                        e._loadContent();
                    });
            }
        },
        _handleEvents: function () {
            e._unbindEvents(),
                e.objects.nav.children().not(e.objects.close).hide(),
            e.isSlideshowEnabled() &&
            ((!0 !== e.settings.slideshowAutoStart && !e.isSlideshowStarted) ||
            e.objects.nav.hasClass(e.settings.classPrefix + "paused")
                ? e._stopTimeout()
                : e._startTimeout()),
            e.settings.liveResize && e._watchResizeInteraction(),
                e.objects.close.click(function (t) {
                    t.preventDefault(), e.close();
                }),
            !0 === e.settings.closeOnOverlayClick &&
            e.objects.overlay.css("cursor", "pointer").click(function (t) {
                t.preventDefault(), e.close();
            }),
            !0 === e.settings.useKeys && e._addKeyEvents(),
            e.objectData.isPartOfSequence &&
            (e.objects.nav.attr(e._prefixAttributeName("ispartofsequence"), !0),
                e.objects.nav.data("items", e._setNavigation()),
                e.objects.prev.click(function (t) {
                    t.preventDefault(),
                    (!0 !== e.settings.navigateEndless && e.item.isFirst()) ||
                    (e.objects.prev.unbind("click"),
                        (e.cache.action = "prev"),
                        e.objects.nav.data("items").prev.click(),
                    e.isSlideshowEnabled() && e._stopTimeout());
                }),
                e.objects.next.click(function (t) {
                    t.preventDefault(),
                    (!0 !== e.settings.navigateEndless && e.item.isLast()) ||
                    (e.objects.next.unbind("click"),
                        (e.cache.action = "next"),
                        e.objects.nav.data("items").next.click(),
                    e.isSlideshowEnabled() && e._stopTimeout());
                }),
            e.isSlideshowEnabled() &&
            (e.objects.play.click(function (t) {
                t.preventDefault(), e._startTimeout();
            }),
                e.objects.pause.click(function (t) {
                    t.preventDefault(), e._stopTimeout();
                })),
            !0 === e.settings.swipe &&
            (t.isPlainObject(t.event.special.swipeleft) &&
            e.objects.case.on("swipeleft", function (t) {
                t.preventDefault(),
                    e.objects.next.click(),
                e.isSlideshowEnabled() && e._stopTimeout();
            }),
            t.isPlainObject(t.event.special.swiperight) &&
            e.objects.case.on("swiperight", function (t) {
                t.preventDefault(),
                    e.objects.prev.click(),
                e.isSlideshowEnabled() && e._stopTimeout();
            })));
        },
        _addKeyEvents: function () {
            t(document).bind("keyup.lightcase", function (t) {
                if (!e.isBusy)
                    switch (t.keyCode) {
                        case 27:
                            e.objects.close.click();
                            break;
                        case 37:
                            e.objectData.isPartOfSequence && e.objects.prev.click();
                            break;
                        case 39:
                            e.objectData.isPartOfSequence && e.objects.next.click();
                    }
            });
        },
        _startTimeout: function () {
            (e.isSlideshowStarted = !0),
                e.objects.play.hide(),
                e.objects.pause.show(),
                (e.cache.action = "next"),
                e.objects.nav.removeClass(e.settings.classPrefix + "paused"),
                (e.timeout = setTimeout(function () {
                    e.objects.nav.data("items").next.click();
                }, e.settings.timeout));
        },
        _stopTimeout: function () {
            e.objects.play.show(),
                e.objects.pause.hide(),
                e.objects.nav.addClass(e.settings.classPrefix + "paused"),
                clearTimeout(e.timeout);
        },
        _setNavigation: function () {
            var i = t(e.cache.selector || e.settings.attr),
                s = e.objectData.sequenceLength - 1,
                n = {
                    prev: i.eq(e.objectData.prevIndex),
                    next: i.eq(e.objectData.nextIndex),
                };
            return (
                e.objectData.currentIndex > 0
                    ? e.objects.prev.show()
                    : (n.prevItem = i.eq(s)),
                    e.objectData.nextIndex <= s
                        ? e.objects.next.show()
                        : (n.next = i.eq(0)),
                !0 === e.settings.navigateEndless &&
                (e.objects.prev.show(), e.objects.next.show()),
                    n
            );
        },
        item: {
            isFirst: function () {
                return 0 === e.objectData.currentIndex;
            },
            isLast: function () {
                return e.objectData.currentIndex === e.objectData.sequenceLength - 1;
            },
        },
        _cloneObject: function (t) {
            var i = t.clone(),
                s = t.attr("id");
            return (
                t.is(":hidden")
                    ? (e._cacheObjectData(t),
                        t.attr("id", e.settings.idPrefix + "temp-" + s).empty())
                    : i.removeAttr("id"),
                    i.show()
            );
        },
        isMobileDevice: function () {
            return !!navigator.userAgent
                .toLowerCase()
                .match(e.settings.mobileMatchExpression);
        },
        isTransitionSupported: function () {
            var i = t("body").get(0),
                s = !1,
                n = {
                    transition: "",
                    WebkitTransition: "-webkit-",
                    MozTransition: "-moz-",
                    OTransition: "-o-",
                    MsTransition: "-ms-",
                };
            for (var o in n)
                n.hasOwnProperty(o) &&
                o in i.style &&
                ((e.support.transition = n[o]), (s = !0));
            return s;
        },
        transition: {
            fade: function (t, i, s, n, o) {
                var a = "in" === i,
                    c = {},
                    r = t.css("opacity"),
                    l = {},
                    d = n || (a ? 1 : 0);
                (!e.isOpen && a) ||
                ((c.opacity = r),
                    (l.opacity = d),
                    t.css(c).show(),
                    e.support.transitions
                        ? ((l[e.support.transition + "transition"] = s + "ms ease"),
                            setTimeout(function () {
                                t.css(l),
                                    setTimeout(function () {
                                        t.css(e.support.transition + "transition", ""),
                                        !o || (!e.isOpen && a) || o();
                                    }, s);
                            }, 15))
                        : (t.stop(), t.animate(l, s, o)));
            },
            scroll: function (t, i, s, n) {
                var o = "in" === i,
                    a = o ? e.settings.transitionIn : e.settings.transitionOut,
                    c = "left",
                    r = {},
                    l = o ? 0 : 1,
                    d = o ? "-50%" : "50%",
                    u = {},
                    h = o ? 1 : 0,
                    f = o ? "50%" : "-50%";
                if (e.isOpen || !o) {
                    switch (a) {
                        case "scrollTop":
                            c = "top";
                            break;
                        case "scrollRight":
                            (d = o ? "150%" : "50%"), (f = o ? "50%" : "150%");
                            break;
                        case "scrollBottom":
                            (c = "top"), (d = o ? "150%" : "50%"), (f = o ? "50%" : "150%");
                            break;
                        case "scrollHorizontal":
                            (d = o ? "150%" : "50%"), (f = o ? "50%" : "-50%");
                            break;
                        case "scrollVertical":
                            (c = "top"), (d = o ? "-50%" : "50%"), (f = o ? "50%" : "150%");
                    }
                    if ("prev" === e.cache.action)
                        switch (a) {
                            case "scrollHorizontal":
                                (d = o ? "-50%" : "50%"), (f = o ? "50%" : "150%");
                                break;
                            case "scrollVertical":
                                (d = o ? "150%" : "50%"), (f = o ? "50%" : "-50%");
                        }
                    (r.opacity = l),
                        (r[c] = d),
                        (u.opacity = h),
                        (u[c] = f),
                        t.css(r).show(),
                        e.support.transitions
                            ? ((u[e.support.transition + "transition"] = s + "ms ease"),
                                setTimeout(function () {
                                    t.css(u),
                                        setTimeout(function () {
                                            t.css(e.support.transition + "transition", ""),
                                            !n || (!e.isOpen && o) || n();
                                        }, s);
                                }, 15))
                            : (t.stop(), t.animate(u, s, n));
                }
            },
            zoom: function (t, i, s, n) {
                var o = "in" === i,
                    a = {},
                    c = t.css("opacity"),
                    r = o ? "scale(0.75)" : "scale(1)",
                    l = {},
                    d = o ? 1 : 0,
                    u = o ? "scale(1)" : "scale(0.75)";
                (!e.isOpen && o) ||
                ((a.opacity = c),
                    (a[e.support.transition + "transform"] = r),
                    (l.opacity = d),
                    t.css(a).show(),
                    e.support.transitions
                        ? ((l[e.support.transition + "transform"] = u),
                            (l[e.support.transition + "transition"] = s + "ms ease"),
                            setTimeout(function () {
                                t.css(l),
                                    setTimeout(function () {
                                        t.css(e.support.transition + "transform", ""),
                                            t.css(e.support.transition + "transition", ""),
                                        !n || (!e.isOpen && o) || n();
                                    }, s);
                            }, 15))
                        : (t.stop(), t.animate(l, s, n)));
            },
        },
        _callHooks: function (i) {
            "object" == typeof i &&
            t.each(i, function (t, i) {
                "function" == typeof i && i.call(e.origin);
            });
        },
        _cacheObjectData: function (i) {
            t.data(i, "cache", { id: i.attr("id"), content: i.html() }),
                (e.cache.originalObject = i);
        },
        _restoreObject: function () {
            var i = t('[id^="' + e.settings.idPrefix + 'temp-"]');
            i.attr("id", t.data(e.cache.originalObject, "cache").id),
                i.html(t.data(e.cache.originalObject, "cache").content);
        },
        resize: function () {
            e.isOpen &&
            (e.isSlideshowEnabled() && e._stopTimeout(),
                (e.dimensions = e.getViewportDimensions()),
                e._calculateDimensions(e.cache.object));
        },
        _cacheScrollPosition: function () {
            var i = t(window),
                s = t(document),
                n = { top: i.scrollTop(), left: i.scrollLeft() };
            (e.cache.scrollPosition = e.cache.scrollPosition || {}),
                e._assertContentInvisible()
                    ? e.cache.cacheScrollPositionSkipped
                        ? (delete e.cache.cacheScrollPositionSkipped,
                            e._restoreScrollPosition())
                        : (s.width() > i.width() && (e.cache.scrollPosition.left = n.left),
                        s.height() > i.height() && (e.cache.scrollPosition.top = n.top))
                    : (e.cache.cacheScrollPositionSkipped = !0);
        },
        _watchResizeInteraction: function () {
            t(window).resize(e.resize);
        },
        _unwatchResizeInteraction: function () {
            t(window).off("resize", e.resize);
        },
        _watchScrollInteraction: function () {
            t(window).scroll(e._cacheScrollPosition),
                t(window).resize(e._cacheScrollPosition);
        },
        _unwatchScrollInteraction: function () {
            t(window).off("scroll", e._cacheScrollPosition),
                t(window).off("resize", e._cacheScrollPosition);
        },
        _assertContentInvisible: function () {
            return (
                t(
                    t("body")
                        .children()
                        .not("[id*=" + e.settings.idPrefix + "]")
                        .get(0)
                ).height() > 0
            );
        },
        _restoreScrollPosition: function () {
            t(window)
                .scrollTop(parseInt(e.cache.scrollPosition.top))
                .scrollLeft(parseInt(e.cache.scrollPosition.left))
                .resize();
        },
        _switchToFullScreenMode: function () {
            (e.settings.shrinkFactor = 1),
                (e.settings.overlayOpacity = 1),
                t("html").addClass(e.settings.classPrefix + "fullScreenMode");
        },
        _open: function () {
            switch (
                ((e.isOpen = !0),
                    (e.support.transitions =
                        !!e.settings.cssTransitions && e.isTransitionSupported()),
                    (e.support.mobileDevice = e.isMobileDevice()),
                e.support.mobileDevice &&
                (t("html").addClass(e.settings.classPrefix + "isMobileDevice"),
                e.settings.fullScreenModeForMobile && e._switchToFullScreenMode()),
                e.settings.transitionIn ||
                (e.settings.transitionIn = e.settings.transition),
                e.settings.transitionOut ||
                (e.settings.transitionOut = e.settings.transition),
                    e.settings.transitionIn)
                ) {
                case "fade":
                case "fadeInline":
                case "elastic":
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollVertical":
                case "scrollHorizontal":
                    e.objects.case.is(":hidden") &&
                    (e.objects.close.css("opacity", 0),
                        e.objects.overlay.css("opacity", 0),
                        e.objects.case.css("opacity", 0),
                        e.objects.contentInner.css("opacity", 0)),
                        e.transition.fade(
                            e.objects.overlay,
                            "in",
                            e.settings.speedIn,
                            e.settings.overlayOpacity,
                            function () {
                                e.transition.fade(e.objects.close, "in", e.settings.speedIn),
                                    e._handleEvents(),
                                    e._processContent();
                            }
                        );
                    break;
                default:
                    e.transition.fade(
                        e.objects.overlay,
                        "in",
                        0,
                        e.settings.overlayOpacity,
                        function () {
                            e.transition.fade(e.objects.close, "in", 0),
                                e._handleEvents(),
                                e._processContent();
                        }
                    );
            }
            t("html").addClass(e.settings.classPrefix + "open"),
                e.objects.case.attr("aria-hidden", "false");
        },
        close: function () {
            switch (
                ((e.isOpen = !1),
                e.isSlideshowEnabled() &&
                (e._stopTimeout(),
                    (e.isSlideshowStarted = !1),
                    e.objects.nav.removeClass(e.settings.classPrefix + "paused")),
                    e.objects.loading.hide(),
                    e._unbindEvents(),
                    e._unwatchResizeInteraction(),
                    e._unwatchScrollInteraction(),
                    t("html").removeClass(e.settings.classPrefix + "open"),
                    e.objects.case.attr("aria-hidden", "true"),
                    e.objects.nav.children().hide(),
                    e._restoreScrollPosition(),
                    e._callHooks(e.settings.onClose),
                    e.settings.transitionOut)
                ) {
                case "fade":
                case "fadeInline":
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollHorizontal":
                case "scrollVertical":
                    e.transition.fade(
                        e.objects.case,
                        "out",
                        e.settings.speedOut,
                        0,
                        function () {
                            e.transition.fade(
                                e.objects.overlay,
                                "out",
                                e.settings.speedOut,
                                0,
                                function () {
                                    e.cleanup();
                                }
                            );
                        }
                    );
                    break;
                case "elastic":
                    e.transition.zoom(
                        e.objects.case,
                        "out",
                        e.settings.speedOut,
                        function () {
                            e.transition.fade(
                                e.objects.overlay,
                                "out",
                                e.settings.speedOut,
                                0,
                                function () {
                                    e.cleanup();
                                }
                            );
                        }
                    );
                    break;
                default:
                    e.cleanup();
            }
        },
        _unbindEvents: function () {
            e.objects.overlay.unbind("click"),
                t(document).unbind("keyup.lightcase"),
                e.objects.case.unbind("swipeleft").unbind("swiperight"),
                e.objects.prev.unbind("click"),
                e.objects.next.unbind("click"),
                e.objects.play.unbind("click"),
                e.objects.pause.unbind("click"),
                e.objects.close.unbind("click");
        },
        _cleanupDimensions: function () {
            var t = e.objects.contentInner.css("opacity");
            e.objects.case.css({
                width: "",
                height: "",
                top: "",
                left: "",
                "margin-top": "",
                "margin-left": "",
            }),
                e.objects.contentInner.removeAttr("style").css("opacity", t),
                e.objects.contentInner.children().removeAttr("style");
        },
        cleanup: function () {
            e._cleanupDimensions(),
                e.objects.loading.hide(),
                e.objects.overlay.hide(),
                e.objects.case.hide(),
                e.objects.prev.hide(),
                e.objects.next.hide(),
                e.objects.play.hide(),
                e.objects.pause.hide(),
                e.objects.case.removeAttr(e._prefixAttributeName("type")),
                e.objects.nav.removeAttr(e._prefixAttributeName("ispartofsequence")),
                e.objects.contentInner.empty().hide(),
                e.objects.info.children().empty(),
            e.cache.originalObject && e._restoreObject(),
                e._callHooks(e.settings.onCleanup),
                (e.cache = {});
        },
        _matchMedia: function () {
            return window.matchMedia || window.msMatchMedia;
        },
        _devicePixelRatio: function () {
            return window.devicePixelRatio || 1;
        },
        _isPublicMethod: function (t) {
            return "function" == typeof e[t] && "_" !== t.charAt(0);
        },
        _export: function () {
            (window.lightcase = {}),
                t.each(e, function (t) {
                    e._isPublicMethod(t) && (lightcase[t] = e[t]);
                });
        },
    };
    e._export(),
        (t.fn.lightcase = function (i) {
            return e._isPublicMethod(i)
                ? e[i].apply(this, Array.prototype.slice.call(arguments, 1))
                : "object" != typeof i && i
                    ? void t.error("Method " + i + " does not exist on jQuery.lightcase")
                    : e.init.apply(this, arguments);
        });
})(jQuery);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: { start: null, current: null },
                direction: null,
            }),
            (this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"],
                },
            }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = {
                            width: "auto",
                            "margin-left": d ? b : "",
                            "margin-right": d ? "" : b,
                        };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b =
                            (this.width() / this.settings.items).toFixed(3) -
                            this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                        (c = this._mergers[d]),
                            (c =
                                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                                c),
                            (a.items.merge = c > 1 || a.items.merge),
                            (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g > 0; )
                        b.push(this.normalize(b.length / 2, !0)),
                            (h += c[b[b.length - 1]][0].outerHTML),
                            b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                            (i = c[b[b.length - 1]][0].outerHTML + i),
                            (g -= 1);
                    (this._clones = b),
                        a(h).addClass("cloned").appendTo(this.$stage),
                        a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (
                        var a = this.settings.rtl ? 1 : -1,
                            b = this._clones.length + this._items.length,
                            c = -1,
                            d = 0,
                            e = 0,
                            f = [];
                        ++c < b;

                    )
                        (d = f[c - 1] || 0),
                            (e = this._widths[this.relative(c)] + this.settings.margin),
                            f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = {
                            width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                            "padding-left": a || "",
                            "padding-right": a || "",
                        };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge)
                        for (; b--; )
                            (a.css.width = this._widths[this.relative(b)]),
                                d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0),
                        (a.current = Math.max(
                            this.minimum(),
                            Math.min(this.maximum(), a.current)
                        )),
                        this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                        (a = this._coordinates[c - 1] || 0),
                            (b = Math.abs(this._coordinates[c]) + f * e),
                        ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                            (this.op(b, "<", g) && this.op(b, ">", h))) &&
                        i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage
                            .children(":eq(" + i.join("), :eq(") + ")")
                            .addClass("active"),
                        this.$stage.children(".center").removeClass("center"),
                    this.settings.center &&
                    this.$stage.children().eq(this.current()).addClass("center");
                },
            },
        ]),
        (e.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
            this.$stage.length ||
            (this.$element.addClass(this.options.loadingClass),
                (this.$stage = a("<" + this.settings.stageElement + ">", {
                    class: this.settings.stageClass,
                }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
                this.$element.append(this.$stage.parent()));
        }),
        (e.prototype.initializeItems = function () {
            var b = this.$element.find(".owl-item");
            if (b.length)
                return (
                    (this._items = b.get().map(function (b) {
                        return a(b);
                    })),
                        (this._mergers = this._items.map(function () {
                            return 1;
                        })),
                        void this.refresh()
                );
            this.replace(this.$element.children().not(this.$stage.parent())),
                this.isVisible() ? this.refresh() : this.invalidate("width"),
                this.$element
                    .removeClass(this.options.loadingClass)
                    .addClass(this.options.loadedClass);
        }),
        (e.prototype.initialize = function () {
            if (
                (this.enter("initializing"),
                    this.trigger("initialize"),
                    this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
                this.settings.autoWidth && !this.is("pre-loading"))
            ) {
                var a, b, c;
                (a = this.$element.find("img")),
                    (b = this.settings.nestedItemSelector
                        ? "." + this.settings.nestedItemSelector
                        : d),
                    (c = this.$element.children(b).width()),
                a.length && c <= 0 && this.preloadAutoWidthImages(a);
            }
            this.initializeStage(),
                this.initializeItems(),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
        }),
        (e.prototype.isVisible = function () {
            return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                    a <= b && a > d && (d = Number(a));
                }),
                    (e = a.extend({}, this.options, c[d])),
                "function" == typeof e.stagePadding &&
                (e.stagePadding = e.stagePadding()),
                    delete e.responsive,
                e.responsiveClass &&
                this.$element.attr(
                    "class",
                    this.$element
                        .attr("class")
                        .replace(
                            new RegExp(
                                "(" + this.options.responsiveClass + "-)\\S+\\s",
                                "g"
                            ),
                            "$1" + d
                        )
                ))
                : (e = a.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: e } }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", {
                    property: { name: "settings", value: this.settings },
                });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                (c.data = a("<" + this.settings.itemElement + "/>")
                    .addClass(this.options.itemClass)
                    .append(b)),
                    this.trigger("prepared", { content: c.data }),
                    c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                b < c;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
                this._pipe[b].run(e),
                    b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return (
                        this._width - 2 * this.settings.stagePadding + this.settings.margin
                    );
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer),
                (this.resizeTimer = b.setTimeout(
                    this._handlers.onResize,
                    this.settings.responsiveRefreshRate
                ));
        }),
        (e.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"),
                    this.trigger("resize").isDefaultPrevented()
                        ? (this.leave("resizing"), !1)
                        : (this.invalidate("width"),
                            this.refresh(),
                            this.leave("resizing"),
                            void this.trigger("resized")))
            );
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition &&
            this.$stage.on(
                a.support.transition.end + ".owl.core",
                a.proxy(this.onTransitionEnd, this)
            ),
            !1 !== this.settings.responsive &&
            this.on(b, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
                this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                this.$stage.on(
                    "dragstart.owl.core selectstart.owl.core",
                    function () {
                        return !1;
                    }
                )),
            this.settings.touchDrag &&
            (this.$stage.on(
                "touchstart.owl.core",
                a.proxy(this.onDragStart, this)
            ),
                this.$stage.on(
                    "touchcancel.owl.core",
                    a.proxy(this.onDragEnd, this)
                ));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
            (a.support.transform
                ? ((d = this.$stage
                    .css("transform")
                    .replace(/.*\(|\)| /g, "")
                    .split(",")),
                    (d = {
                        x: d[16 === d.length ? 12 : 4],
                        y: d[16 === d.length ? 13 : 5],
                    }))
                : ((d = this.$stage.position()),
                    (d = {
                        x: this.settings.rtl
                            ? d.left +
                            this.$stage.width() -
                            this.width() +
                            this.settings.margin
                            : d.left,
                        y: d.top,
                    })),
            this.is("animating") &&
            (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
                this.invalidate("position")),
                this.$element.toggleClass(
                    this.options.grabClass,
                    "mousedown" === b.type
                ),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on(
                    "mouseup.owl.core touchend.owl.core",
                    a.proxy(this.onDragEnd, this)
                ),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function (b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b));
                        a(c).on(
                            "mousemove.owl.core touchmove.owl.core",
                            a.proxy(this.onDragMove, this)
                        ),
                        (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                        (b.preventDefault(),
                            this.enter("dragging"),
                            this.trigger("drag"));
                    }, this)
                ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
            (a.preventDefault(),
                this.settings.loop
                    ? ((b = this.coordinates(this.minimum())),
                        (c = this.coordinates(this.maximum() + 1) - b),
                        (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl
                        ? this.coordinates(this.maximum())
                        : this.coordinates(this.minimum())),
                        (c = this.settings.rtl
                            ? this.coordinates(this.minimum())
                            : this.coordinates(this.maximum())),
                        (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                        (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
            ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                this.invalidate("position"),
                this.update(),
                (this._drag.direction = f),
            (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
                return !1;
            })),
            this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var e = -1,
                f = 30,
                g = this.width(),
                h = this.coordinates();
            return (
                this.settings.freeDrag ||
                a.each(
                    h,
                    a.proxy(function (a, i) {
                        return (
                            "left" === c && b > i - f && b < i + f
                                ? (e = a)
                                : "right" === c && b > i - g - f && b < i - g + f
                                    ? (e = a + 1)
                                    : this.op(b, "<", i) &&
                                    this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                                    (e = "left" === c ? a + 1 : a),
                            -1 === e
                        );
                    }, this)
                ),
                this.settings.loop ||
                (this.op(b, ">", h[this.minimum()])
                    ? (e = b = this.minimum())
                    : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
                    e
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
            c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({
                        transform: "translate3d(" + b + "px,0px,0px)",
                        transition:
                            this.speed() / 1e3 +
                            "s" +
                            (this.settings.slideTransition
                                ? " " + this.settings.slideTransition
                                : ""),
                    })
                    : c
                        ? this.$stage.animate(
                            { left: b + "px" },
                            this.speed(),
                            this.settings.fallbackEasing,
                            a.proxy(this.onTransitionEnd, this)
                        )
                        : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", {
                    property: { name: "position", value: a },
                });
                b.data !== d && (a = this.normalize(b.data)),
                    (this._current = a),
                    this.invalidate("position"),
                    this.trigger("changed", {
                        property: { name: "position", value: this._current },
                    });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) &&
                ((this._invalidated[b] = !0),
                this.is("valid") && this.leave("valid")),
                    a.map(this._invalidated, function (a, b) {
                        return b;
                    })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)) !== d &&
            ((this._speed = 0),
                (this._current = a),
                this.suppress(["translate", "translated"]),
                this.animate(this.coordinates(a)),
                this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return (
                !this.isNumeric(a) || c < 1
                    ? (a = d)
                    : (a < 0 || a >= c + e) &&
                    (a = ((((a - e / 2) % c) + c) % c) + e / 2),
                    a
            );
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                if ((b = this._items.length))
                    for (
                        c = this._items[--b].width(), d = this.$element.width();
                        b-- && !((c += this._items[b].width() + this.settings.margin) > d);

                    );
                f = b + 1;
            } else
                f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d
                ? this._items.slice()
                : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d
                ? this._mergers.slice()
                : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                    return f(b);
                })
                : a.map(this._clones, function (a, c) {
                    return a === b ? f(c) : null;
                });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                    this._coordinates,
                    a.proxy(function (a, b) {
                        return this.coordinates(b);
                    }, this)
                )
                : (this.settings.center
                    ? (this.settings.rtl && ((e = -1), (f = b + 1)),
                        (c = this._coordinates[b]),
                        (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
                    : (c = this._coordinates[f] || 0),
                    (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c
                ? 0
                : Math.min(Math.max(Math.abs(b - a), 1), 6) *
                Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
                    (a = c + e),
                (d = ((((a - h) % g) + g) % g) + h) !== a &&
                d - e <= i &&
                d - e > 0 &&
                ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                    ? ((i += 1), (a = ((a % i) + i) % i))
                    : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
            this.isVisible() && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            if (
                a !== d &&
                (a.stopPropagation(),
                (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
            )
                return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (e.prototype.viewport = function () {
            var d;
            return (
                this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                        ? (d = b.innerWidth)
                        : c.documentElement && c.documentElement.clientWidth
                            ? (d = c.documentElement.clientWidth)
                            : console.warn("Can not detect viewport width."),
                    d
            );
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
            b && (b = b instanceof jQuery ? b : a(b)),
            this.settings.nestedItemSelector &&
            (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)),
                                this.$stage.append(b),
                                this._items.push(b),
                                this._mergers.push(
                                    1 *
                                    b
                                        .find("[data-merge]")
                                        .addBack("[data-merge]")
                                        .attr("data-merge") || 1
                                );
                        }, this)
                    ),
                this.reset(
                    this.isNumeric(this.settings.startPosition)
                        ? this.settings.startPosition
                        : 0
                ),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                    0 !== this._items.length && this._items[c - 1].after(b),
                        this._items.push(b),
                        this._mergers.push(
                            1 *
                            b
                                .find("[data-merge]")
                                .addBack("[data-merge]")
                                .attr("data-merge") || 1
                        ))
                    : (this._items[c].before(b),
                        this._items.splice(c, 0, b),
                        this._mergers.splice(
                            c,
                            0,
                            1 *
                            b
                                .find("[data-merge]")
                                .addBack("[data-merge]")
                                .attr("data-merge") || 1
                        )),
            this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)) !== d &&
            (this.trigger("remove", { content: this._items[a], position: a }),
                this._items[a].remove(),
                this._items.splice(a, 1),
                this._mergers.splice(a, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src),
                                        c.css("opacity", 1),
                                        this.leave("pre-loading"),
                                    !this.is("pre-loading") &&
                                    !this.is("initializing") &&
                                    this.refresh();
                                }, this)
                            )
                            .attr(
                                "src",
                                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
                            );
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                a(c).off(".owl.core"),
            !1 !== this.settings.responsive &&
            (b.clearTimeout(this.resizeTimer),
                this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr(
                        "class",
                        this.$element
                            .attr("class")
                            .replace(
                                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                                ""
                            )
                    )
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener
                ? a.addEventListener(b, c, d)
                : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener
                ? a.removeEventListener(b, c, d)
                : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = { item: { count: this._items.length, index: this.current() } },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event(
                    [b, "owl", d || "carousel"].join(".").toLowerCase(),
                    a.extend({ relatedTarget: this }, h, c)
                );
            return (
                this._supress[b] ||
                (a.each(this._plugins, function (a, b) {
                    b.onTrigger && b.onTrigger(j);
                }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                this.settings &&
                "function" == typeof this.settings[i] &&
                this.settings[i].call(this, j)),
                    j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0),
                        this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if (
                    (a.event.special[b.name] || (a.event.special[b.name] = {}),
                        !a.event.special[b.name].owl)
                ) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c ||
                        !c.apply ||
                        (a.namespace && -1 !== a.namespace.indexOf("owl"))
                            ? a.namespace && a.namespace.indexOf("owl") > -1
                            : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                (this._states.tags[b.name]
                    ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                        b.tags
                    ))
                    : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                        this._states.tags[b.name],
                        a.proxy(function (c, d) {
                            return a.inArray(c, this._states.tags[b.name]) === d;
                        }, this)
                    )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                    (a =
                        a.touches && a.touches.length
                            ? a.touches[0]
                            : a.changedTouches && a.changedTouches.length
                                ? a.changedTouches[0]
                                : a),
                    a.pageX
                        ? ((c.x = a.pageX), (c.y = a.pageY))
                        : ((c.x = a.clientX), (c.y = a.clientY)),
                    c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(
                        [
                            "next",
                            "prev",
                            "to",
                            "destroy",
                            "refresh",
                            "replace",
                            "add",
                            "remove",
                        ],
                        function (b, c) {
                            f.register({ type: e.Type.Event, name: c }),
                                f.$element.on(
                                    c + ".owl.carousel.core",
                                    a.proxy(function (a) {
                                        a.namespace &&
                                        a.relatedTarget !== this &&
                                        (this.suppress([c]),
                                            f[c].apply(this, [].slice.call(arguments, 1)),
                                            this.release([c]));
                                    }, f)
                                );
                        }
                    )),
                "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval ||
                ((this._visible = this._core.isVisible()),
                    (this._interval = b.setInterval(
                        a.proxy(this.refresh, this),
                        this._core.settings.autoRefreshInterval
                    )));
            }),
            (e.prototype.refresh = function () {
                this._core.isVisible() !== this._visible &&
                ((this._visible = !this._visible),
                    this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible &&
                this._core.invalidate("width") &&
                this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                        a.proxy(function (b) {
                            if (
                                b.namespace &&
                                this._core.settings &&
                                this._core.settings.lazyLoad &&
                                ((b.property && "position" == b.property.name) ||
                                    "initialized" == b.type)
                            ) {
                                var c = this._core.settings,
                                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                    f = (c.center && -1 * e) || 0,
                                    g =
                                        (b.property && b.property.value !== d
                                            ? b.property.value
                                            : this._core.current()) + f,
                                    h = this._core.clones().length,
                                    i = a.proxy(function (a, b) {
                                        this.load(b);
                                    }, this);
                                for (
                                    c.lazyLoadEager > 0 &&
                                    ((e += c.lazyLoadEager),
                                    c.loop && ((g -= c.lazyLoadEager), e++));
                                    f++ < e;

                                )
                                    this.load(h / 2 + this._core.relative(g)),
                                    h && a.each(this._core.clones(this._core.relative(g)), i),
                                        g++;
                            }
                        }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                a.inArray(d.get(0), this._loaded) > -1 ||
                (e.each(
                    a.proxy(function (c, d) {
                        var e,
                            f = a(d),
                            g =
                                (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                                f.attr("data-src") ||
                                f.attr("data-srcset");
                        this._core.trigger("load", { element: f, url: g }, "lazy"),
                            f.is("img")
                                ? f
                                    .one(
                                        "load.owl.lazy",
                                        a.proxy(function () {
                                            f.css("opacity", 1),
                                                this._core.trigger(
                                                    "loaded",
                                                    { element: f, url: g },
                                                    "lazy"
                                                );
                                        }, this)
                                    )
                                    .attr("src", g)
                                : f.is("source")
                                    ? f
                                        .one(
                                            "load.owl.lazy",
                                            a.proxy(function () {
                                                this._core.trigger(
                                                    "loaded",
                                                    { element: f, url: g },
                                                    "lazy"
                                                );
                                            }, this)
                                        )
                                        .attr("srcset", g)
                                    : ((e = new Image()),
                                        (e.onload = a.proxy(function () {
                                            f.css({
                                                "background-image": 'url("' + g + '")',
                                                opacity: "1",
                                            }),
                                                this._core.trigger(
                                                    "loaded",
                                                    { element: f, url: g },
                                                    "lazy"
                                                );
                                        }, this)),
                                        (e.src = g));
                    }, this)
                ),
                    this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (c) {
            (this._core = c),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
                            a
                        ) {
                            a.namespace && this._core.settings.autoHeight && this.update();
                        },
                        this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this._core.settings.autoHeight &&
                        "position" === a.property.name &&
                        this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace &&
                        this._core.settings.autoHeight &&
                        a.element.closest("." + this._core.settings.itemClass).index() ===
                        this._core.current() &&
                        this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var d = this;
            a(b).on("load", function () {
                d._core.settings.autoHeight && d.update();
            }),
                a(b).resize(function () {
                    d._core.settings.autoHeight &&
                    (null != d._intervalId && clearTimeout(d._intervalId),
                        (d._intervalId = setTimeout(function () {
                            d.update();
                        }, 250)));
                });
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.settings.lazyLoad,
                    e = this._core.$stage.children().toArray().slice(b, c),
                    f = [],
                    g = 0;
                a.each(e, function (b, c) {
                    f.push(a(c).height());
                }),
                    (g = Math.max.apply(null, f)),
                g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                    (this._previousHeight = g),
                    this._core.$stage
                        .parent()
                        .height(g)
                        .addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this._core.register({
                            type: "state",
                            name: "playing",
                            tags: ["interacting"],
                        });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this._core.settings.video &&
                        this.isInFullScreen() &&
                        a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this._core.is("resizing") &&
                        this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        "position" === a.property.name &&
                        this._playing &&
                        this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length &&
                            (c.css("display", "none"), this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                        return a.attr("data-vimeo-id")
                            ? "vimeo"
                            : a.attr("data-vzaar-id")
                                ? "vzaar"
                                : "youtube";
                    })(),
                    d =
                        a.attr("data-vimeo-id") ||
                        a.attr("data-youtube-id") ||
                        a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    )),
                    d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1))
                        throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]),
                    (this._videos[g] = { type: c, id: d, width: e, height: f }),
                    b.attr("data-video", g),
                    this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g =
                        c.width && c.height
                            ? "width:" + c.width + "px;height:" + c.height + "px;"
                            : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (c) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad
                                ? a("<div/>", { class: "owl-video-tn " + j, srcType: c })
                                : a("<div/>", {
                                    class: "owl-video-tn",
                                    style: "opacity:1;background-image:url(" + c + ")",
                                })),
                            b.after(d),
                            b.after(e);
                    };
                if (
                    (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })),
                    this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
                        h.length)
                )
                    return l(h.attr(i)), h.remove(), !1;
                "youtube" === c.type
                    ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                    : "vimeo" === c.type
                        ? a.ajax({
                            type: "GET",
                            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                            jsonp: "callback",
                            dataType: "jsonp",
                            success: function (a) {
                                (f = a[0].thumbnail_large), l(f);
                            },
                        })
                        : "vzaar" === c.type &&
                        a.ajax({
                            type: "GET",
                            url: "//vzaar.com/api/videos/" + c.id + ".json",
                            jsonp: "callback",
                            dataType: "jsonp",
                            success: function (a) {
                                (f = a.framegrab_url), l(f);
                            },
                        });
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    (c = a(
                        '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                    )),
                    c.attr("height", h),
                    c.attr("width", g),
                    "youtube" === f.type
                        ? c.attr(
                            "src",
                            "//www.youtube.com/embed/" +
                            f.id +
                            "?autoplay=1&rel=0&v=" +
                            f.id
                        )
                        : "vimeo" === f.type
                            ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
                            : "vzaar" === f.type &&
                            c.attr(
                                "src",
                                "//view.vzaar.com/" + f.id + "/player?autoplay=true"
                            ),
                    a(c)
                        .wrap('<div class="owl-video-frame" />')
                        .insertAfter(e.find(".owl-video")),
                    (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b =
                    c.fullscreenElement ||
                    c.mozFullScreenElement ||
                    c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        "position" == a.property.name &&
                        ((this.previous = this.core.current()),
                            (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                        a.proxy(function (a) {
                            a.namespace && (this.swapping = "translated" == a.type);
                        }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this.swapping &&
                        (this.core.options.animateOut || this.core.options.animateIn) &&
                        this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (
                    1 === this.core.settings.items &&
                    a.support.animation &&
                    a.support.transition
                ) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                    (g &&
                    ((b =
                        this.core.coordinates(this.previous) -
                        this.core.coordinates(this.next)),
                        d
                            .one(a.support.animation.end, c)
                            .css({ left: b + "px" })
                            .addClass("animated owl-animated-out")
                            .addClass(g)),
                    f &&
                    e
                        .one(a.support.animation.end, c)
                        .addClass("animated owl-animated-in")
                        .addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target)
                    .css({ left: "" })
                    .removeClass("animated owl-animated-out owl-animated-in")
                    .removeClass(this.core.settings.animateIn)
                    .removeClass(this.core.settings.animateOut),
                    this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name
                            ? this._core.settings.autoplay
                                ? this.play()
                                : this.stop()
                            : a.namespace &&
                            "position" === a.property.name &&
                            this._paused &&
                            (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause &&
                        this._core.is("rotating") &&
                        this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause &&
                        this._core.is("rotating") &&
                        this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause &&
                        this._core.is("rotating") &&
                        this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1,
        }),
            (e.prototype._next = function (d) {
                (this._call = b.setTimeout(
                    a.proxy(this._next, this, d),
                    this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                    this.read()
                )),
                this._core.is("interacting") ||
                c.hidden ||
                this._core.next(d || this._core.settings.autoplaySpeed);
            }),
            (e.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (e.prototype.play = function (c, d) {
                var e;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (c = c || this._core.settings.autoplayTimeout),
                    (e = Math.min(this._time % (this._timeout || c), c)),
                    this._paused
                        ? ((this._time = this.read()), (this._paused = !1))
                        : b.clearTimeout(this._call),
                    (this._time += (this.read() % c) - e),
                    (this._timeout = c),
                    (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") &&
                ((this._time = 0),
                    (this._paused = !0),
                    b.clearTimeout(this._call),
                    this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") &&
                !this._paused &&
                ((this._time = this.read()),
                    (this._paused = !0),
                    b.clearTimeout(this._call));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = {
                    next: this._core.next,
                    prev: this._core.prev,
                    to: this._core.to,
                }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace &&
                        this._core.settings.dotsData &&
                        this._templates.push(
                            '<div class="' +
                            this._core.settings.dotClass +
                            '">' +
                            a(b.content)
                                .find("[data-dot]")
                                .addBack("[data-dot]")
                                .attr("data-dot") +
                            "</div>"
                        );
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this._core.settings.dotsData &&
                        this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this._core.settings.dotsData &&
                        this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        !this._initialized &&
                        (this._core.trigger("initialize", null, "navigation"),
                            this.initialize(),
                            this.update(),
                            this.draw(),
                            (this._initialized = !0),
                            this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                        this._initialized &&
                        (this._core.trigger("refresh", null, "navigation"),
                            this.update(),
                            this.draw(),
                            this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: [
                '<span aria-label="Previous">&#x2039;</span>',
                '<span aria-label="Next">&#x203a;</span>',
            ],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (
                    c.navContainer
                        ? a(c.navContainer)
                        : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
                ).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                c.dotsData ||
                (this._templates = [
                    a('<button role="button">')
                        .addClass(c.dotClass)
                        .append(a("<span>"))
                        .prop("outerHTML"),
                ]),
                    (this._controls.$absolute = (
                        c.dotsContainer
                            ? a(c.dotsContainer)
                            : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
                    ).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "button",
                        a.proxy(function (b) {
                            var d = a(b.target).parent().is(this._controls.$absolute)
                                ? a(b.target).index()
                                : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d, e;
                e = this._core.settings;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls)
                    "$relative" === b && e.navContainer
                        ? this._controls[b].html("")
                        : this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if (
                    ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
                    g.dots || "page" == g.slideBy)
                )
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if (
                                (this._pages.push({
                                    start: Math.min(f, a - d),
                                    end: a - d + h - 1,
                                }),
                                Math.min(f, a - d) === f)
                            )
                                break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                c.nav &&
                (this._controls.$previous.toggleClass(
                    "disabled",
                    !f && e <= this._core.minimum(!0)
                ),
                    this._controls.$next.toggleClass(
                        "disabled",
                        !f && e >= this._core.maximum(!0)
                    )),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                c.dots &&
                ((b =
                    this._pages.length - this._controls.$absolute.children().length),
                    c.dotsData && 0 !== b
                        ? this._controls.$absolute.html(this._templates.join(""))
                        : b > 0
                            ? this._controls.$absolute.append(
                                new Array(b + 1).join(this._templates[0])
                            )
                            : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                    this._controls.$absolute.find(".active").removeClass("active"),
                    this._controls.$absolute
                        .children()
                        .eq(a.inArray(this.current(), this._pages))
                        .addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = {
                    index: a.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size:
                        c &&
                        (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
                };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)),
                            (d = this._pages.length),
                            b ? ++c : --c,
                            (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())),
                            (d = this._core.items().length),
                            b ? (c += e.slideBy) : (c -= e.slideBy)),
                        c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length
                    ? ((e = this._pages.length),
                        a.proxy(this._overrides.to, this._core)(
                            this._pages[((b % e) + e) % e].start,
                            c
                        ))
                    : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace &&
                        "URLHash" === this._core.settings.startPosition &&
                        a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content)
                                .find("[data-hash]")
                                .addBack("[data-hash]")
                                .attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(
                                    this._core.relative(this._core.current())
                                ),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d &&
                        f !== this._core.current() &&
                        this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this))
                    "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                    if (g[b] !== d) return (e = !c || b), !1;
                }),
                    e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend",
                    },
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend",
                    },
                },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() &&
        ((a.support.transition = new String(f("transition"))),
            (a.support.transition.end = i.transition.end[a.support.transition])),
        j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
            (a.support.animation.end = i.animation.end[a.support.animation])),
        j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
            (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);

/*-------------------------
  # Slick
-------------------------*/
!(function (i) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], i)
        : "undefined" != typeof exports
            ? (module.exports = i(require("jquery")))
            : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
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
                zIndex: 1e3,
            }),
                (n.initials = {
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
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                        (n.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                    ((n.hidden = "webkitHidden"),
                        (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function (e, t, o) {
                var s = this;
                if ("boolean" == typeof t) (o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === s.$slides.length
                            ? i(e).appendTo(s.$slideTrack)
                            : o
                                ? i(e).insertBefore(s.$slides.eq(t))
                                : i(e).insertAfter(s.$slides.eq(t))
                        : !0 === o
                            ? i(e).prependTo(s.$slideTrack)
                            : i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (e, t) {
                        i(t).attr("data-slick-index", e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
            !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                            { left: e },
                            s.options.speed,
                            s.options.easing,
                            t
                        )
                        : s.$slideTrack.animate(
                            { top: e },
                            s.options.speed,
                            s.options.easing,
                            t
                        )
                    : !1 === s.cssTransitions
                        ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                            i({ animStart: s.currentLeft }).animate(
                                { animStart: e },
                                {
                                    duration: s.options.speed,
                                    easing: s.options.easing,
                                    step: function (i) {
                                        (i = Math.ceil(i)),
                                            !1 === s.options.vertical
                                                ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                                                    s.$slideTrack.css(o))
                                                : ((o[s.animType] = "translate(0px," + i + "px)"),
                                                    s.$slideTrack.css(o));
                                    },
                                    complete: function () {
                                        t && t.call();
                                    },
                                }
                            ))
                        : (s.applyTransition(),
                            (e = Math.ceil(e)),
                            !1 === s.options.vertical
                                ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
                                : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
                            s.$slideTrack.css(o),
                        t &&
                        setTimeout(function () {
                            s.disableTransition(), t.call();
                        }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
            "object" == typeof t &&
            t.each(function () {
                var t = i(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0);
            });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                    e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
                : (t[e.transitionType] =
                    "opacity " + e.options.speed + "ms " + e.options.cssEase),
                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
            i.slideCount > i.options.slidesToShow &&
            (i.autoPlayTimer = setInterval(
                i.autoPlayIterator,
                i.options.autoplaySpeed
            ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
            i.interrupted ||
            i.focussed ||
            (!1 === i.options.infinite &&
            (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
                ? (i.direction = 0)
                : 0 === i.direction &&
                ((e = i.currentSlide - i.options.slidesToScroll),
                i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
            ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                        .removeClass("slick-hidden")
                        .removeAttr("aria-hidden tabindex"),
                        e.$nextArrow
                            .removeClass("slick-hidden")
                            .removeAttr("aria-hidden tabindex"),
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.prependTo(e.options.appendArrows),
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.appendTo(e.options.appendArrows),
                    !0 !== e.options.infinite &&
                    e.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"))
                    : e.$prevArrow
                        .add(e.$nextArrow)
                        .addClass("slick-hidden")
                        .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass("slick-dotted"),
                        t = i("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                e.$slideTrack.css("opacity", 0),
            (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
            !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                    (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
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
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block",
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo
                    ? (n = a)
                    : "slider" === r.respondTo
                        ? (n = d)
                        : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                r.options.responsive.length &&
                null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                    (!1 === r.originalSettings.mobileFirst
                        ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                        : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                        ((r.activeBreakpoint = s),
                            "unslick" === r.breakpointSettings[s]
                                ? r.unslick(s)
                                : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e && (r.currentSlide = r.options.initialSlide),
                                    r.refresh(e)),
                            (l = s))
                        : ((r.activeBreakpoint = s),
                            "unslick" === r.breakpointSettings[s]
                                ? r.unslick(s)
                                : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e && (r.currentSlide = r.options.initialSlide),
                                    r.refresh(e)),
                            (l = s))
                    : null !== r.activeBreakpoint &&
                    ((r.activeBreakpoint = null),
                        (r.options = r.originalSettings),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e),
                        (l = s)),
                e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                    (n = r.slideCount % r.options.slidesToScroll != 0),
                    (o = n
                        ? 0
                        : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
                    e.data.message)
                ) {
                case "previous":
                    (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
                    r.slideCount > r.options.slidesToShow &&
                    r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                    r.slideCount > r.options.slidesToShow &&
                    r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
            null !== e.$dots &&
            (i("li", e.$dots)
                .off("click.slick", e.changeSlide)
                .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
            !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
            !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
            !0 === e.options.accessibility &&
            e.$list.off("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect &&
            i(e.$slideTrack).children().off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
            ((i = e.$slides.children().children()).removeAttr("style"),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
            (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
            t.$dots && t.$dots.remove(),
            t.$prevArrow &&
            t.$prevArrow.length &&
            (t.$prevArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
            t.$nextArrow &&
            t.$nextArrow.length &&
            (t.$nextArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
            t.$slides &&
            (t.$slides
                .removeClass(
                    "slick-slide slick-active slick-center slick-visible slick-current"
                )
                .removeAttr("aria-hidden")
                .removeAttr("data-slick-index")
                .each(function () {
                    i(this).attr("style", i(this).data("originalStyling"));
                }),
                t.$slideTrack.children(this.options.slide).detach(),
                t.$slideTrack.detach(),
                t.$list.detach(),
                t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
            e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""),
                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                    t.$slides
                        .eq(i)
                        .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
                : (t.applyTransition(i),
                    t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                e &&
                setTimeout(function () {
                    t.disableTransition(i), e.call();
                }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                    .eq(i)
                    .animate(
                        { opacity: 0, zIndex: e.options.zIndex - 2 },
                        e.options.speed,
                        e.options.easing
                    )
                : (e.applyTransition(i),
                    e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function (i) {
                var e = this;
                null !== i &&
                ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                    e.reinit());
            }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                        ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function () {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <= i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                    (t = n.$slides.first().outerHeight(!0)),
                    !0 === n.options.infinite
                        ? (n.slideCount > n.options.slidesToShow &&
                        ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                            (s = -1),
                        !0 === n.options.vertical &&
                        !0 === n.options.centerMode &&
                        (2 === n.options.slidesToShow
                            ? (s = -1.5)
                            : 1 === n.options.slidesToShow && (s = -2)),
                            (r = t * n.options.slidesToShow * s)),
                        n.slideCount % n.options.slidesToScroll != 0 &&
                        i + n.options.slidesToScroll > n.slideCount &&
                        n.slideCount > n.options.slidesToShow &&
                        (i > n.slideCount
                            ? ((n.slideOffset =
                                (n.options.slidesToShow - (i - n.slideCount)) *
                                n.slideWidth *
                                -1),
                                (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                            : ((n.slideOffset =
                                (n.slideCount % n.options.slidesToScroll) *
                                n.slideWidth *
                                -1),
                                (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
                        : i + n.options.slidesToShow > n.slideCount &&
                        ((n.slideOffset =
                            (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
                            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                ((n.slideOffset = 0), (r = 0)),
                    !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
                        ? (n.slideOffset =
                            (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
                            (n.slideWidth * n.slideCount) / 2)
                        : !0 === n.options.centerMode && !0 === n.options.infinite
                            ? (n.slideOffset +=
                                n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
                                n.slideWidth)
                            : !0 === n.options.centerMode &&
                            ((n.slideOffset = 0),
                                (n.slideOffset +=
                                    n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
                    (e =
                        !1 === n.options.vertical
                            ? i * n.slideWidth * -1 + n.slideOffset
                            : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                ((o =
                    n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
                        ? n.$slideTrack.children(".slick-slide").eq(i)
                        : n.$slideTrack
                            .children(".slick-slide")
                            .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                                : 0
                            : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                !0 === n.options.centerMode &&
                ((o =
                    n.slideCount <= n.options.slidesToShow ||
                    !1 === n.options.infinite
                        ? n.$slideTrack.children(".slick-slide").eq(i)
                        : n.$slideTrack
                            .children(".slick-slide")
                            .eq(i + n.options.slidesToShow + 1)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                                : 0
                            : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                    (e += (n.$list.width() - o.outerWidth()) / 2))),
                    e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function (i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                        (o = -1 * e.options.slidesToScroll),
                        (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                    !0 === o.options.swipeToSlide
                        ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                                return (e = n), !1;
                        }),
                        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
                        : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function (i, e) {
                this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
            }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
            (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
            e && t.$slider.trigger("init", [t]),
            !0 === t.options.accessibility && t.initADA(),
            t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
            null !== e.$dots &&
            (e.$slides
                .not(e.$slideTrack.find(".slick-cloned"))
                .each(function (t) {
                    var s = o.indexOf(t);
                    i(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + e.instanceUid + t,
                        tabindex: -1,
                    }),
                    -1 !== s &&
                    i(this).attr({
                        "aria-describedby":
                            "slick-slide-control" + e.instanceUid + s,
                    });
                }),
                e.$dots
                    .attr("role", "tablist")
                    .find("li")
                    .each(function (s) {
                        var n = o[s];
                        i(this).attr({ role: "presentation" }),
                            i(this)
                                .find("button")
                                .first()
                                .attr({
                                    role: "tab",
                                    id: "slick-slide-control" + e.instanceUid + s,
                                    "aria-controls": "slick-slide" + e.instanceUid + n,
                                    "aria-label": s + 1 + " of " + t,
                                    "aria-selected": null,
                                    tabindex: "-1",
                                });
                    })
                    .eq(e.currentSlide)
                    .find("button")
                    .attr({ "aria-selected": "true", tabindex: "0" })
                    .end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
            i.slideCount > i.options.slidesToShow &&
            (i.$prevArrow
                .off("click.slick")
                .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide),
            !0 === i.options.accessibility &&
            (i.$prevArrow.on("keydown.slick", i.keyHandler),
                i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
            (i("li", e.$dots).on(
                "click.slick",
                { message: "index" },
                e.changeSlide
            ),
            !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
            !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            i("li", e.$dots)
                .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
            (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
            !0 === e.options.accessibility &&
            e.$list.on("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect &&
            i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
            i.slideCount > i.options.slidesToShow &&
            (i.$prevArrow.show(), i.$nextArrow.show()),
            !0 === i.options.dots &&
            i.slideCount > i.options.slidesToShow &&
            i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
            (37 === i.keyCode && !0 === e.options.accessibility
                ? e.changeSlide({
                    data: { message: !0 === e.options.rtl ? "next" : "previous" },
                })
                : 39 === i.keyCode &&
                !0 === e.options.accessibility &&
                e.changeSlide({
                    data: { message: !0 === e.options.rtl ? "previous" : "next" },
                }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                                        "slick-loading"
                                    );
                                }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                n.$slider.trigger("lazyLoadError", [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                            (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                            n.options.slidesToShow +
                            2)
                        : ((o = Math.max(
                            0,
                            n.currentSlide - (n.options.slidesToShow / 2 + 1)
                        )),
                            (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
                    : ((o = n.options.infinite
                        ? n.options.slidesToShow + n.currentSlide
                        : n.currentSlide),
                        (s = Math.ceil(o + n.options.slidesToShow)),
                    !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
                    (t = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
            )
                for (
                    var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                        ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
                        : 0 === n.currentSlide &&
                        e(
                            n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
                        );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
            "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function () {
                this.changeSlide({ data: { message: "next" } });
            }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function () {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
            (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
            t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
            t.options.autoplay && t.autoPlay(),
            !0 === t.options.accessibility &&
            (t.initADA(),
            t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                    (o = t.attr("data-lazy")),
                    (s = t.attr("data-srcset")),
                    (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                    ((r = document.createElement("img")).onload = function () {
                        s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                            t
                                .attr("src", o)
                                .removeAttr("data-lazy data-srcset data-sizes")
                                .removeClass("slick-loading"),
                        !0 === l.options.adaptiveHeight && l.setPosition(),
                            l.$slider.trigger("lazyLoaded", [l, t, o]),
                            l.progressiveLazyLoad();
                    }),
                    (r.onerror = function () {
                        e < 3
                            ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                            : (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                l.$slider.trigger("lazyLoadError", [l, t, o]),
                                l.progressiveLazyLoad());
                    }),
                    (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
            !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
            s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
            e || s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                            s.breakpoints[o] === t &&
                            s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
            e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
            e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
            !0 === e.options.focusOnSelect &&
            i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
            (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                    e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function (i, e, t) {
                var o = this;
                if (
                    ((i =
                        "boolean" == typeof i
                            ? !0 === (e = i)
                                ? 0
                                : o.slideCount - 1
                            : !0 === e
                                ? --i
                                : i),
                    o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(),
                    !0 === t
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                        !1 === o.cssTransitions
                            ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                                o.$slideTrack.css(s))
                            : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                                o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                    i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                ),
                !0 === i.options.centerMode &&
                i.$list.css({ padding: i.options.centerPadding + " 0px" })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
                        i.$slideTrack.width(
                            Math.ceil(
                                i.slideWidth * i.$slideTrack.children(".slick-slide").length
                            )
                        ))
                    : !0 === i.options.variableWidth
                        ? i.$slideTrack.width(5e3 * i.slideCount)
                        : ((i.slideWidth = Math.ceil(i.listWidth)),
                            i.$slideTrack.height(
                                Math.ceil(
                                    i.$slides.first().outerHeight(!0) *
                                    i.$slideTrack.children(".slick-slide").length
                                )
                            ));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
            i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                            position: "relative",
                            right: e,
                            top: 0,
                            zIndex: t.options.zIndex - 2,
                            opacity: 0,
                        })
                        : i(s).css({
                            position: "relative",
                            left: e,
                            top: 0,
                            zIndex: t.options.zIndex - 2,
                            opacity: 0,
                        });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function () {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ("object" === i.type(arguments[0])
                        ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
                        : "string" === i.type(arguments[0]) &&
                        ((o = arguments[0]),
                            (s = arguments[1]),
                            (l = arguments[2]),
                            "responsive" === arguments[0] && "array" === i.type(arguments[1])
                                ? (n = "responsive")
                                : void 0 !== arguments[1] && (n = "single")),
                    "single" === n)
                )
                    r.options[o] = s;
                else if ("multiple" === n)
                    i.each(o, function (i, e) {
                        r.options[i] = e;
                    });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; )
                                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                                r.options.responsive.splice(e, 1),
                                    e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp
                    ? i.$slider.addClass("slick-vertical")
                    : i.$slider.removeClass("slick-vertical"),
            (void 0 === e.WebkitTransition &&
                void 0 === e.MozTransition &&
                void 0 === e.msTransition) ||
            (!0 === i.options.useCSS && (i.cssTransitions = !0)),
            i.options.fade &&
            ("number" == typeof i.options.zIndex
                ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                : (i.options.zIndex = i.defaults.zIndex)),
            void 0 !== e.OTransform &&
            ((i.animType = "OTransform"),
                (i.transformType = "-o-transform"),
                (i.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
            void 0 !== e.MozTransform &&
            ((i.animType = "MozTransform"),
                (i.transformType = "-moz-transform"),
                (i.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
            void 0 !== e.webkitTransform &&
            ((i.animType = "webkitTransform"),
                (i.transformType = "-webkit-transform"),
                (i.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
            void 0 !== e.msTransform &&
            ((i.animType = "msTransform"),
                (i.transformType = "-ms-transform"),
                (i.transitionType = "msTransition"),
            void 0 === e.msTransform && (i.animType = !1)),
            void 0 !== e.transform &&
            !1 !== i.animType &&
            ((i.animType = "transform"),
                (i.transformType = "transform"),
                (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform && null !== i.animType && !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                    n.$slides.eq(i).addClass("slick-current"),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                !0 === n.options.infinite &&
                (i >= e && i <= n.slideCount - 1 - e
                    ? n.$slides
                        .slice(i - e + r, i + e + 1)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                    : ((o = n.options.slidesToShow + i),
                        t
                            .slice(o - e + 1 + r, o + e + 2)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")),
                    0 === i
                        ? t
                            .eq(t.length - 1 - n.options.slidesToShow)
                            .addClass("slick-center")
                        : i === n.slideCount - 1 &&
                        t.eq(n.options.slidesToShow).addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                        .slice(i, i + n.options.slidesToShow)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                        ? t.addClass("slick-active").attr("aria-hidden", "false")
                        : ((s = n.slideCount % n.options.slidesToShow),
                            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
                            n.options.slidesToShow == n.options.slidesToScroll &&
                            n.slideCount - i < n.options.slidesToShow
                                ? t
                                    .slice(o - (n.options.slidesToShow - s), o + s)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                                : t
                                    .slice(o, o + n.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
            n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                !1 === s.options.fade &&
                ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide")
                    ? i(e.target)
                    : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                    !(
                        (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                        (!0 === a.options.fade && a.currentSlide === i)
                    ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                        (o = i),
                        (d = a.getLeft(o)),
                        (r = a.getLeft(a.currentSlide)),
                        (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                    !1 === a.options.centerMode &&
                    (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                    ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                a.postSlide(o);
                            })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                    ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                a.postSlide(o);
                            })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                            (s =
                                o < 0
                                    ? a.slideCount % a.options.slidesToScroll != 0
                                        ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                                        : a.slideCount + o
                                    : o >= a.slideCount
                                        ? a.slideCount % a.options.slidesToScroll != 0
                                            ? 0
                                            : o - a.slideCount
                                        : o),
                            (a.animating = !0),
                            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                            (n = a.currentSlide),
                            (a.currentSlide = s),
                            a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                        (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                        l.options.slidesToShow &&
                        l.setSlideClasses(a.currentSlide),
                            a.updateDots(),
                            a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                    a.fadeSlide(s, function () {
                                        a.postSlide(s);
                                    }))
                                : a.postSlide(s),
                                void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                            a.postSlide(s);
                        })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
            i.slideCount > i.options.slidesToShow &&
            (i.$prevArrow.hide(), i.$nextArrow.hide()),
            !0 === i.options.dots &&
            i.slideCount > i.options.slidesToShow &&
            i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                    (e = s.touchObject.startY - s.touchObject.curY),
                    (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                    o <= 45 && o >= 0
                        ? !1 === s.options.rtl
                            ? "left"
                            : "right"
                        : o <= 360 && o >= 315
                            ? !1 === s.options.rtl
                                ? "left"
                                : "right"
                            : o >= 135 && o <= 225
                                ? !1 === s.options.rtl
                                    ? "right"
                                    : "left"
                                : !0 === s.options.verticalSwiping
                                    ? o >= 35 && o <= 135
                                        ? "down"
                                        : "up"
                                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                    (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(o.currentSlide + o.getSlideCount())
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(o.currentSlide - o.getSlideCount())
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                "vertical" != t &&
                (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ("ontouchend" in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                        (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                    (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                        i.data.action)
                    ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
                    )),
                    (r = Math.round(
                        Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                        (l.touchObject.swipeLength = r),
                            (t = l.swipeDirection()),
                        void 0 !== i.originalEvent &&
                        l.touchObject.swipeLength > 4 &&
                        ((l.swiping = !0), i.preventDefault()),
                            (s =
                                (!1 === l.options.rtl ? 1 : -1) *
                                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
                        !0 === l.options.verticalSwiping &&
                        (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                            (o = l.touchObject.swipeLength),
                            (l.touchObject.edgeHit = !1),
                        !1 === l.options.infinite &&
                        ((0 === l.currentSlide && "right" === t) ||
                            (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                        ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                            (l.touchObject.edgeHit = !0)),
                            !1 === l.options.vertical
                                ? (l.swipeLeft = e + o * s)
                                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
                        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
                        !0 !== l.options.fade &&
                        !1 !== l.options.touchMove &&
                        (!0 === l.animating
                            ? ((l.swipeLeft = null), !1)
                            : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
            void 0 !== i.originalEvent.touches &&
            (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function () {
                var i = this;
                null !== i.$slidesCache &&
                (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit());
            }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
            e.$dots && e.$dots.remove(),
            e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
            e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
                e.$slides
                    .removeClass("slick-slide slick-active slick-visible slick-current")
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
            !0 === i.options.arrows &&
            i.slideCount > i.options.slidesToShow &&
            !i.options.infinite &&
            (i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
                i.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                0 === i.currentSlide
                    ? (i.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                        i.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                    : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
                    !1 === i.options.centerMode
                        ? (i.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                            i.$prevArrow
                                .removeClass("slick-disabled")
                                .attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - 1 &&
                        !0 === i.options.centerMode &&
                        (i.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                            i.$prevArrow
                                .removeClass("slick-disabled")
                                .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
            (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
            (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
    var a,
        b,
        c,
        d,
        e,
        f = function (a, b) {
            return function () {
                return a.apply(b, arguments);
            };
        },
        g =
            [].indexOf ||
            function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1;
            };
    (b = (function () {
        function a() {}
        return (
            (a.prototype.extend = function (a, b) {
                var c, d;
                for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
                return a;
            }),
                (a.prototype.isMobile = function (a) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        a
                    );
                }),
                (a.prototype.createEvent = function (a, b, c, d) {
                    var e;
                    return (
                        null == b && (b = !1),
                        null == c && (c = !1),
                        null == d && (d = null),
                            null != document.createEvent
                                ? ((e = document.createEvent("CustomEvent")),
                                    e.initCustomEvent(a, b, c, d))
                                : null != document.createEventObject
                                    ? ((e = document.createEventObject()), (e.eventType = a))
                                    : (e.eventName = a),
                            e
                    );
                }),
                (a.prototype.emitEvent = function (a, b) {
                    return null != a.dispatchEvent
                        ? a.dispatchEvent(b)
                        : b in (null != a)
                            ? a[b]()
                            : "on" + b in (null != a)
                                ? a["on" + b]()
                                : void 0;
                }),
                (a.prototype.addEvent = function (a, b, c) {
                    return null != a.addEventListener
                        ? a.addEventListener(b, c, !1)
                        : null != a.attachEvent
                            ? a.attachEvent("on" + b, c)
                            : (a[b] = c);
                }),
                (a.prototype.removeEvent = function (a, b, c) {
                    return null != a.removeEventListener
                        ? a.removeEventListener(b, c, !1)
                        : null != a.detachEvent
                            ? a.detachEvent("on" + b, c)
                            : delete a[b];
                }),
                (a.prototype.innerHeight = function () {
                    return "innerHeight" in window
                        ? window.innerHeight
                        : document.documentElement.clientHeight;
                }),
                a
        );
    })()),
        (c =
            this.WeakMap ||
            this.MozWeakMap ||
            (c = (function () {
                function a() {
                    (this.keys = []), (this.values = []);
                }
                return (
                    (a.prototype.get = function (a) {
                        var b, c, d, e, f;
                        for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                            if (((c = f[b]), c === a)) return this.values[b];
                    }),
                        (a.prototype.set = function (a, b) {
                            var c, d, e, f, g;
                            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                                if (((d = g[c]), d === a)) return void (this.values[c] = b);
                            return this.keys.push(a), this.values.push(b);
                        }),
                        a
                );
            })())),
        (a =
            this.MutationObserver ||
            this.WebkitMutationObserver ||
            this.MozMutationObserver ||
            (a = (function () {
                function a() {
                    "undefined" != typeof console &&
                    null !== console &&
                    console.warn("MutationObserver is not supported by your browser."),
                    "undefined" != typeof console &&
                    null !== console &&
                    console.warn(
                        "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                    );
                }
                return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
            })())),
        (d =
            this.getComputedStyle ||
            function (a, b) {
                return (
                    (this.getPropertyValue = function (b) {
                        var c;
                        return (
                            "float" === b && (b = "styleFloat"),
                            e.test(b) &&
                            b.replace(e, function (a, b) {
                                return b.toUpperCase();
                            }),
                            (null != (c = a.currentStyle) ? c[b] : void 0) || null
                        );
                    }),
                        this
                );
            }),
        (e = /(\-([a-z]){1})/g),
        (this.WOW = (function () {
            function e(a) {
                null == a && (a = {}),
                    (this.scrollCallback = f(this.scrollCallback, this)),
                    (this.scrollHandler = f(this.scrollHandler, this)),
                    (this.resetAnimation = f(this.resetAnimation, this)),
                    (this.start = f(this.start, this)),
                    (this.scrolled = !0),
                    (this.config = this.util().extend(a, this.defaults)),
                null != a.scrollContainer &&
                (this.config.scrollContainer = document.querySelector(
                    a.scrollContainer
                )),
                    (this.animationNameCache = new c()),
                    (this.wowEvent = this.util().createEvent(this.config.boxClass));
            }
            return (
                (e.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                }),
                    (e.prototype.init = function () {
                        var a;
                        return (
                            (this.element = window.document.documentElement),
                                "interactive" === (a = document.readyState) || "complete" === a
                                    ? this.start()
                                    : this.util().addEvent(document, "DOMContentLoaded", this.start),
                                (this.finished = [])
                        );
                    }),
                    (e.prototype.start = function () {
                        var b, c, d, e;
                        if (
                            ((this.stopped = !1),
                                (this.boxes = function () {
                                    var a, c, d, e;
                                    for (
                                        d = this.element.querySelectorAll("." + this.config.boxClass),
                                            e = [],
                                            a = 0,
                                            c = d.length;
                                        c > a;
                                        a++
                                    )
                                        (b = d[a]), e.push(b);
                                    return e;
                                }.call(this)),
                                (this.all = function () {
                                    var a, c, d, e;
                                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                                        (b = d[a]), e.push(b);
                                    return e;
                                }.call(this)),
                                this.boxes.length)
                        )
                            if (this.disabled()) this.resetStyle();
                            else
                                for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                                    (b = e[c]), this.applyStyle(b, !0);
                        return (
                            this.disabled() ||
                            (this.util().addEvent(
                                this.config.scrollContainer || window,
                                "scroll",
                                this.scrollHandler
                            ),
                                this.util().addEvent(window, "resize", this.scrollHandler),
                                (this.interval = setInterval(this.scrollCallback, 50))),
                                this.config.live
                                    ? new a(
                                        (function (a) {
                                            return function (b) {
                                                var c, d, e, f, g;
                                                for (g = [], c = 0, d = b.length; d > c; c++)
                                                    (f = b[c]),
                                                        g.push(
                                                            function () {
                                                                var a, b, c, d;
                                                                for (
                                                                    c = f.addedNodes || [],
                                                                        d = [],
                                                                        a = 0,
                                                                        b = c.length;
                                                                    b > a;
                                                                    a++
                                                                )
                                                                    (e = c[a]), d.push(this.doSync(e));
                                                                return d;
                                                            }.call(a)
                                                        );
                                                return g;
                                            };
                                        })(this)
                                    ).observe(document.body, { childList: !0, subtree: !0 })
                                    : void 0
                        );
                    }),
                    (e.prototype.stop = function () {
                        return (
                            (this.stopped = !0),
                                this.util().removeEvent(
                                    this.config.scrollContainer || window,
                                    "scroll",
                                    this.scrollHandler
                                ),
                                this.util().removeEvent(window, "resize", this.scrollHandler),
                                null != this.interval ? clearInterval(this.interval) : void 0
                        );
                    }),
                    (e.prototype.sync = function (b) {
                        return a.notSupported ? this.doSync(this.element) : void 0;
                    }),
                    (e.prototype.doSync = function (a) {
                        var b, c, d, e, f;
                        if ((null == a && (a = this.element), 1 === a.nodeType)) {
                            for (
                                a = a.parentNode || a,
                                    e = a.querySelectorAll("." + this.config.boxClass),
                                    f = [],
                                    c = 0,
                                    d = e.length;
                                d > c;
                                c++
                            )
                                (b = e[c]),
                                    g.call(this.all, b) < 0
                                        ? (this.boxes.push(b),
                                            this.all.push(b),
                                            this.stopped || this.disabled()
                                                ? this.resetStyle()
                                                : this.applyStyle(b, !0),
                                            f.push((this.scrolled = !0)))
                                        : f.push(void 0);
                            return f;
                        }
                    }),
                    (e.prototype.show = function (a) {
                        return (
                            this.applyStyle(a),
                                (a.className = a.className + " " + this.config.animateClass),
                            null != this.config.callback && this.config.callback(a),
                                this.util().emitEvent(a, this.wowEvent),
                                this.util().addEvent(a, "animationend", this.resetAnimation),
                                this.util().addEvent(a, "oanimationend", this.resetAnimation),
                                this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
                                this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
                                a
                        );
                    }),
                    (e.prototype.applyStyle = function (a, b) {
                        var c, d, e;
                        return (
                            (d = a.getAttribute("data-wow-duration")),
                                (c = a.getAttribute("data-wow-delay")),
                                (e = a.getAttribute("data-wow-iteration")),
                                this.animate(
                                    (function (f) {
                                        return function () {
                                            return f.customStyle(a, b, d, c, e);
                                        };
                                    })(this)
                                )
                        );
                    }),
                    (e.prototype.animate = (function () {
                        return "requestAnimationFrame" in window
                            ? function (a) {
                                return window.requestAnimationFrame(a);
                            }
                            : function (a) {
                                return a();
                            };
                    })()),
                    (e.prototype.resetStyle = function () {
                        var a, b, c, d, e;
                        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                            (a = d[b]), e.push((a.style.visibility = "visible"));
                        return e;
                    }),
                    (e.prototype.resetAnimation = function (a) {
                        var b;
                        return a.type.toLowerCase().indexOf("animationend") >= 0
                            ? ((b = a.target || a.srcElement),
                                (b.className = b.className
                                    .replace(this.config.animateClass, "")
                                    .trim()))
                            : void 0;
                    }),
                    (e.prototype.customStyle = function (a, b, c, d, e) {
                        return (
                            b && this.cacheAnimationName(a),
                                (a.style.visibility = b ? "hidden" : "visible"),
                            c && this.vendorSet(a.style, { animationDuration: c }),
                            d && this.vendorSet(a.style, { animationDelay: d }),
                            e && this.vendorSet(a.style, { animationIterationCount: e }),
                                this.vendorSet(a.style, {
                                    animationName: b ? "none" : this.cachedAnimationName(a),
                                }),
                                a
                        );
                    }),
                    (e.prototype.vendors = ["moz", "webkit"]),
                    (e.prototype.vendorSet = function (a, b) {
                        var c, d, e, f;
                        d = [];
                        for (c in b)
                            (e = b[c]),
                                (a["" + c] = e),
                                d.push(
                                    function () {
                                        var b, d, g, h;
                                        for (
                                            g = this.vendors, h = [], b = 0, d = g.length;
                                            d > b;
                                            b++
                                        )
                                            (f = g[b]),
                                                h.push(
                                                    (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                                                        e)
                                                );
                                        return h;
                                    }.call(this)
                                );
                        return d;
                    }),
                    (e.prototype.vendorCSS = function (a, b) {
                        var c, e, f, g, h, i;
                        for (
                            h = d(a),
                                g = h.getPropertyCSSValue(b),
                                f = this.vendors,
                                c = 0,
                                e = f.length;
                            e > c;
                            c++
                        )
                            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
                        return g;
                    }),
                    (e.prototype.animationName = function (a) {
                        var b;
                        try {
                            b = this.vendorCSS(a, "animation-name").cssText;
                        } catch (c) {
                            b = d(a).getPropertyValue("animation-name");
                        }
                        return "none" === b ? "" : b;
                    }),
                    (e.prototype.cacheAnimationName = function (a) {
                        return this.animationNameCache.set(a, this.animationName(a));
                    }),
                    (e.prototype.cachedAnimationName = function (a) {
                        return this.animationNameCache.get(a);
                    }),
                    (e.prototype.scrollHandler = function () {
                        return (this.scrolled = !0);
                    }),
                    (e.prototype.scrollCallback = function () {
                        var a;
                        return !this.scrolled ||
                        ((this.scrolled = !1),
                            (this.boxes = function () {
                                var b, c, d, e;
                                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                                    (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
                                return e;
                            }.call(this)),
                        this.boxes.length || this.config.live)
                            ? void 0
                            : this.stop();
                    }),
                    (e.prototype.offsetTop = function (a) {
                        for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
                        for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
                        return b;
                    }),
                    (e.prototype.isVisible = function (a) {
                        var b, c, d, e, f;
                        return (
                            (c = a.getAttribute("data-wow-offset") || this.config.offset),
                                (f =
                                    (this.config.scrollContainer &&
                                        this.config.scrollContainer.scrollTop) ||
                                    window.pageYOffset),
                                (e =
                                    f +
                                    Math.min(this.element.clientHeight, this.util().innerHeight()) -
                                    c),
                                (d = this.offsetTop(a)),
                                (b = d + a.clientHeight),
                            e >= d && b >= f
                        );
                    }),
                    (e.prototype.util = function () {
                        return null != this._util ? this._util : (this._util = new b());
                    }),
                    (e.prototype.disabled = function () {
                        return (
                            !this.config.mobile && this.util().isMobile(navigator.userAgent)
                        );
                    }),
                    e
            );
        })());
}).call(this);

//*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
!(function (a) {
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : "object" == typeof module && module.exports
            ? (module.exports = a(require("jquery")))
            : a(jQuery);
})(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length)
                return void (
                    b &&
                    b.debug &&
                    window.console &&
                    console.warn("Nothing selected, can't validate, returning nothing.")
                );
            var c = a.data(this[0], "validator");
            return c
                ? c
                : (this.attr("novalidate", "novalidate"),
                    (c = new a.validator(b, this[0])),
                    a.data(this[0], "validator", c),
                c.settings.onsubmit &&
                (this.on("click.validate", ":submit", function (b) {
                    c.settings.submitHandler && (c.submitButton = b.target),
                    a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                    void 0 !== a(this).attr("formnovalidate") &&
                    (c.cancelSubmit = !0);
                }),
                    this.on("submit.validate", function (b) {
                        function d() {
                            var d, e;
                            return (
                                !c.settings.submitHandler ||
                                (c.submitButton &&
                                (d = a("<input type='hidden'/>")
                                    .attr("name", c.submitButton.name)
                                    .val(a(c.submitButton).val())
                                    .appendTo(c.currentForm)),
                                    (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                                c.submitButton && d.remove(),
                                void 0 !== e && e)
                            );
                        }
                        return (
                            c.settings.debug && b.preventDefault(),
                                c.cancelSubmit
                                    ? ((c.cancelSubmit = !1), d())
                                    : c.form()
                                        ? c.pendingRequest
                                            ? ((c.formSubmitted = !0), !1)
                                            : d()
                                        : (c.focusInvalid(), !1)
                        );
                    })),
                    c);
        },
        valid: function () {
            var b, c, d;
            return (
                a(this[0]).is("form")
                    ? (b = this.validate().form())
                    : ((d = []),
                        (b = !0),
                        (c = a(this[0].form).validate()),
                        this.each(function () {
                            (b = c.element(this) && b), b || (d = d.concat(c.errorList));
                        }),
                        (c.errorList = d)),
                    b
            );
        },
        rules: function (b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j = this[0];
            if (null != j && null != j.form) {
                if (b)
                    switch (
                        ((d = a.data(j.form, "validator").settings),
                            (e = d.rules),
                            (f = a.validator.staticRules(j)),
                            b)
                        ) {
                        case "add":
                            a.extend(f, a.validator.normalizeRule(c)),
                                delete f.messages,
                                (e[j.name] = f),
                            c.messages &&
                            (d.messages[j.name] = a.extend(
                                d.messages[j.name],
                                c.messages
                            ));
                            break;
                        case "remove":
                            return c
                                ? ((i = {}),
                                    a.each(c.split(/\s/), function (b, c) {
                                        (i[c] = f[c]),
                                            delete f[c],
                                        "required" === c && a(j).removeAttr("aria-required");
                                    }),
                                    i)
                                : (delete e[j.name], f);
                    }
                return (
                    (g = a.validator.normalizeRules(
                        a.extend(
                            {},
                            a.validator.classRules(j),
                            a.validator.attributeRules(j),
                            a.validator.dataRules(j),
                            a.validator.staticRules(j)
                        ),
                        j
                    )),
                    g.required &&
                    ((h = g.required),
                        delete g.required,
                        (g = a.extend({ required: h }, g)),
                        a(j).attr("aria-required", "true")),
                    g.remote &&
                    ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
                        g
                );
            }
        },
    }),
        a.extend(a.expr.pseudos || a.expr[":"], {
            blank: function (b) {
                return !a.trim("" + a(b).val());
            },
            filled: function (b) {
                var c = a(b).val();
                return null !== c && !!a.trim("" + c);
            },
            unchecked: function (b) {
                return !a(b).prop("checked");
            },
        }),
        (a.validator = function (b, c) {
            (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
                (this.currentForm = c),
                this.init();
        }),
        (a.validator.format = function (b, c) {
            return 1 === arguments.length
                ? function () {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c);
                }
                : void 0 === c
                    ? b
                    : (arguments.length > 2 &&
                    c.constructor !== Array &&
                    (c = a.makeArray(arguments).slice(1)),
                    c.constructor !== Array && (c = [c]),
                        a.each(c, function (a, c) {
                            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                                return c;
                            });
                        }),
                        b);
        }),
        a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (a) {
                    (this.lastActive = a),
                    this.settings.focusCleanup &&
                    (this.settings.unhighlight &&
                    this.settings.unhighlight.call(
                        this,
                        a,
                        this.settings.errorClass,
                        this.settings.validClass
                    ),
                        this.hideThese(this.errorsFor(a)));
                },
                onfocusout: function (a) {
                    this.checkable(a) ||
                    (!(a.name in this.submitted) && this.optional(a)) ||
                    this.element(a);
                },
                onkeyup: function (b, c) {
                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    (9 === c.which && "" === this.elementValue(b)) ||
                    a.inArray(c.keyCode, d) !== -1 ||
                    ((b.name in this.submitted || b.name in this.invalid) &&
                        this.element(b));
                },
                onclick: function (a) {
                    a.name in this.submitted
                        ? this.element(a)
                        : a.parentNode.name in this.submitted && this.element(a.parentNode);
                },
                highlight: function (b, c, d) {
                    "radio" === b.type
                        ? this.findByName(b.name).addClass(c).removeClass(d)
                        : a(b).addClass(c).removeClass(d);
                },
                unhighlight: function (b, c, d) {
                    "radio" === b.type
                        ? this.findByName(b.name).removeClass(c).addClass(d)
                        : a(b).removeClass(c).addClass(d);
                },
            },
            setDefaults: function (b) {
                a.extend(a.validator.defaults, b);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format(
                    "Please enter no more than {0} characters."
                ),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format(
                    "Please enter a value between {0} and {1} characters long."
                ),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format(
                    "Please enter a value less than or equal to {0}."
                ),
                min: a.validator.format(
                    "Please enter a value greater than or equal to {0}."
                ),
                step: a.validator.format("Please enter a multiple of {0}."),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function b(b) {
                        !this.form &&
                        this.hasAttribute("contenteditable") &&
                        (this.form = a(this).closest("form")[0]);
                        var c = a.data(this.form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
                    }
                    (this.labelContainer = a(this.settings.errorLabelContainer)),
                        (this.errorContext =
                            (this.labelContainer.length && this.labelContainer) ||
                            a(this.currentForm)),
                        (this.containers = a(this.settings.errorContainer).add(
                            this.settings.errorLabelContainer
                        )),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var c,
                        d = (this.groups = {});
                    a.each(this.settings.groups, function (b, c) {
                        "string" == typeof c && (c = c.split(/\s/)),
                            a.each(c, function (a, c) {
                                d[c] = b;
                            });
                    }),
                        (c = this.settings.rules),
                        a.each(c, function (b, d) {
                            c[b] = a.validator.normalizeRule(d);
                        }),
                        a(this.currentForm)
                            .on(
                                "focusin.validate focusout.validate keyup.validate",
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                                b
                            )
                            .on(
                                "click.validate",
                                "select, option, [type='radio'], [type='checkbox']",
                                b
                            ),
                    this.settings.invalidHandler &&
                    a(this.currentForm).on(
                        "invalid-form.validate",
                        this.settings.invalidHandler
                    ),
                        a(this.currentForm)
                            .find("[required], [data-rule-required], .required")
                            .attr("aria-required", "true");
                },
                form: function () {
                    return (
                        this.checkForm(),
                            a.extend(this.submitted, this.errorMap),
                            (this.invalid = a.extend({}, this.errorMap)),
                        this.valid() ||
                        a(this.currentForm).triggerHandler("invalid-form", [this]),
                            this.showErrors(),
                            this.valid()
                    );
                },
                checkForm: function () {
                    this.prepareForm();
                    for (
                        var a = 0, b = (this.currentElements = this.elements());
                        b[a];
                        a++
                    )
                        this.check(b[a]);
                    return this.valid();
                },
                element: function (b) {
                    var c,
                        d,
                        e = this.clean(b),
                        f = this.validationTargetFor(e),
                        g = this,
                        h = !0;
                    return (
                        void 0 === f
                            ? delete this.invalid[e.name]
                            : (this.prepareElement(f),
                                (this.currentElements = a(f)),
                                (d = this.groups[f.name]),
                            d &&
                            a.each(this.groups, function (a, b) {
                                b === d &&
                                a !== f.name &&
                                ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                                e &&
                                e.name in g.invalid &&
                                (g.currentElements.push(e), (h = g.check(e) && h)));
                            }),
                                (c = this.check(f) !== !1),
                                (h = h && c),
                                c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                            this.numberOfInvalids() ||
                            (this.toHide = this.toHide.add(this.containers)),
                                this.showErrors(),
                                a(b).attr("aria-invalid", !c)),
                            h
                    );
                },
                showErrors: function (b) {
                    if (b) {
                        var c = this;
                        a.extend(this.errorMap, b),
                            (this.errorList = a.map(this.errorMap, function (a, b) {
                                return { message: a, element: c.findByName(b)[0] };
                            })),
                            (this.successList = a.grep(this.successList, function (a) {
                                return !(a.name in b);
                            }));
                    }
                    this.settings.showErrors
                        ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
                        : this.defaultShowErrors();
                },
                resetForm: function () {
                    a.fn.resetForm && a(this.currentForm).resetForm(),
                        (this.invalid = {}),
                        (this.submitted = {}),
                        this.prepareForm(),
                        this.hideErrors();
                    var b = this.elements()
                        .removeData("previousValue")
                        .removeAttr("aria-invalid");
                    this.resetElements(b);
                },
                resetElements: function (a) {
                    var b;
                    if (this.settings.unhighlight)
                        for (b = 0; a[b]; b++)
                            this.settings.unhighlight.call(
                                this,
                                a[b],
                                this.settings.errorClass,
                                ""
                            ),
                                this.findByName(a[b].name).removeClass(
                                    this.settings.validClass
                                );
                    else
                        a.removeClass(this.settings.errorClass).removeClass(
                            this.settings.validClass
                        );
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (a) {
                    var b,
                        c = 0;
                    for (b in a) a[b] && c++;
                    return c;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (a) {
                    a.not(this.containers).text(""), this.addWrapper(a).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            a(
                                this.findLastActive() ||
                                (this.errorList.length && this.errorList[0].element) ||
                                []
                            )
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (b) {}
                },
                findLastActive: function () {
                    var b = this.lastActive;
                    return (
                        b &&
                        1 ===
                        a.grep(this.errorList, function (a) {
                            return a.element.name === b.name;
                        }).length &&
                        b
                    );
                },
                elements: function () {
                    var b = this,
                        c = {};
                    return a(this.currentForm)
                        .find("input, select, textarea, [contenteditable]")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                            var d = this.name || a(this).attr("name");
                            return (
                                !d &&
                                b.settings.debug &&
                                window.console &&
                                console.error("%o has no name assigned", this),
                                this.hasAttribute("contenteditable") &&
                                (this.form = a(this).closest("form")[0]),
                                !(d in c || !b.objectLength(a(this).rules())) &&
                                ((c[d] = !0), !0)
                            );
                        });
                },
                clean: function (b) {
                    return a(b)[0];
                },
                errors: function () {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext);
                },
                resetInternals: function () {
                    (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = a([])),
                        (this.toHide = a([]));
                },
                reset: function () {
                    this.resetInternals(), (this.currentElements = a([]));
                },
                prepareForm: function () {
                    this.reset(), (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (a) {
                    this.reset(), (this.toHide = this.errorsFor(a));
                },
                elementValue: function (b) {
                    var c,
                        d,
                        e = a(b),
                        f = b.type;
                    return "radio" === f || "checkbox" === f
                        ? this.findByName(b.name).filter(":checked").val()
                        : "number" === f && "undefined" != typeof b.validity
                            ? b.validity.badInput
                                ? "NaN"
                                : e.val()
                            : ((c = b.hasAttribute("contenteditable") ? e.text() : e.val()),
                                "file" === f
                                    ? "C:\\fakepath\\" === c.substr(0, 12)
                                        ? c.substr(12)
                                        : ((d = c.lastIndexOf("/")),
                                            d >= 0
                                                ? c.substr(d + 1)
                                                : ((d = c.lastIndexOf("\\")),
                                                    d >= 0 ? c.substr(d + 1) : c))
                                    : "string" == typeof c
                                        ? c.replace(/\r/g, "")
                                        : c);
                },
                check: function (b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c,
                        d,
                        e,
                        f = a(b).rules(),
                        g = a.map(f, function (a, b) {
                            return b;
                        }).length,
                        h = !1,
                        i = this.elementValue(b);
                    if ("function" == typeof f.normalizer) {
                        if (((i = f.normalizer.call(b, i)), "string" != typeof i))
                            throw new TypeError(
                                "The normalizer should return a string value."
                            );
                        delete f.normalizer;
                    }
                    for (d in f) {
                        e = { method: d, parameters: f[d] };
                        try {
                            if (
                                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                                "dependency-mismatch" === c && 1 === g)
                            ) {
                                h = !0;
                                continue;
                            }
                            if (((h = !1), "pending" === c))
                                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, e), !1;
                        } catch (j) {
                            throw (
                                (this.settings.debug &&
                                window.console &&
                                console.log(
                                    "Exception occurred when checking element " +
                                    b.id +
                                    ", check the '" +
                                    e.method +
                                    "' method.",
                                    j
                                ),
                                j instanceof TypeError &&
                                (j.message +=
                                    ".  Exception occurred when checking element " +
                                    b.id +
                                    ", check the '" +
                                    e.method +
                                    "' method."),
                                    j)
                            );
                        }
                    }
                    if (!h) return this.objectLength(f) && this.successList.push(b), !0;
                },
                customDataMessage: function (b, c) {
                    return (
                        a(b).data(
                            "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
                        ) || a(b).data("msg")
                    );
                },
                customMessage: function (a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b]);
                },
                findDefined: function () {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a];
                },
                defaultMessage: function (b, c) {
                    "string" == typeof c && (c = { method: c });
                    var d = this.findDefined(
                            this.customMessage(b.name, c.method),
                            this.customDataMessage(b, c.method),
                            (!this.settings.ignoreTitle && b.title) || void 0,
                            a.validator.messages[c.method],
                            "<strong>Warning: No message defined for " + b.name + "</strong>"
                        ),
                        e = /\$?\{(\d+)\}/g;
                    return (
                        "function" == typeof d
                            ? (d = d.call(this, c.parameters, b))
                            : e.test(d) &&
                            (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                            d
                    );
                },
                formatAndAdd: function (a, b) {
                    var c = this.defaultMessage(a, b);
                    this.errorList.push({ message: c, element: a, method: b.method }),
                        (this.errorMap[a.name] = c),
                        (this.submitted[a.name] = c);
                },
                addWrapper: function (a) {
                    return (
                        this.settings.wrapper &&
                        (a = a.add(a.parent(this.settings.wrapper))),
                            a
                    );
                },
                defaultShowErrors: function () {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++)
                        (c = this.errorList[a]),
                        this.settings.highlight &&
                        this.settings.highlight.call(
                            this,
                            c.element,
                            this.settings.errorClass,
                            this.settings.validClass
                        ),
                            this.showLabel(c.element, c.message);
                    if (
                        (this.errorList.length &&
                        (this.toShow = this.toShow.add(this.containers)),
                            this.settings.success)
                    )
                        for (a = 0; this.successList[a]; a++)
                            this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++)
                            this.settings.unhighlight.call(
                                this,
                                b[a],
                                this.settings.errorClass,
                                this.settings.validClass
                            );
                    (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return a(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h = this.errorsFor(b),
                        i = this.idOrName(b),
                        j = a(b).attr("aria-describedby");
                    h.length
                        ? (h
                            .removeClass(this.settings.validClass)
                            .addClass(this.settings.errorClass),
                            h.html(c))
                        : ((h = a("<" + this.settings.errorElement + ">")
                            .attr("id", i + "-error")
                            .addClass(this.settings.errorClass)
                            .html(c || "")),
                            (d = h),
                        this.settings.wrapper &&
                        (d = h
                            .hide()
                            .show()
                            .wrap("<" + this.settings.wrapper + "/>")
                            .parent()),
                            this.labelContainer.length
                                ? this.labelContainer.append(d)
                                : this.settings.errorPlacement
                                    ? this.settings.errorPlacement.call(this, d, a(b))
                                    : d.insertAfter(b),
                            h.is("label")
                                ? h.attr("for", i)
                                : 0 ===
                                h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                                    .length &&
                                ((f = h.attr("id")),
                                    j
                                        ? j.match(
                                        new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                                    ) || (j += " " + f)
                                        : (j = f),
                                    a(b).attr("aria-describedby", j),
                                    (e = this.groups[b.name]),
                                e &&
                                ((g = this),
                                    a.each(g.groups, function (b, c) {
                                        c === e &&
                                        a(
                                            "[name='" + g.escapeCssMeta(b) + "']",
                                            g.currentForm
                                        ).attr("aria-describedby", h.attr("id"));
                                    })))),
                    !c &&
                    this.settings.success &&
                    (h.text(""),
                        "string" == typeof this.settings.success
                            ? h.addClass(this.settings.success)
                            : this.settings.success(h, b)),
                        (this.toShow = this.toShow.add(h));
                },
                errorsFor: function (b) {
                    var c = this.escapeCssMeta(this.idOrName(b)),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return (
                        d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                            this.errors().filter(e)
                    );
                },
                escapeCssMeta: function (a) {
                    return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
                },
                idOrName: function (a) {
                    return (
                        this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                    );
                },
                validationTargetFor: function (b) {
                    return (
                        this.checkable(b) && (b = this.findByName(b.name)),
                            a(b).not(this.settings.ignore)[0]
                    );
                },
                checkable: function (a) {
                    return /radio|checkbox/i.test(a.type);
                },
                findByName: function (b) {
                    return a(this.currentForm).find(
                        "[name='" + this.escapeCssMeta(b) + "']"
                    );
                },
                getLength: function (b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c))
                                return this.findByName(c.name).filter(":checked").length;
                    }
                    return b.length;
                },
                depend: function (a, b) {
                    return (
                        !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
                    );
                },
                dependTypes: {
                    boolean: function (a) {
                        return a;
                    },
                    string: function (b, c) {
                        return !!a(b, c.form).length;
                    },
                    function: function (a, b) {
                        return a(b);
                    },
                },
                optional: function (b) {
                    var c = this.elementValue(b);
                    return (
                        !a.validator.methods.required.call(this, c, b) &&
                        "dependency-mismatch"
                    );
                },
                startRequest: function (b) {
                    this.pending[b.name] ||
                    (this.pendingRequest++,
                        a(b).addClass(this.settings.pendingClass),
                        (this.pending[b.name] = !0));
                },
                stopRequest: function (b, c) {
                    this.pendingRequest--,
                    this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[b.name],
                        a(b).removeClass(this.settings.pendingClass),
                        c && 0 === this.pendingRequest && this.formSubmitted && this.form()
                            ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
                            : !c &&
                            0 === this.pendingRequest &&
                            this.formSubmitted &&
                            (a(this.currentForm).triggerHandler("invalid-form", [this]),
                                (this.formSubmitted = !1));
                },
                previousValue: function (b, c) {
                    return (
                        (c = ("string" == typeof c && c) || "remote"),
                        a.data(b, "previousValue") ||
                        a.data(b, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(b, { method: c }),
                        })
                    );
                },
                destroy: function () {
                    this.resetForm(),
                        a(this.currentForm)
                            .off(".validate")
                            .removeData("validator")
                            .find(".validate-equalTo-blur")
                            .off(".validate-equalTo")
                            .removeClass("validate-equalTo-blur");
                },
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
            },
            addClassRules: function (b, c) {
                b.constructor === String
                    ? (this.classRuleSettings[b] = c)
                    : a.extend(this.classRuleSettings, b);
            },
            classRules: function (b) {
                var c = {},
                    d = a(b).attr("class");
                return (
                    d &&
                    a.each(d.split(" "), function () {
                        this in a.validator.classRuleSettings &&
                        a.extend(c, a.validator.classRuleSettings[this]);
                    }),
                        c
                );
            },
            normalizeAttributeRule: function (a, b, c, d) {
                /min|max|step/.test(c) &&
                (null === b || /number|range|text/.test(b)) &&
                ((d = Number(d)), isNaN(d) && (d = void 0)),
                    d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
            },
            attributeRules: function (b) {
                var c,
                    d,
                    e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods)
                    "required" === c
                        ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
                        : (d = f.attr(c)),
                        this.normalizeAttributeRule(e, g, c, d);
                return (
                    e.maxlength &&
                    /-1|2147483647|524288/.test(e.maxlength) &&
                    delete e.maxlength,
                        e
                );
            },
            dataRules: function (b) {
                var c,
                    d,
                    e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods)
                    (d = f.data(
                        "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
                    )),
                        this.normalizeAttributeRule(e, g, c, d);
                return e;
            },
            staticRules: function (b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return (
                    d.settings.rules &&
                    (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
                        c
                );
            },
            normalizeRules: function (b, c) {
                return (
                    a.each(b, function (d, e) {
                        if (e === !1) return void delete b[d];
                        if (e.param || e.depends) {
                            var f = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    f = !!a(e.depends, c.form).length;
                                    break;
                                case "function":
                                    f = e.depends.call(c, c);
                            }
                            f
                                ? (b[d] = void 0 === e.param || e.param)
                                : (a.data(c.form, "validator").resetElements(a(c)),
                                    delete b[d]);
                        }
                    }),
                        a.each(b, function (d, e) {
                            b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
                        }),
                        a.each(["minlength", "maxlength"], function () {
                            b[this] && (b[this] = Number(b[this]));
                        }),
                        a.each(["rangelength", "range"], function () {
                            var c;
                            b[this] &&
                            (a.isArray(b[this])
                                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                                : "string" == typeof b[this] &&
                                ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                                    (b[this] = [Number(c[0]), Number(c[1])])));
                        }),
                    a.validator.autoCreateRanges &&
                    (null != b.min &&
                    null != b.max &&
                    ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                    null != b.minlength &&
                    null != b.maxlength &&
                    ((b.rangelength = [b.minlength, b.maxlength]),
                        delete b.minlength,
                        delete b.maxlength)),
                        b
                );
            },
            normalizeRule: function (b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function () {
                        c[this] = !0;
                    }),
                        (b = c);
                }
                return b;
            },
            addMethod: function (b, c, d) {
                (a.validator.methods[b] = c),
                    (a.validator.messages[b] =
                        void 0 !== d ? d : a.validator.messages[b]),
                c.length < 3 &&
                a.validator.addClassRules(b, a.validator.normalizeRule(b));
            },
            methods: {
                required: function (b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0;
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
                },
                email: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                            a
                        )
                    );
                },
                url: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                            a
                        )
                    );
                },
                date: function (a, b) {
                    return (
                        this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
                    );
                },
                dateISO: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                            a
                        )
                    );
                },
                number: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                    );
                },
                digits: function (a, b) {
                    return this.optional(b) || /^\d+$/.test(a);
                },
                minlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d;
                },
                maxlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e <= d;
                },
                rangelength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || (e >= d[0] && e <= d[1]);
                },
                min: function (a, b, c) {
                    return this.optional(b) || a >= c;
                },
                max: function (a, b, c) {
                    return this.optional(b) || a <= c;
                },
                range: function (a, b, c) {
                    return this.optional(b) || (a >= c[0] && a <= c[1]);
                },
                step: function (b, c, d) {
                    var e,
                        f = a(c).attr("type"),
                        g = "Step attribute on input type " + f + " is not supported.",
                        h = ["text", "number", "range"],
                        i = new RegExp("\\b" + f + "\\b"),
                        j = f && !i.test(h.join()),
                        k = function (a) {
                            var b = ("" + a).match(/(?:\.(\d+))?$/);
                            return b && b[1] ? b[1].length : 0;
                        },
                        l = function (a) {
                            return Math.round(a * Math.pow(10, e));
                        },
                        m = !0;
                    if (j) throw new Error(g);
                    return (
                        (e = k(d)),
                        (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
                        this.optional(c) || m
                    );
                },
                equalTo: function (b, c, d) {
                    var e = a(d);
                    return (
                        this.settings.onfocusout &&
                        e.not(".validate-equalTo-blur").length &&
                        e
                            .addClass("validate-equalTo-blur")
                            .on("blur.validate-equalTo", function () {
                                a(c).valid();
                            }),
                        b === e.val()
                    );
                },
                remote: function (b, c, d, e) {
                    if (this.optional(c)) return "dependency-mismatch";
                    e = ("string" == typeof e && e) || "remote";
                    var f,
                        g,
                        h,
                        i = this.previousValue(c, e);
                    return (
                        this.settings.messages[c.name] ||
                        (this.settings.messages[c.name] = {}),
                            (i.originalMessage =
                                i.originalMessage || this.settings.messages[c.name][e]),
                            (this.settings.messages[c.name][e] = i.message),
                            (d = ("string" == typeof d && { url: d }) || d),
                            (h = a.param(a.extend({ data: b }, d.data))),
                            i.old === h
                                ? i.valid
                                : ((i.old = h),
                                    (f = this),
                                    this.startRequest(c),
                                    (g = {}),
                                    (g[c.name] = b),
                                    a.ajax(
                                        a.extend(
                                            !0,
                                            {
                                                mode: "abort",
                                                port: "validate" + c.name,
                                                dataType: "json",
                                                data: g,
                                                context: f.currentForm,
                                                success: function (a) {
                                                    var d,
                                                        g,
                                                        h,
                                                        j = a === !0 || "true" === a;
                                                    (f.settings.messages[c.name][e] = i.originalMessage),
                                                        j
                                                            ? ((h = f.formSubmitted),
                                                                f.resetInternals(),
                                                                (f.toHide = f.errorsFor(c)),
                                                                (f.formSubmitted = h),
                                                                f.successList.push(c),
                                                                (f.invalid[c.name] = !1),
                                                                f.showErrors())
                                                            : ((d = {}),
                                                                (g =
                                                                    a ||
                                                                    f.defaultMessage(c, {
                                                                        method: e,
                                                                        parameters: b,
                                                                    })),
                                                                (d[c.name] = i.message = g),
                                                                (f.invalid[c.name] = !0),
                                                                f.showErrors(d)),
                                                        (i.valid = j),
                                                        f.stopRequest(c, j);
                                                },
                                            },
                                            d
                                        )
                                    ),
                                    "pending")
                    );
                },
            },
        });
    var b,
        c = {};
    return (
        a.ajaxPrefilter
            ? a.ajaxPrefilter(function (a, b, d) {
                var e = a.port;
                "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
            })
            : ((b = a.ajax),
                (a.ajax = function (d) {
                    var e = ("mode" in d ? d : a.ajaxSettings).mode,
                        f = ("port" in d ? d : a.ajaxSettings).port;
                    return "abort" === e
                        ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
                        : b.apply(this, arguments);
                })),
            a
    );
});

/*-------------------------
  # Counter
-------------------------*/
!(function (t) {
    "use strict";
    t.fn.countUp = function (e) {
        var n = t.extend({ time: 2e3, delay: 10 }, e);
        return this.each(function () {
            var e = t(this),
                a = n;
            e.waypoint(
                function () {
                    e.data("counterupTo") || e.data("counterupTo", e.text());
                    var t =
                            parseInt(e.data("counter-time")) > 0
                                ? parseInt(e.data("counter-time"))
                                : a.time,
                        n =
                            parseInt(e.data("counter-delay")) > 0
                                ? parseInt(e.data("counter-delay"))
                                : a.delay,
                        u = t / n,
                        r = e.data("counterupTo"),
                        o = [r],
                        c = /[0-9]+,[0-9]+/.test(r);
                    r = r.replace(/,/g, "");
                    for (
                        var d = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)),
                            s = d ? (r.split(".")[1] || []).length : 0,
                            i = u;
                        i >= 1;
                        i--
                    ) {
                        var p = parseInt(Math.round((r / u) * i));
                        if ((d && (p = parseFloat((r / u) * i).toFixed(s)), c))
                            for (; /(\d+)(\d{3})/.test(p.toString()); )
                                p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        o.unshift(p);
                    }
                    e.data("counterup-nums", o), e.text("0");
                    e.data("counterup-func", function () {
                        e.text(e.data("counterup-nums").shift()),
                            e.data("counterup-nums").length
                                ? setTimeout(e.data("counterup-func"), n)
                                : (e.data("counterup-nums"),
                                    e.data("counterup-nums", null),
                                    e.data("counterup-func", null));
                    }),
                        setTimeout(e.data("counterup-func"), n);
                },
                { offset: "100%", triggerOnce: !0 }
            );
        });
    };
})(jQuery);

/*-------------------------
  # Waypoints
-------------------------*/
!(function () {
    "use strict";
    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + e),
            (this.options = t.Adapter.extend({}, t.defaults, o)),
            (this.element = this.options.element),
            (this.adapter = new t.Adapter(this.element)),
            (this.callback = o.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
            })),
            (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (i[this.key] = this),
            (e += 1);
    }
    var e = 0,
        i = {};
    (t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
    }),
        (t.prototype.trigger = function (t) {
            this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (t.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete i[this.key];
        }),
        (t.prototype.disable = function () {
            return (this.enabled = !1), this;
        }),
        (t.prototype.enable = function () {
            return this.context.refresh(), (this.enabled = !0), this;
        }),
        (t.prototype.next = function () {
            return this.group.next(this);
        }),
        (t.prototype.previous = function () {
            return this.group.previous(this);
        }),
        (t.invokeAll = function (t) {
            var e = [];
            for (var o in i) e.push(i[o]);
            for (var n = 0, r = e.length; r > n; n++) e[n][t]();
        }),
        (t.destroyAll = function () {
            t.invokeAll("destroy");
        }),
        (t.disableAll = function () {
            t.invokeAll("disable");
        }),
        (t.enableAll = function () {
            t.invokeAll("enable");
        }),
        (t.refreshAll = function () {
            t.Context.refreshAll();
        }),
        (t.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight;
        }),
        (t.viewportWidth = function () {
            return document.documentElement.clientWidth;
        }),
        (t.adapters = []),
        (t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0,
        }),
        (t.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
            },
        }),
        (window.Waypoint = t);
})(),
    (function () {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        function e(t) {
            (this.element = t),
                (this.Adapter = n.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + i),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                    x: this.adapter.scrollLeft(),
                    y: this.adapter.scrollTop(),
                }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (o[t.waypointContextKey] = this),
                (i += 1),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            r = window.onload;
        (e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (e.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical);
                t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
            }),
            (e.prototype.createThrottledResizeHandler = function () {
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                var e = this;
                this.adapter.on("resize.waypoints", function () {
                    e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.createThrottledScrollHandler = function () {
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                var e = this;
                this.adapter.on("scroll.waypoints", function () {
                    (!e.didScroll || n.isTouch) &&
                    ((e.didScroll = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.handleResize = function () {
                n.Context.refreshAll();
            }),
            (e.prototype.handleScroll = function () {
                var t = {},
                    e = {
                        horizontal: {
                            newScroll: this.adapter.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                        },
                        vertical: {
                            newScroll: this.adapter.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                        },
                    };
                for (var i in e) {
                    var o = e[i],
                        n = o.newScroll > o.oldScroll,
                        r = n ? o.forward : o.backward;
                    for (var s in this.waypoints[i]) {
                        var a = this.waypoints[i][s],
                            l = o.oldScroll < a.triggerPoint,
                            h = o.newScroll >= a.triggerPoint,
                            p = l && h,
                            u = !l && !h;
                        (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
                    }
                }
                for (var c in t) t[c].flushTriggers();
                this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
            }),
            (e.prototype.innerHeight = function () {
                return this.element == this.element.window
                    ? n.viewportHeight()
                    : this.adapter.innerHeight();
            }),
            (e.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (e.prototype.innerWidth = function () {
                return this.element == this.element.window
                    ? n.viewportWidth()
                    : this.adapter.innerWidth();
            }),
            (e.prototype.destroy = function () {
                var t = [];
                for (var e in this.waypoints)
                    for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
                for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
            }),
            (e.prototype.refresh = function () {
                var t,
                    e = this.element == this.element.window,
                    i = e ? void 0 : this.adapter.offset(),
                    o = {};
                this.handleScroll(),
                    (t = {
                        horizontal: {
                            contextOffset: e ? 0 : i.left,
                            contextScroll: e ? 0 : this.oldScroll.x,
                            contextDimension: this.innerWidth(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left",
                        },
                        vertical: {
                            contextOffset: e ? 0 : i.top,
                            contextScroll: e ? 0 : this.oldScroll.y,
                            contextDimension: this.innerHeight(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top",
                        },
                    });
                for (var r in t) {
                    var s = t[r];
                    for (var a in this.waypoints[r]) {
                        var l,
                            h,
                            p,
                            u,
                            c,
                            d = this.waypoints[r][a],
                            f = d.options.offset,
                            w = d.triggerPoint,
                            y = 0,
                            g = null == w;
                        d.element !== d.element.window &&
                        (y = d.adapter.offset()[s.offsetProp]),
                            "function" == typeof f
                                ? (f = f.apply(d))
                                : "string" == typeof f &&
                                ((f = parseFloat(f)),
                                d.options.offset.indexOf("%") > -1 &&
                                (f = Math.ceil((s.contextDimension * f) / 100))),
                            (l = s.contextScroll - s.contextOffset),
                            (d.triggerPoint = y + l - f),
                            (h = w < s.oldScroll),
                            (p = d.triggerPoint >= s.oldScroll),
                            (u = h && p),
                            (c = !h && !p),
                            !g && u
                                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                                : !g && c
                                    ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                                    : g &&
                                    s.oldScroll >= d.triggerPoint &&
                                    (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
                    }
                }
                return (
                    n.requestAnimationFrame(function () {
                        for (var t in o) o[t].flushTriggers();
                    }),
                        this
                );
            }),
            (e.findOrCreateByElement = function (t) {
                return e.findByElement(t) || new e(t);
            }),
            (e.refreshAll = function () {
                for (var t in o) o[t].refresh();
            }),
            (e.findByElement = function (t) {
                return o[t.waypointContextKey];
            }),
            (window.onload = function () {
                r && r(), e.refreshAll();
            }),
            (n.requestAnimationFrame = function (e) {
                var i =
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    t;
                i.call(window, e);
            }),
            (n.Context = e);
    })(),
    (function () {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        function i(t) {
            (this.name = t.name),
                (this.axis = t.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (o[this.axis][this.name] = this);
        }
        var o = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        (i.prototype.add = function (t) {
            this.waypoints.push(t);
        }),
            (i.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (i.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var o = this.triggerQueues[i],
                        n = "up" === i || "left" === i;
                    o.sort(n ? e : t);
                    for (var r = 0, s = o.length; s > r; r += 1) {
                        var a = o[r];
                        (a.options.continuous || r === o.length - 1) && a.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (i.prototype.next = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints),
                    o = i === this.waypoints.length - 1;
                return o ? null : this.waypoints[i + 1];
            }),
            (i.prototype.previous = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (i.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t);
            }),
            (i.prototype.remove = function (t) {
                var e = n.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1);
            }),
            (i.prototype.first = function () {
                return this.waypoints[0];
            }),
            (i.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (i.findOrCreate = function (t) {
                return o[t.axis][t.name] || new i(t);
            }),
            (n.Group = i);
    })(),
    (function () {
        "use strict";
        function t(t) {
            this.$element = e(t);
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(
            [
                "innerHeight",
                "innerWidth",
                "off",
                "offset",
                "on",
                "outerHeight",
                "outerWidth",
                "scrollLeft",
                "scrollTop",
            ],
            function (e, i) {
                t.prototype[i] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return this.$element[i].apply(this.$element, t);
                };
            }
        ),
            e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
                t[o] = e[o];
            }),
            i.adapters.push({ name: "jquery", Adapter: t }),
            (i.Adapter = t);
    })(),
    (function () {
        "use strict";
        function t(t) {
            return function () {
                var i = [],
                    o = arguments[0];
                return (
                    t.isFunction(arguments[0]) &&
                    ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
                        this.each(function () {
                            var n = t.extend({}, o, { element: this });
                            "string" == typeof n.context &&
                            (n.context = t(this).closest(n.context)[0]),
                                i.push(new e(n));
                        }),
                        i
                );
            };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
        window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })();

/*-------------------------
  # Tilt.js
-------------------------*/
("use strict");
var _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
        }
        : function (t) {
            return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
                ? "symbol"
                : typeof t;
        };
!(function (t) {
    "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : "object" ===
        ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
        module.exports
            ? (module.exports = function (i, s) {
                return (
                    void 0 === s &&
                    (s =
                        "undefined" != typeof window
                            ? require("jquery")
                            : require("jquery")(i)),
                        t(s),
                        s
                );
            })
            : t(jQuery);
})(function (t) {
    return (
        (t.fn.tilt = function (i) {
            var s = function () {
                    this.ticking ||
                    (requestAnimationFrame(g.bind(this)), (this.ticking = !0));
                },
                e = function () {
                    var i = this;
                    t(this).on("mousemove", o),
                        t(this).on("mouseenter", a),
                    this.settings.reset && t(this).on("mouseleave", l),
                    this.settings.glare && t(window).on("resize", d.bind(i));
                },
                n = function () {
                    var i = this;
                    void 0 !== this.timeout && clearTimeout(this.timeout),
                        t(this).css({
                            transition: this.settings.speed + "ms " + this.settings.easing,
                        }),
                    this.settings.glare &&
                    this.glareElement.css({
                        transition:
                            "opacity " +
                            this.settings.speed +
                            "ms " +
                            this.settings.easing,
                    }),
                        (this.timeout = setTimeout(function () {
                            t(i).css({ transition: "" }),
                            i.settings.glare && i.glareElement.css({ transition: "" });
                        }, this.settings.speed));
                },
                a = function (i) {
                    (this.ticking = !1),
                        t(this).css({ "will-change": "transform" }),
                        n.call(this),
                        t(this).trigger("tilt.mouseEnter");
                },
                r = function (i) {
                    return (
                        "undefined" == typeof i &&
                        (i = {
                            pageX: t(this).offset().left + t(this).outerWidth() / 2,
                            pageY: t(this).offset().top + t(this).outerHeight() / 2,
                        }),
                            { x: i.pageX, y: i.pageY }
                    );
                },
                o = function (t) {
                    (this.mousePositions = r(t)), s.call(this);
                },
                l = function () {
                    n.call(this),
                        (this.reset = !0),
                        s.call(this),
                        t(this).trigger("tilt.mouseLeave");
                },
                h = function () {
                    var i = t(this).outerWidth(),
                        s = t(this).outerHeight(),
                        e = t(this).offset().left,
                        n = t(this).offset().top,
                        a = (this.mousePositions.x - e) / i,
                        r = (this.mousePositions.y - n) / s,
                        o = (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(
                            2
                        ),
                        l = (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(
                            2
                        ),
                        h =
                            Math.atan2(
                                this.mousePositions.x - (e + i / 2),
                                -(this.mousePositions.y - (n + s / 2))
                            ) *
                            (180 / Math.PI);
                    return {
                        tiltX: o,
                        tiltY: l,
                        percentageX: 100 * a,
                        percentageY: 100 * r,
                        angle: h,
                    };
                },
                g = function () {
                    return (
                        (this.transforms = h.call(this)),
                            this.reset
                                ? ((this.reset = !1),
                                    t(this).css(
                                        "transform",
                                        "perspective(" +
                                        this.settings.perspective +
                                        "px) rotateX(0deg) rotateY(0deg)"
                                    ),
                                    void (
                                        this.settings.glare &&
                                        (this.glareElement.css(
                                            "transform",
                                            "rotate(180deg) translate(-50%, -50%)"
                                        ),
                                            this.glareElement.css("opacity", "0"))
                                    ))
                                : (t(this).css(
                                    "transform",
                                    "perspective(" +
                                    this.settings.perspective +
                                    "px) rotateX(" +
                                    ("x" === this.settings.disableAxis
                                        ? 0
                                        : this.transforms.tiltY) +
                                    "deg) rotateY(" +
                                    ("y" === this.settings.disableAxis
                                        ? 0
                                        : this.transforms.tiltX) +
                                    "deg) scale3d(" +
                                    this.settings.scale +
                                    "," +
                                    this.settings.scale +
                                    "," +
                                    this.settings.scale +
                                    ")"
                                ),
                                this.settings.glare &&
                                (this.glareElement.css(
                                    "transform",
                                    "rotate(" +
                                    this.transforms.angle +
                                    "deg) translate(-50%, -50%)"
                                ),
                                    this.glareElement.css(
                                        "opacity",
                                        "" +
                                        (this.transforms.percentageY * this.settings.maxGlare) /
                                        100
                                    )),
                                    t(this).trigger("change", [this.transforms]),
                                    void (this.ticking = !1))
                    );
                },
                c = function () {
                    var i = this.settings.glarePrerender;
                    if (
                        (i ||
                        t(this).append(
                            '<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'
                        ),
                            (this.glareElementWrapper = t(this).find(".js-tilt-glare")),
                            (this.glareElement = t(this).find(".js-tilt-glare-inner")),
                            !i)
                    ) {
                        var s = {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                        };
                        this.glareElementWrapper
                            .css(s)
                            .css({ overflow: "hidden", "pointer-events": "none" }),
                            this.glareElement.css({
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                "background-image":
                                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                                width: "" + 2 * t(this).outerWidth(),
                                height: "" + 2 * t(this).outerWidth(),
                                transform: "rotate(180deg) translate(-50%, -50%)",
                                "transform-origin": "0% 0%",
                                opacity: "0",
                            });
                    }
                },
                d = function () {
                    this.glareElement.css({
                        width: "" + 2 * t(this).outerWidth(),
                        height: "" + 2 * t(this).outerWidth(),
                    });
                };
            return (
                (t.fn.tilt.destroy = function () {
                    t(this).each(function () {
                        t(this).find(".js-tilt-glare").remove(),
                            t(this).css({ "will-change": "", transform: "" }),
                            t(this).off("mousemove mouseenter mouseleave");
                    });
                }),
                    (t.fn.tilt.getValues = function () {
                        var i = [];
                        return (
                            t(this).each(function () {
                                (this.mousePositions = r.call(this)), i.push(h.call(this));
                            }),
                                i
                        );
                    }),
                    (t.fn.tilt.reset = function () {
                        t(this).each(function () {
                            var i = this;
                            (this.mousePositions = r.call(this)),
                                (this.settings = t(this).data("settings")),
                                l.call(this),
                                setTimeout(function () {
                                    i.reset = !1;
                                }, this.settings.transition);
                        });
                    }),
                    this.each(function () {
                        var s = this;
                        (this.settings = t.extend(
                            {
                                maxTilt: t(this).is("[data-tilt-max]")
                                    ? t(this).data("tilt-max")
                                    : 20,
                                perspective: t(this).is("[data-tilt-perspective]")
                                    ? t(this).data("tilt-perspective")
                                    : 300,
                                easing: t(this).is("[data-tilt-easing]")
                                    ? t(this).data("tilt-easing")
                                    : "cubic-bezier(.03,.98,.52,.99)",
                                scale: t(this).is("[data-tilt-scale]")
                                    ? t(this).data("tilt-scale")
                                    : "1",
                                speed: t(this).is("[data-tilt-speed]")
                                    ? t(this).data("tilt-speed")
                                    : "400",
                                transition:
                                    !t(this).is("[data-tilt-transition]") ||
                                    t(this).data("tilt-transition"),
                                disableAxis: t(this).is("[data-tilt-disable-axis]")
                                    ? t(this).data("tilt-disable-axis")
                                    : null,
                                axis: t(this).is("[data-tilt-axis]")
                                    ? t(this).data("tilt-axis")
                                    : null,
                                reset:
                                    !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                                glare:
                                    !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                                maxGlare: t(this).is("[data-tilt-maxglare]")
                                    ? t(this).data("tilt-maxglare")
                                    : 1,
                            },
                            i
                        )),
                        null !== this.settings.axis &&
                        (console.warn(
                            "Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"
                        ),
                            (this.settings.disableAxis = this.settings.axis)),
                            (this.init = function () {
                                t(s).data("settings", s.settings),
                                s.settings.glare && c.call(s),
                                    e.call(s);
                            }),
                            this.init();
                    })
            );
        }),
            t("[data-tilt]").tilt(),
            !0
    );
});
