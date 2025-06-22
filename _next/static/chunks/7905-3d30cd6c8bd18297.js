(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7905],
  {
    3707: (e) => {
      e.exports = {
        overlay: "style_overlay__sWEWU",
        modal: "style_modal__Aci0A",
        wrap: "style_wrap__Q0eLf",
        close: "style_close__LuMbe",
        card: "style_card__xX0wT",
        skills: "style_skills__ctJsf",
        skill: "style_skill__PwZBN",
        info_wrap: "style_info_wrap__dN7iA",
        ava: "style_ava__OwbRb",
        info: "style_info__CEOfx",
        name: "style_name__miiWO",
        experience: "style_experience__MsDtb",
        rating: "style_rating__5Bd0a",
        mark: "style_mark__aYCGB",
        text_wrap: "style_text_wrap__XEO_v",
        arrow: "style_arrow__HZyu_",
        text: "style_text__ou_m_",
        title: "style_title__XV4Sz",
        options: "style_options__BmJTg",
        option: "style_option__W9puq",
        btn: "style_btn__Jbf8n",
      };
    },
    5666: (e) => {
      e.exports = {
        wrap: "style_wrap__QyuhM",
        main: "style_main__6fELg",
        questions: "style_questions__KBJBn",
        question: "style_question__hSXx2",
        title_questions: "style_title_questions__tUMKm",
        cards: "style_cards__nG_DE",
        card: "style_card__UdpBl",
        name: "style_name__1SNsg",
        expertise: "style_expertise__F7dvz",
        title: "style_title__pxt9f",
        avatar: "style_avatar__mRUgZ",
      };
    },
    7561: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i, O: () => o });
      var a = s(76649),
        r = s(40459);
      let l = "true" === r.env.REACT_APP_NETWORK_LOGGING,
        n = a.A.create({
          baseURL:
            r.env.REACT_APP_API_BASE_URL ||
            "https://astrology.astroline.app/api/v1",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
          },
        });
      n.interceptors.request.use(
        (e) => (l && console.log("Network Request:", e.url, e.method), e),
        (e) => {
          throw (l && console.error("Network Request:", e), e);
        }
      ),
        n.interceptors.response.use(
          (e) => e.data,
          (e) => {
            l && console.error("Network Response:", e);
            let t = e?.response,
              s = t?.data?.data || t?.data;
            if (s?.message) {
              let e = Error(JSON.stringify(s, null, 2));
              e.name = "Server Error";
              let t = Error(s.message, { cause: e });
              throw (
                ((t.name = s.name),
                (t.status = s.status),
                (t.code = s.code),
                (t.data = s),
                t)
              );
            }
            throw e;
          }
        );
      let o = (e) => (n.defaults.headers.common.Authorization = e),
        i = n;
    },
    11134: (e) => {
      e.exports = {
        wrap: "style_wrap__H3Ro2",
        spinner: "style_spinner__JFzXY",
        preloader: "style_preloader__29bX7",
      };
    },
    33843: () => {},
    39566: (e) => {
      e.exports = {
        overlay: "style_overlay__Cg0u_",
        modal: "style_modal__yk6O7",
        wrap: "style_wrap__E1NpZ",
        avatar: "style_avatar__2kj6H",
        star: "style_star__h77TQ",
        typing: "style_typing__WCa7y",
        dot: "style_dot__3AAeL",
        typingDots: "style_typingDots__qGf94",
        astrologer_info: "style_astrologer_info__Z0UAy",
        close: "style_close__7y1lW",
        rating: "style_rating__Ib0i2",
        time_left: "style_time_left__FR9wi",
        messages_wrap: "style_messages_wrap__pFtKX",
        message: "style_message__Z75bh",
        user_message: "style_user_message__bpUpc",
        text: "style_text__IxB2R",
        time: "style_time__5uYzG",
      };
    },
    44128: (e, t, s) => {
      "use strict";
      s.d(t, { j: () => i });
      var a = s(53189),
        r = s(22602),
        l = s(7561);
      let n = (e) => l.A.post("/auth", { device_id: e }),
        o = (e) => {
          let { lang: t } = e;
          return l.A.put("/profile", { lang: t });
        },
        i = (0, a.Ay)(
          async (e) => {
            let { lang: t } = e,
              s = await r.A.getIDFM(),
              a = await n(s);
            return (
              (0, l.O)(`Bearer ${a?.profile?.access_token}`),
              await o({ lang: t }),
              s
            );
          },
          { maxAge: 36e5, cacheKey: (e) => JSON.stringify(e) }
        );
    },
    61634: (e) => {
      e.exports = {
        overlay: "style_overlay__ohivk",
        modal: "style_modal__7XDCS",
        wrap: "style_wrap__E_mIy",
        title: "style_title___42DK",
        text: "style_text__XxLbr",
        btn: "style_btn__nr_lP",
      };
    },
    67408: (e) => {
      e.exports = { wrap: "style_wrap__NiYoV" };
    },
    77183: (e) => {
      e.exports = {
        wrap: "style_wrap___om79",
        chat_wrap: "style_chat_wrap__4xB2A",
        btn: "style_btn__5lfzK",
        chat: "style_chat__VE8us",
      };
    },
    77905: (e, t, s) => {
      "use strict";
      s.d(t, { AdvisorsChat: () => eT });
      var a,
        r,
        l,
        n,
        o = s(95155),
        i = s(12115),
        c = s(2367),
        _ = s(13519),
        d = s.n(_),
        m = s(81772),
        u = s.n(m),
        g = s(44128),
        p = s(16377),
        h = s.n(p),
        y = s(66766),
        v = s(56924),
        x = s.n(v),
        w = s(92837),
        f = s.n(w);
      s(33843);
      try {
        x().setAppElement("#root");
      } catch {
        try {
          x().setAppElement("body");
        } catch {}
      }
      let j = (e) => {
        let {
            children: t,
            isOpen: s,
            centered: a,
            maxModalHeight: r,
            onCloseModal: l,
            className: n,
            overlayClassName: c,
          } = e,
          [_, m] = (0, i.useState)(!1),
          u = (e) => document.body.classList.remove(e);
        return (0, o.jsx)(x(), {
          style: { content: { ...(r ? { maxHeight: `${r}px` } : {}) } },
          overlayClassName: {
            base: d()(f().overlay, c),
            afterOpen: d()(f()["overlay-after-open"]),
            beforeClose: d()(f()["overlay-before-close"]),
          },
          className: {
            base: d()(f().modal, n, { [f().centered]: a }),
            afterOpen: d()({ [f()["modal-content-after-open"]]: _ }),
            beforeClose: d()(f()["modal-content-before-close"]),
          },
          htmlOpenClassName: "ReactModal__Html--open",
          onAfterOpen: () => {
            setTimeout(() => {
              m(!0);
            }, 0);
          },
          onAfterClose: () => {
            setTimeout(() => {
              m(!1), u("ReactModal__Body--open");
            }, 0);
          },
          closeTimeoutMS: 500,
          isOpen: s,
          onRequestClose: l,
          children: t,
        });
      };
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var a in s)
                  ({}.hasOwnProperty.call(s, a) && (e[a] = s[a]));
              }
              return e;
            }).apply(null, arguments);
      }
      function b(e) {
        return i.createElement(
          "svg",
          N(
            {
              width: 24,
              height: 24,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          a ||
            (a = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.473 12l-6.255 6.255c-.34.34-.275.959.146 1.38.422.422 1.04.488 1.38.147L12 13.527l6.255 6.255c.34.34.959.275 1.38-.146.422-.422.488-1.04.147-1.38L13.527 12l6.255-6.255c.34-.34.275-.959-.146-1.38-.422-.422-1.04-.488-1.38-.147L12 10.473 5.745 4.218c-.34-.34-.959-.275-1.38.146-.422.422-.488 1.04-.147 1.38L10.473 12z",
              fill: "#D0B894",
            }))
        );
      }
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var a in s)
                  ({}.hasOwnProperty.call(s, a) && (e[a] = s[a]));
              }
              return e;
            }).apply(null, arguments);
      }
      function R(e) {
        return i.createElement(
          "svg",
          A(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 15,
              height: 15,
              fill: "none",
            },
            e
          ),
          r ||
            (r = i.createElement("path", {
              d: "M5.614 12.898a.361.361 0 01-.506 0 .342.342 0 010-.493l5.031-4.903-5.034-4.907a.342.342 0 010-.493.364.364 0 01.506 0l5.28 5.147a.392.392 0 01.087.135.342.342 0 01-.083.367l-5.28 5.147z",
              fill: "#FFF",
              stroke: "#FFF",
              strokeWidth: 0.5,
            }))
        );
      }
      var E = s(77183),
        O = s.n(E);
      let S = (e) => {
        let { tr: t, onSubmit: s } = e,
          [a, r] = (0, i.useState)(""),
          [l, n] = (0, i.useState)(!1);
        return (0, o.jsx)("div", {
          className: O().wrap,
          children: (0, o.jsxs)("div", {
            className: O().chat_wrap,
            children: [
              (0, o.jsx)("textarea", {
                value: a,
                onFocus: () => {
                  n(!0);
                },
                onBlur: () => {
                  setTimeout(() => {
                    n(!1);
                  }, 300);
                },
                onChange: (e) => {
                  r(e.target.value);
                },
                placeholder: t.t("placeholder"),
                className: O().chat,
              }),
              l &&
                !!a.length &&
                (0, o.jsx)("button", {
                  className: O().btn,
                  onClick: () => {
                    s(a), r("");
                  },
                  children: (0, o.jsx)(R, {}),
                }),
            ],
          }),
        });
      };
      var C = s(39566),
        k = s.n(C);
      let T = (e) => {
        let {
          tr: t,
          timeLeft: s,
          visible: a,
          astrologer: r,
          onSubmit: l,
          onCloseClick: n,
          messages: i,
          isTyping: c,
        } = e;
        return (0, o.jsx)(j, {
          isOpen: a,
          className: k().modal,
          overlayClassName: k().overlay,
          children: (0, o.jsxs)("div", {
            className: k().wrap,
            children: [
              (0, o.jsxs)("div", {
                className: k().astrologer_info,
                children: [
                  (0, o.jsx)(y.default, {
                    className: k().avatar,
                    src: r?.avatar.uri || "",
                    width: 70,
                    height: 70,
                    alt: r?.name || "astrologer",
                  }),
                  (0, o.jsxs)("div", {
                    className: k().info,
                    children: [
                      (0, o.jsx)("div", {
                        className: k().name,
                        children: r?.name,
                      }),
                      (0, o.jsx)("div", {
                        className: k().rating,
                        children: r?.expertise,
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: k().time_left,
                    children: h()(1e3 * s).format("mm:ss"),
                  }),
                  (0, o.jsx)("button", {
                    className: k().close,
                    onClick: n,
                    children: (0, o.jsx)(b, {}),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: k().messages_wrap,
                children: [
                  i.map((e) =>
                    (0, o.jsxs)(
                      "div",
                      {
                        className: d()(k().message, {
                          [k().user_message]: "question" === e.type,
                        }),
                        children: [
                          (0, o.jsx)("div", {
                            className: k().text,
                            children: e.message,
                          }),
                          (0, o.jsx)("div", {
                            className: k().time,
                            children: h()(e.created_at).format("HH:mm"),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                  c &&
                    (0, o.jsx)("div", {
                      className: k().message,
                      children: (0, o.jsxs)("div", {
                        className: d()(k().text, k().typing),
                        children: [
                          (0, o.jsx)("div", { className: k().dot }),
                          (0, o.jsx)("div", { className: k().dot }),
                          (0, o.jsx)("div", { className: k().dot }),
                        ],
                      }),
                    }),
                ],
              }),
              (0, o.jsx)(S, {
                tr: t,
                onSubmit: (e) => {
                  l(e);
                },
              }),
            ],
          }),
        });
      };
      var q = s(53189),
        B = s(7561);
      let $ = "/astrology-questions",
        F = `${$}/add-message`,
        M = `${$}/add-time`,
        L = `${$}/history`,
        P = `${$}/answers`,
        D = `${$}/astrologers`,
        U = `${$}/start`,
        I = `${$}/balance`,
        G = `${$}/charge-time`,
        H = (e) =>
          e
            ? null ===
              e.match(
                /https:\/\/astrology-stage.astroline.app|https:\/\/astrology.astroline.app/i
              )
              ? "https://astrology.astroline.app" + e
              : e
            : "",
        z = (0, q.Ay)(
          async () => {
            try {
              return (await B.A.get(D)).map((e) => ({
                ...e,
                avatar: { uri: H(e.photo) },
              }));
            } catch (e) {
              return (
                console.log(
                  "ERROR [Astrologist chat] getAstrologersProfile",
                  e
                ),
                []
              );
            }
          },
          { maxAge: 36e5, cacheKey: (e) => JSON.stringify(e) }
        ),
        J = async (e) => {
          let {
            id: t,
            platform: s,
            message: a = "",
            needResponse: r = 1,
            metadata: l,
            webProject: n = "undetected",
            version: o = "undetected",
          } = e;
          try {
            return await B.A.post(U, {
              astrologer_id: t,
              message: a,
              needResponse: r,
              platform: s,
              metadata: l,
              webProject: n,
              version: o,
            });
          } catch (e) {
            return (
              console.log("ERROR [Astrologist chat] startChat", e),
              { chat_id: 0, is_unlimited: !1 }
            );
          }
        },
        W = async function (e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          try {
            return await B.A.get(`${L}?astrologer_id=${e}&receiveTarot=${t}`);
          } catch (e) {
            return console.log("ERROR [Astrologist chat] getHistory", e), [];
          }
        },
        X = async function (e, t) {
          let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          try {
            return await B.A.post(F, {
              astrologer_id: e,
              message: t,
              hiddenMessage: s,
              metadata: a,
            });
          } catch (e) {
            console.log("ERROR [Astrologist chat] addMessage", e);
          }
        },
        Y = async function (e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          try {
            return await B.A.get(`${P}?astrologer_id=${e}&receiveTarot=${t}`, {
              method: "GET",
            });
          } catch (e) {
            return (
              console.log("ERROR [Astrologist chat] getAnswers", e),
              { isBlurred: !1, isTyping: 0, isRecording: 0, messages: [] }
            );
          }
        },
        K = async (e) => B.A.post(M, { code: e }),
        Z = async () => {
          try {
            return await B.A.get(`${I}`);
          } catch (e) {
            return (
              console.log("ERROR [Astrologist chat] getTimeBalance", e),
              {
                balance: 0,
                freeBalance: 0,
                isRewardedForFirstUse: 1,
                isRewardedForRenew: 1,
                isRewardedForUnpaidUser: 1,
                lastTransactionDate: null,
                lastTransactionStatus: null,
                totalTransactionsCount: 0,
              }
            );
          }
        },
        V = async (e, t) => {
          try {
            return await B.A.post(G, { seconds: e, chatId: t });
          } catch (e) {
            return (
              console.log("ERROR [Astrologist chat] chargeTime", e),
              { balance: 0, freeBalance: 0 }
            );
          }
        },
        Q = () => B.A.get("/astrology-questions/suggests");
      var ee = s(71913),
        et = s.n(ee),
        es = s(40459);
      let ea = async (e, t, s) => {
          let a = await J({
            id: e,
            message: s || "",
            needResponse: t,
            platform: "undetected",
            metadata: {},
            webProject: es.env.REACT_APP_PROJECT_ID || "undetected",
            version: "unknown",
          });
          return { history: await W(e), startChatResponse: a };
        },
        er = async (e) => {
          if ("suggests" in e) return et()(e.suggests, e.length);
          try {
            let t = await Q(),
              s = e.types.reduce((e, s) => {
                let a = Object.values(t[s].questions).map((e) => {
                  let { text: t } = e;
                  return t;
                });
                return [...e, ...a];
              }, []);
            return et()(s, e.length);
          } catch (e) {
            return console.log("[ERROR GET ASTROLOGER SUGGESTS]"), [];
          }
        },
        el = (e) => {
          let { astrologer: t, isEnabled: s } = e,
            [a, r] = (0, i.useState)([]),
            [l, n] = (0, i.useState)(void 0),
            [o, c] = (0, i.useState)(!1),
            [_, d] = (0, i.useState)(!1),
            [m, u] = (0, i.useState)(!1),
            [g, p] = (0, i.useState)(0);
          (0, i.useEffect)(() => {
            0 !== g && l && g % 10 == 0 && V(10, l);
          }, [g]);
          let y = async (e) => {
            let { message: t, astrolog: s } = e;
            s &&
              (d(!0),
              p((await Z()).balance),
              ea(s.astrologer_id, 0, "")
                .then((e) => {
                  let { history: a, startChatResponse: l } = e;
                  u(!0),
                    r(a),
                    n(l?.chat_id),
                    t &&
                      (X(s.astrologer_id, t.message, "", {}),
                      r((e) => [...e, t]));
                })
                .finally(() => {
                  d(!1);
                }));
          };
          return (
            (0, i.useEffect)(() => {
              let e;
              return (
                s &&
                  l &&
                  t?.astrologer_id &&
                  (e = setInterval(async () => {
                    let e = await Y(t.astrologer_id);
                    e?.messages &&
                      (c(!!e?.isTyping),
                      r((t) => [...t, ...e.messages.reverse()]));
                  }, 4e3)),
                () => {
                  clearInterval(e);
                }
              );
            }, [s, t?.astrologer_id, l]),
            {
              timeLeft: g,
              isLoading: _,
              astrologer: t,
              isTyping: o,
              chatId: l,
              messages: a,
              isStarted: m,
              startChat: y,
              addNewMessage: (e) => {
                if (!t) return;
                let s = {
                  id: Math.random().toString(16),
                  type: "question",
                  message: e,
                  created_at: h()().format("YYYY-MM-DD HH:mm:ss"),
                  is_viewed: 0,
                  is_answered: 1,
                  animated: !1,
                  is_viewed_by_user: 1,
                  metadata: {},
                };
                m || _
                  ? X(t.astrologer_id, e, "", {})
                  : (c(!0), y({ message: s, astrolog: t })),
                  r((e) => [...e, s]);
              },
              setTimeLeft: p,
            }
          );
        };
      var en = s(25297),
        eo = s(5666),
        ei = s.n(eo);
      let ec = (e) => {
        let {
            tr: t,
            suggests: s,
            onSubmit: a,
            onAstrologerClick: r,
            astrologers: l,
          } = e,
          n = (0, i.useMemo)(
            () => l?.sort(() => Math.random() - 0.5).slice(0, 4),
            [l]
          ),
          c = (e) => () => {
            r(e);
          };
        return (0, o.jsxs)("div", {
          className: ei().wrap,
          children: [
            (0, o.jsx)(en.A, { level: "h2", children: t.t("title") }),
            (0, o.jsxs)("div", {
              className: ei().main,
              children: [
                !!n?.length &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(en.A, {
                        className: ei().title,
                        children: t.t("astrologers_preview.title"),
                      }),
                      (0, o.jsx)("div", {
                        className: ei().cards,
                        children: n.map((e) =>
                          (0, o.jsxs)(
                            "div",
                            {
                              onClick: c(e),
                              className: ei().card,
                              children: [
                                (0, o.jsx)(y.default, {
                                  className: ei().avatar,
                                  src: e.avatar.uri,
                                  width: 70,
                                  height: 70,
                                  alt: e.name,
                                }),
                                (0, o.jsx)("div", {
                                  className: ei().name,
                                  children: e.name,
                                }),
                                (0, o.jsx)("div", {
                                  className: ei().expertise,
                                  children: e.expertise,
                                }),
                              ],
                            },
                            e.astrologer_id
                          )
                        ),
                      }),
                    ],
                  }),
                (0, o.jsx)(S, { tr: t, onSubmit: a }),
              ],
            }),
            !!s.length &&
              (0, o.jsxs)("div", {
                className: ei().questions,
                children: [
                  (0, o.jsx)(en.A, {
                    className: ei().title_questions,
                    children: t.t("astrologers_preview.questions_title"),
                  }),
                  s.map((e) =>
                    (0, o.jsxs)(
                      "div",
                      {
                        className: ei().question,
                        onClick: () => a(e),
                        children: [e, (0, o.jsx)(R, { className: ei().arrow })],
                      },
                      e
                    )
                  ),
                ],
              }),
          ],
        });
      };
      var e_ = s(90016),
        ed = s(37910),
        em = s(61634),
        eu = s.n(em);
      let eg = (e) => {
          let { tr: t, visible: s, onClose: a } = e;
          return (0, o.jsx)(j, {
            isOpen: s,
            className: eu().modal,
            overlayClassName: eu().overlay,
            children: (0, o.jsxs)("div", {
              className: eu().wrap,
              children: [
                (0, o.jsx)(en.A, {
                  className: eu().title,
                  children: t.t("astrologers_preview.error_title"),
                }),
                (0, o.jsx)(ed.A, {
                  className: eu().text,
                  children: t.t("astrologers_preview.error_text"),
                }),
                (0, o.jsx)(e_.A, {
                  className: eu().btn,
                  onClick: a,
                  title: t.t("astrologers_preview.error_button"),
                }),
              ],
            }),
          });
        },
        ep = (e) => {
          let [t, s] = (0, i.useState)([]);
          return {
            suggests: t,
            initSuggests: async () => {
              s(await er(e));
            },
          };
        };
      function eh() {
        return (eh = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var a in s)
                  ({}.hasOwnProperty.call(s, a) && (e[a] = s[a]));
              }
              return e;
            }).apply(null, arguments);
      }
      function ey(e) {
        return i.createElement(
          "svg",
          eh(
            {
              height: 800,
              width: 800,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 53.867 53.867",
            },
            e
          ),
          l ||
            (l = i.createElement("path", {
              fill: "#efce4a",
              d: "M26.934 1.318l8.322 16.864 18.611 2.705L40.4 34.013l3.179 18.536-16.645-8.751-16.646 8.751 3.179-18.536L0 20.887l18.611-2.705z",
            }))
        );
      }
      var ev = s(3707),
        ex = s.n(ev),
        ew = s(11134),
        ef = s.n(ew);
      function ej() {
        return (ej = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var a in s)
                  ({}.hasOwnProperty.call(s, a) && (e[a] = s[a]));
              }
              return e;
            }).apply(null, arguments);
      }
      function eN(e) {
        return i.createElement(
          "svg",
          ej(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 74,
              height: 74,
              viewBox: "0 0 100 100",
              preserveAspectRatio: "xMidYMid",
            },
            e
          ),
          n ||
            (n = i.createElement("circle", {
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
      let eb = () =>
          (0, o.jsx)("div", {
            className: ef().wrap,
            children: (0, o.jsx)("span", {
              className: ef().spinner,
              children: (0, o.jsx)(eN, { width: "50px", height: "50px" }),
            }),
          }),
        eA = "astrologers_preview.preview_modal",
        eR = (e) => {
          let {
              tr: t,
              visible: s,
              astrologer: a,
              isLoading: r,
              onClose: l,
              onSubmit: n,
            } = e,
            i = t.t(`${eA}.options`, { returnObjects: !0, defaultValue: [] });
          return (0, o.jsx)(j, {
            isOpen: s,
            className: ex().modal,
            overlayClassName: ex().overlay,
            children: (0, o.jsxs)("div", {
              className: ex().wrap,
              children: [
                (0, o.jsx)(b, { className: ex().close, onClick: l }),
                (0, o.jsx)(en.A, {
                  className: ex().title,
                  children: t.t(`${eA}.title`),
                }),
                (0, o.jsxs)("div", {
                  className: ex().card,
                  children: [
                    (0, o.jsxs)("div", {
                      className: ex().info_wrap,
                      children: [
                        (0, o.jsx)(y.default, {
                          className: ex().ava,
                          src: a?.avatar.uri || "",
                          width: 70,
                          height: 70,
                          alt: a?.name || "astrologer",
                        }),
                        (0, o.jsxs)("div", {
                          className: ex().info,
                          children: [
                            (0, o.jsx)("div", {
                              className: ex().name,
                              children: a?.name,
                            }),
                            (0, o.jsx)("div", {
                              className: ex().experience,
                              children: a?.short_description,
                            }),
                            (0, o.jsxs)("div", {
                              className: ex().rating,
                              children: [
                                (0, o.jsx)(ey, {}),
                                (0, o.jsx)("span", {
                                  className: ex().mark,
                                  children: a?.rating,
                                }),
                                t.t(`${eA}.reviews`, { count: a?.reviews }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: ex().skills,
                      children: a?.skills?.map((e) =>
                        (0, o.jsx)(
                          "div",
                          { className: ex().skill, children: e },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: ex().text_wrap,
                  children: [
                    (0, o.jsx)("div", { className: ex().arrow }),
                    (0, o.jsx)(ed.A, {
                      className: ex().text,
                      children: t.t(`${eA}.text`),
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: ex().options,
                  children: i.map((e, t) =>
                    (0, o.jsx)(
                      "div",
                      { className: ex().option, children: e },
                      t
                    )
                  ),
                }),
                (0, o.jsx)(e_.A, {
                  title: r ? (0, o.jsx)(eb, {}) : t.t(`${eA}.btn`),
                  className: ex().btn,
                  onClick: () => {
                    r || n();
                  },
                }),
              ],
            }),
          });
        },
        eE = (e) => {
          let { tr: t, suggestsInfo: s, onFinish: a } = e,
            r = (0, i.useRef)(!1),
            [l, n] = (0, i.useState)(""),
            [c, _] = (0, i.useState)(null),
            [d, m] = (0, i.useState)(null),
            [p, h] = (0, i.useState)(!1),
            [y, v] = (0, i.useState)(!1),
            [x, w] = (0, i.useState)(!1),
            [f, j] = (0, i.useState)(null),
            {
              timeLeft: N,
              chatId: b,
              isLoading: A,
              isStarted: R,
              messages: E,
              isTyping: O,
              addNewMessage: S,
              setTimeLeft: C,
              startChat: k,
            } = el({ astrologer: d, isEnabled: p }),
            { suggests: q, initSuggests: B } = ep({
              ...s,
              lang: t.i18n.language,
            });
          return (
            (0, i.useEffect)(() => {
              (async () => {
                n(await (0, g.j)({ lang: t.i18n.language }));
                let e = await z();
                B(), _(e), m(u()(e));
              })();
            }, []),
            (0, i.useEffect)(() => {
              let e = async () => {
                try {
                  await K("chat_at_seo_site"), (r.current = !0);
                } catch (e) {
                  console.log(e);
                } finally {
                  Z().then((e) => {
                    C(e.balance);
                  }),
                    (r.current = !0);
                }
              };
              x && !r.current && e();
            }, [x, C]),
            (0, i.useEffect)(() => {
              0 === N && R && (h(!1), v(!0));
            }, [N, R]),
            (0, i.useEffect)(() => {
              let e;
              if (b && p && 0 !== N)
                return (
                  (e = setInterval(() => {
                    C((e) => e - 1);
                  }, 1e3)),
                  () => {
                    clearInterval(e);
                  }
                );
            }, [b, p]),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(T, {
                  tr: t,
                  timeLeft: N,
                  visible: p,
                  messages: E,
                  isTyping: O,
                  onSubmit: S,
                  onCloseClick: () => h(!1),
                  astrologer: d,
                }),
                (0, o.jsx)(ec, {
                  tr: t,
                  suggests: q,
                  onAstrologerClick: (e) => {
                    e.astrologer_id !== d?.astrologer_id &&
                      (m(e), k({ astrolog: e })),
                      w(!0);
                  },
                  astrologers: c,
                  onSubmit: (e) => {
                    k({ astrolog: d }), j(e), w(!0);
                  },
                }),
                (0, o.jsx)(eR, {
                  tr: t,
                  visible: x,
                  onSubmit: () => {
                    if ((w(!1), !N)) return void v(!0);
                    f && S(f), h(!0), j(null);
                  },
                  onClose: () => {
                    w(!1), j(null);
                  },
                  astrologer: d,
                  isLoading: A && !R && !r.current,
                }),
                (0, o.jsx)(eg, {
                  tr: t,
                  visible: y,
                  onClose: () => {
                    v(!1), a({ idfm: l });
                  },
                }),
              ],
            })
          );
        };
      var eO = s(24757),
        eS = s(21760),
        eC = s(67408),
        ek = s.n(eC);
      let eT = (e) => {
        let { lang: t, topic: s, className: a } = e,
          r = (0, eS.B)(t, eO.C),
          l = (0, eS.B)(t, "suggests").t(s, { returnObjects: !0 });
        return (0, o.jsx)("section", {
          className: d()(ek().wrap, a),
          children: (0, o.jsx)(eE, {
            tr: r,
            suggestsInfo: { suggests: l, length: 5 },
            onFinish: (e) => {
              let { idfm: t } = e;
              window.location.href = c.A.stringifyUrl({
                url: "https://sub.astroline.today/quiz-pp?utm_source=astroine.today",
                query: { idfm: t, campaign_id: "advisors-chat" },
              });
            },
          }),
        });
      };
    },
    92837: (e) => {
      e.exports = {
        overlay: "style_overlay__SIHeD",
        "overlay-after-open": "style_overlay-after-open__xoPVp",
        "overlay-before-close": "style_overlay-before-close__Dyuu1",
        modal: "style_modal__1odtU",
        "modal-content-after-open": "style_modal-content-after-open__RbkyQ",
        "modal-content-before-close": "style_modal-content-before-close__TJhu_",
        centered: "style_centered__yS2De",
      };
    },
  },
]);
