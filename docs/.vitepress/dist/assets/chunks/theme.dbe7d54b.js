import {
  d as g,
  o as a,
  c as i,
  r as u,
  n as I,
  a as C,
  t as P,
  _ as p,
  u as et,
  b as c,
  e as b,
  f as S,
  g as tt,
  h as G,
  i as Oe,
  j as nt,
  k as st,
  w as q,
  l as Y,
  m as ot,
  P as at,
  p as _e,
  q as K,
  s as J,
  v as ae,
  x as r,
  F as M,
  y,
  z as v,
  T as ve,
  A as m,
  B as ee,
  C as h,
  D as R,
  E as ct,
  G as U,
  H as ze,
  I as lt,
  J as it,
  K as B,
  L as E,
  M as H,
  N as rt,
  O as Me,
  Q as fe,
  R as te,
  S as ut,
  U as he,
  V as dt,
  W as _t,
  X as vt,
  Y as ft,
  Z as ht,
  $ as pt,
  a0 as mt,
} from "./framework.cd9250a1.js";
const gt = g({
  __name: "VPBadge",
  props: { text: null, type: null },
  setup(e) {
    return (t, n) => (
      a(),
      i(
        "span",
        { class: I(["VPBadge", e.type ?? "tip"]) },
        [u(t.$slots, "default", {}, () => [C(P(e.text), 1)], !0)],
        2,
      )
    );
  },
});
const yt = p(gt, [["__scopeId", "data-v-350d3852"]]),
  w = et;
var Ie;
const De = typeof window < "u",
  bt = (e) => typeof e == "string",
  kt = () => {};
De &&
  (Ie = window == null ? void 0 : window.navigator) != null &&
  Ie.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Fe(e) {
  return typeof e == "function" ? e() : c(e);
}
function $t(e) {
  return e;
}
function Ge(e) {
  return nt() ? (st(e), !0) : !1;
}
function Pt(e) {
  return typeof e == "function" ? b(e) : S(e);
}
function wt(e, t = !0) {
  tt() ? G(e) : t ? e() : Oe(e);
}
function Vt(e) {
  var t;
  const n = Fe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const pe = De ? window : void 0;
function xt(...e) {
  let t, n, s, o;
  if (
    (bt(e[0]) || Array.isArray(e[0])
      ? (([n, s, o] = e), (t = pe))
      : ([t, n, s, o] = e),
    !t)
  )
    return kt;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [],
    d = () => {
      l.forEach(($) => $()), (l.length = 0);
    },
    f = ($, L, V, x) => (
      $.addEventListener(L, V, x), () => $.removeEventListener(L, V, x)
    ),
    _ = q(
      () => [Vt(t), Fe(o)],
      ([$, L]) => {
        d(), $ && l.push(...n.flatMap((V) => s.map((x) => f($, V, x, L))));
      },
      { immediate: !0, flush: "post" },
    ),
    k = () => {
      _(), d();
    };
  return Ge(k), k;
}
function St(e, t = !1) {
  const n = S(),
    s = () => (n.value = !!e());
  return s(), wt(s, t), n;
}
function re(e, t = {}) {
  const { window: n = pe } = t,
    s = St(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const l = S(!1),
    d = () => {
      o &&
        ("removeEventListener" in o
          ? o.removeEventListener("change", f)
          : o.removeListener(f));
    },
    f = () => {
      s.value &&
        (d(),
        (o = n.matchMedia(Pt(e).value)),
        (l.value = o.matches),
        "addEventListener" in o
          ? o.addEventListener("change", f)
          : o.addListener(f));
    };
  return Y(f), Ge(() => d()), l;
}
const Ce =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Be = "__vueuse_ssr_handlers__";
Ce[Be] = Ce[Be] || {};
var Ne;
(function (e) {
  (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
})(Ne || (Ne = {}));
var Lt = Object.defineProperty,
  Te = Object.getOwnPropertySymbols,
  Mt = Object.prototype.hasOwnProperty,
  It = Object.prototype.propertyIsEnumerable,
  Ae = (e, t, n) =>
    t in e
      ? Lt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ct = (e, t) => {
    for (var n in t || (t = {})) Mt.call(t, n) && Ae(e, n, t[n]);
    if (Te) for (var n of Te(t)) It.call(t, n) && Ae(e, n, t[n]);
    return e;
  };
const Bt = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
Ct({ linear: $t }, Bt);
function Nt({ window: e = pe } = {}) {
  if (!e) return { x: S(0), y: S(0) };
  const t = S(e.scrollX),
    n = S(e.scrollY);
  return (
    xt(
      e,
      "scroll",
      () => {
        (t.value = e.scrollX), (n.value = e.scrollY);
      },
      { capture: !1, passive: !0 },
    ),
    { x: t, y: n }
  );
}
function Tt(e, t) {
  let n,
    s = !1;
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(e, t))
        : (e(),
          (s = !0),
          setTimeout(() => {
            s = !1;
          }, t));
  };
}
function ue(e) {
  return /^\//.test(e) ? e : `/${e}`;
}
function X(e) {
  if (ot(e)) return e.replace(at, "");
  const { site: t } = w(),
    { pathname: n, search: s, hash: o } = new URL(e, "http://example.com"),
    l =
      n.endsWith("/") || n.endsWith(".html")
        ? e
        : e.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${n.replace(
              /(\.md)?$/,
              t.value.cleanUrls ? "" : ".html",
            )}${s}${o}`,
          );
  return _e(l);
}
function Re(e, t) {
  if (Array.isArray(e)) return e;
  if (e == null) return [];
  t = ue(t);
  const n = Object.keys(e)
    .sort((s, o) => o.split("/").length - s.split("/").length)
    .find((s) => t.startsWith(ue(s)));
  return n ? e[n] : [];
}
function At(e) {
  const t = [];
  let n = 0;
  for (const s in e) {
    const o = e[s];
    if (o.items) {
      n = t.push(o);
      continue;
    }
    t[n] || t.push({ items: [] }), t[n].items.push(o);
  }
  return t;
}
function Et(e) {
  const t = [];
  function n(s) {
    for (const o of s)
      o.text && o.link && t.push({ text: o.text, link: o.link }),
        o.items && n(o.items);
  }
  return n(e), t;
}
function de(e, t) {
  return Array.isArray(t)
    ? t.some((n) => de(e, n))
    : K(e, t.link)
    ? !0
    : t.items
    ? de(e, t.items)
    : !1;
}
function O() {
  const e = J(),
    { theme: t, frontmatter: n } = w(),
    s = re("(min-width: 960px)"),
    o = S(!1),
    l = b(() => {
      const x = t.value.sidebar,
        N = e.data.relativePath;
      return x ? Re(x, N) : [];
    }),
    d = b(
      () =>
        n.value.sidebar !== !1 &&
        l.value.length > 0 &&
        n.value.layout !== "home",
    ),
    f = b(() =>
      n.value.layout === "home"
        ? !1
        : n.value.aside != null
        ? !!n.value.aside
        : t.value.aside !== !1,
    ),
    _ = b(() => d.value && s.value),
    k = b(() => (d.value ? At(l.value) : []));
  function $() {
    o.value = !0;
  }
  function L() {
    o.value = !1;
  }
  function V() {
    o.value ? L() : $();
  }
  return {
    isOpen: o,
    sidebar: l,
    sidebarGroups: k,
    hasSidebar: d,
    hasAside: f,
    isSidebarEnabled: _,
    open: $,
    close: L,
    toggle: V,
  };
}
function Ht(e, t) {
  let n;
  Y(() => {
    n = e.value ? document.activeElement : void 0;
  }),
    G(() => {
      window.addEventListener("keyup", s);
    }),
    ae(() => {
      window.removeEventListener("keyup", s);
    });
  function s(o) {
    o.key === "Escape" && e.value && (t(), n == null || n.focus());
  }
}
function Ot(e) {
  const { page: t } = w(),
    n = S(!1),
    s = b(() => e.value.collapsed != null),
    o = b(() => !!e.value.link),
    l = b(() => K(t.value.relativePath, e.value.link)),
    d = b(() =>
      l.value
        ? !0
        : e.value.items
        ? de(t.value.relativePath, e.value.items)
        : !1,
    ),
    f = b(() => !!(e.value.items && e.value.items.length));
  Y(() => {
    n.value = !!(s.value && e.value.collapsed);
  }),
    Y(() => {
      (l.value || d.value) && (n.value = !1);
    });
  function _() {
    s.value && (n.value = !n.value);
  }
  return {
    collapsed: n,
    collapsible: s,
    isLink: o,
    isActiveLink: l,
    hasActiveLink: d,
    hasChildren: f,
    toggle: _,
  };
}
const zt = g({
  __name: "VPSkipLink",
  setup(e) {
    const t = J(),
      n = S();
    q(
      () => t.path,
      () => n.value.focus(),
    );
    function s({ target: o }) {
      const l = document.querySelector(decodeURIComponent(o.hash));
      if (l) {
        const d = () => {
          l.removeAttribute("tabindex"), l.removeEventListener("blur", d);
        };
        l.setAttribute("tabindex", "-1"),
          l.addEventListener("blur", d),
          l.focus(),
          window.scrollTo(0, 0);
      }
    }
    return (o, l) => (
      a(),
      i(
        M,
        null,
        [
          r(
            "span",
            { ref_key: "backToTop", ref: n, tabindex: "-1" },
            null,
            512,
          ),
          r(
            "a",
            {
              href: "#VPContent",
              class: "VPSkipLink visually-hidden",
              onClick: s,
            },
            " Skip to content ",
          ),
        ],
        64,
      )
    );
  },
});
const Dt = p(zt, [["__scopeId", "data-v-c8616af1"]]),
  Ft = { key: 0, class: "VPBackdrop" },
  Gt = g({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, n) => (
        a(),
        y(
          ve,
          { name: "fade" },
          {
            default: v(() => [e.show ? (a(), i("div", Ft)) : m("", !0)]),
            _: 1,
          },
        )
      );
    },
  });
const Rt = p(Gt, [["__scopeId", "data-v-c79a1216"]]);
function Ut() {
  const e = S(!1);
  function t() {
    (e.value = !0), window.addEventListener("resize", o);
  }
  function n() {
    (e.value = !1), window.removeEventListener("resize", o);
  }
  function s() {
    e.value ? n() : t();
  }
  function o() {
    window.outerWidth >= 768 && n();
  }
  const l = J();
  return (
    q(() => l.path, n),
    { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: s }
  );
}
function Z({ removeCurrent: e = !0, correspondingLink: t = !1 } = {}) {
  const { site: n, localeIndex: s, page: o, theme: l } = w(),
    d = b(() => {
      var _, k;
      return {
        label: (_ = n.value.locales[s.value]) == null ? void 0 : _.label,
        link:
          ((k = n.value.locales[s.value]) == null ? void 0 : k.link) ||
          (s.value === "root" ? "/" : `/${s.value}/`),
      };
    });
  return {
    localeLinks: b(() =>
      Object.entries(n.value.locales).flatMap(([_, k]) =>
        e && d.value.label === k.label
          ? []
          : {
              text: k.label,
              link: jt(
                k.link || (_ === "root" ? "/" : `/${_}/`),
                l.value.i18nRouting !== !1 && t,
                o.value.relativePath.slice(d.value.link.length - 1),
                !n.value.cleanUrls,
              ),
            },
      ),
    ),
    currentLang: d,
  };
}
function jt(e, t, n, s) {
  return t
    ? e.replace(/\/$/, "") +
        ue(
          n
            .replace(/(^|\/)?index.md$/, "$1")
            .replace(/\.md$/, s ? ".html" : ""),
        )
    : e;
}
const qt = ["src", "alt"],
  Kt = { inheritAttrs: !1 },
  Wt = g({
    ...Kt,
    __name: "VPImage",
    props: { image: null, alt: null },
    setup(e) {
      return (t, n) => {
        const s = R("VPImage", !0);
        return e.image
          ? (a(),
            i(
              M,
              { key: 0 },
              [
                typeof e.image == "string" || "src" in e.image
                  ? (a(),
                    i(
                      "img",
                      ee(
                        { key: 0, class: "VPImage" },
                        typeof e.image == "string"
                          ? t.$attrs
                          : { ...e.image, ...t.$attrs },
                        {
                          src: c(_e)(
                            typeof e.image == "string" ? e.image : e.image.src,
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == "string"
                              ? ""
                              : e.image.alt || ""),
                        },
                      ),
                      null,
                      16,
                      qt,
                    ))
                  : (a(),
                    i(
                      M,
                      { key: 1 },
                      [
                        h(
                          s,
                          ee(
                            {
                              class: "dark",
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            t.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                        h(
                          s,
                          ee(
                            {
                              class: "light",
                              image: e.image.light,
                              alt: e.image.alt,
                            },
                            t.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : m("", !0);
      };
    },
  });
const me = p(Wt, [["__scopeId", "data-v-6db2186b"]]),
  Qt = ["href"],
  Yt = g({
    __name: "VPNavBarTitle",
    setup(e) {
      const { site: t, theme: n } = w(),
        { hasSidebar: s } = O(),
        { currentLang: o } = Z();
      return (l, d) => (
        a(),
        i(
          "div",
          { class: I(["VPNavBarTitle", { "has-sidebar": c(s) }]) },
          [
            r(
              "a",
              { class: "title", href: c(X)(c(o).link) },
              [
                u(l.$slots, "nav-bar-title-before", {}, void 0, !0),
                c(n).logo
                  ? (a(),
                    y(
                      me,
                      { key: 0, class: "logo", image: c(n).logo },
                      null,
                      8,
                      ["image"],
                    ))
                  : m("", !0),
                c(n).siteTitle
                  ? (a(), i(M, { key: 1 }, [C(P(c(n).siteTitle), 1)], 64))
                  : c(n).siteTitle === void 0
                  ? (a(), i(M, { key: 2 }, [C(P(c(t).title), 1)], 64))
                  : m("", !0),
                u(l.$slots, "nav-bar-title-after", {}, void 0, !0),
              ],
              8,
              Qt,
            ),
          ],
          2,
        )
      );
    },
  });
const Xt = p(Yt, [["__scopeId", "data-v-f4ef19a3"]]);
const Jt = { key: 0, class: "VPNavBarSearch" },
  Zt = { key: 1, id: "docsearch" },
  en = { class: "DocSearch-Button-Container" },
  tn = r(
    "svg",
    {
      "class": "DocSearch-Search-Icon",
      "width": "20",
      "height": "20",
      "viewBox": "0 0 20 20",
      "aria-label": "search icon",
    },
    [
      r("path", {
        "d": "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
        "stroke": "currentColor",
        "fill": "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1,
  ),
  nn = { class: "DocSearch-Button-Placeholder" },
  sn = r(
    "span",
    { class: "DocSearch-Button-Keys" },
    [
      r("kbd", { class: "DocSearch-Button-Key" }),
      r("kbd", { class: "DocSearch-Button-Key" }, "K"),
    ],
    -1,
  ),
  on = g({
    __name: "VPNavBarSearch",
    setup(e) {
      ct(($) => ({ "7fe983ec": l.value }));
      const t = () => null,
        { theme: n, localeIndex: s } = w(),
        o = S(!1),
        l = S("'Meta'"),
        d = b(() => {
          var $, L, V, x, N, A, T, z;
          return (
            ((N =
              (x =
                (V =
                  (L = ($ = n.value.algolia) == null ? void 0 : $.locales) ==
                  null
                    ? void 0
                    : L[s.value]) == null
                  ? void 0
                  : V.translations) == null
                ? void 0
                : x.button) == null
              ? void 0
              : N.buttonText) ||
            ((z =
              (T = (A = n.value.algolia) == null ? void 0 : A.translations) ==
              null
                ? void 0
                : T.button) == null
              ? void 0
              : z.buttonText) ||
            "Search"
          );
        }),
        f = () => {
          const $ = "VPAlgoliaPreconnect";
          (window.requestIdleCallback || setTimeout)(() => {
            const V = document.createElement("link");
            (V.id = $),
              (V.rel = "preconnect"),
              (V.href = `https://${n.value.algolia.appId}-dsn.algolia.net`),
              (V.crossOrigin = ""),
              document.head.appendChild(V);
          });
        };
      G(() => {
        if (!n.value.algolia) return;
        f(),
          (l.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
            ? "'⌘'"
            : "'Ctrl'");
        const $ = (V) => {
            V.key === "k" &&
              (V.ctrlKey || V.metaKey) &&
              (V.preventDefault(), _(), L());
          },
          L = () => {
            window.removeEventListener("keydown", $);
          };
        window.addEventListener("keydown", $), ae(L);
      });
      function _() {
        o.value || ((o.value = !0), setTimeout(k, 16));
      }
      function k() {
        const $ = new Event("keydown");
        ($.key = "k"),
          ($.metaKey = !0),
          window.dispatchEvent($),
          setTimeout(() => {
            document.querySelector(".DocSearch-Modal") || k();
          }, 16);
      }
      return ($, L) =>
        c(n).algolia
          ? (a(),
            i("div", Jt, [
              o.value
                ? (a(),
                  y(c(t), { key: 0, algolia: c(n).algolia }, null, 8, [
                    "algolia",
                  ]))
                : (a(),
                  i("div", Zt, [
                    r(
                      "button",
                      {
                        "type": "button",
                        "class": "DocSearch DocSearch-Button",
                        "aria-label": "Search",
                        "onClick": _,
                      },
                      [r("span", en, [tn, r("span", nn, P(c(d)), 1)]), sn],
                    ),
                  ])),
            ]))
          : m("", !0);
    },
  });
