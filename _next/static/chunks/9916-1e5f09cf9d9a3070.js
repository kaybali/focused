(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9916],
  {
    819: (t, e, r) => {
      var n = r(23259),
        i = r(47018),
        o = r(31327),
        s = n ? n.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return o(t) || i(t) || !!(s && t && t[s]);
      };
    },
    2236: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    3120: (t, e, r) => {
      var n = r(6357);
      t.exports = function (t, e, r) {
        "__proto__" == e && n
          ? n(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      };
    },
    3762: (t, e, r) => {
      t = r.nmd(t);
      var n = r(24023),
        i = e && !e.nodeType && e,
        o = i && t && !t.nodeType && t,
        s = o && o.exports === i ? n.Buffer : void 0,
        a = s ? s.allocUnsafe : void 0;
      t.exports = function (t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = a ? a(r) : new t.constructor(r);
        return t.copy(n), n;
      };
    },
    3793: (t, e, r) => {
      var n = r(30549),
        i = r(94014),
        o = r(90306),
        s = Math.max,
        a = Math.min;
      t.exports = function (t, e, r) {
        var u,
          c,
          l,
          f,
          d,
          h,
          p = 0,
          v = !1,
          b = !1,
          m = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function w(e) {
          var r = u,
            n = c;
          return (u = c = void 0), (p = e), (f = t.apply(n, r));
        }
        function g(t) {
          var r = t - h,
            n = t - p;
          return void 0 === h || r >= e || r < 0 || (b && n >= l);
        }
        function y() {
          var t,
            r,
            n,
            o = i();
          if (g(o)) return x(o);
          d = setTimeout(
            y,
            ((t = o - h), (r = o - p), (n = e - t), b ? a(n, l - r) : n)
          );
        }
        function x(t) {
          return ((d = void 0), m && u) ? w(t) : ((u = c = void 0), f);
        }
        function _() {
          var t,
            r = i(),
            n = g(r);
          if (((u = arguments), (c = this), (h = r), n)) {
            if (void 0 === d)
              return (p = t = h), (d = setTimeout(y, e)), v ? w(t) : f;
            if (b) return clearTimeout(d), (d = setTimeout(y, e)), w(h);
          }
          return void 0 === d && (d = setTimeout(y, e)), f;
        }
        return (
          (e = o(e) || 0),
          n(r) &&
            ((v = !!r.leading),
            (l = (b = "maxWait" in r) ? s(o(r.maxWait) || 0, e) : l),
            (m = "trailing" in r ? !!r.trailing : m)),
          (_.cancel = function () {
            void 0 !== d && clearTimeout(d), (p = 0), (u = h = c = d = void 0);
          }),
          (_.flush = function () {
            return void 0 === d ? f : x(i());
          }),
          _
        );
      };
    },
    4131: (t, e, r) => {
      var n = r(13486);
      t.exports = function (t) {
        var e = new t.constructor(t.byteLength);
        return new n(e).set(new n(t)), e;
      };
    },
    4321: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length;
          ++r < n && !1 !== e(t[r], r, t);

        );
        return t;
      };
    },
    5246: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length, i = 0, o = [];
          ++r < n;

        ) {
          var s = t[r];
          e(s, r, t) && (o[i++] = s);
        }
        return o;
      };
    },
    5909: (t, e, r) => {
      var n = r(59789);
      t.exports = function (t, e) {
        var r = n(this, t),
          i = r.size;
        return r.set(t, e), (this.size += +(r.size != i)), this;
      };
    },
    6357: (t, e, r) => {
      var n = r(67466);
      t.exports = (function () {
        try {
          var t = n(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch (t) {}
      })();
    },
    6380: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    7394: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    8335: (t, e, r) => {
      var n = r(85814),
        i = r(66619),
        o = r(48692),
        s = r(66985),
        a = r(26743),
        u = r(90450),
        c = r(22283),
        l = "[object Map]",
        f = "[object Promise]",
        d = "[object Set]",
        h = "[object WeakMap]",
        p = "[object DataView]",
        v = c(n),
        b = c(i),
        m = c(o),
        w = c(s),
        g = c(a),
        y = u;
      ((n && y(new n(new ArrayBuffer(1))) != p) ||
        (i && y(new i()) != l) ||
        (o && y(o.resolve()) != f) ||
        (s && y(new s()) != d) ||
        (a && y(new a()) != h)) &&
        (y = function (t) {
          var e = u(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? c(r) : "";
          if (n)
            switch (n) {
              case v:
                return p;
              case b:
                return l;
              case m:
                return f;
              case w:
                return d;
              case g:
                return h;
            }
          return e;
        }),
        (t.exports = y);
    },
    8512: (t, e, r) => {
      var n = r(20875),
        i = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return (
          !(r < 0) &&
          (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, !0)
        );
      };
    },
    9058: (t, e, r) => {
      var n = r(35143),
        i = r(9794),
        o = r(46920);
      t.exports = function (t) {
        return o(t) ? n(t) : i(t);
      };
    },
    9086: (t, e, r) => {
      var n = r(8335),
        i = r(72570);
      t.exports = function (t) {
        return i(t) && "[object Set]" == n(t);
      };
    },
    9794: (t, e, r) => {
      var n = r(90707),
        i = r(67024),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return i(t);
        var e = [];
        for (var r in Object(t))
          o.call(t, r) && "constructor" != r && e.push(r);
        return e;
      };
    },
    10352: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)); );
        return r;
      };
    },
    10491: (t, e, r) => {
      var n = r(76992),
        i = r(8512),
        o = r(80745),
        s = r(85557),
        a = r(35045);
      function u(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (u.prototype.clear = n),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = s),
        (u.prototype.set = a),
        (t.exports = u);
    },
    11304: (t, e, r) => {
      var n = r(87592);
      t.exports = function (t) {
        return (null == t ? 0 : t.length) ? n(t, 1) : [];
      };
    },
    11498: (t, e, r) => {
      var n = r(71801);
      t.exports = function (t) {
        return n(t) ? void 0 : t;
      };
    },
    11877: (t) => {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    12043: (t, e, r) => {
      var n = r(54497),
        i = Math.max;
      t.exports = function (t, e, r) {
        return (
          (e = i(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var o = arguments, s = -1, a = i(o.length - e, 0), u = Array(a);
              ++s < a;

            )
              u[s] = o[e + s];
            s = -1;
            for (var c = Array(e + 1); ++s < e; ) c[s] = o[s];
            return (c[e] = r(u)), n(t, this, c);
          }
        );
      };
    },
    13080: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "minute",
          e = /[+-]\d\d(?::?\d\d)?/g,
          r = /([+-]|\d\d)/g;
        return function (n, i, o) {
          var s = i.prototype;
          (o.utc = function (t) {
            var e = { date: t, utc: !0, args: arguments };
            return new i(e);
          }),
            (s.utc = function (e) {
              var r = o(this.toDate(), { locale: this.$L, utc: !0 });
              return e ? r.add(this.utcOffset(), t) : r;
            }),
            (s.local = function () {
              return o(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var a = s.parse;
          s.parse = function (t) {
            t.utc && (this.$u = !0),
              this.$utils().u(t.$offset) || (this.$offset = t.$offset),
              a.call(this, t);
          };
          var u = s.init;
          s.init = function () {
            if (this.$u) {
              var t = this.$d;
              (this.$y = t.getUTCFullYear()),
                (this.$M = t.getUTCMonth()),
                (this.$D = t.getUTCDate()),
                (this.$W = t.getUTCDay()),
                (this.$H = t.getUTCHours()),
                (this.$m = t.getUTCMinutes()),
                (this.$s = t.getUTCSeconds()),
                (this.$ms = t.getUTCMilliseconds());
            } else u.call(this);
          };
          var c = s.utcOffset;
          s.utcOffset = function (n, i) {
            var o = this.$utils().u;
            if (o(n))
              return this.$u
                ? 0
                : o(this.$offset)
                ? c.call(this)
                : this.$offset;
            if (
              "string" == typeof n &&
              null ===
                (n = (function (t) {
                  void 0 === t && (t = "");
                  var n = t.match(e);
                  if (!n) return null;
                  var i = ("" + n[0]).match(r) || ["-", 0, 0],
                    o = i[0],
                    s = 60 * i[1] + +i[2];
                  return 0 === s ? 0 : "+" === o ? s : -s;
                })(n))
            )
              return this;
            var s = 16 >= Math.abs(n) ? 60 * n : n,
              a = this;
            if (i) return (a.$offset = s), (a.$u = 0 === n), a;
            if (0 !== n) {
              var u = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((a = this.local().add(s + u, t)).$offset = s),
                (a.$x.$localOffset = u);
            } else a = this.utc();
            return a;
          };
          var l = s.format;
          (s.format = function (t) {
            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return l.call(this, e);
          }),
            (s.valueOf = function () {
              var t = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * t;
            }),
            (s.isUTC = function () {
              return !!this.$u;
            }),
            (s.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (s.toString = function () {
              return this.toDate().toUTCString();
            });
          var f = s.toDate;
          s.toDate = function (t) {
            return "s" === t && this.$offset
              ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : f.call(this);
          };
          var d = s.diff;
          s.diff = function (t, e, r) {
            if (t && this.$u === t.$u) return d.call(this, t, e, r);
            var n = this.local(),
              i = o(t).local();
            return d.call(n, i, e, r);
          };
        };
      })();
    },
    13486: (t, e, r) => {
      t.exports = r(24023).Uint8Array;
    },
    13555: (t) => {
      t.exports = function () {
        return [];
      };
    },
    13797: (t, e, r) => {
      var n = r(86648);
      t.exports = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += +!this.has(t)),
          (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    13860: (t) => {
      "use strict";
      var e = function (t) {};
      t.exports = function (t, r) {
        for (
          var n, i = arguments.length, o = Array(i > 2 ? i - 2 : 0), s = 2;
          s < i;
          s++
        )
          o[s - 2] = arguments[s];
        if ((e(r), !t)) {
          if (void 0 === r)
            n = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var a = 0;
            (n = Error(
              r.replace(/%s/g, function () {
                return String(o[a++]);
              })
            )).name = "Invariant Violation";
          }
          throw ((n.framesToPop = 1), n);
        }
      };
    },
    15090: (t, e, r) => {
      var n = r(65675);
      function i(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            i = e ? e.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(i)) return o.get(i);
          var s = t.apply(this, n);
          return (r.cache = o.set(i, s) || o), s;
        };
        return (r.cache = new (i.Cache || n)()), r;
      }
      (i.Cache = n), (t.exports = i);
    },
    15749: (t, e, r) => {
      var n = r(59789);
      t.exports = function (t) {
        return n(this, t).has(t);
      };
    },
    16377: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "millisecond",
          e = "second",
          r = "minute",
          n = "hour",
          i = "week",
          o = "month",
          s = "quarter",
          a = "year",
          u = "date",
          c = "Invalid Date",
          l =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          f =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          d = function (t, e, r) {
            var n = String(t);
            return !n || n.length >= e
              ? t
              : "" + Array(e + 1 - n.length).join(r) + t;
          },
          h = "en",
          p = {};
        p[h] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (t) {
            var e = ["th", "st", "nd", "rd"],
              r = t % 100;
            return "[" + t + (e[(r - 20) % 10] || e[r] || e[0]) + "]";
          },
        };
        var v = "$isDayjsObject",
          b = function (t) {
            return t instanceof y || !(!t || !t[v]);
          },
          m = function t(e, r, n) {
            var i;
            if (!e) return h;
            if ("string" == typeof e) {
              var o = e.toLowerCase();
              p[o] && (i = o), r && ((p[o] = r), (i = o));
              var s = e.split("-");
              if (!i && s.length > 1) return t(s[0]);
            } else {
              var a = e.name;
              (p[a] = e), (i = a);
            }
            return !n && i && (h = i), i || (!n && h);
          },
          w = function (t, e) {
            if (b(t)) return t.clone();
            var r = "object" == typeof e ? e : {};
            return (r.date = t), (r.args = arguments), new y(r);
          },
          g = {
            s: d,
            z: function (t) {
              var e = -t.utcOffset(),
                r = Math.abs(e);
              return (
                (e <= 0 ? "+" : "-") +
                d(Math.floor(r / 60), 2, "0") +
                ":" +
                d(r % 60, 2, "0")
              );
            },
            m: function t(e, r) {
              if (e.date() < r.date()) return -t(r, e);
              var n = 12 * (r.year() - e.year()) + (r.month() - e.month()),
                i = e.clone().add(n, o),
                s = r - i < 0,
                a = e.clone().add(n + (s ? -1 : 1), o);
              return +(-(n + (r - i) / (s ? i - a : a - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (c) {
              return (
                {
                  M: o,
                  y: a,
                  w: i,
                  d: "day",
                  D: u,
                  h: n,
                  m: r,
                  s: e,
                  ms: t,
                  Q: s,
                }[c] ||
                String(c || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          };
        (g.l = m),
          (g.i = b),
          (g.w = function (t, e) {
            return w(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var y = (function () {
            function d(t) {
              (this.$L = m(t.locale, null, !0)),
                this.parse(t),
                (this.$x = this.$x || t.x || {}),
                (this[v] = !0);
            }
            var h = d.prototype;
            return (
              (h.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    r = t.utc;
                  if (null === e) return new Date(NaN);
                  if (g.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var n = e.match(l);
                    if (n) {
                      var i = n[2] - 1 || 0,
                        o = (n[7] || "0").substring(0, 3);
                      return r
                        ? new Date(
                            Date.UTC(
                              n[1],
                              i,
                              n[3] || 1,
                              n[4] || 0,
                              n[5] || 0,
                              n[6] || 0,
                              o
                            )
                          )
                        : new Date(
                            n[1],
                            i,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            o
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  this.init();
              }),
              (h.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (h.$utils = function () {
                return g;
              }),
              (h.isValid = function () {
                return this.$d.toString() !== c;
              }),
              (h.isSame = function (t, e) {
                var r = w(t);
                return this.startOf(e) <= r && r <= this.endOf(e);
              }),
              (h.isAfter = function (t, e) {
                return w(t) < this.startOf(e);
              }),
              (h.isBefore = function (t, e) {
                return this.endOf(e) < w(t);
              }),
              (h.$g = function (t, e, r) {
                return g.u(t) ? this[e] : this.set(r, t);
              }),
              (h.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (h.valueOf = function () {
                return this.$d.getTime();
              }),
              (h.startOf = function (t, s) {
                var c = this,
                  l = !!g.u(s) || s,
                  f = g.p(t),
                  d = function (t, e) {
                    var r = g.w(
                      c.$u ? Date.UTC(c.$y, e, t) : new Date(c.$y, e, t),
                      c
                    );
                    return l ? r : r.endOf("day");
                  },
                  h = function (t, e) {
                    return g.w(
                      c
                        .toDate()
                        [t].apply(
                          c.toDate("s"),
                          (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      c
                    );
                  },
                  p = this.$W,
                  v = this.$M,
                  b = this.$D,
                  m = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                  case a:
                    return l ? d(1, 0) : d(31, 11);
                  case o:
                    return l ? d(1, v) : d(0, v + 1);
                  case i:
                    var w = this.$locale().weekStart || 0,
                      y = (p < w ? p + 7 : p) - w;
                    return d(l ? b - y : b + (6 - y), v);
                  case "day":
                  case u:
                    return h(m + "Hours", 0);
                  case n:
                    return h(m + "Minutes", 1);
                  case r:
                    return h(m + "Seconds", 2);
                  case e:
                    return h(m + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (h.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (h.$set = function (i, s) {
                var c,
                  l = g.p(i),
                  f = "set" + (this.$u ? "UTC" : ""),
                  d = (((c = {}).day = f + "Date"),
                  (c[u] = f + "Date"),
                  (c[o] = f + "Month"),
                  (c[a] = f + "FullYear"),
                  (c[n] = f + "Hours"),
                  (c[r] = f + "Minutes"),
                  (c[e] = f + "Seconds"),
                  (c[t] = f + "Milliseconds"),
                  c)[l],
                  h = "day" === l ? this.$D + (s - this.$W) : s;
                if (l === o || l === a) {
                  var p = this.clone().set(u, 1);
                  p.$d[d](h),
                    p.init(),
                    (this.$d = p.set(u, Math.min(this.$D, p.daysInMonth())).$d);
                } else d && this.$d[d](h);
                return this.init(), this;
              }),
              (h.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (h.get = function (t) {
                return this[g.p(t)]();
              }),
              (h.add = function (t, s) {
                var u,
                  c = this;
                t = Number(t);
                var l = g.p(s),
                  f = function (e) {
                    var r = w(c);
                    return g.w(r.date(r.date() + Math.round(e * t)), c);
                  };
                if (l === o) return this.set(o, this.$M + t);
                if (l === a) return this.set(a, this.$y + t);
                if ("day" === l) return f(1);
                if (l === i) return f(7);
                var d =
                    (((u = {})[r] = 6e4), (u[n] = 36e5), (u[e] = 1e3), u)[l] ||
                    1,
                  h = this.$d.getTime() + t * d;
                return g.w(h, this);
              }),
              (h.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (h.format = function (t) {
                var e = this,
                  r = this.$locale();
                if (!this.isValid()) return r.invalidDate || c;
                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = g.z(this),
                  o = this.$H,
                  s = this.$m,
                  a = this.$M,
                  u = r.weekdays,
                  l = r.months,
                  d = r.meridiem,
                  h = function (t, r, i, o) {
                    return (t && (t[r] || t(e, n))) || i[r].slice(0, o);
                  },
                  p = function (t) {
                    return g.s(o % 12 || 12, t, "0");
                  },
                  v =
                    d ||
                    function (t, e, r) {
                      var n = t < 12 ? "AM" : "PM";
                      return r ? n.toLowerCase() : n;
                    };
                return n.replace(f, function (t, n) {
                  return (
                    n ||
                    (function (t) {
                      switch (t) {
                        case "YY":
                          return String(e.$y).slice(-2);
                        case "YYYY":
                          return g.s(e.$y, 4, "0");
                        case "M":
                          return a + 1;
                        case "MM":
                          return g.s(a + 1, 2, "0");
                        case "MMM":
                          return h(r.monthsShort, a, l, 3);
                        case "MMMM":
                          return h(l, a);
                        case "D":
                          return e.$D;
                        case "DD":
                          return g.s(e.$D, 2, "0");
                        case "d":
                          return String(e.$W);
                        case "dd":
                          return h(r.weekdaysMin, e.$W, u, 2);
                        case "ddd":
                          return h(r.weekdaysShort, e.$W, u, 3);
                        case "dddd":
                          return u[e.$W];
                        case "H":
                          return String(o);
                        case "HH":
                          return g.s(o, 2, "0");
                        case "h":
                          return p(1);
                        case "hh":
                          return p(2);
                        case "a":
                          return v(o, s, !0);
                        case "A":
                          return v(o, s, !1);
                        case "m":
                          return String(s);
                        case "mm":
                          return g.s(s, 2, "0");
                        case "s":
                          return String(e.$s);
                        case "ss":
                          return g.s(e.$s, 2, "0");
                        case "SSS":
                          return g.s(e.$ms, 3, "0");
                        case "Z":
                          return i;
                      }
                      return null;
                    })(t) ||
                    i.replace(":", "")
                  );
                });
              }),
              (h.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (h.diff = function (t, u, c) {
                var l,
                  f = this,
                  d = g.p(u),
                  h = w(t),
                  p = (h.utcOffset() - this.utcOffset()) * 6e4,
                  v = this - h,
                  b = function () {
                    return g.m(f, h);
                  };
                switch (d) {
                  case a:
                    l = b() / 12;
                    break;
                  case o:
                    l = b();
                    break;
                  case s:
                    l = b() / 3;
                    break;
                  case i:
                    l = (v - p) / 6048e5;
                    break;
                  case "day":
                    l = (v - p) / 864e5;
                    break;
                  case n:
                    l = v / 36e5;
                    break;
                  case r:
                    l = v / 6e4;
                    break;
                  case e:
                    l = v / 1e3;
                    break;
                  default:
                    l = v;
                }
                return c ? l : g.a(l);
              }),
              (h.daysInMonth = function () {
                return this.endOf(o).$D;
              }),
              (h.$locale = function () {
                return p[this.$L];
              }),
              (h.locale = function (t, e) {
                if (!t) return this.$L;
                var r = this.clone(),
                  n = m(t, e, !0);
                return n && (r.$L = n), r;
              }),
              (h.clone = function () {
                return g.w(this.$d, this);
              }),
              (h.toDate = function () {
                return new Date(this.valueOf());
              }),
              (h.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (h.toISOString = function () {
                return this.$d.toISOString();
              }),
              (h.toString = function () {
                return this.$d.toUTCString();
              }),
              d
            );
          })(),
          x = y.prototype;
        return (
          (w.prototype = x),
          [
            ["$ms", t],
            ["$s", e],
            ["$m", r],
            ["$H", n],
            ["$W", "day"],
            ["$M", o],
            ["$y", a],
            ["$D", u],
          ].forEach(function (t) {
            x[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (w.extend = function (t, e) {
            return t.$i || (t(e, y, w), (t.$i = !0)), w;
          }),
          (w.locale = m),
          (w.isDayjs = b),
          (w.unix = function (t) {
            return w(1e3 * t);
          }),
          (w.en = p[h]),
          (w.Ls = p),
          (w.p = {}),
          w
        );
      })();
    },
    16922: (t, e, r) => {
      var n = r(10352),
        i = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(i, "") : t;
      };
    },
    18839: (t, e, r) => {
      var n = r(3120),
        i = r(76820),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r) {
        var s = t[e];
        (o.call(t, e) && i(s, r) && (void 0 !== r || e in t)) || n(t, e, r);
      };
    },
    19098: (t, e, r) => {
      var n = r(5246),
        i = r(13555),
        o = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols;
      t.exports = s
        ? function (t) {
            return null == t
              ? []
              : n(s((t = Object(t))), function (e) {
                  return o.call(t, e);
                });
          }
        : i;
    },
    19328: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      };
    },
    19634: (t) => {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    20800: (t, e, r) => {
      var n = r(66592),
        i = r(11877),
        o = r(27515),
        s = o && o.isMap;
      t.exports = s ? i(s) : n;
    },
    20875: (t, e, r) => {
      var n = r(76820);
      t.exports = function (t, e) {
        for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
        return -1;
      };
    },
    22135: (t, e, r) => {
      var n = r(10491),
        i = r(66619),
        o = r(65675);
      t.exports = function (t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var s = r.__data__;
          if (!i || s.length < 199)
            return s.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new o(s);
        }
        return r.set(t, e), (this.size = r.size), this;
      };
    },
    22283: (t) => {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    22602: (t, e, r) => {
      "use strict";
      let n;
      r.d(e, { A: () => D });
      for (
        var i,
          o,
          s = r(30115),
          a =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)),
          u = new Uint8Array(16),
          c = [],
          l = 0;
        l < 256;
        ++l
      )
        c[l] = (l + 256).toString(16).substr(1);
      let f = function (t, e) {
        var r = e || 0;
        return [
          c[t[r++]],
          c[t[r++]],
          c[t[r++]],
          c[t[r++]],
          "-",
          c[t[r++]],
          c[t[r++]],
          "-",
          c[t[r++]],
          c[t[r++]],
          "-",
          c[t[r++]],
          c[t[r++]],
          "-",
          c[t[r++]],
          c[t[r++]],
          c[t[r++]],
          c[t[r++]],
          c[t[r++]],
          c[t[r++]],
        ].join("");
      };
      var d = 0,
        h = 0;
      let p = function (t, e, r) {
          var n = (e && r) || 0,
            s = e || [],
            c = (t = t || {}).node || i,
            l = void 0 !== t.clockseq ? t.clockseq : o;
          if (null == c || null == l) {
            var p =
              t.random ||
              (
                t.rng ||
                function () {
                  if (!a)
                    throw Error(
                      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                    );
                  return a(u);
                }
              )();
            null == c && (c = i = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]),
              null == l && (l = o = ((p[6] << 8) | p[7]) & 16383);
          }
          var v = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
            b = void 0 !== t.nsecs ? t.nsecs : h + 1,
            m = v - d + (b - h) / 1e4;
          if (
            (m < 0 && void 0 === t.clockseq && (l = (l + 1) & 16383),
            (m < 0 || v > d) && void 0 === t.nsecs && (b = 0),
            b >= 1e4)
          )
            throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (d = v), (h = b), (o = l);
          var w = ((0xfffffff & (v += 122192928e5)) * 1e4 + b) % 0x100000000;
          (s[n++] = (w >>> 24) & 255),
            (s[n++] = (w >>> 16) & 255),
            (s[n++] = (w >>> 8) & 255),
            (s[n++] = 255 & w);
          var g = ((v / 0x100000000) * 1e4) & 0xfffffff;
          (s[n++] = (g >>> 8) & 255),
            (s[n++] = 255 & g),
            (s[n++] = ((g >>> 24) & 15) | 16),
            (s[n++] = (g >>> 16) & 255),
            (s[n++] = (l >>> 8) | 128),
            (s[n++] = 255 & l);
          for (var y = 0; y < 6; ++y) s[n + y] = c[y];
          return e || f(s);
        },
        v = "@RNMV/IDFM",
        b = null;
      async function m() {
        return (b =
          b ||
          s.A.getItem(v)
            .then(
              (t) =>
                t ||
                ((t = p({
                  rng: () =>
                    Array(16)
                      .fill(0)
                      .map(() => Math.floor(256 * Math.random())),
                })),
                s.A.setItem(v, t).then(() => t ?? ""))
            )
            .catch(() => ""));
      }
      var w = r(33630);
      let g = new (r.n(w)())().getResult(),
        y = [
          "ar",
          "ckb",
          "fa",
          "he",
          "ks",
          "lrc",
          "mzn",
          "ps",
          "ug",
          "ur",
          "yi",
        ],
        x = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        );
      function _(t) {
        return "419" === t ? "UN" : t.toUpperCase();
      }
      function $(t) {
        let [e, r] = t.split("-");
        return { languageCode: e, countryCode: r };
      }
      function j(t, e) {
        let { languageCode: r, countryCode: n } = $(t);
        return {
          languageCode: (r = r.toLowerCase()),
          countryCode: (n = _(n || e)),
          languageTag: `${r}-${n}`,
          isRTL: y.includes(r),
        };
      }
      function O() {
        let { languages: t = [navigator.language] } = navigator;
        for (let e = 0; e < t.length; e++) {
          let { countryCode: r } = $(t[e]);
          if (r) return _(r);
        }
        return "US";
      }
      let S = new Set();
      x &&
        window.addEventListener("languagechange", () => {
          S.forEach((t) => t());
        });
      let A = null,
        k = "@RNMV/UID",
        M = null;
      async function T() {
        return (M =
          M ||
          s.A.getItem(k)
            .then((t) => t || null)
            .catch(() => null));
      }
      async function E(t) {
        return (
          (M = Promise.resolve(t)), s.A.setItem(k, t || "").catch(() => {}), M
        );
      }
      let D = {
        fetch: () =>
          Promise.all([
            A
              ? Promise.resolve(A)
              : Promise.resolve(
                  (function () {
                    let { languages: t = [navigator.language] } = navigator,
                      e = O(),
                      r = [],
                      n = [];
                    return (
                      t.forEach((t) => {
                        let i = j(t, e);
                        -1 === r.indexOf(i.languageTag) &&
                          (n.push(i), r.push(i.languageTag));
                      }),
                      n
                    );
                  })()
                )
                  .then((t) => ({
                    device_locale: t[0]?.languageCode ?? "",
                    device_country: t[0]?.countryCode ?? "",
                  }))
                  .then((t) => ((A = t), t))
                  .catch(() => ({})),
            Promise.resolve({
              app_version: n,
              browser_name: g.browser.name,
              browser_version: g.browser.version,
              cpu_architecture: g.cpu.architecture,
              device_model: g.device.model,
              device_type: "mobile" === g.device.type ? "phone" : g.device.type,
              device_vendor: g.device.vendor,
              engine_name: g.engine.name,
              engine_version: g.engine.version,
              os_name: g.os.name,
              os_version: g.os.version,
            }),
          ]).then((t) => {
            let [e, r] = t;
            return { ...e, ...r };
          }),
        getIDFM: () => m(),
        getIDFA: () => Promise.resolve(""),
        getIDFV: () => Promise.resolve(""),
        getUID: () => T(),
        setUID: (t) => E(t),
        getAdjustId: () => Promise.resolve(""),
        getFirebaseId: () => Promise.resolve(""),
        getAppVersion: () =>
          (function () {
            if (!n)
              throw (
                (console.error(
                  "You must set app version using setAppVersion method, before using getAppVersion method"
                ),
                Error(
                  "Error: You must set app version using setAppVersion method, before using getAppVersion method"
                ))
              );
            return n;
          })(),
        setAppVersion: (t) => {
          n = t;
        },
        getSystemVersion: () => "",
      };
    },
    23259: (t, e, r) => {
      t.exports = r(24023).Symbol;
    },
    23273: (t, e, r) => {
      var n = r(77994),
        i = 1 / 0;
      t.exports = function (t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e;
      };
    },
    24023: (t, e, r) => {
      var n = r(50718),
        i = "object" == typeof self && self && self.Object === Object && self;
      t.exports = n || i || Function("return this")();
    },
    24190: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => g });
      var n = r(30115),
        i = r(3793),
        o = r.n(i);
      let s = "@RNMV/USER_PROPERTIES",
        a = "@RNMV/EVENT_COUNTERS",
        u = o()(n.A.setItem, 200),
        c = o()(n.A.setItem, 200),
        l = {
          getUserProperties: () =>
            n.A.getItem(s).then((t) => JSON.parse(t ?? "")),
          setUserProperties: (t) => u(s, JSON.stringify(t)),
          getEventCounters: () =>
            n.A.getItem(a).then((t) => JSON.parse(t ?? "")),
          setEventCounters: (t) => c(a, JSON.stringify(t)),
        },
        f = {},
        d = () => {},
        h,
        p,
        v = Promise.resolve(),
        b,
        m,
        w = Promise.resolve(),
        g = {
          fetch: () =>
            v.then(() =>
              h
                ? Promise.resolve(h)
                : p ||
                  (p = l
                    .getUserProperties()
                    .then((t) => (h = { ...t }))
                    .catch(() => (h = f)))
            ),
          setUserProperty(t, e) {
            return (v = this.fetch()
              .then(() => ((h = { ...h, [t]: e }), l.setUserProperties(h)))
              .catch(d));
          },
          fetchEventCounters: () =>
            w.then(() =>
              b
                ? Promise.resolve(b)
                : m ||
                  (m = l
                    .getEventCounters()
                    .then((t) => (b = { ...t }))
                    .catch(() => (b = f)))
            ),
          trackEvent(t) {
            w = this.fetchEventCounters()
              .then(() => {
                let e = b?.[t] ?? 0;
                return (b = { ...b, [t]: e + 1 }), l.setEventCounters(b);
              })
              .catch(d);
          },
        };
    },
    24781: (t, e, r) => {
      var n = r(81986),
        i = r(98961),
        o = r(90707);
      t.exports = function (t) {
        return "function" != typeof t.constructor || o(t) ? {} : n(i(t));
      };
    },
    26398: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; )
          i[r] = e(t[r], r, t);
        return i;
      };
    },
    26743: (t, e, r) => {
      t.exports = r(67466)(r(24023), "WeakMap");
    },
    27515: (t, e, r) => {
      t = r.nmd(t);
      var n = r(50718),
        i = e && !e.nodeType && e,
        o = i && t && !t.nodeType && t,
        s = o && o.exports === i && n.process,
        a = (function () {
          try {
            var t = o && o.require && o.require("util").types;
            if (t) return t;
            return s && s.binding && s.binding("util");
          } catch (t) {}
        })();
      t.exports = a;
    },
    30115: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => l });
      var n = r(57944);
      class i {
        constructor() {
          !(function (t, e, r) {
            var n;
            (e =
              "symbol" ==
              typeof (n = (function (t, e) {
                if ("object" != typeof t || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(e, "string"))
                ? n
                : String(n)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
          })(this, "_data", {});
        }
        get length() {
          return Object.keys(this._data).length;
        }
        getItem(t) {
          return this._data.hasOwnProperty(t) ? this._data[t] : null;
        }
        setItem(t, e) {
          this._data[t] = String(e);
        }
        removeItem(t) {
          delete this._data[t];
        }
        clear() {
          this._data = {};
        }
        key(t) {
          return Object.keys(this._data)[t];
        }
      }
      let o = (function () {
          try {
            return (
              window.localStorage.setItem("TEST_KEY", "1"),
              window.localStorage.removeItem("TEST_KEY"),
              window.localStorage
            );
          } catch (t) {
            return new i();
          }
        })(),
        s = n.bind({ concatArrays: !0, ignoreUndefined: !0 });
      function a(t, e) {
        return new Promise((r, n) => {
          try {
            let n = t();
            null == e || e(null, n), r(n);
          } catch (t) {
            null == e || e(t), n(t);
          }
        });
      }
      function u(t, e, r) {
        return Promise.all(t).then(
          (t) => {
            let n = (null == r ? void 0 : r(t)) ?? null;
            return null == e || e(null, n), Promise.resolve(n);
          },
          (t) => (null == e || e(t), Promise.reject(t))
        );
      }
      let c = {
          getItem: (t, e) => a(() => o.getItem(t), e),
          setItem: (t, e, r) => a(() => o.setItem(t, e), r),
          removeItem: (t, e) => a(() => o.removeItem(t), e),
          mergeItem: (t, e, r) =>
            a(
              () =>
                (function (t, e) {
                  let r = o.getItem(t);
                  if (r) {
                    let n = JSON.stringify(s(JSON.parse(r), JSON.parse(e)));
                    o.setItem(t, n);
                  } else o.setItem(t, e);
                })(t, e),
              r
            ),
          clear: (t) => a(() => o.clear(), t),
          getAllKeys: (t) =>
            a(() => {
              let t = o.length,
                e = [];
              for (let r = 0; r < t; r += 1) {
                let t = o.key(r) || "";
                e.push(t);
              }
              return e;
            }, t),
          flushGetRequests: () => void 0,
          multiGet: (t, e) =>
            u(
              t.map((t) => c.getItem(t)),
              e,
              (e) => e.map((e, r) => [t[r], e])
            ),
          multiSet: (t, e) =>
            u(
              t.map((t) => c.setItem(t[0], t[1])),
              e
            ),
          multiRemove: (t, e) =>
            u(
              t.map((t) => c.removeItem(t)),
              e
            ),
          multiMerge: (t, e) =>
            u(
              t.map((t) => c.mergeItem(t[0], t[1])),
              e
            ),
        },
        l = c;
    },
    30443: (t, e, r) => {
      var n = r(9794),
        i = r(8335),
        o = r(47018),
        s = r(31327),
        a = r(46920),
        u = r(51516),
        c = r(90707),
        l = r(79251),
        f = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (null == t) return !0;
        if (
          a(t) &&
          (s(t) ||
            "string" == typeof t ||
            "function" == typeof t.splice ||
            u(t) ||
            l(t) ||
            o(t))
        )
          return !t.length;
        var e = i(t);
        if ("[object Map]" == e || "[object Set]" == e) return !t.size;
        if (c(t)) return !n(t).length;
        for (var r in t) if (f.call(t, r)) return !1;
        return !0;
      };
    },
    30549: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    30809: (t, e, r) => {
      var n = r(18839),
        i = r(3120);
      t.exports = function (t, e, r, o) {
        var s = !r;
        r || (r = {});
        for (var a = -1, u = e.length; ++a < u; ) {
          var c = e[a],
            l = o ? o(r[c], t[c], c, r, t) : void 0;
          void 0 === l && (l = t[c]), s ? i(r, c, l) : n(r, c, l);
        }
        return r;
      };
    },
    31041: (t) => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, r) {
        var n = typeof t;
        return (
          !!(r = null == r ? 0x1fffffffffffff : r) &&
          ("number" == n || ("symbol" != n && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < r
        );
      };
    },
    31327: (t) => {
      t.exports = Array.isArray;
    },
    32425: (t, e, r) => {
      var n = r(86648),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return i.call(e, t) ? e[t] : void 0;
      };
    },
    33630: function (t, e, r) {
      var n;
      !(function (i, o) {
        "use strict";
        var s = "function",
          a = "undefined",
          u = "object",
          c = "string",
          l = "major",
          f = "model",
          d = "name",
          h = "type",
          p = "vendor",
          v = "version",
          b = "architecture",
          m = "console",
          w = "mobile",
          g = "tablet",
          y = "smarttv",
          x = "wearable",
          _ = "embedded",
          $ = "Amazon",
          j = "Apple",
          O = "ASUS",
          S = "BlackBerry",
          A = "Browser",
          k = "Chrome",
          M = "Firefox",
          T = "Google",
          E = "Huawei",
          D = "Microsoft",
          I = "Motorola",
          P = "Opera",
          U = "Samsung",
          N = "Sharp",
          C = "Sony",
          z = "Xiaomi",
          R = "Zebra",
          V = "Facebook",
          Y = "Chromium OS",
          F = "Mac OS",
          q = " Browser",
          H = function (t, e) {
            var r = {};
            for (var n in t)
              e[n] && e[n].length % 2 == 0
                ? (r[n] = e[n].concat(t[n]))
                : (r[n] = t[n]);
            return r;
          },
          B = function (t) {
            for (var e = {}, r = 0; r < t.length; r++)
              e[t[r].toUpperCase()] = t[r];
            return e;
          },
          L = function (t, e) {
            return typeof t === c && -1 !== W(e).indexOf(W(t));
          },
          W = function (t) {
            return t.toLowerCase();
          },
          J = function (t, e) {
            if (typeof t === c)
              return (
                (t = t.replace(/^\s\s*/, "")),
                typeof e === a ? t : t.substring(0, 500)
              );
          },
          G = function (t, e) {
            for (var r, n, i, a, c, l, f = 0; f < e.length && !c; ) {
              var d = e[f],
                h = e[f + 1];
              for (r = n = 0; r < d.length && !c && d[r]; )
                if ((c = d[r++].exec(t)))
                  for (i = 0; i < h.length; i++)
                    (l = c[++n]),
                      typeof (a = h[i]) === u && a.length > 0
                        ? 2 === a.length
                          ? typeof a[1] == s
                            ? (this[a[0]] = a[1].call(this, l))
                            : (this[a[0]] = a[1])
                          : 3 === a.length
                          ? typeof a[1] !== s || (a[1].exec && a[1].test)
                            ? (this[a[0]] = l ? l.replace(a[1], a[2]) : void 0)
                            : (this[a[0]] = l
                                ? a[1].call(this, l, a[2])
                                : void 0)
                          : 4 === a.length &&
                            (this[a[0]] = l
                              ? a[3].call(this, l.replace(a[1], a[2]))
                              : o)
                        : (this[a] = l || o);
              f += 2;
            }
          },
          K = function (t, e) {
            for (var r in e)
              if (typeof e[r] === u && e[r].length > 0) {
                for (var n = 0; n < e[r].length; n++)
                  if (L(e[r][n], t)) return "?" === r ? o : r;
              } else if (L(e[r], t)) return "?" === r ? o : r;
            return e.hasOwnProperty("*") ? e["*"] : t;
          },
          Z = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          X = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [v, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [v, [d, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [d, v],
              [/opios[\/ ]+([\w\.]+)/i],
              [v, [d, P + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [v, [d, P + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [v, [d, P]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [v, [d, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [d, v],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [v, [d, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [v, [d, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [v, [d, "UC" + A]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [v, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [v, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [v, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [v, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [v, [d, "Smart Lenovo " + A]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure " + A], v],
              [/\bfocus\/([\w\.]+)/i],
              [v, [d, M + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [v, [d, P + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [v, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [v, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [v, [d, P + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [v, [d, "MIUI " + A]],
              [/fxios\/([-\w\.]+)/i],
              [v, [d, M]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[d, "360" + q]],
              [/\b(qq)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1Browser"], v],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1" + q], v],
              [/samsungbrowser\/([\w\.]+)/i],
              [v, [d, U + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[d, /_/g, " "], v],
              [/metasr[\/ ]?([\d\.]+)/i],
              [v, [d, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[d, "Sogou Mobile"], v],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [d, v],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, V], v],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [d, v],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [v, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [v, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [v, [d, k + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, k + " WebView"], v],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [v, [d, "Android " + A]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, v],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [v, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [v, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [
                  v,
                  K,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, v],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], v],
              [/(wolvic)\/([\w\.]+)/i],
              [d, v],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [v, [d, M + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [d, [v, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [v, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[b, "amd64"]],
              [/(ia32(?=;))/i],
              [[b, W]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[b, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[b, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[b, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[b, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[b, /ower/, "", W]],
              [/(sun4\w)[;\)]/i],
              [[b, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[b, W]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [f, [p, U], [h, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [f, [p, U], [h, w]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [p, j], [h, w]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [f, [p, j], [h, g]],
              [/(macintosh);/i],
              [f, [p, j]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [p, N], [h, w]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [p, E], [h, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [f, [p, E], [h, w]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [f, /_/g, " "],
                [p, z],
                [h, w],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [f, /_/g, " "],
                [p, z],
                [h, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [f, [p, "OPPO"], [h, w]],
              [/\b(opd2\d{3}a?) bui/i],
              [f, [p, "OPPO"], [h, g]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [p, "Vivo"], [h, w]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [p, "Realme"], [h, w]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [f, [p, I], [h, w]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [p, I], [h, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [p, "LG"], [h, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [f, [p, "LG"], [h, w]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [f, [p, "Lenovo"], [h, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [p, "Nokia"],
                [h, w],
              ],
              [/(pixel c)\b/i],
              [f, [p, T], [h, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [p, T], [h, w]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [f, [p, C], [h, w]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [p, C],
                [h, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [f, [p, "OnePlus"], [h, w]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [f, [p, $], [h, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [p, $],
                [h, w],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, p, [h, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [p, S], [h, w]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [f, [p, O], [h, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [p, O], [h, w]],
              [/(nexus 9)/i],
              [f, [p, "HTC"], [h, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [f, /_/g, " "], [h, w]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [f, [p, "TCL"], [h, g]],
              [/(itel) ((\w+))/i],
              [
                [p, W],
                f,
                [h, K, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [p, "Acer"], [h, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [p, "Meizu"], [h, w]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [p, "Ulefone"], [h, w]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [p, "Nothing"], [h, w]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, f, [h, w]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [p, f, [h, g]],
              [/(surface duo)/i],
              [f, [p, D], [h, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [p, "Fairphone"], [h, w]],
              [/(u304aa)/i],
              [f, [p, "AT&T"], [h, w]],
              [/\bsie-(\w*)/i],
              [f, [p, "Siemens"], [h, w]],
              [/\b(rct\w+) b/i],
              [f, [p, "RCA"], [h, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [p, "Dell"], [h, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [p, "Verizon"], [h, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [p, "Barnes & Noble"], [h, g]],
              [/\b(tm\d{3}\w+) b/i],
              [f, [p, "NuVision"], [h, g]],
              [/\b(k88) b/i],
              [f, [p, "ZTE"], [h, g]],
              [/\b(nx\d{3}j) b/i],
              [f, [p, "ZTE"], [h, w]],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [p, "Swiss"], [h, w]],
              [/\b(zur\d{3}) b/i],
              [f, [p, "Swiss"], [h, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [p, "Zeki"], [h, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], f, [h, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [p, "Insignia"], [h, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [p, "NextBook"], [h, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], f, [h, w]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], f, [h, w]],
              [/\b(ph-1) /i],
              [f, [p, "Essential"], [h, w]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [p, "Envizen"], [h, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [p, "MachSpeed"], [h, g]],
              [/\btu_(1491) b/i],
              [f, [p, "Rotor"], [h, g]],
              [/(shield[\w ]+) b/i],
              [f, [p, "Nvidia"], [h, g]],
              [/(sprint) (\w+)/i],
              [p, f, [h, w]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [p, D],
                [h, w],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [p, R], [h, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [p, R], [h, w]],
              [/smart-tv.+(samsung)/i],
              [p, [h, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [p, U],
                [h, y],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, "LG"],
                [h, y],
              ],
              [/(apple) ?tv/i],
              [p, [f, j + " TV"], [h, y]],
              [/crkey/i],
              [
                [f, k + "cast"],
                [p, T],
                [h, y],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [p, $], [h, y]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [p, N], [h, y]],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [p, C], [h, y]],
              [/(mitv-\w{5}) bui/i],
              [f, [p, z], [h, y]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, f, [h, y]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, J],
                [f, J],
                [h, y],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[h, y]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, f, [h, m]],
              [/droid.+; (shield) bui/i],
              [f, [p, "Nvidia"], [h, m]],
              [/(playstation [345portablevi]+)/i],
              [f, [p, C], [h, m]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [p, D], [h, m]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [f, [p, U], [h, x]],
              [/((pebble))app/i],
              [p, f, [h, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [p, j], [h, x]],
              [/droid.+; (glass) \d/i],
              [f, [p, T], [h, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [p, R], [h, x]],
              [/(quest( \d| pro)?)/i],
              [f, [p, V], [h, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [h, _]],
              [/(aeobc)\b/i],
              [f, [p, $], [h, _]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [f, [h, w]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [h, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[h, g]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[h, w]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [v, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [v, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [d, v],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [v, d],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, v],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [d, [v, K, Z]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [v, K, Z],
                [d, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [v, /_/g, "."],
                [d, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [d, F],
                [v, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [v, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [d, v],
              [/\(bb(10);/i],
              [v, [d, S]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [v, [d, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [v, [d, M + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [v, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [v, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [v, [d, k + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[d, Y], v],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [d, v],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], v],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [d, v],
            ],
          },
          Q = function (t, e) {
            if ((typeof t === u && ((e = t), (t = o)), !(this instanceof Q)))
              return new Q(t, e).getResult();
            var r = typeof i !== a && i.navigator ? i.navigator : o,
              n = t || (r && r.userAgent ? r.userAgent : ""),
              m = r && r.userAgentData ? r.userAgentData : o,
              y = e ? H(X, e) : X,
              x = r && r.userAgent == n;
            return (
              (this.getBrowser = function () {
                var t,
                  e = {};
                return (
                  (e[d] = o),
                  (e[v] = o),
                  G.call(e, n, y.browser),
                  (e[l] =
                    typeof (t = e[v]) === c
                      ? t.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  x &&
                    r &&
                    r.brave &&
                    typeof r.brave.isBrave == s &&
                    (e[d] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var t = {};
                return (t[b] = o), G.call(t, n, y.cpu), t;
              }),
              (this.getDevice = function () {
                var t = {};
                return (
                  (t[p] = o),
                  (t[f] = o),
                  (t[h] = o),
                  G.call(t, n, y.device),
                  x && !t[h] && m && m.mobile && (t[h] = w),
                  x &&
                    "Macintosh" == t[f] &&
                    r &&
                    typeof r.standalone !== a &&
                    r.maxTouchPoints &&
                    r.maxTouchPoints > 2 &&
                    ((t[f] = "iPad"), (t[h] = g)),
                  t
                );
              }),
              (this.getEngine = function () {
                var t = {};
                return (t[d] = o), (t[v] = o), G.call(t, n, y.engine), t;
              }),
              (this.getOS = function () {
                var t = {};
                return (
                  (t[d] = o),
                  (t[v] = o),
                  G.call(t, n, y.os),
                  x &&
                    !t[d] &&
                    m &&
                    m.platform &&
                    "Unknown" != m.platform &&
                    (t[d] = m.platform
                      .replace(/chrome os/i, Y)
                      .replace(/macos/i, F)),
                  t
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (t) {
                return (
                  (n = typeof t === c && t.length > 500 ? J(t, 500) : t), this
                );
              }),
              this.setUA(n),
              this
            );
          };
        (Q.VERSION = "0.7.39"),
          (Q.BROWSER = B([d, v, l])),
          (Q.CPU = B([b])),
          (Q.DEVICE = B([f, p, h, m, w, y, g, x, _])),
          (Q.ENGINE = Q.OS = B([d, v])),
          typeof e !== a
            ? (t.exports && (e = t.exports = Q), (e.UAParser = Q))
            : r.amdO
            ? o ===
                (n = function () {
                  return Q;
                }.call(e, r, e, t)) || (t.exports = n)
            : typeof i !== a && (i.UAParser = Q);
        var tt = typeof i !== a && (i.jQuery || i.Zepto);
        if (tt && !tt.ua) {
          var te = new Q();
          (tt.ua = te.getResult()),
            (tt.ua.get = function () {
              return te.getUA();
            }),
            (tt.ua.set = function (t) {
              te.setUA(t);
              var e = te.getResult();
              for (var r in e) tt.ua[r] = e[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
    33763: (t) => {
      t.exports = function (t) {
        var e = [];
        if (null != t) for (var r in Object(t)) e.push(r);
        return e;
      };
    },
    34935: (t) => {
      var e = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var r = t.length,
          n = new t.constructor(r);
        return (
          r &&
            "string" == typeof t[0] &&
            e.call(t, "index") &&
            ((n.index = t.index), (n.input = t.input)),
          n
        );
      };
    },
    35045: (t, e, r) => {
      var n = r(20875);
      t.exports = function (t, e) {
        var r = this.__data__,
          i = n(r, t);
        return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
      };
    },
    35143: (t, e, r) => {
      var n = r(19328),
        i = r(47018),
        o = r(31327),
        s = r(51516),
        a = r(31041),
        u = r(79251),
        c = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var r = o(t),
          l = !r && i(t),
          f = !r && !l && s(t),
          d = !r && !l && !f && u(t),
          h = r || l || f || d,
          p = h ? n(t.length, String) : [],
          v = p.length;
        for (var b in t)
          (e || c.call(t, b)) &&
            !(
              h &&
              ("length" == b ||
                (f && ("offset" == b || "parent" == b)) ||
                (d &&
                  ("buffer" == b || "byteLength" == b || "byteOffset" == b)) ||
                a(b, v))
            ) &&
            p.push(b);
        return p;
      };
    },
    36038: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => L });
      var n = r(22602),
        i = r(24190),
        o = r(30115),
        s = r(3793),
        a = r.n(s),
        u = r(30443),
        c = r.n(u),
        l = r(78327),
        f = r.n(l);
      let d = {
        OS: "web",
        select: (t) => ("web" in t ? t.web : t.default),
        get isTesting() {
          return !1;
        },
      };
      var h = r(13860),
        p = r.n(h);
      class v {
        constructor() {
          this._registry = {};
        }
        addListener(t, e, r) {
          var n,
            i,
            o,
            s =
              ((n = this._registry),
              null == (o = n[(i = t)]) && ((o = new Set()), (n[i] = o)),
              o),
            a = {
              context: r,
              listener: e,
              remove() {
                s.delete(a);
              },
            };
          return s.add(a), a;
        }
        emit(t) {
          var e = this._registry[t];
          if (null != e) {
            for (
              var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
              i < r;
              i++
            )
              n[i - 1] = arguments[i];
            for (var o = 0, s = [...e]; o < s.length; o++) {
              var a = s[o];
              a.listener.apply(a.context, n);
            }
          }
        }
        removeAllListeners(t) {
          null == t ? (this._registry = {}) : delete this._registry[t];
        }
        listenerCount(t) {
          var e = this._registry[t];
          return null == e ? 0 : e.size;
        }
      }
      var b = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        m =
          b &&
          !document.hasOwnProperty("hidden") &&
          document.hasOwnProperty("webkitHidden"),
        w = ["change", "memoryWarning"],
        g = m ? "webkitvisibilitychange" : "visibilitychange",
        y = m ? "webkitVisibilityState" : "visibilityState",
        x = { BACKGROUND: "background", ACTIVE: "active" },
        _ = null;
      class $ {
        static get currentState() {
          if (!$.isAvailable) return x.ACTIVE;
          switch (document[y]) {
            case "hidden":
            case "prerender":
            case "unloaded":
              return x.BACKGROUND;
            default:
              return x.ACTIVE;
          }
        }
        static addEventListener(t, e) {
          if (
            $.isAvailable &&
            (p()(
              -1 !== w.indexOf(t),
              'Trying to subscribe to unknown event: "%s"',
              t
            ),
            "change" === t)
          )
            return (
              _ ||
                ((_ = new v()),
                document.addEventListener(
                  g,
                  () => {
                    _ && _.emit("change", $.currentState);
                  },
                  !1
                )),
              _.addListener(t, e)
            );
        }
      }
      $.isAvailable = b && !!document[y];
      let j = { rE: "9.9.1" },
        O = "",
        S = {
          init(t) {
            let { token: e } = t;
            O = e;
          },
          request(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            return fetch(`https://evtruck.magnus.ms${t}`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${O}`,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: e ? JSON.stringify(e) : void 0,
              keepalive: !0,
              ...r,
            }).then((t) => {
              if (!t.ok) throw Error("EvTruck API Error");
              return t.json();
            });
          },
        },
        A = "@RN_EVTRUK/",
        k = "@RN_EVTRUK_KEYS",
        M = [],
        T = {
          push: function (t, e) {
            return E([t]), o.A.setItem(A + t, JSON.stringify(e));
          },
          multiPush: function (t) {
            E(
              t.map((t) => {
                let [e] = t;
                return e;
              })
            );
            let e = t.map((t) => {
              let [e, r] = t;
              return [A + e, null !== r ? JSON.stringify(r) : ""];
            });
            return o.A.multiSet(e);
          },
          multiRemove: function (t) {
            return (
              (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                (M = M.filter((e) => !t.includes(e))),
                  o.A.setItem(k, JSON.stringify(M));
              })(t),
              (t = t.map((t) => A + t)),
              o.A.multiRemove(t)
            );
          },
          init: function (t) {
            let e = t ? t + "/" : "";
            (A += e), (k += e);
          },
          fetchAll: function () {
            return o.A.getItem(k)
              .then((t) => {
                var e;
                return (
                  (e = (e = M =
                    [...M, ...((null !== t && JSON.parse(t)) || [])]).map(
                    (t) => A + t
                  )),
                  new Promise((t, r) => {
                    o.A.multiGet(e)
                      .then((e) => {
                        try {
                          let r = e.map((t) => {
                            let [e, r] = t;
                            return [
                              e.replace(A, ""),
                              null !== r ? JSON.parse(r) : null,
                            ];
                          });
                          t(r);
                        } catch (t) {
                          r(t);
                        }
                      })
                      .catch(r);
                  })
                );
              })
              .catch((t) => (console.warn(t), []));
          },
        };
      function E() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (
          (M = [...M, ...t.map(String)]), o.A.setItem(k, JSON.stringify(M))
        );
      }
      let D = {},
        I = null,
        P = null,
        U = null,
        N = !1,
        C = Math.floor(32767 * Math.random()),
        z = "web" === d.OS ? 100 : 4e3,
        R = 0,
        V = "@EVTRUCK/WEB_ATTRIBUTION",
        Y = "@EVTRUCK/WEB_MEASUREMENTS",
        F = "@EVTRUCK/USER_PROPERTIES",
        q = a()(
          (t) =>
            S.request("/collector/web-measurements", t).catch((t) => {
              throw Error("Failed to send EvTruck web measurements", {
                cause: t,
              });
            }),
          2e3
        ),
        H = (t) => "object" == typeof t && null !== t && "event_name" in t,
        B = (t) =>
          !H(t) &&
          "object" == typeof t &&
          null !== t &&
          "name" in t &&
          "value" in t,
        L = {
          init(t) {
            let { storageKey: e, token: r } = t;
            var n = this;
            S.init({ token: r }),
              T.init(e),
              T.fetchAll()
                .then(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  (D = t.reduce((t, e) => {
                    let [r, n] = e;
                    return { ...t, [r]: n };
                  }, D)),
                    n.setUserProperty("__last_session__", `${Date.now()}`),
                    W();
                })
                .catch(console.warn);
          },
          setUserProperty(t, e) {
            if (!(t = String(t)))
              return (
                console.warn("EvTruck: Empty user property name", t, e), !1
              );
            if (null === e) e = "";
            else {
              if ("object" == typeof e)
                return (
                  console.warn(
                    "EvTruck: user properties with object value are not supported",
                    t,
                    e
                  ),
                  !1
                );
              "boolean" == typeof e && (e = String(e));
            }
            return (
              J(Date.now(), { name: t, value: e }),
              i.A.setUserProperty(t, e),
              !0
            );
          },
          trackEvent(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if ((t = String(t))) {
              let r = Date.now();
              J(r, { event_name: t, event_time_ms: r, event_params: e });
            }
            i.A.trackEvent(t);
          },
          pushFCMToken(t) {
            this.setUserProperty("__fcm_token__", t),
              this.setUserProperty(
                "__tz_offset__",
                `${new Date().getTimezoneOffset()}`
              );
          },
          fetchWebAttribution: () =>
            n.A.getIDFM()
              .then((t) =>
                S.request("/api/profile?idfm=" + t, null, { method: "GET" })
              )
              .then((t) =>
                t?.last_web_install?.install_time ? t.last_web_install : null
              ),
          trackWebAttribution(t) {
            Promise.all([
              n.A.getIDFM(),
              n.A.getAppVersion(),
              o.A.getItem(V),
            ]).then((e) => {
              let [r, n, i] = e,
                s = JSON.stringify(f()(t, ["http_referer"]));
              (!i || (i !== s && t.utm_source)) &&
                S.request("/collector/web-installs", {
                  ...t,
                  idfm: r,
                  app_version: n,
                  session_id: C,
                })
                  .then(() => {
                    o.A.setItem(V, s);
                  })
                  .catch((e) => {
                    console.warn(e),
                      setTimeout(() => {
                        this.trackWebAttribution(t);
                      }, 1e3);
                  });
            });
          },
          trackWebMeasurements(t) {
            Promise.all([
              n.A.getIDFM(),
              n.A.getIDFA(),
              n.A.getIDFV(),
              n.A.getAdjustId(),
              o.A.getItem(Y),
            ]).then((e) => {
              let [r, n, i, s, a] = e;
              if (!U)
                try {
                  U = { ...(U = null !== a ? JSON.parse(a) : {}) };
                } catch (t) {
                  U = {};
                }
              let u = JSON.stringify((U = { ...U, ...t }));
              a !== u &&
                (o.A.setItem(Y, u),
                q({
                  idfm: r,
                  idfa: n,
                  idfv: i,
                  adjust_uid: s,
                  timestamp_ms: Date.now(),
                  params: U,
                  session_id: C,
                }));
            });
          },
          flush() {
            W();
          },
        };
      function W() {
        let t = () => {
          let e,
            r = D;
          !Object.keys(r).length || N
            ? (e = Promise.resolve())
            : ((N = !0),
              (e = Promise.all([
                n.A.getIDFM(),
                n.A.getIDFA(),
                n.A.getIDFV(),
                n.A.getUID(),
                n.A.getAdjustId(),
                n.A.fetch(),
                (function (t) {
                  let e = { ...D };
                  return (
                    t.forEach((t) => {
                      delete e[t];
                    }),
                    (D = e),
                    T.multiRemove(t)
                  );
                })(Object.keys(r)),
              ]).then((t) => {
                let [e, n, i, s, a, u] = t,
                  l = Object.fromEntries(
                    Object.entries(u).map((t) => {
                      let [e, r] = t;
                      return ["__" + e + "__", r];
                    })
                  ),
                  f = Object.entries(r),
                  h = f.filter((t) => H(t[1])),
                  p = f.filter((t) => B(t[1])),
                  v = {
                    platform: d.OS,
                    idfm: e,
                    idfa: n,
                    idfv: i,
                    uid: s,
                    adjust_uid: a,
                    app_version: l.__app_version__,
                    os_version: l.__os_version__,
                    sdk_version: j.rE,
                    session_id: C,
                  },
                  b = [];
                return (
                  h.length &&
                    b.push(
                      S.request("/collector/event", {
                        ...v,
                        events: h.map((t) => t[1]),
                      }).catch((t) => {
                        throw (
                          (console.warn(t),
                          G(h).catch(console.warn),
                          Error("Failed to send EvTruck events", { cause: t }))
                        );
                      })
                    ),
                  p.length &&
                    b.push(
                      o.A.getItem(F)
                        .then((t) => (null !== t && JSON.parse(t)) || {})
                        .catch(() => ({}))
                        .then((t) => {
                          var e, r;
                          let n = Object.assign(
                              {},
                              ...p.map((t) => ({ [t[1].name]: t[1].value })),
                              l,
                              { __sdk_version__: j.rE }
                            ),
                            i =
                              ((e = t),
                              Object.keys((r = n)).reduce(
                                (t, n) => (e[n] !== r[n] && (t[n] = r[n]), t),
                                {}
                              ));
                          return { full: Object.assign({}, t, n), diff: i };
                        })
                        .then((t) => {
                          let { diff: e, full: r } = t;
                          return c()(e)
                            ? Promise.resolve(r)
                            : S.request("/collector/user-property", {
                                ...v,
                                user_properties: e,
                              }).then(() => r);
                        })
                        .then((t) =>
                          o.A.setItem(F, JSON.stringify(t)).catch(console.warn)
                        )
                        .catch((t) => {
                          throw (
                            (console.warn(t),
                            G(p).catch(console.warn),
                            Error("Failed to send EvTruck user properties", {
                              cause: t,
                            }))
                          );
                        })
                    ),
                  Promise.all(b)
                );
              })).finally(() => {
                N = !1;
              })),
            e
              .then(() => {
                (R = 0), null !== I && clearTimeout(I), (I = setTimeout(t, z));
              })
              .catch((e) => {
                throw (
                  (++R,
                  null !== I && clearTimeout(I),
                  (I = setTimeout(t, z * R * 2)),
                  e)
                );
              });
        };
        null !== I && clearTimeout(I),
          t(),
          P?.remove?.(),
          (P = $.addEventListener("change", () => {
            null !== I && clearTimeout(I), t();
          }));
      }
      function J(t, e) {
        return D[t] ? J("0" + t, e) : ((D = { ...D, [t]: e }), T.push(t, e));
      }
      function G(t) {
        let e = t.reduce((t, e) => {
          let [r, n] = e;
          return { ...t, [r]: n };
        }, {});
        return (D = { ...D, ...e }), T.multiPush(t);
      }
    },
    38617: (t, e, r) => {
      var n = r(4131),
        i = r(80321),
        o = r(96053),
        s = r(80324),
        a = r(73065);
      t.exports = function (t, e, r) {
        var u = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return n(t);
          case "[object Boolean]":
          case "[object Date]":
            return new u(+t);
          case "[object DataView]":
            return i(t, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return a(t, r);
          case "[object Map]":
          case "[object Set]":
            return new u();
          case "[object Number]":
          case "[object String]":
            return new u(t);
          case "[object RegExp]":
            return o(t);
          case "[object Symbol]":
            return s(t);
        }
      };
    },
    41515: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => b });
      var n = r(24190),
        i = r(30115),
        o = r(16377),
        s = r.n(o),
        a = r(91926),
        u = r.n(a),
        c = r(13080),
        l = r.n(c);
      s().extend(u()), s().extend(l());
      let f = "@WRNA/SESSION_NUMBER",
        d = "@WRNA/COHORT_DATE",
        h = null,
        p = null,
        v,
        b = {
          init: (t) => (
            (v = t),
            Promise.all([
              i.A.getItem(f)
                .then((t) => {
                  let e = null !== t ? JSON.parse(t) : null;
                  return null === e ? 0 : +e + 1;
                })
                .catch(() => 0),
              Promise.all([
                i.A.getItem(d).catch(() => null),
                n.A.fetch().catch(() => null),
              ]).then((t) => {
                let [e, r] = t;
                return (
                  e ||
                  (r && "cohort_date" in r && "string" == typeof r.cohort_date
                    ? r.cohort_date
                    : null)
                );
              }),
            ])
              .then((t) => {
                let [e, r] = t;
                if (
                  ((h = e),
                  r &&
                    (p =
                      Math.floor(
                        s()
                          .duration(s().utc().set("hour", 0).diff(s()(r)))
                          .as("days")
                      ) || 0),
                  v.setUserProperty("session_number", `${h + 1}`),
                  0 === h)
                ) {
                  let t = s().utc().format("YYYY-MM-DD");
                  (p = 0),
                    v.trackEvent("session", "first", { cohort_date: t }),
                    v.setUserProperty("cohort_date", t),
                    i.A.setItem(d, t).catch(() => {
                      console.warn(
                        "Error: Set cohort date to async storage failed"
                      );
                    });
                }
                return (
                  v.trackEvent("session", "started"),
                  i.A.setItem(f, JSON.stringify(h))
                );
              })
              .catch((t) => {
                console.warn(t);
              })
          ),
          getNumber: () => h,
          getRetentionDay: () => p,
        };
    },
    42319: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      };
    },
    43459: (t) => {
      t.exports = function (t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
        return e;
      };
    },
    44273: (t, e, r) => {
      var n = r(72360),
        i = r(98961),
        o = r(19098),
        s = r(13555);
      t.exports = Object.getOwnPropertySymbols
        ? function (t) {
            for (var e = []; t; ) n(e, o(t)), (t = i(t));
            return e;
          }
        : s;
    },
    46920: (t, e, r) => {
      var n = r(76822),
        i = r(64402);
      t.exports = function (t) {
        return null != t && i(t.length) && !n(t);
      };
    },
    47018: (t, e, r) => {
      var n = r(53482),
        i = r(72570),
        o = Object.prototype,
        s = o.hasOwnProperty,
        a = o.propertyIsEnumerable;
      t.exports = n(
        (function () {
          return arguments;
        })()
      )
        ? n
        : function (t) {
            return i(t) && s.call(t, "callee") && !a.call(t, "callee");
          };
    },
    47115: (t, e, r) => {
      var n = r(77693),
        i = r(44273),
        o = r(60729);
      t.exports = function (t) {
        return n(t, o, i);
      };
    },
    48692: (t, e, r) => {
      t.exports = r(67466)(r(24023), "Promise");
    },
    49043: (t, e, r) => {
      var n = r(30809),
        i = r(9058);
      t.exports = function (t, e) {
        return t && n(e, i(e), t);
      };
    },
    49758: (t, e, r) => {
      var n = r(9086),
        i = r(11877),
        o = r(27515),
        s = o && o.isSet;
      t.exports = s ? i(s) : n;
    },
    50718: (t, e, r) => {
      t.exports = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
    },
    51029: (t, e, r) => {
      var n = r(86648),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : i.call(e, t);
      };
    },
    51516: (t, e, r) => {
      t = r.nmd(t);
      var n = r(24023),
        i = r(95829),
        o = e && !e.nodeType && e,
        s = o && t && !t.nodeType && t,
        a = s && s.exports === o ? n.Buffer : void 0,
        u = a ? a.isBuffer : void 0;
      t.exports = u || i;
    },
    51536: (t, e, r) => {
      var n = r(59789);
      t.exports = function (t) {
        var e = n(this, t).delete(t);
        return (this.size -= !!e), e;
      };
    },
    51600: (t, e, r) => {
      var n = r(99355),
        i = r(10491),
        o = r(66619);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (o || i)(),
            string: new n(),
          });
      };
    },
    51749: (t) => {
      "use strict";
      t.exports = (t) => {
        if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
        let e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype;
      };
    },
    53199: (t, e, r) => {
      var n = r(23259),
        i = Object.prototype,
        o = i.hasOwnProperty,
        s = i.toString,
        a = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        var e = o.call(t, a),
          r = t[a];
        try {
          t[a] = void 0;
          var n = !0;
        } catch (t) {}
        var i = s.call(t);
        return n && (e ? (t[a] = r) : delete t[a]), i;
      };
    },
    53482: (t, e, r) => {
      var n = r(90450),
        i = r(72570);
      t.exports = function (t) {
        return i(t) && "[object Arguments]" == n(t);
      };
    },
    53794: (t) => {
      t.exports = function (t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      };
    },
    54497: (t) => {
      t.exports = function (t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      };
    },
    55256: (t, e, r) => {
      var n = r(77693),
        i = r(19098),
        o = r(9058);
      t.exports = function (t) {
        return n(t, o, i);
      };
    },
    55310: (t, e, r) => {
      var n = r(85487),
        i = (function () {
          var t = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })();
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    57944: function (t, e, r) {
      "use strict";
      let n = r(51749),
        { hasOwnProperty: i } = Object.prototype,
        { propertyIsEnumerable: o } = Object,
        s = (t, e, r) =>
          Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            enumerable: !0,
            configurable: !0,
          }),
        a = this,
        u = { concatArrays: !1, ignoreUndefined: !1 },
        c = (t) => {
          let e = [];
          for (let r in t) i.call(t, r) && e.push(r);
          if (Object.getOwnPropertySymbols)
            for (let r of Object.getOwnPropertySymbols(t))
              o.call(t, r) && e.push(r);
          return e;
        };
      function l(t) {
        return Array.isArray(t)
          ? (function (t) {
              let e = t.slice(0, 0);
              return (
                c(t).forEach((r) => {
                  s(e, r, l(t[r]));
                }),
                e
              );
            })(t)
          : n(t)
          ? (function (t) {
              let e =
                null === Object.getPrototypeOf(t) ? Object.create(null) : {};
              return (
                c(t).forEach((r) => {
                  s(e, r, l(t[r]));
                }),
                e
              );
            })(t)
          : t;
      }
      let f = (t, e, r, n) => (
          r.forEach((r) => {
            (void 0 === e[r] && n.ignoreUndefined) ||
              (r in t && t[r] !== Object.getPrototypeOf(t)
                ? s(t, r, h(t[r], e[r], n))
                : s(t, r, l(e[r])));
          }),
          t
        ),
        d = (t, e, r) => {
          let n = t.slice(0, 0),
            o = 0;
          return (
            [t, e].forEach((e) => {
              let a = [];
              for (let r = 0; r < e.length; r++)
                i.call(e, r) &&
                  (a.push(String(r)),
                  e === t ? s(n, o++, e[r]) : s(n, o++, l(e[r])));
              n = f(
                n,
                e,
                c(e).filter((t) => !a.includes(t)),
                r
              );
            }),
            n
          );
        };
      function h(t, e, r) {
        return r.concatArrays && Array.isArray(t) && Array.isArray(e)
          ? d(t, e, r)
          : n(e) && n(t)
          ? f(t, e, c(e), r)
          : l(e);
      }
      t.exports = function (...t) {
        let e = h(l(u), (this !== a && this) || {}, u),
          r = { _: {} };
        for (let i of t)
          if (void 0 !== i) {
            if (!n(i)) throw TypeError("`" + i + "` is not an Option Object");
            r = h(r, { _: i }, e);
          }
        return r._;
      };
    },
    59218: (t, e, r) => {
      var n = r(23259),
        i = r(26398),
        o = r(31327),
        s = r(77994),
        a = 1 / 0,
        u = n ? n.prototype : void 0,
        c = u ? u.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (s(e)) return c ? c.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -a ? "-0" : r;
      };
    },
    59789: (t, e, r) => {
      var n = r(74154);
      t.exports = function (t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      };
    },
    60729: (t, e, r) => {
      var n = r(35143),
        i = r(76313),
        o = r(46920);
      t.exports = function (t) {
        return o(t) ? n(t, !0) : i(t);
      };
    },
    63996: (t, e, r) => {
      var n = r(30809),
        i = r(44273);
      t.exports = function (t, e) {
        return n(t, i(t), e);
      };
    },
    64384: (t, e, r) => {
      var n = r(86648);
      t.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    64402: (t) => {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
        );
      };
    },
    65675: (t, e, r) => {
      var n = r(51600),
        i = r(51536),
        o = r(80441),
        s = r(15749),
        a = r(5909);
      function u(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (u.prototype.clear = n),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = s),
        (u.prototype.set = a),
        (t.exports = u);
    },
    66477: (t, e, r) => {
      var n = r(10491),
        i = r(67086),
        o = r(53794),
        s = r(97155),
        a = r(93359),
        u = r(22135);
      function c(t) {
        var e = (this.__data__ = new n(t));
        this.size = e.size;
      }
      (c.prototype.clear = i),
        (c.prototype.delete = o),
        (c.prototype.get = s),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    66592: (t, e, r) => {
      var n = r(8335),
        i = r(72570);
      t.exports = function (t) {
        return i(t) && "[object Map]" == n(t);
      };
    },
    66619: (t, e, r) => {
      t.exports = r(67466)(r(24023), "Map");
    },
    66641: (t, e, r) => {
      var n = r(76822),
        i = r(55310),
        o = r(30549),
        s = r(22283),
        a = /^\[object .+?Constructor\]$/,
        u = Object.prototype,
        c = Function.prototype.toString,
        l = u.hasOwnProperty,
        f = RegExp(
          "^" +
            c
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!o(t) || i(t)) && (n(t) ? f : a).test(s(t));
      };
    },
    66738: (t, e, r) => {
      var n = r(59218);
      t.exports = function (t) {
        return null == t ? "" : n(t);
      };
    },
    66985: (t, e, r) => {
      t.exports = r(67466)(r(24023), "Set");
    },
    67024: (t, e, r) => {
      t.exports = r(42319)(Object.keys, Object);
    },
    67086: (t, e, r) => {
      var n = r(10491);
      t.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    67466: (t, e, r) => {
      var n = r(66641),
        i = r(19634);
      t.exports = function (t, e) {
        var r = i(t, e);
        return n(r) ? r : void 0;
      };
    },
    69789: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var r = 0,
          n = 0;
        return function () {
          var i = e(),
            o = 16 - (i - n);
          if (((n = i), o > 0)) {
            if (++r >= 800) return arguments[0];
          } else r = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    70198: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    70285: (t, e, r) => {
      var n = r(78354);
      t.exports = r(69789)(n);
    },
    70451: (t, e, r) => {
      var n = r(30809),
        i = r(19098);
      t.exports = function (t, e) {
        return n(t, i(t), e);
      };
    },
    71801: (t, e, r) => {
      var n = r(90450),
        i = r(98961),
        o = r(72570),
        s = Object.prototype,
        a = Function.prototype.toString,
        u = s.hasOwnProperty,
        c = a.call(Object);
      t.exports = function (t) {
        if (!o(t) || "[object Object]" != n(t)) return !1;
        var e = i(t);
        if (null === e) return !0;
        var r = u.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && a.call(r) == c;
      };
    },
    72360: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
        return t;
      };
    },
    72570: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    73065: (t, e, r) => {
      var n = r(4131);
      t.exports = function (t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length);
      };
    },
    74154: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    76313: (t, e, r) => {
      var n = r(30549),
        i = r(90707),
        o = r(33763),
        s = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return o(t);
        var e = i(t),
          r = [];
        for (var a in t)
          ("constructor" == a && (e || !s.call(t, a))) || r.push(a);
        return r;
      };
    },
    76572: (t, e, r) => {
      var n = r(77220),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g;
      t.exports = n(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(""),
          t.replace(i, function (t, r, n, i) {
            e.push(n ? i.replace(o, "$1") : r || t);
          }),
          e
        );
      });
    },
    76820: (t) => {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    76822: (t, e, r) => {
      var n = r(90450),
        i = r(30549);
      t.exports = function (t) {
        if (!i(t)) return !1;
        var e = n(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    76992: (t) => {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    77220: (t, e, r) => {
      var n = r(15090);
      t.exports = function (t) {
        var e = n(t, function (t) {
            return 500 === r.size && r.clear(), t;
          }),
          r = e.cache;
        return e;
      };
    },
    77693: (t, e, r) => {
      var n = r(72360),
        i = r(31327);
      t.exports = function (t, e, r) {
        var o = e(t);
        return i(t) ? o : n(o, r(t));
      };
    },
    77910: (t, e, r) => {
      var n = r(11304),
        i = r(12043),
        o = r(70285);
      t.exports = function (t) {
        return o(i(t, void 0, n), t + "");
      };
    },
    77994: (t, e, r) => {
      var n = r(90450),
        i = r(72570);
      t.exports = function (t) {
        return "symbol" == typeof t || (i(t) && "[object Symbol]" == n(t));
      };
    },
    78327: (t, e, r) => {
      var n = r(26398),
        i = r(98087),
        o = r(87443),
        s = r(87959),
        a = r(30809),
        u = r(11498),
        c = r(77910),
        l = r(47115);
      t.exports = c(function (t, e) {
        var r = {};
        if (null == t) return r;
        var c = !1;
        (e = n(e, function (e) {
          return (e = s(e, t)), c || (c = e.length > 1), e;
        })),
          a(t, l(t), r),
          c && (r = i(r, 7, u));
        for (var f = e.length; f--; ) o(r, e[f]);
        return r;
      });
    },
    78354: (t, e, r) => {
      var n = r(7394),
        i = r(6357),
        o = r(6380);
      t.exports = i
        ? function (t, e) {
            return i(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: n(e),
              writable: !0,
            });
          }
        : o;
    },
    79251: (t, e, r) => {
      var n = r(81203),
        i = r(11877),
        o = r(27515),
        s = o && o.isTypedArray;
      t.exports = s ? i(s) : n;
    },
    79330: (t, e, r) => {
      var n = r(31327),
        i = r(77994),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
      t.exports = function (t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return (
          !!(
            "number" == r ||
            "symbol" == r ||
            "boolean" == r ||
            null == t ||
            i(t)
          ) ||
          s.test(t) ||
          !o.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    79708: (t) => {
      t.exports = function (t, e, r) {
        var n = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (r = r > i ? i : r) < 0 && (r += i),
          (i = e > r ? 0 : (r - e) >>> 0),
          (e >>>= 0);
        for (var o = Array(i); ++n < i; ) o[n] = t[n + e];
        return o;
      };
    },
    80321: (t, e, r) => {
      var n = r(4131);
      t.exports = function (t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength);
      };
    },
    80324: (t, e, r) => {
      var n = r(23259),
        i = n ? n.prototype : void 0,
        o = i ? i.valueOf : void 0;
      t.exports = function (t) {
        return o ? Object(o.call(t)) : {};
      };
    },
    80441: (t, e, r) => {
      var n = r(59789);
      t.exports = function (t) {
        return n(this, t).get(t);
      };
    },
    80745: (t, e, r) => {
      var n = r(20875);
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1];
      };
    },
    81203: (t, e, r) => {
      var n = r(90450),
        i = r(64402),
        o = r(72570),
        s = {};
      (s["[object Float32Array]"] =
        s["[object Float64Array]"] =
        s["[object Int8Array]"] =
        s["[object Int16Array]"] =
        s["[object Int32Array]"] =
        s["[object Uint8Array]"] =
        s["[object Uint8ClampedArray]"] =
        s["[object Uint16Array]"] =
        s["[object Uint32Array]"] =
          !0),
        (s["[object Arguments]"] =
          s["[object Array]"] =
          s["[object ArrayBuffer]"] =
          s["[object Boolean]"] =
          s["[object DataView]"] =
          s["[object Date]"] =
          s["[object Error]"] =
          s["[object Function]"] =
          s["[object Map]"] =
          s["[object Number]"] =
          s["[object Object]"] =
          s["[object RegExp]"] =
          s["[object Set]"] =
          s["[object String]"] =
          s["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return o(t) && i(t.length) && !!s[n(t)];
        });
    },
    81986: (t, e, r) => {
      var n = r(30549),
        i = Object.create;
      t.exports = (function () {
        function t() {}
        return function (e) {
          if (!n(e)) return {};
          if (i) return i(e);
          t.prototype = e;
          var r = new t();
          return (t.prototype = void 0), r;
        };
      })();
    },
    83740: (t, e, r) => {
      var n = r(30809),
        i = r(60729);
      t.exports = function (t, e) {
        return t && n(e, i(e), t);
      };
    },
    83754: (t, e, r) => {
      var n = r(87959),
        i = r(23273);
      t.exports = function (t, e) {
        e = n(e, t);
        for (var r = 0, o = e.length; null != t && r < o; ) t = t[i(e[r++])];
        return r && r == o ? t : void 0;
      };
    },
    84975: (t, e, r) => {
      var n = r(83754),
        i = r(79708);
      t.exports = function (t, e) {
        return e.length < 2 ? t : n(t, i(e, 0, -1));
      };
    },
    85487: (t, e, r) => {
      t.exports = r(24023)["__core-js_shared__"];
    },
    85557: (t, e, r) => {
      var n = r(20875);
      t.exports = function (t) {
        return n(this.__data__, t) > -1;
      };
    },
    85814: (t, e, r) => {
      t.exports = r(67466)(r(24023), "DataView");
    },
    86648: (t, e, r) => {
      t.exports = r(67466)(Object, "create");
    },
    87443: (t, e, r) => {
      var n = r(87959),
        i = r(70198),
        o = r(84975),
        s = r(23273);
      t.exports = function (t, e) {
        return (e = n(e, t)), null == (t = o(t, e)) || delete t[s(i(e))];
      };
    },
    87592: (t, e, r) => {
      var n = r(72360),
        i = r(819);
      t.exports = function t(e, r, o, s, a) {
        var u = -1,
          c = e.length;
        for (o || (o = i), a || (a = []); ++u < c; ) {
          var l = e[u];
          r > 0 && o(l)
            ? r > 1
              ? t(l, r - 1, o, s, a)
              : n(a, l)
            : s || (a[a.length] = l);
        }
        return a;
      };
    },
    87959: (t, e, r) => {
      var n = r(31327),
        i = r(79330),
        o = r(76572),
        s = r(66738);
      t.exports = function (t, e) {
        return n(t) ? t : i(t, e) ? [t] : o(s(t));
      };
    },
    90306: (t, e, r) => {
      var n = r(16922),
        i = r(30549),
        o = r(77994),
        s = 0 / 0,
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (o(t)) return s;
        if (i(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = u.test(t);
        return r || c.test(t) ? l(t.slice(2), r ? 2 : 8) : a.test(t) ? s : +t;
      };
    },
    90450: (t, e, r) => {
      var n = r(23259),
        i = r(53199),
        o = r(2236),
        s = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(t)
          ? i(t)
          : o(t);
      };
    },
    90707: (t) => {
      var e = Object.prototype;
      t.exports = function (t) {
        var r = t && t.constructor;
        return t === (("function" == typeof r && r.prototype) || e);
      };
    },
    91926: function (t) {
      t.exports = (function () {
        "use strict";
        var t,
          e,
          r =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          n =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
          i = {
            years: 31536e6,
            months: 2628e6,
            days: 864e5,
            hours: 36e5,
            minutes: 6e4,
            seconds: 1e3,
            milliseconds: 1,
            weeks: 6048e5,
          },
          o = function (t) {
            return t instanceof f;
          },
          s = function (t, e, r) {
            return new f(t, r, e.$l);
          },
          a = function (t) {
            return e.p(t) + "s";
          },
          u = function (t) {
            return t < 0;
          },
          c = function (t) {
            return u(t) ? Math.ceil(t) : Math.floor(t);
          },
          l = function (t, e) {
            return t
              ? u(t)
                ? { negative: !0, format: "" + Math.abs(t) + e }
                : { negative: !1, format: "" + t + e }
              : { negative: !1, format: "" };
          },
          f = (function () {
            function u(t, e, r) {
              var o = this;
              if (
                ((this.$d = {}),
                (this.$l = r),
                void 0 === t && ((this.$ms = 0), this.parseFromMilliseconds()),
                e)
              )
                return s(t * i[a(e)], this);
              if ("number" == typeof t)
                return (this.$ms = t), this.parseFromMilliseconds(), this;
              if ("object" == typeof t)
                return (
                  Object.keys(t).forEach(function (e) {
                    o.$d[a(e)] = t[e];
                  }),
                  this.calMilliseconds(),
                  this
                );
              if ("string" == typeof t) {
                var u = t.match(n);
                if (u) {
                  var c = u.slice(2).map(function (t) {
                    return null != t ? Number(t) : 0;
                  });
                  return (
                    (this.$d.years = c[0]),
                    (this.$d.months = c[1]),
                    (this.$d.weeks = c[2]),
                    (this.$d.days = c[3]),
                    (this.$d.hours = c[4]),
                    (this.$d.minutes = c[5]),
                    (this.$d.seconds = c[6]),
                    this.calMilliseconds(),
                    this
                  );
                }
              }
              return this;
            }
            var f = u.prototype;
            return (
              (f.calMilliseconds = function () {
                var t = this;
                this.$ms = Object.keys(this.$d).reduce(function (e, r) {
                  return e + (t.$d[r] || 0) * i[r];
                }, 0);
              }),
              (f.parseFromMilliseconds = function () {
                var t = this.$ms;
                (this.$d.years = c(t / 31536e6)),
                  (t %= 31536e6),
                  (this.$d.months = c(t / 2628e6)),
                  (t %= 2628e6),
                  (this.$d.days = c(t / 864e5)),
                  (t %= 864e5),
                  (this.$d.hours = c(t / 36e5)),
                  (t %= 36e5),
                  (this.$d.minutes = c(t / 6e4)),
                  (t %= 6e4),
                  (this.$d.seconds = c(t / 1e3)),
                  (t %= 1e3),
                  (this.$d.milliseconds = t);
              }),
              (f.toISOString = function () {
                var t = l(this.$d.years, "Y"),
                  e = l(this.$d.months, "M"),
                  r = +this.$d.days || 0;
                this.$d.weeks && (r += 7 * this.$d.weeks);
                var n = l(r, "D"),
                  i = l(this.$d.hours, "H"),
                  o = l(this.$d.minutes, "M"),
                  s = this.$d.seconds || 0;
                this.$d.milliseconds &&
                  ((s += this.$d.milliseconds / 1e3),
                  (s = Math.round(1e3 * s) / 1e3));
                var a = l(s, "S"),
                  u =
                    t.negative ||
                    e.negative ||
                    n.negative ||
                    i.negative ||
                    o.negative ||
                    a.negative,
                  c = i.format || o.format || a.format ? "T" : "",
                  f =
                    (u ? "-" : "") +
                    "P" +
                    t.format +
                    e.format +
                    n.format +
                    c +
                    i.format +
                    o.format +
                    a.format;
                return "P" === f || "-P" === f ? "P0D" : f;
              }),
              (f.toJSON = function () {
                return this.toISOString();
              }),
              (f.format = function (t) {
                var n = {
                  Y: this.$d.years,
                  YY: e.s(this.$d.years, 2, "0"),
                  YYYY: e.s(this.$d.years, 4, "0"),
                  M: this.$d.months,
                  MM: e.s(this.$d.months, 2, "0"),
                  D: this.$d.days,
                  DD: e.s(this.$d.days, 2, "0"),
                  H: this.$d.hours,
                  HH: e.s(this.$d.hours, 2, "0"),
                  m: this.$d.minutes,
                  mm: e.s(this.$d.minutes, 2, "0"),
                  s: this.$d.seconds,
                  ss: e.s(this.$d.seconds, 2, "0"),
                  SSS: e.s(this.$d.milliseconds, 3, "0"),
                };
                return (t || "YYYY-MM-DDTHH:mm:ss").replace(r, function (t, e) {
                  return e || String(n[t]);
                });
              }),
              (f.as = function (t) {
                return this.$ms / i[a(t)];
              }),
              (f.get = function (t) {
                var e = this.$ms,
                  r = a(t);
                return (
                  "milliseconds" === r
                    ? (e %= 1e3)
                    : (e = "weeks" === r ? c(e / i[r]) : this.$d[r]),
                  e || 0
                );
              }),
              (f.add = function (t, e, r) {
                var n;
                return (
                  (n = e ? t * i[a(e)] : o(t) ? t.$ms : s(t, this).$ms),
                  s(this.$ms + n * (r ? -1 : 1), this)
                );
              }),
              (f.subtract = function (t, e) {
                return this.add(t, e, !0);
              }),
              (f.locale = function (t) {
                var e = this.clone();
                return (e.$l = t), e;
              }),
              (f.clone = function () {
                return s(this.$ms, this);
              }),
              (f.humanize = function (e) {
                return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e);
              }),
              (f.valueOf = function () {
                return this.asMilliseconds();
              }),
              (f.milliseconds = function () {
                return this.get("milliseconds");
              }),
              (f.asMilliseconds = function () {
                return this.as("milliseconds");
              }),
              (f.seconds = function () {
                return this.get("seconds");
              }),
              (f.asSeconds = function () {
                return this.as("seconds");
              }),
              (f.minutes = function () {
                return this.get("minutes");
              }),
              (f.asMinutes = function () {
                return this.as("minutes");
              }),
              (f.hours = function () {
                return this.get("hours");
              }),
              (f.asHours = function () {
                return this.as("hours");
              }),
              (f.days = function () {
                return this.get("days");
              }),
              (f.asDays = function () {
                return this.as("days");
              }),
              (f.weeks = function () {
                return this.get("weeks");
              }),
              (f.asWeeks = function () {
                return this.as("weeks");
              }),
              (f.months = function () {
                return this.get("months");
              }),
              (f.asMonths = function () {
                return this.as("months");
              }),
              (f.years = function () {
                return this.get("years");
              }),
              (f.asYears = function () {
                return this.as("years");
              }),
              u
            );
          })(),
          d = function (t, e, r) {
            return t
              .add(e.years() * r, "y")
              .add(e.months() * r, "M")
              .add(e.days() * r, "d")
              .add(e.hours() * r, "h")
              .add(e.minutes() * r, "m")
              .add(e.seconds() * r, "s")
              .add(e.milliseconds() * r, "ms");
          };
        return function (r, n, i) {
          (t = i),
            (e = i().$utils()),
            (i.duration = function (t, e) {
              return s(t, { $l: i.locale() }, e);
            }),
            (i.isDuration = o);
          var a = n.prototype.add,
            u = n.prototype.subtract;
          (n.prototype.add = function (t, e) {
            return o(t) ? d(this, t, 1) : a.bind(this)(t, e);
          }),
            (n.prototype.subtract = function (t, e) {
              return o(t) ? d(this, t, -1) : u.bind(this)(t, e);
            });
        };
      })();
    },
    93359: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    94014: (t, e, r) => {
      var n = r(24023);
      t.exports = function () {
        return n.Date.now();
      };
    },
    95829: (t) => {
      t.exports = function () {
        return !1;
      };
    },
    96053: (t) => {
      var e = /\w*$/;
      t.exports = function (t) {
        var r = new t.constructor(t.source, e.exec(t));
        return (r.lastIndex = t.lastIndex), r;
      };
    },
    97155: (t) => {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    98087: (t, e, r) => {
      var n = r(66477),
        i = r(4321),
        o = r(18839),
        s = r(49043),
        a = r(83740),
        u = r(3762),
        c = r(43459),
        l = r(70451),
        f = r(63996),
        d = r(55256),
        h = r(47115),
        p = r(8335),
        v = r(34935),
        b = r(38617),
        m = r(24781),
        w = r(31327),
        g = r(51516),
        y = r(20800),
        x = r(30549),
        _ = r(49758),
        $ = r(9058),
        j = r(60729),
        O = "[object Arguments]",
        S = "[object Function]",
        A = "[object Object]",
        k = {};
      (k[O] =
        k["[object Array]"] =
        k["[object ArrayBuffer]"] =
        k["[object DataView]"] =
        k["[object Boolean]"] =
        k["[object Date]"] =
        k["[object Float32Array]"] =
        k["[object Float64Array]"] =
        k["[object Int8Array]"] =
        k["[object Int16Array]"] =
        k["[object Int32Array]"] =
        k["[object Map]"] =
        k["[object Number]"] =
        k[A] =
        k["[object RegExp]"] =
        k["[object Set]"] =
        k["[object String]"] =
        k["[object Symbol]"] =
        k["[object Uint8Array]"] =
        k["[object Uint8ClampedArray]"] =
        k["[object Uint16Array]"] =
        k["[object Uint32Array]"] =
          !0),
        (k["[object Error]"] = k[S] = k["[object WeakMap]"] = !1),
        (t.exports = function t(e, r, M, T, E, D) {
          var I,
            P = 1 & r,
            U = 2 & r,
            N = 4 & r;
          if ((M && (I = E ? M(e, T, E, D) : M(e)), void 0 !== I)) return I;
          if (!x(e)) return e;
          var C = w(e);
          if (C) {
            if (((I = v(e)), !P)) return c(e, I);
          } else {
            var z = p(e),
              R = z == S || "[object GeneratorFunction]" == z;
            if (g(e)) return u(e, P);
            if (z == A || z == O || (R && !E)) {
              if (((I = U || R ? {} : m(e)), !P))
                return U ? f(e, a(I, e)) : l(e, s(I, e));
            } else {
              if (!k[z]) return E ? e : {};
              I = b(e, z, P);
            }
          }
          D || (D = new n());
          var V = D.get(e);
          if (V) return V;
          D.set(e, I),
            _(e)
              ? e.forEach(function (n) {
                  I.add(t(n, r, M, n, e, D));
                })
              : y(e) &&
                e.forEach(function (n, i) {
                  I.set(i, t(n, r, M, i, e, D));
                });
          var Y = N ? (U ? h : d) : U ? j : $,
            F = C ? void 0 : Y(e);
          return (
            i(F || e, function (n, i) {
              F && (n = e[(i = n)]), o(I, i, t(n, r, M, i, e, D));
            }),
            I
          );
        });
    },
    98961: (t, e, r) => {
      t.exports = r(42319)(Object.getPrototypeOf, Object);
    },
    99136: (t) => {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= !!e), e;
      };
    },
    99355: (t, e, r) => {
      var n = r(64384),
        i = r(99136),
        o = r(32425),
        s = r(51029),
        a = r(13797);
      function u(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (u.prototype.clear = n),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = s),
        (u.prototype.set = a),
        (t.exports = u);
    },
  },
]);
