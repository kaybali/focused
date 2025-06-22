(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6803],
  {
    1225: (e, t, s) => {
      "use strict";
      s.d(t, { ir: () => r }), s(40459).env.REACT_APP_SUPPORT_EMAIL;
      let r = {
        OPEN: "open",
        SUCCESS: "success",
        ERROR: "error",
        CLOSE: "close",
        SKIP: "skip",
        CLICK: "click",
        SUBMIT: "submit",
        CANCEL: "cancel",
        DELETE: "delete",
        SELECTED: "selected",
        BACK: "back",
        MOUNT: "mount",
        SENT: "sent",
      };
    },
    6096: (e) => {
      e.exports = {
        article: "style_article__DjHUJ",
        collapsed: "style_collapsed__44gDF",
        btn: "style_btn__FSgAj",
      };
    },
    7999: (e) => {
      e.exports = {
        header: "style_header__aTz_8",
        container: "style_container__rZ9iM",
        logo: "style_logo__0XC32",
        image: "style_image__uyqKP",
        title: "style_title__vGBAY",
        sign_in: "style_sign_in__vIl7h",
      };
    },
    11297: (e) => {
      e.exports = { wrap: "style_wrap__JTVN5" };
    },
    15880: (e) => {
      e.exports = { sign_in: "style_sign_in__GpKJ8" };
    },
    21115: (e) => {
      e.exports = {
        ct: "flare_ct__J4513",
        flareAnimation: "flare_flareAnimation__DYcMr",
        flare: "flare_flare__PwnC0",
      };
    },
    21760: (e, t, s) => {
      "use strict";
      s.d(t, { B: () => j });
      var r = s(12115),
        a = s(33114),
        l = s(50564),
        i = s(69743),
        n = s(60778),
        o = s(98319),
        c = s(16377),
        d = s.n(c),
        _ = s(24757);
      let h = ["en", "es", "de", "fr", "ar", "ja"],
        u = "general",
        p = "i18next";
      var m = s(38556),
        g = s.n(m);
      function j(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "general",
          s = arguments.length > 2 ? arguments[2] : void 0,
          [a, n] = (0, i.lT)([p]),
          o = (0, l.Bd)(t, s),
          { i18n: c } = o;
        d().locale(e);
        {
          let [t, s] = (0, r.useState)(c.resolvedLanguage);
          (0, r.useEffect)(() => {
            t !== c.resolvedLanguage && s(c.resolvedLanguage);
          }, [t, c.resolvedLanguage]),
            (0, r.useEffect)(() => {
              e && c.resolvedLanguage !== e && c.changeLanguage(e);
            }, [e, c]),
            (0, r.useEffect)(() => {
              a.i18next !== e && n(p, e, { path: "/" });
            }, [e, a.i18next]);
        }
        return o;
      }
      s(39849),
        s(7406),
        s(70805),
        s(83570),
        s(17768),
        d().extend(g()),
        a.Ay.use(l.r9)
          .use(o.A)
          .use(
            (0, n.A)((e, t) =>
              t === _.C ? s(29825)(`./${e}.json`) : s(86067)(`./${e}/${t}.json`)
            )
          )
          .init({
            ...(function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "en",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : u;
              return {
                supportedLngs: h,
                fallbackLng: "en",
                lng: e,
                fallbackNS: u,
                defaultNS: u,
                ns: t,
              };
            })(),
            lng: void 0,
            detection: { order: ["path", "htmlTag", "cookie", "navigator"] },
            preload: [],
          });
    },
    23637: (e, t, s) => {
      "use strict";
      s.d(t, {
        Ak: () => i,
        C3: () => r,
        Il: () => c,
        TE: () => o,
        h8: () => d,
        oA: () => a,
        vX: () => n,
        y8: () => l,
      });
      let r = "Astroline",
        a = "14 Panagioti Tsangari, 1st Floor, Office 1E",
        l = "4047",
        i = "Limassol, Cyprus",
        n = {
          termsOfUse: "https://sub.astroline.today/gototop/terms-of-use",
          privacy: "https://sub.astroline.today/gototop/privacy-policy",
          moneyBack: "https://sub.astroline.today/gototop/money-back-policy",
          billingTerms: "https://sub.astroline.today/gototop/billing-terms",
        },
        o = "https://help.astroline.today",
        c = "https://sub.astroline.today/my-account",
        d = "https://support.astroline.today";
    },
    23830: (e) => {
      e.exports = {
        menu: "style_menu__vUll2",
        sideBar: "style_sideBar__mPPQu",
        wrapper: "style_wrapper__i9Bl2",
        list: "style_list__C4QT3",
        signIn: "style_signIn__eM2fG",
      };
    },
    24757: (e, t, s) => {
      "use strict";
      s.d(t, { C: () => r });
      let r = "advisors-chat";
    },
    25163: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => c });
      var r = s(95155),
        a = s(12115),
        l = s(13519),
        i = s.n(l),
        n = s(66618),
        o = s.n(n);
      let c = (0, a.forwardRef)((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)("input", {
          ref: t,
          className: i()(o().input, s),
          ...a,
        });
      });
    },
    25297: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => o });
      var r = s(95155),
        a = s(13519),
        l = s.n(a),
        i = s(55224),
        n = s.n(i);
      let o = (e) => {
        let { level: t, className: s, children: a, ...i } = e;
        return (0, r.jsx)(t || "h3", {
          className: l()([n()[`title_${t || "h3"}`], s]),
          ...i,
          children: a,
        });
      };
    },
    27997: (e) => {
      e.exports = {
        wrapper: "style_wrapper__j_CBe",
        list: "style_list__blcKi",
      };
    },
    29825: (e, t, s) => {
      var r = {
        "./ar.json": [35981, 5981],
        "./de.json": [75897, 5897],
        "./en.json": [55669, 5669],
        "./es.json": [96122, 6122],
        "./fr.json": [45206, 5206],
        "./ja.json": [36691, 6691],
      };
      function a(e) {
        if (!s.o(r, e))
          return Promise.resolve().then(() => {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = r[e],
          a = t[0];
        return s.e(t[1]).then(() => s.t(a, 19));
      }
      (a.keys = () => Object.keys(r)), (a.id = 29825), (e.exports = a);
    },
    31495: (e) => {
      e.exports = { wrapper: "style_wrapper__gh__q" };
    },
    33248: (e) => {
      e.exports = {
        switch_checkbox: "style_switch_checkbox__RNKAs",
        switch_label: "style_switch_label__25rHR",
        on: "style_on__iPAWX",
        switch_button: "style_switch_button__Aj07e",
      };
    },
    36364: (e, t, s) => {
      "use strict";
      s.d(t, { u: () => c });
      var r = s(95155);
      s(12115);
      var a = s(13519),
        l = s.n(a),
        i = s(21760),
        n = s(98165),
        o = s.n(n);
      let c = (e) => {
        let { lang: t, showMore: s, onButtonClick: a, className: n } = e,
          { t: c } = (0, i.B)(t),
          d = c(s ? "sections.show_less" : "sections.show_more");
        return (0, r.jsx)("button", {
          type: "button",
          className: l()(o().showMore, n),
          onClick: a,
          children: (0, r.jsx)("div", {
            className: l()(o().showMoreText, { [o().open]: s }),
            children: d,
          }),
        });
      };
    },
    37910: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => o });
      var r = s(95155),
        a = s(13519),
        l = s.n(a),
        i = s(75253),
        n = s.n(i);
      let o = (e) => {
        let { children: t, className: s, ...a } = e,
          i = l()([n().text, s]),
          o = "ar" === navigator.language.split("-")[0];
        return (0, r.jsx)("p", {
          dir: o ? "rtl" : "",
          className: i,
          ...a,
          children: t,
        });
      };
    },
    39753: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var r = s(36038),
        a = s(22602),
        l = s(41515);
      let i = { rE: "3.5.0" },
        n = {
          init() {
            return (
              a.A.setAppVersion(i.rE),
              r.A.init({ token: "A7WHrOYYE0hfbabxoaRg8kcQBeCegZCa" }),
              l.A.init(this)
            );
          },
          setUserProperty(e, t) {
            r.A.setUserProperty(e, t);
          },
          trackEvent(e, t, s) {
            let a = `${e}_${t}`;
            r.A.trackEvent(a, s), window.dataLayer?.push({ event: a, ...s });
          },
          flush() {
            r.A.flush();
          },
        };
    },
    41248: (e) => {
      e.exports = {
        button: "style_button__v77Do",
        button__title: "style_button__title__VhFme",
        "button__right-icon": "style_button__right-icon___qERh",
      };
    },
    41514: (e) => {
      e.exports = {
        wrapper: "style_wrapper__RtwTe",
        show: "style_show__qNouO",
        menu: "style_menu__HoQgs",
        content: "style_content__8Zf8T",
        open: "style_open__B_LL0",
        close: "style_close___nAGM",
        dark_green: "style_dark_green__EUnqB",
        dark: "style_dark__5Ho5q",
      };
    },
    44597: () => {},
    45686: (e) => {
      e.exports = {
        listWrapper: "style_listWrapper__qThSj",
        opened: "style_opened__CZq8k",
        list: "style_list__oI3T7",
        icon: "style_icon__73xRQ",
        link: "style_link__yJ66H",
        optionLink: "style_optionLink__Ms6tf",
      };
    },
    46519: (e) => {
      e.exports = { link: "style_link__LSLT9" };
    },
    47735: (e, t, s) => {
      "use strict";
      s.d(t, { Yv: () => a }), s(88793), s(54655), s(16377);
      let r = {
        الجدي: "capricorn-burj-jady",
        الدلو: "aquarius-burj-dalw",
        الحوت: "pisces-burj-hut",
        الحمل: "aries-burj-hamal",
        الثور: "taurus-burj-thawr",
        الجوزاء: "gemini-burj-jawzaa",
        السرطان: "cancer-burj-saratan",
        الأسد: "leo-burj-asad",
        العذراء: "virgo-burj-adhraa",
        الميزان: "libra-burj-mizan",
        العقرب: "scorpio-burj-aqrab",
        القوس: "sagittarius-burj-qaws",
        أمس: "ams",
        غدًا: "ghdan",
        يناير: "yanayir",
        فبراير: "fibrayir",
        مارس: "maris",
        أبريل: "abril",
        مايو: "mayw",
        يونيو: "yuniu",
        يوليو: "yuliu",
        أغسطس: "aghustus",
        سبتمبر: "sibtambar",
        أكتوبر: "uktubar",
        نوفمبر: "nufimbir",
        ديسمبر: "disambir",
        山羊座: "yagiza",
        水瓶座: "mizugameza",
        魚座: "uoza",
        牡羊座: "ohitsujiza",
        牡牛座: "oushiza",
        双子座: "futagoza",
        蟹座: "kaniza",
        獅子座: "shishiza",
        乙女座: "otomeza",
        天秤座: "tenbinza",
        蠍座: "sasoriza",
        射手座: "iteza",
        昨日: "kino",
        明日: "ashita",
        "1月": "1tsuki",
        "2月": "2tsuki",
        "3月": "3tsuki",
        "4月": "4tsuki",
        "5月": "5tsuki",
        "6月": "6tsuki",
        "7月": "7tsuki",
        "8月": "8tsuki",
        "9月": "9tsuki",
        "10月": "10tsuki",
        "11月": "11tsuki",
        "12月": "12tsuki",
      };
      function a(e) {
        return (
          r[e] ||
          e
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
        );
      }
    },
    50842: (e) => {
      e.exports = {
        collapsible: "style_collapsible__l598t",
        hidden: "style_hidden__BNhUV",
      };
    },
    52704: (e) => {
      e.exports = { activeDefault: "style_activeDefault__6cYGc" };
    },
    53723: (e) => {
      e.exports = {
        signboard: "style_signboard__lLiWO",
        content: "style_content__tbJcV",
        warning: "style_warning__kQX13",
        success: "style_success__BGhDS",
        error: "style_error__9d4eD",
      };
    },
    55224: (e) => {
      e.exports = {
        title_h1: "style_title_h1__yQTKj",
        title_h2: "style_title_h2__PSWVY",
        title_h3: "style_title_h3__acllG",
        title_h4: "style_title_h4__9ztLU",
      };
    },
    57551: (e, t, s) => {
      "use strict";
      s.d(t, { Article: () => u });
      var r = s(95155),
        a = s(12115),
        l = s(90351),
        i = s(6874),
        n = s.n(i),
        o = s(13519),
        c = s.n(o),
        d = s(36364),
        _ = s(6096),
        h = s.n(_);
      let u = (e) => {
        let { lang: t, content: s, collapsible: i, className: o } = e,
          [_, u] = (0, a.useState)(!i);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("article", {
              className: c()(h().article, o, { [h().collapsed]: !_ }),
              children: (0, l.Ay)(s, {
                transform: (e, t) => {
                  if ("tag" === e.type && "a" === e.name)
                    return (0, r.jsx)(
                      n(),
                      { ...e.attribs, children: e.children.map(l.$S) },
                      t
                    );
                },
              }),
            }),
            !_ &&
              (0, r.jsx)(d.u, {
                lang: t,
                className: h().btn,
                onButtonClick: () => u(!_),
                showMore: _,
              }),
          ],
        });
      };
    },
    58908: (e, t, s) => {
      "use strict";
      s.d(t, { Footer: () => g });
      var r = s(95155),
        a = s(13519),
        l = s.n(a),
        i = s(16377),
        n = s.n(i),
        o = s(6874),
        c = s.n(o),
        d = s(21760),
        _ = s(23637),
        h = s(86389),
        u = s(83913),
        p = s.n(u);
      let m = "sections.footer",
        g = (e) => {
          let { lang: t } = e,
            s = (0, d.B)(t),
            a = {
              blog: "/blog",
              reviews: `/${t}/${h.b.REVIEWS[t]}`,
              disclaimer: "/en/disclaimer",
              dont_sell_my_info: "/en/dont-sell-my-info",
            },
            i = {
              privacy_policy: _.vX.privacy,
              terms: _.vX.termsOfUse,
              billing_terms: _.vX.billingTerms,
              money_back: _.vX.moneyBack,
            };
          return (0, r.jsxs)("footer", {
            className: p().footer,
            children: [
              (0, r.jsxs)("div", {
                className: l()(p().container, p().main),
                itemScope: !0,
                itemType: "http://schema.org/Organization",
                children: [
                  (0, r.jsx)("p", {
                    children: (0, r.jsx)(c(), {
                      href: `/${t}`,
                      className: p().homeLink,
                      children: "Astroline",
                    }),
                  }),
                  (0, r.jsxs)("p", {
                    children: ["Astroline \xa9", n()().format("YYYY")],
                  }),
                  (0, r.jsxs)("div", {
                    className: p().address,
                    itemProp: "address",
                    itemScope: !0,
                    itemType: "http://schema.org/PostalAddress",
                    children: [
                      (0, r.jsxs)("span", {
                        itemProp: "streetAddress",
                        children: [_.oA, ", "],
                      }),
                      (0, r.jsxs)("span", {
                        itemProp: "postalCode",
                        children: [_.y8, ", "],
                      }),
                      (0, r.jsx)("span", {
                        itemProp: "addressLocality",
                        children: _.Ak,
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: p().container,
                children: (0, r.jsxs)("ul", {
                  children: [
                    (0, r.jsx)("li", {
                      children: (0, r.jsx)("a", {
                        href: _.h8,
                        className: p().link,
                        children: s.t(`${m}.contact_us`),
                      }),
                    }),
                    (0, r.jsx)("li", {
                      children: (0, r.jsx)("a", {
                        href: _.TE,
                        className: l()(p().link, p().helpCenter),
                        children: s.t(`${m}.help_center`),
                      }),
                    }),
                    (0, r.jsx)("li", {
                      children: (0, r.jsx)("a", {
                        href: `/${t}/faq`,
                        className: p().link,
                        children: s.t(`${m}.faq`),
                      }),
                    }),
                    (0, r.jsx)("li", {
                      children: (0, r.jsx)("a", {
                        href: _.Il,
                        className: l()(p().link, p().helpCenter),
                        children: s.t(`${m}.my_account`),
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: p().container,
                children: (0, r.jsx)("ul", {
                  children: Object.keys(a).map((e) =>
                    (0, r.jsx)(
                      "li",
                      {
                        children: (0, r.jsx)(c(), {
                          href: a[e],
                          className: p().link,
                          children: s.t(`${m}.${e}`),
                        }),
                      },
                      e
                    )
                  ),
                }),
              }),
              (0, r.jsx)("div", {
                className: p().container,
                children: (0, r.jsx)("ul", {
                  children: Object.keys(i).map((e) =>
                    (0, r.jsx)(
                      "li",
                      {
                        children: (0, r.jsx)(c(), {
                          href: i[e],
                          className: p().link,
                          children: s.t(`${m}.${e}`),
                        }),
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          });
        };
    },
    61032: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { ReactComponent: () => n, default: () => o });
      var r,
        a,
        l = s(12115);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}.hasOwnProperty.call(s, r) && (e[r] = s[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      function n(e) {
        return l.createElement(
          "svg",
          i({ xmlns: "http://www.w3.org/2000/svg", width: 38, height: 33 }, e),
          r ||
            (r = l.createElement(
              "defs",
              null,
              l.createElement(
                "filter",
                {
                  id: "right-arrow_svg__a",
                  width: "109.2%",
                  height: "152.7%",
                  x: "-4.6%",
                  y: "-24.5%",
                  filterUnits: "objectBoundingBox",
                },
                l.createElement("feOffset", {
                  dy: 1,
                  in: "SourceAlpha",
                  result: "shadowOffsetOuter1",
                }),
                l.createElement("feGaussianBlur", {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2,
                }),
                l.createElement("feColorMatrix", {
                  in: "shadowBlurOuter1",
                  result: "shadowMatrixOuter1",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",
                }),
                l.createElement(
                  "feMerge",
                  null,
                  l.createElement("feMergeNode", { in: "shadowMatrixOuter1" }),
                  l.createElement("feMergeNode", { in: "SourceGraphic" })
                )
              )
            )),
          a ||
            (a = l.createElement(
              "g",
              {
                filter: "url(#right-arrow_svg__a)",
                transform: "translate(-266 -11)",
                fill: "#FFF",
                stroke: "#FFF",
                strokeWidth: 0.5,
              },
              l.createElement("path", {
                d: "M288.5 20.2a.7.7 0 00-1 0c-.3.3-.3.8 0 1l5 5.5h-16.8c-.4 0-.7.4-.7.8s.3.8.7.8h16.9l-5.1 5.4c-.3.3-.3.8 0 1 .2.4.7.4 1 0l6.3-6.7c.3-.3.3-.7 0-1l-6.3-6.8z",
              })
            ))
        );
      }
      let o =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzMyIgdmlld0JveD0iMCAwIDM4IDMzIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMTA5LjIlIiBoZWlnaHQ9IjE1Mi43JSIgeD0iLTQuNiUiIHk9Ii0yNC41JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjIiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNSAwIi8+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz48L2ZlTWVyZ2U+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbHRlcj0idXJsKCNhKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2NiAtMTEpIiBmaWxsPSIjRkZGIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iLjUiPjxwYXRoIGQ9Ik0yODguNSAyMC4yYS43LjcgMCAwMC0xIDBjLS4zLjMtLjMuOCAwIDFsNSA1LjVoLTE2LjhjLS40IDAtLjcuNC0uNy44cy4zLjguNy44aDE2LjlsLTUuMSA1LjRjLS4zLjMtLjMuOCAwIDEgLjIuNC43LjQgMSAwbDYuMy02LjdjLjMtLjMuMy0uNyAwLTFsLTYuMy02Ljh6Ii8+PC9nPjwvc3ZnPg==";
    },
    63924: (e, t, s) => {
      "use strict";
      s.d(t, { SideBar: () => m });
      var r,
        a,
        l = s(95155),
        i = s(12115),
        n = s(13519),
        o = s.n(n);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}.hasOwnProperty.call(s, r) && (e[r] = s[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      function d(e) {
        return i.createElement(
          "svg",
          c(
            {
              width: 18,
              height: 14,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          r ||
            (r = i.createElement("path", {
              d: "M1 14a1 1 0 110-2h16a1 1 0 110 2H1zm0-6a1 1 0 010-2h16a1 1 0 110 2H1zm0-6a1 1 0 110-2h16a1 1 0 110 2H1z",
              fill: "#2D2D2D",
            }))
        );
      }
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}.hasOwnProperty.call(s, r) && (e[r] = s[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      function h(e) {
        return i.createElement(
          "svg",
          _(
            {
              width: 18,
              height: 18,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          a ||
            (a = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.184 1.312a1.064 1.064 0 011.504 1.504L9.505 8l5.183 5.184a1.064 1.064 0 01-1.504 1.504L8 9.505l-5.184 5.183a1.064 1.064 0 11-1.504-1.504L6.495 8 1.312 2.816a1.064 1.064 0 011.504-1.504L8 6.495l5.184-5.183z",
              fill: "#2D2D2D",
              stroke: "#2D2D2D",
              strokeWidth: 0.2,
              strokeLinecap: "round",
            }))
        );
      }
      var u = s(41514),
        p = s.n(u);
      let m = (e) => {
        let {
            theme: t = "light",
            visible: s,
            onVisibilityChange: r,
            className: a,
            menuClassName: n,
            children: c,
          } = e,
          _ = (0, i.useRef)(null),
          u = o()(p().wrapper, a, {
            [p().show]: s,
            [p().dark]: "dark" === t,
            [p().dark_green]: "default" === t,
          });
        return (0, l.jsx)("div", {
          className: u,
          ref: _,
          onClick: (e) => {
            e.target === _.current && r();
          },
          children: (0, l.jsxs)("div", {
            className: p().icon,
            children: [
              (0, l.jsx)(d, { className: p().open, onClick: r }),
              (0, l.jsxs)("div", {
                className: o()(p().menu, n),
                children: [
                  (0, l.jsx)(h, { className: p().close, onClick: r }),
                  (0, l.jsx)("div", { className: p().content, children: c }),
                ],
              }),
            ],
          }),
        });
      };
    },
    66618: (e) => {
      e.exports = { input: "style_input__cV6ju" };
    },
    66902: (e, t, s) => {
      "use strict";
      s.d(t, { PageHeader: () => B });
      var r = s(95155),
        a = s(12115),
        l = s(6874),
        i = s.n(l),
        n = s(21760),
        o = s(90298),
        c = s(23637);
      let d = {
        LOGO: {
          src: "/_next/static/media/logo@2x.6fdd7a6a.webp",
          height: 74,
          width: 74,
          blurDataURL:
            "data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDUAAAABL6CQjSTIY/1pvjuk0YiIQOYBo0iSIgtKLgfwvwwQKAAHuxH9j7dOK9zEjvRIT+zM969TAQBWUDggPgAAALABAJ0BKggACAACQDglAE6AId+6uAAA/vM3/5RVdJOVv9ODgCD0OKMCaVt62YTAqhjwjwZSHS0YzaAT/eAA",
          blurWidth: 8,
          blurHeight: 8,
        },
      };
      var _ = s(3656),
        h = s.n(_),
        u = s(86389),
        p = s(47735);
      let m = {
          en: "English",
          es: "Espa\xf1ol",
          de: "Deutsch",
          fr: "Fran\xe7ais",
          ar: "العربية",
          ja: "日本語",
        },
        g = (e) => {
          let { lang: t } = e,
            s = (0, n.B)(t);
          return (0, a.useMemo)(() => {
            let e = s.t("zodiac", { returnObjects: !0, lng: t });
            return [
              {
                title: s.t(
                  "sections.explore_features.features.ZODIAC_SIGNS.title"
                ),
                href: `/${t}/${u.b.ZODIAC_SIGNS[t]}`,
                subItems: h()(e, (e, s) => ({
                  title: e,
                  href: `/${t}/${u.b.ZODIAC_SIGNS[t]}/${(0, p.Yv)(e)}`,
                })),
              },
              {
                title: s.t(
                  "sections.explore_features.features.HOROSCOPES.title"
                ),
                href: `/${t}/${u.b.HOROSCOPES[t]}/${u.b.HOROSCOPES.children?.DAILY[t]}`,
              },
              {
                title: s.t(
                  "sections.explore_features.features.PALM_READING.title"
                ),
                href: `/${t}/${u.b.PALM_READING[t]}`,
              },
              {
                title: s.t(
                  "sections.explore_features.features.BIRTH_CHART.title"
                ),
                href: `/${t}/${u.b.BIRTH_CHART[t]}`,
                subItems: [
                  {
                    title: s.t("celebrities.short_title", { lng: t }),
                    href: `/${t}/${u.b.BIRTH_CHART[t]}/${u.b.BIRTH_CHART.children?.CELEBRITIES[t]}`,
                  },
                  {
                    title: s.t("birth_chart.by_date.short_title", { lng: t }),
                    href: `/${t}/${u.b.BIRTH_CHART[t]}/${u.b.BIRTH_CHART.children?.BY_DATE[t]}`,
                  },
                  {
                    title: s.t("birth_chart.cartography.short_title", {
                      lng: t,
                    }),
                    href: `/${t}/${u.b.BIRTH_CHART[t]}/${u.b.BIRTH_CHART.children?.CARTOGRAPHY[t]}`,
                  },
                ],
              },
              {
                title: s.t("sections.explore_features.more"),
                href: "",
                subItems: [
                  {
                    title: s.t(
                      "sections.explore_features.features.COMPATIBILITY.title"
                    ),
                    href: `/${t}/${u.b.COMPATIBILITY[t]}/${u.b.COMPATIBILITY.children?.LOVE[t]}`,
                  },
                  {
                    title: s.t("MOONOLOGY.title"),
                    href: `/${t}/${u.b.MOONOLOGY[t]}`,
                  },
                  {
                    title: s.t(
                      "sections.explore_features.features.TAROT_READINGS.title"
                    ),
                    href: `/${t}/${u.b.TAROT_READINGS[t]}`,
                  },
                ],
              },
              { title: "Blog", href: "/blog" },
              {
                title: m[t] || "English",
                href: "",
                subItems: h()(m, (e, t) => ({ title: e, href: `/${t}` })),
              },
            ];
          }, [s.i18n.language]);
        };
      var j = s(13519),
        x = s.n(j),
        f = s(95483),
        y = s.n(f);
      let b = (e) => {
        let { href: t, title: s, subItems: a } = e;
        return (0, r.jsx)("li", {
          className: y().item,
          children: a
            ? (0, r.jsxs)("div", {
                className: y().wrapper,
                children: [
                  (0, r.jsx)("span", { className: y().link, children: s }),
                  (0, r.jsx)("div", {
                    className: y().listWrapper,
                    children: (0, r.jsxs)("ul", {
                      className: y().list,
                      children: [
                        t &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(o.N_, {
                              href: t,
                              className: x()(y().option, y().optionMain),
                              children: s,
                            }),
                          }),
                        a.map((e, t) => {
                          let { href: s, title: a } = e;
                          return (0, r.jsx)(
                            "li",
                            {
                              children: (0, r.jsx)(o.N_, {
                                href: s,
                                className: y().option,
                                children: a,
                              }),
                            },
                            t
                          );
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (0, r.jsx)(o.N_, { href: t, className: y().link, children: s }),
        });
      };
      var v = s(27997),
        A = s.n(v);
      let N = (e) => {
        let { lang: t } = e,
          s = g({ lang: t });
        return (0, r.jsx)("nav", {
          className: A().wrapper,
          children: (0, r.jsx)("ul", {
            className: A().list,
            children: s.map((e, t) => (0, r.jsx)(b, { ...e }, t)),
          }),
        });
      };
      var I = s(45686),
        k = s.n(I);
      let w = (e) => {
        let { title: t, href: s, subItems: l } = e,
          [i, n] = (0, a.useState)(!1);
        return (0, r.jsx)("li", {
          children: l
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("span", {
                    className: x()(k().wrapper, k().link),
                    onClick: () => {
                      n((e) => !e);
                    },
                    children: [
                      t,
                      (0, r.jsx)("div", {
                        className: x()(k().icon, { [k().opened]: i }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: x()(k().listWrapper, { [k().opened]: i }),
                    children: (0, r.jsxs)("ul", {
                      className: k().list,
                      children: [
                        s &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(o.N_, {
                              href: s,
                              className: k().link,
                              children: t,
                            }),
                          }),
                        l.map((e, t) => {
                          let { href: s, title: a } = e;
                          return (0, r.jsx)(
                            "li",
                            {
                              children: (0, r.jsx)(o.N_, {
                                href: s,
                                className: x()(k().link, k().optionLink),
                                children: a,
                              }),
                            },
                            t
                          );
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (0, r.jsx)(o.N_, { href: s, className: k().link, children: t }),
        });
      };
      var C = s(23830),
        O = s.n(C);
      let E = (e) => {
        let { lang: t } = e,
          s = (0, n.B)(t),
          l = g({ lang: t }),
          [i, d] = (0, a.useState)(!1);
        return (0, r.jsx)(o.z6, {
          className: O().sideBar,
          menuClassName: O().menu,
          theme: "default",
          visible: i,
          onVisibilityChange: () => {
            d((e) => !e);
          },
          children: (0, r.jsxs)("div", {
            className: O().wrapper,
            children: [
              (0, r.jsx)("nav", {
                children: (0, r.jsxs)("ul", {
                  className: O().list,
                  children: [
                    l.map((e, t) => (0, r.jsx)(w, { ...e }, t)),
                    (0, r.jsx)(w, {
                      title: s.t("sections.footer.contact_us"),
                      href: c.h8,
                    }),
                    (0, r.jsx)(w, {
                      title: s.t("sections.footer.help_center"),
                      href: c.TE,
                    }),
                    (0, r.jsx)(w, {
                      title: s.t("sections.footer.faq"),
                      href: "/en/faq",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(R, { title: s.t("sign_in"), className: O().signIn }),
            ],
          }),
        });
      };
      var L = s(1225),
        M = s(39753),
        T = s(15880),
        S = s.n(T);
      let R = (e) => {
        let { title: t, className: s, ...a } = e;
        return (0, r.jsx)(o.z9, {
          href: "https://app.astroline.today/?source=home",
          className: x()(S().sign_in, s),
          onClick: () => {
            M.A.trackEvent("sign_in", L.ir.CLICK);
          },
          ...a,
          children: t,
        });
      };
      var D = s(7999),
        z = s.n(D);
      let B = (e) => {
        let { lang: t } = e,
          s = (0, n.B)(t);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("header", {
            className: z().header,
            children: (0, r.jsxs)("div", {
              className: z().container,
              children: [
                (0, r.jsxs)(i(), {
                  href: `/${t}`,
                  className: z().logo,
                  children: [
                    (0, r.jsx)(o._V, {
                      src: d.LOGO,
                      width: 37,
                      height: 37,
                      alt: "logo",
                      priority: !0,
                      className: z().image,
                    }),
                    (0, r.jsx)("span", {
                      className: z().title,
                      children: c.C3,
                    }),
                  ],
                }),
                (0, r.jsx)(N, { lang: t }),
                (0, r.jsx)(E, { lang: t }),
                (0, r.jsx)(R, {
                  title: s.t("sign_in"),
                  className: z().sign_in,
                }),
              ],
            }),
          }),
        });
      };
    },
    71549: (e) => {
      e.exports = {
        wrapperSpinner: "style_wrapperSpinner__KrOn_",
        spinner: "style_spinner__Mabfk",
        preloader: "style_preloader__607Zt",
      };
    },
    75253: (e) => {
      e.exports = { text: "style_text__CJPW5" };
    },
    80545: (e) => {
      e.exports = { title: "style_title__iqE3c" };
    },
    83913: (e) => {
      e.exports = {
        footer: "style_footer__0FJqM",
        container: "style_container__VlpNZ",
        link: "style_link__IYzX4",
        main: "style_main__iHCqp",
        homeLink: "style_homeLink__Jxm6F",
        address: "style_address__eSg_T",
        helpCenter: "style_helpCenter__1YHr9",
      };
    },
    85185: (e) => {
      e.exports = { img: "style_img__e7DxB" };
    },
    86067: (e, t, s) => {
      var r = {
        "./ar/general.json": [59068, 9068],
        "./ar/suggests.json": [13629, 3629],
        "./de/general.json": [44196, 4196],
        "./de/suggests.json": [89621, 9621],
        "./en/general.json": [13084, 3084],
        "./en/suggests.json": [75101, 5101],
        "./es/general.json": [42499, 2499],
        "./es/suggests.json": [9776, 9776],
        "./fr/general.json": [66139, 6139],
        "./fr/suggests.json": [79672, 9672],
        "./ja/general.json": [84202, 4202],
        "./ja/suggests.json": [26039, 6039],
      };
      function a(e) {
        if (!s.o(r, e))
          return Promise.resolve().then(() => {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = r[e],
          a = t[0];
        return s.e(t[1]).then(() => s.t(a, 19));
      }
      (a.keys = () => Object.keys(r)), (a.id = 86067), (e.exports = a);
    },
    86389: (e, t, s) => {
      "use strict";
      s.d(t, { b: () => r });
      let r = {
        ZODIAC_SIGNS: {
          en: "zodiac-signs",
          es: "zodiaco-signos",
          de: "tierkreiszeichen",
          fr: "signes-zodiaque",
          ar: "abraj",
          ja: "sei-za",
        },
        HOROSCOPES: {
          en: "horoscopes",
          es: "horoscopos",
          de: "horoskope",
          fr: "horoscopes",
          ar: "tawaqu-at-abraj",
          ja: "hoshi-uranai",
          children: {
            DAILY: {
              en: "daily",
              es: "diario",
              de: "taglich",
              fr: "quotidien",
              ar: "yawmi",
              ja: "mainichi",
            },
          },
          fall: "DAILY",
        },
        PALM_READING: {
          en: "palm-reading",
          es: "palma-lectura",
          de: "handlesen",
          fr: "lecture-lignes-main",
          ar: "palmreading-kaf",
          ja: "teso-uranai",
        },
        COMPATIBILITY: {
          en: "compatibility",
          es: "compatibilidad",
          de: "kompatibilitat",
          fr: "compatibilite",
          ar: "tawafuq",
          ja: "aisho",
          children: {
            LOVE: {
              en: "love",
              es: "amor",
              de: "liebe",
              fr: "amour",
              ar: "hubb",
              ja: "ai",
            },
          },
          fall: "LOVE",
        },
        BIRTH_CHART: {
          en: "birth-chart",
          es: "carta-astral",
          de: "geburtshoroskop",
          fr: "theme-natal",
          ar: "birthchart-wilada",
          ja: "shussei-zu",
          children: {
            CELEBRITIES: {
              en: "celebrities",
              es: "celebridades",
              de: "prominenten",
              fr: "celebrites",
              ar: "mashahir",
              ja: "yumeijin",
            },
            BY_DATE: {
              en: "by-date",
              es: "por-fecha",
              de: "nach-datum",
              fr: "par-date",
              ar: "tarikh",
              ja: "hidzuke-jun",
            },
            CARTOGRAPHY: {
              en: "astrocartography",
              es: "astrocartografia",
              de: "astrokartographie",
              fr: "astrocartographie",
              ar: "falakia",
              ja: "asutorokatogurafi",
            },
          },
        },
        TAROT_READINGS: {
          en: "tarot-readings",
          es: "tarot-lecturas",
          de: "tarot-lesung",
          fr: "lectures-tarot",
          ar: "tarot-qiraat",
          ja: "tarotto-uranai",
        },
        MOONOLOGY: {
          en: "moonology",
          es: "moonologia",
          de: "mondologie",
          fr: "luneologie",
          ar: "eilm-alqamar",
          ja: "tsuki-gaku",
        },
        REVIEWS: {
          en: "reviews",
          es: "comentarios",
          de: "bewertungen",
          fr: "avis",
          ar: "almurajaeat",
          ja: "rebyu",
        },
      };
    },
    86477: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { ReactComponent: () => i, default: () => n });
      var r,
        a = s(12115);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}.hasOwnProperty.call(s, r) && (e[r] = s[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      function i(e) {
        return a.createElement(
          "svg",
          l(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 74,
              height: 74,
              viewBox: "0 0 100 100",
              preserveAspectRatio: "xMidYMid",
            },
            e
          ),
          r ||
            (r = a.createElement("circle", {
              cx: 50,
              cy: 50,
              fill: "none",
              stroke: "#ee8f61",
              strokeWidth: 10,
              r: 35,
              strokeDasharray: "164.93361431346415 56.97787143782138",
            }))
        );
      }
      let n =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NCIgaGVpZ2h0PSI3NCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZThmNjEiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiLz48L3N2Zz4=";
    },
    90016: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => u });
      var r = s(95155),
        a = s(12115),
        l = s(13519),
        i = s.n(l),
        n = s(21115),
        o = s.n(n);
      let c = () =>
        (0, r.jsx)("div", {
          className: o().ct,
          children: (0, r.jsx)("div", { className: o().flare }),
        });
      var d = s(41248),
        _ = s.n(d),
        h = s(61032);
      let u = (0, a.forwardRef)((e, t) => {
        let {
          id: s,
          onClick: a,
          title: l,
          disabled: n = !1,
          className: o = null,
          type: d = "button",
          role: u = "button",
          flare: p = !1,
          titleClassName: m = null,
          iconRight: g = !1,
          ...j
        } = e;
        return (0, r.jsxs)("button", {
          id: s,
          type: d,
          onClick: a,
          className: i()(_().button, o),
          disabled: n,
          role: u,
          ...j,
          children: [
            (0, r.jsx)("div", {
              className: i()(_().button__title, m),
              children: (0, r.jsx)("span", { ref: t, children: l }),
            }),
            g &&
              (0, r.jsx)(h.ReactComponent, {
                className: _()["button__right-icon"],
              }),
            !n && p ? (0, r.jsx)(c, {}) : null,
          ],
        });
      });
    },
    90237: (e, t, s) => {
      "use strict";
      s.d(t, { Link: () => _ });
      var r = s(95155),
        a = s(6874),
        l = s.n(a),
        i = s(35695),
        n = s(13519),
        o = s.n(n),
        c = s(52704),
        d = s.n(c);
      let _ = (e) => {
        let {
            href: t,
            activeClassName: s,
            className: a,
            children: n,
            ...c
          } = e,
          _ = (0, i.usePathname)();
        return (0, r.jsx)(l(), {
          href: t,
          className: o()(a, { [s ?? d().activeDefault]: _ === t }),
          ...c,
          children: n,
        });
      };
    },
    90298: (e, t, s) => {
      "use strict";
      s.d(t, {
        n9: () => y.Article,
        eB: () => c,
        _V: () => O,
        pd: () => d.A,
        N_: () => E.Link,
        z9: () => I,
        wn: () => j,
        z6: () => x.SideBar,
        y$: () => p,
        hE: () => f.A,
      });
      var r = s(95155),
        a = s(12115),
        l = s(13519),
        i = s.n(l),
        n = s(11297),
        o = s.n(n);
      let c = (e) => {
        let { children: t, className: s, ...a } = e;
        return (0, r.jsx)("div", {
          className: i()(o().wrap, s),
          ...a,
          children: t,
        });
      };
      s(90016), s(91343);
      var d = s(25163);
      s(47650);
      var _ = s(71549),
        h = s.n(_),
        u = s(86477);
      let p = (e) => {
        let { className: t, children: s } = e;
        return (0, r.jsxs)("div", {
          className: i()(h().wrapperSpinner, t),
          children: [
            (0, r.jsx)("span", {
              className: h().spinner,
              children: (0, r.jsx)(u.ReactComponent, {
                width: "50px",
                height: "50px",
              }),
            }),
            s,
          ],
        });
      };
      var m = s(95099),
        g = s.n(m);
      let j = a.forwardRef((e, t) => {
        let { children: s, className: a, ...l } = e;
        return (0, r.jsx)("section", {
          ref: t,
          className: i()(g().wrap, a),
          ...l,
          children: s,
        });
      });
      var x = s(63924);
      s(37910), s(33248);
      var f = s(25297);
      s(53723), s(31495);
      var y = s(57551);
      s(80545), s(93305);
      var b = s(6874),
        v = s.n(b),
        A = s(46519),
        N = s.n(A);
      let I = (e) => {
        let { children: t, className: s, ...a } = e;
        return (0, r.jsx)(v(), {
          className: i()(N().link, s),
          ...a,
          children: t,
        });
      };
      var k = s(66766),
        w = s(85185),
        C = s.n(w);
      let O = (e) => {
        let { className: t, width: s, height: a, ...l } = e;
        return (0, r.jsx)(k.default, {
          className: i()(t, C().img),
          width: s ?? 0,
          height: a ?? 0,
          ...l,
        });
      };
      var E = s(90237);
    },
    91343: (e) => {
      e.exports = {
        checkbox: "style_checkbox__sREXt",
        checkbox__mark: "style_checkbox__mark__dtVv_",
      };
    },
    93305: (e, t, s) => {
      "use strict";
      s.d(t, { Collapsible: () => d });
      var r = s(95155),
        a = s(12115),
        l = s(13519),
        i = s.n(l),
        n = s(36364),
        o = s(50842),
        c = s.n(o);
      let d = (e) => {
        let { lang: t, maxHeight: s, children: l } = e,
          [o, d] = (0, a.useState)(!1);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              className: i()(c().collapsible, { [c().hidden]: !o }),
              style: s && !o ? { maxHeight: s } : void 0,
              children: l,
            }),
            !o &&
              (0, r.jsx)(n.u, {
                lang: t,
                onButtonClick: () => d(!o),
                showMore: o,
              }),
          ],
        });
      };
    },
    95099: (e) => {
      e.exports = { wrap: "style_wrap__SayQk" };
    },
    95483: (e) => {
      e.exports = {
        item: "style_item__Vkf8s",
        wrapper: "style_wrapper__UvTHa",
        listWrapper: "style_listWrapper__5Zsgu",
        list: "style_list__pwsq_",
        option: "style_option__R_q49",
        optionMain: "style_optionMain__U6JZK",
        link: "style_link__M0WCv",
      };
    },
    98165: (e) => {
      e.exports = {
        showMore: "style_showMore__fqr0r",
        showMoreText: "style_showMoreText__8ohHh",
        open: "style_open__DVN0x",
      };
    },
  },
]);