const an = {},
  cn = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "24px",
    "viewBox": "0 0 24 24",
    "width": "24px",
  },
  ln = r("path", { d: "M0 0h24v24H0V0z", fill: "none" }, null, -1),
  rn = r(
    "path",
    { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" },
    null,
    -1,
  ),
  un = [ln, rn];
function dn(e, t) {
  return a(), i("svg", cn, un);
}
const _n = p(an, [["render", dn]]),
  vn = g({
    __name: "VPLink",
    props: {
      tag: null,
      href: null,
      noIcon: { type: Boolean },
      target: null,
      rel: null,
    },
    setup(e) {
      const t = e,
        n = b(() => (t.tag ?? t.href ? "a" : "span")),
        s = b(() => t.href && ze.test(t.href));
      return (o, l) => (
        a(),
        y(
          U(c(n)),
          {
            class: I(["VPLink", { link: e.href }]),
            href: e.href ? c(X)(e.href) : void 0,
            target: e.target || (c(s) ? "_blank" : void 0),
            rel: e.rel || (c(s) ? "noreferrer" : void 0),
          },
          {
            default: v(() => [
              u(o.$slots, "default", {}, void 0, !0),
              c(s) && !e.noIcon
                ? (a(), y(_n, { key: 0, class: "icon" }))
                : m("", !0),
            ]),
            _: 3,
          },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  });
const D = p(vn, [["__scopeId", "data-v-8f4dc553"]]),
  fn = g({
    __name: "VPNavBarMenuLink",
    props: { item: null },
    setup(e) {
      const { page: t } = w();
      return (n, s) => (
        a(),
        y(
          D,
          {
            class: I({
              VPNavBarMenuLink: !0,
              active: c(K)(
                c(t).relativePath,
                e.item.activeMatch || e.item.link,
                !!e.item.activeMatch,
              ),
            }),
            href: e.item.link,
            target: e.item.target,
            rel: e.item.rel,
            tabindex: "0",
          },
          { default: v(() => [C(P(e.item.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  });
const hn = p(fn, [["__scopeId", "data-v-37adc828"]]),
  ge = S();
let Ue = !1,
  ie = 0;
function pn(e) {
  const t = S(!1);
  if (lt) {
    !Ue && mn(), ie++;
    const n = q(ge, (s) => {
      var o, l, d;
      s === e.el.value || ((o = e.el.value) != null && o.contains(s))
        ? ((t.value = !0), (l = e.onFocus) == null || l.call(e))
        : ((t.value = !1), (d = e.onBlur) == null || d.call(e));
    });
    ae(() => {
      n(), ie--, ie || gn();
    });
  }
  return it(t);
}
function mn() {
  document.addEventListener("focusin", je),
    (Ue = !0),
    (ge.value = document.activeElement);
}
function gn() {
  document.removeEventListener("focusin", je);
}
function je() {
  ge.value = document.activeElement;
}
const yn = {},
  bn = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  kn = r(
    "path",
    {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
    },
    null,
    -1,
  ),
  $n = [kn];
function Pn(e, t) {
  return a(), i("svg", bn, $n);
}
const qe = p(yn, [["render", Pn]]),
  wn = {},
  Vn = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  xn = r("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
  Sn = r("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
  Ln = r("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
  Mn = [xn, Sn, Ln];
function In(e, t) {
  return a(), i("svg", Vn, Mn);
}
const Cn = p(wn, [["render", In]]),
  Bn = { class: "VPMenuLink" },
  Nn = g({
    __name: "VPMenuLink",
    props: { item: null },
    setup(e) {
      const { page: t } = w();
      return (n, s) => (
        a(),
        i("div", Bn, [
          h(
            D,
            {
              class: I({
                active: c(K)(
                  c(t).relativePath,
                  e.item.activeMatch || e.item.link,
                  !!e.item.activeMatch,
                ),
              }),
              href: e.item.link,
              target: e.item.target,
              rel: e.item.rel,
            },
            { default: v(() => [C(P(e.item.text), 1)]), _: 1 },
            8,
            ["class", "href", "target", "rel"],
          ),
        ])
      );
    },
  });
const ce = p(Nn, [["__scopeId", "data-v-d2c93bab"]]),
  Tn = { class: "VPMenuGroup" },
  An = { key: 0, class: "title" },
  En = g({
    __name: "VPMenuGroup",
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        a(),
        i("div", Tn, [
          e.text ? (a(), i("p", An, P(e.text), 1)) : m("", !0),
          (a(!0),
          i(
            M,
            null,
            B(
              e.items,
              (s) => (
                a(),
                i(
                  M,
                  null,
                  [
                    "link" in s
                      ? (a(), y(ce, { key: 0, item: s }, null, 8, ["item"]))
                      : m("", !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      );
    },
  });
const Hn = p(En, [["__scopeId", "data-v-69e747b5"]]),
  On = { class: "VPMenu" },
  zn = { key: 0, class: "items" },
  Dn = g({
    __name: "VPMenu",
    props: { items: null },
    setup(e) {
      return (t, n) => (
        a(),
        i("div", On, [
          e.items
            ? (a(),
              i("div", zn, [
                (a(!0),
                i(
                  M,
                  null,
                  B(
                    e.items,
                    (s) => (
                      a(),
                      i(
                        M,
                        { key: s.text },
                        [
                          "link" in s
                            ? (a(),
                              y(ce, { key: 0, item: s }, null, 8, ["item"]))
                            : (a(),
                              y(
                                Hn,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ["text", "items"],
                              )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : m("", !0),
          u(t.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  });
const Fn = p(Dn, [["__scopeId", "data-v-e7ea1737"]]),
  Gn = ["aria-expanded", "aria-label"],
  Rn = { key: 0, class: "text" },
  Un = { class: "menu" },
  jn = g({
    __name: "VPFlyout",
    props: { icon: null, button: null, label: null, items: null },
    setup(e) {
      const t = S(!1),
        n = S();
      pn({ el: n, onBlur: s });
      function s() {
        t.value = !1;
      }
      return (o, l) => (
        a(),
        i(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: n,
            onMouseenter: l[1] || (l[1] = (d) => (t.value = !0)),
            onMouseleave: l[2] || (l[2] = (d) => (t.value = !1)),
          },
          [
            r(
              "button",
              {
                "type": "button",
                "class": "button",
                "aria-haspopup": "true",
                "aria-expanded": t.value,
                "aria-label": e.label,
                "onClick": l[0] || (l[0] = (d) => (t.value = !t.value)),
              },
              [
                e.button || e.icon
                  ? (a(),
                    i("span", Rn, [
                      e.icon
                        ? (a(), y(U(e.icon), { key: 0, class: "option-icon" }))
                        : m("", !0),
                      C(" " + P(e.button) + " ", 1),
                      h(qe, { class: "text-icon" }),
                    ]))
                  : (a(), y(Cn, { key: 1, class: "icon" })),
              ],
              8,
              Gn,
            ),
            r("div", Un, [
              h(
                Fn,
                { items: e.items },
                {
                  default: v(() => [u(o.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"],
              ),
            ]),
          ],
          544,
        )
      );
    },
  });
const ye = p(jn, [["__scopeId", "data-v-764effdf"]]),
  qn = g({
    __name: "VPNavBarMenuGroup",
    props: { item: null },
    setup(e) {
      const { page: t } = w();
      return (n, s) => (
        a(),
        y(
          ye,
          {
            class: I({
              VPNavBarMenuGroup: !0,
              active: c(K)(
                c(t).relativePath,
                e.item.activeMatch,
                !!e.item.activeMatch,
              ),
            }),
            button: e.item.text,
            items: e.item.items,
          },
          null,
          8,
          ["class", "button", "items"],
        )
      );
    },
  }),
  Kn = (e) => (E("data-v-7f418b0f"), (e = e()), H(), e),
  Wn = {
    "key": 0,
    "aria-labelledby": "main-nav-aria-label",
    "class": "VPNavBarMenu",
  },
  Qn = Kn(() =>
    r(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      "Main Navigation",
      -1,
    ),
  ),
  Yn = g({
    __name: "VPNavBarMenu",
    setup(e) {
      const { theme: t } = w();
      return (n, s) =>
        c(t).nav
          ? (a(),
            i("nav", Wn, [
              Qn,
              (a(!0),
              i(
                M,
                null,
                B(
                  c(t).nav,
                  (o) => (
                    a(),
                    i(
                      M,
                      { key: o.text },
                      [
                        "link" in o
                          ? (a(), y(hn, { key: 0, item: o }, null, 8, ["item"]))
                          : (a(),
                            y(qn, { key: 1, item: o }, null, 8, ["item"])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : m("", !0);
    },
  });
const Xn = p(Yn, [["__scopeId", "data-v-7f418b0f"]]),
  Jn = {},
  Zn = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  es = r("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
  ts = r(
    "path",
    {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v",
    },
    null,
    -1,
  ),
  ns = [es, ts];
function ss(e, t) {
  return a(), i("svg", Zn, ns);
}
const Ke = p(Jn, [["render", ss]]),
  os = { class: "items" },
  as = { class: "title" },
  cs = g({
    __name: "VPNavBarTranslations",
    setup(e) {
      const { theme: t } = w(),
        { localeLinks: n, currentLang: s } = Z({ correspondingLink: !0 });
      return (o, l) =>
        c(n).length && c(s).label
          ? (a(),
            y(
              ye,
              {
                key: 0,
                class: "VPNavBarTranslations",
                icon: Ke,
                label: c(t).langMenuLabel || "Change language",
              },
              {
                default: v(() => [
                  r("div", os, [
                    r("p", as, P(c(s).label), 1),
                    (a(!0),
                    i(
                      M,
                      null,
                      B(
                        c(n),
                        (d) => (
                          a(),
                          y(ce, { key: d.link, item: d }, null, 8, ["item"])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["label"],
            ))
          : m("", !0);
    },
  });
const ls = p(cs, [["__scopeId", "data-v-74abcbb9"]]);
const is = {},
  rs = { class: "VPSwitch", type: "button", role: "switch" },
  us = { class: "check" },
  ds = { key: 0, class: "icon" };
function _s(e, t) {
  return (
    a(),
    i("button", rs, [
      r("span", us, [
        e.$slots.default
          ? (a(), i("span", ds, [u(e.$slots, "default", {}, void 0, !0)]))
          : m("", !0),
      ]),
    ])
  );
}
const vs = p(is, [
    ["render", _s],
    ["__scopeId", "data-v-f3c41672"],
  ]),
  fs = {},
  hs = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  ps = rt(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  ms = [ps];
function gs(e, t) {
  return a(), i("svg", hs, ms);
}
const ys = p(fs, [["render", gs]]),
  bs = {},
  ks = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  $s = r(
    "path",
    {
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
    },
    null,
    -1,
  ),
  Ps = [$s];
function ws(e, t) {
  return a(), i("svg", ks, Ps);
}
const Vs = p(bs, [["render", ws]]),
  xs = { title: "toggle dark mode" },
  Ss = g({
    __name: "VPSwitchAppearance",
    setup(e) {
      const { site: t, isDark: n } = w(),
        s = S(!1),
        o = typeof localStorage < "u" ? l() : () => {};
      G(() => {
        s.value = document.documentElement.classList.contains("dark");
      });
      function l() {
        const d = window.matchMedia("(prefers-color-scheme: dark)"),
          f = document.documentElement.classList;
        let _ = localStorage.getItem(Me),
          k =
            (t.value.appearance === "dark" && _ == null) ||
            (_ === "auto" || _ == null ? d.matches : _ === "dark");
        d.onchange = (V) => {
          _ === "auto" && L((k = V.matches));
        };
        function $() {
          L((k = !k)),
            (_ = k
              ? d.matches
                ? "auto"
                : "dark"
              : d.matches
              ? "light"
              : "auto"),
            localStorage.setItem(Me, _);
        }
        function L(V) {
          const x = document.createElement("style");
          (x.type = "text/css"),
            x.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`),
            ),
            document.head.appendChild(x),
            (s.value = V),
            f[V ? "add" : "remove"]("dark"),
            window.getComputedStyle(x).opacity,
            document.head.removeChild(x);
        }
        return $;
      }
      return (
        q(s, (d) => {
          n.value = d;
        }),
        (d, f) => (
          a(),
          i("label", xs, [
            h(
              vs,
              {
                "class": "VPSwitchAppearance",
                "aria-checked": s.value,
                "onClick": c(o),
              },
              {
                default: v(() => [
                  h(ys, { class: "sun" }),
                  h(Vs, { class: "moon" }),
                ]),
                _: 1,
              },
              8,
              ["aria-checked", "onClick"],
            ),
          ])
        )
      );
    },
  });
const be = p(Ss, [["__scopeId", "data-v-a9c8afb8"]]),
  Ls = { key: 0, class: "VPNavBarAppearance" },
  Ms = g({
    __name: "VPNavBarAppearance",
    setup(e) {
      const { site: t } = w();
      return (n, s) =>
        c(t).appearance ? (a(), i("div", Ls, [h(be)])) : m("", !0);
    },
  });
const Is = p(Ms, [["__scopeId", "data-v-f6a63727"]]),
  Cs = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  Bs = ["href", "aria-label", "innerHTML"],
  Ns = g({
    __name: "VPSocialLink",
    props: { icon: null, link: null },
    setup(e) {
      const t = e,
        n = b(() => (typeof t.icon == "object" ? t.icon.svg : Cs[t.icon]));
      return (s, o) => (
        a(),
        i(
          "a",
          {
            "class": "VPSocialLink",
            "href": e.link,
            "aria-label": typeof e.icon == "string" ? e.icon : "",
            "target": "_blank",
            "rel": "noopener",
            "innerHTML": c(n),
          },
          null,
          8,
          Bs,
        )
      );
    },
  });
const Ts = p(Ns, [["__scopeId", "data-v-c530cc0a"]]),
  As = { class: "VPSocialLinks" },
  Es = g({
    __name: "VPSocialLinks",
    props: { links: null },
    setup(e) {
      return (t, n) => (
        a(),
        i("div", As, [
          (a(!0),
          i(
            M,
            null,
            B(
              e.links,
              ({ link: s, icon: o }) => (
                a(),
                y(Ts, { key: s, icon: o, link: s }, null, 8, ["icon", "link"])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const ke = p(Es, [["__scopeId", "data-v-f6988cfb"]]),
  Hs = g({
    __name: "VPNavBarSocialLinks",
    setup(e) {
      const { theme: t } = w();
      return (n, s) =>
        c(t).socialLinks
          ? (a(),
            y(
              ke,
              { key: 0, class: "VPNavBarSocialLinks", links: c(t).socialLinks },
              null,
              8,
              ["links"],
            ))
          : m("", !0);
    },
  });
const Os = p(Hs, [["__scopeId", "data-v-0394ad82"]]),
  zs = { key: 0, class: "group translations" },
  Ds = { class: "trans-title" },
  Fs = { key: 1, class: "group" },
  Gs = { class: "item appearance" },
  Rs = { class: "label" },
  Us = { class: "appearance-action" },
  js = { key: 2, class: "group" },
  qs = { class: "item social-links" },
  Ks = g({
    __name: "VPNavBarExtra",
    setup(e) {
      const { site: t, theme: n } = w(),
        { localeLinks: s, currentLang: o } = Z({ correspondingLink: !0 }),
        l = b(
          () =>
            (s.value.length && o.value.label) ||
            t.value.appearance ||
            n.value.socialLinks,
        );
      return (d, f) =>
        c(l)
          ? (a(),
            y(
              ye,
              { key: 0, class: "VPNavBarExtra", label: "extra navigation" },
              {
                default: v(() => [
                  c(s).length && c(o).label
                    ? (a(),
                      i("div", zs, [
                        r("p", Ds, P(c(o).label), 1),
                        (a(!0),
                        i(
                          M,
                          null,
                          B(
                            c(s),
                            (_) => (
                              a(),
                              y(ce, { key: _.link, item: _ }, null, 8, ["item"])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : m("", !0),
                  c(t).appearance
                    ? (a(),
                      i("div", Fs, [
                        r("div", Gs, [
                          r(
                            "p",
                            Rs,
                            P(c(n).darkModeSwitchLabel || "Appearance"),
                            1,
                          ),
                          r("div", Us, [h(be)]),
                        ]),
                      ]))
                    : m("", !0),
                  c(n).socialLinks
                    ? (a(),
                      i("div", js, [
                        r("div", qs, [
                          h(
                            ke,
                            {
                              class: "social-links-list",
                              links: c(n).socialLinks,
                            },
                            null,
                            8,
                            ["links"],
                          ),
                        ]),
                      ]))
                    : m("", !0),
                ]),
                _: 1,
              },
            ))
          : m("", !0);
    },
  });
const Ws = p(Ks, [["__scopeId", "data-v-40855f84"]]),
  Qs = (e) => (E("data-v-e5dd9c1c"), (e = e()), H(), e),
  Ys = ["aria-expanded"],
  Xs = Qs(() =>
    r(
      "span",
      { class: "container" },
      [
        r("span", { class: "top" }),
        r("span", { class: "middle" }),
        r("span", { class: "bottom" }),
      ],
      -1,
    ),
  ),
  Js = [Xs],
  Zs = g({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(e) {
      return (t, n) => (
        a(),
        i(
          "button",
          {
            "type": "button",
            "class": I(["VPNavBarHamburger", { active: e.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            "onClick": n[0] || (n[0] = (s) => t.$emit("click")),
          },
          Js,
          10,
          Ys,
        )
      );
    },
  });
const eo = p(Zs, [["__scopeId", "data-v-e5dd9c1c"]]),
  to = (e) => (E("data-v-1d30fa41"), (e = e()), H(), e),
  no = { class: "container" },
  so = { class: "title" },
  oo = { class: "content" },
  ao = to(() => r("div", { class: "curtain" }, null, -1)),
  co = { class: "content-body" },
  lo = g({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(e) {
      const { y: t } = Nt(),
        { hasSidebar: n } = O(),
        s = b(() => ({ "has-sidebar": n.value, "fill": t.value > 0 }));
      return (o, l) => (
        a(),
        i(
          "div",
          { class: I(["VPNavBar", c(s)]) },
          [
            r("div", no, [
              r("div", so, [
                h(Xt, null, {
                  "nav-bar-title-before": v(() => [
                    u(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                  ]),
                  "nav-bar-title-after": v(() => [
                    u(o.$slots, "nav-bar-title-after", {}, void 0, !0),
                  ]),
                  "_": 3,
                }),
              ]),
              r("div", oo, [
                ao,
                r("div", co, [
                  u(o.$slots, "nav-bar-content-before", {}, void 0, !0),
                  h(on, { class: "search" }),
                  h(Xn, { class: "menu" }),
                  h(ls, { class: "translations" }),
                  h(Is, { class: "appearance" }),
                  h(Os, { class: "social-links" }),
                  h(Ws, { class: "extra" }),
                  u(o.$slots, "nav-bar-content-after", {}, void 0, !0),
                  h(
                    eo,
                    {
                      class: "hamburger",
                      active: e.isScreenOpen,
                      onClick: l[0] || (l[0] = (d) => o.$emit("toggle-screen")),
                    },
                    null,
                    8,
                    ["active"],
                  ),
                ]),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  });
const io = p(lo, [["__scopeId", "data-v-1d30fa41"]]);
function ro(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  } else return Array.from(e);
}
var $e = !1;
if (typeof window < "u") {
  var Ee = {
    get passive() {
      $e = !0;
    },
  };
  window.addEventListener("testPassive", null, Ee),
    window.removeEventListener("testPassive", null, Ee);
}
var ne =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  j = [],
  se = !1,
  Pe = -1,
  W = void 0,
  F = void 0,
  Q = void 0,
  We = function (t) {
    return j.some(function (n) {
      return !!(n.options.allowTouchMove && n.options.allowTouchMove(t));
    });
  },
  oe = function (t) {
    var n = t || window.event;
    return We(n.target) || n.touches.length > 1
      ? !0
      : (n.preventDefault && n.preventDefault(), !1);
  },
  uo = function (t) {
    if (Q === void 0) {
      var n = !!t && t.reserveScrollBarGap === !0,
        s = window.innerWidth - document.documentElement.clientWidth;
      if (n && s > 0) {
        var o = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right"),
          10,
        );
        (Q = document.body.style.paddingRight),
          (document.body.style.paddingRight = o + s + "px");
      }
    }
    W === void 0 &&
      ((W = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  _o = function () {
    Q !== void 0 && ((document.body.style.paddingRight = Q), (Q = void 0)),
      W !== void 0 && ((document.body.style.overflow = W), (W = void 0));
  },
  vo = function () {
    return window.requestAnimationFrame(function () {
      if (F === void 0) {
        F = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var t = window,
          n = t.scrollY,
          s = t.scrollX,
          o = t.innerHeight;
        (document.body.style.position = "fixed"),
          (document.body.style.top = -n),
          (document.body.style.left = -s),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var l = o - window.innerHeight;
              l && n >= o && (document.body.style.top = -(n + l));
            });
          }, 300);
      }
    });
  },
  fo = function () {
    if (F !== void 0) {
      var t = -parseInt(document.body.style.top, 10),
        n = -parseInt(document.body.style.left, 10);
      (document.body.style.position = F.position),
        (document.body.style.top = F.top),
        (document.body.style.left = F.left),
        window.scrollTo(n, t),
        (F = void 0);
    }
  },
  ho = function (t) {
    return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
  },
  po = function (t, n) {
    var s = t.targetTouches[0].clientY - Pe;
    return We(t.target)
      ? !1
      : (n && n.scrollTop === 0 && s > 0) || (ho(n) && s < 0)
      ? oe(t)
      : (t.stopPropagation(), !0);
  },
  Qe = function (t, n) {
    if (!t) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.",
      );
      return;
    }
    if (
      !j.some(function (o) {
        return o.targetElement === t;
      })
    ) {
      var s = { targetElement: t, options: n || {} };
      (j = [].concat(ro(j), [s])),
        ne ? vo() : uo(n),
        ne &&
          ((t.ontouchstart = function (o) {
            o.targetTouches.length === 1 && (Pe = o.targetTouches[0].clientY);
          }),
          (t.ontouchmove = function (o) {
            o.targetTouches.length === 1 && po(o, t);
          }),
          se ||
            (document.addEventListener(
              "touchmove",
              oe,
              $e ? { passive: !1 } : void 0,
            ),
            (se = !0)));
    }
  },
  Ye = function () {
    ne &&
      (j.forEach(function (t) {
        (t.targetElement.ontouchstart = null),
          (t.targetElement.ontouchmove = null);
      }),
      se &&
        (document.removeEventListener(
          "touchmove",
          oe,
          $e ? { passive: !1 } : void 0,
        ),
        (se = !1)),
      (Pe = -1)),
      ne ? fo() : _o(),
      (j = []);
  };
const mo = g({
  __name: "VPNavScreenMenuLink",
  props: { text: null, link: null },
  setup(e) {
    const t = fe("close-screen");
    return (n, s) => (
      a(),
      y(
        D,
        { class: "VPNavScreenMenuLink", href: e.link, onClick: c(t) },
        { default: v(() => [C(P(e.text), 1)]), _: 1 },
        8,
        ["href", "onClick"],
      )
    );
  },
});
const go = p(mo, [["__scopeId", "data-v-c328f34f"]]),
  yo = {},
  bo = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  ko = r(
    "path",
    {
      d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
    },
    null,
    -1,
  ),
  $o = [ko];
function Po(e, t) {
  return a(), i("svg", bo, $o);
}
const wo = p(yo, [["render", Po]]),
  Vo = g({
    __name: "VPNavScreenMenuGroupLink",
    props: { text: null, link: null },
    setup(e) {
      const t = fe("close-screen");
      return (n, s) => (
        a(),
        y(
          D,
          { class: "VPNavScreenMenuGroupLink", href: e.link, onClick: c(t) },
          { default: v(() => [C(P(e.text), 1)]), _: 1 },
          8,
          ["href", "onClick"],
        )
      );
    },
  });
const Xe = p(Vo, [["__scopeId", "data-v-3d20956d"]]),
  xo = { class: "VPNavScreenMenuGroupSection" },
  So = { key: 0, class: "title" },
  Lo = g({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        a(),
        i("div", xo, [
          e.text ? (a(), i("p", So, P(e.text), 1)) : m("", !0),
          (a(!0),
          i(
            M,
            null,
            B(
              e.items,
              (s) => (
                a(),
                y(Xe, { key: s.text, text: s.text, link: s.link }, null, 8, [
                  "text",
                  "link",
                ])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const Mo = p(Lo, [["__scopeId", "data-v-7478538b"]]),
  Io = ["aria-controls", "aria-expanded"],
  Co = { class: "button-text" },
  Bo = ["id"],
  No = { key: 1, class: "group" },
  To = g({
    __name: "VPNavScreenMenuGroup",
    props: { text: null, items: null },
    setup(e) {
      const t = e,
        n = S(!1),
        s = b(() => `NavScreenGroup-${t.text.replace(" ", "-").toLowerCase()}`);
      function o() {
        n.value = !n.value;
      }
      return (l, d) => (
        a(),
        i(
          "div",
          { class: I(["VPNavScreenMenuGroup", { open: n.value }]) },
          [
            r(
              "button",
              {
                "class": "button",
                "aria-controls": c(s),
                "aria-expanded": n.value,
                "onClick": o,
              },
              [r("span", Co, P(e.text), 1), h(wo, { class: "button-icon" })],
              8,
              Io,
            ),
            r(
              "div",
              { id: c(s), class: "items" },
              [
                (a(!0),
                i(
                  M,
                  null,
                  B(
                    e.items,
                    (f) => (
                      a(),
                      i(
                        M,
                        { key: f.text },
                        [
                          "link" in f
                            ? (a(),
                              i("div", { key: f.text, class: "item" }, [
                                h(Xe, { text: f.text, link: f.link }, null, 8, [
                                  "text",
                                  "link",
                                ]),
                              ]))
                            : (a(),
                              i("div", No, [
                                h(
                                  Mo,
                                  { text: f.text, items: f.items },
                                  null,
                                  8,
                                  ["text", "items"],
                                ),
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              Bo,
            ),
          ],
          2,
        )
      );
    },
  });
const Ao = p(To, [["__scopeId", "data-v-a9a19324"]]),
  Eo = { key: 0, class: "VPNavScreenMenu" },
  Ho = g({
    __name: "VPNavScreenMenu",
    setup(e) {
      const { theme: t } = w();
      return (n, s) =>
        c(t).nav
          ? (a(),
            i("nav", Eo, [
              (a(!0),
              i(
                M,
                null,
                B(
                  c(t).nav,
                  (o) => (
                    a(),
                    i(
                      M,
                      { key: o.text },
                      [
                        "link" in o
                          ? (a(),
                            y(
                              go,
                              { key: 0, text: o.text, link: o.link },
                              null,
                              8,
                              ["text", "link"],
                            ))
                          : (a(),
                            y(
                              Ao,
                              { key: 1, text: o.text || "", items: o.items },
                              null,
                              8,
                              ["text", "items"],
                            )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : m("", !0);
    },
  }),
  Oo = { key: 0, class: "VPNavScreenAppearance" },
  zo = { class: "text" },
  Do = g({
    __name: "VPNavScreenAppearance",
    setup(e) {
      const { site: t, theme: n } = w();
      return (s, o) =>
        c(t).appearance
          ? (a(),
            i("div", Oo, [
              r("p", zo, P(c(n).darkModeSwitchLabel || "Appearance"), 1),
              h(be),
            ]))
          : m("", !0);
    },
  });
const Fo = p(Do, [["__scopeId", "data-v-add8f686"]]),
  Go = { class: "list" },
  Ro = g({
    __name: "VPNavScreenTranslations",
    setup(e) {
      const { localeLinks: t, currentLang: n } = Z({ correspondingLink: !0 }),
        s = S(!1);
      function o() {
        s.value = !s.value;
      }
      return (l, d) =>
        c(t).length && c(n).label
          ? (a(),
            i(
              "div",
              {
                key: 0,
                class: I(["VPNavScreenTranslations", { open: s.value }]),
              },
              [
                r("button", { class: "title", onClick: o }, [
                  h(Ke, { class: "icon lang" }),
                  C(" " + P(c(n).label) + " ", 1),
                  h(qe, { class: "icon chevron" }),
                ]),
                r("ul", Go, [
                  (a(!0),
                  i(
                    M,
                    null,
                    B(
                      c(t),
                      (f) => (
                        a(),
                        i("li", { key: f.link, class: "item" }, [
                          h(
                            D,
                            { class: "link", href: f.link },
                            { default: v(() => [C(P(f.text), 1)]), _: 2 },
                            1032,
                            ["href"],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : m("", !0);
    },
  });
const Uo = p(Ro, [["__scopeId", "data-v-d72aa483"]]),
  jo = g({
    __name: "VPNavScreenSocialLinks",
    setup(e) {
      const { theme: t } = w();
      return (n, s) =>
        c(t).socialLinks
          ? (a(),
            y(
              ke,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: c(t).socialLinks,
              },
              null,
              8,
              ["links"],
            ))
          : m("", !0);
    },
  }),
  qo = { class: "container" },
  Ko = g({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = S(null);
      function n() {
        Qe(t.value, { reserveScrollBarGap: !0 });
      }
      function s() {
        Ye();
      }
      return (o, l) => (
        a(),
        y(
          ve,
          { name: "fade", onEnter: n, onAfterLeave: s },
          {
            default: v(() => [
              e.open
                ? (a(),
                  i(
                    "div",
                    { key: 0, class: "VPNavScreen", ref_key: "screen", ref: t },
                    [
                      r("div", qo, [
                        u(
                          o.$slots,
                          "nav-screen-content-before",
                          {},
                          void 0,
                          !0,
                        ),
                        h(Ho, { class: "menu" }),
                        h(Uo, { class: "translations" }),
                        h(Fo, { class: "appearance" }),
                        h(jo, { class: "social-links" }),
                        u(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : m("", !0),
            ]),
            _: 3,
          },
        )
      );
    },
  });
const Wo = p(Ko, [["__scopeId", "data-v-724636ae"]]),
  Qo = { class: "VPNav" },
  Yo = g({
    __name: "VPNav",
    setup(e) {
      const { isScreenOpen: t, closeScreen: n, toggleScreen: s } = Ut();
      return (
        te("close-screen", n),
        (o, l) => (
          a(),
          i("header", Qo, [
            h(
              io,
              { "is-screen-open": c(t), "onToggleScreen": c(s) },
              {
                "nav-bar-title-before": v(() => [
                  u(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                ]),
                "nav-bar-title-after": v(() => [
                  u(o.$slots, "nav-bar-title-after", {}, void 0, !0),
                ]),
                "nav-bar-content-before": v(() => [
                  u(o.$slots, "nav-bar-content-before", {}, void 0, !0),
                ]),
                "nav-bar-content-after": v(() => [
                  u(o.$slots, "nav-bar-content-after", {}, void 0, !0),
                ]),
                "_": 3,
              },
              8,
              ["is-screen-open", "onToggleScreen"],
            ),
            h(
              Wo,
              { open: c(t) },
              {
                "nav-screen-content-before": v(() => [
                  u(o.$slots, "nav-screen-content-before", {}, void 0, !0),
                ]),
                "nav-screen-content-after": v(() => [
                  u(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                ]),
                "_": 3,
              },
              8,
              ["open"],
            ),
          ])
        )
      );
    },
  });
const Xo = p(Yo, [["__scopeId", "data-v-7e5bc4a5"]]),
  Jo = {},
  Zo = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  ea = r(
    "path",
    {
      d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
    },
    null,
    -1,
  ),
  ta = r(
    "path",
    { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
    null,
    -1,
  ),
  na = r(
    "path",
    {
      d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
    },
    null,
    -1,
  ),
  sa = r(
    "path",
    {
      d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
    },
    null,
    -1,
  ),
  oa = [ea, ta, na, sa];
function aa(e, t) {
  return a(), i("svg", Zo, oa);
}
const ca = p(Jo, [["render", aa]]);
function la() {
  const { hasSidebar: e } = O(),
    t = re("(min-width: 960px)"),
    n = re("(min-width: 1280px)");
  return {
    isAsideEnabled: b(() =>
      !n.value && !t.value ? !1 : e.value ? n.value : t.value,
    ),
  };
}
const ia = 71;
function we(e) {
  return (
    (typeof e.outline == "object" &&
      !Array.isArray(e.outline) &&
      e.outline.label) ||
    e.outlineTitle ||
    "On this page"
  );
}
function Ve(e) {
  const t = [...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")]
    .filter((n) => n.id && n.hasChildNodes())
    .map((n) => {
      const s = Number(n.tagName[1]);
      return { title: ra(n), link: "#" + n.id, level: s };
    });
  return ua(t, e);
}
function ra(e) {
  let t = "";
  for (const n of e.childNodes)
    if (n.nodeType === 1) {
      if (
        n.classList.contains("VPBadge") ||
        n.classList.contains("header-anchor")
      )
        continue;
      t += n.textContent;
    } else n.nodeType === 3 && (t += n.textContent);
  return t.trim();
}
function ua(e, t) {
  if (t === !1) return [];
  const n = (typeof t == "object" && !Array.isArray(t) ? t.level : t) || 2,
    [s, o] = typeof n == "number" ? [n, n] : n === "deep" ? [2, 6] : n;
  e = e.filter((d) => d.level >= s && d.level <= o);
  const l = [];
  e: for (let d = 0; d < e.length; d++) {
    const f = e[d];
    if (d === 0) l.push(f);
    else {
      for (let _ = d - 1; _ >= 0; _--) {
        const k = e[_];
        if (k.level < f.level) {
          (k.children || (k.children = [])).push(f);
          continue e;
        }
      }
      l.push(f);
    }
  }
  return l;
}
function da(e, t) {
  const { isAsideEnabled: n } = la(),
    s = Tt(l, 100);
  let o = null;
  G(() => {
    requestAnimationFrame(l), window.addEventListener("scroll", s);
  }),
    ut(() => {
      d(location.hash);
    }),
    ae(() => {
      window.removeEventListener("scroll", s);
    });
  function l() {
    if (!n.value) return;
    const f = [].slice.call(e.value.querySelectorAll(".outline-link")),
      _ = [].slice
        .call(document.querySelectorAll(".content .header-anchor"))
        .filter((x) =>
          f.some((N) => N.hash === x.hash && x.offsetParent !== null),
        ),
      k = window.scrollY,
      $ = window.innerHeight,
      L = document.body.offsetHeight,
      V = Math.abs(k + $ - L) < 1;
    if (_.length && V) {
      d(_[_.length - 1].hash);
      return;
    }
    for (let x = 0; x < _.length; x++) {
      const N = _[x],
        A = _[x + 1],
        [T, z] = _a(x, N, A);
      if (T) {
        d(z);
        return;
      }
    }
  }
  function d(f) {
    o && o.classList.remove("active"),
      f !== null &&
        (o = e.value.querySelector(`a[href="${decodeURIComponent(f)}"]`));
    const _ = o;
    _
      ? (_.classList.add("active"),
        (t.value.style.top = _.offsetTop + 33 + "px"),
        (t.value.style.opacity = "1"))
      : ((t.value.style.top = "33px"), (t.value.style.opacity = "0"));
  }
}
function He(e) {
  return e.parentElement.offsetTop - ia;
}
function _a(e, t, n) {
  const s = window.scrollY;
  return e === 0 && s === 0
    ? [!0, null]
    : s < He(t)
    ? [!1, null]
    : !n || s < He(n)
    ? [!0, t.hash]
    : [!1, null];
}
const va = ["href"],
  fa = g({
    __name: "VPDocOutlineItem",
    props: { headers: null, root: { type: Boolean } },
    setup(e) {
      function t({ target: n }) {
        const s = "#" + n.href.split("#")[1],
          o = document.querySelector(decodeURIComponent(s));
        o == null || o.focus();
      }
      return (n, s) => {
        const o = R("VPDocOutlineItem", !0);
        return (
          a(),
          i(
            "ul",
            { class: I(e.root ? "root" : "nested") },
            [
              (a(!0),
              i(
                M,
                null,
                B(
                  e.headers,
                  ({ children: l, link: d, title: f }) => (
                    a(),
                    i("li", null, [
                      r(
                        "a",
                        { class: "outline-link", href: d, onClick: t },
                        P(f),
                        9,
                        va,
                      ),
                      l != null && l.length
                        ? (a(),
                          y(o, { key: 0, headers: l }, null, 8, ["headers"]))
                        : m("", !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        );
      };
    },
  });
const xe = p(fa, [["__scopeId", "data-v-8f12e865"]]),
  ha = {},
  pa = {
    "xmlns": "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "focusable": "false",
    "viewBox": "0 0 24 24",
  },
  ma = r(
    "path",
    {
      d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z",
    },
    null,
    -1,
  ),
  ga = [ma];
function ya(e, t) {
  return a(), i("svg", pa, ga);
}
const Se = p(ha, [["render", ya]]),
  ba = g({
    __name: "VPLocalNavOutlineDropdown",
    setup(e) {
      const { frontmatter: t, theme: n } = w(),
        s = S(!1),
        o = S(0),
        l = S();
      he(() => {
        s.value = !1;
      });
      function d() {
        (s.value = !s.value),
          (o.value = window.innerHeight + Math.min(window.scrollY - 64, 0));
      }
      function f(k) {
        k.target.classList.contains("outline-link") &&
          (l.value && (l.value.style.transition = "none"),
          Oe(() => {
            s.value = !1;
          }));
      }
      function _() {
        (s.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (k, $) => (
        a(),
        i(
          "div",
          {
            class: "VPLocalNavOutlineDropdown",
            style: dt({ "--vp-vh": o.value + "px" }),
          },
          [
            r(
              "button",
              { onClick: d, class: I({ open: s.value }) },
              [C(P(c(we)(c(n))) + " ", 1), h(Se, { class: "icon" })],
              2,
            ),
            h(
              ve,
              { name: "flyout" },
              {
                default: v(() => [
                  s.value
                    ? (a(),
                      i(
                        "div",
                        {
                          key: 0,
                          ref_key: "items",
                          ref: l,
                          class: "items",
                          onClick: f,
                        },
                        [
                          r(
                            "a",
                            { class: "top-link", href: "#", onClick: _ },
                            P(c(n).returnToTopLabel || "Return to top"),
                            1,
                          ),
                          h(
                            xe,
                            { headers: c(Ve)(c(t).outline ?? c(n).outline) },
                            null,
                            8,
                            ["headers"],
                          ),
                        ],
                        512,
                      ))
                    : m("", !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      );
    },
  });
const ka = p(ba, [["__scopeId", "data-v-5b59f8f7"]]),
  $a = { key: 0, class: "VPLocalNav" },
  Pa = ["aria-expanded"],
  wa = { class: "menu-text" },
  Va = g({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(e) {
      const { theme: t } = w(),
        { hasSidebar: n } = O();
      return (s, o) =>
        c(n)
          ? (a(),
            i("div", $a, [
              r(
                "button",
                {
                  "class": "menu",
                  "aria-expanded": e.open,
                  "aria-controls": "VPSidebarNav",
                  "onClick": o[0] || (o[0] = (l) => s.$emit("open-menu")),
                },
                [
                  h(ca, { class: "menu-icon" }),
                  r("span", wa, P(c(t).sidebarMenuLabel || "Menu"), 1),
                ],
                8,
                Pa,
              ),
              h(ka),
            ]))
          : m("", !0);
    },
  });
const xa = p(Va, [["__scopeId", "data-v-f5a2ca58"]]),
  Sa = (e) => (E("data-v-c4656e6d"), (e = e()), H(), e),
  La = ["role", "tabindex"],
  Ma = Sa(() => r("div", { class: "indicator" }, null, -1)),
  Ia = ["onKeydown"],
  Ca = { key: 1, class: "items" },
  Ba = g({
    __name: "VPSidebarItem",
    props: { item: null, depth: null },
    setup(e) {
      const t = e,
        {
          collapsed: n,
          collapsible: s,
          isLink: o,
          isActiveLink: l,
          hasActiveLink: d,
          hasChildren: f,
          toggle: _,
        } = Ot(b(() => t.item)),
        k = b(() => (f.value ? "section" : "div")),
        $ = b(() => (o.value ? "a" : "div")),
        L = b(() =>
          f.value ? (t.depth + 2 === 7 ? "p" : `h${t.depth + 2}`) : "p",
        ),
        V = b(() => (o.value ? void 0 : "button")),
        x = b(() => [
          [`level-${t.depth}`],
          { collapsible: s.value },
          { collapsed: n.value },
          { "is-link": o.value },
          { "is-active": l.value },
          { "has-active": d.value },
        ]);
      function N(T) {
        ("key" in T && T.key !== "Enter") || (!t.item.link && _());
      }
      function A() {
        t.item.link && _();
      }
      return (T, z) => {
        const Ze = R("VPSidebarItem", !0);
        return (
          a(),
          y(
            U(c(k)),
            { class: I(["VPSidebarItem", c(x)]) },
            {
              default: v(() => [
                e.item.text
                  ? (a(),
                    i(
                      "div",
                      ee(
                        { key: 0, class: "item", role: c(V) },
                        vt(e.item.items ? { click: N, keydown: N } : {}, !0),
                        { tabindex: e.item.items && 0 },
                      ),
                      [
                        Ma,
                        e.item.link
                          ? (a(),
                            y(
                              D,
                              {
                                key: 0,
                                tag: c($),
                                class: "link",
                                href: e.item.link,
                              },
                              {
                                default: v(() => [
                                  (a(),
                                  y(
                                    U(c(L)),
                                    { class: "text", innerHTML: e.item.text },
                                    null,
                                    8,
                                    ["innerHTML"],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ["tag", "href"],
                            ))
                          : (a(),
                            y(
                              U(c(L)),
                              { key: 1, class: "text", innerHTML: e.item.text },
                              null,
                              8,
                              ["innerHTML"],
                            )),
                        e.item.collapsed != null
                          ? (a(),
                            i(
                              "div",
                              {
                                "key": 2,
                                "class": "caret",
                                "role": "button",
                                "aria-label": "toggle section",
                                "onClick": A,
                                "onKeydown": _t(A, ["enter"]),
                                "tabindex": "0",
                              },
                              [h(Se, { class: "caret-icon" })],
                              40,
                              Ia,
                            ))
                          : m("", !0),
                      ],
                      16,
                      La,
                    ))
                  : m("", !0),
                e.item.items && e.item.items.length
                  ? (a(),
                    i("div", Ca, [
                      e.depth < 5
                        ? (a(!0),
                          i(
                            M,
                            { key: 0 },
                            B(
                              e.item.items,
                              (Le) => (
                                a(),
                                y(
                                  Ze,
                                  {
                                    key: Le.text,
                                    item: Le,
                                    depth: e.depth + 1,
                                  },
                                  null,
                                  8,
                                  ["item", "depth"],
                                )
                              ),
                            ),
                            128,
                          ))
                        : m("", !0),
                    ]))
                  : m("", !0),
              ]),
              _: 1,
            },
            8,
            ["class"],
          )
        );
      };
    },
  });
const Na = p(Ba, [["__scopeId", "data-v-c4656e6d"]]),
  Je = (e) => (E("data-v-139a1f1d"), (e = e()), H(), e),
  Ta = Je(() => r("div", { class: "curtain" }, null, -1)),
  Aa = {
    "class": "nav",
    "id": "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    "tabindex": "-1",
  },
  Ea = Je(() =>
    r(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1,
    ),
  ),
  Ha = g({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = e,
        { sidebarGroups: n, hasSidebar: s } = O();
      let o = S(null);
      function l() {
        Qe(o.value, { reserveScrollBarGap: !0 });
      }
      function d() {
        Ye();
      }
      return (
        ft(async () => {
          var f;
          t.open ? (l(), (f = o.value) == null || f.focus()) : d();
        }),
        (f, _) =>
          c(s)
            ? (a(),
              i(
                "aside",
                {
                  key: 0,
                  class: I(["VPSidebar", { open: e.open }]),
                  ref_key: "navEl",
                  ref: o,
                  onClick: _[0] || (_[0] = ht(() => {}, ["stop"])),
                },
                [
                  Ta,
                  r("nav", Aa, [
                    Ea,
                    u(f.$slots, "sidebar-nav-before", {}, void 0, !0),
                    (a(!0),
                    i(
                      M,
                      null,
                      B(
                        c(n),
                        (k) => (
                          a(),
                          i("div", { key: k.text, class: "group" }, [
                            h(Na, { item: k, depth: 0 }, null, 8, ["item"]),
                          ])
                        ),
                      ),
                      128,
                    )),
                    u(f.$slots, "sidebar-nav-after", {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : m("", !0)
      );
    },
  });
const Oa = p(Ha, [["__scopeId", "data-v-139a1f1d"]]),
  za = {},
  Da = { class: "VPPage" };
function Fa(e, t) {
  const n = R("Content");
  return a(), i("div", Da, [h(n)]);
}
const Ga = p(za, [["render", Fa]]),
  Ra = g({
    __name: "VPButton",
    props: { tag: null, size: null, theme: null, text: null, href: null },
    setup(e) {
      const t = e,
        n = b(() => [t.size ?? "medium", t.theme ?? "brand"]),
        s = b(() => t.href && ze.test(t.href)),
        o = b(() => (t.tag ? t.tag : t.href ? "a" : "button"));
      return (l, d) => (
        a(),
        y(
          U(c(o)),
          {
            class: I(["VPButton", c(n)]),
            href: e.href ? c(X)(e.href) : void 0,
            target: c(s) ? "_blank" : void 0,
            rel: c(s) ? "noreferrer" : void 0,
          },
          { default: v(() => [C(P(e.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  });
const Ua = p(Ra, [["__scopeId", "data-v-567ba664"]]),
  ja = (e) => (E("data-v-fd2650d5"), (e = e()), H(), e),
  qa = { class: "container" },
  Ka = { class: "main" },
  Wa = { key: 0, class: "name" },
  Qa = { class: "clip" },
  Ya = { key: 1, class: "text" },
  Xa = { key: 2, class: "tagline" },
  Ja = { key: 0, class: "actions" },
  Za = { key: 0, class: "image" },
  ec = { class: "image-container" },
  tc = ja(() => r("div", { class: "image-bg" }, null, -1)),
  nc = g({
    __name: "VPHero",
    props: {
      name: null,
      text: null,
      tagline: null,
      image: null,
      actions: null,
    },
    setup(e) {
      const t = fe("hero-image-slot-exists");
      return (n, s) => (
        a(),
        i(
          "div",
          { class: I(["VPHero", { "has-image": e.image || c(t) }]) },
          [
            r("div", qa, [
              r("div", Ka, [
                u(
                  n.$slots,
                  "home-hero-info",
                  {},
                  () => [
                    e.name
                      ? (a(), i("h1", Wa, [r("span", Qa, P(e.name), 1)]))
                      : m("", !0),
                    e.text ? (a(), i("p", Ya, P(e.text), 1)) : m("", !0),
                    e.tagline ? (a(), i("p", Xa, P(e.tagline), 1)) : m("", !0),
                  ],
                  !0,
                ),
                e.actions
                  ? (a(),
                    i("div", Ja, [
                      (a(!0),
                      i(
                        M,
                        null,
                        B(
                          e.actions,
                          (o) => (
                            a(),
                            i("div", { key: o.link, class: "action" }, [
                              h(
                                Ua,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                },
                                null,
                                8,
                                ["theme", "text", "href"],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : m("", !0),
              ]),
              e.image || c(t)
                ? (a(),
                  i("div", Za, [
                    r("div", ec, [
                      tc,
                      u(
                        n.$slots,
                        "home-hero-image",
                        {},
                        () => [
                          e.image
                            ? (a(),
                              y(
                                me,
                                { key: 0, class: "image-src", image: e.image },
                                null,
                                8,
                                ["image"],
                              ))
                            : m("", !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : m("", !0),
            ]),
          ],
          2,
        )
      );
    },
  });
const sc = p(nc, [["__scopeId", "data-v-fd2650d5"]]),
  oc = g({
    __name: "VPHomeHero",
    setup(e) {
      const { frontmatter: t } = w();
      return (n, s) =>
        c(t).hero
          ? (a(),
            y(
              sc,
              {
                key: 0,
                class: "VPHomeHero",
                name: c(t).hero.name,
                text: c(t).hero.text,
                tagline: c(t).hero.tagline,
                image: c(t).hero.image,
                actions: c(t).hero.actions,
              },
              {
                "home-hero-info": v(() => [u(n.$slots, "home-hero-info")]),
                "home-hero-image": v(() => [u(n.$slots, "home-hero-image")]),
                "_": 3,
              },
              8,
              ["name", "text", "tagline", "image", "actions"],
            ))
          : m("", !0);
    },
  }),
  ac = {},
  cc = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  lc = r(
    "path",
    {
      d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z",
    },
    null,
    -1,
  ),
  ic = [lc];
function rc(e, t) {
  return a(), i("svg", cc, ic);
}
const uc = p(ac, [["render", rc]]),
  dc = { class: "box" },
  _c = { key: 1, class: "icon" },
  vc = ["innerHTML"],
  fc = ["innerHTML"],
  hc = { key: 3, class: "link-text" },
  pc = { class: "link-text-value" },
  mc = g({
    __name: "VPFeature",
    props: {
      icon: null,
      title: null,
      details: null,
      link: null,
      linkText: null,
    },
    setup(e) {
      return (t, n) => (
        a(),
        y(
          D,
          { "class": "VPFeature", "href": e.link, "no-icon": !0 },
          {
            default: v(() => [
              r("article", dc, [
                typeof e.icon == "object"
                  ? (a(),
                    y(
                      me,
                      {
                        key: 0,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height,
                        width: e.icon.width,
                      },
                      null,
                      8,
                      ["image", "alt", "height", "width"],
                    ))
                  : e.icon
                  ? (a(), i("div", _c, P(e.icon), 1))
                  : m("", !0),
                r("h2", { class: "title", innerHTML: e.title }, null, 8, vc),
                e.details
                  ? (a(),
                    i(
                      "p",
                      { key: 2, class: "details", innerHTML: e.details },
                      null,
                      8,
                      fc,
                    ))
                  : m("", !0),
                e.linkText
                  ? (a(),
                    i("div", hc, [
                      r("p", pc, [
                        C(P(e.linkText) + " ", 1),
                        h(uc, { class: "link-text-icon" }),
                      ]),
                    ]))
                  : m("", !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ["href"],
        )
      );
    },
  });
const gc = p(mc, [["__scopeId", "data-v-209f3307"]]),
  yc = { key: 0, class: "VPFeatures" },
  bc = { class: "container" },
  kc = { class: "items" },
  $c = g({
    __name: "VPFeatures",
    props: { features: null },
    setup(e) {
      const t = e,
        n = b(() => {
          const s = t.features.length;
          if (s) {
            if (s === 2) return "grid-2";
            if (s === 3) return "grid-3";
            if (s % 3 === 0) return "grid-6";
            if (s % 2 === 0) return "grid-4";
          } else return;
        });
      return (s, o) =>
        e.features
          ? (a(),
            i("div", yc, [
              r("div", bc, [
                r("div", kc, [
                  (a(!0),
                  i(
                    M,
                    null,
                    B(
                      e.features,
                      (l) => (
                        a(),
                        i(
                          "div",
                          { key: l.title, class: I(["item", [c(n)]]) },
                          [
                            h(
                              gc,
                              {
                                "icon": l.icon,
                                "title": l.title,
                                "details": l.details,
                                "link": l.link,
                                "link-text": l.linkText,
                              },
                              null,
                              8,
                              ["icon", "title", "details", "link", "link-text"],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : m("", !0);
    },
  });
const Pc = p($c, [["__scopeId", "data-v-6816157f"]]),
  wc = g({
    __name: "VPHomeFeatures",
    setup(e) {
      const { frontmatter: t } = w();
      return (n, s) =>
        c(t).features
          ? (a(),
            y(
              Pc,
              { key: 0, class: "VPHomeFeatures", features: c(t).features },
              null,
              8,
              ["features"],
            ))
          : m("", !0);
    },
  }),
  Vc = { class: "VPHome" },
  xc = g({
    __name: "VPHome",
    setup(e) {
      return (t, n) => {
        const s = R("Content");
        return (
          a(),
          i("div", Vc, [
            u(t.$slots, "home-hero-before", {}, void 0, !0),
            h(oc, null, {
              "home-hero-info": v(() => [
                u(t.$slots, "home-hero-info", {}, void 0, !0),
              ]),
              "home-hero-image": v(() => [
                u(t.$slots, "home-hero-image", {}, void 0, !0),
              ]),
              "_": 3,
            }),
            u(t.$slots, "home-hero-after", {}, void 0, !0),
            u(t.$slots, "home-features-before", {}, void 0, !0),
            h(wc),
            u(t.$slots, "home-features-after", {}, void 0, !0),
            h(s),
          ])
        );
      };
    },
  });
const Sc = p(xc, [["__scopeId", "data-v-d82743a8"]]),
  Lc = (e) => (E("data-v-ff0f39c8"), (e = e()), H(), e),
  Mc = { class: "content" },
  Ic = { class: "outline-title" },
  Cc = { "aria-labelledby": "doc-outline-aria-label" },
  Bc = Lc(() =>
    r(
      "span",
      { class: "visually-hidden", id: "doc-outline-aria-label" },
      " Table of Contents for current page ",
      -1,
    ),
  ),
  Nc = g({
    __name: "VPDocAsideOutline",
    setup(e) {
      const { frontmatter: t, theme: n } = w(),
        s = pt([]);
      he(() => {
        s.value = Ve(t.value.outline ?? n.value.outline);
      });
      const o = S(),
        l = S();
      return (
        da(o, l),
        (d, f) => (
          a(),
          i(
            "div",
            {
              class: I([
                "VPDocAsideOutline",
                { "has-outline": c(s).length > 0 },
              ]),
              ref_key: "container",
              ref: o,
            },
            [
              r("div", Mc, [
                r(
                  "div",
                  { class: "outline-marker", ref_key: "marker", ref: l },
                  null,
                  512,
                ),
                r("div", Ic, P(c(we)(c(n))), 1),
                r("nav", Cc, [
                  Bc,
                  h(xe, { headers: c(s), root: !0 }, null, 8, ["headers"]),
                ]),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const Tc = p(Nc, [["__scopeId", "data-v-ff0f39c8"]]),
  Ac = { class: "VPDocAsideCarbonAds" },
  Ec = g({
    __name: "VPDocAsideCarbonAds",
    props: { carbonAds: null },
    setup(e) {
      const t = () => null;
      return (n, s) => (
        a(),
        i("div", Ac, [
          h(c(t), { "carbon-ads": e.carbonAds }, null, 8, ["carbon-ads"]),
        ])
      );
    },
  }),
  Hc = (e) => (E("data-v-3f215769"), (e = e()), H(), e),
  Oc = { class: "VPDocAside" },
  zc = Hc(() => r("div", { class: "spacer" }, null, -1)),
  Dc = g({
    __name: "VPDocAside",
    setup(e) {
      const { theme: t } = w();
      return (n, s) => (
        a(),
        i("div", Oc, [
          u(n.$slots, "aside-top", {}, void 0, !0),
          u(n.$slots, "aside-outline-before", {}, void 0, !0),
          h(Tc),
          u(n.$slots, "aside-outline-after", {}, void 0, !0),
          zc,
          u(n.$slots, "aside-ads-before", {}, void 0, !0),
          c(t).carbonAds
            ? (a(),
              y(Ec, { "key": 0, "carbon-ads": c(t).carbonAds }, null, 8, [
                "carbon-ads",
              ]))
            : m("", !0),
          u(n.$slots, "aside-ads-after", {}, void 0, !0),
          u(n.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  });
const Fc = p(Dc, [["__scopeId", "data-v-3f215769"]]);
function Gc() {
  const { theme: e, page: t } = w();
  return b(() => {
    const { text: n = "Edit this page", pattern: s = "" } =
        e.value.editLink || {},
      { relativePath: o } = t.value;
    let l;
    return (
      typeof s == "function"
        ? (l = s({ relativePath: o }))
        : (l = s.replace(/:path/g, o)),
      { url: l, text: n }
    );
  });
}
function Rc() {
  const { page: e, theme: t, frontmatter: n } = w();
  return b(() => {
    var d, f, _, k;
    const s = Re(t.value.sidebar, e.value.relativePath),
      o = Et(s),
      l = o.findIndex(($) => K(e.value.relativePath, $.link));
    return {
      prev:
        n.value.prev === !1
          ? void 0
          : {
              text:
                (typeof n.value.prev == "string"
                  ? n.value.prev
                  : typeof n.value.prev == "object"
                  ? n.value.prev.text
                  : void 0) ?? ((d = o[l - 1]) == null ? void 0 : d.text),
              link:
                (typeof n.value.prev == "object"
                  ? n.value.prev.link
                  : void 0) ?? ((f = o[l - 1]) == null ? void 0 : f.link),
            },
      next:
        n.value.next === !1
          ? void 0
          : {
              text:
                (typeof n.value.next == "string"
                  ? n.value.next
                  : typeof n.value.next == "object"
                  ? n.value.next.text
                  : void 0) ?? ((_ = o[l + 1]) == null ? void 0 : _.text),
              link:
                (typeof n.value.next == "object"
                  ? n.value.next.link
                  : void 0) ?? ((k = o[l + 1]) == null ? void 0 : k.link),
            },
    };
  });
}
const Uc = {},
  jc = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  qc = r(
    "path",
    {
      d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
    },
    null,
    -1,
  ),
  Kc = r(
    "path",
    {
      d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
    },
    null,
    -1,
  ),
  Wc = [qc, Kc];
function Qc(e, t) {
  return a(), i("svg", jc, Wc);
}
const Yc = p(Uc, [["render", Qc]]),
  Xc = { class: "VPLastUpdated" },
  Jc = ["datetime"],
  Zc = g({
    __name: "VPDocFooterLastUpdated",
    setup(e) {
      const { theme: t, page: n } = w(),
        s = b(() => new Date(n.value.lastUpdated)),
        o = b(() => s.value.toISOString()),
        l = S("");
      return (
        G(() => {
          Y(() => {
            l.value = s.value.toLocaleString(window.navigator.language);
          });
        }),
        (d, f) => (
          a(),
          i("p", Xc, [
            C(P(c(t).lastUpdatedText || "Last updated") + ": ", 1),
            r("time", { datetime: c(o) }, P(l.value), 9, Jc),
          ])
        )
      );
    },
  });
const el = p(Zc, [["__scopeId", "data-v-4f2140b8"]]),
  tl = { key: 0, class: "VPDocFooter" },
  nl = { key: 0, class: "edit-info" },
  sl = { key: 0, class: "edit-link" },
  ol = { key: 1, class: "last-updated" },
  al = { key: 1, class: "prev-next" },
  cl = { class: "pager" },
  ll = ["href"],
  il = ["innerHTML"],
  rl = ["innerHTML"],
  ul = ["href"],
  dl = ["innerHTML"],
  _l = ["innerHTML"],
  vl = g({
    __name: "VPDocFooter",
    setup(e) {
      const { theme: t, page: n, frontmatter: s } = w(),
        o = Gc(),
        l = Rc(),
        d = b(() => t.value.editLink && s.value.editLink !== !1),
        f = b(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        _ = b(() => d.value || f.value || l.value.prev || l.value.next);
      return (k, $) => {
        var L, V, x, N, A, T, z;
        return c(_)
          ? (a(),
            i("footer", tl, [
              u(k.$slots, "doc-footer-before", {}, void 0, !0),
              c(d) || c(f)
                ? (a(),
                  i("div", nl, [
                    c(d)
                      ? (a(),
                        i("div", sl, [
                          h(
                            D,
                            {
                              "class": "edit-link-button",
                              "href": c(o).url,
                              "no-icon": !0,
                            },
                            {
                              default: v(() => [
                                h(Yc, {
                                  "class": "edit-link-icon",
                                  "aria-label": "edit icon",
                                }),
                                C(" " + P(c(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ),
                        ]))
                      : m("", !0),
                    c(f) ? (a(), i("div", ol, [h(el)])) : m("", !0),
                  ]))
                : m("", !0),
              ((L = c(l).prev) != null && L.link) ||
              ((V = c(l).next) != null && V.link)
                ? (a(),
                  i("div", al, [
                    r("div", cl, [
                      (x = c(l).prev) != null && x.link
                        ? (a(),
                          i(
                            "a",
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: c(X)(c(l).prev.link),
                            },
                            [
                              r(
                                "span",
                                {
                                  class: "desc",
                                  innerHTML:
                                    ((N = c(t).docFooter) == null
                                      ? void 0
                                      : N.prev) || "Previous page",
                                },
                                null,
                                8,
                                il,
                              ),
                              r(
                                "span",
                                { class: "title", innerHTML: c(l).prev.text },
                                null,
                                8,
                                rl,
                              ),
                            ],
                            8,
                            ll,
                          ))
                        : m("", !0),
                    ]),
                    r(
                      "div",
                      {
                        class: I([
                          "pager",
                          {
                            "has-prev":
                              (A = c(l).prev) == null ? void 0 : A.link,
                          },
                        ]),
                      },
                      [
                        (T = c(l).next) != null && T.link
                          ? (a(),
                            i(
                              "a",
                              {
                                key: 0,
                                class: "pager-link next",
                                href: c(X)(c(l).next.link),
                              },
                              [
                                r(
                                  "span",
                                  {
                                    class: "desc",
                                    innerHTML:
                                      ((z = c(t).docFooter) == null
                                        ? void 0
                                        : z.next) || "Next page",
                                  },
                                  null,
                                  8,
                                  dl,
                                ),
                                r(
                                  "span",
                                  { class: "title", innerHTML: c(l).next.text },
                                  null,
                                  8,
                                  _l,
                                ),
                              ],
                              8,
                              ul,
                            ))
                          : m("", !0),
                      ],
                      2,
                    ),
                  ]))
                : m("", !0),
            ]))
          : m("", !0);
      };
    },
  });
const fl = p(vl, [["__scopeId", "data-v-face870a"]]),
  hl = { class: "VPDocOutlineDropdown" },
  pl = { key: 0, class: "items" },
  ml = g({
    __name: "VPDocOutlineDropdown",
    setup(e) {
      const { frontmatter: t, theme: n } = w(),
        s = S(!1);
      return (
        he(() => {
          s.value = !1;
        }),
        (o, l) => (
          a(),
          i("div", hl, [
            r(
              "button",
              {
                onClick: l[0] || (l[0] = (d) => (s.value = !s.value)),
                class: I({ open: s.value }),
              },
              [C(P(c(we)(c(n))) + " ", 1), h(Se, { class: "icon" })],
              2,
            ),
            s.value
              ? (a(),
                i("div", pl, [
                  h(
                    xe,
                    { headers: c(Ve)(c(t).outline ?? c(n).outline) },
                    null,
                    8,
                    ["headers"],
                  ),
                ]))
              : m("", !0),
          ])
        )
      );
    },
  });
const gl = p(ml, [["__scopeId", "data-v-049da7cc"]]),
  yl = (e) => (E("data-v-577a912e"), (e = e()), H(), e),
  bl = { class: "container" },
  kl = { key: 0, class: "aside" },
  $l = yl(() => r("div", { class: "aside-curtain" }, null, -1)),
  Pl = { class: "aside-container" },
  wl = { class: "aside-content" },
  Vl = { class: "content" },
  xl = { class: "content-container" },
  Sl = { class: "main" },
  Ll = g({
    __name: "VPDoc",
    setup(e) {
      const t = J(),
        { hasSidebar: n, hasAside: s } = O(),
        o = b(() => t.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
      return (l, d) => {
        const f = R("Content");
        return (
          a(),
          i(
            "div",
            { class: I(["VPDoc", { "has-sidebar": c(n), "has-aside": c(s) }]) },
            [
              r("div", bl, [
                c(s)
                  ? (a(),
                    i("div", kl, [
                      $l,
                      r("div", Pl, [
                        r("div", wl, [
                          h(Fc, null, {
                            "aside-top": v(() => [
                              u(l.$slots, "aside-top", {}, void 0, !0),
                            ]),
                            "aside-bottom": v(() => [
                              u(l.$slots, "aside-bottom", {}, void 0, !0),
                            ]),
                            "aside-outline-before": v(() => [
                              u(
                                l.$slots,
                                "aside-outline-before",
                                {},
                                void 0,
                                !0,
                              ),
                            ]),
                            "aside-outline-after": v(() => [
                              u(
                                l.$slots,
                                "aside-outline-after",
                                {},
                                void 0,
                                !0,
                              ),
                            ]),
                            "aside-ads-before": v(() => [
                              u(l.$slots, "aside-ads-before", {}, void 0, !0),
                            ]),
                            "aside-ads-after": v(() => [
                              u(l.$slots, "aside-ads-after", {}, void 0, !0),
                            ]),
                            "_": 3,
                          }),
                        ]),
                      ]),
                    ]))
                  : m("", !0),
                r("div", Vl, [
                  r("div", xl, [
                    u(l.$slots, "doc-before", {}, void 0, !0),
                    h(gl),
                    r("main", Sl, [
                      h(f, { class: I(["vp-doc", c(o)]) }, null, 8, ["class"]),
                    ]),
                    h(fl, null, {
                      "doc-footer-before": v(() => [
                        u(l.$slots, "doc-footer-before", {}, void 0, !0),
                      ]),
                      "_": 3,
                    }),
                    u(l.$slots, "doc-after", {}, void 0, !0),
                  ]),
                ]),
              ]),
            ],
            2,
          )
        );
      };
    },
  });
const Ml = p(Ll, [["__scopeId", "data-v-577a912e"]]),
  le = (e) => (E("data-v-c70503b8"), (e = e()), H(), e),
  Il = { class: "NotFound" },
  Cl = le(() => r("p", { class: "code" }, "404", -1)),
  Bl = le(() => r("h1", { class: "title" }, "PAGE NOT FOUND", -1)),
  Nl = le(() => r("div", { class: "divider" }, null, -1)),
  Tl = le(() =>
    r(
      "blockquote",
      { class: "quote" },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1,
    ),
  ),
  Al = { class: "action" },
  El = ["href"],
  Hl = g({
    __name: "NotFound",
    setup(e) {
      const { site: t } = w(),
        { localeLinks: n } = Z({ removeCurrent: !1 }),
        s = S("/");
      return (
        G(() => {
          var l;
          const o = window.location.pathname
            .replace(t.value.base, "")
            .replace(/(^.*?\/).*$/, "/$1");
          n.value.length &&
            (s.value =
              ((l = n.value.find(({ link: d }) => d.startsWith(o))) == null
                ? void 0
                : l.link) || n.value[0].link);
        }),
        (o, l) => (
          a(),
          i("div", Il, [
            Cl,
            Bl,
            Nl,
            Tl,
            r("div", Al, [
              r(
                "a",
                {
                  "class": "link",
                  "href": c(_e)(s.value),
                  "aria-label": "go to home",
                },
                " Take me home ",
                8,
                El,
              ),
            ]),
          ])
        )
      );
    },
  });
const Ol = p(Hl, [["__scopeId", "data-v-c70503b8"]]),
  zl = g({
    __name: "VPContent",
    setup(e) {
      const { page: t, frontmatter: n } = w(),
        { hasSidebar: s } = O();
      return (o, l) => (
        a(),
        i(
          "div",
          {
            class: I([
              "VPContent",
              { "has-sidebar": c(s), "is-home": c(n).layout === "home" },
            ]),
            id: "VPContent",
          },
          [
            c(t).isNotFound
              ? u(o.$slots, "not-found", { key: 0 }, () => [h(Ol)], !0)
              : c(n).layout === "page"
              ? (a(), y(Ga, { key: 1 }))
              : c(n).layout === "home"
              ? (a(),
                y(
                  Sc,
                  { key: 2 },
                  {
                    "home-hero-before": v(() => [
                      u(o.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-info": v(() => [
                      u(o.$slots, "home-hero-info", {}, void 0, !0),
                    ]),
                    "home-hero-image": v(() => [
                      u(o.$slots, "home-hero-image", {}, void 0, !0),
                    ]),
                    "home-hero-after": v(() => [
                      u(o.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": v(() => [
                      u(o.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": v(() => [
                      u(o.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    "_": 3,
                  },
                ))
              : (a(),
                y(
                  Ml,
                  { key: 3 },
                  {
                    "doc-footer-before": v(() => [
                      u(o.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": v(() => [
                      u(o.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": v(() => [
                      u(o.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "aside-top": v(() => [
                      u(o.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-outline-before": v(() => [
                      u(o.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": v(() => [
                      u(o.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": v(() => [
                      u(o.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": v(() => [
                      u(o.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    "aside-bottom": v(() => [
                      u(o.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    "_": 3,
                  },
                )),
          ],
          2,
        )
      );
    },
  });
const Dl = p(zl, [["__scopeId", "data-v-bcaf6df5"]]),
  Fl = { class: "container" },
  Gl = ["innerHTML"],
  Rl = ["innerHTML"],
  Ul = g({
    __name: "VPFooter",
    setup(e) {
      const { theme: t } = w(),
        { hasSidebar: n } = O();
      return (s, o) =>
        c(t).footer
          ? (a(),
            i(
              "footer",
              { key: 0, class: I(["VPFooter", { "has-sidebar": c(n) }]) },
              [
                r("div", Fl, [
                  c(t).footer.message
                    ? (a(),
                      i(
                        "p",
                        {
                          key: 0,
                          class: "message",
                          innerHTML: c(t).footer.message,
                        },
                        null,
                        8,
                        Gl,
                      ))
                    : m("", !0),
                  c(t).footer.copyright
                    ? (a(),
                      i(
                        "p",
                        {
                          key: 1,
                          class: "copyright",
                          innerHTML: c(t).footer.copyright,
                        },
                        null,
                        8,
                        Rl,
                      ))
                    : m("", !0),
                ]),
              ],
              2,
            ))
          : m("", !0);
    },
  });
const jl = p(Ul, [["__scopeId", "data-v-2f86ebd2"]]),
  ql = { key: 0, class: "Layout" },
  Kl = g({
    __name: "Layout",
    setup(e) {
      const { isOpen: t, open: n, close: s } = O(),
        o = J();
      q(() => o.path, s),
        Ht(t, s),
        te("close-sidebar", s),
        te("is-sidebar-open", t);
      const { frontmatter: l } = w(),
        d = mt(),
        f = b(() => !!d["home-hero-image"]);
      return (
        te("hero-image-slot-exists", f),
        (_, k) => {
          const $ = R("Content");
          return c(l).layout !== !1
            ? (a(),
              i("div", ql, [
                u(_.$slots, "layout-top", {}, void 0, !0),
                h(Dt),
                h(
                  Rt,
                  { class: "backdrop", show: c(t), onClick: c(s) },
                  null,
                  8,
                  ["show", "onClick"],
                ),
                h(Xo, null, {
                  "nav-bar-title-before": v(() => [
                    u(_.$slots, "nav-bar-title-before", {}, void 0, !0),
                  ]),
                  "nav-bar-title-after": v(() => [
                    u(_.$slots, "nav-bar-title-after", {}, void 0, !0),
                  ]),
                  "nav-bar-content-before": v(() => [
                    u(_.$slots, "nav-bar-content-before", {}, void 0, !0),
                  ]),
                  "nav-bar-content-after": v(() => [
                    u(_.$slots, "nav-bar-content-after", {}, void 0, !0),
                  ]),
                  "nav-screen-content-before": v(() => [
                    u(_.$slots, "nav-screen-content-before", {}, void 0, !0),
                  ]),
                  "nav-screen-content-after": v(() => [
                    u(_.$slots, "nav-screen-content-after", {}, void 0, !0),
                  ]),
                  "_": 3,
                }),
                h(xa, { open: c(t), onOpenMenu: c(n) }, null, 8, [
                  "open",
                  "onOpenMenu",
                ]),
                h(
                  Oa,
                  { open: c(t) },
                  {
                    "sidebar-nav-before": v(() => [
                      u(_.$slots, "sidebar-nav-before", {}, void 0, !0),
                    ]),
                    "sidebar-nav-after": v(() => [
                      u(_.$slots, "sidebar-nav-after", {}, void 0, !0),
                    ]),
                    "_": 3,
                  },
                  8,
                  ["open"],
                ),
                h(Dl, null, {
                  "not-found": v(() => [
                    u(_.$slots, "not-found", {}, void 0, !0),
                  ]),
                  "home-hero-before": v(() => [
                    u(_.$slots, "home-hero-before", {}, void 0, !0),
                  ]),
                  "home-hero-info": v(() => [
                    u(_.$slots, "home-hero-info", {}, void 0, !0),
                  ]),
                  "home-hero-image": v(() => [
                    u(_.$slots, "home-hero-image", {}, void 0, !0),
                  ]),
                  "home-hero-after": v(() => [
                    u(_.$slots, "home-hero-after", {}, void 0, !0),
                  ]),
                  "home-features-before": v(() => [
                    u(_.$slots, "home-features-before", {}, void 0, !0),
                  ]),
                  "home-features-after": v(() => [
                    u(_.$slots, "home-features-after", {}, void 0, !0),
                  ]),
                  "doc-footer-before": v(() => [
                    u(_.$slots, "doc-footer-before", {}, void 0, !0),
                  ]),
                  "doc-before": v(() => [
                    u(_.$slots, "doc-before", {}, void 0, !0),
                  ]),
                  "doc-after": v(() => [
                    u(_.$slots, "doc-after", {}, void 0, !0),
                  ]),
                  "aside-top": v(() => [
                    u(_.$slots, "aside-top", {}, void 0, !0),
                  ]),
                  "aside-bottom": v(() => [
                    u(_.$slots, "aside-bottom", {}, void 0, !0),
                  ]),
                  "aside-outline-before": v(() => [
                    u(_.$slots, "aside-outline-before", {}, void 0, !0),
                  ]),
                  "aside-outline-after": v(() => [
                    u(_.$slots, "aside-outline-after", {}, void 0, !0),
                  ]),
                  "aside-ads-before": v(() => [
                    u(_.$slots, "aside-ads-before", {}, void 0, !0),
                  ]),
                  "aside-ads-after": v(() => [
                    u(_.$slots, "aside-ads-after", {}, void 0, !0),
                  ]),
                  "_": 3,
                }),
                h(jl),
                u(_.$slots, "layout-bottom", {}, void 0, !0),
              ]))
            : (a(), y($, { key: 1 }));
        }
      );
    },
  });
const Wl = p(Kl, [["__scopeId", "data-v-410c024d"]]);
const Yl = {
  Layout: Wl,
  enhanceApp: ({ app: e }) => {
    e.component("Badge", yt);
  },
};
export { Yl as t };
